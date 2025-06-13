"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b0267833-5a0d-5926-86ac-a81c919bc90c")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [339], {
        "4j8I": (e, n, r) => {
            r.d(n, {
                default: () => l
            });
            var s = r("TrCV"),
                t = r("twSe"),
                c = r("DTvD"),
                u = r("5f9E"),
                i = r("g8FI"),
                a = function(e) {
                    var n = e.children;
                    return (0, s.jsx)(u.D, {
                        children: (0, s.jsx)(i.m, {
                            children: n
                        })
                    })
                };
            const h = (0, c.memo)(a);
            const l = function() {
                return (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(h, {
                        children: (0, s.jsx)(t.A, {})
                    })
                })
            }
        }
    }
]);
//# debugId=b0267833-5a0d-5926-86ac-a81c919bc90c