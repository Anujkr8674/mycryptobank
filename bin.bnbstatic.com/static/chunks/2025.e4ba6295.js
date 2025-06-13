"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [2025], {
        ylXK: (r, e, n) => {
            n.d(e, {
                A: () => h
            });
            var t = n("hrAD"),
                o = n("mXdx"),
                i = n("DTvD"),
                c = n.n(i),
                l = n("5XRN"),
                d = n("b6CO"),
                a = n("PzHQ");
            const s = function(r) {
                return c().createElement(a.A, (0, d._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, r), c().createElement("path", {
                    d: "M10.5 20v-3h3v3h-3zM10.5 7V4h3v3h-3zM10.5 10.5v3h3v-3h-3z",
                    fill: "#76808F"
                }))
            };
            var u = (0, i.forwardRef)((function(r, e) {
                var n = r.overlay,
                    i = r.sx;
                return (0, o.jsx)(l.Ay, {
                    ref: e,
                    trigger: "hover",
                    display: "inline-flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    enablePortal: !0,
                    overlay: n,
                    sx: {
                        verticalAlign: "top"
                    },
                    children: (0, o.jsx)(s, {
                        sx: (0, t._)({
                            fontSize: "20px",
                            cursor: "pointer",
                            color: "iconClose",
                            ":hover": {
                                color: "t.third"
                            }
                        }, i)
                    })
                })
            }));
            const h = c().memo(u)
        },
        "wgI+": (r, e, n) => {
            n.d(e, {
                Z: () => C
            });
            var t = n("mguP"),
                o = n("mXdx"),
                i = n("DTvD"),
                c = n("BiCW"),
                l = n("bQ69"),
                d = n("hAzz"),
                a = n("Qhol"),
                s = n("ugWk"),
                u = (n("61SC"), n("Ykh1")),
                h = n("JyEq"),
                y = (n("sXI5"), n("ctcW"), n("hrAD")),
                f = n("qoEP"),
                p = n("KrVi"),
                m = n("Vhyo"),
                v = n("2IQ4"),
                x = function(r) {
                    var e = r.children,
                        n = r.className,
                        t = void 0 === n ? "" : n,
                        i = (0, p._)(r, ["children", "className"]);
                    return (0, o.jsx)(m.A, (0, f._)((0, y._)({
                        className: "item ".concat(t),
                        as: "span"
                    }, i), {
                        children: e
                    }))
                },
                k = function(r) {
                    var e = r.children,
                        n = (0, p._)(r, ["children"]);
                    return (0, o.jsx)(v.A, (0, f._)((0, y._)({
                        variant: "dropdown",
                        __css: {
                            display: "flex",
                            flexDirection: "column"
                        }
                    }, n), {
                        children: e
                    }))
                };
            n("VWOf");
            n("jbFV"), n("MD8j"), n("ih71");
            var w = n("d12p");
            n("92Cd"), (0, w._)([{
                type: "limitOrder",
                i18nKey: "trd-layout-limitorder"
            }, {
                type: "marketOrder",
                i18nKey: "trd-layout-marketorder"
            }, {
                type: "stopLossOrder",
                i18nKey: "trd-layout-slorder"
            }, {
                type: "oco",
                i18nKey: "trd-layout-ocoOrder"
            }, {
                type: "trailingStopOrder",
                i18nKey: "trd-layout-trailingStopOrder"
            }]).concat([{
                type: "autoBorrowRepay",
                i18nKey: "trd-layout-autoBorrowRepay"
            }, {
                type: "marginAutoTransfer",
                i18nKey: "trd-layout-marginAutoTransfer"
            }]);
            n("arbg"), n("C7Nc"), n("HSL5"), n("tSo1"), n("5lZq"), n("BZR+");
            n("9mKD"), n("XPku");
            (0, c.A)((function() {
                return n.e(3853).then(n.bind(n, "Gvs1"))
            }), {
                webpack: function() {
                    return ["Gvs1"]
                }
            });
            var C = function() {
                var r = (0, a.ok2)().getI18n,
                    e = (0, a.ok2)("", "widget-common").getI18n,
                    n = (0, i.useContext)(h.cb).tradeType,
                    c = (0, t._)((0, u.d9)(), 1)[0],
                    y = (0, i.useCallback)((function(r) {
                        d.RR.emit("triggerModal", r)
                    }), []);
                return n === l.Gr.SPOT ? (0, o.jsxs)(k, {
                    children: [(0, o.jsx)(x, {
                        onClick: function() {
                            return window.location.href = (0, d.J1)(l.TP.DEPOSIT_URL, {
                                coin: c
                            })
                        },
                        children: r("trd-orderForm-deposit")
                    }), (0, o.jsx)(x, {
                        onClick: function() {
                            return window.location.href = (0, d.J1)(l.TP.WITHDRAWAL_URL, {
                                coin: c
                            })
                        },
                        children: r("trd-orderForm-withdraw")
                    })]
                }) : (0, o.jsxs)(k, {
                    children: [(0, o.jsx)(x, {
                        onClick: function() {
                            return y(s.cP.COOLOFF)
                        },
                        children: e("mcl-period-1")
                    }), (0, o.jsx)(x, {
                        onClick: function() {
                            return y(s.cP.TRANSTER)
                        },
                        children: r("trd-orderForm-transfer")
                    }), (0, o.jsx)(x, {
                        onClick: function() {
                            return y(s.cP.BORROW)
                        },
                        children: r("trd-orderForm-borrow")
                    }), (0, o.jsx)(x, {
                        onClick: function() {
                            return y(s.cP.REPAY)
                        },
                        children: r("trd-orderForm-repay")
                    })]
                })
            }
        }
    }
]);