"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [8281], {
        tC4u: (e, t, r) => {
            r.d(t, {
                A: () => p
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("hTvQ"),
                s = r.n(i),
                l = r("d6PB");
            const c = {
                    position: "absolute",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%, -50%)",
                    textAlign: "center"
                },
                d = (0, o.memo)((function({
                    show: e = !0,
                    fullScreen: t = !1,
                    inner: r,
                    children: o,
                    zIndex: i
                }) {
                    if (!e) return o || null;
                    const s = (0, n.jsx)(l.A, {
                        sx: {
                            zIndex: i || "100",
                            ...c
                        }
                    });
                    return t ? (0, n.jsxs)(a().Fragment, {
                        children: [o, (0, n.jsx)("div", {
                            style: {
                                position: r ? "absolute" : "fixed",
                                top: 0,
                                left: 0,
                                width: "100%",
                                height: "100%",
                                background: "radial-gradient(rgba(0, 0, 0, 0.05) 30%, transparent)",
                                zIndex: 2e3
                            },
                            children: s
                        })]
                    }) : (0, n.jsxs)(a().Fragment, {
                        children: [o, s]
                    })
                }));
            let u;
            d.show = ({
                fullScreen: e = !1
            } = {}) => {
                u || (u = document.createElement("div"), document.body.appendChild(u)), s().render((0, n.jsx)(d, {
                    fullScreen: e
                }), u)
            }, d.hide = () => {
                u && s().render((0, n.jsx)(d, {
                    show: !1
                }), u)
            };
            const p = d
        },
        KljF: (e, t, r) => {
            r.d(t, {
                A: () => p
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("zHUU"),
                s = r("TR7n"),
                l = r("Qhol"),
                c = r("wtFP"),
                d = r("bQ69"),
                u = function(e) {
                    var t = e.type,
                        r = e.balance,
                        a = (0, l.ok2)().getI18n,
                        u = (0, i.Bl)();
                    (0, s.H)({
                        cdnHost: d.K5,
                        host: d.dM,
                        loadUikitStyle: !1
                    });
                    var p = (0, o.useCallback)((function() {
                        var e;
                        null === window || void 0 === window || null === (e = window.CONVERT_WIDGET) || void 0 === e || e.open({
                            source: "SPOT_WEB",
                            fromCoin: "BUSD",
                            targetCoin: "FDUSD",
                            walletType: "SPOT",
                            fromAmount: r,
                            lang: u
                        }).then((function(e) {})), (0, c.u4)("$WebClick", {
                            module: "convert_to_fdusd_hint",
                            $element_id: "hint_in_tradingpage_".concat(t),
                            df_source: "spot",
                            pageName: "spot_trading"
                        })
                    }), [u, r, t]);
                    return (0, n.jsx)("div", {
                        onClick: p,
                        style: {
                            fontSize: "12px",
                            cursor: "pointer",
                            whiteSpace: "nowrap",
                            color: "var(--color-PrimaryYellow)"
                        },
                        children: a("trd-convert-".concat(t))
                    })
                };
            const p = a().memo(u)
        },
        ODBe: (e, t, r) => {
            r.d(t, {
                A: () => v
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("zHUU"),
                s = r("TR7n"),
                l = r("kcvK"),
                c = r("gLBh"),
                d = r("GJ+9"),
                u = r("Qhol"),
                p = r("wtFP"),
                x = r("bQ69"),
                m = r("BBQg"),
                f = function(e) {
                    var t = e.type,
                        r = void 0 === t ? "trade" : t,
                        o = e.initConvertCoin,
                        a = e.balance,
                        f = e.base,
                        v = e.quote,
                        h = e.free,
                        g = (0, u.ok2)(),
                        b = g.getI18n,
                        y = g.t,
                        A = (0, i.Bl)(),
                        T = (0, m.j)({
                            baseAsset: o || f,
                            quoteAsset: o || v
                        }),
                        j = T.needConvert,
                        C = T.baseConvert,
                        S = (0, n.jsx)(c.x, {
                            t: y,
                            i18nKey: "trd-usdc-risk-desc",
                            defaults: "Due to local regulatory requirements, the trading service of this pair will not be available to you after 31st March 2025. Convert to and trade USDC pair instead or click here for <jump1>more details</jump1>.",
                            components: {
                                jump1: (0, n.jsx)(d.A, {
                                    target: "_blank",
                                    href: "/support/announcement/bcaa1f68d6a6450099056ff694ad6c46",
                                    className: "!text-SecondaryBg underline !cursor-pointer !font-[500]"
                                })
                            }
                        });
                    (0, s.H)({
                        cdnHost: x.K5,
                        host: x.dM,
                        loadUikitStyle: !1
                    });
                    return j ? Number(a) <= 0 ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsx)(l.A, {
                        tooltips: S,
                        useReactPopper: !0,
                        arrow: !0,
                        enablePortal: !0,
                        children: (0, n.jsx)("div", {
                            onClick: function() {
                                var e;
                                null === window || void 0 === window || null === (e = window.CONVERT_WIDGET) || void 0 === e || e.open({
                                    source: "SPOT_WEB",
                                    fromCoin: o || (C ? f : v),
                                    targetCoin: "USDC",
                                    walletType: "SPOT",
                                    fromAmount: "".concat(h),
                                    lang: A
                                }), (0, p.u4)("$WebClick", {
                                    $element_id: "web_".concat(r, "_convert_now"),
                                    df_source: "spot",
                                    pageName: "spot_trading"
                                })
                            },
                            className: "text-12px cursor-pointer whitespace-nowrap text-PrimaryYellow ml-[4px]",
                            children: b("trd-convert-usdc")
                        })
                    }) : (0, n.jsx)(n.Fragment, {})
                };
            const v = a().memo(f)
        },
        "61SC": (e, t, r) => {
            r.d(t, {
                CP: () => x,
                DY: () => u,
                GH: () => p,
                Lp: () => s,
                S$: () => l,
                XA: () => d,
                Xd: () => c,
                l: () => m
            });
            var n = r("hrAD"),
                o = r("qoEP"),
                a = r("wtFP"),
                i = {
                    eventCategory: "trade"
                },
                s = ((0, o._)((0, n._)({}, i), {
                    event: "trade",
                    eventAction: "click"
                }), (0, o._)((0, n._)({}, i), {
                    event: "trade",
                    eventAction: "popup_view"
                }), function() {}),
                l = function(e) {
                    e.symbol, e.tradeType, e.orderType, e.side, e.percentage, e.price, e.amount
                },
                c = function(e) {
                    e.orderType, e.clickContent
                },
                d = function(e) {
                    e.orderType, e.clickContent
                },
                u = function(e) {
                    e.symbol, e.tradeType, e.orderType, e.side, e.percentage, e.price, e.amount
                },
                p = function(e) {
                    e.clickContent
                },
                x = function(e) {
                    e.symbol, e.side, e.amount
                },
                m = function(e) {
                    var t = e.type;
                    (0, a.u4)("$WebClick", {
                        df_source: "spot",
                        module: "order_form",
                        $element_id: t
                    })
                }
        },
        JaRM: (e, t, r) => {
            r.d(t, {
                A: () => x,
                H: () => u
            });
            var n = r("hrAD"),
                o = r("qoEP"),
                a = r("KrVi"),
                i = r("mXdx"),
                s = r("DTvD"),
                l = r.n(s),
                c = r("1C1L"),
                d = r("3zHj"),
                u = function(e) {
                    var t = e.active,
                        r = e.disabled,
                        s = e.children,
                        l = e.value,
                        c = e.onChange,
                        u = e.style,
                        p = e.hasIcon,
                        x = void 0 !== p && p,
                        m = e.iconProps,
                        f = (0, a._)(e, ["active", "disabled", "children", "value", "onChange", "style", "hasIcon", "iconProps"]),
                        v = t ? "var(--color-PrimaryText)" : r ? "var(--color-DisabledText)" : "var(--color-SecondaryText)";
                    return (0, i.jsxs)("div", (0, o._)((0, n._)({
                        className: "trade-dropdown-item",
                        onClick: function() {
                            return !r && c(l)
                        },
                        style: (0, n._)({
                            padding: "10px 8px",
                            fontSize: "14px",
                            lineHeight: "22px",
                            minWidth: "120px",
                            alignItems: "center",
                            display: "flex",
                            justifyContent: "space-between",
                            color: v,
                            borderRadius: "0px",
                            cursor: r ? "no-drop" : "pointer",
                            backgroundColor: t ? "var(--color-Input)" : "transparent",
                            fontWeight: t ? "500" : "400"
                        }, u)
                    }, f), {
                        children: [s, x && t && (0, i.jsx)(d.A, (0, n._)({
                            size: 16,
                            color: "var(--color-PrimaryText)",
                            style: {
                                marginLeft: "16px"
                            }
                        }, m))]
                    }))
                },
                p = function(e) {
                    var t = e.children,
                        r = e.renderOverlay,
                        d = e.autoClose,
                        u = void 0 === d || d,
                        p = (0, a._)(e, ["children", "renderOverlay", "autoClose"]),
                        x = (0, s.useState)(!1),
                        m = x[0],
                        f = x[1],
                        v = (0, s.useCallback)((function(e) {
                            f(e)
                        }), []),
                        h = (0, s.useCallback)((function() {
                            u && f(!1)
                        }), [u]),
                        g = m ? l().cloneElement(r(), {
                            onClick: h
                        }) : (0, i.jsx)(i.Fragment, {});
                    return (0, i.jsx)(c.A, (0, o._)((0, n._)({
                        overlay: g,
                        onVisibleChange: v,
                        open: m
                    }, p), {
                        children: t
                    }))
                };
            const x = l().memo(p)
        },
        "28Pr": (e, t, r) => {
            r.d(t, {
                PK: () => v,
                Y6: () => f
            });
            var n = r("hrAD"),
                o = r("qoEP"),
                a = r("KrVi"),
                i = r("mguP"),
                s = r("mXdx"),
                l = r("DTvD"),
                c = r("Vhyo"),
                d = r("2IQ4"),
                u = r("J+BU"),
                p = r("CAdv"),
                x = r("WHzC"),
                m = function(e) {
                    var t = e.children,
                        r = e.handle,
                        i = (0, a._)(e, ["children", "handle"]);
                    return (0, s.jsx)(c.A, (0, o._)((0, n._)({
                        className: "item",
                        as: "span",
                        onClick: r
                    }, i), {
                        children: t
                    }))
                },
                f = function(e) {
                    var t = e.getI18n,
                        r = e.orderType,
                        n = (0, l.useMemo)((function() {
                            return r === u.W4.TRAILING_STOP ? "".concat(r, "tip-1") : "".concat(r, "tip")
                        }), [r]);
                    return (0, s.jsxs)("div", {
                        style: {
                            maxWidth: "200px",
                            fontWeight: "400",
                            fontSize: "12px",
                            lineHeight: "18px"
                        },
                        children: [r && (0, s.jsx)("span", {
                            children: t(n)
                        }), "\xa0", (0, s.jsx)("a", {
                            target: "_blank",
                            href: "/".concat(p.UB[r]),
                            style: {
                                fontWeight: "500",
                                fontSize: "12px",
                                textDecoration: "underline",
                                color: "var(--color-SecondaryBg)"
                            },
                            "data-testid": p.de[r],
                            children: t("viewMore")
                        })]
                    })
                },
                v = function(e, t, r, a, l) {
                    var c = a.subTypes;
                    return (0, s.jsx)(d.A, {
                        variant: "dropdown",
                        sx: {
                            display: "flex",
                            flexDirection: "column",
                            boxShadow: "elevation2",
                            width: l
                        },
                        children: c.map((function(a) {
                            var l = (0, i._)(a, 3),
                                c = l[0],
                                d = l[1],
                                u = l[2];
                            return (0, s.jsx)(m, (0, o._)((0, n._)({
                                className: "item",
                                handle: function() {
                                    return t(c)
                                },
                                color: r === c ? "primary" : "t.primary"
                            }, d ? {
                                "data-testid": d
                            } : {}), {
                                children: e((0, x.u)(u || c))
                            }), c)
                        }))
                    })
                }
        },
        Vcag: (e, t, r) => {
            r.d(t, {
                A: () => u
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("Gz4J"),
                s = r("Qhol"),
                l = r("F2GC"),
                c = r("J+BU"),
                d = function(e) {
                    var t = e.getI18n,
                        r = e.side,
                        o = (0, s.vzt)().isLoading;
                    return (0, n.jsx)(l.e, {
                        children: (0, n.jsx)("a", {
                            children: (0, n.jsx)(i.A, {
                                className: "buySellButton",
                                sz: "middle",
                                loading: o,
                                type: "button",
                                variant: r === c.Vl.BUY ? "buy" : "sell",
                                style: {
                                    width: "100%",
                                    height: "36px",
                                    minHeight: "36px",
                                    fontSize: "14px"
                                },
                                children: t("login")
                            })
                        })
                    })
                };
            const u = a().memo(d)
        },
        ZaFi: (e, t, r) => {
            r.d(t, {
                B: () => f
            });
            var n = r("S+0I"),
                o = r("hrAD"),
                a = r("mguP"),
                i = r("jbFV"),
                s = r.n(i),
                l = r("mXdx"),
                c = r("DTvD"),
                d = r("GIr8"),
                u = r("Apcd"),
                p = r("Qhol"),
                x = r("c2J1"),
                m = r("cYwZ"),
                f = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return function(r) {
                        var i = (0, p.CUO)().getI18n,
                            f = (0, p.QsY)().isMobile,
                            v = (0, x.nH)(),
                            h = (0, a._)((0, m.d)(), 3)[2],
                            g = (0, p.hFK)()[h] || {},
                            b = g.tradingStatus,
                            y = g.symbolDisplay,
                            A = (0, p.xXR)(),
                            T = (0, c.useState)(!1),
                            j = T[0],
                            C = T[1],
                            S = (0, c.useState)(0),
                            k = S[0],
                            I = S[1];
                        return (0, c.useEffect)((function() {
                            var e = !1;
                            if (v) return function() {
                                    t.apply(this, arguments)
                                }(),
                                function() {
                                    e = !0
                                };

                            function t() {
                                return (t = (0, n._)(s().mark((function t() {
                                    var r;
                                    return s().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                A && !e && ("undefined" !== typeof(r = null === A || void 0 === A ? void 0 : A.planToOpenMarketTime) && I(r), "BREAK" === b && (!r || r < Date.now()) ? C(!0) : C(!1));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))).apply(this, arguments)
                            }
                        }), [b, h, v]), (0, c.useEffect)((function() {
                            var e;
                            if (v && !("BREAK" !== b || k <= Date.now())) return setTimeout(t, 5e3, 5e3),
                                function() {
                                    return clearTimeout(e)
                                };

                            function t(e) {
                                return r.apply(this, arguments)
                            }

                            function r() {
                                return r = (0, n._)(s().mark((function r(n) {
                                    var o, i, l, c, d;
                                    return s().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.t0 = a._, r.next = 4, (0, u.tZ)({
                                                    symbol: h
                                                }, !0);
                                            case 4:
                                                if (r.t1 = r.sent, i = (0, r.t0)(r.t1, 2), l = i[0], c = i[1], !l) {
                                                    r.next = 11;
                                                    break
                                                }
                                                return e = setTimeout(t, n, n), r.abrupt("return");
                                            case 11:
                                                if (!((null === (o = c.data) || void 0 === o ? void 0 : o.planToOpenMarketTime) > Date.now())) {
                                                    r.next = 15;
                                                    break
                                                }
                                                return C(!1), r.abrupt("return");
                                            case 15:
                                                d = Math.min(2 * n, 12e4), e = setTimeout(t, d, d);
                                            case 17:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                }))), r.apply(this, arguments)
                            }
                        }), [h, k, b, v]), v ? !f && t ? null : j ? (0, l.jsxs)(d.A, {
                            sx: {
                                width: "100%",
                                height: "40px",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "4px",
                                color: "button.disabledColor",
                                lineHeight: "14px",
                                fontSize: "14px",
                                margin: "16px 0",
                                backgroundColor: "button.disabledBg"
                            },
                            children: [y, " ", i("trading-suspended", {
                                defaultValue: "Trading Suspended"
                            })]
                        }) : (0, l.jsx)(e, (0, o._)({}, r)) : (0, l.jsx)(e, (0, o._)({}, r))
                    }
                }
        },
        LIkc: (e, t, r) => {
            r.d(t, {
                A: () => f
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("b9LU"),
                s = r("bQ69"),
                l = r("Qhol"),
                c = r("hAzz"),
                d = r("ugWk"),
                u = r("Ykh1"),
                p = r("8J3r"),
                x = r("BZR+"),
                m = function(e) {
                    var t = e.step2Ref,
                        r = e.tradeType,
                        a = (0, u.N8)(),
                        m = a.marginBar,
                        f = a.created,
                        v = a.enable,
                        h = a.canAdjustMarginBar,
                        g = (0, l.DFo)().isPmAccount,
                        b = (0, x.AV)(),
                        y = (0, o.useContext)(i.x),
                        A = y.currentBaseAsset,
                        T = y.currentQuoteAsset,
                        j = r === s.Gr.ISOLATED && f && !v,
                        C = (0, o.useCallback)((function(e) {
                            j || c.RR.emit("triggerModal", e)
                        }), [j]);
                    return g && r === s.Gr.CROSS ? (0, n.jsx)(n.Fragment, {}) : (0, n.jsxs)("div", {
                        ref: t,
                        className: "hover:bg-Line",
                        style: {
                            height: "24px",
                            lineHeight: "22px",
                            borderRadius: "6px",
                            padding: "0px 9px",
                            border: "1px solid var(--color-InputLine)",
                            color: "var(--color-PrimaryText)"
                        },
                        onClick: function() {
                            return r === s.Gr.CROSS && h && C(d.cP.ADJUST)
                        },
                        children: [m && !g && (r === s.Gr.CROSS && h ? (0, n.jsx)("div", {
                            className: "".concat(b ? "text-DisabledText cursor-none pointer-events-none" : "text-PrimaryText cursor-pointer"),
                            children: m
                        }) : r === s.Gr.CROSS ? m : r === s.Gr.ISOLATED && (0, n.jsx)(p.Bt, {
                            baseAsset: A,
                            quoteAsset: T
                        })), g && r === s.Gr.ISOLATED && (0, n.jsx)(p.Bt, {
                            baseAsset: A,
                            quoteAsset: T
                        })]
                    })
                };
            const f = a().memo(m)
        },
        ajRU: (e, t, r) => {
            r.d(t, {
                A: () => _
            });
            var n = r("mguP"),
                o = r("mXdx"),
                a = r("DTvD"),
                i = r.n(a),
                s = r("BiCW"),
                l = r("zHUU"),
                c = r("Dj9W"),
                d = r("tprX"),
                u = r("b9LU"),
                p = r("bQ69"),
                x = r("hAzz"),
                m = r("Qhol"),
                f = r("JyEq"),
                v = r("ugWk"),
                h = r("Ykh1"),
                g = r("z4eh"),
                b = r("Xz3K"),
                y = r("r2Gn"),
                A = r("61SC"),
                T = r("NJD8"),
                j = [
                    [b.mC.TRADING_SWITCH]
                ],
                C = y.A.TabPane,
                S = (0, a.memo)((function(e) {
                    var t = e.actived,
                        r = e.children,
                        n = (0, a.useRef)(!1);
                    (0, a.useEffect)((function() {
                        n.current = n.current || t
                    }), [t]);
                    var i = n.current || t;
                    return (0, o.jsx)("div", {
                        style: {
                            width: "100%",
                            display: t ? "block" : "none"
                        },
                        children: i && r
                    })
                })),
                k = (0, a.memo)((function(e) {
                    var t = e.initSide,
                        r = e.getI18n,
                        n = e.children,
                        s = (0, a.useState)(t),
                        l = s[0],
                        c = s[1],
                        d = (0, a.useContext)(u.x),
                        p = [],
                        x = (0, a.useCallback)((function(e) {
                            var t = 0 === e ? v.Vl.BUY : v.Vl.SELL;
                            c(t), "function" === typeof d.setTabSide && d.setTabSide(t), (0, A.l)({
                                clickContent: t
                            })
                        }), [l, d]);
                    (0, a.useEffect)((function() {
                        c(t)
                    }), [t, c]);
                    var m = (0, a.useMemo)((function() {
                        return l === v.Vl.BUY ? 0 : 1
                    }), [l]);
                    return i().Children.forEach(n, (function(e, t) {
                        if (e) {
                            var r = null != e.key ? e.key : t,
                                n = e.key === l;
                            p.push(i().cloneElement(e, {
                                key: r,
                                actived: n
                            }))
                        }
                    })), (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsxs)(y.A, {
                            style: {
                                marginBottom: "4px"
                            },
                            variant: "buySell",
                            onChange: x,
                            selectedIndex: m,
                            children: [(0, o.jsx)(C, {
                                tabNode: (0, o.jsx)("div", {
                                    "data-testId": "BuyTab",
                                    children: r("BUY")
                                })
                            }), (0, o.jsx)(C, {
                                tabNode: (0, o.jsx)("div", {
                                    "data-testId": "SellTab",
                                    children: r("SELL")
                                })
                            })]
                        }), (0, o.jsx)(T.default, {
                            boxOffset: 0,
                            placement: "top",
                            tipWidth: 180,
                            shortcutKeys: j,
                            i18nKey: "trd-shortcuts-switch-tips",
                            positionTop: "-30px"
                        }), (0, o.jsx)(o.Fragment, {
                            children: p
                        })]
                    })
                }));
            k.TabPane = S;
            const I = k;
            var w = (0, s.A)((function() {
                    return r.e(7699).then(r.bind(r, "QM49"))
                }), {
                    webpack: function() {
                        return ["QM49"]
                    }
                }),
                B = (0, s.A)((function() {
                    return r.e(9197).then(r.bind(r, "YE17"))
                }), {
                    webpack: function() {
                        return ["YE17"]
                    }
                }),
                N = (0, s.A)((function() {
                    return r.e(1802).then(r.bind(r, "nFAc"))
                }), {
                    webpack: function() {
                        return ["nFAc"]
                    }
                }),
                P = I.TabPane;

            function M(e) {
                var t = e.tradeType,
                    r = e.layout,
                    s = e.children,
                    b = e.openTwo,
                    y = e.platform,
                    A = e.showHeading,
                    T = void 0 === A || A,
                    j = e.userAssets,
                    C = e.magicRefresh,
                    S = void 0 === C ? void 0 : C,
                    k = e.showBalance,
                    M = e.showSideType,
                    _ = void 0 === M || M,
                    O = (0, c.o)().getI18n,
                    R = (0, l.Bl)(),
                    D = (0, a.useState)(!1),
                    L = D[0],
                    F = D[1],
                    q = (0, a.useContext)(u.x),
                    E = q.tabSide,
                    W = q.setTabSide,
                    z = q.currentSymbol,
                    U = q.currentTabs,
                    V = (0, d.x7)((function(e) {
                        return e.quickSwitch
                    })),
                    H = (0, h.OK)(),
                    G = H.base,
                    K = H.quote,
                    Q = H.ticker,
                    Y = H.userInfo,
                    X = H.isLoggedIn,
                    $ = H.urlConfig,
                    Z = H.getAskBids,
                    J = H.getFiatPrice,
                    ee = H.getMarketPrice,
                    te = H.orderFormPriceQty,
                    re = (0, x.H3)(t),
                    ne = (0, n._)((0, m.bNJ)(50, !re), 1)[0],
                    oe = (0, a.useCallback)((function() {
                        F(!1)
                    }), []);
                (0, a.useEffect)((function() {
                    V && W(E)
                }), [E, V, W]);
                var ae = (0, a.useMemo)((function() {
                    return {
                        base: G,
                        quote: K,
                        tradeType: t,
                        layout: r,
                        isLoggedIn: X,
                        urlConfig: $,
                        userAssets: j,
                        userInfo: Y,
                        ticker: Q,
                        hideMask: oe,
                        getBook: Z,
                        getMarketPrice: ee,
                        getFiatPrice: J,
                        orderFormPriceQty: te,
                        magicRefresh: S,
                        showBalance: k,
                        getI18n: O,
                        locale: R
                    }
                }), [G, Z, J, O, ee, oe, X, R, r, S, te, K, k, Q, t, $, j, Y]);
                return (0, o.jsx)(f.cb.Provider, {
                    value: ae,
                    children: (0, o.jsxs)("div", {
                        className: "trd-orderform-container",
                        ref: ne,
                        children: [y === p.ND && (0, o.jsx)(w, {
                            setVisible: F,
                            visible: L,
                            setTabSide: W
                        }), T && y !== p.ND && (0, o.jsx)(g.A, {
                            currentSymbol: z,
                            currentTabs: U,
                            draggable: r === p.ug,
                            extra: r !== p.ug
                        }), (0, o.jsxs)("div", {
                            className: "orderform-content ".concat(r, " ").concat(L ? "mobile-show" : ""),
                            children: [y === p.ND && (0, o.jsx)(B, {
                                hideMask: oe,
                                tradeType: t
                            }), (0, x.V$)(t) && (0, o.jsx)(N, {
                                tradeType: t,
                                baseAsset: G,
                                quoteAsset: K,
                                tabSide: E,
                                userInfo: Y
                            }), b || (0, x.H3)(t) || !_ ? i().cloneElement(s, {
                                base: G,
                                quote: K,
                                urlConfig: $,
                                tradeType: t,
                                isLoggedIn: X
                            }) : (0, o.jsx)(I, {
                                initSide: E,
                                getI18n: O,
                                children: Object.keys(v.Vl).map((function(e) {
                                    return (0, o.jsx)(P, {
                                        children: i().cloneElement(s, {
                                            side: e,
                                            base: G,
                                            quote: K,
                                            urlConfig: $,
                                            tradeType: t,
                                            isLoggedIn: X
                                        })
                                    }, e)
                                }))
                            })]
                        })]
                    })
                })
            }
            const _ = i().memo(M)
        },
        "4dkC": (e, t, r) => {
            r.d(t, {
                A: () => Ft
            });
            var n = r("S+0I"),
                o = r("hrAD"),
                a = r("qoEP"),
                i = r("jbFV"),
                s = r.n(i),
                l = r("mXdx"),
                c = r("DTvD"),
                d = r.n(c),
                u = r("12iX"),
                p = r("WT+B"),
                x = r("BiCW"),
                m = r("bQ69"),
                f = r("Gz4J"),
                v = r("J+BU"),
                h = r("ZaFi"),
                g = r("Ykh1"),
                b = r("vTbz"),
                y = r("FWGn"),
                A = r("Vcag"),
                T = "orderformBuyBtn",
                j = "orderformSellBtn";
            const C = d().memo((0, h.B)((function(e) {
                var t = e.base,
                    r = e.side,
                    n = e.mode,
                    a = e.getI18n,
                    i = e.isLoggedIn,
                    s = e.isFetching,
                    c = e.sx,
                    d = e.trackSubmit,
                    u = e.borrowAmount,
                    p = (0, b.bS)(n) ? "MARGIN-".concat(r) : "MAIN-".concat(r),
                    x = (0, g.wL)((0, b.bS)(n), u).disableBorrow;
                return (0, y.C)({
                    name: "orderForm",
                    shouldReport: void 0 !== i
                }), i ? (0, l.jsx)(f.A, {
                    onClick: d,
                    className: "buySellButton",
                    "data-sensors-click": !0,
                    id: r === v.Vl.BUY ? T : j,
                    "data-testid": r === v.Vl.BUY ? "button-spot-buy" : "button-spot-sell",
                    disabled: s || x,
                    sz: "middle",
                    variant: r === v.Vl.BUY ? "buy" : "sell",
                    type: "submit",
                    style: (0, o._)({
                        width: "100%",
                        height: "36px",
                        minHeight: "36px",
                        fontSize: "14px"
                    }, c),
                    children: a(p, {
                        coin: t
                    })
                }) : (0, l.jsx)(A.A, {
                    getI18n: a,
                    side: r
                })
            })));
            var S = r("dEVk"),
                k = r("p6uk"),
                I = r("jmB/"),
                w = r("FkjH"),
                B = w.A.registerActionHandle,
                N = w.A.constants,
                P = [{
                    value: 0
                }, {
                    value: 25
                }, {
                    value: 50
                }, {
                    value: 75
                }, {
                    value: 100
                }],
                M = function(e) {
                    var t = e.onChange,
                        r = e.onSubmit,
                        n = e.value,
                        o = void 0 === n ? 0 : n,
                        a = (0, c.useRef)(null),
                        i = (0, c.useCallback)((function(e) {
                            "Enter" === e.key && r()
                        }), [r]),
                        s = (0, c.useCallback)((function() {
                            return B((function(e) {
                                var t = e.name;
                                if (document.activeElement === a.current && t === N.COMMON_OK) r()
                            }))
                        }), [r]);
                    return (0, c.useEffect)((function() {
                        return s()
                    }), [s]), (0, l.jsx)("div", {
                        ref: a,
                        className: "percent-slider",
                        onKeyDown: i,
                        children: (0, l.jsx)(I.A, {
                            onChange: t,
                            value: +o,
                            max: 100,
                            min: 0,
                            steppers: P,
                            showStepMarks: !1,
                            renderFn: function(e) {
                                return "".concat(e, "%")
                            },
                            showValueOnHover: !0
                        })
                    })
                };
            const _ = d().memo(M);
            var O = r("CAdv"),
                R = r("hAzz"),
                D = r("mguP"),
                L = r("q+oq"),
                F = r("zxgP"),
                q = r("kcvK"),
                E = r("b2AH"),
                W = function(e) {
                    var t = e.children,
                        r = e.side,
                        n = (0, D._)((0, L.T)("trd-actprice-status", !1), 2),
                        o = n[0],
                        a = n[1],
                        i = (0, E.ok)().getI18n;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            children: (0, l.jsx)("label", {
                                style: {
                                    display: "flex",
                                    alignItems: "center"
                                },
                                htmlFor: "order-act-price-".concat(r),
                                children: (0, l.jsx)(F.A, {
                                    id: "order-act-price-".concat(r),
                                    size: 14,
                                    checked: o,
                                    onChange: function(e) {
                                        return a(!o)
                                    },
                                    children: (0, l.jsx)(q.A, {
                                        offset: 4,
                                        arrow: !0,
                                        useReactPopper: !0,
                                        tooltips: i("trd-actp-tip"),
                                        children: (0, l.jsx)("div", {
                                            style: {
                                                color: "var(--color-PrimaryText)",
                                                fontSize: "12px",
                                                marginRight: "4px"
                                            },
                                            children: i("futures-trade-activationPrice")
                                        })
                                    })
                                })
                            })
                        }), o && t]
                    })
                };
            const z = (0, c.memo)(W);
            var U = r("b9LU"),
                V = r("61SC"),
                H = r("Dj9W"),
                G = r("ctcW"),
                K = r("wcOk"),
                Q = r("HvRD"),
                Y = r("xqbL"),
                X = r.n(Y),
                $ = r("2IQ4"),
                Z = Object.keys(v.V9),
                J = function(e) {
                    var t = e.mode,
                        r = e.getI18n,
                        n = (0, c.useMemo)((function() {
                            var e = Z.filter((function(e) {
                                return e === t
                            }));
                            return e.length ? e[0] : v.V9.NORMAL
                        }), [t]);
                    return (0, l.jsxs)($.A, {
                        sx: {
                            maxWidth: "256px",
                            "& .title": {
                                fontSize: "14px",
                                fontWeight: "600"
                            },
                            "& .content": {
                                ml: "2px",
                                mb: "24px",
                                fontSize: 1
                            }
                        },
                        children: [(0, l.jsxs)("span", {
                            className: "title",
                            children: [r("".concat(n, "mode-title")), ":"]
                        }), (0, l.jsx)("span", {
                            className: "content",
                            children: r("".concat(n, "mode-tip"))
                        })]
                    })
                },
                ee = r("Qhol"),
                te = r("JyEq"),
                re = r("LIkc"),
                ne = r("iKvg"),
                oe = r("Ov3/"),
                ae = function(e) {
                    var t = e.side,
                        r = e.dispatch,
                        n = e.mode,
                        i = (0, D._)((0, oe.A)("modeSwitch".concat(t, "Storage"), {}), 2),
                        s = i[0],
                        l = i[1],
                        d = (0, ee.Bm2)("Margin_auto_borrow_auto_repay"),
                        u = (0, g.bY)(),
                        p = u.auotBorrow,
                        x = u.autoRepay;
                    return (0, c.useEffect)((function() {
                        !d && r({
                            type: v.Bd.SHADOW_CHANGE,
                            payload: {
                                mode: n || s["".concat(t, "Mode")] || v.V9.NORMAL
                            }
                        })
                    }), [d]), (0, c.useEffect)((function() {
                        if (d) {
                            var e = +p + +x;
                            p && !x && (e = 3), r({
                                type: v.Bd.SHADOW_CHANGE,
                                payload: {
                                    mode: v.lN[e]
                                }
                            })
                        }
                    }), [d, p, x]), {
                        updateModeStorage: (0, c.useCallback)((function(e) {
                            l((0, a._)((0, o._)({}, s), (0, ne._)({}, "".concat(t, "Mode"), e)))
                        }), [s, t]),
                        hideModeTabs: "false"
                    }
                },
                ie = function(e) {
                    var t = e.className,
                        r = e.mode,
                        n = e.getI18n,
                        o = e.dispatch,
                        a = e.side,
                        i = (0, c.useContext)(te.cb),
                        s = i.layout,
                        d = i.tradeType,
                        u = ae({
                            side: a,
                            dispatch: o,
                            mode: r
                        }).updateModeStorage,
                        p = (0, c.useCallback)((function(e) {
                            o({
                                type: v.Bd.SHADOW_CHANGE,
                                payload: {
                                    mode: e
                                }
                            }), u(e)
                        }), [o]),
                        x = (0, c.useCallback)((function(e) {
                            return e ? {
                                color: "var(--color-PrimaryText)",
                                borderRadius: "6px",
                                backgroundColor: "var(--color-Input)",
                                padding: "3px 6px"
                            } : {
                                padding: "3px 6px"
                            }
                        }), []);
                    return (0, l.jsxs)("div", {
                        className: X()("order-form-mode-switch", t),
                        style: {
                            display: "flex",
                            justifyContent: s === m.ug ? "space-between" : "flex-start",
                            alignItems: "center",
                            gap: s === m.ug ? "0px" : "8px",
                            flexWrap: "wrap"
                        },
                        children: [(0, l.jsx)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                fontSize: "12px",
                                fontWeight: 500,
                                lineHeight: "18px",
                                color: "var(--color-TertiaryText)"
                            },
                            children: ["NORMAL", "BORROW", "REPAY"].map((function(e) {
                                return (0, l.jsx)("div", {
                                    className: "cursor-pointer",
                                    onClick: function() {
                                        return p(e)
                                    },
                                    style: x(r === e),
                                    children: n("".concat(e, "mode"))
                                }, e)
                            }))
                        }), (0, l.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                                gap: "4px"
                            },
                            children: [s === m.ug && (0, l.jsx)(re.A, {
                                tradeType: d
                            }), (0, l.jsx)(q.A, {
                                offset: 4,
                                placement: "bottom-end",
                                variant: "gray",
                                useReactPopper: !0,
                                arrow: !0,
                                tooltips: (0, l.jsx)(J, {
                                    getI18n: n,
                                    mode: r
                                }),
                                children: (0, l.jsx)(Q.A, {
                                    className: "trade-common-icon hover-help",
                                    style: {
                                        width: "16px",
                                        height: "16px"
                                    }
                                })
                            })]
                        })]
                    })
                },
                se = d().memo((function(e) {
                    var t, r = e.className,
                        n = e.mode,
                        o = e.getI18n,
                        a = e.dispatch,
                        i = e.side,
                        s = ae({
                            side: i,
                            dispatch: a,
                            mode: n
                        }).hideModeTabs,
                        d = null !== (t = (0, g.lS)()) && void 0 !== t ? t : {},
                        u = (0, ee.Bm2)("Margin_auto_borrow_auto_repay");
                    return (0, c.useEffect)((function() {
                        "function" === typeof d.onModeChange && d.onModeChange(i, n)
                    }), [i, n, d]), "false" !== s || void 0 === u || u ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)(ie, {
                        className: r,
                        mode: n,
                        getI18n: o,
                        dispatch: a,
                        side: i
                    })
                })),
                le = r("ZGye"),
                ce = r("pPGf"),
                de = r("JaRM"),
                ue = r("AUgw"),
                pe = [O.au, O.X5],
                xe = {
                    textAlign: "right",
                    lineHeight: "18px",
                    color: "t.third",
                    fontSize: "12px"
                },
                me = function(e) {
                    var t = e.side,
                        r = e.onClick,
                        n = e.base,
                        o = e.quote,
                        a = e.currentMode,
                        i = e.getI18n,
                        s = (0, c.useCallback)((function() {
                            return (0, l.jsxs)("div", {
                                style: {
                                    padding: "8px 0"
                                },
                                children: [(0, l.jsx)(de.H, {
                                    active: a === v.o1.QUANTITY,
                                    onChange: function() {
                                        return r(v.o1.QUANTITY)
                                    },
                                    value: n,
                                    hasIcon: !0,
                                    "data-testid": "".concat(t, "Market").concat(n),
                                    iconProps: {
                                        size: 20
                                    },
                                    children: n
                                }), (0, l.jsx)(de.H, {
                                    active: a === v.o1.TOTAL,
                                    onChange: function() {
                                        return r(v.o1.TOTAL)
                                    },
                                    value: o,
                                    hasIcon: !0,
                                    "data-testid": "".concat(t, "Market").concat(o),
                                    iconProps: {
                                        size: 20
                                    },
                                    children: (0, l.jsx)(q.A, {
                                        offset: 4,
                                        arrow: !0,
                                        trigger: "hover",
                                        placement: "top-start",
                                        useReactPopper: !0,
                                        delay: 1e3,
                                        tooltips: (0, l.jsx)("div", {
                                            style: {
                                                maxWidth: "200px"
                                            },
                                            children: i("BUY" === t ? "marketTotalTip" : "marketSellTotalTip")
                                        }),
                                        children: (0, l.jsx)("div", {
                                            style: {
                                                cursor: "help"
                                            },
                                            children: o
                                        })
                                    })
                                })]
                            })
                        }), [a, n, o, t, r]);
                    return (0, l.jsxs)(de.A, {
                        className: "cursor-pointer",
                        trigger: "hover",
                        placement: "bottom-end",
                        arrow: !1,
                        renderOverlay: s,
                        useReactPopper: !0,
                        enablePortal: !0,
                        reactPopperProps: {
                            offsetX: 12
                        },
                        children: [a !== v.o1.TOTAL ? n : o, " ", (0, l.jsx)(ce.A, {
                            style: {
                                fontSize: "16px",
                                marginLeft: "2px",
                                color: "var(--color-IconNormal)"
                            },
                            "data-testid": "".concat(t, "DownArrow")
                        })]
                    })
                },
                fe = function(e) {
                    var t, r = e.side,
                        n = e.qtyTotalMode,
                        o = e.getHelperText,
                        a = e.handleClick,
                        i = e.className,
                        s = e.sliderUpdate,
                        d = e.placeholder,
                        u = (0, c.useContext)(te.cb),
                        p = u.base,
                        x = u.quote,
                        m = u.ticker,
                        f = u.getI18n,
                        h = !1 !== (null === (t = (0, G.k)()["".concat(p).concat(x)]) || void 0 === t ? void 0 : t.quoteOrderQtyMarketAllowed),
                        g = h ? n : v.o1.QUANTITY,
                        b = g === v.o1.TOTAL ? d : void 0;
                    return (0, l.jsx)("div", {
                        className: i,
                        children: pe.map((function(t) {
                            var n = t.name,
                                i = t.withHelper,
                                c = t.minKey,
                                d = void 0 === c ? "tickSize" : c,
                                u = t.stepKey,
                                v = void 0 === u ? "tickSize" : u;
                            return (0, l.jsxs)("div", {
                                children: [(0, l.jsx)(S.A, {
                                    omitFor: !0,
                                    widgetKey: "",
                                    name: n,
                                    symbol: r,
                                    min: m[d],
                                    step: m[v],
                                    precision: m["".concat(v, "Precision")],
                                    after: h ? (0, l.jsx)(me, {
                                        onClick: a,
                                        getI18n: f,
                                        currentMode: g,
                                        side: r,
                                        base: p,
                                        quote: x
                                    }) : p,
                                    value: e["".concat(n, "State")].value,
                                    invalid: e["".concat(n, "State")].invalid,
                                    errorText: e["".concat(n, "State")].errorMsg,
                                    helperText: i && o(n, e["".concat(n, "State")].value) || "",
                                    label: f(g),
                                    boxStyle: {
                                        display: n === g ? "flex" : "none"
                                    },
                                    autoZero: !0,
                                    placeholder: b,
                                    handleChange: e.handleChange
                                }, n), n === g && (0, l.jsx)($.A, {
                                    className: "formRow-reference",
                                    sx: xe,
                                    children: (0, ue.nj)(r, g) && s ? f("reference") : " "
                                })]
                            }, n)
                        }))
                    })
                };
            const ve = d().memo(fe);
            var he = r("5gCu"),
                ge = r("GIr8"),
                be = function(e) {
                    var t = e.value,
                        r = e.onClick,
                        n = (0, c.useContext)(te.cb).layout !== m.Pv ? "32px" : "40px";
                    return (0, l.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: n,
                            height: "40px",
                            marginLeft: "4px",
                            borderRadius: "8px",
                            cursor: "pointer",
                            fontSize: "14px",
                            color: "var(--color-PrimaryText)",
                            borderWidth: "1px",
                            borderStyle: "solid"
                        },
                        className: "border-InputLine hover:border-PrimaryText",
                        onClick: function() {
                            r(t)
                        },
                        children: [t, "%"]
                    })
                },
                ye = {
                    flexDirection: "row",
                    ".callback-rate-input": {
                        mt: 0,
                        flex: 1,
                        ".bn-textField": {
                            gap: "2px"
                        }
                    },
                    ".bn-input-prefix": {
                        maxWidth: "calc(100% - 65px)!important"
                    },
                    ".prefix-tooltip-container": {
                        width: "100%"
                    },
                    ".bn-input-suffix": {
                        marginLeft: "0px !important"
                    },
                    ".order-form-input": {
                        width: "28px",
                        px: "4px"
                    }
                },
                Ae = function(e) {
                    var t = e.curOrderState,
                        r = e.name,
                        n = e.dispatch,
                        o = e.side,
                        a = e.layout,
                        i = e.handleChange,
                        s = (0, (0, E.ok)().getI18n)("trd-orderForm-trailing-delta", {
                            defaultValue: "delta"
                        }),
                        c = function(e) {
                            n({
                                type: v.Bd.FIELD_CHANGE,
                                payload: {
                                    orderType: v.W4.TRAILING_STOP,
                                    field: {
                                        trailingDelta: {
                                            value: e,
                                            invalid: !1
                                        }
                                    }
                                }
                            })
                        };
                    return (0, l.jsxs)("div", {
                        children: [a === m.ug && (0, l.jsx)("div", {
                            style: {
                                fontSize: "12px",
                                lineHeight: "18px",
                                color: "var(--color-TertiaryText)",
                                marginBottom: "4px"
                            },
                            children: s
                        }), (0, l.jsxs)(ge.A, {
                            sx: ye,
                            children: [(0, l.jsx)(S.A, {
                                className: "callback-rate-input",
                                name: r,
                                symbol: o,
                                min: 0,
                                max: 99.9,
                                step: .1,
                                precision: 1,
                                before: a === m.ug ? "" : s,
                                helperText: "",
                                after: (0, l.jsx)("div", {
                                    className: "text-PrimaryText'",
                                    children: "%"
                                }),
                                value: t[r].value,
                                invalid: t[r].invalid,
                                errorText: t[r].errorMsg,
                                handleChange: i
                            }, r), (0, l.jsx)(be, {
                                value: "1",
                                onClick: c
                            }), (0, l.jsx)(be, {
                                value: "2",
                                onClick: c
                            })]
                        })]
                    })
                };
            const Te = d().memo(Ae);
            var je = r("U33U"),
                Ce = r("gLBh"),
                Se = r("zmmj"),
                ke = r("TUKb"),
                Ie = [v.W4.LIMIT, v.W4.OCO, v.W4.STOPLIMIT],
                we = [v.W4.LIMIT, v.W4.STOPLIMIT],
                Be = function(e) {
                    var t = e.base,
                        r = e.side,
                        n = e.minQty,
                        i = e.iceBerg,
                        s = e.postOnly,
                        d = e.dispatch,
                        u = e.orderType,
                        p = e.curOrderState,
                        x = e.timeInForce,
                        m = e.minQtyPrecision,
                        f = e.tpsl,
                        h = e.widgetKey,
                        g = e.sor,
                        b = e.handleChange,
                        y = (0, E.CU)().getI18n,
                        A = (0, D._)((0, H.$)(), 2),
                        T = A[0],
                        j = A[1],
                        C = (0, Se.R)(),
                        k = C.tifRef,
                        I = C.icebergRef,
                        w = C.postOnlyRef,
                        B = (0, ke.e)(u),
                        N = (null === p || void 0 === p ? void 0 : p.icebergQty) || {},
                        P = u === v.W4.LIMIT,
                        M = Ie.includes(u),
                        _ = we.includes(u),
                        O = x !== v.Zm.GTC || f || g[r],
                        R = x !== v.Zm.GTC,
                        L = P && s || _ && i || f,
                        W = L || g[r],
                        z = (0, c.useCallback)((function(e, t) {
                            d({
                                type: v.Bd.SHADOW_CHANGE,
                                payload: (0, ne._)({}, e, t)
                            }), "iceBerg" !== e && j((0, a._)((0, o._)({}, T), (0, ne._)({}, e, t)))
                        }), [T]);
                    (0, c.useEffect)((function() {
                        x !== v.Zm.GTC && s && z("postOnly", !1)
                    }), [s, x]), (0, c.useEffect)((function() {
                        _ && (z("iceBerg", !1), d({
                            type: v.Bd.FIELD_CHANGE,
                            payload: {
                                orderType: u,
                                field: {
                                    icebergQty: {
                                        value: "",
                                        invalid: !1
                                    }
                                }
                            }
                        }))
                    }), [u, _]), (0, c.useEffect)((function() {
                        d({
                            type: v.Bd.SHADOW_CHANGE,
                            payload: T
                        })
                    }), [T]);
                    var U = (0, c.useCallback)((function() {
                            z("postOnly", !s), (0, V.Xd)({
                                orderType: u,
                                clickContent: "postOnly"
                            })
                        }), [s, u, z]),
                        G = (0, c.useCallback)((function() {
                            z("iceBerg", !i), (0, V.Xd)({
                                orderType: u,
                                clickContent: "iceBerg"
                            })
                        }), [i, u, z]),
                        K = (0, c.useCallback)((function(e) {
                            z("timeInForce", e), (0, V.XA)({
                                orderType: u,
                                clickContent: e
                            })
                        }), [u, z]),
                        Q = (0, c.useCallback)((function() {
                            return (0, l.jsx)("div", {
                                style: {
                                    padding: "8px 0"
                                },
                                children: ["GTC", "IOC", "FOK"].map((function(e) {
                                    return (0, l.jsx)(de.H, {
                                        active: x === e,
                                        disabled: (t = e, "FOK" === t ? W : L),
                                        onChange: K,
                                        value: e,
                                        hasIcon: !0,
                                        children: e
                                    });
                                    var t
                                }))
                            })
                        }), [L, K, W, x]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [B && (0, l.jsx)(je.A, (0, a._)((0, o._)({}, e), {
                            openBuySellGrid: !1,
                            widgetKey: h
                        })), (0, l.jsxs)("div", {
                            style: {
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [P && (0, l.jsx)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    flex: 1
                                },
                                children: (0, l.jsx)(F.A, {
                                    ref: w,
                                    value: "postOnly",
                                    checked: s,
                                    disabled: O,
                                    onChange: U,
                                    children: (0, l.jsx)(q.A, {
                                        arrow: !0,
                                        useReactPopper: !0,
                                        tooltips: y("post-only-hint"),
                                        children: (0, l.jsx)("div", {
                                            style: {
                                                cursor: "help",
                                                fontSize: "12px",
                                                color: O ? "var(--color-DisabledText)" : "var(--color-PrimaryText)"
                                            },
                                            children: y("post-only")
                                        })
                                    })
                                })
                            }), M && (0, l.jsxs)("div", {
                                style: {
                                    display: "flex",
                                    alignItems: "center",
                                    flex: 1,
                                    justifyContent: "".concat(P || _ ? "flex-end" : "flex-start")
                                },
                                ref: k,
                                children: [(0, l.jsx)(q.A, {
                                    arrow: !0,
                                    useReactPopper: !0,
                                    tooltips: (0, l.jsx)(Ce.x, {
                                        i18nKey: "trd-tif-hint"
                                    }),
                                    children: (0, l.jsx)("div", {
                                        style: {
                                            fontSize: "12px",
                                            color: "var(--color-DisabledText)",
                                            cursor: "help"
                                        },
                                        children: y("tif")
                                    })
                                }), (0, l.jsx)(de.A, {
                                    trigger: "click",
                                    placement: "bottom-end",
                                    arrow: !1,
                                    renderOverlay: Q,
                                    useReactPopper: !0,
                                    children: (0, l.jsxs)("div", {
                                        style: {
                                            fontSize: "12px",
                                            display: "flex",
                                            alignItems: "center",
                                            color: "var(--color-PrimaryText)",
                                            cursor: "pointer",
                                            marginLeft: "4px"
                                        },
                                        children: [x, " ", (0, l.jsx)(ce.A, {
                                            style: {
                                                width: "12px",
                                                height: "12px",
                                                color: "var(--color-IconNormal)"
                                            }
                                        })]
                                    })
                                })]
                            })]
                        }), _ && (0, l.jsxs)("div", {
                            style: {
                                display: "flex",
                                flexDirection: "column",
                                gap: "8px"
                            },
                            children: [(0, l.jsx)(F.A, {
                                ref: I,
                                value: "icecheck",
                                disabled: R,
                                checked: i,
                                onChange: G,
                                children: (0, l.jsx)(q.A, {
                                    arrow: !0,
                                    useReactPopper: !0,
                                    tooltips: y("iceberg-hint-1"),
                                    children: (0, l.jsx)("div", {
                                        style: {
                                            cursor: "help",
                                            fontSize: "12px",
                                            color: R ? "var(--color-DisabledText)" : "var(--color-PrimaryText)"
                                        },
                                        children: y("iceberg")
                                    })
                                })
                            }), i && (0, l.jsx)(S.A, {
                                name: "icebergQty",
                                symbol: r,
                                min: n,
                                step: n,
                                precision: +m,
                                label: y("orderForm-iceberAmount"),
                                after: t,
                                value: N.value,
                                invalid: N.invalid,
                                errorText: N.errorMsg,
                                autoZero: !0,
                                handleChange: b
                            })]
                        })]
                    })
                };
            const Ne = d().memo(Be);
            var Pe = function(e) {
                    var t = e.base,
                        r = e.children,
                        n = e.symbols,
                        o = (0, ee.ok2)().getI18n,
                        a = n && n.length > 0 ? n.join(", ") : "";
                    return (0, l.jsx)(q.A, {
                        offset: 4,
                        arrow: !0,
                        useReactPopper: !0,
                        tooltips: (0, l.jsx)("div", {
                            dangerouslySetInnerHTML: {
                                __html: o("trd-orderform-sor-slider", {
                                    base: t,
                                    symbols: a
                                }) || ""
                            }
                        }),
                        children: r
                    })
                },
                Me = function(e) {
                    var t, r, n, i, s = e.orderType,
                        d = e.side,
                        u = e.timeInForce,
                        p = e.postOnly,
                        x = e.sliderUpdate,
                        m = e.qtyTotalMode,
                        f = e.sor,
                        h = e.tpsl,
                        g = e.dispatch,
                        b = (0, ee.ok2)().getI18n,
                        y = (0, G.k)(),
                        A = (0, ee.qK2)(),
                        T = (0, c.useContext)(te.cb),
                        j = T.base,
                        C = T.quote,
                        S = "".concat(j).concat(C),
                        k = null === (t = y[S]) || void 0 === t || null === (r = t.sor) || void 0 === r ? void 0 : r.enabled,
                        I = null === (n = y[S]) || void 0 === n || null === (i = n.sor) || void 0 === i ? void 0 : i.symbols,
                        w = (0, c.useCallback)((function(e) {
                            g({
                                type: v.Bd.SHADOW_CHANGE,
                                payload: {
                                    sor: (0, a._)((0, o._)({}, f), (0, ne._)({}, d, void 0 === e ? !f[d] : e))
                                }
                            })
                        }), [g, f, d]);
                    if ((0, c.useEffect)((function() {
                            w(!1)
                        }), [S, m]), !k || A || "FOK" === u || ![v.W4.LIMIT, v.W4.MARKET].includes(s) || "total" === m) return (0, l.jsx)(l.Fragment, {});
                    var B = x && s === v.W4.MARKET && d === v.Vl.BUY && "quantity" === m,
                        N = p || B || h;
                    return (0, l.jsx)("label", {
                        style: {
                            display: "flex",
                            alignItems: "center"
                        },
                        htmlFor: "orderform-sor-".concat(d),
                        children: (0, l.jsx)(F.A, {
                            id: "orderform-sor-".concat(d),
                            disabled: N,
                            checked: f[d],
                            onChange: function() {
                                return w()
                            },
                            value: "orderform-sor",
                            children: (0, l.jsx)(Pe, {
                                base: j,
                                symbols: I,
                                children: (0, l.jsx)("div", {
                                    style: {
                                        fontSize: "12px",
                                        marginRight: "4px",
                                        color: N ? "var(--color-DisabledText)" : "var(--color-PrimaryText)"
                                    },
                                    children: b("trd-orderform-sor")
                                })
                            })
                        })
                    })
                };
            const _e = (0, c.memo)(Me);
            var Oe = function(e) {
                var t = e.side,
                    r = e.showAdvancedMode,
                    n = e.openBuySellGrid,
                    o = e.dispatch,
                    a = e.state,
                    i = e.orderType,
                    s = e.curOrderState,
                    d = e.sliderUpdate,
                    u = e.handleChange,
                    p = (0, c.useContext)(te.cb),
                    x = p.base,
                    m = p.quote,
                    f = p.ticker,
                    v = p.isLoggedIn,
                    h = p.tradeType,
                    g = p.layout,
                    b = (0, c.useContext)(U.x).widgetKey,
                    y = a.qtyTotalMode,
                    A = a.timeInForce,
                    T = a.iceBerg,
                    j = a.postOnly,
                    C = a.sor,
                    S = a.tpsl,
                    k = (0, ke.e)(i);
                return (0, l.jsxs)("div", {
                    className: "autoform-extra-field",
                    children: [v && r && !n && (0, l.jsx)(Ne, {
                        base: x,
                        quote: m,
                        side: t,
                        minQty: f.minQty,
                        dispatch: o,
                        iceBerg: T,
                        postOnly: j,
                        orderType: i,
                        timeInForce: A,
                        minQtyPrecision: f.minQtyPrecision,
                        tickSizePrecision: f.tickSizePrecision,
                        tpsl: S,
                        sor: C,
                        tradeType: h,
                        curOrderState: s,
                        widgetKey: b,
                        layout: g,
                        handleChange: u
                    }, "".concat(t, "_").concat(x, "_").concat(m)), k && n && (0, l.jsx)(je.A, {
                        quote: m,
                        side: t,
                        minQty: f.minQty,
                        dispatch: o,
                        postOnly: j,
                        orderType: i,
                        timeInForce: A,
                        tickSizePrecision: f.tickSizePrecision,
                        tpsl: S,
                        sor: C,
                        curOrderState: s,
                        widgetKey: b,
                        tradeType: h,
                        handleChange: u
                    }, "".concat(t, "_").concat(x, "_").concat(m)), v && !(0, R.V$)(h) && !n && (0, l.jsx)(_e, {
                        orderType: i,
                        side: t,
                        timeInForce: A,
                        postOnly: j,
                        sliderUpdate: d,
                        qtyTotalMode: y,
                        layout: g,
                        sor: C,
                        dispatch: o,
                        tpsl: S
                    })]
                })
            };
            const Re = d().memo(Oe);
            var De = r("72cf"),
                Le = r("HS2I"),
                Fe = r("wtFP"),
                qe = r("KljF"),
                Ee = r("fAV+"),
                We = r("ODBe"),
                ze = r("QFrD"),
                Ue = r("Rq2d"),
                Ve = r("BBQg"),
                He = r("5qdK"),
                Ge = r("dZDZ"),
                Ke = r("zHUU"),
                Qe = "avbl_fund_account",
                Ye = function(e) {
                    (0, Fe.u4)("$WebClick", {
                        eventName: Qe,
                        title: "avbl_fund_account_popup",
                        df_source: "spot",
                        elementId: e
                    })
                },
                Xe = function(e) {
                    var t = e.showTransferPanel,
                        r = e.tradeType,
                        n = e.base,
                        o = e.quote,
                        a = e.side,
                        i = (0, ee.ok2)().getI18n,
                        s = (0, Ke.Bl)(),
                        d = (0, c.useContext)(U.x).onShowTransferPanel,
                        u = a === v.Vl.BUY ? o : n,
                        p = (0, c.useCallback)((function() {
                            if (d) return d(u);
                            "SPOT" === r ? ((0, Ge.y)({
                                locale: s,
                                staticHost: m.K5,
                                coin: u,
                                position: "homepage",
                                bizScene: "Spot",
                                depositToWalletType: "MAIN",
                                depositFromWalletType: "CARD",
                                onClose: function() {
                                    Ye("close")
                                }
                            }).catch((function() {
                                Ye("close")
                            })), (0, Fe.u4)("PopupView", {
                                eventName: Qe,
                                clientType: "web",
                                title: "avbl_fund_account_popup",
                                df_source: "spot"
                            }), (0, V.Lp)()) : t()
                        }), [s, i, t, r, u, d]);
                    return (0, c.useEffect)((function() {
                        (0, Fe.u4)("ModuleView", {
                            eventName: Qe,
                            clientType: "web",
                            elementId: "avbl_fund_account_entrance",
                            df_source: "spot"
                        })
                    }), []), (0, l.jsx)(He.A, {
                        style: {
                            cursor: "pointer",
                            color: "var(--color-PrimaryYellow)",
                            width: "16px",
                            height: "16px",
                            marginLeft: "4px",
                            paddingTop: "1px"
                        },
                        onClick: p,
                        "aria-label": "Add Balance"
                    })
                };
            const $e = d().memo(Xe);
            var Ze = function(e) {
                var t, r = e.balance,
                    n = e.tradeType,
                    o = e.side,
                    a = void 0 === o ? v.Vl.BUY : o,
                    i = e.base,
                    s = e.quote,
                    d = e.isLoggedIn,
                    u = e.userAssets,
                    p = e.baseAsset,
                    x = e.quoteAsset,
                    f = a === v.Vl.BUY ? s : i,
                    h = null === (t = u[f]) || void 0 === t ? void 0 : t.free,
                    g = (0, Ee.Y)({
                        isLoggedIn: d,
                        asset: f,
                        balance: r
                    }),
                    b = (0, ze.b)(),
                    y = (0, Ve.j)({
                        baseAsset: f,
                        quoteAsset: f
                    }).needConvert,
                    A = (0, c.useCallback)((function(e) {
                        var t = null;
                        "SPOT" === n && (t = {
                            from: "CARD",
                            to: "MAIN",
                            defaultCoin: e
                        }), R.RR.emit("triggerModal", "TRANSTER", n, t)
                    }), [n]);
                return n === m.Gr.ISOLATED && b ? (0, l.jsx)(Ue.A, {
                    base: p || i,
                    quote: x || s,
                    initialCoin: p || x || s,
                    className: "!ml-[4px] !text-PrimaryYellow"
                }) : (0, l.jsxs)(l.Fragment, {
                    children: [(0, l.jsx)("div", {
                        style: {
                            display: "flex"
                        },
                        children: d && !y && (0, l.jsx)($e, {
                            base: i,
                            quote: s,
                            side: a,
                            free: h,
                            showTransferPanel: A,
                            tradeType: n
                        })
                    }), g && (0, l.jsx)(qe.A, {
                        type: f,
                        balance: "BUSD" === f ? r : ""
                    }), d && (0, l.jsx)(We.A, {
                        initConvertCoin: f,
                        balance: r,
                        free: h,
                        base: i,
                        quote: s
                    })]
                })
            };
            const Je = d().memo(Ze);
            var et = d().memo((function(e) {
                var t = e.balanceRef,
                    r = e.isLoggedIn,
                    n = e.testId,
                    o = e.balance,
                    a = e.asset,
                    i = e.side,
                    s = e.dispatch,
                    d = e.free,
                    u = e.maxAvaliable,
                    p = e.selectedWallet,
                    x = (0, ee.ok2)().getI18n,
                    m = (0, ee.DPo)().theme,
                    f = (0, c.useContext)(te.cb),
                    h = f.userAssets,
                    g = f.showBalance,
                    b = void 0 === g || g,
                    y = f.tradeType,
                    A = (0, K.dI)(),
                    T = (0, D._)((0, oe.A)("trd-load-earn-tips", !1), 2),
                    j = T[0],
                    C = T[1],
                    S = (0, c.useState)(!1),
                    k = S[0],
                    I = S[1],
                    w = (0, c.useCallback)((function(e) {
                        if (r) {
                            var t = (+e || 0).toFixed(O.uW);
                            s({
                                type: v.Bd.SHADOW_CHANGE,
                                payload: {
                                    balance: t
                                }
                            })
                        }
                    }), [r]),
                    B = (0, c.useCallback)((function(e) {
                        s({
                            type: v.Bd.SHADOW_CHANGE,
                            payload: {
                                balanceWallet: e
                            }
                        })
                    }), []);
                if ((0, c.useEffect)((function() {
                        A && w(u)
                    }), [A, u]), (0, c.useEffect)((function() {
                        A && p && B(p)
                    }), [A, p]), (0, c.useEffect)((function() {
                        r && !A && (null != d && 0 != +d || (0, Fe.u4)("USER_ASSET_FREE_EMPTY", {
                            userAssets: h,
                            asset: a,
                            side: i,
                            platform: "WEB"
                        }), w(+d))
                    }), [d, r, A]), (0, c.useEffect)((function() {
                        r && A && !j && i === v.Vl.BUY && (I(!0), C(!0))
                    }), [r, A, j]), (0, c.useEffect)((function() {
                        var e = function() {
                            I(!1), window.removeEventListener("click", e)
                        };
                        k && window.addEventListener("click", e)
                    }), [k]), !b) return (0, l.jsx)(l.Fragment, {});
                var N = (0, l.jsx)("div", {
                    style: {
                        color: "var(--color-TertiaryText)",
                        textDecorationStyle: "dashed",
                        textDecorationLine: "underline"
                    },
                    children: x("trd-orderForm-Avbl")
                });
                return (0, l.jsx)(l.Fragment, {
                    children: (0, l.jsxs)("div", {
                        style: {
                            display: "flex",
                            flex: 1,
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "var(--color-PrimaryText)",
                            fontSize: "12px",
                            gap: "4px"
                        },
                        children: [A ? k ? (0, l.jsx)(q.A, {
                            offset: 4,
                            open: k,
                            arrow: !0,
                            useReactPopper: !0,
                            placement: "top",
                            tooltips: x("trd-orderform-earn-tip"),
                            onVisibleChange: function(e) {
                                return !e && C(!0)
                            },
                            children: N
                        }) : (0, l.jsx)(De.ThemeProvider, {
                            theme: m,
                            children: (0, l.jsx)(De.CombineTrade, {
                                coin: a,
                                biz: "spotTrade",
                                children: N
                            })
                        }) : (0, l.jsx)("div", {
                            style: {
                                color: "var(--color-TertiaryText)"
                            },
                            children: x("trd-orderForm-Avbl")
                        }), (0, l.jsxs)("div", {
                            ref: t,
                            "data-testid": n,
                            style: {
                                display: "flex"
                            },
                            children: [r ? (0, R.T6)(o || "-") : "-", " ", a, (0, l.jsx)(Je, {
                                balance: o || "",
                                side: i,
                                base: a,
                                quote: a,
                                isLoggedIn: r,
                                userAssets: h,
                                tradeType: y
                            })]
                        })]
                    })
                })
            }));

            function tt(e) {
                var t = (0, Le.useCombineTrade)({
                        biz: "spotTrade",
                        coin: e.asset
                    }) || {},
                    r = t.maxAvaliable,
                    n = t.selectedWallet;
                return (0, l.jsx)(et, (0, a._)((0, o._)({}, e), {
                    maxAvaliable: r,
                    selectedWallet: n
                }))
            }
            var rt = r("tM9B"),
                nt = r("MD8j"),
                ot = r("C7Nc"),
                at = r("/jvT"),
                it = r("ttBN"),
                st = r("mjbD"),
                lt = r("ebQf"),
                ct = "0.00000000",
                dt = function(e) {
                    var t = e.typeKey,
                        r = void 0 === t ? "max" : t,
                        n = (0, ee.ok2)().getI18n;
                    return (0, l.jsx)("div", {
                        className: "[&_a]:text-SecondaryBg [&_a:hover]:text-SecondaryBg [&_a]:underline [&_a]:font-bold",
                        dangerouslySetInnerHTML: {
                            __html: n("trd-orderform-pm".concat(r, "-tips"), {
                                url: "/support/faq/174861644e7049aaa64845f1db2e4376"
                            }) || ""
                        }
                    })
                },
                ut = function(e) {
                    var t = e.asset,
                        r = e.free,
                        n = e.spotTransAssetMount,
                        o = e.disableSpotBalance,
                        a = (0, ee.ok2)().getI18n;
                    return (0, l.jsxs)(l.Fragment, {
                        children: [!o && (0, l.jsx)("div", {
                            children: a("trd-orderForm-spot-avbl-amount", {
                                amount: n,
                                coin: t,
                                defaultValue: "Spot Avbl = {{amount}} {{coin}}"
                            })
                        }), (0, l.jsx)("div", {
                            children: a("trd-orderForm-margin-avbl-amount", {
                                amount: r,
                                coin: t,
                                defaultValue: "Margin Avbl = {{amount}} {{coin}}"
                            })
                        })]
                    })
                },
                pt = function(e) {
                    var t = e.asset,
                        r = e.realFree,
                        n = e.maxBorrow,
                        o = (0, ee.ok2)().getI18n;
                    return (0, l.jsxs)("div", {
                        children: [(0, l.jsx)("div", {
                            children: o("trd-orderform-max-tip1")
                        }), (0, l.jsxs)("div", {
                            children: [o("trd-orderForm-Avbl"), " = ", (0, R.T6)(r), " ", t]
                        }), (0, l.jsxs)("div", {
                            children: [o("trd-orderform-max-tip2"), " = ", n, " ", t]
                        })]
                    })
                },
                xt = function(e) {
                    var t = e.tooltips,
                        r = (0, ee.ok2)().getI18n;
                    return (0, l.jsx)(q.A, {
                        arrow: !0,
                        useReactPopper: !0,
                        placement: "top-start",
                        tooltips: (0, l.jsx)("div", {
                            style: {
                                maxWidth: "200px",
                                whiteSpace: "initial"
                            },
                            children: t
                        }),
                        children: (0, l.jsx)("div", {
                            style: {
                                color: "var(--color-TertiaryText)",
                                textDecorationStyle: "dotted",
                                textDecorationLine: "underline",
                                marginRight: "8px",
                                fontSize: "12px",
                                height: "16px",
                                cursor: "help"
                            },
                            children: r("trd-orderForm-Avbl")
                        })
                    })
                },
                mt = function(e) {
                    var t = e.mode,
                        r = e.balanceRef,
                        n = e.testId,
                        o = e.balance,
                        a = e.asset,
                        i = e.free,
                        s = e.handleQuantityChange,
                        d = e.dispatch,
                        u = e.side,
                        p = e.isLoggedIn,
                        x = (0, c.useContext)(te.cb),
                        f = x.base,
                        h = x.quote,
                        y = x.tradeType,
                        A = x.userAssets,
                        T = x.showBalance,
                        j = void 0 === T || T,
                        C = (0, c.useState)("0"),
                        S = C[0],
                        k = C[1],
                        I = "".concat(f).concat(h),
                        w = (0, nt.d4)(at.makeIsolatedCurrentMarginRatio),
                        B = (0, nt.d4)(at.makeIsolatedCurrentMarginRatioStatus),
                        N = (0, st.vO)(),
                        P = (A[f] || {}).free,
                        M = (A[h] || {}).free,
                        _ = (0, c.useRef)("".concat(a, "_").concat(I, "_").concat(t)),
                        D = (0, ee.ok2)().getI18n,
                        L = (0, ee.Bm2)("Margin_auto_borrow_auto_repay"),
                        F = (0, g.bY)().auotBorrow,
                        E = (0, R.V$)(y) && L && F,
                        W = (0, ot.M2)({
                            coin: a
                        }),
                        z = (0, g.N8)().marginBar,
                        U = (0, ee.DFo)(),
                        V = U.isPmAccount,
                        H = U.virtualAvailableUsd,
                        G = U.isPm1_5,
                        K = (0, ee.stA)().isAuto,
                        Q = (0, ee.L1A)().isAuto,
                        Y = (0, ot.tD)({
                            symbol: I,
                            base: f,
                            quote: h,
                            tradeType: y,
                            side: u
                        }).disableSpotBalance,
                        X = (0, ee.dUb)(),
                        $ = (0, c.useMemo)((function() {
                            if (Y) return 0;
                            var e = u === v.Vl.BUY ? h : f;
                            return (X[e] || {}).free
                        }), [u, X, h, f, Y]),
                        Z = u === v.Vl.BUY ? h : f,
                        J = (0, nt.d4)(at.makePMCollateRate),
                        re = (0, it.T)(),
                        ne = (0, rt.tY)(i, $ || 0).toFixed(O.uW),
                        oe = K || Q ? ne : i,
                        ae = G && y === v.Gr.CROSS && p,
                        ie = ae && t === v.V9.NORMAL ? function(e, t, r, n, o, a, i) {
                            var s = a.find((function(e) {
                                    return e.asset === o
                                })),
                                l = a.find((function(e) {
                                    return e.asset === n
                                })),
                                c = i["".concat(n, "USDT")] ? i["".concat(n, "USDT")] : "",
                                d = i["".concat(o, "USDT")] ? i["".concat(o, "USDT")] : "";
                            if (!s || !l || !c || !d) return e;
                            var u = r === m.Vl.BUY ? Number(t) / Number(c) : Number(t) / Number(d);
                            if (s && l) {
                                var p = Number(s.collateralRate),
                                    x = Number(l.collateralRate);
                                if (p > x) return Math.min(u / (p - x), Number(e)).toFixed(8)
                            }
                            return e
                        }(o, H, u, h, f, J, re) : o;
                    (0, c.useEffect)((function() {
                        if (p) {
                            null != i && 0 != +i || (0, Fe.u4)("USER_ASSET_FREE_EMPTY", {
                                userAssets: A,
                                asset: a,
                                side: u,
                                platform: "WEB"
                            });
                            var e = K || Q ? (0, rt.tY)(i || ct, S, $).toFixed(O.uW) : (0, rt.tY)(i || ct, S).toFixed(O.uW);
                            d({
                                type: v.Bd.SHADOW_CHANGE,
                                payload: {
                                    balance: e
                                }
                            })
                        }
                    }), [i, S, p, d, a, u, K, Q, $]), (0, c.useEffect)((function() {
                        var e, r, n = "".concat(a, "_").concat(I, "_").concat(t),
                            o = n === _.current ? O.CS : 0,
                            i = null === N || void 0 === N || null === (e = N[f]) || void 0 === e ? void 0 : e.leverage,
                            s = null === N || void 0 === N || null === (r = N[h]) || void 0 === r ? void 0 : r.leverage;
                        (0, lt.Xd)(n, {
                            mode: t,
                            asset: a,
                            isLoggedIn: p,
                            symbol: I,
                            tradeType: y,
                            delay: o,
                            isAuto: K || Q,
                            spotTransAsset: Z,
                            spotTransAssetMount: $
                        }).then((function(e) {
                            if (V && t === v.V9.NORMAL) {
                                var r = function(e, t, r, n, o, a, i, s) {
                                    var l = r === m.Vl.BUY ? a.find((function(e) {
                                            return e.asset === n
                                        })) : a.find((function(e) {
                                            return e.asset === o
                                        })),
                                        c = r === m.Vl.BUY ? a.find((function(e) {
                                            return e.asset === o
                                        })) : a.find((function(e) {
                                            return e.asset === n
                                        })),
                                        d = i["".concat(n, "USDT")] ? i["".concat(n, "USDT")] : "",
                                        u = i["".concat(o, "USDT")] ? i["".concat(o, "USDT")] : "";
                                    if (!l || !c || !d || !u) return e;
                                    var p = r === m.Vl.BUY ? Number(t) / Number(d) : Number(t) / Number(u),
                                        x = 1 / Number(s);
                                    if (l && c) {
                                        var f = Number(l.collateralRate),
                                            v = Number(c.collateralRate);
                                        if (f > v) {
                                            var h = (p - p * (f - v)) / (f - v + Number(x));
                                            return Math.min(h, Number(e)).toFixed(8)
                                        }
                                    }
                                    return e
                                }(e, H, u, h, f, J, re, u === v.Vl.BUY ? s : i);
                                n === _.current && k(r)
                            } else n === _.current && k(e)
                        })), _.current = n
                    }), [t, a, I, P, M, p, y, w, B, K, Q, $, V, u, z]);
                    var se = (0, c.useCallback)((function() {
                            p && ie && +ie && (s(100), (0, Fe.u4)("$WebClick", {
                                module: "orderform",
                                $element_id: "max"
                            }))
                        }), [s, p, ie, K, Q]),
                        le = (0, c.useCallback)((function() {
                            p && ie && +ie && (s(+oe / +ie * 100), (0, Fe.u4)("$WebClick", {
                                module: "orderform",
                                $element_id: "available"
                            }))
                        }), [s, p, i, ie, K, Q]);
                    return j ? !Y && (E || K || Q || (0, b.bS)(t)) ? (0, l.jsxs)("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            flex: 1,
                            gap: "4px 8px",
                            lineHeight: "18px"
                        },
                        children: [(0, l.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "baseline",
                                justifyContent: "space-between",
                                cursor: "pointer"
                            },
                            onClick: le,
                            children: [K || Q ? (0, l.jsx)(xt, {
                                tooltips: ae && (t === v.V9.NORMAL || (0, b.hK)(t)) ? (0, l.jsx)(dt, {
                                    typeKey: "abvl"
                                }) : (0, l.jsx)(ut, {
                                    asset: a,
                                    free: i,
                                    spotTransAssetMount: $
                                })
                            }) : (0, l.jsx)("div", {
                                style: {
                                    color: "var(--color-TertiaryText)",
                                    fontSize: "12px",
                                    marginRight: "8px"
                                },
                                children: D("trd-orderForm-Avbl")
                            }), (0, l.jsxs)("div", {
                                style: {
                                    fontSize: "12px",
                                    color: "var(--color-PrimaryText)",
                                    minHeight: "16px",
                                    height: "auto",
                                    textAlign: "right",
                                    flexWrap: "nowrap",
                                    display: "flex",
                                    alignItems: "center"
                                },
                                children: [p ? (0, R.T6)(oe) : "-", " ", a, (0, l.jsx)(Je, {
                                    balance: ie || "",
                                    side: u,
                                    base: a,
                                    quote: a,
                                    isLoggedIn: p,
                                    userAssets: A,
                                    tradeType: y,
                                    baseAsset: f,
                                    quoteAsset: h
                                })]
                            })]
                        }), (0, l.jsxs)("div", {
                            style: {
                                display: !K && !Q || (0, b.bS)(t) ? "flex" : "none",
                                alignItems: "baseline",
                                justifyContent: "space-between",
                                cursor: "pointer"
                            },
                            onClick: se,
                            children: [(0, l.jsx)(q.A, {
                                arrow: !0,
                                placement: "top-start",
                                tooltips: ae && (0, b.bS)(t) ? (0, l.jsx)(dt, {
                                    typeKey: "max"
                                }) : (0, l.jsx)(pt, {
                                    asset: a,
                                    realFree: oe,
                                    maxBorrow: S
                                }),
                                children: (0, l.jsx)("div", {
                                    style: {
                                        color: "var(--color-TertiaryText)",
                                        marginRight: "8px",
                                        fontSize: "12px",
                                        height: "16px",
                                        cursor: "help",
                                        textDecorationStyle: "dotted",
                                        textDecorationLine: "underline"
                                    },
                                    children: D("trd-Position-Max")
                                })
                            }), (0, l.jsxs)("div", {
                                ref: r,
                                "data-testid": n,
                                children: [p ? (0, R.T6)(ie || "-") : "-", " ", a, V && W && y === v.Gr.CROSS ? (0, l.jsx)("span", {
                                    style: {
                                        marginLeft: "4px"
                                    },
                                    children: "(".concat(W, "x)")
                                }) : (0, l.jsx)(l.Fragment, {})]
                            })]
                        })]
                    }) : (0, l.jsxs)("div", {
                        style: {
                            display: "flex",
                            flex: 1,
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "var(--color-PrimaryText)",
                            fontSize: "12px",
                            gap: "4px",
                            whiteSpace: "nowrap"
                        },
                        children: [ae && !(0, b.bS)(t) ? (0, l.jsx)(xt, {
                            tooltips: (0, l.jsx)(dt, {
                                typeKey: "abvl"
                            })
                        }) : (0, l.jsx)("div", {
                            style: {
                                color: "var(--color-TertiaryText)"
                            },
                            children: D("trd-orderForm-Avbl")
                        }), (0, l.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center"
                            },
                            ref: r,
                            "data-testid": n,
                            children: [p ? (0, R.T6)(ie || "-") : "-", " ", a, V && W && y === v.Gr.CROSS ? (0, l.jsx)("span", {
                                style: {
                                    marginLeft: "4px"
                                },
                                children: "(".concat(W, "x)")
                            }) : (0, l.jsx)(l.Fragment, {}), (0, l.jsx)(Je, {
                                balance: ie || "",
                                side: u,
                                base: a,
                                quote: a,
                                isLoggedIn: p,
                                userAssets: A,
                                tradeType: y,
                                baseAsset: f,
                                quoteAsset: h
                            })]
                        })]
                    }) : (0, l.jsx)(l.Fragment, {})
                };
            const ft = d().memo(mt);
            var vt = function(e) {
                var t, r = e.balance,
                    n = e.dispatch,
                    o = e.tradeType,
                    a = e.side,
                    i = void 0 === a ? v.Vl.BUY : a,
                    s = e.mode,
                    d = void 0 === s ? v.V9.NORMAL : s,
                    u = e.base,
                    p = e.quote,
                    x = e.isLoggedIn,
                    m = e.userAssets,
                    f = e.testId,
                    h = e.handleQuantityChange,
                    g = i === v.Vl.BUY ? p : u,
                    b = null === (t = m[g]) || void 0 === t ? void 0 : t.free,
                    y = (0, c.useRef)(null);
                return (0, l.jsx)("div", {
                    style: {
                        display: "flex",
                        fontSize: "12px",
                        alignItems: "flex-start",
                        flexWrap: "wrap"
                    },
                    children: (0, R.V$)(o) ? (0, l.jsx)(ft, {
                        side: i,
                        mode: d,
                        free: b,
                        asset: g,
                        balance: r,
                        balanceRef: y,
                        isLoggedIn: x,
                        testId: f,
                        handleQuantityChange: h,
                        dispatch: n
                    }) : (0, l.jsx)(tt, {
                        asset: g,
                        balance: r,
                        isLoggedIn: x,
                        balanceRef: y,
                        testId: f,
                        side: i,
                        dispatch: n,
                        free: b
                    })
                })
            };
            const ht = d().memo(vt);
            var gt = r("ZLGz"),
                bt = r("eWL+"),
                yt = r("zx3+"),
                At = function(e) {
                    var t = e.getI18n;
                    return (0, l.jsxs)("div", {
                        style: {
                            fontSize: "12px",
                            lineHeight: "16px"
                        },
                        children: [t("trd-estfee-tips-1"), (0, l.jsx)("a", {
                            className: "trade-common-link",
                            target: "_blank",
                            href: "/fee/trading",
                            children: t("trd-guide-guidelink")
                        }), (0, l.jsx)("br", {}), (0, l.jsx)("br", {}), t("trd-estfee-tips-2")]
                    })
                },
                Tt = function(e) {
                    var t = e.quantity,
                        r = e.orderType,
                        n = e.side,
                        o = e.total,
                        a = e.price,
                        i = (0, bt.ZU)() || {},
                        s = (0, c.useContext)(te.cb),
                        d = s.getMarketPrice,
                        u = s.base,
                        p = s.quote,
                        x = ((0, gt.Py)() || {}).commissionStatus,
                        m = (0, G.k)()["".concat(u).concat(p)],
                        f = (null === m || void 0 === m ? void 0 : m.baseCommissionPrecision) || 8,
                        h = (null === m || void 0 === m ? void 0 : m.quoteCommissionPrecision) || 8,
                        g = (0, ee.pP0)(),
                        b = i.takerCommission,
                        y = i.makerCommission,
                        A = (0, c.useMemo)((function() {
                            var e, i = 1 === x ? 1 - +g : 1,
                                s = o;
                            switch ([v.W4.STOP_MARKET, v.W4.TRAILING_STOP].includes(r) && +a && +t && (s = +t * +a), r) {
                                case v.W4.MARKET:
                                case v.W4.STOP_MARKET:
                                    e = b;
                                    break;
                                case v.W4.OCO:
                                    e = y;
                                    break;
                                default:
                                    var l = d(),
                                        c = Number(a) - Number(l);
                                    e = 0 === c ? b : c > 0 ? n === v.Vl.BUY ? b : y : n === v.Vl.SELL ? b : y
                            }
                            return n === v.Vl.BUY ? "".concat((0, yt.gC)((0, rt.lw)(t, e, i), f), " ").concat(u) : "".concat((0, yt.gC)((0, rt.lw)(s, e, i), h), " ").concat(p)
                        }), [b, y, d, r, g, x, t, o, a, f, h, u, p]);
                    return (0, l.jsxs)(l.Fragment, {
                        children: [A, (0, l.jsx)("input", {
                            name: "estfee",
                            value: A,
                            type: "hidden"
                        })]
                    })
                },
                jt = function(e) {
                    var t, r, n, o, a = e.curOrderState,
                        i = e.orderType,
                        s = e.side,
                        d = e.tradeType,
                        u = (0, ee.ok2)().getI18n,
                        p = (0, ee.YVB)(),
                        x = (0, c.useContext)(te.cb).getMarketPrice,
                        m = null === (t = a.quantity) || void 0 === t ? void 0 : t.value,
                        f = null === (r = a.total) || void 0 === r ? void 0 : r.value,
                        h = (0, c.useMemo)((function() {
                            var e, t;
                            return i === v.W4.TRAILING_STOP ? (0, lt.Q$)(a, x(), s) : (null === a || void 0 === a || null === (e = a.price) || void 0 === e ? void 0 : e.value) || (null === a || void 0 === a || null === (t = a.stopLimitPrice) || void 0 === t ? void 0 : t.value)
                        }), [i, s, a]);
                    return p && (0, R.V$)(d) ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsxs)("div", {
                        style: {
                            display: "flex",
                            color: "var(--color-PrimaryText)",
                            fontSize: "12px",
                            lineHeight: "16px",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [(0, l.jsx)(q.A, {
                            offset: 4,
                            placement: "top",
                            useReactPopper: !0,
                            arrow: !0,
                            tooltips: (0, l.jsx)(At, {
                                getI18n: u
                            }),
                            children: (0, l.jsx)("div", {
                                className: "underline decoration-dotted",
                                style: {
                                    color: "var(--color-TertiaryText)",
                                    cursor: "help"
                                },
                                children: u("trd-estfee")
                            })
                        }), (0, l.jsx)("span", {
                            children: !(!+(null === (n = a.quantity) || void 0 === n ? void 0 : n.value) && !+(null === (o = a.total) || void 0 === o ? void 0 : o.value)) && (0, l.jsx)(Tt, {
                                quantity: m,
                                total: f,
                                price: h,
                                orderType: i,
                                side: s
                            })
                        })]
                    })
                };
            const Ct = (0, c.memo)(jt);
            var St = r("iOZB"),
                kt = function(e) {
                    var t = e.curOrderState,
                        r = e.orderType,
                        n = e.side,
                        o = e.balance,
                        a = e.isLoggedIn,
                        i = e.minTotalPrecision,
                        s = (0, ee.ok2)().getI18n,
                        d = (0, c.useContext)(te.cb),
                        u = d.base,
                        p = d.quote,
                        x = d.getBook,
                        m = "".concat(u).concat(p),
                        f = (0, G.n)(m),
                        h = (0, c.useState)(0),
                        g = h[0],
                        b = h[1];
                    (0, St.A)((function() {
                        [v.W4.MARKET, v.W4.TRAILING_STOP].includes(r) && b(Date.now())
                    }), 500);
                    var y = (0, c.useMemo)((function() {
                            var e = x(),
                                t = e.asks,
                                r = e.bids;
                            return n === v.Vl.BUY ? (t[0] || [])[0] : (r[0] || [])[0]
                        }), [n, g]),
                        A = (0, c.useMemo)((function() {
                            var e;
                            if (!a) return "--";
                            if (!o || !Number(o)) return "0";
                            var s = null === t || void 0 === t || null === (e = t.price) || void 0 === e ? void 0 : e.value,
                                l = (0, lt.n7)(t),
                                c = s || l;
                            return r === v.W4.OCO && Number(s) && l ? c = n === v.Vl.BUY ? Math.min(Number(s), +l) : Math.max(Number(s), +l) : r === v.W4.MARKET ? c = y : r === v.W4.TRAILING_STOP && (c = (0, lt.Q$)(t, y, n)), c && Number(c) ? n === v.Vl.BUY ? (0, rt.k3)(o, c).toFixed(f) : (0, rt.lw)(o, c).toFixed(i) : "--"
                        }), [o, r, n, y, t]);
                    return (0, l.jsxs)("div", {
                        style: {
                            display: "flex",
                            color: "var(--color-PrimaryText)",
                            fontSize: "12px",
                            lineHeight: "16px",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        children: [(0, l.jsx)(q.A, {
                            offset: 4,
                            arrow: !0,
                            useReactPopper: !0,
                            placement: "top",
                            tooltips: s("trd-orderform-maxtrade-tips"),
                            children: (0, l.jsx)("div", {
                                className: "underline decoration-dotted",
                                style: {
                                    color: "var(--color-TertiaryText)",
                                    cursor: "help"
                                },
                                children: s("trd-orderform-max-".concat(n))
                            })
                        }), (0, l.jsxs)("span", {
                            children: [A, " ", n === v.Vl.BUY ? u : p]
                        })]
                    })
                };
            const It = (0, c.memo)(kt);
            var wt = (0, x.A)((function() {
                    return r.e(4137).then(r.bind(r, "Nfhy"))
                }), {
                    webpack: function() {
                        return ["Nfhy"]
                    }
                }),
                Bt = function(e) {
                    var t = e.side,
                        r = e.openBuySellGrid,
                        n = e.dispatch,
                        o = e.state,
                        a = e.orderType,
                        i = e.curOrderState,
                        s = e.handleQuantityChange,
                        d = e.setBorrowAmount,
                        u = (0, c.useContext)(te.cb),
                        p = u.base,
                        x = u.quote,
                        m = u.ticker,
                        f = u.isLoggedIn,
                        v = u.tradeType,
                        h = u.userAssets,
                        g = o.mode,
                        b = o.balance,
                        y = o.qtyTotalMode;
                    return (0, l.jsxs)("div", {
                        className: "autoform-fee",
                        children: [(0, l.jsx)(ht, {
                            side: t,
                            mode: g,
                            tradeType: v,
                            balance: b,
                            dispatch: n,
                            base: p,
                            quote: x,
                            isLoggedIn: f,
                            userAssets: h,
                            isProLayout: r,
                            handleQuantityChange: s
                        }), !(0, R.V$)(v) && (0, l.jsx)(It, {
                            curOrderState: i,
                            orderType: a,
                            side: t,
                            balance: b,
                            isLoggedIn: f,
                            minTotalPrecision: m.minTotalPrecision
                        }), f && (0, R.V$)(v) && (0, l.jsx)(wt, {
                            side: t,
                            mode: g,
                            tradeType: v,
                            base: p,
                            quote: x,
                            orderType: a,
                            state: o,
                            qtyTotalMode: y,
                            setBorrowAmount: d
                        }), f && (0, l.jsx)(Ct, {
                            curOrderState: i,
                            orderType: a,
                            tradeType: v,
                            side: t
                        })]
                    })
                };
            const Nt = d().memo(Bt);
            var Pt = r("TR7n"),
                Mt = function() {
                    return (0, Pt.H)({
                        cdnHost: m.K5,
                        host: m.dM,
                        loadUikitStyle: !1
                    }), (0, l.jsx)(l.Fragment, {})
                },
                _t = function(e) {
                    var t, r, n = e.curOrderState,
                        o = (0, c.useState)(!1),
                        a = o[0],
                        i = o[1],
                        s = !!(null === n || void 0 === n || null === (t = n.quantity) || void 0 === t ? void 0 : t.value) || !!(null === n || void 0 === n || null === (r = n.total) || void 0 === r ? void 0 : r.value);
                    return (0, c.useEffect)((function() {
                        s && !a && i(!0)
                    }), [s, a]), (0, l.jsx)(l.Fragment, {
                        children: a && (0, l.jsx)(Mt, {})
                    })
                };
            const Ot = d().memo(_t);
            var Rt = (0, x.A)((0, n._)(s().mark((function e() {
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.next = 2, Promise.all([r.e(995), r.e(9431), r.e(2963), r.e(4076), r.e(5322), r.e(3424), r.e(2025), r.e(5092), r.e(3379)]).then(r.bind(r, "lL26"));
                            case 2:
                                return e.abrupt("return", e.sent);
                            case 3:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), {
                    webpack: function() {
                        return ["lL26"]
                    }
                }),
                Dt = (0, x.A)((function() {
                    return r.e(2734).then(r.bind(r, "HxrR"))
                }), {
                    webpack: function() {
                        return ["HxrR"]
                    }
                }),
                Lt = d().memo((function(e) {
                    var t = e.tradeType,
                        r = e.side,
                        n = e.layout,
                        o = void 0 === n ? m.ug : n,
                        a = e.openBuySellGrid,
                        i = void 0 !== a && a,
                        s = e.orderType,
                        d = void 0 === s ? v.W4.LIMIT : s,
                        x = e.setOrderType,
                        f = e.storage,
                        h = e.changeStorage,
                        b = e.formSide,
                        y = void 0 === b ? "" : b,
                        A = e.customOrderTabList,
                        I = e.showAdvancedMode,
                        w = void 0 === I || I,
                        B = e.enableFlashOrder,
                        N = void 0 === B || B,
                        P = e.price,
                        M = e.onSuccess,
                        D = void 0 === M ? function() {
                            return null
                        } : M,
                        L = e.watchOrderFormPriceQty,
                        F = e.subTypes,
                        q = e.orderTabClassName,
                        E = void 0 === q ? "" : q,
                        W = e.modeSwitchClassName,
                        K = void 0 === W ? "" : W,
                        Q = e.marginButtonClickBehavior,
                        Y = void 0 === Q ? "drawer" : Q,
                        X = e.getBalanceWallet,
                        $ = (0, c.useRef)({}),
                        Z = (0, c.useContext)(te.cb),
                        J = Z.base,
                        ee = Z.quote,
                        re = Z.ticker,
                        ne = Z.urlConfig,
                        oe = Z.isLoggedIn,
                        ae = (0, c.useContext)(U.x),
                        ie = ae.currentGroup,
                        ce = ae.widgetKey,
                        de = ae.showOrderTypeTab,
                        pe = ae.showOrderModeTab,
                        xe = ae.initOrderMode,
                        me = ae.showProExtra,
                        fe = (0, H.o)().getI18n,
                        ge = (0, g.PA)({
                            side: r,
                            tradeType: t,
                            orderType: d,
                            modalRef: $,
                            onSuccess: D,
                            price: P,
                            enableFlashOrder: N,
                            watchOrderFormPriceQty: L,
                            initOrderMode: xe,
                            getBalanceWallet: X
                        }),
                        be = ge.state,
                        ye = ge.dispatch,
                        Ae = ge.getHelperText,
                        je = ge.handleFormChange,
                        Ce = ge.handleFormSubmit,
                        Se = ge.handleQuantityChange,
                        ke = ge.handleQuantityElectronChange,
                        Ie = be[d],
                        we = (0, c.useRef)(),
                        Be = be.mode,
                        Ne = be.isFetching,
                        Pe = be.qtyTotalMode,
                        Me = (0, ue.eG)(be, r),
                        _e = (0, c.useState)(0),
                        Oe = _e[0],
                        De = _e[1],
                        Le = (0, G.k)();
                    (0, g.iM)({
                        orderType: d,
                        dispatch: ye
                    });
                    var Fe = (0, g.$z)({
                        orderType: d,
                        dispatch: ye,
                        side: r,
                        storage: f,
                        changeStorage: h
                    });
                    (0, g.N)({
                        ref: we,
                        step: 2,
                        side: r
                    }), (0, g.ep)({
                        orderType: d,
                        side: r,
                        handleFormChange: je,
                        handleQuantityElectronChange: ke,
                        curOrderState: Ie,
                        isLoggedIn: oe,
                        handleFormSubmit: Ce,
                        handleQuantityChange: Se,
                        minQtyPrecision: re.minQtyPrecision,
                        tickSizePrecision: re.tickSizePrecision
                    });
                    var qe = (0, p.Z)((function(e) {
                            var n, o, a;
                            "quantity" === e && (0, V.S$)({
                                symbol: "".concat(J, "/").concat(ee),
                                tradeType: t,
                                orderType: d,
                                side: r,
                                percentage: null === Ie || void 0 === Ie || null === (n = Ie.sliderQty) || void 0 === n ? void 0 : n.value,
                                price: null === Ie || void 0 === Ie || null === (o = Ie.price) || void 0 === o ? void 0 : o.value,
                                amount: null === Ie || void 0 === Ie || null === (a = Ie.quantity) || void 0 === a ? void 0 : a.value
                            })
                        })),
                        Ee = (0, p.Z)((function() {
                            var e, n, o;
                            (0, V.DY)({
                                symbol: "".concat(J, "/").concat(ee),
                                tradeType: t,
                                orderType: d,
                                side: r,
                                percentage: null === Ie || void 0 === Ie || null === (e = Ie.sliderQty) || void 0 === e ? void 0 : e.value,
                                price: null === Ie || void 0 === Ie || null === (n = Ie.price) || void 0 === n ? void 0 : n.value,
                                amount: null === Ie || void 0 === Ie || null === (o = Ie.quantity) || void 0 === o ? void 0 : o.value
                            })
                        })),
                        We = (0, p.Z)((function() {
                            return document.getElementById(r === v.Vl.BUY ? T : j).click()
                        })),
                        ze = (0, c.useCallback)((function(e, t) {
                            je("", t, e)
                        }), [je]),
                        Ue = (0, c.useCallback)((function() {
                            var e, t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                            return r ? "minTotal" !== r ? fe(r) : Le && (null === (e = Le["".concat(J).concat(ee)]) || void 0 === e ? void 0 : e.minOrderValue) ? "".concat(fe("minTotal"), " ").concat(null === (t = Le["".concat(J).concat(ee)]) || void 0 === t ? void 0 : t.minOrderValue) : "" : ""
                        }), [Le, J, ee, fe]),
                        Ve = (0, c.useCallback)((function(e) {
                            var t = e.beforeI18nKey,
                                r = e.sideSellkey,
                                n = void 0 === r ? "" : r,
                                o = e.side,
                                a = e.name;
                            return fe(t ? t + (o === v.Vl.BUY ? "" : n) : a)
                        }), [fe]);
                    return (0, l.jsxs)("div", {
                        className: "proInnerForm",
                        children: [(0, l.jsx)(k.A, {
                            ref: $
                        }), !i && de && (0, l.jsx)(le.A, {
                            orderType: d,
                            onChange: x,
                            tradeType: t,
                            layout: o,
                            formSide: y,
                            customList: A,
                            className: E,
                            subTypes: F
                        }), (0, R.V$)(t) && pe && (0, l.jsx)(se, {
                            className: K,
                            mode: Be,
                            getI18n: fe,
                            dispatch: ye,
                            side: r
                        }), (0, l.jsxs)(u.A, {
                            className: "orderform-autoform",
                            onSubmit: Ce,
                            trim: !0,
                            noValidate: !0,
                            autoComplete: "off",
                            id: "autoForm".concat(r).concat(ie),
                            children: [(0, l.jsx)("div", {
                                className: "autoform-field",
                                children: O.GJ[d].map((function(e) {
                                    var t = e.name,
                                        n = e.type,
                                        a = e.isBase,
                                        i = e.disabled,
                                        s = e.needLogin,
                                        c = e.withHelper,
                                        u = e.placeholder,
                                        p = e.minKey,
                                        x = void 0 === p ? "tickSize" : p,
                                        m = e.stepKey,
                                        f = void 0 === m ? "tickSize" : m,
                                        h = e.beforeI18nKey,
                                        g = e.sideSellkey,
                                        b = e.inputType,
                                        y = void 0 === b ? "text" : b,
                                        A = e.noafter,
                                        T = void 0 !== A && A;
                                    if (s && !oe) return null;
                                    if ("slider" === n) return (0, l.jsx)(_, {
                                        value: Ie.sliderQty.value,
                                        onChange: Se,
                                        onSubmit: We
                                    }, "slider");
                                    if ("mixedInput" === n) return (0, l.jsx)(ve, {
                                        side: r,
                                        dispatch: ye,
                                        qtyTotalMode: Pe,
                                        getHelperText: Ae,
                                        totalState: Ie.total,
                                        quantityState: Ie.quantity,
                                        handleClick: Fe,
                                        className: "qtyTotalInput",
                                        sliderUpdate: Me,
                                        placeholder: Ue("minTotal"),
                                        handleChange: je
                                    }, "qtyTotalInput");
                                    if ("SLInput" === n) return (0, l.jsx)(he.A, {
                                        side: r,
                                        widgetKey: ce,
                                        curOrderState: Ie,
                                        handleFormChange: je,
                                        orderType: d,
                                        dispatch: ye,
                                        base: J,
                                        quote: ee,
                                        handleChange: je
                                    }, "SLInput");
                                    if ("trailingDelta" === n) return (0, l.jsx)(Te, {
                                        name: "trailingDelta",
                                        side: r,
                                        dispatch: ye,
                                        curOrderState: Ie,
                                        layout: o,
                                        handleChange: je
                                    }, "trailingDelta");
                                    var j = (0, l.jsxs)("div", {
                                        ref: we,
                                        children: [(0, l.jsx)(S.A, {
                                            name: t,
                                            symbol: r,
                                            min: re[x],
                                            step: re[f],
                                            precision: re["".concat(f, "Precision")],
                                            label: Ve({
                                                beforeI18nKey: h,
                                                sideSellkey: g,
                                                side: r,
                                                name: t
                                            }),
                                            placeholder: Ue(u),
                                            after: T ? "" : a ? J : ee,
                                            value: Ie[t].value,
                                            disabled: i,
                                            invalid: Ie[t].invalid,
                                            errorText: Ie[t].errorMsg,
                                            helperText: c && Ae(t, Ie[t].value),
                                            autoZero: t === v.o1.QUANTITY,
                                            className: t,
                                            widgetKey: ce,
                                            onAmountBlur: qe,
                                            inputType: y,
                                            onStep: ze,
                                            handleChange: je
                                        }, t), (0, l.jsx)(Dt, {
                                            name: t,
                                            layout: o,
                                            side: r
                                        })]
                                    });
                                    return "actPrice" === n ? (0, l.jsx)(z, {
                                        side: r,
                                        children: j
                                    }, "actPrice") : j
                                }))
                            }), (0, l.jsx)(Re, {
                                side: r,
                                showAdvancedMode: w,
                                openBuySellGrid: i,
                                orderType: d,
                                sliderUpdate: Me,
                                dispatch: ye,
                                state: be,
                                curOrderState: Ie,
                                handleChange: je
                            }), (0, l.jsx)(Nt, {
                                side: r,
                                openBuySellGrid: i,
                                dispatch: ye,
                                state: be,
                                orderType: d,
                                curOrderState: Ie,
                                handleQuantityChange: Se,
                                setBorrowAmount: De
                            }), (0, l.jsx)(C, {
                                base: J,
                                mode: Be,
                                side: r,
                                getI18n: fe,
                                urlConfig: ne,
                                isFetching: Ne,
                                isLoggedIn: oe,
                                borrowAmount: Oe,
                                trackSubmit: Ee
                            }), (0, l.jsx)(Dt, {
                                name: "order",
                                layout: o,
                                side: r
                            })]
                        }), !i && me && (0, l.jsx)(Rt, {
                            marginButtonClickBehavior: Y,
                            side: r,
                            borrowAmount: Oe
                        }), oe && (0, l.jsx)(Ot, {
                            curOrderState: Ie
                        })]
                    })
                }));

            function Ft(e) {
                var t = (0, c.useContext)(te.cb),
                    r = t.base,
                    n = t.quote,
                    i = (0, K.Wr)(r).balanceWallet,
                    s = (0, K.Wr)(n).balanceWallet,
                    d = (0, p.Z)((function(e) {
                        return e === v.Vl.BUY ? s : i
                    }));
                return (0, l.jsx)(Lt, (0, a._)((0, o._)({}, e), {
                    getBalanceWallet: d
                }))
            }
        },
        nxcL: (e, t, r) => {
            r.d(t, {
                A: () => d
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("J+BU"),
                s = r("4dkC"),
                l = r("b9LU"),
                c = function(e) {
                    var t = e.side,
                        r = e.tradeType,
                        a = void 0 === r ? i.Gr.SPOT : r,
                        c = e.storage,
                        d = e.changeStorage,
                        u = e.layout,
                        p = e.customOrderTabList,
                        x = e.showVip,
                        m = e.showAdvancedMode,
                        f = e.price,
                        v = e.onSuccess,
                        h = e.enableFlashOrder,
                        g = e.watchOrderFormPriceQty,
                        b = e.subTypes,
                        y = e.orderTabClassName,
                        A = void 0 === y ? "" : y,
                        T = e.modeSwitchClassName,
                        j = void 0 === T ? "" : T,
                        C = e.marginButtonClickBehavior,
                        S = void 0 === C ? "drawer" : C,
                        k = (0, o.useContext)(l.x),
                        I = k.orderType,
                        w = k.setOrderType,
                        B = k.tabSide;
                    return (0, n.jsx)("div", {
                        className: "pro-layout",
                        children: (0, n.jsx)(s.A, {
                            side: t,
                            tradeType: a,
                            layout: u,
                            orderType: I,
                            setOrderType: w,
                            storage: c,
                            changeStorage: d,
                            formSide: B,
                            customOrderTabList: p,
                            showVip: x,
                            showAdvancedMode: m,
                            price: f,
                            onSuccess: v,
                            enableFlashOrder: h,
                            watchOrderFormPriceQty: g,
                            subTypes: b,
                            orderTabClassName: A,
                            modeSwitchClassName: j,
                            marginButtonClickBehavior: S
                        })
                    })
                };
            const d = a().memo(c)
        },
        "8J3r": (e, t, r) => {
            r.d(t, {
                Bt: () => R
            });
            var n = r("mguP"),
                o = r("d12p"),
                a = r("mXdx"),
                i = r("DTvD"),
                s = r("2IQ4"),
                l = r("GJ+9"),
                c = r("Vhyo"),
                d = r("GIr8"),
                u = r("Djui"),
                p = r("dNK/"),
                x = r("zX7I"),
                m = r("Pc2Y"),
                f = r("8qFz"),
                v = r("kU6N"),
                h = r("tC4u"),
                g = r("MD8j"),
                b = r("GS//"),
                y = r.n(b),
                A = r("DxGY"),
                T = r("C7Nc"),
                j = r("ttBN"),
                C = r("Qhol"),
                S = r("OKXq"),
                k = r("CSRd"),
                I = r("MiNH"),
                w = r("tM9B"),
                B = r("/jvT"),
                N = r("Ykh1"),
                P = r("wtFP"),
                M = r("BZR+"),
                _ = function(e) {
                    var t, r, v, b, N, P, _ = e.defaultLevel,
                        O = e.baseAsset,
                        R = e.quoteAsset,
                        D = e.close,
                        L = (0, i.useState)(!0),
                        F = L[0],
                        q = L[1],
                        E = (0, i.useState)(!1),
                        W = E[0],
                        z = E[1],
                        U = (0, g.d4)(B.makeIsolatedCurrentMarginRatio),
                        V = (0, g.d4)(B.makeIsolatedCurrentMarginRatioStatus),
                        H = (0, i.useState)(""),
                        G = H[0],
                        K = H[1],
                        Q = (0, i.useState)("".concat(_).indexOf(".") >= 0 ? 1 : Number("".concat(_).split("x")[0])),
                        Y = Q[0],
                        X = Q[1],
                        $ = (0, i.useState)(Number("".concat(_).split("x")[0])),
                        Z = $[0],
                        J = $[1],
                        ee = (0, i.useState)(10),
                        te = ee[0],
                        re = ee[1],
                        ne = (0, M.Qh)(),
                        oe = (0, i.useState)(!1),
                        ae = oe[0],
                        ie = oe[1],
                        se = (0, i.useState)([]),
                        le = se[0],
                        ce = se[1],
                        de = (0, i.useState)(!!V),
                        ue = de[0],
                        pe = de[1],
                        xe = (0, j.T)(),
                        me = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "10";
                            if (1 === Number(t) || !Array.isArray(e)) return {
                                maxBaseBorrow: 0,
                                maxQuoteBorrow: 0
                            };
                            var r = y()(e, (function(e) {
                                var r = e.marginRatio;
                                return Number(t) <= Number(r)
                            })) || e[0];
                            return {
                                maxBaseBorrow: (null === r || void 0 === r ? void 0 : r.baseMaxBorrow) || 0,
                                maxQuoteBorrow: (null === r || void 0 === r ? void 0 : r.quoteMaxBorrow) || 0
                            }
                        }(le, Z),
                        fe = me.maxBaseBorrow,
                        ve = me.maxQuoteBorrow,
                        he = (0, T.mi)({
                            currentSymbol: "".concat(O).concat(R)
                        }).userIsolatedAssets,
                        ge = (void 0 === he ? [] : he).find((function(e) {
                            return e.symbol === "".concat(O).concat(R)
                        })) || {},
                        be = (null === ge || void 0 === ge || null === (t = ge[O]) || void 0 === t ? void 0 : t.netAsset) || 0,
                        ye = (null === ge || void 0 === ge || null === (r = ge[R]) || void 0 === r ? void 0 : r.netAsset) || 0,
                        Ae = (null === ge || void 0 === ge || null === (v = ge[O]) || void 0 === v ? void 0 : v.debt) || 0,
                        Te = (null === ge || void 0 === ge || null === (b = ge[R]) || void 0 === b ? void 0 : b.debt) || 0,
                        je = (null === ge || void 0 === ge || null === (N = ge[O]) || void 0 === N ? void 0 : N.netAssetOfBtc) || 0,
                        Ce = (null === ge || void 0 === ge || null === (P = ge[R]) || void 0 === P ? void 0 : P.netAssetOfBtc) || 0,
                        Se = (0, C.ok2)().getI18n,
                        ke = (0, g.d4)(S.makeAssets),
                        Ie = (ke[O] || {
                            logoUrl: ""
                        }).logoUrl,
                        we = (ke[R] || {
                            logoUrl: ""
                        }).logoUrl,
                        Be = {
                            min: 1,
                            max: te
                        },
                        Ne = function(e) {
                            return (0, o._)(Array(e + 1).keys()).splice(1, e)
                        }(te),
                        Pe = (0, i.useMemo)((function() {
                            return function(e) {
                                var t = e.baseAsset,
                                    r = e.quoteAsset,
                                    n = e.maxBaseBorrow,
                                    o = e.maxQuoteBorrow,
                                    a = e.baseFund,
                                    i = e.quoteFund,
                                    s = e.level,
                                    l = e.priceIndexMap,
                                    c = e.baseDebt,
                                    d = e.quoteDebt,
                                    u = (e.baseAmount, e.quoteAmount, (null === l || void 0 === l ? void 0 : l["".concat(t, "BTC")]) || 1),
                                    p = (null === l || void 0 === l ? void 0 : l["".concat(r, "BTC")]) || 1,
                                    x = (Number(a) + Number(i)) / Number(u) * (Number(s) - 1) - c,
                                    m = (Number(a) + Number(i)) / Number(p) * (Number(s) - 1) - d;
                                if (1 === Number(s) || !s || "" === "".concat(s)) return {
                                    base: (0, w.ZV)(0, 8),
                                    quote: (0, w.ZV)(0, 8)
                                };
                                var f = Math.min(Number(n) - c, x),
                                    v = Math.min(Number(o) - d, m);
                                return {
                                    base: (0, w.ZV)(f <= 0 ? 0 : f, 8),
                                    quote: (0, w.ZV)(v <= 0 ? 0 : v, 8)
                                }
                            }({
                                baseAsset: O,
                                quoteAsset: R,
                                maxBaseBorrow: fe,
                                maxQuoteBorrow: ve,
                                level: Z,
                                baseFund: je,
                                quoteFund: Ce,
                                priceIndexMap: xe,
                                baseDebt: Ae,
                                quoteDebt: Te,
                                baseAmount: be,
                                quoteAmount: ye
                            })
                        }), [fe, ve, O, R, Y, Z, be, ye]),
                        Me = Pe.base,
                        _e = Pe.quote,
                        Oe = (0, g.wA)();
                    (0, i.useEffect)((function() {
                        ne && Promise.all([(0, k.I)("".concat(O).concat(R)), (0, I.YI)("".concat(O).concat(R))]).then((function(e) {
                            var t = (0, n._)(e, 2),
                                r = t[0],
                                o = t[1];
                            Array.isArray(null === r || void 0 === r ? void 0 : r.data) && ce(null === r || void 0 === r ? void 0 : r.data), o && re((0, M.u8)(o, ne)), q(!1)
                        }))
                    }), [ne]), (0, i.useEffect)((function() {
                        if (!F) return Number(Z) < 1 ? (z(!0), void K(Se("trd-min-lev-is", {
                            radio: "1X"
                        }) || "")) : Number(Z) > Number(te) ? (z(!0), void K(Se("trd-max-lev-is", {
                            radio: "".concat(te, "X")
                        }) || "")) : void z(!1)
                    }), [Z, te]);
                    var Re = function() {
                            return ue ? (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)(s.A, {
                                    sx: {
                                        fontSize: "14px",
                                        mt: "16px",
                                        color: "t.third"
                                    },
                                    children: [Se("trd-low-borrow-limit-hint", {
                                        defaultValue: "Lowering leverage does not necessarily mean a decrease in borrow limit."
                                    }), (0, a.jsx)(l.A, {
                                        sx: {
                                            fontSize: "14px",
                                            display: "inline"
                                        },
                                        target: "_blank",
                                        href: "/margin-data",
                                        children: Se("trd-learn-more")
                                    })]
                                })
                            }) : (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsxs)(s.A, {
                                    sx: {
                                        fontSize: "14px",
                                        mt: "16px",
                                        color: "t.third",
                                        mb: "90px"
                                    },
                                    children: [Se("trd-turning-on-isolated-limit-switch", {
                                        defaultValue: "Once turning on the leverage ratio adjustment switch, the borrow limit will be based on the upper limit corresponding to the leverage you choose."
                                    }), (0, a.jsx)(l.A, {
                                        sx: {
                                            fontSize: "14px",
                                            display: "inline"
                                        },
                                        target: "_blank",
                                        href: "/support/faq/c19042bab23f44d090fc158ab0ee0943",
                                        children: Se("trd-learn-more")
                                    })]
                                })
                            })
                        },
                        De = (0, a.jsxs)(a.Fragment, {
                            children: [(0, a.jsxs)(s.A, {
                                sx: {
                                    mt: "28px",
                                    fontSize: "14px",
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center",
                                    justifyContent: "space-between"
                                },
                                children: [(0, a.jsx)(c.A, {
                                    children: Se("trd-Max-Leverage", {
                                        defaultValue: "Max Leverage"
                                    })
                                }), (0, a.jsxs)(c.A, {
                                    sx: {
                                        fontSize: "12px",
                                        color: "t.third"
                                    },
                                    children: [Se("trd-adjust-current", {
                                        defaultValue: "Current"
                                    }), ":", U ? "".concat(U, "x") : "".concat(_)]
                                })]
                            }), (0, a.jsx)(s.A, {
                                sx: {
                                    mt: "4px"
                                },
                                children: (0, a.jsx)(m.A, {
                                    variant: "outline",
                                    boxProps: {
                                        height: "48px",
                                        width: "100%"
                                    },
                                    value: Z,
                                    error: W,
                                    errorText: G,
                                    onChange: function(e) {
                                        J("".concat(e.currentTarget.value).replace(/^()*(\d+)\.(\d\d).*$/, "$1$2.$3")), Ne.indexOf(Number(e.currentTarget.value)) < 0 ? X(1) : X(Number(e.currentTarget.value))
                                    },
                                    step: .01,
                                    type: "number",
                                    min: .01,
                                    disabled: !ue,
                                    onKeyDown: function(e) {
                                        69 !== e.keyCode && 189 !== e.keyCode && 187 !== e.keyCode || e.preventDefault()
                                    }
                                })
                            }), (0, a.jsx)(s.A, {
                                sx: {
                                    mt: "16px",
                                    ".bn-slider-container": {
                                        "> label.bn-slider-radio-tooltip": {
                                            bg: "popupBg",
                                            color: "t.secondary",
                                            fontSize: "14px"
                                        },
                                        ".bn-slider-stepper": {
                                            bg: "popupBg"
                                        },
                                        ".bn-slider-progress-bar, .bn-slider-progress-stepper": {
                                            bg: "t.secondary"
                                        },
                                        ".bn-slider-radio-button": {
                                            borderColor: "t.secondary"
                                        },
                                        ".bn-slider-progress-stepper, .bn-slider-stepper:hover, .bn-slider-radio-button:after": {
                                            borderColor: "popupBg"
                                        }
                                    }
                                },
                                children: (0, a.jsx)(f.A, {
                                    unit: "X",
                                    sx: {
                                        paddingX: "0px"
                                    },
                                    progress: Y,
                                    color: "slider.progress",
                                    range: Be,
                                    onChange: function(e) {
                                        if (Ne.indexOf(e) < 0) {
                                            var t = Ne.find((function(t) {
                                                return t > e
                                            })) || 1;
                                            X(t), J(t)
                                        } else X(e), J(e)
                                    },
                                    steppers: Ne,
                                    showScales: !0,
                                    disabled: !ue
                                })
                            }), (0, a.jsxs)(s.A, {
                                sx: {
                                    mt: "28px",
                                    fontSize: "14px"
                                },
                                children: [(0, a.jsx)(c.A, {
                                    sx: {
                                        color: "t.third"
                                    },
                                    children: Se("trd-max-borrowing-current", {
                                        defaultValue: "Max borrowing at current leverage:"
                                    })
                                }), (0, a.jsxs)(c.A, {
                                    sx: {
                                        fontWeight: "500",
                                        mt: "2px"
                                    },
                                    children: ["".concat(Me, " ").concat(O), " ", Se("trd-orderForm-or"), " ", "".concat(_e, " ").concat(R)]
                                })]
                            })]
                        });
                    return (0, a.jsxs)(d.A, {
                        sx: {
                            flexDirection: "column",
                            paddingX: "24px",
                            color: "t.primary"
                        },
                        children: [(0, a.jsx)(c.A, {
                            sx: {
                                fontSize: "20px",
                                lineHeight: "28px",
                                fontWeight: "500",
                                padding: "20px 0px",
                                color: "t.primary"
                            },
                            children: Se("trd-adjust-max-leverage", {
                                defaultValue: "Adjust Max Leverage"
                            })
                        }), (0, a.jsxs)(s.A, {
                            sx: {
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                fontSize: "16px",
                                justifyContent: "space-between"
                            },
                            children: [(0, a.jsxs)(s.A, {
                                sx: {
                                    display: "flex",
                                    flexDirection: "row",
                                    alignItems: "center"
                                },
                                children: [(0, a.jsx)(u.A, {
                                    width: 24,
                                    src: Ie,
                                    sx: {
                                        zIndex: "2",
                                        marginRight: "-8px"
                                    }
                                }), (0, a.jsx)(u.A, {
                                    width: 24,
                                    src: we
                                }), (0, a.jsx)(c.A, {
                                    sx: {
                                        marginX: "10px",
                                        fontWeight: "500"
                                    },
                                    children: "".concat(O, "/").concat(R)
                                }), (0, a.jsx)(A.A, {
                                    sx: {
                                        fontSize: "14px",
                                        padding: "2px 6px",
                                        height: "auto"
                                    },
                                    children: Se("trd-Position-Isolated")
                                })]
                            }), (0, a.jsx)(p.A, {
                                size: 24,
                                mr: "10px",
                                checked: ue,
                                onChange: function() {
                                    return pe(!ue)
                                }
                            })]
                        }), F ? (0, a.jsx)(s.A, {
                            sx: {
                                height: "48px"
                            },
                            children: (0, a.jsx)(h.A, {
                                inner: !0
                            })
                        }) : ue && De, (0, a.jsx)(Re, {}), (0, a.jsxs)(s.A, {
                            sx: {
                                display: "flex",
                                justifyContent: ["space-between", "flex-end"],
                                mt: "30px",
                                mb: "24px"
                            },
                            children: [(0, a.jsx)(x.A, {
                                sx: {
                                    height: "40px",
                                    width: ["160px", "120px"],
                                    mr: "8px"
                                },
                                colorStyle: "secondary",
                                onClick: D,
                                children: Se("trd-dialog-cancel")
                            }), (0, a.jsx)(x.A, {
                                disabled: W || F || ae,
                                sx: {
                                    height: "40px",
                                    width: ["160px", "120px"]
                                },
                                colorStyle: "default",
                                onClick: function() {
                                    ie(!0), U || ue ? (0, I.jZ)({
                                        symbol: "".concat(O).concat(R),
                                        leverage: ue ? Z : 0
                                    }).then((function() {
                                        ie(!1), Oe.margin.queryCurrentMarginRadioBySymbol("".concat(O).concat(R)), D()
                                    })).catch((function() {
                                        ie(!1)
                                    })) : D()
                                },
                                children: Se("trd-dialog-confirm")
                            })]
                        })]
                    })
                },
                O = function(e) {
                    var t = e.defaultLevel,
                        r = e.baseAsset,
                        n = e.quoteAsset,
                        o = (e.isMobile, (0, v.aF)({
                            sx: {
                                padding: 0,
                                minWidth: ["initial", "488px"],
                                maxWidth: ["100%", "488px"],
                                maxHeight: ["100%"],
                                height: ["100vh", "initial"]
                            },
                            content: (0, a.jsx)(_, {
                                defaultLevel: t,
                                baseAsset: r,
                                quoteAsset: n,
                                close: function() {
                                    return o()
                                }
                            })
                        }).close)
                },
                R = function(e) {
                    var t = e.baseAsset,
                        r = e.quoteAsset,
                        n = e.step2Ref,
                        o = ((0, C.ok2)().getI18n, (0, g.d4)(B.makeIsolatedCurrentMarginRatio)),
                        s = (0, g.d4)(B.makeIsolatedCurrentMarginRatioStatus),
                        l = (0, N.N8)().marginBar,
                        c = (0, g.wA)(),
                        d = (0, C.QsY)().isMobile,
                        u = (0, C.x$o)();
                    return (0, i.useEffect)((function() {
                        t && r && c.margin.queryCurrentMarginRadioBySymbol("".concat(t).concat(r))
                    }), [t, r]), o || l ? (0, a.jsxs)("div", {
                        ref: n,
                        onClick: function() {
                            O({
                                defaultLevel: s && o || l,
                                baseAsset: t,
                                quoteAsset: r,
                                isMobile: d
                            }), (0, P.u4)("$WebClick", {
                                $element_id: "leverage",
                                module: "orderform",
                                layout: u
                            })
                        },
                        children: [s ? o : "".concat(l).split("x")[0], "x"]
                    }) : (0, a.jsx)(a.Fragment, {})
                }
        },
        ZGye: (e, t, r) => {
            r.d(t, {
                A: () => k
            });
            var n = r("mguP"),
                o = r("mXdx"),
                a = r("DTvD"),
                i = r.n(a),
                s = r("kcvK"),
                l = r("pPGf"),
                c = r("HvRD"),
                d = r("xqbL"),
                u = r.n(d),
                p = r("JaRM"),
                x = r("bQ69"),
                m = r("J+BU"),
                f = r("28Pr"),
                v = r("CAdv"),
                h = r("WHzC"),
                g = r("hAzz"),
                b = r("Dj9W"),
                y = r("61SC"),
                A = "algo_order",
                T = [
                    [m.W4.STOPLIMIT],
                    [m.W4.STOP_MARKET],
                    [m.W4.TRAILING_STOP],
                    [m.W4.OCO],
                    [A]
                ],
                j = [
                    [m.W4.STOPLIMIT],
                    [m.W4.STOP_MARKET],
                    [m.W4.TRAILING_STOP],
                    [m.W4.OCO]
                ],
                C = function(e) {
                    var t = e.type,
                        r = e.actived,
                        n = e.children,
                        a = e.handleClick;
                    return (0, o.jsx)("span", {
                        className: u()("trade-common-link", {
                            active: r
                        }),
                        onClick: function() {
                            return a(t)
                        },
                        style: {
                            display: "flex",
                            alignItems: "center",
                            fontWeight: 500,
                            fontSize: "14px",
                            color: r ? "var(--color-PrimaryText)" : "var(--color-TertiaryText)",
                            lineHeight: "16px",
                            whiteSpace: "nowrap"
                        },
                        children: n
                    })
                },
                S = function(e) {
                    var t = e.orderType,
                        r = e.onChange,
                        i = e.tradeType,
                        d = e.className,
                        u = e.layout,
                        S = e.customList,
                        k = void 0 === S ? [] : S,
                        I = e.subTypes,
                        w = (0, b.o)().getI18n,
                        B = (0, a.useMemo)((function() {
                            return I || ((0, g.V$)(i) ? j : T)
                        }), [I, i]),
                        N = B.some((function(e) {
                            return e[0] === t
                        })) ? t : m.W4.STOPLIMIT,
                        P = (0, a.useCallback)((function(e) {
                            (0, y.l)({
                                type: e
                            }), e !== A ? r(e) : window.open("/vip-portal/trading?ref=OTC-Algo", "_blank")
                        }), [r]),
                        M = (0, a.useCallback)((function() {
                            return (0, o.jsx)("div", {
                                style: {
                                    padding: "8px 0"
                                },
                                children: B.map((function(e) {
                                    var r = (0, n._)(e, 1)[0];
                                    return (0, o.jsx)(p.H, {
                                        onChange: function() {
                                            return P(r)
                                        },
                                        active: t === r,
                                        hasIcon: !0,
                                        value: r,
                                        children: w((0, h.u)(r))
                                    }, r)
                                }))
                            })
                        }), [t, B]),
                        _ = (0, a.useMemo)((function() {
                            return k.map((function(e, r) {
                                var n = e.value,
                                    a = e.i18nKey,
                                    i = e.dataTestId;
                                return (0, o.jsx)(C, {
                                    type: n,
                                    actived: t === n,
                                    handleClick: function() {
                                        return P(n)
                                    },
                                    "data-testid": i,
                                    children: w(a)
                                }, r)
                            }))
                        }), [t, P, k, w]),
                        O = (0, o.jsxs)(o.Fragment, {
                            children: [(0, o.jsx)(C, {
                                type: m.W4.LIMIT,
                                actived: t === m.W4.LIMIT,
                                handleClick: function() {
                                    return P(m.W4.LIMIT)
                                },
                                "data-testid": "LimitType",
                                children: w("LIMIT")
                            }), (0, o.jsx)(C, {
                                type: m.W4.MARKET,
                                actived: t === m.W4.MARKET,
                                handleClick: function() {
                                    return P(m.W4.MARKET)
                                },
                                "data-testid": "MarketType",
                                children: w("MARKET")
                            }), (0, o.jsx)(p.A, {
                                trigger: "hover",
                                placement: "bottom",
                                arrow: !1,
                                renderOverlay: M,
                                children: (0, o.jsxs)(C, {
                                    type: N,
                                    actived: Boolean(B.find((function(e) {
                                        return (0, n._)(e, 1)[0] === t
                                    }))),
                                    handleClick: function() {
                                        return P(N)
                                    },
                                    "data-testid": "".concat(v.de[N]),
                                    children: [w((0, h.u)(N)), (0, o.jsx)(l.A, {
                                        className: "trade-common-icon"
                                    })]
                                })
                            })]
                        });
                    return (0, o.jsxs)("div", {
                        className: d,
                        style: {
                            display: "flex",
                            alignItems: "center",
                            fontSize: "14px",
                            lineHeight: "22px",
                            gap: u !== x.ug ? "16px" : "12px",
                            height: "38px"
                        },
                        children: [(null === k || void 0 === k ? void 0 : k.length) > 0 ? _ : O, (0, o.jsx)("div", {
                            style: {
                                display: "flex",
                                flex: "1",
                                alignItems: "center",
                                justifyContent: u !== x.ug ? "flex-start" : "flex-end"
                            },
                            children: (0, o.jsx)(s.A, {
                                offset: 4,
                                placement: "bottom-end",
                                variant: "gray",
                                useReactPopper: !0,
                                arrow: !0,
                                tooltips: (0, o.jsx)(f.Y6, {
                                    getI18n: w,
                                    tradeType: i,
                                    orderType: t
                                }),
                                children: (0, o.jsx)(c.A, {
                                    className: "trade-common-icon hover-help",
                                    style: {
                                        width: "16px",
                                        height: "16px"
                                    }
                                })
                            })
                        })]
                    })
                };
            const k = i().memo(S)
        },
        z4eh: (e, t, r) => {
            r.d(t, {
                A: () => N
            });
            var n, o = r("hrAD"),
                a = r("qoEP"),
                i = r("mguP"),
                s = r("mXdx"),
                l = r("DTvD"),
                c = r.n(l),
                d = r("MD8j"),
                u = r("r2Gn"),
                p = r("BiCW"),
                x = r("Vur3"),
                m = r("wtFP"),
                f = r("lW1t"),
                v = r("C7Nc"),
                h = r("Qhol"),
                g = r("iKvg"),
                b = r("bQ69"),
                y = {
                    spot: {
                        label: "spot",
                        key: b.Gr.SPOT,
                        testId: "spotTab"
                    },
                    cross: {
                        label: b.Gr.CROSS,
                        key: b.Gr.CROSS,
                        testId: "crossTab"
                    },
                    isolated: {
                        label: b.Gr.ISOLATED,
                        key: b.Gr.ISOLATED,
                        testId: "IsolatedTab"
                    },
                    grid: {
                        label: "grid",
                        key: b.Gr.GRID,
                        testId: "gridTab"
                    },
                    spotPublic: {
                        label: "spotPublic",
                        key: "spotPublic",
                        testId: "spotTab"
                    },
                    spotPrivate: {
                        label: "spotPrivate",
                        key: "spotPrivate",
                        testId: "spotPrivateTab"
                    }
                },
                A = (n = {}, (0, g._)(n, b.Gr.CROSS, ["cross"]), (0, g._)(n, b.Gr.ISOLATED, ["isolated"]), (0, g._)(n, "BOTH", ["cross", "isolated"]), n),
                T = r("kcvK"),
                j = r("hAzz"),
                C = r("5s+a"),
                S = function(e) {
                    var t = e.itemKey,
                        r = e.testId,
                        n = e.gridRunning,
                        o = e.labelKey,
                        a = e.currentSymbol,
                        i = (0, h.ok2)().getI18n,
                        l = (0, j.H3)(t),
                        c = n && (0, j.H3)(t),
                        d = (0, C.Zf)(a),
                        u = (0, h.lw3)(),
                        p = d && "spot" === o && !u,
                        x = (0, s.jsx)("div", {
                            className: "text",
                            children: i(p ? "trd-tag-pre-market" : "trd-layout-".concat(o))
                        });
                    return (0, s.jsx)("div", {
                        className: "item",
                        "data-id": r,
                        children: l ? (0, s.jsx)(s.Fragment, {
                            children: n ? (0, s.jsx)(T.A, {
                                offset: 4,
                                variant: "gray",
                                arrow: !0,
                                tooltips: i("trd-layout-grid-runtip"),
                                useReactPopper: !0,
                                children: (0, s.jsx)("div", {
                                    className: "text ".concat(c ? "running" : ""),
                                    children: i("trd-layout-".concat(o))
                                })
                            }) : x
                        }) : x
                    })
                };
            const k = c().memo(S);
            var I = (0, p.A)((function() {
                    return Promise.all([r.e(995), r.e(9431), r.e(2963), r.e(4076), r.e(5322), r.e(2025), r.e(6137)]).then(r.bind(r, "HvDb"))
                }), {
                    webpack: function() {
                        return ["HvDb"]
                    }
                }),
                w = (0, p.A)((function() {
                    return Promise.all([r.e(995), r.e(9431), r.e(2963), r.e(4076), r.e(5322), r.e(3424), r.e(2025), r.e(5092), r.e(8747)]).then(r.bind(r, "kFsa"))
                }), {
                    webpack: function() {
                        return ["kFsa"]
                    }
                }),
                B = (0, l.memo)((function(e) {
                    var t = e.draggable,
                        r = void 0 !== t && t,
                        n = e.mobile,
                        c = void 0 !== n && n,
                        p = e.extra,
                        g = void 0 === p || p,
                        b = e.currentSymbol,
                        T = e.currentTabs,
                        j = e.hideMask,
                        C = (0, d.wA)(),
                        S = (0, i._)((0, h.Grl)(), 2),
                        B = S[0],
                        N = S[1],
                        P = (0, h.q$z)(),
                        M = ((0, v.cA)().symbolsMap[b] || {}).type,
                        _ = (0, h.d3A)(b),
                        O = (0, d.d4)(f.makeGridRunning),
                        R = (0, d.d4)((function(e) {
                            return e.tradecl.currentMode
                        })),
                        D = function() {
                            var e = (0, h.okI)();
                            return (0, l.useCallback)((function(t) {
                                var r = x.stringify((0, a._)((0, o._)({}, e), {
                                    isPrivate: "spotPrivate" === t ? "true" : "false"
                                }));
                                window.location.href = "".concat(window.location.pathname, "?").concat(r)
                            }), [e])
                        }(),
                        L = (0, l.useMemo)((function() {
                            return function(e) {
                                var t = e.type,
                                    r = e.isOnlySupportSpot,
                                    n = void 0 !== r && r,
                                    o = e.isSupportGrid,
                                    a = void 0 === o || o,
                                    i = e.currentTabs;
                                if (i) return i.map((function(e) {
                                    return y[e]
                                }));
                                var s = ["spot"];
                                return !n && A[t] && (s = s.concat(A[t])), a && s.push("grid"), s.map((function(e) {
                                    return y[e]
                                }))
                            }({
                                type: M,
                                isOnlySupportSpot: P,
                                isSupportGrid: _,
                                currentTabs: T
                            })
                        }), [M, P, _, T]),
                        F = (0, l.useCallback)((function(e) {
                            var t = L[e];
                            (0, m.u4)("$WebClick", {
                                eventName: "spot_tradetab",
                                $element_id: t.testId,
                                source: "orderform_tab"
                            }), ["spotPublic", "spotPrivate"].includes(t.key) ? D(t.key) : (N(t.key), C.userProfile.save({
                                key: "tradeType",
                                value: t.key
                            }))
                        }), [N, L, C.userProfile, D]),
                        q = (0, l.useMemo)((function() {
                            return L.findIndex((function(e) {
                                return e.key === B || e.key === R
                            }))
                        }), [B, L, R]);
                    return (0, s.jsxs)("div", {
                        className: "orderform-tradetype-wrap old-bg-arrow border-0 !border-b-[1px] border-solid border-Line ".concat(r ? "draggableHandle" : ""),
                        children: [(0, s.jsx)(u.A, {
                            className: "trade-tabbed-card left-wrap trade-type-switch",
                            variant: "default",
                            onChange: F,
                            selectedIndex: q,
                            showSlideArrow: !0,
                            showSlideMasks: !0,
                            children: L.map((function(e, t) {
                                return (0, s.jsx)(u.A.TabPane, {
                                    tabNode: (0, s.jsx)(k, {
                                        itemKey: e.key,
                                        testId: e.testId,
                                        labelKey: e.label,
                                        gridRunning: O,
                                        currentSymbol: b
                                    }, e.testId)
                                }, t)
                            }))
                        }), c ? (0, s.jsx)("div", {
                            className: "right-wrap",
                            children: (0, s.jsx)(I, {
                                hideMask: j
                            })
                        }) : g && (0, s.jsx)("div", {
                            className: "right-wrap",
                            children: (0, s.jsx)(w, {
                                marginButtonClickBehavior: "modal"
                            })
                        })]
                    })
                }));
            const N = c().memo(B)
        },
        xDV7: (e, t, r) => {
            r.d(t, {
                A: () => de
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("2IQ4"),
                s = r("EYCY"),
                l = r("HK/T"),
                c = r("chLO"),
                d = r("Qhol"),
                u = r("iKvg"),
                p = r("hrAD"),
                x = r("qoEP"),
                m = r("mguP"),
                f = r("nzy6"),
                v = function(e, t) {
                    var r = (0, o.useState)({}),
                        n = r[0],
                        a = r[1];
                    return (0, o.useEffect)((function() {
                        ! function(e, t, r) {
                            Promise.all([(0, f.Wo)()]).then((function(n) {
                                (0, m._)(n, 1)[0].forEach((function(n) {
                                    var o;
                                    n.base.assetName !== e || n.quote.assetName !== t || r((o = {}, (0, u._)(o, e, (0, x._)((0, p._)({}, n.base), {
                                        transferBtc: n.base.netAssetOfBtc,
                                        marginLevel: n.marginLevel
                                    })), (0, u._)(o, t, (0, x._)((0, p._)({}, n.quote), {
                                        transferBtc: n.quote.netAssetOfBtc,
                                        marginLevel: n.marginLevel
                                    })), o))
                                }))
                            }))
                        }(e, t, a)
                    }), [e, t]), n
                },
                h = r("S+0I"),
                g = r("jbFV"),
                b = r.n(g),
                y = r("d6PB"),
                A = r("GIr8"),
                T = r("zX7I"),
                j = r("k8Ym"),
                C = r("Brq1"),
                S = r("GqbV"),
                k = r("tM9B"),
                I = r("ttBN"),
                w = r("TVsB"),
                B = function(e) {
                    if (!e) return "";
                    var t = Number(e.free || 0) + Number(e.locked || 0) + Number(e.freeze || 0) + Number(e.withdrawing || 0);
                    return (0, k.Ww)(t)
                },
                N = function(e) {
                    return e ? (0, k.tY)(e.borrowed, e.interest).toFixed(8) : ""
                },
                P = r("cSeX"),
                M = r("fPTZ"),
                _ = r("boXg"),
                O = r("0TaA"),
                R = r("Vhyo"),
                D = r("nQqE"),
                L = r("/APJ"),
                F = function(e) {
                    var t = e.value,
                        r = e.onChange,
                        a = void 0 === r ? function() {} : r,
                        i = e.data,
                        s = e.base,
                        l = e.quote,
                        c = (0, d.ok2)().getI18n,
                        u = (0, o.useCallback)((function(e) {
                            return "isolated" === e ? "".concat(c("trd-isotabole-isolated"), " \xa0\xa0 ").concat(s, "/").concat(l) : c("trd-isotabole-".concat(e))
                        }), [c, s, l]);
                    return 1 === i.length ? (0, n.jsx)(A.A, {
                        sx: {
                            width: "100%",
                            height: "48px",
                            bg: "bg3",
                            color: "t.primary",
                            px: "16px",
                            borderRadius: "4px",
                            alignItems: "center",
                            textAlign: "left"
                        },
                        children: u(t)
                    }) : (0, n.jsx)(D.A, {
                        hideSearch: !0,
                        size: "lg",
                        value: t,
                        onChange: a,
                        renderValue: u,
                        limit: 5,
                        sx: {
                            flex: 1,
                            border: "none",
                            li: {
                                opacity: 1
                            }
                        },
                        children: i.map((function(e) {
                            var r = e === t;
                            return (0, n.jsx)(L.c, {
                                value: e,
                                title: u(e),
                                children: (0, n.jsx)(R.A, {
                                    sx: {
                                        color: r ? "t.yellow" : "t.primary"
                                    },
                                    children: u(e)
                                })
                            }, e)
                        }))
                    })
                };
            const q = a().memo(F);
            var E = {
                    width: "100%",
                    color: "t.third",
                    padding: "0 11px",
                    alignItems: "center"
                },
                W = {
                    ml: "8px",
                    minWidth: "40px"
                },
                z = {
                    ISOLATED_MARGIN: M.A,
                    MARGIN: _.A,
                    MAIN: O.A
                },
                U = function(e) {
                    var t = z[e] || O.A;
                    return (0, n.jsx)(t, {
                        size: 24
                    })
                },
                V = function(e) {
                    var t = e.base,
                        r = e.quote,
                        o = e.from,
                        a = e.to,
                        s = e.allFrom,
                        l = e.allTo,
                        c = e.handleFromChange,
                        u = e.handleToChange,
                        p = e.type,
                        x = (0, d.ok2)().getI18n;
                    return (0, n.jsx)(A.A, {
                        sx: {
                            marginTop: "24px"
                        },
                        children: (0, n.jsx)(i.A, {
                            sx: {
                                flex: 1,
                                borderRadius: "4px",
                                bg: "bg3"
                            },
                            children: "add" === p ? (0, n.jsxs)(A.A, {
                                sx: E,
                                children: [U(o), (0, n.jsx)(P.A, {
                                    sx: W,
                                    children: x("trd-dialog-from")
                                }), (0, n.jsx)(q, {
                                    base: t,
                                    quote: r,
                                    value: o,
                                    data: s,
                                    onChange: c
                                })]
                            }) : (0, n.jsxs)(A.A, {
                                sx: E,
                                children: [U(a), (0, n.jsx)(P.A, {
                                    sx: W,
                                    children: x("trd-dialog-to")
                                }), (0, n.jsx)(q, {
                                    base: t,
                                    quote: r,
                                    value: a,
                                    data: l,
                                    onChange: u
                                })]
                            })
                        })
                    })
                };
            const H = a().memo(V);
            var G = r("Djui"),
                K = {
                    width: "49%",
                    padding: "12px 16px",
                    border: "1px solid",
                    borderRadius: "4px",
                    borderColor: "bg3",
                    bg: "bg3",
                    cursor: "pointer",
                    "&.selected": {
                        borderColor: "primary"
                    }
                },
                Q = {
                    color: "t.third",
                    fontSize: "12px",
                    lineHeight: "12px"
                },
                Y = function(e) {
                    var t = e.coin,
                        r = e.amount,
                        n = e.btcFiatPrice,
                        o = function(e, t, r) {
                            if ("BTC" === e) return t;
                            var n = new w.A(0),
                                o = new w.A(t),
                                a = r["".concat("BTC").concat(e)];
                            if (a) n = o.dividedBy(a);
                            else {
                                var i = r["".concat("BTC").concat(e)];
                                i && (n = o.times(i))
                            }
                            return n.toFixed(8)
                        }(t, r, e.priceIndexMap);
                    return o ? (0, k.lw)(o, n).toFixed(2) : ""
                },
                X = function(e) {
                    var t = e.value,
                        r = e.onChange,
                        o = e.data,
                        a = e.fiatSymbol,
                        s = e.fiatPriceNumber,
                        l = (0, I.T)();
                    return (0, n.jsx)(A.A, {
                        justifyContent: "space-between",
                        children: o.map((function(e) {
                            var o = e.logoUrl,
                                c = e.coin,
                                d = e.props;
                            return (0, n.jsxs)(A.A, {
                                sx: K,
                                className: t === c ? "selected" : "",
                                onClick: function() {
                                    return r && r(c)
                                },
                                children: [(0, n.jsx)(i.A, {
                                    children: !!o && (0, n.jsx)(G.A, {
                                        variant: "avatar",
                                        src: o,
                                        sx: {
                                            mr: "xs",
                                            flex: "none",
                                            width: "32px",
                                            height: "32px",
                                            border: "1px solid",
                                            borderColor: "lines.light"
                                        }
                                    })
                                }), (0, n.jsxs)(i.A, {
                                    sx: {
                                        textAlign: "left"
                                    },
                                    children: [(0, n.jsx)(A.A, {
                                        alignItems: "center",
                                        children: (0, n.jsx)(i.A, {
                                            mr: "2px",
                                            children: c
                                        })
                                    }), (0, n.jsx)(i.A, {
                                        fontSize: "16px",
                                        children: B(d) || "0.00"
                                    }), !!Number(d.free) && (0, n.jsxs)(i.A, {
                                        sx: Q,
                                        children: [a, Y({
                                            coin: c,
                                            amount: B(d),
                                            btcFiatPrice: s,
                                            priceIndexMap: l
                                        })]
                                    })]
                                })]
                            }, c)
                        }))
                    })
                };
            const $ = a().memo(X);
            var Z = r("HEid"),
                J = r("5mL0"),
                ee = r("HuzR"),
                te = r("lSUd"),
                re = function(e) {
                    var t, r = e.allBalances,
                        a = e.coin,
                        i = e.from,
                        s = e.base,
                        l = e.quote,
                        c = e.maxAvailable,
                        u = e.setMaxAvailable,
                        p = e.amount,
                        x = e.setAmount,
                        m = e.setAmountError,
                        f = (0, d.ok2)().getI18n,
                        v = null === (t = r.spotfiat[a]) || void 0 === t ? void 0 : t.free,
                        g = (0, o.useCallback)((function(e) {
                            var t, r = (null === (t = e.target.value.match(/[0]?(\d){1,12}(?:\.\d{0,8}){0,1}/)) || void 0 === t ? void 0 : t[0]) || "";
                            x(!r || /\./.test(r) ? r : +r)
                        }), []);
                    (0, o.useEffect)((function() {
                        function e() {
                            return (e = (0, h._)(b().mark((function e() {
                                return b().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if ("cross" !== i) {
                                                e.next = 4;
                                                break
                                            }
                                            return e.next = 3, (0, ee.qz)({
                                                asset: a
                                            }, {
                                                excludeErrorCode: ["051013"]
                                            });
                                        case 3:
                                        case 7:
                                            return e.abrupt("return", e.sent);
                                        case 4:
                                            if ("isolated" !== i) {
                                                e.next = 8;
                                                break
                                            }
                                            return e.next = 7, (0, te.R0)({
                                                asset: a,
                                                symbol: "".concat(s).concat(l)
                                            });
                                        case 8:
                                            return e.abrupt("return", v);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })))).apply(this, arguments)
                        }(function() {
                            return e.apply(this, arguments)
                        })().then((function(e) {
                            u(e)
                        }))
                    }), [i, s, a, l, v]);
                    var y = (0, o.useMemo)((function() {
                            return +p > +c ? f("trd-position-margin-amount-error") : ""
                        }), [p, c, f]),
                        T = (0, o.useCallback)((function() {
                            x((0, k.um)(c))
                        }), [c]);
                    return (0, o.useEffect)((function() {
                        m(!!y)
                    }), [y]), (0, n.jsx)(Z.A, {
                        variant: "filled",
                        value: p,
                        defaultValue: p,
                        boxProps: {
                            fontSize: 1,
                            width: "100%",
                            height: "48px",
                            marginTop: "4px"
                        },
                        onChange: g,
                        error: !!y,
                        errorText: y,
                        autoComplete: "off",
                        suffix: (0, n.jsxs)(A.A, {
                            mr: "xs",
                            alignItems: "center",
                            children: [!!p && (0, n.jsx)(J.A, {
                                size: 16,
                                color: "t.placeholder",
                                sx: {
                                    cursor: "pointer"
                                },
                                onClick: function() {
                                    return x("")
                                }
                            }), (0, n.jsx)(R.A, {
                                onClick: T,
                                sx: {
                                    fontSize: "16px",
                                    color: "t.yellow",
                                    lineHeight: "24px",
                                    cursor: "pointer",
                                    ml: "xs"
                                },
                                children: f("trd-Position-Max")
                            })]
                        })
                    })
                };
            const ne = a().memo(re);
            var oe = function() {
                    return (0, n.jsx)(y.A, {
                        sx: {
                            height: 18,
                            width: 20
                        }
                    })
                },
                ae = function(e) {
                    return "isolated" === e ? ["isolated"] : ["spotfiat", "cross"]
                },
                ie = {
                    spotfiat: "MAIN",
                    cross: "MARGIN",
                    isolated: "ISOLATED_MARGIN"
                },
                se = function(e) {
                    var t, r = e.type,
                        a = e.base,
                        s = e.quote,
                        l = e.from,
                        c = e.to,
                        u = e.coin,
                        x = e.setCoin,
                        m = e.accountType,
                        f = e.setAccountType,
                        v = e.allBalances,
                        g = e.logoMap,
                        y = e.currencySymbol,
                        w = e.fiatPriceNumber,
                        P = e.onClose,
                        M = (0, d.ok2)().getI18n,
                        _ = (0, o.useState)("0"),
                        O = _[0],
                        R = _[1],
                        D = (0, o.useState)(""),
                        L = D[0],
                        F = D[1],
                        q = (0, o.useState)(!0),
                        E = q[0],
                        W = q[1],
                        z = (0, o.useState)(!1),
                        U = z[0],
                        V = z[1],
                        G = !+L || !!E || U,
                        K = (0, I.T)(),
                        Q = v[l],
                        Y = v.isolated,
                        X = (0, o.useMemo)((function() {
                            return "isolated" === l ? {
                                handleToChange: f
                            } : {
                                handleFromChange: f
                            }
                        }), [l, f]),
                        Z = (0, o.useMemo)((function() {
                            return [{
                                coin: a,
                                logoUrl: g[a],
                                props: Q[a] || {}
                            }, {
                                coin: s,
                                logoUrl: g[s],
                                props: Q[s] || {}
                            }]
                        }), [Q, a, s, g]);
                    (0, o.useEffect)((function() {
                        F("")
                    }), [u, m]);
                    var J = (0, o.useMemo)((function() {
                            if (E) return "-";
                            var e = K["".concat(a).concat(s)],
                                t = +N(Y[a]) * e + +N(Y[s]);
                            if (!+t) return "999";
                            var n = +B(Y[a]),
                                o = +B(Y[s]),
                                i = u === a ? +L * e : +L,
                                l = n * e + o,
                                c = "remove" !== r ? (0, k.tY)(l, i) : (0, k.Rd)(l, i);
                            return Math.min(+(0, k.k3)(c, t).toFixed(2), 999)
                        }), [Y, L, E, r, a, s]),
                        ee = (0, o.useCallback)((0, h._)(b().mark((function e() {
                            var t, r;
                            return b().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return t = {
                                            asset: u,
                                            amount: L,
                                            symbol: "".concat(a).concat(s),
                                            kindType: [ie[l], ie[c]].join("_")
                                        }, e.prev = 1, V(!0), e.next = 5, (0, S.DJ)(t, !0);
                                    case 5:
                                        return r = e.sent, r.success && (F(""), P()), V(!1), e.abrupt("return");
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(1), V(!1);
                                    case 15:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 12]
                            ])
                        }))), [u, L, a, s, l, c]);
                    return (0, n.jsxs)(i.A, {
                        children: [(0, n.jsx)(H, (0, p._)({
                            base: a,
                            quote: s,
                            from: l,
                            to: c,
                            allFrom: ae(l),
                            allTo: ae(c),
                            type: r
                        }, X)), (0, n.jsxs)(A.A, {
                            sx: {
                                color: "t.secondary",
                                fontSize: "14px",
                                margin: "24px 0 4px",
                                justifyContent: "space-between",
                                alignItems: "center"
                            },
                            children: [(0, n.jsx)(i.A, {
                                children: M("trd-Position-amount")
                            }), (0, n.jsxs)(A.A, {
                                children: [(0, n.jsxs)(i.A, {
                                    color: "t.primary",
                                    mr: "4px",
                                    children: [O, " ", u]
                                }), M("trd-dialog-available")]
                            })]
                        }), (0, n.jsx)($, {
                            value: u,
                            onChange: x,
                            data: Z,
                            fiatSymbol: y,
                            fiatPriceNumber: w
                        }), (0, n.jsx)(ne, {
                            base: a,
                            quote: s,
                            from: l,
                            coin: u,
                            amount: L,
                            setAmount: F,
                            allBalances: v,
                            maxAvailable: O,
                            setMaxAvailable: R,
                            setAmountError: W
                        }), (0, n.jsxs)(A.A, {
                            sx: {
                                fontSize: "14px",
                                justifyContent: "space-between",
                                marginTop: "24px",
                                alignItems: "center"
                            },
                            children: [(0, n.jsx)(i.A, {
                                color: "t.third",
                                children: M("trd-position-margin-levelchange")
                            }), (0, n.jsx)(A.A, {
                                alignItems: "center",
                                children: E || !+L ? (0, n.jsx)(i.A, {
                                    children: "-"
                                }) : (0, n.jsxs)(n.Fragment, {
                                    children: [(0, n.jsx)(i.A, {
                                        color: "t.secondary",
                                        children: (+(null === (t = Y[u]) || void 0 === t ? void 0 : t.marginLevel)).toFixed(2)
                                    }), (0, n.jsx)(j.A, {
                                        size: 14,
                                        color: "t.third"
                                    }), (0, n.jsx)(i.A, {
                                        color: "t.primary",
                                        children: +J
                                    })]
                                })
                            })]
                        }), "remove" === r && (0, n.jsx)(i.A, {
                            sx: {
                                fontSize: "14px",
                                color: "t.third",
                                marginTop: "8px",
                                textAlign: "left"
                            },
                            children: M("trd-position-margin-remove-tips")
                        }), (0, n.jsx)(C.R, {
                            sx: {
                                bg: "transparent"
                            },
                            children: (0, n.jsx)(A.A, {
                                justifyContent: "flex-end",
                                children: (0, n.jsx)(T.A, {
                                    variant: "default",
                                    colorStyle: "flatprimary",
                                    sz: "l",
                                    onClick: ee,
                                    disabled: G,
                                    height: 40,
                                    sx: {
                                        width: "100%",
                                        maxWidth: ["100%", "180px;"]
                                    },
                                    children: U ? (0, n.jsx)(oe, {}) : M("trd-dialog-confirm")
                                })
                            })
                        })]
                    })
                };
            const le = a().memo(se);
            var ce = function(e) {
                var t = e.base,
                    r = e.quote,
                    a = e.getBtcPrice,
                    u = e.onClose,
                    p = e.initialCoin,
                    x = (0, d.ok2)().getI18n,
                    m = (0, o.useState)("spotfiat"),
                    f = m[0],
                    h = m[1],
                    g = (0, o.useState)(p || r),
                    b = g[0],
                    y = g[1],
                    A = (0, o.useState)("add"),
                    T = A[0],
                    j = A[1],
                    C = (0, c.X)({
                        needBalanceDetail: !0
                    }, {
                        needMargin: !0
                    }),
                    S = C.data,
                    k = C.logoMap,
                    I = a(),
                    w = I.symbol,
                    B = I.fiatPriceNumber,
                    N = v(t, r),
                    P = (0, o.useMemo)((function() {
                        if (!(null === S || void 0 === S ? void 0 : S.activate)) return [];
                        var e = null === S || void 0 === S ? void 0 : S.activate,
                            n = {},
                            o = {};
                        return e.forEach((function(e) {
                            var a = e.accountType,
                                i = e.assetBalances;
                            "MAIN" === a && i.forEach((function(e) {
                                var o = e.asset;
                                o !== t && o !== r || (n[o] = e)
                            })), "MARGIN" === a && i.forEach((function(e) {
                                var n = e.asset;
                                n !== t && n !== r || (o[n] = e)
                            }))
                        })), [n, o]
                    }), [S, t, r]),
                    M = P[0],
                    _ = P[1],
                    O = (0, o.useMemo)((function() {
                        return {
                            spotfiat: M,
                            cross: _,
                            isolated: N
                        }
                    }), [N, M, _]);
                return (0, n.jsx)(i.A, {
                    sx: {
                        marginTop: "-16px"
                    },
                    children: (0, n.jsxs)(s.A, {
                        variant: "standard",
                        defaultActiveKey: "add",
                        onChange: function(e) {
                            return j(e)
                        },
                        tabsSx: {
                            width: "calc(100% - 40px)",
                            boxShadow: "none"
                        },
                        children: [(0, n.jsx)(l.A, {
                            tab: x("trd-position-margin-add") || "",
                            tabKey: "add",
                            children: "add" === T ? (0, n.jsx)(le, {
                                type: "add",
                                base: t,
                                quote: r,
                                coin: b,
                                setCoin: y,
                                from: f,
                                to: "isolated",
                                accountType: f,
                                setAccountType: h,
                                allBalances: O,
                                logoMap: k,
                                currencySymbol: w,
                                fiatPriceNumber: B,
                                onClose: u
                            }) : (0, n.jsx)(n.Fragment, {})
                        }), (0, n.jsx)(l.A, {
                            tab: x("trd-position-margin-remove") || "",
                            tabKey: "remove",
                            children: "remove" === T ? (0, n.jsx)(le, {
                                type: "remove",
                                base: t,
                                quote: r,
                                to: f,
                                from: "isolated",
                                accountType: f,
                                setAccountType: h,
                                coin: b,
                                setCoin: y,
                                allBalances: O,
                                logoMap: k,
                                currencySymbol: w,
                                fiatPriceNumber: B,
                                onClose: u
                            }) : (0, n.jsx)(n.Fragment, {})
                        })]
                    })
                })
            };
            const de = a().memo(ce)
        },
        Rq2d: (e, t, r) => {
            r.d(t, {
                A: () => u
            });
            var n = r("mXdx"),
                o = r("DTvD"),
                a = r.n(o),
                i = r("2eJO"),
                s = r("sXI5"),
                l = r("Qhol"),
                c = r("xDV7"),
                d = function(e) {
                    var t = e.base,
                        r = e.quote,
                        a = e.className,
                        d = e.initialCoin,
                        u = (0, l.DPo)().isLight,
                        p = (0, l.MRb)(),
                        x = (0, o.useCallback)((function() {
                            var e = s.Ay.close;
                            s.Ay.confirm({
                                isLight: u,
                                sx: {
                                    width: ["100%", "488px"]
                                },
                                content: (0, n.jsx)(c.A, {
                                    base: t,
                                    quote: r,
                                    getBtcPrice: p,
                                    onClose: e,
                                    initialCoin: d
                                }),
                                hasFooter: !1
                            }).finally(s.Ay.close)
                        }), [t, r, u]);
                    return (0, n.jsx)(i.A, {
                        sx: {
                            cursor: "pointer",
                            color: "t.secondary",
                            fontSize: 16,
                            verticalAlign: "text-bottom"
                        },
                        className: a,
                        onClick: x
                    })
                };
            const u = a().memo(d)
        }
    }
]);