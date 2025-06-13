"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [8292], {
        ktAW: (e, t, n) => {
            n.d(t, {
                x: () => d
            });
            var o = n("mXdx"),
                a = n("DTvD"),
                l = n.n(a),
                s = n("xqbL"),
                r = n.n(s),
                i = n("tgKj"),
                c = n("vjpm");
            const d = l().forwardRef((({
                active: e,
                className: t,
                hidden: n = !1,
                ...a
            }, l) => {
                const {
                    isMobile: s
                } = (0, c.Q)();
                return n ? null : (0, o.jsx)(i.A, { ...a,
                    className: r()("typography-caption0 h-[20px] items-center justify-center cursor-pointer", {
                        "text-PrimaryText": e,
                        "text-TertiaryText": !e && !s,
                        "text-SecondaryText": !e && s
                    }, t),
                    ref: l
                })
            }))
        },
        ud1R: (e, t, n) => {
            n.d(t, {
                m: () => d
            });
            var o = n("mXdx"),
                a = (n("DTvD"), n("pPGf")),
                l = n("8Qyq"),
                s = n("tgKj"),
                r = n("Olbk"),
                i = n("ktAW");
            const c = {
                    minWidth: "auto",
                    paddingLeft: "4px"
                },
                d = ({
                    className: e,
                    dropdownExpanded: t,
                    onDropdownMouseEnter: n,
                    onDropdownMouseLeave: d,
                    onDropdownButtonClick: u,
                    isDropdownButtonActive: p,
                    dropdownText: v,
                    overlay: x
                }) => (0, o.jsx)(l.A, {
                    className: e,
                    style: c,
                    open: t,
                    onMouseEnter: n,
                    onMouseLeave: d,
                    overlay: x,
                    enablePortal: !0,
                    children: (0, o.jsx)(i.x, {
                        onClick: u,
                        className: "min-w-[auto]",
                        active: p,
                        children: (0, o.jsxs)(s.A, {
                            className: "items-center flex-nowrap justify-center",
                            children: [v && (0, o.jsx)(r.Ay, {
                                className: "whitespace-nowrap",
                                children: v
                            }), (0, o.jsx)(a.A, {
                                className: "interval-expand-btn text-IconNormal w-[16px] h-[16px] transition-transform hover:rotate-180"
                            })]
                        })
                    })
                })
        },
        xKSC: (e, t, n) => {
            n.d(t, {
                n: () => u
            });
            var o = n("mXdx"),
                a = (n("DTvD"), n("xqbL")),
                l = n.n(a),
                s = n("tgKj"),
                r = n("Olbk"),
                i = n("g/H4"),
                c = n("5qdK");
            const d = ({
                    checked: e,
                    checkboxSize: t = 13
                }) => (0, o.jsx)(r.Ay, {
                    style: {
                        top: `-${t/2}px`,
                        right: `-${t/2}px`
                    },
                    className: "absolute",
                    children: (0, o.jsx)(s.A, {
                        className: "items-center justify-center w-[16px] h-[16px] rounded-full text-PrimaryText",
                        children: e ? (0, o.jsx)(i.A, {
                            className: "text-TertiaryText"
                        }) : (0, o.jsx)(c.A, {
                            className: "text-TertiaryText"
                        })
                    })
                }),
                u = ({
                    showCheckbox: e,
                    checked: t,
                    value: n,
                    onChange: a,
                    onClick: i,
                    children: c,
                    active: u,
                    className: p
                }) => (0, o.jsxs)(s.A, {
                    className: l()("items-center justify-center typography-body3 text-PrimaryText w-[68px] h-[24px] relative cursor-pointer rounded-[6px]", {
                        "bg-DisableText": u,
                        "bg-Line": !u
                    }, p),
                    onClick: i,
                    children: [(0, o.jsx)(r.Ay, {
                        className: "typography-caption1",
                        children: c
                    }), e && (0, o.jsx)(d, {
                        onChange: a,
                        value: n,
                        checked: t
                    })]
                })
        },
        iEQP: (e, t, n) => {
            n.d(t, {
                l: () => l
            });
            var o = n("mXdx"),
                a = (n("DTvD"), n("Gz4J"));
            const l = ({
                children: e,
                onClick: t
            }) => (0, o.jsx)(a.A, {
                className: "cursor-pointer",
                variant: "text",
                sz: "small",
                onClick: t,
                children: e
            })
        },
        Omqd: (e, t, n) => {
            n.d(t, {
                e: () => d
            });
            var o = n("mXdx"),
                a = n("DTvD"),
                l = n("xqbL"),
                s = n.n(l),
                r = n("vjpm"),
                i = n("mKKx"),
                c = n("ktAW");
            const d = ({
                className: e,
                text: t,
                value: n,
                active: l,
                onClick: d,
                onObscured: u,
                onRevealed: p
            }) => {
                const v = (0, a.useRef)(null),
                    x = (0, i.A)(v, {
                        root: null,
                        rootMargin: "0px",
                        threshold: 1
                    }),
                    {
                        isMobile: m
                    } = (0, r.Q)();
                return (0, a.useEffect)((() => {
                    m || x && (x.intersectionRatio < 1 ? u(n) : p(n))
                }), [x, m]), (0, o.jsx)(c.x, {
                    id: n,
                    active: l,
                    onClick: d,
                    className: s()("px-[1px]", e),
                    ref: v,
                    children: t
                })
            }
        },
        oUZ3: (e, t, n) => {
            n.d(t, {
                I: () => l
            });
            var o = n("DTvD");
            const a = () => null,
                l = ({
                    options: e,
                    value: t,
                    isEditing: n,
                    onClickEdit: l,
                    onClickAway: s,
                    title: r,
                    saveText: i,
                    editText: c,
                    dropdownExpanded: d,
                    onDropdownMouseEnter: u,
                    onDropdownMouseLeave: p,
                    onDropdownButtonClick: v,
                    onClickItem: x,
                    ...m
                }) => {
                    const [h, f] = (0, o.useState)(e), [k, w] = (0, o.useState)({});
                    (0, o.useEffect)((() => f(e)), [e]);
                    const y = (0, o.useMemo)((() => h.map((e => ({
                            text: e.text,
                            value: e.text,
                            checked: e.selected,
                            showCheckbox: n,
                            active: e.value === t,
                            onClick: n ? a : () => x(e.value),
                            onChange: n ? () => f((t => t.map((t => ({ ...t,
                                selected: t.value === e.value ? !t.selected : t.selected
                            }))))) : a
                        })))), [n, x, h, t]),
                        C = (0, o.useMemo)((() => e.filter((e => e.selected)).map((e => ({
                            text: e.text,
                            value: e.value,
                            active: e.value === t,
                            onClick: () => x(e.value),
                            onObscured: e => {
                                w((t => {
                                    const n = { ...t
                                    };
                                    return n[e] = !0, n
                                }))
                            },
                            onRevealed: e => {
                                w((t => {
                                    const n = { ...t
                                    };
                                    return n[e] = !1, n
                                }))
                            }
                        })))), [e, x, t]),
                        D = (0, o.useMemo)((() => e.find((e => e.value === t && (!e.selected || k[e.value])))), [e, k, t]),
                        b = (0, o.useMemo)((() => n ? i : c), [c, n, i]),
                        g = (0, o.useCallback)((() => v(D ? .value || "")), [D ? .value, v]),
                        j = (0, o.useCallback)((() => l(h)), [l, h]);
                    return {
                        options: y,
                        displayedOptions: C,
                        editText: b,
                        dropdownText: D ? .text || "",
                        dropdownExpanded: d,
                        onDropdownMouseEnter: u,
                        onDropdownMouseLeave: p,
                        onDropdownButtonClick: g,
                        title: r,
                        isDropdownButtonActive: !!D,
                        onClickEdit: j,
                        onClickAway: s,
                        onClickItem: x,
                        value: t,
                        ...m
                    }
                }
        },
        rwWX: (e, t, n) => {
            n.r(t), n.d(t, {
                IntervalFilterSmall: () => D,
                default: () => b
            });
            var o = n("mXdx"),
                a = n("DTvD"),
                l = n("T0Sc"),
                s = n("sR6W"),
                r = n.n(s),
                i = n("qv9I"),
                c = n("rPbR"),
                d = n("LNCz"),
                u = n("tgKj"),
                p = n("Omqd"),
                v = n("ud1R"),
                x = n("KNYd"),
                m = n("Olbk"),
                h = n("xKSC"),
                f = n("iEQP");

            function k({
                options: e,
                onClickEdit: t,
                onClickAway: n,
                editText: l,
                title: s,
                subtitle: r
            }) {
                const i = (0, a.useRef)(null);
                return (0, x.A)(i, n), (0, o.jsxs)(u.A, {
                    ref: i,
                    className: "bg-CardBg w-[340px] flex-col p-[16px] rounded-[12px]",
                    children: [(0, o.jsxs)(u.A, {
                        className: "items-center justify-between mb-[12px]",
                        children: [(0, o.jsx)(m.Ay, {
                            className: "typography-caption1 text-SecondaryText",
                            children: s
                        }), (0, o.jsx)(f.l, {
                            onClick: t,
                            children: l
                        })]
                    }), (0, o.jsx)(u.A, {
                        className: "flex-wrap gap-y-[8px] gap-x-[12px]",
                        children: e.filter((({
                            checked: e
                        }) => e)).map((({
                            text: e,
                            value: t,
                            showCheckbox: n,
                            checked: a,
                            active: l,
                            onClick: s,
                            onChange: r
                        }) => (0, o.jsx)(h.n, {
                            value: t,
                            checked: a,
                            showCheckbox: n,
                            active: l,
                            onClick: () => {
                                s(), r()
                            },
                            onChange: r,
                            children: e
                        }, t)))
                    }), (0, o.jsx)(m.Ay, {
                        className: "typography-caption1 text-SecondaryText mt-[16px] mb-[12px]",
                        children: r
                    }), (0, o.jsx)(u.A, {
                        className: "flex-wrap gap-y-[8px] gap-x-[12px]",
                        children: e.filter((({
                            checked: e
                        }) => !e)).map((({
                            text: e,
                            value: t,
                            showCheckbox: n,
                            checked: a,
                            active: l,
                            onClick: s,
                            onChange: r
                        }) => (0, o.jsx)(h.n, {
                            value: t,
                            checked: a,
                            active: l,
                            showCheckbox: n,
                            onClick: () => {
                                s(), r()
                            },
                            onChange: r,
                            children: e
                        }, t)))
                    })]
                })
            }
            const w = ({
                dropdownExpanded: e,
                onDropdownMouseEnter: t,
                onDropdownMouseLeave: n,
                onDropdownButtonClick: a,
                options: l,
                onClickEdit: s,
                onClickAway: r,
                isDropdownButtonActive: i,
                dropdownText: c,
                editText: d,
                title: x,
                subtitle: m,
                displayedOptions: h
            }) => (0, o.jsxs)(u.A, {
                className: "h-[20px]",
                children: [(0, o.jsx)(u.A, {
                    className: "md:flex-wrap overflow-hidden gap-[8px]",
                    children: h.map((({
                        text: e,
                        value: t,
                        active: n,
                        onClick: a,
                        onObscured: l,
                        onRevealed: s
                    }) => (0, o.jsx)(p.e, {
                        className: "whitespace-nowrap",
                        text: e,
                        value: t,
                        active: n,
                        onClick: a,
                        onObscured: l,
                        onRevealed: s
                    }, t)))
                }), (0, o.jsx)(v.m, {
                    className: "!ml-[8px]",
                    dropdownExpanded: e,
                    onDropdownMouseEnter: t,
                    onDropdownMouseLeave: n,
                    onDropdownButtonClick: a,
                    isDropdownButtonActive: i,
                    dropdownText: c,
                    overlay: (0, o.jsx)(k, {
                        options: l,
                        onClickEdit: s,
                        onClickAway: r,
                        editText: d,
                        title: x,
                        subtitle: m
                    })
                })]
            });
            var y = n("oUZ3");
            const C = e => {
                    const t = (0, y.I)(e);
                    return (0, o.jsx)(w, { ...t
                    })
                },
                D = ({
                    namespace: e,
                    intervalOptions: t
                }) => {
                    const {
                        getI18n: n
                    } = (0, l.o)("trd-chart", "trade-ui"), {
                        getI18n: s
                    } = (0, l.o)("", "kline-ui"), u = (0, i.createStore)(e), p = (0, c.createStore)(e), {
                        options: v,
                        setOptions: x,
                        option: m,
                        dropdownExpanded: h,
                        setDropdownOpen: f,
                        handleClickItem: k
                    } = (0, d.f)({
                        namespace: e,
                        intervalOptions: t
                    }), [w, y] = u(i.getSelectedIntervals), [D, b] = p(c.getEditingInterval), g = (0, a.useCallback)((e => {
                        if (D) {
                            x(e), f(!1);
                            const n = r()(t, e.filter((e => e.selected)).map((({
                                value: e
                            }) => e)));
                            y(n)
                        }
                        b(!D)
                    }), [D, b, x, f, t, y]), j = (0, a.useCallback)((() => f(!0)), [f]), A = (0, a.useCallback)((() => {
                        D || (f(!1), b(!1))
                    }), [D, f, b]), T = (0, a.useCallback)((() => f(!0)), [f]), I = (0, a.useCallback)((() => {
                        f(!1), b(!1), x((e => e.map((e => ({ ...e,
                            selected: w.some((t => t === e.value))
                        })))))
                    }), [w, f, b, x]), E = (0, a.useMemo)((() => s("pinned", {
                        defaultValue: "Pinned"
                    }) || ""), [s]), M = (0, a.useMemo)((() => s("available", {
                        defaultValue: "Available"
                    }) || ""), [s]), N = (0, a.useMemo)((() => n("save", {
                        defaultValue: "Save"
                    }) || ""), [n]), O = (0, a.useMemo)((() => n("edit", {
                        defaultValue: "Edit"
                    }) || ""), [n]);
                    return (0, o.jsx)(C, {
                        options: v,
                        value: m,
                        isEditing: D,
                        onClickEdit: g,
                        onClickAway: I,
                        title: E,
                        subtitle: M,
                        saveText: N,
                        editText: O,
                        dropdownExpanded: h,
                        onDropdownMouseEnter: j,
                        onDropdownMouseLeave: A,
                        onDropdownButtonClick: T,
                        onClickItem: k
                    })
                },
                b = D
        },
        LNCz: (e, t, n) => {
            n.d(t, {
                f: () => i
            });
            var o = n("DTvD"),
                a = n("9pYu"),
                l = n("T0Sc"),
                s = n("qv9I"),
                r = n("rPbR");
            const i = ({
                namespace: e,
                intervalOptions: t
            }) => {
                const {
                    getI18n: n
                } = (0, l.o)("trd-chart", "trade-ui"), i = (0, s.createStore)(e), c = (0, r.createStore)(e), [d, u] = i(s.getActiveTab), [p, v] = i(s.getInterval), [x] = i(s.getSelectedIntervals), [m, h] = c(r.getIntervalConfigOpen), f = (0, o.useMemo)((() => (e => {
                    const t = e("line", {
                            defaultValue: "Time"
                        }) || "Time",
                        n = e("second", {
                            defaultValue: "s"
                        }) || "s",
                        o = e("minute", {
                            defaultValue: "m"
                        }) || "m",
                        a = e("hour", {
                            defaultValue: "H"
                        }) || "H",
                        l = e("day", {
                            defaultValue: "D"
                        }) || "D",
                        r = e("weekLine", {
                            defaultValue: "W"
                        }) || "W",
                        i = e("monthLine", {
                            defaultValue: "M"
                        }) || "M";
                    return e => ({
                        value: e,
                        text: {
                            [s.DisplayIntervals.Time]: t,
                            [s.DisplayIntervals["1s"]]: `1${n}`,
                            [s.DisplayIntervals["1m"]]: `1${o}`,
                            [s.DisplayIntervals["3m"]]: `3${o}`,
                            [s.DisplayIntervals["5m"]]: `5${o}`,
                            [s.DisplayIntervals["15m"]]: `15${o}`,
                            [s.DisplayIntervals["30m"]]: `30${o}`,
                            [s.DisplayIntervals["1h"]]: `1${a}`,
                            [s.DisplayIntervals["2h"]]: `2${a}`,
                            [s.DisplayIntervals["4h"]]: `4${a}`,
                            [s.DisplayIntervals["6h"]]: `6${a}`,
                            [s.DisplayIntervals["8h"]]: `8${a}`,
                            [s.DisplayIntervals["12h"]]: `12${a}`,
                            [s.DisplayIntervals["1d"]]: `1${l}`,
                            [s.DisplayIntervals["3d"]]: `3${l}`,
                            [s.DisplayIntervals["1w"]]: r,
                            [s.DisplayIntervals["1M"]]: i
                        }[e]
                    })
                })(n)), [n]), k = (0, o.useMemo)((() => (({
                    options: e,
                    createOption: t
                }) => e.map((e => t(e))))({
                    options: t,
                    createOption: f
                })), [f, t]), w = (0, o.useMemo)((() => k.map((({
                    value: e,
                    text: t = ""
                }) => ({
                    value: e,
                    text: t,
                    selected: x.some((t => t === e))
                })))), [k, x]), [y, C] = (0, o.useState)(w);
                (0, a.A)((() => C(w)), [w]);
                const D = (0, o.useCallback)((e => {
                    h(!1), v(e), u(d === s.Tabs.Depth ? s.Tabs.Origin : d)
                }), [h, v, u, d]);
                return {
                    options: y,
                    setOptions: C,
                    option: p,
                    dropdownExpanded: m,
                    setDropdownOpen: h,
                    handleClickItem: D
                }
            }
        },
        "g/H4": (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var o = n("wIZF"),
                a = n("DTvD"),
                l = n.n(a),
                s = n("qqbu");
            const r = function(e) {
                return l().createElement(s.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-3 1.25v-2.5H6v2.5h12z",
                    fill: "currentColor"
                }))
            }
        },
        "5qdK": (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var o = n("wIZF"),
                a = n("DTvD"),
                l = n.n(a),
                s = n("qqbu");
            const r = function(e) {
                return l().createElement(s.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-10.25 1.25V18h2.5v-4.75H18v-2.5h-4.75V6h-2.5v4.75H6v2.5h4.75z",
                    fill: "currentColor"
                }))
            }
        },
        "4olV": e => {
            e.exports = function e(t, n) {
                if (t === n) return !0;
                if (t && n && "object" == typeof t && "object" == typeof n) {
                    if (t.constructor !== n.constructor) return !1;
                    var o, a, l;
                    if (Array.isArray(t)) {
                        if ((o = t.length) != n.length) return !1;
                        for (a = o; 0 !== a--;)
                            if (!e(t[a], n[a])) return !1;
                        return !0
                    }
                    if (t.constructor === RegExp) return t.source === n.source && t.flags === n.flags;
                    if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
                    if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
                    if ((o = (l = Object.keys(t)).length) !== Object.keys(n).length) return !1;
                    for (a = o; 0 !== a--;)
                        if (!Object.prototype.hasOwnProperty.call(n, l[a])) return !1;
                    for (a = o; 0 !== a--;) {
                        var s = l[a];
                        if (("_owner" !== s || !t.$$typeof) && !e(t[s], n[s])) return !1
                    }
                    return !0
                }
                return t !== t && n !== n
            }
        },
        "9pYu": (e, t, n) => {
            n.d(t, {
                A: () => r
            });
            var o = n("DTvD");
            const a = function(e, t, n) {
                var a = (0, o.useRef)(void 0);
                a.current && n(t, a.current) || (a.current = t), (0, o.useEffect)(e, a.current)
            };
            var l = n("4olV");
            const s = n.n(l)();
            const r = function(e, t) {
                a(e, t, s)
            }
        }
    }
]);