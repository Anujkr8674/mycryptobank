"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [4832], {
        T9kP: (e, t, r) => {
            r.r(t), r.d(t, {
                ChartStyleDropdown: () => H,
                default: () => E
            });
            var l = r("mXdx"),
                n = r("DTvD"),
                a = r.n(n),
                s = r("8+PA"),
                i = r("TaoO"),
                c = r("Olbk"),
                o = r("9YZR"),
                u = r("qv9I"),
                h = r("rPbR"),
                S = r("T0Sc"),
                d = r("gMKA"),
                v = r("YmWp"),
                y = r("wIZF"),
                f = r("qqbu");
            const m = function(e) {
                return a().createElement(f.A, (0, y.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M8 6.012h3v8.984H2V6.012h3v-4h3v4zM19 3h-3v4h-3v14h9V7h-3V3z",
                    fill: "currentColor"
                }))
            };
            var p = r("YVFk"),
                C = r("cqIx");
            const V = function(e) {
                return a().createElement(f.A, (0, y.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M21 3.77l-6.5 6.5-4.48-4.458-8.073 8.073 2.122 2.121 5.956-5.957 4.48 4.458 8.617-8.616L21 3.77zM3 18h3v3H3v-3zM8 18h3v3H8v-3zM13 18h3v3h-3v-3zM18 18h3v3h-3v-3z",
                    fill: "currentColor"
                }))
            };
            const M = function(e) {
                return a().createElement(f.A, (0, y.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M21 1.5h-6v7H9v7H3v7h6v-7h6v-7h6v-7z",
                    fill: "currentColor"
                }))
            };
            const g = function(e) {
                return a().createElement(f.A, (0, y.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M9 3h6v7H9V3zM9 10v7H3v-7h6zM15 10v11h6V10h-6z",
                    fill: "currentColor"
                }))
            };
            const A = function(e) {
                return a().createElement(f.A, (0, y.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M13.5 1v10h2V5h8v14h-3V8h-2v6h-8V4h-2v17h-8v-7h3v4h2V1h8z",
                    fill: "currentColor"
                }))
            };
            const w = function(e) {
                return a().createElement(f.A, (0, y.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 7a4 4 0 11-8 0 4 4 0 018 0zm-3 0a1 1 0 11-2 0 1 1 0 012 0zM11 17a4 4 0 11-8 0 4 4 0 018 0zm-3 0a1 1 0 11-2 0 1 1 0 012 0z",
                    fill: "currentColor"
                }), a().createElement("path", {
                    d: "M8.768 3.111l2.121 2.121L9.121 7l1.768 1.768-2.121 2.121L7 9.121 5.232 10.89 3.111 8.768 4.879 7 3.11 5.232l2.121-2.121L7 4.879 8.768 3.11zM18.768 13.111l2.121 2.121L19.121 17l1.768 1.768-2.121 2.121L17 19.121l-1.768 1.768-2.121-2.121L14.879 17l-1.768-1.768 2.121-2.121L17 14.879l1.768-1.768z",
                    fill: "currentColor"
                }))
            };
            const b = function(e) {
                    return a().createElement(f.A, (0, y.__assign)({
                        viewBox: "0 0 24 24",
                        fill: "none"
                    }, e), a().createElement("path", {
                        d: "M19 3h-3v4h-3v10h3v4h3v-4h3V7h-3V3zM11 11H8V7H5v4H2v6h3v4h3v-4h3v-6z",
                        fill: "currentColor"
                    }))
                },
                _ = [u.SeriesStyle.Bars, u.SeriesStyle.Candles, u.SeriesStyle.HollowCandles, u.SeriesStyle.HeikinAshi, u.SeriesStyle.Line, u.SeriesStyle.Area, u.SeriesStyle.Baseline, u.SeriesStyle.Renko, u.SeriesStyle.LineBreak, u.SeriesStyle.Kagi, u.SeriesStyle.PnF],
                x = [u.SeriesStyle.Candles, u.SeriesStyle.Line, u.SeriesStyle.Bars, u.SeriesStyle.Area],
                k = e => {
                    switch (e) {
                        case u.SeriesStyle.Bars:
                            return d.A;
                        case u.SeriesStyle.HollowCandles:
                            return v.A;
                        case u.SeriesStyle.HeikinAshi:
                            return m;
                        case u.SeriesStyle.Line:
                            return p.A;
                        case u.SeriesStyle.Area:
                            return C.A;
                        case u.SeriesStyle.Baseline:
                            return V;
                        case u.SeriesStyle.Renko:
                            return M;
                        case u.SeriesStyle.LineBreak:
                            return g;
                        case u.SeriesStyle.Kagi:
                            return A;
                        case u.SeriesStyle.PnF:
                            return w;
                        case u.SeriesStyle.Candles:
                        default:
                            return b
                    }
                };
            var B = r("lrni");
            const z = ["[&_.bn-select-field]:border-none", "[&_.bn-select-field]:w-auto", "[&_.bn-select-field]:h-auto", "[&_.bn-select-field]:p-0", "[&_.bn-select-field-input]:overflow-visible", "[&_.bn-select-field-input]:w-[16px]", "[&_.bn-select-field-input]:h-[16px]", "[&_.bn-select-field-arrow]:hidden"].join(" "),
                H = ({
                    namespace: e,
                    type: t,
                    onClick: r,
                    showDot: a
                }) => {
                    const d = (0, s.A)(),
                        v = (0, u.createStore)(e),
                        y = (0, h.createStore)(e),
                        [f, m] = v(u.getTvChartStyle),
                        [p] = v(u.getInterval),
                        [C] = y(h.getCandlestickReference),
                        V = C ? .settingStore.getValue("@symbol.candlestick.style") || o.Ky.Candle,
                        M = (() => {
                            const {
                                getI18n: e
                            } = (0, S.o)("trd-chart", "trade-ui"), t = (0, n.useMemo)((() => e("chartStyle-bar", {
                                defaultValue: "Bar"
                            }) || ""), [e]), r = (0, n.useMemo)((() => e("chartStyle-candles", {
                                defaultValue: "Candles"
                            }) || ""), [e]), l = (0, n.useMemo)((() => e("chartStyle-hollowCandles", {
                                defaultValue: "Hollow Candles"
                            }) || ""), [e]), a = (0, n.useMemo)((() => e("chartStyle-heikinAshi", {
                                defaultValue: "Heikin Ashi"
                            }) || ""), [e]), s = (0, n.useMemo)((() => e("chartStyle-line", {
                                defaultValue: "Line"
                            }) || ""), [e]), i = (0, n.useMemo)((() => e("chartStyle-area", {
                                defaultValue: "Area"
                            }) || ""), [e]), c = (0, n.useMemo)((() => e("chartStyle-baseline", {
                                defaultValue: "Baseline"
                            }) || ""), [e]), o = (0, n.useMemo)((() => e("chartStyle-renko", {
                                defaultValue: "Renko"
                            }) || ""), [e]), h = (0, n.useMemo)((() => e("chartStyle-linebreak", {
                                defaultValue: "Line Break"
                            }) || ""), [e]), d = (0, n.useMemo)((() => e("chartStyle-kagi", {
                                defaultValue: "Kagi"
                            }) || ""), [e]), v = (0, n.useMemo)((() => e("chartStyle-pnf", {
                                defaultValue: "Point & Figure"
                            }) || ""), [e]);
                            return e => {
                                switch (e) {
                                    case u.SeriesStyle.Bars:
                                        return t;
                                    case u.SeriesStyle.Candles:
                                        return r;
                                    case u.SeriesStyle.HollowCandles:
                                        return l;
                                    case u.SeriesStyle.HeikinAshi:
                                        return a;
                                    case u.SeriesStyle.Line:
                                        return s;
                                    case u.SeriesStyle.Area:
                                        return i;
                                    case u.SeriesStyle.Baseline:
                                        return c;
                                    case u.SeriesStyle.Renko:
                                        return o;
                                    case u.SeriesStyle.LineBreak:
                                        return h;
                                    case u.SeriesStyle.Kagi:
                                        return d;
                                    case u.SeriesStyle.PnF:
                                        return v;
                                    default:
                                        return ""
                                }
                            }
                        })();
                    (0, n.useEffect)((() => {
                        if (!C) return;
                        const e = C.settingStore,
                            t = C.indicatorStore;
                        return e.subscribeValueChanged(d), t.subscribeValueChanged(d), () => {
                            e.unsubscribeValueChanged(d), t.unsubscribeValueChanged(d)
                        }
                    }), [C, d]);
                    const g = (0, n.useMemo)((() => "TradingView" === t ? _ : x), [t]),
                        A = (0, n.useMemo)((() => "TradingView" === t ? f : (e => {
                            switch (e) {
                                case o.Ky.Line:
                                    return u.SeriesStyle.Line;
                                case o.Ky.Bar:
                                    return u.SeriesStyle.Bars;
                                case o.Ky.Area:
                                    return u.SeriesStyle.Area;
                                case o.Ky.Candle:
                                default:
                                    return u.SeriesStyle.Candles
                            }
                        })(V)), [V, f, t]),
                        w = (0, n.useMemo)((() => g.map((e => {
                            const t = k(e),
                                r = A === e,
                                n = r ? "typography-subtitle2" : "typography-body3",
                                a = r ? "--color-PrimaryText" : "--color-IconNormal";
                            return (0, l.jsx)(i.A.Option, {
                                optionCheckIcon: !0,
                                value: e,
                                className: "h-[38px]",
                                children: (0, l.jsxs)(c.Ay, {
                                    className: "flex items-center gap-[5px]",
                                    children: [(0, l.jsx)(t, {
                                        className: `min-w-[16px] min-h-[16px] text-[${a}]`
                                    }), (0, l.jsx)(c.Ay, {
                                        className: `${n} text-[--color-PrimaryText]`,
                                        children: M(e)
                                    })]
                                })
                            }, e)
                        }))), [g, M, A]);
                    return (0, l.jsx)(i.A, {
                        enablePortal: !0,
                        useReactPopper: !0,
                        fieldVariant: "borderless",
                        reactPopperProps: {
                            sameWidth: !1,
                            popperWidth: "TradingView" === t ? 176 : 136
                        },
                        once: !0,
                        className: z,
                        value: [A],
                        onChange: ([e]) => {
                            if ("TradingView" === t) m(e);
                            else {
                                if (!C) return;
                                const t = C.settingStore,
                                    r = (e => {
                                        switch (e) {
                                            case u.SeriesStyle.Line:
                                                return o.Ky.Line;
                                            case u.SeriesStyle.Bars:
                                                return o.Ky.Bar;
                                            case u.SeriesStyle.Area:
                                                return o.Ky.Area;
                                            case u.SeriesStyle.Candles:
                                            default:
                                                return o.Ky.Candle
                                        }
                                    })(e);
                                t.setValue("@symbol.candlestick.style", r);
                                const {
                                    typeFromSetting: l
                                } = t.getCalculatedChartType();
                                if (!l) return;
                                p !== u.DisplayIntervals.Time && t.setChartType(l), C.updateBasePanel(), C.update()
                            }
                        },
                        renderFn: e => {
                            const [t] = e.selects, n = k(t);
                            return (0, l.jsx)(B.I, {
                                element: n,
                                showDot: a,
                                onMouseEnter: e => r ? .(e)
                            })
                        },
                        children: w
                    })
                },
                E = H
        },
        cqIx: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var l = r("wIZF"),
                n = r("DTvD"),
                a = r.n(n),
                s = r("qqbu");
            const i = function(e) {
                return a().createElement(s.A, (0, l.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M18.877.878L9.97 9.785l-3.5-3.49-5.608 5.608 2.12 2.122 3.49-3.49 3.501 3.49L20.998 3 18.877.878z",
                    fill: "currentColor"
                }), a().createElement("path", {
                    d: "M21 20.999v-14l-11 11h-.004L6.498 14.5 3 17.999v3h18z",
                    fill: "currentColor"
                }))
            }
        },
        gMKA: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var l = r("wIZF"),
                n = r("DTvD"),
                a = r.n(n),
                s = r("qqbu");
            const i = function(e) {
                return a().createElement(s.A, (0, l.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    d: "M6.005 2.999v13.003H3v3h3.005v1.965h3V13H12v-3H9.005V2.999h-3zM15.002 2.999v2.007H12v3h3.002v12.961h3v-4.966H21v-3h-2.998V2.999h-3z",
                    fill: "currentColor"
                }))
            }
        },
        YmWp: (e, t, r) => {
            r.d(t, {
                A: () => i
            });
            var l = r("wIZF"),
                n = r("DTvD"),
                a = r.n(n),
                s = r("qqbu");
            const i = function(e) {
                return a().createElement(s.A, (0, l.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), a().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16 3h3v4h3v9.999h-3v4h-3v-4h-3V7h3V3zm3 7h-3v3.999h3V10z",
                    fill: "currentColor"
                }), a().createElement("path", {
                    d: "M8 11h3v6H8v4H5v-4H2v-6h3V7h3v4z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);