"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [4945], {
        qGQ4: (e, r, i) => {
            i.d(r, {
                m: () => a
            });
            var s = i("Wbjr");
            const t = e => {
                    switch (e.type) {
                        case "techInd":
                        case "indOrder":
                            try {
                                return {
                                    type: e.type,
                                    data: JSON.parse(e.lines)
                                }
                            } catch (r) {
                                return {
                                    type: e.type,
                                    data: {}
                                }
                            }
                        default:
                            try {
                                return {
                                    symbol: e.symbol,
                                    type: e.type,
                                    data: JSON.parse(e.lines)
                                }
                            } catch (r) {
                                return {
                                    symbol: e.symbol,
                                    type: e.type,
                                    data: []
                                }
                            }
                    }
                },
                a = async ({
                    drawing: e,
                    indicator: r
                }) => {
                    const i = [...e.enabled ? [{
                        type: e.type,
                        symbol: e.symbol
                    }] : [], ...r.enabled ? [{
                        type: "techInd"
                    }, {
                        type: "indOrder"
                    }] : []];
                    return ((await (0, s.Tl)({
                        settingKeys: i
                    })).data || []).map(t)
                }
        },
        "8pog": (e, r, i) => {
            i.d(r, {
                X: () => t
            });
            var s = i("Wbjr");
            const t = async ({
                key: e,
                data: r
            }) => (0, s.Yc)({
                lines: r,
                settingKey: e
            })
        },
        "f3y+": (e, r, i) => {
            i.d(r, {
                Hh: () => E,
                UN: () => P,
                eN: () => X,
                pC: () => R
            });
            var s = i("DTvD"),
                t = i("BmHO"),
                a = i.n(t),
                o = i("brax"),
                n = i.n(o),
                l = i("9YZR"),
                c = i("rPbR"),
                d = i("mQ6W"),
                p = i.n(d),
                u = i("g6+1"),
                m = i.n(u);
            const h = {
                    1: "a",
                    2: "b",
                    3: "c",
                    4: "d"
                },
                S = Object.keys(h).reduce(((e, r) => {
                    const i = +r;
                    return e[h[i]] = i, e
                }), {}),
                y = e => h[e] || "a",
                w = e => S[e] || 1,
                b = e => {
                    switch (e) {
                        case l.Sc.DOTTED:
                            return "b";
                        case l.Sc.DASHED_2:
                            return "c";
                        case l.Sc.DASHED:
                            return "d";
                        case l.Sc.SOLID:
                        default:
                            return "a"
                    }
                },
                g = e => {
                    switch (e) {
                        case "b":
                            return l.Sc.DOTTED;
                        case "c":
                            return l.Sc.DASHED_2;
                        case "d":
                            return l.Sc.DASHED;
                        default:
                            return l.Sc.SOLID
                    }
                },
                I = ({
                    time: e,
                    value: r
                }) => ({
                    timestamp: e,
                    price: r
                }),
                A = ({
                    timestamp: e,
                    price: r
                }) => ({
                    time: e,
                    value: r
                }),
                L = e => m()(Object.keys(e)).map((r => I(e[r]))),
                C = e => e.reduce(((e, r, i) => ({ ...e,
                    [`p${i+1}`]: A(r)
                })), {});
            var M = i("nb2p");
            const v = ["trend", "extended", "horizontal_line", "horizontal_extended", "ray", "price_line", "parallel_line", "rect", "fibonacci", l.X2.LeftArrow, l.X2.RightArrow, l.X2.UpArrow, l.X2.DownArrow, l.X2.CrossLine, l.X2.VerticalLine, l.X2.InfoLine, l.X2.Text, l.X2.ArrowLine],
                D = ({
                    type: e,
                    background: r = "",
                    color: i = "",
                    lineStyle: s = l.Sc.SOLID,
                    lineWidth: t = 1,
                    isLock: a = !1,
                    textFontSize: o = 12,
                    isTextBold: n = !1,
                    textColor: c = "",
                    text: d,
                    data: p
                }) => {
                    switch (e) {
                        case l.X2.TrendLine:
                            return {
                                type: "trend",
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: L(p),
                                isLocked: a
                            };
                        case l.X2.ExtendTrendLine:
                            return {
                                type: "extended",
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: L(p),
                                isLocked: a
                            };
                        case l.X2.RayLine:
                            return {
                                type: "ray",
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: L(p),
                                isLocked: a
                            };
                        case l.X2.HorizontalExtendedLine:
                            return {
                                type: "horizontal_extended",
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: L(p),
                                isLocked: a
                            };
                        case l.X2.PriceLine:
                            return {
                                type: "price_line",
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: [I(p)],
                                isLocked: a
                            };
                        case l.X2.ParallelLine:
                            return {
                                type: "parallel_line",
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: L(p),
                                isLocked: a
                            };
                        case l.X2.Rectangle:
                            return {
                                type: "rect",
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: L(p),
                                isLocked: a
                            };
                        case l.X2.FibonacciLine:
                            return {
                                type: "fibonacci",
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: L(p),
                                isLocked: a
                            };
                        case l.X2.HorizontalLine:
                            return {
                                type: "horizontal_line",
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: [I(p)],
                                isLocked: a
                            };
                        case l.X2.LeftArrow:
                        case l.X2.RightArrow:
                        case l.X2.UpArrow:
                        case l.X2.DownArrow:
                            return {
                                type: e,
                                fillColor: (0, M.$)(i),
                                points: [I(p)],
                                isLocked: a
                            };
                        case l.X2.CrossLine:
                        case l.X2.VerticalLine:
                            return {
                                type: e,
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: [I(p)],
                                isLocked: a
                            };
                        case l.X2.InfoLine:
                        case l.X2.ArrowLine:
                            return {
                                type: e,
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: L(p),
                                isLocked: a
                            };
                        case l.X2.Text:
                            return {
                                type: e,
                                text: d,
                                fillColor: (0, M.$)(r),
                                fontColor: (0, M.$)(c),
                                fontStyle: n ? "bold" : "",
                                fontSize: o,
                                points: [I(p)],
                                isLocked: a
                            };
                        default:
                            return console.warn("[trade-widget/chart] unidentified annotation type during normalization: ", e), {
                                type: e || l.X2.Empty,
                                fillColor: (0, M.$)(r),
                                lineColor: (0, M.$)(i),
                                lineStyle: b(s),
                                lineWidth: y(t),
                                points: L(p),
                                isLocked: a
                            }
                    }
                },
                k = ({
                    type: e,
                    fillColor: r,
                    lineColor: i = 0,
                    lineStyle: s = "a",
                    lineWidth: t = "a",
                    fontColor: a = 0,
                    fontStyle: o = "",
                    fontSize: n = 12,
                    text: c = "",
                    points: d,
                    isLocked: p
                }) => {
                    switch (e) {
                        case "trend":
                            return {
                                type: l.X2.TrendLine,
                                data: C(d),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case "extended":
                            return {
                                type: l.X2.ExtendTrendLine,
                                data: C(d),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case "ray":
                            return {
                                type: l.X2.RayLine,
                                data: C(d),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case "horizontal_extended":
                            return {
                                type: l.X2.HorizontalExtendedLine,
                                data: C(d),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case "price_line":
                            return {
                                type: l.X2.PriceLine,
                                data: A(d[0]),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case "parallel_line":
                            return {
                                type: l.X2.ParallelLine,
                                data: C(d),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case "rect":
                            return {
                                type: l.X2.Rectangle,
                                data: C(d),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case "fibonacci":
                            return {
                                type: l.X2.FibonacciLine,
                                data: C(d),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case "horizontal_line":
                            return {
                                type: l.X2.HorizontalLine,
                                data: A(d[0]),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case l.X2.CrossLine:
                        case l.X2.VerticalLine:
                            return {
                                type: e,
                                data: A(d[0]),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case l.X2.InfoLine:
                        case l.X2.ArrowLine:
                            return {
                                type: e,
                                data: C(d),
                                color: (0, M.e)(i),
                                background: (0, M.e)(r),
                                lineWidth: w(t),
                                lineStyle: g(s),
                                isLock: p
                            };
                        case l.X2.LeftArrow:
                        case l.X2.RightArrow:
                        case l.X2.UpArrow:
                        case l.X2.DownArrow:
                            return {
                                type: e,
                                data: A(d[0]),
                                color: (0, M.e)(r),
                                isLock: p
                            };
                        case l.X2.Text:
                            return {
                                type: e,
                                data: A(d[0]),
                                text: c,
                                background: (0, M.e)(r),
                                textColor: (0, M.e)(a),
                                textFontSize: n,
                                isTextBold: "bold" === o,
                                isLock: p
                            };
                        default:
                            return console.warn("[trade-widget/chart] unidentified annotation type during unnormalization: ", e), {
                                type: e || l.X2.Empty,
                                isLock: p
                            }
                    }
                },
                O = e => e.map(D),
                W = e => {
                    const [r, i] = p()(e, (({
                        type: e
                    }) => (e => v.includes(e))(e)));
                    return {
                        known: r,
                        unknown: i
                    }
                };
            var f = i("8pog"),
                j = i("qGQ4");
            const V = e => {
                    if (!e) return [];
                    const r = e.find((e => "CANDLE" === e.type)),
                        {
                            annotations: i = []
                        } = r || {};
                    return i
                },
                R = ({
                    target: e
                }) => {
                    const r = (0, s.useMemo)((() => a().createInstance({
                            name: e.namespace
                        })), [e.namespace]),
                        i = (0, c.createStore)(e.namespace),
                        [t] = i(c.getCandlestickReference);
                    return (0, s.useCallback)((async () => {
                        if (!t) throw new Error("[trade-widget] candlestick reference not found ");
                        const i = t ? .getAttr("symbol"),
                            s = (0, l.tC)(i),
                            a = await r.getItem(s),
                            o = V(a),
                            n = O(o),
                            c = JSON.stringify(n),
                            {
                                success: d,
                                message: p
                            } = await (0, f.X)({
                                data: c,
                                key: {
                                    symbol: e.symbol,
                                    type: e.type
                                }
                            });
                        if (!d) throw new Error(p || "");
                        t.fire("reloadStorage")
                    }), [t, r, e.symbol, e.type])
                },
                X = ({
                    target: e
                }) => {
                    const r = (0, s.useMemo)((() => a().createInstance({
                            name: e.namespace
                        })), [e.namespace]),
                        i = (0, c.createStore)(e.namespace),
                        [t] = i(c.getCandlestickReference);
                    return (0, s.useCallback)((async () => {
                        if (!t) throw new Error("[trade-widget] candlestick reference not found ");
                        const i = await (0, j.m)({
                                drawing: {
                                    enabled: !0,
                                    type: e.type,
                                    symbol: e.symbol
                                },
                                indicator: {
                                    enabled: !1
                                }
                            }),
                            {
                                data: s = []
                            } = i.find((r => r.symbol === e.symbol && r.type === e.type)) || {},
                            a = t ? .getAttr("symbol"),
                            o = (0, l.tC)(a),
                            c = await r.getItem(o),
                            d = V(c),
                            p = O(d),
                            u = n()([...p, ...s], ((e, r) => e.type === r.type && (e.type === l.X2.Text ? JSON.stringify(e.points) === JSON.stringify(r.points) && e.isLocked === r.isLocked && e.fontSize === r.fontSize && e.fontStyle === r.fontStyle && e.text === r.text : e.lineStyle === r.lineStyle && e.lineWidth === r.lineWidth && e.isLocked === r.isLocked && JSON.stringify(e.points) === JSON.stringify(r.points)))),
                            m = JSON.stringify(u),
                            {
                                success: h,
                                message: S
                            } = await (0, f.X)({
                                data: m,
                                key: {
                                    symbol: e.symbol,
                                    type: e.type
                                }
                            });
                        if (!h) throw new Error(S || "");
                        t.fire("reloadStorage")
                    }), [t, r, e.symbol, e.type])
                },
                P = async ({
                    cloudEnabled: e,
                    annotations: r,
                    unknownAnnotations: i,
                    symbol: s,
                    type: t,
                    storage: a,
                    annotationsStoreKey: o
                }) => {
                    if (e) try {
                        const e = V(r),
                            a = [...O(e), ...i],
                            o = JSON.stringify(a);
                        await (0, f.X)({
                            data: o,
                            key: {
                                symbol: s,
                                type: t
                            }
                        })
                    } catch (n) {
                        console.warn("[trade-widget/chart] original candlestick errors while saving drawings", n)
                    } else await a.setItem(o, r)
                },
                E = async ({
                    cloudEnabled: e,
                    settingsData: r,
                    annotationsStoreKey: i,
                    storage: s,
                    symbol: t,
                    type: a
                }) => {
                    if (!e) {
                        const e = await s.getItem(i);
                        return (0, l.MV)(e || []), {
                            annotations: e,
                            unknown: []
                        }
                    }
                    try {
                        const e = r.find((e => e.symbol === t && e.type === a)),
                            i = e ? .data || [],
                            {
                                known: s,
                                unknown: o
                            } = W(i);
                        return {
                            annotations: [{
                                type: "CANDLE",
                                annotations: s.map(k)
                            }],
                            unknown: o
                        }
                    } catch (o) {
                        return console.warn("[trade-widget/chart] original candlestick errors while loading drawings", o), {
                            annotations: [{
                                type: "CANDLE",
                                annotations: []
                            }],
                            unknown: []
                        }
                    }
                }
        },
        sTk4: (e, r, i) => {
            i.d(r, {
                Hh: () => Oe,
                UN: () => ke,
                hm: () => We
            });
            var s = i("DTvD"),
                t = i("BmHO"),
                a = i.n(t),
                o = i("Km4d"),
                n = i.n(o),
                l = i("9YZR"),
                c = i("8pog"),
                d = i("qGQ4"),
                p = i("nbv6"),
                u = i.n(p),
                m = i("0wzd"),
                h = i.n(m),
                S = i("lCim"),
                y = i.n(S);
            const w = ({
                id: e,
                params: r
            }) => {
                const i = {
                    id: e,
                    params: r,
                    isCustom: !1,
                    isTriggeredByClick: !1
                };
                switch (e) {
                    case l.kG.MA:
                        return { ...i,
                            name: "MA",
                            type: "MA",
                            categories: ["main"]
                        };
                    case l.kG.EMA:
                        return { ...i,
                            name: "EMA",
                            type: "EMA",
                            categories: ["main"]
                        };
                    case l.kG.WMA:
                        return { ...i,
                            name: "WMA",
                            type: "WMA",
                            categories: ["main"]
                        };
                    case l.kG.BOLL:
                        return { ...i,
                            name: "BOLL",
                            type: "BOLL",
                            categories: ["main"]
                        };
                    case l.kG.VWAP:
                        return { ...i,
                            name: "VWAP",
                            type: "VWAP",
                            categories: ["main"]
                        };
                    case l.kG.AVL:
                        return { ...i,
                            name: "AVL",
                            type: "AVL",
                            categories: ["main"]
                        };
                    case l.kG.TRIX:
                        return { ...i,
                            name: "TRIX",
                            type: "TRIX",
                            categories: ["main"]
                        };
                    case l.kG.SAR:
                        return { ...i,
                            name: "SAR",
                            type: "SAR",
                            categories: ["main"]
                        };
                    case l.js.VOL:
                        return { ...i,
                            name: "VOL",
                            type: "VOL",
                            categories: ["sub"]
                        };
                    case l.js.MACD:
                        return { ...i,
                            name: "MACD",
                            type: "MACD",
                            categories: ["sub"]
                        };
                    case l.js.RSI:
                        return { ...i,
                            name: "RSI",
                            type: "RSI",
                            categories: ["sub"]
                        };
                    case l.js.MFI:
                        return { ...i,
                            name: "MFI",
                            type: "MFI",
                            categories: ["sub"]
                        };
                    case l.js.KDJ:
                        return { ...i,
                            name: "KDJ",
                            type: "KDJ",
                            categories: ["sub"]
                        };
                    case l.js.OBV:
                        return { ...i,
                            name: "OBV",
                            type: "OBV",
                            categories: ["sub"]
                        };
                    case l.js.CCI:
                        return { ...i,
                            name: "CCI",
                            type: "CCI",
                            categories: ["sub"]
                        };
                    case l.js.StochRSI:
                        return { ...i,
                            name: "Stoch RSI",
                            type: "Stoch RSI",
                            categories: ["sub"]
                        };
                    case l.js.WR:
                        return { ...i,
                            name: "Wm %R",
                            type: "Wm %R",
                            categories: ["sub"]
                        };
                    case l.js.DMI:
                        return { ...i,
                            name: "DMI",
                            type: "DMI",
                            categories: ["sub"]
                        };
                    case l.js.MTM:
                        return { ...i,
                            name: "MTM",
                            type: "MTM",
                            categories: ["sub"]
                        };
                    case l.js.EMV:
                        return { ...i,
                            name: "EMV",
                            type: "EMV",
                            categories: ["sub"]
                        };
                    case l.js.OI_UM:
                    case l.js.OI_CM:
                        return { ...i,
                            name: "O.I",
                            type: "O.I",
                            categories: ["big-data"]
                        };
                    case l.js.LS_ACCO:
                        return { ...i,
                            name: "L.S Acco.",
                            type: "L.S Acco.",
                            categories: ["big-data"]
                        };
                    case l.js.LS_POSIT:
                        return { ...i,
                            name: "L.S Posit.",
                            type: "L.S Posit.",
                            categories: ["big-data"]
                        };
                    case l.js.LS_RATIO:
                        return { ...i,
                            name: "L.S Ratio",
                            type: "L.S Ratio",
                            categories: ["big-data"]
                        };
                    case l.js.BS_VOL:
                        return { ...i,
                            name: "B.S Vol.",
                            type: "B.S Vol.",
                            categories: ["big-data"]
                        };
                    case l.js.BASIS:
                        return { ...i,
                            name: "Basis",
                            type: "Basis",
                            categories: ["big-data"]
                        };
                    default:
                        return null
                }
            };
            var b = i("nb2p");
            const g = e => (0, b.$)(e.value),
                I = e => (({
                    value: e,
                    pristine: r = !1
                }) => ({
                    type: "color",
                    value: e,
                    pristine: r
                }))({
                    value: (0, b.e)(+e || 0)
                }),
                A = e => {
                    switch (e) {
                        case "2":
                            return "b";
                        case "3":
                            return "c";
                        case "4":
                            return "d";
                        default:
                            return "a"
                    }
                },
                L = e => {
                    switch (e) {
                        case "b":
                            return "2";
                        case "c":
                            return "3";
                        case "d":
                            return "4";
                        default:
                            return "1"
                    }
                },
                C = e => {
                    switch (e) {
                        case l.jp.High:
                            return 3;
                        case l.jp.Low:
                            return 4;
                        case l.jp.Close:
                            return 2;
                        case l.jp.Open:
                        default:
                            return 1
                    }
                },
                M = e => {
                    switch (e) {
                        case 2:
                            return l.jp.Close;
                        case 3:
                            return l.jp.High;
                        case 4:
                            return l.jp.Low;
                        default:
                            return l.jp.Open
                    }
                },
                v = e => {
                    switch (e) {
                        case l.Ow.Hollow:
                            return !0;
                        case l.Ow.Solid:
                        default:
                            return !1
                    }
                },
                D = e => !0 === e ? l.Ow.Hollow : l.Ow.Solid,
                k = e => Math.floor(+e),
                O = e => {
                    const {
                        periods: r,
                        sources: i,
                        lineWidths: s,
                        colors: t,
                        visibles: a
                    } = e.params, o = t.map(((e, o) => ({
                        isSelected: a[o],
                        value: k(r[o]),
                        color: g(t[o]),
                        width: A(s[o]),
                        source: C(i[o])
                    })));
                    return {
                        visible: e.params.showSeries ? ? !0,
                        value: o
                    }
                },
                W = e => e.value.reduce(((e, r, i) => (e.periods[i] = r.value, e.sources[i] = M(r.source), e.lineWidths[i] = L(r.width), e.colors[i] = I(r.color), e.visibles[i] = r.isSelected, e)), {
                    showSeries: e.visible ? ? !0,
                    periods: [],
                    sources: [],
                    lineWidths: [],
                    colors: [],
                    visibles: []
                }),
                f = e => ({
                    visible: e.params.showSeries ? ? !0,
                    period: k(e.params.period),
                    bandWidth: k(e.params.stdDev),
                    background: g(e.params.background),
                    backgroundVisible: e.params.backgroundVisible,
                    UP: {
                        isSelected: e.params.visibles[0],
                        width: A(e.params.lineWidths[0]),
                        color: g(e.params.colors[0])
                    },
                    MB: {
                        isSelected: e.params.visibles[1],
                        width: A(e.params.lineWidths[1]),
                        color: g(e.params.colors[1])
                    },
                    DN: {
                        isSelected: e.params.visibles[2],
                        width: A(e.params.lineWidths[2]),
                        color: g(e.params.colors[2])
                    }
                }),
                j = e => ({
                    showSeries: e.visible ? ? !0,
                    period: e.period,
                    stdDev: e.bandWidth,
                    background: I(e.background),
                    backgroundVisible: e.backgroundVisible,
                    lineWidths: [L(e.UP.width), L(e.MB.width), L(e.DN.width)],
                    colors: [I(e.UP.color), I(e.MB.color), I(e.DN.color)],
                    visibles: [e.UP.isSelected, e.MB.isSelected, e.DN.isSelected]
                }),
                V = e => ({
                    visible: e.params.showSeries ? ? !0,
                    value: e.params.period,
                    width: A(e.params.lineWidth),
                    color: g(e.params.color)
                }),
                R = e => ({
                    showSeries: e.visible ? ? !0,
                    period: k(e.value),
                    lineWidth: L(e.width),
                    color: I(e.color)
                }),
                X = e => ({
                    visible: e.params.showSeries ? ? !0,
                    color: g(e.params.color),
                    width: A(e.params.lineWidth)
                }),
                P = e => ({
                    showSeries: e.visible,
                    color: I(e.color),
                    lineWidth: L(e.width)
                }),
                E = e => ({
                    visible: e.params.showSeries ? ? !0,
                    value: k(e.params.period),
                    width: A(e.params.lineWidth),
                    color: g(e.params.color)
                }),
                B = e => ({
                    showSeries: e.visible ? ? !0,
                    period: e.value,
                    color: I(e.color),
                    lineWidth: L(e.width)
                }),
                T = e => ({
                    visible: e.params.showSeries ? ? !0,
                    start: e.params.step,
                    maximum: e.params.x,
                    color: g(e.params.color)
                }),
                G = e => ({
                    showSeries: e.visible ? ? !0,
                    step: e.start,
                    x: e.maximum,
                    color: I(e.color)
                }),
                _ = e => ({
                    visible: e.params.showSeries ? ? !0,
                    longHollow: v(e.params.long.style),
                    shortHollow: v(e.params.short.style),
                    MAVOL1: {
                        isSelected: e.params.maVol1.visible,
                        value: k(e.params.maVol1.period),
                        width: A(e.params.maVol1.lineWidth),
                        color: g(e.params.maVol1.color)
                    },
                    MAVOL2: {
                        isSelected: e.params.maVol2.visible,
                        value: k(e.params.maVol2.period),
                        width: A(e.params.maVol2.lineWidth),
                        color: g(e.params.maVol2.color)
                    }
                }),
                K = e => ({
                    showSeries: e.visible ? ? !0,
                    visibles: [!1],
                    long: {
                        style: D(e.longHollow)
                    },
                    short: {
                        style: D(e.shortHollow)
                    },
                    maVol1: {
                        period: e.MAVOL1.value,
                        lineWidth: L(e.MAVOL1.width),
                        color: I(e.MAVOL1.color),
                        visible: e.MAVOL1.isSelected
                    },
                    maVol2: {
                        period: e.MAVOL2.value,
                        lineWidth: L(e.MAVOL2.width),
                        color: I(e.MAVOL2.color),
                        visible: e.MAVOL2.isSelected
                    }
                }),
                x = e => ({
                    visible: e.params.showSeries ? ? !0,
                    shortPeriod: k(e.params.fastPeriod),
                    longPeriod: k(e.params.slowPeriod),
                    avgPeriod: k(e.params.signalPeriod),
                    DIF: {
                        isSelected: e.params.visibles.DIF,
                        width: A(e.params.lineWidths.DIF),
                        color: g(e.params.colors.DIF)
                    },
                    DEA: {
                        isSelected: e.params.visibles.DEA,
                        width: A(e.params.lineWidths.DEA),
                        color: g(e.params.colors.DEA)
                    },
                    MACD: {
                        isSelected: e.params.visibles.MACD,
                        longAumentar: {
                            hollow: v(e.params.longGrowth.style),
                            isIncrease: e.params.longGrowth.isBullishColor
                        },
                        longReducir: {
                            hollow: v(e.params.longFall.style),
                            isIncrease: e.params.longFall.isBullishColor
                        },
                        shortAumentar: {
                            hollow: v(e.params.shortGrowth.style),
                            isIncrease: e.params.shortGrowth.isBullishColor
                        },
                        shortReducir: {
                            hollow: v(e.params.shortFall.style),
                            isIncrease: e.params.shortFall.isBullishColor
                        }
                    }
                }),
                F = e => ({
                    showSeries: e.visible ? ? !0,
                    fastPeriod: e.shortPeriod,
                    slowPeriod: e.longPeriod,
                    signalPeriod: e.avgPeriod,
                    visibles: {
                        DEA: e.DEA.isSelected,
                        DIF: e.DIF.isSelected,
                        MACD: e.MACD.isSelected
                    },
                    lineWidths: {
                        DEA: L(e.DEA.width),
                        DIF: L(e.DIF.width)
                    },
                    colors: {
                        DEA: I(e.DEA.color),
                        DIF: I(e.DIF.color)
                    },
                    longGrowth: {
                        style: D(e.MACD.longAumentar.hollow),
                        isBullishColor: e.MACD.longAumentar.isIncrease
                    },
                    longFall: {
                        style: D(e.MACD.longReducir.hollow),
                        isBullishColor: e.MACD.longReducir.isIncrease
                    },
                    shortGrowth: {
                        style: D(e.MACD.shortAumentar.hollow),
                        isBullishColor: e.MACD.shortAumentar.isIncrease
                    },
                    shortFall: {
                        style: D(e.MACD.shortReducir.hollow),
                        isBullishColor: e.MACD.shortReducir.isIncrease
                    }
                }),
                $ = e => {
                    const {
                        colors: r,
                        visibles: i,
                        periods: s,
                        lineWidths: t
                    } = e.params, a = e.params.colors.map(((e, a) => ({
                        isSelected: i[a],
                        value: k(s[a]),
                        width: A(t[a]),
                        color: g(r[a])
                    })));
                    return {
                        visible: e.params.showSeries ? ? !0,
                        value: a
                    }
                },
                J = e => e.value.reduce(((e, r, i) => (e.periods[i] = r.value, e.visibles[i] = r.isSelected, e.colors[i] = I(r.color), e.lineWidths[i] = L(r.width), e)), {
                    showSeries: e.visible ? ? !0,
                    periods: [],
                    lineWidths: [],
                    colors: [],
                    visibles: []
                }),
                N = e => {
                    const {
                        colors: r,
                        visibles: i,
                        periods: s,
                        lineWidths: t
                    } = e.params, a = e.params.colors.map(((e, a) => ({
                        isSelected: i[a],
                        value: k(s[a]),
                        width: A(t[a]),
                        color: g(r[a])
                    })));
                    return {
                        visible: e.params.showSeries ? ? !0,
                        value: a
                    }
                },
                H = e => e.value.reduce(((e, r, i) => (e.periods[i] = r.value, e.visibles[i] = r.isSelected, e.colors[i] = I(r.color), e.lineWidths[i] = L(r.width), e)), {
                    showSeries: e.visible ? ? !0,
                    periods: [],
                    lineWidths: [],
                    colors: [],
                    visibles: []
                }),
                z = e => ({
                    visible: e.params.showSeries ? ? !0,
                    period: k(e.params.period[0]),
                    avgPeriod1: k(e.params.period[1]),
                    avgPeriod2: k(e.params.period[2]),
                    K: {
                        isSelected: e.params.visibles[0],
                        width: A(e.params.lineWidths[0]),
                        color: g(e.params.colors[0])
                    },
                    D: {
                        isSelected: e.params.visibles[1],
                        width: A(e.params.lineWidths[1]),
                        color: g(e.params.colors[1])
                    },
                    J: {
                        isSelected: e.params.visibles[2],
                        width: A(e.params.lineWidths[2]),
                        color: g(e.params.colors[2])
                    }
                }),
                U = e => ({
                    showSeries: e.visible ? ? !0,
                    period: [e.period, e.avgPeriod1, e.avgPeriod2],
                    visibles: [e.K.isSelected, e.D.isSelected, e.J.isSelected],
                    lineWidths: [L(e.K.width), L(e.D.width), L(e.J.width)],
                    colors: [I(e.K.color), I(e.D.color), I(e.J.color)]
                }),
                Q = e => ({
                    visible: e.params.showSeries ? ? !0,
                    color: g(e.params.color),
                    width: A(e.params.lineWidth),
                    MA: {
                        isSelected: e.params.ma.visible,
                        value: k(e.params.ma.period),
                        width: A(e.params.ma.lineWidth),
                        color: g(e.params.ma.color)
                    },
                    EMA: {
                        isSelected: e.params.ema.visible,
                        value: k(e.params.ema.period),
                        width: A(e.params.ema.lineWidth),
                        color: g(e.params.ema.color)
                    }
                }),
                q = e => ({
                    showSeries: e.visible ? ? !0,
                    color: I(e.color),
                    lineWidth: L(e.width),
                    ma: {
                        period: e.MA.value,
                        visible: e.MA.isSelected,
                        lineWidth: L(e.MA.width),
                        color: I(e.MA.color)
                    },
                    ema: {
                        period: e.EMA.value,
                        visible: e.EMA.isSelected,
                        lineWidth: L(e.EMA.width),
                        color: I(e.EMA.color)
                    }
                }),
                Y = e => ({
                    visible: e.params.showSeries ? ? !0,
                    value: k(e.params.period),
                    width: A(e.params.lineWidth),
                    color: g(e.params.color)
                }),
                Z = e => ({
                    showSeries: e.visible ? ? !0,
                    period: e.value,
                    color: I(e.color),
                    lineWidth: L(e.width)
                }),
                ee = e => ({
                    visible: e.params.showSeries ? ? !0,
                    rsiPeriod: k(e.params.rsiPeriod),
                    stochPeriod: k(e.params.stochasticPeriod),
                    lisoK: k(e.params.kPeriod),
                    lisoD: k(e.params.dPeriod),
                    K: {
                        isSelected: e.params.visibles.smoothK,
                        width: A(e.params.lineWidths.smoothK),
                        color: g(e.params.colors.smoothK)
                    },
                    D: {
                        isSelected: e.params.visibles.smoothD,
                        width: A(e.params.lineWidths.smoothD),
                        color: g(e.params.colors.smoothD)
                    }
                }),
                re = e => ({
                    showSeries: e.visible ? ? !0,
                    rsiPeriod: e.rsiPeriod,
                    stochasticPeriod: e.stochPeriod,
                    kPeriod: e.lisoK,
                    dPeriod: e.lisoD,
                    visibles: {
                        smoothK: e.K.isSelected,
                        smoothD: e.D.isSelected
                    },
                    lineWidths: {
                        smoothK: L(e.K.width),
                        smoothD: L(e.D.width)
                    },
                    colors: {
                        smoothK: I(e.K.color),
                        smoothD: I(e.D.color)
                    }
                }),
                ie = e => ({
                    visible: e.params.showSeries ? ? !0,
                    value: k(e.params.period),
                    width: A(e.params.lineWidth),
                    color: g(e.params.color)
                }),
                se = e => ({
                    showSeries: e.visible ? ? !0,
                    period: e.value,
                    color: I(e.color),
                    lineWidth: L(e.width)
                }),
                te = e => ({
                    visible: e.params.showSeries ? ? !0,
                    length: {
                        value: k(e.params.period)
                    },
                    positiveDI: {
                        isSelected: e.params.visibles.pDI,
                        width: A(e.params.lineWidths.pDI),
                        color: g(e.params.colors.pDI)
                    },
                    negativeDI: {
                        isSelected: e.params.visibles.nDI,
                        width: A(e.params.lineWidths.nDI),
                        color: g(e.params.colors.nDI)
                    },
                    ADX: {
                        isSelected: e.params.visibles.dx,
                        width: A(e.params.lineWidths.dx),
                        color: g(e.params.colors.dx)
                    }
                }),
                ae = e => ({
                    showSeries: e.visible ? ? !0,
                    period: e.length.value,
                    visibles: {
                        pDI: e.positiveDI.isSelected,
                        nDI: e.negativeDI.isSelected,
                        dx: e.ADX.isSelected
                    },
                    lineWidths: {
                        pDI: L(e.positiveDI.width),
                        nDI: L(e.negativeDI.width),
                        dx: L(e.ADX.width)
                    },
                    colors: {
                        pDI: I(e.positiveDI.color),
                        nDI: I(e.negativeDI.color),
                        dx: I(e.ADX.color)
                    }
                }),
                oe = e => ({
                    visible: e.params.showSeries ? ? !0,
                    value: k(e.params.period),
                    color: g(e.params.color),
                    source: C(e.params.source),
                    width: A(e.params.lineWidth)
                }),
                ne = e => ({
                    showSeries: e.visible ? ? !0,
                    period: e.value,
                    source: M(e.source),
                    color: I(e.color),
                    lineWidth: L(e.width)
                }),
                le = e => ({
                    visible: e.params.showSeries ? ? !0,
                    length: {
                        value: k(e.params.period),
                        width: A(e.params.lineWidth),
                        color: g(e.params.color)
                    },
                    divisor: {
                        value: k(e.params.x)
                    }
                }),
                ce = e => ({
                    showSeries: e.visible ? ? !0,
                    period: e.length.value,
                    x: e.divisor.value,
                    color: I(e.length.color),
                    lineWidth: L(e.length.width)
                }),
                de = e => ({
                    visible: e.params.showSeries ? ? !0,
                    oiColor: g(e.params.bar.color),
                    notionalColor: g(e.params.nv.color),
                    notionalWidth: A(e.params.nv.lineWidth)
                }),
                pe = e => ({
                    showSeries: e.visible,
                    bar: {
                        color: I(e.oiColor)
                    },
                    nv: {
                        color: I(e.notionalColor),
                        lineWidth: L(e.notionalWidth)
                    }
                }),
                ue = e => ({
                    visible: e.params.showSeries ? ? !0,
                    notionalColor: g(e.params.bar.color)
                }),
                me = e => ({
                    showSeries: e.visible,
                    bar: {
                        color: I(e.notionalColor)
                    }
                }),
                he = e => ({
                    visible: e.params.showSeries ? ? !0,
                    longColor: g(e.params.bar.buyColor),
                    shortColor: g(e.params.bar.sellColor),
                    ratioColor: g(e.params.ratio.color),
                    ratioWidth: A(e.params.ratio.lineWidth)
                }),
                Se = e => ({
                    showSeries: e.visible ? ? !0,
                    bar: {
                        buyColor: I(e.longColor),
                        sellColor: I(e.shortColor)
                    },
                    ratio: {
                        color: I(e.ratioColor),
                        lineWidth: L(e.ratioWidth)
                    }
                }),
                ye = e => ({
                    visible: e.params.showSeries ? ? !0,
                    buyColor: g(e.params.buyColor),
                    sellColor: g(e.params.sellColor)
                }),
                we = e => ({
                    showSeries: e.visible ? ? !0,
                    buyColor: I(e.buyColor),
                    sellColor: I(e.sellColor)
                }),
                be = e => ({
                    visible: e.params.showSeries ? ? !0,
                    basisColor: g(e.params.basisColor),
                    futurePriceColor: g(e.params.futurePriceColor),
                    priceIndexColor: g(e.params.priceIndexColor)
                }),
                ge = e => ({
                    showSeries: e.visible ? ? !0,
                    basisColor: I(e.basisColor),
                    futurePriceColor: I(e.futurePriceColor),
                    priceIndexColor: I(e.priceIndexColor)
                }),
                Ie = ({
                    indicatorOrderId: e,
                    predicate: r = y()
                }) => {
                    switch (e) {
                        case "MA":
                        case "EMA":
                        case "WMA":
                        case "BOLL":
                        case "VWAP":
                        case "AVL":
                        case "TRIX":
                        case "SAR":
                        case "VOL":
                        case "MACD":
                        case "RSI":
                        case "MFI":
                        case "KDJ":
                        case "OBV":
                        case "CCI":
                        case "StochRSI":
                        case "WR":
                        case "DMI":
                        case "MTM":
                        case "EMV":
                        case "BSVOL":
                        case "BASIS":
                        case "OI":
                            return r ? .(e);
                        case "LSAccount":
                            return "LSAcco";
                        case "LSPosition":
                            return "LSPosit";
                        case "LSRatio":
                            return "LSRatio";
                        default:
                            return null
                    }
                },
                Ae = (e, r) => {
                    const i = e[r];
                    if (!i) return null;
                    switch (r) {
                        case "MA":
                            return w({
                                id: l.kG.MA,
                                params: W(i)
                            });
                        case "EMA":
                            return w({
                                id: l.kG.EMA,
                                params: W(i)
                            });
                        case "WMA":
                            return w({
                                id: l.kG.WMA,
                                params: W(i)
                            });
                        case "BOLL":
                            return w({
                                id: l.kG.BOLL,
                                params: j(i)
                            });
                        case "VWAP":
                            return w({
                                id: l.kG.VWAP,
                                params: R(i)
                            });
                        case "AVL":
                            return w({
                                id: l.kG.AVL,
                                params: P(i)
                            });
                        case "TRIX":
                            return w({
                                id: l.kG.TRIX,
                                params: B(i)
                            });
                        case "SAR":
                            return w({
                                id: l.kG.SAR,
                                params: G(i)
                            });
                        case "VOL":
                            return w({
                                id: l.js.VOL,
                                params: K(i)
                            });
                        case "MACD":
                            return w({
                                id: l.js.MACD,
                                params: F(i)
                            });
                        case "RSI":
                            return w({
                                id: l.js.RSI,
                                params: J(i)
                            });
                        case "MFI":
                            return w({
                                id: l.js.MFI,
                                params: H(i)
                            });
                        case "KDJ":
                            return w({
                                id: l.js.KDJ,
                                params: U(i)
                            });
                        case "OBV":
                            return w({
                                id: l.js.OBV,
                                params: q(i)
                            });
                        case "CCI":
                            return w({
                                id: l.js.CCI,
                                params: Z(i)
                            });
                        case "StochRSI":
                            return w({
                                id: l.js.StochRSI,
                                params: re(i)
                            });
                        case "WR":
                            return w({
                                id: l.js.WR,
                                params: se(i)
                            });
                        case "DMI":
                            return w({
                                id: l.js.DMI,
                                params: ae(i)
                            });
                        case "MTM":
                            return w({
                                id: l.js.MTM,
                                params: ne(i)
                            });
                        case "EMV":
                            return w({
                                id: l.js.EMV,
                                params: ce(i)
                            });
                        case "OIUM":
                            return w({
                                id: l.js.OI_UM,
                                params: pe(i)
                            });
                        case "OICM":
                            return w({
                                id: l.js.OI_CM,
                                params: me(i)
                            });
                        case "LSAcco":
                            return w({
                                id: l.js.LS_ACCO,
                                params: Se(i)
                            });
                        case "LSPosit":
                            return w({
                                id: l.js.LS_POSIT,
                                params: Se(i)
                            });
                        case "LSRatio":
                            return w({
                                id: l.js.LS_RATIO,
                                params: Se(i)
                            });
                        case "BSVOL":
                            return w({
                                id: l.js.BS_VOL,
                                params: we(i)
                            });
                        case "BASIS":
                            return w({
                                id: l.js.BASIS,
                                params: ge(i)
                            });
                        default:
                            return null
                    }
                },
                Le = e => {
                    const r = h()(u()(e, (({
                        indicators: e
                    }) => u()(e, (({
                        id: e,
                        categories: r
                    }) => {
                        if (!e || !r) return null;
                        const i = (e => {
                            switch (e) {
                                case l.kG.MA:
                                    return "MA";
                                case l.kG.EMA:
                                    return "EMA";
                                case l.kG.WMA:
                                    return "WMA";
                                case l.kG.BOLL:
                                    return "BOLL";
                                case l.kG.VWAP:
                                    return "VWAP";
                                case l.kG.AVL:
                                    return "AVL";
                                case l.kG.TRIX:
                                    return "TRIX";
                                case l.kG.SAR:
                                    return "SAR";
                                case l.js.VOL:
                                    return "VOL";
                                case l.js.MACD:
                                    return "MACD";
                                case l.js.RSI:
                                    return "RSI";
                                case l.js.MFI:
                                    return "MFI";
                                case l.js.KDJ:
                                    return "KDJ";
                                case l.js.OBV:
                                    return "OBV";
                                case l.js.CCI:
                                    return "CCI";
                                case l.js.StochRSI:
                                    return "StochRSI";
                                case l.js.WR:
                                    return "WR";
                                case l.js.DMI:
                                    return "DMI";
                                case l.js.MTM:
                                    return "MTM";
                                case l.js.EMV:
                                    return "EMV";
                                case l.js.OI_UM:
                                case l.js.OI_CM:
                                    return "OI";
                                case l.js.LS_ACCO:
                                    return "LSAccount";
                                case l.js.LS_POSIT:
                                    return "LSPosition";
                                case l.js.LS_RATIO:
                                    return "LSRatio";
                                case l.js.BS_VOL:
                                    return "BSVOL";
                                case l.js.BASIS:
                                    return "BASIS";
                                default:
                                    return
                            }
                        })(e);
                        return i ? {
                            id: i,
                            categories: r
                        } : null
                    })))));
                    return {
                        mainIndicatorSort: r.filter((({
                            categories: e
                        }) => e.includes("main"))).map((({
                            id: e
                        }) => e)),
                        subIndicatorSort: r.filter((({
                            categories: e
                        }) => e.some((e => "sub" === e || "big-data" === e)))).map((({
                            id: e
                        }) => e))
                    }
                },
                Ce = ({
                    orders: {
                        mainIndicatorSort: e,
                        subIndicatorSort: r
                    },
                    setting: i,
                    deserializedIndicatorSetting: s,
                    toIndicatorSettingIdHelper: t
                }) => {
                    const a = h()(e.map((e => Ie({
                            indicatorOrderId: e,
                            predicate: t
                        })))),
                        o = h()(r.map((e => Ie({
                            indicatorOrderId: e,
                            predicate: t
                        })))),
                        n = e => {
                            const r = Ae(i, e),
                                t = (e => {
                                    switch (e) {
                                        case "MA":
                                            return l.kG.MA;
                                        case "EMA":
                                            return l.kG.EMA;
                                        case "WMA":
                                            return l.kG.WMA;
                                        case "BOLL":
                                            return l.kG.BOLL;
                                        case "VWAP":
                                            return l.kG.VWAP;
                                        case "AVL":
                                            return l.kG.AVL;
                                        case "TRIX":
                                            return l.kG.TRIX;
                                        case "SAR":
                                            return l.kG.SAR;
                                        case "VOL":
                                            return l.js.VOL;
                                        case "MACD":
                                            return l.js.MACD;
                                        case "RSI":
                                            return l.js.RSI;
                                        case "MFI":
                                            return l.js.MFI;
                                        case "KDJ":
                                            return l.js.KDJ;
                                        case "OBV":
                                            return l.js.OBV;
                                        case "CCI":
                                            return l.js.CCI;
                                        case "StochRSI":
                                            return l.js.StochRSI;
                                        case "WR":
                                            return l.js.WR;
                                        case "DMI":
                                            return l.js.DMI;
                                        case "MTM":
                                            return l.js.MTM;
                                        case "EMV":
                                            return l.js.EMV;
                                        case "OIUM":
                                            return l.js.OI_UM;
                                        case "OICM":
                                            return l.js.OI_CM;
                                        case "LSAcco":
                                            return l.js.LS_ACCO;
                                        case "LSPosit":
                                            return l.js.LS_POSIT;
                                        case "LSRatio":
                                            return l.js.LS_RATIO;
                                        case "BSVOL":
                                            return l.js.BS_VOL;
                                        case "BASIS":
                                            return l.js.BASIS;
                                        default:
                                            return
                                    }
                                })(e);
                            return t ? r || w({
                                id: t,
                                params: s[t]
                            }) : null
                        };
                    return [{
                        type: "CANDLE",
                        weight: .75,
                        indicators: h()(a.map(n))
                    }, ...h()(o.map(n)).map((e => ({
                        type: e.id,
                        weight: .25,
                        indicators: [e]
                    })))]
                },
                Me = ({
                    indicatorSetting: e
                }) => Object.keys(e).reduce(((r, i) => {
                    const s = i,
                        t = e[s],
                        a = w({
                            id: s,
                            params: t
                        });
                    if (!t || !a) return r;
                    const o = (e => {
                        switch (e.id) {
                            case l.kG.MA:
                                return {
                                    indicator: O(e),
                                    id: "MA"
                                };
                            case l.kG.EMA:
                                return {
                                    indicator: O(e),
                                    id: "EMA"
                                };
                            case l.kG.WMA:
                                return {
                                    indicator: O(e),
                                    id: "WMA"
                                };
                            case l.kG.BOLL:
                                return {
                                    indicator: f(e),
                                    id: "BOLL"
                                };
                            case l.kG.VWAP:
                                return {
                                    indicator: V(e),
                                    id: "VWAP"
                                };
                            case l.kG.AVL:
                                return {
                                    indicator: X(e),
                                    id: "AVL"
                                };
                            case l.kG.TRIX:
                                return {
                                    indicator: E(e),
                                    id: "TRIX"
                                };
                            case l.kG.SAR:
                                return {
                                    indicator: T(e),
                                    id: "SAR"
                                };
                            case l.js.VOL:
                                return {
                                    indicator: _(e),
                                    id: "VOL"
                                };
                            case l.js.MACD:
                                return {
                                    indicator: x(e),
                                    id: "MACD"
                                };
                            case l.js.RSI:
                                return {
                                    indicator: $(e),
                                    id: "RSI"
                                };
                            case l.js.MFI:
                                return {
                                    indicator: N(e),
                                    id: "MFI"
                                };
                            case l.js.KDJ:
                                return {
                                    indicator: z(e),
                                    id: "KDJ"
                                };
                            case l.js.OBV:
                                return {
                                    indicator: Q(e),
                                    id: "OBV"
                                };
                            case l.js.CCI:
                                return {
                                    indicator: Y(e),
                                    id: "CCI"
                                };
                            case l.js.StochRSI:
                                return {
                                    indicator: ee(e),
                                    id: "StochRSI"
                                };
                            case l.js.WR:
                                return {
                                    indicator: ie(e),
                                    id: "WR"
                                };
                            case l.js.DMI:
                                return {
                                    indicator: te(e),
                                    id: "DMI"
                                };
                            case l.js.MTM:
                                return {
                                    indicator: oe(e),
                                    id: "MTM"
                                };
                            case l.js.EMV:
                                return {
                                    indicator: le(e),
                                    id: "EMV"
                                };
                            case l.js.OI_UM:
                                return {
                                    indicator: de(e),
                                    id: "OIUM"
                                };
                            case l.js.OI_CM:
                                return {
                                    indicator: ue(e),
                                    id: "OICM"
                                };
                            case l.js.LS_ACCO:
                                return {
                                    indicator: he(e),
                                    id: "LSAcco"
                                };
                            case l.js.LS_POSIT:
                                return {
                                    indicator: he(e),
                                    id: "LSPosit"
                                };
                            case l.js.LS_RATIO:
                                return {
                                    indicator: he(e),
                                    id: "LSRatio"
                                };
                            case l.js.BS_VOL:
                                return {
                                    indicator: ye(e),
                                    id: "BSVOL"
                                };
                            case l.js.BASIS:
                                return {
                                    indicator: be(e),
                                    id: "BASIS"
                                };
                            default:
                                return null
                        }
                    })(a);
                    return o ? (r[o.id] = o.indicator, r) : r
                }), {});
            var ve = i("rPbR");
            const De = async ({
                    storage: e,
                    indicatorStoreKey: r,
                    indicatorSettingStoreKey: i
                }) => {
                    const [s, t] = await Promise.all([e.getItem(r), e.getItem(i)]);
                    return {
                        indicators: s,
                        indicatorSetting: t
                    }
                },
                ke = async ({
                    cloudEnabled: e,
                    indicatorStoreKey: r,
                    indicatorSettingStoreKey: i,
                    indicators: s,
                    indicatorSetting: t,
                    initialIndicatorSetting: a,
                    storage: o
                }) => {
                    if (e) try {
                        const e = Le(s),
                            r = Me({
                                indicatorSetting: t
                            }),
                            i = n()({}, a, r);
                        await Promise.all([(0, c.X)({
                            key: {
                                type: "techInd"
                            },
                            data: JSON.stringify(i)
                        }), (0, c.X)({
                            key: {
                                type: "indOrder"
                            },
                            data: JSON.stringify(e)
                        })])
                    } catch (l) {
                        console.warn("[trade-widget/candlestick] something went wrong while saving indicator to cloud", l)
                    } else await Promise.all([o.setItem(r, s), o.setItem(i, t)])
                },
                Oe = async ({
                    cloudEnabled: e,
                    indicatorStoreKey: r,
                    indicatorSettingStoreKey: i,
                    storage: s,
                    cloudData: t,
                    toIndicatorSettingIdHelper: a,
                    candlestick: o
                }) => {
                    if (!e) return De({
                        storage: s,
                        indicatorStoreKey: r,
                        indicatorSettingStoreKey: i
                    });
                    try {
                        if (!o) throw new Error("[trade-widget] missing candlestick instance");
                        const e = t.find((e => "techInd" === e.type)) ? .data,
                            r = t.find((e => "indOrder" === e.type)) ? .data,
                            i = (l = e, h()(Object.keys(l).map((e => Ae(l, e)))).reduce(((e, r) => (e[r.id] = r.params, e)), {})),
                            s = o.indicatorStore.getDefaultValues(),
                            c = n()({}, s, i);
                        return {
                            indicators: Ce({
                                orders: r,
                                setting: e,
                                deserializedIndicatorSetting: c,
                                toIndicatorSettingIdHelper: a
                            }),
                            indicatorSetting: c
                        }
                    } catch (c) {
                        return console.warn("[trade-widget/candlestick] something went wrong while loading indicator from cloud", c), De({
                            storage: s,
                            indicatorStoreKey: r,
                            indicatorSettingStoreKey: i
                        })
                    }
                    var l
                },
                We = ({
                    namespace: e
                }) => {
                    const r = (0, s.useMemo)((() => a().createInstance({
                            name: e
                        })), [e]),
                        i = (0, ve.createStore)(e),
                        [t] = i(ve.getCandlestickReference);
                    return (0, s.useCallback)((async () => {
                        if (!t) throw new Error("[trade-widget] candlestick reference not found ");
                        const e = (0, l.Ek)(),
                            i = (0, l.KF)(),
                            s = await De({
                                storage: r,
                                indicatorStoreKey: e,
                                indicatorSettingStoreKey: i
                            }),
                            a = s.indicators || l.yW,
                            o = s.indicatorSetting || t.indicatorStore.getDefaultValues(),
                            p = await (0, d.m)({
                                drawing: {
                                    enabled: !1,
                                    type: "sp",
                                    symbol: ""
                                },
                                indicator: {
                                    enabled: !0
                                }
                            }),
                            {
                                data: u
                            } = p.find((e => "techInd" === e.type)) || {
                                data: {}
                            },
                            m = Le(a),
                            h = Me({
                                indicatorSetting: o
                            }),
                            S = n()({}, u, h),
                            [y, w] = await Promise.all([(0, c.X)({
                                key: {
                                    type: "techInd"
                                },
                                data: JSON.stringify(S)
                            }), (0, c.X)({
                                key: {
                                    type: "indOrder"
                                },
                                data: JSON.stringify(m)
                            })]);
                        if (!y.success) throw new Error(y.message || "");
                        if (!w.success) throw new Error(w.message || "");
                        t.fire("reloadStorage")
                    }), [t, r])
                }
        },
        nb2p: (e, r, i) => {
            i.d(r, {
                $: () => t,
                e: () => a
            });
            var s = i("f9BG");
            const t = e => {
                    try {
                        const [, r] = (0, s.A)(e).hex("argb").split("#");
                        return parseInt(r, 16)
                    } catch (r) {
                        return 0
                    }
                },
                a = e => {
                    try {
                        const r = e.toString(16);
                        if ("0" === r) return "rgba(255,255,255,0)";
                        const i = r.length < 7 ? ["00", r].join("") : r,
                            t = i.slice(0, 2),
                            a = `#${i.slice(2)}${t}`;
                        return (0, s.A)(a).css("rgba")
                    } catch (r) {
                        return ""
                    }
                }
        }
    }
]);