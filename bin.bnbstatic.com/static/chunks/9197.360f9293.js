"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [9197], {
        rEu4: (e, r, t) => {
            t.d(r, {
                A: () => o
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                l = t.n(a),
                i = t("PzHQ");
            const o = function(e) {
                return l().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12.288 12l-3.89 3.89 1.768 1.767L15.823 12l-1.768-1.768-3.889-3.889-1.768 1.768 3.89 3.89z",
                    fill: "currentColor"
                }))
            }
        },
        "4+lJ": (e, r, t) => {
            t.d(r, {
                A: () => o
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                l = t.n(a),
                i = t("PzHQ");
            const o = function(e) {
                return l().createElement(i.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    d: "M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z",
                    fill: "currentColor"
                }))
            }
        },
        "2eYh": (e, r, t) => {
            t.d(r, {
                W: () => b,
                Z: () => v
            });
            var n = t("hrAD"),
                a = t("qoEP"),
                l = t("KrVi"),
                i = t("mXdx"),
                o = t("DTvD"),
                c = t("GIr8"),
                d = t("Vhyo"),
                s = t("GJ+9"),
                u = t("4+lJ"),
                m = t("rEu4"),
                x = t("Qhol"),
                p = t("b9LU"),
                h = t("QFrD"),
                b = function(e) {
                    var r = e.enable,
                        t = e.created,
                        n = (0, o.useContext)(p.x).currentSymbol,
                        a = (0, x.CUO)().getI18n,
                        l = (0, h.b)();
                    return t && r ? null : (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(c.A, {
                            p: "10px",
                            mt: "12px",
                            bg: "badgeYellowBg",
                            color: "t.primary",
                            alignItems: "center",
                            sx: {
                                borderRadius: "4px"
                            },
                            children: [(0, i.jsx)(u.A, {
                                fontSize: "22px",
                                mr: "10px",
                                color: "t.yellow200"
                            }), (0, i.jsx)(d.A, {
                                as: "span",
                                variant: "caption",
                                children: t ? a("pair-disabled") : l ? a("add-margin-tips", {
                                    defaultValue: "Limit Exceeded, Reduce pairs to proceed."
                                }) : a("transfer-toactive")
                            })]
                        }), t && (0, i.jsx)(s.A, {
                            mt: "xs",
                            variant: "defaultLink",
                            display: "inline-block",
                            href: "/my/wallet/account/margin/isolated?limitSymbol=".concat(n),
                            children: a("dialog-marginAccount")
                        })]
                    })
                },
                v = function(e) {
                    var r = e.created,
                        t = e.sx,
                        b = (0, l._)(e, ["created", "sx"]),
                        v = (0, o.useContext)(p.x).currentSymbol,
                        f = (0, x.CUO)().getI18n,
                        g = (0, h.b)();
                    return (0, i.jsxs)(c.A, (0, a._)((0, n._)({
                        p: "5px",
                        bg: "badgeYellowBg",
                        color: "t.primary",
                        alignItems: "center",
                        __css: (0, n._)({
                            borderRadius: "4px"
                        }, t)
                    }, b), {
                        children: [(0, i.jsx)(u.A, {
                            fontSize: "16px",
                            mr: "5px",
                            color: "t.yellow200"
                        }), r ? (0, i.jsxs)(s.A, {
                            variant: "defaultLink",
                            color: "t.primary",
                            href: "/my/wallet/account/margin/isolated?limitSymbol=".concat(v),
                            children: [f("pair-disabled"), (0, i.jsx)(m.A, {
                                color: "t.third",
                                fontSize: "12px",
                                verticalAlign: "-2px"
                            })]
                        }) : (0, i.jsx)(d.A, {
                            as: "span",
                            variant: "caption",
                            children: g ? f("add-margin-tips", {
                                defaultValue: "Limit Exceeded, Reduce pairs to proceed."
                            }) : f("transfer-toactive")
                        })]
                    }))
                }
        },
        YE17: (e, r, t) => {
            t.r(r), t.d(r, {
                default: () => m
            });
            var n = t("mXdx"),
                a = t("DTvD"),
                l = t.n(a),
                i = t("bQ69"),
                o = t("2eYh"),
                c = t("b9LU"),
                d = t("z4eh"),
                s = t("Ykh1"),
                u = function(e) {
                    var r = e.tradeType,
                        t = e.hideMask,
                        l = (0, a.useContext)(c.x),
                        u = l.currentSymbol,
                        m = l.currentTabs,
                        x = (0, s.N8)(),
                        p = x.created,
                        h = x.enable,
                        b = r === i.Gr.ISOLATED && (!p || !h);
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(d.A, {
                            currentSymbol: u,
                            currentTabs: m,
                            mobile: !0,
                            hideMask: t
                        }), b && (0, n.jsx)(o.Z, {
                            created: p
                        })]
                    })
                };
            const m = l().memo(u)
        }
    }
]);