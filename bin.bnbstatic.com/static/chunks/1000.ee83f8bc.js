"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [1e3], {
        SFmo: (n, t, e) => {
            e.r(t), e.d(t, {
                default: () => h
            });
            var i = e("mXdx"),
                o = e("DTvD"),
                r = e("Qhol"),
                s = e("qH9a"),
                u = e("29ZD"),
                a = e("Pn24"),
                c = e("g11u"),
                f = e("6COY"),
                l = e("6Gc8"),
                m = e("MIKm"),
                d = function() {
                    return (0, l.x)(), (0, f.Af)(), (0, c.U)(), (0, a.l)(), (0, u.Z)(), (0, s.a)(), (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsx)(m.w8, {})
                    })
                };
            const v = (0, o.memo)(d);
            var w = e("FA/f"),
                x = function() {
                    return (0, w.l)(), (0, i.jsx)(i.Fragment, {})
                };
            const D = (0, o.memo)(x);
            var b = function() {
                return (0, r.nHk)() ? (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsx)(D, {}), (0, i.jsx)(v, {})]
                }) : null
            };
            const h = (0, o.memo)(b)
        },
        "6Gc8": (n, t, e) => {
            e.d(t, {
                x: () => v
            });
            var i, o, r = e("bQ69"),
                s = e("Qhol"),
                u = e("iOZB"),
                a = e("DTvD"),
                c = e("wtFP"),
                f = e("qFGl"),
                l = e.n(f),
                m = (0, r.D$)(),
                d = l()((function() {
                    (0, c.u4)("ws_nodata", {
                        source: "spot",
                        isOnline: window.navigator.onLine,
                        visibilityState: document.visibilityState
                    })
                })),
                v = function() {
                    var n = (0, s.nHk)();
                    (0, a.useEffect)((function() {
                        if (n) return m.getStreamTickers().subscribe((function() {
                            i = Date.now()
                        }))
                    }), [n]), (0, u.A)((function() {
                        i && Date.now() - i >= 5e3 && o !== i && (o = i, d())
                    }), 1e3)
                }
        }
    }
]);