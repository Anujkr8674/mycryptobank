"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [2973], {
        q6cC: (e, t, l) => {
            l.r(t), l.d(t, {
                OriginalCandlestickSetting: () => s,
                default: () => u
            });
            var n = l("mXdx"),
                a = l("DTvD"),
                o = l("tMSF"),
                i = l("T0Sc"),
                r = l("rPbR"),
                c = l("lrni");
            const s = ({
                    namespace: e,
                    onClick: t,
                    showDot: l
                }) => {
                    const s = (0, r.createStore)(e),
                        [u] = s(r.getCandlestickReference),
                        {
                            getI18n: d
                        } = (0, i.o)("", "kline-ui"),
                        v = (0, a.useMemo)((() => d("chart-style", {
                            defaultValue: "Chart Style"
                        })), [d]),
                        h = (0, a.useCallback)((e => {
                            u ? .showSettingDialog(), t ? .(e)
                        }), [t, u]);
                    return (0, n.jsx)(c.I, {
                        tooltip: v,
                        element: o.A,
                        onClick: h,
                        showDot: l
                    })
                },
                u = s
        },
        tMSF: (e, t, l) => {
            l.d(t, {
                A: () => r
            });
            var n = l("wIZF"),
                a = l("DTvD"),
                o = l.n(a),
                i = l("qqbu");
            const r = function(e) {
                return o().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 4H3v3h18V4zM8 10.5H3v3h5v-3zM3 17h5v3H3v-3zm12.5-8.1l5.5 3.175v6.35l-5.5 3.176-5.5-3.176v-6.35l5.5-3.176zm2.25 6.35a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);