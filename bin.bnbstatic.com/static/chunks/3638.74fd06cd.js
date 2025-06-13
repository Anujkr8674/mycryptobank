"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [3638, 5496], {
        MVhD: (e, t, r) => {
            r.d(t, {
                O: () => a,
                Q: () => o
            });
            var n = r("DTvD"),
                o = (0, n.createContext)(void 0),
                a = function() {
                    var e = (0, n.useContext)(o);
                    if (!e) throw new Error("SpotCoreProvider: Prop getSDK is not available");
                    return e
                }
        },
        ozu2: (e, t, r) => {
            r.d(t, {
                n: () => a,
                z: () => o
            });
            var n = r("DTvD"),
                o = (0, n.createContext)(null),
                a = function() {
                    return (0, n.useContext)(o)
                }
        },
        "k+tL": (e, t, r) => {
            r.d(t, {
                b: () => u
            });
            var n = r("DTvD"),
                o = r.n(n),
                a = r("MVhD"),
                s = r("ozu2"),
                u = (0, n.memo)((function(e) {
                    var t = e.getSDK,
                        r = e.isLoggedIn,
                        n = e.children;
                    return o().createElement(a.Q.Provider, {
                        value: t
                    }, o().createElement(s.z.Provider, {
                        value: r
                    }, n))
                }));
            u.displayName = "SpotCoreProvider"
        },
        "1akB": (e, t, r) => {
            r.d(t, {
                H: () => f,
                v: () => p
            });
            var n = r("S+0I"),
                o = r("jbFV"),
                a = r.n(o),
                s = r("DTvD"),
                u = r("O13v"),
                i = r("zHUU"),
                c = r("bQ69"),
                l = r("Qhol"),
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : []).forEach((function(t) {
                        "string" === typeof(null === e || void 0 === e ? void 0 : e[t]) && (e[t] = e[t].replace(/&amp;/g, "&").replace(/&gt;/g, ">"))
                    })), e
                },
                f = function() {
                    var e = (0, l.ok2)().i18n,
                        t = (0, i.Bl)();
                    (0, s.useEffect)((function() {
                        function r() {
                            return (r = (0, n._)(a().mark((function r() {
                                var n, o;
                                return a().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, r.next = 3, (0, u.TU)({
                                                basePath: c.pR,
                                                locale: t,
                                                namespace: "strategy-widget"
                                            });
                                        case 3:
                                            n = r.sent, o = d(n, ["futuresGrid-strategyAccount-hint", "spotGrid-strategyAccount-hint", "wallet-strategyAccount-hint", "terminate-transferAmount-content", "terminate-strategyAmount-content"]), e.addResourceBundle(t, "strategy-widget", o), r.next = 10;
                                            break;
                                        case 8:
                                            r.prev = 8, r.t0 = r.catch(0);
                                        case 10:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [0, 8]
                                ])
                            })))).apply(this, arguments)
                        }
                        e.hasResourceBundle(t, "strategy-widget") || function() {
                            r.apply(this, arguments)
                        }()
                    }), [t])
                },
                p = function() {
                    var e = (0, l.ok2)().i18n,
                        t = (0, i.Bl)();
                    (0, s.useEffect)((function() {
                        function r() {
                            return (r = (0, n._)(a().mark((function r() {
                                var n;
                                return a().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return r.prev = 0, r.next = 3, (0, u.TU)({
                                                basePath: c.pR,
                                                locale: t,
                                                namespace: "futures-strategy-ui"
                                            });
                                        case 3:
                                            n = r.sent, e.addResourceBundle(t, "futures-strategy-ui", n), r.next = 9;
                                            break;
                                        case 7:
                                            r.prev = 7, r.t0 = r.catch(0);
                                        case 9:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r, null, [
                                    [0, 7]
                                ])
                            })))).apply(this, arguments)
                        }
                        e.hasResourceBundle(t, "futures-strategy-ui") || function() {
                            r.apply(this, arguments)
                        }()
                    }), [t])
                }
        },
        AMZT: (e, t, r) => {
            r.d(t, {
                A: () => y
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                s = r("MD8j"),
                u = r("bQ69"),
                i = r("C7Nc"),
                c = r("J+BU"),
                l = r("Ykh1"),
                d = r("ajRU"),
                f = r("nxcL"),
                p = r("jcil"),
                g = r("PWhi"),
                m = function(e) {
                    var t = e.tradeType,
                        r = e.layout,
                        a = e.openTwo,
                        m = e.platform,
                        y = (0, o.useState)(void 0),
                        h = y[0],
                        v = y[1],
                        A = (0, o.useState)(void 0),
                        x = A[0],
                        b = A[1],
                        T = (0, i.TK)().userAssets,
                        S = (0, o.useCallback)((function(e, t) {
                            e === c.Vl.BUY ? v(t) : b(t)
                        }), []),
                        j = (0, s.wA)(),
                        C = (0, o.useCallback)((function() {
                            setTimeout((function() {
                                t === u.Gr.ISOLATED && j.margin.queryIsolatedAccount()
                            }), u.bF)
                        }), [t, j.margin]),
                        k = (0, o.useMemo)((function() {
                            return a && m === u.PC
                        }), [a, m]),
                        R = (0, l._h)(),
                        D = R.storage,
                        M = R.changeStorage;
                    return (0, n.jsx)(g.z, {
                        value: {
                            buyMode: h,
                            sellMode: x,
                            onModeChange: S
                        },
                        children: (0, n.jsx)(d.A, {
                            layout: r,
                            tradeType: t,
                            platform: m,
                            openTwo: a,
                            userAssets: T,
                            magicRefresh: C,
                            children: k ? (0, n.jsx)(p.A, {
                                layout: r,
                                storage: D,
                                changeStorage: M
                            }) : (0, n.jsx)(f.A, {
                                layout: r,
                                storage: D,
                                changeStorage: M
                            })
                        })
                    })
                };
            const y = a().memo(m)
        },
        jcil: (e, t, r) => {
            r.d(t, {
                A: () => A
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                s = r("BiCW"),
                u = r("J+BU"),
                i = r("bQ69"),
                c = r("hAzz"),
                l = r("b9LU"),
                d = r("4dkC"),
                f = r("ZGye"),
                p = (0, s.A)((function() {
                    return r.e(1881).then(r.bind(r, "vvab"))
                }), {
                    webpack: function() {
                        return ["vvab"]
                    }
                }),
                g = (0, s.A)((function() {
                    return r.e(4674).then(r.bind(r, "ysvF"))
                }), {
                    webpack: function() {
                        return ["ysvF"]
                    }
                }),
                m = (0, s.A)((function() {
                    return r.e(130).then(r.bind(r, "xrHt"))
                }), {
                    webpack: function() {
                        return ["xrHt"]
                    }
                }),
                y = (0, s.A)((function() {
                    return r.e(5835).then(r.bind(r, "eOaE"))
                }), {
                    webpack: function() {
                        return ["eOaE"]
                    }
                }),
                h = (0, o.memo)((function(e) {
                    var t = e.orderType,
                        r = e.setOrderType,
                        a = e.tradeType,
                        s = e.layout,
                        u = e.hideHeadingRight,
                        l = void 0 !== u && u,
                        d = e.subTypes,
                        p = (0, o.useRef)();
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsxs)("div", {
                            className: "headingWrap",
                            children: [(0, n.jsx)(f.A, {
                                orderType: t,
                                onChange: r,
                                tradeType: a,
                                subTypes: d
                            }), !l && s !== i.ug && ((0, c.V$)(a) ? (0, n.jsx)(m, {
                                layout: s,
                                tradeType: a,
                                portalRef: p
                            }) : (0, n.jsx)(y, {
                                layout: s
                            }))]
                        }), (0, n.jsx)("div", {
                            ref: p
                        })]
                    })
                })),
                v = function(e) {
                    var t = e.side,
                        r = e.tradeType,
                        a = void 0 === r ? u.Gr.SPOT : r,
                        s = e.storage,
                        f = e.changeStorage,
                        m = e.layout,
                        y = e.hideHeadingRight,
                        v = e.subTypes,
                        A = (0, o.useContext)(l.x),
                        x = A.orderType,
                        b = A.setOrderType;
                    return (0, n.jsxs)("div", {
                        className: "classic-layout",
                        children: [(0, n.jsx)(h, {
                            orderType: x,
                            setOrderType: b,
                            tradeType: a,
                            layout: m,
                            hideHeadingRight: y,
                            subTypes: v
                        }), m === i.ug && (0, c.ed)(a) && (0, n.jsx)(g, {
                            tradeType: a,
                            className: "isoStatusTips"
                        }), (0, n.jsxs)("div", {
                            className: "classic-wrap ".concat(m),
                            children: [(0, n.jsx)(d.A, {
                                side: "BUY",
                                formSide: t,
                                tradeType: a,
                                layout: m,
                                openBuySellGrid: !0,
                                orderType: x,
                                setOrderType: b,
                                storage: s,
                                changeStorage: f
                            }, "BUY"), (0, n.jsx)(d.A, {
                                side: "SELL",
                                formSide: t,
                                tradeType: a,
                                layout: m,
                                openBuySellGrid: !0,
                                orderType: x,
                                setOrderType: b,
                                storage: s,
                                changeStorage: f
                            }, "SELL")]
                        }), (0, c.V$)(a) && (0, n.jsx)(p, {})]
                    })
                };
            const A = a().memo(v)
        },
        odDi: (e, t, r) => {
            r.d(t, {
                A: () => p
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                s = r("Qhol"),
                u = r("bQ69"),
                i = r("jcil"),
                c = r("nxcL"),
                l = r("ajRU"),
                d = r("Ykh1"),
                f = function(e) {
                    var t = e.layout,
                        r = e.openTwo,
                        a = e.platform,
                        f = e.hideHeadingRight,
                        p = e.subTypes,
                        g = (0, s.dUb)(),
                        m = (0, o.useMemo)((function() {
                            return r && a === u.PC
                        }), [r, a]),
                        y = (0, d._h)(),
                        h = y.storage,
                        v = y.changeStorage;
                    return (0, n.jsx)(l.A, {
                        platform: a,
                        layout: t,
                        openTwo: r,
                        tradeType: u.Gr.SPOT,
                        userAssets: g,
                        children: m ? (0, n.jsx)(i.A, {
                            layout: t,
                            storage: h,
                            changeStorage: v,
                            hideHeadingRight: f,
                            subTypes: p
                        }) : (0, n.jsx)(c.A, {
                            layout: t,
                            changeStorage: v,
                            storage: h,
                            subTypes: p
                        })
                    })
                };
            const p = a().memo(f)
        },
        tcVk: (e, t, r) => {
            r.d(t, {
                A: () => x
            });
            var n = r("hrAD"),
                o = r("qoEP"),
                a = r("mXdx"),
                s = r("DTvD"),
                u = r.n(s),
                i = r("zHUU"),
                c = r("Qhol"),
                l = r("bQ69"),
                d = r("Vcag"),
                f = r("Dj9W"),
                p = r("JyEq"),
                g = r("ajRU"),
                m = r("k+tL"),
                y = r("1akB"),
                h = u().lazy((function() {
                    return Promise.all([r.e(995), r.e(6140), r.e(9431), r.e(7586), r.e(8948), r.e(4917), r.e(7416), r.e(7650)]).then(r.bind(r, "yz0J"))
                })),
                v = u().lazy((function() {
                    return Promise.all([r.e(995), r.e(6140), r.e(9431), r.e(7586), r.e(8948), r.e(4917), r.e(7416), r.e(6024)]).then(r.bind(r, "83IC"))
                })),
                A = function(e) {
                    var t = e.layout,
                        r = void 0 === t ? l.Pv : t,
                        A = e.platform,
                        x = e.openTwo,
                        b = (0, c.dUb)(),
                        T = (0, s.useMemo)((function() {
                            return x && A === l.PC
                        }), [x, A]),
                        S = (0, c.vzt)().isLoggedIn,
                        j = void 0 !== S && S;
                    (0, y.v)(), (0, y.H)(), (0, c.NZ0)();
                    var C = (0, f.o)().getI18n,
                        k = (0, i.Bl)(),
                        R = (0, s.useMemo)((function() {
                            return {
                                getI18n: C,
                                locale: k,
                                userAssets: b,
                                renderRegisterLogin: function(e) {
                                    return (0, a.jsx)(d.A, (0, o._)((0, n._)({}, e), {
                                        open: T
                                    }))
                                }
                            }
                        }), [C, k, b, T]);
                    return (0, a.jsx)(g.A, {
                        platform: A,
                        layout: r,
                        openTwo: !1,
                        tradeType: l.Gr.GRID,
                        children: (0, a.jsx)(m.b, {
                            getSDK: l.D5,
                            isLoggedIn: j,
                            children: (0, a.jsx)(p.cb.Provider, {
                                value: R,
                                children: (0, a.jsxs)(u().Fragment, {
                                    children: [r === l.ug && !T && (0, a.jsx)(s.Suspense, {
                                        fallback: null,
                                        children: (0, a.jsx)(v, {})
                                    }), r !== l.ug && (0, a.jsx)(s.Suspense, {
                                        fallback: null,
                                        children: (0, a.jsx)(h, {})
                                    })]
                                })
                            })
                        })
                    })
                };
            const x = u().memo(A)
        },
        a6dZ: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => A
            });
            var n = r("hrAD"),
                o = r("mguP"),
                a = r("mXdx"),
                s = r("DTvD"),
                u = r("/Cny"),
                i = r("2IQ4"),
                c = r("Qhol"),
                l = r("bQ69"),
                d = r("hAzz"),
                f = r("b9LU"),
                p = r("odDi"),
                g = r("AMZT"),
                m = r("tcVk"),
                y = r("hiCD"),
                h = {
                    ".close-button": {
                        cursor: "pointer",
                        flexShrink: 0,
                        color: "icons.close",
                        position: "absolute",
                        top: "2px",
                        right: "2px",
                        "&:hover": {
                            color: "t.third"
                        }
                    }
                },
                v = function(e) {
                    var t = e.layout,
                        r = e.platform,
                        v = e.w,
                        A = e.maxW,
                        x = e.onRemove,
                        b = e.currentSymbol,
                        T = e.currentBaseAsset,
                        S = e.currentQuoteAsset,
                        j = e.group,
                        C = e.currentActiveLayoutGroup,
                        k = e.currentActiveLayout,
                        R = e.widgetKey,
                        D = e.currentTabs,
                        M = e.onShowTransferPanel,
                        w = e.subTypes,
                        P = (0, o._)((0, c.Grl)(b, j), 1)[0],
                        I = (0, s.useState)(!1),
                        B = I[0],
                        E = I[1],
                        N = (0, c.nHk)();
                    (0, s.useEffect)((function() {
                        void 0 !== v && void 0 !== A && E(v === A)
                    }), [v, A]);
                    var _ = (0, s.useMemo)((function() {
                            return r !== l.ND ? {
                                height: "100%",
                                overflowX: "hidden"
                            } : null
                        }), [r]),
                        L = (0, s.useMemo)((function() {
                            return (0, d.V$)(P) ? (0, a.jsx)(g.A, {
                                tradeType: P,
                                layout: t,
                                platform: r,
                                openTwo: B
                            }, P) : (0, d.H3)(P) ? (0, a.jsx)(m.A, {
                                layout: t,
                                platform: r,
                                openTwo: B
                            }) : (0, a.jsx)(p.A, {
                                layout: t,
                                platform: r,
                                openTwo: B,
                                hideHeadingRight: !1,
                                subTypes: w
                            })
                        }), [t, r, P, B, w]);
                    return (0, a.jsx)(f.A, {
                        currentSymbol: b,
                        currentBaseAsset: T,
                        currentQuoteAsset: S,
                        currentGroup: j,
                        currentActiveLayoutGroup: C,
                        currentActiveLayout: k,
                        widgetKey: R,
                        currentTabs: D,
                        onShowTransferPanel: M,
                        children: (0, a.jsxs)(i.A, {
                            sx: (0, n._)({}, _, h),
                            children: [L, x && (0, a.jsx)(u.A, {
                                className: "close-button cancelIcon pro-layout-close-button",
                                onClick: function(e) {
                                    e.stopPropagation(), "function" === typeof x && x()
                                },
                                size: 16
                            }), (0, a.jsx)("div", {
                                className: "eventRegisterWrap",
                                children: N ? (0, a.jsx)(y.default, {
                                    tradeType: P,
                                    customAsset: !1,
                                    defaultSymbols: null
                                }) : null
                            })]
                        })
                    })
                };
            const A = (0, s.memo)(v)
        },
        hiCD: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => _
            });
            var n = r("S+0I"),
                o = r("hrAD"),
                a = r("qoEP"),
                s = r("mguP"),
                u = r("jbFV"),
                i = r.n(u),
                c = r("mXdx"),
                l = r("DTvD"),
                d = r("MD8j"),
                f = r("TiUw"),
                p = r("kU6N"),
                g = r("SgY9"),
                m = r("VjP6"),
                y = r("SmCU"),
                h = r("oFtQ"),
                v = r("WT+B"),
                A = r("hAzz"),
                x = r("wtFP"),
                b = r("bQ69"),
                T = r("Qhol"),
                S = r("C7Nc"),
                j = r("Ykh1"),
                C = r("6A/j"),
                k = r("b9t6"),
                R = r("qBqx"),
                D = r("uV5D"),
                M = r("ugWk"),
                w = r("QFrD"),
                P = r("xDV7"),
                I = r("sXI5"),
                B = {
                    color: "t.third",
                    fontSize: "20px",
                    cursor: "pointer",
                    "&:hover": {
                        color: "t.secondary"
                    }
                },
                E = function(e) {
                    var t = e.tradeType,
                        r = e.symbols,
                        o = e.customAsset,
                        a = (0, j.d9)(),
                        u = (0, s._)(r || a, 2),
                        y = u[0],
                        E = void 0 === y ? "" : y,
                        N = u[1],
                        _ = void 0 === N ? "" : N,
                        L = (0, w.b)(),
                        O = (0, S.TK)().userAssets,
                        G = (0, j.N8)(),
                        z = (0, f.e)(),
                        F = z.launchTransfer,
                        U = z.freshBalance,
                        Q = (0, h.bI)().openModal,
                        V = "".concat(E).concat(_),
                        q = (0, l.useMemo)((function() {
                            return O[E] || {}
                        }), [O, E]),
                        H = (0, l.useState)(!1),
                        W = H[0],
                        K = H[1],
                        X = (0, l.useRef)(),
                        Y = (0, d.wA)(),
                        Z = (0, T.x$o)(),
                        $ = (0, l.useRef)(),
                        J = (0, T.DPo)().isLight,
                        ee = (0, T.MRb)(),
                        te = (0, T.hFK)(),
                        re = (0, l.useCallback)((function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "".concat(E).concat(_),
                                t = I.Ay.close,
                                r = te[e],
                                n = r.baseAsset,
                                o = r.quoteAsset;
                            I.Ay.confirm({
                                isLight: J,
                                sx: {
                                    width: ["100%", "488px"]
                                },
                                content: (0, c.jsx)(P.A, {
                                    base: n || E,
                                    quote: o || _,
                                    getBtcPrice: ee,
                                    onClose: t,
                                    initialCoin: _
                                }),
                                hasFooter: !1
                            }).finally(I.Ay.close)
                        }), [E, _, J, ee, te]),
                        ne = (0, l.useCallback)((function(e, r) {
                            "function" === typeof U && U();
                            var n = e || t;
                            n === b.Gr.SPOT && F(r || (o ? {
                                from: "MAIN",
                                to: "MARGIN"
                            } : {
                                from: "CARD",
                                to: "MAIN",
                                defaultCoin: E
                            }));
                            n === b.Gr.CROSS && F(r || (o ? {
                                from: "MAIN",
                                to: "MARGIN"
                            } : {
                                from: "MAIN",
                                to: "MARGIN",
                                defaultCoin: E
                            }));
                            if (n === b.Gr.ISOLATED) {
                                if (L) return void re((null === r || void 0 === r ? void 0 : r.defaultIsoSymbol) || V);
                                F(r || (o ? {
                                    from: "MAIN",
                                    to: "ISOLATED_MARGIN"
                                } : {
                                    from: "MAIN",
                                    to: "ISOLATED_MARGIN",
                                    defaultIsoSymbol: V
                                }))
                            }
                        }), [t, F, E, V, U, o, L, re]),
                        oe = (0, l.useCallback)((function(e, r) {
                            Q({
                                defaultSymbol: V,
                                defaultAsset: _,
                                type: r || t,
                                isFromTrade: !0,
                                method: String(e).toUpperCase()
                            })
                        }), [Q, V, t, _]),
                        ae = (0, l.useCallback)((function(e) {
                            "CROSS" === (e || t) && K(!0), (0, x.u4)("$WebClick", {
                                $element_id: "leverage_adjust",
                                df_source: "margin",
                                module: "order_form",
                                layout: Z,
                                pageName: "margin_trading"
                            })
                        }), [Z, t]),
                        se = (0, l.useCallback)((function() {
                            return X.current.openModal()
                        }), []),
                        ue = (0, l.useCallback)((function(e, t, r) {
                            switch (e) {
                                case M.cP.TRANSTER:
                                    ne(t, r);
                                    break;
                                case M.cP.BORROW:
                                    oe("borrow", t);
                                    break;
                                case M.cP.REPAY:
                                    oe("repay", t);
                                    break;
                                case M.cP.ADJUST:
                                    ae(t);
                                    break;
                                case M.cP.COOLOFF:
                                    se()
                            }
                        }), [ae, oe, se, ne]);
                    (0, l.useEffect)((function() {
                        A.RR.once("triggerModal", ue)
                    }), [q, ue]);
                    var ie = (0, l.useCallback)((function() {
                            Y.margin.queryMarginAccount()
                        }), [Y.margin]),
                        ce = (0, l.useCallback)((function() {
                            K(!1), setTimeout((0, n._)(i().mark((function e() {
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Y.margin.queryMarginAccount();
                                        case 2:
                                            Y.margin.queryMarginAssets(), Y.products.queryMarginSymbol();
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            }))), 500)
                        }), [Y.margin, Y.products]),
                        le = (0, v.Z)((function() {
                            $.current.reFreshCrossQuiz()
                        })),
                        de = (0, v.Z)((0, n._)(i().mark((function e() {
                            var t, r, n, o, a, u, l;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = s._, e.next = 3, Promise.all([(0, C.Dl)({
                                            type: "LEVERAGE_TEST"
                                        })]);
                                    case 3:
                                        e.t1 = e.sent, t = (0, e.t0)(e.t1, 1), r = t[0], n = null === r || void 0 === r ? void 0 : r.quizPass, o = null === r || void 0 === r ? void 0 : r.country, n ? "AE" === o ? a = (0, p.aF)({
                                            sx: {
                                                padding: 0,
                                                minWidth: ["360px", "540px", "720px"]
                                            },
                                            closeSx: B,
                                            content: (0, c.jsx)(k.A, {
                                                onClose: function() {
                                                    return a()
                                                },
                                                onSubmit: le
                                            }),
                                            isMaskClose: !0
                                        }).close : u = (0, p.aF)({
                                            sx: {
                                                padding: 0,
                                                minWidth: ["360px", "540px", "720px"]
                                            },
                                            closeSx: B,
                                            content: (0, c.jsx)(R.M, {
                                                onClose: function() {
                                                    return u()
                                                },
                                                onSubmit: le
                                            }),
                                            isMaskClose: !0
                                        }).close : l = (0, p.aF)({
                                            sx: {
                                                padding: 0,
                                                minWidth: ["360px", "540px", "720px"]
                                            },
                                            closeSx: B,
                                            content: "AE" === o ? (0, c.jsx)(k.A, {
                                                onClose: function() {
                                                    return l()
                                                },
                                                onSubmit: le,
                                                isSigned: !1
                                            }) : (0, c.jsx)(D.s, {
                                                onClose: function() {
                                                    return l()
                                                },
                                                onSubmit: le
                                            }),
                                            isMaskClose: !0
                                        }).close;
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))),
                        fe = (0, v.Z)((function() {
                            A.RR.emit("triggerModal", M.cP.TRANSTER, b.Gr.CROSS, {
                                from: "MAIN",
                                to: "MARGIN"
                            })
                        }));
                    return (0, c.jsxs)(c.Fragment, {
                        children: [W && (0, c.jsx)(g.A, {
                            open: W,
                            curBar: G.rawMarginBar,
                            onConfirm: function() {
                                return ce()
                            },
                            triggerTransfer: fe,
                            onCloseIconClick: function() {
                                return K(!1)
                            },
                            triggerRepay: function() {
                                return oe("repay")
                            },
                            trackParams: {
                                df_source: "margin",
                                module: "order_form",
                                layout: Z,
                                pageName: "margin_trading"
                            },
                            canAdjustMarginBar: G.canAdjustMarginBar,
                            onClickQuiz: de,
                            cRef: $
                        }), (0, A.V$)(t) && (0, c.jsx)(m.A, {
                            ref: X,
                            onSuccess: ie
                        })]
                    })
                };

            function N(e) {
                var t = e.tradeType,
                    r = e.defaultSymbols,
                    n = e.customAsset,
                    s = (0, T.Pyz)(),
                    u = (0, T.nHk)(),
                    i = (0, d.wA)(),
                    f = (0, S.of)(),
                    p = f.setFinishTransfer,
                    g = f.setFinishBorrow,
                    m = (0, l.useCallback)((function(e) {
                        void 0 === e && p("true"), "BORROW" === e && g("true"), t === b.Gr.CROSS && (i.userCenter.updateState({
                            userInfo: (0, a._)((0, o._)({}, s), {
                                isExistMarginAccount: !0
                            })
                        }), setTimeout((function() {
                            i.margin.queryMarginAccount()
                        }), 1e3)), t === b.Gr.ISOLATED && i.margin.queryIsolatedAccount()
                    }), [t, i.margin, i.userCenter, s, p, g]),
                    v = (0, l.useCallback)((function(e) {
                        e || m()
                    }), [m]);
                return u ? (0, c.jsx)(y.z, {
                    afterTransfer: v,
                    defaultLazyFetch: !0,
                    needChangeQuoteAsset: !0,
                    children: (0, c.jsx)(h.by, {
                        children: (0, c.jsx)(E, {
                            tradeType: t,
                            symbols: r,
                            customAsset: n
                        })
                    })
                }) : null
            }
            const _ = (0, l.memo)(N)
        }
    }
]);