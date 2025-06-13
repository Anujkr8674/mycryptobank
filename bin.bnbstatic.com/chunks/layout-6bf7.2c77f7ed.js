! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3488144b-f309-5ba8-b579-273e5a3ab92b")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [687], {
        V6HY: (e, t, r) => {
            "use strict";
            r.d(t, {
                nN: () => k,
                nj: () => A,
                gR: () => C
            });
            var o = r("ezuS"),
                i = r("VP0d"),
                n = r("DTvD"),
                a = r.n(n),
                l = r("T9BW"),
                s = r("C6y2"),
                d = r("hQCL"),
                p = r("HDxn"),
                c = r("M5j3"),
                u = r("w/Qz");
            const g = function(e) {
                return a().createElement(u.A, (0, c.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9.5 4h5v15h-5V4zM3 11h4.5v8H3v-8zm18-2h-4.5v10H21V9z",
                    fill: "currentColor"
                }))
            };
            const b = function(e) {
                return a().createElement(u.A, (0, c.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.29 5.043A9 9 0 0112 3v9l6.364-6.364a9 9 0 011.255 11.155l-6.205-6.205L12 12l6.364 6.364a9.002 9.002 0 01-14.301-2.121 9 9 0 012.227-11.2z",
                    fill: "currentColor"
                }))
            };
            const x = function(e) {
                return a().createElement(u.A, (0, c.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M15.145 3H21v5.855l-1.841-1.841-7.135 7.134-2.903-2.903-3.98 3.98-2.122-2.121L9.12 7.002l2.903 2.904 5.014-5.013L15.145 3z",
                    fill: "currentColor"
                }), a().createElement("path", {
                    d: "M21 8.855V21H3L9.099 14.9l2.903 2.904L21 8.855z",
                    fill: "currentColor"
                }))
            };
            const f = function(e) {
                return a().createElement(u.A, (0, c.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.11 12.178L16 8.287l1.768 1.768-5.657 5.657-1.768-1.768-3.889-3.889 1.768-1.768 3.889 3.89z",
                    fill: "currentColor"
                }))
            };
            var m = r("/Lz3");
            const h = function(e) {
                return a().createElement(u.A, (0, c.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.11 11.824l-3.888 3.889-1.768-1.768 5.657-5.657 1.768 1.768 3.889 3.89L16 15.712l-3.89-3.89z",
                    fill: "currentColor"
                }))
            };
            var v = r("q5Na"),
                y = r("93jL"),
                w = r("wIZF"),
                B = r("Y4uf");
            const S = function(e) {
                return a().createElement(B.A, (0, w.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7 10.101V7a5 5 0 0110 0h-2.5a2.5 2.5 0 00-5 0v1.46A7 7 0 117 10.1zM8.889 15L12 11.889 15.111 15 12 18.111 8.889 15z",
                    fill: "currentColor"
                }))
            };
            var k = ["sm", "md", 0],
                C = function(e) {
                    return Object.values(v.d).find((function(t) {
                        return null === e || void 0 === e ? void 0 : e.includes(t)
                    })) || v.d.Overview
                },
                F = {
                    alignItems: "center",
                    gap: "8px",
                    fontSize: "16px",
                    fontWeight: 600,
                    lineHeight: "24px"
                },
                A = function(e) {
                    var t = e.pathname,
                        r = (0, l.useTranslation)("main-exui"),
                        c = r.t,
                        u = r.i18n.language,
                        w = (0, y.A)(),
                        B = C(t),
                        A = (0, i.A)((0, n.useState)(!1), 2),
                        T = A[0],
                        E = A[1],
                        z = (0, n.useMemo)((function() {
                            var e;
                            return e = {}, (0, o.A)(e, v.d.TradingData, a().createElement(s.A, {
                                sx: F
                            }, a().createElement(g, {
                                size: 24
                            }), c("tabs-".concat(v.d.TradingData), "Trading Data"))), (0, o.A)(e, v.d.Overview, a().createElement(s.A, {
                                sx: F
                            }, a().createElement(b, {
                                size: 24
                            }), c("tabs-".concat(v.d.Overview)))), (0, o.A)(e, v.d.Opportunity, a().createElement(s.A, {
                                sx: F
                            }, a().createElement(x, {
                                size: 24
                            }), c("tabs-".concat(v.d.Opportunity), "Opportunity"))), (0, o.A)(e, v.d.TokenUnlock, a().createElement(s.A, {
                                sx: F
                            }, a().createElement(S, {
                                className: "w-6 h-6"
                            }), c("tabs-".concat(v.d.TokenUnlock), "TokenUnlock"))), e
                        }), [c]);
                    return a().createElement(a().Fragment, null, a().createElement(s.A, {
                        sx: {
                            py: "sm",
                            px: k,
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "t.primary"
                        },
                        onClick: function() {
                            E(!T)
                        }
                    }, a().createElement(s.A, {
                        sx: {
                            alignItems: "center",
                            gap: "8px"
                        }
                    }, z[B]), a().createElement(f, {
                        size: 24,
                        color: "iconNormal"
                    })), a().createElement(d.A, {
                        direction: "right",
                        visible: T
                    }, a().createElement(s.A, {
                        sx: {
                            width: "100vw",
                            height: "100vh",
                            flexDirection: "column"
                        }
                    }, a().createElement(s.A, {
                        sx: {
                            alignItems: "center",
                            justifyContent: "flex-end",
                            pt: "20px",
                            pb: "12px",
                            px: "16px",
                            color: "t.primary"
                        }
                    }, a().createElement(m.A, {
                        size: 24,
                        onClick: function() {
                            E(!T)
                        }
                    })), a().createElement(s.A, {
                        sx: {
                            p: "16px",
                            borderBottom: "1px solid",
                            borderColor: "bg",
                            alignItems: "center",
                            justifyContent: "space-between",
                            color: "t.primary"
                        }
                    }, z[B], a().createElement(h, {
                        size: 24,
                        onClick: function() {
                            return E(!T)
                        }
                    })), a().createElement(s.A, {
                        sx: {
                            px: "16px",
                            py: "8px",
                            gap: "8px",
                            flexDirection: "column",
                            "& > *": {
                                py: "12px"
                            }
                        }
                    }, w.map((function(e) {
                        return a().createElement(p.A, {
                            key: e,
                            sx: {
                                color: B === e ? "t.primary" : "t.third",
                                textDecoration: "none"
                            },
                            href: "/".concat(u, "/markets/").concat(e, "/")
                        }, z[e])
                    }))))))
                }
        },
        q5Na: (e, t, r) => {
            "use strict";
            var o;
            r.d(t, {
                    d: () => o
                }),
                function(e) {
                    e.Overview = "overview", e.TradingData = "trading_data", e.Opportunity = "opportunity", e.TokenUnlock = "token_unlock"
                }(o || (o = {}))
        },
        "93jL": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => n
            });
            var o = r("HS2I"),
                i = r("q5Na");
            const n = function() {
                var e = (0, o.useBusinessKeys)().value;
                return [i.d.Overview, i.d.TradingData, !(null === e || void 0 === e ? void 0 : e.includes("markets-opportunity")) && i.d.Opportunity, i.d.TokenUnlock].filter(Boolean)
            }
        },
        HDxn: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var o = r("M5j3"),
                i = r("DTvD"),
                n = r.n(i),
                a = r("LCuF"),
                l = (0, i.forwardRef)((function(e, t) {
                    return n().createElement(a.A, (0, o.A)({
                        ref: t,
                        as: "a",
                        variant: "link",
                        "data-bn-type": "link"
                    }, e))
                }));
            l.displayName = "Link";
            const s = l
        },
        "Mco/": (e, t, r) => {
            "use strict";
            r.d(t, {
                a: () => i,
                t: () => o
            });
            var o = function(e) {
                    setTimeout(e, 0)
                },
                i = function() {
                    return new Promise((function(e) {
                        setTimeout(e, 0)
                    }))
                }
        },
        PWmu: (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => ai
            });
            var o = r("N/Z2"),
                i = r("TrCV"),
                n = r("DTvD"),
                a = r.n(n),
                l = r("T9BW"),
                s = r("Vqct"),
                d = r("HS2I"),
                p = r("nsO7"),
                c = r("C6y2"),
                u = r("LCuF"),
                g = r("HDxn"),
                b = r("93jL"),
                x = r("V6HY"),
                f = (0, n.memo)((function(e) {
                    var t = e.pathname,
                        r = (0, l.useTranslation)("main-exui"),
                        o = r.t,
                        i = r.i18n.language,
                        n = (0, b.A)(),
                        s = (0, x.gR)(t);
                    return a().createElement(c.A, {
                        flexDirection: "column"
                    }, a().createElement(u.A, {
                        sx: {
                            py: "md",
                            px: x.nN
                        }
                    }, a().createElement(c.A, {
                        sx: {
                            position: "relative",
                            alignItems: "center",
                            gap: "24px"
                        }
                    }, n.map((function(e) {
                        return a().createElement(g.A, {
                            key: e,
                            sx: e === s ? {
                                color: "t.primary",
                                variant: "text.headline3",
                                textDecoration: "none"
                            } : {
                                color: "t.third",
                                variant: "text.headline5",
                                textDecoration: "none"
                            },
                            href: "/".concat(i, "/markets/").concat(e)
                        }, o("tabs-".concat(e), (0, p.startCase)(e)))
                    })))))
                })),
                m = (0, n.memo)((function(e) {
                    var t = e.pathname;
                    return (0, d.useMediaState)().isMobile ? a().createElement(x.nj, {
                        pathname: t
                    }) : a().createElement(f, {
                        pathname: t
                    })
                })),
                h = r("Rc2H"),
                v = r("W9hJ"),
                y = r("0Qaq"),
                w = r("tKUM"),
                B = r("06hb"),
                S = r("sViW"),
                k = r("Pz56"),
                C = r.n(k),
                F = r("/OND"),
                A = r("HIvj");
            r("ofQG");
            var T = r("eEXy"),
                E = r("ZIan"),
                z = r("WgX+"),
                D = r("QxbJ"),
                H = r("VA12"),
                _ = r("tUzK"),
                I = r("qhd6"),
                R = r("BK9r"),
                W = r("F73K"),
                L = r("X6Py"),
                P = r("N/Ki"),
                M = r("6Zk3"),
                j = (0, I._9)({
                    quitID: I.D1.quitMarkets,
                    viewID: void 0
                });

            function G(e) {
                var t = e.children,
                    r = (0, M.A)(),
                    o = (0, F.wA)(),
                    a = (0, R.rd)(),
                    l = (0, R.g)(),
                    s = l.activeTab,
                    d = l.activeSubTab,
                    c = (0, n.useMemo)((function() {
                        return r ? ["/bapi/apex/v1/friendly/apex/marketing/simplifiedSymbolListWeb", "/bapi/asset/v2/friendly/asset/biz-tags?bizKey=Markets-page-setting"] : null
                    }), [r]),
                    u = (0, D.A)(c, (function(e) {
                        return Promise.all(e.map((function(e) {
                            return (0, H.get)(e).then(function() {
                                var e = (0, S.A)(C().mark((function e(t) {
                                    var r;
                                    return C().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return r = t.data, e.abrupt("return", r);
                                            case 2:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function(t) {
                                    return e.apply(this, arguments)
                                }
                            }())
                        }))).then(function() {
                            var e = (0, S.A)(C().mark((function e(t) {
                                var r, i, n, l;
                                return C().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (o.ssrStore.updateState({
                                                    symbolList: (0, _.R)(t[0]),
                                                    spotTabsWithOrder: t[1],
                                                    loginCsrOverrideFinished: !0
                                                }), s !== P.Gs.SPOT || !(0, p.isEmpty)(d)) {
                                                e.next = 6;
                                                break
                                            }
                                            a.replace((0, L.v)("".concat(P.Gs.SPOT, "-").concat(null === (i = t[1]) || void 0 === i || null === (n = i[0]) || void 0 === n || null === (l = n.tag) || void 0 === l ? void 0 : l.toUpperCase()))), e.next = 11;
                                            break;
                                        case 6:
                                            if (s !== P.Gs.SPOT || (null === (r = t[1]) || void 0 === r ? void 0 : r.find((function(e) {
                                                    var t;
                                                    return (null === (t = e.tag) || void 0 === t ? void 0 : t.toUpperCase()) === d
                                                }))) || P.ny.find((function(e) {
                                                    return e.id === d
                                                }))) {
                                                e.next = 10;
                                                break
                                            }
                                            a.replace("/404"), e.next = 11;
                                            break;
                                        case 10:
                                        case 11:
                                            return e.abrupt("return", !0);
                                        case 12:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }())
                    }), {
                        suspense: !1
                    }),
                    g = u.isLoading,
                    b = u.data;
                return (0, n.useEffect)(j, []), !r || !g && b ? (0, i.jsx)(i.Fragment, {
                    children: t
                }) : (0, i.jsx)("div", {
                    className: " w-vw flex h-[90vh] flex-col items-center justify-center",
                    children: (0, i.jsx)(W.A, {
                        type: "lines",
                        className: " !fill-primaryHover !stroke-primaryHover"
                    })
                })
            }
            const O = (0, n.memo)(G);
            var Y = r("uHCZ");
            const V = function() {
                var e = (0, P.Ef)().t;
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsxs)(Y.A, {
                        children: [(0, i.jsx)("title", {
                            children: e("exchange-markets-title")
                        }), (0, i.jsx)("meta", {
                            name: "description",
                            content: e("exchange-markets-description")
                        }), (0, i.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width,minimum-scale=1,maximum-scale=1.0,initial-scale=1,user-scalable=no,viewport-fit=cover"
                        })]
                    })
                })
            };
            var N = r("9rW+"),
                q = r("ZSsA"),
                K = r("26LC"),
                U = r("9sMP"),
                Q = r("wIZF"),
                X = r("W3Ja");
            const Z = (0, n.createContext)({
                colors: {},
                mode: "light"
            });
            var J = r("qrIQ"),
                $ = r("hyZw"),
                ee = r("OKx2"),
                te = r("O94r"),
                re = r.n(te),
                oe = r("lHGB"),
                ie = r("STQw"),
                ne = "#FFFFFF",
                ae = "#FAFAFA",
                le = "#F5F5F5",
                se = "#EDEDED",
                de = "#DDDDDD",
                pe = "#CFCFCF",
                ce = "#BFBFBF",
                ue = "#909090",
                ge = "#7D7D7D",
                be = "#4F4F4F",
                xe = "#323232",
                fe = "#242424",
                me = "#282828",
                he = "#111111",
                ve = "#000000",
                ye = "#EAECEF",
                we = "#848E9C",
                Be = "#474D57",
                Se = "#2B3139",
                ke = "#1E2329",
                Ce = "#202630",
                Fe = "#0B0E11",
                Ae = "#FCD535",
                Te = "#F0B90B",
                Ee = "#A37200",
                ze = "#E6FFF1",
                De = "#32D993",
                He = "#2EBD85",
                _e = "#102821",
                Ie = "#FF707E",
                Re = "#F6465D",
                We = "#E33B54",
                Le = "#35141D",
                Pe = {
                    BasicBg: ne,
                    SecondaryBg: ae,
                    Input: le,
                    InputLine: de,
                    CardBg: ne,
                    Vessel: ae,
                    Line: se,
                    DisableBtn: se,
                    DisableText: ce,
                    TertiaryText: ge,
                    SecondaryText: be,
                    PrimaryText: me,
                    RedGreenBgText: ne,
                    EmphasizeText: "#FF693D",
                    TextOnGray: se,
                    TextOnYellow: me,
                    IconNormal: "#9C9C9C",
                    LiteBg1: ne,
                    LiteBg2: ae,
                    TwoColorIcon: be,
                    TradeBg: le,
                    BadgeBg: "rgba(240,185,11,0.1)",
                    BtnBg: Ae,
                    PrimaryYellow: Te,
                    TextLink: "#C99400",
                    TextToast: "#8D5F02",
                    DepthSellBg: "#FEF1F2",
                    SellHover: Ie,
                    Sell: Re,
                    TextSell: We,
                    DepthBuyBg: ze,
                    BuyHover: De,
                    Buy: He,
                    TextBuy: He,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    Error: We,
                    SuccessBg: ze,
                    Success: He,
                    TagBg: se,
                    Grid: se,
                    Placeholder: ce,
                    ToastBg: ge
                },
                Me = {
                    BasicBg: he,
                    SecondaryBg: ve,
                    Input: xe,
                    InputLine: be,
                    CardBg: fe,
                    Vessel: fe,
                    Line: xe,
                    DisableBtn: xe,
                    DisableText: "#696969",
                    TertiaryText: ue,
                    SecondaryText: ce,
                    PrimaryText: se,
                    RedGreenBgText: ne,
                    TextOnGray: se,
                    TextOnYellow: me,
                    IconNormal: ue,
                    LiteBg1: me,
                    LiteBg2: he,
                    TwoColorIcon: pe,
                    TradeBg: ve,
                    BadgeBg: "rgba(240, 185, 11, 0.1)",
                    BtnBg: Ae,
                    PrimaryYellow: Te,
                    TextLink: Te,
                    TextToast: Ee,
                    DepthSellBg: Le,
                    SellHover: Ie,
                    Sell: Re,
                    TextSell: Re,
                    DepthBuyBg: _e,
                    BuyHover: De,
                    Buy: He,
                    TextBuy: He,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    Error: Re,
                    SuccessBg: _e,
                    Success: He,
                    EmphasizeText: "#FF693D",
                    ToastBg: ge,
                    TagBg: be,
                    Grid: xe,
                    Placeholder: be
                },
                je = {
                    BasicBg: "#181A20",
                    SecondaryBg: Fe,
                    Input: Se,
                    InputLine: Be,
                    CardBg: ke,
                    Vessel: ke,
                    Line: Se,
                    DisableBtn: Se,
                    DisableText: "#5E6673",
                    TertiaryText: we,
                    SecondaryText: "#B7BDC6",
                    PrimaryText: ye,
                    RedGreenBgText: "#FFFFFF",
                    EmphasizeText: "#FF693D",
                    TextOnGray: ye,
                    TextOnYellow: Ce,
                    IconNormal: we,
                    LiteBg1: Ce,
                    LiteBg2: "#191A1F",
                    BtnBg: Ae,
                    PrimaryYellow: Te,
                    TextLink: Te,
                    TradeBg: Fe,
                    TextToast: Ee,
                    DepthSellBg: Le,
                    SellHover: Ie,
                    Sell: Re,
                    TextSell: Re,
                    DepthBuyBg: _e,
                    BuyHover: De,
                    Buy: He,
                    TextBuy: He,
                    Error: Re,
                    SuccessBg: _e,
                    Success: He,
                    TagBg: Be,
                    Grid: Se,
                    Placeholder: Be,
                    ToastBg: "#707A8A",
                    TwoColorIcon: "#CACED3",
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                Ge = "#FFFFFF",
                Oe = "#FAFAFA",
                Ye = "#F5F5F5",
                Ve = "#EDEDED",
                Ne = "#DDDDDD",
                qe = "#BFBFBF",
                Ke = "#7D7D7D",
                Ue = "#4F4F4F",
                Qe = "#3D3D3D",
                Xe = "#333333",
                Ze = "#282828",
                Je = "#111111",
                $e = "#FFFFFF",
                et = "#EAECEF",
                tt = "#707A8A",
                rt = "#434C5A",
                ot = "#333B47",
                it = "#29313D",
                nt = "#202630",
                at = "#FCD535",
                lt = "#F0B90B",
                st = "#E6FFF1",
                dt = "#2EBD85",
                pt = "#102821",
                ct = "#F6465D",
                ut = "#35141D",
                gt = {
                    BasicBg: Ge,
                    SecondaryBg: Oe,
                    Input: Ye,
                    InputLine: Ne,
                    CardBg: Ge,
                    TagBg: Ve,
                    Line: Ve,
                    DisableBtn: Ne,
                    Grid: Ve,
                    DisableText: qe,
                    Placeholder: qe,
                    TertiaryText: qe,
                    SecondaryText: "#909090",
                    PrimaryText: Ze,
                    RedGreenBgText: Ge,
                    EmphasizeText: "#FF693D",
                    TextOnGray: Ve,
                    TextOnYellow: Ze,
                    IconNormal: "#9C9C9C",
                    ToastBg: Ke,
                    BtnBg: at,
                    PrimaryYellow: lt,
                    TextLink: "#D89F00",
                    TradeBg: Ye,
                    SellHover: ct,
                    Sell: ct,
                    TextSell: ct,
                    DepthBuyBg: st,
                    BuyHover: dt,
                    Buy: dt,
                    TextBuy: dt,
                    Error: ct,
                    Success: dt,
                    Vessel: Oe,
                    LiteBg1: Ge,
                    LiteBg2: Oe,
                    TextToast: lt,
                    DepthSellBg: "#FEF1F2",
                    SuccessBg: st,
                    TwoColorIcon: Ue,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                bt = {
                    BasicBg: Je,
                    Input: Xe,
                    CardBg: Ze,
                    Vessel: Xe,
                    TagBg: Ue,
                    Line: Qe,
                    DisableBtn: Ue,
                    DisableText: Ke,
                    TertiaryText: "#5B5B5B",
                    SecondaryText: Ke,
                    PrimaryText: Ve,
                    RedGreenBgText: Ge,
                    TextOnGray: Ve,
                    TextOnYellow: Ze,
                    IconNormal: Ke,
                    ToastBg: Ke,
                    TwoColorIcon: Ue,
                    TradeBg: Je,
                    BtnBg: at,
                    PrimaryYellow: lt,
                    TextLink: lt,
                    Sell: ct,
                    Buy: dt,
                    Error: ct,
                    Success: dt,
                    EmphasizeText: "#FF693D",
                    SecondaryBg: "#1F1F1F",
                    InputLine: Ue,
                    Grid: Qe,
                    Placeholder: Ue,
                    SellHover: ct,
                    TextSell: ct,
                    DepthBuyBg: pt,
                    BuyHover: dt,
                    TextBuy: dt,
                    LiteBg1: Ge,
                    LiteBg2: Oe,
                    TextToast: lt,
                    DepthSellBg: ut,
                    SuccessBg: pt,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240, 185, 11, 0.1)"
                },
                xt = {
                    BasicBg: "#181E25",
                    SecondaryBg: "#191A1F",
                    Input: it,
                    InputLine: rt,
                    CardBg: nt,
                    TagBg: rt,
                    Line: ot,
                    DisableBtn: rt,
                    Grid: ot,
                    DisableText: tt,
                    Placeholder: rt,
                    TertiaryText: "#4F5867",
                    SecondaryText: "#848E9C",
                    PrimaryText: et,
                    RedGreenBgText: $e,
                    EmphasizeText: "#FF693D",
                    TextOnGray: et,
                    TextOnYellow: nt,
                    IconNormal: tt,
                    ToastBg: tt,
                    BtnBg: at,
                    PrimaryYellow: lt,
                    TextLink: lt,
                    TradeBg: "#0B0E11",
                    SellHover: ct,
                    Sell: ct,
                    TextSell: ct,
                    DepthBuyBg: pt,
                    BuyHover: dt,
                    Buy: dt,
                    TextBuy: dt,
                    Error: ct,
                    Success: dt,
                    Vessel: it,
                    LiteBg1: $e,
                    LiteBg2: "#FAFAFA",
                    TextToast: lt,
                    DepthSellBg: ut,
                    SuccessBg: pt,
                    TwoColorIcon: "#CACED3",
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                ft = (0, Q.__assign)((0, Q.__assign)({}, Pe), {
                    mobile: gt
                }),
                mt = (0, Q.__assign)((0, Q.__assign)({}, Me), {
                    mobile: bt
                }),
                ht = (0, Q.__assign)((0, Q.__assign)({}, je), {
                    mobile: xt
                }),
                vt = {
                    fresh: "",
                    traditional: "traditional"
                };
            const yt = function(e) {
                var t, r = e.scope,
                    o = e.isCVD,
                    i = e.isReverse,
                    l = e.themeColors,
                    s = e.colorMode,
                    d = void 0 === s ? "fresh" : s,
                    p = e.mode,
                    c = void 0 === p ? "light" : p,
                    u = e.themeExtraColors,
                    g = void 0 === u ? {} : u,
                    b = e.premium,
                    x = (0, ie.r)().isMobile,
                    f = !0 === (null === (t = J.OW._buu) || void 0 === t ? void 0 : t.onlyAdditionalColorInline),
                    m = (0, n.useMemo)((function() {
                        if (b) switch (c) {
                            case "dark":
                                return ht;
                            case "midnight":
                                return mt;
                            default:
                                return ft
                        }
                    }), [c, b]),
                    h = (0, n.useMemo)((function() {
                        var e = o ? "cvd" : vt[d] || "",
                            t = [e, i ? "reverse" : ""].filter(Boolean),
                            r = (0, Q.__assign)({}, l),
                            n = g[t.join("-")] || {};
                        if (x && ((null === l || void 0 === l ? void 0 : l.mobile) && (r = (0, Q.__assign)((0, Q.__assign)({}, r), l.mobile)), (null === n || void 0 === n ? void 0 : n.mobile) && (n = (0, Q.__assign)((0, Q.__assign)({}, n), n.mobile))), m) {
                            var a = K.BB,
                                s = Object.entries(r).reduce((function(e, t) {
                                    var r = t[0],
                                        o = t[1];
                                    return a.hasOwnProperty(r) || (e[r] = o), e
                                }), {}),
                                p = x && m.mobile ? (0, Q.__assign)((0, Q.__assign)({}, m), m.mobile) : m;
                            r = (0, Q.__assign)((0, Q.__assign)({}, s), p)
                        }
                        var c = (0, Q.__assign)((0, Q.__assign)({}, r), n);
                        delete c.mobile;
                        var u = {};
                        if (f)
                            for (var b = K.BB, h = 0, v = Object.entries(c); h < v.length; h++) {
                                var y = v[h],
                                    w = y[0],
                                    B = y[1];
                                b.hasOwnProperty(w) || (u["--color-".concat(w)] = B)
                            } else u = Object.keys(c).reduce((function(e, t) {
                                var r;
                                return (0, Q.__assign)((0, Q.__assign)({}, e), ((r = {})["--color-".concat(t)] = c[t], r))
                            }), {});
                        var S = [e, i ? "reverse" : ""].filter(Boolean);
                        return {
                            colors: c,
                            styles: u,
                            cssClasses: S
                        }
                    }), [o, i, l, g, x, d, f, m]),
                    v = h.colors,
                    y = h.styles,
                    w = h.cssClasses,
                    B = re()("theme-root", c, f ? w : [], e.className);
                return (0, X.op)((function() {
                    var e;
                    return J.lq || r || !document.body ? $.es : ((0, ee.Dq)(document.body, y, !0), (e = document.body.classList).add.apply(e, B.split(" ")), function() {
                        var e;
                        (null === document || void 0 === document ? void 0 : document.body) && ((0, ee.Dq)(document.body, y, !1), (e = document.body.classList).remove.apply(e, B.split(" ")))
                    })
                }), [B, r, y]), a().createElement(Z.Provider, {
                    value: {
                        isCVD: o,
                        isReverse: i,
                        mode: c,
                        colors: v
                    }
                }, J.lq || r ? a().createElement(oe.Ay, {
                    className: B,
                    style: y,
                    children: e.children
                }) : e.children)
            };
            var wt = r("onZP");
            const Bt = function(e) {
                var t = e.pathPrefix,
                    r = e.isRegionMode,
                    o = e.level2Domain,
                    i = e.lang,
                    n = e.prefixCls,
                    l = e.isRTL,
                    s = e.iconConfig,
                    d = e.children,
                    p = e.isElectron,
                    c = e.isMobile,
                    u = (0, Q.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    g = {
                        prefixCls: n,
                        isRTL: l,
                        iconConfig: s,
                        isElectron: p,
                        isMobile: c
                    },
                    b = {
                        pathPrefix: t,
                        isRegionMode: r,
                        level2Domain: o,
                        lang: i
                    },
                    x = Object.values(b).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    f = a().createElement(ie.A, (0, Q.__assign)({}, g), a().createElement(yt, (0, Q.__assign)({}, u), d));
                return x ? a().createElement(wt.A, (0, Q.__assign)({}, b), f) : f
            };
            var St = r("/5p5"),
                kt = r("B6QC"),
                Ct = r("VXBK"),
                Ft = r("NrY2");
            const At = function(e) {
                var t = e.children,
                    r = e.dir,
                    o = e.theme;
                return n.createElement(Ft.A.Consumer, null, (function(e) {
                    return n.createElement(Ft.A.Provider, {
                        value: r || e
                    }, n.createElement(Ct.NP, {
                        theme: o
                    }, t))
                }))
            };
            var Tt = r("dn+i"),
                Et = r("VP0d"),
                zt = r("tEf9"),
                Dt = r("veKZ"),
                Ht = r.n(Dt),
                _t = r("3POh"),
                It = r.n(_t),
                Rt = r("jPI1"),
                Wt = r.n(Rt),
                Lt = r("pL+m"),
                Pt = r.n(Lt),
                Mt = r("H8sf"),
                jt = r.n(Mt);
            const Gt = {
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
            var Ot = "#EA0070",
                Yt = "#74A700",
                Vt = "#EC357B",
                Nt = "#89B537";
            const qt = {
                dark: {
                    colors: {
                        buy: Yt,
                        sell: Ot,
                        buyHover: Nt,
                        sellHover: Vt,
                        t: {
                            buy: Yt,
                            sell: Ot
                        },
                        error: Ot,
                        success: Yt
                    }
                },
                light: {
                    colors: {
                        buy: Yt,
                        sell: Ot,
                        buyHover: Nt,
                        sellHover: Vt,
                        t: {
                            buy: Yt,
                            sell: Ot
                        },
                        error: Ot,
                        success: Yt
                    }
                }
            };
            var Kt = ["light", "dark"],
                Ut = It()(Ht()),
                Qt = function(e) {
                    return Ut({})((function(t, r) {
                        var o;
                        return t[r] = (o = r, Wt()([Pt(), Ut({})((function(e, t) {
                            var r = (0, Et.A)(t, 2),
                                i = r[0],
                                n = r[1];
                            return e[i] = n[o], e
                        }))]))(e), t
                    }))(Kt)
                },
                Xt = function(e) {
                    return t = Gt[e].colors,
                        function(e) {
                            return jt()({}, e, t)
                        };
                    var t
                },
                Zt = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return jt().apply(void 0, [{}, t].concat((0, zt.A)(e)))
                    }
                },
                Jt = function(e) {
                    return Zt([Gt[e]])
                },
                $t = function(e) {
                    return Zt([qt[e]])
                },
                er = function(e) {
                    var t = e.palette,
                        r = e.externalColors,
                        o = e.layout;
                    return Zt([{
                        colors: r(t)
                    }, {
                        colors: t
                    }])(o)
                },
                tr = function(e) {
                    return jt()({}, e, {
                        t: {
                            sell: e.t.buy,
                            buy: e.t.sell
                        },
                        sell: e.buy,
                        buy: e.sell,
                        sellHover: e.buyHover,
                        buyHover: e.sellHover,
                        depthSellBg: e.depthBuyBg,
                        depthBuyBg: e.depthSellBg
                    })
                },
                rr = r("BK7R"),
                or = r("QUKP");
            var ir = {
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
                nr = {
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
                ar = (0, rr.A)({
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
                }, nr),
                lr = function(e) {
                    return Object.keys(ir).reduce((function(t, r) {
                        return t[r] = (0, rr.A)({}, e, ir[r]), t
                    }), {})
                },
                sr = (0, rr.A)({
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
                }, nr);
            const dr = {
                    rangePicker: {
                        default: ar,
                        underline: (0, rr.A)({}, lr({
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
                        outline: (0, rr.A)({}, lr({
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
                        phantom: (0, rr.A)({}, lr({
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
                            md: (0, or.A)((0, rr.A)({}, sr), {
                                height: "40px"
                            }),
                            lg: (0, or.A)((0, rr.A)({}, sr), {
                                height: "48px"
                            })
                        }
                    }
                },
                pr = {
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
            var cr = pr.text,
                ur = cr.subtitle1,
                gr = cr.caption,
                br = cr.body2,
                xr = cr.body1,
                fr = {
                    variant: "searchDropdown.default",
                    " .bn-sdd-optionGroupLabel": {
                        px: "sm",
                        py: "xxs",
                        height: "28px"
                    },
                    ".bn-sdd-optionGroupText": (0, rr.A)({}, gr),
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
            const mr = {
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
                    outline: fr,
                    filled: fr,
                    line: fr,
                    clear: fr,
                    normal: fr,
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
                                " .bn-sdd-optionGroupText": (0, rr.A)({
                                    color: "t.disabled"
                                }, xr)
                            }
                        },
                        " .bn-sdd-optionGroupText": (0, rr.A)({
                            color: "t.primary"
                        }, ur),
                        " .bn-sdd-option-item": {
                            maxHeight: "40px"
                        },
                        " .bn-sdd-option": (0, rr.A)({
                            maxHeight: "40px",
                            px: "sm"
                        }, br),
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
            var hr = {
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
            const vr = {
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
                            primary: (0, or.A)((0, rr.A)({}, hr), {
                                "&.active": {
                                    bg: "badgeYellowBg",
                                    color: "t.yellow"
                                }
                            }),
                            secondary: (0, or.A)((0, rr.A)({}, hr), {
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
            var yr = {
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
            const wr = {
                textField: yr,
                textFieldV2: (0, or.A)((0, rr.A)({}, yr), {
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
            var Br = {
                borderRadius: "default",
                boxShadow: "tooltip",
                bg: "toast.bg",
                alignItems: "flex-start",
                justifyContent: "space-between",
                maxWidth: ["343px", "360px"],
                minWidth: "288px",
                minHeight: "56px"
            };
            const Sr = {
                toast: {
                    default: (0, or.A)((0, rr.A)({}, Br), {
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
                    reset: (0, or.A)((0, rr.A)({}, Br), {
                        ".bn-notification-body-wrapper": {
                            maxHeight: "unset",
                            ".bn-notification-msg-wrapper": {
                                maxHeight: "unset"
                            }
                        }
                    })
                }
            };
            var kr = {
                px: "md",
                bg: "modal.bg",
                position: "relative",
                flexDirection: "column"
            };
            const Cr = {
                modal: {
                    default: (0, or.A)((0, rr.A)({}, kr), {
                        borderRadius: "large"
                    }),
                    drawer: (0, or.A)((0, rr.A)({}, kr), {
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
            var Fr = {
                    minWidth: "343px",
                    height: "72px",
                    p: "ls",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                },
                Ar = {
                    minWidth: "343px",
                    height: "40px",
                    p: "xxs",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                };
            const Tr = {
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
                                waiting: (0, rr.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "s",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, rr.A)({
                                    variant: "uploader.click.default"
                                }, Fr),
                                error: (0, rr.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, Fr),
                                loading: (0, rr.A)({
                                    variant: "uploader.click.default"
                                }, Fr),
                                pending: (0, rr.A)({
                                    variant: "uploader.click.default"
                                }, Fr)
                            },
                            small: {
                                waiting: (0, rr.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "xxs",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, rr.A)({
                                    variant: "uploader.click.default"
                                }, Ar),
                                error: (0, rr.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, Ar),
                                loading: (0, rr.A)({
                                    variant: "uploader.click.default"
                                }, Ar),
                                pending: (0, rr.A)({
                                    variant: "uploader.click.default"
                                }, Ar)
                            }
                        }
                    }
                },
                Er = (0, rr.A)({}, Tr, {
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
                }, wr, {
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
                }, dr, {
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
                }, vr, pr, {
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
                }, Sr, {
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
                }, mr, {
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
                }, Cr, {
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
                zr = (0, rr.A)({
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
                    fontSizes: (0, or.A)((0, rr.A)({}, [12, 14, 16, 20, 24, 28, 32]), {
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
                    space: (0, or.A)((0, rr.A)({}, [0, 4, 8, 16, 24, 32, 48, 64, 80]), {
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
                }, Er);
            var Dr = "#FFFFFF",
                Hr = "#FAFAFA",
                _r = "#F5F5F5",
                Ir = "#EAECEF",
                Rr = "#D8DCE1",
                Wr = "#B7BDC6",
                Lr = "#929AA5",
                Pr = "#848E9C",
                Mr = "#707A8A",
                jr = "#5E6673",
                Gr = "#474D57",
                Or = "#2B3139",
                Yr = "#1E2329",
                Vr = "#181A20",
                Nr = "#0B0E11",
                qr = "#FFFDE6",
                Kr = "#FEF6D8",
                Ur = "#FFEF87",
                Qr = "#FCD535",
                Xr = "#F0B90B",
                Zr = "#C99400",
                Jr = "#A37200",
                $r = "#8D5F02",
                eo = "#6A4403",
                to = "#3C2601",
                ro = "#281A00",
                oo = "#328DFD",
                io = "#F2FFF7",
                no = "#E6FFF1",
                ao = "#32D993",
                lo = "#0ECB81",
                so = "#03A66D",
                po = "#102821",
                co = "#FEF6F7",
                uo = "#FEF1F2",
                go = "#FF707E",
                bo = "#F6465D",
                xo = "#CF304A",
                fo = "#35141D",
                mo = "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)";
            const ho = {
                primaryGradient: {
                    light: mo,
                    dark: mo
                },
                grayGradient: {
                    light: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                    dark: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                }
            };
            var vo = Qt(ho).light,
                yo = (0, rr.A)({
                    modalBg: Dr,
                    popupBg: Dr,
                    bg1: Dr,
                    bg2: Hr,
                    bg3: _r,
                    bg4: jr,
                    bg5: Vr,
                    bg6: Nr,
                    line: Ir,
                    liteBg1: Dr,
                    liteBg2: Hr,
                    t: {
                        primary: Yr,
                        secondary: Gr,
                        third: Mr,
                        placeholder: Wr,
                        disabled: Wr,
                        yellow: Zr,
                        buy: so,
                        sell: xo,
                        toast: $r,
                        white: Dr
                    },
                    iconNormal: Lr,
                    alertYellowBg: qr,
                    badgeYellowBg: Kr,
                    outlineHover: Ur,
                    primaryHover: Qr,
                    primary: Xr,
                    toastFailBg: co,
                    depthSellBg: uo,
                    sellHover: go,
                    sell: bo,
                    toastSuccessBg: io,
                    depthBuyBg: no,
                    buyHover: ao,
                    buy: lo,
                    invBg: Hr,
                    success: lo,
                    successBg: io,
                    error: bo,
                    errorBg: co,
                    disableBg: Ir
                }, vo),
                wo = Xt("light")(yo);
            const Bo = yo;
            var So = function(e) {
                    return (0, or.A)((0, rr.A)({}, zr.colors), {
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
                            selected: Xr,
                            selectedRange: Qr,
                            disableColor: e.t.disabled,
                            shadow: Ir,
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
                            availableBar: Rr,
                            progressBar: Or,
                            tooltipText: e.modalBg,
                            ratioButton: Dr,
                            progress: Pr,
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
                            clearIconColor: Rr
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
                            infoColor: oo,
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
                            flowBg: Qr,
                            flowText: Yr
                        },
                        advanced: {
                            downDropBg: Dr
                        },
                        transInputBG: e.bg3,
                        maskBg: Vr,
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
                ko = (0, or.A)((0, rr.A)({}, zr), {
                    shadows: (0, or.A)((0, rr.A)({}, zr.shadows), {
                        elevation1: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                        elevation2: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                        elevation3: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                    })
                }),
                Co = er({
                    palette: Bo,
                    externalColors: So,
                    layout: ko
                }),
                Fo = er({
                    palette: wo,
                    externalColors: So,
                    layout: ko
                });
            const Ao = Co;
            var To = Qt(ho).dark,
                Eo = (0, rr.A)({
                    modalBg: Yr,
                    popupBg: Yr,
                    bg1: Vr,
                    bg2: Nr,
                    bg3: Or,
                    bg4: jr,
                    bg5: Vr,
                    bg6: Nr,
                    line: Gr,
                    liteBg1: "#20262D",
                    liteBg2: "#191A1F",
                    t: {
                        primary: Ir,
                        secondary: Wr,
                        third: Pr,
                        placeholder: jr,
                        disabled: jr,
                        yellow: Xr,
                        buy: lo,
                        sell: bo,
                        toast: Jr,
                        white: Dr
                    },
                    iconNormal: Pr,
                    alertYellowBg: ro,
                    badgeYellowBg: to,
                    outlineHover: eo,
                    primaryHover: Qr,
                    primary: Xr,
                    toastFailBg: fo,
                    depthSellBg: fo,
                    sellHover: go,
                    sell: bo,
                    toastSuccessBg: po,
                    depthBuyBg: po,
                    buyHover: ao,
                    buy: lo,
                    invBg: Or,
                    success: lo,
                    error: bo,
                    successBg: po,
                    errorBg: fo,
                    disableBg: Gr
                }, To),
                zo = Xt("dark")(Eo);
            const Do = Eo;
            var Ho = function(e) {
                    return (0, or.A)((0, rr.A)({}, zr.colors), {
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
                            selected: Mr,
                            selectedRange: Gr,
                            disableColor: e.t.disabled,
                            shadow: Nr,
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
                            availableBar: jr,
                            progressBar: _r,
                            tooltipText: e.modalBg,
                            ratioButton: "#1F2124",
                            progress: Dr,
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
                            clearIconColor: Rr
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
                            infoColor: oo,
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
                            flowBg: Qr,
                            flowText: Yr
                        },
                        advanced: {
                            downDropBg: "#313336"
                        },
                        transInputBG: e.bg3,
                        maskBg: Vr,
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
                _o = (0, or.A)((0, rr.A)({}, zr), {
                    shadows: (0, or.A)((0, rr.A)({}, zr.shadows), {
                        elevation1: "0px 3px 6px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.04), inset 0px 0px 1px rgba(94, 102, 115, 0.8)",
                        elevation2: "0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",
                        elevation3: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 1px rgba(94, 102, 115, 0.9)"
                    })
                }),
                Io = er({
                    palette: Do,
                    externalColors: Ho,
                    layout: _o
                }),
                Ro = er({
                    palette: zo,
                    externalColors: Ho,
                    layout: _o
                });
            const Wo = Io;
            var Lo = function(e) {
                    return function(t) {
                        return Zt([{
                            light: Ao,
                            dark: Wo
                        }[e]].concat((0, zt.A)(t)))()
                    }
                },
                Po = function(e) {
                    return function(t) {
                        return Zt([{
                            light: Fo,
                            dark: Ro
                        }[e]].concat((0, zt.A)(t)))()
                    }
                },
                Mo = {
                    colors: {
                        overallBg: "#2B313A",
                        moduleBg: "#161A1E",
                        inputBg: "#2B3139",
                        modalBg: "#23282D",
                        tagBg: "#36321D",
                        t: {
                            emphasize: "#D77843"
                        },
                        newLine: "#252930",
                        lineForK: "#1B1F24",
                        slider: {
                            line: "#474D57"
                        },
                        icons: {
                            close: "#3D4653"
                        }
                    }
                },
                jo = Lo("dark")([Mo]),
                Go = Po("dark")([Mo]);
            const Oo = jo;
            var Yo = {
                    colors: {
                        overallBg: "#EAECEF",
                        moduleBg: "#FAFAFA",
                        inputBg: "#F2F3F5",
                        modalBg: "#FFFFFF",
                        tagBg: "#F9F4E2",
                        t: {
                            emphasize: "#E79255"
                        },
                        newLine: "#EEF0F2",
                        lineForK: "#F1F1F2",
                        slider: {
                            line: "#DCE0E5"
                        },
                        icons: {
                            close: "#C6CAD0"
                        }
                    }
                },
                Vo = Lo("light")([Yo]),
                No = Po("light")([Yo]);
            const qo = Vo;
            var Ko = Oo,
                Uo = qo,
                Qo = Jt("dark")(Go),
                Xo = Jt("light")(No),
                Zo = $t("dark")(Oo),
                Jo = $t("light")(qo),
                $o = r("AcsR"),
                ei = {
                    light: {
                        traditional: Jo,
                        fresh: Uo,
                        cvd: Xo
                    },
                    dark: {
                        traditional: Zo,
                        fresh: Ko,
                        cvd: Qo
                    }
                },
                ti = function(e, t) {
                    var r = (0, h.DP)().isLight,
                        o = (0, Tt.Rm)(),
                        i = o.hasTheme,
                        a = o.theme;
                    return {
                        theme: (0, n.useMemo)((function() {
                            var o = r ? z.T : z.nd;
                            if (!i) return {
                                theme: Uo
                            };
                            $o.cp && (o = a || o);
                            var n = "true" === t ? function(e) {
                                return (0, p.merge)({}, e, {
                                    colors: tr(e.colors)
                                })
                            }(ei[o][e]) : ei[o][e];
                            return {
                                theme: n
                            }
                        }), [i, r, e, a, t]).theme
                    }
                },
                ri = function(e) {
                    var t = e.children,
                        r = (0, z.by)(),
                        o = r.color,
                        n = r.isRedUpGreenDown,
                        a = ti(o, n ? "true" : "false").theme;
                    return (0, i.jsx)(At, {
                        theme: a,
                        children: t
                    })
                };
            const oi = a().memo(ri);

            function ii() {
                var e = (0, o.A)(["\n          body {\n            background-color: ", "};\n          }\n          #__APP {\n            height: 100%;\n          }\n        "]);
                return ii = function() {
                    return e
                }, e
            }
            var ni = function(e) {
                var t = e.lng,
                    r = e.children;
                ! function() {
                    var e = (0, F.wA)(),
                        t = (0, A.xN)().setUseFiat,
                        r = (0, A.vz)().isLoggedIn,
                        o = (0, A.Py)().fetched;
                    (0, n.useEffect)((function() {}), [r, o, e.userCenter]), (0, n.useEffect)((function() {
                        return function() {}
                    }), [e.userCenter]), (0, n.useEffect)((function() {}), [t])
                }();
                var o = (0, h.DP)().isLight ? "light" : "dark",
                    a = "light" === o ? K.BB : K.XT,
                    l = "light" === o ? U.bK : U.zd,
                    d = (0, w.dir)(t),
                    p = (0, v.FI)().setGlobal,
                    c = (0, T.Q)().isMobile;
                (0, n.useEffect)((function() {
                    p(c ? {
                        withChat: !1
                    } : {
                        withChat: !0
                    })
                }), [c]);
                var u = (0, z.by)(),
                    g = u.isRedUpGreenDown,
                    b = u.color;
                return (0, i.jsxs)(Bt, {
                    mode: o,
                    themeColors: a,
                    themeExtraColors: l,
                    isCVD: "cvd" === b,
                    isReverse: g,
                    isRTL: "rtl" === d,
                    colorMode: "traditional" === b ? "traditional" : "fresh",
                    scope: !0,
                    children: [(0, i.jsx)(B.Global, {
                        styles: (0, B.css)(ii(), a.bg1)
                    }), (0, i.jsx)(oi, {
                        children: (0, i.jsx)("div", {
                            className: "market-view [&>div:first-child]:min-h-fit",
                            children: (0, i.jsx)(kt.Hh, {
                                seoChildren: void 0,
                                metaTagsChildren: void 0,
                                children: (0, i.jsxs)("div", {
                                    className: "flex-1 bg-bg1",
                                    children: [(0, i.jsx)(s.A, {
                                        whenIdle: !0,
                                        children: (0, i.jsx)(V, {})
                                    }), (0, i.jsx)(O, {
                                        children: (0, i.jsx)(St.A, {
                                            notifiesPosition: {
                                                offsetY: 120
                                            },
                                            children: r
                                        })
                                    })]
                                })
                            })
                        })
                    })]
                })
            };
            const ai = function() {
                var e = (0, E.Bl)(),
                    t = (0, R.K7)().pathname,
                    r = (0, q.s9)().i18n;
                return (0, l.setI18n)(r), (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(y.A, {}), (0, i.jsx)(N.OP, {
                        lng: e,
                        children: (0, i.jsxs)(ni, {
                            lng: e,
                            children: [(0, i.jsx)(m, {
                                pathname: t
                            }), (0, i.jsx)(R.Tp, {})]
                        })
                    })]
                })
            }
        },
        "WgX+": (e, t, r) => {
            "use strict";
            r.d(t, {
                T: () => s,
                by: () => b,
                nN: () => u,
                nd: () => d,
                o0: () => p
            });
            var o = r("DTvD"),
                i = r("iwTY"),
                n = r("dn+i"),
                a = r("T3Fm"),
                l = r("AcsR"),
                s = "light",
                d = "dark",
                p = "fresh",
                c = "color",
                u = "false",
                g = "isRedUpGreenDown",
                b = function() {
                    var e = (0, n.Rm)(),
                        t = e.color,
                        r = e.isRedUpGreenDown,
                        s = (0, o.useState)(t || p),
                        d = s[0],
                        b = s[1],
                        x = (0, o.useState)(r || u),
                        f = x[0],
                        m = x[1];
                    return (0, o.useEffect)((function() {
                        if (l.cp) return b(t || p), void m(r || u);
                        a.o && (b(i.A.get(c) || p), m(i.A.get(g) || u))
                    }), [t, r]), {
                        color: d,
                        isRedUpGreenDown: "true" === f
                    }
                }
        },
        tUzK: (e, t, r) => {
            "use strict";
            r.d(t, {
                O: () => d,
                R: () => s
            });
            var o = r("sViW"),
                i = r("BK7R"),
                n = r("Pz56"),
                a = r.n(n),
                l = r("mFFV"),
                s = function(e) {
                    return (e || []).map((function(e) {
                        var t = e.ti.some((function(e) {
                            return "Pre-Market" === e.tag
                        }));
                        return (0, i.A)({
                            fullName: e.fn,
                            symbol: e.sb,
                            circulatingSupply: e.cs,
                            volume: e.v,
                            tagInfos: e.ti,
                            slug: e.slug,
                            baseAsset: e.b,
                            quoteAsset: e.q,
                            listingTime: e.lt,
                            listingCountdown: e.lc,
                            symbolPair: e.sp,
                            marketCap: e.marketCap
                        }, t && (0, i.A)({
                            isPreMarket: t,
                            planMarketOpenTime: e.ptomt,
                            planMarketEndTime: e.pmet
                        }, 1 === e.t && {
                            trading: !0
                        }), e.sb.startsWith(e.q) && {
                            specialAsset: !0
                        })
                    }))
                },
                d = function() {
                    var e = (0, o.A)(a().mark((function e(t) {
                        var r;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/apex/v1/friendly/apex/marketing/simplifiedSymbolListWeb", e.next = 3, (0, l.i8)("/bapi/apex/v1/friendly/apex/marketing/simplifiedSymbolListWeb", t);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r ? s(r.data) : []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        F73K: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => S
            });
            var o = r("wIZF"),
                i = r("DTvD"),
                n = r.n(i),
                a = "translate(32,32)",
                l = "stroke-opacity",
                s = "indefinite",
                d = "750ms",
                p = "round",
                c = "none",
                u = {
                    a: "animate",
                    an: "attributeName",
                    at: "animateTransform",
                    c: "circle",
                    da: "stroke-dasharray",
                    os: "stroke-dashoffset",
                    f: "fill",
                    fu: "full-rule",
                    lc: "stroke-linecap",
                    rc: "repeatCount",
                    sw: "stroke-width",
                    t: "transform",
                    v: "values"
                },
                g = {
                    v: "0,32,32;360,32,32",
                    an: "transform",
                    type: "rotate",
                    rc: s,
                    dur: d
                };

            function b(e, t) {
                var r = e.split(";"),
                    o = r.slice(t),
                    i = r.slice(0, r.length - o.length);
                return r = o.concat(i).reverse(), "".concat(r.join(";"), ";").concat(r[0])
            }
            var x = {
                    sw: 4,
                    lc: p,
                    line: [{
                        fn: function(e, t) {
                            return {
                                y1: "ios" === t ? 18 : 13,
                                y2: "ios" === t ? 29 : 20,
                                t: "".concat(a, " rotate(").concat(30 * e + (e < 6 ? 180 : -180), ")"),
                                a: [{
                                    fn: function() {
                                        return {
                                            an: l,
                                            dur: d,
                                            rc: s,
                                            v: b("0;.1;.15;.25;.35;.45;.55;.65;.7;.85;1", e)
                                        }
                                    },
                                    t: 1
                                }]
                            }
                        },
                        t: 12
                    }]
                },
                f = {
                    ios: x,
                    "ios-small": x,
                    bubbles: {
                        sw: 0,
                        c: [{
                            fn: function(e) {
                                return {
                                    cx: 24 * Math.cos(2 * Math.PI * e / 8),
                                    cy: 24 * Math.sin(2 * Math.PI * e / 8),
                                    t: a,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "r",
                                                dur: d,
                                                rc: s,
                                                v: b("1;1.5;2;2.5;3;3.5;4;4.8", e)
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 8
                        }]
                    },
                    circles: {
                        c: [{
                            fn: function(e) {
                                return {
                                    r: 5,
                                    cx: 24 * Math.cos(2 * Math.PI * e / 8),
                                    cy: 24 * Math.sin(2 * Math.PI * e / 8),
                                    t: a,
                                    sw: 0,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "fill-opacity",
                                                dur: d,
                                                rc: s,
                                                v: b(".3;.3;.3;.4;.7;.85;.9;1", e)
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 8
                        }]
                    },
                    crescent: {
                        c: [{
                            sw: 4,
                            da: 128,
                            os: 82,
                            r: 26,
                            cx: 32,
                            cy: 32,
                            f: c,
                            at: [g]
                        }]
                    },
                    dots: {
                        c: [{
                            fn: function(e) {
                                return {
                                    cx: 16 + 16 * e,
                                    cy: 32,
                                    sw: 0,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "fill-opacity",
                                                dur: d,
                                                rc: s,
                                                v: b(".5;.6;.8;1;.8;.6;.5", e)
                                            }
                                        },
                                        t: 1
                                    }, {
                                        fn: function() {
                                            return {
                                                an: "r",
                                                dur: d,
                                                rc: s,
                                                v: b("4;5;6;5;4;3;3", e)
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 3
                        }]
                    },
                    lines: {
                        sw: 7,
                        lc: p,
                        line: [{
                            fn: function(e) {
                                return {
                                    x1: 10 + 14 * e,
                                    x2: 10 + 14 * e,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "y1",
                                                dur: d,
                                                rc: s,
                                                v: b("16;18;28;18;16", e)
                                            }
                                        },
                                        t: 1
                                    }, {
                                        fn: function() {
                                            return {
                                                an: "y2",
                                                dur: d,
                                                rc: s,
                                                v: b("48;44;36;46;48", e)
                                            }
                                        },
                                        t: 1
                                    }, {
                                        fn: function() {
                                            return {
                                                dur: d,
                                                rc: s,
                                                an: l,
                                                v: b("1;.8;.5;.4;1", e)
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 4
                        }]
                    },
                    ripple: {
                        f: c,
                        fu: "evenodd",
                        sw: 3,
                        c: [{
                            fn: function(e) {
                                return {
                                    cx: 32,
                                    cy: 32,
                                    a: [{
                                        fn: function() {
                                            return {
                                                an: "r",
                                                begin: "".concat(-1 * e, "s"),
                                                dur: "2s",
                                                v: "0;24",
                                                keyTimes: "0;1",
                                                keySplines: "0.1,0.2,0.3,1",
                                                calcMode: "spline",
                                                rc: s
                                            }
                                        },
                                        t: 1
                                    }, {
                                        fn: function() {
                                            return {
                                                dur: "2s",
                                                an: l,
                                                begin: "".concat(-1 * e, "s"),
                                                v: ".2;1;.2;0",
                                                rc: s
                                            }
                                        },
                                        t: 1
                                    }]
                                }
                            },
                            t: 2
                        }]
                    },
                    spiral: {
                        defs: [{
                            linearGradient: [{
                                id: "sGD",
                                gradientUnits: "userSpaceOnUse",
                                x1: 55,
                                y1: 46,
                                x2: 2,
                                y2: 46,
                                stop: [{
                                    offset: .1,
                                    class: "stop1"
                                }, {
                                    offset: 1,
                                    class: "stop2"
                                }]
                            }]
                        }],
                        g: [{
                            sw: 4,
                            lc: p,
                            f: c,
                            path: [{
                                stroke: "url(#sGD)",
                                d: "M4,32 c0,15,12,28,28,28c8,0,16-4,21-9"
                            }, {
                                d: "M60,32 C60,16,47.464,4,32,4S4,16,4,32"
                            }],
                            at: [g]
                        }]
                    }
                };

            function m(e, t, r, o) {
                var i = document.createElement(u[e] || e);
                Object.keys(t).forEach((function(e) {
                    var r = t[e];
                    r instanceof Array ? r.forEach((function(t) {
                        var r = t.fn,
                            n = t.t;
                        if (r)
                            for (var a = 0; a < n; a++) m(e, t.fn(a, o), i, o);
                        else m(e, t, i, o)
                    })) : function(e, t, r) {
                        e.setAttribute(u[t] || t, r)
                    }(i, e, r)
                })), r.appendChild(i)
            }
            const h = function(e) {
                var t = e.type,
                    r = (0, o.__rest)(e, ["type"]),
                    i = n().useRef();
                return n().useEffect((function() {
                    var e = f[t];
                    if (i.current instanceof Element) {
                        var r = document.createElement("div");
                        e ? m("svg", {
                            viewBox: "0 0 64 64",
                            g: [e]
                        }, r, t) : r.innerHTML = '\n          <svg class="css" viewBox="25 25 50 50">\n            <circle class="css" cx="50" cy="50" r="20" fill="none"/>\n          </svg>\n        ', i.current.innerHTML = r.innerHTML
                    }
                }), [t]), n().createElement("div", (0, o.__assign)({}, r, {
                    ref: i
                }))
            };
            var v = r("qrIQ"),
                y = r("O94r"),
                w = r.n(y),
                B = r("STQw");
            r("0BMk");
            const S = function(e) {
                var t = e.type,
                    r = e.className,
                    i = (0, o.__rest)(e, ["type", "className"]),
                    a = (0, B.r)().prefixCls,
                    l = w()("".concat(a, "-spinner"), r);
                if (v.lq) throw new Error("this component only use Web side");
                return n().createElement(h, (0, o.__assign)({}, i, {
                    type: t,
                    className: l
                }))
            }
        },
        deT9: (e, t, r) => {
            var o = r("vGGS"),
                i = r("obGE");

            function n(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            n.prototype = o(i.prototype), n.prototype.constructor = n, e.exports = n
        },
        "0+c5": (e, t, r) => {
            var o = r("vGGS"),
                i = r("obGE");

            function n(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            n.prototype = o(i.prototype), n.prototype.constructor = n, e.exports = n
        },
        cPMt: e => {
            e.exports = function(e, t, r, o) {
                var i = -1,
                    n = null == e ? 0 : e.length;
                for (o && n && (r = e[++i]); ++i < n;) r = t(r, e[i], i, e);
                return r
            }
        },
        Q4oW: (e, t, r) => {
            var o = r("zKkv"),
                i = r("bz5b")(o);
            e.exports = i
        },
        zKkv: (e, t, r) => {
            var o = r("UdtX"),
                i = r("BlJA");
            e.exports = function(e, t) {
                return e && o(e, t, i)
            }
        },
        obGE: e => {
            e.exports = function() {}
        },
        "5q8j": e => {
            e.exports = function(e, t, r, o, i) {
                return i(e, (function(e, i, n) {
                    r = o ? (o = !1, e) : t(r, e, i, n)
                })), r
            }
        },
        uA6v: (e, t, r) => {
            var o = r("zWgn"),
                i = r("BVx2"),
                n = i ? function(e, t) {
                    return i.set(e, t), e
                } : o;
            e.exports = n
        },
        vyvt: (e, t, r) => {
            var o = r("H87J");
            e.exports = function(e, t) {
                return o(t, (function(t) {
                    return [t, e[t]]
                }))
            }
        },
        "6sC/": e => {
            var t = Math.max;
            e.exports = function(e, r, o, i) {
                for (var n = -1, a = e.length, l = o.length, s = -1, d = r.length, p = t(a - l, 0), c = Array(d + p), u = !i; ++s < d;) c[s] = r[s];
                for (; ++n < l;)(u || n < a) && (c[o[n]] = e[n]);
                for (; p--;) c[s++] = e[n++];
                return c
            }
        },
        gGwV: e => {
            var t = Math.max;
            e.exports = function(e, r, o, i) {
                for (var n = -1, a = e.length, l = -1, s = o.length, d = -1, p = r.length, c = t(a - s, 0), u = Array(c + p), g = !i; ++n < c;) u[n] = e[n];
                for (var b = n; ++d < p;) u[b + d] = r[d];
                for (; ++l < s;)(g || n < a) && (u[b + o[l]] = e[n++]);
                return u
            }
        },
        "qFO/": e => {
            e.exports = function(e, t) {
                for (var r = e.length, o = 0; r--;) e[r] === t && ++o;
                return o
            }
        },
        bz5b: (e, t, r) => {
            var o = r("9y2L");
            e.exports = function(e, t) {
                return function(r, i) {
                    if (null == r) return r;
                    if (!o(r)) return e(r, i);
                    for (var n = r.length, a = t ? n : -1, l = Object(r);
                        (t ? a-- : ++a < n) && !1 !== i(l[a], a, l););
                    return r
                }
            }
        },
        HCUT: (e, t, r) => {
            var o = r("iWTG"),
                i = r("IBsm");
            e.exports = function(e, t, r) {
                var n = 1 & t,
                    a = o(e);
                return function t() {
                    var o = this && this !== i && this instanceof t ? a : e;
                    return o.apply(n ? r : this, arguments)
                }
            }
        },
        iWTG: (e, t, r) => {
            var o = r("vGGS"),
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
                    var r = o(e.prototype),
                        n = e.apply(r, t);
                    return i(n) ? n : r
                }
            }
        },
        LtMG: (e, t, r) => {
            var o = r("zaNA"),
                i = r("iWTG"),
                n = r("JtPM"),
                a = r("kBvp"),
                l = r("4mQY"),
                s = r("AeOa"),
                d = r("IBsm");
            e.exports = function(e, t, r) {
                var p = i(e);
                return function i() {
                    for (var c = arguments.length, u = Array(c), g = c, b = l(i); g--;) u[g] = arguments[g];
                    var x = c < 3 && u[0] !== b && u[c - 1] !== b ? [] : s(u, b);
                    if ((c -= x.length) < r) return a(e, t, n, i.placeholder, void 0, u, x, void 0, void 0, r - c);
                    var f = this && this !== d && this instanceof i ? p : e;
                    return o(f, this, u)
                }
            }
        },
        tUbk: (e, t, r) => {
            var o = r("0+c5"),
                i = r("cH1A"),
                n = r("rjis"),
                a = r("rKb1"),
                l = r("wxYD"),
                s = r("/Bkq");
            e.exports = function(e) {
                return i((function(t) {
                    var r = t.length,
                        i = r,
                        d = o.prototype.thru;
                    for (e && t.reverse(); i--;) {
                        var p = t[i];
                        if ("function" != typeof p) throw new TypeError("Expected a function");
                        if (d && !c && "wrapper" == a(p)) var c = new o([], !0)
                    }
                    for (i = c ? i : r; ++i < r;) {
                        p = t[i];
                        var u = a(p),
                            g = "wrapper" == u ? n(p) : void 0;
                        c = g && s(g[0]) && 424 == g[1] && !g[4].length && 1 == g[9] ? c[a(g[0])].apply(c, g[3]) : 1 == p.length && s(p) ? c[u]() : c.thru(p)
                    }
                    return function() {
                        var e = arguments,
                            o = e[0];
                        if (c && 1 == e.length && l(o)) return c.plant(o).value();
                        for (var i = 0, n = r ? t[i].apply(this, e) : o; ++i < r;) n = t[i].call(this, n);
                        return n
                    }
                }))
            }
        },
        JtPM: (e, t, r) => {
            var o = r("6sC/"),
                i = r("gGwV"),
                n = r("qFO/"),
                a = r("iWTG"),
                l = r("kBvp"),
                s = r("4mQY"),
                d = r("MRwE"),
                p = r("AeOa"),
                c = r("IBsm");
            e.exports = function e(t, r, u, g, b, x, f, m, h, v) {
                var y = 128 & r,
                    w = 1 & r,
                    B = 2 & r,
                    S = 24 & r,
                    k = 512 & r,
                    C = B ? void 0 : a(t);
                return function F() {
                    for (var A = arguments.length, T = Array(A), E = A; E--;) T[E] = arguments[E];
                    if (S) var z = s(F),
                        D = n(T, z);
                    if (g && (T = o(T, g, b, S)), x && (T = i(T, x, f, S)), A -= D, S && A < v) {
                        var H = p(T, z);
                        return l(t, r, e, F.placeholder, u, T, H, m, h, v - A)
                    }
                    var _ = w ? u : this,
                        I = B ? _[t] : t;
                    return A = T.length, m ? T = d(T, m) : k && A > 1 && T.reverse(), y && h < A && (T.length = h), this && this !== c && this instanceof F && (I = C || a(I)), I.apply(_, T)
                }
            }
        },
        I6tc: (e, t, r) => {
            var o = r("zaNA"),
                i = r("iWTG"),
                n = r("IBsm");
            e.exports = function(e, t, r, a) {
                var l = 1 & t,
                    s = i(e);
                return function t() {
                    for (var i = -1, d = arguments.length, p = -1, c = a.length, u = Array(c + d), g = this && this !== n && this instanceof t ? s : e; ++p < c;) u[p] = a[p];
                    for (; d--;) u[p++] = arguments[++i];
                    return o(g, l ? r : this, u)
                }
            }
        },
        kBvp: (e, t, r) => {
            var o = r("/Bkq"),
                i = r("SStt"),
                n = r("E2v+");
            e.exports = function(e, t, r, a, l, s, d, p, c, u) {
                var g = 8 & t;
                t |= g ? 32 : 64, 4 & (t &= ~(g ? 64 : 32)) || (t &= -4);
                var b = [e, t, l, g ? s : void 0, g ? d : void 0, g ? void 0 : s, g ? void 0 : d, p, c, u],
                    x = r.apply(void 0, b);
                return o(e) && i(x, b), x.placeholder = a, n(x, e, t)
            }
        },
        zWkt: (e, t, r) => {
            var o = r("vyvt"),
                i = r("kkM+"),
                n = r("aURW"),
                a = r("5KBi");
            e.exports = function(e) {
                return function(t) {
                    var r = i(t);
                    return "[object Map]" == r ? n(t) : "[object Set]" == r ? a(t) : o(t, e(t))
                }
            }
        },
        "P+cI": (e, t, r) => {
            var o = r("uA6v"),
                i = r("HCUT"),
                n = r("LtMG"),
                a = r("JtPM"),
                l = r("I6tc"),
                s = r("rjis"),
                d = r("9Oiy"),
                p = r("SStt"),
                c = r("E2v+"),
                u = r("m2YG"),
                g = Math.max;
            e.exports = function(e, t, r, b, x, f, m, h) {
                var v = 2 & t;
                if (!v && "function" != typeof e) throw new TypeError("Expected a function");
                var y = b ? b.length : 0;
                if (y || (t &= -97, b = x = void 0), m = void 0 === m ? m : g(u(m), 0), h = void 0 === h ? h : u(h), y -= x ? x.length : 0, 64 & t) {
                    var w = b,
                        B = x;
                    b = x = void 0
                }
                var S = v ? void 0 : s(e),
                    k = [e, t, r, b, x, w, B, f, m, h];
                if (S && d(k, S), e = k[0], t = k[1], r = k[2], b = k[3], x = k[4], !(h = k[9] = void 0 === k[9] ? v ? 0 : e.length : g(k[9] - y, 0)) && 24 & t && (t &= -25), t && 1 != t) C = 8 == t || 16 == t ? n(e, t, h) : 32 != t && 33 != t || x.length ? a.apply(void 0, k) : l(e, t, r, b);
                else var C = i(e, t, r);
                return c((S ? o : p)(C, k), e, t)
            }
        },
        cH1A: (e, t, r) => {
            var o = r("1xil"),
                i = r("UAs9"),
                n = r("7Pat");
            e.exports = function(e) {
                return n(i(e, void 0, o), e + "")
            }
        },
        rjis: (e, t, r) => {
            var o = r("BVx2"),
                i = r("nnm9"),
                n = o ? function(e) {
                    return o.get(e)
                } : i;
            e.exports = n
        },
        rKb1: (e, t, r) => {
            var o = r("QaiR"),
                i = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = e.name + "", r = o[t], n = i.call(o, t) ? r.length : 0; n--;) {
                    var a = r[n],
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
        wafF: e => {
            var t = /\{\n\/\* \[wrapped with (.+)\] \*/,
                r = /,? & /;
            e.exports = function(e) {
                var o = e.match(t);
                return o ? o[1].split(r) : []
            }
        },
        kEP7: e => {
            var t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            e.exports = function(e, r) {
                var o = r.length;
                if (!o) return e;
                var i = o - 1;
                return r[i] = (o > 1 ? "& " : "") + r[i], r = r.join(o > 2 ? ", " : " "), e.replace(t, "{\n/* [wrapped with " + r + "] */\n")
            }
        },
        "/Bkq": (e, t, r) => {
            var o = r("deT9"),
                i = r("rjis"),
                n = r("rKb1"),
                a = r("jm4U");
            e.exports = function(e) {
                var t = n(e),
                    r = a[t];
                if ("function" != typeof r || !(t in o.prototype)) return !1;
                if (e === r) return !0;
                var l = i(r);
                return !!l && e === l[0]
            }
        },
        "9Oiy": (e, t, r) => {
            var o = r("6sC/"),
                i = r("gGwV"),
                n = r("AeOa"),
                a = "__lodash_placeholder__",
                l = 128,
                s = Math.min;
            e.exports = function(e, t) {
                var r = e[1],
                    d = t[1],
                    p = r | d,
                    c = p < 131,
                    u = d == l && 8 == r || d == l && 256 == r && e[7].length <= t[8] || 384 == d && t[7].length <= t[8] && 8 == r;
                if (!c && !u) return e;
                1 & d && (e[2] = t[2], p |= 1 & r ? 0 : 4);
                var g = t[3];
                if (g) {
                    var b = e[3];
                    e[3] = b ? o(b, g, t[4]) : g, e[4] = b ? n(e[3], a) : t[4]
                }
                return (g = t[5]) && (b = e[5], e[5] = b ? i(b, g, t[6]) : g, e[6] = b ? n(e[5], a) : t[6]), (g = t[7]) && (e[7] = g), d & l && (e[8] = null == e[8] ? t[8] : s(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = p, e
            }
        },
        BVx2: (e, t, r) => {
            var o = r("4+Vk"),
                i = o && new o;
            e.exports = i
        },
        QaiR: e => {
            e.exports = {}
        },
        MRwE: (e, t, r) => {
            var o = r("QT01"),
                i = r("pnw1"),
                n = Math.min;
            e.exports = function(e, t) {
                for (var r = e.length, a = n(t.length, r), l = o(e); a--;) {
                    var s = t[a];
                    e[a] = i(s, r) ? l[s] : void 0
                }
                return e
            }
        },
        AeOa: e => {
            var t = "__lodash_placeholder__";
            e.exports = function(e, r) {
                for (var o = -1, i = e.length, n = 0, a = []; ++o < i;) {
                    var l = e[o];
                    l !== r && l !== t || (e[o] = t, a[n++] = o)
                }
                return a
            }
        },
        SStt: (e, t, r) => {
            var o = r("uA6v"),
                i = r("kG2z")(o);
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
            var o = r("wafF"),
                i = r("kEP7"),
                n = r("7Pat"),
                a = r("p4bK");
            e.exports = function(e, t, r) {
                var l = t + "";
                return n(e, i(l, a(o(l), r)))
            }
        },
        p4bK: (e, t, r) => {
            var o = r("LmOH"),
                i = r("OfKG"),
                n = [
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
                return o(n, (function(r) {
                    var o = "_." + r[0];
                    t & r[1] && !i(e, o) && e.push(o)
                })), e.sort()
            }
        },
        "e+ll": (e, t, r) => {
            var o = r("deT9"),
                i = r("0+c5"),
                n = r("QT01");
            e.exports = function(e) {
                if (e instanceof o) return e.clone();
                var t = new i(e.__wrapped__, e.__chain__);
                return t.__actions__ = n(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }
        },
        "3POh": (e, t, r) => {
            var o = r("P+cI");

            function i(e, t, r) {
                var n = o(e, 16, void 0, void 0, void 0, void 0, void 0, t = r ? void 0 : t);
                return n.placeholder = i.placeholder, n
            }
            i.placeholder = {}, e.exports = i
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
        veKZ: (e, t, r) => {
            var o = r("cPMt"),
                i = r("Q4oW"),
                n = r("S3pA"),
                a = r("5q8j"),
                l = r("wxYD");
            e.exports = function(e, t, r) {
                var s = l(e) ? o : a,
                    d = arguments.length < 3;
                return s(e, n(t, 4), r, d, i)
            }
        },
        fWyh: (e, t, r) => {
            var o = r("nvU9"),
                i = 1 / 0;
            e.exports = function(e) {
                return e ? (e = o(e)) === i || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
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
        "pL+m": (e, t, r) => {
            var o = r("zWkt")(r("BlJA"));
            e.exports = o
        },
        jm4U: (e, t, r) => {
            var o = r("deT9"),
                i = r("0+c5"),
                n = r("obGE"),
                a = r("wxYD"),
                l = r("tLQN"),
                s = r("e+ll"),
                d = Object.prototype.hasOwnProperty;

            function p(e) {
                if (l(e) && !a(e) && !(e instanceof o)) {
                    if (e instanceof i) return e;
                    if (d.call(e, "__wrapped__")) return s(e)
                }
                return new i(e)
            }
            p.prototype = n.prototype, p.prototype.constructor = p, e.exports = p
        },
        Vqct: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var o = r("DPeK"),
                i = r("aiFg"),
                n = r("DTvD"),
                a = n.useLayoutEffect;

            function l() {
                return !0
            }
            const s = function(e) {
                var t = (0, n.useRef)(null),
                    r = (0, n.useReducer)(l, !1),
                    s = r[0],
                    d = r[1],
                    p = e.noWrapper,
                    c = e.ssrOnly,
                    u = e.whenIdle,
                    g = e.whenVisible,
                    b = e.promise,
                    x = e.on,
                    f = void 0 === x ? [] : x,
                    m = e.children,
                    h = e.didHydrate,
                    v = (0, i.A)(e, ["noWrapper", "ssrOnly", "whenIdle", "whenVisible", "promise", "on", "children", "didHydrate"]);
                a((function() {
                    t.current.hasChildNodes() || d()
                }), []), (0, n.useEffect)((function() {
                    s && h && h()
                }), [s]), (0, n.useEffect)((function() {
                    if (!c && !s) {
                        var e = t.current,
                            r = [];
                        if (b && b.then(d, d), g) {
                            var o = p ? e : e.firstElementChild;
                            if (!o || "undefined" === typeof IntersectionObserver) return d();
                            var i = new IntersectionObserver((function(e) {
                                e.forEach((function(e) {
                                    (e.isIntersecting || e.intersectionRatio > 0) && d()
                                }))
                            }), "object" === typeof g ? g : {
                                rootMargin: "250px"
                            });
                            i.observe(o), r.push((function() {
                                i.disconnect()
                            }))
                        }
                        if (u)
                            if ("undefined" !== typeof requestIdleCallback) {
                                var n = requestIdleCallback(d, {
                                    timeout: 500
                                });
                                r.push((function() {
                                    cancelIdleCallback(n)
                                }))
                            } else {
                                var a = setTimeout(d, 2e3);
                                r.push((function() {
                                    clearTimeout(a)
                                }))
                            }
                        return [].concat(f).forEach((function(t) {
                                e.addEventListener(t, d, {
                                    once: !0,
                                    passive: !0
                                }), r.push((function() {
                                    e.removeEventListener(t, d, {})
                                }))
                            })),
                            function() {
                                r.forEach((function(e) {
                                    e()
                                }))
                            }
                    }
                }), [s, f, c, u, g, h, b, p]);
                var y = "string" === typeof p ? p : "div";
                return s ? p ? m : (0, n.createElement)(y, (0, o.A)({
                    ref: t,
                    style: {
                        display: "contents"
                    }
                }, v), m) : (0, n.createElement)(y, (0, o.A)({}, v, {
                    ref: t,
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: ""
                    }
                }))
            }
        }
    }
]);
//# debugId=3488144b-f309-5ba8-b579-273e5a3ab92b