(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [3549], {
        "0DKd": (e, t, n) => {
            "use strict";
            n.d(t, {
                d: () => o
            });
            var r = n("mXdx"),
                a = (n("DTvD"), n("1lvF")),
                i = n("xqbL"),
                s = n.n(i),
                l = n("G3iB");
            const o = ({
                className: e
            }) => {
                const t = (0, l.F7)(),
                    {
                        isLight: n
                    } = t;
                return (0, r.jsx)(a.Ay, {
                    className: s()({
                        "bg-custom-gradient-light": n,
                        "bg-custom-gradient-dark": !n
                    }, e, "h-[24px] w-full h-6 w-full bg-repeat bg-[400%_100%] animate-custom-animation")
                })
            }
        },
        "5JIq": (e, t, n) => {
            "use strict";

            function r(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "yyyy-MM-dd hh:mm",
                    n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                    r = n ? {
                        "M+": e.getUTCMonth() + 1,
                        "d+": e.getUTCDate(),
                        "h+": e.getUTCHours(),
                        "m+": e.getUTCMinutes(),
                        "s+": e.getUTCSeconds(),
                        "q+": Math.floor((e.getUTCMonth() + 3) / 3),
                        S: e.getUTCMilliseconds()
                    } : {
                        "M+": e.getMonth() + 1,
                        "d+": e.getDate(),
                        "h+": e.getHours(),
                        "m+": e.getMinutes(),
                        "s+": e.getSeconds(),
                        "q+": Math.floor((e.getMonth() + 3) / 3),
                        S: e.getMilliseconds()
                    },
                    a = t,
                    i = n ? e.getUTCFullYear() : e.getFullYear(),
                    s = /(y+)/.exec(t);
                if (null !== s) {
                    var l = s[1];
                    a = t.replace(l, "".concat(i).substr(4 - l.length))
                }
                return Object.keys(r).forEach((function(e) {
                    var t = new RegExp("(".concat(e, ")")).exec(a);
                    if (null !== t) {
                        var n = t[1];
                        a = a.replace(n, 1 === n.length ? r[e] : "00".concat(r[e]).substr("".concat(r[e]).length))
                    }
                })), a
            }
            n.d(t, {
                i: () => r
            })
        },
        uxM4: (e, t, n) => {
            "use strict";
            n.d(t, {
                z: () => o
            });
            var r = n("mXdx"),
                a = n("5JIq"),
                i = n("1lvF"),
                s = n("xs7W"),
                l = n("Gii1"),
                o = function(e) {
                    var t = e.strategyType,
                        n = (0, s.s)(),
                        o = (0, l.HH)().t;
                    if ("spotGrid" !== t && "futuresGrid" !== t) return null;
                    var c = n(t),
                        u = (0, a.i)(new Date(c), "yyyy-MM-dd hh:mm:ss");
                    return (0, r.jsx)(i.Ay, {
                        className: "text-DisabledText typography-body3",
                        children: o("landingPage-strategy-refreshDate", {
                            defaultValue: "Last updated on {{refreshDate}}.",
                            refreshDate: u
                        })
                    })
                }
        },
        VtEJ: (e, t, n) => {
            "use strict";
            n.d(t, {
                X: () => m
            });
            var r = n("mXdx"),
                a = n("DTvD"),
                i = n("HKzA"),
                s = n("jor4"),
                l = n("bznE"),
                o = n("1lvF"),
                c = n("HYEe"),
                u = n("Gii1"),
                d = function(e) {
                    var t = e.isVisible,
                        n = e.setIsVisible,
                        a = e.header,
                        o = e.body,
                        c = function() {
                            return n(!1)
                        },
                        d = (0, u.X_)().t;
                    return (0, r.jsxs)(i.Ay, {
                        onClose: c,
                        maskClose: !0,
                        modalSize: "small",
                        visible: t,
                        children: [(0, r.jsx)(i.Ay.Header, {
                            children: (0, r.jsx)(s.A, {
                                className: "justify-center",
                                children: a
                            })
                        }), (0, r.jsx)(i.Ay.Content, {
                            className: "!pt-[0] typography-body3 !pb-[36px] !md:pb-0",
                            children: o
                        }), (0, r.jsx)(i.Ay.Footer, {
                            className: "mt-[10px]",
                            children: (0, r.jsx)(l.A, {
                                className: "w-full",
                                variant: "primary",
                                onClick: c,
                                children: d("common-ok", {
                                    defaultValue: "OK"
                                })
                            })
                        })]
                    })
                },
                m = function(e) {
                    var t = e.modalHeader,
                        n = e.modalBody,
                        i = e.onClick,
                        s = (0, a.useState)(!1),
                        l = s[0],
                        u = s[1],
                        m = (0, a.useCallback)((function() {
                            "function" === typeof i && i(), u(!0)
                        }), [i]);
                    return (0, r.jsxs)(r.Fragment, {
                        children: [(0, r.jsx)(o.Ay, {
                            className: "flex cursor-pointer",
                            children: (0, r.jsx)(c.A, {
                                className: "text-DisabledText shrink-0 text-[24px]",
                                onClick: m
                            })
                        }), (0, r.jsx)(d, {
                            isVisible: l,
                            setIsVisible: u,
                            header: t,
                            body: n
                        })]
                    })
                }
        },
        "72g6": (e, t, n) => {
            "use strict";
            n.d(t, {
                Y: () => c
            });
            var r = n("hrAD"),
                a = n("mXdx"),
                i = n("DTvD"),
                s = n("ORvS"),
                l = n("Bdbj"),
                o = n("WLZf"),
                c = function(e) {
                    var t = e.className,
                        n = e.strategyTypeNumber,
                        c = e.onChange,
                        u = (0, o.X_)().t,
                        d = (0, i.useMemo)((function() {
                            return l.Bx.STRATEGY_TYPE_OPTIONS.map((function(e) {
                                return {
                                    children: u(e.name, e.tOptions),
                                    value: e.value,
                                    optionCheckIcon: !0
                                }
                            }))
                        }), [u]);
                    return (0, a.jsx)(s.A, {
                        className: t,
                        size: "middle",
                        type: "single",
                        variant: "auto",
                        emptyText: u("landingPage-strategy-no-results", {
                            defaultValue: "No results"
                        }),
                        value: ["".concat(n)],
                        onChange: function(e) {
                            var t = null === e || void 0 === e ? void 0 : e[0];
                            c(Number(t))
                        },
                        renderFn: function(e) {
                            var t, n = e.selects,
                                r = e.options,
                                a = null === n || void 0 === n ? void 0 : n[0];
                            return null === (t = r.find((function(e) {
                                return e.value === a
                            }))) || void 0 === t ? void 0 : t.children
                        },
                        options: d,
                        useReactPopper: !0,
                        children: d.map((function(e) {
                            return (0, a.jsx)(s.A.Option, (0, r._)({}, e), e.value)
                        }))
                    })
                }
        },
        xs7W: (e, t, n) => {
            "use strict";
            n.d(t, {
                s: () => s
            });
            var r = n("DTvD"),
                a = n("gYIm"),
                i = n("PhYZ"),
                s = function() {
                    var e = (0, i.N)(),
                        t = e.futuresGrid,
                        n = e.spotGrid;
                    return (0, r.useCallback)((function(e) {
                        return e === a.Sn ? n.lastUpdateTime : t.lastUpdateTime
                    }), [t.lastUpdateTime, n.lastUpdateTime])
                }
        },
        cy5s: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => ie
            });
            var r = n("mXdx"),
                a = n("DTvD"),
                i = n("QWVi"),
                s = n("qV1O"),
                l = n("1lvF"),
                o = n("3I7B"),
                c = n("iKvg"),
                u = n("hrAD"),
                d = n("qoEP"),
                m = n("mguP"),
                g = n("UuPx"),
                h = n("gYIm"),
                p = n("Gii1"),
                y = n("IWST"),
                f = n("C01/"),
                x = n("nK1b"),
                b = n("YZbU"),
                T = n("uxM4"),
                v = n("VtEJ"),
                k = n("WjPW"),
                j = n("HZrL"),
                _ = n("zokI"),
                N = n("jM3e"),
                A = n("xfYC"),
                C = n("4WNF"),
                D = n("qRru"),
                M = (0, _.A)((function() {
                    return n.e(5879).then(n.bind(n, "2yzs"))
                }), {
                    webpack: function() {
                        return ["2yzs"]
                    },
                    ssr: !1
                }),
                w = (0, _.A)((function() {
                    return Promise.all([n.e(2639), n.e(2165)]).then(n.bind(n, "Plm4"))
                }), {
                    webpack: function() {
                        return ["Plm4"]
                    },
                    ssr: !1
                }),
                V = function(e) {
                    var t = e.strategyTypeNumber,
                        n = e.clickTrackingData,
                        i = (0, a.useCallback)((function(e) {
                            var t = (0, N.fc)({
                                    symbol: e
                                }, C.W),
                                n = {
                                    pageName: "strategy_landing",
                                    df_source: x.vV.futuresGrid,
                                    module: "trending_market_top_10",
                                    $element_id: "create"
                                };
                            (0, D.u4)(A.ll.click, n), window.open(t, "_blank")
                        }), []);
                    return (0, r.jsx)(M, {
                        initialVisible: !1,
                        children: (0, r.jsx)(w, {
                            strategyTypeNumber: t,
                            clickTrackingData: n,
                            handleMarketClick: i
                        })
                    })
                };
            const I = (0, a.memo)(V);
            var S = (0, _.A)((function() {
                    return n.e(5879).then(n.bind(n, "2yzs"))
                }), {
                    webpack: function() {
                        return ["2yzs"]
                    },
                    ssr: !1
                }),
                z = (0, _.A)((function() {
                    return Promise.all([n.e(2639), n.e(3268)]).then(n.bind(n, "MFFg"))
                }), {
                    webpack: function() {
                        return ["MFFg"]
                    },
                    ssr: !1
                }),
                P = function(e) {
                    var t = e.clickTrackingData,
                        n = (0, g.nE)(),
                        i = (0, a.useCallback)((function(e) {
                            var t = (0, N.Wy)({
                                    symbol: e
                                }, C.W),
                                r = {
                                    pageName: "strategy_landing",
                                    df_source: x.vV.spotGrid,
                                    module: "trending_market_top_10",
                                    $element_id: "create"
                                };
                            n(A.ll.click, r), window.open(t, "_blank")
                        }), [n]);
                    return (0, r.jsx)(S, {
                        initialVisible: !1,
                        children: (0, r.jsx)(z, {
                            clickTrackingData: t,
                            handleMarketClick: i
                        })
                    })
                };
            const G = (0, a.memo)(P);
            var H, L, E = n("72g6"),
                F = n("0DKd"),
                Y = n("jor4"),
                U = n("g/AJ"),
                W = n.n(U),
                O = function() {
                    return (0, r.jsx)(Y.A, {
                        children: (0, r.jsx)(l.Ay, {
                            className: "bg-BasicBg p-[16px] flex-1",
                            children: W()(10).map((function(e, t) {
                                return (0, r.jsx)(F.d, {
                                    className: "my-[15px] w-full h-[48]"
                                }, t)
                            }))
                        })
                    })
                },
                R = (H = {}, (0, c._)(H, h.Sn, "spot_grid"), (0, c._)(H, h.us, "futures_grid"), H),
                X = function() {
                    return {
                        module: x.DM.TRENDING_MARKET_LIST,
                        df_source: x.vV.strategyTrading,
                        pageName: x.eQ.LANDING,
                        clientType: x.Yx,
                        eventName: x.b8.strategyLanding
                    }
                },
                B = "trendingMarket-tip",
                q = "Trending Market Top 10 showcases the top 10 trending asset pairs, ranked according to the number of active strategies. The ranking is determined from the highest to the lowest number of running strategies. If two assets have the same number of running strategies, the one with the greater 24-hour change ranks higher. In cases where both the number of active strategies and the 24-hour change are identical, the ranking is determined randomly.",
                K = function() {
                    var e = (0, m._)((0, k.z)(b.p.trendingMarketTab, "futuresGrid"), 1)[0],
                        t = (0, a.useState)((0, j.T7)(e)),
                        n = t[0],
                        i = t[1],
                        s = (0, p.HH)().t,
                        o = (0, g.nE)(),
                        c = s("landingPage-tradingAnalytics-marketTitle", {
                            defaultValue: "Trending Market Top 10"
                        }),
                        _ = (0, a.useCallback)((function(e) {
                            var t = X();
                            i((0, j.T7)(e)), o(x.ll.click, (0, d._)((0, u._)({}, t), {
                                $element_id: R[e]
                            }))
                        }), [o]),
                        N = (0, a.useCallback)((function() {
                            var e = X();
                            o(x.ll.click, (0, d._)((0, u._)({}, e), {
                                $element_id: "tool_tip"
                            }))
                        }), [o]);
                    return (0, a.useEffect)((function() {
                        i((0, j.T7)(e))
                    }), [e]), (0, r.jsx)(f.y, {
                        isShowSpinner: !1,
                        variant: "primary-gray",
                        mobileVariant: "primary-gray",
                        tabFontSize: "extraSmall",
                        skeletonTemplate: (0, r.jsx)(O, {}),
                        localForageKey: b.p.trendingMarketTab,
                        onTabClick: _,
                        renderAfterTabs: function(e) {
                            return e === h.us ? (0, r.jsx)(l.Ay, {
                                className: "absolute right-0 top-0 z-[10]",
                                children: (0, r.jsx)(E.Y, {
                                    className: "[&_.bn-select-field]:h-[32px]",
                                    strategyTypeNumber: n,
                                    onChange: i
                                })
                            }) : null
                        },
                        renderTabPane: function(e) {
                            var t = X();
                            return e === h.us ? (0, r.jsx)(l.Ay, {
                                className: "pt-[20px]",
                                children: (0, r.jsx)(I, {
                                    strategyTypeNumber: n,
                                    clickTrackingData: t
                                })
                            }) : e === h.Sn ? (0, r.jsx)(l.Ay, {
                                className: "pt-[20px]",
                                children: (0, r.jsx)(G, {
                                    clickTrackingData: t
                                })
                            }) : null
                        },
                        renderWrapper: function(e) {
                            return (0, r.jsx)(l.Ay, {
                                className: "border-[1px] border-solid border-Line rounded-[16px] p-[24px] flex-1 self-start",
                                children: e
                            })
                        },
                        renderTitle: function(e) {
                            return (0, r.jsxs)(l.Ay, {
                                children: [(0, r.jsx)(y.C, {
                                    classNames: "justify-between items-center mb-[12px] !md:mb-[20px]",
                                    title: c,
                                    icon: (0, r.jsx)(v.X, {
                                        onClick: function() {
                                            return N()
                                        },
                                        modalHeader: (0, r.jsx)(l.Ay, {
                                            className: "text-center",
                                            children: c
                                        }),
                                        modalBody: s(B, {
                                            defaultValue: q
                                        })
                                    })
                                }), (0, r.jsx)(l.Ay, {
                                    className: "mb-[20px]",
                                    children: (0, r.jsx)(T.z, {
                                        strategyType: e
                                    })
                                })]
                            })
                        }
                    })
                },
                $ = (0, _.A)((function() {
                    return n.e(5879).then(n.bind(n, "2yzs"))
                }), {
                    webpack: function() {
                        return ["2yzs"]
                    },
                    ssr: !1
                }),
                J = (0, _.A)((function() {
                    return Promise.all([n.e(2639), n.e(5976)]).then(n.bind(n, "sI6z"))
                }), {
                    webpack: function() {
                        return ["sI6z"]
                    },
                    ssr: !1
                }),
                Z = function(e) {
                    var t = e.strategyTypeNumber,
                        n = e.strategyType,
                        i = e.getClickTrackingData,
                        s = (0, g.nE)(),
                        l = (0, a.useMemo)((function() {
                            return "spotGrid" === n ? N.Wy : N.fc
                        }), [n]),
                        o = (0, a.useCallback)((function(e) {
                            var t = l({
                                    symbol: e
                                }, C.W),
                                r = {
                                    pageName: "strategy_landing",
                                    df_source: x.vV[n],
                                    module: "volatility_top_10",
                                    $element_id: "create"
                                };
                            s(A.ll.click, r), window.open(t, "_blank")
                        }), [s, l, n]);
                    return (0, r.jsx)($, {
                        initialVisible: !1,
                        children: (0, r.jsx)(J, {
                            strategyTypeNumber: t,
                            strategyType: n,
                            getClickTrackingData: i,
                            handleMarketClick: o
                        })
                    })
                },
                Q = (L = {}, (0, c._)(L, h.Sn, "spot_grid"), (0, c._)(L, h.us, "futures_grid"), L),
                ee = function(e) {
                    return {
                        module: x.DM.VOLATILITY_TOP,
                        df_source: e ? x.vV[e] : x.vV.strategyTrading,
                        pageName: x.eQ.LANDING,
                        clientType: x.Yx,
                        eventName: x.b8.strategyLanding
                    }
                },
                te = "volatility-tip",
                ne = "Volatility Top 10 presents the top 10 trending asset pairs based on volatility, a key metric for users employing Grid Trading Strategies. Rankings are determined by volatility, from highest to lowest. If two assets exhibit the same level of volatility, the asset with the higher 24-hour change ranks higher. If both the volatility and the 24-hour change are identical for two assets, the ranking is determined randomly.",
                re = function() {
                    var e = (0, m._)((0, k.z)(b.p.volatilityTab, "futuresGrid"), 1)[0],
                        t = (0, a.useState)((0, j.T7)(e)),
                        n = t[0],
                        i = t[1],
                        s = (0, p.HH)().t,
                        o = (0, g.nE)(),
                        c = s("landingPage-tradingAnalytics-volatilityTitle", {
                            defaultValue: "Volatility Top 10"
                        }),
                        _ = (0, a.useCallback)((function(e) {
                            var t = ee();
                            i((0, j.T7)(e)), o(x.ll.click, (0, d._)((0, u._)({}, t), {
                                $element_id: Q[e]
                            }))
                        }), [o]),
                        N = (0, a.useCallback)((function(e) {
                            var t = ee(e);
                            o(x.ll.click, (0, d._)((0, u._)({}, t), {
                                $element_id: "tool_tip"
                            }))
                        }), [o]);
                    return (0, a.useEffect)((function() {
                        i((0, j.T7)(e))
                    }), [e]), (0, r.jsx)(f.y, {
                        isShowSpinner: !1,
                        mobileVariant: "primary-gray",
                        variant: "primary-gray",
                        tabFontSize: "extraSmall",
                        localForageKey: b.p.volatilityTab,
                        onTabClick: _,
                        skeletonTemplate: (0, r.jsx)(O, {}),
                        renderWrapper: function(e) {
                            return (0, r.jsx)(l.Ay, {
                                className: "border-[1px] border-solid border-Line rounded-[16px] p-[24px] flex-1 self-start",
                                children: e
                            })
                        },
                        renderAfterTabs: function(e) {
                            return e === h.us ? (0, r.jsx)(l.Ay, {
                                className: "absolute right-0 top-0 z-[10]",
                                children: (0, r.jsx)(E.Y, {
                                    strategyTypeNumber: n,
                                    className: "[&_.bn-select-field]:h-[32px]",
                                    onChange: i
                                })
                            }) : null
                        },
                        renderTabPane: function(e) {
                            return (0, r.jsx)(l.Ay, {
                                className: "pt-[20px]",
                                children: (0, r.jsx)(Z, {
                                    strategyTypeNumber: n,
                                    strategyType: e,
                                    getClickTrackingData: ee
                                })
                            })
                        },
                        renderTitle: function(e) {
                            return (0, r.jsxs)(l.Ay, {
                                children: [(0, r.jsx)(y.C, {
                                    classNames: "justify-between items-center mb-[12px] !md:mb-[20px]",
                                    title: c,
                                    icon: (0, r.jsx)(v.X, {
                                        onClick: function() {
                                            return N(e)
                                        },
                                        modalHeader: (0, r.jsx)(l.Ay, {
                                            className: "text-center",
                                            children: c
                                        }),
                                        modalBody: s(te, {
                                            defaultValue: ne
                                        })
                                    })
                                }), (0, r.jsx)(l.Ay, {
                                    className: "mb-[24px]",
                                    children: (0, r.jsx)(T.z, {
                                        strategyType: e
                                    })
                                })]
                            })
                        }
                    })
                };

            function ae() {
                var e = (0, p.HH)().t;
                return (0, r.jsxs)(o.m, {
                    className: "hidden md:block",
                    children: [(0, r.jsx)("div", {
                        className: "".concat(i.Hj.TRADING_BOT_LIST, "-hit-hidden"),
                        children: (0, r.jsx)(l.Ay, {
                            className: "typography-headline4 text-PrimaryText mb-[24px]",
                            children: e("hot-coin-leaderboard", {
                                defaultValue: "Hot Coin Leaderboard"
                            })
                        })
                    }), (0, r.jsx)("div", {
                        className: "hidden ".concat(i.Hj.TRADING_BOT_LIST, "-hit-block"),
                        children: (0, r.jsx)(l.Ay, {
                            className: "typography-headline5 text-PrimaryText mb-[24px]",
                            children: e('hot-coin-availableCoins"', {
                                defaultValue: "Available Coins"
                            })
                        })
                    }), (0, r.jsxs)(l.Ay, {
                        className: "hidden md:grid lg:flex gap-[24px] md:grid-cols-1",
                        children: [(0, r.jsx)(s.$, {
                            defaultTrackingData: {
                                module: x.DM.TRENDING_MARKET_LIST
                            },
                            children: (0, r.jsx)(K, {})
                        }), (0, r.jsx)(s.$, {
                            defaultTrackingData: {
                                module: x.DM.VOLATILITY_TOP
                            },
                            children: (0, r.jsx)(re, {})
                        })]
                    })]
                })
            }
            const ie = (0, a.memo)(ae)
        },
        Uswq: e => {
            var t = Math.ceil,
                n = Math.max;
            e.exports = function(e, r, a, i) {
                for (var s = -1, l = n(t((r - e) / (a || 1)), 0), o = Array(l); l--;) o[i ? l : ++s] = e, e += a;
                return o
            }
        },
        XT5z: (e, t, n) => {
            var r = n("Uswq"),
                a = n("4f1k"),
                i = n("wHRZ");
            e.exports = function(e) {
                return function(t, n, s) {
                    return s && "number" != typeof s && a(t, n, s) && (n = s = void 0), t = i(t), void 0 === n ? (n = t, t = 0) : n = i(n), s = void 0 === s ? t < n ? 1 : -1 : i(s), r(t, n, s, e)
                }
            }
        },
        "g/AJ": (e, t, n) => {
            var r = n("XT5z")();
            e.exports = r
        }
    }
]);