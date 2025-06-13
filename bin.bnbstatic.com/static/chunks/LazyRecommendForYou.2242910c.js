"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "35229632-58ed-5e30-b75c-ad9096d160a2")
    } catch (e) {}
}();
(self.webpackChunkusercenter_wallet_ui = self.webpackChunkusercenter_wallet_ui || []).push([
    [5747], {
        baTz: (e, s, l) => {
            l.r(s), l.d(s, {
                default: () => c
            });
            var t = l("TrCV"),
                r = (l("DTvD"), l("AGKK")),
                a = l("lGeg"),
                u = l("i9es");
            const c = function() {
                var e = (0, u.sx)().totalAssetBalance;
                return Number(e) > 0 ? (0, t.jsx)(r.Ay, {
                    className: "pc:mt-xl mt-[64px]",
                    children: (0, t.jsx)(a.d2, {
                        biz: "overview"
                    })
                }) : null
            }
        }
    }
]);
//# debugId=35229632-58ed-5e30-b75c-ad9096d160a2