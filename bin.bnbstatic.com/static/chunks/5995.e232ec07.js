"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [5995], {
        Dtic: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => j
            });
            var i = a("hrAD"),
                n = a("mXdx"),
                r = a("DTvD"),
                l = a("xqbL"),
                s = a.n(l),
                o = a("1lvF"),
                g = a("jor4"),
                d = a("3GQ7"),
                u = a("npfg"),
                c = a("UuPx"),
                p = a("Gii1"),
                m = a("3I7B"),
                h = a("Cr5V"),
                f = a("I/8y");
            var y = a("d12p"),
                k = a("5YBB"),
                x = a("WjQj"),
                v = a("QWVi"),
                T = a("WLZf"),
                P = a("gYIm"),
                _ = a("nK1b"),
                b = function(e) {
                    var t = e.title,
                        a = e.content,
                        i = e.isOpening,
                        r = e.rank,
                        l = e.handleClick,
                        c = (0, p.Qs)().isMobile;
                    return (0, n.jsxs)(o.Ay, {
                        className: s()("cursor-pointer rounded-[10px] mb-[16px]", {
                            "bg-SecondaryBg": i && !c,
                            "hover:bg-SecondaryBg": !c
                        }),
                        children: [(0, n.jsxs)(g.A, {
                            className: "justify-between items-center text-PrimaryText py-[16px] md:px-[24px]",
                            onClick: function() {
                                return l(t, r)
                            },
                            children: [(0, n.jsxs)(g.A, {
                                children: [(0, n.jsx)(g.A, {
                                    className: "border-[1px] border-solid border-Line rounded-[8px] p-[4px] h-[24px] min-w-[24px] md:h-[32px] md:w-[32px] justify-center items-center mr-[8px] md:mr-[16px]",
                                    children: r
                                }), (0, n.jsx)(o.Ay, {
                                    className: s()({
                                        "typography-headline5": !c,
                                        "typography-subtitle1": c
                                    }),
                                    children: "".concat(t)
                                })]
                            }), i && (0, n.jsx)(d.A, {
                                size: 16,
                                className: s()("text-PrimaryText shrink-0")
                            }), !i && (0, n.jsx)(u.A, {
                                size: 16,
                                className: s()("text-PrimaryText shrink-0")
                            })]
                        }), i && (0, n.jsx)(o.Ay, {
                            className: s()("text-SecondaryText pb-[22px] md:ml-[72px] md:mr-[72px]", {
                                "typography-body2": !c,
                                "typography-caption1": c
                            }),
                            children: a
                        })]
                    })
                };
            const j = function() {
                var e = (0, r.useState)(!1),
                    t = e[0],
                    a = e[1],
                    l = (0, r.useState)(""),
                    o = l[0],
                    d = l[1],
                    u = (0, p.HH)().t,
                    j = function() {
                        var e = (0, p.Qs)().isMobile,
                            t = (0, T.XY)().t,
                            a = (0, p.I7)(),
                            i = (0, h.L)({
                                currency: a,
                                isUseCache: !1
                            }),
                            l = i.isValidCheckReady,
                            o = i.checkIsValidOption,
                            g = l && o(v.Hj.TRADING_BOT_LIST),
                            d = s()("text-PrimaryYellow no-underline", {
                                "typography-subtitle1": !e,
                                "typography-caption1": e
                            });
                        return (0, r.useMemo)((function() {
                            return (0, y._)(g ? [{
                                optionKey: v.Hj.SPOT_GRID,
                                trackingKey: "landingPage-faq-spot-grid-1-title-v2",
                                title: t("landingPage-faq-spot-grid-1-title-v2", {
                                    defaultValue: "What Is Spot Grid Trading and How Does It Work"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-spot-grid-1-subtitle-v2",
                                    defaults: "Grid trading is a type of quantitative trading strategy. This trading bot automates buying and selling on spot trading. It is designed to place orders in the market at preset intervals within a configured price range. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.SPOT_GRID_1_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }] : []).concat([{
                                optionKey: v.Hj.SPOT_GRID,
                                trackingKey: "landingPage-faq-spot-grid-2-title-v2",
                                title: t("landingPage-faq-spot-grid-2-title-v2", {
                                    defaultValue: "How to Create a Spot Grid Trading Strategy on Binance"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-spot-grid-2-subtitle-v2",
                                    defaults: "You can create your own spot grid trading strategy on Binance by setting parameters or copying existing parameters from the Strategy Pool. Follow the step-by-step guide below to start spot grid trading. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.SPOT_GRID_2_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }], (0, y._)(g ? [{
                                optionKey: v.Hj.SPOT_GRID,
                                trackingKey: "landingPage-faq-spot-grid-3-title-v2",
                                title: t("landingPage-faq-spot-grid-3-title-v2", {
                                    defaultValue: "How to Use Spot Grid Trading Auto Parameters"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-spot-grid-3-subtitle-v2",
                                    defaults: "To help you build your own grid trading strategy, we will provide recommended parameters in this article. These include lower price limit, upper price limit, and grid count. You may use the new auto parameters function to create a grid trading strategy with just one click. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.SPOT_GRID_3_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }, {
                                optionKey: v.Hj.SPOT_GRID,
                                trackingKey: "landingPage-faq-spot-grid-4-title-v2",
                                title: t("landingPage-faq-spot-grid-4-title-v2", {
                                    defaultValue: "Binance Spot Grid Trading Parameters"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-spot-grid-4-subtitle-v2",
                                    defaults: "You can use Binance Spot Grid Trading in volatile markets when prices fluctuate within a specific range. Grid Trading attempts to make profits on small price changes. Through quantitative trading, it can help you trade rationally and avoid FOMO where possible. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.SPOT_GRID_4_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }] : []), [{
                                optionKey: v.Hj.FUTURES_GRID,
                                trackingKey: "landingPage-faq-futures-grid-1-title-v2",
                                title: t("landingPage-faq-futures-grid-1-title-v2", {
                                    defaultValue: "How to use the Strategy Trading Landing Page"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-futures-grid-1-subtitle-v2",
                                    defaults: "The new landing page provides users with a comprehensive display of Spot and Futures Grid Trading strategies along with their performance and popularity amongst users, while allowing traders to quickly replicate their parameters. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.FUTURES_GRID_1_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }, {
                                optionKey: v.Hj.FUTURES_GRID,
                                trackingKey: "landingPage-faq-futures-grid-2-title-v2",
                                title: t("landingPage-faq-futures-grid-2-title-v2", {
                                    defaultValue: "What Is Futures Grid Trading"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-futures-grid-2-subtitle-v2",
                                    defaults: "Futures Grid trading performs the best in volatile and sideways markets when prices fluctuate in a given range. This technique attempts to make profits on small price changes. The more grids you include, the greater the frequency of trades will be. However, it comes with an expense as the profit you make from each order is lower. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.FUTURES_GRID_2_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }, {
                                optionKey: v.Hj.FUTURES_GRID,
                                trackingKey: "landingPage-faq-futures-grid-3-title-v2",
                                title: t("landingPage-faq-futures-grid-3-title-v2", {
                                    defaultValue: "What Is Long/Short Grid Trading"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-futures-grid-3-subtitle-v2",
                                    defaults: "Long/Short Grid is a trend-following strategy that allows users to trade with the market trend within a grid trading system. This means you can open an initial position (long or short) according to your analysis, while simultaneously placing buy-limit and sell-limit orders at predetermined intervals to capitalize on market volatility and ranging condition. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.FUTURES_GRID_3_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }, {
                                optionKey: v.Hj.FUTURES_GRID,
                                trackingKey: "landingPage-faq-futures-grid-4-title-v2",
                                title: t("landingPage-faq-futures-grid-4-title-v2", {
                                    defaultValue: "Futures Grid Trading Auto Parameters Guide"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-futures-grid-4-subtitle-v2",
                                    defaults: "Binance provides recommended parameters to help improve user experience and reduce the learning curve. These include lower price limit, upper price limit, and grid count. With the new auto parameters function, anyone will be able to create a grid trading strategy with just one click. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.FUTURES_GRID_4_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }, {
                                optionKey: v.Hj.FUTURES_GRID,
                                trackingKey: "landingPage-faq-futures-grid-5-title-v2",
                                title: t("landingPage-faq-futures-grid-5-title-v2", {
                                    defaultValue: "How to Use TWAP Algorithm on Binance Futures"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-futures-grid-5-subtitle-v2",
                                    defaults: "Part of the Binance Futures Execution Algorithm API solutions, TWAP trading algorithm allows users to programmatically leverage Binance\u2019s in-house algorithmic trading capability in order to disperse a large order into smaller quantities and execute them at regular intervals automatically to minimize price impact. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.FUTURES_GRID_5_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }, {
                                optionKey: v.Hj.FUTURES_GRID,
                                trackingKey: "landingPage-faq-futures-grid-6-title-v2",
                                title: t("landingPage-faq-futures-grid-6-title-v2", {
                                    defaultValue: "How to Use Volume Participation Algorithm on Binance Future"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-futures-grid-6-subtitle-v2",
                                    defaults: "The Volume Participation (VP) trading algorithm is an opportunistic algorithmic execution strategy that enables the execution of larger orders with specified urgency level. It aims to perform a trade at a pace that approximately matches a portion of the real-time market volume by respecting the targeted volume participation level. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.FUTURES_GRID_6_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }, {
                                optionKey: v.Hj.FUTURES_GRID,
                                trackingKey: "landingPage-faq-futures-grid-7-title-v2",
                                title: t("landingPage-faq-futures-grid-7-title-v2", {
                                    defaultValue: "Strategy Trading Disclaimers"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-futures-grid-7-subtitle-v2",
                                    defaults: "The Strategy Trading Disclaimers are inseparable parts of our Binance Terms of Use and Binance Futures Service Agreement. These documents should be read together and have the same meaning when used herein. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.FUTURES_GRID_7_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }, {
                                optionKey: v.Hj.REBALANCING_MANUAL,
                                trackingKey: "landingPage-faq-rebalancing-bot-1-title-v2",
                                title: t("landingPage-faq-rebalancing-bot-1-title-v2", {
                                    defaultValue: "What Is Rebalancing Bot and Frequently Asked Questions"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-rebalancing-bot-1-subtitle-v2",
                                    defaults: "The Rebalancing Bot will automatically adjust your portfolio position in the token combination of your choice. By buying low and selling high, your strategy can maintain the same ratio of asset values through rebalancing at preset intervals or thresholds. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.REBALANCING_BOT_1_V2,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }, {
                                optionKey: v.Hj.OTC_ALGO,
                                trackingKey: "landingPage-faq-algoorder-1-title-v2",
                                title: t("landingPage-tutorial-algoOrderTitle1", {
                                    defaultValue: "What are Algorithmic Orders? TWAP and POV Strategies Explained"
                                }),
                                content: (0, n.jsx)(k.x, {
                                    t: t,
                                    i18nKey: "landingPage-faq-algoorder-1-subtitle",
                                    defaults: "Algorithmic (Algo) Orders are intelligent orders that facilitate the execution of large or illiquid trades over a period of time in smaller blocks. They optimize execution based on your selected parameters to reduce execution costs and mitigate market impact. <Link>FAQ</Link>",
                                    components: {
                                        Link: (0, n.jsx)(x.Z, {
                                            className: d,
                                            path: P.TP.ALGO_ORDER_FAQ,
                                            target: "_blank"
                                        })
                                    }
                                })
                            }])
                        }), [t, g, d])
                    }(),
                    w = function(e) {
                        var t = (0, f.I)(),
                            a = (0, h.L)({
                                currency: t,
                                isUseCache: !1
                            }),
                            i = a.checkIsValidOption,
                            n = a.isValidCheckReady,
                            l = e;
                        return (0, r.useMemo)((function() {
                            return n ? l.filter((function(e) {
                                var t = e.optionKey;
                                return !t || !!i(t)
                            })) : []
                        }), [i, l, n])
                    }(j),
                    A = (0, c.nE)();
                (0, r.useEffect)((function() {
                    !t && w.length > 0 && (d(w[0].title), a(!0))
                }), [t, w]);
                var L = (0, r.useCallback)((function(e, t) {
                    d(e === o ? "" : e), A(_.ll.click, {
                        $element_id: "faq",
                        module: "faq",
                        df_3: String(t)
                    })
                }), [o, A]);
                return w.length > 0 ? (0, n.jsxs)(m.m, {
                    children: [(0, n.jsx)(g.A, {
                        className: "typography-headline1 pb-[16px] md:pb-[40px] justify-center",
                        children: u("strategyFAQ-block-title", "FAQ")
                    }), w.map((function(e, t) {
                        return (0, n.jsx)(b, (0, i._)({
                            rank: t + 1,
                            isOpening: o === e.title,
                            handleClick: L
                        }, e), t)
                    }))]
                }) : null
            }
        },
        "3GQ7": (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var i = a("wIZF"),
                n = a("DTvD"),
                r = a.n(n),
                l = a("TQvm");
            const s = function(e) {
                return r().createElement(l.A, (0, i.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), r().createElement("path", {
                    d: "M3 10.5v3h18v-3H3z",
                    fill: "currentColor"
                }))
            }
        },
        npfg: (e, t, a) => {
            a.d(t, {
                A: () => s
            });
            var i = a("wIZF"),
                n = a("DTvD"),
                r = a.n(n),
                l = a("TQvm");
            const s = function(e) {
                return r().createElement(l.A, (0, i.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), r().createElement("path", {
                    d: "M13.5 3h-3v7.5H3v3h7.5V21h3v-7.5H21v-3h-7.5V3z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);