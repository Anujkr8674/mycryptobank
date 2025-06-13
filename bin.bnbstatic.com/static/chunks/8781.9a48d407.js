"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [8781], {
        biAF: (e, i, t) => {
            t.r(i), t.d(i, {
                default: () => p
            });
            var o = t("iKvg"),
                n = t("hrAD"),
                a = t("qoEP"),
                s = t("mguP"),
                l = t("mXdx"),
                c = t("DTvD"),
                r = t("Qhol"),
                u = t("Ov3/"),
                d = t("iwDq");
            const p = function(e) {
                var i, t, p, v = e.currentSymbol,
                    h = e.baseAsset,
                    _ = e.quoteAsset,
                    g = e.isPro,
                    w = (0, s._)((0, r.sL)(), 2),
                    f = w[0],
                    b = (0, s._)(w[1], 2),
                    m = b[0],
                    A = b[1];
                i = v || f, t = h || m, p = _ || A;
                var C = (0, s._)((0, u.A)("lowCirculationWarning", {}), 2),
                    P = C[0],
                    x = C[1],
                    D = (0, r.hFK)(),
                    j = "".concat(t, "/").concat(p),
                    k = D[i],
                    y = "closed" === (null === P || void 0 === P ? void 0 : P[i]),
                    q = (null === k || void 0 === k ? void 0 : k.lowCirculation) || !1,
                    F = (0, r.CUO)().getI18n,
                    K = (0, c.useMemo)((function() {
                        return (0, l.jsx)("span", {
                            className: "description",
                            children: F("low-circulating-warning", {
                                coinPair: j,
                                interpolation: {
                                    escapeValue: !1
                                },
                                defaultValue: "Due to a low circulating supply (<20%), ".concat(j, " is subject to high price volatility. Please trade cautiously.")
                            })
                        })
                    }), [F]);
                return y || !q ? (0, l.jsx)(l.Fragment, {}) : (0, l.jsx)(d.A, {
                    innerText: K,
                    isPro: g,
                    handleClose: function() {
                        x((0, a._)((0, n._)({}, P), (0, o._)({}, i, "closed")))
                    }
                })
            }
        }
    }
]);