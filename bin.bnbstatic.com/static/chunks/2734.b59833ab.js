"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [2734], {
        HxrR: (t, e, r) => {
            r.r(e), r.d(e, {
                default: () => m
            });
            var o = r("hrAD"),
                i = r("mXdx"),
                s = r("DTvD"),
                p = r.n(s),
                n = r("NJD8"),
                u = r("Xz3K"),
                d = r("J+BU"),
                c = r("bQ69"),
                a = {
                    price: {
                        boxOffset: 0,
                        placement: "top",
                        tipWidth: 280,
                        i18nKey: "trd-shortcuts-price-tips",
                        positionTop: "-30px",
                        shortcutKeys: [
                            [u.mC.MODIFY_INCREASE_PRICE, u.mC.MODIFY_DECREASE_PRICE]
                        ]
                    },
                    quantity: {
                        boxOffset: 0,
                        placement: "bottom",
                        tipWidth: 300,
                        i18nKey: "trd-shortcuts-amount-tips",
                        positionTop: "-30px",
                        shortcutKeys: [
                            [u.mC.MODIFY_INCREASE_AMOUNT, u.mC.MODIFY_DECREASE_AMOUNT]
                        ]
                    },
                    orderBuy: {
                        boxOffset: 0,
                        placement: "top",
                        tipWidth: 180,
                        i18nKey: "trd-shortcuts-buyorder-tips",
                        positionTop: "-25px",
                        shortcutKeys: [
                            [u.mC.TRADING_BUY]
                        ]
                    },
                    orderSell: {
                        boxOffset: 0,
                        placement: "top",
                        tipWidth: 180,
                        i18nKey: "trd-shortcuts-sellorder-tips",
                        positionTop: "-25px",
                        shortcutKeys: [
                            [u.mC.TRADING_SELL]
                        ]
                    }
                },
                l = function(t) {
                    var e = t.name,
                        r = void 0 === e ? "price" : e,
                        s = t.side,
                        p = t.layout,
                        u = void 0 === p ? "" : p;
                    if (!["price", "quantity", "order"].includes(r)) return (0, i.jsx)(i.Fragment, {});
                    if (u !== c.ug && ("quantity" === r || "price" === r) && s === d.Vl.SELL) return (0, i.jsx)(i.Fragment, {});
                    var l = "order" === r ? s === d.Vl.SELL ? "orderSell" : "orderBuy" : r;
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(n.default, (0, o._)({}, a[l]))
                    })
                };
            const m = p().memo(l)
        }
    }
]);