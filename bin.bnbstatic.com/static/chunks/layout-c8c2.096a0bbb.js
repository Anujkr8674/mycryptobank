! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "315e9376-27fa-5ae5-91e7-94d26440cbef")
    } catch (e) {}
}();
(self.webpackChunkmuses_ui = self.webpackChunkmuses_ui || []).push([
    [608], {
        "3Bw6": (e, t, r) => {
            "use strict";
            var o = r("mkfS").Y,
                n = window.matchMedia;

            function i(e, t, r) {
                var i, a = this;

                function l(e) {
                    a.matches = e.matches, a.media = e.media
                }
                n && !r && (i = n.call(window, e)), i ? (this.matches = i.matches, this.media = i.media, i.addListener(l)) : (this.matches = o(e, t), this.media = e), this.addListener = function(e) {
                    i && i.addListener(e)
                }, this.removeListener = function(e) {
                    i && i.removeListener(e)
                }, this.dispose = function() {
                    i && i.removeListener(l)
                }
            }
            e.exports = function(e, t, r) {
                return new i(e, t, r)
            }
        },
        na7I: (e, t) => {
            "use strict";
            t.A = void 0;
            var r = function(e, t) {
                var r = null === t || void 0 === t ? void 0 : t.origin,
                    o = function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object.keys(t).reduce((function(e, r) {
                            return e.replace("%".concat(r, "%"), t[r])
                        }), e || "")
                    }(e, t);
                return (null === r || void 0 === r ? void 0 : r.includes("localhost")) ? o.replace("https://www.", r) : o
            };
            t.A = r
        },
        ZUen: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => yo
            });
            var o = r("jg1C"),
                n = r("DTvD"),
                i = r.n(n),
                a = r("BK9r"),
                l = r("W9hJ"),
                s = r("OHGK"),
                u = r("06hb");
            const c = function(e) {
                var t = new WeakMap;
                return function(r) {
                    if (t.has(r)) return t.get(r);
                    var o = e(r);
                    return t.set(r, o), o
                }
            };
            r("oXkQ");

            function p(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, o)
                }
                return r
            }
            var d = function(e, t) {
                    return "function" === typeof t ? t(e) : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? p(r, !0).forEach((function(t) {
                                (0, s.A)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : p(r).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, e, {}, t)
                },
                f = c((function(e) {
                    return c((function(t) {
                        return d(e, t)
                    }))
                })),
                g = function(e) {
                    return (0, n.createElement)(u.Dx.Consumer, null, (function(t) {
                        return e.theme !== t && (t = f(t)(e.theme)), (0, n.createElement)(u.Dx.Provider, {
                            value: t
                        }, e.children)
                    }))
                };
            const b = n.createContext("ltr");
            const h = function(e) {
                var t = e.children,
                    r = e.dir,
                    o = e.theme;
                return n.createElement(b.Consumer, null, (function(e) {
                    return n.createElement(b.Provider, {
                        value: r || e
                    }, n.createElement(g, {
                        theme: o
                    }, t))
                }))
            };
            var x = r("BK7R"),
                m = r("QUKP");
            var v = {
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
                y = {
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
                w = (0, x.A)({
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
                }, y),
                S = function(e) {
                    return Object.keys(v).reduce((function(t, r) {
                        return t[r] = (0, x.A)({}, e, v[r]), t
                    }), {})
                },
                k = (0, x.A)({
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
                }, y);
            const C = {
                    rangePicker: {
                        default: w,
                        underline: (0, x.A)({}, S({
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
                        outline: (0, x.A)({}, S({
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
                        phantom: (0, x.A)({}, S({
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
                            md: (0, m.A)((0, x.A)({}, k), {
                                height: "40px"
                            }),
                            lg: (0, m.A)((0, x.A)({}, k), {
                                height: "48px"
                            })
                        }
                    }
                },
                B = {
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
            var _ = B.text,
                z = _.subtitle1,
                A = _.caption,
                E = _.body2,
                F = _.body1,
                I = {
                    variant: "searchDropdown.default",
                    " .bn-sdd-optionGroupLabel": {
                        px: "sm",
                        py: "xxs",
                        height: "28px"
                    },
                    ".bn-sdd-optionGroupText": (0, x.A)({}, A),
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
            const H = {
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
                    outline: I,
                    filled: I,
                    line: I,
                    clear: I,
                    normal: I,
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
                                " .bn-sdd-optionGroupText": (0, x.A)({
                                    color: "t.disabled"
                                }, F)
                            }
                        },
                        " .bn-sdd-optionGroupText": (0, x.A)({
                            color: "t.primary"
                        }, z),
                        " .bn-sdd-option-item": {
                            maxHeight: "40px"
                        },
                        " .bn-sdd-option": (0, x.A)({
                            maxHeight: "40px",
                            px: "sm"
                        }, E),
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
            var j = {
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
            const D = {
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
                            primary: (0, m.A)((0, x.A)({}, j), {
                                "&.active": {
                                    bg: "badgeYellowBg",
                                    color: "t.yellow"
                                }
                            }),
                            secondary: (0, m.A)((0, x.A)({}, j), {
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
            var O = {
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
            const T = {
                textField: O,
                textFieldV2: (0, m.A)((0, x.A)({}, O), {
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
            var W = {
                borderRadius: "default",
                boxShadow: "tooltip",
                bg: "toast.bg",
                alignItems: "flex-start",
                justifyContent: "space-between",
                maxWidth: ["343px", "360px"],
                minWidth: "288px",
                minHeight: "56px"
            };
            const P = {
                toast: {
                    default: (0, m.A)((0, x.A)({}, W), {
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
                    reset: (0, m.A)((0, x.A)({}, W), {
                        ".bn-notification-body-wrapper": {
                            maxHeight: "unset",
                            ".bn-notification-msg-wrapper": {
                                maxHeight: "unset"
                            }
                        }
                    })
                }
            };
            var R = {
                px: "md",
                bg: "modal.bg",
                position: "relative",
                flexDirection: "column"
            };
            const L = {
                modal: {
                    default: (0, m.A)((0, x.A)({}, R), {
                        borderRadius: "large"
                    }),
                    drawer: (0, m.A)((0, x.A)({}, R), {
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
            var M = {
                    minWidth: "343px",
                    height: "72px",
                    p: "ls",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                },
                N = {
                    minWidth: "343px",
                    height: "40px",
                    p: "xxs",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                };
            const V = {
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
                                waiting: (0, x.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "s",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, x.A)({
                                    variant: "uploader.click.default"
                                }, M),
                                error: (0, x.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, M),
                                loading: (0, x.A)({
                                    variant: "uploader.click.default"
                                }, M),
                                pending: (0, x.A)({
                                    variant: "uploader.click.default"
                                }, M)
                            },
                            small: {
                                waiting: (0, x.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "xxs",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, x.A)({
                                    variant: "uploader.click.default"
                                }, N),
                                error: (0, x.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, N),
                                loading: (0, x.A)({
                                    variant: "uploader.click.default"
                                }, N),
                                pending: (0, x.A)({
                                    variant: "uploader.click.default"
                                }, N)
                            }
                        }
                    }
                },
                Y = (0, x.A)({}, V, {
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
                }, T, {
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
                }, C, {
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
                }, D, B, {
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
                }, P, {
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
                }, H, {
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
                }, L, {
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
                U = (0, x.A)({
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
                    fontSizes: (0, m.A)((0, x.A)({}, [12, 14, 16, 20, 24, 28, 32]), {
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
                    space: (0, m.A)((0, x.A)({}, [0, 4, 8, 16, 24, 32, 48, 64, 80]), {
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
                }, Y);
            var G = "#FFFFFF",
                q = "#FAFAFA",
                Q = "#F5F5F5",
                K = "#EAECEF",
                X = "#D8DCE1",
                J = "#B7BDC6",
                Z = "#929AA5",
                $ = "#848E9C",
                ee = "#707A8A",
                te = "#5E6673",
                re = "#474D57",
                oe = "#2B3139",
                ne = "#1E2329",
                ie = "#181A20",
                ae = "#0B0E11",
                le = "#FFFDE6",
                se = "#FEF6D8",
                ue = "#FFEF87",
                ce = "#FCD535",
                pe = "#F0B90B",
                de = "#C99400",
                fe = "#A37200",
                ge = "#8D5F02",
                be = "#6A4403",
                he = "#3C2601",
                xe = "#281A00",
                me = "#328DFD",
                ve = "#F2FFF7",
                ye = "#E6FFF1",
                we = "#32D993",
                Se = "#0ECB81",
                ke = "#03A66D",
                Ce = "#102821",
                Be = "#FEF6F7",
                _e = "#FEF1F2",
                ze = "#FF707E",
                Ae = "#F6465D",
                Ee = "#CF304A",
                Fe = "#35141D",
                Ie = r("VP0d"),
                He = r("tEf9"),
                je = r("veKZ"),
                De = r.n(je),
                Oe = r("3POh"),
                Te = r.n(Oe),
                We = r("jPI1"),
                Pe = r.n(We),
                Re = r("pL+m"),
                Le = r.n(Re),
                Me = r("H8sf"),
                Ne = r.n(Me);
            const Ve = {
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
            var Ye = ["light", "dark"],
                Ue = Te()(De()),
                Ge = function(e) {
                    return Ue({})((function(t, r) {
                        var o;
                        return t[r] = (o = r, Pe()([Le(), Ue({})((function(e, t) {
                            var r = (0, Ie.A)(t, 2),
                                n = r[0],
                                i = r[1];
                            return e[n] = i[o], e
                        }))]))(e), t
                    }))(Ye)
                },
                qe = function(e) {
                    return t = Ve[e].colors,
                        function(e) {
                            return Ne()({}, e, t)
                        };
                    var t
                },
                Qe = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Ne().apply(void 0, [{}, t].concat((0, He.A)(e)))
                    }
                },
                Ke = function(e) {
                    var t = e.palette,
                        r = e.externalColors,
                        o = e.layout;
                    return Qe([{
                        colors: r(t)
                    }, {
                        colors: t
                    }])(o)
                },
                Xe = "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)";
            const Je = {
                primaryGradient: {
                    light: Xe,
                    dark: Xe
                },
                grayGradient: {
                    light: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                    dark: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                }
            };
            var Ze = Ge(Je).dark,
                $e = (0, x.A)({
                    modalBg: ne,
                    popupBg: ne,
                    bg1: ie,
                    bg2: ae,
                    bg3: oe,
                    bg4: te,
                    bg5: ie,
                    bg6: ae,
                    line: re,
                    liteBg1: "#20262D",
                    liteBg2: "#191A1F",
                    t: {
                        primary: K,
                        secondary: J,
                        third: $,
                        placeholder: te,
                        disabled: te,
                        yellow: pe,
                        buy: Se,
                        sell: Ae,
                        toast: fe,
                        white: G
                    },
                    iconNormal: $,
                    alertYellowBg: xe,
                    badgeYellowBg: he,
                    outlineHover: be,
                    primaryHover: ce,
                    primary: pe,
                    toastFailBg: Fe,
                    depthSellBg: Fe,
                    sellHover: ze,
                    sell: Ae,
                    toastSuccessBg: Ce,
                    depthBuyBg: Ce,
                    buyHover: we,
                    buy: Se,
                    invBg: oe,
                    success: Se,
                    error: Ae,
                    successBg: Ce,
                    errorBg: Fe,
                    disableBg: re
                }, Ze),
                et = qe("dark")($e);
            const tt = $e;
            var rt = function(e) {
                    return (0, m.A)((0, x.A)({}, U.colors), {
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
                            selected: ee,
                            selectedRange: re,
                            disableColor: e.t.disabled,
                            shadow: ae,
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
                            availableBar: te,
                            progressBar: Q,
                            tooltipText: e.modalBg,
                            ratioButton: "#1F2124",
                            progress: G,
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
                            clearIconColor: X
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
                            infoColor: me,
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
                            flowBg: ce,
                            flowText: ne
                        },
                        advanced: {
                            downDropBg: "#313336"
                        },
                        transInputBG: e.bg3,
                        maskBg: ie,
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
                ot = (0, m.A)((0, x.A)({}, U), {
                    shadows: (0, m.A)((0, x.A)({}, U.shadows), {
                        elevation1: "0px 3px 6px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.04), inset 0px 0px 1px rgba(94, 102, 115, 0.8)",
                        elevation2: "0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",
                        elevation3: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 1px rgba(94, 102, 115, 0.9)"
                    })
                }),
                nt = Ke({
                    palette: tt,
                    externalColors: rt,
                    layout: ot
                });
            Ke({
                palette: et,
                externalColors: rt,
                layout: ot
            });
            const it = nt;
            var at = Ge(Je).light,
                lt = (0, x.A)({
                    modalBg: G,
                    popupBg: G,
                    bg1: G,
                    bg2: q,
                    bg3: Q,
                    bg4: te,
                    bg5: ie,
                    bg6: ae,
                    line: K,
                    liteBg1: G,
                    liteBg2: q,
                    t: {
                        primary: ne,
                        secondary: re,
                        third: ee,
                        placeholder: J,
                        disabled: J,
                        yellow: de,
                        buy: ke,
                        sell: Ee,
                        toast: ge,
                        white: G
                    },
                    iconNormal: Z,
                    alertYellowBg: le,
                    badgeYellowBg: se,
                    outlineHover: ue,
                    primaryHover: ce,
                    primary: pe,
                    toastFailBg: Be,
                    depthSellBg: _e,
                    sellHover: ze,
                    sell: Ae,
                    toastSuccessBg: ve,
                    depthBuyBg: ye,
                    buyHover: we,
                    buy: Se,
                    invBg: q,
                    success: Se,
                    successBg: ve,
                    error: Ae,
                    errorBg: Be,
                    disableBg: K
                }, at),
                st = qe("light")(lt);
            const ut = lt;
            var ct = function(e) {
                    return (0, m.A)((0, x.A)({}, U.colors), {
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
                            selected: pe,
                            selectedRange: ce,
                            disableColor: e.t.disabled,
                            shadow: K,
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
                            availableBar: X,
                            progressBar: oe,
                            tooltipText: e.modalBg,
                            ratioButton: G,
                            progress: $,
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
                            clearIconColor: X
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
                            infoColor: me,
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
                            flowBg: ce,
                            flowText: ne
                        },
                        advanced: {
                            downDropBg: G
                        },
                        transInputBG: e.bg3,
                        maskBg: ie,
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
                pt = (0, m.A)((0, x.A)({}, U), {
                    shadows: (0, m.A)((0, x.A)({}, U.shadows), {
                        elevation1: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                        elevation2: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                        elevation3: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                    })
                }),
                dt = Ke({
                    palette: ut,
                    externalColors: ct,
                    layout: pt
                });
            Ke({
                palette: st,
                externalColors: ct,
                layout: pt
            });
            const ft = dt,
                gt = Ne()({}, it, {
                    colors: {
                        bg1: "#0E132B",
                        bg2: "#1A1F36",
                        bg3: "#252A3F",
                        bg4: "#6E7180",
                        bg5: "#F3F3F4",
                        bg6: "#CFD0D5",
                        modalBg: "#0E132B",
                        popupBg: "#1A1F36",
                        line: "#3E4255",
                        alertBg: "#0B2032",
                        badgeBg: "#1E6169",
                        outlineHover: "#41D7CE",
                        primaryHover: "#AAEDE9",
                        primary: "#41D7CE",
                        toastFailBg: "#2C1018",
                        depthSellBg: "#2C1018",
                        sellHover: "#FF99A0",
                        toastSuccessBg: "#0B3528",
                        depthBuyBg: "#0B3528",
                        buyHover: "#82E5C6",
                        SecondaryToastbg: "#1F0D26",
                        SecondaryHover: "#A47FB2",
                        t: {
                            white: "#FFFFFF",
                            primary: "#F3F3F4",
                            disabled: "#565A6B",
                            third: "#6E7180",
                            secondary: "#CFD0D5",
                            yellow: "#3AC1B9",
                            mainColor: "#3AC1B9",
                            toast: "#AAEDE9",
                            sell: "#F6465D",
                            buy: "#2AC797"
                        }
                    },
                    text: {
                        extraHeadline: {
                            fontWeight: "bold",
                            fontSize: "56px",
                            lineHeight: "64px"
                        },
                        headline1: {
                            fontWeight: "bold",
                            fontSize: "48px",
                            lineHeight: "56px"
                        },
                        headline2: {
                            fontWeight: "bold",
                            fontSize: "40px",
                            lineHeight: "48px"
                        },
                        headline3: {
                            fontWeight: "bold",
                            fontSize: "32px",
                            lineHeight: "40px"
                        },
                        headline4: {
                            fontWeight: "bold",
                            fontSize: "28px",
                            lineHeight: "36px"
                        },
                        headline5: {
                            fontWeight: "bold",
                            fontSize: "24px",
                            lineHeight: "32px"
                        },
                        headline6: {
                            fontWeight: "medium",
                            fontSize: "20px",
                            lineHeight: "28px"
                        },
                        largeBody: {
                            fontWeight: "normal",
                            fontSize: "20px",
                            lineHeight: "28px"
                        },
                        subtitle1: {
                            fontWeight: "medium",
                            fontSize: "16px",
                            lineHeight: "24px"
                        },
                        subtitle2: {
                            fontWeight: "medium",
                            fontSize: "14px",
                            lineHeight: "20px"
                        },
                        body1: {
                            fontWeight: "normal",
                            fontSize: "16px",
                            lineHeight: "24px"
                        },
                        body2: {
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "20px"
                        },
                        captionSub: {
                            fontWeight: "medium",
                            fontSize: "12px",
                            lineHeight: "16px"
                        },
                        caption: {
                            fontWeight: "normal",
                            fontSize: "12px",
                            lineHeight: "16px"
                        },
                        largeLink: {
                            fontWeight: "bold",
                            fontSize: "20px",
                            lineHeight: "28px",
                            textDecoration: "underline"
                        },
                        linkBody: {
                            fontWeight: "medium",
                            fontSize: "14px",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        addressLink: {
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkCaption: {
                            fontWeight: "medium",
                            fontSize: "12px",
                            lineHeight: "16px",
                            textDecoration: "underline"
                        }
                    }
                }),
                bt = Ne()({}, ft, {
                    colors: {
                        bg1: "#fff",
                        bg2: "#F9F9F9",
                        bg3: "#F3F3F3",
                        bg4: "#6E7180",
                        bg5: "#1A1F36",
                        bg6: "#3E4255",
                        modalBg: "#fff",
                        popupBg: "#fff",
                        line: "#E7E7EA",
                        alertBg: "#E3F9F8",
                        badgeBg: "#AAEDE9",
                        outlineHover: "#41D7CE",
                        primaryHover: "#1E6169",
                        primary: "#41D7CE",
                        toastFailBg: "#FEF1F2",
                        depthSellBg: "#FEF1F2",
                        sellHover: "#A81E3A",
                        toastSuccessBg: "#E3F9F2",
                        depthBuyBg: "#E3F9F2",
                        buyHover: "#1C8666",
                        SecondaryToastbg: "#F4EAF8",
                        SecondaryHover: "#3E194C",
                        t: {
                            white: "#FFFFFF",
                            primary: "#1A1F36",
                            disabled: "#B7B8BF",
                            third: "#6E7180",
                            secondary: "#3E4255",
                            yellow: "#2C9191",
                            mainColor: "#2C9191",
                            toast: "#1E6169",
                            sell: "#F6465D",
                            buy: "#2AC797"
                        }
                    },
                    text: {
                        extraHeadline: {
                            fontWeight: "bold",
                            fontSize: "56px",
                            lineHeight: "64px"
                        },
                        headline1: {
                            fontWeight: "bold",
                            fontSize: "48px",
                            lineHeight: "56px"
                        },
                        headline2: {
                            fontWeight: "bold",
                            fontSize: "40px",
                            lineHeight: "48px"
                        },
                        headline3: {
                            fontWeight: "bold",
                            fontSize: "32px",
                            lineHeight: "40px"
                        },
                        headline4: {
                            fontWeight: "bold",
                            fontSize: "28px",
                            lineHeight: "36px"
                        },
                        headline5: {
                            fontWeight: "bold",
                            fontSize: "24px",
                            lineHeight: "32px"
                        },
                        headline6: {
                            fontWeight: "medium",
                            fontSize: "20px",
                            lineHeight: "28px"
                        },
                        largeBody: {
                            fontWeight: "normal",
                            fontSize: "20px",
                            lineHeight: "28px"
                        },
                        subtitle1: {
                            fontWeight: "medium",
                            fontSize: "16px",
                            lineHeight: "24px"
                        },
                        subtitle2: {
                            fontWeight: "medium",
                            fontSize: "14px",
                            lineHeight: "20px"
                        },
                        body1: {
                            fontWeight: "normal",
                            fontSize: "16px",
                            lineHeight: "24px"
                        },
                        body2: {
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "20px"
                        },
                        captionSub: {
                            fontWeight: "medium",
                            fontSize: "12px",
                            lineHeight: "16px"
                        },
                        caption: {
                            fontWeight: "normal",
                            fontSize: "12px",
                            lineHeight: "16px"
                        },
                        largeLink: {
                            fontWeight: "bold",
                            fontSize: "20px",
                            lineHeight: "28px",
                            textDecoration: "underline"
                        },
                        linkBody: {
                            fontWeight: "medium",
                            fontSize: "14px",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        addressLink: {
                            fontWeight: "normal",
                            fontSize: "14px",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkCaption: {
                            fontWeight: "medium",
                            fontSize: "12px",
                            lineHeight: "16px",
                            textDecoration: "underline"
                        }
                    }
                });
            var ht = function(e) {
                var t = e.type,
                    r = void 0 === t ? "inherit" : t,
                    o = e.children,
                    n = (0, l.PC)().websiteType;
                switch ([void 0 === n ? "base" : n, r].join("-")) {
                    case "base-dark":
                        return i().createElement(h, {
                            theme: it,
                            children: o
                        });
                    case "base-light":
                        return i().createElement(h, {
                            theme: ft,
                            children: o
                        });
                    case "sg-dark":
                        return i().createElement(h, {
                            theme: gt,
                            children: o
                        });
                    case "sg-light":
                        return i().createElement(h, {
                            theme: bt,
                            children: o
                        });
                    default:
                        return o
                }
            };
            const xt = i().memo(ht);
            var mt = r("ezuS"),
                vt = r("gZfF"),
                yt = r("Enqy"),
                wt = function() {
                    if (Object.keys) return Object.keys;
                    var e = Object.prototype.hasOwnProperty,
                        t = !{
                            toString: null
                        }.propertyIsEnumerable("toString"),
                        r = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        o = r.length;
                    return function(n) {
                        if ("object" !== typeof n && "function" !== typeof n || null === n) throw new TypeError("Object.keys called on non-object");
                        var i = [];
                        for (var a in n) e.call(n, a) && i.push(a);
                        if (t)
                            for (var l = 0; l < o; l++) e.call(n, r[l]) && i.push(r[l]);
                        return i
                    }
                }(),
                St = function() {};
            const kt = i().createContext({
                enqueueNotification: St,
                closeNotification: St
            });

            function Ct() {
                return Ct = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                }, Ct.apply(this, arguments)
            }

            function Bt() {
                return Ct.apply(this, arguments)
            }
            var _t = r("DPeK");
            var zt = r("hTvQ"),
                At = r.n(zt),
                Et = ["as"];
            var Ft = i().useLayoutEffect,
                It = function(e, t) {
                    "function" === typeof e ? e(t) : e && (e.current = t)
                },
                Ht = i().forwardRef((function(e, t) {
                    var r = e.children,
                        o = e.container,
                        n = e.disablePortal,
                        a = void 0 !== n && n,
                        l = (0, Ie.A)(i().useState(), 2),
                        s = l[0],
                        u = l[1];
                    return Ft((function() {
                        a || u(function(e) {
                            return e = "function" === typeof e ? e() : e, At().findDOMNode(e)
                        }(o) || document.body)
                    }), [o]), Ft((function() {
                        if (s && !a) return It(t, s),
                            function() {
                                It(t, null)
                            }
                    }), [t, s, a]), a ? i().isValidElement(r) ? i().cloneElement(r, {
                        ref: t
                    }) : r : s ? At().createPortal(r, s) : null
                }));
            const jt = Ht;
            var Dt = function(e) {
                var t = (void 0 === e ? {} : e).multiSources,
                    r = {};

                function o(e) {
                    r.value = e, r.set && r.set.current && r.set.current(e)
                }
                return {
                    Source: function(e) {
                        var o = e.children,
                            n = i().useState(null),
                            a = n[0],
                            l = n[1];
                        return i().useLayoutEffect((function() {
                            var e, o = {
                                current: l
                            };
                            return r.set && (e = r.set, t || r.set.current(null)), r.set = o, l(r.value),
                                function() {
                                    o.current = null, r.set = null, e && e.current && (r.set = e, r.set.current(r.value))
                                }
                        }), []), a ? At().createPortal(o, a) : null
                    },
                    Target: function(e) {
                        var t = e.as,
                            r = void 0 === t ? "div" : t,
                            n = function(e, t) {
                                if (null == e) return {};
                                var r, o, n = {},
                                    i = Object.keys(e);
                                for (o = 0; o < i.length; o++) r = i[o], t.indexOf(r) >= 0 || (n[r] = e[r]);
                                return n
                            }(e, Et);
                        return i().createElement(r, (0, _t.A)({
                            ref: o
                        }, n))
                    },
                    useTargetRef: function() {
                        return o
                    }
                }
            }();
            (0, n.createContext)(Dt.Source);
            const Ot = jt;
            var Tt = r("LCuF"),
                Wt = function() {},
                Pt = (0, n.forwardRef)((function(e, t) {
                    return Wt(), i().createElement(Tt.A, Bt({
                        ref: t
                    }, e, {
                        __css: (0, x.A)({
                            display: "flex"
                        }, e.__css || {})
                    }))
                }));
            Pt.displayName = "Flex";
            const Rt = Pt;
            var Lt = {
                default: "stretch",
                left: "flex-start",
                right: "flex-end",
                center: "center"
            };
            const Mt = i().memo((function(e) {
                var t = e.anchorOrigin,
                    r = e.position,
                    o = e.enablePortal,
                    n = e.container,
                    a = (0, vt.A)(e, ["anchorOrigin", "position", "enablePortal", "container"]),
                    l = {
                        position: r,
                        zIndex: "notification",
                        alignItems: Lt[t.horizontal] || Lt.default
                    };
                return "top" === t.vertical ? l.top = 12 : l.bottom = 12, "left" === t.horizontal ? l.left = 12 : "center" === t.horizontal ? (l.left = "50%", l.transform = "translateX(-50%)") : l.right = 12, o || n ? i().createElement(Ot, {
                    container: n
                }, i().createElement(Rt, Bt({
                    className: "UikitWidget_NotificationContainer",
                    flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                }, a, {
                    __css: l
                }))) : i().createElement(Rt, Bt({
                    className: "UikitWidget_NotificationContainer",
                    flexDirection: "top" === t.vertical ? "column-reverse" : "column"
                }, a, {
                    __css: l
                }))
            }));
            var Nt = function() {},
                Vt = (0, n.forwardRef)((function(e, t) {
                    return Nt(), i().createElement(Tt.A, Bt({
                        ref: t,
                        "data-bn-type": "text",
                        tx: "text"
                    }, e))
                }));
            Vt.displayName = "Text";
            const Yt = Vt;
            var Ut = function(e) {
                var t = e.size,
                    r = e.sx,
                    o = e.color,
                    n = void 0 === o ? "currentColor" : o,
                    a = (0, vt.A)(e, ["size", "sx", "color"]),
                    l = Tt.A;
                return i().createElement(l, Bt({
                    as: "svg",
                    xmlns: "http://www.w3.org/2000/svg",
                    variant: "icon",
                    sx: (0, x.A)({
                        fill: n
                    }, r),
                    __css: {
                        color: n,
                        width: t,
                        height: t,
                        fontSize: t
                    }
                }, a))
            };
            Ut.defaultProps = {
                size: 24
            }, Ut.displayName = "SVG";
            const Gt = Ut;
            const qt = function(e) {
                return i().createElement(Gt, Bt({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            };
            var Qt = {
                    info: function(e) {
                        return i().createElement(Gt, Bt({
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            fill: "none"
                        }, e), i().createElement("path", {
                            d: "M11.989 22H12c5.527 0 10-4.473 10-10 0-5.528-4.473-10-10-10-5.516 0-9.989 4.472-10 9.989-.011 5.527 4.461 10 9.989 10.011zM10.99 5.016h2.018v2.007h-2.018V5.016zm0 4.633h2.018v9.346h-2.018V9.65z",
                            fill: "currentColor"
                        }))
                    },
                    error: function(e) {
                        return i().createElement(Gt, Bt({
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            fill: "none"
                        }, e), i().createElement("path", {
                            d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.326 13.909l-1.429 1.417L12 13.429l-3.897 3.897-1.429-1.417 3.909-3.898-3.909-3.908 1.429-1.417L12 10.583l3.897-3.897 1.429 1.417-3.897 3.908 3.897 3.898z",
                            fill: "currentColor"
                        }))
                    },
                    warning: function(e) {
                        return i().createElement(Gt, Bt({
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            fill: "none"
                        }, e), i().createElement("path", {
                            d: "M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z",
                            fill: "currentColor"
                        }))
                    },
                    success: function(e) {
                        return i().createElement(Gt, Bt({
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            fill: "none"
                        }, e), i().createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z",
                            fill: "currentColor"
                        }))
                    },
                    tips: function(e) {
                        return i().createElement(Gt, Bt({
                            width: "1em",
                            height: "1em",
                            viewBox: "0 0 24 24",
                            fill: "currentColor"
                        }, e), i().createElement("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M12 4.791a.723.723 0 00.716-.729V2.729c0-.402-.32-.729-.716-.729a.723.723 0 00-.716.73v1.332c0 .402.32.73.716.73zM6.884 6.51a.713.713 0 01-.716.72.733.733 0 01-.508-.2l-.936-.94a.713.713 0 01-.212-.515c0-.197.076-.385.212-.515a.734.734 0 011.016 0l.932.934c.136.13.212.319.212.516zm4.436 14.032h1.336c.396 0 .716.326.716.729 0 .402-.32.729-.716.729h-1.332a.723.723 0 01-.716-.73c0-.38.32-.707.712-.729zM2.716 10.268h1.332c.388 0 .716.335.716.73 0 .401-.32.728-.716.728H2.716A.723.723 0 012 10.998c0-.394.328-.73.716-.73zm16.776-4.694a.696.696 0 00-.212-.511.701.701 0 00-1.02 0l-.932.934a.713.713 0 00-.212.516c0 .197.076.386.212.515.14.135.324.202.508.202a.719.719 0 00.508-.206l.932-.934a.73.73 0 00.216-.516zm.46 4.694h1.332c.388 0 .716.335.716.73 0 .401-.32.728-.716.728h-1.332a.723.723 0 01-.716-.729c0-.402.32-.73.716-.73zm-5.964 8.294h-3.976a.723.723 0 00-.716.73c0 .402.32.729.716.729h3.976a.723.723 0 00.716-.73c0-.402-.32-.729-.716-.729zM12 5.981c1.612 0 3.124.625 4.26 1.76A5.984 5.984 0 0118.024 12c0 1.61-.628 3.122-1.764 4.258a5.982 5.982 0 01-4.26 1.76 5.982 5.982 0 01-4.26-1.76A5.984 5.984 0 015.976 12c0-1.61.628-3.123 1.764-4.258A5.982 5.982 0 0112 5.982z",
                            fill: "currentColor"
                        }))
                    }
                },
                Kt = (0, n.forwardRef)((function(e, t) {
                    var r = e.message,
                        o = e.header,
                        a = e.footer,
                        l = e.icon,
                        s = e.variant,
                        u = void 0 === s ? "tips" : s,
                        c = e.closable,
                        p = void 0 !== c && c,
                        d = e.showIcon,
                        f = void 0 === d || d,
                        g = e.onClose,
                        b = e.progress,
                        h = (e.showProgress, (0, vt.A)(e, ["message", "header", "footer", "icon", "variant", "closable", "showIcon", "onClose", "progress", "showProgress"])),
                        m = Qt[u],
                        v = "toast.".concat(u),
                        y = (0, n.isValidElement)(l) ? i().cloneElement(l, (0, x.A)({
                            size: 20,
                            display: "block"
                        }, l.props), []) : m ? i().createElement(m, {
                            size: 20,
                            display: "block"
                        }) : null;
                    return i().createElement(Rt, Bt({
                        ref: t,
                        sx: {
                            position: "relative",
                            overflow: "hidden"
                        },
                        tx: "toast",
                        variant: u
                    }, h), i().createElement(Tt.A, {
                        sx: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "".concat(b, "%"),
                            height: "3px",
                            bg: "primary"
                        }
                    }), i().createElement(Rt, {
                        alignItems: "flex-start",
                        __css: {
                            width: "100%"
                        }
                    }, f ? i().createElement(Tt.A, {
                        color: v,
                        __css: {
                            mr: "ls",
                            pt: "2px",
                            flexShrink: 0
                        }
                    }, y) : null, i().createElement(Rt, {
                        className: "bn-notification-body-wrapper",
                        __css: {
                            maxHeight: "146px",
                            flexDirection: "column",
                            width: "100%"
                        }
                    }, o ? i().createElement(Yt, {
                        sx: {
                            color: "t.primary",
                            mb: "2px",
                            flexShrink: 0
                        },
                        variant: "subtitle1"
                    }, o) : null, r ? i().createElement(Yt, {
                        className: "bn-notification-msg-wrapper",
                        variant: "body2",
                        sx: {
                            color: "t.secondary",
                            overflow: "auto",
                            maxHeight: 120,
                            pr: p ? "md" : 0,
                            wordWrap: "break-word"
                        }
                    }, r) : null, a ? i().createElement(Yt, {
                        variant: "label5",
                        sx: {
                            color: "toast.content",
                            flexShrink: 0,
                            pr: p ? "md" : 0
                        }
                    }, a) : null)), p ? i().createElement(Tt.A, {
                        __css: {
                            position: "absolute",
                            right: "sm",
                            alignItems: "flex-start",
                            flexShrink: 0,
                            p: "minor"
                        }
                    }, i().createElement(qt, {
                        size: 20,
                        onClick: g,
                        display: "block",
                        cursor: "pointer",
                        color: "toast.closeColor"
                    })) : null)
                }));
            Kt.displayName = "Toast";
            const Xt = Kt;

            function Jt(e) {
                var t = (0, Ie.A)((0, n.useState)(0), 2),
                    r = t[0],
                    o = t[1],
                    a = e.onClose,
                    l = e.item,
                    s = e.style,
                    u = l.autoHideDuration,
                    c = l.open,
                    p = l.key,
                    d = l.showProgress,
                    f = l.onClose,
                    g = (0, vt.A)(l, ["autoHideDuration", "open", "key", "showProgress", "onClose"]),
                    b = i().useRef(),
                    h = i().useCallback((function(e, t) {
                        f && f(e, t, p), a(e, t, p)
                    }), [p]),
                    x = i().useCallback((function() {
                        u && (clearTimeout(b.current), b.current = setTimeout((function() {
                            u && h(null, "timeout")
                        }), u))
                    }), [u, h]);
                return (0, n.useEffect)((function() {
                    return c && x(),
                        function() {
                            clearTimeout(b.current)
                        }
                }), [c, x]), (0, n.useEffect)((function() {
                    if (u && d) var e = setInterval((function() {
                        o((function(t) {
                            return t >= 100 ? (clearInterval(e), 100) : t + 1e3 / u
                        }))
                    }), 10)
                }), [u]), c ? i().createElement(Xt, Bt({
                    mb: "xs",
                    onClose: h,
                    progress: r,
                    showProgress: d
                }, g, {
                    style: s
                })) : null
            }
            var Zt = {
                    vertical: "top",
                    horizontal: "center"
                },
                $t = function(e, t) {
                    var r;
                    return "object" !== typeof t[0] || n.isValidElement(t[0]) ? (r = t[1] || e).message = r.message || t[0] : r = t[0] || e, r
                };
            const er = function(e) {
                var t = e.anchorOrigin,
                    r = void 0 === t ? Zt : t,
                    o = e.autoHideDuration,
                    i = void 0 === o ? 4500 : o,
                    a = e.closable,
                    l = void 0 !== a && a,
                    s = e.disableAnimate,
                    u = void 0 !== s && s,
                    c = e.position,
                    p = void 0 === c ? "fixed" : c,
                    d = e.children,
                    f = e.queueSize,
                    g = void 0 === f ? 10 : f,
                    b = e.container,
                    h = e.enablePortal,
                    v = (0, Ie.A)(n.useState(h), 2),
                    y = v[0],
                    w = v[1],
                    S = n.useMemo((function() {
                        return []
                    }), []),
                    k = (0, Ie.A)(n.useState([]), 2),
                    C = k[0],
                    B = k[1],
                    _ = n.useCallback((function(t, r, o) {
                        e.onClose && e.onClose(t, r, o), B(void 0 !== o && null !== o ? function(e) {
                            return e.filter((function(e) {
                                return e.key !== o.toString()
                            }))
                        } : [])
                    }), [e]),
                    z = n.useRef(null),
                    A = n.useCallback((function() {
                        B((function(t) {
                            var r = t.length - g + 1;
                            if (r >= 1) {
                                for (var o = t.splice(0, r), n = 0; n < o.length; ++n) {
                                    var i = o[n];
                                    i && (i.onClose && i.onClose(null, "max", i.key), e.onClose && e.onClose(null, "max", i.key))
                                }
                                var a = S.splice(0, Math.min(r - 1, S.length));
                                if (a.length > 0) return (0, He.A)(t).concat((0, He.A)(a))
                            }
                            return (0, He.A)(t)
                        }))
                    }), [e, S, g]),
                    E = n.useCallback((function() {
                        S.length > 0 && B((function(e) {
                            var t = S.shift();
                            return t ? (0, He.A)(e).concat([t]) : e
                        }))
                    }), [S]),
                    F = n.useCallback((function() {
                        return A(), E()
                    }), [A, E]),
                    I = C.reduce((function(e, t) {
                        var o, n = (o = t.anchorOrigin || r, "".concat(o.vertical, "-").concat(o.horizontal)),
                            i = e[n] || [];
                        return (0, m.A)((0, x.A)({}, e), (0, mt.A)({}, n, (0, He.A)(i).concat([t])))
                    }), {}),
                    H = n.useMemo((function() {
                        return {
                            enqueueNotification: function() {
                                for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++) t[o] = arguments[o];
                                if (void 0 !== t[0] || void 0 !== t[1]) {
                                    var n = $t({
                                        anchorOrigin: r,
                                        autoHideDuration: i,
                                        closable: l,
                                        enablePortal: h
                                    }, t);
                                    n.enablePortal && w(n.enablePortal), n.container && (z.current = n.container);
                                    var a = n.key,
                                        s = n.anchorOrigin,
                                        u = void 0 === s ? r : s,
                                        c = n.autoHideDuration,
                                        p = void 0 === c ? i : c,
                                        d = n.closable,
                                        f = void 0 === d ? l : d,
                                        g = n.persist,
                                        b = n.message,
                                        v = (0, vt.A)(n, ["key", "anchorOrigin", "autoHideDuration", "closable", "persist", "message"]),
                                        y = a && a.toString() || (new Date).getTime().toString() + Math.random().toString(),
                                        k = (0, m.A)((0, x.A)({
                                            key: y
                                        }, v), {
                                            persist: Boolean(g),
                                            autoHideDuration: g ? 0 : p,
                                            closable: f,
                                            open: !0,
                                            message: b,
                                            anchorOrigin: u
                                        });
                                    return S.push(k), F(), y
                                }
                            },
                            closeNotification: function(e) {
                                _(null, null, e)
                            }
                        }
                    }), [S, r, i, l, h, _, F]);
                return n.createElement(kt.Provider, {
                    value: H
                }, d, function(e) {
                    if (Object.entries) return Object.entries(e);
                    for (var t = wt(e), r = t.length, o = new Array(r); r--;) o[r] = [t[r], e[t[r]]];
                    return o
                }(I).map((function(e) {
                    var t = (0, Ie.A)(e, 2),
                        r = t[0],
                        o = t[1],
                        i = o[0],
                        a = i.anchorOrigin,
                        l = i.style,
                        s = "top" === a.vertical ? -1 : 1;
                    return u ? n.createElement(Mt, {
                        key: r,
                        anchorOrigin: a,
                        position: p,
                        container: z.current || b,
                        enablePortal: y,
                        style: null !== l && void 0 !== l ? l : {}
                    }, o.map((function(e) {
                        return n.createElement(Jt, {
                            key: e.key,
                            item: e,
                            onClose: _
                        })
                    }))) : n.createElement(yt.S6, {
                        key: r,
                        defaultStyles: o.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    opacity: 0,
                                    translateY: 60 * s
                                }
                            }
                        })),
                        styles: o.map((function(e) {
                            return {
                                key: e.key,
                                data: e,
                                style: {
                                    translateY: (0, yt.oz)(0, yt.v4.gentle),
                                    opacity: (0, yt.oz)(1, yt.v4.gentle)
                                }
                            }
                        })),
                        willLeave: function(e) {
                            var t = e.key;
                            return {
                                translateY: (0, yt.oz)(-60 * s * (o[0].key === t ? 1 : -1)),
                                opacity: (0, yt.oz)(0)
                            }
                        },
                        willEnter: function() {
                            return {
                                translateY: 60 * s,
                                opacity: 1
                            }
                        }
                    }, (function(e) {
                        return n.createElement(Mt, {
                            key: r,
                            anchorOrigin: a,
                            position: p,
                            container: z.current || b,
                            enablePortal: y,
                            style: (0, x.A)({
                                transform: "translate3d(".concat("center" === a.horizontal ? "-50%" : "0", ", ").concat(e[e.length - 1].style.translateY, "px, 0)")
                            }, null !== l && void 0 !== l ? l : {})
                        }, e.map((function(e) {
                            var t = e.key,
                                r = e.style.opacity,
                                o = e.data;
                            return n.createElement(Jt, {
                                key: t,
                                item: o,
                                onClose: _,
                                style: {
                                    opacity: r
                                }
                            })
                        })))
                    }))
                })))
            };
            var tr = r("oVQP"),
                rr = r("MEAY"),
                or = r("wIZF"),
                nr = r("3Bw6"),
                ir = r.n(nr),
                ar = /[A-Z]/g,
                lr = /^ms-/,
                sr = {};

            function ur(e) {
                return "-" + e.toLowerCase()
            }
            const cr = function(e) {
                if (sr.hasOwnProperty(e)) return sr[e];
                var t = e.replace(ar, ur);
                return sr[e] = lr.test(t) ? "-" + t : t
            };

            function pr(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                const r = Object.keys(e),
                    o = Object.keys(t),
                    n = r.length;
                if (o.length !== n) return !1;
                for (let i = 0; i < n; i++) {
                    const o = r[i];
                    if (e[o] !== t[o] || !Object.prototype.hasOwnProperty.call(t, o)) return !1
                }
                return !0
            }
            var dr = r("aWzz"),
                fr = r.n(dr);
            const gr = fr().oneOfType([fr().string, fr().number]),
                br = {
                    all: fr().bool,
                    grid: fr().bool,
                    aural: fr().bool,
                    braille: fr().bool,
                    handheld: fr().bool,
                    print: fr().bool,
                    projection: fr().bool,
                    screen: fr().bool,
                    tty: fr().bool,
                    tv: fr().bool,
                    embossed: fr().bool
                },
                hr = {
                    orientation: fr().oneOf(["portrait", "landscape"]),
                    scan: fr().oneOf(["progressive", "interlace"]),
                    aspectRatio: fr().string,
                    deviceAspectRatio: fr().string,
                    height: gr,
                    deviceHeight: gr,
                    width: gr,
                    deviceWidth: gr,
                    color: fr().bool,
                    colorIndex: fr().bool,
                    monochrome: fr().bool,
                    resolution: gr,
                    type: Object.keys(br)
                },
                {
                    type: xr,
                    ...mr
                } = hr,
                vr = {
                    minAspectRatio: fr().string,
                    maxAspectRatio: fr().string,
                    minDeviceAspectRatio: fr().string,
                    maxDeviceAspectRatio: fr().string,
                    minHeight: gr,
                    maxHeight: gr,
                    minDeviceHeight: gr,
                    maxDeviceHeight: gr,
                    minWidth: gr,
                    maxWidth: gr,
                    minDeviceWidth: gr,
                    maxDeviceWidth: gr,
                    minColor: fr().number,
                    maxColor: fr().number,
                    minColorIndex: fr().number,
                    maxColorIndex: fr().number,
                    minMonochrome: fr().number,
                    maxMonochrome: fr().number,
                    minResolution: gr,
                    maxResolution: gr,
                    ...mr
                };
            var yr = {
                all: { ...br,
                    ...vr
                },
                types: br,
                matchers: hr,
                features: vr
            };
            const wr = e => {
                    const t = [];
                    return Object.keys(yr.all).forEach((r => {
                        const o = e[r];
                        null != o && t.push(((e, t) => {
                            const r = cr(e);
                            return "number" === typeof t && (t = `${t}px`), !0 === t ? r : !1 === t ? `not ${r}` : `(${r}: ${t})`
                        })(r, o))
                    })), t.join(" and ")
                },
                Sr = (0, n.createContext)(void 0),
                kr = e => {
                    if (!e) return;
                    return Object.keys(e).reduce(((t, r) => (t[cr(r)] = e[r], t)), {})
                },
                Cr = () => {
                    const e = (0, n.useRef)(!1);
                    return (0, n.useEffect)((() => {
                        e.current = !0
                    }), []), e.current
                },
                Br = e => {
                    const t = () => (e => e.query || wr(e))(e),
                        [r, o] = (0, n.useState)(t);
                    return (0, n.useEffect)((() => {
                        const e = t();
                        r !== e && o(e)
                    }), [e]), r
                },
                _r = (e, t, r) => {
                    const o = (e => {
                            const t = (0, n.useContext)(Sr),
                                r = () => kr(e) || kr(t),
                                [o, i] = (0, n.useState)(r);
                            return (0, n.useEffect)((() => {
                                const e = r();
                                pr(o, e) || i(e)
                            }), [e, t]), o
                        })(t),
                        i = Br(e);
                    if (!i) throw new Error("Invalid or missing MediaQuery!");
                    const a = ((e, t) => {
                            const r = () => ir()(e, t || {}, !!t),
                                [o, i] = (0, n.useState)(r),
                                a = Cr();
                            return (0, n.useEffect)((() => {
                                if (a) {
                                    const e = r();
                                    return i(e), () => {
                                        e && e.dispose()
                                    }
                                }
                            }), [e, t]), o
                        })(i, o),
                        l = (e => {
                            const [t, r] = (0, n.useState)(e.matches);
                            return (0, n.useEffect)((() => {
                                const t = e => {
                                    r(e.matches)
                                };
                                return e.addListener(t), r(e.matches), () => {
                                    e.removeListener(t)
                                }
                            }), [e]), t
                        })(a),
                        s = Cr();
                    return (0, n.useEffect)((() => {
                        s && r && r(l)
                    }), [l]), (0, n.useEffect)((() => () => {
                        a && a.dispose()
                    }), []), l
                };
            var zr = function() {
                    try {
                        return "function" === typeof bn.getSystemInfoSync ? "mini-app" : "webview"
                    } catch (e) {
                        if (window.__RUN_BY_ELECTRON__) return "electron"
                    }
                    return "browser"
                },
                Ar = "mini-app" === zr();
            zr();

            function Er(e) {
                return e && e.Math == Math ? e : void 0
            }
            "object" == typeof globalThis && Er(globalThis) || Er(window) || "object" == typeof self && Er(self) || "object" == typeof r.g && Er(r.g);
            var Fr = i().useLayoutEffect,
                Ir = function() {
                    var e = function() {
                        var e = i().useState(Ar),
                            t = e[0],
                            r = e[1];
                        return i().useEffect((function() {
                            return r(!0)
                        }), []), t
                    }();
                    if (Ar) return {
                        isClient: e,
                        isMobile: !0,
                        isTablet: !1
                    };
                    var t = _r({
                            query: "screen and (max-width: 767px)"
                        }),
                        r = _r({
                            query: "screen and (max-width: 1023px)"
                        });
                    return {
                        isClient: e,
                        isMobile: t,
                        isTablet: e && !t && r
                    }
                };
            const Hr = (0, n.createContext)({
                colors: {},
                mode: "light"
            });
            var jr, Dr = function() {
                return jr
            };
            var Or = function(e, t, r) {
                var o = (e.getAttribute("style") || "").replace(/\s/g, "").split(";").reduce((function(e, o) {
                        var n, i, a = o.split(":"),
                            l = a[0],
                            s = a[1];
                        return r ? (0, or.__assign)(((n = {})[l] = s, n), e) : l in t ? e : (0, or.__assign)((0, or.__assign)({}, e), ((i = {})[l] = s, i))
                    }), r ? t : {}),
                    n = Object.keys(o).reduce((function(e, t) {
                        var r = t ? [t, o[t]].join(":") : "";
                        return r ? (0, or.__spreadArray)((0, or.__spreadArray)([], e, !0), [r], !1) : e
                    }), []);
                e.setAttribute("style", n.join(";"))
            };
            var Tr = r("O94r"),
                Wr = r.n(Tr),
                Pr = (0, n.forwardRef)((function(e, t) {
                    var r = e.as,
                        o = void 0 === r ? "div" : r,
                        n = (0, or.__rest)(e, ["as"]);
                    return i().createElement(o, (0, or.__assign)((0, or.__assign)({}, n), {
                        ref: t
                    }))
                }));
            const Rr = Pr;
            var Lr = (0, n.forwardRef)((function(e, t) {
                return i().createElement(Rr, (0, or.__assign)({}, e, {
                    ref: t
                }))
            }));
            Lr.displayName = "Box";
            const Mr = Lr,
                Nr = (0, n.createContext)({
                    prefixCls: "bn",
                    getI18n: function(e) {
                        return e
                    }
                });
            var Vr = /\{\{[^}]+\}\}/g;
            "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
            const Yr = function(e) {
                var t = e.prefixCls,
                    r = void 0 === t ? "bn" : t,
                    o = e.iconConfig,
                    a = e.i18n,
                    l = e.children,
                    s = e.isElectron,
                    u = e.isMobile,
                    c = (0, or.__rest)(e, ["prefixCls", "iconConfig", "i18n", "children", "isElectron", "isMobile"]);
                if (Ar && (!o || !o.path)) throw new Error("iconConfig must be required in ConfigProvider");
                var p = Ir(),
                    d = (0, n.useCallback)((function(e, t) {
                        var r = a ? a[e] : null,
                            o = t || {},
                            n = o.defaultValue;
                        return function(e, t) {
                            return void 0 === t && (t = {}), e.replace(Vr, (function(e) {
                                var r = e.replace(/^{{/g, "").replace(/}}$/g, "");
                                return t[r] || ""
                            }))
                        }(r || n, (0, or.__rest)(o, ["defaultValue"]))
                    }), [a]),
                    f = (0, or.__assign)((0, or.__assign)((0, or.__assign)({}, c), s ? (0, or.__assign)((0, or.__assign)({}, p), {
                        isMobile: !1,
                        isTablet: !1
                    }) : (0, or.__assign)((0, or.__assign)({}, p), void 0 !== u && {
                        isMobile: u
                    })), {
                        prefixCls: r,
                        iconConfig: o,
                        getI18n: d
                    });
                return i().createElement(Nr.Provider, {
                    value: f,
                    children: l
                })
            };
            var Ur = {
                fresh: "",
                traditional: "traditional"
            };
            const Gr = function(e) {
                    var t = e.scope,
                        r = e.isCVD,
                        o = e.isReverse,
                        a = e.themeColors,
                        l = e.colorMode,
                        s = void 0 === l ? "fresh" : l,
                        u = e.mode,
                        c = void 0 === u ? "light" : u,
                        p = e.themeExtraColors,
                        d = void 0 === p ? {} : p,
                        f = (0, n.useContext)(Nr).isMobile,
                        g = (0, n.useMemo)((function() {
                            var e = [r ? "cvd" : Ur[s] || "", o ? "reverse" : ""].filter(Boolean),
                                t = (0, or.__assign)({}, a),
                                n = d[e.join("-")] || {};
                            f && ((null === a || void 0 === a ? void 0 : a.mobile) && (t = (0, or.__assign)((0, or.__assign)({}, t), t.mobile)), (null === n || void 0 === n ? void 0 : n.mobile) && (n = (0, or.__assign)((0, or.__assign)({}, n), n.mobile)));
                            var i = (0, or.__assign)((0, or.__assign)({}, t), n);
                            delete i.mobile;
                            var l;
                            return l = Object.keys(i).reduce((function(e, t) {
                                var r;
                                return (0, or.__assign)((0, or.__assign)({}, e), ((r = {})["--color-".concat(t)] = i[t], r))
                            }), {}), {
                                colors: i,
                                styles: l
                            }
                        }), [r, o, a, d, f, s]),
                        b = g.colors,
                        h = g.styles,
                        x = Wr()("theme-root", c, e.className);
                    return Fr((function() {
                        var e;
                        return Ar || t || !document.body ? Dr : (Or(document.body, h, !0), (e = document.body.classList).add.apply(e, x.split(" ")), function() {
                            var e;
                            (null === document || void 0 === document ? void 0 : document.body) && (Or(document.body, h, !1), (e = document.body.classList).remove.apply(e, x.split(" ")))
                        })
                    }), [x, t, h]), i().createElement(Hr.Provider, {
                        value: {
                            isCVD: r,
                            isReverse: o,
                            mode: c,
                            colors: b
                        }
                    }, Ar || t ? i().createElement(Mr, {
                        className: x,
                        style: h,
                        children: e.children
                    }) : e.children)
                },
                qr = (0, n.createContext)({});
            const Qr = function(e) {
                var t = e.pathPrefix,
                    r = e.isRegionMode,
                    o = e.level2Domain,
                    n = e.children,
                    a = (0, or.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "children"]);
                return i().createElement(qr.Provider, (0, or.__assign)({
                    value: {
                        pathPrefix: t,
                        isRegionMode: r,
                        level2Domain: o
                    },
                    children: n
                }, a))
            };
            const Kr = function(e) {
                var t = e.pathPrefix,
                    r = e.isRegionMode,
                    o = e.level2Domain,
                    n = e.lang,
                    a = e.prefixCls,
                    l = e.isRTL,
                    s = e.iconConfig,
                    u = e.children,
                    c = e.isElectron,
                    p = e.isMobile,
                    d = (0, or.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    f = {
                        prefixCls: a,
                        isRTL: l,
                        iconConfig: s,
                        isElectron: c,
                        isMobile: p
                    },
                    g = {
                        pathPrefix: t,
                        isRegionMode: r,
                        level2Domain: o,
                        lang: n
                    },
                    b = Object.values(g).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    h = i().createElement(Yr, (0, or.__assign)({}, f), i().createElement(Gr, (0, or.__assign)({}, d), u));
                return b ? i().createElement(Qr, (0, or.__assign)({}, g), h) : h
            };
            var Xr = r("HS2I"),
                Jr = r("VA12");
            var Zr = function() {},
                $r = function(e) {
                    return (0, n.useEffect)((function() {
                        var t, r;
                        (t = e.url, r = {
                            async: !0
                        }, new Promise((function(e, o) {
                            var n = document.body.querySelectorAll("script[src]");
                            if ([].slice.call(n).some((function(e) {
                                    return e.src === t
                                }))) e();
                            else {
                                var i = document.createElement("script");
                                i.setAttribute("data-ot-ignore", "true"), i.setAttribute("class", "optanon-category-C0001"), Object.keys(r).forEach((function(e) {
                                    return i.setAttribute(e, r[e])
                                })), i.src = t, i.addEventListener("load", (function() {
                                    return e()
                                })), i.addEventListener("error", (function() {
                                    return o()
                                })), document.body.appendChild(i)
                            }
                        }))).then(e.onLoad || Zr).catch(e.onError || Zr)
                    }), []), null
                };
            const eo = (0, n.memo)($r);
            var to = function(e) {
                var t = e.disclaimerConfig,
                    r = e.staticUrl,
                    o = e.locale,
                    a = e.isClient,
                    l = e.userInfo,
                    s = e.isLoggedIn,
                    u = e.isLoading,
                    c = e.region,
                    p = e.ipDivision,
                    d = e.getI18n,
                    f = e.loadI18n,
                    g = void 0 === f ? function() {
                        return Promise.resolve()
                    } : f,
                    b = e.replaceUrl,
                    h = e.isHandleLoggedInUser,
                    x = e.initialFrom;
                return (0, n.useEffect)((function() {
                    a && (window.bnvelidate = {
                        isLoading: u,
                        isLoggedIn: s,
                        region: c,
                        locale: o,
                        ipDivision: p,
                        disclaimerConfig: t,
                        getBNHTTP: Jr.get,
                        postBNHTTP: Jr.post,
                        getHeaderI18n: d,
                        loadHeaderI18n: g,
                        replaceUrl: b,
                        initialFrom: x,
                        bnuserinfo: s && h ? JSON.stringify(l) : void 0
                    })
                }), [l, d, g, a, s, c, u, o, p, t, b, x]), i().createElement(i().Fragment, null, h && !u && s && a ? i().createElement(eo, {
                    url: "".concat(r, "/static/configs/global/index.js")
                }) : null, !u && a && c ? i().createElement(eo, {
                    url: "".concat(r, "/static/configs/global/common.js")
                }) : null)
            };
            const ro = (0, n.memo)(to);
            var oo = r("T3Fm"),
                no = (null === window || void 0 === window ? void 0 : window.dataUMD) || {
                    useBusinessKeys: function() {
                        return {
                            value: null,
                            loading: !1
                        }
                    },
                    useRegion: function() {
                        return {
                            value: null
                        }
                    },
                    useUserLoginStatus: function() {
                        return {
                            value: null,
                            loading: !1
                        }
                    },
                    useTheme: function() {
                        return {
                            setTheme: function() {},
                            theme: ""
                        }
                    },
                    useCommonEnv: function() {
                        return {
                            envs: {},
                            setEnvs: function() {}
                        }
                    },
                    useCurrency: function() {
                        return {
                            currency: null,
                            currencyMap: null,
                            currencyList: {
                                value: null,
                                loading: !1
                            }
                        }
                    },
                    useLanguage: function() {
                        return {
                            language: "",
                            setLanguage: function() {},
                            languageList: {
                                value: null,
                                loading: !1,
                                error: null,
                                refresh: function() {}
                            }
                        }
                    },
                    useNavI18n: function() {
                        return {
                            i18n: {},
                            setI18n: function() {},
                            getI18nTxt: function(e) {
                                return e
                            }
                        }
                    },
                    useUserBaseDetail: function() {
                        return {
                            error: null,
                            loading: !1,
                            value: {},
                            refresh: function() {}
                        }
                    }
                };
            const io = function(e, t) {
                if (t) {
                    var r = /^([\w-]+)\(([\w-]+)\)$/,
                        o = e;
                    if (t.split(",").some((function(t) {
                            var n = r.exec(t);
                            return !!(n && n[1] && n[2] && e === n[1]) && (o = n[2], !0)
                        }))) return {
                        success: !0,
                        code: o
                    }
                }
                return {
                    success: !1,
                    code: e
                }
            };
            var ao = r("na7I"),
                lo = function(e) {
                    var t = e.disclaimerConfig,
                        r = no.useUserLoginStatus(),
                        o = r.value,
                        a = r.loading,
                        l = no.useUserBaseDetail().value,
                        s = no.useLanguage().language,
                        u = no.useNavI18n().getI18nTxt,
                        c = no.useRegion().value,
                        p = no.useCommonEnv().envs,
                        d = (0, n.useCallback)((function(e, t) {
                            var r = window.location.origin.split(".").slice(1).join("."),
                                o = null !== t && void 0 !== t ? t : {},
                                n = o.langMapping,
                                i = void 0 === n ? "" : n,
                                a = (0, vt.A)(o, ["langMapping"]),
                                l = io(s, i),
                                u = l.success,
                                c = l.code;
                            return u ? (0, ao.A)(e, (0, x.A)({
                                origin: origin,
                                suffixOrigin: r,
                                locale: c
                            }, a)) : (0, ao.A)(e, (0, x.A)({
                                origin: origin,
                                suffixOrigin: r,
                                locale: s
                            }, a))
                        }), [s]);
                    return (null === p || void 0 === p ? void 0 : p.STATIC_HOST) && s && oo.o ? i().createElement(ro, {
                        disclaimerConfig: t || {},
                        staticUrl: null === p || void 0 === p ? void 0 : p.STATIC_HOST,
                        locale: s,
                        isClient: oo.o,
                        userInfo: l || void 0,
                        isLoggedIn: o,
                        isLoading: a,
                        region: null === c || void 0 === c ? void 0 : c.country,
                        ipDivision: null === c || void 0 === c ? void 0 : c.subDivision,
                        getI18n: u,
                        replaceUrl: d,
                        initialFrom: "header",
                        isHandleLoggedInUser: !0
                    }) : null
                };
            const so = i().memo(lo);
            var uo = r("NsjG"),
                co = r("JEU8"),
                po = function(e) {
                    return e.cookies || {}
                },
                fo = function() {
                    var e = (0, n.useRef)(null),
                        t = (0, co.wA)();
                    return e.current = (0, co.d4)(po), {
                        cookies: e.current,
                        saveCookie: (0, n.useCallback)((function(r, o) {
                            var n = "function" === typeof o ? o(e.current[r]) : o;
                            t.cookies.save({
                                key: r,
                                value: n
                            })
                        }), [])
                    }
                },
                go = "dark",
                bo = "light",
                ho = "theme",
                xo = "shouldResetTradingView",
                mo = function() {
                    var e = fo(),
                        t = e.cookies,
                        r = e.saveCookie,
                        o = (0, n.useCallback)((function() {
                            return uo.IG.getItem(xo, 0) || 0
                        }), []),
                        i = (0, n.useCallback)((function() {
                            var e = o();
                            uo.IG.setItem(xo, e + 1)
                        }), [o]);
                    return {
                        isLight: t.theme !== go,
                        shouldResetTradingViewKey: xo,
                        getThemeCounter: o,
                        incThemeCounter: i,
                        toggleTheme: (0, n.useCallback)((function() {
                            r(ho, (function(e) {
                                return e !== bo ? bo : go
                            })), i()
                        }), [i])
                    }
                },
                vo = r("VmDy");
            const yo = function() {
                var e = (0, Xr.useTheme)().isLight,
                    t = mo(),
                    r = t.isLight,
                    i = t.toggleTheme,
                    l = e ? "light" : "dark",
                    s = "light" === l ? tr.BB : tr.XT,
                    u = "light" === l ? rr.bK : rr.zd;
                return (0, n.useEffect)((function() {
                    r !== e && i()
                }), [r, e, i]), (0, n.useEffect)((function() {
                    window.__MUSES_CONTEXT__ && (window.__MUSES_CONTEXT__.theme = l)
                }), [l]), (0, o.jsx)(vo.OP, {
                    children: (0, o.jsxs)(Kr, {
                        mode: l,
                        themeColors: s,
                        themeExtraColors: u,
                        children: [(0, o.jsx)(vo.zy, {}), (0, o.jsx)(so, {}), (0, o.jsx)(vo.ci, {}), (0, o.jsx)(vo.Mx, {
                            children: (0, o.jsx)(xt, {
                                type: l,
                                children: (0, o.jsx)(er, {
                                    children: (0, o.jsx)(a.Tp, {})
                                })
                            })
                        })]
                    })
                })
            }
        },
        O94r: (e, t) => {
            var r;
            ! function() {
                "use strict";
                var o = {}.hasOwnProperty;

                function n() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var r = arguments[t];
                        if (r) {
                            var i = typeof r;
                            if ("string" === i || "number" === i) e.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var a = n.apply(null, r);
                                    a && e.push(a)
                                }
                            } else if ("object" === i)
                                if (r.toString === Object.prototype.toString)
                                    for (var l in r) o.call(r, l) && r[l] && e.push(l);
                                else e.push(r.toString())
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (n.default = n, e.exports = n) : void 0 === (r = function() {
                    return n
                }.apply(t, [])) || (e.exports = r)
            }()
        },
        mkfS: (e, t) => {
            "use strict";
            t.Y = function(e, t) {
                return l(e).some((function(e) {
                    var r = e.inverse,
                        o = "all" === e.type || t.type === e.type;
                    if (o && r || !o && !r) return !1;
                    var n = e.expressions.every((function(e) {
                        var r = e.feature,
                            o = e.modifier,
                            n = e.value,
                            i = t[r];
                        if (!i) return !1;
                        switch (r) {
                            case "orientation":
                            case "scan":
                                return i.toLowerCase() === n.toLowerCase();
                            case "width":
                            case "height":
                            case "device-width":
                            case "device-height":
                                n = c(n), i = c(i);
                                break;
                            case "resolution":
                                n = u(n), i = u(i);
                                break;
                            case "aspect-ratio":
                            case "device-aspect-ratio":
                            case "device-pixel-ratio":
                                n = s(n), i = s(i);
                                break;
                            case "grid":
                            case "color":
                            case "color-index":
                            case "monochrome":
                                n = parseInt(n, 10) || 1, i = parseInt(i, 10) || 0
                        }
                        switch (o) {
                            case "min":
                                return i >= n;
                            case "max":
                                return i <= n;
                            default:
                                return i === n
                        }
                    }));
                    return n && !r || !n && r
                }))
            };
            var r = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                o = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                n = /^(?:(min|max)-)?(.+)/,
                i = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                a = /(dpi|dpcm|dppx)?$/;

            function l(e) {
                return e.split(",").map((function(e) {
                    var t = (e = e.trim()).match(r),
                        i = t[1],
                        a = t[2],
                        l = t[3] || "",
                        s = {};
                    return s.inverse = !!i && "not" === i.toLowerCase(), s.type = a ? a.toLowerCase() : "all", l = l.match(/\([^\)]+\)/g) || [], s.expressions = l.map((function(e) {
                        var t = e.match(o),
                            r = t[1].toLowerCase().match(n);
                        return {
                            modifier: r[1],
                            feature: r[2],
                            value: t[2]
                        }
                    })), s
                }))
            }

            function s(e) {
                var t, r = Number(e);
                return r || (r = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), r
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

            function c(e) {
                var t = parseFloat(e);
                switch (String(e).match(i)[1]) {
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
        QF3D: (e, t, r) => {
            var o = r("vxC8")(r("IBsm"), "DataView");
            e.exports = o
        },
        Tv3l: (e, t, r) => {
            var o = r("2Fbm"),
                n = r("VPai"),
                i = r("+fUG"),
                a = r("QMz8"),
                l = r("mUsV");

            function s(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            s.prototype.clear = o, s.prototype.delete = n, s.prototype.get = i, s.prototype.has = a, s.prototype.set = l, e.exports = s
        },
        deT9: (e, t, r) => {
            var o = r("vGGS"),
                n = r("obGE");

            function i(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            i.prototype = o(n.prototype), i.prototype.constructor = i, e.exports = i
        },
        "+ooz": (e, t, r) => {
            var o = r("8Zrg"),
                n = r("kwr2"),
                i = r("5VYK"),
                a = r("Coc+"),
                l = r("LzM7");

            function s(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            s.prototype.clear = o, s.prototype.delete = n, s.prototype.get = i, s.prototype.has = a, s.prototype.set = l, e.exports = s
        },
        "0+c5": (e, t, r) => {
            var o = r("vGGS"),
                n = r("obGE");

            function i(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            i.prototype = o(n.prototype), i.prototype.constructor = i, e.exports = i
        },
        qeCs: (e, t, r) => {
            var o = r("vxC8")(r("IBsm"), "Map");
            e.exports = o
        },
        hyzI: (e, t, r) => {
            var o = r("m5o6"),
                n = r("d0UJ"),
                i = r("eask"),
                a = r("9SKQ"),
                l = r("e63W");

            function s(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var o = e[t];
                    this.set(o[0], o[1])
                }
            }
            s.prototype.clear = o, s.prototype.delete = n, s.prototype.get = i, s.prototype.has = a, s.prototype.set = l, e.exports = s
        },
        IS0S: (e, t, r) => {
            var o = r("vxC8")(r("IBsm"), "Promise");
            e.exports = o
        },
        OBn4: (e, t, r) => {
            var o = r("vxC8")(r("IBsm"), "Set");
            e.exports = o
        },
        "JBn+": (e, t, r) => {
            var o = r("hyzI"),
                n = r("qjF7"),
                i = r("cEmw");

            function a(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new o; ++t < r;) this.add(e[t])
            }
            a.prototype.add = a.prototype.push = n, a.prototype.has = i, e.exports = a
        },
        HsnV: (e, t, r) => {
            var o = r("+ooz"),
                n = r("RNlM"),
                i = r("E4ao"),
                a = r("BSqe"),
                l = r("L6um"),
                s = r("4/ik");

            function u(e) {
                var t = this.__data__ = new o(e);
                this.size = t.size
            }
            u.prototype.clear = n, u.prototype.delete = i, u.prototype.get = a, u.prototype.has = l, u.prototype.set = s, e.exports = u
        },
        Syyo: (e, t, r) => {
            var o = r("IBsm").Symbol;
            e.exports = o
        },
        mGzy: (e, t, r) => {
            var o = r("IBsm").Uint8Array;
            e.exports = o
        },
        "4+Vk": (e, t, r) => {
            var o = r("vxC8")(r("IBsm"), "WeakMap");
            e.exports = o
        },
        zaNA: e => {
            e.exports = function(e, t, r) {
                switch (r.length) {
                    case 0:
                        return e.call(t);
                    case 1:
                        return e.call(t, r[0]);
                    case 2:
                        return e.call(t, r[0], r[1]);
                    case 3:
                        return e.call(t, r[0], r[1], r[2])
                }
                return e.apply(t, r)
            }
        },
        LmOH: e => {
            e.exports = function(e, t) {
                for (var r = -1, o = null == e ? 0 : e.length; ++r < o && !1 !== t(e[r], r, e););
                return e
            }
        },
        W0vE: e => {
            e.exports = function(e, t) {
                for (var r = -1, o = null == e ? 0 : e.length, n = 0, i = []; ++r < o;) {
                    var a = e[r];
                    t(a, r, e) && (i[n++] = a)
                }
                return i
            }
        },
        OfKG: (e, t, r) => {
            var o = r("c7Qd");
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && o(e, t, 0) > -1
            }
        },
        rmhs: (e, t, r) => {
            var o = r("2ZvR"),
                n = r("bvyN"),
                i = r("wxYD"),
                a = r("3ajY"),
                l = r("pnw1"),
                s = r("Qd2C"),
                u = Object.prototype.hasOwnProperty;
            e.exports = function(e, t) {
                var r = i(e),
                    c = !r && n(e),
                    p = !r && !c && a(e),
                    d = !r && !c && !p && s(e),
                    f = r || c || p || d,
                    g = f ? o(e.length, String) : [],
                    b = g.length;
                for (var h in e) !t && !u.call(e, h) || f && ("length" == h || p && ("offset" == h || "parent" == h) || d && ("buffer" == h || "byteLength" == h || "byteOffset" == h) || l(h, b)) || g.push(h);
                return g
            }
        },
        H87J: e => {
            e.exports = function(e, t) {
                for (var r = -1, o = null == e ? 0 : e.length, n = Array(o); ++r < o;) n[r] = t(e[r], r, e);
                return n
            }
        },
        "y/9h": e => {
            e.exports = function(e, t) {
                for (var r = -1, o = t.length, n = e.length; ++r < o;) e[n + r] = t[r];
                return e
            }
        },
        cPMt: e => {
            e.exports = function(e, t, r, o) {
                var n = -1,
                    i = null == e ? 0 : e.length;
                for (o && i && (r = e[++n]); ++n < i;) r = t(r, e[n], n, e);
                return r
            }
        },
        myUI: e => {
            e.exports = function(e, t) {
                for (var r = -1, o = null == e ? 0 : e.length; ++r < o;)
                    if (t(e[r], r, e)) return !0;
                return !1
            }
        },
        amiU: (e, t, r) => {
            var o = r("wC3K"),
                n = r("pPzx");
            e.exports = function(e, t, r) {
                (void 0 !== r && !n(e[t], r) || void 0 === r && !(t in e)) && o(e, t, r)
            }
        },
        c72w: (e, t, r) => {
            var o = r("wC3K"),
                n = r("pPzx"),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r) {
                var a = e[t];
                i.call(e, t) && n(a, r) && (void 0 !== r || t in e) || o(e, t, r)
            }
        },
        "6QIk": (e, t, r) => {
            var o = r("pPzx");
            e.exports = function(e, t) {
                for (var r = e.length; r--;)
                    if (o(e[r][0], t)) return r;
                return -1
            }
        },
        wC3K: (e, t, r) => {
            var o = r("Pz+s");
            e.exports = function(e, t, r) {
                "__proto__" == t && o ? o(e, t, {
                    configurable: !0,
                    enumerable: !0,
                    value: r,
                    writable: !0
                }) : e[t] = r
            }
        },
        vGGS: (e, t, r) => {
            var o = r("tQYX"),
                n = Object.create,
                i = function() {
                    function e() {}
                    return function(t) {
                        if (!o(t)) return {};
                        if (n) return n(t);
                        e.prototype = t;
                        var r = new e;
                        return e.prototype = void 0, r
                    }
                }();
            e.exports = i
        },
        Q4oW: (e, t, r) => {
            var o = r("zKkv"),
                n = r("bz5b")(o);
            e.exports = n
        },
        DuXo: e => {
            e.exports = function(e, t, r, o) {
                for (var n = e.length, i = r + (o ? 1 : -1); o ? i-- : ++i < n;)
                    if (t(e[i], i, e)) return i;
                return -1
            }
        },
        YpBQ: (e, t, r) => {
            var o = r("y/9h"),
                n = r("oCTG");
            e.exports = function e(t, r, i, a, l) {
                var s = -1,
                    u = t.length;
                for (i || (i = n), l || (l = []); ++s < u;) {
                    var c = t[s];
                    r > 0 && i(c) ? r > 1 ? e(c, r - 1, i, a, l) : o(l, c) : a || (l[l.length] = c)
                }
                return l
            }
        },
        UdtX: (e, t, r) => {
            var o = r("RFxK")();
            e.exports = o
        },
        zKkv: (e, t, r) => {
            var o = r("UdtX"),
                n = r("BlJA");
            e.exports = function(e, t) {
                return e && o(e, t, n)
            }
        },
        w2Tz: (e, t, r) => {
            var o = r("xoyU"),
                n = r("Ypsa");
            e.exports = function(e, t) {
                for (var r = 0, i = (t = o(t, e)).length; null != e && r < i;) e = e[n(t[r++])];
                return r && r == i ? e : void 0
            }
        },
        pIod: (e, t, r) => {
            var o = r("y/9h"),
                n = r("wxYD");
            e.exports = function(e, t, r) {
                var i = t(e);
                return n(e) ? i : o(i, r(e))
            }
        },
        Dhk8: (e, t, r) => {
            var o = r("Syyo"),
                n = r("KCLV"),
                i = r("kHoZ"),
                a = o ? o.toStringTag : void 0;
            e.exports = function(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : a && a in Object(e) ? n(e) : i(e)
            }
        },
        JYmt: e => {
            e.exports = function(e, t) {
                return null != e && t in Object(e)
            }
        },
        c7Qd: (e, t, r) => {
            var o = r("DuXo"),
                n = r("z9Jh"),
                i = r("n1QJ");
            e.exports = function(e, t, r) {
                return t === t ? i(e, t, r) : o(e, n, r)
            }
        },
        "/30y": (e, t, r) => {
            var o = r("Dhk8"),
                n = r("tLQN");
            e.exports = function(e) {
                return n(e) && "[object Arguments]" == o(e)
            }
        },
        NYSw: (e, t, r) => {
            var o = r("BqUW"),
                n = r("tLQN");
            e.exports = function e(t, r, i, a, l) {
                return t === r || (null == t || null == r || !n(t) && !n(r) ? t !== t && r !== r : o(t, r, i, a, e, l))
            }
        },
        BqUW: (e, t, r) => {
            var o = r("HsnV"),
                n = r("ZZ+W"),
                i = r("R3gn"),
                a = r("yZHP"),
                l = r("kkM+"),
                s = r("wxYD"),
                u = r("3ajY"),
                c = r("Qd2C"),
                p = "[object Arguments]",
                d = "[object Array]",
                f = "[object Object]",
                g = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r, b, h, x) {
                var m = s(e),
                    v = s(t),
                    y = m ? d : l(e),
                    w = v ? d : l(t),
                    S = (y = y == p ? f : y) == f,
                    k = (w = w == p ? f : w) == f,
                    C = y == w;
                if (C && u(e)) {
                    if (!u(t)) return !1;
                    m = !0, S = !1
                }
                if (C && !S) return x || (x = new o), m || c(e) ? n(e, t, r, b, h, x) : i(e, t, y, r, b, h, x);
                if (!(1 & r)) {
                    var B = S && g.call(e, "__wrapped__"),
                        _ = k && g.call(t, "__wrapped__");
                    if (B || _) {
                        var z = B ? e.value() : e,
                            A = _ ? t.value() : t;
                        return x || (x = new o), h(z, A, r, b, x)
                    }
                }
                return !!C && (x || (x = new o), a(e, t, r, b, h, x))
            }
        },
        ZjRn: (e, t, r) => {
            var o = r("HsnV"),
                n = r("NYSw");
            e.exports = function(e, t, r, i) {
                var a = r.length,
                    l = a,
                    s = !i;
                if (null == e) return !l;
                for (e = Object(e); a--;) {
                    var u = r[a];
                    if (s && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
                }
                for (; ++a < l;) {
                    var c = (u = r[a])[0],
                        p = e[c],
                        d = u[1];
                    if (s && u[2]) {
                        if (void 0 === p && !(c in e)) return !1
                    } else {
                        var f = new o;
                        if (i) var g = i(p, d, c, e, t, f);
                        if (!(void 0 === g ? n(d, p, 3, i, f) : g)) return !1
                    }
                }
                return !0
            }
        },
        z9Jh: e => {
            e.exports = function(e) {
                return e !== e
            }
        },
        "5nKN": (e, t, r) => {
            var o = r("2q8g"),
                n = r("9vbJ"),
                i = r("tQYX"),
                a = r("c18h"),
                l = /^\[object .+?Constructor\]$/,
                s = Function.prototype,
                u = Object.prototype,
                c = s.toString,
                p = u.hasOwnProperty,
                d = RegExp("^" + c.call(p).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");
            e.exports = function(e) {
                return !(!i(e) || n(e)) && (o(e) ? d : l).test(a(e))
            }
        },
        "7/jS": (e, t, r) => {
            var o = r("Dhk8"),
                n = r("t0L4"),
                i = r("tLQN"),
                a = {};
            a["[object Float32Array]"] = a["[object Float64Array]"] = a["[object Int8Array]"] = a["[object Int16Array]"] = a["[object Int32Array]"] = a["[object Uint8Array]"] = a["[object Uint8ClampedArray]"] = a["[object Uint16Array]"] = a["[object Uint32Array]"] = !0, a["[object Arguments]"] = a["[object Array]"] = a["[object ArrayBuffer]"] = a["[object Boolean]"] = a["[object DataView]"] = a["[object Date]"] = a["[object Error]"] = a["[object Function]"] = a["[object Map]"] = a["[object Number]"] = a["[object Object]"] = a["[object RegExp]"] = a["[object Set]"] = a["[object String]"] = a["[object WeakMap]"] = !1, e.exports = function(e) {
                return i(e) && n(e.length) && !!a[o(e)]
            }
        },
        S3pA: (e, t, r) => {
            var o = r("7/we"),
                n = r("KAo/"),
                i = r("zWgn"),
                a = r("wxYD"),
                l = r("1EDM");
            e.exports = function(e) {
                return "function" == typeof e ? e : null == e ? i : "object" == typeof e ? a(e) ? n(e[0], e[1]) : o(e) : l(e)
            }
        },
        "4uJK": (e, t, r) => {
            var o = r("CbIe"),
                n = r("OtNC"),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!o(e)) return n(e);
                var t = [];
                for (var r in Object(e)) i.call(e, r) && "constructor" != r && t.push(r);
                return t
            }
        },
        p2lg: (e, t, r) => {
            var o = r("tQYX"),
                n = r("CbIe"),
                i = r("/UTG"),
                a = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                if (!o(e)) return i(e);
                var t = n(e),
                    r = [];
                for (var l in e)("constructor" != l || !t && a.call(e, l)) && r.push(l);
                return r
            }
        },
        obGE: e => {
            e.exports = function() {}
        },
        "7/we": (e, t, r) => {
            var o = r("ZjRn"),
                n = r("hMsr"),
                i = r("0Ss3");
            e.exports = function(e) {
                var t = n(e);
                return 1 == t.length && t[0][2] ? i(t[0][0], t[0][1]) : function(r) {
                    return r === e || o(r, e, t)
                }
            }
        },
        "KAo/": (e, t, r) => {
            var o = r("NYSw"),
                n = r("2srY"),
                i = r("NW/2"),
                a = r("i7nn"),
                l = r("+tCn"),
                s = r("0Ss3"),
                u = r("Ypsa");
            e.exports = function(e, t) {
                return a(e) && l(t) ? s(u(e), t) : function(r) {
                    var a = n(r, e);
                    return void 0 === a && a === t ? i(r, e) : o(t, a, 3)
                }
            }
        },
        MzY2: (e, t, r) => {
            var o = r("HsnV"),
                n = r("amiU"),
                i = r("UdtX"),
                a = r("cb1R"),
                l = r("tQYX"),
                s = r("zH+d"),
                u = r("LL3N");
            e.exports = function e(t, r, c, p, d) {
                t !== r && i(r, (function(i, s) {
                    if (d || (d = new o), l(i)) a(t, r, s, c, e, p, d);
                    else {
                        var f = p ? p(u(t, s), i, s + "", t, r, d) : void 0;
                        void 0 === f && (f = i), n(t, s, f)
                    }
                }), s)
            }
        },
        cb1R: (e, t, r) => {
            var o = r("amiU"),
                n = r("Grae"),
                i = r("6Rtw"),
                a = r("QT01"),
                l = r("sD1O"),
                s = r("bvyN"),
                u = r("wxYD"),
                c = r("Ndl3"),
                p = r("3ajY"),
                d = r("2q8g"),
                f = r("tQYX"),
                g = r("Kkar"),
                b = r("Qd2C"),
                h = r("LL3N"),
                x = r("4ScB");
            e.exports = function(e, t, r, m, v, y, w) {
                var S = h(e, r),
                    k = h(t, r),
                    C = w.get(k);
                if (C) o(e, r, C);
                else {
                    var B = y ? y(S, k, r + "", e, t, w) : void 0,
                        _ = void 0 === B;
                    if (_) {
                        var z = u(k),
                            A = !z && p(k),
                            E = !z && !A && b(k);
                        B = k, z || A || E ? u(S) ? B = S : c(S) ? B = a(S) : A ? (_ = !1, B = n(k, !0)) : E ? (_ = !1, B = i(k, !0)) : B = [] : g(k) || s(k) ? (B = S, s(S) ? B = x(S) : f(S) && !d(S) || (B = l(k))) : _ = !1
                    }
                    _ && (w.set(k, B), v(B, k, m, y, w), w.delete(k)), o(e, r, B)
                }
            }
        },
        EI7Z: e => {
            e.exports = function(e) {
                return function(t) {
                    return null == t ? void 0 : t[e]
                }
            }
        },
        CEyS: (e, t, r) => {
            var o = r("w2Tz");
            e.exports = function(e) {
                return function(t) {
                    return o(t, e)
                }
            }
        },
        "5q8j": e => {
            e.exports = function(e, t, r, o, n) {
                return n(e, (function(e, n, i) {
                    r = o ? (o = !1, e) : t(r, e, n, i)
                })), r
            }
        },
        R3TX: (e, t, r) => {
            var o = r("zWgn"),
                n = r("UAs9"),
                i = r("7Pat");
            e.exports = function(e, t) {
                return i(n(e, t, o), e + "")
            }
        },
        uA6v: (e, t, r) => {
            var o = r("zWgn"),
                n = r("BVx2"),
                i = n ? function(e, t) {
                    return n.set(e, t), e
                } : o;
            e.exports = i
        },
        "+7q0": (e, t, r) => {
            var o = r("eN33"),
                n = r("Pz+s"),
                i = r("zWgn"),
                a = n ? function(e, t) {
                    return n(e, "toString", {
                        configurable: !0,
                        enumerable: !1,
                        value: o(t),
                        writable: !0
                    })
                } : i;
            e.exports = a
        },
        "2ZvR": e => {
            e.exports = function(e, t) {
                for (var r = -1, o = Array(e); ++r < e;) o[r] = t(r);
                return o
            }
        },
        vyvt: (e, t, r) => {
            var o = r("H87J");
            e.exports = function(e, t) {
                return o(t, (function(t) {
                    return [t, e[t]]
                }))
            }
        },
        JcJ6: (e, t, r) => {
            var o = r("Syyo"),
                n = r("H87J"),
                i = r("wxYD"),
                a = r("a88S"),
                l = o ? o.prototype : void 0,
                s = l ? l.toString : void 0;
            e.exports = function e(t) {
                if ("string" == typeof t) return t;
                if (i(t)) return n(t, e) + "";
                if (a(t)) return s ? s.call(t) : "";
                var r = t + "";
                return "0" == r && 1 / t == -Infinity ? "-0" : r
            }
        },
        I1fX: (e, t, r) => {
            var o = r("6XIJ"),
                n = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, o(e) + 1).replace(n, "") : e
            }
        },
        SU8Q: e => {
            e.exports = function(e) {
                return function(t) {
                    return e(t)
                }
            }
        },
        S0iI: e => {
            e.exports = function(e, t) {
                return e.has(t)
            }
        },
        xoyU: (e, t, r) => {
            var o = r("wxYD"),
                n = r("i7nn"),
                i = r("SoOq"),
                a = r("dw5g");
            e.exports = function(e, t) {
                return o(e) ? e : n(e, t) ? [e] : i(a(e))
            }
        },
        EAGB: (e, t, r) => {
            var o = r("mGzy");
            e.exports = function(e) {
                var t = new e.constructor(e.byteLength);
                return new o(t).set(new o(e)), t
            }
        },
        Grae: (e, t, r) => {
            e = r.nmd(e);
            var o = r("IBsm"),
                n = t && !t.nodeType && t,
                i = n && e && !e.nodeType && e,
                a = i && i.exports === n ? o.Buffer : void 0,
                l = a ? a.allocUnsafe : void 0;
            e.exports = function(e, t) {
                if (t) return e.slice();
                var r = e.length,
                    o = l ? l(r) : new e.constructor(r);
                return e.copy(o), o
            }
        },
        "6Rtw": (e, t, r) => {
            var o = r("EAGB");
            e.exports = function(e, t) {
                var r = t ? o(e.buffer) : e.buffer;
                return new e.constructor(r, e.byteOffset, e.length)
            }
        },
        "6sC/": e => {
            var t = Math.max;
            e.exports = function(e, r, o, n) {
                for (var i = -1, a = e.length, l = o.length, s = -1, u = r.length, c = t(a - l, 0), p = Array(u + c), d = !n; ++s < u;) p[s] = r[s];
                for (; ++i < l;)(d || i < a) && (p[o[i]] = e[i]);
                for (; c--;) p[s++] = e[i++];
                return p
            }
        },
        gGwV: e => {
            var t = Math.max;
            e.exports = function(e, r, o, n) {
                for (var i = -1, a = e.length, l = -1, s = o.length, u = -1, c = r.length, p = t(a - s, 0), d = Array(p + c), f = !n; ++i < p;) d[i] = e[i];
                for (var g = i; ++u < c;) d[g + u] = r[u];
                for (; ++l < s;)(f || i < a) && (d[g + o[l]] = e[i++]);
                return d
            }
        },
        QT01: e => {
            e.exports = function(e, t) {
                var r = -1,
                    o = e.length;
                for (t || (t = Array(o)); ++r < o;) t[r] = e[r];
                return t
            }
        },
        LtXa: (e, t, r) => {
            var o = r("c72w"),
                n = r("wC3K");
            e.exports = function(e, t, r, i) {
                var a = !r;
                r || (r = {});
                for (var l = -1, s = t.length; ++l < s;) {
                    var u = t[l],
                        c = i ? i(r[u], e[u], u, r, e) : void 0;
                    void 0 === c && (c = e[u]), a ? n(r, u, c) : o(r, u, c)
                }
                return r
            }
        },
        "3KBa": (e, t, r) => {
            var o = r("IBsm")["__core-js_shared__"];
            e.exports = o
        },
        "qFO/": e => {
            e.exports = function(e, t) {
                for (var r = e.length, o = 0; r--;) e[r] === t && ++o;
                return o
            }
        },
        wpQC: (e, t, r) => {
            var o = r("R3TX"),
                n = r("R5u7");
            e.exports = function(e) {
                return o((function(t, r) {
                    var o = -1,
                        i = r.length,
                        a = i > 1 ? r[i - 1] : void 0,
                        l = i > 2 ? r[2] : void 0;
                    for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, l && n(r[0], r[1], l) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++o < i;) {
                        var s = r[o];
                        s && e(t, s, o, a)
                    }
                    return t
                }))
            }
        },
        bz5b: (e, t, r) => {
            var o = r("9y2L");
            e.exports = function(e, t) {
                return function(r, n) {
                    if (null == r) return r;
                    if (!o(r)) return e(r, n);
                    for (var i = r.length, a = t ? i : -1, l = Object(r);
                        (t ? a-- : ++a < i) && !1 !== n(l[a], a, l););
                    return r
                }
            }
        },
        RFxK: e => {
            e.exports = function(e) {
                return function(t, r, o) {
                    for (var n = -1, i = Object(t), a = o(t), l = a.length; l--;) {
                        var s = a[e ? l : ++n];
                        if (!1 === r(i[s], s, i)) break
                    }
                    return t
                }
            }
        },
        HCUT: (e, t, r) => {
            var o = r("iWTG"),
                n = r("IBsm");
            e.exports = function(e, t, r) {
                var i = 1 & t,
                    a = o(e);
                return function t() {
                    var o = this && this !== n && this instanceof t ? a : e;
                    return o.apply(i ? r : this, arguments)
                }
            }
        },
        iWTG: (e, t, r) => {
            var o = r("vGGS"),
                n = r("tQYX");
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
                    var r = o(e.prototype),
                        i = e.apply(r, t);
                    return n(i) ? i : r
                }
            }
        },
        LtMG: (e, t, r) => {
            var o = r("zaNA"),
                n = r("iWTG"),
                i = r("JtPM"),
                a = r("kBvp"),
                l = r("4mQY"),
                s = r("AeOa"),
                u = r("IBsm");
            e.exports = function(e, t, r) {
                var c = n(e);
                return function n() {
                    for (var p = arguments.length, d = Array(p), f = p, g = l(n); f--;) d[f] = arguments[f];
                    var b = p < 3 && d[0] !== g && d[p - 1] !== g ? [] : s(d, g);
                    if ((p -= b.length) < r) return a(e, t, i, n.placeholder, void 0, d, b, void 0, void 0, r - p);
                    var h = this && this !== u && this instanceof n ? c : e;
                    return o(h, this, d)
                }
            }
        },
        tUbk: (e, t, r) => {
            var o = r("0+c5"),
                n = r("cH1A"),
                i = r("rjis"),
                a = r("rKb1"),
                l = r("wxYD"),
                s = r("/Bkq");
            e.exports = function(e) {
                return n((function(t) {
                    var r = t.length,
                        n = r,
                        u = o.prototype.thru;
                    for (e && t.reverse(); n--;) {
                        var c = t[n];
                        if ("function" != typeof c) throw new TypeError("Expected a function");
                        if (u && !p && "wrapper" == a(c)) var p = new o([], !0)
                    }
                    for (n = p ? n : r; ++n < r;) {
                        c = t[n];
                        var d = a(c),
                            f = "wrapper" == d ? i(c) : void 0;
                        p = f && s(f[0]) && 424 == f[1] && !f[4].length && 1 == f[9] ? p[a(f[0])].apply(p, f[3]) : 1 == c.length && s(c) ? p[d]() : p.thru(c)
                    }
                    return function() {
                        var e = arguments,
                            o = e[0];
                        if (p && 1 == e.length && l(o)) return p.plant(o).value();
                        for (var n = 0, i = r ? t[n].apply(this, e) : o; ++n < r;) i = t[n].call(this, i);
                        return i
                    }
                }))
            }
        },
        JtPM: (e, t, r) => {
            var o = r("6sC/"),
                n = r("gGwV"),
                i = r("qFO/"),
                a = r("iWTG"),
                l = r("kBvp"),
                s = r("4mQY"),
                u = r("MRwE"),
                c = r("AeOa"),
                p = r("IBsm");
            e.exports = function e(t, r, d, f, g, b, h, x, m, v) {
                var y = 128 & r,
                    w = 1 & r,
                    S = 2 & r,
                    k = 24 & r,
                    C = 512 & r,
                    B = S ? void 0 : a(t);
                return function _() {
                    for (var z = arguments.length, A = Array(z), E = z; E--;) A[E] = arguments[E];
                    if (k) var F = s(_),
                        I = i(A, F);
                    if (f && (A = o(A, f, g, k)), b && (A = n(A, b, h, k)), z -= I, k && z < v) {
                        var H = c(A, F);
                        return l(t, r, e, _.placeholder, d, A, H, x, m, v - z)
                    }
                    var j = w ? d : this,
                        D = S ? j[t] : t;
                    return z = A.length, x ? A = u(A, x) : C && z > 1 && A.reverse(), y && m < z && (A.length = m), this && this !== p && this instanceof _ && (D = B || a(D)), D.apply(j, A)
                }
            }
        },
        I6tc: (e, t, r) => {
            var o = r("zaNA"),
                n = r("iWTG"),
                i = r("IBsm");
            e.exports = function(e, t, r, a) {
                var l = 1 & t,
                    s = n(e);
                return function t() {
                    for (var n = -1, u = arguments.length, c = -1, p = a.length, d = Array(p + u), f = this && this !== i && this instanceof t ? s : e; ++c < p;) d[c] = a[c];
                    for (; u--;) d[c++] = arguments[++n];
                    return o(f, l ? r : this, d)
                }
            }
        },
        kBvp: (e, t, r) => {
            var o = r("/Bkq"),
                n = r("SStt"),
                i = r("E2v+");
            e.exports = function(e, t, r, a, l, s, u, c, p, d) {
                var f = 8 & t;
                t |= f ? 32 : 64, 4 & (t &= ~(f ? 64 : 32)) || (t &= -4);
                var g = [e, t, l, f ? s : void 0, f ? u : void 0, f ? void 0 : s, f ? void 0 : u, c, p, d],
                    b = r.apply(void 0, g);
                return o(e) && n(b, g), b.placeholder = a, i(b, e, t)
            }
        },
        zWkt: (e, t, r) => {
            var o = r("vyvt"),
                n = r("kkM+"),
                i = r("aURW"),
                a = r("5KBi");
            e.exports = function(e) {
                return function(t) {
                    var r = n(t);
                    return "[object Map]" == r ? i(t) : "[object Set]" == r ? a(t) : o(t, e(t))
                }
            }
        },
        "P+cI": (e, t, r) => {
            var o = r("uA6v"),
                n = r("HCUT"),
                i = r("LtMG"),
                a = r("JtPM"),
                l = r("I6tc"),
                s = r("rjis"),
                u = r("9Oiy"),
                c = r("SStt"),
                p = r("E2v+"),
                d = r("m2YG"),
                f = Math.max;
            e.exports = function(e, t, r, g, b, h, x, m) {
                var v = 2 & t;
                if (!v && "function" != typeof e) throw new TypeError("Expected a function");
                var y = g ? g.length : 0;
                if (y || (t &= -97, g = b = void 0), x = void 0 === x ? x : f(d(x), 0), m = void 0 === m ? m : d(m), y -= b ? b.length : 0, 64 & t) {
                    var w = g,
                        S = b;
                    g = b = void 0
                }
                var k = v ? void 0 : s(e),
                    C = [e, t, r, g, b, w, S, h, x, m];
                if (k && u(C, k), e = C[0], t = C[1], r = C[2], g = C[3], b = C[4], !(m = C[9] = void 0 === C[9] ? v ? 0 : e.length : f(C[9] - y, 0)) && 24 & t && (t &= -25), t && 1 != t) B = 8 == t || 16 == t ? i(e, t, m) : 32 != t && 33 != t || b.length ? a.apply(void 0, C) : l(e, t, r, g);
                else var B = n(e, t, r);
                return p((k ? o : c)(B, C), e, t)
            }
        },
        "Pz+s": (e, t, r) => {
            var o = r("vxC8"),
                n = function() {
                    try {
                        var e = o(Object, "defineProperty");
                        return e({}, "", {}), e
                    } catch (t) {}
                }();
            e.exports = n
        },
        "ZZ+W": (e, t, r) => {
            var o = r("JBn+"),
                n = r("myUI"),
                i = r("S0iI");
            e.exports = function(e, t, r, a, l, s) {
                var u = 1 & r,
                    c = e.length,
                    p = t.length;
                if (c != p && !(u && p > c)) return !1;
                var d = s.get(e),
                    f = s.get(t);
                if (d && f) return d == t && f == e;
                var g = -1,
                    b = !0,
                    h = 2 & r ? new o : void 0;
                for (s.set(e, t), s.set(t, e); ++g < c;) {
                    var x = e[g],
                        m = t[g];
                    if (a) var v = u ? a(m, x, g, t, e, s) : a(x, m, g, e, t, s);
                    if (void 0 !== v) {
                        if (v) continue;
                        b = !1;
                        break
                    }
                    if (h) {
                        if (!n(t, (function(e, t) {
                                if (!i(h, t) && (x === e || l(x, e, r, a, s))) return h.push(t)
                            }))) {
                            b = !1;
                            break
                        }
                    } else if (x !== m && !l(x, m, r, a, s)) {
                        b = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), b
            }
        },
        R3gn: (e, t, r) => {
            var o = r("Syyo"),
                n = r("mGzy"),
                i = r("pPzx"),
                a = r("ZZ+W"),
                l = r("aURW"),
                s = r("XlL0"),
                u = o ? o.prototype : void 0,
                c = u ? u.valueOf : void 0;
            e.exports = function(e, t, r, o, u, p, d) {
                switch (r) {
                    case "[object DataView]":
                        if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
                        e = e.buffer, t = t.buffer;
                    case "[object ArrayBuffer]":
                        return !(e.byteLength != t.byteLength || !p(new n(e), new n(t)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return i(+e, +t);
                    case "[object Error]":
                        return e.name == t.name && e.message == t.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return e == t + "";
                    case "[object Map]":
                        var f = l;
                    case "[object Set]":
                        var g = 1 & o;
                        if (f || (f = s), e.size != t.size && !g) return !1;
                        var b = d.get(e);
                        if (b) return b == t;
                        o |= 2, d.set(e, t);
                        var h = a(f(e), f(t), o, u, p, d);
                        return d.delete(e), h;
                    case "[object Symbol]":
                        if (c) return c.call(e) == c.call(t)
                }
                return !1
            }
        },
        yZHP: (e, t, r) => {
            var o = r("tlBq"),
                n = Object.prototype.hasOwnProperty;
            e.exports = function(e, t, r, i, a, l) {
                var s = 1 & r,
                    u = o(e),
                    c = u.length;
                if (c != o(t).length && !s) return !1;
                for (var p = c; p--;) {
                    var d = u[p];
                    if (!(s ? d in t : n.call(t, d))) return !1
                }
                var f = l.get(e),
                    g = l.get(t);
                if (f && g) return f == t && g == e;
                var b = !0;
                l.set(e, t), l.set(t, e);
                for (var h = s; ++p < c;) {
                    var x = e[d = u[p]],
                        m = t[d];
                    if (i) var v = s ? i(m, x, d, t, e, l) : i(x, m, d, e, t, l);
                    if (!(void 0 === v ? x === m || a(x, m, r, i, l) : v)) {
                        b = !1;
                        break
                    }
                    h || (h = "constructor" == d)
                }
                if (b && !h) {
                    var y = e.constructor,
                        w = t.constructor;
                    y == w || !("constructor" in e) || !("constructor" in t) || "function" == typeof y && y instanceof y && "function" == typeof w && w instanceof w || (b = !1)
                }
                return l.delete(e), l.delete(t), b
            }
        },
        cH1A: (e, t, r) => {
            var o = r("1xil"),
                n = r("UAs9"),
                i = r("7Pat");
            e.exports = function(e) {
                return i(n(e, void 0, o), e + "")
            }
        },
        e93E: (e, t, r) => {
            var o = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
            e.exports = o
        },
        tlBq: (e, t, r) => {
            var o = r("pIod"),
                n = r("70Le"),
                i = r("BlJA");
            e.exports = function(e) {
                return o(e, i, n)
            }
        },
        rjis: (e, t, r) => {
            var o = r("BVx2"),
                n = r("nnm9"),
                i = o ? function(e) {
                    return o.get(e)
                } : n;
            e.exports = i
        },
        rKb1: (e, t, r) => {
            var o = r("QaiR"),
                n = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = e.name + "", r = o[t], i = n.call(o, t) ? r.length : 0; i--;) {
                    var a = r[i],
                        l = a.func;
                    if (null == l || l == e) return a.name
                }
                return t
            }
        },
        "4mQY": e => {
            e.exports = function(e) {
                return e.placeholder
            }
        },
        JNqh: (e, t, r) => {
            var o = r("6UKJ");
            e.exports = function(e, t) {
                var r = e.__data__;
                return o(t) ? r["string" == typeof t ? "string" : "hash"] : r.map
            }
        },
        hMsr: (e, t, r) => {
            var o = r("+tCn"),
                n = r("BlJA");
            e.exports = function(e) {
                for (var t = n(e), r = t.length; r--;) {
                    var i = t[r],
                        a = e[i];
                    t[r] = [i, a, o(a)]
                }
                return t
            }
        },
        vxC8: (e, t, r) => {
            var o = r("5nKN"),
                n = r("4p/L");
            e.exports = function(e, t) {
                var r = n(e, t);
                return o(r) ? r : void 0
            }
        },
        "/wCD": (e, t, r) => {
            var o = r("TAtK")(Object.getPrototypeOf, Object);
            e.exports = o
        },
        KCLV: (e, t, r) => {
            var o = r("Syyo"),
                n = Object.prototype,
                i = n.hasOwnProperty,
                a = n.toString,
                l = o ? o.toStringTag : void 0;
            e.exports = function(e) {
                var t = i.call(e, l),
                    r = e[l];
                try {
                    e[l] = void 0;
                    var o = !0
                } catch (s) {}
                var n = a.call(e);
                return o && (t ? e[l] = r : delete e[l]), n
            }
        },
        "70Le": (e, t, r) => {
            var o = r("W0vE"),
                n = r("X4R2"),
                i = Object.prototype.propertyIsEnumerable,
                a = Object.getOwnPropertySymbols,
                l = a ? function(e) {
                    return null == e ? [] : (e = Object(e), o(a(e), (function(t) {
                        return i.call(e, t)
                    })))
                } : n;
            e.exports = l
        },
        "kkM+": (e, t, r) => {
            var o = r("QF3D"),
                n = r("qeCs"),
                i = r("IS0S"),
                a = r("OBn4"),
                l = r("4+Vk"),
                s = r("Dhk8"),
                u = r("c18h"),
                c = "[object Map]",
                p = "[object Promise]",
                d = "[object Set]",
                f = "[object WeakMap]",
                g = "[object DataView]",
                b = u(o),
                h = u(n),
                x = u(i),
                m = u(a),
                v = u(l),
                y = s;
            (o && y(new o(new ArrayBuffer(1))) != g || n && y(new n) != c || i && y(i.resolve()) != p || a && y(new a) != d || l && y(new l) != f) && (y = function(e) {
                var t = s(e),
                    r = "[object Object]" == t ? e.constructor : void 0,
                    o = r ? u(r) : "";
                if (o) switch (o) {
                    case b:
                        return g;
                    case h:
                        return c;
                    case x:
                        return p;
                    case m:
                        return d;
                    case v:
                        return f
                }
                return t
            }), e.exports = y
        },
        "4p/L": e => {
            e.exports = function(e, t) {
                return null == e ? void 0 : e[t]
            }
        },
        wafF: e => {
            var t = /\{\n\/\* \[wrapped with (.+)\] \*/,
                r = /,? & /;
            e.exports = function(e) {
                var o = e.match(t);
                return o ? o[1].split(r) : []
            }
        },
        "z+TE": (e, t, r) => {
            var o = r("xoyU"),
                n = r("bvyN"),
                i = r("wxYD"),
                a = r("pnw1"),
                l = r("t0L4"),
                s = r("Ypsa");
            e.exports = function(e, t, r) {
                for (var u = -1, c = (t = o(t, e)).length, p = !1; ++u < c;) {
                    var d = s(t[u]);
                    if (!(p = null != e && r(e, d))) break;
                    e = e[d]
                }
                return p || ++u != c ? p : !!(c = null == e ? 0 : e.length) && l(c) && a(d, c) && (i(e) || n(e))
            }
        },
        "2Fbm": (e, t, r) => {
            var o = r("5pfJ");
            e.exports = function() {
                this.__data__ = o ? o(null) : {}, this.size = 0
            }
        },
        VPai: e => {
            e.exports = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }
        },
        "+fUG": (e, t, r) => {
            var o = r("5pfJ"),
                n = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                if (o) {
                    var r = t[e];
                    return "__lodash_hash_undefined__" === r ? void 0 : r
                }
                return n.call(t, e) ? t[e] : void 0
            }
        },
        QMz8: (e, t, r) => {
            var o = r("5pfJ"),
                n = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                var t = this.__data__;
                return o ? void 0 !== t[e] : n.call(t, e)
            }
        },
        mUsV: (e, t, r) => {
            var o = r("5pfJ");
            e.exports = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = o && void 0 === t ? "__lodash_hash_undefined__" : t, this
            }
        },
        sD1O: (e, t, r) => {
            var o = r("vGGS"),
                n = r("/wCD"),
                i = r("CbIe");
            e.exports = function(e) {
                return "function" != typeof e.constructor || i(e) ? {} : o(n(e))
            }
        },
        kEP7: e => {
            var t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            e.exports = function(e, r) {
                var o = r.length;
                if (!o) return e;
                var n = o - 1;
                return r[n] = (o > 1 ? "& " : "") + r[n], r = r.join(o > 2 ? ", " : " "), e.replace(t, "{\n/* [wrapped with " + r + "] */\n")
            }
        },
        oCTG: (e, t, r) => {
            var o = r("Syyo"),
                n = r("bvyN"),
                i = r("wxYD"),
                a = o ? o.isConcatSpreadable : void 0;
            e.exports = function(e) {
                return i(e) || n(e) || !!(a && e && e[a])
            }
        },
        pnw1: e => {
            var t = /^(?:0|[1-9]\d*)$/;
            e.exports = function(e, r) {
                var o = typeof e;
                return !!(r = null == r ? 9007199254740991 : r) && ("number" == o || "symbol" != o && t.test(e)) && e > -1 && e % 1 == 0 && e < r
            }
        },
        R5u7: (e, t, r) => {
            var o = r("pPzx"),
                n = r("9y2L"),
                i = r("pnw1"),
                a = r("tQYX");
            e.exports = function(e, t, r) {
                if (!a(r)) return !1;
                var l = typeof t;
                return !!("number" == l ? n(r) && i(t, r.length) : "string" == l && t in r) && o(r[t], e)
            }
        },
        i7nn: (e, t, r) => {
            var o = r("wxYD"),
                n = r("a88S"),
                i = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            e.exports = function(e, t) {
                if (o(e)) return !1;
                var r = typeof e;
                return !("number" != r && "symbol" != r && "boolean" != r && null != e && !n(e)) || (a.test(e) || !i.test(e) || null != t && e in Object(t))
            }
        },
        "6UKJ": e => {
            e.exports = function(e) {
                var t = typeof e;
                return "string" == t || "number" == t || "symbol" == t || "boolean" == t ? "__proto__" !== e : null === e
            }
        },
        "/Bkq": (e, t, r) => {
            var o = r("deT9"),
                n = r("rjis"),
                i = r("rKb1"),
                a = r("jm4U");
            e.exports = function(e) {
                var t = i(e),
                    r = a[t];
                if ("function" != typeof r || !(t in o.prototype)) return !1;
                if (e === r) return !0;
                var l = n(r);
                return !!l && e === l[0]
            }
        },
        "9vbJ": (e, t, r) => {
            var o = r("3KBa"),
                n = function() {
                    var e = /[^.]+$/.exec(o && o.keys && o.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }();
            e.exports = function(e) {
                return !!n && n in e
            }
        },
        CbIe: e => {
            var t = Object.prototype;
            e.exports = function(e) {
                var r = e && e.constructor;
                return e === ("function" == typeof r && r.prototype || t)
            }
        },
        "+tCn": (e, t, r) => {
            var o = r("tQYX");
            e.exports = function(e) {
                return e === e && !o(e)
            }
        },
        "8Zrg": e => {
            e.exports = function() {
                this.__data__ = [], this.size = 0
            }
        },
        kwr2: (e, t, r) => {
            var o = r("6QIk"),
                n = Array.prototype.splice;
            e.exports = function(e) {
                var t = this.__data__,
                    r = o(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : n.call(t, r, 1), --this.size, !0)
            }
        },
        "5VYK": (e, t, r) => {
            var o = r("6QIk");
            e.exports = function(e) {
                var t = this.__data__,
                    r = o(t, e);
                return r < 0 ? void 0 : t[r][1]
            }
        },
        "Coc+": (e, t, r) => {
            var o = r("6QIk");
            e.exports = function(e) {
                return o(this.__data__, e) > -1
            }
        },
        LzM7: (e, t, r) => {
            var o = r("6QIk");
            e.exports = function(e, t) {
                var r = this.__data__,
                    n = o(r, e);
                return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
            }
        },
        m5o6: (e, t, r) => {
            var o = r("Tv3l"),
                n = r("+ooz"),
                i = r("qeCs");
            e.exports = function() {
                this.size = 0, this.__data__ = {
                    hash: new o,
                    map: new(i || n),
                    string: new o
                }
            }
        },
        d0UJ: (e, t, r) => {
            var o = r("JNqh");
            e.exports = function(e) {
                var t = o(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }
        },
        eask: (e, t, r) => {
            var o = r("JNqh");
            e.exports = function(e) {
                return o(this, e).get(e)
            }
        },
        "9SKQ": (e, t, r) => {
            var o = r("JNqh");
            e.exports = function(e) {
                return o(this, e).has(e)
            }
        },
        e63W: (e, t, r) => {
            var o = r("JNqh");
            e.exports = function(e, t) {
                var r = o(this, e),
                    n = r.size;
                return r.set(e, t), this.size += r.size == n ? 0 : 1, this
            }
        },
        aURW: e => {
            e.exports = function(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e, o) {
                    r[++t] = [o, e]
                })), r
            }
        },
        "0Ss3": e => {
            e.exports = function(e, t) {
                return function(r) {
                    return null != r && (r[e] === t && (void 0 !== t || e in Object(r)))
                }
            }
        },
        "0+aC": (e, t, r) => {
            var o = r("pFSi");
            e.exports = function(e) {
                var t = o(e, (function(e) {
                        return 500 === r.size && r.clear(), e
                    })),
                    r = t.cache;
                return t
            }
        },
        "9Oiy": (e, t, r) => {
            var o = r("6sC/"),
                n = r("gGwV"),
                i = r("AeOa"),
                a = "__lodash_placeholder__",
                l = 128,
                s = Math.min;
            e.exports = function(e, t) {
                var r = e[1],
                    u = t[1],
                    c = r | u,
                    p = c < 131,
                    d = u == l && 8 == r || u == l && 256 == r && e[7].length <= t[8] || 384 == u && t[7].length <= t[8] && 8 == r;
                if (!p && !d) return e;
                1 & u && (e[2] = t[2], c |= 1 & r ? 0 : 4);
                var f = t[3];
                if (f) {
                    var g = e[3];
                    e[3] = g ? o(g, f, t[4]) : f, e[4] = g ? i(e[3], a) : t[4]
                }
                return (f = t[5]) && (g = e[5], e[5] = g ? n(g, f, t[6]) : f, e[6] = g ? i(e[5], a) : t[6]), (f = t[7]) && (e[7] = f), u & l && (e[8] = null == e[8] ? t[8] : s(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = c, e
            }
        },
        BVx2: (e, t, r) => {
            var o = r("4+Vk"),
                n = o && new o;
            e.exports = n
        },
        "5pfJ": (e, t, r) => {
            var o = r("vxC8")(Object, "create");
            e.exports = o
        },
        OtNC: (e, t, r) => {
            var o = r("TAtK")(Object.keys, Object);
            e.exports = o
        },
        "/UTG": e => {
            e.exports = function(e) {
                var t = [];
                if (null != e)
                    for (var r in Object(e)) t.push(r);
                return t
            }
        },
        T6vp: (e, t, r) => {
            e = r.nmd(e);
            var o = r("e93E"),
                n = t && !t.nodeType && t,
                i = n && e && !e.nodeType && e,
                a = i && i.exports === n && o.process,
                l = function() {
                    try {
                        var e = i && i.require && i.require("util").types;
                        return e || a && a.binding && a.binding("util")
                    } catch (t) {}
                }();
            e.exports = l
        },
        kHoZ: e => {
            var t = Object.prototype.toString;
            e.exports = function(e) {
                return t.call(e)
            }
        },
        TAtK: e => {
            e.exports = function(e, t) {
                return function(r) {
                    return e(t(r))
                }
            }
        },
        UAs9: (e, t, r) => {
            var o = r("zaNA"),
                n = Math.max;
            e.exports = function(e, t, r) {
                return t = n(void 0 === t ? e.length - 1 : t, 0),
                    function() {
                        for (var i = arguments, a = -1, l = n(i.length - t, 0), s = Array(l); ++a < l;) s[a] = i[t + a];
                        a = -1;
                        for (var u = Array(t + 1); ++a < t;) u[a] = i[a];
                        return u[t] = r(s), o(e, this, u)
                    }
            }
        },
        QaiR: e => {
            e.exports = {}
        },
        MRwE: (e, t, r) => {
            var o = r("QT01"),
                n = r("pnw1"),
                i = Math.min;
            e.exports = function(e, t) {
                for (var r = e.length, a = i(t.length, r), l = o(e); a--;) {
                    var s = t[a];
                    e[a] = n(s, r) ? l[s] : void 0
                }
                return e
            }
        },
        AeOa: e => {
            var t = "__lodash_placeholder__";
            e.exports = function(e, r) {
                for (var o = -1, n = e.length, i = 0, a = []; ++o < n;) {
                    var l = e[o];
                    l !== r && l !== t || (e[o] = t, a[i++] = o)
                }
                return a
            }
        },
        IBsm: (e, t, r) => {
            var o = r("e93E"),
                n = "object" == typeof self && self && self.Object === Object && self,
                i = o || n || Function("return this")();
            e.exports = i
        },
        LL3N: e => {
            e.exports = function(e, t) {
                if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t]
            }
        },
        qjF7: e => {
            e.exports = function(e) {
                return this.__data__.set(e, "__lodash_hash_undefined__"), this
            }
        },
        cEmw: e => {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        },
        SStt: (e, t, r) => {
            var o = r("uA6v"),
                n = r("kG2z")(o);
            e.exports = n
        },
        XlL0: e => {
            e.exports = function(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = e
                })), r
            }
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
        "7Pat": (e, t, r) => {
            var o = r("+7q0"),
                n = r("kG2z")(o);
            e.exports = n
        },
        "E2v+": (e, t, r) => {
            var o = r("wafF"),
                n = r("kEP7"),
                i = r("7Pat"),
                a = r("p4bK");
            e.exports = function(e, t, r) {
                var l = t + "";
                return i(e, n(l, a(o(l), r)))
            }
        },
        kG2z: e => {
            var t = Date.now;
            e.exports = function(e) {
                var r = 0,
                    o = 0;
                return function() {
                    var n = t(),
                        i = 16 - (n - o);
                    if (o = n, i > 0) {
                        if (++r >= 800) return arguments[0]
                    } else r = 0;
                    return e.apply(void 0, arguments)
                }
            }
        },
        RNlM: (e, t, r) => {
            var o = r("+ooz");
            e.exports = function() {
                this.__data__ = new o, this.size = 0
            }
        },
        E4ao: e => {
            e.exports = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }
        },
        BSqe: e => {
            e.exports = function(e) {
                return this.__data__.get(e)
            }
        },
        L6um: e => {
            e.exports = function(e) {
                return this.__data__.has(e)
            }
        },
        "4/ik": (e, t, r) => {
            var o = r("+ooz"),
                n = r("qeCs"),
                i = r("hyzI");
            e.exports = function(e, t) {
                var r = this.__data__;
                if (r instanceof o) {
                    var a = r.__data__;
                    if (!n || a.length < 199) return a.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new i(a)
                }
                return r.set(e, t), this.size = r.size, this
            }
        },
        n1QJ: e => {
            e.exports = function(e, t, r) {
                for (var o = r - 1, n = e.length; ++o < n;)
                    if (e[o] === t) return o;
                return -1
            }
        },
        SoOq: (e, t, r) => {
            var o = r("0+aC"),
                n = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                i = /\\(\\)?/g,
                a = o((function(e) {
                    var t = [];
                    return 46 === e.charCodeAt(0) && t.push(""), e.replace(n, (function(e, r, o, n) {
                        t.push(o ? n.replace(i, "$1") : r || e)
                    })), t
                }));
            e.exports = a
        },
        Ypsa: (e, t, r) => {
            var o = r("a88S");
            e.exports = function(e) {
                if ("string" == typeof e || o(e)) return e;
                var t = e + "";
                return "0" == t && 1 / e == -Infinity ? "-0" : t
            }
        },
        c18h: e => {
            var t = Function.prototype.toString;
            e.exports = function(e) {
                if (null != e) {
                    try {
                        return t.call(e)
                    } catch (r) {}
                    try {
                        return e + ""
                    } catch (r) {}
                }
                return ""
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
            var o = r("LmOH"),
                n = r("OfKG"),
                i = [
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
                return o(i, (function(r) {
                    var o = "_." + r[0];
                    t & r[1] && !n(e, o) && e.push(o)
                })), e.sort()
            }
        },
        "e+ll": (e, t, r) => {
            var o = r("deT9"),
                n = r("0+c5"),
                i = r("QT01");
            e.exports = function(e) {
                if (e instanceof o) return e.clone();
                var t = new n(e.__wrapped__, e.__chain__);
                return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }
        },
        eN33: e => {
            e.exports = function(e) {
                return function() {
                    return e
                }
            }
        },
        "3POh": (e, t, r) => {
            var o = r("P+cI");

            function n(e, t, r) {
                var i = o(e, 16, void 0, void 0, void 0, void 0, void 0, t = r ? void 0 : t);
                return i.placeholder = n.placeholder, i
            }
            n.placeholder = {}, e.exports = n
        },
        pPzx: e => {
            e.exports = function(e, t) {
                return e === t || e !== e && t !== t
            }
        },
        "1xil": (e, t, r) => {
            var o = r("YpBQ");
            e.exports = function(e) {
                return (null == e ? 0 : e.length) ? o(e, 1) : []
            }
        },
        jPI1: (e, t, r) => {
            var o = r("tUbk")();
            e.exports = o
        },
        "2srY": (e, t, r) => {
            var o = r("w2Tz");
            e.exports = function(e, t, r) {
                var n = null == e ? void 0 : o(e, t);
                return void 0 === n ? r : n
            }
        },
        "NW/2": (e, t, r) => {
            var o = r("JYmt"),
                n = r("z+TE");
            e.exports = function(e, t) {
                return null != e && n(e, t, o)
            }
        },
        zWgn: e => {
            e.exports = function(e) {
                return e
            }
        },
        bvyN: (e, t, r) => {
            var o = r("/30y"),
                n = r("tLQN"),
                i = Object.prototype,
                a = i.hasOwnProperty,
                l = i.propertyIsEnumerable,
                s = o(function() {
                    return arguments
                }()) ? o : function(e) {
                    return n(e) && a.call(e, "callee") && !l.call(e, "callee")
                };
            e.exports = s
        },
        wxYD: e => {
            var t = Array.isArray;
            e.exports = t
        },
        "9y2L": (e, t, r) => {
            var o = r("2q8g"),
                n = r("t0L4");
            e.exports = function(e) {
                return null != e && n(e.length) && !o(e)
            }
        },
        Ndl3: (e, t, r) => {
            var o = r("9y2L"),
                n = r("tLQN");
            e.exports = function(e) {
                return n(e) && o(e)
            }
        },
        "3ajY": (e, t, r) => {
            e = r.nmd(e);
            var o = r("IBsm"),
                n = r("DjCF"),
                i = t && !t.nodeType && t,
                a = i && e && !e.nodeType && e,
                l = a && a.exports === i ? o.Buffer : void 0,
                s = (l ? l.isBuffer : void 0) || n;
            e.exports = s
        },
        "2q8g": (e, t, r) => {
            var o = r("Dhk8"),
                n = r("tQYX");
            e.exports = function(e) {
                if (!n(e)) return !1;
                var t = o(e);
                return "[object Function]" == t || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }
        },
        t0L4: e => {
            e.exports = function(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }
        },
        tQYX: e => {
            e.exports = function(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }
        },
        tLQN: e => {
            e.exports = function(e) {
                return null != e && "object" == typeof e
            }
        },
        Kkar: (e, t, r) => {
            var o = r("Dhk8"),
                n = r("/wCD"),
                i = r("tLQN"),
                a = Function.prototype,
                l = Object.prototype,
                s = a.toString,
                u = l.hasOwnProperty,
                c = s.call(Object);
            e.exports = function(e) {
                if (!i(e) || "[object Object]" != o(e)) return !1;
                var t = n(e);
                if (null === t) return !0;
                var r = u.call(t, "constructor") && t.constructor;
                return "function" == typeof r && r instanceof r && s.call(r) == c
            }
        },
        a88S: (e, t, r) => {
            var o = r("Dhk8"),
                n = r("tLQN");
            e.exports = function(e) {
                return "symbol" == typeof e || n(e) && "[object Symbol]" == o(e)
            }
        },
        Qd2C: (e, t, r) => {
            var o = r("7/jS"),
                n = r("SU8Q"),
                i = r("T6vp"),
                a = i && i.isTypedArray,
                l = a ? n(a) : o;
            e.exports = l
        },
        BlJA: (e, t, r) => {
            var o = r("rmhs"),
                n = r("4uJK"),
                i = r("9y2L");
            e.exports = function(e) {
                return i(e) ? o(e) : n(e)
            }
        },
        "zH+d": (e, t, r) => {
            var o = r("rmhs"),
                n = r("p2lg"),
                i = r("9y2L");
            e.exports = function(e) {
                return i(e) ? o(e, !0) : n(e)
            }
        },
        pFSi: (e, t, r) => {
            var o = r("hyzI");

            function n(e, t) {
                if ("function" != typeof e || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var r = function() {
                    var o = arguments,
                        n = t ? t.apply(this, o) : o[0],
                        i = r.cache;
                    if (i.has(n)) return i.get(n);
                    var a = e.apply(this, o);
                    return r.cache = i.set(n, a) || i, a
                };
                return r.cache = new(n.Cache || o), r
            }
            n.Cache = o, e.exports = n
        },
        H8sf: (e, t, r) => {
            var o = r("MzY2"),
                n = r("wpQC")((function(e, t, r) {
                    o(e, t, r)
                }));
            e.exports = n
        },
        nnm9: e => {
            e.exports = function() {}
        },
        "1EDM": (e, t, r) => {
            var o = r("EI7Z"),
                n = r("CEyS"),
                i = r("i7nn"),
                a = r("Ypsa");
            e.exports = function(e) {
                return i(e) ? o(a(e)) : n(e)
            }
        },
        veKZ: (e, t, r) => {
            var o = r("cPMt"),
                n = r("Q4oW"),
                i = r("S3pA"),
                a = r("5q8j"),
                l = r("wxYD");
            e.exports = function(e, t, r) {
                var s = l(e) ? o : a,
                    u = arguments.length < 3;
                return s(e, i(t, 4), r, u, n)
            }
        },
        X4R2: e => {
            e.exports = function() {
                return []
            }
        },
        DjCF: e => {
            e.exports = function() {
                return !1
            }
        },
        fWyh: (e, t, r) => {
            var o = r("nvU9"),
                n = 1 / 0;
            e.exports = function(e) {
                return e ? (e = o(e)) === n || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
            }
        },
        m2YG: (e, t, r) => {
            var o = r("fWyh");
            e.exports = function(e) {
                var t = o(e),
                    r = t % 1;
                return t === t ? r ? t - r : t : 0
            }
        },
        nvU9: (e, t, r) => {
            var o = r("I1fX"),
                n = r("tQYX"),
                i = r("a88S"),
                a = /^[-+]0x[0-9a-f]+$/i,
                l = /^0b[01]+$/i,
                s = /^0o[0-7]+$/i,
                u = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return NaN;
                if (n(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = n(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = o(e);
                var r = l.test(e);
                return r || s.test(e) ? u(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
            }
        },
        "pL+m": (e, t, r) => {
            var o = r("zWkt")(r("BlJA"));
            e.exports = o
        },
        "4ScB": (e, t, r) => {
            var o = r("LtXa"),
                n = r("zH+d");
            e.exports = function(e) {
                return o(e, n(e))
            }
        },
        dw5g: (e, t, r) => {
            var o = r("JcJ6");
            e.exports = function(e) {
                return null == e ? "" : o(e)
            }
        },
        jm4U: (e, t, r) => {
            var o = r("deT9"),
                n = r("0+c5"),
                i = r("obGE"),
                a = r("wxYD"),
                l = r("tLQN"),
                s = r("e+ll"),
                u = Object.prototype.hasOwnProperty;

            function c(e) {
                if (l(e) && !a(e) && !(e instanceof o)) {
                    if (e instanceof n) return e;
                    if (u.call(e, "__wrapped__")) return s(e)
                }
                return new n(e)
            }
            c.prototype = i.prototype, c.prototype.constructor = c, e.exports = c
        },
        FF9q: function(e, t, r) {
            var o = r("F63i");
            (function() {
                var t, r, n, i, a, l;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof o && null !== o && o.hrtime ? (e.exports = function() {
                    return (t() - a) / 1e6
                }, r = o.hrtime, i = (t = function() {
                    var e;
                    return 1e9 * (e = r())[0] + e[1]
                })(), l = 1e9 * o.uptime(), a = i - l) : Date.now ? (e.exports = function() {
                    return Date.now() - n
                }, n = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - n
                }, n = (new Date).getTime())
            }).call(this)
        },
        "0xii": (e, t, r) => {
            for (var o = r("FF9q"), n = window, i = ["moz", "webkit"], a = "AnimationFrame", l = n["request" + a], s = n["cancel" + a] || n["cancelRequest" + a], u = 0; !l && u < i.length; u++) l = n[i[u] + "Request" + a], s = n[i[u] + "Cancel" + a] || n[i[u] + "CancelRequest" + a];
            if (!l || !s) {
                var c = 0,
                    p = 0,
                    d = [];
                l = function(e) {
                    if (0 === d.length) {
                        var t = o(),
                            r = Math.max(0, 16.666666666666668 - (t - c));
                        c = r + t, setTimeout((function() {
                            var e = d.slice(0);
                            d.length = 0;
                            for (var t = 0; t < e.length; t++)
                                if (!e[t].cancelled) try {
                                    e[t].callback(c)
                                } catch (r) {
                                    setTimeout((function() {
                                        throw r
                                    }), 0)
                                }
                        }), Math.round(r))
                    }
                    return d.push({
                        handle: ++p,
                        callback: e,
                        cancelled: !1
                    }), p
                }, s = function(e) {
                    for (var t = 0; t < d.length; t++) d[t].handle === e && (d[t].cancelled = !0)
                }
            }
            e.exports = function(e) {
                return l.call(n, e)
            }, e.exports.cancel = function() {
                s.apply(n, arguments)
            }, e.exports.polyfill = function(e) {
                e || (e = n), e.requestAnimationFrame = l, e.cancelAnimationFrame = s
            }
        },
        Z6fc: (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                },
                n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }();

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = i(r("XwoM")),
                l = i(r("vmhH")),
                s = i(r("RU0+")),
                u = i(r("7k4P")),
                c = i(r("0xii")),
                p = i(r("KDEh")),
                d = i(r("DTvD")),
                f = i(r("aWzz")),
                g = 1e3 / 60,
                b = function(e) {
                    function t(r) {
                        var n = this;
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e.call(this, r), this.wasAnimating = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyle = null, this.clearUnreadPropStyle = function(e) {
                            var t = !1,
                                r = n.state,
                                i = r.currentStyle,
                                a = r.currentVelocity,
                                l = r.lastIdealStyle,
                                s = r.lastIdealVelocity;
                            for (var u in e)
                                if (Object.prototype.hasOwnProperty.call(e, u)) {
                                    var c = e[u];
                                    "number" === typeof c && (t || (t = !0, i = o({}, i), a = o({}, a), l = o({}, l), s = o({}, s)), i[u] = c, a[u] = 0, l[u] = c, s[u] = 0)
                                }
                            t && n.setState({
                                currentStyle: i,
                                currentVelocity: a,
                                lastIdealStyle: l,
                                lastIdealVelocity: s
                            })
                        }, this.startAnimationIfNecessary = function() {
                            n.animationID = c.default((function(e) {
                                var t = n.props.style;
                                if (p.default(n.state.currentStyle, t, n.state.currentVelocity)) return n.wasAnimating && n.props.onRest && n.props.onRest(), n.animationID = null, n.wasAnimating = !1, void(n.accumulatedTime = 0);
                                n.wasAnimating = !0;
                                var r = e || u.default(),
                                    o = r - n.prevTime;
                                if (n.prevTime = r, n.accumulatedTime = n.accumulatedTime + o, n.accumulatedTime > 10 * g && (n.accumulatedTime = 0), 0 === n.accumulatedTime) return n.animationID = null, void n.startAnimationIfNecessary();
                                var i = (n.accumulatedTime - Math.floor(n.accumulatedTime / g) * g) / g,
                                    a = Math.floor(n.accumulatedTime / g),
                                    l = {},
                                    c = {},
                                    d = {},
                                    f = {};
                                for (var b in t)
                                    if (Object.prototype.hasOwnProperty.call(t, b)) {
                                        var h = t[b];
                                        if ("number" === typeof h) d[b] = h, f[b] = 0, l[b] = h, c[b] = 0;
                                        else {
                                            for (var x = n.state.lastIdealStyle[b], m = n.state.lastIdealVelocity[b], v = 0; v < a; v++) {
                                                var y = s.default(g / 1e3, x, m, h.val, h.stiffness, h.damping, h.precision);
                                                x = y[0], m = y[1]
                                            }
                                            var w = s.default(g / 1e3, x, m, h.val, h.stiffness, h.damping, h.precision),
                                                S = w[0],
                                                k = w[1];
                                            d[b] = x + (S - x) * i, f[b] = m + (k - m) * i, l[b] = x, c[b] = m
                                        }
                                    }
                                n.animationID = null, n.accumulatedTime -= a * g, n.setState({
                                    currentStyle: d,
                                    currentVelocity: f,
                                    lastIdealStyle: l,
                                    lastIdealVelocity: c
                                }), n.unreadPropStyle = null, n.startAnimationIfNecessary()
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
                    }(t, e), n(t, null, [{
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
                            o = t || l.default(r),
                            n = a.default(o);
                        return {
                            currentStyle: o,
                            currentVelocity: n,
                            lastIdealStyle: o,
                            lastIdealVelocity: n
                        }
                    }, t.prototype.componentDidMount = function() {
                        this.prevTime = u.default(), this.startAnimationIfNecessary()
                    }, t.prototype.componentWillReceiveProps = function(e) {
                        null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle), this.unreadPropStyle = e.style, null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
                    }, t.prototype.componentWillUnmount = function() {
                        null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
                    }, t.prototype.render = function() {
                        var e = this.props.children(this.state.currentStyle);
                        return e && d.default.Children.only(e)
                    }, t
                }(d.default.Component);
            t.default = b, e.exports = t.default
        },
        "7Xug": (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                },
                n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }();

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = i(r("XwoM")),
                l = i(r("vmhH")),
                s = i(r("RU0+")),
                u = i(r("7k4P")),
                c = i(r("0xii")),
                p = i(r("KDEh")),
                d = i(r("DTvD")),
                f = i(r("aWzz")),
                g = 1e3 / 60;
            var b = function(e) {
                function t(r) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, r), this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = n.state, r = t.currentStyles, i = t.currentVelocities, a = t.lastIdealStyles, l = t.lastIdealVelocities, s = !1, u = 0; u < e.length; u++) {
                            var c = e[u],
                                p = !1;
                            for (var d in c)
                                if (Object.prototype.hasOwnProperty.call(c, d)) {
                                    var f = c[d];
                                    "number" === typeof f && (p || (p = !0, s = !0, r[u] = o({}, r[u]), i[u] = o({}, i[u]), a[u] = o({}, a[u]), l[u] = o({}, l[u])), r[u][d] = f, i[u][d] = 0, a[u][d] = f, l[u][d] = 0)
                                }
                        }
                        s && n.setState({
                            currentStyles: r,
                            currentVelocities: i,
                            lastIdealStyles: a,
                            lastIdealVelocities: l
                        })
                    }, this.startAnimationIfNecessary = function() {
                        n.animationID = c.default((function(e) {
                            var t = n.props.styles(n.state.lastIdealStyles);
                            if (function(e, t, r) {
                                    for (var o = 0; o < e.length; o++)
                                        if (!p.default(e[o], t[o], r[o])) return !1;
                                    return !0
                                }(n.state.currentStyles, t, n.state.currentVelocities)) return n.animationID = null, void(n.accumulatedTime = 0);
                            var r = e || u.default(),
                                o = r - n.prevTime;
                            if (n.prevTime = r, n.accumulatedTime = n.accumulatedTime + o, n.accumulatedTime > 10 * g && (n.accumulatedTime = 0), 0 === n.accumulatedTime) return n.animationID = null, void n.startAnimationIfNecessary();
                            for (var i = (n.accumulatedTime - Math.floor(n.accumulatedTime / g) * g) / g, a = Math.floor(n.accumulatedTime / g), l = [], c = [], d = [], f = [], b = 0; b < t.length; b++) {
                                var h = t[b],
                                    x = {},
                                    m = {},
                                    v = {},
                                    y = {};
                                for (var w in h)
                                    if (Object.prototype.hasOwnProperty.call(h, w)) {
                                        var S = h[w];
                                        if ("number" === typeof S) x[w] = S, m[w] = 0, v[w] = S, y[w] = 0;
                                        else {
                                            for (var k = n.state.lastIdealStyles[b][w], C = n.state.lastIdealVelocities[b][w], B = 0; B < a; B++) {
                                                var _ = s.default(g / 1e3, k, C, S.val, S.stiffness, S.damping, S.precision);
                                                k = _[0], C = _[1]
                                            }
                                            var z = s.default(g / 1e3, k, C, S.val, S.stiffness, S.damping, S.precision),
                                                A = z[0],
                                                E = z[1];
                                            x[w] = k + (A - k) * i, m[w] = C + (E - C) * i, v[w] = k, y[w] = C
                                        }
                                    }
                                d[b] = x, f[b] = m, l[b] = v, c[b] = y
                            }
                            n.animationID = null, n.accumulatedTime -= a * g, n.setState({
                                currentStyles: d,
                                currentVelocities: f,
                                lastIdealStyles: l,
                                lastIdealVelocities: c
                            }), n.unreadPropStyles = null, n.startAnimationIfNecessary()
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
                }(t, e), n(t, null, [{
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
                        o = t || r().map(l.default),
                        n = o.map((function(e) {
                            return a.default(e)
                        }));
                    return {
                        currentStyles: o,
                        currentVelocities: n,
                        lastIdealStyles: o,
                        lastIdealVelocities: n
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = u.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles), this.unreadPropStyles = e.styles(this.state.lastIdealStyles), null == this.animationID && (this.prevTime = u.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    null != this.animationID && (c.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = this.props.children(this.state.currentStyles);
                    return e && d.default.Children.only(e)
                }, t
            }(d.default.Component);
            t.default = b, e.exports = t.default
        },
        "9RcZ": (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                    }
                    return e
                },
                n = function() {
                    function e(e, t) {
                        for (var r = 0; r < t.length; r++) {
                            var o = t[r];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, r, o) {
                        return r && e(t.prototype, r), o && e(t, o), t
                    }
                }();

            function i(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            var a = i(r("XwoM")),
                l = i(r("vmhH")),
                s = i(r("RU0+")),
                u = i(r("F6G4")),
                c = i(r("7k4P")),
                p = i(r("0xii")),
                d = i(r("KDEh")),
                f = i(r("DTvD")),
                g = i(r("aWzz")),
                b = 1e3 / 60;

            function h(e, t, r) {
                var o = t;
                return null == o ? e.map((function(e, t) {
                    return {
                        key: e.key,
                        data: e.data,
                        style: r[t]
                    }
                })) : e.map((function(e, t) {
                    for (var n = 0; n < o.length; n++)
                        if (o[n].key === e.key) return {
                            key: o[n].key,
                            data: o[n].data,
                            style: r[t]
                        };
                    return {
                        key: e.key,
                        data: e.data,
                        style: r[t]
                    }
                }))
            }

            function x(e, t, r, o, n, i, l, s, c) {
                for (var p = u.default(o, n, (function(e, o) {
                        var n = t(o);
                        return null == n || d.default(i[e], n, l[e]) ? (r({
                            key: o.key,
                            data: o.data
                        }), null) : {
                            key: o.key,
                            data: o.data,
                            style: n
                        }
                    })), f = [], g = [], b = [], h = [], x = 0; x < p.length; x++) {
                    for (var m = p[x], v = null, y = 0; y < o.length; y++)
                        if (o[y].key === m.key) {
                            v = y;
                            break
                        }
                    if (null == v) {
                        var w = e(m);
                        f[x] = w, b[x] = w;
                        var S = a.default(m.style);
                        g[x] = S, h[x] = S
                    } else f[x] = i[v], b[x] = s[v], g[x] = l[v], h[x] = c[v]
                }
                return [p, f, g, b, h]
            }
            var m = function(e) {
                function t(r) {
                    var n = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), e.call(this, r), this.unmounting = !1, this.animationID = null, this.prevTime = 0, this.accumulatedTime = 0, this.unreadPropStyles = null, this.clearUnreadPropStyle = function(e) {
                        for (var t = x(n.props.willEnter, n.props.willLeave, n.props.didLeave, n.state.mergedPropsStyles, e, n.state.currentStyles, n.state.currentVelocities, n.state.lastIdealStyles, n.state.lastIdealVelocities), r = t[0], i = t[1], a = t[2], l = t[3], s = t[4], u = 0; u < e.length; u++) {
                            var c = e[u].style,
                                p = !1;
                            for (var d in c)
                                if (Object.prototype.hasOwnProperty.call(c, d)) {
                                    var f = c[d];
                                    "number" === typeof f && (p || (p = !0, i[u] = o({}, i[u]), a[u] = o({}, a[u]), l[u] = o({}, l[u]), s[u] = o({}, s[u]), r[u] = {
                                        key: r[u].key,
                                        data: r[u].data,
                                        style: o({}, r[u].style)
                                    }), i[u][d] = f, a[u][d] = 0, l[u][d] = f, s[u][d] = 0, r[u].style[d] = f)
                                }
                        }
                        n.setState({
                            currentStyles: i,
                            currentVelocities: a,
                            mergedPropsStyles: r,
                            lastIdealStyles: l,
                            lastIdealVelocities: s
                        })
                    }, this.startAnimationIfNecessary = function() {
                        n.unmounting || (n.animationID = p.default((function(e) {
                            if (!n.unmounting) {
                                var t = n.props.styles,
                                    r = "function" === typeof t ? t(h(n.state.mergedPropsStyles, n.unreadPropStyles, n.state.lastIdealStyles)) : t;
                                if (function(e, t, r, o) {
                                        if (o.length !== t.length) return !1;
                                        for (var n = 0; n < o.length; n++)
                                            if (o[n].key !== t[n].key) return !1;
                                        for (n = 0; n < o.length; n++)
                                            if (!d.default(e[n], t[n].style, r[n])) return !1;
                                        return !0
                                    }(n.state.currentStyles, r, n.state.currentVelocities, n.state.mergedPropsStyles)) return n.animationID = null, void(n.accumulatedTime = 0);
                                var o = e || c.default(),
                                    i = o - n.prevTime;
                                if (n.prevTime = o, n.accumulatedTime = n.accumulatedTime + i, n.accumulatedTime > 10 * b && (n.accumulatedTime = 0), 0 === n.accumulatedTime) return n.animationID = null, void n.startAnimationIfNecessary();
                                for (var a = (n.accumulatedTime - Math.floor(n.accumulatedTime / b) * b) / b, l = Math.floor(n.accumulatedTime / b), u = x(n.props.willEnter, n.props.willLeave, n.props.didLeave, n.state.mergedPropsStyles, r, n.state.currentStyles, n.state.currentVelocities, n.state.lastIdealStyles, n.state.lastIdealVelocities), p = u[0], f = u[1], g = u[2], m = u[3], v = u[4], y = 0; y < p.length; y++) {
                                    var w = p[y].style,
                                        S = {},
                                        k = {},
                                        C = {},
                                        B = {};
                                    for (var _ in w)
                                        if (Object.prototype.hasOwnProperty.call(w, _)) {
                                            var z = w[_];
                                            if ("number" === typeof z) S[_] = z, k[_] = 0, C[_] = z, B[_] = 0;
                                            else {
                                                for (var A = m[y][_], E = v[y][_], F = 0; F < l; F++) {
                                                    var I = s.default(b / 1e3, A, E, z.val, z.stiffness, z.damping, z.precision);
                                                    A = I[0], E = I[1]
                                                }
                                                var H = s.default(b / 1e3, A, E, z.val, z.stiffness, z.damping, z.precision),
                                                    j = H[0],
                                                    D = H[1];
                                                S[_] = A + (j - A) * a, k[_] = E + (D - E) * a, C[_] = A, B[_] = E
                                            }
                                        }
                                    m[y] = C, v[y] = B, f[y] = S, g[y] = k
                                }
                                n.animationID = null, n.accumulatedTime -= l * b, n.setState({
                                    currentStyles: f,
                                    currentVelocities: g,
                                    lastIdealStyles: m,
                                    lastIdealVelocities: v,
                                    mergedPropsStyles: p
                                }), n.unreadPropStyles = null, n.startAnimationIfNecessary()
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
                }(t, e), n(t, null, [{
                    key: "propTypes",
                    value: {
                        defaultStyles: g.default.arrayOf(g.default.shape({
                            key: g.default.string.isRequired,
                            data: g.default.any,
                            style: g.default.objectOf(g.default.number).isRequired
                        })),
                        styles: g.default.oneOfType([g.default.func, g.default.arrayOf(g.default.shape({
                            key: g.default.string.isRequired,
                            data: g.default.any,
                            style: g.default.objectOf(g.default.oneOfType([g.default.number, g.default.object])).isRequired
                        }))]).isRequired,
                        children: g.default.func.isRequired,
                        willEnter: g.default.func,
                        willLeave: g.default.func,
                        didLeave: g.default.func
                    },
                    enumerable: !0
                }, {
                    key: "defaultProps",
                    value: {
                        willEnter: function(e) {
                            return l.default(e.style)
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
                        o = e.willEnter,
                        n = e.willLeave,
                        i = e.didLeave,
                        s = "function" === typeof r ? r(t) : r,
                        u = void 0;
                    u = null == t ? s : t.map((function(e) {
                        for (var t = 0; t < s.length; t++)
                            if (s[t].key === e.key) return s[t];
                        return e
                    }));
                    var c = null == t ? s.map((function(e) {
                            return l.default(e.style)
                        })) : t.map((function(e) {
                            return l.default(e.style)
                        })),
                        p = null == t ? s.map((function(e) {
                            return a.default(e.style)
                        })) : t.map((function(e) {
                            return a.default(e.style)
                        })),
                        d = x(o, n, i, u, s, c, p, c, p),
                        f = d[0];
                    return {
                        currentStyles: d[1],
                        currentVelocities: d[2],
                        lastIdealStyles: d[3],
                        lastIdealVelocities: d[4],
                        mergedPropsStyles: f
                    }
                }, t.prototype.componentDidMount = function() {
                    this.prevTime = c.default(), this.startAnimationIfNecessary()
                }, t.prototype.componentWillReceiveProps = function(e) {
                    this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
                    var t = e.styles;
                    this.unreadPropStyles = "function" === typeof t ? t(h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles)) : t, null == this.animationID && (this.prevTime = c.default(), this.startAnimationIfNecessary())
                }, t.prototype.componentWillUnmount = function() {
                    this.unmounting = !0, null != this.animationID && (p.default.cancel(this.animationID), this.animationID = null)
                }, t.prototype.render = function() {
                    var e = h(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
                        t = this.props.children(e);
                    return t && f.default.Children.only(t)
                }, t
            }(f.default.Component);
            t.default = m, e.exports = t.default
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
                for (var o = {}, n = 0; n < e.length; n++) o[e[n].key] = n;
                var i = {};
                for (n = 0; n < t.length; n++) i[t[n].key] = n;
                var a = [];
                for (n = 0; n < t.length; n++) a[n] = t[n];
                for (n = 0; n < e.length; n++)
                    if (!Object.prototype.hasOwnProperty.call(i, e[n].key)) {
                        var l = r(n, e[n]);
                        null != l && a.push(l)
                    }
                return a.sort((function(e, r) {
                    var n = i[e.key],
                        a = i[r.key],
                        l = o[e.key],
                        s = o[r.key];
                    if (null != n && null != a) return i[e.key] - i[r.key];
                    if (null != l && null != s) return o[e.key] - o[r.key];
                    if (null != n) {
                        for (var u = 0; u < t.length; u++) {
                            var c = t[u].key;
                            if (Object.prototype.hasOwnProperty.call(o, c)) {
                                if (n < i[c] && s > o[c]) return -1;
                                if (n > i[c] && s < o[c]) return 1
                            }
                        }
                        return 1
                    }
                    for (u = 0; u < t.length; u++) {
                        c = t[u].key;
                        if (Object.prototype.hasOwnProperty.call(o, c)) {
                            if (a < i[c] && l > o[c]) return 1;
                            if (a > i[c] && l < o[c]) return -1
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

            function o(e) {
                return e && e.__esModule ? e.default : e
            }
            o(r("Z6fc")), o(r("7Xug"));
            var n = r("9RcZ");
            t.S6 = o(n);
            var i = r("a1xD");
            t.oz = o(i);
            var a = r("5p+V");
            t.v4 = o(a), o(r("vmhH")), o(r("xB03"))
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
                for (var o in t)
                    if (Object.prototype.hasOwnProperty.call(t, o)) {
                        if (0 !== r[o]) return !1;
                        var n = "number" === typeof t[o] ? t[o] : t[o].val;
                        if (e[o] !== n) return !1
                    }
                return !0
            }, e.exports = t.default
        },
        a1xD: (e, t, r) => {
            "use strict";
            t.__esModule = !0;
            var o = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var o in r) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o])
                }
                return e
            };
            t.default = function(e, t) {
                return o({}, l, t, {
                    val: e
                })
            };
            var n, i = r("5p+V"),
                a = (n = i) && n.__esModule ? n : {
                    default: n
                },
                l = o({}, a.default.noWobble, {
                    precision: .01
                });
            e.exports = t.default
        },
        "RU0+": (e, t) => {
            "use strict";
            t.__esModule = !0, t.default = function(e, t, o, n, i, a, l) {
                var s = o + (-i * (t - n) + -a * o) * e,
                    u = t + s * e;
                if (Math.abs(s) < l && Math.abs(u - n) < l) return r[0] = n, r[1] = 0, r;
                return r[0] = u, r[1] = s, r
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
            var o = r("F63i");
            (function() {
                var t, r, n;
                "undefined" !== typeof performance && null !== performance && performance.now ? e.exports = function() {
                    return performance.now()
                } : "undefined" !== typeof o && null !== o && o.hrtime ? (e.exports = function() {
                    return (t() - n) / 1e6
                }, r = o.hrtime, n = (t = function() {
                    var e;
                    return 1e9 * (e = r())[0] + e[1]
                })()) : Date.now ? (e.exports = function() {
                    return Date.now() - n
                }, n = Date.now()) : (e.exports = function() {
                    return (new Date).getTime() - n
                }, n = (new Date).getTime())
            }).call(this)
        }
    }
]);
//# debugId=315e9376-27fa-5ae5-91e7-94d26440cbef