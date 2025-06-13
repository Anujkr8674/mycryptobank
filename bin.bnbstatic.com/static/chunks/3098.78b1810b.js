"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [3098], {
        oeN8: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => U
            });
            var n = a("mXdx"),
                i = a("DTvD"),
                r = a.n(i),
                o = a("1lvF"),
                l = a("hbgo"),
                s = a("UuPx"),
                u = a("WLZf"),
                d = a("3I7B"),
                g = a("C01/"),
                c = a("IWST"),
                p = a("gYIm"),
                h = a("YZbU"),
                m = a("nK1b"),
                y = a("hrAD"),
                f = a("mguP"),
                T = a("xqbL"),
                b = a.n(T),
                x = a("hxBv"),
                P = a("WjPW"),
                v = a("Gii1"),
                w = a("jor4"),
                k = a("4dH7"),
                A = a("shb9"),
                I = a("wIZF"),
                C = a("TQvm");
            const _ = function(e) {
                return r().createElement(C.A, (0, I.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), r().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 12a9 9 0 1118 0 9 9 0 01-18 0zm8.934 3.5H10v-7h1.934L16 12l-4.066 3.5z",
                    fill: "currentColor"
                }))
            };
            var V = a("ZEpL"),
                S = a("5E2b");
            const B = ({
                    path: e = "",
                    title: t = "",
                    padding: a,
                    iframePath: i = "https://fast.wistia.net/embed/iframe/",
                    wistiaIframeOptions: r
                }) => (0, n.jsx)(S.A, {
                    className: "wistia_responsive_padding",
                    style: {
                        padding: `${a||"56.25% 0 0 0"}`,
                        position: "relative"
                    },
                    children: (0, n.jsx)("div", {
                        className: "wistia_responsive_wrapper",
                        style: {
                            height: "100%",
                            left: 0,
                            position: "absolute",
                            top: 0,
                            width: "100%"
                        },
                        children: (0, n.jsx)("iframe", {
                            className: "wistia_embed",
                            src: `${i}${e}`,
                            title: t,
                            allow: "autoplay; fullscreen",
                            allowtransparency: "true",
                            frameBorder: "0",
                            scrolling: "no",
                            name: "wistia_embed",
                            allowFullScreen: !0,
                            width: "100%",
                            height: "100%",
                            ...r
                        })
                    })
                }),
                N = r().memo(B);
            var j = a("bznE"),
                D = a("KPPo"),
                F = function(e) {
                    var t = e.title,
                        a = e.video,
                        r = e.onClose,
                        l = e.isOpen,
                        s = (0, u.XY)().t,
                        d = (0, i.useCallback)((function() {
                            return (0, n.jsx)(j.A, {
                                className: "float-right min-w-full md:min-w-[128px]",
                                onClick: r,
                                children: s("common-ok", {
                                    defaultValue: "OK"
                                })
                            })
                        }), [r, s]);
                    return (0, n.jsx)(n.Fragment, {
                        children: a && (0, n.jsx)(D.X, {
                            title: (0, n.jsx)(o.Ay, {
                                className: "typography-headline5 text-PrimaryText mb-[20px]",
                                children: t
                            }),
                            modalSize: "middle",
                            isVisible: l,
                            onClose: r,
                            renderFooter: d,
                            children: (0, n.jsx)(N, {
                                path: a
                            })
                        })
                    })
                };
            const G = function(e) {
                var t = e.itemIndex,
                    a = e.title,
                    r = e.content,
                    l = e.strategyType,
                    d = e.configIndex,
                    g = e.link,
                    c = e.video,
                    p = e.variant,
                    h = (0, u.XY)().t,
                    y = (0, v.Qs)().isMobile,
                    f = function(e, t) {
                        switch (e) {
                            case "basic":
                                return "tutorial-basiccontent".concat(t, ".png");
                            case "futuresGrid":
                                return "tutorial-futurescontent".concat(t, ".png");
                            case "spotGrid":
                                return "tutorial-spotcontent".concat(t, ".png");
                            case "autoInvest":
                                return "tutorial-autoinvestcontent".concat(t, ".png");
                            case "rebalancingBot":
                                return "tutorial-rebalancingcontent".concat(t, ".png");
                            case "spotDca":
                                return "tutorial-dcacontent".concat(t, ".png");
                            case "arbitrage":
                                return "tutorial-arbitrage".concat(t, ".png");
                            case "algoOrder":
                                return "tutorial-algoordercontent".concat(t, ".png");
                            case "algoOrder-twap":
                                return "tutorial-algoordertwapcontent".concat(t, ".png");
                            case "algoOrder-vp":
                                return "tutorial-algoordervpcontent".concat(t, ".png");
                            default:
                                return ""
                        }
                    }(l, d),
                    T = (0, i.useState)(!1),
                    b = T[0],
                    x = T[1],
                    P = (0, s.nE)(),
                    I = (0, i.useCallback)((function() {
                        var e = l ? m.vV[l] : m.vV.strategyTrading;
                        if ("arbitrage" === l) return P(m.ll.click, {
                            module: m.DM.BODY,
                            pageName: m.eQ.ACADEMY,
                            clientType: m.Yx,
                            eventName: m.b8.strategyLanding,
                            df_source: e,
                            $element_id: "arbitrage_article",
                            $url: f,
                            ElementTargetUrl: g
                        }), void window.open(g, "_blank");
                        c ? (P(m.ll.click, {
                            module: m.DM.BODY,
                            pageName: m.eQ.ACADEMY,
                            clientType: m.Yx,
                            eventName: m.b8.strategyLanding,
                            df_source: e,
                            $element_id: "watch_video",
                            df_3: String(t + 1)
                        }), x(!0)) : (P(m.ll.click, {
                            module: "popup" === p ? m.DM.BODY : m.DM.TUTORIAL,
                            pageName: "popup" === p ? m.eQ.ACADEMY : m.eQ.LANDING,
                            clientType: m.Yx,
                            eventName: m.b8.strategyLanding,
                            df_source: e,
                            $element_id: "learn_more",
                            df_3: String(t + 1)
                        }), window.open(g, "_blank"))
                    }), [l, c, P, f, g, t, p]);
                return (0, n.jsxs)(o.Ay, {
                    children: [y ? (0, n.jsxs)(o.Ay, {
                        className: "p-[16px] rounded-[16px] border border-solid border-Line mb-[16px]",
                        onClick: I,
                        children: [(0, n.jsx)(o.Ay, {
                            className: "overflow-hidden typography-subtitle2 text-PrimaryText mb-[8px] line-clamp-2",
                            children: a
                        }), (0, n.jsx)(o.Ay, {
                            className: "typography-body3 text-PrimaryText line-clamp-2 mb-[8px]",
                            children: r
                        }), (0, n.jsxs)(w.A, {
                            className: "items-center",
                            children: [(0, n.jsx)(o.Ay, {
                                className: "typography-subtitle3 text-PrimaryText mr-[8px]",
                                children: c ? h("watch-video", {
                                    defaultValue: "Watch Video"
                                }) : h("learn-more", {
                                    defaultValue: "Learn More"
                                })
                            }), (0, n.jsx)(A.A, {
                                className: "text-[16px] text-PrimaryText"
                            })]
                        })]
                    }) : (0, n.jsx)(o.Ay, {
                        className: "rounded-[16px] md:h-[156px] p-[16px] border border-solid border-Line hover:cursor-pointer hover:border-PrimaryYellow",
                        onClick: I,
                        children: (0, n.jsxs)(w.A, {
                            className: "gap-[24px]",
                            children: [c ? (0, n.jsxs)(o.Ay, {
                                className: "w-[234px] h-[124px] rounded-[12px] relative",
                                children: [(0, n.jsx)(o.Ay, {
                                    className: "absolute left-0 top-0 bottom-0 right-0 w-full h-full bg-[#000000] opacity-50 rounded-[12px] z-[50]"
                                }), (0, n.jsx)(_, {
                                    className: "text-[52px] absolute left-0 top-0 bottom-0 right-0 m-auto text-RedGreenBgText z-[99]"
                                }), (0, n.jsx)(k.A, {
                                    className: "w-[234px] h-[124px] min-w-[120px] object-cover rounded-[12px]",
                                    src: (0, V.x)(f)
                                })]
                            }) : (0, n.jsx)(k.A, {
                                className: "w-[234px] h-[124px] object-cover rounded-[12px]",
                                src: (0, V.x)(f)
                            }), (0, n.jsxs)(w.A, {
                                className: "gap-[8px] flex-col flex-1",
                                children: [(0, n.jsx)(o.Ay, {
                                    className: "typography-subtitle1 text-PrimaryText overflow-hidden line-clamp-2",
                                    children: a
                                }), (0, n.jsx)(o.Ay, {
                                    className: "h-[36px] typography-caption1 text-PrimaryText line-clamp-2",
                                    children: r
                                }), (0, n.jsxs)(w.A, {
                                    className: "gap-[8px] items-center",
                                    children: [(0, n.jsx)(o.Ay, {
                                        className: "typography-caption1 text-PrimaryText",
                                        children: c ? h("watch-video", {
                                            defaultValue: "Watch Video"
                                        }) : h("learn-more", {
                                            defaultValue: "Learn More"
                                        })
                                    }), (0, n.jsx)(A.A, {
                                        size: 16,
                                        className: "text-PrimaryText"
                                    })]
                                })]
                            })]
                        })
                    }), (0, n.jsx)(F, {
                        isOpen: b,
                        title: a,
                        video: c,
                        onClose: function() {
                            return x(!1)
                        }
                    })]
                })
            };
            var O, R = a("d12p"),
                E = a("iKvg"),
                K = (O = {}, (0, E._)(O, p.Sn, {
                    key: "academy-desc-spotGrid",
                    defaultValue: "The Spot Grid Bot aims to capitalize on asset price changes, employing a buy low, sell high strategy with orders set at specific price intervals. It performs best in volatile markets when prices fluctuate within a specific range. Essentially, grid trading attempts to make profits on small price changes in volatile markets."
                }), (0, E._)(O, p.us, {
                    key: "academy-desc-futGrid",
                    defaultValue: "The Futures Grid Bot aims to capture volatility in the futures market using an automated buy-low, sell-high strategy. Supporting neutral, long, and short directional approaches combined with leverage, this bot aims to make you benefit from the futures market swings around the clock."
                }), (0, E._)(O, p.$$, {
                    key: "academy-desc-spotRebalancing",
                    defaultValue: "The Rebalancing Bot automatically adjusts your portfolio position in your selected token combination. By buying low and selling high, your strategy can maintain the same ratio of asset values through rebalancing at preset time intervals or percentage thresholds."
                }), (0, E._)(O, p.S8, {
                    key: "academy-desc-arbitrage",
                    defaultValue: "Futures funding rate arbitrage is a trading strategy that allows traders to earn regular funding fees from Perpetual Futures while hedging price risk in the futures market by taking an opposite position for the same trading pair in the spot market."
                }), (0, E._)(O, p.sY, {
                    key: "academy-desc-spotDca",
                    defaultValue: "The Spot DCA trading bot allows traders to set up parameters to buy more when the price is low, and sell more when the price is high. Take advantage of market volatility with multiple entries, and a single exit."
                }), (0, E._)(O, p.hf, {
                    key: "academy-desc-basic",
                    defaultValue: "Deep Dive into the simple side of automated trading with our Trading Bots Essentials. Learn the basics of using bots, understand their underlying mechanics, and pick up safety tips. Whether you're a trading rookie or aiming to enhance your trading strategy with automated tools, this series is your essential toolkit for smarter trades."
                }), (0, E._)(O, p.Xf, {
                    key: "academy-desc-algoOrder",
                    defaultValue: "Spot Algo Orders gives you access to our sophisticated TWAP and volume-based execution algorithmic orders to minimise slippage, information leakage and market impact, reducing your execution costs especially for large positions and illiquid assets."
                }), (0, E._)(O, "algoOrder-twap", {
                    key: "academy-desc-algoOrder-twap",
                    defaultValue: "TWAP (Time-Weighted Average Price) is an algorithmic trade execution strategy that aims to achieve an average execution price close to the time-weighted average price of the user-specified period."
                }), (0, E._)(O, "algoOrder-vp", {
                    key: "academy-desc-algoOrder-vp",
                    defaultValue: "The Volume Participation (VP) trading algorithm is an opportunistic algorithmic execution strategy that enables the execution of larger orders with specified urgency level. It aims to perform a trade at a pace that approximately matches a portion of the real-time market volume by respecting the targeted volume participation level."
                }), O),
                W = function(e) {
                    var t = e.strategyType,
                        a = (0, u.Wi)().t,
                        i = K[t];
                    return (0, n.jsx)(o.Ay, {
                        className: "text-PrimaryText typography-caption1 md:typography-body3 my-[16px] md:my-0",
                        children: a(i.key, {
                            defaultValue: i.defaultValue
                        })
                    })
                };
            const L = function(e) {
                var t = e.strategyType,
                    a = e.variant,
                    r = e.showStrategyDesc,
                    l = (0, v.X_)().t,
                    s = (0, f._)((0, P.z)(h.p.academyPopUpTab, p.Sn), 2),
                    d = s[0],
                    g = s[1],
                    c = r && t === p.Xf && d.includes(p.Xf),
                    m = c ? d : t,
                    T = function(e, t) {
                        var a = (0, u.XY)().t,
                            n = (0, u.Wi)().t,
                            r = (0, i.useMemo)((function() {
                                return [{
                                    configIndex: 1,
                                    type: p.Sn,
                                    trackingKey: "landingPage-tutorial-spotContent1",
                                    content: a("landingPage-tutorial-spotContent1", {
                                        defaultValue: "Grid trading is a type of quantitative trading strategy. This trading bot automates buying and selling on spot trading. It is designed to place orders in the market at preset intervals within a configured price range"
                                    }),
                                    title: a("landingPage-tutorial-spotTitle1", {
                                        defaultValue: "What Is Spot Grid Trading and How Does It Work"
                                    }),
                                    video: "rjnwofjsqx"
                                }, {
                                    configIndex: 1,
                                    type: p.us,
                                    trackingKey: "landingPage-tutorial-futuresContent1",
                                    content: a("landingPage-tutorial-futuresContent1", {
                                        defaultValue: "Futures Grid trading performs the best in volatile and sideways markets when prices fluctuate in a given range. This technique attempts to make profits on small price changes. The more grids you include, the greater the frequency of trades will be. However, it comes with an expense as the profit you make from each order is lower."
                                    }),
                                    title: a("landingPage-tutorial-futuresTitle1", {
                                        defaultValue: "What Is Futures Grid Trading"
                                    }),
                                    video: "3qlc7c4733"
                                }, {
                                    configIndex: 1,
                                    type: p.$$,
                                    trackingKey: "landingPage-tutorial-rebalancingContent1",
                                    content: a("landingPage-tutorial-rebalancingContent1", {
                                        defaultValue: "The Rebalancing Bot will automatically adjust your portfolio position in the token combination of your choice. By buying low and selling high, your strategy can maintain the same ratio of asset values through rebalancing at preset intervals or thresholds."
                                    }),
                                    title: a("landingPage-tutorial-rebalancingTitle1", {
                                        defaultValue: "What Is Rebalancing Bot and Frequently Asked Questions"
                                    }),
                                    video: "o3d57kre03"
                                }, {
                                    configIndex: 1,
                                    type: p.sY,
                                    trackingKey: "landingPage-tutorial-dcaContent1",
                                    content: n("landingPage-tutorial-dcaContent1", {
                                        defaultValue: "Dollar-Cost Averaging (DCA) is a strategy that involves buying an equal amount of assets regularly. It aims to achieve a better average price for the selected trading pair and reduce the impact of market volatility."
                                    }),
                                    title: n("landingPage-tutorial-dcaTitle1", {
                                        defaultValue: "What Is Spot DCA and How Does It Work?"
                                    }),
                                    video: "a79byh14z5"
                                }, {
                                    configIndex: 1,
                                    type: p.hf,
                                    trackingKey: "landingPage-tutorial-basicContent1",
                                    content: a("landingPage-tutorial-basicContent1", {
                                        defaultValue: "Trading bots are automated software that trade on your behalf using predefined parameters. They allow you to execute trades around the clock and enhance responsiveness to market changes. Trading bots can also suppress the emotional factor when it comes to trading. Binance offers a wide range of trading bots that can help you optimize your trading strategies. In addition, you can view the top grid trading strategies at the Binance Bot Marketplace."
                                    }),
                                    title: a("landingPage-tutorial-basicTitle1", {
                                        defaultValue: "Introducing Binance Trading Bots"
                                    }),
                                    video: "48i2jc7h6q"
                                }]
                            }), [a, n]);
                        return (0, i.useMemo)((function() {
                            return (0, R._)(t ? r : []).concat([{
                                configIndex: 1,
                                type: p.hf,
                                trackingKey: "landingPage-tutorial-basicContent2",
                                content: a("landingPage-tutorial-basicContent2", {
                                    defaultValue: "Grid trading is one of the features on Binance Futures to help users trade on the cryptocurrency market. It is designed to work autonomously under preset parameters, allowing users to leverage price fluctuations within a given range, as it aims to profit from small price movements. "
                                }),
                                title: a("landingPage-tutorial-basicTitle2", {
                                    defaultValue: "Binance Trading Bots: Characteristics and Use Cases"
                                }),
                                link: p.TP.TRADING_BOT_ESSENTIAL_URL
                            }, {
                                configIndex: 2,
                                type: p.hf,
                                trackingKey: "landingPage-tutorial-basicContent3",
                                content: a("landingPage-tutorial-basicContent3", {
                                    defaultValue: "Grid trading on Binance Futures is a strategic tool that can be useful when markets are volatile and prices fluctuate within a given range. In our step-by-step guide to grid trading, we covered how to set up systematic trading using grid trading on Binance Futures."
                                }),
                                title: a("landingPage-tutorial-basicTitle3", {
                                    defaultValue: "What Are Crypto Trading Bots and How Do They Work?"
                                }),
                                link: "https://academy.binance.com/articles/what-are-crypto-trading-bots-and-how-do-they-work"
                            }, {
                                configIndex: 1,
                                type: p.Sn,
                                trackingKey: "landingPage-tutorial-spotContent1",
                                content: a("landingPage-tutorial-spotContent1", {
                                    defaultValue: "Grid trading is a type of quantitative trading strategy. This trading bot automates buying and selling on spot trading. It is designed to place orders in the market at preset intervals within a configured price range"
                                }),
                                title: a("landingPage-tutorial-spotTitle1", {
                                    defaultValue: "What Is Spot Grid Trading and How Does It Work"
                                }),
                                link: p.TP.SPOT_GRID_SUPPORT
                            }, {
                                configIndex: 2,
                                type: p.Sn,
                                trackingKey: "landingPage-tutorial-spotContent2",
                                content: a("landingPage-tutorial-spotContent2", {
                                    defaultValue: "You can create your own spot grid trading strategy on Binance by setting parameters or copying existing parameters from the Strategy Pool. Follow the step-by-step guide below to start spot grid trading."
                                }),
                                title: a("landingPage-tutorial-spotTitle2", {
                                    defaultValue: "How to Create a Spot Grid Trading Strategy on Binance"
                                }),
                                link: p.TP.SPOT_GRID_CREATE_STRATEGY_SUPPORT
                            }, {
                                configIndex: 3,
                                type: p.Sn,
                                trackingKey: "landingPage-tutorial-spotContent3",
                                content: a("landingPage-tutorial-spotContent3", {
                                    defaultValue: "To help you build your own grid trading strategy, we will provide recommended parameters in this article. These include lower price limit, upper price limit, and grid count. You may use the new auto parameters function to create a grid trading strategy with just one click."
                                }),
                                title: a("landingPage-tutorial-spotTitle3", {
                                    defaultValue: "How to Use Spot Grid Trading Auto Parameters"
                                }),
                                link: p.TP.SPOT_GRID_AI_PARAM_FAQ
                            }, {
                                configIndex: 4,
                                type: p.Sn,
                                trackingKey: "landingPage-tutorial-spotContent4",
                                content: a("landingPage-tutorial-spotContent4", {
                                    defaultValue: "You can use Binance Spot Grid Trading in volatile markets when prices fluctuate within a specific range. Grid Trading attempts to make profits on small price changes. Through quantitative trading, it can help you trade rationally and avoid FOMO where possible."
                                }),
                                title: a("landingPage-tutorial-spotTitle4", {
                                    defaultValue: "Binance Spot Grid Trading Parameters"
                                }),
                                link: p.TP.SPOT_GRID_PARAM_FAQ
                            }, {
                                configIndex: 1,
                                type: p.us,
                                trackingKey: "landingPage-tutorial-futuresContent1",
                                content: a("landingPage-tutorial-futuresContent1", {
                                    defaultValue: "Futures Grid trading performs the best in volatile and sideways markets when prices fluctuate in a given range. This technique attempts to make profits on small price changes. The more grids you include, the greater the frequency of trades will be. However, it comes with an expense as the profit you make from each order is lower."
                                }),
                                title: a("landingPage-tutorial-futuresTitle1", {
                                    defaultValue: "What Is Futures Grid Trading"
                                }),
                                link: p.TP.GRID_SUPPORT
                            }, {
                                configIndex: 1,
                                type: p.S8,
                                trackingKey: "landingPage-tutorial-arbitrage2",
                                content: a("landingPage-tutorial-arbitrage2", {
                                    defaultValue: "The Arbitrage bot automatically opens positions in opposite directions in both Futures and Spot markets. This involves going short in one market and long in the other to receive the funding fee."
                                }),
                                title: a("landingPage-tutorial-arbitrageTitle2", {
                                    defaultValue: "How to Use Binance's Funding Rate Arbitrage Bot"
                                }),
                                link: p.TP.ARBITRAGE_BOT_FUNDING_RATE
                            }, {
                                configIndex: 2,
                                type: p.us,
                                trackingKey: "landingPage-tutorial-futuresContent2",
                                content: a("landingPage-tutorial-futuresContent2", {
                                    defaultValue: "Long/Short Grid is a trend-following strategy that allows users to trade with the market trend within a grid trading system. This means you can open an initial position (long or short) according to your analysis, while simultaneously placing buy-limit and sell-limit orders at predetermined intervals to capitalize on market volatility and ranging conditions."
                                }),
                                title: a("landingPage-tutorial-futuresTitle2", {
                                    defaultValue: "What Is Long/Short Grid Trading"
                                }),
                                link: p.TP.NEW_GRID_SUPPORT
                            }, {
                                configIndex: 3,
                                type: p.us,
                                trackingKey: "landingPage-tutorial-futuresContent3",
                                content: a("landingPage-tutorial-futuresContent3", {
                                    defaultValue: "Binance provides recommended parameters to help improve user experience and reduce the learning curve. These include lower price limit, upper price limit, and grid count. <br> With the new auto parameters function, anyone will be able to create a grid trading strategy with just one click."
                                }),
                                title: a("landingPage-tutorial-futuresTitle3", {
                                    defaultValue: "Futures Grid Trading Auto Parameters Guide"
                                }),
                                link: p.TP.FUT_GRID_AI_PARAM_FAQ
                            }, {
                                configIndex: 4,
                                type: p.us,
                                trackingKey: "landingPage-tutorial-futuresContent4",
                                content: a("landingPage-tutorial-futuresContent4", {
                                    defaultValue: "The Strategy Trading Disclaimers are inseparable parts of our Binance Terms of Use and Binance Futures Service Agreement. These documents should be read together and have the same meaning when used herein."
                                }),
                                title: a("landingPage-tutorial-futuresTitle4", {
                                    defaultValue: "Strategy Trading Disclaimers"
                                }),
                                link: p.Se.DISCLAIMER
                            }, {
                                configIndex: 5,
                                type: p.us,
                                trackingKey: "landingPage-tutorial-futuresContent5",
                                content: a("landingPage-tutorial-futuresContent5", {
                                    defaultValue: "The new landing page provides users with a comprehensive display of Spot and Futures Grid Trading strategies along with their performance and popularity amongst users, while allowing traders to quickly replicate their parameters."
                                }),
                                title: a("landingPage-tutorial-futuresTitle5", {
                                    defaultValue: "How to use the Strategy Trading Landing Page"
                                }),
                                link: p.TP.LANDINGPAGE_TUTORIAL_LINK
                            }, {
                                configIndex: 6,
                                type: p.us,
                                trackingKey: "landingPage-tutorial-futuresContent6",
                                content: a("landingPage-tutorial-futuresContent6", {
                                    defaultValue: "Grid trading is one of the features on Binance Futures to help users trade on the cryptocurrency market. It is designed to work autonomously under preset parameters, allowing users to leverage price fluctuations within a given range, as it aims to profit from small price movements."
                                }),
                                title: a("landingPage-tutorial-futuresTitle6", {
                                    defaultValue: "Benefits of Grid Trading on Binance Futures\t"
                                }),
                                link: p.TP.BENEFIT_OF_FUT_GRID
                            }, {
                                configIndex: 7,
                                type: p.us,
                                trackingKey: "landingPage-tutorial-futuresContent7",
                                content: a("landingPage-tutorial-futuresContent7", {
                                    defaultValue: "Grid trading on Binance Futures is a strategic tool that can be useful when markets are volatile and prices fluctuate within a given range. In our step-by-step guide to grid trading, we covered how to set up systematic trading using grid trading on Binance Futures."
                                }),
                                title: a("landingPage-tutorial-futuresTitle7", {
                                    defaultValue: "How to Identify and Replicate Futures Grid Trading Strategy on Binance Futures?"
                                }),
                                link: p.TP.FUT_GRID_IDENTIFT_REPLICATE
                            }, {
                                configIndex: 1,
                                type: p.$$,
                                trackingKey: "landingPage-tutorial-rebalancingContent1",
                                content: a("landingPage-tutorial-rebalancingContent1", {
                                    defaultValue: "The Rebalancing Bot will automatically adjust your portfolio position in the token combination of your choice. By buying low and selling high, your strategy can maintain the same ratio of asset values through rebalancing at preset intervals or thresholds."
                                }),
                                title: a("landingPage-tutorial-rebalancingTitle1", {
                                    defaultValue: "What Is Rebalancing Bot and Frequently Asked Questions"
                                }),
                                link: p.TP.REBALANCING_BOT_FAQ
                            }, {
                                configIndex: 2,
                                type: p.$$,
                                trackingKey: "landingPage-tutorial-rebalancingContent2",
                                content: a("landingPage-tutorial-rebalancingContent2", {
                                    defaultValue: "Binance's new Rebalancing Bot allows users to automatically adjust their cryptocurrency portfolios to maintain their desired asset allocation with ease."
                                }),
                                title: a("landingPage-tutorial-rebalancingTitle2", {
                                    defaultValue: "Introducing Rebalancing Bot: Adjust Your Crypto Portfolio Effortlessly"
                                }),
                                link: p.TP.INTRODUCING_REBALANCING_BOT
                            }, {
                                configIndex: 1,
                                type: p.sY,
                                trackingKey: "landingPage-tutorial-dcaContent1",
                                content: n("landingPage-tutorial-dcaContent1", {
                                    defaultValue: "Dollar-Cost Averaging (DCA) is a strategy that involves buying an equal amount of assets regularly. It aims to achieve a better average price for the selected trading pair and reduce the impact of market volatility."
                                }),
                                title: n("landingPage-tutorial-dcaTitle1", {
                                    defaultValue: "What Is Spot DCA and How Does It Work?"
                                }),
                                link: p.TP.SPOT_DCA_FAQ
                            }, {
                                configIndex: 2,
                                type: p.sY,
                                trackingKey: "landingPage-tutorial-dcaContent2",
                                content: n("landingPage-tutorial-dcaContent2", {
                                    defaultValue: "You can use Binance's Spot DCA feature to automatically buy or sell a chosen amount of assets at a designated price deviation at a desired frequency."
                                }),
                                title: n("landingPage-tutorial-dcaTitle2", {
                                    defaultValue: "Binance Spot DCA Parameters"
                                }),
                                link: p.TP.SPOT_DCA_PARAM_FAQ
                            }, {
                                configIndex: 1,
                                type: p.Xf,
                                trackingKey: "landingPage-tutorial-algoContent1",
                                content: n("landingPage-tutorial-algoContent1", {
                                    defaultValue: "Algorithmic orders are automated instructions for trading that execute trades based on predefined conditions and parameters that can be set and adjusted by users prior to starting an order."
                                }),
                                title: n("landingPage-tutorial-algoOrderTitle1", {
                                    defaultValue: "What are Algorithmic Orders? TWAP and POV Strategies Explained"
                                }),
                                link: p.TP.ALGO_ORDER_BLOG
                            }, {
                                configIndex: 1,
                                type: "algoOrder-twap",
                                trackingKey: "landingPage-tutorial-twapContent1",
                                content: "",
                                title: n("landingPage-tutorial-twapTitle1", {
                                    defaultValue: "How to Use TWAP Algorithm on Binance Futures"
                                }),
                                link: p.TP.FUTURES_TWAP_FAQ
                            }, {
                                configIndex: 1,
                                type: "algoOrder-vp",
                                trackingKey: "landingPage-tutorial-vpContent1",
                                content: "",
                                title: n("landingPage-tutorial-vpTitle1", {
                                    defaultValue: "How to Use the Volume Participation Algorithm on Binance Futures?"
                                }),
                                link: p.TP.FUTURES_VP_FAQ
                            }]).filter((function(t) {
                                return t.type === e
                            }))
                        }), [e, a, r, t, n])
                    }(m, "popup" === a);
                return (0, n.jsxs)(o.Ay, {
                    className: b()("mt-0 md:mt-[24px] lg:mt-[24px] grid gap-0 md:gap-[24px] lg:gap-y-[24px] lg:gap-x-[36px]", {
                        "grid-cols-1": "popup" === a,
                        "grid-cols-1 lg:grid-cols-2": "popup" !== a
                    }),
                    children: [c && (0, n.jsxs)(x.A, {
                        variant: "primary-gray",
                        selectedIndex: d,
                        onChange: function(e, t) {
                            g(t)
                        },
                        style: {
                            width: "auto"
                        },
                        children: [(0, n.jsx)(x.A.TabPane, {
                            tabKey: "algoOrder",
                            tabNode: l("strategy-algoOrder", {
                                defaultValue: "Algo Order"
                            })
                        }), (0, n.jsx)(x.A.TabPane, {
                            tabKey: "algoOrder-twap",
                            tabNode: l("strategy-twap", {
                                defaultValue: "Futures Twap"
                            })
                        }), (0, n.jsx)(x.A.TabPane, {
                            tabKey: "algoOrder-vp",
                            tabNode: l("strategy-vp", {
                                defaultValue: "Futures VP"
                            })
                        })]
                    }), r && (0, n.jsx)(W, {
                        strategyType: m
                    }), T.map((function(e, t) {
                        return (0, n.jsx)(G, (0, y._)({
                            itemIndex: t,
                            variant: a,
                            strategyType: m
                        }, e), t)
                    }))]
                })
            };
            var Y = [p.hf, p.Sn, l.S8, p.us, p.$$, p.sY, p.Xf];
            const U = function(e) {
                var t = e.variant,
                    a = (0, (0, u.XY)().t)("strategy-academy", {
                        defaultValue: "Bots Academy"
                    }),
                    r = (0, s.nE)(),
                    l = (0, i.useCallback)((function(e) {
                        r(m.ll.click, {
                            module: m.DM.HEADER,
                            pageName: m.eQ.ACADEMY,
                            clientType: m.Yx,
                            eventName: m.b8.strategyLanding,
                            $element_id: e ? m.vV[e] : m.vV.strategyTrading,
                            df_source: e ? m.vV[e] : m.vV.strategyTrading
                        })
                    }), [r]),
                    p = (0, i.useCallback)((function(e) {
                        r(m.ll.click, {
                            module: m.DM.TUTORIAL,
                            pageName: m.eQ.LANDING,
                            clientType: m.Yx,
                            eventName: m.b8.strategyLanding,
                            $element_id: e ? m.vV[e] : m.vV.strategyTrading,
                            df_source: e ? m.vV[e] : m.vV.strategyTrading
                        })
                    }), [r]);
                return "popup" === t ? (0, n.jsx)(g.y, {
                    tabFontSize: "small",
                    variant: "default",
                    mobileVariant: "default",
                    list: Y,
                    localForageKey: h.p.academyPopUpTab,
                    onTabClick: l,
                    renderTabPane: function(e) {
                        return (0, n.jsx)(o.Ay, {
                            className: "max-h-[350px] overflow-x-scroll px-0 md:px-[10px]",
                            children: (0, n.jsx)(L, {
                                variant: t,
                                strategyType: e,
                                showStrategyDesc: !0
                            })
                        })
                    },
                    renderTitle: function() {
                        return (0, n.jsx)(c.C, {
                            title: a,
                            titleClassNames: "typography-headline4"
                        })
                    }
                }) : (0, n.jsx)(d.m, {
                    children: (0, n.jsx)(g.y, {
                        tabFontSize: "large",
                        variant: "default",
                        list: Y,
                        localForageKey: h.p.tutorialTab,
                        onTabClick: p,
                        renderTabPane: function(e) {
                            return (0, n.jsx)(L, {
                                strategyType: e,
                                showStrategyDesc: !1
                            })
                        },
                        renderTitle: function() {
                            return (0, n.jsx)(c.C, {
                                title: a
                            })
                        }
                    })
                })
            }
        }
    }
]);