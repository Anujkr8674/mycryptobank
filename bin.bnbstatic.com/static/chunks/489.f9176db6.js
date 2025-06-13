"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [489], {
        ILXR: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => m
            });
            var i = a("hrAD"),
                r = a("qoEP"),
                s = a("mXdx"),
                l = a("DTvD"),
                n = a("1lvF"),
                u = a("3I7B"),
                d = a("WLZf"),
                o = a("DsA/"),
                c = {
                    playWhenScrollIn: !1,
                    loop: !1
                },
                g = [{
                    title: {
                        key: "strategyFeatures-title-intuitiveAutomation",
                        defaultValue: "Intuitive Automation"
                    },
                    desc: {
                        key: "strategyFeatures-subtitle-intuitiveAutomation",
                        defaultValue: "Set up your algorithmic bot and automate your orders in a few clicks with TWAP, VP algos, and Grid trading."
                    },
                    lottieUrl: function() {
                        return "/static/images/strategy/landing/robot-animation.json"
                    }
                }, {
                    title: {
                        key: "strategyFeatures-title-trendingStrategies",
                        defaultValue: "Trending strategies"
                    },
                    desc: {
                        key: "strategyFeatures-subtitle-trendingStrategies",
                        defaultValue: "Replicate and customize the most profitable trading strategies on Spot and Futures Grid."
                    },
                    lottieUrl: function() {
                        return "/static/images/strategy/landing/trendingstrategies-animation.json"
                    }
                }, {
                    title: {
                        key: "strategyFeatures-title-deepLiquidity",
                        defaultValue: "Deep Liquidity"
                    },
                    desc: {
                        key: "strategyFeatures-subtitle-deepLiquidity",
                        defaultValue: "Optimize order executions and reduce slippage while capturing market trends on the largest exchange."
                    },
                    lottieUrl: function() {
                        return "/static/images/strategy/landing/coin-animation.json"
                    }
                }],
                y = function(e) {
                    var t = e.title,
                        a = e.desc,
                        i = e.lottieUrl,
                        r = (0, d.XY)().t;
                    return (0, s.jsxs)(n.Ay, {
                        className: "flex flex-col items-center",
                        children: [(0, s.jsx)(n.Ay, {
                            className: "h-[96px] w-[96px] mb-[18px]",
                            children: (0, s.jsx)(o.a, {
                                lottieJsonPage: i(),
                                options: c,
                                className: "w-[96px] h-[96px]"
                            })
                        }), (0, s.jsxs)(n.Ay, {
                            className: "text-center",
                            children: [(0, s.jsx)(n.Ay, {
                                className: "text-PrimaryText t-headline4 mb-[18px]",
                                children: r(t.key, {
                                    defaultValue: t.defaultValue
                                })
                            }), (0, s.jsx)(n.Ay, {
                                className: "text-PrimaryText t-body3",
                                children: r(a.key, {
                                    defaultValue: a.defaultValue
                                })
                            })]
                        })]
                    })
                };
            const m = function() {
                var e = (0, d.XY)().t;
                return (0, s.jsxs)(u.m, {
                    children: [(0, s.jsx)(n.Ay, {
                        className: "mb-[24px] text-PrimaryText t-headline4",
                        children: e("strategyFeatures-block-title", "Features")
                    }), (0, s.jsx)(n.Ay, {
                        className: "grid grid-rows-3 lg:grid-rows-none grid-cols-none lg:grid-cols-3 grid-flow-col gap-[24px]",
                        children: g.map((function(e, t) {
                            return (0, l.createElement)(y, (0, r._)((0, i._)({}, e), {
                                key: t
                            }))
                        }))
                    })]
                })
            }
        }
    }
]);