! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "30daad15-5dd9-5075-b5f3-f15897f06531")
    } catch (e) {}
}();
(self.webpackChunkusercenter_wallet_ui = self.webpackChunkusercenter_wallet_ui || []).push([
    [1797], {
        dHJT: (e, t, n) => {
            "use strict";
            n.d(t, {
                op: () => g,
                Qs: () => H
            });
            var r = n("DTvD"),
                a = n.n(r),
                _ = n("Ewu1"),
                s = n.n(_),
                i = n("5BvR");

            function o(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                const n = Object.keys(e),
                    r = Object.keys(t),
                    a = n.length;
                if (r.length !== a) return !1;
                for (let _ = 0; _ < a; _++) {
                    const r = n[_];
                    if (e[r] !== t[r] || !Object.prototype.hasOwnProperty.call(t, r)) return !1
                }
                return !0
            }
            var m = n("aWzz"),
                d = n.n(m);
            const u = d().oneOfType([d().string, d().number]),
                l = {
                    all: d().bool,
                    grid: d().bool,
                    aural: d().bool,
                    braille: d().bool,
                    handheld: d().bool,
                    print: d().bool,
                    projection: d().bool,
                    screen: d().bool,
                    tty: d().bool,
                    tv: d().bool,
                    embossed: d().bool
                },
                c = {
                    orientation: d().oneOf(["portrait", "landscape"]),
                    scan: d().oneOf(["progressive", "interlace"]),
                    aspectRatio: d().string,
                    deviceAspectRatio: d().string,
                    height: u,
                    deviceHeight: u,
                    width: u,
                    deviceWidth: u,
                    color: d().bool,
                    colorIndex: d().bool,
                    monochrome: d().bool,
                    resolution: u,
                    type: Object.keys(l)
                },
                {
                    type: M,
                    ...Y
                } = c,
                h = {
                    minAspectRatio: d().string,
                    maxAspectRatio: d().string,
                    minDeviceAspectRatio: d().string,
                    maxDeviceAspectRatio: d().string,
                    minHeight: u,
                    maxHeight: u,
                    minDeviceHeight: u,
                    maxDeviceHeight: u,
                    minWidth: u,
                    maxWidth: u,
                    minDeviceWidth: u,
                    maxDeviceWidth: u,
                    minColor: d().number,
                    maxColor: d().number,
                    minColorIndex: d().number,
                    maxColorIndex: d().number,
                    minMonochrome: d().number,
                    maxMonochrome: d().number,
                    minResolution: u,
                    maxResolution: u,
                    ...Y
                };
            var p = {
                all: { ...l,
                    ...h
                },
                types: l,
                matchers: c,
                features: h
            };
            const f = e => {
                    const t = [];
                    return Object.keys(p.all).forEach((n => {
                        const r = e[n];
                        null != r && t.push(((e, t) => {
                            const n = (0, i.A)(e);
                            return "number" === typeof t && (t = `${t}px`), !0 === t ? n : !1 === t ? `not ${n}` : `(${n}: ${t})`
                        })(n, r))
                    })), t.join(" and ")
                },
                L = (0, r.createContext)(void 0),
                y = e => {
                    if (!e) return;
                    return Object.keys(e).reduce(((t, n) => (t[(0, i.A)(n)] = e[n], t)), {})
                },
                v = () => {
                    const e = (0, r.useRef)(!1);
                    return (0, r.useEffect)((() => {
                        e.current = !0
                    }), []), e.current
                },
                D = e => {
                    const t = () => (e => e.query || f(e))(e),
                        [n, a] = (0, r.useState)(t);
                    return (0, r.useEffect)((() => {
                        const e = t();
                        n !== e && a(e)
                    }), [e]), n
                },
                k = (e, t, n) => {
                    const a = (e => {
                            const t = (0, r.useContext)(L),
                                n = () => y(e) || y(t),
                                [a, _] = (0, r.useState)(n);
                            return (0, r.useEffect)((() => {
                                const e = n();
                                o(a, e) || _(e)
                            }), [e, t]), a
                        })(t),
                        _ = D(e);
                    if (!_) throw new Error("Invalid or missing MediaQuery!");
                    const i = ((e, t) => {
                            const n = () => s()(e, t || {}, !!t),
                                [a, _] = (0, r.useState)(n),
                                i = v();
                            return (0, r.useEffect)((() => {
                                if (i) {
                                    const e = n();
                                    return _(e), () => {
                                        e && e.dispose()
                                    }
                                }
                            }), [e, t]), a
                        })(_, a),
                        m = (e => {
                            const [t, n] = (0, r.useState)(e.matches);
                            return (0, r.useEffect)((() => {
                                const t = e => {
                                    n(e.matches)
                                };
                                return e.addListener(t), n(e.matches), () => {
                                    e.removeListener(t)
                                }
                            }), [e]), t
                        })(i),
                        d = v();
                    return (0, r.useEffect)((() => {
                        d && n && n(m)
                    }), [m]), (0, r.useEffect)((() => () => {
                        i && i.dispose()
                    }), []), m
                };
            var b = n("qrIQ"),
                g = a().useLayoutEffect,
                H = function() {
                    var e = function() {
                        var e = a().useState(b.lq),
                            t = e[0],
                            n = e[1];
                        return a().useEffect((function() {
                            return n(!0)
                        }), []), t
                    }();
                    if (b.lq) return {
                        isClient: e,
                        isMobile: !0,
                        isTablet: !1
                    };
                    var t = k({
                            query: "screen and (max-width: 767px)"
                        }),
                        n = k({
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
                d: () => s
            });
            var r = n("DTvD"),
                a = n.n(r),
                _ = void 0,
                s = function(e) {
                    var t = e.fn,
                        n = e.time,
                        s = void 0 === n ? 33.33 : n,
                        i = e.deps,
                        o = void 0 === i ? [] : i,
                        m = a().useRef(),
                        d = a().useRef(t);
                    a().useEffect((function() {
                        d.current = t
                    }), [t]);
                    var u = (0, r.useCallback)((function() {
                        m.current && clearTimeout(m.current)
                    }), []);
                    a().useEffect((function() {
                        return u
                    }), o);
                    var l = (0, r.useMemo)((function() {
                        return m.current && clearTimeout(m.current),
                            function() {
                                for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                                m.current && clearTimeout(m.current), m.current = setTimeout((function() {
                                    var t = d.current;
                                    t && t.apply(_, e), m.current = void 0
                                }), s)
                            }
                    }), [s]);
                    return {
                        debounceFn: l,
                        clearTimer: u
                    }
                }
        },
        W1Th: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("9xbI"),
                i = (0, a.forwardRef)((function(e, t) {
                    return _().createElement(s.A, (0, r.__assign)({}, e, {
                        ref: t
                    }))
                }));
            i.displayName = "Box";
            const o = i
        },
        qx9L: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("DTvD");
            const a = (0, r.createContext)({
                prefixCls: "bn",
                getI18n: function(e) {
                    return e
                }
            })
        },
        "7zlU": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("+Ppt"),
                i = n.n(s),
                o = n("W1Th"),
                m = n("qx9L");
            const d = function(e) {
                var t = (0, a.useContext)(m.A).prefixCls,
                    n = e.color,
                    s = (e.name, e.viewBox),
                    d = void 0 === s ? "0 0 96 96" : s,
                    u = e.children,
                    l = (0, r.__rest)(e, ["color", "name", "viewBox", "children"]),
                    c = i()("".concat(t, "-svg"), e.className),
                    M = {
                        as: "svg",
                        viewBox: d,
                        xmlns: "http://www.w3.org/2000/svg",
                        fill: n
                    };
                return _().createElement(o.A, (0, r.__assign)({}, l, M, {
                    className: c,
                    children: u
                }))
            }
        },
        "+Ppt": (e, t) => {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function a() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var _ = typeof n;
                            if ("string" === _ || "number" === _) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var s = a.apply(null, n);
                                    s && e.push(s)
                                }
                            } else if ("object" === _)
                                if (n.toString === Object.prototype.toString)
                                    for (var i in n) r.call(n, i) && n[i] && e.push(i);
                                else e.push(n.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
                    return a
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        "/sF7": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("7zlU");
            const i = function(e) {
                return _().createElement(s.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), _().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            }
        },
        kY28: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("7zlU");
            const i = function(e) {
                return _().createElement(s.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), _().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",
                    fill: "currentColor"
                }))
            }
        },
        "qCH/": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("7zlU");
            const i = function(e) {
                return _().createElement(s.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), _().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        "2Bze": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("7zlU");
            const i = function(e) {
                return _().createElement(s.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), _().createElement("path", {
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
        uV6S: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("o0Ko"),
                i = n.n(s),
                o = n("1sVx"),
                m = n("ZIpe"),
                d = n("FNUY"),
                u = n("AGKK"),
                l = n("Prrn"),
                c = function(e) {
                    var t, n = e.direction,
                        a = e.className,
                        s = (0, r.__rest)(e, ["direction", "className"]),
                        o = (0, l.r)().prefixCls,
                        m = "".concat(o, "-drawer-handle"),
                        d = "".concat(m, "-icon"),
                        c = i()(m, ((t = {})["data-dir-".concat(n)] = !!n, t), a);
                    return _().createElement(u.Ay, (0, r.__assign)({}, {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "drawer handle"
                    }, s, {
                        className: c
                    }), _().createElement(u.Ay, {
                        className: d,
                        "aria-hidden": "true"
                    }))
                },
                M = function(e) {
                    var t = e.direction,
                        n = void 0 === t ? "left" : t,
                        a = e.children,
                        s = e.onClose,
                        i = e.maskClz,
                        o = e.wrapClz,
                        u = (0, r.__rest)(e, ["direction", "children", "onClose", "maskClz", "wrapClz"]);
                    return _().createElement(d.A, (0, r.__assign)({}, u, {
                        onClose: s,
                        className: i
                    }), _().createElement(m.A, {
                        direction: n,
                        className: o,
                        onClose: s
                    }, _().createElement(c, {
                        direction: n
                    }), a))
                };
            M.displayName = "Drawer";
            const Y = M;
            var h = function(e) {
                var t, n = e.direction,
                    s = void 0 === n ? "left" : n,
                    m = e.className,
                    c = e.children,
                    M = e.size,
                    h = void 0 === M ? "auto" : M,
                    p = e.once,
                    f = e.onVisibleChange,
                    L = e.draggable,
                    y = e.onClose,
                    v = (0, r.__rest)(e, ["direction", "className", "children", "size", "once", "onVisibleChange", "draggable", "onClose"]),
                    D = (0, l.r)().prefixCls,
                    k = "".concat(D, "-drawer"),
                    b = i()("".concat(k, "-wrap"), ((t = {})["data-size-".concat(h)] = "auto" !== h, t["data-dir-".concat(s)] = !!s, t["data-draggable"] = !!L, t)),
                    g = i()(k, m),
                    H = (0, o.d)({
                        fn: f,
                        time: 50
                    }).debounceFn,
                    w = (0, a.useCallback)((function() {
                        null === y || void 0 === y || y(), H(!1)
                    }), [y, H]),
                    S = (0, a.useCallback)((function() {
                        p && w()
                    }), [p, w]),
                    T = {
                        "aria-modal": !0,
                        role: "dialog",
                        "aria-label": e.title || "drawer"
                    };
                return L ? _().createElement(Y, (0, r.__assign)({}, T, {
                    onClose: w,
                    maskClz: g,
                    wrapClz: b
                }, e)) : _().createElement(d.A, (0, r.__assign)({}, v, {
                    onClose: w,
                    className: g
                }), _().createElement(u.Ay, (0, r.__assign)({}, T, {
                    className: b,
                    children: c,
                    onClick: S
                })))
            };
            h.displayName = "Drawer";
            const p = h
        },
        "vht/": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => H,
                Z: () => g
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("hyZw"),
                i = n("H2//"),
                o = n("n13J"),
                m = n("vrFG");
            const d = function(e) {
                var t = e.willClose,
                    n = e.closeCallback,
                    s = e.content,
                    i = (0, r.__rest)(e, ["willClose", "closeCallback", "content"]),
                    d = _().useState(!0),
                    u = d[0],
                    l = d[1],
                    c = (0, a.useCallback)((function() {
                        l(!1), setTimeout((function() {
                            n && n()
                        }), m.p)
                    }), [n]);
                return _().useEffect((function() {
                    t && c()
                }), [t, c]), _().createElement(o.Ay, (0, r.__assign)({}, i, {
                    visible: u,
                    onClose: c,
                    children: s
                }))
            };
            var u = n("o0Ko"),
                l = n.n(u),
                c = n("AGKK"),
                M = n("FNUY"),
                Y = n("Prrn");
            const h = function(e) {
                var t = e.duration,
                    n = void 0 === t ? 3e3 : t,
                    a = e.visible,
                    i = e.onClose,
                    o = void 0 === i ? s.es : i,
                    m = e.children,
                    d = (0, r.__rest)(e, ["duration", "visible", "onClose", "children"]),
                    u = _().useRef(),
                    h = (0, Y.r)().prefixCls,
                    p = l()("".concat(h, "-toast"), e.className);
                return _().useEffect((function() {
                    return n ? (u.current = setTimeout((function() {
                        a && o(), u.current = null
                    }), n), function() {
                        return clearTimeout(u.current)
                    }) : function() {}
                }), [a, n, o]), _().createElement(M.A, (0, r.__assign)({}, d, {
                    visible: a,
                    onClose: o,
                    className: p
                }), _().createElement(c.Ay, {
                    className: "".concat(h, "-toast-wrap"),
                    children: m
                }))
            };
            const p = function(e) {
                var t = e.willClose,
                    n = e.closeCallback,
                    s = e.content,
                    i = (0, r.__rest)(e, ["willClose", "closeCallback", "content"]),
                    o = _().useState(!0),
                    d = o[0],
                    u = o[1],
                    l = (0, a.useCallback)((function() {
                        u(!1), setTimeout((function() {
                            n && n()
                        }), m.p)
                    }), [n]);
                return _().useEffect((function() {
                    t && l()
                }), [t, l]), _().createElement(h, (0, r.__assign)({}, i, {
                    visible: d,
                    onClose: l,
                    children: s
                }))
            };
            var f = n("uV6S");
            const L = function(e) {
                var t = e.willClose,
                    n = e.closeCallback,
                    s = e.direction,
                    i = void 0 === s ? "bottom" : s,
                    o = e.content,
                    d = (0, r.__rest)(e, ["willClose", "closeCallback", "direction", "content"]),
                    u = _().useState(!0),
                    l = u[0],
                    c = u[1],
                    M = (0, a.useCallback)((function() {
                        c(!1), setTimeout((function() {
                            n && n()
                        }), m.p)
                    }), [n]);
                return _().useEffect((function() {
                    t && M()
                }), [t, M]), _().createElement(f.A, (0, r.__assign)({}, d, {
                    direction: i,
                    visible: l,
                    onClose: M,
                    children: o
                }))
            };
            var y = n("f5gz");
            const v = function(e) {
                var t = e.className,
                    n = e.duration,
                    s = void 0 === n ? 3e3 : n,
                    i = e.willClose,
                    o = e.closeCallback,
                    d = (0, r.__rest)(e, ["className", "duration", "willClose", "closeCallback"]),
                    u = _().useState(!0),
                    l = u[0],
                    c = u[1],
                    M = _().useRef(),
                    Y = (0, a.useCallback)((function() {
                        c(!1), setTimeout((function() {
                            o && o()
                        }), m.p)
                    }), [o]);
                return _().useEffect((function() {
                    i && Y()
                }), [i, Y]), _().useEffect((function() {
                    return s ? (M.current = setTimeout((function() {
                        l && Y(), M.current = null
                    }), s), function() {
                        return clearTimeout(M.current)
                    }) : function() {}
                }), [l, s, Y]), _().createElement(m.A, {
                    className: t,
                    visible: l
                }, _().createElement(y.A, (0, r.__assign)({
                    closable: !0,
                    variant: "push"
                }, d, {
                    onClose: Y
                })))
            };
            var D = function(e) {
                var t = e.placement,
                    n = e.offsetX,
                    r = e.offsetY,
                    a = t.split("-"),
                    _ = a[0],
                    s = a[1],
                    i = s ? 0 : "50%",
                    o = r,
                    m = s ? n : "50%";
                return ("end" === s ? {
                    top: {
                        transform: "translate(-".concat(i, ", 0)"),
                        top: o,
                        right: m
                    },
                    bottom: {
                        transform: "translate(-".concat(i, ", 0)"),
                        bottom: o,
                        right: m
                    }
                } : {
                    top: {
                        transform: "translate(-".concat(i, ", 0)"),
                        top: o,
                        left: m
                    },
                    bottom: {
                        transform: "translate(-".concat(i, ", 0)"),
                        bottom: o,
                        left: m
                    }
                })[_]
            };
            const k = function(e) {
                var t = e.offsetX,
                    n = void 0 === t ? 16 : t,
                    a = e.offsetY,
                    s = void 0 === a ? 16 : a,
                    i = e.notifies,
                    o = (0, Y.r)().prefixCls,
                    m = "".concat(o, "-layer-notifies");
                if (!i.length) return null;
                var d = i.reduce((function(e, t) {
                    var n = t.uid,
                        a = t.placement,
                        s = void 0 === a ? "top-end" : a,
                        i = (0, r.__rest)(t, ["uid", "placement"]);
                    return e[s].push(_().createElement(v, (0, r.__assign)({
                        key: n
                    }, i))), e
                }), {
                    "top-start": [],
                    top: [],
                    "top-end": [],
                    "bottom-start": [],
                    bottom: [],
                    "bottom-end": []
                });
                return _().createElement(c.Ay, {
                    className: "".concat(m, "-wrap")
                }, Object.keys(d).map((function(e) {
                    var t, r = e.split("-"),
                        a = (r[0], r[1]),
                        i = d[e],
                        o = l()(m, ((t = {})["data-pos-".concat(a)] = a, t));
                    return i.length ? _().createElement(c.Ay, {
                        key: e,
                        className: o,
                        children: i,
                        style: D({
                            placement: e,
                            offsetX: n,
                            offsetY: s
                        })
                    }) : null
                })))
            };
            var b = (0, a.createContext)({
                    openModal: s.es,
                    closeModal: s.es,
                    openToast: s.es,
                    closeToast: s.es,
                    openDrawer: s.es,
                    closeDrawer: s.es,
                    pushNotify: s.es,
                    closeNotify: s.es
                }),
                g = function() {
                    return _().useContext(b)
                };
            const H = function(e) {
                var t = e.children,
                    n = e.notifiesPosition,
                    s = (0, a.useState)(),
                    o = s[0],
                    m = s[1],
                    u = (0, a.useState)(),
                    l = u[0],
                    c = u[1],
                    M = (0, a.useState)(),
                    Y = M[0],
                    h = M[1],
                    f = (0, a.useState)([]),
                    y = f[0],
                    v = f[1],
                    D = {};
                return D.openModal = (0, a.useCallback)((function(e) {
                    var t = e.closeCallback;
                    m((0, r.__assign)((0, r.__assign)({}, e), {
                        closeCallback: function() {
                            m(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), D.closeModal = (0, a.useCallback)((function() {
                    m((function(e) {
                        return e ? (0, r.__assign)((0, r.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), D.openToast = (0, a.useCallback)((function(e) {
                    var t = e.closeCallback;
                    c((0, r.__assign)((0, r.__assign)({}, e), {
                        closeCallback: function() {
                            c(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), D.closeToast = (0, a.useCallback)((function() {
                    c((function(e) {
                        return e ? (0, r.__assign)((0, r.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), D.openDrawer = (0, a.useCallback)((function(e) {
                    var t = e.closeCallback;
                    h((0, r.__assign)((0, r.__assign)({}, e), {
                        closeCallback: function() {
                            h(null), t && t()
                        },
                        willClose: !1
                    }))
                }), []), D.closeDrawer = (0, a.useCallback)((function() {
                    h((function(e) {
                        return e ? (0, r.__assign)((0, r.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), D.pushNotify = (0, a.useCallback)((function(e) {
                    var t = (0, i.uR)(8),
                        n = (0, r.__assign)((0, r.__assign)({}, e), {
                            uid: t,
                            closeCallback: function() {
                                e.closeCallback && e.closeCallback(), v((function(e) {
                                    return e.filter((function(e) {
                                        return e.uid !== t
                                    }))
                                }))
                            },
                            willClose: !1
                        });
                    return v((function(e) {
                        return (0, r.__spreadArray)((0, r.__spreadArray)([], e, !0), [n], !1)
                    })), n.uid
                }), []), D.closeNotify = (0, a.useCallback)((function(e) {
                    v((function(t) {
                        return t.map((function(t) {
                            return t.uid === e ? (0, r.__assign)((0, r.__assign)({}, t), {
                                willClose: !0
                            }) : t
                        }))
                    }))
                }), []), _().createElement(b.Provider, {
                    value: D
                }, t, l && _().createElement(p, (0, r.__assign)({}, l)), o && _().createElement(d, (0, r.__assign)({}, o)), Y && _().createElement(L, (0, r.__assign)({}, Y)), _().createElement(k, (0, r.__assign)({
                    notifies: y
                }, n)))
            }
        },
        FNUY: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => Y
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("hTvQ"),
                i = n.n(s),
                o = n("hyZw"),
                m = n("qrIQ"),
                d = n("o0Ko"),
                u = n.n(d),
                l = n("vrFG"),
                c = n("Prrn"),
                M = n("AGKK");
            const Y = function(e) {
                var t, n = e.visible,
                    a = e.inner,
                    s = e.maskClose,
                    d = void 0 === s || s,
                    Y = e.needSEO,
                    h = e.enablePortal,
                    p = e.portalNode,
                    f = e.scrollFree,
                    L = e.wrapperProps,
                    y = e.onClose,
                    v = void 0 === y ? o.es : y,
                    D = e.enableScrollSpace,
                    k = void 0 === D || D,
                    b = (0, c.r)(),
                    g = b.prefixCls,
                    H = b.isRTL,
                    w = "".concat(g, "-mask"),
                    S = u()(w, ((t = {})["".concat(w, "-rtl")] = !!H, t["".concat(w, "-inner")] = !!a, t), e.className);
                _().useEffect((function() {
                    return m.lq || a || f || !(null === document || void 0 === document ? void 0 : document.body) ? o.es : (document.body.style.overflow = n ? "hidden" : "auto", document.body.classList.toggle("".concat(g, "-mask-body"), k && n && document.body.scrollHeight > window.innerHeight), function() {
                        (null === document || void 0 === document ? void 0 : document.body) && (document.body.style.overflow = "auto", document.body.classList.remove("".concat(g, "-mask-body")))
                    })
                }), [n, a, f, g, k]);
                var T = _().useCallback((function(e) {
                    h || e.stopPropagation();
                    var t = e.target,
                        n = e.currentTarget,
                        r = m.lq ? t.id === n.id : t === n;
                    d && r && v()
                }), [v, d, h]);
                var j = {
                        role: "presentation"
                    },
                    C = _().createElement(l.A, (0, r.__assign)({}, j, {
                        className: S,
                        needSEO: Y,
                        visible: n,
                        onClick: T,
                        children: e.children
                    })),
                    A = L ? _().createElement(M.Ay, (0, r.__assign)({}, j, L), C) : C;
                return !m.lq && h ? i().createPortal(A, p instanceof HTMLElement ? p : document.body) : A
            }
        },
        n13J: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => h
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("o0Ko"),
                i = n.n(s),
                o = n("AGKK"),
                m = n("FNUY"),
                d = n("Prrn"),
                u = n("/sF7"),
                l = n("2Bze"),
                c = n("hyZw"),
                M = n("uV6S"),
                Y = function(e) {
                    var t, n = e.children,
                        a = e.className,
                        s = e.responsive,
                        u = e.direction,
                        l = void 0 === u ? "bottom" : u,
                        c = e.modalSize,
                        Y = void 0 === c ? "small" : c,
                        h = (0, r.__rest)(e, ["children", "className", "responsive", "direction", "modalSize"]),
                        p = (0, d.r)(),
                        f = p.prefixCls,
                        L = p.isMobile,
                        y = "".concat(f, "-modal"),
                        v = i()(y, a),
                        D = i()("".concat(y, "-wrap"), ((t = {})["data-size-".concat(Y)] = !!Y, t));
                    if (s && L) return _().createElement(M.A, (0, r.__assign)({}, h, {
                        direction: l,
                        className: a,
                        children: n
                    }));
                    var k = {
                        role: "dialog",
                        tabIndex: 0,
                        "aria-modal": !0,
                        "aria-label": h["aria-label"] || "modal"
                    };
                    return _().createElement(m.A, (0, r.__assign)({}, h, {
                        className: v
                    }), _().createElement(o.Ay, (0, r.__assign)({}, k, {
                        className: D,
                        children: n
                    })))
                };
            Y.Header = function(e) {
                var t, n, a = e.showPre,
                    s = e.prev,
                    m = e.onPreClick,
                    M = void 0 === m ? c.es : m,
                    Y = e.showNext,
                    h = e.next,
                    p = e.onNextClick,
                    f = void 0 === p ? c.es : p,
                    L = (0, r.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick"]),
                    y = (0, d.r)().prefixCls,
                    v = "".concat(y, "-modal-header"),
                    D = i()(v, ((t = {})["".concat(v, "-pre")] = !!a, t["".concat(v, "-pre-hidden")] = "hidden" === a, t), e.className);
                return a && void 0 === s && (s = _().createElement(u.A, {
                    name: "ArrowLeft1C",
                    color: "PrimaryText"
                })), _().createElement(o.Ay, (0, r.__assign)({}, L, {
                    className: D
                }), a ? _().createElement(o.Ay, {
                    className: i()("".concat(v, "-prev")),
                    onClick: M,
                    children: s,
                    role: "button",
                    "aria-label": "Previous"
                }) : null, _().createElement(o.Ay, {
                    className: "".concat(v, "-main"),
                    children: e.children
                }), Y ? _().createElement(o.Ay, {
                    className: i()("".concat(v, "-next"), (n = {}, n["".concat(v, "-next-hidden")] = "hidden" === Y, n)),
                    onClick: f,
                    children: h || _().createElement(l.A, {
                        name: "Close1C",
                        color: "PrimaryText"
                    }),
                    role: "button",
                    "aria-label": h ? "Next" : "Close"
                }) : null)
            }, Y.Content = function(e) {
                var t = (0, d.r)().prefixCls,
                    n = "".concat(t, "-modal-content"),
                    a = i()(n, e.className);
                return _().createElement(o.Ay, (0, r.__assign)({}, e, {
                    className: a
                }))
            }, Y.Footer = function(e) {
                var t, n = e.layout,
                    a = (0, r.__rest)(e, ["layout"]),
                    s = (0, d.r)().prefixCls,
                    m = "".concat(s, "-modal-footer"),
                    u = i()(m, ((t = {})["".concat(m, "-").concat(n)] = !!n, t), a.className);
                return _().createElement(o.Ay, (0, r.__assign)({}, a, {
                    className: u
                }))
            };
            const h = Y
        },
        f5gz: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => h
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("kY28"),
                i = n("qCH/"),
                o = n("7zlU");
            const m = function(e) {
                return _().createElement(o.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), _().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z",
                    fill: "currentColor"
                }))
            };
            var d = n("2Bze"),
                u = n("o0Ko"),
                l = n.n(u),
                c = n("AGKK"),
                M = n("Prrn"),
                Y = {
                    error: _().createElement(s.A, {
                        name: "CircledClose1C",
                        color: "Error"
                    }),
                    warn: _().createElement(i.A, {
                        name: "CircledWarning1C",
                        color: "PrimaryYellow"
                    }),
                    success: _().createElement(m, {
                        name: "CircledCheckmark1C",
                        color: "Success"
                    }),
                    push: _().createElement(m, {
                        name: "CircledCheckmark1C",
                        color: "Success"
                    })
                };
            const h = function(e) {
                var t, n, s = e.variant,
                    i = void 0 === s ? "primary" : s,
                    o = e.sz,
                    m = void 0 === o ? "middle" : o,
                    u = e.icon,
                    h = e.title,
                    p = e.message,
                    f = e.closable,
                    L = e.onClose,
                    y = e.closeIcon,
                    v = e.minWidth,
                    D = (0, r.__rest)(e, ["variant", "sz", "icon", "title", "message", "closable", "onClose", "closeIcon", "minWidth"]),
                    k = (0, M.r)(),
                    b = k.prefixCls,
                    g = k.isRTL,
                    H = "".concat(b, "-notification"),
                    w = l()(H, ((t = {})["".concat(H, "-rtl")] = !!g, t["".concat(H, "__").concat(i)] = !!i, t["data-size-".concat(m)] = !!m, t["".concat(H, "-mw")] = !!v, t), e.className),
                    S = l()("".concat(H, "-content-message"), {
                        "data-push-message": "push" === i && !h
                    });
                if (!h && !p) return null;
                var T = !1 === u ? null : (0, a.isValidElement)(u) ? u : Y[i],
                    j = (0, r.__assign)({
                        role: "button",
                        "aria-label": "close",
                        tabindex: 0
                    }, (null === y || void 0 === y ? void 0 : y.props) || {}),
                    C = (0, a.useMemo)((function() {
                        var e;
                        return f ? y ? _().cloneElement(y, (0, r.__assign)((0, r.__assign)({}, j), {
                            color: "IconNormal",
                            className: l()("".concat(H, "-close"), null === (e = null === y || void 0 === y ? void 0 : y.props) || void 0 === e ? void 0 : e.className),
                            onClick: L
                        })) : _().createElement(d.A, (0, r.__assign)({}, j, {
                            name: "Close1C",
                            color: "IconNormal",
                            className: "".concat(H, "-close"),
                            onClick: L
                        })) : null
                    }), [H, L, y, f]);
                return _().createElement(c.Ay, (0, r.__assign)({}, {
                    role: "alert"
                }, D, {
                    className: w
                }), !!T && _().cloneElement(T, {
                    className: l()("".concat(H, "-prefix"), null === (n = null === T || void 0 === T ? void 0 : T.props) || void 0 === n ? void 0 : n.className)
                }), _().createElement(c.Ay, {
                    className: l()("".concat(H, "-content"), {
                        closable: f
                    })
                }, !!h && _().createElement(c.Ay, {
                    className: "".concat(H, "-content-title"),
                    children: h
                }), !!p && _().createElement(c.Ay, {
                    className: S,
                    children: p
                }), C))
            }
        },
        Prrn: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u,
                r: () => d
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("dHJT"),
                i = n("qx9L"),
                o = n("qrIQ"),
                m = n("H2//"),
                d = function() {
                    return (0, a.useContext)(i.A)
                };
            const u = function(e) {
                var t = e.prefixCls,
                    n = void 0 === t ? "bn" : t,
                    d = e.iconConfig,
                    u = e.i18n,
                    l = e.children,
                    c = e.isElectron,
                    M = e.isMobile,
                    Y = (0, r.__rest)(e, ["prefixCls", "iconConfig", "i18n", "children", "isElectron", "isMobile"]);
                if (o.lq && (!d || !d.path)) throw new Error("iconConfig must be required in ConfigProvider");
                var h = (0, s.Qs)(),
                    p = (0, a.useCallback)((function(e, t) {
                        var n = u ? u[e] : null,
                            a = t || {},
                            _ = a.defaultValue,
                            s = (0, r.__rest)(a, ["defaultValue"]);
                        return (0, m.uf)(n || _, s)
                    }), [u]),
                    f = (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, Y), c ? (0, r.__assign)((0, r.__assign)({}, h), {
                        isMobile: !1,
                        isTablet: !1
                    }) : (0, r.__assign)((0, r.__assign)({}, h), void 0 !== M && {
                        isMobile: M
                    })), {
                        prefixCls: n,
                        iconConfig: d,
                        getI18n: p
                    });
                return _().createElement(i.A.Provider, {
                    value: f,
                    children: l
                })
            }
        },
        vrFG: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => b,
                p: () => k
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("qrIQ"),
                i = n("OKx2"),
                o = n("eh2c"),
                m = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.$refs = {}, t.setRefs = function(e) {
                            return function(n) {
                                t.$refs[e] = n
                            }
                        }, t
                    }
                    return (0, r.__extends)(t, e), t
                }(a.PureComponent);
            var d = function(e) {
                    return "function" === typeof e
                },
                u = function(e) {
                    return e && "object" === typeof e
                },
                l = function(e, t) {
                    var n = u(e) && !(0, a.isValidElement)(e),
                        r = u(t) && !(0, a.isValidElement)(t);
                    if (n && n === r) {
                        var _ = Object.keys(e),
                            s = Object.keys(t);
                        if (_.length === s.length) return Number(_.every((function(n) {
                            return l(e[n], t[n])
                        })))
                    } else {
                        if (d(e) && d(t)) return !0;
                        if ((0, a.isValidElement)(e) && (0, a.isValidElement)(t)) return !0
                    }
                    return e === t
                },
                c = {
                    offset: 0,
                    x: !0
                },
                M = function(e) {
                    function t(n) {
                        var a = e.call(this, n) || this;
                        return a.unmount = !1, a.index = t.count, a.checkUpdate = function() {
                            return a.$refs.root && !a.unmount
                        }, a.checkViewport = function(e) {
                            var n = a.$refs.root,
                                _ = a.props,
                                s = _.check,
                                o = _.lazyLoad;
                            if (a.checkUpdate()) {
                                var m = (0, r.__assign)((0, r.__assign)({}, c), s),
                                    d = m.offset,
                                    u = m.x;
                                !o || (0, i.cH)(n, d, u) ? (delete t.instances[a.index], a.inViewPort(e), "componentDidMount" === e && console.warn("Warning: This element is already in the viewport on first render. Lazy loading may not be necessary. Consider removing the lazyLoad prop for better performance and to avoid unnecessary JavaScript execution.", "\nElement:", n)) : t.instances[a.index] = a
                            }
                        }, a.inViewPort = function(e) {
                            return e
                        }, a.equalUpdate = function(e, t) {
                            l(e, t) || a.checkViewport()
                        }, t.count += 1, a
                    }
                    return (0, r.__extends)(t, e), t.prototype.componentDidUpdate = function(e) {
                        var t = this.props,
                            n = (t.check, (0, r.__rest)(t, ["check"])),
                            a = (e.check, (0, r.__rest)(e, ["check"]));
                        this.equalUpdate(a, n)
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
                }(m),
                Y = (0, o.nF)(M.checkViewport, 200),
                h = !(0, i.dg)() || {
                    passive: !0,
                    capture: !0
                };
            window.window === window && (window.addEventListener("resize", Y, h), document.addEventListener("scroll", Y, h), document.addEventListener("transitionend", Y, h));
            const p = M;
            var f = n("o0Ko"),
                L = n.n(f),
                y = n("AGKK"),
                v = n("Prrn"),
                D = s.lq ? 100 : 50,
                k = 250;
            const b = function(e) {
                var t = e.visible,
                    n = e.needSEO,
                    i = (0, r.__rest)(e, ["visible", "needSEO"]),
                    o = _().useRef(),
                    m = (0, a.useState)(!1),
                    d = m[0],
                    u = m[1],
                    l = (0, v.r)().prefixCls;
                _().useEffect((function() {
                    return clearTimeout(o.current), o.current = setTimeout((function() {
                            u(!!t), o.current = null
                        }), t ? D : k),
                        function() {
                            return clearTimeout(o.current)
                        }
                }), [t]), _().useEffect((function() {
                    !s.lq && t && setTimeout(p.checkViewport, 1.5 * k)
                }), [t]);
                var c = L()("".concat(l, "-trans"), {
                    "data-seo": n && !t && !d,
                    "data-show": t && d,
                    "data-leave": !t && d
                }, e.className);
                return t || d || n ? _().createElement(y.Ay, (0, r.__assign)({}, i, {
                    className: c
                })) : null
            }
        },
        o0Ko: (e, t) => {
            var n;
            ! function() {
                "use strict";
                var r = {}.hasOwnProperty;

                function a() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var n = arguments[t];
                        if (n) {
                            var _ = typeof n;
                            if ("string" === _ || "number" === _) e.push(n);
                            else if (Array.isArray(n)) {
                                if (n.length) {
                                    var s = a.apply(null, n);
                                    s && e.push(s)
                                }
                            } else if ("object" === _)
                                if (n.toString === Object.prototype.toString)
                                    for (var i in n) r.call(n, i) && n[i] && e.push(i);
                                else e.push(n.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (a.default = a, e.exports = a) : void 0 === (n = function() {
                    return a
                }.apply(t, [])) || (e.exports = n)
            }()
        },
        Ewu1: (e, t, n) => {
            "use strict";
            var r = n("mkfS").Y,
                a = window.matchMedia;

            function _(e, t, n) {
                var _, s = this;

                function i(e) {
                    s.matches = e.matches, s.media = e.media
                }
                a && !n && (_ = a.call(window, e)), _ ? (this.matches = _.matches, this.media = _.media, _.addListener(i)) : (this.matches = r(e, t), this.media = e), this.addListener = function(e) {
                    _ && _.addListener(e)
                }, this.removeListener = function(e) {
                    _ && _.removeListener(e)
                }, this.dispose = function() {
                    _ && _.removeListener(i)
                }
            }
            e.exports = function(e, t, n) {
                return new _(e, t, n)
            }
        },
        "vW+O": (e, t, n) => {
            "use strict";
            n.d(t, {
                Yq: () => be,
                YL: () => ke
            });
            var r, a = n("BK7R"),
                _ = n("QUKP"),
                s = n("09Dg"),
                i = n.n(s),
                o = n("/I5v"),
                m = n.n(o),
                d = {
                    "zh-TC": "zh-tw",
                    "es-LA": "es",
                    "uk-UA": "uk",
                    no: "nb",
                    "da-DK": "da",
                    "my-MM": "my",
                    "lo-LA": "lo",
                    "az-AZ": "az",
                    "de-CH": "de",
                    "es-AR": "es",
                    "fr-AF": "fr",
                    "kk-KZ": "kk",
                    "pt-PT": "pt",
                    "ru-KZ": "ru",
                    "si-LK": "si"
                },
                u = function(e) {
                    return d[e] || e.toLowerCase()
                },
                l = {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    l: "D/M/YYYY",
                    RR: "DD/MM"
                };
            ! function(e) {
                e.LT = "LT", e.LTS = "LTS", e.L = "L", e.l = "l", e.MD = "RR", e.MDHM = "RR LT", e.YMDHM = "L LT", e.YMDHMS = "L LTS"
            }(r || (r = {}));
            var c = ["RR"],
                M = function(e, t) {
                    for (var n, a = (null === t || void 0 === t || null === (n = t.formatTypes) || void 0 === n ? void 0 : n[e]) || r[e] || e, _ = 0; _ < c.length; _++) a = a.replace(c[_], t.formats[c[_]]);
                    return a
                };
            Array.from({
                length: 24
            }, (function(e, t) {
                return t.toString().split("").map((function(e) {
                    return String.fromCodePoint(8320 + parseInt(e, 10))
                })).join("")
            }));

            function Y(e) {
                return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 !== 1
            }

            function h(e, t, n) {
                var r = "".concat(e, " ");
                switch (n) {
                    case "m":
                        return t ? "minuta" : "minut\u0119";
                    case "mm":
                        return r + (Y(e) ? "minuty" : "minut");
                    case "h":
                        return t ? "godzina" : "godzin\u0119";
                    case "hh":
                        return r + (Y(e) ? "godziny" : "godzin");
                    case "MM":
                        return r + (Y(e) ? "miesi\u0105ce" : "miesi\u0119cy");
                    case "yy":
                        return r + (Y(e) ? "lata" : "lat")
                }
            }
            var p = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_wrze\u015bnia_pa\u017adziernika_listopada_grudnia".split("_"),
                f = "stycze\u0144_luty_marzec_kwiecie\u0144_maj_czerwiec_lipiec_sierpie\u0144_wrzesie\u0144_pa\u017adziernik_listopad_grudzie\u0144".split("_"),
                L = /D MMMM/,
                y = function(e, t) {
                    return L.test(t) ? p[e.month()] : f[e.month()]
                };
            y.s = f, y.f = p;
            const v = {
                name: "pl",
                weekdays: "niedziela_poniedzia\u0142ek_wtorek_\u015broda_czwartek_pi\u0105tek_sobota".split("_"),
                weekdaysShort: "ndz_pon_wt_\u015br_czw_pt_sob".split("_"),
                weekdaysMin: "Nd_Pn_Wt_\u015ar_Cz_Pt_So".split("_"),
                months: y,
                monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_pa\u017a_lis_gru".split("_"),
                ordinal: function(e) {
                    return "".concat(e, ".")
                },
                weekStart: 1,
                yearStart: 4,
                relativeTime: {
                    future: "za %s",
                    past: "%s temu",
                    s: "kilka sekund",
                    m: h,
                    mm: h,
                    h: h,
                    hh: h,
                    d: "1 dzie\u0144",
                    dd: "%d dni",
                    M: "miesi\u0105c",
                    MM: h,
                    y: "rok",
                    yy: h
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm",
                    RR: "DD.MM"
                }
            };
            var D = "\u044f\u043d\u0432\u0430\u0440\u044f_\u0444\u0435\u0432\u0440\u0430\u043b\u044f_\u043c\u0430\u0440\u0442\u0430_\u0430\u043f\u0440\u0435\u043b\u044f_\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433\u0443\u0441\u0442\u0430_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044f_\u043e\u043a\u0442\u044f\u0431\u0440\u044f_\u043d\u043e\u044f\u0431\u0440\u044f_\u0434\u0435\u043a\u0430\u0431\u0440\u044f".split("_"),
                k = "\u044f\u043d\u0432\u0430\u0440\u044c_\u0444\u0435\u0432\u0440\u0430\u043b\u044c_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0435\u043b\u044c_\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043d\u0442\u044f\u0431\u0440\u044c_\u043e\u043a\u0442\u044f\u0431\u0440\u044c_\u043d\u043e\u044f\u0431\u0440\u044c_\u0434\u0435\u043a\u0430\u0431\u0440\u044c".split("_"),
                b = "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440._\u0430\u043f\u0440._\u043c\u0430\u044f_\u0438\u044e\u043d\u044f_\u0438\u044e\u043b\u044f_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),
                g = "\u044f\u043d\u0432._\u0444\u0435\u0432\u0440._\u043c\u0430\u0440\u0442_\u0430\u043f\u0440._\u043c\u0430\u0439_\u0438\u044e\u043d\u044c_\u0438\u044e\u043b\u044c_\u0430\u0432\u0433._\u0441\u0435\u043d\u0442._\u043e\u043a\u0442._\u043d\u043e\u044f\u0431._\u0434\u0435\u043a.".split("_"),
                H = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

            function w(e, t, n) {
                var r = {
                    mm: t ? "\u043c\u0438\u043d\u0443\u0442\u0430_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442" : "\u043c\u0438\u043d\u0443\u0442\u0443_\u043c\u0438\u043d\u0443\u0442\u044b_\u043c\u0438\u043d\u0443\u0442",
                    hh: "\u0447\u0430\u0441_\u0447\u0430\u0441\u0430_\u0447\u0430\u0441\u043e\u0432",
                    dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u044f_\u0434\u043d\u0435\u0439",
                    MM: "\u043c\u0435\u0441\u044f\u0446_\u043c\u0435\u0441\u044f\u0446\u0430_\u043c\u0435\u0441\u044f\u0446\u0435\u0432",
                    yy: "\u0433\u043e\u0434_\u0433\u043e\u0434\u0430_\u043b\u0435\u0442"
                };
                return "m" === n ? t ? "\u043c\u0438\u043d\u0443\u0442\u0430" : "\u043c\u0438\u043d\u0443\u0442\u0443" : "".concat(e, " ").concat(function(e, t) {
                    var n = e.split("_");
                    return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
                }(r[n], +e))
            }
            var S = function(e, t) {
                return H.test(t) ? D[e.month()] : k[e.month()]
            };
            S.s = k, S.f = D;
            var T = function(e, t) {
                return H.test(t) ? b[e.month()] : g[e.month()]
            };
            T.s = g, T.f = b;
            const j = {
                name: "ru",
                weekdays: "\u0432\u043e\u0441\u043a\u0440\u0435\u0441\u0435\u043d\u044c\u0435_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u044c\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440\u0433_\u043f\u044f\u0442\u043d\u0438\u0446\u0430_\u0441\u0443\u0431\u0431\u043e\u0442\u0430".split("_"),
                weekdaysShort: "\u0432\u0441\u043a_\u043f\u043d\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043f\u0442\u043d_\u0441\u0431\u0442".split("_"),
                weekdaysMin: "\u0432\u0441_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                months: S,
                monthsShort: T,
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY \u0433.",
                    LLL: "D MMMM YYYY \u0433., H:mm",
                    LLLL: "dddd, D MMMM YYYY \u0433., H:mm",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "\u0447\u0435\u0440\u0435\u0437 %s",
                    past: "%s \u043d\u0430\u0437\u0430\u0434",
                    s: "\u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434",
                    m: w,
                    mm: w,
                    h: "\u0447\u0430\u0441",
                    hh: w,
                    d: "\u0434\u0435\u043d\u044c",
                    dd: w,
                    M: "\u043c\u0435\u0441\u044f\u0446",
                    MM: w,
                    y: "\u0433\u043e\u0434",
                    yy: w
                },
                ordinal: function(e) {
                    return e
                },
                meridiem: function(e) {
                    return e < 4 ? "\u043d\u043e\u0447\u0438" : e < 12 ? "\u0443\u0442\u0440\u0430" : e < 17 ? "\u0434\u043d\u044f" : "\u0432\u0435\u0447\u0435\u0440\u0430"
                }
            };
            const C = {
                name: "es",
                monthsShort: "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
                weekdays: "domingo_lunes_martes_mi\xe9rcoles_jueves_viernes_s\xe1bado".split("_"),
                weekdaysShort: "dom._lun._mar._mi\xe9._jue._vie._s\xe1b.".split("_"),
                weekdaysMin: "do_lu_ma_mi_ju_vi_s\xe1".split("_"),
                months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"),
                weekStart: 1,
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D/M/YYYY",
                    LL: "D [de] MMMM [de] YYYY",
                    LLL: "D [de] MMMM [de] YYYY H:mm",
                    LLLL: "dddd, D [de] MMMM [de] YYYY H:mm",
                    RR: "D/M"
                },
                relativeTime: {
                    future: "en %s",
                    past: "hace %s",
                    s: "unos segundos",
                    m: "un minuto",
                    mm: "%d minutos",
                    h: "una hora",
                    hh: "%d horas",
                    d: "un d\xeda",
                    dd: "%d d\xedas",
                    M: "un mes",
                    MM: "%d meses",
                    y: "un a\xf1o",
                    yy: "%d a\xf1os"
                },
                ordinal: function(e) {
                    return "".concat(e, "\xba")
                }
            };
            var A = "\u0441\u0456\u0447\u043d\u044f_\u043b\u044e\u0442\u043e\u0433\u043e_\u0431\u0435\u0440\u0435\u0437\u043d\u044f_\u043a\u0432\u0456\u0442\u043d\u044f_\u0442\u0440\u0430\u0432\u043d\u044f_\u0447\u0435\u0440\u0432\u043d\u044f_\u043b\u0438\u043f\u043d\u044f_\u0441\u0435\u0440\u043f\u043d\u044f_\u0432\u0435\u0440\u0435\u0441\u043d\u044f_\u0436\u043e\u0432\u0442\u043d\u044f_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434\u0430_\u0433\u0440\u0443\u0434\u043d\u044f".split("_"),
                R = "\u0441\u0456\u0447\u0435\u043d\u044c_\u043b\u044e\u0442\u0438\u0439_\u0431\u0435\u0440\u0435\u0437\u0435\u043d\u044c_\u043a\u0432\u0456\u0442\u0435\u043d\u044c_\u0442\u0440\u0430\u0432\u0435\u043d\u044c_\u0447\u0435\u0440\u0432\u0435\u043d\u044c_\u043b\u0438\u043f\u0435\u043d\u044c_\u0441\u0435\u0440\u043f\u0435\u043d\u044c_\u0432\u0435\u0440\u0435\u0441\u0435\u043d\u044c_\u0436\u043e\u0432\u0442\u0435\u043d\u044c_\u043b\u0438\u0441\u0442\u043e\u043f\u0430\u0434_\u0433\u0440\u0443\u0434\u0435\u043d\u044c".split("_"),
                z = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/;

            function E(e, t, n) {
                var r = {
                    ss: t ? "\u0441\u0435\u043a\u0443\u043d\u0434\u0430_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434" : "\u0441\u0435\u043a\u0443\u043d\u0434\u0443_\u0441\u0435\u043a\u0443\u043d\u0434\u0438_\u0441\u0435\u043a\u0443\u043d\u0434",
                    mm: t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443_\u0445\u0432\u0438\u043b\u0438\u043d\u0438_\u0445\u0432\u0438\u043b\u0438\u043d",
                    hh: t ? "\u0433\u043e\u0434\u0438\u043d\u0430_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d" : "\u0433\u043e\u0434\u0438\u043d\u0443_\u0433\u043e\u0434\u0438\u043d\u0438_\u0433\u043e\u0434\u0438\u043d",
                    dd: "\u0434\u0435\u043d\u044c_\u0434\u043d\u0456_\u0434\u043d\u0456\u0432",
                    MM: "\u043c\u0456\u0441\u044f\u0446\u044c_\u043c\u0456\u0441\u044f\u0446\u0456_\u043c\u0456\u0441\u044f\u0446\u0456\u0432",
                    yy: "\u0440\u0456\u043a_\u0440\u043e\u043a\u0438_\u0440\u043e\u043a\u0456\u0432"
                };
                return "m" === n ? t ? "\u0445\u0432\u0438\u043b\u0438\u043d\u0430" : "\u0445\u0432\u0438\u043b\u0438\u043d\u0443" : "h" === n ? t ? "\u0433\u043e\u0434\u0438\u043d\u0430" : "\u0433\u043e\u0434\u0438\u043d\u0443" : "".concat(e, " ").concat(function(e, t) {
                    var n = e.split("_");
                    return t % 10 === 1 && t % 100 !== 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2]
                }(r[n], +e))
            }
            var x = function(e, t) {
                return z.test(t) ? A[e.month()] : R[e.month()]
            };
            x.s = R, x.f = A;
            const N = {
                name: "uk",
                weekdays: "\u043d\u0435\u0434\u0456\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0456\u043b\u043e\u043a_\u0432\u0456\u0432\u0442\u043e\u0440\u043e\u043a_\u0441\u0435\u0440\u0435\u0434\u0430_\u0447\u0435\u0442\u0432\u0435\u0440_\u043f\u2019\u044f\u0442\u043d\u0438\u0446\u044f_\u0441\u0443\u0431\u043e\u0442\u0430".split("_"),
                weekdaysShort: "\u043d\u0434\u043b_\u043f\u043d\u0434_\u0432\u0442\u0440_\u0441\u0440\u0434_\u0447\u0442\u0432_\u043f\u0442\u043d_\u0441\u0431\u0442".split("_"),
                weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                months: x,
                monthsShort: "\u0441\u0456\u0447_\u043b\u044e\u0442_\u0431\u0435\u0440_\u043a\u0432\u0456\u0442_\u0442\u0440\u0430\u0432_\u0447\u0435\u0440\u0432_\u043b\u0438\u043f_\u0441\u0435\u0440\u043f_\u0432\u0435\u0440_\u0436\u043e\u0432\u0442_\u043b\u0438\u0441\u0442_\u0433\u0440\u0443\u0434".split("_"),
                weekStart: 1,
                relativeTime: {
                    future: "\u0437\u0430 %s",
                    past: "%s \u0442\u043e\u043c\u0443",
                    s: "\u0434\u0435\u043a\u0456\u043b\u044c\u043a\u0430 \u0441\u0435\u043a\u0443\u043d\u0434",
                    m: E,
                    mm: E,
                    h: E,
                    hh: E,
                    d: "\u0434\u0435\u043d\u044c",
                    dd: E,
                    M: "\u043c\u0456\u0441\u044f\u0446\u044c",
                    MM: E,
                    y: "\u0440\u0456\u043a",
                    yy: E
                },
                ordinal: function(e) {
                    return e
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY \u0440.",
                    LLL: "D MMMM YYYY \u0440., HH:mm",
                    LLLL: "dddd, D MMMM YYYY \u0440., HH:mm",
                    RR: "DD.MM"
                }
            };

            function $(e) {
                return e > 1 && e < 5 && 1 !== ~~(e / 10)
            }

            function F(e, t, n, r) {
                var a = "".concat(e, " ");
                switch (n) {
                    case "s":
                        return t || r ? "p\xe1r sekund" : "p\xe1r sekundami";
                    case "m":
                        return t ? "minuta" : r ? "minutu" : "minutou";
                    case "mm":
                        return t || r ? a + ($(e) ? "minuty" : "minut") : "".concat(a, "minutami");
                    case "h":
                        return t ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return t || r ? a + ($(e) ? "hodiny" : "hodin") : "".concat(a, "hodinami");
                    case "d":
                        return t || r ? "den" : "dnem";
                    case "dd":
                        return t || r ? a + ($(e) ? "dny" : "dn\xed") : "".concat(a, "dny");
                    case "M":
                        return t || r ? "m\u011bs\xedc" : "m\u011bs\xedcem";
                    case "MM":
                        return t || r ? a + ($(e) ? "m\u011bs\xedce" : "m\u011bs\xedc\u016f") : "".concat(a, "m\u011bs\xedci");
                    case "y":
                        return t || r ? "rok" : "rokem";
                    case "yy":
                        return t || r ? a + ($(e) ? "roky" : "let") : "".concat(a, "lety");
                    default:
                        return a
                }
            }
            const O = {
                name: "cs",
                weekdays: "ned\u011ble_pond\u011bl\xed_\xfater\xfd_st\u0159eda_\u010dtvrtek_p\xe1tek_sobota".split("_"),
                weekdaysShort: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
                weekdaysMin: "ne_po_\xfat_st_\u010dt_p\xe1_so".split("_"),
                months: "leden_\xfanor_b\u0159ezen_duben_kv\u011bten_\u010derven_\u010dervenec_srpen_z\xe1\u0159\xed_\u0159\xedjen_listopad_prosinec".split("_"),
                monthsShort: "led_\xfano_b\u0159e_dub_kv\u011b_\u010dvn_\u010dvc_srp_z\xe1\u0159_\u0159\xedj_lis_pro".split("_"),
                weekStart: 1,
                yearStart: 4,
                ordinal: function(e) {
                    return "".concat(e, ".")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "za %s",
                    past: "p\u0159ed %s",
                    s: F,
                    m: F,
                    mm: F,
                    h: F,
                    hh: F,
                    d: F,
                    dd: F,
                    M: F,
                    MM: F,
                    y: F,
                    yy: F
                }
            };
            var J = {
                s: "\u05de\u05e1\u05e4\u05e8 \u05e9\u05e0\u05d9\u05d5\u05ea",
                ss: "%d \u05e9\u05e0\u05d9\u05d5\u05ea",
                m: "\u05d3\u05e7\u05d4",
                mm: "%d \u05d3\u05e7\u05d5\u05ea",
                h: "\u05e9\u05e2\u05d4",
                hh: "%d \u05e9\u05e2\u05d5\u05ea",
                hh2: "\u05e9\u05e2\u05ea\u05d9\u05d9\u05dd",
                d: "\u05d9\u05d5\u05dd",
                dd: "%d \u05d9\u05de\u05d9\u05dd",
                dd2: "\u05d9\u05d5\u05de\u05d9\u05d9\u05dd",
                M: "\u05d7\u05d5\u05d3\u05e9",
                MM: "%d \u05d7\u05d5\u05d3\u05e9\u05d9\u05dd",
                MM2: "\u05d7\u05d5\u05d3\u05e9\u05d9\u05d9\u05dd",
                y: "\u05e9\u05e0\u05d4",
                yy: "%d \u05e9\u05e0\u05d9\u05dd",
                yy2: "\u05e9\u05e0\u05ea\u05d9\u05d9\u05dd"
            };

            function P(e, t, n) {
                return (J[n + (2 === e ? "2" : "")] || J[n]).replace("%d", e)
            }
            const I = {
                name: "he",
                weekdays: "\u05e8\u05d0\u05e9\u05d5\u05df_\u05e9\u05e0\u05d9_\u05e9\u05dc\u05d9\u05e9\u05d9_\u05e8\u05d1\u05d9\u05e2\u05d9_\u05d7\u05de\u05d9\u05e9\u05d9_\u05e9\u05d9\u05e9\u05d9_\u05e9\u05d1\u05ea".split("_"),
                weekdaysShort: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5\u05f3_\u05e9\u05f3".split("_"),
                weekdaysMin: "\u05d0\u05f3_\u05d1\u05f3_\u05d2\u05f3_\u05d3\u05f3_\u05d4\u05f3_\u05d5_\u05e9\u05f3".split("_"),
                months: "\u05d9\u05e0\u05d5\u05d0\u05e8_\u05e4\u05d1\u05e8\u05d5\u05d0\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8\u05d9\u05dc_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0\u05d9_\u05d9\u05d5\u05dc\u05d9_\u05d0\u05d5\u05d2\u05d5\u05e1\u05d8_\u05e1\u05e4\u05d8\u05de\u05d1\u05e8_\u05d0\u05d5\u05e7\u05d8\u05d5\u05d1\u05e8_\u05e0\u05d5\u05d1\u05de\u05d1\u05e8_\u05d3\u05e6\u05de\u05d1\u05e8".split("_"),
                monthsShort: "\u05d9\u05e0\u05d5_\u05e4\u05d1\u05e8_\u05de\u05e8\u05e5_\u05d0\u05e4\u05e8_\u05de\u05d0\u05d9_\u05d9\u05d5\u05e0_\u05d9\u05d5\u05dc_\u05d0\u05d5\u05d2_\u05e1\u05e4\u05d8_\u05d0\u05d5\u05e7_\u05e0\u05d5\u05d1_\u05d3\u05e6\u05de".split("_"),
                relativeTime: {
                    future: "\u05d1\u05e2\u05d5\u05d3 %s",
                    past: "\u05dc\u05e4\u05e0\u05d9 %s",
                    s: P,
                    m: P,
                    mm: P,
                    h: P,
                    hh: P,
                    d: P,
                    dd: P,
                    M: P,
                    MM: P,
                    y: P,
                    yy: P
                },
                ordinal: function(e) {
                    return e
                },
                format: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [\u05d1]MMMM YYYY",
                    LLL: "D [\u05d1]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm",
                    RR: "DD/MM"
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD/MM/YYYY",
                    LL: "D [\u05d1]MMMM YYYY",
                    LLL: "D [\u05d1]MMMM YYYY HH:mm",
                    LLLL: "dddd, D [\u05d1]MMMM YYYY HH:mm",
                    l: "D/M/YYYY",
                    ll: "D MMM YYYY",
                    lll: "D MMM YYYY HH:mm",
                    llll: "ddd, D MMM YYYY HH:mm"
                }
            };
            var q = {
                s: "ein paar Sekunden",
                m: ["eine Minute", "einer Minute"],
                mm: "%d Minuten",
                h: ["eine Stunde", "einer Stunde"],
                hh: "%d Stunden",
                d: ["ein Tag", "einem Tag"],
                dd: ["%d Tage", "%d Tagen"],
                M: ["ein Monat", "einem Monat"],
                MM: ["%d Monate", "%d Monaten"],
                y: ["ein Jahr", "einem Jahr"],
                yy: ["%d Jahre", "%d Jahren"]
            };

            function W(e, t, n) {
                var r = q[n];
                return Array.isArray(r) && (r = r[t ? 0 : 1]), r.replace("%d", e)
            }
            const K = {
                name: "de",
                weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"),
                weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"),
                weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"),
                months: "Januar_Februar_M\xe4rz_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"),
                monthsShort: "Jan._Feb._M\xe4rz_Apr._Mai_Juni_Juli_Aug._Sept._Okt._Nov._Dez.".split("_"),
                ordinal: function(e) {
                    return "".concat(e, ".")
                },
                weekStart: 1,
                yearStart: 4,
                formats: {
                    LTS: "HH:mm:ss",
                    LT: "HH:mm",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY HH:mm",
                    LLLL: "dddd, D. MMMM YYYY HH:mm",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "in %s",
                    past: "vor %s",
                    s: W,
                    m: W,
                    mm: W,
                    h: W,
                    hh: W,
                    d: W,
                    dd: W,
                    M: W,
                    MM: W,
                    y: W,
                    yy: W
                }
            };
            const V = {
                name: "bg",
                weekdays: "\u043d\u0435\u0434\u0435\u043b\u044f_\u043f\u043e\u043d\u0435\u0434\u0435\u043b\u043d\u0438\u043a_\u0432\u0442\u043e\u0440\u043d\u0438\u043a_\u0441\u0440\u044f\u0434\u0430_\u0447\u0435\u0442\u0432\u044a\u0440\u0442\u044a\u043a_\u043f\u0435\u0442\u044a\u043a_\u0441\u044a\u0431\u043e\u0442\u0430".split("_"),
                weekdaysShort: "\u043d\u0435\u0434_\u043f\u043e\u043d_\u0432\u0442\u043e_\u0441\u0440\u044f_\u0447\u0435\u0442_\u043f\u0435\u0442_\u0441\u044a\u0431".split("_"),
                weekdaysMin: "\u043d\u0434_\u043f\u043d_\u0432\u0442_\u0441\u0440_\u0447\u0442_\u043f\u0442_\u0441\u0431".split("_"),
                months: "\u044f\u043d\u0443\u0430\u0440\u0438_\u0444\u0435\u0432\u0440\u0443\u0430\u0440\u0438_\u043c\u0430\u0440\u0442_\u0430\u043f\u0440\u0438\u043b_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433\u0443\u0441\u0442_\u0441\u0435\u043f\u0442\u0435\u043c\u0432\u0440\u0438_\u043e\u043a\u0442\u043e\u043c\u0432\u0440\u0438_\u043d\u043e\u0435\u043c\u0432\u0440\u0438_\u0434\u0435\u043a\u0435\u043c\u0432\u0440\u0438".split("_"),
                monthsShort: "\u044f\u043d\u0443_\u0444\u0435\u0432_\u043c\u0430\u0440_\u0430\u043f\u0440_\u043c\u0430\u0439_\u044e\u043d\u0438_\u044e\u043b\u0438_\u0430\u0432\u0433_\u0441\u0435\u043f_\u043e\u043a\u0442_\u043d\u043e\u0435_\u0434\u0435\u043a".split("_"),
                weekStart: 1,
                ordinal: function(e) {
                    var t = e % 100;
                    if (t > 10 && t < 20) return "".concat(e, "-\u0442\u0438");
                    var n = e % 10;
                    return "".concat(e, 1 === n ? "-\u0432\u0438" : 2 === n ? "-\u0440\u0438" : 7 === n || 8 === n ? "-\u043c\u0438" : "-\u0442\u0438")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY H:mm",
                    LLLL: "dddd, D MMMM YYYY H:mm",
                    RR: "D.MM"
                },
                relativeTime: {
                    future: "\u0441\u043b\u0435\u0434 %s",
                    past: "\u043f\u0440\u0435\u0434\u0438 %s",
                    s: "\u043d\u044f\u043a\u043e\u043b\u043a\u043e \u0441\u0435\u043a\u0443\u043d\u0434\u0438",
                    m: "\u043c\u0438\u043d\u0443\u0442\u0430",
                    mm: "%d \u043c\u0438\u043d\u0443\u0442\u0438",
                    h: "\u0447\u0430\u0441",
                    hh: "%d \u0447\u0430\u0441\u0430",
                    d: "\u0434\u0435\u043d",
                    dd: "%d \u0434\u0435\u043d\u0430",
                    M: "\u043c\u0435\u0441\u0435\u0446",
                    MM: "%d \u043c\u0435\u0441\u0435\u0446\u0430",
                    y: "\u0433\u043e\u0434\u0438\u043d\u0430",
                    yy: "%d \u0433\u043e\u0434\u0438\u043d\u0438"
                }
            };
            var U = {
                    1: "\u09e7",
                    2: "\u09e8",
                    3: "\u09e9",
                    4: "\u09ea",
                    5: "\u09eb",
                    6: "\u09ec",
                    7: "\u09ed",
                    8: "\u09ee",
                    9: "\u09ef",
                    0: "\u09e6"
                },
                Z = {
                    "\u09e7": "1",
                    "\u09e8": "2",
                    "\u09e9": "3",
                    "\u09ea": "4",
                    "\u09eb": "5",
                    "\u09ec": "6",
                    "\u09ed": "7",
                    "\u09ee": "8",
                    "\u09ef": "9",
                    "\u09e6": "0"
                };
            const B = {
                name: "bn",
                weekdays: "\u09b0\u09ac\u09bf\u09ac\u09be\u09b0_\u09b8\u09cb\u09ae\u09ac\u09be\u09b0_\u09ae\u0999\u09cd\u0997\u09b2\u09ac\u09be\u09b0_\u09ac\u09c1\u09a7\u09ac\u09be\u09b0_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf\u09ac\u09be\u09b0_\u09b6\u09c1\u0995\u09cd\u09b0\u09ac\u09be\u09b0_\u09b6\u09a8\u09bf\u09ac\u09be\u09b0".split("_"),
                months: "\u099c\u09be\u09a8\u09c1\u09df\u09be\u09b0\u09bf_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1\u09df\u09be\u09b0\u09bf_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f\u09c7\u09ae\u09cd\u09ac\u09b0_\u0985\u0995\u09cd\u099f\u09cb\u09ac\u09b0_\u09a8\u09ad\u09c7\u09ae\u09cd\u09ac\u09b0_\u09a1\u09bf\u09b8\u09c7\u09ae\u09cd\u09ac\u09b0".split("_"),
                weekdaysShort: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997\u09b2_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u09b8\u09cd\u09aa\u09a4\u09bf_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
                monthsShort: "\u099c\u09be\u09a8\u09c1_\u09ab\u09c7\u09ac\u09cd\u09b0\u09c1_\u09ae\u09be\u09b0\u09cd\u099a_\u098f\u09aa\u09cd\u09b0\u09bf\u09b2_\u09ae\u09c7_\u099c\u09c1\u09a8_\u099c\u09c1\u09b2\u09be\u0987_\u0986\u0997\u09b8\u09cd\u099f_\u09b8\u09c7\u09aa\u09cd\u099f_\u0985\u0995\u09cd\u099f\u09cb_\u09a8\u09ad\u09c7_\u09a1\u09bf\u09b8\u09c7".split("_"),
                weekdaysMin: "\u09b0\u09ac\u09bf_\u09b8\u09cb\u09ae_\u09ae\u0999\u09cd\u0997_\u09ac\u09c1\u09a7_\u09ac\u09c3\u09b9\u0983_\u09b6\u09c1\u0995\u09cd\u09b0_\u09b6\u09a8\u09bf".split("_"),
                preparse: function(e) {
                    return e.replace(/[\u09e7\u09e8\u09e9\u09ea\u09eb\u09ec\u09ed\u09ee\u09ef\u09e6]/g, (function(e) {
                        return Z[e]
                    }))
                },
                postformat: function(e) {
                    return e.replace(/\d/g, (function(e) {
                        return U[e]
                    }))
                },
                ordinal: function(e) {
                    return e
                },
                formats: {
                    LT: "A h:mm \u09b8\u09ae\u09df",
                    LTS: "A h:mm:ss \u09b8\u09ae\u09df",
                    L: "DD/MM/YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
                    LLLL: "dddd, D MMMM YYYY, A h:mm \u09b8\u09ae\u09df",
                    RR: "DD/MM"
                },
                relativeTime: {
                    future: "%s \u09aa\u09b0\u09c7",
                    past: "%s \u0986\u0997\u09c7",
                    s: "\u0995\u09df\u09c7\u0995 \u09b8\u09c7\u0995\u09c7\u09a8\u09cd\u09a1",
                    m: "\u098f\u0995 \u09ae\u09bf\u09a8\u09bf\u099f",
                    mm: "%d \u09ae\u09bf\u09a8\u09bf\u099f",
                    h: "\u098f\u0995 \u0998\u09a8\u09cd\u099f\u09be",
                    hh: "%d \u0998\u09a8\u09cd\u099f\u09be",
                    d: "\u098f\u0995 \u09a6\u09bf\u09a8",
                    dd: "%d \u09a6\u09bf\u09a8",
                    M: "\u098f\u0995 \u09ae\u09be\u09b8",
                    MM: "%d \u09ae\u09be\u09b8",
                    y: "\u098f\u0995 \u09ac\u099b\u09b0",
                    yy: "%d \u09ac\u099b\u09b0"
                }
            };

            function G(e, t, n, r) {
                var a = {
                        s: "muutama sekunti",
                        m: "minuutti",
                        mm: "%d minuuttia",
                        h: "tunti",
                        hh: "%d tuntia",
                        d: "p\xe4iv\xe4",
                        dd: "%d p\xe4iv\xe4\xe4",
                        M: "kuukausi",
                        MM: "%d kuukautta",
                        y: "vuosi",
                        yy: "%d vuotta",
                        numbers: "nolla_yksi_kaksi_kolme_nelj\xe4_viisi_kuusi_seitsem\xe4n_kahdeksan_yhdeks\xe4n".split("_")
                    },
                    _ = {
                        s: "muutaman sekunnin",
                        m: "minuutin",
                        mm: "%d minuutin",
                        h: "tunnin",
                        hh: "%d tunnin",
                        d: "p\xe4iv\xe4n",
                        dd: "%d p\xe4iv\xe4n",
                        M: "kuukauden",
                        MM: "%d kuukauden",
                        y: "vuoden",
                        yy: "%d vuoden",
                        numbers: "nollan_yhden_kahden_kolmen_nelj\xe4n_viiden_kuuden_seitsem\xe4n_kahdeksan_yhdeks\xe4n".split("_")
                    },
                    s = r && !t ? _ : a,
                    i = s[n];
                return e < 10 ? i.replace("%d", s.numbers[e]) : i.replace("%d", e)
            }
            const Q = {
                name: "fi",
                weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"),
                weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"),
                weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"),
                months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kes\xe4kuu_hein\xe4kuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"),
                monthsShort: "tammi_helmi_maalis_huhti_touko_kes\xe4_hein\xe4_elo_syys_loka_marras_joulu".split("_"),
                ordinal: function(e) {
                    return "".concat(e, ".")
                },
                weekStart: 1,
                yearStart: 4,
                relativeTime: {
                    future: "%s p\xe4\xe4st\xe4",
                    past: "%s sitten",
                    s: G,
                    m: G,
                    mm: G,
                    h: G,
                    hh: G,
                    d: G,
                    dd: G,
                    M: G,
                    MM: G,
                    y: G,
                    yy: G
                },
                formats: {
                    LT: "HH.mm",
                    LTS: "HH.mm.ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM[ta] YYYY",
                    LLL: "D. MMMM[ta] YYYY, [klo] HH.mm",
                    LLLL: "dddd, D. MMMM[ta] YYYY, [klo] HH.mm",
                    l: "D.M.YYYY",
                    ll: "D. MMM YYYY",
                    lll: "D. MMM YYYY, [klo] HH.mm",
                    llll: "ddd, D. MMM YYYY, [klo] HH.mm",
                    RR: "DD.MM"
                }
            };

            function X(e) {
                return e > 1 && e < 5 && 1 !== ~~(e / 10)
            }

            function ee(e, t, n, r) {
                var a = "".concat(e, " ");
                switch (n) {
                    case "s":
                        return t || r ? "p\xe1r sek\xfand" : "p\xe1r sekundami";
                    case "m":
                        return t ? "min\xfata" : r ? "min\xfatu" : "min\xfatou";
                    case "mm":
                        return t || r ? a + (X(e) ? "min\xfaty" : "min\xfat") : "".concat(a, "min\xfatami");
                    case "h":
                        return t ? "hodina" : r ? "hodinu" : "hodinou";
                    case "hh":
                        return t || r ? a + (X(e) ? "hodiny" : "hod\xedn") : "".concat(a, "hodinami");
                    case "d":
                        return t || r ? "de\u0148" : "d\u0148om";
                    case "dd":
                        return t || r ? a + (X(e) ? "dni" : "dn\xed") : "".concat(a, "d\u0148ami");
                    case "M":
                        return t || r ? "mesiac" : "mesiacom";
                    case "MM":
                        return t || r ? a + (X(e) ? "mesiace" : "mesiacov") : "".concat(a, "mesiacmi");
                    case "y":
                        return t || r ? "rok" : "rokom";
                    case "yy":
                        return t || r ? a + (X(e) ? "roky" : "rokov") : "".concat(a, "rokmi");
                    default:
                        return a
                }
            }
            const te = {
                name: "sk",
                weekdays: "nede\u013ea_pondelok_utorok_streda_\u0161tvrtok_piatok_sobota".split("_"),
                weekdaysShort: "ne_po_ut_st_\u0161t_pi_so".split("_"),
                weekdaysMin: "ne_po_ut_st_\u0161t_pi_so".split("_"),
                months: "janu\xe1r_febru\xe1r_marec_apr\xedl_m\xe1j_j\xfan_j\xfal_august_september_okt\xf3ber_november_december".split("_"),
                monthsShort: "jan_feb_mar_apr_m\xe1j_j\xfan_j\xfal_aug_sep_okt_nov_dec".split("_"),
                weekStart: 1,
                yearStart: 4,
                ordinal: function(e) {
                    return "".concat(e, ".")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd D. MMMM YYYY H:mm",
                    l: "D. M. YYYY",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "za %s",
                    past: "pred %s",
                    s: ee,
                    m: ee,
                    mm: ee,
                    h: ee,
                    hh: ee,
                    d: ee,
                    dd: ee,
                    M: ee,
                    MM: ee,
                    y: ee,
                    yy: ee
                }
            };

            function ne(e) {
                return e % 100 == 2
            }

            function re(e) {
                return e % 100 == 3 || e % 100 == 4
            }

            function ae(e, t, n, r) {
                var a = "".concat(e, " ");
                switch (n) {
                    case "s":
                        return t || r ? "nekaj sekund" : "nekaj sekundami";
                    case "m":
                        return t ? "ena minuta" : "eno minuto";
                    case "mm":
                        return ne(e) ? a + (t || r ? "minuti" : "minutama") : re(e) ? a + (t || r ? "minute" : "minutami") : a + (t || r ? "minut" : "minutami");
                    case "h":
                        return t ? "ena ura" : "eno uro";
                    case "hh":
                        return ne(e) ? a + (t || r ? "uri" : "urama") : re(e) ? a + (t || r ? "ure" : "urami") : a + (t || r ? "ur" : "urami");
                    case "d":
                        return t || r ? "en dan" : "enim dnem";
                    case "dd":
                        return ne(e) ? a + (t || r ? "dneva" : "dnevoma") : a + (t || r ? "dni" : "dnevi");
                    case "M":
                        return t || r ? "en mesec" : "enim mesecem";
                    case "MM":
                        return ne(e) ? a + (t || r ? "meseca" : "mesecema") : re(e) ? a + (t || r ? "mesece" : "meseci") : a + (t || r ? "mesecev" : "meseci");
                    case "y":
                        return t || r ? "eno leto" : "enim letom";
                    case "yy":
                        return ne(e) ? a + (t || r ? "leti" : "letoma") : re(e) ? a + (t || r ? "leta" : "leti") : a + (t || r ? "let" : "leti");
                    default:
                        return a
                }
            }
            const _e = {
                name: "sl",
                weekdays: "nedelja_ponedeljek_torek_sreda_\u010detrtek_petek_sobota".split("_"),
                months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"),
                weekStart: 1,
                weekdaysShort: "ned._pon._tor._sre._\u010det._pet._sob.".split("_"),
                monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"),
                weekdaysMin: "ne_po_to_sr_\u010de_pe_so".split("_"),
                ordinal: function(e) {
                    return "".concat(e, ".")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm",
                    l: "D. M. YYYY",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "\u010dez %s",
                    past: "pred %s",
                    s: ae,
                    m: ae,
                    mm: ae,
                    h: ae,
                    hh: ae,
                    d: ae,
                    dd: ae,
                    M: ae,
                    MM: ae,
                    y: ae,
                    yy: ae
                }
            };

            function se(e, t, n, r) {
                var a = {
                    s: ["m\xf5ne sekundi", "m\xf5ni sekund", "paar sekundit"],
                    m: ["\xfche minuti", "\xfcks minut"],
                    mm: ["%d minuti", "%d minutit"],
                    h: ["\xfche tunni", "tund aega", "\xfcks tund"],
                    hh: ["%d tunni", "%d tundi"],
                    d: ["\xfche p\xe4eva", "\xfcks p\xe4ev"],
                    M: ["kuu aja", "kuu aega", "\xfcks kuu"],
                    MM: ["%d kuu", "%d kuud"],
                    y: ["\xfche aasta", "aasta", "\xfcks aasta"],
                    yy: ["%d aasta", "%d aastat"]
                };
                return t ? (a[n][2] ? a[n][2] : a[n][1]).replace("%d", e) : (r ? a[n][0] : a[n][1]).replace("%d", e)
            }
            const ie = {
                name: "et",
                weekdays: "p\xfchap\xe4ev_esmasp\xe4ev_teisip\xe4ev_kolmap\xe4ev_neljap\xe4ev_reede_laup\xe4ev".split("_"),
                weekdaysShort: "P_E_T_K_N_R_L".split("_"),
                weekdaysMin: "P_E_T_K_N_R_L".split("_"),
                months: "jaanuar_veebruar_m\xe4rts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"),
                monthsShort: "jaan_veebr_m\xe4rts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"),
                ordinal: function(e) {
                    return "".concat(e, ".")
                },
                weekStart: 1,
                relativeTime: {
                    future: "%s p\xe4rast",
                    past: "%s tagasi",
                    s: se,
                    m: se,
                    mm: se,
                    h: se,
                    hh: se,
                    d: se,
                    dd: "%d p\xe4eva",
                    M: se,
                    MM: se,
                    y: se,
                    yy: se
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. MMM YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm",
                    RR: "D. MMM"
                }
            };
            var oe = "sausio_vasario_kovo_baland\u017eio_gegu\u017e\u0117s_bir\u017eelio_liepos_rugpj\u016b\u010dio_rugs\u0117jo_spalio_lapkri\u010dio_gruod\u017eio".split("_"),
                me = "sausis_vasaris_kovas_balandis_gegu\u017e\u0117_bir\u017eelis_liepa_rugpj\u016btis_rugs\u0117jis_spalis_lapkritis_gruodis".split("_"),
                de = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/,
                ue = function(e, t) {
                    return de.test(t) ? oe[e.month()] : me[e.month()]
                };
            ue.s = me, ue.f = oe;
            const le = {
                name: "lt",
                weekdays: "sekmadienis_pirmadienis_antradienis_tre\u010diadienis_ketvirtadienis_penktadienis_\u0161e\u0161tadienis".split("_"),
                weekdaysShort: "sek_pir_ant_tre_ket_pen_\u0161e\u0161".split("_"),
                weekdaysMin: "s_p_a_t_k_pn_\u0161".split("_"),
                months: ue,
                monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"),
                ordinal: function(e) {
                    return "".concat(e, ".")
                },
                weekStart: 1,
                relativeTime: {
                    future: "u\u017e %s",
                    past: "prie\u0161 %s",
                    s: "kelias sekundes",
                    m: "minut\u0119",
                    mm: "%d minutes",
                    h: "valand\u0105",
                    hh: "%d valandas",
                    d: "dien\u0105",
                    dd: "%d dienas",
                    M: "m\u0117nes\u012f",
                    MM: "%d m\u0117nesius",
                    y: "metus",
                    yy: "%d metus"
                },
                format: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]",
                    RR: "MM-DD"
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "YYYY-MM-DD",
                    LL: "YYYY [m.] MMMM D [d.]",
                    LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]",
                    l: "YYYY-MM-DD",
                    ll: "YYYY [m.] MMMM D [d.]",
                    lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]",
                    llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]"
                }
            };
            var ce = "sije\u010dnja_velja\u010de_o\u017eujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"),
                Me = "sije\u010danj_velja\u010da_o\u017eujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"),
                Ye = /D[oD]?(\[[^[\]]*\]|\s)+MMMM?/,
                he = function(e, t) {
                    return Ye.test(t) ? ce[e.month()] : Me[e.month()]
                };
            he.s = Me, he.f = ce;
            const pe = {
                name: "hr",
                weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
                weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                months: he,
                monthsShort: "sij._velj._o\u017eu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"),
                weekStart: 1,
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D. MMMM YYYY",
                    LLL: "D. MMMM YYYY H:mm",
                    LLLL: "dddd, D. MMMM YYYY H:mm",
                    RR: "DD.MM"
                },
                relativeTime: {
                    future: "za %s",
                    past: "prije %s",
                    s: "sekunda",
                    m: "minuta",
                    mm: "%d minuta",
                    h: "sat",
                    hh: "%d sati",
                    d: "dan",
                    dd: "%d dana",
                    M: "mjesec",
                    MM: "%d mjeseci",
                    y: "godina",
                    yy: "%d godine"
                },
                ordinal: function(e) {
                    return "".concat(e, ".")
                }
            };
            var fe = {
                words: {
                    m: ["jedan minut", "jednog minuta"],
                    mm: ["%d minut", "%d minuta", "%d minuta"],
                    h: ["jedan sat", "jednog sata"],
                    hh: ["%d sat", "%d sata", "%d sati"],
                    d: ["jedan dan", "jednog dana"],
                    dd: ["%d dan", "%d dana", "%d dana"],
                    M: ["jedan mesec", "jednog meseca"],
                    MM: ["%d mesec", "%d meseca", "%d meseci"],
                    y: ["jednu godinu", "jedne godine"],
                    yy: ["%d godinu", "%d godine", "%d godina"]
                },
                correctGrammarCase: function(e, t) {
                    return e % 10 >= 1 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? e % 10 === 1 ? t[0] : t[1] : t[2]
                },
                relativeTimeFormatter: function(e, t, n, r) {
                    var a = fe.words[n];
                    if (1 === n.length) return "y" === n && t ? "jedna godina" : r || t ? a[0] : a[1];
                    var _ = fe.correctGrammarCase(e, a);
                    return "yy" === n && t && "%d godinu" === _ ? "".concat(e, " godina") : _.replace("%d", e)
                }
            };
            const Le = {
                name: "sr",
                weekdays: "Nedelja_Ponedeljak_Utorak_Sreda_\u010cetvrtak_Petak_Subota".split("_"),
                weekdaysShort: "Ned._Pon._Uto._Sre._\u010cet._Pet._Sub.".split("_"),
                weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                months: "Januar_Februar_Mart_April_Maj_Jun_Jul_Avgust_Septembar_Oktobar_Novembar_Decembar".split("_"),
                monthsShort: "Jan._Feb._Mar._Apr._Maj_Jun_Jul_Avg._Sep._Okt._Nov._Dec.".split("_"),
                weekStart: 1,
                relativeTime: {
                    future: "za %s",
                    past: "pre %s",
                    s: "nekoliko sekundi",
                    m: fe.relativeTimeFormatter,
                    mm: fe.relativeTimeFormatter,
                    h: fe.relativeTimeFormatter,
                    hh: fe.relativeTimeFormatter,
                    d: fe.relativeTimeFormatter,
                    dd: fe.relativeTimeFormatter,
                    M: fe.relativeTimeFormatter,
                    MM: fe.relativeTimeFormatter,
                    y: fe.relativeTimeFormatter,
                    yy: fe.relativeTimeFormatter
                },
                ordinal: function(e) {
                    return "".concat(e, ".")
                },
                formats: {
                    LT: "H:mm",
                    LTS: "H:mm:ss",
                    L: "D. M. YYYY.",
                    LL: "D. MMMM YYYY.",
                    LLL: "D. MMMM YYYY. H:mm",
                    LLLL: "dddd, D. MMMM YYYY. H:mm",
                    RR: "D. M."
                }
            };
            const ye = {
                name: "kk",
                weekdays: "\u0436\u0435\u043a\u0441\u0435\u043d\u0431\u0456_\u0434\u04af\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0441\u04d9\u0440\u0441\u0435\u043d\u0431\u0456_\u0431\u0435\u0439\u0441\u0435\u043d\u0431\u0456_\u0436\u04b1\u043c\u0430_\u0441\u0435\u043d\u0431\u0456".split("_"),
                weekdaysShort: "\u0436\u0435\u043a_\u0434\u04af\u0439_\u0441\u0435\u0439_\u0441\u04d9\u0440_\u0431\u0435\u0439_\u0436\u04b1\u043c_\u0441\u0435\u043d".split("_"),
                weekdaysMin: "\u0436\u043a_\u0434\u0439_\u0441\u0439_\u0441\u0440_\u0431\u0439_\u0436\u043c_\u0441\u043d".split("_"),
                months: "\u049b\u0430\u04a3\u0442\u0430\u0440_\u0430\u049b\u043f\u0430\u043d_\u043d\u0430\u0443\u0440\u044b\u0437_\u0441\u04d9\u0443\u0456\u0440_\u043c\u0430\u043c\u044b\u0440_\u043c\u0430\u0443\u0441\u044b\u043c_\u0448\u0456\u043b\u0434\u0435_\u0442\u0430\u043c\u044b\u0437_\u049b\u044b\u0440\u043a\u04af\u0439\u0435\u043a_\u049b\u0430\u0437\u0430\u043d_\u049b\u0430\u0440\u0430\u0448\u0430_\u0436\u0435\u043b\u0442\u043e\u049b\u0441\u0430\u043d".split("_"),
                monthsShort: "\u049b\u0430\u04a3_\u0430\u049b\u043f_\u043d\u0430\u0443_\u0441\u04d9\u0443_\u043c\u0430\u043c_\u043c\u0430\u0443_\u0448\u0456\u043b_\u0442\u0430\u043c_\u049b\u044b\u0440_\u049b\u0430\u0437_\u049b\u0430\u0440_\u0436\u0435\u043b".split("_"),
                weekStart: 1,
                relativeTime: {
                    future: "%s \u0456\u0448\u0456\u043d\u0434\u0435",
                    past: "%s \u0431\u04b1\u0440\u044b\u043d",
                    s: "\u0431\u0456\u0440\u043d\u0435\u0448\u0435 \u0441\u0435\u043a\u0443\u043d\u0434",
                    m: "\u0431\u0456\u0440 \u043c\u0438\u043d\u0443\u0442",
                    mm: "%d \u043c\u0438\u043d\u0443\u0442",
                    h: "\u0431\u0456\u0440 \u0441\u0430\u0493\u0430\u0442",
                    hh: "%d \u0441\u0430\u0493\u0430\u0442",
                    d: "\u0431\u0456\u0440 \u043a\u04af\u043d",
                    dd: "%d \u043a\u04af\u043d",
                    M: "\u0431\u0456\u0440 \u0430\u0439",
                    MM: "%d \u0430\u0439",
                    y: "\u0431\u0456\u0440 \u0436\u044b\u043b",
                    yy: "%d \u0436\u044b\u043b"
                },
                ordinal: function(e) {
                    return e
                },
                formats: {
                    LT: "HH:mm",
                    LTS: "HH:mm:ss",
                    L: "DD.MM.YYYY",
                    LL: "D MMMM YYYY",
                    LLL: "D MMMM YYYY HH:mm",
                    LLLL: "dddd, D MMMM YYYY HH:mm",
                    RR: "DD.MM"
                }
            };
            const ve = {
                en: {
                    name: "en",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "MM/DD/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm",
                        RR: "MM/DD"
                    },
                    ordinal: function(e) {
                        var t = ["th", "st", "nd", "rd"],
                            n = e % 100;
                        return "[".concat(e).concat(t[(n - 20) % 10] || t[n] || t[0], "]")
                    },
                    formatTypes: {
                        YMDHM: "L LT",
                        YMDHMS: "L LTS"
                    }
                },
                "en-in": {
                    name: "en-in",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    ordinal: function(e) {
                        var t = ["th", "st", "nd", "rd"],
                            n = e % 100;
                        return "[".concat(e).concat(t[(n - 20) % 10] || t[n] || t[0], "]")
                    }
                },
                "en-nz": {
                    name: "en-nz",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    weekStart: 1,
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    ordinal: function(e) {
                        var t = ["th", "st", "nd", "rd"],
                            n = e % 100;
                        return "[".concat(e).concat(t[(n - 20) % 10] || t[n] || t[0], "]")
                    },
                    formats: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    }
                },
                "en-au": {
                    name: "en-au",
                    weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                    months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                    weekStart: 1,
                    weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
                    weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    }
                },
                "zh-cn": {
                    name: "zh-cn",
                    weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
                    weekdaysShort: "\u5468\u65e5_\u5468\u4e00_\u5468\u4e8c_\u5468\u4e09_\u5468\u56db_\u5468\u4e94_\u5468\u516d".split("_"),
                    weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
                    months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    ordinal: function(e, t) {
                        return "".concat(e, "W" === t ? "\u5468" : "\u65e5")
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5Ah\u70b9mm\u5206",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5ddddAh\u70b9mm\u5206",
                        l: "YYYY/M/D",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                        RR: "MM/DD"
                    },
                    relativeTime: {
                        future: "%s\u5185",
                        past: "%s\u524d",
                        s: "\u51e0\u79d2",
                        m: "1 \u5206\u949f",
                        mm: "%d \u5206\u949f",
                        h: "1 \u5c0f\u65f6",
                        hh: "%d \u5c0f\u65f6",
                        d: "1 \u5929",
                        dd: "%d \u5929",
                        M: "1 \u4e2a\u6708",
                        MM: "%d \u4e2a\u6708",
                        y: "1 \u5e74",
                        yy: "%d \u5e74"
                    },
                    meridiem: function(e, t) {
                        var n = 100 * e + t;
                        return n < 600 ? "\u51cc\u6668" : n < 900 ? "\u65e9\u4e0a" : n < 1100 ? "\u4e0a\u5348" : n < 1300 ? "\u4e2d\u5348" : n < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                    }
                },
                "zh-tw": {
                    name: "zh-tw",
                    weekdays: "\u661f\u671f\u65e5_\u661f\u671f\u4e00_\u661f\u671f\u4e8c_\u661f\u671f\u4e09_\u661f\u671f\u56db_\u661f\u671f\u4e94_\u661f\u671f\u516d".split("_"),
                    weekdaysShort: "\u9031\u65e5_\u9031\u4e00_\u9031\u4e8c_\u9031\u4e09_\u9031\u56db_\u9031\u4e94_\u9031\u516d".split("_"),
                    weekdaysMin: "\u65e5_\u4e00_\u4e8c_\u4e09_\u56db_\u4e94_\u516d".split("_"),
                    months: "\u4e00\u6708_\u4e8c\u6708_\u4e09\u6708_\u56db\u6708_\u4e94\u6708_\u516d\u6708_\u4e03\u6708_\u516b\u6708_\u4e5d\u6708_\u5341\u6708_\u5341\u4e00\u6708_\u5341\u4e8c\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    ordinal: function(e, t) {
                        return "".concat(e, "W" === t ? "\u9031" : "\u65e5")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                        l: "YYYY/M/D",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5dddd HH:mm",
                        RR: "MM/DD"
                    },
                    relativeTime: {
                        future: "%s\u5167",
                        past: "%s\u524d",
                        s: "\u5e7e\u79d2",
                        m: "1 \u5206\u9418",
                        mm: "%d \u5206\u9418",
                        h: "1 \u5c0f\u6642",
                        hh: "%d \u5c0f\u6642",
                        d: "1 \u5929",
                        dd: "%d \u5929",
                        M: "1 \u500b\u6708",
                        MM: "%d \u500b\u6708",
                        y: "1 \u5e74",
                        yy: "%d \u5e74"
                    },
                    meridiem: function(e, t) {
                        var n = 100 * e + t;
                        return n < 600 ? "\u51cc\u6668" : n < 900 ? "\u65e9\u4e0a" : n < 1100 ? "\u4e0a\u5348" : n < 1300 ? "\u4e2d\u5348" : n < 1800 ? "\u4e0b\u5348" : "\u665a\u4e0a"
                    }
                },
                ar: {
                    name: "ar",
                    weekdays: "\u0627\u0644\u0623\u062d\u062f_\u0627\u0644\u0625\u062b\u0646\u064a\u0646_\u0627\u0644\u062b\u0644\u0627\u062b\u0627\u0621_\u0627\u0644\u0623\u0631\u0628\u0639\u0627\u0621_\u0627\u0644\u062e\u0645\u064a\u0633_\u0627\u0644\u062c\u0645\u0639\u0629_\u0627\u0644\u0633\u0628\u062a".split("_"),
                    weekdaysShort: "\u0623\u062d\u062f_\u0625\u062b\u0646\u064a\u0646_\u062b\u0644\u0627\u062b\u0627\u0621_\u0623\u0631\u0628\u0639\u0627\u0621_\u062e\u0645\u064a\u0633_\u062c\u0645\u0639\u0629_\u0633\u0628\u062a".split("_"),
                    weekdaysMin: "\u062d_\u0646_\u062b_\u0631_\u062e_\u062c_\u0633".split("_"),
                    months: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    monthsShort: "\u064a\u0646\u0627\u064a\u0631_\u0641\u0628\u0631\u0627\u064a\u0631_\u0645\u0627\u0631\u0633_\u0623\u0628\u0631\u064a\u0644_\u0645\u0627\u064a\u0648_\u064a\u0648\u0646\u064a\u0648_\u064a\u0648\u0644\u064a\u0648_\u0623\u063a\u0633\u0637\u0633_\u0633\u0628\u062a\u0645\u0628\u0631_\u0623\u0643\u062a\u0648\u0628\u0631_\u0646\u0648\u0641\u0645\u0628\u0631_\u062f\u064a\u0633\u0645\u0628\u0631".split("_"),
                    weekStart: 6,
                    meridiem: function(e) {
                        return e > 12 ? "\u0645" : "\u0635"
                    },
                    relativeTime: {
                        future: "\u0628\u0639\u062f %s",
                        past: "\u0645\u0646\u0630 %s",
                        s: "\u062b\u0627\u0646\u064a\u0629 \u0648\u0627\u062d\u062f\u0629",
                        m: "\u062f\u0642\u064a\u0642\u0629 \u0648\u0627\u062d\u062f\u0629",
                        mm: "%d \u062f\u0642\u0627\u0626\u0642",
                        h: "\u0633\u0627\u0639\u0629 \u0648\u0627\u062d\u062f\u0629",
                        hh: "%d \u0633\u0627\u0639\u0627\u062a",
                        d: "\u064a\u0648\u0645 \u0648\u0627\u062d\u062f",
                        dd: "%d \u0623\u064a\u0627\u0645",
                        M: "\u0634\u0647\u0631 \u0648\u0627\u062d\u062f",
                        MM: "%d \u0623\u0634\u0647\u0631",
                        y: "\u0639\u0627\u0645 \u0648\u0627\u062d\u062f",
                        yy: "%d \u0623\u0639\u0648\u0627\u0645"
                    },
                    preparse: function(e) {
                        return e.replace(/[\u0661\u0662\u0663\u0664\u0665\u0666\u0667\u0668\u0669\u0660]/g, (function(e) {
                            return {
                                "\u0661": "1",
                                "\u0662": "2",
                                "\u0663": "3",
                                "\u0664": "4",
                                "\u0665": "5",
                                "\u0666": "6",
                                "\u0667": "7",
                                "\u0668": "8",
                                "\u0669": "9",
                                "\u0660": "0"
                            }[e]
                        })).replace(/\u060c/g, ",")
                    },
                    postformat: function(e) {
                        return e.replace(/\d/g, (function(e) {
                            return {
                                1: "\u0661",
                                2: "\u0662",
                                3: "\u0663",
                                4: "\u0664",
                                5: "\u0665",
                                6: "\u0666",
                                7: "\u0667",
                                8: "\u0668",
                                9: "\u0669",
                                0: "\u0660"
                            }[e]
                        })).replace(/,/g, "\u060c")
                    },
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "D/M"
                    },
                    formatTypes: {
                        MDHM: "RR LT",
                        YMDHM: "L LT",
                        YMDHMS: "L LTS"
                    }
                },
                nl: {
                    name: "nl",
                    weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"),
                    weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"),
                    weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"),
                    months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    ordinal: function(e) {
                        return "[".concat(e).concat(1 === e || 8 === e || e >= 20 ? "ste" : "de", "]")
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "DD-MM"
                    },
                    relativeTime: {
                        future: "over %s",
                        past: "%s geleden",
                        s: "een paar seconden",
                        m: "een minuut",
                        mm: "%d minuten",
                        h: "een uur",
                        hh: "%d uur",
                        d: "een dag",
                        dd: "%d dagen",
                        M: "een maand",
                        MM: "%d maanden",
                        y: "een jaar",
                        yy: "%d jaar"
                    }
                },
                fr: {
                    name: "fr",
                    weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"),
                    weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"),
                    weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"),
                    months: "janvier_f\xe9vrier_mars_avril_mai_juin_juillet_ao\xfbt_septembre_octobre_novembre_d\xe9cembre".split("_"),
                    monthsShort: "janv._f\xe9vr._mars_avr._mai_juin_juil._ao\xfbt_sept._oct._nov._d\xe9c.".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "dans %s",
                        past: "il y a %s",
                        s: "quelques secondes",
                        m: "une minute",
                        mm: "%d minutes",
                        h: "une heure",
                        hh: "%d heures",
                        d: "un jour",
                        dd: "%d jours",
                        M: "un mois",
                        MM: "%d mois",
                        y: "un an",
                        yy: "%d ans"
                    },
                    ordinal: function(e) {
                        var t = 1 === e ? "er" : "";
                        return "".concat(e).concat(t)
                    }
                },
                de: K,
                id: {
                    name: "id",
                    weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
                    months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
                    weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
                    monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"),
                    weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "HH.mm",
                        LTS: "HH.mm.ss",
                        L: "DD-MM-YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [pukul] HH.mm",
                        LLLL: "dddd, D MMMM YYYY [pukul] HH.mm",
                        RR: "DD-MM"
                    },
                    relativeTime: {
                        future: "dalam %s",
                        past: "%s yang lalu",
                        s: "beberapa detik",
                        m: "semenit",
                        mm: "%d menit",
                        h: "sejam",
                        hh: "%d jam",
                        d: "sehari",
                        dd: "%d hari",
                        M: "sebulan",
                        MM: "%d bulan",
                        y: "setahun",
                        yy: "%d tahun"
                    },
                    ordinal: function(e) {
                        return "".concat(e, ".")
                    }
                },
                it: {
                    name: "it",
                    weekdays: "domenica_luned\xec_marted\xec_mercoled\xec_gioved\xec_venerd\xec_sabato".split("_"),
                    weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"),
                    weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"),
                    months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"),
                    weekStart: 1,
                    monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"),
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "tra %s",
                        past: "%s fa",
                        s: "qualche secondo",
                        m: "un minuto",
                        mm: "%d minuti",
                        h: "un' ora",
                        hh: "%d ore",
                        d: "un giorno",
                        dd: "%d giorni",
                        M: "un mese",
                        MM: "%d mesi",
                        y: "un anno",
                        yy: "%d anni"
                    },
                    ordinal: function(e) {
                        return "".concat(e, "\xba")
                    }
                },
                ja: {
                    name: "ja",
                    weekdays: "\u65e5\u66dc\u65e5_\u6708\u66dc\u65e5_\u706b\u66dc\u65e5_\u6c34\u66dc\u65e5_\u6728\u66dc\u65e5_\u91d1\u66dc\u65e5_\u571f\u66dc\u65e5".split("_"),
                    weekdaysShort: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
                    weekdaysMin: "\u65e5_\u6708_\u706b_\u6c34_\u6728_\u91d1_\u571f".split("_"),
                    months: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    monthsShort: "1\u6708_2\u6708_3\u6708_4\u6708_5\u6708_6\u6708_7\u6708_8\u6708_9\u6708_10\u6708_11\u6708_12\u6708".split("_"),
                    ordinal: function(e) {
                        return "".concat(e, "\u65e5")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY\u5e74M\u6708D\u65e5",
                        LLL: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        LLLL: "YYYY\u5e74M\u6708D\u65e5 dddd HH:mm",
                        l: "YYYY/MM/DD",
                        ll: "YYYY\u5e74M\u6708D\u65e5",
                        lll: "YYYY\u5e74M\u6708D\u65e5 HH:mm",
                        llll: "YYYY\u5e74M\u6708D\u65e5(ddd) HH:mm"
                    },
                    meridiem: function(e) {
                        return e < 12 ? "\u5348\u524d" : "\u5348\u5f8c"
                    },
                    relativeTime: {
                        future: "%s\u5f8c",
                        past: "%s\u524d",
                        s: "\u6570\u79d2",
                        m: "1\u5206",
                        mm: "%d\u5206",
                        h: "1\u6642\u9593",
                        hh: "%d\u6642\u9593",
                        d: "1\u65e5",
                        dd: "%d\u65e5",
                        M: "1\u30f6\u6708",
                        MM: "%d\u30f6\u6708",
                        y: "1\u5e74",
                        yy: "%d\u5e74"
                    }
                },
                ko: {
                    name: "ko",
                    weekdays: "\uc77c\uc694\uc77c_\uc6d4\uc694\uc77c_\ud654\uc694\uc77c_\uc218\uc694\uc77c_\ubaa9\uc694\uc77c_\uae08\uc694\uc77c_\ud1a0\uc694\uc77c".split("_"),
                    weekdaysShort: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
                    weekdaysMin: "\uc77c_\uc6d4_\ud654_\uc218_\ubaa9_\uae08_\ud1a0".split("_"),
                    months: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
                    monthsShort: "1\uc6d4_2\uc6d4_3\uc6d4_4\uc6d4_5\uc6d4_6\uc6d4_7\uc6d4_8\uc6d4_9\uc6d4_10\uc6d4_11\uc6d4_12\uc6d4".split("_"),
                    ordinal: function(e) {
                        return "".concat(e, "\uc77c")
                    },
                    formats: {
                        LT: "A h:mm",
                        LTS: "A h:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY\ub144 MMMM D\uc77c",
                        LLL: "YYYY\ub144 MMMM D\uc77c A h:mm",
                        LLLL: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
                        l: "YYYY.MM.DD.",
                        ll: "YYYY\ub144 MMMM D\uc77c",
                        lll: "YYYY\ub144 MMMM D\uc77c A h:mm",
                        llll: "YYYY\ub144 MMMM D\uc77c dddd A h:mm",
                        RR: "MM.DD"
                    },
                    meridiem: function(e) {
                        return e < 12 ? "\uc624\uc804" : "\uc624\ud6c4"
                    },
                    relativeTime: {
                        future: "%s \ud6c4",
                        past: "%s \uc804",
                        s: "\uba87 \ucd08",
                        m: "1\ubd84",
                        mm: "%d\ubd84",
                        h: "\ud55c \uc2dc\uac04",
                        hh: "%d\uc2dc\uac04",
                        d: "\ud558\ub8e8",
                        dd: "%d\uc77c",
                        M: "\ud55c \ub2ec",
                        MM: "%d\ub2ec",
                        y: "\uc77c \ub144",
                        yy: "%d\ub144"
                    }
                },
                pl: v,
                "pt-br": {
                    name: "pt-br",
                    weekdays: "domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_s\xe1b".split("_"),
                    weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_S\xe1".split("_"),
                    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    ordinal: function(e) {
                        return "".concat(e, "\xba")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "h\xe1 %s",
                        s: "poucos segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um m\xeas",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    }
                },
                pt: {
                    name: "pt",
                    weekdays: "domingo_segunda-feira_ter\xe7a-feira_quarta-feira_quinta-feira_sexta-feira_s\xe1bado".split("_"),
                    weekdaysShort: "dom_seg_ter_qua_qui_sex_sab".split("_"),
                    weekdaysMin: "Do_2\xaa_3\xaa_4\xaa_5\xaa_6\xaa_Sa".split("_"),
                    months: "janeiro_fevereiro_mar\xe7o_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"),
                    monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"),
                    ordinal: function(e) {
                        return "".concat(e, "\xba")
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D [de] MMMM [de] YYYY",
                        LLL: "D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                        LLLL: "dddd, D [de] MMMM [de] YYYY [\xe0s] HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "em %s",
                        past: "h\xe1 %s",
                        s: "alguns segundos",
                        m: "um minuto",
                        mm: "%d minutos",
                        h: "uma hora",
                        hh: "%d horas",
                        d: "um dia",
                        dd: "%d dias",
                        M: "um m\xeas",
                        MM: "%d meses",
                        y: "um ano",
                        yy: "%d anos"
                    }
                },
                ru: j,
                "es-la": C,
                es: C,
                th: {
                    name: "th",
                    weekdays: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a\u0e1a\u0e14\u0e35_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
                    weekdaysShort: "\u0e2d\u0e32\u0e17\u0e34\u0e15\u0e22\u0e4c_\u0e08\u0e31\u0e19\u0e17\u0e23\u0e4c_\u0e2d\u0e31\u0e07\u0e04\u0e32\u0e23_\u0e1e\u0e38\u0e18_\u0e1e\u0e24\u0e2b\u0e31\u0e2a_\u0e28\u0e38\u0e01\u0e23\u0e4c_\u0e40\u0e2a\u0e32\u0e23\u0e4c".split("_"),
                    weekdaysMin: "\u0e2d\u0e32._\u0e08._\u0e2d._\u0e1e._\u0e1e\u0e24._\u0e28._\u0e2a.".split("_"),
                    months: "\u0e21\u0e01\u0e23\u0e32\u0e04\u0e21_\u0e01\u0e38\u0e21\u0e20\u0e32\u0e1e\u0e31\u0e19\u0e18\u0e4c_\u0e21\u0e35\u0e19\u0e32\u0e04\u0e21_\u0e40\u0e21\u0e29\u0e32\u0e22\u0e19_\u0e1e\u0e24\u0e29\u0e20\u0e32\u0e04\u0e21_\u0e21\u0e34\u0e16\u0e38\u0e19\u0e32\u0e22\u0e19_\u0e01\u0e23\u0e01\u0e0e\u0e32\u0e04\u0e21_\u0e2a\u0e34\u0e07\u0e2b\u0e32\u0e04\u0e21_\u0e01\u0e31\u0e19\u0e22\u0e32\u0e22\u0e19_\u0e15\u0e38\u0e25\u0e32\u0e04\u0e21_\u0e1e\u0e24\u0e28\u0e08\u0e34\u0e01\u0e32\u0e22\u0e19_\u0e18\u0e31\u0e19\u0e27\u0e32\u0e04\u0e21".split("_"),
                    monthsShort: "\u0e21.\u0e04._\u0e01.\u0e1e._\u0e21\u0e35.\u0e04._\u0e40\u0e21.\u0e22._\u0e1e.\u0e04._\u0e21\u0e34.\u0e22._\u0e01.\u0e04._\u0e2a.\u0e04._\u0e01.\u0e22._\u0e15.\u0e04._\u0e1e.\u0e22._\u0e18.\u0e04.".split("_"),
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
                        LLLL: "\u0e27\u0e31\u0e19dddd\u0e17\u0e35\u0e48 D MMMM YYYY \u0e40\u0e27\u0e25\u0e32 H:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "\u0e2d\u0e35\u0e01 %s",
                        past: "%s\u0e17\u0e35\u0e48\u0e41\u0e25\u0e49\u0e27",
                        s: "\u0e44\u0e21\u0e48\u0e01\u0e35\u0e48\u0e27\u0e34\u0e19\u0e32\u0e17\u0e35",
                        m: "1 \u0e19\u0e32\u0e17\u0e35",
                        mm: "%d \u0e19\u0e32\u0e17\u0e35",
                        h: "1 \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                        hh: "%d \u0e0a\u0e31\u0e48\u0e27\u0e42\u0e21\u0e07",
                        d: "1 \u0e27\u0e31\u0e19",
                        dd: "%d \u0e27\u0e31\u0e19",
                        M: "1 \u0e40\u0e14\u0e37\u0e2d\u0e19",
                        MM: "%d \u0e40\u0e14\u0e37\u0e2d\u0e19",
                        y: "1 \u0e1b\u0e35",
                        yy: "%d \u0e1b\u0e35"
                    },
                    ordinal: function(e) {
                        return "".concat(e, ".")
                    }
                },
                tr: {
                    name: "tr",
                    weekdays: "Pazar_Pazartesi_Sal\u0131_\xc7ar\u015famba_Per\u015fembe_Cuma_Cumartesi".split("_"),
                    weekdaysShort: "Paz_Pts_Sal_\xc7ar_Per_Cum_Cts".split("_"),
                    weekdaysMin: "Pz_Pt_Sa_\xc7a_Pe_Cu_Ct".split("_"),
                    months: "Ocak_\u015eubat_Mart_Nisan_May\u0131s_Haziran_Temmuz_A\u011fustos_Eyl\xfcl_Ekim_Kas\u0131m_Aral\u0131k".split("_"),
                    monthsShort: "Oca_\u015eub_Mar_Nis_May_Haz_Tem_A\u011fu_Eyl_Eki_Kas_Ara".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s \xf6nce",
                        s: "birka\xe7 saniye",
                        m: "bir dakika",
                        mm: "%d dakika",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir y\u0131l",
                        yy: "%d y\u0131l"
                    },
                    ordinal: function(e) {
                        return "".concat(e, ".")
                    }
                },
                uk: N,
                vi: {
                    name: "vi",
                    weekdays: "ch\u1ee7 nh\u1eadt_th\u1ee9 hai_th\u1ee9 ba_th\u1ee9 t\u01b0_th\u1ee9 n\u0103m_th\u1ee9 s\xe1u_th\u1ee9 b\u1ea3y".split("_"),
                    months: "th\xe1ng 1_th\xe1ng 2_th\xe1ng 3_th\xe1ng 4_th\xe1ng 5_th\xe1ng 6_th\xe1ng 7_th\xe1ng 8_th\xe1ng 9_th\xe1ng 10_th\xe1ng 11_th\xe1ng 12".split("_"),
                    weekStart: 1,
                    weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"),
                    weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM [n\u0103m] YYYY",
                        LLL: "D MMMM [n\u0103m] YYYY HH:mm",
                        LLLL: "dddd, D MMMM [n\u0103m] YYYY HH:mm",
                        l: "DD/M/YYYY",
                        ll: "D MMM YYYY",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd, D MMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    formatTypes: {
                        MDHM: "LT RR",
                        YMDHM: "LT L",
                        YMDHMS: "LTS L"
                    },
                    relativeTime: {
                        future: "%s t\u1edbi",
                        past: "%s tr\u01b0\u1edbc",
                        s: "v\xe0i gi\xe2y",
                        m: "m\u1ed9t ph\xfat",
                        mm: "%d ph\xfat",
                        h: "m\u1ed9t gi\u1edd",
                        hh: "%d gi\u1edd",
                        d: "m\u1ed9t ng\xe0y",
                        dd: "%d ng\xe0y",
                        M: "m\u1ed9t th\xe1ng",
                        MM: "%d th\xe1ng",
                        y: "m\u1ed9t n\u0103m",
                        yy: "%d n\u0103m"
                    }
                },
                ro: {
                    name: "ro",
                    weekdays: "Duminic\u0103_Luni_Mar\u021bi_Miercuri_Joi_Vineri_S\xe2mb\u0103t\u0103".split("_"),
                    weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_S\xe2m".split("_"),
                    weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_S\xe2".split("_"),
                    months: "Ianuarie_Februarie_Martie_Aprilie_Mai_Iunie_Iulie_August_Septembrie_Octombrie_Noiembrie_Decembrie".split("_"),
                    monthsShort: "Ian._Febr._Mart._Apr._Mai_Iun._Iul._Aug._Sept._Oct._Nov._Dec.".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY H:mm",
                        LLLL: "dddd, D MMMM YYYY H:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "peste %s",
                        past: "acum %s",
                        s: "c\xe2teva secunde",
                        m: "un minut",
                        mm: "%d minute",
                        h: "o or\u0103",
                        hh: "%d ore",
                        d: "o zi",
                        dd: "%d zile",
                        M: "o lun\u0103",
                        MM: "%d luni",
                        y: "un an",
                        yy: "%d ani"
                    },
                    ordinal: function(e) {
                        return e
                    }
                },
                cs: O,
                he: I,
                bg: V,
                lv: {
                    name: "lv",
                    weekdays: "sv\u0113tdiena_pirmdiena_otrdiena_tre\u0161diena_ceturtdiena_piektdiena_sestdiena".split("_"),
                    months: "janv\u0101ris_febru\u0101ris_marts_apr\u012blis_maijs_j\u016bnijs_j\u016blijs_augusts_septembris_oktobris_novembris_decembris".split("_"),
                    weekStart: 1,
                    weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"),
                    monthsShort: "jan_feb_mar_apr_mai_j\u016bn_j\u016bl_aug_sep_okt_nov_dec".split("_"),
                    weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY.",
                        LL: "YYYY. [gada] D. MMMM",
                        LLL: "YYYY. [gada] D. MMMM, HH:mm",
                        LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "p\u0113c %s",
                        past: "pirms %s",
                        s: "da\u017e\u0101m sekund\u0113m",
                        m: "min\u016btes",
                        mm: "%d min\u016bt\u0113m",
                        h: "stundas",
                        hh: "%d stund\u0101m",
                        d: "dienas",
                        dd: "%d dien\u0101m",
                        M: "m\u0113ne\u0161a",
                        MM: "%d m\u0113ne\u0161iem",
                        y: "gada",
                        yy: "%d gadiem"
                    }
                },
                bn: B,
                sv: {
                    name: "sv",
                    weekdays: "s\xf6ndag_m\xe5ndag_tisdag_onsdag_torsdag_fredag_l\xf6rdag".split("_"),
                    weekdaysShort: "s\xf6n_m\xe5n_tis_ons_tor_fre_l\xf6r".split("_"),
                    weekdaysMin: "s\xf6_m\xe5_ti_on_to_fr_l\xf6".split("_"),
                    months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"),
                    monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    ordinal: function(e) {
                        var t = e % 10,
                            n = 1 === t || 2 === t ? "a" : "e";
                        return "[".concat(e).concat(n, "]")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D MMMM YYYY [kl.] HH:mm",
                        lll: "D MMM YYYY HH:mm",
                        llll: "ddd D MMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "f\xf6r %s sedan",
                        s: "n\xe5gra sekunder",
                        m: "en minut",
                        mm: "%d minuter",
                        h: "en timme",
                        hh: "%d timmar",
                        d: "en dag",
                        dd: "%d dagar",
                        M: "en m\xe5nad",
                        MM: "%d m\xe5nader",
                        y: "ett \xe5r",
                        yy: "%d \xe5r"
                    }
                },
                fi: Q,
                nb: {
                    name: "nb",
                    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                    weekdaysShort: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
                    weekdaysMin: "s\xf8_ma_ti_on_to_fr_l\xf8".split("_"),
                    months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"),
                    monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"),
                    ordinal: function(e) {
                        return "".concat(e, ".")
                    },
                    weekStart: 1,
                    yearStart: 4,
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY [kl.] HH:mm",
                        LLLL: "dddd D. MMMM YYYY [kl.] HH:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "noen sekunder",
                        m: "ett minutt",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dager",
                        M: "en m\xe5ned",
                        MM: "%d m\xe5neder",
                        y: "ett \xe5r",
                        yy: "%d \xe5r"
                    }
                },
                sk: te,
                sl: _e,
                ur: {
                    name: "ur",
                    weekdays: "\u0627\u062a\u0648\u0627\u0631_\u067e\u06cc\u0631_\u0645\u0646\u06af\u0644_\u0628\u062f\u06be_\u062c\u0645\u0639\u0631\u0627\u062a_\u062c\u0645\u0639\u06c1_\u06c1\u0641\u062a\u06c1".split("_"),
                    months: "\u062c\u0646\u0648\u0631\u06cc_\u0641\u0631\u0648\u0631\u06cc_\u0645\u0627\u0631\u0686_\u0627\u067e\u0631\u06cc\u0644_\u0645\u0626\u06cc_\u062c\u0648\u0646_\u062c\u0648\u0644\u0627\u0626\u06cc_\u0627\u06af\u0633\u062a_\u0633\u062a\u0645\u0628\u0631_\u0627\u06a9\u062a\u0648\u0628\u0631_\u0646\u0648\u0645\u0628\u0631_\u062f\u0633\u0645\u0628\u0631".split("_"),
                    weekStart: 1,
                    weekdaysShort: "\u0627\u062a\u0648\u0627\u0631_\u067e\u06cc\u0631_\u0645\u0646\u06af\u0644_\u0628\u062f\u06be_\u062c\u0645\u0639\u0631\u0627\u062a_\u062c\u0645\u0639\u06c1_\u06c1\u0641\u062a\u06c1".split("_"),
                    monthsShort: "\u062c\u0646\u0648\u0631\u06cc_\u0641\u0631\u0648\u0631\u06cc_\u0645\u0627\u0631\u0686_\u0627\u067e\u0631\u06cc\u0644_\u0645\u0626\u06cc_\u062c\u0648\u0646_\u062c\u0648\u0644\u0627\u0626\u06cc_\u0627\u06af\u0633\u062a_\u0633\u062a\u0645\u0628\u0631_\u0627\u06a9\u062a\u0648\u0628\u0631_\u0646\u0648\u0645\u0628\u0631_\u062f\u0633\u0645\u0628\u0631".split("_"),
                    weekdaysMin: "\u0627\u062a\u0648\u0627\u0631_\u067e\u06cc\u0631_\u0645\u0646\u06af\u0644_\u0628\u062f\u06be_\u062c\u0645\u0639\u0631\u0627\u062a_\u062c\u0645\u0639\u06c1_\u06c1\u0641\u062a\u06c1".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd\u060c D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "%s \u0628\u0639\u062f",
                        past: "%s \u0642\u0628\u0644",
                        s: "\u0686\u0646\u062f \u0633\u06cc\u06a9\u0646\u0688",
                        m: "\u0627\u06cc\u06a9 \u0645\u0646\u0679",
                        mm: "%d \u0645\u0646\u0679",
                        h: "\u0627\u06cc\u06a9 \u06af\u06be\u0646\u0679\u06c1",
                        hh: "%d \u06af\u06be\u0646\u0679\u06d2",
                        d: "\u0627\u06cc\u06a9 \u062f\u0646",
                        dd: "%d \u062f\u0646",
                        M: "\u0627\u06cc\u06a9 \u0645\u0627\u06c1",
                        MM: "%d \u0645\u0627\u06c1",
                        y: "\u0627\u06cc\u06a9 \u0633\u0627\u0644",
                        yy: "%d \u0633\u0627\u0644"
                    }
                },
                el: {
                    name: "el",
                    weekdays: "\u039a\u03c5\u03c1\u03b9\u03b1\u03ba\u03ae_\u0394\u03b5\u03c5\u03c4\u03ad\u03c1\u03b1_\u03a4\u03c1\u03af\u03c4\u03b7_\u03a4\u03b5\u03c4\u03ac\u03c1\u03c4\u03b7_\u03a0\u03ad\u03bc\u03c0\u03c4\u03b7_\u03a0\u03b1\u03c1\u03b1\u03c3\u03ba\u03b5\u03c5\u03ae_\u03a3\u03ac\u03b2\u03b2\u03b1\u03c4\u03bf".split("_"),
                    weekdaysShort: "\u039a\u03c5\u03c1_\u0394\u03b5\u03c5_\u03a4\u03c1\u03b9_\u03a4\u03b5\u03c4_\u03a0\u03b5\u03bc_\u03a0\u03b1\u03c1_\u03a3\u03b1\u03b2".split("_"),
                    weekdaysMin: "\u039a\u03c5_\u0394\u03b5_\u03a4\u03c1_\u03a4\u03b5_\u03a0\u03b5_\u03a0\u03b1_\u03a3\u03b1".split("_"),
                    months: "\u0399\u03b1\u03bd\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u03a6\u03b5\u03b2\u03c1\u03bf\u03c5\u03ac\u03c1\u03b9\u03bf\u03c2_\u039c\u03ac\u03c1\u03c4\u03b9\u03bf\u03c2_\u0391\u03c0\u03c1\u03af\u03bb\u03b9\u03bf\u03c2_\u039c\u03ac\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bd\u03b9\u03bf\u03c2_\u0399\u03bf\u03cd\u03bb\u03b9\u03bf\u03c2_\u0391\u03cd\u03b3\u03bf\u03c5\u03c3\u03c4\u03bf\u03c2_\u03a3\u03b5\u03c0\u03c4\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u039f\u03ba\u03c4\u03ce\u03b2\u03c1\u03b9\u03bf\u03c2_\u039d\u03bf\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2_\u0394\u03b5\u03ba\u03ad\u03bc\u03b2\u03c1\u03b9\u03bf\u03c2".split("_"),
                    monthsShort: "\u0399\u03b1\u03bd_\u03a6\u03b5\u03b2_\u039c\u03b1\u03c1_\u0391\u03c0\u03c1_\u039c\u03b1\u03b9_\u0399\u03bf\u03c5\u03bd_\u0399\u03bf\u03c5\u03bb_\u0391\u03c5\u03b3_\u03a3\u03b5\u03c0\u03c4_\u039f\u03ba\u03c4_\u039d\u03bf\u03b5_\u0394\u03b5\u03ba".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    weekStart: 1,
                    relativeTime: {
                        future: "\u03c3\u03b5 %s",
                        past: "\u03c0\u03c1\u03b9\u03bd %s",
                        s: "\u03bc\u03b5\u03c1\u03b9\u03ba\u03ac \u03b4\u03b5\u03c5\u03c4\u03b5\u03c1\u03cc\u03bb\u03b5\u03c0\u03c4\u03b1",
                        m: "\u03ad\u03bd\u03b1 \u03bb\u03b5\u03c0\u03c4\u03cc",
                        mm: "%d \u03bb\u03b5\u03c0\u03c4\u03ac",
                        h: "\u03bc\u03af\u03b1 \u03ce\u03c1\u03b1",
                        hh: "%d \u03ce\u03c1\u03b5\u03c2",
                        d: "\u03bc\u03af\u03b1 \u03bc\u03ad\u03c1\u03b1",
                        dd: "%d \u03bc\u03ad\u03c1\u03b5\u03c2",
                        M: "\u03ad\u03bd\u03b1 \u03bc\u03ae\u03bd\u03b1",
                        MM: "%d \u03bc\u03ae\u03bd\u03b5\u03c2",
                        y: "\u03ad\u03bd\u03b1 \u03c7\u03c1\u03cc\u03bd\u03bf",
                        yy: "%d \u03c7\u03c1\u03cc\u03bd\u03b9\u03b1"
                    },
                    formats: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A",
                        RR: "DD/MM"
                    }
                },
                hi: {
                    name: "hi",
                    weekdays: "\u0930\u0935\u093f\u0935\u093e\u0930_\u0938\u094b\u092e\u0935\u093e\u0930_\u092e\u0902\u0917\u0932\u0935\u093e\u0930_\u092c\u0941\u0927\u0935\u093e\u0930_\u0917\u0941\u0930\u0942\u0935\u093e\u0930_\u0936\u0941\u0915\u094d\u0930\u0935\u093e\u0930_\u0936\u0928\u093f\u0935\u093e\u0930".split("_"),
                    months: "\u091c\u0928\u0935\u0930\u0940_\u092b\u093c\u0930\u0935\u0930\u0940_\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948\u0932_\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932\u093e\u0908_\u0905\u0917\u0938\u094d\u0924_\u0938\u093f\u0924\u092e\u094d\u092c\u0930_\u0905\u0915\u094d\u091f\u0942\u092c\u0930_\u0928\u0935\u092e\u094d\u092c\u0930_\u0926\u093f\u0938\u092e\u094d\u092c\u0930".split("_"),
                    weekdaysShort: "\u0930\u0935\u093f_\u0938\u094b\u092e_\u092e\u0902\u0917\u0932_\u092c\u0941\u0927_\u0917\u0941\u0930\u0942_\u0936\u0941\u0915\u094d\u0930_\u0936\u0928\u093f".split("_"),
                    monthsShort: "\u091c\u0928._\u092b\u093c\u0930._\u092e\u093e\u0930\u094d\u091a_\u0905\u092a\u094d\u0930\u0948._\u092e\u0908_\u091c\u0942\u0928_\u091c\u0941\u0932._\u0905\u0917._\u0938\u093f\u0924._\u0905\u0915\u094d\u091f\u0942._\u0928\u0935._\u0926\u093f\u0938.".split("_"),
                    weekdaysMin: "\u0930_\u0938\u094b_\u092e\u0902_\u092c\u0941_\u0917\u0941_\u0936\u0941_\u0936".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "A h:mm \u092c\u091c\u0947",
                        LTS: "A h:mm:ss \u092c\u091c\u0947",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY, A h:mm \u092c\u091c\u0947",
                        LLLL: "dddd, D MMMM YYYY, A h:mm \u092c\u091c\u0947",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "%s \u092e\u0947\u0902",
                        past: "%s \u092a\u0939\u0932\u0947",
                        s: "\u0915\u0941\u091b \u0939\u0940 \u0915\u094d\u0937\u0923",
                        m: "\u090f\u0915 \u092e\u093f\u0928\u091f",
                        mm: "%d \u092e\u093f\u0928\u091f",
                        h: "\u090f\u0915 \u0918\u0902\u091f\u093e",
                        hh: "%d \u0918\u0902\u091f\u0947",
                        d: "\u090f\u0915 \u0926\u093f\u0928",
                        dd: "%d \u0926\u093f\u0928",
                        M: "\u090f\u0915 \u092e\u0939\u0940\u0928\u0947",
                        MM: "%d \u092e\u0939\u0940\u0928\u0947",
                        y: "\u090f\u0915 \u0935\u0930\u094d\u0937",
                        yy: "%d \u0935\u0930\u094d\u0937"
                    }
                },
                et: ie,
                da: {
                    name: "da",
                    weekdays: "s\xf8ndag_mandag_tirsdag_onsdag_torsdag_fredag_l\xf8rdag".split("_"),
                    weekdaysShort: "s\xf8n._man._tirs._ons._tors._fre._l\xf8r.".split("_"),
                    weekdaysMin: "s\xf8._ma._ti._on._to._fr._l\xf8.".split("_"),
                    months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj_juni_juli_aug._sept._okt._nov._dec.".split("_"),
                    weekStart: 1,
                    yearStart: 4,
                    ordinal: function(e) {
                        return "".concat(e, ".")
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "D. MMM YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY HH:mm",
                        LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm",
                        RR: "D. MMM"
                    },
                    relativeTime: {
                        future: "om %s",
                        past: "%s siden",
                        s: "f\xe5 sekunder",
                        m: "et minut",
                        mm: "%d minutter",
                        h: "en time",
                        hh: "%d timer",
                        d: "en dag",
                        dd: "%d dage",
                        M: "en m\xe5ned",
                        MM: "%d m\xe5neder",
                        y: "et \xe5r",
                        yy: "%d \xe5r"
                    }
                },
                lt: le,
                hr: pe,
                sr: Le,
                bs: {
                    name: "bs",
                    weekdays: "nedjelja_ponedjeljak_utorak_srijeda_\u010detvrtak_petak_subota".split("_"),
                    months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"),
                    weekStart: 1,
                    weekdaysShort: "ned._pon._uto._sri._\u010det._pet._sub.".split("_"),
                    monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"),
                    weekdaysMin: "ne_po_ut_sr_\u010de_pe_su".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D. MMMM YYYY",
                        LLL: "D. MMMM YYYY H:mm",
                        LLLL: "dddd, D. MMMM YYYY H:mm",
                        RR: "DD.MM"
                    }
                },
                kk: ye,
                kz: ye,
                hu: {
                    name: "hu",
                    weekdays: "vas\xe1rnap_h\xe9tf\u0151_kedd_szerda_cs\xfct\xf6rt\xf6k_p\xe9ntek_szombat".split("_"),
                    weekdaysShort: "vas_h\xe9t_kedd_sze_cs\xfct_p\xe9n_szo".split("_"),
                    weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"),
                    months: "janu\xe1r_febru\xe1r_m\xe1rcius_\xe1prilis_m\xe1jus_j\xfanius_j\xfalius_augusztus_szeptember_okt\xf3ber_november_december".split("_"),
                    monthsShort: "jan_feb_m\xe1rc_\xe1pr_m\xe1j_j\xfan_j\xfal_aug_szept_okt_nov_dec".split("_"),
                    ordinal: function(e) {
                        return "".concat(e, ".")
                    },
                    weekStart: 1,
                    relativeTime: {
                        future: "%s m\xfalva",
                        past: "%s",
                        s: function(e, t, n, r) {
                            return "n\xe9h\xe1ny m\xe1sodperc".concat(r || t ? "" : "e")
                        },
                        m: function(e, t, n, r) {
                            return "egy perc".concat(r || t ? "" : "e")
                        },
                        mm: function(e, t, n, r) {
                            return "".concat(e, " perc").concat(r || t ? "" : "e")
                        },
                        h: function(e, t, n, r) {
                            return "egy ".concat(r || t ? "\xf3ra" : "\xf3r\xe1ja")
                        },
                        hh: function(e, t, n, r) {
                            return "".concat(e, " ").concat(r || t ? "\xf3ra" : "\xf3r\xe1ja")
                        },
                        d: function(e, t, n, r) {
                            return "egy ".concat(r || t ? "nap" : "napja")
                        },
                        dd: function(e, t, n, r) {
                            return "".concat(e, " ").concat(r || t ? "nap" : "napja")
                        },
                        M: function(e, t, n, r) {
                            return "egy ".concat(r || t ? "h\xf3nap" : "h\xf3napja")
                        },
                        MM: function(e, t, n, r) {
                            return "".concat(e, " ").concat(r || t ? "h\xf3nap" : "h\xf3napja")
                        },
                        y: function(e, t, n, r) {
                            return "egy ".concat(r || t ? "\xe9v" : "\xe9ve")
                        },
                        yy: function(e, t, n, r) {
                            return "".concat(e, " ").concat(r || t ? "\xe9v" : "\xe9ve")
                        }
                    },
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "YYYY.MM.DD.",
                        LL: "YYYY. MMMM D.",
                        LLL: "YYYY. MMMM D. H:mm",
                        LLLL: "YYYY. MMMM D., dddd H:mm",
                        RR: "MM.DD"
                    }
                },
                my: {
                    name: "my",
                    weekdays: "\u1010\u1014\u1004\u103a\u1039\u1002\u1014\u103d\u1031_\u1010\u1014\u1004\u103a\u1039\u101c\u102c_\u1021\u1004\u103a\u1039\u1002\u102b_\u1017\u102f\u1012\u1039\u1013\u101f\u1030\u1038_\u1000\u103c\u102c\u101e\u1015\u1010\u1031\u1038_\u101e\u1031\u102c\u1000\u103c\u102c_\u1005\u1014\u1031".split("_"),
                    months: "\u1007\u1014\u103a\u1014\u101d\u102b\u101b\u102e_\u1016\u1031\u1016\u1031\u102c\u103a\u101d\u102b\u101b\u102e_\u1019\u1010\u103a_\u1027\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u1007\u1030\u101c\u102d\u102f\u1004\u103a_\u101e\u103c\u1002\u102f\u1010\u103a_\u1005\u1000\u103a\u1010\u1004\u103a\u1018\u102c_\u1021\u1031\u102c\u1000\u103a\u1010\u102d\u102f\u1018\u102c_\u1014\u102d\u102f\u101d\u1004\u103a\u1018\u102c_\u1012\u102e\u1007\u1004\u103a\u1018\u102c".split("_"),
                    weekStart: 1,
                    weekdaysShort: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
                    monthsShort: "\u1007\u1014\u103a_\u1016\u1031_\u1019\u1010\u103a_\u1015\u103c\u102e_\u1019\u1031_\u1007\u103d\u1014\u103a_\u101c\u102d\u102f\u1004\u103a_\u101e\u103c_\u1005\u1000\u103a_\u1021\u1031\u102c\u1000\u103a_\u1014\u102d\u102f_\u1012\u102e".split("_"),
                    weekdaysMin: "\u1014\u103d\u1031_\u101c\u102c_\u1002\u102b_\u101f\u1030\u1038_\u1000\u103c\u102c_\u101e\u1031\u102c_\u1014\u1031".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "\u101c\u102c\u1019\u100a\u103a\u1037 %s \u1019\u103e\u102c",
                        past: "\u101c\u103d\u1014\u103a\u1001\u1032\u1037\u101e\u1031\u102c %s \u1000",
                        s: "\u1005\u1000\u1039\u1000\u1014\u103a.\u1021\u1014\u100a\u103a\u1038\u1004\u101a\u103a",
                        m: "\u1010\u1005\u103a\u1019\u102d\u1014\u1005\u103a",
                        mm: "%d \u1019\u102d\u1014\u1005\u103a",
                        h: "\u1010\u1005\u103a\u1014\u102c\u101b\u102e",
                        hh: "%d \u1014\u102c\u101b\u102e",
                        d: "\u1010\u1005\u103a\u101b\u1000\u103a",
                        dd: "%d \u101b\u1000\u103a",
                        M: "\u1010\u1005\u103a\u101c",
                        MM: "%d \u101c",
                        y: "\u1010\u1005\u103a\u1014\u103e\u1005\u103a",
                        yy: "%d \u1014\u103e\u1005\u103a"
                    }
                },
                lo: {
                    name: "lo",
                    weekdays: "\u0ead\u0eb2\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
                    months: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
                    weekdaysShort: "\u0e97\u0eb4\u0e94_\u0e88\u0eb1\u0e99_\u0ead\u0eb1\u0e87\u0e84\u0eb2\u0e99_\u0e9e\u0eb8\u0e94_\u0e9e\u0eb0\u0eab\u0eb1\u0e94_\u0eaa\u0eb8\u0e81_\u0ec0\u0eaa\u0ebb\u0eb2".split("_"),
                    monthsShort: "\u0ea1\u0eb1\u0e87\u0e81\u0ead\u0e99_\u0e81\u0eb8\u0ea1\u0e9e\u0eb2_\u0ea1\u0eb5\u0e99\u0eb2_\u0ec0\u0ea1\u0eaa\u0eb2_\u0e9e\u0eb6\u0e94\u0eaa\u0eb0\u0e9e\u0eb2_\u0ea1\u0eb4\u0e96\u0eb8\u0e99\u0eb2_\u0e81\u0ecd\u0ea5\u0eb0\u0e81\u0ebb\u0e94_\u0eaa\u0eb4\u0e87\u0eab\u0eb2_\u0e81\u0eb1\u0e99\u0e8d\u0eb2_\u0e95\u0eb8\u0ea5\u0eb2_\u0e9e\u0eb0\u0e88\u0eb4\u0e81_\u0e97\u0eb1\u0e99\u0ea7\u0eb2".split("_"),
                    weekdaysMin: "\u0e97_\u0e88_\u0ead\u0e84_\u0e9e_\u0e9e\u0eab_\u0eaa\u0e81_\u0eaa".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "\u0ea7\u0eb1\u0e99dddd D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "\u0ead\u0eb5\u0e81 %s",
                        past: "%s\u0e9c\u0ec8\u0eb2\u0e99\u0ea1\u0eb2",
                        s: "\u0e9a\u0ecd\u0ec8\u0ec0\u0e97\u0ebb\u0ec8\u0eb2\u0ec3\u0e94\u0ea7\u0eb4\u0e99\u0eb2\u0e97\u0eb5",
                        m: "1 \u0e99\u0eb2\u0e97\u0eb5",
                        mm: "%d \u0e99\u0eb2\u0e97\u0eb5",
                        h: "1 \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
                        hh: "%d \u0e8a\u0ebb\u0ec8\u0ea7\u0ec2\u0ea1\u0e87",
                        d: "1 \u0ea1\u0eb7\u0ec9",
                        dd: "%d \u0ea1\u0eb7\u0ec9",
                        M: "1 \u0ec0\u0e94\u0eb7\u0ead\u0e99",
                        MM: "%d \u0ec0\u0e94\u0eb7\u0ead\u0e99",
                        y: "1 \u0e9b\u0eb5",
                        yy: "%d \u0e9b\u0eb5"
                    }
                },
                si: {
                    name: "si",
                    weekdays: "\u0d89\u0dbb\u0dd2\u0daf\u0dcf_\u0dc3\u0db3\u0dd4\u0daf\u0dcf_\u0d85\u0d9f\u0dc4\u0dbb\u0dd4\u0dc0\u0dcf\u0daf\u0dcf_\u0db6\u0daf\u0dcf\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4\u0dc3\u0dca\u0db4\u0dad\u0dd2\u0db1\u0dca\u0daf\u0dcf_\u0dc3\u0dd2\u0d9a\u0dd4\u0dbb\u0dcf\u0daf\u0dcf_\u0dc3\u0dd9\u0db1\u0dc3\u0dd4\u0dbb\u0dcf\u0daf\u0dcf".split("_"),
                    months: "\u0daf\u0dd4\u0dbb\u0dd4\u0dad\u0dd4_\u0db1\u0dc0\u0db8\u0dca_\u0db8\u0dd0\u0daf\u0dd2\u0db1\u0dca_\u0db6\u0d9a\u0dca_\u0dc0\u0dd9\u0dc3\u0d9a\u0dca_\u0db4\u0ddc\u0dc3\u0ddc\u0db1\u0dca_\u0d87\u0dc3\u0dc5_\u0db1\u0dd2\u0d9a\u0dd2\u0dab\u0dd2_\u0db6\u0dd2\u0db1\u0dbb_\u0dc0\u0db4\u0dca_\u0d89\u0dbd\u0dca_\u0d8b\u0db3\u0dd4\u0dc0\u0db4\u0dca".split("_"),
                    weekdaysShort: "\u0d89\u0dbb\u0dd2_\u0dc3\u0db3\u0dd4_\u0d85\u0d9f_\u0db6\u0daf\u0dcf_\u0db6\u0dca\u200d\u0dbb\u0dc4_\u0dc3\u0dd2\u0d9a\u0dd4_\u0dc3\u0dd9\u0db1".split("_"),
                    monthsShort: "\u0daf\u0dd4\u0dbb\u0dd4_\u0db1\u0dc0_\u0db8\u0dd0\u0daf\u0dd2_\u0db6\u0d9a\u0dca_\u0dc0\u0dd9\u0dc3_\u0db4\u0ddc\u0dc3\u0ddc_\u0d87\u0dc3_\u0db1\u0dd2\u0d9a\u0dd2_\u0db6\u0dd2\u0db1_\u0dc0\u0db4\u0dca_\u0d89\u0dbd\u0dca_\u0d8b\u0db3\u0dd4".split("_"),
                    weekdaysMin: "\u0d89_\u0dc3_\u0d85_\u0db6_\u0db6\u0dca\u200d\u0dbb_\u0dc3\u0dd2_\u0dc3\u0dd9".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "a h:mm",
                        LTS: "a h:mm:ss",
                        L: "YYYY/MM/DD",
                        LL: "YYYY MMMM D",
                        LLL: "YYYY MMMM D, a h:mm",
                        LLLL: "YYYY MMMM D [\u0dc0\u0dd0\u0db1\u0dd2] dddd, a h:mm:ss",
                        RR: "MM/DD"
                    },
                    relativeTime: {
                        future: "%s\u0d9a\u0dd2\u0db1\u0dca",
                        past: "%s\u0d9a\u0da7 \u0db4\u0dd9\u0dbb",
                        s: "\u0dad\u0dad\u0dca\u0db4\u0dbb \u0d9a\u0dd2\u0dc4\u0dd2\u0db4\u0dba",
                        m: "\u0dc0\u0dd2\u0db1\u0dcf\u0da9\u0dd2\u0dba",
                        mm: "\u0dc0\u0dd2\u0db1\u0dcf\u0da9\u0dd2 %d",
                        h: "\u0db4\u0dd0\u0dba",
                        hh: "\u0db4\u0dd0\u0dba %d",
                        d: "\u0daf\u0dd2\u0db1\u0dba",
                        dd: "\u0daf\u0dd2\u0db1 %d",
                        M: "\u0db8\u0dcf\u0dc3\u0dba",
                        MM: "\u0db8\u0dcf\u0dc3 %d",
                        y: "\u0dc0\u0dc3\u0dbb",
                        yy: "\u0dc0\u0dc3\u0dbb %d"
                    }
                },
                az: {
                    name: "az",
                    weekdays: "Bazar_Bazar ert\u0259si_\xc7\u0259r\u015f\u0259nb\u0259 ax\u015fam\u0131_\xc7\u0259r\u015f\u0259nb\u0259_C\xfcm\u0259 ax\u015fam\u0131_C\xfcm\u0259_\u015e\u0259nb\u0259".split("_"),
                    weekdaysShort: "Baz_BzE_\xc7Ax_\xc7\u0259r_CAx_C\xfcm_\u015e\u0259n".split("_"),
                    weekdaysMin: "Bz_BE_\xc7A_\xc7\u0259_CA_C\xfc_\u015e\u0259".split("_"),
                    months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"),
                    monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "H:mm",
                        LTS: "H:mm:ss",
                        L: "DD.MM.YYYY",
                        LL: "D MMMM YYYY \u0433.",
                        LLL: "D MMMM YYYY \u0433., H:mm",
                        LLLL: "dddd, D MMMM YYYY \u0433., H:mm",
                        RR: "DD.MM"
                    },
                    relativeTime: {
                        future: "%s sonra",
                        past: "%s \u0259vv\u0259l",
                        s: "bir ne\xe7\u0259 saniy\u0259",
                        m: "bir d\u0259qiq\u0259",
                        mm: "%d d\u0259qiq\u0259",
                        h: "bir saat",
                        hh: "%d saat",
                        d: "bir g\xfcn",
                        dd: "%d g\xfcn",
                        M: "bir ay",
                        MM: "%d ay",
                        y: "bir il",
                        yy: "%d il"
                    },
                    ordinal: function(e) {
                        return e
                    }
                },
                km: {
                    name: "km",
                    weekdays: "\u17a2\u17b6\u1791\u17b7\u178f\u17d2\u1799_\u1785\u17d0\u1793\u17d2\u1791_\u17a2\u1784\u17d2\u1782\u17b6\u179a_\u1796\u17bb\u1792_\u1796\u17d2\u179a\u17a0\u179f\u17d2\u1794\u178f\u17b7\u17cd_\u179f\u17bb\u1780\u17d2\u179a_\u179f\u17c5\u179a\u17cd".split("_"),
                    months: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
                    weekStart: 1,
                    weekdaysShort: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
                    monthsShort: "\u1798\u1780\u179a\u17b6_\u1780\u17bb\u1798\u17d2\u1797\u17c8_\u1798\u17b8\u1793\u17b6_\u1798\u17c1\u179f\u17b6_\u17a7\u179f\u1797\u17b6_\u1798\u17b7\u1790\u17bb\u1793\u17b6_\u1780\u1780\u17d2\u1780\u178a\u17b6_\u179f\u17b8\u17a0\u17b6_\u1780\u1789\u17d2\u1789\u17b6_\u178f\u17bb\u179b\u17b6_\u179c\u17b7\u1785\u17d2\u1786\u17b7\u1780\u17b6_\u1792\u17d2\u1793\u17bc".split("_"),
                    weekdaysMin: "\u17a2\u17b6_\u1785_\u17a2_\u1796_\u1796\u17d2\u179a_\u179f\u17bb_\u179f".split("_"),
                    ordinal: function(e) {
                        return e
                    },
                    formats: {
                        LT: "HH:mm",
                        LTS: "HH:mm:ss",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY HH:mm",
                        LLLL: "dddd, D MMMM YYYY HH:mm",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "%s\u1791\u17c0\u178f",
                        past: "%s\u1798\u17bb\u1793",
                        s: "\u1794\u17c9\u17bb\u1793\u17d2\u1798\u17b6\u1793\u179c\u17b7\u1793\u17b6\u1791\u17b8",
                        m: "\u1798\u17bd\u1799\u1793\u17b6\u1791\u17b8",
                        mm: "%d \u1793\u17b6\u1791\u17b8",
                        h: "\u1798\u17bd\u1799\u1798\u17c9\u17c4\u1784",
                        hh: "%d \u1798\u17c9\u17c4\u1784",
                        d: "\u1798\u17bd\u1799\u1790\u17d2\u1784\u17c3",
                        dd: "%d \u1790\u17d2\u1784\u17c3",
                        M: "\u1798\u17bd\u1799\u1781\u17c2",
                        MM: "%d \u1781\u17c2",
                        y: "\u1798\u17bd\u1799\u1786\u17d2\u1793\u17b6\u17c6",
                        yy: "%d \u1786\u17d2\u1793\u17b6\u17c6"
                    }
                },
                ka: {
                    name: "ka",
                    weekdays: "\u10d9\u10d5\u10d8\u10e0\u10d0_\u10dd\u10e0\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10e1\u10d0\u10db\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10dd\u10d7\u10ee\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10ee\u10e3\u10d7\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8_\u10de\u10d0\u10e0\u10d0\u10e1\u10d9\u10d4\u10d5\u10d8_\u10e8\u10d0\u10d1\u10d0\u10d7\u10d8".split("_"),
                    weekdaysShort: "\u10d9\u10d5\u10d8_\u10dd\u10e0\u10e8_\u10e1\u10d0\u10db_\u10dd\u10d7\u10ee_\u10ee\u10e3\u10d7_\u10de\u10d0\u10e0_\u10e8\u10d0\u10d1".split("_"),
                    weekdaysMin: "\u10d9\u10d5_\u10dd\u10e0_\u10e1\u10d0_\u10dd\u10d7_\u10ee\u10e3_\u10de\u10d0_\u10e8\u10d0".split("_"),
                    months: "\u10d8\u10d0\u10dc\u10d5\u10d0\u10e0\u10d8_\u10d7\u10d4\u10d1\u10d4\u10e0\u10d5\u10d0\u10da\u10d8_\u10db\u10d0\u10e0\u10e2\u10d8_\u10d0\u10de\u10e0\u10d8\u10da\u10d8_\u10db\u10d0\u10d8\u10e1\u10d8_\u10d8\u10d5\u10dc\u10d8\u10e1\u10d8_\u10d8\u10d5\u10da\u10d8\u10e1\u10d8_\u10d0\u10d2\u10d5\u10d8\u10e1\u10e2\u10dd_\u10e1\u10d4\u10e5\u10e2\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10dd\u10e5\u10e2\u10dd\u10db\u10d1\u10d4\u10e0\u10d8_\u10dc\u10dd\u10d4\u10db\u10d1\u10d4\u10e0\u10d8_\u10d3\u10d4\u10d9\u10d4\u10db\u10d1\u10d4\u10e0\u10d8".split("_"),
                    monthsShort: "\u10d8\u10d0\u10dc_\u10d7\u10d4\u10d1_\u10db\u10d0\u10e0_\u10d0\u10de\u10e0_\u10db\u10d0\u10d8_\u10d8\u10d5\u10dc_\u10d8\u10d5\u10da_\u10d0\u10d2\u10d5_\u10e1\u10d4\u10e5_\u10dd\u10e5\u10e2_\u10dc\u10dd\u10d4_\u10d3\u10d4\u10d9".split("_"),
                    weekStart: 1,
                    formats: {
                        LT: "h:mm A",
                        LTS: "h:mm:ss A",
                        L: "DD/MM/YYYY",
                        LL: "D MMMM YYYY",
                        LLL: "D MMMM YYYY h:mm A",
                        LLLL: "dddd, D MMMM YYYY h:mm A",
                        RR: "DD/MM"
                    },
                    relativeTime: {
                        future: "%s \u10e8\u10d4\u10db\u10d3\u10d4\u10d2",
                        past: "%s \u10ec\u10d8\u10dc",
                        s: "\u10ec\u10d0\u10db\u10d8",
                        m: "\u10ec\u10e3\u10d7\u10d8",
                        mm: "%d \u10ec\u10e3\u10d7\u10d8",
                        h: "\u10e1\u10d0\u10d0\u10d7\u10d8",
                        hh: "%d \u10e1\u10d0\u10d0\u10d7\u10d8\u10e1",
                        d: "\u10d3\u10e6\u10d4\u10e1",
                        dd: "%d \u10d3\u10e6\u10d8\u10e1 \u10d2\u10d0\u10dc\u10db\u10d0\u10d5\u10da\u10dd\u10d1\u10d0\u10e8\u10d8",
                        M: "\u10d7\u10d5\u10d8\u10e1",
                        MM: "%d \u10d7\u10d5\u10d8\u10e1",
                        y: "\u10ec\u10d4\u10da\u10d8",
                        yy: "%d \u10ec\u10da\u10d8\u10e1"
                    },
                    ordinal: function(e) {
                        return e
                    }
                }
            };
            i().extend(m());
            var De = null;

            function ke() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en",
                    t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                    n = u(e),
                    r = ve[n];
                return r || (r = ve.en), r = (0, _.A)((0, a.A)({}, r), {
                    formats: (0, a.A)({}, l, r.formats)
                }), i().locale(De, null, !t), t && (De = r), r
            }

            function be(e, t, n) {
                if (n) {
                    var a = ke(n, !1),
                        _ = t ? M(t, a) : r.L;
                    return i()(e).locale(a.name).format(_)
                }
                var s = t ? M(t, De) : r.L;
                return i()(e).format(s)
            }
            ke("en")
        },
        "09Dg": function(e) {
            e.exports = function() {
                "use strict";
                var e = 1e3,
                    t = 6e4,
                    n = 36e5,
                    r = "millisecond",
                    a = "second",
                    _ = "minute",
                    s = "hour",
                    i = "day",
                    o = "week",
                    m = "month",
                    d = "quarter",
                    u = "year",
                    l = "date",
                    c = "Invalid Date",
                    M = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    Y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    h = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ordinal: function(e) {
                            var t = ["th", "st", "nd", "rd"],
                                n = e % 100;
                            return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]"
                        }
                    },
                    p = function(e, t, n) {
                        var r = String(e);
                        return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e
                    },
                    f = {
                        s: p,
                        z: function(e) {
                            var t = -e.utcOffset(),
                                n = Math.abs(t),
                                r = Math.floor(n / 60),
                                a = n % 60;
                            return (t <= 0 ? "+" : "-") + p(r, 2, "0") + ":" + p(a, 2, "0")
                        },
                        m: function e(t, n) {
                            if (t.date() < n.date()) return -e(n, t);
                            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                a = t.clone().add(r, m),
                                _ = n - a < 0,
                                s = t.clone().add(r + (_ ? -1 : 1), m);
                            return +(-(r + (n - a) / (_ ? a - s : s - a)) || 0)
                        },
                        a: function(e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function(e) {
                            return {
                                M: m,
                                y: u,
                                w: o,
                                d: i,
                                D: l,
                                h: s,
                                m: _,
                                s: a,
                                ms: r,
                                Q: d
                            }[e] || String(e || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(e) {
                            return void 0 === e
                        }
                    },
                    L = "en",
                    y = {};
                y[L] = h;
                var v = "$isDayjsObject",
                    D = function(e) {
                        return e instanceof H || !(!e || !e[v])
                    },
                    k = function e(t, n, r) {
                        var a;
                        if (!t) return L;
                        if ("string" == typeof t) {
                            var _ = t.toLowerCase();
                            y[_] && (a = _), n && (y[_] = n, a = _);
                            var s = t.split("-");
                            if (!a && s.length > 1) return e(s[0])
                        } else {
                            var i = t.name;
                            y[i] = t, a = i
                        }
                        return !r && a && (L = a), a || !r && L
                    },
                    b = function(e, t) {
                        if (D(e)) return e.clone();
                        var n = "object" == typeof t ? t : {};
                        return n.date = e, n.args = arguments, new H(n)
                    },
                    g = f;
                g.l = k, g.i = D, g.w = function(e, t) {
                    return b(e, {
                        locale: t.$L,
                        utc: t.$u,
                        x: t.$x,
                        $offset: t.$offset
                    })
                };
                var H = function() {
                        function h(e) {
                            this.$L = k(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[v] = !0
                        }
                        var p = h.prototype;
                        return p.parse = function(e) {
                            this.$d = function(e) {
                                var t = e.date,
                                    n = e.utc;
                                if (null === t) return new Date(NaN);
                                if (g.u(t)) return new Date;
                                if (t instanceof Date) return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var r = t.match(M);
                                    if (r) {
                                        var a = r[2] - 1 || 0,
                                            _ = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, _)) : new Date(r[1], a, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, _)
                                    }
                                }
                                return new Date(t)
                            }(e), this.init()
                        }, p.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, p.$utils = function() {
                            return g
                        }, p.isValid = function() {
                            return !(this.$d.toString() === c)
                        }, p.isSame = function(e, t) {
                            var n = b(e);
                            return this.startOf(t) <= n && n <= this.endOf(t)
                        }, p.isAfter = function(e, t) {
                            return b(e) < this.startOf(t)
                        }, p.isBefore = function(e, t) {
                            return this.endOf(t) < b(e)
                        }, p.$g = function(e, t, n) {
                            return g.u(e) ? this[t] : this.set(n, e)
                        }, p.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, p.valueOf = function() {
                            return this.$d.getTime()
                        }, p.startOf = function(e, t) {
                            var n = this,
                                r = !!g.u(t) || t,
                                d = g.p(e),
                                c = function(e, t) {
                                    var a = g.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                                    return r ? a : a.endOf(i)
                                },
                                M = function(e, t) {
                                    return g.w(n.toDate()[e].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
                                },
                                Y = this.$W,
                                h = this.$M,
                                p = this.$D,
                                f = "set" + (this.$u ? "UTC" : "");
                            switch (d) {
                                case u:
                                    return r ? c(1, 0) : c(31, 11);
                                case m:
                                    return r ? c(1, h) : c(0, h + 1);
                                case o:
                                    var L = this.$locale().weekStart || 0,
                                        y = (Y < L ? Y + 7 : Y) - L;
                                    return c(r ? p - y : p + (6 - y), h);
                                case i:
                                case l:
                                    return M(f + "Hours", 0);
                                case s:
                                    return M(f + "Minutes", 1);
                                case _:
                                    return M(f + "Seconds", 2);
                                case a:
                                    return M(f + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, p.endOf = function(e) {
                            return this.startOf(e, !1)
                        }, p.$set = function(e, t) {
                            var n, o = g.p(e),
                                d = "set" + (this.$u ? "UTC" : ""),
                                c = (n = {}, n[i] = d + "Date", n[l] = d + "Date", n[m] = d + "Month", n[u] = d + "FullYear", n[s] = d + "Hours", n[_] = d + "Minutes", n[a] = d + "Seconds", n[r] = d + "Milliseconds", n)[o],
                                M = o === i ? this.$D + (t - this.$W) : t;
                            if (o === m || o === u) {
                                var Y = this.clone().set(l, 1);
                                Y.$d[c](M), Y.init(), this.$d = Y.set(l, Math.min(this.$D, Y.daysInMonth())).$d
                            } else c && this.$d[c](M);
                            return this.init(), this
                        }, p.set = function(e, t) {
                            return this.clone().$set(e, t)
                        }, p.get = function(e) {
                            return this[g.p(e)]()
                        }, p.add = function(r, d) {
                            var l, c = this;
                            r = Number(r);
                            var M = g.p(d),
                                Y = function(e) {
                                    var t = b(c);
                                    return g.w(t.date(t.date() + Math.round(e * r)), c)
                                };
                            if (M === m) return this.set(m, this.$M + r);
                            if (M === u) return this.set(u, this.$y + r);
                            if (M === i) return Y(1);
                            if (M === o) return Y(7);
                            var h = (l = {}, l[_] = t, l[s] = n, l[a] = e, l)[M] || 1,
                                p = this.$d.getTime() + r * h;
                            return g.w(p, this)
                        }, p.subtract = function(e, t) {
                            return this.add(-1 * e, t)
                        }, p.format = function(e) {
                            var t = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || c;
                            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                                a = g.z(this),
                                _ = this.$H,
                                s = this.$m,
                                i = this.$M,
                                o = n.weekdays,
                                m = n.months,
                                d = n.meridiem,
                                u = function(e, n, a, _) {
                                    return e && (e[n] || e(t, r)) || a[n].slice(0, _)
                                },
                                l = function(e) {
                                    return g.s(_ % 12 || 12, e, "0")
                                },
                                M = d || function(e, t, n) {
                                    var r = e < 12 ? "AM" : "PM";
                                    return n ? r.toLowerCase() : r
                                };
                            return r.replace(Y, (function(e, r) {
                                return r || function(e) {
                                    switch (e) {
                                        case "YY":
                                            return String(t.$y).slice(-2);
                                        case "YYYY":
                                            return g.s(t.$y, 4, "0");
                                        case "M":
                                            return i + 1;
                                        case "MM":
                                            return g.s(i + 1, 2, "0");
                                        case "MMM":
                                            return u(n.monthsShort, i, m, 3);
                                        case "MMMM":
                                            return u(m, i);
                                        case "D":
                                            return t.$D;
                                        case "DD":
                                            return g.s(t.$D, 2, "0");
                                        case "d":
                                            return String(t.$W);
                                        case "dd":
                                            return u(n.weekdaysMin, t.$W, o, 2);
                                        case "ddd":
                                            return u(n.weekdaysShort, t.$W, o, 3);
                                        case "dddd":
                                            return o[t.$W];
                                        case "H":
                                            return String(_);
                                        case "HH":
                                            return g.s(_, 2, "0");
                                        case "h":
                                            return l(1);
                                        case "hh":
                                            return l(2);
                                        case "a":
                                            return M(_, s, !0);
                                        case "A":
                                            return M(_, s, !1);
                                        case "m":
                                            return String(s);
                                        case "mm":
                                            return g.s(s, 2, "0");
                                        case "s":
                                            return String(t.$s);
                                        case "ss":
                                            return g.s(t.$s, 2, "0");
                                        case "SSS":
                                            return g.s(t.$ms, 3, "0");
                                        case "Z":
                                            return a
                                    }
                                    return null
                                }(e) || a.replace(":", "")
                            }))
                        }, p.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, p.diff = function(r, l, c) {
                            var M, Y = this,
                                h = g.p(l),
                                p = b(r),
                                f = (p.utcOffset() - this.utcOffset()) * t,
                                L = this - p,
                                y = function() {
                                    return g.m(Y, p)
                                };
                            switch (h) {
                                case u:
                                    M = y() / 12;
                                    break;
                                case m:
                                    M = y();
                                    break;
                                case d:
                                    M = y() / 3;
                                    break;
                                case o:
                                    M = (L - f) / 6048e5;
                                    break;
                                case i:
                                    M = (L - f) / 864e5;
                                    break;
                                case s:
                                    M = L / n;
                                    break;
                                case _:
                                    M = L / t;
                                    break;
                                case a:
                                    M = L / e;
                                    break;
                                default:
                                    M = L
                            }
                            return c ? M : g.a(M)
                        }, p.daysInMonth = function() {
                            return this.endOf(m).$D
                        }, p.$locale = function() {
                            return y[this.$L]
                        }, p.locale = function(e, t) {
                            if (!e) return this.$L;
                            var n = this.clone(),
                                r = k(e, t, !0);
                            return r && (n.$L = r), n
                        }, p.clone = function() {
                            return g.w(this.$d, this)
                        }, p.toDate = function() {
                            return new Date(this.valueOf())
                        }, p.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, p.toISOString = function() {
                            return this.$d.toISOString()
                        }, p.toString = function() {
                            return this.$d.toUTCString()
                        }, h
                    }(),
                    w = H.prototype;
                return b.prototype = w, [
                    ["$ms", r],
                    ["$s", a],
                    ["$m", _],
                    ["$H", s],
                    ["$W", i],
                    ["$M", m],
                    ["$y", u],
                    ["$D", l]
                ].forEach((function(e) {
                    w[e[1]] = function(t) {
                        return this.$g(t, e[0], e[1])
                    }
                })), b.extend = function(e, t) {
                    return e.$i || (e(t, H, b), e.$i = !0), b
                }, b.locale = k, b.isDayjs = D, b.unix = function(e) {
                    return b(1e3 * e)
                }, b.en = y[L], b.Ls = y, b.p = {}, b
            }()
        },
        "/I5v": function(e) {
            e.exports = function() {
                "use strict";
                var e = {
                    LTS: "h:mm:ss A",
                    LT: "h:mm A",
                    L: "MM/DD/YYYY",
                    LL: "MMMM D, YYYY",
                    LLL: "MMMM D, YYYY h:mm A",
                    LLLL: "dddd, MMMM D, YYYY h:mm A"
                };
                return function(t, n, r) {
                    var a = n.prototype,
                        _ = a.format;
                    r.en.formats = e, a.format = function(t) {
                        void 0 === t && (t = "YYYY-MM-DDTHH:mm:ssZ");
                        var n = this.$locale().formats,
                            r = function(t, n) {
                                return t.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(t, r, a) {
                                    var _ = a && a.toUpperCase();
                                    return r || n[a] || e[a] || n[_].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, t, n) {
                                        return t || n.slice(1)
                                    }))
                                }))
                            }(t, void 0 === n ? {} : n);
                        return _.call(this, r)
                    }
                }
            }()
        },
        BMA0: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => i
            });
            var r = n("M5j3"),
                a = n("DTvD"),
                _ = n.n(a),
                s = n("w/Qz");
            const i = function(e) {
                return _().createElement(s.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), _().createElement("path", {
                    d: "M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);
//# debugId=30daad15-5dd9-5075-b5f3-f15897f06531