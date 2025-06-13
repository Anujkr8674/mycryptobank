"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [2165], {
        "+AHR": (t, e, n) => {
            n.d(e, {
                _: () => o
            });
            var a = n("4hgs"),
                r = n("Cadp"),
                i = n("mkl1"),
                o = function(t) {
                    var e = t.page,
                        n = t.rows,
                        o = t.strategyType,
                        l = (0, a.useQuery)(i.FV.trending(o, e, n), (function() {
                            return (0, r.Xt)(t)
                        }), {
                            refetchOnMount: !1,
                            staleTime: 36e5,
                            keepPreviousData: !0
                        }),
                        u = l.data,
                        s = l.refetch,
                        d = l.error,
                        c = l.dataUpdatedAt;
                    return {
                        data: u,
                        isLoading: l.isFetching,
                        refetch: s,
                        error: d,
                        dataUpdatedAt: c
                    }
                }
        },
        Plm4: (t, e, n) => {
            n.r(e), n.d(e, {
                default: () => w
            });
            var a = n("hrAD"),
                r = n("qoEP"),
                i = n("mXdx"),
                o = n("DTvD"),
                l = n("1lvF"),
                u = n("+fvz"),
                s = n("nK1b"),
                d = n("gYIm"),
                c = n("+AHR"),
                g = n("B/Zp"),
                m = n("+hkn"),
                f = n("d12p"),
                h = n("cejE"),
                y = n("Cw/n"),
                p = n("Gii1"),
                x = n("GeCL"),
                C = n("nILh"),
                b = function(t) {
                    var e = t.longCount,
                        n = t.neuralCount,
                        a = t.shortCount,
                        r = Number(n) || "-",
                        o = Number(e) || "-",
                        u = Number(a) || "-";
                    return (0, i.jsx)(l.Ay, {
                        className: "typography-subtitle2",
                        children: "".concat(r, " : ").concat(o, " : ").concat(u)
                    })
                },
                j = n("7BTl"),
                k = function(t) {
                    var e = t.listData,
                        n = t.onMarketClick,
                        a = t.isLoading,
                        r = t.containerClassName,
                        u = function(t) {
                            var a = e[t];
                            "function" === typeof n && (null === a || void 0 === a ? void 0 : a.symbol) && n(null === a || void 0 === a ? void 0 : a.symbol, t)
                        },
                        s = function(t) {
                            var e = (0, p.HH)().t,
                                n = (0, x.Q)().isMobile;
                            return (0, o.useMemo)((function() {
                                return {
                                    columnConfig: {
                                        symbol: {
                                            headAndBodyClassName: "text-left min-w-[120px] md:min-w-[140px]",
                                            title: e("market", {
                                                defaultValue: "Market"
                                            }),
                                            renderValue: function(t) {
                                                var e = t.cellValue;
                                                return (0, i.jsx)(C.i, {
                                                    hasLogo: !1,
                                                    symbol: e,
                                                    strategyType: d.us
                                                })
                                            },
                                            valueKey: "symbol"
                                        },
                                        running: {
                                            headAndBodyClassName: "justify-end text-right min-w-[70px] typography-subtitle2",
                                            title: (0, i.jsx)(h.n, {
                                                tip: e("landingPage-totalRunningColumn-tooltip", {
                                                    defaultValue: "The Total Strategies in Running is the total number of grids in the \u201cNew\u201d and \u201cWorking\u201d state."
                                                }),
                                                children: (0, i.jsx)(l.Ay, {
                                                    className: "justify-end",
                                                    children: e("landingPage-tradeAnalytics-running", {
                                                        defaultValue: "Running"
                                                    })
                                                })
                                            }),
                                            renderValue: function(t) {
                                                var e = t.rowData.totalCount;
                                                return (0, i.jsx)(l.Ay, {
                                                    className: "typography-subtitle2",
                                                    children: e
                                                })
                                            }
                                        },
                                        direction: {
                                            headAndBodyClassName: "justify-end text-right min-w-[160px] typography-subtitle2",
                                            title: (0, i.jsx)(h.n, {
                                                tip: e("landingPage-directionColumn-tooltip", {
                                                    defaultValue: "The Neutral/Long/Short Ratio represents the number of futures grid orders in three directions."
                                                }),
                                                children: (0, i.jsx)(l.Ay, {
                                                    className: "justify-end",
                                                    children: e("landingPage-tradeAnalyticsFutures-direction", {
                                                        defaultValue: "Neural / Long / Short Ratio"
                                                    })
                                                })
                                            }),
                                            renderValue: function(t) {
                                                var e = t.rowData,
                                                    n = e.neuralCount,
                                                    a = e.longCount,
                                                    r = e.shortCount;
                                                return (0, i.jsx)(b, {
                                                    neuralCount: n,
                                                    longCount: a,
                                                    shortCount: r
                                                })
                                            }
                                        },
                                        action: {
                                            headAndBodyClassName: "justify-end text-right min-w-[80px]",
                                            title: e("Action", {
                                                defaultValue: "Action"
                                            }),
                                            renderValue: function(e) {
                                                var n = e.rowIndex;
                                                return (0, i.jsx)(y.A, {
                                                    className: "!px-0 !w-auto",
                                                    buttonClassName: "text-right",
                                                    variant: "text",
                                                    sz: "small",
                                                    onClick: function() {
                                                        return t(n)
                                                    }
                                                })
                                            }
                                        }
                                    },
                                    columnOrder: ["symbol", "running", "direction"].concat((0, f._)(n ? [] : ["action"]))
                                }
                            }), [e, t, n])
                        }(u),
                        c = s.columnOrder,
                        g = s.columnConfig;
                    return (0, i.jsx)(l.Ay, {
                        className: "min-h-[500px]",
                        children: (0, i.jsx)(m.D, {
                            listData: e,
                            columnOrder: c,
                            columnConfig: g,
                            containerClassName: r,
                            isLoading: a,
                            onRowClick: u,
                            skeletonTemplate: (0, i.jsx)(j.S, {})
                        })
                    })
                },
                v = n("qRru"),
                N = n("dECp"),
                A = function(t) {
                    var e = t.strategyTypeNumber,
                        n = t.clickTrackingData,
                        m = t.handleMarketClick,
                        f = (0, o.useState)(1),
                        h = f[0],
                        y = f[1],
                        p = {
                            rows: 600,
                            page: 1,
                            strategyType: e
                        },
                        x = (0, c._)(p),
                        C = x.data,
                        b = x.isLoading,
                        j = C || {
                            data: [],
                            total: 0
                        },
                        A = j.data,
                        w = j.total,
                        T = (0, u.Gu)().reduce((function(t, e) {
                            return t[e] = e, t
                        }), {}),
                        V = (0, g.j)(),
                        D = (0, o.useMemo)((function() {
                            return A.filter((function(t) {
                                return V(t.symbol, d.us)
                            })).filter((function(t) {
                                return !T[t.symbol]
                            }))
                        }), [V, A, T]),
                        _ = D.length / 10,
                        L = _ > 6 ? 6 : _,
                        M = (0, o.useMemo)((function() {
                            var t = 1 === h ? 0 : 10 * h,
                                e = 1 === h ? 10 * h : 10 * h + 10;
                            return D.slice(t, e)
                        }), [D, h]);
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsx)(k, {
                            isLoading: b,
                            listData: M,
                            onMarketClick: m
                        }), (0, i.jsx)(l.Ay, {
                            className: "mt-[24px]",
                            children: (0, i.jsx)(N.S, {
                                rowSize: 10,
                                page: h,
                                onPageClick: function(t) {
                                    (0, v.u4)(s.ll.click, (0, r._)((0, a._)({}, n), {
                                        $element_id: "next_page",
                                        pageNo: t
                                    })), y(t)
                                },
                                total: w,
                                maxPage: L
                            })
                        })]
                    })
                };
            const w = (0, o.memo)(A)
        }
    }
]);