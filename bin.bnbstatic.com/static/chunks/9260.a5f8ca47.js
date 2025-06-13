"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [9260], {
        Hpy5: (e, n, t) => {
            t.r(n), t.d(n, {
                default: () => z
            });
            var s = t("iKvg"),
                i = t("hrAD"),
                a = t("qoEP"),
                r = t("mguP"),
                o = t("mXdx"),
                l = t("DTvD"),
                d = t.n(l),
                c = t("5JIq"),
                u = t("2IQ4"),
                m = t("Vhyo"),
                p = t("J+v0"),
                x = t.n(p),
                h = t("Qhol"),
                f = t("iwDq"),
                v = t("jwne"),
                y = t("H8jA"),
                _ = t("tgKj"),
                b = t("Gz4J"),
                j = t("c6eW"),
                T = function(e) {
                    var n = e.visible,
                        t = e.onCancel,
                        s = e.message,
                        i = e.cancelText,
                        a = (0, h.ok2)().getI18n;
                    return (0, o.jsx)(v.Ay, {
                        visible: n,
                        enablePortal: !0,
                        children: (0, o.jsx)(y.A, {
                            icon: (0, o.jsx)(j.A, {}),
                            description: s,
                            actions: (0, o.jsx)(_.A, {
                                children: (0, o.jsx)(b.A, {
                                    onClick: t,
                                    style: {
                                        flex: 1
                                    },
                                    children: i || a("trd-dialog-i-understand")
                                })
                            })
                        })
                    })
                };
            const D = d().memo(T);
            var k = t("bQ69"),
                w = t("Wywd"),
                A = t("8TKQ"),
                g = function(e) {
                    var n = e.symbol,
                        t = void 0 === n ? "" : n,
                        r = e.isPro,
                        l = e.tradeType,
                        d = !!(0, h.NUE)(t),
                        c = !!(0, h.b3O)(t),
                        u = (0, h.ok2)().getI18n,
                        m = (0, w.z)("spot-trade-ui", A.p.DISCLAIMER_RED, {}),
                        p = m.data,
                        v = m.setData,
                        y = m.hasInitialized,
                        _ = (0, h.Pwh)(l),
                        b = "".concat(t, "_").concat(d ? "red" : "seed", "_").concat(_),
                        j = p ? p[b] : "",
                        T = !!j && x()(+j).isSame(x()(), "day");
                    if (!c && !d) return null;
                    if (!y || T) return null;
                    var D = u(d ? "trd-red-asset-risk-warning" : "trd-seed-asset-risk-warning");
                    return (0, o.jsx)(f.A, {
                        innerText: D,
                        isPro: r,
                        handleClose: function() {
                            v((0, a._)((0, i._)({}, p), (0, s._)({}, b, Date.now())))
                        }
                    })
                },
                N = function(e) {
                    var n = e.symbol,
                        t = (0, w.z)("spot-trade-ui", A.p.DISCLAIMER_RED_DIALOG, {}),
                        r = t.data,
                        l = t.setData,
                        d = t.hasInitialized,
                        c = !!(0, h.NUE)(n),
                        u = (0, h.ok2)().getI18n,
                        m = (new Date).valueOf(),
                        p = Number(m) - Number((null === r || void 0 === r ? void 0 : r[n]) || 99999999999) > 2592e5;
                    return c && d && p ? (0, o.jsx)(D, {
                        message: u("trd-red-asset-risk-warning"),
                        onCancel: function() {
                            l((0, a._)((0, i._)({}, r), (0, s._)({}, n, (new Date).valueOf())))
                        },
                        visible: !0
                    }) : null
                },
                I = t("hAzz"),
                C = function(e) {
                    var n = e.delistedTime,
                        t = e.getI18n,
                        s = e.base,
                        i = e.quote,
                        a = e.isReName,
                        r = e.isePreMarketText;
                    if (n) {
                        var l = (0, c.i)(new Date(n), "yyyy-MM-dd hh:mm"),
                            d = function(e) {
                                var n = e.getTimezoneOffset(),
                                    t = -Math.floor(n / 60);
                                return t > 0 && (t = "+".concat(t)), "UTC".concat(t)
                            }(new Date(n)),
                            u = (0, c.i)(new Date(n), "yyyy-MM-dd"),
                            m = (0, c.i)(new Date(n), "hh:mm");
                        return a ? (0, o.jsx)("span", {
                            className: "description",
                            children: t("set-delistedTime-rename", {
                                date: l,
                                timeZone: d
                            })
                        }) : r ? (0, o.jsx)("span", {
                            className: "description",
                            children: t("set-delistedTime-premarket", {
                                symbol: "".concat(s, "/").concat(i),
                                timeZone: d,
                                date: u,
                                time: m,
                                interpolation: {
                                    escapeValue: !1
                                }
                            })
                        }) : (0, o.jsx)("span", {
                            className: "description",
                            children: t("set-delistedTime", {
                                base: s,
                                quote: i,
                                date: l,
                                timeZone: d
                            })
                        })
                    }
                    return a ? (0, o.jsx)("span", {
                        className: "description",
                        children: t("set-delisted-rename")
                    }) : r ? (0, o.jsx)("span", {
                        className: "description",
                        children: t("delisted-premarket", {
                            symbol: "".concat(s, "/").concat(i),
                            interpolation: {
                                escapeValue: !1
                            }
                        })
                    }) : (0, o.jsx)("span", {
                        className: "description",
                        children: t("set-delisted", {
                            base: s,
                            quote: i
                        })
                    })
                },
                P = function(e) {
                    var n = e.symbol,
                        t = void 0 === n ? "" : n,
                        r = e.isPro,
                        l = e.tradeType,
                        d = e.risk,
                        c = (0, h.XA$)(t, d, l),
                        p = (0, w.z)("spot-trade-ui", A.p.DISCLAIMER_CONTENT, {}),
                        v = p.data,
                        y = p.setData,
                        _ = p.hasInitialized,
                        b = c.title,
                        j = c.content,
                        T = c.id,
                        D = c.frequency,
                        N = c.placement,
                        I = void 0 === N ? "" : N,
                        C = c.attachedLink,
                        P = c.linkCopy,
                        z = (0, h.Pwh)(l),
                        M = (0, h.tdz)(T) ? "".concat(t) : "".concat(t, "_").concat(T, "_").concat(z),
                        O = v ? v[M] : "",
                        q = !!O && x()(+O).isSame(x()(), "day"),
                        E = I.includes("1");
                    if (!T || !_ || !E || Number(D) === k.pT && v[M] || Number(D) === k.P_ && q) return (0, o.jsx)(g, {
                        isPro: r,
                        symbol: t,
                        tradeType: l
                    });
                    var R = C || P ? (0, o.jsx)(u.A, {
                            sx: {
                                display: "inline",
                                a: {
                                    color: "primary",
                                    textDecoration: "none"
                                }
                            },
                            children: (0, o.jsxs)("a", {
                                target: "_blank",
                                href: "/".concat(C || P),
                                rel: "noreferrer",
                                children: [P || C, " ", ">"]
                            })
                        }) : null,
                        L = b ? (0, o.jsxs)(m.A, {
                            sx: {
                                display: "inline"
                            },
                            children: ["".concat(b, ":"), "\xa0", j, "\xa0", R]
                        }) : (0, o.jsxs)(m.A, {
                            sx: {
                                display: "inline"
                            },
                            children: [j, "\xa0", R]
                        });
                    return (0, o.jsx)(f.A, {
                        innerText: L,
                        isPro: r,
                        handleClose: function() {
                            y((0, a._)((0, i._)({}, v), (0, s._)({}, M, Date.now())))
                        }
                    })
                };
            const z = d().memo((function(e) {
                var n, t, l, c, u = e.currentSymbol,
                    m = e.baseAsset,
                    p = e.quoteAsset,
                    x = e.tradeType,
                    v = e.isPro,
                    y = void 0 !== v && v,
                    _ = (0, r._)((0, h.Grl)(), 1)[0],
                    b = (0, r._)((0, h.sL)(), 2),
                    j = b[0],
                    T = (0, r._)(b[1], 2),
                    k = T[0],
                    w = T[1];
                n = u || j, t = m || k, l = p || w, c = x || _;
                var A = (0, h.Bjx)()[n] || {},
                    g = (0, r._)((0, h.Bpf)("closeTime", {}, n), 2),
                    z = g[0],
                    M = g[1],
                    O = (0, r._)((0, h.Bpf)("closeBannerTime", {}, n), 2),
                    q = O[0],
                    E = O[1],
                    R = A.delisted,
                    L = A.delistedTime,
                    S = A.risk,
                    B = A.se,
                    J = (0, I.xf)(B),
                    Q = (0, I._J)(B),
                    U = (0, I.gs)(B),
                    G = (0, h.CUO)().getI18n,
                    K = (new Date).valueOf(),
                    V = Number(K) - Number((null === z || void 0 === z ? void 0 : z[n]) || 99999999999) > 2592e5,
                    Z = Number(K) - Number((null === q || void 0 === q ? void 0 : q[n]) || 99999999999) > 2592e5,
                    H = d().useMemo((function() {
                        return C({
                            delistedTime: L,
                            getI18n: G,
                            base: t,
                            quote: l,
                            isReName: J,
                            isePreMarketText: U
                        })
                    }), [L, G, t, l, J, U]);
                return (0, o.jsxs)(o.Fragment, {
                    children: [(0, o.jsx)(P, {
                        isPro: y,
                        symbol: n,
                        tradeType: c,
                        risk: S
                    }), R && Z && (0, o.jsx)(f.A, {
                        innerText: H,
                        handleClose: function() {
                            E((0, a._)((0, i._)({}, q), (0, s._)({}, n, (new Date).valueOf())))
                        },
                        isPro: y
                    }), R && V && Q && (0, o.jsx)(D, {
                        message: H,
                        onCancel: function() {
                            M((0, a._)((0, i._)({}, z), (0, s._)({}, n, (new Date).valueOf())))
                        },
                        visible: !0
                    }), (0, o.jsx)(N, {
                        symbol: n
                    })]
                })
            }))
        }
    }
]);