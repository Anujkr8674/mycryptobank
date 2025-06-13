"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "40548991-c0bd-5eb1-b402-8307cf9a621e")
    } catch (e) {}
}();
(self.webpackChunkrewards_hub_ui = self.webpackChunkrewards_hub_ui || []).push([
    [767], {
        FHAr: (e, t, r) => {
            r.d(t, {
                a: () => d
            });
            var n, a = r("Zu1U");
            ! function(e) {
                e.LITE = "lite", e.PRO = "pro"
            }(n || (n = {}));
            var o = r("sViW"),
                i = r("VP0d"),
                s = r("Pz56"),
                c = r.n(s),
                l = r("DTvD"),
                u = r("fqkG"),
                d = function() {
                    var e = (0, a.S)().isHybrid,
                        t = function() {
                            var e = (0, a.S)().isHybrid,
                                t = (0, i.A)((0, l.useState)(null), 2),
                                r = t[0],
                                n = t[1],
                                s = (0, i.A)((0, l.useState)(!1), 2),
                                d = s[0],
                                h = s[1];
                            return (0, l.useEffect)((function() {
                                function t() {
                                    return (t = (0, o.A)(c().mark((function e() {
                                        return c().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, h(!0), e.t0 = n, e.next = 5, u.A.getAppConfig();
                                                case 5:
                                                    e.t1 = e.sent, (0, e.t0)(e.t1), e.next = 12;
                                                    break;
                                                case 9:
                                                    e.prev = 9, e.t2 = e.catch(0), console.error("useAppSettings error", e.t2);
                                                case 12:
                                                    return e.prev = 12, h(!1), e.finish(12);
                                                case 15:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 9, 12, 15]
                                        ])
                                    })))).apply(this, arguments)
                                }
                                e && function() {
                                    t.apply(this, arguments)
                                }()
                            }), [e]), {
                                settings: r,
                                isLoading: d
                            }
                        }(),
                        r = t.isLoading,
                        s = t.settings;
                    return {
                        isLoading: r,
                        isLiteMode: e ? (null === s || void 0 === s ? void 0 : s.project_type) === n.LITE : null,
                        appMode: e ? null === s || void 0 === s ? void 0 : s.project_type : null
                    }
                }
        },
        Xb3g: (e, t, r) => {
            r.d(t, {
                L4: () => i
            });
            var n = r("VP0d"),
                a = r("DTvD"),
                o = function(e) {
                    if (e <= 0) return {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    };
                    var t = e / 1e3;
                    return {
                        days: Math.floor(t / 86400),
                        hours: Math.floor(t / 3600 % 24),
                        minutes: Math.floor(t / 60 % 60),
                        seconds: Math.floor(t % 60)
                    }
                },
                i = function(e, t, r, i) {
                    var s = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 1e3,
                        c = "number" === typeof e ? e : e.valueOf(),
                        l = "number" === typeof t ? t : t.valueOf(),
                        u = (0, n.A)((0, a.useState)({
                            started: Date.now() >= c,
                            expired: Date.now() >= l,
                            duration: {}
                        }), 2),
                        d = u[0],
                        h = u[1];
                    return (0, a.useEffect)((function() {
                        var e, t = function() {
                            var t = Date.now(),
                                n = t >= c;
                            n && !d.started && r && r();
                            var a = t >= l;
                            a && (clearInterval(e), i && i());
                            var s = o((n ? l : c) - t),
                                u = s.days,
                                f = s.hours,
                                p = s.minutes,
                                v = s.seconds;
                            h({
                                started: n,
                                expired: a,
                                duration: {
                                    days: u,
                                    hours: f,
                                    minutes: p,
                                    seconds: v
                                }
                            })
                        };
                        return e = setInterval(t, s), t(),
                            function() {
                                e && clearInterval(e)
                            }
                    }), [d.started]), d
                }
        },
        MXiP: (e, t, r) => {
            r.d(t, {
                j: () => i
            });
            var n, a = r("DTvD"),
                o = r("NrY2");
            ! function(e) {
                e.RTL = "rtl", e.LTR = "ltr"
            }(n || (n = {}));
            var i = function() {
                var e = a.useContext(o.A);
                return {
                    direction: e,
                    isRtl: e === n.RTL,
                    isLtr: e === n.LTR
                }
            }
        },
        "Z/B3": (e, t, r) => {
            r.d(t, {
                C: () => a,
                k: () => n
            });
            var n = "theme",
                a = {
                    LIGHT: "light",
                    LIGHT_GLACIER: "light_glacier",
                    DARK: "dark",
                    DARK_CLASSIC: "dark_classic",
                    DARK_MIDNIGHT: "dark_midnight"
                }
        },
        xrNQ: (e, t, r) => {
            r.d(t, {
                D: () => s
            });
            var n = r("HS2I"),
                a = r("nn0X"),
                o = r("Z/B3"),
                i = r("+Yhp"),
                s = function() {
                    var e = (null === n.useTheme || void 0 === n.useTheme ? void 0 : (0, n.useTheme)()) || {},
                        t = e.theme,
                        r = e.toggleTheme,
                        s = (0, a.DP)(),
                        c = s.isLight,
                        l = s.toggleTheme,
                        u = t || (c ? o.C.LIGHT : o.C.DARK),
                        d = Object.values(o.C).includes(u.toLowerCase()) ? u.toLowerCase() : o.C.LIGHT;
                    return {
                        isLight: (0, i.k)(d),
                        theme: d,
                        toggleTheme: r || l
                    }
                }
        },
        "+Yhp": (e, t, r) => {
            r.d(t, {
                k: () => a
            });
            var n = r("Z/B3"),
                a = function(e) {
                    return e.toLowerCase().startsWith(n.C.LIGHT)
                }
        },
        NrY2: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = r("DTvD");
            const a = n.createContext("ltr")
        },
        "Y1+p": (e, t, r) => {
            r.d(t, {
                J: () => h
            });
            var n = r("ezuS"),
                a = r("BK7R"),
                o = r("QUKP"),
                i = r("gZfF"),
                s = r("TrCV"),
                c = r("O94r"),
                l = r.n(c),
                u = r("eeEA"),
                d = r("k5JY"),
                h = function(e) {
                    var t = e.header,
                        r = e.footer,
                        c = e.children,
                        h = e.showClose,
                        f = void 0 !== h && h,
                        p = e.onClose,
                        v = e.withActionSheetStyle,
                        m = void 0 !== v && v,
                        g = e.className,
                        b = (0, i.A)(e, ["header", "footer", "children", "showClose", "onClose", "withActionSheetStyle", "className"]);
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)(d.Ay, (0, o.A)((0, a.A)({}, b), {
                            enablePortal: !0,
                            className: l()("CommonModal", g, (0, n.A)({
                                "CommonModal--ActionSheet": m
                            }, g || "", g)),
                            children: [(0, s.jsx)(d.Ay.Header, {
                                showNext: f,
                                onNextClick: p,
                                children: (0, s.jsx)(u.Ay, {
                                    className: "ul-flex-1",
                                    children: t
                                })
                            }), c && (0, s.jsx)(d.Ay.Content, {
                                children: c
                            }), r && (0, s.jsx)(d.Ay.Footer, {
                                children: (0, s.jsx)(s.Fragment, {
                                    children: r
                                })
                            })]
                        }))
                    })
                }
        },
        tY2v: (e, t, r) => {
            r.d(t, {
                J: () => p
            });
            var n = r("BK7R"),
                a = r("QUKP"),
                o = r("gZfF"),
                i = r("TrCV"),
                s = r("O94r"),
                c = r.n(s),
                l = r("DTvD"),
                u = r("RGyw"),
                d = r("SR26"),
                h = r("D4P9"),
                f = r("Y1+p"),
                p = function(e) {
                    var t = e.title,
                        r = e.trigger,
                        s = e.triggerClass,
                        p = e.okText,
                        v = e.notificationText,
                        m = e.children,
                        g = e.onVisibleChange,
                        b = (0, o.A)(e, ["title", "trigger", "triggerClass", "okText", "notificationText", "children", "onVisibleChange"]),
                        x = (0, l.useState)(!1),
                        y = x[0],
                        C = x[1];
                    return (0, i.jsxs)(i.Fragment, {
                        children: [r && (0, i.jsx)(u.A, {
                            className: c()("ul-trigger", s),
                            role: "button",
                            onClick: function() {
                                C(!0), g && g(!0)
                            },
                            children: (0, i.jsx)(i.Fragment, {
                                children: r
                            })
                        }), (0, i.jsx)(f.J, (0, a.A)((0, n.A)({}, b), {
                            visible: y,
                            header: (0, i.jsxs)(u.A, {
                                as: "h1",
                                className: "RulesModal-header-title",
                                children: [t, v && (0, i.jsxs)(u.A, {
                                    className: "RulesModal-header-notification",
                                    children: [(0, i.jsx)(d.A, {
                                        style: {
                                            marginRight: "8px",
                                            minWidth: "20px",
                                            minHeight: "20px",
                                            color: "primary"
                                        },
                                        color: "primary"
                                    }), (0, i.jsx)(u.A, {
                                        className: "RulesModal-header-notification-text",
                                        children: v
                                    })]
                                })]
                            }),
                            footer: (0, i.jsx)(h.A, {
                                variant: "primary",
                                onClick: function() {
                                    C(!1), g && g(!1)
                                },
                                className: "ul-width-full",
                                children: p
                            }),
                            className: "RulesModal",
                            children: (0, i.jsx)(u.A, {
                                className: "RulesModal-content",
                                children: m
                            })
                        }))]
                    })
                }
        },
        "5nl0": (e, t, r) => {
            r.d(t, {
                f: () => f
            });
            var n = r("ezuS"),
                a = r("TrCV"),
                o = r("O94r"),
                i = r.n(o),
                s = (r("DTvD"), r("MXiP")),
                c = r("eeEA"),
                l = r("xrNQ"),
                u = r("yiIT"),
                d = "".concat(u.K5, "/static/images/rewards-hub-ui/coupon-bg-dark.svg"),
                h = "".concat(u.K5, "/static/images/rewards-hub-ui/coupon-bg-light.svg"),
                f = function(e) {
                    var t, r = e.variant,
                        o = e.onClick,
                        u = e.isPast,
                        f = e.topLeftContent,
                        p = e.bottomLeftContent,
                        v = e.rightContent,
                        m = e.className,
                        g = (0, l.D)().isLight,
                        b = (0, s.j)().isRtl;
                    return (0, a.jsx)(c.Ay, {
                        onClick: o,
                        className: i()("TicketCard", u ? "TicketCard--past" : "TicketCard--ongoing", m, (t = {
                            "TicketCard--rtl": b
                        }, (0, n.A)(t, "TicketCard--".concat(r), r), (0, n.A)(t, "className", m), t)),
                        style: {
                            backgroundImage: u ? "unset" : "url(".concat(g ? h : d, ")")
                        },
                        children: (0, a.jsxs)(c.Ay, {
                            className: i()("TicketCard-bg"),
                            children: [(0, a.jsx)(c.Ay, {
                                className: "TicketCard-bg-ticket",
                                children: (0, a.jsxs)(c.Ay, {
                                    className: "TicketCard-contentTicket",
                                    children: [f, (0, a.jsxs)(c.Ay, {
                                        children: [(0, a.jsx)(c.Ay, {
                                            className: "TicketCard-divider"
                                        }), (0, a.jsx)(c.Ay, {
                                            className: "TicketCard-footerContainer",
                                            children: p
                                        })]
                                    })]
                                })
                            }), (0, a.jsx)(c.Ay, {
                                className: i()("TicketCard-bg-stub", u ? "TicketCard-bg-stub--past" : "TicketCard-bg-stub--ongoing"),
                                children: (0, a.jsx)(c.Ay, {
                                    className: "TicketCard-contentStub",
                                    children: v
                                })
                            })]
                        })
                    })
                }
        },
        fCDO: (e, t, r) => {
            r.d(t, {
                G: () => c
            });
            var n = r("BK7R"),
                a = r("QUKP"),
                o = r("TrCV"),
                i = r("Y4uf"),
                s = r("DTvD"),
                c = function(e) {
                    var t = (0, s.useMemo)((function() {
                        return Math.random()
                    }), []);
                    return (0, o.jsxs)(i.A, (0, a.A)((0, n.A)({
                        width: "97",
                        height: "96"
                    }, e), {
                        viewBox: "0 0 97 96",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, o.jsx)("path", {
                            d: "M18.5 8.00024L22.5 12.0002L26.5 8.00024L22.5 4.00024L18.5 8.00024Z",
                            fill: "url(#paint0_linear_160_18659_".concat(t, ")")
                        }), (0, o.jsx)("path", {
                            d: "M85.5 76.0002L88.5 79.0002L91.5 76.0002L88.5 73.0002L85.5 76.0002Z",
                            fill: "url(#paint1_linear_160_18659_".concat(t, ")")
                        }), (0, o.jsx)("path", {
                            d: "M86.5 20.0002L88.5 22.0002L90.5 20.0002L88.5 18.0002L86.5 20.0002Z",
                            fill: "url(#paint2_linear_160_18659_".concat(t, ")")
                        }), (0, o.jsx)("path", {
                            d: "M0.5 47.0002L3.5 50.0002L6.5 47.0002L3.5 44.0002L0.5 47.0002Z",
                            fill: "url(#paint3_linear_160_18659_".concat(t, ")")
                        }), (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48.5 88.0002C70.5914 88.0002 88.5 70.0916 88.5 48.0002C88.5 25.9089 70.5914 8.00025 48.5 8.00024C26.4086 8.00024 8.5 25.9089 8.5 48.0002C8.5 70.0916 26.4086 88.0002 48.5 88.0002ZM31.5002 48.3355L43.9749 61.0002L64.5001 40.2415L60.312 36.0002L43.9749 52.5473L35.6581 44.1243L31.5002 48.3355Z",
                            fill: "url(#paint4_linear_160_18659_".concat(t, ")")
                        }), (0, o.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M48.5 19.0002C64.5163 19.0002 77.5 31.984 77.5 48.0002C77.5 64.0165 64.5163 77.0002 48.5 77.0002C32.4837 77.0002 19.5 64.0165 19.5 48.0002C19.5 31.984 32.4837 19.0002 48.5 19.0002ZM31.5002 48.3355L43.9749 61.0002L64.5001 40.2415L60.312 36.0002L43.9749 52.5473L35.6581 44.1243L31.5002 48.3355Z",
                            fill: "url(#paint5_linear_160_18659_".concat(t, ")")
                        }), (0, o.jsxs)("defs", {
                            children: [(0, o.jsxs)("linearGradient", {
                                id: "paint0_linear_160_18659_".concat(t),
                                x1: "22.5",
                                y1: "12.0002",
                                x2: "22.5",
                                y2: "4.00024",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#02C076"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#28D294"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint1_linear_160_18659_".concat(t),
                                x1: "88.5",
                                y1: "79.0002",
                                x2: "88.5",
                                y2: "73.0002",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#02C076"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#28D294"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint2_linear_160_18659_".concat(t),
                                x1: "88.5",
                                y1: "22.0002",
                                x2: "88.5",
                                y2: "18.0002",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#02C076"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#28D294"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint3_linear_160_18659_".concat(t),
                                x1: "3.5",
                                y1: "50.0002",
                                x2: "3.5",
                                y2: "44.0002",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#02C076"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#28D294"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint4_linear_160_18659_".concat(t),
                                x1: "8.5",
                                y1: "48.0002",
                                x2: "88.5",
                                y2: "48.0002",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#28D294",
                                    stopOpacity: "0"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#28D294"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint5_linear_160_18659_".concat(t),
                                x1: "48.5",
                                y1: "77.0002",
                                x2: "48.5",
                                y2: "19.0002",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#02C076"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#28D294"
                                })]
                            })]
                        })]
                    }))
                }
        },
        "5/aQ": (e, t, r) => {
            r.d(t, {
                v: () => c
            });
            var n = r("BK7R"),
                a = r("QUKP"),
                o = r("TrCV"),
                i = r("Y4uf"),
                s = r("DTvD"),
                c = function(e) {
                    var t = (0, s.useMemo)((function() {
                        return Math.random()
                    }), []);
                    return (0, o.jsxs)(i.A, (0, a.A)((0, n.A)({
                        width: "97",
                        height: "96",
                        viewBox: "0 0 97 96"
                    }, e), {
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, o.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M88.5 48C88.5 70.0914 70.5914 88 48.5 88C26.4086 88 8.5 70.0914 8.5 48C8.5 25.9086 26.4086 8 48.5 8C70.5914 8 88.5 25.9086 88.5 48Z",
                            fill: "url(#paint0_linear_681_43855_".concat(t, ")")
                        }), (0, o.jsx)("path", {
                            d: "M48.5 19C64.5163 19 77.5 31.9837 77.5 48C77.5 64.0163 64.5163 77 48.5 77C32.4837 77 19.5 64.0163 19.5 48C19.5 31.9837 32.4837 19 48.5 19Z",
                            fill: "url(#paint1_linear_681_43855_".concat(t, ")")
                        }), (0, o.jsx)("path", {
                            d: "M45.5 66H51.5V60H45.5V66Z",
                            fill: "#14151A"
                        }), (0, o.jsx)("path", {
                            d: "M51.5 54V30H45.5V54L51.5 54Z",
                            fill: "#14151A"
                        }), (0, o.jsxs)("defs", {
                            children: [(0, o.jsxs)("linearGradient", {
                                id: "paint0_linear_681_43855_".concat(t),
                                x1: "8.5",
                                y1: "48",
                                x2: "103",
                                y2: "48",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#F0B90B",
                                    stopOpacity: "0"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F0B90B"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint1_linear_681_43855_".concat(t),
                                x1: "77.5",
                                y1: "48",
                                x2: "19.5",
                                y2: "48",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })]
                        })]
                    }))
                }
        },
        Apzs: (e, t, r) => {
            r.d(t, {
                m: () => s
            });
            var n = r("BK7R"),
                a = r("QUKP"),
                o = r("TrCV"),
                i = r("Y4uf"),
                s = function(e) {
                    return (0, o.jsxs)(i.A, (0, a.A)((0, n.A)({
                        width: "247",
                        height: "169",
                        viewBox: "0 0 247 169"
                    }, e), {
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, o.jsx)("rect", {
                            width: "80.9047",
                            height: "124.233",
                            rx: "9.64883",
                            transform: "matrix(8.42937e-08 -1 -1 -8.42937e-08 205.657 118.143)",
                            fill: "url(#paint0_linear_160_16889)"
                        }), (0, o.jsx)("rect", {
                            x: "171.395",
                            y: "118.161",
                            width: "14.1871",
                            height: "25.9554",
                            transform: "rotate(-180 171.395 118.161)",
                            fill: "url(#paint1_linear_160_16889)"
                        }), (0, o.jsx)("rect", {
                            x: "81.427",
                            y: "83.7346",
                            width: "14.1544",
                            height: "67.3463",
                            transform: "rotate(-90 81.427 83.7346)",
                            fill: "url(#paint2_linear_160_16889)"
                        }), (0, o.jsx)("rect", {
                            x: "171.397",
                            y: "61.147",
                            width: "14.1871",
                            height: "23.9646",
                            transform: "rotate(-180 171.397 61.147)",
                            fill: "url(#paint3_linear_160_16889)"
                        }), (0, o.jsx)("rect", {
                            x: "179.835",
                            y: "83.7346",
                            width: "14.1544",
                            height: "25.8233",
                            transform: "rotate(-90 179.835 83.7346)",
                            fill: "url(#paint4_linear_160_16889)"
                        }), (0, o.jsx)("path", {
                            d: "M200.068 73.2159C200.068 79.0257 195.378 83.7354 189.592 83.7354H164.302V69.5819H189.592C195.378 69.5819 200.068 64.8722 200.068 59.0625V73.2159Z",
                            fill: "#0788A2"
                        }), (0, o.jsx)("path", {
                            d: "M189.592 62.6959C195.377 62.6959 200.067 67.4056 200.067 73.2154V59.0619C200.067 53.2522 195.377 48.5425 189.592 48.5425C186.699 48.5425 184.08 49.7199 182.184 51.6236L164.301 69.5814V83.7348L182.184 65.777C184.08 63.8734 186.699 62.6959 189.592 62.6959Z",
                            fill: "url(#paint5_linear_160_16889)"
                        }), (0, o.jsx)("path", {
                            d: "M128.537 73.2167C128.537 79.0264 133.227 83.7361 139.013 83.7361H164.303V69.5827H139.013C133.227 69.5827 128.537 64.873 128.537 59.0632V73.2167Z",
                            fill: "#0788A2"
                        }), (0, o.jsx)("path", {
                            d: "M139.013 62.6967C133.227 62.6967 128.537 67.4064 128.537 73.2161V59.0627C128.537 53.2529 133.227 48.5432 139.013 48.5432C141.906 48.5432 144.525 49.7206 146.42 51.6243L164.303 69.5821V83.7355L146.42 65.7777C144.525 63.8741 141.906 62.6967 139.013 62.6967Z",
                            fill: "url(#paint6_linear_160_16889)"
                        }), (0, o.jsx)("path", {
                            d: "M188.077 93.363L157.211 62.4863V76.6781L180.979 100.446L188.077 93.363Z",
                            fill: "url(#paint7_linear_160_16889)"
                        }), (0, o.jsx)("path", {
                            d: "M140.532 93.3632L171.398 62.4866V76.6783L147.63 100.447L140.532 93.3632Z",
                            fill: "url(#paint8_linear_160_16889)"
                        }), (0, o.jsx)("rect", {
                            x: "172.738",
                            y: "92.2058",
                            width: "16.8711",
                            height: "31.0582",
                            transform: "rotate(-180 172.738 92.2058)",
                            fill: "url(#paint9_linear_160_16889)"
                        }), (0, o.jsx)("rect", {
                            x: "89.33",
                            y: "101.236",
                            width: "43.2699",
                            height: "7.88474",
                            fill: "white"
                        }), (0, o.jsx)("rect", {
                            x: "89.33",
                            y: "93.7356",
                            width: "29.0389",
                            height: "3.84621",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M89.33 53.1591L96.6378 45.8513L103.946 53.1591L96.6378 60.4669L89.33 53.1591Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M123.273 128.681C118.331 142.618 103.012 149.906 89.0576 144.957L47.7491 130.309C61.7034 135.257 77.0539 127.981 81.9963 114.044L83.1162 110.886L124.393 125.523L123.273 128.681Z",
                            fill: "url(#paint10_linear_160_16889)"
                        }), (0, o.jsx)("path", {
                            d: "M57.6326 133.815C71.5869 138.764 86.9057 131.477 91.8481 117.539L92.3424 116.145L113.913 123.794L113.419 125.188C108.476 139.126 93.1575 146.413 79.2032 141.465L57.6326 133.815Z",
                            fill: "url(#paint11_linear_160_16889)"
                        }), (0, o.jsx)("path", {
                            d: "M47.7482 130.308C33.7939 125.36 26.4566 110.039 31.399 96.1012L32.5543 92.8431C35.4957 93.8859 38.7255 92.3469 39.7685 89.4056C40.8115 86.4643 39.2728 83.2343 36.3316 82.1911L39.7312 72.6042L81.008 87.2413L78.2695 94.9641L77.6085 96.8282L77.608 96.828C74.6665 95.7849 71.4364 97.3239 70.3933 100.265C69.3502 103.207 70.8892 106.437 73.8307 107.48L73.8312 107.48L72.6758 110.738C67.7334 124.676 75.0707 139.997 89.025 144.946L47.7482 130.308Z",
                            fill: "#12AAB5"
                        }), (0, o.jsx)("path", {
                            d: "M79.1395 141.441C65.1852 136.492 57.8796 121.182 62.822 107.245L62.8441 107.182L41.2737 99.5333L41.2515 99.5957C36.3091 113.533 43.6146 128.843 57.5689 133.792L79.1395 141.441Z",
                            fill: "#F8D33A"
                        }), (0, o.jsx)("path", {
                            d: "M48.0585 90.5461L44.8628 89.4129L43.7296 92.6086L46.9253 93.7418L48.0585 90.5461Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M54.1831 92.718L50.9875 91.5848L49.8543 94.7804L53.0499 95.9136L54.1831 92.718Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M60.3082 94.89L57.1126 93.7568L55.9794 96.9524L59.175 98.0856L60.3082 94.89Z",
                            fill: "white"
                        }), (0, o.jsx)("path", {
                            d: "M66.4329 97.062L63.2373 95.9288L62.1041 99.1244L65.2997 100.258L66.4329 97.062Z",
                            fill: "white"
                        }), (0, o.jsx)("rect", {
                            width: "37.014",
                            height: "3.3906",
                            transform: "matrix(-0.942496 -0.334217 -0.334217 0.942496 76.5978 89.5281)",
                            fill: "#F8D33A"
                        }), (0, o.jsx)("path", {
                            d: "M188.927 142.717L192.352 144.47L194.106 141.045L190.681 139.292L188.927 142.717Z",
                            fill: "#E6E8EA"
                        }), (0, o.jsx)("path", {
                            d: "M220.154 62.4305L222.658 63.7124L223.94 61.2085L221.436 59.9266L220.154 62.4305Z",
                            fill: "#E6E8EA"
                        }), (0, o.jsx)("path", {
                            d: "M31.6917 142.052L34.1956 143.334L35.4775 140.83L32.9736 139.548L31.6917 142.052Z",
                            fill: "#E6E8EA"
                        }), (0, o.jsx)("path", {
                            d: "M33.8286 59.499L36.78 62.4504L39.7315 59.499L36.78 56.5476L33.8286 59.499Z",
                            fill: "#E6E8EA"
                        }), (0, o.jsxs)("defs", {
                            children: [(0, o.jsxs)("linearGradient", {
                                id: "paint0_linear_160_16889",
                                x1: "40.4523",
                                y1: "0",
                                x2: "40.4523",
                                y2: "124.233",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    offset: "0.333333",
                                    stopColor: "#F0B90B"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#FBDA3C"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint1_linear_160_16889",
                                x1: "185.582",
                                y1: "118.161",
                                x2: "173.31",
                                y2: "144.992",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#26C4CE"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#54DADE"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint2_linear_160_16889",
                                x1: "95.5814",
                                y1: "83.7346",
                                x2: "54.1158",
                                y2: "118.594",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#26C4CE"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#54DADE"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint3_linear_160_16889",
                                x1: "185.584",
                                y1: "61.147",
                                x2: "174.848",
                                y2: "86.5691",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#26C4CE"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#54DADE"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint4_linear_160_16889",
                                x1: "193.99",
                                y1: "83.7346",
                                x2: "181.802",
                                y2: "110.455",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#26C4CE"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#54DADE"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint5_linear_160_16889",
                                x1: "155.981",
                                y1: "69.7823",
                                x2: "197.945",
                                y2: "60.3451",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#21BBBF"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#41D7CE"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint6_linear_160_16889",
                                x1: "172.623",
                                y1: "69.783",
                                x2: "130.66",
                                y2: "60.3458",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#21BBBF"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#41D7CE"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint7_linear_160_16889",
                                x1: "180.792",
                                y1: "100.446",
                                x2: "165.742",
                                y2: "85.3965",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#26C4CE"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#54DADE"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint8_linear_160_16889",
                                x1: "147.817",
                                y1: "100.447",
                                x2: "162.867",
                                y2: "85.3968",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#26C4CE"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#54DADE"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint9_linear_160_16889",
                                x1: "189.609",
                                y1: "92.2058",
                                x2: "174.865",
                                y2: "124.243",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "#26C4CE"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#54DADE"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint10_linear_160_16889",
                                x1: "90.9035",
                                y1: "114.288",
                                x2: "81.0366",
                                y2: "142.113",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "white"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#AEB4BC"
                                })]
                            }), (0, o.jsxs)("linearGradient", {
                                id: "paint11_linear_160_16889",
                                x1: "90.4944",
                                y1: "115.49",
                                x2: "81.0511",
                                y2: "142.12",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, o.jsx)("stop", {
                                    stopColor: "white"
                                }), (0, o.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#CACED3"
                                })]
                            })]
                        })]
                    }))
                }
        },
        Nvb0: (e, t, r) => {
            r.d(t, {
                h: () => i
            });
            var n = r("TrCV"),
                a = r("Y4uf"),
                o = r("DTvD"),
                i = function(e) {
                    var t = e.width,
                        r = void 0 === t ? "96px" : t,
                        i = e.height,
                        s = void 0 === i ? "96px" : i,
                        c = (0, o.useMemo)((function() {
                            return Math.random()
                        }), []);
                    return (0, n.jsxs)(a.A, {
                        width: r,
                        height: s,
                        viewBox: "0 0 97 96",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, n.jsx)("path", {
                            d: "M88.5 16H8.5V36H12.5C19.1274 36 24.5 41.3726 24.5 48C24.5 54.6274 19.1274 60 12.5 60H8.5V80H88.5V60H84.5C77.8726 60 72.5 54.6274 72.5 48C72.5 41.3726 77.8726 36 84.5 36H88.5V16Z",
                            fill: "url(#paint0_linear_421_39224_".concat(c, ")")
                        }), (0, n.jsx)("rect", {
                            x: "56.5",
                            y: "16",
                            width: "8",
                            height: "12",
                            fill: "#76808F"
                        }), (0, n.jsx)("rect", {
                            x: "56.5",
                            y: "36",
                            width: "8",
                            height: "24",
                            fill: "#76808F"
                        }), (0, n.jsx)("rect", {
                            x: "56.5",
                            y: "68",
                            width: "8",
                            height: "12",
                            fill: "#76808F"
                        }), (0, n.jsx)("defs", {
                            children: (0, n.jsxs)("linearGradient", {
                                id: "paint0_linear_421_39224_".concat(c),
                                x1: "48.5",
                                y1: "80",
                                x2: "48.5",
                                y2: "16",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, n.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, n.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })
                        })]
                    })
                }
        },
        SDpl: (e, t, r) => {
            r.d(t, {
                X: () => Y
            });
            var n = r("ezuS"),
                a = r("TrCV"),
                o = r("UgDF"),
                i = r("O94r"),
                s = r.n(i),
                c = r("DTvD"),
                l = r("/Q1k"),
                u = r("Xb3g"),
                d = r("CffR"),
                h = r("9mmq"),
                f = r("eeEA"),
                p = r("Lp65"),
                v = r("xE8/"),
                m = r("5nl0"),
                g = r("yiIT"),
                b = r("GfFo"),
                x = r("mQvl"),
                y = r("1T48"),
                C = r("TPNB"),
                w = r("3Pj3"),
                _ = r("u7Qj"),
                E = r("XaLc"),
                A = r("D4P9"),
                R = r("R2Ip"),
                S = r("sViW"),
                T = r("Pz56"),
                N = r.n(T),
                V = r("GuDP"),
                j = r("JyHn"),
                F = r("dh/N"),
                k = r("BK7R"),
                D = r("QUKP"),
                P = r("brFs"),
                L = r("Apzs"),
                I = r("XiER"),
                M = function(e) {
                    var t = e.code,
                        r = e.success,
                        n = e.voucher,
                        o = e.onClose,
                        i = (0, x.B)().t,
                        s = (0, P.e)("/vouchers#onGoing");
                    if (r) return (0, a.jsx)(I.j, {
                        showClose: !0,
                        onClose: o,
                        onOk: o,
                        icon: (0, a.jsx)(L.m, {
                            style: {
                                width: "100%",
                                fontSize: "168px",
                                height: "168px"
                            }
                        }),
                        title: i("congratulation", "Congratulations!"),
                        desc: i("claimRewardSuccessfully", "You have claimed this reward successfully. View or use it now."),
                        buttonText: i("viewReward", "View Reward"),
                        linkProps: {
                            to: s
                        }
                    });
                    var c = (0, _.sj)({
                        voucher: n,
                        code: t,
                        t: i
                    });
                    return (0, a.jsx)(I.j, (0, D.A)((0, k.A)({
                        showClose: !0
                    }, c), {
                        onOk: o,
                        onClose: o
                    }))
                },
                U = function(e) {
                    var t = e.voucher,
                        r = e.className,
                        n = (0, j.Z)(),
                        i = n.openModal,
                        s = n.closeModal,
                        l = (0, x.B)().t,
                        u = t.voucherId,
                        d = (0, o.jE)(),
                        h = (0, V.n)({
                            mutationFn: (0, S.A)(N().mark((function e() {
                                return N().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.abrupt("return", (0, F.jI)({
                                                voucherId: u
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))
                        }),
                        f = h.data,
                        p = h.mutate,
                        v = h.isLoading,
                        m = h.reset;
                    return (0, c.useEffect)((function() {
                        (null === f || void 0 === f ? void 0 : f.success) && d.invalidateQueries({
                            queryKey: C.Vb.fetchUserVouchers
                        }), f && i({
                            content: (0, a.jsx)(M, {
                                success: f.success,
                                code: f.code,
                                voucher: t,
                                onClose: function() {
                                    m(), s()
                                }
                            })
                        })
                    }), [f]), (0, a.jsx)(A.A, {
                        className: r,
                        sz: "tiny",
                        variant: "primary",
                        onClick: function() {
                            return p()
                        },
                        inactive: v,
                        loading: v,
                        children: l("VoucherCard-btnClaim", "Claim")
                    })
                },
                O = r("OkjS"),
                B = function(e) {
                    var t = e.voucher,
                        r = (0, x.B)().t,
                        n = t.voucherType,
                        o = t.status,
                        i = (t.voucherDisplayContent || {}).ctaConfig,
                        l = (0, c.useMemo)((function() {
                            var e = t.voucherId,
                                s = t.coinPairs;
                            switch (o) {
                                case "CLAIMABLE":
                                    return {
                                        component: (0, a.jsx)(U, {
                                            className: "VoucherAction",
                                            voucher: t
                                        })
                                    };
                                case "USABLE":
                                    return "CUSTOM_VOUCHER" === n ? {
                                        buttonText: r("VoucherCard-btnUse", "Use"),
                                        onClick: function() {
                                            return (0, E.Z)({
                                                web: null === i || void 0 === i ? void 0 : i.webUrl,
                                                ios: null === i || void 0 === i ? void 0 : i.iosUrl,
                                                android: null === i || void 0 === i ? void 0 : i.androidUrl,
                                                electron: null === i || void 0 === i ? void 0 : i.electronUrl
                                            })
                                        }
                                    } : "FUTURE_FREE_POSITION" === n ? {
                                        buttonText: r("VoucherCard-btnUse", "Use"),
                                        onClick: function() {
                                            return (0, E.Z)({
                                                web: "/futures/".concat((null === s || void 0 === s ? void 0 : s[0]) || "", "?positionVoucherId=").concat(e),
                                                hybrid: "bnc://app.binance.com/trade/trade?at=futures&action=positionVoucher&voucherId=".concat(e)
                                            })
                                        }
                                    } : {
                                        component: (0, a.jsx)(O.L, {
                                            voucher: t,
                                            className: "VoucherAction"
                                        })
                                    };
                                case "IN_USE":
                                    return {
                                        buttonText: r("VoucherCard-btnInUse", "In Use"),
                                        inactive: !0
                                    };
                                case "USED":
                                    return {
                                        buttonText: r("VoucherCard-btnUsed", "Used"),
                                        disabled: !0
                                    };
                                case "RISK_USER":
                                    return {
                                        buttonText: r("VoucherCard-btnRiskUser", "Invalid"),
                                        inactive: !0,
                                        tooltipText: r("VoucherCard-btnRiskUser-tooltip", "You did not pass risk assessment for this activity and cannot continue getting rebates.")
                                    };
                                default:
                                    return {
                                        buttonText: r("VoucherCard-btnExpired", "Expired"),
                                        disabled: !0
                                    }
                            }
                        }), [o, r, n, t, i]),
                        u = l.tooltipText,
                        d = (null === l || void 0 === l ? void 0 : l.component) ? (0, a.jsx)(a.Fragment, {
                            children: l.component
                        }) : (0, a.jsx)(A.A, {
                            className: s()("VoucherAction", {
                                "VoucherAction--disabled": null === l || void 0 === l ? void 0 : l.disabled
                            }),
                            sz: "tiny",
                            variant: "primary",
                            onClick: function() {
                                (null === l || void 0 === l ? void 0 : l.onClick) && l.onClick(t)
                            },
                            inactive: null === l || void 0 === l ? void 0 : l.inactive,
                            loading: null === l || void 0 === l ? void 0 : l.loading,
                            children: l.buttonText
                        });
                    return (0, a.jsxs)(a.Fragment, {
                        children: [u && (0, a.jsx)(R.A, {
                            tooltips: u,
                            arrow: !0,
                            placement: "top-end",
                            className: "VoucherAction-tooltips ul-width-full",
                            children: d
                        }), !u && d]
                    })
                },
                G = r("gZfF"),
                H = r("qMwq"),
                Z = r("tY2v"),
                K = r("B0yh"),
                z = function(e) {
                    var t = e.voucher,
                        r = (0, G.A)(e, ["voucher"]),
                        n = (0, K.Bd)().t,
                        o = function(e, t) {
                            return String(e || t || "")
                        },
                        i = t.nftCollection,
                        s = t.voucherRule,
                        l = (0, c.useMemo)((function() {
                            var e = (0, H.hL)("/margin-fee"),
                                r = t.voucherType,
                                i = t.product,
                                s = t.expiryDay,
                                c = t.rewardDay,
                                l = t.facePrice,
                                u = t.facePriceUnit,
                                d = n("VoucherRules-1", 'After receiving this voucher, you have {{expiryDay}} days to activate it. Activate this voucher by clicking "Use".', {
                                    expiryDay: o(s)
                                }),
                                h = n("VoucherRules-FAQ", "Refer to the <FAQLink>FAQ</FAQLink> for the detailed terms and conditions.", {}, {
                                    FAQLink: (0, a.jsx)(v.qO, {
                                        className: "VoucherRulesModal-link",
                                        target: "_blank",
                                        to: "/support/faq/2586058a65524393b86aea988cb3e365"
                                    })
                                }),
                                f = n("VoucherRules-FAQ", "Refer to the <FAQLink>FAQ</FAQLink> for the detailed terms and conditions.", {}, {
                                    FAQLink: (0, a.jsx)(v.qO, {
                                        className: "VoucherRulesModal-link",
                                        target: "_blank",
                                        to: "/support/faq/detail/0fa0da0a06fd44d29267a434db06985c"
                                    })
                                }),
                                p = n("VoucherRules-final", "Binance reserves the right to cancel or amend the voucher rules at our sole discretion.");
                            return "MARGIN_LOAN" === r && "MARGIN_ISOLATED" === i ? {
                                rules: [d, n("VoucherRules-".concat(r, "-").concat(i, "-2"), "After activating this voucher successfully, you can borrow up to {{facePrice}} {{facePriceUnit}} for trading in Isolated Margin interest-free for {{rewardDay}} days (Reward Period). Interest starts to accrue at the rates published on the <marginLink><span>Margin Data Page</span></marginLink> when the voucher expires and the Reward Period ends. Refer to the voucher card for the exact expiry time.", {
                                    facePrice: l,
                                    facePriceUnit: u || "",
                                    rewardDay: o(c)
                                }, {
                                    marginLink: (0, a.jsx)(v.qO, {
                                        className: "VoucherRulesModal-link",
                                        target: "_blank",
                                        to: e,
                                        ios: e,
                                        android: e
                                    })
                                }), n("VoucherRules-".concat(r, "-").concat(i, "-3"), "If you have exceeded the maximum number of Isolated Margin pairs, you will not be able to activate the voucher. Once it is below the maximum, please try activating the voucher again."), n("VoucherRules-".concat(r, "-").concat(i, "-4"), "Please ensure there is sufficient collateral in your Isolated Margin account under the chosen token pair as this impacts the amount you can borrow."), n("VoucherRules-".concat(r, "-5"), "This voucher does not affect your personal maximum loan amount."), h, p]
                            } : "MARGIN_LOAN" === r && "MARGIN_CROSS" === i ? {
                                rules: [d, n("VoucherRules-".concat(r, "-").concat(i, "-2"), "After activating this voucher successfully, you can borrow up to {{facePrice}} {{facePriceUnit}} for trading in Cross Margin interest-free for {{rewardDay}} days (Reward Period). Interest starts to accrue at the rates published on the <marginLink>Margin Data Page</marginLink> when the voucher expires and the Reward Period ends. Refer to the voucher card for the exact expiry time.", {
                                    facePrice: l,
                                    facePriceUnit: u || "",
                                    rewardDay: o(c)
                                }, {
                                    marginLink: (0, a.jsx)(v.qO, {
                                        className: "VoucherRulesModal-link",
                                        target: "_blank",
                                        to: e,
                                        ios: e,
                                        android: e
                                    })
                                }), n("VoucherRules-".concat(r, "-").concat(i, "-3"), "If you have exceeded the maximum number of Cross Margin pairs, you will not be able to use the voucher. Once it is below the maximum, please try activating the voucher again."), n("VoucherRules-".concat(r, "-").concat(i, "-4"), "Please ensure there is sufficient collateral in your Cross Margin account under the chosen token pair as this impacts the amount you can borrow."), n("VoucherRules-".concat(r, "-5"), "This voucher does not affect your personal maximum loan amount."), h, p]
                            } : "VIP_UPGRADE" === r ? {
                                rules: [d, n("VoucherRules-".concat(r, "-2"), "After activating this voucher successfully, you have {{rewardDay}} days (Reward Period) to enjoy the VIP Upgrade. Refer to the voucher card for the exact expiry time.", {
                                    rewardDay: o(c)
                                }), n("VoucherRules-".concat(r, "-3"), "During the Reward Period, you will be able to enjoy the benefits of the new VIP level. You can view your new VIP level in the Dashboard page."), n("VoucherRules-".concat(r, "-4"), "When the Reward Period ends and the voucher expires, you will return to your original VIP level and you will no longer be able to enjoy the rewards from the VIP level upgrade."), n("VoucherRules-".concat(r, "-5"), "Please note that VIP 9 is the maximum VIP level. If you have reached VIP 9, you will not be able to activate this VIP Upgrade Voucher."), n("VoucherRules-".concat(r, "-6"), 'You can only activate one VIP Upgrade Voucher at a time. If you have a VIP Upgrade voucher that is "In Use" currently, you will not be able to activate another voucher during the same time period.'), h, p]
                            } : "FEE_REBATE" === r && "USD" === u ? {
                                rules: [d, n("VoucherRules-FEE_REBATE-USD-2", "After activating this voucher successfully, the USD Trading Rebate Voucher converts a fixed {{facePrice}} USD amount to an equivalent amount in BNB based on the current BNB price. You have {{rewardDay}} days (Reward Period) to enjoy its Trading Fee Rebate. Refer to the voucher card for the exact expiry time.", {
                                    rewardDay: o(c),
                                    facePrice: l
                                }), n("VoucherRules-FEE_REBATE-USD-3", "In addition to the Reward Period, the Trading Fee Rebate amount you enjoy will also be subject to the face value of this voucher. The maximum Trading Fee Rebate amount that will be distributed to you is {{facePrice}} USD and will be converted to an equivalent amount in BNB based on the price at the time of activation.", {
                                    facePrice: l
                                }), n("VoucherRules-".concat(r, "-4"), "If you have activated multiple Trading Fee Rebate vouchers at the same time, the rebates will be deducted from the voucher value according to your order of voucher activation (first activation, first burn)."), n("VoucherRules-".concat(r, "-5"), "Each day during the Reward Period, the Trading Fee Rebate is equal to the net Trading Fee incurred during the previous day of trading (excluding referral commission)."), n("VoucherRules-".concat(r, "-6"), "The Trading Fee Rebate amount will be distributed to your {{product}} wallet. You may visit Wallet - Transaction History - Distribution for more information on the Trading Fee Rebate distribution history for each day.", {
                                    product: i ? (0, _.VG)(i, n) : ""
                                }), h, p]
                            } : "FEE_REBATE" === r && "NFT" === i ? {
                                rules: [d, n("VoucherRules-".concat(r, "-").concat(i, "-2"), "After activating this voucher successfully, you have {{rewardDay}} days (Reward Period) to enjoy its Platform Fee Rebate. Refer to the voucher card for the exact expiry time.", {
                                    rewardDay: o(c)
                                }), n("VoucherRules-".concat(r, "-").concat(i, "-3"), "In addition to the Reward Period, the Platform Fee Rebate amount that you enjoy will be up to an amount no greater than the face value of this voucher. The maximum Platform Fee Rebate amount that will be distributed to you is {{facePrice}} {{facePriceUnit}}.", {
                                    facePrice: l,
                                    facePriceUnit: u || ""
                                }), n("VoucherRules-".concat(r, "-").concat(i, "-4"), "If you have activated multiple Platform Fee Rebate vouchers at the same time, the rebates will be deducted from the voucher value, according the order of voucher activation (first activation, first burn)."), n("VoucherRules-".concat(r, "-").concat(i, "-5"), "Each day during the Reward Period, the Platform Fee Rebate is equal to the net Platform Fee incurred during the previous day of trading (excluding referral commission)."), n("VoucherRules-".concat(r, "-").concat(i, "-6"), "The Platform Fee Rebate amount will be distributed to your Spot wallet. You may visit Wallet - Transaction History - Distribution for more information on the Platform Fee Rebate distribution history for each day."), n("VoucherRules-".concat(r, "-").concat(i, "-7"), 'The Platform Fee Rebate can only be used for the NFT collections stated under the "Eligible NFT Collection(s)" above.'), n("VoucherRules-".concat(r, "-").concat(i, "-8"), "The Platform Fee Rebate is only applicable for trades on Binance NFT's secondary market. Any other NFT listings, including Third-party NFT listings on Binance NFT marketplace, will not be eligible for the Platform Fee Rebates."), h, p]
                            } : "FEE_REBATE" === r && "NFT" !== i ? {
                                rules: [d, n("VoucherRules-".concat(r, "-2"), "After activating this voucher successfully, you have {{rewardDay}} days (Reward Period) to enjoy its Trading Fee Rebate. Refer to the voucher card for the exact expiry time.", {
                                    rewardDay: o(c)
                                }), n("VoucherRules-".concat(r, "-3"), "In addition to the Reward Period, the Trading Fee Rebate amount that you enjoy will also be subjected to the face value of this voucher. The maximum Trading Fee Rebate amount that will be distributed to you is {{facePrice}} {{facePriceUnit}}.", {
                                    facePrice: l,
                                    facePriceUnit: u || ""
                                }), n("VoucherRules-".concat(r, "-4"), "If you have activated multiple Trading Fee Rebate vouchers at the same time, the rebates will be deducted from the voucher value according to your order of voucher activation (first activation, first burn)."), n("VoucherRules-".concat(r, "-5"), "Each day during the Reward Period, the Trading Fee Rebate is equal to the net Trading Fee incurred during the previous day of trading (excluding referral commission)."), n("VoucherRules-".concat(r, "-6"), "The Trading Fee Rebate amount will be distributed to your {{product}} wallet. You may visit Wallet - Transaction History - Distribution for more information on the Trading Fee Rebate distribution history for each day.", {
                                    product: i ? (0, _.VG)(i, n) : ""
                                }), h, p]
                            } : "CASH_COUPON" === r ? {
                                rules: [d, n("VoucherRules-".concat(r, "-2"), "After activating this voucher successfully, the voucher value will be credited into your {{product}} wallet. You may visit Wallet and go to your corresponding account to check the balance.", {
                                    product: i ? (0, _.VG)(i, n) : ""
                                }), n("VoucherRules-".concat(r, "-3"), "After the voucher value is credited into your wallet, there is no additional restriction for using, transferring and withdrawing the value besides the restrictions stated for Wallet."), h, p]
                            } : "FUTURE_GIF_MONEY" === r && i ? {
                                rules: [d, n("VoucherRules-".concat(r, "-2"), "After activating this voucher successfully, the voucher value (bonus) will be credited into your Futures wallet. You may visit \u201cWallet\u201d and go to your corresponding account to check the balance.", {
                                    product: i ? (0, _.VG)(i, n) : ""
                                }), n("VoucherRules-".concat(r, "-3"), "The bonus can be used as collateral for Futures trading. Any losses incurred during Futures trading can be offset against the bonus amounts."), ["FUTURE", "PERPETUAL_FEATURE"].includes(i) ? n("VoucherRules-".concat(r, "-4-usdM"), "The bonus amount is withdrawable based on the total accumulated PNL incurred during Futures trading, i.e. You can withdraw the balance (including bonus amount) when the total accumulated loss exceeds the bonus amount.") : n("VoucherRules-".concat(r, "-4-coinM"), "The bonus amount is withdrawable based on the total accumulated PNL incurred during Futures trading, i.e. You can withdraw the balance (including bonus amount) when the total accumulated loss exceeds the bonus amount. Please note: The bonus voucher for coin-margined contracts is categorized as different coins. For example, BTC bonus is only applicable to BTC coin-margined contracts, it does not apply to the accumulated PNL incurred from trading of other coin-margined contracts such as ETH, BCH etc."), n("VoucherRules-".concat(r, "-5"), "The bonus can only be used on the Binance Futures trading platform. Also, you will not be able to transfer the voucher value to other Binance wallets after it is credited into your Futures wallet."), n("VoucherRules-".concat(r, "-6"), "If no Futures trades are made after the voucher value is credited to your Futures wallet, Binance reserves the right to reclaim the voucher value from your account."), h, p]
                            } : "SAVING_GIF_MONEY" === r ? {
                                rules: [n("VoucherRules-SAVING_GIF_MONEY-1", "After receiving this voucher, you have {{expiryDay}} days to use it when you subscribe to {{facePriceUnit}} in the Simple Earn page.", {
                                    expiryDay: o(s),
                                    facePriceUnit: u || ""
                                }), n("VoucherRules-".concat(r, "-2"), 'In the subscription window on the Simple Earn page, click on "Use Trial Funds" and select this voucher to be used before you click "Confirm\u201d to proceed with the subscription. Thereafter, you may visit your Simple Earn Wallet to view your Flexible Trial Fund subscription records.'), n("VoucherRules-".concat(r, "-3"), "After subscribing with your Flexible Trial Fund voucher, daily rewards from this subscription will be distributed to your Spot Wallet."), n("VoucherRules-".concat(r, "-4"), "You have {{rewardDay}} days (Reward Period) to enjoy the rewards from your subscription before the voucher expires. After the voucher expires, your subscription will end and reward distributions will stop. Refer to the voucher card for the exact expiry time.", {
                                    rewardDay: o(c)
                                }), n("VoucherRules-".concat(r, "-5"), "The amount identified on the Flexible Trial Fund Voucher (Trial Fund Principal) is the number of Digital Assets that Binance will use to subscribe to a Simple Earn Offer on your behalf. You will not be able to use, withdraw, transfer or deal with the Trial Fund Principal in any way other than to earn Simple Earn Rewards during the Reward Period."), n("VoucherRules-".concat(r, "-6"), "At the end of the Subscription, Binance will retain the Trial Fund Principal and you will keep all the rewards."), n("VoucherRules-".concat(r, "-7"), "The Simple Earn Terms of use apply to the Flexible Trial Fund. Terms applying to the Flexible Trial Fund are to be read together with the Simple Earn Terms of use. In the event of any conflict or inconsistency between these terms and the Simple Earn Terms, the order of precedence in which the documents are to be read is first these terms, and then the Simple Earn Terms."), h, p]
                            } : "LOCKED_GIF_MONEY" === r ? {
                                rules: [n("VoucherRules-LOCKED_GIF_MONEY-1", "After receiving this voucher, you have {{expiryDay}} days to use it when you subscribe to {{facePriceUnit}} in the Simple Earn page.", {
                                    expiryDay: o(s),
                                    facePriceUnit: u || ""
                                }), n("VoucherRules-".concat(r, "-2"), 'In the subscription window on the Simple Earn page, click on "Use Trial Funds" and select this voucher to be used before you click "Confirm\u201d to proceed with the subscription. Thereafter, you may visit your Simple Earn Wallet to view your Locked Trial Fund subscription records.'), n("VoucherRules-".concat(r, "-3"), "After subscribing with your Locked Trial Fund voucher, daily rewards from this subscription will be distributed to your Spot Wallet."), n("VoucherRules-".concat(r, "-4"), "You have {{rewardDay}} days (Reward Period) to enjoy the rewards from your subscription before the voucher expires. After the voucher expires, your subscription will end and reward distributions will stop. Refer to the voucher card for the exact expiry time.", {
                                    rewardDay: o(c)
                                }), n("VoucherRules-".concat(r, "-5"), "The principal amount in this Locked Trial Fund voucher will be credited into your Spot wallet upon maturity of the Locked term."), n("VoucherRules-".concat(r, "-6"), "The Simple Earn Terms of use apply to the Locked Trial Fund. Terms applying to the Locked Trial Fund are to be read together with the Simple Earn Terms of use. In the event of any conflict or inconsistency between these terms and the Simple Earn Terms, the order of precedence in which the documents are to be read is first these terms, and then the Simple Earn Terms."), h, p]
                            } : "FUTURE_FREE_POSITION" === r ? {
                                rules: [n("VoucherRules-FUTURE_FREE_POSITION-1", "Upon successfully activating this voucher, you will use the funds provided by Binance to create a new Futures position via a market order, with the option to choose either a buy or sell direction."), n("VoucherRules-FUTURE_FREE_POSITION-2", "You can close this new position at any time, and its profit and loss (PNL) will be real."), n("VoucherRules-FUTURE_FREE_POSITION-3", "The PNL of the position will affect your wallet balance, and any profits can be withdrawn immediately."), n("VoucherRules-FUTURE_FREE_POSITION-4", "This voucher can only be redeemed under the isolated margin mode."), n("VoucherRules-FUTURE_FREE_POSITION-5", "You cannot redeem this voucher if you currently have any open positions or open orders."), f, p]
                            } : {
                                rules: []
                            }
                        }), [t, n]),
                        u = (0, c.useMemo)((function() {
                            return (0, a.jsx)(f.Ay, {
                                children: l.rules.map((function(e, t) {
                                    return (0, a.jsxs)(f.Ay, {
                                        className: "VoucherRulesModal-rules",
                                        children: ["".concat(t + 1, ". "), e]
                                    }, t)
                                }))
                            })
                        }), [l]),
                        h = (0, c.useMemo)((function() {
                            var e = (0, d.Z5)(n, s);
                            return e ? (0, a.jsx)(f.Ay, {
                                children: e.split("\n").map((function(e, t) {
                                    return (0, a.jsx)(f.Ay, {
                                        className: "VoucherRulesModal-rules",
                                        children: e
                                    }, t)
                                }))
                            }) : null
                        }), [s]);
                    return (0, a.jsxs)(Z.J, (0, D.A)((0, k.A)({}, r), {
                        title: n("VoucherRules-title", "Voucher Rules"),
                        okText: n("ok", "OK"),
                        children: [i && (0, a.jsxs)(f.Ay, {
                            className: "VoucherRulesModal-nftCollections",
                            children: [(0, a.jsx)(f.Ay, {
                                className: "VoucherRulesModal-nftTitle",
                                children: n("VoucherRules-nftTitle", "Eligible NFT Collection(s):")
                            }), (0, a.jsx)(f.Ay, {
                                className: "VoucherRulesModal-tags",
                                children: i.map((function(e) {
                                    return (0, a.jsx)(c.Fragment, {
                                        children: (0, a.jsx)(f.Ay, {
                                            className: "VoucherRulesModal-tag",
                                            children: (0, a.jsx)(f.Ay, {
                                                className: "VoucherRulesModal-tag-text",
                                                children: e
                                            })
                                        })
                                    }, e)
                                }))
                            })]
                        }), s ? h : u]
                    }))
                },
                q = f.Ay,
                Y = function(e) {
                    var t, r, i = e.voucher,
                        E = e.variant,
                        A = (0, o.jE)(),
                        R = (0, l.d4)(y.ls),
                        S = {
                            elementID: g.M7.VOUCHER,
                            extraInfo: {
                                id: i.voucherId
                            }
                        };
                    (0, b.QN)(S);
                    var T = (0, b.HT)(S),
                        N = (0, x.B)().t,
                        V = i.voucherCfgId,
                        j = i.voucherType,
                        F = i.status,
                        k = i.facePrice,
                        D = i.facePriceUnit,
                        P = i.voucherSource,
                        L = i.product,
                        I = i.leftRebateAmount,
                        M = i.tradeMethodList,
                        U = i.voucherDisplayContent,
                        O = i.availableAmount,
                        G = i.coinPairs,
                        H = (U || {}).productTags,
                        Z = (0, w.SZ)(k || "0"),
                        K = ["EXPIRED_UNCLAIMED", "EXPIRED_UNUSED", "USED"].includes(F),
                        Y = V && (null === (r = null === R || void 0 === R || null === (t = R["rwHub.COUNTDOWN_VOUCHER_LIST"]) || void 0 === t ? void 0 : t.split(",")) || void 0 === r ? void 0 : r.includes(V)) && "USABLE" === F,
                        W = (0, u.L4)(Date.now(), i.canUseBefore || Date.now(), (function() {}), (function() {
                            A.invalidateQueries({
                                queryKey: C.Vb.fetchUserVouchers
                            })
                        })).duration,
                        Q = (0, c.useMemo)((function() {
                            return "FEE_REBATE" === j && ["IN_USE", "RISK_USER"].includes(F) ? (0, w.po)({
                                product: L
                            }) : null
                        }), [j, L, F]),
                        X = (0, c.useMemo)((function() {
                            return "FEE_REBATE" === j && L && ["SPOT", "FUTURE", "FUTURE_DELIVERY"].includes(L) && M ? 2 === (null === M || void 0 === M ? void 0 : M.length) ? N("VoucherNotification-trading-method-both", "Trades on Trading Bots accounts are also eligible for rebates from this voucher.") : (null === M || void 0 === M ? void 0 : M.includes("NORMAL")) ? N("VoucherNotification-trading-method-normal", "Trades on Trading Bots accounts are not eligible for rebates from this voucher.") : (null === M || void 0 === M ? void 0 : M.includes("BOT")) ? N("VoucherNotification-trading-method-bot", "Only trades on Trading Bots accounts are eligible for rebates from this voucher.") : "" : ""
                        }), [L, M, j, N]);
                    return (0, a.jsx)(m.f, {
                        onClick: T,
                        isPast: K,
                        variant: E,
                        className: s()("SingleVoucher", (0, n.A)({}, "SingleVoucher--".concat(E), E)),
                        topLeftContent: (0, a.jsxs)(f.Ay, {
                            children: [(0, a.jsx)(q, {
                                className: "SingleVoucher-name ul-line-clamp-2 bn-span",
                                as: "span",
                                children: (0, w.YF)(i, N)
                            }), (0, a.jsx)(q, {
                                className: "SingleVoucher-period",
                                children: Y ? (0, w.HU)(W, N) : (0, w.Fe)(i, N)
                            }), (0, a.jsxs)(p.A, {
                                className: "SingleVoucher-tags",
                                children: [!["CUSTOM_VOUCHER", "FUTURE_FREE_POSITION"].includes(j) && (0, _.VG)(L, N) && (0, a.jsx)(f.Ay, {
                                    className: "SingleVoucher-tag",
                                    children: (0, a.jsx)(q, {
                                        className: "SingleVoucher-tag-text",
                                        children: (0, _.VG)(L, N)
                                    })
                                }), "CUSTOM_VOUCHER" === j && (null === H || void 0 === H ? void 0 : H.length) && (0, a.jsx)(a.Fragment, {
                                    children: H.map((function(e, t) {
                                        return (0, a.jsx)(f.Ay, {
                                            className: "SingleVoucher-tag",
                                            children: (0, a.jsx)(q, {
                                                className: "SingleVoucher-tag-text",
                                                children: (0, d.Z5)(N, e)
                                            })
                                        }, t)
                                    }))
                                }), "FUTURE_FREE_POSITION" === j && (0, a.jsx)(f.Ay, {
                                    className: "SingleVoucher-tag",
                                    children: (0, a.jsx)(q, {
                                        className: "SingleVoucher-tag-text",
                                        children: null === G || void 0 === G ? void 0 : G[0]
                                    })
                                })]
                            })]
                        }),
                        bottomLeftContent: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(f.Ay, {
                                as: "span",
                                className: "SingleVoucher-voucherSourceContainer bn-span",
                                children: P && N("VoucherCard-from", "<fromSpan>From</fromSpan><voucherSourceSpan>{{voucherSource}}</voucherSourceSpan>", {
                                    voucherSource: P
                                }, {
                                    fromSpan: (0, a.jsx)(q, {
                                        as: "span",
                                        className: "SingleVoucher-from bn-span"
                                    }),
                                    voucherSourceSpan: (0, a.jsx)(q, {
                                        as: "span",
                                        className: "SingleVoucher-voucherSource bn-span"
                                    })
                                })
                            }), (0, a.jsx)(z, {
                                voucher: i,
                                notificationText: X,
                                trigger: (0, a.jsx)(h.A, {
                                    size: 12,
                                    className: "SingleVoucher-infoIcon"
                                })
                            })]
                        }),
                        rightContent: (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsx)(q, {
                                className: s()("SingleVoucher-price", {
                                    "ul-text-sm": Z.length > 8,
                                    "ul-text-md": Z.length > 6 && Z.length <= 8,
                                    "ul-text-2xl": Z.length > 4 && Z.length <= 5
                                }),
                                children: Z
                            }), (0, a.jsx)(q, {
                                hidden: "FUTURE_FREE_POSITION" === j,
                                className: "SingleVoucher-priceUnit",
                                children: "VIP_UPGRADE" === j ? N("VoucherCard-level", "Level") : D
                            }), "FEE_REBATE" === j && ["IN_USE", "RISK_USER"].includes(F) && I && (0, a.jsx)(q, {
                                className: "SingleVoucher-feeRebateAmountContainer",
                                children: N("VoucherCard-amountLeft", "<amountSpan>{{leftRebateAmount}}</amountSpan><leftSpan>Left</leftSpan>", {
                                    leftRebateAmount: (0, w.SZ)(I || "0")
                                }, {
                                    amountSpan: (0, a.jsx)(q, {
                                        as: "span",
                                        className: "SingleVoucher-feeRebateAmount bn-span"
                                    }),
                                    leftSpan: (0, a.jsx)(q, {
                                        as: "span",
                                        className: "SingleVoucher-left bn-span"
                                    })
                                })
                            }), "CUSTOM_VOUCHER" === j && "IN_USE" === F && O && (0, a.jsx)(q, {
                                className: "SingleVoucher-feeRebateAmountContainer",
                                children: N("VoucherCard-amountLeft", "<amountSpan>{{leftRebateAmount}}</amountSpan><leftSpan>Left</leftSpan>", {
                                    leftRebateAmount: (0, w.SZ)(O || "0")
                                }, {
                                    amountSpan: (0, a.jsx)(q, {
                                        as: "span",
                                        className: "SingleVoucher-feeRebateAmount bn-span"
                                    }),
                                    leftSpan: (0, a.jsx)(q, {
                                        as: "span",
                                        className: "SingleVoucher-left bn-span"
                                    })
                                })
                            }), (0, a.jsx)(B, {
                                voucher: i
                            }), Q && (0, a.jsx)(v.qO, {
                                className: "SingleVoucher-detailsLink",
                                target: "_blank",
                                to: Q.web,
                                ios: Q.ios,
                                android: Q.android,
                                children: N("Details", "Details")
                            })]
                        })
                    })
                }
        },
        OkjS: (e, t, r) => {
            r.d(t, {
                L: () => ye
            });
            var n = r("sViW"),
                a = r("BK7R"),
                o = r("QUKP"),
                i = r("gZfF"),
                s = r("Pz56"),
                c = r.n(s),
                l = r("TrCV"),
                u = r("UgDF"),
                d = r("LZsd"),
                h = r("DTvD"),
                f = r.n(h),
                p = r("FHAr"),
                v = r("eeEA"),
                m = r("D4P9"),
                g = r("CeW4"),
                b = r("wIZF"),
                x = r("O94r"),
                y = r.n(x),
                C = r("hyZw"),
                w = r("W3Ja"),
                _ = r("QFE7"),
                E = [],
                A = r("H2//"),
                R = r("R2Ip"),
                S = function(e) {
                    var t = e.placement,
                        r = void 0 === t ? "bottom-start" : t,
                        n = e.offset,
                        a = void 0 === n ? 4 : n,
                        o = e.overlay,
                        i = (0, b.__rest)(e, ["placement", "offset", "overlay"]);
                    return f().createElement(R.A, (0, b.__assign)({}, i, {
                        variant: "unset",
                        offset: a,
                        tooltips: o,
                        placement: r
                    }))
                };
            S.displayName = "Dropdown";
            const T = S;
            var N = r("cZx9"),
                V = r("fvKX"),
                j = r("I6V/"),
                F = r("X4b0"),
                k = function(e) {
                    var t, r = e.onClose,
                        n = void 0 === r ? C.es : r,
                        a = e.cancel,
                        o = void 0 === a ? "Cancel" : a,
                        i = e.onCancel,
                        s = void 0 === i ? n : i,
                        c = e.variant,
                        l = void 0 === c ? "default" : c,
                        u = (0, b.__rest)(e, ["onClose", "cancel", "onCancel", "variant"]),
                        d = (0, V.r)().prefixCls,
                        h = "".concat(d, "-actionSheet"),
                        p = y()(h, ((t = {})["".concat(h, "__").concat(l)] = !!l, t), e.className);
                    return f().createElement(N.A, (0, b.__assign)({}, u, {
                        direction: "bottom",
                        onClose: n,
                        className: p
                    }), e.children, "default" === l && f().createElement(v.Ay, {
                        className: "".concat(h, "-cancel"),
                        onClick: s,
                        children: o,
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "cancel"
                    }))
                };
            k.displayName = "ActionSheet", k.Header = function(e) {
                var t = e.showPre,
                    r = e.prev,
                    n = e.onPreClick,
                    a = void 0 === n ? C.es : n,
                    o = e.showNext,
                    i = e.next,
                    s = e.onNextClick,
                    c = void 0 === s ? C.es : s,
                    l = e.subtitle,
                    u = e.description,
                    d = (0, b.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick", "subtitle", "description"]),
                    h = (0, V.r)().prefixCls,
                    p = "".concat(h, "-actionSheet-header"),
                    m = y()(p, e.className);
                return t && void 0 === r && (r = f().createElement(j.A, {
                    name: "ArrowLeft1C",
                    color: "PrimaryText"
                })), o && void 0 === i && (i = f().createElement(F.A, {
                    name: "Close1C",
                    color: "PrimaryText"
                })), f().createElement(v.Ay, (0, b.__assign)({}, d, {
                    className: m
                }), t ? f().createElement(v.Ay, {
                    className: "".concat(p, "-prev"),
                    onClick: a,
                    children: r
                }) : null, f().createElement(v.Ay, {
                    className: "".concat(p, "-main")
                }, e.children, l && f().createElement(v.Ay, {
                    className: "".concat(p, "-main-subtitle"),
                    children: l
                }), u && f().createElement(v.Ay, {
                    className: "".concat(p, "-main-description"),
                    children: u
                })), o ? f().createElement(v.Ay, {
                    className: "".concat(p, "-next"),
                    onClick: c,
                    children: i
                }) : null)
            }, k.Content = function(e) {
                var t = (0, V.r)().prefixCls,
                    r = "".concat(t, "-actionSheet-content"),
                    n = y()(r, e.className);
                return f().createElement(v.Ay, (0, b.__assign)({}, e, {
                    className: n
                }))
            }, k.Footer = function(e) {
                var t = (0, V.r)().prefixCls,
                    r = "".concat(t, "-actionSheet-footer"),
                    n = y()(r, e.className);
                return f().createElement(v.Ay, (0, b.__assign)({}, e, {
                    className: n
                }))
            };
            const D = k;
            var P = r("q5Ye"),
                L = r("5G2I"),
                I = r.n(L),
                M = function(e) {
                    return e.stopPropagation()
                },
                U = function(e) {
                    var t = e.value,
                        r = e.onRemove,
                        n = e.children,
                        a = void 0 === n ? t : n,
                        o = e.disabled,
                        i = (0, b.__rest)(e, ["value", "onRemove", "children", "disabled"]),
                        s = (0, V.r)().prefixCls,
                        c = "".concat(s, "-select-field-block"),
                        l = y()(c, e.className),
                        u = (0, h.useCallback)((function() {
                            r && r(t)
                        }), [r, t]),
                        d = (0, h.useMemo)((function() {
                            return f().isValidElement(a) ? a : f().createElement(v.Ay, {
                                as: "span",
                                className: "".concat(c, "-value")
                            }, a)
                        }), [a]);
                    return f().createElement(v.Ay, (0, b.__assign)({}, i, {
                        className: l,
                        onClick: M
                    }), d, !o && f().createElement(F.A, {
                        name: "Close1C",
                        className: "".concat(c, "-remove"),
                        onClick: u
                    }))
                },
                O = function(e) {
                    var t = e.type,
                        r = e.value,
                        n = e.label;
                    return n && "single" === t ? f().createElement(v.Ay, {
                        className: "data-label-input"
                    }, f().createElement(v.Ay, {
                        className: "data-label",
                        as: "span"
                    }, n), f().createElement(v.Ay, {
                        className: "data-value",
                        as: "span"
                    }, r)) : r
                },
                B = function(e) {
                    var t = e.type,
                        r = e.selects,
                        n = void 0 === r ? [] : r,
                        a = e.onRemove,
                        o = e.fieldLabel,
                        i = e.options;
                    if (i) {
                        var s = new Map(i.map((function(e) {
                                return [e.value, e]
                            }))),
                            c = n.map((function(e) {
                                return s.get(e)
                            })).filter((function(e) {
                                return void 0 !== e
                            }));
                        if ("single" === t) {
                            var l = c[0].children;
                            return O({
                                value: l,
                                label: o,
                                type: t
                            })
                        }
                        return c.map((function(e, t) {
                            return f().createElement(U, {
                                key: t,
                                value: e.value,
                                onRemove: a,
                                disabled: e.disabled,
                                children: e.children
                            })
                        }))
                    }
                    return "single" === t ? O({
                        value: n[0],
                        label: o,
                        type: t
                    }) : n.map((function(e, t) {
                        return f().createElement(U, {
                            key: t,
                            value: e,
                            onRemove: a
                        })
                    }))
                };
            const G = function(e) {
                var t, r = e.prefix,
                    n = e.active,
                    a = e.disabled,
                    o = e.onRemove,
                    i = e.type,
                    s = void 0 === i ? "single" : i,
                    c = e.size,
                    l = void 0 === c ? "middle" : c,
                    u = e.selects,
                    d = void 0 === u ? [] : u,
                    h = e.placeholder,
                    p = void 0 === h ? "" : h,
                    m = e.renderFn,
                    g = void 0 === m ? B : m,
                    x = e.fieldVariant,
                    C = e.fieldLabel,
                    w = e.onFieldClick,
                    _ = e.options,
                    E = e.className,
                    A = e.ariaControls,
                    R = (0, V.r)().prefixCls,
                    S = "".concat(R, "-select-field"),
                    T = y()(S, ((t = {})["data-".concat(s)] = !!s, t["data-size-".concat(l)] = !!l, t["data-".concat(x)] = !!x, t.disabled = !!a, t.active = !!n, t), E),
                    N = {
                        role: "combobox",
                        tabIndex: a ? void 0 : 0,
                        "aria-haspopup": "listbox",
                        "aria-expanded": n,
                        "aria-disabled": a || void 0,
                        "aria-controls": A,
                        "aria-label": p || "Select an option"
                    },
                    j = f().useMemo((function() {
                        return I()([
                            [function() {
                                return !!d.length
                            }, function() {
                                return g({
                                    selects: d,
                                    active: n,
                                    type: s,
                                    onRemove: o,
                                    fieldLabel: C,
                                    options: _
                                })
                            }],
                            [function() {
                                return !0
                            }, function() {
                                return f().createElement(v.Ay, {
                                    "aria-disabled": "true",
                                    className: "".concat(S, "-placeholder"),
                                    children: O({
                                        value: p,
                                        label: C,
                                        type: s
                                    })
                                })
                            }]
                        ])()
                    }), [g, d, s, o, S, p, _, C, n, O]);
                return f().createElement(v.Ay, (0, b.__assign)({
                    className: T,
                    onClick: w
                }, N), r && f().createElement(v.Ay, {
                    className: "".concat(S, "-prefix"),
                    children: r
                }), f().createElement(v.Ay, {
                    className: "".concat(S, "-input"),
                    children: j
                }), f().createElement(P.A, {
                    name: "CaretDown1C",
                    color: "IconNormal",
                    className: "".concat(S, "-arrow")
                }))
            };
            var H = r("G9To"),
                Z = function(e) {
                    var t, r = e.value,
                        n = e.disabled,
                        a = e.active,
                        o = e.onSelect,
                        i = e.type,
                        s = e.optionCheckIcon,
                        c = e.wrapperType,
                        l = e.deselectable,
                        u = (0, b.__rest)(e, ["value", "disabled", "active", "onSelect", "type", "optionCheckIcon", "wrapperType", "deselectable"]),
                        d = (0, V.r)().prefixCls,
                        p = "".concat(d, "-select-option"),
                        m = y()(p, ((t = {
                            active: !!a,
                            disabled: !!n,
                            icon: !!s
                        })["".concat(p, "__").concat(c)] = "drawer" === c, t), e.className),
                        g = (0, h.useCallback)((function(e) {
                            if (n) return e.stopPropagation();
                            if (!n && o) {
                                if ("single" === i && a && !l) return;
                                o(r)
                            }
                        }), [r, o, n, i, a, l]),
                        x = {
                            role: "option",
                            "aria-selected": a,
                            "aria-disabled": n
                        };
                    return f().createElement(v.Ay, (0, b.__assign)({}, x, u, {
                        onClick: g,
                        className: m
                    }), e.children, a && s && f().createElement(H.A, {
                        name: "Checkmark1C",
                        color: "PrimaryText"
                    }))
                };
            Z.__name = "SelectOption";
            const K = Z;
            const z = function(e) {
                var t = e.title,
                    r = e.selects,
                    n = void 0 === r ? [] : r,
                    a = e.onSelect,
                    o = e.className,
                    i = (0, b.__rest)(e, ["title", "selects", "onSelect", "className"]),
                    s = (0, V.r)().prefixCls,
                    c = "".concat(s, "-select-option-group");
                return f().createElement(v.Ay, (0, b.__assign)({}, i, {
                    className: y()(c, o)
                }), f().createElement(v.Ay, {
                    className: "".concat(c, "-title"),
                    children: t
                }), f().Children.map(e.children, (function(e) {
                    var t;
                    if (!f().isValidElement(e)) return null;
                    if ("SelectOption" !== (null === (t = e.type) || void 0 === t ? void 0 : t.__name)) return null;
                    var r = n.indexOf(e.props.value) > -1;
                    return f().cloneElement(e, {
                        onSelect: a,
                        active: r
                    })
                })))
            };
            var q = r("DzvH"),
                Y = r("Y4uf");
            const W = function(e) {
                return f().createElement(Y.A, (0, b.__assign)({
                    viewBox: "0 0 24 25",
                    fill: "none"
                }, e), f().createElement("path", {
                    d: "M19.357 4.687L9.301 14.743l-4.656-4.657-3.03 3.031L9.3 20.804 22.388 7.717l-3.03-3.03z",
                    fill: "currentColor"
                }))
            };
            var Q = function(e) {
                var t, r = e.value,
                    n = e.checked,
                    a = e.disabled,
                    o = e.indeterminate,
                    i = e.defaultChecked,
                    s = e.variant,
                    c = void 0 === s ? "square" : s,
                    l = e.onChange,
                    u = e.sz,
                    d = void 0 === u ? "md" : u,
                    p = (0, b.__rest)(e, ["value", "checked", "disabled", "indeterminate", "defaultChecked", "variant", "onChange", "sz"]),
                    m = function(e) {
                        var t = e.checked,
                            r = e.defaultChecked,
                            n = e.onChange,
                            a = e.disabled,
                            o = f().useState(!!r),
                            i = o[0],
                            s = o[1];
                        (0, w.op)((function() {
                            "undefined" !== typeof t && i !== !!t && s(!i)
                        }));
                        var c = (0, _.d)({
                                fn: n
                            }).debounceFn,
                            l = (0, h.useCallback)((function(e) {
                                a || s((function(t) {
                                    var r = "boolean" === typeof e ? e : !t;
                                    return t !== r && c(r), t !== r ? r : t
                                }))
                            }), [c, a]);
                        return {
                            checked: i,
                            onChecked: l
                        }
                    }({
                        defaultChecked: i,
                        checked: n,
                        disabled: a,
                        onChange: (0, h.useCallback)((function(e) {
                            return l && l(r, e)
                        }), [l, r])
                    }),
                    g = m.onChecked,
                    x = m.checked,
                    C = (0, V.r)(),
                    E = C.prefixCls,
                    A = C.isRTL,
                    R = "".concat(E, "-checkbox"),
                    S = y()(R, ((t = {})["".concat(R, "-rtl")] = A, t["".concat(R, "__").concat(c)] = !!c, t.disabled = !!a, t.checked = !!x, t["data-size-".concat(d)] = !!d, t), e.className),
                    T = o ? f().createElement(q.A, {
                        name: "Minus1C",
                        color: "BasicBg"
                    }) : f().createElement(W, {
                        name: "CheckboxControl1C",
                        color: "BasicBg"
                    }),
                    N = {
                        role: "checkbox",
                        "aria-checked": x,
                        "aria-disabled": a,
                        tabIndex: a ? -1 : 0,
                        onKeyDown: function(e) {
                            "Enter" !== e.key && " " !== e.key || (e.preventDefault(), g())
                        }
                    };
                return f().createElement(v.Ay, (0, b.__assign)({}, N, p, {
                    onClick: g,
                    className: S
                }), f().createElement(v.Ay, {
                    className: "".concat(R, "-icon"),
                    children: T
                }), e.children)
            };
            Q.__name = "Checkbox";
            const X = Q;
            var J = function(e) {
                var t = e.value,
                    r = e.disabled,
                    n = e.active,
                    a = e.onSelect,
                    o = (e.wrapperType, (0, b.__rest)(e, ["value", "disabled", "active", "onSelect", "wrapperType"])),
                    i = (0, V.r)().prefixCls,
                    s = "".concat(i, "-select-option"),
                    c = y()(s, {
                        active: !!n,
                        disabled: !!r,
                        multi: !0
                    }, e.className),
                    l = (0, h.useCallback)((function(e) {
                        if (r) return e.stopPropagation();
                        !r && a && a(t)
                    }), [t, a, r, n]),
                    u = {
                        role: "option",
                        "aria-selected": n,
                        "aria-disabled": r
                    };
                return f().createElement(v.Ay, (0, b.__assign)({}, u, o, {
                    onClick: l,
                    className: c
                }), f().createElement(X, {
                    value: t,
                    checked: n,
                    children: e.children,
                    disabled: r,
                    sz: "lg"
                }))
            };
            J.__name = "SelectOption";
            const $ = J;
            const ee = function(e) {
                return f().createElement(Y.A, (0, b.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), f().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z",
                    fill: "currentColor"
                }))
            };
            var te = r("qrIQ"),
                re = r("yc/1"),
                ne = function(e) {
                    var t;
                    e.stopPropagation(), te.lq || null === (t = null === e || void 0 === e ? void 0 : e.nativeEvent) || void 0 === t || t.stopImmediatePropagation()
                };
            const ae = function(e) {
                var t, r, n = e.selects,
                    a = e.onSelect,
                    o = e.className,
                    i = e.onSearchFn,
                    s = e.emptyText,
                    c = void 0 === s ? "No results found" : s,
                    l = e.searchPlaceholder,
                    u = void 0 === l ? "search options" : l,
                    d = e.drawerCancelText,
                    p = void 0 === d ? "Cancel" : d,
                    g = e.searchValue,
                    x = e.fieldVariant,
                    C = e.type,
                    w = e.onClose,
                    _ = e.searchFieldProps,
                    E = e.wrapperType,
                    A = e.listMaxHeight,
                    R = e.id,
                    S = (0, V.r)().prefixCls,
                    T = "".concat(S, "-select-overlay"),
                    N = "".concat(T, "-search"),
                    j = "".concat(N, "-").concat(x),
                    F = "".concat(N, "-close"),
                    k = "filled" === x ? "default" : "line",
                    D = (0, h.useCallback)((function(e) {
                        return i && i(e)
                    }), [i]),
                    P = {
                        role: "listbox",
                        id: R,
                        "aria-label": "Select an option"
                    };
                return f().createElement(v.Ay, (0, b.__assign)({
                    className: y()(T, (t = {}, t["".concat(T, "__").concat(E)] = "drawer" === E, t), o),
                    onClick: ne
                }, P), "function" === typeof i && f().createElement(v.Ay, {
                    onClick: ne,
                    className: y()(N, (r = {}, r[j] = !!j, r[F] = !!w, r))
                }, f().createElement(re.A, (0, b.__assign)({}, _, {
                    variant: k,
                    value: g,
                    enableClear: !0,
                    onChange: D,
                    placeholder: u,
                    prefix: f().createElement(ee, {
                        name: "Search1C",
                        color: "DisableText"
                    })
                })), "function" === typeof w && f().createElement(m.A, {
                    onClick: w,
                    variant: "text",
                    children: p,
                    className: "".concat(F, "-btn")
                })), f().createElement(v.Ay, {
                    className: "".concat(T, "-options"),
                    style: {
                        maxHeight: A
                    }
                }, f().Children.count(e.children) ? f().Children.map(e.children, (function(e) {
                    var t;
                    if (!f().isValidElement(e)) return null;
                    if ("SelectOption" === (null === (t = e.type) || void 0 === t ? void 0 : t.__name)) {
                        var r = n.indexOf(e.props.value) > -1;
                        return (0, h.cloneElement)(e, {
                            onSelect: a,
                            active: r,
                            type: C,
                            wrapperType: E
                        })
                    }
                    return (0, h.cloneElement)(e, {
                        onSelect: a,
                        selects: n
                    })
                })) : f().createElement(v.Ay, {
                    className: "".concat(T, "-empty"),
                    children: c
                })))
            };
            var oe = function(e) {
                var t, r, n = e.value,
                    a = e.options,
                    o = e.prefix,
                    i = e.renderFn,
                    s = e.disabled,
                    c = e.onChange,
                    l = e.onSearchFn,
                    u = e.searchValue,
                    d = e.type,
                    p = void 0 === d ? "single" : d,
                    v = e.size,
                    m = void 0 === v ? "middle" : v,
                    g = e.variant,
                    x = void 0 === g ? "auto" : g,
                    R = e.placeholder,
                    S = void 0 === R ? "" : R,
                    N = e.once,
                    j = void 0 === N ? "single" === p : N,
                    F = e.placement,
                    k = void 0 === F ? "bottom" : F,
                    P = e.trigger,
                    L = void 0 === P ? "hover" : P,
                    I = e.fieldVariant,
                    M = void 0 === I ? "line" : I,
                    U = e.wrapperType,
                    O = void 0 === U ? "dropdown" : U,
                    B = e.fieldLabel,
                    H = e.searchPlaceholder,
                    Z = e.emptyText,
                    K = e.customField,
                    z = e.className,
                    q = e.children,
                    Y = e.drawerCancelText,
                    W = e.enablePortal,
                    Q = e.portalNode,
                    X = e.drawerHeaderProps,
                    J = e.searchFieldProps,
                    $ = e.offset,
                    ee = e.useReactPopper,
                    te = e.reactPopperProps,
                    re = void 0 === te ? {} : te,
                    ne = re.sameWidth,
                    oe = void 0 === ne || ne,
                    ie = re.popperWidth,
                    se = re.offsetX,
                    ce = e.dpVariant,
                    le = void 0 === ce ? "default" : ce,
                    ue = e.dpStyle,
                    de = e.triggerClassName,
                    he = e.bubbleClassName,
                    fe = e.fieldClassName,
                    pe = e.bubbleWrapperClz,
                    ve = e.onVisibleChange,
                    me = e.delay,
                    ge = e.listMaxHeight,
                    be = e.enableClickBubble,
                    xe = e.drawerProps,
                    ye = e.open,
                    Ce = (0, h.useState)(!!ye),
                    we = Ce[0],
                    _e = Ce[1],
                    Ee = (0, V.r)().prefixCls,
                    Ae = "".concat(Ee, "-select"),
                    Re = y()(Ae, ((t = {})["".concat(Ae, "__").concat(x)] = !!x, t), z),
                    Se = y()(Ae, z),
                    Te = y()("".concat(Ae, "__drawer-header"), null === X || void 0 === X ? void 0 : X.className),
                    Ne = y()("".concat(Ae, "-trigger"), de),
                    Ve = y()("".concat(Ae, "-bubble"), ((r = {})["".concat(Ae, "-bubble__").concat(le)] = "default" !== le, r), he),
                    je = (0, h.useMemo)((function() {
                        return "".concat(Ae, "-").concat((0, A.uR)(8))
                    }), [Ae]),
                    Fe = (0, h.useCallback)((function(e) {
                        _e(e), null === ve || void 0 === ve || ve(e)
                    }), [ve, _e]),
                    ke = "drawer" === O ? function() {
                        return Fe(!1)
                    } : void 0,
                    De = function(e) {
                        var t = e.type,
                            r = e.value,
                            n = e.disabled,
                            a = e.onChange,
                            o = f().useState(E),
                            i = o[0],
                            s = o[1],
                            c = "multi" === t;
                        (0, w.op)((function() {
                            Array.isArray(r) && !(0, C.aI)(r, i) && s(r.slice(0, c ? void 0 : 1))
                        }), [r, c]);
                        var l = (0, _.d)({
                                fn: a,
                                deps: []
                            }).debounceFn,
                            u = (0, h.useCallback)((function(e, t) {
                                n || s((function(r) {
                                    var n = c ? (0, b.__spreadArray)([], r, !0) : [],
                                        a = function(t) {
                                            return t !== e
                                        },
                                        o = -1 === r.indexOf(e);
                                    switch (t) {
                                        case !1:
                                            n = o ? n : n.filter(a);
                                            break;
                                        case !0:
                                            n = o ? n.concat(e) : c ? n : [e];
                                            break;
                                        default:
                                            n = o ? n.concat(e) : n.filter(a)
                                    }
                                    return (0, C.aI)(r, n) || l(n), n
                                }))
                            }), [l, n, c]);
                        return {
                            selects: i,
                            onSelect: u
                        }
                    }({
                        type: p,
                        value: n,
                        disabled: s,
                        onChange: c
                    }),
                    Pe = De.selects,
                    Le = De.onSelect,
                    Ie = (0, h.useCallback)((function(e, t) {
                        Le(e, t), ("single" === p || j) && Fe(!1)
                    }), [Le, p, j, Fe]),
                    Me = (0, h.useCallback)((function(e) {
                        return Ie(e)
                    }), [Ie]);
                (0, h.useEffect)((function() {
                    "undefined" !== typeof ye && we !== !!ye && _e(!we)
                }), [ye, we]);
                var Ue = {
                        selects: Pe,
                        emptyText: Z,
                        onSearchFn: l,
                        searchPlaceholder: H,
                        children: q,
                        type: p,
                        onClose: ke,
                        drawerCancelText: Y,
                        searchValue: u,
                        searchFieldProps: J,
                        wrapperType: O,
                        id: je
                    },
                    Oe = f().createElement(ae, (0, b.__assign)({}, Ue, {
                        onSelect: Ie,
                        children: q,
                        fieldVariant: M,
                        listMaxHeight: ge
                    })),
                    Be = {
                        once: j,
                        disabled: s,
                        placement: k,
                        onVisibleChange: Fe,
                        trigger: L,
                        enablePortal: W,
                        portalNode: Q,
                        offset: $,
                        style: ue,
                        useReactPopper: ee,
                        delay: me,
                        reactPopperProps: {
                            sameWidth: oe,
                            popperWidth: ie,
                            offsetX: se
                        },
                        bubbleWrapperClz: pe,
                        enableClickBubble: be
                    },
                    Ge = (0, b.__assign)({
                        once: j,
                        visible: we,
                        onClose: function() {
                            return Fe(!1)
                        },
                        onVisibleChange: Fe,
                        enablePortal: W,
                        portalNode: Q
                    }, xe),
                    He = X ? (0, b.__assign)((0, b.__assign)({
                        onNextClick: function() {
                            return Fe(!1)
                        }
                    }, X), {
                        className: Te
                    }) : void 0,
                    Ze = {
                        type: p,
                        size: m,
                        prefix: o,
                        disabled: s,
                        renderFn: i,
                        placeholder: S,
                        fieldVariant: M,
                        fieldLabel: B,
                        className: fe,
                        ariaControls: je
                    };
                return "drawer" === O ? f().createElement(f().Fragment, null, f().isValidElement(K) ? f().cloneElement(K, {
                    active: we,
                    selects: Pe,
                    onRemove: Me,
                    onOpen: function() {
                        return Fe(!0)
                    }
                }) : f().createElement(G, (0, b.__assign)({}, Ze, {
                    active: we,
                    selects: Pe,
                    onRemove: Me,
                    onFieldClick: s ? void 0 : function() {
                        return Fe(!0)
                    },
                    options: a
                })), f().createElement(D, (0, b.__assign)({
                    variant: "basic",
                    className: Se
                }, Ge), He && f().createElement(D.Header, (0, b.__assign)({}, He)), Oe)) : f().createElement(T, (0, b.__assign)({}, Be, {
                    open: we,
                    className: Re,
                    overlay: Oe,
                    bubbleClassName: Ve,
                    triggerClassName: Ne,
                    ariaRole: "combobox"
                }), f().isValidElement(K) ? f().cloneElement(K, {
                    active: we,
                    selects: Pe,
                    onRemove: Me
                }) : f().createElement(G, (0, b.__assign)({}, Ze, {
                    active: we,
                    selects: Pe,
                    onRemove: Me,
                    options: a
                })))
            };
            oe.displayName = "Select", oe.Option = K, oe.OptionGroup = z, oe.OptionMulti = $;
            const ie = oe;
            var se = r("JyHn"),
                ce = r("mQvl"),
                le = r("Nvb0"),
                ue = r("dh/N"),
                de = r("XiER"),
                he = r("TPNB"),
                fe = r("u7Qj"),
                pe = r("3Pj3"),
                ve = r("Apzs"),
                me = function(e) {
                    var t = e.success,
                        r = e.voucher,
                        n = e.code,
                        i = e.coinPair,
                        s = e.onClose,
                        c = (0, ce.B)().t,
                        u = (0, p.a)().isLiteMode;
                    if (t) {
                        var d = (0, pe.gb)({
                            voucher: r,
                            t: c,
                            coinPair: i,
                            isLiteMode: u
                        });
                        return (0, l.jsx)(de.j, (0, a.A)({
                            type: "success",
                            showClose: !0,
                            onClose: s,
                            onOk: s,
                            icon: (0, l.jsx)(ve.m, {
                                style: {
                                    width: "100%",
                                    fontSize: "168px",
                                    height: "168px"
                                }
                            }),
                            title: c("RewardActivated", "Reward Activated")
                        }, d))
                    }
                    var h = (0, fe.PK)({
                        voucher: r,
                        code: n,
                        t: c
                    });
                    return (0, l.jsx)(de.j, (0, o.A)((0, a.A)({
                        showClose: !0
                    }, h), {
                        onOk: s,
                        onClose: s
                    }))
                },
                ge = v.Ay,
                be = function(e) {
                    var t = e.onSuccess,
                        r = e.onCancel,
                        a = e.onFail,
                        o = e.voucher,
                        i = (0, ce.B)().t,
                        s = (0, u.jE)(),
                        f = o.voucherId,
                        v = o.voucherType,
                        b = o.coinPairs,
                        x = o.isActivating,
                        y = o.product,
                        C = (0, h.useState)(""),
                        w = C[0],
                        _ = C[1],
                        E = (0, h.useState)(""),
                        A = E[0],
                        R = E[1],
                        S = (0, h.useState)(x ? "activating" : "start"),
                        T = S[0],
                        N = S[1],
                        V = (0, h.useMemo)((function() {
                            return ["SAVING_GIF_MONEY", "LOCKED_GIF_MONEY"].includes(v)
                        }), [v]),
                        j = (0, p.a)().isLiteMode,
                        F = (0, h.useMemo)((function() {
                            var e;
                            return null === (e = b || []) || void 0 === e ? void 0 : e.filter((function(e) {
                                return e.toLowerCase().includes(A.toLowerCase())
                            }))
                        }), [b, A]),
                        k = (0, h.useCallback)((function() {
                            s.invalidateQueries({
                                queryKey: he.Vb.fetchUserVouchers
                            })
                        }), [s]),
                        D = (0, h.useCallback)((function(e) {
                            var r = e.voucherInfo;
                            k(), t && t({
                                voucher: r || o,
                                coinPair: w
                            })
                        }), [t, o, w, i, j, k]);
                    (0, d.I)({
                        enabled: "activating" === T,
                        queryKey: ["voucher", f],
                        queryFn: function() {
                            return (0, ue.j0)({
                                voucherId: f
                            })
                        },
                        refetchInterval: 2e3,
                        refetchIntervalInBackground: !0,
                        onSettled: function(e) {
                            var t;
                            "USED" === (null === e || void 0 === e || null === (t = e.voucherInfo) || void 0 === t ? void 0 : t.status) && D({})
                        }
                    });
                    var P = (0, h.useCallback)((0, n.A)(c().mark((function e() {
                            var t, r, n;
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 4, (0, ue.T)({
                                            voucherId: f,
                                            coinPair: w
                                        });
                                    case 4:
                                        if (r = e.sent, 504 !== (null === (t = null === r || void 0 === r ? void 0 : r.errorData) || void 0 === t ? void 0 : t.code)) {
                                            e.next = 8;
                                            break
                                        }
                                        return N("activating"), e.abrupt("return");
                                    case 8:
                                        r.success ? D({
                                            voucherInfo: null === (n = r.data) || void 0 === n ? void 0 : n.voucherInfo
                                        }) : "VIP_UPGRADE" === v && r.code === fe.fv.REQUEST_TIMEOUT ? N("activating") : a && a(r), e.next = 14;
                                        break;
                                    case 11:
                                        e.prev = 11, e.t0 = e.catch(0), console.error(e.t0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 11]
                            ])
                        }))), [o, f, a, w, v, D, i]),
                        L = (0, h.useCallback)((function() {
                            "MARGIN_LOAN" === v && "MARGIN_ISOLATED" === y ? N("choose-pair") : V ? (0, pe.dy)({
                                voucher: o
                            }) : P()
                        }), [P, o, v, y, V]),
                        I = (0, h.useMemo)((function() {
                            switch (T) {
                                case "choose-pair":
                                    return {
                                        title: i("ChoosePairTitle", "Please Choose A Pair"),
                                        desc: i("ChoosePairDesc", "Select a pair that you wish to enjoy interest-free borrowing."),
                                        buttonText: i("Confirm", "Confirm"),
                                        onClick: P
                                    };
                                case "activating":
                                    return {
                                        title: i("ActivatingTitle", "Activating..."),
                                        desc: i("ActivatingDesc", "We are activating this reward. Please wait."),
                                        onClick: function() {
                                            k(), r && r()
                                        },
                                        onClose: function() {
                                            k(), r && r()
                                        }
                                    };
                                default:
                                    return {
                                        title: i("UseRewardTitle", "Use This Reward?"),
                                        desc: (0, pe._$)(o, i, j),
                                        buttonText: V ? i("GoSimpleEarnBtn", "Go to Simple Earn") : i("UseRewardBtn", "Use Reward"),
                                        onClick: L
                                    }
                            }
                        }), [T, P, L, k, r, o, s, V, i, j]);
                    return (0, l.jsx)(de.j, {
                        onClose: (null === I || void 0 === I ? void 0 : I.onClose) || r,
                        icon: (0, l.jsx)(le.h, {}),
                        title: I.title,
                        desc: I.desc,
                        buttonText: I.buttonText,
                        showClose: !0,
                        footer: (0, l.jsx)(m.A, {
                            sz: "large",
                            onClick: null === I || void 0 === I ? void 0 : I.onClick,
                            className: "ul-width-full",
                            disabled: "choose-pair" === T && !w,
                            children: I.buttonText || i("ok", "OK")
                        }),
                        children: "choose-pair" === T && (0, l.jsx)(g.A, {
                            className: "UseVoucherModal-selectPair-formItem",
                            label: (0, l.jsx)(ge, {
                                className: "UseVoucherModal-selectPair-label",
                                children: i("SelectPair", "Select Pair")
                            }),
                            children: (0, l.jsx)(ie, {
                                value: w,
                                variant: "full",
                                placeholder: "",
                                emptyText: "",
                                onChange: function(e) {
                                    _(null === e || void 0 === e ? void 0 : e[0])
                                },
                                onSearchFn: function(e) {
                                    return R(e), !0
                                },
                                children: F.map((function(e, t) {
                                    return (0, l.jsx)(ie.Option, {
                                        value: e,
                                        children: e
                                    }, t)
                                }))
                            })
                        })
                    })
                },
                xe = function(e) {
                    var t = e.voucher,
                        r = e.onClose,
                        n = (0, h.useState)(!0),
                        i = n[0],
                        s = n[1],
                        c = (0, h.useState)(null),
                        u = c[0],
                        d = c[1];
                    return (0, l.jsxs)(l.Fragment, {
                        children: [i && (0, l.jsx)(be, {
                            voucher: t,
                            onSuccess: function(e) {
                                var t = e.voucher,
                                    r = e.coinPair;
                                d({
                                    success: !0,
                                    voucher: t,
                                    coinPair: r
                                }), s(!1)
                            },
                            onFail: function(e) {
                                d({
                                    success: !1,
                                    voucher: t,
                                    code: e.code
                                }), s(!1)
                            },
                            onCancel: function() {
                                s(!1), r && r()
                            }
                        }), u && (0, l.jsx)(me, (0, o.A)((0, a.A)({}, u), {
                            onClose: function() {
                                d(null), r && r()
                            }
                        }))]
                    })
                },
                ye = function(e) {
                    var t = e.voucher,
                        r = e.buttonText,
                        n = (0, i.A)(e, ["voucher", "buttonText"]),
                        s = (0, ce.B)().t,
                        c = (0, se.Z)(),
                        u = c.openModal,
                        d = c.closeModal;
                    return (0, l.jsx)(m.A, (0, o.A)((0, a.A)({
                        sz: "tiny",
                        variant: "primary"
                    }, n), {
                        onClick: function() {
                            u({
                                content: (0, l.jsx)(xe, {
                                    voucher: t,
                                    onClose: d
                                })
                            })
                        },
                        children: r || s("VoucherCard-btnUse", "Use")
                    }))
                }
        },
        XiER: (e, t, r) => {
            r.d(t, {
                j: () => v
            });
            var n = r("BK7R"),
                a = r("QUKP"),
                o = r("TrCV"),
                i = r("DTvD"),
                s = r("XxiJ"),
                c = r("D4P9"),
                l = r("eeEA"),
                u = r("xE8/"),
                d = r("Y1+p"),
                h = r("mQvl"),
                f = r("fCDO"),
                p = r("5/aQ"),
                v = function(e) {
                    var t = e.onOk,
                        r = e.onClose,
                        v = e.icon,
                        m = e.buttonText,
                        g = e.title,
                        b = e.desc,
                        x = e.type,
                        y = e.children,
                        C = e.footer,
                        w = e.showClose,
                        _ = void 0 !== w && w,
                        E = e.isCloseOnOk,
                        A = void 0 === E || E,
                        R = e.linkProps,
                        S = (0, h.B)().t,
                        T = (0, i.useMemo)((function() {
                            switch (x) {
                                case "error":
                                    return (0, o.jsx)(s.A, {
                                        size: 96
                                    });
                                case "warning":
                                    return (0, o.jsx)(p.v, {
                                        size: 96
                                    });
                                default:
                                    return (0, o.jsx)(f.G, {
                                        size: 96
                                    })
                            }
                        }), [x]),
                        N = (0, i.useCallback)((function() {
                            t && t(), A && r && r()
                        }), [t, A, r]),
                        V = (0, i.useMemo)((function() {
                            return C || (R ? (0, o.jsx)(u.qO, (0, a.A)((0, n.A)({
                                className: "ul-width-full"
                            }, R), {
                                children: (0, o.jsx)(c.A, {
                                    className: "ul-width-full",
                                    sz: "large",
                                    onClick: N,
                                    children: m || S("ok", "OK")
                                })
                            })) : (0, o.jsx)(c.A, {
                                className: "ul-width-full",
                                sz: "large",
                                onClick: N,
                                children: m || S("ok", "OK")
                            }))
                        }), [C, R, m, S, N]);
                    return (0, o.jsxs)(d.J, {
                        className: "CustomModal",
                        onClose: r,
                        header: (0, o.jsx)(l.Ay, {
                            style: {
                                height: "28px"
                            }
                        }),
                        visible: !0,
                        showClose: _,
                        footer: V,
                        children: [(0, o.jsxs)(l.Ay, {
                            className: "ul-flex ul-flex-col ul-items-center",
                            children: [(0, o.jsx)(l.Ay, {
                                className: "CustomModal-icon",
                                children: v || T || (0, o.jsx)(s.A, {
                                    size: 96
                                })
                            }), (0, o.jsx)(l.Ay, {
                                className: "CustomModal-title",
                                children: g
                            }), (0, o.jsx)(l.Ay, {
                                className: "CustomModal-desc",
                                children: b
                            })]
                        }), y]
                    })
                }
        },
        TPNB: (e, t, r) => {
            r.d(t, {
                MC: () => u,
                Vb: () => l,
                _d: () => d
            });
            var n = r("sViW"),
                a = r("VP0d"),
                o = r("Pz56"),
                i = r.n(o),
                s = r("LZsd"),
                c = r("dh/N"),
                l = {
                    fetchClaimVoucherHistory: ["fetchClaimVoucherHistory"],
                    fetchUserVouchers: ["fetchUserVouchers"]
                },
                u = function() {
                    return (0, s.I)({
                        queryKey: ["fetchClaimVoucherHistory"],
                        queryFn: (0, n.A)(i().mark((function e() {
                            var t, r, n, a;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, c.tj)();
                                    case 2:
                                        return t = e.sent, r = t.data, n = r.list, a = void 0 === n ? [] : n, e.abrupt("return", a);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })
                },
                d = function() {
                    return (0, s.I)({
                        queryKey: l.fetchUserVouchers,
                        queryFn: (0, n.A)(i().mark((function e() {
                            var t, r, n;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = a.A, e.next = 3, Promise.all([(0, c.Rp)({
                                            tab: "ONGOING"
                                        }), (0, c.Rp)({
                                            tab: "PAST"
                                        })]);
                                    case 3:
                                        return e.t1 = e.sent, t = (0, e.t0)(e.t1, 2), r = t[0], n = t[1], e.abrupt("return", {
                                            ongoingTabData: r,
                                            pastTabData: n
                                        });
                                    case 8:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    })
                }
        },
        "8J5H": (e, t, r) => {
            r.d(t, {
                G: () => s
            });
            var n = r("DTvD"),
                a = r.n(n),
                o = r("W3Ja"),
                i = function(e) {
                    return e
                },
                s = function(e) {
                    var t = e.value,
                        r = e.onChange,
                        s = e.defaultValue,
                        c = void 0 === s ? "" : s,
                        l = e.onBlur,
                        u = e.onFocus,
                        d = e.formatter,
                        h = void 0 === d ? i : d,
                        f = e.parser,
                        p = void 0 === f ? i : f,
                        v = a().useRef(),
                        m = (0, n.useState)(h(c)),
                        g = m[0],
                        b = m[1],
                        x = (0, n.useState)(!1),
                        y = x[0],
                        C = x[1];
                    v.current = {
                        onChange: r,
                        onBlur: l,
                        onFocus: u
                    }, (0, o.op)((function() {
                        if ("undefined" !== typeof t) {
                            var e = h(t);
                            e !== g && b(e)
                        }
                    }));
                    var w = (0, n.useCallback)((function(e) {
                            C(!1), v.current.onBlur && v.current.onBlur(e)
                        }), []),
                        _ = (0, n.useCallback)((function(e) {
                            C(!0), v.current.onFocus && v.current.onFocus(e)
                        }), []),
                        E = (0, n.useCallback)((function(e) {
                            var t = e.target.value,
                                r = p(t),
                                n = h(r);
                            b(n), v.current.onChange && v.current.onChange(r, e)
                        }), []);
                    return {
                        input: g,
                        focus: y,
                        onInput: E,
                        onBlur: w,
                        onFocus: _
                    }
                }
        },
        q5Ye: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                a = r("DTvD"),
                o = r.n(a),
                i = r("Y4uf");
            const s = function(e) {
                return o().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",
                    fill: "currentColor"
                }))
            }
        },
        DzvH: (e, t, r) => {
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                a = r("DTvD"),
                o = r.n(a),
                i = r("Y4uf");
            const s = function(e) {
                return o().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M3 10.5v3h18v-3H3z",
                    fill: "currentColor"
                }))
            }
        },
        CeW4: (e, t, r) => {
            r.d(t, {
                A: () => h
            });
            var n = r("wIZF"),
                a = r("DTvD"),
                o = r.n(a),
                i = r("O94r"),
                s = r.n(i),
                c = r("H2//"),
                l = r("eeEA"),
                u = r("R2Ip"),
                d = r("fvKX");
            const h = function(e) {
                var t, r = e.label,
                    i = e.errMsg,
                    h = e.tips,
                    f = e.children,
                    p = e.tipsVariant,
                    v = void 0 === p ? "default" : p,
                    m = e.tooltipsProps,
                    g = (0, n.__rest)(e, ["label", "errMsg", "tips", "children", "tipsVariant", "tooltipsProps"]),
                    b = (0, a.useState)(!1),
                    x = b[0],
                    y = b[1],
                    C = (0, d.r)(),
                    w = C.prefixCls,
                    _ = C.isRTL,
                    E = "".concat(w, "-formItem"),
                    A = s()(E, ((t = {})["".concat(E, "-rtl")] = !!_, t), e.className),
                    R = (0, a.useMemo)((function() {
                        return "".concat(E, "-").concat((0, c.uR)(8))
                    }), [E]),
                    S = (0, a.useMemo)((function() {
                        return "".concat(R, "-error")
                    }), [R]),
                    T = (0, a.useMemo)((function() {
                        return "".concat(R, "-desc")
                    }), [R]);
                if (1 !== o().Children.count(f)) throw new Error("children can only be a node");
                var N = {
                        id: R,
                        "aria-required": g.required ? "true" : void 0,
                        "aria-invalid": i ? "true" : void 0,
                        "aria-describedby": [h ? T : null, i ? S : null].filter(Boolean).join(" ") || void 0
                    },
                    V = {
                        as: "label",
                        htmlFor: R
                    },
                    j = {
                        id: S,
                        role: "alert",
                        "aria-disabled": !0
                    },
                    F = (0, a.useMemo)((function() {
                        var e, t = o().cloneElement(f, (0, n.__assign)((0, n.__assign)({}, N), f.props));
                        if ("inline" === v) {
                            var r = "TextField" === (null === (e = f.type) || void 0 === e ? void 0 : e.__name) ? (0, n.__assign)({
                                placement: "top-start",
                                arrow: !0,
                                offset: 8,
                                open: !!h && x,
                                onOpenChange: y,
                                bubbleFontSize: 12,
                                id: T
                            }, m) : (0, n.__assign)({
                                id: T
                            }, m);
                            return t = o().cloneElement(t, {
                                onFocus: function(e) {
                                    var t, r;
                                    y(!0), null === (r = (t = f.props).onFocus) || void 0 === r || r.call(t, e)
                                },
                                onBlur: function(e) {
                                    var t, r;
                                    y(!1), null === (r = (t = f.props).onBlur) || void 0 === r || r.call(t, e)
                                }
                            }), o().createElement(u.A, (0, n.__assign)({
                                tooltips: h
                            }, r), t)
                        }
                        return o().createElement(o().Fragment, null, t, h && o().createElement(l.Ay, {
                            className: "".concat(E, "-tips"),
                            id: T,
                            "aria-disabled": "true"
                        }, h))
                    }), [h, v, f, E, x, m]);
                return o().createElement(l.Ay, (0, n.__assign)({}, g, {
                    className: A
                }), !!r && o().createElement(l.Ay, (0, n.__assign)({
                    className: "".concat(E, "-label")
                }, V), r), F, !!i && o().createElement(l.Ay, (0, n.__assign)({
                    className: "".concat(E, "-errMsg")
                }, j), i))
            }
        },
        YgAF: (e, t, r) => {
            r.d(t, {
                A: () => u
            });
            var n = r("wIZF"),
                a = r("DTvD"),
                o = r.n(a),
                i = r("O94r"),
                s = r.n(i),
                c = r("eeEA"),
                l = r("fvKX");
            const u = function(e) {
                var t = e.icon,
                    r = e.title,
                    a = e.subTitle,
                    i = e.description,
                    u = e.actions,
                    d = (0, n.__rest)(e, ["icon", "title", "subTitle", "description", "actions"]),
                    h = (0, l.r)().prefixCls,
                    f = "".concat(h, "-modal-confirm"),
                    p = o().isValidElement(t),
                    v = o().isValidElement(u);
                return o().createElement(c.Ay, (0, n.__assign)({}, d, {
                    className: s()(f, e.className)
                }), p ? o().cloneElement(t, {
                    className: "".concat(f, "-icon")
                }) : null, r ? o().createElement(c.Ay, {
                    className: "".concat(f, "-title"),
                    children: r
                }) : null, a ? o().createElement(c.Ay, {
                    className: "".concat(f, "-subtitle"),
                    children: a
                }) : null, i ? o().createElement(c.Ay, {
                    className: "".concat(f, "-desc"),
                    children: i
                }) : null, v ? o().createElement(c.Ay, {
                    className: "".concat(f, "-actions"),
                    children: u
                }) : null)
            }
        },
        "yc/1": (e, t, r) => {
            r.d(t, {
                A: () => pe
            });
            var n, a = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o);

            function s(e, t) {
                var r = {};
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var a = 0;
                    for (n = Object.getOwnPropertySymbols(e); a < n.length; a++) t.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[a]) && (r[n[a]] = e[n[a]])
                }
                return r
            }

            function c() {}

            function l(e) {
                return !!(e || "").match(/\d/)
            }

            function u(e) {
                return null === e || void 0 === e
            }

            function d(e) {
                return u(e) || function(e) {
                    return "number" === typeof e && isNaN(e)
                }(e) || "number" === typeof e && !isFinite(e)
            }

            function h(e) {
                return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }

            function f(e, t) {
                void 0 === t && (t = !0);
                var r = "-" === e[0],
                    n = r && t,
                    a = (e = e.replace("-", "")).split(".");
                return {
                    beforeDecimal: a[0],
                    afterDecimal: a[1] || "",
                    hasNegation: r,
                    addNegation: n
                }
            }

            function p(e, t, r) {
                for (var n = "", a = r ? "0" : "", o = 0; o <= t - 1; o++) n += e[o] || a;
                return n
            }

            function v(e, t) {
                return Array(t + 1).join(e)
            }

            function m(e) {
                var t = e + "",
                    r = "-" === t[0] ? "-" : "";
                r && (t = t.substring(1));
                var n = t.split(/[eE]/g),
                    a = n[0],
                    o = n[1];
                if (!(o = Number(o))) return r + a;
                var i = 1 + o,
                    s = (a = a.replace(".", "")).length;
                return i < 0 ? a = "0." + v("0", Math.abs(i)) + a : i >= s ? a += v("0", i - s) : a = (a.substring(0, i) || "0") + "." + a.substring(i), r + a
            }

            function g(e, t, r) {
                if (-1 !== ["", "-"].indexOf(e)) return e;
                var n = (-1 !== e.indexOf(".") || r) && t,
                    a = f(e),
                    o = a.beforeDecimal,
                    i = a.afterDecimal,
                    s = a.hasNegation,
                    c = parseFloat("0." + (i || "0")),
                    l = (i.length <= t ? "0." + i : c.toFixed(t)).split("."),
                    u = o;
                return o && Number(l[0]) && (u = o.split("").reverse().reduce((function(e, t, r) {
                    return e.length > r ? (Number(e[0]) + Number(t)).toString() + e.substring(1, e.length) : t + e
                }), l[0])), "" + (s ? "-" : "") + u + (n ? "." : "") + p(l[1] || "", t, r)
            }

            function b(e, t) {
                if (e.value = e.value, null !== e) {
                    if (e.createTextRange) {
                        var r = e.createTextRange();
                        return r.move("character", t), r.select(), !0
                    }
                    return e.selectionStart || 0 === e.selectionStart ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1)
                }
            }! function(e) {
                e.event = "event", e.props = "prop"
            }(n || (n = {}));
            var x = function(e) {
                var t, r = void 0;
                return function() {
                    for (var n = [], a = arguments.length; a--;) n[a] = arguments[a];
                    return t && n.length === t.length && n.every((function(e, r) {
                        return e === t[r]
                    })) ? r : (t = n, r = e.apply(void 0, n))
                }
            }((function(e, t) {
                for (var r = 0, n = 0, a = e.length, o = t.length; e[r] === t[r] && r < a;) r++;
                for (; e[a - 1 - n] === t[o - 1 - n] && o - n > r && a - n > r;) n++;
                return {
                    from: {
                        start: r,
                        end: a - n
                    },
                    to: {
                        start: r,
                        end: o - n
                    }
                }
            }));

            function y(e) {
                return Math.max(e.selectionStart, e.selectionEnd)
            }

            function C(e) {
                return {
                    from: {
                        start: 0,
                        end: 0
                    },
                    to: {
                        start: 0,
                        end: e.length
                    },
                    lastValue: ""
                }
            }

            function w(e) {
                var t = e.currentValue,
                    r = e.formattedValue,
                    n = e.currentValueIndex,
                    a = e.formattedValueIndex;
                return t[n] === r[a]
            }

            function _(e, t, r, n) {
                var a, o, i, s = e.length;
                if (a = t, o = 0, i = s, t = Math.min(Math.max(a, o), i), "left" === n) {
                    for (; t >= 0 && !r[t];) t--; - 1 === t && (t = r.indexOf(!0))
                } else {
                    for (; t <= s && !r[t];) t++;
                    t > s && (t = r.lastIndexOf(!0))
                }
                return -1 === t && (t = s), t
            }

            function E(e) {
                for (var t = Array.from({
                        length: e.length + 1
                    }).map((function() {
                        return !0
                    })), r = 0, n = t.length; r < n; r++) t[r] = Boolean(l(e[r]) || l(e[r - 1]));
                return t
            }

            function A(e, t, r, n, a, i) {
                void 0 === i && (i = c);
                var s = function(e) {
                        var t = (0, o.useRef)(e);
                        t.current = e;
                        var r = (0, o.useRef)((function() {
                            for (var e = [], r = arguments.length; r--;) e[r] = arguments[r];
                            return t.current.apply(t, e)
                        }));
                        return r.current
                    }((function(e, t) {
                        var r, o;
                        return d(e) ? (o = "", r = "") : "number" === typeof e || t ? (o = "number" === typeof e ? m(e) : e, r = n(o)) : (o = a(e, void 0), r = n(o)), {
                            formattedValue: r,
                            numAsString: o
                        }
                    })),
                    l = (0, o.useState)((function() {
                        return s(u(e) ? t : e, r)
                    })),
                    h = l[0],
                    f = l[1],
                    p = e,
                    v = r;
                u(e) && (p = h.numAsString, v = !0);
                var g = s(p, v);
                return (0, o.useMemo)((function() {
                    f(g)
                }), [g.formattedValue]), [h, function(e, t) {
                    e.formattedValue !== h.formattedValue && f({
                        formattedValue: e.formattedValue,
                        numAsString: e.value
                    }), i(e, t)
                }]
            }

            function R(e) {
                return e.replace(/[^0-9]/g, "")
            }

            function S(e) {
                return e
            }

            function T(e) {
                var t = e.type;
                void 0 === t && (t = "text");
                var r = e.displayType;
                void 0 === r && (r = "input");
                var a = e.customInput,
                    u = e.renderText,
                    d = e.getInputRef,
                    h = e.format;
                void 0 === h && (h = S);
                var f = e.removeFormatting;
                void 0 === f && (f = R);
                var p = e.defaultValue,
                    v = e.valueIsNumericString,
                    m = e.onValueChange,
                    g = e.isAllowed,
                    C = e.onChange;
                void 0 === C && (C = c);
                var T = e.onKeyDown;
                void 0 === T && (T = c);
                var N = e.onMouseUp;
                void 0 === N && (N = c);
                var V = e.onFocus;
                void 0 === V && (V = c);
                var j = e.onBlur;
                void 0 === j && (j = c);
                var F = e.value,
                    k = e.getCaretBoundary;
                void 0 === k && (k = E);
                var D = e.isValidInputCharacter;
                void 0 === D && (D = l);
                var P = e.isCharacterSame,
                    L = s(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]),
                    I = A(F, p, Boolean(v), h, f, m),
                    M = I[0],
                    U = M.formattedValue,
                    O = M.numAsString,
                    B = I[1],
                    G = (0, o.useRef)(),
                    H = (0, o.useRef)({
                        formattedValue: U,
                        numAsString: O
                    }),
                    Z = function(e, t) {
                        H.current = {
                            formattedValue: e.formattedValue,
                            numAsString: e.value
                        }, B(e, t)
                    },
                    K = (0, o.useState)(!1),
                    z = K[0],
                    q = K[1],
                    Y = (0, o.useRef)(null),
                    W = (0, o.useRef)({
                        setCaretTimeout: null,
                        focusTimeout: null
                    });
                (0, o.useEffect)((function() {
                    return q(!0),
                        function() {
                            clearTimeout(W.current.setCaretTimeout), clearTimeout(W.current.focusTimeout)
                        }
                }), []);
                var Q = h,
                    X = function(e, t) {
                        var r = parseFloat(t);
                        return {
                            formattedValue: e,
                            value: t,
                            floatValue: isNaN(r) ? void 0 : r
                        }
                    },
                    J = function(e, t, r) {
                        0 === e.selectionStart && e.selectionEnd === e.value.length || (b(e, t), W.current.setCaretTimeout = setTimeout((function() {
                            e.value === r && e.selectionStart !== t && b(e, t)
                        }), 0))
                    },
                    $ = function(e, t, r) {
                        return _(e, t, k(e), r)
                    },
                    ee = function(e, t, r) {
                        var n = k(t),
                            a = function(e, t, r, n, a, o, i) {
                                void 0 === i && (i = w);
                                var s = a.findIndex((function(e) {
                                        return e
                                    })),
                                    c = e.slice(0, s);
                                t || r.startsWith(c) || (t = c, r = c + r, n += c.length);
                                for (var l = r.length, u = e.length, d = {}, h = new Array(l), f = 0; f < l; f++) {
                                    h[f] = -1;
                                    for (var p = 0, v = u; p < v; p++)
                                        if (i({
                                                currentValue: r,
                                                lastValue: t,
                                                formattedValue: e,
                                                currentValueIndex: f,
                                                formattedValueIndex: p
                                            }) && !0 !== d[p]) {
                                            h[f] = p, d[p] = !0;
                                            break
                                        }
                                }
                                for (var m = n; m < l && (-1 === h[m] || !o(r[m]));) m++;
                                var g = m === l || -1 === h[m] ? u : h[m];
                                for (m = n - 1; m > 0 && -1 === h[m];) m--;
                                var b = -1 === m || -1 === h[m] ? 0 : h[m] + 1;
                                return b > g ? g : n - b < g - n ? b : g
                            }(t, U, e, r, n, D, P);
                        return a = _(t, a, n)
                    };
                (0, o.useEffect)((function() {
                    var e = H.current,
                        t = e.formattedValue,
                        r = e.numAsString;
                    U === t && O === r || Z(X(U, O), {
                        event: void 0,
                        source: n.props
                    })
                }), [U, O]);
                var te = Y.current ? y(Y.current) : void 0;
                (0, o.useLayoutEffect)((function() {
                    var e = Y.current;
                    if (U !== H.current.formattedValue && e) {
                        var t = ee(H.current.formattedValue, U, te);
                        e.value = U, J(e, t, U)
                    }
                }), [U]);
                var re = function(e, t, r) {
                        var n = t.target,
                            a = G.current ? function(e, t) {
                                var r = Math.min(e.selectionStart, t);
                                return {
                                    from: {
                                        start: r,
                                        end: e.selectionEnd
                                    },
                                    to: {
                                        start: r,
                                        end: t
                                    }
                                }
                            }(G.current, n.selectionEnd) : x(U, e),
                            o = Object.assign(Object.assign({}, a), {
                                lastValue: U
                            }),
                            i = f(e, o),
                            s = Q(i);
                        if (i = f(s, void 0), g && !g(X(s, i))) {
                            var c = t.target,
                                l = y(c),
                                u = ee(e, U, l);
                            return c.value = U, J(c, u, U), !1
                        }
                        return function(e) {
                            var t = e.formattedValue;
                            void 0 === t && (t = "");
                            var r, n = e.input,
                                a = e.source,
                                o = e.event,
                                i = e.numAsString;
                            if (n) {
                                var s = e.inputValue || n.value,
                                    c = y(n);
                                n.value = t, void 0 !== (r = ee(s, t, c)) && J(n, r, t)
                            }
                            t !== U && Z(X(t, i), {
                                event: o,
                                source: a
                            })
                        }({
                            formattedValue: s,
                            numAsString: i,
                            inputValue: e,
                            event: t,
                            source: r,
                            input: t.target
                        }), !0
                    },
                    ne = function(e, t) {
                        void 0 === t && (t = 0);
                        var r = e.selectionStart,
                            n = e.selectionEnd;
                        G.current = {
                            selectionStart: r,
                            selectionEnd: n + t
                        }
                    },
                    ae = !z || "undefined" === typeof navigator || navigator.platform && /iPhone|iPod/.test(navigator.platform) ? void 0 : "numeric",
                    oe = Object.assign({
                        inputMode: ae
                    }, L, {
                        type: t,
                        value: U,
                        onChange: function(e) {
                            var t = e.target.value;
                            re(t, e, n.event) && C(e), G.current = void 0
                        },
                        onKeyDown: function(e) {
                            var t, r = e.target,
                                n = e.key,
                                a = r.selectionStart,
                                o = r.selectionEnd,
                                i = r.value;
                            void 0 === i && (i = ""), "ArrowLeft" === n || "Backspace" === n ? t = Math.max(a - 1, 0) : "ArrowRight" === n ? t = Math.min(a + 1, i.length) : "Delete" === n && (t = a);
                            var s = 0;
                            "Delete" === n && a === o && (s = 1);
                            var c = "ArrowLeft" === n || "ArrowRight" === n;
                            if (void 0 === t || a !== o && !c) return T(e), void ne(r, s);
                            var l = t;
                            c ? (l = $(i, t, "ArrowLeft" === n ? "left" : "right")) !== t && e.preventDefault() : "Delete" !== n || D(i[t]) ? "Backspace" !== n || D(i[t]) || (l = $(i, t, "left")) : l = $(i, t, "right");
                            l !== t && J(r, l, i), T(e), ne(r, s)
                        },
                        onMouseUp: function(e) {
                            var t = e.target,
                                r = function() {
                                    var e = t.selectionStart,
                                        r = t.selectionEnd,
                                        n = t.value;
                                    if (void 0 === n && (n = ""), e === r) {
                                        var a = $(n, e);
                                        a !== e && J(t, a, n)
                                    }
                                };
                            r(), requestAnimationFrame((function() {
                                r()
                            })), N(e), ne(t)
                        },
                        onFocus: function(e) {
                            e.persist && e.persist();
                            var t = e.target,
                                r = e.currentTarget;
                            Y.current = t, W.current.focusTimeout = setTimeout((function() {
                                var n = t.selectionStart,
                                    a = t.selectionEnd,
                                    o = t.value;
                                void 0 === o && (o = "");
                                var i = $(o, n);
                                i === n || 0 === n && a === o.length || J(t, i, o), V(Object.assign(Object.assign({}, e), {
                                    currentTarget: r
                                }))
                            }), 0)
                        },
                        onBlur: function(e) {
                            Y.current = null, clearTimeout(W.current.focusTimeout), clearTimeout(W.current.setCaretTimeout), j(e)
                        }
                    });
                if ("text" === r) return u ? i().createElement(i().Fragment, null, u(U, L) || null) : i().createElement("span", Object.assign({}, L, {
                    ref: d
                }), U);
                if (a) {
                    var ie = a;
                    return i().createElement(ie, Object.assign({}, oe, {
                        ref: d
                    }))
                }
                return i().createElement("input", Object.assign({}, oe, {
                    ref: d
                }))
            }

            function N(e, t) {
                var r = t.decimalScale,
                    n = t.fixedDecimalScale,
                    a = t.prefix;
                void 0 === a && (a = "");
                var o = t.suffix;
                void 0 === o && (o = "");
                var i = t.allowNegative,
                    s = t.thousandsGroupStyle;
                if (void 0 === s && (s = "thousand"), "" === e || "-" === e) return e;
                var c = V(t),
                    l = c.thousandSeparator,
                    u = c.decimalSeparator,
                    d = 0 !== r && -1 !== e.indexOf(".") || r && n,
                    h = f(e, i),
                    v = h.beforeDecimal,
                    m = h.afterDecimal,
                    g = h.addNegation;
                return void 0 !== r && (m = p(m, r, !!n)), l && (v = function(e, t, r) {
                    var n = function(e) {
                            switch (e) {
                                case "lakh":
                                    return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                                case "wan":
                                    return /(\d)(?=(\d{4})+(?!\d))/g;
                                default:
                                    return /(\d)(?=(\d{3})+(?!\d))/g
                            }
                        }(r),
                        a = e.search(/[1-9]/);
                    return a = -1 === a ? e.length : a, e.substring(0, a) + e.substring(a, e.length).replace(n, "$1" + t)
                }(v, l, s)), a && (v = a + v), o && (m += o), g && (v = "-" + v), e = v + (d && u || "") + m
            }

            function V(e) {
                var t = e.decimalSeparator;
                void 0 === t && (t = ".");
                var r = e.thousandSeparator,
                    n = e.allowedDecimalSeparators;
                return !0 === r && (r = ","), n || (n = [t, "."]), {
                    decimalSeparator: t,
                    thousandSeparator: r,
                    allowedDecimalSeparators: n
                }
            }

            function j(e, t, r) {
                var n;
                void 0 === t && (t = C(e));
                var a = r.allowNegative,
                    o = r.prefix;
                void 0 === o && (o = "");
                var i = r.suffix;
                void 0 === i && (i = "");
                var s = r.decimalScale,
                    c = t.from,
                    u = t.to,
                    d = u.start,
                    p = u.end,
                    v = V(r),
                    m = v.allowedDecimalSeparators,
                    g = v.decimalSeparator,
                    b = e[p] === g;
                if (l(e) && (e === o || e === i) && "" === t.lastValue) return e;
                if (p - d === 1 && -1 !== m.indexOf(e[d])) {
                    var x = 0 === s ? "" : g;
                    e = e.substring(0, d) + x + e.substring(d + 1, e.length)
                }
                var y = function(e, t, r) {
                        var n = !1,
                            a = !1;
                        o.startsWith("-") ? n = !1 : e.startsWith("--") ? (n = !1, a = !0) : i.startsWith("-") && e.length === i.length ? n = !1 : "-" === e[0] && (n = !0);
                        var s = n ? 1 : 0;
                        return a && (s = 2), s && (e = e.substring(s), t -= s, r -= s), {
                            value: e,
                            start: t,
                            end: r,
                            hasNegation: n
                        }
                    },
                    w = y(e, d, p),
                    _ = w.hasNegation;
                e = (n = w).value, d = n.start, p = n.end;
                var E = y(t.lastValue, c.start, c.end),
                    A = E.start,
                    R = E.end,
                    S = E.value,
                    T = e.substring(d, p);
                !(e.length && S.length && (A > S.length - i.length || R < o.length)) || T && i.startsWith(T) || (e = S);
                var N = 0;
                e.startsWith(o) ? N += o.length : d < o.length && (N = d), p -= N;
                var j = (e = e.substring(N)).length,
                    F = e.length - i.length;
                e.endsWith(i) ? j = F : (p > F || p > e.length - i.length) && (j = p), e = e.substring(0, j), e = function(e, t) {
                    void 0 === e && (e = "");
                    var r = new RegExp("(-)"),
                        n = new RegExp("(-)(.)*(-)"),
                        a = r.test(e),
                        o = n.test(e);
                    return e = e.replace(/-/g, ""), a && !o && t && (e = "-" + e), e
                }(_ ? "-" + e : e, a), e = (e.match(function(e, t) {
                    return new RegExp("(^-)|[0-9]|" + h(e), t ? "g" : void 0)
                }(g, !0)) || []).join("");
                var k = e.indexOf(g),
                    D = f(e = e.replace(new RegExp(h(g), "g"), (function(e, t) {
                        return t === k ? "." : ""
                    })), a),
                    P = D.beforeDecimal,
                    L = D.afterDecimal,
                    I = D.addNegation;
                return u.end - u.start < c.end - c.start && "" === P && b && !parseFloat(L) && (e = I ? "-" : ""), e
            }

            function F(e) {
                e = function(e) {
                    var t = V(e),
                        r = t.thousandSeparator,
                        n = t.decimalSeparator,
                        a = e.prefix;
                    void 0 === a && (a = "");
                    var o = e.allowNegative;
                    if (void 0 === o && (o = !0), r === n) throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + r + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + n + " (default value for decimalSeparator is .)\n     ");
                    return a.startsWith("-") && o && (console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + a + "\n      allowNegative: " + o + "\n    "), o = !1), Object.assign(Object.assign({}, e), {
                        allowNegative: o
                    })
                }(e);
                e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
                var t = e.suffix,
                    r = e.allowNegative,
                    a = e.allowLeadingZeros,
                    o = e.onKeyDown;
                void 0 === o && (o = c);
                var i = e.onBlur;
                void 0 === i && (i = c);
                var h = e.thousandSeparator,
                    f = e.decimalScale,
                    p = e.fixedDecimalScale,
                    v = e.prefix;
                void 0 === v && (v = "");
                var y = e.defaultValue,
                    C = e.value,
                    w = e.valueIsNumericString,
                    _ = e.onValueChange,
                    E = s(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]),
                    R = V(e),
                    S = R.decimalSeparator,
                    T = R.allowedDecimalSeparators,
                    F = function(t) {
                        return N(t, e)
                    },
                    k = function(t, r) {
                        return j(t, r, e)
                    },
                    D = u(C) ? y : C,
                    P = null !== w && void 0 !== w ? w : function(e, t, r) {
                        return "" === e || !(null === t || void 0 === t ? void 0 : t.match(/\d/)) && !(null === r || void 0 === r ? void 0 : r.match(/\d/)) && "string" === typeof e && !isNaN(Number(e))
                    }(D, v, t);
                u(C) ? u(y) || (P = P || "number" === typeof y) : P = P || "number" === typeof C;
                var L = function(e) {
                        return d(e) ? e : ("number" === typeof e && (e = m(e)), P && "number" === typeof f ? g(e, f, Boolean(p)) : e)
                    },
                    I = A(L(C), L(y), Boolean(P), F, k, _),
                    M = I[0],
                    U = M.numAsString,
                    O = M.formattedValue,
                    B = I[1];
                return Object.assign(Object.assign({}, E), {
                    value: O,
                    valueIsNumericString: !1,
                    isValidInputCharacter: function(e) {
                        return e === S || l(e)
                    },
                    isCharacterSame: function(e) {
                        var t = e.currentValue,
                            r = e.lastValue,
                            n = e.formattedValue,
                            a = e.currentValueIndex,
                            o = e.formattedValueIndex,
                            i = t[a],
                            s = n[o],
                            c = x(r, t).to,
                            l = function(e) {
                                return k(e).indexOf(".") + v.length
                            };
                        return !(0 === C && p && f && t[c.start] === S && l(t) < a && l(n) > o) && (!!(a >= c.start && a < c.end && T && T.includes(i) && s === S) || i === s)
                    },
                    onValueChange: B,
                    format: F,
                    removeFormatting: k,
                    getCaretBoundary: function(t) {
                        return function(e, t) {
                            var r = t.prefix;
                            void 0 === r && (r = "");
                            var n = t.suffix;
                            void 0 === n && (n = "");
                            var a = Array.from({
                                    length: e.length + 1
                                }).map((function() {
                                    return !0
                                })),
                                o = "-" === e[0];
                            a.fill(!1, 0, r.length + (o ? 1 : 0));
                            var i = e.length;
                            return a.fill(!1, i - n.length + 1, i + 1), a
                        }(t, e)
                    },
                    onKeyDown: function(e) {
                        var t = e.target,
                            n = e.key,
                            a = t.selectionStart,
                            i = t.selectionEnd,
                            s = t.value;
                        if (void 0 === s && (s = ""), ("Backspace" === n || "Delete" === n) && i < v.length) e.preventDefault();
                        else if (a === i) {
                            "Backspace" === n && "-" === s[0] && a === v.length + 1 && r && b(t, 1), f && p && ("Backspace" === n && s[a - 1] === S ? (b(t, a - 1), e.preventDefault()) : "Delete" === n && s[a] === S && e.preventDefault()), (null === T || void 0 === T ? void 0 : T.includes(n)) && s[a] === S && b(t, a + 1);
                            var c = !0 === h ? "," : h;
                            "Backspace" === n && s[a - 1] === c && b(t, a - 1), "Delete" === n && s[a] === c && b(t, a + 1), o(e)
                        } else o(e)
                    },
                    onBlur: function(t) {
                        var r = U;
                        if (r.match(/\d/g) || (r = ""), a || (r = function(e) {
                                if (!e) return e;
                                var t = "-" === e[0];
                                t && (e = e.substring(1, e.length));
                                var r = e.split("."),
                                    n = r[0].replace(/^0+/, "") || "0",
                                    a = r[1] || "";
                                return (t ? "-" : "") + n + (a ? "." + a : "")
                            }(r)), p && f && (r = g(r, f, p)), r !== U) {
                            var o = N(r, e);
                            B({
                                formattedValue: o,
                                value: r,
                                floatValue: parseFloat(r)
                            }, {
                                event: t,
                                source: n.event
                            })
                        }
                        i(t)
                    }
                })
            }

            function k(e) {
                var t = F(e);
                return i().createElement(T, Object.assign({}, t))
            }
            var D = r("8J5H"),
                P = 1e6,
                L = 1e6,
                I = "[big.js] ",
                M = I + "Invalid ",
                U = M + "decimal places",
                O = I + "Division by zero",
                B = {},
                G = void 0,
                H = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

            function Z(e, t, r, n) {
                var a = e.c;
                if (r === G && (r = e.constructor.RM), 0 !== r && 1 !== r && 2 !== r && 3 !== r) throw Error("[big.js] Invalid rounding mode");
                if (t < 1) n = 3 === r && (n || !!a[0]) || 0 === t && (1 === r && a[0] >= 5 || 2 === r && (a[0] > 5 || 5 === a[0] && (n || a[1] !== G))), a.length = 1, n ? (e.e = e.e - t + 1, a[0] = 1) : a[0] = e.e = 0;
                else if (t < a.length) {
                    if (n = 1 === r && a[t] >= 5 || 2 === r && (a[t] > 5 || 5 === a[t] && (n || a[t + 1] !== G || 1 & a[t - 1])) || 3 === r && (n || !!a[0]), a.length = t, n)
                        for (; ++a[--t] > 9;)
                            if (a[t] = 0, 0 === t) {
                                ++e.e, a.unshift(1);
                                break
                            }
                    for (t = a.length; !a[--t];) a.pop()
                }
                return e
            }

            function K(e, t, r) {
                var n = e.e,
                    a = e.c.join(""),
                    o = a.length;
                if (t) a = a.charAt(0) + (o > 1 ? "." + a.slice(1) : "") + (n < 0 ? "e" : "e+") + n;
                else if (n < 0) {
                    for (; ++n;) a = "0" + a;
                    a = "0." + a
                } else if (n > 0)
                    if (++n > o)
                        for (n -= o; n--;) a += "0";
                    else n < o && (a = a.slice(0, n) + "." + a.slice(n));
                else o > 1 && (a = a.charAt(0) + "." + a.slice(1));
                return e.s < 0 && r ? "-" + a : a
            }
            B.abs = function() {
                var e = new this.constructor(this);
                return e.s = 1, e
            }, B.cmp = function(e) {
                var t, r = this,
                    n = r.c,
                    a = (e = new r.constructor(e)).c,
                    o = r.s,
                    i = e.s,
                    s = r.e,
                    c = e.e;
                if (!n[0] || !a[0]) return n[0] ? o : a[0] ? -i : 0;
                if (o != i) return o;
                if (t = o < 0, s != c) return s > c ^ t ? 1 : -1;
                for (i = (s = n.length) < (c = a.length) ? s : c, o = -1; ++o < i;)
                    if (n[o] != a[o]) return n[o] > a[o] ^ t ? 1 : -1;
                return s == c ? 0 : s > c ^ t ? 1 : -1
            }, B.div = function(e) {
                var t = this,
                    r = t.constructor,
                    n = t.c,
                    a = (e = new r(e)).c,
                    o = t.s == e.s ? 1 : -1,
                    i = r.DP;
                if (i !== ~~i || i < 0 || i > P) throw Error(U);
                if (!a[0]) throw Error(O);
                if (!n[0]) return e.s = o, e.c = [e.e = 0], e;
                var s, c, l, u, d, h = a.slice(),
                    f = s = a.length,
                    p = n.length,
                    v = n.slice(0, s),
                    m = v.length,
                    g = e,
                    b = g.c = [],
                    x = 0,
                    y = i + (g.e = t.e - e.e) + 1;
                for (g.s = o, o = y < 0 ? 0 : y, h.unshift(0); m++ < s;) v.push(0);
                do {
                    for (l = 0; l < 10; l++) {
                        if (s != (m = v.length)) u = s > m ? 1 : -1;
                        else
                            for (d = -1, u = 0; ++d < s;)
                                if (a[d] != v[d]) {
                                    u = a[d] > v[d] ? 1 : -1;
                                    break
                                } if (!(u < 0)) break;
                        for (c = m == s ? a : h; m;) {
                            if (v[--m] < c[m]) {
                                for (d = m; d && !v[--d];) v[d] = 9;
                                --v[d], v[m] += 10
                            }
                            v[m] -= c[m]
                        }
                        for (; !v[0];) v.shift()
                    }
                    b[x++] = u ? l : ++l, v[0] && u ? v[m] = n[f] || 0 : v = [n[f]]
                } while ((f++ < p || v[0] !== G) && o--);
                return b[0] || 1 == x || (b.shift(), g.e--, y--), x > y && Z(g, y, r.RM, v[0] !== G), g
            }, B.eq = function(e) {
                return 0 === this.cmp(e)
            }, B.gt = function(e) {
                return this.cmp(e) > 0
            }, B.gte = function(e) {
                return this.cmp(e) > -1
            }, B.lt = function(e) {
                return this.cmp(e) < 0
            }, B.lte = function(e) {
                return this.cmp(e) < 1
            }, B.minus = B.sub = function(e) {
                var t, r, n, a, o = this,
                    i = o.constructor,
                    s = o.s,
                    c = (e = new i(e)).s;
                if (s != c) return e.s = -c, o.plus(e);
                var l = o.c.slice(),
                    u = o.e,
                    d = e.c,
                    h = e.e;
                if (!l[0] || !d[0]) return d[0] ? e.s = -c : l[0] ? e = new i(o) : e.s = 1, e;
                if (s = u - h) {
                    for ((a = s < 0) ? (s = -s, n = l) : (h = u, n = d), n.reverse(), c = s; c--;) n.push(0);
                    n.reverse()
                } else
                    for (r = ((a = l.length < d.length) ? l : d).length, s = c = 0; c < r; c++)
                        if (l[c] != d[c]) {
                            a = l[c] < d[c];
                            break
                        } if (a && (n = l, l = d, d = n, e.s = -e.s), (c = (r = d.length) - (t = l.length)) > 0)
                    for (; c--;) l[t++] = 0;
                for (c = t; r > s;) {
                    if (l[--r] < d[r]) {
                        for (t = r; t && !l[--t];) l[t] = 9;
                        --l[t], l[r] += 10
                    }
                    l[r] -= d[r]
                }
                for (; 0 === l[--c];) l.pop();
                for (; 0 === l[0];) l.shift(), --h;
                return l[0] || (e.s = 1, l = [h = 0]), e.c = l, e.e = h, e
            }, B.mod = function(e) {
                var t, r = this,
                    n = r.constructor,
                    a = r.s,
                    o = (e = new n(e)).s;
                if (!e.c[0]) throw Error(O);
                return r.s = e.s = 1, t = 1 == e.cmp(r), r.s = a, e.s = o, t ? new n(r) : (a = n.DP, o = n.RM, n.DP = n.RM = 0, r = r.div(e), n.DP = a, n.RM = o, this.minus(r.times(e)))
            }, B.neg = function() {
                var e = new this.constructor(this);
                return e.s = -e.s, e
            }, B.plus = B.add = function(e) {
                var t, r, n, a = this,
                    o = a.constructor;
                if (e = new o(e), a.s != e.s) return e.s = -e.s, a.minus(e);
                var i = a.e,
                    s = a.c,
                    c = e.e,
                    l = e.c;
                if (!s[0] || !l[0]) return l[0] || (s[0] ? e = new o(a) : e.s = a.s), e;
                if (s = s.slice(), t = i - c) {
                    for (t > 0 ? (c = i, n = l) : (t = -t, n = s), n.reverse(); t--;) n.push(0);
                    n.reverse()
                }
                for (s.length - l.length < 0 && (n = l, l = s, s = n), t = l.length, r = 0; t; s[t] %= 10) r = (s[--t] = s[t] + l[t] + r) / 10 | 0;
                for (r && (s.unshift(r), ++c), t = s.length; 0 === s[--t];) s.pop();
                return e.c = s, e.e = c, e
            }, B.pow = function(e) {
                var t = this,
                    r = new t.constructor("1"),
                    n = r,
                    a = e < 0;
                if (e !== ~~e || e < -1e6 || e > L) throw Error(M + "exponent");
                for (a && (e = -e); 1 & e && (n = n.times(t)), e >>= 1;) t = t.times(t);
                return a ? r.div(n) : n
            }, B.prec = function(e, t) {
                if (e !== ~~e || e < 1 || e > P) throw Error(M + "precision");
                return Z(new this.constructor(this), e, t)
            }, B.round = function(e, t) {
                if (e === G) e = 0;
                else if (e !== ~~e || e < -P || e > P) throw Error(U);
                return Z(new this.constructor(this), e + this.e + 1, t)
            }, B.sqrt = function() {
                var e, t, r, n = this,
                    a = n.constructor,
                    o = n.s,
                    i = n.e,
                    s = new a("0.5");
                if (!n.c[0]) return new a(n);
                if (o < 0) throw Error(I + "No square root");
                0 === (o = Math.sqrt(n + "")) || o === 1 / 0 ? ((t = n.c.join("")).length + i & 1 || (t += "0"), i = ((i + 1) / 2 | 0) - (i < 0 || 1 & i), e = new a(((o = Math.sqrt(t)) == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + i)) : e = new a(o + ""), i = e.e + (a.DP += 4);
                do {
                    r = e, e = s.times(r.plus(n.div(r)))
                } while (r.c.slice(0, i).join("") !== e.c.slice(0, i).join(""));
                return Z(e, (a.DP -= 4) + e.e + 1, a.RM)
            }, B.times = B.mul = function(e) {
                var t, r = this,
                    n = r.constructor,
                    a = r.c,
                    o = (e = new n(e)).c,
                    i = a.length,
                    s = o.length,
                    c = r.e,
                    l = e.e;
                if (e.s = r.s == e.s ? 1 : -1, !a[0] || !o[0]) return e.c = [e.e = 0], e;
                for (e.e = c + l, i < s && (t = a, a = o, o = t, l = i, i = s, s = l), t = new Array(l = i + s); l--;) t[l] = 0;
                for (c = s; c--;) {
                    for (s = 0, l = i + c; l > c;) s = t[l] + o[c] * a[l - c - 1] + s, t[l--] = s % 10, s = s / 10 | 0;
                    t[l] = s
                }
                for (s ? ++e.e : t.shift(), c = t.length; !t[--c];) t.pop();
                return e.c = t, e
            }, B.toExponential = function(e, t) {
                var r = this,
                    n = r.c[0];
                if (e !== G) {
                    if (e !== ~~e || e < 0 || e > P) throw Error(U);
                    for (r = Z(new r.constructor(r), ++e, t); r.c.length < e;) r.c.push(0)
                }
                return K(r, !0, !!n)
            }, B.toFixed = function(e, t) {
                var r = this,
                    n = r.c[0];
                if (e !== G) {
                    if (e !== ~~e || e < 0 || e > P) throw Error(U);
                    for (e = e + (r = Z(new r.constructor(r), e + r.e + 1, t)).e + 1; r.c.length < e;) r.c.push(0)
                }
                return K(r, !1, !!n)
            }, B[Symbol.for("nodejs.util.inspect.custom")] = B.toJSON = B.toString = function() {
                var e = this,
                    t = e.constructor;
                return K(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0])
            }, B.toNumber = function() {
                var e = Number(K(this, !0, !0));
                if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(I + "Imprecise conversion");
                return e
            }, B.toPrecision = function(e, t) {
                var r = this,
                    n = r.constructor,
                    a = r.c[0];
                if (e !== G) {
                    if (e !== ~~e || e < 1 || e > P) throw Error(M + "precision");
                    for (r = Z(new n(r), e, t); r.c.length < e;) r.c.push(0)
                }
                return K(r, e <= r.e || r.e <= n.NE || r.e >= n.PE, !!a)
            }, B.valueOf = function() {
                var e = this,
                    t = e.constructor;
                if (!0 === t.strict) throw Error(I + "valueOf disallowed");
                return K(e, e.e <= t.NE || e.e >= t.PE, !0)
            };
            var z = function e() {
                function t(r) {
                    var n = this;
                    if (!(n instanceof t)) return r === G ? e() : new t(r);
                    if (r instanceof t) n.s = r.s, n.e = r.e, n.c = r.c.slice();
                    else {
                        if ("string" !== typeof r) {
                            if (!0 === t.strict && "bigint" !== typeof r) throw TypeError(M + "value");
                            r = 0 === r && 1 / r < 0 ? "-0" : String(r)
                        }! function(e, t) {
                            var r, n, a;
                            if (!H.test(t)) throw Error(M + "number");
                            e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (r = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                            (n = t.search(/e/i)) > 0 ? (r < 0 && (r = n), r += +t.slice(n + 1), t = t.substring(0, n)) : r < 0 && (r = t.length);
                            for (a = t.length, n = 0; n < a && "0" == t.charAt(n);) ++n;
                            if (n == a) e.c = [e.e = 0];
                            else {
                                for (; a > 0 && "0" == t.charAt(--a););
                                for (e.e = r - n - 1, e.c = [], r = 0; n <= a;) e.c[r++] = +t.charAt(n++)
                            }
                        }(n, r)
                    }
                    n.constructor = t
                }
                return t.prototype = B, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.strict = false, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t
            }();
            const q = z;
            const Y = (0, o.forwardRef)((function(e, t) {
                var r = e.spellCheck,
                    n = void 0 !== r && r,
                    i = e.autoComplete,
                    s = void 0 === i ? "" : i,
                    c = (0, a.__rest)(e, ["spellCheck", "autoComplete"]),
                    l = {
                        ref: t,
                        spellCheck: n,
                        autoComplete: s
                    };
                return (0, o.createElement)("input", (0, a.__assign)((0, a.__assign)({}, c), l))
            }));
            var W = r("X0Bn"),
                Q = r("qrIQ"),
                X = r("O94r"),
                J = r.n(X),
                $ = r("DzvH"),
                ee = r("Y4uf");
            const te = function(e) {
                return i().createElement(ee.A, (0, a.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M13.5 3h-3v7.5H3v3h7.5V21h3v-7.5H21v-3h-7.5V3z",
                    fill: "currentColor"
                }))
            };
            const re = function(e) {
                return i().createElement(ee.A, (0, a.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M16.5 15.51v-2.25L12 8.49l-4.5 4.77v2.25h9z",
                    fill: "currentColor"
                }))
            };
            var ne = r("q5Ye"),
                ae = r("tKUM"),
                oe = {
                    thousandSeparator: ",",
                    decimalSeparator: "."
                },
                ie = {
                    thousandSeparator: " ",
                    decimalSeparator: ","
                },
                se = {
                    thousandSeparator: ".",
                    decimalSeparator: ","
                },
                ce = {
                    fr: ie,
                    "fr-AF": ie,
                    ru: ie,
                    "ru-KZ": ie,
                    "ru-UA": ie,
                    pl: ie,
                    pt: ie,
                    es: ie,
                    "uk-UA": ie,
                    cs: ie,
                    bg: ie,
                    lv: ie,
                    sk: ie,
                    sl: ie,
                    sv: ie,
                    hu: ie,
                    de: se,
                    id: se,
                    it: se,
                    "pt-BR": se,
                    ro: se,
                    vi: se,
                    "da-DK": se,
                    el: se
                },
                le = {
                    decimalScale: 20,
                    allowNegative: !0
                };

            function ue(e) {
                void 0 === e && (e = {});
                var t = e.numericFormat,
                    r = e.locale,
                    n = e.isMiniApp,
                    i = (0, o.useState)(r || ""),
                    s = i[0],
                    c = i[1],
                    l = (0, o.useMemo)((function() {
                        return function(e) {
                            if (!e) return oe;
                            var t = ce[e];
                            if (t) return t;
                            var r = e.split("-")[0];
                            return ce[r] || oe
                        }(s)
                    }), [s]),
                    u = (0, o.useCallback)((function(r) {
                        return t && n ? N(r, (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, le), l), e)) : r
                    }), [l, e, t, n]),
                    d = (0, o.useCallback)((function(r) {
                        return t && n ? j(r, {
                            from: {
                                start: 0,
                                end: r.length
                            },
                            to: {
                                start: 0,
                                end: r.length
                            },
                            lastValue: ""
                        }, (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, le), l), e)) : r
                    }), [l, e, t, n]);
                return (0, o.useEffect)((function() {
                    if (t) {
                        var e = r || (0, ae.getLanguage)();
                        c(e)
                    }
                }), [r, t]), {
                    formatter: u,
                    parser: d,
                    config: l
                }
            }
            var de = r("eeEA"),
                he = r("fvKX"),
                fe = (0, o.forwardRef)((function(e, t) {
                    var r = e.value,
                        n = e.prefix,
                        s = e.suffix,
                        c = e.status,
                        l = e.disabled,
                        u = e.onChange,
                        d = e.defaultValue,
                        h = e.size,
                        f = void 0 === h ? "middle" : h,
                        p = e.variant,
                        v = void 0 === p ? "default" : p,
                        m = e.enableClear,
                        g = void 0 !== m && m,
                        b = (e.validator, e.autoFocus),
                        x = e.onBlur,
                        y = e.onFocus,
                        C = e.disableStyleOnFocus,
                        w = e.mpInputType,
                        _ = e.controls,
                        E = e.isPrefixFixedType,
                        A = e.onStep,
                        R = e.maxlength,
                        S = e.maxLength,
                        T = e.gapSize,
                        N = void 0 === T ? "normal" : T,
                        V = e.type,
                        j = e.numericFormat,
                        F = e.locale,
                        P = (e.onKeyDown, (0, a.__rest)(e, ["value", "prefix", "suffix", "status", "disabled", "onChange", "defaultValue", "size", "variant", "enableClear", "validator", "autoFocus", "onBlur", "onFocus", "disableStyleOnFocus", "mpInputType", "controls", "isPrefixFixedType", "onStep", "maxlength", "maxLength", "gapSize", "type", "numericFormat", "locale", "onKeyDown"])),
                        L = j ? "text" : V,
                        I = P.max,
                        M = P.min,
                        U = P.step,
                        O = ue({
                            numericFormat: j,
                            locale: F,
                            isMiniApp: Q.lq
                        }),
                        B = O.formatter,
                        G = O.parser,
                        H = O.config,
                        Z = (0, o.useRef)(null);
                    (0, o.useImperativeHandle)(t, (function() {
                        return Z.current
                    }), []);
                    var K = (0, D.G)({
                            value: r,
                            onBlur: x,
                            onFocus: y,
                            onChange: u,
                            defaultValue: d,
                            formatter: B,
                            parser: G
                        }),
                        z = K.input,
                        X = K.focus,
                        ee = K.onBlur,
                        ae = K.onFocus,
                        oe = K.onInput,
                        ie = (0, he.r)(),
                        se = ie.prefixCls,
                        ce = ie.isRTL,
                        fe = "".concat(se, "-textField"),
                        pe = "".concat(fe, "-numeric-controls"),
                        ve = "".concat(pe, "-trade"),
                        me = (0, o.useMemo)((function() {
                            var t;
                            return J()(fe, ((t = {})["".concat(fe, "-rtl")] = !!ce, t["".concat(fe, "__").concat(v)] = !!v, t["data-".concat(c)] = !!c, t["data-size-".concat(f)] = !!f, t["data-gap-size-".concat(N)] = !!N, t["data-prefix-fixed"] = !!E, t[pe] = !!_, t[ve] = "trade" === _, t["".concat(ve, "-suffix")] = "trade" === _ && !!s, t.static = !!C, t.disabled = !!l, t.focus = !!X, t), e.className)
                        }), [fe, ce, v, c, f, N, E, _, C, l, X, e.className]),
                        ge = g && !l && "" !== z,
                        be = (0, o.useCallback)((function() {
                            oe({
                                target: {
                                    value: ""
                                }
                            })
                        }), [oe]),
                        xe = null !== S && void 0 !== S ? S : R,
                        ye = (0, o.useMemo)((function() {
                            return (0, a.__assign)((0, a.__assign)((0, a.__assign)({}, le), {
                                allowedDecimalSeparators: [",", "."]
                            }), H)
                        }), [H, Q.lq]),
                        Ce = (0, o.useMemo)((function() {
                            return Q.lq ? {
                                onInput: oe,
                                maxlength: xe
                            } : {
                                onChange: oe,
                                autoFocus: b,
                                maxLength: xe
                            }
                        }), [Q.lq, oe, xe, b]),
                        we = (0, o.useMemo)((function() {
                            return i().createElement(W.A, {
                                name: "CircledClose1C",
                                color: "IconNormal"
                            })
                        }), []),
                        _e = (0, o.useMemo)((function() {
                            return "web" === w && Y || Y
                        }), [w]),
                        Ee = (0, o.useMemo)((function() {
                            return j && !Q.lq ? function(e) {
                                return i().createElement(k, (0, a.__assign)({}, ye, e, {
                                    getInputRef: Z,
                                    onChange: function() {},
                                    onValueChange: function(e, t) {
                                        var r = e.value,
                                            n = t.event;
                                        return oe((0, a.__assign)((0, a.__assign)({}, n), {
                                            target: {
                                                value: r
                                            }
                                        }))
                                    }
                                }))
                            } : _e
                        }), [j, _e, ye]),
                        Ae = (0, o.useCallback)((function(e) {
                            return void 0 !== e && function(e) {
                                return !isNaN(parseFloat(e)) && isFinite(e)
                            }(e) ? new q(e) : null
                        }), []),
                        Re = G ? G(z) : z,
                        Se = (0, o.useCallback)((function(e) {
                            e.stopPropagation();
                            var t = Ae(U) || new q(1),
                                r = Ae(Re) || new q(0),
                                n = Ae(I);
                            if (!n || r.plus(t).lte(n)) {
                                var a = r.plus(t).toString(),
                                    o = B ? B(a) : a;
                                oe({
                                    target: {
                                        value: o
                                    }
                                }), null === A || void 0 === A || A(a, {
                                    type: "up",
                                    step: t.toNumber()
                                })
                            }
                        }), [B, Re, oe, I, U, A, Ae]),
                        Te = (0, o.useCallback)((function(e) {
                            e.stopPropagation();
                            var t = Ae(U) || new q(1),
                                r = Ae(Re) || new q(0),
                                n = Ae(M);
                            if (!n || r.minus(t).gte(n)) {
                                var a = r.minus(t).toString(),
                                    o = B ? B(a) : a;
                                oe({
                                    target: {
                                        value: o
                                    }
                                }), null === A || void 0 === A || A(a, {
                                    type: "down",
                                    step: t.toNumber()
                                })
                            }
                        }), [Re, B, oe, M, U, A, Ae]),
                        Ne = (0, o.useMemo)((function() {
                            return n ? E ? i().createElement(de.Ay, {
                                className: J()("".concat(fe, "-prefix"), "".concat(fe, "-prefix-fixed")),
                                children: n
                            }) : i().createElement(de.Ay, {
                                className: "".concat(fe, "-prefix"),
                                children: n
                            }) : null
                        }), [E, n, fe]),
                        Ve = (0, o.useCallback)((function(e, t) {
                            "Enter" === e.key && t()
                        }), []),
                        je = (0, o.useCallback)((function(e) {
                            return _ ? "trade" === _ ? "prefix" === e ? i().createElement(de.Ay, {
                                className: "".concat(ve, "-minus"),
                                onClick: Te,
                                role: "button",
                                "aria-label": "decrease value"
                            }, i().createElement($.A, {
                                name: "Minus1C",
                                color: "IconNormal"
                            })) : i().createElement(de.Ay, {
                                className: "".concat(ve, "-plus"),
                                onClick: Se,
                                role: "button",
                                "aria-label": "increase value"
                            }, i().createElement(te, {
                                name: "Plus1C",
                                color: "IconNormal"
                            })) : "suffix" === e ? i().createElement(de.Ay, {
                                className: "".concat(pe, "-panel")
                            }, i().createElement(de.Ay, {
                                className: "".concat(pe, "-panel-up"),
                                onClick: Se,
                                role: "button",
                                "aria-label": "increase value"
                            }, i().createElement(re, {
                                name: "CaretUp1C",
                                color: "IconNormal"
                            })), i().createElement(de.Ay, {
                                className: "".concat(pe, "-panel-down"),
                                onClick: Te,
                                role: "button",
                                "aria-label": "decrease value"
                            }, i().createElement(ne.A, {
                                name: "CaretDown1C",
                                color: "IconNormal"
                            }))) : null : null
                        }), [_, Te, Se, pe, ve]),
                        Fe = (0, o.useCallback)((function() {
                            "trade" === _ && Z.current && Z.current.focus()
                        }), [_, ve]),
                        ke = {
                            "aria-invalid": "error" === c ? "true" : void 0,
                            "aria-required": P.required ? "true" : void 0,
                            "aria-disabled": l ? "true" : void 0,
                            "aria-label": P.id ? void 0 : P.placeholder || "input field"
                        };
                    return i().createElement(de.Ay, {
                        className: me,
                        onClick: Fe
                    }, je("prefix"), Ne, i().createElement(Ee, (0, a.__assign)({}, ke, {
                        focus: Q.lq ? X : void 0
                    }, P, Ce, {
                        type: L,
                        ref: Z,
                        value: z,
                        disabled: l,
                        onBlur: ee,
                        onFocus: ae,
                        className: "".concat(fe, "-input")
                    })), ge && i().createElement(de.Ay, {
                        onClick: be,
                        className: "".concat(fe, "-clear"),
                        children: we,
                        onKeyDown: function(e) {
                            return Ve(e, be)
                        },
                        tabIndex: 0,
                        role: "button",
                        "aria-label": "clear"
                    }), s && i().createElement(de.Ay, {
                        className: "".concat(fe, "-suffix"),
                        children: s
                    }), je("suffix"))
                }));
            fe.__name = "TextField", fe.displayName = "TextField";
            const pe = fe
        },
        GuDP: (e, t, r) => {
            r.d(t, {
                n: () => h
            });
            var n = r("DTvD"),
                a = r("lrbr"),
                o = r("WDth"),
                i = r("G14Y"),
                s = r("gKJf"),
                c = r("3lyO");
            class l extends c.Q {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    const t = this.options;
                    this.options = this.client.defaultMutationOptions(e), (0, o.f8)(t, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    })
                }
                onUnsubscribe() {
                    var e;
                    this.listeners.length || (null == (e = this.currentMutation) || e.removeObserver(this))
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    const t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: "undefined" !== typeof e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    const e = this.currentMutation ? this.currentMutation.state : (0, i.$)(),
                        t = { ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    s.j.batch((() => {
                        var t, r, n, a;
                        if (this.mutateOptions)
                            if (e.onSuccess) null == (t = (r = this.mutateOptions).onSuccess) || t.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (n = (a = this.mutateOptions).onSettled) || n.call(a, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
                            else if (e.onError) {
                            var o, i, s, c;
                            null == (o = (i = this.mutateOptions).onError) || o.call(i, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (s = (c = this.mutateOptions).onSettled) || s.call(c, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context)
                        }
                        e.listeners && this.listeners.forEach((e => {
                            e(this.currentResult)
                        }))
                    }))
                }
            }
            var u = r("UgDF"),
                d = r("zZ1F");

            function h(e, t, r) {
                const i = (0, o.GR)(e, t, r),
                    c = (0, u.jE)({
                        context: i.context
                    }),
                    [h] = n.useState((() => new l(c, i)));
                n.useEffect((() => {
                    h.setOptions(i)
                }), [h, i]);
                const p = (0, a.r)(n.useCallback((e => h.subscribe(s.j.batchCalls(e))), [h]), (() => h.getCurrentResult()), (() => h.getCurrentResult())),
                    v = n.useCallback(((e, t) => {
                        h.mutate(e, t).catch(f)
                    }), [h]);
                if (p.error && (0, d.G)(h.options.useErrorBoundary, [p.error])) throw p.error;
                return { ...p,
                    mutate: v,
                    mutateAsync: p.mutate
                }
            }

            function f() {}
        }
    }
]);
//# debugId=40548991-c0bd-5eb1-b402-8307cf9a621e