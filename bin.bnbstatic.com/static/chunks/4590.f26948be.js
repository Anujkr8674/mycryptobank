"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f0b35113-7880-5153-b355-993109c118f8")
    } catch (e) {}
}();
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [4590], {
        w56J: (e, t, l) => {
            l.r(t), l.d(t, {
                default: () => d
            });
            var s = l("mXdx"),
                n = l("DTvD"),
                i = l("iFsL"),
                a = l("HV0L"),
                u = l("pOh6"),
                c = l("lDj4");
            const d = ({
                candlestick: e
            }) => {
                const {
                    visible: t,
                    setVisible: l
                } = (0, n.useContext)(c.A), {
                    getI18n: d
                } = (0, i.P3)(), r = (0, n.useMemo)((() => d("delete-drawing", "All drawings will be permanently deleted")), [d]), o = (0, n.useCallback)((() => l(!1)), [l]), b = (0, n.useCallback)((() => {
                    e.executeActionByType(a.X2.Delete), l(!1)
                }), [e, l]);
                return (0, s.jsx)(u.x, {
                    visible: t,
                    text: r,
                    onCancel: o,
                    onConfirm: b
                })
            }
        }
    }
]);
//# debugId=f0b35113-7880-5153-b355-993109c118f8