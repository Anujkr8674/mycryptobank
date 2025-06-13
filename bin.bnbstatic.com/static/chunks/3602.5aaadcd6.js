"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [3602, 3773], {
        eXUJ: (e, r, t) => {
            t.d(r, {
                f: () => n
            });
            const n = {
                UpgradeToPortfolioMarginAccount: "Upgrade to Portfolio Margin Account",
                PMOpenFuturesAccountModalDesc: "You need to open futures account before upgrading to Portfolio Margin Account.",
                PMOpenFuturesAccountModalButton: "Open Futures Account",
                UpgradeToPMDesc1: "You can now upgrade to portfolio margin account, which help improves assets efficiency, supports margin sharing among margin/UM/CM accounts, and more benefits.",
                UpgradeToPMSupportedTradingModesTitle: "Supported trading modes",
                UpgradeToPMSupportedTradingModes1: "Margin Cross Mode",
                UpgradeToPMSupportedTradingModes2: "USD\u24c8-M Futures Cross Mode",
                UpgradeToPMSupportedTradingModes3: "COIN-M Futures Cross Mode",
                UpgradeToPMUnsupportedTradingModesTitle: "Unsupported trading modes after the upgrade",
                UpgradeToPMUnsupportedTradingModes1: "USD\u24c8-M Futures Isolated Mode",
                UpgradeToPMUnsupportedTradingModes2: "COIN-M Futures Isolated Mode",
                UpgradeToPMNotInPMAccountTitle: "Able to trade while assets won\u2019t be under Portfolio Margin Account",
                UpgradeToPMNotInPMAccount1: "Spot",
                UpgradeToPMNotInPMAccount2: "Margin Isolated Mode",
                UpgradeToPMNotInPMAccount3: "Options",
                UpgradeToPMRules1: "Before you start the upgrade, please ensure that:",
                UpgradeToPMRules2: "You currently have no active orders or liabilities in your Margin account, and you have no positions or active orders in your UM Futures or CM Futures, and there are no negative balances in UM Futures or CM Futures.",
                UpgradeToPMRules3: "The account upgrade is expected to take several seconds. During the upgrade period, please do not trade, transfer or withdraw.",
                UpgradeToPMRules4: "After the upgrade, only the read-only right of your current API key and secrets will be kept. Please pay attention to your API trading.",
                UpgradeToPMRules6: "Price Protection is not supported in Portfolio Margin Account.",
                next: "Next",
                OK: "OK",
                upgradeToPMAgreement: "I acknowledge that I have read and understood the <LinkTerms>Terms of Service for Portfolio Margin Account</LinkTerms> & <LinkRules>Trading Rules of Portfolio Margin Account</LinkRules>",
                UpgradeToPMNoticeTitle: "Upgrade to portfolio margin account now.",
                UpgradeToPMNoticeDesc: "Improves assets efficiency, supports margin sharing among margin/UM/CM accounts, and more benefits.",
                UpgradeQuizModalTitle: "Upgrade Quiz",
                UpgradeQuizModalDesc: "To ensure that you are fully aware of the risks of Portfolio Margin Account, you need to pass the quiz before upgrading.",
                UpgradeQuizModalPrevButton: "Previous",
                UpgradeQuizModalTakeQuizButton: "Take Quiz",
                PMUpgradingModalTitle: "Upgrading in Progress... ({{second}}s)",
                PMUpgradeInProgress: "Upgrading in Progress...",
                PMUpgradeInProgressBody: "Upon upgrading, you will be able to trade Margin, UM Futures and CM Futures through the Portfolio Margin.",
                PMUpgradingModalBody1: "The account upgrade is expected to take several seconds. During the upgrade period, please do not trade, transfer or withdraw.",
                PMUpgradingModalBody2: "Upon upgrading, you will be able to trade Margin UM Futures and CM Futures through the Portfolio Margin. Only cross mode are support currently.",
                PMUpgradeFailedModalTitle: "Failed to Upgrade",
                PMUpgradePendingModalTitle: "Upgrading in Progress",
                PMUpgradePendingModalBody: "Upgrade is still in progress, please wait several minutes to see the results or you can ask for customer\u2019s help to handle the upgrade.",
                PMTradingLimitationModalBody: "Portfolio Margin Account does not support isolated mode of UM futures and CM futures, and Strategy Trading is also unsupported.",
                PMTutorialModalTitle: "Welcome to Portfolio Margin Mode",
                PMTutorialModalStep1Title: "Collateral Assets",
                PMTutorialModalStep1Desc: "Collateral assets in Margin account, UM Futures account and CM Futures account will be converted into USDT or BUSD equivalent in real time, and can be used as margin to trade margin, USD-Margin futures and Coin-Margin futures.",
                PMTutorialModalStep2Title: "Risk Control",
                PMTutorialModalStep2Desc: "You can view the Portfolio Margin Info at the current Margin ratio place. We use UniMMR to control your PM account risk.",
                PMTutorialModalStep3Title: "Trade Mode",
                PMTutorialModalStep3Desc: "Only cross mode is supported in Portfolio Margin account.",
                PMQuizTitle: "Upgrade Quiz",
                PMQuizHintBeforeAnswer: "You need to pass all {{questionsLength}} questions.",
                quitQuizModalDesc: "Are you sure that you want to quit? The quiz would not be saved.",
                PMQuizQuestion1: "Under Binance Portfolio Margin,  the risk of removing assets from USD\u24c8-M Wallet, COIN-M Wallet or Margin wallet would cause",
                PMQuizQuestion2: "Assume you have 1 BTC in the Margin Wallet, 1 ETH in the USD\u24c8-M Wallet and 1 BTC in the COIN-Margined Wallet. If the collateral rate for BTC is 95% and ETH is 90%, how much is your total collateralized asset value?",
                PMQuizQuestion3: "Are all the assets listed in the Margin Wallet can be used as collateral for portfolio margin trading?",
                PMQuizQuestion4: "Is there an interest rate charged to Portfolio Margin users having a negative balance in USD-margined, Coin-margined wallets or Margin Wallets?",
                PMQuizQuestion5: "Under the portfolio margin program, will liquidation of futures and margin positions be triggered if the Unified Maintenance Margin Ratio (UniMMR) reached 100%? Will Binance start reduce-only for all the positions when UniMMR reaches 120%?",
                PMQuizQuestion6: "Can you use both Binance Portfolio Margin and multi asset mode at the same time?",
                PMQuizQuestion7: "What is the liquidation process in Binance Portfolio Margin?",
                PMQuizQuestion8: "If users want to use BNB to get discount for trading fee in USD\u24c8-M perpetual contract, but BNB is currently only in the Margin Wallet, what should users do?",
                PMQuizQuestion9: "The trading logic and rules of the Portfolio Margin account are the same as those of the cross margin account and the USD\u24c8-M and COIN-M contract accounts.",
                PMQuizAnswer1: "Change of margin ratio || Liquidation risk || All of the above",
                PMQuizAnswer2: "1 BTC + 1 ETH + 1 BTC || 0.95 BTC + 0.9 ETH + 0.95 BTC || 2 BTC",
                PMQuizAnswer3: "Yes, both isolated and cross margin assets in the Margin Wallet can be used as collateral. || No, only cross margin assets in the Margin Wallet can be used as collateral.",
                PMQuizAnswer4: "No, no interest rate will be charged. || Yes, Portfolio Margin users with a negative balance under certain thresholds in their USDs-M wallet, Coin-margined wallet or Margin wallet will be charged with interest.",
                PMQuizAnswer5: "Yes; Yes || No; No || Yes; No",
                PMQuizAnswer6: "Yes || No",
                PMQuizAnswer7: "The liquidation orders will be sent as Immediate or Cancel orders and fill in the market. || The Insurance Fund will directly take over the liquidation positions. When the Insurance Fund cannot accept the bankrupt client\u2019s positions, Auto Deleveraging (ADL) will happen. Please note that the Insurance Fund will take over the liquidation positions at the bankruptcy prices, and the bankruptcy prices may be out of the contract\u2019s market price range.",
                PMQuizAnswer8: "Move BNB from Margin Wallet to Coin-Margined Wallet || Move BNB from Margin Wallet to USD\u24c8-M Wallet",
                PMQuizAnswer9: "Yes || No, for example, the implementation logic of conditional orders, the calculation logic of risk and liquidation price are different.",
                PMDowngradeSuccessToastTitle: "Downgrade Successfully",
                PMDowngradeSuccessToastDesc: "You have successfully switched back to Classic Trading",
                PMDowngradeFailedToastTitle: "Failed to Downgrade",
                PMDowngradeFailedToastDesc: "Failed to switch back to Classic Trading, please check all the requirements.",
                PMDowngradePendingModalTitle: "Downgrade Incomplete",
                PMDowngradePendingModalBody: "Downgrade is still in progress, please wait several minutes to see the results or you can ask for customer's help to handle the downgrade.",
                PMDowngradingModalTitle: "Downgrade in Progress... ({{second}}s)",
                PMDowngradeInProgress: "Downgrade in Progress...",
                PMDowngradingModalBody: "The account downgrade is expected to take several seconds. During the downgrade period, please do not trade, transfer or withdraw.",
                PMDowngradeInProgressBody: "You are downgrading to Default Trading Account. During the downgrade period, please do not trade, transfer or withdraw.",
                PMDowngradeConfirmModalTitle: "Back to Classic Trading",
                PMDowngradeConfirmDesc1: "Before you start the downgrade, please ensure that:",
                PMDowngradeConfirmDesc2: "You currently have no active orders or liabilities in your Margin account, and you have no positions or active orders in you UM Futures or CM Futures, and there are no negative balances in UM Futures or CM Futures.",
                PMDowngradeConfirmDesc3: "The account upgrade is expected to take several seconds. During the upgrade period, please do not trade, transfer or withdraw.",
                PMDowngradeConfirmDesc4: "After the downgrade, only the read-only right of your current API key and secrets will be kept. Please pay attention to your API trading.",
                PM1UpgradeMessage: "You are Portfolio Margin 1.0 user, please ask for customer service's help to upgrade to new Portfolio Margin Account.",
                PMConditionOrderNoticeModalTitle: "Condition Order Notice",
                PMConditionOrderNoticeModalBody: "Execution of conditional orders (including stop limit, stop market , trailing stop orders, Stop Profit & Loss for positions, and advanced TP/SL for orders) is not guaranteed and is dependent on factors such as market conditions. Orders are placed at the users own risk and Binance will not be liable for any losses.",
                PMConditionOrderNoticeModalCheck: "I agree with the statement."
            }
        },
        WUsl: (e, r, t) => {
            t.d(r, {
                MU: () => a,
                _b: () => s,
                rw: () => o,
                ud: () => i
            });
            var n = t("T0Sc");
            const a = () => (0, n.o)("", "trade-ui"),
                o = () => (0, n.o)("annTool", "announcement-tool"),
                i = () => (0, n.o)("futures-trade", "futures-ui"),
                s = () => (0, n.o)("", "futures-widget")
        },
        "2/Rq": (e, r, t) => {
            t.d(r, {
                _: () => s
            });
            var n = t("eAFj"),
                a = t("Pyqi"),
                o = t("MOWb"),
                i = t("bQ69"),
                s = (0, n.A)((function(e) {
                    return {
                        breakpoint: a.Responsive.utils.getBreakpointFromWidth(o.LO, i.S$ ? 1440 : window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
                        setBreakpoint: function(r) {
                            return e((function() {
                                return {
                                    breakpoint: r
                                }
                            }))
                        }
                    }
                }))
        },
        Lnou: (e, r, t) => {
            t.d(r, {
                A: () => ze,
                w: () => Le
            });
            var n = t("S+0I"),
                a = t("iKvg"),
                o = t("mguP"),
                i = t("jbFV"),
                s = t.n(i),
                d = t("mXdx"),
                l = t("DTvD"),
                u = t.n(l),
                c = t("XqCI"),
                g = t("f8Ts"),
                p = t("T30Y"),
                f = t("BiCW"),
                h = t("kU6N"),
                m = t("PQuT"),
                v = t("o82E"),
                x = t("Qhol"),
                w = t("Ic+K"),
                M = t("Ip+n"),
                b = t("bQ69"),
                y = t("hrAD"),
                T = t("qoEP"),
                k = t("q+oq"),
                P = t("Ov3/"),
                j = t("MD8j"),
                A = t("lW1t"),
                D = t("MOWb"),
                C = t("2/Rq"),
                S = t("tB80"),
                _ = t("JqUx"),
                U = t("d12p"),
                I = t("esg4"),
                F = t("VLTf"),
                B = t.n(F),
                N = t("GIr8"),
                L = t("2IQ4"),
                z = t("lSwr"),
                Q = t("+m0g"),
                R = t("yvZC"),
                O = t("mYSF"),
                W = t("gcdc"),
                q = t("tZex"),
                E = t("IhpE"),
                V = t("MI6P"),
                H = t("Vhyo"),
                G = t("WUsl"),
                Y = t("eXUJ");
            const X = () => {
                const {
                    getI18n: e
                } = (0, G._b)();
                return (0, d.jsxs)(d.Fragment, {
                    children: [(0, d.jsx)(H.A, {
                        children: e("PMTutorialModalStep1Title", {
                            defaultValue: Y.f.PMTutorialModalStep1Title
                        })
                    }), (0, d.jsx)(H.A, {
                        children: e("PMTutorialModalStep1Desc", {
                            defaultValue: Y.f.PMTutorialModalStep1Desc
                        })
                    }), (0, d.jsx)("br", {}), (0, d.jsx)(H.A, {
                        children: e("PMTutorialModalStep2Title", {
                            defaultValue: Y.f.PMTutorialModalStep2Title
                        })
                    }), (0, d.jsx)(H.A, {
                        children: e("PMTutorialModalStep2Desc", {
                            defaultValue: Y.f.PMTutorialModalStep2Desc
                        })
                    }), (0, d.jsx)("br", {}), (0, d.jsx)(H.A, {
                        children: e("PMTutorialModalStep3Title", {
                            defaultValue: Y.f.PMTutorialModalStep3Title
                        })
                    }), (0, d.jsx)(H.A, {
                        children: e("PMTutorialModalStep3Desc", {
                            defaultValue: Y.f.PMTutorialModalStep3Desc
                        })
                    })]
                })
            };
            var $ = t("8aEf"),
                K = function() {
                    return (0, d.jsx)($.Ay, {
                        enablePortal: !0,
                        tip: (0, d.jsx)(X, {}),
                        children: (0, d.jsx)(V.A, {
                            width: "16px",
                            height: "16px",
                            color: "t.third"
                        })
                    })
                },
                J = t("0yrM"),
                Z = t("RtFJ"),
                ee = t("KKiL"),
                re = (0, I.er)(I.Ft),
                te = function(e, r) {
                    var t = r.getI18n,
                        n = r.widgetLayout,
                        a = r.setWidgetLayout,
                        o = r.breakpoint,
                        i = r.isLeastWebSize,
                        s = r.isPm1_5,
                        l = r.tradeType,
                        u = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    switch (e.i) {
                        case "favorite":
                            return (0, d.jsx)(J.QW, {
                                area: "favorite",
                                onRemove: function() {
                                    return a(n.filter((function(e) {
                                        return "favorite" !== e.i
                                    })))
                                }
                            });
                        case "subHeader":
                            return (0, d.jsx)(Q.qU, {
                                area: "subHeader",
                                onRemove: function() {
                                    return a(n.filter((function(e) {
                                        return "subHeader" !== e.i
                                    })))
                                },
                                titleShrink: void 0,
                                name: "",
                                children: i ? (0, d.jsx)(J.qr, {}) : (0, d.jsx)(J.Jr, {})
                            });
                        case "market":
                            return u ? (0, d.jsx)(Q.qU, {
                                area: "market",
                                onRemove: function() {
                                    return a((0, D.nL)(n, o))
                                },
                                titleShrink: void 0,
                                name: "",
                                children: (0, d.jsx)(J.LP, {
                                    h: e.h,
                                    noFiat: !1,
                                    showCoinInfo: !0,
                                    bgColor: ""
                                })
                            }) : null;
                        case "chart":
                            return (0, d.jsx)(Q.qU, {
                                area: "chart",
                                titleShrink: void 0,
                                name: "",
                                children: (0, d.jsx)(J.jm, {
                                    removable: u,
                                    setWidgetLayout: a,
                                    widgetLayout: n,
                                    isPro: !0,
                                    isElectronPro: !1,
                                    disableMouse: !1,
                                    showFullscreenIcon: !1,
                                    showChartModeDropdown: !1,
                                    showCoinInfoTab: !0
                                })
                            });
                        case "orderbook":
                            return (0, d.jsx)(J.q$, {
                                layout: b.ug,
                                onRemove: u ? function() {
                                    return a(n.filter((function(e) {
                                        return "orderbook" !== e.i
                                    })))
                                } : void 0
                            });
                        case "trades":
                            return (0, d.jsx)(J.jn, {
                                onRemove: u ? function() {
                                    return a(n.filter((function(e) {
                                        return "trades" !== e.i
                                    }))), {}
                                } : void 0
                            });
                        case "userinfo":
                            return (0, d.jsx)(J.Uo, {
                                onRemove: u ? function() {
                                    return a(n.filter((function(e) {
                                        return "userinfo" !== e.i
                                    })))
                                } : void 0
                            });
                        case "orderform":
                            return (0, d.jsx)(Q.qU, {
                                area: "orderform",
                                title: "",
                                onRemove: u ? function() {} : void 0,
                                titleShrink: void 0,
                                name: "",
                                children: (0, d.jsx)(J.IY, {
                                    platform: b.PC,
                                    width: e.w,
                                    maxWidth: e.maxW
                                })
                            });
                        case "asset":
                            return (0, d.jsx)(R.qU, {
                                area: "asset",
                                name: "asset",
                                title: s && l === b.Gr.CROSS ? t("trd-orderForm-portfolio-margin-info") : t("trd-orderForm-assets"),
                                onRemove: u ? function() {
                                    return a(n.filter((function(e) {
                                        return "asset" !== e.i
                                    })))
                                } : void 0,
                                renderExtra: function() {
                                    return s && l === b.Gr.CROSS ? (0, d.jsx)(K, {}) : (0, d.jsx)(d.Fragment, {})
                                },
                                children: (0, d.jsx)(J.d9, {})
                            });
                        case "depth":
                            return (0, d.jsx)(R.qU, {
                                area: "depth",
                                title: (0, d.jsx)(O.A, {
                                    children: t("trd-chart-Depth")
                                }),
                                titleShrink: 1,
                                renderExtra: function() {
                                    return (0, d.jsx)(N.A, {
                                        sx: {
                                            justifyContent: "flex-end",
                                            flex: "1 1 auto"
                                        },
                                        children: (0, d.jsx)(W.A, {
                                            namespace: z.X8
                                        })
                                    })
                                },
                                onRemove: u ? function() {
                                    return a(n.filter((function(e) {
                                        return "depth" !== e.i
                                    })))
                                } : void 0,
                                children: (0, d.jsx)(J.WH, {
                                    namespace: z.X8
                                })
                            });
                        case "marketActivity":
                            return (0, d.jsx)(R.qU, {
                                area: "marketActivity",
                                name: "marketActivity",
                                title: t("trd-layout-tabMarketActivity", {
                                    defaultValue: "Market Activities"
                                }),
                                onRemove: u ? function() {
                                    return a(n.filter((function(e) {
                                        return "marketActivity" !== e.i
                                    })))
                                } : void 0,
                                renderExtra: function() {
                                    return (0, d.jsx)(E.a, {})
                                },
                                children: (0, d.jsx)(J.V0, {})
                            });
                        case "transactionData":
                            return (0, d.jsx)(Q.qU, {
                                area: "transactionData",
                                titleShrink: void 0,
                                name: "",
                                children: (0, d.jsx)(J.lj, {
                                    onRemove: u ? function() {
                                        return a(n.filter((function(e) {
                                            return "transactionData" !== e.i
                                        })))
                                    } : function() {
                                        return null
                                    }
                                })
                            });
                        case "heatMap":
                            return (0, d.jsx)(Q.qU, {
                                area: "heatMap",
                                titleShrink: void 0,
                                name: "",
                                children: (0, d.jsx)(J.Ds, {
                                    onRemove: function() {
                                        return a(n.filter((function(e) {
                                            return "heatMap" !== e.i
                                        })))
                                    }
                                })
                            });
                        default:
                            return null
                    }
                },
                ne = u().memo((function() {
                    var e = (0, x.ok2)().getI18n,
                        r = (0, x.nHk)(),
                        t = (0, x.i24)(),
                        n = (0, l.useState)(3)[0],
                        i = (0, l.useContext)(D.MQ),
                        s = i.widgetLayouts,
                        u = i.setWidgetLayout,
                        c = i.setWidgetLayouts,
                        g = i.breakpoint,
                        p = i.setBreakpoint,
                        f = i.widgetLayout,
                        h = (0, x.DFo)().isPm1_5,
                        m = (0, o._)((0, x.Grl)(), 1)[0],
                        v = (0, o._)((0, q.l)((function(e) {
                            return [e.disableMouse, e.setDisableMouse]
                        })), 2),
                        w = v[0],
                        M = v[1],
                        b = (0, l.useCallback)((function(e) {
                            e !== g && p(e)
                        }), [p, g]),
                        k = (0, x.jH7)(),
                        P = (0, l.useCallback)((function(e, r, n) {
                            M(!1), (0, Z.M)(r.i, t), "orderform" === n.i && (n.w < r.w && (n.w = n.minW), n.w > r.w && (n.w = n.maxW))
                        }), [M, t]),
                        j = (0, l.useCallback)((function(e, r) {
                            (0, Z.M)(r.i, t)
                        }), [t]),
                        A = (null === s || void 0 === s ? void 0 : s[g]) || [],
                        C = (0, l.useMemo)((function() {
                            return A.map((function(t) {
                                return (0, d.jsx)(L.A, {
                                    sx: {
                                        zIndex: "subHeader" === t.i || "orderbook" === t.i ? "4" : n,
                                        ":hover": {
                                            zIndex: "subHeader" === t.i ? "5" : "4"
                                        }
                                    },
                                    className: w && "chart" === t.i ? "disable-mouse" : "",
                                    suppressHydrationWarning: !0,
                                    children: te(t, {
                                        getI18n: e,
                                        widgetLayout: A,
                                        setWidgetLayout: u,
                                        breakpoint: g,
                                        isLoggedIn: r,
                                        isPm1_5: h,
                                        tradeType: m
                                    }, !0)
                                }, t.i)
                            }))
                        }), [A, n, w, e, u, g, r, h, m]);
                    return s ? (0, d.jsx)(re, {
                        className: "layout",
                        layouts: s,
                        cols: D._1,
                        onBreakpointChange: b,
                        breakpoints: D.LO,
                        useCSSTransforms: "rtl" !== k,
                        rowHeight: 8,
                        autoSize: !0,
                        margin: [0, 0],
                        draggableCancel: ".draggableCancel",
                        draggableHandle: ".draggableHandle",
                        containerPadding: [0, 0],
                        onLayoutChange: function(e, r) {
                            if (!B()(e, f) || !B()(r, s)) {
                                var t = Object.keys(s).find((function(e) {
                                    return !B()(s[e], r[e])
                                }));
                                if (t && t !== g) {
                                    var n = s[t].map((function(e) {
                                            return e.i
                                        })),
                                        o = r[t].map((function(e) {
                                            return e.i
                                        })),
                                        i = s[t].filter((function(e) {
                                            return "forceUpdate" !== e.i
                                        }));
                                    if (!B()(n, o)) return c((0, T._)((0, y._)({}, r), (0, a._)({}, t, (0, U._)(i).concat([{
                                        i: "forceUpdate",
                                        x: 0,
                                        y: 0,
                                        h: 0,
                                        w: 0
                                    }]))))
                                }
                                return c(r)
                            }
                        },
                        onDragStop: j,
                        onResizeStart: function() {
                            M(!0)
                        },
                        onResizeStop: P,
                        children: C
                    }) : null
                }));
            const ae = (0, l.memo)((function(e) {
                e = null !== e ? e : (0, _._)(new TypeError("Cannot destructure undefined"));
                var r = (0, j.d4)(A.makeFullscreen),
                    t = (0, l.useMemo)((function() {
                        return r ? "none" : "block"
                    }), [r]);
                return (0, d.jsxs)(m.W, {
                    children: [r && (0, d.jsx)(L.A, {
                        sx: {
                            display: t
                        },
                        children: (0, d.jsx)(J.IY, {
                            platform: b.PC
                        })
                    }), (0, d.jsx)(L.A, {
                        sx: {
                            gridArea: "content",
                            height: "100%",
                            width: "100%"
                        },
                        children: (0, d.jsx)(ne, {})
                    }), (0, d.jsx)(ee.o, {})]
                })
            }));
            var oe = t("0ac5"),
                ie = t("cxN1"),
                se = u().lazy((function() {
                    return t.e(3574).then(t.bind(t, "5VQt"))
                }));
            const de = function() {
                return (0, d.jsx)(l.Suspense, {
                    fallback: null,
                    children: (0, d.jsx)(se, {})
                })
            };
            var le = t("zI5V"),
                ue = function() {
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(J.o1, {}), (0, d.jsx)(J.L3, {
                            layout: b.Pv
                        }), (0, d.jsx)(ee.o, {}), (0, d.jsx)(J.jn, {}), (0, d.jsx)(J.LP, {
                            showCoinInfo: !1,
                            placement: "left",
                            withVolume: !0,
                            noFiat: !1,
                            bgColor: ""
                        }), (0, d.jsx)(J.o9, {}), (0, d.jsx)(le.A, {}), (0, d.jsx)("div", {
                            style: {
                                gridArea: "left"
                            }
                        }), (0, d.jsx)("div", {
                            style: {
                                gridArea: "right"
                            }
                        })]
                    })
                };
            const ce = (0, l.memo)(ue);
            const ge = function() {
                var e = (0, j.d4)((function(e) {
                    return e.setting.layout
                }));
                return (0, d.jsxs)(m.W, {
                    children: [(0, d.jsx)(J.q$, {
                        layout: b.Pv
                    }), (0, d.jsx)(J.jm, {
                        isTablet: !1,
                        isPro: !1,
                        isElectronPro: !1,
                        disableMouse: !1,
                        showFullscreenIcon: !1,
                        showChartModeDropdown: !1,
                        showCoinInfoTab: !0
                    }), e === b.Pv && (0, d.jsx)(ce, {}), e === b.a0 && (0, d.jsx)(de, {})]
                })
            };
            var pe = function(e) {
                    var r = e.layout,
                        t = (0, C._)(),
                        n = t.breakpoint,
                        i = t.setBreakpoint,
                        s = (0, o._)((0, k.T)(b.AF, D.h5), 2),
                        u = s[0],
                        c = s[1],
                        g = (0, o._)((0, P.A)(b.I8, D.a), 2),
                        p = g[0],
                        f = g[1],
                        h = (0, l.useMemo)((function() {
                            return null === u || void 0 === u ? void 0 : u[n]
                        }), [u, n]),
                        m = (0, l.useCallback)((function(e) {
                            c((0, T._)((0, y._)({}, u), (0, a._)({}, n, e)))
                        }), [u, c, n]),
                        v = (0, x.QsY)().isLeastWebSize;
                    return (0, l.useEffect)((function() {
                        p !== D.a && (f(D.a), c(D.h5))
                    }), [p]), (0, d.jsxs)(D.MQ.Provider, {
                        value: {
                            widgetLayouts: u,
                            setWidgetLayouts: c,
                            widgetLayout: h,
                            setWidgetLayout: m,
                            breakpoint: n,
                            setBreakpoint: i
                        },
                        children: [r === b.ug && (0, d.jsx)(ae, {
                            isLeastWebSize: v
                        }), r !== b.ug && (0, d.jsx)(ge, {}), (0, d.jsx)(S.default, {
                            layout: r
                        })]
                    })
                },
                fe = function() {
                    var e = (0, j.d4)((function(e) {
                            return e.setting.layout
                        })),
                        r = (0, x.z1p)(),
                        t = (0, ie.i)({
                            isChartView: (0, j.d4)(A.makeFullscreen),
                            layout: e,
                            isDisableAct: r
                        });
                    return (0, d.jsx)("div", {
                        style: t,
                        className: r ? "jp-class" : "normal-class",
                        children: (0, d.jsx)(oe.A, {
                            children: (0, d.jsx)(pe, {
                                layout: e
                            })
                        })
                    })
                };
            const he = (0, l.memo)(fe);
            var me = t("6fmq"),
                ve = t("aRFd"),
                xe = t("OoNE"),
                we = t("UPkX"),
                Me = (0, f.A)((function() {
                    return t.e(5699).then(t.bind(t, "O/r9"))
                }), {
                    webpack: function() {
                        return ["O/r9"]
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, d.jsx)(v.A, {})
                    }
                }),
                be = (0, f.A)((function() {
                    return t.e(8113).then(t.bind(t, "p3bT"))
                }), {
                    webpack: function() {
                        return ["p3bT"]
                    },
                    ssr: !1,
                    loading: function() {
                        return (0, d.jsx)(v.A, {})
                    }
                }),
                ye = function() {
                    var e = (0, x.QsY)(),
                        r = e.isMobile,
                        t = e.isIPad,
                        n = e.isDesktop;
                    return (0, x.HuG)(), (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsxs)(m.W, {
                            children: [(0, d.jsx)(xe.A, {}), (0, d.jsx)(me.A, {}), (0, d.jsx)(ve.A, {}), h.j7]
                        }), (0, d.jsxs)(M.A, {
                            children: [(0, d.jsx)(we.A, {}), !b.S$ && (0, d.jsxs)(d.Fragment, {
                                children: [(0, d.jsx)(w.U, {
                                    type: "mobile",
                                    show: r,
                                    children: (0, d.jsx)(Me, {})
                                }), (0, d.jsx)(w.U, {
                                    type: "tablet",
                                    show: t,
                                    children: (0, d.jsx)(be, {})
                                }), (0, d.jsx)(w.U, {
                                    type: "desktop",
                                    show: n,
                                    children: (0, d.jsx)(he, {})
                                })]
                            })]
                        })]
                    })
                },
                Te = t("C7Nc"),
                ke = t("MiNH"),
                Pe = t("/+ah"),
                je = t("PHSU"),
                Ae = t("ROyg"),
                De = t("Qlla"),
                Ce = t("R8rt"),
                Se = t("/BSb"),
                _e = t("L3mt"),
                Ue = t("EAFr"),
                Ie = t("LdGg"),
                Fe = t("Lmoe"),
                Be = t("wtFP"),
                Ne = t("FyDe");
            var Le = function() {
                var e = (0, n._)(s().mark((function e(r) {
                    var t, n, i, d, l, u, g, p, f, h, m, v, x, w, M, y, T, k, P, j, A, D, C, S, _, U, I, F, B, N;
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (n = r.params, i = n.symbol, d = void 0 === i ? "" : i, l = r.query, u = r.req, g = r.appContext, p = g.redux.dispatch, f = (null === u || void 0 === u ? void 0 : u.pathname) || "", h = r.appContext.lang, m = (0, _e.Z)({
                                        request: u
                                    }), v = (0, Ue.y)({
                                        request: u
                                    }), x = (0, Fe.b)(2, {
                                        request: u
                                    }), w = (0, Ie.y)({
                                        request: u
                                    }), !(d && /[a-z]/g.test(d) || "/" === f[f.length - 1])) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return", r.redirect((0, b.zw)("".concat(d.toUpperCase()), (0, c.E2)(l)), 301));
                            case 10:
                                if ("JP" !== (M = null === (t = u) || void 0 === t ? void 0 : t.cookies["BNC-Location"]) || !["BTCUSDT", "BTC_USDT"].includes(d)) {
                                    e.next = 13;
                                    break
                                }
                                return e.abrupt("return", r.redirect((0, b.zw)("BTC_JPY", (0, c.E2)(l)), 302));
                            case 13:
                                return e.t0 = o._, e.next = 16, Promise.allSettled([(0, ke.gr)(), (0, ke.jU)(M ? {
                                    headers: {
                                        "BNC-Location": M
                                    }
                                } : void 0), (0, ke.QX)(h), p.tradeNews.getTradeNews({
                                    lang: h
                                })]);
                            case 16:
                                if (e.t1 = e.sent, y = (0, e.t0)(e.t1, 3), T = y[0], k = y[1], P = y[2], j = "fulfilled" === T.status ? T.value : [], A = "fulfilled" === k.status ? k.value : [], D = "fulfilled" === P.status ? P.value : void 0, !("" === d || 0 === A.length && b.S$)) {
                                    e.next = 29;
                                    break
                                }
                                return p.pageStore.updateState({
                                    tradeType: b.Gr.SPOT,
                                    page: b.KL.TRADE
                                }), p.pageStore.updateTag(D || {
                                    list: [],
                                    riskys: [],
                                    listMap: {}
                                }), d && p.pageStore.updateState({
                                    symbol: (0, De.X)(d)
                                }), e.abrupt("return", null);
                            case 29:
                                if (C = (0, je.Ky)(A, d), S = C.filterProducts, _ = void 0 === S ? [] : S, U = C.curSymbol, !((null === d || void 0 === d ? void 0 : d.split("_").length) > 2) && _.length) {
                                    e.next = 32;
                                    break
                                }
                                return e.abrupt("return", r.error("not found", 404));
                            case 32:
                                if (d === U || !d.includes("_")) {
                                    e.next = 34;
                                    break
                                }
                                return e.abrupt("return", r.redirect((0, b.zw)(U, (0, c.E2)(l)), 301));
                            case 34:
                                return I = (0, Ae.getExchangeInfo)(_), F = (0, je.c1)(_[0]) || {}, B = (0, Pe.BD)(j, U), N = (0, De.X)(U), p.products.updateState({
                                    productMap: (0, a._)({}, N[0], F)
                                }), p.exchangeInfo.updateState(I), p.pageStore.updateState({
                                    info: B,
                                    symbol: N,
                                    tradeType: b.Gr.SPOT,
                                    page: b.KL.TRADE
                                }), p.pageStore.updateTag(D || {
                                    list: [],
                                    riskys: [],
                                    listMap: {}
                                }), e.abrupt("return", {
                                    lang: m,
                                    pathPrefix: v,
                                    level2Domain: x,
                                    isRegionMode: w
                                });
                            case 43:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })));
                return function(r) {
                    return e.apply(this, arguments)
                }
            }();
            const ze = function() {
                (0, Te.IQ)(), (0, Te.v2)(), (0, Te.xo)(), (0, Te.R8)(), (0, Te.Hg)(), (0, Ce.$)(), (0, Se.W)(), (0, x.TBx)(),
                function() {
                    var e = (0, o._)((0, k.T)(Ne.Og, !1), 1)[0],
                        r = (0, o._)((0, k.T)(Ne.Ck, !1), 1)[0],
                        t = (0, l.useMemo)((function() {
                            return {
                                kline_sync_mode: e,
                                chart_indicators_sync_mode: r
                            }
                        }), [e, r]);
                    (0, l.useEffect)((function() {
                        (0, Be.u4)("$pageview", {
                            df_tpSettings: JSON.stringify(t)
                        })
                    }), [t])
                }();
                var e = (0, l.useCallback)((function() {
                    return (0, d.jsxs)(d.Fragment, {
                        children: [(0, d.jsx)(m.W, {
                            ssr: !0,
                            children: (0, d.jsx)(p.A, {})
                        }), (0, d.jsx)(ye, {})]
                    })
                }), []);
                return (0, d.jsx)(g.A, {
                    render: e
                })
            }
        },
        mYSF: (e, r, t) => {
            t.d(r, {
                A: () => d
            });
            var n = t("hrAD"),
                a = t("qoEP"),
                o = t("KrVi"),
                i = t("mXdx"),
                s = (t("DTvD"), t("2IQ4"));

            function d(e) {
                var r = e.children,
                    t = (0, o._)(e, ["children"]);
                return (0, i.jsx)(s.A, (0, a._)((0, n._)({
                    sx: {
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap"
                    }
                }, t), {
                    children: r
                }))
            }
        },
        tB80: (e, r, t) => {
            t.r(r), t.d(r, {
                default: () => p
            });
            var n = t("mXdx"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("BiCW"),
                s = t("bQ69"),
                d = t("Qhol"),
                l = t("e3WN"),
                u = (0, i.A)((function() {
                    return t.e(9139).then(t.bind(t, "mwpU"))
                }), {
                    webpack: function() {
                        return ["mwpU"]
                    }
                }),
                c = (0, i.A)((function() {
                    return t.e(8031).then(t.bind(t, "oFct"))
                }), {
                    webpack: function() {
                        return ["oFct"]
                    }
                }),
                g = function(e) {
                    var r = e.layout,
                        t = (0, d.QsY)().isMobile,
                        a = (0, l.PO)();
                    return t ? (0, n.jsx)(u, {}) : (0, n.jsx)("div", {
                        className: "".concat(s.a0 === r || a ? "" : "fixed bottom-0"),
                        style: {
                            gridArea: "footer",
                            padding: "0px 16px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "-1px",
                            background: "var(--color-BasicBg)",
                            borderTop: "".concat(s.a0 === r ? 1 : 4, "px solid var(--color-TradeBg)"),
                            zIndex: 10,
                            minWidth: "0",
                            width: "100%"
                        },
                        children: (0, n.jsx)(c, {})
                    })
                };
            const p = o().memo(g)
        },
        o82E: (e, r, t) => {
            t.d(r, {
                A: () => i
            });
            var n = t("mXdx"),
                a = t("DTvD"),
                o = function() {
                    return (0, n.jsx)("div", {
                        children: (0, n.jsx)("div", {
                            style: {
                                width: "100vw",
                                position: "fixed",
                                zIndex: 1e4,
                                top: "64px",
                                height: "calc(100vh - 64px)",
                                backgroundColor: "var(--color-BasicBg)"
                            }
                        })
                    })
                };
            const i = (0, a.memo)(o)
        },
        T30Y: (e, r, t) => {
            t.d(r, {
                A: () => v
            });
            var n = t("mguP"),
                a = t("mXdx"),
                o = t("DTvD"),
                i = t.n(o),
                s = t("gz7j"),
                d = t("eWL+"),
                l = t("b2AH"),
                u = t("qoEh"),
                c = t("KLjx"),
                g = t("dZkl"),
                p = t("Xeyi"),
                f = t("bQ69"),
                h = t("3Myb"),
                m = function() {
                    var e = (0, l.ok)().getI18n,
                        r = (0, n._)((0, u.Gr)(), 1)[0],
                        t = (0, n._)((0, s.s)(), 1)[0],
                        i = (0, d.hF)()[t] || {},
                        m = i.close,
                        v = i.baseAsset,
                        x = void 0 === v ? "" : v,
                        w = i.quoteAsset,
                        M = void 0 === w ? "" : w,
                        b = (0, c.s)(x),
                        y = null === b || void 0 === b ? void 0 : b.assetName,
                        T = (0, o.useMemo)((function() {
                            return t ? (0, g.q)({
                                getI18n: e,
                                price: m,
                                symbol: "".concat(x, "_").concat(M),
                                assetName: y
                            }) : e("trd-seo-title") || ""
                        }), [m, t, y, x, M]),
                        k = e("trd-seo-keywords"),
                        P = (0, o.useMemo)((function() {
                            return t ? (0, p.V$)(r) ? e("trd-margin-seo-desc", {
                                symbol: t
                            }) : e("trd-seo-description-2", {
                                base: x,
                                quote: M
                            }) : e("trd-seo-description")
                        }), [r, t, x, M]);
                    return f.S$ || y ? (0, a.jsx)(h.A, {
                        title: T,
                        keywords: k,
                        description: P
                    }) : (0, a.jsx)(a.Fragment, {})
                };
            const v = i().memo(m)
        },
        tZex: (e, r, t) => {
            t.d(r, {
                l: () => n.l
            });
            var n = t("FvGc")
        },
        FvGc: (e, r, t) => {
            t.d(r, {
                l: () => n
            });
            var n = (0, t("eAFj").A)((function(e) {
                return {
                    disableMouse: !1,
                    setDisableMouse: function(r) {
                        return e({
                            disableMouse: r
                        })
                    }
                }
            }))
        },
        OoNE: (e, r, t) => {
            t.d(r, {
                A: () => d
            });
            var n = t("mXdx"),
                a = t("KlMB"),
                o = t("zHUU"),
                i = t("bQ69"),
                s = t("Qhol");
            const d = function() {
                var e = (0, o.Bl)();
                return (0, s.nHk)() && !i.S$ ? (0, n.jsx)(a.A, {
                    expand: !0,
                    lng: e,
                    i18nHost: i.K5
                }) : null
            }
        },
        KKiL: (e, r, t) => {
            t.d(r, {
                o: () => c
            });
            var n = t("mXdx"),
                a = t("DTvD"),
                o = t("BiCW"),
                i = t("nlZ+"),
                s = t("FvGc"),
                d = t("RtFJ"),
                l = t("qoEh"),
                u = (0, o.A)((function() {
                    return t.e(6642).then(t.bind(t, "hAvq"))
                }), {
                    webpack: function() {
                        return ["hAvq"]
                    },
                    ssr: !1,
                    loading: function() {
                        return null
                    }
                }),
                c = (0, a.memo)((function() {
                    var e = (0, i.un)(i.$n),
                        r = (0, i.un)(i.LA),
                        t = (0, a.useCallback)((function() {
                            r(!1)
                        }), [r]),
                        o = (0, s.l)((function(e) {
                            return e.setDisableMouse
                        })),
                        c = (0, l.i2)(),
                        g = (0, a.useCallback)((function(e) {
                            o(e), (0, d.M)("quick_trading", c)
                        }), [o, c]);
                    return e ? (0, n.jsx)(u, {
                        setDisableMouse: g,
                        onRemove: t
                    }) : null
                }))
        },
        "0ac5": (e, r, t) => {
            t.d(r, {
                A: () => d
            });
            var n = t("mXdx"),
                a = t("DTvD"),
                o = t("o82E"),
                i = t("bQ69"),
                s = function(e) {
                    var r = e.children;
                    return i.S$ ? (0, n.jsx)(o.A, {}) : (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)("div", {}), r]
                    })
                };
            const d = (0, a.memo)(s)
        },
        "5rT1": (e, r, t) => {
            t.d(r, {
                A9: () => c,
                Ff: () => g,
                YM: () => u,
                i4: () => l,
                pA: () => d,
                rr: () => p,
                t5: () => s,
                vE: () => f
            });
            var n = t("hrAD"),
                a = t("qoEP"),
                o = t("bLkt"),
                i = t("J4i7"),
                s = {
                    borderTop: "4px solid var(--color-TradeBg)",
                    display: "grid",
                    gridGap: "4px",
                    gridTemplateColumns: "1fr minmax(253px, 320px) minmax(510px, 880px) minmax(253px, 320px) 1fr",
                    gridTemplateRows: "56px 360px 160px minmax(169px, 1fr) minmax(146px, auto) 560px 24px",
                    gridTemplateAreas: '\n    "left subHeader subHeader market right"\n    "left orderbook chart market right"\n    "left orderbook chart trades right"\n    "left orderbook orderform trades right"\n    "left orderbook orderform trades right"\n    "left basictable basictable basictable right"\n    "footer footer footer footer footer"'
                },
                d = {
                    borderTop: "4px solid var(--color-TradeBg)",
                    display: "grid",
                    gridGap: "4px",
                    gridTemplateColumns: "1fr minmax(253px, 320px) minmax(510px, 880px) minmax(253px, 320px) 1fr",
                    gridTemplateRows: "56px 360px 160px minmax(169px, 1fr) minmax(146px, auto) 560px 24px",
                    gridTemplateAreas: '\n    "left subHeader subHeader market right"\n    "left orderbook chart market right"\n    "left orderbook chart trades right"\n    "left orderbook orderform trades right"\n    "left orderbook orderform marketActivity right"\n    "left basictable basictable basictable right"\n    "footer footer footer footer footer"'
                },
                l = (0, a._)((0, n._)({}, i.B), {
                    borderTop: "4px solid var(--color-TradeBg)",
                    height: "calc(100vh - 64px)",
                    gridGap: "4px",
                    gridTemplateColumns: "1fr 305px 260px",
                    gridTemplateRows: "1fr auto 300px 24px",
                    gridTemplateAreas: '\n    "chart orderbook trades"\n    "chart orderform orderform"\n    "userinfo orderform orderform"\n    "footer footer footer"'
                }),
                u = (0, a._)((0, n._)({}, i.B), {
                    borderTop: "4px solid var(--color-TradeBg)",
                    gridTemplateColumns: "100vw",
                    gridTemplateRows: "100vh",
                    gridTemplateAreas: '"chart"',
                    overflow: "hidden",
                    position: "relative",
                    zIndex: "999"
                }),
                c = (0, a._)((0, n._)({}, i.B), {
                    borderTop: "2px solid var(--color-TradeBg)",
                    minHeight: "100vh",
                    height: "100%",
                    gridGap: "1px",
                    gridTemplateColumns: "1fr",
                    gridTemplateRows: "1fr 24px",
                    gridTemplateAreas: '\n    "content"\n    "footer"'
                }),
                g = (0, a._)((0, n._)({}, i.B), {
                    gridGap: "4px",
                    gridTemplateColumns: "320px 1fr 288px 288px",
                    gridTemplateRows: "1.15fr 285px",
                    gridTemplateAreas: '\n    "market chart orderbook orderform"\n    "userinfo userinfo trades orderform"\n  '
                }),
                p = ((0, a._)((0, n._)({}, i.B), {
                    display: "grid",
                    overflowY: "hidden",
                    overflowX: "hidden",
                    width: "100%",
                    height: "100%",
                    gridArea: "content",
                    gridGap: "1px",
                    gridTemplateColumns: "3fr 1fr 288px",
                    gridTemplateRows: "48px minmax(48px, auto) 2fr 1fr 0.5fr 1fr",
                    gridTemplateAreas: '\n    "subHeader orderbook orderform"\n    "favorite orderbook orderform"\n    "chart orderbook orderform"\n    "depth trades orderform"\n    "userinfo trades asset"'
                }), (0, a._)((0, n._)({}, i.B), {
                    borderTop: "none",
                    gridGap: "4px",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gridTemplateRows: "minmax(64px, auto) minmax(300px, 387px) 1.15fr 1fr 24px",
                    gridTemplateAreas: '\n    "switch switch switch"\n    "chart chart orderform"\n    "trades orderbook orderform"\n    "userinfo userinfo orderform"\n    "footer footer footer"',
                    minHeight: 1088
                })),
                f = function(e) {
                    var r = e.isChartFullscreen,
                        t = void 0 !== r && r;
                    return (0, n._)((0, a._)((0, n._)({}, i.B), {
                        borderTop: "none",
                        gridGap: "4px",
                        gridTemplateColumns: "100vw",
                        gridTemplateRows: "auto minmax(124px, auto) ".concat(o.Yh, "px 1fr 72px"),
                        gridTemplateAreas: '\n            "delist"\n            "switch"\n            "charts"\n            "userinfo"\n            "orderform"',
                        minHeight: 930,
                        height: "auto"
                    }), t ? {
                        position: "fixed",
                        top: 0,
                        gridTemplateRows: "100vh",
                        gridTemplateAreas: '"charts"'
                    } : {})
                }
        },
        "6fmq": (e, r, t) => {
            t.d(r, {
                A: () => l
            });
            var n = t("mXdx"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("ZByt"),
                s = function() {
                    return (0, i.K)(), null
                };
            const d = o().memo(s);
            const l = function() {
                return (0, n.jsx)(d, {})
            }
        },
        aRFd: (e, r, t) => {
            t.d(r, {
                A: () => c
            });
            var n = t("mguP"),
                a = t("mXdx"),
                o = t("DTvD"),
                i = t.n(o),
                s = t("i0BV"),
                d = t("Qhol"),
                l = function(e) {
                    var r = e.load,
                        t = e.setLoad;
                    return (0, o.useEffect)((function() {
                        r || t(!0)
                    }), [r]), (0, a.jsx)(s.A, {
                        webKey: "leverageTokenTrade"
                    })
                },
                u = function() {
                    var e = (0, n._)((0, d.sL)(), 1)[0],
                        r = (0, d.Fky)(e),
                        t = (0, o.useState)(!1),
                        i = t[0],
                        s = t[1],
                        u = (0, d.nHk)();
                    return (r || i) && u ? (0, a.jsx)(l, {
                        load: i,
                        setLoad: s
                    }) : null
                };
            const c = i().memo(u)
        },
        cxN1: (e, r, t) => {
            t.d(r, {
                i: () => o
            });
            var n = t("bQ69"),
                a = t("5rT1"),
                o = function(e) {
                    var r = e.isChartView,
                        t = e.layout,
                        o = e.isDestop,
                        i = void 0 !== o && o,
                        s = e.isDisableAct,
                        d = void 0 !== s && s;
                    return r ? a.YM : t === n.Pv && d ? a.t5 : t === n.Pv ? a.pA : t === n.a0 ? a.i4 : t === n.ug && i ? a.Ff : a.A9
                }
        },
        RtFJ: (e, r, t) => {
            t.d(r, {
                M: () => a
            });
            var n = t("wtFP"),
                a = function(e, r) {
                    (0, n.u4)("$WebClick", {
                        eventName: "trade_page_advanced_components",
                        $element_id: "drag",
                        item: e,
                        pageName: r ? "spot_trading" : "margin_trading",
                        df_source: r ? "spot" : "margin"
                    })
                }
        },
        FyDe: (e, r, t) => {
            t.d(r, {
                Og: () => G,
                Ck: () => Y,
                FF: () => J,
                VV: () => X,
                jQ: () => $
            });
            var n = t("S+0I"),
                a = t("mguP"),
                o = t("jbFV"),
                i = t.n(o),
                s = t("mXdx"),
                d = t("DTvD"),
                l = t("0Rlb"),
                u = t("T0Sc"),
                c = function() {
                    var e = (0, u.o)("", "trade-ui").getI18n;
                    return (0, d.useMemo)((function() {
                        return {
                            moreInfo: e("kline-sync-more-info", {
                                defaultValue: "More Info"
                            }),
                            chartSynchronization: e("kline-drawings-sync-mode", {
                                defaultValue: "Chart Synchronization"
                            }),
                            chartDrawingSyncMode: e("kline-sync-mode", {
                                defaultValue: "Chart Drawings Sync Mode"
                            }),
                            chartDrawingSyncModeTooltip: e("kline-sync-mode-tooltip", {
                                defaultValue: "Chart Drawings Sync Mode: Enter a mode where drawings are saved to the server and synced across devices which also has the feature turned on. Limited to 100 drawings per symbol/trading pair."
                            }),
                            cancel: e("trd-dialog-cancel", {
                                defaultValue: "Cancel"
                            }),
                            confirm: e("trd-dialog-confirm", {
                                defaultValue: "Confirm"
                            }),
                            doNotShowAgain: e("do-not-show-again", {
                                defaultValue: "Don't Show Again For 7 Days"
                            }),
                            drawing: {
                                tooltip: e("kline-drawing-tooltip", {
                                    defaultValue: "Chart Drawings Sync Mode: Enter a mode where drawings are saved to the server and synced across devices which also has the feature turned on. Limited to 100 drawings per symbol/trading pair. Available on original chart view."
                                })
                            },
                            addDrawings: {
                                title: e("add-drawings", {
                                    defaultValue: "Add Drawings"
                                }),
                                description: e("add-drawings-description", {
                                    defaultValue: "Drawings saved locally will be added to drawings on the server for this symbol/token. Limited to 100 drawings per symbol/trading pair."
                                }),
                                tooltip: e("add-drawings-tooltip", {
                                    defaultValue: "Add Drawings:  Drawings saved locally will be added to drawings on the server for this symbol/token."
                                }),
                                toast: {
                                    succeed: e("add-drawings-succeed-toast", {
                                        defaultValue: "Drawings successfully added"
                                    }),
                                    failed: e("add-drawings-failed-toast", {
                                        defaultValue: "Add Drawings unsuccessful"
                                    })
                                }
                            },
                            overwriteDrawings: {
                                title: e("overwrite-drawings", {
                                    defaultValue: "Overwrite Drawings"
                                }),
                                description: e("overwrite-drawings-description", {
                                    defaultValue: "Drawings saved locally will replace drawings on the server for this symbol/token. Limited to 100 drawings per symbol/trading pair. Drawings replaced cannot be retrieved."
                                }),
                                tooltip: e("overwrite-drawings-tooltip", {
                                    defaultValue: "Overwrite Drawings: Drawings saved locally will replace drawings on the server for this symbol/token."
                                }),
                                toast: {
                                    succeed: e("overwrite-drawings-succeed-toast", {
                                        defaultValue: "Drawings successfully overwritten"
                                    }),
                                    failed: e("overwrite-drawings-failed-toast", {
                                        defaultValue: "Overwrite Drawings unsuccessful"
                                    })
                                }
                            },
                            indicator: {
                                title: e("kline-indicator-sync-title", {
                                    defaultValue: "Chart Indicators Sync Mode"
                                }),
                                dialog: {
                                    title: e("kline-indicator-sync-dialog-title", {
                                        defaultValue: "Overwrite Indicator Settings"
                                    }),
                                    description: e("kline-indicator-sync-description", {
                                        defaultValue: "Indicator Settings saved locally will replace indicator settings on the server."
                                    })
                                },
                                tooltip1: e("kline-indicator-sync-tooltip-1", {
                                    defaultValue: "Chart Indicators Sync Mode: Will save your indicator settings to the server and sync across devices which also has the feature turned on. Available on original chart view."
                                }),
                                tooltip2: e("kline-indicator-sync-tooltip-2", {
                                    defaultValue: "Overwrite Indicators: Indicator settings saved locally will replace indicators settings on the server"
                                }),
                                overwrite: e("kline-indicator-sync-overwrite", {
                                    defaultValue: "Overwrite"
                                }),
                                toast: {
                                    succeed: e("overwrite-indicators-succeed-toast", {
                                        defaultValue: "Indicator Settings successfully overwritten"
                                    })
                                }
                            }
                        }
                    }), [e])
                },
                g = t("hrAD"),
                p = t("qoEP"),
                f = t("f3y+"),
                h = t("tSdT"),
                m = t("I4z7"),
                v = t("Gz4J"),
                x = t("kcvK"),
                w = t("HvRD"),
                M = function(e) {
                    var r = e.children,
                        t = e.width,
                        n = void 0 === t ? 220 : t;
                    return (0, s.jsx)(x.A, {
                        enablePortal: !0,
                        useReactPopper: !0,
                        arrow: !0,
                        reactPopperProps: {
                            sameWidth: !1,
                            popperWidth: n
                        },
                        bubbleClassName: "typography-caption1 text-SecondaryBg [&_.bn-bubble-content]:!max-h-full",
                        trigger: "hover",
                        tooltips: r,
                        children: (0, s.jsx)(w.A, {
                            className: "text-IconNormal hover:text-PrimaryText text-[16px]"
                        })
                    })
                },
                b = t("oQEc"),
                y = t("q+oq"),
                T = t("Qhol"),
                k = t("gz7j"),
                P = t("CLKF"),
                j = t("lSwr"),
                A = function() {
                    var e = (0, a._)((0, k.s)(), 1)[0],
                        r = (0, P.O)();
                    return {
                        namespace: (0, d.useMemo)((function() {
                            return r ? j.ZC : j.X8
                        }), [r]),
                        symbol: e
                    }
                },
                D = function(e) {
                    return function() {
                        var r = (0, T.nHk)(),
                            t = (0, b.x)("finance-common", e),
                            n = t.result,
                            a = t.isLoading;
                        return !!(0, d.useMemo)((function() {
                            return r && !a && (null === n || void 0 === n ? void 0 : n.pass)
                        }), [a, r, null === n || void 0 === n ? void 0 : n.pass])
                    }
                },
                C = function(e) {
                    var r = e.key,
                        t = e.trackCallback;
                    return function() {
                        var e = (0, a._)((0, y.T)(r, !1), 2),
                            n = e[0],
                            o = void 0 !== n && n,
                            i = e[1];
                        return {
                            toggle: (0, d.useCallback)((function() {
                                var e = !o;
                                i(e), t(e)
                            }), [o, i]),
                            data: o,
                            setData: i
                        }
                    }
                },
                S = t("wtFP"),
                _ = "kline-drawings-sync-key",
                U = D("Web_Drawings_to_BE"),
                I = C({
                    key: _,
                    trackCallback: function(e) {
                        (0, S.u4)("$WebClick", {
                            module: "Preference_&_style_settings",
                            $element_id: "kline_sync_mode",
                            action: e ? "turn_on" : "turn_off"
                        })
                    }
                }),
                F = function() {
                    var e = U(),
                        r = I();
                    return (0, p._)((0, g._)({}, r), {
                        data: r.data && e
                    })
                },
                B = function() {
                    var e = c();
                    return (0, s.jsxs)(M, {
                        children: [e.drawing.tooltip, " ", (0, s.jsx)("a", {
                            className: "typography-caption0 text-TextLink no-underline",
                            target: "_blank",
                            href: "/support/faq/ada761201c6f44d1acc125e27b680331",
                            children: e.moreInfo
                        }), (0, s.jsx)("div", {
                            children: e.overwriteDrawings.tooltip
                        }), (0, s.jsx)("div", {
                            children: e.addDrawings.tooltip
                        })]
                    })
                },
                N = function(e) {
                    var r = e.onAdd,
                        t = e.onOverwrite,
                        n = c(),
                        a = F(),
                        o = a.toggle,
                        i = a.data;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "setting-item-content-i",
                            children: [(0, s.jsxs)("div", {
                                className: "item-left gap-[6px]",
                                children: [n.chartDrawingSyncMode, (0, s.jsx)(B, {})]
                            }), (0, s.jsx)(m.A, {
                                size: "small",
                                checked: i,
                                onChange: o
                            })]
                        }), i && (0, s.jsxs)("div", {
                            className: "flex gap-[--space-2xs] h-[24px]",
                            children: [(0, s.jsx)(v.A, {
                                className: "w-full h-full typography-subtitle3",
                                style: {
                                    minHeight: 0
                                },
                                variant: "secondary",
                                onClick: t,
                                children: n.overwriteDrawings.title
                            }), (0, s.jsx)(v.A, {
                                className: "w-full h-full typography-subtitle3",
                                style: {
                                    minHeight: 0
                                },
                                variant: "secondary",
                                onClick: r,
                                children: n.addDrawings.title
                            })]
                        })]
                    })
                },
                L = t("sTk4"),
                z = "kline-indicator-sync-key",
                Q = D("Indicators_to_BE"),
                R = C({
                    key: z,
                    trackCallback: function(e) {
                        (0, S.u4)("$WebClick", {
                            module: "Preference_&_style_settings",
                            $element_id: "chart_indicators_sync_mode",
                            action: e ? "turn_on" : "turn_off"
                        })
                    }
                }),
                O = function() {
                    var e = Q(),
                        r = R();
                    return (0, p._)((0, g._)({}, r), {
                        data: r.data && e
                    })
                },
                W = function() {
                    var e = c();
                    return (0, s.jsxs)(M, {
                        children: [(0, s.jsx)("div", {
                            children: e.indicator.tooltip1
                        }), (0, s.jsx)("a", {
                            className: "typography-caption0 text-TextLink no-underline",
                            target: "_blank",
                            href: "/support/faq/ada761201c6f44d1acc125e27b680331",
                            children: e.moreInfo
                        }), (0, s.jsx)("div", {
                            children: e.indicator.tooltip2
                        })]
                    })
                },
                q = function(e) {
                    var r = e.onOverwrite,
                        t = c(),
                        n = O(),
                        a = n.toggle,
                        o = n.data;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "setting-item-content-i",
                            children: [(0, s.jsxs)("div", {
                                className: "item-left gap-[6px]",
                                children: [t.indicator.title, (0, s.jsx)(W, {})]
                            }), (0, s.jsx)(m.A, {
                                size: "small",
                                checked: o,
                                onChange: a
                            })]
                        }), o && (0, s.jsxs)("div", {
                            className: "flex gap-[--space-2xs] h-[24px]",
                            children: [(0, s.jsx)(v.A, {
                                className: "w-full h-full typography-subtitle3 p-0",
                                style: {
                                    minHeight: 0
                                },
                                variant: "secondary",
                                onClick: r,
                                children: t.indicator.overwrite
                            }), (0, s.jsx)("div", {
                                className: "w-full"
                            })]
                        })]
                    })
                },
                E = t("jwne"),
                V = t("zxgP"),
                H = function(e) {
                    var r = e.type,
                        t = e.visible,
                        n = e.onCancel,
                        a = e.onConfirm,
                        o = (0, d.useState)(!1),
                        i = o[0],
                        l = o[1],
                        u = c(),
                        g = function(e) {
                            var r = c();
                            switch (e) {
                                case "drawing:add":
                                    return r.addDrawings.title;
                                case "drawing:overwrite":
                                    return r.overwriteDrawings.title;
                                case "indicator:overwrite":
                                    return r.indicator.dialog.title;
                                default:
                                    return ""
                            }
                        }(r),
                        p = function(e) {
                            var r = c();
                            switch (e) {
                                case "drawing:add":
                                    return r.addDrawings.description;
                                case "drawing:overwrite":
                                    return r.overwriteDrawings.description;
                                case "indicator:overwrite":
                                    return r.indicator.dialog.description;
                                default:
                                    return ""
                            }
                        }(r),
                        f = (0, d.useCallback)((function() {
                            l(!1), null === n || void 0 === n || n()
                        }), [n]),
                        h = (0, d.useCallback)((function() {
                            l(!1), null === a || void 0 === a || a({
                                type: r,
                                doNotShowAgain: i
                            })
                        }), [i, a, r]);
                    return (0, s.jsxs)(E.Ay, {
                        visible: t,
                        onClose: f,
                        enablePortal: !0,
                        children: [(0, s.jsxs)(E.Ay.Content, {
                            className: "flex flex-col",
                            children: [(0, s.jsx)("div", {
                                className: "flex items-center justify-center typography-headline5 text-PrimaryText mb-[--space-2xs]",
                                children: g
                            }), (0, s.jsx)("div", {
                                className: "typography-body3 text-PrimaryText",
                                children: p
                            }), (0, s.jsx)("div", {
                                className: "border-0 border-b-[1px] border-solid border-Line my-[--space-m]"
                            }), (0, s.jsx)(V.A, {
                                onChange: function(e, r) {
                                    return l(r)
                                },
                                sz: "md",
                                children: u.doNotShowAgain
                            })]
                        }), (0, s.jsxs)(E.Ay.Footer, {
                            className: "gap-space-2xs",
                            children: [(0, s.jsx)(v.A, {
                                variant: "secondary",
                                className: "w-full h-[40px] min-h-0",
                                onClick: f,
                                children: u.cancel
                            }), (0, s.jsx)(v.A, {
                                variant: "primary",
                                className: "w-full h-[40px] min-h-0",
                                onClick: h,
                                children: u.confirm
                            })]
                        })]
                    })
                },
                G = _,
                Y = z,
                X = F,
                $ = O,
                K = 6048e5,
                J = function() {
                    var e = (0, d.useState)(!1),
                        r = e[0],
                        t = e[1],
                        o = (0, d.useState)("drawing:add"),
                        u = o[0],
                        g = o[1],
                        p = (0, a._)((0, l.M)("kline-drawings-hide-overwriting-dialog", 0), 2),
                        m = p[0],
                        v = p[1],
                        x = (0, a._)((0, l.M)("kline-drawings-hide-add-dialog", 0), 2),
                        w = x[0],
                        M = x[1],
                        b = (0, a._)((0, l.M)("kline-indicators-hide-overwrite-dialog", 0), 2),
                        y = b[0],
                        T = b[1],
                        k = c(),
                        P = U(),
                        j = Q(),
                        D = function() {
                            var e = c(),
                                r = A(),
                                t = r.namespace,
                                a = r.symbol,
                                o = (0, h.A)().enqueueNotification,
                                s = (0, d.useMemo)((function() {
                                    return {
                                        namespace: t,
                                        symbol: a,
                                        type: "sp"
                                    }
                                }), [t, a]),
                                l = (0, f.eN)({
                                    target: s
                                }),
                                u = (0, f.pC)({
                                    target: s
                                });
                            return {
                                add: (0, d.useCallback)((0, n._)(i().mark((function r() {
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.prev = 0, r.next = 3, l();
                                            case 3:
                                                o({
                                                    variant: "success",
                                                    message: e.addDrawings.toast.succeed
                                                }), r.next = 9;
                                                break;
                                            case 6:
                                                r.prev = 6, r.t0 = r.catch(0), o({
                                                    variant: "error",
                                                    message: e.addDrawings.toast.failed
                                                });
                                            case 9:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [0, 6]
                                    ])
                                }))), [l, o, e.addDrawings.toast.failed, e.addDrawings.toast.succeed]),
                                overwrite: (0, d.useCallback)((0, n._)(i().mark((function r() {
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.prev = 0, r.next = 3, u();
                                            case 3:
                                                o({
                                                    variant: "success",
                                                    message: e.overwriteDrawings.toast.succeed
                                                }), r.next = 9;
                                                break;
                                            case 6:
                                                r.prev = 6, r.t0 = r.catch(0), o({
                                                    variant: "error",
                                                    message: e.overwriteDrawings.toast.failed
                                                });
                                            case 9:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [0, 6]
                                    ])
                                }))), [u, o, e.overwriteDrawings.toast.failed, e.overwriteDrawings.toast.succeed])
                            }
                        }(),
                        C = function() {
                            var e = c(),
                                r = A().namespace,
                                t = (0, h.A)().enqueueNotification,
                                a = (0, L.hm)({
                                    namespace: r
                                });
                            return {
                                overwrite: (0, d.useCallback)((0, n._)(i().mark((function r() {
                                    return i().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.prev = 0, r.next = 3, a();
                                            case 3:
                                                t({
                                                    variant: "success",
                                                    message: e.indicator.toast.succeed
                                                }), r.next = 8;
                                                break;
                                            case 6:
                                                r.prev = 6, r.t0 = r.catch(0);
                                            case 8:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [0, 6]
                                    ])
                                }))), [a, t, e.indicator.toast.succeed])
                            }
                        }(),
                        S = (0, d.useCallback)((0, n._)(i().mark((function e() {
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(Date.now() >= K + m)) {
                                            e.next = 4;
                                            break
                                        }
                                        g("drawing:overwrite"), t(!0), e.next = 6;
                                        break;
                                    case 4:
                                        return e.next = 6, D.overwrite();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [D, m]),
                        _ = (0, d.useCallback)((0, n._)(i().mark((function e() {
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(Date.now() >= K + w)) {
                                            e.next = 4;
                                            break
                                        }
                                        g("drawing:add"), t(!0), e.next = 6;
                                        break;
                                    case 4:
                                        return e.next = 6, D.add();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [D, w]),
                        I = (0, d.useCallback)((0, n._)(i().mark((function e() {
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(Date.now() >= K + y)) {
                                            e.next = 4;
                                            break
                                        }
                                        g("indicator:overwrite"), t(!0), e.next = 6;
                                        break;
                                    case 4:
                                        return e.next = 6, C.overwrite();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [C, y]),
                        F = (0, d.useCallback)((function() {
                            return t(!1)
                        }), []),
                        B = (0, d.useCallback)((function(e) {
                            var r = e.type,
                                t = e.doNotShowAgain;
                            switch (F(), r) {
                                case "drawing:add":
                                    D.add(), t && M(Date.now());
                                    break;
                                case "drawing:overwrite":
                                    D.overwrite(), t && v(Date.now());
                                    break;
                                case "indicator:overwrite":
                                    C.overwrite(), t && T(Date.now())
                            }
                        }), [D, C, F, M, T, v]);
                    return P || P ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "setting-item",
                            children: [(0, s.jsx)("div", {
                                className: "flex items-center h-[32px] gap-1",
                                children: (0, s.jsx)("div", {
                                    className: "typography-caption2 text-TertiaryText",
                                    children: k.chartSynchronization
                                })
                            }), P && (0, s.jsx)(N, {
                                onAdd: _,
                                onOverwrite: S
                            }), j && (0, s.jsx)(q, {
                                onOverwrite: I
                            })]
                        }), (0, s.jsx)(H, {
                            visible: r,
                            onCancel: F,
                            onConfirm: B,
                            type: u
                        })]
                    }) : null
                }
        },
        zI5V: (e, r, t) => {
            t.d(r, {
                A: () => l
            });
            var n = t("mXdx"),
                a = t("DTvD"),
                o = t.n(a),
                i = t("GIr8"),
                s = t("0yrM"),
                d = function(e) {
                    var r = e.showGird,
                        t = void 0 === r || r;
                    return (0, n.jsx)(i.A, {
                        sx: {
                            height: "100%",
                            width: "100%",
                            gridArea: "basictable",
                            fontSize: 1,
                            color: "t.primary",
                            flexDirection: "column",
                            overflow: "hidden"
                        },
                        children: (0, n.jsx)(s.Uo, {
                            showGird: t
                        })
                    })
                };
            const l = o().memo(d)
        },
        gcdc: (e, r, t) => {
            t.d(r, {
                A: () => u
            });
            var n = t("hrAD"),
                a = t("mguP"),
                o = t("mXdx"),
                i = (t("DTvD"), t("cvvB")),
                s = t("GIr8"),
                d = t("gNVY"),
                l = {
                    cursor: "pointer",
                    fontSize: 1,
                    display: "inline-flex",
                    justifyContent: "center",
                    alignItems: "center",
                    bg: "var(--color-Line)",
                    px: 0,
                    py: "2px",
                    borderRadius: 0,
                    "&::-webkit-slider-thumb": {
                        width: "6px",
                        height: "12px",
                        borderRadius: 0,
                        bg: "var(--color-IconNormal)"
                    },
                    "&::-webkit-slider-thumb:hover": {
                        bg: "var(--color-PrimaryText)"
                    }
                };
            const u = function(e) {
                var r = e.namespace,
                    t = e.sx,
                    u = i.t1.DepthStore.createStore(r),
                    c = (0, a._)(u(i.t1.DepthStore.getDepthScale), 2),
                    g = c[0],
                    p = c[1];
                return (0, o.jsx)(s.A, {
                    className: "cancelIcon draggableCancel",
                    sx: (0, n._)({
                        alignItems: "center",
                        color: "t.grey400"
                    }, t),
                    children: (0, o.jsx)(d.A, {
                        sx: l,
                        min: "0",
                        max: "1000",
                        value: g,
                        ml: "xs",
                        flex: 1,
                        onChange: function(e) {
                            p(e.target.value)
                        }
                    })
                })
            }
        },
        R8rt: (e, r, t) => {
            t.d(r, {
                $: () => c
            });
            var n = t("mguP"),
                a = t("DTvD"),
                o = t("Qhol"),
                i = t("Impr"),
                s = t("bQ69"),
                d = t("hAzz"),
                l = t("3jSu"),
                u = t.n(l),
                c = function() {
                    var e, r = (0, n._)((0, o.sL)(), 1)[0],
                        t = (0, o.okI)(),
                        l = (0, i.cA)().symbolsMap,
                        c = (0, n._)((0, o.Grl)(), 2),
                        g = c[0],
                        p = c[1],
                        f = (0, o.q$z)(),
                        h = function(e) {
                            var r, t;
                            return e && (null === e || void 0 === e ? void 0 : e.type) ? Array.isArray(e.type) ? null === (t = e.type[0]) || void 0 === t ? void 0 : t.toUpperCase() : null === (r = e.type) || void 0 === r ? void 0 : r.toUpperCase() : ""
                        }(t),
                        m = (0, o.hFK)(),
                        v = null === (e = l[r]) || void 0 === e ? void 0 : e.type,
                        x = (0, o.d3A)(r),
                        w = !!l && !u()(l);
                    (0, a.useEffect)((function() {
                        p(s.Gr.SPOT)
                    }), []), (0, a.useEffect)((function() {
                        x && (0, d.H3)(h) && p(s.Gr.GRID)
                    }), [m]), (0, a.useEffect)((function() {
                        v && h && !f && w && (h === s.Gr.CROSS && ["BOTH", "CROSS"].includes(v) && p(s.Gr.CROSS), h === s.Gr.ISOLATED && ["BOTH", "ISOLATED"].includes(v) && p(s.Gr.ISOLATED))
                    }), [w]), (0, a.useEffect)((function() {
                        v && !f || !(0, d.V$)(g) ? !1 === x && (0, d.H3)(g) ? p(s.Gr.SPOT) : (g === s.Gr.CROSS && v === s.Gr.ISOLATED || g === s.Gr.ISOLATED && v === s.Gr.CROSS) && p(v) : p(s.Gr.SPOT)
                    }), [r, f])
                }
        }
    }
]);