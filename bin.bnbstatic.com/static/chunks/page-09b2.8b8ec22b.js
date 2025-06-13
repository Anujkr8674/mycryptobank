! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "85cbe1ef-b14c-54f7-b5ab-1c83bda9d418")
    } catch (e) {}
}();
(self.webpackChunkmain_exchange_ui = self.webpackChunkmain_exchange_ui || []).push([
    [2486], {
        "//eO": (e, t, r) => {
            "use strict";
            r.d(t, {
                n: () => c
            });
            var n = r("DTvD"),
                o = r("hob6");
            const a = function(e, t) {
                void 0 === t && (t = !1);
                var r = (0, n.useState)(o.Bd ? function() {
                        return window.matchMedia(e).matches
                    } : t),
                    a = r[0],
                    i = r[1];
                return (0, n.useEffect)((function() {
                    var t = !0,
                        r = window.matchMedia(e),
                        n = function() {
                            t && i(!!r.matches)
                        };
                    return r.addListener(n), i(r.matches),
                        function() {
                            t = !1, r.removeListener(n)
                        }
                }), [e]), a
            };
            var i = "(max-width: 767px)",
                s = "(min-width: 768px) and (max-width: 1023px)",
                l = "(min-width: 1024px)",
                c = function() {
                    return {
                        isMobile: a(i, !1),
                        isTablet: a(s, !1),
                        isDesktop: a(l, !0)
                    }
                }
        },
        "45FU": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("M5j3"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("w/Qz");
            const s = function(e) {
                return a().createElement(i.A, (0, n.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",
                    fill: "currentColor"
                }))
            }
        },
        "+Pvs": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("M5j3"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("w/Qz");
            const s = function(e) {
                return a().createElement(i.A, (0, n.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm-1.25-5.5V18h2.5v-2.5h-2.5zm0-9.5v7h2.5V6h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        EnIN: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("M5j3"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("w/Qz");
            const s = function(e) {
                return a().createElement(i.A, (0, n.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z",
                    fill: "currentColor"
                }))
            }
        },
        "afa+": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => k
            });
            var n = r("M5j3"),
                o = r("BK7R"),
                a = r("QUKP"),
                i = r("gZfF"),
                s = r("aVXY"),
                l = r("DTvD"),
                c = r.n(l),
                u = r("LCuF"),
                d = r("C6y2"),
                f = r("yhUQ"),
                p = r("O94r"),
                m = r.n(p),
                h = "32px",
                b = 32,
                v = 40,
                g = 48,
                x = (0, l.forwardRef)((function(e, t) {
                    var r = e.children,
                        o = e.required;
                    return r ? c().createElement(u.A, (0, n.A)({
                        ref: t,
                        as: "label",
                        className: m()({
                            "bn-input-label-required": o
                        }, "bn-input-label"),
                        tx: "forms",
                        variant: "label"
                    }, e, {
                        __css: {
                            position: "absolute",
                            top: "-".concat(h),
                            left: "0px",
                            lineHeight: h,
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
                y = (0, l.forwardRef)((function(e, t) {
                    return e.children ? c().createElement(u.A, (0, n.A)({
                        ref: t,
                        as: "label",
                        className: "bn-input-label",
                        tx: "forms",
                        variant: "label"
                    }, e, {
                        __css: {
                            position: "absolute",
                            top: "-".concat(h),
                            right: 0,
                            lineHeight: h,
                            zIndex: "1",
                            cursor: "text"
                        }
                    })) : null
                }));
            x.displayName = "TextFieldLabel";
            var w = (0, l.forwardRef)((function(e, t) {
                var r = e.onFocus,
                    o = e.onBlur,
                    a = e.onChange,
                    s = (0, i.A)(e, ["onFocus", "onBlur", "onChange"]);
                return c().createElement(u.A, (0, n.A)({
                    ref: t,
                    as: "input",
                    "data-bn-type": "input"
                }, s, {
                    onFocus: r,
                    onBlur: o,
                    onChange: a,
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
            w.displayName = "TextFieldInput";
            var A = (0, l.forwardRef)((function(e, t) {
                var r = e.variant,
                    l = void 0 === r ? "default" : r,
                    p = e.id,
                    A = e.value,
                    k = e.defaultValue,
                    E = e.label,
                    j = e.placeholder,
                    N = e.error,
                    C = e.disabled,
                    _ = e.prefix,
                    O = e.suffix,
                    P = e.infoText,
                    T = void 0 === P ? "" : P,
                    R = e.errorText,
                    M = void 0 === R ? "" : R,
                    S = e.onFocus,
                    z = e.onBlur,
                    D = e.onChange,
                    L = e.boxProps,
                    F = e.required,
                    I = e.extraInfo,
                    B = e.size,
                    H = void 0 === B ? "lg" : B,
                    W = (0, i.A)(e, ["variant", "id", "value", "defaultValue", "label", "placeholder", "error", "disabled", "prefix", "suffix", "infoText", "errorText", "onFocus", "onBlur", "onChange", "boxProps", "required", "extraInfo", "size"]),
                    G = (0, s.A)(c().useState(""), 2),
                    q = G[0],
                    V = G[1],
                    K = c().useRef(null !== A && void 0 !== A).current,
                    U = (0, s.A)(c().useState(k), 2),
                    Q = U[0],
                    Z = U[1];
                K && A !== Q && Z(A);
                var X = N ? M : T,
                    Y = (0, s.A)(c().useState(16), 2),
                    J = Y[0],
                    $ = Y[1],
                    ee = N ? "error" : "info",
                    te = "string" === typeof E ? E : W["area-label"],
                    re = C ? "disabled" : N ? "error" : q;
                "" !== re && (re = "bn-input-status-".concat(re));
                return c().createElement(d.A, (0, n.A)({
                    tx: "textFieldV2",
                    className: m()([re]),
                    variant: l
                }, L, {
                    __css: (0, a.A)((0, o.A)({
                        display: "inline-flex",
                        position: "relative",
                        mt: E ? h : "0px",
                        mb: X.length > 0 ? "".concat(J, "px") : "0px",
                        alignItems: "center",
                        lineHeight: 1.6,
                        height: "".concat(g, "px")
                    }, "lg" === H && {
                        height: "".concat(g, "px")
                    }, "md" === H && {
                        height: "".concat(v, "px")
                    }, "sm" === H && {
                        height: "".concat(b, "px")
                    }), {
                        "&.bn-input-status-focus .bn-input-label": {
                            top: "-".concat(h)
                        }
                    })
                }), _ && c().createElement(u.A, {
                    className: "bn-input-prefix"
                }, _), c().createElement(w, (0, n.A)({
                    id: p,
                    onFocus: function(e) {
                        V("focus"), S && S(e)
                    },
                    onBlur: function(e) {
                        V(""), z && z(e)
                    },
                    onChange: function(e) {
                        K || Z(e.target.value), D && D(e)
                    },
                    ref: t,
                    value: Q,
                    "aria-label": te,
                    disabled: C,
                    placeholder: j,
                    required: F
                }, W)), O && c().createElement(u.A, {
                    className: "bn-input-suffix"
                }, O), c().createElement(x, {
                    htmlFor: p,
                    required: F
                }, E), I && c().createElement(y, null, I), X.length > 0 && c().createElement(f.A, {
                    ref: function(e) {
                        if (e) {
                            var t = e.getBoundingClientRect().height;
                            $(t)
                        }
                    },
                    className: "bn-input-helper-text",
                    variant: "textField.helperText.".concat(ee),
                    __css: {
                        position: "absolute",
                        bottom: "".concat(-1 * J - 4, "px"),
                        lineHeight: "".concat(J, "px")
                    }
                }, X))
            }));
            A.displayName = "TextFieldV2";
            const k = A
        },
        "6fGR": (e, t, r) => {
            "use strict";
            r.d(t, {
                c: () => p
            });
            var n = r("M5j3"),
                o = r("gZfF"),
                a = r("DTvD"),
                i = r.n(a),
                s = r("LCuF"),
                l = r("C6y2"),
                c = r("Eex8"),
                u = r("yhUQ"),
                d = r("w/Qz");
            const f = function(e) {
                return i().createElement(d.A, (0, n.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.035 16.812l-.001.002 2.121 2.121.002-.002 2.121-2.12 9.19-9.192-2.12-2.121-9.191 9.19-3.536-3.534-2.121 2.12 3.535 3.536z",
                    fill: "currentColor"
                }))
            };
            var p = i().forwardRef((function(e, t) {
                var r = e.multiple,
                    a = void 0 !== r && r,
                    d = e.isActive,
                    p = void 0 !== d && d,
                    m = e.isChecked,
                    h = void 0 !== m && m,
                    b = e.value,
                    v = e.disabled,
                    g = e.showChecked,
                    x = void 0 !== g && g,
                    y = e.children,
                    w = e.prefix,
                    A = e.suffix,
                    k = e.combo,
                    E = e.suffixLine,
                    j = (0, o.A)(e, ["multiple", "isActive", "isChecked", "value", "disabled", "showChecked", "children", "prefix", "suffix", "combo", "suffixLine"]);
                return i().createElement(s.A, (0, n.A)({
                    as: "li",
                    role: "option",
                    id: b,
                    key: b,
                    title: b,
                    ref: t,
                    className: h ? "bnb-active-option bn-sdd-option-item" : "bn-sdd-option-item",
                    __css: {
                        color: !v && p ? "t.yellow" : "t.primary",
                        opacity: v ? .4 : 1,
                        cursor: v ? "default" : "pointer",
                        bg: "popupBg",
                        ":hover": {
                            bg: v ? "" : "bg3"
                        },
                        py: k ? "12px" : "8px",
                        lineHeight: 1
                    }
                }, j), i().createElement(l.A, {
                    className: "bn-sdd-option"
                }, a && i().createElement(c.A, {
                    checked: h,
                    disabled: v
                }), w && i().createElement(l.A, {
                    mr: 2,
                    alignItems: "center"
                }, w), i().createElement(s.A, {
                    flex: 1
                }, y), x && i().createElement(i().Fragment, null, i().createElement(l.A, {
                    flex: 1,
                    minWidth: "8px"
                }), i().createElement(f, {
                    color: h ? "primary" : "transparent"
                })), A && i().createElement(s.A, {
                    color: "t.third",
                    ml: "xs"
                }, A)), k && i().createElement(s.A, {
                    __css: {
                        px: "sm"
                    }
                }, i().createElement(u.A, {
                    color: "t.third",
                    variant: "caption",
                    style: {
                        display: "-webkit-box",
                        overflow: "hidden",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        lineHeight: "16px"
                    }
                }, k)), E && i().createElement(s.A, {
                    __css: {
                        px: "sm"
                    }
                }, E))
            }));
            p.displayName = "SearchDropdownOption"
        },
        "DFc+": (e, t, r) => {
            "use strict";
            r.d(t, {
                z: () => l
            });
            var n = r("DTvD"),
                o = r("LCuF"),
                a = r("yhUQ"),
                i = r("O94r"),
                s = r.n(i),
                l = n.forwardRef((function(e, t) {
                    var r = e.label,
                        i = e.children,
                        l = e.groupNameClickable,
                        c = e.handleGroupNameClick,
                        u = e.isActive,
                        d = void 0 !== u && u;
                    return n.createElement(o.A, {
                        as: "li",
                        ref: t
                    }, n.createElement(o.A, {
                        __css: {
                            cursor: l ? "pointer" : "default"
                        },
                        className: s()("bn-sdd-optionGroupLabel", {
                            "is-active": d
                        }),
                        onClick: function(e) {
                            l && c && c(e)
                        }
                    }, n.createElement(a.A, {
                        className: "bn-sdd-optionGroupText"
                    }, r)), n.createElement(o.A, {
                        as: "ul",
                        padding: 0
                    }, i))
                }));
            l.displayName = "SearchDropdownOptGroup"
        },
        HTH5: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => D
            });
            var n = r("M5j3"),
                o = r("BK7R"),
                a = r("QUKP"),
                i = r("gZfF"),
                s = r("aVXY"),
                l = r("tEf9"),
                c = r("DTvD"),
                u = r.n(c),
                d = r("C6y2"),
                f = r("LCuF"),
                p = r("5XPI"),
                m = r("hQCL"),
                h = r("45FU"),
                b = r("EnIN"),
                v = r("TyPU"),
                g = r("P/al"),
                x = r.n(g),
                y = r("eN33"),
                w = r.n(y),
                A = r("sGJY"),
                k = r.n(A),
                E = r("LF7v"),
                j = r.n(E),
                N = r("DFc+"),
                C = r("6fGR"),
                _ = r("afa+"),
                O = r("r4I4"),
                P = r("1TYZ"),
                T = c.useLayoutEffect,
                R = {
                    sm: 32,
                    md: 40,
                    lg: 48
                },
                M = function(e, t) {
                    return "".concat(e, "-").concat(t)
                },
                S = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = u().Children.toArray(e);
                    return e ? n.reduce((function(e, n) {
                        var s;
                        if ((null === n || void 0 === n || null === (s = n.type) || void 0 === s ? void 0 : s.displayName) === N.z.displayName) {
                            var l = n.props,
                                c = l.label,
                                u = l.children,
                                d = (0, i.A)(l, ["label", "children"]);
                            return e.concat(S(u, c, d))
                        }
                        return e.concat((0, a.A)((0, o.A)({
                            group: t
                        }, n.props), {
                            optGroupProps: r
                        }))
                    }), []) : []
                },
                z = function(e) {
                    var t = e.disabled,
                        r = e.label,
                        g = e.onValueChange,
                        y = e.limit,
                        A = void 0 === y ? 5 : y,
                        E = e.children,
                        z = e.value,
                        D = e.placeholder,
                        L = e.defaultValue,
                        F = e.renderValue,
                        I = e.filterFunction,
                        B = void 0 === I ? function(e, t) {
                            return t.toLowerCase().startsWith(e.toLowerCase())
                        } : I,
                        H = e.onChange,
                        W = e.onBlur,
                        G = e.multiple,
                        q = void 0 !== G && G,
                        V = e.showChecked,
                        K = void 0 !== V && V,
                        U = e.searchPlaceholder,
                        Q = e.empty,
                        Z = void 0 === Q ? "No results found." : Q,
                        X = e.alternativeEmpty,
                        Y = e.dropdownFullWidth,
                        J = e.variant,
                        $ = void 0 === J ? "filled" : J,
                        ee = e.hideSearch,
                        te = void 0 !== ee && ee,
                        re = e.lazy,
                        ne = void 0 !== re && re,
                        oe = e.error,
                        ae = void 0 !== oe && oe,
                        ie = e.infoText,
                        se = e.errorText,
                        le = e.footer,
                        ce = e.size,
                        ue = void 0 === ce ? "md" : ce,
                        de = e.searchError,
                        fe = void 0 !== de && de,
                        pe = e.searchErrorText,
                        me = e.searchFieldProps,
                        he = void 0 === me ? {} : me,
                        be = e.needSeo,
                        ve = void 0 === be || be,
                        ge = e.textFieldProps,
                        xe = void 0 === ge ? {} : ge,
                        ye = e.textFieldBoxProps,
                        we = void 0 === ye ? {} : ye,
                        Ae = e.groupNameClickable,
                        ke = void 0 !== Ae && Ae,
                        Ee = e.emphasizedGrouping,
                        je = void 0 !== Ee && Ee,
                        Ne = e.activeGroup,
                        Ce = e.onOpenChange,
                        _e = e.defaultOpen,
                        Oe = void 0 !== _e && _e,
                        Pe = e.itemHeight,
                        Te = e.customBoundaryHeight,
                        Re = e.alternativeMobileUI,
                        Me = e.drawerTitle,
                        Se = (0, i.A)(e, ["disabled", "label", "onValueChange", "limit", "children", "value", "placeholder", "defaultValue", "renderValue", "filterFunction", "onChange", "onBlur", "multiple", "showChecked", "searchPlaceholder", "empty", "alternativeEmpty", "dropdownFullWidth", "variant", "hideSearch", "lazy", "error", "infoText", "errorText", "footer", "size", "searchError", "searchErrorText", "searchFieldProps", "needSeo", "textFieldProps", "textFieldBoxProps", "groupNameClickable", "emphasizedGrouping", "activeGroup", "onOpenChange", "defaultOpen", "itemHeight", "customBoundaryHeight", "alternativeMobileUI", "drawerTitle"]),
                        ze = (0, s.A)((0, c.useState)(""), 2),
                        De = ze[0],
                        Le = ze[1],
                        Fe = (0, s.A)((0, c.useState)(L), 2),
                        Ie = Fe[0],
                        Be = Fe[1],
                        He = (0, s.A)((0, c.useState)(Ne), 2),
                        We = He[0],
                        Ge = He[1],
                        qe = (0, s.A)((0, c.useState)(0), 2),
                        Ve = qe[0],
                        Ke = qe[1],
                        Ue = (0, s.A)((0, c.useState)(""), 2),
                        Qe = Ue[0],
                        Ze = Ue[1],
                        Xe = (0, s.A)((0, c.useState)(0), 2),
                        Ye = Xe[0],
                        Je = Xe[1],
                        $e = (0, s.A)((0, c.useState)(Oe), 2),
                        et = $e[0],
                        tt = $e[1],
                        rt = (0, s.A)((0, c.useState)(ve), 2),
                        nt = rt[0],
                        ot = rt[1],
                        at = (0, s.A)((0, c.useState)({}), 2),
                        it = at[0],
                        st = at[1],
                        lt = (0, c.useRef)(null),
                        ct = (0, c.useRef)(null),
                        ut = (0, c.useRef)({}),
                        dt = (0, c.useRef)({}),
                        ft = (0, c.useRef)(null),
                        pt = (0, c.useRef)(null),
                        mt = (0, P.Q)().isMobile,
                        ht = u().useCallback((function() {
                            return x()([
                                [k()("outline"), w()("filled")],
                                [j(), w()($)]
                            ])($)
                        }), [$]),
                        bt = u().useCallback((function() {
                            return x()([
                                [function(e) {
                                    return !!e
                                }, w()("emphasizedGrouping")],
                                [j(), w()("normal")]
                            ])(je)
                        }), [je]);
                    void 0 !== z && z !== Ie && Be(z), void 0 !== Ne && Ne !== We && Ge(z);
                    var vt = (0, c.useMemo)((function() {
                            return De ? S(E).filter((function(e) {
                                return B(De, e.value)
                            })) : S(E)
                        }), [E, De]),
                        gt = (0, c.useMemo)((function() {
                            return Array.isArray(vt) ? Math.min(vt.length, A) : 0
                        }), [vt]),
                        xt = (0, c.useMemo)((function() {
                            return vt.reduce((function(e, t, r) {
                                var n = t.group,
                                    o = t.optGroupProps;
                                return e.length > 0 && e[e.length - 1].group === n ? e[e.length - 1].options.push(t) : e.push({
                                    key: r,
                                    index: r,
                                    group: n,
                                    groupSeq: M(n, r),
                                    optGroupProps: o,
                                    options: [t]
                                }), e
                            }), [])
                        }), [vt]),
                        yt = (0, c.useCallback)((function() {
                            Le(""), tt(!1), Ce && Ce(!1)
                        }), []);
                    (0, c.useEffect)((function() {
                        lt.current && Je(lt.current.offsetLeft)
                    }), []), (0, c.useEffect)((function() {
                        var e = Math.max(vt.findIndex((function(e) {
                                return e.value === Ie
                            })), 0),
                            t = xt.findIndex((function(e) {
                                return e.group === We
                            }));
                        je && -1 !== t && xt[t] ? Ze(xt[t].groupSeq) : Ke(e)
                    }), [De, Ie, We]), (0, c.useEffect)((function() {
                        if (vt.length > 0) {
                            var e = ut.current[Ve],
                                t = ut.current[Ve + 1],
                                r = ft.current;
                            if (e && r) {
                                var n = r.scrollTop,
                                    o = r.clientHeight,
                                    a = e.offsetTop;
                                if (a - 68 < n) return void(r.scrollTop = a - 68);
                                a >= n + o && t && (r.scrollTop += t.offsetTop - a)
                            }
                        }
                    }), [Ve]), (0, c.useEffect)((function() {
                        if (et) {
                            window.addEventListener("click", yt), ct.current && ct.current.focus();
                            var e = Qe ? dt.current[Qe] : ut.current[Ve],
                                t = ft.current;
                            e && t && (xt.length > 1 ? t.scrollTop = e.offsetTop : t.scrollTop = Ve * (Pe || 40))
                        } else window.removeEventListener("click", yt);
                        return function() {
                            window.removeEventListener("click", yt)
                        }
                    }), [et, Qe]);
                    var wt = (0, c.useRef)(null),
                        At = (0, s.A)((0, c.useState)(1), 2),
                        kt = At[0],
                        Et = At[1];
                    T((function() {
                        wt.current && lt.current && (wt.current.clientHeight >= lt.current.clientHeight ? Et((function(e) {
                            return e + 1
                        })) : lt.current.clientHeight - wt.current.clientHeight > 20 && Et((function(e) {
                            return e - 1
                        })))
                    }), [Ie]);
                    var jt = function(e) {
                            g && g(e), Le(e)
                        },
                        Nt = function() {
                            if (null !== pt.current) {
                                var e = pt.current.getBoundingClientRect(),
                                    t = "function" === typeof getComputedStyle ? getComputedStyle(pt.current) : {
                                        marginLeft: "0",
                                        marginRight: "0",
                                        margin: "0"
                                    },
                                    r = t.marginLeft,
                                    n = t.marginRight,
                                    a = t.margin,
                                    i = function(e) {
                                        return Number(e.split("px")[0])
                                    },
                                    s = pt.current.parentElement.getBoundingClientRect().width - i(r) - i(n) - i(a) / 2,
                                    l = "number" !== typeof Te || isNaN(Te) ? window.innerHeight : Te;
                                if (e.bottom + 40 * gt > l) st((0, o.A)({
                                    bottom: "".concat(e.height, "px")
                                }, Y && {
                                    width: s
                                }));
                                else {
                                    var c = ae ? se : ie,
                                        u = c && c.length > 0;
                                    st((0, o.A)({
                                        mt: u ? "-16px" : "0px"
                                    }, Y && {
                                        width: s
                                    }))
                                }!nt && ot(!0), tt(!0), Ce && Ce(!0)
                            }
                        };
                    T((function() {
                        var e = ae ? se : ie,
                            t = e && e.length > 0;
                        st((function(e) {
                            return (0, a.A)((0, o.A)({}, e), {
                                mt: t ? "-16px" : "0px"
                            })
                        }))
                    }), [se, ie]);
                    var Ct = function(e) {
                            if (38 === e.keyCode) {
                                e.preventDefault();
                                var t = Math.max(Ve - 1, 0);
                                Ke(t)
                            } else if (40 === e.keyCode) {
                                e.preventDefault();
                                var r = Math.min(Ve + 1, vt.length - 1);
                                Ke(r)
                            } else if (13 === e.keyCode)
                                if (et && !q) {
                                    if (vt[Ve]) {
                                        var n = vt[Ve],
                                            o = n.label || n.value;
                                        if (n.disabled) return;
                                        jt(o), H && H(o), Be(o), lt.current && lt.current.blur()
                                    }
                                    yt()
                                } else Nt();
                            else 27 === e.keyCode && yt()
                        },
                        _t = F ? F(Ie) : Array.isArray(Ie) ? u().createElement(d.A, {
                            flexWrap: "wrap",
                            ref: wt
                        }, Ie.map((function(e) {
                            return u().createElement(f.A, {
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
                        Ot = u().createElement(_.A, (0, n.A)({
                            ref: lt,
                            className: "bn-sdd-input",
                            variant: ht(),
                            disabled: t,
                            error: ae,
                            size: ue,
                            infoText: ie,
                            errorText: se,
                            sx: {
                                visibility: F || Array.isArray(Ie) ? "hidden" : "visible",
                                cursor: t ? "default" : "pointer"
                            },
                            bg: "transparent",
                            boxProps: (0, o.A)({
                                sx: {
                                    height: q && kt > 1 ? "".concat(R[ue] + 28 * (kt - 1), "px") : R[ue],
                                    width: "100%",
                                    ".bn-input-suffix": {
                                        height: "100%",
                                        mr: "xs"
                                    },
                                    cursor: t ? "default" : "pointer"
                                },
                                onClick: function(e) {
                                    (e.preventDefault(), t) || (!1 === et ? (document.querySelector(".bn-sdd-dropdown.showing") || e.stopPropagation(), Nt()) : yt())
                                },
                                onMouseDown: function(e) {
                                    e.stopPropagation(), e.preventDefault()
                                }
                            }, we),
                            suffix: u().createElement(d.A, {
                                height: "100%",
                                alignItems: "center"
                            }, u().createElement(h.A, {
                                sx: {
                                    transform: et ? "rotate(180deg)" : "rotate(0)",
                                    color: "t.third"
                                },
                                size: 16
                            })),
                            onFocus: function(e) {
                                e.stopPropagation(), e.preventDefault(), lt.current && lt.current.blur(), !1 === et && Nt()
                            },
                            label: r,
                            value: Ie || "",
                            onKeyDown: function(e) {
                                return Ct(e)
                            }
                        }, !z && !Ie && {
                            placeholder: D,
                            sx: {
                                visibility: "visible",
                                cursor: t ? "default" : "pointer"
                            }
                        }, xe)),
                        Pt = u().createElement(f.A, {
                            className: "bn-sdd-innerInputContainer",
                            width: "100%"
                        }, u().createElement(_.A, (0, n.A)({
                            ref: ct,
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
                            error: fe,
                            errorText: pe,
                            value: De,
                            bg: "transparent",
                            onChange: function(e) {
                                jt(e.target.value), !1 === et && Nt()
                            },
                            onKeyDown: function(e) {
                                return Ct(e)
                            },
                            onBlur: function(e) {
                                W && W(e)
                            },
                            prefix: u().createElement(b.A, {
                                color: "t.placeholder",
                                ml: "8px",
                                mr: "-8px",
                                className: "bn-sdd-icon"
                            }),
                            suffix: u().createElement(v.A, {
                                id: null === he || void 0 === he ? void 0 : he.closeButtonId,
                                className: "bn-sdd-icon",
                                sx: {
                                    color: "t.placeholder",
                                    mr: "xs"
                                },
                                size: 20,
                                onClick: function(e) {
                                    e.preventDefault(), e.stopPropagation(), Le(""), ct.current && ct.current.focus()
                                }
                            }),
                            placeholder: U
                        }, he))),
                        Tt = (0, c.useMemo)((function() {
                            return u().createElement(f.A, {
                                ref: ft,
                                as: "ul",
                                role: "listbox",
                                className: "bn-sdd-list",
                                sx: {
                                    maxHeight: Re && mt ? "none" : "".concat(40 * (.7 + A), "px")
                                }
                            }, (!ne || et) && xt.map((function(e) {
                                return function(e) {
                                    var t = e.key,
                                        r = e.group,
                                        n = e.children,
                                        o = e.groupNameClickable,
                                        a = e.handleGroupNameClick,
                                        i = e.isActive;
                                    return r ? u().createElement(N.z, {
                                        groupNameClickable: o,
                                        handleGroupNameClick: a,
                                        label: r,
                                        key: t,
                                        isActive: i,
                                        ref: function(e) {
                                            dt.current[M(r, t)] = e
                                        }
                                    }, n) : u().createElement(u().Fragment, {
                                        key: t
                                    }, n)
                                }({
                                    key: e.key,
                                    group: e.group,
                                    groupNameClickable: ke,
                                    isActive: Qe === e.groupSeq,
                                    handleGroupNameClick: function(t) {
                                        var r, n, o = e.group;
                                        g && g(o), H && H(o), Be(o), Ge(o), (null === (r = e.optGroupProps) || void 0 === r ? void 0 : r.handleGroupNameClick) && (null === (n = e.optGroupProps) || void 0 === n || n.handleGroupNameClick(t))
                                    },
                                    children: e.options.map((function(t, r) {
                                        t.group;
                                        var n = (0, i.A)(t, ["group"]),
                                            s = e.index + r;
                                        return u().createElement(C.c, (0, a.A)((0, o.A)({}, n), {
                                            key: s,
                                            multiple: q,
                                            isActive: Qe ? Qe === e.groupSeq && !q : Ve === s && !q,
                                            isChecked: Array.isArray(Ie) ? -1 !== Ie.indexOf(n.value) : n.value === Ie,
                                            showChecked: K,
                                            ref: function(e) {
                                                return ut.current[s] = e
                                            },
                                            onClick: function(e) {
                                                if (e.stopPropagation(), !n.disabled) {
                                                    var t;
                                                    if (q || Ke(s), q) {
                                                        var r = Array.isArray(Ie) ? (0, l.A)(Ie) : [],
                                                            o = r.indexOf(n.value); - 1 === o ? r.push(n.value) : r.splice(o, 1), t = r
                                                    } else t = n.value;
                                                    g && g(t), H && H(t), Be(t), Ge(""), q || yt()
                                                }
                                            }
                                        }))
                                    }))
                                })
                            })))
                        }), [ft, A, ne, et, xt, Ve, Ie, Re, mt]),
                        Rt = Re && mt;
                    return u().createElement(f.A, (0, n.A)({
                        tx: "searchDropdown",
                        variant: bt(),
                        ref: pt
                    }, Se), Ot, _t && u().createElement(f.A, {
                        className: "bn-sdd-value",
                        sx: {
                            height: q && kt > 1 ? "".concat(R[ue] + 28 * (kt - 1), "px") : R[ue],
                            position: "absolute",
                            display: "flex",
                            alignItems: "center",
                            left: Ye || 0,
                            bottom: 0,
                            right: 0,
                            pointerEvents: "none",
                            wordBreak: "keep-all",
                            fontSize: "sm",
                            lineHeight: 1,
                            color: t ? "t.disabled" : "t.primary"
                        }
                    }, _t), nt && !Rt && u().createElement(p.Ay, {
                        container: pt.current
                    }, u().createElement(f.A, {
                        className: "bn-sdd-dropdown ".concat(et ? "showing" : "closing"),
                        __css: (0, o.A)({
                            outline: "none",
                            height: "auto",
                            display: et ? "block" : "none",
                            width: "auto!important",
                            minWidth: "100%!important"
                        }, it)
                    }, !te && Pt, 0 === xt.length && u().createElement(f.A, {
                        className: "bn-sdd-noResults"
                    }, Z), Tt, le)), Rt && u().createElement(m.A, {
                        direction: "bottom",
                        visible: et,
                        maskBg: "dialog.mask",
                        bg: "dialog.mask"
                    }, u().createElement(d.A, {
                        tx: "searchDropdown",
                        variant: "drawer",
                        className: "bn-sdd-drawer ".concat(et ? "showing" : "closing"),
                        width: "100%",
                        color: "t.primary"
                    }, u().createElement(O.Ay.ModalTitle, {
                        onClose: yt,
                        title: Me
                    }), u().createElement(d.A, {
                        width: "100%",
                        height: "50vh",
                        flexDirection: "column"
                    }, !te && Pt, 0 === xt.length && u().createElement(f.A, {
                        className: "bn-sdd-noResults"
                    }, X), Tt, le))))
                };
            z.displayName = "SearchDropdown";
            const D = u().memo(z)
        },
        OpNp: (e, t, r) => {
            "use strict";
            r.d(t, {
                OO: () => f,
                R1: () => d,
                RG: () => p
            });
            var n = r("BK7R"),
                o = r("gZfF"),
                a = r("jg1C"),
                i = r("9EqV"),
                s = r("eeEA"),
                l = r("Lp65"),
                c = r("LMMr"),
                u = r.n(c),
                d = function(e) {
                    var t = e.text,
                        r = e.subtitle,
                        n = void 0 === r ? "" : r;
                    return (0, a.jsxs)(s.Ay, {
                        children: [(0, a.jsx)("h2", {
                            className: "headline4 text-t-primary",
                            children: t
                        }), n ? (0, a.jsx)(s.Ay, {
                            className: "body2 mt-4 text-t-secondary",
                            children: n
                        }) : null]
                    })
                },
                f = function(e) {
                    var t = e.containerClassName,
                        r = void 0 === t ? "" : t,
                        i = (0, o.A)(e, ["containerClassName"]);
                    return (0, a.jsx)(l.A, {
                        className: u()("w-full justify-center", r),
                        children: (0, a.jsx)(s.Ay, (0, n.A)({
                            className: "w-[1200px] max-w-[calc(100%-48px)] px-0 py-8 mobile:max-w-full mobile:px-4 tablet:py-12 pc:py-16"
                        }, i))
                    })
                },
                p = function(e) {
                    return (0, a.jsx)(s.Ay, (0, n.A)({
                        id: "section-content",
                        className: (0, i.Q)("body2 whitespace-pre-wrap text-[--color-SecondaryText]", e.extraclassname)
                    }, e))
                }
        },
        "8wU8": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("FAev");

            function o() {
                return (0, n.ok)("", "proof-ui")
            }
        },
        SSfr: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => he
            });
            var n = r("jg1C"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("uHCZ"),
                s = r("ZSsA"),
                l = r("yhUQ"),
                c = r("LCuF"),
                u = r("sViW"),
                d = r("BK7R"),
                f = r("QUKP"),
                p = r("3yYM"),
                m = r.n(p),
                h = r("VA12"),
                b = (function() {
                    var e = (0, u.A)(m().mark((function e() {
                        var t;
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, h.get)("/bapi/asset/v2/public/asset/asset/get-all-asset");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || []);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, u.A)(m().mark((function e() {
                        return m().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, h.get)("/bapi/asset/v2/public/asset/asset/get-all-asset");
                                case 2:
                                    return e.abrupt("return", e.sent);
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                v = r("7xnE"),
                g = {
                    assetList: [],
                    assetMap: {},
                    assetDelistMap: {}
                },
                x = r("zJWh"),
                y = r("MkmD"),
                w = r("8wU8"),
                A = r("OFK0"),
                k = r("Lp65"),
                E = r("eeEA"),
                j = r("D4P9"),
                N = r("p1Xy"),
                C = r("GjVY"),
                _ = r("HS2I");
            const O = function() {
                var e = (0, w.A)().t,
                    t = "light" === (0, N.D)(),
                    r = (0, _.useMediaState)().isDesktop,
                    a = (0, o.useMemo)((function() {
                        var e = "".concat(C.K5, "/static/proof-of-reserves/").concat(t ? "banner-bg-tablet" : "banner-bg-tablet-dark", ".png");
                        return r && (e = "".concat(C.K5, "/static/proof-of-reserves-2/").concat(t ? "banner-bg" : "banner-bg-dark", ".png")), e
                    }), [t, r, C.K5]);
                return (0, n.jsx)(k.A, {
                    className: "h-[360px] w-full flex-col items-center justify-center mobile:h-[300px]",
                    children: (0, n.jsxs)(k.A, {
                        className: "relative h-full w-full flex-col items-center justify-center py-[64px] mobile:py-9 pc:w-[1200px] pc:items-start noH5:max-w-[calc(100%-48px)]",
                        children: [(0, n.jsx)(E.Ay, {
                            className: "absolute top-0 h-[440px] w-full bg-contain bg-right-top bg-no-repeat pc:bg-[length:852px_auto] pc:ltr:bg-[right_-138px_top] pc:rtl:bg-[left_-138px_top]",
                            style: {
                                backgroundImage: "url(".concat(a, ")")
                            }
                        }), (0, n.jsxs)(k.A, {
                            className: "relative max-w-[690px] flex-col mobile:w-full mobile:max-w-full mobile:items-center mobile:justify-center mobile:px-4 mobile:text-center tablet:w-full tablet:max-w-full tablet:items-center tablet:justify-center tablet:px-[80px] tablet:text-center",
                            children: [(0, n.jsx)("h1", {
                                className: "title2 mobile:headline3 my-0 py-0 text-[48px] font-semibold text-t-primary mobile:text-[28px]",
                                children: e("proof-title")
                            }), (0, n.jsx)(E.Ay, {
                                className: "subtitle5 mt-4 text-xl font-normal text-[--color-SecondaryText] mobile:text-[16px] mobile:leading-5",
                                children: e("proof-desc")
                            }), (0, n.jsx)("a", {
                                href: "/my/wallet/verification",
                                children: (0, n.jsx)(j.A, {
                                    sz: "middle",
                                    variant: "primary",
                                    className: "mt-10 w-[180px] mobile:w-[148px]",
                                    children: e("proof-proofOfReserves-viewreport", "View My Report")
                                })
                            })]
                        })]
                    })
                })
            };
            var P = r("qtT+"),
                T = r("//eO"),
                R = r("OpNp"),
                M = function(e) {
                    var t = e.Icon,
                        r = e.title,
                        o = e.desc,
                        a = (0, T.n)().isMobile;
                    return (0, n.jsxs)(k.A, {
                        className: "w-full flex-col gap-6 py-4 mobile:flex-row mobile:items-center mobile:gap-4 mobile:p-0 tablet:items-center tablet:text-center pc:flex-row pc:items-center pc:p-4",
                        children: [(0, n.jsx)(E.Ay, {
                            className: "w-[80px] mobile:w-[64px]",
                            children: (0, n.jsx)(P.A, {
                                src: t,
                                style: {
                                    width: a ? "64px" : "80px",
                                    display: "block"
                                }
                            })
                        }), (0, n.jsxs)(E.Ay, {
                            children: [(0, n.jsx)(E.Ay, {
                                className: "subtitle2 pc:headline6 font-medium text-t-primary mobile:text-[16px] pc:font-semibold",
                                children: r
                            }), (0, n.jsx)(E.Ay, {
                                className: "body2 mobile:body1 mt-2 text-[--color-SecondaryText] mobile:text-[14px]",
                                children: o
                            })]
                        })]
                    })
                };
            const S = function() {
                var e = (0, w.A)().t;
                return (0, n.jsxs)(R.OO, {
                    id: "what-is-proof-reserves",
                    children: [(0, n.jsxs)(k.A, {
                        className: "flex-col items-center justify-between pc:flex-row",
                        children: [(0, n.jsxs)(E.Ay, {
                            className: "w-full max-w-full pc:w-[588px]",
                            children: [(0, n.jsx)(R.R1, {
                                text: e("proof-whatsProof-title")
                            }), (0, n.jsxs)(R.RG, {
                                extraclassname: "mt-10 mobile:mt-6",
                                children: [e("proof-whatsProof-desc"), (0, n.jsx)("br", {}), e("proof-whatsProof-desc1"), (0, n.jsx)("br", {}), e("proof-whatsProof-desc3"), (0, n.jsx)("br", {}), e("proof-whatsProof-desc4")]
                            })]
                        }), (0, n.jsx)(E.Ay, {
                            style: {
                                "--bg-mobile-url": 'url("'.concat(C.K5, '/static/proof-of-reserves/whatsproof_l.png")'),
                                "--bg-noH5-url": 'url("'.concat(C.K5, '/static/proof-of-reserves/whatsproof_l.png")')
                            },
                            className: "mt-6 h-[330px] w-full max-w-full bg-[image:var(--bg-mobile-url)] bg-[length:auto_330px] bg-center bg-no-repeat mobile:h-[233px] mobile:w-[343px] mobile:bg-[length:auto_233px] tablet:mt-12 pc:mt-0 pc:w-[468px] noH5:bg-[image:var(--bg-noH5-url)]"
                        })]
                    }), (0, n.jsxs)(k.A, {
                        className: "mt-10 flex-col gap-10 rounded-xl border border-solid border-[--color-line] mobile:px-4 mobile:py-6 tablet:mt-16 tablet:px-4 tablet:py-10 pc:mt-20 pc:gap-10 pc:p-0 pc:py-10",
                        children: [(0, n.jsx)(E.Ay, {
                            className: "headline4 mobile:headline5 pc:subtitle1 mx-auto my-0 max-w-[900px] text-center text-2xl mobile:px-4 mobile:text-[20px] tablet:px-8 pc:font-semibold",
                            children: e("proof-whatsProof-desc2")
                        }), (0, n.jsxs)(k.A, {
                            className: "flex-row gap-4 mobile:flex-col mobile:gap-8 tablet:gap-8 pc:gap-0 pc:px-6",
                            children: [(0, n.jsx)(M, {
                                Icon: "".concat(C.K5, "/static/proof-of-reserves/transparency.png"),
                                title: e("proof-whatsProof-transparent"),
                                desc: e("proof-whatsProof-transparent-desc")
                            }), (0, n.jsx)(M, {
                                Icon: "".concat(C.K5, "/static/proof-of-reserves/safety.png"),
                                title: e("proof-whatsProof-safety"),
                                desc: e("proof-whatsProof-safety-desc")
                            }), (0, n.jsx)(M, {
                                Icon: "".concat(C.K5, "/static/proof-of-reserves/protected.png"),
                                title: e("proof-whatsProof-protected"),
                                desc: e("proof-whatsProof-protected-desc")
                            })]
                        })]
                    })]
                })
            };
            var z = r("tEf9"),
                D = function() {
                    return (0, n.jsx)(E.Ay, {
                        className: "mr-2 inline-block h-1.5 w-1.5 bg-[--color-PrimaryText] align-middle"
                    })
                },
                L = function(e) {
                    var t = e.title,
                        r = e.desc;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)(k.A, {
                            className: "mt-10 items-center align-middle mobile:mt-8",
                            children: [(0, n.jsx)(D, {}), (0, n.jsx)(E.Ay, {
                                className: "headline6 mobile:text-xl mobile:font-medium",
                                children: t
                            })]
                        }), (0, n.jsx)(R.RG, {
                            extraclassname: "mt-4",
                            children: r
                        })]
                    })
                };
            const F = function() {
                var e = (0, w.A)().t,
                    t = "light" === (0, N.D)(),
                    r = (0, T.n)().isMobile,
                    a = (0, o.useMemo)((function() {
                        return r ? r ? "".concat(C.K5, "/static/proof-of-reserves-2/").concat(t ? "hash1234-mobile-light" : "hash1234-mobile", ".png") : void 0 : "".concat(C.K5, "/static/proof-of-reserves/").concat(t ? "hash1234" : "hash1234-dark", ".png")
                    }), [t, r]);
                return (0, n.jsxs)(R.OO, {
                    id: "merkle-tree",
                    children: [(0, n.jsx)(R.R1, {
                        text: e("proof-merkleTree-title")
                    }), (0, z.A)(Array(2)).map((function(t, r) {
                        return (0, n.jsx)(L, {
                            title: e("proof-merkleTree-title".concat(r + 1)),
                            desc: e("proof-merkleTree-desc".concat(r + 1))
                        }, r)
                    })), (0, n.jsx)(k.A, {
                        className: "mt-10 w-full items-center justify-center rounded-xl border border-solid border-[--color-line] py-[48px] mobile:mt-8 mobile:py-6",
                        children: (0, n.jsx)(P.A, {
                            className: "block w-[560px] mobile:w-[92%]",
                            src: a
                        })
                    })]
                })
            };
            var I = function(e) {
                var t = e.title,
                    r = e.imgSrc,
                    o = (0, w.A)().t;
                return (0, n.jsxs)(k.A, {
                    className: "mt-10 flex-col items-center justify-between mobile:mt-8 pc:mt-10 pc:flex-row pc:items-start",
                    children: [(0, n.jsxs)(E.Ay, {
                        className: "max-w-full pc:w-[480px]",
                        children: [(0, n.jsx)(E.Ay, {
                            className: "headline6 mobile:text-xl mobile:font-medium",
                            children: t
                        }), (0, n.jsxs)(R.RG, {
                            extraclassname: "mt-4",
                            children: [(0, n.jsx)(E.Ay, {
                                children: o("proof-howToWork-desc1")
                            }), (0, n.jsx)(E.Ay, {
                                dangerouslySetInnerHTML: {
                                    __html: o("proof-howToWork-desc2")
                                }
                            }), (0, n.jsx)(E.Ay, {
                                dangerouslySetInnerHTML: {
                                    __html: o("proof-howToWork-desc3")
                                }
                            }), (0, n.jsx)(E.Ay, {
                                children: o("proof-howToWork-desc4")
                            }), (0, n.jsx)(E.Ay, {
                                className: "mt-4",
                                children: o("proof-howToWork-desc5")
                            }), (0, n.jsx)(E.Ay, {
                                className: "mt-4",
                                children: o("proof-howToWork-desc6")
                            })]
                        })]
                    }), (0, n.jsx)(P.A, {
                        className: "mt-10 w-full mobile:mt-6 tablet:w-[640px] pc:mt-0 pc:w-[640px]",
                        src: r
                    })]
                })
            };
            const B = function() {
                var e = (0, w.A)().t,
                    t = "light" === (0, N.D)();
                return (0, n.jsxs)(R.OO, {
                    id: "how-it-works",
                    children: [(0, n.jsx)(R.R1, {
                        text: e("proof-howToWork-title")
                    }), (0, n.jsx)(I, {
                        title: e("proof-howToWork-title1"),
                        imgSrc: "".concat(C.K5, t ? "/static/proof-of-reserves/how-it-works.png" : "/static/proof-of-reserves/how-it-works-dark.png")
                    })]
                })
            };
            var H = r("0GOp"),
                W = r.n(H),
                G = r("HTH5"),
                q = r("6fGR"),
                V = r("M5j3"),
                K = r("w/Qz");
            const U = function(e) {
                return a().createElement(K.A, (0, V.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 20.999l7.071-7.071-1.768-1.768-4.054 4.055V2.998h-2.5v13.216L6.696 12.16l-1.768 1.768 7.07 7.071H12z",
                    fill: "currentColor"
                }))
            };
            var Q = r("ah/i"),
                Z = r("FAev"),
                X = r("6IHq"),
                Y = r("xaLX"),
                J = function() {
                    var e = (0, u.A)(W().mark((function e(t) {
                        var r;
                        return W().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, h.get)("".concat(X.k.GET_AUDIT_ADDR_DOWNLOAD, "?auditId=").concat(t));
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                $ = r("gZfF"),
                ee = r("wlrn"),
                te = r("qtv7"),
                re = r("JgEn"),
                ne = r("+Pvs"),
                oe = function(e) {
                    var t = e.label,
                        r = e.balance;
                    return r && (0, n.jsxs)(k.A, {
                        className: "merkle-root-hash mt-2",
                        children: [(0, n.jsxs)(k.A, {
                            className: "items-center justify-between",
                            children: [(0, n.jsx)(k.A, {
                                className: "mr-1 h-3 w-3 items-center justify-center",
                                children: (0, n.jsx)(E.Ay, {
                                    className: "rectangle"
                                })
                            }), (0, n.jsx)(E.Ay, {
                                className: "caption2 text-[--color-TertiaryText]",
                                children: t
                            })]
                        }), (0, n.jsx)(E.Ay, {
                            className: "caption1 text-t-primary mobile:mt-1",
                            children: r
                        })]
                    })
                },
                ae = function(e) {
                    var t, r = e.coin,
                        o = e.logoUrl,
                        a = e.ratio,
                        i = e.customerLiability,
                        s = e.binanceLiability,
                        l = e.exchangeBalance,
                        c = e.thirdPartyCustody,
                        u = e.auditDate,
                        d = e.marginInsurance,
                        f = e.futureInsurance,
                        p = (0, w.A)().t,
                        m = function(e) {
                            if (!e) return !0;
                            var t = e.split("/"),
                                r = parseInt(t[2], 10) + 2e3,
                                n = parseInt(t[1], 10) - 1,
                                o = parseInt(t[0], 10);
                            return new Date(r, n, o).getTime() > new Date("2023-08-31 00:00:00").getTime()
                        }(u);
                    return (0, n.jsxs)(E.Ay, {
                        className: "rounded-xl border border-solid border-[--color-line] p-6 mobile:p-4",
                        children: [(0, n.jsxs)(k.A, {
                            className: "items-center justify-between",
                            children: [(0, n.jsxs)(k.A, {
                                className: "items-center",
                                children: [(0, n.jsx)(E.Ay, {
                                    as: "span",
                                    className: "headline5 mobile:headline5 mr-1 text-xl text-t-primary mobile:text-base",
                                    children: r
                                }), (0, n.jsx)(E.Ay, {
                                    as: "span",
                                    className: "subtitle1 mobile:subtitle1 text-base font-medium text-t-third mobile:text-sm",
                                    children: p("proof-proofOfReserves-reserveRadio")
                                })]
                            }), (0, n.jsx)(P.A, {
                                src: o,
                                className: "block w-10 mobile:hidden mobile:w-8 tablet:hidden"
                            })]
                        }), (0, n.jsxs)(k.A, {
                            className: "mt-1 w-full items-center justify-between",
                            children: [(0, n.jsx)(E.Ay, {
                                className: "headline4 text-t-primary",
                                children: (t = a, (0, Q.RK)(t, 1, {
                                    digit: 2
                                }))
                            }), (0, n.jsx)(P.A, {
                                src: o,
                                className: "hidden w-10 mobile:block mobile:w-8 tablet:block"
                            })]
                        }), (0, n.jsx)(E.Ay, {
                            className: "caption2 mt-4 text-[--color-TertiaryText]",
                            children: p("proof-proofOfReserves-customerLiability")
                        }), (0, n.jsxs)(k.A, {
                            className: "flex-style body2 mobile:body1 mt-1 font-semibold text-t-primary",
                            children: [i, (d || f) && (0, n.jsx)(re.A, {
                                variant: "gray",
                                arrow: !0,
                                tooltips: (0, n.jsxs)(k.A, {
                                    style: {
                                        flexDirection: "column"
                                    },
                                    children: [d && (0, n.jsx)(k.A, {
                                        children: "".concat(p("proof-proofOfReserves-marginInsurance", "Margin Insurance"), ": ").concat(d)
                                    }), f && (0, n.jsx)(k.A, {
                                        children: "".concat(p("proof-proofOfReserves-futureInsurance", "Future Insurance"), ": ").concat(f)
                                    })]
                                }),
                                children: (0, n.jsx)(ne.A, {
                                    sx: {
                                        cursor: "pointer",
                                        marginLeft: "2px",
                                        marginTop: "2px"
                                    },
                                    color: "#929AA5",
                                    size: 16
                                })
                            })]
                        }), (0, n.jsx)(E.Ay, {
                            className: "my-2 h-px w-full",
                            style: {
                                borderBottom: "1px dashed var(--color-line)"
                            }
                        }), (0, n.jsx)(E.Ay, {
                            className: "caption2 text-[--color-TertiaryText]",
                            children: p("proof-proofOfReserves-binanceLiability")
                        }), (0, n.jsx)(E.Ay, {
                            className: "body2 mobile:body1 mt-1 font-semibold text-t-primary",
                            children: s
                        }), m && (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(oe, {
                                label: p("proof-proofOfReserves-exchange-balance", "Exchange Balance"),
                                balance: l
                            }), (0, n.jsx)(oe, {
                                label: p("proof-proofOfReserves-exchange-third-party-balance", "Third Party Custody"),
                                balance: c
                            })]
                        })]
                    })
                },
                ie = function(e) {
                    var t = e.data,
                        r = e.auditDate,
                        a = (0, T.n)(),
                        i = a.isMobile,
                        s = a.isTablet,
                        l = (0, o.useMemo)((function() {
                            return i ? 2 : s ? 3 : 4
                        }), [i, s]);
                    return (0, n.jsx)(te.A, {
                        className: "mt-6 gap-6 mobile:gap-4",
                        gridCols: l,
                        children: t.map((function(e, t) {
                            return (0, n.jsx)(ae, (0, f.A)((0, d.A)({}, e), {
                                auditDate: r
                            }), t)
                        }))
                    })
                },
                se = function(e) {
                    var t = e.dataFetch,
                        r = e.children,
                        a = e.initPageNumber,
                        i = void 0 === a ? 1 : a,
                        s = e.pageSize,
                        l = void 0 === s ? 10 : s,
                        c = e.onPageDataTurn,
                        p = (0, $.A)(e, ["dataFetch", "children", "initPageNumber", "pageSize", "onPageDataTurn"]),
                        m = function(e) {
                            var t = e.dataFetch,
                                r = e.initPageNumber,
                                n = void 0 === r ? 1 : r,
                                a = e.pageSize,
                                i = void 0 === a ? 10 : a,
                                s = (0, o.useState)(!1),
                                l = s[0],
                                c = s[1],
                                d = (0, o.useState)(n),
                                f = d[0],
                                p = d[1],
                                m = (0, o.useState)([]),
                                h = m[0],
                                b = m[1],
                                v = (0, o.useState)(0),
                                g = v[0],
                                x = v[1],
                                y = (0, o.useCallback)(function() {
                                    var e = (0, u.A)(W().mark((function e(r) {
                                        var n, o, a;
                                        return W().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return c(!0), e.prev = 1, e.next = 4, t({
                                                        current: r,
                                                        pageSize: i
                                                    });
                                                case 4:
                                                    n = e.sent, o = n.data, a = n.total, b(o), x(Math.ceil(a / i)), e.next = 14;
                                                    break;
                                                case 11:
                                                    e.prev = 11, e.t0 = e.catch(1), console.log(e.t0);
                                                case 14:
                                                    c(!1);
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 11]
                                        ])
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(), [t, i]),
                                w = (0, o.useCallback)(function() {
                                    var e = (0, u.A)(W().mark((function e(t) {
                                        return W().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, y(t);
                                                case 2:
                                                    p(t);
                                                case 3:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(), [y]);
                            return (0, o.useEffect)((function() {
                                y(f)
                            }), [f, y]), {
                                pageData: h,
                                turnPage: w,
                                current: f,
                                loading: l,
                                total: g
                            }
                        }({
                            dataFetch: t,
                            initPageNumber: i,
                            pageSize: l
                        }),
                        h = m.pageData,
                        b = m.turnPage,
                        v = m.current,
                        g = m.total;
                    return 0 === g ? null : (0, n.jsxs)(E.Ay, {
                        children: [(0, n.jsx)(ie, (0, f.A)((0, d.A)({}, p), {
                            data: h
                        })), (0, n.jsxs)(k.A, {
                            className: "mt-6 flex-row items-start justify-between mobile:flex-col-reverse mobile:items-center",
                            children: [r, g > 1 ? (0, n.jsx)(ee.A, {
                                className: "mb-0 mobile:mb-6",
                                total: g,
                                current: v,
                                onChange: function(e) {
                                    b(e), c && c()
                                }
                            }) : null]
                        })]
                    })
                };
            const le = function(e) {
                var t = e.assetMap,
                    r = (0, w.A)().t,
                    a = (0, o.useState)([]),
                    i = a[0],
                    s = a[1],
                    l = (0, o.useState)(""),
                    c = l[0],
                    p = l[1],
                    m = (0, o.useState)({}),
                    h = m[0],
                    b = m[1],
                    v = (0, Z.Qs)(),
                    g = v.isMobile,
                    x = v.isTablet,
                    y = (0, o.useMemo)((function() {
                        return g ? 6 : x ? 9 : 8
                    }), [g, x]);
                (0, o.useEffect)((function() {
                    (0, Y.i8)(X.k.AUDIT_PROOF_SNAPSHOT_CONDITION).then((function(e) {
                        "000000" === e.code && (s(null === e || void 0 === e ? void 0 : e.data), p(null === e || void 0 === e ? void 0 : e.data[0]))
                    }))
                }), []), (0, o.useEffect)((function() {
                    c && function(e) {
                        var t = e.time,
                            r = e.pageIndex,
                            n = void 0 === r ? 0 : r,
                            o = e.pageSize,
                            a = void 0 === o ? 0 : o;
                        return (0, Y.UY)(X.k.USER_RESERVE_AUDIT_PROOF_SNAPSHOT, {
                            time: t,
                            pageIndex: n,
                            pageSize: a
                        })
                    }({
                        time: c
                    }).then((function(e) {
                        if ("000000" === e.code) {
                            var r = (null === e || void 0 === e ? void 0 : e.data) || {};
                            b((0, f.A)((0, d.A)({}, r), {
                                snapshotDataList: (r.snapshotDataList || []).map((function(e) {
                                    var r, n;
                                    return (0, f.A)((0, d.A)({}, e), {
                                        customerLiability: (0, Q.QF)(e.customerLiability),
                                        binanceLiability: (0, Q.QF)(e.binanceLiability),
                                        marginInsurancek: (null === e || void 0 === e ? void 0 : e.marginInsurancek) ? (0, Q.QF)(null === e || void 0 === e ? void 0 : e.marginInsurancek) : null,
                                        futureInsurance: (null === e || void 0 === e ? void 0 : e.futureInsurance) ? (0, Q.QF)(null === e || void 0 === e ? void 0 : e.futureInsurance) : null,
                                        exchangeBalance: (null === e || void 0 === e ? void 0 : e.exchangeBalance) ? (0, Q.QF)(null === e || void 0 === e ? void 0 : e.exchangeBalance) : null,
                                        thirdPartyCustody: (null === e || void 0 === e ? void 0 : e.thirdPartyCustody) ? (0, Q.QF)(null === e || void 0 === e ? void 0 : e.thirdPartyCustody) : null,
                                        assetName: null === (r = t[e.coin]) || void 0 === r ? void 0 : r.assetName,
                                        logoUrl: null === (n = t[e.coin]) || void 0 === n ? void 0 : n.logoUrl
                                    })
                                }))
                            }))
                        }
                    }))
                }), [c, t]);
                var A = function() {
                    var e = (0, u.A)(W().mark((function e() {
                        var t;
                        return W().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, J(null === h || void 0 === h ? void 0 : h.auditId);
                                case 2:
                                    t = e.sent, window.open(t.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
                return (0, n.jsxs)(R.OO, {
                    id: "proof-of-reserves",
                    containerClassName: "relative",
                    children: [(0, n.jsxs)(k.A, {
                        className: "flex items-center gap-4 mobile:flex-col mobile:items-baseline mobile:gap-2",
                        children: [(0, n.jsx)(E.Ay, {
                            className: "subtitle6 mobile:headline4 font-semibold text-t-primary",
                            children: "Audit Time"
                        }), (0, n.jsx)(G.A, {
                            className: "w-[388px] mobile:w-full tablet:w-[450px] [&_div]:rounded-[10px]",
                            sx: {
                                maxWidth: "100%",
                                input: {
                                    lineHeight: "20px"
                                }
                            },
                            value: c,
                            hideSearch: !0,
                            variant: "line",
                            onChange: function(e) {
                                "string" === typeof e && p(e)
                            },
                            children: null === i || void 0 === i ? void 0 : i.map((function(e) {
                                return (0, n.jsx)(q.c, {
                                    sx: {
                                        lineHeight: "20px"
                                    },
                                    value: e,
                                    children: e
                                }, e)
                            }))
                        })]
                    }), (0, n.jsxs)(E.Ay, {
                        className: "relative",
                        children: [(0, n.jsxs)(E.Ay, {
                            className: "mr-1 mt-2 break-all text-t-primary mobile:mr-0 mobile:mt-6",
                            children: [(0, n.jsxs)(E.Ay, {
                                className: "subtitle6 mobile:subtitle1 font-semibold",
                                as: "span",
                                children: [r("proof-proofOfReserves-auditor"), ":", " "]
                            }), (0, n.jsx)(E.Ay, {
                                className: "body1 mobile:subtitle1 mobile:font-semibold tablet:text-sm tablet:font-normal pc:text-sm pc:font-normal",
                                as: "span",
                                children: h.auditor
                            })]
                        }), (0, n.jsxs)(k.A, {
                            className: "merkle-root-hash mt-2 text-t-primary tablet:break-all pc:break-all",
                            children: [(0, n.jsxs)(E.Ay, {
                                className: "mobile:flex mobile:flex-col",
                                children: [(0, n.jsxs)(E.Ay, {
                                    className: "pc:subtitle6 tablet:subtitle6 mobile:body1 mobile:text-sm mobile:font-normal tablet:font-semibold pc:font-semibold",
                                    as: "span",
                                    children: [r("proof-proofOfReserves-roothash"), " "]
                                }), (0, n.jsx)(E.Ay, {
                                    className: "body1 text-sm font-normal mobile:break-all",
                                    as: "span",
                                    children: h.merkleRootHash
                                })]
                            }), (0, n.jsxs)(E.Ay, {
                                className: "merkle-root-hash-btns",
                                children: [(0, n.jsxs)(j.A, {
                                    sz: "small",
                                    onClick: A,
                                    children: [r("proof-proofOfReserves-download-address", "Download All Address"), (0, n.jsx)(U, {
                                        size: 16
                                    })]
                                }), !!h.auditor && "Pending" !== h.auditor && (0, n.jsx)("a", {
                                    target: "_blank",
                                    href: h.auditorLink,
                                    rel: "noreferrer",
                                    children: (0, n.jsx)(j.A, {
                                        sz: "small",
                                        className: "ml-2",
                                        children: r("proof-proofOfReserves-download-report")
                                    })
                                })]
                            })]
                        })]
                    }), (0, n.jsx)(E.Ay, {
                        children: (0, n.jsx)(se, {
                            pageSize: y,
                            onPageDataTurn: function() {
                                document.querySelector("#proof-of-reserves").scrollIntoView()
                            },
                            dataFetch: function(e) {
                                var t, r = e.current,
                                    n = e.pageSize;
                                if (null === (t = h.snapshotDataList) || void 0 === t ? void 0 : t.length) {
                                    var o = (r - 1) * n;
                                    return {
                                        data: h.snapshotDataList.slice(o, o + n),
                                        total: h.snapshotDataList.length
                                    }
                                }
                                return {
                                    data: [],
                                    total: 0
                                }
                            },
                            auditDate: null === h || void 0 === h ? void 0 : h.auditDate,
                            children: (0, n.jsxs)(E.Ay, {
                                className: "body2 mobile:body2 text-t-primary mobile:mt-6 mobile:w-full mobile:text-left mobile:text-[14px]",
                                children: [r("proof-proofOfReserves-knowMore"), (0, n.jsx)("a", {
                                    target: "_blank",
                                    href: "/my/wallet/verification",
                                    className: "ml-1 text-[--color-TextLink] underline",
                                    rel: "noreferrer",
                                    children: r("proof-proofOfReserves-academy")
                                })]
                            })
                        }, null === h || void 0 === h ? void 0 : h.merkleRootHash)
                    })]
                })
            };
            var ce = function(e) {
                    var t = e.title;
                    return (0, n.jsxs)(E.Ay, {
                        className: "headline6 mt-10 align-middle mobile:mt-8 mobile:text-xl mobile:font-medium tablet:mt-12",
                        children: [(0, n.jsx)(D, {}), t]
                    })
                },
                ue = function(e) {
                    var t = e.href,
                        r = e.children;
                    return (0, n.jsx)("a", {
                        target: "_blank",
                        className: "text-[--color-TextLink]",
                        href: t,
                        rel: "noreferrer",
                        children: r
                    })
                };
            const de = function() {
                var e = (0, w.A)().t;
                return (0, n.jsxs)(R.OO, {
                    id: "merkle-tree",
                    children: [(0, n.jsx)(R.R1, {
                        text: e("proof-snaks-title")
                    }), (0, n.jsx)(ce, {
                        title: e("proof-snaks-title1")
                    }), (0, n.jsxs)(R.RG, {
                        extraclassname: "mt-4",
                        children: [(0, z.A)(Array(4)).map((function(t, r) {
                            return (0, n.jsx)(E.Ay, {
                                children: e("proof-snaks-desc".concat(r + 1))
                            }, r)
                        })), (0, n.jsx)(E.Ay, {
                            children: (0, n.jsx)(s.x6, {
                                ns: "proof-ui",
                                i18nKey: "proof-snaks-desc5",
                                values: {
                                    what: "world"
                                },
                                components: {
                                    lkblog: (0, n.jsx)(ue, {
                                        href: "https://academy.binance.com/en/articles/improving-crypto-transparency-with-zero-knowledge-proof"
                                    }),
                                    lktech: (0, n.jsx)(ue, {
                                        href: "https://gusty-radon-13b.notion.site/Proof-of-solvency-61414c3f7c1e46c5baec32b9491b2b3d"
                                    }),
                                    lksc: (0, n.jsx)(ue, {
                                        href: "https://github.com/binance/zkmerkle-proof-of-solvency/blob/main/circuit/batch_create_user_circuit.go"
                                    })
                                },
                                defaults: "Here are some useful resources: <lkblog>blog</lkblog>, <lktech>technical specification</lktech> and <lksc>our source code</lksc> for the circuit (constraints) for implementation detail.\xa0"
                            })
                        })]
                    }), (0, n.jsx)(ce, {
                        title: e("proof-snaks-title2")
                    }), (0, n.jsx)(R.RG, {
                        extraclassname: "mt-4",
                        children: (0, n.jsx)(E.Ay, {
                            children: (0, n.jsx)(s.x6, {
                                ns: "proof-ui",
                                i18nKey: "proof-snaks-desc6",
                                values: {
                                    what: "world"
                                },
                                components: {
                                    lkzk: (0, n.jsx)(ue, {
                                        href: "https://academy.binance.com/en/articles/zk-snarks-and-zk-starks-explained"
                                    }),
                                    lktrans: (0, n.jsx)(ue, {
                                        href: "https://academy.binance.com/en/glossary/transaction-id"
                                    })
                                },
                                defaults: "A <lkzk>zk-SNARK</lkzk> (Zero-Knowledge Succinct Non-Interactive Argument of Knowledge) is a proof protocol that follows the zero-knowledge principles previously outlined. With a <lkzk>zk-SNARK</lkzk>, you could prove that you know the original hashed value (discussed further below) without revealing what that is. You could also prove the validity of a <lktrans>transaction</lktrans> without revealing any information about the specific amounts, values, or addresses involved."
                            })
                        })
                    })]
                })
            };
            var fe = (0, A.A)((function() {
                return r.e(7540).then(r.bind(r, "2Gad"))
            }), {
                webpack: function() {
                    return ["2Gad"]
                },
                ssr: !1
            });
            const pe = function() {
                var e = function() {
                        var e = (0, v.g)((0, u.A)(m().mark((function e() {
                                var t, r, n;
                                return m().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, b();
                                        case 2:
                                            return t = e.sent.data, r = {}, n = {}, t.forEach((function(e) {
                                                e.assetCode && (r[e.assetCode] = e, e.delisted && (n[e.assetCode] = !0))
                                            })), e.abrupt("return", {
                                                assetList: t,
                                                assetMap: r,
                                                assetDelistMap: n
                                            });
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), [], {
                                value: g,
                                loading: !0
                            }),
                            t = e.value,
                            r = void 0 === t ? g : t,
                            n = e.loading,
                            o = void 0 === n || n;
                        return (0, f.A)((0, d.A)({}, r), {
                            loading: o
                        })
                    }().assetMap,
                    t = (0, w.A)().t;
                return (0, o.useEffect)((function() {
                    "AE" === x.U.read("BNC-Location") && (0, y.w)({
                        message: (0, n.jsx)(l.A, {
                            textAlign: "left",
                            children: (0, n.jsx)(s.x6, {
                                ns: "proof-ui",
                                i18nKey: "proof-AE-tips",
                                components: {
                                    br: (0, n.jsx)("br", {})
                                },
                                defaults: "Dear user,<br />\n    Please be informed that Proof of Reserves is not a supported service for users from the following regions or entities: Binance FZE. Work is currently underway for Binance FZE to build its own Proof of Reserves."
                            })
                        }),
                        okText: t("proof-AE-ok")
                    })
                }), []), (0, n.jsxs)(c.A, {
                    color: "t.primary",
                    bg: "bg1",
                    children: [(0, n.jsx)(O, {}), (0, n.jsx)(le, {
                        assetMap: e
                    }), (0, n.jsx)(S, {}), (0, n.jsx)(F, {}), (0, n.jsx)(de, {}), (0, n.jsx)(B, {}), (0, n.jsx)(fe, {})]
                })
            };
            var me = r("jMfh");
            const he = function() {
                return (0, n.jsxs)(a().Fragment, {
                    children: [(0, n.jsx)(i.A, {
                        children: (0, n.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width,minimum-scale=1,maximum-scale=1.0,initial-scale=1,user-scalable=no,viewport-fit=cover"
                        })
                    }), (0, n.jsx)(pe, {}), (0, n.jsx)(me.pA, {})]
                })
            }
        },
        hEoe: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("Y4uf");
            const s = function(e) {
                return a().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11.934 12l3.89 3.89-1.769 1.767L8.398 12l1.768-1.768 3.89-3.889 1.767 1.768-3.889 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        Mtrz: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("Y4uf");
            const s = function(e) {
                return a().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        Lp65: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => d
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("RGyw"),
                s = r("O94r"),
                l = r.n(s),
                c = r("fvKX"),
                u = a().forwardRef((function(e, t) {
                    var r = (0, c.r)().prefixCls,
                        o = l()("".concat(r, "-flex"), e.className);
                    return a().createElement(i.A, (0, n.__assign)({}, e, {
                        ref: t,
                        className: o
                    }))
                }));
            u.displayName = "Flex";
            const d = u
        },
        qtv7: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => d
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("RGyw"),
                s = r("O94r"),
                l = r.n(s),
                c = r("fvKX"),
                u = a().forwardRef((function(e, t) {
                    var r = e.width,
                        o = e.gridCols,
                        s = void 0 === o ? 2 : o,
                        u = e.className,
                        d = e.style,
                        f = (0, n.__rest)(e, ["width", "gridCols", "className", "style"]),
                        p = (0, c.r)().prefixCls,
                        m = l()("".concat(p, "-grid"), u),
                        h = r ? "repeat(auto-fit, minmax(".concat(r, "px, 1fr))") : "repeat(".concat(s, ", 1fr)");
                    return a().createElement(i.A, (0, n.__assign)({}, f, {
                        ref: t,
                        className: m,
                        style: (0, n.__assign)({
                            gridTemplateColumns: h
                        }, d)
                    }))
                }));
            u.displayName = "Grid";
            const d = u
        },
        "SZ+q": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => b
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("hTvQ"),
                s = r.n(i),
                l = r("O94r"),
                c = r.n(l),
                u = r("qrIQ"),
                d = r("eeEA"),
                f = r("fvKX"),
                p = {
                    top: "marginBottom",
                    left: "marginRight",
                    right: "marginLeft",
                    bottom: "marginTop"
                },
                m = function(e) {
                    var t = e.placement,
                        r = e.offset,
                        n = e.isArrow,
                        o = t.split("-"),
                        a = o[0],
                        i = o[1],
                        s = i ? 0 : "50%",
                        l = n ? {
                            top: " rotate(-135deg)",
                            right: " rotate(-45deg)",
                            bottom: " rotate(45deg)",
                            left: " rotate(135deg)"
                        }[a] : "",
                        c = n ? r - Math.floor(3) : "100%",
                        u = i ? n ? 9 : 0 : "50%";
                    return ("end" === i ? {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(l),
                            bottom: c,
                            right: u
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(l),
                            right: c,
                            bottom: u
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(l),
                            left: c,
                            bottom: u
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(l),
                            top: c,
                            right: u
                        }
                    } : {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(l),
                            bottom: c,
                            left: u
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(l),
                            right: c,
                            top: u
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(l),
                            left: c,
                            top: u
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(l),
                            top: c,
                            left: u
                        }
                    })[a]
                },
                h = function(e) {
                    var t, r, o = e.arrow,
                        i = e.shadow,
                        l = e.isFloat,
                        h = e.offset,
                        b = void 0 === h ? 6 : h,
                        v = e.variant,
                        g = void 0 === v ? "primary" : v,
                        x = e.placement,
                        y = void 0 === x ? "top" : x,
                        w = e.enablePortal,
                        A = e.portalNode,
                        k = e.style,
                        E = e.radius,
                        j = e.bubbleFontSize,
                        N = void 0 === j ? 14 : j,
                        C = (0, n.__rest)(e, ["arrow", "shadow", "isFloat", "offset", "variant", "placement", "enablePortal", "portalNode", "style", "radius", "bubbleFontSize"]),
                        _ = (0, f.r)().prefixCls,
                        O = "".concat(_, "-bubble"),
                        P = c()(O, ((t = {})["".concat(O, "__").concat(g)] = !!g, t["data-shadow"] = !!i, t["data-font-".concat(N)] = !!N, t), e.className);
                    b = o ? Math.max(b, 4) : b;
                    var T = y.split("-")[0],
                        R = l ? m({
                            offset: b,
                            placement: y
                        }) : {},
                        M = m({
                            offset: b,
                            placement: y,
                            isArrow: !0
                        }),
                        S = ((r = {})[p[T]] = b, r.borderRadius = E, r),
                        z = a().createElement(d.Ay, (0, n.__assign)({}, C, {
                            className: P,
                            style: (0, n.__assign)((0, n.__assign)({}, R), k)
                        }), !!o && a().createElement(d.Ay, {
                            className: "".concat(O, "-arrow"),
                            style: M
                        }), !!o && !!i && a().createElement(d.Ay, {
                            className: "".concat(O, "-arrow-shadow"),
                            style: M
                        }), a().createElement(d.Ay, {
                            style: S,
                            className: "".concat(O, "-content"),
                            children: e.children
                        }));
                    return !u.lq && w ? s().createPortal(z, A instanceof HTMLElement ? A : document.body) : z
                };
            h.displayName = "Bubble";
            const b = h
        },
        D4P9: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => h
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("9xbI");
            const s = (0, o.forwardRef)((function(e, t) {
                var r = e.as,
                    o = void 0 === r ? "button" : r,
                    s = (0, n.__rest)(e, ["as"]);
                return a().createElement(i.A, (0, n.__assign)({}, s, {
                    as: o,
                    ref: t
                }))
            }));
            var l = r("qrIQ"),
                c = r("O94r"),
                u = r.n(c),
                d = r("W2aP"),
                f = r("eeEA"),
                p = r("fvKX"),
                m = (0, o.forwardRef)((function(e, t) {
                    var r, i = e.variant,
                        c = void 0 === i ? "primary" : i,
                        m = e.sz,
                        h = void 0 === m ? "middle" : m,
                        b = e.inactive,
                        v = e.loading,
                        g = e.onClick,
                        x = e.subLine,
                        y = e.children,
                        w = e.textVariant,
                        A = void 0 === w ? "text" === c ? "yellow" : "black" : w,
                        k = e.iconVariant,
                        E = void 0 === k ? "line" : k,
                        j = (e["aria-label"], (0, n.__rest)(e, ["variant", "sz", "inactive", "loading", "onClick", "subLine", "children", "textVariant", "iconVariant", "aria-label"])),
                        N = (0, p.r)(),
                        C = N.prefixCls,
                        _ = N.isRTL,
                        O = "".concat(C, "-button"),
                        P = "text" === c || "info" === c,
                        T = "icon" === c,
                        R = u()(O, ((r = {})["".concat(O, "-rtl")] = !!_, r["".concat(O, "__").concat(c)] = !!c, r["".concat(O, "__").concat(c, "__").concat(A)] = P && !!A, r["".concat(O, "__").concat(c, "__").concat(E)] = T && !!E, r["data-size-".concat(h)] = !!h, r["data-size-".concat(h, "-two-line")] = !!h && !!x, r["data-two-line"] = !!x, r.inactive = !!b, r), e.className),
                        M = !b && "function" === typeof g,
                        S = l.lq ? "none" : e.type,
                        z = M ? g : void 0,
                        D = (0, o.useMemo)((function() {
                            return v ? a().createElement(d.A, null) : a().createElement(a().Fragment, null, y, x && a().createElement(f.Ay, null, x))
                        }), [y, o.useMemo, v]),
                        L = {
                            "aria-disabled": b || v ? "true" : void 0,
                            "aria-busy": v ? "true" : void 0
                        };
                    return a().createElement(s, (0, n.__assign)({
                        key: v ? "loading" : "content"
                    }, L, j, {
                        children: D,
                        ref: t,
                        type: S,
                        className: R,
                        onClick: z
                    }))
                }));
            m.displayName = "Button";
            const h = m
        },
        "qtT+": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => y
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("O94r"),
                s = r.n(i);

            function l(e) {
                var t = e.img;
                return new Promise((function(e, r) {
                    (function(e) {
                        var t = e.img;
                        return new Promise((function(e) {
                            return e(t)
                        }))
                    })({
                        img: t
                    }).then((function(t) {
                        if (/^http/i.test(t)) {
                            var n = new Image;
                            n.addEventListener("load", (function() {
                                return e(t)
                            })), n.addEventListener("error", (function() {
                                return r(new Error("img load error"))
                            })), n.src = t
                        } else r("image path is null")
                    }))
                }))
            }
            var c = r("2OVm"),
                u = r("9xbI");
            const d = function(e) {
                    function t() {
                        var t = null !== e && e.apply(this, arguments) || this;
                        return t.inViewPort = function() {
                            var e = t.$refs.root,
                                r = t.props,
                                n = r.isBackground;
                            l({
                                img: r.src
                            }).then((function(t) {
                                e.style.backgroundColor = "transparent", n ? (e.style.backgroundSize = "100%", e.style.backgroundPosition = "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundImage = "url('".concat(t, "')")) : e.src = t
                            })).catch((function() {
                                return null
                            }))
                        }, t
                    }
                    return (0, n.__extends)(t, e), t.prototype.render = function() {
                        var e = this.props,
                            t = e.src,
                            r = (e.check, e.lazyLoad, e.isBackground),
                            o = (0, n.__rest)(e, ["src", "check", "lazyLoad", "isBackground"]);
                        return a().createElement(u.A, (0, n.__assign)({}, o, {
                            "data-src": t,
                            ref: this.setRefs("root"),
                            as: r ? "div" : "img"
                        }))
                    }, t
                }(c.A),
                f = (0, o.forwardRef)((function(e, t) {
                    var r = e.lazyLoad,
                        o = e.src,
                        i = e.isBackground,
                        s = e.check,
                        l = (0, n.__rest)(e, ["lazyLoad", "src", "isBackground", "check"]);
                    return r || i ? a().createElement(d, (0, n.__assign)({
                        lazyLoad: r,
                        src: o,
                        isBackground: i,
                        check: s
                    }, l)) : a().createElement(u.A, (0, n.__assign)({}, l, {
                        as: "img",
                        ref: t,
                        src: o,
                        "data-src": o
                    }))
                }));
            var p = r("qrIQ"),
                m = r("fvKX"),
                h = r("GmLw").Buffer,
                b = "/bapi/fe/resource/image",
                v = "https://www.binance.com",
                g = r("eeEA"),
                x = function(e) {
                    var t, r = e.isRound,
                        i = e.isMask,
                        l = e.mode,
                        c = e.responsive,
                        u = e.src,
                        d = (0, n.__rest)(e, ["isRound", "isMask", "mode", "responsive", "src"]),
                        x = (0, o.useState)(!1),
                        y = x[0],
                        w = x[1],
                        A = (0, m.r)().prefixCls,
                        k = s()("".concat(A, "-lazy-img"), ((t = {
                            "data-mask": !!i,
                            "data-round": !!r,
                            "data-lazy-load": !!e.lazyLoad || !!e.isBackground
                        })["data-mode-".concat(null === l || void 0 === l ? void 0 : l.replace(/\s+/g, "-"))] = !!l, t), e.className),
                        E = (0, o.useCallback)((function() {
                            return w(!0)
                        }), []),
                        j = (0, o.useMemo)((function() {
                            return !(c && (c.mobile || c.tablet || c.desktop)) || y ? {
                                default: u
                            } : Object.keys(c).reduce((function(e, t) {
                                return e[t] = function(e, t) {
                                    var r = h.from(e).toString("base64");
                                    try {
                                        var n = new URL(b, "https://www.binance.com");
                                        return n.searchParams.set("image", r), Object.entries(t).forEach((function(e) {
                                            var t = e[0],
                                                r = e[1];
                                            void 0 !== r && n.searchParams.set(t, String(r))
                                        })), "".concat(n.pathname).concat(n.search)
                                    } catch (o) {
                                        return "".concat(b, "?image=").concat(r, "&w=").concat(t.w, "&h=").concat(t.h)
                                    }
                                }(u, c[t]), e
                            }), {})
                        }), [u, c, y]),
                        N = {
                            role: "img",
                            "aria-label": "image",
                            alt: "image"
                        };
                    if ("default" in j) return a().createElement(f, (0, n.__assign)({}, N, d, {
                        className: k,
                        mode: l,
                        src: j.default
                    }));
                    var C = j.mobile,
                        _ = j.tablet,
                        O = j.desktop;
                    if (p.lq) {
                        var P = env.API_HOST || v,
                            T = "".concat(P).concat(C || _ || O);
                        return a().createElement(f, (0, n.__assign)({}, N, {
                            onError: E
                        }, d, {
                            className: k,
                            mode: l,
                            src: T
                        }))
                    }
                    return a().createElement(g.Ay, {
                        as: "picture"
                    }, a().createElement(g.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 1024px)",
                        srcSet: O
                    }), _ && a().createElement(g.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 768px)",
                        srcSet: _
                    }), C && a().createElement(g.Ay, {
                        as: "source",
                        media: "only screen and (max-width: 767px)",
                        srcSet: C
                    }), a().createElement(f, (0, n.__assign)({}, N, {
                        onError: E
                    }, d, {
                        className: k,
                        mode: l,
                        src: O || u
                    })))
                };
            x.displayName = "Image";
            const y = x
        },
        wlrn: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => g
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("hEoe"),
                s = r("Mtrz"),
                l = r("hyZw"),
                c = r("O94r"),
                u = r.n(c),
                d = r("eeEA");
            const f = (0, o.forwardRef)((function(e, t) {
                var r = e.getPageHref,
                    i = e.children,
                    s = (0, n.__rest)(e, ["getPageHref", "children"]),
                    l = a().useMemo((function() {
                        if (r) return r(i)
                    }), [r, i]);
                return (0, o.createElement)("a", (0, n.__assign)((0, n.__assign)({}, s), {
                    children: i,
                    href: l,
                    ref: t
                }))
            }));
            var p = r("fvKX"),
                m = "0".repeat(5).split("").map((function(e, t) {
                    return t
                })),
                h = m.slice(-1)[0],
                b = ["seqPre", "seqNext"],
                v = {
                    ChevronLeft1C: i.A,
                    ChevronRight1C: s.A
                };
            const g = function(e) {
                var t = e.current,
                    r = e.total,
                    i = e.onChange,
                    s = void 0 === i ? l.es : i,
                    c = e.abbreviateThreshold,
                    g = void 0 === c ? 10 : c,
                    x = e.getPageHref,
                    y = (0, n.__rest)(e, ["current", "total", "onChange", "abbreviateThreshold", "getPageHref"]),
                    w = (0, p.r)(),
                    A = w.prefixCls,
                    k = w.isRTL,
                    E = "".concat(A, "-pagination"),
                    j = 1 === t,
                    N = k ? "ChevronRight1C" : "ChevronLeft1C",
                    C = j ? "line" : "textSecondary",
                    _ = u()("".concat(E, "-prev"), {
                        disabled: j
                    }),
                    O = t === r,
                    P = k ? "ChevronLeft1C" : "ChevronRight1C",
                    T = O ? "line" : "textSecondary",
                    R = u()("".concat(E, "-next"), {
                        disabled: O
                    }),
                    M = a().useMemo((function() {
                        return function(e) {
                            var t = e.current,
                                r = e.total,
                                n = e.threshold;
                            if (r <= n) return "0".repeat(r).split("").map((function(e, t) {
                                return t + 1
                            }));
                            var o = r - 2,
                                a = t <= h ? m.map((function(e) {
                                    return 1 + e
                                })) : [1, b[0]];
                            return [t > 2 && t < o ? m.map((function(e) {
                                return Math.max(1, t + e - 2)
                            })) : [], t >= r - h ? m.map((function(e) {
                                return r - e
                            })).reverse() : [b[1], r]].reduce((function(e, t) {
                                return e.concat(t.filter((function(t) {
                                    return -1 === e.indexOf(t)
                                })))
                            }), a)
                        }({
                            current: t,
                            total: r,
                            threshold: g
                        })
                    }), [t, r, g]),
                    S = (0, o.useCallback)((function(e, t) {
                        e.preventDefault(), s(t)
                    }), [s]);
                return a().createElement(d.Ay, (0, n.__assign)({}, y, {
                    className: u()(E, e.className)
                }), a().createElement(d.Ay, {
                    className: _,
                    onClick: function(e) {
                        return j || S(e, t - 1)
                    },
                    "aria-disabled": j
                }, (0, o.createElement)(v[N], {
                    name: N,
                    color: C
                })), a().createElement(d.Ay, {
                    className: "".concat(E, "-items")
                }, M.map((function(e) {
                    var r = b.indexOf(e) > -1,
                        n = u()("".concat(E, "-item"), r ? "abbreviate" : {
                            active: t === e
                        });
                    return r ? a().createElement(d.Ay, {
                        key: e,
                        className: n,
                        children: "..."
                    }) : a().createElement(f, {
                        key: e,
                        className: n,
                        children: e,
                        onClick: function(t) {
                            return S(t, e)
                        },
                        getPageHref: x,
                        "aria-current": t === e ? "page" : void 0
                    })
                }))), a().createElement(d.Ay, {
                    className: R,
                    onClick: function(e) {
                        return O || S(e, t + 1)
                    },
                    "aria-disabled": O
                }, (0, o.createElement)(v[P], {
                    name: P,
                    color: T
                })))
            }
        },
        W2aP: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => f
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("O94r"),
                s = r.n(i),
                l = r("eeEA"),
                c = r("fvKX"),
                u = function(e) {
                    return {
                        animationDelay: "".concat(50 * e, "ms")
                    }
                },
                d = function(e) {
                    var t = (0, c.r)().prefixCls,
                        r = s()("".concat(t, "-spinner__nezha"), e.className);
                    return a().createElement(l.Ay, (0, n.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, e, {
                        className: r
                    }), a().createElement(l.Ay, {
                        className: "nezha-line",
                        style: u(1)
                    }), a().createElement(l.Ay, {
                        className: "nezha-line",
                        style: u(2)
                    }), a().createElement(l.Ay, {
                        className: "nezha-line",
                        style: u(3)
                    }), a().createElement(l.Ay, {
                        className: "nezha-line",
                        style: u(4)
                    }))
                };
            d.displayName = "Spinner";
            const f = d
        },
        JgEn: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => Ye
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("qrIQ"),
                s = r("QFE7"),
                l = r("hyZw"),
                c = r("O94r"),
                u = r.n(c),
                d = r("eeEA"),
                f = r("SZ+q"),
                p = r("fvKX"),
                m = {
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
                h = 50,
                b = function(e) {
                    var t;
                    e.stopPropagation(), i.lq || null === (t = null === e || void 0 === e ? void 0 : e.nativeEvent) || void 0 === t || t.stopImmediatePropagation()
                },
                v = r("H2//"),
                g = "tooltip";

            function x(e, t, r) {
                return "menu" === t ? {
                    role: "button",
                    "aria-expanded": r,
                    "aria-controls": e,
                    "aria-haspopup": "listbox"
                } : "combobox" === t ? {} : {
                    "aria-describedby": e
                }
            }

            function y(e, t, r) {
                return "combobox" === t ? {} : {
                    id: e,
                    role: t,
                    tabindex: r ? 0 : -1
                }
            }

            function w(e, t, r) {
                void 0 === t && (t = g), void 0 === r && (r = !1);
                var n = (0, o.useMemo)((function() {
                    return "".concat(e, "-").concat((0, v.uR)(8))
                }), [e, t, r]);
                return {
                    triggerAriaProps: x(n, t, r),
                    contentAriaProps: y(n, t, r)
                }
            }
            var A = function(e) {
                var t, r = e.open,
                    c = e.once,
                    v = e.arrow,
                    x = e.offset,
                    y = void 0 === x ? 12 : x,
                    A = e.disabled,
                    k = e.tooltips,
                    E = e.variant,
                    j = void 0 === E ? "gray" : E,
                    N = e.placement,
                    C = void 0 === N ? "top" : N,
                    _ = e.trigger,
                    O = void 0 === _ ? "hover" : _,
                    P = e.onVisibleChange,
                    T = e.enablePortal,
                    R = e.portalNode,
                    M = e.bubbleClassName,
                    S = e.triggerClassName,
                    z = e.delay,
                    D = void 0 === z ? h : z,
                    L = e.enableClickBubble,
                    F = e.ariaRole,
                    I = void 0 === F ? g : F,
                    B = (0, n.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "bubbleClassName", "triggerClassName", "delay", "enableClickBubble", "ariaRole"]),
                    H = a().useState(r),
                    W = H[0],
                    G = H[1],
                    q = a().useRef(),
                    V = (0, p.r)(),
                    K = V.prefixCls,
                    U = V.isMobile,
                    Q = V.isTablet,
                    Z = V.isClient,
                    X = V.isRTL,
                    Y = !i.lq && !U && !Q;
                O = Y ? O : "click";
                var J = "".concat(K, "-tooltips");
                a().useEffect((function() {
                    "undefined" !== typeof r && W !== !!r && G(!W)
                }), [r, W]);
                var $ = (0, s.d)({
                        fn: P
                    }).debounceFn,
                    ee = (0, o.useCallback)((function(e) {
                        A || G((function(t) {
                            var r = "boolean" === typeof e ? e : !t;
                            return t !== r && $(r), t !== r ? r : t
                        }))
                    }), [A, $]),
                    te = (0, o.useMemo)((function() {
                        var e, t, r;
                        return "number" === typeof D ? {
                            enter: D,
                            leave: D,
                            click: D
                        } : {
                            enter: null !== (e = D.enter) && void 0 !== e ? e : h,
                            leave: null !== (t = D.leave) && void 0 !== t ? t : h,
                            click: null !== (r = D.click) && void 0 !== r ? r : h
                        }
                    }), [D]),
                    re = (0, s.d)({
                        fn: ee,
                        time: te.enter
                    }),
                    ne = re.debounceFn,
                    oe = re.clearTimer,
                    ae = (0, s.d)({
                        fn: ee,
                        time: te.leave
                    }),
                    ie = ae.debounceFn,
                    se = ae.clearTimer,
                    le = (0, s.d)({
                        fn: ee,
                        time: te.click
                    }).debounceFn,
                    ce = (0, o.useCallback)(le, [le]),
                    ue = (0, o.useCallback)((function() {
                        return le(!1)
                    }), [le]);
                a().useEffect((function() {
                    var e = q.current,
                        t = function() {
                            se(), ne(!0)
                        },
                        r = function() {
                            oe(), ie(!1)
                        };
                    if (!i.lq && e instanceof Element) {
                        if ("hover" === O) return e.addEventListener("mouseover", t, !0), e.addEventListener("mouseout", r, !0),
                            function() {
                                e.removeEventListener("mouseover", t, !0), e.removeEventListener("mouseout", r, !0)
                            };
                        var n = function(e) {
                            if (!q.current.contains(e.target)) return le(!1)
                        };
                        return document.addEventListener("click", n),
                            function() {
                                document.removeEventListener("click", n)
                            }
                    }
                    return l.es
                }), [O, ne, se, oe, ie, le]);
                var de = "click" === O,
                    fe = !A && W,
                    pe = c ? ue : void 0,
                    me = !de && !c || L ? void 0 : b,
                    he = de ? ce : void 0,
                    be = u()("".concat(J, "-wrap"), {
                        active: fe
                    }, e.className),
                    ve = u()("".concat(J, "-ele"), ((t = {})["".concat(J, "-ele-rtl")] = !!X, t), S),
                    ge = u()(J, {
                        active: fe
                    }, M),
                    xe = X && m[C] || C,
                    ye = (0, n.__assign)({
                        arrow: v,
                        offset: y,
                        variant: j,
                        placement: xe,
                        shadow: !0,
                        isFloat: !0,
                        enablePortal: T,
                        portalNode: R
                    }, B);
                "gray" === j && (ye = (0, n.__assign)((0, n.__assign)({}, ye), {
                    shadow: !1
                }));
                var we = Z && !A,
                    Ae = w(J, I, we),
                    ke = Ae.triggerAriaProps,
                    Ee = Ae.contentAriaProps;
                return a().createElement(d.Ay, {
                    ref: q,
                    onClick: me,
                    className: be
                }, a().createElement(d.Ay, (0, n.__assign)({}, ke, {
                    className: ve,
                    onClick: he,
                    children: e.children
                })), we ? a().createElement(f.A, (0, n.__assign)({}, Ee, ye, {
                    className: ge,
                    onClick: pe,
                    children: k
                })) : null)
            };
            A.displayName = "Tooltips";
            const k = A;
            var E = r("hTvQ"),
                j = r.n(E),
                N = r("W3Ja");

            function C(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function _(e) {
                return e instanceof C(e).Element || e instanceof Element
            }

            function O(e) {
                return e instanceof C(e).HTMLElement || e instanceof HTMLElement
            }

            function P(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof C(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var T = Math.max,
                R = Math.min,
                M = Math.round;

            function S() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                })).join(" ") : navigator.userAgent
            }

            function z() {
                return !/^((?!chrome|android).)*safari/i.test(S())
            }

            function D(e, t, r) {
                void 0 === t && (t = !1), void 0 === r && (r = !1);
                var n = e.getBoundingClientRect(),
                    o = 1,
                    a = 1;
                t && O(e) && (o = e.offsetWidth > 0 && M(n.width) / e.offsetWidth || 1, a = e.offsetHeight > 0 && M(n.height) / e.offsetHeight || 1);
                var i = (_(e) ? C(e) : window).visualViewport,
                    s = !z() && r,
                    l = (n.left + (s && i ? i.offsetLeft : 0)) / o,
                    c = (n.top + (s && i ? i.offsetTop : 0)) / a,
                    u = n.width / o,
                    d = n.height / a;
                return {
                    width: u,
                    height: d,
                    top: c,
                    right: l + u,
                    bottom: c + d,
                    left: l,
                    x: l,
                    y: c
                }
            }

            function L(e) {
                var t = C(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function F(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function I(e) {
                return ((_(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function B(e) {
                return D(I(e)).left + L(e).scrollLeft
            }

            function H(e) {
                return C(e).getComputedStyle(e)
            }

            function W(e) {
                var t = H(e),
                    r = t.overflow,
                    n = t.overflowX,
                    o = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(r + o + n)
            }

            function G(e, t, r) {
                void 0 === r && (r = !1);
                var n = O(t),
                    o = O(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            r = M(t.width) / e.offsetWidth || 1,
                            n = M(t.height) / e.offsetHeight || 1;
                        return 1 !== r || 1 !== n
                    }(t),
                    a = I(t),
                    i = D(e, o, r),
                    s = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    l = {
                        x: 0,
                        y: 0
                    };
                return (n || !n && !r) && (("body" !== F(t) || W(a)) && (s = function(e) {
                    return e !== C(e) && O(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : L(e);
                    var t
                }(t)), O(t) ? ((l = D(t, !0)).x += t.clientLeft, l.y += t.clientTop) : a && (l.x = B(a))), {
                    x: i.left + s.scrollLeft - l.x,
                    y: i.top + s.scrollTop - l.y,
                    width: i.width,
                    height: i.height
                }
            }

            function q(e) {
                var t = D(e),
                    r = e.offsetWidth,
                    n = e.offsetHeight;
                return Math.abs(t.width - r) <= 1 && (r = t.width), Math.abs(t.height - n) <= 1 && (n = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: r,
                    height: n
                }
            }

            function V(e) {
                return "html" === F(e) ? e : e.assignedSlot || e.parentNode || (P(e) ? e.host : null) || I(e)
            }

            function K(e) {
                return ["html", "body", "#document"].indexOf(F(e)) >= 0 ? e.ownerDocument.body : O(e) && W(e) ? e : K(V(e))
            }

            function U(e, t) {
                var r;
                void 0 === t && (t = []);
                var n = K(e),
                    o = n === (null == (r = e.ownerDocument) ? void 0 : r.body),
                    a = C(n),
                    i = o ? [a].concat(a.visualViewport || [], W(n) ? n : []) : n,
                    s = t.concat(i);
                return o ? s : s.concat(U(V(i)))
            }

            function Q(e) {
                return ["table", "td", "th"].indexOf(F(e)) >= 0
            }

            function Z(e) {
                return O(e) && "fixed" !== H(e).position ? e.offsetParent : null
            }

            function X(e) {
                for (var t = C(e), r = Z(e); r && Q(r) && "static" === H(r).position;) r = Z(r);
                return r && ("html" === F(r) || "body" === F(r) && "static" === H(r).position) ? t : r || function(e) {
                    var t = /firefox/i.test(S());
                    if (/Trident/i.test(S()) && O(e) && "fixed" === H(e).position) return null;
                    var r = V(e);
                    for (P(r) && (r = r.host); O(r) && ["html", "body"].indexOf(F(r)) < 0;) {
                        var n = H(r);
                        if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || t && "filter" === n.willChange || t && n.filter && "none" !== n.filter) return r;
                        r = r.parentNode
                    }
                    return null
                }(e) || t
            }
            var Y = "top",
                J = "bottom",
                $ = "right",
                ee = "left",
                te = "auto",
                re = [Y, J, $, ee],
                ne = "start",
                oe = "end",
                ae = "viewport",
                ie = "popper",
                se = re.reduce((function(e, t) {
                    return e.concat([t + "-" + ne, t + "-" + oe])
                }), []),
                le = [].concat(re, [te]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + ne, t + "-" + oe])
                }), []),
                ce = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function ue(e) {
                var t = new Map,
                    r = new Set,
                    n = [];

                function o(e) {
                    r.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!r.has(e)) {
                            var n = t.get(e);
                            n && o(n)
                        }
                    })), n.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    r.has(e.name) || o(e)
                })), n
            }

            function de(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(r) {
                        Promise.resolve().then((function() {
                            t = void 0, r(e())
                        }))
                    }))), t
                }
            }
            var fe = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function pe() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function me(e) {
                void 0 === e && (e = {});
                var t = e,
                    r = t.defaultModifiers,
                    n = void 0 === r ? [] : r,
                    o = t.defaultOptions,
                    a = void 0 === o ? fe : o;
                return function(e, t, r) {
                    void 0 === r && (r = a);
                    var o = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, fe, a),
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
                        l = {
                            state: o,
                            setOptions: function(r) {
                                var s = "function" === typeof r ? r(o.options) : r;
                                c(), o.options = Object.assign({}, a, o.options, s), o.scrollParents = {
                                    reference: _(e) ? U(e) : e.contextElement ? U(e.contextElement) : [],
                                    popper: U(t)
                                };
                                var u = function(e) {
                                    var t = ue(e);
                                    return ce.reduce((function(e, r) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === r
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var r = e[t.name];
                                        return e[t.name] = r ? Object.assign({}, r, t, {
                                            options: Object.assign({}, r.options, t.options),
                                            data: Object.assign({}, r.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(n, o.options.modifiers)));
                                return o.orderedModifiers = u.filter((function(e) {
                                    return e.enabled
                                })), o.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        r = e.options,
                                        n = void 0 === r ? {} : r,
                                        a = e.effect;
                                    if ("function" === typeof a) {
                                        var s = a({
                                                state: o,
                                                name: t,
                                                instance: l,
                                                options: n
                                            }),
                                            c = function() {};
                                        i.push(s || c)
                                    }
                                })), l.update()
                            },
                            forceUpdate: function() {
                                if (!s) {
                                    var e = o.elements,
                                        t = e.reference,
                                        r = e.popper;
                                    if (pe(t, r)) {
                                        o.rects = {
                                            reference: G(t, X(r), "fixed" === o.options.strategy),
                                            popper: q(r)
                                        }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach((function(e) {
                                            return o.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var n = 0; n < o.orderedModifiers.length; n++)
                                            if (!0 !== o.reset) {
                                                var a = o.orderedModifiers[n],
                                                    i = a.fn,
                                                    c = a.options,
                                                    u = void 0 === c ? {} : c,
                                                    d = a.name;
                                                "function" === typeof i && (o = i({
                                                    state: o,
                                                    options: u,
                                                    name: d,
                                                    instance: l
                                                }) || o)
                                            } else o.reset = !1, n = -1
                                    }
                                }
                            },
                            update: de((function() {
                                return new Promise((function(e) {
                                    l.forceUpdate(), e(o)
                                }))
                            })),
                            destroy: function() {
                                c(), s = !0
                            }
                        };
                    if (!pe(e, t)) return l;

                    function c() {
                        i.forEach((function(e) {
                            return e()
                        })), i = []
                    }
                    return l.setOptions(r).then((function(e) {
                        !s && r.onFirstUpdate && r.onFirstUpdate(e)
                    })), l
                }
            }
            var he = {
                passive: !0
            };

            function be(e) {
                return e.split("-")[0]
            }

            function ve(e) {
                return e.split("-")[1]
            }

            function ge(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function xe(e) {
                var t, r = e.reference,
                    n = e.element,
                    o = e.placement,
                    a = o ? be(o) : null,
                    i = o ? ve(o) : null,
                    s = r.x + r.width / 2 - n.width / 2,
                    l = r.y + r.height / 2 - n.height / 2;
                switch (a) {
                    case Y:
                        t = {
                            x: s,
                            y: r.y - n.height
                        };
                        break;
                    case J:
                        t = {
                            x: s,
                            y: r.y + r.height
                        };
                        break;
                    case $:
                        t = {
                            x: r.x + r.width,
                            y: l
                        };
                        break;
                    case ee:
                        t = {
                            x: r.x - n.width,
                            y: l
                        };
                        break;
                    default:
                        t = {
                            x: r.x,
                            y: r.y
                        }
                }
                var c = a ? ge(a) : null;
                if (null != c) {
                    var u = "y" === c ? "height" : "width";
                    switch (i) {
                        case ne:
                            t[c] = t[c] - (r[u] / 2 - n[u] / 2);
                            break;
                        case oe:
                            t[c] = t[c] + (r[u] / 2 - n[u] / 2)
                    }
                }
                return t
            }
            var ye = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function we(e) {
                var t, r = e.popper,
                    n = e.popperRect,
                    o = e.placement,
                    a = e.variation,
                    i = e.offsets,
                    s = e.position,
                    l = e.gpuAcceleration,
                    c = e.adaptive,
                    u = e.roundOffsets,
                    d = e.isFixed,
                    f = i.x,
                    p = void 0 === f ? 0 : f,
                    m = i.y,
                    h = void 0 === m ? 0 : m,
                    b = "function" === typeof u ? u({
                        x: p,
                        y: h
                    }) : {
                        x: p,
                        y: h
                    };
                p = b.x, h = b.y;
                var v = i.hasOwnProperty("x"),
                    g = i.hasOwnProperty("y"),
                    x = ee,
                    y = Y,
                    w = window;
                if (c) {
                    var A = X(r),
                        k = "clientHeight",
                        E = "clientWidth";
                    if (A === C(r) && "static" !== H(A = I(r)).position && "absolute" === s && (k = "scrollHeight", E = "scrollWidth"), o === Y || (o === ee || o === $) && a === oe) y = J, h -= (d && A === w && w.visualViewport ? w.visualViewport.height : A[k]) - n.height, h *= l ? 1 : -1;
                    if (o === ee || (o === Y || o === J) && a === oe) x = $, p -= (d && A === w && w.visualViewport ? w.visualViewport.width : A[E]) - n.width, p *= l ? 1 : -1
                }
                var j, N = Object.assign({
                        position: s
                    }, c && ye),
                    _ = !0 === u ? function(e, t) {
                        var r = e.x,
                            n = e.y,
                            o = t.devicePixelRatio || 1;
                        return {
                            x: M(r * o) / o || 0,
                            y: M(n * o) / o || 0
                        }
                    }({
                        x: p,
                        y: h
                    }, C(r)) : {
                        x: p,
                        y: h
                    };
                return p = _.x, h = _.y, l ? Object.assign({}, N, ((j = {})[y] = g ? "0" : "", j[x] = v ? "0" : "", j.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", j)) : Object.assign({}, N, ((t = {})[y] = g ? h + "px" : "", t[x] = v ? p + "px" : "", t.transform = "", t))
            }
            const Ae = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        r = e.options,
                        n = e.name,
                        o = r.offset,
                        a = void 0 === o ? [0, 0] : o,
                        i = le.reduce((function(e, r) {
                            return e[r] = function(e, t, r) {
                                var n = be(e),
                                    o = [ee, Y].indexOf(n) >= 0 ? -1 : 1,
                                    a = "function" === typeof r ? r(Object.assign({}, t, {
                                        placement: e
                                    })) : r,
                                    i = a[0],
                                    s = a[1];
                                return i = i || 0, s = (s || 0) * o, [ee, $].indexOf(n) >= 0 ? {
                                    x: s,
                                    y: i
                                } : {
                                    x: i,
                                    y: s
                                }
                            }(r, t.rects, a), e
                        }), {}),
                        s = i[t.placement],
                        l = s.x,
                        c = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[n] = i
                }
            };
            var ke = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function Ee(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return ke[e]
                }))
            }
            var je = {
                start: "end",
                end: "start"
            };

            function Ne(e) {
                return e.replace(/start|end/g, (function(e) {
                    return je[e]
                }))
            }

            function Ce(e, t) {
                var r = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (r && P(r)) {
                    var n = t;
                    do {
                        if (n && e.isSameNode(n)) return !0;
                        n = n.parentNode || n.host
                    } while (n)
                }
                return !1
            }

            function _e(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function Oe(e, t, r) {
                return t === ae ? _e(function(e, t) {
                    var r = C(e),
                        n = I(e),
                        o = r.visualViewport,
                        a = n.clientWidth,
                        i = n.clientHeight,
                        s = 0,
                        l = 0;
                    if (o) {
                        a = o.width, i = o.height;
                        var c = z();
                        (c || !c && "fixed" === t) && (s = o.offsetLeft, l = o.offsetTop)
                    }
                    return {
                        width: a,
                        height: i,
                        x: s + B(e),
                        y: l
                    }
                }(e, r)) : _(t) ? function(e, t) {
                    var r = D(e, !1, "fixed" === t);
                    return r.top = r.top + e.clientTop, r.left = r.left + e.clientLeft, r.bottom = r.top + e.clientHeight, r.right = r.left + e.clientWidth, r.width = e.clientWidth, r.height = e.clientHeight, r.x = r.left, r.y = r.top, r
                }(t, r) : _e(function(e) {
                    var t, r = I(e),
                        n = L(e),
                        o = null == (t = e.ownerDocument) ? void 0 : t.body,
                        a = T(r.scrollWidth, r.clientWidth, o ? o.scrollWidth : 0, o ? o.clientWidth : 0),
                        i = T(r.scrollHeight, r.clientHeight, o ? o.scrollHeight : 0, o ? o.clientHeight : 0),
                        s = -n.scrollLeft + B(e),
                        l = -n.scrollTop;
                    return "rtl" === H(o || r).direction && (s += T(r.clientWidth, o ? o.clientWidth : 0) - a), {
                        width: a,
                        height: i,
                        x: s,
                        y: l
                    }
                }(I(e)))
            }

            function Pe(e, t, r, n) {
                var o = "clippingParents" === t ? function(e) {
                        var t = U(V(e)),
                            r = ["absolute", "fixed"].indexOf(H(e).position) >= 0 && O(e) ? X(e) : e;
                        return _(r) ? t.filter((function(e) {
                            return _(e) && Ce(e, r) && "body" !== F(e)
                        })) : []
                    }(e) : [].concat(t),
                    a = [].concat(o, [r]),
                    i = a[0],
                    s = a.reduce((function(t, r) {
                        var o = Oe(e, r, n);
                        return t.top = T(o.top, t.top), t.right = R(o.right, t.right), t.bottom = R(o.bottom, t.bottom), t.left = T(o.left, t.left), t
                    }), Oe(e, i, n));
                return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
            }

            function Te(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function Re(e, t) {
                return t.reduce((function(t, r) {
                    return t[r] = e, t
                }), {})
            }

            function Me(e, t) {
                void 0 === t && (t = {});
                var r = t,
                    n = r.placement,
                    o = void 0 === n ? e.placement : n,
                    a = r.strategy,
                    i = void 0 === a ? e.strategy : a,
                    s = r.boundary,
                    l = void 0 === s ? "clippingParents" : s,
                    c = r.rootBoundary,
                    u = void 0 === c ? ae : c,
                    d = r.elementContext,
                    f = void 0 === d ? ie : d,
                    p = r.altBoundary,
                    m = void 0 !== p && p,
                    h = r.padding,
                    b = void 0 === h ? 0 : h,
                    v = Te("number" !== typeof b ? b : Re(b, re)),
                    g = f === ie ? "reference" : ie,
                    x = e.rects.popper,
                    y = e.elements[m ? g : f],
                    w = Pe(_(y) ? y : y.contextElement || I(e.elements.popper), l, u, i),
                    A = D(e.elements.reference),
                    k = xe({
                        reference: A,
                        element: x,
                        strategy: "absolute",
                        placement: o
                    }),
                    E = _e(Object.assign({}, x, k)),
                    j = f === ie ? E : A,
                    N = {
                        top: w.top - j.top + v.top,
                        bottom: j.bottom - w.bottom + v.bottom,
                        left: w.left - j.left + v.left,
                        right: j.right - w.right + v.right
                    },
                    C = e.modifiersData.offset;
                if (f === ie && C) {
                    var O = C[o];
                    Object.keys(N).forEach((function(e) {
                        var t = [$, J].indexOf(e) >= 0 ? 1 : -1,
                            r = [Y, J].indexOf(e) >= 0 ? "y" : "x";
                        N[e] += O[r] * t
                    }))
                }
                return N
            }

            function Se(e, t, r) {
                return T(e, R(t, r))
            }
            const ze = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        r = e.options,
                        n = e.name,
                        o = r.mainAxis,
                        a = void 0 === o || o,
                        i = r.altAxis,
                        s = void 0 !== i && i,
                        l = r.boundary,
                        c = r.rootBoundary,
                        u = r.altBoundary,
                        d = r.padding,
                        f = r.tether,
                        p = void 0 === f || f,
                        m = r.tetherOffset,
                        h = void 0 === m ? 0 : m,
                        b = Me(t, {
                            boundary: l,
                            rootBoundary: c,
                            padding: d,
                            altBoundary: u
                        }),
                        v = be(t.placement),
                        g = ve(t.placement),
                        x = !g,
                        y = ge(v),
                        w = "x" === y ? "y" : "x",
                        A = t.modifiersData.popperOffsets,
                        k = t.rects.reference,
                        E = t.rects.popper,
                        j = "function" === typeof h ? h(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : h,
                        N = "number" === typeof j ? {
                            mainAxis: j,
                            altAxis: j
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, j),
                        C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        _ = {
                            x: 0,
                            y: 0
                        };
                    if (A) {
                        if (a) {
                            var O, P = "y" === y ? Y : ee,
                                M = "y" === y ? J : $,
                                S = "y" === y ? "height" : "width",
                                z = A[y],
                                D = z + b[P],
                                L = z - b[M],
                                F = p ? -E[S] / 2 : 0,
                                I = g === ne ? k[S] : E[S],
                                B = g === ne ? -E[S] : -k[S],
                                H = t.elements.arrow,
                                W = p && H ? q(H) : {
                                    width: 0,
                                    height: 0
                                },
                                G = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                V = G[P],
                                K = G[M],
                                U = Se(0, k[S], W[S]),
                                Q = x ? k[S] / 2 - F - U - V - N.mainAxis : I - U - V - N.mainAxis,
                                Z = x ? -k[S] / 2 + F + U + K + N.mainAxis : B + U + K + N.mainAxis,
                                te = t.elements.arrow && X(t.elements.arrow),
                                re = te ? "y" === y ? te.clientTop || 0 : te.clientLeft || 0 : 0,
                                oe = null != (O = null == C ? void 0 : C[y]) ? O : 0,
                                ae = z + Z - oe,
                                ie = Se(p ? R(D, z + Q - oe - re) : D, z, p ? T(L, ae) : L);
                            A[y] = ie, _[y] = ie - z
                        }
                        if (s) {
                            var se, le = "x" === y ? Y : ee,
                                ce = "x" === y ? J : $,
                                ue = A[w],
                                de = "y" === w ? "height" : "width",
                                fe = ue + b[le],
                                pe = ue - b[ce],
                                me = -1 !== [Y, ee].indexOf(v),
                                he = null != (se = null == C ? void 0 : C[w]) ? se : 0,
                                xe = me ? fe : ue - k[de] - E[de] - he + N.altAxis,
                                ye = me ? ue + k[de] + E[de] - he - N.altAxis : pe,
                                we = p && me ? function(e, t, r) {
                                    var n = Se(e, t, r);
                                    return n > r ? r : n
                                }(xe, ue, ye) : Se(p ? xe : fe, ue, p ? ye : pe);
                            A[w] = we, _[w] = we - ue
                        }
                        t.modifiersData[n] = _
                    }
                },
                requiresIfExists: ["offset"]
            };
            const De = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, r = e.state,
                        n = e.name,
                        o = e.options,
                        a = r.elements.arrow,
                        i = r.modifiersData.popperOffsets,
                        s = be(r.placement),
                        l = ge(s),
                        c = [ee, $].indexOf(s) >= 0 ? "height" : "width";
                    if (a && i) {
                        var u = function(e, t) {
                                return Te("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : Re(e, re))
                            }(o.padding, r),
                            d = q(a),
                            f = "y" === l ? Y : ee,
                            p = "y" === l ? J : $,
                            m = r.rects.reference[c] + r.rects.reference[l] - i[l] - r.rects.popper[c],
                            h = i[l] - r.rects.reference[l],
                            b = X(a),
                            v = b ? "y" === l ? b.clientHeight || 0 : b.clientWidth || 0 : 0,
                            g = m / 2 - h / 2,
                            x = u[f],
                            y = v - d[c] - u[p],
                            w = v / 2 - d[c] / 2 + g,
                            A = Se(x, w, y),
                            k = l;
                        r.modifiersData[n] = ((t = {})[k] = A, t.centerOffset = A - w, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        r = e.options.element,
                        n = void 0 === r ? "[data-popper-arrow]" : r;
                    null != n && ("string" !== typeof n || (n = t.elements.popper.querySelector(n))) && Ce(t.elements.popper, n) && (t.elements.arrow = n)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function Le(e, t, r) {
                return void 0 === r && (r = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - r.y,
                    right: e.right - t.width + r.x,
                    bottom: e.bottom - t.height + r.y,
                    left: e.left - t.width - r.x
                }
            }

            function Fe(e) {
                return [Y, $, J, ee].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var Ie = me({
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                r = e.instance,
                                n = e.options,
                                o = n.scroll,
                                a = void 0 === o || o,
                                i = n.resize,
                                s = void 0 === i || i,
                                l = C(t.elements.popper),
                                c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return a && c.forEach((function(e) {
                                    e.addEventListener("scroll", r.update, he)
                                })), s && l.addEventListener("resize", r.update, he),
                                function() {
                                    a && c.forEach((function(e) {
                                        e.removeEventListener("scroll", r.update, he)
                                    })), s && l.removeEventListener("resize", r.update, he)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                r = e.name;
                            t.modifiersData[r] = xe({
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
                                r = e.options,
                                n = r.gpuAcceleration,
                                o = void 0 === n || n,
                                a = r.adaptive,
                                i = void 0 === a || a,
                                s = r.roundOffsets,
                                l = void 0 === s || s,
                                c = {
                                    placement: be(t.placement),
                                    variation: ve(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: o,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, we(Object.assign({}, c, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: i,
                                roundOffsets: l
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, we(Object.assign({}, c, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: l
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
                                var r = t.styles[e] || {},
                                    n = t.attributes[e] || {},
                                    o = t.elements[e];
                                O(o) && F(o) && (Object.assign(o.style, r), Object.keys(n).forEach((function(e) {
                                    var t = n[e];
                                    !1 === t ? o.removeAttribute(e) : o.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                r = {
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
                            return Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var n = t.elements[e],
                                            o = t.attributes[e] || {},
                                            a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : r[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        O(n) && F(n) && (Object.assign(n.style, a), Object.keys(o).forEach((function(e) {
                                            n.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, Ae, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                r = e.options,
                                n = e.name;
                            if (!t.modifiersData[n]._skip) {
                                for (var o = r.mainAxis, a = void 0 === o || o, i = r.altAxis, s = void 0 === i || i, l = r.fallbackPlacements, c = r.padding, u = r.boundary, d = r.rootBoundary, f = r.altBoundary, p = r.flipVariations, m = void 0 === p || p, h = r.allowedAutoPlacements, b = t.options.placement, v = be(b), g = l || (v === b || !m ? [Ee(b)] : function(e) {
                                        if (be(e) === te) return [];
                                        var t = Ee(e);
                                        return [Ne(e), t, Ne(t)]
                                    }(b)), x = [b].concat(g).reduce((function(e, r) {
                                        return e.concat(be(r) === te ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var r = t,
                                                n = r.placement,
                                                o = r.boundary,
                                                a = r.rootBoundary,
                                                i = r.padding,
                                                s = r.flipVariations,
                                                l = r.allowedAutoPlacements,
                                                c = void 0 === l ? le : l,
                                                u = ve(n),
                                                d = u ? s ? se : se.filter((function(e) {
                                                    return ve(e) === u
                                                })) : re,
                                                f = d.filter((function(e) {
                                                    return c.indexOf(e) >= 0
                                                }));
                                            0 === f.length && (f = d);
                                            var p = f.reduce((function(t, r) {
                                                return t[r] = Me(e, {
                                                    placement: r,
                                                    boundary: o,
                                                    rootBoundary: a,
                                                    padding: i
                                                })[be(r)], t
                                            }), {});
                                            return Object.keys(p).sort((function(e, t) {
                                                return p[e] - p[t]
                                            }))
                                        }(t, {
                                            placement: r,
                                            boundary: u,
                                            rootBoundary: d,
                                            padding: c,
                                            flipVariations: m,
                                            allowedAutoPlacements: h
                                        }) : r)
                                    }), []), y = t.rects.reference, w = t.rects.popper, A = new Map, k = !0, E = x[0], j = 0; j < x.length; j++) {
                                    var N = x[j],
                                        C = be(N),
                                        _ = ve(N) === ne,
                                        O = [Y, J].indexOf(C) >= 0,
                                        P = O ? "width" : "height",
                                        T = Me(t, {
                                            placement: N,
                                            boundary: u,
                                            rootBoundary: d,
                                            altBoundary: f,
                                            padding: c
                                        }),
                                        R = O ? _ ? $ : ee : _ ? J : Y;
                                    y[P] > w[P] && (R = Ee(R));
                                    var M = Ee(R),
                                        S = [];
                                    if (a && S.push(T[C] <= 0), s && S.push(T[R] <= 0, T[M] <= 0), S.every((function(e) {
                                            return e
                                        }))) {
                                        E = N, k = !1;
                                        break
                                    }
                                    A.set(N, S)
                                }
                                if (k)
                                    for (var z = function(e) {
                                            var t = x.find((function(t) {
                                                var r = A.get(t);
                                                if (r) return r.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return E = t, "break"
                                        }, D = m ? 3 : 1; D > 0; D--) {
                                        if ("break" === z(D)) break
                                    }
                                t.placement !== E && (t.modifiersData[n]._skip = !0, t.placement = E, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, ze, De, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                r = e.name,
                                n = t.rects.reference,
                                o = t.rects.popper,
                                a = t.modifiersData.preventOverflow,
                                i = Me(t, {
                                    elementContext: "reference"
                                }),
                                s = Me(t, {
                                    altBoundary: !0
                                }),
                                l = Le(i, n),
                                c = Le(s, o, a),
                                u = Fe(l),
                                d = Fe(c);
                            t.modifiersData[r] = {
                                referenceClippingOffsets: l,
                                popperEscapeOffsets: c,
                                isReferenceHidden: u,
                                hasPopperEscaped: d
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": d
                            })
                        }
                    }]
                }),
                Be = r("F0GY"),
                He = r.n(Be),
                We = function(e) {
                    return e.reduce((function(e, t) {
                        var r = t[0],
                            n = t[1];
                        return e[r] = n, e
                    }), {})
                },
                Ge = window.document && window.document.createElement ? o.useLayoutEffect : o.useEffect,
                qe = [],
                Ve = (0, o.forwardRef)((function(e, t) {
                    var r, o = e.arrow,
                        s = e.shadow,
                        l = e.variant,
                        c = void 0 === l ? "primary" : l,
                        f = (e.placement, e.style),
                        m = e.radius,
                        h = e.arrowRef,
                        b = e.arrowStyle,
                        v = e.bubbleFontSize,
                        g = void 0 === v ? 14 : v,
                        x = (0, n.__rest)(e, ["arrow", "shadow", "variant", "placement", "style", "radius", "arrowRef", "arrowStyle", "bubbleFontSize"]),
                        y = (0, p.r)().prefixCls,
                        w = "".concat(y, "-bubble"),
                        A = u()(w, "".concat(w, "-web"), ((r = {})["".concat(w, "__").concat(c)] = !!c, r["data-font-".concat(g)] = !!g, r["web-shadow"] = !!s, r), e.className),
                        k = {
                            borderRadius: m
                        };
                    if (i.lq) throw new Error("this component only use Web side");
                    return a().createElement(d.Ay, (0, n.__assign)({}, x, {
                        className: A,
                        style: f,
                        ref: t
                    }), a().createElement(d.Ay, {
                        style: k,
                        className: "".concat(w, "-content"),
                        children: e.children
                    }), !!o && a().createElement(d.Ay, {
                        className: "".concat(w, "-web-arrow"),
                        style: b,
                        ref: h,
                        "data-popper-arrow": !0
                    }))
                }));
            Ve.displayName = "Bubble";
            const Ke = Ve;
            var Ue = r("Svbh"),
                Qe = function(e) {
                    var t, r = e.open,
                        l = e.once,
                        c = e.arrow,
                        f = e.offset,
                        v = void 0 === f ? 12 : f,
                        x = e.disabled,
                        y = e.tooltips,
                        A = e.variant,
                        k = void 0 === A ? "gray" : A,
                        C = e.placement,
                        _ = void 0 === C ? "top" : C,
                        O = e.trigger,
                        P = void 0 === O ? "hover" : O,
                        T = e.onVisibleChange,
                        R = e.enablePortal,
                        M = e.portalNode,
                        S = e.reactPopperProps,
                        z = void 0 === S ? {} : S,
                        D = z.sameWidth,
                        L = z.popperWidth,
                        F = z.offsetX,
                        I = z.screenPadding,
                        B = e.bubbleClassName,
                        H = e.bubbleWrapperClz,
                        W = e.triggerClassName,
                        G = e.enableHoverSafeArea,
                        q = e.delay,
                        V = void 0 === q ? h : q,
                        K = e.enableClickBubble,
                        U = e.ariaRole,
                        Q = void 0 === U ? g : U,
                        Z = (0, n.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "reactPopperProps", "bubbleClassName", "bubbleWrapperClz", "triggerClassName", "enableHoverSafeArea", "delay", "enableClickBubble", "ariaRole"]),
                        X = (0, o.useState)(r),
                        Y = X[0],
                        J = X[1],
                        $ = (0, o.useState)(null),
                        ee = $[0],
                        te = $[1],
                        re = (0, p.r)(),
                        ne = re.prefixCls,
                        oe = re.isMobile,
                        ae = re.isTablet,
                        ie = re.isRTL,
                        se = re.isClient,
                        le = (0, o.useState)(null),
                        ce = le[0],
                        ue = le[1],
                        de = (0, o.useState)(null),
                        fe = de[0],
                        pe = de[1],
                        me = (0, o.useState)(null),
                        he = me[0],
                        be = me[1],
                        ve = (0, o.useState)(""),
                        ge = ve[0],
                        xe = ve[1],
                        ye = !i.lq && !oe && !ae,
                        we = "".concat(ne, "-tooltips"),
                        Ae = u()("".concat(ne, "-tooltips-trans"), H),
                        ke = u()("".concat(we, "-ele"), ((t = {})["".concat(we, "-ele-rtl")] = !!ie, t["".concat(we, "-ele-with-safe-area")] = !!G && "hover" === P, t), W),
                        Ee = u()(we, {
                            active: Y
                        }, B),
                        je = u()("".concat(we, "-wrap"), "".concat(we, "-web"), {
                            active: !x && Y
                        }, Z.className);
                    P = ye ? P : "click";
                    var Ne = ie && m[_] || _;
                    if (i.lq) throw new Error("this component only use Web side");
                    var Ce = (0, s.d)({
                            fn: T
                        }).debounceFn,
                        _e = (0, o.useCallback)((function(e) {
                            x || J((function(t) {
                                var r = "boolean" === typeof e ? e : !t;
                                return t !== r && (null === Ce || void 0 === Ce || Ce(r)), t !== r ? r : t
                            }))
                        }), [x, Ce]),
                        Oe = (0, o.useMemo)((function() {
                            var e, t, r;
                            return "number" === typeof V ? {
                                enter: V,
                                leave: V,
                                click: V
                            } : {
                                enter: null !== (e = V.enter) && void 0 !== e ? e : h,
                                leave: null !== (t = V.leave) && void 0 !== t ? t : h,
                                click: null !== (r = V.click) && void 0 !== r ? r : h
                            }
                        }), [V]),
                        Pe = (0, s.d)({
                            fn: _e,
                            time: Oe.enter
                        }),
                        Te = Pe.debounceFn,
                        Re = Pe.clearTimer,
                        Me = (0, s.d)({
                            fn: _e,
                            time: Oe.leave
                        }),
                        Se = Me.debounceFn,
                        ze = Me.clearTimer,
                        De = (0, s.d)({
                            fn: _e,
                            time: Oe.click
                        }).debounceFn,
                        Le = (0, o.useCallback)((function(e) {
                            var t = null === fe || void 0 === fe ? void 0 : fe.contains(e.target),
                                r = null === ce || void 0 === ce ? void 0 : ce.contains(e.target);
                            !(!l && t || r) && Y && De(!1)
                        }), [De, ce, fe, l, Y]);
                    v = c ? Math.max(v, 4) : v;
                    var Fe = a().useMemo((function() {
                            return {
                                name: "applyArrowHide",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        r = t.placement,
                                        n = t.elements,
                                        o = t.rects,
                                        a = n.arrow,
                                        i = n.reference;
                                    if (a && i) {
                                        var s = (["top", "bottom"].includes(r.split("-")[0]) ? o.reference.width : o.reference.height) / 2 - 3,
                                            l = Math.abs(t.modifiersData.arrow.centerOffset),
                                            c = Math.abs(l) > s;
                                        a && (c ? a.setAttribute("data-hide", "") : a.removeAttribute("data-hide"))
                                    }
                                }
                            }
                        }), []),
                        Be = [{
                            name: "arrow",
                            options: {
                                element: he,
                                padding: 12
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [F || 0, v]
                            }
                        }, Fe],
                        Ve = a().useMemo((function() {
                            return {
                                name: "sameWidth",
                                enabled: !0,
                                phase: "beforeWrite",
                                requires: ["computeStyles"],
                                fn: function(e) {
                                    var t = e.state;
                                    t.styles.popper.width = "".concat(L || t.rects.reference.width, "px")
                                },
                                effect: function(e) {
                                    var t = e.state;
                                    t.elements.popper.style.width = "".concat(L || t.elements.reference.offsetWidth, "px")
                                }
                            }
                        }), [L]),
                        Qe = a().useMemo((function() {
                            return {
                                name: "preventOverflow",
                                options: {
                                    padding: I
                                }
                            }
                        }), [I]);
                    (L || D) && Be.push(Ve), I && Be.push(Qe);
                    var Ze = function(e, t, r) {
                            void 0 === r && (r = {});
                            var n = o.useRef(null),
                                a = {
                                    onFirstUpdate: r.onFirstUpdate,
                                    placement: r.placement || "bottom",
                                    strategy: r.strategy || "absolute",
                                    modifiers: r.modifiers || qe
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
                                l = i[1],
                                c = o.useMemo((function() {
                                    return {
                                        name: "updateState",
                                        enabled: !0,
                                        phase: "write",
                                        fn: function(e) {
                                            var t = e.state,
                                                r = Object.keys(t.elements);
                                            E.flushSync((function() {
                                                l({
                                                    styles: We(r.map((function(e) {
                                                        return [e, t.styles[e] || {}]
                                                    }))),
                                                    attributes: We(r.map((function(e) {
                                                        return [e, t.attributes[e]]
                                                    })))
                                                })
                                            }))
                                        },
                                        requires: ["computeStyles"]
                                    }
                                }), []),
                                u = o.useMemo((function() {
                                    var e = {
                                        onFirstUpdate: a.onFirstUpdate,
                                        placement: a.placement,
                                        strategy: a.strategy,
                                        modifiers: [].concat(a.modifiers, [c, {
                                            name: "applyStyles",
                                            enabled: !1
                                        }])
                                    };
                                    return He()(n.current, e) ? n.current || e : (n.current = e, e)
                                }), [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, c]),
                                d = o.useRef();
                            return Ge((function() {
                                d.current && d.current.setOptions(u)
                            }), [u]), Ge((function() {
                                if (null != e && null != t) {
                                    var n = (r.createPopper || Ie)(e, t, u);
                                    return d.current = n,
                                        function() {
                                            n.destroy(), d.current = null
                                        }
                                }
                            }), [e, t, r.createPopper]), {
                                state: d.current ? d.current.state : null,
                                styles: s.styles,
                                attributes: s.attributes,
                                update: d.current ? d.current.update : null,
                                forceUpdate: d.current ? d.current.forceUpdate : null
                            }
                        }(ce, fe, {
                            placement: Ne,
                            strategy: "fixed",
                            modifiers: Be
                        }),
                        Xe = Ze.styles,
                        Ye = Ze.attributes,
                        Je = Ze.update,
                        $e = (0, o.useCallback)((function(e) {
                            !K && b(e);
                            var t = null === fe || void 0 === fe ? void 0 : fe.contains(e.target),
                                r = !l && t;
                            t && Je && Je(), r || De(e)
                        }), [l, fe, De, Je, K]),
                        et = (0, o.useCallback)((function(e) {
                            if (fe && ce) {
                                var t, r, n, o = fe.getBoundingClientRect(),
                                    a = ce.getBoundingClientRect(),
                                    i = e.clientX - a.left,
                                    s = e.clientY - a.top,
                                    l = {
                                        top: o.top - a.top,
                                        bottom: o.bottom - a.top,
                                        left: o.left - a.left,
                                        right: o.right - a.left
                                    };
                                switch (Ne.split("-")[0]) {
                                    case "left":
                                        i = Math.min(i + 4, a.width);
                                        var c = l.top + (i - l.right) * (0 - l.top) / (a.width - l.right),
                                            u = l.bottom + (i - l.right) * (a.height - l.bottom) / (a.width - l.right);
                                        s = Math.min(Math.max(s, c), u), t = "".concat(i, ",").concat(s), r = "".concat(l.right, ",").concat(l.top - 2), n = "".concat(l.right, ",").concat(l.bottom + 2);
                                        break;
                                    case "right":
                                        i = Math.max(i - 4, 0);
                                        var d = l.top + (i - l.left) * (0 - l.top) / (0 - l.left),
                                            f = l.bottom + (i - l.left) * (a.height - l.bottom) / (0 - l.left);
                                        s = Math.min(Math.max(s, d), f), t = "".concat(i, ",").concat(s), r = "".concat(l.left, ",").concat(l.top - 2), n = "".concat(l.left, ",").concat(l.bottom + 2);
                                        break;
                                    case "top":
                                        s = Math.min(s + 4, a.height);
                                        var p = l.left + (s - l.bottom) * (0 - l.left) / (a.height - l.bottom),
                                            m = l.right + (s - l.bottom) * (a.width - l.right) / (a.height - l.bottom);
                                        i = Math.min(Math.max(i, p), m), t = "".concat(i, ",").concat(s), r = "".concat(l.left, ",").concat(l.bottom), n = "".concat(l.right, ",").concat(l.bottom);
                                        break;
                                    default:
                                        s = Math.max(s - 4, 0);
                                        var h = l.left + (s - l.top) * (0 - l.left) / (0 - l.top),
                                            b = l.right + (s - l.top) * (a.width - l.right) / (0 - l.top);
                                        i = Math.min(Math.max(i, h), b), t = "".concat(i, ",").concat(s), r = "".concat(l.left, ",").concat(l.top), n = "".concat(l.right, ",").concat(l.top)
                                }
                                xe("".concat(t, " ").concat(r, " ").concat(n))
                            }
                        }), [fe, ce, Ne]);
                    (0, o.useEffect)((function() {
                        return document.addEventListener("click", Le),
                            function() {
                                document.removeEventListener("click", Le)
                            }
                    }), [Le]), (0, o.useEffect)((function() {
                        "undefined" !== typeof r && !!r !== Y && J(r)
                    }), [r, Y]), (0, o.useEffect)((function() {
                        M instanceof HTMLElement ? te(M) : te(document.body)
                    }), [M]), (0, N.op)((function() {
                        null === Je || void 0 === Je || Je()
                    }), [y, Je]);
                    var tt = "hover" === P ? {
                            onMouseEnter: function() {
                                ze(), Te(!0)
                            },
                            onMouseLeave: function() {
                                Re(), Se(!1)
                            },
                            onMouseMove: G ? et : void 0
                        } : {
                            onClick: $e
                        },
                        rt = (0, n.__assign)({
                            arrow: c,
                            variant: k,
                            shadow: !0
                        }, Z);
                    "gray" === k && (rt = (0, n.__assign)((0, n.__assign)({}, rt), {
                        shadow: !1
                    }));
                    var nt = !x && Y,
                        ot = w(we, Q, nt),
                        at = ot.triggerAriaProps,
                        it = ot.contentAriaProps,
                        st = a().createElement(Ue.A, {
                            visible: nt,
                            className: Ae
                        }, a().createElement(Ke, (0, n.__assign)({}, it, rt, {
                            className: Ee,
                            ref: pe,
                            arrowRef: be,
                            arrowStyle: Xe.arrow,
                            style: (0, n.__assign)((0, n.__assign)({}, Xe.popper), null === Z || void 0 === Z ? void 0 : Z.style)
                        }, Ye.popper, {
                            children: y
                        })));
                    return a().createElement(d.Ay, (0, n.__assign)({
                        ref: ue
                    }, tt, {
                        className: je
                    }), G && "hover" === P && Y && a().createElement("svg", {
                        className: "".concat(we, "-safety-triangle"),
                        pointerEvents: "none"
                    }, a().createElement("polygon", {
                        pointerEvents: "auto",
                        points: ge
                    })), a().createElement(d.Ay, (0, n.__assign)({}, at, {
                        className: ke,
                        children: Z.children
                    })), se && R && null !== ee ? j().createPortal(st, ee) : st)
                };
            Qe.displayName = "Tooltips";
            const Ze = Qe;
            var Xe = function(e) {
                var t = e.useReactPopper,
                    r = e.reactPopperProps,
                    o = e.enableHoverSafeArea,
                    s = e.bubbleWrapperClz,
                    l = (0, n.__rest)(e, ["useReactPopper", "reactPopperProps", "enableHoverSafeArea", "bubbleWrapperClz"]);
                return !i.lq && t ? a().createElement(Ze, (0, n.__assign)({
                    reactPopperProps: r,
                    enableHoverSafeArea: o,
                    bubbleWrapperClz: s
                }, l)) : a().createElement(k, (0, n.__assign)({}, l))
            };
            Xe.displayName = "Tooltips";
            const Ye = Xe
        },
        "P/al": (e, t, r) => {
            var n = r("zaNA"),
                o = r("H87J"),
                a = r("S3pA"),
                i = r("R3TX");
            e.exports = function(e) {
                var t = null == e ? 0 : e.length,
                    r = a;
                return e = t ? o(e, (function(e) {
                    if ("function" != typeof e[1]) throw new TypeError("Expected a function");
                    return [r(e[0]), e[1]]
                })) : [], i((function(r) {
                    for (var o = -1; ++o < t;) {
                        var a = e[o];
                        if (n(a[0], this, r)) return n(a[1], this, r)
                    }
                }))
            }
        },
        sGJY: (e, t, r) => {
            var n = r("kn3Q"),
                o = r("7/we");
            e.exports = function(e) {
                return o(n(e, 1))
            }
        },
        LF7v: e => {
            e.exports = function() {
                return !0
            }
        },
        "9EqV": (e, t, r) => {
            "use strict";
            r.d(t, {
                Q: () => q
            });

            function n(e) {
                var t = function(e) {
                        var t = e.theme,
                            r = e.prefix,
                            n = {
                                nextPart: new Map,
                                validators: []
                            };
                        return l(Object.entries(e.classGroups), r).forEach((function(e) {
                            var r = e[0];
                            i(e[1], n, r, t)
                        })), n
                    }(e),
                    r = e.conflictingClassGroups,
                    n = e.conflictingClassGroupModifiers,
                    s = void 0 === n ? {} : n;
                return {
                    getClassGroupId: function(e) {
                        var r = e.split("-");
                        return "" === r[0] && 1 !== r.length && r.shift(), o(r, t) || function(e) {
                            if (a.test(e)) {
                                var t = a.exec(e)[1],
                                    r = t ? .substring(0, t.indexOf(":"));
                                if (r) return "arbitrary.." + r
                            }
                        }(e)
                    },
                    getConflictingClassGroupIds: function(e, t) {
                        var n = r[e] || [];
                        return t && s[e] ? [].concat(n, s[e]) : n
                    }
                }
            }

            function o(e, t) {
                if (0 === e.length) return t.classGroupId;
                var r = e[0],
                    n = t.nextPart.get(r),
                    a = n ? o(e.slice(1), n) : void 0;
                if (a) return a;
                if (0 !== t.validators.length) {
                    var i = e.join("-");
                    return t.validators.find((function(e) {
                        return (0, e.validator)(i)
                    })) ? .classGroupId
                }
            }
            var a = /^\[(.+)\]$/;

            function i(e, t, r, n) {
                e.forEach((function(e) {
                    if ("string" !== typeof e) {
                        if ("function" === typeof e) return e.isThemeGetter ? void i(e(n), t, r, n) : void t.validators.push({
                            validator: e,
                            classGroupId: r
                        });
                        Object.entries(e).forEach((function(e) {
                            var o = e[0];
                            i(e[1], s(t, o), r, n)
                        }))
                    } else {
                        ("" === e ? t : s(t, e)).classGroupId = r
                    }
                }))
            }

            function s(e, t) {
                var r = e;
                return t.split("-").forEach((function(e) {
                    r.nextPart.has(e) || r.nextPart.set(e, {
                        nextPart: new Map,
                        validators: []
                    }), r = r.nextPart.get(e)
                })), r
            }

            function l(e, t) {
                return t ? e.map((function(e) {
                    return [e[0], e[1].map((function(e) {
                        return "string" === typeof e ? t + e : "object" === typeof e ? Object.fromEntries(Object.entries(e).map((function(e) {
                            var r = e[0],
                                n = e[1];
                            return [t + r, n]
                        }))) : e
                    }))]
                })) : e
            }

            function c(e) {
                if (e < 1) return {
                    get: function() {},
                    set: function() {}
                };
                var t = 0,
                    r = new Map,
                    n = new Map;

                function o(o, a) {
                    r.set(o, a), ++t > e && (t = 0, n = r, r = new Map)
                }
                return {
                    get: function(e) {
                        var t = r.get(e);
                        return void 0 !== t ? t : void 0 !== (t = n.get(e)) ? (o(e, t), t) : void 0
                    },
                    set: function(e, t) {
                        r.has(e) ? r.set(e, t) : o(e, t)
                    }
                }
            }

            function u(e) {
                var t = e.separator || ":",
                    r = 1 === t.length,
                    n = t[0],
                    o = t.length;
                return function(e) {
                    for (var a, i = [], s = 0, l = 0, c = 0; c < e.length; c++) {
                        var u = e[c];
                        if (0 === s) {
                            if (u === n && (r || e.slice(c, c + o) === t)) {
                                i.push(e.slice(l, c)), l = c + o;
                                continue
                            }
                            if ("/" === u) {
                                a = c;
                                continue
                            }
                        }
                        "[" === u ? s++ : "]" === u && s--
                    }
                    var d = 0 === i.length ? e : e.substring(l),
                        f = d.startsWith("!");
                    return {
                        modifiers: i,
                        hasImportantModifier: f,
                        baseClassName: f ? d.substring(1) : d,
                        maybePostfixModifierPosition: a && a > l ? a - l : void 0
                    }
                }
            }

            function d(e) {
                return {
                    cache: c(e.cacheSize),
                    splitModifiers: u(e),
                    ...n(e)
                }
            }
            var f = /\s+/;

            function p(e, t) {
                var r = t.splitModifiers,
                    n = t.getClassGroupId,
                    o = t.getConflictingClassGroupIds,
                    a = new Set;
                return e.trim().split(f).map((function(e) {
                    var t = r(e),
                        o = t.modifiers,
                        a = t.hasImportantModifier,
                        i = t.baseClassName,
                        s = t.maybePostfixModifierPosition,
                        l = n(s ? i.substring(0, s) : i),
                        c = Boolean(s);
                    if (!l) {
                        if (!s) return {
                            isTailwindClass: !1,
                            originalClassName: e
                        };
                        if (!(l = n(i))) return {
                            isTailwindClass: !1,
                            originalClassName: e
                        };
                        c = !1
                    }
                    var u = function(e) {
                        if (e.length <= 1) return e;
                        var t = [],
                            r = [];
                        return e.forEach((function(e) {
                            "[" === e[0] ? (t.push.apply(t, r.sort().concat([e])), r = []) : r.push(e)
                        })), t.push.apply(t, r.sort()), t
                    }(o).join(":");
                    return {
                        isTailwindClass: !0,
                        modifierId: a ? u + "!" : u,
                        classGroupId: l,
                        originalClassName: e,
                        hasPostfixModifier: c
                    }
                })).reverse().filter((function(e) {
                    if (!e.isTailwindClass) return !0;
                    var t = e.modifierId,
                        r = e.classGroupId,
                        n = e.hasPostfixModifier,
                        i = t + r;
                    return !a.has(i) && (a.add(i), o(r, n).forEach((function(e) {
                        return a.add(t + e)
                    })), !0)
                })).reverse().map((function(e) {
                    return e.originalClassName
                })).join(" ")
            }

            function m() {
                for (var e, t, r = 0, n = ""; r < arguments.length;)(e = arguments[r++]) && (t = h(e)) && (n && (n += " "), n += t);
                return n
            }

            function h(e) {
                if ("string" === typeof e) return e;
                for (var t, r = "", n = 0; n < e.length; n++) e[n] && (t = h(e[n])) && (r && (r += " "), r += t);
                return r
            }

            function b() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                var n, o, a, i = s;

                function s(e) {
                    var r = t[0],
                        s = t.slice(1).reduce((function(e, t) {
                            return t(e)
                        }), r());
                    return n = d(s), o = n.cache.get, a = n.cache.set, i = l, l(e)
                }

                function l(e) {
                    var t = o(e);
                    if (t) return t;
                    var r = p(e, n);
                    return a(e, r), r
                }
                return function() {
                    return i(m.apply(null, arguments))
                }
            }

            function v(e) {
                var t = function(t) {
                    return t[e] || []
                };
                return t.isThemeGetter = !0, t
            }
            var g = /^\[(?:([a-z-]+):)?(.+)\]$/i,
                x = /^\d+\/\d+$/,
                y = new Set(["px", "full", "screen"]),
                w = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
                A = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
                k = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;

            function E(e) {
                return P(e) || y.has(e) || x.test(e) || j(e)
            }

            function j(e) {
                return L(e, "length", F)
            }

            function N(e) {
                return L(e, "size", I)
            }

            function C(e) {
                return L(e, "position", I)
            }

            function _(e) {
                return L(e, "url", B)
            }

            function O(e) {
                return L(e, "number", P)
            }

            function P(e) {
                return !Number.isNaN(Number(e))
            }

            function T(e) {
                return e.endsWith("%") && P(e.slice(0, -1))
            }

            function R(e) {
                return H(e) || L(e, "number", H)
            }

            function M(e) {
                return g.test(e)
            }

            function S() {
                return !0
            }

            function z(e) {
                return w.test(e)
            }

            function D(e) {
                return L(e, "", W)
            }

            function L(e, t, r) {
                var n = g.exec(e);
                return !!n && (n[1] ? n[1] === t : r(n[2]))
            }

            function F(e) {
                return A.test(e)
            }

            function I() {
                return !1
            }

            function B(e) {
                return e.startsWith("url(")
            }

            function H(e) {
                return Number.isInteger(Number(e))
            }

            function W(e) {
                return k.test(e)
            }

            function G() {
                var e = v("colors"),
                    t = v("spacing"),
                    r = v("blur"),
                    n = v("brightness"),
                    o = v("borderColor"),
                    a = v("borderRadius"),
                    i = v("borderSpacing"),
                    s = v("borderWidth"),
                    l = v("contrast"),
                    c = v("grayscale"),
                    u = v("hueRotate"),
                    d = v("invert"),
                    f = v("gap"),
                    p = v("gradientColorStops"),
                    m = v("gradientColorStopPositions"),
                    h = v("inset"),
                    b = v("margin"),
                    g = v("opacity"),
                    x = v("padding"),
                    y = v("saturate"),
                    w = v("scale"),
                    A = v("sepia"),
                    k = v("skew"),
                    L = v("space"),
                    F = v("translate"),
                    I = function() {
                        return ["auto", M, t]
                    },
                    B = function() {
                        return [M, t]
                    },
                    H = function() {
                        return ["", E]
                    },
                    W = function() {
                        return ["auto", P, M]
                    },
                    G = function() {
                        return ["", "0", M]
                    },
                    q = function() {
                        return [P, O]
                    },
                    V = function() {
                        return [P, M]
                    };
                return {
                    cacheSize: 500,
                    theme: {
                        colors: [S],
                        spacing: [E],
                        blur: ["none", "", z, M],
                        brightness: q(),
                        borderColor: [e],
                        borderRadius: ["none", "", "full", z, M],
                        borderSpacing: B(),
                        borderWidth: H(),
                        contrast: q(),
                        grayscale: G(),
                        hueRotate: V(),
                        invert: G(),
                        gap: B(),
                        gradientColorStops: [e],
                        gradientColorStopPositions: [T, j],
                        inset: I(),
                        margin: I(),
                        opacity: q(),
                        padding: B(),
                        saturate: q(),
                        scale: q(),
                        sepia: G(),
                        skew: V(),
                        space: B(),
                        translate: B()
                    },
                    classGroups: {
                        aspect: [{
                            aspect: ["auto", "square", "video", M]
                        }],
                        container: ["container"],
                        columns: [{
                            columns: [z]
                        }],
                        "break-after": [{
                            "break-after": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                        }],
                        "break-before": [{
                            "break-before": ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"]
                        }],
                        "break-inside": [{
                            "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
                        }],
                        "box-decoration": [{
                            "box-decoration": ["slice", "clone"]
                        }],
                        box: [{
                            box: ["border", "content"]
                        }],
                        display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
                        float: [{
                            float: ["right", "left", "none"]
                        }],
                        clear: [{
                            clear: ["left", "right", "both", "none"]
                        }],
                        isolation: ["isolate", "isolation-auto"],
                        "object-fit": [{
                            object: ["contain", "cover", "fill", "none", "scale-down"]
                        }],
                        "object-position": [{
                            object: [].concat(["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], [M])
                        }],
                        overflow: [{
                            overflow: ["auto", "hidden", "clip", "visible", "scroll"]
                        }],
                        "overflow-x": [{
                            "overflow-x": ["auto", "hidden", "clip", "visible", "scroll"]
                        }],
                        "overflow-y": [{
                            "overflow-y": ["auto", "hidden", "clip", "visible", "scroll"]
                        }],
                        overscroll: [{
                            overscroll: ["auto", "contain", "none"]
                        }],
                        "overscroll-x": [{
                            "overscroll-x": ["auto", "contain", "none"]
                        }],
                        "overscroll-y": [{
                            "overscroll-y": ["auto", "contain", "none"]
                        }],
                        position: ["static", "fixed", "absolute", "relative", "sticky"],
                        inset: [{
                            inset: [h]
                        }],
                        "inset-x": [{
                            "inset-x": [h]
                        }],
                        "inset-y": [{
                            "inset-y": [h]
                        }],
                        start: [{
                            start: [h]
                        }],
                        end: [{
                            end: [h]
                        }],
                        top: [{
                            top: [h]
                        }],
                        right: [{
                            right: [h]
                        }],
                        bottom: [{
                            bottom: [h]
                        }],
                        left: [{
                            left: [h]
                        }],
                        visibility: ["visible", "invisible", "collapse"],
                        z: [{
                            z: ["auto", R]
                        }],
                        basis: [{
                            basis: I()
                        }],
                        "flex-direction": [{
                            flex: ["row", "row-reverse", "col", "col-reverse"]
                        }],
                        "flex-wrap": [{
                            flex: ["wrap", "wrap-reverse", "nowrap"]
                        }],
                        flex: [{
                            flex: ["1", "auto", "initial", "none", M]
                        }],
                        grow: [{
                            grow: G()
                        }],
                        shrink: [{
                            shrink: G()
                        }],
                        order: [{
                            order: ["first", "last", "none", R]
                        }],
                        "grid-cols": [{
                            "grid-cols": [S]
                        }],
                        "col-start-end": [{
                            col: ["auto", {
                                span: ["full", R]
                            }, M]
                        }],
                        "col-start": [{
                            "col-start": W()
                        }],
                        "col-end": [{
                            "col-end": W()
                        }],
                        "grid-rows": [{
                            "grid-rows": [S]
                        }],
                        "row-start-end": [{
                            row: ["auto", {
                                span: [R]
                            }, M]
                        }],
                        "row-start": [{
                            "row-start": W()
                        }],
                        "row-end": [{
                            "row-end": W()
                        }],
                        "grid-flow": [{
                            "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
                        }],
                        "auto-cols": [{
                            "auto-cols": ["auto", "min", "max", "fr", M]
                        }],
                        "auto-rows": [{
                            "auto-rows": ["auto", "min", "max", "fr", M]
                        }],
                        gap: [{
                            gap: [f]
                        }],
                        "gap-x": [{
                            "gap-x": [f]
                        }],
                        "gap-y": [{
                            "gap-y": [f]
                        }],
                        "justify-content": [{
                            justify: ["normal"].concat(["start", "end", "center", "between", "around", "evenly", "stretch"])
                        }],
                        "justify-items": [{
                            "justify-items": ["start", "end", "center", "stretch"]
                        }],
                        "justify-self": [{
                            "justify-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        "align-content": [{
                            content: ["normal"].concat(["start", "end", "center", "between", "around", "evenly", "stretch"], ["baseline"])
                        }],
                        "align-items": [{
                            items: ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "align-self": [{
                            self: ["auto", "start", "end", "center", "stretch", "baseline"]
                        }],
                        "place-content": [{
                            "place-content": [].concat(["start", "end", "center", "between", "around", "evenly", "stretch"], ["baseline"])
                        }],
                        "place-items": [{
                            "place-items": ["start", "end", "center", "baseline", "stretch"]
                        }],
                        "place-self": [{
                            "place-self": ["auto", "start", "end", "center", "stretch"]
                        }],
                        p: [{
                            p: [x]
                        }],
                        px: [{
                            px: [x]
                        }],
                        py: [{
                            py: [x]
                        }],
                        ps: [{
                            ps: [x]
                        }],
                        pe: [{
                            pe: [x]
                        }],
                        pt: [{
                            pt: [x]
                        }],
                        pr: [{
                            pr: [x]
                        }],
                        pb: [{
                            pb: [x]
                        }],
                        pl: [{
                            pl: [x]
                        }],
                        m: [{
                            m: [b]
                        }],
                        mx: [{
                            mx: [b]
                        }],
                        my: [{
                            my: [b]
                        }],
                        ms: [{
                            ms: [b]
                        }],
                        me: [{
                            me: [b]
                        }],
                        mt: [{
                            mt: [b]
                        }],
                        mr: [{
                            mr: [b]
                        }],
                        mb: [{
                            mb: [b]
                        }],
                        ml: [{
                            ml: [b]
                        }],
                        "space-x": [{
                            "space-x": [L]
                        }],
                        "space-x-reverse": ["space-x-reverse"],
                        "space-y": [{
                            "space-y": [L]
                        }],
                        "space-y-reverse": ["space-y-reverse"],
                        w: [{
                            w: ["auto", "min", "max", "fit", M, t]
                        }],
                        "min-w": [{
                            "min-w": ["min", "max", "fit", M, E]
                        }],
                        "max-w": [{
                            "max-w": ["0", "none", "full", "min", "max", "fit", "prose", {
                                screen: [z]
                            }, z, M]
                        }],
                        h: [{
                            h: [M, t, "auto", "min", "max", "fit"]
                        }],
                        "min-h": [{
                            "min-h": ["min", "max", "fit", M, E]
                        }],
                        "max-h": [{
                            "max-h": [M, t, "min", "max", "fit"]
                        }],
                        "font-size": [{
                            text: ["base", z, j]
                        }],
                        "font-smoothing": ["antialiased", "subpixel-antialiased"],
                        "font-style": ["italic", "not-italic"],
                        "font-weight": [{
                            font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", O]
                        }],
                        "font-family": [{
                            font: [S]
                        }],
                        "fvn-normal": ["normal-nums"],
                        "fvn-ordinal": ["ordinal"],
                        "fvn-slashed-zero": ["slashed-zero"],
                        "fvn-figure": ["lining-nums", "oldstyle-nums"],
                        "fvn-spacing": ["proportional-nums", "tabular-nums"],
                        "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
                        tracking: [{
                            tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", M]
                        }],
                        "line-clamp": [{
                            "line-clamp": ["none", P, O]
                        }],
                        leading: [{
                            leading: ["none", "tight", "snug", "normal", "relaxed", "loose", M, E]
                        }],
                        "list-image": [{
                            "list-image": ["none", M]
                        }],
                        "list-style-type": [{
                            list: ["none", "disc", "decimal", M]
                        }],
                        "list-style-position": [{
                            list: ["inside", "outside"]
                        }],
                        "placeholder-color": [{
                            placeholder: [e]
                        }],
                        "placeholder-opacity": [{
                            "placeholder-opacity": [g]
                        }],
                        "text-alignment": [{
                            text: ["left", "center", "right", "justify", "start", "end"]
                        }],
                        "text-color": [{
                            text: [e]
                        }],
                        "text-opacity": [{
                            "text-opacity": [g]
                        }],
                        "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                        "text-decoration-style": [{
                            decoration: [].concat(["solid", "dashed", "dotted", "double", "none"], ["wavy"])
                        }],
                        "text-decoration-thickness": [{
                            decoration: ["auto", "from-font", E]
                        }],
                        "underline-offset": [{
                            "underline-offset": ["auto", M, E]
                        }],
                        "text-decoration-color": [{
                            decoration: [e]
                        }],
                        "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                        "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                        indent: [{
                            indent: B()
                        }],
                        "vertical-align": [{
                            align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", M]
                        }],
                        whitespace: [{
                            whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
                        }],
                        break: [{
                            break: ["normal", "words", "all", "keep"]
                        }],
                        hyphens: [{
                            hyphens: ["none", "manual", "auto"]
                        }],
                        content: [{
                            content: ["none", M]
                        }],
                        "bg-attachment": [{
                            bg: ["fixed", "local", "scroll"]
                        }],
                        "bg-clip": [{
                            "bg-clip": ["border", "padding", "content", "text"]
                        }],
                        "bg-opacity": [{
                            "bg-opacity": [g]
                        }],
                        "bg-origin": [{
                            "bg-origin": ["border", "padding", "content"]
                        }],
                        "bg-position": [{
                            bg: [].concat(["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], [C])
                        }],
                        "bg-repeat": [{
                            bg: ["no-repeat", {
                                repeat: ["", "x", "y", "round", "space"]
                            }]
                        }],
                        "bg-size": [{
                            bg: ["auto", "cover", "contain", N]
                        }],
                        "bg-image": [{
                            bg: ["none", {
                                "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
                            }, _]
                        }],
                        "bg-color": [{
                            bg: [e]
                        }],
                        "gradient-from-pos": [{
                            from: [m]
                        }],
                        "gradient-via-pos": [{
                            via: [m]
                        }],
                        "gradient-to-pos": [{
                            to: [m]
                        }],
                        "gradient-from": [{
                            from: [p]
                        }],
                        "gradient-via": [{
                            via: [p]
                        }],
                        "gradient-to": [{
                            to: [p]
                        }],
                        rounded: [{
                            rounded: [a]
                        }],
                        "rounded-s": [{
                            "rounded-s": [a]
                        }],
                        "rounded-e": [{
                            "rounded-e": [a]
                        }],
                        "rounded-t": [{
                            "rounded-t": [a]
                        }],
                        "rounded-r": [{
                            "rounded-r": [a]
                        }],
                        "rounded-b": [{
                            "rounded-b": [a]
                        }],
                        "rounded-l": [{
                            "rounded-l": [a]
                        }],
                        "rounded-ss": [{
                            "rounded-ss": [a]
                        }],
                        "rounded-se": [{
                            "rounded-se": [a]
                        }],
                        "rounded-ee": [{
                            "rounded-ee": [a]
                        }],
                        "rounded-es": [{
                            "rounded-es": [a]
                        }],
                        "rounded-tl": [{
                            "rounded-tl": [a]
                        }],
                        "rounded-tr": [{
                            "rounded-tr": [a]
                        }],
                        "rounded-br": [{
                            "rounded-br": [a]
                        }],
                        "rounded-bl": [{
                            "rounded-bl": [a]
                        }],
                        "border-w": [{
                            border: [s]
                        }],
                        "border-w-x": [{
                            "border-x": [s]
                        }],
                        "border-w-y": [{
                            "border-y": [s]
                        }],
                        "border-w-s": [{
                            "border-s": [s]
                        }],
                        "border-w-e": [{
                            "border-e": [s]
                        }],
                        "border-w-t": [{
                            "border-t": [s]
                        }],
                        "border-w-r": [{
                            "border-r": [s]
                        }],
                        "border-w-b": [{
                            "border-b": [s]
                        }],
                        "border-w-l": [{
                            "border-l": [s]
                        }],
                        "border-opacity": [{
                            "border-opacity": [g]
                        }],
                        "border-style": [{
                            border: [].concat(["solid", "dashed", "dotted", "double", "none"], ["hidden"])
                        }],
                        "divide-x": [{
                            "divide-x": [s]
                        }],
                        "divide-x-reverse": ["divide-x-reverse"],
                        "divide-y": [{
                            "divide-y": [s]
                        }],
                        "divide-y-reverse": ["divide-y-reverse"],
                        "divide-opacity": [{
                            "divide-opacity": [g]
                        }],
                        "divide-style": [{
                            divide: ["solid", "dashed", "dotted", "double", "none"]
                        }],
                        "border-color": [{
                            border: [o]
                        }],
                        "border-color-x": [{
                            "border-x": [o]
                        }],
                        "border-color-y": [{
                            "border-y": [o]
                        }],
                        "border-color-t": [{
                            "border-t": [o]
                        }],
                        "border-color-r": [{
                            "border-r": [o]
                        }],
                        "border-color-b": [{
                            "border-b": [o]
                        }],
                        "border-color-l": [{
                            "border-l": [o]
                        }],
                        "divide-color": [{
                            divide: [o]
                        }],
                        "outline-style": [{
                            outline: [""].concat(["solid", "dashed", "dotted", "double", "none"])
                        }],
                        "outline-offset": [{
                            "outline-offset": [M, E]
                        }],
                        "outline-w": [{
                            outline: [E]
                        }],
                        "outline-color": [{
                            outline: [e]
                        }],
                        "ring-w": [{
                            ring: H()
                        }],
                        "ring-w-inset": ["ring-inset"],
                        "ring-color": [{
                            ring: [e]
                        }],
                        "ring-opacity": [{
                            "ring-opacity": [g]
                        }],
                        "ring-offset-w": [{
                            "ring-offset": [E]
                        }],
                        "ring-offset-color": [{
                            "ring-offset": [e]
                        }],
                        shadow: [{
                            shadow: ["", "inner", "none", z, D]
                        }],
                        "shadow-color": [{
                            shadow: [S]
                        }],
                        opacity: [{
                            opacity: [g]
                        }],
                        "mix-blend": [{
                            "mix-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                        }],
                        "bg-blend": [{
                            "bg-blend": ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"]
                        }],
                        filter: [{
                            filter: ["", "none"]
                        }],
                        blur: [{
                            blur: [r]
                        }],
                        brightness: [{
                            brightness: [n]
                        }],
                        contrast: [{
                            contrast: [l]
                        }],
                        "drop-shadow": [{
                            "drop-shadow": ["", "none", z, M]
                        }],
                        grayscale: [{
                            grayscale: [c]
                        }],
                        "hue-rotate": [{
                            "hue-rotate": [u]
                        }],
                        invert: [{
                            invert: [d]
                        }],
                        saturate: [{
                            saturate: [y]
                        }],
                        sepia: [{
                            sepia: [A]
                        }],
                        "backdrop-filter": [{
                            "backdrop-filter": ["", "none"]
                        }],
                        "backdrop-blur": [{
                            "backdrop-blur": [r]
                        }],
                        "backdrop-brightness": [{
                            "backdrop-brightness": [n]
                        }],
                        "backdrop-contrast": [{
                            "backdrop-contrast": [l]
                        }],
                        "backdrop-grayscale": [{
                            "backdrop-grayscale": [c]
                        }],
                        "backdrop-hue-rotate": [{
                            "backdrop-hue-rotate": [u]
                        }],
                        "backdrop-invert": [{
                            "backdrop-invert": [d]
                        }],
                        "backdrop-opacity": [{
                            "backdrop-opacity": [g]
                        }],
                        "backdrop-saturate": [{
                            "backdrop-saturate": [y]
                        }],
                        "backdrop-sepia": [{
                            "backdrop-sepia": [A]
                        }],
                        "border-collapse": [{
                            border: ["collapse", "separate"]
                        }],
                        "border-spacing": [{
                            "border-spacing": [i]
                        }],
                        "border-spacing-x": [{
                            "border-spacing-x": [i]
                        }],
                        "border-spacing-y": [{
                            "border-spacing-y": [i]
                        }],
                        "table-layout": [{
                            table: ["auto", "fixed"]
                        }],
                        caption: [{
                            caption: ["top", "bottom"]
                        }],
                        transition: [{
                            transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", M]
                        }],
                        duration: [{
                            duration: V()
                        }],
                        ease: [{
                            ease: ["linear", "in", "out", "in-out", M]
                        }],
                        delay: [{
                            delay: V()
                        }],
                        animate: [{
                            animate: ["none", "spin", "ping", "pulse", "bounce", M]
                        }],
                        transform: [{
                            transform: ["", "gpu", "none"]
                        }],
                        scale: [{
                            scale: [w]
                        }],
                        "scale-x": [{
                            "scale-x": [w]
                        }],
                        "scale-y": [{
                            "scale-y": [w]
                        }],
                        rotate: [{
                            rotate: [R, M]
                        }],
                        "translate-x": [{
                            "translate-x": [F]
                        }],
                        "translate-y": [{
                            "translate-y": [F]
                        }],
                        "skew-x": [{
                            "skew-x": [k]
                        }],
                        "skew-y": [{
                            "skew-y": [k]
                        }],
                        "transform-origin": [{
                            origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", M]
                        }],
                        accent: [{
                            accent: ["auto", e]
                        }],
                        appearance: ["appearance-none"],
                        cursor: [{
                            cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", M]
                        }],
                        "caret-color": [{
                            caret: [e]
                        }],
                        "pointer-events": [{
                            "pointer-events": ["none", "auto"]
                        }],
                        resize: [{
                            resize: ["none", "y", "x", ""]
                        }],
                        "scroll-behavior": [{
                            scroll: ["auto", "smooth"]
                        }],
                        "scroll-m": [{
                            "scroll-m": B()
                        }],
                        "scroll-mx": [{
                            "scroll-mx": B()
                        }],
                        "scroll-my": [{
                            "scroll-my": B()
                        }],
                        "scroll-ms": [{
                            "scroll-ms": B()
                        }],
                        "scroll-me": [{
                            "scroll-me": B()
                        }],
                        "scroll-mt": [{
                            "scroll-mt": B()
                        }],
                        "scroll-mr": [{
                            "scroll-mr": B()
                        }],
                        "scroll-mb": [{
                            "scroll-mb": B()
                        }],
                        "scroll-ml": [{
                            "scroll-ml": B()
                        }],
                        "scroll-p": [{
                            "scroll-p": B()
                        }],
                        "scroll-px": [{
                            "scroll-px": B()
                        }],
                        "scroll-py": [{
                            "scroll-py": B()
                        }],
                        "scroll-ps": [{
                            "scroll-ps": B()
                        }],
                        "scroll-pe": [{
                            "scroll-pe": B()
                        }],
                        "scroll-pt": [{
                            "scroll-pt": B()
                        }],
                        "scroll-pr": [{
                            "scroll-pr": B()
                        }],
                        "scroll-pb": [{
                            "scroll-pb": B()
                        }],
                        "scroll-pl": [{
                            "scroll-pl": B()
                        }],
                        "snap-align": [{
                            snap: ["start", "end", "center", "align-none"]
                        }],
                        "snap-stop": [{
                            snap: ["normal", "always"]
                        }],
                        "snap-type": [{
                            snap: ["none", "x", "y", "both"]
                        }],
                        "snap-strictness": [{
                            snap: ["mandatory", "proximity"]
                        }],
                        touch: [{
                            touch: ["auto", "none", "pinch-zoom", "manipulation", {
                                pan: ["x", "left", "right", "y", "up", "down"]
                            }]
                        }],
                        select: [{
                            select: ["none", "text", "all", "auto"]
                        }],
                        "will-change": [{
                            "will-change": ["auto", "scroll", "contents", "transform", M]
                        }],
                        fill: [{
                            fill: [e, "none"]
                        }],
                        "stroke-w": [{
                            stroke: [E, O]
                        }],
                        stroke: [{
                            stroke: [e, "none"]
                        }],
                        sr: ["sr-only", "not-sr-only"]
                    },
                    conflictingClassGroups: {
                        overflow: ["overflow-x", "overflow-y"],
                        overscroll: ["overscroll-x", "overscroll-y"],
                        inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                        "inset-x": ["right", "left"],
                        "inset-y": ["top", "bottom"],
                        flex: ["basis", "grow", "shrink"],
                        gap: ["gap-x", "gap-y"],
                        p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                        px: ["pr", "pl"],
                        py: ["pt", "pb"],
                        m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                        mx: ["mr", "ml"],
                        my: ["mt", "mb"],
                        "font-size": ["leading"],
                        "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                        "fvn-ordinal": ["fvn-normal"],
                        "fvn-slashed-zero": ["fvn-normal"],
                        "fvn-figure": ["fvn-normal"],
                        "fvn-spacing": ["fvn-normal"],
                        "fvn-fraction": ["fvn-normal"],
                        rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
                        "rounded-s": ["rounded-ss", "rounded-es"],
                        "rounded-e": ["rounded-se", "rounded-ee"],
                        "rounded-t": ["rounded-tl", "rounded-tr"],
                        "rounded-r": ["rounded-tr", "rounded-br"],
                        "rounded-b": ["rounded-br", "rounded-bl"],
                        "rounded-l": ["rounded-tl", "rounded-bl"],
                        "border-spacing": ["border-spacing-x", "border-spacing-y"],
                        "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                        "border-w-x": ["border-w-r", "border-w-l"],
                        "border-w-y": ["border-w-t", "border-w-b"],
                        "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
                        "border-color-x": ["border-color-r", "border-color-l"],
                        "border-color-y": ["border-color-t", "border-color-b"],
                        "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
                        "scroll-mx": ["scroll-mr", "scroll-ml"],
                        "scroll-my": ["scroll-mt", "scroll-mb"],
                        "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
                        "scroll-px": ["scroll-pr", "scroll-pl"],
                        "scroll-py": ["scroll-pt", "scroll-pb"]
                    },
                    conflictingClassGroupModifiers: {
                        "font-size": ["leading"]
                    }
                }
            }
            var q = b(G)
        }
    }
]);
//# debugId=85cbe1ef-b14c-54f7-b5ab-1c83bda9d418