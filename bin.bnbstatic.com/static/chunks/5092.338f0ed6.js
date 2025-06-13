"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [5092], {
        "q1+c": (e, r, t) => {
            t.d(r, {
                $2: () => c,
                pY: () => s
            });
            var n = t("S+0I"),
                a = t("66mo"),
                o = t.n(a),
                i = t("VA12"),
                s = function() {
                    var e = (0, n._)(o().mark((function e(r) {
                        var t, n, a, s, c, l, d;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = !1, n = "", e.prev = 2, e.next = 5, (0, i.post)("/bapi/margin/v1/private/isolated-margin/manual-liquidation/".concat(r));
                                case 5:
                                    a = e.sent, s = a.success, c = a.message, t = s, n = c, e.next = 17;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(2), n = null !== (d = null === (l = e.t0.errorMsg) || void 0 === l ? void 0 : l.message) && void 0 !== d ? d : e.t0.message;
                                case 17:
                                    return e.abrupt("return", [t, n]);
                                case 18:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 12]
                        ])
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = (0, n._)(o().mark((function e() {
                        var r, t;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, i.get)("/bapi/margin/v1/public/isolated-margin/pair/coeff");
                                case 3:
                                    if (r = e.sent, t = r.data, !r.success) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", t);
                                case 8:
                                    e.next = 13;
                                    break;
                                case 10:
                                    return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", []);
                                case 13:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 10]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            ! function() {
                var e = (0, n._)(o().mark((function e(r) {
                    var t, n, a;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return t = [], e.prev = 1, e.next = 4, (0, i.get)("/bapi/margin/v1/private/isolated-margin/bar/ladder-call-bars?ratio=".concat(r));
                            case 4:
                                n = e.sent, a = n.data, n.success && (t = a), e.next = 13;
                                break;
                            case 10:
                                return e.prev = 10, e.t0 = e.catch(1), e.abrupt("return", []);
                            case 13:
                                return e.abrupt("return", t);
                            case 14:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [1, 10]
                    ])
                })))
            }()
        },
        DQdu: (e, r, t) => {
            t.d(r, {
                JB: () => c,
                JY: () => i,
                Ov: () => l,
                lO: () => s
            });
            var n = t("VA12"),
                a = "/bapi/margin",
                o = {
                    CROSS_LIST_ALL: "".concat(a, "/v1/friendly/margin/vip/spec/list-all"),
                    CROSS_MAX_BORROW: "".concat(a, "/v1/private/margin/max-borrow"),
                    ISOLATED_MAX_BORROW: "".concat(a, "/v1/public/isolated-margin/pair/vip-level")
                },
                i = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                    return (0, n.get)("".concat(o.CROSS_MAX_BORROW, "?assets=").concat(e.join(",")))
                },
                s = function() {
                    return (0, n.get)(o.CROSS_LIST_ALL)
                },
                c = function() {
                    return (0, n.get)(o.ISOLATED_MAX_BORROW)
                },
                l = function(e) {
                    return (0, n.get)("/bapi/margin/v2/public/asset-service/product/get-product-by-symbol?symbol=".concat(e))
                }
        },
        s5du: (e, r, t) => {
            t.d(r, {
                N: () => o
            });
            var n = t("tLIz"),
                a = t("0603"),
                o = function() {
                    var e = (0, a.s)(n.CY, [], {
                        value: !1,
                        loading: !0
                    });
                    return {
                        isLogged: e.value,
                        loading: e.loading
                    }
                }
        },
        kFsa: (e, r, t) => {
            t.r(r), t.d(r, {
                MarginCalc: () => j,
                default: () => F
            });
            var n = t("mXdx"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("Qhol"),
                s = t("hAzz"),
                c = t("bQ69"),
                l = t("JyEq"),
                d = t("wIZF"),
                u = t("qqbu");
            const v = function(e) {
                return o().createElement(u.A, (0, d.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7.972 5.238V3.029h-2.76v2.209H3v2.76h2.211v2.209h2.76V7.999h2.212V5.238H7.972zm9.388-.851l1.952 1.951L6.3 19.352 4.347 17.4 17.36 4.387zm-2.77 9.902h6.441v2.76H14.59v-2.76zm6.441 3.92H14.59v2.761h6.441v-2.76z",
                    fill: "currentColor"
                }))
            };
            var m = t("mguP");
            const h = function(e) {
                return o().createElement(u.A, (0, d.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M19.5 3h-14v18h14V3zM8 5.5h9v3.908H8V5.5zm6 6h3v7h-3v-7zm-6 0h4V14H8v-2.5zM8 16h4v2.5H8V16z",
                    fill: "currentColor"
                }))
            };
            var p = t("QtGm"),
                f = t("MD8j"),
                x = t("WOJV"),
                b = function(e) {
                    var r = e.children,
                        t = e.className,
                        o = (0, i.ok2)().getI18n,
                        s = (0, m._)((0, i.Grl)(), 1)[0],
                        l = (0, f.wA)(),
                        d = s === c.Gr.CROSS,
                        u = (0, f.d4)((function(e) {
                            return e.margin.showCalculator
                        })),
                        v = (0, a.useCallback)((function() {
                            var e = !u;
                            e && (l.margin.updateShowCalculator(e), (0, x.AO)({
                                tradeType: s
                            }))
                        }), [l, u, s]),
                        b = (0, a.useCallback)((function() {
                            l.margin.updateShowCalculator(!1)
                        }), [l]),
                        g = (0, m._)((0, i.sL)(), 1)[0];
                    return (0, n.jsxs)(n.Fragment, {
                        children: [r ? (0, n.jsx)("div", {
                            className: t,
                            onClick: v,
                            children: r
                        }) : (0, n.jsxs)("div", {
                            className: "flex title hover:opacity-80",
                            children: [(0, n.jsx)(h, {
                                className: "icon"
                            }), (0, n.jsx)("div", {
                                onClick: v,
                                children: o("trd-orderForm-calculator")
                            })]
                        }), u && (0, n.jsx)(p.t, {
                            zIndex: 1e4,
                            symbol: g,
                            isCross: d,
                            onClose: b
                        })]
                    })
                };
            const g = (0, a.memo)(b);

            function k(e) {
                var r = e.children;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsxs)(g, {
                        className: "text-[12px] flex items-center gap-[4px] cursor-pointer text-PrimaryText hover:opacity-80",
                        children: [(0, n.jsx)(v, {
                            className: "trade-common-icon hover-pointer",
                            style: {
                                width: "16px",
                                height: "16px"
                            }
                        }), r]
                    })
                })
            }
            const y = (0, a.memo)(k);
            var D = t("Y4+x");
            t("ylXK"), t("wgI+");
            var S = t("dFPA"),
                j = function(e) {
                    var r = e.layout,
                        t = e.clickBehavior,
                        a = (0, i.ok2)().getI18n;
                    return (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsx)(y, {
                            clickBehavior: t,
                            children: (0, n.jsx)("div", {
                                children: r !== c.a0 && a("trd-orderForm-calculator")
                            })
                        })
                    })
                },
                C = function(e) {
                    var r = e.marginButtonClickBehavior,
                        t = (0, i.nHk)(),
                        o = (0, a.useContext)(l.cb),
                        c = o.tradeType,
                        d = o.layout;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(S.A, {}), t && (0, n.jsx)(D.A, {}), (0, s.V$)(c) && (0, n.jsx)(j, {
                            clickBehavior: r,
                            layout: d
                        }), !1]
                    })
                };
            const F = o().memo(C)
        },
        dFPA: (e, r, t) => {
            t.d(r, {
                A: () => x
            });
            var n = t("hrAD"),
                a = t("mguP"),
                o = t("mXdx"),
                i = t("DTvD"),
                s = t.n(i),
                c = t("zHUU"),
                l = t("wIZF"),
                d = t("qqbu");
            const u = function(e) {
                return s().createElement(d.A, (0, l.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M14.412 3l1.37 2.374h2.845v2.844L21 9.588 19.608 12 21 14.412l-2.373 1.37v2.844h-2.845L14.412 21 12 19.608 9.588 21l-1.37-2.374H5.375v-2.843L3 14.412 4.392 12 3 9.588l2.375-1.37V5.373h2.843L9.588 3 12 4.392 14.412 3zM11 9.465a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm3.5 6.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm.857-6.263l-1.06-1.06-5.657 5.657 1.06 1.06 5.658-5.657z",
                    fill: "currentColor"
                }))
            };
            var v = t("Qhol"),
                m = t("Ykh1"),
                h = t("JyEq"),
                p = t("iH9S"),
                f = function(e) {
                    var r = e.style,
                        t = (0, i.useContext)(h.cb),
                        s = t.tradeType,
                        l = t.layout,
                        d = (0, a._)((0, m.d9)(), 2),
                        f = d[0],
                        x = d[1],
                        b = (0, c.Bl)(),
                        g = (0, v.ok2)().getI18n,
                        k = (0, v.yTn)(),
                        y = (0, v.vAQ)(),
                        D = "FDUSD" === x || "FDUSD" === f,
                        S = (0, p.gw)({
                            base: f || "",
                            quote: x || ""
                        });
                    if (!S.isShow || !D && "zh-CN" == b || y && D) return (0, o.jsx)(o.Fragment, {});
                    var j = (0, p.cv)({
                            getI18n: g,
                            layout: l,
                            zeroFeeData: S,
                            tradeType: s
                        }),
                        C = j.text,
                        F = j.link,
                        T = j.onClick;
                    return (0, o.jsxs)("div", {
                        style: (0, n._)({
                            display: "flex",
                            alignItems: "center",
                            fontSize: "12px",
                            lineHeight: "16px",
                            color: "var(--color-PrimaryText)",
                            padding: "6px 8px",
                            borderRadius: "6px",
                            border: "1px solid",
                            borderColor: "rgb(from var(--color-BtnBg) r g b / 0.3)",
                            backgroundColor: "rgb(from var(--color-BtnBg) r g b / 0.05)",
                            gap: "4px"
                        }, r),
                        onClick: T,
                        children: [!k && (0, o.jsx)(u, {
                            style: {
                                width: "16px",
                                height: "16px",
                                color: "var(--color-BtnBg)"
                            }
                        }), (0, o.jsx)("a", {
                            target: "_blank",
                            style: {
                                textDecoration: "none",
                                color: "inherit"
                            },
                            href: F,
                            children: C
                        })]
                    })
                };
            const x = s().memo(f)
        },
        "Y4+x": (e, r, t) => {
            t.d(r, {
                A: () => q
            });
            var n = t("S+0I"),
                a = t("mguP"),
                o = t("jbFV"),
                i = t.n(o),
                s = t("mXdx"),
                c = t("DTvD"),
                l = t.n(c),
                d = t("tM9B"),
                u = t("Tuzj"),
                v = t("MD8j"),
                m = t("gLBh"),
                h = t("I4z7"),
                p = t("kcvK"),
                f = t("Rbm3"),
                x = t("Gz4J"),
                b = t("WT+B"),
                g = t("HvRD"),
                k = t("wIZF"),
                y = t("qqbu");
            const D = function(e) {
                return l().createElement(y.A, (0, k.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.75 10.5a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zM17.25 21a3.75 3.75 0 100-7.5 3.75 3.75 0 000 7.5zm2.882-15.01L18.01 3.868 3.868 18.01l2.121 2.122L20.133 5.99z",
                    fill: "currentColor"
                }))
            };
            var S = t("JyEq"),
                j = t("hAzz"),
                C = t("Qhol"),
                F = t("ozYv"),
                T = t("nUN5"),
                I = t("bQ69"),
                B = t("ugWk"),
                _ = t("b9LU"),
                w = t("iH9S"),
                z = t("b2AH"),
                U = t("61SC"),
                A = t("JaRM"),
                N = t("eWL+"),
                L = t("Ykh1"),
                R = function(e) {
                    return "".concat((0, d.lw)(e, 100), "%")
                },
                P = (0, c.memo)((function(e) {
                    var r = e.status,
                        t = (0, v.wA)(),
                        a = function() {
                            var e = (0, n._)(i().mark((function e(r) {
                                var n;
                                return i().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = r, e.next = 3, (0, u.cf)({
                                                useBnbFee: n
                                            });
                                        case 3:
                                            e.sent.success && t.userCenter.setCommissionStatus(n ? 1 : 0);
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(r) {
                                return e.apply(this, arguments)
                            }
                        }();
                    return (0, s.jsx)(h.A, {
                        checked: r,
                        size: "small",
                        onChange: a
                    })
                })),
                H = (0, c.memo)((function(e) {
                    var r = e.tradeType,
                        t = e.rawSymbol,
                        n = e.getI18n;
                    return r !== I.Gr.ISOLATED ? null : Array.isArray(t) ? -1 !== t.indexOf("BNB") ? null : (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsx)("div", {
                            children: n("trd-orderForm-nobnbBaseQuoteTitle")
                        }), (0, s.jsx)("div", {
                            className: "desc",
                            children: n("trd-orderForm-nobnbBaseQuoteDesc")
                        })]
                    }) : null
                })),
                K = "".concat(I.K5, "/static/assets/logos/feelevel.png"),
                O = function(e) {
                    var r = e.tips,
                        t = e.link,
                        n = e.trdI18n,
                        a = e.currentBaseAsset,
                        o = e.currentQuoteAsset,
                        i = e.zeroFeeData,
                        c = (0, s.jsxs)("div", {
                            style: {
                                fontSize: "14px"
                            },
                            children: [(0, s.jsx)("div", {
                                style: {
                                    display: "inline"
                                },
                                children: r
                            }), (0, s.jsx)("a", {
                                target: "_blank",
                                style: {
                                    color: "var(--color-SecondaryBg)",
                                    textDecoration: "none",
                                    fontWeight: "500",
                                    lineHeight: "20px"
                                },
                                href: t,
                                children: n("learn-more", {
                                    defaultValue: "Learn more"
                                })
                            })]
                        });
                    return (0, s.jsxs)("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            fontSize: "14px",
                            fontWeight: "500",
                            lineHeight: "22px",
                            marginBottom: "4px",
                            color: "var(--color-PrimaryText)"
                        },
                        children: [(0, s.jsx)("div", {
                            children: "".concat(a, "/").concat(o)
                        }), r && (0, s.jsx)(p.A, {
                            offset: 4,
                            placement: "top",
                            useReactPopper: !0,
                            variant: "gray",
                            arrow: !0,
                            tooltips: c,
                            children: i.isShow && (0, s.jsx)(g.A, {
                                className: "trade-common-icon hover-help"
                            })
                        })]
                    })
                },
                E = (0, c.memo)((function(e) {
                    var r = e.userInfo,
                        t = e.bnbFree,
                        n = e.burnBnbRate,
                        o = e.vipText,
                        i = e.commission,
                        l = (0, z.ok)().getI18n,
                        u = (0, C.jH7)(),
                        v = (0, a._)((0, C.Grl)(), 1)[0],
                        h = (0, c.useContext)(_.x),
                        p = h.currentBaseAsset,
                        x = h.currentQuoteAsset,
                        b = (0, C.BSp)(),
                        g = [p, x],
                        k = i.makerCommission,
                        y = void 0 === k ? 0 : k,
                        D = i.takerCommission,
                        S = void 0 === D ? 0 : D,
                        A = 1 === r.commissionStatus,
                        N = function(e, r) {
                            var t;
                            return +e <= 0 && (t = r("trd-orderForm-nobnbAvailable")), t
                        }(t, l),
                        L = R(S),
                        E = (0, j.RK)(n, 0, !0),
                        M = "rtl" === u ? "%".concat(E) : "".concat(E, "%"),
                        q = R((0, d.lw)(S, 1 - +n).toFixed(8)),
                        V = R(y),
                        Q = R((0, d.lw)(y, 1 - +n).toFixed(8)),
                        W = function(e) {
                            var r, t = e.quote,
                                n = e.base,
                                a = (0, T.mR)().nextTickers,
                                o = (0, F.G)(a, "symbol"),
                                i = null === (r = o.BTCUSDT) || void 0 === r ? void 0 : r.lastPrice,
                                s = (0, c.useMemo)((function() {
                                    var e, r, a, i, s, c, l, u, v, m;
                                    return o["".concat(n, "USDT")] ? (0, d.k3)(null === (e = o["".concat(n, "USDT")]) || void 0 === e ? void 0 : e.lastPrice, null === (r = o.BNBUSDT) || void 0 === r ? void 0 : r.lastPrice) : o["".concat(t, "USDT")] ? (0, d.k3)((0, d.lw)(null === (a = o["".concat(n).concat(t)]) || void 0 === a ? void 0 : a.lastPrice, null === (i = o["".concat(t, "USDT")]) || void 0 === i ? void 0 : i.lastPrice), null === (s = o.BNBUSDT) || void 0 === s ? void 0 : s.lastPrice) : o["".concat(n, "BTC")] ? (0, d.k3)(null === (c = o["".concat(n, "BTC")]) || void 0 === c ? void 0 : c.lastPrice, null === (l = o.BNBBTC) || void 0 === l ? void 0 : l.lastPrice) : o["".concat(t, "BTC")] ? (0, d.k3)((0, d.lw)(null === (u = o["".concat(n).concat(t)]) || void 0 === u ? void 0 : u.lastPrice, null === (v = o.BNBBTC) || void 0 === v ? void 0 : v.lastPrice), null === (m = o.BNBBTC) || void 0 === m ? void 0 : m.lastPrice) : void 0
                                }), [i]);
                            return (null === s || void 0 === s ? void 0 : s.toNumber()) || 0
                        }({
                            base: p,
                            quote: x
                        }),
                        G = (0, w.gw)({
                            base: p,
                            quote: x
                        }),
                        X = (0, w.cv)({
                            getI18n: l,
                            zeroFeeData: G,
                            tradeType: v
                        }),
                        J = X.link,
                        Y = X.tips,
                        Z = (0, c.useMemo)((function() {
                            var e = (l("trd-orderForm-usebnb", {
                                    discount: M
                                }) || "").split("("),
                                r = e.length && !!e[1] && e[1].split(")");
                            return (0, s.jsxs)(s.Fragment, {
                                children: [(0, s.jsxs)("span", {
                                    style: {
                                        flex: 1
                                    },
                                    children: [e[0], r && (0, s.jsx)("a", {
                                        className: "burnHref",
                                        target: "_blank",
                                        href: "/".concat(B.Rh),
                                        rel: "noreferrer",
                                        onClick: function() {
                                            return (0, U.GH)({
                                                clickContent: "fee_details"
                                            })
                                        },
                                        children: r[0]
                                    })]
                                }), (0, s.jsx)(P, {
                                    status: A
                                })]
                            })
                        }), [A, M]);
                    return (0, s.jsxs)("div", {
                        className: "trd-of-vip-panel",
                        onClick: function(e) {
                            e && e.stopPropagation()
                        },
                        children: [(0, s.jsx)("div", {
                            className: "vipTitleWrap",
                            children: (0, s.jsxs)("a", {
                                className: "vipTitle",
                                onClick: function() {
                                    return (0, U.GH)({
                                        clickContent: "your_trading_fee_level"
                                    })
                                },
                                target: "__blank",
                                href: I.TP.FEE_URL,
                                children: [(0, s.jsxs)("span", {
                                    className: "prefix",
                                    children: [" ", l("trd-orderForm-tradingFeeTitle")]
                                }), " ", o]
                            })
                        }), (0, s.jsxs)("div", {
                            className: "feeWrap",
                            children: [(0, s.jsx)(O, {
                                tips: Y,
                                link: J,
                                trdI18n: l,
                                currentBaseAsset: p,
                                currentQuoteAsset: x,
                                zeroFeeData: G
                            }), (0, s.jsx)("div", {
                                className: "nbnFee",
                                children: Z
                            }), W && W < 1e-8 && (0, s.jsx)("div", {
                                style: {
                                    marginTop: "6px"
                                },
                                children: (0, s.jsx)(m.x, {
                                    t: l,
                                    i18nKey: "trd-orderForm-bnb-minp",
                                    components: {
                                        Link: (0, s.jsx)("a", {
                                            style: {
                                                color: "var(--color-PrimaryText)",
                                                textDecoration: "none"
                                            },
                                            target: "_blank",
                                            href: "".concat("/support/faq/how-to-use-bnb-to-pay-for-fees-and-earn-25-discount-115000583311")
                                        })
                                    }
                                })
                            }), (0, s.jsx)("div", {
                                className: "burnStatus",
                                children: (0, s.jsx)("span", {
                                    children: N
                                })
                            }), (0, s.jsxs)("div", {
                                className: "feeDetail",
                                children: [(0, s.jsxs)("div", {
                                    className: "taker",
                                    children: [(0, s.jsx)("span", {
                                        className: "takerRight",
                                        children: A ? (0, s.jsxs)(s.Fragment, {
                                            children: [(0, s.jsx)("span", {
                                                className: "label",
                                                children: q
                                            }), (0, s.jsx)("span", {
                                                className: "discountLabel",
                                                children: L
                                            })]
                                        }) : L
                                    }), (0, s.jsx)("span", {
                                        className: "takerLeft",
                                        children: l("trd-orderForm-taker")
                                    })]
                                }), (0, s.jsxs)("div", {
                                    className: "taker",
                                    children: [(0, s.jsx)("span", {
                                        className: "takerRight",
                                        children: A ? (0, s.jsxs)(s.Fragment, {
                                            children: [(0, s.jsx)("span", {
                                                className: "label",
                                                children: Q
                                            }), (0, s.jsx)("span", {
                                                className: "discountLabel",
                                                children: V
                                            })]
                                        }) : V
                                    }), (0, s.jsxs)("span", {
                                        className: "takerLeft",
                                        children: [" ", l("trd-orderForm-maker")]
                                    })]
                                })]
                            }), (0, s.jsx)(H, {
                                tradeType: v,
                                rawSymbol: g,
                                getI18n: l
                            }), !b && (0, s.jsxs)("div", {
                                className: "inviteFriends",
                                children: [(0, s.jsx)("a", {
                                    target: "__blank",
                                    href: I.TP.REFERRAL_URL,
                                    children: l("trd-orderForm-inviteFriends")
                                }), (0, s.jsx)(f.A, {
                                    src: K,
                                    className: "w-[40px] h-[40px] min-w-[40px]"
                                })]
                            })]
                        })]
                    })
                })),
                M = function(e) {
                    var r = e.showLevel,
                        t = void 0 !== r && r,
                        n = (0, z.ok)().getI18n,
                        a = (0, C.Pyz)(),
                        o = (0, C.pP0)(),
                        i = (0, L.iq)(),
                        l = (0, N.ZU)(),
                        d = (0, c.useContext)(S.cb).layout,
                        u = a.tradeLevel,
                        v = (0, c.useMemo)((function() {
                            return Number(u) ? "VIP ".concat(u) : n("trd-orderForm-general")
                        }), [n, u]),
                        m = (0, b.Z)((function() {
                            return (0, s.jsx)(E, {
                                userInfo: a,
                                bnbFree: i,
                                burnBnbRate: o,
                                vipText: v,
                                commission: l
                            })
                        }));
                    return (0, s.jsx)(A.A, {
                        trigger: "click",
                        placement: "bottom",
                        arrow: !1,
                        renderOverlay: m,
                        useReactPopper: !0,
                        enablePortal: !0,
                        children: (0, s.jsxs)(x.A, {
                            variant: "text",
                            textVariant: "gray",
                            style: {
                                fontSize: "12px",
                                fontWeight: 400,
                                color: "var(--color-PrimaryText)",
                                height: "16px",
                                minHeight: "16px"
                            },
                            children: [(0, s.jsx)(D, {
                                style: {
                                    fontSize: "16px",
                                    color: "var(--color-IconNormal)"
                                }
                            }), d !== I.a0 && (t ? v : n("trd-orderForm-feeLevel"))]
                        })
                    })
                };
            const q = l().memo(M)
        },
        iH9S: (e, r, t) => {
            t.d(r, {
                cv: () => v,
                gw: () => d
            });
            var n = t("bQ69"),
                a = t("wtFP"),
                o = t("Xeyi"),
                i = ["ETHTUSD", "BNBTUSD"],
                s = ["TUSDUSDT", "USDCUSDT", "USDPUSDT"],
                c = ["FDUSDUSDT"],
                l = ["BTCFDUSD", "BNBFDUSD", "DOGEFDUSD", "ETHFDUSD", "LINKFDUSD", "SOLFDUSD", "XRPFDUSD"],
                d = function(e) {
                    var r = e.base,
                        t = e.quote,
                        n = "".concat(r).concat(t).toUpperCase();
                    return i.includes(n) ? {
                        currentCoin: "TUSD",
                        isShow: !0
                    } : s.includes(n) ? {
                        currentCoin: "USDT",
                        isShow: !0
                    } : c.includes(n) ? {
                        currentCoin: "FDUSD",
                        isShow: !0,
                        type: "StableFDUSD"
                    } : l.includes(n) ? {
                        currentCoin: "FDUSD",
                        isShow: !0,
                        type: "HOTFDUSD"
                    } : n.includes("FDUSD") ? {
                        currentCoin: "FDUSD",
                        isShow: !0
                    } : {
                        currentCoin: "",
                        isShow: !1
                    }
                },
                u = {
                    TUSD: {
                        linkId: "updates-on-zero-fee-bitcoin-trading-busd-zero-maker-fee-promotion-be13a645cca643d28eab5b9b34f2dc36",
                        electronLinkId: "be13a645cca643d28eab5b9b34f2dc36",
                        shortKey: "maker-hot-short",
                        textI18nKey: "maker-hot-short",
                        tipsI18nKey: "maker-hot-short"
                    },
                    BTC: {
                        linkId: "updates-on-zero-fee-bitcoin-trading-busd-zero-maker-fee-promotion-be13a645cca643d28eab5b9b34f2dc36",
                        electronLinkId: "be13a645cca643d28eab5b9b34f2dc36",
                        shortKey: "btc-hot-trading-short",
                        textI18nKey: "btc-hot-trading",
                        tipsI18nKey: "btc-hot-tips"
                    },
                    USDT: {
                        linkId: "dd331bed50bb44f485e47aed132bfc02",
                        electronLinkId: "dd331bed50bb44f485e47aed132bfc02",
                        shortKey: "zero-fee",
                        textI18nKey: "zero-fee",
                        tipsI18nKey: "zero-fee"
                    },
                    FDUSD: {
                        linkId: "binance-will-list-first-digital-usd-fdusd-and-introduce-fdusd-zero-trading-fee-promotions-065a0d561cc147ffaa74554360b9a042",
                        electronLinkId: "065a0d561cc147ffaa74554360b9a042",
                        shortKey: "maker-hot-trading-short",
                        textI18nKey: "maker-hot-trading",
                        tipsI18nKey: "maker-hot-tips",
                        hideChevron: !0
                    },
                    StableFDUSD: {
                        linkId: "binance-will-list-first-digital-usd-fdusd-and-introduce-fdusd-zero-trading-fee-promotions-065a0d561cc147ffaa74554360b9a042",
                        electronLinkId: "065a0d561cc147ffaa74554360b9a042",
                        shortKey: "btc-hot-trading-short",
                        textI18nKey: "hot-trading",
                        tipsI18nKey: "maker-hot-tips",
                        hideChevron: !0
                    },
                    HOTFDUSD: {
                        linkId: "binance-updates-the-fdusd-zero-trading-fee-promotion-for-regular-and-vip-1-users-3d8514bbc817423eba52fb23483bcbed",
                        electronLinkId: "3d8514bbc817423eba52fb23483bcbed",
                        shortKey: "maker-hot-trading-short",
                        textI18nKey: "maker-hot-trading",
                        tipsI18nKey: "maker-hot-tips",
                        hideChevron: !0
                    }
                },
                v = function(e) {
                    var r = e.getI18n,
                        t = e.layout,
                        i = e.zeroFeeData,
                        s = e.tradeType,
                        c = i.currentCoin,
                        l = (null === i || void 0 === i ? void 0 : i.type) || i.currentCoin,
                        d = u[l] || {},
                        v = d.linkId,
                        m = (d.electronLinkId, d.textI18nKey),
                        h = d.tipsI18nKey,
                        p = d.shortKey,
                        f = d.hideChevron,
                        x = void 0 !== f && f;
                    return {
                        text: t === n.a0 ? r("trd-orderForm-".concat(p)) : r("trd-orderForm-".concat(m), {
                            coin: c
                        }),
                        link: "/support/announcement/".concat(v),
                        tips: h ? r("trd-orderForm-".concat(h), {
                            coin: c
                        }) : "",
                        onClick: function() {
                            return function(e, r) {
                                "FDUSD" === e && (0, a.u4)("$WebClick", {
                                    module: "convert_to_fdusd_hint",
                                    $element_id: "Trade_promo_pairs",
                                    df_source: (0, o.Vq)(r) ? "spot" : "margin",
                                    pageName: (0, o.Vq)(r) ? "spot_trading" : "margin_trading"
                                })
                            }(c, s)
                        },
                        hideChevron: x
                    }
                }
        },
        nvpp: (e, r, t) => {
            t.d(r, {
                A: () => a
            });
            var n = t("DTvD");
            const a = function(e) {
                var r = (0, n.useRef)(e);
                return r.current = e, r
            }
        }
    }
]);