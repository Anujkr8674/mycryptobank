"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [4343], {
        fWqr: (e, t, l) => {
            l.r(t), l.d(t, {
                MoreSettings: () => k,
                default: () => C
            });
            var n = l("mXdx"),
                o = l("DTvD"),
                s = l.n(o),
                a = l("9YZR"),
                i = l("3cAr"),
                r = l("1tqE"),
                c = l("F05g"),
                h = l("Olbk"),
                u = l("1C1L"),
                d = l("kcvK"),
                p = l("T0Sc"),
                g = l("vjpm"),
                m = l("qv9I"),
                x = l("rPbR"),
                b = l("lrni");
            const v = ({
                    showDot: e,
                    children: t,
                    onVisibleChange: l
                }) => {
                    const {
                        getI18n: a
                    } = (0, p.o)("", "kline-ui"), [u, d] = (0, o.useState)(!1), g = (0, o.useCallback)((() => d(!0)), []), m = (0, o.useCallback)((() => d(!1)), []), x = t.filter(Boolean), {
                        length: v
                    } = x;
                    return (0, n.jsxs)(n.Fragment, {
                        children: [(0, n.jsx)(b.I, {
                            element: i.A,
                            showDot: e,
                            onClick: g
                        }), (0, n.jsxs)(c.A, {
                            visible: u,
                            direction: "bottom",
                            onClose: m,
                            onVisibleChange: l,
                            enablePortal: !0,
                            enableScrollSpace: !1,
                            children: [(0, n.jsxs)(h.Ay, {
                                className: "flex items-center justify-between py-[14px] px-[15px] mt-[16px]",
                                children: [(0, n.jsx)(h.Ay, {
                                    className: "t-headline4",
                                    children: a("contextMenu-more-settings", {
                                        defaultValue: "More Settings"
                                    })
                                }), (0, n.jsx)(r.A, {
                                    className: "text-[20px] cursor-pointer text-IconNormal",
                                    onClick: m
                                })]
                            }), s().Children.map(x, (e => s().cloneElement(e, {
                                closeLevel1: m,
                                totalLevel1: v
                            })))]
                        })]
                    })
                },
                k = ({
                    namespace: e,
                    moreSettings: t,
                    onClick: l,
                    showDot: s
                }) => {
                    const {
                        getI18n: r
                    } = (0, p.o)("", "trade-ui"), {
                        isMobile: c,
                        is13Desk: k,
                        isIPad: C
                    } = (0, g.Q)(), f = (0, m.createStore)(e), j = (0, x.createStore)(e), [w, A] = f(m.getShowMoreSettingTooltipCounter), [S] = j(x.getCandlestickReference), [D, I] = j(x.getShowMoreSettingTooltip), M = (0, o.useMemo)((() => r("enable-spotlight-in-settings", {
                        defaultValue: "Enable Spotlight in settings."
                    })), [r]), V = (0, o.useCallback)((() => {
                        I(!1), A(), l ? .()
                    }), [A, l, I]), y = (0, o.useMemo)((() => w < 1 && D), [D, w]), P = (0, a.ot)({
                        candlestick: S,
                        ...t
                    });
                    return P.filter((e => !!e)).length > 0 ? c ? (0, n.jsx)(v, {
                        showDot: s,
                        onVisibleChange: l,
                        children: P
                    }) : (0, n.jsx)(u.A, {
                        enablePortal: !0,
                        useReactPopper: !0,
                        trigger: k && C ? "click" : "hover",
                        placement: "bottom",
                        onVisibleChange: V,
                        overlay: (0, n.jsx)(h.Ay, {
                            className: "flex flex-col rounded-[--radii-2l] py-[--space-xs]",
                            children: P
                        }),
                        children: y ? (0, n.jsx)(d.A, {
                            open: y,
                            enablePortal: !0,
                            useReactPopper: !0,
                            once: !0,
                            arrow: !0,
                            placement: "bottom",
                            trigger: "click",
                            tooltips: M,
                            children: (0, n.jsx)(b.I, {
                                element: i.A,
                                showDot: s
                            })
                        }) : (0, n.jsx)(b.I, {
                            element: i.A,
                            showDot: s
                        })
                    }) : null
                },
                C = k
        },
        "3cAr": (e, t, l) => {
            l.d(t, {
                A: () => i
            });
            var n = l("wIZF"),
                o = l("DTvD"),
                s = l.n(o),
                a = l("qqbu");
            const i = function(e) {
                return s().createElement(a.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.8 3h-3.6v2.027c-.66.17-1.285.431-1.858.77L6.91 4.363 4.363 6.91l1.434 1.433a7.157 7.157 0 00-.77 1.858H3v3.6h2.027c.17.66.431 1.285.77 1.858L4.363 17.09l2.546 2.546 1.433-1.434c.573.339 1.197.6 1.858.77V21h3.6v-2.027a7.157 7.157 0 001.858-.77l1.433 1.434 2.546-2.546-1.434-1.434a7.16 7.16 0 00.77-1.857H21v-3.6h-2.027a7.158 7.158 0 00-.77-1.858l1.434-1.433-2.546-2.546-1.434 1.434a7.156 7.156 0 00-1.857-.77V3zm-4.5 9a2.7 2.7 0 115.4 0 2.7 2.7 0 01-5.4 0z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);