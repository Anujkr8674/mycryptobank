"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [8490], {
        "Gy/q": (e, l, t) => {
            t.r(l), t.d(l, {
                default: () => $
            });
            var n = t("mXdx"),
                r = t("DTvD"),
                o = t.n(r),
                i = t("hTvQ"),
                s = t("KNYd"),
                c = t("lbH7"),
                a = t("3cAr"),
                d = t("iFsL"),
                u = t("Olbk");
            const C = () => (0, n.jsx)(u.Ay, {
                className: "w-full h-[1px] border-t-[1px] border-b-0 border-l-0 botder-r-0 border-solid border-[--color-Line]"
            });
            var m = t("y6qk"),
                x = t("dLyb"),
                h = t("wIZF"),
                f = t("qqbu");
            const v = function(e) {
                    return o().createElement(f.A, (0, h.__assign)({
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, e), o().createElement("path", {
                        fillRule: "evenodd",
                        clipRule: "evenodd",
                        d: "M5 6.5l5 5V8h3a5 5 0 11-5 5H5a8 8 0 108-8h-3V1.5l-5 5z",
                        fill: "currentColor"
                    }))
                },
                k = ({
                    candlestick: e,
                    onClose: l
                }) => {
                    const {
                        getI18n: t
                    } = (0, d.P3)(), o = (0, r.useMemo)((() => t("contextMenu-refresh-chart", {
                        defaultValue: "Refresh Chart"
                    })), [t]), i = (0, r.useCallback)((() => {
                        e.refreshChart({
                            cb: () => {
                                e.setAutoScaleForAllPanels({
                                    value: !0
                                }), e.fire("reloadStorage")
                            }
                        }), l ? .()
                    }), [e, l]);
                    return (0, n.jsx)(m.Cl, {
                        icon: v,
                        onClick: i,
                        children: o
                    })
                };
            var p = t("k+xn");
            const b = ({
                formattedPrice: e,
                isBasePanel: l,
                onClose: t
            }) => {
                const {
                    getI18n: o
                } = (0, d.P3)(), i = (0, r.useMemo)((() => o("copy-price", {
                    defaultValue: "Copy Price"
                })), [o]), s = (0, r.useCallback)((() => {
                    window.navigator.clipboard.writeText(e), t ? .()
                }), [e, t]);
                return l ? (0, n.jsx)(m.Cl, {
                    icon: p.A,
                    onClick: s,
                    children: `${i} ${e}`
                }) : null
            };
            var w = t("p0Xq");
            const P = ({
                isBasePanel: e,
                price: l,
                formattedPrice: t,
                candlestick: o,
                onClose: i
            }) => {
                const {
                    getI18n: s
                } = (0, d.P3)(), c = (0, r.useMemo)((() => s("draw-horizontal-line-on", {
                    defaultValue: "Draw horizontal line on"
                })), [s]), a = (0, r.useCallback)((() => {
                    o.drawHorizontalLine(l), i ? .()
                }), [o, i, l]);
                return e ? (0, n.jsx)(m.Cl, {
                    icon: w.A,
                    onClick: a,
                    children: `${c} ${t}`
                }) : null
            };
            var g = t("lDj4");
            const j = ({
                    isBasePanel: e,
                    onClose: l
                }) => {
                    const {
                        setVisible: t
                    } = (0, r.useContext)(g.A), {
                        getI18n: o
                    } = (0, d.P3)(), i = (0, r.useMemo)((() => o("contextMenu-remove-drawings", {
                        defaultValue: "Remove Drawings"
                    })), [o]), s = (0, r.useCallback)((() => {
                        t(!0), l ? .()
                    }), [l, t]);
                    return e ? (0, n.jsx)(m.Cl, {
                        onClick: s,
                        children: i
                    }) : null
                },
                y = ({
                    candlestick: e,
                    onClose: l
                }) => {
                    const {
                        getI18n: t
                    } = (0, d.P3)(), o = (0, r.useMemo)((() => t("contextMenu-remove-indicators", {
                        defaultValue: "Remove Indicators"
                    })), [t]), i = (0, r.useCallback)((() => {
                        e.removeAllIndicators(), l ? .()
                    }), [e, l]);
                    return (0, n.jsx)(m.Cl, {
                        onClick: i,
                        children: o
                    })
                };
            var M = t("G8Jp");
            const B = ({
                candlestick: e,
                onClose: l
            }) => {
                const {
                    getI18n: t
                } = (0, d.P3)(), o = (0, r.useMemo)((() => t("contextMenu-goDate", {
                    defaultValue: "Time Tool"
                })), [t]), i = (0, r.useCallback)((() => {
                    e.showTimeTool(), l ? .()
                }), [e, l]);
                return (0, n.jsx)(m.Cl, {
                    icon: M.A,
                    onClick: i,
                    children: o
                })
            };
            var T = t("tMSF");
            const S = ({
                candlestick: e,
                onClose: l
            }) => {
                const {
                    getI18n: t
                } = (0, d.P3)(), o = (0, r.useMemo)((() => t("contextMenu-setting", {
                    defaultValue: "Chart Settings"
                })), [t]), i = (0, r.useCallback)((() => {
                    e.showSettingDialog(), l ? .()
                }), [e, l]);
                return (0, n.jsx)(m.Cl, {
                    icon: T.A,
                    onClick: i,
                    children: o
                })
            };
            var V = t("wHCr"),
                O = t("0d2x");
            const A = ({
                    onClick: e,
                    renderText: l,
                    price: t,
                    formattedPrice: o,
                    candlestick: i,
                    onClose: s
                }) => {
                    const c = (0, O.i)({
                            candlestick: i
                        })({
                            price: t,
                            formattedPrice: o
                        }),
                        a = (0, r.useMemo)((() => ({
                            formattedPrice: o,
                            side: c.side,
                            source: "context-menu"
                        })), [o, c.side]),
                        d = (0, r.useCallback)((() => {
                            e ? .(a), s ? .()
                        }), [e, s, a]);
                    return (0, n.jsx)(m.Cl, {
                        squishArrow: !0,
                        squishIcon: !0,
                        onClick: d,
                        children: l ? .(c)
                    })
                },
                I = ({
                    placeOrder: {
                        onClickBuyLimit: e,
                        onClickBuyStop: l,
                        onClickCreateNewOrder: t,
                        renderBuyLimitText: r = O.h.renderBuyLimitText,
                        renderBuyStopText: o = O.h.renderBuyStopText,
                        renderNewOrderText: i = O.h.renderNewOrderText
                    } = O.h,
                    price: s,
                    formattedPrice: c,
                    candlestick: a,
                    onClose: d
                }) => (0, n.jsxs)(n.Fragment, {
                    children: [e ? (0, n.jsx)(A, {
                        candlestick: a,
                        onClose: d,
                        price: s,
                        formattedPrice: c,
                        onClick: e,
                        renderText: r
                    }) : null, l ? (0, n.jsx)(A, {
                        candlestick: a,
                        onClose: d,
                        price: s,
                        formattedPrice: c,
                        onClick: l,
                        renderText: o
                    }) : null, t ? (0, n.jsx)(A, {
                        candlestick: a,
                        onClose: d,
                        price: s,
                        formattedPrice: c,
                        onClick: t,
                        renderText: i
                    }) : null]
                }),
                z = ({
                    isBasePanel: e,
                    visible: l,
                    ...t
                }) => {
                    const {
                        getI18n: o
                    } = (0, d.P3)(), i = (0, r.useMemo)((() => o("place-new-order", {
                        defaultValue: "Place New Order"
                    })), [o]), s = (0, r.useMemo)((() => !t.placeOrder ? .onClickBuyLimit && !t.placeOrder ? .onClickBuyStop && t.placeOrder ? .onClickCreateNewOrder), [t.placeOrder ? .onClickBuyLimit, t.placeOrder ? .onClickBuyStop, t.placeOrder ? .onClickCreateNewOrder]);
                    return e && !s && l ? (0, n.jsx)(m.Cl, {
                        icon: V.A,
                        subChildren: (0, n.jsx)(I, { ...t
                        }),
                        children: i
                    }) : null
                };
            var D = t("RkhT");
            const L = ({
                    candlestick: e,
                    placeOrder: l,
                    onClose: t,
                    menuSettings: o
                }) => {
                    const {
                        getI18n: i
                    } = (0, d.P3)(), s = (0, r.useMemo)((() => i("contextMenu-more-settings", {
                        defaultValue: "More Settings"
                    })), [i]), {
                        isBasePanel: c,
                        formattedPrice: u,
                        price: h
                    } = (0, x.EF)({
                        candlestick: e
                    }), f = (0, D.o)({
                        candlestick: e,
                        ...o.moreSettings
                    });
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(k, {
                            candlestick: e,
                            onClose: t
                        }), (0, n.jsx)(C, {}), (0, n.jsx)(z, {
                            candlestick: e,
                            isBasePanel: c,
                            formattedPrice: u,
                            price: h,
                            placeOrder: l,
                            onClose: t,
                            visible: o.rightClickPlaceOrder.visible
                        }), (0, n.jsx)(b, {
                            isBasePanel: c,
                            formattedPrice: u,
                            onClose: t
                        }), (0, n.jsx)(P, {
                            isBasePanel: c,
                            formattedPrice: u,
                            price: h,
                            candlestick: e,
                            onClose: t
                        }), f.filter((e => !!e)).length > 0 ? (0, n.jsxs)(n.Fragment, {
                            children: [(0, n.jsx)(C, {}), (0, n.jsx)(m.Cl, {
                                icon: a.A,
                                subChildren: f,
                                children: s
                            }), (0, n.jsx)(C, {})]
                        }) : null, (0, n.jsx)(j, {
                            isBasePanel: c,
                            onClose: t
                        }), (0, n.jsx)(y, {
                            candlestick: e,
                            onClose: t
                        }), (0, n.jsx)(C, {}), o ? .timeTool ? .visible ? ? 1 ? (0, n.jsx)(B, {
                            candlestick: e,
                            onClose: t
                        }) : null, (0, n.jsx)(S, {
                            candlestick: e,
                            onClose: t
                        })]
                    })
                },
                R = (0, r.forwardRef)((({
                    candlestick: e,
                    visible: l,
                    placeOrder: t,
                    position: r,
                    onClose: o,
                    menuSettings: i
                }, s) => (0, n.jsx)(c.x, {
                    ref: s,
                    style: {
                        visibility: l ? "visible" : "hidden",
                        position: "absolute",
                        left: `${r.x}px`,
                        top: `${r.y}px`,
                        zIndex: "var(--zindex-menu)"
                    },
                    children: (0, n.jsx)(L, {
                        candlestick: e,
                        placeOrder: t,
                        onClose: o,
                        menuSettings: i
                    })
                }))),
                $ = ({
                    candlestick: e,
                    placeOrder: l,
                    menuSettings: t
                }) => {
                    const [o, c] = (0, r.useState)(!1), [a, d] = (0, r.useState)({
                        x: 0,
                        y: 0
                    }), u = (0, r.useRef)(null), C = (0, r.useCallback)((() => c(!1)), []);
                    (0, s.A)(u, C), (0, r.useEffect)((() => {
                        const l = ({
                            event: e,
                            price: l,
                            formattedPrice: t
                        }) => {
                            const n = {
                                    x: window.scrollX + e.clientX,
                                    y: window.scrollY + e.clientY
                                },
                                r = u.current ? .getBoundingClientRect(),
                                o = {
                                    x: Math.min(n.x, window.innerWidth - (r ? .width || 0)),
                                    y: Math.min(n.y, window.innerHeight - (r ? .height || 0))
                                };
                            d(o), c(!0)
                        };
                        return e.on("contextmenu", l), () => e.off("contextmenu", l)
                    }), [e]);
                    const m = e ? (0, n.jsx)(R, {
                        ref: u,
                        candlestick: e,
                        visible: o,
                        placeOrder: l,
                        position: a,
                        onClose: C,
                        menuSettings: t
                    }) : null;
                    return (0, i.createPortal)(m, document.body)
                }
        },
        "0d2x": (e, l, t) => {
            t.d(l, {
                h: () => o,
                i: () => i
            });
            var n = t("DTvD"),
                r = t("iFsL");
            const o = {
                    renderBuyLimitText: e => `${"Buy"===e.side?e.buy:e.sell} ${e.asset} @ ${e.formattedPrice} ${e.limit}`,
                    renderBuyStopText: e => `${"Buy"===e.side?e.buy:e.sell} ${e.asset} @ ${e.formattedPrice} ${e.stop}`,
                    renderNewOrderText: e => `${e.createNewOrder}...`
                },
                i = ({
                    candlestick: e
                }) => {
                    const {
                        getI18n: l
                    } = (0, r.P3)(), t = (0, n.useMemo)((() => l("sell", {
                        defaultValue: "Sell"
                    }) || ""), [l]), o = (0, n.useMemo)((() => l("buy", {
                        defaultValue: "Buy"
                    }) || ""), [l]), i = (0, n.useMemo)((() => l("trade", {
                        defaultValue: "Trade"
                    }) || ""), [l]), s = (0, n.useMemo)((() => l("limit", {
                        defaultValue: "Limit"
                    }) || ""), [l]), c = (0, n.useMemo)((() => l("stop", {
                        defaultValue: "Stop"
                    }) || ""), [l]), a = (0, n.useMemo)((() => l("create-new-order", {
                        defaultValue: "Create new order"
                    }) || ""), [l]);
                    return (0, n.useCallback)((({
                        price: l,
                        formattedPrice: n
                    }) => {
                        const r = e.getLastSeriesDataClosePrice(),
                            {
                                baseAsset: d
                            } = e.regContetxt;
                        return {
                            side: l >= r ? "Sell" : "Buy",
                            sell: t,
                            buy: o,
                            trade: i,
                            limit: s,
                            stop: c,
                            asset: d,
                            formattedPrice: n,
                            createNewOrder: a
                        }
                    }), [o, e, a, s, t, c, i])
                }
        },
        tMSF: (e, l, t) => {
            t.d(l, {
                A: () => s
            });
            var n = t("wIZF"),
                r = t("DTvD"),
                o = t.n(r),
                i = t("qqbu");
            const s = function(e) {
                return o().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 4H3v3h18V4zM8 10.5H3v3h5v-3zM3 17h5v3H3v-3zm12.5-8.1l5.5 3.175v6.35l-5.5 3.176-5.5-3.176v-6.35l5.5-3.176zm2.25 6.35a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z",
                    fill: "currentColor"
                }))
            }
        },
        "3cAr": (e, l, t) => {
            t.d(l, {
                A: () => s
            });
            var n = t("wIZF"),
                r = t("DTvD"),
                o = t.n(r),
                i = t("qqbu");
            const s = function(e) {
                return o().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.8 3h-3.6v2.027c-.66.17-1.285.431-1.858.77L6.91 4.363 4.363 6.91l1.434 1.433a7.157 7.157 0 00-.77 1.858H3v3.6h2.027c.17.66.431 1.285.77 1.858L4.363 17.09l2.546 2.546 1.433-1.434c.573.339 1.197.6 1.858.77V21h3.6v-2.027a7.157 7.157 0 001.858-.77l1.433 1.434 2.546-2.546-1.434-1.434a7.16 7.16 0 00.77-1.857H21v-3.6h-2.027a7.158 7.158 0 00-.77-1.858l1.434-1.433-2.546-2.546-1.434 1.434a7.156 7.156 0 00-1.857-.77V3zm-4.5 9a2.7 2.7 0 115.4 0 2.7 2.7 0 01-5.4 0z",
                    fill: "currentColor"
                }))
            }
        },
        G8Jp: (e, l, t) => {
            t.d(l, {
                A: () => s
            });
            var n = t("wIZF"),
                r = t("DTvD"),
                o = t.n(r),
                i = t("qqbu");
            const s = function(e) {
                return o().createElement(i.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M10 3H7v2H4v3h16V5h-3V3h-3v2h-4V3zm10 7H4v10h16V10zm-10 2v2h7v2h-7v2l-3-3 3-3z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);