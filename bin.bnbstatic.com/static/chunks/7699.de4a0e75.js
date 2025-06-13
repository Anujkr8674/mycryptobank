"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [7699], {
        QM49: (n, e, i) => {
            i.r(e), i.d(e, {
                default: () => h
            });
            var t = i("mXdx"),
                l = i("DTvD"),
                o = i.n(l),
                a = i("Gz4J"),
                s = i("TtvA"),
                c = i("Dj9W"),
                r = i("ZaFi"),
                d = i("p33m"),
                u = i("Qhol"),
                x = i("ugWk"),
                p = (0, r.B)((function(n) {
                    var e = n.getI18n,
                        i = n.onClick,
                        l = n.isLoggedIn;
                    return (0, t.jsxs)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "8px 16px ",
                            gap: "8px"
                        },
                        children: [(0, t.jsx)(a.A, {
                            sz: "middle",
                            variant: "buy",
                            onClick: function() {
                                return l ? i(x.Vl.BUY) : (0, d.N)()
                            },
                            className: "flex-1 !h-[36px] !min-h-[36px] !text-[14px] !rounded-[8px]",
                            children: e(l ? "BUY" : "login")
                        }), (0, t.jsx)(a.A, {
                            sz: "middle",
                            variant: "sell",
                            onClick: function() {
                                return l ? i(x.Vl.SELL) : (0, d.B)()
                            },
                            className: "flex-1 !h-[36px] !min-h-[36px] !text-[14px] !rounded-[8px]",
                            children: e(l ? "SELL" : "login")
                        })]
                    })
                }), !0),
                f = function(n) {
                    var e = n.setVisible,
                        i = n.setTabSide,
                        o = n.visible,
                        a = (0, c.o)().getI18n,
                        r = (0, u.nHk)(),
                        d = (0, l.useCallback)((function(n) {
                            i(n), e(!0)
                        }), [i]);
                    return (0, t.jsxs)(t.Fragment, {
                        children: [(0, t.jsx)(p, {
                            getI18n: a,
                            onClick: d,
                            isLoggedIn: r
                        }), (0, t.jsx)(s.A, {
                            visible: o,
                            onClick: function() {
                                return e(!1)
                            }
                        })]
                    })
                };
            const h = o().memo(f)
        },
        p33m: (n, e, i) => {
            i.d(e, {
                B: () => s,
                N: () => a
            });
            var t = i("kPx0"),
                l = i("hAzz"),
                o = (i("FkjH"), i("bQ69")),
                a = function() {
                    var n = {
                        callback: (0, t.btoau)(window.location.href)
                    };
                    window.location.href = (0, l.J1)(o.TP.LOGIN_URL, n)
                },
                s = function() {
                    var n = {
                        callback: (0, t.btoau)(window.location.href)
                    };
                    window.location.href = (0, l.J1)(o.TP.REGISTER_URL, n)
                }
        }
    }
]);