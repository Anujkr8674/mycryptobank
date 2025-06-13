"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [357], {
        aE80: (n, e, r) => {
            r.d(e, {
                default: () => mn
            });
            var t, i = r("S+0I"),
                o = r("jbFV"),
                u = r.n(o),
                a = r("mXdx"),
                s = r("ZvZy"),
                l = r("1CC6"),
                c = r("jCkx"),
                d = r("H8rm"),
                h = r("KRuP"),
                f = r("BiCW"),
                g = r("9u/Z"),
                v = r("bJ6b"),
                p = r("DTvD"),
                m = r.n(p),
                b = r("ypu0"),
                x = r("4hgs"),
                j = r("XxhU"),
                y = r("bQ69"),
                A = ((0, p.createContext)(null), (0, p.createContext)({
                    isMobileForSSR: !1
                })),
                w = r("iKvg"),
                k = r("wPB1"),
                E = (r("FkjH"), t = {}, (0, w._)(t, y.C3, y.sk), (0, w._)(t, "finance-common", y.V$), t),
                _ = function(n) {
                    var e = n.children,
                        r = l.U.read("bnc-uuid") || "",
                        t = (0, p.useState)(""),
                        i = (t[0], t[1], r),
                        o = y.Af,
                        u = (0, p.useMemo)((function() {
                            return {
                                THEMIS_ADDRESS: o,
                                THEMIS_ENV: y.lF,
                                uid: i
                            }
                        }), [i]);
                    return (0, p.useEffect)((function() {
                        0
                    }), []), (0, a.jsx)(k.g, {
                        THEMIS_AUTH_HEADER_MAP: E,
                        enabled: !0,
                        themisConfig: u,
                        enableLocalCache: !0,
                        children: e
                    })
                },
                C = r("Qhol"),
                S = r("OGoN"),
                U = r("geo0"),
                H = r("6HbK"),
                M = r("u7pG"),
                P = r("gex/"),
                T = r("LtgJ"),
                D = r("F6Re"),
                F = r("MD8j"),
                L = r("XOJJ"),
                I = (0, p.memo)((function(n) {
                    var e = n.children,
                        r = (0, C.jH7)(),
                        t = (0, F.d4)(D.maketIsRedUpGreenDown),
                        i = (0, C.DPo)().isLight,
                        o = (0, C.joH)(),
                        u = (0, C.by5)(),
                        s = (0, p.useMemo)((function() {
                            return [i ? U.BB : U.XT, i ? H.bK : H.zd]
                        }), [i]),
                        l = s[0],
                        c = s[1];
                    return (0, a.jsx)(M.A, {
                        mode: i ? "light" : "dark",
                        themeColors: l,
                        themeExtraColors: c,
                        isRTL: "rtl" === r,
                        isReverse: t,
                        colorMode: u === y.Ds ? y.Ds : y.Nz,
                        isCVD: o,
                        children: (0, a.jsx)(P.A, {
                            children: (0, a.jsx)(T.A, {
                                children: e
                            })
                        })
                    })
                }));
            I.displayName = "UniversalUIKitProvider";
            var R = function(n) {
                var e = n.children,
                    r = (0, C.jH7)(),
                    t = (0, p.useContext)(L.IT);
                return (0, a.jsx)(S.A, {
                    dir: r,
                    theme: t,
                    children: (0, a.jsx)(I, {
                        children: e
                    })
                })
            };
            const B = m().memo(R);
            var K = r("NC2t"),
                O = r("d12p");

            function N() {
                var n = (0, K._)(["\n    @media (max-width: ", "px) {\n      ", "\n    }\n  "]);
                return N = function() {
                    return n
                }, n
            }
            var W = {
                desktop: 1260,
                tablet: 992,
                phone: 760
            };
            const Z = Object.keys(W).reduce((function(n, e) {
                return n[e] = function() {
                    for (var n = arguments.length, r = new Array(n), t = 0; t < n; t++) r[t] = arguments[t];
                    return (0, h.AH)(N(), W[e], h.AH.apply(void 0, (0, O._)(r)))
                }, n
            }), {});
            var J = r("G7PN");

            function Q() {
                var n = (0, K._)(["display: none !important;"]);
                return Q = function() {
                    return n
                }, n
            }

            function X() {
                var n = (0, K._)(["\n        html {\n          overflow: -moz-hidden-unscrollable;\n          height: 100%;\n          -webkit-tap-highlight-color: transparent;\n          background-color: var(--color-TradeBg) !important;\n        }\n        body {\n          margin: 0;\n          height: 100%;\n          width: 100vw;\n          overflow-x: ", ";\n          overflow-y: auto;\n          -ms-overflow-style: none;\n          -webkit-overflow-scrolling: touch;\n          -webkit-tap-highlight-color: transparent;\n          background-color: var(--color-TradeBg) !important;\n          --color-CUSTOM-yellow: ", ";\n        }\n        h1 {\n          margin: 0;\n          padding: 0;\n        }\n        #__next {\n          max-width: 100vw;\n          overflow-x: hidden;\n        }\n        input {\n          font-family: inherit;\n\n          &::placeholder {\n            font-style: normal !important;\n          }\n        }\n        .bn-input-status-disabled {\n          > input {\n            &::placeholder {\n              color: ", ";\n            }\n          }\n        }\n\n        .list-grid {\n          > div > div > div {\n            margin-top: 0;\n            margin-bottom: 0;\n            padding-left: 0;\n            padding-right: 0;\n            height: 100%;\n            > div {\n              flex: 1;\n              height: 100%;\n            }\n          }\n        }\n        .chatWidget {\n          ", ";\n        }\n      "]);
                return X = function() {
                    return n
                }, n
            }

            function z() {
                var n = (0, J.DP)().isLight;
                return (0, a.jsx)(h.mL, {
                    styles: function() {
                        return (0, h.AH)(X(), "hidden !important", n ? "#FDF8E6" : "#2E2A1E", n ? "#1E2026" : "#E6E8EA", Z.phone(Q()))
                    }
                })
            }
            var G = r("hrAD"),
                V = r("qoEP"),
                $ = r("S9mB"),
                q = r("rWKu"),
                Y = r("90cZ"),
                nn = r("379/"),
                en = r("Hf/4"),
                rn = r("2nAp");
            $.A.use(q.r9), y.F6 && ((0, nn.P5)(y.Wg, y.Ef), $.A.use(nn.Ay));
            var tn = {
                fallbackLng: "en",
                debug: !1,
                saveMissing: !1,
                react: {
                    useSuspense: !1,
                    bindI18n: "loaded",
                    bindI18nStore: "added"
                },
                partialBundledLanguages: !0
            };
            const on = function(n) {
                var e = n.i18n,
                    r = void 0 === e ? {} : e,
                    t = n.lng,
                    i = void 0 === t ? "en" : t,
                    o = n.ns,
                    u = n.children,
                    s = (0, p.useState)(!1),
                    l = s[0],
                    c = s[1],
                    d = (0, p.useMemo)((function() {
                        return Object.keys(r) || []
                    }), [r]);
                l || (c(!0), $.A.init((0, V._)((0, G._)({}, tn), {
                    ns: d,
                    defaultNS: o,
                    fallbackLng: i,
                    resources: (0, w._)({}, i, r),
                    lng: i,
                    backend: {
                        ajax: function() {}
                    },
                    postProcess: nn.Ay.name
                })));
                var h = (0, en.A)(d);
                return (0, p.useEffect)((function() {
                    h && h !== d && (d.length > 0 && rn.F.postTask((function() {
                        return d.forEach((function(n) {
                            return $.A.addResourceBundle(i, n, r[n], !0, !0)
                        }))
                    }), {
                        priority: "user-blocking"
                    }), $.A.changeLanguage(i))
                }), [d, r, i, h]), (0, a.jsx)(Y.x, {
                    i18n: $.A,
                    children: u
                })
            };
            var un = r("wtFP"),
                an = function(n) {
                    var e = n.children,
                        r = (0, p.useState)(!1),
                        t = r[0],
                        i = r[1];
                    return (0, p.useEffect)((function() {
                        i(!0)
                    }), []), t ? (0, a.jsx)(a.Fragment, {
                        children: e
                    }) : (0, a.jsx)("div", {
                        suppressHydrationWarning: !0,
                        dangerouslySetInnerHTML: {
                            __html: ""
                        }
                    })
                },
                sn = (r("+ZU/"), r("Zc+d"), r("6Xx4")),
                ln = r("zPCU"),
                cn = r("KfOe"),
                dn = r("1luf"),
                hn = r("agyp"),
                fn = r("K81M"),
                gn = r("D6JS");
            (0, sn.rU)(gn.pF), (0, sn.rU)(cn.ud), (0, sn.rU)(ln.E), (0, sn.rU)(dn.ip), (0, sn.rU)(hn.A), (0, sn.rU)(fn.Q1);
            var vn = (0, f.A)((0, i._)(u().mark((function n() {
                    return u().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                return n.abrupt("return", Promise.all([r.e(6934), r.e(7376), r.e(8004)]).then(r.bind(r, "fTEi")));
                            case 1:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                }))), {
                    webpack: function() {
                        return ["fTEi"]
                    },
                    ssr: !1,
                    loading: function() {
                        return null
                    }
                }),
                pn = new x.QueryClient({
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: !1,
                            retry: !1
                        }
                    }
                });
            const mn = function() {
                var n = (0, g.L)().lang,
                    e = (0, p.useContext)(j.$),
                    r = (0, p.useMemo)((function() {
                        return (0, d.A)({
                            stylisPlugins: ["rtl" === (0, s.y)(n) ? b.Ay : void 0]
                        })
                    }), [n]);
                return (0, p.useMemo)((function() {
                    var n, e, r;
                    (0, c.Lu)({
                        clientType: "web",
                        isHttp: !0,
                        sourceUrl: "".concat(y.$L, "/market"),
                        track: un.u4,
                        getSessionInfo: function() {
                            return new Promise((function(t) {
                                return t({
                                    "bnc-uuid": null !== (n = l.U.read("bnc-uuid")) && void 0 !== n ? n : void 0,
                                    lang: null !== (e = l.U.read("lang")) && void 0 !== e ? e : void 0,
                                    cr00: null !== (r = l.U.read("cr00")) && void 0 !== r ? r : void 0
                                })
                            }))
                        }
                    })
                }), []), (0, a.jsx)(on, {
                    i18n: e,
                    lng: n,
                    ns: "trade-ui",
                    children: (0, a.jsx)(B, {
                        children: (0, a.jsxs)(_, {
                            children: [(0, a.jsx)(vn, {}), (0, a.jsx)(z, {}), (0, a.jsx)(A.Provider, {
                                value: {
                                    isMobileForSSR: !1
                                },
                                children: (0, a.jsx)(h._y, {
                                    value: r,
                                    children: (0, a.jsx)(x.QueryClientProvider, {
                                        client: pn,
                                        children: (0, a.jsx)(an, {
                                            children: (0, a.jsx)(v.Tp, {})
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            }
        }
    }
]);