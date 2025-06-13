! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8ada4705-fc98-5bde-abe8-7e3058123bb5")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [165], {
        "7xnE": (e, n, t) => {
            "use strict";
            t.d(n, {
                s: () => u
            });
            var r = t("BK7R"),
                i = t("QUKP"),
                a = t("VP0d"),
                s = t("tEf9"),
                o = t("DTvD"),
                c = t("Mco/");

            function u(e, n, t) {
                var u = (0, o.useRef)(0),
                    l = function() {
                        var e = (0, o.useRef)(!1);
                        return (0, o.useEffect)((function() {
                            return e.current = !0,
                                function() {
                                    e.current = !1
                                }
                        }), []), (0, o.useCallback)((function() {
                            return e.current
                        }), [])
                    }(),
                    d = (0, a.A)((0, o.useState)(Date.now()), 2),
                    f = d[0],
                    p = d[1],
                    v = (0, a.A)((0, o.useState)((0, r.A)({
                        loading: !0,
                        updateTime: Date.now()
                    }, t)), 2),
                    x = v[0],
                    g = v[1];
                return (0, o.useEffect)((function() {
                    var n = ++u.current;
                    !1 === x.loading && g((0, i.A)((0, r.A)({}, x), {
                        loading: !0
                    })), e().then((function(e) {
                        var r = null === e || "undefined" === typeof e ? null === t || void 0 === t ? void 0 : t.value : e;
                        l() && n === u.current && (0, c.t)((function() {
                            g({
                                value: r,
                                loading: !1,
                                error: null,
                                updateTime: Date.now()
                            })
                        }))
                    })).catch((function(e) {
                        l() && n === u.current && (0, c.t)((function() {
                            g((0, i.A)((0, r.A)({}, t), {
                                loading: !1,
                                error: e,
                                updateTime: Date.now()
                            }))
                        }))
                    }))
                }), (0, s.A)(n).concat([f])), (0, i.A)((0, r.A)({}, x), {
                    onRefresh: function() {
                        return p(Date.now)
                    }
                })
            }
        },
        "WZ/o": (e, n, t) => {
            "use strict";
            t.d(n, {
                cn: () => a
            });
            var r = t("7O4Y"),
                i = t("9EqV");

            function a() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return (0, i.Q)((0, r.A)(n))
            }
        },
        eEXy: (e, n, t) => {
            "use strict";
            t.d(n, {
                Q: () => i
            });
            var r = t("HS2I");

            function i() {
                var e = (0, r.useMediaState)(),
                    n = e.isDesktop;
                return {
                    isMobile: e.isMobile,
                    isTablet: e.isTablet,
                    isDesktop: n
                }
            }
        },
        "9rW+": (e, n, t) => {
            "use strict";
            t.d(n, {
                OP: () => ae,
                gD: () => F,
                VZ: () => ee,
                Rh: () => G,
                YQ: () => m,
                Ap: () => p,
                ui: () => l
            });
            var r = t("BK7R"),
                i = t("QUKP"),
                a = t("gZfF"),
                s = t("TrCV"),
                o = t("DTvD"),
                c = t.n(o),
                u = t("yhUQ");
            const l = c().memo((function(e) {
                var n = e.value,
                    t = e.line,
                    o = e.direction,
                    c = void 0 === o ? null : o,
                    l = e.children,
                    d = e.className,
                    f = (0, a.A)(e, ["value", "line", "direction", "children", "className"]);
                return (0, s.jsx)(u.A, (0, i.A)((0, r.A)({}, f), {
                    __css: {
                        display: "-webkit-box",
                        wordBreak: "break-word",
                        WebkitBoxOrient: "vertical"
                    },
                    style: {
                        direction: c,
                        overflow: "hidden",
                        WebkitLineClamp: t || 1,
                        lineHeight: "16px"
                    },
                    children: null !== n && void 0 !== n ? n : l,
                    className: d
                }))
            }));
            var d = t("LCuF"),
                f = function(e) {
                    var n = e.style,
                        t = void 0 === n ? {} : n,
                        o = (0, a.A)(e, ["style"]);
                    return t.direction = "ltr", (0, s.jsx)(d.A, (0, i.A)((0, r.A)({}, o), {
                        style: t
                    }))
                };
            const p = (0, o.memo)(f);
            var v = t("C6y2"),
                x = t("N/Ki"),
                g = t("vtOj");
            const m = function(e) {
                var n = e.children,
                    t = e.textDesc,
                    o = (0, a.A)(e, ["children", "textDesc"]),
                    c = (0, x.Ef)().getI18n,
                    l = n || (0, s.jsx)(u.A, {
                        sx: {
                            fontSize: 1
                        },
                        children: t || c("common-noRecord")
                    });
                return (0, s.jsx)(v.A, (0, i.A)((0, r.A)({}, o), {
                    __css: {
                        flex: 1,
                        justifyContent: "center"
                    },
                    children: (0, s.jsxs)(v.A, {
                        sx: {
                            textAlign: "center",
                            my: ["sm", "md"],
                            color: "t.third",
                            alignItems: "center",
                            flexDirection: "column"
                        },
                        className: "noDataClass",
                        children: [(0, s.jsx)(g.A, {
                            className: "icon-dir m-m mb-xl h-[96px] w-[96px]"
                        }), l]
                    })
                }))
            };
            var h = t("sViW"),
                w = t("ezuS"),
                b = t("Pz56"),
                A = t.n(b),
                y = t("jLkM"),
                k = t.n(y),
                E = t("7xnE"),
                R = t("AcsR"),
                j = t("mFFV"),
                z = t("UPra"),
                C = c().createContext({
                    values: [],
                    hasMore: !1,
                    loading: !1,
                    showMore: function() {
                        return Promise.resolve()
                    }
                }),
                T = "".concat(R.j0, "/stream?streams=abnormaltradingnotices"),
                $ = function(e) {
                    var n = e.baseAsset,
                        t = e.quotaAsset,
                        r = e.priceChange,
                        i = e.eventType,
                        a = e.createTimestamp,
                        s = e.updateTimestamp,
                        o = e.sendTimestamp;
                    return {
                        ba: n,
                        qa: t,
                        change: r,
                        type: i,
                        time: s || a || o,
                        period: e.period,
                        volume: e.volume
                    }
                },
                D = function() {},
                I = function(e) {
                    var n = e.noticeType,
                        t = e.symbol;
                    return "".concat(n, "#").concat(t)
                },
                P = Date.now(),
                S = P - 864e5,
                N = function(e) {
                    var n = e.children,
                        t = c().useRef(D),
                        a = c().useRef(!1),
                        u = (0, o.useState)(1),
                        l = u[0],
                        d = u[1],
                        f = (0, o.useState)([]),
                        p = f[0],
                        v = f[1],
                        x = (0, o.useState)([]),
                        g = x[0],
                        m = x[1],
                        b = (0, E.s)((0, h.A)(A().mark((function e() {
                            var n, r, i, s, o;
                            return A().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, z.T)({
                                            pageIndex: l,
                                            pageSize: 100,
                                            startTime: S,
                                            endTime: P
                                        });
                                    case 2:
                                        n = e.sent, r = n.data, i = void 0 === r ? [] : r, s = n.total, o = i.reduceRight((function(e, n) {
                                            return e[I(n)] = $(n), e
                                        }), {}), v(o), m((function(e) {
                                            var n = e.concat(i.map(I)),
                                                r = n.length;
                                            return a.current = r < Math.min(1e3, s), setTimeout(t.current, 1e3 / 3), k()(n)
                                        }));
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [l], {
                            value: 0
                        }).loading;
                    return (0, o.useEffect)((function() {
                        var e = new j.xn(T, {
                            onmessage: function(e) {
                                var n = JSON.parse(e.data).data,
                                    t = I(n);
                                v(function(e, n) {
                                    return function(t) {
                                        return t[e] ? (0, i.A)((0, r.A)({}, t), (0, w.A)({}, e, $(n))) : t
                                    }
                                }(t, n))
                            }
                        });
                        return function() {
                            return e.close()
                        }
                    }), []), (0, s.jsx)(C.Provider, {
                        value: {
                            loading: b,
                            hasMore: a.current,
                            showMore: (0, o.useCallback)((function() {
                                return d((function(e) {
                                    return e + 1
                                })), new Promise((function(e) {
                                    t.current = e
                                }))
                            })),
                            values: g.map((function(e) {
                                return p[e]
                            }))
                        },
                        children: n
                    })
                };
            N.useJPushList = function() {
                return c().useContext(C)
            };
            const F = N;
            var M = t("WZ/o"),
                _ = t("N/Z2"),
                U = t("hTvQ"),
                L = t.n(U),
                O = t("06hb"),
                Z = t("Y7o/");

            function B() {
                var e = (0, _.A)(["\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1.0);\n  }\n"]);
                return B = function() {
                    return e
                }, e
            }

            function Q() {
                var e = (0, _.A)(["\n  position: ", ";\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 2000;\n"]);
                return Q = function() {
                    return e
                }, e
            }

            function V() {
                var e = (0, _.A)(["\n  width: 50px;\n  height: 35px;\n  text-align: center;\n  font-size: 10px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n  z-index: 100;\n\n  & > div {\n    background-color: #f5bc00;\n    height: 100%;\n    width: 3px;\n    display: inline-block;\n    margin: 0 3px;\n    animation: ", " 1.2s infinite ease-in-out;\n  }\n\n  & > .rect2 {\n    animation-delay: -1.1s;\n  }\n\n  & > .rect3 {\n    animation-delay: -1s;\n  }\n\n  & > .rect4 {\n    animation-delay: -0.9s;\n  }\n\n  & > .rect5 {\n    animation-delay: -0.8s;\n  }\n"]);
                return V = function() {
                    return e
                }, e
            }
            var X = (0, O.keyframes)(B()),
                K = Z.default.div(Q(), (function(e) {
                    return e.inner ? "absolute" : "fixed"
                })),
                W = Z.default.div(V(), X),
                Y = null,
                J = function(e) {
                    var n = e.show,
                        t = void 0 === n || n,
                        r = e.fullScreen,
                        i = void 0 !== r && r,
                        a = e.inner,
                        o = e.children,
                        u = void 0 === o ? null : o;
                    if (!t) return (0, s.jsx)(s.Fragment, {
                        children: u
                    });
                    var l = (0, s.jsxs)(W, {
                        children: [(0, s.jsx)("div", {
                            className: "rect2"
                        }), (0, s.jsx)("div", {
                            className: "rect3"
                        }), (0, s.jsx)("div", {
                            className: "rect4"
                        }), (0, s.jsx)("div", {
                            className: "rect5"
                        })]
                    });
                    return i ? (0, s.jsxs)(c().Fragment, {
                        children: [u, (0, s.jsx)(K, {
                            inner: !!a,
                            children: l
                        })]
                    }) : (0, s.jsxs)(c().Fragment, {
                        children: [u, l]
                    })
                };
            J.show = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    n = e.fullScreen,
                    t = void 0 !== n && n;
                Y || (Y = document.createElement("div"), document.body.appendChild(Y)), L().render((0, s.jsx)(J, {
                    fullScreen: t
                }), Y)
            }, J.hide = function() {
                Y && L().render((0, s.jsx)(J, {
                    show: !1
                }), Y)
            };
            const G = J;
            var q = function(e, n) {},
                H = function(e) {
                    var n = e.type,
                        t = e.item,
                        c = e.columns,
                        u = e.isRowExpand,
                        l = e.onClick,
                        f = void 0 === l ? q : l,
                        p = (0, a.A)(e, ["type", "item", "columns", "isRowExpand", "onClick"]),
                        x = "header" === n,
                        g = (0, o.useState)(!1),
                        m = g[0],
                        h = g[1];
                    return (0, s.jsx)(d.A, (0, i.A)((0, r.A)({}, p), {
                        "data-type": x ? "table-th" : "table-td",
                        children: (0, s.jsx)(v.A, {
                            __css: {
                                bg: "inherit"
                            },
                            onClick: !x && u ? function() {
                                return h(!m)
                            } : function() {
                                return f(t, p.keyIndex)
                            },
                            children: (c || []).map((function(e, n) {
                                var a = e.title,
                                    s = e.dataIndex,
                                    c = e.width,
                                    u = e.style,
                                    l = e.render,
                                    d = x ? a : (void 0 === l ? function() {
                                        return null
                                    } : l)(t[s], t, {
                                        expand: m,
                                        setExpand: h
                                    }, p.keyIndex) || t[s];
                                return (0, o.createElement)(v.A, {
                                    "data-type": "table-min-row",
                                    style: (0, i.A)((0, r.A)({}, u), {
                                        flex: c,
                                        minWidth: c
                                    }),
                                    key: s || n,
                                    __css: {
                                        alignItems: "flex-start"
                                    },
                                    sx: {
                                        py: 12,
                                        px: "sm"
                                    }
                                }, d)
                            }))
                        })
                    }))
                };
            const ee = function(e) {
                var n = e.loading,
                    t = e.columns,
                    r = e.list,
                    i = void 0 === r ? [] : r,
                    a = e.rowStyle,
                    u = void 0 === a ? {} : a,
                    l = e.onRowClick,
                    f = void 0 === l ? q : l,
                    p = e.isRowExpand,
                    v = void 0 !== p && p,
                    x = e.noDataText,
                    g = i.length;
                return (0, s.jsx)(c().Fragment, {
                    children: (0, s.jsxs)(d.A, {
                        className: " relative flex-grow overflow-x-auto",
                        children: [(0, s.jsxs)(d.A, {
                            "data-type": "list-table",
                            className: (0, M.cn)("flex flex-col gap-2xs", "[&>div:not(:first-child)>div:hover]:bg-selectedBg", "[&>div]:bg-bg1", "[&>div>div]:rounded-xs", "[&>div>div]:p-2xs", "[&>div:not(:first-child)>div]:flex [&>div:not(:first-child)>div]:h-[38px] [&>div:not(:first-child)>div]:items-center", " [&>div:first-child>div>div]:text-xs [&>div:first-child>div]:h-[32px] [&>div:first-child>div]:items-center [&>div:first-child>div]:py-0", "[&>div>div>div]:p-0"),
                            style: {},
                            sx: {
                                ">[data-type=table-th]": {
                                    color: "header.gray"
                                }
                            },
                            children: [(0, s.jsx)(H, {
                                columns: t,
                                type: "header"
                            }), (i || []).map((function(e, n) {
                                var r = "function" === typeof u ? u(e) : {};
                                return (0, o.createElement)(H, {
                                    item: e,
                                    columns: t,
                                    isRowExpand: v,
                                    onClick: function() {
                                        return f(e, n)
                                    },
                                    keyIndex: n,
                                    key: n,
                                    type: "td",
                                    style: r
                                })
                            })), n || g ? null : (0, s.jsx)(m, {
                                textDesc: x,
                                sx: {
                                    py: "md"
                                }
                            })]
                        }), n ? (0, s.jsx)(G, {
                            inner: !0,
                            fullScreen: !0
                        }) : null]
                    })
                })
            };
            var ne = t("9Fw3"),
                te = t("6p3b"),
                re = t("tKUM"),
                ie = function(e) {
                    var n = e.lng,
                        t = e.children,
                        r = ["rtl" === (0, re.dir)(n) ? te.Ay : void 0];
                    return (0, s.jsx)(O.CacheProvider, {
                        value: (0, ne.A)({
                            stylisPlugins: r
                        }),
                        children: t
                    })
                };
            const ae = (0, o.memo)(ie)
        },
        UPra: (e, n, t) => {
            "use strict";
            t.d(n, {
                B_: () => f,
                T: () => d,
                Xq: () => x,
                kf: () => p,
                zX: () => v
            });
            var r = t("sViW"),
                i = t("Pz56"),
                a = t.n(i),
                s = t("TrCV"),
                o = t("DTvD"),
                c = t("nsO7"),
                u = t("a59x"),
                l = t("mFFV"),
                d = function() {
                    var e = (0, r.A)(a().mark((function e(n) {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, l.i8)((0, u.Eg)("/bapi/composite/v1/public/marketing/indicator/abnormal-trading-notice/pageList", n || {})));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function(e, n) {
                    return e.reduce((function(t, r, i) {
                        if (t.push(r), i < e.length - 1) {
                            var a = (0, o.cloneElement)((0, s.jsx)(s.Fragment, {
                                children: n
                            }), {
                                key: "split-".concat(i)
                            });
                            t.push(a)
                        }
                        return t
                    }), [])
                },
                p = function(e) {
                    var n = Number(e);
                    return null !== e && n !== 1 / 0 && !Number.isNaN(n)
                },
                v = function(e, n) {
                    var t = e.replace("#", ""),
                        r = parseInt(t.substring(0, 2), 16),
                        i = parseInt(t.substring(2, 4), 16),
                        a = parseInt(t.substring(4, 6), 16);
                    return "rgba(".concat(r, ", ").concat(i, ", ").concat(a, ", ").concat(n, ")")
                },
                x = function(e) {
                    return !(0, c.isEmpty)((0, c.trim)(e))
                }
        },
        X6Py: (e, n, t) => {
            "use strict";
            t.d(n, {
                v: () => i
            });
            var r = "markets",
                i = function(e) {
                    return e ? "/".concat(r, "/").concat(e) : "/".concat(r)
                }
        },
        fALc: (e, n) => {
            var t;

            function r(e, n) {
                var t = [],
                    r = 0;

                function i(e) {
                    return t.push(e), n
                }

                function a() {
                    return t[r++]
                }
                return {
                    tokenize: function(n) {
                        return n.replace(e, i)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + n + ")", "g"), a)
                    }
                }
            }
            t = new function() {
                var e = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    n = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    t = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    i = "(?:[_a-z0-9-]|[^\\u0020-\\u007e]|" + t + ")",
                    a = e + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",
                    s = "((?:-?" + a + ")|(?:inherit|auto))",
                    o = "(#?" + i + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    c = "(?:[!#$%&*-~]|[^\\u0020-\\u007e]|" + t + ")*?",
                    u = "(?!(" + i + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    l = "(?!" + c + "['\"]?\\s*\\))",
                    d = "(?=" + c + "['\"]?\\s*\\))",
                    f = "(\\s*(?:!important\\s*)?[;}])",
                    p = new RegExp("`TMP`", "g"),
                    v = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    x = new RegExp("(" + n + u + "[^;}]+;?)", "gi"),
                    g = new RegExp("(" + n + "[^\\}]*?})", "gi"),
                    m = new RegExp("(direction\\s*:\\s*)ltr", "gi"),
                    h = new RegExp("(direction\\s*:\\s*)rtl", "gi"),
                    w = new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])" + l + u, "gi"),
                    b = new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])" + l + u, "gi"),
                    A = new RegExp("(^|[^a-zA-Z])(left)" + d, "gi"),
                    y = new RegExp("(^|[^a-zA-Z])(right)" + d, "gi"),
                    k = new RegExp("(^|[^a-zA-Z])(ltr)" + d, "gi"),
                    E = new RegExp("(^|[^a-zA-Z])(rtl)" + d, "gi"),
                    R = new RegExp("(^|[^a-zA-Z])([ns]?)e-resize", "gi"),
                    j = new RegExp("(^|[^a-zA-Z])([ns]?)w-resize", "gi"),
                    z = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + s + "(\\s+)" + s + "(\\s+)" + s + "(\\s+)" + s + f, "gi"),
                    C = new RegExp("((?:-color|border-style)\\s*:\\s*)" + o + "(\\s+)" + o + "(\\s+)" + o + "(\\s+)" + o + f, "gi"),
                    T = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + a + ")", "gi"),
                    $ = new RegExp("(background-position-x\\s*:\\s*)(-?" + e + "%)", "gi"),
                    D = new RegExp("(border-radius\\s*:\\s*)" + s + "(?:(?:\\s+" + s + ")(?:\\s+" + s + ")?(?:\\s+" + s + ")?)?(?:(?:(?:\\s*\\/\\s*)" + s + ")(?:\\s+" + s + ")?(?:\\s+" + s + ")?(?:\\s+" + s + ")?)?" + f, "gi"),
                    I = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + s, "gi"),
                    P = new RegExp("(text-shadow\\s*:\\s*)" + s + "(\\s*)" + o, "gi"),
                    S = new RegExp("(text-shadow\\s*:\\s*)" + o + "(\\s*)" + s, "gi"),
                    N = new RegExp("(text-shadow\\s*:\\s*)" + s, "gi"),
                    F = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + s + "(\\s*\\))", "gi"),
                    M = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + s + "((?:\\s*,\\s*" + s + "){0,2}\\s*\\))", "gi");

                function _(e, n, t) {
                    var r, i;
                    return "%" === t.slice(-1) && (-1 !== (r = t.indexOf(".")) ? (i = t.length - r - 2, t = (t = 100 - parseFloat(t)).toFixed(i) + "%") : t = 100 - parseFloat(t) + "%"), n + t
                }

                function U(e) {
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

                function L(e, n) {
                    var t = [].slice.call(arguments),
                        r = t.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        i = t.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        a = t[10] || "";
                    return n + (i.length ? U(r) + " / " + U(i) : U(r)) + a
                }

                function O(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function Z(e, n, t) {
                    return n + O(t)
                }

                function B(e, n, t, r, i) {
                    return n + t + O(r) + i
                }

                function Q(e, n, t, r, i) {
                    return n + t + r + O(i)
                }
                return {
                    transform: function(e, n) {
                        var t = new r(x, "`NOFLIP_SINGLE`"),
                            i = new r(g, "`NOFLIP_CLASS`"),
                            a = new r(v, "`COMMENT`");
                        return e = a.tokenize(i.tokenize(t.tokenize(e.replace("`", "%60")))), n.transformDirInUrl && (e = e.replace(k, "$1`TMP`").replace(E, "$1ltr").replace(p, "rtl")), n.transformEdgeInUrl && (e = e.replace(A, "$1`TMP`").replace(y, "$1left").replace(p, "right")), e = e.replace(m, "$1`TMP`").replace(h, "$1ltr").replace(p, "rtl").replace(w, "$1`TMP`").replace(b, "$1left").replace(p, "right").replace(R, "$1$2`TMP`").replace(j, "$1$2e-resize").replace(p, "w-resize").replace(D, L).replace(I, Z).replace(P, Q).replace(S, Q).replace(N, Z).replace(F, B).replace(M, B).replace(z, "$1$2$3$8$5$6$7$4$9").replace(C, "$1$2$3$8$5$6$7$4$9").replace(T, _).replace($, _), e = t.detokenize(i.detokenize(a.detokenize(e)))
                    }
                }
            }, e.exports ? n.transform = function(e, n, r) {
                var i;
                return "object" === typeof n ? i = n : (i = {}, "boolean" === typeof n && (i.transformDirInUrl = n), "boolean" === typeof r && (i.transformEdgeInUrl = r)), t.transform(e, i)
            } : window.cssjanus = t
        },
        OfKG: (e, n, t) => {
            var r = t("c7Qd");
            e.exports = function(e, n) {
                return !!(null == e ? 0 : e.length) && r(e, n, 0) > -1
            }
        },
        "sCL+": e => {
            e.exports = function(e, n, t) {
                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                    if (t(n, e[r])) return !0;
                return !1
            }
        },
        DuXo: e => {
            e.exports = function(e, n, t, r) {
                for (var i = e.length, a = t + (r ? 1 : -1); r ? a-- : ++a < i;)
                    if (n(e[a], a, e)) return a;
                return -1
            }
        },
        YpBQ: (e, n, t) => {
            var r = t("y/9h"),
                i = t("oCTG");
            e.exports = function e(n, t, a, s, o) {
                var c = -1,
                    u = n.length;
                for (a || (a = i), o || (o = []); ++c < u;) {
                    var l = n[c];
                    t > 0 && a(l) ? t > 1 ? e(l, t - 1, a, s, o) : r(o, l) : s || (o[o.length] = l)
                }
                return o
            }
        },
        c7Qd: (e, n, t) => {
            var r = t("DuXo"),
                i = t("z9Jh"),
                a = t("n1QJ");
            e.exports = function(e, n, t) {
                return n === n ? a(e, n, t) : r(e, i, t)
            }
        },
        z9Jh: e => {
            e.exports = function(e) {
                return e !== e
            }
        },
        "s+R0": (e, n, t) => {
            var r = t("JBn+"),
                i = t("OfKG"),
                a = t("sCL+"),
                s = t("S0iI"),
                o = t("9TP6"),
                c = t("XlL0");
            e.exports = function(e, n, t) {
                var u = -1,
                    l = i,
                    d = e.length,
                    f = !0,
                    p = [],
                    v = p;
                if (t) f = !1, l = a;
                else if (d >= 200) {
                    var x = n ? null : o(e);
                    if (x) return c(x);
                    f = !1, l = s, v = new r
                } else v = n ? [] : p;
                e: for (; ++u < d;) {
                    var g = e[u],
                        m = n ? n(g) : g;
                    if (g = t || 0 !== g ? g : 0, f && m === m) {
                        for (var h = v.length; h--;)
                            if (v[h] === m) continue e;
                        n && v.push(m), p.push(g)
                    } else l(v, m, t) || (v !== p && v.push(m), p.push(g))
                }
                return p
            }
        },
        "9TP6": (e, n, t) => {
            var r = t("OBn4"),
                i = t("nnm9"),
                a = t("XlL0"),
                s = r && 1 / a(new r([, -0]))[1] == 1 / 0 ? function(e) {
                    return new r(e)
                } : i;
            e.exports = s
        },
        oCTG: (e, n, t) => {
            var r = t("Syyo"),
                i = t("bvyN"),
                a = t("wxYD"),
                s = r ? r.isConcatSpreadable : void 0;
            e.exports = function(e) {
                return a(e) || i(e) || !!(s && e && e[s])
            }
        },
        n1QJ: e => {
            e.exports = function(e, n, t) {
                for (var r = t - 1, i = e.length; ++r < i;)
                    if (e[r] === n) return r;
                return -1
            }
        },
        nnm9: e => {
            e.exports = function() {}
        },
        jLkM: (e, n, t) => {
            var r = t("s+R0");
            e.exports = function(e) {
                return e && e.length ? r(e) : []
            }
        },
        "6p3b": (e, n, t) => {
            "use strict";
            var r, i = t("fALc"),
                a = (r = i) && r.__esModule ? r : {
                    default: r
                };
            var s = -1;

            function o(e, n) {
                if (e === s) return a.default.transform(n)
            }
            n.Ay = o
        },
        iwTY: (e, n, t) => {
            "use strict";

            function r(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = arguments[n];
                    for (var r in t) e[r] = t[r]
                }
                return e
            }
            t.d(n, {
                A: () => a
            });
            var i = function e(n, t) {
                function i(e, i, a) {
                    if ("undefined" !== typeof document) {
                        "number" === typeof(a = r({}, t, a)).expires && (a.expires = new Date(Date.now() + 864e5 * a.expires)), a.expires && (a.expires = a.expires.toUTCString()), e = encodeURIComponent(e).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
                        var s = "";
                        for (var o in a) a[o] && (s += "; " + o, !0 !== a[o] && (s += "=" + a[o].split(";")[0]));
                        return document.cookie = e + "=" + n.write(i, e) + s
                    }
                }
                return Object.create({
                    set: i,
                    get: function(e) {
                        if ("undefined" !== typeof document && (!arguments.length || e)) {
                            for (var t = document.cookie ? document.cookie.split("; ") : [], r = {}, i = 0; i < t.length; i++) {
                                var a = t[i].split("="),
                                    s = a.slice(1).join("=");
                                try {
                                    var o = decodeURIComponent(a[0]);
                                    if (r[o] = n.read(s, o), e === o) break
                                } catch (c) {}
                            }
                            return e ? r[e] : r
                        }
                    },
                    remove: function(e, n) {
                        i(e, "", r({}, n, {
                            expires: -1
                        }))
                    },
                    withAttributes: function(n) {
                        return e(this.converter, r({}, this.attributes, n))
                    },
                    withConverter: function(n) {
                        return e(r({}, this.converter, n), this.attributes)
                    }
                }, {
                    attributes: {
                        value: Object.freeze(t)
                    },
                    converter: {
                        value: Object.freeze(n)
                    }
                })
            }({
                read: function(e) {
                    return '"' === e[0] && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
                },
                write: function(e) {
                    return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
                }
            }, {
                path: "/"
            });
            const a = i
        }
    }
]);
//# debugId=8ada4705-fc98-5bde-abe8-7e3058123bb5