! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "90d82504-748e-5f03-bef6-2b42e7bc5c80")
    } catch (e) {}
}();
(self.webpackChunktemplate_ui = self.webpackChunktemplate_ui || []).push([
    [150], {
        w2ul: (e, t, n) => {
            "use strict";
            n.d(t, {
                op: () => A,
                Qs: () => S
            });
            var r = n("DTvD"),
                i = n.n(r),
                o = n("3Bw6"),
                a = n.n(o),
                s = n("5BvR");

            function c(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                const n = Object.keys(e),
                    r = Object.keys(t),
                    i = n.length;
                if (r.length !== i) return !1;
                for (let o = 0; o < i; o++) {
                    const r = n[o];
                    if (e[r] !== t[r] || !Object.prototype.hasOwnProperty.call(t, r)) return !1
                }
                return !0
            }
            var u = n("aWzz"),
                l = n.n(u);
            const f = l().oneOfType([l().string, l().number]),
                d = {
                    all: l().bool,
                    grid: l().bool,
                    aural: l().bool,
                    braille: l().bool,
                    handheld: l().bool,
                    print: l().bool,
                    projection: l().bool,
                    screen: l().bool,
                    tty: l().bool,
                    tv: l().bool,
                    embossed: l().bool
                },
                p = {
                    orientation: l().oneOf(["portrait", "landscape"]),
                    scan: l().oneOf(["progressive", "interlace"]),
                    aspectRatio: l().string,
                    deviceAspectRatio: l().string,
                    height: f,
                    deviceHeight: f,
                    width: f,
                    deviceWidth: f,
                    color: l().bool,
                    colorIndex: l().bool,
                    monochrome: l().bool,
                    resolution: f,
                    type: Object.keys(d)
                },
                {
                    type: h,
                    ...g
                } = p,
                v = {
                    minAspectRatio: l().string,
                    maxAspectRatio: l().string,
                    minDeviceAspectRatio: l().string,
                    maxDeviceAspectRatio: l().string,
                    minHeight: f,
                    maxHeight: f,
                    minDeviceHeight: f,
                    maxDeviceHeight: f,
                    minWidth: f,
                    maxWidth: f,
                    minDeviceWidth: f,
                    maxDeviceWidth: f,
                    minColor: l().number,
                    maxColor: l().number,
                    minColorIndex: l().number,
                    maxColorIndex: l().number,
                    minMonochrome: l().number,
                    maxMonochrome: l().number,
                    minResolution: f,
                    maxResolution: f,
                    ...g
                };
            var m = {
                all: { ...d,
                    ...v
                },
                types: d,
                matchers: p,
                features: v
            };
            const y = e => {
                    const t = [];
                    return Object.keys(m.all).forEach((n => {
                        const r = e[n];
                        null != r && t.push(((e, t) => {
                            const n = (0, s.A)(e);
                            return "number" === typeof t && (t = `${t}px`), !0 === t ? n : !1 === t ? `not ${n}` : `(${n}: ${t})`
                        })(n, r))
                    })), t.join(" and ")
                },
                b = (0, r.createContext)(void 0),
                w = e => {
                    if (!e) return;
                    return Object.keys(e).reduce(((t, n) => (t[(0, s.A)(n)] = e[n], t)), {})
                },
                E = () => {
                    const e = (0, r.useRef)(!1);
                    return (0, r.useEffect)((() => {
                        e.current = !0
                    }), []), e.current
                },
                _ = e => {
                    const t = () => (e => e.query || y(e))(e),
                        [n, i] = (0, r.useState)(t);
                    return (0, r.useEffect)((() => {
                        const e = t();
                        n !== e && i(e)
                    }), [e]), n
                },
                R = (e, t, n) => {
                    const i = (e => {
                            const t = (0, r.useContext)(b),
                                n = () => w(e) || w(t),
                                [i, o] = (0, r.useState)(n);
                            return (0, r.useEffect)((() => {
                                const e = n();
                                c(i, e) || o(e)
                            }), [e, t]), i
                        })(t),
                        o = _(e);
                    if (!o) throw new Error("Invalid or missing MediaQuery!");
                    const s = ((e, t) => {
                            const n = () => a()(e, t || {}, !!t),
                                [i, o] = (0, r.useState)(n),
                                s = E();
                            return (0, r.useEffect)((() => {
                                if (s) {
                                    const e = n();
                                    return o(e), () => {
                                        e && e.dispose()
                                    }
                                }
                            }), [e, t]), i
                        })(o, i),
                        u = (e => {
                            const [t, n] = (0, r.useState)(e.matches);
                            return (0, r.useEffect)((() => {
                                const t = e => {
                                    n(e.matches)
                                };
                                return e.addListener(t), n(e.matches), () => {
                                    e.removeListener(t)
                                }
                            }), [e]), t
                        })(s),
                        l = E();
                    return (0, r.useEffect)((() => {
                        l && n && n(u)
                    }), [u]), (0, r.useEffect)((() => () => {
                        s && s.dispose()
                    }), []), u
                };
            var x = n("qrIQ"),
                A = i().useLayoutEffect,
                S = function() {
                    var e = function() {
                        var e = i().useState(x.lq),
                            t = e[0],
                            n = e[1];
                        return i().useEffect((function() {
                            return n(!0)
                        }), []), t
                    }();
                    if (x.lq) return {
                        isClient: e,
                        isMobile: !0,
                        isTablet: !1
                    };
                    var t = R({
                            query: "screen and (max-width: 767px)"
                        }),
                        n = R({
                            query: "screen and (max-width: 1023px)"
                        });
                    return {
                        isClient: e,
                        isMobile: t,
                        isTablet: e && !t && n
                    }
                }
        },
        "1sVx": (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => a
            });
            var r = n("DTvD"),
                i = n.n(r),
                o = void 0,
                a = function(e) {
                    var t = e.fn,
                        n = e.time,
                        a = void 0 === n ? 33.33 : n,
                        s = e.deps,
                        c = void 0 === s ? [] : s,
                        u = i().useRef(),
                        l = i().useRef(t);
                    i().useEffect((function() {
                        l.current = t
                    }), [t]);
                    var f = (0, r.useCallback)((function() {
                        u.current && clearTimeout(u.current)
                    }), []);
                    i().useEffect((function() {
                        return f
                    }), c);
                    var d = (0, r.useMemo)((function() {
                        return u.current && clearTimeout(u.current),
                            function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                u.current && clearTimeout(u.current), u.current = setTimeout((function() {
                                    var t = l.current;
                                    t && t.apply(o, e), u.current = void 0
                                }), a)
                            }
                    }), [a]);
                    return {
                        debounceFn: d,
                        clearTimer: f
                    }
                }
        },
        "3Bw6": (e, t, n) => {
            "use strict";
            var r = n("mkfS").Y,
                i = window.matchMedia;

            function o(e, t, n) {
                var o, a = this;

                function s(e) {
                    a.matches = e.matches, a.media = e.media
                }
                i && !n && (o = i.call(window, e)), o ? (this.matches = o.matches, this.media = o.media, o.addListener(s)) : (this.matches = r(e, t), this.media = e), this.addListener = function(e) {
                    o && o.addListener(e)
                }, this.removeListener = function(e) {
                    o && o.removeListener(e)
                }, this.dispose = function() {
                    o && o.removeListener(s)
                }
            }
            e.exports = function(e, t, n) {
                return new o(e, t, n)
            }
        },
        W1Th: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("9xbI"),
                s = (0, i.forwardRef)((function(e, t) {
                    return o().createElement(a.A, (0, r.__assign)({}, e, {
                        ref: t
                    }))
                }));
            s.displayName = "Box";
            const c = s
        },
        qx9L: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("DTvD");
            const i = (0, r.createContext)({
                prefixCls: "bn",
                getI18n: function(e) {
                    return e
                }
            })
        },
        "7zlU": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("O94r"),
                s = n.n(a),
                c = n("W1Th"),
                u = n("qx9L");
            const l = function(e) {
                var t = (0, i.useContext)(u.A).prefixCls,
                    n = e.color,
                    a = (e.name, e.viewBox),
                    l = void 0 === a ? "0 0 96 96" : a,
                    f = e.children,
                    d = (0, r.__rest)(e, ["color", "name", "viewBox", "children"]),
                    p = s()("".concat(t, "-svg"), e.className),
                    h = {
                        as: "svg",
                        viewBox: l,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: n
                    };
                return o().createElement(c.A, (0, r.__assign)({}, d, h, {
                    className: p,
                    children: f
                }))
            }
        },
        "/sF7": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("7zlU");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            }
        },
        "2Bze": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("7zlU");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            }
        },
        AGKK: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => r
            });
            const r = n("W1Th").A
        },
        "49xm": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("OgCp"),
                s = n("qrIQ"),
                c = n("O94r"),
                u = n.n(c),
                l = n("AGKK"),
                f = n("Prrn"),
                d = function(e) {
                    return {
                        animationDelay: "".concat(50 * e, "ms")
                    }
                },
                p = function(e) {
                    var t = (0, f.r)().prefixCls,
                        n = u()("".concat(t, "-spinner__nezha"), e.className);
                    return o().createElement(l.Ay, (0, r.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, e, {
                        className: n
                    }), o().createElement(l.Ay, {
                        className: "nezha-line",
                        style: d(1)
                    }), o().createElement(l.Ay, {
                        className: "nezha-line",
                        style: d(2)
                    }), o().createElement(l.Ay, {
                        className: "nezha-line",
                        style: d(3)
                    }), o().createElement(l.Ay, {
                        className: "nezha-line",
                        style: d(4)
                    }))
                };
            p.displayName = "Spinner";
            const h = p;
            var g = (0, i.forwardRef)((function(e, t) {
                var n, c = e.variant,
                    d = void 0 === c ? "primary" : c,
                    p = e.sz,
                    g = void 0 === p ? "middle" : p,
                    v = e.inactive,
                    m = e.loading,
                    y = e.onClick,
                    b = e.subLine,
                    w = e.children,
                    E = e.textVariant,
                    _ = void 0 === E ? "text" === d ? "yellow" : "black" : E,
                    R = e.iconVariant,
                    x = void 0 === R ? "line" : R,
                    A = e["aria-label"],
                    S = (0, r.__rest)(e, ["variant", "sz", "inactive", "loading", "onClick", "subLine", "children", "textVariant", "iconVariant", "aria-label"]),
                    C = (0, f.r)(),
                    T = C.prefixCls,
                    k = C.isRTL,
                    I = "".concat(T, "-button"),
                    N = "text" === d || "info" === d,
                    M = "icon" === d,
                    L = u()(I, ((n = {})["".concat(I, "-rtl")] = !!k, n["".concat(I, "__").concat(d)] = !!d, n["".concat(I, "__").concat(d, "__").concat(_)] = N && !!_, n["".concat(I, "__").concat(d, "__").concat(x)] = M && !!x, n["data-size-".concat(g)] = !!g, n["data-size-".concat(g, "-two-line")] = !!g && !!b, n["data-two-line"] = !!b, n.inactive = !!v, n), e.className),
                    B = !v && "function" === typeof y,
                    O = s.lq ? "none" : e.type,
                    P = B ? y : void 0,
                    j = (0, i.useMemo)((function() {
                        return m ? o().createElement(h, null) : o().createElement(o().Fragment, null, w, b && o().createElement(l.Ay, null, b))
                    }), [w, i.useMemo, m]),
                    D = {
                        "aria-label": (0, i.useMemo)((function() {
                            return A || ("string" === typeof w ? w : b && "string" === typeof b ? b : "button")
                        }), [A, w, b]),
                        "aria-disabled": v || m ? "true" : void 0,
                        "aria-busy": m ? "true" : void 0,
                        role: "button"
                    };
                return o().createElement(a.A, (0, r.__assign)({
                    key: m ? "loading" : "content"
                }, D, S, {
                    children: j,
                    ref: t,
                    type: O,
                    className: L,
                    onClick: P
                }))
            }));
            g.displayName = "Button";
            const v = g
        },
        QRnj: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("O94r"),
                s = n.n(a),
                c = n("0PRs"),
                u = n("qrIQ"),
                l = n("Prrn"),
                f = n("GmLw").hp,
                d = "/bapi/fe/resource/image",
                p = "https://www.binance.com",
                h = n("AGKK"),
                g = function(e) {
                    var t, n = e.isRound,
                        a = e.isMask,
                        g = e.mode,
                        v = e.responsive,
                        m = e.src,
                        y = (0, r.__rest)(e, ["isRound", "isMask", "mode", "responsive", "src"]),
                        b = (0, i.useState)(!1),
                        w = b[0],
                        E = b[1],
                        _ = (0, l.r)().prefixCls,
                        R = s()("".concat(_, "-lazy-img"), ((t = {
                            "data-mask": !!a,
                            "data-round": !!n,
                            "data-lazy-load": !!e.lazyLoad || !!e.isBackground
                        })["data-mode-".concat(null === g || void 0 === g ? void 0 : g.replace(/\s+/g, "-"))] = !!g, t), e.className),
                        x = (0, i.useCallback)((function() {
                            return E(!0)
                        }), []),
                        A = (0, i.useMemo)((function() {
                            return !(v && (v.mobile || v.tablet || v.desktop)) || w ? {
                                default: m
                            } : Object.keys(v).reduce((function(e, t) {
                                return e[t] = function(e, t) {
                                    var n = f.from(e).toString("base64");
                                    try {
                                        var r = new URL(d, "https://www.binance.com");
                                        return r.searchParams.set("image", n), Object.entries(t).forEach((function(e) {
                                            var t = e[0],
                                                n = e[1];
                                            void 0 !== n && r.searchParams.set(t, String(n))
                                        })), "".concat(r.pathname).concat(r.search)
                                    } catch (i) {
                                        return "".concat(d, "?image=").concat(n, "&w=").concat(t.w, "&h=").concat(t.h)
                                    }
                                }(m, v[t]), e
                            }), {})
                        }), [m, v, w]),
                        S = {
                            role: "img",
                            "aria-label": "image",
                            alt: "image"
                        };
                    if ("default" in A) return o().createElement(c.A, (0, r.__assign)({}, S, y, {
                        className: R,
                        mode: g,
                        src: A.default
                    }));
                    var C = A.mobile,
                        T = A.tablet,
                        k = A.desktop;
                    if (u.lq) {
                        var I = env.API_HOST || p,
                            N = "".concat(I).concat(C || T || k);
                        return o().createElement(c.A, (0, r.__assign)({}, S, {
                            onError: x
                        }, y, {
                            className: R,
                            mode: g,
                            src: N
                        }))
                    }
                    return o().createElement(h.Ay, {
                        as: "picture"
                    }, o().createElement(h.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 1024px)",
                        srcSet: k
                    }), T && o().createElement(h.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 768px)",
                        srcSet: T
                    }), C && o().createElement(h.Ay, {
                        as: "source",
                        media: "only screen and (max-width: 767px)",
                        srcSet: C
                    }), o().createElement(c.A, (0, r.__assign)({}, S, {
                        onError: x
                    }, y, {
                        className: R,
                        mode: g,
                        src: k || m
                    })))
                };
            g.displayName = "Image";
            const v = g
        },
        Ma35: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => S
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("O94r"),
                s = n.n(a),
                c = n("AGKK"),
                u = n("hTvQ"),
                l = n.n(u),
                f = n("hyZw"),
                d = n("qrIQ"),
                p = n("X2nG"),
                h = n("Prrn");
            const g = function(e) {
                var t, n = e.visible,
                    i = e.inner,
                    a = e.maskClose,
                    u = void 0 === a || a,
                    g = e.needSEO,
                    v = e.enablePortal,
                    m = e.portalNode,
                    y = e.scrollFree,
                    b = e.wrapperProps,
                    w = e.onClose,
                    E = void 0 === w ? f.es : w,
                    _ = e.enableScrollSpace,
                    R = void 0 === _ || _,
                    x = (0, h.r)(),
                    A = x.prefixCls,
                    S = x.isRTL,
                    C = "".concat(A, "-mask"),
                    T = s()(C, ((t = {})["".concat(C, "-rtl")] = !!S, t["".concat(C, "-inner")] = !!i, t), e.className);
                o().useEffect((function() {
                    return d.lq || i || y || !(null === document || void 0 === document ? void 0 : document.body) ? f.es : (document.body.style.overflow = n ? "hidden" : "auto", document.body.classList.toggle("".concat(A, "-mask-body"), R && n && document.body.scrollHeight > window.innerHeight), function() {
                        (null === document || void 0 === document ? void 0 : document.body) && (document.body.style.overflow = "auto", document.body.classList.remove("".concat(A, "-mask-body")))
                    })
                }), [n, i, y, A, R]);
                var k = o().useCallback((function(e) {
                    v || e.stopPropagation();
                    var t = e.target,
                        n = e.currentTarget,
                        r = d.lq ? t.id === n.id : t === n;
                    u && r && E()
                }), [E, u, v]);
                var I = o().createElement(p.A, {
                        className: T,
                        needSEO: g,
                        visible: n,
                        onClick: k,
                        children: e.children
                    }),
                    N = b ? o().createElement(c.Ay, (0, r.__assign)({}, b), I) : I;
                return !d.lq && v ? l().createPortal(N, m instanceof HTMLElement ? m : document.body) : N
            };
            var v = n("/sF7"),
                m = n("2Bze"),
                y = n("1sVx"),
                b = n("ZIpe"),
                w = function(e) {
                    var t, n = e.direction,
                        i = e.className,
                        a = (0, r.__rest)(e, ["direction", "className"]),
                        u = (0, h.r)().prefixCls,
                        l = "".concat(u, "-drawer-handle"),
                        f = "".concat(l, "-icon"),
                        d = s()(l, ((t = {})["data-dir-".concat(n)] = !!n, t), i);
                    return o().createElement(c.Ay, (0, r.__assign)({}, {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "drawer handle"
                    }, a, {
                        className: d
                    }), o().createElement(c.Ay, {
                        className: f,
                        "aria-hidden": "true"
                    }))
                },
                E = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? "left" : t,
                        i = e.children,
                        a = e.onClose,
                        s = e.maskClz,
                        c = e.wrapClz,
                        u = (0, r.__rest)(e, ["direction", "children", "onClose", "maskClz", "wrapClz"]),
                        l = {
                            "aria-modal": !0,
                            role: "dialog",
                            "aria-label": e.title || "drawer"
                        };
                    return o().createElement(g, (0, r.__assign)({}, u, {
                        onClose: a,
                        className: s
                    }), o().createElement(b.A, (0, r.__assign)({}, l, {
                        direction: n,
                        className: c,
                        onClose: a
                    }), o().createElement(w, {
                        direction: n
                    }), i))
                };
            E.displayName = "Drawer";
            const _ = E;
            var R = function(e) {
                var t, n = e.direction,
                    a = void 0 === n ? "left" : n,
                    u = e.className,
                    l = e.children,
                    f = e.size,
                    d = void 0 === f ? "auto" : f,
                    p = e.once,
                    v = e.onVisibleChange,
                    m = e.draggable,
                    b = e.onClose,
                    w = (0, r.__rest)(e, ["direction", "className", "children", "size", "once", "onVisibleChange", "draggable", "onClose"]),
                    E = (0, h.r)().prefixCls,
                    R = "".concat(E, "-drawer"),
                    x = s()("".concat(R, "-wrap"), ((t = {})["data-size-".concat(d)] = "auto" !== d, t["data-dir-".concat(a)] = !!a, t["data-draggable"] = !!m, t)),
                    A = s()(R, u),
                    S = (0, y.d)({
                        fn: v,
                        time: 50
                    }).debounceFn,
                    C = (0, i.useCallback)((function() {
                        null === b || void 0 === b || b(), S(!1)
                    }), [b, S]),
                    T = (0, i.useCallback)((function() {
                        p && C()
                    }), [p, C]);
                if (m) return o().createElement(_, (0, r.__assign)({
                    onClose: C,
                    maskClz: A,
                    wrapClz: x
                }, e));
                var k = {
                    "aria-modal": !0,
                    role: "dialog",
                    "aria-label": e.title || "drawer"
                };
                return o().createElement(g, (0, r.__assign)({}, w, {
                    onClose: C,
                    className: A
                }), o().createElement(c.Ay, (0, r.__assign)({}, k, {
                    className: x,
                    children: l,
                    onClick: T
                })))
            };
            R.displayName = "Drawer";
            const x = R;
            var A = function(e) {
                var t, n = e.children,
                    i = e.className,
                    a = e.responsive,
                    u = e.direction,
                    l = void 0 === u ? "bottom" : u,
                    f = e.modalSize,
                    d = void 0 === f ? "small" : f,
                    p = (0, r.__rest)(e, ["children", "className", "responsive", "direction", "modalSize"]),
                    v = (0, h.r)(),
                    m = v.prefixCls,
                    y = v.isMobile,
                    b = "".concat(m, "-modal"),
                    w = s()(b, i),
                    E = s()("".concat(b, "-wrap"), ((t = {})["data-size-".concat(d)] = !!d, t));
                if (a && y) return o().createElement(x, (0, r.__assign)({}, p, {
                    direction: l,
                    className: i,
                    children: n
                }));
                var _ = {
                    role: "dialog",
                    tabIndex: 0,
                    "aria-modal": !0,
                    "aria-label": p["aria-label"] || "modal"
                };
                return o().createElement(g, (0, r.__assign)({}, p, {
                    className: w
                }), o().createElement(c.Ay, (0, r.__assign)({}, _, {
                    className: E,
                    children: n
                })))
            };
            A.Header = function(e) {
                var t, n, i = e.showPre,
                    a = e.prev,
                    u = e.onPreClick,
                    l = void 0 === u ? f.es : u,
                    d = e.showNext,
                    p = e.next,
                    g = e.onNextClick,
                    y = void 0 === g ? f.es : g,
                    b = (0, r.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick"]),
                    w = (0, h.r)().prefixCls,
                    E = "".concat(w, "-modal-header"),
                    _ = s()(E, ((t = {})["".concat(E, "-pre")] = !!i, t["".concat(E, "-pre-hidden")] = "hidden" === i, t), e.className);
                return i && void 0 === a && (a = o().createElement(v.A, {
                    name: "ArrowLeftF",
                    color: "PrimaryText"
                })), o().createElement(c.Ay, (0, r.__assign)({}, b, {
                    className: _
                }), i ? o().createElement(c.Ay, {
                    className: s()("".concat(E, "-prev")),
                    onClick: l,
                    children: a,
                    role: "button",
                    "aria-label": "Previous"
                }) : null, o().createElement(c.Ay, {
                    className: "".concat(E, "-main"),
                    children: e.children
                }), d ? o().createElement(c.Ay, {
                    className: s()("".concat(E, "-next"), (n = {}, n["".concat(E, "-next-hidden")] = "hidden" === d, n)),
                    onClick: y,
                    children: p || o().createElement(m.A, {
                        name: "CloseF",
                        color: "PrimaryText"
                    }),
                    role: "button",
                    "aria-label": p ? "Next" : "Close"
                }) : null)
            }, A.Content = function(e) {
                var t = (0, h.r)().prefixCls,
                    n = "".concat(t, "-modal-content"),
                    i = s()(n, e.className);
                return o().createElement(c.Ay, (0, r.__assign)({}, e, {
                    className: i
                }))
            }, A.Footer = function(e) {
                var t, n = e.layout,
                    i = (0, r.__rest)(e, ["layout"]),
                    a = (0, h.r)().prefixCls,
                    u = "".concat(a, "-modal-footer"),
                    l = s()(u, ((t = {})["".concat(u, "-").concat(n)] = !!n, t), i.className);
                return o().createElement(c.Ay, (0, r.__assign)({}, i, {
                    className: l
                }))
            };
            const S = A
        },
        Prrn: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => f,
                r: () => l
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("w2ul"),
                s = n("qx9L"),
                c = n("qrIQ"),
                u = n("H2//"),
                l = function() {
                    return (0, i.useContext)(s.A)
                };
            const f = function(e) {
                var t = e.prefixCls,
                    n = void 0 === t ? "bn" : t,
                    l = e.iconConfig,
                    f = e.i18n,
                    d = e.children,
                    p = e.isElectron,
                    h = e.isMobile,
                    g = (0, r.__rest)(e, ["prefixCls", "iconConfig", "i18n", "children", "isElectron", "isMobile"]);
                if (c.lq && (!l || !l.path)) throw new Error("iconConfig must be required in ConfigProvider");
                var v = (0, a.Qs)(),
                    m = (0, i.useCallback)((function(e, t) {
                        var n = f ? f[e] : null,
                            i = t || {},
                            o = i.defaultValue,
                            a = (0, r.__rest)(i, ["defaultValue"]);
                        return (0, u.uf)(n || o, a)
                    }), [f]),
                    y = (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, g), p ? (0, r.__assign)((0, r.__assign)({}, v), {
                        isMobile: !1,
                        isTablet: !1
                    }) : (0, r.__assign)((0, r.__assign)({}, v), void 0 !== h && {
                        isMobile: h
                    })), {
                        prefixCls: n,
                        iconConfig: l,
                        getI18n: m
                    });
                return o().createElement(s.A.Provider, {
                    value: y,
                    children: d
                })
            }
        },
        pMlP: (e, t, n) => {
            "use strict";
            n.d(t, {
                w: () => E,
                A: () => _
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("OKx2"),
                s = n("eh2c"),
                c = n("O94r"),
                u = n.n(c),
                l = n("7I3l"),
                f = n.n(l),
                d = n("2OVm"),
                p = n("UkUV"),
                h = Math.floor,
                g = function(e) {
                    return h(100 * e) / 100
                },
                v = !(0, a.dg)() || {
                    passive: !0,
                    capture: !0
                },
                m = o().Fragment;
            const y = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.count = 0, n.timer = -1, n.pulling = !1, n.unmount = !1, n.pullElement = null, n.onMouse = function(e) {
                        var t = n.props.autoplay,
                            r = e.type;
                        e.currentTarget === e.target && t && ("mouseenter" === r ? n.pause() : n.autoplay())
                    }, n.onResize = (0, s.nF)((function() {
                        n.unmount || n.switchSlide(n.state.activeIndex, !1)
                    }), 100 / 6), n.autoplay = function() {
                        var e = n.props.interval;
                        n.pulling || -1 !== n.timer || (n.timer = setTimeout((function() {
                            n.unmount || (n.switchNext(!0), n.timer = -1, n.autoplay())
                        }), e))
                    }, n.pause = function() {
                        -1 !== n.timer && (clearTimeout(n.timer), n.timer = -1)
                    }, n.getTranslateIndex = function(e) {
                        var t = n.getCircular(),
                            r = n.props.slidesPerGroup;
                        return t ? e + r : e
                    }, n.indexGetter = function(e) {
                        var t = n.count,
                            r = n.getCircular(),
                            i = n.props,
                            o = i.slidesPerGroup,
                            a = i.slidesPerView,
                            s = h(a),
                            c = Math.max(0, t - s),
                            u = e,
                            l = e;
                        return u > 0 && o > 1 && (u += 1), r ? u < 0 ? l = u % t + t : u > c && (l = u % t) : (u < 0 ? u = 0 : u > c && (u = c), l = u), {
                            current: h(u / o) * o,
                            activeIndex: h(l / o) * o
                        }
                    }, n.switchPrev = function(e) {
                        var t = n.props.slidesPerGroup,
                            r = n.state.activeIndex;
                        n.switchSlide(r - t, e)
                    }, n.switchNext = function(e) {
                        var t = n.props.slidesPerGroup,
                            r = n.state.activeIndex;
                        n.switchSlide(r + t, e)
                    }, n.switchSlide = function(e, t) {
                        var r = n.props.onSlide,
                            i = n.indexGetter(e),
                            o = i.current,
                            a = i.activeIndex,
                            s = n.calculateDistance({
                                translateIndex: n.getTranslateIndex(o)
                            }),
                            c = s.translateX,
                            u = s.translateY,
                            l = function() {
                                !n.unmount && n.pullElement && (n.setState({
                                    activeIndex: a
                                }), n.pullElement.animateTo(c, u).then((function() {
                                    r(a), o !== a && n.switchSlide(a, !1)
                                })))
                            };
                        t || [null, void 0].indexOf(t) > -1 ? l() : (n.pullElement.setTranslate(c, u), d.A.checkViewport(), setTimeout((function() {
                            return l()
                        }), 100))
                    }, n.calculateDistance = function(e) {
                        var t = n.isLtr(),
                            r = n.pxGetter(n.props.gap),
                            i = n.isHorizontal(),
                            o = n.getPadOffset(),
                            a = o.width,
                            s = o.height,
                            c = t ? e.translateIndex : -e.translateIndex,
                            u = g((+a + r) * c),
                            l = g((+s + r) * c);
                        return {
                            translateX: i ? -u : 0,
                            translateY: i ? 0 : -l
                        }
                    };
                    var r = t.initialSlide,
                        i = t.circular;
                    if (t.autoplay && !i) throw new Error("autoplay must be circular");
                    return n.state = {
                        activeIndex: r,
                        isClient: !1
                    }, n
                }
                return (0, r.__extends)(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        isClient: !0
                    }), this.initPullElement(), this.onResize(), this.eventConvert(!0)
                }, t.prototype.eventConvert = function(e) {
                    var t = this.$refs.target,
                        n = e ? "addEventListener" : "removeEventListener";
                    if (window[n]("resize", this.onResize, v), n in t) {
                        var r = t.parentNode;
                        r[n]("mouseenter", this.onMouse, v), r[n]("mouseleave", this.onMouse, v)
                    }
                }, t.prototype.componentDidUpdate = function(e) {
                    var t = this.props,
                        n = t.slidesPerView,
                        r = t.autoplay,
                        i = t.circular;
                    if (r && !i) throw new Error("autoplay must be circular");
                    o().Children.count(e.children) === this.count && this.props.dir === e.dir && this.props.vertical === e.vertical || (console.log("re initPullElement"), this.pullElement && this.pullElement.destroy(), this.initPullElement()), i === e.circular && r === e.autoplay && n === e.slidesPerView || (this[r ? "autoplay" : "pause"](), this.onResize())
                }, t.prototype.componentWillUnmount = function() {
                    this.pause(), this.eventConvert(), this.unmount = !0, this.pullElement && this.pullElement.destroy()
                }, t.prototype.getPadOffset = function() {
                    var e = this.props.slidesPerView,
                        t = this.getGapPx(),
                        n = this.isHorizontal(),
                        r = this.$refs.target || {
                            clientWidth: 0,
                            clientHeight: 0
                        },
                        i = r.clientWidth,
                        o = r.clientHeight,
                        a = (e - 1) * t;
                    return {
                        height: n ? 0 : g((o - a) / e),
                        width: n ? g((i - a) / e) : 0
                    }
                }, t.prototype.initPullElement = function() {
                    var e, t = this,
                        n = this.props,
                        r = n.autoplay,
                        i = n.initialSlide,
                        o = this.isHorizontal(),
                        a = this.isLtr();

                    function s() {
                        t.pulling = !0, t.pause()
                    }

                    function c(e) {
                        var n = e.translateX,
                            i = e.translateY;
                        this.preventDefault();
                        var s = t.state.activeIndex,
                            c = t.calculateDistance({
                                translateIndex: t.getTranslateIndex(s)
                            }),
                            u = c.translateX,
                            l = c.translateY,
                            f = o ? n - u : i - l;
                        f > 20 ? t[a ? "switchPrev" : "switchNext"](!0) : f < -20 ? t[a ? "switchNext" : "switchPrev"](!0) : t.switchSlide(s, !0), t.pulling = !1, r && t.autoplay()
                    }
                    var u = o ? "Left" : "Up",
                        l = o ? "Right" : "Down";
                    this.pullElement = new(f())(((e = {
                        wait: !1,
                        target: this.$refs.target,
                        transitionProperty: "transform"
                    })["onPull".concat(u)] = s, e["onPull".concat(l)] = s, e["onPull".concat(u, "End")] = c, e["onPull".concat(l, "End")] = c, e.translateZ = this.props.translateZ, e)), this.pullElement.init(), this.switchSlide(i, !1), r && this.autoplay()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.className,
                        r = t.prefixCls,
                        i = void 0 === r ? "bn" : r,
                        a = t.slidesPerView,
                        s = t.slidesPerGroup,
                        c = t.children,
                        l = t.customPagination,
                        f = t.style,
                        d = this.state.activeIndex,
                        p = o().Children.count(c);
                    this.count = p;
                    var h = o().Children.toArray(c),
                        v = this.getCircular(),
                        m = "".concat(i, "-swiper");
                    if (v) {
                        var y = h.slice(0, s),
                            b = h.slice(-s);
                        h.push.apply(h, y), h.unshift.apply(h, b)
                    }
                    var w, E = this.isLtr(),
                        _ = this.getGapPx(),
                        R = this.isHorizontal(),
                        x = g((a - 1) * _ / a),
                        A = h.map((function(e, t) {
                            var n = d === t;
                            v && (n = 0 === d ? t === s || t === p + s : d === p - 1 ? t === p + (s - 1) || t === s - 1 : d === t - s);
                            var r = {
                                width: "calc(".concat(g(100 / a), "% - ").concat(x, "px)")
                            };
                            r[R ? E ? "marginRight" : "marginLeft" : "marginBottom"] = "".concat(_, "px");
                            var i = u()("".concat(m, "-item"), {
                                active: n
                            });
                            return o().createElement("div", {
                                key: t,
                                className: i,
                                style: r,
                                children: e
                            })
                        }));
                    return "function" === typeof l && (w = l({
                        total: p,
                        currentIndex: d,
                        onClick: function(t) {
                            return e.switchSlide(t, !0)
                        }
                    })), o().createElement("div", {
                        className: u()(m, {
                            vertical: !R
                        }, n),
                        style: f
                    }, o().createElement("div", {
                        className: "".concat(m, "-wrapper"),
                        ref: this.setRefs("target"),
                        children: A
                    }), w)
                }, t.prototype.getCircular = function() {
                    var e = this.props,
                        t = e.circular,
                        n = e.slidesPerGroup;
                    return this.state.isClient && t && this.count > n
                }, t.prototype.isHorizontal = function() {
                    return !this.props.vertical
                }, t.prototype.isLtr = function() {
                    return "ltr" === this.props.dir
                }, t.prototype.getGapPx = function() {
                    return parseFloat(this.props.gap)
                }, t.prototype.pxGetter = function(e) {
                    return parseFloat(e)
                }, t.defaultProps = {
                    gap: "0px",
                    initialSlide: 0,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    autoplay: !1,
                    interval: 5e3,
                    vertical: !1,
                    translateZ: !0,
                    onSlide: function() {
                        return !1
                    },
                    dir: "ltr"
                }, t
            }(p.A);
            var b = n("Prrn"),
                w = (0, i.forwardRef)((function(e, t) {
                    var n = (0, b.r)(),
                        i = n.prefixCls,
                        a = n.isRTL ? "rtl" : "ltr";
                    return o().createElement(y, (0, r.__assign)({}, e, {
                        ref: t,
                        dir: a,
                        prefixCls: i
                    }))
                })),
                E = (0, i.forwardRef)((function(e, t) {
                    return o().createElement(m, (0, r.__assign)({}, e, {
                        ref: t
                    }))
                }));
            const _ = w
        },
        X2nG: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("qrIQ"),
                s = n("zGhu"),
                c = n("O94r"),
                u = n.n(c),
                l = n("AGKK"),
                f = n("Prrn"),
                d = a.lq ? 100 : 50;
            const p = function(e) {
                var t = e.visible,
                    n = e.needSEO,
                    c = (0, r.__rest)(e, ["visible", "needSEO"]),
                    p = o().useRef(),
                    h = (0, i.useState)(!1),
                    g = h[0],
                    v = h[1],
                    m = (0, f.r)().prefixCls;
                o().useEffect((function() {
                    return clearTimeout(p.current), p.current = setTimeout((function() {
                            v(!!t), p.current = null
                        }), t ? d : 250),
                        function() {
                            return clearTimeout(p.current)
                        }
                }), [t]), o().useEffect((function() {
                    !a.lq && t && setTimeout(s.A.checkViewport, 375)
                }), [t]);
                var y = u()("".concat(m, "-trans"), {
                    "data-seo": n && !t && !g,
                    "data-show": t && g,
                    "data-leave": !t && g
                }, e.className);
                return t || g || n ? o().createElement(l.Ay, (0, r.__assign)({}, c, {
                    className: y
                })) : null
            }
        },
        zGhu: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => g
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n("OKx2"),
                a = n("eh2c"),
                s = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.$refs = {}, t.setRefs = function(e) {
                            return function(n) {
                                t.$refs[e] = n
                            }
                        }, t
                    }
                    return (0, r.__extends)(t, e), t
                }(i.PureComponent);
            var c = function(e) {
                    return "function" === typeof e
                },
                u = function(e) {
                    return e && "object" === typeof e
                },
                l = function(e, t) {
                    var n = u(e) && !(0, i.isValidElement)(e),
                        r = u(t) && !(0, i.isValidElement)(t);
                    if (n && n === r) {
                        var o = Object.keys(e),
                            a = Object.keys(t);
                        if (o.length === a.length) return Number(o.every((function(n) {
                            return l(e[n], t[n])
                        })))
                    } else {
                        if (c(e) && c(t)) return !0;
                        if ((0, i.isValidElement)(e) && (0, i.isValidElement)(t)) return !0
                    }
                    return e === t
                },
                f = {
                    offset: 0,
                    x: !0
                },
                d = function(e) {
                    function t(n) {
                        var i = e.call(this, n) || this;
                        return i.unmount = !1, i.index = t.count, i.checkUpdate = function() {
                            return i.$refs.root && !i.unmount
                        }, i.checkViewport = function(e) {
                            var n = i.$refs.root,
                                a = i.props,
                                s = a.check,
                                c = a.lazyLoad;
                            if (i.checkUpdate()) {
                                var u = (0, r.__assign)((0, r.__assign)({}, f), s),
                                    l = u.offset,
                                    d = u.x;
                                !c || (0, o.cH)(n, l, d) ? (delete t.instances[i.index], i.inViewPort(e), "componentDidMount" === e && console.warn("Warning: This element is already in the viewport on first render. Lazy loading may not be necessary. Consider removing the lazyLoad prop for better performance and to avoid unnecessary JavaScript execution.", "\nElement:", n)) : t.instances[i.index] = i
                            }
                        }, i.inViewPort = function(e) {
                            return e
                        }, i.equalUpdate = function(e, t) {
                            l(e, t) || i.checkViewport()
                        }, t.count += 1, i
                    }
                    return (0, r.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = (t.check, (0, r.__rest)(t, ["check"])),
                            i = (e.check, (0, r.__rest)(e, ["check"]));
                        this.equalUpdate(i, n)
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
                            var n = e[t];
                            n && n.checkViewport()
                        }))
                    }, t
                }(s),
                p = (0, a.nF)(d.checkViewport, 200),
                h = !(0, o.dg)() || {
                    passive: !0,
                    capture: !0
                };
            window.window === window && (window.addEventListener("resize", p, h), document.addEventListener("scroll", p, h), document.addEventListener("transitionend", p, h));
            const g = d
        },
        Hkrp: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => u
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("VP0d"),
                a = n("tEf9"),
                s = n("DTvD"),
                c = function(e) {
                    setTimeout(e, 0)
                };

            function u(e, t, n) {
                var u = (0, s.useRef)(0),
                    l = function() {
                        var e = (0, s.useRef)(!1);
                        return (0, s.useEffect)((function() {
                            return e.current = !0,
                                function() {
                                    e.current = !1
                                }
                        }), []), (0, s.useCallback)((function() {
                            return e.current
                        }), [])
                    }(),
                    f = (0, o.A)((0, s.useState)(Date.now()), 2),
                    d = f[0],
                    p = f[1],
                    h = (0, o.A)((0, s.useState)((0, r.A)({
                        loading: !0,
                        updateTime: Date.now()
                    }, n)), 2),
                    g = h[0],
                    v = h[1];
                return (0, s.useEffect)((function() {
                    var t = ++u.current;
                    !1 === g.loading && v((0, i.A)((0, r.A)({}, g), {
                        loading: !0
                    })), e().then((function(e) {
                        var r = null === e || "undefined" === typeof e ? null === n || void 0 === n ? void 0 : n.value : e;
                        l() && t === u.current && c((function() {
                            v({
                                value: r,
                                loading: !1,
                                error: null,
                                updateTime: Date.now()
                            })
                        }))
                    })).catch((function(e) {
                        l() && t === u.current && c((function() {
                            v((0, i.A)((0, r.A)({}, n), {
                                loading: !1,
                                error: e,
                                updateTime: Date.now()
                            }))
                        }))
                    }))
                }), (0, a.A)(t).concat([d])), (0, i.A)((0, r.A)({}, g), {
                    onRefresh: function() {
                        return p(Date.now)
                    }
                })
            }
        },
        "dn+i": (e, t, n) => {
            "use strict";
            n.d(t, {
                Rm: () => o
            });
            n("DTvD");
            var r = n("e8ni"),
                i = function(e) {
                    return e.ssrStore || {}
                },
                o = function() {
                    return (0, r.d4)(i)
                }
        },
        zG1I: (e, t, n) => {
            "use strict";
            n.d(t, {
                Si: () => l,
                d$: () => f,
                ez: () => h,
                fL: () => m,
                rU: () => d
            });
            var r = n("uqCI"),
                i = n("888e"),
                o = n("2PCm"),
                a = n("wQcX"),
                s = n("VKAp"),
                c = {},
                u = [],
                l = ["channel", "sourceTime", "wsResp", "wsReqId", "reqTime", "reqAction", "service", "tag", "reqArgs", "wsReqId", "respTime", "reqAction", "respError", "errorCode", "errorMsg", "resp"],
                f = function(e) {
                    Object.assign(c, e)
                };

            function d(e) {
                return !u.includes(e) && (u.push(e), !0)
            }

            function p(e) {
                var t = c[e.key];
                return t ? Object.assign(e, t) : null
            }
            var h = function(e) {
                    return u.map(p).filter(Boolean).filter((function(t) {
                        return !e || Object.keys(e).every((function(n) {
                            return t[n] === e[n]
                        }))
                    }))
                },
                g = function(e) {
                    (0, o.A)(n, e);
                    var t = (0, s.A)(n);

                    function n(e) {
                        var o;
                        return (0, i.A)(this, n), (o = t.call(this, e)).name = o.constructor.name, Error.captureStackTrace && Error.captureStackTrace((0, r.A)(o), o.constructor), o
                    }
                    return n
                }((0, a.A)(Error)),
                v = {};

            function m(e) {
                if (!v[e]) {
                    v[e] = !0;
                    var t = setTimeout((function() {
                        throw clearTimeout(t), new g(e)
                    }), 1e3)
                }
            }
        },
        Oxdw: (e, t, n) => {
            "use strict";
            n.d(t, {
                H: () => r
            });
            var r = function() {
                var e = !1,
                    t = new Set,
                    n = new Set,
                    r = function() {
                        t.forEach((function(e) {
                            e()
                        })), t.clear()
                    },
                    i = function(e) {
                        r(), e && (n.forEach((function(e) {
                            t.add(e())
                        })), n.clear())
                    };
                return {
                    setReady: function(t) {
                        i(e = t)
                    },
                    onReady: function(t) {
                        n.add(t), e && i(e)
                    },
                    clean: function() {
                        n.clear(), r()
                    }
                }
            }
        },
        s5vj: (e, t, n) => {
            "use strict";
            n.d(t, {
                FL: () => l,
                Lx: () => s,
                PD: () => f,
                ZI: () => c,
                tI: () => u
            });
            var r = new Set(["ws_start", "ws_connected", "ws_closed", "ws_error", "get_token", "get_token_error", "privateRequest"]),
                i = new Set(["ws_error", "ws_start", "ws_connected", "ws_closed", "publicRequest"]),
                o = new Set(["ws_start", "ws_connected", "ws_closed", "ws_error", "get_token", "get_token_error", "friendlyRequest"]),
                a = [],
                s = function(e) {
                    a.push({
                        status: e,
                        timeStamp: Date.now()
                    })
                },
                c = function() {
                    return a.filter((function(e) {
                        var t = e.status;
                        return r.has(t)
                    })).slice(-20)
                },
                u = function() {
                    return a.filter((function(e) {
                        var t = e.status;
                        return i.has(t)
                    })).slice(-20)
                },
                l = function() {
                    return a.filter((function(e) {
                        var t = e.status;
                        return o.has(t)
                    })).slice(-20)
                },
                f = function() {
                    return a.slice(-20)
                }
        },
        EYt1: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => i,
                j: () => r
            });
            var r = function() {},
                i = function(e) {
                    return Math.pow(2, e)
                }
        },
        ZWZn: (e, t, n) => {
            "use strict";
            n.d(t, {
                yS: () => ee,
                hT: () => K,
                OX: () => q,
                iq: () => M,
                HL: () => N,
                $s: () => U,
                gf: () => J,
                UE: () => Q,
                Vl: () => Z,
                XK: () => D,
                P4: () => j,
                lZ: () => G,
                Lq: () => $
            });
            var r, i = n("sViW"),
                o = n("BK7R"),
                a = n("VP0d"),
                s = n("Pz56"),
                c = n.n(s),
                u = n("VA12"),
                l = n("EYt1"),
                f = n("s5vj"),
                d = n("Oxdw"),
                p = n("2URn"),
                h = n("Mc4e"),
                g = n("zG1I");

            function v(e) {
                switch (e) {
                    case 1:
                    case "SERVICE_REQ":
                        return r.SERVICE_REQ;
                    case 2:
                    case "SUBSCRIBE":
                        return r.SUBSCRIBE;
                    case 3:
                    case "UNSUBSCRIBE":
                        return r.UNSUBSCRIBE;
                    case 4:
                    case "LIST_CHANNELS":
                        return r.LIST_CHANNELS;
                    case 5:
                    case "REFRESH_TOKEN":
                        return r.REFRESH_TOKEN;
                    case 6:
                    case "LAST_TOKEN_TIME":
                        return r.LAST_TOKEN_TIME;
                    case 7:
                    case "CLEAR_TOKEN":
                        return r.CLEAR_TOKEN;
                    case 8:
                    case "PUBLIC_SERVICE_REQ":
                        return r.PUBLIC_SERVICE_REQ;
                    case 9:
                    case "FRIENDLY_SERVICE_REQ":
                        return r.FRIENDLY_SERVICE_REQ;
                    case 10:
                    case "PING":
                        return r.PING;
                    case 11:
                    case "REFRESH_UUID":
                        return r.REFRESH_UUID;
                    case 12:
                    case "REFRESH_LANG":
                        return r.REFRESH_LANG;
                    default:
                        return r.UNRECOGNIZED
                }
            }

            function m(e) {
                switch (e) {
                    case r.SERVICE_REQ:
                        return "SERVICE_REQ";
                    case r.SUBSCRIBE:
                        return "SUBSCRIBE";
                    case r.UNSUBSCRIBE:
                        return "UNSUBSCRIBE";
                    case r.LIST_CHANNELS:
                        return "LIST_CHANNELS";
                    case r.REFRESH_TOKEN:
                        return "REFRESH_TOKEN";
                    case r.LAST_TOKEN_TIME:
                        return "LAST_TOKEN_TIME";
                    case r.CLEAR_TOKEN:
                        return "CLEAR_TOKEN";
                    case r.PUBLIC_SERVICE_REQ:
                        return "PUBLIC_SERVICE_REQ";
                    case r.FRIENDLY_SERVICE_REQ:
                        return "FRIENDLY_SERVICE_REQ";
                    case r.PING:
                        return "PING";
                    case r.REFRESH_UUID:
                        return "REFRESH_UUID";
                    case r.REFRESH_LANG:
                        return "REFRESH_LANG";
                    case r.UNRECOGNIZED:
                    default:
                        return "UNRECOGNIZED"
                }
            }! function(e) {
                e[e.SERVICE_REQ = 1] = "SERVICE_REQ", e[e.SUBSCRIBE = 2] = "SUBSCRIBE", e[e.UNSUBSCRIBE = 3] = "UNSUBSCRIBE", e[e.LIST_CHANNELS = 4] = "LIST_CHANNELS", e[e.REFRESH_TOKEN = 5] = "REFRESH_TOKEN", e[e.LAST_TOKEN_TIME = 6] = "LAST_TOKEN_TIME", e[e.CLEAR_TOKEN = 7] = "CLEAR_TOKEN", e[e.PUBLIC_SERVICE_REQ = 8] = "PUBLIC_SERVICE_REQ", e[e.FRIENDLY_SERVICE_REQ = 9] = "FRIENDLY_SERVICE_REQ", e[e.PING = 10] = "PING", e[e.REFRESH_UUID = 11] = "REFRESH_UUID", e[e.REFRESH_LANG = 12] = "REFRESH_LANG", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
            }(r || (r = {})), g.d$({
                wsReqId: {
                    number: 1,
                    scope: "WsReq"
                },
                reqTime: {
                    number: 2,
                    scope: "WsReq"
                },
                reqAction: {
                    number: 3,
                    scope: "WsReq"
                },
                service: {
                    number: 4,
                    scope: "WsReq"
                },
                tag: {
                    number: 5,
                    scope: "WsReq"
                },
                reqArgs: {
                    number: 100,
                    scope: "WsReq"
                },
                trivialReq: {
                    number: 101,
                    scope: "WsReq"
                },
                balanceValuationReq: {
                    number: 102,
                    scope: "WsReq"
                },
                kycStatusReq: {
                    number: 103,
                    scope: "WsReq"
                },
                capitalConfigReq: {
                    number: 104,
                    scope: "WsReq"
                },
                getSelectorReq: {
                    number: 105,
                    scope: "WsReq"
                },
                getSubSelectorReq: {
                    number: 106,
                    scope: "WsReq"
                },
                isolatedMarginAccountReq: {
                    number: 107,
                    scope: "WsReq"
                },
                getAccountUserConfigReq: {
                    number: 108,
                    scope: "WsReq"
                },
                getAssetPortfolioReq: {
                    number: 109,
                    scope: "WsReq"
                },
                walletBalanceReq: {
                    number: 110,
                    scope: "WsReq"
                },
                getBuyAndSellSelectorReq: {
                    number: 111,
                    scope: "WsReq"
                },
                getBuyAndSellSubSelectorReq: {
                    number: 112,
                    scope: "WsReq"
                },
                getOpenGridsReq: {
                    number: 113,
                    scope: "WsReq"
                },
                getOrderConfirmationReq: {
                    number: 114,
                    scope: "WsReq"
                },
                getUserCommissionReq: {
                    number: 115,
                    scope: "WsReq"
                },
                inboxMsgReadReq: {
                    number: 116,
                    scope: "WsReq"
                },
                inboxMsgReq: {
                    number: 117,
                    scope: "WsReq"
                },
                inboxUnReadReq: {
                    number: 118,
                    scope: "WsReq"
                },
                faceSdkVerifyReq: {
                    number: 119,
                    scope: "WsReq"
                },
                buyRedesignQueryCryptoListReq: {
                    number: 120,
                    scope: "WsReq"
                },
                buyRedesignQueryFiatListReq: {
                    number: 121,
                    scope: "WsReq"
                },
                otcGetQuoteReq: {
                    number: 122,
                    scope: "WsReq"
                },
                activePositionsReq: {
                    number: 123,
                    scope: "WsReq"
                },
                loanableAssetReq: {
                    number: 124,
                    scope: "WsReq"
                },
                trialCalcForRepaymentReq: {
                    number: 125,
                    scope: "WsReq"
                },
                coinConfigReq: {
                    number: 126,
                    scope: "WsReq"
                },
                buwWalletBalanceReq: {
                    number: 127,
                    scope: "WsReq"
                },
                walletBalanceV2Req: {
                    number: 129,
                    scope: "WsReq"
                },
                faceRecognitionReq: {
                    number: 130,
                    scope: "WsReq"
                }
            });
            var y = {
                key: "wsReq",
                encode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new h.fI,
                        n = [];
                    return "" !== e.wsReqId && t.uint32(10).string(e.wsReqId), 0 !== e.reqTime && t.uint32(16).int64(e.reqTime), 1 !== e.reqAction && t.uint32(24).int32(e.reqAction), void 0 !== e.service && "" !== e.service && t.uint32(34).string(e.service), void 0 !== e.tag && "" !== e.tag && t.uint32(42).string(e.tag), void 0 !== e.reqArgs && t.uint32(802).string(e.reqArgs), g.ez({
                        scope: "WsReq"
                    }).forEach((function(r) {
                        var i = e[r.key];
                        if (void 0 !== i) {
                            n.push(r.key);
                            var o = (r.number << 3 | 2) >>> 0;
                            r.encode(i, t.uint32(o).fork()).join()
                        }
                    })), Object.keys(e).forEach((function(e) {
                        n.includes(e) || g.Si.includes(e) || g.fL("WsHttpSdkLiteMissMsg: key is " + e)
                    })), t
                },
                decode: function(e, t) {
                    for (var n = (0, p.A)(e, h.V5) ? e : new h.V5(e), r = void 0 === t ? n.len : n.pos + t, i = {
                            wsReqId: "",
                            reqTime: 0,
                            reqAction: 1,
                            service: "",
                            tag: "",
                            reqArgs: void 0,
                            trivialReq: void 0,
                            balanceValuationReq: void 0,
                            kycStatusReq: void 0,
                            capitalConfigReq: void 0,
                            getSelectorReq: void 0,
                            getSubSelectorReq: void 0,
                            isolatedMarginAccountReq: void 0,
                            getAccountUserConfigReq: void 0,
                            getAssetPortfolioReq: void 0,
                            walletBalanceReq: void 0,
                            getBuyAndSellSelectorReq: void 0,
                            getBuyAndSellSubSelectorReq: void 0,
                            getOpenGridsReq: void 0,
                            getOrderConfirmationReq: void 0,
                            getUserCommissionReq: void 0,
                            inboxMsgReadReq: void 0,
                            inboxMsgReq: void 0,
                            inboxUnReadReq: void 0,
                            faceSdkVerifyReq: void 0,
                            buyRedesignQueryCryptoListReq: void 0,
                            buyRedesignQueryFiatListReq: void 0,
                            otcGetQuoteReq: void 0,
                            activePositionsReq: void 0,
                            loanableAssetReq: void 0,
                            trialCalcForRepaymentReq: void 0,
                            coinConfigReq: void 0,
                            buwWalletBalanceReq: void 0,
                            walletBalanceV2Req: void 0,
                            faceRecognitionReq: void 0
                        }; n.pos < r;) {
                        var o = n.uint32();
                        switch (o >>> 3) {
                            case 1:
                                if (10 !== o) break;
                                i.wsReqId = n.string();
                                continue;
                            case 2:
                                if (16 !== o) break;
                                i.reqTime = b(n.int64());
                                continue;
                            case 3:
                                if (24 !== o) break;
                                i.reqAction = n.int32();
                                continue;
                            case 4:
                                if (34 !== o) break;
                                i.service = n.string();
                                continue;
                            case 5:
                                if (42 !== o) break;
                                i.tag = n.string();
                                continue;
                            case 100:
                                if (802 !== o) break;
                                i.reqArgs = n.string();
                                continue
                        }
                        var a = o >>> 3,
                            s = g.ez({
                                scope: "WsReq"
                            }).find((function(e) {
                                return e.number === a
                            }));
                        if (s) {
                            i[s.key] = s.decode(n, n.uint32());
                            break
                        }
                        if (4 === (7 & o) || 0 === o) break;
                        g.fL("WsHttpSdkLiteMissMsg: id is " + (o >>> 3)), n.skip(7 & o)
                    }
                    return i
                },
                fromJSON: function(e) {
                    return (0, o.A)({
                        wsReqId: w(e.wsReqId) ? globalThis.String(e.wsReqId) : "",
                        reqTime: w(e.reqTime) ? globalThis.Number(e.reqTime) : 0,
                        reqAction: w(e.reqAction) ? v(e.reqAction) : 1,
                        service: w(e.service) ? globalThis.String(e.service) : "",
                        tag: w(e.tag) ? globalThis.String(e.tag) : "",
                        reqArgs: w(e.reqArgs) ? globalThis.String(e.reqArgs) : void 0
                    }, g.ez({
                        scope: "WsReq"
                    }).reduce((function(t, n) {
                        var r = e[n.key];
                        return void 0 !== r && (t[n.key] = w(r) ? n.fromJSON(r) : void 0), t
                    }), {}))
                },
                toJSON: function(e) {
                    var t = {};
                    return "" !== e.wsReqId && (t.wsReqId = e.wsReqId), 0 !== e.reqTime && (t.reqTime = Math.round(e.reqTime)), 1 !== e.reqAction && (t.reqAction = m(e.reqAction)), void 0 !== e.service && "" !== e.service && (t.service = e.service), void 0 !== e.tag && "" !== e.tag && (t.tag = e.tag), void 0 !== e.reqArgs && (t.reqArgs = e.reqArgs), g.ez({
                        scope: "WsReq"
                    }).forEach((function(n) {
                        var r = n.key;
                        void 0 !== e[r] && (t[r] = n.toJSON(e[r]))
                    })), t
                },
                create: function(e) {
                    return y.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var t, n, r, i, o, a, s = {
                        wsReqId: "",
                        reqTime: 0,
                        reqAction: 1,
                        service: "",
                        tag: "",
                        reqArgs: void 0,
                        trivialReq: void 0,
                        balanceValuationReq: void 0,
                        kycStatusReq: void 0,
                        capitalConfigReq: void 0,
                        getSelectorReq: void 0,
                        getSubSelectorReq: void 0,
                        isolatedMarginAccountReq: void 0,
                        getAccountUserConfigReq: void 0,
                        getAssetPortfolioReq: void 0,
                        walletBalanceReq: void 0,
                        getBuyAndSellSelectorReq: void 0,
                        getBuyAndSellSubSelectorReq: void 0,
                        getOpenGridsReq: void 0,
                        getOrderConfirmationReq: void 0,
                        getUserCommissionReq: void 0,
                        inboxMsgReadReq: void 0,
                        inboxMsgReq: void 0,
                        inboxUnReadReq: void 0,
                        faceSdkVerifyReq: void 0,
                        buyRedesignQueryCryptoListReq: void 0,
                        buyRedesignQueryFiatListReq: void 0,
                        otcGetQuoteReq: void 0,
                        activePositionsReq: void 0,
                        loanableAssetReq: void 0,
                        trialCalcForRepaymentReq: void 0,
                        coinConfigReq: void 0,
                        buwWalletBalanceReq: void 0,
                        walletBalanceV2Req: void 0,
                        faceRecognitionReq: void 0
                    };
                    return s.wsReqId = null !== (t = e.wsReqId) && void 0 !== t ? t : "", s.reqTime = null !== (n = e.reqTime) && void 0 !== n ? n : 0, s.reqAction = null !== (r = e.reqAction) && void 0 !== r ? r : 1, s.service = null !== (i = e.service) && void 0 !== i ? i : "", s.tag = null !== (o = e.tag) && void 0 !== o ? o : "", s.reqArgs = null !== (a = e.reqArgs) && void 0 !== a ? a : void 0, g.ez({
                        scope: "WsReq"
                    }).forEach((function(t) {
                        var n = t.key;
                        s[n] = void 0 !== e[n] && null !== e[n] ? t.fromPartial(e[n]) : void 0
                    })), s
                }
            };

            function b(e) {
                var t = globalThis.Number(e.toString());
                if (t > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
                if (t < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
                return t
            }

            function w(e) {
                return null !== e && void 0 !== e
            }
            var E;

            function _(e) {
                switch (e) {
                    case 1:
                    case "INVALID_TOKEN":
                        return E.INVALID_TOKEN;
                    case 2:
                    case "INVALID_REQUEST":
                        return E.INVALID_REQUEST;
                    case 3:
                    case "SERVICE_ERROR":
                        return E.SERVICE_ERROR;
                    default:
                        return E.UNRECOGNIZED
                }
            }! function(e) {
                e[e.INVALID_TOKEN = 1] = "INVALID_TOKEN", e[e.INVALID_REQUEST = 2] = "INVALID_REQUEST", e[e.SERVICE_ERROR = 3] = "SERVICE_ERROR", e[e.UNRECOGNIZED = -1] = "UNRECOGNIZED"
            }(E || (E = {})), g.d$({
                wsReqId: {
                    number: 1,
                    scope: "WsResp"
                },
                respTime: {
                    number: 2,
                    scope: "WsResp"
                },
                reqAction: {
                    number: 3,
                    scope: "WsResp"
                },
                respError: {
                    number: 4,
                    scope: "WsResp"
                },
                errorCode: {
                    number: 5,
                    scope: "WsResp"
                },
                errorMsg: {
                    number: 6,
                    scope: "WsResp"
                },
                resp: {
                    number: 100,
                    scope: "WsResp"
                },
                trivialResp: {
                    number: 101,
                    scope: "WsResp"
                },
                balanceValuationResp: {
                    number: 102,
                    scope: "WsResp"
                },
                kycStatusResp: {
                    number: 103,
                    scope: "WsResp"
                },
                capitalConfigResp: {
                    number: 104,
                    scope: "WsResp"
                },
                getSelectorResp: {
                    number: 105,
                    scope: "WsResp"
                },
                getSubSelectorResp: {
                    number: 106,
                    scope: "WsResp"
                },
                isolatedMarginAccountResp: {
                    number: 107,
                    scope: "WsResp"
                },
                getAccountUserConfigResp: {
                    number: 108,
                    scope: "WsResp"
                },
                getAssetPortfolioResp: {
                    number: 109,
                    scope: "WsResp"
                },
                walletBalanceResp: {
                    number: 110,
                    scope: "WsResp"
                },
                getBuyAndSellSelectorResp: {
                    number: 111,
                    scope: "WsResp"
                },
                getBuyAndSellSubSelectorResp: {
                    number: 112,
                    scope: "WsResp"
                },
                getOpenGridsResp: {
                    number: 113,
                    scope: "WsResp"
                },
                getOrderConfirmationResp: {
                    number: 114,
                    scope: "WsResp"
                },
                getUserCommissionResp: {
                    number: 115,
                    scope: "WsResp"
                },
                inboxMsgReadResp: {
                    number: 116,
                    scope: "WsResp"
                },
                inboxMsgResp: {
                    number: 117,
                    scope: "WsResp"
                },
                inboxUnReadResp: {
                    number: 118,
                    scope: "WsResp"
                },
                faceSdkVerifyResp: {
                    number: 119,
                    scope: "WsResp"
                },
                buyRedesignQueryCryptoListResp: {
                    number: 120,
                    scope: "WsResp"
                },
                buyRedesignQueryFiatListResp: {
                    number: 121,
                    scope: "WsResp"
                },
                buyRedesignQueryCryptoResp: {
                    number: 122,
                    scope: "WsResp"
                },
                otcGetQuoteResp: {
                    number: 123,
                    scope: "WsResp"
                },
                activePositionsResp: {
                    number: 124,
                    scope: "WsResp"
                },
                loanableAssetResp: {
                    number: 125,
                    scope: "WsResp"
                },
                trialCalcForRepaymentResp: {
                    number: 126,
                    scope: "WsResp"
                },
                coinConfigResp: {
                    number: 127,
                    scope: "WsResp"
                },
                buwWalletBalanceResp: {
                    number: 128,
                    scope: "WsResp"
                },
                walletBalanceV2Resp: {
                    number: 129,
                    scope: "WsResp"
                },
                faceRecognitionResp: {
                    number: 130,
                    scope: "WsResp"
                }
            });
            var R = {
                key: "wsResp",
                encode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new h.fI,
                        n = [];
                    return "" !== e.wsReqId && t.uint32(10).string(e.wsReqId), 0 !== e.respTime && t.uint32(16).int64(e.respTime), 1 !== e.reqAction && t.uint32(24).int32(e.reqAction), void 0 !== e.respError && 1 !== e.respError && t.uint32(32).int32(e.respError), void 0 !== e.errorCode && 0 !== e.errorCode && t.uint32(40).int32(e.errorCode), void 0 !== e.errorMsg && "" !== e.errorMsg && t.uint32(50).string(e.errorMsg), void 0 !== e.resp && t.uint32(802).string(e.resp), g.ez({
                        scope: "WsResp"
                    }).forEach((function(r) {
                        var i = e[r.key];
                        if (void 0 !== i) {
                            n.push(r.key);
                            var o = (r.number << 3 | 2) >>> 0;
                            r.encode(i, t.uint32(o).fork()).join()
                        }
                    })), Object.keys(e).forEach((function(e) {
                        n.includes(e) || g.Si.includes(e) || g.fL("WsHttpSdkLiteMissMsg: key is " + e)
                    })), t
                },
                decode: function(e, t) {
                    for (var n = (0, p.A)(e, h.V5) ? e : new h.V5(e), r = void 0 === t ? n.len : n.pos + t, i = {
                            wsReqId: "",
                            respTime: 0,
                            reqAction: 1,
                            respError: 1,
                            errorCode: 0,
                            errorMsg: "",
                            resp: void 0,
                            trivialResp: void 0,
                            balanceValuationResp: void 0,
                            kycStatusResp: void 0,
                            capitalConfigResp: void 0,
                            getSelectorResp: void 0,
                            getSubSelectorResp: void 0,
                            isolatedMarginAccountResp: void 0,
                            getAccountUserConfigResp: void 0,
                            getAssetPortfolioResp: void 0,
                            walletBalanceResp: void 0,
                            getBuyAndSellSelectorResp: void 0,
                            getBuyAndSellSubSelectorResp: void 0,
                            getOpenGridsResp: void 0,
                            getOrderConfirmationResp: void 0,
                            getUserCommissionResp: void 0,
                            inboxMsgReadResp: void 0,
                            inboxMsgResp: void 0,
                            inboxUnReadResp: void 0,
                            faceSdkVerifyResp: void 0,
                            buyRedesignQueryCryptoListResp: void 0,
                            buyRedesignQueryFiatListResp: void 0,
                            buyRedesignQueryCryptoResp: void 0,
                            otcGetQuoteResp: void 0,
                            activePositionsResp: void 0,
                            loanableAssetResp: void 0,
                            trialCalcForRepaymentResp: void 0,
                            coinConfigResp: void 0,
                            buwWalletBalanceResp: void 0,
                            walletBalanceV2Resp: void 0,
                            faceRecognitionResp: void 0
                        }; n.pos < r;) {
                        var o = n.uint32();
                        switch (o >>> 3) {
                            case 1:
                                if (10 !== o) break;
                                i.wsReqId = n.string();
                                continue;
                            case 2:
                                if (16 !== o) break;
                                i.respTime = x(n.int64());
                                continue;
                            case 3:
                                if (24 !== o) break;
                                i.reqAction = n.int32();
                                continue;
                            case 4:
                                if (32 !== o) break;
                                i.respError = n.int32();
                                continue;
                            case 5:
                                if (40 !== o) break;
                                i.errorCode = n.int32();
                                continue;
                            case 6:
                                if (50 !== o) break;
                                i.errorMsg = n.string();
                                continue;
                            case 100:
                                if (802 !== o) break;
                                i.resp = n.string();
                                continue
                        }
                        var a = o >>> 3,
                            s = g.ez({
                                scope: "WsResp"
                            }).find((function(e) {
                                return e.number === a
                            }));
                        if (s) {
                            i[s.key] = s.decode(n, n.uint32());
                            break
                        }
                        if (4 === (7 & o) || 0 === o) break;
                        g.fL("WsHttpSdkLiteMissMsg: id is " + (o >>> 3)), n.skip(7 & o)
                    }
                    return i
                },
                fromJSON: function(e) {
                    return (0, o.A)({
                        wsReqId: A(e.wsReqId) ? globalThis.String(e.wsReqId) : "",
                        respTime: A(e.respTime) ? globalThis.Number(e.respTime) : 0,
                        reqAction: A(e.reqAction) ? v(e.reqAction) : 1,
                        respError: A(e.respError) ? _(e.respError) : 1,
                        errorCode: A(e.errorCode) ? globalThis.Number(e.errorCode) : 0,
                        errorMsg: A(e.errorMsg) ? globalThis.String(e.errorMsg) : "",
                        resp: A(e.resp) ? globalThis.String(e.resp) : void 0
                    }, g.ez({
                        scope: "WsResp"
                    }).reduce((function(t, n) {
                        var r = e[n.key];
                        return void 0 !== r && (t[n.key] = A(r) ? n.fromJSON(r) : void 0), t
                    }), {}))
                },
                toJSON: function(e) {
                    var t = {};
                    return "" !== e.wsReqId && (t.wsReqId = e.wsReqId), 0 !== e.respTime && (t.respTime = Math.round(e.respTime)), 1 !== e.reqAction && (t.reqAction = m(e.reqAction)), void 0 !== e.respError && 1 !== e.respError && (t.respError = function(e) {
                        switch (e) {
                            case E.INVALID_TOKEN:
                                return "INVALID_TOKEN";
                            case E.INVALID_REQUEST:
                                return "INVALID_REQUEST";
                            case E.SERVICE_ERROR:
                                return "SERVICE_ERROR";
                            case E.UNRECOGNIZED:
                            default:
                                return "UNRECOGNIZED"
                        }
                    }(e.respError)), void 0 !== e.errorCode && 0 !== e.errorCode && (t.errorCode = Math.round(e.errorCode)), void 0 !== e.errorMsg && "" !== e.errorMsg && (t.errorMsg = e.errorMsg), void 0 !== e.resp && (t.resp = e.resp), g.ez({
                        scope: "WsResp"
                    }).forEach((function(n) {
                        var r = n.key;
                        void 0 !== e[r] && (t[r] = n.toJSON(e[r]))
                    })), t
                },
                create: function(e) {
                    return R.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var t, n, r, i, o, a, s, c = {
                        wsReqId: "",
                        respTime: 0,
                        reqAction: 1,
                        respError: 1,
                        errorCode: 0,
                        errorMsg: "",
                        resp: void 0,
                        trivialResp: void 0,
                        balanceValuationResp: void 0,
                        kycStatusResp: void 0,
                        capitalConfigResp: void 0,
                        getSelectorResp: void 0,
                        getSubSelectorResp: void 0,
                        isolatedMarginAccountResp: void 0,
                        getAccountUserConfigResp: void 0,
                        getAssetPortfolioResp: void 0,
                        walletBalanceResp: void 0,
                        getBuyAndSellSelectorResp: void 0,
                        getBuyAndSellSubSelectorResp: void 0,
                        getOpenGridsResp: void 0,
                        getOrderConfirmationResp: void 0,
                        getUserCommissionResp: void 0,
                        inboxMsgReadResp: void 0,
                        inboxMsgResp: void 0,
                        inboxUnReadResp: void 0,
                        faceSdkVerifyResp: void 0,
                        buyRedesignQueryCryptoListResp: void 0,
                        buyRedesignQueryFiatListResp: void 0,
                        buyRedesignQueryCryptoResp: void 0,
                        otcGetQuoteResp: void 0,
                        activePositionsResp: void 0,
                        loanableAssetResp: void 0,
                        trialCalcForRepaymentResp: void 0,
                        coinConfigResp: void 0,
                        buwWalletBalanceResp: void 0,
                        walletBalanceV2Resp: void 0,
                        faceRecognitionResp: void 0
                    };
                    return c.wsReqId = null !== (t = e.wsReqId) && void 0 !== t ? t : "", c.respTime = null !== (n = e.respTime) && void 0 !== n ? n : 0, c.reqAction = null !== (r = e.reqAction) && void 0 !== r ? r : 1, c.respError = null !== (i = e.respError) && void 0 !== i ? i : 1, c.errorCode = null !== (o = e.errorCode) && void 0 !== o ? o : 0, c.errorMsg = null !== (a = e.errorMsg) && void 0 !== a ? a : "", c.resp = null !== (s = e.resp) && void 0 !== s ? s : void 0, g.ez({
                        scope: "WsResp"
                    }).forEach((function(t) {
                        var n = t.key;
                        c[n] = void 0 !== e[n] && null !== e[n] ? t.fromPartial(e[n]) : void 0
                    })), c
                }
            };

            function x(e) {
                var t = globalThis.Number(e.toString());
                if (t > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
                if (t < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
                return t
            }

            function A(e) {
                return null !== e && void 0 !== e
            }
            g.d$({
                channel: {
                    number: 1,
                    scope: "WsMsg"
                },
                sourceTime: {
                    number: 2,
                    scope: "WsMsg"
                },
                wsResp: {
                    number: 100,
                    scope: "WsMsg"
                },
                trivialMsg: {
                    number: 101,
                    scope: "WsMsg"
                },
                exchangeRateMsg: {
                    number: 102,
                    scope: "WsMsg"
                },
                inboxMsg: {
                    number: 103,
                    scope: "WsMsg"
                },
                c2cQuotePriceMsg: {
                    number: 104,
                    scope: "WsMsg"
                },
                inboxNotificationMsg: {
                    number: 105,
                    scope: "WsMsg"
                },
                coinPriceMsg: {
                    number: 106,
                    scope: "WsMsg"
                },
                c2cAllQuotePriceMsg: {
                    number: 107,
                    scope: "WsMsg"
                },
                c2cKlineMsg: {
                    number: 108,
                    scope: "WsMsg"
                },
                emergencyBroadcastMsg: {
                    number: 109,
                    scope: "WsMsg"
                },
                announcementBroadcastMsg: {
                    number: 110,
                    scope: "WsMsg"
                },
                earnIndexMsg: {
                    number: 111,
                    scope: "WsMsg"
                },
                pushMsg: {
                    number: 112,
                    scope: "WsMsg"
                },
                nftInboxMsg: {
                    number: 113,
                    scope: "WsMsg"
                },
                savingMarketAprMsg: {
                    number: 114,
                    scope: "WsMsg"
                },
                earnDntProjectOverviewMsg: {
                    number: 115,
                    scope: "WsMsg"
                },
                homePageRegUserMsg: {
                    number: 116,
                    scope: "WsMsg"
                },
                growthButtonGameMsg: {
                    number: 117,
                    scope: "WsMsg"
                },
                roamingWebAckPushMsg: {
                    number: 118,
                    scope: "WsMsg"
                },
                assetRateMsg: {
                    number: 119,
                    scope: "WsMsg"
                },
                quoteUpdatePushMsg: {
                    number: 120,
                    scope: "WsMsg"
                },
                assetPushMsg: {
                    number: 121,
                    scope: "WsMsg"
                },
                fundingBalanceMsg: {
                    number: 122,
                    scope: "WsMsg"
                },
                txStatusEventMsg: {
                    number: 123,
                    scope: "WsMsg"
                },
                web3CommonEventMsg: {
                    number: 124,
                    scope: "WsMsg"
                },
                earnDcUnderlyingOverviewMsg: {
                    number: 125,
                    scope: "WsMsg"
                },
                earnDcProjectOrderInfoMsg: {
                    number: 126,
                    scope: "WsMsg"
                },
                apexIncomeMsg: {
                    number: 127,
                    scope: "WsMsg"
                },
                assetBalancePushMsg: {
                    number: 128,
                    scope: "WsMsg"
                },
                alphaBalanceMsg: {
                    number: 129,
                    scope: "WsMsg"
                },
                alphaCexTokenAddMgs: {
                    number: 130,
                    scope: "WsMsg"
                },
                alphaCexTokenDynamicMgs: {
                    number: 131,
                    scope: "WsMsg"
                },
                alphaCexTokenKLineMgs: {
                    number: 132,
                    scope: "WsMsg"
                },
                alphaCexTokenListDynamicMgs: {
                    number: 133,
                    scope: "WsMsg"
                },
                alphaCexOrderChangeMsg: {
                    number: 134,
                    scope: "WsMsg"
                }
            });
            var S = {
                key: "wsMsg",
                encode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new h.fI,
                        n = [];
                    return "" !== e.channel && t.uint32(10).string(e.channel), 0 !== e.sourceTime && t.uint32(16).int64(e.sourceTime), void 0 !== e.wsResp && R.encode(e.wsResp, t.uint32(802).fork()).join(), g.ez({
                        scope: "WsMsg"
                    }).forEach((function(r) {
                        var i = e[r.key];
                        if (void 0 !== i) {
                            n.push(r.key);
                            var o = (r.number << 3 | 2) >>> 0;
                            r.encode(i, t.uint32(o).fork()).join()
                        }
                    })), Object.keys(e).forEach((function(e) {
                        n.includes(e) || g.Si.includes(e) || g.fL("WsHttpSdkLiteMissMsg: key is " + e)
                    })), t
                },
                decode: function(e, t) {
                    for (var n = (0, p.A)(e, h.V5) ? e : new h.V5(e), r = void 0 === t ? n.len : n.pos + t, i = {
                            channel: "",
                            sourceTime: 0,
                            wsResp: void 0,
                            trivialMsg: void 0,
                            exchangeRateMsg: void 0,
                            inboxMsg: void 0,
                            c2cQuotePriceMsg: void 0,
                            inboxNotificationMsg: void 0,
                            coinPriceMsg: void 0,
                            c2cAllQuotePriceMsg: void 0,
                            c2cKlineMsg: void 0,
                            emergencyBroadcastMsg: void 0,
                            announcementBroadcastMsg: void 0,
                            earnIndexMsg: void 0,
                            pushMsg: void 0,
                            nftInboxMsg: void 0,
                            savingMarketAprMsg: void 0,
                            earnDntProjectOverviewMsg: void 0,
                            homePageRegUserMsg: void 0,
                            growthButtonGameMsg: void 0,
                            roamingWebAckPushMsg: void 0,
                            assetRateMsg: void 0,
                            quoteUpdatePushMsg: void 0,
                            assetPushMsg: void 0,
                            fundingBalanceMsg: void 0,
                            txStatusEventMsg: void 0,
                            web3CommonEventMsg: void 0,
                            earnDcUnderlyingOverviewMsg: void 0,
                            earnDcProjectOrderInfoMsg: void 0,
                            apexIncomeMsg: void 0,
                            assetBalancePushMsg: void 0,
                            alphaBalanceMsg: void 0,
                            alphaCexTokenAddMgs: void 0,
                            alphaCexTokenDynamicMgs: void 0,
                            alphaCexTokenKLineMgs: void 0,
                            alphaCexTokenListDynamicMgs: void 0,
                            alphaCexOrderChangeMsg: void 0
                        }; n.pos < r;) {
                        var o = n.uint32();
                        switch (o >>> 3) {
                            case 1:
                                if (10 !== o) break;
                                i.channel = n.string();
                                continue;
                            case 2:
                                if (16 !== o) break;
                                i.sourceTime = C(n.int64());
                                continue;
                            case 100:
                                if (802 !== o) break;
                                i.wsResp = R.decode(n, n.uint32());
                                continue
                        }
                        var a = o >>> 3,
                            s = g.ez({
                                scope: "WsMsg"
                            }).find((function(e) {
                                return e.number === a
                            }));
                        if (s) {
                            i[s.key] = s.decode(n, n.uint32());
                            break
                        }
                        if (4 === (7 & o) || 0 === o) break;
                        g.fL("WsHttpSdkLiteMissMsg: id is " + (o >>> 3)), n.skip(7 & o)
                    }
                    return i
                },
                fromJSON: function(e) {
                    return (0, o.A)({
                        channel: T(e.channel) ? globalThis.String(e.channel) : "",
                        sourceTime: T(e.sourceTime) ? globalThis.Number(e.sourceTime) : 0,
                        wsResp: T(e.wsResp) ? R.fromJSON(e.wsResp) : void 0
                    }, g.ez({
                        scope: "WsMsg"
                    }).reduce((function(t, n) {
                        var r = e[n.key];
                        return void 0 !== r && (t[n.key] = T(r) ? n.fromJSON(r) : void 0), t
                    }), {}))
                },
                toJSON: function(e) {
                    var t = {};
                    return "" !== e.channel && (t.channel = e.channel), 0 !== e.sourceTime && (t.sourceTime = Math.round(e.sourceTime)), void 0 !== e.wsResp && (t.wsResp = R.toJSON(e.wsResp)), g.ez({
                        scope: "WsMsg"
                    }).forEach((function(n) {
                        var r = n.key;
                        void 0 !== e[r] && (t[r] = n.toJSON(e[r]))
                    })), t
                },
                create: function(e) {
                    return S.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var t, n, r = {
                        channel: "",
                        sourceTime: 0,
                        wsResp: void 0,
                        trivialMsg: void 0,
                        exchangeRateMsg: void 0,
                        inboxMsg: void 0,
                        c2cQuotePriceMsg: void 0,
                        inboxNotificationMsg: void 0,
                        coinPriceMsg: void 0,
                        c2cAllQuotePriceMsg: void 0,
                        c2cKlineMsg: void 0,
                        emergencyBroadcastMsg: void 0,
                        announcementBroadcastMsg: void 0,
                        earnIndexMsg: void 0,
                        pushMsg: void 0,
                        nftInboxMsg: void 0,
                        savingMarketAprMsg: void 0,
                        earnDntProjectOverviewMsg: void 0,
                        homePageRegUserMsg: void 0,
                        growthButtonGameMsg: void 0,
                        roamingWebAckPushMsg: void 0,
                        assetRateMsg: void 0,
                        quoteUpdatePushMsg: void 0,
                        assetPushMsg: void 0,
                        fundingBalanceMsg: void 0,
                        txStatusEventMsg: void 0,
                        web3CommonEventMsg: void 0,
                        earnDcUnderlyingOverviewMsg: void 0,
                        earnDcProjectOrderInfoMsg: void 0,
                        apexIncomeMsg: void 0,
                        assetBalancePushMsg: void 0,
                        alphaBalanceMsg: void 0,
                        alphaCexTokenAddMgs: void 0,
                        alphaCexTokenDynamicMgs: void 0,
                        alphaCexTokenKLineMgs: void 0,
                        alphaCexTokenListDynamicMgs: void 0,
                        alphaCexOrderChangeMsg: void 0
                    };
                    return r.channel = null !== (t = e.channel) && void 0 !== t ? t : "", r.sourceTime = null !== (n = e.sourceTime) && void 0 !== n ? n : 0, r.wsResp = void 0 !== e.wsResp && null !== e.wsResp ? R.fromPartial(e.wsResp) : void 0, g.ez({
                        scope: "WsMsg"
                    }).forEach((function(t) {
                        var n = t.key;
                        r[n] = void 0 !== e[n] && null !== e[n] ? t.fromPartial(e[n]) : void 0
                    })), r
                }
            };

            function C(e) {
                var t = globalThis.Number(e.toString());
                if (t > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
                if (t < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
                return t
            }

            function T(e) {
                return null !== e && void 0 !== e
            }
            var k, I, N = function() {
                    return y
                },
                M = function() {
                    return S
                },
                L = "ws_http_sdk_lite",
                B = 0,
                O = "",
                P = !0,
                j = function() {
                    !0
                },
                D = function() {
                    P
                },
                U = function() {
                    return O
                },
                q = function() {
                    return B++
                },
                F = function(e) {
                    return new Promise((function(e) {
                        return e(void 0)
                    }))
                },
                V = function(e, t) {},
                z = "",
                W = "web",
                G = function() {
                    var e = (0, i.A)(c().mark((function e(t) {
                        var n, r, i, o, a, s;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = t.sourceUrl, r = t.getSessionInfo, i = t.track, o = t.isHttp, a = t.clientType, s = t.getWsToken, o, P = o, O = n, F = r, V = i, k = s, W = a, e.next = 10, F("bnc-uuid");
                                case 10:
                                    if (e.t0 = e.sent, e.t0) {
                                        e.next = 13;
                                        break
                                    }
                                    e.t0 = "";
                                case 13:
                                    z = e.t0;
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                H = l.j,
                $ = function(e) {
                    H = e
                },
                K = function() {
                    return F
                },
                Z = function() {
                    return H
                },
                Q = function() {
                    return function(e, t) {
                        var n = [];
                        switch (t) {
                            case "private":
                                n = (0, f.ZI)();
                                break;
                            case "public":
                                n = (0, f.tI)();
                                break;
                            case "friendly":
                                n = (0, f.FL)();
                                break;
                            default:
                                n = (0, f.PD)()
                        }
                        var r = n.reverse(),
                            i = function(e) {
                                return e >= 10 ? e : "0".concat(e)
                            },
                            s = new Date,
                            c = "".concat(s.getFullYear(), "-").concat(i(s.getMonth() + 1), "-").concat(i(s.getDate()), " ").concat(i(s.getHours()), ":").concat(i(s.getMinutes()), ":").concat(i(s.getSeconds()));
                        if (r.length) {
                            for (var u = (0, a.A)(r, 1)[0], l = u.status, d = 1; d < r.length; d++) l += " <-".concat(r[d - 1].timeStamp - r[d].timeStamp, "- ").concat(r[d].status);
                            V(L, (0, o.A)({
                                ws_time: c,
                                uuid: z,
                                clientType: W,
                                isHttp: P.toString(),
                                status: u.status,
                                ws_token: "string" === typeof I ? I.slice(-16) : "undefined",
                                duration: 1 === r.length ? 0 : r[0].timeStamp - r[1].timeStamp,
                                statuses: l,
                                ws_sourceUrl: O
                            }, e))
                        } else V(L, (0, o.A)({
                            ws_time: c,
                            uuid: z,
                            clientType: W,
                            ws_token: "string" === typeof I ? I.slice(-16) : "undefined",
                            isHttp: P.toString(),
                            ws_sourceUrl: O
                        }, e))
                    }
                },
                Y = (0, d.H)(),
                X = Y.setReady,
                J = (Y.onReady, function() {
                    var e = (0, i.A)(c().mark((function e() {
                        var t, n, r, i;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, K()("cr00");
                                case 2:
                                    if (t = e.sent, X(!1), !t) {
                                        e.next = 10;
                                        break
                                    }
                                    return (0, f.Lx)("get_token"), n = Q(), r = Date.now(), i = function(e, t) {
                                        return Math.min(Math.floor(e / 1e3), t)
                                    }, e.abrupt("return", k ? k() : (0, u.get)("/bapi/composite/v1/private/market/ws-token", {
                                        enableErrorMsgIntercept: !1
                                    }).then((function() {
                                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                        return null === (I = (null === e || void 0 === e ? void 0 : e.data) || null) && ((0, f.Lx)("get_token_value_invalid"), Q()({
                                            ws_tokenData: JSON.stringify(e)
                                        })), X(null === I), Q()({
                                            ws_token_time: i(Date.now() - r, 10)
                                        }), I
                                    })).catch((function(e) {
                                        return X(!0), (0, f.Lx)("get_token_error"), n({
                                            error: JSON.stringify(e.message)
                                        }), null
                                    })));
                                case 10:
                                    return e.abrupt("return", void 0);
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                ee = function() {
                    return W
                }
        },
        Qc4H: (e, t, n) => {
            "use strict";
            n.d(t, {
                H: () => te
            });
            var r, i, o = n("ezuS"),
                a = n("ZWZn"),
                s = n("EYt1"),
                c = n("sViW"),
                u = n("2URn"),
                l = n("BK7R"),
                f = n("QUKP"),
                d = n("blBx"),
                p = n("Pz56"),
                h = n.n(p);
            ! function(e) {
                e[e.SERVICE_REQ = 1] = "SERVICE_REQ", e[e.SUBSCRIBE = 2] = "SUBSCRIBE", e[e.UNSUBSCRIBE = 3] = "UNSUBSCRIBE", e[e.LIST_CHANNELS = 4] = "LIST_CHANNELS", e[e.REFRESH_TOKEN = 5] = "REFRESH_TOKEN", e[e.CLEAR_TOKEN = 7] = "CLEAR_TOKEN", e[e.PUBLIC_SERVICE_REQ = 8] = "PUBLIC_SERVICE_REQ", e[e.FRIENDLY_SERVICE_REQ = 9] = "FRIENDLY_SERVICE_REQ", e[e.PING = 10] = "PING"
            }(r || (r = {})),
            function(e) {
                e[e.INVALID_TOKEN = 1] = "INVALID_TOKEN", e[e.INVALID_REQUEST = 2] = "INVALID_REQUEST", e[e.SERVICE_ERROR = 3] = "SERVICE_ERROR"
            }(i || (i = {}));
            var g = {},
                v = !1,
                m = function(e) {
                    v = e
                },
                y = {},
                b = function(e) {
                    var t = e.payload,
                        n = e.callback,
                        i = (0, a.OX)().toString(),
                        o = (0, a.HL)(),
                        s = (0, l.A)((0, f.A)((0, l.A)({}, t), {
                            wsReqId: i,
                            reqTime: (new Date).valueOf()
                        }), t.reqAction === r.PING || t.reqAction === r.LIST_CHANNELS || t.reqAction === r.CLEAR_TOKEN ? {
                            reqArgs: ""
                        } : {}),
                        c = o.encode(o.fromJSON(s)).finish();
                    return (0, a.Vl)()(c), g[i] = n,
                        function() {
                            delete g[i]
                        }
                },
                w = function(e) {
                    var t = e.data,
                        n = (0, a.UE)(),
                        r = t;
                    if ("SOCKET_CLOSED" === (null === r || void 0 === r ? void 0 : r.errorMsg) || "SOCKET_CONNECTION_ERROR" === (null === r || void 0 === r ? void 0 : r.errorMsg)) return Object.keys(y).forEach((function(e) {
                        y[e].forEach((function(e) {
                            e(r)
                        }))
                    })), void n({
                        error: "socket response error ".concat(null === r || void 0 === r ? void 0 : r.errorMsg)
                    });
                    if ((0, u.A)(t, Blob)) {
                        var o = new FileReader;
                        o.readAsArrayBuffer(t), o.onload = (0, c.A)(h().mark((function e() {
                            var t, r, s, c, u, d, p, m, b, w, E, _;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = o.result;
                                        try {
                                            r = (0, a.iq)(), "wsResp" in (s = r.toJSON(r.decode(new Uint8Array(t)))) ? (c = s.wsResp, u = c.wsReqId, d = c.respError, p = c.reqAction, m = c.errorCode, b = c.errorMsg, (w = g[u]) && (d ? (E = function() {
                                                switch (d) {
                                                    case i[i.INVALID_REQUEST]:
                                                        return {
                                                            error: {
                                                                type: "INVALID_REQUEST"
                                                            }
                                                        };
                                                    case i[i.INVALID_TOKEN]:
                                                        return {
                                                            error: {
                                                                type: "INVALID_TOKEN"
                                                            }
                                                        };
                                                    case i[i.SERVICE_ERROR]:
                                                        return {
                                                            error: {
                                                                type: "SERVICE_ERROR",
                                                                errorCode: m || 0,
                                                                errorMsg: b || ""
                                                            }
                                                        };
                                                    default:
                                                        return {
                                                            error: {
                                                                type: "INVALID_REQUEST"
                                                            }
                                                        }
                                                }
                                            }(), n((0, f.A)((0, l.A)({}, E.error), {
                                                reqAction: p
                                            })), w(E)) : w(s.wsResp), delete g[u])) : v && (_ = s.channel, (y[_] || []).forEach((function(e) {
                                                e(s)
                                            })))
                                        } catch (h) {
                                            n({
                                                error: "socket decode error".concat(JSON.stringify(h.message))
                                            })
                                        }
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    } else n({
                        error: "parse data type other then blob".concat("undefined" === typeof t ? "undefined" : (0, d.A)(t))
                    })
                },
                E = n("Oxdw"),
                _ = n("tEf9"),
                R = function(e) {
                    var t = "fn" in e ? e.fn : e,
                        n = "fn" in e ? e.seeds : s.W,
                        r = [],
                        i = {},
                        o = function(e) {},
                        a = !1,
                        u = new Set,
                        f = function() {
                            u.forEach((function(e) {
                                e()
                            })), u.clear(), a = !1
                        },
                        d = function() {
                            var e = (0, c.A)(h().mark((function e(d, p) {
                                var g, v, m, y;
                                return h().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return o = d, g = i = p, f(), a = !0, m = s.j, u.add((function() {
                                                clearTimeout(v), m()
                                            })), y = function() {
                                                var e = (0, c.A)(h().mark((function e(i) {
                                                    return h().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return m(), v = window.setTimeout((function() {
                                                                    y(i + 1)
                                                                }), 1e3 * n(i)), e.next = 4, t((function(e) {
                                                                    if (g = (0, l.A)({}, e), clearTimeout(v), 0 === r.length) o((0, l.A)({}, e));
                                                                    else {
                                                                        var t = function(e, n, i) {
                                                                            var o = r[i];
                                                                            o.start((function(n) {
                                                                                i >= r.length - 1 ? e((0, l.A)({}, n)) : t(e, (0, l.A)({}, n), i + 1)
                                                                            }), n), u.add(o.cancel)
                                                                        };
                                                                        t(o, g, 0)
                                                                    }
                                                                }), g);
                                                            case 4:
                                                                m = e.sent;
                                                            case 5:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function(t) {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), e.next = 11, y(0);
                                        case 11:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, n) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        p = {
                            then: function(e) {
                                return r.push(e), p
                            },
                            start: d,
                            cancel: f,
                            restart: function() {
                                a && (f(), d(o, i))
                            }
                        };
                    return p
                };
            R.all = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r = [],
                    i = {},
                    o = function(e) {},
                    a = !1,
                    s = new Set,
                    u = function() {
                        s.forEach((function(e) {
                            e()
                        })), s.clear(), a = !1
                    },
                    f = function() {
                        var e = (0, c.A)(h().mark((function e(n, c) {
                            var f, d;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        o = n, f = i = c, u(), a = !0, d = 0, t.forEach((function(e) {
                                            e.start((function(e) {
                                                if (f = (0, l.A)({}, e, f), ++d >= t.length)
                                                    if (0 === r.length) o(f);
                                                    else {
                                                        var n = function(e, t, i) {
                                                            var o = r[i];
                                                            o.start((function(t) {
                                                                i >= r.length - 1 ? e((0, l.A)({}, t)) : n(e, (0, l.A)({}, t), i + 1)
                                                            }), t), s.add(o.cancel)
                                                        };
                                                        n(o, f, 0)
                                                    }
                                            }), f), s.add(e.cancel)
                                        }));
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    d = {
                        then: function(e) {
                            return r.push(e), d
                        },
                        start: f,
                        cancel: u,
                        restart: function() {
                            a && (u(), f(o, i))
                        }
                    };
                return d
            }, R.oneOf = function(e, t) {
                var n = [],
                    r = {},
                    i = function(e) {},
                    o = !1,
                    a = new Set,
                    s = function() {
                        a.forEach((function(e) {
                            e()
                        })), a.clear(), o = !1
                    },
                    u = function() {
                        var u = (0, c.A)(h().mark((function c(u, f) {
                            var d, p;
                            return h().wrap((function(c) {
                                for (;;) switch (c.prev = c.next) {
                                    case 0:
                                        return r = f, i = u, c.next = 4, t(r);
                                    case 4:
                                        c.t0 = c.sent, c.t1 = e[c.t0], d = [c.t1].concat((0, _.A)(n)), s(), o = !0, (p = function(e, t, n) {
                                            var r = d[n];
                                            r.start((function(t) {
                                                n >= d.length - 1 ? e((0, l.A)({}, t)) : p(e, (0, l.A)({}, t), n + 1)
                                            }), t), a.add(r.cancel)
                                        })(i, r, 0);
                                    case 11:
                                    case "end":
                                        return c.stop()
                                }
                            }), c)
                        })));
                        return function(e, t) {
                            return u.apply(this, arguments)
                        }
                    }(),
                    f = {
                        then: function(e) {
                            return n.push(e), f
                        },
                        start: u,
                        cancel: s,
                        restart: function() {
                            o && (s(), u(i, r))
                        }
                    };
                return f
            };
            var x, A = n("s5vj"),
                S = (0, E.H)(),
                C = S.setReady,
                T = (S.onReady, (0, E.H)()),
                k = T.setReady,
                I = (T.onReady, (0, E.H)()),
                N = I.setReady,
                M = I.onReady,
                L = (0, E.H)(),
                B = L.setReady,
                O = (L.onReady, L.clean, !1),
                P = R({
                    fn: function() {
                        var e = (0, c.A)(h().mark((function e(t, n) {
                            var i, o, u, d, p, g, v, m, y;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return i = function() {
                                            var e = (0, c.A)(h().mark((function e(t) {
                                                var n, r;
                                                return h().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return n = (0, a.$s)(), e.next = 3, (0, a.hT)()("bnc-uuid");
                                                        case 3:
                                                            return e.t0 = e.sent, e.next = 6, (0, a.hT)()("lang");
                                                        case 6:
                                                            return e.t1 = e.sent, e.t2 = t, e.t3 = (0, a.yS)(), r = {
                                                                uuid: e.t0,
                                                                lang: e.t1,
                                                                token: e.t2,
                                                                clienttype: e.t3
                                                            }, e.abrupt("return", "".concat(n, "?").concat(Object.keys(r).filter((function(e) {
                                                                return r[e]
                                                            })).map((function(e) {
                                                                return "".concat(e, "=").concat(r[e])
                                                            })).join("&")));
                                                        case 11:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })));
                                            return function(t) {
                                                return e.apply(this, arguments)
                                            }
                                        }(), e.next = 3, (0, a.gf)();
                                    case 3:
                                        return o = e.sent, e.next = 6, i(o);
                                    case 6:
                                        return u = e.sent, (0, A.Lx)("ws_start"), x && x.close(), B(!1), x = new WebSocket(u), C(!1), e.t0 = "", e.next = 17, (0, a.hT)()("bnc-uuid");
                                    case 17:
                                        return e.t1 = e.sent, g = e.t0.concat.call(e.t0, e.t1, "_").concat(Date.now()), v = Date.now(), m = setTimeout((function() {
                                            (0, a.P4)(), C(!0), (0, a.UE)()({
                                                ws_connectId: g,
                                                ws_type: "ws_openDelay",
                                                duration: Math.floor((Date.now() - v) / 1e3)
                                            })
                                        }), 1e4), y = function() {
                                            clearTimeout(d), clearInterval(p)
                                        }, x.onopen = function() {
                                            N(!1), (0, a.UE)()({
                                                ws_connectId: g,
                                                ws_type: "ws_open",
                                                duration: Math.floor((Date.now() - v) / 1e3)
                                            }), k(!0), clearTimeout(m), (0, a.XK)(), (0, A.Lx)("ws_connected"), (0, a.Lq)((function(e) {
                                                1 === x.readyState ? x.send(e) : (0, a.UE)()({
                                                    type: "SOCKET_NOT_READY_BEFORE_SEND",
                                                    readyState: x.readyState
                                                })
                                            })), t((0, f.A)((0, l.A)({}, n), {
                                                token: o
                                            })), x.onmessage = function(e) {
                                                console.log("socket onmessage"), y(), p = window.setInterval((function() {
                                                    var e = s.j;
                                                    ! function t(n) {
                                                        e(), n >= 2 ? x.close() : (e = b({
                                                            payload: {
                                                                reqAction: r.PING
                                                            },
                                                            callback: function(e) {
                                                                "error" in e || clearTimeout(d)
                                                            }
                                                        }), d = window.setTimeout((function() {
                                                            t(n + 1)
                                                        }), 2e3))
                                                    }(0)
                                                }), 4e4), w(e)
                                            }
                                        }, x.onerror = function() {
                                            console.log("socket error"), (0, A.Lx)("ws_error"), w({
                                                data: {
                                                    errorMsg: "SOCKET_CONNECTION_ERROR"
                                                }
                                            })
                                        }, x.onclose = function(e) {
                                            console.log("socket onclose"), w({
                                                data: {
                                                    errorMsg: "SOCKET_CLOSED"
                                                }
                                            }), N(!0), k(!1), (0, a.P4)(), (0, A.Lx)("ws_closed"), y(), clearTimeout(m), (0, a.UE)()({
                                                ws_connectId: g,
                                                ws_type: "ws_close",
                                                duration: Math.floor((Date.now() - v) / 1e3),
                                                error: e.reason,
                                                code: e.code
                                            }), 1e3 === e.code ? P.restart() : (O || B(!0), O = !1, P.cancel())
                                        }, e.abrupt("return", (function() {
                                            O = !0, x && x.close()
                                        }));
                                    case 26:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t, n) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    seeds: function() {
                        return Math.floor(2147483.647)
                    }
                }),
                j = (0, E.H)(),
                D = j.setReady,
                U = (j.onReady, R(function() {
                    var e = (0, c.A)(h().mark((function e(t, n) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, A.Lx)("publicRequest"), t(n), D(!0), e.abrupt("return", (function() {
                                        D(!1)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }())),
                q = (0, E.H)(),
                F = q.setReady,
                V = (q.onReady, q.clean, R(function() {
                    var e = (0, c.A)(h().mark((function e(t, n) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, A.Lx)("privateRequest"), t(n), F(!0), e.abrupt("return", (function() {
                                        F(!1)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }())),
                z = R(function() {
                    var e = (0, c.A)(h().mark((function e(t, n) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, A.Lx)("list_channels"), e.abrupt("return", b({
                                        payload: {
                                            reqAction: r.LIST_CHANNELS
                                        },
                                        callback: function(e) {
                                            if (!("error" in e)) {
                                                var r = function(e, t) {
                                                        return Array.from(e).filter((function(e) {
                                                            return !t.has(e)
                                                        })).join(",")
                                                    },
                                                    i = e.resp,
                                                    o = void 0 === i ? "" : i,
                                                    a = new Set("" === o.trim() ? [] : o.split(",")),
                                                    s = new Set(Object.keys(y));
                                                t((0, f.A)((0, l.A)({}, n), {
                                                    toSubscribeChannelStr: r(s, a),
                                                    toUnSubscribeChannelStr: r(a, s)
                                                }))
                                            }
                                        }
                                    }));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                W = R(function() {
                    var e = (0, c.A)(h().mark((function e(t, n) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, A.Lx)("subscribe_channels"), !n.toSubscribeChannelStr) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", b({
                                        payload: {
                                            reqAction: r.SUBSCRIBE,
                                            reqArgs: n.toSubscribeChannelStr
                                        },
                                        callback: function(e) {
                                            "error" in e || t(n)
                                        }
                                    }));
                                case 3:
                                    return t(n), e.abrupt("return", s.j);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                G = R(function() {
                    var e = (0, c.A)(h().mark((function e(t, n) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, A.Lx)("unsubscribe_channels"), !n.toUnSubscribeChannelStr) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", b({
                                        payload: {
                                            reqAction: r.UNSUBSCRIBE,
                                            reqArgs: n.toUnSubscribeChannelStr
                                        },
                                        callback: function(e) {
                                            "error" in e || t(n)
                                        }
                                    }));
                                case 3:
                                    return t(n), e.abrupt("return", s.j);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                H = (0, E.H)(),
                $ = H.setReady,
                K = (H.onReady, R(function() {
                    var e = (0, c.A)(h().mark((function e(t, n) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, A.Lx)("friendlyRequest"), t(n), $(!0), e.abrupt("return", (function() {
                                        $(!1)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }())),
                Z = R(function() {
                    var e = (0, c.A)(h().mark((function e(t, n) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, A.Lx)("stream"), t(n), m(!0), e.abrupt("return", (function() {
                                        m(!1)
                                    }));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()),
                Q = R({
                    fn: (0, c.A)(h().mark((function e() {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, A.Lx)("deadEnd"), e.abrupt("return", s.j);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    }))),
                    seeds: function() {
                        return Math.floor(2147483.647)
                    }
                }),
                Y = P.then(R.all(U, R.oneOf({
                    string: R.all(V, K),
                    undefined: K,
                    null: Q
                }, (function(e) {
                    return null === e.token ? "null" : void 0 === e.token ? "undefined" : "string"
                })), z.then(R.all(W, G)).then(Z))),
                X = Y.start,
                J = (Y.cancel, z.restart),
                ee = !1,
                te = function(e) {
                    var t = e.channel,
                        n = e.responseName,
                        r = e.onConnectionError,
                        i = e.onSocketClosed;
                    return function(e) {
                        if (!(0, a.$s)()) return console.error("ws-http-sdk:error: need to init websocket before use"), s.j;
                        ee || (window.addEventListener("online", (function() {
                            M((function() {
                                return X((function(e) {}), {}), s.j
                            }))
                        })), ee = !0, X((function(e) {}), {}));
                        var c = function(e) {
                            var t = e.channel,
                                n = e.callback;
                            return y[t] ? y[t].add(n) : y[t] = new Set([n]),
                                function() {
                                    y[t].delete(n), 0 === y[t].size && delete y[t]
                                }
                        }({
                            channel: t,
                            callback: function(t) {
                                var a = t;
                                if ("SOCKET_CONNECTION_ERROR" === (null === a || void 0 === a ? void 0 : a.errorMsg) && r) null === r || void 0 === r || r(a);
                                else if ("SOCKET_CLOSED" === (null === a || void 0 === a ? void 0 : a.errorMsg) && i) null === i || void 0 === i || i(a);
                                else {
                                    var s = new Set(Object.keys(t));
                                    "string" === typeof n ? e(t[n]) : n.forEach((function(n) {
                                        if (s.has(n)) return e((0, o.A)({}, n, t[n]))
                                    }))
                                }
                            }
                        });
                        return J(), c
                    }
                }
        },
        ZSsA: (e, t, n) => {
            "use strict";
            n.d(t, {
                s9: () => s
            });
            var r = n("VP0d"),
                i = n("DTvD"),
                o = n("h+kG"),
                a = n("sshP"),
                s = function(e) {
                    var t = (0, i.useContext)(a.y),
                        n = t.i18n,
                        o = t.__count__,
                        s = n.i18nextIns,
                        c = (0, r.A)((0, i.useState)(s.language), 2),
                        u = c[0],
                        l = c[1],
                        f = (0, i.useCallback)((function(e) {
                            return e
                        }), []),
                        d = (0, i.useMemo)((function() {
                            return s.getFixedT(u, e)
                        }), [u, e, o]);
                    return (0, i.useEffect)((function() {
                        return s.isInitialized ? e && (Array.isArray(e) ? e : [e]).forEach((function(e) {
                                s.hasResourceBundle(u, e) || s.loadNamespaces(e)
                            })) : n.init(), s.on("languageChanged", l),
                            function() {
                                s.off("languageChanged", l)
                            }
                    }), []), {
                        locale: u,
                        language: u,
                        setLocale: n.setLocale,
                        t: s.isInitialized ? d : f,
                        i18n: s
                    }
                };
            if (null === o.OW || void 0 === o.OW ? void 0 : o.OW.PRERENDER);
            a.y.Provider, n("rsqs"), n("ztXJ")
        },
        "i/bi": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u,
                M: () => c
            });
            var r = n("DTvD"),
                i = n.n(r),
                o = n("GlbY"),
                a = n("c+5G"),
                s = function(e) {
                    var t = e.elementId,
                        n = e.extraInfo;
                    return i().useEffect((function() {
                        var e = "".concat(a.cH, "_").concat(t);
                        (0, o.Tq)("ModuleView", {
                            pageName: a.$p,
                            elementId: e,
                            $element_id: e,
                            extraInfo: n
                        })
                    }), []), null
                },
                c = function(e) {
                    var t = e.type,
                        n = void 0 === t ? "WebClick" : t,
                        r = e.elementId,
                        i = e.extraInfo,
                        s = "".concat(a.cH, "_").concat(r);
                    (0, o.Tq)(n, {
                        pageName: a.$p,
                        elementId: s,
                        $element_id: s,
                        extraInfo: i
                    })
                };
            const u = i().memo(s)
        },
        "1mgb": (e, t, n) => {
            "use strict";
            n.d(t, {
                _o: () => re,
                Hm: () => Pe,
                vT: () => A,
                OE: () => ge,
                zJ: () => Fe,
                Oe: () => w,
                mw: () => Ze,
                sD: () => ee,
                Ly: () => O,
                hI: () => te.A,
                x9: () => Ae,
                mq: () => Xe,
                CA: () => J,
                MP: () => te.M
            });
            var r = n("jg1C"),
                i = n("DTvD"),
                o = n.n(i);
            var a = n("uqCI"),
                s = n("888e"),
                c = n("nG1z"),
                u = n("ezuS"),
                l = n("2PCm"),
                f = n("BK7R"),
                d = n("QUKP"),
                p = n("gZfF"),
                h = n("VKAp"),
                g = n("AGKK"),
                v = n("zGhu"),
                m = function(e) {
                    (0, l.A)(n, e);
                    var t = (0, h.A)(n);

                    function n() {
                        var e;
                        return (0, s.A)(this, n), e = t.apply(this, arguments), (0, u.A)((0, a.A)(e), "state", {
                            inView: !1
                        }), (0, u.A)((0, a.A)(e), "inViewPort", (function() {
                            e.setState({
                                inView: !0
                            })
                        })), e
                    }
                    return (0, c.A)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.state.inView,
                                t = this.props,
                                n = (t.check, t.noLazy, t.children),
                                i = (0, p.A)(t, ["check", "noLazy", "children"]);
                            return (0, r.jsx)(g.Ay, (0, d.A)((0, f.A)({}, i), {
                                ref: this.setRefs("root"),
                                children: e ? n : null
                            }))
                        }
                    }]), n
                }(v.A),
                y = n("8Zi/"),
                b = n.n(y),
                w = function(e) {
                    (0, l.A)(n, e);
                    var t = (0, h.A)(n);

                    function n() {
                        var e;
                        return (0, s.A)(this, n), e = t.apply(this, arguments), (0, u.A)((0, a.A)(e), "state", {
                            inView: !1
                        }), (0, u.A)((0, a.A)(e), "inViewPort", (function() {
                            return e.setState({
                                inView: !0
                            })
                        })), e
                    }
                    return (0, c.A)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.state.inView,
                                t = this.props,
                                n = t.value,
                                i = t.size,
                                o = void 0 === i ? 100 : i,
                                a = [t.staticUrl, "/static/images/common/logo.png"].join(""),
                                s = Math.max(20, Math.floor(o / 6));
                            return (0, r.jsxs)(g.Ay, {
                                ref: this.setRefs("root"),
                                className: "relative flex items-center justify-center",
                                style: {
                                    width: o,
                                    height: o,
                                    borderRadius: 4,
                                    bg: "#FFFFFF"
                                },
                                children: [e ? (0, r.jsx)(b(), {
                                    renderAs: "svg",
                                    level: "M",
                                    size: o - 4,
                                    value: n
                                }) : null, (0, r.jsx)(g.Ay, {
                                    className: "absolute left-1/2 top-1/2 rounded-xs",
                                    style: {
                                        width: s,
                                        height: s,
                                        border: "3px solid #FFFFFF",
                                        transform: "translate(-50%,-50%)",
                                        backgroundSize: "85%",
                                        backgroundPosition: "center",
                                        backgroundRepeat: "no-repeat",
                                        backgroundImage: "url('".concat(a, "')"),
                                        backgroundColor: "#000000"
                                    }
                                })]
                            })
                        }
                    }]), n
                }(v.A),
                E = n("QRnj"),
                _ = n("5G2I"),
                R = n.n(_),
                x = function(e) {
                    var t = e.showImg,
                        n = e.imgUrl,
                        a = e.videoUrl,
                        s = e.onClick,
                        c = void 0 === s ? null : s,
                        u = e.ratio,
                        l = void 0 === u ? "56.25%" : u,
                        f = o().useRef(null),
                        d = o().useRef(null);
                    d.current = c, (0, i.useEffect)((function() {
                        var e = function() {
                            var e = f.current,
                                t = d.current,
                                n = document.activeElement;
                            n && e === n && "function" === typeof t && t()
                        };
                        return window.addEventListener("blur", e, !0),
                            function() {
                                return window.removeEventListener("blur", e, !0)
                            }
                    }), []);
                    var p = R()([
                        [function() {
                            return t
                        }, function() {
                            return (0, r.jsx)(E.A, {
                                src: n,
                                className: "absolute bottom-0 left-0 right-0 top-0"
                            })
                        }],
                        [function() {
                            return a
                        }, function() {
                            return (0, r.jsx)(m, {
                                check: {
                                    offset: 30,
                                    x: !0
                                },
                                className: "absolute bottom-0 left-0 right-0 top-0 overflow-hidden",
                                children: (0, r.jsx)("iframe", {
                                    ref: f,
                                    name: "youtube",
                                    width: "100%",
                                    height: "100%",
                                    frameBorder: "0",
                                    src: "".concat(a),
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: !0
                                })
                            })
                        }],
                        [function() {
                            return !0
                        }, function() {
                            return null
                        }]
                    ]);
                    return (0, r.jsx)(g.Ay, {
                        className: "relative h-0 w-full",
                        style: {
                            paddingBottom: l
                        },
                        children: p()
                    })
                };
            const A = (0, i.memo)(x);
            var S = n("VP0d"),
                C = n("O94r"),
                T = n.n(C),
                k = n("49xm"),
                I = n("wIZF"),
                N = n("7zlU");
            const M = function(e) {
                return o().createElement(N.A, (0, I.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.94 5.06l16 16 2.12-2.12-2.446-2.447L23 12l-5.555-5.69a7.566 7.566 0 00-9.883-.87L5.06 2.94 2.939 5.06zm6.747 2.506a5 5 0 016.747 6.747L9.687 7.566z",
                    fill: "currentColor"
                }), o().createElement("path", {
                    d: "M1 12l2.29-2.346 10.198 10.198a7.574 7.574 0 01-6.933-2.162L1 12z",
                    fill: "currentColor"
                }))
            };
            const L = function(e) {
                return o().createElement(N.A, (0, I.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M12 14.5a2.5 2.5 0 100-5 2.5 2.5 0 000 5z",
                    fill: "currentColor"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.555 6.31L1 12l5.555 5.69a7.572 7.572 0 0010.89 0L23 12l-5.555-5.69a7.572 7.572 0 00-10.89 0zM17 12a5 5 0 11-10 0 5 5 0 0110 0z",
                    fill: "currentColor"
                }))
            };
            var B = n("4v8Z");
            const O = function(e) {
                var t = e.trackFn,
                    n = e.className,
                    i = void 0 === n ? "" : n,
                    o = (0, S.A)((0, B.Z4)(), 2),
                    a = o[0],
                    s = o[1];
                return (0, r.jsx)(k.A, {
                    sz: "tiny",
                    variant: "text",
                    onClick: function() {
                        t && t("isHideSmallBalance"), s(!a)
                    },
                    id: "switch-balance-button",
                    className: T()("min-w-fit rounded-xs px-4xs text-iconNormal", i),
                    children: a ? (0, r.jsx)(M, {
                        className: "text-[16px]"
                    }) : (0, r.jsx)(L, {
                        className: "text-[16px]"
                    })
                })
            };
            var P = n("hyZw"),
                j = /(`[\s\S]*?`|\[[\s\S]*?\]\([\s\S]*?\)|\*\*[\s\S]*?\*\*|\+[\s\S]*?\+)/g,
                D = /`[\s\S]*?`/,
                U = /\*\*[\s\S]*?\*\*/,
                q = /\+[\s\S]*?\+/,
                F = /\[[\s\S]*?\]\([\s\S]*?\)/,
                V = /\[[\s\S]*?\]\([\s\S]*?\)/g,
                z = /\[([\s\S]*?)\]\(([\s\S]*?)\)/,
                W = /\[([\s\S]*?)?\]\(([\s\S]*?)?\)/,
                G = /<h>[\s\S]*?<\/h>/,
                H = /<li>[\s\S]*?<\/li>/,
                $ = function(e) {
                    var t = e.content,
                        n = e.linkClick,
                        i = void 0 === n ? P.es : n,
                        o = (0, S.A)(t.match(z) || [], 3),
                        a = o[1],
                        s = o[2];
                    return (0, r.jsx)(g.Ay, {
                        as: "a",
                        href: s,
                        children: a,
                        className: "break-all text-primary no-underline",
                        onClick: function() {
                            return i({
                                title: a,
                                link: s
                            })
                        }
                    })
                },
                K = function(e) {
                    var t = e.content;
                    return (0, r.jsx)(g.Ay, {
                        as: "span",
                        className: "underline",
                        children: t.replace(/\+/g, "")
                    })
                },
                Z = function(e) {
                    var t = e.content;
                    return (0, r.jsx)(g.Ay, {
                        as: "strong",
                        children: t.replace(/(`|\*\*)/g, "")
                    })
                },
                Q = function(e) {
                    var t = e.content.replace("<h>", '<div style="color: #F0B90B; display: inline-block">').replace("</h>", "</div>");
                    return (0, r.jsx)(g.Ay, {
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })
                },
                Y = function(e) {
                    var t = e.content.replace(/<li>([\s\S]*?)<\/li>/g, "<div class='list-item-content'>$1</div>");
                    return (0, r.jsx)(g.Ay, {
                        as: "li",
                        dangerouslySetInnerHTML: {
                            __html: t
                        }
                    })
                },
                X = function(e) {
                    var t = e.content,
                        n = e.onClick,
                        a = (0, i.useMemo)((function() {
                            var e = (t || "").trim(),
                                n = [];
                            return (e.match(j) || []).forEach((function(t) {
                                var r, i = t.length,
                                    o = e.indexOf(t),
                                    a = e.substring(0, o);
                                (r = n).push.apply(r, [a, t]), e = e.slice(o + i)
                            })), n.concat(e).filter(Boolean)
                        }), [t]);
                    return (0, r.jsx)(g.Ay, {
                        children: a.map((function(e, t) {
                            return R()([
                                [function() {
                                    return F.test(e)
                                }, function() {
                                    return (0, r.jsx)($, {
                                        content: e,
                                        linkClick: n
                                    }, t)
                                }],
                                [function() {
                                    return D.test(e) || U.test(e)
                                }, function() {
                                    return (0, r.jsx)(Z, {
                                        content: e
                                    }, t)
                                }],
                                [function() {
                                    return q.test(e)
                                }, function() {
                                    return (0, r.jsx)(K, {
                                        content: e
                                    }, t)
                                }],
                                [function() {
                                    return G.test(e)
                                }, function() {
                                    return (0, r.jsx)(Q, {
                                        content: e
                                    }, t)
                                }],
                                [function() {
                                    return H.test(e)
                                }, function() {
                                    return (0, r.jsx)(Y, {
                                        content: e
                                    }, t)
                                }],
                                [function() {
                                    return !0
                                }, function() {
                                    return (0, r.jsx)(o().Fragment, {
                                        children: e
                                    }, t)
                                }]
                            ])()
                        }))
                    })
                },
                J = function(e) {
                    if (H.test(e) && (e = e.replaceAll(/<li>([\s\S]*?)<\/li>/g, "<li class='list-item-content'>$1</li>")), G.test(e) && (e = e.replaceAll("<h>", '<div style="color: #F0B90B; display: inline">').replaceAll("</h>", "</div>")), V.test(e)) {
                        var t = e.match(V);
                        null === t || void 0 === t || t.forEach((function(t) {
                            var n = (0, S.A)(t.match(W) || [], 3),
                                r = n[1],
                                i = n[2];
                            e = e.replace(W, "<a class='answer-link' href=".concat(i, ">").concat(r, "</a>"))
                        }))
                    }
                    return e
                };
            const ee = o().memo((function(e) {
                var t = e.content,
                    n = e.linkClick,
                    o = (0, p.A)(e, ["content", "linkClick"]),
                    a = (0, i.useMemo)((function() {
                        return (t || "").split("\\n").map((function(e, t) {
                            return (0, r.jsx)(X, {
                                content: e,
                                onClick: n
                            }, t)
                        }))
                    }), [t, n]);
                return (0, r.jsx)(g.Ay, (0, d.A)((0, f.A)({}, o), {
                    children: a
                }))
            }));
            var te = n("i/bi"),
                ne = n("dn+i");
            const re = o().forwardRef((function(e, t) {
                e.theme;
                var n = e.wrapClassName,
                    i = e.wrapStyle,
                    o = e.className,
                    a = (0, p.A)(e, ["theme", "wrapClassName", "wrapStyle", "className"]),
                    s = (0, ne.Rm)().layoutMax,
                    c = void 0 === s ? 1248 : s,
                    u = T()("mx-auto mobile:px-m px-xl", o);
                return (0, r.jsx)(g.Ay, {
                    className: T()("bg-bg1", n),
                    style: i,
                    children: (0, r.jsx)(g.Ay, (0, d.A)((0, f.A)({}, a), {
                        className: u,
                        style: {
                            maxWidth: c
                        },
                        ref: t
                    }))
                })
            }));
            var ie = n("9Fw3"),
                oe = n("mnmD"),
                ae = (Object.prototype.hasOwnProperty, (0, i.createContext)("undefined" !== typeof HTMLElement ? (0, ie.A)() : null)),
                se = (0, i.createContext)({}),
                ce = (ae.Provider, function(e) {
                    var t = function(t, n) {
                        return (0, i.createElement)(ae.Consumer, null, (function(r) {
                            return e(t, r, n)
                        }))
                    };
                    return (0, i.forwardRef)(t)
                });
            var ue = n("3xeB"),
                le = (n("5IAQ"), function e(t) {
                    for (var n = t.length, r = 0, i = ""; r < n; r++) {
                        var o = t[r];
                        if (null != o) {
                            var a = void 0;
                            switch (typeof o) {
                                case "boolean":
                                    break;
                                case "object":
                                    if (Array.isArray(o)) a = e(o);
                                    else
                                        for (var s in a = "", o) o[s] && s && (a && (a += " "), a += s);
                                    break;
                                default:
                                    a = o
                            }
                            a && (i && (i += " "), i += a)
                        }
                    }
                    return i
                });

            function fe(e, t, n) {
                var r = [],
                    i = (0, ue.R)(e, r, n);
                return r.length < 2 ? n : i + t(r)
            }
            ce((function(e, t) {
                return (0, i.createElement)(se.Consumer, null, (function(n) {
                    var r = function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            var i = (0, oe.J)(n, t.registered);
                            return (0, ue.s)(t, i, !1), t.key + "-" + i.name
                        },
                        i = {
                            css: r,
                            cx: function() {
                                for (var e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                                return fe(t.registered, r, le(n))
                            },
                            theme: n
                        },
                        o = e.children(i);
                    return !0, o
                }))
            })), n("6p3b");
            var de = n("a59x"),
                pe = n("ZSsA"),
                he = function() {
                    (0, te.M)({
                        elementId: "open_US_regis_page"
                    }), window.open("https://www.binance.us/register?activityId=binance&utm_source=binanceglobal&utm_medium=regis_page&utm_campaign=com_redirect", "_blank")
                };
            const ge = function() {
                var e = (0, pe.s9)().language,
                    t = (0, B.G0)().region;
                return (0, i.useEffect)((function() {
                    var n = (0, de.bG)();
                    if ("us" === t && n && e) {
                        var r = function(t) {
                            var r = {
                                relative: "/".concat(e, "/register"),
                                absolute: "https://accounts.".concat(n, "/").concat(e, "/register")
                            };
                            ! function(e, t) {
                                for (var n = e, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3, i = t.absolute, o = t.relative; r && n;) {
                                    var a = n.getAttribute("href");
                                    if ((null === a || void 0 === a ? void 0 : a.startsWith(i)) || (null === a || void 0 === a ? void 0 : a.startsWith(o))) return he();
                                    n = n.parentNode, r -= 1
                                }
                            }(t.target, r)
                        };
                        return document.addEventListener("click", r),
                            function() {
                                return document.removeEventListener("click", r)
                            }
                    }
                    return function() {}
                }), [t, e]), null
            };
            var ve = n("Wy28"),
                me = n("ZWZn"),
                ye = n("Qc4H"),
                be = n("HS2I"),
                we = n("VA12");
            const Ee = function(e) {
                return o().createElement(N.A, (0, I.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",
                    fill: "currentColor"
                }))
            };
            var _e = n("2Bze"),
                Re = n("pMlP"),
                xe = function() {
                    var e = (0, B.bG)(),
                        t = "ltr" === (0, B.jH)(),
                        n = (0, S.A)(o().useState({}), 2),
                        i = n[0],
                        a = n[1],
                        s = (0, S.A)(o().useState(), 2),
                        c = s[0],
                        l = s[1],
                        p = (0, S.A)(o().useState([]), 2),
                        h = p[0],
                        v = p[1],
                        m = (0, ne.Rm)().layoutMax,
                        y = void 0 === m ? 1248 : m,
                        b = (0, pe.s9)(ve.x[1]),
                        w = b.language,
                        E = b.t,
                        _ = (0, pe.s9)(ve.x[0]).t,
                        R = h.filter((function(e) {
                            return !i[e.id]
                        }));
                    o().useEffect((function() {
                        e && (! function(e, t) {
                            var n = Date.now(),
                                r = (0, me.UE)(),
                                i = !1;
                            (0, ye.H)({
                                channel: "emergency_announcement2_".concat(e),
                                responseName: "emergencyBroadcastMsg"
                            })((function(e) {
                                i || (i = !0, r({
                                    type: "FIRST_PUSH",
                                    channel: "emergencyBroadcastMsg",
                                    duration: Math.floor((Date.now() - n) / 1e3)
                                })), t(e)
                            }))
                        }(w, (function(e) {
                            var t = (e || {}).emergencyMessage;
                            v((void 0 === t ? [] : t).filter((function(e) {
                                var t = (e || {}).scope;
                                return (void 0 === t ? [] : t).indexOf("home-page") > -1
                            })))
                        })), (0, we.get)("/bapi/kyc/v1/private/risk/check/cases-cl-check").then((function(e) {
                            var t = e.data;
                            return l(t)
                        })).catch((function() {})))
                    }), [e]);
                    var x = o().useMemo((function() {
                        return R.length ? R.map((function(e) {
                            return (0, r.jsxs)(g.Ay, {
                                style: {
                                    maxWidth: y
                                },
                                className: "mx-auto flex px-xl text-[14px] leading-[24px] mobile:px-m mobile:text-[12px]",
                                children: [(0, r.jsx)(Ee, {
                                    className: "flex-none scale-90 text-[24px] text-t-yellow"
                                }), (0, r.jsxs)(g.Ay, {
                                    className: "mx-2xs flex-1",
                                    children: [(0, r.jsx)(g.Ay, {
                                        className: "inline",
                                        children: e.title
                                    }), e.path ? (0, r.jsx)(g.Ay, {
                                        as: "a",
                                        href: e.path,
                                        children: _("action-more"),
                                        className: "text-t-yellow no-underline ".concat(t ? "ml-2xs" : "mr-2xs")
                                    }) : null]
                                }), (0, r.jsx)(_e.A, {
                                    className: "flex-none scale-[0.7] cursor-pointer text-[24px] text-primary",
                                    onClick: function() {
                                        return a((function(t) {
                                            return (0, d.A)((0, f.A)({}, t), (0, u.A)({}, e.id, !0))
                                        }))
                                    }
                                })]
                            }, e.id)
                        })) : c && c.url_path ? (0, r.jsxs)(g.Ay, {
                            style: {
                                maxWidth: y
                            },
                            className: "mx-auto flex px-xl text-[14px] leading-[24px] mobile:px-m mobile:text-[12px]",
                            children: [(0, r.jsx)(Ee, {
                                className: "flex-none scale-90 text-[24px] text-primary"
                            }), (0, r.jsxs)(g.Ay, {
                                className: "mx-2xs flex-1",
                                children: [(0, r.jsx)(g.Ay, {
                                    className: "inline",
                                    children: E(c.msg_smartling_code)
                                }), (0, r.jsx)(g.Ay, {
                                    as: "a",
                                    href: "/".concat(w, "/").concat(c.url_path),
                                    className: "text-t-yellow no-underline ".concat(t ? "ml-2xs" : "mr-2xs"),
                                    children: E(c.btn_smartling_code)
                                })]
                            })]
                        }) : null
                    }), [R, c]);
                    return x ? (0, r.jsx)(g.Ay, {
                        className: "bg-badge py-2xs text-PrimaryText",
                        children: (0, r.jsx)(Re.A, {
                            interval: 8e3,
                            autoplay: !0,
                            circular: !0,
                            children: x
                        })
                    }) : null
                };
            const Ae = o().memo((function() {
                return (0, be.useMediaState)().isMobile ? null : (0, r.jsx)(xe, {})
            }));
            var Se = "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? o().useLayoutEffect : o().useEffect;
            var Ce = n("NsjG"),
                Te = n("c+5G"),
                ke = n("lp8t");
            const Ie = function(e) {
                return o().createElement(N.A, (0, I.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M13.5 6.379V3h-3v3.379l-2.94-2.94-2.12 2.122L7.878 8H4v3h6.75V8h2.5v3H20V8h-3.879l2.44-2.44-2.122-2.12L13.5 6.378zM4 13.5V20h6.75v-6.5H4zM13.25 20H20v-6.5h-6.75V20z",
                    fill: "currentColor"
                }))
            };
            var Ne = n("Ma35"),
                Me = "EXIT_INTENT_LAST_SHOWN_TIME",
                Le = function(e) {
                    var t = e.staticUrl,
                        n = e.fromTop,
                        a = (0, pe.s9)(ve.x[0]),
                        s = a.language,
                        c = a.t,
                        u = (0, B.sn)(),
                        l = (0, be.useTheme)().isLight,
                        f = (0, ne.Rm)().i18n,
                        d = "ltr" === (0, B.jH)(),
                        p = (0, S.A)(o().useState(!0), 2),
                        h = p[0],
                        v = p[1],
                        m = (0, i.useCallback)((function(e) {
                            (0, te.M)({
                                elementId: e
                            }), window.localStorage.setItem(Me, Date.now().toString())
                        }), []),
                        y = (0, i.useCallback)((function() {
                            v(!1), m("exit_intent_register_close")
                        }), []),
                        b = "promote-modal/exit-popup-banner-".concat(l ? "light" : "dark", ".png"),
                        w = c("exit-intent-desc-new");
                    return (0, r.jsxs)(Ne.Ay, {
                        visible: h,
                        responsive: !0,
                        className: "exit-modal",
                        children: [(0, r.jsx)(te.A, {
                            elementId: n ? "exit_intent_popup" : "exit_intent_popup_scrolldown"
                        }), (0, r.jsxs)(g.Ay, {
                            className: "relative rounded-[8px] mobile:h-auto mobile:w-full",
                            children: [(0, r.jsx)(g.Ay, {
                                as: "img",
                                className: "h-[180px] w-[375px]",
                                src: "".concat(t, "/static/images/home/").concat(b)
                            }), (0, r.jsx)(_e.A, {
                                onClick: y,
                                className: "absolute top-m cursor-pointer text-[24px] text-t-third ".concat(d ? "right-m" : "left-m")
                            })]
                        }), (0, r.jsxs)(g.Ay, {
                            className: "flex-col px-xl pb-3xl pt-xl text-center text-PrimaryText",
                            children: [(0, r.jsx)(g.Ay, {
                                className: "pb-m text-headline6",
                                children: c("exit-intent-title", f, "Claim Your 100 USDT Reward")
                            }), (0, r.jsx)(g.Ay, {
                                className: "pb-xl text-body2",
                                children: w
                            }), (0, r.jsxs)(g.Ay, {
                                as: "a",
                                onClick: function() {
                                    return m("exit_intent_register")
                                },
                                className: "bn-button bn-button-primary flex items-center rounded-xs",
                                href: "https://accounts.".concat(u, "/").concat(s, "/register"),
                                children: [(0, r.jsx)(Ie, {
                                    className: d ? "mr-4xs" : "ml-4xs"
                                }), c("exit-intent-btn", f, "Claim Reward")]
                            })]
                        })]
                    })
                };
            const Be = o().memo(Le);
            var Oe = function() {
                var e = Ce.IG.getItem(Me) || 0;
                return Date.now() - e > 1728e5
            };
            const Pe = function() {
                var e = (0, i.useState)(!1),
                    t = e[0],
                    n = e[1],
                    a = (0, i.useState)(!1),
                    s = a[0],
                    c = a[1],
                    u = (0, ke.j)().showTopBar,
                    l = function(e) {
                        var t = o().useRef(e);
                        return Se((function() {
                            t.current = e
                        })), o().useCallback((function() {
                            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                            var i;
                            return null === (i = t.current) || void 0 === i ? void 0 : i.apply(null, n)
                        }), [])
                    }((function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        Oe() && e && (e ? n(!0) : c(!0))
                    }));
                return (0, i.useEffect)((function() {
                    if (document.documentElement.offsetWidth > 1024 && Oe()) {
                        var e = function(t) {
                            t.y < 10 && (l(), document.removeEventListener("mouseleave", e))
                        };
                        return document.addEventListener("mouseleave", e),
                            function() {
                                return document.removeEventListener("mouseleave", e)
                            }
                    }
                }), [l]), (0, i.useEffect)((function() {
                    var e = document.documentElement.offsetWidth > 1024;
                    if (!e && Oe()) {
                        var t = document.getElementById("__APP");
                        if (!t) return function() {};
                        var n = t.scrollTop,
                            r = function() {
                                if (!e) {
                                    var i = t.scrollTop,
                                        o = n - i;
                                    o > 0 ? o > 10 && (l(), n = i, t.removeEventListener("scroll", r)) : n = i
                                }
                                var a = t.scrollHeight,
                                    s = t.clientHeight;
                                t.scrollTop + s >= .75 * a && l(!1)
                            };
                        return t.addEventListener("scroll", r),
                            function() {
                                return t.removeEventListener("scroll", r)
                            }
                    }
                }), [l]), (s || t) && u ? (0, r.jsx)(Be, {
                    fromTop: t,
                    staticUrl: Te.K5
                }) : null
            };
            const je = function(e) {
                return o().createElement(N.A, (0, I.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    opacity: .25,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.11 88c22.09 0 40-17.908 40-40 0-22.09-17.91-40-40-40-22.092 0-40 17.91-40 40 0 22.092 17.908 40 40 40zm-3-36V32h6v20h-6zm0 12v-6h6v6h-6z",
                    fill: "#F0B90B"
                }), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M77.11 48c0 16.017-12.985 29-29 29-16.017 0-29-12.983-29-29 0-16.015 12.983-29 29-29 16.015 0 29 12.985 29 29zm-26-15v19h-6V33h6zm0 31v-6h-6v6h6z",
                    fill: "#F0B90B"
                }))
            };
            var De = {
                    kz: "kk-KZ",
                    en: "en-KZ",
                    ru: "ru-KZ"
                },
                Ue = "kz-ip-dialog",
                qe = Object.values(De);
            const Fe = function() {
                var e = (0, pe.s9)(ve.x[0]),
                    t = e.language,
                    n = e.t,
                    a = (0, B.G0)().region,
                    s = (0, B.bG)(),
                    c = (0, i.useState)(!1),
                    u = c[0],
                    l = c[1];
                o().useEffect((function() {
                    var e = window.location.search;
                    "kz" !== a.toLowerCase() || !1 !== s || /kzDialogShow/.test(e) || Ce.IG.getItem(Ue) || qe.includes(t) || l(!0)
                }), [a, s, t]);
                var f = (0, i.useCallback)((function() {
                        Ce.IG.setItem(Ue, !0), window.location.href = "/".concat(De[t] || "ru-KZ")
                    }), [t]),
                    d = (0, i.useCallback)((function() {
                        l(!1), Ce.IG.setItem(Ue, !0)
                    }), []);
                return (0, r.jsxs)(Ne.Ay, {
                    visible: u,
                    enablePortal: !0,
                    className: "kz-ip-limit",
                    children: [(0, r.jsx)(je, {
                        className: "mx-auto text-[80px] mobile:text-[64px]"
                    }), (0, r.jsx)(g.Ay, {
                        className: "text-body2 text-t-third",
                        children: n("kz-ip-dialog-content")
                    }), (0, r.jsxs)(Ne.Ay.Footer, {
                        className: "mt-xl flex-col p-[0px]",
                        children: [(0, r.jsx)(k.A, {
                            className: "mb-ls rounded-xs",
                            onClick: d,
                            children: n("kz-ip-dialog-stay")
                        }), (0, r.jsx)(k.A, {
                            variant: "secondary",
                            className: "rounded-xs",
                            onClick: f,
                            children: n("kz-ip-dialog-redirect")
                        })]
                    })]
                })
            };
            var Ve = n("tEf9"),
                ze = n("oFD3"),
                We = n("2Gaa"),
                Ge = n("zJWh"),
                He = [{
                    lan: "sv",
                    lanName: "Swedish",
                    fullLanCode: "sv-SE",
                    regions: ["se"]
                }],
                $e = "original_lan",
                Ke = "RECOMEND_LAN_DISPLAYED_STORAGE_KEY";
            const Ze = function() {
                var e = (0, i.useTransition)()[1],
                    t = (0, B.G0)().region,
                    n = (0, B.bG)(),
                    o = (0, pe.s9)("com-widget").language,
                    a = (0, i.useState)({}),
                    s = a[0],
                    c = a[1],
                    l = (0, i.useState)(""),
                    f = l[0],
                    d = l[1],
                    p = (He.find((function(e) {
                        return e.regions.includes(null === t || void 0 === t ? void 0 : t.toLowerCase())
                    })) || {
                        lan: "",
                        lanName: "",
                        fullLanCode: "",
                        regions: []
                    }).lan,
                    h = (0, i.useMemo)((function() {
                        return (0, de.Et)($e) || ""
                    }), []),
                    g = s[h || f] || "";
                return (0, i.useEffect)((function() {
                    !0 !== n || Ce.IG.getItem(Ke) || (0, ze.FL)().then((function(e) {
                        var t = e.data;
                        return d(t)
                    }))
                }), [n]), (0, i.useEffect)((function() {
                    p && !Ce.IG.getItem(Ke) && n && "UK" !== Ge.U.read("BNC-Location") && ((0, P.aI)(null === o || void 0 === o ? void 0 : o.toLowerCase(), null === p || void 0 === p ? void 0 : p.toLowerCase()) || function(e, t) {
                        var n = window.location.pathname.split("/").slice(2),
                            r = window.location.search.substring(1).split("&").map((function(e) {
                                var n = (0, S.A)(e.split("="), 1)[0];
                                return null === t[n] ? null : t[n] ? "".concat(n, "=").concat(t[n]) : e
                            }));
                        window.location.href = ["/".concat([e].concat((0, Ve.A)(n)).join("/")), r.filter(Boolean).join("&")].join("?")
                    }(p, (0, u.A)({}, $e, g)))
                }), [g, p, o, h, n]), (0, i.useEffect)((function() {
                    (0, We.tI)().then((function(t) {
                        var n = t.data;
                        return e((function() {
                            return c(n || {})
                        }))
                    }))
                }), []), (0, r.jsx)(r.Fragment, {})
            };
            var Qe = "homepage_switch_currency_zar",
                Ye = "homepage_switch_currency_zar";
            const Xe = function() {
                var e = (0, i.useState)(null),
                    t = e[0],
                    n = e[1],
                    o = (0, i.useState)(!1),
                    a = o[0],
                    s = o[1],
                    c = (0, pe.s9)().language,
                    u = (0, be.useCurrency)(),
                    l = u.currency,
                    f = u.setCurrency;
                (0, i.useEffect)((function() {
                    null === t || t || "EN-ZA" === c.toUpperCase() && "ZAR" !== (null === l || void 0 === l ? void 0 : l.toUpperCase()) && (s(!0), Ce.IG.setItem(Ye, Date.now()))
                }), [c, l, t]), (0, i.useEffect)((function() {
                    var e = setTimeout((function() {
                        var e = Date.now(),
                            t = Ce.IG.getItem(Ye) || 0;
                        n(e - t < 864e5)
                    }), 3e3);
                    return function() {
                        return clearTimeout(e)
                    }
                }), []);
                return (0, r.jsxs)(Ne.Ay, {
                    visible: a,
                    enablePortal: !0,
                    className: "kz-ip-limit",
                    children: [a && (0, r.jsx)(te.A, {
                        elementId: Qe
                    }), (0, r.jsx)(g.Ay, {
                        className: "text-subtitle1 text-t-secondary",
                        children: "Would you like to set ZAR as your default currency?"
                    }), (0, r.jsxs)(Ne.Ay.Footer, {
                        className: "mt-xl flex-row p-[0px]",
                        children: [(0, r.jsx)(k.A, {
                            className: "mb-ls w-full rounded-xs",
                            variant: "secondary",
                            onClick: function() {
                                (0, te.M)({
                                    elementId: Qe,
                                    extraInfo: {
                                        udc_ext9: 0
                                    }
                                }), s(!1)
                            },
                            children: "No"
                        }), (0, r.jsx)(k.A, {
                            className: "w-full rounded-xs",
                            onClick: function() {
                                (0, te.M)({
                                    elementId: Qe,
                                    extraInfo: {
                                        udc_ext9: 1
                                    }
                                }), f("ZAR"), s(!1)
                            },
                            children: "Yes"
                        })]
                    })]
                })
            }
        },
        "4v8Z": (e, t, n) => {
            "use strict";
            n.d(t, {
                jH: () => s,
                sn: () => m,
                vO: () => l,
                Z4: () => h,
                bG: () => g,
                G0: () => v
            });
            var r = n("HS2I"),
                i = n("a59x"),
                o = n("DTvD"),
                a = n("W9hJ"),
                s = function() {
                    return (0, a.PC)().dir || "ltr"
                },
                c = (n("ZSsA"), n("BK7R")),
                u = n("QUKP"),
                l = function(e) {
                    var t = e.hash,
                        n = {};
                    return t && Object.values(t).forEach((function(e) {
                        n[null === e || void 0 === e ? void 0 : e.id] = null === e || void 0 === e ? void 0 : e.config
                    })), (0, u.A)((0, c.A)({}, e), {
                        reactRoot: [],
                        newConfigMapping: n
                    })
                };
            n("lp8t");
            var f = n("VP0d"),
                d = n("NoXm"),
                p = n("T3Fm");
            var h = function(e, t) {
                    if (!p.o) return function() {
                        return [t, function() {}]
                    };
                    var n = window.localStorage.getItem(e);
                    return n && d.cachePromiseStore.setState(e, JSON.parse(n) || t),
                        function() {
                            var t = (0, f.A)((0, d.useCacheState)(e), 2),
                                n = t[0],
                                r = t[1];
                            return [n, (0, o.useCallback)((function(t) {
                                window.localStorage.setItem(e, JSON.stringify(t)), r(t)
                            }), [])]
                        }
                }("isHideSmallBalance", !1),
                g = function() {
                    return (0, r.useBncUserStatus)().isLogin
                },
                v = function() {
                    return {
                        region: ((0, r.useRegion)().value || {}).country || ""
                    }
                },
                m = function() {
                    var e = (0, o.useState)(""),
                        t = e[0],
                        n = e[1];
                    return (0, o.useEffect)((function() {
                        n((0, i.bG)())
                    }), []), t
                }
        },
        "+cX9": (e, t, n) => {
            "use strict";
            n.d(t, {
                by: () => d,
                nN: () => l,
                o0: () => c
            });
            var r = n("DTvD"),
                i = n("c+5G"),
                o = n("dn+i"),
                a = n("T3Fm"),
                s = n("zJWh"),
                c = "fresh",
                u = "color",
                l = "false",
                f = "isRedUpGreenDown",
                d = function() {
                    var e = (0, o.Rm)(),
                        t = e.color,
                        n = e.isRedUpGreenDown,
                        d = (0, r.useState)(t || c),
                        p = d[0],
                        h = d[1],
                        g = (0, r.useState)(n || l),
                        v = g[0],
                        m = g[1];
                    return (0, r.useEffect)((function() {
                        if (i.cp) return h(t || c), void m(n || l);
                        a.o && (h(s.U.read(u) || c), m(s.U.read(f) || l))
                    }), [t, n]), {
                        color: p,
                        isRedUpGreenDown: "true" === v
                    }
                }
        },
        lp8t: (e, t, n) => {
            "use strict";
            n.d(t, {
                j: () => d
            });
            var r, i = n("BK7R"),
                o = n("QUKP"),
                a = n("DTvD"),
                s = n("gvNJ"),
                c = n("T3Fm"),
                u = n("a59x"),
                l = n("ZSsA"),
                f = n("4v8Z"),
                d = function() {
                    var e = (0, l.s9)().language,
                        t = (0, f.bG)(),
                        n = (0, a.useState)({
                            loading: !1
                        }),
                        d = n[0],
                        p = n[1];
                    return (0, a.useEffect)((function() {
                        if (c.o && !t) {
                            var n = (0, u.bG)(),
                                a = r || (0, s.lN)();
                            p((function(e) {
                                return (0, o.A)((0, i.A)({}, e), {
                                    loading: !0
                                })
                            })), a.then((function(t) {
                                var r = (null === t || void 0 === t ? void 0 : t.data) || {},
                                    a = "https://accounts.".concat(n, "/").concat(e, "/").concat(r.registerLink);
                                p((0, o.A)((0, i.A)({}, r), {
                                    registerLink: a,
                                    loading: !1
                                }))
                            })).catch((function(e) {
                                throw r = null, p((function(e) {
                                    return (0, o.A)((0, i.A)({}, e), {
                                        loading: !1
                                    })
                                })), e
                            })), r || (r = a)
                        }
                    }), [t]), t ? {
                        loading: !1
                    } : d
                }
        },
        ZRAR: (e, t, n) => {
            "use strict";
            n.d(t, {
                default: () => en
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("jg1C"),
                a = n("DTvD"),
                s = n.n(a),
                c = n("1mgb"),
                u = n("W9hJ"),
                l = n("HS2I"),
                f = n("sViW"),
                d = n("VP0d"),
                p = n("Pz56"),
                h = n.n(p),
                g = n("yh8G"),
                v = n("Hkrp"),
                m = n("AGKK"),
                y = n("2Bze"),
                b = n("NsjG"),
                w = n("wIZF"),
                E = n("VA12");

            function _(e) {
                return (0, w.__awaiter)(this, void 0, void 0, (function() {
                    var t, n, r;
                    return (0, w.__generator)(this, (function(i) {
                        switch (i.label) {
                            case 0:
                                return "/bapi/apex/v1/friendly/apex/marketing/market/getNewLangRecommend", [4, (null !== (r = null === (n = null === (t = null === globalThis || void 0 === globalThis ? void 0 : globalThis.__ATHENA_HTTP_SDK__) || void 0 === t ? void 0 : t.mappingMethods) || void 0 === n ? void 0 : n.get) && void 0 !== r ? r : E.get)("/bapi/apex/v1/friendly/apex/marketing/market/getNewLangRecommend", e)];
                            case 1:
                                return [2, i.sent()]
                        }
                    }))
                }))
            }
            var R = function() {
                    var e = (0, f.A)(h().mark((function e() {
                        var t;
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, _();
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || {});
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                x = n("4v8Z"),
                A = n("i/bi"),
                S = n("ZSsA"),
                C = "lngGuideKey",
                T = {
                    lngInfo: {},
                    userOper: []
                },
                k = function() {
                    var e = (0, f.A)(h().mark((function e(t) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, Promise.all([function() {
                                        return b.IG.setItem(C, "y")
                                    }, (null === t || void 0 === t ? void 0 : t.isLoggedIn) && (null === t || void 0 === t ? void 0 : t.configName) ? (0, g.eW)({
                                        configName: null === t || void 0 === t ? void 0 : t.configName,
                                        configType: "preferLang"
                                    }) : function() {
                                        return null
                                    }]);
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                I = function(e) {
                    e.isMobile;
                    var t = e.isHybrid,
                        n = e.updateBannerStatus,
                        r = e.isHasPriorityToShow,
                        i = (0, S.s9)().language,
                        a = (0, x.bG)(),
                        c = "isLtr" === (0, x.jH)(),
                        u = (0, d.A)(s().useState(!0), 2),
                        l = u[0],
                        p = u[1],
                        g = ((0, v.s)((0, f.A)(h().mark((function e() {
                            var t, r;
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (void 0 !== a) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return", null);
                                    case 2:
                                        return t = b.IG.getItem(C, ""), e.next = 5, R();
                                    case 5:
                                        return r = e.sent, n({
                                            isLoading: !1
                                        }), e.abrupt("return", {
                                            lngInfo: r,
                                            userOper: [{
                                                actionType: "SKIP",
                                                bizType: "NEW_LANG_REC_TIPS",
                                                operResult: t
                                            }]
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [a]).value || T).lngInfo,
                        w = g.lang,
                        E = g.tips,
                        _ = g.okBtn,
                        I = g.domain,
                        N = s().useMemo((function() {
                            return {
                                rec_lang: w
                            }
                        }), [w]),
                        M = s().useCallback((function() {
                            k(), p(!1), (0, A.M)({
                                elementId: "locationchange_skip",
                                extraInfo: N
                            })
                        }), [N]),
                        L = s().useCallback((0, f.A)(h().mark((function e() {
                            return h().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (I) {
                                            e.next = 3;
                                            break
                                        }
                                        return e.next = 3, k({
                                            isLoggedIn: a,
                                            configName: w
                                        });
                                    case 3:
                                        window.location.href = I || "/".concat(w), (0, A.M)({
                                            elementId: "locationchange_continue",
                                            extraInfo: N
                                        });
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [a, w, I]),
                        B = I || !t && w && E && w !== i;
                    return s().useEffect((function() {
                        n({
                            isShown: l && B
                        })
                    }), [l, B]), console.log("111 lngguide ", {
                        isLoggedIn: a,
                        isHasPriorityToShow: r,
                        visible: l,
                        showGuide: B
                    }), r && l && B ? (0, o.jsxs)(m.Ay, {
                        className: "min-h-[56px] bg-[#2B3139] py-m text-[16px] leading-[24px]",
                        children: [(0, o.jsx)(A.A, {
                            elementId: "view_locationchange",
                            extraInfo: N
                        }), (0, o.jsxs)(m.Ay, {
                            className: "mx-auto flex max-w-[1240px] items-center justify-center px-xl mobile:px-m",
                            children: [(0, o.jsx)(m.Ay, {
                                className: c ? "mr-m" : "ml-m",
                                children: null === E || void 0 === E ? void 0 : E.split("@").map((function(e, t) {
                                    return (0, o.jsx)(m.Ay, {
                                        as: "span",
                                        children: /^:/.test(e) ? e.slice(1) : e,
                                        className: /^:/.test(e) ? "text-t-brand" : "text-[#FFFFFF]"
                                    }, t)
                                }))
                            }), (0, o.jsx)(m.Ay, {
                                onClick: L,
                                children: _ || "Continue",
                                id: "binance_".concat(w, "_click_switch"),
                                className: "flex-none cursor-pointer rounded-[8px] bg-[#474D57] px-m text-[12px] text-[#E6E8EA]"
                            }), (0, o.jsx)(y.A, {
                                onClick: M,
                                className: "flex-none cursor-pointer text-[20px] text-[#76808F] ".concat(c ? "ml-m" : "mr-m")
                            })]
                        })]
                    }) : null
                };
            var N = [{
                    Comp: s().memo(I),
                    priority: 0
                }],
                M = function() {
                    var e = (0, l.useMediaState)().isMobile,
                        t = (0, u.PC)().isHybrid,
                        n = function() {
                            var e = (0, a.useState)(N.map((function() {
                                    return !0
                                }))),
                                t = e[0],
                                n = e[1],
                                r = (0, a.useState)(N.map((function() {
                                    return !1
                                }))),
                                i = r[0],
                                o = r[1],
                                s = (0, a.useCallback)((function(e) {
                                    var t = e.idx,
                                        r = e.isLoading,
                                        i = e.isShown;
                                    void 0 !== r && n((function(e) {
                                        var n = e.slice();
                                        return n[t] = r, n
                                    })), void 0 !== i && o((function(e) {
                                        var n = e.slice();
                                        return n[t] = Boolean(i) || n[t], n
                                    }))
                                }), []),
                                c = (0, a.useMemo)((function() {
                                    return t.every((function(e) {
                                        return !e
                                    }))
                                }), [t]),
                                u = (0, a.useMemo)((function() {
                                    return i.reduce((function(e, t, n) {
                                        return -1 === e && t ? n : e
                                    }), -1)
                                }), [i]);
                            return {
                                isAllLoaded: c,
                                displayPriority: c ? u : -1,
                                updateBannerStatus: s
                            }
                        }(),
                        r = (n.isAllLoaded, n.displayPriority, n.updateBannerStatus);
                    return (0, o.jsx)(s().Fragment, {
                        children: N.map((function(n) {
                            var i = n.Comp,
                                a = n.priority;
                            return (0, o.jsx)(i, {
                                isHybrid: t,
                                isMobile: e,
                                updateBannerStatus: function(e) {
                                    var t = e.isLoading,
                                        n = e.isShown;
                                    return r({
                                        idx: a,
                                        isLoading: t,
                                        isShown: n
                                    })
                                },
                                isHasPriorityToShow: !0
                            }, a)
                        }))
                    })
                };
            const L = s().memo(M);
            var B = n("c+5G"),
                O = n("e8ni"),
                P = function(e) {
                    return e.cookies || {}
                },
                j = function() {
                    var e = (0, a.useRef)(null),
                        t = (0, O.wA)();
                    return e.current = (0, O.d4)(P), {
                        cookies: e.current,
                        saveCookie: (0, a.useCallback)((function(n, r) {
                            var i = "function" === typeof r ? r(e.current[n]) : r;
                            t.cookies.save({
                                key: n,
                                value: i
                            })
                        }), [])
                    }
                },
                D = "userPreferredCurrency",
                U = function() {
                    var e = j(),
                        t = e.cookies,
                        n = e.saveCookie;
                    return {
                        cachePreferFiat: t[D],
                        setCacheFiat: (0, a.useCallback)((function(e) {
                            n(D, e)
                        }), [])
                    }
                },
                q = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.loginStatus
                },
                F = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userPreferredCurrency
                },
                V = function() {
                    return (0, O.d4)(q, O.bN) || {}
                },
                z = function() {
                    return (0, O.d4)(F, O.bN) || {}
                },
                W = function() {
                    var e = (0, O.wA)(),
                        t = V().isLoggedIn,
                        n = U(),
                        r = n.cachePreferFiat,
                        i = n.setCacheFiat,
                        o = z().configName;
                    return {
                        userFiat: (t ? o : r) || r,
                        setUseFiat: (0, a.useMemo)((function() {
                            return t ? function(t) {
                                return e.userCenter.updateCurrentFiat(t)
                            } : function(e) {
                                return i(e)
                            }
                        }), [t])
                    }
                },
                G = n("3M7r"),
                H = "light",
                $ = function() {
                    var e = (0, a.useRef)(null),
                        t = (0, O.wA)(),
                        n = W().setUseFiat,
                        i = j().saveCookie;
                    e.current = (0, a.useCallback)((function(e) {
                        var r = e.currency,
                            o = e.theme,
                            a = e.colorScheme,
                            s = e.isRedUpGreenDown;
                        r = /_USD$/i.test(r) ? r : [r, "USD"].join("_"), n(r.toLocaleUpperCase()), i("theme", o === H ? H : "dark"), a && t.global.updateState({
                            colorScheme: a
                        }), void 0 !== s && t.global.updateState({
                            isRedUpGreenDown: s.toString()
                        })
                    }), [n, i, t.global]);
                    var o = function(e) {
                        t.userCenter.updateState({
                            loginStatus: {
                                isLoggedIn: !!e,
                                isLoading: !1
                            },
                            userInfo: (0, r.A)({}, e)
                        })
                    };
                    return (0, v.s)((0, f.A)(h().mark((function t() {
                        var n, r, i;
                        return h().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.t0 = d.A, t.next = 3, Promise.all([G.A.getUserSettings(), G.A.getUserInfo(), G.A.onUserInfoChange((function(e) {
                                        o(e)
                                    })), G.A.onUserSettingsChange((function(t) {
                                        e.current(t)
                                    }))]);
                                case 3:
                                    t.t1 = t.sent, n = (0, t.t0)(t.t1, 2), r = n[0], i = n[1], o(i), e.current(r);
                                case 9:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    }))), []), null
                };
            const K = s().memo($);
            var Z = n("+cX9"),
                Q = n("Wy28"),
                Y = n("M5j3"),
                X = n("O94r"),
                J = n.n(X),
                ee = n("9xbI"),
                te = (0, a.forwardRef)((function(e, t) {
                    return s().createElement(ee.A, (0, w.__assign)({}, e, {
                        ref: t
                    }))
                }));
            te.displayName = "Box";
            const ne = te,
                re = (0, a.createContext)({
                    prefixCls: "bn",
                    getI18n: function(e) {
                        return e
                    }
                });
            const ie = function(e) {
                var t = (0, a.useContext)(re).prefixCls,
                    n = e.color,
                    r = (e.name, e.viewBox),
                    i = void 0 === r ? "0 0 96 96" : r,
                    o = e.children,
                    c = (0, w.__rest)(e, ["color", "name", "viewBox", "children"]),
                    u = J()("".concat(t, "-svg"), e.className),
                    l = {
                        as: "svg",
                        viewBox: i,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: n
                    };
                return s().createElement(ne, (0, w.__assign)({}, c, l, {
                    className: u,
                    children: o
                }))
            };
            const oe = function(e) {
                return s().createElement(ie, (0, w.__assign)({
                    viewBox: "0 0 97 96",
                    fill: "none"
                }, e), s().createElement("path", {
                    opacity: .25,
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M48.11 88c22.09 0 40-17.908 40-40 0-22.09-17.91-40-40-40-22.092 0-40 17.91-40 40 0 22.092 17.908 40 40 40zm-3-36V32h6v20h-6zm0 12v-6h6v6h-6z",
                    fill: "#F0B90B"
                }), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M77.11 48c0 16.017-12.985 29-29 29-16.017 0-29-12.983-29-29 0-16.015 12.983-29 29-29 16.015 0 29 12.985 29 29zm-26-15v19h-6V33h6zm0 31v-6h-6v6h6z",
                    fill: "#F0B90B"
                }))
            };
            var ae = n("0PRs"),
                se = n("qrIQ"),
                ce = n("+0LO"),
                ue = n.n(ce),
                le = n("5BvR");

            function fe(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                const n = Object.keys(e),
                    r = Object.keys(t),
                    i = n.length;
                if (r.length !== i) return !1;
                for (let o = 0; o < i; o++) {
                    const r = n[o];
                    if (e[r] !== t[r] || !Object.prototype.hasOwnProperty.call(t, r)) return !1
                }
                return !0
            }
            var de = n("aWzz"),
                pe = n.n(de);
            const he = pe().oneOfType([pe().string, pe().number]),
                ge = {
                    all: pe().bool,
                    grid: pe().bool,
                    aural: pe().bool,
                    braille: pe().bool,
                    handheld: pe().bool,
                    print: pe().bool,
                    projection: pe().bool,
                    screen: pe().bool,
                    tty: pe().bool,
                    tv: pe().bool,
                    embossed: pe().bool
                },
                ve = {
                    orientation: pe().oneOf(["portrait", "landscape"]),
                    scan: pe().oneOf(["progressive", "interlace"]),
                    aspectRatio: pe().string,
                    deviceAspectRatio: pe().string,
                    height: he,
                    deviceHeight: he,
                    width: he,
                    deviceWidth: he,
                    color: pe().bool,
                    colorIndex: pe().bool,
                    monochrome: pe().bool,
                    resolution: he,
                    type: Object.keys(ge)
                },
                {
                    type: me,
                    ...ye
                } = ve,
                be = {
                    minAspectRatio: pe().string,
                    maxAspectRatio: pe().string,
                    minDeviceAspectRatio: pe().string,
                    maxDeviceAspectRatio: pe().string,
                    minHeight: he,
                    maxHeight: he,
                    minDeviceHeight: he,
                    maxDeviceHeight: he,
                    minWidth: he,
                    maxWidth: he,
                    minDeviceWidth: he,
                    maxDeviceWidth: he,
                    minColor: pe().number,
                    maxColor: pe().number,
                    minColorIndex: pe().number,
                    maxColorIndex: pe().number,
                    minMonochrome: pe().number,
                    maxMonochrome: pe().number,
                    minResolution: he,
                    maxResolution: he,
                    ...ye
                };
            var we = {
                all: { ...ge,
                    ...be
                },
                types: ge,
                matchers: ve,
                features: be
            };
            const Ee = e => {
                    const t = [];
                    return Object.keys(we.all).forEach((n => {
                        const r = e[n];
                        null != r && t.push(((e, t) => {
                            const n = (0, le.A)(e);
                            return "number" === typeof t && (t = `${t}px`), !0 === t ? n : !1 === t ? `not ${n}` : `(${n}: ${t})`
                        })(n, r))
                    })), t.join(" and ")
                },
                _e = (0, a.createContext)(void 0),
                Re = e => {
                    if (!e) return;
                    return Object.keys(e).reduce(((t, n) => (t[(0, le.A)(n)] = e[n], t)), {})
                },
                xe = () => {
                    const e = (0, a.useRef)(!1);
                    return (0, a.useEffect)((() => {
                        e.current = !0
                    }), []), e.current
                },
                Ae = e => {
                    const t = () => (e => e.query || Ee(e))(e),
                        [n, r] = (0, a.useState)(t);
                    return (0, a.useEffect)((() => {
                        const e = t();
                        n !== e && r(e)
                    }), [e]), n
                },
                Se = (e, t, n) => {
                    const r = (e => {
                            const t = (0, a.useContext)(_e),
                                n = () => Re(e) || Re(t),
                                [r, i] = (0, a.useState)(n);
                            return (0, a.useEffect)((() => {
                                const e = n();
                                fe(r, e) || i(e)
                            }), [e, t]), r
                        })(t),
                        i = Ae(e);
                    if (!i) throw new Error("Invalid or missing MediaQuery!");
                    const o = ((e, t) => {
                            const n = () => ue()(e, t || {}, !!t),
                                [r, i] = (0, a.useState)(n),
                                o = xe();
                            return (0, a.useEffect)((() => {
                                if (o) {
                                    const e = n();
                                    return i(e), () => {
                                        e && e.dispose()
                                    }
                                }
                            }), [e, t]), r
                        })(i, r),
                        s = (e => {
                            const [t, n] = (0, a.useState)(e.matches);
                            return (0, a.useEffect)((() => {
                                const t = e => {
                                    n(e.matches)
                                };
                                return e.addListener(t), n(e.matches), () => {
                                    e.removeListener(t)
                                }
                            }), [e]), t
                        })(o),
                        c = xe();
                    return (0, a.useEffect)((() => {
                        c && n && n(s)
                    }), [s]), (0, a.useEffect)((() => () => {
                        o && o.dispose()
                    }), []), s
                };
            var Ce = s().useLayoutEffect,
                Te = function() {
                    var e = function() {
                        var e = s().useState(se.lq),
                            t = e[0],
                            n = e[1];
                        return s().useEffect((function() {
                            return n(!0)
                        }), []), t
                    }();
                    if (se.lq) return {
                        isClient: e,
                        isMobile: !0,
                        isTablet: !1
                    };
                    var t = Se({
                            query: "screen and (max-width: 767px)"
                        }),
                        n = Se({
                            query: "screen and (max-width: 1023px)"
                        });
                    return {
                        isClient: e,
                        isMobile: t,
                        isTablet: e && !t && n
                    }
                },
                ke = n("H2//"),
                Ie = function() {
                    return (0, a.useContext)(re)
                };
            const Ne = function(e) {
                var t = e.prefixCls,
                    n = void 0 === t ? "bn" : t,
                    r = e.iconConfig,
                    i = e.i18n,
                    o = e.children,
                    c = e.isElectron,
                    u = e.isMobile,
                    l = (0, w.__rest)(e, ["prefixCls", "iconConfig", "i18n", "children", "isElectron", "isMobile"]);
                if (se.lq && (!r || !r.path)) throw new Error("iconConfig must be required in ConfigProvider");
                var f = Te(),
                    d = (0, a.useCallback)((function(e, t) {
                        var n = i ? i[e] : null,
                            r = t || {},
                            o = r.defaultValue,
                            a = (0, w.__rest)(r, ["defaultValue"]);
                        return (0, ke.uf)(n || o, a)
                    }), [i]),
                    p = (0, w.__assign)((0, w.__assign)((0, w.__assign)({}, l), c ? (0, w.__assign)((0, w.__assign)({}, f), {
                        isMobile: !1,
                        isTablet: !1
                    }) : (0, w.__assign)((0, w.__assign)({}, f), void 0 !== u && {
                        isMobile: u
                    })), {
                        prefixCls: n,
                        iconConfig: r,
                        getI18n: d
                    });
                return s().createElement(re.Provider, {
                    value: p,
                    children: o
                })
            };
            var Me = n("GmLw").hp,
                Le = "/bapi/fe/resource/image",
                Be = "https://www.binance.com";
            const Oe = ne;
            var Pe = function(e) {
                var t, n = e.isRound,
                    r = e.isMask,
                    i = e.mode,
                    o = e.responsive,
                    c = e.src,
                    u = (0, w.__rest)(e, ["isRound", "isMask", "mode", "responsive", "src"]),
                    l = (0, a.useState)(!1),
                    f = l[0],
                    d = l[1],
                    p = Ie().prefixCls,
                    h = J()("".concat(p, "-lazy-img"), ((t = {
                        "data-mask": !!r,
                        "data-round": !!n,
                        "data-lazy-load": !!e.lazyLoad || !!e.isBackground
                    })["data-mode-".concat(null === i || void 0 === i ? void 0 : i.replace(/\s+/g, "-"))] = !!i, t), e.className),
                    g = (0, a.useCallback)((function() {
                        return d(!0)
                    }), []),
                    v = (0, a.useMemo)((function() {
                        return !(o && (o.mobile || o.tablet || o.desktop)) || f ? {
                            default: c
                        } : Object.keys(o).reduce((function(e, t) {
                            return e[t] = function(e, t) {
                                var n = Me.from(e).toString("base64");
                                try {
                                    var r = new URL(Le, "https://www.binance.com");
                                    return r.searchParams.set("image", n), Object.entries(t).forEach((function(e) {
                                        var t = e[0],
                                            n = e[1];
                                        void 0 !== n && r.searchParams.set(t, String(n))
                                    })), "".concat(r.pathname).concat(r.search)
                                } catch (i) {
                                    return "".concat(Le, "?image=").concat(n, "&w=").concat(t.w, "&h=").concat(t.h)
                                }
                            }(c, o[t]), e
                        }), {})
                    }), [c, o, f]),
                    m = {
                        role: "img",
                        "aria-label": "image",
                        alt: "image"
                    };
                if ("default" in v) return s().createElement(ae.A, (0, w.__assign)({}, m, u, {
                    className: h,
                    mode: i,
                    src: v.default
                }));
                var y = v.mobile,
                    b = v.tablet,
                    E = v.desktop;
                if (se.lq) {
                    var _ = env.API_HOST || Be,
                        R = "".concat(_).concat(y || b || E);
                    return s().createElement(ae.A, (0, w.__assign)({}, m, {
                        onError: g
                    }, u, {
                        className: h,
                        mode: i,
                        src: R
                    }))
                }
                return s().createElement(Oe, {
                    as: "picture"
                }, s().createElement(Oe, {
                    as: "source",
                    media: "only screen and (min-width: 1024px)",
                    srcSet: E
                }), b && s().createElement(Oe, {
                    as: "source",
                    media: "only screen and (min-width: 768px)",
                    srcSet: b
                }), y && s().createElement(Oe, {
                    as: "source",
                    media: "only screen and (max-width: 767px)",
                    srcSet: y
                }), s().createElement(ae.A, (0, w.__assign)({}, m, {
                    onError: g
                }, u, {
                    className: h,
                    mode: i,
                    src: E || c
                })))
            };
            Pe.displayName = "Image";
            const je = Pe;
            var De = n("hTvQ"),
                Ue = n.n(De),
                qe = n("hyZw"),
                Fe = n("2OVm"),
                Ve = se.lq ? 100 : 50;
            const ze = function(e) {
                var t = e.visible,
                    n = e.needSEO,
                    r = (0, w.__rest)(e, ["visible", "needSEO"]),
                    i = s().useRef(),
                    o = (0, a.useState)(!1),
                    c = o[0],
                    u = o[1],
                    l = Ie().prefixCls;
                s().useEffect((function() {
                    return clearTimeout(i.current), i.current = setTimeout((function() {
                            u(!!t), i.current = null
                        }), t ? Ve : 250),
                        function() {
                            return clearTimeout(i.current)
                        }
                }), [t]), s().useEffect((function() {
                    !se.lq && t && setTimeout(Fe.A.checkViewport, 375)
                }), [t]);
                var f = J()("".concat(l, "-trans"), {
                    "data-seo": n && !t && !c,
                    "data-show": t && c,
                    "data-leave": !t && c
                }, e.className);
                return t || c || n ? s().createElement(Oe, (0, w.__assign)({}, r, {
                    className: f
                })) : null
            };
            const We = function(e) {
                var t, n = e.visible,
                    r = e.inner,
                    i = e.maskClose,
                    o = void 0 === i || i,
                    a = e.needSEO,
                    c = e.enablePortal,
                    u = e.portalNode,
                    l = e.scrollFree,
                    f = e.wrapperProps,
                    d = e.onClose,
                    p = void 0 === d ? qe.es : d,
                    h = e.enableScrollSpace,
                    g = void 0 === h || h,
                    v = Ie(),
                    m = v.prefixCls,
                    y = v.isRTL,
                    b = "".concat(m, "-mask"),
                    E = J()(b, ((t = {})["".concat(b, "-rtl")] = !!y, t["".concat(b, "-inner")] = !!r, t), e.className);
                s().useEffect((function() {
                    return se.lq || r || l || !(null === document || void 0 === document ? void 0 : document.body) ? qe.es : (document.body.style.overflow = n ? "hidden" : "auto", document.body.classList.toggle("".concat(m, "-mask-body"), g && n && document.body.scrollHeight > window.innerHeight), function() {
                        (null === document || void 0 === document ? void 0 : document.body) && (document.body.style.overflow = "auto", document.body.classList.remove("".concat(m, "-mask-body")))
                    })
                }), [n, r, l, m, g]);
                var _ = s().useCallback((function(e) {
                    c || e.stopPropagation();
                    var t = e.target,
                        n = e.currentTarget,
                        r = se.lq ? t.id === n.id : t === n;
                    o && r && p()
                }), [p, o, c]);
                var R = s().createElement(ze, {
                        className: E,
                        needSEO: a,
                        visible: n,
                        onClick: _,
                        children: e.children
                    }),
                    x = f ? s().createElement(Oe, (0, w.__assign)({}, f), R) : R;
                return !se.lq && c ? Ue().createPortal(x, u instanceof HTMLElement ? u : document.body) : x
            };
            const Ge = function(e) {
                return s().createElement(ie, (0, w.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            };
            const He = function(e) {
                return s().createElement(ie, (0, w.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            };
            var $e = void 0,
                Ke = n("ZIpe"),
                Ze = function(e) {
                    var t, n = e.direction,
                        r = e.className,
                        i = (0, w.__rest)(e, ["direction", "className"]),
                        o = Ie().prefixCls,
                        a = "".concat(o, "-drawer-handle"),
                        c = "".concat(a, "-icon"),
                        u = J()(a, ((t = {})["data-dir-".concat(n)] = !!n, t), r);
                    return s().createElement(Oe, (0, w.__assign)({}, {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "drawer handle"
                    }, i, {
                        className: u
                    }), s().createElement(Oe, {
                        className: c,
                        "aria-hidden": "true"
                    }))
                },
                Qe = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? "left" : t,
                        r = e.children,
                        i = e.onClose,
                        o = e.maskClz,
                        a = e.wrapClz,
                        c = (0, w.__rest)(e, ["direction", "children", "onClose", "maskClz", "wrapClz"]),
                        u = {
                            "aria-modal": !0,
                            role: "dialog",
                            "aria-label": e.title || "drawer"
                        };
                    return s().createElement(We, (0, w.__assign)({}, c, {
                        onClose: i,
                        className: o
                    }), s().createElement(Ke.A, (0, w.__assign)({}, u, {
                        direction: n,
                        className: a,
                        onClose: i
                    }), s().createElement(Ze, {
                        direction: n
                    }), r))
                };
            Qe.displayName = "Drawer";
            const Ye = Qe;
            var Xe = function(e) {
                var t, n = e.direction,
                    r = void 0 === n ? "left" : n,
                    i = e.className,
                    o = e.children,
                    c = e.size,
                    u = void 0 === c ? "auto" : c,
                    l = e.once,
                    f = e.onVisibleChange,
                    d = e.draggable,
                    p = e.onClose,
                    h = (0, w.__rest)(e, ["direction", "className", "children", "size", "once", "onVisibleChange", "draggable", "onClose"]),
                    g = Ie().prefixCls,
                    v = "".concat(g, "-drawer"),
                    m = J()("".concat(v, "-wrap"), ((t = {})["data-size-".concat(u)] = "auto" !== u, t["data-dir-".concat(r)] = !!r, t["data-draggable"] = !!d, t)),
                    y = J()(v, i),
                    b = function(e) {
                        var t = e.fn,
                            n = e.time,
                            r = void 0 === n ? 33.33 : n,
                            i = e.deps,
                            o = void 0 === i ? [] : i,
                            c = s().useRef(),
                            u = s().useRef(t);
                        s().useEffect((function() {
                            u.current = t
                        }), [t]);
                        var l = (0, a.useCallback)((function() {
                            c.current && clearTimeout(c.current)
                        }), []);
                        s().useEffect((function() {
                            return l
                        }), o);
                        var f = (0, a.useMemo)((function() {
                            return c.current && clearTimeout(c.current),
                                function() {
                                    for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                    c.current && clearTimeout(c.current), c.current = setTimeout((function() {
                                        var t = u.current;
                                        t && t.apply($e, e), c.current = void 0
                                    }), r)
                                }
                        }), [r]);
                        return {
                            debounceFn: f,
                            clearTimer: l
                        }
                    }({
                        fn: f,
                        time: 50
                    }).debounceFn,
                    E = (0, a.useCallback)((function() {
                        null === p || void 0 === p || p(), b(!1)
                    }), [p, b]),
                    _ = (0, a.useCallback)((function() {
                        l && E()
                    }), [l, E]);
                if (d) return s().createElement(Ye, (0, w.__assign)({
                    onClose: E,
                    maskClz: y,
                    wrapClz: m
                }, e));
                var R = {
                    "aria-modal": !0,
                    role: "dialog",
                    "aria-label": e.title || "drawer"
                };
                return s().createElement(We, (0, w.__assign)({}, h, {
                    onClose: E,
                    className: y
                }), s().createElement(Oe, (0, w.__assign)({}, R, {
                    className: m,
                    children: o,
                    onClick: _
                })))
            };
            Xe.displayName = "Drawer";
            const Je = Xe;
            var et = function(e) {
                var t, n = e.children,
                    r = e.className,
                    i = e.responsive,
                    o = e.direction,
                    a = void 0 === o ? "bottom" : o,
                    c = e.modalSize,
                    u = void 0 === c ? "small" : c,
                    l = (0, w.__rest)(e, ["children", "className", "responsive", "direction", "modalSize"]),
                    f = Ie(),
                    d = f.prefixCls,
                    p = f.isMobile,
                    h = "".concat(d, "-modal"),
                    g = J()(h, r),
                    v = J()("".concat(h, "-wrap"), ((t = {})["data-size-".concat(u)] = !!u, t));
                if (i && p) return s().createElement(Je, (0, w.__assign)({}, l, {
                    direction: a,
                    className: r,
                    children: n
                }));
                var m = {
                    role: "dialog",
                    tabIndex: 0,
                    "aria-modal": !0,
                    "aria-label": l["aria-label"] || "modal"
                };
                return s().createElement(We, (0, w.__assign)({}, l, {
                    className: g
                }), s().createElement(Oe, (0, w.__assign)({}, m, {
                    className: v,
                    children: n
                })))
            };
            et.Header = function(e) {
                var t, n, r = e.showPre,
                    i = e.prev,
                    o = e.onPreClick,
                    a = void 0 === o ? qe.es : o,
                    c = e.showNext,
                    u = e.next,
                    l = e.onNextClick,
                    f = void 0 === l ? qe.es : l,
                    d = (0, w.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick"]),
                    p = Ie().prefixCls,
                    h = "".concat(p, "-modal-header"),
                    g = J()(h, ((t = {})["".concat(h, "-pre")] = !!r, t["".concat(h, "-pre-hidden")] = "hidden" === r, t), e.className);
                return r && void 0 === i && (i = s().createElement(Ge, {
                    name: "ArrowLeftF",
                    color: "PrimaryText"
                })), s().createElement(Oe, (0, w.__assign)({}, d, {
                    className: g
                }), r ? s().createElement(Oe, {
                    className: J()("".concat(h, "-prev")),
                    onClick: a,
                    children: i,
                    role: "button",
                    "aria-label": "Previous"
                }) : null, s().createElement(Oe, {
                    className: "".concat(h, "-main"),
                    children: e.children
                }), c ? s().createElement(Oe, {
                    className: J()("".concat(h, "-next"), (n = {}, n["".concat(h, "-next-hidden")] = "hidden" === c, n)),
                    onClick: f,
                    children: u || s().createElement(He, {
                        name: "CloseF",
                        color: "PrimaryText"
                    }),
                    role: "button",
                    "aria-label": u ? "Next" : "Close"
                }) : null)
            }, et.Content = function(e) {
                var t = Ie().prefixCls,
                    n = "".concat(t, "-modal-content"),
                    r = J()(n, e.className);
                return s().createElement(Oe, (0, w.__assign)({}, e, {
                    className: r
                }))
            }, et.Footer = function(e) {
                var t, n = e.layout,
                    r = (0, w.__rest)(e, ["layout"]),
                    i = Ie().prefixCls,
                    o = "".concat(i, "-modal-footer"),
                    a = J()(o, ((t = {})["".concat(o, "-").concat(n)] = !!n, t), r.className);
                return s().createElement(Oe, (0, w.__assign)({}, r, {
                    className: a
                }))
            };
            const tt = et;
            var nt = n("OgCp"),
                rt = function(e) {
                    return {
                        animationDelay: "".concat(50 * e, "ms")
                    }
                },
                it = function(e) {
                    var t = Ie().prefixCls,
                        n = J()("".concat(t, "-spinner__nezha"), e.className);
                    return s().createElement(Oe, (0, w.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, e, {
                        className: n
                    }), s().createElement(Oe, {
                        className: "nezha-line",
                        style: rt(1)
                    }), s().createElement(Oe, {
                        className: "nezha-line",
                        style: rt(2)
                    }), s().createElement(Oe, {
                        className: "nezha-line",
                        style: rt(3)
                    }), s().createElement(Oe, {
                        className: "nezha-line",
                        style: rt(4)
                    }))
                };
            it.displayName = "Spinner";
            const ot = it;
            var at = (0, a.forwardRef)((function(e, t) {
                var n, r = e.variant,
                    i = void 0 === r ? "primary" : r,
                    o = e.sz,
                    c = void 0 === o ? "middle" : o,
                    u = e.inactive,
                    l = e.loading,
                    f = e.onClick,
                    d = e.subLine,
                    p = e.children,
                    h = e.textVariant,
                    g = void 0 === h ? "text" === i ? "yellow" : "black" : h,
                    v = e.iconVariant,
                    m = void 0 === v ? "line" : v,
                    y = e["aria-label"],
                    b = (0, w.__rest)(e, ["variant", "sz", "inactive", "loading", "onClick", "subLine", "children", "textVariant", "iconVariant", "aria-label"]),
                    E = Ie(),
                    _ = E.prefixCls,
                    R = E.isRTL,
                    x = "".concat(_, "-button"),
                    A = "text" === i || "info" === i,
                    S = "icon" === i,
                    C = J()(x, ((n = {})["".concat(x, "-rtl")] = !!R, n["".concat(x, "__").concat(i)] = !!i, n["".concat(x, "__").concat(i, "__").concat(g)] = A && !!g, n["".concat(x, "__").concat(i, "__").concat(m)] = S && !!m, n["data-size-".concat(c)] = !!c, n["data-size-".concat(c, "-two-line")] = !!c && !!d, n["data-two-line"] = !!d, n.inactive = !!u, n), e.className),
                    T = !u && "function" === typeof f,
                    k = se.lq ? "none" : e.type,
                    I = T ? f : void 0,
                    N = (0, a.useMemo)((function() {
                        return l ? s().createElement(ot, null) : s().createElement(s().Fragment, null, p, d && s().createElement(Oe, null, d))
                    }), [p, a.useMemo, l]),
                    M = {
                        "aria-label": (0, a.useMemo)((function() {
                            return y || ("string" === typeof p ? p : d && "string" === typeof d ? d : "button")
                        }), [y, p, d]),
                        "aria-disabled": u || l ? "true" : void 0,
                        "aria-busy": l ? "true" : void 0,
                        role: "button"
                    };
                return s().createElement(nt.A, (0, w.__assign)({
                    key: l ? "loading" : "content"
                }, M, b, {
                    children: N,
                    ref: t,
                    type: k,
                    className: C,
                    onClick: I
                }))
            }));
            at.displayName = "Button";
            const st = at;
            var ct = n("oVQP");
            const ut = (0, a.createContext)({
                colors: {},
                mode: "light"
            });
            var lt = n("OKx2"),
                ft = {
                    fresh: "",
                    traditional: "traditional"
                };
            const dt = function(e) {
                var t = e.scope,
                    n = e.isCVD,
                    r = e.isReverse,
                    i = e.themeColors,
                    o = e.colorMode,
                    c = void 0 === o ? "fresh" : o,
                    u = e.mode,
                    l = void 0 === u ? "light" : u,
                    f = e.themeExtraColors,
                    d = void 0 === f ? {} : f,
                    p = Ie().isMobile,
                    h = (0, a.useMemo)((function() {
                        var e = [n ? "cvd" : ft[c] || "", r ? "reverse" : ""].filter(Boolean),
                            t = (0, w.__assign)({}, i),
                            o = d[e.join("-")] || {};
                        p && ((null === i || void 0 === i ? void 0 : i.mobile) && (t = (0, w.__assign)((0, w.__assign)({}, t), t.mobile)), (null === o || void 0 === o ? void 0 : o.mobile) && (o = (0, w.__assign)((0, w.__assign)({}, o), o.mobile)));
                        var a = (0, w.__assign)((0, w.__assign)({}, t), o);
                        delete a.mobile;
                        var s;
                        return s = Object.keys(a).reduce((function(e, t) {
                            var n;
                            return (0, w.__assign)((0, w.__assign)({}, e), ((n = {})["--color-".concat(t)] = a[t], n))
                        }), {}), {
                            colors: a,
                            styles: s
                        }
                    }), [n, r, i, d, p, c]),
                    g = h.colors,
                    v = h.styles,
                    m = J()("theme-root", l, e.className);
                return Ce((function() {
                    var e;
                    return se.lq || t || !document.body ? qe.es : ((0, lt.Dq)(document.body, v, !0), (e = document.body.classList).add.apply(e, m.split(" ")), function() {
                        var e;
                        (null === document || void 0 === document ? void 0 : document.body) && ((0, lt.Dq)(document.body, v, !1), (e = document.body.classList).remove.apply(e, m.split(" ")))
                    })
                }), [m, t, v]), s().createElement(ut.Provider, {
                    value: {
                        isCVD: n,
                        isReverse: r,
                        mode: l,
                        colors: g
                    }
                }, se.lq || t ? s().createElement(Oe, {
                    className: m,
                    style: v,
                    children: e.children
                }) : e.children)
            };
            var pt = n("jSBn");
            const ht = function(e) {
                var t = e.pathPrefix,
                    n = e.isRegionMode,
                    r = e.level2Domain,
                    i = e.lang,
                    o = e.prefixCls,
                    a = e.isRTL,
                    c = e.iconConfig,
                    u = e.children,
                    l = e.isElectron,
                    f = e.isMobile,
                    d = (0, w.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    p = {
                        prefixCls: o,
                        isRTL: a,
                        iconConfig: c,
                        isElectron: l,
                        isMobile: f
                    },
                    h = {
                        pathPrefix: t,
                        isRegionMode: n,
                        level2Domain: r,
                        lang: i
                    },
                    g = Object.values(h).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    v = s().createElement(Ne, (0, w.__assign)({}, p), s().createElement(dt, (0, w.__assign)({}, d), u));
                return g ? s().createElement(pt.A, (0, w.__assign)({}, h), v) : v
            };
            var gt = n("zJWh"),
                vt = function(e) {
                    var t = e.popupConfig,
                        n = e.header,
                        r = (0, l.useTheme)().isLight,
                        i = (0, a.useMemo)((function() {
                            return r ? t.lightIcon : t.darkIcon
                        }), [r, t]);
                    return n || (i ? s().createElement(je, {
                        src: "".concat(i),
                        className: "w-[80px] h-[80px] mt-2",
                        style: {
                            width: "80px",
                            height: "80px",
                            marginTop: "8px"
                        }
                    }) : s().createElement(oe, {
                        style: {
                            fontSize: "80px"
                        }
                    }))
                },
                mt = function(e) {
                    var t = (0, d.A)((0, a.useState)(!1), 2),
                        n = t[0],
                        r = t[1],
                        i = (0, d.A)((0, a.useState)({}), 2),
                        o = i[0],
                        c = i[1];
                    (0, a.useEffect)((function() {
                        (0, f.A)(h().mark((function t() {
                            var n, i, o, a, s;
                            return h().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.next = 3, (0, E.get)("/bapi/apex/v1/friendly/apex/compliance/notification/display-detail?key=".concat(e.webKey, "&preCheck=true&currency=").concat(null === (n = gt.U.read("userPreferredCurrency")) || void 0 === n ? void 0 : n.split("_")[0]));
                                    case 3:
                                        i = t.sent, (o = i.data).length && (a = o[0], s = "".concat(e.prefix || "commonDialog", "_").concat(a.notificationId), 0 === a.intervalHours ? (r(!0), c(a)) : "y" !== b.IG.getExpireItem(s) && (b.IG.setExpireItem(s, "y", {
                                            ttl: 36e5 * a.intervalHours
                                        }), r(!0), c(a)));
                                    case 6:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }), [e.prefix, e.webKey]);
                    var u = (0, a.useCallback)((function() {
                            r(!1), o.link && (window.location.href = o.link)
                        }), [o.link]),
                        l = (0, a.useCallback)((function() {
                            r(!1), o.secondLink && (window.location.href = o.secondLink)
                        }), [o.secondLink]);
                    return s().createElement(tt, {
                        visible: n,
                        className: "modalForm"
                    }, s().createElement(Oe, {
                        style: {
                            textAlign: "center",
                            margin: "var(--space-xl)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center"
                        }
                    }, s().createElement(vt, {
                        popupConfig: o,
                        header: e.header
                    }), s().createElement("div", (0, Y.A)({
                        className: "mainText typography-body3",
                        style: {
                            maxHeight: "140px",
                            overflowY: "auto",
                            marginTop: "var(--space-xl)"
                        }
                    }, e.textProps, {
                        dangerouslySetInnerHTML: {
                            __html: o.mainText || ""
                        }
                    })), s().createElement(st, {
                        sz: "large",
                        variant: "primary",
                        onClick: u,
                        style: {
                            marginTop: "var(--space-xl)",
                            width: "100%"
                        }
                    }, o.secondText), o.thirdText && s().createElement(st, {
                        sz: "large",
                        variant: "text",
                        onClick: l,
                        style: {
                            marginTop: "var(--space-s)",
                            width: "100%"
                        }
                    }, o.thirdText)))
                };
            const yt = function(e) {
                var t = (0, l.useTheme)().isLight,
                    n = t ? "light" : "dark",
                    r = t ? ct.BB : ct.XT;
                return s().createElement(ht, {
                    themeColors: r,
                    mode: n
                }, s().createElement(mt, (0, Y.A)({}, e)))
            };
            var bt = n("al9N"),
                wt = n("0m7B");
            const Et = function(e) {
                var t = e.children;
                var n = document.getElementById(wt.bK.TopProtal);
                return s().createElement(s().Fragment, null, t && n ? Ue().createPortal(t, n) : null)
            };
            var _t = n("L4S8"),
                Rt = n("err1"),
                xt = n("pW51"),
                At = function(e) {
                    var t = function() {
                        ! function(e) {
                            (0, Rt.A)(xt.fY, e)
                        }(e)
                    };
                    return window.addEventListener("beforeunload", t),
                        function() {
                            return window.removeEventListener("beforeunload", t)
                        }
                },
                St = n("T3Fm"),
                Ct = n("tKUM"),
                Tt = n("zG1I"),
                kt = n("ZWZn"),
                It = function() {
                    var e = (0, f.A)(h().mark((function e(t) {
                        return h().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, kt.$s)()) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, (0, kt.lZ)({
                                        sourceUrl: t.sourceUrl,
                                        version: t.version || "V1",
                                        isHttp: t.isHttp,
                                        getWsToken: t.getWsToken,
                                        getSessionInfo: function(e) {
                                            return t.getSessionInfo().then((function(t) {
                                                return t[e]
                                            }))
                                        },
                                        track: t.track || function(e, t) {
                                            console.log(e + t.toString())
                                        },
                                        clientType: t.clientType
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Nt = n("uHCZ"),
                Mt = n("BK9r"),
                Lt = n("MEAY"),
                Bt = n("w2ul");
            const Ot = (0, a.createContext)({
                colors: {},
                mode: "light"
            });
            var Pt = n("Prrn"),
                jt = {
                    fresh: "",
                    traditional: "traditional"
                };
            const Dt = function(e) {
                    var t = e.scope,
                        n = e.isCVD,
                        r = e.isReverse,
                        i = e.themeColors,
                        o = e.colorMode,
                        c = void 0 === o ? "fresh" : o,
                        u = e.mode,
                        l = void 0 === u ? "light" : u,
                        f = e.themeExtraColors,
                        d = void 0 === f ? {} : f,
                        p = (0, Pt.r)().isMobile,
                        h = (0, a.useMemo)((function() {
                            var e = [n ? "cvd" : jt[c] || "", r ? "reverse" : ""].filter(Boolean),
                                t = (0, w.__assign)({}, i),
                                o = d[e.join("-")] || {};
                            p && ((null === i || void 0 === i ? void 0 : i.mobile) && (t = (0, w.__assign)((0, w.__assign)({}, t), t.mobile)), (null === o || void 0 === o ? void 0 : o.mobile) && (o = (0, w.__assign)((0, w.__assign)({}, o), o.mobile)));
                            var a = (0, w.__assign)((0, w.__assign)({}, t), o);
                            delete a.mobile;
                            var s;
                            return s = Object.keys(a).reduce((function(e, t) {
                                var n;
                                return (0, w.__assign)((0, w.__assign)({}, e), ((n = {})["--color-".concat(t)] = a[t], n))
                            }), {}), {
                                colors: a,
                                styles: s
                            }
                        }), [n, r, i, d, p, c]),
                        g = h.colors,
                        v = h.styles,
                        y = J()("theme-root", l, e.className);
                    return (0, Bt.op)((function() {
                        var e;
                        return se.lq || t || !document.body ? qe.es : ((0, lt.Dq)(document.body, v, !0), (e = document.body.classList).add.apply(e, y.split(" ")), function() {
                            var e;
                            (null === document || void 0 === document ? void 0 : document.body) && ((0, lt.Dq)(document.body, v, !1), (e = document.body.classList).remove.apply(e, y.split(" ")))
                        })
                    }), [y, t, v]), s().createElement(Ot.Provider, {
                        value: {
                            isCVD: n,
                            isReverse: r,
                            mode: l,
                            colors: g
                        }
                    }, se.lq || t ? s().createElement(m.Ay, {
                        className: y,
                        style: v,
                        children: e.children
                    }) : e.children)
                },
                Ut = (0, a.createContext)({});
            const qt = function(e) {
                var t = e.pathPrefix,
                    n = e.isRegionMode,
                    r = e.level2Domain,
                    i = e.children,
                    o = (0, w.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "children"]);
                return s().createElement(Ut.Provider, (0, w.__assign)({
                    value: {
                        pathPrefix: t,
                        isRegionMode: n,
                        level2Domain: r
                    },
                    children: i
                }, o))
            };
            const Ft = function(e) {
                var t = e.pathPrefix,
                    n = e.isRegionMode,
                    r = e.level2Domain,
                    i = e.lang,
                    o = e.prefixCls,
                    a = e.isRTL,
                    c = e.iconConfig,
                    u = e.children,
                    l = e.isElectron,
                    f = e.isMobile,
                    d = (0, w.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    p = {
                        prefixCls: o,
                        isRTL: a,
                        iconConfig: c,
                        isElectron: l,
                        isMobile: f
                    },
                    h = {
                        pathPrefix: t,
                        isRegionMode: n,
                        level2Domain: r,
                        lang: i
                    },
                    g = Object.values(h).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    v = s().createElement(Pt.A, (0, w.__assign)({}, p), s().createElement(Dt, (0, w.__assign)({}, d), u));
                return g ? s().createElement(qt, (0, w.__assign)({}, h), v) : v
            };
            var Vt = n("AnLT"),
                zt = n("2URn"),
                Wt = n("Mc4e");
            var Gt = {
                key: "homePageRegUserMsg",
                encode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wt.fI;
                    return 0 !== e.regUserCount && t.uint32(8).int64(e.regUserCount), t
                },
                decode: function(e, t) {
                    for (var n = (0, zt.A)(e, Wt.V5) ? e : new Wt.V5(e), r = void 0 === t ? n.len : n.pos + t, i = {
                            regUserCount: 0
                        }; n.pos < r;) {
                        var o = n.uint32();
                        switch (o >>> 3) {
                            case 1:
                                if (8 !== o) break;
                                i.regUserCount = Ht(n.int64());
                                continue
                        }
                        if (4 === (7 & o) || 0 === o) break;
                        n.skip(7 & o)
                    }
                    return i
                },
                fromJSON: function(e) {
                    return {
                        regUserCount: (t = e.regUserCount, null !== t && void 0 !== t ? globalThis.Number(e.regUserCount) : 0)
                    };
                    var t
                },
                toJSON: function(e) {
                    var t = {};
                    return 0 !== e.regUserCount && (t.regUserCount = Math.round(e.regUserCount)), t
                },
                create: function(e) {
                    return Gt.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var t, n = {
                        regUserCount: 0
                    };
                    return n.regUserCount = null !== (t = e.regUserCount) && void 0 !== t ? t : 0, n
                }
            };

            function Ht(e) {
                var t = globalThis.Number(e.toString());
                if (t > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
                if (t < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
                return t
            }
            var $t = {
                key: "emergencyBroadcastMsg",
                encode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wt.fI,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = e.emergencyMessage[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var s = o.value;
                            Zt.encode(s, t.uint32(10).fork()).join()
                        }
                    } catch (c) {
                        r = !0, i = c
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                },
                decode: function(e, t) {
                    for (var n = (0, zt.A)(e, Wt.V5) ? e : new Wt.V5(e), r = void 0 === t ? n.len : n.pos + t, i = {
                            emergencyMessage: []
                        }; n.pos < r;) {
                        var o = n.uint32();
                        switch (o >>> 3) {
                            case 1:
                                if (10 !== o) break;
                                i.emergencyMessage.push(Zt.decode(n, n.uint32()));
                                continue
                        }
                        if (4 === (7 & o) || 0 === o) break;
                        n.skip(7 & o)
                    }
                    return i
                },
                fromJSON: function(e) {
                    return {
                        emergencyMessage: globalThis.Array.isArray(null === e || void 0 === e ? void 0 : e.emergencyMessage) ? e.emergencyMessage.map((function(e) {
                            return Zt.fromJSON(e)
                        })) : []
                    }
                },
                toJSON: function(e) {
                    var t, n = {};
                    return (null === (t = e.emergencyMessage) || void 0 === t ? void 0 : t.length) && (n.emergencyMessage = e.emergencyMessage.map((function(e) {
                        return Zt.toJSON(e)
                    }))), n
                },
                create: function(e) {
                    return $t.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var t, n = {
                        emergencyMessage: []
                    };
                    return n.emergencyMessage = (null === (t = e.emergencyMessage) || void 0 === t ? void 0 : t.map((function(e) {
                        return Zt.fromPartial(e)
                    }))) || [], n
                }
            };
            var Kt = {
                key: "tradingPairsMsg",
                encode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wt.fI,
                        n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = e.tradingPair[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var s = o.value;
                            t.uint32(10).string(s)
                        }
                    } catch (c) {
                        r = !0, i = c
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return t
                },
                decode: function(e, t) {
                    for (var n = (0, zt.A)(e, Wt.V5) ? e : new Wt.V5(e), r = void 0 === t ? n.len : n.pos + t, i = {
                            tradingPair: []
                        }; n.pos < r;) {
                        var o = n.uint32();
                        switch (o >>> 3) {
                            case 1:
                                if (10 !== o) break;
                                i.tradingPair.push(n.string());
                                continue
                        }
                        if (4 === (7 & o) || 0 === o) break;
                        n.skip(7 & o)
                    }
                    return i
                },
                fromJSON: function(e) {
                    return {
                        tradingPair: globalThis.Array.isArray(null === e || void 0 === e ? void 0 : e.tradingPair) ? e.tradingPair.map((function(e) {
                            return globalThis.String(e)
                        })) : []
                    }
                },
                toJSON: function(e) {
                    var t, n = {};
                    return (null === (t = e.tradingPair) || void 0 === t ? void 0 : t.length) && (n.tradingPair = e.tradingPair), n
                },
                create: function(e) {
                    return Kt.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var t, n = {
                        tradingPair: []
                    };
                    return n.tradingPair = (null === (t = e.tradingPair) || void 0 === t ? void 0 : t.map((function(e) {
                        return e
                    }))) || [], n
                }
            };
            var Zt = {
                key: "emergencyMessage",
                encode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wt.fI;
                    0 !== e.id && t.uint32(8).int64(e.id), "" !== e.title && t.uint32(18).string(e.title), void 0 !== e.url && "" !== e.url && t.uint32(26).string(e.url), 0 !== e.time && t.uint32(32).int64(e.time), void 0 !== e.lang && "" !== e.lang && t.uint32(42).string(e.lang), void 0 !== e.isTop && !1 !== e.isTop && t.uint32(48).bool(e.isTop), !1 !== e.isEmergency && t.uint32(56).bool(e.isEmergency), void 0 !== e.detail && "" !== e.detail && t.uint32(66).string(e.detail), void 0 !== e.type && "" !== e.type && t.uint32(74).string(e.type), void 0 !== e.picUrl && "" !== e.picUrl && t.uint32(82).string(e.picUrl), void 0 !== e.pair && "" !== e.pair && t.uint32(90).string(e.pair), void 0 !== e.endTime && 0 !== e.endTime && t.uint32(96).int64(e.endTime), void 0 !== e.code && "" !== e.code && t.uint32(106).string(e.code), void 0 !== e.actionType && "" !== e.actionType && t.uint32(114).string(e.actionType);
                    var n = !0,
                        r = !1,
                        i = void 0;
                    try {
                        for (var o, a = e.scope[Symbol.iterator](); !(n = (o = a.next()).done); n = !0) {
                            var s = o.value;
                            t.uint32(122).string(s)
                        }
                    } catch (c) {
                        r = !0, i = c
                    } finally {
                        try {
                            n || null == a.return || a.return()
                        } finally {
                            if (r) throw i
                        }
                    }
                    return Object.entries(e.tradingPairs).forEach((function(e) {
                        var n = (0, d.A)(e, 2),
                            r = n[0],
                            i = n[1];
                        Qt.encode({
                            key: r,
                            value: i
                        }, t.uint32(130).fork()).join()
                    })), void 0 !== e.startTime && 0 !== e.startTime && t.uint32(136).int64(e.startTime), void 0 !== e.forcedEndTime && 0 !== e.forcedEndTime && t.uint32(144).int64(e.forcedEndTime), void 0 !== e.path && "" !== e.path && t.uint32(154).string(e.path), t
                },
                decode: function(e, t) {
                    for (var n = (0, zt.A)(e, Wt.V5) ? e : new Wt.V5(e), r = void 0 === t ? n.len : n.pos + t, i = {
                            id: 0,
                            title: "",
                            url: "",
                            time: 0,
                            lang: "",
                            isTop: !1,
                            isEmergency: !1,
                            detail: "",
                            type: "",
                            picUrl: "",
                            pair: "",
                            endTime: 0,
                            code: "",
                            actionType: "",
                            scope: [],
                            tradingPairs: {},
                            startTime: 0,
                            forcedEndTime: 0,
                            path: ""
                        }; n.pos < r;) {
                        var o = n.uint32();
                        switch (o >>> 3) {
                            case 1:
                                if (8 !== o) break;
                                i.id = Yt(n.int64());
                                continue;
                            case 2:
                                if (18 !== o) break;
                                i.title = n.string();
                                continue;
                            case 3:
                                if (26 !== o) break;
                                i.url = n.string();
                                continue;
                            case 4:
                                if (32 !== o) break;
                                i.time = Yt(n.int64());
                                continue;
                            case 5:
                                if (42 !== o) break;
                                i.lang = n.string();
                                continue;
                            case 6:
                                if (48 !== o) break;
                                i.isTop = n.bool();
                                continue;
                            case 7:
                                if (56 !== o) break;
                                i.isEmergency = n.bool();
                                continue;
                            case 8:
                                if (66 !== o) break;
                                i.detail = n.string();
                                continue;
                            case 9:
                                if (74 !== o) break;
                                i.type = n.string();
                                continue;
                            case 10:
                                if (82 !== o) break;
                                i.picUrl = n.string();
                                continue;
                            case 11:
                                if (90 !== o) break;
                                i.pair = n.string();
                                continue;
                            case 12:
                                if (96 !== o) break;
                                i.endTime = Yt(n.int64());
                                continue;
                            case 13:
                                if (106 !== o) break;
                                i.code = n.string();
                                continue;
                            case 14:
                                if (114 !== o) break;
                                i.actionType = n.string();
                                continue;
                            case 15:
                                if (122 !== o) break;
                                i.scope.push(n.string());
                                continue;
                            case 16:
                                if (130 !== o) break;
                                var a = Qt.decode(n, n.uint32());
                                void 0 !== a.value && (i.tradingPairs[a.key] = a.value);
                                continue;
                            case 17:
                                if (136 !== o) break;
                                i.startTime = Yt(n.int64());
                                continue;
                            case 18:
                                if (144 !== o) break;
                                i.forcedEndTime = Yt(n.int64());
                                continue;
                            case 19:
                                if (154 !== o) break;
                                i.path = n.string();
                                continue
                        }
                        if (4 === (7 & o) || 0 === o) break;
                        n.skip(7 & o)
                    }
                    return i
                },
                fromJSON: function(e) {
                    return {
                        id: Xt(e.id) ? globalThis.Number(e.id) : 0,
                        title: Xt(e.title) ? globalThis.String(e.title) : "",
                        url: Xt(e.url) ? globalThis.String(e.url) : "",
                        time: Xt(e.time) ? globalThis.Number(e.time) : 0,
                        lang: Xt(e.lang) ? globalThis.String(e.lang) : "",
                        isTop: !!Xt(e.isTop) && globalThis.Boolean(e.isTop),
                        isEmergency: !!Xt(e.isEmergency) && globalThis.Boolean(e.isEmergency),
                        detail: Xt(e.detail) ? globalThis.String(e.detail) : "",
                        type: Xt(e.type) ? globalThis.String(e.type) : "",
                        picUrl: Xt(e.picUrl) ? globalThis.String(e.picUrl) : "",
                        pair: Xt(e.pair) ? globalThis.String(e.pair) : "",
                        endTime: Xt(e.endTime) ? globalThis.Number(e.endTime) : 0,
                        code: Xt(e.code) ? globalThis.String(e.code) : "",
                        actionType: Xt(e.actionType) ? globalThis.String(e.actionType) : "",
                        scope: globalThis.Array.isArray(null === e || void 0 === e ? void 0 : e.scope) ? e.scope.map((function(e) {
                            return globalThis.String(e)
                        })) : [],
                        tradingPairs: (t = e.tradingPairs, "object" === typeof t && null !== t ? Object.entries(e.tradingPairs).reduce((function(e, t) {
                            var n = (0, d.A)(t, 2),
                                r = n[0],
                                i = n[1];
                            return e[r] = Kt.fromJSON(i), e
                        }), {}) : {}),
                        startTime: Xt(e.startTime) ? globalThis.Number(e.startTime) : 0,
                        forcedEndTime: Xt(e.forcedEndTime) ? globalThis.Number(e.forcedEndTime) : 0,
                        path: Xt(e.path) ? globalThis.String(e.path) : ""
                    };
                    var t
                },
                toJSON: function(e) {
                    var t, n = {};
                    if (0 !== e.id && (n.id = Math.round(e.id)), "" !== e.title && (n.title = e.title), void 0 !== e.url && "" !== e.url && (n.url = e.url), 0 !== e.time && (n.time = Math.round(e.time)), void 0 !== e.lang && "" !== e.lang && (n.lang = e.lang), void 0 !== e.isTop && !1 !== e.isTop && (n.isTop = e.isTop), !1 !== e.isEmergency && (n.isEmergency = e.isEmergency), void 0 !== e.detail && "" !== e.detail && (n.detail = e.detail), void 0 !== e.type && "" !== e.type && (n.type = e.type), void 0 !== e.picUrl && "" !== e.picUrl && (n.picUrl = e.picUrl), void 0 !== e.pair && "" !== e.pair && (n.pair = e.pair), void 0 !== e.endTime && 0 !== e.endTime && (n.endTime = Math.round(e.endTime)), void 0 !== e.code && "" !== e.code && (n.code = e.code), void 0 !== e.actionType && "" !== e.actionType && (n.actionType = e.actionType), (null === (t = e.scope) || void 0 === t ? void 0 : t.length) && (n.scope = e.scope), e.tradingPairs) {
                        var r = Object.entries(e.tradingPairs);
                        r.length > 0 && (n.tradingPairs = {}, r.forEach((function(e) {
                            var t = (0, d.A)(e, 2),
                                r = t[0],
                                i = t[1];
                            n.tradingPairs[r] = Kt.toJSON(i)
                        })))
                    }
                    return void 0 !== e.startTime && 0 !== e.startTime && (n.startTime = Math.round(e.startTime)), void 0 !== e.forcedEndTime && 0 !== e.forcedEndTime && (n.forcedEndTime = Math.round(e.forcedEndTime)), void 0 !== e.path && "" !== e.path && (n.path = e.path), n
                },
                create: function(e) {
                    return Zt.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var t, n, r, i, o, a, s, c, u, l, f, p, h, g, v, m, y, b, w, E = {
                        id: 0,
                        title: "",
                        url: "",
                        time: 0,
                        lang: "",
                        isTop: !1,
                        isEmergency: !1,
                        detail: "",
                        type: "",
                        picUrl: "",
                        pair: "",
                        endTime: 0,
                        code: "",
                        actionType: "",
                        scope: [],
                        tradingPairs: {},
                        startTime: 0,
                        forcedEndTime: 0,
                        path: ""
                    };
                    return E.id = null !== (n = e.id) && void 0 !== n ? n : 0, E.title = null !== (r = e.title) && void 0 !== r ? r : "", E.url = null !== (i = e.url) && void 0 !== i ? i : "", E.time = null !== (o = e.time) && void 0 !== o ? o : 0, E.lang = null !== (a = e.lang) && void 0 !== a ? a : "", E.isTop = null !== (s = e.isTop) && void 0 !== s && s, E.isEmergency = null !== (c = e.isEmergency) && void 0 !== c && c, E.detail = null !== (u = e.detail) && void 0 !== u ? u : "", E.type = null !== (l = e.type) && void 0 !== l ? l : "", E.picUrl = null !== (f = e.picUrl) && void 0 !== f ? f : "", E.pair = null !== (p = e.pair) && void 0 !== p ? p : "", E.endTime = null !== (h = e.endTime) && void 0 !== h ? h : 0, E.code = null !== (g = e.code) && void 0 !== g ? g : "", E.actionType = null !== (v = e.actionType) && void 0 !== v ? v : "", E.scope = (null === (t = e.scope) || void 0 === t ? void 0 : t.map((function(e) {
                        return e
                    }))) || [], E.tradingPairs = Object.entries(null !== (m = e.tradingPairs) && void 0 !== m ? m : {}).reduce((function(e, t) {
                        var n = (0, d.A)(t, 2),
                            r = n[0],
                            i = n[1];
                        return void 0 !== i && (e[r] = Kt.fromPartial(i)), e
                    }), {}), E.startTime = null !== (y = e.startTime) && void 0 !== y ? y : 0, E.forcedEndTime = null !== (b = e.forcedEndTime) && void 0 !== b ? b : 0, E.path = null !== (w = e.path) && void 0 !== w ? w : "", E
                }
            };
            var Qt = {
                key: "emergencyMessage_TradingPairsEntry",
                encode: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : new Wt.fI;
                    return "" !== e.key && t.uint32(10).string(e.key), void 0 !== e.value && Kt.encode(e.value, t.uint32(18).fork()).join(), t
                },
                decode: function(e, t) {
                    for (var n = (0, zt.A)(e, Wt.V5) ? e : new Wt.V5(e), r = void 0 === t ? n.len : n.pos + t, i = {
                            key: "",
                            value: void 0
                        }; n.pos < r;) {
                        var o = n.uint32();
                        switch (o >>> 3) {
                            case 1:
                                if (10 !== o) break;
                                i.key = n.string();
                                continue;
                            case 2:
                                if (18 !== o) break;
                                i.value = Kt.decode(n, n.uint32());
                                continue
                        }
                        if (4 === (7 & o) || 0 === o) break;
                        n.skip(7 & o)
                    }
                    return i
                },
                fromJSON: function(e) {
                    return {
                        key: Xt(e.key) ? globalThis.String(e.key) : "",
                        value: Xt(e.value) ? Kt.fromJSON(e.value) : void 0
                    }
                },
                toJSON: function(e) {
                    var t = {};
                    return "" !== e.key && (t.key = e.key), void 0 !== e.value && (t.value = Kt.toJSON(e.value)), t
                },
                create: function(e) {
                    return Qt.fromPartial(null !== e && void 0 !== e ? e : {})
                },
                fromPartial: function(e) {
                    var t, n = {
                        key: "",
                        value: void 0
                    };
                    return n.key = null !== (t = e.key) && void 0 !== t ? t : "", n.value = void 0 !== e.value && null !== e.value ? Kt.fromPartial(e.value) : void 0, n
                }
            };

            function Yt(e) {
                var t = globalThis.Number(e.toString());
                if (t > globalThis.Number.MAX_SAFE_INTEGER) throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
                if (t < globalThis.Number.MIN_SAFE_INTEGER) throw new globalThis.Error("Value is smaller than Number.MIN_SAFE_INTEGER");
                return t
            }

            function Xt(e) {
                return null !== e && void 0 !== e
            }(0, Tt.rU)(Gt), (0, Tt.rU)($t), It({
                isHttp: !0,
                clientType: "web",
                version: "V2",
                sourceUrl: "".concat(B.$L, "/market"),
                getSessionInfo: function() {
                    return new Promise((function(e) {
                        return e({
                            "bnc-uuid": gt.U.read("bnc-uuid") || void 0,
                            lang: gt.U.read("lang") || void 0,
                            cr00: void 0
                        })
                    }))
                },
                tokenUrlPrefix: B.yG
            });
            var Jt = function(e) {
                var t = e.children,
                    n = !(0, l.useBncUserStatus)().isLogin;
                return (0, a.useEffect)((function() {
                    _t.Ay.init({
                        trace_id: gt.U.read("bnc-uuid") || "",
                        strategy_ids: [],
                        app_version: "",
                        env: B.lF || "PROD",
                        codeless: !0,
                        ssr: !0
                    }, {
                        authHeader: B.AE
                    })
                }), []), (0, o.jsxs)(o.Fragment, {
                    children: [B.cp ? null : (0, o.jsx)(yt, {
                        webKey: "ChinaDialogHomeVisi",
                        prefix: "DialogHomeVisi"
                    }), B.cp ? (0, o.jsx)(K, {}) : null, B.cp ? null : (0, o.jsx)(c.OE, {}), B.cp ? null : St.o && (0, o.jsx)(c.zJ, {}), B.cp ? null : St.o && (0, o.jsx)(c.mw, {}), B.cp ? null : n && (0, o.jsx)(c.Hm, {}), B.cp ? null : (0, o.jsx)(Et, {
                        children: (0, o.jsx)(L, {})
                    }), St.o && (0, o.jsx)(c.mq, {}), (0, o.jsxs)(Vt.Hh, {
                        children: [B.cp ? null : (0, o.jsx)(c.x9, {}), t]
                    })]
                })
            };
            const en = (0, a.memo)((function() {
                var e = (0, l.useTheme)().isLight,
                    t = (0, S.s9)(Q.x[1]),
                    n = t.t,
                    s = t.language,
                    c = (0, Ct.dir)(s);
                console.log("111 MainApp");
                var u = (0, l.useMediaState)().isMobile,
                    f = e ? "light" : "dark";
                (0, a.useEffect)((function() {
                    var e;
                    e = {
                        pageName: "binance_home",
                        elementId: "binance_visit_home"
                    }, (0, Rt.A)(xt.bJ, e), At({
                        pageName: "binance_home",
                        elementID: "binance_quit_home"
                    })
                }), []), (0, bt.q)(B.K5, {
                    isChatPopUp: !1,
                    isChatEnable: !0,
                    isChatVisible: !u,
                    onChatLoadedCallbackFunction: function() {}
                });
                var d = (0, a.useMemo)((function() {
                        return {
                            themeColors: e ? ct.BB : ct.XT,
                            themeExtraColors: e ? Lt.bK : Lt.zd
                        }
                    }), [e]),
                    p = (0, Z.by)(),
                    h = p.isRedUpGreenDown,
                    g = p.color;
                return (0, o.jsxs)(Ft, (0, i.A)((0, r.A)({}, d), {
                    mode: f,
                    isRTL: "rtl" === c,
                    isCVD: "cvd" === g,
                    isReverse: h,
                    colorMode: "traditional" === g ? "traditional" : "fresh",
                    scope: !0,
                    children: [(0, o.jsx)(Nt.A, {
                        children: (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)("meta", {
                                name: "theme-color",
                                content: d.themeColors.bg1
                            }), (0, o.jsx)("meta", {
                                name: "title",
                                content: n("page-title")
                            }), (0, o.jsx)("meta", {
                                name: "description",
                                content: n("page-desc")
                            }), (0, o.jsx)("meta", {
                                name: "keywords",
                                content: n("page-keywords")
                            })]
                        })
                    }), (0, o.jsx)(Dt, (0, i.A)((0, r.A)({}, d), {
                        mode: f,
                        children: (0, o.jsx)(Jt, {
                            children: (0, o.jsx)(Mt.Tp, {})
                        })
                    }))]
                }))
            }))
        },
        Wy28: (e, t, n) => {
            "use strict";
            n.d(t, {
                x: () => r
            });
            var r = ["LocalHomepage", "home-extra"]
        },
        "+0LO": (e, t, n) => {
            "use strict";
            var r = n("mkfS").Y,
                i = window.matchMedia;

            function o(e, t, n) {
                var o, a = this;

                function s(e) {
                    a.matches = e.matches, a.media = e.media
                }
                i && !n && (o = i.call(window, e)), o ? (this.matches = o.matches, this.media = o.media, o.addListener(s)) : (this.matches = r(e, t), this.media = e), this.addListener = function(e) {
                    o && o.addListener(e)
                }, this.removeListener = function(e) {
                    o && o.removeListener(e)
                }, this.dispose = function() {
                    o && o.removeListener(s)
                }
            }
            e.exports = function(e, t, n) {
                return new o(e, t, n)
            }
        },
        qrIQ: (e, t, n) => {
            "use strict";
            n.d(t, {
                S$: () => i,
                lq: () => o
            });
            var r = function() {
                    try {
                        return "function" === typeof bn.getSystemInfoSync ? "mini-app" : "webview"
                    } catch (e) {
                        if (window.__RUN_BY_ELECTRON__) return "electron"
                    }
                    return "browser"
                },
                i = !1,
                o = !i && "mini-app" === r();
            !i && r();

            function a(e) {
                return e && e.Math == Math ? e : void 0
            }
            "object" == typeof globalThis && a(globalThis) || a(window) || "object" == typeof self && a(self) || "object" == typeof n.g && a(n.g)
        },
        OKx2: (e, t, n) => {
            "use strict";
            n.d(t, {
                Dq: () => s,
                HN: () => f,
                cH: () => a,
                dg: () => c
            });
            var r = n("wIZF"),
                i = n("qrIQ"),
                o = n("hyZw");
            var a = function(e, t, n) {
                    if (void 0 === t && (t = 0), void 0 === n && (n = !0), i.S$ || i.lq) return !1;
                    var r = e.getBoundingClientRect(),
                        o = r.top,
                        a = r.right,
                        s = r.bottom,
                        c = r.left,
                        u = r.width,
                        l = r.height,
                        f = document.documentElement,
                        d = f.clientWidth,
                        p = f.clientHeight;
                    return s >= -t && (u > 0 || l > 0) && o < p + t && (!n || a >= -t && c < d + t)
                },
                s = function(e, t, n) {
                    var i = (e.getAttribute("style") || "").replace(/\s/g, "").split(";").reduce((function(e, i) {
                            var o, a, s = i.split(":"),
                                c = s[0],
                                u = s[1];
                            return n ? (0, r.__assign)(((o = {})[c] = u, o), e) : c in t ? e : (0, r.__assign)((0, r.__assign)({}, e), ((a = {})[c] = u, a))
                        }), n ? t : {}),
                        o = Object.keys(i).reduce((function(e, t) {
                            var n = t ? [t, i[t]].join(":") : "";
                            return n ? (0, r.__spreadArray)((0, r.__spreadArray)([], e, !0), [n], !1) : e
                        }), []);
                    e.setAttribute("style", o.join(";"))
                };

            function c() {
                var e = !1;
                try {
                    var t = Object.defineProperty({}, "passive", {
                        get: function() {
                            return e = !0
                        }
                    });
                    document.addEventListener("test", o.es, t), document.removeEventListener("test", o.es, t)
                } catch (n) {}
                return e
            }

            function u(e, t, n, r) {
                var i = e / r - 1;
                return Math.round(n * (Math.pow(i, 3) + 1) + t)
            }
            var l = [];

            function f(e, t, n, r, i) {
                void 0 === i && (i = o.es);
                var a = l.find((function(t) {
                    return t.el === e
                }));
                a || (a = {
                    el: e
                }, l.push(a));
                var s = 1,
                    c = e === window,
                    f = Math.ceil(r / 1e3 * 60),
                    d = c ? window.scrollX : e.scrollLeft,
                    p = c ? window.scrollY : e.scrollTop;
                a.handler && (cancelAnimationFrame(a.handler), delete a.handler);
                var h = function() {
                        a.el = null, "function" === typeof i && i()
                    },
                    g = function() {
                        var r = s >= f,
                            i = r ? d + t : u(s, d, t, f),
                            o = r ? p + n : u(s, p, n, f);
                        r || (s += 1), c ? window.scrollTo(i, o) : (e.scrollLeft = i, e.scrollTop = o), a.handler = requestAnimationFrame(r ? h : g)
                    };
                g()
            }
        },
        hyZw: (e, t, n) => {
            "use strict";
            n.d(t, {
                aI: () => s,
                es: () => a
            });
            var r = function(e) {
                    return "function" === typeof e
                },
                i = function(e) {
                    return e && "object" === typeof e
                };
            var o, a = function() {
                    return o
                },
                s = function(e, t) {
                    var n = i(e),
                        o = i(t);
                    if (n && n === o) {
                        var a = Object.keys(e),
                            c = Object.keys(t);
                        if (a.length === c.length) return a.every((function(n) {
                            return s(e[n], t[n])
                        }))
                    } else if (r(e) && r(t)) return !0;
                    return e === t
                }
        },
        eh2c: (e, t, n) => {
            "use strict";
            n.d(t, {
                nF: () => r,
                sg: () => i
            });
            n("5G2I"), n("IXDp"), n("l4Tt"), n("0h6e");

            function r(e, t) {
                var n = this,
                    r = null;
                return function() {
                    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                    null === r && (r = setTimeout((function() {
                        e.apply(n, i), r = null
                    }), t))
                }
            }

            function i(e, t) {
                var n = this,
                    r = null;
                return function() {
                    for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                    r && clearTimeout(r), r = setTimeout((function() {
                        e.apply(n, i), r = null
                    }), t)
                }
            }
        },
        "H2//": (e, t, n) => {
            "use strict";
            n.d(t, {
                uR: () => s,
                uf: () => o
            });
            var r = n("wIZF");
            var i = /\{\{[^}]+\}\}/g,
                o = function(e, t) {
                    return void 0 === t && (t = {}), e.replace(i, (function(e) {
                        var n = e.replace(/^{{/g, "").replace(/}}$/g, "");
                        return t[n] || ""
                    }))
                },
                a = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");

            function s(e, t) {
                var n = t || a.length;
                return (0, r.__spreadArray)([], new Array(e || 36), !0).map((function(t, r) {
                    var i = Math.random() * (e ? n : 16),
                        o = e ? 0 | i : 19 === r ? 3 & (0 | i) | 8 : 0 | i,
                        s = [8, 13, 18, 23].indexOf(r) > -1;
                    return e ? a[o] : s ? "-" : 14 === r ? "4" : a[o]
                })).join("")
            }
        },
        OgCp: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("9xbI");
            const s = (0, i.forwardRef)((function(e, t) {
                var n = e.as,
                    i = void 0 === n ? "button" : n,
                    s = (0, r.__rest)(e, ["as"]);
                return o().createElement(a.A, (0, r.__assign)({}, s, {
                    as: i,
                    ref: t
                }))
            }))
        },
        ZIpe: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("9xbI");
            const s = function(e) {
                var t = e.direction,
                    n = void 0 === t ? "left" : t,
                    s = e.children,
                    c = e.className,
                    u = e.onClose,
                    l = (e.visible, e.draggable, (0, r.__rest)(e, ["direction", "children", "className", "onClose", "visible", "draggable"])),
                    f = (0, i.useState)(!1),
                    d = f[0],
                    p = f[1],
                    h = (0, i.useState)({
                        x: 0,
                        y: 0
                    }),
                    g = h[0],
                    v = h[1],
                    m = (0, i.useState)(0),
                    y = m[0],
                    b = m[1],
                    w = (0, i.useRef)(null),
                    E = (0, i.useMemo)((function() {
                        var e = "top" === n || "bottom" === n;
                        return {
                            isVertical: e,
                            getTransform: function(t) {
                                var n = "".concat(t, "px");
                                return "translate3d(".concat(e ? "0, ".concat(n) : "".concat(n, ", 0"), ", 0)")
                            },
                            getOffset: function(t) {
                                var r = e ? t.y - g.y : t.x - g.x;
                                switch (n) {
                                    case "top":
                                    case "left":
                                        return Math.min(r, 0);
                                    default:
                                        return Math.max(r, 0)
                                }
                            }
                        }
                    }), [n, g]),
                    _ = E.isVertical,
                    R = E.getTransform,
                    x = E.getOffset,
                    A = (0, i.useCallback)((function(e, t) {
                        return Math.abs(e) / t
                    }), []),
                    S = (0, i.useCallback)((function() {
                        return {
                            top: "translate3d(0, -100%, 0)",
                            right: "translate3d(100%, 0, 0)",
                            bottom: "translate3d(0, 100%, 0)",
                            left: "translate3d(-100%, 0, 0)"
                        }[n]
                    }), [n]),
                    C = (0, i.useCallback)((function(e) {
                        if (!d) {
                            var t = e.touches[0];
                            p(!0), v({
                                x: t.pageX,
                                y: t.pageY
                            }), b(e.timeStamp), w.current && (w.current.style.transition = "none")
                        }
                    }), [d]),
                    T = (0, i.useCallback)((function(e) {
                        if (d && w.current) {
                            var t = e.touches[0],
                                n = {
                                    x: t.pageX,
                                    y: t.pageY
                                },
                                r = x(n);
                            w.current.style.transform = R(r)
                        }
                    }), [d, x, R]),
                    k = (0, i.useCallback)((function(e) {
                        if (d && w.current) {
                            var t = e.changedTouches[0],
                                n = {
                                    x: t.pageX,
                                    y: t.pageY
                                },
                                r = w.current.getBoundingClientRect(),
                                i = e.timeStamp - y;
                            w.current.style.transition = "";
                            var o = Math.abs(x(n)),
                                a = A(o, i);
                            o > (_ ? r.height / 2 : r.width / 2) || a > 1.5 ? (w.current.style.transform = S(), null === u || void 0 === u || u()) : w.current.style.transform = "", p(!1)
                        }
                    }), [d, y, x, A, _, S, u]);
                return o().createElement(a.A, (0, r.__assign)({
                    ref: w,
                    className: c,
                    onTouchStart: C,
                    onTouchMove: T,
                    onTouchEnd: k
                }, l), s)
            }
        },
        "0PRs": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i);

            function a(e) {
                var t = e.img;
                return new Promise((function(e, n) {
                    (function(e) {
                        var t = e.img;
                        return new Promise((function(e) {
                            return e(t)
                        }))
                    })({
                        img: t
                    }).then((function(t) {
                        if (/^http/i.test(t)) {
                            var r = new Image;
                            r.addEventListener("load", (function() {
                                return e(t)
                            })), r.addEventListener("error", (function() {
                                return n(new Error("img load error"))
                            })), r.src = t
                        } else n("image path is null")
                    }))
                }))
            }
            var s = n("2OVm"),
                c = n("9xbI");
            const u = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inViewPort = function() {
                            var e = t.$refs.root,
                                n = t.props,
                                r = n.isBackground;
                            a({
                                img: n.src
                            }).then((function(t) {
                                e.style.backgroundColor = "transparent", r ? (e.style.backgroundSize = "100%", e.style.backgroundPosition = "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundImage = "url('".concat(t, "')")) : e.src = t
                            })).catch((function() {
                                return null
                            }))
                        }, t
                    }
                    return (0, r.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.src,
                            n = (e.check, e.lazyLoad, e.isBackground),
                            i = (0, r.__rest)(e, ["src", "check", "lazyLoad", "isBackground"]);
                        return o().createElement(c.A, (0, r.__assign)({}, i, {
                            "data-src": t,
                            ref: this.setRefs("root"),
                            as: n ? "div" : "img"
                        }))
                    }, t
                }(s.A),
                l = (0, i.forwardRef)((function(e, t) {
                    var n = e.lazyLoad,
                        i = e.src,
                        a = e.isBackground,
                        s = e.check,
                        l = (0, r.__rest)(e, ["lazyLoad", "src", "isBackground", "check"]);
                    return n || a ? o().createElement(u, (0, r.__assign)({
                        lazyLoad: n,
                        src: i,
                        isBackground: a,
                        check: s
                    }, l)) : o().createElement(c.A, (0, r.__assign)({}, l, {
                        as: "img",
                        ref: t,
                        src: i,
                        "data-src": i
                    }))
                }))
        },
        "2OVm": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => g
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n("OKx2"),
                a = n("eh2c"),
                s = n("UkUV"),
                c = function(e) {
                    return "function" === typeof e
                },
                u = function(e) {
                    return e && "object" === typeof e
                },
                l = function(e, t) {
                    var n = u(e) && !(0, i.isValidElement)(e),
                        r = u(t) && !(0, i.isValidElement)(t);
                    if (n && n === r) {
                        var o = Object.keys(e),
                            a = Object.keys(t);
                        if (o.length === a.length) return Number(o.every((function(n) {
                            return l(e[n], t[n])
                        })))
                    } else {
                        if (c(e) && c(t)) return !0;
                        if ((0, i.isValidElement)(e) && (0, i.isValidElement)(t)) return !0
                    }
                    return e === t
                },
                f = {
                    offset: 0,
                    x: !0
                },
                d = function(e) {
                    function t(n) {
                        var i = e.call(this, n) || this;
                        return i.unmount = !1, i.index = t.count, i.checkUpdate = function() {
                            return i.$refs.root && !i.unmount
                        }, i.checkViewport = function(e) {
                            var n = i.$refs.root,
                                a = i.props,
                                s = a.check,
                                c = a.lazyLoad;
                            if (i.checkUpdate()) {
                                var u = (0, r.__assign)((0, r.__assign)({}, f), s),
                                    l = u.offset,
                                    d = u.x;
                                !c || (0, o.cH)(n, l, d) ? (delete t.instances[i.index], i.inViewPort(e), "componentDidMount" === e && console.warn("Warning: This element is already in the viewport on first render. Lazy loading may not be necessary. Consider removing the lazyLoad prop for better performance and to avoid unnecessary JavaScript execution.", "\nElement:", n)) : t.instances[i.index] = i
                            }
                        }, i.inViewPort = function(e) {
                            return e
                        }, i.equalUpdate = function(e, t) {
                            l(e, t) || i.checkViewport()
                        }, t.count += 1, i
                    }
                    return (0, r.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = (t.check, (0, r.__rest)(t, ["check"])),
                            i = (e.check, (0, r.__rest)(e, ["check"]));
                        this.equalUpdate(i, n)
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
                            var n = e[t];
                            n && n.checkViewport()
                        }))
                    }, t
                }(s.A),
                p = (0, a.nF)(d.checkViewport, 200),
                h = !(0, o.dg)() || {
                    passive: !0,
                    capture: !0
                };
            window.window === window && (window.addEventListener("resize", p, h), document.addEventListener("scroll", p, h), document.addEventListener("transitionend", p, h));
            const g = d
        },
        UkUV: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n("wIZF"),
                i = n("DTvD");
            const o = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.$refs = {}, t.setRefs = function(e) {
                        return function(n) {
                            t.$refs[e] = n
                        }
                    }, t
                }
                return (0, r.__extends)(t, e), t
            }(i.PureComponent)
        },
        "9xbI": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i);
            const a = (0, i.forwardRef)((function(e, t) {
                var n = e.as,
                    i = void 0 === n ? "div" : n,
                    a = (0, r.__rest)(e, ["as"]);
                return o().createElement(i, (0, r.__assign)((0, r.__assign)({}, a), {
                    ref: t
                }))
            }))
        },
        dEMF: (e, t) => {
            "use strict";
            t.byteLength = function(e) {
                var t = c(e),
                    n = t[0],
                    r = t[1];
                return 3 * (n + r) / 4 - r
            }, t.toByteArray = function(e) {
                var t, n, o = c(e),
                    a = o[0],
                    s = o[1],
                    u = new i(function(e, t, n) {
                        return 3 * (t + n) / 4 - n
                    }(0, a, s)),
                    l = 0,
                    f = s > 0 ? a - 4 : a;
                for (n = 0; n < f; n += 4) t = r[e.charCodeAt(n)] << 18 | r[e.charCodeAt(n + 1)] << 12 | r[e.charCodeAt(n + 2)] << 6 | r[e.charCodeAt(n + 3)], u[l++] = t >> 16 & 255, u[l++] = t >> 8 & 255, u[l++] = 255 & t;
                2 === s && (t = r[e.charCodeAt(n)] << 2 | r[e.charCodeAt(n + 1)] >> 4, u[l++] = 255 & t);
                1 === s && (t = r[e.charCodeAt(n)] << 10 | r[e.charCodeAt(n + 1)] << 4 | r[e.charCodeAt(n + 2)] >> 2, u[l++] = t >> 8 & 255, u[l++] = 255 & t);
                return u
            }, t.fromByteArray = function(e) {
                for (var t, r = e.length, i = r % 3, o = [], a = 16383, s = 0, c = r - i; s < c; s += a) o.push(u(e, s, s + a > c ? c : s + a));
                1 === i ? (t = e[r - 1], o.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], o.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
                return o.join("")
            };
            for (var n = [], r = [], i = "undefined" !== typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = o.length; a < s; ++a) n[a] = o[a], r[o.charCodeAt(a)] = a;

            function c(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = e.indexOf("=");
                return -1 === n && (n = t), [n, n === t ? 0 : 4 - n % 4]
            }

            function u(e, t, r) {
                for (var i, o, a = [], s = t; s < r; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), a.push(n[(o = i) >> 18 & 63] + n[o >> 12 & 63] + n[o >> 6 & 63] + n[63 & o]);
                return a.join("")
            }
            r["-".charCodeAt(0)] = 62, r["_".charCodeAt(0)] = 63
        },
        GmLw: (e, t, n) => {
            "use strict";
            const r = n("dEMF"),
                i = n("1TxV"),
                o = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            t.hp = c, t.IS = 50;
            const a = 2147483647;

            function s(e) {
                if (e > a) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                const t = new Uint8Array(e);
                return Object.setPrototypeOf(t, c.prototype), t
            }

            function c(e, t, n) {
                if ("number" === typeof e) {
                    if ("string" === typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return f(e)
                }
                return u(e, t, n)
            }

            function u(e, t, n) {
                if ("string" === typeof e) return function(e, t) {
                    "string" === typeof t && "" !== t || (t = "utf8");
                    if (!c.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    const n = 0 | g(e, t);
                    let r = s(n);
                    const i = r.write(e, t);
                    i !== n && (r = r.slice(0, i));
                    return r
                }(e, t);
                if (ArrayBuffer.isView(e)) return function(e) {
                    if (Z(e, Uint8Array)) {
                        const t = new Uint8Array(e);
                        return p(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return d(e)
                }(e);
                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (Z(e, ArrayBuffer) || e && Z(e.buffer, ArrayBuffer)) return p(e, t, n);
                if ("undefined" !== typeof SharedArrayBuffer && (Z(e, SharedArrayBuffer) || e && Z(e.buffer, SharedArrayBuffer))) return p(e, t, n);
                if ("number" === typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const r = e.valueOf && e.valueOf();
                if (null != r && r !== e) return c.from(r, t, n);
                const i = function(e) {
                    if (c.isBuffer(e)) {
                        const t = 0 | h(e.length),
                            n = s(t);
                        return 0 === n.length || e.copy(n, 0, 0, t), n
                    }
                    if (void 0 !== e.length) return "number" !== typeof e.length || Q(e.length) ? s(0) : d(e);
                    if ("Buffer" === e.type && Array.isArray(e.data)) return d(e.data)
                }(e);
                if (i) return i;
                if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof e[Symbol.toPrimitive]) return c.from(e[Symbol.toPrimitive]("string"), t, n);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function l(e) {
                if ("number" !== typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function f(e) {
                return l(e), s(e < 0 ? 0 : 0 | h(e))
            }

            function d(e) {
                const t = e.length < 0 ? 0 : 0 | h(e.length),
                    n = s(t);
                for (let r = 0; r < t; r += 1) n[r] = 255 & e[r];
                return n
            }

            function p(e, t, n) {
                if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (n || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let r;
                return r = void 0 === t && void 0 === n ? new Uint8Array(e) : void 0 === n ? new Uint8Array(e, t) : new Uint8Array(e, t, n), Object.setPrototypeOf(r, c.prototype), r
            }

            function h(e) {
                if (e >= a) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a.toString(16) + " bytes");
                return 0 | e
            }

            function g(e, t) {
                if (c.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || Z(e, ArrayBuffer)) return e.byteLength;
                if ("string" !== typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                const n = e.length,
                    r = arguments.length > 2 && !0 === arguments[2];
                if (!r && 0 === n) return 0;
                let i = !1;
                for (;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return n;
                    case "utf8":
                    case "utf-8":
                        return H(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * n;
                    case "hex":
                        return n >>> 1;
                    case "base64":
                        return $(e).length;
                    default:
                        if (i) return r ? -1 : H(e).length;
                        t = ("" + t).toLowerCase(), i = !0
                }
            }

            function v(e, t, n) {
                let r = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                if ((n >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return I(this, t, n);
                    case "utf8":
                    case "utf-8":
                        return S(this, t, n);
                    case "ascii":
                        return T(this, t, n);
                    case "latin1":
                    case "binary":
                        return k(this, t, n);
                    case "base64":
                        return A(this, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return N(this, t, n);
                    default:
                        if (r) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), r = !0
                }
            }

            function m(e, t, n) {
                const r = e[t];
                e[t] = e[n], e[n] = r
            }

            function y(e, t, n, r, i) {
                if (0 === e.length) return -1;
                if ("string" === typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), Q(n = +n) && (n = i ? 0 : e.length - 1), n < 0 && (n = e.length + n), n >= e.length) {
                    if (i) return -1;
                    n = e.length - 1
                } else if (n < 0) {
                    if (!i) return -1;
                    n = 0
                }
                if ("string" === typeof t && (t = c.from(t, r)), c.isBuffer(t)) return 0 === t.length ? -1 : b(e, t, n, r, i);
                if ("number" === typeof t) return t &= 255, "function" === typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, n) : Uint8Array.prototype.lastIndexOf.call(e, t, n) : b(e, [t], n, r, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function b(e, t, n, r, i) {
                let o, a = 1,
                    s = e.length,
                    c = t.length;
                if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, c /= 2, n /= 2
                }

                function u(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (i) {
                    let r = -1;
                    for (o = n; o < s; o++)
                        if (u(e, o) === u(t, -1 === r ? 0 : o - r)) {
                            if (-1 === r && (r = o), o - r + 1 === c) return r * a
                        } else -1 !== r && (o -= o - r), r = -1
                } else
                    for (n + c > s && (n = s - c), o = n; o >= 0; o--) {
                        let n = !0;
                        for (let r = 0; r < c; r++)
                            if (u(e, o + r) !== u(t, r)) {
                                n = !1;
                                break
                            }
                        if (n) return o
                    }
                return -1
            }

            function w(e, t, n, r) {
                n = Number(n) || 0;
                const i = e.length - n;
                r ? (r = Number(r)) > i && (r = i) : r = i;
                const o = t.length;
                let a;
                for (r > o / 2 && (r = o / 2), a = 0; a < r; ++a) {
                    const r = parseInt(t.substr(2 * a, 2), 16);
                    if (Q(r)) return a;
                    e[n + a] = r
                }
                return a
            }

            function E(e, t, n, r) {
                return K(H(t, e.length - n), e, n, r)
            }

            function _(e, t, n, r) {
                return K(function(e) {
                    const t = [];
                    for (let n = 0; n < e.length; ++n) t.push(255 & e.charCodeAt(n));
                    return t
                }(t), e, n, r)
            }

            function R(e, t, n, r) {
                return K($(t), e, n, r)
            }

            function x(e, t, n, r) {
                return K(function(e, t) {
                    let n, r, i;
                    const o = [];
                    for (let a = 0; a < e.length && !((t -= 2) < 0); ++a) n = e.charCodeAt(a), r = n >> 8, i = n % 256, o.push(i), o.push(r);
                    return o
                }(t, e.length - n), e, n, r)
            }

            function A(e, t, n) {
                return 0 === t && n === e.length ? r.fromByteArray(e) : r.fromByteArray(e.slice(t, n))
            }

            function S(e, t, n) {
                n = Math.min(e.length, n);
                const r = [];
                let i = t;
                for (; i < n;) {
                    const t = e[i];
                    let o = null,
                        a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (i + a <= n) {
                        let n, r, s, c;
                        switch (a) {
                            case 1:
                                t < 128 && (o = t);
                                break;
                            case 2:
                                n = e[i + 1], 128 === (192 & n) && (c = (31 & t) << 6 | 63 & n, c > 127 && (o = c));
                                break;
                            case 3:
                                n = e[i + 1], r = e[i + 2], 128 === (192 & n) && 128 === (192 & r) && (c = (15 & t) << 12 | (63 & n) << 6 | 63 & r, c > 2047 && (c < 55296 || c > 57343) && (o = c));
                                break;
                            case 4:
                                n = e[i + 1], r = e[i + 2], s = e[i + 3], 128 === (192 & n) && 128 === (192 & r) && 128 === (192 & s) && (c = (15 & t) << 18 | (63 & n) << 12 | (63 & r) << 6 | 63 & s, c > 65535 && c < 1114112 && (o = c))
                        }
                    }
                    null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, r.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), r.push(o), i += a
                }
                return function(e) {
                    const t = e.length;
                    if (t <= C) return String.fromCharCode.apply(String, e);
                    let n = "",
                        r = 0;
                    for (; r < t;) n += String.fromCharCode.apply(String, e.slice(r, r += C));
                    return n
                }(r)
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
            }), c.poolSize = 8192, c.from = function(e, t, n) {
                return u(e, t, n)
            }, Object.setPrototypeOf(c.prototype, Uint8Array.prototype), Object.setPrototypeOf(c, Uint8Array), c.alloc = function(e, t, n) {
                return function(e, t, n) {
                    return l(e), e <= 0 ? s(e) : void 0 !== t ? "string" === typeof n ? s(e).fill(t, n) : s(e).fill(t) : s(e)
                }(e, t, n)
            }, c.allocUnsafe = function(e) {
                return f(e)
            }, c.allocUnsafeSlow = function(e) {
                return f(e)
            }, c.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== c.prototype
            }, c.compare = function(e, t) {
                if (Z(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), Z(t, Uint8Array) && (t = c.from(t, t.offset, t.byteLength)), !c.isBuffer(e) || !c.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                let n = e.length,
                    r = t.length;
                for (let i = 0, o = Math.min(n, r); i < o; ++i)
                    if (e[i] !== t[i]) {
                        n = e[i], r = t[i];
                        break
                    }
                return n < r ? -1 : r < n ? 1 : 0
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
                let n;
                if (void 0 === t)
                    for (t = 0, n = 0; n < e.length; ++n) t += e[n].length;
                const r = c.allocUnsafe(t);
                let i = 0;
                for (n = 0; n < e.length; ++n) {
                    let t = e[n];
                    if (Z(t, Uint8Array)) i + t.length > r.length ? (c.isBuffer(t) || (t = c.from(t)), t.copy(r, i)) : Uint8Array.prototype.set.call(r, t, i);
                    else {
                        if (!c.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                        t.copy(r, i)
                    }
                    i += t.length
                }
                return r
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
                return 0 === e ? "" : 0 === arguments.length ? S(this, 0, e) : v.apply(this, arguments)
            }, c.prototype.toLocaleString = c.prototype.toString, c.prototype.equals = function(e) {
                if (!c.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === c.compare(this, e)
            }, c.prototype.inspect = function() {
                let e = "";
                const n = t.IS;
                return e = this.toString("hex", 0, n).replace(/(.{2})/g, "$1 ").trim(), this.length > n && (e += " ... "), "<Buffer " + e + ">"
            }, o && (c.prototype[o] = c.prototype.inspect), c.prototype.compare = function(e, t, n, r, i) {
                if (Z(e, Uint8Array) && (e = c.from(e, e.offset, e.byteLength)), !c.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === n && (n = e ? e.length : 0), void 0 === r && (r = 0), void 0 === i && (i = this.length), t < 0 || n > e.length || r < 0 || i > this.length) throw new RangeError("out of range index");
                if (r >= i && t >= n) return 0;
                if (r >= i) return -1;
                if (t >= n) return 1;
                if (this === e) return 0;
                let o = (i >>>= 0) - (r >>>= 0),
                    a = (n >>>= 0) - (t >>>= 0);
                const s = Math.min(o, a),
                    u = this.slice(r, i),
                    l = e.slice(t, n);
                for (let c = 0; c < s; ++c)
                    if (u[c] !== l[c]) {
                        o = u[c], a = l[c];
                        break
                    }
                return o < a ? -1 : a < o ? 1 : 0
            }, c.prototype.includes = function(e, t, n) {
                return -1 !== this.indexOf(e, t, n)
            }, c.prototype.indexOf = function(e, t, n) {
                return y(this, e, t, n, !0)
            }, c.prototype.lastIndexOf = function(e, t, n) {
                return y(this, e, t, n, !1)
            }, c.prototype.write = function(e, t, n, r) {
                if (void 0 === t) r = "utf8", n = this.length, t = 0;
                else if (void 0 === n && "string" === typeof t) r = t, n = this.length, t = 0;
                else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t >>>= 0, isFinite(n) ? (n >>>= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                }
                const i = this.length - t;
                if ((void 0 === n || n > i) && (n = i), e.length > 0 && (n < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                r || (r = "utf8");
                let o = !1;
                for (;;) switch (r) {
                    case "hex":
                        return w(this, e, t, n);
                    case "utf8":
                    case "utf-8":
                        return E(this, e, t, n);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return _(this, e, t, n);
                    case "base64":
                        return R(this, e, t, n);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return x(this, e, t, n);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + r);
                        r = ("" + r).toLowerCase(), o = !0
                }
            }, c.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            const C = 4096;

            function T(e, t, n) {
                let r = "";
                n = Math.min(e.length, n);
                for (let i = t; i < n; ++i) r += String.fromCharCode(127 & e[i]);
                return r
            }

            function k(e, t, n) {
                let r = "";
                n = Math.min(e.length, n);
                for (let i = t; i < n; ++i) r += String.fromCharCode(e[i]);
                return r
            }

            function I(e, t, n) {
                const r = e.length;
                (!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r);
                let i = "";
                for (let o = t; o < n; ++o) i += Y[e[o]];
                return i
            }

            function N(e, t, n) {
                const r = e.slice(t, n);
                let i = "";
                for (let o = 0; o < r.length - 1; o += 2) i += String.fromCharCode(r[o] + 256 * r[o + 1]);
                return i
            }

            function M(e, t, n) {
                if (e % 1 !== 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > n) throw new RangeError("Trying to access beyond buffer length")
            }

            function L(e, t, n, r, i, o) {
                if (!c.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > i || t < o) throw new RangeError('"value" argument is out of bounds');
                if (n + r > e.length) throw new RangeError("Index out of range")
            }

            function B(e, t, n, r, i) {
                V(t, r, i, e, n, 7);
                let o = Number(t & BigInt(4294967295));
                e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o, o >>= 8, e[n++] = o;
                let a = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, a >>= 8, e[n++] = a, n
            }

            function O(e, t, n, r, i) {
                V(t, r, i, e, n, 7);
                let o = Number(t & BigInt(4294967295));
                e[n + 7] = o, o >>= 8, e[n + 6] = o, o >>= 8, e[n + 5] = o, o >>= 8, e[n + 4] = o;
                let a = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[n + 3] = a, a >>= 8, e[n + 2] = a, a >>= 8, e[n + 1] = a, a >>= 8, e[n] = a, n + 8
            }

            function P(e, t, n, r, i, o) {
                if (n + r > e.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("Index out of range")
            }

            function j(e, t, n, r, o) {
                return t = +t, n >>>= 0, o || P(e, 0, n, 4), i.write(e, t, n, r, 23, 4), n + 4
            }

            function D(e, t, n, r, o) {
                return t = +t, n >>>= 0, o || P(e, 0, n, 8), i.write(e, t, n, r, 52, 8), n + 8
            }
            c.prototype.slice = function(e, t) {
                const n = this.length;
                (e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n), (t = void 0 === t ? n : ~~t) < 0 ? (t += n) < 0 && (t = 0) : t > n && (t = n), t < e && (t = e);
                const r = this.subarray(e, t);
                return Object.setPrototypeOf(r, c.prototype), r
            }, c.prototype.readUintLE = c.prototype.readUIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                let r = this[e],
                    i = 1,
                    o = 0;
                for (; ++o < t && (i *= 256);) r += this[e + o] * i;
                return r
            }, c.prototype.readUintBE = c.prototype.readUIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                let r = this[e + --t],
                    i = 1;
                for (; t > 0 && (i *= 256);) r += this[e + --t] * i;
                return r
            }, c.prototype.readUint8 = c.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || M(e, 1, this.length), this[e]
            }, c.prototype.readUint16LE = c.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || M(e, 2, this.length), this[e] | this[e + 1] << 8
            }, c.prototype.readUint16BE = c.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || M(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, c.prototype.readUint32LE = c.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || M(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, c.prototype.readUint32BE = c.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || M(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, c.prototype.readBigUInt64LE = X((function(e) {
                z(e >>>= 0, "offset");
                const t = this[e],
                    n = this[e + 7];
                void 0 !== t && void 0 !== n || W(e, this.length - 8);
                const r = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                    i = this[++e] + 256 * this[++e] + 65536 * this[++e] + n * 2 ** 24;
                return BigInt(r) + (BigInt(i) << BigInt(32))
            })), c.prototype.readBigUInt64BE = X((function(e) {
                z(e >>>= 0, "offset");
                const t = this[e],
                    n = this[e + 7];
                void 0 !== t && void 0 !== n || W(e, this.length - 8);
                const r = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                    i = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n;
                return (BigInt(r) << BigInt(32)) + BigInt(i)
            })), c.prototype.readIntLE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                let r = this[e],
                    i = 1,
                    o = 0;
                for (; ++o < t && (i *= 256);) r += this[e + o] * i;
                return i *= 128, r >= i && (r -= Math.pow(2, 8 * t)), r
            }, c.prototype.readIntBE = function(e, t, n) {
                e >>>= 0, t >>>= 0, n || M(e, t, this.length);
                let r = t,
                    i = 1,
                    o = this[e + --r];
                for (; r > 0 && (i *= 256);) o += this[e + --r] * i;
                return i *= 128, o >= i && (o -= Math.pow(2, 8 * t)), o
            }, c.prototype.readInt8 = function(e, t) {
                return e >>>= 0, t || M(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, c.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || M(e, 2, this.length);
                const n = this[e] | this[e + 1] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || M(e, 2, this.length);
                const n = this[e + 1] | this[e] << 8;
                return 32768 & n ? 4294901760 | n : n
            }, c.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || M(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, c.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || M(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, c.prototype.readBigInt64LE = X((function(e) {
                z(e >>>= 0, "offset");
                const t = this[e],
                    n = this[e + 7];
                void 0 !== t && void 0 !== n || W(e, this.length - 8);
                const r = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (n << 24);
                return (BigInt(r) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
            })), c.prototype.readBigInt64BE = X((function(e) {
                z(e >>>= 0, "offset");
                const t = this[e],
                    n = this[e + 7];
                void 0 !== t && void 0 !== n || W(e, this.length - 8);
                const r = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                return (BigInt(r) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + n)
            })), c.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || M(e, 4, this.length), i.read(this, e, !0, 23, 4)
            }, c.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || M(e, 4, this.length), i.read(this, e, !1, 23, 4)
            }, c.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || M(e, 8, this.length), i.read(this, e, !0, 52, 8)
            }, c.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || M(e, 8, this.length), i.read(this, e, !1, 52, 8)
            }, c.prototype.writeUintLE = c.prototype.writeUIntLE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, n >>>= 0, !r) {
                    L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                }
                let i = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < n && (i *= 256);) this[t + o] = e / i & 255;
                return t + n
            }, c.prototype.writeUintBE = c.prototype.writeUIntBE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, n >>>= 0, !r) {
                    L(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
                }
                let i = n - 1,
                    o = 1;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) this[t + i] = e / o & 255;
                return t + n
            }, c.prototype.writeUint8 = c.prototype.writeUInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, c.prototype.writeUint16LE = c.prototype.writeUInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, c.prototype.writeUint16BE = c.prototype.writeUInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, c.prototype.writeUint32LE = c.prototype.writeUInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, c.prototype.writeUint32BE = c.prototype.writeUInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, c.prototype.writeBigUInt64LE = X((function(e, t = 0) {
                return B(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            })), c.prototype.writeBigUInt64BE = X((function(e, t = 0) {
                return O(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            })), c.prototype.writeIntLE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    const r = Math.pow(2, 8 * n - 1);
                    L(this, e, t, n, r - 1, -r)
                }
                let i = 0,
                    o = 1,
                    a = 0;
                for (this[t] = 255 & e; ++i < n && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + i - 1] && (a = 1), this[t + i] = (e / o >> 0) - a & 255;
                return t + n
            }, c.prototype.writeIntBE = function(e, t, n, r) {
                if (e = +e, t >>>= 0, !r) {
                    const r = Math.pow(2, 8 * n - 1);
                    L(this, e, t, n, r - 1, -r)
                }
                let i = n - 1,
                    o = 1,
                    a = 0;
                for (this[t + i] = 255 & e; --i >= 0 && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + i + 1] && (a = 1), this[t + i] = (e / o >> 0) - a & 255;
                return t + n
            }, c.prototype.writeInt8 = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, c.prototype.writeInt16LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, c.prototype.writeInt16BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, c.prototype.writeInt32LE = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, c.prototype.writeInt32BE = function(e, t, n) {
                return e = +e, t >>>= 0, n || L(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, c.prototype.writeBigInt64LE = X((function(e, t = 0) {
                return B(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), c.prototype.writeBigInt64BE = X((function(e, t = 0) {
                return O(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), c.prototype.writeFloatLE = function(e, t, n) {
                return j(this, e, t, !0, n)
            }, c.prototype.writeFloatBE = function(e, t, n) {
                return j(this, e, t, !1, n)
            }, c.prototype.writeDoubleLE = function(e, t, n) {
                return D(this, e, t, !0, n)
            }, c.prototype.writeDoubleBE = function(e, t, n) {
                return D(this, e, t, !1, n)
            }, c.prototype.copy = function(e, t, n, r) {
                if (!c.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                if (n || (n = 0), r || 0 === r || (r = this.length), t >= e.length && (t = e.length), t || (t = 0), r > 0 && r < n && (r = n), r === n) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (n < 0 || n >= this.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("sourceEnd out of bounds");
                r > this.length && (r = this.length), e.length - t < r - n && (r = e.length - t + n);
                const i = r - n;
                return this === e && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, n, r) : Uint8Array.prototype.set.call(e, this.subarray(n, r), t), i
            }, c.prototype.fill = function(e, t, n, r) {
                if ("string" === typeof e) {
                    if ("string" === typeof t ? (r = t, t = 0, n = this.length) : "string" === typeof n && (r = n, n = this.length), void 0 !== r && "string" !== typeof r) throw new TypeError("encoding must be a string");
                    if ("string" === typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r);
                    if (1 === e.length) {
                        const t = e.charCodeAt(0);
                        ("utf8" === r && t < 128 || "latin1" === r) && (e = t)
                    }
                } else "number" === typeof e ? e &= 255 : "boolean" === typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < n) throw new RangeError("Out of range index");
                if (n <= t) return this;
                let i;
                if (t >>>= 0, n = void 0 === n ? this.length : n >>> 0, e || (e = 0), "number" === typeof e)
                    for (i = t; i < n; ++i) this[i] = e;
                else {
                    const o = c.isBuffer(e) ? e : c.from(e, r),
                        a = o.length;
                    if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (i = 0; i < n - t; ++i) this[i + t] = o[i % a]
                }
                return this
            };
            const U = {};

            function q(e, t, n) {
                U[e] = class extends n {
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

            function F(e) {
                let t = "",
                    n = e.length;
                const r = "-" === e[0] ? 1 : 0;
                for (; n >= r + 4; n -= 3) t = `_${e.slice(n-3,n)}${t}`;
                return `${e.slice(0,n)}${t}`
            }

            function V(e, t, n, r, i, o) {
                if (e > n || e < t) {
                    const r = "bigint" === typeof t ? "n" : "";
                    let i;
                    throw i = o > 3 ? 0 === t || t === BigInt(0) ? `>= 0${r} and < 2${r} ** ${8*(o+1)}${r}` : `>= -(2${r} ** ${8*(o+1)-1}${r}) and < 2 ** ${8*(o+1)-1}${r}` : `>= ${t}${r} and <= ${n}${r}`, new U.ERR_OUT_OF_RANGE("value", i, e)
                }! function(e, t, n) {
                    z(t, "offset"), void 0 !== e[t] && void 0 !== e[t + n] || W(t, e.length - (n + 1))
                }(r, i, o)
            }

            function z(e, t) {
                if ("number" !== typeof e) throw new U.ERR_INVALID_ARG_TYPE(t, "number", e)
            }

            function W(e, t, n) {
                if (Math.floor(e) !== e) throw z(e, n), new U.ERR_OUT_OF_RANGE(n || "offset", "an integer", e);
                if (t < 0) throw new U.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new U.ERR_OUT_OF_RANGE(n || "offset", `>= ${n?1:0} and <= ${t}`, e)
            }
            q("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
                return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }), RangeError), q("ERR_INVALID_ARG_TYPE", (function(e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`
            }), TypeError), q("ERR_OUT_OF_RANGE", (function(e, t, n) {
                let r = `The value of "${e}" is out of range.`,
                    i = n;
                return Number.isInteger(n) && Math.abs(n) > 2 ** 32 ? i = F(String(n)) : "bigint" === typeof n && (i = String(n), (n > BigInt(2) ** BigInt(32) || n < -(BigInt(2) ** BigInt(32))) && (i = F(i)), i += "n"), r += ` It must be ${t}. Received ${i}`, r
            }), RangeError);
            const G = /[^+/0-9A-Za-z-_]/g;

            function H(e, t) {
                let n;
                t = t || 1 / 0;
                const r = e.length;
                let i = null;
                const o = [];
                for (let a = 0; a < r; ++a) {
                    if (n = e.charCodeAt(a), n > 55295 && n < 57344) {
                        if (!i) {
                            if (n > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === r) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            i = n;
                            continue
                        }
                        if (n < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), i = n;
                            continue
                        }
                        n = 65536 + (i - 55296 << 10 | n - 56320)
                    } else i && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (i = null, n < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(n)
                    } else if (n < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(n >> 6 | 192, 63 & n | 128)
                    } else if (n < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                    } else {
                        if (!(n < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                    }
                }
                return o
            }

            function $(e) {
                return r.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(G, "")).length < 2) return "";
                    for (; e.length % 4 !== 0;) e += "=";
                    return e
                }(e))
            }

            function K(e, t, n, r) {
                let i;
                for (i = 0; i < r && !(i + n >= t.length || i >= e.length); ++i) t[i + n] = e[i];
                return i
            }

            function Z(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }

            function Q(e) {
                return e !== e
            }
            const Y = function() {
                const e = "0123456789abcdef",
                    t = new Array(256);
                for (let n = 0; n < 16; ++n) {
                    const r = 16 * n;
                    for (let i = 0; i < 16; ++i) t[r + i] = e[n] + e[i]
                }
                return t
            }();

            function X(e) {
                return "undefined" === typeof BigInt ? J : e
            }

            function J() {
                throw new Error("BigInt not supported")
            }
        },
        O94r: (e, t) => {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function i() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var o = typeof n;
                            if ("string" === o || "number" === o) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var a = i.apply(null, n);
                                    a && e.push(a)
                                }
                            } else if ("object" === o)
                                if (n.toString === Object.prototype.toString)
                                    for (var s in n) r.call(n, s) && n[s] && e.push(s);
                                else e.push(n.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (i.default = i, e.exports = i) : void 0 === (n = function() {
                    return i
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        mkfS: (e, t) => {
            "use strict";
            t.Y = function(e, t) {
                return s(e).some((function(e) {
                    var n = e.inverse,
                        r = "all" === e.type || t.type === e.type;
                    if (r && n || !r && !n) return !1;
                    var i = e.expressions.every((function(e) {
                        var n = e.feature,
                            r = e.modifier,
                            i = e.value,
                            o = t[n];
                        if (!o) return !1;
                        switch (n) {
                            case "orientation":
                            case "scan":
                                return o.toLowerCase() === i.toLowerCase();
                            case "width":
                            case "height":
                            case "device-width":
                            case "device-height":
                                i = l(i), o = l(o);
                                break;
                            case "resolution":
                                i = u(i), o = u(o);
                                break;
                            case "aspect-ratio":
                            case "device-aspect-ratio":
                            case "device-pixel-ratio":
                                i = c(i), o = c(o);
                                break;
                            case "grid":
                            case "color":
                            case "color-index":
                            case "monochrome":
                                i = parseInt(i, 10) || 1, o = parseInt(o, 10) || 0
                        }
                        switch (r) {
                            case "min":
                                return o >= i;
                            case "max":
                                return o <= i;
                            default:
                                return o === i
                        }
                    }));
                    return i && !n || !i && n
                }))
            };
            var n = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                r = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                i = /^(?:(min|max)-)?(.+)/,
                o = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                a = /(dpi|dpcm|dppx)?$/;

            function s(e) {
                return e.split(",").map((function(e) {
                    var t = (e = e.trim()).match(n),
                        o = t[1],
                        a = t[2],
                        s = t[3] || "",
                        c = {};
                    return c.inverse = !!o && "not" === o.toLowerCase(), c.type = a ? a.toLowerCase() : "all", s = s.match(/\([^\)]+\)/g) || [], c.expressions = s.map((function(e) {
                        var t = e.match(r),
                            n = t[1].toLowerCase().match(i);
                        return {
                            modifier: n[1],
                            feature: n[2],
                            value: t[2]
                        }
                    })), c
                }))
            }

            function c(e) {
                var t, n = Number(e);
                return n || (n = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), n
            }

            function u(e) {
                var t = parseFloat(e);
                switch (String(e).match(a)[1]) {
                    case "dpcm":
                        return t / 2.54;
                    case "dppx":
                        return 96 * t;
                    default:
                        return t
                }
            }

            function l(e) {
                var t = parseFloat(e);
                switch (String(e).match(o)[1]) {
                    case "em":
                    case "rem":
                        return 16 * t;
                    case "cm":
                        return 96 * t / 2.54;
                    case "mm":
                        return 96 * t / 2.54 / 10;
                    case "in":
                        return 96 * t;
                    case "pt":
                        return 72 * t;
                    case "pc":
                        return 72 * t / 12;
                    default:
                        return t
                }
            }
        },
        fALc: (e, t) => {
            var n;

            function r(e, t) {
                var n = [],
                    r = 0;

                function i(e) {
                    return n.push(e), t
                }

                function o() {
                    return n[r++]
                }
                return {
                    tokenize: function(t) {
                        return t.replace(e, i)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + t + ")", "g"), o)
                    }
                }
            }
            n = new function() {
                var e = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    t = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    n = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    i = "(?:[_a-z0-9-]|[^\\u0020-\\u007e]|" + n + ")",
                    o = e + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",
                    a = "((?:-?" + o + ")|(?:inherit|auto))",
                    s = "(#?" + i + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    c = "(?:[!#$%&*-~]|[^\\u0020-\\u007e]|" + n + ")*?",
                    u = "(?!(" + i + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    l = "(?!" + c + "['\"]?\\s*\\))",
                    f = "(?=" + c + "['\"]?\\s*\\))",
                    d = "(\\s*(?:!important\\s*)?[;}])",
                    p = new RegExp("`TMP`", "g"),
                    h = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    g = new RegExp("(" + t + u + "[^;}]+;?)", "gi"),
                    v = new RegExp("(" + t + "[^\\}]*?})", "gi"),
                    m = new RegExp("(direction\\s*:\\s*)ltr", "gi"),
                    y = new RegExp("(direction\\s*:\\s*)rtl", "gi"),
                    b = new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])" + l + u, "gi"),
                    w = new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])" + l + u, "gi"),
                    E = new RegExp("(^|[^a-zA-Z])(left)" + f, "gi"),
                    _ = new RegExp("(^|[^a-zA-Z])(right)" + f, "gi"),
                    R = new RegExp("(^|[^a-zA-Z])(ltr)" + f, "gi"),
                    x = new RegExp("(^|[^a-zA-Z])(rtl)" + f, "gi"),
                    A = new RegExp("(^|[^a-zA-Z])([ns]?)e-resize", "gi"),
                    S = new RegExp("(^|[^a-zA-Z])([ns]?)w-resize", "gi"),
                    C = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + a + "(\\s+)" + a + "(\\s+)" + a + "(\\s+)" + a + d, "gi"),
                    T = new RegExp("((?:-color|border-style)\\s*:\\s*)" + s + "(\\s+)" + s + "(\\s+)" + s + "(\\s+)" + s + d, "gi"),
                    k = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + o + ")", "gi"),
                    I = new RegExp("(background-position-x\\s*:\\s*)(-?" + e + "%)", "gi"),
                    N = new RegExp("(border-radius\\s*:\\s*)" + a + "(?:(?:\\s+" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?(?:(?:(?:\\s*\\/\\s*)" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?" + d, "gi"),
                    M = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + a, "gi"),
                    L = new RegExp("(text-shadow\\s*:\\s*)" + a + "(\\s*)" + s, "gi"),
                    B = new RegExp("(text-shadow\\s*:\\s*)" + s + "(\\s*)" + a, "gi"),
                    O = new RegExp("(text-shadow\\s*:\\s*)" + a, "gi"),
                    P = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + a + "(\\s*\\))", "gi"),
                    j = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + a + "((?:\\s*,\\s*" + a + "){0,2}\\s*\\))", "gi");

                function D(e, t, n) {
                    var r, i;
                    return "%" === n.slice(-1) && (-1 !== (r = n.indexOf(".")) ? (i = n.length - r - 2, n = (n = 100 - parseFloat(n)).toFixed(i) + "%") : n = 100 - parseFloat(n) + "%"), t + n
                }

                function U(e) {
                    switch (e.length) {
                        case 4:
                            e = [e[1], e[0], e[3], e[2]];
                            break;
                        case 3:
                            e = [e[1], e[0], e[1], e[2]];
                            break;
                        case 2:
                            e = [e[1], e[0]];
                            break;
                        case 1:
                            e = [e[0]]
                    }
                    return e.join(" ")
                }

                function q(e, t) {
                    var n = [].slice.call(arguments),
                        r = n.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        i = n.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        o = n[10] || "";
                    return t + (i.length ? U(r) + " / " + U(i) : U(r)) + o
                }

                function F(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function V(e, t, n) {
                    return t + F(n)
                }

                function z(e, t, n, r, i) {
                    return t + n + F(r) + i
                }

                function W(e, t, n, r, i) {
                    return t + n + r + F(i)
                }
                return {
                    transform: function(e, t) {
                        var n = new r(g, "`NOFLIP_SINGLE`"),
                            i = new r(v, "`NOFLIP_CLASS`"),
                            o = new r(h, "`COMMENT`");
                        return e = o.tokenize(i.tokenize(n.tokenize(e.replace("`", "%60")))), t.transformDirInUrl && (e = e.replace(R, "$1`TMP`").replace(x, "$1ltr").replace(p, "rtl")), t.transformEdgeInUrl && (e = e.replace(E, "$1`TMP`").replace(_, "$1left").replace(p, "right")), e = e.replace(m, "$1`TMP`").replace(y, "$1ltr").replace(p, "rtl").replace(b, "$1`TMP`").replace(w, "$1left").replace(p, "right").replace(A, "$1$2`TMP`").replace(S, "$1$2e-resize").replace(p, "w-resize").replace(N, q).replace(M, V).replace(L, W).replace(B, W).replace(O, V).replace(P, z).replace(j, z).replace(C, "$1$2$3$8$5$6$7$4$9").replace(T, "$1$2$3$8$5$6$7$4$9").replace(k, D).replace(I, D), e = n.detokenize(i.detokenize(o.detokenize(e)))
                    }
                }
            }, e.exports ? t.transform = function(e, t, r) {
                var i;
                return "object" === typeof t ? i = t : (i = {}, "boolean" === typeof t && (i.transformDirInUrl = t), "boolean" === typeof r && (i.transformEdgeInUrl = r)), n.transform(e, i)
            } : window.cssjanus = n
        },
        "5BvR": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = /[A-Z]/g,
                i = /^ms-/,
                o = {};

            function a(e) {
                return "-" + e.toLowerCase()
            }
            const s = function(e) {
                if (o.hasOwnProperty(e)) return o[e];
                var t = e.replace(r, a);
                return o[e] = i.test(t) ? "-" + t : t
            }
        },
        "1TxV": (e, t) => {
            t.read = function(e, t, n, r, i) {
                var o, a, s = 8 * i - r - 1,
                    c = (1 << s) - 1,
                    u = c >> 1,
                    l = -7,
                    f = n ? i - 1 : 0,
                    d = n ? -1 : 1,
                    p = e[t + f];
                for (f += d, o = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; o = 256 * o + e[t + f], f += d, l -= 8);
                for (a = o & (1 << -l) - 1, o >>= -l, l += r; l > 0; a = 256 * a + e[t + f], f += d, l -= 8);
                if (0 === o) o = 1 - u;
                else {
                    if (o === c) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                    a += Math.pow(2, r), o -= u
                }
                return (p ? -1 : 1) * a * Math.pow(2, o - r)
            }, t.write = function(e, t, n, r, i, o) {
                var a, s, c, u = 8 * o - i - 1,
                    l = (1 << u) - 1,
                    f = l >> 1,
                    d = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = r ? 0 : o - 1,
                    h = r ? 1 : -1,
                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = l) : (a = Math.floor(Math.log(t) / Math.LN2), t * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (t += a + f >= 1 ? d / c : d * Math.pow(2, 1 - f)) * c >= 2 && (a++, c /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (t * c - 1) * Math.pow(2, i), a += f) : (s = t * Math.pow(2, f - 1) * Math.pow(2, i), a = 0)); i >= 8; e[n + p] = 255 & s, p += h, s /= 256, i -= 8);
                for (a = a << i | s, u += i; u > 0; e[n + p] = 255 & a, p += h, a /= 256, u -= 8);
                e[n + p - h] |= 128 * g
            }
        },
        "7I3l": function(e) {
            e.exports = function() {
                "use strict";

                function e(e) {
                    for (var t = arguments, n = t.length, r = 1; r < n; r++) {
                        var i = t[r];
                        for (var o in i) e[o] = i[o]
                    }
                    return e
                }

                function t(e) {
                    return "number" === typeof e && !isNaN(e)
                }

                function n(e) {
                    return "function" === typeof e
                }

                function r(e, t) {
                    var n, r, i, o, a = e.scrollWidth,
                        s = e.scrollHeight;
                    if (t) {
                        var c = document.documentElement,
                            u = document.body;
                        i = c.clientWidth, o = c.clientHeight, n = u.scrollTop || c.scrollTop, r = u.scrollLeft || c.scrollLeft
                    } else i = e.offsetWidth, o = e.offsetHeight, n = e.scrollTop, r = e.scrollLeft;
                    return {
                        isScrollTopEnd: n <= 0,
                        isScrollBottomEnd: o + n >= s,
                        isScrollLeftEnd: r <= 0,
                        isScrollRightEnd: i + r >= a
                    }
                }

                function i(e) {
                    return "string" === typeof e ? document.querySelector(e) : e
                }

                function o(e, t, n, r) {
                    e.addEventListener(t, n, r)
                }

                function a(e, t, n) {
                    e.removeEventListener(t, n)
                }

                function s(e) {
                    var t = e.touches[0];
                    return {
                        x: t.clientX,
                        y: t.clientY
                    }
                }

                function c(e, r) {
                    return n(r) ? r(e) : t(r) ? e / r : e
                }

                function u(e, t, n) {
                    var r = n ? "translate(" + e + "px," + t + "px) translateZ(0)" : "translate(" + e + "px," + t + "px)";
                    return {
                        transform: r,
                        webkitTransform: r
                    }
                }
                var l = {
                        passive: !1
                    },
                    f = {
                        transition: "",
                        transform: "",
                        webkitTransform: "",
                        webkitTransition: ""
                    },
                    d = {
                        transition: "",
                        webkitTransition: ""
                    },
                    p = {
                        pullDown: "onPullDown",
                        pullUp: "onPullUp",
                        pullRight: "onPullRight",
                        pullLeft: "onPullLeft"
                    },
                    h = {
                        pullDown: "isScrollTopEnd",
                        pullUp: "isScrollBottomEnd",
                        pullRight: "isScrollLeftEnd",
                        pullLeft: "isScrollRightEnd"
                    },
                    g = {
                        action: "",
                        axis: "",
                        translateX: 0,
                        translateY: 0
                    },
                    v = e({
                        isScrollTopEnd: !0,
                        isScrollLeftEnd: !0,
                        isScrollBottomEnd: !0,
                        isScrollRightEnd: !0,
                        clientX: 0,
                        clientY: 0
                    }, g),
                    m = {
                        target: "body",
                        scroller: "",
                        trigger: "",
                        damping: 1.6,
                        wait: !0,
                        pullUp: !1,
                        pullDown: !1,
                        pullLeft: !1,
                        pullRight: !1,
                        detectScroll: !1,
                        detectScrollOnStart: !1,
                        stopPropagation: !1,
                        drag: !1,
                        transitionProperty: "transform",
                        transitionDuration: "0.3s",
                        transitionTimingFunction: "ease-out",
                        translateZ: !0
                    },
                    y = "function" === typeof Promise;

                function b(t) {
                    this.options = e({}, m, t), this.state = e({}, v), this.target = null, this.scroller = null, this.trigger = null, this.transitionStyle = null, this.isTouching = !1, this.isPreventDefault = !1, this.isWaiting = !1, this.isGlobalScroller = !1, this.transitionDuration = 0, this.handleTouchStart = this.handleTouchStart.bind(this), this.handleTouchMove = this.handleTouchMove.bind(this), this.handleTouchEnd = this.handleTouchEnd.bind(this)
                }
                return e(b.prototype, {
                    init: function() {
                        var e = this.options,
                            t = i(e.target),
                            n = e.scroller ? i(e.scroller) : t,
                            r = e.trigger ? i(e.trigger) : t;
                        this.target = t, this.scroller = n, this.trigger = r, this.isGlobalScroller = n === document.body || n === window || n === document.documentElement, this.transitionStyle = {
                            transitionProperty: e.transitionProperty,
                            transitionDuration: e.transitionDuration,
                            transitionTimingFunction: e.transitionTimingFunction,
                            webkitTransitionProperty: e.transitionProperty,
                            webkitTransitionDuration: e.transitionDuration,
                            webkitTransitionTimingFunction: e.transitionTimingFunction
                        };
                        var o = Number(e.transitionDuration.replace(/[^.\d]+/g, ""));
                        /[\d\.]+s$/.test(e.transitionDuration) && (o *= 1e3), this.transitionDuration = o, this.enable()
                    },
                    destroy: function() {
                        this.disable()
                    },
                    setTranslate: function(t, n) {
                        e(this.target.style, d, u(t, n, this.options.translateZ))
                    },
                    animateTo: function(t, n, r) {
                        var i = this.state,
                            o = this.target,
                            a = this.transitionDuration,
                            s = this.transitionStyle,
                            c = u(t, n, this.options.translateZ);
                        i.translateX = t, i.translateY = n;
                        var l = function(t) {
                            e(o.style, s, c), setTimeout(t, a)
                        };
                        if (y) return new Promise(l).then(r);
                        l(r)
                    },
                    animateToOrigin: function(t) {
                        var n = this,
                            r = function() {
                                e(n.target.style, f), e(n.state, g), n.isWaiting = !1, t && t()
                            };
                        return this.animateTo(0, 0, r)
                    },
                    enable: function() {
                        o(this.trigger, "touchstart", this.handleTouchStart), o(document, "touchmove", this.handleTouchMove, l), o(document, "touchend", this.handleTouchEnd), o(document, "touchcancel", this.handleTouchEnd)
                    },
                    disable: function() {
                        a(this.trigger, "touchstart", this.handleTouchStart), a(document, "touchmove", this.handleTouchMove, l), a(document, "touchend", this.handleTouchEnd), a(document, "touchcancel", this.handleTouchEnd)
                    },
                    preventDefault: function() {
                        this.isPreventDefault = !0
                    },
                    getScrollInfo: function() {
                        return r(this.scroller, this.isGlobalScroller)
                    },
                    isActiveAction: function(e) {
                        var t = this.options,
                            n = p[e];
                        return t[n] || t[n + "End"] || t[e]
                    },
                    emit: function(e, t) {
                        var r = this.options[e];
                        n(r) && r.call(this, t)
                    },
                    handleTouchStart: function(t) {
                        if (!this.isTouching && !this.isWaiting) {
                            var n = this.options,
                                r = s(t);
                            e(this.state, {
                                clientX: r.x,
                                clientY: r.y,
                                axis: "",
                                action: ""
                            }), (n.detectScroll || n.detectScrollOnStart) && e(this.state, this.getScrollInfo()), n.stopPropagation && t.stopPropagation(), this.isTouching = !0
                        }
                    },
                    handleTouchMove: function(t) {
                        if (this.isTouching) {
                            var n = s(t),
                                r = this.options,
                                i = this.state,
                                o = n.x,
                                a = n.y,
                                u = o - i.clientX,
                                l = a - i.clientY,
                                f = i.translateX,
                                d = i.translateY,
                                g = i.axis,
                                v = i.action;
                            g || (g = Math.abs(l) >= Math.abs(u) ? "y" : "x"), v || ("y" === g ? l > 0 ? v = "pullDown" : l < 0 && (v = "pullUp") : "x" === g && (u > 0 ? v = "pullRight" : u < 0 && (v = "pullLeft")));
                            var m = this.isActiveAction(v);
                            m && r.detectScroll && !i[h[v]] && (e(i, this.getScrollInfo()), i[h[v]] && (u = 0, l = 0));
                            var y = m && i[h[v]];
                            y && (f += c(u, r.damping), d += c(l, r.damping)), e(i, {
                                clientX: o,
                                clientY: a,
                                translateX: f,
                                translateY: d,
                                action: v,
                                axis: g
                            }), y && (r.drag || ("y" === g ? f = 0 : "x" === g && (d = 0)), this.emit(p[v], {
                                translateX: f,
                                translateY: d
                            }), this.isPreventDefault ? this.isPreventDefault = !1 : (r.wait && (this.isWaiting = !0), t.preventDefault(), this.setTranslate(f, d)))
                        }
                    },
                    handleTouchEnd: function() {
                        if (this.isTouching) {
                            this.isTouching = !1;
                            var e = this.state,
                                t = e.action;
                            this.isActiveAction(t) && e[h[t]] && (this.emit(p[t] + "End", {
                                translateX: e.translateX,
                                translateY: e.translateY
                            }), this.isPreventDefault ? this.isPreventDefault = !1 : this.animateToOrigin())
                        }
                    }
                }), b
            }()
        },
        IXDp: e => {
            var t = 1 / 0,
                n = 9007199254740991,
                r = 17976931348623157e292,
                i = NaN,
                o = "[object Function]",
                a = "[object GeneratorFunction]",
                s = "[object Symbol]",
                c = /^\s+|\s+$/g,
                u = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                f = /^0o[0-7]+$/i,
                d = /^(?:0|[1-9]\d*)$/,
                p = parseInt,
                h = Object.prototype.toString,
                g = Math.ceil,
                v = Math.max;

            function m(e, t, n) {
                var r = -1,
                    i = e.length;
                t < 0 && (t = -t > i ? 0 : i + t), (n = n > i ? i : n) < 0 && (n += i), i = t > n ? 0 : n - t >>> 0, t >>>= 0;
                for (var o = Array(i); ++r < i;) o[r] = e[r + t];
                return o
            }

            function y(e, t, r) {
                if (!b(r)) return !1;
                var i = typeof t;
                return !!("number" == i ? function(e) {
                    return null != e && function(e) {
                        return "number" == typeof e && e > -1 && e % 1 == 0 && e <= n
                    }(e.length) && ! function(e) {
                        var t = b(e) ? h.call(e) : "";
                        return t == o || t == a
                    }(e)
                }(r) && function(e, t) {
                    return !!(t = null == t ? n : t) && ("number" == typeof e || d.test(e)) && e > -1 && e % 1 == 0 && e < t
                }(t, r.length) : "string" == i && t in r) && function(e, t) {
                    return e === t || e !== e && t !== t
                }(r[t], e)
            }

            function b(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }
            e.exports = function(e, n, o) {
                n = (o ? y(e, n, o) : void 0 === n) ? 1 : v(function(e) {
                    var n = function(e) {
                            if (!e) return 0 === e ? e : 0;
                            if ((e = function(e) {
                                    if ("number" == typeof e) return e;
                                    if (function(e) {
                                            return "symbol" == typeof e || function(e) {
                                                return !!e && "object" == typeof e
                                            }(e) && h.call(e) == s
                                        }(e)) return i;
                                    if (b(e)) {
                                        var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                        e = b(t) ? t + "" : t
                                    }
                                    if ("string" != typeof e) return 0 === e ? e : +e;
                                    e = e.replace(c, "");
                                    var n = l.test(e);
                                    return n || f.test(e) ? p(e.slice(2), n ? 2 : 8) : u.test(e) ? i : +e
                                }(e)) === t || e === -1 / 0) {
                                return (e < 0 ? -1 : 1) * r
                            }
                            return e === e ? e : 0
                        }(e),
                        o = n % 1;
                    return n === n ? o ? n - o : n : 0
                }(n), 0);
                var a = e ? e.length : 0;
                if (!a || n < 1) return [];
                for (var d = 0, w = 0, E = Array(g(a / n)); d < a;) E[w++] = m(e, d, d += n);
                return E
            }
        },
        "5G2I": (e, t, n) => {
            e = n.nmd(e);
            var r = "Expected a function",
                i = "__lodash_hash_undefined__",
                o = 9007199254740991,
                a = "[object Arguments]",
                s = "[object Array]",
                c = "[object Boolean]",
                u = "[object Date]",
                l = "[object Error]",
                f = "[object Function]",
                d = "[object Map]",
                p = "[object Number]",
                h = "[object Object]",
                g = "[object Promise]",
                v = "[object RegExp]",
                m = "[object Set]",
                y = "[object String]",
                b = "[object Symbol]",
                w = "[object WeakMap]",
                E = "[object ArrayBuffer]",
                _ = "[object DataView]",
                R = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                x = /^\w*$/,
                A = /^\./,
                S = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                C = /\\(\\)?/g,
                T = /^\[object .+?Constructor\]$/,
                k = /^(?:0|[1-9]\d*)$/,
                I = {};
            I["[object Float32Array]"] = I["[object Float64Array]"] = I["[object Int8Array]"] = I["[object Int16Array]"] = I["[object Int32Array]"] = I["[object Uint8Array]"] = I["[object Uint8ClampedArray]"] = I["[object Uint16Array]"] = I["[object Uint32Array]"] = !0, I[a] = I[s] = I[E] = I[c] = I[_] = I[u] = I[l] = I[f] = I[d] = I[p] = I[h] = I[v] = I[m] = I[y] = I[w] = !1;
            var N = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                M = "object" == typeof self && self && self.Object === Object && self,
                L = N || M || Function("return this")(),
                B = t && !t.nodeType && t,
                O = B && e && !e.nodeType && e,
                P = O && O.exports === B && N.process,
                j = function() {
                    try {
                        return P && P.binding("util")
                    } catch (e) {}
                }(),
                D = j && j.isTypedArray;

            function U(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }

            function q(e, t) {
                for (var n = -1, r = e ? e.length : 0; ++n < r;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }

            function F(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (n) {}
                return t
            }

            function V(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e, r) {
                    n[++t] = [r, e]
                })), n
            }

            function z(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                })), n
            }
            var W, G, H = Array.prototype,
                $ = Function.prototype,
                K = Object.prototype,
                Z = L["__core-js_shared__"],
                Q = function() {
                    var e = /[^.]+$/.exec(Z && Z.keys && Z.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                Y = $.toString,
                X = K.hasOwnProperty,
                J = K.toString,
                ee = RegExp("^" + Y.call(X).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                te = L.Symbol,
                ne = L.Uint8Array,
                re = K.propertyIsEnumerable,
                ie = H.splice,
                oe = (W = Object.keys, G = Object, function(e) {
                    return W(G(e))
                }),
                ae = Math.max,
                se = je(L, "DataView"),
                ce = je(L, "Map"),
                ue = je(L, "Promise"),
                le = je(L, "Set"),
                fe = je(L, "WeakMap"),
                de = je(Object, "create"),
                pe = Ge(se),
                he = Ge(ce),
                ge = Ge(ue),
                ve = Ge(le),
                me = Ge(fe),
                ye = te ? te.prototype : void 0,
                be = ye ? ye.valueOf : void 0,
                we = ye ? ye.toString : void 0;

            function Ee(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function _e(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function Re(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function xe(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.__data__ = new Re; ++t < n;) this.add(e[t])
            }

            function Ae(e) {
                this.__data__ = new _e(e)
            }

            function Se(e, t) {
                var n = Ze(e) || Ke(e) ? function(e, t) {
                        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                        return r
                    }(e.length, String) : [],
                    r = n.length,
                    i = !!r;
                for (var o in e) !t && !X.call(e, o) || i && ("length" == o || Ue(o, r)) || n.push(o);
                return n
            }

            function Ce(e, t) {
                for (var n = e.length; n--;)
                    if ($e(e[n][0], t)) return n;
                return -1
            }

            function Te(e, t) {
                for (var n = 0, r = (t = qe(t, e) ? [t] : Be(t)).length; null != e && n < r;) e = e[We(t[n++])];
                return n && n == r ? e : void 0
            }

            function ke(e, t) {
                return null != e && t in Object(e)
            }

            function Ie(e, t, n, r, i) {
                return e === t || (null == e || null == t || !Je(e) && !et(t) ? e !== e && t !== t : function(e, t, n, r, i, o) {
                    var f = Ze(e),
                        g = Ze(t),
                        w = s,
                        R = s;
                    f || (w = (w = De(e)) == a ? h : w);
                    g || (R = (R = De(t)) == a ? h : R);
                    var x = w == h && !F(e),
                        A = R == h && !F(t),
                        S = w == R;
                    if (S && !x) return o || (o = new Ae), f || nt(e) ? Oe(e, t, n, r, i, o) : function(e, t, n, r, i, o, a) {
                        switch (n) {
                            case _:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                e = e.buffer, t = t.buffer;
                            case E:
                                return !(e.byteLength != t.byteLength || !r(new ne(e), new ne(t)));
                            case c:
                            case u:
                            case p:
                                return $e(+e, +t);
                            case l:
                                return e.name == t.name && e.message == t.message;
                            case v:
                            case y:
                                return e == t + "";
                            case d:
                                var s = V;
                            case m:
                                var f = 2 & o;
                                if (s || (s = z), e.size != t.size && !f) return !1;
                                var h = a.get(e);
                                if (h) return h == t;
                                o |= 1, a.set(e, t);
                                var g = Oe(s(e), s(t), r, i, o, a);
                                return a.delete(e), g;
                            case b:
                                if (be) return be.call(e) == be.call(t)
                        }
                        return !1
                    }(e, t, w, n, r, i, o);
                    if (!(2 & i)) {
                        var C = x && X.call(e, "__wrapped__"),
                            T = A && X.call(t, "__wrapped__");
                        if (C || T) {
                            var k = C ? e.value() : e,
                                I = T ? t.value() : t;
                            return o || (o = new Ae), n(k, I, r, i, o)
                        }
                    }
                    if (!S) return !1;
                    return o || (o = new Ae),
                        function(e, t, n, r, i, o) {
                            var a = 2 & i,
                                s = rt(e),
                                c = s.length,
                                u = rt(t).length;
                            if (c != u && !a) return !1;
                            var l = c;
                            for (; l--;) {
                                var f = s[l];
                                if (!(a ? f in t : X.call(t, f))) return !1
                            }
                            var d = o.get(e);
                            if (d && o.get(t)) return d == t;
                            var p = !0;
                            o.set(e, t), o.set(t, e);
                            var h = a;
                            for (; ++l < c;) {
                                var g = e[f = s[l]],
                                    v = t[f];
                                if (r) var m = a ? r(v, g, f, t, e, o) : r(g, v, f, e, t, o);
                                if (!(void 0 === m ? g === v || n(g, v, r, i, o) : m)) {
                                    p = !1;
                                    break
                                }
                                h || (h = "constructor" == f)
                            }
                            if (p && !h) {
                                var y = e.constructor,
                                    b = t.constructor;
                                y == b || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b || (p = !1)
                            }
                            return o.delete(e), o.delete(t), p
                        }(e, t, n, r, i, o)
                }(e, t, Ie, n, r, i))
            }

            function Ne(e) {
                return !(!Je(e) || function(e) {
                    return !!Q && Q in e
                }(e)) && (Ye(e) || F(e) ? ee : T).test(Ge(e))
            }

            function Me(e) {
                return "function" == typeof e ? e : null == e ? it : "object" == typeof e ? Ze(e) ? function(e, t) {
                    if (qe(e) && Fe(t)) return Ve(We(e), t);
                    return function(n) {
                        var r = function(e, t, n) {
                            var r = null == e ? void 0 : Te(e, t);
                            return void 0 === r ? n : r
                        }(n, e);
                        return void 0 === r && r === t ? function(e, t) {
                            return null != e && function(e, t, n) {
                                t = qe(t, e) ? [t] : Be(t);
                                var r, i = -1,
                                    o = t.length;
                                for (; ++i < o;) {
                                    var a = We(t[i]);
                                    if (!(r = null != e && n(e, a))) break;
                                    e = e[a]
                                }
                                if (r) return r;
                                return !!(o = e ? e.length : 0) && Xe(o) && Ue(a, o) && (Ze(e) || Ke(e))
                            }(e, t, ke)
                        }(n, e) : Ie(t, r, void 0, 3)
                    }
                }(e[0], e[1]) : function(e) {
                    var t = function(e) {
                        var t = rt(e),
                            n = t.length;
                        for (; n--;) {
                            var r = t[n],
                                i = e[r];
                            t[n] = [r, i, Fe(i)]
                        }
                        return t
                    }(e);
                    if (1 == t.length && t[0][2]) return Ve(t[0][0], t[0][1]);
                    return function(n) {
                        return n === e || function(e, t, n, r) {
                            var i = n.length,
                                o = i,
                                a = !r;
                            if (null == e) return !o;
                            for (e = Object(e); i--;) {
                                var s = n[i];
                                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                            }
                            for (; ++i < o;) {
                                var c = (s = n[i])[0],
                                    u = e[c],
                                    l = s[1];
                                if (a && s[2]) {
                                    if (void 0 === u && !(c in e)) return !1
                                } else {
                                    var f = new Ae;
                                    if (r) var d = r(u, l, c, e, t, f);
                                    if (!(void 0 === d ? Ie(l, u, r, 3, f) : d)) return !1
                                }
                            }
                            return !0
                        }(n, e, t)
                    }
                }(e) : function(e) {
                    return qe(e) ? (t = We(e), function(e) {
                        return null == e ? void 0 : e[t]
                    }) : function(e) {
                        return function(t) {
                            return Te(t, e)
                        }
                    }(e);
                    var t
                }(e)
            }

            function Le(e) {
                if (! function(e) {
                        var t = e && e.constructor,
                            n = "function" == typeof t && t.prototype || K;
                        return e === n
                    }(e)) return oe(e);
                var t = [];
                for (var n in Object(e)) X.call(e, n) && "constructor" != n && t.push(n);
                return t
            }

            function Be(e) {
                return Ze(e) ? e : ze(e)
            }

            function Oe(e, t, n, r, i, o) {
                var a = 2 & i,
                    s = e.length,
                    c = t.length;
                if (s != c && !(a && c > s)) return !1;
                var u = o.get(e);
                if (u && o.get(t)) return u == t;
                var l = -1,
                    f = !0,
                    d = 1 & i ? new xe : void 0;
                for (o.set(e, t), o.set(t, e); ++l < s;) {
                    var p = e[l],
                        h = t[l];
                    if (r) var g = a ? r(h, p, l, t, e, o) : r(p, h, l, e, t, o);
                    if (void 0 !== g) {
                        if (g) continue;
                        f = !1;
                        break
                    }
                    if (d) {
                        if (!q(t, (function(e, t) {
                                if (!d.has(t) && (p === e || n(p, e, r, i, o))) return d.add(t)
                            }))) {
                            f = !1;
                            break
                        }
                    } else if (p !== h && !n(p, h, r, i, o)) {
                        f = !1;
                        break
                    }
                }
                return o.delete(e), o.delete(t), f
            }

            function Pe(e, t) {
                var n = e.__data__;
                return function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }

            function je(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return Ne(n) ? n : void 0
            }
            Ee.prototype.clear = function() {
                this.__data__ = de ? de(null) : {}
            }, Ee.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, Ee.prototype.get = function(e) {
                var t = this.__data__;
                if (de) {
                    var n = t[e];
                    return n === i ? void 0 : n
                }
                return X.call(t, e) ? t[e] : void 0
            }, Ee.prototype.has = function(e) {
                var t = this.__data__;
                return de ? void 0 !== t[e] : X.call(t, e)
            }, Ee.prototype.set = function(e, t) {
                return this.__data__[e] = de && void 0 === t ? i : t, this
            }, _e.prototype.clear = function() {
                this.__data__ = []
            }, _e.prototype.delete = function(e) {
                var t = this.__data__,
                    n = Ce(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : ie.call(t, n, 1), !0)
            }, _e.prototype.get = function(e) {
                var t = this.__data__,
                    n = Ce(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, _e.prototype.has = function(e) {
                return Ce(this.__data__, e) > -1
            }, _e.prototype.set = function(e, t) {
                var n = this.__data__,
                    r = Ce(n, e);
                return r < 0 ? n.push([e, t]) : n[r][1] = t, this
            }, Re.prototype.clear = function() {
                this.__data__ = {
                    hash: new Ee,
                    map: new(ce || _e),
                    string: new Ee
                }
            }, Re.prototype.delete = function(e) {
                return Pe(this, e).delete(e)
            }, Re.prototype.get = function(e) {
                return Pe(this, e).get(e)
            }, Re.prototype.has = function(e) {
                return Pe(this, e).has(e)
            }, Re.prototype.set = function(e, t) {
                return Pe(this, e).set(e, t), this
            }, xe.prototype.add = xe.prototype.push = function(e) {
                return this.__data__.set(e, i), this
            }, xe.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Ae.prototype.clear = function() {
                this.__data__ = new _e
            }, Ae.prototype.delete = function(e) {
                return this.__data__.delete(e)
            }, Ae.prototype.get = function(e) {
                return this.__data__.get(e)
            }, Ae.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Ae.prototype.set = function(e, t) {
                var n = this.__data__;
                if (n instanceof _e) {
                    var r = n.__data__;
                    if (!ce || r.length < 199) return r.push([e, t]), this;
                    n = this.__data__ = new Re(r)
                }
                return n.set(e, t), this
            };
            var De = function(e) {
                return J.call(e)
            };

            function Ue(e, t) {
                return !!(t = null == t ? o : t) && ("number" == typeof e || k.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function qe(e, t) {
                if (Ze(e)) return !1;
                var n = typeof e;
                return !("number" != n && "symbol" != n && "boolean" != n && null != e && !tt(e)) || (x.test(e) || !R.test(e) || null != t && e in Object(t))
            }

            function Fe(e) {
                return e === e && !Je(e)
            }

            function Ve(e, t) {
                return function(n) {
                    return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
                }
            }(se && De(new se(new ArrayBuffer(1))) != _ || ce && De(new ce) != d || ue && De(ue.resolve()) != g || le && De(new le) != m || fe && De(new fe) != w) && (De = function(e) {
                var t = J.call(e),
                    n = t == h ? e.constructor : void 0,
                    r = n ? Ge(n) : void 0;
                if (r) switch (r) {
                    case pe:
                        return _;
                    case he:
                        return d;
                    case ge:
                        return g;
                    case ve:
                        return m;
                    case me:
                        return w
                }
                return t
            });
            var ze = He((function(e) {
                var t;
                e = null == (t = e) ? "" : function(e) {
                    if ("string" == typeof e) return e;
                    if (tt(e)) return we ? we.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }(t);
                var n = [];
                return A.test(e) && n.push(""), e.replace(S, (function(e, t, r, i) {
                    n.push(r ? i.replace(C, "$1") : t || e)
                })), n
            }));

            function We(e) {
                if ("string" == typeof e || tt(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }

            function Ge(e) {
                if (null != e) {
                    try {
                        return Y.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }

            function He(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError(r);
                var n = function() {
                    var r = arguments,
                        i = t ? t.apply(this, r) : r[0],
                        o = n.cache;
                    if (o.has(i)) return o.get(i);
                    var a = e.apply(this, r);
                    return n.cache = o.set(i, a), a
                };
                return n.cache = new(He.Cache || Re), n
            }

            function $e(e, t) {
                return e === t || e !== e && t !== t
            }

            function Ke(e) {
                return function(e) {
                    return et(e) && Qe(e)
                }(e) && X.call(e, "callee") && (!re.call(e, "callee") || J.call(e) == a)
            }
            He.Cache = Re;
            var Ze = Array.isArray;

            function Qe(e) {
                return null != e && Xe(e.length) && !Ye(e)
            }

            function Ye(e) {
                var t = Je(e) ? J.call(e) : "";
                return t == f || "[object GeneratorFunction]" == t
            }

            function Xe(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= o
            }

            function Je(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function et(e) {
                return !!e && "object" == typeof e
            }

            function tt(e) {
                return "symbol" == typeof e || et(e) && J.call(e) == b
            }
            var nt = D ? function(e) {
                return function(t) {
                    return e(t)
                }
            }(D) : function(e) {
                return et(e) && Xe(e.length) && !!I[J.call(e)]
            };

            function rt(e) {
                return Qe(e) ? Se(e) : Le(e)
            }

            function it(e) {
                return e
            }
            e.exports = function(e) {
                var t = e ? e.length : 0,
                    n = Me;
                return e = t ? function(e, t) {
                        for (var n = -1, r = e ? e.length : 0, i = Array(r); ++n < r;) i[n] = t(e[n], n, e);
                        return i
                    }(e, (function(e) {
                        if ("function" != typeof e[1]) throw new TypeError(r);
                        return [n(e[0]), e[1]]
                    })) : [],
                    function(e, t) {
                        return t = ae(void 0 === t ? e.length - 1 : t, 0),
                            function() {
                                for (var n = arguments, r = -1, i = ae(n.length - t, 0), o = Array(i); ++r < i;) o[r] = n[t + r];
                                r = -1;
                                for (var a = Array(t + 1); ++r < t;) a[r] = n[r];
                                return a[t] = o, U(e, this, a)
                            }
                    }((function(n) {
                        for (var r = -1; ++r < t;) {
                            var i = e[r];
                            if (U(i[0], this, n)) return U(i[1], this, n)
                        }
                    }))
            }
        },
        l4Tt: (e, t, n) => {
            var r = 9007199254740991,
                i = "[object Arguments]",
                o = "[object Function]",
                a = "[object GeneratorFunction]",
                s = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                c = "object" == typeof self && self && self.Object === Object && self,
                u = s || c || Function("return this")();

            function l(e, t, n) {
                switch (n.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, n[0]);
                    case 2:
                        return e.call(t, n[0], n[1]);
                    case 3:
                        return e.call(t, n[0], n[1], n[2])
                }
                return e.apply(t, n)
            }

            function f(e, t) {
                for (var n = -1, r = t.length, i = e.length; ++n < r;) e[i + n] = t[n];
                return e
            }
            var d = Object.prototype,
                p = d.hasOwnProperty,
                h = d.toString,
                g = u.Symbol,
                v = d.propertyIsEnumerable,
                m = g ? g.isConcatSpreadable : void 0,
                y = Math.max;

            function b(e, t, n, r, i) {
                var o = -1,
                    a = e.length;
                for (n || (n = w), i || (i = []); ++o < a;) {
                    var s = e[o];
                    t > 0 && n(s) ? t > 1 ? b(s, t - 1, n, r, i) : f(i, s) : r || (i[i.length] = s)
                }
                return i
            }

            function w(e) {
                return E(e) || function(e) {
                    return function(e) {
                        return function(e) {
                            return !!e && "object" == typeof e
                        }(e) && function(e) {
                            return null != e && function(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= r
                            }(e.length) && ! function(e) {
                                var t = function(e) {
                                    var t = typeof e;
                                    return !!e && ("object" == t || "function" == t)
                                }(e) ? h.call(e) : "";
                                return t == o || t == a
                            }(e)
                        }(e)
                    }(e) && p.call(e, "callee") && (!v.call(e, "callee") || h.call(e) == i)
                }(e) || !!(m && e && e[m])
            }
            var E = Array.isArray;
            var _ = function(e) {
                return t = function(t) {
                        var n = (t = b(t, 1)).length,
                            r = n;
                        for (e && t.reverse(); r--;)
                            if ("function" != typeof t[r]) throw new TypeError("Expected a function");
                        return function() {
                            for (var e = 0, r = n ? t[e].apply(this, arguments) : arguments[0]; ++e < n;) r = t[e].call(this, r);
                            return r
                        }
                    }, n = y(void 0 === n ? t.length - 1 : n, 0),
                    function() {
                        for (var e = arguments, r = -1, i = y(e.length - n, 0), o = Array(i); ++r < i;) o[r] = e[n + r];
                        r = -1;
                        for (var a = Array(n + 1); ++r < n;) a[r] = e[r];
                        return a[n] = o, l(t, this, a)
                    };
                var t, n
            }();
            e.exports = _
        },
        "0h6e": (e, t, n) => {
            e = n.nmd(e);
            var r = "__lodash_hash_undefined__",
                i = 9007199254740991,
                o = "[object Arguments]",
                a = "[object Array]",
                s = "[object Boolean]",
                c = "[object Date]",
                u = "[object Error]",
                l = "[object Function]",
                f = "[object Map]",
                d = "[object Number]",
                p = "[object Object]",
                h = "[object Promise]",
                g = "[object RegExp]",
                v = "[object Set]",
                m = "[object String]",
                y = "[object Symbol]",
                b = "[object WeakMap]",
                w = "[object ArrayBuffer]",
                E = "[object DataView]",
                _ = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                R = /^\w*$/,
                x = /^\./,
                A = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                S = /\\(\\)?/g,
                C = /^\[object .+?Constructor\]$/,
                T = /^(?:0|[1-9]\d*)$/,
                k = {};
            k["[object Float32Array]"] = k["[object Float64Array]"] = k["[object Int8Array]"] = k["[object Int16Array]"] = k["[object Int32Array]"] = k["[object Uint8Array]"] = k["[object Uint8ClampedArray]"] = k["[object Uint16Array]"] = k["[object Uint32Array]"] = !0, k[o] = k[a] = k[w] = k[s] = k[E] = k[c] = k[u] = k[l] = k[f] = k[d] = k[p] = k[g] = k[v] = k[m] = k[b] = !1;
            var I = "object" == typeof n.g && n.g && n.g.Object === Object && n.g,
                N = "object" == typeof self && self && self.Object === Object && self,
                M = I || N || Function("return this")(),
                L = t && !t.nodeType && t,
                B = L && e && !e.nodeType && e,
                O = B && B.exports === L && I.process,
                P = function() {
                    try {
                        return O && O.binding("util")
                    } catch (e) {}
                }(),
                j = P && P.isTypedArray;

            function D(e, t, n, r) {
                for (var i = -1, o = e ? e.length : 0; ++i < o;) {
                    var a = e[i];
                    t(r, a, n(a), e)
                }
                return r
            }

            function U(e, t) {
                for (var n = -1, r = e ? e.length : 0; ++n < r;)
                    if (t(e[n], n, e)) return !0;
                return !1
            }

            function q(e) {
                var t = !1;
                if (null != e && "function" != typeof e.toString) try {
                    t = !!(e + "")
                } catch (n) {}
                return t
            }

            function F(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e, r) {
                    n[++t] = [r, e]
                })), n
            }

            function V(e) {
                var t = -1,
                    n = Array(e.size);
                return e.forEach((function(e) {
                    n[++t] = e
                })), n
            }
            var z, W, G = Array.prototype,
                H = Function.prototype,
                $ = Object.prototype,
                K = M["__core-js_shared__"],
                Z = function() {
                    var e = /[^.]+$/.exec(K && K.keys && K.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                Q = H.toString,
                Y = $.hasOwnProperty,
                X = $.toString,
                J = RegExp("^" + Q.call(Y).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                ee = M.Symbol,
                te = M.Uint8Array,
                ne = $.propertyIsEnumerable,
                re = G.splice,
                ie = (z = Object.keys, W = Object, function(e) {
                    return z(W(e))
                }),
                oe = qe(M, "DataView"),
                ae = qe(M, "Map"),
                se = qe(M, "Promise"),
                ce = qe(M, "Set"),
                ue = qe(M, "WeakMap"),
                le = qe(Object, "create"),
                fe = Ke(oe),
                de = Ke(ae),
                pe = Ke(se),
                he = Ke(ce),
                ge = Ke(ue),
                ve = ee ? ee.prototype : void 0,
                me = ve ? ve.valueOf : void 0,
                ye = ve ? ve.toString : void 0;

            function be(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function we(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function Ee(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.clear(); ++t < n;) {
                    var r = e[t];
                    this.set(r[0], r[1])
                }
            }

            function _e(e) {
                var t = -1,
                    n = e ? e.length : 0;
                for (this.__data__ = new Ee; ++t < n;) this.add(e[t])
            }

            function Re(e) {
                this.__data__ = new we(e)
            }

            function xe(e, t) {
                var n = tt(e) || et(e) ? function(e, t) {
                        for (var n = -1, r = Array(e); ++n < e;) r[n] = t(n);
                        return r
                    }(e.length, String) : [],
                    r = n.length,
                    i = !!r;
                for (var o in e) !t && !Y.call(e, o) || i && ("length" == o || Ve(o, r)) || n.push(o);
                return n
            }

            function Ae(e, t) {
                for (var n = e.length; n--;)
                    if (Je(e[n][0], t)) return n;
                return -1
            }

            function Se(e, t, n, r) {
                return ke(e, (function(e, i, o) {
                    t(r, e, n(e), o)
                })), r
            }
            be.prototype.clear = function() {
                this.__data__ = le ? le(null) : {}
            }, be.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, be.prototype.get = function(e) {
                var t = this.__data__;
                if (le) {
                    var n = t[e];
                    return n === r ? void 0 : n
                }
                return Y.call(t, e) ? t[e] : void 0
            }, be.prototype.has = function(e) {
                var t = this.__data__;
                return le ? void 0 !== t[e] : Y.call(t, e)
            }, be.prototype.set = function(e, t) {
                return this.__data__[e] = le && void 0 === t ? r : t, this
            }, we.prototype.clear = function() {
                this.__data__ = []
            }, we.prototype.delete = function(e) {
                var t = this.__data__,
                    n = Ae(t, e);
                return !(n < 0) && (n == t.length - 1 ? t.pop() : re.call(t, n, 1), !0)
            }, we.prototype.get = function(e) {
                var t = this.__data__,
                    n = Ae(t, e);
                return n < 0 ? void 0 : t[n][1]
            }, we.prototype.has = function(e) {
                return Ae(this.__data__, e) > -1
            }, we.prototype.set = function(e, t) {
                var n = this.__data__,
                    r = Ae(n, e);
                return r < 0 ? n.push([e, t]) : n[r][1] = t, this
            }, Ee.prototype.clear = function() {
                this.__data__ = {
                    hash: new be,
                    map: new(ae || we),
                    string: new be
                }
            }, Ee.prototype.delete = function(e) {
                return Ue(this, e).delete(e)
            }, Ee.prototype.get = function(e) {
                return Ue(this, e).get(e)
            }, Ee.prototype.has = function(e) {
                return Ue(this, e).has(e)
            }, Ee.prototype.set = function(e, t) {
                return Ue(this, e).set(e, t), this
            }, _e.prototype.add = _e.prototype.push = function(e) {
                return this.__data__.set(e, r), this
            }, _e.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Re.prototype.clear = function() {
                this.__data__ = new we
            }, Re.prototype.delete = function(e) {
                return this.__data__.delete(e)
            }, Re.prototype.get = function(e) {
                return this.__data__.get(e)
            }, Re.prototype.has = function(e) {
                return this.__data__.has(e)
            }, Re.prototype.set = function(e, t) {
                var n = this.__data__;
                if (n instanceof we) {
                    var r = n.__data__;
                    if (!ae || r.length < 199) return r.push([e, t]), this;
                    n = this.__data__ = new Ee(r)
                }
                return n.set(e, t), this
            };
            var Ce, Te, ke = (Ce = function(e, t) {
                    return e && Ie(e, t, ut)
                }, function(e, t) {
                    if (null == e) return e;
                    if (!nt(e)) return Ce(e, t);
                    for (var n = e.length, r = Te ? n : -1, i = Object(e);
                        (Te ? r-- : ++r < n) && !1 !== t(i[r], r, i););
                    return e
                }),
                Ie = function(e) {
                    return function(t, n, r) {
                        for (var i = -1, o = Object(t), a = r(t), s = a.length; s--;) {
                            var c = a[e ? s : ++i];
                            if (!1 === n(o[c], c, o)) break
                        }
                        return t
                    }
                }();

            function Ne(e, t) {
                for (var n = 0, r = (t = ze(t, e) ? [t] : je(t)).length; null != e && n < r;) e = e[$e(t[n++])];
                return n && n == r ? e : void 0
            }

            function Me(e, t) {
                return null != e && t in Object(e)
            }

            function Le(e, t, n, r, i) {
                return e === t || (null == e || null == t || !ot(e) && !at(t) ? e !== e && t !== t : function(e, t, n, r, i, l) {
                    var h = tt(e),
                        b = tt(t),
                        _ = a,
                        R = a;
                    h || (_ = (_ = Fe(e)) == o ? p : _);
                    b || (R = (R = Fe(t)) == o ? p : R);
                    var x = _ == p && !q(e),
                        A = R == p && !q(t),
                        S = _ == R;
                    if (S && !x) return l || (l = new Re), h || ct(e) ? De(e, t, n, r, i, l) : function(e, t, n, r, i, o, a) {
                        switch (n) {
                            case E:
                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                                e = e.buffer, t = t.buffer;
                            case w:
                                return !(e.byteLength != t.byteLength || !r(new te(e), new te(t)));
                            case s:
                            case c:
                            case d:
                                return Je(+e, +t);
                            case u:
                                return e.name == t.name && e.message == t.message;
                            case g:
                            case m:
                                return e == t + "";
                            case f:
                                var l = F;
                            case v:
                                var p = 2 & o;
                                if (l || (l = V), e.size != t.size && !p) return !1;
                                var h = a.get(e);
                                if (h) return h == t;
                                o |= 1, a.set(e, t);
                                var b = De(l(e), l(t), r, i, o, a);
                                return a.delete(e), b;
                            case y:
                                if (me) return me.call(e) == me.call(t)
                        }
                        return !1
                    }(e, t, _, n, r, i, l);
                    if (!(2 & i)) {
                        var C = x && Y.call(e, "__wrapped__"),
                            T = A && Y.call(t, "__wrapped__");
                        if (C || T) {
                            var k = C ? e.value() : e,
                                I = T ? t.value() : t;
                            return l || (l = new Re), n(k, I, r, i, l)
                        }
                    }
                    if (!S) return !1;
                    return l || (l = new Re),
                        function(e, t, n, r, i, o) {
                            var a = 2 & i,
                                s = ut(e),
                                c = s.length,
                                u = ut(t).length;
                            if (c != u && !a) return !1;
                            var l = c;
                            for (; l--;) {
                                var f = s[l];
                                if (!(a ? f in t : Y.call(t, f))) return !1
                            }
                            var d = o.get(e);
                            if (d && o.get(t)) return d == t;
                            var p = !0;
                            o.set(e, t), o.set(t, e);
                            var h = a;
                            for (; ++l < c;) {
                                var g = e[f = s[l]],
                                    v = t[f];
                                if (r) var m = a ? r(v, g, f, t, e, o) : r(g, v, f, e, t, o);
                                if (!(void 0 === m ? g === v || n(g, v, r, i, o) : m)) {
                                    p = !1;
                                    break
                                }
                                h || (h = "constructor" == f)
                            }
                            if (p && !h) {
                                var y = e.constructor,
                                    b = t.constructor;
                                y == b || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof b && b instanceof b || (p = !1)
                            }
                            return o.delete(e), o.delete(t), p
                        }(e, t, n, r, i, l)
                }(e, t, Le, n, r, i))
            }

            function Be(e) {
                return !(!ot(e) || function(e) {
                    return !!Z && Z in e
                }(e)) && (rt(e) || q(e) ? J : C).test(Ke(e))
            }

            function Oe(e) {
                return "function" == typeof e ? e : null == e ? lt : "object" == typeof e ? tt(e) ? function(e, t) {
                    if (ze(e) && We(t)) return Ge($e(e), t);
                    return function(n) {
                        var r = function(e, t, n) {
                            var r = null == e ? void 0 : Ne(e, t);
                            return void 0 === r ? n : r
                        }(n, e);
                        return void 0 === r && r === t ? function(e, t) {
                            return null != e && function(e, t, n) {
                                t = ze(t, e) ? [t] : je(t);
                                var r, i = -1,
                                    o = t.length;
                                for (; ++i < o;) {
                                    var a = $e(t[i]);
                                    if (!(r = null != e && n(e, a))) break;
                                    e = e[a]
                                }
                                if (r) return r;
                                return !!(o = e ? e.length : 0) && it(o) && Ve(a, o) && (tt(e) || et(e))
                            }(e, t, Me)
                        }(n, e) : Le(t, r, void 0, 3)
                    }
                }(e[0], e[1]) : function(e) {
                    var t = function(e) {
                        var t = ut(e),
                            n = t.length;
                        for (; n--;) {
                            var r = t[n],
                                i = e[r];
                            t[n] = [r, i, We(i)]
                        }
                        return t
                    }(e);
                    if (1 == t.length && t[0][2]) return Ge(t[0][0], t[0][1]);
                    return function(n) {
                        return n === e || function(e, t, n, r) {
                            var i = n.length,
                                o = i,
                                a = !r;
                            if (null == e) return !o;
                            for (e = Object(e); i--;) {
                                var s = n[i];
                                if (a && s[2] ? s[1] !== e[s[0]] : !(s[0] in e)) return !1
                            }
                            for (; ++i < o;) {
                                var c = (s = n[i])[0],
                                    u = e[c],
                                    l = s[1];
                                if (a && s[2]) {
                                    if (void 0 === u && !(c in e)) return !1
                                } else {
                                    var f = new Re;
                                    if (r) var d = r(u, l, c, e, t, f);
                                    if (!(void 0 === d ? Le(l, u, r, 3, f) : d)) return !1
                                }
                            }
                            return !0
                        }(n, e, t)
                    }
                }(e) : function(e) {
                    return ze(e) ? (t = $e(e), function(e) {
                        return null == e ? void 0 : e[t]
                    }) : function(e) {
                        return function(t) {
                            return Ne(t, e)
                        }
                    }(e);
                    var t
                }(e)
            }

            function Pe(e) {
                if (! function(e) {
                        var t = e && e.constructor,
                            n = "function" == typeof t && t.prototype || $;
                        return e === n
                    }(e)) return ie(e);
                var t = [];
                for (var n in Object(e)) Y.call(e, n) && "constructor" != n && t.push(n);
                return t
            }

            function je(e) {
                return tt(e) ? e : He(e)
            }

            function De(e, t, n, r, i, o) {
                var a = 2 & i,
                    s = e.length,
                    c = t.length;
                if (s != c && !(a && c > s)) return !1;
                var u = o.get(e);
                if (u && o.get(t)) return u == t;
                var l = -1,
                    f = !0,
                    d = 1 & i ? new _e : void 0;
                for (o.set(e, t), o.set(t, e); ++l < s;) {
                    var p = e[l],
                        h = t[l];
                    if (r) var g = a ? r(h, p, l, t, e, o) : r(p, h, l, e, t, o);
                    if (void 0 !== g) {
                        if (g) continue;
                        f = !1;
                        break
                    }
                    if (d) {
                        if (!U(t, (function(e, t) {
                                if (!d.has(t) && (p === e || n(p, e, r, i, o))) return d.add(t)
                            }))) {
                            f = !1;
                            break
                        }
                    } else if (p !== h && !n(p, h, r, i, o)) {
                        f = !1;
                        break
                    }
                }
                return o.delete(e), o.delete(t), f
            }

            function Ue(e, t) {
                var n = e.__data__;
                return function(e) {
                    var t = typeof e;
                    return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
                }(t) ? n["string" == typeof t ? "string" : "hash"] : n.map
            }

            function qe(e, t) {
                var n = function(e, t) {
                    return null == e ? void 0 : e[t]
                }(e, t);
                return Be(n) ? n : void 0
            }
            var Fe = function(e) {
                return X.call(e)
            };

            function Ve(e, t) {
                return !!(t = null == t ? i : t) && ("number" == typeof e || T.test(e)) && e > -1 && e % 1 == 0 && e < t
            }

            function ze(e, t) {
                if (tt(e)) return !1;
                var n = typeof e;
                return !("number" != n && "symbol" != n && "boolean" != n && null != e && !st(e)) || (R.test(e) || !_.test(e) || null != t && e in Object(t))
            }

            function We(e) {
                return e === e && !ot(e)
            }

            function Ge(e, t) {
                return function(n) {
                    return null != n && (n[e] === t && (void 0 !== t || e in Object(n)))
                }
            }(oe && Fe(new oe(new ArrayBuffer(1))) != E || ae && Fe(new ae) != f || se && Fe(se.resolve()) != h || ce && Fe(new ce) != v || ue && Fe(new ue) != b) && (Fe = function(e) {
                var t = X.call(e),
                    n = t == p ? e.constructor : void 0,
                    r = n ? Ke(n) : void 0;
                if (r) switch (r) {
                    case fe:
                        return E;
                    case de:
                        return f;
                    case pe:
                        return h;
                    case he:
                        return v;
                    case ge:
                        return b
                }
                return t
            });
            var He = Xe((function(e) {
                var t;
                e = null == (t = e) ? "" : function(e) {
                    if ("string" == typeof e) return e;
                    if (st(e)) return ye ? ye.call(e) : "";
                    var t = e + "";
                    return "0" == t && 1 / e == -1 / 0 ? "-0" : t
                }(t);
                var n = [];
                return x.test(e) && n.push(""), e.replace(A, (function(e, t, r, i) {
                    n.push(r ? i.replace(S, "$1") : t || e)
                })), n
            }));

            function $e(e) {
                if ("string" == typeof e || st(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -1 / 0 ? "-0" : t
            }

            function Ke(e) {
                if (null != e) {
                    try {
                        return Q.call(e)
                    } catch (t) {}
                    try {
                        return e + ""
                    } catch (t) {}
                }
                return ""
            }
            var Ze, Qe, Ye = (Ze = function(e, t, n) {
                Y.call(e, n) ? e[n].push(t) : e[n] = [t]
            }, function(e, t) {
                var n = tt(e) ? D : Se,
                    r = Qe ? Qe() : {};
                return n(e, Ze, Oe(t), r)
            });

            function Xe(e, t) {
                if ("function" != typeof e || t && "function" != typeof t) throw new TypeError("Expected a function");
                var n = function() {
                    var r = arguments,
                        i = t ? t.apply(this, r) : r[0],
                        o = n.cache;
                    if (o.has(i)) return o.get(i);
                    var a = e.apply(this, r);
                    return n.cache = o.set(i, a), a
                };
                return n.cache = new(Xe.Cache || Ee), n
            }

            function Je(e, t) {
                return e === t || e !== e && t !== t
            }

            function et(e) {
                return function(e) {
                    return at(e) && nt(e)
                }(e) && Y.call(e, "callee") && (!ne.call(e, "callee") || X.call(e) == o)
            }
            Xe.Cache = Ee;
            var tt = Array.isArray;

            function nt(e) {
                return null != e && it(e.length) && !rt(e)
            }

            function rt(e) {
                var t = ot(e) ? X.call(e) : "";
                return t == l || "[object GeneratorFunction]" == t
            }

            function it(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= i
            }

            function ot(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function at(e) {
                return !!e && "object" == typeof e
            }

            function st(e) {
                return "symbol" == typeof e || at(e) && X.call(e) == y
            }
            var ct = j ? function(e) {
                return function(t) {
                    return e(t)
                }
            }(j) : function(e) {
                return at(e) && it(e.length) && !!k[X.call(e)]
            };

            function ut(e) {
                return nt(e) ? xe(e) : Pe(e)
            }

            function lt(e) {
                return e
            }
            e.exports = Ye
        },
        aHiY: (e, t, n) => {
            var r = n("u0rh");

            function i(e) {
                this.mode = r.MODE_8BIT_BYTE, this.data = e
            }
            i.prototype = {
                getLength: function(e) {
                    return this.data.length
                },
                write: function(e) {
                    for (var t = 0; t < this.data.length; t++) e.put(this.data.charCodeAt(t), 8)
                }
            }, e.exports = i
        },
        "8mpF": e => {
            function t() {
                this.buffer = new Array, this.length = 0
            }
            t.prototype = {
                get: function(e) {
                    var t = Math.floor(e / 8);
                    return 1 == (this.buffer[t] >>> 7 - e % 8 & 1)
                },
                put: function(e, t) {
                    for (var n = 0; n < t; n++) this.putBit(1 == (e >>> t - n - 1 & 1))
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    var t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = t
        },
        FFk3: e => {
            e.exports = {
                L: 1,
                M: 0,
                Q: 3,
                H: 2
            }
        },
        "6Hy7": (e, t, n) => {
            var r = n("dmxF");

            function i(e, t) {
                if (void 0 == e.length) throw new Error(e.length + "/" + t);
                for (var n = 0; n < e.length && 0 == e[n];) n++;
                this.num = new Array(e.length - n + t);
                for (var r = 0; r < e.length - n; r++) this.num[r] = e[r + n]
            }
            i.prototype = {
                get: function(e) {
                    return this.num[e]
                },
                getLength: function() {
                    return this.num.length
                },
                multiply: function(e) {
                    for (var t = new Array(this.getLength() + e.getLength() - 1), n = 0; n < this.getLength(); n++)
                        for (var o = 0; o < e.getLength(); o++) t[n + o] ^= r.gexp(r.glog(this.get(n)) + r.glog(e.get(o)));
                    return new i(t, 0)
                },
                mod: function(e) {
                    if (this.getLength() - e.getLength() < 0) return this;
                    for (var t = r.glog(this.get(0)) - r.glog(e.get(0)), n = new Array(this.getLength()), o = 0; o < this.getLength(); o++) n[o] = this.get(o);
                    for (o = 0; o < e.getLength(); o++) n[o] ^= r.gexp(r.glog(e.get(o)) + t);
                    return new i(n, 0).mod(e)
                }
            }, e.exports = i
        },
        "1PNn": (e, t, n) => {
            var r = n("aHiY"),
                i = n("0p+c"),
                o = n("8mpF"),
                a = n("Tjmx"),
                s = n("6Hy7");

            function c(e, t) {
                this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = []
            }
            var u = c.prototype;
            u.addData = function(e) {
                var t = new r(e);
                this.dataList.push(t), this.dataCache = null
            }, u.isDark = function(e, t) {
                if (e < 0 || this.moduleCount <= e || t < 0 || this.moduleCount <= t) throw new Error(e + "," + t);
                return this.modules[e][t]
            }, u.getModuleCount = function() {
                return this.moduleCount
            }, u.make = function() {
                if (this.typeNumber < 1) {
                    var e = 1;
                    for (e = 1; e < 40; e++) {
                        for (var t = i.getRSBlocks(e, this.errorCorrectLevel), n = new o, r = 0, s = 0; s < t.length; s++) r += t[s].dataCount;
                        for (s = 0; s < this.dataList.length; s++) {
                            var c = this.dataList[s];
                            n.put(c.mode, 4), n.put(c.getLength(), a.getLengthInBits(c.mode, e)), c.write(n)
                        }
                        if (n.getLengthInBits() <= 8 * r) break
                    }
                    this.typeNumber = e
                }
                this.makeImpl(!1, this.getBestMaskPattern())
            }, u.makeImpl = function(e, t) {
                this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
                for (var n = 0; n < this.moduleCount; n++) {
                    this.modules[n] = new Array(this.moduleCount);
                    for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null
                }
                this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, t), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = c.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, t)
            }, u.setupPositionProbePattern = function(e, t) {
                for (var n = -1; n <= 7; n++)
                    if (!(e + n <= -1 || this.moduleCount <= e + n))
                        for (var r = -1; r <= 7; r++) t + r <= -1 || this.moduleCount <= t + r || (this.modules[e + n][t + r] = 0 <= n && n <= 6 && (0 == r || 6 == r) || 0 <= r && r <= 6 && (0 == n || 6 == n) || 2 <= n && n <= 4 && 2 <= r && r <= 4)
            }, u.getBestMaskPattern = function() {
                for (var e = 0, t = 0, n = 0; n < 8; n++) {
                    this.makeImpl(!0, n);
                    var r = a.getLostPoint(this);
                    (0 == n || e > r) && (e = r, t = n)
                }
                return t
            }, u.createMovieClip = function(e, t, n) {
                var r = e.createEmptyMovieClip(t, n);
                this.make();
                for (var i = 0; i < this.modules.length; i++)
                    for (var o = 1 * i, a = 0; a < this.modules[i].length; a++) {
                        var s = 1 * a;
                        this.modules[i][a] && (r.beginFill(0, 100), r.moveTo(s, o), r.lineTo(s + 1, o), r.lineTo(s + 1, o + 1), r.lineTo(s, o + 1), r.endFill())
                    }
                return r
            }, u.setupTimingPattern = function() {
                for (var e = 8; e < this.moduleCount - 8; e++) null == this.modules[e][6] && (this.modules[e][6] = e % 2 == 0);
                for (var t = 8; t < this.moduleCount - 8; t++) null == this.modules[6][t] && (this.modules[6][t] = t % 2 == 0)
            }, u.setupPositionAdjustPattern = function() {
                for (var e = a.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++)
                    for (var n = 0; n < e.length; n++) {
                        var r = e[t],
                            i = e[n];
                        if (null == this.modules[r][i])
                            for (var o = -2; o <= 2; o++)
                                for (var s = -2; s <= 2; s++) this.modules[r + o][i + s] = -2 == o || 2 == o || -2 == s || 2 == s || 0 == o && 0 == s
                    }
            }, u.setupTypeNumber = function(e) {
                for (var t = a.getBCHTypeNumber(this.typeNumber), n = 0; n < 18; n++) {
                    var r = !e && 1 == (t >> n & 1);
                    this.modules[Math.floor(n / 3)][n % 3 + this.moduleCount - 8 - 3] = r
                }
                for (n = 0; n < 18; n++) {
                    r = !e && 1 == (t >> n & 1);
                    this.modules[n % 3 + this.moduleCount - 8 - 3][Math.floor(n / 3)] = r
                }
            }, u.setupTypeInfo = function(e, t) {
                for (var n = this.errorCorrectLevel << 3 | t, r = a.getBCHTypeInfo(n), i = 0; i < 15; i++) {
                    var o = !e && 1 == (r >> i & 1);
                    i < 6 ? this.modules[i][8] = o : i < 8 ? this.modules[i + 1][8] = o : this.modules[this.moduleCount - 15 + i][8] = o
                }
                for (i = 0; i < 15; i++) {
                    o = !e && 1 == (r >> i & 1);
                    i < 8 ? this.modules[8][this.moduleCount - i - 1] = o : i < 9 ? this.modules[8][15 - i - 1 + 1] = o : this.modules[8][15 - i - 1] = o
                }
                this.modules[this.moduleCount - 8][8] = !e
            }, u.mapData = function(e, t) {
                for (var n = -1, r = this.moduleCount - 1, i = 7, o = 0, s = this.moduleCount - 1; s > 0; s -= 2)
                    for (6 == s && s--;;) {
                        for (var c = 0; c < 2; c++)
                            if (null == this.modules[r][s - c]) {
                                var u = !1;
                                o < e.length && (u = 1 == (e[o] >>> i & 1)), a.getMask(t, r, s - c) && (u = !u), this.modules[r][s - c] = u, -1 == --i && (o++, i = 7)
                            }
                        if ((r += n) < 0 || this.moduleCount <= r) {
                            r -= n, n = -n;
                            break
                        }
                    }
            }, c.PAD0 = 236, c.PAD1 = 17, c.createData = function(e, t, n) {
                for (var r = i.getRSBlocks(e, t), s = new o, u = 0; u < n.length; u++) {
                    var l = n[u];
                    s.put(l.mode, 4), s.put(l.getLength(), a.getLengthInBits(l.mode, e)), l.write(s)
                }
                var f = 0;
                for (u = 0; u < r.length; u++) f += r[u].dataCount;
                if (s.getLengthInBits() > 8 * f) throw new Error("code length overflow. (" + s.getLengthInBits() + ">" + 8 * f + ")");
                for (s.getLengthInBits() + 4 <= 8 * f && s.put(0, 4); s.getLengthInBits() % 8 != 0;) s.putBit(!1);
                for (; !(s.getLengthInBits() >= 8 * f) && (s.put(c.PAD0, 8), !(s.getLengthInBits() >= 8 * f));) s.put(c.PAD1, 8);
                return c.createBytes(s, r)
            }, c.createBytes = function(e, t) {
                for (var n = 0, r = 0, i = 0, o = new Array(t.length), c = new Array(t.length), u = 0; u < t.length; u++) {
                    var l = t[u].dataCount,
                        f = t[u].totalCount - l;
                    r = Math.max(r, l), i = Math.max(i, f), o[u] = new Array(l);
                    for (var d = 0; d < o[u].length; d++) o[u][d] = 255 & e.buffer[d + n];
                    n += l;
                    var p = a.getErrorCorrectPolynomial(f),
                        h = new s(o[u], p.getLength() - 1).mod(p);
                    c[u] = new Array(p.getLength() - 1);
                    for (d = 0; d < c[u].length; d++) {
                        var g = d + h.getLength() - c[u].length;
                        c[u][d] = g >= 0 ? h.get(g) : 0
                    }
                }
                var v = 0;
                for (d = 0; d < t.length; d++) v += t[d].totalCount;
                var m = new Array(v),
                    y = 0;
                for (d = 0; d < r; d++)
                    for (u = 0; u < t.length; u++) d < o[u].length && (m[y++] = o[u][d]);
                for (d = 0; d < i; d++)
                    for (u = 0; u < t.length; u++) d < c[u].length && (m[y++] = c[u][d]);
                return m
            }, e.exports = c
        },
        "0p+c": (e, t, n) => {
            var r = n("FFk3");

            function i(e, t) {
                this.totalCount = e, this.dataCount = t
            }
            i.RS_BLOCK_TABLE = [
                [1, 26, 19],
                [1, 26, 16],
                [1, 26, 13],
                [1, 26, 9],
                [1, 44, 34],
                [1, 44, 28],
                [1, 44, 22],
                [1, 44, 16],
                [1, 70, 55],
                [1, 70, 44],
                [2, 35, 17],
                [2, 35, 13],
                [1, 100, 80],
                [2, 50, 32],
                [2, 50, 24],
                [4, 25, 9],
                [1, 134, 108],
                [2, 67, 43],
                [2, 33, 15, 2, 34, 16],
                [2, 33, 11, 2, 34, 12],
                [2, 86, 68],
                [4, 43, 27],
                [4, 43, 19],
                [4, 43, 15],
                [2, 98, 78],
                [4, 49, 31],
                [2, 32, 14, 4, 33, 15],
                [4, 39, 13, 1, 40, 14],
                [2, 121, 97],
                [2, 60, 38, 2, 61, 39],
                [4, 40, 18, 2, 41, 19],
                [4, 40, 14, 2, 41, 15],
                [2, 146, 116],
                [3, 58, 36, 2, 59, 37],
                [4, 36, 16, 4, 37, 17],
                [4, 36, 12, 4, 37, 13],
                [2, 86, 68, 2, 87, 69],
                [4, 69, 43, 1, 70, 44],
                [6, 43, 19, 2, 44, 20],
                [6, 43, 15, 2, 44, 16],
                [4, 101, 81],
                [1, 80, 50, 4, 81, 51],
                [4, 50, 22, 4, 51, 23],
                [3, 36, 12, 8, 37, 13],
                [2, 116, 92, 2, 117, 93],
                [6, 58, 36, 2, 59, 37],
                [4, 46, 20, 6, 47, 21],
                [7, 42, 14, 4, 43, 15],
                [4, 133, 107],
                [8, 59, 37, 1, 60, 38],
                [8, 44, 20, 4, 45, 21],
                [12, 33, 11, 4, 34, 12],
                [3, 145, 115, 1, 146, 116],
                [4, 64, 40, 5, 65, 41],
                [11, 36, 16, 5, 37, 17],
                [11, 36, 12, 5, 37, 13],
                [5, 109, 87, 1, 110, 88],
                [5, 65, 41, 5, 66, 42],
                [5, 54, 24, 7, 55, 25],
                [11, 36, 12],
                [5, 122, 98, 1, 123, 99],
                [7, 73, 45, 3, 74, 46],
                [15, 43, 19, 2, 44, 20],
                [3, 45, 15, 13, 46, 16],
                [1, 135, 107, 5, 136, 108],
                [10, 74, 46, 1, 75, 47],
                [1, 50, 22, 15, 51, 23],
                [2, 42, 14, 17, 43, 15],
                [5, 150, 120, 1, 151, 121],
                [9, 69, 43, 4, 70, 44],
                [17, 50, 22, 1, 51, 23],
                [2, 42, 14, 19, 43, 15],
                [3, 141, 113, 4, 142, 114],
                [3, 70, 44, 11, 71, 45],
                [17, 47, 21, 4, 48, 22],
                [9, 39, 13, 16, 40, 14],
                [3, 135, 107, 5, 136, 108],
                [3, 67, 41, 13, 68, 42],
                [15, 54, 24, 5, 55, 25],
                [15, 43, 15, 10, 44, 16],
                [4, 144, 116, 4, 145, 117],
                [17, 68, 42],
                [17, 50, 22, 6, 51, 23],
                [19, 46, 16, 6, 47, 17],
                [2, 139, 111, 7, 140, 112],
                [17, 74, 46],
                [7, 54, 24, 16, 55, 25],
                [34, 37, 13],
                [4, 151, 121, 5, 152, 122],
                [4, 75, 47, 14, 76, 48],
                [11, 54, 24, 14, 55, 25],
                [16, 45, 15, 14, 46, 16],
                [6, 147, 117, 4, 148, 118],
                [6, 73, 45, 14, 74, 46],
                [11, 54, 24, 16, 55, 25],
                [30, 46, 16, 2, 47, 17],
                [8, 132, 106, 4, 133, 107],
                [8, 75, 47, 13, 76, 48],
                [7, 54, 24, 22, 55, 25],
                [22, 45, 15, 13, 46, 16],
                [10, 142, 114, 2, 143, 115],
                [19, 74, 46, 4, 75, 47],
                [28, 50, 22, 6, 51, 23],
                [33, 46, 16, 4, 47, 17],
                [8, 152, 122, 4, 153, 123],
                [22, 73, 45, 3, 74, 46],
                [8, 53, 23, 26, 54, 24],
                [12, 45, 15, 28, 46, 16],
                [3, 147, 117, 10, 148, 118],
                [3, 73, 45, 23, 74, 46],
                [4, 54, 24, 31, 55, 25],
                [11, 45, 15, 31, 46, 16],
                [7, 146, 116, 7, 147, 117],
                [21, 73, 45, 7, 74, 46],
                [1, 53, 23, 37, 54, 24],
                [19, 45, 15, 26, 46, 16],
                [5, 145, 115, 10, 146, 116],
                [19, 75, 47, 10, 76, 48],
                [15, 54, 24, 25, 55, 25],
                [23, 45, 15, 25, 46, 16],
                [13, 145, 115, 3, 146, 116],
                [2, 74, 46, 29, 75, 47],
                [42, 54, 24, 1, 55, 25],
                [23, 45, 15, 28, 46, 16],
                [17, 145, 115],
                [10, 74, 46, 23, 75, 47],
                [10, 54, 24, 35, 55, 25],
                [19, 45, 15, 35, 46, 16],
                [17, 145, 115, 1, 146, 116],
                [14, 74, 46, 21, 75, 47],
                [29, 54, 24, 19, 55, 25],
                [11, 45, 15, 46, 46, 16],
                [13, 145, 115, 6, 146, 116],
                [14, 74, 46, 23, 75, 47],
                [44, 54, 24, 7, 55, 25],
                [59, 46, 16, 1, 47, 17],
                [12, 151, 121, 7, 152, 122],
                [12, 75, 47, 26, 76, 48],
                [39, 54, 24, 14, 55, 25],
                [22, 45, 15, 41, 46, 16],
                [6, 151, 121, 14, 152, 122],
                [6, 75, 47, 34, 76, 48],
                [46, 54, 24, 10, 55, 25],
                [2, 45, 15, 64, 46, 16],
                [17, 152, 122, 4, 153, 123],
                [29, 74, 46, 14, 75, 47],
                [49, 54, 24, 10, 55, 25],
                [24, 45, 15, 46, 46, 16],
                [4, 152, 122, 18, 153, 123],
                [13, 74, 46, 32, 75, 47],
                [48, 54, 24, 14, 55, 25],
                [42, 45, 15, 32, 46, 16],
                [20, 147, 117, 4, 148, 118],
                [40, 75, 47, 7, 76, 48],
                [43, 54, 24, 22, 55, 25],
                [10, 45, 15, 67, 46, 16],
                [19, 148, 118, 6, 149, 119],
                [18, 75, 47, 31, 76, 48],
                [34, 54, 24, 34, 55, 25],
                [20, 45, 15, 61, 46, 16]
            ], i.getRSBlocks = function(e, t) {
                var n = i.getRsBlockTable(e, t);
                if (void 0 == n) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
                for (var r = n.length / 3, o = new Array, a = 0; a < r; a++)
                    for (var s = n[3 * a + 0], c = n[3 * a + 1], u = n[3 * a + 2], l = 0; l < s; l++) o.push(new i(c, u));
                return o
            }, i.getRsBlockTable = function(e, t) {
                switch (t) {
                    case r.L:
                        return i.RS_BLOCK_TABLE[4 * (e - 1) + 0];
                    case r.M:
                        return i.RS_BLOCK_TABLE[4 * (e - 1) + 1];
                    case r.Q:
                        return i.RS_BLOCK_TABLE[4 * (e - 1) + 2];
                    case r.H:
                        return i.RS_BLOCK_TABLE[4 * (e - 1) + 3];
                    default:
                        return
                }
            }, e.exports = i
        },
        dmxF: e => {
            for (var t = {
                    glog: function(e) {
                        if (e < 1) throw new Error("glog(" + e + ")");
                        return t.LOG_TABLE[e]
                    },
                    gexp: function(e) {
                        for (; e < 0;) e += 255;
                        for (; e >= 256;) e -= 255;
                        return t.EXP_TABLE[e]
                    },
                    EXP_TABLE: new Array(256),
                    LOG_TABLE: new Array(256)
                }, n = 0; n < 8; n++) t.EXP_TABLE[n] = 1 << n;
            for (n = 8; n < 256; n++) t.EXP_TABLE[n] = t.EXP_TABLE[n - 4] ^ t.EXP_TABLE[n - 5] ^ t.EXP_TABLE[n - 6] ^ t.EXP_TABLE[n - 8];
            for (n = 0; n < 255; n++) t.LOG_TABLE[t.EXP_TABLE[n]] = n;
            e.exports = t
        },
        u0rh: e => {
            e.exports = {
                MODE_NUMBER: 1,
                MODE_ALPHA_NUM: 2,
                MODE_8BIT_BYTE: 4,
                MODE_KANJI: 8
            }
        },
        Tjmx: (e, t, n) => {
            var r = n("u0rh"),
                i = n("6Hy7"),
                o = n("dmxF"),
                a = 0,
                s = 1,
                c = 2,
                u = 3,
                l = 4,
                f = 5,
                d = 6,
                p = 7,
                h = {
                    PATTERN_POSITION_TABLE: [
                        [],
                        [6, 18],
                        [6, 22],
                        [6, 26],
                        [6, 30],
                        [6, 34],
                        [6, 22, 38],
                        [6, 24, 42],
                        [6, 26, 46],
                        [6, 28, 50],
                        [6, 30, 54],
                        [6, 32, 58],
                        [6, 34, 62],
                        [6, 26, 46, 66],
                        [6, 26, 48, 70],
                        [6, 26, 50, 74],
                        [6, 30, 54, 78],
                        [6, 30, 56, 82],
                        [6, 30, 58, 86],
                        [6, 34, 62, 90],
                        [6, 28, 50, 72, 94],
                        [6, 26, 50, 74, 98],
                        [6, 30, 54, 78, 102],
                        [6, 28, 54, 80, 106],
                        [6, 32, 58, 84, 110],
                        [6, 30, 58, 86, 114],
                        [6, 34, 62, 90, 118],
                        [6, 26, 50, 74, 98, 122],
                        [6, 30, 54, 78, 102, 126],
                        [6, 26, 52, 78, 104, 130],
                        [6, 30, 56, 82, 108, 134],
                        [6, 34, 60, 86, 112, 138],
                        [6, 30, 58, 86, 114, 142],
                        [6, 34, 62, 90, 118, 146],
                        [6, 30, 54, 78, 102, 126, 150],
                        [6, 24, 50, 76, 102, 128, 154],
                        [6, 28, 54, 80, 106, 132, 158],
                        [6, 32, 58, 84, 110, 136, 162],
                        [6, 26, 54, 82, 110, 138, 166],
                        [6, 30, 58, 86, 114, 142, 170]
                    ],
                    G15: 1335,
                    G18: 7973,
                    G15_MASK: 21522,
                    getBCHTypeInfo: function(e) {
                        for (var t = e << 10; h.getBCHDigit(t) - h.getBCHDigit(h.G15) >= 0;) t ^= h.G15 << h.getBCHDigit(t) - h.getBCHDigit(h.G15);
                        return (e << 10 | t) ^ h.G15_MASK
                    },
                    getBCHTypeNumber: function(e) {
                        for (var t = e << 12; h.getBCHDigit(t) - h.getBCHDigit(h.G18) >= 0;) t ^= h.G18 << h.getBCHDigit(t) - h.getBCHDigit(h.G18);
                        return e << 12 | t
                    },
                    getBCHDigit: function(e) {
                        for (var t = 0; 0 != e;) t++, e >>>= 1;
                        return t
                    },
                    getPatternPosition: function(e) {
                        return h.PATTERN_POSITION_TABLE[e - 1]
                    },
                    getMask: function(e, t, n) {
                        switch (e) {
                            case a:
                                return (t + n) % 2 == 0;
                            case s:
                                return t % 2 == 0;
                            case c:
                                return n % 3 == 0;
                            case u:
                                return (t + n) % 3 == 0;
                            case l:
                                return (Math.floor(t / 2) + Math.floor(n / 3)) % 2 == 0;
                            case f:
                                return t * n % 2 + t * n % 3 == 0;
                            case d:
                                return (t * n % 2 + t * n % 3) % 2 == 0;
                            case p:
                                return (t * n % 3 + (t + n) % 2) % 2 == 0;
                            default:
                                throw new Error("bad maskPattern:" + e)
                        }
                    },
                    getErrorCorrectPolynomial: function(e) {
                        for (var t = new i([1], 0), n = 0; n < e; n++) t = t.multiply(new i([1, o.gexp(n)], 0));
                        return t
                    },
                    getLengthInBits: function(e, t) {
                        if (1 <= t && t < 10) switch (e) {
                            case r.MODE_NUMBER:
                                return 10;
                            case r.MODE_ALPHA_NUM:
                                return 9;
                            case r.MODE_8BIT_BYTE:
                            case r.MODE_KANJI:
                                return 8;
                            default:
                                throw new Error("mode:" + e)
                        } else if (t < 27) switch (e) {
                            case r.MODE_NUMBER:
                                return 12;
                            case r.MODE_ALPHA_NUM:
                                return 11;
                            case r.MODE_8BIT_BYTE:
                                return 16;
                            case r.MODE_KANJI:
                                return 10;
                            default:
                                throw new Error("mode:" + e)
                        } else {
                            if (!(t < 41)) throw new Error("type:" + t);
                            switch (e) {
                                case r.MODE_NUMBER:
                                    return 14;
                                case r.MODE_ALPHA_NUM:
                                    return 13;
                                case r.MODE_8BIT_BYTE:
                                    return 16;
                                case r.MODE_KANJI:
                                    return 12;
                                default:
                                    throw new Error("mode:" + e)
                            }
                        }
                    },
                    getLostPoint: function(e) {
                        for (var t = e.getModuleCount(), n = 0, r = 0; r < t; r++)
                            for (var i = 0; i < t; i++) {
                                for (var o = 0, a = e.isDark(r, i), s = -1; s <= 1; s++)
                                    if (!(r + s < 0 || t <= r + s))
                                        for (var c = -1; c <= 1; c++) i + c < 0 || t <= i + c || 0 == s && 0 == c || a == e.isDark(r + s, i + c) && o++;
                                o > 5 && (n += 3 + o - 5)
                            }
                        for (r = 0; r < t - 1; r++)
                            for (i = 0; i < t - 1; i++) {
                                var u = 0;
                                e.isDark(r, i) && u++, e.isDark(r + 1, i) && u++, e.isDark(r, i + 1) && u++, e.isDark(r + 1, i + 1) && u++, 0 != u && 4 != u || (n += 3)
                            }
                        for (r = 0; r < t; r++)
                            for (i = 0; i < t - 6; i++) e.isDark(r, i) && !e.isDark(r, i + 1) && e.isDark(r, i + 2) && e.isDark(r, i + 3) && e.isDark(r, i + 4) && !e.isDark(r, i + 5) && e.isDark(r, i + 6) && (n += 40);
                        for (i = 0; i < t; i++)
                            for (r = 0; r < t - 6; r++) e.isDark(r, i) && !e.isDark(r + 1, i) && e.isDark(r + 2, i) && e.isDark(r + 3, i) && e.isDark(r + 4, i) && !e.isDark(r + 5, i) && e.isDark(r + 6, i) && (n += 40);
                        var l = 0;
                        for (i = 0; i < t; i++)
                            for (r = 0; r < t; r++) e.isDark(r, i) && l++;
                        return n += 10 * (Math.abs(100 * l / t / t - 50) / 5)
                    }
                };
            e.exports = h
        },
        "8Zi/": (e, t, n) => {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }

            function i() {
                return i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                }, i.apply(this, arguments)
            }

            function o(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {},
                        r = Object.keys(n);
                    "function" === typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                    })))), r.forEach((function(t) {
                        g(e, t, n[t])
                    }))
                }
                return e
            }

            function a(e, t) {
                if (null == e) return {};
                var n, r, i = function(e, t) {
                    if (null == e) return {};
                    var n, r, i = {},
                        o = Object.keys(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || (i[n] = e[n]);
                    return i
                }(e, t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < o.length; r++) n = o[r], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (i[n] = e[n])
                }
                return i
            }

            function s(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function c(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function u(e, t, n) {
                return t && c(e.prototype, t), n && c(e, n), e
            }

            function l(e, t) {
                return !t || "object" !== r(t) && "function" !== typeof t ? h(e) : t
            }

            function f(e) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, f(e)
            }

            function d(e, t) {
                if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), t && p(e, t)
            }

            function p(e, t) {
                return p = Object.setPrototypeOf || function(e, t) {
                    return e.__proto__ = t, e
                }, p(e, t)
            }

            function h(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function g(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var v = n("DTvD"),
                m = n("aWzz"),
                y = n("1PNn"),
                b = n("FFk3");

            function w(e) {
                for (var t = "", n = 0; n < e.length; n++) {
                    var r = e.charCodeAt(n);
                    r < 128 ? t += String.fromCharCode(r) : r < 2048 ? (t += String.fromCharCode(192 | r >> 6), t += String.fromCharCode(128 | 63 & r)) : r < 55296 || r >= 57344 ? (t += String.fromCharCode(224 | r >> 12), t += String.fromCharCode(128 | r >> 6 & 63), t += String.fromCharCode(128 | 63 & r)) : (n++, r = 65536 + ((1023 & r) << 10 | 1023 & e.charCodeAt(n)), t += String.fromCharCode(240 | r >> 18), t += String.fromCharCode(128 | r >> 12 & 63), t += String.fromCharCode(128 | r >> 6 & 63), t += String.fromCharCode(128 | 63 & r))
                }
                return t
            }
            var E = {
                    size: 128,
                    level: "L",
                    bgColor: "#FFFFFF",
                    fgColor: "#000000",
                    includeMargin: !1
                },
                _ = {
                    value: m.string.isRequired,
                    size: m.number,
                    level: m.oneOf(["L", "M", "Q", "H"]),
                    bgColor: m.string,
                    fgColor: m.string,
                    includeMargin: m.bool
                };

            function R(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = [];
                return e.forEach((function(e, r) {
                    var i = null;
                    e.forEach((function(o, a) {
                        if (!o && null !== i) return n.push("M".concat(i + t, " ").concat(r + t, "h").concat(a - i, "v1H").concat(i + t, "z")), void(i = null);
                        if (a !== e.length - 1) o && null === i && (i = a);
                        else {
                            if (!o) return;
                            null === i ? n.push("M".concat(a + t, ",").concat(r + t, " h1v1H").concat(a + t, "z")) : n.push("M".concat(i + t, ",").concat(r + t, " h").concat(a + 1 - i, "v1H").concat(i + t, "z"))
                        }
                    }))
                })), n.join("")
            }
            var x = function() {
                    try {
                        (new Path2D).addPath(new Path2D)
                    } catch (e) {
                        return !1
                    }
                    return !0
                }(),
                A = function(e) {
                    function t() {
                        var e, n;
                        s(this, t);
                        for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++) i[o] = arguments[o];
                        return g(h(h(n = l(this, (e = f(t)).call.apply(e, [this].concat(i))))), "_canvas", void 0), n
                    }
                    return d(t, e), u(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.update()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.update()
                        }
                    }, {
                        key: "update",
                        value: function() {
                            var e = this.props,
                                t = e.value,
                                n = e.size,
                                r = e.level,
                                i = e.bgColor,
                                o = e.fgColor,
                                a = e.includeMargin,
                                s = new y(-1, b[r]);
                            if (s.addData(w(t)), s.make(), null != this._canvas) {
                                var c = this._canvas,
                                    u = c.getContext("2d");
                                if (!u) return;
                                var l = s.modules;
                                if (null === l) return;
                                var f = a ? 4 : 0,
                                    d = l.length + 2 * f,
                                    p = window.devicePixelRatio || 1;
                                c.height = c.width = n * p;
                                var h = n / d * p;
                                u.scale(h, h), u.fillStyle = i, u.fillRect(0, 0, d, d), u.fillStyle = o, x ? u.fill(new Path2D(R(l, f))) : l.forEach((function(e, t) {
                                    e.forEach((function(e, n) {
                                        e && u.fillRect(n + f, t + f, 1, 1)
                                    }))
                                }))
                            }
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this,
                                t = this.props,
                                n = (t.value, t.size),
                                r = (t.level, t.bgColor, t.fgColor, t.style),
                                s = (t.includeMargin, a(t, ["value", "size", "level", "bgColor", "fgColor", "style", "includeMargin"])),
                                c = o({
                                    height: n,
                                    width: n
                                }, r);
                            return v.createElement("canvas", i({
                                style: c,
                                height: n,
                                width: n,
                                ref: function(t) {
                                    return e._canvas = t
                                }
                            }, s))
                        }
                    }]), t
                }(v.PureComponent);
            g(A, "defaultProps", E), g(A, "propTypes", _);
            var S = function(e) {
                function t() {
                    return s(this, t), l(this, f(t).apply(this, arguments))
                }
                return d(t, e), u(t, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.value,
                            n = e.size,
                            r = e.level,
                            o = e.bgColor,
                            s = e.fgColor,
                            c = e.includeMargin,
                            u = a(e, ["value", "size", "level", "bgColor", "fgColor", "includeMargin"]),
                            l = new y(-1, b[r]);
                        l.addData(w(t)), l.make();
                        var f = l.modules;
                        if (null === f) return null;
                        var d = c ? 4 : 0,
                            p = R(f, d),
                            h = f.length + 2 * d;
                        return v.createElement("svg", i({
                            shapeRendering: "crispEdges",
                            height: n,
                            width: n,
                            viewBox: "0 0 ".concat(h, " ").concat(h)
                        }, u), v.createElement("path", {
                            fill: o,
                            d: "M0,0 h".concat(h, "v").concat(h, "H0z")
                        }), v.createElement("path", {
                            fill: s,
                            d: p
                        }))
                    }
                }]), t
            }(v.PureComponent);
            g(S, "defaultProps", E), g(S, "propTypes", _);
            var C = function(e) {
                var t = e.renderAs,
                    n = a(e, ["renderAs"]),
                    r = "svg" === t ? S : A;
                return v.createElement(r, n)
            };
            C.defaultProps = o({
                renderAs: "canvas"
            }, E), e.exports = C
        },
        "6p3b": (e, t, n) => {
            "use strict";
            var r, i = n("fALc"),
                o = (r = i) && r.__esModule ? r : {
                    default: r
                };
            var a = -1;

            function s(e, t) {
                if (e === a) return o.default.transform(t)
            }
        },
        Mc4e: (e, t, n) => {
            "use strict";

            function r() {
                let e = 0,
                    t = 0;
                for (let r = 0; r < 28; r += 7) {
                    let n = this.buf[this.pos++];
                    if (e |= (127 & n) << r, 0 == (128 & n)) return this.assertBounds(), [e, t]
                }
                let n = this.buf[this.pos++];
                if (e |= (15 & n) << 28, t = (112 & n) >> 4, 0 == (128 & n)) return this.assertBounds(), [e, t];
                for (let r = 3; r <= 31; r += 7) {
                    let n = this.buf[this.pos++];
                    if (t |= (127 & n) << r, 0 == (128 & n)) return this.assertBounds(), [e, t]
                }
                throw new Error("invalid varint")
            }

            function i(e, t, n) {
                for (let o = 0; o < 28; o += 7) {
                    const r = e >>> o,
                        i = !(r >>> 7 == 0 && 0 == t),
                        a = 255 & (i ? 128 | r : r);
                    if (n.push(a), !i) return
                }
                const r = e >>> 28 & 15 | (7 & t) << 4,
                    i = !(t >> 3 == 0);
                if (n.push(255 & (i ? 128 | r : r)), i) {
                    for (let e = 3; e < 31; e += 7) {
                        const r = t >>> e,
                            i = !(r >>> 7 == 0),
                            o = 255 & (i ? 128 | r : r);
                        if (n.push(o), !i) return
                    }
                    n.push(t >>> 31 & 1)
                }
            }
            n.d(t, {
                V5: () => x,
                fI: () => R
            });
            const o = 4294967296;

            function a(e) {
                const t = "-" === e[0];
                t && (e = e.slice(1));
                const n = 1e6;
                let r = 0,
                    i = 0;

                function a(t, a) {
                    const s = Number(e.slice(t, a));
                    i *= n, r = r * n + s, r >= o && (i += r / o | 0, r %= o)
                }
                return a(-24, -18), a(-18, -12), a(-12, -6), a(-6), t ? u(r, i) : c(r, i)
            }

            function s(e, t) {
                if (({
                        lo: e,
                        hi: t
                    } = function(e, t) {
                        return {
                            lo: e >>> 0,
                            hi: t >>> 0
                        }
                    }(e, t)), t <= 2097151) return String(o * t + e);
                const n = 16777215 & (e >>> 24 | t << 8),
                    r = t >> 16 & 65535;
                let i = (16777215 & e) + 6777216 * n + 6710656 * r,
                    a = n + 8147497 * r,
                    s = 2 * r;
                const c = 1e7;
                return i >= c && (a += Math.floor(i / c), i %= c), a >= c && (s += Math.floor(a / c), a %= c), s.toString() + l(a) + l(i)
            }

            function c(e, t) {
                return {
                    lo: 0 | e,
                    hi: 0 | t
                }
            }

            function u(e, t) {
                return t = ~t, e ? e = 1 + ~e : t += 1, c(e, t)
            }
            const l = e => {
                const t = String(e);
                return "0000000".slice(t.length) + t
            };

            function f(e, t) {
                if (e >= 0) {
                    for (; e > 127;) t.push(127 & e | 128), e >>>= 7;
                    t.push(e)
                } else {
                    for (let n = 0; n < 9; n++) t.push(127 & e | 128), e >>= 7;
                    t.push(1)
                }
            }

            function d() {
                let e = this.buf[this.pos++],
                    t = 127 & e;
                if (0 == (128 & e)) return this.assertBounds(), t;
                if (e = this.buf[this.pos++], t |= (127 & e) << 7, 0 == (128 & e)) return this.assertBounds(), t;
                if (e = this.buf[this.pos++], t |= (127 & e) << 14, 0 == (128 & e)) return this.assertBounds(), t;
                if (e = this.buf[this.pos++], t |= (127 & e) << 21, 0 == (128 & e)) return this.assertBounds(), t;
                e = this.buf[this.pos++], t |= (15 & e) << 28;
                for (let n = 5; 0 !== (128 & e) && n < 10; n++) e = this.buf[this.pos++];
                if (0 != (128 & e)) throw new Error("invalid varint");
                return this.assertBounds(), t >>> 0
            }
            var p = n("F63i");
            const h = g();

            function g() {
                const e = new DataView(new ArrayBuffer(8));
                if ("function" === typeof BigInt && "function" === typeof e.getBigInt64 && "function" === typeof e.getBigUint64 && "function" === typeof e.setBigInt64 && "function" === typeof e.setBigUint64 && ("object" != typeof p || !0)) {
                    const t = BigInt("-9223372036854775808"),
                        n = BigInt("9223372036854775807"),
                        r = BigInt("0"),
                        i = BigInt("18446744073709551615");
                    return {
                        zero: BigInt(0),
                        supported: !0,
                        parse(e) {
                            const r = "bigint" == typeof e ? e : BigInt(e);
                            if (r > n || r < t) throw new Error(`invalid int64: ${e}`);
                            return r
                        },
                        uParse(e) {
                            const t = "bigint" == typeof e ? e : BigInt(e);
                            if (t > i || t < r) throw new Error(`invalid uint64: ${e}`);
                            return t
                        },
                        enc(t) {
                            return e.setBigInt64(0, this.parse(t), !0), {
                                lo: e.getInt32(0, !0),
                                hi: e.getInt32(4, !0)
                            }
                        },
                        uEnc(t) {
                            return e.setBigInt64(0, this.uParse(t), !0), {
                                lo: e.getInt32(0, !0),
                                hi: e.getInt32(4, !0)
                            }
                        },
                        dec: (t, n) => (e.setInt32(0, t, !0), e.setInt32(4, n, !0), e.getBigInt64(0, !0)),
                        uDec: (t, n) => (e.setInt32(0, t, !0), e.setInt32(4, n, !0), e.getBigUint64(0, !0))
                    }
                }
                return {
                    zero: "0",
                    supported: !1,
                    parse: e => ("string" != typeof e && (e = e.toString()), v(e), e),
                    uParse: e => ("string" != typeof e && (e = e.toString()), m(e), e),
                    enc: e => ("string" != typeof e && (e = e.toString()), v(e), a(e)),
                    uEnc: e => ("string" != typeof e && (e = e.toString()), m(e), a(e)),
                    dec: (e, t) => function(e, t) {
                        let n = c(e, t);
                        const r = 2147483648 & n.hi;
                        r && (n = u(n.lo, n.hi));
                        const i = s(n.lo, n.hi);
                        return r ? "-" + i : i
                    }(e, t),
                    uDec: (e, t) => s(e, t)
                }
            }

            function v(e) {
                if (!/^-?[0-9]+$/.test(e)) throw new Error("invalid int64: " + e)
            }

            function m(e) {
                if (!/^[0-9]+$/.test(e)) throw new Error("invalid uint64: " + e)
            }
            const y = Symbol.for("@bufbuild/protobuf/text-encoding");

            function b() {
                if (void 0 == globalThis[y]) {
                    const e = new globalThis.TextEncoder,
                        t = new globalThis.TextDecoder;
                    globalThis[y] = {
                        encodeUtf8: t => e.encode(t),
                        decodeUtf8: e => t.decode(e),
                        checkUtf8(e) {
                            try {
                                return encodeURIComponent(e), !0
                            } catch (t) {
                                return !1
                            }
                        }
                    }
                }
                return globalThis[y]
            }
            var w;
            ! function(e) {
                e[e.Varint = 0] = "Varint", e[e.Bit64 = 1] = "Bit64", e[e.LengthDelimited = 2] = "LengthDelimited", e[e.StartGroup = 3] = "StartGroup", e[e.EndGroup = 4] = "EndGroup", e[e.Bit32 = 5] = "Bit32"
            }(w || (w = {}));
            const E = 34028234663852886e22,
                _ = -34028234663852886e22;
            class R {
                constructor(e = b().encodeUtf8) {
                    this.encodeUtf8 = e, this.stack = [], this.chunks = [], this.buf = []
                }
                finish() {
                    this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []);
                    let e = 0;
                    for (let r = 0; r < this.chunks.length; r++) e += this.chunks[r].length;
                    let t = new Uint8Array(e),
                        n = 0;
                    for (let r = 0; r < this.chunks.length; r++) t.set(this.chunks[r], n), n += this.chunks[r].length;
                    return this.chunks = [], t
                }
                fork() {
                    return this.stack.push({
                        chunks: this.chunks,
                        buf: this.buf
                    }), this.chunks = [], this.buf = [], this
                }
                join() {
                    let e = this.finish(),
                        t = this.stack.pop();
                    if (!t) throw new Error("invalid state, fork stack empty");
                    return this.chunks = t.chunks, this.buf = t.buf, this.uint32(e.byteLength), this.raw(e)
                }
                tag(e, t) {
                    return this.uint32((e << 3 | t) >>> 0)
                }
                raw(e) {
                    return this.buf.length && (this.chunks.push(new Uint8Array(this.buf)), this.buf = []), this.chunks.push(e), this
                }
                uint32(e) {
                    for (S(e); e > 127;) this.buf.push(127 & e | 128), e >>>= 7;
                    return this.buf.push(e), this
                }
                int32(e) {
                    return A(e), f(e, this.buf), this
                }
                bool(e) {
                    return this.buf.push(e ? 1 : 0), this
                }
                bytes(e) {
                    return this.uint32(e.byteLength), this.raw(e)
                }
                string(e) {
                    let t = this.encodeUtf8(e);
                    return this.uint32(t.byteLength), this.raw(t)
                }
                float(e) {
                    ! function(e) {
                        if ("string" == typeof e) {
                            const t = e;
                            if (e = Number(e), isNaN(e) && "NaN" !== t) throw new Error("invalid float32: " + t)
                        } else if ("number" != typeof e) throw new Error("invalid float32: " + typeof e);
                        if (Number.isFinite(e) && (e > E || e < _)) throw new Error("invalid float32: " + e)
                    }(e);
                    let t = new Uint8Array(4);
                    return new DataView(t.buffer).setFloat32(0, e, !0), this.raw(t)
                }
                double(e) {
                    let t = new Uint8Array(8);
                    return new DataView(t.buffer).setFloat64(0, e, !0), this.raw(t)
                }
                fixed32(e) {
                    S(e);
                    let t = new Uint8Array(4);
                    return new DataView(t.buffer).setUint32(0, e, !0), this.raw(t)
                }
                sfixed32(e) {
                    A(e);
                    let t = new Uint8Array(4);
                    return new DataView(t.buffer).setInt32(0, e, !0), this.raw(t)
                }
                sint32(e) {
                    return A(e), f(e = (e << 1 ^ e >> 31) >>> 0, this.buf), this
                }
                sfixed64(e) {
                    let t = new Uint8Array(8),
                        n = new DataView(t.buffer),
                        r = h.enc(e);
                    return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t)
                }
                fixed64(e) {
                    let t = new Uint8Array(8),
                        n = new DataView(t.buffer),
                        r = h.uEnc(e);
                    return n.setInt32(0, r.lo, !0), n.setInt32(4, r.hi, !0), this.raw(t)
                }
                int64(e) {
                    let t = h.enc(e);
                    return i(t.lo, t.hi, this.buf), this
                }
                sint64(e) {
                    let t = h.enc(e),
                        n = t.hi >> 31;
                    return i(t.lo << 1 ^ n, (t.hi << 1 | t.lo >>> 31) ^ n, this.buf), this
                }
                uint64(e) {
                    let t = h.uEnc(e);
                    return i(t.lo, t.hi, this.buf), this
                }
            }
            class x {
                constructor(e, t = b().decodeUtf8) {
                    this.decodeUtf8 = t, this.varint64 = r, this.uint32 = d, this.buf = e, this.len = e.length, this.pos = 0, this.view = new DataView(e.buffer, e.byteOffset, e.byteLength)
                }
                tag() {
                    let e = this.uint32(),
                        t = e >>> 3,
                        n = 7 & e;
                    if (t <= 0 || n < 0 || n > 5) throw new Error("illegal tag: field no " + t + " wire type " + n);
                    return [t, n]
                }
                skip(e, t) {
                    let n = this.pos;
                    switch (e) {
                        case w.Varint:
                            for (; 128 & this.buf[this.pos++];);
                            break;
                        case w.Bit64:
                            this.pos += 4;
                        case w.Bit32:
                            this.pos += 4;
                            break;
                        case w.LengthDelimited:
                            let n = this.uint32();
                            this.pos += n;
                            break;
                        case w.StartGroup:
                            for (;;) {
                                const [e, n] = this.tag();
                                if (n === w.EndGroup) {
                                    if (void 0 !== t && e !== t) throw new Error("invalid end group tag");
                                    break
                                }
                                this.skip(n, e)
                            }
                            break;
                        default:
                            throw new Error("cant skip wire type " + e)
                    }
                    return this.assertBounds(), this.buf.subarray(n, this.pos)
                }
                assertBounds() {
                    if (this.pos > this.len) throw new RangeError("premature EOF")
                }
                int32() {
                    return 0 | this.uint32()
                }
                sint32() {
                    let e = this.uint32();
                    return e >>> 1 ^ -(1 & e)
                }
                int64() {
                    return h.dec(...this.varint64())
                }
                uint64() {
                    return h.uDec(...this.varint64())
                }
                sint64() {
                    let [e, t] = this.varint64(), n = -(1 & e);
                    return e = (e >>> 1 | (1 & t) << 31) ^ n, t = t >>> 1 ^ n, h.dec(e, t)
                }
                bool() {
                    let [e, t] = this.varint64();
                    return 0 !== e || 0 !== t
                }
                fixed32() {
                    return this.view.getUint32((this.pos += 4) - 4, !0)
                }
                sfixed32() {
                    return this.view.getInt32((this.pos += 4) - 4, !0)
                }
                fixed64() {
                    return h.uDec(this.sfixed32(), this.sfixed32())
                }
                sfixed64() {
                    return h.dec(this.sfixed32(), this.sfixed32())
                }
                float() {
                    return this.view.getFloat32((this.pos += 4) - 4, !0)
                }
                double() {
                    return this.view.getFloat64((this.pos += 8) - 8, !0)
                }
                bytes() {
                    let e = this.uint32(),
                        t = this.pos;
                    return this.pos += e, this.assertBounds(), this.buf.subarray(t, t + e)
                }
                string() {
                    return this.decodeUtf8(this.bytes())
                }
            }

            function A(e) {
                if ("string" == typeof e) e = Number(e);
                else if ("number" != typeof e) throw new Error("invalid int32: " + typeof e);
                if (!Number.isInteger(e) || e > 2147483647 || e < -2147483648) throw new Error("invalid int32: " + e)
            }

            function S(e) {
                if ("string" == typeof e) e = Number(e);
                else if ("number" != typeof e) throw new Error("invalid uint32: " + typeof e);
                if (!Number.isInteger(e) || e > 4294967295 || e < 0) throw new Error("invalid uint32: " + e)
            }
        }
    }
]);
//# debugId=90d82504-748e-5f03-bef6-2b42e7bc5c80