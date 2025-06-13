"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [3379, 8747, 1881], {
        vvab: (e, o, t) => {
            t.r(o), t.d(o, {
                default: () => h
            });
            var n = t("mguP"),
                l = t("mXdx"),
                i = t("DTvD"),
                s = t.n(i),
                r = t("J+v0"),
                a = t.n(r),
                d = t("Vhyo"),
                u = t("MD8j"),
                c = t("Qhol"),
                m = t("vTbz"),
                x = t("bQ69"),
                v = t("hAzz"),
                b = t("Ykh1"),
                f = t("ugWk"),
                g = {
                    mt: "12px",
                    fontSize: "12px",
                    lineHeight: "16px",
                    color: "t.sell",
                    textAlign: "center"
                };

            function p(e) {
                var o = e.side,
                    t = void 0 === o ? f.Vl.BUY : o,
                    i = e.borrowAmount,
                    s = void 0 === i ? 0 : i,
                    r = (0, c.ok2)("", "widget-common").getI18n,
                    p = (0, b.lS)(),
                    h = p.buyMode,
                    y = p.sellMode,
                    k = (0, c.QsY)().isMobile,
                    A = (0, n._)((0, c.Grl)(), 1)[0],
                    Y = (0, u.d4)((function(e) {
                        return e.setting.layout
                    })),
                    j = (0, v.V$)(A),
                    w = (0, m.bS)(h) || (0, m.bS)(y),
                    D = t === f.Vl.BUY ? (0, m.bS)(h) : (0, m.bS)(y),
                    M = !!k || Y !== x.a0,
                    z = (0, b.wL)(k || Y === x.ug ? D : w, s),
                    B = z.disableBorrow,
                    S = z.endTime;
                return j && B && M ? (0, l.jsx)(d.A, {
                    sx: g,
                    className: "margin-cool-off-info",
                    children: r("mcl-info", {
                        date: a()(+S).format("YYYY-MM-DD HH:mm:ss")
                    })
                }) : null
            }
            const h = s().memo(p)
        },
        lL26: (e, o, t) => {
            t.r(o), t.d(o, {
                default: () => x
            });
            var n = t("mXdx"),
                l = t("DTvD"),
                i = t.n(l),
                s = t("JyEq"),
                r = t("hAzz"),
                a = t("Y4+x"),
                d = t("vvab"),
                u = t("dFPA"),
                c = t("kFsa"),
                m = function(e) {
                    var o = e.side,
                        t = e.borrowAmount,
                        i = e.marginButtonClickBehavior,
                        m = (0, l.useContext)(s.cb),
                        x = m.tradeType,
                        v = m.isLoggedIn,
                        b = m.layout;
                    return (0, n.jsxs)("div", {
                        style: {
                            marginTop: "16px",
                            display: "flex",
                            flexDirection: "column",
                            gap: "8px"
                        },
                        children: [(0, n.jsx)(u.A, {}), (0, n.jsxs)("div", {
                            style: {
                                display: "flex",
                                alignItems: "center",
                                gap: "8px"
                            },
                            children: [v && (0, n.jsx)(a.A, {}), (0, r.V$)(x) && (0, n.jsx)(c.MarginCalc, {
                                clickBehavior: i,
                                layout: b
                            })]
                        }), (0, r.V$)(x) && (0, n.jsx)(d.default, {
                            side: o,
                            borrowAmount: t
                        })]
                    })
                };
            const x = i().memo(m)
        }
    }
]);