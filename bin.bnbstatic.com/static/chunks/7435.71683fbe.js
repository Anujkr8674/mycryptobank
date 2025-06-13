"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [7435], {
        EX7S: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => je
            });
            var c = n("mguP"),
                r = n("DTvD"),
                l = n.n(r),
                i = n("LLrz"),
                o = n("JWaR"),
                a = n("OGoN"),
                s = n("8Ed6"),
                m = n("4+lJ"),
                u = n("b6CO"),
                f = n("FHqy");
            const d = function(e) {
                return l().createElement(f.A, (0, u._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M13.5 12L7 18.6 8.4 20l8-8-8-8L7 5.4l6.5 6.6z",
                    fill: "currentColor"
                }))
            };
            var p = n("Bkzn"),
                h = n("2/kH"),
                x = n("M9gu"),
                E = n("7ZgD"),
                v = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!E.o) return !1;
                    var c = "".concat(e, ":"),
                        r = document.createElement("test").style;
                    if (n) r.cssText = "".concat(c).concat(t);
                    else {
                        var l = ["-webkit-", ""].join("".concat(t, ";").concat(c));
                        r.cssText = "".concat(c).concat(l).concat(t, ";")
                    }
                    return -1 !== r[e].indexOf(t)
                };

            function g(e, t) {
                var n = this,
                    c = null;
                return function() {
                    for (var r = arguments.length, l = new Array(r), i = 0; i < r; i++) l[i] = arguments[i];
                    if (null === c) {
                        var o = n;
                        c = setTimeout((function() {
                            e.apply(o, l), c = null
                        }), t)
                    }
                }
            }
            var z = n("NC2t"),
                _ = n("iKFe");

            function y() {
                var e = (0, z._)(["\n        .mica-sticky {\n          width: 100%;\n          z-index: 9999;\n        }\n\n        .mica-sticky:not([data-simulate='true']) {\n          position: -webkit-sticky;\n          position: sticky;\n        }\n\n        .mica-sticky[data-simulate='true'] {\n          position: relative;\n        }\n\n        .mica-sticky[data-simulate='true'][data-sticky='true'] > .child {\n          position: fixed;\n        }\n      "]);
                return y = function() {
                    return e
                }, e
            }

            function A() {
                return l().createElement(_.mL, {
                    styles: (0, _.AH)(y())
                })
            }
            var k = function(e) {
                (0, h._)(n, e);
                var t = (0, x._)(n);

                function n(e) {
                    var c;
                    (0, p._)(this, n), (c = t.call(this, e)).index = 0, c.$refs = {}, c.state = {
                        sticky: !1,
                        childRect: {}
                    }, c.simulate = !v("position", "sticky"), c.unmount = !1, c.setRefs = function(e) {
                        return function(t) {
                            c.$refs[e] = t
                        }
                    }, c.checkSticky = function() {
                        if (!c.unmount) {
                            var e = parseFloat(c.props.top),
                                t = c.$refs,
                                n = t.root,
                                r = t.placeholder,
                                l = t.child,
                                i = r.getBoundingClientRect().top,
                                o = n.parentNode.getBoundingClientRect().bottom,
                                a = n.getBoundingClientRect(),
                                s = a.height,
                                m = a.width,
                                u = o - s - e >= 0 && i - e <= 1,
                                f = c.simulate ? l.getBoundingClientRect() : {},
                                d = f.width,
                                p = f.left,
                                h = f.height,
                                x = c.simulate ? +(100 * d / m).toFixed(2) : 0;
                            c.setState({
                                sticky: u,
                                childRect: {
                                    left: p,
                                    width: "".concat(x, "%"),
                                    height: h
                                }
                            })
                        }
                    };
                    var r = e.simulate;
                    return c.index = n.count, c.simulate = r || !v("position", "sticky"), n.count = c.index + 1, c
                }
                var c = n.prototype;
                return c.componentDidMount = function() {
                    n.instances[this.index] = this, this.checkSticky()
                }, c.componentWillUnmount = function() {
                    delete n.instances[this.index], this.unmount = !0
                }, c.render = function() {
                    var e = this,
                        t = e.simulate,
                        n = e.props,
                        c = n.top,
                        r = n.children,
                        i = e.state,
                        o = i.sticky,
                        a = i.childRect,
                        s = a.width,
                        m = a.height,
                        u = a.left,
                        f = t ? {} : {
                            top: c
                        },
                        d = t && o && s && m ? {
                            width: s,
                            height: m
                        } : {},
                        p = t && o ? {
                            left: u || 0,
                            top: c,
                            width: s || "100%"
                        } : {};
                    return l().createElement(l().Fragment, null, l().createElement(A, null), l().createElement("div", {
                        className: "mica-sticky",
                        ref: this.setRefs("root"),
                        style: f,
                        "data-sticky": o,
                        "data-simulate": t
                    }, l().createElement("div", {
                        ref: this.setRefs("placeholder"),
                        style: d
                    }), l().createElement("div", {
                        ref: this.setRefs("child"),
                        className: "child",
                        style: p
                    }, r)))
                }, n.checkSticky = function() {
                    Object.keys(n.instances).forEach((function(e) {
                        var t = n.instances[e];
                        t && t.checkSticky()
                    }))
                }, n
            }(r.PureComponent);
            k.count = 0, k.instances = {}, k.defaultProps = {
                top: 0,
                simulate: !1
            };
            var S = g(k.checkSticky, 16.66667);
            "undefined" !== typeof window && (window.addEventListener("resize", S, !0), document.addEventListener("scroll", S, !0), document.addEventListener("transitionend", S, !0));
            const b = k;
            var w = n("iKvg"),
                C = n("5E2b"),
                I = n("jzw2");
            const R = function(e) {
                return l().createElement(f.A, (0, u._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22 20H2V4h20v16zM4 7h7v6H4V7zm9 0h4v2h-4V7z",
                    fill: "url(#id-g_svg__paint0_linear)"
                }), l().createElement("path", {
                    d: "M7.5 12a2 2 0 100-4 2 2 0 000 4zM11 17v-4H4v4h7zM13 11h7v2h-7v-2zM20 15h-7v2h7v-2z",
                    fill: "#76808F"
                }), l().createElement("defs", null, l().createElement("linearGradient", {
                    id: "id-g_svg__paint0_linear",
                    x1: 12,
                    y1: 20,
                    x2: 12,
                    y2: 4,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#F0B90B"
                }), l().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            const M = function(e) {
                return l().createElement(f.A, (0, u._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M16 8l-1.6-2.1.1-2.7-2.6-.6L10.5.4 8 1.3 5.5.4 4.1 2.6l-2.6.7.1 2.7L0 8l1.6 2.1-.1 2.6 2.5.7 1.5 2.2 2.5-.9 2.5 1 1.5-2.2 2.6-.7-.2-2.8L16 8zm-9.2 3.3L4 8.5l1.1-1.1 1.7 1.7 4-4 1.1 1.1-5.1 5.1z",
                    fill: "currentColor"
                }))
            };
            var q = {},
                F = l().createContext(q),
                B = function() {
                    return (0, r.useContext)(F)
                },
                L = function(e, t) {
                    return t && t[e] || e
                },
                P = {
                    PROCESS: "PROCESS",
                    PASS: "PASS",
                    REFUSED: "REFUSED"
                },
                D = {
                    PASS: "PASS",
                    FAILED: "FAILED",
                    SKIP: "SKIP"
                },
                H = 0,
                T = 1,
                U = 2,
                O = 3,
                V = "Success",
                W = "Fail",
                K = "SKIP",
                j = "SUBMIT",
                Q = "CME_KYC_QUESTION",
                N = n("KrVi"),
                Y = n("u4/q");
            const G = function(e) {
                return l().createElement(f.A, (0, u._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M20.5 7.42L9.41 18.5 8 17.09l-5-5 1.41-1.42 5 5L19.08 6l1.42 1.42z",
                    fill: "currentColor"
                }))
            };
            var J = n("DQRa");
            const $ = function(e) {
                return l().createElement(f.A, (0, u._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M19.068 4.932A9.917 9.917 0 0012 2a9.917 9.917 0 00-7.068 2.932A9.917 9.917 0 002 11.988C2 17.521 6.479 22 12 22a9.917 9.917 0 007.068-2.932A9.992 9.992 0 0022 11.988a9.918 9.918 0 00-2.932-7.056zm-8.912 12.234L5.71 12.71l1.42-1.42 3.025 3.024 6.7-6.713 1.421 1.42-8.121 8.145z",
                    fill: "currentColor"
                }))
            };
            var Z, X, ee = function(e) {
                    var t = e.boxCss,
                        n = (0, N._)(e, ["boxCss"]),
                        c = B().layoutMax;
                    return l().createElement(C.A, {
                        sx: t
                    }, l().createElement(C.A, (0, u._)({}, n, {
                        __css: {
                            mx: "auto",
                            px: ["sm", "md"],
                            maxWidth: c
                        }
                    })))
                },
                te = function(e) {
                    var t = e.checked,
                        n = e.optionStr,
                        c = e.multiSelect,
                        r = void 0 === c || c,
                        a = (0, N._)(e, ["checked", "optionStr", "multiSelect"]);
                    return r ? l().createElement(i.A, (0, u._)({}, a, {
                        __css: {
                            flex: "none",
                            cursor: "pointer",
                            alignItems: "center"
                        }
                    }), l().createElement(i.A, {
                        __css: {
                            width: 16,
                            height: 16,
                            flex: "none"
                        },
                        sx: {
                            bg: t ? "primary" : "bg1",
                            border: t ? "none" : "1px solid #E6E8EA"
                        },
                        children: t ? l().createElement(G, {
                            size: 16,
                            color: "bg1"
                        }) : null
                    }), l().createElement(o.A, {
                        sx: {
                            ml: "xs"
                        },
                        children: n
                    })) : l().createElement(i.A, (0, u._)({}, a, {
                        __css: {
                            flex: "none",
                            cursor: "pointer",
                            alignItems: "center"
                        }
                    }), l().createElement(i.A, {
                        __css: {
                            flex: "none",
                            borderRadius: "circle",
                            p: "4px"
                        },
                        sx: {
                            border: "1px solid",
                            bg: "bg1",
                            borderColor: t ? "primary" : "#E6E8EA"
                        },
                        children: l().createElement(C.A, {
                            sx: {
                                width: 8,
                                height: 8,
                                bg: t ? "primary" : "bg1",
                                borderRadius: "circle"
                            }
                        })
                    }), l().createElement(o.A, {
                        sx: {
                            ml: "xs"
                        },
                        children: n
                    }))
                },
                ne = {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    bg: "rgba(30,32,38,0.5)",
                    position: ["fixed", "absolute"]
                },
                ce = function() {
                    return l().createElement(i.A, {
                        __css: ne,
                        children: l().createElement(Y.A, null),
                        sx: {
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    })
                },
                re = function(e) {
                    var t = e.children;
                    return (0, r.useEffect)((function() {
                        return document.body.style.overflowY = "hidden",
                            function() {
                                document.body.style.overflowY = "auto"
                            }
                    }), []), l().createElement(i.A, {
                        __css: ne,
                        children: t,
                        sx: {
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 9999
                        }
                    })
                },
                le = {
                    flex: "none",
                    borderRadius: "circle"
                },
                ie = function(e) {
                    var t = e.size,
                        n = e.color;
                    return l().createElement(J.A, {
                        __css: le,
                        sx: {
                            color: n,
                            fontSize: t
                        }
                    })
                },
                oe = function(e) {
                    var t = e.size,
                        n = e.color;
                    return l().createElement($, {
                        __css: le,
                        sx: {
                            color: n,
                            fontSize: t
                        }
                    })
                },
                ae = function(e) {
                    var t = e.size,
                        n = e.color;
                    return l().createElement(m.A, {
                        __css: le,
                        sx: {
                            color: n,
                            fontSize: t
                        }
                    })
                },
                se = function() {
                    var e = B(),
                        t = e.i18n,
                        n = e.staticHost;
                    return l().createElement(l().Fragment, null, l().createElement(o.A, {
                        as: "span",
                        children: L("cme-statement-pre", t)
                    }), l().createElement(o.A, {
                        as: "a",
                        target: "_blank",
                        href: "".concat(n, "/static/files/compliance-de-protocol.pdf"),
                        sx: {
                            color: "primary",
                            ml: "2px",
                            textDecoration: "underline"
                        },
                        children: L("cme-statement-link", t)
                    }))
                },
                me = ["cme-idVerify-basic", "cme-idVerify-Advanced", "cme-idVerify-poa"],
                ue = (Z = {}, (0, w._)(Z, P.PROCESS, oe), (0, w._)(Z, P.REFUSED, ie), (0, w._)(Z, P.PASS, oe), Z),
                fe = (X = {}, (0, w._)(X, P.PROCESS, "primary"), (0, w._)(X, P.REFUSED, "error"), (0, w._)(X, P.PASS, "success"), X);
            const de = function(e) {
                var t = function() {
                        var e = (0, c._)((0, r.useState)(""), 2),
                            t = e[0],
                            n = e[1];
                        return (0, r.useEffect)((function() {
                            var e = document.domain.split(".").slice(-2);
                            n(e.join("."))
                        }), []), t
                    }(),
                    n = B(),
                    a = n.lng,
                    s = n.i18n,
                    m = n.cmeInfo,
                    f = m.Kyc,
                    d = m.kycWckStatus,
                    p = f.some((function(e) {
                        return !!e.status
                    })) || d,
                    h = p && f.every((function(e) {
                        return e.status === P.PASS
                    })),
                    x = d === P.PASS,
                    E = t ? "https://www.".concat(t, "/").concat(a, "/my/settings/profile") : "";
                return l().createElement(C.A, (0, u._)({}, e, {
                    __css: {
                        color: "button.white"
                    }
                }), l().createElement(i.A, {
                    sx: {
                        alignItems: "center"
                    }
                }, l().createElement(R, {
                    size: 20,
                    color: "t.yellow",
                    sx: {
                        mr: "xs"
                    }
                }), l().createElement(o.A, {
                    children: L("cme-idVerify-title", s)
                })), l().createElement(o.A, {
                    __css: {
                        mt: "xs",
                        mb: "sm"
                    },
                    sx: {
                        color: "#848E9C",
                        fontSize: 1,
                        lineHeight: "20px"
                    },
                    children: L("cme-idVerify-message", s)
                }), p ? h && x ? l().createElement(C.A, {
                    __css: {
                        display: "inline-flex",
                        bg: "rgba(46,189,133,0.15)"
                    },
                    sx: {
                        alignItems: "center",
                        borderRadius: "circle",
                        px: "xs",
                        py: "minor"
                    }
                }, l().createElement(M, {
                    size: 18,
                    color: "success",
                    sx: {
                        mr: "xs"
                    }
                }), l().createElement(o.A, {
                    sx: {
                        color: "success",
                        fontSize: 0
                    },
                    children: L("cme-idVerify-succ", s)
                })) : l().createElement(l().Fragment, null, me.map((function(e, t) {
                    var n = (f[t] || {}).status,
                        c = n === P.REFUSED,
                        r = 1 === t && n === P.PASS && !x,
                        a = r ? ae : ue[n] || oe,
                        m = r ? "primary" : fe[n] || "t.third",
                        u = [L(e, s), r ? " (".concat(L("cme-idVerify-wckFail", s), ")") : "", c ? " ".concat(L("cme-idVerify-fail", s)) : ""].join("");
                    return l().createElement(i.A, {
                        key: t,
                        sx: {
                            color: "button.white",
                            mb: "xs"
                        }
                    }, l().createElement(a, {
                        size: 16,
                        color: m
                    }), l().createElement(o.A, {
                        sx: {
                            ml: "xs"
                        },
                        children: u
                    }))
                })), !h && l().createElement(I.A, {
                    as: "a",
                    href: E,
                    sx: {
                        mt: "sm",
                        display: "inline-flex"
                    },
                    children: L("cme-idVerify-continue", s)
                })) : l().createElement(I.A, {
                    as: "a",
                    href: E,
                    children: L("cme-idVerify-go", s)
                }))
            };
            var pe = n("S+0I"),
                he = n("hrAD"),
                xe = n("qoEP"),
                Ee = n("66mo"),
                ve = n.n(Ee),
                ge = n("5nld"),
                ze = n("zCW4"),
                _e = n("TUyf");
            const ye = function(e) {
                return l().createElement(f.A, (0, u._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M20 22H5V2h15v20z",
                    fill: "url(#help-g_svg__paint0_linear)"
                }), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5 5H3v2h2V5zM5 13H3v2h2v-2zM5 9H3v2h2V9zM5 17H3v2h2v-2z",
                    fill: "#76808F"
                }), l().createElement("path", {
                    d: "M11 9.5a1.5 1.5 0 112.56 1.06l-2.06 2.061V14.5h2v-1.05l1.475-1.475A3.5 3.5 0 109 9.5v.5h2v-.5zM13.5 18.5v-2h-2v2h2z",
                    fill: "#76808F"
                }), l().createElement("defs", null, l().createElement("linearGradient", {
                    id: "help-g_svg__paint0_linear",
                    x1: 12.5,
                    y1: 22,
                    x2: 12.5,
                    y2: 2,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#F0B90B"
                }), l().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            const Ae = function(e) {
                return l().createElement(f.A, (0, u._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), l().createElement("g", {
                    clipPath: "url(#success-b96_svg__clip0)",
                    fill: "#00C087"
                }, l().createElement("path", {
                    d: "M71 25a32.523 32.523 0 00-22.96-9.52c-17.95-.01-32.51 14.53-32.52 32.48C15.51 65.91 30.05 80.47 48 80.48c17.95.01 32.51-14.53 32.52-32.48 0-8.63-3.42-16.9-9.52-23zM42.04 60.5L30.97 49.43l2.12-2.12 8.95 8.95 20.91-20.91 2.13 2.13L42.04 60.5zM46.48 2.51L46.56 5H49l.03-2.49h-2.55zm5.65.16l-.22 2.49c.79.07 1.6.17 2.39.28l.36-2.47c-.84-.12-1.69-.22-2.53-.3zm-8.7 0c-.84.08-1.69.19-2.52.33l.39 2.51c.78-.13 1.59-.23 2.38-.35l-.25-2.49zm14.19.83l-.53 2.44c.78.17 1.57.37 2.34.58l.66-2.41c-.81-.23-1.64-.43-2.47-.61zm-19.71.11c-.83.19-1.66.4-2.47.64l.69 2.4c.77-.22 1.56-.42 2.33-.6l-.55-2.44zM63 5l-.79 2.38c.75.26 1.51.55 2.25.86l.92-2.33C64.6 5.58 63.8 5.28 63 5zm-30.46.19c-.79.29-1.59.61-2.37.94l1 2.29c.73-.32 1.48-.61 2.22-.88l-.85-2.35zm-1.37 3.24v-.01c-.01 0-.01.01-.02.01h.02zm36.99-1.24l-1.11 2.24c.71.36 1.43.74 2.12 1.13l1.24-2.17c-.74-.42-1.5-.82-2.25-1.2zm-40.78.24c-.75.38-1.5.79-2.23 1.22l1.26 2.16h.02c.69-.41 1.4-.81 2.09-1.16l-1.14-2.22zM73 10l-1.39 2.07c.69.44 1.36.9 2 1.38l1.48-1.99C74.41 11 73.71 10.47 73 10zm-50.44.26c-.7.49-1.39.97-2.07 1.49l1.51 2c.66-.49 1.32-.96 2-1.41l-1.44-2.08zm54.94 3.08l-1.62 1.91c.61.52 1.21 1.06 1.79 1.61l1.72-1.81c-.59-.59-1.22-1.16-1.89-1.71zm-59.37.34c-.63.56-1.26 1.14-1.87 1.73L18 17.2c.58-.56 1.18-1.11 1.77-1.63l-1.64-1.89zm63.42 3.55l-1.85 1.69c.58.59 1.07 1.2 1.58 1.82l1.93-1.58c-.53-.65-1.09-1.3-1.66-1.93zm-67.4.38c-.56.63-1.12 1.28-1.65 1.94l1.95 1.57c.55-.63 1.03-1.24 1.55-1.84l-1.85-1.67zm70.92 3.97l-2 1.45c.46.65.92 1.33 1.34 2l2.08-1.33c-.42-.72-.93-1.43-1.42-2.12zm-74.4.42c-.48.7-.95 1.41-1.39 2.13l2.13 1.31c.41-.68.86-1.35 1.32-2.01L10.67 22zM88 26.33l-2.22 1.19c.38.7.75 1.43 1.09 2.15l2.28-1.07c-.36-.76-.75-1.53-1.15-2.27zm-80.28.5c-.39.74-.77 1.51-1.12 2.28l2.27 1h.04c.33-.73.69-1.45 1.09-2.11l-2.28-1.17zm82.66 4.58l-2.33.91c.29.74.57 1.51.82 2.27l2.37-.79c-.26-.8-.55-1.61-.86-2.39zm-84.92.48c-.3.8-.58 1.61-.83 2.41l2.37.75c.25-.76.51-1.52.8-2.27l-2.34-.89zm86.65 4.85l-2.42.62c.19.77.37 1.56.53 2.34l2.45-.48c-.16-.83-.35-1.66-.56-2.48zm-88.3.51c-.2.82-.38 1.66-.53 2.49l2.46.45c.14-.78.31-1.58.5-2.35l-2.43-.59zm89.34 4.99l-2.48.31c.1.79.18 1.6.24 2.4l2.49-.18c-.06-.84-.14-1.69-.25-2.53zm-90.32.52c-.1.84-.22 1.7-.22 2.54l2.5.15c.04-.8.11-1.61.2-2.4l-2.48-.29zm88.23 5.07v.14c0 .8-.06 1.61-.06 2.41l2.44.14c.05-.84.07-1.7.12-2.52v-.17h-2.5zm-86.03.53h-2.5c.01.84.04 1.7.1 2.54l2.49-.14c-.09-.79-.09-1.6-.09-2.4zm85.66 4.9c-.1.8-.22 1.6-.36 2.38l2.46.44c.15-.83.28-1.67.38-2.52l-2.48-.3zm-85.29.36l-2.48.32c.11.84.25 1.69.4 2.52l2.46-.47a37.7 37.7 0 01-.38-2.37zm84.32 4.84c-.19.78-.41 1.56-.65 2.32l2.39.74c.25-.8.48-1.63.69-2.45l-2.43-.61zm-83.31.35l-2.42.63c.21.82.45 1.64.71 2.44l2.38-.76c-.24-.76-.47-1.54-.67-2.31zm81.71 4.73c-.28.74-.6 1.49-.93 2.22l2.28 1c.35-.76.68-1.56.98-2.32l-2.33-.9zm-80.07.3l-2.32.92c.31.78.65 1.57 1 2.34L9 66.04c-.33-.72-.65-1.46-.95-2.2zm80.07 5.64l-2.21-1.18c-.37.7-.78 1.41-1.19 2.09l2.13 1.3v.02c.44-.71.87-1.47 1.27-2.23zM10.3 68.6l-2.19 1.2c.4.74.84 1.48 1.28 2.2l2.13-1.32c-.43-.68-.84-1.38-1.22-2.08zm72.78 4.22c-.44.65-.95 1.3-1.44 1.93l2 1.55h.01c.52-.66 1.04-1.3 1.43-2.04l-2-1.44zm-69.99.3l-2 1.46c.5.66 1.01 1.34 1.55 2l1.91-1.54c-.46-.62-.99-1.27-1.46-1.92zm66.73 3.83c-.46.47-.92 1-1.4 1.47l-.27.27 1.76 1.78.28-.28c.48-.51 1-1.02 1.48-1.56l-1.85-1.68zm-63.35.24l-1.84 1.7c.57.62 1.17 1.23 1.78 1.82l1.74-1.8c-.58-.55-1.14-1.13-1.68-1.72zm59.54 3.43c-.6.52-1.23 1.03-1.87 1.52l1.52 2h.01c.67-.51 1.33-1.05 1.97-1.62l-1.63-1.9zm-55.74.23l-1.61 1.91c.66.59 1.33 1.08 2 1.59l1.49-1.99c-.64-.51-1.27-.99-1.88-1.51zm51.46 2.98c-.62.45-1.31.88-2 1.28L71 87.27c.76-.43 1.48-.89 2.12-1.36l-1.39-2.08zm-47.2.17l-1.4 2.11c.71.47 1.44.92 2.17 1.34l1.23-2.19c-.64-.4-1.33-.82-2-1.26zm42.65 2.51c-.71.34-1.45.68-2.18 1l1 2.29c.81-.34 1.59-.7 2.3-1.06l-1.12-2.23zm-38.05.18l-1.1 2.25c.76.37 1.54.73 2.32 1.06l.97-2.31c-.73-.3-1.47-.64-2.19-1zm33.23 1.87c-.76.27-1.53.52-2.29.74l.7 2.4c.81-.24 1.62-.5 2.42-.78l-.83-2.36zM34 88.68l-.79 2.36c.8.28 1.62.54 2.43.77l.66-2.41c-.77-.22-1.54-.46-2.3-.72zm23.27 1.34c-.78.17-1.57.32-2.36.45l.4 2.47c.83-.14 1.69-.3 2.5-.48l-.54-2.44zm-18.15.07l-.52 2.45c.83.17 1.68.33 2.51.46l.38-2.48c-.79-.12-1.59-.26-2.37-.43zm12.93.75c-.8.08-1.6.16-2.4.16l.09 2.49c.84-.03 1.7-.09 2.54-.16l-.23-2.49zm-7.7.02l-.21 2.5c.85.07 1.7.14 2.54.14l.08-2.5c-.8-.02-1.61-.07-2.41-.14z"
                })), l().createElement("defs", null, l().createElement("clipPath", {
                    id: "success-b96_svg__clip0"
                }, l().createElement("path", {
                    fill: "#fff",
                    d: "M0 0h96v96H0z"
                }))))
            };
            const ke = function(e) {
                return l().createElement(f.A, (0, u._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 64 64",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M44.38 19.62c-6.83-6.86-17.92-6.87-24.77-.04-6.86 6.84-6.87 17.93-.04 24.78 6.84 6.85 17.93 6.87 24.78.03 3.29-3.28 5.15-7.74 5.15-12.39.01-4.64-1.83-9.1-5.12-12.38zm-11.4 21.99h-2v-2h2v2zm0-4.37h-2v-14.8h2v14.8z",
                    fill: "url(#warning-filled-m64_svg__paint0_linear)"
                }), l().createElement("path", {
                    d: "M32 56.5c-.4 0-.8-.01-1.19-.03l.1-2c.63.03 1.27.03 1.9.01l.07 2c-.29.01-.59.02-.88.02zm3.46-.24l-.28-1.98c.62-.09 1.25-.2 1.87-.35l.45 1.95c-.68.15-1.36.28-2.04.38zm-7.23-.05c-.68-.1-1.36-.24-2.03-.4l.47-1.94c.61.15 1.24.27 1.87.37l-.31 1.97zm11.75-1.04l-.65-1.89c.6-.21 1.19-.44 1.77-.7l.81 1.83c-.63.28-1.28.53-1.93.76zm-16.26-.11c-.65-.23-1.29-.5-1.92-.78l.83-1.82c.57.26 1.16.5 1.76.72l-.67 1.88zm20.5-1.83l-1-1.73c.54-.31 1.09-.66 1.61-1.02l1.14 1.64c-.57.4-1.15.77-1.75 1.11zm-24.71-.15c-.59-.35-1.18-.73-1.73-1.13l1.16-1.63c.51.37 1.05.72 1.59 1.04l-1.02 1.72zm28.51-2.54l-1.31-1.51c.48-.41.95-.85 1.39-1.3l1.43 1.4c-.48.48-.99.96-1.51 1.41zm-32.27-.2c-.51-.46-1.02-.94-1.49-1.44l1.45-1.38c.44.46.9.9 1.37 1.32l-1.33 1.5zm35.48-3.17l-1.57-1.24c.39-.5.77-1.01 1.11-1.54l1.67 1.1c-.37.58-.78 1.14-1.21 1.68zm-38.65-.24c-.42-.55-.82-1.12-1.19-1.69l1.68-1.08c.34.53.71 1.05 1.1 1.56l-1.59 1.21zm41.18-3.67l-1.78-.92c.29-.56.56-1.14.8-1.72l1.85.77c-.26.63-.56 1.27-.87 1.87zm-43.66-.27c-.31-.61-.6-1.25-.85-1.89l1.86-.74c.24.59.5 1.17.78 1.73l-1.79.9zm45.4-4.04l-1.92-.57c.18-.61.33-1.23.46-1.84l1.96.4c-.14.67-.31 1.35-.5 2.01zm-47.08-.3c-.19-.66-.35-1.34-.48-2.02l1.96-.38c.12.62.27 1.25.44 1.85l-1.92.55zm47.96-4.27l-1.99-.19c.06-.63.1-1.27.1-1.9l2 .02c0 .69-.04 1.38-.11 2.07zm-48.79-.31c-.06-.68-.09-1.38-.09-2.07l2-.1v.1c0 .63.03 1.27.08 1.9l-1.99.17zm46.81-4.16c-.06-.63-.14-1.26-.25-1.88l1.97-.35c.12.68.21 1.37.28 2.05l-2 .18zm-44.76-.38l-1.99-.22c.08-.69.18-1.37.31-2.05l1.96.38c-.12.63-.22 1.26-.28 1.89zm43.97-3.82c-.17-.6-.38-1.21-.61-1.8l1.87-.72c.25.65.47 1.31.66 1.96l-1.92.56zm-43.11-.36l-1.91-.59c.2-.66.44-1.31.7-1.95l1.85.75c-.24.58-.45 1.18-.64 1.79zm41.53-3.61c-.29-.56-.6-1.12-.94-1.65l1.7-1.06c.37.58.71 1.19 1.02 1.8l-1.78.91zm-39.88-.34l-1.76-.94c.32-.6.68-1.2 1.05-1.78l1.68 1.09c-.35.53-.67 1.08-.97 1.63zm37.57-3.26c-.39-.5-.8-.98-1.23-1.45l1.46-1.36c.47.51.92 1.04 1.35 1.58l-1.58 1.23zm-35.21-.3l-1.55-1.26c.43-.53.89-1.06 1.37-1.55l1.44 1.39c-.44.45-.86.93-1.26 1.42zm32.27-2.8c-.48-.42-.98-.82-1.49-1.19l1.18-1.61c.55.41 1.1.84 1.62 1.29l-1.31 1.51zm-29.27-.25l-1.29-1.53c.53-.44 1.08-.87 1.64-1.27l1.16 1.63c-.52.37-1.03.76-1.51 1.17zm25.79-2.25c-.55-.32-1.11-.62-1.68-.89l.86-1.81c.62.29 1.24.62 1.83.97l-1.01 1.73zm-22.28-.18l-.98-1.75c.6-.34 1.22-.65 1.85-.94l.83 1.82c-.57.27-1.14.56-1.7.87zm18.4-1.6c-.6-.21-1.21-.39-1.82-.55l.5-1.94c.67.17 1.33.37 1.98.6l-.66 1.89zm-14.48-.13l-.63-1.9c.65-.22 1.32-.41 1.99-.57l.46 1.95c-.61.15-1.23.33-1.82.52zm10.33-.89c-.62-.09-1.26-.16-1.89-.19l.12-2c.69.04 1.38.11 2.06.21l-.29 1.98zm-6.17-.05l-.25-1.99c.68-.09 1.38-.15 2.06-.18l.09 2c-.63.03-1.27.09-1.9.17z",
                    fill: "url(#warning-filled-m64_svg__paint1_linear)"
                }), l().createElement("defs", null, l().createElement("linearGradient", {
                    id: "warning-filled-m64_svg__paint0_linear",
                    x1: 19.587,
                    y1: 44.377,
                    x2: 44.336,
                    y2: 19.628,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#F0B90B"
                }), l().createElement("stop", {
                    offset: .28,
                    stopColor: "#F1BC0F"
                }), l().createElement("stop", {
                    offset: .569,
                    stopColor: "#F4C41C"
                }), l().createElement("stop", {
                    offset: .862,
                    stopColor: "#F8D230"
                }), l().createElement("stop", {
                    offset: .993,
                    stopColor: "#FBDA3C"
                })), l().createElement("linearGradient", {
                    id: "warning-filled-m64_svg__paint1_linear",
                    x1: 14.68,
                    y1: 49.323,
                    x2: 49.312,
                    y2: 14.691,
                    gradientUnits: "userSpaceOnUse"
                }, l().createElement("stop", {
                    stopColor: "#F0B90B"
                }), l().createElement("stop", {
                    offset: .28,
                    stopColor: "#F1BC0F"
                }), l().createElement("stop", {
                    offset: .569,
                    stopColor: "#F4C41C"
                }), l().createElement("stop", {
                    offset: .862,
                    stopColor: "#F8D230"
                }), l().createElement("stop", {
                    offset: .993,
                    stopColor: "#FBDA3C"
                }))))
            };
            var Se = H,
                be = T,
                we = O,
                Ce = U,
                Ie = function() {
                    var e = (0, c._)((0, r.useState)(H), 2),
                        t = e[0],
                        n = e[1];
                    return {
                        loading: t,
                        wrapper: (0, r.useCallback)(function() {
                            var e = (0, pe._)(ve().mark((function e(t) {
                                return ve().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n((function(e) {
                                                return e === Se ? be : we
                                            })), t().finally((function() {
                                                return n(Ce)
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [])
                    }
                },
                Re = {
                    action: "",
                    actionResult: "",
                    Questionnaire: {
                        flowId: "",
                        questions: []
                    }
                };
            const Me = function() {
                var e = (0, c._)((0, r.useState)({}), 2),
                    t = e[0],
                    n = e[1],
                    a = (0, c._)((0, r.useState)(!1), 2),
                    s = a[0],
                    m = a[1],
                    u = B(),
                    f = u.i18n,
                    d = u.setCmeInfo,
                    p = u.onRefresh,
                    h = function() {
                        var e = Ie(),
                            t = e.loading,
                            n = e.wrapper,
                            l = (0, c._)((0, r.useState)(Re), 2),
                            i = l[0],
                            o = l[1],
                            a = (0, r.useCallback)((function() {
                                n((0, pe._)(ve().mark((function e() {
                                    var t;
                                    return ve().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return o(Re), e.next = 3, (0, ge.bE)("/bapi/kyc/v1/private/certificate/fixed/question/init", {
                                                    flowType: Q
                                                });
                                            case 3:
                                                t = e.sent.data, o((function(e) {
                                                    return (0, xe._)((0, he._)({}, e), {
                                                        Questionnaire: t || {}
                                                    })
                                                }));
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))))
                            }), []);
                        (0, r.useMemo)((function() {
                            return a()
                        }), []);
                        var s = (0, r.useCallback)((function(e) {
                                n((0, pe._)(ve().mark((function t() {
                                    var n;
                                    return ve().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, (0, ge.bE)("/bapi/kyc/v1/private/certificate/fixed/question/skip", e);
                                            case 2:
                                                n = t.sent.data, o((function(e) {
                                                    return (0, xe._)((0, he._)({}, e), {
                                                        action: K,
                                                        actionResult: n && n.result ? V : W
                                                    })
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))))
                            }), []),
                            m = (0, r.useCallback)((function(e) {
                                n((0, pe._)(ve().mark((function t() {
                                    var n;
                                    return ve().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, (0, ge.bE)("/bapi/kyc/v1/private/certificate/fixed/question/submit", e);
                                            case 2:
                                                n = t.sent.data, o((function(e) {
                                                    return (0, xe._)((0, he._)({}, e), {
                                                        action: j,
                                                        actionResult: n && n.result
                                                    })
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))))
                            }), []);
                        return {
                            questionnaire: i,
                            loading: t,
                            onRefresh: a,
                            skipAnswer: s,
                            commitAnswer: m
                        }
                    }(),
                    x = h.loading,
                    E = h.skipAnswer,
                    v = h.commitAnswer,
                    g = h.onRefresh,
                    z = h.questionnaire,
                    _ = z.action,
                    y = z.actionResult,
                    A = z.Questionnaire,
                    k = A.flowId,
                    S = void 0 === k ? "" : k,
                    b = A.questions,
                    R = void 0 === b ? [] : b,
                    M = (0, r.useCallback)((function(e) {
                        var t = e.questionId,
                            c = e.opt,
                            r = e.multiSelect;
                        return function() {
                            n((function(e) {
                                var n = e[t] || [],
                                    l = n.indexOf(c),
                                    i = r ? n : [],
                                    o = l > -1 ? i.filter((function(e) {
                                        return e !== c
                                    })) : i.concat(c);
                                return (0, xe._)((0, he._)({}, e), (0, w._)({}, t, o))
                            }))
                        }
                    }), []),
                    q = T === x,
                    F = R.every((function(e) {
                        var n = e.questionId;
                        return (t[n] || []).length
                    }));
                if (l().useEffect((function() {
                        _ === K && y === V && d((function(e) {
                            return (0, xe._)((0, he._)({}, e), {
                                Questionnaire: D.SKIP
                            })
                        }))
                    }), [_, y]), _ === j) {
                    if (y === V) return l().createElement(C.A, {
                        __css: {
                            p: "md",
                            bg: "popupBg"
                        },
                        sx: {
                            borderRadius: "8px",
                            textAlign: "center"
                        }
                    }, l().createElement(Ae, {
                        size: 76,
                        sx: {
                            my: "xs"
                        }
                    }), l().createElement(C.A, {
                        sx: {
                            my: "md",
                            px: "md"
                        }
                    }, l().createElement(o.A, {
                        sx: {
                            fontSize: 20,
                            color: "t.primary"
                        },
                        children: L("cme-ques-modal-succMsg", f)
                    }), l().createElement(o.A, {
                        sx: {
                            fontSize: 14,
                            mt: "xs",
                            color: "t.third"
                        },
                        children: L("cme-ques-modal-succTip", f)
                    })), l().createElement(i.A, {
                        sx: {
                            alignItems: "center"
                        }
                    }, l().createElement(I.A, {
                        variant: "default",
                        sx: {
                            height: 48,
                            flex: 1
                        },
                        onClick: function() {
                            return p()
                        },
                        children: L("cme-ques-modal-complete", f)
                    })));
                    if (y === W) return l().createElement(C.A, {
                        __css: {
                            p: "md",
                            bg: "popupBg"
                        },
                        sx: {
                            borderRadius: "8px",
                            textAlign: "center"
                        }
                    }, l().createElement(ke, {
                        size: 76,
                        sx: {
                            my: "xs"
                        }
                    }), l().createElement(C.A, {
                        sx: {
                            my: "md",
                            px: "md"
                        }
                    }, l().createElement(o.A, {
                        sx: {
                            fontSize: 20,
                            color: "t.primary"
                        },
                        children: L("cme-ques-modal-failMsg", f)
                    }), l().createElement(o.A, {
                        sx: {
                            fontSize: 14,
                            mt: "xs",
                            color: "t.third"
                        },
                        children: L("cme-ques-modal-failTip", f)
                    })), l().createElement(i.A, {
                        sx: {
                            alignItems: "center"
                        }
                    }, l().createElement(I.A, {
                        variant: "quiet",
                        disabled: q,
                        sx: {
                            height: 48,
                            mr: "xs",
                            flex: 1
                        },
                        onClick: function() {
                            return E({
                                flowType: Q
                            })
                        },
                        children: L("cme-ques-modal-skip", f)
                    }), l().createElement(I.A, {
                        variant: "default",
                        disabled: q,
                        sx: {
                            height: 48,
                            flex: 1
                        },
                        onClick: function() {
                            return g()
                        },
                        children: L("cme-ques-modal-reAnswer", f)
                    })))
                }
                return l().createElement(i.A, {
                    __css: {
                        fontSize: 1,
                        p: "md",
                        bg: "popupBg",
                        color: "t.primary"
                    },
                    sx: {
                        borderRadius: [0, "4px"],
                        flexDirection: "column",
                        width: ["100vw", 580],
                        height: ["100vh", 600],
                        maxHeight: ["100vh", "90vh"],
                        maxWidth: ["100vw", "90vw"]
                    }
                }, l().createElement(C.A, {
                    sx: {
                        flex: "none",
                        mb: "md"
                    }
                }, l().createElement(o.A, {
                    sx: {
                        fontSize: 4,
                        mb: "xs",
                        fontWeight: "semibold"
                    },
                    children: L("cme-ques-modal-title", f)
                }), l().createElement(o.A, {
                    sx: {
                        color: "t.secondary",
                        lineHeight: "20px"
                    },
                    children: L("cme-ques-modal-desc", f)
                })), l().createElement(C.A, {
                    __css: {
                        flex: 1,
                        p: "sm",
                        bg: "bg3"
                    },
                    sx: {
                        overflowY: "auto",
                        position: "relative"
                    }
                }, x === T && l().createElement(ce, null), R.map((function(e, n) {
                    var c = e.questionId,
                        r = e.titleLangFlag,
                        a = e.options,
                        s = e.multiSelect,
                        m = "0".concat(n + 1, ".").slice(-3),
                        u = t[c] || [];
                    return l().createElement(i.A, {
                        key: c,
                        sx: {
                            alignItems: "flex-start",
                            mb: "md"
                        }
                    }, l().createElement(o.A, {
                        sx: {
                            flex: "none",
                            fontSize: "2",
                            fontWeight: "semibold"
                        },
                        children: m
                    }), l().createElement(C.A, {
                        sx: {
                            flex: 1,
                            ml: "minor"
                        }
                    }, l().createElement(o.A, {
                        __css: {
                            fontSize: 2,
                            fontWeight: "semibold"
                        },
                        sx: {
                            "&::after": {
                                content: '"*"',
                                color: "error",
                                ml: "minor",
                                fontSize: "80%"
                            }
                        },
                        children: L(r, f)
                    }), a.map((function(e, t) {
                        return l().createElement(te, {
                            key: t,
                            sx: {
                                mt: "sm"
                            },
                            multiSelect: s,
                            optionStr: L(e, f),
                            checked: u.indexOf(e) > -1,
                            onClick: M({
                                questionId: c,
                                opt: e,
                                multiSelect: s
                            })
                        })
                    }))))
                }))), l().createElement(C.A, {
                    sx: {
                        flex: "none",
                        mt: "md",
                        fontSize: 2,
                        color: "t.primary"
                    }
                }, l().createElement(te, {
                    checked: s,
                    sx: {
                        fontSize: 0
                    },
                    onClick: function() {
                        return m(!s)
                    },
                    optionStr: l().createElement(se, null)
                }), l().createElement(i.A, {
                    sx: {
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "md"
                    }
                }, l().createElement(I.A, {
                    variant: "quiet",
                    disabled: q,
                    onClick: function() {
                        return E({
                            flowType: Q
                        })
                    },
                    sx: {
                        height: 48,
                        fontSize: 2,
                        minWidth: ["auto", 180],
                        flex: [1, "auto"],
                        mr: "md"
                    },
                    children: L("cme-ques-modal-skip", f)
                }), l().createElement(I.A, {
                    sx: {
                        height: 48,
                        fontSize: 2,
                        minWidth: ["auto", 180],
                        flex: [1, "auto"]
                    },
                    disabled: q || !s || !F,
                    onClick: function() {
                        var e = Object.keys(t).map((function(e) {
                            return {
                                questionId: e,
                                options: t[e]
                            }
                        }));
                        n({}), v({
                            flowId: S,
                            flowType: Q,
                            answers: e
                        })
                    },
                    children: L("cme-ques-modal-submit", f)
                }))))
            };
            const qe = function(e) {
                return l().createElement(f.A, (0, u._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M13.4 12l6.6 6.6-1.4 1.4-6.6-6.6L5.4 20 4 18.6l6.6-6.6L4 5.4 5.4 4l6.6 6.6L18.6 4 20 5.4 13.4 12z",
                    fill: "currentColor"
                }))
            };
            var Fe = n("wIZF");

            function Be(e, t, n) {
                void 0 === t && (t = []), void 0 === n && (n = {
                    loading: !1
                });
                var c = (0, r.useRef)(0),
                    l = function() {
                        var e = (0, r.useRef)(!1),
                            t = (0, r.useCallback)((function() {
                                return e.current
                            }), []);
                        return (0, r.useEffect)((function() {
                            return e.current = !0,
                                function() {
                                    e.current = !1
                                }
                        }), []), t
                    }(),
                    i = (0, r.useState)(n),
                    o = i[0],
                    a = i[1],
                    s = (0, r.useCallback)((function() {
                        for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
                        var r = ++c.current;
                        return o.loading || a((function(e) {
                            return (0, Fe.__assign)((0, Fe.__assign)({}, e), {
                                loading: !0
                            })
                        })), e.apply(void 0, t).then((function(e) {
                            return l() && r === c.current && a({
                                value: e,
                                loading: !1
                            }), e
                        }), (function(e) {
                            return l() && r === c.current && a({
                                error: e,
                                loading: !1
                            }), e
                        }))
                    }), t);
                return [o, s]
            }
            const Le = function() {
                var e = B(),
                    t = e.i18n,
                    n = e.onRefresh,
                    a = (0, c._)((0, r.useState)(!1), 2),
                    s = a[0],
                    m = a[1],
                    u = function() {
                        var e = (0, c._)(Be(function() {
                            var e = (0, pe._)(ve().mark((function e(t) {
                                var n;
                                return ve().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, ge.bE)("/bapi/kyc/v1/private/certificate/fixed/question/contract/check", t);
                                        case 2:
                                            return n = e.sent.data, e.abrupt("return", n && n.result ? V : W);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), 2);
                        return {
                            state: e[0],
                            commitDisclaimer: e[1]
                        }
                    }(),
                    f = u.commitDisclaimer,
                    d = u.state,
                    p = d.loading,
                    h = d.value,
                    x = (0, r.useMemo)((function() {
                        return L("cme-disclaimer-content", t).split("|")
                    }), [t]);
                return l().useEffect((function() {
                    h === V && n()
                }), [h]), l().createElement(i.A, {
                    __css: {
                        fontSize: 1,
                        p: "md",
                        bg: "popupBg",
                        color: "t.primary"
                    },
                    sx: {
                        borderRadius: [0, "4px"],
                        flexDirection: "column",
                        width: ["100vw", 580],
                        height: ["100vh", 600],
                        maxHeight: ["100vh", "90vh"],
                        maxWidth: ["100vw", "90vw"]
                    }
                }, l().createElement(i.A, {
                    sx: {
                        alignItems: "flex-start",
                        mb: "md",
                        justifyContent: "space-between"
                    }
                }, l().createElement(o.A, {
                    sx: {
                        fontSize: 4,
                        fontWeight: "semibold"
                    },
                    children: L("cme-disclaimer-title", t)
                }), l().createElement(qe, {
                    onClick: n,
                    sx: {
                        cursor: "pointer"
                    },
                    size: 20,
                    color: "icon"
                })), l().createElement(C.A, {
                    __css: {
                        fontSize: 1,
                        color: "t.secondary"
                    },
                    sx: {
                        flex: 1,
                        p: "sm",
                        bg: "bg3",
                        overflowY: "auto"
                    }
                }, x.map((function(e, t) {
                    return l().createElement(o.A, {
                        key: t,
                        sx: {
                            mt: t ? "md" : 0,
                            textIndent: "2em"
                        },
                        children: e
                    })
                }))), l().createElement(C.A, {
                    sx: {
                        flex: "none",
                        mt: "md",
                        fontSize: 2,
                        color: "t.primary"
                    }
                }, l().createElement(te, {
                    checked: s,
                    sx: {
                        fontSize: 0
                    },
                    onClick: function() {
                        return m(!s)
                    },
                    optionStr: L("cme-disclaimer-statement", t)
                }), l().createElement(i.A, {
                    sx: {
                        justifyContent: "center",
                        mt: "md"
                    }
                }, l().createElement(I.A, {
                    variant: "default",
                    disabled: !s && !p,
                    onClick: function() {
                        return f({
                            flowType: Q
                        })
                    },
                    sx: {
                        height: 48,
                        minWidth: 180,
                        fontSize: 2
                    },
                    children: L("cme-disclaimer-submit", t)
                }))))
            };
            const Pe = function(e) {
                var t = B(),
                    n = t.i18n,
                    s = t.cmeLoading,
                    m = t.setCmeInfo,
                    f = t.cmeInfo,
                    d = f.Questionnaire,
                    p = f.Contract,
                    h = Ie(),
                    x = h.loading,
                    E = h.wrapper,
                    v = (0, c._)((0, r.useState)(!1), 2),
                    g = v[0],
                    z = v[1];
                l().useEffect((function() {
                    z(!1)
                }), [s]);
                var _ = x === T || x === O,
                    y = d === D.PASS || d === D.SKIP && p,
                    A = d === D.FAILED,
                    k = d === D.SKIP && !p,
                    S = k ? Le : Me,
                    b = (0, r.useCallback)((function() {
                        E((0, pe._)(ve().mark((function e() {
                            var t;
                            return ve().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, ge.bE)("/bapi/kyc/v1/private/certificate/fixed/question/skip", {
                                            flowType: Q
                                        });
                                    case 2:
                                        (t = e.sent.data) && t.result && (m((function(e) {
                                            return (0, xe._)((0, he._)({}, e), {
                                                Questionnaire: D.SKIP
                                            })
                                        })), setTimeout((function() {
                                            return z(!0)
                                        }), 100));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))))
                    }), []);
                return l().createElement(C.A, (0, u._)({}, e, {
                    __css: {
                        color: "button.white"
                    }
                }), l().createElement(i.A, {
                    sx: {
                        alignItems: "center"
                    }
                }, l().createElement(ye, {
                    size: 20,
                    color: "t.yellow",
                    sx: {
                        mr: "xs"
                    }
                }), l().createElement(o.A, {
                    children: L("cme-ques-title", n)
                })), l().createElement(o.A, {
                    __css: {
                        mt: "xs",
                        mb: "sm"
                    },
                    sx: {
                        color: "#848E9C",
                        fontSize: 1,
                        lineHeight: "20px"
                    },
                    children: L("cme-ques-message", n)
                }), y ? l().createElement(C.A, {
                    __css: {
                        display: "inline-flex",
                        bg: "rgba(46,189,133,0.3)",
                        color: "success"
                    },
                    sx: {
                        alignItems: "center",
                        fontSize: 0,
                        borderRadius: "circle",
                        px: "xs",
                        py: "minor"
                    }
                }, l().createElement($, {
                    size: 18,
                    color: "success",
                    sx: {
                        mr: "minor"
                    }
                }), l().createElement(o.A, {
                    children: L("cme-ques-completed", n)
                })) : A ? l().createElement(C.A, {
                    __css: {}
                }, l().createElement(i.A, {
                    sx: {
                        mb: "sm",
                        alignItems: "center"
                    }
                }, l().createElement(ie, {
                    color: "error",
                    size: 16
                }), l().createElement(o.A, {
                    sx: {
                        ml: "xs",
                        color: "error"
                    },
                    children: L("cme-ques-fail", n)
                })), l().createElement(i.A, null, l().createElement(I.A, {
                    disabled: _,
                    sx: {
                        mr: "xs"
                    },
                    onClick: function() {
                        return z(!0)
                    },
                    children: L("cme-ques-reAnswer", n)
                }), l().createElement(I.A, {
                    variant: "quiet",
                    disabled: _,
                    onClick: b,
                    children: L("cme-ques-skip", n)
                }))) : k ? l().createElement(C.A, {
                    __css: {}
                }, l().createElement(i.A, {
                    sx: {
                        mb: "sm",
                        alignItems: "center"
                    }
                }, l().createElement(ie, {
                    color: "error",
                    size: 18
                }), l().createElement(o.A, {
                    sx: {
                        ml: "xs",
                        color: "error"
                    },
                    children: L("cme-ques-noDisclaimer", n)
                })), l().createElement(I.A, {
                    onClick: function() {
                        return z(!0)
                    },
                    children: L("cme-ques-continue", n)
                })) : l().createElement(I.A, {
                    onClick: function() {
                        return z(!0)
                    },
                    children: L("cme-ques-start", n)
                }), g ? l().createElement(_e.Ay, null, l().createElement(a.A, {
                    theme: ze.A
                }, l().createElement(re, {
                    children: l().createElement(S, null)
                }))) : null)
            };
            var De = n("O13v"),
                He = n("dwlU"),
                Te = function(e) {
                    return [{
                        key: "kycBasicStatus",
                        status: 0
                    }, {
                        key: "kycAdvancedStatus",
                        status: 0
                    }, {
                        key: "kycPoaStatus",
                        status: 0
                    }].map((function(t) {
                        var n = e[t.key] || "";
                        return {
                            key: t.key,
                            status: P[n] || 0
                        }
                    }))
                },
                Ue = {
                    showCME: !1,
                    Kyc: Te({}),
                    kycWckStatus: 0,
                    Questionnaire: 0,
                    Contract: !1
                },
                Oe = g(b.checkSticky, 16.66667),
                Ve = function() {
                    return null
                },
                We = function(e) {
                    e.top;
                    return e.children
                },
                Ke = function(e) {
                    var t = e.lng,
                        n = e.i18nHost,
                        u = e.staticHost,
                        f = void 0 === u ? n : u,
                        p = e.isPage,
                        h = void 0 !== p && p,
                        x = e.isSticky,
                        E = void 0 !== x && x,
                        v = e.stickyTop,
                        g = void 0 === v ? 0 : v,
                        z = e.expand,
                        _ = void 0 !== z && z,
                        y = e.layoutMax,
                        A = void 0 === y ? 1248 : y,
                        k = e.emit,
                        S = void 0 === k ? Ve : k,
                        w = (0, c._)((0, r.useState)(h || _), 2),
                        C = w[0],
                        I = w[1],
                        R = function(e) {
                            var t = e.i18nHost,
                                n = e.language,
                                c = (0, He.s)((0, pe._)(ve().mark((function e() {
                                    return ve().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", (0, De.TU)({
                                                    basePath: "".concat(t, "/api/i18n/-/web/cms"),
                                                    namespace: "compliance",
                                                    locale: n,
                                                    fallback: "en"
                                                }));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), [t, n], {
                                    value: {}
                                }),
                                r = c.value,
                                l = c.loading,
                                i = (0, N._)(c, ["value", "loading"]);
                            return (0, xe._)((0, he._)({}, i), {
                                i18n: r,
                                loading: l
                            })
                        }({
                            i18nHost: n,
                            language: /de/i.test(t) ? t : "en"
                        }),
                        M = R.i18n,
                        q = R.loading,
                        B = function() {
                            var e = Ie(),
                                t = e.loading,
                                n = e.wrapper,
                                l = (0, c._)((0, r.useState)(Ue), 2),
                                i = l[0],
                                o = l[1],
                                a = (0, r.useCallback)((function() {
                                    n((0, pe._)(ve().mark((function e() {
                                        var t, n, c, r, l, i, a;
                                        return ve().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, (0, ge.Jt)("/bapi/accounts/v2/private/country/user/restricted");
                                                case 3:
                                                    t = e.sent.data, n = t.checkResult, c = t.country, r = t.extraInfo, l = r.kycWckStatus, i = r.cmeQuestionnaireStatus, a = r.cmeContractChecked, o({
                                                        showCME: !n && "TWO" === c,
                                                        Kyc: Te(r || {}),
                                                        kycWckStatus: P[l] || 0,
                                                        Questionnaire: D[i],
                                                        Contract: !!a
                                                    }), e.next = 12;
                                                    break;
                                                case 9:
                                                    e.prev = 9, e.t0 = e.catch(0), o(Ue);
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 9]
                                        ])
                                    }))))
                                }), []);
                            return (0, r.useMemo)((function() {
                                return a()
                            }), []), {
                                cmeInfo: i,
                                setCmeInfo: o,
                                loading: t,
                                onRefresh: a
                            }
                        }(),
                        T = B.cmeInfo,
                        U = B.setCmeInfo,
                        V = B.loading,
                        W = B.onRefresh,
                        K = V !== H && !q;
                    l().useEffect((function() {
                        S({
                            done: K
                        })
                    }), [K]);
                    var j = (0, r.useCallback)((function(e) {
                            I(e), E && !h && Oe()
                        }), [E, h]),
                        Q = !h && E ? b : We,
                        Y = {
                            lng: t,
                            i18n: M,
                            cmeInfo: T,
                            cmeLoading: V,
                            setCmeInfo: U,
                            onRefresh: W,
                            staticHost: f,
                            layoutMax: A
                        };
                    return K && T.showCME ? l().createElement(Q, {
                        top: "".concat(g)
                    }, l().createElement(a.A, {
                        theme: s.A
                    }, l().createElement(F.Provider, {
                        value: Y
                    }, !h && l().createElement(ee, {
                        as: i.A,
                        boxCss: {
                            bg: "badgeYellowBg"
                        },
                        sx: {
                            py: "12px",
                            cursor: "pointer",
                            alignItems: "center"
                        },
                        onClick: function() {
                            return j(!C)
                        }
                    }, l().createElement(m.A, {
                        color: "primary",
                        size: 20,
                        sx: {
                            flex: "none"
                        }
                    }), l().createElement(o.A, {
                        sx: {
                            color: "t.primary",
                            flex: 1,
                            px: "xs",
                            fontSize: 1
                        },
                        children: L("cme-prompt", M)
                    }), l().createElement(d, {
                        size: 20,
                        color: "t.disabled",
                        sx: {
                            flex: "none",
                            transform: "rotate(".concat(C ? -90 : 90, "deg)")
                        }
                    })), l().createElement(ee, {
                        as: i.A,
                        boxCss: {
                            bg: "popupBg",
                            position: "relative",
                            display: C ? "block" : "none"
                        },
                        sx: {
                            flexDirection: ["column", "column", "row"],
                            color: "button.white",
                            py: "md"
                        }
                    }, V === O && l().createElement(ce, null), l().createElement(o.A, {
                        __css: {
                            flex: 1,
                            mr: [0, 0, 120]
                        },
                        sx: {
                            color: "#848E9C",
                            fontSize: 1,
                            lineHeight: "20px"
                        },
                        children: L("cme-message", M)
                    }), l().createElement(i.A, {
                        __css: {
                            flexDirection: ["column", "row"]
                        },
                        sx: {
                            flex: [1, 1, 2],
                            fontSize: 1,
                            mt: ["md", "md", 0]
                        }
                    }, l().createElement(de, {
                        sx: {
                            flex: 1,
                            mr: [0, 120]
                        }
                    }), l().createElement(Pe, {
                        sx: {
                            flex: 1,
                            mt: ["plus", 0]
                        }
                    })))))) : null
                };
            const je = l().memo(Ke)
        }
    }
]);