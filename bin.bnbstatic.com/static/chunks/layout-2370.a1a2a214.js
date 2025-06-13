! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b5bb267e-0ab6-5490-8c6e-8d248bcc1d1d")
    } catch (e) {}
}();
(self.webpackChunkusercenter_wallet_ui = self.webpackChunkusercenter_wallet_ui || []).push([
    [8430], {
        BoNV: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => g,
                w: () => h
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                o = r.n(i),
                a = r("dHJT");
            const s = (0, i.createContext)({
                colors: {},
                mode: "light"
            });
            var l = r("qrIQ"),
                c = r("hyZw"),
                u = r("OKx2"),
                d = r("o0Ko"),
                p = r.n(d),
                f = r("AGKK"),
                m = r("Prrn"),
                h = function() {
                    return (0, i.useContext)(s)
                },
                b = {
                    fresh: "",
                    traditional: "traditional"
                };
            const g = function(e) {
                var t = e.scope,
                    r = e.isCVD,
                    d = e.isReverse,
                    h = e.themeColors,
                    g = e.colorMode,
                    v = void 0 === g ? "fresh" : g,
                    y = e.mode,
                    x = void 0 === y ? "light" : y,
                    w = e.themeExtraColors,
                    k = void 0 === w ? {} : w,
                    S = (0, m.r)().isMobile,
                    B = (0, i.useMemo)((function() {
                        var e = [r ? "cvd" : b[v] || "", d ? "reverse" : ""].filter(Boolean),
                            t = (0, n.__assign)({}, h),
                            i = k[e.join("-")] || {};
                        S && ((null === h || void 0 === h ? void 0 : h.mobile) && (t = (0, n.__assign)((0, n.__assign)({}, t), t.mobile)), (null === i || void 0 === i ? void 0 : i.mobile) && (i = (0, n.__assign)((0, n.__assign)({}, i), i.mobile)));
                        var o = (0, n.__assign)((0, n.__assign)({}, t), i);
                        delete o.mobile;
                        var a;
                        return a = Object.keys(o).reduce((function(e, t) {
                            var r;
                            return (0, n.__assign)((0, n.__assign)({}, e), ((r = {})["--color-".concat(t)] = o[t], r))
                        }), {}), {
                            colors: o,
                            styles: a
                        }
                    }), [r, d, h, k, S, v]),
                    _ = B.colors,
                    A = B.styles,
                    U = p()("theme-root", x, e.className);
                return (0, a.op)((function() {
                    var e;
                    return l.lq || t || !document.body ? c.es : ((0, u.Dq)(document.body, A, !0), (e = document.body.classList).add.apply(e, U.split(" ")), function() {
                        var e;
                        (null === document || void 0 === document ? void 0 : document.body) && ((0, u.Dq)(document.body, A, !1), (e = document.body.classList).remove.apply(e, U.split(" ")))
                    })
                }), [U, t, A]), o().createElement(s.Provider, {
                    value: {
                        isCVD: r,
                        isReverse: d,
                        mode: x,
                        colors: _
                    }
                }, l.lq || t ? o().createElement(f.Ay, {
                    className: U,
                    style: A,
                    children: e.children
                }) : e.children)
            }
        },
        "5XPI": (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => h
            });
            var n = r("DTvD"),
                i = r.n(n),
                o = r("DPeK"),
                a = r("aiFg"),
                s = r("hTvQ"),
                l = r.n(s),
                c = ["as"];
            var u = r("aVXY"),
                d = i().useLayoutEffect,
                p = function(e, t) {
                    "function" === typeof e ? e(t) : e && (e.current = t)
                };
            const f = i().forwardRef((function(e, t) {
                var r = e.children,
                    n = e.container,
                    o = e.disablePortal,
                    a = void 0 !== o && o,
                    s = (0, u.A)(i().useState(), 2),
                    c = s[0],
                    f = s[1];
                return d((function() {
                    a || f(function(e) {
                        return e = "function" === typeof e ? e() : e, l().findDOMNode(e)
                    }(n) || document.body)
                }), [n]), d((function() {
                    if (c && !a) return p(t, c),
                        function() {
                            p(t, null)
                        }
                }), [t, c, a]), a ? i().isValidElement(r) ? i().cloneElement(r, {
                    ref: t
                }) : r : c ? l().createPortal(r, c) : null
            }));
            var m = function(e) {
                var t = (void 0 === e ? {} : e).multiSources,
                    r = {};

                function n(e) {
                    r.value = e, r.set && r.set.current && r.set.current(e)
                }
                return {
                    Source: function(e) {
                        var n = e.children,
                            o = i().useState(null),
                            a = o[0],
                            s = o[1];
                        return i().useLayoutEffect((function() {
                            var e, n = {
                                current: s
                            };
                            return r.set && (e = r.set, t || r.set.current(null)), r.set = n, s(r.value),
                                function() {
                                    n.current = null, r.set = null, e && e.current && (r.set = e, r.set.current(r.value))
                                }
                        }), []), a ? l().createPortal(n, a) : null
                    },
                    Target: function(e) {
                        var t = e.as,
                            r = void 0 === t ? "div" : t,
                            s = (0, a.A)(e, c);
                        return i().createElement(r, (0, o.A)({
                            ref: n
                        }, s))
                    },
                    useTargetRef: function() {
                        return n
                    }
                }
            }();
            (0, n.createContext)(m.Source);
            const h = f
        },
        NrY2: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = r("DTvD");
            const i = n.createContext("ltr")
        },
        S8bp: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("DTvD"),
                i = r("VXBK"),
                o = r("NrY2");
            const a = function(e) {
                var t = e.children,
                    r = e.dir,
                    a = e.theme;
                return n.createElement(o.A.Consumer, null, (function(e) {
                    return n.createElement(o.A.Provider, {
                        value: r || e
                    }, n.createElement(i.NP, {
                        theme: a
                    }, t))
                }))
            }
        },
        Z2u4: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => O
            });
            var n = r("BK7R"),
                i = r("QUKP");
            var o = {
                    normal: {
                        height: "32px",
                        ".rc-picker": {
                            fontSize: "sm",
                            ".rc-picker-input > input": {
                                fontSize: "sm"
                            }
                        }
                    },
                    tiny: {
                        height: "20px",
                        ".rc-picker": {
                            fontSize: "xs",
                            ".rc-picker-input > input": {
                                fontSize: "xs"
                            }
                        }
                    }
                },
                a = {
                    ".rc-picker-range": {
                        "&:hover": {
                            ".rc-picker-clear": {
                                opacity: 1
                            }
                        }
                    },
                    ".rc-picker-clear": {
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "t.third",
                        opacity: 0,
                        transition: ".3s opacity linear",
                        cursor: "pointer"
                    },
                    ".rc-picker-suffix": {
                        display: "flex",
                        alignItems: "center",
                        color: "t.third"
                    }
                },
                s = (0, n.A)({
                    display: "inline-flex",
                    minWidth: "240px",
                    ".rc-picker-range-separator": {
                        display: "flex",
                        alignItems: "center"
                    },
                    ".rc-picker": {
                        flexGrow: 1
                    },
                    ".rc-picker .rc-picker-input > input": {
                        py: "0px",
                        outline: "none",
                        border: "none",
                        color: "t.primary",
                        bg: "inherit",
                        textAlign: "center",
                        "&::placeholder": {
                            color: "t.placeholder"
                        }
                    }
                }, a),
                l = function(e) {
                    return Object.keys(o).reduce((function(t, r) {
                        return t[r] = (0, n.A)({}, e, o[r]), t
                    }), {})
                },
                c = (0, n.A)({
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    height: "48px",
                    bg: "transparent",
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "ls",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "246px",
                    py: "14px",
                    paddingRight: "ls",
                    "&.bn-picker-opened": {
                        borderColor: "primaryHover"
                    },
                    "&.bn-picker-disabled": {
                        backgroundColor: "line",
                        ".rc-picker-input input": {
                            cursor: "not-allowed",
                            color: "t.disabled"
                        },
                        "&:hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                            borderColor: "line"
                        }
                    },
                    ".rc-picker-range-separator": {
                        display: "flex",
                        alignItems: "center"
                    },
                    ".rc-picker-active-bar": {
                        display: "none"
                    },
                    ".rc-picker-input input": {
                        border: "none",
                        color: "t.primary",
                        lineHeight: "20px",
                        background: "transparent",
                        padding: 0,
                        paddingLeft: "ls",
                        outline: "none",
                        "&::placeholder": {
                            color: "t.disabled"
                        }
                    }
                }, a);
            const u = {
                    rangePicker: {
                        default: s,
                        underline: (0, n.A)({}, l({
                            variant: "rangePicker.default",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "line",
                            "&.bn-picker-opened": {
                                borderBottomColor: "primary"
                            },
                            ":hover": {
                                borderColor: "primary"
                            }
                        })),
                        outline: (0, n.A)({}, l({
                            variant: "rangePicker.default",
                            height: "48px",
                            borderRadius: "small",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            pr: "xs",
                            "&.bn-picker-opened": {
                                borderColor: "primary"
                            },
                            ":hover": {
                                borderColor: "primary"
                            }
                        })),
                        phantom: (0, n.A)({}, l({
                            variant: "rangePicker.default",
                            border: "none",
                            ".rc-picker-range.rc-picker-focused .rc-picker-active-bar": {
                                opacity: "0"
                            },
                            ".rc-picker-range .rc-picker-input:hover": {
                                border: "none",
                                input: {
                                    color: "t.yellow"
                                }
                            },
                            "&.bn-picker-opened": {
                                ".rc-picker-range.rc-picker-focused .rc-picker-input.rc-picker-input-active input": {
                                    color: "t.yellow"
                                }
                            },
                            ":hover": {
                                border: "none"
                            }
                        })),
                        line: {
                            md: (0, i.A)((0, n.A)({}, c), {
                                height: "40px"
                            }),
                            lg: (0, i.A)((0, n.A)({}, c), {
                                height: "48px"
                            })
                        }
                    }
                },
                d = {
                    text: {
                        extraHeadline: {
                            fontWeight: "semibold",
                            fontSize: "xxxxl",
                            lineHeight: "64px"
                        },
                        headline1: {
                            fontWeight: "semibold",
                            fontSize: "xxxl",
                            lineHeight: "56px"
                        },
                        headline2: {
                            fontWeight: "semibold",
                            fontSize: "xxl",
                            lineHeight: "48px"
                        },
                        headline3: {
                            fontWeight: "semibold",
                            fontSize: "xl",
                            lineHeight: "40px"
                        },
                        headline4: {
                            fontWeight: "semibold",
                            fontSize: "lg",
                            lineHeight: "36px"
                        },
                        headline5: {
                            fontWeight: "semibold",
                            fontSize: "xp",
                            lineHeight: "32px"
                        },
                        headline6: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        largeBody: {
                            fontWeight: "normal",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        mediumBody: {
                            fontWeight: "light",
                            fontSize: "minor",
                            lineHeight: "28px"
                        },
                        subtitle1: {
                            fontWeight: "medium",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        subtitle2: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        body1: {
                            fontWeight: "normal",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        body2: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        captionSub: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        caption: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        largeLink: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkBody: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        addressLink: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkCaption: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px",
                            textDecoration: "underline"
                        },
                        primaryNum1: {
                            fontWeight: "semibold",
                            fontSize: "xl",
                            lineHeight: "40px"
                        },
                        primaryNum2: {
                            fontWeight: "semibold",
                            fontSize: "lg",
                            lineHeight: "36px"
                        },
                        primaryNum3: {
                            fontWeight: "semibold",
                            fontSize: "xp",
                            lineHeight: "32px"
                        },
                        secondaryNum1: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        secondaryNum2: {
                            fontWeight: "medium",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        tertiaryNum1: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        tertiaryNum2: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        tertiaryNum3: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        formLabel: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "16px",
                            color: "t.primary"
                        },
                        formLabelSmall: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px",
                            color: "t.primary"
                        },
                        formLabelDisabled: {
                            variant: "text.formLabel",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        formLabelSmallDisabled: {
                            variant: "text.formLabelSmall",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        checkbox: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: 1.43,
                            color: "t.primary",
                            cursor: "pointer"
                        },
                        checkboxDisabled: {
                            variant: "text.checkbox",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        infoHelperText: {
                            height: "24px",
                            lineHeight: "24px",
                            fontSize: "xs",
                            color: "t.third"
                        },
                        errorHelperText: {
                            variant: "text.infoHelperText",
                            color: "error"
                        },
                        dottedUnderline: {
                            variant: "text.formLabel",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "dashed",
                            borderBottomColor: "t.third"
                        },
                        title2: {
                            fontWeight: "semibold",
                            fontSize: "48px",
                            lineHeight: "56px"
                        },
                        title3: {
                            fontWeight: "semibold",
                            fontSize: "40px",
                            lineHeight: "48px"
                        },
                        title4: {
                            fontWeight: "semibold",
                            fontSize: "32px",
                            lineHeight: "40px"
                        },
                        title5: {
                            fontWeight: "semibold",
                            fontSize: "24px",
                            lineHeight: "28px"
                        },
                        largeText: {
                            fontWeight: "normal",
                            fontSize: "24px",
                            lineHeight: "28px"
                        },
                        title6: {
                            fontWeight: "medium",
                            fontSize: "20px",
                            lineHeight: "24px"
                        },
                        heading: {
                            fontFamily: "heading",
                            lineHeight: "heading",
                            fontWeight: "heading"
                        },
                        display: {
                            fontFamily: "heading",
                            fontWeight: "heading",
                            lineHeight: "heading",
                            fontSize: [5, 6, 7]
                        },
                        caps: {
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                        },
                        h1: {
                            fontWeight: "semibold",
                            fontSize: [24, 28, 32],
                            lineHeight: ["30px", "32px", "40px"]
                        },
                        h2: {
                            fontWeight: "normal",
                            fontSize: 24,
                            lineHeight: "30px"
                        },
                        h3: {
                            fontWeight: "medium",
                            fontSize: 20,
                            lineHeight: "28px"
                        },
                        h4: {
                            fontWeight: "semibold",
                            fontSize: 16,
                            lineHeight: "22px"
                        },
                        h5: {
                            fontWeight: "semibold",
                            fontSize: 2
                        },
                        h6: {
                            fontWeight: "semibold",
                            fontSize: 1
                        },
                        label1: {
                            fontWeight: "medium",
                            fontSize: 20,
                            lineHeight: "26px"
                        },
                        label2: {
                            fontWeight: "medium",
                            fontSize: [16, 18],
                            lineHeight: ["22px", "24px"]
                        },
                        label3: {
                            fontWeight: ["normal", "medium"],
                            fontSize: 16,
                            lineHeight: "22px"
                        },
                        label4: {
                            fontWeight: "medium",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        label5: {
                            fontWeight: "normal",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        label6: {
                            fontWeight: "normal",
                            fontSize: 13,
                            lineHeight: "18px"
                        },
                        label7: {
                            fontWeight: "medium",
                            fontSize: 12,
                            lineHeight: "16px"
                        },
                        label8: {
                            fontWeight: "normal",
                            fontSize: 12,
                            lineHeight: "16px"
                        },
                        p1: {
                            fontWeight: "normal",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        p2: {
                            fontWeight: "normal",
                            fontSize: 0
                        }
                    }
                };
            var p = d.text,
                f = p.subtitle1,
                m = p.caption,
                h = p.body2,
                b = p.body1,
                g = {
                    variant: "searchDropdown.default",
                    " .bn-sdd-optionGroupLabel": {
                        px: "sm",
                        py: "xxs",
                        height: "28px"
                    },
                    ".bn-sdd-optionGroupText": (0, n.A)({}, m),
                    " .bn-sdd-option": {
                        maxHeight: "40px",
                        px: "sm",
                        fontSize: "sm",
                        lineHeight: "20px"
                    },
                    " .bn-sdd-value": {
                        minHeight: "32px",
                        pl: "ls",
                        pr: "md",
                        py: "ls"
                    },
                    " .bn-sdd-noResults": {
                        p: "ls",
                        fontSize: "sm",
                        color: "t.primary"
                    },
                    " .bn-sdd-innerInputContainer": {
                        px: "ls",
                        py: "xs",
                        width: "100%"
                    },
                    " .bn-sdd-icon": {
                        cursor: "pointer",
                        verticalAlign: "middle"
                    }
                };
            const v = {
                searchDropdown: {
                    default: {
                        position: "relative",
                        outline: "none",
                        ".bn-sdd-dropdown": {
                            position: "absolute",
                            zIndex: "dropdown",
                            transition: "height 0.2s ease",
                            bg: "popupBg",
                            boxShadow: "elevation2",
                            borderRadius: "default"
                        },
                        ".bn-sdd-list": {
                            padding: 0,
                            overflowY: "scroll",
                            py: "minor",
                            borderBottomLeftRadius: "default",
                            borderBottomRightRadius: "default"
                        },
                        ".bn-sdd-optionGroupLabel": {
                            color: "t.third"
                        },
                        ".bn-sdd-option": {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            alignItems: "center"
                        },
                        ".bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        }
                    },
                    drawer: {
                        px: "md",
                        bg: "modal.bg",
                        position: "relative",
                        flexDirection: "column",
                        width: "100%",
                        borderTopLeftRadius: "xlarge",
                        borderTopRightRadius: "xlarge",
                        ".bn-sdd-list": {
                            pl: 0,
                            listStyle: "none",
                            overflowY: "auto",
                            py: "minor"
                        },
                        ".bn-sdd-optionGroupLabel": {
                            color: "t.third"
                        },
                        ".bn-sdd-option": {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            alignItems: "center"
                        },
                        ".bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        },
                        ".bn-sdd-noResults": {
                            p: "ls",
                            fontSize: "sm",
                            color: "t.primary"
                        }
                    },
                    outline: g,
                    filled: g,
                    line: g,
                    clear: g,
                    normal: g,
                    emphasizedGrouping: {
                        variant: "searchDropdown.default",
                        " .bn-sdd-optionGroupLabel": {
                            px: "sm",
                            py: "s",
                            "&.is-active .bn-sdd-optionGroupText": {
                                color: "t.yellow"
                            },
                            "&:hover": {
                                bg: "bg3"
                            },
                            "&:active": {
                                bg: "bg2"
                            },
                            "&.disabled": {
                                " .bn-sdd-optionGroupText": (0, n.A)({
                                    color: "t.disabled"
                                }, b)
                            }
                        },
                        " .bn-sdd-optionGroupText": (0, n.A)({
                            color: "t.primary"
                        }, f),
                        " .bn-sdd-option-item": {
                            maxHeight: "40px"
                        },
                        " .bn-sdd-option": (0, n.A)({
                            maxHeight: "40px",
                            px: "sm"
                        }, h),
                        " .bn-sdd-value": {
                            minHeight: "32px",
                            pl: "ls",
                            pr: "md",
                            py: "ls"
                        },
                        " .bn-sdd-noResults": {
                            p: "ls",
                            fontSize: "sm",
                            color: "t.primary"
                        },
                        " .bn-sdd-innerInputContainer": {
                            px: "ls",
                            py: "xs",
                            width: "100%"
                        },
                        " .bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        }
                    }
                }
            };
            var y = {
                py: "xs",
                px: ["sm", "md"],
                fontWeight: "medium",
                fontSize: ["sm", "md"],
                lineHeight: ["20px", "24px"],
                marginRight: ["sm", "md"],
                userSelect: "none",
                color: "t.third",
                borderRadius: "default"
            };
            const x = {
                tabs: {
                    default: {
                        tab: {
                            padding: "10px 90px",
                            height: "100%",
                            boxSizing: "border-box",
                            userSelect: "none",
                            "&.active": {
                                borderBottomWidth: "tiny",
                                borderBottomStyle: "solid",
                                borderBottom: "tiny solid",
                                borderColor: "primary",
                                color: "primary"
                            }
                        }
                    },
                    standard: {
                        container: {
                            boxShadow: "inset 0px -1px 0px currentColor",
                            color: "line"
                        },
                        normal: {
                            padding: "14px 0px",
                            marginRight: "28px",
                            boxSizing: "border-box",
                            userSelect: "none",
                            lineHeight: "20px",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "t.third",
                            "&.active": {
                                boxShadow: "inset 0px -2px 0px #F0B90B",
                                color: "t.primary"
                            },
                            ":hover": {
                                color: "t.primary"
                            }
                        },
                        large: {
                            variant: "tabs.standard.normal",
                            padding: "20px 0px",
                            marginRight: "28px",
                            lineHeight: "24px",
                            fontSize: "md"
                        },
                        small: {
                            variant: "tabs.standard.normal",
                            padding: "8px 0px"
                        }
                    },
                    vertical: {
                        layout: {
                            display: "flex"
                        },
                        container: {
                            color: "line",
                            display: "flex",
                            flexDirection: "column",
                            width: "fit-content"
                        },
                        normal: {
                            padding: "10px 18px",
                            boxSizing: "border-box",
                            userSelect: "none",
                            lineHeight: "20px",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "t.third",
                            "&.active": {
                                boxShadow: "inset 2px 0px 0px #F0B90B",
                                color: "t.primary"
                            },
                            ":hover": {
                                color: "t.primary"
                            }
                        },
                        large: {
                            variant: "tabs.vertical.normal",
                            margin: "4px 0",
                            "&.active": {
                                boxShadow: "inset 4px 0px 0px #F0B90B",
                                color: "t.primary"
                            }
                        }
                    },
                    flow: {
                        tab: {
                            fontWeight: "medium",
                            fontSize: ["14px", "16px"],
                            lineHeight: ["20px", "24px"],
                            letterSpacing: [".16px", ".32px"],
                            padding: ["8px 16px", "8px 24px"],
                            marginRight: "16px",
                            userSelect: "none",
                            color: "t.primary",
                            borderRadius: "extraLarger",
                            ":hover": {
                                bg: "bg3"
                            },
                            "&.active": {
                                bg: "tabs.flowBg",
                                color: "tabs.flowText"
                            }
                        }
                    },
                    filled: {
                        tab: {
                            primary: (0, i.A)((0, n.A)({}, y), {
                                "&.active": {
                                    bg: "badgeYellowBg",
                                    color: "t.yellow"
                                }
                            }),
                            secondary: (0, i.A)((0, n.A)({}, y), {
                                "&.active": {
                                    bg: "bg3",
                                    color: "t.primary"
                                }
                            })
                        }
                    },
                    secondary: {
                        container: {
                            bg: "bg3",
                            borderRadius: "default",
                            height: "24px",
                            width: "fit-content"
                        },
                        tab: {
                            fontSize: "xs",
                            lineHeight: "16px",
                            px: "minor",
                            py: "minor",
                            userSelect: "none",
                            color: "t.primary",
                            borderRadius: "default",
                            minWidth: "82px",
                            textAlign: "center",
                            "&.active": {
                                bg: "primary",
                                color: "bg5",
                                fontWeight: "medium"
                            }
                        }
                    },
                    "trade-next": {
                        tab: {
                            padding: "16px 1px 10px 1px",
                            marginRight: "sm",
                            height: "100%",
                            boxSizing: "border-box",
                            userSelect: "none",
                            fontSize: "sm",
                            color: "t.secondary",
                            "&.active": {
                                borderBottom: "2px solid",
                                borderColor: "primary",
                                color: "t.primary",
                                fontWeight: "semibold"
                            }
                        }
                    }
                }
            };
            var w = {
                default: {
                    borderBottom: "1px solid transparent",
                    borderColor: "line",
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {},
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "md",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        mr: "minor",
                        fontSize: "sm"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mx: "minor",
                        fontSize: "sm"
                    }
                },
                helperText: {
                    default: {
                        variant: "text.body2"
                    },
                    info: {
                        variant: "textField.helperText.default",
                        color: "t.third"
                    },
                    error: {
                        variant: "textField.helperText.default",
                        color: "error"
                    }
                },
                outline: {
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    "& .bn-input-label": {
                        fontSize: "xs"
                    },
                    ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {
                        bg: "line",
                        "> input": {
                            color: "t.disabled"
                        }
                    },
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "xs",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        fontSize: "sm"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mx: "minor",
                        fontSize: "sm"
                    }
                },
                outlineLarge: {
                    variant: "textField.outline",
                    "&  input": {
                        px: "ls"
                    }
                },
                inline: {
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {
                        bg: "line",
                        "> input": {
                            color: "t.disabled"
                        }
                    },
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "minor",
                        textAlign: "right",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        ml: "xs",
                        minWidth: "48px",
                        fontSize: "sm",
                        color: "t.secondary"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mr: "xs",
                        fontSize: "sm",
                        color: "t.third"
                    },
                    "& .bn-input-tooltip": {
                        position: "absolute",
                        bottom: "110%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: "tooltip"
                    },
                    "& .bn-input-tooltip-arrow": {
                        position: "absolute",
                        width: "8px",
                        height: "8px",
                        left: "50%",
                        bottom: "-4px",
                        transform: "translateX(-50%) rotate(45deg)",
                        bg: "#FFFFFF",
                        boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.08)"
                    },
                    "& .bn-input-tooltip-content": {
                        boxShadow: "card",
                        borderRadius: "default",
                        p: "xxs",
                        bg: "#FFFFFF",
                        fontSize: "sm",
                        lineHeight: "18px",
                        color: "t.secondary"
                    }
                }
            };
            const k = {
                textField: w,
                textFieldV2: (0, i.A)((0, n.A)({}, w), {
                    line: {
                        border: "1px solid transparent",
                        borderColor: "line",
                        borderRadius: "default",
                        bg: "transparent",
                        ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                            borderColor: "primary"
                        },
                        "&.bn-input-status-focus": {
                            borderColor: "primary"
                        },
                        "&.bn-input-status-disabled": {
                            bg: "line",
                            "> input": {
                                color: "t.disabled"
                            }
                        },
                        "&.bn-input-status-error": {
                            borderColor: "error"
                        },
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            px: "ls",
                            "&:-webkit-autofill": {
                                transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                            }
                        },
                        "& .bn-input-prefix": {
                            flexShrink: "0",
                            fontSize: "14px"
                        },
                        "& .bn-input-suffix": {
                            flexShrink: "0",
                            mx: "minor",
                            fontSize: "sm"
                        }
                    },
                    filled: {
                        bg: "bg3",
                        borderRadius: "default",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "transparent",
                        "&.bn-input-status-focus": {
                            bg: "transparent",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "primary"
                        },
                        "&.bn-input-status-disabled": {
                            bg: "line",
                            opacity: .7,
                            "> input": {
                                color: "t.disabled"
                            }
                        },
                        "&.bn-input-status-error": {
                            borderColor: "error"
                        },
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            borderRadius: "default",
                            px: "ls",
                            "&:-webkit-autofill": {
                                transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                            }
                        },
                        "& .bn-input-prefix": {
                            flexShrink: "0",
                            mr: "minor",
                            fontSize: "sm"
                        },
                        "& .bn-input-suffix": {
                            flexShrink: "0",
                            mx: "minor",
                            fontSize: "sm"
                        }
                    },
                    transparent: {
                        variant: "textField.line",
                        border: "none"
                    }
                })
            };
            var S = {
                borderRadius: "default",
                boxShadow: "tooltip",
                bg: "toast.bg",
                alignItems: "flex-start",
                justifyContent: "space-between",
                maxWidth: ["343px", "360px"],
                minWidth: "288px",
                minHeight: "56px"
            };
            const B = {
                toast: {
                    default: (0, i.A)((0, n.A)({}, S), {
                        color: "t.primary",
                        lineHeight: "18px",
                        fontSize: "sm",
                        maxHeight: "178px",
                        p: "sm"
                    }),
                    error: {
                        variant: "toast.default"
                    },
                    warning: {
                        variant: "toast.default"
                    },
                    success: {
                        variant: "toast.default"
                    },
                    info: {
                        variant: "toast.default"
                    },
                    tips: {
                        variant: "toast.default"
                    },
                    reset: (0, i.A)((0, n.A)({}, S), {
                        ".bn-notification-body-wrapper": {
                            maxHeight: "unset",
                            ".bn-notification-msg-wrapper": {
                                maxHeight: "unset"
                            }
                        }
                    })
                }
            };
            var _ = {
                px: "md",
                bg: "modal.bg",
                position: "relative",
                flexDirection: "column"
            };
            const A = {
                modal: {
                    default: (0, i.A)((0, n.A)({}, _), {
                        borderRadius: "large"
                    }),
                    drawer: (0, i.A)((0, n.A)({}, _), {
                        width: "100%",
                        borderTopLeftRadius: "xlarge",
                        borderTopRightRadius: "xlarge"
                    })
                },
                modaltitle: {
                    default: {
                        position: "relative",
                        height: "64px",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between"
                    },
                    center: {
                        position: "relative",
                        height: "64px",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                        ".modaltitle": {
                            flex: "1",
                            justifyContent: "center"
                        }
                    }
                },
                modalfooter: {
                    default: {
                        gap: "sm",
                        mb: "md",
                        width: "100%",
                        justifyContent: "flex-end",
                        ".btn": {
                            flex: "1"
                        }
                    },
                    leftReverseOrder: {
                        mb: "md",
                        gap: "sm",
                        justifyContent: "flex-start",
                        ".btn": {
                            "&:nth-of-type(2)": {
                                order: 1
                            },
                            "&:first-of-type": {
                                order: 2
                            }
                        }
                    },
                    column: {
                        flexDirection: "column-reverse",
                        mb: "md",
                        gap: "xs",
                        width: "100%",
                        justifyContent: "flex-end",
                        ".btn": {
                            flex: "1"
                        }
                    }
                }
            };
            var U = {
                    minWidth: "343px",
                    height: "72px",
                    p: "ls",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                },
                T = {
                    minWidth: "343px",
                    height: "40px",
                    p: "xxs",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                };
            const C = {
                    uploader: {
                        common: {
                            color: "t.primary",
                            fontSize: "sm",
                            lineHeight: "20px",
                            wordBreak: "keep-all",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            appearance: "none",
                            userSelect: "none",
                            cursor: "pointer",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            boxSizing: "border-box",
                            textAlign: "center",
                            textDecoration: "none",
                            outline: "none",
                            backgroundColor: "bg3",
                            fontFamily: "inherit",
                            "&:hover": {
                                backgroundColor: "line"
                            }
                        },
                        drag: {
                            default: {
                                position: "relative",
                                variant: "uploader.common",
                                minWidth: "164px",
                                maxWidth: "164px",
                                height: "164px",
                                py: "ls",
                                color: "t.secondary"
                            },
                            waiting: {
                                variant: "uploader.drag.default"
                            },
                            success: {
                                variant: "uploader.drag.default"
                            },
                            loading: {
                                variant: "uploader.drag.default"
                            },
                            error: {
                                variant: "uploader.drag.default",
                                color: "error"
                            },
                            pending: {
                                variant: "uploader.drag.default"
                            }
                        },
                        click: {
                            default: {
                                variant: "uploader.common",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            normal: {
                                waiting: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "s",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, U),
                                error: (0, n.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, U),
                                loading: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, U),
                                pending: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, U)
                            },
                            small: {
                                waiting: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "xxs",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, T),
                                error: (0, n.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, T),
                                loading: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, T),
                                pending: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, T)
                            }
                        }
                    }
                },
                E = (0, n.A)({}, C, {
                    alertV2: {
                        default: {
                            color: "dark.text",
                            borderRadius: "default",
                            fontSize: 1
                        },
                        error: {
                            variant: "alertV2.default",
                            color: "alertV2.errorColor",
                            bg: "alertV2.errorBg"
                        },
                        warning: {
                            variant: "alertV2.default",
                            color: "alertV2.warningColor",
                            bg: "alertV2.warningBg"
                        },
                        success: {
                            variant: "alertV2.default",
                            color: "alertV2.successColor",
                            bg: "alertV2.successBg"
                        },
                        info: {
                            variant: "alertV2.default",
                            color: "alertV2.infoColor",
                            bg: "alertV2.infoBg"
                        }
                    }
                }, {
                    alert: {
                        default: {
                            color: "dark.text",
                            borderRadius: "default",
                            lineHeight: "18px",
                            fontSize: 1
                        },
                        error: {
                            variant: "alert.default",
                            color: "error",
                            bg: "alert.errorBg"
                        },
                        warning: {
                            variant: "alert.default",
                            color: "t.yellow",
                            bg: "alert.warningBg"
                        },
                        success: {
                            variant: "alert.default",
                            color: "secondary",
                            bg: "alert.successBg"
                        },
                        info: {
                            variant: "alert.default",
                            color: "t.blue",
                            bg: "alert.infoBg"
                        },
                        tips: {
                            variant: "alert.default",
                            color: "t.yellow",
                            bg: "alert.warningBg"
                        }
                    }
                }, {
                    button: {
                        default: {
                            wordBreak: "keep-all",
                            color: "bg5",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            "&:disabled": {
                                cursor: "not-allowed",
                                backgroundImage: "none",
                                backgroundColor: "line",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active)": {
                                boxShadow: "none"
                            },
                            "&.inactive": {
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        primary: {
                            variant: "button.default",
                            backgroundImage: "none",
                            backgroundColor: "primaryHover",
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                boxShadow: "none",
                                backgroundImage: "none",
                                backgroundColor: "primaryHover",
                                opacity: .9
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundImage: "none",
                                backgroundColor: "primary"
                            },
                            ":disabled:not(.inactive)": {
                                bg: "line",
                                color: "t.disabled",
                                cursor: "not-allowed"
                            },
                            "&.inactive": {
                                bg: "primaryHover",
                                opacity: .3,
                                color: "bg5",
                                cursor: "not-allowed"
                            }
                        },
                        secondary: {
                            variant: "button.default",
                            backgroundColor: "line",
                            color: "t.primary",
                            backgroundImage: "none",
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                boxShadow: "none",
                                backgroundImage: "none",
                                bg: "bg3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                boxShadow: "none",
                                backgroundColor: "t.disabled",
                                color: "t.primary"
                            },
                            "&:disabled": {
                                cursor: "not-allowed",
                                boxShadow: "none",
                                color: "t.disabled",
                                bg: "bg3"
                            },
                            "&.inactive": {
                                backgroundColor: "line",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        quiet: {
                            variant: "button.default",
                            color: "t.primary",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "badgeYellowBg"
                            },
                            "&.inactive": {
                                opacity: .7,
                                cursor: "not-allowed"
                            }
                        },
                        text: {
                            variant: "button.default",
                            color: "bg5",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "badgeYellowBg"
                            },
                            "&.inactive": {
                                opacity: .7,
                                cursor: "not-allowed"
                            }
                        },
                        round: {
                            variant: "button.default",
                            color: "t.yellow",
                            bg: "bg3",
                            borderRadius: "xlarge",
                            ":disabled:not(.inactive)": {
                                bg: "bg3",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary",
                                bg: "bg3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "line"
                            },
                            "&.inactive": {
                                bg: "bg3",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        graytype: {
                            variant: "button.default",
                            color: "t.white",
                            bg: "t.secondary",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                bg: "t.primary",
                                color: "popupBg"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                bg: "t.primary",
                                color: "popupBg"
                            },
                            "&.inactive": {
                                bg: "bg4",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        }
                    },
                    buttons: {
                        default: {
                            default: {
                                variant: "button.primary"
                            },
                            primary: {
                                variant: "button.primary"
                            },
                            flatprimary: {
                                variant: "button.primary"
                            },
                            flatpure: {
                                variant: "button.secondary"
                            },
                            secondary: {
                                variant: "button.secondary"
                            },
                            buy: {
                                variant: "button.default",
                                bg: "buy",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "buyHover"
                                },
                                "&:active:not(:disabled)": {
                                    boxShadow: "none",
                                    bg: "buy"
                                }
                            },
                            sell: {
                                variant: "button.default",
                                bg: "sell",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "sellHover"
                                },
                                "&:active:not(:disabled)": {
                                    boxShadow: "none",
                                    bg: "t.sell"
                                }
                            },
                            negative: {
                                variant: "button.default",
                                bg: "error",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "error"
                                }
                            },
                            destructive: {
                                variant: "button.default",
                                bg: "error",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "error"
                                }
                            }
                        },
                        quiet: {
                            primary: {
                                variant: "button.quiet",
                                color: "t.yellow"
                            },
                            secondary: {
                                variant: "button.quiet"
                            },
                            negative: {
                                variant: "button.quiet",
                                color: "negative"
                            }
                        },
                        text: {
                            primary: {
                                variant: "button.quiet",
                                color: "t.yellow"
                            },
                            secondary: {
                                variant: "button.quiet"
                            },
                            negative: {
                                variant: "button.quiet",
                                color: "negative"
                            }
                        },
                        round: {
                            primary: {
                                variant: "button.round"
                            },
                            default: {
                                variant: "button.round"
                            }
                        },
                        graytype: {
                            primary: {
                                variant: "button.graytype"
                            },
                            default: {
                                variant: "button.graytype"
                            }
                        },
                        primary: {
                            default: {
                                variant: "button.primary"
                            }
                        }
                    }
                }, {
                    variants: {
                        inputCode: {
                            width: "inputCode",
                            marginRight: "xs"
                        },
                        avatar: {
                            width: "avatar",
                            height: "avatar",
                            borderRadius: "circle"
                        },
                        card: {
                            p: "xs",
                            bg: "background",
                            boxShadow: "card",
                            borderRadius: "default"
                        },
                        standardLink: {
                            fontSize: "sm",
                            color: "t.yellow"
                        },
                        defaultLink: {
                            fontSize: "xs",
                            color: "t.yellow",
                            textDecoration: "none"
                        },
                        secondaryLink: {
                            fontSize: "xs",
                            color: "t.primary"
                        },
                        link: {
                            color: "primary"
                        },
                        nav: {
                            fontSize: "sm",
                            fontWeight: "bold",
                            display: "inline-block",
                            p: "xs",
                            color: "inherit",
                            textDecoration: "none",
                            ":hover,:focus,.active": {
                                color: "primary"
                            }
                        },
                        badge: {
                            fontSize: "xs",
                            color: "#fff",
                            bg: "error",
                            fontWeight: "semibold",
                            borderRadius: "circle"
                        },
                        mask: {
                            bg: "rgba(0, 0, 0, 0.5)",
                            zIndex: "mask"
                        },
                        icon: {
                            fill: "t.primary"
                        },
                        balanceChart: {
                            fill: "bg1"
                        },
                        tooltip: {
                            variant: "text.caption",
                            fontSize: "xs",
                            color: "t.white",
                            backgroundColor: "bg4",
                            borderRadius: "default",
                            py: "xs",
                            px: "ls",
                            filter: "drop-shadow(0px 3px 6px rgba(20,21,26, 0.08)) drop-shadow(0px 7px 14px rgba(71,77,87,0.08)) drop-shadow(0px 0px 1px rgba(20,21,26,0.1))",
                            ".bn-tooltip-arrow::before": {
                                backgroundColor: "bg4"
                            }
                        }
                    }
                }, {
                    dividers: {
                        primary: {
                            bg: "lines.light"
                        },
                        reverse: {
                            bg: "lines.dark"
                        },
                        selected: {
                            bg: "primary"
                        },
                        disabled: {
                            bg: "lines.light"
                        },
                        error: {
                            bg: "error"
                        }
                    }
                }, {
                    forms: {
                        placeholder: {
                            color: "t.secondary",
                            fontSize: "md"
                        },
                        label: {
                            color: "t.secondary",
                            fontSize: "sm"
                        },
                        selectedLabel: {
                            variant: "forms.label",
                            color: "primary"
                        },
                        disabledLabel: {
                            variant: "forms.label",
                            color: "t.muted"
                        },
                        errorLabel: {
                            variant: "forms.label",
                            color: "error"
                        },
                        field: {
                            borderColor: "lightgray",
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 2px ".concat(e.colors.primary)
                                }
                            }
                        },
                        input: {
                            variant: "forms.field"
                        },
                        select: {
                            variant: "forms.field"
                        },
                        textarea: {
                            variant: "forms.field",
                            ":disabled": {
                                bg: "line",
                                cursor: "not-allowed"
                            }
                        },
                        radio: {},
                        slider: {
                            bg: "lightgray"
                        }
                    }
                }, {
                    textarea: {
                        grayflat: {
                            px: "xs",
                            py: "ls",
                            bg: "bg3",
                            fontSize: "md",
                            lineHeight: "body",
                            borderRadius: "default",
                            border: "none",
                            "&::placeholder": {
                                color: "t.placeholder"
                            },
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.primary)
                                }
                            },
                            "&.bn-textarea-error": {
                                borderColor: "error",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.error)
                                }
                            }
                        },
                        line: {
                            px: "xs",
                            py: "ls",
                            bg: "transparent",
                            fontSize: "md",
                            lineHeight: "body",
                            borderRadius: "default",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            "&::placeholder": {
                                color: "t.placeholder"
                            },
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.primary)
                                }
                            },
                            "&.bn-textarea-error": {
                                borderColor: "error",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.error)
                                }
                            }
                        }
                    }
                }, {
                    hint: {
                        default: {
                            fontSize: "sm",
                            color: "t.primary",
                            "&::before": {
                                mr: "xs"
                            }
                        },
                        circle: {
                            variant: "hint.default",
                            "&::before": {
                                borderRadius: "circle",
                                mr: "xs"
                            }
                        }
                    }
                }, {
                    inputs: {
                        primary: {
                            bg: "transparent",
                            color: "t.primary",
                            fontSize: "md",
                            "&:disabled": {
                                color: "t.muted",
                                "-webkit-text-fill-color": "currentcolor",
                                opacity: 1
                            },
                            "&:disabled + label": {
                                variant: "forms.disabledLabel"
                            },
                            "&:disabled ~ .bn-input-divider": {
                                variant: "dividers.disabled"
                            },
                            "&:focus + label, &:active + label": {
                                variant: "forms.selectedLabel"
                            },
                            "&:focus ~ .bn-input-divider, &:active ~ .bn-input-divider": {
                                variant: "dividers.selected"
                            }
                        },
                        error: {
                            variant: "inputs.primary",
                            "& + label": {
                                variant: "forms.errorLabel"
                            },
                            "& ~ .bn-input-divider": {
                                variant: "dividers.error"
                            },
                            "&:focus + label": {
                                variant: "forms.errorLabel"
                            },
                            "&:focus ~ .bn-input-divider": {
                                variant: "dividers.error"
                            }
                        }
                    }
                }, k, {
                    listGrid: {
                        default: {
                            borderBottomColor: "line",
                            color: "t.third",
                            fontSize: "sm"
                        },
                        header: {
                            mt: "sm",
                            color: "t.primary",
                            fontSize: "md",
                            fontWeight: "medium",
                            padding: "0 10px 0 16px"
                        },
                        toggleIcon: {
                            color: "t.third",
                            fontSize: "minor",
                            verticalAlign: "middle"
                        },
                        leftHeader: {
                            variant: "text.body2",
                            marginRight: "md"
                        },
                        rightContent: {
                            variant: "text.body2",
                            color: "t.primary",
                            textAlign: "right"
                        },
                        checkbox: {
                            width: "26px",
                            "& svg": {
                                color: "icon",
                                size: "20px",
                                mt: "line"
                            }
                        }
                    }
                }, {
                    pagination: {
                        default: {
                            mx: "minor",
                            p: "0px",
                            bg: "transparent",
                            borderRadius: "default",
                            color: "t.secondary",
                            fontWeight: "normal",
                            "&:hover:not(:disabled)": {
                                bg: "line"
                            },
                            "&:disabled": {
                                cursor: "default"
                            }
                        },
                        current: {
                            variant: "pagination.default",
                            bg: "line",
                            color: "t.primary",
                            fontWeight: "medium"
                        }
                    }
                }, {
                    progress: {
                        outer: {
                            width: "100%",
                            height: 8,
                            borderRadius: "default",
                            bg: "lines.primary"
                        },
                        bar: {
                            borderRadius: "default",
                            background: function(e) {
                                return e.colors.primaryGradient
                            }
                        }
                    }
                }, u, {
                    tag: {
                        default: {
                            borderRadius: "default",
                            px: "xs",
                            py: "minor",
                            fontSize: "xs",
                            lineHeight: "16px",
                            bg: "tag.defaultBg",
                            color: "t.yellow"
                        },
                        blue: {
                            variant: "tag.default",
                            bg: "tag.blueBg",
                            color: "tag.blueTxt"
                        },
                        gray: {
                            variant: "tag.default",
                            bg: "tag.grayBg",
                            color: "tag.grayTxt"
                        },
                        green: {
                            variant: "tag.default",
                            bg: "tag.greenBg",
                            color: "tag.greenTxt"
                        },
                        red: {
                            variant: "tag.default",
                            bg: "tag.redBg",
                            color: "tag.redTxt"
                        }
                    }
                }, x, d, {
                    tabBarItem: {
                        primary: {
                            color: "t.third"
                        },
                        selected: {
                            color: "primary"
                        }
                    },
                    tabBar: {
                        default: {
                            bg: "background",
                            height: 56
                        }
                    }
                }, B, {
                    sideMenu: {
                        item: {
                            borderLeftWidth: "4px",
                            borderLeftColor: "primary",
                            cursor: "pointer",
                            alignItems: "center",
                            fontSize: 1,
                            ":hover": {
                                bg: "muted"
                            }
                        },
                        mainItem: {
                            variant: "sideMenu.item",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent",
                            height: "48px",
                            fontWeight: "medium",
                            "& > div": {
                                flexGrow: 1,
                                overflow: "hidden",
                                fontWeight: "medium",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            },
                            "& svg:first-of-type": {
                                flexShrink: 0,
                                marginLeft: "xs",
                                marginRight: "xs",
                                color: "icon"
                            }
                        },
                        activeMainItem: {
                            variant: "sideMenu.mainItem",
                            borderLeftColor: "primary",
                            bg: "muted"
                        },
                        activeLeftIcon: {
                            variant: "sideMenu.leftIcon",
                            color: "primary"
                        },
                        rightIcon: {
                            flexShrink: 0,
                            marginLeft: "minor",
                            marginRight: "sm",
                            color: "icon",
                            transition: "all 0.1s"
                        },
                        activeBlock: {
                            paddingLeft: "32px"
                        },
                        subItem: {
                            variant: "sideMenu.item",
                            pt: "xs",
                            pb: "xs",
                            minHeight: "40px",
                            wordBreak: "break-word",
                            fontWeight: "normal",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent"
                        },
                        activeSubItem: {
                            variant: "sideMenu.subItem",
                            bg: "muted",
                            fontWeight: "medium",
                            borderLeftColor: "primary"
                        }
                    }
                }, {
                    mobileMenu: {
                        container: {
                            bg: "black.header",
                            p: "sm"
                        },
                        noSubMenuContainer: {
                            variant: "mobileMenu.container",
                            pb: "xs"
                        },
                        tabs: {
                            height: "35px"
                        },
                        tab: {
                            marginRight: "md",
                            alignItems: "center",
                            color: "t.third",
                            "& >svg": {
                                marginRight: "minor"
                            },
                            "& >div": {
                                flexDirection: "column",
                                fontSize: "md",
                                lineHeight: 1.5,
                                position: "relative",
                                "& >div": {
                                    position: "absolute",
                                    bottom: "-2px",
                                    height: 2,
                                    width: "100%",
                                    bg: "primary"
                                }
                            }
                        },
                        activeTab: {
                            variant: "mobileMenu.tab",
                            "& > svg": {
                                color: "primary"
                            },
                            "& > div": {
                                color: "#fff"
                            }
                        },
                        dropdownContainer: {
                            width: "100%",
                            zIndex: 11,
                            whiteSpace: "nowrap",
                            fontSize: 1
                        },
                        dropdownBox: {
                            marginTop: "-1px",
                            bg: "background",
                            width: "100%",
                            borderRadius: "0 0 2px 2px",
                            color: "#212833"
                        },
                        dropdown: {
                            p: "0 xp",
                            lineHeight: "40px",
                            height: "40px",
                            bg: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontSize: "sm",
                            borderRadius: "small"
                        },
                        selectedDropDown: {
                            variant: "mobileMenu.dropdown",
                            bg: "#F5F5F5",
                            fontWeight: "medium"
                        },
                        dropdownInput: {
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            height: "40px",
                            bg: "#fff",
                            borderRadius: "small",
                            padding: "0 md",
                            color: "#212833",
                            fontWeight: "medium",
                            "& >svg": {
                                marginLeft: "minor",
                                flexShrink: 0,
                                color: "icon"
                            },
                            "& >div": {
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            }
                        }
                    }
                }, {
                    twoFactor: {
                        pointerText: {
                            cursor: "pointer",
                            textAlign: "center",
                            marginTop: "plus",
                            fontWeight: "normal",
                            fontSize: 1
                        },
                        lable: {
                            fontWeight: "normal",
                            fontSize: 1,
                            lineHeight: "32px",
                            marginBottom: "md"
                        },
                        tabItem: {
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [172, 192]
                        },
                        tabItemSingle: {
                            borderBottom: "2px solid",
                            borderColor: "primary",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [344, 384]
                        },
                        loading: {
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "lg",
                            color: "t.third",
                            fontSize: "2",
                            height: "100%",
                            width: "100%",
                            zIndex: "1",
                            userSelect: "none",
                            backgroundColor: "rgba(255, 255, 255, 0.9)"
                        },
                        error: {
                            color: "accent",
                            fontSize: "0",
                            marginTop: "minor"
                        },
                        googleActive: {
                            transform: ["translate3d(0px, 0px, 0px)"]
                        },
                        smsActive: {
                            transform: ["translate3d(172px, 0px, 0px)", "translate3d(192px, 0px, 0px)"]
                        }
                    },
                    Ensure2FA: {
                        title: {
                            color: "text",
                            fontWeight: "medium",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        },
                        desc: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        }
                    },
                    Enable2FA: {
                        wrap: {
                            width: [344, 384],
                            height: "342px",
                            position: "relative",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        title: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: "296px",
                            textAlign: "center",
                            lineHeight: "18px"
                        },
                        card: {
                            width: "160px",
                            height: "64px",
                            border: "1px solid #EAECEF",
                            borderRadius: "4px",
                            margin: "minor",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            boxSizing: "content-box",
                            cursor: "pointer",
                            "&:hover": {
                                borderColor: "primary"
                            },
                            "&:active": {
                                backgroundColor: "#FBEAB6",
                                borderColor: "primary"
                            }
                        },
                        risk: {
                            color: "#F0B90A",
                            fontSize: "1",
                            lineHeight: "30px"
                        },
                        skip: {
                            color: "t.third",
                            fontSize: "1",
                            textDecoration: "underline",
                            cursor: "pointer"
                        },
                        cardWrap: {
                            margin: "40px 0"
                        },
                        icon: {
                            width: "42px",
                            height: "42px",
                            marginRight: "sm"
                        },
                        front: {
                            zIndex: "1",
                            visibility: "visible"
                        },
                        back: {
                            zIndex: "0",
                            visibility: "hidden"
                        }
                    },
                    Modal: {
                        wrap: {
                            py: [40],
                            width: [344, 384],
                            height: [342],
                            borderRadius: "default"
                        }
                    }
                }, {
                    inputCode: {
                        default: {
                            width: "100%",
                            justifyContent: "space-between",
                            "& > div:not(:last-child)": {
                                mr: "minor"
                            },
                            ".bn-inputCode-input": {
                                width: ["inputCodeMobile", "inputCode"]
                            },
                            ".bn-inputCode-input input": {
                                textAlign: "center",
                                bottom: "xs",
                                position: "relative",
                                fontSize: "md"
                            }
                        },
                        outlineLarge: {
                            variant: "inputCode.default",
                            ".bn-inputCode-input  input": {
                                bottom: "0px",
                                fontSize: "md"
                            },
                            ".bn-inputCode-input > div": {
                                width: "40px"
                            }
                        }
                    }
                }, {
                    safety: {
                        container: {
                            alignItems: "baseline",
                            "& > div": {
                                transform: "translateY(-2px)"
                            },
                            "& > label": {
                                fontSize: "xs",
                                ml: "minor"
                            }
                        },
                        level: {
                            width: "8px",
                            height: "3px",
                            borderRadius: "small",
                            mr: "minor",
                            bg: "muted"
                        }
                    }
                }, {
                    styledSlider: {
                        default: {
                            mt: "sm",
                            mb: "sm",
                            paddingLeft: "ls",
                            paddingRight: "ls",
                            width: "100%",
                            ".bn-slider-container": {
                                position: "relative",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "calc(100% - 14px)",
                                ml: "7px",
                                height: "25px",
                                "&:hover > label": {
                                    visibility: "visible",
                                    opacity: 1
                                }
                            },
                            ".bn-slider-available-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.line",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-progress-bar": {
                                bg: "slider.progressBar"
                            },
                            ".bn-slider-disabled-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.disabledBar",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-radio-button": {
                                position: "absolute",
                                width: "16px",
                                height: "16px",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "slider.tooltipText",
                                borderRadius: "default",
                                border: "4px solid",
                                borderColor: "slider.progressBar",
                                zIndex: 20,
                                cursor: "grab",
                                transition: "box-shadow 0.2s ease",
                                "&::after": {
                                    content: '""',
                                    display: "block",
                                    width: "16px",
                                    height: "16px",
                                    border: "2px solid",
                                    borderColor: "bg1",
                                    borderRadius: "default",
                                    background: "transparent",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)"
                                }
                            },
                            ".bn-slider-radio-tooltip": {
                                visibility: "hidden",
                                opacity: 0,
                                position: "absolute",
                                top: 0,
                                marginTop: "-24px",
                                padding: "2px 4px",
                                borderRadius: "small",
                                bg: "slider.progressBar",
                                color: "slider.tooltipText",
                                fontSize: 0,
                                verticalAlign: "top",
                                transform: "translateX(-50%)",
                                zIndex: 10,
                                userSelect: "none",
                                transition: "visibility 0.2s ease, opacity 0.2s ease"
                            },
                            ".bn-slider-stepper": {
                                boxSizing: "content-box",
                                position: "absolute",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "bg1",
                                color: "t.third",
                                width: "6px",
                                height: "6px",
                                borderRadius: "small",
                                border: "2px solid",
                                borderColor: "line",
                                zIndex: "10",
                                overflow: "visible",
                                cursor: "pointer",
                                ":hover": {
                                    bg: "line",
                                    borderColor: "bg1"
                                }
                            },
                            ".bn-slider-progress-stepper": {
                                bg: "slider.progressBar",
                                borderColor: "bg1",
                                ":hover": {
                                    bg: "slider.progressBar"
                                }
                            },
                            ".bn-slider-disabled-stepper": {
                                bg: "slider.disabledBar",
                                color: "slider.disabledBar",
                                ":hover": {
                                    bg: "slider.disabledBar"
                                }
                            },
                            ".bn-slider-scale": {
                                position: "absolute",
                                left: "20px",
                                top: "15px",
                                transform: "translateX(calc(-50% + 4px)) rotate(-45deg)",
                                fontSize: 1,
                                userSelect: "none"
                            }
                        },
                        primary: {
                            variant: "styledSlider.default",
                            " .bn-slider-progress-bar": {
                                bg: "primary"
                            },
                            " .bn-slider-radio-button": {
                                borderColor: "primary"
                            },
                            " .bn-slider-radio-tooltip": {
                                bg: "primary"
                            },
                            " .bn-slider-progress-stepper": {
                                bg: "primary"
                            }
                        }
                    }
                }, {
                    smartSlider: {
                        wrapper: {
                            mt: "sm",
                            mb: "sm",
                            width: "100%"
                        },
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "xxs",
                            height: "25px",
                            "&:hover > label": {
                                display: "block"
                            }
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "#48515D",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        disabledBar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            height: "4px",
                            bg: "#cccccc",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "#76808F",
                            opacity: "0.2",
                            borderRadius: "circle",
                            border: "2px solid",
                            zIndex: 20,
                            cursor: "grab"
                        },
                        tooltip: {
                            display: "none",
                            position: "absolute",
                            top: 0,
                            marginTop: "-18px",
                            padding: "1px 2px",
                            borderRadius: "small",
                            color: "#FFFFFF",
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "#656D7B",
                            borderRadius: "circle",
                            zIndex: "10",
                            overflow: "visible"
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }, {
                    tradeSlider: {
                        wrapper: {
                            mt: "sm",
                            mb: "sm",
                            width: "100%"
                        },
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "7px",
                            height: "25px",
                            "&:hover > label": {
                                visibility: "visible",
                                opacity: 1
                            },
                            "&:hover > .bn-tradeSlider-ratioButton": {
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.slider.ratioButton, ", 0 0 0 4px ").concat(e.colors.lines.primary)
                                }
                            }
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "lines.primary",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "slider.ratioButton",
                            borderRadius: "circle",
                            border: "3px solid",
                            zIndex: 20,
                            cursor: "grab",
                            transition: "box-shadow 0.2s ease"
                        },
                        tooltip: {
                            visibility: "hidden",
                            opacity: 0,
                            position: "absolute",
                            top: 0,
                            marginTop: "20px",
                            padding: "1px 2px",
                            borderRadius: 2,
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none",
                            bg: "transparent",
                            color: "slider.progress",
                            transition: "visibility 0.2s ease, opacity 0.2s ease"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "lines.primary",
                            borderRadius: "circle",
                            boxShadow: "0 0 0 2px",
                            color: "slider.ratioButton",
                            zIndex: "10",
                            overflow: "visible",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            "&:hover": {
                                width: "14px",
                                height: "14px"
                            }
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }, {
                    select: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: 10,
                            padding: 0,
                            transition: "height 0.2s ease",
                            background: "#FFFFFF",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {
                                background: "#F5F5F7"
                            }
                        }
                    }
                }, {
                    search: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            bg: "search.bg",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            bg: "search.bg",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {
                                backgroundColor: "search.hoverBg"
                            }
                        },
                        icon: {
                            cursor: "pointer",
                            color: "t.third",
                            verticalAlign: "middle"
                        }
                    }
                }, v, {
                    pureSelect: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            boxShadow: "tooltip",
                            borderRadius: "default",
                            cursor: "pointer",
                            bg: "popupBg"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        },
                        icon: {
                            color: "icon",
                            position: "absolute",
                            right: "10px",
                            top: "50%"
                        }
                    }
                }, {
                    breadcrumb: {
                        container: {
                            alignItems: "center",
                            pl: "plus",
                            pr: "plus",
                            height: "48px",
                            fontSize: 0,
                            color: "t.secondary"
                        },
                        splitter: {
                            ml: "xs",
                            mr: "xs",
                            lineHeight: 1,
                            color: "line"
                        }
                    },
                    breadcrumbLink: {
                        default: {
                            textDecoration: "none",
                            fontSize: "sm",
                            lineHeight: 1
                        }
                    }
                }, {
                    radio: {
                        default: {
                            variant: "text.label5",
                            display: "inline-block",
                            cursor: "pointer",
                            "& svg:hover": {
                                color: "primary"
                            },
                            "& svg:active": {
                                color: "primary"
                            }
                        },
                        disabled: {
                            variant: "text.label5",
                            display: "inline-block",
                            cursor: "not-allowed",
                            color: "t.disabled",
                            "& svg, & label": {
                                cursor: "not-allowed"
                            }
                        }
                    }
                }, {
                    mediaBox: {
                        default: {
                            width: ["100%", "384px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            px: "md",
                            borderRadius: "default",
                            bg: "#fff"
                        },
                        rwdContentBox: {
                            textAlign: "center",
                            width: ["100%", "100%", "736px"],
                            m: [0, "24px auto", "24px auto"],
                            px: "md",
                            py: "xp",
                            borderRadius: "default",
                            bg: "#fff",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadow: {
                            width: ["100%", "750px", "970px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            p: ["md", "40px", "40px"],
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        topShadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"],
                            mt: ["0", "100px", "100px"]
                        },
                        newDSdefault: {
                            width: ["100%", "400px", "432px"],
                            m: ["40px auto", "48px auto", "48px auto"],
                            px: ["sm", "md"],
                            bg: "#fff"
                        }
                    }
                }, {
                    twoFAThreeCode: {
                        default: {
                            width: "484px",
                            position: "relative",
                            maxWidth: "100%",
                            height: "100%",
                            flexDirection: "column",
                            p: "sm",
                            "&.dialog": {
                                width: "436px",
                                p: 0
                            },
                            "&.safeWrap": {
                                width: ["300px", "384px", "384px"],
                                p: 0,
                                ".bn-2fa-title": {
                                    fontSize: "plus",
                                    mt: "xs"
                                }
                            },
                            ".bn-2fa-title": {
                                textAlign: "center"
                            },
                            ".bn-2fa-info": {
                                textAlign: "center",
                                mt: "ls",
                                mb: "plus",
                                color: "t.third",
                                lineHeight: "16px",
                                height: "auto"
                            },
                            ".bn-2fa-info.bn-2fa-table-info": {
                                mb: "27px"
                            },
                            "&.dialog .bn-2fa-title": {
                                lineHeight: "64px",
                                fontSize: "20px",
                                textAlign: "left"
                            },
                            "&.dialog .bn-2fa-info": {
                                textAlign: "left",
                                mt: 0,
                                mb: 4
                            },
                            ".bn-2fa-link": {
                                color: "t.yellow",
                                fontSize: "14px",
                                lineHeight: "20px",
                                fontWeight: 500,
                                textDecoration: "none",
                                textAlign: "left",
                                mb: "md"
                            },
                            ".error .bn-2fa-field": {
                                borderColor: "toast.error"
                            },
                            ".bn-2fa-field": {
                                flex: 1
                            },
                            ".bn-2fa-field .bn-input-label": {
                                whiteSpace: "nowrap",
                                fontSize: "14px"
                            },
                            ".bn-2fa-fieldbutton": {
                                width: "104px",
                                ml: "xs",
                                "&.noCn": {
                                    flexDirection: "column",
                                    lineHeight: 1.15
                                },
                                "&:disabled": {
                                    color: "#D0980B"
                                },
                                "& .sub": {
                                    color: "t.third",
                                    fontSize: "xs",
                                    fontWeight: "normal"
                                }
                            },
                            ".bn-2fa-fieldInfo": {
                                mt: "minor",
                                mb: "20px",
                                lineHeight: "16px",
                                color: "t.third",
                                height: "auto",
                                "& .voiceGet": {
                                    color: "t.yellow",
                                    cursor: "pointer"
                                }
                            },
                            ".error .bn-2fa-fieldInfo": {
                                color: "toast.error"
                            },
                            ".bn-2fa-submit": {
                                mb: "md"
                            },
                            ".bn-2fa-fullscreenSubmit": {
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.06)",
                                p: "md"
                            },
                            ".bn-2fa-cell": {
                                width: "148px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                lineHeight: "18px",
                                padding: "16px",
                                border: "none",
                                ":hover": {
                                    bg: "bg3",
                                    cursor: "pointer"
                                }
                            },
                            ".bn-2fa-cell:nth-of-type(n+2)": {
                                ml: ["sm", "md", "md"]
                            },
                            ".bn-2fa-celltext": {
                                mt: "ls",
                                fontWeight: "medium",
                                whiteSpace: "break-spaces"
                            },
                            ".bn-2fa-nextHit": {
                                fontSize: "xs",
                                textDecoration: "none",
                                color: "t.yellow",
                                "&:hover": {
                                    color: "t.yellow"
                                },
                                cursor: "pointer",
                                alignSelf: "flex-end",
                                mb: 3
                            },
                            ".bn-2fa-tabGroup": {
                                mb: "md"
                            },
                            ".bn-2fa-switchChoice": {
                                textDecoration: "none",
                                mb: "md",
                                color: "t.yellow",
                                width: "auto",
                                display: "inline-block",
                                cursor: "pointer"
                            },
                            ".bn-2fa-cellIconWrap": {
                                position: "relative",
                                width: "48px",
                                height: "48px",
                                lineHeight: "20px"
                            },
                            ".bn-2fa-cellIcon": {
                                position: "absolute"
                            }
                        }
                    }
                }, {
                    card: {
                        default: {
                            p: "xs",
                            bg: "background",
                            boxShadow: "card",
                            borderRadius: "default"
                        }
                    }
                }, A, {
                    backTop: {
                        default: {
                            borderRadius: "circle",
                            width: "40px",
                            height: "40px",
                            bg: "t.primary",
                            opacity: .5,
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            zIndex: "backTop",
                            "&:hover": {
                                opacity: .7
                            },
                            ".backTop-arrow-icon": {
                                color: "bg1"
                            }
                        }
                    }
                }, {
                    table: {
                        dimhead: {
                            ".bn-table th": {
                                backgroundColor: "bg2"
                            }
                        },
                        purehead: {
                            ".bn-table th": {
                                backgroundColor: "bg1"
                            }
                        }
                    }
                }, {
                    carousel: {
                        dot: {
                            bar: {
                                ".slick-dots": {
                                    li: {
                                        position: "relative",
                                        display: "inline-block",
                                        "-webkit-box-flex": 0,
                                        "-ms-flex": "0 1 auto",
                                        flex: "0 1 auto",
                                        "-webkit-box-sizing": "content-box",
                                        boxSizing: "content-box",
                                        width: "16px",
                                        height: "3px",
                                        margin: "0 2px",
                                        marginRight: "3px",
                                        marginLeft: "3px",
                                        padding: 0,
                                        textAlign: "center",
                                        textIndent: "-999px",
                                        verticalAlign: "top",
                                        "-webkit-transition": "all 0.5s",
                                        transition: "all 0.5s",
                                        button: {
                                            display: "block",
                                            width: "100%",
                                            height: "3px",
                                            padding: 0,
                                            color: "transparent",
                                            fontSize: 0,
                                            background: "#fff",
                                            border: 0,
                                            borderRadius: "1px",
                                            outline: "none",
                                            cursor: "pointer",
                                            opacity: .3,
                                            "-webkit-transition": "all 0.5s",
                                            transition: "all 0.5s",
                                            "&:hover": {
                                                opacity: .75
                                            },
                                            "&:focus": {
                                                opacity: .75
                                            }
                                        },
                                        "&.slick-active": {
                                            width: "24px",
                                            button: {
                                                background: "#fff",
                                                opacity: 1
                                            },
                                            "&:hover": {
                                                opacity: 1
                                            },
                                            "&:focus": {
                                                opacity: 1
                                            }
                                        }
                                    },
                                    "&.slick-dots-bottom": {
                                        bottom: "12px"
                                    },
                                    "&.slick-dots-top": {
                                        top: "12px"
                                    }
                                },
                                "&.uikit-carousel-vertical": {
                                    ".slick-dots": {
                                        top: "50%",
                                        bottom: "auto",
                                        "-webkit-box-orient": "vertical",
                                        "-webkit-box-direction": "normal",
                                        "-ms-flex-direction": "column",
                                        flexDirection: "column",
                                        width: "3px",
                                        height: "auto",
                                        margin: 0,
                                        "-webkit-transform": "translateY(-50%)",
                                        transform: "translateY(-50%)",
                                        li: {
                                            width: "3px",
                                            height: "16px",
                                            margin: "4px 2px",
                                            verticalAlign: "baseline",
                                            "&.slick-active": {
                                                width: "3px",
                                                height: "24px",
                                                button: {
                                                    width: "3px",
                                                    height: "24px"
                                                }
                                            },
                                            button: {
                                                width: "3px",
                                                height: "16px"
                                            }
                                        },
                                        "&.slick-dots-left": {
                                            right: "auto",
                                            left: "12px"
                                        },
                                        "&.slick-dots-right": {
                                            right: "12px",
                                            left: "auto"
                                        }
                                    }
                                }
                            },
                            circle: {
                                ".slick-dots": {
                                    li: {
                                        position: "relative",
                                        display: "inline-block",
                                        "-webkit-box-flex": 0,
                                        "-ms-flex": "0 1 auto",
                                        flex: "0 1 auto",
                                        "-webkit-box-sizing": "content-box",
                                        boxSizing: "content-box",
                                        width: "8px",
                                        height: "3px",
                                        margin: "0 2px",
                                        marginRight: "3px",
                                        marginLeft: "3px",
                                        padding: 0,
                                        textAlign: "center",
                                        textIndent: "-999px",
                                        verticalAlign: "top",
                                        "-webkit-transition": "all 0.5s",
                                        transition: "all 0.5s",
                                        button: {
                                            display: "block",
                                            width: "100%",
                                            height: "8px",
                                            padding: 0,
                                            color: "transparent",
                                            fontSize: 0,
                                            backgroundColor: "line",
                                            border: 0,
                                            borderRadius: "8px",
                                            outline: "none",
                                            cursor: "pointer",
                                            "-webkit-transition": "all 0.5s",
                                            transition: "all 0.5s"
                                        },
                                        "&.slick-active": {
                                            width: "24px",
                                            button: {
                                                backgroundColor: "primary"
                                            }
                                        }
                                    }
                                },
                                "&.uikit-carousel-vertical": {
                                    ".slick-dots-left": {
                                        right: "auto",
                                        left: "12px"
                                    },
                                    ".slick-dots-right": {
                                        right: "12px",
                                        left: "auto"
                                    },
                                    ".slick-dots": {
                                        top: "50%",
                                        bottom: "auto",
                                        "-webkit-box-orient": "vertical",
                                        "-webkit-box-direction": "normal",
                                        "-ms-flex-direction": "column",
                                        flexDirection: "column",
                                        width: "8px",
                                        height: "auto",
                                        margin: 0,
                                        "-webkit-transform": "translateY(-50%)",
                                        transform: "translateY(-50%)",
                                        li: {
                                            width: "8px",
                                            height: "8px",
                                            margin: "4px 2px",
                                            verticalAlign: "baseline",
                                            button: {
                                                width: "8px",
                                                height: "8px"
                                            },
                                            "&.slick-active": {
                                                width: "8px",
                                                height: "24px",
                                                button: {
                                                    width: "8px",
                                                    height: "24px"
                                                }
                                            }
                                        },
                                        "&.slick-dots-bottom": {
                                            bottom: "12px"
                                        },
                                        "&.slick-dots-top": {
                                            top: "12px"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    formItem: {
                        default: {
                            width: "100%",
                            mb: "md"
                        },
                        label: {
                            variant: "text.body2",
                            width: "100%",
                            alignItems: "center",
                            mb: "minor",
                            color: "t.primary"
                        },
                        help_default: {
                            variant: "text.body2",
                            width: "100%",
                            mt: "minor",
                            color: "t.third"
                        },
                        help_error: {
                            variant: "formItem.help_default",
                            color: "t.sell"
                        },
                        help_warning: {
                            variant: "formItem.help_default",
                            color: "t.yellow"
                        },
                        content: {
                            width: "100%",
                            position: "relative",
                            minHeight: "12px",
                            "&.hide": {
                                height: 0,
                                minHeight: 0,
                                overflow: "hidden"
                            }
                        },
                        crowded: {
                            variant: "formItem.default",
                            display: "flex",
                            alignItems: "center"
                        },
                        crowdedContent: {
                            variant: "formItem.content",
                            flex: 1
                        }
                    }
                }),
                O = (0, n.A)({
                    colors: {
                        greys: {
                            switch: "#C1C6CD",
                            risk: "#EAECEF"
                        },
                        black: {
                            header: "#12161C",
                            footer: "#0B0E11",
                            text: "#212833"
                        },
                        header: {
                            text: "white",
                            bg: "#12161C",
                            dropdown: "#1E2126",
                            gray: "#848E9C",
                            black: "#212833"
                        }
                    },
                    fonts: {
                        heading: "inherit",
                        monospace: "Menlo, monospace"
                    },
                    breakpoints: ["768px", "1024px", "1280px"],
                    fontSizes: (0, i.A)((0, n.A)({}, [12, 14, 16, 20, 24, 28, 32]), {
                        xs: 12,
                        sm: 14,
                        md: 16,
                        minor: 18,
                        plus: 20,
                        xp: 24,
                        lg: 28,
                        xl: 32,
                        xxl: 40,
                        xxxl: 48,
                        xxxxl: 56
                    }),
                    fontWeights: {
                        extraLight: 200,
                        light: 300,
                        normal: 400,
                        regular: 400,
                        medium: 500,
                        semibold: 600,
                        bold: 700
                    },
                    lineHeights: {
                        body: 1.5,
                        heading: 1.25
                    },
                    space: (0, i.A)((0, n.A)({}, [0, 4, 8, 16, 24, 32, 48, 64, 80]), {
                        line: 1,
                        tiny: 2,
                        minor: 4,
                        xxs: 6,
                        xs: 8,
                        s: 10,
                        ls: 12,
                        sm: 16,
                        md: 24,
                        plus: 32,
                        xp: 40,
                        lg: 48,
                        xl: 64,
                        xxl: 80
                    }),
                    sizes: {
                        avatar: 48,
                        inputCode: 44,
                        inputCodeMobile: 40
                    },
                    radii: {
                        small: 2,
                        default: 4,
                        large: 6,
                        extra: 8,
                        larger: 10,
                        xlarge: 16,
                        extraLarger: 20,
                        xxlarge: 26,
                        circle: 99999
                    },
                    shadows: {
                        card: " 0px 1px 2px rgba(20,21,26,0.04), 0px 3px 6px rgba(71,77,87,0.04), 0px 0px 1px rgba(20,21,26,0.1)",
                        tooltip: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        calendar: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        dialog: "0px 8px 16px rgba(20,21,26,0.16), 0px 16px 32px rgba(71,77,87,0.16), 0px 0px 1px rgba(20,21,26,0.1)",
                        area: "0px 0px 20px rgba(0, 0, 0, 0.08)",
                        dropdown: "0px 8px 16px rgba(24, 26, 32, 0.16)"
                    },
                    zIndices: {
                        mask: 10,
                        menu: 1e3,
                        header: 1001,
                        dropdown: 1100,
                        modal: 1200,
                        backTop: 1225,
                        calendar: 1250,
                        mobileDatePopup: 1275,
                        notification: 1300,
                        alert: 1350,
                        tooltip: 1400,
                        drawer: 9999
                    },
                    styles: {
                        root: {
                            fontWeight: "body",
                            lineHeight: "body"
                        }
                    }
                }, E)
        },
        "0vap": (e, t, r) => {
            "use strict";
            r.d(t, {
                D9: () => i,
                Oh: () => n,
                wL: () => a,
                wv: () => s,
                z1: () => o
            });
            var n = {
                    0: "#FFFFFF",
                    5: "#FAFAFA",
                    10: "#F5F5F5",
                    50: "#EAECEF",
                    100: "#D8DCE1",
                    200: "#B7BDC6",
                    250: "#929AA5",
                    300: "#848E9C",
                    400: "#707A8A",
                    500: "#5E6673",
                    600: "#474D57",
                    700: "#2B3139",
                    800: "#1E2329",
                    900: "#181A20",
                    1e3: "#0B0E11"
                },
                i = {
                    5: "#FFFDE6",
                    10: "#FEF6D8",
                    50: "#FFEF87",
                    100: "#FCD535",
                    200: "#F0B90B",
                    300: "#C99400",
                    400: "#A37200",
                    500: "#8D5F02",
                    600: "#6A4403",
                    700: "#3C2601",
                    800: "#281A00"
                },
                o = {
                    400: "#328DFD",
                    600: "#1D53AB"
                },
                a = {
                    5: "#F2FFF7",
                    10: "#E6FFF1",
                    50: "#B5FFD9",
                    100: "#85F2BE",
                    200: "#5AE6A7",
                    300: "#32D993",
                    400: "#0ECB81",
                    500: "#03A66D",
                    600: "#008057",
                    700: "#005940",
                    800: "#102821",
                    900: "#091F19"
                },
                s = {
                    5: "#FEF6F7",
                    10: "#FEF1F2",
                    50: "#FDDDDE",
                    100: "#FFC2C4",
                    200: "#FF99A0",
                    300: "#FF707E",
                    400: "#F6465D",
                    500: "#CF304A",
                    600: "#A81E3A",
                    700: "#82112B",
                    800: "#35141D",
                    900: "#2C1018"
                }
        },
        Ki6D: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => b
            });
            var n = r("BK7R"),
                i = r("QUKP"),
                o = r("Z2u4"),
                a = r("0vap"),
                s = r("GYch"),
                l = r("RS8X"),
                c = (0, s.CE)(l.A).dark,
                u = (0, n.A)({
                    modalBg: a.Oh[800],
                    popupBg: a.Oh[800],
                    bg1: a.Oh[900],
                    bg2: a.Oh[1e3],
                    bg3: a.Oh[700],
                    bg4: a.Oh[500],
                    bg5: a.Oh[900],
                    bg6: a.Oh[1e3],
                    line: a.Oh[600],
                    liteBg1: "#20262D",
                    liteBg2: "#191A1F",
                    t: {
                        primary: a.Oh[50],
                        secondary: a.Oh[200],
                        third: a.Oh[300],
                        placeholder: a.Oh[500],
                        disabled: a.Oh[500],
                        yellow: a.D9[200],
                        buy: a.wL[400],
                        sell: a.wv[400],
                        toast: a.D9[400],
                        white: a.Oh[0]
                    },
                    iconNormal: a.Oh[300],
                    alertYellowBg: a.D9[800],
                    badgeYellowBg: a.D9[700],
                    outlineHover: a.D9[600],
                    primaryHover: a.D9[100],
                    primary: a.D9[200],
                    toastFailBg: a.wv[800],
                    depthSellBg: a.wv[800],
                    sellHover: a.wv[300],
                    sell: a.wv[400],
                    toastSuccessBg: a.wL[800],
                    depthBuyBg: a.wL[800],
                    buyHover: a.wL[300],
                    buy: a.wL[400],
                    invBg: a.Oh[700],
                    success: a.wL[400],
                    error: a.wv[400],
                    successBg: a.wL[800],
                    errorBg: a.wv[800],
                    disableBg: a.Oh[600]
                }, c),
                d = (0, s.LH)("dark")(u);
            const p = u;
            var f = function(e) {
                    return (0, i.A)((0, n.A)({}, o.A.colors), {
                        tooltipBg: e.modalBg,
                        t: {
                            blue: "#285C93",
                            muted: "#444",
                            grey: "#D8D8D8",
                            link: e.t.yellow
                        },
                        errors: e.error,
                        elevation: {
                            shadow01: "0px 3px 6px rgba(0,0,0,0.04), 0px 1px 2px rgba(0,0,0,0.04), inset 0px 0px 1px rgba(94,102,115,0.8)",
                            shadow02: "0px 7px 14px rgba(0,0,0,.08), 0px 3px 6px rgba(0,0,0,.08), inset 0px 0px 1px rgba(94,102,115,.9)",
                            shadow03: "0px 16px 32px rgba(0,0,0,0.16), 0px 8px 16px rgba(0,0,0,0.16), inset 0px 0px 1px rgba(94,102,115,0.9)"
                        },
                        calendar: {
                            selected: a.Oh[400],
                            selectedRange: a.Oh[600],
                            disableColor: e.t.disabled,
                            shadow: a.Oh[1e3],
                            line: e.line,
                            buttonDisableBg: e.bg3,
                            mobileMaskBg: "0, 0, 0"
                        },
                        mobileDatePopup: {
                            maskGradientTop: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 80%, #000000)",
                            maskGradientBottom: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 80%, #000000)"
                        },
                        slider: {
                            disabledBar: e.line,
                            availableBar: a.Oh[500],
                            progressBar: a.Oh[10],
                            tooltipText: e.modalBg,
                            ratioButton: "#1F2124",
                            progress: a.Oh[0],
                            line: e.line
                        },
                        button: {
                            primaryPressed: e.primary,
                            defaultDisabled: e.line,
                            secondaryBg: e.line,
                            secondaryPressedBg: e.t.placeholder,
                            graytypeBg: e.t.secondary,
                            graytypeHoverBg: e.t.primary,
                            graytypePressedBg: e.t.primary,
                            graytypeHoverFontColor: e.popupBg,
                            graytypePressedFontColor: e.popupBg,
                            buyBg: e.buy,
                            buyHover: e.buyHover,
                            buyActiveBg: e.buy,
                            white: e.t.white,
                            primaryHover: e.primaryHover,
                            sellBg: e.sell,
                            sellHover: e.sellHover,
                            sellActiveBg: e.t.sell,
                            negativeBg: e.error,
                            negativeHover: e.error,
                            outlineBgHover: e.badgeYellowBg,
                            outlineBorderHover: e.primaryHover,
                            outlineBgActive: e.badgeYellowBg,
                            outlineBorderActive: e.primary,
                            outlineText: e.t.primary,
                            outlinePrimaryText: e.t.yellow
                        },
                        radio: {
                            gray: "#5C5C5C"
                        },
                        checkbox: {
                            gray: "#AEB4BC",
                            hover: e.primary,
                            bg: e.primary,
                            indeterminateFill: e.t.white,
                            disabledBorder: e.t.placeholder
                        },
                        toast: {
                            info: e.t.disabled,
                            error: e.error,
                            warning: e.primary,
                            success: e.success,
                            title: e.t.primary,
                            content: e.t.secondary,
                            tips: e.primary,
                            bg: e.modalBg,
                            closeColor: e.t.third
                        },
                        search: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        searchDropdown: {
                            clearIconColor: a.Oh[100]
                        },
                        pureSelect: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        alert: {
                            errorBg: "#3B182B",
                            warningBg: "#3C351F",
                            successBg: "#17352F",
                            infoBg: "#1C2D40"
                        },
                        alertV2: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#1C2D40",
                            successColor: e.success,
                            warningColor: e.primary,
                            errorColor: e.error,
                            infoColor: a.z1[400],
                            errorFontColor: e.error,
                            successFontColor: e.t.primary,
                            warningFontColor: e.t.primary,
                            infoFontColor: e.t.primary
                        },
                        tag: {
                            defaultBg: e.badgeYellowBg,
                            blueBg: "#4A90E230",
                            blueTxt: "#4A90E2",
                            grayBg: e.line,
                            grayTxt: e.t.third,
                            greenBg: e.successBg,
                            greenTxt: e.success,
                            redBg: e.errorBg,
                            redTxt: e.error
                        },
                        dialog: {
                            mask: "rgb(0, 0, 0, 0.5)"
                        },
                        tabs: {
                            flowBg: a.D9[100],
                            flowText: a.Oh[800]
                        },
                        advanced: {
                            downDropBg: "#313336"
                        },
                        transInputBG: e.bg3,
                        maskBg: a.Oh[900],
                        secondary: "#2EBD85",
                        background: "#12161C",
                        accent: "#F23051",
                        muted: "#262626",
                        negative: "#F23051",
                        icon: "#848E9C",
                        bg: "#1B1F25",
                        stress: "#1F2124",
                        lines: {
                            primary: "#272A2E",
                            light: "#272A2E",
                            dark: "#272A2E"
                        },
                        modal: {
                            bg: e.popupBg
                        }
                    })
                },
                m = (0, i.A)((0, n.A)({}, o.A), {
                    shadows: (0, i.A)((0, n.A)({}, o.A.shadows), {
                        elevation1: "0px 3px 6px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.04), inset 0px 0px 1px rgba(94, 102, 115, 0.8)",
                        elevation2: "0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",
                        elevation3: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 1px rgba(94, 102, 115, 0.9)"
                    })
                }),
                h = (0, s.CK)({
                    palette: p,
                    externalColors: f,
                    layout: m
                });
            (0, s.CK)({
                palette: d,
                externalColors: f,
                layout: m
            });
            const b = h
        },
        "8fYl": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => b
            });
            var n = r("BK7R"),
                i = r("QUKP"),
                o = r("Z2u4"),
                a = r("0vap"),
                s = r("GYch"),
                l = r("RS8X"),
                c = (0, s.CE)(l.A).light,
                u = (0, n.A)({
                    modalBg: a.Oh[0],
                    popupBg: a.Oh[0],
                    bg1: a.Oh[0],
                    bg2: a.Oh[5],
                    bg3: a.Oh[10],
                    bg4: a.Oh[500],
                    bg5: a.Oh[900],
                    bg6: a.Oh[1e3],
                    line: a.Oh[50],
                    liteBg1: a.Oh[0],
                    liteBg2: a.Oh[5],
                    t: {
                        primary: a.Oh[800],
                        secondary: a.Oh[600],
                        third: a.Oh[400],
                        placeholder: a.Oh[200],
                        disabled: a.Oh[200],
                        yellow: a.D9[300],
                        buy: a.wL[500],
                        sell: a.wv[500],
                        toast: a.D9[500],
                        white: a.Oh[0]
                    },
                    iconNormal: a.Oh[250],
                    alertYellowBg: a.D9[5],
                    badgeYellowBg: a.D9[10],
                    outlineHover: a.D9[50],
                    primaryHover: a.D9[100],
                    primary: a.D9[200],
                    toastFailBg: a.wv[5],
                    depthSellBg: a.wv[10],
                    sellHover: a.wv[300],
                    sell: a.wv[400],
                    toastSuccessBg: a.wL[5],
                    depthBuyBg: a.wL[10],
                    buyHover: a.wL[300],
                    buy: a.wL[400],
                    invBg: a.Oh[5],
                    success: a.wL[400],
                    successBg: a.wL[5],
                    error: a.wv[400],
                    errorBg: a.wv[5],
                    disableBg: a.Oh[50]
                }, c),
                d = (0, s.LH)("light")(u);
            const p = u;
            var f = function(e) {
                    return (0, i.A)((0, n.A)({}, o.A.colors), {
                        tooltipBg: e.modalBg,
                        t: {
                            blue: "#285C93",
                            muted: "#CCCCCC",
                            grey: "#D8D8D8",
                            link: e.t.yellow
                        },
                        errors: e.error,
                        elevation: {
                            shadow01: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                            shadow02: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                            shadow03: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                        },
                        calendar: {
                            selected: a.D9[200],
                            selectedRange: a.D9[100],
                            disableColor: e.t.disabled,
                            shadow: a.Oh[50],
                            line: e.line,
                            buttonDisableBg: e.bg3,
                            mobileMaskBg: "255, 255, 255"
                        },
                        mobileDatePopup: {
                            maskGradientTop: "linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 80%, #ffffff)",
                            maskGradientBottom: "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 80%, #ffffff)"
                        },
                        slider: {
                            disabledBar: e.line,
                            availableBar: a.Oh[100],
                            progressBar: a.Oh[700],
                            tooltipText: e.modalBg,
                            ratioButton: a.Oh[0],
                            progress: a.Oh[300],
                            line: e.line
                        },
                        button: {
                            primaryPressed: e.primary,
                            defaultDisabled: e.line,
                            secondaryBg: e.line,
                            secondaryPressedBg: e.t.placeholder,
                            graytypeBg: e.t.secondary,
                            graytypeHoverBg: e.t.primary,
                            graytypePressedBg: e.t.primary,
                            graytypeHoverFontColor: e.popupBg,
                            graytypePressedFontColor: e.popupBg,
                            buyBg: e.buy,
                            buyHover: e.buyHover,
                            buyActiveBg: e.buy,
                            white: e.t.white,
                            primaryHover: e.primaryHover,
                            sellBg: e.sell,
                            sellHover: e.sellHover,
                            sellActiveBg: e.t.sell,
                            negativeBg: e.error,
                            negativeHover: e.error,
                            outlineBgHover: e.badgeYellowBg,
                            outlineBorderHover: e.primaryHover,
                            outlineBgActive: e.badgeYellowBg,
                            outlineBorderActive: e.primary,
                            outlineText: e.t.primary,
                            outlinePrimaryText: e.t.yellow
                        },
                        radio: {
                            gray: "#5C5C5C"
                        },
                        checkbox: {
                            gray: "#AEB4BC",
                            hover: e.primary,
                            bg: e.primary,
                            indeterminateFill: e.t.white,
                            disabledBorder: e.t.placeholder
                        },
                        toast: {
                            info: e.t.disabled,
                            error: e.error,
                            warning: e.primary,
                            success: e.success,
                            title: e.t.primary,
                            content: e.t.secondary,
                            tips: e.primary,
                            bg: e.modalBg,
                            closeColor: e.t.third
                        },
                        search: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        searchDropdown: {
                            clearIconColor: a.Oh[100]
                        },
                        pureSelect: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        alert: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#DAE6F5"
                        },
                        alertV2: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#DAE6F5",
                            successColor: e.success,
                            warningColor: e.primary,
                            errorColor: e.error,
                            infoColor: a.z1[400],
                            errorFontColor: e.error,
                            successFontColor: e.t.primary,
                            warningFontColor: e.t.primary,
                            infoFontColor: e.t.primary
                        },
                        tag: {
                            defaultBg: e.badgeYellowBg,
                            blueBg: "#4A90E230",
                            blueTxt: "#4A90E2",
                            grayBg: e.line,
                            grayTxt: e.t.third,
                            greenBg: e.successBg,
                            greenTxt: e.success,
                            redBg: e.errorBg,
                            redTxt: e.error
                        },
                        dialog: {
                            mask: "rgb(0, 0, 0, 0.5)"
                        },
                        tabs: {
                            flowBg: a.D9[100],
                            flowText: a.Oh[800]
                        },
                        advanced: {
                            downDropBg: a.Oh[0]
                        },
                        transInputBG: e.bg3,
                        maskBg: a.Oh[900],
                        secondary: "#2EBD85",
                        background: "#FAFAFA",
                        accent: "#F23051",
                        muted: "#F5F5F5",
                        negative: "#F23051",
                        icon: "#848E9C",
                        bg: "#EAECEF",
                        stress: "#F2F2F2",
                        lines: {
                            primary: "#EAECEF",
                            light: "#EAECEF",
                            dark: "#272A2E"
                        },
                        modal: {
                            bg: e.popupBg
                        }
                    })
                },
                m = (0, i.A)((0, n.A)({}, o.A), {
                    shadows: (0, i.A)((0, n.A)({}, o.A.shadows), {
                        elevation1: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                        elevation2: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                        elevation3: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                    })
                }),
                h = (0, s.CK)({
                    palette: p,
                    externalColors: f,
                    layout: m
                });
            (0, s.CK)({
                palette: d,
                externalColors: f,
                layout: m
            });
            const b = h
        },
        RS8X: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => i
            });
            var n = "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)";
            const i = {
                primaryGradient: {
                    light: n,
                    dark: n
                },
                grayGradient: {
                    light: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                    dark: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                }
            }
        },
        GYch: (e, t, r) => {
            "use strict";
            r.d(t, {
                LH: () => y,
                CK: () => w,
                CE: () => v
            });
            var n = r("aVXY"),
                i = r("tEf9"),
                o = r("veKZ"),
                a = r.n(o),
                s = r("3POh"),
                l = r.n(s),
                c = r("jPI1"),
                u = r.n(c),
                d = r("pL+m"),
                p = r.n(d),
                f = r("H8sf"),
                m = r.n(f);
            const h = {
                dark: {
                    colors: {
                        t: {
                            sell: "#EC8D42",
                            buy: "#1F8DF9"
                        },
                        sell: "#DD7A2B",
                        buy: "#1F8DF9",
                        sellHover: "#EEA062",
                        buyHover: "#69B1F8",
                        depthSellBg: "#553821",
                        depthBuyBg: "#22384E",
                        toastFailBg: "#553821",
                        toastSuccessBg: "#22384E",
                        success: "#1F8DF9",
                        error: "#DD7A2B",
                        successBg: "#22384E",
                        errorBg: "#553821"
                    }
                },
                light: {
                    colors: {
                        t: {
                            sell: "#EC8D42",
                            buy: "#297FD4"
                        },
                        sell: "#DD7A2B",
                        buy: "#1F8DF9",
                        sellHover: "#EEA062",
                        buyHover: "#69B1F8",
                        depthSellBg: "#FFEFE2",
                        depthBuyBg: "#E6F3FF",
                        toastFailBg: "#FFEFE2",
                        toastSuccessBg: "#E6F2FF",
                        success: "#1F8DF9",
                        error: "#DD7A2B",
                        errorBg: "#FFEFE2",
                        successBg: "#E6F2FF"
                    }
                }
            };
            var b = ["light", "dark"],
                g = l()(a()),
                v = function(e) {
                    return g({})((function(t, r) {
                        var i;
                        return t[r] = (i = r, u()([p(), g({})((function(e, t) {
                            var r = (0, n.A)(t, 2),
                                o = r[0],
                                a = r[1];
                            return e[o] = a[i], e
                        }))]))(e), t
                    }))(b)
                },
                y = function(e) {
                    return t = h[e].colors,
                        function(e) {
                            return m()({}, e, t)
                        };
                    var t
                },
                x = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return m().apply(void 0, [{}, t].concat((0, i.A)(e)))
                    }
                },
                w = function(e) {
                    var t = e.palette,
                        r = e.externalColors,
                        n = e.layout;
                    return x([{
                        colors: r(t)
                    }, {
                        colors: t
                    }])(n)
                }
        },
        KsKd: (e, t, r) => {
            "use strict";
            r.d(t, {
                gb: () => Ir,
                NP: () => q,
                Ri: () => Cr,
                CY: () => Dr
            });
            var n = r("aVXY"),
                i = r("DTvD"),
                o = r.n(i),
                a = r("g80r"),
                s = r("9Fw3"),
                l = r("6p3b"),
                c = r("8fYl"),
                u = r("Ki6D"),
                d = r("S8bp"),
                p = r("ezuS"),
                f = r("BK7R"),
                m = r("QUKP"),
                h = r("gZfF"),
                b = r("tEf9"),
                g = r("Enqy"),
                v = function() {
                    if (Object.keys) return Object.keys;
                    var e = Object.prototype.hasOwnProperty,
                        t = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        n = r.length;
                    return function(i) {
                        if ("object" !== typeof i && "function" !== typeof i || null === i) throw new TypeError("Object.keys called on non-object");
                        var o = [];
                        for (var a in i) e.call(i, a) && o.push(a);
                        if (t)
                            for (var s = 0; s < n; s++) e.call(i, r[s]) && o.push(r[s]);
                        return o
                    }
                }(),
                y = r("pR+c"),
                x = r("M5j3"),
                w = r("5XPI"),
                k = r("C6y2"),
                S = {
                    default: "stretch",
                    left: "flex-start",
                    right: "flex-end",
                    center: "center"
                };
            const B = o().memo((function(e) {
                var t = e.anchorOrigin,
                    r = e.position,
                    n = e.enablePortal,
                    i = e.container,
                    a = (0, h.A)(e, ["anchorOrigin", "position", "enablePortal", "container"]),
                    s = {
                        position: r,
                        zIndex: "notification",
                        alignItems: S[t.horizontal] || S.default
                    };
                return "top" === t.vertical ? s.top = 12 : s.bottom = 12, "left" === t.horizontal ? s.left = 12 : "center" === t.horizontal ? (s.left = "50%", s.transform = "translateX(-50%)") : s.right = 12, n || i ? o().createElement(w.Ay, {
                    container: i
                }, o().createElement(k.A, (0, x.A)({
                    className: "UikitWidget_NotificationContainer",
                    flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                }, a, {
                    __css: s
                }))) : o().createElement(k.A, (0, x.A)({
                    className: "UikitWidget_NotificationContainer",
                    flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                }, a, {
                    __css: s
                }))
            }));
            var _ = r("LCuF"),
                A = r("yhUQ"),
                U = r("w/Qz");
            const T = function(e) {
                return o().createElement(U.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M11.989 22H12c5.527 0 10-4.473 10-10 0-5.528-4.473-10-10-10-5.516 0-9.989 4.472-10 9.989-.011 5.527 4.461 10 9.989 10.011zM10.99 5.016h2.018v2.007h-2.018V5.016zm0 4.633h2.018v9.346h-2.018V9.65z",
                    fill: "currentColor"
                }))
            };
            const C = function(e) {
                return o().createElement(U.A, (0, x.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.326 13.909l-1.429 1.417L12 13.429l-3.897 3.897-1.429-1.417 3.909-3.898-3.909-3.908 1.429-1.417L12 10.583l3.897-3.897 1.429 1.417-3.897 3.908 3.897 3.898z",
                    fill: "currentColor"
                }))
            };
            var E = r("BMA0"),
                O = r("1Ckn"),
                I = r("ypKN"),
                D = r("/Lz3"),
                P = {
                    info: T,
                    error: C,
                    warning: E.A,
                    success: I.A,
                    tips: O.A
                },
                R = (0, i.forwardRef)((function(e, t) {
                    var r = e.message,
                        n = e.header,
                        a = e.footer,
                        s = e.icon,
                        l = e.variant,
                        c = void 0 === l ? "tips" : l,
                        u = e.closable,
                        d = void 0 !== u && u,
                        p = e.showIcon,
                        m = void 0 === p || p,
                        b = e.onClose,
                        g = e.progress,
                        v = (e.showProgress, (0, h.A)(e, ["message", "header", "footer", "icon", "variant", "closable", "showIcon", "onClose", "progress", "showProgress"])),
                        y = P[c],
                        w = "toast.".concat(c),
                        S = (0, i.isValidElement)(s) ? o().cloneElement(s, (0, f.A)({
                            size: 20,
                            display: "block"
                        }, s.props), []) : y ? o().createElement(y, {
                            size: 20,
                            display: "block"
                        }) : null;
                    return o().createElement(k.A, (0, x.A)({
                        ref: t,
                        sx: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        tx: "toast",
                        variant: c
                    }, v), o().createElement(_.A, {
                        sx: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "".concat(g, "%"),
                            height: "3px",
                            bg: "primary"
                        }
                    }), o().createElement(k.A, {
                        alignItems: "flex-start",
                        __css: {
                            width: "100%"
                        }
                    }, m ? o().createElement(_.A, {
                        color: w,
                        __css: {
                            mr: "ls",
                            pt: "2px",
                            flexShrink: 0
                        }
                    }, S) : null, o().createElement(k.A, {
                        className: "bn-notification-body-wrapper",
                        __css: {
                            maxHeight: "146px",
                            flexDirection: "column",
                            width: "100%"
                        }
                    }, n ? o().createElement(A.A, {
                        sx: {
                            color: "t.primary",
                            mb: "2px",
                            flexShrink: 0
                        },
                        variant: "subtitle1"
                    }, n) : null, r ? o().createElement(A.A, {
                        className: "bn-notification-msg-wrapper",
                        variant: "body2",
                        sx: {
                            color: "t.secondary",
                            overflow: "auto",
                            maxHeight: 120,
                            pr: d ? "md" : 0,
                            wordWrap: "break-word"
                        }
                    }, r) : null, a ? o().createElement(A.A, {
                        variant: "label5",
                        sx: {
                            color: "toast.content",
                            flexShrink: 0,
                            pr: d ? "md" : 0
                        }
                    }, a) : null)), d ? o().createElement(_.A, {
                        __css: {
                            position: "absolute",
                            right: "sm",
                            alignItems: "flex-start",
                            flexShrink: 0,
                            p: "minor"
                        }
                    }, o().createElement(D.A, {
                        size: 20,
                        onClick: b,
                        display: "block",
                        cursor: "pointer",
                        color: "toast.closeColor"
                    })) : null)
                }));
            R.displayName = "Toast";
            const z = R;

            function F(e) {
                var t = (0, n.A)((0, i.useState)(0), 2),
                    r = t[0],
                    a = t[1],
                    s = e.onClose,
                    l = e.item,
                    c = e.style,
                    u = l.autoHideDuration,
                    d = l.open,
                    p = l.key,
                    f = l.showProgress,
                    m = l.onClose,
                    b = (0, h.A)(l, ["autoHideDuration", "open", "key", "showProgress", "onClose"]),
                    g = o().useRef(),
                    v = o().useCallback((function(e, t) {
                        m && m(e, t, p), s(e, t, p)
                    }), [p]),
                    y = o().useCallback((function() {
                        u && (clearTimeout(g.current), g.current = setTimeout((function() {
                            u && v(null, "timeout")
                        }), u))
                    }), [u, v]);
                return (0, i.useEffect)((function() {
                    return d && y(),
                        function() {
                            clearTimeout(g.current)
                        }
                }), [d, y]), (0, i.useEffect)((function() {
                    if (u && f) var e = setInterval((function() {
                        a((function(t) {
                            return t >= 100 ? (clearInterval(e), 100) : t + 1e3 / u
                        }))
                    }), 10)
                }), [u]), d ? o().createElement(z, (0, x.A)({
                    mb: "xs",
                    onClose: v,
                    progress: r,
                    showProgress: f
                }, b, {
                    style: c
                })) : null
            }
            var W = {
                    vertical: "top",
                    horizontal: "center"
                },
                M = function(e, t) {
                    var r;
                    return "object" !== typeof t[0] || i.isValidElement(t[0]) ? (r = t[1] || e).message = r.message || t[0] : r = t[0] || e, r
                };
            const L = function(e) {
                var t = e.anchorOrigin,
                    r = void 0 === t ? W : t,
                    o = e.autoHideDuration,
                    a = void 0 === o ? 4500 : o,
                    s = e.closable,
                    l = void 0 !== s && s,
                    c = e.disableAnimate,
                    u = void 0 !== c && c,
                    d = e.position,
                    x = void 0 === d ? "fixed" : d,
                    w = e.children,
                    k = e.queueSize,
                    S = void 0 === k ? 10 : k,
                    _ = e.container,
                    A = e.enablePortal,
                    U = (0, n.A)(i.useState(A), 2),
                    T = U[0],
                    C = U[1],
                    E = i.useMemo((function() {
                        return []
                    }), []),
                    O = (0, n.A)(i.useState([]), 2),
                    I = O[0],
                    D = O[1],
                    P = i.useCallback((function(t, r, n) {
                        e.onClose && e.onClose(t, r, n), D(void 0 !== n && null !== n ? function(e) {
                            return e.filter((function(e) {
                                return e.key !== n.toString()
                            }))
                        } : [])
                    }), [e]),
                    R = i.useRef(null),
                    z = i.useCallback((function() {
                        D((function(t) {
                            var r = t.length - S + 1;
                            if (r >= 1) {
                                for (var n = t.splice(0, r), i = 0; i < n.length; ++i) {
                                    var o = n[i];
                                    o && (o.onClose && o.onClose(null, "max", o.key), e.onClose && e.onClose(null, "max", o.key))
                                }
                                var a = E.splice(0, Math.min(r - 1, E.length));
                                if (a.length > 0) return (0, b.A)(t).concat((0, b.A)(a))
                            }
                            return (0, b.A)(t)
                        }))
                    }), [e, E, S]),
                    L = i.useCallback((function() {
                        E.length > 0 && D((function(e) {
                            var t = E.shift();
                            return t ? (0, b.A)(e).concat([t]) : e
                        }))
                    }), [E]),
                    H = i.useCallback((function() {
                        return z(), L()
                    }), [z, L]),
                    K = I.reduce((function(e, t) {
                        var n, i = (n = t.anchorOrigin || r, "".concat(n.vertical, "-").concat(n.horizontal)),
                            o = e[i] || [];
                        return (0, m.A)((0, f.A)({}, e), (0, p.A)({}, i, (0, b.A)(o).concat([t])))
                    }), {}),
                    N = i.useMemo((function() {
                        return {
                            enqueueNotification: function() {
                                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                                if (void 0 !== t[0] || void 0 !== t[1]) {
                                    var i = M({
                                        anchorOrigin: r,
                                        autoHideDuration: a,
                                        closable: l,
                                        enablePortal: A
                                    }, t);
                                    i.enablePortal && C(i.enablePortal), i.container && (R.current = i.container);
                                    var o = i.key,
                                        s = i.anchorOrigin,
                                        c = void 0 === s ? r : s,
                                        u = i.autoHideDuration,
                                        d = void 0 === u ? a : u,
                                        p = i.closable,
                                        b = void 0 === p ? l : p,
                                        g = i.persist,
                                        v = i.message,
                                        y = (0, h.A)(i, ["key", "anchorOrigin", "autoHideDuration", "closable", "persist", "message"]),
                                        x = o && o.toString() || (new Date).getTime().toString() + Math.random().toString(),
                                        w = (0, m.A)((0, f.A)({
                                            key: x
                                        }, y), {
                                            persist: Boolean(g),
                                            autoHideDuration: g ? 0 : d,
                                            closable: b,
                                            open: !0,
                                            message: v,
                                            anchorOrigin: c
                                        });
                                    return E.push(w), H(), x
                                }
                            },
                            closeNotification: function(e) {
                                P(null, null, e)
                            }
                        }
                    }), [E, r, a, l, A, P, H]);
                return i.createElement(y.A.Provider, {
                    value: N
                }, w, function(e) {
                    if (Object.entries) return Object.entries(e);
                    for (var t = v(e), r = t.length, n = new Array(r); r--;) n[r] = [t[r], e[t[r]]];
                    return n
                }(K).map((function(e) {
                    var t = (0, n.A)(e, 2),
                        r = t[0],
                        o = t[1],
                        a = o[0],
                        s = a.anchorOrigin,
                        l = a.style,
                        c = "top" === s.vertical ? -1 : 1;
                    return u ? i.createElement(B, {
                        key: r,
                        anchorOrigin: s,
                        position: x,
                        container: R.current || _,
                        enablePortal: T,
                        style: null !== l && void 0 !== l ? l : {}
                    }, o.map((function(e) {
                        return i.createElement(F, {
                            key: e.key,
                            item: e,
                            onClose: P
                        })
                    }))) : i.createElement(g.S6, {
                        key: r,
                        defaultStyles: o.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    opacity: 0,
                                    translateY: 60 * c
                                }
                            }
                        })),
                        styles: o.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    translateY: (0, g.oz)(0, g.v4.gentle),
                                    opacity: (0, g.oz)(1, g.v4.gentle)
                                }
                            }
                        })),
                        willLeave: function(e) {
                            var t = e.key;
                            return {
                                translateY: (0, g.oz)(-60 * c * (o[0].key === t ? 1 : -1)),
                                opacity: (0, g.oz)(0)
                            }
                        },
                        willEnter: function() {
                            return {
                                translateY: 60 * c,
                                opacity: 1
                            }
                        }
                    }, (function(e) {
                        return i.createElement(B, {
                            key: r,
                            anchorOrigin: s,
                            position: x,
                            container: R.current || _,
                            enablePortal: T,
                            style: (0, f.A)({
                                transform: "translate3d(".concat("center" === s.horizontal ? "-50%" : "0", ", ").concat(e[e.length - 1].style.translateY, "px, 0)")
                            }, null !== l && void 0 !== l ? l : {})
                        }, e.map((function(e) {
                            var t = e.key,
                                r = e.style.opacity,
                                n = e.data;
                            return i.createElement(F, {
                                key: t,
                                item: n,
                                onClose: P,
                                style: {
                                    opacity: r
                                }
                            })
                        })))
                    }))
                })))
            };
            var H = r("a75W"),
                K = r("tKUM"),
                N = r("HS2I"),
                j = (0, i.createContext)({});

            function q(e) {
                var t = e.children,
                    r = (0, N.useLanguage)().language,
                    p = (0, N.useTheme)().theme,
                    f = (0, n.A)((0, i.useState)(!1), 2),
                    m = f[0],
                    h = f[1],
                    b = (0, i.useMemo)((function() {
                        return "light" === p ? c.A : u.A
                    }), [p]);
                return o().createElement(a._y, {
                    value: (0, s.A)({
                        stylisPlugins: ["rtl" === (0, K.dir)(r) ? l.Ay : void 0]
                    })
                }, o().createElement(j.Provider, {
                    value: {
                        themeStatus: m,
                        setThemeStatus: h
                    }
                }, o().createElement(d.A, {
                    theme: b,
                    dir: (0, K.dir)(r)
                }, o().createElement(L, null, H.j7, t))))
            }
            var G = r("hTvQ"),
                V = r("888e"),
                Z = r("2PCm"),
                Y = r("VKAp");
            var X = function(e) {
                    e()
                },
                Q = function(e) {
                    return X = e
                },
                $ = function() {
                    function e(t) {
                        var r = this;
                        (0, V.A)(this, e), this._subscribers = [], this._isHot = !1, this._unsubscribe = null, this._runner = t, this._stubSubscriber = {
                            next: function(e) {
                                var t = r;
                                X((function() {
                                    return t._applyCallback(e)
                                }))
                            }
                        }
                    }
                    var t = e.prototype;
                    return t.subscribe = function(e) {
                        var t = this;
                        return this._subscribers.push(e), this._isHot || (this._isHot = !0, this._unsubscribe = this._runner(this._stubSubscriber)),
                            function() {
                                var r = t._subscribers.indexOf(e);
                                r >= 0 && t._subscribers.splice(r, 1), t._subscribers.length <= 0 && (t._isHot = !1, t._unsubscribe && (t._unsubscribe(), t._unsubscribe = null))
                            }
                    }, t._applyCallback = function(e) {
                        for (var t = this._subscribers, r = 0; r < t.length; r++) {
                            (0, t[r])(e)
                        }
                    }, e
                }();

            function J(e) {
                return new $(e)
            }

            function ee() {
                var e = Object.create(null);
                return {
                    on: function(t, r) {
                        (e[t] || (e[t] = [])).push(r)
                    },
                    once: function(e, t) {
                        this.on(e, t)
                    },
                    off: function(t, r) {
                        if (e[t])
                            if (r) {
                                var n = e[t].indexOf(r);
                                n >= 0 && e[t].splice(n, 1)
                            } else e[t].length = 0
                    },
                    emit: function(t) {
                        for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++) n[i - 1] = arguments[i];
                        (e[t] || []).slice().forEach((function(e) {
                            e.apply(void 0, (0, b.A)(n))
                        }))
                    }
                }
            }
            var te = function() {
                    function e(t) {
                        var r = this;
                        (0, V.A)(this, e), this._eventEmitter = ee(), this._options = t, this._optionsStream = J((function(e) {
                            var t = r;
                            return r._eventEmitter.on("CHANGE_FIELD", (function(r) {
                                    var n = r.fieldName,
                                        i = r.value;
                                    t._options = (0, m.A)((0, f.A)({}, t._options), (0, p.A)({}, n, i)), e.next((0, m.A)((0, f.A)({}, t._options), (0, p.A)({}, n, i)))
                                })),
                                function() {
                                    t._eventEmitter.off("CHANGE_FIELD")
                                }
                        }))
                    }
                    var t = e.prototype;
                    return t.getOptions = function() {
                        return this._options
                    }, t.updateOptionField = function(e) {
                        this._eventEmitter.emit("CHANGE_FIELD", e)
                    }, t.withOptionsStream = function(e) {
                        var t = this;
                        return J((function(r) {
                            var n, i = e(t._options);
                            n = i.subscribe(r.next);
                            var o = t._optionsStream.subscribe((function(t) {
                                n && n();
                                var i = e(t);
                                n = i.subscribe(r.next)
                            }));
                            return function() {
                                o(), n && n()
                            }
                        }))
                    }, e
                }(),
                re = r("sViW"),
                ne = r("Pz56"),
                ie = r.n(ne),
                oe = r("VA12"),
                ae = function() {
                    function e() {
                        (0, V.A)(this, e), this._cache = Object.create(null)
                    }
                    var t = e.prototype;
                    return t.get = function(e) {
                        return Object.prototype.hasOwnProperty.call(this._cache, e) ? this._cache[e] : null
                    }, t.set = function(e, t) {
                        this._cache[e] = t
                    }, t.delete = function(e) {
                        delete this._cache[e]
                    }, e
                }(),
                se = r("2URn"),
                le = r("Bcqe"),
                ce = r.n(le),
                ue = r("nG1z"),
                de = 0,
                pe = 1,
                fe = 2,
                me = 3,
                he = 1,
                be = function() {
                    function e(t) {
                        var r = this;
                        (0, V.A)(this, e), this._debugId = he++, this._wsInstance = null, this._reconnectAttempts = 0, this._maxReconnectTime = 300, this._socketEvents = ee(), this._readyState = de, this._timeout = 5e3, this._netWorkStatus = !0, this._url = t, window.addEventListener("offline", (function() {
                            r._netWorkStatus = !1
                        })), window.addEventListener("online", (function() {
                            r._netWorkStatus || r.open(), r._netWorkStatus = !0
                        }))
                    }
                    var t = e.prototype;
                    return t.open = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = this;
                        if (this._readyState !== pe) {
                            this._readyState = de, e ? (this._reconnectAttempts += 1, this._socketEvents.emit("reConnecting", this._reconnectAttempts), console.log("WebSocket Reconnecting Attempts:", this._url, this._reconnectAttempts)) : this._reconnectAttempts = 0;
                            var r = this._wsInstance = new WebSocket(this._url),
                                n = !1,
                                i = setTimeout((function() {
                                    console.debug("WebSocket connection-timeout", t._url), n = !0, r.close(), n = !1
                                }), this._timeout),
                                o = function() {
                                    return clearTimeout(i)
                                };
                            r.onerror = function(e) {
                                console.error("socket error", t._url, e)
                            }, r.onclose = function(e) {
                                o(), t._wsInstance = null, t._readyState = de, t._reconnectAttempts <= 0 && !n && t._socketEvents.emit("close", e), t.reconnect()
                            }, r.onopen = function(e) {
                                o(), t._readyState = pe, t._reconnectAttempts > 0 && t._socketEvents.emit("reConnected", t._reconnectAttempts), t._reconnectAttempts = 0, t._socketEvents.emit("open", e)
                            }, r.onmessage = function(e) {
                                t._socketEvents.emit("message", e)
                            }
                        }
                    }, t.onOpen = function(e) {
                        var t = this;
                        return this._socketEvents.on("open", e),
                            function() {
                                t._socketEvents.off("open", e)
                            }
                    }, t.onReConnected = function(e) {
                        var t = this;
                        return this._socketEvents.on("reConnected", e),
                            function() {
                                t._socketEvents.off("reConnected", e)
                            }
                    }, t.onReConnecting = function(e) {
                        var t = this;
                        return this._socketEvents.on("reConnecting", e),
                            function() {
                                t._socketEvents.off("reConnecting", e)
                            }
                    }, t.onMessage = function(e) {
                        var t = this;
                        return this._socketEvents.on("message", e),
                            function() {
                                t._socketEvents.off("message", e)
                            }
                    }, t.onClose = function(e) {
                        var t = this;
                        return this._socketEvents.on("close", e),
                            function() {
                                t._socketEvents.off("close", e)
                            }
                    }, t.send = function(e) {
                        this._wsInstance && this.getStatus() === pe && this._wsInstance.send(e)
                    }, t.close = function() {
                        var e = this,
                            t = this._wsInstance;
                        t && (this._wsInstance = null, this._readyState = me, t.onopen = null, t.onerror = null, t.onmessage = null, t.onclose = function(t) {
                            e._socketEvents.emit("close", t)
                        }, t.close())
                    }, t.isValidStatus = function(e) {
                        return e === de || e === pe || e === fe || e === me
                    }, t.getStatus = function() {
                        var e;
                        return this.isValidStatus(null === (e = this._wsInstance) || void 0 === e ? void 0 : e.readyState) ? this._wsInstance.readyState : this._readyState
                    }, t.refresh = function() {
                        this.close(), this.reconnect()
                    }, t.reconnect = function() {
                        var e = this;
                        this._reconnectHandle || (this._reconnectHandle = setTimeout((function() {
                            e._reconnectHandle = null, e.open(!0)
                        }), this.calcReconnectTime()))
                    }, t.calcReconnectTime = function() {
                        return 1e3 * Math.min(this._maxReconnectTime, Math.pow(2, this._reconnectAttempts)) + Math.floor(1e3 * Math.random())
                    }, (0, ue.A)(e, [{
                        key: "readyState",
                        get: function() {
                            return this._readyState
                        }
                    }]), e
                }();

            function ge(e) {
                return new be(e)
            }

            function ve(e) {
                for (var t = Object.create(null), r = [], n = 0; n < e.length; n++) {
                    var i = e[n],
                        o = void 0;
                    switch (i.stream) {
                        case "aggSnap":
                            o = "".concat(i.symbol.toLowerCase(), "@aggSnap");
                            break;
                        case "tradeAggregate":
                        case "aggTrade":
                            o = "".concat(i.symbol.toLowerCase(), "@aggTrade");
                            break;
                        case "trade":
                            o = "".concat(i.symbol.toLowerCase(), "@trade");
                            break;
                        case "kline":
                            o = i.upperSymbolWithPrefix ? "".concat(i.symbol, "@kline_").concat(i.interval).concat(i.timeZone ? "@".concat(i.timeZone) : "") : "".concat(i.symbol.toLowerCase(), "@kline_").concat(i.interval).concat(i.timeZone ? "@".concat(i.timeZone) : "");
                            break;
                        case "tickerMiniOne":
                            o = "".concat(i.symbol.toLowerCase(), "@miniTicker");
                            break;
                        case "tickerMiniAll":
                        case "24hrMiniTicker":
                            o = "!miniTicker@arr", i.speed && (o = "".concat(o, "@").concat(i.speed, "ms"));
                            break;
                        case "tickerOne":
                            o = "".concat(i.symbol.toLowerCase(), "@ticker");
                            break;
                        case "tickerAll":
                            o = "!ticker@arr";
                            break;
                        case "tickerAllWindowSize":
                            o = "!ticker", i.windowSize && (o += "_".concat(i.windowSize)), o += "@arr", i.speed && (o += "@".concat(i.speed, "ms")), console.log("stream is ", o);
                            break;
                        case "bookTicker":
                            o = "".concat(i.symbol.toLowerCase(), "@bookTicker");
                            break;
                        case "bookTickerAll":
                            o = "!bookTicker";
                            break;
                        case "depth":
                        case "depthUpdate":
                            o = "".concat(i.symbol.toLowerCase(), "@depth"), i.level && (o = "".concat(o).concat(i.level)), "number" === typeof i.speed ? o = "".concat(o, "@").concat(i.speed, "ms") : i.fast && (o = "".concat(o, "@100ms"));
                            break;
                        case "ORDER_TRADE_UPDATE":
                        case "ALGO_UPDATE":
                        case "ACCOUNT_UPDATE":
                        case "ACCOUNT_CONFIG_UPDATE":
                        case "STRATEGY_UPDATE":
                        case "GRID_UPDATE":
                        case "userData":
                            o = i.key;
                            break;
                        case "markPrice":
                            o = "".concat(i.symbol.toLowerCase(), "@markPrice"), i.speed && (o = "".concat(o, "@").concat(i.speed));
                            break;
                        case "portfolioAssetPrice":
                            o = "!portfolioAssetPrice@arr";
                            break;
                        case "assetIndexAll":
                        case "assetIndexUpdate":
                            o = "!assetIndex@arr";
                            break;
                        case "markPriceAll":
                            o = "!markPrice@arr", i.speed && (o = "".concat(o, "@").concat(i.speed));
                            break;
                        case "markPriceUpdate":
                            o = i.isArr ? "!markPrice@arr" : "".concat(i.symbol.toLowerCase(), "@markPrice"), i.speed && (o = "".concat(o, "@").concat(i.speed));
                            break;
                        case "markPriceMini":
                            o = "!markPriceMini@arr", i.speed && (o = "".concat(o, "@").concat(i.speed));
                            break;
                        case "l_kline":
                            o = "".concat(i.symbol.toLowerCase(), "@nav_kline_").concat(i.interval);
                            break;
                        case "netValue":
                        case "nav":
                            o = "".concat(i.symbol.toUpperCase(), "@tokenNav");
                            break;
                        case "netValueAll":
                            o = "nav@tokenNavArr";
                            break;
                        case "continuous_kline":
                            o = "".concat(i.pair.toLowerCase(), "_").concat(i.contractType.toLowerCase(), "@continuousKline_").concat(i.interval);
                            break;
                        case "indexPrice_kline":
                        case "indexPriceKline":
                            o = "".concat(i.pair.toLowerCase(), "@indexPriceKline_").concat(i.interval);
                            break;
                        case "markPrice_kline":
                        case "markPriceKline":
                            o = "".concat(i.symbol.toLowerCase(), "@markPriceKline_").concat(i.interval);
                            break;
                        case "indexPriceUpdate":
                            o = "".concat(i.pair.toLowerCase(), "@indexPrice");
                            break;
                        case "priceIndex":
                            var a = null === i || void 0 === i ? void 0 : i.marginSymbol;
                            o = "string" === typeof a ? "".concat(a.toLocaleLowerCase(), "@priceIndex") : "!priceIndex@arr";
                            break;
                        case "convertTicker":
                            var s = null === i || void 0 === i ? void 0 : i.marginSymbol;
                            o = "string" === typeof s ? "".concat(s.toLocaleLowerCase(), "@convertTicker") : "!convertTicker@arr";
                            break;
                        case "contractInfo":
                            o = "!contractInfo";
                            break;
                        case "compositeIndex":
                            o = "".concat(i.symbol.toLowerCase(), "@compositeIndex");
                            break;
                        case "stockTokenDepth":
                            o = "".concat(i.symbol, "@stockTokenDepth");
                            break;
                        case "stockTokenMiniTicker":
                            o = "!stockTokenMiniTicker@arr";
                            break;
                        case "stockTokenKline":
                            o = "".concat(i.symbol, "@stockTokenKline_").concat(i.interval);
                            break;
                        case "stockTokenMiniTickerOne":
                            o = "".concat(i.symbol.toUpperCase(), "@stockTokenMiniTicker");
                            break;
                        case "marketStatusUpdate":
                            o = "marketStatusUpdate";
                            break;
                        case "eOptions":
                            o = i.streamName;
                            break;
                        case "topMovers":
                            o = i.stream;
                            break;
                        default:
                            i
                    }
                    o && (t[o] = i.stream, r.push(o))
                }
                return {
                    typeMaps: t,
                    streams: r
                }
            }
            var ye = {},
                xe = 1,
                we = {},
                ke = !0;
            if (window.Worker) try {
                var Se = new Blob(["      onmessage = function (event) {        setTimeout(function () {          postMessage(event.data)        }, 150)      }    "]),
                    Be = window.URL.createObjectURL(Se);
                (ye = new Worker(Be)).onmessage = function(e) {
                    we[e.data]()
                }
            } catch (Pr) {
                ke = !1
            }
            var _e, Ae = (_e = function(e) {
                    window.Worker && ke ? (xe++, we[xe] = e, ye.postMessage("".concat(xe))) : setTimeout(e, 150)
                }, function(e, t) {
                    var r, n = t.init,
                        i = t.collect,
                        o = !1,
                        a = function() {
                            r = n()
                        },
                        s = function() {
                            o = !1;
                            var t = r;
                            a(), e(t)
                        };
                    return a(),
                        function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            i.apply(void 0, [r].concat((0, b.A)(t))), o || (o = !0, _e(s))
                        }
                }),
                Ue = r("q2ou"),
                Te = "undefined" !== typeof TextDecoder ? function(e) {
                    return (new TextDecoder).decode(e)
                } : function(e) {
                    return decodeURIComponent(String.fromCharCode.apply(null, e))
                },
                Ce = {
                    headerCheck: function(e) {
                        return 31 === e[0] && 139 === e[1] && 8 === e[2]
                    },
                    parser: function(e) {
                        return JSON.parse(Te(Ue.ungzip(e, {})))
                    }
                },
                Ee = new ae,
                Oe = 1;

            function Ie() {
                return Oe++
            }

            function De(e) {
                return Pe.apply(this, arguments)
            }

            function Pe() {
                return Pe = (0, re.A)(ie().mark((function e(t) {
                    return ie().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("function" !== typeof t.arrayBuffer) {
                                    e.next = 4;
                                    break
                                }
                                return e.next = 3, t.arrayBuffer();
                            case 3:
                                return e.abrupt("return", e.sent);
                            case 4:
                                return e.abrupt("return", new Promise((function(e) {
                                    var r = new FileReader;
                                    r.readAsArrayBuffer(t), r.onload = function() {
                                        e(r.result)
                                    }
                                })));
                            case 5:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), Pe.apply(this, arguments)
            }
            var Re = {},
                ze = function() {},
                Fe = ce()((function() {
                    Object.keys(Re).forEach((function(e) {
                        Re[e].subscribeStreamSet.size && (Re[e].subscribe || ze)(Array.from(Re[e].subscribeStreamSet || new Set)), Re[e].unsubscribeStreamSet.size && (Re[e].unsubscribe || ze)(Array.from(Re[e].unsubscribeStreamSet || new Set)), Re[e].subscribeStreamSet = new Set, Re[e].unsubscribeStreamSet = new Set
                    }))
                }), 500, {
                    leading: !1,
                    trailing: !0
                }),
                We = function(e) {
                    var t = e.baseUrl,
                        r = void 0 === t ? "" : t,
                        n = e.subscribeSet,
                        i = void 0 === n ? new Set : n,
                        o = e.unsubscribeSet,
                        a = void 0 === o ? new Set : o,
                        s = e.subscribe,
                        l = e.unsubscribe;
                    Re[r] || (Re[r] = {
                        subscribe: ze,
                        unsubscribe: ze,
                        subscribeStreamSet: new Set,
                        unsubscribeStreamSet: new Set
                    });
                    var c = Re[r].subscribeStreamSet,
                        u = Re[r].unsubscribeStreamSet;
                    Re[r] = {
                        subscribe: s || Re[r].subscribe,
                        unsubscribe: l || Re[r].unsubscribe,
                        subscribeStreamSet: new Set((0, b.A)(Array.from(c).filter((function(e) {
                            return !a.has(e)
                        }))).concat((0, b.A)(Array.from(i)))),
                        unsubscribeStreamSet: new Set((0, b.A)(Array.from(u).filter((function(e) {
                            return !i.has(e)
                        }))).concat((0, b.A)(Array.from(a).filter((function(e) {
                            return !c.has(e)
                        })))))
                    }, Fe()
                };

            function Me(e) {
                return Le.apply(this, arguments)
            }

            function Le() {
                return (Le = (0, re.A)(ie().mark((function e(t) {
                    var r;
                    return ie().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!(0, se.A)(t, Blob) && "Blob" !== t.constructor.name) {
                                    e.next = 6;
                                    break
                                }
                                return e.next = 3, De(t);
                            case 3:
                                return r = e.sent, r = new Uint8Array(r), e.abrupt("return", Ce.parser(r));
                            case 6:
                                return e.abrupt("return", JSON.parse(t));
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var He = "wss://fe-wsreplayer.devfdg.net/ws";

            function Ke(e) {
                var t, r = (0, n.A)(null === (t = e.split("?")[1]) || void 0 === t ? void 0 : t.split("||"), 2),
                    i = r[0],
                    o = r[1];
                return {
                    id: i,
                    frequency: Number(o)
                }
            }

            function Ne(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    r = e.toLowerCase(),
                    n = e.includes(He),
                    i = Ee.get(e);
                if (!i) {
                    var o = ge(n ? He : "".concat(e, "/stream")),
                        a = {},
                        s = function() {
                            var e = Ie();
                            o.send(JSON.stringify({
                                method: "GET_PROPERTY",
                                params: ["combined"],
                                id: e
                            }));
                            var t = setTimeout((function() {
                                u(), o.refresh()
                            }), 5e3);
                            return {
                                id: e,
                                resolve: function() {
                                    return clearTimeout(t)
                                }
                            }
                        },
                        l = null,
                        c = function() {
                            l = setInterval((function() {
                                var e = s(),
                                    t = e.id,
                                    r = e.resolve;
                                a[t] = r
                            }), 5e3)
                        },
                        u = function() {
                            clearInterval(l), Object.keys(a).forEach((function(e) {
                                a[e](e), delete a[e]
                            }))
                        };
                    o.onOpen((function() {
                        !0 === window.__WS_PING__ && c(), n && o.send(JSON.stringify(Ke(e)));
                        var t = Object.keys(i.streamStatus);
                        t.length && We({
                            baseUrl: e,
                            subscribeSet: new Set(t),
                            subscribe: function(e) {
                                o.send(JSON.stringify({
                                    method: "SUBSCRIBE",
                                    params: e,
                                    id: Ie()
                                }))
                            }
                        })
                    }));
                    var d = J((function(e) {
                        var t = Ae((function(t) {
                                return e.next(t)
                            }), {
                                init: function() {
                                    return []
                                },
                                collect: function(e, t) {
                                    e.push(t)
                                }
                            }),
                            n = o.onMessage(function() {
                                var e = (0, re.A)(ie().mark((function e(r) {
                                    var n, i;
                                    return ie().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 2, Me(r.data);
                                            case 2:
                                                "result" in (n = e.sent) && "id" in n ? (i = a[n.id]) && (i(n.id), delete a[n.id]) : "error" in n || ("PING" === (null === n || void 0 === n ? void 0 : n.method) ? o.send(JSON.stringify({
                                                    method: "PONG",
                                                    E: n.E
                                                })) : n.stream || n.data ? t(n) : t({
                                                    stream: "",
                                                    data: n
                                                }));
                                            case 4:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }());
                        return o.open(),
                            function() {
                                n(), u(), o.close(), Ee.delete(r)
                            }
                    }));
                    i = {
                        client: o,
                        wsStream: d,
                        streamStatus: {}
                    }, Ee.set(r, i)
                }
                for (var p = i.streamStatus, f = i.client, m = [], h = 0; h < t.length; h++) {
                    var b = t[h];
                    p[b] ? p[b] += 1 : (m.push(b), p[b] = 1)
                }
                return f.getStatus() === pe && m.length && We({
                    baseUrl: e,
                    subscribeSet: new Set(m),
                    subscribe: function(e) {
                        f.send(JSON.stringify({
                            method: "SUBSCRIBE",
                            params: e,
                            id: Ie()
                        }))
                    }
                }), i
            }

            function je(e) {
                var t = Ne(e).client;
                return J((function(e) {
                    var r = t.onReConnected((function(t) {
                        e.next({
                            event: "reConnected",
                            data: t
                        })
                    }));
                    return function() {
                        r()
                    }
                }))
            }

            function qe(e) {
                var t = Ne(e).client;
                return J((function(e) {
                    var r = t.onOpen((function() {
                            t.readyState === pe && e.next({
                                status: "connected"
                            })
                        })),
                        n = t.onClose((function() {
                            t.readyState === me && e.next({
                                status: "disconnected"
                            })
                        })),
                        i = t.onReConnecting((function(r) {
                            t.readyState === de && e.next({
                                status: "connecting",
                                times: r
                            })
                        }));
                    return e.next({
                            status: t.getStatus() === pe ? "connected" : "disconnected"
                        }),
                        function() {
                            r(), n(), i()
                        }
                }))
            }

            function Ge(e, t, r) {
                if (e.stream) return e.stream in t;
                var n = function(e) {
                    var t = Array.isArray(e),
                        r = (e = t ? e[0] : e) || {},
                        n = r.s,
                        i = r.k,
                        o = r.e,
                        a = r.ct,
                        s = r.ps,
                        l = r.i;
                    return o ? {
                        symbol: n || (null === i || void 0 === i ? void 0 : i.s),
                        stream: o,
                        interval: null === i || void 0 === i ? void 0 : i.i,
                        pair: s || l,
                        contractType: a,
                        isArr: t
                    } : void 0
                }(e.data);
                return !!n && ve(r.map((function(e) {
                    return Object.assign({}, e, n)
                }))).streams.some((function(e) {
                    return e && e in t
                }))
            }

            function Ve(e, t, r) {
                var n = r.transform,
                    i = r.filter,
                    o = ve(t),
                    a = o.typeMaps,
                    s = o.streams;
                return J((function(r) {
                    var o = function(e) {
                            return r.next(e)
                        },
                        l = Ne(e, s).wsStream.subscribe((function(e) {
                            var r = e.filter((function(e) {
                                return Ge(e, a, t) && (!i || i(e))
                            }));
                            if (r.length) {
                                var s = r[0];
                                s.coalscedMsg = r;
                                var l = n(s);
                                "function" === typeof l ? l(o) : o(l)
                            }
                        }));
                    return function() {
                        ! function(e, t) {
                            var r = e.toLowerCase(),
                                n = Ee.get(r);
                            if (n) {
                                var i = n.client,
                                    o = n.streamStatus,
                                    a = [];
                                t.forEach((function(e) {
                                    var t = o[e];
                                    "undefined" !== typeof t && (o[e] = Math.max(0, t - 1), 0 === o[e] && (a.push(e), delete o[e]))
                                })), a.length && We({
                                    baseUrl: e,
                                    unsubscribeSet: new Set(a),
                                    unsubscribe: function(e) {
                                        i.send(JSON.stringify({
                                            method: "UNSUBSCRIBE",
                                            params: e,
                                            id: Ie()
                                        }))
                                    }
                                })
                            }
                        }(e, s), l()
                    }
                }))
            }

            function Ze(e, t) {
                return Ve(t.wssBaseUrl, [{
                    stream: "depth",
                    symbol: e,
                    speed: t.speed
                }], {
                    transform: function(e) {
                        var t = function(e) {
                            for (var t = [], r = 0; r < e.length; r++) {
                                var n = e[r].data;
                                t.push({
                                    asks: n.a || [],
                                    bids: n.b || [],
                                    symbol: n.s,
                                    lastUpdateId: n.u,
                                    firstUpdateId: n.U,
                                    preLastUpdateId: n.pu
                                })
                            }
                            return t
                        }(e.coalscedMsg);
                        return function(e) {
                            return t.forEach((function(t) {
                                return e(t)
                            }))
                        }
                    }
                })
            }
            var Ye = function(e, t) {
                return e - t
            };

            function Xe(e, t) {
                return Number(Math.abs(e - 0).toFixed(t)) < Math.pow(10, -1 * (t + 1))
            }

            function Qe(e, t) {
                return "".concat(e, "@").concat(t)
            }

            function $e(e, t) {
                for (var r, n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ye, o = e.length - 1, a = 0; o >= a;)
                    if ((n = i(e[r = (o + a) / 2 >>> 0], t)) < 0) a = r + 1;
                    else {
                        if (!(n > 0)) return r;
                        o = r - 1
                    }
                return -1
            }

            function Je(e, t) {
                for (var r, n, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ye, o = e.length - 1, a = 0, s = -1; o >= a;)
                    if ((n = i(e[r = (o + a) / 2 >>> 0], t)) < 0) a = r + 1;
                    else {
                        if (!(n > 0)) {
                            s = r;
                            break
                        }
                        o = r - 1
                    }
                for (-1 === s && (s = o), s++, o = e.length - 1; s < o && 0 === i(t, e[s]);) s++;
                for (r = e.length; r > s;) e[r] = e[--r];
                return e[s] = t, s
            }

            function et(e) {
                var t = String(e),
                    r = t.indexOf(".");
                return r < 0 ? 0 : t.length - r - 1
            }

            function tt(e, t, r) {
                var n = e % t;
                switch (r) {
                    case "floor":
                        return e - n;
                    case "ceil":
                        return 0 === n ? e : e - n + t;
                    default:
                        return n < t / 2 ? e - n : e + t - n
                }
            }

            function rt(e, t, r) {
                var n = Number(t);
                if (n < 1) {
                    var i = et(t),
                        o = et(e);
                    return 0 === o ? e + "." + "0".repeat(i) : o <= i ? e + "0".repeat(i - o) : (tt(function(e, t) {
                        var r = t,
                            n = String(e).split("");
                        if (n.indexOf(".") < 0) return +e * Math.pow(10, t);
                        for (var i = 0; i < n.length && r > 0; i++) {
                            var o = n[i];
                            if ("." === o) {
                                var a = n[i + 1] || "0";
                                n[i] = a, n[i + 1] = o, r--
                            } else n[i] = o
                        }
                        return Number(n.join(""))
                    }(e, i), 1, r) * n).toFixed(i)
                }
                return tt(Number(e), n, r).toFixed(0)
            }

            function nt(e, t, r, n, i) {
                var o = e.entityById;
                t.forEach((function(t) {
                    var a = t[0],
                        s = Number(t[1]),
                        l = o[a];
                    if (l) {
                        0 === s && delete o[a];
                        var c = s - l.amount;
                        Xe(c, i) || (l.amount = s, function(e, t) {
                            for (var r = t.price, n = t.amountDelta, i = t.type, o = t.levels, a = t.quantityPrecision, s = e.levelById, l = {
                                    children: e.tree
                                }, c = -1; ++c < o.length;) {
                                var u = l.children;
                                if (!u) break;
                                var d = o[c],
                                    p = rt(r, d, i),
                                    f = Qe(d, p),
                                    m = s[f];
                                if (m) {
                                    if (l = m.treeNode, m.amount += n, Xe(m.amount, a)) {
                                        var h = $e(u, Number(p), (function(e, t) {
                                            return e.price - t
                                        }));
                                        if (h >= 0) {
                                            u.splice(h, 1), delete s[f];
                                            for (var b = c + 1; b < o.length; b++) {
                                                var g = o[b];
                                                delete s[Qe(g, rt(r, g, i))]
                                            }
                                            delete e.entityById[r]
                                        }
                                        return
                                    }
                                    m.total += +r * n
                                } else delete e.entityById[r]
                            }
                        }(e, {
                            price: a,
                            amountDelta: c,
                            levels: r,
                            type: n,
                            quantityPrecision: i
                        }))
                    } else 0 !== s && function(e, t) {
                        var r = t.price,
                            n = t.amount,
                            i = t.type,
                            o = t.levels,
                            a = e.entityById,
                            s = e.levelById,
                            l = e.tree;
                        a[r] = {
                            amount: n
                        };
                        for (var c = {
                                children: l
                            }, u = -1; ++u < o.length;) {
                            var d = c.children = c.children || [],
                                p = o[u],
                                f = rt(r, p, i),
                                m = Qe(p, f),
                                h = s[m];
                            h ? (c = h.treeNode, h.amount += n, h.total += +r * n) : (h = {
                                amount: n,
                                total: +r * n,
                                treeNode: c = {
                                    levelID: m,
                                    level: p,
                                    price: f,
                                    numberPrice: Number(f)
                                }
                            }, s[m] = h, Je(d, c, (function(e, t) {
                                return e.numberPrice - t.numberPrice
                            })))
                        }
                    }(e, {
                        price: a,
                        amount: s,
                        levels: r,
                        type: n
                    })
                }))
            }

            function it(e, t) {
                (t.asks.length || t.bids.length) && (t.asks.length && nt(e.ask, t.asks, e.levels, "ceil", e.quantityPrecision), t.bids.length && nt(e.bid, t.bids, e.levels, "floor", e.quantityPrecision))
            }

            function ot(e, t) {
                return {
                    levels: e.sort((function(e, t) {
                        return Number(t) - Number(e)
                    })),
                    ask: {
                        tree: [],
                        entityById: Object.create({}),
                        levelById: Object.create({})
                    },
                    bid: {
                        tree: [],
                        entityById: Object.create({}),
                        levelById: Object.create({})
                    },
                    quantityPrecision: t
                }
            }

            function at(e, t) {
                var r = (0, f.A)({}, e.entityById);
                return t.forEach((function(e) {
                    var t = (0, n.A)(e, 2),
                        i = t[0],
                        o = t[1],
                        a = Number(o);
                    0 === a ? delete r[i] : r[i] = {
                        amount: a
                    }
                })), r
            }

            function st(e) {
                var t, r, i = e.asks,
                    o = e.bids;
                return (t = Math).min.apply(t, (0, b.A)(i.map((function(e) {
                    var t = (0, n.A)(e, 2),
                        r = t[0];
                    t[1];
                    return Number(r)
                })))) < (r = Math).max.apply(r, (0, b.A)(o.map((function(e) {
                    var t = (0, n.A)(e, 2),
                        r = t[0];
                    t[1];
                    return Number(r)
                }))))
            }

            function lt(e, t) {
                console.log(e), window.SensorsSdk && window.SensorsSdk.track && window.SensorsSdk.track(e, t)
            }
            var ct = new ae,
                ut = -1 / 0,
                dt = ot([], 1),
                pt = {
                    getState: function() {
                        return dt
                    },
                    subscribe: function() {
                        return function() {
                            return null
                        }
                    },
                    getSnapshot: function() {
                        return {
                            init: !0
                        }
                    }
                };

            function ft(e, t) {
                var r = t.apiBaseUrl,
                    n = t.wssBaseUrl,
                    i = t.levels,
                    o = t.speed,
                    a = t.quantityPrecision;
                if (i.length <= 0 || !e) return pt;
                var s = [e, r, n, i].map((function(e) {
                        return JSON.stringify(e)
                    })).join(""),
                    l = ct.get(s);
                if (l) return l;
                var c = ot(i, a),
                    u = {
                        lastUpdateId: ut,
                        firstEvent: !0
                    },
                    d = J((function(t) {
                        var l = function() {
                                if (!p && 0 !== h.length) {
                                    var e = function(e, t) {
                                            var r = {
                                                    orderBookDelayed: !1,
                                                    buffer: []
                                                },
                                                n = t[0];
                                            if ("undefined" !== typeof n.preLastUpdateId) {
                                                if (e.firstEvent) {
                                                    var i = t.findIndex((function(t) {
                                                        return t.firstUpdateId <= e.lastUpdateId && t.lastUpdateId >= e.lastUpdateId
                                                    }));
                                                    return -1 !== i ? {
                                                        orderBookDelayed: !1,
                                                        buffer: t.slice(i)
                                                    } : n.firstUpdateId > e.lastUpdateId ? {
                                                        orderBookDelayed: !0,
                                                        buffer: t
                                                    } : r
                                                }
                                                var o = t.findIndex((function(t) {
                                                    return t.preLastUpdateId === e.lastUpdateId
                                                }));
                                                return -1 !== o ? {
                                                    orderBookDelayed: !1,
                                                    buffer: t.slice(o)
                                                } : n.preLastUpdateId && n.preLastUpdateId > e.lastUpdateId ? {
                                                    orderBookDelayed: !0,
                                                    buffer: t
                                                } : r
                                            }
                                            if (e.firstEvent) {
                                                var a = t.findIndex((function(t) {
                                                    return t.firstUpdateId <= e.lastUpdateId + 1 && t.lastUpdateId >= e.lastUpdateId + 1
                                                }));
                                                return -1 !== a ? {
                                                    orderBookDelayed: !1,
                                                    buffer: t.slice(a)
                                                } : n.firstUpdateId > e.lastUpdateId + 1 ? {
                                                    orderBookDelayed: !0,
                                                    buffer: t
                                                } : r
                                            }
                                            var s = t.findIndex((function(t) {
                                                return t.firstUpdateId === e.lastUpdateId + 1
                                            }));
                                            return -1 !== s ? {
                                                orderBookDelayed: !1,
                                                buffer: t.slice(s)
                                            } : n.firstUpdateId > e.lastUpdateId + 1 ? {
                                                orderBookDelayed: !0,
                                                buffer: t
                                            } : r
                                        }(u, h),
                                        r = e.orderBookDelayed,
                                        n = e.buffer;
                                    if (r) return lt("orderbook_shown_data_delayed", {
                                        cacheId: s,
                                        preLastUpdateId: u.lastUpdateId,
                                        wsPreLastUpdateId: h[0].preLastUpdateId
                                    }), v();
                                    if (0 === n.length) return lt("orderbook_ws_buffer_delayed", {
                                        cacheId: s,
                                        preLastUpdateId: u.lastUpdateId,
                                        wsPreLastUpdateId: h[h.length - 1].lastUpdateId
                                    }), void(h = []);
                                    if (function(e) {
                                            var t, r, n = e.ask.entityById,
                                                i = e.bid.entityById;
                                            return (t = Math).min.apply(t, (0, b.A)(Object.keys(n).map(Number))) < (r = Math).max.apply(r, (0, b.A)(Object.keys(i).map(Number)))
                                        }(n.reduce((function(e, t) {
                                            return function(e, t) {
                                                if (!t.asks.length && !t.bids.length) return e;
                                                var r = e.ask.entityById,
                                                    n = e.bid.entityById;
                                                return t.asks.length && (r = at(e.ask, t.asks)), t.bids.length && (n = at(e.bid, t.bids)), (0, m.A)((0, f.A)({}, e), {
                                                    ask: (0, m.A)((0, f.A)({}, e.ask), {
                                                        entityById: r
                                                    }),
                                                    bid: (0, m.A)((0, f.A)({}, e.bid), {
                                                        entityById: n
                                                    })
                                                })
                                            }(e, t)
                                        }), c))) return lt("orderbook_crossed", {
                                        cacheId: s
                                    }), v();
                                    u = {
                                        lastUpdateId: n[n.length - 1].lastUpdateId,
                                        firstEvent: !1
                                    }, n.forEach((function(e) {
                                        return it(c, e)
                                    })), t.next(c), h = []
                                }
                            },
                            d = !0,
                            p = !1,
                            h = [],
                            g = function(e, t) {
                                var r, n;
                                return function() {
                                    n ? (clearTimeout(r), r = setTimeout((function() {
                                        e(), n = Date.now()
                                    }), t - (Date.now() - n))) : (e(), n = Date.now())
                                }
                            }((0, re.A)(ie().mark((function n() {
                                var o, l;
                                return ie().wrap((function(n) {
                                    for (;;) switch (n.prev = n.next) {
                                        case 0:
                                            if (n.prev = 0, d) {
                                                n.next = 3;
                                                break
                                            }
                                            return n.abrupt("return");
                                        case 3:
                                            return n.next = 5, (0, oe.get)("".concat(r, "?symbol=").concat(e.toUpperCase(), "&limit=").concat(1e3));
                                        case 5:
                                            if ("number" === typeof(o = n.sent).lastUpdateId) {
                                                n.next = 8;
                                                break
                                            }
                                            throw new Error("invalid response, lastUpdateId not a number");
                                        case 8:
                                            if (!(o.lastUpdateId <= u.lastUpdateId)) {
                                                n.next = 12;
                                                break
                                            }
                                            return lt("orderbook_api_delayed", {
                                                cacheId: s
                                            }), n.abrupt("return", v());
                                        case 12:
                                            if (!st(o)) {
                                                n.next = 16;
                                                break
                                            }
                                            return lt("orderbook_api_crossed", {
                                                cacheId: s
                                            }), n.abrupt("return", v());
                                        case 16:
                                            p = !1, lt(u.lastUpdateId === ut ? "orderbook_api_init" : "orderbook_api_sync", {
                                                cacheId: s
                                            }), u = {
                                                lastUpdateId: o.lastUpdateId,
                                                firstEvent: !0
                                            }, it(c = ot(i, a), o), t.next(c), n.next = 32;
                                            break;
                                        case 24:
                                            if (n.prev = 24, n.t0 = n.catch(0), l = n.t0.code || n.t0.status, lt("orderbook_api_error", {
                                                    cacheId: s,
                                                    code: l,
                                                    msg: n.t0.message
                                                }), 419 !== l && 418 !== l && 429 !== l) {
                                                n.next = 31;
                                                break
                                            }
                                            return n.next = 31, new Promise((function(e) {
                                                return setTimeout(e, 6e4)
                                            }));
                                        case 31:
                                            p = !1;
                                        case 32:
                                        case "end":
                                            return n.stop()
                                    }
                                }), n, null, [
                                    [0, 24]
                                ])
                            }))), 2e3),
                            v = function() {
                                p = !0, g()
                            };
                        v();
                        var y = Ze(e, {
                            wssBaseUrl: n,
                            speed: o
                        }).subscribe((function(e) {
                            if (0 === h.length) return h = [e], l();
                            var t = h[h.length - 1],
                                r = "undefined" !== typeof e.preLastUpdateId ? e.preLastUpdateId < t.lastUpdateId : e.firstUpdateId < t.lastUpdateId + 1,
                                n = "undefined" !== typeof e.preLastUpdateId ? e.preLastUpdateId === t.lastUpdateId : e.firstUpdateId === t.lastUpdateId + 1;
                            return r || (n ? (h.push(e), h = h.slice(-1e4)) : h = [e]), l()
                        }));
                        return function() {
                            ct.delete(s), d = !1, y()
                        }
                    })),
                    p = {
                        getState: function() {
                            return c
                        },
                        getSnapshot: function() {
                            return (0, f.A)({}, u)
                        },
                        subscribe: function(e) {
                            return d.subscribe((function() {
                                return e(c)
                            }))
                        }
                    };
                return ct.set(s, p), p
            }
            var mt = {
                isolated: !0,
                cross: !1
            };

            function ht(e) {
                var t = e.split(".");
                return function(e) {
                    for (var r = 0; r < t.length; r++) {
                        if (!e) return;
                        e = e[t[r]]
                    }
                    return e
                }
            }
            var bt = function(e) {
                    var t = ht(e);
                    return function(e) {
                        return Number(t(e))
                    }
                },
                gt = function(e) {
                    var t = ht(e);
                    return function(e) {
                        return t(e)
                    }
                },
                vt = function(e) {
                    var t = ht(e);
                    return function(e) {
                        return mt[t(e)]
                    }
                },
                yt = function() {
                    return function(e) {
                        return Date.now()
                    }
                };

            function xt(e, t) {
                for (var r = Object.keys(t), n = Object.create(null), i = 0; i < r.length; i++) {
                    var o = r[i],
                        a = t[o],
                        s = void 0;
                    s = "function" === typeof a ? a(e) : e[a], n[o] = s
                }
                return n
            }

            function wt(e) {
                return xt(e, {
                    eventType: "e",
                    pair: "ps",
                    eventTime: "E",
                    symbol: "s",
                    contractType: "ct",
                    deliveryDate: "dt",
                    onboardDate: "ot",
                    contractStatus: "cs",
                    brackets: "bks"
                })
            }

            function kt(e) {
                return xt(e, {
                    pair: "ps",
                    contractType: "ct",
                    eventTime: "E",
                    time: ht("k.t"),
                    open: bt("k.o"),
                    close: bt("k.c"),
                    high: bt("k.h"),
                    low: bt("k.l"),
                    volume: bt("k.v"),
                    quantity: bt("k.q")
                })
            }

            function St(e) {
                var t = e.pair,
                    r = e.contractType,
                    n = e.interval,
                    i = e.options,
                    o = i.type,
                    a = i.priceType,
                    s = i.symbol,
                    l = "UM" === o && "index" === a ? {
                        stream: "kline",
                        symbol: "i".concat(t.toUpperCase()),
                        interval: n,
                        upperSymbolWithPrefix: !0
                    } : "UM" === o && "mark" === a ? {
                        stream: "kline",
                        symbol: "m".concat(s.toUpperCase()),
                        interval: n,
                        upperSymbolWithPrefix: !0
                    } : "CM" === o && "index" === a ? {
                        stream: "indexPriceKline",
                        pair: t,
                        interval: n
                    } : "CM" === o && "mark" === a ? {
                        stream: "markPriceKline",
                        symbol: s,
                        interval: n
                    } : {
                        stream: "continuous_kline",
                        pair: t,
                        contractType: r,
                        interval: n
                    };
                return Ve(i.wssBaseUrl, [l], {
                    transform: function(e) {
                        var t = e.coalscedMsg;
                        return 1 === t.length ? kt(t[0].data) : function(e) {
                            return t.forEach((function(t) {
                                return e(kt(t.data))
                            }))
                        }
                    }
                })
            }

            function Bt(e) {
                return xt(e, {
                    pair: "ps",
                    eventTime: "E",
                    symbol: "s",
                    contractType: "ct",
                    deliveryDate: "dt",
                    onboardDate: "ot",
                    contractStatus: "cs",
                    brackets: "bks"
                })
            }
            var _t, At = function(e) {
                var t = e.data,
                    r = e.eventType,
                    n = e.keys;
                return t.e === r && (!t.lk || n.some((function(e) {
                    return e.listenKey === t.lk
                })))
            };

            function Ut(e, t, r) {
                return t === _t.ISOLATED ? (0, oe.post)(e, (0, f.A)({}, r)) : (0, oe.post)(e, t === _t.CROSS ? (0, f.A)({
                    accountType: "MARGIN"
                }, r) : (0, f.A)({}, r)).then((function(e) {
                    return (0, m.A)((0, f.A)({}, e), {
                        data: [{
                            symbol: null,
                            listenKey: e.data
                        }]
                    })
                }))
            }

            function Tt(e, t, r, n) {
                if (t === _t.ISOLATED || t === _t.PM) return (0, oe.post)(e, (0, f.A)({}, n));
                var i = r.map((function(e) {
                    return e.listenKey
                })).join("");
                return (0, oe.post)(e, (0, f.A)({
                    listenKey: i
                }, n))
            }! function(e) {
                e.SPOT = "SPOT", e.CROSS = "CROSS", e.ISOLATED = "ISOLATED", e.FUTURES = "FUTURES", e.FUTURES_CM = "FUTURES_CM", e.PM = "PM"
            }(_t || (_t = {}));
            var Ct, Et = new ae;

            function Ot(e, t, r, n) {
                var i, o = e.apiGetKeyUrl,
                    a = e.apiRefreshKeyUrl,
                    s = e.wssBaseUrl,
                    l = t.type,
                    c = t.eventType,
                    u = t.transform,
                    d = !1,
                    h = l,
                    b = function() {
                        var e = (0, re.A)(ie().mark((function e(t) {
                            var n, b, g, v;
                            return ie().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!d) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return null === (n = Et.get(h)) ? (b = Ut(o, l, r).then((function(e) {
                                            var t = e.data || [];
                                            return setInterval((function() {
                                                return Tt(a, l, t, r)
                                            }), 3e6), t
                                        })), Et.set(h, b)) : b = n, e.next = 7, b;
                                    case 7:
                                        g = e.sent, v = g.reduce((function(e, t) {
                                            return (0, m.A)((0, f.A)({}, e), (0, p.A)({}, t.listenKey, t.symbol))
                                        }), {}), i = Ve(s, g.map((function(e) {
                                            return {
                                                stream: "userData",
                                                key: e.listenKey
                                            }
                                        })), {
                                            filter: function(e) {
                                                return At({
                                                    data: e.data,
                                                    eventType: c,
                                                    keys: g
                                                })
                                            },
                                            transform: function(e) {
                                                return u(e, v)
                                            }
                                        }).subscribe((function(e) {
                                            return t.next(e)
                                        }));
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return J((function(e) {
                    return b(e),
                        function() {
                            d = !0, i && (i(), Boolean(n) && Et.delete(h))
                        }
                }))
            }

            function It(e, t) {
                return Ot(e, {
                    type: e.type,
                    eventType: "GRID_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t({
                                    grid: xt(r.gu, {
                                        strategyId: bt("si"),
                                        strategyType: gt("st"),
                                        strategyStatus: gt("ss"),
                                        symbol: gt("s"),
                                        gridProfit: bt("r"),
                                        unmatchedAvgPrice: bt("up"),
                                        unmatchedQty: bt("uq"),
                                        unmatchedFee: bt("uf"),
                                        matchedPnl: bt("mp"),
                                        updateTime: bt("ut")
                                    })
                                })
                            }))
                        }
                    }
                }, t)
            }

            function Dt(e) {
                var t = e.symbol;
                return Ve(e.wssBaseUrl, [{
                    stream: "netValue",
                    symbol: t
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                            var i = xt(r[n].data, {
                                symbol: "s",
                                eventTime: "E",
                                circulation: "m",
                                netValue: "n",
                                lever: "l",
                                positions: function(e) {
                                    return (e.b || []).map((function(e) {
                                        return xt(e, {
                                            symbol: "s",
                                            amount: "n"
                                        })
                                    }))
                                },
                                liLunlever: "t"
                            });
                            t[i.symbol] = i
                        }
                        return t
                    }
                })
            }

            function Pt(e) {
                return Ve(e.wssBaseUrl, [{
                    stream: "netValueAll"
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, o = 0; o < i.length; o++) {
                                var a = xt(i[o], {
                                    symbol: "s",
                                    amount: "n",
                                    realLeverage: "l"
                                });
                                t[a.symbol] = a
                            }
                        return t
                    }
                })
            }

            function Rt(e, t) {
                return Ve(t.wssBaseUrl, [{
                    stream: "tradeAggregate",
                    symbol: e
                }], {
                    transform: function(e) {
                        return e.coalscedMsg.map((function(e) {
                            return xt(e.data, {
                                symbol: "s",
                                eventTime: "E",
                                aggTradeId: "a",
                                price: "p",
                                quantity: "q",
                                firstTradeId: "f",
                                lastTradeId: "l",
                                tradeTime: "T",
                                buyerIsMaker: "m"
                            })
                        }))
                    }
                })
            }

            function zt(e, t) {
                return Ve(t.wssBaseUrl, [{
                    stream: "aggSnap",
                    symbol: e
                }], {
                    transform: function(e) {
                        return e.coalscedMsg.map((function(e) {
                            return xt(e.data, {
                                price: "p",
                                quantity: "cq",
                                tradeTime: "T"
                            })
                        })).map((function(e) {
                            return (0, m.A)((0, f.A)({}, e), {
                                buyerIsMaker: Number(e.quantity) > 0,
                                quantity: String(Math.abs(Number(e.quantity)))
                            })
                        }))
                    }
                })
            }

            function Ft(e) {
                return Ve(e.wssBaseUrl, [{
                    stream: "tickerMiniAll",
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, o = 0; o < i.length; o++) {
                                var a = xt(i[o], {
                                    symbol: "s",
                                    eventTime: "E",
                                    openPrice: bt("o"),
                                    highPrice: bt("h"),
                                    lowPrice: bt("l"),
                                    lastPrice: bt("c"),
                                    volume: bt("v"),
                                    quoteVolume: bt("q")
                                });
                                t[a.symbol] = a
                            }
                        return t
                    }
                })
            }

            function Wt(e) {
                return xt(e, {
                    symbol: "s",
                    eventTime: "E",
                    time: ht("k.t"),
                    open: bt("k.o"),
                    close: bt("k.c"),
                    high: bt("k.h"),
                    low: bt("k.l"),
                    volume: bt("k.v"),
                    quantity: bt("k.q")
                })
            }

            function Mt(e, t, r) {
                return Ve(r.wssBaseUrl, [{
                    stream: r.leveragedToken ? "l_kline" : "kline",
                    symbol: e,
                    interval: t,
                    timeZone: r.timeZone
                }], {
                    transform: function(e) {
                        var t = function(e) {
                            if (e.length <= 1) return e;
                            for (var t = [], r = e[0], n = 1; n < e.length; n++) {
                                var i = e[n];
                                r.data.k.t !== i.data.k.t && t.push(r), r = i
                            }
                            return t.push(r), t
                        }(e.coalscedMsg);
                        return 1 === t.length ? Wt(t[0].data) : function(e) {
                            return t.forEach((function(t) {
                                return e(Wt(t.data))
                            }))
                        }
                    }
                })
            }

            function Lt(e) {
                return xt(e, {
                    symbol: "s",
                    eventTime: "E",
                    time: ht("k.t"),
                    open: bt("k.o"),
                    close: bt("k.c"),
                    high: bt("k.h"),
                    low: bt("k.l"),
                    volume: bt("k.v"),
                    quantity: bt("k.q")
                })
            }

            function Ht(e) {
                return xt(e, {
                    symbol: "s",
                    updateTimestamp: "E",
                    id: "i",
                    noticeType: "n",
                    eventType: "e",
                    period: "P",
                    priceChange: "p",
                    openTime: "o",
                    createTimestamp: "c"
                })
            }

            function Kt(e) {
                return Ve(e.wssBaseUrl, [{
                    stream: "tickerAllWindowSize",
                    windowSize: e.windowSize,
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, o = 0; o < i.length; o++) {
                                var a = xt(i[o], {
                                    symbol: "s",
                                    eventTime: "E",
                                    openPrice: bt("o"),
                                    highPrice: bt("h"),
                                    lowPrice: bt("l"),
                                    lastPrice: bt("c"),
                                    volume: bt("v"),
                                    quoteVolume: bt("q")
                                });
                                t[a.symbol] = a
                            }
                        return t
                    }
                })
            }

            function Nt(e) {
                return Ve(e.wssBaseUrl, [{
                    stream: "tickerAllWindowSize",
                    windowSize: e.windowSize,
                    speed: e.speed
                }], {
                    transform: function(e) {
                        return e.coalscedMsg.reduce((function(e, t) {
                            return t.data.forEach((function(t) {
                                return e[t.s] = t
                            })), e
                        }), {})
                    }
                })
            }

            function jt(e) {
                return Ve(e.wssBaseUrl, [{
                    stream: "markPriceAll",
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, o = 0; o < i.length; o++) {
                                var a = xt(i[o], {
                                    symbol: "s",
                                    eventTime: "E",
                                    markPrice: bt("p"),
                                    indexPrice: bt("i"),
                                    nextFundingTime: bt("T"),
                                    lastFundingRate: bt("r"),
                                    estimatedSettlePrice: bt("P")
                                });
                                t[a.symbol] = a
                            }
                        return t
                    }
                })
            }

            function qt(e) {
                return Ve(e.wssBaseUrl, [{
                    stream: "markPriceMini",
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                            for (var i = r[n].data, o = 0; o < i.length; o++) {
                                var a = xt(i[o], {
                                    symbol: "s",
                                    markPrice: bt("p")
                                });
                                t[a.symbol] = a
                            }
                        return t
                    }
                })
            }

            function Gt(e) {
                return Ve(e.wssBaseUrl, [{
                    stream: "markPrice",
                    symbol: e.symbol,
                    speed: e.speed
                }], {
                    transform: function(e) {
                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                            var i = xt(r[n].data, {
                                symbol: "s",
                                eventTime: "E",
                                markPrice: bt("p"),
                                indexPrice: bt("i"),
                                estimatedSettlePrice: bt("P"),
                                nextFundingTime: bt("T"),
                                lastFundingRate: bt("r")
                            });
                            t[i.symbol] = i
                        }
                        return t
                    }
                })
            }

            function Vt(e, t, r) {
                if (t === Ct.ISOLATED) return (0, oe.post)(e, {});
                var n = r.map((function(e) {
                    return e
                })).join("");
                return (0, oe.post)(e, {
                    listenKey: n
                })
            }

            function Zt(e, t) {
                var r, n = e.userListenKeys,
                    i = e.apiRefreshKeyUrl,
                    o = e.wssBaseUrl,
                    a = t.type,
                    s = t.eventType,
                    l = t.transform,
                    c = !1,
                    u = function() {
                        var e = (0, re.A)(ie().mark((function e(t) {
                            var u;
                            return ie().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!c) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        setInterval((function() {
                                            return Vt(i, a, n)
                                        }), 3e6), u = n.reduce((function(e, t) {
                                            return (0, m.A)((0, f.A)({}, e), (0, p.A)({}, t, t))
                                        }), {}), r = Ve(o, n.map((function(e) {
                                            return {
                                                stream: "userData",
                                                key: e
                                            }
                                        })), {
                                            filter: function(e) {
                                                return At({
                                                    data: e.data,
                                                    eventType: s,
                                                    keys: n.map((function(e) {
                                                        return {
                                                            listenKey: e
                                                        }
                                                    }))
                                                })
                                            },
                                            transform: function(e) {
                                                return l(e, u)
                                            }
                                        }).subscribe((function(e) {
                                            return t.next(e)
                                        }));
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return J((function(e) {
                    return u(e),
                        function() {
                            c = !0, r && r()
                        }
                }))
            }

            function Yt(e, t) {
                return Ot(e, {
                    type: e.type,
                    eventType: "STRATEGY_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t({
                                    streategy: xt(r.su, {
                                        symbol: gt("s"),
                                        strategyId: bt("si"),
                                        strategyType: gt("st"),
                                        strategyStatus: gt("ss"),
                                        updateTime: bt("ut"),
                                        code: bt("c")
                                    })
                                })
                            }))
                        }
                    }
                }, t)
            }

            function Xt(e) {
                return Zt(e, {
                    type: e.type,
                    eventType: "ACCOUNT_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return t({
                                listenKey: e.data.lk,
                                balances: e.data.a.B.map((function(e) {
                                    return xt(e, {
                                        asset: "a",
                                        walletBalance: bt("wb"),
                                        crossWalletBalance: bt("cw")
                                    })
                                })),
                                positions: e.data.a.P.map((function(e) {
                                    return xt(e, {
                                        symbol: "s",
                                        positionAmount: bt("pa"),
                                        entryPrice: bt("ep"),
                                        cumRealized: bt("cr"),
                                        unrealizedProfit: bt("up"),
                                        marginType: "mt",
                                        isolatedWallet: bt("iw"),
                                        positionSide: "ps",
                                        marginAsset: "ma",
                                        initialMarkPrice: 0
                                    })
                                }))
                            })
                        }
                    }
                })
            }

            function Qt(e) {
                return Zt(e, {
                    type: e.type,
                    eventType: "ACCOUNT_CONFIG_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data,
                                    n = xt(r, {
                                        event: gt("e"),
                                        eventTime: bt("E"),
                                        summaryTime: bt("T"),
                                        listenKey: gt("lk")
                                    });
                                return r.ac && (n.leverage = xt(r.ac, {
                                    symbol: "s",
                                    leverage: "l"
                                })), r.ai && (n.joinMargin = xt(r.ai, {
                                    open: "j"
                                })), t(n)
                            }))
                        }
                    }
                })
            }

            function $t(e) {
                return Zt(e, {
                    type: e.type,
                    eventType: "GRID_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t({
                                    grid: xt(r.gu, {
                                        strategyId: bt("si"),
                                        strategyType: gt("st"),
                                        strategyStatus: gt("ss"),
                                        symbol: gt("s"),
                                        gridProfit: bt("r"),
                                        unmatchedAvgPrice: bt("up"),
                                        unmatchedQty: bt("uq"),
                                        unmatchedFee: bt("uf"),
                                        matchedPnl: bt("mp"),
                                        updateTime: bt("ut")
                                    })
                                })
                            }))
                        }
                    }
                })
            }

            function Jt(e) {
                return Zt(e, {
                    type: e.type,
                    eventType: "ORDER_TRADE_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t({
                                    order: xt(r.o, {
                                        symbol: "s",
                                        insertTime: "T",
                                        type: "o",
                                        side: "S",
                                        price: bt("p"),
                                        avgPrice: bt("ap"),
                                        executedPrice: bt("ap"),
                                        executedQty: bt("z"),
                                        origQty: "q",
                                        stopPrice: bt("sp"),
                                        operate: "x",
                                        status: "X",
                                        orderId: "i",
                                        clientOrderId: "c",
                                        orderType: "o",
                                        origType: "ot",
                                        timeInForce: "f",
                                        bidNotional: bt("b"),
                                        askNotional: bt("a"),
                                        workingType: "wt",
                                        positionSide: "ps",
                                        reduceOnly: "R",
                                        strategyId: "si",
                                        strategySubId: "ss",
                                        strategyType: "st",
                                        closePosition: "cp",
                                        activatePrice: bt("AP"),
                                        callbackRate: bt("cr")
                                    })
                                })
                            }))
                        }
                    }
                })
            }

            function er(e) {
                return Ot(e, {
                    type: e.type,
                    eventType: "outboundAccountPosition",
                    transform: function(e, t) {
                        return function(r) {
                            return e.coalscedMsg.forEach((function(e) {
                                var n = e.data,
                                    i = e.stream;
                                return r({
                                    symbol: t[i],
                                    balances: n.B.map((function(e) {
                                        return xt(e, {
                                            asset: "a",
                                            free: bt("f"),
                                            locked: bt("l")
                                        })
                                    }))
                                })
                            }))
                        }
                    }
                })
            }

            function tr(e, t, r) {
                return Ot(e, {
                    type: e.type,
                    eventType: "ACCOUNT_UPDATE",
                    transform: function(t) {
                        return function(r) {
                            return t.coalscedMsg.forEach((function(t) {
                                var n = t.data;
                                if (!n.fs || n.fs === e.PMFuturesSource) return r({
                                    balances: n.a.B.map((function(e) {
                                        return xt(e, {
                                            asset: "a",
                                            walletBalance: bt("wb"),
                                            crossWalletBalance: bt("cw")
                                        })
                                    })),
                                    positions: n.a.P.map((function(e) {
                                        return xt(e, {
                                            symbol: "s",
                                            positionSize: bt("pa"),
                                            entryPrice: bt("ep"),
                                            breakEvenPrice: bt("bep"),
                                            unrealizedPnl: bt("up"),
                                            isolated: vt("mt"),
                                            isolatedWallet: bt("iw"),
                                            positionSide: gt("ps"),
                                            marginAsset: gt("ma"),
                                            initialMarkPrice: 0
                                        })
                                    }))
                                })
                            }))
                        }
                    }
                }, t, r)
            }

            function rr(e, t, r) {
                return Ot(e, {
                    type: e.type,
                    eventType: "executionReport",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t(xt(r, {
                                    symbol: "s",
                                    clientOrderId: "c",
                                    side: "S",
                                    orderType: "o",
                                    timeInForce: "f",
                                    quantity: bt("q"),
                                    price: bt("p"),
                                    stopPrice: bt("P"),
                                    icebergQuantity: bt("F"),
                                    orderListId: "g",
                                    originalClientOrderId: "C",
                                    executionType: "x",
                                    orderStatus: "X",
                                    orderRejectReason: "r",
                                    orderId: "i",
                                    LastExecutedQuantity: bt("l"),
                                    cumulativeFilledQuantity: bt("z"),
                                    lastPrice: bt("L"),
                                    commissionAmount: bt("n"),
                                    commissionAsset: "N",
                                    transactionTime: "T",
                                    tradeId: "t",
                                    isOnOrderBook: "w",
                                    isMaker: "m",
                                    orderCreationTime: "O",
                                    cumulativeQuoteQuantity: bt("Z"),
                                    lastQuoteQuantity: bt("Y"),
                                    quoteOrderQty: bt("Q"),
                                    activatePrice: bt("AP"),
                                    callbackRate: bt("cr"),
                                    trailingDelta: "d",
                                    trailingTime: "D",
                                    workingTime: "W",
                                    isSor: "uS"
                                }))
                            }))
                        }
                    }
                }, t, r)
            }

            function nr(e, t, r) {
                return Ot(e, {
                    type: e.type,
                    eventType: "ORDER_TRADE_UPDATE",
                    transform: function(t) {
                        return function(r) {
                            return t.coalscedMsg.forEach((function(t) {
                                var n = t.data;
                                if (!n.fs || n.fs === e.PMFuturesSource) return r(xt(n.o, {
                                    symbol: "s",
                                    insertTime: "T",
                                    type: "o",
                                    side: "S",
                                    price: bt("p"),
                                    avgPrice: bt("ap"),
                                    executedPrice: bt("ap"),
                                    executedQty: bt("z"),
                                    origQty: "q",
                                    stopPrice: bt("sp"),
                                    operate: "x",
                                    status: "X",
                                    orderId: "i",
                                    clientOrderId: "c",
                                    orderType: "o",
                                    origType: "ot",
                                    timeInForce: "f",
                                    goodTillDate: bt("gtd"),
                                    bidNotional: bt("b"),
                                    askNotional: bt("a"),
                                    workingType: "wt",
                                    positionSide: "ps",
                                    reduceOnly: "R",
                                    strategyId: "si",
                                    strategySubId: "ss",
                                    strategyType: "st",
                                    closePosition: "cp",
                                    activatePrice: bt("AP"),
                                    callbackRate: bt("cr"),
                                    priceRate: bt("cr"),
                                    priceMatch: "pm"
                                }))
                            }))
                        }
                    }
                }, t, r)
            }

            function ir(e, t, r) {
                return Ot(e, {
                    type: e.type,
                    eventType: "ALGO_UPDATE",
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t(xt(r.o, {
                                    algoId: "aid",
                                    clientAlgoId: "caid",
                                    algoType: "at",
                                    orderType: "o",
                                    symbol: "s",
                                    side: "S",
                                    positionSide: "ps",
                                    timeInForce: "f",
                                    quantity: "q",
                                    algoStatus: "X",
                                    actualOrderId: "ai",
                                    actualPrice: "ap",
                                    actualQty: "aq",
                                    actualType: "act",
                                    triggerPrice: "tp",
                                    price: "p",
                                    icebergQuantity: "iq",
                                    tpTriggerPrice: "tptp",
                                    tpPrice: "tpp",
                                    tpOrderType: "tpot",
                                    slTriggerPrice: "sltp",
                                    slPrice: "slp",
                                    slOrderType: "slot",
                                    selfTradePreventionMode: "V",
                                    workingType: "wt",
                                    priceMatch: "pm",
                                    closePosition: "cp",
                                    priceProtect: "pP",
                                    reduceOnly: "R",
                                    activatePrice: "AP",
                                    callbackRate: "cr",
                                    goodTillDate: bt("gtd"),
                                    triggerTime: bt("tt"),
                                    updateTime: yt()
                                }))
                            }))
                        }
                    }
                }, t, r)
            }

            function or(e, t, r) {
                return Ot(e, {
                    type: e.type,
                    eventType: "ACCOUNT_CONFIG_UPDATE",
                    transform: function(t) {
                        return function(r) {
                            return t.coalscedMsg.forEach((function(t) {
                                var n = t.data;
                                if (!n.fs || n.fs === e.PMFuturesSource) {
                                    var i = xt(n, {
                                        event: gt("e"),
                                        eventTime: bt("E"),
                                        summaryTime: bt("T")
                                    });
                                    return n.ac && (i.leverage = xt(n.ac, {
                                        symbol: "s",
                                        leverage: "l"
                                    })), n.ai && (i.joinMargin = xt(n.ai, {
                                        open: "j"
                                    })), r(i)
                                }
                            }))
                        }
                    }
                }, t, r)
            }

            function ar(e, t) {
                return (0, oe.put)("".concat(e, "?listenKey=").concat(t))
            }! function(e) {
                e.SPOT = "SPOT", e.CROSS = "CROSS", e.ISOLATED = "ISOLATED", e.FUTURES = "FUTURES", e.FUTURES_CM = "FUTURES_CM", e.PM = "PM"
            }(Ct || (Ct = {}));
            var sr = new ae;

            function lr(e) {
                var t = function(e, t) {
                    var r, n = e.apiGetKeyUrl,
                        i = e.apiRefreshKeyUrl,
                        o = e.wssBaseUrl,
                        a = t.transform,
                        s = !1,
                        l = n,
                        c = function() {
                            var e = (0, re.A)(ie().mark((function e(t) {
                                var c, u, d;
                                return ie().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!s) {
                                                e.next = 2;
                                                break
                                            }
                                            return e.abrupt("return");
                                        case 2:
                                            return null === (c = sr.get(l)) ? (u = (p = n, (0, oe.post)(p)).then((function(e) {
                                                var t = (e.data || {}).listenKey;
                                                return setInterval((function() {
                                                    return ar(i, t)
                                                }), 3e6), t
                                            })), sr.set(l, u)) : u = c, e.next = 7, u;
                                        case 7:
                                            d = e.sent, r = Ve(o, [{
                                                stream: "userData",
                                                key: d
                                            }], {
                                                transform: function(e) {
                                                    return a(e)
                                                }
                                            }).subscribe((function(e) {
                                                return t.next(e)
                                            }));
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                    var p
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return J((function(e) {
                        return c(e),
                            function() {
                                s = !0, r && r()
                            }
                    }))
                }(e, {
                    transform: function(e) {
                        return function(t) {
                            return e.coalscedMsg.forEach((function(e) {
                                var r = e.data;
                                return t(r)
                            }))
                        }
                    }
                });
                return t
            }
            var cr = function(e) {
                    (0, Z.A)(r, e);
                    var t = (0, Y.A)(r);

                    function r(e) {
                        var n;
                        return (0, V.A)(this, r), (n = t.call(this, e)).pmSDK = e.pmSDK, n
                    }
                    var n = r.prototype;
                    return n.getOrderbookStatusStream = function() {
                        return this.withOptionsStream((function(e) {
                            return qe(e.marketWebsocketBaseUrl)
                        }))
                    }, n.getSocketEventsStream = function() {
                        return this.withOptionsStream((function(e) {
                            return je(e.marketWebsocketBaseUrl)
                        }))
                    }, n.getOrderbookStore = function(e, t) {
                        var r = t.levels,
                            n = void 0 === r ? ["1"] : r,
                            i = t.speed,
                            o = void 0 === i ? 500 : i,
                            a = t.quantityPrecision,
                            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            l = function(e) {
                                return "".concat(e).concat(s ? "/dapi" : "/fapi", "/v1/depth")
                            },
                            c = this.getOptions(),
                            u = ft(e, {
                                apiBaseUrl: l(c.apiBaseUrl),
                                wssBaseUrl: c.marketWebsocketBaseUrl,
                                levels: n,
                                speed: o,
                                quantityPrecision: a
                            });
                        return this.withOptionsStream((function(t) {
                            var r = t.apiBaseUrl,
                                i = t.marketWebsocketBaseUrl;
                            return J((function() {
                                return u = ft(e, {
                                        apiBaseUrl: l(r),
                                        wssBaseUrl: i,
                                        levels: n,
                                        speed: o,
                                        quantityPrecision: a
                                    }),
                                    function() {}
                            }))
                        })), u
                    }, n.getStreamTrade = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Rt(e, {
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamTradeSnap = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return zt(e, {
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamTickers = function() {
                        return this.withOptionsStream((function(e) {
                            return Ft({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getStreamDepth = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Ze(e, {
                                wssBaseUrl: n,
                                speed: t
                            })
                        }))
                    }, n.getStreamKline = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Mt(e, t, {
                                wssBaseUrl: n
                            })
                        }))
                    }, n.getStreamLeveragedTokenKline = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Mt(e, t, {
                                wssBaseUrl: n,
                                leveragedToken: !0
                            })
                        }))
                    }, n.getStreamNetValue = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Dt({
                                symbol: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamNetValueAll = function() {
                        return this.withOptionsStream((function(e) {
                            return Pt({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getMarkPriceMiniStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            return qt({
                                wssBaseUrl: t.marketWebsocketBaseUrl,
                                speed: e
                            })
                        }))
                    }, n.getMarkPriceAllStream = function() {
                        return this.withOptionsStream((function(e) {
                            return jt({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getMarkPriceStream = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Gt({
                                symbol: e,
                                wssBaseUrl: n,
                                speed: t
                            })
                        }))
                    }, n.getContinuousKlineStream = function(e, t, r, n) {
                        return this.withOptionsStream((function(i) {
                            var o = i.marketWebsocketBaseUrl;
                            return St({
                                pair: e,
                                contractType: t,
                                interval: r,
                                options: {
                                    wssBaseUrl: (null === n || void 0 === n ? void 0 : n.wssBaseUrl) || o,
                                    type: "CM",
                                    priceType: (null === n || void 0 === n ? void 0 : n.priceType) || "last",
                                    symbol: (null === n || void 0 === n ? void 0 : n.symbol) || ""
                                }
                            })
                        }))
                    }, n.getContractInfoStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return Ve(e.wssBaseUrl, [{
                                    stream: "contractInfo"
                                }], {
                                    transform: function(e) {
                                        var t = e.coalscedMsg;
                                        return 1 === t.length ? Bt(t[0].data) : function(e) {
                                            return t.forEach((function(t) {
                                                return e(Bt(t.data))
                                            }))
                                        }
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getUserAssetsStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t;
                        if (r && this.pmSDK) return this.pmSDK.getCMUserAssetsStream.bind(this.pmSDK)();
                        var n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return tr((0, m.A)((0, f.A)({}, n), {
                                type: _t.FUTURES_CM,
                                wssBaseUrl: t
                            }))
                        }))
                    }, n.getUserOrderStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t;
                        if (r && this.pmSDK) return this.pmSDK.getCMUserOrderStream.bind(this.pmSDK)();
                        var n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return nr((0, m.A)((0, f.A)({}, n), {
                                type: _t.FUTURES_CM,
                                wssBaseUrl: t
                            }))
                        }))
                    }, n.getAlgoOrderStream = function() {
                        return {
                            subscribe: function(e) {
                                return function() {}
                            }
                        }
                    }, n.getUserConditionalOrderStream = function() {
                        if (!this.pmSDK) throw "conditional order stream must pass PMSDK in";
                        return this.pmSDK.getCMUserConditionalOrderStream.bind(this.pmSDK)()
                    }, n.getUserAccountConfigUpdateStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t;
                        if (r && this.pmSDK) return this.pmSDK.getCMUserAccountConfigUpdateStream.bind(this.pmSDK)();
                        var n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return or((0, m.A)((0, f.A)({}, n), {
                                type: _t.FUTURES_CM,
                                wssBaseUrl: t
                            }))
                        }))
                    }, n.getIndexPriceStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return function(e) {
                                var t = e.pair;
                                return Ve(e.wssBaseUrl, [{
                                    stream: "indexPriceUpdate",
                                    pair: t
                                }], {
                                    transform: function(e) {
                                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                                            var i = xt(r[n].data, {
                                                pair: "i",
                                                indexPrice: bt("p")
                                            });
                                            t[i.pair] = i
                                        }
                                        return t
                                    }
                                })
                            }({
                                pair: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getGridStream = function() {
                        var e = this;
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return It((0, m.A)((0, f.A)({}, e._getUserKeyApiUrls()), {
                                type: _t.FUTURES_CM,
                                wssBaseUrl: r
                            }))
                        }))
                    }, n.getStrategyStream = function() {
                        var e = this;
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Yt((0, m.A)((0, f.A)({}, e._getUserKeyApiUrls()), {
                                type: _t.FUTURES_CM,
                                wssBaseUrl: r
                            }))
                        }))
                    }, n.getStrategyShadowAccountStream = function(e) {
                        var t = this.getOptions();
                        return Xt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/delivery/strategy/strategy-user-listen-keys"),
                            type: Ct.FUTURES_CM,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyAccountConfigStream = function(e) {
                        var t = this.getOptions();
                        return Qt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/delivery/strategy/strategy-user-listen-keys"),
                            type: _t.FUTURES_CM,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyGridUpdateStream = function(e) {
                        var t = this.getOptions();
                        return $t({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/delivery/strategy/strategy-user-listen-keys"),
                            type: _t.FUTURES_CM,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyGridOrderTradeUpdateStream = function(e) {
                        var t = this.getOptions();
                        return Jt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/delivery/strategy/strategy-user-listen-keys"),
                            type: _t.FUTURES_CM,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n._getUserKeyApiUrls = function() {
                        var e = this.getOptions();
                        return {
                            apiGetKeyUrl: "".concat(e.apiBaseUrl, "/bapi/futures/v1/private/delivery/user-data/user-listen-key"),
                            apiRefreshKeyUrl: "".concat(e.apiBaseUrl, "/bapi/futures/v1/private/delivery/user-data/listen-key-extend-insert")
                        }
                    }, r.setStreamBatch = function(e) {
                        Q(e)
                    }, r
                }(te),
                ur = function(e) {
                    (0, Z.A)(r, e);
                    var t = (0, Y.A)(r);

                    function r(e) {
                        var n;
                        return (0, V.A)(this, r), (n = t.call(this, e)).pmSDK = e.pmSDK, n
                    }
                    var n = r.prototype;
                    return n.getOrderbookStatusStream = function() {
                        return this.withOptionsStream((function(e) {
                            return qe(e.marketWebsocketBaseUrl)
                        }))
                    }, n.getSocketEventsStream = function() {
                        return this.withOptionsStream((function(e) {
                            return je(e.marketWebsocketBaseUrl)
                        }))
                    }, n.getOrderbookStore = function(e, t) {
                        var r = t.levels,
                            n = void 0 === r ? ["1"] : r,
                            i = t.speed,
                            o = void 0 === i ? 500 : i,
                            a = t.quantityPrecision,
                            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                            l = function(e) {
                                return "".concat(e).concat(s ? "/dapi" : "/fapi", "/v1/depth")
                            },
                            c = this.getOptions(),
                            u = ft(e, {
                                apiBaseUrl: l(c.apiBaseUrl),
                                wssBaseUrl: c.marketWebsocketBaseUrl,
                                levels: n,
                                speed: o,
                                quantityPrecision: a
                            });
                        return this.withOptionsStream((function(t) {
                            var r = t.apiBaseUrl,
                                i = t.marketWebsocketBaseUrl;
                            return J((function() {
                                return u = ft(e, {
                                        apiBaseUrl: l(r),
                                        wssBaseUrl: i,
                                        levels: n,
                                        speed: o,
                                        quantityPrecision: a
                                    }),
                                    function() {}
                            }))
                        })), u
                    }, n.getStreamTrade = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Rt(e, {
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamTradeSnap = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return zt(e, {
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamTickers = function() {
                        return this.withOptionsStream((function(e) {
                            return Ft({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getStreamDepth = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Ze(e, {
                                wssBaseUrl: n,
                                speed: t
                            })
                        }))
                    }, n.getStreamKline = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Mt(e, t, {
                                wssBaseUrl: n
                            })
                        }))
                    }, n.getIndexKlineStream = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return function(e, t, r) {
                                return Ve(r.wssBaseUrl, [{
                                    stream: "kline",
                                    symbol: "i".concat(e.toUpperCase()),
                                    interval: t,
                                    upperSymbolWithPrefix: !0
                                }], {
                                    transform: function(e) {
                                        var t = function(e) {
                                            if (e.length <= 1) return e;
                                            for (var t = [], r = e[0], n = 1; n < e.length; n++) {
                                                var i = e[n];
                                                r.data.k.t !== i.data.k.t && t.push(r), r = i
                                            }
                                            return t.push(r), t
                                        }(e.coalscedMsg);
                                        return 1 === t.length ? Lt(t[0].data) : function(e) {
                                            return t.forEach((function(t) {
                                                return e(Lt(t.data))
                                            }))
                                        }
                                    }
                                })
                            }(e, t, {
                                wssBaseUrl: n
                            })
                        }))
                    }, n.getContinuousKlineStream = function(e, t, r, n) {
                        return this.withOptionsStream((function(i) {
                            var o = i.marketWebsocketBaseUrl;
                            return St({
                                pair: e,
                                contractType: t,
                                interval: r,
                                options: {
                                    wssBaseUrl: (null === n || void 0 === n ? void 0 : n.wssBaseUrl) || o,
                                    type: "UM",
                                    priceType: (null === n || void 0 === n ? void 0 : n.priceType) || "last",
                                    symbol: (null === n || void 0 === n ? void 0 : n.symbol) || ""
                                }
                            })
                        }))
                    }, n.getStreamLeveragedTokenKline = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Mt(e, t, {
                                wssBaseUrl: n,
                                leveragedToken: !0
                            })
                        }))
                    }, n.getStreamNetValue = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Dt({
                                symbol: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStreamNetValueAll = function() {
                        return this.withOptionsStream((function(e) {
                            return Pt({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getAssetIndexAllStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return Ve(e.wssBaseUrl, [{
                                    stream: "assetIndexAll"
                                }], {
                                    transform: function(e) {
                                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                                            for (var i = r[n].data, o = 0; o < i.length; o++) {
                                                var a = xt(i[o], {
                                                    symbol: "s",
                                                    index: bt("i"),
                                                    indexBidBuffer: bt("b"),
                                                    indexAskBuffer: bt("a"),
                                                    bidRate: bt("B"),
                                                    askRate: bt("A"),
                                                    time: "E"
                                                });
                                                t[a.symbol] = a
                                            }
                                        return t
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getPortfolioAssetIndexStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return Ve(e.wssBaseUrl, [{
                                    stream: "portfolioAssetPrice"
                                }], {
                                    transform: function(e) {
                                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++)
                                            for (var i = r[n].data, o = 0; o < i.length; o++) {
                                                var a = xt(i[o], {
                                                    symbol: "s",
                                                    index: bt("i"),
                                                    time: "E"
                                                });
                                                t[a.symbol] = a
                                            }
                                        return t
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getMarkPriceAllStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            return jt({
                                wssBaseUrl: t.marketWebsocketBaseUrl,
                                speed: e
                            })
                        }))
                    }, n.getMarkPriceStream = function(e, t) {
                        return this.withOptionsStream((function(r) {
                            var n = r.marketWebsocketBaseUrl;
                            return Gt({
                                symbol: e,
                                wssBaseUrl: n,
                                speed: t
                            })
                        }))
                    }, n.getMarkPriceMiniStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            return qt({
                                wssBaseUrl: t.marketWebsocketBaseUrl,
                                speed: e
                            })
                        }))
                    }, n.getUserAssetsStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t,
                            n = e.params,
                            i = void 0 === n ? void 0 : n,
                            o = e.clearListenKeyCache,
                            a = void 0 !== o && o;
                        if (r && this.pmSDK) return this.pmSDK.getUMUserAssetsStream.bind(this.pmSDK)();
                        var s = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return tr((0, m.A)((0, f.A)({}, s), {
                                type: _t.FUTURES,
                                wssBaseUrl: t
                            }), i, a)
                        }))
                    }, n.getUserOrderStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t,
                            n = e.params,
                            i = e.clearListenKeyCache,
                            o = void 0 !== i && i;
                        if (r && this.pmSDK) return this.pmSDK.getUMUserOrderStream.bind(this.pmSDK)();
                        var a = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return nr((0, m.A)((0, f.A)({}, a), {
                                type: _t.FUTURES,
                                wssBaseUrl: t
                            }), n, o)
                        }))
                    }, n.getAlgoOrderStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.params,
                            r = e.clearListenKeyCache,
                            n = void 0 !== r && r,
                            i = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var r = e.marketWebsocketBaseUrl;
                            return ir((0, m.A)((0, f.A)({}, i), {
                                type: _t.FUTURES,
                                wssBaseUrl: r
                            }), t, n)
                        }))
                    }, n.getUserConditionalOrderStream = function() {
                        if (!this.pmSDK) throw "conditional order stream must pass PMSDK in";
                        return this.pmSDK.getUMUserConditionalOrderStream.bind(this.pmSDK)()
                    }, n.getUserAccountConfigUpdateStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.isPM2,
                            r = void 0 !== t && t,
                            n = e.params,
                            i = void 0 === n ? void 0 : n,
                            o = e.clearListenKeyCache,
                            a = void 0 !== o && o;
                        if (r && this.pmSDK) return this.pmSDK.getUMUserAccountConfigUpdateStream.bind(this.pmSDK)();
                        var s = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return or((0, m.A)((0, f.A)({}, s), {
                                type: _t.FUTURES,
                                wssBaseUrl: t
                            }), i, a)
                        }))
                    }, n.getIndexPriceStream = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return Gt({
                                symbol: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getContractInfoStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return Ve(e.wssBaseUrl, [{
                                    stream: "contractInfo"
                                }], {
                                    transform: function(e) {
                                        var t = e.coalscedMsg;
                                        return 1 === t.length ? wt(t[0].data) : function(e) {
                                            return t.forEach((function(t) {
                                                return e(wt(t.data))
                                            }))
                                        }
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n.getStreamCompositeIndex = function(e) {
                        return this.withOptionsStream((function(t) {
                            var r = t.marketWebsocketBaseUrl;
                            return function(e) {
                                var t = e.symbol;
                                return Ve(e.wssBaseUrl, [{
                                    stream: "compositeIndex",
                                    symbol: t
                                }], {
                                    transform: function(e) {
                                        for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                                            var i = xt(r[n].data, {
                                                symbol: "s",
                                                component: "C",
                                                assets: function(e) {
                                                    return (e.c || []).map((function(e) {
                                                        return xt(e, {
                                                            baseAsset: "b",
                                                            quoteAsset: "q",
                                                            weightQty: "w",
                                                            weightRatio: "W",
                                                            indexPrice: "i"
                                                        })
                                                    }))
                                                }
                                            });
                                            t[i.symbol] = i
                                        }
                                        return t
                                    }
                                })
                            }({
                                symbol: e,
                                wssBaseUrl: r
                            })
                        }))
                    }, n.getStrategyStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.params,
                            r = void 0 === t ? void 0 : t,
                            n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return Yt((0, m.A)((0, f.A)({}, n), {
                                type: _t.FUTURES,
                                wssBaseUrl: t
                            }), r)
                        }))
                    }, n.getStrategyShadowAccountStream = function(e) {
                        var t = this.getOptions();
                        return Xt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/future/strategy/strategy-user-listen-keys"),
                            type: Ct.FUTURES,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyAccountConfigStream = function(e) {
                        var t = this.getOptions();
                        return Qt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/future/strategy/strategy-user-listen-keys"),
                            type: _t.FUTURES,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyGridUpdateStream = function(e) {
                        var t = this.getOptions();
                        return $t({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/future/strategy/strategy-user-listen-keys"),
                            type: _t.FUTURES,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getStrategyGridOrderTradeUpdateStream = function(e) {
                        var t = this.getOptions();
                        return Jt({
                            userListenKeys: e,
                            apiRefreshKeyUrl: "".concat(t.apiBaseUrl, "/bapi/futures/v1/private/future/strategy/strategy-user-listen-keys"),
                            type: _t.FUTURES,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, n.getGridStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = e.params,
                            r = void 0 === t ? void 0 : t,
                            n = this._getUserKeyApiUrls();
                        return this.withOptionsStream((function(e) {
                            var t = e.marketWebsocketBaseUrl;
                            return It((0, m.A)((0, f.A)({}, n), {
                                type: _t.FUTURES,
                                wssBaseUrl: t
                            }), r)
                        }))
                    }, n.getTopMoversStream = function() {
                        return this.withOptionsStream((function(e) {
                            return function(e) {
                                return Ve(e.wssBaseUrl, [{
                                    stream: "topMovers"
                                }], {
                                    transform: function(e) {
                                        for (var t = e.coalscedMsg, r = [], n = 0; n < t.length; n++) {
                                            var i = t[n].data;
                                            r.push(Ht(i))
                                        }
                                        return r
                                    }
                                })
                            }({
                                wssBaseUrl: e.marketWebsocketBaseUrl
                            })
                        }))
                    }, n._getUserKeyApiUrls = function() {
                        var e = this.getOptions();
                        return {
                            apiGetKeyUrl: "".concat(e.apiBaseUrl, "/bapi/futures/v1/private/future/user-data/user-listen-key"),
                            apiRefreshKeyUrl: "".concat(e.apiBaseUrl, "/bapi/futures/v1/private/future/user-data/listen-key-extend-insert")
                        }
                    }, r.setStreamBatch = function(e) {
                        Q(e)
                    }, r
                }(te),
                dr = function() {
                    function e(t) {
                        (0, V.A)(this, e), this._options = t
                    }
                    var t = e.prototype;
                    return t.getOrderbookStatusStream = function() {
                        return qe(this._options.marketWebsocketBaseUrl)
                    }, t.getOrderbookStore = function(e, t) {
                        var r = t.levels,
                            n = void 0 === r ? ["1"] : r,
                            i = t.quantityPrecision;
                        return ft(e, {
                            apiBaseUrl: "".concat(this._options.apiBaseUrl, "/api/v3/depth"),
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            levels: n,
                            quantityPrecision: i
                        })
                    }, t.getStreamTrade = function(e) {
                        return Rt(e, {
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, t.getStreamTickers = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 3e3;
                        return Ft({
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            speed: e
                        })
                    }, t.getStreamTickersWithWindowSize = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "24h",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        return Kt({
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            windowSize: e,
                            speed: t
                        })
                    }, t.getStreamTickersWithWindowSizeRaw = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "24h",
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3e3;
                        return Nt({
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            windowSize: e,
                            speed: t
                        })
                    }, t.getStreamDepth = function(e) {
                        return Ze(e, {
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        })
                    }, t.getStreamKline = function(e, t) {
                        var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).timeZone;
                        return Mt(e, t, {
                            wssBaseUrl: this._options.marketWebsocketBaseUrl,
                            timeZone: r
                        })
                    }, t.getUserAssetsStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t.SPOT,
                            t = e === _t.ISOLATED ? this._getIsolatedUserKeyApiUrls() : this._getUserKeyApiUrls();
                        return er((0, m.A)((0, f.A)({}, t), {
                            type: e,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        }))
                    }, t.getUserOrderStream = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _t.SPOT,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            r = arguments.length > 2 ? arguments[2] : void 0,
                            n = e === _t.ISOLATED ? this._getIsolatedUserKeyApiUrls() : this._getUserKeyApiUrls();
                        return rr((0, m.A)((0, f.A)({}, n), {
                            type: e,
                            wssBaseUrl: this._options.marketWebsocketBaseUrl
                        }), t, r)
                    }, t.getMarginIndexStream = function(e) {
                        if (!this._options.marginWebsocketBaseUrl) throw new Error("marginWebsocketBaseUrl is required");
                        return function(e) {
                            var t = e.wssBaseUrl,
                                r = e.symbols;
                            return Ve(t, Array.isArray(r) ? r.map((function(e) {
                                return {
                                    stream: "priceIndex",
                                    marginSymbol: e.toLocaleLowerCase()
                                }
                            })) : [{
                                stream: "priceIndex"
                            }], {
                                transform: function(e) {
                                    for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                                        var i = r[n].data;
                                        if (Array.isArray(i))
                                            for (var o = 0; o < i.length; o++) {
                                                var a = xt(i[o], {
                                                    eventTime: "E",
                                                    symbol: "s",
                                                    price: bt("p")
                                                });
                                                t[a.symbol] = a
                                            } else {
                                                var s = xt(i, {
                                                    eventTime: "E",
                                                    symbol: "s",
                                                    price: bt("p")
                                                });
                                                t[s.symbol] = s
                                            }
                                    }
                                    return t
                                }
                            })
                        }({
                            wssBaseUrl: this._options.marginWebsocketBaseUrl,
                            symbols: e
                        })
                    }, t.getConvertTickerStream = function(e) {
                        if (!this._options.marginWebsocketBaseUrl) throw new Error("marginWebsocketBaseUrl is required");
                        return function(e) {
                            var t = e.wssBaseUrl,
                                r = e.symbols;
                            return Ve(t, Array.isArray(r) ? r.map((function(e) {
                                return {
                                    stream: "convertTicker",
                                    marginSymbol: e.toLocaleLowerCase()
                                }
                            })) : [{
                                stream: "convertTicker"
                            }], {
                                transform: function(e) {
                                    for (var t = {}, r = e.coalscedMsg, n = 0; n < r.length; n++) {
                                        var i = r[n].data;
                                        if (Array.isArray(i))
                                            for (var o = 0; o < i.length; o++) {
                                                var a = xt(i[o], {
                                                    eventTime: "E",
                                                    symbol: "s",
                                                    price: bt("p")
                                                });
                                                t[a.symbol] = a
                                            } else {
                                                var s = xt(i, {
                                                    eventTime: "E",
                                                    symbol: "s",
                                                    price: bt("p")
                                                });
                                                t[s.symbol] = s
                                            }
                                    }
                                    return t
                                }
                            })
                        }({
                            wssBaseUrl: this._options.marginWebsocketBaseUrl,
                            symbols: e
                        })
                    }, t.getUserDebtStream = function() {
                        if (!this._options.marginWebsocketBaseUrl) throw new Error("marginWebsocketBaseUrl is required");
                        var e = this._getMarginApiUrls();
                        return lr((0, m.A)((0, f.A)({}, e), {
                            wssBaseUrl: this._options.marginWebsocketBaseUrl
                        }))
                    }, t.getMarginStatusStream = function() {
                        if (!this._options.marginWebsocketBaseUrl) throw new Error("marginWebsocketBaseUrl is required");
                        return qe(this._options.marginWebsocketBaseUrl)
                    }, t._getIsolatedUserKeyApiUrls = function() {
                        return {
                            apiGetKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/mbx/v1/private/mbxgateway/user-stream/isolated-margin/start/batch"),
                            apiRefreshKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/mbx/v1/private/mbxgateway/user-stream/isolated-margin/ping/batch")
                        }
                    }, t._getUserKeyApiUrls = function() {
                        return {
                            apiGetKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/mbx/v1/private/mbxgateway/user-stream/start"),
                            apiRefreshKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/mbx/v1/private/mbxgateway/user-stream/ping")
                        }
                    }, t._getMarginApiUrls = function() {
                        return {
                            apiGetKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/margin/v1/private/margin/user-data-stream"),
                            apiRefreshKeyUrl: "".concat(this._options.apiBaseUrl, "/bapi/margin/v1/private/margin/user-data-stream")
                        }
                    }, e.setStreamBatch = function(e) {
                        Q(e)
                    }, e
                }(),
                pr = r("a59x"),
                fr = (0, r("Dz1D").PC)(),
                mr = fr.WS_HOST_TEMPLATE,
                hr = fr.DELIVERY_STREAM_HOST_TEMPLATE,
                br = (fr.SITE_HOST, fr.FUTURES_STREAM_HOST_TEMPLATE),
                gr = (0, pr.bG)(2),
                vr = "{{rootDomain}}";

            function yr() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                    t = arguments.length > 1 ? arguments[1] : void 0;
                return e ? e.replace(vr, t) : e
            }
            var xr = yr(mr, gr),
                wr = yr(hr, gr),
                kr = yr(br, gr),
                Sr = null,
                Br = null,
                _r = null,
                Ar = function() {
                    return null === Br ? (Br = new cr({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: "".concat(wr, "/swift")
                    }), cr.setStreamBatch(G.unstable_batchedUpdates), Br) : Br
                },
                Ur = function() {
                    return null === Sr ? (Sr = new ur({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: "".concat(kr, "/swift")
                    }), ur.setStreamBatch(G.unstable_batchedUpdates), Sr) : Sr
                },
                Tr = function() {
                    return null === _r ? (_r = new dr({
                        apiBaseUrl: "",
                        marketWebsocketBaseUrl: xr
                    }), dr.setStreamBatch(G.unstable_batchedUpdates), _r) : _r
                },
                Cr = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                    return e ? Tr() : t ? Ar() : Ur()
                },
                Er = r("i9es"),
                Or = (0, i.createContext)(null),
                Ir = function(e) {
                    var t = e.biz,
                        r = e.needAlphaAsset,
                        a = void 0 !== r && r,
                        s = e.children,
                        l = (0, Er.tZ)(t, a),
                        c = l.holdingList,
                        u = l.tokens,
                        d = l.refresh;
                    (0, Er.Eb)(d);
                    var p = (0, Er.fE)({
                            tokens: u
                        }).value,
                        h = (0, n.A)((0, i.useState)(), 2),
                        b = h[0],
                        g = h[1],
                        v = (0, n.A)((0, i.useState)(!0), 2),
                        y = v[0],
                        x = v[1];
                    (0, i.useEffect)((function() {
                        if (p && c) {
                            var e = null === c || void 0 === c ? void 0 : c.map((function(e) {
                                var t = null === p || void 0 === p ? void 0 : p.find((function(t) {
                                    return t.token === e.asset
                                }));
                                return (0, m.A)((0, f.A)({}, e), {
                                    avgBuyCost: null === t || void 0 === t ? void 0 : t.avgBuyCost
                                })
                            }));
                            g(e), x(!1)
                        }
                    }), [c, p]);
                    var w = (0, i.useMemo)((function() {
                        return {
                            holdingList: b,
                            loading: y,
                            refresh: d
                        }
                    }), [b, y, d]);
                    return o().createElement(Or.Provider, {
                        value: w
                    }, s)
                },
                Dr = function() {
                    var e = (0, i.useContext)(Or);
                    if (!e) throw new Error("useMarketsHoldingList must be used within a MarketsHoldingListProvider");
                    return e
                }
        },
        ZSsA: (e, t, r) => {
            "use strict";
            r.d(t, {
                x6: () => c,
                s9: () => l
            });
            var n = r("aVXY"),
                i = r("DTvD"),
                o = r("hRh4"),
                a = r("h+kG"),
                s = r("uA3k"),
                l = function(e) {
                    var t = (0, i.useContext)(s.y),
                        r = t.i18n,
                        o = t.__count__,
                        a = r.i18nextIns,
                        l = (0, n.A)((0, i.useState)(a.language), 2),
                        c = l[0],
                        u = l[1],
                        d = (0, i.useCallback)((function(e) {
                            return e
                        }), []),
                        p = (0, i.useMemo)((function() {
                            return a.getFixedT(c, e)
                        }), [c, e, o]);
                    return (0, i.useEffect)((function() {
                        return a.isInitialized ? e && (Array.isArray(e) ? e : [e]).forEach((function(e) {
                                a.hasResourceBundle(c, e) || a.loadNamespaces(e)
                            })) : r.init(), a.on("languageChanged", u),
                            function() {
                                a.off("languageChanged", u)
                            }
                    }), []), {
                        locale: c,
                        language: c,
                        setLocale: r.setLocale,
                        t: a.isInitialized ? p : d,
                        i18n: a
                    }
                },
                c = function(e) {
                    var t = (0, i.useContext)(s.y).i18n;
                    return (0, o.Trans)(Object.assign({
                        i18n: t.i18nextIns.isInitialized ? t.i18nextIns : void 0
                    }, e))
                };
            if (null === a.OW || void 0 === a.OW ? void 0 : a.OW.PRERENDER);
            s.y.Provider, r("rsqs"), r("ztXJ")
        },
        GNBN: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => S
            });
            var n = r("TrCV"),
                i = r("Srb9"),
                o = r("AXwM"),
                a = r("oVQP"),
                s = r("MEAY"),
                l = r("wIZF"),
                c = r("DTvD"),
                u = r.n(c),
                d = r("BoNV"),
                p = r("Prrn");
            const f = (0, c.createContext)({});
            const m = function(e) {
                var t = e.pathPrefix,
                    r = e.isRegionMode,
                    n = e.level2Domain,
                    i = e.children,
                    o = (0, l.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "children"]);
                return u().createElement(f.Provider, (0, l.__assign)({
                    value: {
                        pathPrefix: t,
                        isRegionMode: r,
                        level2Domain: n
                    },
                    children: i
                }, o))
            };
            const h = function(e) {
                var t = e.pathPrefix,
                    r = e.isRegionMode,
                    n = e.level2Domain,
                    i = e.lang,
                    o = e.prefixCls,
                    a = e.isRTL,
                    s = e.iconConfig,
                    c = e.children,
                    f = e.isElectron,
                    h = e.isMobile,
                    b = (0, l.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    g = {
                        prefixCls: o,
                        isRTL: a,
                        iconConfig: s,
                        isElectron: f,
                        isMobile: h
                    },
                    v = {
                        pathPrefix: t,
                        isRegionMode: r,
                        level2Domain: n,
                        lang: i
                    },
                    y = Object.values(v).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    x = u().createElement(p.A, (0, l.__assign)({}, g), u().createElement(d.A, (0, l.__assign)({}, b), c));
                return y ? u().createElement(m, (0, l.__assign)({}, v), x) : x
            };
            var b = r("vht/"),
                g = r("KsKd"),
                v = r("HS2I"),
                y = r("sKJi"),
                x = r("vW+O"),
                w = r("ZSsA"),
                k = r("tKUM");
            const S = function() {
                var e = (0, v.useTheme)().theme,
                    t = (0, w.s9)().language;
                y.Ay.setNumbroLocale(t), (0, x.YL)(t);
                var r = (0, i.L)().lng,
                    l = (0, c.useMemo)((function() {
                        return ["light" === e ? a.BB : a.XT, "light" === e ? s.bK : s.zd]
                    }), [e]),
                    u = l[0],
                    d = l[1];
                return (0, n.jsx)(h, {
                    mode: e,
                    themeColors: u,
                    themeExtraColors: d,
                    isRTL: "rtl" === (0, k.dir)(r),
                    children: (0, n.jsx)(g.NP, {
                        children: (0, n.jsx)(b.A, {
                            children: (0, n.jsx)("div", {
                                className: "wallet-layout",
                                children: (0, n.jsx)(o.Tp, {})
                            })
                        })
                    })
                })
            }
        },
        "9xbI": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => a
            });
            var n = r("wIZF"),
                i = r("DTvD"),
                o = r.n(i);
            const a = (0, i.forwardRef)((function(e, t) {
                var r = e.as,
                    i = void 0 === r ? "div" : r,
                    a = (0, n.__rest)(e, ["as"]);
                return o().createElement(i, (0, n.__assign)((0, n.__assign)({}, a), {
                    ref: t
                }))
            }))
        },
        mkfS: (e, t) => {
            "use strict";
            t.Y = function(e, t) {
                return s(e).some((function(e) {
                    var r = e.inverse,
                        n = "all" === e.type || t.type === e.type;
                    if (n && r || !n && !r) return !1;
                    var i = e.expressions.every((function(e) {
                        var r = e.feature,
                            n = e.modifier,
                            i = e.value,
                            o = t[r];
                        if (!o) return !1;
                        switch (r) {
                            case "orientation":
                            case "scan":
                                return o.toLowerCase() === i.toLowerCase();
                            case "width":
                            case "height":
                            case "device-width":
                            case "device-height":
                                i = u(i), o = u(o);
                                break;
                            case "resolution":
                                i = c(i), o = c(o);
                                break;
                            case "aspect-ratio":
                            case "device-aspect-ratio":
                            case "device-pixel-ratio":
                                i = l(i), o = l(o);
                                break;
                            case "grid":
                            case "color":
                            case "color-index":
                            case "monochrome":
                                i = parseInt(i, 10) || 1, o = parseInt(o, 10) || 0
                        }
                        switch (n) {
                            case "min":
                                return o >= i;
                            case "max":
                                return o <= i;
                            default:
                                return o === i
                        }
                    }));
                    return i && !r || !i && r
                }))
            };
            var r = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                n = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                i = /^(?:(min|max)-)?(.+)/,
                o = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                a = /(dpi|dpcm|dppx)?$/;

            function s(e) {
                return e.split(",").map((function(e) {
                    var t = (e = e.trim()).match(r),
                        o = t[1],
                        a = t[2],
                        s = t[3] || "",
                        l = {};
                    return l.inverse = !!o && "not" === o.toLowerCase(), l.type = a ? a.toLowerCase() : "all", s = s.match(/\([^\)]+\)/g) || [], l.expressions = s.map((function(e) {
                        var t = e.match(n),
                            r = t[1].toLowerCase().match(i);
                        return {
                            modifier: r[1],
                            feature: r[2],
                            value: t[2]
                        }
                    })), l
                }))
            }

            function l(e) {
                var t, r = Number(e);
                return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r
            }

            function c(e) {
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

            function u(e) {
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
            var r;

            function n(e, t) {
                var r = [],
                    n = 0;

                function i(e) {
                    return r.push(e), t
                }

                function o() {
                    return r[n++]
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
            r = new function() {
                var e = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    t = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    r = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    i = "(?:[_a-z0-9-]|[^\\u0020-\\u007e]|" + r + ")",
                    o = e + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",
                    a = "((?:-?" + o + ")|(?:inherit|auto))",
                    s = "(#?" + i + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    l = "(?:[!#$%&*-~]|[^\\u0020-\\u007e]|" + r + ")*?",
                    c = "(?!(" + i + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    u = "(?!" + l + "['\"]?\\s*\\))",
                    d = "(?=" + l + "['\"]?\\s*\\))",
                    p = "(\\s*(?:!important\\s*)?[;}])",
                    f = new RegExp("`TMP`", "g"),
                    m = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    h = new RegExp("(" + t + c + "[^;}]+;?)", "gi"),
                    b = new RegExp("(" + t + "[^\\}]*?})", "gi"),
                    g = new RegExp("(direction\\s*:\\s*)ltr", "gi"),
                    v = new RegExp("(direction\\s*:\\s*)rtl", "gi"),
                    y = new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])" + u + c, "gi"),
                    x = new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])" + u + c, "gi"),
                    w = new RegExp("(^|[^a-zA-Z])(left)" + d, "gi"),
                    k = new RegExp("(^|[^a-zA-Z])(right)" + d, "gi"),
                    S = new RegExp("(^|[^a-zA-Z])(ltr)" + d, "gi"),
                    B = new RegExp("(^|[^a-zA-Z])(rtl)" + d, "gi"),
                    _ = new RegExp("(^|[^a-zA-Z])([ns]?)e-resize", "gi"),
                    A = new RegExp("(^|[^a-zA-Z])([ns]?)w-resize", "gi"),
                    U = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + a + "(\\s+)" + a + "(\\s+)" + a + "(\\s+)" + a + p, "gi"),
                    T = new RegExp("((?:-color|border-style)\\s*:\\s*)" + s + "(\\s+)" + s + "(\\s+)" + s + "(\\s+)" + s + p, "gi"),
                    C = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + o + ")", "gi"),
                    E = new RegExp("(background-position-x\\s*:\\s*)(-?" + e + "%)", "gi"),
                    O = new RegExp("(border-radius\\s*:\\s*)" + a + "(?:(?:\\s+" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?(?:(?:(?:\\s*\\/\\s*)" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?" + p, "gi"),
                    I = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + a, "gi"),
                    D = new RegExp("(text-shadow\\s*:\\s*)" + a + "(\\s*)" + s, "gi"),
                    P = new RegExp("(text-shadow\\s*:\\s*)" + s + "(\\s*)" + a, "gi"),
                    R = new RegExp("(text-shadow\\s*:\\s*)" + a, "gi"),
                    z = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + a + "(\\s*\\))", "gi"),
                    F = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + a + "((?:\\s*,\\s*" + a + "){0,2}\\s*\\))", "gi");

                function W(e, t, r) {
                    var n, i;
                    return "%" === r.slice(-1) && (-1 !== (n = r.indexOf(".")) ? (i = r.length - n - 2, r = (r = 100 - parseFloat(r)).toFixed(i) + "%") : r = 100 - parseFloat(r) + "%"), t + r
                }

                function M(e) {
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

                function L(e, t) {
                    var r = [].slice.call(arguments),
                        n = r.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        i = r.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        o = r[10] || "";
                    return t + (i.length ? M(n) + " / " + M(i) : M(n)) + o
                }

                function H(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function K(e, t, r) {
                    return t + H(r)
                }

                function N(e, t, r, n, i) {
                    return t + r + H(n) + i
                }

                function j(e, t, r, n, i) {
                    return t + r + n + H(i)
                }
                return {
                    transform: function(e, t) {
                        var r = new n(h, "`NOFLIP_SINGLE`"),
                            i = new n(b, "`NOFLIP_CLASS`"),
                            o = new n(m, "`COMMENT`");
                        return e = o.tokenize(i.tokenize(r.tokenize(e.replace("`", "%60")))), t.transformDirInUrl && (e = e.replace(S, "$1`TMP`").replace(B, "$1ltr").replace(f, "rtl")), t.transformEdgeInUrl && (e = e.replace(w, "$1`TMP`").replace(k, "$1left").replace(f, "right")), e = e.replace(g, "$1`TMP`").replace(v, "$1ltr").replace(f, "rtl").replace(y, "$1`TMP`").replace(x, "$1left").replace(f, "right").replace(_, "$1$2`TMP`").replace(A, "$1$2e-resize").replace(f, "w-resize").replace(O, L).replace(I, K).replace(D, j).replace(P, j).replace(R, K).replace(z, N).replace(F, N).replace(U, "$1$2$3$8$5$6$7$4$9").replace(T, "$1$2$3$8$5$6$7$4$9").replace(C, W).replace(E, W), e = r.detokenize(i.detokenize(o.detokenize(e)))
                    }
                }
            }, e.exports ? t.transform = function(e, t, n) {
                var i;
                return "object" === typeof t ? i = t : (i = {}, "boolean" === typeof t && (i.transformDirInUrl = t), "boolean" === typeof n && (i.transformEdgeInUrl = n)), r.transform(e, i)
            } : window.cssjanus = r
        },
        VXBK: (e, t, r) => {
            "use strict";
            r.d(t, {
                NP: () => d,
                DP: () => p
            });
            var n = r("OHGK"),
                i = r("DTvD"),
                o = r.n(i),
                a = r("g80r");
            const s = function(e) {
                var t = new WeakMap;
                return function(r) {
                    if (t.has(r)) return t.get(r);
                    var n = e(r);
                    return t.set(r, n), n
                }
            };
            r("oXkQ");

            function l(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var c = function(e, t) {
                    return "function" === typeof t ? t(e) : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? l(r, !0).forEach((function(t) {
                                (0, n.A)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(r).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, e, {}, t)
                },
                u = s((function(e) {
                    return s((function(t) {
                        return c(e, t)
                    }))
                })),
                d = function(e) {
                    return (0, i.createElement)(a.Dx.Consumer, null, (function(t) {
                        return e.theme !== t && (t = u(t)(e.theme)), (0, i.createElement)(a.Dx.Provider, {
                            value: t
                        }, e.children)
                    }))
                };

            function p() {
                return o().useContext(a.Dx)
            }
        },
        "5BvR": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = /[A-Z]/g,
                i = /^ms-/,
                o = {};

            function a(e) {
                return "-" + e.toLowerCase()
            }
            const s = function(e) {
                if (o.hasOwnProperty(e)) return o[e];
                var t = e.replace(n, a);
                return o[e] = i.test(t) ? "-" + t : t
            }
        },
        deT9: (e, t, r) => {
            var n = r("vGGS"),
                i = r("obGE");

            function o(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            o.prototype = n(i.prototype), o.prototype.constructor = o, e.exports = o
        },
        "0+c5": (e, t, r) => {
            var n = r("vGGS"),
                i = r("obGE");

            function o(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            o.prototype = n(i.prototype), o.prototype.constructor = o, e.exports = o
        },
        OfKG: (e, t, r) => {
            var n = r("c7Qd");
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1
            }
        },
        cPMt: e => {
            e.exports = function(e, t, r, n) {
                var i = -1,
                    o = null == e ? 0 : e.length;
                for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
                return r
            }
        },
        DuXo: e => {
            e.exports = function(e, t, r, n) {
                for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
                    if (t(e[o], o, e)) return o;
                return -1
            }
        },
        c7Qd: (e, t, r) => {
            var n = r("DuXo"),
                i = r("z9Jh"),
                o = r("n1QJ");
            e.exports = function(e, t, r) {
                return t === t ? o(e, t, r) : n(e, i, r)
            }
        },
        z9Jh: e => {
            e.exports = function(e) {
                return e !== e
            }
        },
        obGE: e => {
            e.exports = function() {}
        },
        "5q8j": e => {
            e.exports = function(e, t, r, n, i) {
                return i(e, (function(e, i, o) {
                    r = n ? (n = !1, e) : t(r, e, i, o)
                })), r
            }
        },
        uA6v: (e, t, r) => {
            var n = r("zWgn"),
                i = r("BVx2"),
                o = i ? function(e, t) {
                    return i.set(e, t), e
                } : n;
            e.exports = o
        },
        vyvt: (e, t, r) => {
            var n = r("H87J");
            e.exports = function(e, t) {
                return n(t, (function(t) {
                    return [t, e[t]]
                }))
            }
        },
        I1fX: (e, t, r) => {
            var n = r("6XIJ"),
                i = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(i, "") : e
            }
        },
        "6sC/": e => {
            var t = Math.max;
            e.exports = function(e, r, n, i) {
                for (var o = -1, a = e.length, s = n.length, l = -1, c = r.length, u = t(a - s, 0), d = Array(c + u), p = !i; ++l < c;) d[l] = r[l];
                for (; ++o < s;)(p || o < a) && (d[n[o]] = e[o]);
                for (; u--;) d[l++] = e[o++];
                return d
            }
        },
        gGwV: e => {
            var t = Math.max;
            e.exports = function(e, r, n, i) {
                for (var o = -1, a = e.length, s = -1, l = n.length, c = -1, u = r.length, d = t(a - l, 0), p = Array(d + u), f = !i; ++o < d;) p[o] = e[o];
                for (var m = o; ++c < u;) p[m + c] = r[c];
                for (; ++s < l;)(f || o < a) && (p[m + n[s]] = e[o++]);
                return p
            }
        },
        "qFO/": e => {
            e.exports = function(e, t) {
                for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                return n
            }
        },
        HCUT: (e, t, r) => {
            var n = r("iWTG"),
                i = r("IBsm");
            e.exports = function(e, t, r) {
                var o = 1 & t,
                    a = n(e);
                return function t() {
                    var n = this && this !== i && this instanceof t ? a : e;
                    return n.apply(o ? r : this, arguments)
                }
            }
        },
        iWTG: (e, t, r) => {
            var n = r("vGGS"),
                i = r("tQYX");
            e.exports = function(e) {
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new e(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var r = n(e.prototype),
                        o = e.apply(r, t);
                    return i(o) ? o : r
                }
            }
        },
        LtMG: (e, t, r) => {
            var n = r("zaNA"),
                i = r("iWTG"),
                o = r("JtPM"),
                a = r("kBvp"),
                s = r("4mQY"),
                l = r("AeOa"),
                c = r("IBsm");
            e.exports = function(e, t, r) {
                var u = i(e);
                return function i() {
                    for (var d = arguments.length, p = Array(d), f = d, m = s(i); f--;) p[f] = arguments[f];
                    var h = d < 3 && p[0] !== m && p[d - 1] !== m ? [] : l(p, m);
                    if ((d -= h.length) < r) return a(e, t, o, i.placeholder, void 0, p, h, void 0, void 0, r - d);
                    var b = this && this !== c && this instanceof i ? u : e;
                    return n(b, this, p)
                }
            }
        },
        tUbk: (e, t, r) => {
            var n = r("0+c5"),
                i = r("cH1A"),
                o = r("rjis"),
                a = r("rKb1"),
                s = r("wxYD"),
                l = r("/Bkq");
            e.exports = function(e) {
                return i((function(t) {
                    var r = t.length,
                        i = r,
                        c = n.prototype.thru;
                    for (e && t.reverse(); i--;) {
                        var u = t[i];
                        if ("function" != typeof u) throw new TypeError("Expected a function");
                        if (c && !d && "wrapper" == a(u)) var d = new n([], !0)
                    }
                    for (i = d ? i : r; ++i < r;) {
                        u = t[i];
                        var p = a(u),
                            f = "wrapper" == p ? o(u) : void 0;
                        d = f && l(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? d[a(f[0])].apply(d, f[3]) : 1 == u.length && l(u) ? d[p]() : d.thru(u)
                    }
                    return function() {
                        var e = arguments,
                            n = e[0];
                        if (d && 1 == e.length && s(n)) return d.plant(n).value();
                        for (var i = 0, o = r ? t[i].apply(this, e) : n; ++i < r;) o = t[i].call(this, o);
                        return o
                    }
                }))
            }
        },
        JtPM: (e, t, r) => {
            var n = r("6sC/"),
                i = r("gGwV"),
                o = r("qFO/"),
                a = r("iWTG"),
                s = r("kBvp"),
                l = r("4mQY"),
                c = r("MRwE"),
                u = r("AeOa"),
                d = r("IBsm");
            e.exports = function e(t, r, p, f, m, h, b, g, v, y) {
                var x = 128 & r,
                    w = 1 & r,
                    k = 2 & r,
                    S = 24 & r,
                    B = 512 & r,
                    _ = k ? void 0 : a(t);
                return function A() {
                    for (var U = arguments.length, T = Array(U), C = U; C--;) T[C] = arguments[C];
                    if (S) var E = l(A),
                        O = o(T, E);
                    if (f && (T = n(T, f, m, S)), h && (T = i(T, h, b, S)), U -= O, S && U < y) {
                        var I = u(T, E);
                        return s(t, r, e, A.placeholder, p, T, I, g, v, y - U)
                    }
                    var D = w ? p : this,
                        P = k ? D[t] : t;
                    return U = T.length, g ? T = c(T, g) : B && U > 1 && T.reverse(), x && v < U && (T.length = v), this && this !== d && this instanceof A && (P = _ || a(P)), P.apply(D, T)
                }
            }
        },
        I6tc: (e, t, r) => {
            var n = r("zaNA"),
                i = r("iWTG"),
                o = r("IBsm");
            e.exports = function(e, t, r, a) {
                var s = 1 & t,
                    l = i(e);
                return function t() {
                    for (var i = -1, c = arguments.length, u = -1, d = a.length, p = Array(d + c), f = this && this !== o && this instanceof t ? l : e; ++u < d;) p[u] = a[u];
                    for (; c--;) p[u++] = arguments[++i];
                    return n(f, s ? r : this, p)
                }
            }
        },
        kBvp: (e, t, r) => {
            var n = r("/Bkq"),
                i = r("SStt"),
                o = r("E2v+");
            e.exports = function(e, t, r, a, s, l, c, u, d, p) {
                var f = 8 & t;
                t |= f ? 32 : 64, 4 & (t &= ~(f ? 64 : 32)) || (t &= -4);
                var m = [e, t, s, f ? l : void 0, f ? c : void 0, f ? void 0 : l, f ? void 0 : c, u, d, p],
                    h = r.apply(void 0, m);
                return n(e) && i(h, m), h.placeholder = a, o(h, e, t)
            }
        },
        zWkt: (e, t, r) => {
            var n = r("vyvt"),
                i = r("kkM+"),
                o = r("aURW"),
                a = r("5KBi");
            e.exports = function(e) {
                return function(t) {
                    var r = i(t);
                    return "[object Map]" == r ? o(t) : "[object Set]" == r ? a(t) : n(t, e(t))
                }
            }
        },
        "P+cI": (e, t, r) => {
            var n = r("uA6v"),
                i = r("HCUT"),
                o = r("LtMG"),
                a = r("JtPM"),
                s = r("I6tc"),
                l = r("rjis"),
                c = r("9Oiy"),
                u = r("SStt"),
                d = r("E2v+"),
                p = r("m2YG"),
                f = Math.max;
            e.exports = function(e, t, r, m, h, b, g, v) {
                var y = 2 & t;
                if (!y && "function" != typeof e) throw new TypeError("Expected a function");
                var x = m ? m.length : 0;
                if (x || (t &= -97, m = h = void 0), g = void 0 === g ? g : f(p(g), 0), v = void 0 === v ? v : p(v), x -= h ? h.length : 0, 64 & t) {
                    var w = m,
                        k = h;
                    m = h = void 0
                }
                var S = y ? void 0 : l(e),
                    B = [e, t, r, m, h, w, k, b, g, v];
                if (S && c(B, S), e = B[0], t = B[1], r = B[2], m = B[3], h = B[4], !(v = B[9] = void 0 === B[9] ? y ? 0 : e.length : f(B[9] - x, 0)) && 24 & t && (t &= -25), t && 1 != t) _ = 8 == t || 16 == t ? o(e, t, v) : 32 != t && 33 != t || h.length ? a.apply(void 0, B) : s(e, t, r, m);
                else var _ = i(e, t, r);
                return d((S ? n : u)(_, B), e, t)
            }
        },
        rjis: (e, t, r) => {
            var n = r("BVx2"),
                i = r("nnm9"),
                o = n ? function(e) {
                    return n.get(e)
                } : i;
            e.exports = o
        },
        rKb1: (e, t, r) => {
            var n = r("QaiR"),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = e.name + "", r = n[t], o = i.call(n, t) ? r.length : 0; o--;) {
                    var a = r[o],
                        s = a.func;
                    if (null == s || s == e) return a.name
                }
                return t
            }
        },
        "4mQY": e => {
            e.exports = function(e) {
                return e.placeholder
            }
        },
        wafF: e => {
            var t = /\{\n\/\* \[wrapped with (.+)\] \*/,
                r = /,? & /;
            e.exports = function(e) {
                var n = e.match(t);
                return n ? n[1].split(r) : []
            }
        },
        kEP7: e => {
            var t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            e.exports = function(e, r) {
                var n = r.length;
                if (!n) return e;
                var i = n - 1;
                return r[i] = (n > 1 ? "& " : "") + r[i], r = r.join(n > 2 ? ", " : " "), e.replace(t, "{\n/* [wrapped with " + r + "] */\n")
            }
        },
        "/Bkq": (e, t, r) => {
            var n = r("deT9"),
                i = r("rjis"),
                o = r("rKb1"),
                a = r("jm4U");
            e.exports = function(e) {
                var t = o(e),
                    r = a[t];
                if ("function" != typeof r || !(t in n.prototype)) return !1;
                if (e === r) return !0;
                var s = i(r);
                return !!s && e === s[0]
            }
        },
        "9Oiy": (e, t, r) => {
            var n = r("6sC/"),
                i = r("gGwV"),
                o = r("AeOa"),
                a = "__lodash_placeholder__",
                s = 128,
                l = Math.min;
            e.exports = function(e, t) {
                var r = e[1],
                    c = t[1],
                    u = r | c,
                    d = u < 131,
                    p = c == s && 8 == r || c == s && 256 == r && e[7].length <= t[8] || 384 == c && t[7].length <= t[8] && 8 == r;
                if (!d && !p) return e;
                1 & c && (e[2] = t[2], u |= 1 & r ? 0 : 4);
                var f = t[3];
                if (f) {
                    var m = e[3];
                    e[3] = m ? n(m, f, t[4]) : f, e[4] = m ? o(e[3], a) : t[4]
                }
                return (f = t[5]) && (m = e[5], e[5] = m ? i(m, f, t[6]) : f, e[6] = m ? o(e[5], a) : t[6]), (f = t[7]) && (e[7] = f), c & s && (e[8] = null == e[8] ? t[8] : l(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = u, e
            }
        },
        BVx2: (e, t, r) => {
            var n = r("4+Vk"),
                i = n && new n;
            e.exports = i
        },
        QaiR: e => {
            e.exports = {}
        },
        MRwE: (e, t, r) => {
            var n = r("QT01"),
                i = r("pnw1"),
                o = Math.min;
            e.exports = function(e, t) {
                for (var r = e.length, a = o(t.length, r), s = n(e); a--;) {
                    var l = t[a];
                    e[a] = i(l, r) ? s[l] : void 0
                }
                return e
            }
        },
        AeOa: e => {
            var t = "__lodash_placeholder__";
            e.exports = function(e, r) {
                for (var n = -1, i = e.length, o = 0, a = []; ++n < i;) {
                    var s = e[n];
                    s !== r && s !== t || (e[n] = t, a[o++] = n)
                }
                return a
            }
        },
        SStt: (e, t, r) => {
            var n = r("uA6v"),
                i = r("kG2z")(n);
            e.exports = i
        },
        "5KBi": e => {
            e.exports = function(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = [e, e]
                })), r
            }
        },
        "E2v+": (e, t, r) => {
            var n = r("wafF"),
                i = r("kEP7"),
                o = r("7Pat"),
                a = r("p4bK");
            e.exports = function(e, t, r) {
                var s = t + "";
                return o(e, i(s, a(n(s), r)))
            }
        },
        n1QJ: e => {
            e.exports = function(e, t, r) {
                for (var n = r - 1, i = e.length; ++n < i;)
                    if (e[n] === t) return n;
                return -1
            }
        },
        "6XIJ": e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var r = e.length; r-- && t.test(e.charAt(r)););
                return r
            }
        },
        p4bK: (e, t, r) => {
            var n = r("LmOH"),
                i = r("OfKG"),
                o = [
                    ["ary", 128],
                    ["bind", 1],
                    ["bindKey", 2],
                    ["curry", 8],
                    ["curryRight", 16],
                    ["flip", 512],
                    ["partial", 32],
                    ["partialRight", 64],
                    ["rearg", 256]
                ];
            e.exports = function(e, t) {
                return n(o, (function(r) {
                    var n = "_." + r[0];
                    t & r[1] && !i(e, n) && e.push(n)
                })), e.sort()
            }
        },
        "e+ll": (e, t, r) => {
            var n = r("deT9"),
                i = r("0+c5"),
                o = r("QT01");
            e.exports = function(e) {
                if (e instanceof n) return e.clone();
                var t = new i(e.__wrapped__, e.__chain__);
                return t.__actions__ = o(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }
        },
        "3POh": (e, t, r) => {
            var n = r("P+cI");

            function i(e, t, r) {
                var o = n(e, 16, void 0, void 0, void 0, void 0, void 0, t = r ? void 0 : t);
                return o.placeholder = i.placeholder, o
            }
            i.placeholder = {}, e.exports = i
        },
        RNvQ: (e, t, r) => {
            var n = r("tQYX"),
                i = r("ENE1"),
                o = r("nvU9"),
                a = Math.max,
                s = Math.min;
            e.exports = function(e, t, r) {
                var l, c, u, d, p, f, m = 0,
                    h = !1,
                    b = !1,
                    g = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");

                function v(t) {
                    var r = l,
                        n = c;
                    return l = c = void 0, m = t, d = e.apply(n, r)
                }

                function y(e) {
                    return m = e, p = setTimeout(w, t), h ? v(e) : d
                }

                function x(e) {
                    var r = e - f;
                    return void 0 === f || r >= t || r < 0 || b && e - m >= u
                }

                function w() {
                    var e = i();
                    if (x(e)) return k(e);
                    p = setTimeout(w, function(e) {
                        var r = t - (e - f);
                        return b ? s(r, u - (e - m)) : r
                    }(e))
                }

                function k(e) {
                    return p = void 0, g && l ? v(e) : (l = c = void 0, d)
                }

                function S() {
                    var e = i(),
                        r = x(e);
                    if (l = arguments, c = this, f = e, r) {
                        if (void 0 === p) return y(f);
                        if (b) return clearTimeout(p), p = setTimeout(w, t), v(f)
                    }
                    return void 0 === p && (p = setTimeout(w, t)), d
                }
                return t = o(t) || 0, n(r) && (h = !!r.leading, u = (b = "maxWait" in r) ? a(o(r.maxWait) || 0, t) : u, g = "trailing" in r ? !!r.trailing : g), S.cancel = function() {
                    void 0 !== p && clearTimeout(p), m = 0, l = f = c = p = void 0
                }, S.flush = function() {
                    return void 0 === p ? d : k(i())
                }, S
            }
        },
        jPI1: (e, t, r) => {
            var n = r("tUbk")();
            e.exports = n
        },
        nnm9: e => {
            e.exports = function() {}
        },
        ENE1: (e, t, r) => {
            var n = r("IBsm");
            e.exports = function() {
                return n.Date.now()
            }
        },
        veKZ: (e, t, r) => {
            var n = r("cPMt"),
                i = r("Q4oW"),
                o = r("S3pA"),
                a = r("5q8j"),
                s = r("wxYD");
            e.exports = function(e, t, r) {
                var l = s(e) ? n : a,
                    c = arguments.length < 3;
                return l(e, o(t, 4), r, c, i)
            }
        },
        Bcqe: (e, t, r) => {
            var n = r("RNvQ"),
                i = r("tQYX");
            e.exports = function(e, t, r) {
                var o = !0,
                    a = !0;
                if ("function" != typeof e) throw new TypeError("Expected a function");
                return i(r) && (o = "leading" in r ? !!r.leading : o, a = "trailing" in r ? !!r.trailing : a), n(e, t, {
                    leading: o,
                    maxWait: t,
                    trailing: a
                })
            }
        },
        fWyh: (e, t, r) => {
            var n = r("nvU9"),
                i = 1 / 0;
            e.exports = function(e) {
                return e ? (e = n(e)) === i || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
            }
        },
        m2YG: (e, t, r) => {
            var n = r("fWyh");
            e.exports = function(e) {
                var t = n(e),
                    r = t % 1;
                return t === t ? r ? t - r : t : 0
            }
        },
        nvU9: (e, t, r) => {
            var n = r("I1fX"),
                i = r("tQYX"),
                o = r("a88S"),
                a = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                c = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (o(e)) return NaN;
                if (i(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var r = s.test(e);
                return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
            }
        },
        "pL+m": (e, t, r) => {
            var n = r("zWkt")(r("BlJA"));
            e.exports = n
        },
        jm4U: (e, t, r) => {
            var n = r("deT9"),
                i = r("0+c5"),
                o = r("obGE"),
                a = r("wxYD"),
                s = r("tLQN"),
                l = r("e+ll"),
                c = Object.prototype.hasOwnProperty;

            function u(e) {
                if (s(e) && !a(e) && !(e instanceof n)) {
                    if (e instanceof i) return e;
                    if (c.call(e, "__wrapped__")) return l(e)
                }
                return new i(e)
            }
            u.prototype = o.prototype, u.prototype.constructor = u, e.exports = u
        },
        q2ou: (e, t, r) => {
            "use strict";
            var n = r("PJv3"),
                i = r("sqFk"),
                o = r("nTxR"),
                a = r("Wd5o"),
                s = r("Qgn8"),
                l = r("rDFp"),
                c = r("WE2l"),
                u = Object.prototype.toString;

            function d(e) {
                if (!(this instanceof d)) return new d(e);
                this.options = i.assign({
                    chunkSize: 16384,
                    windowBits: 0,
                    to: ""
                }, e || {});
                var t = this.options;
                t.raw && t.windowBits >= 0 && t.windowBits < 16 && (t.windowBits = -t.windowBits, 0 === t.windowBits && (t.windowBits = -15)), !(t.windowBits >= 0 && t.windowBits < 16) || e && e.windowBits || (t.windowBits += 32), t.windowBits > 15 && t.windowBits < 48 && 0 === (15 & t.windowBits) && (t.windowBits |= 15), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new l, this.strm.avail_out = 0;
                var r = n.inflateInit2(this.strm, t.windowBits);
                if (r !== a.Z_OK) throw new Error(s[r]);
                if (this.header = new c, n.inflateGetHeader(this.strm, this.header), t.dictionary && ("string" === typeof t.dictionary ? t.dictionary = o.string2buf(t.dictionary) : "[object ArrayBuffer]" === u.call(t.dictionary) && (t.dictionary = new Uint8Array(t.dictionary)), t.raw && (r = n.inflateSetDictionary(this.strm, t.dictionary)) !== a.Z_OK)) throw new Error(s[r])
            }

            function p(e, t) {
                var r = new d(t);
                if (r.push(e, !0), r.err) throw r.msg || s[r.err];
                return r.result
            }
            d.prototype.push = function(e, t) {
                var r, s, l, c, d, p = this.strm,
                    f = this.options.chunkSize,
                    m = this.options.dictionary,
                    h = !1;
                if (this.ended) return !1;
                s = t === ~~t ? t : !0 === t ? a.Z_FINISH : a.Z_NO_FLUSH, "string" === typeof e ? p.input = o.binstring2buf(e) : "[object ArrayBuffer]" === u.call(e) ? p.input = new Uint8Array(e) : p.input = e, p.next_in = 0, p.avail_in = p.input.length;
                do {
                    if (0 === p.avail_out && (p.output = new i.Buf8(f), p.next_out = 0, p.avail_out = f), (r = n.inflate(p, a.Z_NO_FLUSH)) === a.Z_NEED_DICT && m && (r = n.inflateSetDictionary(this.strm, m)), r === a.Z_BUF_ERROR && !0 === h && (r = a.Z_OK, h = !1), r !== a.Z_STREAM_END && r !== a.Z_OK) return this.onEnd(r), this.ended = !0, !1;
                    p.next_out && (0 !== p.avail_out && r !== a.Z_STREAM_END && (0 !== p.avail_in || s !== a.Z_FINISH && s !== a.Z_SYNC_FLUSH) || ("string" === this.options.to ? (l = o.utf8border(p.output, p.next_out), c = p.next_out - l, d = o.buf2string(p.output, l), p.next_out = c, p.avail_out = f - c, c && i.arraySet(p.output, p.output, l, c, 0), this.onData(d)) : this.onData(i.shrinkBuf(p.output, p.next_out)))), 0 === p.avail_in && 0 === p.avail_out && (h = !0)
                } while ((p.avail_in > 0 || 0 === p.avail_out) && r !== a.Z_STREAM_END);
                return r === a.Z_STREAM_END && (s = a.Z_FINISH), s === a.Z_FINISH ? (r = n.inflateEnd(this.strm), this.onEnd(r), this.ended = !0, r === a.Z_OK) : s !== a.Z_SYNC_FLUSH || (this.onEnd(a.Z_OK), p.avail_out = 0, !0)
            }, d.prototype.onData = function(e) {
                this.chunks.push(e)
            }, d.prototype.onEnd = function(e) {
                e === a.Z_OK && ("string" === this.options.to ? this.result = this.chunks.join("") : this.result = i.flattenChunks(this.chunks)), this.chunks = [], this.err = e, this.msg = this.strm.msg
            }, t.Inflate = d, t.inflate = p, t.inflateRaw = function(e, t) {
                return (t = t || {}).raw = !0, p(e, t)
            }, t.ungzip = p
        },
        sqFk: (e, t) => {
            "use strict";
            var r = "undefined" !== typeof Uint8Array && "undefined" !== typeof Uint16Array && "undefined" !== typeof Int32Array;

            function n(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            t.assign = function(e) {
                for (var t = Array.prototype.slice.call(arguments, 1); t.length;) {
                    var r = t.shift();
                    if (r) {
                        if ("object" !== typeof r) throw new TypeError(r + "must be non-object");
                        for (var i in r) n(r, i) && (e[i] = r[i])
                    }
                }
                return e
            }, t.shrinkBuf = function(e, t) {
                return e.length === t ? e : e.subarray ? e.subarray(0, t) : (e.length = t, e)
            };
            var i = {
                    arraySet: function(e, t, r, n, i) {
                        if (t.subarray && e.subarray) e.set(t.subarray(r, r + n), i);
                        else
                            for (var o = 0; o < n; o++) e[i + o] = t[r + o]
                    },
                    flattenChunks: function(e) {
                        var t, r, n, i, o, a;
                        for (n = 0, t = 0, r = e.length; t < r; t++) n += e[t].length;
                        for (a = new Uint8Array(n), i = 0, t = 0, r = e.length; t < r; t++) o = e[t], a.set(o, i), i += o.length;
                        return a
                    }
                },
                o = {
                    arraySet: function(e, t, r, n, i) {
                        for (var o = 0; o < n; o++) e[i + o] = t[r + o]
                    },
                    flattenChunks: function(e) {
                        return [].concat.apply([], e)
                    }
                };
            t.setTyped = function(e) {
                e ? (t.Buf8 = Uint8Array, t.Buf16 = Uint16Array, t.Buf32 = Int32Array, t.assign(t, i)) : (t.Buf8 = Array, t.Buf16 = Array, t.Buf32 = Array, t.assign(t, o))
            }, t.setTyped(r)
        },
        nTxR: (e, t, r) => {
            "use strict";
            var n = r("sqFk"),
                i = !0,
                o = !0;
            try {
                String.fromCharCode.apply(null, [0])
            } catch (c) {
                i = !1
            }
            try {
                String.fromCharCode.apply(null, new Uint8Array(1))
            } catch (c) {
                o = !1
            }
            for (var a = new n.Buf8(256), s = 0; s < 256; s++) a[s] = s >= 252 ? 6 : s >= 248 ? 5 : s >= 240 ? 4 : s >= 224 ? 3 : s >= 192 ? 2 : 1;

            function l(e, t) {
                if (t < 65534 && (e.subarray && o || !e.subarray && i)) return String.fromCharCode.apply(null, n.shrinkBuf(e, t));
                for (var r = "", a = 0; a < t; a++) r += String.fromCharCode(e[a]);
                return r
            }
            a[254] = a[254] = 1, t.string2buf = function(e) {
                var t, r, i, o, a, s = e.length,
                    l = 0;
                for (o = 0; o < s; o++) 55296 === (64512 & (r = e.charCodeAt(o))) && o + 1 < s && 56320 === (64512 & (i = e.charCodeAt(o + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), o++), l += r < 128 ? 1 : r < 2048 ? 2 : r < 65536 ? 3 : 4;
                for (t = new n.Buf8(l), a = 0, o = 0; a < l; o++) 55296 === (64512 & (r = e.charCodeAt(o))) && o + 1 < s && 56320 === (64512 & (i = e.charCodeAt(o + 1))) && (r = 65536 + (r - 55296 << 10) + (i - 56320), o++), r < 128 ? t[a++] = r : r < 2048 ? (t[a++] = 192 | r >>> 6, t[a++] = 128 | 63 & r) : r < 65536 ? (t[a++] = 224 | r >>> 12, t[a++] = 128 | r >>> 6 & 63, t[a++] = 128 | 63 & r) : (t[a++] = 240 | r >>> 18, t[a++] = 128 | r >>> 12 & 63, t[a++] = 128 | r >>> 6 & 63, t[a++] = 128 | 63 & r);
                return t
            }, t.buf2binstring = function(e) {
                return l(e, e.length)
            }, t.binstring2buf = function(e) {
                for (var t = new n.Buf8(e.length), r = 0, i = t.length; r < i; r++) t[r] = e.charCodeAt(r);
                return t
            }, t.buf2string = function(e, t) {
                var r, n, i, o, s = t || e.length,
                    c = new Array(2 * s);
                for (n = 0, r = 0; r < s;)
                    if ((i = e[r++]) < 128) c[n++] = i;
                    else if ((o = a[i]) > 4) c[n++] = 65533, r += o - 1;
                else {
                    for (i &= 2 === o ? 31 : 3 === o ? 15 : 7; o > 1 && r < s;) i = i << 6 | 63 & e[r++], o--;
                    o > 1 ? c[n++] = 65533 : i < 65536 ? c[n++] = i : (i -= 65536, c[n++] = 55296 | i >> 10 & 1023, c[n++] = 56320 | 1023 & i)
                }
                return l(c, n)
            }, t.utf8border = function(e, t) {
                var r;
                for ((t = t || e.length) > e.length && (t = e.length), r = t - 1; r >= 0 && 128 === (192 & e[r]);) r--;
                return r < 0 || 0 === r ? t : r + a[e[r]] > t ? r : t
            }
        },
        FkYz: e => {
            "use strict";
            e.exports = function(e, t, r, n) {
                for (var i = 65535 & e | 0, o = e >>> 16 & 65535 | 0, a = 0; 0 !== r;) {
                    r -= a = r > 2e3 ? 2e3 : r;
                    do {
                        o = o + (i = i + t[n++] | 0) | 0
                    } while (--a);
                    i %= 65521, o %= 65521
                }
                return i | o << 16 | 0
            }
        },
        Wd5o: e => {
            "use strict";
            e.exports = {
                Z_NO_FLUSH: 0,
                Z_PARTIAL_FLUSH: 1,
                Z_SYNC_FLUSH: 2,
                Z_FULL_FLUSH: 3,
                Z_FINISH: 4,
                Z_BLOCK: 5,
                Z_TREES: 6,
                Z_OK: 0,
                Z_STREAM_END: 1,
                Z_NEED_DICT: 2,
                Z_ERRNO: -1,
                Z_STREAM_ERROR: -2,
                Z_DATA_ERROR: -3,
                Z_BUF_ERROR: -5,
                Z_NO_COMPRESSION: 0,
                Z_BEST_SPEED: 1,
                Z_BEST_COMPRESSION: 9,
                Z_DEFAULT_COMPRESSION: -1,
                Z_FILTERED: 1,
                Z_HUFFMAN_ONLY: 2,
                Z_RLE: 3,
                Z_FIXED: 4,
                Z_DEFAULT_STRATEGY: 0,
                Z_BINARY: 0,
                Z_TEXT: 1,
                Z_UNKNOWN: 2,
                Z_DEFLATED: 8
            }
        },
        uF5w: e => {
            "use strict";
            var t = function() {
                for (var e, t = [], r = 0; r < 256; r++) {
                    e = r;
                    for (var n = 0; n < 8; n++) e = 1 & e ? 3988292384 ^ e >>> 1 : e >>> 1;
                    t[r] = e
                }
                return t
            }();
            e.exports = function(e, r, n, i) {
                var o = t,
                    a = i + n;
                e ^= -1;
                for (var s = i; s < a; s++) e = e >>> 8 ^ o[255 & (e ^ r[s])];
                return -1 ^ e
            }
        },
        WE2l: e => {
            "use strict";
            e.exports = function() {
                this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1
            }
        },
        tDiK: e => {
            "use strict";
            e.exports = function(e, t) {
                var r, n, i, o, a, s, l, c, u, d, p, f, m, h, b, g, v, y, x, w, k, S, B, _, A;
                r = e.state, n = e.next_in, _ = e.input, i = n + (e.avail_in - 5), o = e.next_out, A = e.output, a = o - (t - e.avail_out), s = o + (e.avail_out - 257), l = r.dmax, c = r.wsize, u = r.whave, d = r.wnext, p = r.window, f = r.hold, m = r.bits, h = r.lencode, b = r.distcode, g = (1 << r.lenbits) - 1, v = (1 << r.distbits) - 1;
                e: do {
                    m < 15 && (f += _[n++] << m, m += 8, f += _[n++] << m, m += 8), y = h[f & g];
                    t: for (;;) {
                        if (f >>>= x = y >>> 24, m -= x, 0 === (x = y >>> 16 & 255)) A[o++] = 65535 & y;
                        else {
                            if (!(16 & x)) {
                                if (0 === (64 & x)) {
                                    y = h[(65535 & y) + (f & (1 << x) - 1)];
                                    continue t
                                }
                                if (32 & x) {
                                    r.mode = 12;
                                    break e
                                }
                                e.msg = "invalid literal/length code", r.mode = 30;
                                break e
                            }
                            w = 65535 & y, (x &= 15) && (m < x && (f += _[n++] << m, m += 8), w += f & (1 << x) - 1, f >>>= x, m -= x), m < 15 && (f += _[n++] << m, m += 8, f += _[n++] << m, m += 8), y = b[f & v];
                            r: for (;;) {
                                if (f >>>= x = y >>> 24, m -= x, !(16 & (x = y >>> 16 & 255))) {
                                    if (0 === (64 & x)) {
                                        y = b[(65535 & y) + (f & (1 << x) - 1)];
                                        continue r
                                    }
                                    e.msg = "invalid distance code", r.mode = 30;
                                    break e
                                }
                                if (k = 65535 & y, m < (x &= 15) && (f += _[n++] << m, (m += 8) < x && (f += _[n++] << m, m += 8)), (k += f & (1 << x) - 1) > l) {
                                    e.msg = "invalid distance too far back", r.mode = 30;
                                    break e
                                }
                                if (f >>>= x, m -= x, k > (x = o - a)) {
                                    if ((x = k - x) > u && r.sane) {
                                        e.msg = "invalid distance too far back", r.mode = 30;
                                        break e
                                    }
                                    if (S = 0, B = p, 0 === d) {
                                        if (S += c - x, x < w) {
                                            w -= x;
                                            do {
                                                A[o++] = p[S++]
                                            } while (--x);
                                            S = o - k, B = A
                                        }
                                    } else if (d < x) {
                                        if (S += c + d - x, (x -= d) < w) {
                                            w -= x;
                                            do {
                                                A[o++] = p[S++]
                                            } while (--x);
                                            if (S = 0, d < w) {
                                                w -= x = d;
                                                do {
                                                    A[o++] = p[S++]
                                                } while (--x);
                                                S = o - k, B = A
                                            }
                                        }
                                    } else if (S += d - x, x < w) {
                                        w -= x;
                                        do {
                                            A[o++] = p[S++]
                                        } while (--x);
                                        S = o - k, B = A
                                    }
                                    for (; w > 2;) A[o++] = B[S++], A[o++] = B[S++], A[o++] = B[S++], w -= 3;
                                    w && (A[o++] = B[S++], w > 1 && (A[o++] = B[S++]))
                                } else {
                                    S = o - k;
                                    do {
                                        A[o++] = A[S++], A[o++] = A[S++], A[o++] = A[S++], w -= 3
                                    } while (w > 2);
                                    w && (A[o++] = A[S++], w > 1 && (A[o++] = A[S++]))
                                }
                                break
                            }
                        }
                        break
                    }
                } while (n < i && o < s);
                n -= w = m >> 3, f &= (1 << (m -= w << 3)) - 1, e.next_in = n, e.next_out = o, e.avail_in = n < i ? i - n + 5 : 5 - (n - i), e.avail_out = o < s ? s - o + 257 : 257 - (o - s), r.hold = f, r.bits = m
            }
        },
        PJv3: (e, t, r) => {
            "use strict";
            var n = r("sqFk"),
                i = r("FkYz"),
                o = r("uF5w"),
                a = r("tDiK"),
                s = r("J2ks"),
                l = -2,
                c = 12,
                u = 30;

            function d(e) {
                return (e >>> 24 & 255) + (e >>> 8 & 65280) + ((65280 & e) << 8) + ((255 & e) << 24)
            }

            function p() {
                this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new n.Buf16(320), this.work = new n.Buf16(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0
            }

            function f(e) {
                var t;
                return e && e.state ? (t = e.state, e.total_in = e.total_out = t.total = 0, e.msg = "", t.wrap && (e.adler = 1 & t.wrap), t.mode = 1, t.last = 0, t.havedict = 0, t.dmax = 32768, t.head = null, t.hold = 0, t.bits = 0, t.lencode = t.lendyn = new n.Buf32(852), t.distcode = t.distdyn = new n.Buf32(592), t.sane = 1, t.back = -1, 0) : l
            }

            function m(e) {
                var t;
                return e && e.state ? ((t = e.state).wsize = 0, t.whave = 0, t.wnext = 0, f(e)) : l
            }

            function h(e, t) {
                var r, n;
                return e && e.state ? (n = e.state, t < 0 ? (r = 0, t = -t) : (r = 1 + (t >> 4), t < 48 && (t &= 15)), t && (t < 8 || t > 15) ? l : (null !== n.window && n.wbits !== t && (n.window = null), n.wrap = r, n.wbits = t, m(e))) : l
            }

            function b(e, t) {
                var r, n;
                return e ? (n = new p, e.state = n, n.window = null, 0 !== (r = h(e, t)) && (e.state = null), r) : l
            }
            var g, v, y = !0;

            function x(e) {
                if (y) {
                    var t;
                    for (g = new n.Buf32(512), v = new n.Buf32(32), t = 0; t < 144;) e.lens[t++] = 8;
                    for (; t < 256;) e.lens[t++] = 9;
                    for (; t < 280;) e.lens[t++] = 7;
                    for (; t < 288;) e.lens[t++] = 8;
                    for (s(1, e.lens, 0, 288, g, 0, e.work, {
                            bits: 9
                        }), t = 0; t < 32;) e.lens[t++] = 5;
                    s(2, e.lens, 0, 32, v, 0, e.work, {
                        bits: 5
                    }), y = !1
                }
                e.lencode = g, e.lenbits = 9, e.distcode = v, e.distbits = 5
            }

            function w(e, t, r, i) {
                var o, a = e.state;
                return null === a.window && (a.wsize = 1 << a.wbits, a.wnext = 0, a.whave = 0, a.window = new n.Buf8(a.wsize)), i >= a.wsize ? (n.arraySet(a.window, t, r - a.wsize, a.wsize, 0), a.wnext = 0, a.whave = a.wsize) : ((o = a.wsize - a.wnext) > i && (o = i), n.arraySet(a.window, t, r - i, o, a.wnext), (i -= o) ? (n.arraySet(a.window, t, r - i, i, 0), a.wnext = i, a.whave = a.wsize) : (a.wnext += o, a.wnext === a.wsize && (a.wnext = 0), a.whave < a.wsize && (a.whave += o))), 0
            }
            t.inflateReset = m, t.inflateReset2 = h, t.inflateResetKeep = f, t.inflateInit = function(e) {
                return b(e, 15)
            }, t.inflateInit2 = b, t.inflate = function(e, t) {
                var r, p, f, m, h, b, g, v, y, k, S, B, _, A, U, T, C, E, O, I, D, P, R, z, F = 0,
                    W = new n.Buf8(4),
                    M = [16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15];
                if (!e || !e.state || !e.output || !e.input && 0 !== e.avail_in) return l;
                (r = e.state).mode === c && (r.mode = 13), h = e.next_out, f = e.output, g = e.avail_out, m = e.next_in, p = e.input, b = e.avail_in, v = r.hold, y = r.bits, k = b, S = g, P = 0;
                e: for (;;) switch (r.mode) {
                    case 1:
                        if (0 === r.wrap) {
                            r.mode = 13;
                            break
                        }
                        for (; y < 16;) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        if (2 & r.wrap && 35615 === v) {
                            r.check = 0, W[0] = 255 & v, W[1] = v >>> 8 & 255, r.check = o(r.check, W, 2, 0), v = 0, y = 0, r.mode = 2;
                            break
                        }
                        if (r.flags = 0, r.head && (r.head.done = !1), !(1 & r.wrap) || (((255 & v) << 8) + (v >> 8)) % 31) {
                            e.msg = "incorrect header check", r.mode = u;
                            break
                        }
                        if (8 !== (15 & v)) {
                            e.msg = "unknown compression method", r.mode = u;
                            break
                        }
                        if (y -= 4, D = 8 + (15 & (v >>>= 4)), 0 === r.wbits) r.wbits = D;
                        else if (D > r.wbits) {
                            e.msg = "invalid window size", r.mode = u;
                            break
                        }
                        r.dmax = 1 << D, e.adler = r.check = 1, r.mode = 512 & v ? 10 : c, v = 0, y = 0;
                        break;
                    case 2:
                        for (; y < 16;) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        if (r.flags = v, 8 !== (255 & r.flags)) {
                            e.msg = "unknown compression method", r.mode = u;
                            break
                        }
                        if (57344 & r.flags) {
                            e.msg = "unknown header flags set", r.mode = u;
                            break
                        }
                        r.head && (r.head.text = v >> 8 & 1), 512 & r.flags && (W[0] = 255 & v, W[1] = v >>> 8 & 255, r.check = o(r.check, W, 2, 0)), v = 0, y = 0, r.mode = 3;
                    case 3:
                        for (; y < 32;) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        r.head && (r.head.time = v), 512 & r.flags && (W[0] = 255 & v, W[1] = v >>> 8 & 255, W[2] = v >>> 16 & 255, W[3] = v >>> 24 & 255, r.check = o(r.check, W, 4, 0)), v = 0, y = 0, r.mode = 4;
                    case 4:
                        for (; y < 16;) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        r.head && (r.head.xflags = 255 & v, r.head.os = v >> 8), 512 & r.flags && (W[0] = 255 & v, W[1] = v >>> 8 & 255, r.check = o(r.check, W, 2, 0)), v = 0, y = 0, r.mode = 5;
                    case 5:
                        if (1024 & r.flags) {
                            for (; y < 16;) {
                                if (0 === b) break e;
                                b--, v += p[m++] << y, y += 8
                            }
                            r.length = v, r.head && (r.head.extra_len = v), 512 & r.flags && (W[0] = 255 & v, W[1] = v >>> 8 & 255, r.check = o(r.check, W, 2, 0)), v = 0, y = 0
                        } else r.head && (r.head.extra = null);
                        r.mode = 6;
                    case 6:
                        if (1024 & r.flags && ((B = r.length) > b && (B = b), B && (r.head && (D = r.head.extra_len - r.length, r.head.extra || (r.head.extra = new Array(r.head.extra_len)), n.arraySet(r.head.extra, p, m, B, D)), 512 & r.flags && (r.check = o(r.check, p, B, m)), b -= B, m += B, r.length -= B), r.length)) break e;
                        r.length = 0, r.mode = 7;
                    case 7:
                        if (2048 & r.flags) {
                            if (0 === b) break e;
                            B = 0;
                            do {
                                D = p[m + B++], r.head && D && r.length < 65536 && (r.head.name += String.fromCharCode(D))
                            } while (D && B < b);
                            if (512 & r.flags && (r.check = o(r.check, p, B, m)), b -= B, m += B, D) break e
                        } else r.head && (r.head.name = null);
                        r.length = 0, r.mode = 8;
                    case 8:
                        if (4096 & r.flags) {
                            if (0 === b) break e;
                            B = 0;
                            do {
                                D = p[m + B++], r.head && D && r.length < 65536 && (r.head.comment += String.fromCharCode(D))
                            } while (D && B < b);
                            if (512 & r.flags && (r.check = o(r.check, p, B, m)), b -= B, m += B, D) break e
                        } else r.head && (r.head.comment = null);
                        r.mode = 9;
                    case 9:
                        if (512 & r.flags) {
                            for (; y < 16;) {
                                if (0 === b) break e;
                                b--, v += p[m++] << y, y += 8
                            }
                            if (v !== (65535 & r.check)) {
                                e.msg = "header crc mismatch", r.mode = u;
                                break
                            }
                            v = 0, y = 0
                        }
                        r.head && (r.head.hcrc = r.flags >> 9 & 1, r.head.done = !0), e.adler = r.check = 0, r.mode = c;
                        break;
                    case 10:
                        for (; y < 32;) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        e.adler = r.check = d(v), v = 0, y = 0, r.mode = 11;
                    case 11:
                        if (0 === r.havedict) return e.next_out = h, e.avail_out = g, e.next_in = m, e.avail_in = b, r.hold = v, r.bits = y, 2;
                        e.adler = r.check = 1, r.mode = c;
                    case c:
                        if (5 === t || 6 === t) break e;
                    case 13:
                        if (r.last) {
                            v >>>= 7 & y, y -= 7 & y, r.mode = 27;
                            break
                        }
                        for (; y < 3;) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        switch (r.last = 1 & v, y -= 1, 3 & (v >>>= 1)) {
                            case 0:
                                r.mode = 14;
                                break;
                            case 1:
                                if (x(r), r.mode = 20, 6 === t) {
                                    v >>>= 2, y -= 2;
                                    break e
                                }
                                break;
                            case 2:
                                r.mode = 17;
                                break;
                            case 3:
                                e.msg = "invalid block type", r.mode = u
                        }
                        v >>>= 2, y -= 2;
                        break;
                    case 14:
                        for (v >>>= 7 & y, y -= 7 & y; y < 32;) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        if ((65535 & v) !== (v >>> 16 ^ 65535)) {
                            e.msg = "invalid stored block lengths", r.mode = u;
                            break
                        }
                        if (r.length = 65535 & v, v = 0, y = 0, r.mode = 15, 6 === t) break e;
                    case 15:
                        r.mode = 16;
                    case 16:
                        if (B = r.length) {
                            if (B > b && (B = b), B > g && (B = g), 0 === B) break e;
                            n.arraySet(f, p, m, B, h), b -= B, m += B, g -= B, h += B, r.length -= B;
                            break
                        }
                        r.mode = c;
                        break;
                    case 17:
                        for (; y < 14;) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        if (r.nlen = 257 + (31 & v), v >>>= 5, y -= 5, r.ndist = 1 + (31 & v), v >>>= 5, y -= 5, r.ncode = 4 + (15 & v), v >>>= 4, y -= 4, r.nlen > 286 || r.ndist > 30) {
                            e.msg = "too many length or distance symbols", r.mode = u;
                            break
                        }
                        r.have = 0, r.mode = 18;
                    case 18:
                        for (; r.have < r.ncode;) {
                            for (; y < 3;) {
                                if (0 === b) break e;
                                b--, v += p[m++] << y, y += 8
                            }
                            r.lens[M[r.have++]] = 7 & v, v >>>= 3, y -= 3
                        }
                        for (; r.have < 19;) r.lens[M[r.have++]] = 0;
                        if (r.lencode = r.lendyn, r.lenbits = 7, R = {
                                bits: r.lenbits
                            }, P = s(0, r.lens, 0, 19, r.lencode, 0, r.work, R), r.lenbits = R.bits, P) {
                            e.msg = "invalid code lengths set", r.mode = u;
                            break
                        }
                        r.have = 0, r.mode = 19;
                    case 19:
                        for (; r.have < r.nlen + r.ndist;) {
                            for (; T = (F = r.lencode[v & (1 << r.lenbits) - 1]) >>> 16 & 255, C = 65535 & F, !((U = F >>> 24) <= y);) {
                                if (0 === b) break e;
                                b--, v += p[m++] << y, y += 8
                            }
                            if (C < 16) v >>>= U, y -= U, r.lens[r.have++] = C;
                            else {
                                if (16 === C) {
                                    for (z = U + 2; y < z;) {
                                        if (0 === b) break e;
                                        b--, v += p[m++] << y, y += 8
                                    }
                                    if (v >>>= U, y -= U, 0 === r.have) {
                                        e.msg = "invalid bit length repeat", r.mode = u;
                                        break
                                    }
                                    D = r.lens[r.have - 1], B = 3 + (3 & v), v >>>= 2, y -= 2
                                } else if (17 === C) {
                                    for (z = U + 3; y < z;) {
                                        if (0 === b) break e;
                                        b--, v += p[m++] << y, y += 8
                                    }
                                    y -= U, D = 0, B = 3 + (7 & (v >>>= U)), v >>>= 3, y -= 3
                                } else {
                                    for (z = U + 7; y < z;) {
                                        if (0 === b) break e;
                                        b--, v += p[m++] << y, y += 8
                                    }
                                    y -= U, D = 0, B = 11 + (127 & (v >>>= U)), v >>>= 7, y -= 7
                                }
                                if (r.have + B > r.nlen + r.ndist) {
                                    e.msg = "invalid bit length repeat", r.mode = u;
                                    break
                                }
                                for (; B--;) r.lens[r.have++] = D
                            }
                        }
                        if (r.mode === u) break;
                        if (0 === r.lens[256]) {
                            e.msg = "invalid code -- missing end-of-block", r.mode = u;
                            break
                        }
                        if (r.lenbits = 9, R = {
                                bits: r.lenbits
                            }, P = s(1, r.lens, 0, r.nlen, r.lencode, 0, r.work, R), r.lenbits = R.bits, P) {
                            e.msg = "invalid literal/lengths set", r.mode = u;
                            break
                        }
                        if (r.distbits = 6, r.distcode = r.distdyn, R = {
                                bits: r.distbits
                            }, P = s(2, r.lens, r.nlen, r.ndist, r.distcode, 0, r.work, R), r.distbits = R.bits, P) {
                            e.msg = "invalid distances set", r.mode = u;
                            break
                        }
                        if (r.mode = 20, 6 === t) break e;
                    case 20:
                        r.mode = 21;
                    case 21:
                        if (b >= 6 && g >= 258) {
                            e.next_out = h, e.avail_out = g, e.next_in = m, e.avail_in = b, r.hold = v, r.bits = y, a(e, S), h = e.next_out, f = e.output, g = e.avail_out, m = e.next_in, p = e.input, b = e.avail_in, v = r.hold, y = r.bits, r.mode === c && (r.back = -1);
                            break
                        }
                        for (r.back = 0; T = (F = r.lencode[v & (1 << r.lenbits) - 1]) >>> 16 & 255, C = 65535 & F, !((U = F >>> 24) <= y);) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        if (T && 0 === (240 & T)) {
                            for (E = U, O = T, I = C; T = (F = r.lencode[I + ((v & (1 << E + O) - 1) >> E)]) >>> 16 & 255, C = 65535 & F, !(E + (U = F >>> 24) <= y);) {
                                if (0 === b) break e;
                                b--, v += p[m++] << y, y += 8
                            }
                            v >>>= E, y -= E, r.back += E
                        }
                        if (v >>>= U, y -= U, r.back += U, r.length = C, 0 === T) {
                            r.mode = 26;
                            break
                        }
                        if (32 & T) {
                            r.back = -1, r.mode = c;
                            break
                        }
                        if (64 & T) {
                            e.msg = "invalid literal/length code", r.mode = u;
                            break
                        }
                        r.extra = 15 & T, r.mode = 22;
                    case 22:
                        if (r.extra) {
                            for (z = r.extra; y < z;) {
                                if (0 === b) break e;
                                b--, v += p[m++] << y, y += 8
                            }
                            r.length += v & (1 << r.extra) - 1, v >>>= r.extra, y -= r.extra, r.back += r.extra
                        }
                        r.was = r.length, r.mode = 23;
                    case 23:
                        for (; T = (F = r.distcode[v & (1 << r.distbits) - 1]) >>> 16 & 255, C = 65535 & F, !((U = F >>> 24) <= y);) {
                            if (0 === b) break e;
                            b--, v += p[m++] << y, y += 8
                        }
                        if (0 === (240 & T)) {
                            for (E = U, O = T, I = C; T = (F = r.distcode[I + ((v & (1 << E + O) - 1) >> E)]) >>> 16 & 255, C = 65535 & F, !(E + (U = F >>> 24) <= y);) {
                                if (0 === b) break e;
                                b--, v += p[m++] << y, y += 8
                            }
                            v >>>= E, y -= E, r.back += E
                        }
                        if (v >>>= U, y -= U, r.back += U, 64 & T) {
                            e.msg = "invalid distance code", r.mode = u;
                            break
                        }
                        r.offset = C, r.extra = 15 & T, r.mode = 24;
                    case 24:
                        if (r.extra) {
                            for (z = r.extra; y < z;) {
                                if (0 === b) break e;
                                b--, v += p[m++] << y, y += 8
                            }
                            r.offset += v & (1 << r.extra) - 1, v >>>= r.extra, y -= r.extra, r.back += r.extra
                        }
                        if (r.offset > r.dmax) {
                            e.msg = "invalid distance too far back", r.mode = u;
                            break
                        }
                        r.mode = 25;
                    case 25:
                        if (0 === g) break e;
                        if (B = S - g, r.offset > B) {
                            if ((B = r.offset - B) > r.whave && r.sane) {
                                e.msg = "invalid distance too far back", r.mode = u;
                                break
                            }
                            B > r.wnext ? (B -= r.wnext, _ = r.wsize - B) : _ = r.wnext - B, B > r.length && (B = r.length), A = r.window
                        } else A = f, _ = h - r.offset, B = r.length;
                        B > g && (B = g), g -= B, r.length -= B;
                        do {
                            f[h++] = A[_++]
                        } while (--B);
                        0 === r.length && (r.mode = 21);
                        break;
                    case 26:
                        if (0 === g) break e;
                        f[h++] = r.length, g--, r.mode = 21;
                        break;
                    case 27:
                        if (r.wrap) {
                            for (; y < 32;) {
                                if (0 === b) break e;
                                b--, v |= p[m++] << y, y += 8
                            }
                            if (S -= g, e.total_out += S, r.total += S, S && (e.adler = r.check = r.flags ? o(r.check, f, S, h - S) : i(r.check, f, S, h - S)), S = g, (r.flags ? v : d(v)) !== r.check) {
                                e.msg = "incorrect data check", r.mode = u;
                                break
                            }
                            v = 0, y = 0
                        }
                        r.mode = 28;
                    case 28:
                        if (r.wrap && r.flags) {
                            for (; y < 32;) {
                                if (0 === b) break e;
                                b--, v += p[m++] << y, y += 8
                            }
                            if (v !== (4294967295 & r.total)) {
                                e.msg = "incorrect length check", r.mode = u;
                                break
                            }
                            v = 0, y = 0
                        }
                        r.mode = 29;
                    case 29:
                        P = 1;
                        break e;
                    case u:
                        P = -3;
                        break e;
                    case 31:
                        return -4;
                    default:
                        return l
                }
                return e.next_out = h, e.avail_out = g, e.next_in = m, e.avail_in = b, r.hold = v, r.bits = y, (r.wsize || S !== e.avail_out && r.mode < u && (r.mode < 27 || 4 !== t)) && w(e, e.output, e.next_out, S - e.avail_out) ? (r.mode = 31, -4) : (k -= e.avail_in, S -= e.avail_out, e.total_in += k, e.total_out += S, r.total += S, r.wrap && S && (e.adler = r.check = r.flags ? o(r.check, f, S, e.next_out - S) : i(r.check, f, S, e.next_out - S)), e.data_type = r.bits + (r.last ? 64 : 0) + (r.mode === c ? 128 : 0) + (20 === r.mode || 15 === r.mode ? 256 : 0), (0 === k && 0 === S || 4 === t) && 0 === P && (P = -5), P)
            }, t.inflateEnd = function(e) {
                if (!e || !e.state) return l;
                var t = e.state;
                return t.window && (t.window = null), e.state = null, 0
            }, t.inflateGetHeader = function(e, t) {
                var r;
                return e && e.state ? 0 === (2 & (r = e.state).wrap) ? l : (r.head = t, t.done = !1, 0) : l
            }, t.inflateSetDictionary = function(e, t) {
                var r, n = t.length;
                return e && e.state ? 0 !== (r = e.state).wrap && 11 !== r.mode ? l : 11 === r.mode && i(1, t, n, 0) !== r.check ? -3 : w(e, t, n, n) ? (r.mode = 31, -4) : (r.havedict = 1, 0) : l
            }, t.inflateInfo = "pako inflate (from Nodeca project)"
        },
        J2ks: (e, t, r) => {
            "use strict";
            var n = r("sqFk"),
                i = 15,
                o = [3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51, 59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0],
                a = [16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19, 19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78],
                s = [1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385, 513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385, 24577, 0, 0],
                l = [16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23, 23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64];
            e.exports = function(e, t, r, c, u, d, p, f) {
                var m, h, b, g, v, y, x, w, k, S = f.bits,
                    B = 0,
                    _ = 0,
                    A = 0,
                    U = 0,
                    T = 0,
                    C = 0,
                    E = 0,
                    O = 0,
                    I = 0,
                    D = 0,
                    P = null,
                    R = 0,
                    z = new n.Buf16(16),
                    F = new n.Buf16(16),
                    W = null,
                    M = 0;
                for (B = 0; B <= i; B++) z[B] = 0;
                for (_ = 0; _ < c; _++) z[t[r + _]]++;
                for (T = S, U = i; U >= 1 && 0 === z[U]; U--);
                if (T > U && (T = U), 0 === U) return u[d++] = 20971520, u[d++] = 20971520, f.bits = 1, 0;
                for (A = 1; A < U && 0 === z[A]; A++);
                for (T < A && (T = A), O = 1, B = 1; B <= i; B++)
                    if (O <<= 1, (O -= z[B]) < 0) return -1;
                if (O > 0 && (0 === e || 1 !== U)) return -1;
                for (F[1] = 0, B = 1; B < i; B++) F[B + 1] = F[B] + z[B];
                for (_ = 0; _ < c; _++) 0 !== t[r + _] && (p[F[t[r + _]]++] = _);
                if (0 === e ? (P = W = p, y = 19) : 1 === e ? (P = o, R -= 257, W = a, M -= 257, y = 256) : (P = s, W = l, y = -1), D = 0, _ = 0, B = A, v = d, C = T, E = 0, b = -1, g = (I = 1 << T) - 1, 1 === e && I > 852 || 2 === e && I > 592) return 1;
                for (;;) {
                    x = B - E, p[_] < y ? (w = 0, k = p[_]) : p[_] > y ? (w = W[M + p[_]], k = P[R + p[_]]) : (w = 96, k = 0), m = 1 << B - E, A = h = 1 << C;
                    do {
                        u[v + (D >> E) + (h -= m)] = x << 24 | w << 16 | k | 0
                    } while (0 !== h);
                    for (m = 1 << B - 1; D & m;) m >>= 1;
                    if (0 !== m ? (D &= m - 1, D += m) : D = 0, _++, 0 === --z[B]) {
                        if (B === U) break;
                        B = t[r + p[_]]
                    }
                    if (B > T && (D & g) !== b) {
                        for (0 === E && (E = T), v += A, O = 1 << (C = B - E); C + E < U && !((O -= z[C + E]) <= 0);) C++, O <<= 1;
                        if (I += 1 << C, 1 === e && I > 852 || 2 === e && I > 592) return 1;
                        u[b = D & g] = T << 24 | C << 16 | v - d | 0
                    }
                }
                return 0 !== D && (u[v + D] = B - E << 24 | 64 << 16 | 0), f.bits = T, 0
            }
        },
        Qgn8: e => {
            "use strict";
            e.exports = {
                2: "need dictionary",
                1: "stream end",
                0: "",
                "-1": "file error",
                "-2": "stream error",
                "-3": "data error",
                "-4": "insufficient memory",
                "-5": "buffer error",
                "-6": "incompatible version"
            }
        },
        rDFp: e => {
            "use strict";
            e.exports = function() {
                this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0
            }
        },
        FF9q: function(e, t, r) {
            var n = r("F63i");
            (function() {
                var t, r, i, o, a, s;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof n && null !== n && n.hrtime ? (e.exports = function() {
                    return (t() - a) / 1e6
                }, r = n.hrtime, o = (t = function() {
                    var e;
                    return 1e9 * (e = r())[0] + e[1]
                })(), s = 1e9 * n.uptime(), a = o - s) : Date.now ? (e.exports = function() {
                    return Date.now() - i
                }, i = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - i
                }, i = (new Date).getTime())
            }).call(this)
        },
        emlf: (e, t, r) => {
            "use strict";
            var n = r("YjNL");

            function i() {}

            function o() {}
            o.resetWarningCache = i, e.exports = function() {
                function e(e, t, r, i, o, a) {
                    if (a !== n) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function t() {
                    return e
                }
                e.isRequired = e;
                var r = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    elementType: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t,
                    checkPropTypes: o,
                    resetWarningCache: i
                };
                return r.PropTypes = r, r
            }
        },
        aWzz: (e, t, r) => {
            e.exports = r("emlf")()
        },
        YjNL: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        "0xii": (e, t, r) => {
            for (var n = r("FF9q"), i = window, o = ["moz", "webkit"], a = "AnimationFrame", s = i["request" + a], l = i["cancel" + a] || i["cancelRequest" + a], c = 0; !s && c < o.length; c++) s = i[o[c] + "Request" + a], l = i[o[c] + "Cancel" + a] || i[o[c] + "CancelRequest" + a];
            if (!s || !l) {
                var u = 0,
                    d = 0,
                    p = [];
                s = function(e) {
                    if (0 === p.length) {
                        var t = n(),
                            r = Math.max(0, 16.666666666666668 - (t - u));
                        u = r + t, setTimeout((function() {
                            var e = p.slice(0);
                            p.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled) try {
                                    e[t].callback(u)
                                } catch (r) {
                                    setTimeout((function() {
                                        throw r
                                    }), 0)
                                }
                        }), Math.round(r))
                    }
                    return p.push({
                        handle: ++d,
                        callback: e,
                        cancelled: !1
                    }), d
                }, l = function(e) {
                    for (var t = 0; t < p.length; t++) p[t].handle === e && (p[t].cancelled = !0)
                }
            }
            e.exports = function(e) {
                return s.call(i, e)
            }, e.exports.cancel = function() {
                l.apply(i, arguments)
            }, e.exports.polyfill = function(e) {
                e || (e = i), e.requestAnimationFrame = s, e.cancelAnimationFrame = l
            }
        },
        Z6fc: (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                i = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }();

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = o(r("XwoM")),
                s = o(r("vmhH")),
                l = o(r("RU0+")),
                c = o(r("7k4P")),
                u = o(r("0xii")),
                d = o(r("KDEh")),
                p = o(r("DTvD")),
                f = o(r("aWzz")),
                m = 1e3 / 60,
                h = function(e) {
                    function t(r) {
                        var i = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
                            var t = !1,
                                r = i.state,
                                o = r.currentStyle,
                                a = r.currentVelocity,
                                s = r.lastIdealStyle,
                                l = r.lastIdealVelocity;
                            for (var c in e)
                                if (Object.prototype.hasOwnProperty.call(e, c)) {
                                    var u = e[c];
                                    "number" === typeof u && (t || (t = !0, o = n({}, o), a = n({}, a), s = n({}, s), l = n({}, l)), o[c] = u, a[c] = 0, s[c] = u, l[c] = 0)
                                }
                            t && i.setState({
                                currentStyle: o,
                                currentVelocity: a,
                                lastIdealStyle: s,
                                lastIdealVelocity: l
                            })
                        }, this.startAnimationIfNecessary = function() {
                            i.animationID = u.default((function(e) {
                                var t = i.props.style;
                                if (d.default(i.state.currentStyle, t, i.state.currentVelocity)) return i.wasAnimating && i.props.onRest && i.props.onRest(), i.animationID = null, i.wasAnimating = !1, void(i.accumulatedTime = 0);
                                i.wasAnimating = !0;
                                var r = e || c.default(),
                                    n = r - i.prevTime;
                                if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + n, i.accumulatedTime > 10 * m && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
                                var o = (i.accumulatedTime - Math.floor(i.accumulatedTime / m) * m) / m,
                                    a = Math.floor(i.accumulatedTime / m),
                                    s = {},
                                    u = {},
                                    p = {},
                                    f = {};
                                for (var h in t)
                                    if (Object.prototype.hasOwnProperty.call(t, h)) {
                                        var b = t[h];
                                        if ("number" === typeof b) p[h] = b, f[h] = 0, s[h] = b, u[h] = 0;
                                        else {
                                            for (var g = i.state.lastIdealStyle[h], v = i.state.lastIdealVelocity[h], y = 0; y < a; y++) {
                                                var x = l.default(m / 1e3, g, v, b.val, b.stiffness, b.damping, b.precision);
                                                g = x[0], v = x[1]
                                            }
                                            var w = l.default(m / 1e3, g, v, b.val, b.stiffness, b.damping, b.precision),
                                                k = w[0],
                                                S = w[1];
                                            p[h] = g + (k - g) * o, f[h] = v + (S - v) * o, s[h] = g, u[h] = v
                                        }
                                    }
                                i.animationID = null, i.accumulatedTime -= a * m, i.setState({
                                    currentStyle: p,
                                    currentVelocity: f,
                                    lastIdealStyle: s,
                                    lastIdealVelocity: u
                                }), i.unreadPropStyle = null, i.startAnimationIfNecessary()
                            }))
                        }, this.state = this.defaultState()
                    }
                    return function(e, t) {
                        if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), i(t, null, [{
                        key: "propTypes",
                        value: {
                            defaultStyle: f.default.objectOf(f.default.number),
                            style: f.default.objectOf(f.default.oneOfType([f.default.number, f.default.object])).isRequired,
                            children: f.default.func.isRequired,
                            onRest: f.default.func
                        },
                        enumerable: !0
                    }]), t.prototype.defaultState = function() {
                        var e = this.props,
                            t = e.defaultStyle,
                            r = e.style,
                            n = t || s.default(r),
                            i = a.default(n);
                        return {
                            currentStyle: n,
                            currentVelocity: i,
                            lastIdealStyle: n,
                            lastIdealVelocity: i
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.prevTime = c.default(), this.startAnimationIfNecessary()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
                    }, t.prototype.componentWillUnmount = function() {
                        null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
                    }, t.prototype.render = function() {
                        var e = this.props.children(this.state.currentStyle);
                        return e && p.default.Children.only(e)
                    }, t
                }(p.default.Component);
            t.default = h, e.exports = t.default
        },
        "7Xug": (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                i = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }();

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = o(r("XwoM")),
                s = o(r("vmhH")),
                l = o(r("RU0+")),
                c = o(r("7k4P")),
                u = o(r("0xii")),
                d = o(r("KDEh")),
                p = o(r("DTvD")),
                f = o(r("aWzz")),
                m = 1e3 / 60;
            var h = function(e) {
                function t(r) {
                    var i = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = i.state, r = t.currentStyles, o = t.currentVelocities, a = t.lastIdealStyles, s = t.lastIdealVelocities, l = !1, c = 0; c < e.length; c++) {
                            var u = e[c],
                                d = !1;
                            for (var p in u)
                                if (Object.prototype.hasOwnProperty.call(u, p)) {
                                    var f = u[p];
                                    "number" === typeof f && (d || (d = !0, l = !0, r[c] = n({}, r[c]), o[c] = n({}, o[c]), a[c] = n({}, a[c]), s[c] = n({}, s[c])), r[c][p] = f, o[c][p] = 0, a[c][p] = f, s[c][p] = 0)
                                }
                        }
                        l && i.setState({
                            currentStyles: r,
                            currentVelocities: o,
                            lastIdealStyles: a,
                            lastIdealVelocities: s
                        })
                    }, this.startAnimationIfNecessary = function() {
                        i.animationID = u.default((function(e) {
                            var t = i.props.styles(i.state.lastIdealStyles);
                            if (function(e, t, r) {
                                    for (var n = 0; n < e.length; n++)
                                        if (!d.default(e[n], t[n], r[n])) return !1;
                                    return !0
                                }(i.state.currentStyles, t, i.state.currentVelocities)) return i.animationID = null, void(i.accumulatedTime = 0);
                            var r = e || c.default(),
                                n = r - i.prevTime;
                            if (i.prevTime = r, i.accumulatedTime = i.accumulatedTime + n, i.accumulatedTime > 10 * m && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
                            for (var o = (i.accumulatedTime - Math.floor(i.accumulatedTime / m) * m) / m, a = Math.floor(i.accumulatedTime / m), s = [], u = [], p = [], f = [], h = 0; h < t.length; h++) {
                                var b = t[h],
                                    g = {},
                                    v = {},
                                    y = {},
                                    x = {};
                                for (var w in b)
                                    if (Object.prototype.hasOwnProperty.call(b, w)) {
                                        var k = b[w];
                                        if ("number" === typeof k) g[w] = k, v[w] = 0, y[w] = k, x[w] = 0;
                                        else {
                                            for (var S = i.state.lastIdealStyles[h][w], B = i.state.lastIdealVelocities[h][w], _ = 0; _ < a; _++) {
                                                var A = l.default(m / 1e3, S, B, k.val, k.stiffness, k.damping, k.precision);
                                                S = A[0], B = A[1]
                                            }
                                            var U = l.default(m / 1e3, S, B, k.val, k.stiffness, k.damping, k.precision),
                                                T = U[0],
                                                C = U[1];
                                            g[w] = S + (T - S) * o, v[w] = B + (C - B) * o, y[w] = S, x[w] = B
                                        }
                                    }
                                p[h] = g, f[h] = v, s[h] = y, u[h] = x
                            }
                            i.animationID = null, i.accumulatedTime -= a * m, i.setState({
                                currentStyles: p,
                                currentVelocities: f,
                                lastIdealStyles: s,
                                lastIdealVelocities: u
                            }), i.unreadPropStyles = null, i.startAnimationIfNecessary()
                        }))
                    }, this.state = this.defaultState()
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), i(t, null, [{
                    key: "propTypes",
                    value: {
                        defaultStyles: f.default.arrayOf(f.default.objectOf(f.default.number)),
                        styles: f.default.func.isRequired,
                        children: f.default.func.isRequired
                    },
                    enumerable: !0
                }]), t.prototype.defaultState = function() {
                    var e = this.props,
                        t = e.defaultStyles,
                        r = e.styles,
                        n = t || r().map(s.default),
                        i = n.map((function(e) {
                            return a.default(e)
                        }));
                    return {
                        currentStyles: n,
                        currentVelocities: i,
                        lastIdealStyles: n,
                        lastIdealVelocities: i
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = c.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    null != this.animationID && (u.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = this.props.children(this.state.currentStyles);
                    return e && p.default.Children.only(e)
                }, t
            }(p.default.Component);
            t.default = h, e.exports = t.default
        },
        "9RcZ": (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                },
                i = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var n = t[r];
                            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                        }
                    }
                    return function(t, r, n) {
                        return r && e(t.prototype, r), n && e(t, n), t
                    }
                }();

            function o(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = o(r("XwoM")),
                s = o(r("vmhH")),
                l = o(r("RU0+")),
                c = o(r("F6G4")),
                u = o(r("7k4P")),
                d = o(r("0xii")),
                p = o(r("KDEh")),
                f = o(r("DTvD")),
                m = o(r("aWzz")),
                h = 1e3 / 60;

            function b(e, t, r) {
                var n = t;
                return null == n ? e.map((function(e, t) {
                    return {
                        key: e.key,
                        data: e.data,
                        style: r[t]
                    }
                })) : e.map((function(e, t) {
                    for (var i = 0; i < n.length; i++)
                        if (n[i].key === e.key) return {
                            key: n[i].key,
                            data: n[i].data,
                            style: r[t]
                        };
                    return {
                        key: e.key,
                        data: e.data,
                        style: r[t]
                    }
                }))
            }

            function g(e, t, r, n, i, o, s, l, u) {
                for (var d = c.default(n, i, (function(e, n) {
                        var i = t(n);
                        return null == i || p.default(o[e], i, s[e]) ? (r({
                            key: n.key,
                            data: n.data
                        }), null) : {
                            key: n.key,
                            data: n.data,
                            style: i
                        }
                    })), f = [], m = [], h = [], b = [], g = 0; g < d.length; g++) {
                    for (var v = d[g], y = null, x = 0; x < n.length; x++)
                        if (n[x].key === v.key) {
                            y = x;
                            break
                        }
                    if (null == y) {
                        var w = e(v);
                        f[g] = w, h[g] = w;
                        var k = a.default(v.style);
                        m[g] = k, b[g] = k
                    } else f[g] = o[y], h[g] = l[y], m[g] = s[y], b[g] = u[y]
                }
                return [d, f, m, h, b]
            }
            var v = function(e) {
                function t(r) {
                    var i = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = g(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, e, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), r = t[0], o = t[1], a = t[2], s = t[3], l = t[4], c = 0; c < e.length; c++) {
                            var u = e[c].style,
                                d = !1;
                            for (var p in u)
                                if (Object.prototype.hasOwnProperty.call(u, p)) {
                                    var f = u[p];
                                    "number" === typeof f && (d || (d = !0, o[c] = n({}, o[c]), a[c] = n({}, a[c]), s[c] = n({}, s[c]), l[c] = n({}, l[c]), r[c] = {
                                        key: r[c].key,
                                        data: r[c].data,
                                        style: n({}, r[c].style)
                                    }), o[c][p] = f, a[c][p] = 0, s[c][p] = f, l[c][p] = 0, r[c].style[p] = f)
                                }
                        }
                        i.setState({
                            currentStyles: o,
                            currentVelocities: a,
                            mergedPropsStyles: r,
                            lastIdealStyles: s,
                            lastIdealVelocities: l
                        })
                    }, this.startAnimationIfNecessary = function() {
                        i.unmounting || (i.animationID = d.default((function(e) {
                            if (!i.unmounting) {
                                var t = i.props.styles,
                                    r = "function" === typeof t ? t(b(i.state.mergedPropsStyles, i.unreadPropStyles, i.state.lastIdealStyles)) : t;
                                if (function(e, t, r, n) {
                                        if (n.length !== t.length) return !1;
                                        for (var i = 0; i < n.length; i++)
                                            if (n[i].key !== t[i].key) return !1;
                                        for (i = 0; i < n.length; i++)
                                            if (!p.default(e[i], t[i].style, r[i])) return !1;
                                        return !0
                                    }(i.state.currentStyles, r, i.state.currentVelocities, i.state.mergedPropsStyles)) return i.animationID = null, void(i.accumulatedTime = 0);
                                var n = e || u.default(),
                                    o = n - i.prevTime;
                                if (i.prevTime = n, i.accumulatedTime = i.accumulatedTime + o, i.accumulatedTime > 10 * h && (i.accumulatedTime = 0), 0 === i.accumulatedTime) return i.animationID = null, void i.startAnimationIfNecessary();
                                for (var a = (i.accumulatedTime - Math.floor(i.accumulatedTime / h) * h) / h, s = Math.floor(i.accumulatedTime / h), c = g(i.props.willEnter, i.props.willLeave, i.props.didLeave, i.state.mergedPropsStyles, r, i.state.currentStyles, i.state.currentVelocities, i.state.lastIdealStyles, i.state.lastIdealVelocities), d = c[0], f = c[1], m = c[2], v = c[3], y = c[4], x = 0; x < d.length; x++) {
                                    var w = d[x].style,
                                        k = {},
                                        S = {},
                                        B = {},
                                        _ = {};
                                    for (var A in w)
                                        if (Object.prototype.hasOwnProperty.call(w, A)) {
                                            var U = w[A];
                                            if ("number" === typeof U) k[A] = U, S[A] = 0, B[A] = U, _[A] = 0;
                                            else {
                                                for (var T = v[x][A], C = y[x][A], E = 0; E < s; E++) {
                                                    var O = l.default(h / 1e3, T, C, U.val, U.stiffness, U.damping, U.precision);
                                                    T = O[0], C = O[1]
                                                }
                                                var I = l.default(h / 1e3, T, C, U.val, U.stiffness, U.damping, U.precision),
                                                    D = I[0],
                                                    P = I[1];
                                                k[A] = T + (D - T) * a, S[A] = C + (P - C) * a, B[A] = T, _[A] = C
                                            }
                                        }
                                    v[x] = B, y[x] = _, f[x] = k, m[x] = S
                                }
                                i.animationID = null, i.accumulatedTime -= s * h, i.setState({
                                    currentStyles: f,
                                    currentVelocities: m,
                                    lastIdealStyles: v,
                                    lastIdealVelocities: y,
                                    mergedPropsStyles: d
                                }), i.unreadPropStyles = null, i.startAnimationIfNecessary()
                            }
                        })))
                    }, this.state = this.defaultState()
                }
                return function(e, t) {
                    if ("function" !== typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), i(t, null, [{
                    key: "propTypes",
                    value: {
                        defaultStyles: m.default.arrayOf(m.default.shape({
                            key: m.default.string.isRequired,
                            data: m.default.any,
                            style: m.default.objectOf(m.default.number).isRequired
                        })),
                        styles: m.default.oneOfType([m.default.func, m.default.arrayOf(m.default.shape({
                            key: m.default.string.isRequired,
                            data: m.default.any,
                            style: m.default.objectOf(m.default.oneOfType([m.default.number, m.default.object])).isRequired
                        }))]).isRequired,
                        children: m.default.func.isRequired,
                        willEnter: m.default.func,
                        willLeave: m.default.func,
                        didLeave: m.default.func
                    },
                    enumerable: !0
                }, {
                    key: "defaultProps",
                    value: {
                        willEnter: function(e) {
                            return s.default(e.style)
                        },
                        willLeave: function() {
                            return null
                        },
                        didLeave: function() {}
                    },
                    enumerable: !0
                }]), t.prototype.defaultState = function() {
                    var e = this.props,
                        t = e.defaultStyles,
                        r = e.styles,
                        n = e.willEnter,
                        i = e.willLeave,
                        o = e.didLeave,
                        l = "function" === typeof r ? r(t) : r,
                        c = void 0;
                    c = null == t ? l : t.map((function(e) {
                        for (var t = 0; t < l.length; t++)
                            if (l[t].key === e.key) return l[t];
                        return e
                    }));
                    var u = null == t ? l.map((function(e) {
                            return s.default(e.style)
                        })) : t.map((function(e) {
                            return s.default(e.style)
                        })),
                        d = null == t ? l.map((function(e) {
                            return a.default(e.style)
                        })) : t.map((function(e) {
                            return a.default(e.style)
                        })),
                        p = g(n, i, o, c, l, u, d, u, d),
                        f = p[0];
                    return {
                        currentStyles: p[1],
                        currentVelocities: p[2],
                        lastIdealStyles: p[3],
                        lastIdealVelocities: p[4],
                        mergedPropsStyles: f
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = u.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
                    var t = e.styles;
                    this.unreadPropStyles = "function" === typeof t ? t(b(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    this.unmounting = !0, null != this.animationID && (d.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = b(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
                        t = this.props.children(e);
                    return t && f.default.Children.only(t)
                }, t
            }(f.default.Component);
            t.default = v, e.exports = t.default
        },
        XwoM: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = 0);
                return t
            }, e.exports = t.default
        },
        F6G4: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, r) {
                for (var n = {}, i = 0; i < e.length; i++) n[e[i].key] = i;
                var o = {};
                for (i = 0; i < t.length; i++) o[t[i].key] = i;
                var a = [];
                for (i = 0; i < t.length; i++) a[i] = t[i];
                for (i = 0; i < e.length; i++)
                    if (!Object.prototype.hasOwnProperty.call(o, e[i].key)) {
                        var s = r(i, e[i]);
                        null != s && a.push(s)
                    }
                return a.sort((function(e, r) {
                    var i = o[e.key],
                        a = o[r.key],
                        s = n[e.key],
                        l = n[r.key];
                    if (null != i && null != a) return o[e.key] - o[r.key];
                    if (null != s && null != l) return n[e.key] - n[r.key];
                    if (null != i) {
                        for (var c = 0; c < t.length; c++) {
                            var u = t[c].key;
                            if (Object.prototype.hasOwnProperty.call(n, u)) {
                                if (i < o[u] && l > n[u]) return -1;
                                if (i > o[u] && l < n[u]) return 1
                            }
                        }
                        return 1
                    }
                    for (c = 0; c < t.length; c++) {
                        u = t[c].key;
                        if (Object.prototype.hasOwnProperty.call(n, u)) {
                            if (a < o[u] && s > n[u]) return 1;
                            if (a > o[u] && s < n[u]) return -1
                        }
                    }
                    return -1
                }))
            }, e.exports = t.default
        },
        "5p+V": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = {
                noWobble: {
                    stiffness: 170,
                    damping: 26
                },
                gentle: {
                    stiffness: 120,
                    damping: 14
                },
                wobbly: {
                    stiffness: 180,
                    damping: 12
                },
                stiff: {
                    stiffness: 210,
                    damping: 20
                }
            }, e.exports = t.default
        },
        Enqy: (e, t, r) => {
            "use strict";

            function n(e) {
                return e && e.__esModule ? e.default : e
            }
            n(r("Z6fc")), n(r("7Xug"));
            var i = r("9RcZ");
            t.S6 = n(i);
            var o = r("a1xD");
            t.oz = n(o);
            var a = r("5p+V");
            t.v4 = n(a), n(r("vmhH")), n(r("xB03"))
        },
        xB03: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function() {
                0
            };
            e.exports = t.default
        },
        KDEh: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, r) {
                for (var n in t)
                    if (Object.prototype.hasOwnProperty.call(t, n)) {
                        if (0 !== r[n]) return !1;
                        var i = "number" === typeof t[n] ? t[n] : t[n].val;
                        if (e[n] !== i) return !1
                    }
                return !0
            }, e.exports = t.default
        },
        a1xD: (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var n = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                }
                return e
            };
            t.default = function(e, t) {
                return n({}, s, t, {
                    val: e
                })
            };
            var i, o = r("5p+V"),
                a = (i = o) && i.__esModule ? i : {
                    default: i
                },
                s = n({}, a.default.noWobble, {
                    precision: .01
                });
            e.exports = t.default
        },
        "RU0+": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, n, i, o, a, s) {
                var l = n + (-o * (t - i) + -a * n) * e,
                    c = t + l * e;
                if (Math.abs(l) < s && Math.abs(c - i) < s) return r[0] = i, r[1] = 0, r;
                return r[0] = c, r[1] = l, r
            };
            var r = [0, 0];
            e.exports = t.default
        },
        vmhH: (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e) {
                var t = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[r] = "number" === typeof e[r] ? e[r] : e[r].val);
                return t
            }, e.exports = t.default
        },
        "7k4P": function(e, t, r) {
            var n = r("F63i");
            (function() {
                var t, r, i;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof n && null !== n && n.hrtime ? (e.exports = function() {
                    return (t() - i) / 1e6
                }, r = n.hrtime, i = (t = function() {
                    var e;
                    return 1e9 * (e = r())[0] + e[1]
                })()) : Date.now ? (e.exports = function() {
                    return Date.now() - i
                }, i = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - i
                }, i = (new Date).getTime())
            }).call(this)
        },
        "6p3b": (e, t, r) => {
            "use strict";
            var n, i = r("fALc"),
                o = (n = i) && n.__esModule ? n : {
                    default: n
                };
            var a = -1;

            function s(e, t) {
                if (e === a) return o.default.transform(t)
            }
            t.Ay = s
        },
        DPeK: (e, t, r) => {
            "use strict";

            function n() {
                return n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }
            r.d(t, {
                A: () => n
            })
        },
        aiFg: (e, t, r) => {
            "use strict";

            function n(e, t) {
                if (null == e) return {};
                var r, n, i = {},
                    o = Object.keys(e);
                for (n = 0; n < o.length; n++) r = o[n], t.indexOf(r) >= 0 || (i[r] = e[r]);
                return i
            }
            r.d(t, {
                A: () => n
            })
        }
    }
]);
//# debugId=b5bb267e-0ab6-5490-8c6e-8d248bcc1d1d