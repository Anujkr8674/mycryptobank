"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "708f50d7-060f-573b-9758-1254bc622139")
    } catch (e) {}
}();
(self.webpackChunkmuses_ui = self.webpackChunkmuses_ui || []).push([
    [957], {
        DiIn: (e, s, n) => {
            n.d(s, {
                A: () => d
            });
            var r = n("BK7R"),
                u = n("QUKP"),
                a = n("jg1C"),
                t = n("DTvD"),
                c = n("Srb9"),
                l = n("VmDy"),
                i = n("ITjs");
            const d = function() {
                var e = (0, c.L)(),
                    s = e.ssrProps,
                    n = e.stopRender,
                    d = (0, i.Bd)().language;
                return n ? (0, a.jsx)(t.Fragment, {}) : (0, a.jsxs)(a.Fragment, {
                    children: [(0, a.jsx)(l.I4, {}), (0, a.jsx)(l.wK, (0, u.A)((0, r.A)({}, s), {
                        locale: d,
                        enableTheme: !0
                    }))]
                })
            }
        },
        "5xuc": (e, s, n) => {
            n.d(s, {
                default: () => r.A
            });
            var r = n("DiIn")
        }
    }
]);
//# debugId=708f50d7-060f-573b-9758-1254bc622139