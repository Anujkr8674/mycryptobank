"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [8004], {
        e3WN: (e, t, n) => {
            n.d(t, {
                Oc: () => c,
                PO: () => s,
                dh: () => l
            });
            var r = n("mguP"),
                o = n("DTvD"),
                i = n("bQ69"),
                u = n("hAzz"),
                a = n("qoEh"),
                s = function() {
                    return (0, o.useMemo)((function() {
                        return !i.S$ && (null === window || void 0 === window ? void 0 : window.location.href.indexOf("multipleChart")) > -1
                    }), [])
                },
                c = function() {
                    return function(e) {
                        var t = e.isMultipleChartPage,
                            n = e.tradeType;
                        if (t) switch (n) {
                            case "CROSS":
                            case "ISOLATED":
                                return "margin_multi_charts";
                            default:
                                return "spot_multi_charts"
                        }
                        switch (n) {
                            case "CROSS":
                                return "cross_margin_trading";
                            case "ISOLATED":
                                return "isolated_margin_trading";
                            default:
                                return "spot_trading"
                        }
                    }({
                        tradeType: (0, r._)((0, a.Gr)(), 1)[0],
                        isMultipleChartPage: (0, o.useMemo)((function() {
                            return window.location.href.indexOf("multipleChart") > -1
                        }), [])
                    })
                },
                l = function() {
                    var e = (0, r._)((0, a.Gr)(), 1)[0];
                    return (0, u.V$)(e) ? "margin" : "spot"
                }
        },
        fTEi: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => T
            });
            var r = n("hrAD"),
                o = n("qoEP"),
                i = n("mguP"),
                u = n("DTvD"),
                a = n("Ov3/"),
                s = n("1CC6"),
                c = n("7ekG"),
                l = n("81MD"),
                d = n("iuyg"),
                f = n("wtFP"),
                h = n("Qhol"),
                _ = n("e3WN"),
                p = n("bQ69"),
                g = n("yKn7"),
                m = n("ZFFV"),
                w = n.n(m),
                v = (n("c6Y9"), n("g77m")),
                y = n.n(v),
                C = w()().fetch,
                S = new g.A,
                O = "monitor-uid",
                D = [],
                P = (S.get(O), function() {
                    if (D.length) try {
                        C("https://frontend-m.binance.cloud/monitor/v1/log", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "data-list": D
                            })
                        }).then((function() {
                            D = []
                        }))
                    } catch (e) {
                        console.error("Monitor failed to send log.")
                    }
                });
            y()(P, 1500);
            const T = function() {
                var e = (0, h.by5)(),
                    t = (0, i._)((0, h.Grl)(), 1)[0],
                    n = (0, h.DPo)().isLight,
                    g = (0, i._)((0, a.A)(p.A3), 1)[0],
                    m = (0, u.useState)(!1),
                    w = m[0],
                    v = m[1],
                    y = (0, h.FH0)(),
                    C = (0, h.Pyz)().userId,
                    D = (0, _.Oc)(),
                    P = (0, _.dh)();
                t !== p.wP.ISOLATED && t !== p.wP.CROSSED || delete y.positionsMark;
                var T = (0, u.useRef)({});
                return (0, u.useEffect)((function() {
                    var e = {
                        tag: "tradeng",
                        layout: g,
                        pageName: D,
                        df_source: P
                    };
                    T.current = (0, o._)((0, r._)({}, e), {
                        bnc_uuid: s.U.read(p.eu.BNC_UUID) || ""
                    })
                }), [P, g, D]), (0, u.useEffect)((function() {
                    if (!w) try {
                        var t = (0, l.A)({
                            sensorsConfig: {
                                server_url: p.LD,
                                staticHost: p.K5,
                                batch_send: !0,
                                heatmap: {
                                    useCapture: !0,
                                    collect_elements: "all",
                                    scroll_notice_map: "default",
                                    clickmap: "default",
                                    custom_property: function(e) {
                                        if (e) return T.current
                                    }
                                },
                                preset_properties: {
                                    url: !0
                                }
                            },
                            ableGA: "test" !== p.Zu
                        }).sensors;
                        t.quick("autoTrack", (0, r._)({}, (0, r._)({
                            version: p.Hw,
                            etag: p.Hw,
                            color: e,
                            theme: n ? p.T : p.nd
                        }, T.current, y), p.Ui ? {
                            channel: p.Ui
                        } : {})), (0, c.t)((function() {
                            (0, f.cc)(t), v(!0)
                        }))
                    } catch (o) {
                        console.log("senor init error", o)
                    }
                }), [w, y, n, e]), (0, u.useEffect)((function() {
                    var e;
                    C && ((0, d.A)(C), (e = C) && S.set(O, e), "undefined" !== typeof window.Sentry && window.Sentry.setUser({
                        id: C
                    }))
                }), [C]), null
            }
        }
    }
]);