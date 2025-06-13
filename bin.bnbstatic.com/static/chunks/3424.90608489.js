"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [3424], {
        QtGm: (e, t, s) => {
            s.d(t, {
                t: () => je
            });
            var a = s("mXdx"),
                i = s("DTvD"),
                r = s("F05g"),
                n = s("jwne"),
                l = s("k6za"),
                o = s("vjpm"),
                c = s("T0Sc");
            const d = () => (0, c.o)("", "widget-common");
            var m = s("hTvQ"),
                u = s("IYdN"),
                x = s("1tqE"),
                b = s("nvpp"),
                h = s("YENt");
            const f = {
                    l: 1,
                    t: 1,
                    b: (0, h.B)() ? window.innerHeight - 645 : 0,
                    r: (0, h.B)() ? window.innerWidth - 520 : 0
                },
                y = {
                    l: (0, h.B)() ? (window.innerWidth - 520) / 2 : 0,
                    t: (0, h.B)() ? (window.innerHeight - 645) / 2 : 0
                },
                v = ({
                    children: e,
                    zIndex: t,
                    onClose: s
                }) => {
                    const [r, n] = (0, i.useState)(y), l = (0, b.A)(r), c = (0, i.useRef)(!1), h = (0, i.useRef)(null), [v, g] = (0, i.useState)(!1), p = (0, i.useRef)({
                        x: 0,
                        y: 0
                    }), {
                        isIPad: j
                    } = (0, o.Q)(), {
                        t: N
                    } = d(), w = (0, i.useCallback)((e => {
                        c.current = !0, g(!0), p.current = {
                            x: e.screenX,
                            y: e.screenY
                        }
                    }), []);
                    (0, i.useEffect)((() => (h.current ? .addEventListener("mousedown", w), h.current ? .addEventListener("touchstart", w), () => {
                        const {
                            current: e
                        } = h;
                        e ? .removeEventListener("mousedown", w), e ? .removeEventListener("touchstart", w)
                    })), [h, w]);
                    const T = (0, i.useCallback)((e => {
                            e.preventDefault(), c.current = !1, g(!1)
                        }), []),
                        S = (0, i.useCallback)((e => {
                            setTimeout((() => {
                                if (e.preventDefault(), !c.current) return;
                                const t = p.current,
                                    s = e.screenX - t.x,
                                    a = e.screenY - t.y,
                                    i = l.current;
                                if (!i) return;
                                const {
                                    l: r,
                                    t: o
                                } = i, d = r + s, m = o + a;
                                n({
                                    l: Math.min(f.r, Math.max(d, f.l)),
                                    t: Math.min(f.b, Math.max(m, f.t))
                                }), p.current = {
                                    x: e.screenX,
                                    y: e.screenY
                                }
                            }), 15)
                        }), [n, j, l]);
                    return (0, i.useEffect)((() => (c.current ? (window.addEventListener(j ? "touchmove" : "mousemove", S), window.addEventListener(j ? "touchend" : "mouseup", T)) : (window.removeEventListener(j ? "touchmove" : "mousemove", S), window.removeEventListener(j ? "touchend" : "mouseup", T)), () => {
                        window.removeEventListener(j ? "touchmove" : "mousemove", S), window.removeEventListener(j ? "touchend" : "mouseup", T)
                    })), [j, c.current]), (0, m.createPortal)((0, a.jsx)("div", {
                        className: "fixed w-full h-full top-0 left-0 pointer-events-none inset-0 z-10",
                        children: (0, a.jsxs)("div", {
                            className: "pointer-events-auto absolute bg-CardBg justify-between rounded-[--radii-xl] w-[520px] ",
                            style: {
                                zIndex: v ? 1e4 : t,
                                boxShadow: "var(--shadow-shadow1)",
                                transform: `translate(${Math.max(r?.l||y.l,f.l)}px, ${Math.max(r?.t||y.t,f.t)}px)`
                            },
                            ref: h,
                            children: [(0, a.jsxs)("div", {
                                className: "flex w-full h-16 justify-start items-center cursor-grab select-none",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex items-center grow",
                                    children: [(0, a.jsx)(u.A, {
                                        className: "h-6 w-6 text-IconNormal hover:text-PrimaryText"
                                    }), (0, a.jsx)("div", {
                                        className: "t-headline5 text-PrimaryTest",
                                        children: N("widget-margin-calculator")
                                    })]
                                }), (0, a.jsx)("div", {
                                    className: "flex items-center mr-6",
                                    children: s && (0, a.jsx)(x.A, {
                                        className: "h-6 w-6 cursor-pointer",
                                        onClick: s,
                                        onTouchEnd: s
                                    })
                                })]
                            }), e]
                        })
                    }), document.body)
                },
                g = (0, i.memo)(v);
            var p = s("r2Gn"),
                j = s("46Ff"),
                N = s("Gz4J"),
                w = s("tM9B"),
                T = s("DQdu"),
                S = s("ZLGz"),
                P = s("s5du");
            const C = {
                    loaded: !1,
                    data: {}
                },
                A = {},
                M = {
                    loaded: !1,
                    data: {}
                },
                I = (e, t, s) => {
                    const {
                        tradeLevel: a = 0
                    } = (0, S.Py)(), {
                        isLogged: r
                    } = (0, P.N)(), [n, l] = (0, i.useState)("0"), [o, c] = (0, i.useState)("0"), [d, m] = (0, i.useState)(!0);
                    (0, i.useEffect)((() => {
                        m(!0);
                        const t = e.split("/"),
                            i = 2 === t.filter((e => e.length)).length,
                            [n, o] = t;
                        if (!i) return l("0"), void c("0");
                        if ("cross" === s)
                            if (r) t.map((e => "undefined" === typeof A[e])).filter((e => !!e)).length > 0 ? (m(!0), (0, T.JY)(t).then((e => {
                                const t = (0, w.tv)(e.data ? .filter((e => e.asset === n)) ? .[0] ? .maxBorrow ? ? "0"),
                                    s = (0, w.tv)(e.data ? .filter((e => e.asset === o)) ? .[0] ? .maxBorrow ? ? "0");
                                c(s), l(t), A[n] = t, A[o] = s, m(!1)
                            })).catch((() => {
                                m(!1)
                            }))) : (c(String(A[o])), l(String(A[n])), m(!1));
                            else if (C.loaded) {
                            const e = C.data;
                            c(String(e[o])), l(String(e[n])), m(!1)
                        } else m(!0), (0, T.lO)().then((e => {
                            const t = (e.data ? ? []).reduce(((e, t) => {
                                const s = t ? .specs ? .filter((e => +e.vipLevel === a)) ? .[0] ? .borrowLimit ? ? "0";
                                return e[t.assetName] = (0, w.tv)(s), e
                            }), {});
                            C.loaded = !0, C.data = t, c(t[o]), l(t[n]), m(!1)
                        })).catch((() => {
                            m(!1)
                        }));
                        else if (M.loaded) {
                            const t = M.data[e] ? ? {};
                            l(t.base ? ? "0"), c(t.quote ? ? "0"), m(!1)
                        } else m(!0), (0, T.JB)().then((t => {
                            M.loaded = !0;
                            const s = (t ? .data ? ? []).reduce(((e, t) => {
                                const s = t.base,
                                    i = t.quote,
                                    [r, n] = [s, i].map((e => (0, w.tv)(e ? .levelDetails ? .filter((e => +e.level === a)) ? .[0] ? .maxBorrowable ? ? "0")));
                                return e[`${t.base.assetName}/${t.quote.assetName}`] = {
                                    quote: n,
                                    base: r
                                }, e
                            }), {});
                            M.data = s;
                            const i = s[e] ? ? {};
                            l(i.base ? ? "0"), c(i.quote ? ? "0"), m(!1)
                        })).catch((() => {
                            m(!1)
                        }))
                    }), [r, e, a, s]);
                    const u = "buy" === t ? o : n;
                    return {
                        maxBorrow: isNaN(Number(u)) ? "0" : u,
                        pending: d
                    }
                },
                k = e => {
                    const [t, s] = (0, i.useState)(""), [a, r] = (0, i.useState)(8), [n, l] = (0, i.useState)(8), [o, c] = (0, i.useState)(!0);
                    return (0, i.useEffect)((() => {
                        const t = e.replace("/", "");
                        t && e.indexOf("/") >= 0 && (c(!0), (0, T.Ov)(t).then((e => {
                            s(e.data ? .c ? ? "0"), l(Math.max((0, w.um)(e.data ? .ts ? ? "0.01").length - 2, 0)), r(Math.max((0, w.um)(e.data ? .i ? ? "0.000001").length - 2, 0)), c(!1)
                        })).catch((() => c(!1))))
                    }), [e]), {
                        price: t,
                        baseTs: a,
                        quoteTs: n,
                        pricePending: o
                    }
                },
                q = ({
                    balance: e,
                    entryPrice: t,
                    accountType: s,
                    direction: a,
                    type: i,
                    isoMarginRatio: r,
                    quote: n,
                    base: l,
                    balanceCoin: o,
                    valuePrecision: c,
                    marginProLeverage: d = 5
                }) => {
                    let m = -1;
                    if ("" !== e && +e > 0 && "" !== t && +t > 0)
                        if ("cross" === i)
                            if ("sell" === a) {
                                const a = "MARGIN_1" === s ? 5 : d;
                                m = o === l ? +e * a : +e * a / +t
                            } else {
                                const a = "MARGIN_1" === s ? 5 : d;
                                m = o === n ? +e * a / +t : e * a
                            }
                    else m = "sell" === a ? o === l ? +e * +r : +e * +r / +t : o === n ? +e * +r / +t : +e * +r;
                    if (m >= 0) {
                        const e = 10 ** c;
                        m = Math.floor(m * e) / e
                    }
                    return m
                },
                B = ({
                    amount: e,
                    entryPrice: t,
                    accountType: s,
                    direction: a,
                    type: i,
                    isoMarginRatio: r,
                    balanceCoin: n,
                    base: l,
                    quote: o,
                    valuePrecision: c,
                    marginProLeverage: d = 5
                }) => {
                    let m = -1;
                    if ("" !== e && +e > 0 && "" !== t && +t > 0) {
                        if ("cross" === i)
                            if ("sell" === a) {
                                const a = "MARGIN_1" === s ? 5 : d;
                                m = n === l ? +e / a : +e * +t / a
                            } else {
                                const a = "MARGIN_1" === s ? 5 : d;
                                m = n === o ? +e * +t / a : +e / a
                            }
                        else m = "sell" === a ? n === l ? +e / +r : +e * t / +r : n === o ? +e * +t / +r : +e / +r;
                        if (m >= 0) {
                            const e = 10 ** c;
                            m = Math.ceil(m * e) / e
                        }
                    }
                    return m
                },
                E = ({
                    assetLeverageBrackets: e,
                    coin: t,
                    borrowAmount: s
                }) => {
                    let a, i = 0;
                    if (e && e.length)
                        for (let r = 0; r < e.length; r += 1) {
                            const s = e[r];
                            if (s.assetNames.includes(t)) {
                                a = s.brackets;
                                break
                            }
                        }
                    if (a) {
                        let e = 0;
                        for (let t = 0; t < a.length; t += 1) {
                            const r = a[t],
                                n = Number(r.maxDebt),
                                l = Number(r.maintenanceMarginRate);
                            if (!(s >= n)) {
                                i += (s - e) * l;
                                break
                            }
                            i += (n - e) * l, e = n
                        }
                    }
                    return i
                },
                L = (e, t) => {
                    let s = e.replace(/[^0-9.]/g, "");
                    if ((s.match(/\./g) || []) ? .length > 1 && (s = s.replace(/\.$/, "")), t) {
                        new RegExp(`^\\d*(\\.\\d{0,${t}})?$`).test(s) || (s = parseFloat(s).toFixed(t))
                    }
                    return s
                },
                {
                    TabPane: D
                } = p.A,
                z = ({
                    direction: e,
                    setDirection: t
                }) => {
                    const {
                        t: s
                    } = d(), r = (0, i.useMemo)((() => [{
                        key: "buy",
                        value: s("widget-buy")
                    }, {
                        key: "sell",
                        value: s("widget-sell")
                    }]), [s]);
                    return (0, a.jsx)(p.A, {
                        selectedIndex: r.findIndex((({
                            key: t
                        }) => t === e)),
                        variant: "buySell",
                        onChange: e => {
                            t(r[e].key)
                        },
                        children: r.map((({
                            key: e,
                            value: t
                        }) => (0, a.jsx)(D, {
                            tabNode: t
                        }, e)))
                    })
                },
                $ = (0, i.memo)(z);
            var R = s("TaoO"),
                F = s("X956"),
                U = s("SPlc");
            const _ = () => {
                    const [e, t] = (0, i.useState)({}), [s, a] = (0, i.useState)([]);
                    return (0, i.useEffect)((() => {
                        Promise.all([(0, F.o)(), (0, U._V)()]).then((([e, s]) => {
                            const i = {},
                                r = [],
                                n = [];
                            e.forEach((e => {
                                const {
                                    base: t,
                                    quote: s
                                } = e, a = `${t}/${s}`;
                                i[a] = {
                                    isCross: !0,
                                    base: t,
                                    quote: s,
                                    displaySymbol: a
                                }, r.push(a);
                                const l = a.replace("/", "");
                                n.push(l)
                            })), s.forEach((e => {
                                const {
                                    base: t,
                                    quote: s
                                } = e, a = `${t}/${s}`;
                                if (i[a]) i[a].isIsolated = !0;
                                else {
                                    i[a] = {
                                        isIsolated: !0,
                                        isCross: !1,
                                        base: t,
                                        quote: s,
                                        displaySymbol: a
                                    }, r.push(a);
                                    const e = a.replace("/", "");
                                    n.push(e)
                                }
                            })), t(i);
                            const l = r.sort(((e, t) => e > t ? 1 : -1));
                            a(l)
                        }))
                    }), []), {
                        symbolMap: e,
                        symbolList: s
                    }
                },
                {
                    Option: G
                } = R.A,
                W = ({
                    symbol: e,
                    setSymbol: t
                }) => {
                    const {
                        symbolList: s
                    } = _(), [r, n] = (0, i.useState)(""), {
                        t: l
                    } = d(), o = (0, i.useMemo)((() => r ? s.filter((e => e.replace("/", "").toLowerCase().includes(r.toLowerCase()))) : s), [r, s]);
                    return (0, a.jsx)(R.A, {
                        trigger: "click",
                        className: "w-full",
                        emptyText: l("no-results-found"),
                        value: [e],
                        onChange: e => {
                            const s = "string" === typeof e ? e : String(e ? .[0]) ? ? "";
                            t(s)
                        },
                        onSearchFn: e => {
                            n(e)
                        },
                        searchPlaceholder: "",
                        variant: "full",
                        children: o.map((e => (0, a.jsx)(G, {
                            value: e,
                            children: e
                        }, e)))
                    })
                },
                O = (0, i.memo)(W),
                {
                    TabPane: V
                } = p.A,
                H = ({
                    type: e,
                    setType: t,
                    symbolInfo: s
                }) => {
                    const {
                        t: r
                    } = d(), n = (0, i.useMemo)((() => [{
                        key: "cross",
                        value: r("widget-cross")
                    }, {
                        key: "isolated",
                        value: r("widget-iso")
                    }]), [r]);
                    return (0, i.useEffect)((() => {
                        s && ("cross" === e && !s.isCross && s.isIsolated && t("isolated"), "isolated" === e && !s.isIsolated && s.isCross && t("cross"))
                    }), [s, e, t]), (0, a.jsxs)(p.A, {
                        className: "margin-type-switch w-full",
                        selectedIndex: n.findIndex((({
                            key: t
                        }) => t === e)),
                        variant: "segment-outline",
                        onChange: e => {
                            void 0 !== e && ("cross" === n[e].key && s.isCross || "isolated" === n[e].key && s.isIsolated) && t(n[e].key)
                        },
                        children: [s && s.isCross ? (0, a.jsx)(V, {
                            tabNode: r("widget-cross")
                        }) : (0, a.jsx)(V, {
                            tabNode: ""
                        }), s && s.isIsolated ? (0, a.jsx)(V, {
                            tabNode: r("widget-iso")
                        }) : (0, a.jsx)(V, {
                            tabNode: ""
                        })]
                    })
                },
                Y = (0, i.memo)(H),
                Q = e => +e > 0 ? "+" : +e < 0 ? "-" : "",
                X = (0, i.forwardRef)((({
                    onAbleChange: e,
                    symbol: t,
                    setSymbol: s,
                    direction: r,
                    setDirection: n,
                    type: l,
                    setType: o,
                    symbolInfo: c
                }, m) => {
                    const {
                        t: u
                    } = d(), {
                        maxBorrow: x,
                        pending: b
                    } = I(t, r, l), {
                        price: h,
                        baseTs: f,
                        quoteTs: y,
                        pricePending: v
                    } = k(t), {
                        base: g,
                        quote: p
                    } = c, [T, S] = (0, i.useState)({
                        entryPrice: "",
                        exitPrice: "",
                        originAmount: "",
                        borrowAmount: ""
                    }), {
                        entryPrice: P,
                        exitPrice: C,
                        originAmount: A,
                        borrowAmount: M
                    } = T, [q, B] = (0, i.useState)({
                        roe: "-",
                        pnl: "-"
                    });
                    (0, i.useEffect)((() => {
                        v || S((e => ({ ...e,
                            entryPrice: h
                        })))
                    }), [h, v]), (0, i.useEffect)((() => {
                        S((e => ({ ...e,
                            originAmount: "",
                            borrowAmount: "",
                            exitPrice: ""
                        }))), B({
                            pnl: "-",
                            roe: "-"
                        })
                    }), [r, t, l]);
                    const E = (0, i.useCallback)(((e, t, s) => a => {
                            let i = L(a, t);
                            s && parseFloat(i) > s || S((t => ({ ...t,
                                [e]: i
                            })))
                        }), []),
                        D = (0, i.useMemo)((() => {
                            const e = 4 === [P, C, A, M].filter((e => +e > 0)).length;
                            return (0, w.xF)(M, x) && e
                        }), [M, P, C, x, A]);
                    (0, i.useEffect)((() => {
                        e ? .(D)
                    }), [D, e]);
                    const z = (0, i.useCallback)((() => {
                        if ("buy" === r) {
                            const e = ((+A + +M) * (+C / +P - 1)).toFixed(y);
                            B({
                                pnl: e,
                                roe: `${Q(e)}${Math.abs(+e/+A*100).toFixed(2)}`
                            })
                        } else {
                            const e = ((+A + +M) * (+P - +C)).toFixed(y);
                            B({
                                pnl: e,
                                roe: `${Q(e)}${Math.abs(+e/(+A*+P)*100).toFixed(2)}`
                            })
                        }
                    }), [M, r, P, C, A, y]);
                    (0, i.useImperativeHandle)(m, (() => ({
                        calc: z
                    })), [z]);
                    const R = (0, i.useMemo)((() => b ? " " : 0 === +x ? `${u("widget-max-bor-amt")}: 0` : `${u("widget-max-bor-amt")}: ${x} ${"buy"===r?p:g}`), [g, r, x, b, p, u]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mb-2",
                            children: (0, a.jsx)($, {
                                direction: r,
                                setDirection: n
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center mb-2 gap-2",
                            children: [(0, a.jsx)("div", {
                                className: "grow basis-0",
                                children: (0, a.jsx)(O, {
                                    symbol: t,
                                    setSymbol: s
                                })
                            }), (0, a.jsx)("div", {
                                className: "grow basis-0",
                                children: (0, a.jsx)(Y, {
                                    type: l,
                                    setType: o,
                                    symbolInfo: c
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mainform",
                            children: [(0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    gapSize: "normal",
                                    onChange: E("entryPrice", y),
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: u("widget-ent-pri")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: p
                                    }),
                                    value: P,
                                    variant: "line",
                                    className: "w-full",
                                    type: "text"
                                })
                            }), (0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    gapSize: "normal",
                                    onChange: E("exitPrice", y),
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: u("widget-ext-pri")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: p
                                    }),
                                    value: C,
                                    variant: "line",
                                    type: "text"
                                })
                            }), (0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    className: "text-right",
                                    gapSize: "normal",
                                    onChange: E("originAmount", "buy" === r ? y : f),
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: u("widget-org-amt")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: "buy" === r ? p : g
                                    }),
                                    value: A,
                                    variant: "line",
                                    type: "text"
                                })
                            }), (0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    gapSize: "normal",
                                    onChange: E("borrowAmount", "buy" === r ? y : f, Number(x)),
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: u("widget-bor-amt")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: "buy" === r ? p : g
                                    }),
                                    value: M,
                                    variant: "line",
                                    type: "text"
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "t-caption1 text-TertiaryText mb-2",
                            children: R
                        }), (0, a.jsx)("div", {
                            className: "mb-4",
                            children: (0, a.jsx)(N.A, {
                                className: "w-full",
                                onClick: z,
                                disabled: !D,
                                children: u("widget-calculate")
                            })
                        }), (0, a.jsxs)("div", {
                            className: "border border-solid border-Line rounded-lg p-3",
                            children: [(0, a.jsx)("div", {
                                className: "t-subtitle1 mb-1",
                                children: u("widget-res")
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: u("widget-pnl")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText",
                                    children: [(0, a.jsx)("span", {
                                        className: "mr-1",
                                        children: q.pnl
                                    }), (0, a.jsx)("span", {
                                        children: p
                                    })]
                                })]
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between mb-2",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: u("widget-roe")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText",
                                    children: [(0, a.jsx)("span", {
                                        className: "mr-1",
                                        children: q.roe
                                    }), (0, a.jsx)("span", {
                                        children: "%"
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "t-caption1 text-TertiaryText",
                                children: u("widget-ref")
                            })]
                        })]
                    })
                })),
                J = (0, i.memo)(X),
                Z = (0, i.forwardRef)((({
                    onAbleChange: e,
                    symbol: t,
                    setSymbol: s,
                    direction: r,
                    setDirection: n,
                    type: l,
                    setType: o,
                    symbolInfo: c
                }, m) => {
                    const {
                        t: u
                    } = d(), {
                        maxBorrow: x,
                        pending: b
                    } = I(t, r, l), {
                        price: h,
                        baseTs: f,
                        quoteTs: y,
                        pricePending: v
                    } = k(t), {
                        quote: g,
                        base: p
                    } = c, [T, S] = (0, i.useState)({
                        entryPrice: "",
                        roe: "",
                        originAmount: "",
                        borrowAmount: ""
                    }), {
                        entryPrice: P,
                        roe: C,
                        originAmount: A,
                        borrowAmount: M
                    } = T, [q, B] = (0, i.useState)("-");
                    (0, i.useEffect)((() => {
                        v || S((e => ({ ...e,
                            entryPrice: h
                        })))
                    }), [h, v]), (0, i.useEffect)((() => {
                        S((e => ({ ...e,
                            originAmount: "",
                            borrowAmount: "",
                            exitPrice: "",
                            roe: ""
                        }))), B("-")
                    }), [r, t, l]);
                    const E = (0, i.useCallback)(((e, t, s) => a => {
                            let i = L(a, t);
                            s && parseFloat(i) > s || S((t => ({ ...t,
                                [e]: i
                            })))
                        }), []),
                        D = (0, i.useMemo)((() => {
                            const e = 4 === [P, C, A, M].filter((e => +e > 0)).length;
                            return (0, w.xF)(M, x) && e
                        }), [M, P, x, A, C]);
                    (0, i.useEffect)((() => {
                        e ? .(D)
                    }), [D, e]);
                    const z = (0, i.useCallback)((() => {
                        let e = "-";
                        e = "buy" === r ? (+P * (+A * (+C / 100 + 1) + +M) / (+A + +M)).toFixed(y) : (+P * (+A * (1 - +C / 100) + +M) / (+A + +M)).toFixed(y), B(+e > 0 ? e : "-")
                    }), [M, r, P, A, y, C]);
                    (0, i.useImperativeHandle)(m, (() => ({
                        calc: z
                    })), [z]);
                    const R = (0, i.useMemo)((() => b ? " " : 0 === +x ? `${u("widget-max-bor-amt")}: 0` : `${u("widget-max-bor-amt")}: ${x} ${"buy"===r?g:p}`), [p, r, x, b, g, u]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mb-2",
                            children: (0, a.jsx)($, {
                                direction: r,
                                setDirection: n
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center mb-2 gap-2",
                            children: [(0, a.jsx)("div", {
                                className: "grow basis-0",
                                children: (0, a.jsx)(O, {
                                    symbol: t,
                                    setSymbol: s
                                })
                            }), (0, a.jsx)("div", {
                                className: "grow basis-0",
                                children: (0, a.jsx)(Y, {
                                    type: l,
                                    setType: o,
                                    symbolInfo: c
                                })
                            })]
                        }), (0, a.jsxs)("div", {
                            className: "mainform",
                            children: [(0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    gapSize: "normal",
                                    onChange: E("entryPrice", y),
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: u("widget-ent-pri")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: g
                                    }),
                                    value: P,
                                    variant: "line",
                                    className: "w-full",
                                    type: "text"
                                })
                            }), (0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    gapSize: "normal",
                                    onChange: E("roe", 2, 999999.99),
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: u("widget-roe")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: "%"
                                    }),
                                    value: C,
                                    variant: "line",
                                    type: "text",
                                    step: ".01"
                                })
                            }), (0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    className: "text-right",
                                    gapSize: "normal",
                                    onChange: E("originAmount", "buy" === r ? y : f),
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: u("widget-org-amt")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: "buy" === r ? g : p
                                    }),
                                    value: A,
                                    variant: "line",
                                    type: "text"
                                })
                            }), (0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    gapSize: "normal",
                                    onChange: E("borrowAmount", "buy" === r ? y : f, Number(x)),
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: u("widget-bor-amt")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: "buy" === r ? g : p
                                    }),
                                    value: M,
                                    variant: "line",
                                    type: "text",
                                    disabled: !b && 0 === +x
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "t-caption1 text-TertiaryText mb-2",
                            children: R
                        }), (0, a.jsx)("div", {
                            className: "mb-4",
                            children: (0, a.jsx)(N.A, {
                                className: "w-full",
                                onClick: z,
                                disabled: !D,
                                children: u("widget-calculate")
                            })
                        }), (0, a.jsxs)("div", {
                            className: "border border-solid border-Line rounded-lg p-3",
                            children: [(0, a.jsx)("div", {
                                className: "t-subtitle1 mb-1",
                                children: u("widget-res")
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [(0, a.jsx)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: u("widget-tar-pri")
                                }), (0, a.jsxs)("div", {
                                    className: "t-subtitle2 text-PrimaryText",
                                    children: [(0, a.jsx)("span", {
                                        className: "mr-1",
                                        children: +q <= 0 ? "-" : q
                                    }), (0, a.jsx)("span", {
                                        children: g
                                    })]
                                })]
                            }), (0, a.jsx)("div", {
                                className: "t-caption1 text-TertiaryText",
                                children: u("widget-ref")
                            })]
                        })]
                    })
                })),
                K = (0, i.memo)(Z);
            var ee = s("pNlg"),
                te = s("q1+c");
            const se = {
                    bar: "0",
                    loaded: !1
                },
                ae = {
                    data: {},
                    loaded: !1
                };
            var ie = s("VA12");
            const re = () => {
                    const [e, t] = (0, i.useState)([]);
                    return (0, i.useEffect)((() => {
                        (async () => {
                            let e = {
                                data: [],
                                success: !1
                            };
                            try {
                                e = await (0, ie.get)("/bapi/margin/v1/public/margin/asset-leverage-brackets")
                            } catch (t) {}
                            return e
                        })().then((e => {
                            e.data && e.data.length && t(e.data)
                        })).catch((e => {
                            console.error(e)
                        }))
                    }), []), e
                },
                ne = () => {
                    const [e, t] = (0, i.useState)([]);
                    return (0, i.useEffect)((() => {
                        (async () => {
                            let e = {
                                data: [],
                                success: !1
                            };
                            try {
                                e = await (0, ie.get)("/bapi/margin/v1/public/isolated-margin/pair/coeff")
                            } catch (t) {}
                            return e
                        })().then((e => {
                            e.data && e.data.length && t(e.data)
                        })).catch((e => {
                            console.error(e)
                        }))
                    }), []), e
                },
                {
                    Option: le
                } = R.A,
                oe = ["MARGIN_1", "MARGIN_2"],
                ce = {
                    MARGIN_1: {
                        key: "cross-margin-classic",
                        defaultValue: "Cross Margin Classic"
                    },
                    MARGIN_2: {
                        key: "cross-margin-pro",
                        defaultValue: "Cross Margin Pro"
                    }
                },
                de = ({
                    key: e,
                    t: t
                }) => {
                    let s = "";
                    if (ce[e]) {
                        const a = ce[e];
                        s = t(a.key, {
                            defaultValue: a.defaultValue
                        })
                    }
                    return s
                },
                me = ({
                    accountType: e,
                    setAccountType: t
                }) => {
                    const {
                        t: s
                    } = d();
                    return (0, a.jsx)(R.A, {
                        trigger: "click",
                        type: "single",
                        variant: "full",
                        value: [e],
                        onChange: e => t("string" === typeof e ? e : e ? .[0] ? ? ""),
                        renderFn: e => {
                            const {
                                selects: t
                            } = e;
                            return de({
                                key: t[0],
                                t: s
                            })
                        },
                        placeholder: "",
                        searchPlaceholder: "",
                        children: oe.map((e => (0, a.jsx)(le, {
                            value: e,
                            children: de({
                                key: e,
                                t: s
                            })
                        }, e)))
                    })
                },
                {
                    Option: ue
                } = R.A,
                xe = {
                    entryPrice: "",
                    amount: "",
                    balance: ""
                },
                be = {
                    liqPrice: "-"
                },
                he = (0, i.forwardRef)((({
                    onAbleChange: e,
                    symbol: t,
                    setSymbol: s,
                    direction: r,
                    setDirection: n,
                    type: l,
                    setType: o,
                    symbolInfo: c
                }, m) => {
                    const {
                        liqBar: u,
                        barPending: x
                    } = ((e, t) => {
                        const [s, a] = (0, i.useState)("1.05"), [r, n] = (0, i.useState)(!0);
                        return (0, i.useEffect)((() => {
                            n(!0), "cross" === t ? se.loaded ? (a(se.bar), n(!1)) : (0, ee.Md)().then((e => {
                                se.bar = e.forceLiquidationBar, se.loaded = !0, a(e.forceLiquidationBar), n(!1)
                            })).catch((() => {
                                n(!1)
                            })) : ae.loaded ? (a(ae.data[e]), n(!1)) : (0, te.$2)().then((t => {
                                const s = ((e = []) => {
                                    const t = {};
                                    return e.forEach((e => {
                                        const {
                                            base: s,
                                            quote: a,
                                            coeff: i
                                        } = e;
                                        t[`${s}/${a}`] = i ? .forceLiquidationBar ? ? "0"
                                    })), t
                                })(t);
                                ae.data = s, ae.loaded = !0, a(s[e]), n(!1)
                            })).catch((() => {
                                n(!1)
                            }))
                        }), [t]), {
                            liqBar: s,
                            barPending: r
                        }
                    })(t, l), {
                        t: b
                    } = d(), {
                        price: h,
                        baseTs: f,
                        quoteTs: y,
                        pricePending: v
                    } = k(t), g = re(), p = ne(), {
                        quote: S,
                        base: P
                    } = c, [C, A] = (0, i.useState)(S), [M, I] = (0, i.useState)(xe), [D, z] = (0, i.useState)({
                        amount: !1,
                        balance: !1
                    }), [F, U] = (0, i.useState)(""), {
                        entryPrice: _,
                        amount: G,
                        balance: W
                    } = M, [V, H] = (0, i.useState)(be), [Q, X] = (0, i.useState)(!1), [J, Z] = (0, i.useState)("MARGIN_1"), K = (0, i.useMemo)((() => {
                        let e, t = 5;
                        const s = "buy" === r ? S : P;
                        for (let a = 0; a < g.length; a += 1) {
                            const t = g[a];
                            if (t.assetNames.includes(s)) {
                                e = t.brackets;
                                break
                            }
                        }
                        if (e)
                            for (let a = 0; a < e.length; a += 1) e[a].leverage && parseInt(e[a].leverage, 10) > t && (t = parseInt(e[a].leverage, 10));
                        return t
                    }), [g, r, S, P]);
                    (0, i.useEffect)((() => {
                        v || I((e => ({ ...e,
                            entryPrice: h
                        })))
                    }), [h, v]), (0, i.useEffect)((() => {
                        "buy" === r && S ? A(S) : P && A(P)
                    }), [P, S, r]), (0, i.useEffect)((() => {
                        I((e => ({ ...e,
                            amount: "",
                            balance: ""
                        }))), H(be), z({
                            amount: !1,
                            balance: !1
                        })
                    }), [r, t, J]);
                    const ie = (0, i.useCallback)(((e, t, s) => a => {
                            let i = L(a, t);
                            s && parseFloat(i) > s || I((t => ({ ...t,
                                [e]: i
                            })))
                        }), []),
                        le = (0, i.useMemo)((() => {
                            let e = 0;
                            return e = "buy" === r ? C === S ? +_ * +G - +W : +_ * +G : C === P ? +G - +W : +G, Math.max(e, 0)
                        }), [_, G, W, r, C, P, S]),
                        oe = (0, i.useMemo)((() => C === S ? y : f), [C, S, y, f]),
                        ce = (0, i.useMemo)((() => {
                            let e = -1;
                            if (p && p.length) {
                                const t = p.find((e => e.symbol === `${P}${S}`));
                                t && (e = t.marginRatio)
                            }
                            return e
                        }), [p, P, S]),
                        de = (0, i.useCallback)((e => {
                            let t = L(e, f);
                            const s = { ...M,
                                amount: t
                            };
                            if (!D.balance) {
                                const e = B({
                                    amount: t,
                                    entryPrice: _,
                                    accountType: J,
                                    direction: r,
                                    type: l,
                                    isoMarginRatio: ce,
                                    balanceCoin: C,
                                    base: P,
                                    quote: S,
                                    valuePrecision: oe,
                                    marginProLeverage: K
                                });
                                e >= 0 && (s.balance = String(e))
                            }
                            I(s), z((e => ({ ...e,
                                amount: !0
                            }))), U("amount")
                        }), [J, W, r, _, ce, D, l, oe, U, C, P, S, K, f, M]),
                        he = (0, i.useCallback)((e => {
                            const t = L(e),
                                s = { ...M,
                                    balance: t
                                };
                            if (!D.amount) {
                                const e = q({
                                    balance: t,
                                    entryPrice: _,
                                    accountType: J,
                                    direction: r,
                                    type: l,
                                    isoMarginRatio: ce,
                                    quote: S,
                                    base: P,
                                    balanceCoin: C,
                                    valuePrecision: oe,
                                    marginProLeverage: K
                                });
                                e >= 0 && (s.amount = String(e))
                            }
                            I(s), z((e => ({ ...e,
                                balance: !0
                            }))), U("balance")
                        }), [J, G, r, _, ce, D, l, oe, U, S, P, C, K, M]),
                        fe = (0, i.useMemo)((() => q({
                            balance: W,
                            entryPrice: _,
                            accountType: J,
                            direction: r,
                            type: l,
                            isoMarginRatio: ce,
                            quote: S,
                            base: P,
                            balanceCoin: C,
                            valuePrecision: oe,
                            marginProLeverage: K
                        })), [W, r, _, J, l, ce, S, P, C, oe, K]),
                        ye = (0, i.useMemo)((() => B({
                            amount: G,
                            entryPrice: _,
                            accountType: J,
                            direction: r,
                            type: l,
                            isoMarginRatio: ce,
                            balanceCoin: C,
                            base: P,
                            quote: S,
                            valuePrecision: oe,
                            marginProLeverage: K
                        })), [G, r, _, J, l, ce, C, P, S, oe, K]),
                        ve = (0, i.useMemo)((() => D.balance && D.amount && "balance" === F && ye >= 0 && +W < ye ? b("min-balance-error", {
                            defaultValue: "Minimal balance {{balance}}",
                            balance: ye
                        }) : null), [W, F, ye, b, D]),
                        ge = (0, i.useMemo)((() => D.amount && D.balance && "amount" === F && fe >= 0 && +G > fe ? b("max-amt-error", {
                            defaultValue: "Maximum amount {{amount}}",
                            amount: fe
                        }) : null), [G, F, fe, b, D]),
                        pe = (0, i.useMemo)((() => {
                            if ("amount" === F) return ge || (ve || null);
                            if ("balance" === F) {
                                if (ve) return ve;
                                if (ge) return ge
                            }
                            return null
                        }), [ve, ge, F]),
                        je = (0, i.useMemo)((() => "buy" === r ? S : P), [r, S, P]),
                        Ne = (0, i.useMemo)((() => 3 === [_, W, G].filter((e => +e > 0)).length && !x && le > 0 && !Q && !pe), [_, W, G, x, le, Q, pe]);
                    (0, i.useEffect)((() => {
                        e ? .(Ne)
                    }), [Ne, e]);
                    const we = () => {
                        let e = "-",
                            t = be;
                        if ("cross" === l && (X(!0), (async e => {
                                try {
                                    const t = await (0, T.Ov)("BTCUSDT"),
                                        {
                                            c: s = "0"
                                        } = t.data;
                                    if ("BTC" === e) return {
                                        BTC: "1",
                                        USDT: s
                                    };
                                    if ("USDT" === e) return {
                                        BTC: String(1 / +s),
                                        USDT: "1"
                                    };
                                    const a = await (0, T.Ov)(`${e}USDT`),
                                        i = a.data ? .c ? ? "0";
                                    return {
                                        BTC: 0 === +s ? "-" : String(+i / +s),
                                        USDT: i
                                    }
                                } catch (t) {
                                    return {
                                        BTC: "0",
                                        USDT: "0"
                                    }
                                }
                            })(S).then((s => {
                                if ("buy" === r) {
                                    const t = C === S ? +G : +G + +W;
                                    if ("MARGIN_1" === J) {
                                        const s = "1.1";
                                        e = (0, w.Ww)((+le * +s / t).toFixed(y))
                                    } else {
                                        const s = E({
                                            assetLeverageBrackets: g,
                                            coin: S,
                                            borrowAmount: le
                                        });
                                        e = (0, w.Ww)(((+le + +s) / +t).toFixed(y))
                                    }
                                } else {
                                    const t = C === P ? +G * +_ : +G * +_ + +W;
                                    if ("MARGIN_1" === J) e = (0, w.Ww)((t / +le / +u).toFixed(y));
                                    else {
                                        const s = E({
                                                assetLeverageBrackets: g,
                                                coin: S,
                                                borrowAmount: le * +_
                                            }),
                                            a = (+le * +_ + +s) / (+le * +_);
                                        e = (0, w.Ww)((t / +le / a).toFixed(y))
                                    }
                                }
                                t = "BTC" === S ? {
                                    liqPrice: e,
                                    liqPriceUSDT: (0, w.Ww)((+s.USDT * +e).toFixed(4))
                                } : "USDT" === S ? {
                                    liqPrice: e,
                                    liqPriceBTC: (0, w.Ww)(+e * +s.BTC)
                                } : {
                                    liqPrice: e,
                                    liqPriceBTC: (0, w.Ww)((+e * +s.BTC).toFixed(4)),
                                    liqPriceUSDT: (0, w.Ww)(+s.USDT * +e)
                                }, "BTC" === P && delete t.liqPriceBTC, "USDT" === P && delete t.liqPriceUSDT, H(t), X(!1)
                            })).catch((() => {
                                X(!1)
                            }))), "isolated" === l) {
                            const t = +u;
                            if ("buy" === r) {
                                const s = 0,
                                    a = +le,
                                    i = +(C === S ? +G : +G + +W),
                                    r = 0;
                                e = (0, w.Ww)(((t * a - s) / (i - t * r)).toFixed(y))
                            } else {
                                const s = +(C === P ? +G * +_ : +G * +_ + +W),
                                    a = 0,
                                    i = 0,
                                    r = +le;
                                e = (0, w.Ww)(((t * a - s) / (i - t * r)).toFixed(y))
                            }
                            H({
                                liqPrice: +e > 0 ? e : "-"
                            })
                        }
                    };
                    (0, i.useImperativeHandle)(m, (() => ({
                        calc: we
                    })), [we]);
                    const Te = (0, i.useMemo)((() => `${b("widget-bor-amt")}: ${(0,w.Ww)(le)} ${je}`), [b, le, je]);
                    return (0, a.jsxs)(a.Fragment, {
                        children: [(0, a.jsx)("div", {
                            className: "mb-2",
                            children: (0, a.jsx)($, {
                                direction: r,
                                setDirection: n
                            })
                        }), (0, a.jsxs)("div", {
                            className: "flex items-center mb-2 gap-2",
                            children: [(0, a.jsx)("div", {
                                className: "grow basis-0",
                                children: (0, a.jsx)(O, {
                                    symbol: t,
                                    setSymbol: s
                                })
                            }), (0, a.jsx)("div", {
                                className: "grow basis-0",
                                children: (0, a.jsx)(Y, {
                                    type: l,
                                    setType: o,
                                    symbolInfo: c
                                })
                            })]
                        }), "cross" === l && (0, a.jsx)("div", {
                            className: "mb-2",
                            children: (0, a.jsx)(me, {
                                accountType: J,
                                setAccountType: Z
                            })
                        }), (0, a.jsxs)("div", {
                            className: "mainform",
                            children: [(0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    gapSize: "normal",
                                    onChange: ie("entryPrice", y),
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: b("widget-ent-pri")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: S
                                    }),
                                    value: _,
                                    variant: "line",
                                    className: "w-full",
                                    type: "text"
                                })
                            }), (0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    gapSize: "normal",
                                    onChange: de,
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: b("widget-amt")
                                    }),
                                    suffix: (0, a.jsx)("div", {
                                        className: "t-body4 text-PrimaryText",
                                        children: P
                                    }),
                                    value: G,
                                    variant: "line",
                                    type: "text",
                                    step: ".01"
                                })
                            }), (0, a.jsx)("div", {
                                className: "mb-2",
                                children: (0, a.jsx)(j.A, {
                                    gapSize: "normal",
                                    onChange: he,
                                    size: "middle",
                                    prefix: (0, a.jsx)("div", {
                                        className: "t-body4 text-IconNormal",
                                        children: b("widget-balance")
                                    }),
                                    suffix: (0, a.jsxs)(R.A, {
                                        variant: "auto",
                                        fieldVariant: "borderless",
                                        value: [C],
                                        onChange: e => {
                                            (e => {
                                                if (A(e), !D.balance) {
                                                    const t = B({
                                                        amount: G,
                                                        entryPrice: _,
                                                        accountType: J,
                                                        direction: r,
                                                        type: l,
                                                        isoMarginRatio: ce,
                                                        balanceCoin: e,
                                                        base: P,
                                                        quote: S,
                                                        valuePrecision: oe,
                                                        marginProLeverage: K
                                                    });
                                                    if (t >= 0) {
                                                        const e = { ...M
                                                        };
                                                        e.balance = String(t), I(e)
                                                    }
                                                }
                                            })(Array.isArray(e) ? e[0] : e)
                                        },
                                        children: [(0, a.jsx)(ue, {
                                            value: S,
                                            children: S
                                        }), (0, a.jsx)(ue, {
                                            value: P,
                                            children: P
                                        })]
                                    }),
                                    value: W,
                                    variant: "line",
                                    type: "text"
                                })
                            })]
                        }), (0, a.jsx)("div", {
                            className: "t-caption1 text-TertiaryText mb-2",
                            children: pe || Te
                        }), 0 === le && (0, a.jsx)("div", {
                            className: "t-caption1 text-TertiaryText mb-2",
                            children: b("widget-no-bor-tip")
                        }), (0, a.jsx)("div", {
                            className: "mb-4",
                            children: (0, a.jsx)(N.A, {
                                className: "w-full",
                                onClick: we,
                                disabled: !Ne,
                                children: b("widget-calculate")
                            })
                        }), (0, a.jsxs)("div", {
                            className: "border border-solid border-Line rounded-lg p-3",
                            children: [(0, a.jsx)("div", {
                                className: "t-subtitle1 mb-1",
                                children: b("widget-res")
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center justify-between mb-1",
                                children: [(0, a.jsxs)("div", {
                                    className: "t-body3 text-TertiaryText",
                                    children: [b("widget-liq-pri"), " (", S, ")"]
                                }), (0, a.jsx)("div", {
                                    className: "t-subtitle2 text-PrimaryText",
                                    children: V.liqPriceUSDT ? V.liqPriceUSDT : V.liqPriceBTC ? V.liqPriceBTC : V.liqPrice
                                })]
                            }), (0, a.jsx)("div", {
                                className: "t-caption1 text-TertiaryText",
                                children: b("widget-ref")
                            })]
                        })]
                    })
                })),
                fe = (0, i.memo)(he),
                {
                    TabList: ye,
                    Tab: ve
                } = p.A,
                ge = (0, i.forwardRef)(((e, t) => {
                    const [s, r] = (0, i.useState)(0), [n, l] = (0, i.useState)("cross"), [o, c] = (0, i.useState)("buy"), [m, u] = (0, i.useState)("BTC/USDT"), {
                        symbolMap: x
                    } = _(), b = (0, i.useMemo)((() => x ? .[m] ? ? {}), [m, x]), {
                        t: h
                    } = d(), f = (0, i.useRef)(), y = (0, i.useRef)(), v = (0, i.useRef)(), g = (0, i.useMemo)((() => [{
                        title: h("widget-pnl"),
                        ref: f
                    }, {
                        title: h("widget-tar-pri"),
                        ref: y
                    }, {
                        title: h("widget-liq-pri"),
                        ref: v
                    }]), [h]), p = (0, i.useCallback)((() => {
                        "function" === typeof g[s].ref.current ? .calc && g[s].ref.current.calc()
                    }), [s]);
                    return (0, i.useImperativeHandle)(t, (() => ({
                        calc: p
                    })), [p]), (0, a.jsxs)("div", {
                        className: "px-6 pb-6",
                        children: [(0, a.jsx)(ye, {
                            selectedIndex: s,
                            onTabClick: e => r(e),
                            variant: "default",
                            children: g.map(((e, t) => (0, a.jsx)(ve, {
                                children: (0, a.jsx)("div", {
                                    className: "t-subtitle1",
                                    children: e.title
                                })
                            }, t)))
                        }), (0, a.jsxs)("div", {
                            className: "pt-4",
                            children: [(0, a.jsx)("div", {
                                className: "" + (0 === s ? "block" : "hidden"),
                                children: (0, a.jsx)(J, {
                                    ref: f,
                                    symbol: m,
                                    setSymbol: u,
                                    direction: o,
                                    setDirection: c,
                                    type: n,
                                    setType: l,
                                    symbolInfo: b
                                })
                            }), (0, a.jsx)("div", {
                                className: "" + (1 === s ? "block" : "hidden"),
                                children: (0, a.jsx)(K, {
                                    ref: y,
                                    symbol: m,
                                    setSymbol: u,
                                    direction: o,
                                    setDirection: c,
                                    type: n,
                                    setType: l,
                                    symbolInfo: b
                                })
                            }), (0, a.jsx)("div", {
                                className: "" + (2 === s ? "block" : "hidden"),
                                children: (0, a.jsx)(fe, {
                                    ref: v,
                                    symbol: m,
                                    setSymbol: u,
                                    direction: o,
                                    setDirection: c,
                                    type: n,
                                    setType: l,
                                    symbolInfo: b
                                })
                            })]
                        })]
                    })
                })),
                pe = (0, i.memo)(ge),
                je = ({
                    isCross: e = !0,
                    symbol: t,
                    zIndex: s,
                    onClose: i
                }) => {
                    const {
                        isMobile: c,
                        isIPad: m
                    } = (0, o.Q)(), {
                        t: u
                    } = d();
                    return c ? (0, a.jsxs)(r.A, {
                        visible: !0,
                        direction: "bottom",
                        onClose: i,
                        size: "full",
                        children: [(0, a.jsxs)("div", {
                            className: "flex justify-between items-center mx-[15px] h-[44px]",
                            children: [(0, a.jsx)("div", {
                                onClick: i,
                                children: (0, a.jsx)(l.A, {
                                    className: "h-5 w-5"
                                })
                            }), (0, a.jsx)("div", {
                                className: "t-headline4",
                                children: u("widget-margin-calculator")
                            }), (0, a.jsx)("div", {})]
                        }), (0, a.jsx)("div", {
                            className: "overflow-y-auto",
                            children: (0, a.jsx)(pe, {
                                defaultSymbol: t,
                                isCross: e
                            })
                        })]
                    }) : m ? (0, a.jsxs)(n.Ay, {
                        enablePortal: !0,
                        modalSize: "fit",
                        visible: !0,
                        maskClose: !1,
                        onClose: i,
                        children: [(0, a.jsx)(n.Ay.Header, {
                            showNext: !0,
                            onNextClick: i,
                            children: (0, a.jsx)("div", {
                                className: "t-headline5",
                                children: u("widget-margin-calculator")
                            })
                        }), (0, a.jsx)("div", {
                            className: "max-h-fit w-[520px]",
                            children: (0, a.jsx)(pe, {
                                defaultSymbol: t,
                                isCross: e
                            })
                        })]
                    }) : (0, a.jsx)(g, {
                        zIndex: s,
                        onClose: i,
                        children: (0, a.jsx)(pe, {
                            defaultSymbol: t,
                            isCross: e
                        })
                    })
                }
        },
        YENt: (e, t, s) => {
            function a() {
                return "undefined" !== typeof window
            }
            s.d(t, {
                B: () => a
            })
        }
    }
]);