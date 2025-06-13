"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [1677], {
        "0NtS": (e, i, r) => {
            r.d(i, {
                A: () => h
            });
            var t = r("mXdx"),
                l = r("DTvD"),
                o = r("2IQ4"),
                n = r("NEBA"),
                c = r("MKk+");
            const s = ({
                    label: e,
                    labelStyle: i,
                    price: r,
                    priceStyle: l,
                    className: o,
                    id: n,
                    gridAreaKey: c
                }) => (0, t.jsxs)("div", {
                    className: o,
                    id: n,
                    style: {
                        gridArea: c
                    },
                    children: [(0, t.jsx)("div", {
                        style: i,
                        className: "tickerItemLabel",
                        children: e
                    }), (0, t.jsx)("div", {
                        style: l,
                        className: "tickerPriceText",
                        suppressHydrationWarning: !0,
                        children: r
                    })]
                }),
                a = (0, l.memo)(s);
            var d = r("3lr/");
            const x = ({
                    data: e,
                    children: i,
                    theme: r = "dark",
                    listChildren: s
                }) => {
                    const x = (0, l.useRef)(null),
                        h = "light" === r,
                        [u, p] = (0, l.useState)(0),
                        [f, g] = (0, l.useState)(!1);
                    let m, y, b;
                    x && x.current && (m = x.current ? .scrollWidth, y = x.current ? .clientWidth, b = x.current ? .scrollLeft), (0, l.useEffect)((() => {
                        if (x && x.current) {
                            const e = m > Math.ceil(y + b);
                            g(e)
                        }
                    }), [m, y, b, u]);
                    const v = (0, l.useCallback)((() => {
                            p(Date.now())
                        }), []),
                        w = (0, l.useCallback)((() => {
                            x && x.current && (x.current.scrollLeft -= 100, v())
                        }), [v]),
                        P = (0, l.useCallback)((() => {
                            x && x.current && (x.current.scrollLeft += 100, v())
                        }), [v]),
                        C = (0, l.useMemo)((() => (0, d.v5)()), [h]),
                        k = (0, l.useMemo)((() => (0, d.Ox)()), [h]);
                    return (0, l.useEffect)((function() {
                        if ("ResizeObserver" in window) {
                            const e = new ResizeObserver(v);
                            return x.current && e.observe(x.current), () => e.disconnect()
                        }
                        return window.addEventListener("resize", v, {
                            capture: !1,
                            passive: !0
                        }), () => {
                            window.removeEventListener("resize", v)
                        }
                    }), [v, x.current]), (0, t.jsxs)("div", {
                        className: "tickerListContainer",
                        children: [Boolean(x.current ? .scrollLeft) && (0, t.jsx)(o.A, {
                            className: "leftArrow",
                            onClick: w,
                            sx: C,
                            children: (0, t.jsx)(n.A, {
                                className: "text-IconNormal hover:text-PrimaryText",
                                style: {
                                    width: "16px",
                                    height: "16px"
                                }
                            })
                        }), (0, t.jsxs)("div", {
                            className: "tickerList",
                            ref: x,
                            onScroll: v,
                            children: [e && e.map((({
                                label: e,
                                labelStyle: i,
                                price: r,
                                priceStyle: l,
                                key: o,
                                renderItem: n
                            }) => n ? n({
                                label: e,
                                labelStyle: i,
                                price: r,
                                priceStyle: l,
                                key: o
                            }) : (0, t.jsx)(a, {
                                label: e,
                                labelStyle: i,
                                price: r,
                                priceStyle: l,
                                gridAreaKey: o
                            }, o))), i, s]
                        }), Boolean(f) && (0, t.jsx)(o.A, {
                            className: "rightArrow",
                            onClick: P,
                            sx: k,
                            children: (0, t.jsx)(c.A, {
                                className: "text-IconNormal hover:text-PrimaryText",
                                style: {
                                    width: "16px",
                                    height: "16px"
                                }
                            })
                        })]
                    })
                },
                h = (0, l.memo)(x)
        },
        FQsD: (e, i, r) => {
            r.d(i, {
                A: () => x
            });
            var t = r("mXdx"),
                l = r("DTvD"),
                o = r("2IQ4");
            const n = (0, l.memo)((({
                    priceColor: e,
                    showPrice: i,
                    differencePrice: r,
                    color: l,
                    changePrice: o,
                    H5PriceChildren: n
                }) => (0, t.jsxs)("div", {
                    className: "nowPrice",
                    children: [(0, t.jsx)("div", {
                        className: "showPrice",
                        style: {
                            color: e
                        },
                        children: i
                    }), n || (0, t.jsxs)("div", {
                        className: "flex-cloumn",
                        children: [(0, t.jsx)("div", {
                            className: "changePrice",
                            style: {
                                color: l
                            },
                            children: o
                        }), (0, t.jsx)("div", {
                            className: "differencePrice",
                            style: {
                                color: l,
                                direction: "ltr"
                            },
                            children: r
                        })]
                    })]
                }))),
                c = (0, l.memo)((({
                    priceColor: e,
                    showPrice: i,
                    differencePrice: r,
                    color: l,
                    H5PriceChildren: o
                }) => (0, t.jsxs)("div", {
                    className: "nowPrice",
                    children: [(0, t.jsx)("div", {
                        className: "showPrice",
                        style: {
                            color: e
                        },
                        children: i
                    }), (0, t.jsx)("div", {
                        className: "subPrice",
                        style: {
                            color: l
                        },
                        children: r
                    }), o]
                })));
            var s = r("0NtS"),
                a = r("3lr/");
            const d = ({
                    children: e,
                    list: i,
                    changePrice: r,
                    priceColor: l,
                    showPrice: d,
                    differencePrice: x,
                    changeColor: h,
                    tradeType: u = "spot",
                    H5PriceChildren: p,
                    H5ListChildren: f,
                    sx: g
                }) => (0, t.jsxs)(o.A, {
                    sx: { ...a.al,
                        ...g
                    },
                    children: [(0, t.jsx)("div", {
                        className: "childrenContainer",
                        children: e
                    }), (0, t.jsxs)("div", {
                        className: "layout",
                        children: [(0, t.jsx)("div", {
                            className: "left",
                            children: "spot" === u ? (0, t.jsx)(n, {
                                changePrice: r,
                                priceColor: l,
                                showPrice: d,
                                differencePrice: x,
                                color: h,
                                H5PriceChildren: p
                            }) : (0, t.jsx)(c, {
                                changePrice: r,
                                priceColor: l,
                                showPrice: d,
                                differencePrice: x,
                                color: h,
                                H5PriceChildren: p
                            })
                        }), (0, t.jsx)("div", {
                            className: "right",
                            children: (0, t.jsx)(s.A, {
                                data: i,
                                sx: {
                                    width: "100%"
                                },
                                listChildren: f
                            })
                        })]
                    })]
                }),
                x = (0, l.memo)(d)
        },
        "3lr/": (e, i, r) => {
            r.d(i, {
                Go: () => t,
                Ox: () => c,
                al: () => o,
                cx: () => l,
                v5: () => n
            });
            const t = {
                    display: "flex",
                    boxSizing: "border-box",
                    margin: "0",
                    ".left": {
                        display: "flex",
                        boxSizing: "border-box",
                        ".layout": {
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                            alignItems: "center",
                            marginRight: "0px",
                            flex: "none",
                            ".childrenContainer": {
                                display: "flex",
                                alignItems: "center",
                                flex: 1
                            }
                        },
                        ".layout-pro": {
                            borderRight: "1px solid",
                            borderColor: "rgba(255, 255, 255, 0.08)"
                        },
                        ".nowPrice": {
                            display: "flex",
                            boxSizing: "border-box",
                            flexDirection: "column",
                            ".showPrice": {
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                lineHeight: "24px",
                                fontWeight: 600
                            },
                            ".subPrice": {
                                fontSize: "12px",
                                color: "t.primary",
                                lineHeight: "16px"
                            }
                        }
                    },
                    ".right": {
                        flex: 1,
                        flexWrap: "nowrap",
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        minWidth: "0px",
                        overflow: "hidden",
                        ".tickerListContainer": {
                            display: "flex",
                            flexDirection: "row",
                            boxSizing: "border-box",
                            alignItems: "center",
                            flexWrap: "nowrap",
                            position: "relative",
                            marginLeft: "16px",
                            marginRight: "16px",
                            overflow: "hidden",
                            ".tickerList": {
                                whiteSpace: "nowrap",
                                overflowX: "auto",
                                overflowY: "hidden",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-start",
                                ".tickerItemLabel": {
                                    fontSize: "12px",
                                    marginRight: 0,
                                    marginBottom: "2px",
                                    color: "t.third",
                                    lineHeight: "22px",
                                    fontWeight: "normal",
                                    textAlign: "left",
                                    textOverflow: "ellipsis",
                                    overflow: "hidden",
                                    whiteSpace: "nowrap"
                                },
                                ".tickerPriceText": {
                                    fontSize: "12px",
                                    color: "t.primary",
                                    lineHeight: "16px"
                                },
                                "& >div": {
                                    display: "inline-block",
                                    paddingRight: "16px"
                                },
                                "&::-webkit-scrollbar": {
                                    display: "none",
                                    width: "0",
                                    height: "0"
                                }
                            }
                        }
                    }
                },
                l = {
                    display: "flex",
                    boxSizing: "border-box",
                    margin: "0",
                    ".layout": {
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        marginRight: "0px",
                        flex: 1,
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        ".nowPrice": {
                            display: "flex",
                            boxSizing: "border-box",
                            flexDirection: "column",
                            ".showPrice": {
                                fontSize: "20px",
                                display: "flex",
                                alignItems: "center",
                                lineHeight: "24px",
                                fontWeight: 600
                            },
                            ".subPrice": {
                                fontSize: "12px",
                                color: "t.primary",
                                lineHeight: "inherit"
                            }
                        },
                        ".right": {
                            marginLeft: "17px",
                            display: "flex",
                            justifyItems: "center",
                            ".tickerListContainer": {
                                display: "flex",
                                flexDirection: "row",
                                boxSizing: "border-box",
                                position: "relative",
                                ".tickerList": {
                                    whiteSpace: "nowrap",
                                    overflowX: "auto",
                                    overflowY: "hidden",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "flex-start",
                                    ".tickerItemLabel": {
                                        fontSize: "12px",
                                        marginRight: "0px",
                                        marginBottom: "2px",
                                        color: "t.third",
                                        lineHeight: "16px",
                                        fontWeight: "normal",
                                        textAlign: "left",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap"
                                    },
                                    ".tickerPriceText": {
                                        fontSize: "12px",
                                        color: "t.primary",
                                        lineHeight: "16px"
                                    },
                                    "& >div": {
                                        display: "inline-block",
                                        paddingRight: "10px"
                                    },
                                    "&::-webkit-scrollbar": {
                                        display: "none",
                                        width: "0",
                                        height: "0"
                                    }
                                }
                            }
                        }
                    }
                },
                o = {
                    paddingX: "16px",
                    paddingTop: "12px",
                    paddingBottom: "12px",
                    ".childrenContainer": {
                        paddingBottom: "4px"
                    },
                    ".layout": {
                        display: "flex",
                        boxSizing: "border-box",
                        ".childrenContainer": {
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between"
                        },
                        ".left": {
                            display: "flex",
                            boxSizing: "border-box",
                            marginRight: "8px",
                            flex: 1,
                            borderRight: "none",
                            paddingRight: "0",
                            width: "50%",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "flex-start",
                            ".flex-cloumn": {
                                display: "flex",
                                flexDirection: "row"
                            },
                            ".nowPrice": {
                                display: "flex",
                                boxSizing: "border-box",
                                flexDirection: "column",
                                gap: "4px",
                                ".showPrice": {
                                    fontSize: "28px",
                                    display: "flex",
                                    alignItems: "center",
                                    fontWeight: 600,
                                    lineHeight: "30px"
                                },
                                ".subPrice": {
                                    fontSize: "12px",
                                    color: "#707A8A",
                                    lineHeight: "16px"
                                },
                                ".changePrice": {
                                    fontSize: "12px",
                                    lineHeight: "18px"
                                },
                                ".differencePrice": {
                                    marginLeft: "4px",
                                    fontSize: "12px",
                                    lineHeight: "18px"
                                }
                            }
                        },
                        ".right": {
                            display: "flex",
                            flexBasis: "150px",
                            boxSizing: "border-box",
                            flexDirection: "column",
                            alignItems: "flex-start",
                            justifyContent: "space-between",
                            ".tickerListContainer": {
                                display: "flex",
                                flexDirection: ["column", "row"],
                                boxSizing: "border-box",
                                position: "relative",
                                width: "100%",
                                ".tickerList": {
                                    display: "grid",
                                    width: "100%",
                                    height: "100%",
                                    gridGap: "4px 12px",
                                    gridTemplateColumns: "1fr 1fr",
                                    gridTemplateAreas: '"A B"\n                          "C D"',
                                    ".tickerItemLabel": {
                                        fontSize: "10px",
                                        marginRight: "4px",
                                        marginBottom: "0px",
                                        color: "var(--color-SecondaryText)",
                                        lineHeight: "16px",
                                        fontWeight: "normal",
                                        textAlign: "left",
                                        textOverflow: "ellipsis",
                                        overflow: "hidden",
                                        whiteSpace: "nowrap"
                                    },
                                    ".tickerPriceText": {
                                        fontSize: "12px",
                                        color: "var(--color-PrimaryText)"
                                    }
                                }
                            }
                        }
                    }
                },
                n = () => ({
                    position: "absolute",
                    left: 0,
                    height: "100%",
                    cursor: "pointer",
                    width: "36px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    background: "linear-gradient(90deg, var(--color-BasicBg) 0%,var(--color-BasicBg) calc(24px / 2),transparent 100%)"
                }),
                c = () => ({
                    position: "absolute",
                    cursor: "pointer",
                    width: "36px",
                    right: 0,
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    background: "linear-gradient(270deg, var(--color-BasicBg) 0%,var(--color-BasicBg) calc(24px / 2),transparent 100%)"
                })
        },
        EXwb: (e, i, r) => {
            r.d(i, {
                A: () => n,
                e: () => o
            });
            var t = r("DTvD"),
                l = r("ekJu"),
                o = function(e) {
                    var i = (0, l.DP)();
                    return Number(e) >= 0 ? i.colors.t.buy : i.colors.t.sell
                };
            const n = function(e) {
                var i, r, o = e.lastPrice,
                    n = (0, l.DP)(),
                    c = (0, t.useRef)(0),
                    s = c.current,
                    a = (0, t.useState)(),
                    d = a[0],
                    x = a[1];
                return c.current = o, (0, t.useEffect)((function() {
                    var e, i;
                    d || !(null === n || void 0 === n || null === (e = n.colors) || void 0 === e || null === (i = e.t) || void 0 === i ? void 0 : i.primary) ? s < o ? x(n.colors.t.buy) : s > o && x(n.colors.t.sell) : x(n.colors.t.primary)
                }), [o, n.colors.t.buy, n.colors.t.sell, n.colors.t.primary]), d || (null === n || void 0 === n || null === (i = n.colors) || void 0 === i || null === (r = i.t) || void 0 === r ? void 0 : r.primary) || "#fff"
            }
        },
        Sl0s: (e, i, r) => {
            r.r(i), r.d(i, {
                default: () => x
            });
            var t = r("mguP"),
                l = r("mXdx"),
                o = r("DTvD"),
                n = r("cifZ"),
                c = r("FQsD"),
                s = r("Qhol"),
                a = r("FWGn"),
                d = r("qpBH");
            const x = function(e) {
                var i = e.children,
                    r = (0, n.ss)(),
                    x = r.list,
                    h = r.subPrice,
                    u = r.priceColor,
                    p = r.showPrice,
                    f = r.differencePrice,
                    g = r.changeColor,
                    m = r.changePrice,
                    y = (0, t._)((0, s.Grl)(), 1)[0],
                    b = (0, t._)((0, s.sL)(), 2),
                    v = b[0],
                    w = (0, t._)(b[1], 2),
                    P = w[0],
                    C = w[1];
                return (0, a.C)({
                    name: "ticker",
                    shouldReport: !!p && (null === x || void 0 === x ? void 0 : x.length) > 0
                }), (0, o.useMemo)((function() {
                    var e = (0, l.jsxs)(l.Fragment, {
                        children: [(0, l.jsxs)("div", {
                            className: "flex-cloumn",
                            children: [(0, l.jsx)("div", {
                                className: "changePrice",
                                style: {
                                    color: "var(--color-PrimaryText)"
                                },
                                children: h
                            }), (0, l.jsx)("div", {
                                className: "differencePrice",
                                style: {
                                    color: g,
                                    direction: "ltr"
                                },
                                children: f
                            })]
                        }), (0, l.jsx)(d.C, {
                            sx: {
                                mb: "0px"
                            },
                            symbol: v,
                            isH5: !0,
                            baseAsset: P,
                            quoteAsset: C,
                            tradeType: y
                        })]
                    });
                    return (0, l.jsx)(c.A, {
                        list: x,
                        subPrice: h,
                        priceColor: u,
                        showPrice: p,
                        differencePrice: f,
                        changePrice: m,
                        changeColor: g,
                        H5PriceChildren: e,
                        children: i
                    })
                }), [i, u, h, x, y])
            }
        },
        cifZ: (e, i, r) => {
            r.d(i, {
                eq: () => m,
                ss: () => g,
                u$: () => f
            });
            var t = r("mguP"),
                l = r("mXdx"),
                o = r("DTvD"),
                n = r.n(o),
                c = r("ekJu"),
                s = r("tM9B"),
                a = r("Qhol"),
                d = r("MwhE"),
                x = r("zx3+"),
                h = r("EXwb"),
                u = r("WJPx"),
                p = r("hAzz"),
                f = function(e) {
                    var i = e.multipleSymbol,
                        r = e.multipleSymbols,
                        t = e.multipleCurrentProduct,
                        n = e.useMiniTicker,
                        c = e.showAllTickerInfo,
                        s = m({
                            multipleSymbol: i,
                            multipleSymbols: r,
                            multipleCurrentProduct: t,
                            useMiniTicker: n
                        }),
                        d = s.baseAsset,
                        h = s.quoteAsset,
                        u = s.change,
                        p = s.changeColor,
                        f = s.high,
                        g = s.low,
                        y = s.volume,
                        b = s.quoteVolume,
                        v = s.currentPrice,
                        w = s.priceColor,
                        P = s.getI18n,
                        C = s.subPrice,
                        k = (0, a.DYq)(),
                        S = (0, a.ok2)().getI18n,
                        j = k ? S("trd-market-change", {
                            defaultValue: "Change"
                        }) : P("change", {
                            defaultValue: "24h Change"
                        }),
                        A = (0, o.useMemo)((function() {
                            return (0, x.kK)(y, {
                                digits: 2
                            })
                        }), [y]),
                        z = (0, o.useMemo)((function() {
                            return (0, x.kK)(b, {
                                digits: 2
                            })
                        }), [b]);
                    return {
                        list: (0, o.useMemo)((function() {
                            return i && !c ? [{
                                label: j,
                                price: (0, l.jsx)("span", {
                                    style: {
                                        color: p,
                                        display: "flex"
                                    },
                                    children: u
                                }),
                                key: "A"
                            }] : [{
                                label: j,
                                price: (0, l.jsx)("span", {
                                    style: {
                                        color: p,
                                        display: "flex"
                                    },
                                    children: u
                                }),
                                key: "A"
                            }, {
                                label: P("high", {
                                    defaultValue: "24h High"
                                }),
                                price: f,
                                key: "B"
                            }, {
                                label: P("low", {
                                    defaultValue: "24h Low"
                                }),
                                price: g,
                                key: "C"
                            }, {
                                label: "".concat(P("volume"), "(").concat(d, ")"),
                                price: A,
                                key: "D"
                            }, {
                                label: "".concat(P("transaction"), "(").concat(h, ")"),
                                price: z,
                                key: "E"
                            }]
                        }), [d, u, p, P, f, g, i, h, z, A, k]),
                        subPrice: C,
                        priceColor: w,
                        currentPrice: v
                    }
                },
                g = function() {
                    var e = m({}),
                        i = e.baseAsset,
                        r = e.quoteAsset,
                        t = e.showPrice,
                        c = e.changeColor,
                        s = e.changePrice,
                        a = e.high,
                        d = e.low,
                        h = e.volume,
                        u = e.quoteVolume,
                        p = e.differencePrice,
                        f = e.priceColor,
                        g = e.getI18n,
                        y = e.subPrice,
                        b = (0, o.useMemo)((function() {
                            return (0, x.kK)(h, {
                                digits: 2,
                                isUnit: !0
                            })
                        }), [h]),
                        v = (0, o.useMemo)((function() {
                            return (0, x.kK)(u, {
                                digits: 2,
                                isUnit: !0
                            })
                        }), [u]);
                    return {
                        list: (0, o.useMemo)((function() {
                            return [{
                                label: g("high", {
                                    defaultValue: "24h High"
                                }),
                                price: a,
                                key: "A",
                                sx: {
                                    gridArea: "A"
                                }
                            }, {
                                label: g("low", {
                                    defaultValue: "24h Low"
                                }),
                                price: d,
                                key: "C",
                                sx: {
                                    gridArea: "C"
                                }
                            }, {
                                label: (0, l.jsxs)(n().Fragment, {
                                    children: [g("volume-short"), "(", i, ")"]
                                }),
                                price: b,
                                key: "B",
                                sx: {
                                    gridArea: "B"
                                }
                            }, {
                                label: (0, l.jsxs)(n().Fragment, {
                                    children: [g("volume-short"), "(", r, ")"]
                                }),
                                price: v,
                                key: "D",
                                sx: {
                                    gridArea: "D"
                                }
                            }]
                        }), [i, g, a, d, r, v, b]),
                        subPrice: y,
                        priceColor: f,
                        showPrice: t,
                        differencePrice: p,
                        changeColor: c,
                        changePrice: s
                    }
                },
                m = function(e) {
                    var i = e.multipleSymbol,
                        r = e.multipleSymbols,
                        n = e.multipleCurrentProduct,
                        x = e.useMiniTicker,
                        f = (0, d.y)(i, n, x),
                        g = f.lastPrice,
                        m = void 0 === g ? 0 : g,
                        y = f.tickSize,
                        b = void 0 === y ? 1e-7 : y,
                        v = f.highPrice,
                        w = f.lowPrice,
                        P = f.volume,
                        C = f.quoteVolume,
                        k = f.diffPrice,
                        S = f.difference,
                        j = f.bigThan,
                        A = (0, t._)((0, a.sL)(), 2),
                        z = (0, t._)(A[1], 2),
                        D = z[0],
                        N = z[1],
                        I = Array.isArray(r) ? r[0] : D,
                        L = Array.isArray(r) ? r[1] : N,
                        H = (0, c.DP)(),
                        T = (0, a.xkU)(b),
                        B = (0, a.$X2)()(m, L),
                        M = B.symbol,
                        R = B.fiatPrice,
                        V = (0, a.oqM)() || (0, p.US)(R) ? "" : [M, R].join(""),
                        W = (0, s.ZV)(m, T),
                        q = (0, u.o)().getI18n,
                        E = (0, h.A)({
                            lastPrice: m
                        }),
                        X = (0, s.ZV)(m, T),
                        _ = isNaN(S) ? "0.00" : S,
                        Z = "".concat(_, "%"),
                        F = (0, o.useMemo)((function() {
                            return (0, l.jsxs)(l.Fragment, {
                                children: [(0, l.jsx)("div", {
                                    style: {
                                        direction: "ltr"
                                    },
                                    children: (0, s.ZV)(k || 0, T)
                                }), "\xa0", (0, l.jsxs)("div", {
                                    style: {
                                        direction: "ltr"
                                    },
                                    children: [_, "%"]
                                })]
                            })
                        }), [_, k, T]),
                        K = (0, s.ZV)(k || 0, T);
                    return {
                        baseAsset: I,
                        quoteAsset: L,
                        change: F,
                        changeColor: (0, o.useMemo)((function() {
                            return j ? H.colors.t.buy : H.colors.t.sell
                        }), [j, H.colors.t.buy, H.colors.t.sell]),
                        changePrice: K,
                        high: (0, o.useMemo)((function() {
                            return (0, s.ZV)(v, T)
                        }), [v, T]),
                        low: (0, o.useMemo)((function() {
                            return (0, s.ZV)(w, T)
                        }), [w, T]),
                        volume: P,
                        quoteVolume: C,
                        currentPrice: X,
                        priceColor: E,
                        getI18n: q,
                        subPrice: V,
                        differencePrice: Z,
                        showPrice: W
                    }
                }
        }
    }
]);