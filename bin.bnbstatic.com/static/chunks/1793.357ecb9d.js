"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [1793], {
        Wepx: (e, t, o) => {
            o.r(t), o.d(t, {
                GoDate: () => u,
                default: () => i
            });
            var l = o("mXdx"),
                n = o("DTvD"),
                a = o("G8Jp"),
                c = o("T0Sc"),
                r = o("rPbR"),
                s = o("lrni");
            const u = ({
                    namespace: e,
                    onClick: t,
                    showDot: o
                }) => {
                    const u = (0, r.createStore)(e),
                        [i] = u(r.getCandlestickReference),
                        {
                            getI18n: h
                        } = (0, c.o)("", "kline-ui"),
                        v = (0, n.useMemo)((() => h("contextMenu-goDate", {
                            defaultValue: "Time Tool"
                        })), [h]),
                        d = (0, n.useCallback)((e => {
                            i ? .showTimeTool(), t ? .(e)
                        }), [t, i]);
                    return (0, l.jsx)(s.I, {
                        element: a.A,
                        onClick: d,
                        tooltip: v,
                        showDot: o
                    })
                },
                i = u
        },
        G8Jp: (e, t, o) => {
            o.d(t, {
                A: () => r
            });
            var l = o("wIZF"),
                n = o("DTvD"),
                a = o.n(n),
                c = o("qqbu");
            const r = function(e) {
                return a().createElement(c.A, (0, l.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 3H7v2H4v3h16V5h-3V3h-3v2h-4V3zm10 7H4v10h16V10zm-10 2v2h7v2h-7v2l-3-3 3-3z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);