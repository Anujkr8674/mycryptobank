"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3055b091-a991-5ea7-9d2e-79277a41676b")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [26], {
        zRna: (e, n, t) => {
            t.d(n, {
                A: () => r
            });
            var a = t("wIZF"),
                l = t("DTvD"),
                o = t.n(l),
                c = t("Y4uf");
            const r = function(e) {
                return o().createElement(c.A, (0, a.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z",
                    fill: "currentColor"
                }))
            }
        },
        SR26: (e, n, t) => {
            t.d(n, {
                A: () => r
            });
            var a = t("wIZF"),
                l = t("DTvD"),
                o = t.n(l),
                c = t("Y4uf");
            const r = function(e) {
                return o().createElement(c.A, (0, a.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        X4b0: (e, n, t) => {
            t.d(n, {
                A: () => r
            });
            var a = t("wIZF"),
                l = t("DTvD"),
                o = t.n(l),
                c = t("Y4uf");
            const r = function(e) {
                return o().createElement(c.A, (0, a.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            }
        },
        Hj7I: (e, n, t) => {
            t.d(n, {
                A: () => p
            });
            var a = t("wIZF"),
                l = t("DTvD"),
                o = t.n(l),
                c = t("O94r"),
                r = t.n(c),
                s = t("QFE7"),
                i = t("9xbI");
            const u = function(e) {
                var n = e.direction,
                    t = void 0 === n ? "left" : n,
                    c = e.children,
                    r = e.className,
                    s = e.onClose,
                    u = (e.visible, e.draggable, (0, a.__rest)(e, ["direction", "children", "className", "onClose", "visible", "draggable"])),
                    d = (0, l.useState)(!1),
                    m = d[0],
                    f = d[1],
                    v = (0, l.useState)({
                        x: 0,
                        y: 0
                    }),
                    _ = v[0],
                    C = v[1],
                    b = (0, l.useState)(0),
                    p = b[0],
                    g = b[1],
                    h = (0, l.useRef)(null),
                    k = (0, l.useMemo)((function() {
                        var e = "top" === t || "bottom" === t;
                        return {
                            isVertical: e,
                            getTransform: function(n) {
                                var t = "".concat(n, "px");
                                return "translate3d(".concat(e ? "0, ".concat(t) : "".concat(t, ", 0"), ", 0)")
                            },
                            getOffset: function(n) {
                                var a = e ? n.y - _.y : n.x - _.x;
                                switch (t) {
                                    case "top":
                                    case "left":
                                        return Math.min(a, 0);
                                    default:
                                        return Math.max(a, 0)
                                }
                            }
                        }
                    }), [t, _]),
                    w = k.isVertical,
                    E = k.getTransform,
                    y = k.getOffset,
                    N = (0, l.useCallback)((function(e, n) {
                        return Math.abs(e) / n
                    }), []),
                    A = (0, l.useCallback)((function() {
                        return {
                            top: "translate3d(0, -100%, 0)",
                            right: "translate3d(100%, 0, 0)",
                            bottom: "translate3d(0, 100%, 0)",
                            left: "translate3d(-100%, 0, 0)"
                        }[t]
                    }), [t]),
                    x = (0, l.useCallback)((function(e) {
                        if (!m) {
                            var n = e.touches[0];
                            f(!0), C({
                                x: n.pageX,
                                y: n.pageY
                            }), g(e.timeStamp), h.current && (h.current.style.transition = "none")
                        }
                    }), [m]),
                    T = (0, l.useCallback)((function(e) {
                        if (m && h.current) {
                            var n = e.touches[0],
                                t = {
                                    x: n.pageX,
                                    y: n.pageY
                                },
                                a = y(t);
                            h.current.style.transform = E(a)
                        }
                    }), [m, y, E]),
                    S = (0, l.useCallback)((function(e) {
                        if (m && h.current) {
                            var n = e.changedTouches[0],
                                t = {
                                    x: n.pageX,
                                    y: n.pageY
                                },
                                a = h.current.getBoundingClientRect(),
                                l = e.timeStamp - p;
                            h.current.style.transition = "";
                            var o = Math.abs(y(t)),
                                c = N(o, l);
                            o > (w ? a.height / 2 : a.width / 2) || c > 1.5 ? (h.current.style.transform = A(), null === s || void 0 === s || s()) : h.current.style.transform = "", f(!1)
                        }
                    }), [m, p, y, N, w, A, s]);
                return o().createElement(i.A, (0, a.__assign)({
                    ref: h,
                    className: r,
                    onTouchStart: x,
                    onTouchMove: T,
                    onTouchEnd: S
                }, u), c)
            };
            var d = t("97Bt"),
                m = t("lHGB"),
                f = t("STQw"),
                v = function(e) {
                    var n, t = e.direction,
                        l = e.className,
                        c = (0, a.__rest)(e, ["direction", "className"]),
                        s = (0, f.r)().prefixCls,
                        i = "".concat(s, "-drawer-handle"),
                        u = "".concat(i, "-icon"),
                        d = r()(i, ((n = {})["data-dir-".concat(t)] = !!t, n), l);
                    return o().createElement(m.Ay, (0, a.__assign)({}, {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "drawer handle"
                    }, c, {
                        className: d
                    }), o().createElement(m.Ay, {
                        className: u,
                        "aria-hidden": "true"
                    }))
                },
                _ = function(e) {
                    var n = e.direction,
                        t = void 0 === n ? "left" : n,
                        l = e.children,
                        c = e.onClose,
                        r = e.maskClz,
                        s = e.wrapClz,
                        i = (0, a.__rest)(e, ["direction", "children", "onClose", "maskClz", "wrapClz"]),
                        m = {
                            "aria-modal": !0,
                            role: "dialog",
                            "aria-label": e.title || "drawer"
                        };
                    return o().createElement(d.A, (0, a.__assign)({}, i, {
                        onClose: c,
                        className: r
                    }), o().createElement(u, (0, a.__assign)({}, m, {
                        direction: t,
                        className: s,
                        onClose: c
                    }), o().createElement(v, {
                        direction: t
                    }), l))
                };
            _.displayName = "Drawer";
            const C = _;
            var b = function(e) {
                var n, t = e.direction,
                    c = void 0 === t ? "left" : t,
                    i = e.className,
                    u = e.children,
                    v = e.size,
                    _ = void 0 === v ? "auto" : v,
                    b = e.once,
                    p = e.onVisibleChange,
                    g = e.draggable,
                    h = e.onClose,
                    k = (0, a.__rest)(e, ["direction", "className", "children", "size", "once", "onVisibleChange", "draggable", "onClose"]),
                    w = (0, f.r)().prefixCls,
                    E = "".concat(w, "-drawer"),
                    y = r()("".concat(E, "-wrap"), ((n = {})["data-size-".concat(_)] = "auto" !== _, n["data-dir-".concat(c)] = !!c, n["data-draggable"] = !!g, n)),
                    N = r()(E, i),
                    A = (0, s.d)({
                        fn: p,
                        time: 50
                    }).debounceFn,
                    x = (0, l.useCallback)((function() {
                        null === h || void 0 === h || h(), A(!1)
                    }), [h, A]),
                    T = (0, l.useCallback)((function() {
                        b && x()
                    }), [b, x]);
                if (g) return o().createElement(C, (0, a.__assign)({
                    onClose: x,
                    maskClz: N,
                    wrapClz: y
                }, e));
                var S = {
                    "aria-modal": !0,
                    role: "dialog",
                    "aria-label": e.title || "drawer"
                };
                return o().createElement(d.A, (0, a.__assign)({}, k, {
                    onClose: x,
                    className: N
                }), o().createElement(m.Ay, (0, a.__assign)({}, S, {
                    className: y,
                    children: u,
                    onClick: T
                })))
            };
            b.displayName = "Drawer";
            const p = b
        },
        "/5p5": (e, n, t) => {
            t.d(n, {
                A: () => A,
                Z: () => N
            });
            var a = t("wIZF"),
                l = t("DTvD"),
                o = t.n(l),
                c = t("hyZw"),
                r = t("H2//"),
                s = t("zOFj"),
                i = t("BkWY");
            const u = function(e) {
                var n = e.willClose,
                    t = e.closeCallback,
                    c = e.content,
                    r = (0, a.__rest)(e, ["willClose", "closeCallback", "content"]),
                    u = o().useState(!0),
                    d = u[0],
                    m = u[1],
                    f = (0, l.useCallback)((function() {
                        m(!1), setTimeout((function() {
                            t && t()
                        }), i.p)
                    }), [t]);
                return o().useEffect((function() {
                    n && f()
                }), [n, f]), o().createElement(s.Ay, (0, a.__assign)({}, r, {
                    visible: d,
                    onClose: f,
                    children: c
                }))
            };
            var d = t("O94r"),
                m = t.n(d),
                f = t("lHGB"),
                v = t("97Bt"),
                _ = t("STQw");
            const C = function(e) {
                var n = e.duration,
                    t = void 0 === n ? 3e3 : n,
                    l = e.visible,
                    r = e.onClose,
                    s = void 0 === r ? c.es : r,
                    i = e.children,
                    u = (0, a.__rest)(e, ["duration", "visible", "onClose", "children"]),
                    d = o().useRef(),
                    C = (0, _.r)().prefixCls,
                    b = m()("".concat(C, "-toast"), e.className);
                return o().useEffect((function() {
                    return t ? (d.current = setTimeout((function() {
                        l && s(), d.current = null
                    }), t), function() {
                        return clearTimeout(d.current)
                    }) : function() {}
                }), [l, t, s]), o().createElement(v.A, (0, a.__assign)({}, u, {
                    visible: l,
                    onClose: s,
                    className: b
                }), o().createElement(f.Ay, {
                    className: "".concat(C, "-toast-wrap"),
                    children: i
                }))
            };
            const b = function(e) {
                var n = e.willClose,
                    t = e.closeCallback,
                    c = e.content,
                    r = (0, a.__rest)(e, ["willClose", "closeCallback", "content"]),
                    s = o().useState(!0),
                    u = s[0],
                    d = s[1],
                    m = (0, l.useCallback)((function() {
                        d(!1), setTimeout((function() {
                            t && t()
                        }), i.p)
                    }), [t]);
                return o().useEffect((function() {
                    n && m()
                }), [n, m]), o().createElement(C, (0, a.__assign)({}, r, {
                    visible: u,
                    onClose: m,
                    children: c
                }))
            };
            var p = t("Hj7I");
            const g = function(e) {
                var n = e.willClose,
                    t = e.closeCallback,
                    c = e.direction,
                    r = void 0 === c ? "bottom" : c,
                    s = e.content,
                    u = (0, a.__rest)(e, ["willClose", "closeCallback", "direction", "content"]),
                    d = o().useState(!0),
                    m = d[0],
                    f = d[1],
                    v = (0, l.useCallback)((function() {
                        f(!1), setTimeout((function() {
                            t && t()
                        }), i.p)
                    }), [t]);
                return o().useEffect((function() {
                    n && v()
                }), [n, v]), o().createElement(p.A, (0, a.__assign)({}, u, {
                    direction: r,
                    visible: m,
                    onClose: v,
                    children: s
                }))
            };
            var h = t("0K3s");
            const k = function(e) {
                var n = e.className,
                    t = e.duration,
                    c = void 0 === t ? 3e3 : t,
                    r = e.willClose,
                    s = e.closeCallback,
                    u = (0, a.__rest)(e, ["className", "duration", "willClose", "closeCallback"]),
                    d = o().useState(!0),
                    m = d[0],
                    f = d[1],
                    v = o().useRef(),
                    _ = (0, l.useCallback)((function() {
                        f(!1), setTimeout((function() {
                            s && s()
                        }), i.p)
                    }), [s]);
                return o().useEffect((function() {
                    r && _()
                }), [r, _]), o().useEffect((function() {
                    return c ? (v.current = setTimeout((function() {
                        m && _(), v.current = null
                    }), c), function() {
                        return clearTimeout(v.current)
                    }) : function() {}
                }), [m, c, _]), o().createElement(i.A, {
                    className: n,
                    visible: m
                }, o().createElement(h.A, (0, a.__assign)({
                    closable: !0,
                    variant: "push"
                }, u, {
                    onClose: _
                })))
            };
            var w = function(e) {
                var n = e.placement,
                    t = e.offsetX,
                    a = e.offsetY,
                    l = n.split("-"),
                    o = l[0],
                    c = l[1],
                    r = c ? 0 : "50%",
                    s = a,
                    i = c ? t : "50%";
                return ("end" === c ? {
                    top: {
                        transform: "translate(-".concat(r, ", 0)"),
                        top: s,
                        right: i
                    },
                    bottom: {
                        transform: "translate(-".concat(r, ", 0)"),
                        bottom: s,
                        right: i
                    }
                } : {
                    top: {
                        transform: "translate(-".concat(r, ", 0)"),
                        top: s,
                        left: i
                    },
                    bottom: {
                        transform: "translate(-".concat(r, ", 0)"),
                        bottom: s,
                        left: i
                    }
                })[o]
            };
            const E = function(e) {
                var n = e.offsetX,
                    t = void 0 === n ? 16 : n,
                    l = e.offsetY,
                    c = void 0 === l ? 16 : l,
                    r = e.notifies,
                    s = (0, _.r)().prefixCls,
                    i = "".concat(s, "-layer-notifies");
                if (!r.length) return null;
                var u = r.reduce((function(e, n) {
                    var t = n.uid,
                        l = n.placement,
                        c = void 0 === l ? "top-end" : l,
                        r = (0, a.__rest)(n, ["uid", "placement"]);
                    return e[c].push(o().createElement(k, (0, a.__assign)({
                        key: t
                    }, r))), e
                }), {
                    "top-start": [],
                    top: [],
                    "top-end": [],
                    "bottom-start": [],
                    bottom: [],
                    "bottom-end": []
                });
                return o().createElement(f.Ay, {
                    className: "".concat(i, "-wrap")
                }, Object.keys(u).map((function(e) {
                    var n, a = e.split("-"),
                        l = (a[0], a[1]),
                        r = u[e],
                        s = m()(i, ((n = {})["data-pos-".concat(l)] = l, n));
                    return r.length ? o().createElement(f.Ay, {
                        key: e,
                        className: s,
                        children: r,
                        style: w({
                            placement: e,
                            offsetX: t,
                            offsetY: c
                        })
                    }) : null
                })))
            };
            var y = (0, l.createContext)({
                    openModal: c.es,
                    closeModal: c.es,
                    openToast: c.es,
                    closeToast: c.es,
                    openDrawer: c.es,
                    closeDrawer: c.es,
                    pushNotify: c.es,
                    closeNotify: c.es
                }),
                N = function() {
                    return o().useContext(y)
                };
            const A = function(e) {
                var n = e.children,
                    t = e.notifiesPosition,
                    c = (0, l.useState)(),
                    s = c[0],
                    i = c[1],
                    d = (0, l.useState)(),
                    m = d[0],
                    f = d[1],
                    v = (0, l.useState)(),
                    _ = v[0],
                    C = v[1],
                    p = (0, l.useState)([]),
                    h = p[0],
                    k = p[1],
                    w = {};
                return w.openModal = (0, l.useCallback)((function(e) {
                    var n = e.closeCallback;
                    i((0, a.__assign)((0, a.__assign)({}, e), {
                        closeCallback: function() {
                            i(null), n && n()
                        },
                        willClose: !1
                    }))
                }), []), w.closeModal = (0, l.useCallback)((function() {
                    i((function(e) {
                        return e ? (0, a.__assign)((0, a.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), w.openToast = (0, l.useCallback)((function(e) {
                    var n = e.closeCallback;
                    f((0, a.__assign)((0, a.__assign)({}, e), {
                        closeCallback: function() {
                            f(null), n && n()
                        },
                        willClose: !1
                    }))
                }), []), w.closeToast = (0, l.useCallback)((function() {
                    f((function(e) {
                        return e ? (0, a.__assign)((0, a.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), w.openDrawer = (0, l.useCallback)((function(e) {
                    var n = e.closeCallback;
                    C((0, a.__assign)((0, a.__assign)({}, e), {
                        closeCallback: function() {
                            C(null), n && n()
                        },
                        willClose: !1
                    }))
                }), []), w.closeDrawer = (0, l.useCallback)((function() {
                    C((function(e) {
                        return e ? (0, a.__assign)((0, a.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), w.pushNotify = (0, l.useCallback)((function(e) {
                    var n = (0, r.uR)(8),
                        t = (0, a.__assign)((0, a.__assign)({}, e), {
                            uid: n,
                            closeCallback: function() {
                                e.closeCallback && e.closeCallback(), k((function(e) {
                                    return e.filter((function(e) {
                                        return e.uid !== n
                                    }))
                                }))
                            },
                            willClose: !1
                        });
                    return k((function(e) {
                        return (0, a.__spreadArray)((0, a.__spreadArray)([], e, !0), [t], !1)
                    })), t.uid
                }), []), w.closeNotify = (0, l.useCallback)((function(e) {
                    k((function(n) {
                        return n.map((function(n) {
                            return n.uid === e ? (0, a.__assign)((0, a.__assign)({}, n), {
                                willClose: !0
                            }) : n
                        }))
                    }))
                }), []), o().createElement(y.Provider, {
                    value: w
                }, n, m && o().createElement(b, (0, a.__assign)({}, m)), s && o().createElement(u, (0, a.__assign)({}, s)), _ && o().createElement(g, (0, a.__assign)({}, _)), o().createElement(E, (0, a.__assign)({
                    notifies: h
                }, t)))
            }
        },
        "97Bt": (e, n, t) => {
            t.d(n, {
                A: () => _
            });
            var a = t("wIZF"),
                l = t("DTvD"),
                o = t.n(l),
                c = t("hTvQ"),
                r = t.n(c),
                s = t("hyZw"),
                i = t("qrIQ"),
                u = t("O94r"),
                d = t.n(u),
                m = t("BkWY"),
                f = t("STQw"),
                v = t("lHGB");
            const _ = function(e) {
                var n, t = e.visible,
                    l = e.inner,
                    c = e.maskClose,
                    u = void 0 === c || c,
                    _ = e.needSEO,
                    C = e.enablePortal,
                    b = e.portalNode,
                    p = e.scrollFree,
                    g = e.wrapperProps,
                    h = e.onClose,
                    k = void 0 === h ? s.es : h,
                    w = e.enableScrollSpace,
                    E = void 0 === w || w,
                    y = (0, f.r)(),
                    N = y.prefixCls,
                    A = y.isRTL,
                    x = "".concat(N, "-mask"),
                    T = d()(x, ((n = {})["".concat(x, "-rtl")] = !!A, n["".concat(x, "-inner")] = !!l, n), e.className);
                o().useEffect((function() {
                    return i.lq || l || p || !(null === document || void 0 === document ? void 0 : document.body) ? s.es : (document.body.style.overflow = t ? "hidden" : "auto", document.body.classList.toggle("".concat(N, "-mask-body"), E && t && document.body.scrollHeight > window.innerHeight), function() {
                        (null === document || void 0 === document ? void 0 : document.body) && (document.body.style.overflow = "auto", document.body.classList.remove("".concat(N, "-mask-body")))
                    })
                }), [t, l, p, N, E]);
                var S = o().useCallback((function(e) {
                    C || e.stopPropagation();
                    var n = e.target,
                        t = e.currentTarget,
                        a = i.lq ? n.id === t.id : n === t;
                    u && a && k()
                }), [k, u, C]);
                var z = o().createElement(m.A, {
                        className: T,
                        needSEO: _,
                        visible: t,
                        onClick: S,
                        children: e.children
                    }),
                    D = g ? o().createElement(v.Ay, (0, a.__assign)({}, g), z) : z;
                return !i.lq && C ? r().createPortal(D, b instanceof HTMLElement ? b : document.body) : D
            }
        },
        zOFj: (e, n, t) => {
            t.d(n, {
                Ay: () => b
            });
            var a = t("wIZF"),
                l = t("DTvD"),
                o = t.n(l),
                c = t("O94r"),
                r = t.n(c),
                s = t("lHGB"),
                i = t("97Bt"),
                u = t("STQw"),
                d = t("Y4uf");
            const m = function(e) {
                return o().createElement(d.A, (0, a.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            };
            var f = t("X4b0"),
                v = t("hyZw"),
                _ = t("Hj7I"),
                C = function(e) {
                    var n, t = e.children,
                        l = e.className,
                        c = e.responsive,
                        d = e.direction,
                        m = void 0 === d ? "bottom" : d,
                        f = e.modalSize,
                        v = void 0 === f ? "small" : f,
                        C = (0, a.__rest)(e, ["children", "className", "responsive", "direction", "modalSize"]),
                        b = (0, u.r)(),
                        p = b.prefixCls,
                        g = b.isMobile,
                        h = "".concat(p, "-modal"),
                        k = r()(h, l),
                        w = r()("".concat(h, "-wrap"), ((n = {})["data-size-".concat(v)] = !!v, n));
                    if (c && g) return o().createElement(_.A, (0, a.__assign)({}, C, {
                        direction: m,
                        className: l,
                        children: t
                    }));
                    var E = {
                        role: "dialog",
                        tabIndex: 0,
                        "aria-modal": !0,
                        "aria-label": C["aria-label"] || "modal"
                    };
                    return o().createElement(i.A, (0, a.__assign)({}, C, {
                        className: k
                    }), o().createElement(s.Ay, (0, a.__assign)({}, E, {
                        className: w,
                        children: t
                    })))
                };
            C.Header = function(e) {
                var n, t, l = e.showPre,
                    c = e.prev,
                    i = e.onPreClick,
                    d = void 0 === i ? v.es : i,
                    _ = e.showNext,
                    C = e.next,
                    b = e.onNextClick,
                    p = void 0 === b ? v.es : b,
                    g = (0, a.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick"]),
                    h = (0, u.r)().prefixCls,
                    k = "".concat(h, "-modal-header"),
                    w = r()(k, ((n = {})["".concat(k, "-pre")] = !!l, n["".concat(k, "-pre-hidden")] = "hidden" === l, n), e.className);
                return l && void 0 === c && (c = o().createElement(m, {
                    name: "ArrowLeftF",
                    color: "PrimaryText"
                })), o().createElement(s.Ay, (0, a.__assign)({}, g, {
                    className: w
                }), l ? o().createElement(s.Ay, {
                    className: r()("".concat(k, "-prev")),
                    onClick: d,
                    children: c,
                    role: "button",
                    "aria-label": "Previous"
                }) : null, o().createElement(s.Ay, {
                    className: "".concat(k, "-main"),
                    children: e.children
                }), _ ? o().createElement(s.Ay, {
                    className: r()("".concat(k, "-next"), (t = {}, t["".concat(k, "-next-hidden")] = "hidden" === _, t)),
                    onClick: p,
                    children: C || o().createElement(f.A, {
                        name: "CloseF",
                        color: "PrimaryText"
                    }),
                    role: "button",
                    "aria-label": C ? "Next" : "Close"
                }) : null)
            }, C.Content = function(e) {
                var n = (0, u.r)().prefixCls,
                    t = "".concat(n, "-modal-content"),
                    l = r()(t, e.className);
                return o().createElement(s.Ay, (0, a.__assign)({}, e, {
                    className: l
                }))
            }, C.Footer = function(e) {
                var n, t = e.layout,
                    l = (0, a.__rest)(e, ["layout"]),
                    c = (0, u.r)().prefixCls,
                    i = "".concat(c, "-modal-footer"),
                    d = r()(i, ((n = {})["".concat(i, "-").concat(t)] = !!t, n), l.className);
                return o().createElement(s.Ay, (0, a.__assign)({}, l, {
                    className: d
                }))
            };
            const b = C
        },
        "0K3s": (e, n, t) => {
            t.d(n, {
                A: () => _
            });
            var a = t("wIZF"),
                l = t("DTvD"),
                o = t.n(l),
                c = t("X0Bn"),
                r = t("SR26"),
                s = t("zRna"),
                i = t("X4b0"),
                u = t("O94r"),
                d = t.n(u),
                m = t("lHGB"),
                f = t("STQw"),
                v = {
                    error: o().createElement(c.A, {
                        name: "CircledCloseF",
                        color: "error"
                    }),
                    warn: o().createElement(r.A, {
                        name: "CircledWarningF",
                        color: "primaryHover"
                    }),
                    success: o().createElement(s.A, {
                        name: "CircledCheckmarkF",
                        color: "success"
                    }),
                    push: o().createElement(s.A, {
                        name: "CircledCheckmarkF",
                        color: "success"
                    })
                };
            const _ = function(e) {
                var n, t, c = e.variant,
                    r = void 0 === c ? "primary" : c,
                    s = e.sz,
                    u = void 0 === s ? "middle" : s,
                    _ = e.icon,
                    C = e.title,
                    b = e.message,
                    p = e.closable,
                    g = e.onClose,
                    h = e.closeIcon,
                    k = e.minWidth,
                    w = (0, a.__rest)(e, ["variant", "sz", "icon", "title", "message", "closable", "onClose", "closeIcon", "minWidth"]),
                    E = (0, f.r)(),
                    y = E.prefixCls,
                    N = E.isRTL,
                    A = "".concat(y, "-notification"),
                    x = d()(A, ((n = {})["".concat(A, "-rtl")] = !!N, n["".concat(A, "__").concat(r)] = !!r, n["data-size-".concat(u)] = !!u, n["".concat(A, "-mw")] = !!k, n), e.className),
                    T = d()("".concat(A, "-content-message"), {
                        "data-push-message": "push" === r && !C
                    });
                if (!C && !b) return null;
                var S = !1 === _ ? null : (0, l.isValidElement)(_) ? _ : v[r],
                    z = (0, l.useMemo)((function() {
                        var e;
                        return p ? h ? o().cloneElement(h, {
                            color: "IconNormal",
                            className: d()("".concat(A, "-close"), null === (e = null === h || void 0 === h ? void 0 : h.props) || void 0 === e ? void 0 : e.className),
                            onClick: g
                        }) : o().createElement(i.A, {
                            name: "CloseF",
                            color: "IconNormal",
                            className: "".concat(A, "-close"),
                            onClick: g
                        }) : null
                    }), [A, g, h, p]);
                return o().createElement(m.Ay, (0, a.__assign)({}, w, {
                    className: x
                }), !!S && o().cloneElement(S, {
                    className: d()("".concat(A, "-prefix"), null === (t = null === S || void 0 === S ? void 0 : S.props) || void 0 === t ? void 0 : t.className)
                }), o().createElement(m.Ay, {
                    className: d()("".concat(A, "-content"), {
                        closable: p
                    })
                }, !!C && o().createElement(m.Ay, {
                    className: "".concat(A, "-content-title"),
                    children: C
                }), !!b && o().createElement(m.Ay, {
                    className: T,
                    children: b
                }), z))
            }
        },
        "0BMk": () => {}
    }
]);
//# debugId=3055b091-a991-5ea7-9d2e-79277a41676b