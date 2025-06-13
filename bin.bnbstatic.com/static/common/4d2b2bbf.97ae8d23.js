! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b372a0d3-1e0c-57e4-ba4c-80ed808ec993")
    } catch (e) {}
}();
(self.webpackChunkrewards_hub_ui = self.webpackChunkrewards_hub_ui || []).push([
    [995], {
        "9mmq": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("Y4uf");
            const s = function(e) {
                return a().createElement(i.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        R2Ip: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => tt
            });
            var r = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o),
                i = n("qrIQ"),
                s = n("QFE7"),
                c = n("hyZw"),
                l = n("O94r"),
                f = n.n(l),
                u = n("eeEA"),
                p = n("hTvQ"),
                d = n.n(p),
                m = n("fvKX"),
                v = {
                    top: "marginBottom",
                    left: "marginRight",
                    right: "marginLeft",
                    bottom: "marginTop"
                },
                h = function(e) {
                    var t = e.placement,
                        n = e.offset,
                        r = e.isArrow,
                        o = t.split("-"),
                        a = o[0],
                        i = o[1],
                        s = i ? 0 : "50%",
                        c = r ? {
                            top: " rotate(-135deg)",
                            right: " rotate(-45deg)",
                            bottom: " rotate(45deg)",
                            left: " rotate(135deg)"
                        }[a] : "",
                        l = r ? n - Math.floor(3) : "100%",
                        f = i ? r ? 9 : 0 : "50%";
                    return ("end" === i ? {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            bottom: l,
                            right: f
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            right: l,
                            bottom: f
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            left: l,
                            bottom: f
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            top: l,
                            right: f
                        }
                    } : {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            bottom: l,
                            left: f
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            right: l,
                            top: f
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(c),
                            left: l,
                            top: f
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(c),
                            top: l,
                            left: f
                        }
                    })[a]
                },
                b = function(e) {
                    var t, n, o = e.arrow,
                        s = e.shadow,
                        c = e.isFloat,
                        l = e.offset,
                        p = void 0 === l ? 6 : l,
                        b = e.variant,
                        g = void 0 === b ? "primary" : b,
                        y = e.placement,
                        w = void 0 === y ? "top" : y,
                        x = e.enablePortal,
                        O = e.portalNode,
                        E = e.style,
                        A = e.radius,
                        _ = e.bubbleFontSize,
                        k = void 0 === _ ? 14 : _,
                        M = (0, r.__rest)(e, ["arrow", "shadow", "isFloat", "offset", "variant", "placement", "enablePortal", "portalNode", "style", "radius", "bubbleFontSize"]),
                        C = (0, m.r)().prefixCls,
                        P = "".concat(C, "-bubble"),
                        N = f()(P, ((t = {})["".concat(P, "__").concat(g)] = !!g, t["data-shadow"] = !!s, t["data-font-".concat(k)] = !!k, t), e.className);
                    p = o ? Math.max(p, 4) : p;
                    var S = w.split("-")[0],
                        j = c ? h({
                            offset: p,
                            placement: w
                        }) : {},
                        R = h({
                            offset: p,
                            placement: w,
                            isArrow: !0
                        }),
                        L = ((n = {})[v[S]] = p, n.borderRadius = A, n),
                        D = a().createElement(u.Ay, (0, r.__assign)({}, M, {
                            className: N,
                            style: (0, r.__assign)((0, r.__assign)({}, j), E)
                        }), !!o && a().createElement(u.Ay, {
                            className: "".concat(P, "-arrow"),
                            style: R
                        }), !!o && !!s && a().createElement(u.Ay, {
                            className: "".concat(P, "-arrow-shadow"),
                            style: R
                        }), a().createElement(u.Ay, {
                            style: L,
                            className: "".concat(P, "-content"),
                            children: e.children
                        }));
                    return !i.lq && x ? d().createPortal(D, O instanceof HTMLElement ? O : document.body) : D
                };
            b.displayName = "Bubble";
            const g = b;
            var y = {
                    right: "left",
                    left: "right",
                    "top-start": "top-end",
                    "right-start": "left-start",
                    "left-start": "right-start",
                    "bottom-start": "bottom-end",
                    "top-end": "top-start",
                    "right-end": "left-end",
                    "left-end": "right-end",
                    "bottom-end": "bottom-start"
                },
                w = 50,
                x = function(e) {
                    var t;
                    e.stopPropagation(), i.lq || null === (t = null === e || void 0 === e ? void 0 : e.nativeEvent) || void 0 === t || t.stopImmediatePropagation()
                },
                O = n("H2//"),
                E = "tooltip";

            function A(e, t, n) {
                return "menu" === t ? {
                    role: "button",
                    "aria-expanded": n,
                    "aria-controls": e,
                    "aria-haspopup": "listbox"
                } : "combobox" === t ? {} : {
                    "aria-describedby": e
                }
            }

            function _(e, t, n) {
                return "combobox" === t ? {} : {
                    id: e,
                    role: t,
                    tabindex: n ? 0 : -1
                }
            }

            function k(e, t, n) {
                void 0 === t && (t = E), void 0 === n && (n = !1);
                var r = (0, o.useMemo)((function() {
                    return "".concat(e, "-").concat((0, O.uR)(8))
                }), [e, t, n]);
                return {
                    triggerAriaProps: A(r, t, n),
                    contentAriaProps: _(r, t, n)
                }
            }
            var M = function(e) {
                var t, n = e.open,
                    l = e.once,
                    p = e.arrow,
                    d = e.offset,
                    v = void 0 === d ? 12 : d,
                    h = e.disabled,
                    b = e.tooltips,
                    O = e.variant,
                    A = void 0 === O ? "gray" : O,
                    _ = e.placement,
                    M = void 0 === _ ? "top" : _,
                    C = e.trigger,
                    P = void 0 === C ? "hover" : C,
                    N = e.onVisibleChange,
                    S = e.enablePortal,
                    j = e.portalNode,
                    R = e.bubbleClassName,
                    L = e.triggerClassName,
                    D = e.delay,
                    W = void 0 === D ? w : D,
                    T = e.enableClickBubble,
                    B = e.ariaRole,
                    F = void 0 === B ? E : B,
                    H = (0, r.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "bubbleClassName", "triggerClassName", "delay", "enableClickBubble", "ariaRole"]),
                    q = a().useState(n),
                    z = q[0],
                    V = q[1],
                    U = a().useRef(),
                    I = (0, m.r)(),
                    Y = I.prefixCls,
                    X = I.isMobile,
                    Q = I.isTablet,
                    Z = I.isClient,
                    G = I.isRTL,
                    $ = !i.lq && !X && !Q;
                P = $ ? P : "click";
                var J = "".concat(Y, "-tooltips");
                a().useEffect((function() {
                    "undefined" !== typeof n && z !== !!n && V(!z)
                }), [n, z]);
                var K = (0, s.d)({
                        fn: N
                    }).debounceFn,
                    ee = (0, o.useCallback)((function(e) {
                        h || V((function(t) {
                            var n = "boolean" === typeof e ? e : !t;
                            return t !== n && K(n), t !== n ? n : t
                        }))
                    }), [h, K]),
                    te = (0, o.useMemo)((function() {
                        var e, t, n;
                        return "number" === typeof W ? {
                            enter: W,
                            leave: W,
                            click: W
                        } : {
                            enter: null !== (e = W.enter) && void 0 !== e ? e : w,
                            leave: null !== (t = W.leave) && void 0 !== t ? t : w,
                            click: null !== (n = W.click) && void 0 !== n ? n : w
                        }
                    }), [W]),
                    ne = (0, s.d)({
                        fn: ee,
                        time: te.enter
                    }),
                    re = ne.debounceFn,
                    oe = ne.clearTimer,
                    ae = (0, s.d)({
                        fn: ee,
                        time: te.leave
                    }),
                    ie = ae.debounceFn,
                    se = ae.clearTimer,
                    ce = (0, s.d)({
                        fn: ee,
                        time: te.click
                    }).debounceFn,
                    le = (0, o.useCallback)(ce, [ce]),
                    fe = (0, o.useCallback)((function() {
                        return ce(!1)
                    }), [ce]);
                a().useEffect((function() {
                    var e = U.current,
                        t = function() {
                            se(), re(!0)
                        },
                        n = function() {
                            oe(), ie(!1)
                        };
                    if (!i.lq && e instanceof Element) {
                        if ("hover" === P) return e.addEventListener("mouseover", t, !0), e.addEventListener("mouseout", n, !0),
                            function() {
                                e.removeEventListener("mouseover", t, !0), e.removeEventListener("mouseout", n, !0)
                            };
                        var r = function(e) {
                            if (!U.current.contains(e.target)) return ce(!1)
                        };
                        return document.addEventListener("click", r),
                            function() {
                                document.removeEventListener("click", r)
                            }
                    }
                    return c.es
                }), [P, re, se, oe, ie, ce]);
                var ue = "click" === P,
                    pe = !h && z,
                    de = l ? fe : void 0,
                    me = !ue && !l || T ? void 0 : x,
                    ve = ue ? le : void 0,
                    he = f()("".concat(J, "-wrap"), {
                        active: pe
                    }, e.className),
                    be = f()("".concat(J, "-ele"), ((t = {})["".concat(J, "-ele-rtl")] = !!G, t), L),
                    ge = f()(J, {
                        active: pe
                    }, R),
                    ye = G && y[M] || M,
                    we = (0, r.__assign)({
                        arrow: p,
                        offset: v,
                        variant: A,
                        placement: ye,
                        shadow: !0,
                        isFloat: !0,
                        enablePortal: S,
                        portalNode: j
                    }, H);
                "gray" === A && (we = (0, r.__assign)((0, r.__assign)({}, we), {
                    shadow: !1
                }));
                var xe = Z && !h,
                    Oe = k(J, F, xe),
                    Ee = Oe.triggerAriaProps,
                    Ae = Oe.contentAriaProps;
                return a().createElement(u.Ay, {
                    ref: U,
                    onClick: me,
                    className: he
                }, a().createElement(u.Ay, (0, r.__assign)({}, Ee, {
                    className: be,
                    onClick: ve,
                    children: e.children
                })), xe ? a().createElement(g, (0, r.__assign)({}, Ae, we, {
                    className: ge,
                    onClick: de,
                    children: b
                })) : null)
            };
            M.displayName = "Tooltips";
            const C = M;
            var P = n("W3Ja");

            function N(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function S(e) {
                return e instanceof N(e).Element || e instanceof Element
            }

            function j(e) {
                return e instanceof N(e).HTMLElement || e instanceof HTMLElement
            }

            function R(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof N(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var L = Math.max,
                D = Math.min,
                W = Math.round;

            function T() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                })).join(" ") : navigator.userAgent
            }

            function B() {
                return !/^((?!chrome|android).)*safari/i.test(T())
            }

            function F(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var r = e.getBoundingClientRect(),
                    o = 1,
                    a = 1;
                t && j(e) && (o = e.offsetWidth > 0 && W(r.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && W(r.height) / e.offsetHeight || 1);
                var i = (S(e) ? N(e) : window).visualViewport,
                    s = !B() && n,
                    c = (r.left + (s && i ? i.offsetLeft : 0)) / o,
                    l = (r.top + (s && i ? i.offsetTop : 0)) / a,
                    f = r.width / o,
                    u = r.height / a;
                return {
                    width: f,
                    height: u,
                    top: l,
                    right: c + f,
                    bottom: l + u,
                    left: c,
                    x: c,
                    y: l
                }
            }

            function H(e) {
                var t = N(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function q(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function z(e) {
                return ((S(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function V(e) {
                return F(z(e)).left + H(e).scrollLeft
            }

            function U(e) {
                return N(e).getComputedStyle(e)
            }

            function I(e) {
                var t = U(e),
                    n = t.overflow,
                    r = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + o + r)
            }

            function Y(e, t, n) {
                void 0 === n && (n = !1);
                var r = j(t),
                    o = j(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = W(t.width) / e.offsetWidth || 1,
                            r = W(t.height) / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    a = z(t),
                    i = F(e, o, n),
                    s = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    c = {
                        x: 0,
                        y: 0
                    };
                return (r || !r && !n) && (("body" !== q(t) || I(a)) && (s = function(e) {
                    return e !== N(e) && j(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : H(e);
                    var t
                }(t)), j(t) ? ((c = F(t, !0)).x += t.clientLeft, c.y += t.clientTop) : a && (c.x = V(a))), {
                    x: i.left + s.scrollLeft - c.x,
                    y: i.top + s.scrollTop - c.y,
                    width: i.width,
                    height: i.height
                }
            }

            function X(e) {
                var t = F(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function Q(e) {
                return "html" === q(e) ? e : e.assignedSlot || e.parentNode || (R(e) ? e.host : null) || z(e)
            }

            function Z(e) {
                return ["html", "body", "#document"].indexOf(q(e)) >= 0 ? e.ownerDocument.body : j(e) && I(e) ? e : Z(Q(e))
            }

            function G(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = Z(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = N(r),
                    i = o ? [a].concat(a.visualViewport || [], I(r) ? r : []) : r,
                    s = t.concat(i);
                return o ? s : s.concat(G(Q(i)))
            }

            function $(e) {
                return ["table", "td", "th"].indexOf(q(e)) >= 0
            }

            function J(e) {
                return j(e) && "fixed" !== U(e).position ? e.offsetParent : null
            }

            function K(e) {
                for (var t = N(e), n = J(e); n && $(n) && "static" === U(n).position;) n = J(n);
                return n && ("html" === q(n) || "body" === q(n) && "static" === U(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(T());
                    if (/Trident/i.test(T()) && j(e) && "fixed" === U(e).position) return null;
                    var n = Q(e);
                    for (R(n) && (n = n.host); j(n) && ["html", "body"].indexOf(q(n)) < 0;) {
                        var r = U(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var ee = "top",
                te = "bottom",
                ne = "right",
                re = "left",
                oe = "auto",
                ae = [ee, te, ne, re],
                ie = "start",
                se = "end",
                ce = "viewport",
                le = "popper",
                fe = ae.reduce((function(e, t) {
                    return e.concat([t + "-" + ie, t + "-" + se])
                }), []),
                ue = [].concat(ae, [oe]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + ie, t + "-" + se])
                }), []),
                pe = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function de(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function o(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && o(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || o(e)
                })), r
            }

            function me(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var ve = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function he() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function be(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    o = t.defaultOptions,
                    a = void 0 === o ? ve : o;
                return function(e, t, n) {
                    void 0 === n && (n = a);
                    var o = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, ve, a),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        i = [],
                        s = !1,
                        c = {
                            state: o,
                            setOptions: function(n) {
                                var s = "function" === typeof n ? n(o.options) : n;
                                l(), o.options = Object.assign({}, a, o.options, s), o.scrollParents = {
                                    reference: S(e) ? G(e) : e.contextElement ? G(e.contextElement) : [],
                                    popper: G(t)
                                };
                                var f = function(e) {
                                    var t = de(e);
                                    return pe.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, o.options.modifiers)));
                                return o.orderedModifiers = f.filter((function(e) {
                                    return e.enabled
                                })), o.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        a = e.effect;
                                    if ("function" === typeof a) {
                                        var s = a({
                                                state: o,
                                                name: t,
                                                instance: c,
                                                options: r
                                            }),
                                            l = function() {};
                                        i.push(s || l)
                                    }
                                })), c.update()
                            },
                            forceUpdate: function() {
                                if (!s) {
                                    var e = o.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (he(t, n)) {
                                        o.rects = {
                                            reference: Y(t, K(n), "fixed" === o.options.strategy),
                                            popper: X(n)
                                        }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach((function(e) {
                                            return o.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < o.orderedModifiers.length; r++)
                                            if (!0 !== o.reset) {
                                                var a = o.orderedModifiers[r],
                                                    i = a.fn,
                                                    l = a.options,
                                                    f = void 0 === l ? {} : l,
                                                    u = a.name;
                                                "function" === typeof i && (o = i({
                                                    state: o,
                                                    options: f,
                                                    name: u,
                                                    instance: c
                                                }) || o)
                                            } else o.reset = !1, r = -1
                                    }
                                }
                            },
                            update: me((function() {
                                return new Promise((function(e) {
                                    c.forceUpdate(), e(o)
                                }))
                            })),
                            destroy: function() {
                                l(), s = !0
                            }
                        };
                    if (!he(e, t)) return c;

                    function l() {
                        i.forEach((function(e) {
                            return e()
                        })), i = []
                    }
                    return c.setOptions(n).then((function(e) {
                        !s && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), c
                }
            }
            var ge = {
                passive: !0
            };

            function ye(e) {
                return e.split("-")[0]
            }

            function we(e) {
                return e.split("-")[1]
            }

            function xe(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function Oe(e) {
                var t, n = e.reference,
                    r = e.element,
                    o = e.placement,
                    a = o ? ye(o) : null,
                    i = o ? we(o) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    c = n.y + n.height / 2 - r.height / 2;
                switch (a) {
                    case ee:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case te:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case ne:
                        t = {
                            x: n.x + n.width,
                            y: c
                        };
                        break;
                    case re:
                        t = {
                            x: n.x - r.width,
                            y: c
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var l = a ? xe(a) : null;
                if (null != l) {
                    var f = "y" === l ? "height" : "width";
                    switch (i) {
                        case ie:
                            t[l] = t[l] - (n[f] / 2 - r[f] / 2);
                            break;
                        case se:
                            t[l] = t[l] + (n[f] / 2 - r[f] / 2)
                    }
                }
                return t
            }
            var Ee = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function Ae(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    a = e.variation,
                    i = e.offsets,
                    s = e.position,
                    c = e.gpuAcceleration,
                    l = e.adaptive,
                    f = e.roundOffsets,
                    u = e.isFixed,
                    p = i.x,
                    d = void 0 === p ? 0 : p,
                    m = i.y,
                    v = void 0 === m ? 0 : m,
                    h = "function" === typeof f ? f({
                        x: d,
                        y: v
                    }) : {
                        x: d,
                        y: v
                    };
                d = h.x, v = h.y;
                var b = i.hasOwnProperty("x"),
                    g = i.hasOwnProperty("y"),
                    y = re,
                    w = ee,
                    x = window;
                if (l) {
                    var O = K(n),
                        E = "clientHeight",
                        A = "clientWidth";
                    if (O === N(n) && "static" !== U(O = z(n)).position && "absolute" === s && (E = "scrollHeight", A = "scrollWidth"), o === ee || (o === re || o === ne) && a === se) w = te, v -= (u && O === x && x.visualViewport ? x.visualViewport.height : O[E]) - r.height, v *= c ? 1 : -1;
                    if (o === re || (o === ee || o === te) && a === se) y = ne, d -= (u && O === x && x.visualViewport ? x.visualViewport.width : O[A]) - r.width, d *= c ? 1 : -1
                }
                var _, k = Object.assign({
                        position: s
                    }, l && Ee),
                    M = !0 === f ? function(e, t) {
                        var n = e.x,
                            r = e.y,
                            o = t.devicePixelRatio || 1;
                        return {
                            x: W(n * o) / o || 0,
                            y: W(r * o) / o || 0
                        }
                    }({
                        x: d,
                        y: v
                    }, N(n)) : {
                        x: d,
                        y: v
                    };
                return d = M.x, v = M.y, c ? Object.assign({}, k, ((_ = {})[w] = g ? "0" : "", _[y] = b ? "0" : "", _.transform = (x.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + v + "px)" : "translate3d(" + d + "px, " + v + "px, 0)", _)) : Object.assign({}, k, ((t = {})[w] = g ? v + "px" : "", t[y] = b ? d + "px" : "", t.transform = "", t))
            }
            const _e = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        o = n.offset,
                        a = void 0 === o ? [0, 0] : o,
                        i = ue.reduce((function(e, n) {
                            return e[n] = function(e, t, n) {
                                var r = ye(e),
                                    o = [re, ee].indexOf(r) >= 0 ? -1 : 1,
                                    a = "function" === typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n,
                                    i = a[0],
                                    s = a[1];
                                return i = i || 0, s = (s || 0) * o, [re, ne].indexOf(r) >= 0 ? {
                                    x: s,
                                    y: i
                                } : {
                                    x: i,
                                    y: s
                                }
                            }(n, t.rects, a), e
                        }), {}),
                        s = i[t.placement],
                        c = s.x,
                        l = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += c, t.modifiersData.popperOffsets.y += l), t.modifiersData[r] = i
                }
            };
            var ke = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function Me(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return ke[e]
                }))
            }
            var Ce = {
                start: "end",
                end: "start"
            };

            function Pe(e) {
                return e.replace(/start|end/g, (function(e) {
                    return Ce[e]
                }))
            }

            function Ne(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && R(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function Se(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function je(e, t, n) {
                return t === ce ? Se(function(e, t) {
                    var n = N(e),
                        r = z(e),
                        o = n.visualViewport,
                        a = r.clientWidth,
                        i = r.clientHeight,
                        s = 0,
                        c = 0;
                    if (o) {
                        a = o.width, i = o.height;
                        var l = B();
                        (l || !l && "fixed" === t) && (s = o.offsetLeft, c = o.offsetTop)
                    }
                    return {
                        width: a,
                        height: i,
                        x: s + V(e),
                        y: c
                    }
                }(e, n)) : S(t) ? function(e, t) {
                    var n = F(e, !1, "fixed" === t);
                    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
                }(t, n) : Se(function(e) {
                    var t, n = z(e),
                        r = H(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        a = L(n.scrollWidth, n.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        i = L(n.scrollHeight, n.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        s = -r.scrollLeft + V(e),
                        c = -r.scrollTop;
                    return "rtl" === U(o || n).direction && (s += L(n.clientWidth, o ? o.clientWidth : 0) - a), {
                        width: a,
                        height: i,
                        x: s,
                        y: c
                    }
                }(z(e)))
            }

            function Re(e, t, n, r) {
                var o = "clippingParents" === t ? function(e) {
                        var t = G(Q(e)),
                            n = ["absolute", "fixed"].indexOf(U(e).position) >= 0 && j(e) ? K(e) : e;
                        return S(n) ? t.filter((function(e) {
                            return S(e) && Ne(e, n) && "body" !== q(e)
                        })) : []
                    }(e) : [].concat(t),
                    a = [].concat(o, [n]),
                    i = a[0],
                    s = a.reduce((function(t, n) {
                        var o = je(e, n, r);
                        return t.top = L(o.top, t.top), t.right = D(o.right, t.right), t.bottom = D(o.bottom, t.bottom), t.left = L(o.left, t.left), t
                    }), je(e, i, r));
                return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
            }

            function Le(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function De(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function We(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    o = void 0 === r ? e.placement : r,
                    a = n.strategy,
                    i = void 0 === a ? e.strategy : a,
                    s = n.boundary,
                    c = void 0 === s ? "clippingParents" : s,
                    l = n.rootBoundary,
                    f = void 0 === l ? ce : l,
                    u = n.elementContext,
                    p = void 0 === u ? le : u,
                    d = n.altBoundary,
                    m = void 0 !== d && d,
                    v = n.padding,
                    h = void 0 === v ? 0 : v,
                    b = Le("number" !== typeof h ? h : De(h, ae)),
                    g = p === le ? "reference" : le,
                    y = e.rects.popper,
                    w = e.elements[m ? g : p],
                    x = Re(S(w) ? w : w.contextElement || z(e.elements.popper), c, f, i),
                    O = F(e.elements.reference),
                    E = Oe({
                        reference: O,
                        element: y,
                        strategy: "absolute",
                        placement: o
                    }),
                    A = Se(Object.assign({}, y, E)),
                    _ = p === le ? A : O,
                    k = {
                        top: x.top - _.top + b.top,
                        bottom: _.bottom - x.bottom + b.bottom,
                        left: x.left - _.left + b.left,
                        right: _.right - x.right + b.right
                    },
                    M = e.modifiersData.offset;
                if (p === le && M) {
                    var C = M[o];
                    Object.keys(k).forEach((function(e) {
                        var t = [ne, te].indexOf(e) >= 0 ? 1 : -1,
                            n = [ee, te].indexOf(e) >= 0 ? "y" : "x";
                        k[e] += C[n] * t
                    }))
                }
                return k
            }
            const Te = {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name;
                    if (!t.modifiersData[r]._skip) {
                        for (var o = n.mainAxis, a = void 0 === o || o, i = n.altAxis, s = void 0 === i || i, c = n.fallbackPlacements, l = n.padding, f = n.boundary, u = n.rootBoundary, p = n.altBoundary, d = n.flipVariations, m = void 0 === d || d, v = n.allowedAutoPlacements, h = t.options.placement, b = ye(h), g = c || (b === h || !m ? [Me(h)] : function(e) {
                                if (ye(e) === oe) return [];
                                var t = Me(e);
                                return [Pe(e), t, Pe(t)]
                            }(h)), y = [h].concat(g).reduce((function(e, n) {
                                return e.concat(ye(n) === oe ? function(e, t) {
                                    void 0 === t && (t = {});
                                    var n = t,
                                        r = n.placement,
                                        o = n.boundary,
                                        a = n.rootBoundary,
                                        i = n.padding,
                                        s = n.flipVariations,
                                        c = n.allowedAutoPlacements,
                                        l = void 0 === c ? ue : c,
                                        f = we(r),
                                        u = f ? s ? fe : fe.filter((function(e) {
                                            return we(e) === f
                                        })) : ae,
                                        p = u.filter((function(e) {
                                            return l.indexOf(e) >= 0
                                        }));
                                    0 === p.length && (p = u);
                                    var d = p.reduce((function(t, n) {
                                        return t[n] = We(e, {
                                            placement: n,
                                            boundary: o,
                                            rootBoundary: a,
                                            padding: i
                                        })[ye(n)], t
                                    }), {});
                                    return Object.keys(d).sort((function(e, t) {
                                        return d[e] - d[t]
                                    }))
                                }(t, {
                                    placement: n,
                                    boundary: f,
                                    rootBoundary: u,
                                    padding: l,
                                    flipVariations: m,
                                    allowedAutoPlacements: v
                                }) : n)
                            }), []), w = t.rects.reference, x = t.rects.popper, O = new Map, E = !0, A = y[0], _ = 0; _ < y.length; _++) {
                            var k = y[_],
                                M = ye(k),
                                C = we(k) === ie,
                                P = [ee, te].indexOf(M) >= 0,
                                N = P ? "width" : "height",
                                S = We(t, {
                                    placement: k,
                                    boundary: f,
                                    rootBoundary: u,
                                    altBoundary: p,
                                    padding: l
                                }),
                                j = P ? C ? ne : re : C ? te : ee;
                            w[N] > x[N] && (j = Me(j));
                            var R = Me(j),
                                L = [];
                            if (a && L.push(S[M] <= 0), s && L.push(S[j] <= 0, S[R] <= 0), L.every((function(e) {
                                    return e
                                }))) {
                                A = k, E = !1;
                                break
                            }
                            O.set(k, L)
                        }
                        if (E)
                            for (var D = function(e) {
                                    var t = y.find((function(t) {
                                        var n = O.get(t);
                                        if (n) return n.slice(0, e).every((function(e) {
                                            return e
                                        }))
                                    }));
                                    if (t) return A = t, "break"
                                }, W = m ? 3 : 1; W > 0; W--) {
                                if ("break" === D(W)) break
                            }
                        t.placement !== A && (t.modifiersData[r]._skip = !0, t.placement = A, t.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            };

            function Be(e, t, n) {
                return L(e, D(t, n))
            }
            const Fe = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        o = n.mainAxis,
                        a = void 0 === o || o,
                        i = n.altAxis,
                        s = void 0 !== i && i,
                        c = n.boundary,
                        l = n.rootBoundary,
                        f = n.altBoundary,
                        u = n.padding,
                        p = n.tether,
                        d = void 0 === p || p,
                        m = n.tetherOffset,
                        v = void 0 === m ? 0 : m,
                        h = We(t, {
                            boundary: c,
                            rootBoundary: l,
                            padding: u,
                            altBoundary: f
                        }),
                        b = ye(t.placement),
                        g = we(t.placement),
                        y = !g,
                        w = xe(b),
                        x = "x" === w ? "y" : "x",
                        O = t.modifiersData.popperOffsets,
                        E = t.rects.reference,
                        A = t.rects.popper,
                        _ = "function" === typeof v ? v(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : v,
                        k = "number" === typeof _ ? {
                            mainAxis: _,
                            altAxis: _
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, _),
                        M = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        C = {
                            x: 0,
                            y: 0
                        };
                    if (O) {
                        if (a) {
                            var P, N = "y" === w ? ee : re,
                                S = "y" === w ? te : ne,
                                j = "y" === w ? "height" : "width",
                                R = O[w],
                                W = R + h[N],
                                T = R - h[S],
                                B = d ? -A[j] / 2 : 0,
                                F = g === ie ? E[j] : A[j],
                                H = g === ie ? -A[j] : -E[j],
                                q = t.elements.arrow,
                                z = d && q ? X(q) : {
                                    width: 0,
                                    height: 0
                                },
                                V = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                U = V[N],
                                I = V[S],
                                Y = Be(0, E[j], z[j]),
                                Q = y ? E[j] / 2 - B - Y - U - k.mainAxis : F - Y - U - k.mainAxis,
                                Z = y ? -E[j] / 2 + B + Y + I + k.mainAxis : H + Y + I + k.mainAxis,
                                G = t.elements.arrow && K(t.elements.arrow),
                                $ = G ? "y" === w ? G.clientTop || 0 : G.clientLeft || 0 : 0,
                                J = null != (P = null == M ? void 0 : M[w]) ? P : 0,
                                oe = R + Z - J,
                                ae = Be(d ? D(W, R + Q - J - $) : W, R, d ? L(T, oe) : T);
                            O[w] = ae, C[w] = ae - R
                        }
                        if (s) {
                            var se, ce = "x" === w ? ee : re,
                                le = "x" === w ? te : ne,
                                fe = O[x],
                                ue = "y" === x ? "height" : "width",
                                pe = fe + h[ce],
                                de = fe - h[le],
                                me = -1 !== [ee, re].indexOf(b),
                                ve = null != (se = null == M ? void 0 : M[x]) ? se : 0,
                                he = me ? pe : fe - E[ue] - A[ue] - ve + k.altAxis,
                                be = me ? fe + E[ue] + A[ue] - ve - k.altAxis : de,
                                ge = d && me ? function(e, t, n) {
                                    var r = Be(e, t, n);
                                    return r > n ? n : r
                                }(he, fe, be) : Be(d ? he : pe, fe, d ? be : de);
                            O[x] = ge, C[x] = ge - fe
                        }
                        t.modifiersData[r] = C
                    }
                },
                requiresIfExists: ["offset"]
            };
            const He = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state,
                        r = e.name,
                        o = e.options,
                        a = n.elements.arrow,
                        i = n.modifiersData.popperOffsets,
                        s = ye(n.placement),
                        c = xe(s),
                        l = [re, ne].indexOf(s) >= 0 ? "height" : "width";
                    if (a && i) {
                        var f = function(e, t) {
                                return Le("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : De(e, ae))
                            }(o.padding, n),
                            u = X(a),
                            p = "y" === c ? ee : re,
                            d = "y" === c ? te : ne,
                            m = n.rects.reference[l] + n.rects.reference[c] - i[c] - n.rects.popper[l],
                            v = i[c] - n.rects.reference[c],
                            h = K(a),
                            b = h ? "y" === c ? h.clientHeight || 0 : h.clientWidth || 0 : 0,
                            g = m / 2 - v / 2,
                            y = f[p],
                            w = b - u[l] - f[d],
                            x = b / 2 - u[l] / 2 + g,
                            O = Be(y, x, w),
                            E = c;
                        n.modifiersData[r] = ((t = {})[E] = O, t.centerOffset = O - x, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && Ne(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function qe(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function ze(e) {
                return [ee, ne, te, re].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var Ve = be({
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                r = e.options,
                                o = r.scroll,
                                a = void 0 === o || o,
                                i = r.resize,
                                s = void 0 === i || i,
                                c = N(t.elements.popper),
                                l = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return a && l.forEach((function(e) {
                                    e.addEventListener("scroll", n.update, ge)
                                })), s && c.addEventListener("resize", n.update, ge),
                                function() {
                                    a && l.forEach((function(e) {
                                        e.removeEventListener("scroll", n.update, ge)
                                    })), s && c.removeEventListener("resize", n.update, ge)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = Oe({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                o = void 0 === r || r,
                                a = n.adaptive,
                                i = void 0 === a || a,
                                s = n.roundOffsets,
                                c = void 0 === s || s,
                                l = {
                                    placement: ye(t.placement),
                                    variation: we(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, Ae(Object.assign({}, l, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: i,
                                roundOffsets: c
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, Ae(Object.assign({}, l, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: c
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    o = t.elements[e];
                                j(o) && q(o) && (Object.assign(o.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            o = t.attributes[e] || {},
                                            a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        j(r) && q(r) && (Object.assign(r.style, a), Object.keys(o).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, _e, Te, Fe, He, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                o = t.rects.popper,
                                a = t.modifiersData.preventOverflow,
                                i = We(t, {
                                    elementContext: "reference"
                                }),
                                s = We(t, {
                                    altBoundary: !0
                                }),
                                c = qe(i, r),
                                l = qe(s, o, a),
                                f = ze(c),
                                u = ze(l);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: c,
                                popperEscapeOffsets: l,
                                isReferenceHidden: f,
                                hasPopperEscaped: u
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": f,
                                "data-popper-escaped": u
                            })
                        }
                    }]
                }),
                Ue = n("F0GY"),
                Ie = n.n(Ue),
                Ye = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                Xe = window.document && window.document.createElement ? o.useLayoutEffect : o.useEffect,
                Qe = [],
                Ze = (0, o.forwardRef)((function(e, t) {
                    var n, o = e.arrow,
                        s = e.shadow,
                        c = e.variant,
                        l = void 0 === c ? "primary" : c,
                        p = (e.placement, e.style),
                        d = e.radius,
                        v = e.arrowRef,
                        h = e.arrowStyle,
                        b = e.bubbleFontSize,
                        g = void 0 === b ? 14 : b,
                        y = (0, r.__rest)(e, ["arrow", "shadow", "variant", "placement", "style", "radius", "arrowRef", "arrowStyle", "bubbleFontSize"]),
                        w = (0, m.r)().prefixCls,
                        x = "".concat(w, "-bubble"),
                        O = f()(x, "".concat(x, "-web"), ((n = {})["".concat(x, "__").concat(l)] = !!l, n["data-font-".concat(g)] = !!g, n["web-shadow"] = !!s, n), e.className),
                        E = {
                            borderRadius: d
                        };
                    if (i.lq) throw new Error("this component only use Web side");
                    return a().createElement(u.Ay, (0, r.__assign)({}, y, {
                        className: O,
                        style: p,
                        ref: t
                    }), a().createElement(u.Ay, {
                        style: E,
                        className: "".concat(x, "-content"),
                        children: e.children
                    }), !!o && a().createElement(u.Ay, {
                        className: "".concat(x, "-web-arrow"),
                        style: h,
                        ref: v,
                        "data-popper-arrow": !0
                    }))
                }));
            Ze.displayName = "Bubble";
            const Ge = Ze;
            var $e = n("Svbh"),
                Je = function(e) {
                    var t, n = e.open,
                        c = e.once,
                        l = e.arrow,
                        v = e.offset,
                        h = void 0 === v ? 12 : v,
                        b = e.disabled,
                        g = e.tooltips,
                        O = e.variant,
                        A = void 0 === O ? "gray" : O,
                        _ = e.placement,
                        M = void 0 === _ ? "top" : _,
                        C = e.trigger,
                        N = void 0 === C ? "hover" : C,
                        S = e.onVisibleChange,
                        j = e.enablePortal,
                        R = e.portalNode,
                        L = e.reactPopperProps,
                        D = void 0 === L ? {} : L,
                        W = D.sameWidth,
                        T = D.popperWidth,
                        B = D.offsetX,
                        F = D.screenPadding,
                        H = e.bubbleClassName,
                        q = e.bubbleWrapperClz,
                        z = e.triggerClassName,
                        V = e.enableHoverSafeArea,
                        U = e.delay,
                        I = void 0 === U ? w : U,
                        Y = e.enableClickBubble,
                        X = e.ariaRole,
                        Q = void 0 === X ? E : X,
                        Z = (0, r.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "reactPopperProps", "bubbleClassName", "bubbleWrapperClz", "triggerClassName", "enableHoverSafeArea", "delay", "enableClickBubble", "ariaRole"]),
                        G = (0, o.useState)(n),
                        $ = G[0],
                        J = G[1],
                        K = (0, o.useState)(null),
                        ee = K[0],
                        te = K[1],
                        ne = (0, m.r)(),
                        re = ne.prefixCls,
                        oe = ne.isMobile,
                        ae = ne.isTablet,
                        ie = ne.isRTL,
                        se = ne.isClient,
                        ce = (0, o.useState)(null),
                        le = ce[0],
                        fe = ce[1],
                        ue = (0, o.useState)(null),
                        pe = ue[0],
                        de = ue[1],
                        me = (0, o.useState)(null),
                        ve = me[0],
                        he = me[1],
                        be = (0, o.useState)(""),
                        ge = be[0],
                        ye = be[1],
                        we = !i.lq && !oe && !ae,
                        xe = "".concat(re, "-tooltips"),
                        Oe = f()("".concat(re, "-tooltips-trans"), q),
                        Ee = f()("".concat(xe, "-ele"), ((t = {})["".concat(xe, "-ele-rtl")] = !!ie, t["".concat(xe, "-ele-with-safe-area")] = !!V && "hover" === N, t), z),
                        Ae = f()(xe, {
                            active: $
                        }, H),
                        _e = f()("".concat(xe, "-wrap"), "".concat(xe, "-web"), {
                            active: !b && $
                        }, Z.className);
                    N = we ? N : "click";
                    var ke = ie && y[M] || M;
                    if (i.lq) throw new Error("this component only use Web side");
                    var Me = (0, s.d)({
                            fn: S
                        }).debounceFn,
                        Ce = (0, o.useCallback)((function(e) {
                            b || J((function(t) {
                                var n = "boolean" === typeof e ? e : !t;
                                return t !== n && (null === Me || void 0 === Me || Me(n)), t !== n ? n : t
                            }))
                        }), [b, Me]),
                        Pe = (0, o.useMemo)((function() {
                            var e, t, n;
                            return "number" === typeof I ? {
                                enter: I,
                                leave: I,
                                click: I
                            } : {
                                enter: null !== (e = I.enter) && void 0 !== e ? e : w,
                                leave: null !== (t = I.leave) && void 0 !== t ? t : w,
                                click: null !== (n = I.click) && void 0 !== n ? n : w
                            }
                        }), [I]),
                        Ne = (0, s.d)({
                            fn: Ce,
                            time: Pe.enter
                        }),
                        Se = Ne.debounceFn,
                        je = Ne.clearTimer,
                        Re = (0, s.d)({
                            fn: Ce,
                            time: Pe.leave
                        }),
                        Le = Re.debounceFn,
                        De = Re.clearTimer,
                        We = (0, s.d)({
                            fn: Ce,
                            time: Pe.click
                        }).debounceFn,
                        Te = (0, o.useCallback)((function(e) {
                            var t = null === pe || void 0 === pe ? void 0 : pe.contains(e.target),
                                n = null === le || void 0 === le ? void 0 : le.contains(e.target);
                            !(!c && t || n) && $ && We(!1)
                        }), [We, le, pe, c, $]);
                    h = l ? Math.max(h, 4) : h;
                    var Be = a().useMemo((function() {
                            return {
                                name: "applyArrowHide",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = t.placement,
                                        r = t.elements,
                                        o = t.rects,
                                        a = r.arrow,
                                        i = r.reference;
                                    if (a && i) {
                                        var s = (["top", "bottom"].includes(n.split("-")[0]) ? o.reference.width : o.reference.height) / 2 - 3,
                                            c = Math.abs(t.modifiersData.arrow.centerOffset),
                                            l = Math.abs(c) > s;
                                        a && (l ? a.setAttribute("data-hide", "") : a.removeAttribute("data-hide"))
                                    }
                                }
                            }
                        }), []),
                        Fe = [{
                            name: "arrow",
                            options: {
                                element: ve,
                                padding: 12
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [B || 0, h]
                            }
                        }, Be],
                        He = a().useMemo((function() {
                            return {
                                name: "sameWidth",
                                enabled: !0,
                                phase: "beforeWrite",
                                requires: ["computeStyles"],
                                fn: function(e) {
                                    var t = e.state;
                                    t.styles.popper.width = "".concat(T || t.rects.reference.width, "px")
                                },
                                effect: function(e) {
                                    var t = e.state;
                                    t.elements.popper.style.width = "".concat(T || t.elements.reference.offsetWidth, "px")
                                }
                            }
                        }), [T]),
                        qe = a().useMemo((function() {
                            return {
                                name: "preventOverflow",
                                options: {
                                    padding: F
                                }
                            }
                        }), [F]);
                    (T || W) && Fe.push(He), F && Fe.push(qe);
                    var ze = function(e, t, n) {
                            void 0 === n && (n = {});
                            var r = o.useRef(null),
                                a = {
                                    onFirstUpdate: n.onFirstUpdate,
                                    placement: n.placement || "bottom",
                                    strategy: n.strategy || "absolute",
                                    modifiers: n.modifiers || Qe
                                },
                                i = o.useState({
                                    styles: {
                                        popper: {
                                            position: a.strategy,
                                            left: "0",
                                            top: "0"
                                        },
                                        arrow: {
                                            position: "absolute"
                                        }
                                    },
                                    attributes: {}
                                }),
                                s = i[0],
                                c = i[1],
                                l = o.useMemo((function() {
                                    return {
                                        name: "updateState",
                                        enabled: !0,
                                        phase: "write",
                                        fn: function(e) {
                                            var t = e.state,
                                                n = Object.keys(t.elements);
                                            p.flushSync((function() {
                                                c({
                                                    styles: Ye(n.map((function(e) {
                                                        return [e, t.styles[e] || {}]
                                                    }))),
                                                    attributes: Ye(n.map((function(e) {
                                                        return [e, t.attributes[e]]
                                                    })))
                                                })
                                            }))
                                        },
                                        requires: ["computeStyles"]
                                    }
                                }), []),
                                f = o.useMemo((function() {
                                    var e = {
                                        onFirstUpdate: a.onFirstUpdate,
                                        placement: a.placement,
                                        strategy: a.strategy,
                                        modifiers: [].concat(a.modifiers, [l, {
                                            name: "applyStyles",
                                            enabled: !1
                                        }])
                                    };
                                    return Ie()(r.current, e) ? r.current || e : (r.current = e, e)
                                }), [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, l]),
                                u = o.useRef();
                            return Xe((function() {
                                u.current && u.current.setOptions(f)
                            }), [f]), Xe((function() {
                                if (null != e && null != t) {
                                    var r = (n.createPopper || Ve)(e, t, f);
                                    return u.current = r,
                                        function() {
                                            r.destroy(), u.current = null
                                        }
                                }
                            }), [e, t, n.createPopper]), {
                                state: u.current ? u.current.state : null,
                                styles: s.styles,
                                attributes: s.attributes,
                                update: u.current ? u.current.update : null,
                                forceUpdate: u.current ? u.current.forceUpdate : null
                            }
                        }(le, pe, {
                            placement: ke,
                            strategy: "fixed",
                            modifiers: Fe
                        }),
                        Ue = ze.styles,
                        Ze = ze.attributes,
                        Je = ze.update,
                        Ke = (0, o.useCallback)((function(e) {
                            !Y && x(e);
                            var t = null === pe || void 0 === pe ? void 0 : pe.contains(e.target),
                                n = !c && t;
                            t && Je && Je(), n || We(e)
                        }), [c, pe, We, Je, Y]),
                        et = (0, o.useCallback)((function(e) {
                            if (pe && le) {
                                var t, n, r, o = pe.getBoundingClientRect(),
                                    a = le.getBoundingClientRect(),
                                    i = e.clientX - a.left,
                                    s = e.clientY - a.top,
                                    c = {
                                        top: o.top - a.top,
                                        bottom: o.bottom - a.top,
                                        left: o.left - a.left,
                                        right: o.right - a.left
                                    };
                                switch (ke.split("-")[0]) {
                                    case "left":
                                        i = Math.min(i + 4, a.width);
                                        var l = c.top + (i - c.right) * (0 - c.top) / (a.width - c.right),
                                            f = c.bottom + (i - c.right) * (a.height - c.bottom) / (a.width - c.right);
                                        s = Math.min(Math.max(s, l), f), t = "".concat(i, ",").concat(s), n = "".concat(c.right, ",").concat(c.top - 2), r = "".concat(c.right, ",").concat(c.bottom + 2);
                                        break;
                                    case "right":
                                        i = Math.max(i - 4, 0);
                                        var u = c.top + (i - c.left) * (0 - c.top) / (0 - c.left),
                                            p = c.bottom + (i - c.left) * (a.height - c.bottom) / (0 - c.left);
                                        s = Math.min(Math.max(s, u), p), t = "".concat(i, ",").concat(s), n = "".concat(c.left, ",").concat(c.top - 2), r = "".concat(c.left, ",").concat(c.bottom + 2);
                                        break;
                                    case "top":
                                        s = Math.min(s + 4, a.height);
                                        var d = c.left + (s - c.bottom) * (0 - c.left) / (a.height - c.bottom),
                                            m = c.right + (s - c.bottom) * (a.width - c.right) / (a.height - c.bottom);
                                        i = Math.min(Math.max(i, d), m), t = "".concat(i, ",").concat(s), n = "".concat(c.left, ",").concat(c.bottom), r = "".concat(c.right, ",").concat(c.bottom);
                                        break;
                                    default:
                                        s = Math.max(s - 4, 0);
                                        var v = c.left + (s - c.top) * (0 - c.left) / (0 - c.top),
                                            h = c.right + (s - c.top) * (a.width - c.right) / (0 - c.top);
                                        i = Math.min(Math.max(i, v), h), t = "".concat(i, ",").concat(s), n = "".concat(c.left, ",").concat(c.top), r = "".concat(c.right, ",").concat(c.top)
                                }
                                ye("".concat(t, " ").concat(n, " ").concat(r))
                            }
                        }), [pe, le, ke]);
                    (0, o.useEffect)((function() {
                        return document.addEventListener("click", Te),
                            function() {
                                document.removeEventListener("click", Te)
                            }
                    }), [Te]), (0, o.useEffect)((function() {
                        "undefined" !== typeof n && !!n !== $ && J(n)
                    }), [n, $]), (0, o.useEffect)((function() {
                        R instanceof HTMLElement ? te(R) : te(document.body)
                    }), [R]), (0, P.op)((function() {
                        null === Je || void 0 === Je || Je()
                    }), [g, Je]);
                    var tt = "hover" === N ? {
                            onMouseEnter: function() {
                                De(), Se(!0)
                            },
                            onMouseLeave: function() {
                                je(), Le(!1)
                            },
                            onMouseMove: V ? et : void 0
                        } : {
                            onClick: Ke
                        },
                        nt = (0, r.__assign)({
                            arrow: l,
                            variant: A,
                            shadow: !0
                        }, Z);
                    "gray" === A && (nt = (0, r.__assign)((0, r.__assign)({}, nt), {
                        shadow: !1
                    }));
                    var rt = !b && $,
                        ot = k(xe, Q, rt),
                        at = ot.triggerAriaProps,
                        it = ot.contentAriaProps,
                        st = a().createElement($e.A, {
                            visible: rt,
                            className: Oe
                        }, a().createElement(Ge, (0, r.__assign)({}, it, nt, {
                            className: Ae,
                            ref: de,
                            arrowRef: he,
                            arrowStyle: Ue.arrow,
                            style: (0, r.__assign)((0, r.__assign)({}, Ue.popper), null === Z || void 0 === Z ? void 0 : Z.style)
                        }, Ze.popper, {
                            children: g
                        })));
                    return a().createElement(u.Ay, (0, r.__assign)({
                        ref: fe
                    }, tt, {
                        className: _e
                    }), V && "hover" === N && $ && a().createElement("svg", {
                        className: "".concat(xe, "-safety-triangle"),
                        pointerEvents: "none"
                    }, a().createElement("polygon", {
                        pointerEvents: "auto",
                        points: ge
                    })), a().createElement(u.Ay, (0, r.__assign)({}, at, {
                        className: Ee,
                        children: Z.children
                    })), se && j && null !== ee ? d().createPortal(st, ee) : st)
                };
            Je.displayName = "Tooltips";
            const Ke = Je;
            var et = function(e) {
                var t = e.useReactPopper,
                    n = e.reactPopperProps,
                    o = e.enableHoverSafeArea,
                    s = e.bubbleWrapperClz,
                    c = (0, r.__rest)(e, ["useReactPopper", "reactPopperProps", "enableHoverSafeArea", "bubbleWrapperClz"]);
                return !i.lq && t ? a().createElement(Ke, (0, r.__assign)({
                    reactPopperProps: n,
                    enableHoverSafeArea: o,
                    bubbleWrapperClz: s
                }, c)) : a().createElement(C, (0, r.__assign)({}, c))
            };
            et.displayName = "Tooltips";
            const tt = et
        },
        F0GY: e => {
            var t = "undefined" !== typeof Element,
                n = "function" === typeof Map,
                r = "function" === typeof Set,
                o = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function a(e, i) {
                if (e === i) return !0;
                if (e && i && "object" == typeof e && "object" == typeof i) {
                    if (e.constructor !== i.constructor) return !1;
                    var s, c, l, f;
                    if (Array.isArray(e)) {
                        if ((s = e.length) != i.length) return !1;
                        for (c = s; 0 !== c--;)
                            if (!a(e[c], i[c])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && i instanceof Map) {
                        if (e.size !== i.size) return !1;
                        for (f = e.entries(); !(c = f.next()).done;)
                            if (!i.has(c.value[0])) return !1;
                        for (f = e.entries(); !(c = f.next()).done;)
                            if (!a(c.value[1], i.get(c.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && i instanceof Set) {
                        if (e.size !== i.size) return !1;
                        for (f = e.entries(); !(c = f.next()).done;)
                            if (!i.has(c.value[0])) return !1;
                        return !0
                    }
                    if (o && ArrayBuffer.isView(e) && ArrayBuffer.isView(i)) {
                        if ((s = e.length) != i.length) return !1;
                        for (c = s; 0 !== c--;)
                            if (e[c] !== i[c]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === i.source && e.flags === i.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === i.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === i.toString();
                    if ((s = (l = Object.keys(e)).length) !== Object.keys(i).length) return !1;
                    for (c = s; 0 !== c--;)
                        if (!Object.prototype.hasOwnProperty.call(i, l[c])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (c = s; 0 !== c--;)
                        if (("_owner" !== l[c] && "__v" !== l[c] && "__o" !== l[c] || !e.$$typeof) && !a(e[l[c]], i[l[c]])) return !1;
                    return !0
                }
                return e !== e && i !== i
            }
            e.exports = function(e, t) {
                try {
                    return a(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        }
    }
]);
//# debugId=b372a0d3-1e0c-57e4-ba4c-80ed808ec993