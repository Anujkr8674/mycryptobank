! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "5791e78b-6d7c-52e5-803a-157566bafd59")
    } catch (e) {}
}();
(self.webpackChunkmini_notification_center = self.webpackChunkmini_notification_center || []).push([
    [247], {
        kY28: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => c
            });
            var t = r("wIZF"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("7zlU");
            const c = function(e) {
                return a().createElement(o.A, (0, t.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-7.233 0l3.006 3.005-1.768 1.768L12 13.767l-3.005 3.005-1.768-1.768 3.005-3.005-3.005-3.005 1.768-1.767L12 10.23l3.005-3.005 1.768 1.767L13.767 12z",
                    fill: "currentColor"
                }))
            }
        },
        "vht/": (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => _,
                Z: () => M
            });
            var t = r("wIZF"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("hyZw"),
                c = r("H2//"),
                l = r("n13J"),
                s = r("X2nG");
            const u = function(e) {
                var n = e.willClose,
                    r = e.closeCallback,
                    o = e.content,
                    c = (0, t.__rest)(e, ["willClose", "closeCallback", "content"]),
                    u = a().useState(!0),
                    m = u[0],
                    f = u[1],
                    d = (0, i.useCallback)((function() {
                        f(!1), setTimeout((function() {
                            r && r()
                        }), s.p)
                    }), [r]);
                return a().useEffect((function() {
                    n && d()
                }), [n, d]), a().createElement(l.Ay, (0, t.__assign)({}, c, {
                    visible: m,
                    onClose: d,
                    children: o
                }))
            };
            var m = r("o0Ko"),
                f = r.n(m),
                d = r("AGKK"),
                g = r("FNUY"),
                p = r("Prrn");
            const h = function(e) {
                var n = e.duration,
                    r = void 0 === n ? 3e3 : n,
                    i = e.visible,
                    c = e.onClose,
                    l = void 0 === c ? o.es : c,
                    s = e.children,
                    u = (0, t.__rest)(e, ["duration", "visible", "onClose", "children"]),
                    m = a().useRef(),
                    h = (0, p.r)().prefixCls,
                    b = f()("".concat(h, "-toast"), e.className);
                return a().useEffect((function() {
                    return r ? (m.current = setTimeout((function() {
                        i && l(), m.current = null
                    }), r), function() {
                        return clearTimeout(m.current)
                    }) : function() {}
                }), [i, r, l]), a().createElement(g.A, (0, t.__assign)({}, u, {
                    visible: i,
                    onClose: l,
                    className: b
                }), a().createElement(d.Ay, {
                    className: "".concat(h, "-toast-wrap"),
                    children: s
                }))
            };
            const b = function(e) {
                var n = e.willClose,
                    r = e.closeCallback,
                    o = e.content,
                    c = (0, t.__rest)(e, ["willClose", "closeCallback", "content"]),
                    l = a().useState(!0),
                    u = l[0],
                    m = l[1],
                    f = (0, i.useCallback)((function() {
                        m(!1), setTimeout((function() {
                            r && r()
                        }), s.p)
                    }), [r]);
                return a().useEffect((function() {
                    n && f()
                }), [n, f]), a().createElement(h, (0, t.__assign)({}, c, {
                    visible: u,
                    onClose: f,
                    children: o
                }))
            };
            var y = r("a86I");
            const v = function(e) {
                var n = e.willClose,
                    r = e.closeCallback,
                    o = e.direction,
                    c = void 0 === o ? "bottom" : o,
                    l = e.content,
                    u = (0, t.__rest)(e, ["willClose", "closeCallback", "direction", "content"]),
                    m = a().useState(!0),
                    f = m[0],
                    d = m[1],
                    g = (0, i.useCallback)((function() {
                        d(!1), setTimeout((function() {
                            r && r()
                        }), s.p)
                    }), [r]);
                return a().useEffect((function() {
                    n && g()
                }), [n, g]), a().createElement(y.A, (0, t.__assign)({}, u, {
                    direction: c,
                    visible: f,
                    onClose: g,
                    children: l
                }))
            };
            var C = r("f5gz");
            const S = function(e) {
                var n = e.className,
                    r = e.duration,
                    o = void 0 === r ? 3e3 : r,
                    c = e.willClose,
                    l = e.closeCallback,
                    u = (0, t.__rest)(e, ["className", "duration", "willClose", "closeCallback"]),
                    m = a().useState(!0),
                    f = m[0],
                    d = m[1],
                    g = a().useRef(),
                    p = (0, i.useCallback)((function() {
                        d(!1), setTimeout((function() {
                            l && l()
                        }), s.p)
                    }), [l]);
                return a().useEffect((function() {
                    c && p()
                }), [c, p]), a().useEffect((function() {
                    return o ? (g.current = setTimeout((function() {
                        f && p(), g.current = null
                    }), o), function() {
                        return clearTimeout(g.current)
                    }) : function() {}
                }), [f, o, p]), a().createElement(s.A, {
                    className: n,
                    visible: f
                }, a().createElement(C.A, (0, t.__assign)({
                    closable: !0,
                    variant: "push"
                }, u, {
                    onClose: p
                })))
            };
            var T = function(e) {
                var n = e.placement,
                    r = e.offsetX,
                    t = e.offsetY,
                    i = n.split("-"),
                    a = i[0],
                    o = i[1],
                    c = o ? 0 : "50%",
                    l = t,
                    s = o ? r : "50%";
                return ("end" === o ? {
                    top: {
                        transform: "translate(-".concat(c, ", 0)"),
                        top: l,
                        right: s
                    },
                    bottom: {
                        transform: "translate(-".concat(c, ", 0)"),
                        bottom: l,
                        right: s
                    }
                } : {
                    top: {
                        transform: "translate(-".concat(c, ", 0)"),
                        top: l,
                        left: s
                    },
                    bottom: {
                        transform: "translate(-".concat(c, ", 0)"),
                        bottom: l,
                        left: s
                    }
                })[a]
            };
            const D = function(e) {
                var n = e.offsetX,
                    r = void 0 === n ? 16 : n,
                    i = e.offsetY,
                    o = void 0 === i ? 16 : i,
                    c = e.notifies,
                    l = (0, p.r)().prefixCls,
                    s = "".concat(l, "-layer-notifies");
                if (!c.length) return null;
                var u = c.reduce((function(e, n) {
                    var r = n.uid,
                        i = n.placement,
                        o = void 0 === i ? "top-end" : i,
                        c = (0, t.__rest)(n, ["uid", "placement"]);
                    return e[o].push(a().createElement(S, (0, t.__assign)({
                        key: r
                    }, c))), e
                }), {
                    "top-start": [],
                    top: [],
                    "top-end": [],
                    "bottom-start": [],
                    bottom: [],
                    "bottom-end": []
                });
                return a().createElement(d.Ay, {
                    className: "".concat(s, "-wrap")
                }, Object.keys(u).map((function(e) {
                    var n, t = e.split("-"),
                        i = (t[0], t[1]),
                        c = u[e],
                        l = f()(s, ((n = {})["data-pos-".concat(i)] = i, n));
                    return c.length ? a().createElement(d.Ay, {
                        key: e,
                        className: l,
                        children: c,
                        style: T({
                            placement: e,
                            offsetX: r,
                            offsetY: o
                        })
                    }) : null
                })))
            };
            var w = (0, i.createContext)({
                    openModal: o.es,
                    closeModal: o.es,
                    openToast: o.es,
                    closeToast: o.es,
                    openDrawer: o.es,
                    closeDrawer: o.es,
                    pushNotify: o.es,
                    closeNotify: o.es
                }),
                M = function() {
                    return a().useContext(w)
                };
            const _ = function(e) {
                var n = e.children,
                    r = e.notifiesPosition,
                    o = (0, i.useState)(),
                    l = o[0],
                    s = o[1],
                    m = (0, i.useState)(),
                    f = m[0],
                    d = m[1],
                    g = (0, i.useState)(),
                    p = g[0],
                    h = g[1],
                    y = (0, i.useState)([]),
                    C = y[0],
                    S = y[1],
                    T = {};
                return T.openModal = (0, i.useCallback)((function(e) {
                    var n = e.closeCallback;
                    s((0, t.__assign)((0, t.__assign)({}, e), {
                        closeCallback: function() {
                            s(null), n && n()
                        },
                        willClose: !1
                    }))
                }), []), T.closeModal = (0, i.useCallback)((function() {
                    s((function(e) {
                        return e ? (0, t.__assign)((0, t.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), T.openToast = (0, i.useCallback)((function(e) {
                    var n = e.closeCallback;
                    d((0, t.__assign)((0, t.__assign)({}, e), {
                        closeCallback: function() {
                            d(null), n && n()
                        },
                        willClose: !1
                    }))
                }), []), T.closeToast = (0, i.useCallback)((function() {
                    d((function(e) {
                        return e ? (0, t.__assign)((0, t.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), T.openDrawer = (0, i.useCallback)((function(e) {
                    var n = e.closeCallback;
                    h((0, t.__assign)((0, t.__assign)({}, e), {
                        closeCallback: function() {
                            h(null), n && n()
                        },
                        willClose: !1
                    }))
                }), []), T.closeDrawer = (0, i.useCallback)((function() {
                    h((function(e) {
                        return e ? (0, t.__assign)((0, t.__assign)({}, e), {
                            willClose: !0
                        }) : e
                    }))
                }), []), T.pushNotify = (0, i.useCallback)((function(e) {
                    var n = (0, c.uR)(8),
                        r = (0, t.__assign)((0, t.__assign)({}, e), {
                            uid: n,
                            closeCallback: function() {
                                e.closeCallback && e.closeCallback(), S((function(e) {
                                    return e.filter((function(e) {
                                        return e.uid !== n
                                    }))
                                }))
                            },
                            willClose: !1
                        });
                    return S((function(e) {
                        return (0, t.__spreadArray)((0, t.__spreadArray)([], e, !0), [r], !1)
                    })), r.uid
                }), []), T.closeNotify = (0, i.useCallback)((function(e) {
                    S((function(n) {
                        return n.map((function(n) {
                            return n.uid === e ? (0, t.__assign)((0, t.__assign)({}, n), {
                                willClose: !0
                            }) : n
                        }))
                    }))
                }), []), a().createElement(w.Provider, {
                    value: T
                }, n, f && a().createElement(b, (0, t.__assign)({}, f)), l && a().createElement(u, (0, t.__assign)({}, l)), p && a().createElement(v, (0, t.__assign)({}, p)), a().createElement(D, (0, t.__assign)({
                    notifies: C
                }, r)))
            }
        },
        f5gz: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => h
            });
            var t = r("wIZF"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("kY28"),
                c = r("qCH/"),
                l = r("7zlU");
            const s = function(e) {
                return a().createElement(l.A, (0, t.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-4.934-4.483L10.2 13.383l-2.716-2.716-1.768 1.767 4.484 4.484 7.634-7.634-1.768-1.767z",
                    fill: "currentColor"
                }))
            };
            var u = r("2Bze"),
                m = r("o0Ko"),
                f = r.n(m),
                d = r("AGKK"),
                g = r("Prrn"),
                p = {
                    error: a().createElement(o.A, {
                        name: "CircledClose1C",
                        color: "error"
                    }),
                    warn: a().createElement(c.A, {
                        name: "CircledWarning1C",
                        color: "PrimaryYellow"
                    }),
                    success: a().createElement(s, {
                        name: "CircledCheckmark1C",
                        color: "success"
                    }),
                    push: a().createElement(s, {
                        name: "CircledCheckmark1C",
                        color: "success"
                    })
                };
            const h = function(e) {
                var n, r, o = e.variant,
                    c = void 0 === o ? "primary" : o,
                    l = e.sz,
                    s = void 0 === l ? "middle" : l,
                    m = e.icon,
                    h = e.title,
                    b = e.message,
                    y = e.closable,
                    v = e.onClose,
                    C = e.closeIcon,
                    S = e.minWidth,
                    T = (0, t.__rest)(e, ["variant", "sz", "icon", "title", "message", "closable", "onClose", "closeIcon", "minWidth"]),
                    D = (0, g.r)(),
                    w = D.prefixCls,
                    M = D.isRTL,
                    _ = "".concat(w, "-notification"),
                    F = f()(_, ((n = {})["".concat(_, "-rtl")] = !!M, n["".concat(_, "__").concat(c)] = !!c, n["data-size-".concat(s)] = !!s, n["".concat(_, "-mw")] = !!S, n), e.className),
                    x = f()("".concat(_, "-content-message"), {
                        "data-push-message": "push" === c && !h
                    });
                if (!h && !b) return null;
                var k = !1 === m ? null : (0, i.isValidElement)(m) ? m : p[c],
                    A = (0, t.__assign)({
                        role: "button",
                        "aria-label": "close",
                        tabindex: 0
                    }, (null === C || void 0 === C ? void 0 : C.props) || {}),
                    N = (0, i.useMemo)((function() {
                        var e;
                        return y ? C ? a().cloneElement(C, (0, t.__assign)((0, t.__assign)({}, A), {
                            color: "IconNormal",
                            className: f()("".concat(_, "-close"), null === (e = null === C || void 0 === C ? void 0 : C.props) || void 0 === e ? void 0 : e.className),
                            onClick: v
                        })) : a().createElement(u.A, (0, t.__assign)({}, A, {
                            name: "Close1C",
                            color: "IconNormal",
                            className: "".concat(_, "-close"),
                            onClick: v
                        })) : null
                    }), [_, v, C, y]);
                return a().createElement(d.Ay, (0, t.__assign)({}, {
                    role: "alert"
                }, T, {
                    className: F
                }), !!k && a().cloneElement(k, {
                    className: f()("".concat(_, "-prefix"), null === (r = null === k || void 0 === k ? void 0 : k.props) || void 0 === r ? void 0 : r.className)
                }), a().createElement(d.Ay, {
                    className: f()("".concat(_, "-content"), {
                        closable: y
                    })
                }, !!h && a().createElement(d.Ay, {
                    className: "".concat(_, "-content-title"),
                    children: h
                }), !!b && a().createElement(d.Ay, {
                    className: x,
                    children: b
                }), N))
            }
        },
        TUXy: (e, n, r) => {
            "use strict";
            r.r(n), r.d(n, {
                currentAbbreviations: () => y,
                currentByteDefaultFormat: () => D,
                currentBytes: () => h,
                currentCurrency: () => b,
                currentCurrencyDefaultFormat: () => _,
                currentDefaults: () => S,
                currentDelimiters: () => v,
                currentLanguage: () => p,
                currentOrdinal: () => C,
                currentOrdinalDefaultFormat: () => T,
                currentPercentageDefaultFormat: () => w,
                currentTimeDefaultFormat: () => F,
                getZeroFormat: () => k,
                hasZeroFormat: () => N,
                languageData: () => O,
                languages: () => g,
                registerLanguage: () => E,
                setDefaults: () => x,
                setLanguage: () => $,
                setNumbroLocale: () => B,
                setZeroFormat: () => A
            });
            var t = r("2URn"),
                i = r("BK7R"),
                a = r("Ayg4"),
                o = r("TA0V"),
                c = r("W71A"),
                l = void 0,
                s = {},
                u = null,
                m = {};

            function f(e) {
                l = e
            }

            function d() {
                if (!l || !s[l]) throw new Error("No language is currently set");
                return s[l]
            }

            function g() {
                return (0, i.A)({}, s)
            }

            function p() {
                return l || ""
            }

            function h() {
                return d().bytes || {}
            }

            function b() {
                return d().currency
            }

            function y() {
                return d().abbreviations
            }

            function v() {
                return d().delimiters
            }

            function C() {
                return d().ordinal
            }

            function S() {
                return (0, i.A)({}, d().defaults, m)
            }

            function T() {
                return (0, i.A)({}, S(), d().ordinalFormat)
            }

            function D() {
                return (0, i.A)({}, S(), d().byteFormat)
            }

            function w() {
                return (0, i.A)({}, S(), d().percentageFormat)
            }
            var M = {};

            function _() {
                return (0, i.A)({}, S(), d().currencyFormat, M)
            }

            function F() {
                return (0, i.A)({}, S(), d().timeDefaults)
            }

            function x(e) {
                var n = "string" === typeof e ? c.X(e) : e;
                o.iw(n) && (m = n)
            }

            function k() {
                return u
            }

            function A(e) {
                u = "string" === typeof e ? e : null
            }

            function N() {
                return null !== u
            }

            function O(e) {
                if (e) {
                    if (s[e]) return s[e];
                    throw new Error('Unknown tag "'.concat(e, '"'))
                }
                return d()
            }

            function E(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!o.XP(e)) throw new Error("Invalid language data");
                s[e.languageTag] = e, n && f(e.languageTag)
            }

            function $(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.m.en.numbroConfig.languageTag;
                if (!s[e]) {
                    var r = e.split("-")[0],
                        t = Object.keys(s).find((function(e) {
                            return e.split("-")[0] === r
                        }));
                    return t && s[t] ? void f(t) : void f(n)
                }
                f(e)
            }

            function L(e) {
                for (var n = Object.keys(a.m), r = 0; r < n.length; r++) {
                    var t = a.m[n[r]].numbroConfig.currency;
                    if (t && t.code === e) return t.symbol
                }
            }

            function R(e) {
                for (var n = Object.keys(a.m), r = 0; r < n.length; r++) {
                    var t = a.m[n[r]].numbroConfig.currency;
                    if (t && t.symbol === e) return t.code
                }
            }

            function B(e, n) {
                try {
                    var r = a.m[e];
                    r || (r = a.m[e.split("-")[0]]), r && !s[e] && E(r.numbroConfig), r && $(r.numbroConfig.languageTag), n && (n.currencyCode && n.currencySymbol ? M = n : n.currencySymbol ? M = {
                        currencySymbol: n.currencySymbol,
                        currencyCode: R(n.currencySymbol)
                    } : n.currencyCode && (M = {
                        currencySymbol: L(n.currencyCode),
                        currencyCode: n.currencyCode
                    }))
                } catch (o) {
                    var i = (0, t.A)(o, Error) ? o.message : "";
                    console.error("Error with configuring numbro" + (i ? ": " + i : ".")), console.error(o)
                }
            }
            B("en"), l = a.m.en.numbroConfig.languageTag
        },
        Ayg4: (e, n, r) => {
            "use strict";
            r.d(n, {
                m: () => a
            });
            var t = {
                    1: "'inci",
                    5: "'inci",
                    8: "'inci",
                    70: "'inci",
                    80: "'inci",
                    2: "'nci",
                    7: "'nci",
                    20: "'nci",
                    50: "'nci",
                    3: "'\xfcnc\xfc",
                    4: "'\xfcnc\xfc",
                    100: "'\xfcnc\xfc",
                    6: "'nc\u0131",
                    9: "'uncu",
                    10: "'uncu",
                    30: "'uncu",
                    40: "'\u0131nc\u0131",
                    60: "'\u0131nc\u0131",
                    90: "'\u0131nc\u0131"
                },
                i = {
                    delimitersThousandsSpaceDecimalComma: {
                        thousands: " ",
                        decimal: ","
                    },
                    delimitersThousandsCommaDecimalDot: {
                        thousands: ",",
                        decimal: "."
                    },
                    delimitersThousandsDotDecimalComma: {
                        thousands: ".",
                        decimal: ","
                    },
                    currencyFormat: {
                        thousandSeparated: !0,
                        mantissa: 2,
                        spaceSeparated: !1,
                        spaceSeparatedCurrency: !1
                    },
                    currencyFormatSpaceSeparatedCurrency: {
                        thousandSeparated: !0,
                        mantissa: 2,
                        spaceSeparated: !0,
                        spaceSeparatedCurrency: !0
                    },
                    currencyFormatSpaceSeparated: {
                        thousandSeparated: !0,
                        mantissa: 2,
                        spaceSeparated: !0,
                        spaceSeparatedCurrency: !1
                    },
                    percentageFormatSpaceSeparated: {
                        spaceSeparated: !0
                    },
                    enOrdinal: function(e) {
                        var n = e % 10;
                        return 1 === ~~(e % 100 / 10) ? "th" : 1 === n ? "st" : 2 === n ? "nd" : 3 === n ? "rd" : "th"
                    }
                },
                a = {
                    en: {
                        name: "English",
                        numbroConfig: {
                            languageTag: "en-US",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "K",
                                million: "M",
                                billion: "B",
                                trillion: "T"
                            },
                            spaceSeparated: !1,
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "$",
                                position: "prefix",
                                code: "USD"
                            },
                            currencyFormat: i.currencyFormat
                        },
                        dateConfig: {
                            languageTag: "en",
                            formatTypes: {
                                YMDHM: "L LT",
                                YMDHMS: "L LTS"
                            }
                        }
                    },
                    "zh-CN": {
                        name: "Simplified Chinese",
                        numbroConfig: {
                            languageTag: "zh-CN",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u5343",
                                million: "\u767e\u4e07",
                                billion: "\u5341\u4ebf",
                                trillion: "\u5146"
                            },
                            ordinal: function() {
                                return "\u7b2c"
                            },
                            currency: {
                                symbol: "\xa5",
                                position: "prefix",
                                code: "CNY"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "zh-cn"
                        }
                    },
                    "zh-TC": {
                        name: "Traditional Chinese",
                        numbroConfig: {
                            languageTag: "zh-TW",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u5343",
                                million: "\u767e\u842c",
                                billion: "\u5341\u5104",
                                trillion: "\u5146"
                            },
                            ordinal: function() {
                                return "\u7b2c"
                            },
                            currency: {
                                symbol: "NT$",
                                position: "prefix",
                                code: "TWD"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "zh-tw"
                        }
                    },
                    ar: {
                        name: "Arabic",
                        numbroConfig: {
                            languageTag: "ar-SA",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u0623\u0644\u0641",
                                million: "\u0645\u0644\u064a\u0648\u0646",
                                billion: "\u0645\u0644\u064a\u0627\u0631",
                                trillion: "\u062a\u0631\u064a\u0644\u064a\u0648\u0646"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u0631.\u0633.",
                                position: "prefix",
                                code: "SAR"
                            },
                            percentageFormat: {
                                prefixSymbol: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "ar",
                            formatTypes: {
                                YMDHM: "LT L",
                                YMDHMS: "LTS L"
                            }
                        }
                    },
                    nl: {
                        name: "Dutch",
                        numbroConfig: {
                            languageTag: "nl-NL",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "k",
                                million: "mln",
                                billion: "mrd",
                                trillion: "bln"
                            },
                            ordinal: function(e) {
                                var n = e % 100;
                                return 0 !== e && n <= 1 || 8 === n || n >= 20 ? "ste" : "de"
                            },
                            currency: {
                                symbol: "\u20ac",
                                position: "prefix",
                                code: "EUR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "nl"
                        }
                    },
                    ph: {
                        name: "Filipino",
                        numbroConfig: {
                            languageTag: "fil-PH",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "k",
                                million: "m",
                                billion: "b",
                                trillion: "t"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20b1",
                                code: "PHP"
                            },
                            currencyFormat: i.currencyFormat
                        }
                    },
                    fr: {
                        name: "French",
                        numbroConfig: {
                            languageTag: "fr-FR",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "k",
                                million: "M",
                                billion: "Mrd",
                                trillion: "billion"
                            },
                            ordinal: function(e) {
                                return 1 === e ? "er" : "\xe8me"
                            },
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR"
                            },
                            percentageFormat: i.percentageFormatSpaceSeparated,
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "fr",
                            formatTypes: {
                                YMDHM: "LT L",
                                YMDHMS: "LTS L"
                            }
                        }
                    },
                    de: {
                        name: "German",
                        numbroConfig: {
                            languageTag: "de-DE",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "k",
                                million: "Mi",
                                billion: "Ma",
                                trillion: "Bi"
                            },
                            ordinal: i.enOrdinal,
                            spaceSeparated: !0,
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency,
                            percentageFormat: i.percentageFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "de"
                        }
                    },
                    id: {
                        name: "Indonesian",
                        numbroConfig: {
                            languageTag: "id",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "r",
                                million: "j",
                                billion: "m",
                                trillion: "t"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "Rp",
                                code: "IDR",
                                position: "prefix"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "id"
                        }
                    },
                    it: {
                        name: "Italian",
                        numbroConfig: {
                            languageTag: "it-IT",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "k",
                                million: "mln",
                                billion: "mld",
                                trillion: "Bln"
                            },
                            ordinal: function() {
                                return "\xba"
                            },
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "it"
                        }
                    },
                    ja: {
                        name: "Japanese",
                        numbroConfig: {
                            languageTag: "ja-JP",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u5343",
                                million: "\u767e\u4e07",
                                billion: "\u5341\u5104",
                                trillion: "\u5146"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\xa5",
                                position: "prefix",
                                code: "JPY"
                            },
                            currencyFormat: i.currencyFormat
                        },
                        dateConfig: {
                            languageTag: "ja"
                        }
                    },
                    ko: {
                        name: "Korean",
                        numbroConfig: {
                            languageTag: "ko-KR",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\ucc9c",
                                million: "\ubc31\ub9cc",
                                billion: "\uc2ed\uc5b5",
                                trillion: "\uc870"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20a9",
                                code: "KPW"
                            },
                            currencyFormat: i.currencyFormat
                        },
                        dateConfig: {
                            languageTag: "ko"
                        }
                    },
                    pl: {
                        name: "Polish",
                        numbroConfig: {
                            languageTag: "pl-PL",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "tys.",
                                million: "mln",
                                billion: "mld",
                                trillion: "bln"
                            },
                            ordinal: function() {
                                return "."
                            },
                            currency: {
                                symbol: " z\u0142",
                                position: "postfix",
                                code: "PLN"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "pl"
                        }
                    },
                    "pt-BR": {
                        name: "Portuguese (Brazil)",
                        numbroConfig: {
                            languageTag: "pt-BR",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "mil",
                                million: "mi",
                                billion: "bi",
                                trillion: "tri"
                            },
                            ordinal: function() {
                                return "\xba"
                            },
                            currency: {
                                symbol: "R$",
                                position: "postfix",
                                code: "BRL"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "pt-br"
                        }
                    },
                    pt: {
                        name: "Portuguese (Portugal)",
                        numbroConfig: {
                            languageTag: "pt-PT",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "mil",
                                million: "M",
                                billion: "b",
                                trillion: "B"
                            },
                            ordinal: function() {
                                return "\xba"
                            },
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "pt"
                        }
                    },
                    ru: {
                        name: "Russian",
                        numbroConfig: {
                            languageTag: "ru-RU",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "\u0442\u044b\u0441.",
                                million: "\u043c\u043b\u043d",
                                billion: "\u043c\u043b\u0440\u0434",
                                trillion: "\u0442\u0440\u043b\u043d"
                            },
                            ordinal: function() {
                                return "."
                            },
                            currency: {
                                symbol: "\u0440\u0443\u0431.",
                                position: "postfix",
                                code: "RUB"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "ru"
                        }
                    },
                    "es-LA": {
                        name: "Spanish (LatAm)",
                        numbroConfig: {
                            languageTag: "es-419",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "mil",
                                million: "M",
                                billion: "mil millones",
                                trillion: "bill\xf3n"
                            },
                            ordinal: function() {
                                return "\xba"
                            },
                            currency: {
                                symbol: "$",
                                position: "postfix",
                                code: "USD",
                                useCurrencyCodeIfAble: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "es"
                        }
                    },
                    es: {
                        name: "Spanish (Spain)",
                        numbroConfig: {
                            languageTag: "es-ES",
                            delimiters: {
                                thousands: " ",
                                decimal: ","
                            },
                            abbreviations: {
                                thousand: "k",
                                million: "M",
                                billion: "b",
                                trillion: "bill\xf3n"
                            },
                            ordinal: function(e) {
                                var n = e % 10;
                                return 1 === n || 3 === n ? "er" : 2 === n ? "do" : 7 === n || 0 === n ? "mo" : 8 === n ? "vo" : 9 === n ? "no" : "to"
                            },
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency,
                            percentageFormat: i.percentageFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "es"
                        }
                    },
                    th: {
                        name: "Thai",
                        numbroConfig: {
                            languageTag: "th-TH",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u0e1e\u0e31\u0e19",
                                million: "\u0e25\u0e49\u0e32\u0e19",
                                billion: "\u0e1e\u0e31\u0e19\u0e25\u0e49\u0e32\u0e19",
                                trillion: "\u0e25\u0e49\u0e32\u0e19\u0e25\u0e49\u0e32\u0e19"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u0e3f",
                                position: "postfix",
                                code: "THB"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "th"
                        }
                    },
                    tr: {
                        name: "Turkish",
                        numbroConfig: {
                            languageTag: "tr-TR",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "bin",
                                million: "milyon",
                                billion: "milyar",
                                trillion: "trilyon"
                            },
                            ordinal: function(e) {
                                if (0 === e) return "'\u0131nc\u0131";
                                var n = e % 10;
                                return t[n] || t[e % 100 - n] || t[e >= 100 ? 100 : 0]
                            },
                            currency: {
                                symbol: "\u20ba",
                                position: "postfix",
                                code: "TRY"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "tr"
                        }
                    },
                    "uk-UA": {
                        name: "Ukrainian",
                        numbroConfig: {
                            languageTag: "uk-UA",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "\u0442\u0438\u0441.",
                                million: "\u043c\u043b\u043d",
                                billion: "\u043c\u043b\u0440\u0434",
                                trillion: "\u0442\u0440\u043b\u043d"
                            },
                            ordinal: function() {
                                return ""
                            },
                            currency: {
                                symbol: "\u20b4",
                                position: "postfix",
                                code: "UAH"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "uk"
                        }
                    },
                    vi: {
                        name: "Vietnamese",
                        numbroConfig: {
                            languageTag: "vi-VN",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "k",
                                million: "TR",
                                billion: "T",
                                trillion: "NT"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20ab",
                                position: "postfix",
                                code: "VND",
                                useCurrencyCodeIfAble: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "vi"
                        }
                    },
                    ro: {
                        name: "Romanian",
                        numbroConfig: {
                            languageTag: "ro-RO",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "mie",
                                million: "mil.",
                                billion: "mld.",
                                trillion: "tril."
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: " lei",
                                position: "postfix",
                                code: "RON",
                                useCurrencyCodeIfAble: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "ro"
                        }
                    },
                    cs: {
                        name: "Czech",
                        numbroConfig: {
                            languageTag: "cs-CZ",
                            delimiters: {
                                thousands: "\xa0",
                                decimal: ","
                            },
                            abbreviations: {
                                thousand: "tis.",
                                million: "mil.",
                                billion: "mld.",
                                trillion: "bil."
                            },
                            ordinal: i.enOrdinal,
                            spaceSeparated: !0,
                            currency: {
                                symbol: "K\u010d",
                                position: "postfix",
                                code: "CZK"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency,
                            percentageFormat: i.percentageFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "cs"
                        }
                    },
                    he: {
                        name: "Hebrew",
                        numbroConfig: {
                            languageTag: "he-IL",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u05d0\u05dc\u05e3",
                                million: "\u05de\u05d9\u05dc\u05d9\u05d5\u05df",
                                billion: "\u05de\u05d9\u05dc\u05d9\u05d0\u05e8\u05d3",
                                trillion: "\u05d8\u05e8\u05d9\u05dc\u05d9\u05d5\u05df"
                            },
                            currency: {
                                symbol: "\u20aa",
                                position: "prefix",
                                code: "ILS"
                            },
                            ordinal: function() {
                                return ""
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "he"
                        }
                    },
                    bg: {
                        name: "Bulgarian",
                        numbroConfig: {
                            languageTag: "bg",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "\u0445\u0438\u043b.",
                                million: "\u043c\u043b\u043d.",
                                billion: "\u043c\u043b\u0440\u0434.",
                                trillion: "\u0442\u0440\u043b\u043d."
                            },
                            ordinal: function() {
                                return "."
                            },
                            currency: {
                                symbol: "\u043b\u0432.",
                                code: "BGN"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "bg"
                        }
                    },
                    lv: {
                        name: "Latvian",
                        numbroConfig: {
                            languageTag: "lv-LV",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "k",
                                million: "mlj.",
                                billion: "mld.",
                                trillion: "trilj."
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "lv"
                        }
                    },
                    bn: {
                        name: "Bengali",
                        numbroConfig: {
                            languageTag: "bn-BD",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u09b9\u09be\u099c\u09be\u09b0",
                                million: "\u09ae\u09bf\u09b2\u09bf\u09af\u09bc\u09a8",
                                billion: "\u09ac\u09bf\u09b2\u09bf\u09af\u09bc\u09a8",
                                trillion: "\u099f\u09cd\u09b0\u09bf\u09b2\u09bf\u09af\u09bc\u09a8"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u09f3",
                                position: "prefix",
                                code: "BDT"
                            }
                        },
                        dateConfig: {
                            languageTag: "bn"
                        }
                    },
                    sv: {
                        name: "Swedish",
                        numbroConfig: {
                            languageTag: "sv-SE",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "k",
                                million: "mn",
                                billion: "md",
                                trillion: "biljon"
                            },
                            ordinal: function() {
                                return ""
                            },
                            currency: {
                                symbol: "kr",
                                position: "postfix",
                                code: "SEK",
                                useCurrencyCodeIfAble: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency,
                            percentageFormat: i.percentageFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "sv"
                        }
                    },
                    fi: {
                        name: "Finnish",
                        numbroConfig: {
                            languageTag: "fi-FI",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "k",
                                million: "M",
                                billion: "G",
                                trillion: "T"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "fi"
                        }
                    },
                    no: {
                        name: "Norwegian",
                        numbroConfig: {
                            languageTag: "nb-NO",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "t",
                                million: "M",
                                billion: "md",
                                trillion: "b"
                            },
                            ordinal: function() {
                                return ""
                            },
                            currency: {
                                symbol: "kr",
                                position: "postfix",
                                code: "NOK"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "nb"
                        }
                    },
                    sk: {
                        name: "Slovak",
                        numbroConfig: {
                            languageTag: "sk-SK",
                            delimiters: {
                                thousands: "\xa0",
                                decimal: ","
                            },
                            abbreviations: {
                                thousand: "tis.",
                                million: "mil.",
                                billion: "mld.",
                                trillion: "bil."
                            },
                            ordinal: i.enOrdinal,
                            spaceSeparated: !0,
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR",
                                useCurrencyCodeIfAble: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency,
                            percentageFormat: i.percentageFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "sk"
                        }
                    },
                    sl: {
                        name: "Slovenian",
                        numbroConfig: {
                            languageTag: "sl",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "tis",
                                million: "mio",
                                billion: "mrd",
                                trillion: "bilijon"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20ac",
                                code: "EUR",
                                position: "postfix",
                                useCurrencyCodeIfAble: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency,
                            percentageFormat: i.percentageFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "sl"
                        }
                    },
                    ur: {
                        name: "Urdu",
                        numbroConfig: {
                            languageTag: "ur-PK",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u06c1\u0632\u0627\u0631",
                                million: "\u0645\u0644\u06cc\u0646",
                                billion: "\u0627\u0631\u0628",
                                trillion: "\u0679\u0631\u0644\u0646"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20a8",
                                position: "prefix",
                                code: "PKR"
                            }
                        },
                        dateConfig: {
                            languageTag: "ur"
                        }
                    },
                    el: {
                        name: "Greek",
                        numbroConfig: {
                            languageTag: "el",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "\u03c7",
                                million: "\u03b5\u03ba.",
                                billion: "\u03b4\u03b9\u03c3.",
                                trillion: "\u03c4\u03c1\u03b9\u03c3."
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20ac",
                                code: "EUR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "el"
                        }
                    },
                    hi: {
                        name: "Hindi",
                        numbroConfig: {
                            languageTag: "hi-IN",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u0939\u091c\u093e\u0930",
                                million: "\u092e\u093f\u0932\u093f\u092f\u0928",
                                billion: "\u0905\u0930\u092c",
                                trillion: "\u0916\u0930\u092c"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20b9",
                                position: "prefix",
                                code: "INR"
                            }
                        },
                        dateConfig: {
                            languageTag: "hi"
                        }
                    },
                    et: {
                        name: "Estonian",
                        numbroConfig: {
                            languageTag: "et-EE",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "tuh",
                                million: "mln",
                                billion: "mld",
                                trillion: "trln."
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "et"
                        }
                    },
                    "da-DK": {
                        name: "Danish",
                        numbroConfig: {
                            languageTag: "da-DK",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "t",
                                million: "mio.",
                                billion: "mia.",
                                trillion: "bio."
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "kr",
                                position: "postfix",
                                code: "DKK",
                                useCurrencyCodeIfAble: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency,
                            percentageFormat: i.percentageFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "da"
                        }
                    },
                    lt: {
                        name: "Lithuanian",
                        numbroConfig: {
                            languageTag: "lt-LT",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "t\u016bkst.",
                                million: "mln.",
                                billion: "mlrd.",
                                trillion: "trln."
                            },
                            ordinal: function() {
                                return "-as"
                            },
                            currency: {
                                symbol: "\u20ac",
                                position: "postfix",
                                code: "EUR",
                                useCurrencyCodeIfAble: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency,
                            percentageFormat: i.percentageFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "lt"
                        }
                    },
                    hr: {
                        name: "Croatian",
                        numbroConfig: {
                            languageTag: "hr-HR",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "tis.",
                                million: "mil.",
                                billion: "mlrd.",
                                trillion: "bil."
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "kn",
                                position: "postfix",
                                code: "HRK"
                            },
                            percentageFormat: i.percentageFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "hr"
                        }
                    },
                    sr: {
                        name: "Serbian",
                        numbroConfig: {
                            languageTag: "sr-Cyrl-RS",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "\u0442\u044b\u0441.",
                                million: "\u043c\u043b\u043d",
                                billion: "b",
                                trillion: "t"
                            },
                            ordinal: function() {
                                return "."
                            },
                            currency: {
                                symbol: "RSD",
                                code: "RSD"
                            }
                        },
                        dateConfig: {
                            languageTag: "sr"
                        }
                    },
                    bs: {
                        name: "Bosnian",
                        numbroConfig: {
                            languageTag: "bs-BA",
                            delimiters: i.delimitersThousandsDotDecimalComma,
                            abbreviations: {
                                thousand: "hilj.",
                                million: "mil.",
                                billion: "mlrd.",
                                trillion: "bil."
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "KM",
                                position: "postfix",
                                code: "BAM"
                            }
                        },
                        dateConfig: {
                            languageTag: "bs"
                        }
                    },
                    kk: {
                        name: "Kazakh",
                        numbroConfig: {
                            languageTag: "kk-KZ",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "\u043c\u044b\u04a3",
                                million: "\u043c\u043b\u043d",
                                billion: "\u043c\u043b\u0440\u0434",
                                trillion: "\u0442\u0440\u043b\u043d"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20b8",
                                position: "postfix",
                                code: "KZT"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "kk"
                        }
                    },
                    kz: {
                        name: "Kazakh",
                        numbroConfig: {
                            languageTag: "kk-KZ",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "\u043c\u044b\u04a3",
                                million: "\u043c\u043b\u043d",
                                billion: "\u043c\u043b\u0440\u0434",
                                trillion: "\u0442\u0440\u043b\u043d"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20b8",
                                position: "postfix",
                                code: "KZT"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "kk"
                        }
                    },
                    hu: {
                        name: "Hungarian",
                        numbroConfig: {
                            languageTag: "hu-HU",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "E",
                                million: "M",
                                billion: "Mrd",
                                trillion: "T"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "Ft",
                                position: "postfix",
                                code: "HUF"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "hu"
                        }
                    },
                    "my-MM": {
                        name: "Burmese",
                        numbroConfig: {
                            languageTag: "my-MM",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "K",
                                million: "M",
                                billion: "B",
                                trillion: "T"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "K",
                                position: "postfix",
                                code: "MMK",
                                useCurrencyCodeIfAble: !0
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "my"
                        }
                    },
                    "lo-LA": {
                        name: "Lao",
                        numbroConfig: {
                            languageTag: "lo-LA",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u0e9e\u0eb1\u0e99",
                                million: "\u0ea5\u0ec9\u0eb2\u0e99",
                                billion: "\u0e95\u0eb7\u0ec9",
                                trillion: "\u0e95\u0ea5\u0eb4\u0ec8\u0e99"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20ad",
                                position: "postfix",
                                code: "LAK"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "lo"
                        }
                    },
                    "si-LK": {
                        name: "Sinhala",
                        numbroConfig: {
                            languageTag: "si-LK",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u0daf",
                                million: "\u0db8\u0dd2",
                                billion: "\u0db6\u0dd2",
                                trillion: "\u0da7\u0dd2"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u0dbb\u0dd4",
                                position: "prefix",
                                code: "LKR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparated
                        }
                    },
                    az: {
                        name: "Azerbaijani",
                        numbroConfig: {
                            languageTag: "az-AZ",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "min",
                                million: "mln",
                                billion: "mlrd",
                                trillion: "trl"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20bc",
                                position: "postfix",
                                code: "AZN"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparatedCurrency
                        },
                        dateConfig: {
                            languageTag: "az"
                        }
                    },
                    km: {
                        name: "Khmer",
                        numbroConfig: {
                            languageTag: "km-KH",
                            delimiters: i.delimitersThousandsCommaDecimalDot,
                            abbreviations: {
                                thousand: "\u1796\u17b6\u1793\u17cb",
                                million: "\u179b\u17b6\u1793",
                                billion: "\u1796\u17b6\u1793\u17cb\u179b\u17b6\u1793",
                                trillion: "\u1791\u17d2\u179a\u17b8\u179b\u17b6\u1793"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u17db",
                                position: "prefix",
                                code: "KHR"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparated
                        }
                    },
                    ka: {
                        name: "Georgian",
                        numbroConfig: {
                            languageTag: "ka-GE",
                            delimiters: i.delimitersThousandsSpaceDecimalComma,
                            abbreviations: {
                                thousand: "\u10d0\u10d7.",
                                million: "\u10db\u10da\u10dc",
                                billion: "\u10db\u10da\u10e0\u10d3",
                                trillion: "\u10e2\u10e0\u10d8\u10da"
                            },
                            ordinal: i.enOrdinal,
                            currency: {
                                symbol: "\u20be",
                                position: "postfix",
                                code: "GEL"
                            },
                            currencyFormat: i.currencyFormatSpaceSeparated
                        },
                        dateConfig: {
                            languageTag: "ka"
                        }
                    }
                }
        },
        W71A: (e, n, r) => {
            "use strict";

            function t(e, n) {
                var r = e.match(/^{([^}]*)}/);
                return r ? (n.prefix = r[1], e.slice(r[0].length)) : e
            }

            function i(e, n) {
                var r = e.match(/{([^}]*)}$/);
                return r ? (n.postfix = r[1], e.slice(0, -r[0].length)) : e
            }

            function a(e, n) {
                if (e.includes("$")) n.output = "currency";
                else {
                    if (!e.includes("%")) return e.includes("bd") ? (n.output = "byte", void(n.base = "general")) : e.includes("b") ? (n.output = "byte", void(n.base = "binary")) : e.includes("d") ? (n.output = "byte", void(n.base = "decimal")) : void(e.includes(":") ? n.output = "time" : e.includes("o") && (n.output = "ordinal"));
                    n.output = "percent"
                }
            }

            function o(e, n) {
                e.includes(",") && (n.thousandSeparated = !0)
            }

            function c(e, n) {
                e.includes(" ") && (n.spaceSeparated = !0, n.spaceSeparatedCurrency = !0, (n.average || n.forceAverage) && (n.spaceSeparatedAbbreviation = !0))
            }

            function l(e, n) {
                var r = e.match(/[1-9]+[0-9]*/);
                r && (n.totalLength = +r[0])
            }

            function s(e, n) {
                var r = e.split(".")[0].match(/0+/);
                r && (n.characteristic = r[0].length)
            }

            function u(e, n) {
                var r = e.split(".")[1];
                if (r) {
                    var t = r.match(/0+/);
                    t && (n.mantissa = t[0].length)
                }
            }

            function m(e, n) {
                var r = e.split(".")[1];
                r && (n.trimMantissa = r.includes("["))
            }

            function f(e, n) {
                e.includes("a") && (n.average = !0)
            }

            function d(e, n) {
                -1 !== e.indexOf("K") ? n.forceAverage = "thousand" : -1 !== e.indexOf("M") ? n.forceAverage = "million" : -1 !== e.indexOf("B") ? n.forceAverage = "billion" : -1 !== e.indexOf("T") && (n.forceAverage = "trillion")
            }

            function g(e, n) {
                e.match(/\[\.]/) ? n.optionalMantissa = !0 : e.match(/\./) && (n.optionalMantissa = !1)
            }

            function p(e, n) {
                if (e.includes(".")) {
                    var r = e.split(".")[0];
                    n.optionalCharacteristic = !r.includes("0")
                }
            }

            function h(e, n) {
                e.match(/^\+?\([^)]*\)$/) && (n.negative = "parenthesis"), e.match(/^\+?-/) && (n.negative = "sign")
            }

            function b(e, n) {
                e.match(/^\+/) && (n.forceSign = !0)
            }

            function y(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                if ("string" !== typeof e) return e;
                var r = t(e, n);
                return a(r = i(r, n), n), l(r, n), s(r, n), p(r, n), f(r, n), d(r, n), u(r, n), g(r, n), m(r, n), o(r, n), c(r, n), h(r, n), b(r, n), n
            }
            r.d(n, {
                X: () => y
            })
        },
        "NRM/": (e, n, r) => {
            "use strict";
            r.d(n, {
                b: () => c
            });
            var t = [{
                key: "ZiB",
                factor: Math.pow(1024, 7)
            }, {
                key: "ZB",
                factor: Math.pow(1e3, 7)
            }, {
                key: "YiB",
                factor: Math.pow(1024, 8)
            }, {
                key: "YB",
                factor: Math.pow(1e3, 8)
            }, {
                key: "TiB",
                factor: Math.pow(1024, 4)
            }, {
                key: "TB",
                factor: Math.pow(1e3, 4)
            }, {
                key: "PiB",
                factor: Math.pow(1024, 5)
            }, {
                key: "PB",
                factor: Math.pow(1e3, 5)
            }, {
                key: "MiB",
                factor: Math.pow(1024, 2)
            }, {
                key: "MB",
                factor: Math.pow(1e3, 2)
            }, {
                key: "KiB",
                factor: Math.pow(1024, 1)
            }, {
                key: "KB",
                factor: Math.pow(1e3, 1)
            }, {
                key: "GiB",
                factor: Math.pow(1024, 3)
            }, {
                key: "GB",
                factor: Math.pow(1e3, 3)
            }, {
                key: "EiB",
                factor: Math.pow(1024, 6)
            }, {
                key: "EB",
                factor: Math.pow(1e3, 6)
            }, {
                key: "B",
                factor: 1
            }];

            function i(e) {
                return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&")
            }

            function a(e, n, r, o, c, l, s) {
                if (!isNaN(+e)) return +e;
                var u = "",
                    m = e.replace(/(^[^(]*)\((.*)\)([^)]*$)/, "$1$2$3");
                if (m !== e) {
                    var f = a(m, n, r, o, c, l, s);
                    return void 0 !== f ? -1 * f : void 0
                }
                var d = !0,
                    g = !1,
                    p = void 0;
                try {
                    for (var h, b = t[Symbol.iterator](); !(d = (h = b.next()).done); d = !0) {
                        var y = h.value;
                        if ((u = e.replace(new RegExp("([0-9 ])(".concat(y.key, ")$")), "$1")) !== e) {
                            var v = a(u, n, r, o, c, l, s);
                            return void 0 !== v ? v * y.factor : void 0
                        }
                    }
                } catch (N) {
                    g = !0, p = N
                } finally {
                    try {
                        d || null == b.return || b.return()
                    } finally {
                        if (g) throw p
                    }
                }
                if ((u = e.replace("%", "")) !== e) {
                    var C = a(u, n, r, o, c, l, s);
                    return void 0 !== C ? C / 100 : void 0
                }
                var S = parseFloat(e);
                if (!isNaN(S)) {
                    var T = o(S);
                    if (T && "." !== T && (u = e.replace(new RegExp("".concat(i(T), "$")), "")) !== e) return a(u, n, r, o, c, l, s);
                    var D = {};
                    Object.keys(l).forEach((function(e) {
                        D[l[e]] = e
                    }));
                    for (var w = Object.keys(D).sort().reverse(), M = w.length, _ = 0; _ < M; _++) {
                        var F = w[_],
                            x = D[F];
                        if ((u = e.replace(F, "")) !== e) {
                            var k = 1;
                            switch (x) {
                                case "thousand":
                                    k = Math.pow(10, 3);
                                    break;
                                case "million":
                                    k = Math.pow(10, 6);
                                    break;
                                case "billion":
                                    k = Math.pow(10, 9);
                                    break;
                                case "trillion":
                                    k = Math.pow(10, 12)
                            }
                            var A = a(u, n, r, o, c, l, s);
                            return void 0 !== A ? A * k : void 0
                        }
                    }
                }
            }

            function o(e, n, r) {
                var t = e.replace(r, "");
                return t = (t = t.replace(new RegExp("([0-9])".concat(i(n.thousands), "([0-9])"), "g"), "$1$2")).replace(n.decimal, ".")
            }

            function c(e, n) {
                var t = r("TUXy");
                if ("number" === typeof e) return e;
                if ("string" === typeof e) {
                    var i = t.currentDelimiters(),
                        c = t.currentCurrency().symbol,
                        l = t.currentOrdinal(),
                        s = t.getZeroFormat(),
                        u = t.currentAbbreviations();
                    if ("" !== e) return e === s ? 0 : a(o(e, i, c), i, c, l, s, u, n || {})
                }
            }
        },
        TA0V: (e, n, r) => {
            "use strict";
            r.d(n, {
                XP: () => f,
                iw: () => m,
                tf: () => s
            });
            var t = r("tEf9"),
                i = r("blBx"),
                a = r("NRM/"),
                o = /^[a-z]{2,3}(-[a-zA-Z]{4})?(-([A-Z]{2}|[0-9]{3}))?$/,
                c = {
                    output: {
                        type: "string",
                        validValues: ["currency", "percent", "byte", "time", "ordinal", "number"]
                    },
                    base: {
                        type: "string",
                        validValues: ["decimal", "binary", "general"],
                        restriction: function(e, n) {
                            return "byte" === n.output
                        },
                        message: "`base` must be provided only when the output is `byte`",
                        mandatory: function(e) {
                            return "byte" === e.output
                        }
                    },
                    characteristic: {
                        type: "number",
                        restriction: function(e) {
                            return e >= 0
                        },
                        message: "value must be positive"
                    },
                    prefix: "string",
                    postfix: "string",
                    forceAverage: {
                        type: "string",
                        validValues: ["trillion", "billion", "million", "thousand"]
                    },
                    average: "boolean",
                    lowPrecision: {
                        type: "boolean",
                        restriction: function(e, n) {
                            return !0 === n.average
                        },
                        message: "`lowPrecision` must be provided only when the option `average` is set"
                    },
                    currencyPosition: {
                        type: "string",
                        validValues: ["prefix", "infix", "postfix"]
                    },
                    currencySymbol: "string",
                    useCurrencyCodeIfAble: "boolean",
                    currencyCode: "string",
                    totalLength: {
                        type: "number",
                        restrictions: [{
                            restriction: function(e) {
                                return e >= 0
                            },
                            message: "value must be positive"
                        }, {
                            restriction: function(e, n) {
                                return !n.exponential
                            },
                            message: "`totalLength` is incompatible with `exponential`"
                        }]
                    },
                    mantissa: {
                        type: "number",
                        restriction: function(e) {
                            return e >= 0
                        },
                        message: "value must be positive"
                    },
                    optionalMantissa: "boolean",
                    trimMantissa: "boolean",
                    roundingFunction: "function",
                    optionalCharacteristic: "boolean",
                    thousandSeparated: "boolean",
                    spaceSeparated: "boolean",
                    spaceSeparatedCurrency: "boolean",
                    spaceSeparatedAbbreviation: "boolean",
                    abbreviations: {
                        type: "object",
                        children: {
                            thousand: "string",
                            million: "string",
                            billion: "string",
                            trillion: "string"
                        }
                    },
                    negative: {
                        type: "string",
                        validValues: ["sign", "parenthesis"]
                    },
                    forceSign: "boolean",
                    exponential: {
                        type: "boolean"
                    },
                    prefixSymbol: {
                        type: "boolean"
                    }
                },
                l = {
                    languageTag: {
                        type: "string",
                        mandatory: !0,
                        restriction: function(e) {
                            return e.match(o)
                        },
                        message: "the language tag must follow the BCP 47 specification (see https://tools.ieft.org/html/bcp47)"
                    },
                    delimiters: {
                        type: "object",
                        children: {
                            thousands: "string",
                            decimal: "string",
                            thousandsSize: "number"
                        },
                        mandatory: !0
                    },
                    abbreviations: {
                        type: "object",
                        children: {
                            thousand: {
                                type: "string",
                                mandatory: !0
                            },
                            million: {
                                type: "string",
                                mandatory: !0
                            },
                            billion: {
                                type: "string",
                                mandatory: !0
                            },
                            trillion: {
                                type: "string",
                                mandatory: !0
                            }
                        },
                        mandatory: !0
                    },
                    spaceSeparated: "boolean",
                    spaceSeparatedCurrency: "boolean",
                    ordinal: {
                        type: "function",
                        mandatory: !0
                    },
                    bytes: {
                        type: "object",
                        children: {
                            binarySuffixes: "object",
                            decimalSuffixes: "object"
                        }
                    },
                    currency: {
                        type: "object",
                        children: {
                            symbol: "string",
                            position: "string",
                            code: "string",
                            useCurrencyCodeIfAble: "boolean"
                        },
                        mandatory: !0
                    },
                    defaults: "format",
                    ordinalFormat: "format",
                    byteFormat: "format",
                    percentageFormat: "format",
                    currencyFormat: "format",
                    timeDefaults: "format",
                    formats: {
                        type: "object",
                        children: {
                            fourDigits: {
                                type: "format",
                                mandatory: !0
                            },
                            fullWithTwoDecimals: {
                                type: "format",
                                mandatory: !0
                            },
                            fullWithTwoDecimalsNoCurrency: {
                                type: "format",
                                mandatory: !0
                            },
                            fullWithNoDecimals: {
                                type: "format",
                                mandatory: !0
                            }
                        }
                    }
                };

            function s(e, n) {
                var r = function(e) {
                        return void 0 !== (0, a.b)(e)
                    }(e),
                    t = m(n);
                return r && t
            }

            function u(e, n, r) {
                var a, o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                    l = Object.keys(e).map((function(t) {
                        if (!n[t]) return console.error("".concat(r, " Invalid key: ").concat(t)), !1;
                        var a = e[t],
                            o = n[t];
                        if ("string" === typeof o && (o = {
                                type: o
                            }), "format" === o.type) {
                            if (!u(a, c, "[Validate ".concat(t, "]"), !0)) return !1
                        } else if (("undefined" === typeof a ? "undefined" : (0, i.A)(a)) !== o.type) return console.error("".concat(r, " ").concat(t, ' type mismatched: "').concat(o.type, '" expected, "').concat("undefined" === typeof a ? "undefined" : (0, i.A)(a), '" provided')), !1;
                        if (o.restrictions && o.restrictions.length)
                            for (var l = o.restrictions.length, s = 0; s < l; s++) {
                                var m = o.restrictions[s],
                                    f = m.restriction,
                                    d = m.message;
                                if (!f(a, e)) return console.error("".concat(r, " ").concat(t, " invalid value: ").concat(d)), !1
                            }
                        if (o.restriction && !o.restriction(a, e)) return console.error("".concat(r, " ").concat(t, " invalid value: ").concat(o.message)), !1;
                        if (o.validValues && -1 === o.validValues.indexOf(a)) return console.error("".concat(r, " ").concat(t, " invalid value: must be among ").concat(JSON.stringify(o.validValues), ', "').concat(a, '" provided')), !1;
                        if (o.children && !u(a, o.children, "[Validate ".concat(t, "]"))) return !1;
                        return !0
                    }));
                o || (a = l).push.apply(a, (0, t.A)(Object.keys(n).map((function(t) {
                    var i = n[t];
                    if ("string" === typeof i && (i = {
                            type: i
                        }), i.mandatory) {
                        var a = i.mandatory;
                        if ("function" === typeof a && (a = a(e)), a && void 0 === e[t]) return console.error("".concat(r, ' Missing mandatory key "').concat(t, '"')), !1
                    }
                    return !0
                }))));
                return l.reduce((function(e, n) {
                    return e && n
                }), !0)
            }

            function m(e) {
                return u(e, c, "[Validate format]")
            }

            function f(e) {
                return u(e, l, "[Validate language]")
            }
        },
        "09Dg": function(e) {
            e.exports = function() {
                "use strict";
                var e = 1e3,
                    n = 6e4,
                    r = 36e5,
                    t = "millisecond",
                    i = "second",
                    a = "minute",
                    o = "hour",
                    c = "day",
                    l = "week",
                    s = "month",
                    u = "quarter",
                    m = "year",
                    f = "date",
                    d = "Invalid Date",
                    g = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,
                    p = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    h = {
                        name: "en",
                        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                        ordinal: function(e) {
                            var n = ["th", "st", "nd", "rd"],
                                r = e % 100;
                            return "[" + e + (n[(r - 20) % 10] || n[r] || n[0]) + "]"
                        }
                    },
                    b = function(e, n, r) {
                        var t = String(e);
                        return !t || t.length >= n ? e : "" + Array(n + 1 - t.length).join(r) + e
                    },
                    y = {
                        s: b,
                        z: function(e) {
                            var n = -e.utcOffset(),
                                r = Math.abs(n),
                                t = Math.floor(r / 60),
                                i = r % 60;
                            return (n <= 0 ? "+" : "-") + b(t, 2, "0") + ":" + b(i, 2, "0")
                        },
                        m: function e(n, r) {
                            if (n.date() < r.date()) return -e(r, n);
                            var t = 12 * (r.year() - n.year()) + (r.month() - n.month()),
                                i = n.clone().add(t, s),
                                a = r - i < 0,
                                o = n.clone().add(t + (a ? -1 : 1), s);
                            return +(-(t + (r - i) / (a ? i - o : o - i)) || 0)
                        },
                        a: function(e) {
                            return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                        },
                        p: function(e) {
                            return {
                                M: s,
                                y: m,
                                w: l,
                                d: c,
                                D: f,
                                h: o,
                                m: a,
                                s: i,
                                ms: t,
                                Q: u
                            }[e] || String(e || "").toLowerCase().replace(/s$/, "")
                        },
                        u: function(e) {
                            return void 0 === e
                        }
                    },
                    v = "en",
                    C = {};
                C[v] = h;
                var S = "$isDayjsObject",
                    T = function(e) {
                        return e instanceof _ || !(!e || !e[S])
                    },
                    D = function e(n, r, t) {
                        var i;
                        if (!n) return v;
                        if ("string" == typeof n) {
                            var a = n.toLowerCase();
                            C[a] && (i = a), r && (C[a] = r, i = a);
                            var o = n.split("-");
                            if (!i && o.length > 1) return e(o[0])
                        } else {
                            var c = n.name;
                            C[c] = n, i = c
                        }
                        return !t && i && (v = i), i || !t && v
                    },
                    w = function(e, n) {
                        if (T(e)) return e.clone();
                        var r = "object" == typeof n ? n : {};
                        return r.date = e, r.args = arguments, new _(r)
                    },
                    M = y;
                M.l = D, M.i = T, M.w = function(e, n) {
                    return w(e, {
                        locale: n.$L,
                        utc: n.$u,
                        x: n.$x,
                        $offset: n.$offset
                    })
                };
                var _ = function() {
                        function h(e) {
                            this.$L = D(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[S] = !0
                        }
                        var b = h.prototype;
                        return b.parse = function(e) {
                            this.$d = function(e) {
                                var n = e.date,
                                    r = e.utc;
                                if (null === n) return new Date(NaN);
                                if (M.u(n)) return new Date;
                                if (n instanceof Date) return new Date(n);
                                if ("string" == typeof n && !/Z$/i.test(n)) {
                                    var t = n.match(g);
                                    if (t) {
                                        var i = t[2] - 1 || 0,
                                            a = (t[7] || "0").substring(0, 3);
                                        return r ? new Date(Date.UTC(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, a)) : new Date(t[1], i, t[3] || 1, t[4] || 0, t[5] || 0, t[6] || 0, a)
                                    }
                                }
                                return new Date(n)
                            }(e), this.init()
                        }, b.init = function() {
                            var e = this.$d;
                            this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                        }, b.$utils = function() {
                            return M
                        }, b.isValid = function() {
                            return !(this.$d.toString() === d)
                        }, b.isSame = function(e, n) {
                            var r = w(e);
                            return this.startOf(n) <= r && r <= this.endOf(n)
                        }, b.isAfter = function(e, n) {
                            return w(e) < this.startOf(n)
                        }, b.isBefore = function(e, n) {
                            return this.endOf(n) < w(e)
                        }, b.$g = function(e, n, r) {
                            return M.u(e) ? this[n] : this.set(r, e)
                        }, b.unix = function() {
                            return Math.floor(this.valueOf() / 1e3)
                        }, b.valueOf = function() {
                            return this.$d.getTime()
                        }, b.startOf = function(e, n) {
                            var r = this,
                                t = !!M.u(n) || n,
                                u = M.p(e),
                                d = function(e, n) {
                                    var i = M.w(r.$u ? Date.UTC(r.$y, n, e) : new Date(r.$y, n, e), r);
                                    return t ? i : i.endOf(c)
                                },
                                g = function(e, n) {
                                    return M.w(r.toDate()[e].apply(r.toDate("s"), (t ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), r)
                                },
                                p = this.$W,
                                h = this.$M,
                                b = this.$D,
                                y = "set" + (this.$u ? "UTC" : "");
                            switch (u) {
                                case m:
                                    return t ? d(1, 0) : d(31, 11);
                                case s:
                                    return t ? d(1, h) : d(0, h + 1);
                                case l:
                                    var v = this.$locale().weekStart || 0,
                                        C = (p < v ? p + 7 : p) - v;
                                    return d(t ? b - C : b + (6 - C), h);
                                case c:
                                case f:
                                    return g(y + "Hours", 0);
                                case o:
                                    return g(y + "Minutes", 1);
                                case a:
                                    return g(y + "Seconds", 2);
                                case i:
                                    return g(y + "Milliseconds", 3);
                                default:
                                    return this.clone()
                            }
                        }, b.endOf = function(e) {
                            return this.startOf(e, !1)
                        }, b.$set = function(e, n) {
                            var r, l = M.p(e),
                                u = "set" + (this.$u ? "UTC" : ""),
                                d = (r = {}, r[c] = u + "Date", r[f] = u + "Date", r[s] = u + "Month", r[m] = u + "FullYear", r[o] = u + "Hours", r[a] = u + "Minutes", r[i] = u + "Seconds", r[t] = u + "Milliseconds", r)[l],
                                g = l === c ? this.$D + (n - this.$W) : n;
                            if (l === s || l === m) {
                                var p = this.clone().set(f, 1);
                                p.$d[d](g), p.init(), this.$d = p.set(f, Math.min(this.$D, p.daysInMonth())).$d
                            } else d && this.$d[d](g);
                            return this.init(), this
                        }, b.set = function(e, n) {
                            return this.clone().$set(e, n)
                        }, b.get = function(e) {
                            return this[M.p(e)]()
                        }, b.add = function(t, u) {
                            var f, d = this;
                            t = Number(t);
                            var g = M.p(u),
                                p = function(e) {
                                    var n = w(d);
                                    return M.w(n.date(n.date() + Math.round(e * t)), d)
                                };
                            if (g === s) return this.set(s, this.$M + t);
                            if (g === m) return this.set(m, this.$y + t);
                            if (g === c) return p(1);
                            if (g === l) return p(7);
                            var h = (f = {}, f[a] = n, f[o] = r, f[i] = e, f)[g] || 1,
                                b = this.$d.getTime() + t * h;
                            return M.w(b, this)
                        }, b.subtract = function(e, n) {
                            return this.add(-1 * e, n)
                        }, b.format = function(e) {
                            var n = this,
                                r = this.$locale();
                            if (!this.isValid()) return r.invalidDate || d;
                            var t = e || "YYYY-MM-DDTHH:mm:ssZ",
                                i = M.z(this),
                                a = this.$H,
                                o = this.$m,
                                c = this.$M,
                                l = r.weekdays,
                                s = r.months,
                                u = r.meridiem,
                                m = function(e, r, i, a) {
                                    return e && (e[r] || e(n, t)) || i[r].slice(0, a)
                                },
                                f = function(e) {
                                    return M.s(a % 12 || 12, e, "0")
                                },
                                g = u || function(e, n, r) {
                                    var t = e < 12 ? "AM" : "PM";
                                    return r ? t.toLowerCase() : t
                                };
                            return t.replace(p, (function(e, t) {
                                return t || function(e) {
                                    switch (e) {
                                        case "YY":
                                            return String(n.$y).slice(-2);
                                        case "YYYY":
                                            return M.s(n.$y, 4, "0");
                                        case "M":
                                            return c + 1;
                                        case "MM":
                                            return M.s(c + 1, 2, "0");
                                        case "MMM":
                                            return m(r.monthsShort, c, s, 3);
                                        case "MMMM":
                                            return m(s, c);
                                        case "D":
                                            return n.$D;
                                        case "DD":
                                            return M.s(n.$D, 2, "0");
                                        case "d":
                                            return String(n.$W);
                                        case "dd":
                                            return m(r.weekdaysMin, n.$W, l, 2);
                                        case "ddd":
                                            return m(r.weekdaysShort, n.$W, l, 3);
                                        case "dddd":
                                            return l[n.$W];
                                        case "H":
                                            return String(a);
                                        case "HH":
                                            return M.s(a, 2, "0");
                                        case "h":
                                            return f(1);
                                        case "hh":
                                            return f(2);
                                        case "a":
                                            return g(a, o, !0);
                                        case "A":
                                            return g(a, o, !1);
                                        case "m":
                                            return String(o);
                                        case "mm":
                                            return M.s(o, 2, "0");
                                        case "s":
                                            return String(n.$s);
                                        case "ss":
                                            return M.s(n.$s, 2, "0");
                                        case "SSS":
                                            return M.s(n.$ms, 3, "0");
                                        case "Z":
                                            return i
                                    }
                                    return null
                                }(e) || i.replace(":", "")
                            }))
                        }, b.utcOffset = function() {
                            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
                        }, b.diff = function(t, f, d) {
                            var g, p = this,
                                h = M.p(f),
                                b = w(t),
                                y = (b.utcOffset() - this.utcOffset()) * n,
                                v = this - b,
                                C = function() {
                                    return M.m(p, b)
                                };
                            switch (h) {
                                case m:
                                    g = C() / 12;
                                    break;
                                case s:
                                    g = C();
                                    break;
                                case u:
                                    g = C() / 3;
                                    break;
                                case l:
                                    g = (v - y) / 6048e5;
                                    break;
                                case c:
                                    g = (v - y) / 864e5;
                                    break;
                                case o:
                                    g = v / r;
                                    break;
                                case a:
                                    g = v / n;
                                    break;
                                case i:
                                    g = v / e;
                                    break;
                                default:
                                    g = v
                            }
                            return d ? g : M.a(g)
                        }, b.daysInMonth = function() {
                            return this.endOf(s).$D
                        }, b.$locale = function() {
                            return C[this.$L]
                        }, b.locale = function(e, n) {
                            if (!e) return this.$L;
                            var r = this.clone(),
                                t = D(e, n, !0);
                            return t && (r.$L = t), r
                        }, b.clone = function() {
                            return M.w(this.$d, this)
                        }, b.toDate = function() {
                            return new Date(this.valueOf())
                        }, b.toJSON = function() {
                            return this.isValid() ? this.toISOString() : null
                        }, b.toISOString = function() {
                            return this.$d.toISOString()
                        }, b.toString = function() {
                            return this.$d.toUTCString()
                        }, h
                    }(),
                    F = _.prototype;
                return w.prototype = F, [
                    ["$ms", t],
                    ["$s", i],
                    ["$m", a],
                    ["$H", o],
                    ["$W", c],
                    ["$M", s],
                    ["$y", m],
                    ["$D", f]
                ].forEach((function(e) {
                    F[e[1]] = function(n) {
                        return this.$g(n, e[0], e[1])
                    }
                })), w.extend = function(e, n) {
                    return e.$i || (e(n, _, w), e.$i = !0), w
                }, w.locale = D, w.isDayjs = T, w.unix = function(e) {
                    return w(1e3 * e)
                }, w.en = C[v], w.Ls = C, w.p = {}, w
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
                return function(n, r, t) {
                    var i = r.prototype,
                        a = i.format;
                    t.en.formats = e, i.format = function(n) {
                        void 0 === n && (n = "YYYY-MM-DDTHH:mm:ssZ");
                        var r = this.$locale().formats,
                            t = function(n, r) {
                                return n.replace(/(\[[^\]]+])|(LTS?|l{1,4}|L{1,4})/g, (function(n, t, i) {
                                    var a = i && i.toUpperCase();
                                    return t || r[i] || e[i] || r[a].replace(/(\[[^\]]+])|(MMMM|MM|DD|dddd)/g, (function(e, n, r) {
                                        return n || r.slice(1)
                                    }))
                                }))
                            }(n, void 0 === r ? {} : r);
                        return a.call(this, t)
                    }
                }
            }()
        },
        IA9B: (e, n, r) => {
            "use strict";
            r.d(n, {
                g: () => s,
                k: () => l
            });
            var t = r("TrCV"),
                i = r("DTvD"),
                a = r("HS2I"),
                o = function() {},
                c = (0, i.createContext)({
                    strategy: null,
                    loading: !1,
                    init: function(e, n) {}
                }),
                l = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = (0, i.useContext)(c),
                        t = r.strategy,
                        a = r.loading,
                        o = r.init;
                    return (0, i.useEffect)((function() {
                        e && !(null === t || void 0 === t ? void 0 : t[e]) && o(e, n)
                    }), []), e ? {
                        strategy: null === t || void 0 === t ? void 0 : t[e],
                        loading: a
                    } : {
                        strategy: t,
                        loading: a
                    }
                },
                s = function(e) {
                    var n = function() {
                            var e = (0, a.useThemis)(["NTEwMzc1ODYwMTo4aThubklsaWVtTGZDUnZTN1ZyTzhIV2hCdEJFaDE2Zw=="]);
                            return {
                                strategy: e.value,
                                loading: e.loading,
                                init: o
                            }
                        }(),
                        r = n.strategy,
                        i = n.loading,
                        l = n.init;
                    return (0, t.jsx)(c.Provider, {
                        value: {
                            strategy: r,
                            loading: i,
                            init: l
                        },
                        children: e.children
                    })
                }
        },
        "43Uo": (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => i
            });
            var t = r("HS2I");
            const i = function() {
                var e = (0, t.useMediaState)();
                return {
                    isMobile: e.isMobile,
                    isTablet: e.isTablet,
                    isDesktop: e.isDesktop
                }
            }
        },
        GI6b: (e, n, r) => {
            "use strict";
            r.d(n, {
                A: () => i
            });
            var t = r("HS2I");
            const i = t.useTheme
        },
        OLMx: (e, n, r) => {
            "use strict";
            r.d(n, {
                default: () => Se
            });
            var t = r("TrCV"),
                i = r("DTvD"),
                a = r.n(i),
                o = r("Srb9"),
                c = r("uHCZ"),
                l = r("AXwM"),
                s = r("oVQP"),
                u = r("MEAY"),
                m = r("wIZF"),
                f = r("/nhe");
            const d = (0, i.createContext)({
                colors: {},
                mode: "light"
            });
            var g = r("qrIQ"),
                p = r("hyZw"),
                h = r("OKx2"),
                b = r("o0Ko"),
                y = r.n(b),
                v = r("AGKK"),
                C = r("Prrn"),
                S = {
                    fresh: "",
                    traditional: "traditional"
                };
            const T = function(e) {
                    var n = e.scope,
                        r = e.isCVD,
                        t = e.isReverse,
                        o = e.themeColors,
                        c = e.colorMode,
                        l = void 0 === c ? "fresh" : c,
                        s = e.mode,
                        u = void 0 === s ? "light" : s,
                        b = e.themeExtraColors,
                        T = void 0 === b ? {} : b,
                        D = (0, C.r)().isMobile,
                        w = (0, i.useMemo)((function() {
                            var e = [r ? "cvd" : S[l] || "", t ? "reverse" : ""].filter(Boolean),
                                n = (0, m.__assign)({}, o),
                                i = T[e.join("-")] || {};
                            D && ((null === o || void 0 === o ? void 0 : o.mobile) && (n = (0, m.__assign)((0, m.__assign)({}, n), n.mobile)), (null === i || void 0 === i ? void 0 : i.mobile) && (i = (0, m.__assign)((0, m.__assign)({}, i), i.mobile)));
                            var a = (0, m.__assign)((0, m.__assign)({}, n), i);
                            delete a.mobile;
                            var c;
                            return c = Object.keys(a).reduce((function(e, n) {
                                var r;
                                return (0, m.__assign)((0, m.__assign)({}, e), ((r = {})["--color-".concat(n)] = a[n], r))
                            }), {}), {
                                colors: a,
                                styles: c
                            }
                        }), [r, t, o, T, D, l]),
                        M = w.colors,
                        _ = w.styles,
                        F = y()("theme-root", u, e.className);
                    return (0, f.op)((function() {
                        var e;
                        return g.lq || n || !document.body ? p.es : ((0, h.Dq)(document.body, _, !0), (e = document.body.classList).add.apply(e, F.split(" ")), function() {
                            var e;
                            (null === document || void 0 === document ? void 0 : document.body) && ((0, h.Dq)(document.body, _, !1), (e = document.body.classList).remove.apply(e, F.split(" ")))
                        })
                    }), [F, n, _]), a().createElement(d.Provider, {
                        value: {
                            isCVD: r,
                            isReverse: t,
                            mode: u,
                            colors: M
                        }
                    }, g.lq || n ? a().createElement(v.Ay, {
                        className: F,
                        style: _,
                        children: e.children
                    }) : e.children)
                },
                D = (0, i.createContext)({});
            const w = function(e) {
                var n = e.pathPrefix,
                    r = e.isRegionMode,
                    t = e.level2Domain,
                    i = e.children,
                    o = (0, m.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "children"]);
                return a().createElement(D.Provider, (0, m.__assign)({
                    value: {
                        pathPrefix: n,
                        isRegionMode: r,
                        level2Domain: t
                    },
                    children: i
                }, o))
            };
            const M = function(e) {
                var n = e.pathPrefix,
                    r = e.isRegionMode,
                    t = e.level2Domain,
                    i = e.lang,
                    o = e.prefixCls,
                    c = e.isRTL,
                    l = e.iconConfig,
                    s = e.children,
                    u = e.isElectron,
                    f = e.isMobile,
                    d = (0, m.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    g = {
                        prefixCls: o,
                        isRTL: c,
                        iconConfig: l,
                        isElectron: u,
                        isMobile: f
                    },
                    p = {
                        pathPrefix: n,
                        isRegionMode: r,
                        level2Domain: t,
                        lang: i
                    },
                    h = Object.values(p).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    b = a().createElement(C.A, (0, m.__assign)({}, g), a().createElement(T, (0, m.__assign)({}, d), s));
                return h ? a().createElement(w, (0, m.__assign)({}, p), b) : b
            };
            var _ = (0, i.createContext)({
                getCoachMark: p.es,
                showCoachMark: p.es,
                preCoachMark: p.es,
                nextCoachMark: p.es,
                closeCoachMark: p.es
            });
            const F = function(e) {
                var n = e.children,
                    r = a().useState({}),
                    t = r[0],
                    o = r[1],
                    c = (0, i.useCallback)((function(e) {
                        o((function(n) {
                            var r = n.index,
                                t = void 0 === r ? 0 : r,
                                i = Math.max(t + e, 0);
                            return n.id ? (0, m.__assign)((0, m.__assign)({}, n), {
                                index: i
                            }) : n
                        }))
                    }), []),
                    l = {};
                return l.getCoachMark = (0, i.useCallback)((function(e) {
                    return t.id === e ? t.index : void 0
                }), [t]), l.showCoachMark = (0, i.useCallback)((function(e) {
                    return o({
                        id: e,
                        index: 0
                    })
                }), []), l.preCoachMark = (0, i.useCallback)((function() {
                    return c(-1)
                }), []), l.nextCoachMark = (0, i.useCallback)((function() {
                    return c(1)
                }), []), l.closeCoachMark = (0, i.useCallback)((function() {
                    return o({})
                }), []), a().createElement(_.Provider, {
                    value: l,
                    children: n
                })
            };
            var x = r("vht/"),
                k = r("NoXm"),
                A = r("vW+O"),
                N = r("888e"),
                O = r("2URn"),
                E = r("vM3x"),
                $ = r.n(E),
                L = r("BK7R"),
                R = r("VP0d"),
                B = r("TUXy"),
                P = r("TA0V"),
                I = r("W71A"),
                U = r("Ayg4"),
                Y = {
                    trillion: Math.pow(10, 12),
                    billion: Math.pow(10, 9),
                    million: Math.pow(10, 6),
                    thousand: Math.pow(10, 3)
                },
                j = {
                    totalLength: 0,
                    characteristic: 0,
                    forceAverage: !1,
                    average: !1,
                    mantissa: -1,
                    optionalMantissa: !0,
                    thousandSeparated: !0,
                    spaceSeparated: !1,
                    negative: "sign",
                    forceSign: !1,
                    roundingFunction: function(e) {
                        return e
                    },
                    spaceSeparatedAbbreviation: !1
                },
                K = B.currentBytes(),
                H = K.binarySuffixes,
                z = K.decimalSuffixes,
                V = {
                    general: {
                        scale: 1024,
                        suffixes: z,
                        marker: "bd"
                    },
                    binary: {
                        scale: 1024,
                        suffixes: H,
                        marker: "b"
                    },
                    decimal: {
                        scale: 1e3,
                        suffixes: z,
                        marker: "d"
                    }
                };

            function Z(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    r = "string" === typeof n ? I.X(n) : n,
                    t = P.iw(r);
                if (!t) return "ERROR: invalid format";
                var i = r.prefix || "",
                    a = r.postfix || "",
                    o = G(e, r);
                return o = ee(o = Q(o, i), a)
            }

            function G(e, n) {
                switch (n.output) {
                    case "currency":
                        return function(e, n) {
                            var r, t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "",
                                i = B.currentCurrency(),
                                a = (0, L.A)({}, j, B.currentCurrencyDefaultFormat(), n),
                                o = "",
                                c = n.currencyPosition || i.position,
                                l = a.currencySymbol || i.symbol;
                            if (a.useCurrencyCodeIfAble || i.useCurrencyCodeIfAble)
                                if (a.currencyCode) l = a.currencyCode;
                                else
                                    for (var s = Object.keys(U.m), u = 0; u < s.length; u++) {
                                        var m = U.m[s[u]].numbroConfig.currency;
                                        if (m && m.symbol === l) {
                                            l = m.code;
                                            break
                                        }
                                    }(void 0 !== a.spaceSeparatedCurrency ? a.spaceSeparatedCurrency : a.spaceSeparated) && (o = " ");
                            "infix" === c && (r = o + l + o);
                            var f = t || ne({
                                instance: e,
                                providedFormat: (0, L.A)({}, B.currentCurrencyDefaultFormat(), n),
                                state: B,
                                decimalSeparator: r
                            });
                            "prefix" === c && (f = e._value < 0 && "sign" === a.negative ? "-".concat(o).concat(l).concat(f.slice(1)) : e._value > 0 && a.forceSign ? "+".concat(o).concat(l).concat(f.slice(1)) : l + o + f);
                            c && "postfix" !== c || (f = f + (o = !a.spaceSeparatedAbbreviation && a.average ? "" : o) + l);
                            return f
                        }(e, n);
                    case "percent":
                        return function(e, n) {
                            var r = n.prefixSymbol,
                                t = ne({
                                    instance: {
                                        _value: 100 * e._value
                                    },
                                    providedFormat: n,
                                    state: B
                                }),
                                i = (0, L.A)({}, j, n);
                            if (r) return "%".concat(i.spaceSeparated ? " " : "").concat(t);
                            return "".concat(t).concat(i.spaceSeparated ? " " : "", "%")
                        }(e, n = re(n, B.currentPercentageDefaultFormat()));
                    case "byte":
                        return function(e, n) {
                            var r = n.base || "binary",
                                t = (0, L.A)({}, j, n),
                                i = B.currentBytes(),
                                a = i.binarySuffixes,
                                o = i.decimalSuffixes,
                                c = {
                                    general: {
                                        scale: 1024,
                                        suffixes: o || {},
                                        marker: "bd"
                                    },
                                    binary: {
                                        scale: 1024,
                                        suffixes: a || {},
                                        marker: "b"
                                    },
                                    decimal: {
                                        scale: 1e3,
                                        suffixes: o || {},
                                        marker: "d"
                                    }
                                }[r],
                                l = W(e._value, c.suffixes, c.scale),
                                s = l.value,
                                u = l.suffix,
                                m = ne({
                                    instance: {
                                        _value: s
                                    },
                                    providedFormat: n,
                                    state: B
                                });
                            return "".concat(m).concat(t.spaceSeparated ? " " : "").concat(u)
                        }(e, n = re(n, B.currentByteDefaultFormat()));
                    case "time":
                        return n = re(n, B.currentTimeDefaultFormat()),
                            function(e) {
                                var n = Math.floor(e._value / 60 / 60),
                                    r = Math.floor((e._value - 60 * n * 60) / 60),
                                    t = Math.round(e._value - 60 * n * 60 - 60 * r);
                                return "".concat(n, ":").concat(r < 10 ? "0" : "").concat(r, ":").concat(t < 10 ? "0" : "").concat(t)
                            }(e);
                    case "ordinal":
                        return function(e, n) {
                            var r = B.currentOrdinal(),
                                t = (0, L.A)({}, j, n),
                                i = ne({
                                    instance: e,
                                    providedFormat: n,
                                    state: B
                                }),
                                a = r(e._value);
                            return "".concat(i).concat(t.spaceSeparated ? " " : "").concat(a)
                        }(e, n = re(n, B.currentOrdinalDefaultFormat()));
                    default:
                        return ne({
                            instance: e,
                            providedFormat: n,
                            state: B
                        })
                }
            }

            function W(e, n, r) {
                var t = n[0],
                    i = Math.abs(e);
                if (i >= r) {
                    for (var a = 1; a < n.length; ++a) {
                        var o = Math.pow(r, a),
                            c = Math.pow(r, a + 1);
                        if (i >= o && i < c) {
                            t = n[a], e /= o;
                            break
                        }
                    }
                    t === n[0] && (e /= Math.pow(r, n.length - 1), t = n[n.length - 1])
                }
                return {
                    value: e,
                    suffix: t
                }
            }

            function q(e) {
                for (var n = "", r = 0; r < e; r++) n += "0";
                return n
            }

            function X(e, n) {
                var r = e.toString(),
                    t = (0, R.A)(r.split("e"), 2),
                    i = t[0],
                    a = t[1],
                    o = (0, R.A)(i.split("."), 2),
                    c = o[0],
                    l = o[1],
                    s = void 0 === l ? "" : l;
                if (+a > 0) r = c + s + q(a - s.length);
                else {
                    var u = ".";
                    u = +c < 0 ? "-0".concat(u) : "0".concat(u);
                    var m = (q(-a - 1) + Math.abs(c) + s).substr(0, n);
                    m.length < n && (m += q(n - m.length)), r = u + m
                }
                return +a > 0 && n > 0 && (r += ".".concat(q(n))), r
            }

            function J(e, n, r, t, i, a) {
                if (-1 === t) return e;
                var o = function(e, n) {
                        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Math.round;
                        return -1 !== e.toString().indexOf("e") ? X(e, n) : new($())(r(+"".concat(e, "e+").concat(n)) / Math.pow(10, n)).toFixed(n)
                    }(n, t, a),
                    c = (0, R.A)(o.toString().split("."), 2),
                    l = c[0],
                    s = c[1],
                    u = void 0 === s ? "" : s;
                if (u.match(/^0+$/) && (r || i)) return l;
                var m = u.match(/0+$/);
                return i && m ? "".concat(l, ".").concat(u.toString().slice(0, m.index)) : o.toString()
            }

            function Q(e, n) {
                return n + e
            }

            function ee(e, n) {
                return e + n
            }

            function ne(e) {
                var n = e.instance,
                    r = e.providedFormat,
                    t = e.decimalSeparator,
                    i = e.defaults,
                    a = void 0 === i ? (0, B.currentDefaults)() : i,
                    o = n._value;
                if (0 === o && (0, B.hasZeroFormat)()) return (0, B.getZeroFormat)() || "0";
                if (!isFinite(o)) return o.toString();
                var c = (0, L.A)({}, j, a, r),
                    l = c.totalLength,
                    s = l ? 0 : c.characteristic,
                    u = c.optionalCharacteristic,
                    m = c.forceAverage,
                    f = c.lowPrecision,
                    d = !!l || !!m || c.average,
                    g = l ? -1 : d && void 0 === r.mantissa ? 0 : c.mantissa,
                    p = !l && (void 0 === r.optionalMantissa ? -1 === g : c.optionalMantissa),
                    h = c.trimMantissa,
                    b = c.thousandSeparated,
                    y = c.spaceSeparated,
                    v = c.negative,
                    C = c.forceSign,
                    S = c.exponential,
                    T = c.roundingFunction,
                    D = "";
                if (d) {
                    var w = function(e) {
                        var n = e.value,
                            r = e.forceAverage,
                            t = e.lowPrecision,
                            i = void 0 === t || t,
                            a = e.abbreviations,
                            o = e.spaceSeparated,
                            c = void 0 !== o && o,
                            l = e.totalLength,
                            s = void 0 === l ? 0 : l,
                            u = e.roundingFunction,
                            m = void 0 === u ? Math.round : u,
                            f = "",
                            d = Math.abs(n),
                            g = -1;
                        if (r && a[r] && Y[r] ? (f = a[r], n /= Y[r]) : d >= Y.trillion || i && 1 === m(d / Y.trillion) ? (f = a.trillion, n /= Y.trillion) : d < Y.trillion && d >= Y.billion || i && 1 === m(d / Y.billion) ? (f = a.billion, n /= Y.billion) : d < Y.billion && d >= Y.million || i && 1 === m(d / Y.million) ? (f = a.million, n /= Y.million) : (d < Y.million && d >= Y.thousand || i && 1 === m(d / Y.thousand)) && (f = a.thousand, n /= Y.thousand), f && (f = (c ? " " : "") + f), s) {
                            var p = n < 0,
                                h = n.toString().split(".")[0],
                                b = p ? h.length - 1 : h.length;
                            g = Math.max(s - b, 0)
                        }
                        return {
                            value: n,
                            abbreviation: f,
                            mantissaPrecision: g
                        }
                    }({
                        value: o,
                        forceAverage: m,
                        lowPrecision: f,
                        abbreviations: (0, B.currentAbbreviations)(),
                        spaceSeparated: y,
                        roundingFunction: T,
                        totalLength: l
                    });
                    o = w.value, D += w.abbreviation, l && (g = w.mantissaPrecision)
                }
                if (S) {
                    var M = function(e) {
                        var n = e.value,
                            r = e.characteristicPrecision,
                            t = (0, R.A)(n.toExponential().split("e"), 2),
                            i = t[0],
                            a = t[1],
                            o = +i;
                        return r ? (1 < r && (o *= Math.pow(10, r - 1), a = (a = +a - (r - 1)) >= 0 ? "+".concat(a) : a), {
                            value: o,
                            abbreviation: "e".concat(a)
                        }) : {
                            value: o,
                            abbreviation: "e".concat(a)
                        }
                    }({
                        value: o,
                        characteristicPrecision: s
                    });
                    o = M.value, D = M.abbreviation + D
                }
                var _ = J(o.toString(), o, p, g, h, T);
                return _ = function(e, n, r, t) {
                    var i = e,
                        a = (0, R.A)(i.toString().split("."), 2),
                        o = a[0],
                        c = a[1];
                    if (o.match(/^-?0$/) && r) return c ? "".concat(o.replace("0", ""), ".").concat(c) : o.replace("0", "");
                    var l = n < 0 && 0 === o.indexOf("-");
                    if (l && (o = o.slice(1), i = i.slice(1)), o.length < t)
                        for (var s = t - o.length, u = 0; u < s; u++) i = "0".concat(i);
                    return l && (i = "-".concat(i)), i.toString()
                }(_, o, u, s), _ = function(e, n, r, t) {
                    var i = (0, B.currentDelimiters)(),
                        a = i.thousands;
                    t = t || i.decimal;
                    var o = i.thousandsSize || 3,
                        c = e.toString(),
                        l = c.split(".")[0],
                        s = c.split(".")[1],
                        u = n < 0 && 0 === l.indexOf("-");
                    if (r) {
                        u && (l = l.slice(1));
                        var m = function(e, n) {
                            for (var r = [], t = 0, i = e; i > 0; i--) t === n && (r.unshift(i), t = 0), t++;
                            return r
                        }(l.length, o);
                        m.forEach((function(e, n) {
                            l = l.slice(0, e + n) + a + l.slice(e + n)
                        })), u && (l = "-".concat(l))
                    }
                    return s ? l + t + s : l
                }(_, o, b, t), (d || S) && (_ = function(e, n) {
                    return e + n
                }(_, D)), (C || o < 0) && (_ = function(e, n, r) {
                    return 0 === n ? e : 0 === +e ? e.replace("-", "") : n > 0 ? "+".concat(e) : "sign" === r ? e : "(".concat(e.replace("-", ""), ")")
                }(_, o, v)), _
            }

            function re(e, n) {
                if (!e) return n;
                var r = Object.keys(e);
                return 1 === r.length && "output" === r[0] ? n : e
            }

            function te(e, n, r) {
                var t = new($())(e._value),
                    i = r.isNumbro(n) ? n._value : n;
                return e._value = t.plus(new($())(i)).toNumber(), e
            }

            function ie(e, n, r) {
                var t = new($())(e._value),
                    i = r.isNumbro(n) ? n._value : n;
                return e._value = t.minus(new($())(i)).toNumber(), e
            }

            function ae(e, n, r) {
                var t = new($())(e._value),
                    i = r.isNumbro(n) ? n._value : n;
                return e._value = t.times(new($())(i)).toNumber(), e
            }

            function oe(e, n, r) {
                var t = new($())(e._value),
                    i = r.isNumbro(n) ? n._value : n;
                return e._value = t.dividedBy(new($())(i)).toNumber(), e
            }

            function ce(e, n, r) {
                return e._value = r.isNumbro(n) ? n._value : Number(n), e
            }

            function le(e, n, r) {
                var t = r(e._value);
                return ie(t, n, r), Math.abs(t._value)
            }
            var se = r("NRM/"),
                ue = function() {
                    function e(n) {
                        (0, N.A)(this, e), this._value = n
                    }
                    var n = e.prototype;
                    return n.clone = function() {
                        return fe(this._value)
                    }, n.format = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Z(this, e)
                    }, n.formatCurrency = function(e) {
                        return "string" === typeof e && (e = I.X(e)), (e = re(e, B.currentCurrencyDefaultFormat())).output = "currency", Z(this, e)
                    }, n.formatTime = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return e.output = "time", Z(this, e)
                    }, n.binaryByteUnits = function() {
                        return function(e) {
                            var n = V.binary;
                            return W(e._value, n.suffixes, n.scale).suffix
                        }(this)
                    }, n.decimalByteUnits = function() {
                        return function(e) {
                            var n = V.decimal;
                            return W(e._value, n.suffixes, n.scale).suffix
                        }(this)
                    }, n.byteUnits = function() {
                        return function(e) {
                            var n = V.general;
                            return W(e._value, n.suffixes, n.scale).suffix
                        }(this)
                    }, n.difference = function(e) {
                        return le(this, e, fe)
                    }, n.add = function(e) {
                        return te(this, e, fe)
                    }, n.subtract = function(e) {
                        return ie(this, e, fe)
                    }, n.multiply = function(e) {
                        return ae(this, e, fe)
                    }, n.divide = function(e) {
                        return oe(this, e, fe)
                    }, n.set = function(e) {
                        return ce(this, me(e), fe)
                    }, n.value = function() {
                        return this._value
                    }, n.valueOf = function() {
                        return this._value
                    }, e
                }();

            function me(e) {
                if ("" === e || null == e) return NaN;
                var n;
                if (fe.isNumbro(e)) n = e._value;
                else if ("string" === typeof e) {
                    if (function(e) {
                            var n = Number(e);
                            return !!Number.isFinite(n) && n === Number(String(n))
                        }(e)) return Number(e);
                    n = fe.unformat(e) || NaN
                } else n = isNaN(e) ? NaN : Number(e);
                return n
            }
            var fe = function(e) {
                var n = me(e);
                return new ue(n)
            };
            fe.version = "2.5.0", fe.isNumbro = function(e) {
                return (0, O.A)(e, ue)
            }, fe.language = B.currentLanguage, fe.registerLanguage = B.registerLanguage, fe.setNumbroLocale = B.setNumbroLocale, fe.setLanguage = B.setLanguage, fe.languages = B.languages, fe.languageData = B.languageData, fe.zeroFormat = B.setZeroFormat, fe.defaultFormat = B.currentDefaults, fe.setDefaults = B.setDefaults, fe.defaultCurrencyFormat = B.currentCurrencyDefaultFormat, fe.validate = P.tf, fe.unformat = se.b, fe.BigNumber = $();
            const de = fe;
            var ge = r("HS2I"),
                pe = r("OShd"),
                he = r("V0mm"),
                be = r("IA9B"),
                ye = r("GI6b"),
                ve = r("43Uo"),
                Ce = r("ZSsA");
            const Se = function() {
                var e, n, r = (0, ye.A)().theme,
                    a = (0, he.fn)(pe.U, pe.P).isRTL,
                    m = (0, ve.A)().isMobile,
                    f = (0, o.L)().theme,
                    d = (0, Ce.s9)().language,
                    g = (0, ge.useCurrency)(),
                    p = g.currency,
                    h = g.currencyMap;
                de.setNumbroLocale(d, {
                    currencySymbol: null === (e = h[p]) || void 0 === e ? void 0 : e.symbol,
                    currencyCode: null === (n = h[p]) || void 0 === n ? void 0 : n.name
                }), (0, A.YL)(d);
                var b = (0, i.useMemo)((function() {
                        return ["light" === r ? s.BB : s.XT, "light" === r ? u.bK : u.zd]
                    }), [r]),
                    y = b[0],
                    v = b[1];
                return (0, i.useEffect)((function() {
                    var e = m ? f : r;
                    k.cachePromiseStore.setState("theme", e)
                }), []), (0, t.jsxs)(M, {
                    mode: r,
                    themeColors: y,
                    themeExtraColors: v,
                    isRTL: a,
                    children: [(0, t.jsx)(c.A, {
                        children: (0, t.jsx)("meta", {
                            name: "theme-color",
                            content: y.bg1
                        })
                    }), (0, t.jsx)(F, {
                        children: (0, t.jsx)(x.A, {
                            children: (0, t.jsx)(be.g, {
                                children: (0, t.jsx)(l.Tp, {})
                            })
                        })
                    })]
                })
            }
        },
        vM3x: function(e, n, r) {
            var t;
            ! function(i) {
                "use strict";
                var a, o = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    c = Math.ceil,
                    l = Math.floor,
                    s = "[BigNumber Error] ",
                    u = s + "Number primitive has more than 15 significant digits: ",
                    m = 1e14,
                    f = 14,
                    d = 9007199254740991,
                    g = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    p = 1e7,
                    h = 1e9;

                function b(e) {
                    var n = 0 | e;
                    return e > 0 || e === n ? n : n - 1
                }

                function y(e) {
                    for (var n, r, t = 1, i = e.length, a = e[0] + ""; t < i;) {
                        for (n = e[t++] + "", r = f - n.length; r--; n = "0" + n);
                        a += n
                    }
                    for (i = a.length; 48 === a.charCodeAt(--i););
                    return a.slice(0, i + 1 || 1)
                }

                function v(e, n) {
                    var r, t, i = e.c,
                        a = n.c,
                        o = e.s,
                        c = n.s,
                        l = e.e,
                        s = n.e;
                    if (!o || !c) return null;
                    if (r = i && !i[0], t = a && !a[0], r || t) return r ? t ? 0 : -c : o;
                    if (o != c) return o;
                    if (r = o < 0, t = l == s, !i || !a) return t ? 0 : !i ^ r ? 1 : -1;
                    if (!t) return l > s ^ r ? 1 : -1;
                    for (c = (l = i.length) < (s = a.length) ? l : s, o = 0; o < c; o++)
                        if (i[o] != a[o]) return i[o] > a[o] ^ r ? 1 : -1;
                    return l == s ? 0 : l > s ^ r ? 1 : -1
                }

                function C(e, n, r, t) {
                    if (e < n || e > r || e !== l(e)) throw Error(s + (t || "Argument") + ("number" == typeof e ? e < n || e > r ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function S(e) {
                    var n = e.c.length - 1;
                    return b(e.e / f) == n && e.c[n] % 2 != 0
                }

                function T(e, n) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (n < 0 ? "e" : "e+") + n
                }

                function D(e, n, r) {
                    var t, i;
                    if (n < 0) {
                        for (i = r + "."; ++n; i += r);
                        e = i + e
                    } else if (++n > (t = e.length)) {
                        for (i = r, n -= t; --n; i += r);
                        e += i
                    } else n < t && (e = e.slice(0, n) + "." + e.slice(n));
                    return e
                }
                a = function e(n) {
                    var r, t, i, a = R.prototype = {
                            constructor: R,
                            toString: null,
                            valueOf: null
                        },
                        w = new R(1),
                        M = 20,
                        _ = 4,
                        F = -7,
                        x = 21,
                        k = -1e7,
                        A = 1e7,
                        N = !1,
                        O = 1,
                        E = 0,
                        $ = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: "\xa0",
                            suffix: ""
                        },
                        L = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function R(e, n) {
                        var r, a, c, s, m, g, p, h, b = this;
                        if (!(b instanceof R)) return new R(e, n);
                        if (null == n) {
                            if (e && !0 === e._isBigNumber) return b.s = e.s, void(!e.c || e.e > A ? b.c = b.e = null : e.e < k ? b.c = [b.e = 0] : (b.e = e.e, b.c = e.c.slice()));
                            if ((g = "number" == typeof e) && 0 * e == 0) {
                                if (b.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (s = 0, m = e; m >= 10; m /= 10, s++);
                                    return void(s > A ? b.c = b.e = null : (b.e = s, b.c = [e]))
                                }
                                h = String(e)
                            } else {
                                if (!o.test(h = String(e))) return i(b, h, g);
                                b.s = 45 == h.charCodeAt(0) ? (h = h.slice(1), -1) : 1
                            }(s = h.indexOf(".")) > -1 && (h = h.replace(".", "")), (m = h.search(/e/i)) > 0 ? (s < 0 && (s = m), s += +h.slice(m + 1), h = h.substring(0, m)) : s < 0 && (s = h.length)
                        } else {
                            if (C(n, 2, L.length, "Base"), 10 == n) return U(b = new R(e), M + b.e + 1, _);
                            if (h = String(e), g = "number" == typeof e) {
                                if (0 * e != 0) return i(b, h, g, n);
                                if (b.s = 1 / e < 0 ? (h = h.slice(1), -1) : 1, R.DEBUG && h.replace(/^0\.0*|\./, "").length > 15) throw Error(u + e)
                            } else b.s = 45 === h.charCodeAt(0) ? (h = h.slice(1), -1) : 1;
                            for (r = L.slice(0, n), s = m = 0, p = h.length; m < p; m++)
                                if (r.indexOf(a = h.charAt(m)) < 0) {
                                    if ("." == a) {
                                        if (m > s) {
                                            s = p;
                                            continue
                                        }
                                    } else if (!c && (h == h.toUpperCase() && (h = h.toLowerCase()) || h == h.toLowerCase() && (h = h.toUpperCase()))) {
                                        c = !0, m = -1, s = 0;
                                        continue
                                    }
                                    return i(b, String(e), g, n)
                                }
                            g = !1, (s = (h = t(h, n, 10, b.s)).indexOf(".")) > -1 ? h = h.replace(".", "") : s = h.length
                        }
                        for (m = 0; 48 === h.charCodeAt(m); m++);
                        for (p = h.length; 48 === h.charCodeAt(--p););
                        if (h = h.slice(m, ++p)) {
                            if (p -= m, g && R.DEBUG && p > 15 && (e > d || e !== l(e))) throw Error(u + b.s * e);
                            if ((s = s - m - 1) > A) b.c = b.e = null;
                            else if (s < k) b.c = [b.e = 0];
                            else {
                                if (b.e = s, b.c = [], m = (s + 1) % f, s < 0 && (m += f), m < p) {
                                    for (m && b.c.push(+h.slice(0, m)), p -= f; m < p;) b.c.push(+h.slice(m, m += f));
                                    m = f - (h = h.slice(m)).length
                                } else m -= p;
                                for (; m--; h += "0");
                                b.c.push(+h)
                            }
                        } else b.c = [b.e = 0]
                    }

                    function B(e, n, r, t) {
                        var i, a, o, c, l;
                        if (null == r ? r = _ : C(r, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], o = e.e, null == n) l = y(e.c), l = 1 == t || 2 == t && (o <= F || o >= x) ? T(l, o) : D(l, o, "0");
                        else if (a = (e = U(new R(e), n, r)).e, c = (l = y(e.c)).length, 1 == t || 2 == t && (n <= a || a <= F)) {
                            for (; c < n; l += "0", c++);
                            l = T(l, a)
                        } else if (n -= o, l = D(l, a, "0"), a + 1 > c) {
                            if (--n > 0)
                                for (l += "."; n--; l += "0");
                        } else if ((n += a - c) > 0)
                            for (a + 1 == c && (l += "."); n--; l += "0");
                        return e.s < 0 && i ? "-" + l : l
                    }

                    function P(e, n) {
                        for (var r, t = 1, i = new R(e[0]); t < e.length; t++) {
                            if (!(r = new R(e[t])).s) {
                                i = r;
                                break
                            }
                            n.call(i, r) && (i = r)
                        }
                        return i
                    }

                    function I(e, n, r) {
                        for (var t = 1, i = n.length; !n[--i]; n.pop());
                        for (i = n[0]; i >= 10; i /= 10, t++);
                        return (r = t + r * f - 1) > A ? e.c = e.e = null : r < k ? e.c = [e.e = 0] : (e.e = r, e.c = n), e
                    }

                    function U(e, n, r, t) {
                        var i, a, o, s, u, d, p, h = e.c,
                            b = g;
                        if (h) {
                            e: {
                                for (i = 1, s = h[0]; s >= 10; s /= 10, i++);
                                if ((a = n - i) < 0) a += f,
                                o = n,
                                p = (u = h[d = 0]) / b[i - o - 1] % 10 | 0;
                                else if ((d = c((a + 1) / f)) >= h.length) {
                                    if (!t) break e;
                                    for (; h.length <= d; h.push(0));
                                    u = p = 0, i = 1, o = (a %= f) - f + 1
                                } else {
                                    for (u = s = h[d], i = 1; s >= 10; s /= 10, i++);
                                    p = (o = (a %= f) - f + i) < 0 ? 0 : u / b[i - o - 1] % 10 | 0
                                }
                                if (t = t || n < 0 || null != h[d + 1] || (o < 0 ? u : u % b[i - o - 1]), t = r < 4 ? (p || t) && (0 == r || r == (e.s < 0 ? 3 : 2)) : p > 5 || 5 == p && (4 == r || t || 6 == r && (a > 0 ? o > 0 ? u / b[i - o] : 0 : h[d - 1]) % 10 & 1 || r == (e.s < 0 ? 8 : 7)), n < 1 || !h[0]) return h.length = 0, t ? (n -= e.e + 1, h[0] = b[(f - n % f) % f], e.e = -n || 0) : h[0] = e.e = 0, e;
                                if (0 == a ? (h.length = d, s = 1, d--) : (h.length = d + 1, s = b[f - a], h[d] = o > 0 ? l(u / b[i - o] % b[o]) * s : 0), t)
                                    for (;;) {
                                        if (0 == d) {
                                            for (a = 1, o = h[0]; o >= 10; o /= 10, a++);
                                            for (o = h[0] += s, s = 1; o >= 10; o /= 10, s++);
                                            a != s && (e.e++, h[0] == m && (h[0] = 1));
                                            break
                                        }
                                        if (h[d] += s, h[d] != m) break;
                                        h[d--] = 0, s = 1
                                    }
                                for (a = h.length; 0 === h[--a]; h.pop());
                            }
                            e.e > A ? e.c = e.e = null : e.e < k && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function Y(e) {
                        var n, r = e.e;
                        return null === r ? e.toString() : (n = y(e.c), n = r <= F || r >= x ? T(n, r) : D(n, r, "0"), e.s < 0 ? "-" + n : n)
                    }
                    return R.clone = e, R.ROUND_UP = 0, R.ROUND_DOWN = 1, R.ROUND_CEIL = 2, R.ROUND_FLOOR = 3, R.ROUND_HALF_UP = 4, R.ROUND_HALF_DOWN = 5, R.ROUND_HALF_EVEN = 6, R.ROUND_HALF_CEIL = 7, R.ROUND_HALF_FLOOR = 8, R.EUCLID = 9, R.config = R.set = function(e) {
                        var n, r;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(s + "Object expected: " + e);
                            if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (C(r = e[n], 0, h, n), M = r), e.hasOwnProperty(n = "ROUNDING_MODE") && (C(r = e[n], 0, 8, n), _ = r), e.hasOwnProperty(n = "EXPONENTIAL_AT") && ((r = e[n]) && r.pop ? (C(r[0], -h, 0, n), C(r[1], 0, h, n), F = r[0], x = r[1]) : (C(r, -h, h, n), F = -(x = r < 0 ? -r : r))), e.hasOwnProperty(n = "RANGE"))
                                if ((r = e[n]) && r.pop) C(r[0], -h, -1, n), C(r[1], 1, h, n), k = r[0], A = r[1];
                                else {
                                    if (C(r, -h, h, n), !r) throw Error(s + n + " cannot be zero: " + r);
                                    k = -(A = r < 0 ? -r : r)
                                }
                            if (e.hasOwnProperty(n = "CRYPTO")) {
                                if ((r = e[n]) !== !!r) throw Error(s + n + " not true or false: " + r);
                                if (r) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw N = !r, Error(s + "crypto unavailable");
                                    N = r
                                } else N = r
                            }
                            if (e.hasOwnProperty(n = "MODULO_MODE") && (C(r = e[n], 0, 9, n), O = r), e.hasOwnProperty(n = "POW_PRECISION") && (C(r = e[n], 0, h, n), E = r), e.hasOwnProperty(n = "FORMAT")) {
                                if ("object" != typeof(r = e[n])) throw Error(s + n + " not an object: " + r);
                                $ = r
                            }
                            if (e.hasOwnProperty(n = "ALPHABET")) {
                                if ("string" != typeof(r = e[n]) || /^.?$|[+\-.\s]|(.).*\1/.test(r)) throw Error(s + n + " invalid: " + r);
                                L = r
                            }
                        }
                        return {
                            DECIMAL_PLACES: M,
                            ROUNDING_MODE: _,
                            EXPONENTIAL_AT: [F, x],
                            RANGE: [k, A],
                            CRYPTO: N,
                            MODULO_MODE: O,
                            POW_PRECISION: E,
                            FORMAT: $,
                            ALPHABET: L
                        }
                    }, R.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!R.DEBUG) return !0;
                        var n, r, t = e.c,
                            i = e.e,
                            a = e.s;
                        e: if ("[object Array]" == {}.toString.call(t)) {
                            if ((1 === a || -1 === a) && i >= -h && i <= h && i === l(i)) {
                                if (0 === t[0]) {
                                    if (0 === i && 1 === t.length) return !0;
                                    break e
                                }
                                if ((n = (i + 1) % f) < 1 && (n += f), String(t[0]).length == n) {
                                    for (n = 0; n < t.length; n++)
                                        if ((r = t[n]) < 0 || r >= m || r !== l(r)) break e;
                                    if (0 !== r) return !0
                                }
                            }
                        } else
                        if (null === t && null === i && (null === a || 1 === a || -1 === a)) return !0;
                        throw Error(s + "Invalid BigNumber: " + e)
                    }, R.maximum = R.max = function() {
                        return P(arguments, a.lt)
                    }, R.minimum = R.min = function() {
                        return P(arguments, a.gt)
                    }, R.random = function() {
                        var e = 9007199254740992,
                            n = Math.random() * e & 2097151 ? function() {
                                return l(Math.random() * e)
                            } : function() {
                                return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                            };
                        return function(e) {
                            var r, t, i, a, o, u = 0,
                                m = [],
                                d = new R(w);
                            if (null == e ? e = M : C(e, 0, h), a = c(e / f), N)
                                if (crypto.getRandomValues) {
                                    for (r = crypto.getRandomValues(new Uint32Array(a *= 2)); u < a;)(o = 131072 * r[u] + (r[u + 1] >>> 11)) >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)), r[u] = t[0], r[u + 1] = t[1]) : (m.push(o % 1e14), u += 2);
                                    u = a / 2
                                } else {
                                    if (!crypto.randomBytes) throw N = !1, Error(s + "crypto unavailable");
                                    for (r = crypto.randomBytes(a *= 7); u < a;)(o = 281474976710656 * (31 & r[u]) + 1099511627776 * r[u + 1] + 4294967296 * r[u + 2] + 16777216 * r[u + 3] + (r[u + 4] << 16) + (r[u + 5] << 8) + r[u + 6]) >= 9e15 ? crypto.randomBytes(7).copy(r, u) : (m.push(o % 1e14), u += 7);
                                    u = a / 7
                                }
                            if (!N)
                                for (; u < a;)(o = n()) < 9e15 && (m[u++] = o % 1e14);
                            for (a = m[--u], e %= f, a && e && (o = g[f - e], m[u] = l(a / o) * o); 0 === m[u]; m.pop(), u--);
                            if (u < 0) m = [i = 0];
                            else {
                                for (i = -1; 0 === m[0]; m.splice(0, 1), i -= f);
                                for (u = 1, o = m[0]; o >= 10; o /= 10, u++);
                                u < f && (i -= f - u)
                            }
                            return d.e = i, d.c = m, d
                        }
                    }(), R.sum = function() {
                        for (var e = 1, n = arguments, r = new R(n[0]); e < n.length;) r = r.plus(n[e++]);
                        return r
                    }, t = function() {
                        var e = "0123456789";

                        function n(e, n, r, t) {
                            for (var i, a, o = [0], c = 0, l = e.length; c < l;) {
                                for (a = o.length; a--; o[a] *= n);
                                for (o[0] += t.indexOf(e.charAt(c++)), i = 0; i < o.length; i++) o[i] > r - 1 && (null == o[i + 1] && (o[i + 1] = 0), o[i + 1] += o[i] / r | 0, o[i] %= r)
                            }
                            return o.reverse()
                        }
                        return function(t, i, a, o, c) {
                            var l, s, u, m, f, d, g, p, h = t.indexOf("."),
                                b = M,
                                v = _;
                            for (h >= 0 && (m = E, E = 0, t = t.replace(".", ""), d = (p = new R(i)).pow(t.length - h), E = m, p.c = n(D(y(d.c), d.e, "0"), 10, a, e), p.e = p.c.length), u = m = (g = n(t, i, a, c ? (l = L, e) : (l = e, L))).length; 0 == g[--m]; g.pop());
                            if (!g[0]) return l.charAt(0);
                            if (h < 0 ? --u : (d.c = g, d.e = u, d.s = o, g = (d = r(d, p, b, v, a)).c, f = d.r, u = d.e), h = g[s = u + b + 1], m = a / 2, f = f || s < 0 || null != g[s + 1], f = v < 4 ? (null != h || f) && (0 == v || v == (d.s < 0 ? 3 : 2)) : h > m || h == m && (4 == v || f || 6 == v && 1 & g[s - 1] || v == (d.s < 0 ? 8 : 7)), s < 1 || !g[0]) t = f ? D(l.charAt(1), -b, l.charAt(0)) : l.charAt(0);
                            else {
                                if (g.length = s, f)
                                    for (--a; ++g[--s] > a;) g[s] = 0, s || (++u, g = [1].concat(g));
                                for (m = g.length; !g[--m];);
                                for (h = 0, t = ""; h <= m; t += l.charAt(g[h++]));
                                t = D(t, u, l.charAt(0))
                            }
                            return t
                        }
                    }(), r = function() {
                        function e(e, n, r) {
                            var t, i, a, o, c = 0,
                                l = e.length,
                                s = n % p,
                                u = n / p | 0;
                            for (e = e.slice(); l--;) c = ((i = s * (a = e[l] % p) + (t = u * a + (o = e[l] / p | 0) * s) % p * p + c) / r | 0) + (t / p | 0) + u * o, e[l] = i % r;
                            return c && (e = [c].concat(e)), e
                        }

                        function n(e, n, r, t) {
                            var i, a;
                            if (r != t) a = r > t ? 1 : -1;
                            else
                                for (i = a = 0; i < r; i++)
                                    if (e[i] != n[i]) {
                                        a = e[i] > n[i] ? 1 : -1;
                                        break
                                    } return a
                        }

                        function r(e, n, r, t) {
                            for (var i = 0; r--;) e[r] -= i, i = e[r] < n[r] ? 1 : 0, e[r] = i * t + e[r] - n[r];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(t, i, a, o, c) {
                            var s, u, d, g, p, h, y, v, C, S, T, D, w, M, _, F, x, k = t.s == i.s ? 1 : -1,
                                A = t.c,
                                N = i.c;
                            if (!A || !A[0] || !N || !N[0]) return new R(t.s && i.s && (A ? !N || A[0] != N[0] : N) ? A && 0 == A[0] || !N ? 0 * k : k / 0 : NaN);
                            for (C = (v = new R(k)).c = [], k = a + (u = t.e - i.e) + 1, c || (c = m, u = b(t.e / f) - b(i.e / f), k = k / f | 0), d = 0; N[d] == (A[d] || 0); d++);
                            if (N[d] > (A[d] || 0) && u--, k < 0) C.push(1), g = !0;
                            else {
                                for (M = A.length, F = N.length, d = 0, k += 2, (p = l(c / (N[0] + 1))) > 1 && (N = e(N, p, c), A = e(A, p, c), F = N.length, M = A.length), w = F, T = (S = A.slice(0, F)).length; T < F; S[T++] = 0);
                                x = N.slice(), x = [0].concat(x), _ = N[0], N[1] >= c / 2 && _++;
                                do {
                                    if (p = 0, (s = n(N, S, F, T)) < 0) {
                                        if (D = S[0], F != T && (D = D * c + (S[1] || 0)), (p = l(D / _)) > 1)
                                            for (p >= c && (p = c - 1), y = (h = e(N, p, c)).length, T = S.length; 1 == n(h, S, y, T);) p--, r(h, F < y ? x : N, y, c), y = h.length, s = 1;
                                        else 0 == p && (s = p = 1), y = (h = N.slice()).length;
                                        if (y < T && (h = [0].concat(h)), r(S, h, T, c), T = S.length, -1 == s)
                                            for (; n(N, S, F, T) < 1;) p++, r(S, F < T ? x : N, T, c), T = S.length
                                    } else 0 === s && (p++, S = [0]);
                                    C[d++] = p, S[0] ? S[T++] = A[w] || 0 : (S = [A[w]], T = 1)
                                } while ((w++ < M || null != S[0]) && k--);
                                g = null != S[0], C[0] || C.splice(0, 1)
                            }
                            if (c == m) {
                                for (d = 1, k = C[0]; k >= 10; k /= 10, d++);
                                U(v, a + (v.e = d + u * f - 1) + 1, o, g)
                            } else v.e = u, v.r = +g;
                            return v
                        }
                    }(), i = function() {
                        var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                            n = /^([^.]+)\.$/,
                            r = /^\.([^.]+)$/,
                            t = /^-?(Infinity|NaN)$/,
                            i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                        return function(a, o, c, l) {
                            var u, m = c ? o : o.replace(i, "");
                            if (t.test(m)) a.s = isNaN(m) ? null : m < 0 ? -1 : 1;
                            else {
                                if (!c && (m = m.replace(e, (function(e, n, r) {
                                        return u = "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8, l && l != u ? e : n
                                    })), l && (u = l, m = m.replace(n, "$1").replace(r, "0.$1")), o != m)) return new R(m, u);
                                if (R.DEBUG) throw Error(s + "Not a" + (l ? " base " + l : "") + " number: " + o);
                                a.s = null
                            }
                            a.c = a.e = null
                        }
                    }(), a.absoluteValue = a.abs = function() {
                        var e = new R(this);
                        return e.s < 0 && (e.s = 1), e
                    }, a.comparedTo = function(e, n) {
                        return v(this, new R(e, n))
                    }, a.decimalPlaces = a.dp = function(e, n) {
                        var r, t, i, a = this;
                        if (null != e) return C(e, 0, h), null == n ? n = _ : C(n, 0, 8), U(new R(a), e + a.e + 1, n);
                        if (!(r = a.c)) return null;
                        if (t = ((i = r.length - 1) - b(this.e / f)) * f, i = r[i])
                            for (; i % 10 == 0; i /= 10, t--);
                        return t < 0 && (t = 0), t
                    }, a.dividedBy = a.div = function(e, n) {
                        return r(this, new R(e, n), M, _)
                    }, a.dividedToIntegerBy = a.idiv = function(e, n) {
                        return r(this, new R(e, n), 0, 1)
                    }, a.exponentiatedBy = a.pow = function(e, n) {
                        var r, t, i, a, o, u, m, d, g = this;
                        if ((e = new R(e)).c && !e.isInteger()) throw Error(s + "Exponent not an integer: " + Y(e));
                        if (null != n && (n = new R(n)), o = e.e > 14, !g.c || !g.c[0] || 1 == g.c[0] && !g.e && 1 == g.c.length || !e.c || !e.c[0]) return d = new R(Math.pow(+Y(g), o ? 2 - S(e) : +Y(e))), n ? d.mod(n) : d;
                        if (u = e.s < 0, n) {
                            if (n.c ? !n.c[0] : !n.s) return new R(NaN);
                            (t = !u && g.isInteger() && n.isInteger()) && (g = g.mod(n))
                        } else {
                            if (e.e > 9 && (g.e > 0 || g.e < -1 || (0 == g.e ? g.c[0] > 1 || o && g.c[1] >= 24e7 : g.c[0] < 8e13 || o && g.c[0] <= 9999975e7))) return a = g.s < 0 && S(e) ? -0 : 0, g.e > -1 && (a = 1 / a), new R(u ? 1 / a : a);
                            E && (a = c(E / f + 2))
                        }
                        for (o ? (r = new R(.5), u && (e.s = 1), m = S(e)) : m = (i = Math.abs(+Y(e))) % 2, d = new R(w);;) {
                            if (m) {
                                if (!(d = d.times(g)).c) break;
                                a ? d.c.length > a && (d.c.length = a) : t && (d = d.mod(n))
                            }
                            if (i) {
                                if (0 === (i = l(i / 2))) break;
                                m = i % 2
                            } else if (U(e = e.times(r), e.e + 1, 1), e.e > 14) m = S(e);
                            else {
                                if (0 === (i = +Y(e))) break;
                                m = i % 2
                            }
                            g = g.times(g), a ? g.c && g.c.length > a && (g.c.length = a) : t && (g = g.mod(n))
                        }
                        return t ? d : (u && (d = w.div(d)), n ? d.mod(n) : a ? U(d, E, _, undefined) : d)
                    }, a.integerValue = function(e) {
                        var n = new R(this);
                        return null == e ? e = _ : C(e, 0, 8), U(n, n.e + 1, e)
                    }, a.isEqualTo = a.eq = function(e, n) {
                        return 0 === v(this, new R(e, n))
                    }, a.isFinite = function() {
                        return !!this.c
                    }, a.isGreaterThan = a.gt = function(e, n) {
                        return v(this, new R(e, n)) > 0
                    }, a.isGreaterThanOrEqualTo = a.gte = function(e, n) {
                        return 1 === (n = v(this, new R(e, n))) || 0 === n
                    }, a.isInteger = function() {
                        return !!this.c && b(this.e / f) > this.c.length - 2
                    }, a.isLessThan = a.lt = function(e, n) {
                        return v(this, new R(e, n)) < 0
                    }, a.isLessThanOrEqualTo = a.lte = function(e, n) {
                        return -1 === (n = v(this, new R(e, n))) || 0 === n
                    }, a.isNaN = function() {
                        return !this.s
                    }, a.isNegative = function() {
                        return this.s < 0
                    }, a.isPositive = function() {
                        return this.s > 0
                    }, a.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, a.minus = function(e, n) {
                        var r, t, i, a, o = this,
                            c = o.s;
                        if (n = (e = new R(e, n)).s, !c || !n) return new R(NaN);
                        if (c != n) return e.s = -n, o.plus(e);
                        var l = o.e / f,
                            s = e.e / f,
                            u = o.c,
                            d = e.c;
                        if (!l || !s) {
                            if (!u || !d) return u ? (e.s = -n, e) : new R(d ? o : NaN);
                            if (!u[0] || !d[0]) return d[0] ? (e.s = -n, e) : new R(u[0] ? o : 3 == _ ? -0 : 0)
                        }
                        if (l = b(l), s = b(s), u = u.slice(), c = l - s) {
                            for ((a = c < 0) ? (c = -c, i = u) : (s = l, i = d), i.reverse(), n = c; n--; i.push(0));
                            i.reverse()
                        } else
                            for (t = (a = (c = u.length) < (n = d.length)) ? c : n, c = n = 0; n < t; n++)
                                if (u[n] != d[n]) {
                                    a = u[n] < d[n];
                                    break
                                } if (a && (i = u, u = d, d = i, e.s = -e.s), (n = (t = d.length) - (r = u.length)) > 0)
                            for (; n--; u[r++] = 0);
                        for (n = m - 1; t > c;) {
                            if (u[--t] < d[t]) {
                                for (r = t; r && !u[--r]; u[r] = n);
                                --u[r], u[t] += m
                            }
                            u[t] -= d[t]
                        }
                        for (; 0 == u[0]; u.splice(0, 1), --s);
                        return u[0] ? I(e, u, s) : (e.s = 3 == _ ? -1 : 1, e.c = [e.e = 0], e)
                    }, a.modulo = a.mod = function(e, n) {
                        var t, i, a = this;
                        return e = new R(e, n), !a.c || !e.s || e.c && !e.c[0] ? new R(NaN) : !e.c || a.c && !a.c[0] ? new R(a) : (9 == O ? (i = e.s, e.s = 1, t = r(a, e, 0, 3), e.s = i, t.s *= i) : t = r(a, e, 0, O), (e = a.minus(t.times(e))).c[0] || 1 != O || (e.s = a.s), e)
                    }, a.multipliedBy = a.times = function(e, n) {
                        var r, t, i, a, o, c, l, s, u, d, g, h, y, v, C, S = this,
                            T = S.c,
                            D = (e = new R(e, n)).c;
                        if (!T || !D || !T[0] || !D[0]) return !S.s || !e.s || T && !T[0] && !D || D && !D[0] && !T ? e.c = e.e = e.s = null : (e.s *= S.s, T && D ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (t = b(S.e / f) + b(e.e / f), e.s *= S.s, (l = T.length) < (d = D.length) && (y = T, T = D, D = y, i = l, l = d, d = i), i = l + d, y = []; i--; y.push(0));
                        for (v = m, C = p, i = d; --i >= 0;) {
                            for (r = 0, g = D[i] % C, h = D[i] / C | 0, a = i + (o = l); a > i;) r = ((s = g * (s = T[--o] % C) + (c = h * s + (u = T[o] / C | 0) * g) % C * C + y[a] + r) / v | 0) + (c / C | 0) + h * u, y[a--] = s % v;
                            y[a] = r
                        }
                        return r ? ++t : y.splice(0, 1), I(e, y, t)
                    }, a.negated = function() {
                        var e = new R(this);
                        return e.s = -e.s || null, e
                    }, a.plus = function(e, n) {
                        var r, t = this,
                            i = t.s;
                        if (n = (e = new R(e, n)).s, !i || !n) return new R(NaN);
                        if (i != n) return e.s = -n, t.minus(e);
                        var a = t.e / f,
                            o = e.e / f,
                            c = t.c,
                            l = e.c;
                        if (!a || !o) {
                            if (!c || !l) return new R(i / 0);
                            if (!c[0] || !l[0]) return l[0] ? e : new R(c[0] ? t : 0 * i)
                        }
                        if (a = b(a), o = b(o), c = c.slice(), i = a - o) {
                            for (i > 0 ? (o = a, r = l) : (i = -i, r = c), r.reverse(); i--; r.push(0));
                            r.reverse()
                        }
                        for ((i = c.length) - (n = l.length) < 0 && (r = l, l = c, c = r, n = i), i = 0; n;) i = (c[--n] = c[n] + l[n] + i) / m | 0, c[n] = m === c[n] ? 0 : c[n] % m;
                        return i && (c = [i].concat(c), ++o), I(e, c, o)
                    }, a.precision = a.sd = function(e, n) {
                        var r, t, i, a = this;
                        if (null != e && e !== !!e) return C(e, 1, h), null == n ? n = _ : C(n, 0, 8), U(new R(a), e, n);
                        if (!(r = a.c)) return null;
                        if (t = (i = r.length - 1) * f + 1, i = r[i]) {
                            for (; i % 10 == 0; i /= 10, t--);
                            for (i = r[0]; i >= 10; i /= 10, t++);
                        }
                        return e && a.e + 1 > t && (t = a.e + 1), t
                    }, a.shiftedBy = function(e) {
                        return C(e, -9007199254740991, d), this.times("1e" + e)
                    }, a.squareRoot = a.sqrt = function() {
                        var e, n, t, i, a, o = this,
                            c = o.c,
                            l = o.s,
                            s = o.e,
                            u = M + 4,
                            m = new R("0.5");
                        if (1 !== l || !c || !c[0]) return new R(!l || l < 0 && (!c || c[0]) ? NaN : c ? o : 1 / 0);
                        if (0 == (l = Math.sqrt(+Y(o))) || l == 1 / 0 ? (((n = y(c)).length + s) % 2 == 0 && (n += "0"), l = Math.sqrt(+n), s = b((s + 1) / 2) - (s < 0 || s % 2), t = new R(n = l == 1 / 0 ? "5e" + s : (n = l.toExponential()).slice(0, n.indexOf("e") + 1) + s)) : t = new R(l + ""), t.c[0])
                            for ((l = (s = t.e) + u) < 3 && (l = 0);;)
                                if (a = t, t = m.times(a.plus(r(o, a, u, 1))), y(a.c).slice(0, l) === (n = y(t.c)).slice(0, l)) {
                                    if (t.e < s && --l, "9999" != (n = n.slice(l - 3, l + 1)) && (i || "4999" != n)) {
                                        +n && (+n.slice(1) || "5" != n.charAt(0)) || (U(t, t.e + M + 2, 1), e = !t.times(t).eq(o));
                                        break
                                    }
                                    if (!i && (U(a, a.e + M + 2, 0), a.times(a).eq(o))) {
                                        t = a;
                                        break
                                    }
                                    u += 4, l += 4, i = 1
                                }
                        return U(t, t.e + M + 1, _, e)
                    }, a.toExponential = function(e, n) {
                        return null != e && (C(e, 0, h), e++), B(this, e, n, 1)
                    }, a.toFixed = function(e, n) {
                        return null != e && (C(e, 0, h), e = e + this.e + 1), B(this, e, n)
                    }, a.toFormat = function(e, n, r) {
                        var t, i = this;
                        if (null == r) null != e && n && "object" == typeof n ? (r = n, n = null) : e && "object" == typeof e ? (r = e, e = n = null) : r = $;
                        else if ("object" != typeof r) throw Error(s + "Argument not an object: " + r);
                        if (t = i.toFixed(e, n), i.c) {
                            var a, o = t.split("."),
                                c = +r.groupSize,
                                l = +r.secondaryGroupSize,
                                u = r.groupSeparator || "",
                                m = o[0],
                                f = o[1],
                                d = i.s < 0,
                                g = d ? m.slice(1) : m,
                                p = g.length;
                            if (l && (a = c, c = l, l = a, p -= a), c > 0 && p > 0) {
                                for (a = p % c || c, m = g.substr(0, a); a < p; a += c) m += u + g.substr(a, c);
                                l > 0 && (m += u + g.slice(a)), d && (m = "-" + m)
                            }
                            t = f ? m + (r.decimalSeparator || "") + ((l = +r.fractionGroupSize) ? f.replace(new RegExp("\\d{" + l + "}\\B", "g"), "$&" + (r.fractionGroupSeparator || "")) : f) : m
                        }
                        return (r.prefix || "") + t + (r.suffix || "")
                    }, a.toFraction = function(e) {
                        var n, t, i, a, o, c, l, u, m, d, p, h, b = this,
                            v = b.c;
                        if (null != e && (!(l = new R(e)).isInteger() && (l.c || 1 !== l.s) || l.lt(w))) throw Error(s + "Argument " + (l.isInteger() ? "out of range: " : "not an integer: ") + Y(l));
                        if (!v) return new R(b);
                        for (n = new R(w), m = t = new R(w), i = u = new R(w), h = y(v), o = n.e = h.length - b.e - 1, n.c[0] = g[(c = o % f) < 0 ? f + c : c], e = !e || l.comparedTo(n) > 0 ? o > 0 ? n : m : l, c = A, A = 1 / 0, l = new R(h), u.c[0] = 0; d = r(l, n, 0, 1), 1 != (a = t.plus(d.times(i))).comparedTo(e);) t = i, i = a, m = u.plus(d.times(a = m)), u = a, n = l.minus(d.times(a = n)), l = a;
                        return a = r(e.minus(t), i, 0, 1), u = u.plus(a.times(m)), t = t.plus(a.times(i)), u.s = m.s = b.s, p = r(m, i, o *= 2, _).minus(b).abs().comparedTo(r(u, t, o, _).minus(b).abs()) < 1 ? [m, i] : [u, t], A = c, p
                    }, a.toNumber = function() {
                        return +Y(this)
                    }, a.toPrecision = function(e, n) {
                        return null != e && C(e, 1, h), B(this, e, n, 2)
                    }, a.toString = function(e) {
                        var n, r = this,
                            i = r.s,
                            a = r.e;
                        return null === a ? i ? (n = "Infinity", i < 0 && (n = "-" + n)) : n = "NaN" : (null == e ? n = a <= F || a >= x ? T(y(r.c), a) : D(y(r.c), a, "0") : 10 === e ? n = D(y((r = U(new R(r), M + a + 1, _)).c), r.e, "0") : (C(e, 2, L.length, "Base"), n = t(D(y(r.c), a, "0"), 10, e, i, !0)), i < 0 && r.c[0] && (n = "-" + n)), n
                    }, a.valueOf = a.toJSON = function() {
                        return Y(this)
                    }, a._isBigNumber = !0, null != n && R.set(n), R
                }(), a.default = a.BigNumber = a, void 0 === (t = function() {
                    return a
                }.call(n, r, n, e)) || (e.exports = t)
            }()
        }
    }
]);
//# debugId=5791e78b-6d7c-52e5-803a-157566bafd59