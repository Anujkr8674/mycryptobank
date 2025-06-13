"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1d3943e2-30ff-5b78-9d0a-33e36d2f1401")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [676], {
        "7+bj": (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                l = n("Y4uf");
            const i = function(e) {
                return o().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        hEoe: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                l = n("Y4uf");
            const i = function(e) {
                return o().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        Mtrz: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                l = n("Y4uf");
            const i = function(e) {
                return o().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        LcZo: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                l = n("Y4uf");
            const i = function(e) {
                return o().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.11 11.824l-3.888 3.889-1.768-1.768 5.657-5.657 1.768 1.768 3.889 3.89L16 15.712l-3.89-3.89z",
                    fill: "currentColor"
                }))
            }
        },
        yuts: (e, t, n) => {
            n.d(t, {
                A: () => i
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                l = n("lHGB");
            const i = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.state = {
                        hasError: !1
                    }, t.resetErrorBoundary = function() {
                        var e = t.props.onReset,
                            n = t.state,
                            r = n.error,
                            a = n.info;
                        e && e(r, null === a || void 0 === a ? void 0 : a.componentStack), t.setState({
                            hasError: !1
                        })
                    }, t
                }
                return (0, r.__extends)(t, e), t.getDerivedStateFromError = function() {
                    return {
                        hasError: !0
                    }
                }, t.prototype.componentDidCatch = function(e, t) {
                    var n = this.props,
                        r = n.name,
                        a = n.track,
                        o = n.onError;
                    o && o(e, null === t || void 0 === t ? void 0 : t.componentStack), a && a("widget_error", {
                        widget: r
                    }), this.setState({
                        error: e,
                        info: t,
                        hasError: !0
                    })
                }, t.prototype.componentDidMount = function() {
                    var e = this.props.onComponentMounting;
                    e && e()
                }, t.prototype.componentWillUnmount = function() {
                    var e = this.props.onUnmount,
                        t = this.state,
                        n = t.error,
                        r = t.info;
                    e && e(n, null === r || void 0 === r ? void 0 : r.componentStack)
                }, t.prototype.render = function() {
                    var e = this.state,
                        t = e.error,
                        n = e.info,
                        a = e.hasError,
                        i = this.props,
                        s = i.name,
                        c = i.fallbackRender,
                        u = i.FallbackComponent,
                        d = i.fallback;
                    if (a) {
                        var f = {
                            error: t,
                            componentStack: null === n || void 0 === n ? void 0 : n.componentStack,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        return o().isValidElement(d) ? d : "function" === typeof c ? c(f) : "function" === typeof u ? o().createElement(u, (0, r.__assign)({}, f)) : o().createElement(l.Ay, null, "".concat(s || "Something", " went wrong."))
                    }
                    return this.props.children
                }, t
            }(o().Component)
        },
        kl3W: (e, t, n) => {
            n.d(t, {
                A: () => g
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                l = n("hEoe"),
                i = n("Mtrz"),
                s = n("hyZw"),
                c = n("O94r"),
                u = n.n(c),
                d = n("lHGB");
            const f = (0, a.forwardRef)((function(e, t) {
                var n = e.getPageHref,
                    l = e.children,
                    i = (0, r.__rest)(e, ["getPageHref", "children"]),
                    s = o().useMemo((function() {
                        if (n) return n(l)
                    }), [n, l]);
                return (0, a.createElement)("a", (0, r.__assign)((0, r.__assign)({}, i), {
                    children: l,
                    href: s,
                    ref: t
                }))
            }));
            var v = n("STQw"),
                h = "0".repeat(5).split("").map((function(e, t) {
                    return t
                })),
                m = h.slice(-1)[0],
                p = ["seqPre", "seqNext"],
                b = {
                    ChevronLeftF: l.A,
                    ChevronRightF: i.A
                };
            const g = function(e) {
                var t = e.current,
                    n = e.total,
                    l = e.onChange,
                    i = void 0 === l ? s.es : l,
                    c = e.abbreviateThreshold,
                    g = void 0 === c ? 10 : c,
                    y = e.getPageHref,
                    _ = (0, r.__rest)(e, ["current", "total", "onChange", "abbreviateThreshold", "getPageHref"]),
                    w = (0, v.r)(),
                    E = w.prefixCls,
                    S = w.isRTL,
                    k = "".concat(E, "-pagination"),
                    A = 1 === t,
                    N = S ? "ChevronRightF" : "ChevronLeftF",
                    C = A ? "line" : "textSecondary",
                    T = u()("".concat(k, "-prev"), {
                        disabled: A
                    }),
                    z = t === n,
                    x = S ? "ChevronLeftF" : "ChevronRightF",
                    M = z ? "line" : "textSecondary",
                    R = u()("".concat(k, "-next"), {
                        disabled: z
                    }),
                    P = o().useMemo((function() {
                        return function(e) {
                            var t = e.current,
                                n = e.total,
                                r = e.threshold;
                            if (n <= r) return "0".repeat(n).split("").map((function(e, t) {
                                return t + 1
                            }));
                            var a = n - 2,
                                o = t <= m ? h.map((function(e) {
                                    return 1 + e
                                })) : [1, p[0]];
                            return [t > 2 && t < a ? h.map((function(e) {
                                return Math.max(1, t + e - 2)
                            })) : [], t >= n - m ? h.map((function(e) {
                                return n - e
                            })).reverse() : [p[1], n]].reduce((function(e, t) {
                                return e.concat(t.filter((function(t) {
                                    return -1 === e.indexOf(t)
                                })))
                            }), o)
                        }({
                            current: t,
                            total: n,
                            threshold: g
                        })
                    }), [t, n, g]),
                    L = (0, a.useCallback)((function(e, t) {
                        e.preventDefault(), i(t)
                    }), [i]);
                return o().createElement(d.Ay, (0, r.__assign)({}, _, {
                    className: u()(k, e.className)
                }), o().createElement(d.Ay, {
                    className: T,
                    onClick: function(e) {
                        return A || L(e, t - 1)
                    },
                    "aria-disabled": A
                }, (0, a.createElement)(b[N], {
                    name: N,
                    color: C
                })), o().createElement(d.Ay, {
                    className: "".concat(k, "-items")
                }, P.map((function(e) {
                    var n = p.indexOf(e) > -1,
                        r = u()("".concat(k, "-item"), n ? "abbreviate" : {
                            active: t === e
                        });
                    return n ? o().createElement(d.Ay, {
                        key: e,
                        className: r,
                        children: "..."
                    }) : o().createElement(f, {
                        key: e,
                        className: r,
                        children: e,
                        onClick: function(t) {
                            return L(t, e)
                        },
                        getPageHref: y,
                        "aria-current": t === e ? "page" : void 0
                    })
                }))), o().createElement(d.Ay, {
                    className: R,
                    onClick: function(e) {
                        return z || L(e, t + 1)
                    },
                    "aria-disabled": z
                }, (0, a.createElement)(b[x], {
                    name: x,
                    color: M
                })))
            }
        },
        KChd: (e, t, n) => {
            n.d(t, {
                A: () => z
            });
            var r = n("wIZF"),
                a = n("DTvD"),
                o = n.n(a),
                l = n("W3Ja"),
                i = n("O94r"),
                s = n.n(i),
                c = n("lHGB"),
                u = n("STQw"),
                d = function(e) {
                    var t, n = e.variant,
                        a = void 0 === n ? "number" : n,
                        l = e.theme,
                        i = e.label,
                        d = e.className,
                        f = e.sz,
                        v = void 0 === f ? "md" : f,
                        h = (0, r.__rest)(e, ["variant", "theme", "label", "className", "sz"]),
                        m = (0, u.r)(),
                        p = m.prefixCls,
                        b = m.isRTL,
                        g = "".concat(p, "-badge"),
                        y = s()(g, ((t = {})["".concat(g, "-rtl")] = !!b, t["".concat(g, "__").concat(a)] = !!a, t["data-theme-".concat(l)] = !!l, t["data-size-".concat(v)] = !!v, t)),
                        _ = /^dot/i.test(a);
                    return o().createElement(c.Ay, (0, r.__assign)({}, h, {
                        className: s()("".concat(g, "-wrap"), d)
                    }), e.children, o().createElement(c.Ay, {
                        className: y,
                        children: !_ && i
                    }))
                };
            d.displayName = "Badge";
            const f = d;
            var v = function(e) {
                var t, n = e.variant,
                    a = e.subVariant,
                    l = e.size,
                    i = e.active,
                    d = e.fontSizeType,
                    v = e.badgeProps,
                    h = e.tabKey,
                    m = (0, r.__rest)(e, ["variant", "subVariant", "size", "active", "fontSizeType", "badgeProps", "tabKey"]),
                    p = (0, u.r)(),
                    b = p.prefixCls,
                    g = p.isRTL,
                    y = "".concat(b, "-tab"),
                    _ = s()(y, ((t = {})["".concat(y, "-rtl")] = !!g, t["".concat(y, "__").concat(n)] = !!n, t["".concat(y, "__").concat(n, "__").concat(a)] = !!n && !!a, t["".concat(y, "-badge")] = !!v, t["data-size-".concat(l)] = !!l, t["data-font-".concat(d)] = !!d, t.active = !!i, t), e.className),
                    w = s()("".concat(y, "-badge-wrap"), null === v || void 0 === v ? void 0 : v.className),
                    E = {
                        role: "tab",
                        "aria-selected": !!i
                    };
                return v ? o().createElement(f, (0, r.__assign)({
                    sz: "sm",
                    variant: "string"
                }, v, {
                    className: w,
                    "data-tab-key": h
                }), o().createElement(c.Ay, (0, r.__assign)({}, E, m, {
                    className: _
                }))) : o().createElement(c.Ay, (0, r.__assign)({}, E, m, {
                    className: _,
                    "data-tab-key": h
                }))
            };
            v.__name = "Tab", v.displayName = "Tab";
            const h = v;
            var m = n("eh2c"),
                p = n("OKx2"),
                b = n("qrIQ"),
                g = n("hEoe"),
                y = n("Mtrz"),
                _ = function(e) {
                    var t = e.showSlideMasks,
                        n = e.showSlideArrow,
                        r = e.maskVisible,
                        l = e.arrowVisible,
                        i = e.tabsHeight,
                        d = e.onArrowClick,
                        f = (0, u.r)().prefixCls,
                        v = "".concat(f, "-tab-list-shadow"),
                        h = "".concat(f, "-tab-list-arrow");
                    if (!t && !n) return null;
                    var m = (0, a.useMemo)((function() {
                            return o().createElement(o().Fragment, null, r.left && o().createElement(c.Ay, {
                                className: s()(v, "".concat(v, "-left")),
                                style: {
                                    height: i
                                },
                                "aria-hidden": "true"
                            }), r.right && o().createElement(c.Ay, {
                                className: s()(v, "".concat(v, "-right")),
                                style: {
                                    height: i
                                },
                                "aria-hidden": "true"
                            }))
                        }), [r, i]),
                        p = (0, a.useMemo)((function() {
                            return o().createElement(o().Fragment, null, l.left && o().createElement(g.A, {
                                color: "IconNormal",
                                className: s()(h, "".concat(h, "-left")),
                                onClick: function() {
                                    return null === d || void 0 === d ? void 0 : d("prev")
                                },
                                style: {
                                    height: i
                                },
                                role: "button",
                                "aria-label": "Scroll tabs left",
                                tabIndex: 0
                            }), l.right && o().createElement(y.A, {
                                color: "IconNormal",
                                className: s()(h, "".concat(h, "-right")),
                                onClick: function() {
                                    return null === d || void 0 === d ? void 0 : d("next")
                                },
                                style: {
                                    height: i
                                },
                                role: "button",
                                "aria-label": "Scroll tabs right",
                                tabIndex: 0
                            }))
                        }), [l, i, d]);
                    return o().createElement(o().Fragment, null, t && m, n && p)
                };
            _.displayName = "TabsEdge";
            const w = _;
            var E = (0, a.forwardRef)((function(e, t) {
                var n, l = e.variant,
                    i = e.subVariant,
                    d = e.size,
                    f = e.selectedIndex,
                    v = e.onTabClick,
                    h = e.children,
                    g = e.fontSizeType,
                    y = e.gap,
                    _ = e.showSlideMasks,
                    E = e.showSlideArrow,
                    S = e.suffix,
                    k = (0, r.__rest)(e, ["variant", "subVariant", "size", "selectedIndex", "onTabClick", "children", "fontSizeType", "gap", "showSlideMasks", "showSlideArrow", "suffix"]),
                    A = (0, a.useRef)(null);
                (0, a.useImperativeHandle)(t, (function() {
                    return A.current
                }), []);
                var N = (0, u.r)().prefixCls,
                    C = "".concat(N, "-tab-list"),
                    T = s()(C, ((n = {})["".concat(C, "__").concat(l)] = !!l, n["data-size-".concat(d)] = !!d, n["data-font-".concat(g)] = !!g, n), e.className),
                    z = o().useState({
                        left: !1,
                        right: !1
                    }),
                    x = z[0],
                    M = z[1],
                    R = o().useState({
                        left: !1,
                        right: !1
                    }),
                    P = R[0],
                    L = R[1],
                    I = o().useState(0),
                    D = I[0],
                    F = I[1],
                    B = (0, a.useCallback)((function(e) {
                        var t = e.containerRef;
                        if (t && t.current) {
                            var n = t.current,
                                r = n.scrollLeft,
                                a = n.scrollWidth,
                                o = n.clientWidth;
                            M && M({
                                right: a > Math.round(o + r),
                                left: r > 0
                            }), L && L({
                                right: a > Math.round(o + r),
                                left: r > 0
                            })
                        }
                    }), [M, L]),
                    V = (0, m.sg)((function() {
                        null === B || void 0 === B || B({
                            containerRef: A
                        })
                    }), 500),
                    O = (0, a.useCallback)((function(e) {
                        if (A.current) {
                            var t = A.current,
                                n = t.scrollLeft,
                                r = t.children,
                                a = Array.from(r).map((function(e) {
                                    return e.offsetLeft
                                })),
                                o = function(e) {
                                    return function(t) {
                                        return function(n) {
                                            var r, a = t.findIndex((function(e) {
                                                return e >= n
                                            }));
                                            return r = "next" === e ? Math.min(a + 4, t.length - 1) : Math.max(a - 4, 0), t[r] - n
                                        }
                                    }
                                }(e)(a)(n);
                            (0, p.HN)(A.current, o, 0, 300), null === B || void 0 === B || B({
                                containerRef: A
                            })
                        }
                    }), [B]),
                    H = (0, a.useMemo)((function() {
                        return "vertical" === l || "buySell" === l ? null : o().createElement(w, {
                            showSlideMasks: _,
                            showSlideArrow: E,
                            maskVisible: x,
                            arrowVisible: P,
                            tabsHeight: D,
                            onArrowClick: O
                        })
                    }), [l, _, E, x, P, D, O]);
                (0, a.useEffect)((function() {
                    if (A.current) {
                        var e = A.current.clientHeight;
                        F(e)
                    }
                }), [F]), (0, a.useEffect)((function() {
                    var e = A.current;
                    if (!b.lq && e instanceof Element) {
                        var t = null;
                        if ("number" !== typeof f || isNaN(f) ? "string" === typeof f && (t = Array.from(e.childNodes).find((function(e) {
                                return e.getAttribute("data-tab-key") === f
                            }))) : t = e.childNodes[f], t) {
                            if ("vertical" === l) {
                                var n = t.getBoundingClientRect(),
                                    r = n.top,
                                    a = n.height,
                                    o = e.getBoundingClientRect(),
                                    i = o.top,
                                    s = -(o.height / 2 - a / 2 - r + i);
                                (0, p.HN)(e, 0, s, 500)
                            } else if ("buySell" !== l) {
                                var c = t.getBoundingClientRect(),
                                    u = c.left,
                                    d = c.width,
                                    v = e.getBoundingClientRect(),
                                    h = v.left;
                                s = -(v.width / 2 - d / 2 - u + h);
                                (0, p.HN)(e, s, 0, 500)
                            }
                            null === B || void 0 === B || B({
                                containerRef: A
                            })
                        }
                    }
                }), [f, l, B]);
                var K = o().Children.toArray(h).map((function(e, t) {
                    var n, a, s;
                    if (!o().isValidElement(e)) return null;
                    if ("Tab" !== (null === (n = e.type) || void 0 === n ? void 0 : n.__name)) return null;
                    var c = "number" === typeof f ? f === t : e.props.tabKey === f,
                        u = {
                            id: "".concat(N, "-tab-").concat((null === (a = e.props) || void 0 === a ? void 0 : a.tabKey) || t),
                            "aria-controls": "".concat(N, "-tab-pane-").concat((null === (s = e.props) || void 0 === s ? void 0 : s.tabKey) || t),
                            tabIndex: c ? 0 : -1
                        };
                    return o().cloneElement(e, (0, r.__assign)((0, r.__assign)({
                        size: d,
                        variant: l,
                        subVariant: i,
                        fontSizeType: g,
                        active: c,
                        onClick: function() {
                            var n;
                            return v && v(t, null === (n = e.props) || void 0 === n ? void 0 : n.tabKey)
                        }
                    }, u), e.props))
                })).filter(Boolean);
                "buySell" === l && (K = K.slice(0, 2));
                var W = {
                        role: "tablist",
                        "aria-orientation": "vertical" === l ? "vertical" : "horizontal"
                    },
                    Z = (0, a.useMemo)((function() {
                        return o().createElement(o().Fragment, null, o().createElement(c.Ay, (0, r.__assign)({}, W, k, {
                            className: T,
                            style: (0, r.__assign)({
                                gap: y
                            }, k.style),
                            ref: A,
                            onScroll: function() {
                                return V()
                            }
                        }), K), H)
                    }), [K, T, y, k, H, A, l]);
                return S ? o().createElement(c.Ay, {
                    className: "".concat(C, "-wrapper")
                }, o().createElement(c.Ay, {
                    className: "".concat(C, "-content")
                }, Z), o().createElement(c.Ay, {
                    className: "".concat(C, "-suffix")
                }, S)) : Z
            }));
            E.displayName = "TabList";
            const S = E;
            var k = function(e) {
                e.tabNode;
                var t, n = e.active,
                    l = e.lazy,
                    i = e.children,
                    d = (e.tabKey, e.badgeProps, e.tabProps, (0, r.__rest)(e, ["tabNode", "active", "lazy", "children", "tabKey", "badgeProps", "tabProps"])),
                    f = (0, a.useState)(!l || n),
                    v = f[0],
                    h = f[1],
                    m = (0, u.r)(),
                    p = m.prefixCls,
                    b = m.isRTL,
                    g = "".concat(p, "-tab-pane"),
                    y = s()(g, ((t = {})["".concat(g, "-rtl")] = !!b, t.active = !!n, t), e.className);
                (0, a.useEffect)((function() {
                    return h((function(e) {
                        return e || n
                    }))
                }), [n]);
                var _ = n ? {} : {
                        display: "none"
                    },
                    w = {
                        role: "tabpanel",
                        "aria-hidden": !n
                    };
                return o().createElement(c.Ay, (0, r.__assign)({}, w, d, {
                    style: _,
                    className: y,
                    children: v ? i : null
                }))
            };
            k.__name = "TabPane", k.displayName = "TabPane";
            const A = k;
            var N = function(e) {
                var t = e.variant,
                    n = e.lazy,
                    a = e.selectedIndex,
                    l = e.className,
                    i = e.children,
                    d = (0, r.__rest)(e, ["variant", "lazy", "selectedIndex", "className", "children"]),
                    f = (0, u.r)().prefixCls,
                    v = "".concat(f, "-tab-pane-list"),
                    h = s()(v, l),
                    m = o().Children.toArray(i).map((function(e, t) {
                        var l;
                        if (!o().isValidElement(e)) return null;
                        if ("TabPane" !== (null === (l = e.type) || void 0 === l ? void 0 : l.__name)) return null;
                        var i = "number" === typeof a ? a === t : e.props.tabKey === a;
                        return o().cloneElement(e, (0, r.__assign)({
                            active: i,
                            lazy: n,
                            id: "".concat(f, "-tab-pane-").concat(e.props.tabKey || t),
                            "aria-labelledby": "".concat(f, "-tab-").concat(e.props.tabKey || t)
                        }, e.props))
                    })).filter(Boolean);
                return "buySell" === t && (m = m.slice(0, 2)), o().createElement(c.Ay, (0, r.__assign)({}, d, {
                    className: h,
                    children: m
                }))
            };
            N.displayName = "TabPaneList";
            const C = N;
            var T = function(e) {
                var t, n = e.size,
                    i = e.lazy,
                    d = e.onChange,
                    f = e.variant,
                    v = void 0 === f ? "primary" : f,
                    m = e.subVariant,
                    p = e.initialIndex,
                    b = void 0 === p ? 0 : p,
                    g = e.selectedIndex,
                    y = e.showSlideMasks,
                    _ = void 0 !== y && y,
                    w = e.showSlideArrow,
                    E = void 0 !== w && w,
                    k = e.fontSizeType,
                    A = e.tabListProps,
                    N = e.tabPaneListProps,
                    T = (0, r.__rest)(e, ["size", "lazy", "onChange", "variant", "subVariant", "initialIndex", "selectedIndex", "showSlideMasks", "showSlideArrow", "fontSizeType", "tabListProps", "tabPaneListProps"]),
                    z = (0, a.useState)((function() {
                        return void 0 === g ? b : g
                    })),
                    x = z[0],
                    M = z[1],
                    R = (0, a.useRef)(null),
                    P = (0, u.r)(),
                    L = P.prefixCls,
                    I = P.isRTL,
                    D = "".concat(L, "-tabs"),
                    F = s()(D, ((t = {})["".concat(D, "-rtl")] = !!I, t["".concat(D, "__").concat(v)] = !!v, t), e.className),
                    B = [];
                o().Children.forEach(e.children, (function(e, t) {
                    var n, a;
                    if (o().isValidElement(e) && "TabPane" === (null === (a = e.type) || void 0 === a ? void 0 : a.__name)) {
                        var l = e.props,
                            i = l.badgeProps,
                            c = l.tabKey,
                            u = l.tabNode,
                            d = l.tabProps,
                            f = (0, r.__assign)((0, r.__assign)({}, d), {
                                key: t,
                                tabKey: c,
                                badgeProps: i
                            }),
                            v = o().isValidElement(u) ? s()(((n = {})["".concat(L, "-").concat(u.props.className)] = u.props.className, n), null === d || void 0 === d ? void 0 : d.className) : null === d || void 0 === d ? void 0 : d.className;
                        B.push({
                            tabNode: o().createElement(h, (0, r.__assign)({}, f, {
                                className: v,
                                children: u
                            })),
                            tabPaneNode: e
                        })
                    }
                }));
                var V = (0, a.useCallback)((function(e, t) {
                    M(void 0 !== t ? t : e), null === d || void 0 === d || d(e, t)
                }), [d]);
                return (0, l.op)((function() {
                    void 0 !== g && g !== x && M(g)
                })), o().createElement(c.Ay, (0, r.__assign)({}, T, {
                    className: F
                }), o().createElement(S, (0, r.__assign)({
                    ref: R,
                    size: n,
                    variant: v,
                    subVariant: m,
                    onTabClick: V,
                    selectedIndex: x,
                    children: B.map((function(e) {
                        return e.tabNode
                    })),
                    fontSizeType: k,
                    showSlideMasks: _,
                    showSlideArrow: E
                }, A)), o().createElement(C, (0, r.__assign)({
                    lazy: i,
                    selectedIndex: x,
                    children: B.map((function(e) {
                        return e.tabPaneNode
                    }))
                }, N)))
            };
            T.displayName = "Tab", T.Tab = h, T.TabList = S, T.TabPane = A, T.TabPaneList = C;
            const z = T
        },
        gFET: (e, t, n) => {
            n.d(t, {
                Xr: () => v,
                fp: () => h,
                md: () => f
            });
            var r = n("DTvD"),
                a = n("slEQ");
            const o = (0, r.createContext)(void 0),
                l = e => {
                    const t = (0, r.useContext)(o);
                    return (null == e ? void 0 : e.store) || t || (0, a.zp)()
                },
                i = e => "function" === typeof(null == e ? void 0 : e.then),
                s = e => {
                    e.status = "pending", e.then((t => {
                        e.status = "fulfilled", e.value = t
                    }), (t => {
                        e.status = "rejected", e.reason = t
                    }))
                },
                c = r.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    throw "rejected" === e.status ? e.reason : (s(e), e)
                }),
                u = new WeakMap,
                d = e => {
                    let t = u.get(e);
                    return t || (t = new Promise(((n, r) => {
                        let a = e;
                        const o = e => t => {
                                a === e && n(t)
                            },
                            l = e => t => {
                                a === e && r(t)
                            },
                            s = e => {
                                "onCancel" in e && "function" === typeof e.onCancel && e.onCancel((r => {
                                    if (r === e) throw new Error("[Bug] p is not updated even after cancelation");
                                    i(r) ? (u.set(r, t), a = r, r.then(o(r), l(r)), s(r)) : n(r)
                                }))
                            };
                        e.then(o(e), l(e)), s(e)
                    })), u.set(e, t)), t
                };

            function f(e, t) {
                const n = l(t),
                    [
                        [a, o, u], f
                    ] = (0, r.useReducer)((t => {
                        const r = n.get(e);
                        return Object.is(t[0], r) && t[1] === n && t[2] === e ? t : [r, n, e]
                    }), void 0, (() => [n.get(e), n, e]));
                let v = a;
                o === n && u === e || (f(), v = n.get(e));
                const h = null == t ? void 0 : t.delay;
                if ((0, r.useEffect)((() => {
                        const t = n.sub(e, (() => {
                            if ("number" === typeof h) {
                                const t = n.get(e);
                                return i(t) && s(d(t)), void setTimeout(f, h)
                            }
                            f()
                        }));
                        return f(), t
                    }), [n, e, h]), (0, r.useDebugValue)(v), i(v)) {
                    const e = d(v);
                    return c(e)
                }
                return v
            }

            function v(e, t) {
                const n = l(t);
                return (0, r.useCallback)(((...t) => {
                    if (!("write" in e)) throw new Error("not writable atom");
                    return n.set(e, ...t)
                }), [n, e])
            }

            function h(e, t) {
                return [f(e, t), v(e, t)]
            }
        },
        slEQ: (e, t, n) => {
            n.d(t, {
                eU: () => o,
                zp: () => u
            });
            var r = n("d7LA");
            let a = 0;

            function o(e, t) {
                const n = "atom" + ++a,
                    r = {
                        toString() {
                            return this.debugLabel ? n + ":" + this.debugLabel : n
                        }
                    };
                return "function" === typeof e ? r.read = e : (r.init = e, r.read = l, r.write = i), t && (r.write = t), r
            }

            function l(e) {
                return e(this)
            }

            function i(e, t, n) {
                return t(this, "function" === typeof n ? n(e(this)) : n)
            }
            const s = () => (() => {
                let e = 0;
                const t = (0, r.eE)({}),
                    n = new WeakMap,
                    a = new WeakMap,
                    o = (0, r._w)(n, a, void 0, void 0, void 0, void 0, t, void 0, ((t, n, r, ...a) => e ? r(t, ...a) : t.write(n, r, ...a))),
                    l = new Set;
                t.m.add(void 0, (e => {
                    l.add(e), n.get(e).m = a.get(e)
                })), t.u.add(void 0, (e => {
                    l.delete(e), delete n.get(e).m
                }));
                const i = {
                    dev4_get_internal_weak_map: () => n,
                    dev4_get_mounted_atoms: () => l,
                    dev4_restore_atoms: t => {
                        const n = {
                            read: () => null,
                            write: (n, r) => {
                                ++e;
                                try {
                                    for (const [e, n] of t) "init" in e && r(e, n)
                                } finally {
                                    --e
                                }
                            }
                        };
                        o.set(n)
                    }
                };
                return Object.assign(o, i)
            })();
            let c;
            const u = () => (c || (c = s(), globalThis.__JOTAI_DEFAULT_STORE__ || (globalThis.__JOTAI_DEFAULT_STORE__ = c), globalThis.__JOTAI_DEFAULT_STORE__ !== c && console.warn("Detected multiple Jotai instances. It may cause unexpected behavior with the default store. https://github.com/pmndrs/jotai/discussions/2044")), c)
        },
        d7LA: (e, t, n) => {
            n.d(t, {
                OF: () => N,
                ZE: () => k,
                _w: () => y,
                d$: () => A,
                eE: () => w,
                hM: () => _,
                qB: () => S,
                s4: () => E
            });
            const r = (e, t) => e.unstable_is ? e.unstable_is(t) : t === e,
                a = e => "init" in e,
                o = e => !!e.write,
                l = e => "v" in e || "e" in e,
                i = e => {
                    if ("e" in e) throw e.e;
                    if (!("v" in e)) throw new Error("[Bug] atom state is not initialized");
                    return e.v
                },
                s = Symbol(),
                c = e => e[s],
                u = e => {
                    var t;
                    return v(e) && !(null == (t = c(e)) ? void 0 : t[1])
                },
                d = (e, t) => {
                    const n = c(e);
                    if (!n) throw new Error("[Bug] cancelable promise not found");
                    n[1] = !0, n[0].forEach((e => e(t)))
                },
                f = e => {
                    if (c(e)) return;
                    const t = [new Set, !1];
                    e[s] = t;
                    const n = () => {
                        t[1] = !0
                    };
                    e.then(n, n), e.onCancel = e => {
                        t[0].add(e)
                    }
                },
                v = e => "function" === typeof(null == e ? void 0 : e.then),
                h = (e, t, n) => {
                    n.p.has(e) || (n.p.add(e), t.then((() => {
                        n.p.delete(e)
                    }), (() => {
                        n.p.delete(e)
                    })))
                },
                m = (e, t, n) => {
                    const r = n(e),
                        a = "v" in r,
                        o = r.v,
                        l = u(r.v) ? r.v : null;
                    if (v(t)) {
                        f(t);
                        for (const a of r.d.keys()) h(e, t, n(a))
                    }
                    r.v = t, delete r.e, a && Object.is(o, r.v) || (++r.n, l && d(l, t))
                },
                p = (e, t, n) => {
                    var r;
                    const a = new Set;
                    for (const o of (null == (r = n.get(e)) ? void 0 : r.t) || []) n.has(o) && a.add(o);
                    for (const o of t.p) a.add(o);
                    return a
                },
                b = () => {
                    const e = {},
                        t = new WeakMap,
                        n = n => {
                            var r, a;
                            null == (r = t.get(e)) || r.forEach((e => e(n))), null == (a = t.get(n)) || a.forEach((e => e()))
                        };
                    return n.add = (n, r) => {
                        const a = n || e,
                            o = (t.has(a) ? t : t.set(a, new Set)).get(a);
                        return o.add(r), () => {
                            null == o || o.delete(r), o.size || t.delete(a)
                        }
                    }, n
                },
                g = Symbol(),
                y = (e = new WeakMap, t = new WeakMap, n = new WeakMap, s = new Set, c = new Set, d = new Set, f = {}, b = ((e, ...t) => e.read(...t)), y = ((e, ...t) => e.write(...t)), _ = ((e, t) => {
                    var n;
                    return null == (n = e.unstable_onInit) ? void 0 : n.call(e, t)
                }), w = ((e, t) => {
                    var n;
                    return null == (n = e.onMount) ? void 0 : n.call(e, t)
                }), ...E) => {
                    const S = E[0] || (t => {
                            if (!t) throw new Error("Atom is undefined or null");
                            let n = e.get(t);
                            return n || (n = {
                                d: new Map,
                                p: new Set,
                                n: 0
                            }, e.set(t, n), null == _ || _(t, P)), n
                        }),
                        k = E[1] || (() => {
                            let e, n;
                            const r = t => {
                                try {
                                    t()
                                } catch (r) {
                                    e || (e = !0, n = r)
                                }
                            };
                            do {
                                f.f && r(f.f);
                                const e = new Set,
                                    n = e.add.bind(e);
                                s.forEach((e => {
                                    var r;
                                    return null == (r = t.get(e)) ? void 0 : r.l.forEach(n)
                                })), s.clear(), d.forEach(n), d.clear(), c.forEach(n), c.clear(), e.forEach(r), s.size && A()
                            } while (s.size || d.size || c.size);
                            if (e) throw n
                        }),
                        A = E[2] || (() => {
                            const e = [],
                                r = new WeakSet,
                                a = new WeakSet,
                                o = Array.from(s);
                            for (; o.length;) {
                                const l = o[o.length - 1],
                                    i = S(l);
                                if (a.has(l)) o.pop();
                                else if (r.has(l)) {
                                    if (n.get(l) === i.n) e.push([l, i]);
                                    else if (n.has(l)) throw new Error("[Bug] invalidated atom exists");
                                    a.add(l), o.pop()
                                } else {
                                    r.add(l);
                                    for (const e of p(l, i, t)) r.has(e) || o.push(e)
                                }
                            }
                            for (let t = e.length - 1; t >= 0; --t) {
                                const [r, a] = e[t];
                                let o = !1;
                                for (const e of a.d.keys())
                                    if (e !== r && s.has(e)) {
                                        o = !0;
                                        break
                                    }
                                o && (N(r), z(r)), n.delete(r)
                            }
                        }),
                        N = E[3] || (e => {
                            var c, d;
                            const p = S(e);
                            if (l(p)) {
                                if (t.has(e) && n.get(e) !== p.n) return p;
                                if (Array.from(p.d).every((([e, t]) => N(e).n === t))) return p
                            }
                            p.d.clear();
                            let g = !0;
                            const y = () => {
                                    t.has(e) && (z(e), A(), k())
                                },
                                _ = n => {
                                    var o;
                                    if (r(e, n)) {
                                        const e = S(n);
                                        if (!l(e)) {
                                            if (!a(n)) throw new Error("no atom init");
                                            m(n, n.init, S)
                                        }
                                        return i(e)
                                    }
                                    const s = N(n);
                                    try {
                                        return i(s)
                                    } finally {
                                        p.d.set(n, s.n), u(p.v) && h(e, p.v, s), null == (o = t.get(n)) || o.t.add(e), g || y()
                                    }
                                };
                            let w, E;
                            const C = {
                                    get signal() {
                                        return w || (w = new AbortController), w.signal
                                    },
                                    get setSelf() {
                                        return o(e) || console.warn("setSelf function cannot be used with read-only atom"), !E && o(e) && (E = (...t) => {
                                            if (g && console.warn("setSelf function cannot be called in sync"), !g) try {
                                                return T(e, ...t)
                                            } finally {
                                                A(), k()
                                            }
                                        }), E
                                    }
                                },
                                x = p.n;
                            try {
                                const t = b(e, _, C);
                                return m(e, t, S), v(t) && (null == (c = t.onCancel) || c.call(t, (() => null == w ? void 0 : w.abort())), t.then(y, y)), p
                            } catch (M) {
                                return delete p.v, p.e = M, ++p.n, p
                            } finally {
                                g = !1, x !== p.n && n.get(e) === x && (n.set(e, p.n), s.add(e), null == (d = f.c) || d.call(f, e))
                            }
                        }),
                        C = E[4] || (e => {
                            const r = [e];
                            for (; r.length;) {
                                const e = r.pop(),
                                    a = S(e);
                                for (const o of p(e, a, t)) {
                                    const e = S(o);
                                    n.set(o, e.n), r.push(o)
                                }
                            }
                        }),
                        T = E[5] || ((e, ...t) => {
                            let n = !0;
                            const o = e => i(N(e)),
                                l = (t, ...o) => {
                                    var l;
                                    const i = S(t);
                                    try {
                                        if (r(e, t)) {
                                            if (!a(t)) throw new Error("atom not writable");
                                            const e = i.n,
                                                n = o[0];
                                            return m(t, n, S), z(t), void(e !== i.n && (s.add(t), null == (l = f.c) || l.call(f, t), C(t)))
                                        }
                                        return T(t, ...o)
                                    } finally {
                                        n || (A(), k())
                                    }
                                };
                            try {
                                return y(e, o, l, ...t)
                            } finally {
                                n = !1
                            }
                        }),
                        z = E[6] || (e => {
                            var n;
                            const r = S(e),
                                a = t.get(e);
                            if (a && !u(r.v)) {
                                for (const [t, o] of r.d)
                                    if (!a.d.has(t)) {
                                        const r = S(t);
                                        x(t).t.add(e), a.d.add(t), o !== r.n && (s.add(t), null == (n = f.c) || n.call(f, t), C(t))
                                    }
                                for (const t of a.d || [])
                                    if (!r.d.has(t)) {
                                        a.d.delete(t);
                                        const n = M(t);
                                        null == n || n.t.delete(e)
                                    }
                            }
                        }),
                        x = E[7] || (e => {
                            var n;
                            const r = S(e);
                            let a = t.get(e);
                            if (!a) {
                                N(e);
                                for (const t of r.d.keys()) {
                                    x(t).t.add(e)
                                }
                                if (a = {
                                        l: new Set,
                                        d: new Set(r.d.keys()),
                                        t: new Set
                                    }, t.set(e, a), null == (n = f.m) || n.call(f, e), o(e)) {
                                    const t = () => {
                                        let t = !0;
                                        const n = (...n) => {
                                            try {
                                                return T(e, ...n)
                                            } finally {
                                                t || (A(), k())
                                            }
                                        };
                                        try {
                                            const r = w(e, n);
                                            r && (a.u = () => {
                                                t = !0;
                                                try {
                                                    r()
                                                } finally {
                                                    t = !1
                                                }
                                            })
                                        } finally {
                                            t = !1
                                        }
                                    };
                                    c.add(t)
                                }
                            }
                            return a
                        }),
                        M = E[8] || (e => {
                            var n;
                            const r = S(e);
                            let a = t.get(e);
                            if (!a || a.l.size || Array.from(a.t).some((n => {
                                    var r;
                                    return null == (r = t.get(n)) ? void 0 : r.d.has(e)
                                }))) return a;
                            a.u && d.add(a.u), a = void 0, t.delete(e), null == (n = f.u) || n.call(f, e);
                            for (const t of r.d.keys()) {
                                const n = M(t);
                                null == n || n.t.delete(e)
                            }
                        }),
                        R = [e, t, n, s, c, d, f, b, y, _, w, S, k, A, N, C, T, z, x, M],
                        P = {
                            get: e => i(N(e)),
                            set: (e, ...t) => {
                                try {
                                    return T(e, ...t)
                                } finally {
                                    A(), k()
                                }
                            },
                            sub: (e, t) => {
                                const n = x(e).l;
                                return n.add(t), k(), () => {
                                    n.delete(t), M(e), k()
                                }
                            }
                        };
                    return Object.defineProperty(P, g, {
                        value: R
                    }), P
                },
                _ = e => e[g],
                w = e => (e.c || (e.c = b()), e.m || (e.m = b()), e.u || (e.u = b()), e.f || (e.f = (() => {
                    const e = new Set,
                        t = () => {
                            e.forEach((e => e()))
                        };
                    return t.add = t => (e.add(t), () => {
                        e.delete(t)
                    }), t
                })()), e),
                E = r,
                S = a,
                k = l,
                A = i,
                N = m
        }
    }
]);
//# debugId=1d3943e2-30ff-5b78-9d0a-33e36d2f1401