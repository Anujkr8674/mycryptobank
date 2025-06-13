"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "407fa4c0-8b6e-5bbe-8c5c-c09e9acca5c4")
    } catch (e) {}
}();
(self.webpackChunkconvert_ui = self.webpackChunkconvert_ui || []).push([
    [844], {
        VFEE: (n, o, t) => {
            t.d(o, {
                default: () => v
            });
            var e = t("jg1C"),
                c = t("DTvD"),
                r = t.n(c),
                s = t("eDpA"),
                a = t("+1dI"),
                i = t("p1Ck"),
                u = t("P3FW"),
                C = t("Srb9");

            function m() {
                var n = (0, u.s9)(["convert-ui_convert"]).t,
                    o = (0, C.L)(),
                    t = o.fromCoin,
                    c = o.toCoin,
                    r = (0, i.BF)(n, "", {
                        fromCoin: t,
                        toCoin: c,
                        symbol: "".concat(t, " to ").concat(c)
                    });
                return (0, e.jsxs)(e.Fragment, {
                    children: [(0, e.jsx)(a.A, {
                        metaData: r
                    }), (0, e.jsx)(s.A, {})]
                })
            }
            const v = r().memo(m)
        }
    }
]);
//# debugId=407fa4c0-8b6e-5bbe-8c5c-c09e9acca5c4