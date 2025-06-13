! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "423de9d8-8911-5554-beab-08d18817f6c6")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [465], {
        vCRf: (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => c
            });
            var r = n("sViW"),
                i = n("Pz56"),
                o = n.n(i),
                a = n("VA12"),
                l = n("a59x"),
                c = function() {
                    var e = (0, r.A)(o().mark((function e(t) {
                        var n;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, a.get)("/bapi/composite/v1/public/bigdata/finance/kline/openPrice2?".concat((0, l.E2)(t)));
                                case 2:
                                    return n = e.sent.data, e.abrupt("return", n || {});
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            ! function() {
                var e = (0, r.A)(o().mark((function e(t) {
                    var n;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, (0, a.get)("/bapi/composite/v1/public/bigdata/finance/kline/openPrice?".concat((0, l.E2)(t)));
                            case 2:
                                return n = e.sent.data, e.abrupt("return", n || {});
                            case 4:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }()
        },
        "1TYZ": (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => O
            });
            var r = n("VP0d"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("ifOS"),
                l = n.n(a),
                c = n("5BvR"),
                s = n("nChe"),
                u = n.n(s),
                f = n("BK7R"),
                d = n("aWzz"),
                p = n.n(d),
                m = p().oneOfType([p().string, p().number]),
                h = {
                    orientation: p().oneOf(["portrait", "landscape"]),
                    scan: p().oneOf(["progressive", "interlace"]),
                    aspectRatio: p().string,
                    deviceAspectRatio: p().string,
                    height: m,
                    deviceHeight: m,
                    width: m,
                    deviceWidth: m,
                    color: p().bool,
                    colorIndex: p().bool,
                    monochrome: p().bool,
                    resolution: m
                },
                v = (0, f.A)({
                    minAspectRatio: p().string,
                    maxAspectRatio: p().string,
                    minDeviceAspectRatio: p().string,
                    maxDeviceAspectRatio: p().string,
                    minHeight: m,
                    maxHeight: m,
                    minDeviceHeight: m,
                    maxDeviceHeight: m,
                    minWidth: m,
                    maxWidth: m,
                    minDeviceWidth: m,
                    maxDeviceWidth: m,
                    minColor: p().number,
                    maxColor: p().number,
                    minColorIndex: p().number,
                    maxColorIndex: p().number,
                    minMonochrome: p().number,
                    maxMonochrome: p().number,
                    minResolution: m,
                    maxResolution: m
                }, h),
                g = {
                    all: p().bool,
                    grid: p().bool,
                    aural: p().bool,
                    braille: p().bool,
                    handheld: p().bool,
                    print: p().bool,
                    projection: p().bool,
                    screen: p().bool,
                    tty: p().bool,
                    tv: p().bool,
                    embossed: p().bool
                },
                b = (0, f.A)({}, g, v);
            h.type = Object.keys(g);
            const x = {
                all: b,
                types: g,
                matchers: h,
                features: v
            };
            const y = function(e) {
                var t = [];
                return Object.keys(x.all).forEach((function(n) {
                    var r = e[n];
                    null != r && t.push(function(e, t) {
                        var n = (0, c.A)(e);
                        return "number" === typeof t && (t = "".concat(t, "px")), !0 === t ? n : !1 === t ? "not ".concat(n) : "(".concat(n, ": ").concat(t, ")")
                    }(n, r))
                })), t.join(" and ")
            };
            const A = o().createContext();
            var E = function(e) {
                    if (!e) return null;
                    var t = Object.keys(e);
                    return 0 === t.length ? null : t.reduce((function(t, n) {
                        return t[(0, c.A)(n)] = e[n], t
                    }), {})
                },
                _ = function() {
                    var e = o().useRef(!1);
                    return o().useEffect((function() {
                        e.current = !0
                    }), []), e.current
                },
                w = function(e) {
                    var t = function() {
                            return function(e) {
                                return e.query || y(e)
                            }(e)
                        },
                        n = (0, r.A)(o().useState(t), 2),
                        i = n[0],
                        a = n[1];
                    return o().useEffect((function() {
                        var e = t();
                        i !== e && a(e)
                    }), [e]), i
                };
            const k = function(e, t, n) {
                var i = function(e) {
                        var t = o().useContext(A),
                            n = function() {
                                return E(e) || E(t)
                            },
                            i = (0, r.A)(o().useState(n), 2),
                            a = i[0],
                            l = i[1];
                        return o().useEffect((function() {
                            var e = n();
                            u()(a, e) || l(e)
                        }), [e, t]), a
                    }(t),
                    a = w(e);
                if (!a) throw new Error("Invalid or missing MediaQuery!");
                var c = function(e, t) {
                        var n = function() {
                                return l()(e, t || {}, !!t)
                            },
                            i = (0, r.A)(o().useState(n), 2),
                            a = i[0],
                            c = i[1],
                            s = _();
                        return o().useEffect((function() {
                            return s && c(n()),
                                function() {
                                    a.dispose()
                                }
                        }), [e, t]), a
                    }(a, i),
                    s = function(e) {
                        var t = (0, r.A)(o().useState(e.matches), 2),
                            n = t[0],
                            i = t[1];
                        return o().useEffect((function() {
                            var t = function() {
                                i(e.matches)
                            };
                            return e.addListener(t), t(),
                                function() {
                                    e.removeListener(t)
                                }
                        }), [e]), n
                    }(c),
                    f = _();
                return o().useEffect((function() {
                    f && n && n(s)
                }), [s]), s
            };
            var C = {
                    query: "screen and (max-width: 767px)"
                },
                N = {
                    query: "screen and (max-width: 1023px)"
                },
                S = {
                    query: "screen and (max-width: 1279px)"
                },
                M = {
                    query: "screen and (max-width: 1439px)"
                };

            function O() {
                var e = k(C),
                    t = k(N),
                    n = k(S);
                return {
                    isMobile: e,
                    isIPad: t,
                    is13Desk: k(M),
                    isLeastWebSize: n
                }
            }
        },
        yys2: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var r = n("DTvD"),
                i = n("NrY2");

            function o() {
                return r.useContext(i.A)
            }
        },
        kLXr: (e, t, n) => {
            "use strict";
            n.d(t, {
                c: () => y
            });
            var r = n("M5j3"),
                i = n("gZfF"),
                o = n("DTvD"),
                a = n.n(o),
                l = n("LCuF"),
                c = n("C6y2"),
                s = n("VP0d"),
                u = n("6aZm"),
                f = n("w/Qz"),
                d = function(e) {
                    return a().createElement(f.A, (0, r.A)({
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, e), a().createElement("path", {
                        d: "M3 10.5v3h18v-3H3z",
                        fill: "currentColor"
                    }))
                },
                p = function(e) {
                    return a().createElement(f.A, (0, r.A)({
                        width: "1em",
                        height: "1em",
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, e), a().createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",
                        fill: "currentColor"
                    }))
                },
                m = function(e) {
                    return e["data-indeterminate"] ? a().createElement(d, (0, r.A)({}, e)) : a().createElement(p, (0, r.A)({}, e))
                },
                h = (0, u.UF)("uikit-core", "Checkbox"),
                v = (0, o.forwardRef)((function(e, t) {
                    h();
                    var n = e.className,
                        o = e.sx,
                        c = e.defaultChecked,
                        u = void 0 !== c && c,
                        f = e.checked,
                        d = e.indeterminate,
                        p = void 0 !== d && d,
                        v = e.size,
                        g = void 0 === v ? 16 : v,
                        b = e.onChange,
                        x = e.children,
                        y = (0, i.A)(e, ["className", "sx", "defaultChecked", "checked", "indeterminate", "size", "onChange", "children"]),
                        A = a().useRef(null != f).current,
                        E = (0, s.A)(a().useState(u), 2),
                        _ = E[0],
                        w = E[1];
                    return A && f !== _ && w(void 0 !== f && f), a().createElement(a().Fragment, null, a().createElement(l.A, {
                        className: n,
                        sx: o,
                        __css: {
                            mr: "xs",
                            flexShrink: 0,
                            width: g,
                            height: g,
                            lineHeight: "number" === typeof g ? "".concat(g, "px") : g,
                            "> svg": {
                                boxSizing: "border-box",
                                cursor: "pointer",
                                border: "1px solid",
                                borderColor: "t.disabled",
                                borderRadius: "small",
                                maxWidth: "100%",
                                maxHeight: "100%",
                                bg: "transparent",
                                fill: "transparent"
                            },
                            "> svg path": {
                                fill: "inherit"
                            },
                            ":hover": {
                                "input:not(:disabled) ~ svg": {
                                    borderColor: "primary"
                                }
                            },
                            "input:checked ~ svg": {
                                border: "none",
                                bg: "primary",
                                fill: p ? "checkbox.indeterminateFill" : "bg1"
                            },
                            "input:disabled ~ svg": {
                                cursor: "not-allowed",
                                bg: "line",
                                fill: "line",
                                border: "none"
                            },
                            "input:checked:disabled ~ svg": {
                                fill: "t.disabled"
                            }
                        }
                    }, a().createElement(l.A, (0, r.A)({
                        ref: t,
                        as: "input",
                        type: "checkbox",
                        "data-bn-type": "checkbox",
                        hidden: !0
                    }, y, {
                        checked: _,
                        "data-indeterminate": _ && p,
                        onChange: function(e) {
                            var t = !_;
                            A || w(t), e.target.checked = t, e.currentTarget.checked = t, b && b(e)
                        },
                        sx: {
                            position: "absolute",
                            opacity: 0,
                            zIndex: -1,
                            width: 1,
                            height: 1,
                            overflow: "hidden"
                        }
                    })), a().createElement(m, {
                        "aria-hidden": "true",
                        "data-indeterminate": p
                    })), x)
                }));
            v.displayName = "Checkbox";
            const g = v;
            var b = n("yhUQ");
            const x = function(e) {
                return a().createElement(f.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",
                    fill: "currentColor"
                }))
            };
            var y = a().forwardRef((function(e, t) {
                var n = e.multiple,
                    o = void 0 !== n && n,
                    s = e.isActive,
                    u = void 0 !== s && s,
                    f = e.isChecked,
                    d = void 0 !== f && f,
                    p = e.value,
                    m = e.disabled,
                    h = e.showChecked,
                    v = void 0 !== h && h,
                    y = e.children,
                    A = e.prefix,
                    E = e.suffix,
                    _ = e.combo,
                    w = e.suffixLine,
                    k = (0, i.A)(e, ["multiple", "isActive", "isChecked", "value", "disabled", "showChecked", "children", "prefix", "suffix", "combo", "suffixLine"]);
                return a().createElement(l.A, (0, r.A)({
                    as: "li",
                    role: "option",
                    id: p,
                    key: p,
                    title: p,
                    ref: t,
                    className: d ? "bnb-active-option bn-sdd-option-item" : "bn-sdd-option-item",
                    __css: {
                        color: !m && u ? "t.yellow" : "t.primary",
                        opacity: m ? .4 : 1,
                        cursor: m ? "default" : "pointer",
                        bg: "popupBg",
                        ":hover": {
                            bg: m ? "" : "bg3"
                        },
                        py: _ ? "12px" : "8px",
                        lineHeight: 1
                    }
                }, k), a().createElement(c.A, {
                    className: "bn-sdd-option"
                }, o && a().createElement(g, {
                    checked: d,
                    disabled: m
                }), A && a().createElement(c.A, {
                    mr: 2,
                    alignItems: "center"
                }, A), a().createElement(l.A, {
                    flex: 1
                }, y), v && a().createElement(a().Fragment, null, a().createElement(c.A, {
                    flex: 1,
                    minWidth: "8px"
                }), a().createElement(x, {
                    color: d ? "primary" : "transparent"
                })), E && a().createElement(l.A, {
                    color: "t.third",
                    ml: "xs"
                }, E)), _ && a().createElement(l.A, {
                    __css: {
                        px: "sm"
                    }
                }, a().createElement(b.A, {
                    color: "t.third",
                    variant: "caption",
                    style: {
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        lineHeight: "16px"
                    }
                }, _)), w && a().createElement(l.A, {
                    __css: {
                        px: "sm"
                    }
                }, w))
            }));
            y.displayName = "SearchDropdownOption"
        },
        "66WT": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => Oe
            });
            var r = n("M5j3"),
                i = n("BK7R"),
                o = n("QUKP"),
                a = n("gZfF"),
                l = n("VP0d"),
                c = n("tEf9"),
                s = n("DTvD"),
                u = n.n(s),
                f = n("C6y2"),
                d = n("LCuF"),
                p = n("5XPI"),
                m = n("hQCL"),
                h = n("w/Qz");
            const v = function(e) {
                return u().createElement(h.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",
                    fill: "currentColor"
                }))
            };
            const g = function(e) {
                return u().createElement(h.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z",
                    fill: "currentColor"
                }))
            };
            const b = function(e) {
                return u().createElement(h.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",
                    fill: "currentColor"
                }))
            };
            var x = n("P/al"),
                y = n.n(x),
                A = n("eN33"),
                E = n.n(A),
                _ = n("sGJY"),
                w = n.n(_),
                k = n("LF7v"),
                C = n.n(k),
                N = n("yhUQ"),
                S = n("O94r"),
                M = n.n(S),
                O = s.forwardRef((function(e, t) {
                    var n = e.label,
                        r = e.children,
                        i = e.groupNameClickable,
                        o = e.handleGroupNameClick,
                        a = e.isActive,
                        l = void 0 !== a && a;
                    return s.createElement(d.A, {
                        as: "li",
                        ref: t
                    }, s.createElement(d.A, {
                        __css: {
                            cursor: i ? "pointer" : "default"
                        },
                        className: M()("bn-sdd-optionGroupLabel", {
                            "is-active": l
                        }),
                        onClick: function(e) {
                            i && o && o(e)
                        }
                    }, s.createElement(N.A, {
                        className: "bn-sdd-optionGroupText"
                    }, n)), s.createElement(d.A, {
                        as: "ul",
                        padding: 0
                    }, r))
                }));
            O.displayName = "SearchDropdownOptGroup";
            var F = n("kLXr"),
                D = "32px",
                R = 32,
                B = 40,
                z = 48,
                P = (0, s.forwardRef)((function(e, t) {
                    var n = e.children,
                        i = e.required;
                    return n ? u().createElement(d.A, (0, r.A)({
                        ref: t,
                        as: "label",
                        className: M()({
                            "bn-input-label-required": i
                        }, "bn-input-label"),
                        tx: "forms",
                        variant: "label"
                    }, e, {
                        __css: {
                            position: "absolute",
                            top: "-".concat(D),
                            left: "0px",
                            lineHeight: D,
                            zIndex: "1",
                            cursor: "text",
                            "&.bn-input-label-required::before": {
                                display: "inline-block",
                                marginRight: "minor",
                                color: "error",
                                content: '"*"'
                            }
                        }
                    })) : null
                })),
                L = (0, s.forwardRef)((function(e, t) {
                    return e.children ? u().createElement(d.A, (0, r.A)({
                        ref: t,
                        as: "label",
                        className: "bn-input-label",
                        tx: "forms",
                        variant: "label"
                    }, e, {
                        __css: {
                            position: "absolute",
                            top: "-".concat(D),
                            right: 0,
                            lineHeight: D,
                            zIndex: "1",
                            cursor: "text"
                        }
                    })) : null
                }));
            P.displayName = "TextFieldLabel";
            var U = (0, s.forwardRef)((function(e, t) {
                var n = e.onFocus,
                    i = e.onBlur,
                    o = e.onChange,
                    l = (0, a.A)(e, ["onFocus", "onBlur", "onChange"]);
                return u().createElement(d.A, (0, r.A)({
                    ref: t,
                    as: "input",
                    "data-bn-type": "input"
                }, l, {
                    onFocus: n,
                    onBlur: i,
                    onChange: o,
                    __css: {
                        width: "100%",
                        height: "100%",
                        padding: "0",
                        outline: "none",
                        border: "none",
                        bg: "inherit",
                        opacity: 1,
                        "&::placeholder": {
                            color: "t.placeholder",
                            fontSize: "14px"
                        }
                    }
                }))
            }));
            U.displayName = "TextFieldInput";
            var T = (0, s.forwardRef)((function(e, t) {
                var n = e.variant,
                    c = void 0 === n ? "default" : n,
                    s = e.id,
                    p = e.value,
                    m = e.defaultValue,
                    h = e.label,
                    v = e.placeholder,
                    g = e.error,
                    b = e.disabled,
                    x = e.prefix,
                    y = e.suffix,
                    A = e.infoText,
                    E = void 0 === A ? "" : A,
                    _ = e.errorText,
                    w = void 0 === _ ? "" : _,
                    k = e.onFocus,
                    C = e.onBlur,
                    S = e.onChange,
                    O = e.boxProps,
                    F = e.required,
                    T = e.extraInfo,
                    $ = e.size,
                    I = void 0 === $ ? "lg" : $,
                    j = (0, a.A)(e, ["variant", "id", "value", "defaultValue", "label", "placeholder", "error", "disabled", "prefix", "suffix", "infoText", "errorText", "onFocus", "onBlur", "onChange", "boxProps", "required", "extraInfo", "size"]),
                    H = (0, l.A)(u().useState(""), 2),
                    G = H[0],
                    V = H[1],
                    W = u().useRef(null !== p && void 0 !== p).current,
                    q = (0, l.A)(u().useState(m), 2),
                    Y = q[0],
                    Q = q[1];
                W && p !== Y && Q(p);
                var X = g ? w : E,
                    K = (0, l.A)(u().useState(16), 2),
                    Z = K[0],
                    J = K[1],
                    ee = g ? "error" : "info",
                    te = "string" === typeof h ? h : j["area-label"],
                    ne = b ? "disabled" : g ? "error" : G;
                "" !== ne && (ne = "bn-input-status-".concat(ne));
                return u().createElement(f.A, (0, r.A)({
                    tx: "textFieldV2",
                    className: M()([ne]),
                    variant: c
                }, O, {
                    __css: (0, o.A)((0, i.A)({
                        display: "inline-flex",
                        position: "relative",
                        mt: h ? D : "0px",
                        mb: X.length > 0 ? "".concat(Z, "px") : "0px",
                        alignItems: "center",
                        lineHeight: 1.6,
                        height: "".concat(z, "px")
                    }, "lg" === I && {
                        height: "".concat(z, "px")
                    }, "md" === I && {
                        height: "".concat(B, "px")
                    }, "sm" === I && {
                        height: "".concat(R, "px")
                    }), {
                        "&.bn-input-status-focus .bn-input-label": {
                            top: "-".concat(D)
                        }
                    })
                }), x && u().createElement(d.A, {
                    className: "bn-input-prefix"
                }, x), u().createElement(U, (0, r.A)({
                    id: s,
                    onFocus: function(e) {
                        V("focus"), k && k(e)
                    },
                    onBlur: function(e) {
                        V(""), C && C(e)
                    },
                    onChange: function(e) {
                        W || Q(e.target.value), S && S(e)
                    },
                    ref: t,
                    value: Y,
                    "aria-label": te,
                    disabled: b,
                    placeholder: v,
                    required: F
                }, j)), y && u().createElement(d.A, {
                    className: "bn-input-suffix"
                }, y), u().createElement(P, {
                    htmlFor: s,
                    required: F
                }, h), T && u().createElement(L, null, T), X.length > 0 && u().createElement(N.A, {
                    ref: function(e) {
                        if (e) {
                            var t = e.getBoundingClientRect().height;
                            J(t)
                        }
                    },
                    className: "bn-input-helper-text",
                    variant: "textField.helperText.".concat(ee),
                    __css: {
                        position: "absolute",
                        bottom: "".concat(-1 * Z - 4, "px"),
                        lineHeight: "".concat(Z, "px")
                    }
                }, X))
            }));
            T.displayName = "TextFieldV2";
            const $ = T;
            var I = n("6aZm"),
                j = {
                    large: {
                        px: "md",
                        py: "ls",
                        fontSize: "md",
                        lineHeight: "24px",
                        minWidth: "80px"
                    },
                    normal: {
                        px: "sm",
                        py: "s",
                        fontSize: "sm",
                        lineHeight: "20px",
                        minWidth: "60px"
                    },
                    small: {
                        px: "ls",
                        py: "xxs",
                        fontSize: "sm",
                        lineHeight: "20px",
                        minWidth: "52px"
                    },
                    tiny: {
                        px: "xs",
                        py: "minor",
                        fontSize: "xs",
                        lineHeight: "16px",
                        minWidth: "40px"
                    },
                    dwarf: {
                        px: "ls",
                        py: "tiny",
                        fontSize: "sm",
                        lineHeight: "20px",
                        minWidth: "123px"
                    },
                    giant: {
                        px: "md",
                        py: "xs",
                        fontSize: "md",
                        lineHeight: "24px",
                        minWidth: "100%"
                    }
                },
                H = {
                    xl: j.large,
                    l: j.normal,
                    m: j.small,
                    s: j.tiny,
                    xs: {
                        px: 8,
                        py: 4,
                        fontSize: "12px",
                        lineHeight: "12px",
                        minHeight: "auto"
                    }
                };
            const G = (0, i.A)({}, j, H);
            var V = function(e, t) {
                    return "primary" === e ? "primary.default" : "outline" === e ? "default.secondary" : "".concat(e, ".").concat((n = "outline" === e ? "default" : "primary", t || n));
                    var n
                },
                W = (0, I.UF)("uikit-core", "Button"),
                q = (0, s.forwardRef)((function(e, t) {
                    W();
                    var n = e.variant,
                        o = void 0 === n ? "default" : n,
                        a = e.colorStyle,
                        l = e.sz,
                        s = void 0 === l ? "small" : l,
                        f = e.inactive,
                        p = e.className,
                        m = e.onClick,
                        h = function(e, t, n) {
                            var r = [];
                            return e && r.push(e), t && r.push(n), r.join(" ").trim()
                        }(p, !!f, "inactive");
                    return u().createElement(d.A, (0, r.A)({
                        ref: t,
                        as: "button",
                        tx: "buttons",
                        "data-bn-type": "button"
                    }, e, {
                        variant: V(o, a),
                        className: h,
                        onClick: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return f ? null : m && m.apply(void 0, (0, c.A)(t))
                        },
                        __css: (0, i.A)({
                            appearance: "none",
                            userSelect: "none",
                            cursor: "pointer",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxSizing: "border-box",
                            fontSize: "inherit",
                            fontFamily: "inherit",
                            fontWeight: "medium",
                            textAlign: "center",
                            textDecoration: "none",
                            outline: "none"
                        }, G[s] || {})
                    }))
                }));
            q.displayName = "Button";
            const Y = q;
            var Q = n("N/Z2"),
                X = n("hTvQ"),
                K = n.n(X),
                Z = n("06hb");
            const J = u().createContext({
                context: null
            });

            function ee() {
                var e = (0, Q.A)(["\n  0% {\n    transform: scale(0.95);\n  }\n  66% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n"]);
                return ee = function() {
                    return e
                }, e
            }

            function te() {
                var e = (0, Q.A)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]);
                return te = function() {
                    return e
                }, e
            }
            var ne = u().useLayoutEffect,
                re = (0, Z.keyframes)(ee()),
                ie = (0, Z.keyframes)(te()),
                oe = (0, I.UF)("uikit-core", "Dialog"),
                ae = (0, s.forwardRef)((function(e, t) {
                    oe("Modal");
                    var n = e.visible,
                        o = e.mask,
                        c = void 0 === o || o,
                        p = e.onMaskClick,
                        m = e.children,
                        h = e.maskStyles,
                        v = e.onClick,
                        g = e.onPressEnter,
                        b = void 0 === g ? function() {} : g,
                        x = e.onPressEsc,
                        y = void 0 === x ? function() {} : x,
                        A = e.externalBlock,
                        E = (0, a.A)(e, ["visible", "mask", "onMaskClick", "children", "maskStyles", "onClick", "onPressEnter", "onPressEsc", "externalBlock"]),
                        _ = (0, l.A)(u().useState(!1), 2),
                        w = _[0],
                        k = _[1];
                    u().useEffect((function() {
                        n && k(!0)
                    }), [n]);
                    var C = function(e) {
                        13 === e.keyCode ? b(e) : 27 === e.keyCode && y(e)
                    };
                    (0, s.useEffect)((function() {
                        return n ? document.addEventListener("keydown", C) : document.removeEventListener("keydown", C),
                            function() {
                                document.removeEventListener("keydown", C)
                            }
                    }), [n]), ne((function() {
                        return c && w ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow"),
                            function() {
                                document.body.style.removeProperty("overflow")
                            }
                    }), [c, w]);
                    var N = (0, s.useMemo)((function() {
                            return c ? {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                bg: "dialog.mask"
                            } : {
                                left: "50%",
                                top: "50%",
                                transform: "translate3d(-50%, -50%, 0)"
                            }
                        }), [c]),
                        S = (0, s.useMemo)((function() {
                            return {
                                animation: "".concat(n ? re : ie, " 0.3s ease-in-out"),
                                animationIterationCount: 1
                            }
                        }), [n]);
                    return w ? K().createPortal(u().createElement(f.A, {
                        ref: t,
                        __css: (0, i.A)({
                            position: "fixed",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: "modal",
                            flexDirection: A ? "column" : "unset"
                        }, N),
                        sx: h,
                        onClick: function(e) {
                            e.target === e.currentTarget && p && p(e)
                        }
                    }, u().createElement(J.Provider, {
                        value: {
                            context: "modal"
                        }
                    }, u().createElement(d.A, (0, r.A)({
                        __css: (0, i.A)({
                            position: "relative",
                            boxShadow: "dialog",
                            borderRadius: "large",
                            bg: "popupBg"
                        }, S),
                        onAnimationEnd: function() {
                            k(n)
                        }
                    }, E, {
                        onClick: v
                    }), m), u().createElement(d.A, {
                        __css: S
                    }, A))), document.body) : null
                }));
            ae.displayName = "Dialog";
            const le = ae;
            const ce = function(e) {
                return u().createElement(h.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            };
            var se = n("/Lz3"),
                ue = n("yys2"),
                fe = n("1TYZ"),
                de = function(e) {
                    var t = e.icon,
                        n = e.title,
                        i = e.description,
                        o = e.footerProps,
                        l = (e.titleProps, (0, a.A)(e, ["icon", "title", "description", "footerProps", "titleProps"])),
                        c = u().isValidElement(t) && t;
                    return u().createElement(u().Fragment, null, u().createElement(f.A, (0, r.A)({
                        flexDirection: "column",
                        alignItems: "center",
                        my: "md"
                    }, l), c ? u().cloneElement(c, {
                        className: "icon",
                        mb: "sm"
                    }) : null, n && u().createElement(N.A, {
                        variant: "subtitle1",
                        mb: "xs"
                    }, n), i && u().createElement(N.A, {
                        variant: "body2"
                    }, i)), u().createElement(Ee, (0, r.A)({}, o)))
                },
                pe = function(e) {
                    var t = e.icon,
                        n = e.title,
                        i = e.description,
                        o = e.titleProps,
                        l = e.footerProps,
                        c = (0, a.A)(e, ["icon", "title", "description", "titleProps", "footerProps"]),
                        s = u().isValidElement(t) && t;
                    return (0, fe.Q)().isMobile ? u().createElement(u().Fragment, null, u().createElement(Ae, (0, r.A)({}, o, {
                        title: ""
                    })), u().createElement(f.A, (0, r.A)({
                        flexDirection: "column",
                        alignItems: "center",
                        mb: "md"
                    }, c), s ? u().cloneElement(s, {
                        className: "icon",
                        mb: "sm"
                    }) : null, (n || (null === o || void 0 === o ? void 0 : o.title)) && u().createElement(N.A, {
                        variant: "headline6",
                        mb: "xs"
                    }, n || (null === o || void 0 === o ? void 0 : o.title)), i && u().createElement(N.A, {
                        variant: "body2"
                    }, i)), u().createElement(Ee, (0, r.A)({}, l))) : u().createElement(u().Fragment, null, (null === o || void 0 === o ? void 0 : o.title) && u().createElement(Ae, (0, r.A)({}, o)), u().createElement(d.A, (0, r.A)({
                        mb: "md"
                    }, c), i && u().createElement(d.A, {
                        __css: {
                            display: "inline-block",
                            verticalAlign: "top",
                            maxWidth: "276px",
                            mr: "md"
                        }
                    }, u().createElement(N.A, {
                        variant: "body2"
                    }, i)), s ? u().createElement(d.A, {
                        __css: {
                            display: "inline-block"
                        }
                    }, u().cloneElement(s, {
                        className: "icon"
                    })) : null), u().createElement(Ee, (0, r.A)({
                        variant: "leftReverseOrder"
                    }, l)))
                },
                me = "xlarge",
                he = "default";
            const ve = function(e) {
                return u().createElement(h.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.264 79.498h54.11a6.125 6.125 0 006.125-6.124V20H25.251l-.002 53.375a6.125 6.125 0 01-5.985 6.123zM70.749 41H53.687v3.5h17.062V41zm0 7.875H53.687v3.5h17.062v-3.5zm0 7.875H53.687v3.5h17.062v-3.5zm0 7.875H34v3.5h36.75v-3.5z",
                    fill: "url(#dialog-tips_svg__paint0_linear_6871_115314)"
                }), u().createElement("path", {
                    opacity: .3,
                    d: "M13 48.001v25.374a6.125 6.125 0 0012.25 0V48.001H13z",
                    fill: "#AEB4BC"
                }), u().createElement("path", {
                    d: "M34 60.25h15.313V41H34v19.25z",
                    fill: "url(#dialog-tips_svg__paint1_linear_6871_115314)"
                }), u().createElement("path", {
                    d: "M63.75 32.25H41v-3.5h22.75v3.5z",
                    fill: "url(#dialog-tips_svg__paint2_linear_6871_115314)"
                }), u().createElement("defs", null, u().createElement("linearGradient", {
                    id: "dialog-tips_svg__paint0_linear_6871_115314",
                    x1: 49.312,
                    y1: 20,
                    x2: 49.312,
                    y2: 79.498,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#76808F"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#929AA5"
                })), u().createElement("linearGradient", {
                    id: "dialog-tips_svg__paint1_linear_6871_115314",
                    x1: 41.656,
                    y1: 60.25,
                    x2: 41.656,
                    y2: 41,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), u().createElement("linearGradient", {
                    id: "dialog-tips_svg__paint2_linear_6871_115314",
                    x1: 41,
                    y1: 30.5,
                    x2: 63.75,
                    y2: 30.5,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            const ge = function(e) {
                return u().createElement(h.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M74 25l-4 4-2-2 4-4 2 2z",
                    fill: "url(#dialog-alert_svg__paint0_linear_6871_115328)"
                }), u().createElement("path", {
                    d: "M26.661 51.661c4.882-4.881 12.796-4.881 17.678 0 4.881 4.882 4.881 12.796 0 17.678-4.882 4.881-12.796 4.881-17.678 0-4.881-4.882-4.881-12.796 0-17.678z",
                    fill: "url(#dialog-alert_svg__paint1_linear_6871_115328)"
                }), u().createElement("path", {
                    d: "M38.27 27.474L26.055 39.716H15L57.319 82V70.944L69.526 58.73c8.632-8.632 8.632-22.626 0-31.257-8.631-8.632-22.625-8.632-31.257 0z",
                    fill: "url(#dialog-alert_svg__paint2_linear_6871_115328)"
                }), u().createElement("path", {
                    d: "M56.911 71L26 40.089 31.089 35 62 65.911 56.911 71z",
                    fill: "url(#dialog-alert_svg__paint3_linear_6871_115328)"
                }), u().createElement("defs", null, u().createElement("linearGradient", {
                    id: "dialog-alert_svg__paint0_linear_6871_115328",
                    x1: 71,
                    y1: 23,
                    x2: 71,
                    y2: 29,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#929AA5"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), u().createElement("linearGradient", {
                    id: "dialog-alert_svg__paint1_linear_6871_115328",
                    x1: 35.5,
                    y1: 48,
                    x2: 35.5,
                    y2: 73,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#929AA5"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), u().createElement("linearGradient", {
                    id: "dialog-alert_svg__paint2_linear_6871_115328",
                    x1: 45.5,
                    y1: 82,
                    x2: 45.5,
                    y2: 21,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), u().createElement("linearGradient", {
                    id: "dialog-alert_svg__paint3_linear_6871_115328",
                    x1: 44,
                    y1: 35,
                    x2: 44,
                    y2: 71,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#929AA5"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                }))))
            };
            const be = function(e) {
                return u().createElement(h.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), u().createElement("mask", {
                    id: "dialog-not-supported_svg__a",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: 0,
                    y: 0,
                    width: 96,
                    height: 96
                }, u().createElement("circle", {
                    cx: 48,
                    cy: 48,
                    r: 48,
                    fill: "#2B2F36"
                })), u().createElement("g", {
                    mask: "url(#dialog-not-supported_svg__a)"
                }, u().createElement("path", {
                    d: "M66 66h16v-8H66v8z",
                    fill: "url(#dialog-not-supported_svg__paint0_linear_6871_115280)"
                }), u().createElement("path", {
                    d: "M66 38h16v-8H66v8z",
                    fill: "url(#dialog-not-supported_svg__paint1_linear_6871_115280)"
                }), u().createElement("path", {
                    d: "M31 44H14v8h17v-8z",
                    fill: "url(#dialog-not-supported_svg__paint2_linear_6871_115280)"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M27 48c0 14.36 11.681 26 26.09 26H66V22H53.09C38.682 22 27 33.64 27 48z",
                    fill: "url(#dialog-not-supported_svg__paint3_linear_6871_115280)"
                }), u().createElement("path", {
                    d: "M58 74h-4V22h4v52z",
                    fill: "url(#dialog-not-supported_svg__paint4_linear_6871_115280)"
                })), u().createElement("defs", null, u().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint0_linear_6871_115280",
                    x1: 82,
                    y1: 62,
                    x2: 66,
                    y2: 62,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#929AA5"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), u().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint1_linear_6871_115280",
                    x1: 82,
                    y1: 34,
                    x2: 66,
                    y2: 34,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#929AA5"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), u().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint2_linear_6871_115280",
                    x1: 31,
                    y1: 48,
                    x2: 14,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#929AA5"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                })), u().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint3_linear_6871_115280",
                    x1: 46.5,
                    y1: 74,
                    x2: 46.5,
                    y2: 22,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), u().createElement("linearGradient", {
                    id: "dialog-not-supported_svg__paint4_linear_6871_115280",
                    x1: 56,
                    y1: 22,
                    x2: 56,
                    y2: 74,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#929AA5"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                }))))
            };
            const xe = function(e) {
                return u().createElement(h.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), u().createElement("mask", {
                    id: "dialog-try-again_svg__a",
                    style: {
                        maskType: "alpha"
                    },
                    maskUnits: "userSpaceOnUse",
                    x: 0,
                    y: 0,
                    width: 96,
                    height: 96
                }, u().createElement("circle", {
                    cx: 48,
                    cy: 48,
                    r: 48,
                    fill: "#2B2F36"
                })), u().createElement("g", {
                    mask: "url(#dialog-try-again_svg__a)"
                }, u().createElement("circle", {
                    r: 17.083,
                    transform: "matrix(1 0 0 -1 48 48)",
                    fill: "#F8D33A"
                }), u().createElement("circle", {
                    transform: "matrix(1 0 0 -1 48 48.002)",
                    fill: "url(#dialog-try-again_svg__paint0_linear_6871_115302)",
                    r: 11.689
                }), u().createElement("path", {
                    d: "M41.705 48L48 54.294 54.293 48l-6.294-6.294L41.705 48z",
                    fill: "#F0B90B"
                }), u().createElement("path", {
                    opacity: .3,
                    d: "M48 13.834c18.87 0 34.167 15.297 34.167 34.166 0 18.87-15.297 34.167-34.167 34.167v-6.833c15.096 0 27.333-12.238 27.333-27.334S63.096 20.667 48 20.667v-6.833z",
                    fill: "#AEB4BC"
                }), u().createElement("path", {
                    d: "M13.834 48c0-18.87 15.297-34.167 34.167-34.167v6.833c-15.096 0-27.334 12.238-27.334 27.334 0 7.548 3.056 14.377 8.006 19.327l4.807-4.806v14.52H18.959l4.882-4.882C17.662 65.98 13.834 57.434 13.834 48z",
                    fill: "url(#dialog-try-again_svg__paint1_linear_6871_115302)"
                })), u().createElement("defs", null, u().createElement("linearGradient", {
                    id: "dialog-try-again_svg__paint0_linear_6871_115302",
                    x1: 11.689,
                    y1: 0,
                    x2: 11.689,
                    y2: 23.377,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), u().createElement("linearGradient", {
                    id: "dialog-try-again_svg__paint1_linear_6871_115302",
                    x1: 30.917,
                    y1: 13.833,
                    x2: 30.917,
                    y2: 77.041,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#929AA5"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#76808F"
                }))))
            };
            const ye = function(e) {
                return u().createElement(h.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 160 160",
                    fill: "none"
                }, e), u().createElement("path", {
                    d: "M116.131 118.398l1.6 1.6 1.6-1.6-1.6-1.6-1.6 1.6z",
                    fill: "#fff"
                }), u().createElement("circle", {
                    opacity: .3,
                    cx: 80,
                    cy: 80,
                    r: 66,
                    fill: "#AEB4BC"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M82 114.846l20.873 20.796c11.486 11.445 31.127 3.34 31.127-12.846v-15.824h-18.234v15.825L94.893 102 82 114.846z",
                    fill: "#76808F"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M82 114.846l20.873 20.797C114.36 147.087 134 138.982 134 122.797v-15.826h-18.234v15.826L94.893 102 82 114.846z",
                    fill: "url(#dialog-complex_svg__paint0_linear_6871_115393)",
                    opacity: .6
                }), u().createElement("path", {
                    d: "M67.978 97.588c8.193 0 14.835-6.642 14.835-14.834 0-8.193-6.642-14.835-14.835-14.835v29.669z",
                    fill: "url(#dialog-complex_svg__paint1_linear_6871_115393)"
                }), u().createElement("path", {
                    d: "M67.977 67.919c-8.193 0-14.834 6.642-14.834 14.834 0 8.193 6.641 14.834 14.834 14.834V67.92z",
                    fill: "#0B0E11"
                }), u().createElement("path", {
                    d: "M122.613 100.562l6.34-6.34-11.296-11.296-6.34 6.34 11.296 11.296z",
                    fill: "url(#dialog-complex_svg__paint2_linear_6871_115393)"
                }), u().createElement("path", {
                    d: "M72.193 50.386l6.34-6.34-11.296-11.297-6.34 6.34 11.296 11.297z",
                    fill: "url(#dialog-complex_svg__paint3_linear_6871_115393)"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M45.398 79.919L68 57.756 54.99 45 32.389 67.163C28.939 70.546 27 75.134 27 79.919v23.041c0 9.963 8.237 18.04 18.398 18.04V79.919z",
                    fill: "#76808F"
                }), u().createElement("path", {
                    d: "M45 135.66V102h19.95l8.507 8.501v-.001l.001.001L81.965 102H95v42.343A66.349 66.349 0 0180.317 146c-13.003-.019-25.121-3.811-35.317-10.34z",
                    fill: "#76808F"
                }), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M92.422 74.749h42.516a4.813 4.813 0 004.812-4.813V28H97.126l-.001 41.938a4.812 4.812 0 01-4.703 4.81zM132.875 44.5h-13.406v2.75h13.406V44.5zm0 6.188h-13.406v2.75h13.406v-2.75zm0 6.187h-13.406v2.75h13.406v-2.75zm0 6.188H104v2.75h28.875v-2.75z",
                    fill: "url(#dialog-complex_svg__paint4_linear_6871_115393)"
                }), u().createElement("path", {
                    opacity: .3,
                    d: "M87.5 50v19.938a4.812 4.812 0 009.625 0V50H87.5z",
                    fill: "#AEB4BC"
                }), u().createElement("path", {
                    d: "M104 59.625h12.031V44.5H104v15.125z",
                    fill: "url(#dialog-complex_svg__paint5_linear_6871_115393)"
                }), u().createElement("path", {
                    d: "M127.375 37.625H109.5v-2.75h17.875v2.75z",
                    fill: "url(#dialog-complex_svg__paint6_linear_6871_115393)"
                }), u().createElement("defs", null, u().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint0_linear_6871_115393",
                    x1: 129.189,
                    y1: 142.487,
                    x2: 94.638,
                    y2: 142.487,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopOpacity: 0
                }), u().createElement("stop", {
                    offset: 1
                })), u().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint1_linear_6871_115393",
                    x1: 75.395,
                    y1: 97.588,
                    x2: 75.395,
                    y2: 67.919,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), u().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint2_linear_6871_115393",
                    x1: 125.783,
                    y1: 97.392,
                    x2: 114.487,
                    y2: 86.096,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), u().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint3_linear_6871_115393",
                    x1: 75.363,
                    y1: 47.216,
                    x2: 64.067,
                    y2: 35.919,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), u().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint4_linear_6871_115393",
                    x1: 116.031,
                    y1: 28,
                    x2: 116.031,
                    y2: 74.749,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#76808F"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#929AA5"
                })), u().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint5_linear_6871_115393",
                    x1: 110.016,
                    y1: 59.625,
                    x2: 110.016,
                    y2: 44.5,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                })), u().createElement("linearGradient", {
                    id: "dialog-complex_svg__paint6_linear_6871_115393",
                    x1: 109.5,
                    y1: 36.25,
                    x2: 127.375,
                    y2: 36.25,
                    gradientUnits: "userSpaceOnUse"
                }, u().createElement("stop", {
                    stopColor: "#F0B90B"
                }), u().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            var Ae = function(e) {
                    var t = e.title,
                        n = void 0 === t ? "" : t,
                        i = e.onClose,
                        o = e.onBack,
                        a = e.variant,
                        l = void 0 === a ? "default" : a,
                        c = e.titleProps,
                        s = void 0 === c ? {} : c,
                        d = e.closeIconProps,
                        p = void 0 === d ? {} : d,
                        m = e.backIconProps,
                        h = void 0 === m ? {} : m,
                        v = (0, ue.A)();
                    return "reset" === l ? u().createElement(f.A, {
                        tx: "modaltitle",
                        variant: l
                    }, n) : u().createElement(f.A, {
                        tx: "modaltitle",
                        variant: l
                    }, o && u().createElement(ce, (0, r.A)({
                        size: 24,
                        color: "t.third",
                        sx: {
                            transform: "rtl" === v ? "rotate(180deg)" : "",
                            "&:hover": {
                                color: "primary",
                                cursor: "pointer"
                            }
                        }
                    }, h, {
                        onClick: o
                    })), u().createElement(f.A, {
                        className: "modaltitle"
                    }, u().createElement(N.A, (0, r.A)({
                        variant: "title6",
                        color: "t.primary"
                    }, s), n)), o && !i && u().createElement(f.A, null), i && u().createElement(se.A, (0, r.A)({
                        sx: {
                            "&:hover": {
                                color: "primary",
                                cursor: "pointer"
                            }
                        },
                        size: 24,
                        color: "iconNormal"
                    }, p, {
                        onClick: i
                    })))
                },
                Ee = function(e) {
                    var t = e.onOk,
                        n = e.onCancel,
                        i = e.variant,
                        o = void 0 === i ? "default" : i,
                        a = e.OkContent,
                        l = void 0 === a ? "Ok" : a,
                        c = e.CancelContent,
                        s = void 0 === c ? "Cancel" : c,
                        d = e.okBtnProps,
                        p = void 0 === d ? {} : d,
                        m = e.cancelBtnProps,
                        h = void 0 === m ? {} : m;
                    return u().createElement(f.A, {
                        tx: "modalfooter",
                        variant: o
                    }, n && u().createElement(Y, (0, r.A)({
                        sz: "normal",
                        variant: "default" === o ? "default" : "text",
                        onClick: n
                    }, "default" === o ? {
                        colorStyle: "secondary"
                    } : {}, {
                        className: "btn",
                        children: s
                    }, h)), t && u().createElement(Y, (0, r.A)({}, p, {
                        sz: "normal",
                        className: "btn",
                        variant: "default",
                        colorStyle: "flatprimary",
                        onClick: t,
                        children: l
                    })))
                },
                _e = function(e) {
                    var t = e.children,
                        n = e.visible,
                        i = void 0 !== n && n,
                        o = e.onMaskClick,
                        l = e.mask,
                        c = void 0 === l || l,
                        s = e.layerProps,
                        d = void 0 === s ? {} : s,
                        p = e.responsive,
                        h = void 0 === p || p,
                        v = (0, a.A)(e, ["children", "visible", "onMaskClick", "mask", "layerProps", "responsive"]);
                    return (0, fe.Q)().isMobile && h ? u().createElement(u().Fragment, null, u().createElement(m.A, (0, r.A)({
                        maskBg: "dialog.mask",
                        direction: "bottom",
                        visible: i,
                        bg: "dialog.mask",
                        outerClick: o
                    }, d), u().createElement(f.A, (0, r.A)({
                        tx: "modal",
                        variant: "drawer"
                    }, v, {
                        width: "100%"
                    }), t))) : u().createElement(le, (0, r.A)({
                        mask: c,
                        visible: i,
                        onMaskClick: o
                    }, d), u().createElement(f.A, (0, r.A)({
                        tx: "modal",
                        variant: "default"
                    }, v), t))
                };
            _e.displayName = "Modal";
            const we = {
                Modal: _e,
                ModalTitle: Ae,
                ModalFooter: Ee,
                SimpleLayout: de,
                ComplexLayout: pe,
                FixedIllustrationLayout: function(e) {
                    var t = e.icon,
                        n = e.title,
                        o = e.description,
                        l = (e.actions, e.illustrationStyle),
                        c = e.footerProps,
                        s = e.titleProps,
                        p = (0, a.A)(e, ["icon", "title", "description", "actions", "illustrationStyle", "footerProps", "titleProps"]),
                        m = u().isValidElement(t) && t;
                    return (0, fe.Q)().isMobile ? u().createElement(u().Fragment, null, u().createElement(d.A, {
                        pt: "".concat(212, "px")
                    }, u().createElement(d.A, {
                        height: "".concat(212, "px"),
                        __css: (0, i.A)({
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            borderTopRightRadius: me,
                            borderTopLeftRadius: me,
                            backgroundSize: "cover"
                        }, l)
                    }, m ? u().cloneElement(m, {
                        className: "icon"
                    }) : null), (null === s || void 0 === s ? void 0 : s.onClose) && u().createElement(se.A, {
                        onClick: null === s || void 0 === s ? void 0 : s.onClose,
                        __css: {
                            position: "absolute",
                            top: "24px",
                            right: "24px",
                            zIndex: 1,
                            fontSize: "xp",
                            color: "iconNormal"
                        }
                    }), (null === s || void 0 === s ? void 0 : s.title) && u().createElement(N.A, {
                        variant: "headline6",
                        my: "md"
                    }, s.title), o && u().createElement(N.A, {
                        variant: "body2",
                        mb: "md"
                    }, o)), u().createElement(Ee, (0, r.A)({
                        variant: "default"
                    }, c))) : u().createElement(u().Fragment, null, u().createElement(Ae, (0, r.A)({
                        title: n,
                        closeIconProps: (0, i.A)({
                            __css: {
                                position: "absolute",
                                top: "24px",
                                right: "0",
                                zIndex: 1,
                                fontSize: "xp",
                                color: "iconNormal"
                            }
                        }, null === s || void 0 === s ? void 0 : s.closeIconProps)
                    }, s)), u().createElement(f.A, (0, r.A)({}, p), u().createElement(f.A, {
                        mb: "md",
                        pr: "".concat(184, "px")
                    }, o && u().createElement(N.A, {
                        variant: "body2",
                        width: "276px",
                        mb: "md"
                    }, o), u().createElement(d.A, {
                        width: "".concat(184, "px"),
                        __css: (0, i.A)({
                            position: "absolute",
                            height: "100%",
                            top: "0",
                            right: "0",
                            borderTopRightRadius: he,
                            borderBottomRightRadius: he,
                            backgroundSize: "cover"
                        }, l)
                    }, m ? u().cloneElement(m, {
                        className: "icon"
                    }) : null))), u().createElement(Ee, (0, r.A)({
                        variant: "leftReverseOrder",
                        cancelBtnProps: {
                            variant: "default",
                            colorStyle: "flatpure"
                        }
                    }, c)))
                },
                ReminderTips: function(e) {
                    return u().createElement(de, (0, r.A)({
                        icon: u().createElement(ve, {
                            size: 96,
                            mb: "sm"
                        }),
                        title: "Tips"
                    }, e))
                },
                ReminderAlert: function(e) {
                    return u().createElement(de, (0, r.A)({
                        icon: u().createElement(ge, {
                            size: 96,
                            mb: "sm"
                        }),
                        title: "Alert"
                    }, e))
                },
                ReminderNotSupported: function(e) {
                    return u().createElement(de, (0, r.A)({
                        icon: u().createElement(be, {
                            size: 96,
                            mb: "sm"
                        }),
                        title: "Not supported"
                    }, e))
                },
                ReminderTryAgain: function(e) {
                    return u().createElement(de, (0, r.A)({
                        icon: u().createElement(xe, {
                            size: 96,
                            mb: "sm"
                        }),
                        title: "Try Again"
                    }, e))
                },
                ReminderComplex: function(e) {
                    return u().createElement(pe, (0, r.A)({
                        icon: u().createElement(ye, {
                            size: 160
                        })
                    }, e))
                }
            };
            var ke = s.useLayoutEffect,
                Ce = {
                    sm: 32,
                    md: 40,
                    lg: 48
                },
                Ne = function(e, t) {
                    return "".concat(e, "-").concat(t)
                },
                Se = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = u().Children.toArray(e);
                    return e ? r.reduce((function(e, r) {
                        var l;
                        if ((null === r || void 0 === r || null === (l = r.type) || void 0 === l ? void 0 : l.displayName) === O.displayName) {
                            var c = r.props,
                                s = c.label,
                                u = c.children,
                                f = (0, a.A)(c, ["label", "children"]);
                            return e.concat(Se(u, s, f))
                        }
                        return e.concat((0, o.A)((0, i.A)({
                            group: t
                        }, r.props), {
                            optGroupProps: n
                        }))
                    }), []) : []
                },
                Me = function(e) {
                    var t = e.disabled,
                        n = e.label,
                        h = e.onValueChange,
                        x = e.limit,
                        A = void 0 === x ? 5 : x,
                        _ = e.children,
                        k = e.value,
                        N = e.placeholder,
                        S = e.defaultValue,
                        M = e.renderValue,
                        D = e.filterFunction,
                        R = void 0 === D ? function(e, t) {
                            return t.toLowerCase().startsWith(e.toLowerCase())
                        } : D,
                        B = e.onChange,
                        z = e.onBlur,
                        P = e.multiple,
                        L = void 0 !== P && P,
                        U = e.showChecked,
                        T = void 0 !== U && U,
                        I = e.searchPlaceholder,
                        j = e.empty,
                        H = void 0 === j ? "No results found." : j,
                        G = e.alternativeEmpty,
                        V = e.dropdownFullWidth,
                        W = e.variant,
                        q = void 0 === W ? "filled" : W,
                        Y = e.hideSearch,
                        Q = void 0 !== Y && Y,
                        X = e.lazy,
                        K = void 0 !== X && X,
                        Z = e.error,
                        J = void 0 !== Z && Z,
                        ee = e.infoText,
                        te = e.errorText,
                        ne = e.footer,
                        re = e.size,
                        ie = void 0 === re ? "md" : re,
                        oe = e.searchError,
                        ae = void 0 !== oe && oe,
                        le = e.searchErrorText,
                        ce = e.searchFieldProps,
                        se = void 0 === ce ? {} : ce,
                        ue = e.needSeo,
                        de = void 0 === ue || ue,
                        pe = e.textFieldProps,
                        me = void 0 === pe ? {} : pe,
                        he = e.textFieldBoxProps,
                        ve = void 0 === he ? {} : he,
                        ge = e.groupNameClickable,
                        be = void 0 !== ge && ge,
                        xe = e.emphasizedGrouping,
                        ye = void 0 !== xe && xe,
                        Ae = e.activeGroup,
                        Ee = e.onOpenChange,
                        _e = e.defaultOpen,
                        Me = void 0 !== _e && _e,
                        Oe = e.itemHeight,
                        Fe = e.customBoundaryHeight,
                        De = e.alternativeMobileUI,
                        Re = e.drawerTitle,
                        Be = (0, a.A)(e, ["disabled", "label", "onValueChange", "limit", "children", "value", "placeholder", "defaultValue", "renderValue", "filterFunction", "onChange", "onBlur", "multiple", "showChecked", "searchPlaceholder", "empty", "alternativeEmpty", "dropdownFullWidth", "variant", "hideSearch", "lazy", "error", "infoText", "errorText", "footer", "size", "searchError", "searchErrorText", "searchFieldProps", "needSeo", "textFieldProps", "textFieldBoxProps", "groupNameClickable", "emphasizedGrouping", "activeGroup", "onOpenChange", "defaultOpen", "itemHeight", "customBoundaryHeight", "alternativeMobileUI", "drawerTitle"]),
                        ze = (0, l.A)((0, s.useState)(""), 2),
                        Pe = ze[0],
                        Le = ze[1],
                        Ue = (0, l.A)((0, s.useState)(S), 2),
                        Te = Ue[0],
                        $e = Ue[1],
                        Ie = (0, l.A)((0, s.useState)(Ae), 2),
                        je = Ie[0],
                        He = Ie[1],
                        Ge = (0, l.A)((0, s.useState)(0), 2),
                        Ve = Ge[0],
                        We = Ge[1],
                        qe = (0, l.A)((0, s.useState)(""), 2),
                        Ye = qe[0],
                        Qe = qe[1],
                        Xe = (0, l.A)((0, s.useState)(0), 2),
                        Ke = Xe[0],
                        Ze = Xe[1],
                        Je = (0, l.A)((0, s.useState)(Me), 2),
                        et = Je[0],
                        tt = Je[1],
                        nt = (0, l.A)((0, s.useState)(de), 2),
                        rt = nt[0],
                        it = nt[1],
                        ot = (0, l.A)((0, s.useState)({}), 2),
                        at = ot[0],
                        lt = ot[1],
                        ct = (0, s.useRef)(null),
                        st = (0, s.useRef)(null),
                        ut = (0, s.useRef)({}),
                        ft = (0, s.useRef)({}),
                        dt = (0, s.useRef)(null),
                        pt = (0, s.useRef)(null),
                        mt = (0, fe.Q)().isMobile,
                        ht = u().useCallback((function() {
                            return y()([
                                [w()("outline"), E()("filled")],
                                [C(), E()(q)]
                            ])(q)
                        }), [q]),
                        vt = u().useCallback((function() {
                            return y()([
                                [function(e) {
                                    return !!e
                                }, E()("emphasizedGrouping")],
                                [C(), E()("normal")]
                            ])(ye)
                        }), [ye]);
                    void 0 !== k && k !== Te && $e(k), void 0 !== Ae && Ae !== je && He(k);
                    var gt = (0, s.useMemo)((function() {
                            return Pe ? Se(_).filter((function(e) {
                                return R(Pe, e.value)
                            })) : Se(_)
                        }), [_, Pe]),
                        bt = (0, s.useMemo)((function() {
                            return Array.isArray(gt) ? Math.min(gt.length, A) : 0
                        }), [gt]),
                        xt = (0, s.useMemo)((function() {
                            return gt.reduce((function(e, t, n) {
                                var r = t.group,
                                    i = t.optGroupProps;
                                return e.length > 0 && e[e.length - 1].group === r ? e[e.length - 1].options.push(t) : e.push({
                                    key: n,
                                    index: n,
                                    group: r,
                                    groupSeq: Ne(r, n),
                                    optGroupProps: i,
                                    options: [t]
                                }), e
                            }), [])
                        }), [gt]),
                        yt = (0, s.useCallback)((function() {
                            Le(""), tt(!1), Ee && Ee(!1)
                        }), []);
                    (0, s.useEffect)((function() {
                        ct.current && Ze(ct.current.offsetLeft)
                    }), []), (0, s.useEffect)((function() {
                        var e = Math.max(gt.findIndex((function(e) {
                                return e.value === Te
                            })), 0),
                            t = xt.findIndex((function(e) {
                                return e.group === je
                            }));
                        ye && -1 !== t && xt[t] ? Qe(xt[t].groupSeq) : We(e)
                    }), [Pe, Te, je]), (0, s.useEffect)((function() {
                        if (gt.length > 0) {
                            var e = ut.current[Ve],
                                t = ut.current[Ve + 1],
                                n = dt.current;
                            if (e && n) {
                                var r = n.scrollTop,
                                    i = n.clientHeight,
                                    o = e.offsetTop;
                                if (o - 68 < r) return void(n.scrollTop = o - 68);
                                o >= r + i && t && (n.scrollTop += t.offsetTop - o)
                            }
                        }
                    }), [Ve]), (0, s.useEffect)((function() {
                        if (et) {
                            window.addEventListener("click", yt), st.current && st.current.focus();
                            var e = Ye ? ft.current[Ye] : ut.current[Ve],
                                t = dt.current;
                            e && t && (xt.length > 1 ? t.scrollTop = e.offsetTop : t.scrollTop = Ve * (Oe || 40))
                        } else window.removeEventListener("click", yt);
                        return function() {
                            window.removeEventListener("click", yt)
                        }
                    }), [et, Ye]);
                    var At = (0, s.useRef)(null),
                        Et = (0, l.A)((0, s.useState)(1), 2),
                        _t = Et[0],
                        wt = Et[1];
                    ke((function() {
                        At.current && ct.current && (At.current.clientHeight >= ct.current.clientHeight ? wt((function(e) {
                            return e + 1
                        })) : ct.current.clientHeight - At.current.clientHeight > 20 && wt((function(e) {
                            return e - 1
                        })))
                    }), [Te]);
                    var kt = function(e) {
                            h && h(e), Le(e)
                        },
                        Ct = function() {
                            if (null !== pt.current) {
                                var e = pt.current.getBoundingClientRect(),
                                    t = "function" === typeof getComputedStyle ? getComputedStyle(pt.current) : {
                                        marginLeft: "0",
                                        marginRight: "0",
                                        margin: "0"
                                    },
                                    n = t.marginLeft,
                                    r = t.marginRight,
                                    o = t.margin,
                                    a = function(e) {
                                        return Number(e.split("px")[0])
                                    },
                                    l = pt.current.parentElement.getBoundingClientRect().width - a(n) - a(r) - a(o) / 2,
                                    c = "number" !== typeof Fe || isNaN(Fe) ? window.innerHeight : Fe;
                                if (e.bottom + 40 * bt > c) lt((0, i.A)({
                                    bottom: "".concat(e.height, "px")
                                }, V && {
                                    width: l
                                }));
                                else {
                                    var s = J ? te : ee,
                                        u = s && s.length > 0;
                                    lt((0, i.A)({
                                        mt: u ? "-16px" : "0px"
                                    }, V && {
                                        width: l
                                    }))
                                }!rt && it(!0), tt(!0), Ee && Ee(!0)
                            }
                        };
                    ke((function() {
                        var e = J ? te : ee,
                            t = e && e.length > 0;
                        lt((function(e) {
                            return (0, o.A)((0, i.A)({}, e), {
                                mt: t ? "-16px" : "0px"
                            })
                        }))
                    }), [te, ee]);
                    var Nt = function(e) {
                            if (38 === e.keyCode) {
                                e.preventDefault();
                                var t = Math.max(Ve - 1, 0);
                                We(t)
                            } else if (40 === e.keyCode) {
                                e.preventDefault();
                                var n = Math.min(Ve + 1, gt.length - 1);
                                We(n)
                            } else if (13 === e.keyCode)
                                if (et && !L) {
                                    if (gt[Ve]) {
                                        var r = gt[Ve],
                                            i = r.label || r.value;
                                        if (r.disabled) return;
                                        kt(i), B && B(i), $e(i), ct.current && ct.current.blur()
                                    }
                                    yt()
                                } else Ct();
                            else 27 === e.keyCode && yt()
                        },
                        St = M ? M(Te) : Array.isArray(Te) ? u().createElement(f.A, {
                            flexWrap: "wrap",
                            ref: At
                        }, Te.map((function(e) {
                            return u().createElement(d.A, {
                                key: e,
                                flexShrink: 0,
                                __css: {
                                    bg: "line",
                                    borderRadius: "small",
                                    my: "2px",
                                    mr: "minor",
                                    px: "xs",
                                    height: "24px",
                                    lineHeight: "24px"
                                }
                            }, e)
                        }))) : "",
                        Mt = u().createElement($, (0, r.A)({
                            ref: ct,
                            className: "bn-sdd-input",
                            variant: ht(),
                            disabled: t,
                            error: J,
                            size: ie,
                            infoText: ee,
                            errorText: te,
                            sx: {
                                visibility: M || Array.isArray(Te) ? "hidden" : "visible",
                                cursor: t ? "default" : "pointer"
                            },
                            bg: "transparent",
                            boxProps: (0, i.A)({
                                sx: {
                                    height: L && _t > 1 ? "".concat(Ce[ie] + 28 * (_t - 1), "px") : Ce[ie],
                                    width: "100%",
                                    ".bn-input-suffix": {
                                        height: "100%",
                                        mr: "xs"
                                    },
                                    cursor: t ? "default" : "pointer"
                                },
                                onClick: function(e) {
                                    (e.preventDefault(), t) || (!1 === et ? (document.querySelector(".bn-sdd-dropdown.showing") || e.stopPropagation(), Ct()) : yt())
                                },
                                onMouseDown: function(e) {
                                    e.stopPropagation(), e.preventDefault()
                                }
                            }, ve),
                            suffix: u().createElement(f.A, {
                                height: "100%",
                                alignItems: "center"
                            }, u().createElement(v, {
                                sx: {
                                    transform: et ? "rotate(180deg)" : "rotate(0)",
                                    color: "t.third"
                                },
                                size: 16
                            })),
                            onFocus: function(e) {
                                e.stopPropagation(), e.preventDefault(), ct.current && ct.current.blur(), !1 === et && Ct()
                            },
                            label: n,
                            value: Te || "",
                            onKeyDown: function(e) {
                                return Nt(e)
                            }
                        }, !k && !Te && {
                            placeholder: N,
                            sx: {
                                visibility: "visible",
                                cursor: t ? "default" : "pointer"
                            }
                        }, me)),
                        Ot = u().createElement(d.A, {
                            className: "bn-sdd-innerInputContainer",
                            width: "100%"
                        }, u().createElement($, (0, r.A)({
                            ref: st,
                            boxProps: {
                                width: "100%",
                                sx: {
                                    ".bn-input-prefix": {
                                        display: "flex"
                                    },
                                    ".bn-input-suffix": {
                                        display: "flex"
                                    }
                                }
                            },
                            variant: ht(),
                            size: "md",
                            onClick: function(e) {
                                e.stopPropagation(), e.preventDefault()
                            },
                            error: ae,
                            errorText: le,
                            value: Pe,
                            bg: "transparent",
                            onChange: function(e) {
                                kt(e.target.value), !1 === et && Ct()
                            },
                            onKeyDown: function(e) {
                                return Nt(e)
                            },
                            onBlur: function(e) {
                                z && z(e)
                            },
                            prefix: u().createElement(g, {
                                color: "t.placeholder",
                                ml: "8px",
                                mr: "-8px",
                                className: "bn-sdd-icon"
                            }),
                            suffix: u().createElement(b, {
                                id: null === se || void 0 === se ? void 0 : se.closeButtonId,
                                className: "bn-sdd-icon",
                                sx: {
                                    color: "t.placeholder",
                                    mr: "xs"
                                },
                                size: 20,
                                onClick: function(e) {
                                    e.preventDefault(), e.stopPropagation(), Le(""), st.current && st.current.focus()
                                }
                            }),
                            placeholder: I
                        }, se))),
                        Ft = (0, s.useMemo)((function() {
                            return u().createElement(d.A, {
                                ref: dt,
                                as: "ul",
                                role: "listbox",
                                className: "bn-sdd-list",
                                sx: {
                                    maxHeight: De && mt ? "none" : "".concat(40 * (.7 + A), "px")
                                }
                            }, (!K || et) && xt.map((function(e) {
                                return function(e) {
                                    var t = e.key,
                                        n = e.group,
                                        r = e.children,
                                        i = e.groupNameClickable,
                                        o = e.handleGroupNameClick,
                                        a = e.isActive;
                                    return n ? u().createElement(O, {
                                        groupNameClickable: i,
                                        handleGroupNameClick: o,
                                        label: n,
                                        key: t,
                                        isActive: a,
                                        ref: function(e) {
                                            ft.current[Ne(n, t)] = e
                                        }
                                    }, r) : u().createElement(u().Fragment, {
                                        key: t
                                    }, r)
                                }({
                                    key: e.key,
                                    group: e.group,
                                    groupNameClickable: be,
                                    isActive: Ye === e.groupSeq,
                                    handleGroupNameClick: function(t) {
                                        var n, r, i = e.group;
                                        h && h(i), B && B(i), $e(i), He(i), (null === (n = e.optGroupProps) || void 0 === n ? void 0 : n.handleGroupNameClick) && (null === (r = e.optGroupProps) || void 0 === r || r.handleGroupNameClick(t))
                                    },
                                    children: e.options.map((function(t, n) {
                                        t.group;
                                        var r = (0, a.A)(t, ["group"]),
                                            l = e.index + n;
                                        return u().createElement(F.c, (0, o.A)((0, i.A)({}, r), {
                                            key: l,
                                            multiple: L,
                                            isActive: Ye ? Ye === e.groupSeq && !L : Ve === l && !L,
                                            isChecked: Array.isArray(Te) ? -1 !== Te.indexOf(r.value) : r.value === Te,
                                            showChecked: T,
                                            ref: function(e) {
                                                return ut.current[l] = e
                                            },
                                            onClick: function(e) {
                                                if (e.stopPropagation(), !r.disabled) {
                                                    var t;
                                                    if (L || We(l), L) {
                                                        var n = Array.isArray(Te) ? (0, c.A)(Te) : [],
                                                            i = n.indexOf(r.value); - 1 === i ? n.push(r.value) : n.splice(i, 1), t = n
                                                    } else t = r.value;
                                                    h && h(t), B && B(t), $e(t), He(""), L || yt()
                                                }
                                            }
                                        }))
                                    }))
                                })
                            })))
                        }), [dt, A, K, et, xt, Ve, Te, De, mt]),
                        Dt = De && mt;
                    return u().createElement(d.A, (0, r.A)({
                        tx: "searchDropdown",
                        variant: vt(),
                        ref: pt
                    }, Be), Mt, St && u().createElement(d.A, {
                        className: "bn-sdd-value",
                        sx: {
                            height: L && _t > 1 ? "".concat(Ce[ie] + 28 * (_t - 1), "px") : Ce[ie],
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            left: Ke || 0,
                            bottom: 0,
                            right: 0,
                            pointerEvents: "none",
                            wordBreak: "keep-all",
                            fontSize: "sm",
                            lineHeight: 1,
                            color: t ? "t.disabled" : "t.primary"
                        }
                    }, St), rt && !Dt && u().createElement(p.Ay, {
                        container: pt.current
                    }, u().createElement(d.A, {
                        className: "bn-sdd-dropdown ".concat(et ? "showing" : "closing"),
                        __css: (0, i.A)({
                            outline: "none",
                            height: "auto",
                            display: et ? "block" : "none",
                            width: "auto!important",
                            minWidth: "100%!important"
                        }, at)
                    }, !Q && Ot, 0 === xt.length && u().createElement(d.A, {
                        className: "bn-sdd-noResults"
                    }, H), Ft, ne)), Dt && u().createElement(m.A, {
                        direction: "bottom",
                        visible: et,
                        maskBg: "dialog.mask",
                        bg: "dialog.mask"
                    }, u().createElement(f.A, {
                        tx: "searchDropdown",
                        variant: "drawer",
                        className: "bn-sdd-drawer ".concat(et ? "showing" : "closing"),
                        width: "100%",
                        color: "t.primary"
                    }, u().createElement(we.ModalTitle, {
                        onClose: yt,
                        title: Re
                    }), u().createElement(f.A, {
                        width: "100%",
                        height: "50vh",
                        flexDirection: "column"
                    }, !Q && Ot, 0 === xt.length && u().createElement(d.A, {
                        className: "bn-sdd-noResults"
                    }, G), Ft, ne))))
                };
            Me.displayName = "SearchDropdown";
            const Oe = u().memo(Me)
        },
        "ah/i": (e, t, n) => {
            "use strict";
            n.d(t, {
                B3: () => p,
                Ho: () => _,
                J8: () => w,
                K0: () => M,
                QF: () => z,
                RI: () => k,
                RK: () => S,
                Rd: () => y,
                T6: () => $,
                V9: () => f,
                WQ: () => E,
                Ww: () => F,
                Xq: () => g,
                ZV: () => v,
                a: () => u,
                jL: () => B,
                jr: () => m,
                k3: () => b,
                lw: () => A,
                mk: () => C,
                oi: () => T,
                pr: () => d,
                sd: () => h,
                tH: () => N,
                tY: () => x,
                tv: () => O,
                um: () => D,
                vC: () => P,
                xF: () => R,
                xY: () => U
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("gZfF"),
                a = n("pFSi"),
                l = n.n(a),
                c = n("vM3x"),
                s = n.n(c),
                u = 6,
                f = 2,
                d = "CNY",
                p = "USD",
                m = "\u2013",
                h = l()((function(e, t) {
                    return new RegExp("\\d(?=(\\d{".concat(t || 3, "})+").concat(e > 0 ? "\\." : "$", ")"), "g")
                }), (function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.join(",")
                })),
                v = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                    e = "number" === typeof e ? e : +e;
                    var r = h(t, n);
                    return e.toFixed(Math.max(0, ~~t)).replace(r, "$&,")
                },
                g = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        t = arguments.length > 1 ? arguments[1] : void 0;
                    try {
                        e = "number" === typeof e ? e : +e;
                        var n = Math.max(0, ~~t),
                            r = {
                                minimumFractionDigits: n,
                                maximumFractionDigits: n
                            };
                        return new Intl.NumberFormat("en-US", r).format(e)
                    } catch (i) {
                        return v(e, t)
                    }
                },
                b = function(e, t) {
                    return new(s())(e).dividedBy(t)
                },
                x = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return t.reduce((function(e, t) {
                        return e.plus(t || 0)
                    }), new(s())(0))
                },
                y = function(e, t) {
                    return new(s())(e).minus(t)
                },
                A = function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    var r;
                    return r = new(s())(t[0] ? 1 : 0), t.forEach((function(e) {
                        r = r.multipliedBy(e || 0)
                    })), r
                },
                E = function(e, t, n) {
                    var r, i;
                    try {
                        r = e.toString().split(".")[1].length
                    } catch (a) {
                        r = 0
                    }
                    try {
                        i = t.toString().split(".")[1].length
                    } catch (l) {
                        i = 0
                    }
                    var o = Math.pow(10, Math.max(r, i));
                    return ((e * o + t * o) / o).toFixed(n ? Math.max(r, i) : 2)
                },
                _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "bids";
                    return function() {
                        switch (e) {
                            case "bids":
                                return "floor";
                            case "asks":
                                return "ceil";
                            default:
                                if (Math[e]) return Math[e];
                                throw new Error("getRoundFunc called with unknown type")
                        }
                    }()
                },
                w = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "round",
                        r = arguments.length > 3 ? arguments[3] : void 0,
                        i = Math.pow(10, t),
                        o = 3,
                        a = String(e).split(".")[1] || "",
                        l = a.length > t ? a.length : t,
                        c = (+e + 1 / Math.pow(10, l + o)) * i;
                    if ("string" === typeof n) {
                        var s = o - 1;
                        c = parseInt((c * Math.pow(10, s)).toString(), 10) / Math.pow(10, s), n = _(n)
                    }
                    if ("function" !== typeof n) throw new Error("decRound unknown rounding func");
                    return r ? v(n(c) / i, t) : (n(c) / i).toFixed(t)
                },
                k = function(e, t, n) {
                    return w(e, t, "floor", n)
                },
                C = function(e, t, n) {
                    return w(e, t, "ceil", n)
                },
                N = function(e, t) {
                    return e > 0 ? t > 0 ? "+" : "-" : e < 0 ? t > 0 ? "-" : "+" : ""
                },
                S = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                            digit: 2,
                            withSymbol: !1,
                            allowNegative: !1
                        },
                        r = n.digit,
                        i = void 0 === r ? 2 : r,
                        o = n.withSymbol,
                        a = void 0 !== o && o,
                        l = n.allowNegative,
                        c = void 0 !== l && l,
                        s = a ? N(e, t) : "",
                        u = c ? e / t : Math.abs(e / t);
                    return 0 === t ? m : "".concat(s).concat(w(100 * u, i), "%")
                };

            function M(e) {
                var t = e.balance,
                    n = e.quote,
                    r = e.cryptoToUSDMap,
                    i = e.curFiatUSDT,
                    o = e.precision,
                    a = i.rate,
                    l = i.symbol,
                    c = A(r[n] || "0", t, a),
                    s = c.isGreaterThan(1) ? f : u,
                    d = c.toFixed(s);
                return {
                    symbol: l,
                    calculatedPrice: v(d, o || s),
                    fiatPrice: d
                }
            }

            function O(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8;
                return new(s())(e).decimalPlaces(t).toString()
            }

            function F(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                    n = new(s())(e).toFixed(8);
                if (t) return n;
                var r = /\.?0+$/g;
                return n.replace(r, "")
            }

            function D(e) {
                return new(s())(e).toString(10)
            }

            function R(e, t) {
                var n = new(s())(e),
                    r = new(s())(t);
                return n.isLessThanOrEqualTo(r)
            }

            function B(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                return new(s())(e).toFixed(t, n)
            }

            function z(e, t) {
                return "undefined" === typeof Intl || "function" !== typeof Intl.NumberFormat ? Number(e).toLocaleString(null === t || void 0 === t ? void 0 : t.locales, t) : new Intl.NumberFormat(null === t || void 0 === t ? void 0 : t.locales, t).format(Number(e))
            }
            var P = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2,
                        n = String(e);
                    if (0 === t || n.length - n.indexOf(".") - 1 < t) return e.toFixed(t);
                    var r = Number(e) || 0,
                        i = Math.pow(10, t);
                    return Math.floor(r * i) / i
                },
                L = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                    return 0 === t ? e.toFixed(t) : P(e, t)
                };

            function U() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 ? arguments[1] : void 0,
                    n = arguments.length > 3 ? arguments[3] : void 0;
                if (isNaN(+e)) return "--";
                var a = n || {},
                    l = (a.locales, (0, o.A)(a, ["locales"]));
                return Number(L(+e, t)).toLocaleString(null === n || void 0 === n ? void 0 : n.locales, (0, i.A)((0, r.A)({}, l), {
                    minimumFractionDigits: t
                }))
            }
            var T = function(e, t) {
                    try {
                        return new(s())(e).exponentiatedBy(t).toFixed(20).replace(/0*$/, "").replace(/\.$/, "")
                    } catch (n) {
                        return ""
                    }
                },
                $ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 12;
                    return C(+e, t, !1).replace(/0*$/, "").replace(/\.$/, "")
                }
        },
        cjvU: (e, t, n) => {
            "use strict";
            n.d(t, {
                Cs: () => w,
                Kn: () => y,
                VU: () => _,
                XC: () => N,
                aQ: () => C,
                dd: () => E,
                hi: () => A,
                pD: () => b,
                sX: () => g,
                vV: () => S,
                yu: () => k
            });
            var r = n("sViW"),
                i = n("Pz56"),
                o = n.n(i),
                a = n("DTvD"),
                l = n("/OND"),
                c = n("itTZ"),
                s = n("fdP6"),
                u = n("dn+i"),
                f = n("HIvj"),
                d = n("W9hJ"),
                p = n("ZIan"),
                m = n("AcsR"),
                h = n("N/Ki"),
                v = n("6Zk3"),
                g = function() {
                    var e = (0, r.A)(o().mark((function e() {
                        var t, n, r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.K$)({
                                        platform: m.cp ? "ELECTRON" : "WEB"
                                    });
                                case 2:
                                    if (!(null === (t = e.sent) || void 0 === t ? void 0 : t.success)) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", (null === t || void 0 === t || null === (n = t.data) || void 0 === n || null === (r = n.restriction) || void 0 === r ? void 0 : r.keys) || []);
                                case 6:
                                    return e.abrupt("return", []);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                b = function() {
                    var e = (0, u.Rm)().complianceKeys,
                        t = (0, l.wA)(),
                        n = (0, c.Ay)(["complianceKeys", m.cp], (function() {
                            return g()
                        }), {
                            fallbackData: e,
                            onSuccess: function(e) {
                                t.ssrStore.updateState({
                                    complianceKeys: e
                                })
                            }
                        }),
                        r = n.data,
                        i = n.error;
                    return i && console.error("Failed to fetch compliance keys:", i), null !== r && void 0 !== r ? r : []
                },
                x = function(e) {
                    var t = (0, f.Py)(),
                        n = (0, d.PC)().region,
                        r = (0, f.vz)(),
                        i = r.isLoggedIn,
                        o = r.isLoading;
                    return !(i && t.fetched && t[e]) && !(!o && !i && n && n === h.AD.SPAIN)
                },
                y = function() {
                    var e = b(),
                        t = x("noDerivativesLVT");
                    return !e.includes(h.km.ETF) && t
                },
                A = function() {
                    return !b().includes("copy_trading")
                },
                E = function() {
                    var e = b(),
                        t = (0, u.Rm)().limitObj,
                        n = void 0 === t ? {} : t,
                        r = n.limitObjMargin,
                        i = void 0 === r ? [] : r,
                        o = n.limitObjFutures,
                        l = void 0 === o ? [] : o,
                        c = x("noDerivativesFutures"),
                        s = (0, p.Bl)();
                    return {
                        showFutures: (0, a.useMemo)((function() {
                            return (!l || !!l[s] && c) && !e.includes(h.km.FUTURES)
                        }), [l, s, c, e]),
                        showMargin: (0, a.useMemo)((function() {
                            return !i || !!i[s]
                        }), [i, s])
                    }
                },
                _ = function() {
                    return !b().includes(h.km.UM_TRADE)
                },
                w = function() {
                    return !b().includes(h.km.CM_TRADE)
                },
                k = "margin-leverage-badge",
                C = function() {
                    return !b().includes(h.km.MARGIN)
                },
                N = function() {
                    var e = w(),
                        t = _(),
                        n = !b().includes(h.km.OPTIONS);
                    return h.lY.filter((function(r) {
                        return !(!e && "quarterly" === r) && (!(!t && "perpetual" === r) && !(!n && "options" === r))
                    }))
                },
                S = function() {
                    var e = (0, v.A)(),
                        t = b();
                    return e && t.includes("AE_FSA")
                }
        },
        "2qHp": (e, t, n) => {
            "use strict";
            n.d(t, {
                $g: () => T,
                EW: () => x,
                Ee: () => _,
                Gw: () => B,
                Jn: () => w,
                Md: () => P,
                SZ: () => L,
                Tr: () => N,
                UD: () => z,
                Vz: () => g,
                a2: () => C,
                be: () => b,
                e6: () => R,
                ej: () => v,
                kp: () => O,
                kx: () => D,
                sz: () => E,
                w1: () => M,
                yI: () => k,
                yi: () => S
            });
            var r = n("sViW"),
                i = n("BK7R"),
                o = n("Pz56"),
                a = n.n(o),
                l = n("BQ33"),
                c = n.n(l),
                s = n("nsO7"),
                u = n("vCRf"),
                f = n("wmq8"),
                d = n("NsjG"),
                p = n("AcsR"),
                m = n("qeGV"),
                h = n("N/Ki"),
                v = function(e) {
                    return e.etf
                },
                g = function(e) {
                    var t = e.lowPrice,
                        n = e.lastPrice,
                        r = e.highPrice,
                        i = e.openPrice,
                        o = e.quoteVolume,
                        a = +n - +i;
                    return {
                        lowPrice: t,
                        lastPrice: n,
                        highPrice: r,
                        openPrice: i,
                        difference: [a >= 0 ? "+" : "", (i ? a / i * 100 : 0).toFixed(2)].join(""),
                        quoteVolume: o,
                        bigThan: +n >= +i
                    }
                },
                b = function(e) {
                    var t = e.baseAsset,
                        n = e.quoteAsset,
                        r = e._type_,
                        i = e.id,
                        o = e.menuModule,
                        a = e.menuSection,
                        l = e.marketSector,
                        c = e.marketFilter,
                        s = e.index,
                        u = e.price,
                        d = [t, n].join("/");
                    (0, f.a)({
                        ecommerce: null
                    }), (0, f.a)({
                        event: "productClick",
                        productClick_info: {
                            eventCategory: "mo_tradecard",
                            eventAction: "click",
                            eventLabel: "marketsoverview::cardlistclick_".concat(d),
                            elementid: i,
                            ecommerce: {
                                click: {
                                    actionField: {
                                        list: "mo_tradecard"
                                    },
                                    products: [{
                                        name: "pair::".concat(d),
                                        id: d,
                                        price: u,
                                        brand: "".concat(o, "_").concat(a),
                                        category: "".concat(l, "_").concat(c),
                                        variant: e.etf ? "etf" : r,
                                        position: s
                                    }]
                                }
                            }
                        }
                    })
                },
                x = function() {
                    return p.cp ? "_blank" : ""
                },
                y = [{
                    unit: "",
                    value: 1
                }, {
                    unit: "K",
                    value: 1e3
                }, {
                    unit: "M",
                    value: 1e6
                }, {
                    unit: "B",
                    value: 1e9
                }],
                A = function(e) {
                    for (var t = y.length - 1; t >= 0; t--) {
                        var n = y[t];
                        if (e >= n.value) return n
                    }
                    return {}
                },
                E = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                    if (e <= 0) return p.jr;
                    if (+e < 1 && !Number.isNaN(+e)) return t + (+e).toFixed(8).replace(/\.?0+$/, "");
                    if (+e < 1e3 && !Number.isNaN(+e)) return t + (+e).toFixed(2);
                    var n = A(e),
                        r = n.unit,
                        i = n.value;
                    if (!i) return e;
                    var o = (0, m.GP)(e / i, 2);
                    return t + o + r
                },
                _ = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 2;
                    return "".concat(e >= 0 ? "+" : "").concat((100 * e).toFixed(t), "%")
                },
                w = function(e) {
                    return "tabMeta".concat(e)
                },
                k = function(e, t) {
                    var n = null === e || void 0 === e ? void 0 : e.reduce((function(e, t) {
                        return e[t.tag] = t, e
                    }), {});
                    return null === t || void 0 === t ? void 0 : t.reduce((function(e, t) {
                        var r = t.tag,
                            o = t.display;
                        if ("newListing" === r) return e;
                        var a = r.replace(/-/g, ""),
                            l = n[a];
                        if (l) {
                            var c = l.list,
                                s = c[c.length - 1];
                            e.zoneInfoList.push((0, i.A)({
                                name: o,
                                tag: r
                            }, s))
                        } else e.zoneInfoList.push({
                            name: o,
                            tag: r,
                            isNoData: !0
                        });
                        return e
                    }), {
                        zoneInfoList: []
                    })
                },
                C = function(e) {
                    var t = e.titleKey,
                        n = e.titleContentKey,
                        r = e.list,
                        i = void 0 === r ? [] : r;
                    if (0 === i.length) return {
                        isNoData: !0
                    };
                    var o = i.map((function(e) {
                            return e.marketCap
                        })).slice(0, 7),
                        a = i.map((function(e) {
                            return e.tradingVolume
                        })).slice(0, 7),
                        l = i[i.length - 1];
                    return {
                        titleKey: t,
                        descKey: n,
                        marketCapTrend: o,
                        volumeTrend: a,
                        marketCapDiff: l.marketCapChange,
                        volumeDiff: l.tradingVolumeChange
                    }
                };

            function N(e) {
                return null != e && "" !== e && (!Number.isNaN(+e) && (+e >= -14 && +e <= 14))
            }
            var S = function(e) {
                    var t = +e;
                    return 0 === t ? 0 : Math.abs(Math.log10(t))
                },
                M = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        t = e.find((function(e) {
                            return e.makerZero && e.takerZero
                        })),
                        n = e.find((function(e) {
                            return e.makerZero
                        }));
                    return [n && h.ny[0], t && h.ny[1]].filter(Boolean)
                },
                O = function(e, t, n) {
                    e[t] = e[t] || [], e[t].push(n)
                },
                F = "market-spot-tab-visited",
                D = function() {
                    return "1" === d.IG.getItem(F)
                },
                R = function() {
                    d.IG.setItem(F, "1")
                },
                B = function(e, t) {
                    return (+t - +e) / +e
                },
                z = function(e) {
                    if (null == e || !Number.isFinite(e) || Number.isNaN(e)) return p.jr;
                    var t = e.toLocaleString("en-US", {
                        style: "percent",
                        minimumFractionDigits: 2,
                        maximumFractionDigits: 2
                    });
                    return e >= 0 ? "+".concat(t) : t
                },
                P = function(e) {
                    if ((0, s.isEmpty)(e)) return null;
                    var t = Number(e);
                    return Number.isNaN(t) || t < -12 || t > 12 ? null : t
                },
                L = function() {
                    var e = (0, r.A)(a().mark((function e(t) {
                        var n, r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (null != (n = P(t))) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", {});
                                case 3:
                                    return e.next = 5, (0, u.q)({
                                        business: "SPOT",
                                        datetime: c()().format("YYYYMMDD"),
                                        timezone: "".concat(3600 * n)
                                    });
                                case 5:
                                    return r = e.sent, e.abrupt("return", r.symbolKlines);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                U = S(1e-7),
                T = function(e) {
                    return (0, m.XU)((0, m.GP)(e, U))
                }
        },
        qeGV: (e, t, n) => {
            "use strict";
            n.d(t, {
                GP: () => d,
                XU: () => f,
                fx: () => h,
                xW: () => u
            });
            var r = n("VP0d"),
                i = n("kPx0"),
                o = n("nsO7"),
                a = n("ah/i"),
                l = n("T3Fm"),
                c = n("AcsR"),
                s = function(e) {
                    return e.toString().replace(/,/g, "")
                };

            function u(e, t, n) {
                switch (n) {
                    case "number":
                        return function(n, i) {
                            var o = (0, r.A)(t ? [i[e], n[e]] : [n[e], i[e]], 2),
                                a = o[0],
                                l = o[1];
                            return (a = Number.isFinite(+a) ? +a : t ? Number.MIN_VALUE : Number.MAX_VALUE) - (l = Number.isFinite(+l) ? +l : t ? Number.MIN_VALUE : Number.MAX_VALUE)
                        };
                    case "string":
                        return function(n, i) {
                            var o = (0, r.A)(t ? [i[e], n[e]] : [n[e], i[e]], 2),
                                a = o[0],
                                l = o[1];
                            return a.localeCompare(l)
                        };
                    case "formattedNumber":
                        return function(n, i) {
                            var o = (0, r.A)(t ? [s(i[e]), s(n[e])] : [s(n[e]), s(i[e])], 2),
                                a = o[0],
                                l = o[1];
                            return (a = Number.isFinite(+a) ? +a : t ? Number.MIN_VALUE : Number.MAX_VALUE) - (l = Number.isFinite(+l) ? +l : t ? Number.MIN_VALUE : Number.MAX_VALUE)
                        };
                    default:
                        return
                }
            }
            var f = function(e) {
                    if (e == c.jr) return e;
                    var t = (0, r.A)(e.toString().split("."), 2),
                        n = t[0],
                        i = t[1],
                        a = void 0 === i ? "" : i;
                    return (a = (0, o.padEnd)(a, 2, "0")).length > 2 && (a = (0, o.trimEnd)(a, "0"), a = (0, o.padEnd)(a, 2, "0")), n + (a ? ".".concat(a) : "")
                },
                d = function(e, t) {
                    if (e = "".concat(e).replace(/,/g, ""), Number.isNaN(+e)) {
                        var n = e.match(/^([^\d]+)(\d.+)$/);
                        if (!n) return c.jr;
                        var i = (0, r.A)(n, 3),
                            o = (i[0], i[1]),
                            l = i[2];
                        return "".concat(o).concat((0, a.xY)(l, t, 3, {
                            locales: "en"
                        }))
                    }
                    return (0, a.xY)(+e, t, 3, {
                        locales: "en"
                    })
                },
                p = function(e) {
                    return e.match(/[^.]*\.[^.]*$/)
                },
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "www",
                        t = "";
                    if (null === window || void 0 === window ? void 0 : window.location) {
                        var n = -1 !== window.location.host.indexOf("localhost") ? "www.devfdg.net" : window.location.host,
                            r = p(n);
                        r && (t = "//".concat(e, ".").concat(r[0]))
                    }
                    return t
                };

            function h(e) {
                return l.o ? "".concat(m("accounts"), "/login?return_to=").concat((0, i.btoau)(window.location.href)) : "https://accounts.binance.com"
            }
        },
        vM3x: function(e, t, n) {
            var r;
            ! function(i) {
                "use strict";
                var o, a = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    l = Math.ceil,
                    c = Math.floor,
                    s = "[BigNumber Error] ",
                    u = s + "Number primitive has more than 15 significant digits: ",
                    f = 1e14,
                    d = 14,
                    p = 9007199254740991,
                    m = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    h = 1e7,
                    v = 1e9;

                function g(e) {
                    var t = 0 | e;
                    return e > 0 || e === t ? t : t - 1
                }

                function b(e) {
                    for (var t, n, r = 1, i = e.length, o = e[0] + ""; r < i;) {
                        for (t = e[r++] + "", n = d - t.length; n--; t = "0" + t);
                        o += t
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function x(e, t) {
                    var n, r, i = e.c,
                        o = t.c,
                        a = e.s,
                        l = t.s,
                        c = e.e,
                        s = t.e;
                    if (!a || !l) return null;
                    if (n = i && !i[0], r = o && !o[0], n || r) return n ? r ? 0 : -l : a;
                    if (a != l) return a;
                    if (n = a < 0, r = c == s, !i || !o) return r ? 0 : !i ^ n ? 1 : -1;
                    if (!r) return c > s ^ n ? 1 : -1;
                    for (l = (c = i.length) < (s = o.length) ? c : s, a = 0; a < l; a++)
                        if (i[a] != o[a]) return i[a] > o[a] ^ n ? 1 : -1;
                    return c == s ? 0 : c > s ^ n ? 1 : -1
                }

                function y(e, t, n, r) {
                    if (e < t || e > n || e !== c(e)) throw Error(s + (r || "Argument") + ("number" == typeof e ? e < t || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function A(e) {
                    var t = e.c.length - 1;
                    return g(e.e / d) == t && e.c[t] % 2 != 0
                }

                function E(e, t) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (t < 0 ? "e" : "e+") + t
                }

                function _(e, t, n) {
                    var r, i;
                    if (t < 0) {
                        for (i = n + "."; ++t; i += n);
                        e = i + e
                    } else if (++t > (r = e.length)) {
                        for (i = n, t -= r; --t; i += n);
                        e += i
                    } else t < r && (e = e.slice(0, t) + "." + e.slice(t));
                    return e
                }
                o = function e(t) {
                    var n, r, i, o = P.prototype = {
                            constructor: P,
                            toString: null,
                            valueOf: null
                        },
                        w = new P(1),
                        k = 20,
                        C = 4,
                        N = -7,
                        S = 21,
                        M = -1e7,
                        O = 1e7,
                        F = !1,
                        D = 1,
                        R = 0,
                        B = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: "\xa0",
                            suffix: ""
                        },
                        z = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function P(e, t) {
                        var n, o, l, s, f, m, h, v, g = this;
                        if (!(g instanceof P)) return new P(e, t);
                        if (null == t) {
                            if (e && !0 === e._isBigNumber) return g.s = e.s, void(!e.c || e.e > O ? g.c = g.e = null : e.e < M ? g.c = [g.e = 0] : (g.e = e.e, g.c = e.c.slice()));
                            if ((m = "number" == typeof e) && 0 * e == 0) {
                                if (g.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (s = 0, f = e; f >= 10; f /= 10, s++);
                                    return void(s > O ? g.c = g.e = null : (g.e = s, g.c = [e]))
                                }
                                v = String(e)
                            } else {
                                if (!a.test(v = String(e))) return i(g, v, m);
                                g.s = 45 == v.charCodeAt(0) ? (v = v.slice(1), -1) : 1
                            }(s = v.indexOf(".")) > -1 && (v = v.replace(".", "")), (f = v.search(/e/i)) > 0 ? (s < 0 && (s = f), s += +v.slice(f + 1), v = v.substring(0, f)) : s < 0 && (s = v.length)
                        } else {
                            if (y(t, 2, z.length, "Base"), 10 == t) return $(g = new P(e), k + g.e + 1, C);
                            if (v = String(e), m = "number" == typeof e) {
                                if (0 * e != 0) return i(g, v, m, t);
                                if (g.s = 1 / e < 0 ? (v = v.slice(1), -1) : 1, P.DEBUG && v.replace(/^0\.0*|\./, "").length > 15) throw Error(u + e)
                            } else g.s = 45 === v.charCodeAt(0) ? (v = v.slice(1), -1) : 1;
                            for (n = z.slice(0, t), s = f = 0, h = v.length; f < h; f++)
                                if (n.indexOf(o = v.charAt(f)) < 0) {
                                    if ("." == o) {
                                        if (f > s) {
                                            s = h;
                                            continue
                                        }
                                    } else if (!l && (v == v.toUpperCase() && (v = v.toLowerCase()) || v == v.toLowerCase() && (v = v.toUpperCase()))) {
                                        l = !0, f = -1, s = 0;
                                        continue
                                    }
                                    return i(g, String(e), m, t)
                                }
                            m = !1, (s = (v = r(v, t, 10, g.s)).indexOf(".")) > -1 ? v = v.replace(".", "") : s = v.length
                        }
                        for (f = 0; 48 === v.charCodeAt(f); f++);
                        for (h = v.length; 48 === v.charCodeAt(--h););
                        if (v = v.slice(f, ++h)) {
                            if (h -= f, m && P.DEBUG && h > 15 && (e > p || e !== c(e))) throw Error(u + g.s * e);
                            if ((s = s - f - 1) > O) g.c = g.e = null;
                            else if (s < M) g.c = [g.e = 0];
                            else {
                                if (g.e = s, g.c = [], f = (s + 1) % d, s < 0 && (f += d), f < h) {
                                    for (f && g.c.push(+v.slice(0, f)), h -= d; f < h;) g.c.push(+v.slice(f, f += d));
                                    f = d - (v = v.slice(f)).length
                                } else f -= h;
                                for (; f--; v += "0");
                                g.c.push(+v)
                            }
                        } else g.c = [g.e = 0]
                    }

                    function L(e, t, n, r) {
                        var i, o, a, l, c;
                        if (null == n ? n = C : y(n, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], a = e.e, null == t) c = b(e.c), c = 1 == r || 2 == r && (a <= N || a >= S) ? E(c, a) : _(c, a, "0");
                        else if (o = (e = $(new P(e), t, n)).e, l = (c = b(e.c)).length, 1 == r || 2 == r && (t <= o || o <= N)) {
                            for (; l < t; c += "0", l++);
                            c = E(c, o)
                        } else if (t -= a, c = _(c, o, "0"), o + 1 > l) {
                            if (--t > 0)
                                for (c += "."; t--; c += "0");
                        } else if ((t += o - l) > 0)
                            for (o + 1 == l && (c += "."); t--; c += "0");
                        return e.s < 0 && i ? "-" + c : c
                    }

                    function U(e, t) {
                        for (var n, r = 1, i = new P(e[0]); r < e.length; r++) {
                            if (!(n = new P(e[r])).s) {
                                i = n;
                                break
                            }
                            t.call(i, n) && (i = n)
                        }
                        return i
                    }

                    function T(e, t, n) {
                        for (var r = 1, i = t.length; !t[--i]; t.pop());
                        for (i = t[0]; i >= 10; i /= 10, r++);
                        return (n = r + n * d - 1) > O ? e.c = e.e = null : n < M ? e.c = [e.e = 0] : (e.e = n, e.c = t), e
                    }

                    function $(e, t, n, r) {
                        var i, o, a, s, u, p, h, v = e.c,
                            g = m;
                        if (v) {
                            e: {
                                for (i = 1, s = v[0]; s >= 10; s /= 10, i++);
                                if ((o = t - i) < 0) o += d,
                                a = t,
                                h = (u = v[p = 0]) / g[i - a - 1] % 10 | 0;
                                else if ((p = l((o + 1) / d)) >= v.length) {
                                    if (!r) break e;
                                    for (; v.length <= p; v.push(0));
                                    u = h = 0, i = 1, a = (o %= d) - d + 1
                                } else {
                                    for (u = s = v[p], i = 1; s >= 10; s /= 10, i++);
                                    h = (a = (o %= d) - d + i) < 0 ? 0 : u / g[i - a - 1] % 10 | 0
                                }
                                if (r = r || t < 0 || null != v[p + 1] || (a < 0 ? u : u % g[i - a - 1]), r = n < 4 ? (h || r) && (0 == n || n == (e.s < 0 ? 3 : 2)) : h > 5 || 5 == h && (4 == n || r || 6 == n && (o > 0 ? a > 0 ? u / g[i - a] : 0 : v[p - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), t < 1 || !v[0]) return v.length = 0, r ? (t -= e.e + 1, v[0] = g[(d - t % d) % d], e.e = -t || 0) : v[0] = e.e = 0, e;
                                if (0 == o ? (v.length = p, s = 1, p--) : (v.length = p + 1, s = g[d - o], v[p] = a > 0 ? c(u / g[i - a] % g[a]) * s : 0), r)
                                    for (;;) {
                                        if (0 == p) {
                                            for (o = 1, a = v[0]; a >= 10; a /= 10, o++);
                                            for (a = v[0] += s, s = 1; a >= 10; a /= 10, s++);
                                            o != s && (e.e++, v[0] == f && (v[0] = 1));
                                            break
                                        }
                                        if (v[p] += s, v[p] != f) break;
                                        v[p--] = 0, s = 1
                                    }
                                for (o = v.length; 0 === v[--o]; v.pop());
                            }
                            e.e > O ? e.c = e.e = null : e.e < M && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function I(e) {
                        var t, n = e.e;
                        return null === n ? e.toString() : (t = b(e.c), t = n <= N || n >= S ? E(t, n) : _(t, n, "0"), e.s < 0 ? "-" + t : t)
                    }
                    return P.clone = e, P.ROUND_UP = 0, P.ROUND_DOWN = 1, P.ROUND_CEIL = 2, P.ROUND_FLOOR = 3, P.ROUND_HALF_UP = 4, P.ROUND_HALF_DOWN = 5, P.ROUND_HALF_EVEN = 6, P.ROUND_HALF_CEIL = 7, P.ROUND_HALF_FLOOR = 8, P.EUCLID = 9, P.config = P.set = function(e) {
                        var t, n;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(s + "Object expected: " + e);
                            if (e.hasOwnProperty(t = "DECIMAL_PLACES") && (y(n = e[t], 0, v, t), k = n), e.hasOwnProperty(t = "ROUNDING_MODE") && (y(n = e[t], 0, 8, t), C = n), e.hasOwnProperty(t = "EXPONENTIAL_AT") && ((n = e[t]) && n.pop ? (y(n[0], -v, 0, t), y(n[1], 0, v, t), N = n[0], S = n[1]) : (y(n, -v, v, t), N = -(S = n < 0 ? -n : n))), e.hasOwnProperty(t = "RANGE"))
                                if ((n = e[t]) && n.pop) y(n[0], -v, -1, t), y(n[1], 1, v, t), M = n[0], O = n[1];
                                else {
                                    if (y(n, -v, v, t), !n) throw Error(s + t + " cannot be zero: " + n);
                                    M = -(O = n < 0 ? -n : n)
                                }
                            if (e.hasOwnProperty(t = "CRYPTO")) {
                                if ((n = e[t]) !== !!n) throw Error(s + t + " not true or false: " + n);
                                if (n) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw F = !n, Error(s + "crypto unavailable");
                                    F = n
                                } else F = n
                            }
                            if (e.hasOwnProperty(t = "MODULO_MODE") && (y(n = e[t], 0, 9, t), D = n), e.hasOwnProperty(t = "POW_PRECISION") && (y(n = e[t], 0, v, t), R = n), e.hasOwnProperty(t = "FORMAT")) {
                                if ("object" != typeof(n = e[t])) throw Error(s + t + " not an object: " + n);
                                B = n
                            }
                            if (e.hasOwnProperty(t = "ALPHABET")) {
                                if ("string" != typeof(n = e[t]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(s + t + " invalid: " + n);
                                z = n
                            }
                        }
                        return {
                            DECIMAL_PLACES: k,
                            ROUNDING_MODE: C,
                            EXPONENTIAL_AT: [N, S],
                            RANGE: [M, O],
                            CRYPTO: F,
                            MODULO_MODE: D,
                            POW_PRECISION: R,
                            FORMAT: B,
                            ALPHABET: z
                        }
                    }, P.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!P.DEBUG) return !0;
                        var t, n, r = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == {}.toString.call(r)) {
                            if ((1 === o || -1 === o) && i >= -v && i <= v && i === c(i)) {
                                if (0 === r[0]) {
                                    if (0 === i && 1 === r.length) return !0;
                                    break e
                                }
                                if ((t = (i + 1) % d) < 1 && (t += d), String(r[0]).length == t) {
                                    for (t = 0; t < r.length; t++)
                                        if ((n = r[t]) < 0 || n >= f || n !== c(n)) break e;
                                    if (0 !== n) return !0
                                }
                            }
                        } else
                        if (null === r && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(s + "Invalid BigNumber: " + e)
                    }, P.maximum = P.max = function() {
                        return U(arguments, o.lt)
                    }, P.minimum = P.min = function() {
                        return U(arguments, o.gt)
                    }, P.random = function() {
                        var e = 9007199254740992,
                            t = Math.random() * e & 2097151 ? function() {
                                return c(Math.random() * e)
                            } : function() {
                                return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                            };
                        return function(e) {
                            var n, r, i, o, a, u = 0,
                                f = [],
                                p = new P(w);
                            if (null == e ? e = k : y(e, 0, v), o = l(e / d), F)
                                if (crypto.getRandomValues) {
                                    for (n = crypto.getRandomValues(new Uint32Array(o *= 2)); u < o;)(a = 131072 * n[u] + (n[u + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), n[u] = r[0], n[u + 1] = r[1]) : (f.push(a % 1e14), u += 2);
                                    u = o / 2
                                } else {
                                    if (!crypto.randomBytes) throw F = !1, Error(s + "crypto unavailable");
                                    for (n = crypto.randomBytes(o *= 7); u < o;)(a = 281474976710656 * (31 & n[u]) + 1099511627776 * n[u + 1] + 4294967296 * n[u + 2] + 16777216 * n[u + 3] + (n[u + 4] << 16) + (n[u + 5] << 8) + n[u + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, u) : (f.push(a % 1e14), u += 7);
                                    u = o / 7
                                }
                            if (!F)
                                for (; u < o;)(a = t()) < 9e15 && (f[u++] = a % 1e14);
                            for (o = f[--u], e %= d, o && e && (a = m[d - e], f[u] = c(o / a) * a); 0 === f[u]; f.pop(), u--);
                            if (u < 0) f = [i = 0];
                            else {
                                for (i = -1; 0 === f[0]; f.splice(0, 1), i -= d);
                                for (u = 1, a = f[0]; a >= 10; a /= 10, u++);
                                u < d && (i -= d - u)
                            }
                            return p.e = i, p.c = f, p
                        }
                    }(), P.sum = function() {
                        for (var e = 1, t = arguments, n = new P(t[0]); e < t.length;) n = n.plus(t[e++]);
                        return n
                    }, r = function() {
                        var e = "0123456789";

                        function t(e, t, n, r) {
                            for (var i, o, a = [0], l = 0, c = e.length; l < c;) {
                                for (o = a.length; o--; a[o] *= t);
                                for (a[0] += r.indexOf(e.charAt(l++)), i = 0; i < a.length; i++) a[i] > n - 1 && (null == a[i + 1] && (a[i + 1] = 0), a[i + 1] += a[i] / n | 0, a[i] %= n)
                            }
                            return a.reverse()
                        }
                        return function(r, i, o, a, l) {
                            var c, s, u, f, d, p, m, h, v = r.indexOf("."),
                                g = k,
                                x = C;
                            for (v >= 0 && (f = R, R = 0, r = r.replace(".", ""), p = (h = new P(i)).pow(r.length - v), R = f, h.c = t(_(b(p.c), p.e, "0"), 10, o, e), h.e = h.c.length), u = f = (m = t(r, i, o, l ? (c = z, e) : (c = e, z))).length; 0 == m[--f]; m.pop());
                            if (!m[0]) return c.charAt(0);
                            if (v < 0 ? --u : (p.c = m, p.e = u, p.s = a, m = (p = n(p, h, g, x, o)).c, d = p.r, u = p.e), v = m[s = u + g + 1], f = o / 2, d = d || s < 0 || null != m[s + 1], d = x < 4 ? (null != v || d) && (0 == x || x == (p.s < 0 ? 3 : 2)) : v > f || v == f && (4 == x || d || 6 == x && 1 & m[s - 1] || x == (p.s < 0 ? 8 : 7)), s < 1 || !m[0]) r = d ? _(c.charAt(1), -g, c.charAt(0)) : c.charAt(0);
                            else {
                                if (m.length = s, d)
                                    for (--o; ++m[--s] > o;) m[s] = 0, s || (++u, m = [1].concat(m));
                                for (f = m.length; !m[--f];);
                                for (v = 0, r = ""; v <= f; r += c.charAt(m[v++]));
                                r = _(r, u, c.charAt(0))
                            }
                            return r
                        }
                    }(), n = function() {
                        function e(e, t, n) {
                            var r, i, o, a, l = 0,
                                c = e.length,
                                s = t % h,
                                u = t / h | 0;
                            for (e = e.slice(); c--;) l = ((i = s * (o = e[c] % h) + (r = u * o + (a = e[c] / h | 0) * s) % h * h + l) / n | 0) + (r / h | 0) + u * a, e[c] = i % n;
                            return l && (e = [l].concat(e)), e
                        }

                        function t(e, t, n, r) {
                            var i, o;
                            if (n != r) o = n > r ? 1 : -1;
                            else
                                for (i = o = 0; i < n; i++)
                                    if (e[i] != t[i]) {
                                        o = e[i] > t[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function n(e, t, n, r) {
                            for (var i = 0; n--;) e[n] -= i, i = e[n] < t[n] ? 1 : 0, e[n] = i * r + e[n] - t[n];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(r, i, o, a, l) {
                            var s, u, p, m, h, v, b, x, y, A, E, _, w, k, C, N, S, M = r.s == i.s ? 1 : -1,
                                O = r.c,
                                F = i.c;
                            if (!O || !O[0] || !F || !F[0]) return new P(r.s && i.s && (O ? !F || O[0] != F[0] : F) ? O && 0 == O[0] || !F ? 0 * M : M / 0 : NaN);
                            for (y = (x = new P(M)).c = [], M = o + (u = r.e - i.e) + 1, l || (l = f, u = g(r.e / d) - g(i.e / d), M = M / d | 0), p = 0; F[p] == (O[p] || 0); p++);
                            if (F[p] > (O[p] || 0) && u--, M < 0) y.push(1), m = !0;
                            else {
                                for (k = O.length, N = F.length, p = 0, M += 2, (h = c(l / (F[0] + 1))) > 1 && (F = e(F, h, l), O = e(O, h, l), N = F.length, k = O.length), w = N, E = (A = O.slice(0, N)).length; E < N; A[E++] = 0);
                                S = F.slice(), S = [0].concat(S), C = F[0], F[1] >= l / 2 && C++;
                                do {
                                    if (h = 0, (s = t(F, A, N, E)) < 0) {
                                        if (_ = A[0], N != E && (_ = _ * l + (A[1] || 0)), (h = c(_ / C)) > 1)
                                            for (h >= l && (h = l - 1), b = (v = e(F, h, l)).length, E = A.length; 1 == t(v, A, b, E);) h--, n(v, N < b ? S : F, b, l), b = v.length, s = 1;
                                        else 0 == h && (s = h = 1), b = (v = F.slice()).length;
                                        if (b < E && (v = [0].concat(v)), n(A, v, E, l), E = A.length, -1 == s)
                                            for (; t(F, A, N, E) < 1;) h++, n(A, N < E ? S : F, E, l), E = A.length
                                    } else 0 === s && (h++, A = [0]);
                                    y[p++] = h, A[0] ? A[E++] = O[w] || 0 : (A = [O[w]], E = 1)
                                } while ((w++ < k || null != A[0]) && M--);
                                m = null != A[0], y[0] || y.splice(0, 1)
                            }
                            if (l == f) {
                                for (p = 1, M = y[0]; M >= 10; M /= 10, p++);
                                $(x, o + (x.e = p + u * d - 1) + 1, a, m)
                            } else x.e = u, x.r = +m;
                            return x
                        }
                    }(), i = function() {
                        var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                            t = /^([^.]+)\.$/,
                            n = /^\.([^.]+)$/,
                            r = /^-?(Infinity|NaN)$/,
                            i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                        return function(o, a, l, c) {
                            var u, f = l ? a : a.replace(i, "");
                            if (r.test(f)) o.s = isNaN(f) ? null : f < 0 ? -1 : 1;
                            else {
                                if (!l && (f = f.replace(e, (function(e, t, n) {
                                        return u = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, c && c != u ? e : t
                                    })), c && (u = c, f = f.replace(t, "$1").replace(n, "0.$1")), a != f)) return new P(f, u);
                                if (P.DEBUG) throw Error(s + "Not a" + (c ? " base " + c : "") + " number: " + a);
                                o.s = null
                            }
                            o.c = o.e = null
                        }
                    }(), o.absoluteValue = o.abs = function() {
                        var e = new P(this);
                        return e.s < 0 && (e.s = 1), e
                    }, o.comparedTo = function(e, t) {
                        return x(this, new P(e, t))
                    }, o.decimalPlaces = o.dp = function(e, t) {
                        var n, r, i, o = this;
                        if (null != e) return y(e, 0, v), null == t ? t = C : y(t, 0, 8), $(new P(o), e + o.e + 1, t);
                        if (!(n = o.c)) return null;
                        if (r = ((i = n.length - 1) - g(this.e / d)) * d, i = n[i])
                            for (; i % 10 == 0; i /= 10, r--);
                        return r < 0 && (r = 0), r
                    }, o.dividedBy = o.div = function(e, t) {
                        return n(this, new P(e, t), k, C)
                    }, o.dividedToIntegerBy = o.idiv = function(e, t) {
                        return n(this, new P(e, t), 0, 1)
                    }, o.exponentiatedBy = o.pow = function(e, t) {
                        var n, r, i, o, a, u, f, p, m = this;
                        if ((e = new P(e)).c && !e.isInteger()) throw Error(s + "Exponent not an integer: " + I(e));
                        if (null != t && (t = new P(t)), a = e.e > 14, !m.c || !m.c[0] || 1 == m.c[0] && !m.e && 1 == m.c.length || !e.c || !e.c[0]) return p = new P(Math.pow(+I(m), a ? 2 - A(e) : +I(e))), t ? p.mod(t) : p;
                        if (u = e.s < 0, t) {
                            if (t.c ? !t.c[0] : !t.s) return new P(NaN);
                            (r = !u && m.isInteger() && t.isInteger()) && (m = m.mod(t))
                        } else {
                            if (e.e > 9 && (m.e > 0 || m.e < -1 || (0 == m.e ? m.c[0] > 1 || a && m.c[1] >= 24e7 : m.c[0] < 8e13 || a && m.c[0] <= 9999975e7))) return o = m.s < 0 && A(e) ? -0 : 0, m.e > -1 && (o = 1 / o), new P(u ? 1 / o : o);
                            R && (o = l(R / d + 2))
                        }
                        for (a ? (n = new P(.5), u && (e.s = 1), f = A(e)) : f = (i = Math.abs(+I(e))) % 2, p = new P(w);;) {
                            if (f) {
                                if (!(p = p.times(m)).c) break;
                                o ? p.c.length > o && (p.c.length = o) : r && (p = p.mod(t))
                            }
                            if (i) {
                                if (0 === (i = c(i / 2))) break;
                                f = i % 2
                            } else if ($(e = e.times(n), e.e + 1, 1), e.e > 14) f = A(e);
                            else {
                                if (0 === (i = +I(e))) break;
                                f = i % 2
                            }
                            m = m.times(m), o ? m.c && m.c.length > o && (m.c.length = o) : r && (m = m.mod(t))
                        }
                        return r ? p : (u && (p = w.div(p)), t ? p.mod(t) : o ? $(p, R, C, undefined) : p)
                    }, o.integerValue = function(e) {
                        var t = new P(this);
                        return null == e ? e = C : y(e, 0, 8), $(t, t.e + 1, e)
                    }, o.isEqualTo = o.eq = function(e, t) {
                        return 0 === x(this, new P(e, t))
                    }, o.isFinite = function() {
                        return !!this.c
                    }, o.isGreaterThan = o.gt = function(e, t) {
                        return x(this, new P(e, t)) > 0
                    }, o.isGreaterThanOrEqualTo = o.gte = function(e, t) {
                        return 1 === (t = x(this, new P(e, t))) || 0 === t
                    }, o.isInteger = function() {
                        return !!this.c && g(this.e / d) > this.c.length - 2
                    }, o.isLessThan = o.lt = function(e, t) {
                        return x(this, new P(e, t)) < 0
                    }, o.isLessThanOrEqualTo = o.lte = function(e, t) {
                        return -1 === (t = x(this, new P(e, t))) || 0 === t
                    }, o.isNaN = function() {
                        return !this.s
                    }, o.isNegative = function() {
                        return this.s < 0
                    }, o.isPositive = function() {
                        return this.s > 0
                    }, o.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, o.minus = function(e, t) {
                        var n, r, i, o, a = this,
                            l = a.s;
                        if (t = (e = new P(e, t)).s, !l || !t) return new P(NaN);
                        if (l != t) return e.s = -t, a.plus(e);
                        var c = a.e / d,
                            s = e.e / d,
                            u = a.c,
                            p = e.c;
                        if (!c || !s) {
                            if (!u || !p) return u ? (e.s = -t, e) : new P(p ? a : NaN);
                            if (!u[0] || !p[0]) return p[0] ? (e.s = -t, e) : new P(u[0] ? a : 3 == C ? -0 : 0)
                        }
                        if (c = g(c), s = g(s), u = u.slice(), l = c - s) {
                            for ((o = l < 0) ? (l = -l, i = u) : (s = c, i = p), i.reverse(), t = l; t--; i.push(0));
                            i.reverse()
                        } else
                            for (r = (o = (l = u.length) < (t = p.length)) ? l : t, l = t = 0; t < r; t++)
                                if (u[t] != p[t]) {
                                    o = u[t] < p[t];
                                    break
                                } if (o && (i = u, u = p, p = i, e.s = -e.s), (t = (r = p.length) - (n = u.length)) > 0)
                            for (; t--; u[n++] = 0);
                        for (t = f - 1; r > l;) {
                            if (u[--r] < p[r]) {
                                for (n = r; n && !u[--n]; u[n] = t);
                                --u[n], u[r] += f
                            }
                            u[r] -= p[r]
                        }
                        for (; 0 == u[0]; u.splice(0, 1), --s);
                        return u[0] ? T(e, u, s) : (e.s = 3 == C ? -1 : 1, e.c = [e.e = 0], e)
                    }, o.modulo = o.mod = function(e, t) {
                        var r, i, o = this;
                        return e = new P(e, t), !o.c || !e.s || e.c && !e.c[0] ? new P(NaN) : !e.c || o.c && !o.c[0] ? new P(o) : (9 == D ? (i = e.s, e.s = 1, r = n(o, e, 0, 3), e.s = i, r.s *= i) : r = n(o, e, 0, D), (e = o.minus(r.times(e))).c[0] || 1 != D || (e.s = o.s), e)
                    }, o.multipliedBy = o.times = function(e, t) {
                        var n, r, i, o, a, l, c, s, u, p, m, v, b, x, y, A = this,
                            E = A.c,
                            _ = (e = new P(e, t)).c;
                        if (!E || !_ || !E[0] || !_[0]) return !A.s || !e.s || E && !E[0] && !_ || _ && !_[0] && !E ? e.c = e.e = e.s = null : (e.s *= A.s, E && _ ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (r = g(A.e / d) + g(e.e / d), e.s *= A.s, (c = E.length) < (p = _.length) && (b = E, E = _, _ = b, i = c, c = p, p = i), i = c + p, b = []; i--; b.push(0));
                        for (x = f, y = h, i = p; --i >= 0;) {
                            for (n = 0, m = _[i] % y, v = _[i] / y | 0, o = i + (a = c); o > i;) n = ((s = m * (s = E[--a] % y) + (l = v * s + (u = E[a] / y | 0) * m) % y * y + b[o] + n) / x | 0) + (l / y | 0) + v * u, b[o--] = s % x;
                            b[o] = n
                        }
                        return n ? ++r : b.splice(0, 1), T(e, b, r)
                    }, o.negated = function() {
                        var e = new P(this);
                        return e.s = -e.s || null, e
                    }, o.plus = function(e, t) {
                        var n, r = this,
                            i = r.s;
                        if (t = (e = new P(e, t)).s, !i || !t) return new P(NaN);
                        if (i != t) return e.s = -t, r.minus(e);
                        var o = r.e / d,
                            a = e.e / d,
                            l = r.c,
                            c = e.c;
                        if (!o || !a) {
                            if (!l || !c) return new P(i / 0);
                            if (!l[0] || !c[0]) return c[0] ? e : new P(l[0] ? r : 0 * i)
                        }
                        if (o = g(o), a = g(a), l = l.slice(), i = o - a) {
                            for (i > 0 ? (a = o, n = c) : (i = -i, n = l), n.reverse(); i--; n.push(0));
                            n.reverse()
                        }
                        for ((i = l.length) - (t = c.length) < 0 && (n = c, c = l, l = n, t = i), i = 0; t;) i = (l[--t] = l[t] + c[t] + i) / f | 0, l[t] = f === l[t] ? 0 : l[t] % f;
                        return i && (l = [i].concat(l), ++a), T(e, l, a)
                    }, o.precision = o.sd = function(e, t) {
                        var n, r, i, o = this;
                        if (null != e && e !== !!e) return y(e, 1, v), null == t ? t = C : y(t, 0, 8), $(new P(o), e, t);
                        if (!(n = o.c)) return null;
                        if (r = (i = n.length - 1) * d + 1, i = n[i]) {
                            for (; i % 10 == 0; i /= 10, r--);
                            for (i = n[0]; i >= 10; i /= 10, r++);
                        }
                        return e && o.e + 1 > r && (r = o.e + 1), r
                    }, o.shiftedBy = function(e) {
                        return y(e, -9007199254740991, p), this.times("1e" + e)
                    }, o.squareRoot = o.sqrt = function() {
                        var e, t, r, i, o, a = this,
                            l = a.c,
                            c = a.s,
                            s = a.e,
                            u = k + 4,
                            f = new P("0.5");
                        if (1 !== c || !l || !l[0]) return new P(!c || c < 0 && (!l || l[0]) ? NaN : l ? a : 1 / 0);
                        if (0 == (c = Math.sqrt(+I(a))) || c == 1 / 0 ? (((t = b(l)).length + s) % 2 == 0 && (t += "0"), c = Math.sqrt(+t), s = g((s + 1) / 2) - (s < 0 || s % 2), r = new P(t = c == 1 / 0 ? "5e" + s : (t = c.toExponential()).slice(0, t.indexOf("e") + 1) + s)) : r = new P(c + ""), r.c[0])
                            for ((c = (s = r.e) + u) < 3 && (c = 0);;)
                                if (o = r, r = f.times(o.plus(n(a, o, u, 1))), b(o.c).slice(0, c) === (t = b(r.c)).slice(0, c)) {
                                    if (r.e < s && --c, "9999" != (t = t.slice(c - 3, c + 1)) && (i || "4999" != t)) {
                                        +t && (+t.slice(1) || "5" != t.charAt(0)) || ($(r, r.e + k + 2, 1), e = !r.times(r).eq(a));
                                        break
                                    }
                                    if (!i && ($(o, o.e + k + 2, 0), o.times(o).eq(a))) {
                                        r = o;
                                        break
                                    }
                                    u += 4, c += 4, i = 1
                                }
                        return $(r, r.e + k + 1, C, e)
                    }, o.toExponential = function(e, t) {
                        return null != e && (y(e, 0, v), e++), L(this, e, t, 1)
                    }, o.toFixed = function(e, t) {
                        return null != e && (y(e, 0, v), e = e + this.e + 1), L(this, e, t)
                    }, o.toFormat = function(e, t, n) {
                        var r, i = this;
                        if (null == n) null != e && t && "object" == typeof t ? (n = t, t = null) : e && "object" == typeof e ? (n = e, e = t = null) : n = B;
                        else if ("object" != typeof n) throw Error(s + "Argument not an object: " + n);
                        if (r = i.toFixed(e, t), i.c) {
                            var o, a = r.split("."),
                                l = +n.groupSize,
                                c = +n.secondaryGroupSize,
                                u = n.groupSeparator || "",
                                f = a[0],
                                d = a[1],
                                p = i.s < 0,
                                m = p ? f.slice(1) : f,
                                h = m.length;
                            if (c && (o = l, l = c, c = o, h -= o), l > 0 && h > 0) {
                                for (o = h % l || l, f = m.substr(0, o); o < h; o += l) f += u + m.substr(o, l);
                                c > 0 && (f += u + m.slice(o)), p && (f = "-" + f)
                            }
                            r = d ? f + (n.decimalSeparator || "") + ((c = +n.fractionGroupSize) ? d.replace(new RegExp("\\d{" + c + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : d) : f
                        }
                        return (n.prefix || "") + r + (n.suffix || "")
                    }, o.toFraction = function(e) {
                        var t, r, i, o, a, l, c, u, f, p, h, v, g = this,
                            x = g.c;
                        if (null != e && (!(c = new P(e)).isInteger() && (c.c || 1 !== c.s) || c.lt(w))) throw Error(s + "Argument " + (c.isInteger() ? "out of range: " : "not an integer: ") + I(c));
                        if (!x) return new P(g);
                        for (t = new P(w), f = r = new P(w), i = u = new P(w), v = b(x), a = t.e = v.length - g.e - 1, t.c[0] = m[(l = a % d) < 0 ? d + l : l], e = !e || c.comparedTo(t) > 0 ? a > 0 ? t : f : c, l = O, O = 1 / 0, c = new P(v), u.c[0] = 0; p = n(c, t, 0, 1), 1 != (o = r.plus(p.times(i))).comparedTo(e);) r = i, i = o, f = u.plus(p.times(o = f)), u = o, t = c.minus(p.times(o = t)), c = o;
                        return o = n(e.minus(r), i, 0, 1), u = u.plus(o.times(f)), r = r.plus(o.times(i)), u.s = f.s = g.s, h = n(f, i, a *= 2, C).minus(g).abs().comparedTo(n(u, r, a, C).minus(g).abs()) < 1 ? [f, i] : [u, r], O = l, h
                    }, o.toNumber = function() {
                        return +I(this)
                    }, o.toPrecision = function(e, t) {
                        return null != e && y(e, 1, v), L(this, e, t, 2)
                    }, o.toString = function(e) {
                        var t, n = this,
                            i = n.s,
                            o = n.e;
                        return null === o ? i ? (t = "Infinity", i < 0 && (t = "-" + t)) : t = "NaN" : (null == e ? t = o <= N || o >= S ? E(b(n.c), o) : _(b(n.c), o, "0") : 10 === e ? t = _(b((n = $(new P(n), k + o + 1, C)).c), n.e, "0") : (y(e, 2, z.length, "Base"), t = r(_(b(n.c), o, "0"), 10, e, i, !0)), i < 0 && n.c[0] && (t = "-" + t)), t
                    }, o.valueOf = o.toJSON = function() {
                        return I(this)
                    }, o._isBigNumber = !0, null != t && P.set(t), P
                }(), o.default = o.BigNumber = o, void 0 === (r = function() {
                    return o
                }.call(t, n, t, e)) || (e.exports = r)
            }()
        },
        BQ33: function(e) {
            e.exports = function() {
                "use strict";
                var e = 1e3,
                    t = 6e4,
                    n = 36e5,
                    r = "millisecond",
                    i = "second",
                    o = "minute",
                    a = "hour",
                    l = "day",
                    c = "week",
                    s = "month",
                    u = "quarter",
                    f = "year",
                    d = "date",
                    p = "Invalid Date",
                    m = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    v = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ordinal: function(e) {
                            var t = ["th", "st", "nd", "rd"],
                                n = e % 100;
                            return "[" + e + (t[(n - 20) % 10] || t[n] || t[0]) + "]"
                        }
                    },
                    g = function(e, t, n) {
                        var r = String(e);
                        return !r || r.length >= t ? e : "" + Array(t + 1 - r.length).join(n) + e
                    },
                    b = {
                        s: g,
                        z: function(e) {
                            var t = -e.utcOffset(),
                                n = Math.abs(t),
                                r = Math.floor(n / 60),
                                i = n % 60;
                            return (t <= 0 ? "+" : "-") + g(r, 2, "0") + ":" + g(i, 2, "0")
                        },
                        m: function e(t, n) {
                            if (t.date() < n.date()) return -e(n, t);
                            var r = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                                i = t.clone().add(r, s),
                                o = n - i < 0,
                                a = t.clone().add(r + (o ? -1 : 1), s);
                            return +(-(r + (n - i) / (o ? i - a : a - i)) || 0)
                        },
                        a: function(e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function(e) {
                            return {
                                M: s,
                                y: f,
                                w: c,
                                d: l,
                                D: d,
                                h: a,
                                m: o,
                                s: i,
                                ms: r,
                                Q: u
                            }[e] || String(e || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(e) {
                            return void 0 === e
                        }
                    },
                    x = "en",
                    y = {};
                y[x] = v;
                var A = function(e) {
                        return e instanceof k
                    },
                    E = function e(t, n, r) {
                        var i;
                        if (!t) return x;
                        if ("string" == typeof t) {
                            var o = t.toLowerCase();
                            y[o] && (i = o), n && (y[o] = n, i = o);
                            var a = t.split("-");
                            if (!i && a.length > 1) return e(a[0])
                        } else {
                            var l = t.name;
                            y[l] = t, i = l
                        }
                        return !r && i && (x = i), i || !r && x
                    },
                    _ = function(e, t) {
                        if (A(e)) return e.clone();
                        var n = "object" == typeof t ? t : {};
                        return n.date = e, n.args = arguments, new k(n)
                    },
                    w = b;
                w.l = E, w.i = A, w.w = function(e, t) {
                    return _(e, {
                        locale: t.$L,
                        utc: t.$u,
                        x: t.$x,
                        $offset: t.$offset
                    })
                };
                var k = function() {
                        function v(e) {
                            this.$L = E(e.locale, null, !0), this.parse(e)
                        }
                        var g = v.prototype;
                        return g.parse = function(e) {
                            this.$d = function(e) {
                                var t = e.date,
                                    n = e.utc;
                                if (null === t) return new Date(NaN);
                                if (w.u(t)) return new Date;
                                if (t instanceof Date) return new Date(t);
                                if ("string" == typeof t && !/Z$/i.test(t)) {
                                    var r = t.match(m);
                                    if (r) {
                                        var i = r[2] - 1 || 0,
                                            o = (r[7] || "0").substring(0, 3);
                                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, o)
                                    }
                                }
                                return new Date(t)
                            }(e), this.$x = e.x || {}, this.init()
                        }, g.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, g.$utils = function() {
                            return w
                        }, g.isValid = function() {
                            return !(this.$d.toString() === p)
                        }, g.isSame = function(e, t) {
                            var n = _(e);
                            return this.startOf(t) <= n && n <= this.endOf(t)
                        }, g.isAfter = function(e, t) {
                            return _(e) < this.startOf(t)
                        }, g.isBefore = function(e, t) {
                            return this.endOf(t) < _(e)
                        }, g.$g = function(e, t, n) {
                            return w.u(e) ? this[t] : this.set(n, e)
                        }, g.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, g.valueOf = function() {
                            return this.$d.getTime()
                        }, g.startOf = function(e, t) {
                            var n = this,
                                r = !!w.u(t) || t,
                                u = w.p(e),
                                p = function(e, t) {
                                    var i = w.w(n.$u ? Date.UTC(n.$y, t, e) : new Date(n.$y, t, e), n);
                                    return r ? i : i.endOf(l)
                                },
                                m = function(e, t) {
                                    return w.w(n.toDate()[e].apply(n.toDate("s"), (r ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), n)
                                },
                                h = this.$W,
                                v = this.$M,
                                g = this.$D,
                                b = "set" + (this.$u ? "UTC" : "");
                            switch (u) {
                                case f:
                                    return r ? p(1, 0) : p(31, 11);
                                case s:
                                    return r ? p(1, v) : p(0, v + 1);
                                case c:
                                    var x = this.$locale().weekStart || 0,
                                        y = (h < x ? h + 7 : h) - x;
                                    return p(r ? g - y : g + (6 - y), v);
                                case l:
                                case d:
                                    return m(b + "Hours", 0);
                                case a:
                                    return m(b + "Minutes", 1);
                                case o:
                                    return m(b + "Seconds", 2);
                                case i:
                                    return m(b + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, g.endOf = function(e) {
                            return this.startOf(e, !1)
                        }, g.$set = function(e, t) {
                            var n, c = w.p(e),
                                u = "set" + (this.$u ? "UTC" : ""),
                                p = (n = {}, n[l] = u + "Date", n[d] = u + "Date", n[s] = u + "Month", n[f] = u + "FullYear", n[a] = u + "Hours", n[o] = u + "Minutes", n[i] = u + "Seconds", n[r] = u + "Milliseconds", n)[c],
                                m = c === l ? this.$D + (t - this.$W) : t;
                            if (c === s || c === f) {
                                var h = this.clone().set(d, 1);
                                h.$d[p](m), h.init(), this.$d = h.set(d, Math.min(this.$D, h.daysInMonth())).$d
                            } else p && this.$d[p](m);
                            return this.init(), this
                        }, g.set = function(e, t) {
                            return this.clone().$set(e, t)
                        }, g.get = function(e) {
                            return this[w.p(e)]()
                        }, g.add = function(r, u) {
                            var d, p = this;
                            r = Number(r);
                            var m = w.p(u),
                                h = function(e) {
                                    var t = _(p);
                                    return w.w(t.date(t.date() + Math.round(e * r)), p)
                                };
                            if (m === s) return this.set(s, this.$M + r);
                            if (m === f) return this.set(f, this.$y + r);
                            if (m === l) return h(1);
                            if (m === c) return h(7);
                            var v = (d = {}, d[o] = t, d[a] = n, d[i] = e, d)[m] || 1,
                                g = this.$d.getTime() + r * v;
                            return w.w(g, this)
                        }, g.subtract = function(e, t) {
                            return this.add(-1 * e, t)
                        }, g.format = function(e) {
                            var t = this,
                                n = this.$locale();
                            if (!this.isValid()) return n.invalidDate || p;
                            var r = e || "YYYY-MM-DDTHH:mm:ssZ",
                                i = w.z(this),
                                o = this.$H,
                                a = this.$m,
                                l = this.$M,
                                c = n.weekdays,
                                s = n.months,
                                u = function(e, n, i, o) {
                                    return e && (e[n] || e(t, r)) || i[n].slice(0, o)
                                },
                                f = function(e) {
                                    return w.s(o % 12 || 12, e, "0")
                                },
                                d = n.meridiem || function(e, t, n) {
                                    var r = e < 12 ? "AM" : "PM";
                                    return n ? r.toLowerCase() : r
                                },
                                m = {
                                    YY: String(this.$y).slice(-2),
                                    YYYY: this.$y,
                                    M: l + 1,
                                    MM: w.s(l + 1, 2, "0"),
                                    MMM: u(n.monthsShort, l, s, 3),
                                    MMMM: u(s, l),
                                    D: this.$D,
                                    DD: w.s(this.$D, 2, "0"),
                                    d: String(this.$W),
                                    dd: u(n.weekdaysMin, this.$W, c, 2),
                                    ddd: u(n.weekdaysShort, this.$W, c, 3),
                                    dddd: c[this.$W],
                                    H: String(o),
                                    HH: w.s(o, 2, "0"),
                                    h: f(1),
                                    hh: f(2),
                                    a: d(o, a, !0),
                                    A: d(o, a, !1),
                                    m: String(a),
                                    mm: w.s(a, 2, "0"),
                                    s: String(this.$s),
                                    ss: w.s(this.$s, 2, "0"),
                                    SSS: w.s(this.$ms, 3, "0"),
                                    Z: i
                                };
                            return r.replace(h, (function(e, t) {
                                return t || m[e] || i.replace(":", "")
                            }))
                        }, g.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, g.diff = function(r, d, p) {
                            var m, h = w.p(d),
                                v = _(r),
                                g = (v.utcOffset() - this.utcOffset()) * t,
                                b = this - v,
                                x = w.m(this, v);
                            return x = (m = {}, m[f] = x / 12, m[s] = x, m[u] = x / 3, m[c] = (b - g) / 6048e5, m[l] = (b - g) / 864e5, m[a] = b / n, m[o] = b / t, m[i] = b / e, m)[h] || b, p ? x : w.a(x)
                        }, g.daysInMonth = function() {
                            return this.endOf(s).$D
                        }, g.$locale = function() {
                            return y[this.$L]
                        }, g.locale = function(e, t) {
                            if (!e) return this.$L;
                            var n = this.clone(),
                                r = E(e, t, !0);
                            return r && (n.$L = r), n
                        }, g.clone = function() {
                            return w.w(this.$d, this)
                        }, g.toDate = function() {
                            return new Date(this.valueOf())
                        }, g.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, g.toISOString = function() {
                            return this.$d.toISOString()
                        }, g.toString = function() {
                            return this.$d.toUTCString()
                        }, v
                    }(),
                    C = k.prototype;
                return _.prototype = C, [
                    ["$ms", r],
                    ["$s", i],
                    ["$m", o],
                    ["$H", a],
                    ["$W", l],
                    ["$M", s],
                    ["$y", f],
                    ["$D", d]
                ].forEach((function(e) {
                    C[e[1]] = function(t) {
                        return this.$g(t, e[0], e[1])
                    }
                })), _.extend = function(e, t) {
                    return e.$i || (e(t, k, _), e.$i = !0), _
                }, _.locale = E, _.isDayjs = A, _.unix = function(e) {
                    return _(1e3 * e)
                }, _.en = y[x], _.Ls = y, _.p = {}, _
            }()
        },
        tPQG: (e, t, n) => {
            var r = n("LtXa"),
                i = n("BlJA");
            e.exports = function(e, t) {
                return e && r(t, i(t), e)
            }
        },
        QrYh: (e, t, n) => {
            var r = n("LtXa"),
                i = n("zH+d");
            e.exports = function(e, t) {
                return e && r(t, i(t), e)
            }
        },
        kn3Q: (e, t, n) => {
            var r = n("HsnV"),
                i = n("LmOH"),
                o = n("c72w"),
                a = n("tPQG"),
                l = n("QrYh"),
                c = n("Grae"),
                s = n("QT01"),
                u = n("AjPR"),
                f = n("BjSP"),
                d = n("tlBq"),
                p = n("zF5n"),
                m = n("kkM+"),
                h = n("3Qlq"),
                v = n("7No3"),
                g = n("sD1O"),
                b = n("wxYD"),
                x = n("3ajY"),
                y = n("NbvU"),
                A = n("tQYX"),
                E = n("/iLo"),
                _ = n("BlJA"),
                w = n("zH+d"),
                k = "[object Arguments]",
                C = "[object Function]",
                N = "[object Object]",
                S = {};
            S[k] = S["[object Array]"] = S["[object ArrayBuffer]"] = S["[object DataView]"] = S["[object Boolean]"] = S["[object Date]"] = S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Map]"] = S["[object Number]"] = S[N] = S["[object RegExp]"] = S["[object Set]"] = S["[object String]"] = S["[object Symbol]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S["[object Error]"] = S[C] = S["[object WeakMap]"] = !1, e.exports = function e(t, n, M, O, F, D) {
                var R, B = 1 & n,
                    z = 2 & n,
                    P = 4 & n;
                if (M && (R = F ? M(t, O, F, D) : M(t)), void 0 !== R) return R;
                if (!A(t)) return t;
                var L = b(t);
                if (L) {
                    if (R = h(t), !B) return s(t, R)
                } else {
                    var U = m(t),
                        T = U == C || "[object GeneratorFunction]" == U;
                    if (x(t)) return c(t, B);
                    if (U == N || U == k || T && !F) {
                        if (R = z || T ? {} : g(t), !B) return z ? f(t, l(R, t)) : u(t, a(R, t))
                    } else {
                        if (!S[U]) return F ? t : {};
                        R = v(t, U, B)
                    }
                }
                D || (D = new r);
                var $ = D.get(t);
                if ($) return $;
                D.set(t, R), E(t) ? t.forEach((function(r) {
                    R.add(e(r, n, M, r, t, D))
                })) : y(t) && t.forEach((function(r, i) {
                    R.set(i, e(r, n, M, i, t, D))
                }));
                var I = L ? void 0 : (P ? z ? p : d : z ? w : _)(t);
                return i(I || t, (function(r, i) {
                    I && (r = t[i = r]), o(R, i, e(r, n, M, i, t, D))
                })), R
            }
        },
        gEWz: (e, t, n) => {
            var r = n("kkM+"),
                i = n("tLQN");
            e.exports = function(e) {
                return i(e) && "[object Map]" == r(e)
            }
        },
        "6I2w": (e, t, n) => {
            var r = n("kkM+"),
                i = n("tLQN");
            e.exports = function(e) {
                return i(e) && "[object Set]" == r(e)
            }
        },
        lN3w: (e, t, n) => {
            var r = n("EAGB");
            e.exports = function(e, t) {
                var n = t ? r(e.buffer) : e.buffer;
                return new e.constructor(n, e.byteOffset, e.byteLength)
            }
        },
        Bstx: e => {
            var t = /\w*$/;
            e.exports = function(e) {
                var n = new e.constructor(e.source, t.exec(e));
                return n.lastIndex = e.lastIndex, n
            }
        },
        bVbG: (e, t, n) => {
            var r = n("Syyo"),
                i = r ? r.prototype : void 0,
                o = i ? i.valueOf : void 0;
            e.exports = function(e) {
                return o ? Object(o.call(e)) : {}
            }
        },
        AjPR: (e, t, n) => {
            var r = n("LtXa"),
                i = n("70Le");
            e.exports = function(e, t) {
                return r(e, i(e), t)
            }
        },
        BjSP: (e, t, n) => {
            var r = n("LtXa"),
                i = n("Xidw");
            e.exports = function(e, t) {
                return r(e, i(e), t)
            }
        },
        zF5n: (e, t, n) => {
            var r = n("pIod"),
                i = n("Xidw"),
                o = n("zH+d");
            e.exports = function(e) {
                return r(e, o, i)
            }
        },
        Xidw: (e, t, n) => {
            var r = n("y/9h"),
                i = n("/wCD"),
                o = n("70Le"),
                a = n("X4R2"),
                l = Object.getOwnPropertySymbols ? function(e) {
                    for (var t = []; e;) r(t, o(e)), e = i(e);
                    return t
                } : a;
            e.exports = l
        },
        "3Qlq": e => {
            var t = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var n = e.length,
                    r = new e.constructor(n);
                return n && "string" == typeof e[0] && t.call(e, "index") && (r.index = e.index, r.input = e.input), r
            }
        },
        "7No3": (e, t, n) => {
            var r = n("EAGB"),
                i = n("lN3w"),
                o = n("Bstx"),
                a = n("bVbG"),
                l = n("6Rtw");
            e.exports = function(e, t, n) {
                var c = e.constructor;
                switch (t) {
                    case "[object ArrayBuffer]":
                        return r(e);
                    case "[object Boolean]":
                    case "[object Date]":
                        return new c(+e);
                    case "[object DataView]":
                        return i(e, n);
                    case "[object Float32Array]":
                    case "[object Float64Array]":
                    case "[object Int8Array]":
                    case "[object Int16Array]":
                    case "[object Int32Array]":
                    case "[object Uint8Array]":
                    case "[object Uint8ClampedArray]":
                    case "[object Uint16Array]":
                    case "[object Uint32Array]":
                        return l(e, n);
                    case "[object Map]":
                    case "[object Set]":
                        return new c;
                    case "[object Number]":
                    case "[object String]":
                        return new c(e);
                    case "[object RegExp]":
                        return o(e);
                    case "[object Symbol]":
                        return a(e)
                }
            }
        },
        "P/al": (e, t, n) => {
            var r = n("zaNA"),
                i = n("H87J"),
                o = n("S3pA"),
                a = n("R3TX");
            e.exports = function(e) {
                var t = null == e ? 0 : e.length,
                    n = o;
                return e = t ? i(e, (function(e) {
                    if ("function" != typeof e[1]) throw new TypeError("Expected a function");
                    return [n(e[0]), e[1]]
                })) : [], a((function(n) {
                    for (var i = -1; ++i < t;) {
                        var o = e[i];
                        if (r(o[0], this, n)) return r(o[1], this, n)
                    }
                }))
            }
        },
        NbvU: (e, t, n) => {
            var r = n("gEWz"),
                i = n("SU8Q"),
                o = n("T6vp"),
                a = o && o.isMap,
                l = a ? i(a) : r;
            e.exports = l
        },
        "/iLo": (e, t, n) => {
            var r = n("6I2w"),
                i = n("SU8Q"),
                o = n("T6vp"),
                a = o && o.isSet,
                l = a ? i(a) : r;
            e.exports = l
        },
        sGJY: (e, t, n) => {
            var r = n("kn3Q"),
                i = n("7/we");
            e.exports = function(e) {
                return i(r(e, 1))
            }
        },
        LF7v: e => {
            e.exports = function() {
                return !0
            }
        },
        ifOS: (e, t, n) => {
            "use strict";
            var r = n("mkfS").Y,
                i = window.matchMedia;

            function o(e, t, n) {
                var o = this;
                if (i && !n) {
                    var a = i.call(window, e);
                    this.matches = a.matches, this.media = a.media, a.addListener(l)
                } else this.matches = r(e, t), this.media = e;

                function l(e) {
                    o.matches = e.matches, o.media = e.media
                }
                this.addListener = function(e) {
                    a && a.addListener(e)
                }, this.removeListener = function(e) {
                    a && a.removeListener(e)
                }, this.dispose = function() {
                    a && a.removeListener(l)
                }
            }
            e.exports = function(e, t, n) {
                return new o(e, t, n)
            }
        },
        nChe: e => {
            "use strict";
            e.exports = function(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                var n = Object.keys(e),
                    r = Object.keys(t),
                    i = n.length;
                if (r.length !== i) return !1;
                for (var o = 0; o < i; o++) {
                    var a = n[o];
                    if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
                }
                return !0
            }
        }
    }
]);
//# debugId=423de9d8-8911-5554-beab-08d18817f6c6