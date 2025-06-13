"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [6226, 3845], {
        aWpQ: (e, l, a) => {
            a.d(l, {
                a: () => i
            });
            var s = a("mXdx"),
                n = (a("DTvD"), a("TaoO")),
                t = a("Olbk"),
                r = a("kcvK");
            const c = ["[&_.bn-select-field]:border-none", "[&_.bn-select-field]:w-auto", "[&_.bn-select-field]:h-auto", "[&_.bn-select-field]:p-0", "[&_.bn-select-field]:gap-0"].join(" "),
                i = ({
                    value: e,
                    options: l,
                    onChange: a,
                    popperWidth: i
                }) => (0, s.jsx)(n.A, {
                    enablePortal: !0,
                    useReactPopper: !0,
                    reactPopperProps: {
                        sameWidth: !1,
                        popperWidth: i
                    },
                    fieldVariant: "borderless",
                    once: !0,
                    className: c,
                    value: [e],
                    onChange: ([e]) => a(e),
                    renderFn: e => {
                        const [a] = e.selects, {
                            children: n = null
                        } = l.find((({
                            value: e
                        }) => a === e)) || {};
                        return (0, s.jsx)(t.Ay, {
                            className: "typography-caption1 text-SecondaryText md:text-TertiaryText",
                            children: n
                        })
                    },
                    children: l.map((({
                        value: e,
                        children: l,
                        tooltip: a
                    }) => (0, s.jsx)(n.A.Option, {
                        optionCheckIcon: !0,
                        value: e,
                        children: a ? (0, s.jsx)(r.A, {
                            enablePortal: !0,
                            useReactPopper: !0,
                            arrow: !0,
                            offset: 10,
                            tooltips: a,
                            className: "hover:cursor-help",
                            children: l
                        }) : l
                    }, e)))
                })
        },
        lGYZ: (e, l, a) => {
            a.r(l), a.d(l, {
                HeaderDecider: () => $,
                default: () => G
            });
            var s = a("mXdx"),
                n = a("DTvD"),
                t = a.n(n),
                r = a("Olbk"),
                c = a("tgKj"),
                i = a("7ZgD"),
                o = a("19p4"),
                d = a("T0Sc"),
                u = a("CNHc"),
                p = a("qv9I"),
                m = a("rPbR"),
                h = a("lrni");
            const x = ({
                namespace: e,
                onClick: l,
                showDot: a
            }) => {
                const {
                    getI18n: t
                } = (0, d.o)("trd-chart", "trade-ui"), r = (0, p.createStore)(e), c = (0, m.createStore)(e), [i] = r(p.getActiveTab), [o] = c(m.getCandlestickReference), [x] = c(m.getTradingViewReference), b = (0, n.useCallback)((e => {
                    i === p.Tabs.Origin ? o ? .showIndicatorsDialog() : x ? .activeChart().executeActionById("insertIndicator"), l ? .(e), e && e ? .nativeEvent.stopImmediatePropagation()
                }), [i, o, l, x]), f = (0, n.useMemo)((() => t("technicalIndicator", {
                    defaultValue: "Technical Indicator"
                }) || ""), [t]);
                return (0, s.jsx)(h.I, {
                    element: u.A,
                    tooltip: f,
                    onClick: b,
                    showDot: a
                })
            };
            var b = a("aWpQ");
            const f = ({
                namespace: e
            }) => {
                const {
                    getI18n: l
                } = (0, d.o)("trd-chart", "trade-ui"), a = (0, p.createStore)(e), [t, r] = a(p.getPriceType), c = (0, n.useMemo)((() => l("indexPrice", {
                    defaultValue: "Index Price"
                }) || ""), [l]), i = (0, n.useMemo)((() => l("markPrice", {
                    defaultValue: "Mark Price"
                }) || ""), [l]), u = (0, n.useMemo)((() => l("lastPrice", {
                    defaultValue: "Last Price"
                }) || ""), [l]), m = (0, n.useMemo)((() => l("markIV", {
                    defaultValue: "Mark IV"
                }) || ""), [l]), h = (0, n.useMemo)((() => e === o.ChartNamespace.EOPTIONS ? [{
                    children: u,
                    value: p.PriceType.Last
                }, {
                    children: i,
                    value: p.PriceType.Mark
                }, {
                    children: c,
                    value: p.PriceType.Index
                }, {
                    children: m,
                    value: p.PriceType.MarkIV
                }] : [{
                    children: c,
                    value: p.PriceType.Index
                }, {
                    children: i,
                    value: p.PriceType.Mark
                }, {
                    children: u,
                    value: p.PriceType.Last
                }]), [e, u, i, c, m]), x = (0, n.useCallback)((e => r(e)), [r]);
                return (0, s.jsx)(b.a, {
                    value: t,
                    options: h,
                    onChange: x,
                    popperWidth: 136
                })
            };
            var v = a("vjpm");
            const y = ({
                    value: e,
                    options: l,
                    onChange: a
                }) => (0, s.jsx)(r.Ay, {
                    className: "flex flex-row gap-[--space-m]",
                    children: l.map((({
                        value: l,
                        children: n
                    }) => {
                        const t = l === e ? "--color-PrimaryText" : "--color-TertiaryText";
                        return (0, s.jsx)(r.Ay, {
                            className: `typography-caption0 cursor-pointer text-[${t}]`,
                            onClick: () => a(l),
                            children: n
                        }, l)
                    }))
                }),
                g = {
                    [p.Tabs.Origin]: {
                        key: "Original",
                        defaultValue: "Original"
                    },
                    [p.Tabs.TradingView]: {
                        key: "",
                        defaultValue: "Trading View"
                    },
                    [p.Tabs.Depth]: {
                        key: "Depth",
                        defaultValue: "Depth"
                    }
                },
                k = ({
                    tabKeys: e,
                    namespace: l
                }) => {
                    const {
                        getI18n: a
                    } = (0, d.o)("trd-chart", "trade-ui"), t = (0, p.createStore)(l), [r, c] = t(p.getActiveTab), {
                        isIPad: i
                    } = (0, v.Q)(), o = (0, n.useMemo)((() => e.map((e => ({
                        value: e,
                        children: a(g[e].key, {
                            defaultValue: g[e].defaultValue
                        })
                    })))), [a, e]), u = (0, n.useCallback)((e => {
                        c(e)
                    }), [c]);
                    return i ? (0, s.jsx)(b.a, {
                        value: r,
                        onChange: u,
                        popperWidth: 136,
                        options: o
                    }) : (0, s.jsx)(y, {
                        value: r,
                        onChange: u,
                        options: o
                    })
                },
                j = t().lazy((() => a.e(386).then(a.bind(a, "6qc8")))),
                C = t().lazy((() => a.e(8292).then(a.bind(a, "rwWX")))),
                w = t().lazy((() => a.e(4797).then(a.bind(a, "2mdy")))),
                N = t().lazy((() => a.e(1671).then(a.bind(a, "4ko+")))),
                T = t().lazy((() => a.e(4832).then(a.bind(a, "T9kP")))),
                S = t().lazy((() => a.e(1680).then(a.bind(a, "aWPC")))),
                D = t().lazy((() => a.e(1462).then(a.bind(a, "wOLx")))),
                I = t().lazy((() => a.e(7592).then(a.bind(a, "jkAZ")))),
                B = t().lazy((() => Promise.resolve().then(a.bind(a, "KepC")))),
                A = t().lazy((() => Promise.resolve().then(a.bind(a, "Q8OD")))),
                P = t().lazy((() => a.e(1901).then(a.bind(a, "9IyS")))),
                M = t().lazy((() => a.e(47).then(a.bind(a, "muwz")))),
                z = t().lazy((() => a.e(1091).then(a.bind(a, "BJrY")))),
                E = t().lazy((() => a.e(9891).then(a.bind(a, "boaR")))),
                W = t().lazy((() => a.e(9947).then(a.bind(a, "233f")))),
                V = t().lazy((() => a.e(1793).then(a.bind(a, "Wepx")))),
                O = t().lazy((() => a.e(2973).then(a.bind(a, "q6cC")))),
                R = t().lazy((() => a.e(4343).then(a.bind(a, "fWqr")))),
                L = ({
                    namespace: e,
                    miniChartNamespace: l = e,
                    symbol: a,
                    getSymbolDisplayName: t,
                    intervalFilterType: d,
                    generateToolbar: u,
                    children: p
                }) => {
                    const m = (0, n.useMemo)((() => {
                            switch (d) {
                                case o.IntervalFilterTypes.ExtraSmall:
                                    return j;
                                case o.IntervalFilterTypes.Small:
                                    return C;
                                case o.IntervalFilterTypes.Small2:
                                    return w;
                                default:
                                    return N
                            }
                        }), [d]),
                        h = (0, n.useMemo)((() => t(a)), [t, a]),
                        b = (0, n.useCallback)((l => (0, s.jsx)(r.Ay, {
                            className: "!ml-[0px]",
                            children: i.o && (0, s.jsx)(n.Suspense, {
                                fallback: null,
                                children: (0, s.jsx)(m, {
                                    namespace: e,
                                    intervalOptions: l.intervalOptions || o.DefaultIntervalOptions
                                })
                            })
                        })), [m, e]),
                        v = (0, n.useCallback)((l => (0, s.jsx)(x, {
                            namespace: e,
                            ...l
                        })), [e]),
                        y = (0, n.useCallback)((l => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(T, {
                                namespace: e,
                                ...l
                            })
                        })), [e]),
                        g = (0, n.useCallback)((() => (0, s.jsx)(f, {
                            namespace: e
                        })), [e]),
                        L = (0, n.useCallback)((() => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(S, {
                                namespace: e
                            })
                        })), [e]),
                        _ = (0, n.useCallback)((() => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(D, {
                                namespace: e
                            })
                        })), [e]),
                        F = (0, n.useCallback)((l => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(I, {
                                type: l.type,
                                label: l.label,
                                namespace: e,
                                showChange: l.showChange,
                                symbolDisplayName: h
                            })
                        })), [e, h]),
                        H = (0, n.useCallback)((l => (0, s.jsx)(c.A, {
                            className: "gap-[16px]",
                            children: (0, s.jsx)(k, {
                                namespace: e,
                                tabKeys: l.tabKeys
                            })
                        })), [e]),
                        K = (0, n.useCallback)((e => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(B, {
                                expanded: e.expanded,
                                onClick: e.onClick
                            })
                        })), []),
                        q = (0, n.useCallback)((l => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(A, { ...l,
                                namespace: e
                            })
                        })), [e]),
                        Q = (0, n.useCallback)((e => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(P, {
                                onResume: e.onResume
                            })
                        })), []),
                        X = (0, n.useCallback)((e => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(M, {
                                onRemove: e.onRemove
                            })
                        })), []),
                        Z = (0, n.useCallback)((a => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(z, {
                                namespace: e,
                                miniChartNamespace: l,
                                getSymbolDisplayName: t,
                                onSymbolChange: a.onSymbolChange
                            })
                        })), [t, e, l]),
                        $ = (0, n.useCallback)((l => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(E, {
                                namespace: e,
                                ...l
                            })
                        })), [e]),
                        G = (0, n.useCallback)((l => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(W, {
                                namespace: e,
                                ...l
                            })
                        })), [e]),
                        Y = (0, n.useCallback)((l => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(V, {
                                namespace: e,
                                ...l
                            })
                        })), [e]),
                        J = (0, n.useCallback)((l => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(O, {
                                namespace: e,
                                ...l
                            })
                        })), [e]),
                        U = (0, n.useCallback)((l => i.o && (0, s.jsx)(n.Suspense, {
                            fallback: null,
                            children: (0, s.jsx)(R, {
                                namespace: e,
                                ...l
                            })
                        })), [e]),
                        ee = u({
                            namespace: e,
                            components: {
                                intervalFilter: b,
                                indicator: v,
                                chartStyleDropdown: y,
                                priceDropdown: g,
                                compareButton: L,
                                cameraButton: _,
                                miniSymbolStatus: F,
                                tabs: H,
                                fullscreen: K,
                                chartModeDropdown: q,
                                resumeWindow: Q,
                                closeButton: X,
                                symbolTabs: Z,
                                dataSourceDropdown: $,
                                sameSymbolMiniMultiChartBrowseModeToggle: G,
                                goDate: Y,
                                originalCandlestickSetting: J,
                                moreSettings: U
                            }
                        });
                    return (0, s.jsx)(s.Fragment, {
                        children: p(ee)
                    })
                };
            var _ = a("NEBA"),
                F = a("MKk+");
            const H = ({
                head: e,
                mid: l,
                tail: a
            }) => {
                const t = (0, n.useRef)(null),
                    [r, c] = (0, n.useState)(!1),
                    [i, o] = (0, n.useState)(!1),
                    d = (0, n.useCallback)((() => {
                        if (!t.current) return;
                        const {
                            scrollLeft: e,
                            offsetWidth: l,
                            scrollWidth: a
                        } = t.current;
                        c(e > 0), o(l + e < a)
                    }), []),
                    u = (0, n.useCallback)((() => {
                        t.current ? .scrollBy({
                            left: -100,
                            behavior: "smooth"
                        })
                    }), []),
                    p = (0, n.useCallback)((() => {
                        t.current ? .scrollBy({
                            left: 100,
                            behavior: "smooth"
                        })
                    }), []);
                return (0, n.useEffect)((() => {
                    if (!t.current) return () => null;
                    const e = t.current;
                    return e.addEventListener("scroll", d), e.addEventListener("click", d), setTimeout((() => d()), 1500), () => e.removeEventListener("scroll", d)
                }), [d]), (0, n.useEffect)((() => {
                    if (!t.current) return () => null;
                    const e = t.current,
                        l = l => {
                            const a = l.target;
                            if (a) {
                                const l = a.getBoundingClientRect();
                                e.scrollBy({
                                    left: l.x - window.innerWidth / 2,
                                    behavior: "smooth"
                                })
                            }
                        };
                    return e.addEventListener("click", l), () => e.removeEventListener("click", l)
                }), []), (0, s.jsxs)("div", {
                    className: "flex items-center w-full h-[40px] px-[16px] md:px-[0px] gap-[--space-m] relative overflow-hidden",
                    children: [(0, s.jsx)("div", {
                        className: "flex items-center justify-start absolute w-[24px] h-[24px] left-0 bg-BasicBg",
                        style: {
                            background: "linear-gradient(to right, transparent, var(--color-BasicBg))",
                            visibility: r ? "visible" : "hidden"
                        },
                        onClick: u,
                        children: (0, s.jsx)(_.A, {
                            className: "w-[16px] h-[16px] text-IconNormal"
                        })
                    }), (0, s.jsxs)("div", {
                        ref: t,
                        className: "flex flex-row items-center w-full overflow-y-hidden overflow-x-scroll gap-[--space-m] h-full py-[12px]",
                        style: {
                            scrollbarWidth: "none"
                        },
                        children: [e.length > 0 ? (0, s.jsx)("div", {
                            className: "flex items-center gap-[--space-m]",
                            children: e
                        }) : null, l.length > 0 ? (0, s.jsx)("div", {
                            className: "flex items-center gap-[--space-m]",
                            children: l
                        }) : null, a.length > 0 ? (0, s.jsx)("div", {
                            className: "flex items-center gap-[--space-m]",
                            children: a
                        }) : null]
                    }), (0, s.jsx)("div", {
                        className: "flex items-center justify-end absolute w-[24px] h-[24px] right-0 bg-BasicBg",
                        style: {
                            background: "linear-gradient(to right, var(--color-BasicBg), transparent)",
                            visibility: i ? "visible" : "hidden"
                        },
                        onClick: p,
                        children: (0, s.jsx)(F.A, {
                            className: "w-[16px] h-[16px] text-IconNormal"
                        })
                    })]
                })
            };
            var K = a("jd1c");
            const q = ({
                    head: e,
                    mid: l,
                    tail: a,
                    useDraggableHandle: t
                }) => {
                    const c = (0, n.useMemo)((() => t ? "draggableHandle" : ""), [t]),
                        i = (0, n.useRef)(null),
                        [o, d] = (0, n.useState)(!1),
                        [u, p] = (0, n.useState)(!1),
                        m = (0, n.useCallback)((() => {
                            if (!i.current) return;
                            const {
                                scrollLeft: e,
                                offsetWidth: l,
                                scrollWidth: a
                            } = i.current;
                            d(e > 0), p(l + e < a && !(Math.round(a - l) === Math.round(e)))
                        }), []),
                        h = (0, n.useCallback)((() => {
                            i.current ? .scrollBy({
                                left: -100,
                                behavior: "smooth"
                            })
                        }), []),
                        x = (0, n.useCallback)((() => {
                            i.current ? .scrollBy({
                                left: 100,
                                behavior: "smooth"
                            })
                        }), []);
                    return (0, n.useEffect)((() => {
                        if (!i.current) return;
                        let e;
                        "ResizeObserver" in window && (e = new K.default(m), e.observe(i.current));
                        const l = i.current;
                        return l.addEventListener("scroll", m), l.addEventListener("click", m), () => {
                            e && e.disconnect(), l.removeEventListener("scroll", m), l.removeEventListener("click", m)
                        }
                    }), [m]), (0, s.jsxs)(r.Ay, {
                        className: "grid grid-cols-[auto_min-content] items-center h-full",
                        children: [(0, s.jsxs)(r.Ay, {
                            className: "flex items-center relative overflow-hidden mr-[24px]",
                            children: [(0, s.jsx)(r.Ay, {
                                className: "flex cursor-pointer items-center justify-start absolute w-[30px] h-[20px] left-[-1px] z-[1]",
                                style: {
                                    background: "linear-gradient(to right, var(--color-BasicBg), var(--color-BasicBg), transparent)",
                                    visibility: o ? "visible" : "hidden"
                                },
                                onClick: h,
                                children: (0, s.jsx)(_.A, {
                                    className: "w-[16px] h-[16px] text-IconNormal"
                                })
                            }), (0, s.jsxs)(r.Ay, {
                                ref: i,
                                className: "flex flex-row items-center h-full w-full overflow-scroll gap-[--space-m] [&::-webkit-scrollbar]:hidden",
                                style: {
                                    scrollbarWidth: "none"
                                },
                                children: [(0, s.jsx)(r.Ay, {
                                    className: "flex items-center gap-[--space-m]",
                                    children: e
                                }), (0, s.jsx)(r.Ay, {
                                    className: `${c} flex items-center justify-center h-full gap-[--space-m]`,
                                    children: l
                                })]
                            }), (0, s.jsx)(r.Ay, {
                                className: "flex cursor-pointer items-center justify-end absolute w-[30px] h-[20px] right-[-1px]",
                                style: {
                                    background: "linear-gradient(to right, transparent, var(--color-BasicBg), var(--color-BasicBg))",
                                    visibility: u ? "visible" : "hidden"
                                },
                                onClick: x,
                                children: (0, s.jsx)(F.A, {
                                    className: "w-[16px] h-[16px] text-IconNormal"
                                })
                            })]
                        }), (0, s.jsx)(r.Ay, {
                            className: "flex items-center whitespace-nowrap gap-[--space-m]",
                            children: a
                        })]
                    })
                },
                Q = ({
                    head: e,
                    mid: l,
                    tail: a,
                    useDraggableHandle: n = !1,
                    isMobile: t
                }) => t ? (0, s.jsx)(H, {
                    head: e,
                    mid: l,
                    tail: a
                }) : (0, s.jsx)(q, {
                    head: e,
                    mid: l,
                    tail: a,
                    useDraggableHandle: n
                });
            var X = a("jIxG");
            const Z = ({
                    head: e,
                    mid: l,
                    tail: a,
                    ...n
                }) => {
                    const {
                        isMobile: t
                    } = (0, v.Q)();
                    return (0, s.jsx)(Q, {
                        head: (0, X.i)(e),
                        mid: (0, X.i)(l),
                        tail: (0, X.i)(a),
                        isMobile: t,
                        ...n
                    })
                },
                $ = ({
                    namespace: e,
                    miniChartNamespace: l,
                    symbol: a,
                    getSymbolDisplayName: n,
                    generateToolbar: t,
                    intervalFilterType: r
                }) => (0, s.jsx)(L, {
                    symbol: a,
                    namespace: e,
                    miniChartNamespace: l,
                    intervalFilterType: r,
                    generateToolbar: t,
                    getSymbolDisplayName: n,
                    children: ({
                        medium: e
                    }) => (0, s.jsx)(Z, { ...e
                    })
                }),
                G = $
        },
        lrni: (e, l, a) => {
            a.d(l, {
                I: () => i
            });
            var s = a("mXdx"),
                n = a("DTvD"),
                t = a("Olbk"),
                r = a("kcvK");
            const c = () => (0, s.jsx)(t.Ay, {
                    className: "absolute top-[-4px] right-[-4px] w-[8px] h-[8px] bg-[--color-BtnBg] rounded-full"
                }),
                i = ({
                    tooltip: e,
                    onClick: l,
                    onMouseEnter: a,
                    element: i,
                    showDot: o = !1
                }) => {
                    const d = (0, n.useMemo)((() => (0, s.jsxs)(t.Ay, {
                        className: "flex items-center cursor-pointer relative text-[--color-IconNormal] hover:text-[--color-SecondaryText]",
                        onClick: l,
                        onMouseEnter: a,
                        children: [(0, s.jsx)(i, {
                            className: "h-[16px] w-[16px]"
                        }), o ? (0, s.jsx)(c, {}) : null]
                    })), [i, l, a, o]);
                    return e ? (0, s.jsx)(r.A, {
                        once: !0,
                        enablePortal: !0,
                        useReactPopper: !0,
                        arrow: !0,
                        tooltips: e,
                        offset: 1,
                        children: d
                    }) : d
                }
        },
        jIxG: (e, l, a) => {
            a.d(l, {
                i: () => r,
                y: () => t
            });
            var s = a("mXdx"),
                n = a("DTvD");
            const t = (e, l) => `${e}_mini_multi_${l}`,
                r = e => e.map(((e, l) => (0, s.jsx)(n.Fragment, {
                    children: e
                }, l)))
        },
        CNHc: (e, l, a) => {
            a.d(l, {
                A: () => c
            });
            var s = a("wIZF"),
                n = a("DTvD"),
                t = a.n(n),
                r = a("qqbu");
            const c = function(e) {
                return t().createElement(r.A, (0, s.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), t().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 20h3v-6.791l3.767-3.767.967.966 1.767 1.768 6.364-6.364-1.767-1.768-4.596 4.596-.967-.966-1.768-1.768L7 9.673V4H4v16zm16 0H7v-3h13v3zm-6.5-7.823l2.828 2.828h-5.656l2.828-2.828z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);