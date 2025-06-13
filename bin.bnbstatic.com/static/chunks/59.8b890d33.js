"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [59], {
        aluQ: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => c
            });
            var r = t("mguP"),
                l = t("mXdx"),
                s = t("DTvD"),
                u = t("PaVQ"),
                n = t("jor4"),
                i = t("zjzf"),
                d = t("Bdbj"),
                o = t("9PqG"),
                g = t("WLZf"),
                T = t("3608"),
                f = t("qRru"),
                p = t("nK1b");
            const c = function() {
                var e = (0, g.XY)().t,
                    a = (0, o.ok)(),
                    t = (0, r._)((0, u.FH)({
                        name: ["market", "strategyType"]
                    }), 2),
                    c = t[0],
                    m = t[1],
                    y = (0, i.o)({
                        strategyType: m,
                        symbol: c,
                        lang: a
                    }).marketOptions,
                    _ = (0, s.useCallback)((function(e) {
                        (0, f.u4)(p.ll.click, {
                            module: p.DM.BOT_MARKET,
                            $element_id: "leverage_filter",
                            pageName: p.eQ.LANDING,
                            df_source: p.vV.futuresGrid,
                            df_leverage: e
                        })
                    }), []),
                    x = (0, s.useCallback)((function(e) {
                        (0, f.u4)(p.ll.click, {
                            module: p.DM.BOT_MARKET,
                            $element_id: "UMCM_filter",
                            pageName: p.eQ.LANDING,
                            df_source: p.vV.futuresGrid,
                            df_business: e === d.Bx.STRATEGY_TYPE_OPTIONS[0].value ? "um_grid" : "cm_grid"
                        })
                    }), []);
                return (0, l.jsxs)(n.A, {
                    className: "gap-[16px] flex-wrap",
                    children: [(0, l.jsx)(T.tX, {
                        name: "strategyType",
                        strategyType: "futuresGrid",
                        label: e("usds-m", {
                            defaultValue: "USD\u24c8-M"
                        }),
                        options: d.Bx.STRATEGY_TYPE_OPTIONS,
                        onTrack: x
                    }), (0, l.jsx)(T.tX, {
                        search: !0,
                        name: "market",
                        strategyType: "futuresGrid",
                        label: e("landingPage-tradeAnalytics-market", {
                            defaultValue: "Market"
                        }),
                        options: y,
                        reactPopperProps: {
                            popperWidth: 200
                        }
                    }), (0, l.jsx)(T.tX, {
                        name: "direction",
                        strategyType: "futuresGrid",
                        label: e("landingPage-tradeAnalytics-direction", {
                            defaultValue: "Direction"
                        }),
                        options: d.Bx.DIRECTION_OPTIONS
                    }), (0, l.jsx)(T.tX, {
                        name: "runningTime",
                        strategyType: "futuresGrid",
                        label: e("runtime", {
                            defaultValue: "Runtime"
                        }),
                        options: d.Bx.RUNNING_TIME_OPTIONS
                    }), (0, l.jsx)(T.tX, {
                        name: "roi",
                        strategyType: "futuresGrid",
                        label: e("landingPage-strategy-roi", {
                            defaultValue: "ROI"
                        }),
                        options: d.Bx.ROI_OPTIONS
                    }), (0, l.jsx)(T.tX, {
                        name: "leverage",
                        strategyType: "futuresGrid",
                        label: e("Leverage", {
                            defaultValue: "Leverage"
                        }),
                        options: d.Bx.LEVERAGE_OPTIONS,
                        onTrack: _
                    }), (0, l.jsx)(T.tX, {
                        name: d.eo.sevenDayMdd,
                        strategyType: "futuresGrid",
                        label: e("botMarketPlace-filter-sevenDayMdd", {
                            defaultValue: "7D MDD"
                        }),
                        options: d.Bx.STRATEGY_7D_MDD
                    })]
                })
            }
        }
    }
]);