! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "3bd0006c-8dfe-5ece-80ac-31aa7d5fe035")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [861], {
        cKr8: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => b
            });
            var r = n("M5j3"),
                i = n("gZfF"),
                o = n("N/Z2"),
                a = n("DTvD"),
                s = n.n(a),
                l = n("06hb"),
                c = n("6aZm"),
                u = n("LCuF"),
                f = (0, c.UF)("uikit-core", "VisuallyHidden");
            const d = function(e) {
                var t = e.children;
                return f(""), s().createElement(u.A, {
                    as: "span",
                    __css: {
                        border: "0px",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        height: "1px",
                        width: "1px",
                        margin: "-1px",
                        padding: "0px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        position: "absolute"
                    }
                }, t)
            };

            function p() {
                var e = (0, o.A)(["\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1.0);\n  }\n"]);
                return p = function() {
                    return e
                }, e
            }
            var m = (0, c.UF)("uikit-core", "Spinner"),
                h = (0, a.forwardRef)((function(e, t) {
                    e.variant;
                    var n = e.itemsColor,
                        o = void 0 === n ? "primary" : n,
                        a = e.label,
                        l = (0, i.A)(e, ["variant", "itemsColor", "label"]);
                    m("");
                    var c = Array(4).fill(1).map((function(e, t) {
                        return "-".concat(t / 10, "s")
                    })).reverse();
                    return s().createElement(u.A, (0, r.A)({
                        ref: t
                    }, l, {
                        __css: {
                            display: "flex",
                            width: "30px",
                            height: "30px",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }), a && s().createElement(d, null, a), c.map((function(e, t) {
                        return s().createElement(g, {
                            key: t,
                            delay: e,
                            color: o
                        })
                    })))
                })),
                v = (0, l.keyframes)(p()),
                g = function(e) {
                    var t = e.delay,
                        n = e.color;
                    return s().createElement(u.A, {
                        __css: {
                            backgroundColor: n,
                            height: "100%",
                            width: "3px",
                            animation: "".concat(v, " 1.2s infinite ease-in-out"),
                            animationDelay: t
                        }
                    })
                };
            h.displayName = "Spinner";
            const b = h
        },
        V1ty: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => m
            });
            var r = n("M5j3"),
                i = n("BK7R"),
                o = n("QUKP"),
                a = n("gZfF"),
                s = n("DTvD"),
                l = n("LCuF"),
                c = n("O94r"),
                u = n.n(c),
                f = n("fUhM"),
                d = {
                    "&,&::before": {
                        position: "absolute",
                        width: "6px",
                        height: "6px",
                        zIndex: -1
                    },
                    "&::before": {
                        content: '""',
                        display: "block"
                    }
                },
                p = {
                    boxSizing: "content-box",
                    position: "absolute",
                    width: "max-content",
                    wordBreak: "normal",
                    zIndex: "tooltip",
                    maxWidth: "296px",
                    '&[data-popper-placement^="top"] > [data-popper-arrow]': {
                        bottom: "-3px"
                    },
                    "& > .gap-fill": {
                        position: "absolute",
                        display: "block"
                    },
                    '&[data-popper-placement^="top"] > [data-popper-arrow]::before': {
                        transform: "rotate(45deg)"
                    },
                    '&[data-popper-placement^="top"] > .gap-fill': {
                        bottom: "-".concat(f.rQ, "px"),
                        left: "0",
                        width: "100%",
                        height: "".concat(f.rQ, "px")
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]': {
                        top: "-3px"
                    },
                    '&[data-popper-placement^="bottom"] > [data-popper-arrow]::before': {
                        transform: "rotate(225deg)"
                    },
                    '&[data-popper-placement^="bottom"] > .gap-fill': {
                        top: "-".concat(f.rQ, "px"),
                        left: "0",
                        width: "100%",
                        height: "".concat(f.rQ, "px")
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]': {
                        right: "-3px"
                    },
                    '&[data-popper-placement^="left"] > [data-popper-arrow]::before': {
                        transform: "rotate(-45deg)"
                    },
                    '&[data-popper-placement^="left"] > .gap-fill': {
                        top: "0",
                        right: "-".concat(f.rQ, "px"),
                        width: "".concat(f.rQ, "px"),
                        height: "100%"
                    },
                    '&[data-popper-placement^="right"] > [data-popper-arrow]': {
                        left: "-3px"
                    },
                    '&[data-popper-placement^="right"] > [data-popper-arrow]::before': {
                        transform: "rotate(135deg)"
                    },
                    '&[data-popper-placement^="right"] > .gap-fill': {
                        top: "0",
                        left: "-".concat(f.rQ, "px"),
                        width: "".concat(f.rQ, "px"),
                        height: "100%"
                    }
                };
            const m = s.forwardRef((function(e, t) {
                var n = e.arrow,
                    c = e.arrowRef,
                    f = e.arrowStyle,
                    m = e.children,
                    h = e.open,
                    v = e.className,
                    g = e.bg,
                    b = e.sx,
                    x = (0, a.A)(e, ["arrow", "arrowRef", "arrowStyle", "children", "open", "className", "bg", "sx"]);
                return h ? s.createElement(l.A, (0, r.A)({
                    ref: t,
                    variant: "tooltip",
                    bg: g,
                    className: u()(v, "bn-tooltip-box")
                }, x, {
                    __css: (0, o.A)((0, i.A)({}, p), {
                        ".bn-tooltip-arrow[data-popper-arrow]::before": {
                            backgroundColor: g
                        }
                    }),
                    sx: b
                }), m, n && s.createElement(l.A, {
                    className: "bn-tooltip-arrow",
                    ref: c,
                    "data-popper-arrow": !0,
                    __css: d,
                    style: f
                }), s.createElement("i", {
                    className: "gap-fill"
                })) : null
            }))
        },
        fUhM: (e, t, n) => {
            "use strict";
            n.d(t, {
                kL: () => s,
                lv: () => i,
                p0: () => r,
                rQ: () => l,
                yP: () => a
            });
            var r = 120,
                i = {
                    transition: "opacity ".concat(r, "ms ease-in-out, transform ").concat(r, "ms ease-in-out"),
                    opacity: .25,
                    transform: "translate3d(0, 0, 0)"
                },
                o = {
                    bottom: "translate3d(0, 6px, 0)",
                    left: "translate3d(-6px, 0, 0)",
                    right: "translate3d(6px, 0, 0)",
                    top: "translate3d(0, -6px, 0)"
                };
            var a = function(e) {
                    return e = function(e) {
                        return e.split("-")[0]
                    }(e || "top"), {
                        entering: {
                            opacity: .25,
                            transform: "translate3d(0, 0, 0)"
                        },
                        entered: {
                            opacity: 1,
                            transform: "translate3d(0, 0, 0)"
                        },
                        exiting: {
                            opacity: .25,
                            transform: o[e]
                        },
                        exited: {
                            visibility: "hidden",
                            opacity: 0,
                            transform: o[e]
                        }
                    }
                },
                s = {
                    "bottom-end": "bottom-start",
                    "bottom-start": "bottom-end",
                    "left-end": "right-end",
                    "left-start": "right-start",
                    left: "right",
                    "right-end": "left-end",
                    "right-start": "left-start",
                    right: "left",
                    "top-end": "top-start",
                    "top-start": "top-end"
                },
                l = 8
        },
        vWDX: (e, t, n) => {
            "use strict";
            n.d(t, {
                W: () => o
            });
            var r = n("DTvD"),
                i = n("tEf9");
            var o = function(e, t, n) {
                var o = function(e) {
                    var t = this,
                        n = (0, r.useRef)(e);
                    n.current = e;
                    var o = (0, r.useCallback)((function() {
                        for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                        return ("function" === typeof n.current ? n.current : function() {}).apply(t, (0, i.A)(r))
                    }), []);
                    return "function" === typeof e ? o : e
                }((function(n) {
                    e && e.current && !e.current.contains(n.target) && t(n)
                }));
                (0, r.useEffect)((function() {
                    return n ? (document.addEventListener("mousedown", o), document.addEventListener("touchstart", o), function() {
                        document.removeEventListener("mousedown", o), document.removeEventListener("touchstart", o)
                    }) : function() {}
                }), [n, o])
            }
        },
        CYxi: (e, t, n) => {
            "use strict";
            n.d(t, {
                cb: () => a,
                jH: () => o,
                sg: () => i
            });
            var r = n("tEf9"),
                i = function(e, t, n) {
                    var i, o;
                    return function() {
                        for (var a = arguments.length, s = new Array(a), l = 0; l < a; l++) s[l] = arguments[l];
                        if (null !== i && clearTimeout(i), n) {
                            var c = !i;
                            i = setTimeout((function() {
                                i = null
                            }), t), c && (o = e.apply(null, (0, r.A)(s)))
                        } else i = setTimeout((function() {
                            e.apply(null, (0, r.A)(s)), i = null
                        }), t);
                        return o
                    }
                };

            function o(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }

            function a(e) {
                return new Promise((function(t) {
                    return setTimeout(t, e)
                }))
            }
        },
        twSe: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => bt
            });
            var r = n("sViW"),
                i = n("Pz56"),
                o = n.n(i),
                a = n("TrCV"),
                s = n("DTvD"),
                l = n.n(s),
                c = n("gFET"),
                u = n("nsO7"),
                f = n("Vqct"),
                d = n("QxbJ"),
                p = n("dn+i"),
                m = n("qPem"),
                h = n("Rc2H"),
                v = n("T3Fm"),
                g = n("zVRS"),
                b = n("ezuS"),
                x = n("OzeQ"),
                y = n("eEXy"),
                w = n("qhd6"),
                A = n("BK9r"),
                E = n("BEuG"),
                S = n("EwqH"),
                N = n("WZ/o"),
                j = n("/OND"),
                k = n("l1yP"),
                T = n("wIZF"),
                C = n("Y4uf");
            const O = function(e) {
                return l().createElement(C.A, (0, T.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M11 6a5 5 0 110 10 5 5 0 010-10zm0-3a8 8 0 017.021 11.838l3.07 3.07-1.59 1.591-1.591 1.591-3.07-3.07A8 8 0 1111 3z",
                    fill: "currentColor"
                }))
            };
            var P = n("73Dv"),
                D = n("N/Ki"),
                M = function(e) {
                    return e.markets.search
                };
            const _ = function(e) {
                var t = e.isExpanded,
                    n = e.setIsExpanded,
                    r = (0, D.Ef)().t,
                    i = (0, D.Ef)().getI18n,
                    o = (0, j.d4)(M),
                    l = (0, s.useState)(o),
                    c = l[0],
                    f = l[1],
                    d = (0, j.wA)(),
                    p = (0, s.useCallback)((0, u.debounce)((function(e) {
                        d.markets.onSearch(e)
                    }), 250), []),
                    m = (0, s.useCallback)((function(e) {
                        f(e), p(e)
                    }), []);
                return t ? (0, a.jsxs)("div", {
                    className: "flex w-full flex-shrink-0 items-center justify-between gap-2xs ",
                    children: [(0, a.jsx)(P.A, {
                        onClick: function(e) {
                            e.stopPropagation(), (0, w.tm)(w.D1.searchClick)(), (0, k.sx)("click_markets_main_search")
                        },
                        id: "markets_main_search",
                        value: c,
                        variant: "line",
                        className: " t-Subtitle4 placeholder:t-Subtitle3 h-[40px] rounded-m border border-Line p-s py-2 placeholder:text-t-disabled [&:has(:focus-visible)]:border-primaryHover",
                        autoComplete: "off",
                        onChange: function(e) {
                            m(null !== e && void 0 !== e ? e : "")
                        },
                        prefix: (0, a.jsx)(O, {
                            onClick: function(e) {
                                e.stopPropagation()
                            },
                            size: 22,
                            color: "icon",
                            className: (0, N.cn)("align-middle text-t-disabled")
                        }),
                        placeholder: i("form-placeholder-searchCoin")
                    }), (0, a.jsx)("span", {
                        className: "t-Subtitle3 ",
                        children: r("common-cancel")
                    })]
                }) : (0, a.jsx)("div", {
                    className: "h-10",
                    children: (0, a.jsx)(O, {
                        onClick: function(e) {
                            n(!0), e.stopPropagation()
                        },
                        color: "icon",
                        className: "mt-[4px] h-6 w-6 align-middle text-PrimaryText"
                    })
                })
            };
            var I = n("CYxi"),
                L = n("WPrT"),
                R = (0, s.forwardRef)((function(e, t) {
                    var n = e.className,
                        r = (0, D.Ef)().getI18n,
                        i = (0, L.Q)().search,
                        o = (0, s.useState)(i),
                        l = o[0],
                        c = o[1],
                        f = (0, j.wA)(),
                        d = (0, s.useCallback)((0, I.sg)((function(e) {
                            f.markets.onSearch(e)
                        }), 250), []),
                        p = (0, s.useCallback)((function(e) {
                            c(e), d(e)
                        }), []);
                    return (0, a.jsx)(P.A, {
                        ref: t,
                        onClick: function(e) {
                            e.stopPropagation(), (0, w.tm)(w.D1.searchClick)(), (0, k.sx)("click_markets_main_search")
                        },
                        id: "markets_main_search",
                        value: l,
                        variant: "line",
                        className: (0, N.cn)("t-Subtitle4  placeholder:t-Subtitle3 group h-[40px] w-[34px] rounded-m border-0 pr-0 transition-all ease-in-out placeholder:text-t-disabled", "hover:w-[282px] hover:border hover:border-Line hover:pr-s ", "[&:has(:focus-visible)]:w-[282px] [&:has(:focus-visible)]:border [&:has(:focus-visible)]:border-primaryHover [&:has(:focus-visible)]:pr-s", !(0, u.isEmpty)(l.trim()) && "w-[282px] border border-Line pr-s", "overflow-x-hidden", n),
                        autoComplete: "off",
                        onChange: function(e) {
                            p(null !== e && void 0 !== e ? e : "")
                        },
                        prefix: (0, a.jsx)(O, {
                            onClick: function(e) {
                                e.stopPropagation()
                            },
                            size: 22,
                            color: "icon",
                            className: (0, N.cn)(" align-middle text-PrimaryText group-hover:text-t-disabled  group-[:has(:focus-visible)]:text-t-disabled", !(0, u.isEmpty)(l.trim()) && "text-t-disabled")
                        }),
                        placeholder: r("form-placeholder-searchCoin")
                    })
                }));
            const F = l().memo(R);
            var B = n("M5j3"),
                z = n("6aZm"),
                V = n("LCuF"),
                H = (0, z.UF)("uikit-core", "Tag"),
                W = (0, s.forwardRef)((function(e, t) {
                    return H(), l().createElement(V.A, (0, B.A)({
                        ref: t,
                        as: "div",
                        tx: "tag",
                        variant: "default"
                    }, e, {
                        __css: {
                            display: "inline-block"
                        }
                    }))
                }));
            W.displayName = "Tag";
            const q = W;
            var U = n("9rW+"),
                G = n("14bH"),
                K = n("KChd"),
                $ = n("X6Py"),
                Y = n("VP0d"),
                Z = n("cjvU");
            const Q = function() {
                var e = (0, Z.dd)().showFutures,
                    t = (0, Z.pD)();
                return (0, s.useMemo)((function() {
                    return [!(null === t || void 0 === t ? void 0 : t.includes("market_favorite")) && D.Gs.FAVORITE, !(null === t || void 0 === t ? void 0 : t.includes("market_allcryptos")) && D.Gs.INFO, !(null === t || void 0 === t ? void 0 : t.includes("market_spot")) && D.Gs.SPOT, e && D.Gs.FUTURES, !(null === t || void 0 === t ? void 0 : t.includes("market_new_listing")) && D.Gs.NEWLISTING, !(null === t || void 0 === t ? void 0 : t.includes("market_zones")) && D.Gs.ZONES].filter(Boolean)
                }), [JSON.stringify([t, e])])
            };
            var X = (0, b.A)({}, D.Gs.ZONES, "common-zone"),
                J = n("2qHp"),
                ee = n("NqUm"),
                te = K.A.TabPane;
            const ne = l().memo((function(e) {
                var t = e.className,
                    n = function() {
                        var e = (0, D.Ef)().getI18n,
                            t = Q(),
                            n = (0, s.useMemo)((function() {
                                return t.map((function(t) {
                                    var n = (0, Y.A)(t.split("@"), 2),
                                        r = n[0],
                                        i = n[1];
                                    return {
                                        tagText: i ? e("tags-".concat(i)) : "",
                                        value: r,
                                        text: e("tabs-".concat(r), e(X[r]))
                                    }
                                }))
                            }), [e, t]);
                        return {
                            tabList: n
                        }
                    }().tabList,
                    r = (0, J.kx)(),
                    i = (0, p.Rm)().spotTabsWithOrder,
                    o = (0, A.g)().activeTab,
                    l = void 0 === o ? D.Gs.INFO : o,
                    c = (0, s.useCallback)((function(e) {
                        var t, r = null === (t = n[e]) || void 0 === t ? void 0 : t.value;
                        "trading_data" === r ? (0, w.tm)(w.D1.viewTradingData)() : "moves" === r ? (0, w.tm)(w.D1.viewMoves)() : (0, w.tm)(w.D1.tabMainClick)({
                            df_9: D.au[r],
                            extraInfo: {
                                tab: D.au[r],
                                df_9: D.au[r]
                            }
                        })
                    }), []),
                    u = n.findIndex((function(e) {
                        return e.value === l
                    })),
                    f = (0, A.rd)();
                return u < 0 && f.replace((0, $.v)(n[0].value)), (0, a.jsx)(K.A, {
                    variant: "default",
                    onChange: function(e) {
                        c(e)
                    },
                    className: (0, N.cn)("relative noH5:py-2 mobile:[&>*:first-child]:gap-m [&>*]:overflow-y-hidden", "after:[&_div]:bg-primary after:[&_div]:bg-none", "[&>*>div]:pt-0 [&>*>div]:pb-[6px]", "[&>*:last-child]:h-0", t),
                    initialIndex: u >= 0 ? u : 0,
                    selectedIndex: u >= 0 ? u : 0,
                    children: n.map((function(e) {
                        var t, n, o = e.value,
                            s = e.text,
                            l = e.tagText;
                        return (0, a.jsx)(te, {
                            tabNode: (0, a.jsxs)(a.Fragment, {
                                children: [l ? (0, a.jsx)(q, {
                                    sx: {
                                        mr: "xs",
                                        py: "3px"
                                    },
                                    children: l
                                }) : null, (0, a.jsxs)(U.Ap, {
                                    sx: {
                                        cursor: "pointer",
                                        fontSize: "14px",
                                        lineHeight: "20px"
                                    },
                                    id: "market_sector_".concat(D.au[o] || o),
                                    children: [(0, a.jsx)(G.N, {
                                        to: o === D.Gs.SPOT ? (0, $.v)("".concat(D.Gs.SPOT, "-").concat(null === i || void 0 === i || null === (t = i[0]) || void 0 === t || null === (n = t.tag) || void 0 === n ? void 0 : n.toUpperCase())) : (0, $.v)(o),
                                        prefetch: !1,
                                        style: {
                                            position: "absolute",
                                            top: 0,
                                            bottom: 0,
                                            left: 0,
                                            right: 0,
                                            margin: "auto"
                                        },
                                        onClick: function() {
                                            o === D.Gs.SPOT && (0, J.e6)()
                                        }
                                    }), (0, a.jsx)("div", {
                                        className: "flex justify-center",
                                        children: (0, a.jsx)("div", {
                                            className: "subtitle2-1",
                                            children: s
                                        })
                                    })]
                                }), o === D.Gs.SPOT && !r && (0, a.jsx)(ee.Q, {})]
                            })
                        }, o)
                    }))
                })
            }));
            const re = function() {
                var e = (0, s.useState)(!1),
                    t = e[0],
                    n = e[1];
                (0, S.M)("click", (function() {
                    n(!1)
                }));
                var r = (0, y.Q)().isMobile;
                return (0, a.jsxs)("div", {
                    className: " flex w-full justify-between mobile:my-m pc:h-[48px] ",
                    children: [(0, a.jsx)(ne, {
                        className: (0, N.cn)("no-scrollbar mobile:flex-shrink-1 mobile:justify-center mobile:overflow-x-scroll mobile:peer-focus:hidden", t && "mobile:basis-0")
                    }), (0, a.jsx)(F, {
                        className: "mobile:hidden"
                    }), r && (0, a.jsx)(_, {
                        isExpanded: t,
                        setIsExpanded: n
                    })]
                })
            };
            var ie = n("c6HY"),
                oe = n("A22g"),
                ae = n("Srb9"),
                se = n("OKx2"),
                le = n("eh2c"),
                ce = n("O94r"),
                ue = n.n(ce),
                fe = n("7I3l"),
                de = n.n(fe),
                pe = n("2OVm"),
                me = n("UkUV"),
                he = Math.floor,
                ve = function(e) {
                    return he(100 * e) / 100
                },
                ge = !(0, se.dg)() || {
                    passive: !0,
                    capture: !0
                },
                be = l().Fragment;
            const xe = function(e) {
                function t(t) {
                    var n = e.call(this, t) || this;
                    n.count = 0, n.timer = -1, n.pulling = !1, n.unmount = !1, n.pullElement = null, n.onMouse = function(e) {
                        var t = n.props.autoplay,
                            r = e.type;
                        e.currentTarget === e.target && t && ("mouseenter" === r ? n.pause() : n.autoplay())
                    }, n.onResize = (0, le.nF)((function() {
                        n.unmount || n.switchSlide(n.state.activeIndex, !1)
                    }), 100 / 6), n.autoplay = function() {
                        var e = n.props.interval;
                        n.pulling || -1 !== n.timer || (n.timer = setTimeout((function() {
                            n.unmount || (n.switchNext(!0), n.timer = -1, n.autoplay())
                        }), e))
                    }, n.pause = function() {
                        -1 !== n.timer && (clearTimeout(n.timer), n.timer = -1)
                    }, n.getTranslateIndex = function(e) {
                        var t = n.getCircular(),
                            r = n.props.slidesPerGroup;
                        return t ? e + r : e
                    }, n.indexGetter = function(e) {
                        var t = n.count,
                            r = n.getCircular(),
                            i = n.props,
                            o = i.slidesPerGroup,
                            a = i.slidesPerView,
                            s = he(a),
                            l = Math.max(0, t - s),
                            c = e,
                            u = e;
                        return c > 0 && o > 1 && (c += 1), r ? c < 0 ? u = c % t + t : c > l && (u = c % t) : (c < 0 ? c = 0 : c > l && (c = l), u = c), {
                            current: he(c / o) * o,
                            activeIndex: he(u / o) * o
                        }
                    }, n.switchPrev = function(e) {
                        var t = n.props.slidesPerGroup,
                            r = n.state.activeIndex;
                        n.switchSlide(r - t, e)
                    }, n.switchNext = function(e) {
                        var t = n.props.slidesPerGroup,
                            r = n.state.activeIndex;
                        n.switchSlide(r + t, e)
                    }, n.switchSlide = function(e, t) {
                        var r = n.props.onSlide,
                            i = n.indexGetter(e),
                            o = i.current,
                            a = i.activeIndex,
                            s = n.calculateDistance({
                                translateIndex: n.getTranslateIndex(o)
                            }),
                            l = s.translateX,
                            c = s.translateY,
                            u = function() {
                                !n.unmount && n.pullElement && (n.setState({
                                    activeIndex: a
                                }), n.pullElement.animateTo(l, c).then((function() {
                                    r(a), o !== a && n.switchSlide(a, !1)
                                })))
                            };
                        t || [null, void 0].indexOf(t) > -1 ? u() : (n.pullElement.setTranslate(l, c), pe.A.checkViewport(), setTimeout((function() {
                            return u()
                        }), 100))
                    }, n.calculateDistance = function(e) {
                        var t = n.isLtr(),
                            r = n.pxGetter(n.props.gap),
                            i = n.isHorizontal(),
                            o = n.getPadOffset(),
                            a = o.width,
                            s = o.height,
                            l = t ? e.translateIndex : -e.translateIndex,
                            c = ve((+a + r) * l),
                            u = ve((+s + r) * l);
                        return {
                            translateX: i ? -c : 0,
                            translateY: i ? 0 : -u
                        }
                    };
                    var r = t.initialSlide,
                        i = t.circular;
                    if (t.autoplay && !i) throw new Error("autoplay must be circular");
                    return n.state = {
                        activeIndex: r,
                        isClient: !1
                    }, n
                }
                return (0, T.__extends)(t, e), t.prototype.componentDidMount = function() {
                    this.setState({
                        isClient: !0
                    }), this.initPullElement(), this.onResize(), this.eventConvert(!0)
                }, t.prototype.eventConvert = function(e) {
                    var t = this.$refs.target,
                        n = e ? "addEventListener" : "removeEventListener";
                    if (window[n]("resize", this.onResize, ge), n in t) {
                        var r = t.parentNode;
                        r[n]("mouseenter", this.onMouse, ge), r[n]("mouseleave", this.onMouse, ge)
                    }
                }, t.prototype.componentDidUpdate = function(e) {
                    var t = this.props,
                        n = t.slidesPerView,
                        r = t.autoplay,
                        i = t.circular;
                    if (r && !i) throw new Error("autoplay must be circular");
                    l().Children.count(e.children) === this.count && this.props.dir === e.dir && this.props.vertical === e.vertical || (console.log("re initPullElement"), this.pullElement && this.pullElement.destroy(), this.initPullElement()), i === e.circular && r === e.autoplay && n === e.slidesPerView || (this[r ? "autoplay" : "pause"](), this.onResize())
                }, t.prototype.componentWillUnmount = function() {
                    this.pause(), this.eventConvert(), this.unmount = !0, this.pullElement && this.pullElement.destroy()
                }, t.prototype.getPadOffset = function() {
                    var e = this.props.slidesPerView,
                        t = this.getGapPx(),
                        n = this.isHorizontal(),
                        r = this.$refs.target || {
                            clientWidth: 0,
                            clientHeight: 0
                        },
                        i = r.clientWidth,
                        o = r.clientHeight,
                        a = (e - 1) * t;
                    return {
                        height: n ? 0 : ve((o - a) / e),
                        width: n ? ve((i - a) / e) : 0
                    }
                }, t.prototype.initPullElement = function() {
                    var e, t = this,
                        n = this.props,
                        r = n.autoplay,
                        i = n.initialSlide,
                        o = this.isHorizontal(),
                        a = this.isLtr();

                    function s() {
                        t.pulling = !0, t.pause()
                    }

                    function l(e) {
                        var n = e.translateX,
                            i = e.translateY;
                        this.preventDefault();
                        var s = t.state.activeIndex,
                            l = t.calculateDistance({
                                translateIndex: t.getTranslateIndex(s)
                            }),
                            c = l.translateX,
                            u = l.translateY,
                            f = o ? n - c : i - u;
                        f > 20 ? t[a ? "switchPrev" : "switchNext"](!0) : f < -20 ? t[a ? "switchNext" : "switchPrev"](!0) : t.switchSlide(s, !0), t.pulling = !1, r && t.autoplay()
                    }
                    var c = o ? "Left" : "Up",
                        u = o ? "Right" : "Down";
                    this.pullElement = new(de())(((e = {
                        wait: !1,
                        target: this.$refs.target,
                        transitionProperty: "transform"
                    })["onPull".concat(c)] = s, e["onPull".concat(u)] = s, e["onPull".concat(c, "End")] = l, e["onPull".concat(u, "End")] = l, e.translateZ = this.props.translateZ, e)), this.pullElement.init(), this.switchSlide(i, !1), r && this.autoplay()
                }, t.prototype.render = function() {
                    var e = this,
                        t = this.props,
                        n = t.className,
                        r = t.prefixCls,
                        i = void 0 === r ? "bn" : r,
                        o = t.slidesPerView,
                        a = t.slidesPerGroup,
                        s = t.children,
                        c = t.customPagination,
                        u = t.style,
                        f = this.state.activeIndex,
                        d = l().Children.count(s);
                    this.count = d;
                    var p = l().Children.toArray(s),
                        m = this.getCircular(),
                        h = "".concat(i, "-swiper");
                    if (m) {
                        var v = p.slice(0, a),
                            g = p.slice(-a);
                        p.push.apply(p, v), p.unshift.apply(p, g)
                    }
                    var b, x = this.isLtr(),
                        y = this.getGapPx(),
                        w = this.isHorizontal(),
                        A = ve((o - 1) * y / o),
                        E = p.map((function(e, t) {
                            var n = f === t;
                            m && (n = 0 === f ? t === a || t === d + a : f === d - 1 ? t === d + (a - 1) || t === a - 1 : f === t - a);
                            var r = {
                                width: "calc(".concat(ve(100 / o), "% - ").concat(A, "px)")
                            };
                            r[w ? x ? "marginRight" : "marginLeft" : "marginBottom"] = "".concat(y, "px");
                            var i = ue()("".concat(h, "-item"), {
                                active: n
                            });
                            return l().createElement("div", {
                                key: t,
                                className: i,
                                style: r,
                                children: e
                            })
                        }));
                    return "function" === typeof c && (b = c({
                        total: d,
                        currentIndex: f,
                        onClick: function(t) {
                            return e.switchSlide(t, !0)
                        }
                    })), l().createElement("div", {
                        className: ue()(h, {
                            vertical: !w
                        }, n),
                        style: u
                    }, l().createElement("div", {
                        className: "".concat(h, "-wrapper"),
                        ref: this.setRefs("target"),
                        children: E
                    }), b)
                }, t.prototype.getCircular = function() {
                    var e = this.props,
                        t = e.circular,
                        n = e.slidesPerGroup;
                    return this.state.isClient && t && this.count > n
                }, t.prototype.isHorizontal = function() {
                    return !this.props.vertical
                }, t.prototype.isLtr = function() {
                    return "ltr" === this.props.dir
                }, t.prototype.getGapPx = function() {
                    return parseFloat(this.props.gap)
                }, t.prototype.pxGetter = function(e) {
                    return parseFloat(e)
                }, t.defaultProps = {
                    gap: "0px",
                    initialSlide: 0,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    autoplay: !1,
                    interval: 5e3,
                    vertical: !1,
                    translateZ: !0,
                    onSlide: function() {
                        return !1
                    },
                    dir: "ltr"
                }, t
            }(me.A);
            var ye = n("STQw"),
                we = (0, s.forwardRef)((function(e, t) {
                    var n = (0, ye.r)(),
                        r = n.prefixCls,
                        i = n.isRTL ? "rtl" : "ltr";
                    return l().createElement(xe, (0, T.__assign)({}, e, {
                        ref: t,
                        dir: i,
                        prefixCls: r
                    }))
                })),
                Ae = (0, s.forwardRef)((function(e, t) {
                    return l().createElement(be, (0, T.__assign)({}, e, {
                        ref: t
                    }))
                }));
            const Ee = we;
            var Se = n("BQ33"),
                Ne = n.n(Se),
                je = n("ZIan"),
                ke = n("AcsR");
            const Te = function(e) {
                return l().createElement(C.A, (0, T.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M21 11.999l-7.071-7.071-1.768 1.768 4.055 4.054H2.999v2.5h13.216l-4.054 4.053 1.768 1.768L21 12v-.001z",
                    fill: "currentColor"
                }))
            };
            var Ce = n("q7iy"),
                Oe = n("WTfh"),
                Pe = n("5MVY"),
                De = n.n(Pe),
                Me = n("vm2h"),
                _e = n.n(Me);
            const Ie = function(e, t) {
                var n = (0, s.useRef)((function() {}));
                (0, s.useEffect)((function() {
                    n.current = e
                })), (0, s.useEffect)((function() {
                    if (null !== t) {
                        var e = setInterval((function() {
                            return n.current()
                        }), t || 0);
                        return function() {
                            return clearInterval(e)
                        }
                    }
                }), [t])
            };
            Ne().extend(De()), Ne().extend(_e());
            var Le = function(e) {
                    var t = function() {
                            var t = Ne()(),
                                n = Ne()(e),
                                r = Ne().duration(n.diff(t)),
                                i = Math.floor(r.asDays()),
                                o = r.hours(),
                                a = r.minutes(),
                                s = r.seconds();
                            return (0, u.mapValues)({
                                D: i,
                                H: o,
                                M: a,
                                S: s
                            }, (function(e) {
                                return (0, u.padStart)(e.toString(), 2, "0")
                            }))
                        },
                        n = (0, s.useState)((function() {
                            return t()
                        })),
                        r = n[0],
                        i = n[1];
                    return Ie((function() {
                        i(t())
                    }), 200), r
                },
                Re = n("3Wf2"),
                Fe = n("c7kX");
            const Be = function(e) {
                var t = e.item,
                    n = e.className,
                    r = (0, D.Ef)().getI18n;
                (0, p.Rm)();
                var i = t.timestamp,
                    o = void 0 === i ? 0 : i,
                    s = t.descriptionType,
                    l = Le(o);
                return (0, a.jsxs)("div", {
                    className: (0, N.cn)(" flex mobile:flex-col mobile:items-end  mobile:gap-3xs tablet:flex-col tablet:items-end tablet:gap-2xs pc:items-center pc:gap-[14px]", n),
                    children: [(0, a.jsx)("div", {
                        className: "t-Body3 mobile:t-caption1 whitespace-nowrap",
                        children: function() {
                            switch (s) {
                                case "willOpen":
                                    return r("upcoming-listing-trade-opening-time", "Will be open for trading in");
                                case "endIn":
                                    return r("upcoming-listing-trade-ending-time", "End in");
                                default:
                                    return null
                            }
                        }()
                    }), (0, a.jsx)("div", {
                        className: "flex items-center gap-4xs mobile:gap-2xs",
                        children: Object.entries(l).filter((function(e, t) {
                            return Object.values(l).slice(0, t + 1).some((function(e) {
                                return "00" !== e
                            }))
                        })).map((function(e) {
                            var t = (0, Y.A)(e, 2),
                                n = t[0],
                                r = t[1];
                            return (0, a.jsxs)("div", {
                                className: " flex items-center gap-5xs tablet:last:pr-0 noH5:px-2xs",
                                children: [(0, a.jsx)("div", {
                                    className: "t-Subtitle1 mobile:subtitle2-1",
                                    children: r
                                }), (0, a.jsx)("div", {
                                    className: "t-Body3 mobile:t-Caption2 ",
                                    children: n
                                })]
                            }, n)
                        }))
                    })]
                })
            };
            var ze = n("C52N");
            const Ve = function(e) {
                var t = e.item,
                    n = e.className,
                    r = e.children,
                    i = t.slug;
                return (0, a.jsx)(ze.A, {
                    target: "_blank",
                    path: "/price/".concat(i),
                    className: (0, N.cn)("t-Btn_link2  hover:text-primaryHover", n),
                    onClick: function(e) {
                        e.stopPropagation()
                    },
                    children: r
                })
            };

            function He(e) {
                var t = e.item,
                    n = e.className,
                    r = (0, D.Ef)().getI18n,
                    i = (0, je.Bl)(),
                    o = (0, p.Rm)().crossMargins,
                    l = t.fullName,
                    c = t.baseAsset,
                    u = t.quoteAsset,
                    f = t.timestamp,
                    d = void 0 === f ? 0 : f,
                    m = t.upcomingType,
                    h = Le(d),
                    v = (0, s.useRef)(null),
                    g = (0, y.Q)().isMobile;
                return (0, a.jsx)("div", {
                    className: (0, N.cn)("flex w-full items-center mobile:h-[80px] tablet:h-[88px] pc:h-[72px]", n),
                    children: (0, a.jsxs)("div", {
                        className: "flex h-full grow cursor-pointer flex-row items-center justify-between gap-2xs rounded-xl border border-solid border-Line px-m",
                        onClick: function(e) {
                            var t;
                            (null === v || void 0 === v || null === (t = v.current) || void 0 === t ? void 0 : t.contains(e.target)) || ((0, w.tm)(w.D1.marketsUpcomingListingTradeClick)({
                                extraInfo: {
                                    df_10: [c, u].join("/")
                                }
                            }), window.open((0, Re.A)({
                                baseAsset: c,
                                quoteAsset: u
                            }, o, i), "_blank"))
                        },
                        children: [(0, a.jsxs)("div", {
                            className: " flex items-center gap-2xs",
                            children: [(0, a.jsx)(Oe.L, {
                                iconUrl: "".concat(ke.K5, "/static/assets/logos/").concat(c, ".png"),
                                iconDesc: c,
                                className: "tablet:h-8 tablet:w-8 pc:h-8 pc:w-8"
                            }), (0, a.jsxs)("div", {
                                className: "flex items-center gap-2xs mobile:flex-col mobile:items-start mobile:gap-4xs",
                                children: [(0, a.jsxs)("div", {
                                    className: "flex flex-row items-center gap-4xs",
                                    children: [(0, a.jsx)("div", {
                                        className: "t-headline5 ",
                                        children: c
                                    }), (0, a.jsx)("div", {
                                        className: " t-body3 whitespace-nowrap text-t-Tertiary mobile:hidden ",
                                        children: l
                                    })]
                                }), function() {
                                    switch (m) {
                                        case "preMarket":
                                            return (0, a.jsx)(Fe.A, {
                                                size: g ? "small" : "middle"
                                            });
                                        case "newListing":
                                            return (0, a.jsx)(Ce.A, {
                                                label: r("new-listing-badge", "New Listing"),
                                                size: g ? "small" : "middle",
                                                variant: "warn"
                                            })
                                    }
                                }()]
                            })]
                        }), null == d || Object.values(h).every((function(e) {
                            return "00" === e
                        })) || Ne()(d).isBefore(Ne()()) ? (0, a.jsx)(Ve, {
                            item: t,
                            className: "pc:hidden",
                            children: (0, a.jsx)(Te, {
                                className: "h-6 w-6"
                            })
                        }) : (0, a.jsx)(Be, {
                            item: t
                        }), (0, a.jsx)(Ve, {
                            item: t,
                            className: " mobile:hidden tablet:hidden",
                            children: r("action-detail")
                        })]
                    })
                })
            }

            function We(e) {
                var t = e.info,
                    n = e.className,
                    r = (0, ae.L)().comingListings,
                    i = t.currentIndex,
                    o = t.onClick;
                return (0, a.jsx)("div", {
                    className: (0, N.cn)("flex w-full justify-center gap-4xs ", n, r.length < 2 && "hidden"),
                    children: r.map((function(e, t) {
                        return (0, a.jsx)("button", {
                            className: (0, N.cn)("!h-[3px] !w-[8px]  cursor-pointer", i === t ? " bg-t-Primary" : "bg-Line"),
                            "data-active": i === t,
                            onClick: function() {
                                o(t)
                            }
                        }, t)
                    }))
                })
            }
            const qe = l().memo(We);
            const Ue = function() {
                var e = (0, ae.L)().comingListings;
                return (0, a.jsx)(Ee, {
                    initialSlide: 0,
                    circular: !0,
                    autoplay: !0,
                    customPagination: function(e) {
                        return (0, a.jsx)(qe, {
                            info: e
                        })
                    },
                    className: "-mb-2xs w-full px-0 pt-m ",
                    children: e.map((function(e) {
                        return (0, a.jsx)(Ae, {
                            children: (0, a.jsx)(He, {
                                item: e,
                                className: "mb-2xs"
                            })
                        }, e.symbol)
                    }))
                })
            };
            var Ge = (0, s.lazy)((function() {
                    return Promise.all([n.e(995), n.e(26), n.e(615), n.e(639), n.e(691), n.e(306)]).then(n.bind(n, "o3Uz"))
                })),
                Ke = (0, s.lazy)((function() {
                    return Promise.all([n.e(995), n.e(26), n.e(615), n.e(639), n.e(691), n.e(678)]).then(n.bind(n, "Hq0g"))
                })),
                $e = (0, s.lazy)((function() {
                    return n.e(733).then(n.bind(n, "zH1E"))
                })),
                Ye = (0, s.lazy)((function() {
                    return Promise.all([n.e(995), n.e(26), n.e(615), n.e(639), n.e(691), n.e(821)]).then(n.bind(n, "wCdt"))
                })),
                Ze = (0, s.lazy)((function() {
                    return n.e(620).then(n.bind(n, "VqcQ"))
                })),
                Qe = (0, w._9)({
                    quitID: void 0,
                    viewID: w.D1.visitMarkets
                }),
                Xe = function() {
                    return (0, a.jsx)("div", {
                        className: "min-h-[24px]"
                    })
                },
                Je = function() {
                    (0, oe.E)(), (0, s.useEffect)(Qe, []);
                    var e = (0, A.g)().activeTab,
                        t = void 0 === e ? x.G.INFO : e,
                        n = Q(),
                        r = (0, s.useMemo)((function() {
                            var e;
                            return n.includes(t) && (e = {}, (0, b.A)(e, x.G.FAVORITE, Ge), (0, b.A)(e, x.G.SPOT, Ye), (0, b.A)(e, x.G.FUTURES, Ke), (0, b.A)(e, x.G.NEWLISTING, $e), (0, b.A)(e, x.G.ZONES, Ze), e)[t] || Xe
                        }), [t, n]);
                    return (0, a.jsxs)("div", {
                        className: "bg-bg1",
                        children: [t === x.G.INFO && (0, a.jsx)(E.A, {}), t !== x.G.INFO && v.o && (0, a.jsx)(s.Suspense, {
                            fallback: (0, a.jsx)(Xe, {}),
                            children: (0, a.jsx)(r, {})
                        })]
                    })
                },
                et = function() {
                    var e = (0, ie.$)().setPagination,
                        t = (0, y.Q)().isMobile;
                    return (0, a.jsx)("div", {
                        onClick: function() {
                            e(1)
                        },
                        className: "top-0 flex items-center justify-between bg-bg1 mobile:flex-col-reverse",
                        children: (0, a.jsx)("div", {
                            className: "flex w-full flex-col",
                            children: (0, a.jsxs)("div", {
                                className: "mb-2xs w-full mobile:-mb-[4px] mobile:px-m pc:px-0",
                                children: [(0, a.jsx)(f.A, {
                                    whenIdle: !0,
                                    children: t && (0, a.jsx)(Ue, {})
                                }), (0, a.jsx)(f.A, {
                                    whenIdle: !0,
                                    children: (0, a.jsx)(re, {})
                                })]
                            })
                        })
                    })
                },
                tt = n("BK7R"),
                nt = n("QUKP"),
                rt = n("u6DZ"),
                it = n.n(rt),
                ot = n("q5Na"),
                at = n("Mtrz"),
                st = n("zkm6"),
                lt = n("tpDn"),
                ct = n("HS2I"),
                ut = n("dZDg"),
                ft = function(e) {
                    var t = e.symbol,
                        n = e.idx,
                        r = e.baseAsset,
                        i = e.quoteAsset,
                        o = e.titleKey,
                        l = e.specialAsset,
                        c = void 0 !== l && l;
                    (0, st.A)();
                    var u = (0, ae.L)().diffPrices[t],
                        f = (0, J.Gw)(null === u || void 0 === u ? void 0 : u.open, null === u || void 0 === u ? void 0 : u.close),
                        d = f >= 0,
                        p = (c ? [i, r || ke.jr] : [r || ke.jr, i || ke.jr]).join("_"),
                        m = ke.cp ? "binance://trade/spot/".concat(p, "?_from=markets") : "/trade/".concat(p, "?_from=markets"),
                        h = (0, s.useCallback)((function() {
                            var e = k.Au.BINANCEPAGEVIEW,
                                t = "marketpair-1-".concat(n + 1);
                            (0, k.kz)(t, "webclick"), (0, w.tm)(w.D1.hotCardClick)({
                                extraInfo: {
                                    title: o,
                                    pairs: r,
                                    index: n,
                                    linkName: p,
                                    df_9: o,
                                    df_10: r,
                                    df_11: n
                                }
                            }), (0, J.be)({
                                baseAsset: r,
                                quoteAsset: i,
                                id: "hot_card_trade_item",
                                index: n
                            }), (0, k.sx)(e, t), (0, k.dE)(e, t), (0, ut.o8)(t)
                        }), [r, n, p, i, o]),
                        v = (0, ct.useFiatPrice)(),
                        g = c ? v(1, r) : v(parseFloat(null === u || void 0 === u ? void 0 : u.close), i),
                        b = g.symbol,
                        x = g.fiatPriceNumber;
                    return (0, a.jsxs)(ze.A, {
                        path: m,
                        target: "_blank",
                        onClick: h,
                        className: "flex cursor-pointer items-stretch justify-between rounded-m p-2xs hover:bg-selectedBg",
                        children: [(0, a.jsxs)("div", {
                            className: "t-Subtitle4 flex w-[95px] flex-[90] items-center gap-2xs ",
                            children: [(0, a.jsx)("img", {
                                "data-ot-ignore": "",
                                alt: "".concat(r, "-logo"),
                                height: 24,
                                width: 24,
                                src: "".concat(ke.K5, "/static/assets/logos/").concat(r, ".png"),
                                className: "rounded-[50%]"
                            }), (0, a.jsx)("div", {
                                className: " !line-clamp-1 break-all",
                                children: r
                            })]
                        }), (0, a.jsx)("div", {
                            className: "t-Body3 !line-clamp-1 w-[85px] flex-[85] items-center overflow-hidden mobile:hidden tablet:hidden pc:flex ",
                            children: "".concat(b).concat((0, J.sz)(x))
                        }), (0, a.jsx)("div", {
                            className: (0, N.cn)("t-Subtitle4 flex flex-[52] justify-end", !Number.isFinite(f) || Number.isNaN(f) ? "" : d ? "text-t-TextBuy" : "text-t-TextSell"),
                            children: (0, J.UD)(f)
                        })]
                    })
                };
            const dt = (0, s.memo)(ft);
            var pt;
            ! function(e) {
                e.TopGainer = "top-gainer", e.TopVolume = "top-volumn", e.TopHighlight = "top-highlight", e.TabsNewListing = "tabs-newListing"
            }(pt || (pt = {}));
            var mt = function() {
                var e, t = (0, st.A)(),
                    n = (0, D.Ef)(),
                    r = n.t,
                    i = n.i18n.language,
                    o = (0, p.Rm)().symbolList,
                    l = void 0 === o ? [] : o,
                    c = (0, ae.L)(),
                    u = c.diffPrices,
                    f = c.overviewHotCoins,
                    d = c.byVolume,
                    m = c.byNewListing,
                    h = (0, Z.pD)(),
                    v = (0, A.rd)(),
                    g = (0, s.useMemo)((function() {
                        return it()(l, (function(e) {
                            var t = (null === u || void 0 === u ? void 0 : u[e.symbol]) || {},
                                n = t.open,
                                r = t.close;
                            return -(0, J.Gw)(n, r)
                        })).slice(0, lt.e_)
                    }), [t, l]),
                    x = (e = {}, (0, b.A)(e, pt.TopGainer, g), (0, b.A)(e, pt.TopVolume, d), (0, b.A)(e, pt.TopHighlight, f), (0, b.A)(e, pt.TabsNewListing, m), e),
                    y = (0, s.useCallback)((function(e) {
                        switch (e) {
                            case pt.TopHighlight:
                            case pt.TopGainer:
                            case pt.TopVolume:
                                return function() {
                                    v.push((0, $.v)(ot.d.TradingData))
                                };
                            case pt.TabsNewListing:
                                return function() {
                                    v.push((0, $.v)(D.Gs.NEWLISTING))
                                };
                            default:
                                return null
                        }
                    }), [v]),
                    E = (0, s.useMemo)((function() {
                        return [!(null === h || void 0 === h ? void 0 : h.includes("market_hot")) && pt.TopHighlight, !(null === h || void 0 === h ? void 0 : h.includes("market_new_listing_card")) && pt.TabsNewListing, !(null === h || void 0 === h ? void 0 : h.includes("market_top_gainer")) && pt.TopGainer, !(null === h || void 0 === h ? void 0 : h.includes("market_top_volume")) && pt.TopVolume].filter(Boolean)
                    }), [h]);
                return (0, a.jsx)("div", {
                    className: "w-full mobile:hidden tablet:block tablet:px-xl pc:block",
                    children: (0, a.jsx)("div", {
                        className: "ml-0 flex gap-m tablet:ml-auto pc:ml-auto",
                        children: E.map((function(e) {
                            return x[e]
                        })).map((function(e, t) {
                            var n = y(E[t]),
                                o = null != n;
                            return (0, a.jsxs)("div", {
                                className: " relative flex min-w-0 flex-1 shrink-0 basis-0 flex-col items-stretch gap-2xs rounded-xl border border-solid border-Line px-2xs pb-2xs pt-m no-underline transition duration-200 hover:bg-bg1",
                                children: [(0, a.jsxs)(ze.A, {
                                    className: (0, N.cn)("flex items-center justify-between px-2xs", o && "cursor-pointer"),
                                    onClick: function(e) {
                                        e.preventDefault(), o && ((0, w.tm)(w.D1.marketsCardMoreClick)({
                                            extraInfo: {
                                                df_9: E[t]
                                            }
                                        }), n())
                                    },
                                    path: function() {
                                        switch (E[t]) {
                                            case pt.TopHighlight:
                                            case pt.TopGainer:
                                            case pt.TopVolume:
                                                return (0, $.v)(ot.d.TradingData);
                                            case pt.TabsNewListing:
                                                return (0, $.v)(D.Gs.NEWLISTING)
                                        }
                                    }(),
                                    children: [(0, a.jsx)("div", {
                                        className: "t-Caption1 text-PrimaryText",
                                        children: "en-GB" === i && "top-highlight" === E[t] ? r("card-title-mostTraded", "Most Traded") : r(E[t])
                                    }), o && (0, a.jsxs)("div", {
                                        className: "t-Caption1 group flex items-center text-PrimaryText",
                                        children: [r("common-more", "More"), (0, a.jsx)(at.A, {
                                            size: 12,
                                            className: " text-iconNormal group-hover:text-PrimaryText"
                                        })]
                                    })]
                                }), (0, a.jsx)("div", {
                                    children: e.map((function(e, n) {
                                        return (0, s.createElement)(dt, (0, nt.A)((0, tt.A)({}, e), {
                                            idx: n,
                                            key: n,
                                            titleKey: E[t]
                                        }))
                                    }))
                                })]
                            }, t)
                        }))
                    })
                })
            };
            const ht = (0, s.memo)(mt);
            var vt = n("6Zk3");
            const gt = function() {
                var e = (0, ae.L)().comingListings;
                return (0, a.jsx)(Ee, {
                    initialSlide: 0,
                    circular: !0,
                    autoplay: !0,
                    customPagination: function(e) {
                        return (0, a.jsx)(qe, {
                            info: e,
                            className: " py-2xs"
                        })
                    },
                    className: (0, N.cn)("mobile:hidden", e.length < 2 && "pb-[19px]"),
                    children: e.map((function(e) {
                        return (0, a.jsx)(Ae, {
                            children: (0, a.jsx)(He, {
                                item: e
                            })
                        }, e.symbol)
                    }))
                })
            };
            const bt = function() {
                var e = (0, vt.A)(),
                    t = (0, p.Rm)(),
                    n = t.loginCsrOverrideFinished,
                    i = t.symbolList,
                    l = t.coinToFilter,
                    b = (0, m.Q)().productMap,
                    x = (0, ae.L)();
                (0, d.A)("loginCsrOverrideFinished ".concat(n), (0, r.A)(o().mark((function t() {
                    var n;
                    return o().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (e) {
                                    t.next = 2;
                                    break
                                }
                                return t.abrupt("return");
                            case 2:
                                return t.next = 4, (0, lt.y5)(i, b, l);
                            case 4:
                                n = t.sent, Object.keys(x).forEach((function(e) {
                                    e in n && Object.assign(x[e], {}, n[e])
                                }));
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                }))));
                var y = (0, ae.L)().diffPrices,
                    w = (0, h.$H)().basisTimeZone;
                (0, d.A)("SPOT_TIMEZONE_OPEN_PRICE ".concat(n), (0, r.A)(o().mark((function e() {
                    var t, n;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (v.o) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return");
                            case 2:
                                return e.next = 4, (0, J.SZ)(w);
                            case 4:
                                t = e.sent, n = function() {
                                    (0, u.forOwn)(y, (function(e, n) {
                                        var r, i;
                                        (null === (r = t[n]) || void 0 === r ? void 0 : r.openToday) && (0, u.assign)(y[n], {
                                            open: null === (i = t[n]) || void 0 === i ? void 0 : i.openToday
                                        })
                                    }))
                                }, (null === window || void 0 === window ? void 0 : window.requestIdleCallback) ? window.requestIdleCallback(n) : n();
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))));
                var A = (0, c.Xr)(g.a);
                return (0, s.useEffect)((function() {
                    var e = null,
                        t = (0, J.Md)(w),
                        n = function(e) {
                            (0, u.forOwn)(y, (function(n, r) {
                                var i, o, a, s;
                                (null === (i = e[r]) || void 0 === i ? void 0 : i.o) && (0, u.assign)(y[r], null == t ? {
                                    open: parseFloat(null === (o = e[r]) || void 0 === o ? void 0 : o.o),
                                    close: parseFloat(null === (a = e[r]) || void 0 === a ? void 0 : a.c)
                                } : {
                                    close: parseFloat(null === (s = e[r]) || void 0 === s ? void 0 : s.c)
                                })
                            })), A((function(e) {
                                return e + 1
                            }))
                        };
                    return ke.f0.getStreamTickersWithWindowSizeRaw(null).subscribe((function(t) {
                        (null === window || void 0 === window ? void 0 : window.requestIdleCallback) ? (null != e && window.cancelIdleCallback(e), e = window.requestIdleCallback((function() {
                            return n(t)
                        }))) : n(t)
                    }))
                }), [ke.f0, n, w]), (0, a.jsxs)("div", {
                    className: "flex flex-col gap-m border-x-0 border-b-0 border-Line mobile:border-t mobile:border-solid",
                    children: [(0, a.jsx)(f.A, {
                        whenIdle: !0,
                        children: (0, a.jsx)(ht, {})
                    }), (0, a.jsx)("div", {
                        className: "flex flex-col gap-2xs px-0 tablet:px-xl",
                        children: (0, a.jsxs)("div", {
                            id: "tabContainer",
                            children: [(0, a.jsx)(f.A, {
                                whenIdle: !0,
                                children: (0, a.jsx)(gt, {})
                            }), (0, a.jsxs)(ie.d, {
                                children: [(0, a.jsx)(et, {}), (0, a.jsx)(Je, {})]
                            })]
                        })
                    })]
                })
            }
        },
        WTfh: (e, t, n) => {
            "use strict";
            n.d(t, {
                L: () => i
            });
            var r = n("TrCV");
            n("DTvD");
            const i = function(e) {
                var t = e.iconUrl,
                    n = e.iconDesc;
                return (0, r.jsx)("div", {
                    className: "flex shrink-0 items-center justify-center",
                    children: (0, r.jsx)("img", {
                        "data-ot-ignore": "",
                        src: t,
                        loading: "lazy",
                        alt: n,
                        className: "h-6 w-6 rounded-full"
                    })
                })
            }
        },
        BEuG: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => He,
                v: () => ze
            });
            var r = n("VP0d"),
                i = n("TrCV"),
                o = n("DTvD"),
                a = n.n(o),
                s = n("gFET"),
                l = n("nsO7"),
                c = n("Vqct"),
                u = n("5f9E"),
                f = n("dn+i"),
                d = n("LCuF"),
                p = n("C6y2"),
                m = n("KThP"),
                h = n("WPrT"),
                v = n("eEXy"),
                g = n("ZIan"),
                b = n("c6HY"),
                x = n("AcsR"),
                y = n("BK9r"),
                w = n("uHCZ"),
                A = n("kl3W"),
                E = n("N/Ki"),
                S = n("UwLn"),
                N = n("dZoT"),
                j = n("Wvnz"),
                k = n("HS2I"),
                T = n("SD7L"),
                C = n("zkm6"),
                O = n("2qHp"),
                P = n("WZ/o"),
                D = n("qhd6"),
                M = n("Srb9"),
                _ = n("xPup"),
                I = n("C52N"),
                L = n("rl+/"),
                R = n("WTfh"),
                F = n("c7kX"),
                B = n("0+yZ"),
                z = n("BK7R"),
                V = n("QUKP"),
                H = n("3Wf2"),
                W = n("3WzJ"),
                q = n("g8FI");
            const U = (0, o.forwardRef)((function(e, t) {
                var n = e.baseAsset,
                    o = e.quoteAsset,
                    a = e.tabType,
                    s = e.subTabType,
                    l = e.specialAsset,
                    c = e.btnText,
                    u = e.customLink,
                    d = (0, E.Ef)().getI18n,
                    p = (0, q.$)().tradeNowClick,
                    m = (0, f.Rm)().crossMargins,
                    v = (0, g.Bl)(),
                    b = (0, r.A)((0, h.l)(), 1)[0],
                    x = {
                        baseAsset: n,
                        quoteAsset: o,
                        tabType: a,
                        subTabType: s,
                        specialAsset: l,
                        lowContractType: void 0,
                        _type_: void 0
                    },
                    y = u || (0, H.A)({
                        baseAsset: n,
                        quoteAsset: o,
                        tabType: a,
                        subTabType: s,
                        specialAsset: l
                    }, m, v);
                t.current = function(e) {
                    (0, O.be)((0, V.A)((0, z.A)({}, x), {
                        id: "market_trade_list_item",
                        menuModule: b
                    })), p.bind(null, (0, V.A)((0, z.A)({}, x), {
                        customLink: u
                    }))(e)
                };
                var w = d(c);
                return (0, i.jsx)(i.Fragment, {
                    children: (0, i.jsx)("div", {
                        className: "flex items-center",
                        children: (0, i.jsx)(I.A, {
                            path: y,
                            target: "_blank",
                            className: "t-Btn_link2 flex cursor-pointer items-center text-PrimaryText underline hover:text-primaryHover",
                            onClick: function(e) {
                                e.stopPropagation(), p.bind(null, (0, V.A)((0, z.A)({}, x), {
                                    customLink: u,
                                    disableOpenLink: !0
                                }))
                            },
                            children: (0, i.jsx)(L.A, {
                                tooltips: w,
                                arrow: !0,
                                offset: 6,
                                placement: "bottom-end",
                                children: (0, i.jsx)(W.A, {
                                    className: "h-5 w-5",
                                    alt: w
                                })
                            })
                        })
                    })
                })
            }));
            var G = function(e) {
                var t, n = (0, E.Ef)().getI18n,
                    a = e.symbol,
                    l = e.fullName,
                    c = e.baseAsset,
                    u = e.quoteAsset,
                    f = e.tabType,
                    d = e.subTabType,
                    p = e.slug,
                    m = e.btnText,
                    h = e.index,
                    v = e.headerHeight,
                    g = e.isPreMarket,
                    b = e.volume,
                    y = e.marketCap,
                    w = e.specialAsset,
                    A = void 0 !== w && w;
                (0, C.A)();
                var S = (0, M.L)().diffPrices,
                    N = (0, r.A)((0, s.md)(T.G), 2),
                    j = N[0],
                    z = N[1],
                    V = (null == j ? null === S || void 0 === S ? void 0 : S[a] : null === z || void 0 === z ? void 0 : z[a]) || {},
                    H = V.open,
                    W = V.close,
                    q = (0, O.Gw)(H, W),
                    G = q >= 0,
                    K = (0, o.useRef)(null),
                    $ = (0, o.useRef)(null),
                    Y = (0, o.useCallback)((function(e) {
                        var t;
                        (null === $ || void 0 === $ || null === (t = $.current) || void 0 === t ? void 0 : t.contains(e.target)) ? (0, D.tm)(D.D1.rowDetailBtnClick)({
                            extraInfo: {
                                baseAsset: c,
                                df_9: c,
                                df_10: "/price/".concat(p)
                            }
                        }) : K.current(e)
                    }), [c, p]),
                    Z = n("action-detail"),
                    Q = (0, k.useFiatPrice)(),
                    X = Q(b, "USDT"),
                    J = X.symbol,
                    ee = X.fiatPriceNumber,
                    te = Q(1, c),
                    ne = (A ? te : Q(parseFloat(null === S || void 0 === S || null === (t = S[a]) || void 0 === t ? void 0 : t.close), u)).fiatPrice;
                return (0, i.jsxs)("div", {
                    onClick: Y,
                    className: "overview-table-row flex cursor-pointer text-PrimaryText no-underline",
                    children: [(0, i.jsx)(I.A, {
                        className: "w-[340px] tablet:w-[216px]",
                        target: "_blank",
                        path: "/price/".concat(p),
                        onClick: function(e) {
                            e.stopPropagation()
                        },
                        children: (0, i.jsxs)("div", {
                            className: "tab__column absolute left-0 z-[1] flex h-[64px] w-[340px] items-center justify-between text-bg1 tablet:w-[216px] ",
                            style: {
                                top: v + 64 * h
                            },
                            children: [(0, i.jsxs)("div", {
                                className: " flex items-center gap-2xs",
                                children: [(0, i.jsx)(R.L, {
                                    iconUrl: "".concat(x.K5, "/static/assets/logos/").concat(c, ".png"),
                                    iconDesc: c
                                }), (0, i.jsxs)("div", {
                                    className: "flex flex-wrap items-center gap-4xs ",
                                    children: [(0, i.jsx)("div", {
                                        className: "t-Subtitle3 text-PrimaryText",
                                        children: c
                                    }), (0, i.jsx)("div", {
                                        className: "t-Body3 line-clamp-1 text-t-third",
                                        children: l
                                    }), g && (0, i.jsx)(F.r, {})]
                                })]
                            }), (0, i.jsx)(B.A, {})]
                        })
                    }), (0, i.jsxs)("div", {
                        "data-area": "right",
                        className: "layout-ellipsis t-Body2 w-[148px] items-center",
                        children: [J, ne]
                    }), (0, i.jsx)("div", {
                        "data-area": "right",
                        className: (0, P.cn)(" t-Subtitle3 layout-ellipsis w-[148px]", Number.isFinite(q) ? G ? "text-t-TextBuy" : "text-t-TextSell" : null),
                        children: (0, O.UD)(q)
                    }), (0, i.jsx)("div", {
                        "data-area": "right",
                        className: " layout-ellipsis t-Body2 w-[148px] text-PrimaryText",
                        children: "".concat(J).concat((0, O.sz)(ee))
                    }), (0, i.jsx)("div", {
                        "data-area": "right",
                        className: " layout-ellipsis t-Body2 w-[148px] text-PrimaryText",
                        children: "".concat(J).concat((0, O.sz)(y))
                    }), (0, i.jsx)("div", {
                        "data-area": "right",
                        className: " flex w-[148px] items-center gap-xl",
                        children: (0, i.jsxs)(i.Fragment, {
                            children: [p ? (0, i.jsx)(I.A, {
                                className: "t-Btn_link2 flex cursor-pointer items-center text-PrimaryText underline hover:text-primaryHover",
                                path: "/price/".concat(p),
                                onClick: function(e) {
                                    e.stopPropagation(), (0, D.tm)(D.D1.rowDetailBtnClick)({
                                        extraInfo: {
                                            baseAsset: c,
                                            df_9: c,
                                            df_10: "/price/".concat(p)
                                        }
                                    })
                                },
                                target: "_blank",
                                children: (0, i.jsx)(L.A, {
                                    tooltips: Z,
                                    arrow: !0,
                                    offset: 6,
                                    placement: "bottom",
                                    children: (0, i.jsx)(_.A, {
                                        className: "h-5 w-5",
                                        alt: Z
                                    })
                                })
                            }) : null, (0, i.jsx)(U, {
                                baseAsset: c,
                                quoteAsset: u,
                                tabType: f,
                                subTabType: d,
                                specialAsset: A,
                                btnText: m,
                                ref: K
                            })]
                        })
                    })]
                })
            };
            const K = (0, o.memo)(G);
            var $ = n("yhUQ"),
                Y = n("9rW+"),
                Z = function(e) {
                    return (0, i.jsx)(Y.Ap, (0, z.A)({
                        as: $.A
                    }, e))
                },
                Q = function(e) {
                    (0, C.A)();
                    var t = e.symbol,
                        n = e.slug,
                        r = e.volume,
                        a = e.baseAsset,
                        s = e.quoteAsset,
                        c = e.tabType,
                        f = e.subTabType,
                        m = e.isPreMarket,
                        h = e.specialAsset,
                        v = void 0 !== h && h,
                        g = e.marketCap,
                        b = (0, u.E)().getMobileColumnStyle,
                        y = (0, M.L)().diffPrices[t],
                        w = (0, k.useFiatPrice)(),
                        A = w(r, "USDT"),
                        E = A.symbol,
                        S = A.fiatPriceNumber,
                        N = w(1, a),
                        j = (v ? N : w(parseFloat(null === y || void 0 === y ? void 0 : y.close), s)).fiatPrice,
                        T = (0, O.Gw)(null === y || void 0 === y ? void 0 : y.open, null === y || void 0 === y ? void 0 : y.close),
                        P = (0, l.isFinite)(T),
                        _ = T >= 0,
                        L = "".concat(E).concat((0, O.sz)(g)),
                        R = (0, q.$)().tradeNowClick,
                        B = 0,
                        V = (0, o.useRef)(null),
                        H = {
                            baseAsset: a,
                            quoteAsset: s,
                            tabType: c,
                            subTabType: f,
                            specialAsset: v
                        };
                    return (0, i.jsx)(i.Fragment, {
                        children: (0, i.jsxs)(p.A, {
                            onClick: function(e) {
                                (null === V || void 0 === V ? void 0 : V.current.contains(e.target)) ? (0, D.tm)(D.D1.rowDetailBtnClick)({
                                    extraInfo: {
                                        baseAsset: a,
                                        df_9: a,
                                        df_10: "/price/".concat(n)
                                    }
                                }) : R((0, z.A)({}, H), e)
                            },
                            style: {
                                cursor: "pointer",
                                textDecoration: "none"
                            },
                            className: "overview-table-row flex",
                            sx: {
                                fontSize: 1,
                                lineHeight: "16px",
                                fontWeight: "normal",
                                color: "t.primary",
                                borderBottom: "unset",
                                pl: "sm"
                            },
                            children: [(0, i.jsxs)(I.A, {
                                ref: V,
                                target: "_blank",
                                path: "/price/".concat(n),
                                "data-area": "left",
                                style: b(B++),
                                className: "flex items-center gap-4xs",
                                children: [(0, i.jsx)("div", {
                                    className: "t-Subtitle3",
                                    children: a
                                }), m && (0, i.jsx)(F.A, {})]
                            }), (0, i.jsx)(p.A, {
                                flexDirection: "column",
                                "data-area": "center",
                                sx: {
                                    alignItems: "center",
                                    textAlign: "center !important"
                                },
                                style: b(B++),
                                children: (0, i.jsxs)(p.A, {
                                    width: "100%",
                                    flexDirection: "column",
                                    alignItems: "flex-end",
                                    children: [(0, i.jsx)(Z, {
                                        children: (0, i.jsxs)(i.Fragment, {
                                            children: [E, j]
                                        }),
                                        className: "t-Subtitle3 layout-ellipsis"
                                    }), (0, i.jsx)(Z, {
                                        sx: P ? {
                                            color: _ ? "buy" : "sell"
                                        } : null,
                                        className: "t-Caption1",
                                        children: P ? (0, O.UD)(T) : x.jr
                                    })]
                                })
                            }), (0, i.jsx)(d.A, {
                                "data-area": "right",
                                className: "layout-ellipsis",
                                style: b(B++),
                                children: (0, i.jsx)(Z, {
                                    title: L,
                                    children: (0, i.jsxs)(p.A, {
                                        flexDirection: "column",
                                        alignItems: "flex-end",
                                        children: [(0, i.jsx)(d.A, {
                                            className: "t-Subtitle3",
                                            children: L
                                        }), (0, i.jsx)(d.A, {
                                            className: "t-Caption2",
                                            children: "".concat(E).concat((0, O.sz)(S))
                                        })]
                                    })
                                })
                            })]
                        })
                    })
                };
            const X = (0, o.memo)(Q);
            var J = n("wmq8"),
                ee = n("FiYw"),
                te = (n("K2nZ"), n("A22g")),
                ne = n("cYjz"),
                re = n("W8hv"),
                ie = {
                    index: 4,
                    desc: !0
                },
                oe = n("ezuS"),
                ae = n("/OND"),
                se = n("cKr8"),
                le = n("UPra"),
                ce = n("dZDg"),
                ue = n("7+bj"),
                fe = n("LcZo"),
                de = n("sViW"),
                pe = n("M5j3"),
                me = n("Pz56"),
                he = n.n(me),
                ve = n("GKJf"),
                ge = n("5XPI"),
                be = n("yys2"),
                xe = n("uxFI"),
                ye = n("bg8v"),
                we = n("V1ty"),
                Ae = n("fUhM"),
                Ee = n("vWDX"),
                Se = function() {
                    return document.body.offsetHeight
                };
            const Ne = a().forwardRef((function(e, t) {
                var n = e.arrow,
                    i = void 0 !== n && n,
                    s = e.boundary,
                    l = e.delay,
                    c = void 0 === l ? 0 : l,
                    u = e.container,
                    f = e.tip,
                    p = e.placement,
                    m = e.pos,
                    h = e.children,
                    v = e.open,
                    g = e.trigger,
                    b = void 0 === g ? "hover" : g,
                    x = e.scroll,
                    y = void 0 === x || x,
                    w = e.resize,
                    A = void 0 === w || w,
                    E = e.enablePortal,
                    S = void 0 !== E && E,
                    N = e.leaveDelay,
                    j = void 0 === N ? 0 : N,
                    k = e.boxOffset,
                    T = void 0 === k ? 0 : k,
                    C = e.arrowPadding,
                    O = void 0 === C ? 0 : C,
                    P = e.onlyShowOnHover,
                    D = void 0 === P || P,
                    M = e.tipBoxSx,
                    _ = void 0 === M ? {} : M,
                    I = e.onClickOutside,
                    L = e.clickOutsideClose,
                    R = e.bg;
                p = p || m || "top", p = "rtl" === (0, be.A)() ? Ae.kL[p] : p;
                var F = a().useRef(null != v).current,
                    B = a().useRef(null),
                    H = (0, r.A)((0, o.useState)(null), 2),
                    W = H[0],
                    q = H[1],
                    U = (0, r.A)((0, o.useState)(null), 2),
                    G = U[0],
                    K = U[1],
                    $ = (0, r.A)((0, o.useState)(null), 2),
                    Y = $[0],
                    Z = $[1],
                    Q = a().useRef(0),
                    X = a().useRef(0),
                    J = (0, xe.E)(W, G, {
                        placement: p,
                        modifiers: [{
                            name: "eventListeners",
                            options: {
                                scroll: y,
                                resize: A
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: Y,
                                padding: O
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [T || 0, Ae.rQ]
                            }
                        }, {
                            name: "computeStyles",
                            options: {
                                adaptive: !1,
                                gpuAcceleration: !1
                            }
                        }, {
                            name: "flip",
                            options: {
                                boundary: s
                            }
                        }]
                    }),
                    ee = J.styles,
                    te = J.attributes,
                    ne = J.update,
                    re = J.state,
                    ie = a().useMemo((function() {
                        return (0, Ae.yP)(null === re || void 0 === re ? void 0 : re.placement)
                    }), [null === re || void 0 === re ? void 0 : re.placement]),
                    oe = (0, r.A)((0, o.useState)(v), 2),
                    ae = oe[0],
                    se = oe[1];
                a().useEffect((function() {
                    return function() {
                        X.current && window.clearTimeout(X.current), X.current = 0
                    }
                }), [ae]), F && (b = void 0, v !== ae && se(v)), (0, Ee.W)(B, (function(e) {
                    L && se(!1), I && I(e)
                }), !!I || !!L);
                var le = (0, ve.A)(q, t),
                    ce = "click" === b ? function(e) {
                        X.current && window.clearTimeout(X.current), Q.current = 0, X.current = 0, se(!ae), ne && ne(), h.props.onClick && h.props.onClick(e)
                    } : h.props.onClick,
                    ue = "hover" === b ? function(e) {
                        !ae && window.performance.now() - Q.current > 500 && (X.current = c ? X.current || window.setTimeout((function() {
                            return se(!0)
                        }), c) : (se(!0), 0), ne && ne(), Q.current = window.performance.now()), h.props.onMouseMove && h.props.onMouseMove(e)
                    } : h.props.onMouseMove,
                    fe = "hover" === b ? function() {
                        var e = (0, de.A)(he().mark((function e(t) {
                            return he().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        j ? setTimeout((function() {
                                            X.current && window.clearTimeout(X.current), Q.current = 0, X.current = 0, se(!1), ne && ne(), h.props.onMouseLeave && h.props.onMouseLeave(t)
                                        }), j) : (X.current && window.clearTimeout(X.current), Q.current = 0, X.current = 0, se(!1), ne && ne(), h.props.onMouseLeave && h.props.onMouseLeave(t));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }() : h.props.onMouseLeave,
                    me = (0, V.A)((0, z.A)({}, h.props), {
                        onClick: ce,
                        onMouseMove: ue,
                        onMouseLeave: fe,
                        ref: le
                    }),
                    Ne = D ? {
                        appear: !0,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        onEnter: Se
                    } : {};
                return a().createElement(a().Fragment, null, a().cloneElement(h, me), a().createElement(ye.Ay, (0, pe.A)({ in: ae,
                    timeout: Ae.p0
                }, Ne), (function(e) {
                    return u || S ? a().createElement(ge.Ay, {
                        container: u
                    }, a().createElement(we.A, (0, pe.A)({
                        open: !0,
                        arrow: i,
                        arrowStyle: ee.arrow,
                        style: (0, z.A)({}, ee.popper, Ae.lv, ie[e]),
                        bg: R,
                        arrowRef: Z,
                        ref: K
                    }, te.popper, {
                        sx: _
                    }), a().createElement(d.A, {
                        ref: B
                    }, f))) : a().createElement(we.A, (0, pe.A)({
                        open: !0,
                        arrow: i,
                        arrowStyle: ee.arrow,
                        style: (0, z.A)({}, ee.popper, Ae.lv, ie[e]),
                        bg: R,
                        arrowRef: Z,
                        ref: K
                    }, te.popper, {
                        sx: _
                    }), a().createElement(d.A, {
                        ref: B
                    }, f))
                })))
            }));
            var je = n("WgX+"),
                ke = n("9mmq"),
                Te = n("VXBK"),
                Ce = n("6jyQ");
            const Oe = function(e) {
                var t = e.isCurve,
                    n = void 0 !== t && t,
                    r = e.areaGradientFrom,
                    a = void 0 === r ? "rgba(2, 192, 118, 0)" : r,
                    s = e.areaGradientTo,
                    l = void 0 === s ? "rgba(2, 192, 118, 0.3)" : s,
                    c = e.height,
                    u = void 0 === c ? 70 : c,
                    f = e.width,
                    d = void 0 === f ? 75 : f,
                    m = e.tooltip,
                    h = e.values,
                    v = e.wrapSx,
                    g = e.isBuy,
                    b = (0, Te.DP)().colors,
                    x = (0, o.useMemo)((function() {
                        return {
                            data: h.map((function(e, t) {
                                return 60 * t * 60 * 1e3
                            })),
                            visible: !1
                        }
                    }), [h]),
                    y = (0, o.useMemo)((function() {
                        return {
                            visible: !1
                        }
                    }), [h]),
                    w = (0, o.useMemo)((function() {
                        return [{
                            name: "Trend Chart",
                            type: "Area",
                            data: h,
                            isCurve: n,
                            isShowBorder: !0,
                            borderColor: g ? b.buy : b.sell,
                            lineColor: g ? b.buy : b.sell,
                            lineWidth: 1,
                            color: [
                                [0, l],
                                [1, a]
                            ]
                        }]
                    }), [h]),
                    A = (0, i.jsx)(p.A, {
                        sx: v,
                        children: (0, i.jsx)(Ce.A, {
                            background: "rgba(0,0,0,0.0)",
                            legend: {
                                show: !1
                            },
                            tooltip: {
                                isTrigger: !1
                            },
                            height: u,
                            width: d,
                            xAxis: x,
                            yAxis: y,
                            series: w,
                            isShowGrid: !1,
                            isShowAxisLabel: !1,
                            isShowHover: !1
                        })
                    });
                return m ? (0, i.jsx)(Ne, {
                    arrow: !0,
                    placement: "top",
                    tip: (0, i.jsx)($.A, {
                        overflow: "hidden",
                        style: {
                            whiteSpace: "nowrap"
                        },
                        children: m
                    }),
                    children: A
                }) : A
            };
            var Pe = function(e, t, n) {
                    return {
                        lineColor: "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 1)"),
                        areaGradientFrom: "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0)"),
                        areaGradientTo: "rgba(".concat(e, ", ").concat(t, ", ").concat(n, ", 0.3)")
                    }
                },
                De = {
                    buy: {
                        traditional: Pe(116, 167, 0),
                        fresh: Pe(14, 203, 129),
                        cvd: Pe(41, 127, 212)
                    },
                    sell: {
                        traditional: Pe(234, 0, 112),
                        fresh: Pe(246, 70, 93),
                        cvd: Pe(236, 141, 66)
                    }
                };
            const Me = function(e) {
                var t = e.title,
                    n = e.mainValue,
                    r = e.difference,
                    a = e.values,
                    s = e.tooltip,
                    l = (0, je.by)(),
                    c = l.color,
                    u = l.isRedUpGreenDown,
                    f = (0, o.useMemo)((function() {
                        return u ? function(e) {
                            return {
                                buy: e.sell,
                                sell: e.buy
                            }
                        }(De) : De
                    }), [u]),
                    m = r >= 0,
                    h = m ? f.buy[c] : f.sell[c];
                return (0, i.jsx)(d.A, {
                    className: "w-[240px] tablet:w-[288px]",
                    children: (0, i.jsxs)(p.A, {
                        sx: {
                            width: "100%",
                            justifyContent: "space-between",
                            borderRadius: "8px",
                            flexDirection: ["column", "row"]
                        },
                        children: [(0, i.jsxs)("div", {
                            className: "flex flex-col gap-2xs",
                            children: [(0, i.jsxs)($.A, {
                                className: "t-Caption1 flex items-center text-t-third",
                                children: [t, s && (0, i.jsx)(Ne, {
                                    arrow: !0,
                                    placement: "top",
                                    tip: (0, i.jsx)($.A, {
                                        overflow: "hidden",
                                        style: {
                                            whiteSpace: "nowrap"
                                        },
                                        children: s
                                    }),
                                    children: (0, i.jsx)(p.A, {
                                        sx: {
                                            display: "inline",
                                            alignItems: "center",
                                            lineHeight: 0
                                        },
                                        children: (0, i.jsx)(ke.A, {
                                            sx: {
                                                position: "relative"
                                            },
                                            size: 14
                                        })
                                    })
                                })]
                            }), (0, i.jsxs)("div", {
                                className: "flex flex-col gap-4xs",
                                children: [(0, i.jsx)($.A, {
                                    sx: {
                                        maxWidth: "160px",
                                        lineBreak: "anywhere"
                                    },
                                    className: "t-Subtitle1 text-PrimaryText",
                                    children: n
                                }), (0, i.jsx)($.A, {
                                    color: m ? "t.buy" : "t.sell",
                                    className: "t-Subtitle4",
                                    children: (0, O.Ee)(r)
                                })]
                            })]
                        }), (0, i.jsx)(d.A, {
                            sx: {
                                position: "relative"
                            },
                            children: (0, i.jsx)(Oe, (0, V.A)((0, z.A)({
                                isBuy: m,
                                values: a
                            }, h), {
                                wrapSx: {
                                    mr: "-6px"
                                }
                            }))
                        })]
                    })
                })
            };
            var _e = {},
                Ie = function(e) {
                    var t = e.descKey,
                        n = e.tabInfoSub,
                        r = e.showFullDesc,
                        o = (0, E.Ef)().t;
                    if ("Monitoring" === n) {
                        var a = o("exchange-markets-cryptos-tab-market-cap-desc-Monitoring-override-higherVolatilityAndRisk", "higher volatility and risks"),
                            s = o("exchange-markets-cryptos-tab-market-cap-desc-Monitoring-override", "The Monitoring Tag is applied to tokens that exhibit notably {{higherVolatilityAndRisk}} compared to other listed tokens. These tokens are closely monitored, with regular reviews conducted. Keep in mind that these tokens may be subjected to delisting in certain circumstances and in the worst case scenario. DYOR. The list is updated on the 1st week of every quarter (Jan, Apr, Jul, Oct).", {
                                higherVolatilityAndRisk: a
                            }).split(a);
                        return (0, i.jsx)("p", {
                            className: (0, P.cn)(!r && " line-clamp-1"),
                            children: s.map((function(e, t) {
                                return (0, i.jsxs)(i.Fragment, {
                                    children: [e, t < s.length - 1 && (0, i.jsx)("span", {
                                        className: "text-Error",
                                        children: a
                                    })]
                                })
                            }))
                        })
                    }
                    return (0, i.jsx)("p", {
                        className: (0, P.cn)(!r && " line-clamp-1"),
                        children: o(t)
                    })
                },
                Le = function(e) {
                    var t = e.children;
                    return (0, i.jsx)("div", {
                        className: (0, P.cn)("mb-xl mt-2xs flex flex-wrap gap-x-xl gap-y-xl rounded-xl border border-solid border-Line p-m", "tablet:justify-between ", "mobile:hidden "),
                        children: t
                    })
                },
                Re = function(e) {
                    var t = e.isShowMore,
                        n = e.setIsShowMore,
                        r = e.className,
                        o = (0, E.Ef)().t;
                    return (0, i.jsx)("div", {
                        className: (0, P.cn)("t-Caption1 flex cursor-pointer items-center", r),
                        onClick: function() {
                            n(!t)
                        },
                        children: t ? (0, i.jsxs)(i.Fragment, {
                            children: [o("desc-show-less", "Show less"), (0, i.jsx)(fe.A, {
                                name: "ChevronUpF",
                                className: "icon-clz text-iconNormal",
                                size: 16
                            })]
                        }) : (0, i.jsxs)(i.Fragment, {
                            children: [o("desc-show-more", "Show more"), (0, i.jsx)(ue.A, {
                                name: "ChevronDownF",
                                className: "icon-clz text-iconNormal",
                                size: 16
                            })]
                        })
                    })
                };
            const Fe = function(e) {
                var t = e.tabInfoSub,
                    n = (0, f.Rm)(),
                    r = (0, ae.wA)(),
                    a = n[(0, O.Jn)(t)] || {},
                    s = a.titleKey,
                    l = a.descKey,
                    c = a.marketCapTrend,
                    u = a.volumeTrend,
                    d = a.marketCapDiff,
                    m = a.volumeDiff,
                    h = a.isNoData,
                    v = (0, E.Ef)().t,
                    g = (0, k.useFiatPrice)();
                (0, o.useEffect)((function() {
                    t && !n[(0, O.Jn)(t)] && (_e[t] ? r.ssrStore.updateState((0, oe.A)({}, (0, O.Jn)(t), (0, V.A)((0, z.A)({}, _e[t]), {
                        marketCapTrend: [],
                        volumeTrend: []
                    }))) : (0, ce.o6)(t).then((function(e) {
                        r.ssrStore.updateState((0, oe.A)({}, (0, O.Jn)(t), (0, O.a2)(e)))
                    })))
                }), [t]);
                var b = {
                        flexDirection: "column",
                        flex: 1,
                        gap: "xs"
                    },
                    x = (0, o.useState)(!1),
                    y = x[0],
                    w = x[1];
                if (!t) return (0, i.jsx)(Le, {
                    children: (0, i.jsxs)(p.A, {
                        sx: b,
                        children: [(0, i.jsx)("div", {
                            className: "t-Subtitle1 mobile:t-Subtitle4 font-semibold text-PrimaryText",
                            children: v("exchange-markets-cryptos-tab-title-common-all", "Top Tokens by Market Capitalization")
                        }), (0, i.jsxs)("div", {
                            className: "t-Body3 mobile:t-Caption2 flex flex-col gap-2xs text-t-third",
                            children: [(0, i.jsx)("p", {
                                className: (0, P.cn)(!y && " line-clamp-1"),
                                children: v("exchange-markets-cryptos-tab-market-cap-desc-common-all-1", "Get a comprehensive snapshot of all cryptocurrencies available on Binance. This page displays the latest\n  prices, 24-hour trading volume, price changes, and market capitalizations for all cryptocurrencies on\n  Binance. Users can quickly access key information about these digital assets and access the trade page\n  from here.")
                            }), (0, i.jsx)("p", {
                                className: (0, P.cn)(!y && "hidden"),
                                children: v("exchange-markets-cryptos-tab-market-cap-desc-common-all-2", " The data presented is for informational purposes only. Some of it is provided by CoinMarketCap, and shown\n    on an \u201cas is\u201d basis, without representation or warranty of any kind. Please view our General Risk Warning\n    for more information.")
                            })]
                        }), (0, i.jsx)(Re, {
                            isShowMore: y,
                            setIsShowMore: w
                        })]
                    })
                });
                if ((h || !t || s && v(s) === s) && !_e[t]) return null;
                if (!s) return (0, i.jsx)("div", {
                    className: "flex min-h-[164px] items-center justify-center",
                    children: (0, i.jsx)(se.A, {})
                });
                var A = g(1),
                    S = A.fiatPriceNumber,
                    N = A.symbol,
                    j = S || 1,
                    T = c[c.length - 1] * j,
                    C = u[u.length - 1] * j,
                    D = (0, O.sz)(T, N),
                    M = (0, O.sz)(C, N);
                return (0, i.jsx)(Le, {
                    children: (0, le.B_)([(0, i.jsxs)(p.A, {
                        sx: b,
                        className: "tablet:basis-full",
                        children: [(0, i.jsx)("div", {
                            className: "t-Subtitle1 mobile:t-Subtitle4 font-semibold text-PrimaryText ",
                            children: v(s)
                        }), (0, i.jsx)("div", {
                            className: "t-Body3 mobile:t-Caption2 text-t-third",
                            children: (0, i.jsx)(Ie, {
                                descKey: l,
                                tabInfoSub: t,
                                showFullDesc: y
                            })
                        }), (0, i.jsx)(i.Fragment, {
                            children: (0, i.jsx)(Re, {
                                isShowMore: y,
                                setIsShowMore: w,
                                className: "mobile:hidden"
                            })
                        })]
                    }, "title"), C ? (0, i.jsx)(Me, {
                        title: v("exchange-markets-cryptos-tab-volume-title"),
                        mainValue: M,
                        difference: m,
                        values: u,
                        isShowChart: Boolean(m)
                    }) : null, T ? (0, i.jsx)(Me, {
                        title: v("exchange-markets-cryptos-tab-market-cap-title"),
                        mainValue: D,
                        difference: d,
                        values: c,
                        isShowChart: Boolean(d)
                    }) : null], (0, i.jsx)("div", {
                        className: "w-[1px] border-x-0 border-l-[1px] border-r-0 border-dashed border-Line [&:nth-child(2)]:tablet:hidden"
                    }))
                })
            };
            var Be = n("pNlt"),
                ze = function(e) {
                    return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
                },
                Ve = function() {
                    var e = (0, E.Ef)().t,
                        t = (0, g.Bl)(),
                        n = (0, y.rd)(),
                        a = (0, h.Q)().search,
                        D = (0, u.E)(),
                        _ = D.minWidth,
                        I = D.mobileMinWidth,
                        L = (0, b.$)(),
                        R = L.setPagination,
                        F = L.currentPage,
                        B = L.pageSize,
                        z = (0, v.Q)().isMobile,
                        V = (0, r.A)((0, s.fp)(m.v), 2),
                        H = V[0],
                        W = V[1],
                        q = (0, f.Rm)().symbolList,
                        U = void 0 === q ? [] : q,
                        G = function(e, t) {
                            var n = t.windowSize,
                                a = t.setWindowSize,
                                l = void 0 === a ? function() {} : a,
                                c = (0, E.Ef)().getI18n,
                                u = (0, ee.Ku)().isHasTimezoneOpenPrice,
                                f = (0, v.Q)().isMobile,
                                d = (0, te.q)("coinInfo".concat(f ? "-mobile" : ""), f ? 2 : 4, f ? 2 : 4),
                                p = d.saveSort,
                                m = d.sortInfo,
                                h = void 0 === m ? ie : m,
                                g = h.index,
                                b = h.desc,
                                x = (0, o.useMemo)((function() {
                                    return (f ? [{
                                        sortSplit: "baseAsset|string",
                                        text: [{
                                            sortKey: "baseAsset",
                                            content: c("common-th-name")
                                        }]
                                    }, {
                                        sortSplit: "fiatPrice|formattedNumber",
                                        text: [{
                                            sortKey: "fiatPrice",
                                            content: c("common-th-price")
                                        }, {
                                            sortKey: "difference",
                                            content: c(u ? "common-th-Change" : "common-th-24hChange")
                                        }],
                                        props: {
                                            "data-area": "right"
                                        }
                                    }, {
                                        sortSplit: "marketCap|number",
                                        text: [{
                                            content: c("common-th-cap"),
                                            sortKey: "marketCap"
                                        }, {
                                            content: c("common-th-vol"),
                                            sortKey: "volume"
                                        }],
                                        props: {
                                            "data-area": "right"
                                        }
                                    }, {}] : [{
                                        sortSplit: "baseAsset|string",
                                        text: c("common-th-name")
                                    }, {
                                        sortSplit: "fiatPrice|formattedNumber",
                                        text: c("common-th-price"),
                                        tipsKey: "markets-allCrypto-changeTip",
                                        props: {
                                            "data-area": "right"
                                        }
                                    }, {
                                        props: {
                                            "data-area": "right"
                                        },
                                        sortSplit: "difference|number",
                                        text: c("common-th-Change"),
                                        showWindowSize: !0
                                    }, {
                                        sortSplit: "volume|number",
                                        text: c("common-th-24hVolume")
                                    }, {
                                        sortSplit: "marketCap|number",
                                        text: c("common-th-marketCap")
                                    }, {
                                        text: c("common-th-action", "Action")
                                    }]).map((function(t, a) {
                                        var s = t.sortSplit,
                                            c = t.children,
                                            f = t.text,
                                            d = a === g,
                                            m = (0, r.A)((null === s || void 0 === s ? void 0 : s.split("|")) || [], 1)[0];
                                        return {
                                            sortSplit: s,
                                            props: t.props || {
                                                "data-area": a < 3 ? "left" : "right"
                                            },
                                            children: s ? (0, i.jsxs)("div", {
                                                className: "flex",
                                                children: [t.showWindowSize && !u ? (0, i.jsx)(re.A, {
                                                    windowSize: n,
                                                    onWindowSize: l
                                                }) : null, (0, i.jsx)(ne.A, {
                                                    sx: {
                                                        fontSize: 0
                                                    },
                                                    sortState: {
                                                        active: d,
                                                        isDesc: b
                                                    },
                                                    onClick: function() {
                                                        (0, J.a)({
                                                            event: "market_column",
                                                            eventCategory: "mk_order_by",
                                                            eventAction: "click",
                                                            eventLabel: "market::order_by_".concat(f, "_").concat(d ? b ? "rand" : "desc" : "asc"),
                                                            elementid: "market::".concat(e, "_order_click")
                                                        }), p(d && b ? {} : {
                                                            index: a,
                                                            desc: !!d && !b
                                                        })
                                                    },
                                                    children: "string" === typeof f ? (0, i.jsx)("div", {
                                                        className: "whitespace-nowrap text-t-third",
                                                        children: f
                                                    }) : f.map((function(e, t) {
                                                        var n = d && e.sortKey === m;
                                                        return (0, i.jsxs)(o.Fragment, {
                                                            children: [(0, i.jsx)("div", {
                                                                className: (0, P.cn)(n ? "mobile:text-t-brand noH5:text-primary" : " text-t-third", " whitespace-nowrap"),
                                                                children: e.content
                                                            }), 0 === t && (null === f || void 0 === f ? void 0 : f.length) > 1 ? "/" : null]
                                                        }, t)
                                                    }))
                                                })]
                                            }) : c || (0, i.jsx)("div", {
                                                className: "t-Caption2 whitespace-nowrap text-t-third",
                                                children: f
                                            })
                                        }
                                    }))
                                }), [f, c, u, e, g, n, l, b, p]),
                                y = x,
                                w = (y && y[g] ? y[g] : {}).sortSplit,
                                A = void 0 === w ? "" : w,
                                S = (0, r.A)((null === A || void 0 === A ? void 0 : A.split("|")) || [], 1)[0],
                                N = (0, k.useFiatPrice)(),
                                j = (0, M.L)().diffPrices,
                                D = (0, r.A)((0, s.md)(T.G), 2),
                                _ = D[0],
                                I = D[1],
                                L = (0, C.A)(),
                                R = function() {
                                    switch (S) {
                                        case "fiatPrice":
                                            return L;
                                        case "difference":
                                            return "".concat(L, "-").concat(_);
                                        default:
                                            return S
                                    }
                                }(),
                                F = (0, o.useMemo)((function() {
                                    return [
                                        [function(e) {
                                            if ("marketCap" === S) return e.marketCap;
                                            var t = e.symbol,
                                                n = e.quoteAsset,
                                                r = e.baseAsset,
                                                i = e.specialAsset,
                                                o = e.marketCap,
                                                a = j[t],
                                                s = N(1, r),
                                                l = (i ? s : N(parseFloat(null === a || void 0 === a ? void 0 : a.close), n)).fiatPriceNumber,
                                                c = (null == _ ? null === j || void 0 === j ? void 0 : j[t] : null === I || void 0 === I ? void 0 : I[t]) || {},
                                                u = c.open,
                                                f = c.close;
                                            switch (S) {
                                                case "fiatPrice":
                                                    return l;
                                                case "difference":
                                                    return Number.isNaN((0, O.Gw)(u, f)) ? b ? Number.MIN_SAFE_INTEGER : Number.MAX_SAFE_INTEGER : (0, O.Gw)(u, f);
                                                case "marketCap":
                                                    return o;
                                                default:
                                                    return e[S]
                                            }
                                        }],
                                        [b ? "desc" : "asc"]
                                    ]
                                }), [b, j, N, R]);
                            return {
                                sortHeaders: x,
                                sortByFunc: F
                            }
                        }("coinInfo", {
                            windowSize: H,
                            setWindowSize: W
                        }),
                        $ = G.sortHeaders,
                        Y = G.sortByFunc,
                        Z = (0, Be.A)(),
                        Q = (0, r.A)((0, h.l)(), 2),
                        oe = (Q[0], Q[1]),
                        ae = (0, o.useMemo)((function() {
                            if ((0, l.isEmpty)(a) && "All" === oe) return U;
                            var e, t = new RegExp(ze(a), "i");
                            return null !== (e = U.map((function(e) {
                                if (t.test(e.baseAsset) || t.test(e.fullName)) {
                                    var n = (null === e || void 0 === e ? void 0 : e.tagInfos) || [],
                                        r = oe;
                                    if (!r || n.find((function(e) {
                                            return e.tag === r
                                        }))) return e.tabType = "coinInfo", e.subTabType = oe || "All", e
                                }
                                return null
                            })).filter(Boolean)) && void 0 !== e ? e : []
                        }), [U, a, oe]);
                    (0, o.useEffect)((function() {
                        "" === oe && "" === a || R(1)
                    }), [oe, a]);
                    var se = (0, y.K7)().pathname;
                    return (0, i.jsxs)(i.Fragment, {
                        children: [(0, i.jsxs)(w.A, {
                            children: [(0, i.jsx)("title", {
                                children: e("exchange-markets-cryptos-tab-title-".concat(oe), e("exchange-markets-title"))
                            }), (0, i.jsx)("meta", {
                                name: "description",
                                content: e("exchange-markets-cryptos-tab-market-cap-desc-".concat(oe), e("exchange-markets-description"))
                            })]
                        }), (0, i.jsx)(c.A, {
                            whenIdle: !0,
                            children: (0, i.jsx)(d.A, {
                                className: " flex items-center justify-between ",
                                __css: {
                                    px: ["sm", 0],
                                    pb: ["sm", "sm"]
                                },
                                children: (0, i.jsx)(S.A, {
                                    idPrefix: E.Gs.INFO,
                                    defaultActiveTab: oe,
                                    tabList: Z,
                                    showOtherTab: !0
                                })
                            })
                        }), (0, i.jsxs)(i.Fragment, {
                            children: [(0, i.jsx)(c.A, {
                                whenIdle: !0,
                                children: (0, i.jsx)(Fe, {
                                    tabInfoSub: oe
                                })
                            }), (0, i.jsx)(c.A, {
                                whenIdle: !0,
                                children: (0, i.jsx)(j.A, {
                                    data: ae,
                                    current: F,
                                    pageSize: B,
                                    loading: !1,
                                    sortByFunc: Y,
                                    sortHeaders: $,
                                    boxProps: {
                                        style: {
                                            minWidth: z ? I : _
                                        }
                                    },
                                    itemSize: 64,
                                    itemCell: z ? (0, i.jsx)(X, {}) : (0, i.jsx)(K, {
                                        btnText: "action-tradeNow",
                                        customLink: ""
                                    }),
                                    emptyNode: a ? (0, i.jsx)(N.A, {}) : void 0
                                })
                            }), (0, i.jsx)(c.A, {
                                whenIdle: !0,
                                children: ae.length > 0 && (0, i.jsx)(p.A, {
                                    justifyContent: "flex-end",
                                    mt: ["16px", "md"],
                                    pb: ["16px", "md"],
                                    style: {
                                        contentVisibility: "auto"
                                    },
                                    className: "[&>div]:flex-nowrap",
                                    children: (0, i.jsx)(A.A, {
                                        total: Math.ceil(ae.length / B),
                                        current: F,
                                        onChange: function(e) {
                                            document.getElementById("tabContainer").scrollIntoView(), R(e), x.cp || n.push("".concat(se, "?p=").concat(e))
                                        },
                                        getPageHref: function(e) {
                                            return "/".concat(t).concat(se, "?p=").concat(e)
                                        }
                                    })
                                })
                            })]
                        })]
                    })
                };
            const He = (0, o.memo)(Ve)
        },
        pNlt: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => f
            });
            var r = n("BK7R"),
                i = n("tEf9"),
                o = n("TrCV"),
                a = n("DTvD"),
                s = n("dn+i"),
                l = n("N/Ki"),
                c = n("cjvU"),
                u = n("NqUm");
            const f = function() {
                var e = (0, c.Kn)(),
                    t = (0, s.Rm)().coinInfoTabs,
                    n = (0, l.Ef)().t;
                return (0, a.useMemo)((function() {
                    return [{
                        text: n("common-all", "All"),
                        value: ""
                    }].concat((0, i.A)((t || []).map((function(e) {
                        return (0, r.A)({
                            text: e.display,
                            value: e.tag,
                            badge: e.newStatus ? (0, o.jsx)(u.Q, {}) : null,
                            isNewBadge: !0 === e.newStatus
                        }, e)
                    })))).filter((function(t) {
                        return !!t && !("ETF" === t.tag && !e)
                    }))
                }), [t, e, n])
            }
        },
        UwLn: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => V
            });
            var r = n("BK7R"),
                i = n("VP0d"),
                o = n("tEf9"),
                a = n("TrCV"),
                s = n("DTvD"),
                l = n.n(s),
                c = n("X6Py"),
                u = n("dqst"),
                f = n("M5j3"),
                d = n("gZfF"),
                p = n("GKJf"),
                m = n("LCuF"),
                h = n("5XPI"),
                v = n("yys2"),
                g = n("uxFI"),
                b = n("bg8v"),
                x = n("V1ty"),
                y = n("fUhM"),
                w = n("vWDX"),
                A = function() {
                    return document.body.offsetHeight
                };
            const E = s.forwardRef((function(e, t) {
                var n = e.arrow,
                    o = void 0 !== n && n,
                    a = e.boundary,
                    l = e.container,
                    c = e.tip,
                    u = e.delay,
                    E = void 0 === u ? 0 : u,
                    S = e.pos,
                    N = e.placement,
                    j = void 0 === N ? S || "top" : N,
                    k = e.children,
                    T = e.open,
                    C = e.trigger,
                    O = void 0 === C ? "hover" : C,
                    P = e.onClick,
                    D = e.enablePortal,
                    M = void 0 !== D && D,
                    _ = e.bg,
                    I = e.scroll,
                    L = e.resize,
                    R = e.boxOffset,
                    F = void 0 === R ? 0 : R,
                    B = e.arrowPadding,
                    z = void 0 === B ? 0 : B,
                    V = e.fallbackPlacements,
                    H = e.onlyShowOnHover,
                    W = void 0 === H || H,
                    q = e.clickOutsideClose,
                    U = void 0 !== q && q,
                    G = e.onClickOutside,
                    K = e.tooltipBoxProps,
                    $ = (0, d.A)(e, ["arrow", "boundary", "container", "tip", "delay", "pos", "placement", "children", "open", "trigger", "onClick", "enablePortal", "bg", "scroll", "resize", "boxOffset", "arrowPadding", "fallbackPlacements", "onlyShowOnHover", "clickOutsideClose", "onClickOutside", "tooltipBoxProps"]),
                    Y = "rtl" === (0, v.A)() ? y.kL[j] : j,
                    Z = s.useRef(null != T).current,
                    Q = s.useRef(null),
                    X = (0, i.A)(s.useState(null), 2),
                    J = X[0],
                    ee = X[1],
                    te = (0, i.A)(s.useState(null), 2),
                    ne = te[0],
                    re = te[1],
                    ie = (0, i.A)(s.useState(null), 2),
                    oe = ie[0],
                    ae = ie[1],
                    se = s.useRef(0),
                    le = s.useRef(),
                    ce = (0, g.E)(J, ne, {
                        placement: Y,
                        modifiers: [{
                            name: "eventListeners",
                            options: {
                                scroll: I,
                                resize: L
                            }
                        }, {
                            name: "arrow",
                            options: {
                                element: oe,
                                padding: z
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [F || 0, y.rQ]
                            }
                        }, {
                            name: "computeStyles",
                            options: {
                                adaptive: !1,
                                gpuAcceleration: !1
                            }
                        }, {
                            name: "flip",
                            options: {
                                boundary: a,
                                fallbackPlacements: V
                            }
                        }]
                    }),
                    ue = ce.state,
                    fe = ce.styles,
                    de = ce.attributes,
                    pe = ce.update,
                    me = s.useMemo((function() {
                        return (0, y.yP)(null === ue || void 0 === ue ? void 0 : ue.placement)
                    }), [null === ue || void 0 === ue ? void 0 : ue.placement]),
                    he = (0, i.A)(s.useState(T), 2),
                    ve = he[0],
                    ge = he[1];
                Z && (O = void 0, T !== ve && ge(T)), s.useEffect((function() {
                    return function() {
                        le.current && window.clearTimeout(le.current), le.current = 0
                    }
                }), [ve]), (0, w.W)(Q, (function(e) {
                    U && ge(!1), G && G(e)
                }), !!G || !!U);
                var be = (0, p.A)(ee, t),
                    xe = "click" === O ? function(e) {
                        le.current && window.clearTimeout(le.current), se.current = 0, le.current = 0, ge(!ve), pe && pe(), P && P(e)
                    } : P,
                    ye = "hover" === O ? function(e) {
                        !ve && window.performance.now() - se.current > 500 && (le.current = E ? le.current || window.setTimeout((function() {
                            return ge(!0)
                        }), E) : (ge(!0), 0), pe && pe(), se.current = window.performance.now()), $.onMouseMove && $.onMouseMove(e)
                    } : $.onMouseMove,
                    we = "hover" === O ? function(e) {
                        le.current && window.clearTimeout(le.current), se.current = 0, le.current = 0, ge(!1), pe && pe(), $.onMouseLeave && $.onMouseLeave(e)
                    } : $.onMouseLeave,
                    Ae = W ? {
                        appear: !0,
                        mountOnEnter: !0,
                        unmountOnExit: !0,
                        onEnter: A
                    } : {};
                return s.createElement(m.A, (0, f.A)({
                    ref: be
                }, $, {
                    __css: {
                        display: "inline-block",
                        position: "relative"
                    },
                    onClick: xe,
                    onMouseMove: ye,
                    onMouseLeave: we
                }), s.createElement(b.Ay, (0, f.A)({ in: ve,
                    timeout: y.p0
                }, Ae), (function(e) {
                    return l || M ? s.createElement(h.Ay, {
                        container: l
                    }, s.createElement(x.A, (0, f.A)({
                        open: !0,
                        arrow: o,
                        arrowStyle: fe.arrow,
                        style: (0, r.A)({}, fe.popper, y.lv, me[e]),
                        bg: _,
                        arrowRef: ae,
                        ref: re
                    }, de.popper, K), s.createElement(m.A, {
                        ref: Q
                    }, c))) : s.createElement(x.A, (0, f.A)({
                        open: !0,
                        arrow: o,
                        arrowStyle: fe.arrow,
                        style: (0, r.A)({}, fe.popper, y.lv, me[e]),
                        bg: _,
                        arrowRef: ae,
                        ref: re
                    }, de.popper, K), s.createElement(m.A, {
                        ref: Q
                    }, c))
                })), k)
            }));
            var S = n("eEXy"),
                N = n("ZIan"),
                j = n("qhd6"),
                k = n("BK9r"),
                T = n("14bH"),
                C = n("/Izd"),
                O = n("q5Ye"),
                P = n("wIZF"),
                D = n("Y4uf");
            const M = function(e) {
                return l().createElement(D.A, (0, P.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), l().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M6.343 7.565a7.78 7.78 0 000 11.13c3.124 3.073 8.19 3.073 11.314 0a7.78 7.78 0 000-11.13L12 2 6.343 7.565zm8.44 9.782a3.935 3.935 0 000-5.565L12 9l-2.783 2.782a3.935 3.935 0 005.566 5.565z",
                    fill: "currentColor"
                }))
            };
            var _ = n("KChd"),
                I = n("yuts"),
                L = n("N/Ki"),
                R = n("WZ/o"),
                F = _.A.TabPane,
                B = function(e) {
                    var t = e.value,
                        n = e.text,
                        o = e.tooltipKey,
                        l = e.badge,
                        f = e.hasSubTab,
                        d = e.tabFilterNumberMap,
                        p = e.idPrefix,
                        m = e.isSubTab,
                        h = e.isSeparator,
                        v = e.isLeftTab,
                        g = e.showIcon,
                        b = e.isNewBadge,
                        x = (0, N.Bl)(),
                        y = (0, L.Ef)().t,
                        w = (0, S.Q)().isMobile,
                        A = (0, k.g)().activeSubTab,
                        j = (0, i.A)((0, u.A)("NEW_BADGE_CLICKED_".concat(p, "-").concat(t), !1), 2),
                        P = j[0],
                        D = j[1];
                    if (!0 === h) return (0, a.jsx)("span", {
                        className: "left-tab h-4 w-[1px] bg-line"
                    });
                    var _ = d ? "".concat(n, " (").concat(d[t] || 0, ")") : n,
                        I = o && !w && p === L.Gs.SPOT ? function(e) {
                            return (0, a.jsx)(E, (0, r.A)({
                                enablePortal: !0,
                                arrow: !0,
                                tip: (0, a.jsx)("div", {
                                    className: "max-w-[300px] whitespace-normal",
                                    children: y(o)
                                }),
                                placement: "bottom",
                                trigger: "hover",
                                className: "[&>svg]:ml-0 [&>svg]:text-iconNormal"
                            }, e))
                        } : s.Fragment;
                    return (0, a.jsx)("div", {
                        className: (0, R.cn)("flex items-center", v && "left-tab"),
                        children: (0, a.jsxs)("div", {
                            className: "flex items-center",
                            children: [!m && (0, a.jsx)(T.N, {
                                to: (0, c.v)("".concat(p, "-").concat(t)),
                                prefetch: !1,
                                className: "absolute inset-0 m-auto",
                                onClick: function() {
                                    b && D(!0)
                                }
                            }), (0, a.jsxs)("div", {
                                className: (0, R.cn)("flex items-center gap-5xs", m ? "t-Caption2 font-semibold" : "t-Subtitle4"),
                                children: [_, (0, a.jsx)(I, {
                                    children: f ? (0, a.jsx)("div", {
                                        children: A === t ? (0, a.jsx)(C.A, {
                                            size: 16,
                                            className: "text-iconNormal"
                                        }) : (0, a.jsx)(O.A, {
                                            size: 16,
                                            className: "text-iconNormal"
                                        })
                                    }) : P && b ? g ? "en-GB" !== x && (0, a.jsx)(M, {
                                        size: 16,
                                        className: "text-primary"
                                    }) : null : "en-GB" !== x && l
                                })]
                            })]
                        })
                    })
                },
                z = function(e) {
                    var t, n = e.idPrefix,
                        r = e.tabList,
                        i = e.tabFilterNumberMap,
                        s = e.isSubTab,
                        l = e.defaultActiveTab,
                        u = e.onTabClick,
                        f = void 0 === u ? function() {} : u,
                        d = e.showOtherTab,
                        p = (0, L.Ef)().t,
                        m = [r.slice(0, d ? 8 : void 0), r.slice(d ? 8 : void 0)],
                        h = m[0],
                        v = m[1],
                        g = d && !h.some((function(e) {
                            return e.value === l
                        }));
                    return (0, a.jsx)(I.A, {
                        fallback: (0, a.jsx)(a.Fragment, {}),
                        name: "FilterList",
                        children: (0, a.jsxs)("div", {
                            className: (0, R.cn)("no-scrollbar flex flex-col gap-m overflow-auto", s && "mb-xl mt-2xs"),
                            children: [(0, a.jsx)(_.A, {
                                initialIndex: g ? 8 : function() {
                                    var e = h.findIndex((function(e) {
                                        return e.value === l
                                    }));
                                    return -1 !== e ? e : n === L.Gs.SPOT ? h.findIndex((function(e) {
                                        return !0 === e.isSeparator
                                    })) + 1 : 0
                                }(),
                                className: (0, R.cn)(s ? "[&>*:first-child]:gap-2xs" : "[&>*:first-child]:gap-m", "[&>*:first-child>div]:px-0 [&>*:first-child>div]:py-[1px]", "[&_.bn-tab:has(*.left-tab)]:-mr-2xs", "[&>*:first-child>div>div]:px-2xs", "[&>*:first-child>div>div:has(svg)]:pr-4xs"),
                                size: "small",
                                variant: "primary-gray",
                                id: "market_filter_".concat(n ? "".concat(s ? "".concat(n, "_subtab") : n) : ""),
                                onChange: function(e) {
                                    var t, n = (null === (t = h[e]) || void 0 === t ? void 0 : t.value) || (d && 8 === e ? "Others" : "All");
                                    s || (0, j.tm)(j.D1.tabSecondClick)({
                                        df_9: n,
                                        extraInfo: {
                                            tab: n,
                                            df_9: n
                                        }
                                    }), null === f || void 0 === f || f(n)
                                },
                                children: (0, o.A)(h.map((function(e) {
                                    var t = e.value,
                                        r = e.text,
                                        o = e.tooltipKey,
                                        l = e.badge,
                                        c = e.hasSubTab,
                                        u = e.isSeparator,
                                        f = e.isLeftTab,
                                        d = e.showIcon,
                                        p = e.isNewBadge,
                                        m = void 0 !== p && p;
                                    return (0, a.jsx)(F, {
                                        tabNode: (0, a.jsx)(B, {
                                            value: t,
                                            text: r,
                                            tooltipKey: o,
                                            badge: l,
                                            hasSubTab: c,
                                            tabFilterNumberMap: i,
                                            idPrefix: n,
                                            isSubTab: s,
                                            isSeparator: u,
                                            isLeftTab: f,
                                            showIcon: d,
                                            isNewBadge: m
                                        })
                                    }, t)
                                }))).concat([d && (0, a.jsx)(F, {
                                    tabNode: (0, a.jsxs)(T.N, {
                                        className: "t-Subtitle4 gap-minor flex items-center pl-2xs pr-4xs",
                                        to: (0, c.v)("".concat(n, "-").concat(null === (t = v[0]) || void 0 === t ? void 0 : t.value)),
                                        prefetch: !1,
                                        children: [p("other-tabs", "Others"), g ? (0, a.jsx)(C.A, {
                                            size: 16,
                                            className: "text-iconNormal"
                                        }) : (0, a.jsx)(O.A, {
                                            size: 16,
                                            className: "text-iconNormal"
                                        })]
                                    })
                                }, "other-tabs")]).filter(Boolean)
                            }), g && (0, a.jsx)(z, {
                                idPrefix: n,
                                defaultActiveTab: l,
                                tabList: v,
                                tabFilterNumberMap: i
                            })]
                        })
                    })
                };
            const V = (0, s.memo)(z)
        },
        dZoT: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => f
            });
            var r = n("TrCV"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("C6y2"),
                s = n("yhUQ"),
                l = n("WPrT"),
                c = n("vtOj"),
                u = n("N/Ki");
            const f = o().memo((function() {
                var e = (0, u.Ef)().getI18n,
                    t = (0, l.Q)().search,
                    n = e("markets-noSearchResult").split("##");
                return (0, r.jsxs)(a.A, {
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    my: "xxl",
                    children: [(0, r.jsx)(c.A, {
                        className: "h-[96px] w-[96px]"
                    }), (0, r.jsx)(a.A, {
                        mt: "md",
                        className: "break-all text-center mobile:px-xl",
                        children: (0, r.jsxs)(s.A, {
                            mt: "middle",
                            color: "t.third",
                            className: "inline",
                            children: [n[0], t, " ", n[1]]
                        })
                    })]
                })
            }))
        },
        cYjz: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("gZfF"),
                a = n("TrCV"),
                s = n("DTvD"),
                l = n.n(s),
                c = n("AcsR"),
                u = n("WZ/o"),
                f = "".concat(c.K5, "/static/images/main-exchange-ui"),
                d = function(e) {
                    var t = e.active,
                        n = e.isDesc;
                    return t ? n ? (0, a.jsx)("img", {
                        "data-ot-ignore": "",
                        alt: "unsorted",
                        height: 16,
                        width: 16,
                        src: "".concat(f, "/sort-down-f.svg")
                    }) : (0, a.jsx)("img", {
                        "data-ot-ignore": "",
                        alt: "unsorted",
                        height: 16,
                        width: 16,
                        src: "".concat(f, "/sort-up-f.svg")
                    }) : (0, a.jsx)("img", {
                        "data-ot-ignore": "",
                        alt: "unsorted",
                        height: 16,
                        width: 16,
                        src: "".concat(f, "/sort-small-f.svg")
                    })
                };
            const p = l().memo((function(e) {
                var t = e.sortState,
                    n = e.children,
                    s = e.hideIcon,
                    l = e.className,
                    c = void 0 === l ? "" : l,
                    f = (0, o.A)(e, ["sortState", "children", "hideIcon", "className"]),
                    p = t.active,
                    m = t.isDesc;
                return (0, a.jsxs)("div", (0, i.A)((0, r.A)({}, f), {
                    className: (0, u.cn)("t-Caption2 flex cursor-pointer select-none items-center text-t-third", !s && "right-icon-offset", c),
                    children: [n, !s && (0, a.jsx)(d, {
                        active: p,
                        isDesc: m
                    })]
                }))
            }))
        },
        "0+yZ": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c,
                H: () => l
            });
            var r = n("TrCV"),
                i = n("DTvD"),
                o = n("HS2I"),
                a = n("4FKO"),
                s = n("WZ/o"),
                l = 24;
            const c = function(e) {
                var t = e.className,
                    n = (0, o.useTheme)().isLight;
                return (0, i.useContext)(a.C).isHorizontallyScrolled && (0, r.jsx)("div", {
                    className: (0, s.cn)("shrink-0 grow-0 pc:hidden", t, !JSON.stringify(t || "").includes("h-") && "h-full"),
                    style: {
                        width: "".concat(l, "px"),
                        background: n ? "linear-gradient(90deg, rgba(242, 242, 242, 0) 0%, #F2F2F2 100%)" : "linear-gradient(90deg, rgba(242, 242, 242, 0) 0%, #121212 100%)",
                        transform: "rotate(-180deg)"
                    }
                })
            }
        },
        Wvnz: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => N
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("tEf9"),
                a = n("TrCV"),
                s = n("DTvD"),
                l = n.n(s),
                c = n("nsO7"),
                u = n("LCuF"),
                f = n("C6y2"),
                d = n("eEXy"),
                p = n("ZIan"),
                m = n("4FKO"),
                h = n("9rW+"),
                v = n("VP0d");
            const g = function(e) {
                var t = (0, s.useState)(!1),
                    n = t[0],
                    r = t[1],
                    i = (0, s.useRef)(null);
                return (0, s.useEffect)((function() {
                    var t = new IntersectionObserver((function(e) {
                        var t = (0, v.A)(e, 1)[0];
                        r(t.isIntersecting)
                    }), e);
                    return i.current && t.observe(i.current),
                        function() {
                            i.current && t.unobserve(i.current)
                        }
                }), [e]), [n, i]
            };
            const b = function(e) {
                var t = e.children,
                    n = e.fallback,
                    r = void 0 === n ? null : n,
                    i = (0, v.A)(g({
                        threshold: .1
                    }), 2),
                    o = i[0],
                    s = i[1];
                return (0, a.jsx)("div", {
                    ref: s,
                    children: o ? t : r
                })
            };
            var x = n("WZ/o"),
                y = n("5f9E"),
                w = n("0+yZ"),
                A = (0, s.forwardRef)((function(e, t) {
                    var n, o = e.headers,
                        s = void 0 === o ? [] : o,
                        l = (0, d.Q)().isMobile,
                        c = (0, y.E)(),
                        p = c.getColumnStyle,
                        m = c.getMobileColumnStyle,
                        h = 40;
                    "object" === typeof t && null !== t && (h = (null === (n = t.current) || void 0 === n ? void 0 : n.clientHeight) || 40);
                    return (0, a.jsx)(f.A, {
                        ref: t,
                        className: "overview-table-row relative z-[1010] flex",
                        sx: {
                            py: [0, "ls", "ls"],
                            borderBottom: "none",
                            pl: ["sm", "undefined"],
                            maxHeight: 40,
                            "&&:hover": {
                                bg: "bg1"
                            },
                            "&&:hover *.tab__column > *:first-child": {
                                bg: "bg1"
                            }
                        },
                        children: s.map((function(e, t) {
                            var n = e.props,
                                o = e.children;
                            return 0 !== t || l ? (0, a.jsx)(f.A, (0, i.A)((0, r.A)({}, n), {
                                style: l ? m(t) : p(t),
                                __css: {
                                    overflow: "visible",
                                    alignItems: "center",
                                    color: ["t.disabled", "t.primary"],
                                    fontSize: ["12px", "unset"],
                                    lineHeight: ["16px", "unset"]
                                },
                                children: o
                            }), t) : (0, a.jsx)(u.A, {
                                style: p(t),
                                children: (0, a.jsxs)(f.A, (0, i.A)((0, r.A)({
                                    className: "tab__column"
                                }, n), {
                                    style: (0, r.A)({
                                        display: "flex",
                                        justifyContent: "space-between"
                                    }, l ? m(t) : p(t)),
                                    __css: {
                                        overflowX: "hidden",
                                        overflowY: "visible",
                                        alignItems: "center",
                                        color: ["t.disabled", "t.primary"],
                                        fontSize: ["12px", "unset"],
                                        lineHeight: ["16px", "unset"],
                                        position: "absolute",
                                        left: 0,
                                        pl: "sm",
                                        top: 0,
                                        zIndex: 1,
                                        height: h
                                    },
                                    children: [o, (0, a.jsx)(w.A, {})]
                                }), t)
                            }, t)
                        }))
                    })
                }));
            const E = l().memo(A);
            var S = function(e) {
                var t, n = e.loading,
                    l = e.data,
                    v = void 0 === l ? [] : l,
                    g = e.sortFunc,
                    y = void 0 === g ? null : g,
                    w = e.sortByFunc,
                    A = void 0 === w ? null : w,
                    S = e.actionLoading,
                    N = e.boxProps,
                    j = void 0 === N ? {} : N,
                    k = e.sortHeaders,
                    T = e.itemSize,
                    C = void 0 === T ? 48 : T,
                    O = e.itemCell,
                    P = e.current,
                    D = e.pageSize,
                    M = e.emptyNode,
                    _ = void 0 === M ? (0, a.jsx)(h.YQ, {
                        sx: {
                            py: "plus"
                        }
                    }) : M,
                    I = (0, p.jH)(),
                    L = (0, s.useRef)(null),
                    R = n || S || !1,
                    F = (0, s.useDeferredValue)(A),
                    B = (0, s.useMemo)((function() {
                        return y ? (0, o.A)(v).sort(y).slice((P - 1) * D, P * D) : (0, c.isEmpty)(A) ? v.slice((P - 1) * D, (P - 1) * D + D) : c.orderBy.apply(void 0, [v].concat((0, o.A)(A))).slice((P - 1) * D, (P - 1) * D + D)
                    }), [P, v, D, F, y]),
                    z = (null === (t = L.current) || void 0 === t ? void 0 : t.clientHeight) || 40,
                    V = (0, d.Q)().isTablet,
                    H = (0, s.useRef)(null),
                    W = (0, s.useState)(!1),
                    q = W[0],
                    U = W[1];
                return (0, s.useEffect)((function() {
                    V && (H.current.scrollLeft = 1e5, U(!0))
                }), [V]), (0, s.useEffect)((function() {
                    var e = H.current,
                        t = function() {
                            U(e.scrollLeft > 0)
                        };
                    return V && e.addEventListener("scroll", t),
                        function() {
                            e.removeEventListener("scroll", t)
                        }
                }), [V]), (0, a.jsxs)(m.C.Provider, {
                    value: {
                        isHorizontallyScrolled: q
                    },
                    children: [(0, a.jsx)("div", {
                        className: "relative z-0 mobile:mx-0 tablet:mx-0 pc:mx-[-16px] [&+div]:relative [&+div]:z-[997]",
                        children: (0, a.jsx)("div", {
                            ref: H,
                            className: (0, x.cn)("no-scrollbar  tablet:overflow-x-scroll", (0, c.isEmpty)(B) && "overflow-x-hidden"),
                            children: (0, a.jsxs)(u.A, (0, i.A)((0, r.A)({}, j), {
                                children: [(0, a.jsx)(E, {
                                    headers: k,
                                    ref: L
                                }), B && !!B.length && (0, a.jsxs)("div", {
                                    className: "flex-1",
                                    children: [(0, a.jsx)(h.Rh, {
                                        fullScreen: !0,
                                        inner: !0,
                                        show: R
                                    }), B && B.length > 0 ? B.map((function(e, t) {
                                        return t < 8 ? (0, a.jsx)(f.A, {
                                            height: C,
                                            direction: I,
                                            children: (0, s.cloneElement)(O, (0, i.A)((0, r.A)({}, e), {
                                                index: t,
                                                headerHeight: z
                                            }), B.length, t)
                                        }, null === e || void 0 === e ? void 0 : e.fullName) : (0, a.jsx)(b, {
                                            fallback: (0, a.jsx)("div", {
                                                style: {
                                                    height: C
                                                }
                                            }),
                                            children: (0, a.jsx)(f.A, {
                                                height: C,
                                                direction: I,
                                                children: (0, s.cloneElement)(O, (0, i.A)((0, r.A)({}, e), {
                                                    index: t,
                                                    headerHeight: z
                                                }), B.length, t)
                                            }, null === e || void 0 === e ? void 0 : e.fullName)
                                        }, null === e || void 0 === e ? void 0 : e.fullName)
                                    })) : null]
                                })]
                            }))
                        })
                    }), !(B && B.length) && _]
                })
            };
            const N = (0, s.memo)(S)
        },
        W8hv: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p,
                _: () => f
            });
            var r = n("TrCV"),
                i = n("DTvD"),
                o = n("66WT"),
                a = n("kLXr"),
                s = n("eEXy"),
                l = n("N/Ki"),
                c = n("WZ/o"),
                u = l.DK["24H"],
                f = {
                    mr: "8px",
                    "&& > div:first-of-type": {
                        maxHeight: "24px"
                    },
                    "&& .bn-input-suffix": {
                        px: 0,
                        mx: 0
                    },
                    "&& .bn-sdd-input": {
                        px: "8px",
                        color: "t.third"
                    },
                    "&& .bn-sdd-list": {
                        overflowY: "auto",
                        li: {
                            mr: 0,
                            ".bn-sdd-option": {
                                px: "xs",
                                alignItems: "start",
                                textAlign: "start",
                                color: "t.third"
                            }
                        },
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                        "::-webkit-scrollbar-thumb": {
                            bg: "transparent"
                        }
                    }
                },
                d = function(e) {
                    var t = e.windowSize,
                        n = void 0 === t ? u : t,
                        d = e.onWindowSize,
                        p = void 0 === d ? function() {} : d,
                        m = e.className,
                        h = (0, s.Q)().isMobile,
                        v = (0, l.Ef)().getI18n,
                        g = (0, i.useCallback)((function(e) {
                            p(e)
                        }), [p]);
                    return (0, i.useEffect)((function() {
                        h && g(l.DK["24H"])
                    }), [h, g]), (0, r.jsx)(o.A, {
                        value: n,
                        width: "57px",
                        size: "sm",
                        className: (0, c.cn)("[&_svg]:text-iconNormal", m),
                        sx: f,
                        variant: "line",
                        hideSearch: !0,
                        onChange: function(e) {
                            g(e)
                        },
                        children: Object.keys(l.DK).map((function(e) {
                            return (0, r.jsx)(a.c, {
                                mr: 2,
                                value: l.DK[e],
                                children: v(l.KI[l.DK[e]])
                            }, e)
                        }))
                    })
                };
            const p = (0, i.memo)(d)
        },
        NqUm: (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => a
            });
            var r = n("TrCV"),
                i = (n("DTvD"), n("ZIan")),
                o = n("lHGB"),
                a = function() {
                    return "en-GB" != (0, i.Bl)() && (0, r.jsx)(o.Ay, {
                        className: "t-Caption1 flex items-center justify-center rounded-2xs bg-bg3 px-5xs text-t-brand",
                        children: "New"
                    })
                }
        },
        c7kX: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u,
                r: () => c
            });
            var r = n("TrCV"),
                i = n("eEXy"),
                o = n("N/Ki"),
                a = n("WZ/o"),
                s = n("q7iy");

            function l(e) {
                var t = e.size,
                    n = void 0 === t ? "small" : t,
                    i = e.lineBreak,
                    l = (0, o.Ef)().t;
                return (0, r.jsx)(s.A, {
                    className: (0, a.cn)(" whitespace-nowrap tablet:w-full tablet:basis-full", i && "w-full"),
                    label: l("tags-pre-market", "Pre-Market"),
                    placement: "left",
                    size: n,
                    variant: "warn"
                })
            }

            function c() {
                var e = (0, i.Q)().isTablet;
                return (0, r.jsx)(l, {
                    size: e ? "small" : "middle"
                })
            }
            const u = l
        },
        c6HY: (e, t, n) => {
            "use strict";
            n.d(t, {
                $: () => l,
                d: () => c
            });
            var r = n("TrCV"),
                i = n("DTvD"),
                o = n("a59x"),
                a = n("N/Ki"),
                s = (0, i.createContext)({}),
                l = function() {
                    return (0, i.useContext)(s)
                },
                c = function(e) {
                    var t = e.children,
                        n = (0, i.useState)(1),
                        l = n[0],
                        c = n[1];
                    return (0, i.useEffect)((function() {
                        var e = +(0, o.Et)("p") || 1;
                        c(e)
                    }), []), (0, r.jsx)(s.Provider, {
                        value: {
                            pageSize: a.gL,
                            currentPage: l,
                            setPagination: c
                        },
                        children: t
                    })
                }
        },
        "4FKO": (e, t, n) => {
            "use strict";
            n.d(t, {
                C: () => i
            });
            var r = n("DTvD"),
                i = (0, r.createContext)({
                    isHorizontallyScrolled: !1
                })
        },
        zkm6: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("DTvD"),
                i = n("gFET"),
                o = n("zVRS");
            const a = function() {
                var e = (0, i.md)(o.a);
                return (0, r.useDeferredValue)(e)
            }
        },
        EwqH: (e, t, n) => {
            "use strict";
            n.d(t, {
                M: () => o
            });
            var r = n("DTvD"),
                i = r.useLayoutEffect;

            function o(e, t, n, o) {
                var a = (0, r.useRef)(t);
                i((function() {
                    a.current = t
                }), [t]), (0, r.useEffect)((function() {
                    var t, r = null !== (t = null === n || void 0 === n ? void 0 : n.current) && void 0 !== t ? t : window;
                    if (r && r.addEventListener) {
                        var i = function(e) {
                            a.current(e)
                        };
                        return r.addEventListener(e, i, o),
                            function() {
                                r.removeEventListener(e, i, o)
                            }
                    }
                }), [e, n, o])
            }
        },
        K2nZ: (e, t, n) => {
            "use strict";
            n.d(t, {
                S: () => o
            });
            var r = n("DTvD"),
                i = n("/G+F"),
                o = function(e) {
                    var t = e.symbol,
                        n = e.lastPrice,
                        o = e.deps,
                        a = (0, r.useRef)({}),
                        s = (0, r.useRef)("t.primary"),
                        l = (0, i.aI)(a.current, {
                            symbol: t,
                            lastPrice: n,
                            deps: o
                        }) ? s.current : function(e, t) {
                            var n = e.symbol,
                                r = e.lastPrice,
                                i = t.symbol,
                                o = t.lastPrice;
                            return i !== n || o === r || void 0 === o ? "t.primary" : o < r ? "t.buy" : "t.sell"
                        }({
                            symbol: t,
                            lastPrice: n
                        }, a.current);
                    return a.current = {
                        symbol: t,
                        lastPrice: n,
                        deps: o
                    }, s.current = l, s.current
                }
        },
        A22g: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => f,
                q: () => d
            });
            var r = n("ezuS"),
                i = n("BK7R"),
                o = n("QUKP"),
                a = n("DTvD"),
                s = n("/OND"),
                l = n("HJTh"),
                c = n("N/Ki").y1.SORT,
                u = [c],
                f = function() {
                    var e = (0, s.wA)();
                    (0, a.useEffect)((function() {
                        e.persistSetting.batchLoadSetting(u)
                    }), [])
                },
                d = function(e, t, n) {
                    var s = (0, a.useRef)(e),
                        u = (0, l.M8)(),
                        f = u.setting,
                        d = u.saveSetting,
                        p = f[c] || {};
                    return s.current = e, (0, a.useEffect)((function() {
                        void 0 === p[e] && null != t && d(c, (function(n) {
                            return (0, o.A)((0, i.A)({}, n), (0, r.A)({}, e, {
                                index: t,
                                desc: !0
                            }))
                        }))
                    }), [e]), {
                        sortInfo: p[e],
                        saveSort: (0, a.useCallback)((function(t) {
                            var a = s.current;
                            null == t.index && null != n ? d(c, (function(t) {
                                var s, l;
                                return (0, o.A)((0, i.A)({}, t), (0, r.A)({}, a, {
                                    index: n,
                                    desc: (null === (s = p[e]) || void 0 === s ? void 0 : s.index) !== n || !(!0 === (null === (l = p[e]) || void 0 === l ? void 0 : l.desc))
                                }))
                            })) : d(c, (function(e) {
                                return (0, o.A)((0, i.A)({}, e), (0, r.A)({}, a, t))
                            }))
                        }), [p, e, d, n])
                    }
                }
        },
        tpDn: (e, t, n) => {
            "use strict";
            n.d(t, {
                _O: () => g,
                e_: () => h,
                y5: () => v
            });
            var r = n("sViW"),
                i = n("BK7R"),
                o = n("QUKP"),
                a = n("VP0d"),
                s = n("Pz56"),
                l = n.n(s),
                c = n("BQ33"),
                u = n.n(c),
                f = n("nsO7"),
                d = n("T3Fm"),
                p = n("dZDg"),
                m = n("Xrpz"),
                h = 3,
                v = function() {
                    var e = (0, r.A)(l().mark((function e(t, n, r) {
                        var s, c, d, m, v, g = arguments;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s = g.length > 3 && void 0 !== g[3] ? g[3] : {}, e.t0 = a.A, e.next = 4, Promise.all([(0, p.WG)(s)]);
                                case 4:
                                    return e.t1 = e.sent, c = (0, e.t0)(e.t1, 1), d = c[0], m = u()(), v = (0, f.fromPairs)(t.map((function(e) {
                                        var t = (null === n || void 0 === n ? void 0 : n[e.symbol]) || {},
                                            r = t.open,
                                            i = t.close;
                                        return [e.symbol, {
                                            open: r,
                                            close: i
                                        }]
                                    }))), e.abrupt("return", {
                                        diffPrices: v,
                                        overviewHotCoins: d.map((function(e) {
                                            if ((0, f.has)(v, e.symbolPair)) return {
                                                symbol: e.symbolPair,
                                                baseAsset: e.symbol,
                                                quoteAsset: (0, f.trimStart)(e.symbolPair, e.symbol)
                                            };
                                            var n = t.find((function(t) {
                                                return t.baseAsset === e.symbol
                                            }));
                                            return n ? {
                                                symbol: n.symbol,
                                                baseAsset: n.baseAsset,
                                                quoteAsset: n.quoteAsset
                                            } : null
                                        })).filter(Boolean),
                                        byVolume: (0, f.sortBy)(t.filter((function(e) {
                                            return null !== e.volume && !r[e.baseAsset]
                                        })), (function(e) {
                                            return -e.volume
                                        })).slice(0, h),
                                        byNewListing: (0, f.sortBy)(t.filter((function(e) {
                                            var t = e.tagInfos,
                                                n = void 0 === t ? [] : t,
                                                r = e.listingTime;
                                            return n.find((function(e) {
                                                return "newListing" === e.tag
                                            })) && r && u()(r).isBefore(m)
                                        })), (function(e) {
                                            return -e.listingTime
                                        })).slice(0, h),
                                        comingListings: (0, f.sortBy)(t.filter((function(e) {
                                            return !r[e.baseAsset]
                                        })).map((function(e) {
                                            if (1 === e.listingCountdown && null != e.listingTime && u()(e.listingTime).isAfter(u()())) return (0, o.A)((0, i.A)({}, e), {
                                                upcomingType: "newListing",
                                                descriptionType: "willOpen",
                                                timestamp: e.listingTime
                                            });
                                            if (e.isPreMarket) {
                                                var t = e.planMarketOpenTime,
                                                    n = e.planMarketEndTime;
                                                if (t && u()(t).isAfter(m)) return (0, o.A)((0, i.A)({}, e), {
                                                    upcomingType: "preMarket",
                                                    descriptionType: "willOpen",
                                                    timestamp: t
                                                });
                                                if (n) return u()(n).isAfter(m) ? (0, o.A)((0, i.A)({}, e), {
                                                    upcomingType: "preMarket",
                                                    descriptionType: "endIn",
                                                    timestamp: n
                                                }) : null;
                                                if (e.trading) return (0, o.A)((0, i.A)({}, e), {
                                                    upcomingType: "preMarket",
                                                    descriptionType: null,
                                                    timestamp: null
                                                })
                                            }
                                            return null
                                        })).filter(Boolean), (function(e) {
                                            return [e.timestamp || 1 / 0, e.baseAsset]
                                        }))
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = (0, r.A)(l().mark((function e(t, n, r) {
                        var i, o, a, s, c;
                        return l().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return i = function() {
                                        var e, n, r, i, o;
                                        if (d.o) return {};
                                        var a = (0, m.sB)(null === t || void 0 === t || null === (e = t.req) || void 0 === e ? void 0 : e.rawHeaders);
                                        return {
                                            headers: (null === t || void 0 === t || null === (n = t.req) || void 0 === n || null === (r = n.cookies) || void 0 === r ? void 0 : r["BNC-Location"]) ? {
                                                "BNC-Location": null === (i = t.req) || void 0 === i || null === (o = i.cookies) || void 0 === o ? void 0 : o["BNC-Location"],
                                                "x-gray-env": null === a || void 0 === a ? void 0 : a["x-gray-env"]
                                            } : {
                                                "x-gray-env": null === a || void 0 === a ? void 0 : a["x-gray-env"]
                                            }
                                        }
                                    }(), o = t.appContext.redux.getState().products.productMap, a = t.appContext.redux.getState().ssrStore, s = a.coinToFilter, c = a.symbolList, e.abrupt("return", v(c, o, s, i));
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n, r) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        SD7L: (e, t, n) => {
            "use strict";
            n.d(t, {
                G: () => r
            });
            var r = (0, n("slEQ").eU)([null, {}])
        },
        KThP: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => v
            });
            var r = n("BK7R"),
                i = n("VP0d"),
                o = n("slEQ"),
                a = n("d7LA"),
                s = n("F63i");

            function l() {
                return Boolean("undefined" !== typeof s && !1)
            }
            const c = e => {
                const t = (0, a.hM)(e);
                return [t[1], t[3], (0, a.eE)(t[6]), t[11], t[14], t[16], t[17], t[15], t[13], t[12]]
            };

            function u(e) {
                const t = (0, o.eU)((() => [])),
                    n = (0, o.eU)((function(e) {
                        const [r, i, o] = e(t);
                        o.has(n) && (r.forEach(e), ++i.n)
                    }));
                return n.effect = e, n.unstable_onInit = e => {
                    const r = new Set;
                    let i, o = 0,
                        s = !1,
                        u = !1,
                        d = !1;

                    function p() {
                        if (o) return;
                        r.clear();
                        let t = !0;
                        const c = i => {
                            if (d) return e.get(i);
                            if ((0, a.s4)(n, i)) {
                                const e = g(i);
                                if (!(0, a.ZE)(e)) {
                                    if (!(0, a.qB)(i)) throw new Error("no atom init");
                                    (0, a.OF)(i, i.init, g)
                                }
                                return (0, a.d$)(e)
                            }
                            const o = b(i);
                            try {
                                return (0, a.d$)(o)
                            } finally {
                                N.d.set(i, o.n), m.get(i) ? .t.add(n), t ? r.add(i) : m.has(i) && (y(n), A(), E())
                            }
                        };
                        c.peek = e.get;
                        const f = (e, ...r) => {
                            const i = g(e);
                            try {
                                if (++o, (0, a.s4)(n, e)) {
                                    if (!(0, a.qB)(e)) throw new Error("atom not writable");
                                    const t = i.n,
                                        n = r[0];
                                    return (0, a.OF)(e, n, g), y(e), void(t !== i.n && (h.add(e), v.c ? .(e), w(e)))
                                }
                                return x(e, ...r)
                            } finally {
                                t || (A(), E()), --o
                            }
                        };
                        f.recurse = (e, ...t) => {
                            if (d) {
                                if (l()) throw new Error("set.recurse is not allowed in cleanup")
                            } else try {
                                return s = !0, y(n), f(e, ...t)
                            } finally {
                                A(), s = !1, u && (u = !1, p())
                            }
                        };
                        try {
                            i ? .();
                            const e = n.effect(c, f);
                            if ("function" !== typeof e) return;
                            i = () => {
                                if (!o) try {
                                    return t = !0, d = !0, e()
                                } finally {
                                    t = !1, d = !1, i = void 0
                                }
                            }
                        } finally {
                            t = !1, r.forEach((e => {
                                N.d.set(e, g(e).n)
                            })), y(n), A()
                        }
                    }
                    const [m, h, v, g, b, x, y, w, A, E] = c(e), S = function(e) {
                        const t = c(e)[2];
                        let n = f.get(e);
                        if (!n) {
                            n = new Set, f.set(e, n);
                            const r = e => e();
                            t.f.add((function() {
                                n.forEach(r), n.clear()
                            }))
                        }
                        return n
                    }(e), N = g(n);
                    N.v = void 0, Object.assign(e.get(t), [r, N, m]), v.m.add(n, (function() {
                        S.add(p), i && S.delete(i)
                    })), v.u.add(n, (function() {
                        S.delete(p), i && S.add(i)
                    })), v.c.add(n, (function() {
                        s ? u = !0 : S.add(p)
                    }))
                }, l() && (Object.defineProperty(t, "debugLabel", {
                    get: () => n.debugLabel ? `${n.debugLabel}:ref` : void 0
                }), t.debugPrivate = !0), n
            }
            const f = new WeakMap;
            var d = n("nsO7"),
                p = n("N/Ki"),
                m = n("AcsR"),
                h = n("SD7L"),
                v = function(e, t) {
                    const n = u(((t, n) => {
                        const r = n => t(n === o ? e : n);
                        return r.peek = t.peek, o.effect(r, n)
                    }));
                    l() && (Object.defineProperty(n, "debugLabel", {
                        get: () => `${o.debugLabel??"atomWithEffect"}:effect`
                    }), n.debugPrivate = !0);
                    const r = Object.getOwnPropertyDescriptors(e);
                    r.read.value = t => {
                        try {
                            return t(e)
                        } finally {
                            t(n)
                        }
                    }, "write" in e && "function" === typeof e.write && (r.write.value = e.write.bind(e), delete r.onMount);
                    const i = Object.getPrototypeOf(e),
                        o = Object.create(i, r);
                    return o.effect = t, o
                }((0, o.eU)(), (function(e, t) {
                    var n = e(v);
                    if (null != n) {
                        if (n !== p.DK["24H"]) {
                            t(h.G, [n, {}]);
                            var o = null,
                                a = m.f0.getStreamTickersWithWindowSizeRaw(n).subscribe((function(e) {
                                    null != o && window.cancelIdleCallback && window.cancelIdleCallback(o);
                                    var a = function() {
                                        t.recurse(h.G, (function(t) {
                                            var o = (0, i.A)(t, 2),
                                                a = (o[0], o[1]);
                                            return [n, (0, r.A)({}, a, (0, d.mapValues)(e, (function(e) {
                                                return {
                                                    open: parseFloat(e.o),
                                                    close: parseFloat(e.c)
                                                }
                                            })))]
                                        }))
                                    };
                                    o = window.requestIdleCallback ? window.requestIdleCallback(a) : (a(), null)
                                }));
                            return function() {
                                a(), null != o && window.cancelIdleCallback && window.cancelIdleCallback(o)
                            }
                        }
                        t(h.G, [null, {}])
                    }
                }))
        },
        zVRS: (e, t, n) => {
            "use strict";
            n.d(t, {
                a: () => r
            });
            var r = (0, n("slEQ").eU)(0)
        },
        q5Ye: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M16.5 8.49v2.25L12 15.51l-4.5-4.77V8.49h9z",
                    fill: "currentColor"
                }))
            }
        },
        "/Izd": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M16.5 15.51v-2.25L12 8.49l-4.5 4.77v2.25h9z",
                    fill: "currentColor"
                }))
            }
        },
        "9mmq": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zM10.75 8.5V6h2.5v2.5h-2.5zm0 9.5v-7h2.5v7h-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        xPup: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M18 3H3v18h9.222A5.5 5.5 0 0118 11.97V3zM5.02 9.286L8.556 5.75l3.182 3.182 3.181-3.182 1.061 1.06-4.242 4.243-3.182-3.182-2.475 2.475-1.061-1.06zm12.544 9.278a2 2 0 10-2.828-2.828 2 2 0 002.828 2.828zm1.414-4.242a4.002 4.002 0 01.744 4.63l2.276 2.278-1.767 1.767-2.277-2.276a4.002 4.002 0 01-4.633-6.4 4 4 0 015.657 0z",
                    fill: "currentColor"
                }))
            }
        },
        "3WzJ": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16 3h3v4h3v9.999h-3v4h-3v-4h-3V7h3V3zm3 7h-3v3.999h3V10z",
                    fill: "currentColor"
                }), o().createElement("path", {
                    d: "M8 11h3v6H8v4H5v-4H2v-6h3V7h3v4z",
                    fill: "currentColor"
                }))
            }
        },
        DzvH: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M3 10.5v3h18v-3H3z",
                    fill: "currentColor"
                }))
            }
        },
        jibv: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M13.5 3h-3v7.5H3v3h7.5V21h3v-7.5H21v-3h-7.5V3z",
                    fill: "currentColor"
                }))
            }
        },
        C52N: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => m
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("O94r"),
                s = n.n(a),
                l = n("STQw"),
                c = n("onZP"),
                u = function(e) {
                    var t = e.path,
                        n = e.pathPrefix,
                        r = e.subDomain,
                        i = e.isRegionMode,
                        o = e.level2Domain,
                        a = e.lang;
                    try {
                        var s = "https://binance.com",
                            l = new URL(t, s),
                            c = function(e) {
                                return e.replace(/^\/+|\/+$/g, "")
                            }(n),
                            u = "/".concat(c).concat(l.pathname).replace(/\/+/g, "/"),
                            f = new URL(u, s);
                        l.searchParams.forEach((function(e, t) {
                            f.searchParams.set(t, e)
                        })), i && f.searchParams.set("hl", a || "en");
                        var d = f.pathname + f.search + l.hash;
                        return r && (d = "https://".concat(r, ".").concat(o).concat(d)), d
                    } catch (p) {
                        return console.error("Error generating href:", p), t
                    }
                },
                f = (n("kPx0"), n("NPYb"), /^[a-zA-Z][a-zA-Z\d+\-.]*?:/),
                d = function(e) {
                    return f.test(e)
                };
            var p = o().forwardRef((function(e, t) {
                var n = e.path,
                    o = e.subDomain,
                    a = e.className,
                    f = (0, r.__rest)(e, ["path", "subDomain", "className"]),
                    p = (0, l.r)().prefixCls,
                    m = (0, c.x)(),
                    h = m.pathPrefix,
                    v = m.isRegionMode,
                    g = m.level2Domain,
                    b = m.lang,
                    x = "".concat(p, "-balink"),
                    y = s()(x, a);
                if (!h) throw new Error("pathPrefix is required in Provider");
                if (d(n)) throw new Error("path should be relative URL");
                if (o && !g) throw new Error("level2Domain is required in Provider when subDomain is provided");
                var w = {
                    role: e.role || "link",
                    "aria-label": e["aria-label"] || "balink"
                };
                return (0, i.createElement)("a", (0, r.__assign)((0, r.__assign)({
                    className: y,
                    href: u({
                        path: n,
                        pathPrefix: h,
                        subDomain: o,
                        isRegionMode: v,
                        level2Domain: g,
                        lang: b
                    }),
                    ref: t
                }, w), f))
            }));
            p.displayName = "BALink";
            const m = p
        },
        "U/k/": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("hTvQ"),
                s = n.n(a),
                l = n("O94r"),
                c = n.n(l),
                u = n("qrIQ"),
                f = n("lHGB"),
                d = n("STQw"),
                p = {
                    top: "marginBottom",
                    left: "marginRight",
                    right: "marginLeft",
                    bottom: "marginTop"
                },
                m = function(e) {
                    var t = e.placement,
                        n = e.offset,
                        r = e.isArrow,
                        i = t.split("-"),
                        o = i[0],
                        a = i[1],
                        s = a ? 0 : "50%",
                        l = r ? {
                            top: " rotate(-135deg)",
                            right: " rotate(-45deg)",
                            bottom: " rotate(45deg)",
                            left: " rotate(135deg)"
                        }[o] : "",
                        c = r ? n - Math.floor(3) : "100%",
                        u = a ? r ? 9 : 0 : "50%";
                    return ("end" === a ? {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(l),
                            bottom: c,
                            right: u
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(l),
                            right: c,
                            bottom: u
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(l),
                            left: c,
                            bottom: u
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(l),
                            top: c,
                            right: u
                        }
                    } : {
                        top: {
                            transform: "translate(-".concat(s, ", 0)").concat(l),
                            bottom: c,
                            left: u
                        },
                        left: {
                            transform: "translate(0, -".concat(s, ")").concat(l),
                            right: c,
                            top: u
                        },
                        right: {
                            transform: "translate(0, -".concat(s, ")").concat(l),
                            left: c,
                            top: u
                        },
                        bottom: {
                            transform: "translate(-".concat(s, ", 0)").concat(l),
                            top: c,
                            left: u
                        }
                    })[o]
                },
                h = (n("VNw5"), function(e) {
                    var t, n, i = e.arrow,
                        a = e.shadow,
                        l = e.isFloat,
                        h = e.offset,
                        v = void 0 === h ? 6 : h,
                        g = e.variant,
                        b = void 0 === g ? "primary" : g,
                        x = e.placement,
                        y = void 0 === x ? "top" : x,
                        w = e.enablePortal,
                        A = e.portalNode,
                        E = e.style,
                        S = e.radius,
                        N = e.bubbleFontSize,
                        j = void 0 === N ? 14 : N,
                        k = (0, r.__rest)(e, ["arrow", "shadow", "isFloat", "offset", "variant", "placement", "enablePortal", "portalNode", "style", "radius", "bubbleFontSize"]),
                        T = (0, d.r)().prefixCls,
                        C = "".concat(T, "-bubble"),
                        O = c()(C, ((t = {})["".concat(C, "__").concat(b)] = !!b, t["data-shadow"] = !!a, t["data-font-".concat(j)] = !!j, t), e.className);
                    v = i ? Math.max(v, 4) : v;
                    var P = y.split("-")[0],
                        D = l ? m({
                            offset: v,
                            placement: y
                        }) : {},
                        M = m({
                            offset: v,
                            placement: y,
                            isArrow: !0
                        }),
                        _ = ((n = {})[p[P]] = v, n.borderRadius = S, n),
                        I = o().createElement(f.Ay, (0, r.__assign)({}, k, {
                            className: O,
                            style: (0, r.__assign)((0, r.__assign)({}, D), E)
                        }), !!i && o().createElement(f.Ay, {
                            className: "".concat(C, "-arrow"),
                            style: M
                        }), !!i && !!a && o().createElement(f.Ay, {
                            className: "".concat(C, "-arrow-shadow"),
                            style: M
                        }), o().createElement(f.Ay, {
                            style: _,
                            className: "".concat(C, "-content"),
                            children: e.children
                        }));
                    return !u.lq && w ? s().createPortal(I, A instanceof HTMLElement ? A : document.body) : I
                });
            h.displayName = "Bubble";
            const v = h
        },
        q7iy: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("O94r"),
                s = n.n(a),
                l = n("lHGB"),
                c = n("U/k/"),
                u = n("STQw"),
                f = function(e) {
                    var t, n = e.label,
                        a = e.arrow,
                        f = e.size,
                        d = void 0 === f ? "middle" : f,
                        p = e.placement,
                        m = void 0 === p ? "right" : p,
                        h = e.variant,
                        v = void 0 === h ? "primary" : h,
                        g = e.labelIcon,
                        b = e.offset,
                        x = e.cornerPosition,
                        y = e.iconPosition,
                        w = void 0 === y ? "start" : y,
                        A = e.radius,
                        E = (0, r.__rest)(e, ["label", "arrow", "size", "placement", "variant", "labelIcon", "offset", "cornerPosition", "iconPosition", "radius"]),
                        S = (0, u.r)(),
                        N = S.prefixCls,
                        j = S.isRTL,
                        k = "".concat(N, "-tag"),
                        T = s()("".concat(k, "-wrap"), e.className),
                        C = {
                            variant: v,
                            arrow: a,
                            placement: m,
                            className: s()(k, ((t = {})["data-size-".concat(d)] = !!d, t["data-corner-".concat(x)] = !!x, t)),
                            offset: x || !e.children ? 0 : b,
                            radius: A
                        },
                        O = (0, i.useMemo)((function() {
                            if (!g) return n;
                            var e = "end" !== w === !j;
                            return o().createElement(o().Fragment, null, e && g, n, !e && g)
                        }), [n, g, w, j]);
                    return o().createElement(l.Ay, (0, r.__assign)({}, E, {
                        className: T
                    }), /^left/.test(m) && o().createElement(c.A, (0, r.__assign)({}, C), O), e.children, /^right/.test(m) && o().createElement(c.A, (0, r.__assign)({}, C), O))
                };
            f.displayName = "Tag";
            const d = f
        },
        "73Dv": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => me
            });
            var r, i = n("wIZF"),
                o = n("DTvD"),
                a = n.n(o);

            function s(e, t) {
                var n = {};
                for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
                if (null != e && "function" === typeof Object.getOwnPropertySymbols) {
                    var i = 0;
                    for (r = Object.getOwnPropertySymbols(e); i < r.length; i++) t.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]])
                }
                return n
            }

            function l() {}

            function c(e) {
                return !!(e || "").match(/\d/)
            }

            function u(e) {
                return null === e || void 0 === e
            }

            function f(e) {
                return u(e) || function(e) {
                    return "number" === typeof e && isNaN(e)
                }(e) || "number" === typeof e && !isFinite(e)
            }

            function d(e) {
                return e.replace(/[-[\]/{}()*+?.\\^$|]/g, "\\$&")
            }

            function p(e, t) {
                void 0 === t && (t = !0);
                var n = "-" === e[0],
                    r = n && t,
                    i = (e = e.replace("-", "")).split(".");
                return {
                    beforeDecimal: i[0],
                    afterDecimal: i[1] || "",
                    hasNegation: n,
                    addNegation: r
                }
            }

            function m(e, t, n) {
                for (var r = "", i = n ? "0" : "", o = 0; o <= t - 1; o++) r += e[o] || i;
                return r
            }

            function h(e, t) {
                return Array(t + 1).join(e)
            }

            function v(e) {
                var t = e + "",
                    n = "-" === t[0] ? "-" : "";
                n && (t = t.substring(1));
                var r = t.split(/[eE]/g),
                    i = r[0],
                    o = r[1];
                if (!(o = Number(o))) return n + i;
                var a = 1 + o,
                    s = (i = i.replace(".", "")).length;
                return a < 0 ? i = "0." + h("0", Math.abs(a)) + i : a >= s ? i += h("0", a - s) : i = (i.substring(0, a) || "0") + "." + i.substring(a), n + i
            }

            function g(e, t, n) {
                if (-1 !== ["", "-"].indexOf(e)) return e;
                var r = (-1 !== e.indexOf(".") || n) && t,
                    i = p(e),
                    o = i.beforeDecimal,
                    a = i.afterDecimal,
                    s = i.hasNegation,
                    l = parseFloat("0." + (a || "0")),
                    c = (a.length <= t ? "0." + a : l.toFixed(t)).split("."),
                    u = o;
                return o && Number(c[0]) && (u = o.split("").reverse().reduce((function(e, t, n) {
                    return e.length > n ? (Number(e[0]) + Number(t)).toString() + e.substring(1, e.length) : t + e
                }), c[0])), "" + (s ? "-" : "") + u + (r ? "." : "") + m(c[1] || "", t, n)
            }

            function b(e, t) {
                if (e.value = e.value, null !== e) {
                    if (e.createTextRange) {
                        var n = e.createTextRange();
                        return n.move("character", t), n.select(), !0
                    }
                    return e.selectionStart || 0 === e.selectionStart ? (e.focus(), e.setSelectionRange(t, t), !0) : (e.focus(), !1)
                }
            }! function(e) {
                e.event = "event", e.props = "prop"
            }(r || (r = {}));
            var x = function(e) {
                var t, n = void 0;
                return function() {
                    for (var r = [], i = arguments.length; i--;) r[i] = arguments[i];
                    return t && r.length === t.length && r.every((function(e, n) {
                        return e === t[n]
                    })) ? n : (t = r, n = e.apply(void 0, r))
                }
            }((function(e, t) {
                for (var n = 0, r = 0, i = e.length, o = t.length; e[n] === t[n] && n < i;) n++;
                for (; e[i - 1 - r] === t[o - 1 - r] && o - r > n && i - r > n;) r++;
                return {
                    from: {
                        start: n,
                        end: i - r
                    },
                    to: {
                        start: n,
                        end: o - r
                    }
                }
            }));

            function y(e) {
                return Math.max(e.selectionStart, e.selectionEnd)
            }

            function w(e) {
                return {
                    from: {
                        start: 0,
                        end: 0
                    },
                    to: {
                        start: 0,
                        end: e.length
                    },
                    lastValue: ""
                }
            }

            function A(e) {
                var t = e.currentValue,
                    n = e.formattedValue,
                    r = e.currentValueIndex,
                    i = e.formattedValueIndex;
                return t[r] === n[i]
            }

            function E(e, t, n, r) {
                var i, o, a, s = e.length;
                if (i = t, o = 0, a = s, t = Math.min(Math.max(i, o), a), "left" === r) {
                    for (; t >= 0 && !n[t];) t--; - 1 === t && (t = n.indexOf(!0))
                } else {
                    for (; t <= s && !n[t];) t++;
                    t > s && (t = n.lastIndexOf(!0))
                }
                return -1 === t && (t = s), t
            }

            function S(e) {
                for (var t = Array.from({
                        length: e.length + 1
                    }).map((function() {
                        return !0
                    })), n = 0, r = t.length; n < r; n++) t[n] = Boolean(c(e[n]) || c(e[n - 1]));
                return t
            }

            function N(e, t, n, r, i, a) {
                void 0 === a && (a = l);
                var s = function(e) {
                        var t = (0, o.useRef)(e);
                        t.current = e;
                        var n = (0, o.useRef)((function() {
                            for (var e = [], n = arguments.length; n--;) e[n] = arguments[n];
                            return t.current.apply(t, e)
                        }));
                        return n.current
                    }((function(e, t) {
                        var n, o;
                        return f(e) ? (o = "", n = "") : "number" === typeof e || t ? (o = "number" === typeof e ? v(e) : e, n = r(o)) : (o = i(e, void 0), n = r(o)), {
                            formattedValue: n,
                            numAsString: o
                        }
                    })),
                    c = (0, o.useState)((function() {
                        return s(u(e) ? t : e, n)
                    })),
                    d = c[0],
                    p = c[1],
                    m = e,
                    h = n;
                u(e) && (m = d.numAsString, h = !0);
                var g = s(m, h);
                return (0, o.useMemo)((function() {
                    p(g)
                }), [g.formattedValue]), [d, function(e, t) {
                    e.formattedValue !== d.formattedValue && p({
                        formattedValue: e.formattedValue,
                        numAsString: e.value
                    }), a(e, t)
                }]
            }

            function j(e) {
                return e.replace(/[^0-9]/g, "")
            }

            function k(e) {
                return e
            }

            function T(e) {
                var t = e.type;
                void 0 === t && (t = "text");
                var n = e.displayType;
                void 0 === n && (n = "input");
                var i = e.customInput,
                    u = e.renderText,
                    f = e.getInputRef,
                    d = e.format;
                void 0 === d && (d = k);
                var p = e.removeFormatting;
                void 0 === p && (p = j);
                var m = e.defaultValue,
                    h = e.valueIsNumericString,
                    v = e.onValueChange,
                    g = e.isAllowed,
                    w = e.onChange;
                void 0 === w && (w = l);
                var T = e.onKeyDown;
                void 0 === T && (T = l);
                var C = e.onMouseUp;
                void 0 === C && (C = l);
                var O = e.onFocus;
                void 0 === O && (O = l);
                var P = e.onBlur;
                void 0 === P && (P = l);
                var D = e.value,
                    M = e.getCaretBoundary;
                void 0 === M && (M = S);
                var _ = e.isValidInputCharacter;
                void 0 === _ && (_ = c);
                var I = e.isCharacterSame,
                    L = s(e, ["type", "displayType", "customInput", "renderText", "getInputRef", "format", "removeFormatting", "defaultValue", "valueIsNumericString", "onValueChange", "isAllowed", "onChange", "onKeyDown", "onMouseUp", "onFocus", "onBlur", "value", "getCaretBoundary", "isValidInputCharacter", "isCharacterSame"]),
                    R = N(D, m, Boolean(h), d, p, v),
                    F = R[0],
                    B = F.formattedValue,
                    z = F.numAsString,
                    V = R[1],
                    H = (0, o.useRef)(),
                    W = (0, o.useRef)({
                        formattedValue: B,
                        numAsString: z
                    }),
                    q = function(e, t) {
                        W.current = {
                            formattedValue: e.formattedValue,
                            numAsString: e.value
                        }, V(e, t)
                    },
                    U = (0, o.useState)(!1),
                    G = U[0],
                    K = U[1],
                    $ = (0, o.useRef)(null),
                    Y = (0, o.useRef)({
                        setCaretTimeout: null,
                        focusTimeout: null
                    });
                (0, o.useEffect)((function() {
                    return K(!0),
                        function() {
                            clearTimeout(Y.current.setCaretTimeout), clearTimeout(Y.current.focusTimeout)
                        }
                }), []);
                var Z = d,
                    Q = function(e, t) {
                        var n = parseFloat(t);
                        return {
                            formattedValue: e,
                            value: t,
                            floatValue: isNaN(n) ? void 0 : n
                        }
                    },
                    X = function(e, t, n) {
                        0 === e.selectionStart && e.selectionEnd === e.value.length || (b(e, t), Y.current.setCaretTimeout = setTimeout((function() {
                            e.value === n && e.selectionStart !== t && b(e, t)
                        }), 0))
                    },
                    J = function(e, t, n) {
                        return E(e, t, M(e), n)
                    },
                    ee = function(e, t, n) {
                        var r = M(t),
                            i = function(e, t, n, r, i, o, a) {
                                void 0 === a && (a = A);
                                var s = i.findIndex((function(e) {
                                        return e
                                    })),
                                    l = e.slice(0, s);
                                t || n.startsWith(l) || (t = l, n = l + n, r += l.length);
                                for (var c = n.length, u = e.length, f = {}, d = new Array(c), p = 0; p < c; p++) {
                                    d[p] = -1;
                                    for (var m = 0, h = u; m < h; m++)
                                        if (a({
                                                currentValue: n,
                                                lastValue: t,
                                                formattedValue: e,
                                                currentValueIndex: p,
                                                formattedValueIndex: m
                                            }) && !0 !== f[m]) {
                                            d[p] = m, f[m] = !0;
                                            break
                                        }
                                }
                                for (var v = r; v < c && (-1 === d[v] || !o(n[v]));) v++;
                                var g = v === c || -1 === d[v] ? u : d[v];
                                for (v = r - 1; v > 0 && -1 === d[v];) v--;
                                var b = -1 === v || -1 === d[v] ? 0 : d[v] + 1;
                                return b > g ? g : r - b < g - r ? b : g
                            }(t, B, e, n, r, _, I);
                        return i = E(t, i, r)
                    };
                (0, o.useEffect)((function() {
                    var e = W.current,
                        t = e.formattedValue,
                        n = e.numAsString;
                    B === t && z === n || q(Q(B, z), {
                        event: void 0,
                        source: r.props
                    })
                }), [B, z]);
                var te = $.current ? y($.current) : void 0;
                (0, o.useLayoutEffect)((function() {
                    var e = $.current;
                    if (B !== W.current.formattedValue && e) {
                        var t = ee(W.current.formattedValue, B, te);
                        e.value = B, X(e, t, B)
                    }
                }), [B]);
                var ne = function(e, t, n) {
                        var r = t.target,
                            i = H.current ? function(e, t) {
                                var n = Math.min(e.selectionStart, t);
                                return {
                                    from: {
                                        start: n,
                                        end: e.selectionEnd
                                    },
                                    to: {
                                        start: n,
                                        end: t
                                    }
                                }
                            }(H.current, r.selectionEnd) : x(B, e),
                            o = Object.assign(Object.assign({}, i), {
                                lastValue: B
                            }),
                            a = p(e, o),
                            s = Z(a);
                        if (a = p(s, void 0), g && !g(Q(s, a))) {
                            var l = t.target,
                                c = y(l),
                                u = ee(e, B, c);
                            return l.value = B, X(l, u, B), !1
                        }
                        return function(e) {
                            var t = e.formattedValue;
                            void 0 === t && (t = "");
                            var n, r = e.input,
                                i = e.source,
                                o = e.event,
                                a = e.numAsString;
                            if (r) {
                                var s = e.inputValue || r.value,
                                    l = y(r);
                                r.value = t, void 0 !== (n = ee(s, t, l)) && X(r, n, t)
                            }
                            t !== B && q(Q(t, a), {
                                event: o,
                                source: i
                            })
                        }({
                            formattedValue: s,
                            numAsString: a,
                            inputValue: e,
                            event: t,
                            source: n,
                            input: t.target
                        }), !0
                    },
                    re = function(e, t) {
                        void 0 === t && (t = 0);
                        var n = e.selectionStart,
                            r = e.selectionEnd;
                        H.current = {
                            selectionStart: n,
                            selectionEnd: r + t
                        }
                    },
                    ie = !G || "undefined" === typeof navigator || navigator.platform && /iPhone|iPod/.test(navigator.platform) ? void 0 : "numeric",
                    oe = Object.assign({
                        inputMode: ie
                    }, L, {
                        type: t,
                        value: B,
                        onChange: function(e) {
                            var t = e.target.value;
                            ne(t, e, r.event) && w(e), H.current = void 0
                        },
                        onKeyDown: function(e) {
                            var t, n = e.target,
                                r = e.key,
                                i = n.selectionStart,
                                o = n.selectionEnd,
                                a = n.value;
                            void 0 === a && (a = ""), "ArrowLeft" === r || "Backspace" === r ? t = Math.max(i - 1, 0) : "ArrowRight" === r ? t = Math.min(i + 1, a.length) : "Delete" === r && (t = i);
                            var s = 0;
                            "Delete" === r && i === o && (s = 1);
                            var l = "ArrowLeft" === r || "ArrowRight" === r;
                            if (void 0 === t || i !== o && !l) return T(e), void re(n, s);
                            var c = t;
                            l ? (c = J(a, t, "ArrowLeft" === r ? "left" : "right")) !== t && e.preventDefault() : "Delete" !== r || _(a[t]) ? "Backspace" !== r || _(a[t]) || (c = J(a, t, "left")) : c = J(a, t, "right");
                            c !== t && X(n, c, a), T(e), re(n, s)
                        },
                        onMouseUp: function(e) {
                            var t = e.target,
                                n = function() {
                                    var e = t.selectionStart,
                                        n = t.selectionEnd,
                                        r = t.value;
                                    if (void 0 === r && (r = ""), e === n) {
                                        var i = J(r, e);
                                        i !== e && X(t, i, r)
                                    }
                                };
                            n(), requestAnimationFrame((function() {
                                n()
                            })), C(e), re(t)
                        },
                        onFocus: function(e) {
                            e.persist && e.persist();
                            var t = e.target,
                                n = e.currentTarget;
                            $.current = t, Y.current.focusTimeout = setTimeout((function() {
                                var r = t.selectionStart,
                                    i = t.selectionEnd,
                                    o = t.value;
                                void 0 === o && (o = "");
                                var a = J(o, r);
                                a === r || 0 === r && i === o.length || X(t, a, o), O(Object.assign(Object.assign({}, e), {
                                    currentTarget: n
                                }))
                            }), 0)
                        },
                        onBlur: function(e) {
                            $.current = null, clearTimeout(Y.current.focusTimeout), clearTimeout(Y.current.setCaretTimeout), P(e)
                        }
                    });
                if ("text" === n) return u ? a().createElement(a().Fragment, null, u(B, L) || null) : a().createElement("span", Object.assign({}, L, {
                    ref: f
                }), B);
                if (i) {
                    var ae = i;
                    return a().createElement(ae, Object.assign({}, oe, {
                        ref: f
                    }))
                }
                return a().createElement("input", Object.assign({}, oe, {
                    ref: f
                }))
            }

            function C(e, t) {
                var n = t.decimalScale,
                    r = t.fixedDecimalScale,
                    i = t.prefix;
                void 0 === i && (i = "");
                var o = t.suffix;
                void 0 === o && (o = "");
                var a = t.allowNegative,
                    s = t.thousandsGroupStyle;
                if (void 0 === s && (s = "thousand"), "" === e || "-" === e) return e;
                var l = O(t),
                    c = l.thousandSeparator,
                    u = l.decimalSeparator,
                    f = 0 !== n && -1 !== e.indexOf(".") || n && r,
                    d = p(e, a),
                    h = d.beforeDecimal,
                    v = d.afterDecimal,
                    g = d.addNegation;
                return void 0 !== n && (v = m(v, n, !!r)), c && (h = function(e, t, n) {
                    var r = function(e) {
                            switch (e) {
                                case "lakh":
                                    return /(\d+?)(?=(\d\d)+(\d)(?!\d))(\.\d+)?/g;
                                case "wan":
                                    return /(\d)(?=(\d{4})+(?!\d))/g;
                                default:
                                    return /(\d)(?=(\d{3})+(?!\d))/g
                            }
                        }(n),
                        i = e.search(/[1-9]/);
                    return i = -1 === i ? e.length : i, e.substring(0, i) + e.substring(i, e.length).replace(r, "$1" + t)
                }(h, c, s)), i && (h = i + h), o && (v += o), g && (h = "-" + h), e = h + (f && u || "") + v
            }

            function O(e) {
                var t = e.decimalSeparator;
                void 0 === t && (t = ".");
                var n = e.thousandSeparator,
                    r = e.allowedDecimalSeparators;
                return !0 === n && (n = ","), r || (r = [t, "."]), {
                    decimalSeparator: t,
                    thousandSeparator: n,
                    allowedDecimalSeparators: r
                }
            }

            function P(e, t, n) {
                var r;
                void 0 === t && (t = w(e));
                var i = n.allowNegative,
                    o = n.prefix;
                void 0 === o && (o = "");
                var a = n.suffix;
                void 0 === a && (a = "");
                var s = n.decimalScale,
                    l = t.from,
                    u = t.to,
                    f = u.start,
                    m = u.end,
                    h = O(n),
                    v = h.allowedDecimalSeparators,
                    g = h.decimalSeparator,
                    b = e[m] === g;
                if (c(e) && (e === o || e === a) && "" === t.lastValue) return e;
                if (m - f === 1 && -1 !== v.indexOf(e[f])) {
                    var x = 0 === s ? "" : g;
                    e = e.substring(0, f) + x + e.substring(f + 1, e.length)
                }
                var y = function(e, t, n) {
                        var r = !1,
                            i = !1;
                        o.startsWith("-") ? r = !1 : e.startsWith("--") ? (r = !1, i = !0) : a.startsWith("-") && e.length === a.length ? r = !1 : "-" === e[0] && (r = !0);
                        var s = r ? 1 : 0;
                        return i && (s = 2), s && (e = e.substring(s), t -= s, n -= s), {
                            value: e,
                            start: t,
                            end: n,
                            hasNegation: r
                        }
                    },
                    A = y(e, f, m),
                    E = A.hasNegation;
                e = (r = A).value, f = r.start, m = r.end;
                var S = y(t.lastValue, l.start, l.end),
                    N = S.start,
                    j = S.end,
                    k = S.value,
                    T = e.substring(f, m);
                !(e.length && k.length && (N > k.length - a.length || j < o.length)) || T && a.startsWith(T) || (e = k);
                var C = 0;
                e.startsWith(o) ? C += o.length : f < o.length && (C = f), m -= C;
                var P = (e = e.substring(C)).length,
                    D = e.length - a.length;
                e.endsWith(a) ? P = D : (m > D || m > e.length - a.length) && (P = m), e = e.substring(0, P), e = function(e, t) {
                    void 0 === e && (e = "");
                    var n = new RegExp("(-)"),
                        r = new RegExp("(-)(.)*(-)"),
                        i = n.test(e),
                        o = r.test(e);
                    return e = e.replace(/-/g, ""), i && !o && t && (e = "-" + e), e
                }(E ? "-" + e : e, i), e = (e.match(function(e, t) {
                    return new RegExp("(^-)|[0-9]|" + d(e), t ? "g" : void 0)
                }(g, !0)) || []).join("");
                var M = e.indexOf(g),
                    _ = p(e = e.replace(new RegExp(d(g), "g"), (function(e, t) {
                        return t === M ? "." : ""
                    })), i),
                    I = _.beforeDecimal,
                    L = _.afterDecimal,
                    R = _.addNegation;
                return u.end - u.start < l.end - l.start && "" === I && b && !parseFloat(L) && (e = R ? "-" : ""), e
            }

            function D(e) {
                e = function(e) {
                    var t = O(e),
                        n = t.thousandSeparator,
                        r = t.decimalSeparator,
                        i = e.prefix;
                    void 0 === i && (i = "");
                    var o = e.allowNegative;
                    if (void 0 === o && (o = !0), n === r) throw new Error("\n        Decimal separator can't be same as thousand separator.\n        thousandSeparator: " + n + ' (thousandSeparator = {true} is same as thousandSeparator = ",")\n        decimalSeparator: ' + r + " (default value for decimalSeparator is .)\n     ");
                    return i.startsWith("-") && o && (console.error("\n      Prefix can't start with '-' when allowNegative is true.\n      prefix: " + i + "\n      allowNegative: " + o + "\n    "), o = !1), Object.assign(Object.assign({}, e), {
                        allowNegative: o
                    })
                }(e);
                e.decimalSeparator, e.allowedDecimalSeparators, e.thousandsGroupStyle;
                var t = e.suffix,
                    n = e.allowNegative,
                    i = e.allowLeadingZeros,
                    o = e.onKeyDown;
                void 0 === o && (o = l);
                var a = e.onBlur;
                void 0 === a && (a = l);
                var d = e.thousandSeparator,
                    p = e.decimalScale,
                    m = e.fixedDecimalScale,
                    h = e.prefix;
                void 0 === h && (h = "");
                var y = e.defaultValue,
                    w = e.value,
                    A = e.valueIsNumericString,
                    E = e.onValueChange,
                    S = s(e, ["decimalSeparator", "allowedDecimalSeparators", "thousandsGroupStyle", "suffix", "allowNegative", "allowLeadingZeros", "onKeyDown", "onBlur", "thousandSeparator", "decimalScale", "fixedDecimalScale", "prefix", "defaultValue", "value", "valueIsNumericString", "onValueChange"]),
                    j = O(e),
                    k = j.decimalSeparator,
                    T = j.allowedDecimalSeparators,
                    D = function(t) {
                        return C(t, e)
                    },
                    M = function(t, n) {
                        return P(t, n, e)
                    },
                    _ = u(w) ? y : w,
                    I = null !== A && void 0 !== A ? A : function(e, t, n) {
                        return "" === e || !(null === t || void 0 === t ? void 0 : t.match(/\d/)) && !(null === n || void 0 === n ? void 0 : n.match(/\d/)) && "string" === typeof e && !isNaN(Number(e))
                    }(_, h, t);
                u(w) ? u(y) || (I = I || "number" === typeof y) : I = I || "number" === typeof w;
                var L = function(e) {
                        return f(e) ? e : ("number" === typeof e && (e = v(e)), I && "number" === typeof p ? g(e, p, Boolean(m)) : e)
                    },
                    R = N(L(w), L(y), Boolean(I), D, M, E),
                    F = R[0],
                    B = F.numAsString,
                    z = F.formattedValue,
                    V = R[1];
                return Object.assign(Object.assign({}, S), {
                    value: z,
                    valueIsNumericString: !1,
                    isValidInputCharacter: function(e) {
                        return e === k || c(e)
                    },
                    isCharacterSame: function(e) {
                        var t = e.currentValue,
                            n = e.lastValue,
                            r = e.formattedValue,
                            i = e.currentValueIndex,
                            o = e.formattedValueIndex,
                            a = t[i],
                            s = r[o],
                            l = x(n, t).to,
                            c = function(e) {
                                return M(e).indexOf(".") + h.length
                            };
                        return !(0 === w && m && p && t[l.start] === k && c(t) < i && c(r) > o) && (!!(i >= l.start && i < l.end && T && T.includes(a) && s === k) || a === s)
                    },
                    onValueChange: V,
                    format: D,
                    removeFormatting: M,
                    getCaretBoundary: function(t) {
                        return function(e, t) {
                            var n = t.prefix;
                            void 0 === n && (n = "");
                            var r = t.suffix;
                            void 0 === r && (r = "");
                            var i = Array.from({
                                    length: e.length + 1
                                }).map((function() {
                                    return !0
                                })),
                                o = "-" === e[0];
                            i.fill(!1, 0, n.length + (o ? 1 : 0));
                            var a = e.length;
                            return i.fill(!1, a - r.length + 1, a + 1), i
                        }(t, e)
                    },
                    onKeyDown: function(e) {
                        var t = e.target,
                            r = e.key,
                            i = t.selectionStart,
                            a = t.selectionEnd,
                            s = t.value;
                        if (void 0 === s && (s = ""), ("Backspace" === r || "Delete" === r) && a < h.length) e.preventDefault();
                        else if (i === a) {
                            "Backspace" === r && "-" === s[0] && i === h.length + 1 && n && b(t, 1), p && m && ("Backspace" === r && s[i - 1] === k ? (b(t, i - 1), e.preventDefault()) : "Delete" === r && s[i] === k && e.preventDefault()), (null === T || void 0 === T ? void 0 : T.includes(r)) && s[i] === k && b(t, i + 1);
                            var l = !0 === d ? "," : d;
                            "Backspace" === r && s[i - 1] === l && b(t, i - 1), "Delete" === r && s[i] === l && b(t, i + 1), o(e)
                        } else o(e)
                    },
                    onBlur: function(t) {
                        var n = B;
                        if (n.match(/\d/g) || (n = ""), i || (n = function(e) {
                                if (!e) return e;
                                var t = "-" === e[0];
                                t && (e = e.substring(1, e.length));
                                var n = e.split("."),
                                    r = n[0].replace(/^0+/, "") || "0",
                                    i = n[1] || "";
                                return (t ? "-" : "") + r + (i ? "." + i : "")
                            }(n)), m && p && (n = g(n, p, m)), n !== B) {
                            var o = C(n, e);
                            V({
                                formattedValue: o,
                                value: n,
                                floatValue: parseFloat(n)
                            }, {
                                event: t,
                                source: r.event
                            })
                        }
                        a(t)
                    }
                })
            }

            function M(e) {
                var t = D(e);
                return a().createElement(T, Object.assign({}, t))
            }
            var _ = n("W3Ja"),
                I = function(e) {
                    return e
                },
                L = 1e6,
                R = 1e6,
                F = "[big.js] ",
                B = F + "Invalid ",
                z = B + "decimal places",
                V = F + "Division by zero",
                H = {},
                W = void 0,
                q = /^-?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i;

            function U(e, t, n, r) {
                var i = e.c;
                if (n === W && (n = e.constructor.RM), 0 !== n && 1 !== n && 2 !== n && 3 !== n) throw Error("[big.js] Invalid rounding mode");
                if (t < 1) r = 3 === n && (r || !!i[0]) || 0 === t && (1 === n && i[0] >= 5 || 2 === n && (i[0] > 5 || 5 === i[0] && (r || i[1] !== W))), i.length = 1, r ? (e.e = e.e - t + 1, i[0] = 1) : i[0] = e.e = 0;
                else if (t < i.length) {
                    if (r = 1 === n && i[t] >= 5 || 2 === n && (i[t] > 5 || 5 === i[t] && (r || i[t + 1] !== W || 1 & i[t - 1])) || 3 === n && (r || !!i[0]), i.length = t, r)
                        for (; ++i[--t] > 9;)
                            if (i[t] = 0, 0 === t) {
                                ++e.e, i.unshift(1);
                                break
                            }
                    for (t = i.length; !i[--t];) i.pop()
                }
                return e
            }

            function G(e, t, n) {
                var r = e.e,
                    i = e.c.join(""),
                    o = i.length;
                if (t) i = i.charAt(0) + (o > 1 ? "." + i.slice(1) : "") + (r < 0 ? "e" : "e+") + r;
                else if (r < 0) {
                    for (; ++r;) i = "0" + i;
                    i = "0." + i
                } else if (r > 0)
                    if (++r > o)
                        for (r -= o; r--;) i += "0";
                    else r < o && (i = i.slice(0, r) + "." + i.slice(r));
                else o > 1 && (i = i.charAt(0) + "." + i.slice(1));
                return e.s < 0 && n ? "-" + i : i
            }
            H.abs = function() {
                var e = new this.constructor(this);
                return e.s = 1, e
            }, H.cmp = function(e) {
                var t, n = this,
                    r = n.c,
                    i = (e = new n.constructor(e)).c,
                    o = n.s,
                    a = e.s,
                    s = n.e,
                    l = e.e;
                if (!r[0] || !i[0]) return r[0] ? o : i[0] ? -a : 0;
                if (o != a) return o;
                if (t = o < 0, s != l) return s > l ^ t ? 1 : -1;
                for (a = (s = r.length) < (l = i.length) ? s : l, o = -1; ++o < a;)
                    if (r[o] != i[o]) return r[o] > i[o] ^ t ? 1 : -1;
                return s == l ? 0 : s > l ^ t ? 1 : -1
            }, H.div = function(e) {
                var t = this,
                    n = t.constructor,
                    r = t.c,
                    i = (e = new n(e)).c,
                    o = t.s == e.s ? 1 : -1,
                    a = n.DP;
                if (a !== ~~a || a < 0 || a > L) throw Error(z);
                if (!i[0]) throw Error(V);
                if (!r[0]) return e.s = o, e.c = [e.e = 0], e;
                var s, l, c, u, f, d = i.slice(),
                    p = s = i.length,
                    m = r.length,
                    h = r.slice(0, s),
                    v = h.length,
                    g = e,
                    b = g.c = [],
                    x = 0,
                    y = a + (g.e = t.e - e.e) + 1;
                for (g.s = o, o = y < 0 ? 0 : y, d.unshift(0); v++ < s;) h.push(0);
                do {
                    for (c = 0; c < 10; c++) {
                        if (s != (v = h.length)) u = s > v ? 1 : -1;
                        else
                            for (f = -1, u = 0; ++f < s;)
                                if (i[f] != h[f]) {
                                    u = i[f] > h[f] ? 1 : -1;
                                    break
                                } if (!(u < 0)) break;
                        for (l = v == s ? i : d; v;) {
                            if (h[--v] < l[v]) {
                                for (f = v; f && !h[--f];) h[f] = 9;
                                --h[f], h[v] += 10
                            }
                            h[v] -= l[v]
                        }
                        for (; !h[0];) h.shift()
                    }
                    b[x++] = u ? c : ++c, h[0] && u ? h[v] = r[p] || 0 : h = [r[p]]
                } while ((p++ < m || h[0] !== W) && o--);
                return b[0] || 1 == x || (b.shift(), g.e--, y--), x > y && U(g, y, n.RM, h[0] !== W), g
            }, H.eq = function(e) {
                return 0 === this.cmp(e)
            }, H.gt = function(e) {
                return this.cmp(e) > 0
            }, H.gte = function(e) {
                return this.cmp(e) > -1
            }, H.lt = function(e) {
                return this.cmp(e) < 0
            }, H.lte = function(e) {
                return this.cmp(e) < 1
            }, H.minus = H.sub = function(e) {
                var t, n, r, i, o = this,
                    a = o.constructor,
                    s = o.s,
                    l = (e = new a(e)).s;
                if (s != l) return e.s = -l, o.plus(e);
                var c = o.c.slice(),
                    u = o.e,
                    f = e.c,
                    d = e.e;
                if (!c[0] || !f[0]) return f[0] ? e.s = -l : c[0] ? e = new a(o) : e.s = 1, e;
                if (s = u - d) {
                    for ((i = s < 0) ? (s = -s, r = c) : (d = u, r = f), r.reverse(), l = s; l--;) r.push(0);
                    r.reverse()
                } else
                    for (n = ((i = c.length < f.length) ? c : f).length, s = l = 0; l < n; l++)
                        if (c[l] != f[l]) {
                            i = c[l] < f[l];
                            break
                        } if (i && (r = c, c = f, f = r, e.s = -e.s), (l = (n = f.length) - (t = c.length)) > 0)
                    for (; l--;) c[t++] = 0;
                for (l = t; n > s;) {
                    if (c[--n] < f[n]) {
                        for (t = n; t && !c[--t];) c[t] = 9;
                        --c[t], c[n] += 10
                    }
                    c[n] -= f[n]
                }
                for (; 0 === c[--l];) c.pop();
                for (; 0 === c[0];) c.shift(), --d;
                return c[0] || (e.s = 1, c = [d = 0]), e.c = c, e.e = d, e
            }, H.mod = function(e) {
                var t, n = this,
                    r = n.constructor,
                    i = n.s,
                    o = (e = new r(e)).s;
                if (!e.c[0]) throw Error(V);
                return n.s = e.s = 1, t = 1 == e.cmp(n), n.s = i, e.s = o, t ? new r(n) : (i = r.DP, o = r.RM, r.DP = r.RM = 0, n = n.div(e), r.DP = i, r.RM = o, this.minus(n.times(e)))
            }, H.neg = function() {
                var e = new this.constructor(this);
                return e.s = -e.s, e
            }, H.plus = H.add = function(e) {
                var t, n, r, i = this,
                    o = i.constructor;
                if (e = new o(e), i.s != e.s) return e.s = -e.s, i.minus(e);
                var a = i.e,
                    s = i.c,
                    l = e.e,
                    c = e.c;
                if (!s[0] || !c[0]) return c[0] || (s[0] ? e = new o(i) : e.s = i.s), e;
                if (s = s.slice(), t = a - l) {
                    for (t > 0 ? (l = a, r = c) : (t = -t, r = s), r.reverse(); t--;) r.push(0);
                    r.reverse()
                }
                for (s.length - c.length < 0 && (r = c, c = s, s = r), t = c.length, n = 0; t; s[t] %= 10) n = (s[--t] = s[t] + c[t] + n) / 10 | 0;
                for (n && (s.unshift(n), ++l), t = s.length; 0 === s[--t];) s.pop();
                return e.c = s, e.e = l, e
            }, H.pow = function(e) {
                var t = this,
                    n = new t.constructor("1"),
                    r = n,
                    i = e < 0;
                if (e !== ~~e || e < -1e6 || e > R) throw Error(B + "exponent");
                for (i && (e = -e); 1 & e && (r = r.times(t)), e >>= 1;) t = t.times(t);
                return i ? n.div(r) : r
            }, H.prec = function(e, t) {
                if (e !== ~~e || e < 1 || e > L) throw Error(B + "precision");
                return U(new this.constructor(this), e, t)
            }, H.round = function(e, t) {
                if (e === W) e = 0;
                else if (e !== ~~e || e < -L || e > L) throw Error(z);
                return U(new this.constructor(this), e + this.e + 1, t)
            }, H.sqrt = function() {
                var e, t, n, r = this,
                    i = r.constructor,
                    o = r.s,
                    a = r.e,
                    s = new i("0.5");
                if (!r.c[0]) return new i(r);
                if (o < 0) throw Error(F + "No square root");
                0 === (o = Math.sqrt(r + "")) || o === 1 / 0 ? ((t = r.c.join("")).length + a & 1 || (t += "0"), a = ((a + 1) / 2 | 0) - (a < 0 || 1 & a), e = new i(((o = Math.sqrt(t)) == 1 / 0 ? "5e" : (o = o.toExponential()).slice(0, o.indexOf("e") + 1)) + a)) : e = new i(o + ""), a = e.e + (i.DP += 4);
                do {
                    n = e, e = s.times(n.plus(r.div(n)))
                } while (n.c.slice(0, a).join("") !== e.c.slice(0, a).join(""));
                return U(e, (i.DP -= 4) + e.e + 1, i.RM)
            }, H.times = H.mul = function(e) {
                var t, n = this,
                    r = n.constructor,
                    i = n.c,
                    o = (e = new r(e)).c,
                    a = i.length,
                    s = o.length,
                    l = n.e,
                    c = e.e;
                if (e.s = n.s == e.s ? 1 : -1, !i[0] || !o[0]) return e.c = [e.e = 0], e;
                for (e.e = l + c, a < s && (t = i, i = o, o = t, c = a, a = s, s = c), t = new Array(c = a + s); c--;) t[c] = 0;
                for (l = s; l--;) {
                    for (s = 0, c = a + l; c > l;) s = t[c] + o[l] * i[c - l - 1] + s, t[c--] = s % 10, s = s / 10 | 0;
                    t[c] = s
                }
                for (s ? ++e.e : t.shift(), l = t.length; !t[--l];) t.pop();
                return e.c = t, e
            }, H.toExponential = function(e, t) {
                var n = this,
                    r = n.c[0];
                if (e !== W) {
                    if (e !== ~~e || e < 0 || e > L) throw Error(z);
                    for (n = U(new n.constructor(n), ++e, t); n.c.length < e;) n.c.push(0)
                }
                return G(n, !0, !!r)
            }, H.toFixed = function(e, t) {
                var n = this,
                    r = n.c[0];
                if (e !== W) {
                    if (e !== ~~e || e < 0 || e > L) throw Error(z);
                    for (e = e + (n = U(new n.constructor(n), e + n.e + 1, t)).e + 1; n.c.length < e;) n.c.push(0)
                }
                return G(n, !1, !!r)
            }, H[Symbol.for("nodejs.util.inspect.custom")] = H.toJSON = H.toString = function() {
                var e = this,
                    t = e.constructor;
                return G(e, e.e <= t.NE || e.e >= t.PE, !!e.c[0])
            }, H.toNumber = function() {
                var e = Number(G(this, !0, !0));
                if (!0 === this.constructor.strict && !this.eq(e.toString())) throw Error(F + "Imprecise conversion");
                return e
            }, H.toPrecision = function(e, t) {
                var n = this,
                    r = n.constructor,
                    i = n.c[0];
                if (e !== W) {
                    if (e !== ~~e || e < 1 || e > L) throw Error(B + "precision");
                    for (n = U(new r(n), e, t); n.c.length < e;) n.c.push(0)
                }
                return G(n, e <= n.e || n.e <= r.NE || n.e >= r.PE, !!i)
            }, H.valueOf = function() {
                var e = this,
                    t = e.constructor;
                if (!0 === t.strict) throw Error(F + "valueOf disallowed");
                return G(e, e.e <= t.NE || e.e >= t.PE, !0)
            };
            var K = function e() {
                function t(n) {
                    var r = this;
                    if (!(r instanceof t)) return n === W ? e() : new t(n);
                    if (n instanceof t) r.s = n.s, r.e = n.e, r.c = n.c.slice();
                    else {
                        if ("string" !== typeof n) {
                            if (!0 === t.strict && "bigint" !== typeof n) throw TypeError(B + "value");
                            n = 0 === n && 1 / n < 0 ? "-0" : String(n)
                        }! function(e, t) {
                            var n, r, i;
                            if (!q.test(t)) throw Error(B + "number");
                            e.s = "-" == t.charAt(0) ? (t = t.slice(1), -1) : 1, (n = t.indexOf(".")) > -1 && (t = t.replace(".", ""));
                            (r = t.search(/e/i)) > 0 ? (n < 0 && (n = r), n += +t.slice(r + 1), t = t.substring(0, r)) : n < 0 && (n = t.length);
                            for (i = t.length, r = 0; r < i && "0" == t.charAt(r);) ++r;
                            if (r == i) e.c = [e.e = 0];
                            else {
                                for (; i > 0 && "0" == t.charAt(--i););
                                for (e.e = n - r - 1, e.c = [], n = 0; r <= i;) e.c[n++] = +t.charAt(r++)
                            }
                        }(r, n)
                    }
                    r.constructor = t
                }
                return t.prototype = H, t.DP = 20, t.RM = 1, t.NE = -7, t.PE = 21, t.strict = false, t.roundDown = 0, t.roundHalfUp = 1, t.roundHalfEven = 2, t.roundUp = 3, t
            }();
            const $ = K;
            const Y = (0, o.forwardRef)((function(e, t) {
                var n = e.spellCheck,
                    r = void 0 !== n && n,
                    a = e.autoComplete,
                    s = void 0 === a ? "" : a,
                    l = (0, i.__rest)(e, ["spellCheck", "autoComplete"]),
                    c = {
                        ref: t,
                        spellCheck: r,
                        autoComplete: s
                    };
                return (0, o.createElement)("input", (0, i.__assign)((0, i.__assign)({}, l), c))
            }));
            var Z = n("X0Bn"),
                Q = n("qrIQ"),
                X = n("O94r"),
                J = n.n(X),
                ee = n("DzvH"),
                te = n("jibv"),
                ne = n("/Izd"),
                re = n("q5Ye"),
                ie = n("tKUM"),
                oe = {
                    thousandSeparator: ",",
                    decimalSeparator: "."
                },
                ae = {
                    thousandSeparator: " ",
                    decimalSeparator: ","
                },
                se = {
                    thousandSeparator: ".",
                    decimalSeparator: ","
                },
                le = {
                    fr: ae,
                    "fr-AF": ae,
                    ru: ae,
                    "ru-KZ": ae,
                    "ru-UA": ae,
                    pl: ae,
                    pt: ae,
                    es: ae,
                    "uk-UA": ae,
                    cs: ae,
                    bg: ae,
                    lv: ae,
                    sk: ae,
                    sl: ae,
                    sv: ae,
                    hu: ae,
                    de: se,
                    id: se,
                    it: se,
                    "pt-BR": se,
                    ro: se,
                    vi: se,
                    "da-DK": se,
                    el: se
                },
                ce = {
                    decimalScale: 20,
                    allowNegative: !0
                };

            function ue(e) {
                void 0 === e && (e = {});
                var t = e.numericFormat,
                    n = e.locale,
                    r = (0, o.useState)(n || ""),
                    a = r[0],
                    s = r[1],
                    l = (0, o.useMemo)((function() {
                        return function(e) {
                            if (!e) return oe;
                            var t = le[e];
                            if (t) return t;
                            var n = e.split("-")[0];
                            return le[n] || oe
                        }(a)
                    }), [a]),
                    c = (0, o.useCallback)((function(n) {
                        return t ? C(n, (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, ce), l), e)) : n
                    }), [l, e, t]),
                    u = (0, o.useCallback)((function(n) {
                        return t ? P(n, {
                            from: {
                                start: 0,
                                end: n.length
                            },
                            to: {
                                start: 0,
                                end: n.length
                            },
                            lastValue: ""
                        }, (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, ce), l), e)) : n
                    }), [l, e, t]);
                return (0, o.useEffect)((function() {
                    if (t) {
                        var e = n || (0, ie.getLanguage)();
                        s(e)
                    }
                }), [n, t]), {
                    formatter: c,
                    parser: u,
                    config: l
                }
            }
            var fe = n("lHGB"),
                de = n("STQw"),
                pe = (0, o.forwardRef)((function(e, t) {
                    var n = e.value,
                        r = e.prefix,
                        s = e.suffix,
                        l = e.status,
                        c = e.disabled,
                        u = e.onChange,
                        f = e.defaultValue,
                        d = e.size,
                        p = void 0 === d ? "middle" : d,
                        m = e.variant,
                        h = void 0 === m ? "default" : m,
                        v = e.enableClear,
                        g = void 0 !== v && v,
                        b = (e.validator, e.autoFocus),
                        x = e.onBlur,
                        y = e.onFocus,
                        w = e.disableStyleOnFocus,
                        A = e.mpInputType,
                        E = e.controls,
                        S = e.isPrefixFixedType,
                        N = e.onStep,
                        j = e.maxlength,
                        k = e.maxLength,
                        T = e.gapSize,
                        C = void 0 === T ? "normal" : T,
                        O = e.type,
                        P = e.numericFormat,
                        D = e.locale,
                        L = (e.onKeyDown, (0, i.__rest)(e, ["value", "prefix", "suffix", "status", "disabled", "onChange", "defaultValue", "size", "variant", "enableClear", "validator", "autoFocus", "onBlur", "onFocus", "disableStyleOnFocus", "mpInputType", "controls", "isPrefixFixedType", "onStep", "maxlength", "maxLength", "gapSize", "type", "numericFormat", "locale", "onKeyDown"])),
                        R = P ? "text" : O,
                        F = L.max,
                        B = L.min,
                        z = L.step,
                        V = ue({
                            numericFormat: P,
                            locale: D
                        }),
                        H = V.formatter,
                        W = V.parser,
                        q = V.config,
                        U = (0, o.useRef)(null);
                    (0, o.useImperativeHandle)(t, (function() {
                        return U.current
                    }), []);
                    var G = function(e) {
                            var t = e.value,
                                n = e.onChange,
                                r = e.defaultValue,
                                i = void 0 === r ? "" : r,
                                s = e.onBlur,
                                l = e.onFocus,
                                c = e.formatter,
                                u = void 0 === c ? I : c,
                                f = e.parser,
                                d = void 0 === f ? I : f,
                                p = a().useRef(),
                                m = (0, o.useState)(u(i)),
                                h = m[0],
                                v = m[1],
                                g = (0, o.useState)(!1),
                                b = g[0],
                                x = g[1];
                            p.current = {
                                onChange: n,
                                onBlur: s,
                                onFocus: l
                            }, (0, _.op)((function() {
                                if ("undefined" !== typeof t) {
                                    var e = u(t);
                                    e !== h && v(e)
                                }
                            }));
                            var y = (0, o.useCallback)((function(e) {
                                    x(!1), p.current.onBlur && p.current.onBlur(e)
                                }), []),
                                w = (0, o.useCallback)((function(e) {
                                    x(!0), p.current.onFocus && p.current.onFocus(e)
                                }), []),
                                A = (0, o.useCallback)((function(e) {
                                    var t = e.target.value,
                                        n = d(t),
                                        r = u(n);
                                    v(r), p.current.onChange && p.current.onChange(n, e)
                                }), []);
                            return {
                                input: h,
                                focus: b,
                                onInput: A,
                                onBlur: y,
                                onFocus: w
                            }
                        }({
                            value: n,
                            onBlur: x,
                            onFocus: y,
                            onChange: u,
                            defaultValue: f,
                            formatter: H,
                            parser: W
                        }),
                        K = G.input,
                        X = G.focus,
                        ie = G.onBlur,
                        oe = G.onFocus,
                        ae = G.onInput,
                        se = (0, de.r)(),
                        le = se.prefixCls,
                        pe = se.isRTL,
                        me = "".concat(le, "-textField"),
                        he = "".concat(me, "-numeric-controls"),
                        ve = "".concat(he, "-trade"),
                        ge = (0, o.useMemo)((function() {
                            var t;
                            return J()(me, ((t = {})["".concat(me, "-rtl")] = !!pe, t["".concat(me, "__").concat(h)] = !!h, t["data-".concat(l)] = !!l, t["data-size-".concat(p)] = !!p, t["data-gap-size-".concat(C)] = !!C, t["data-prefix-fixed"] = !!S, t[he] = !!E, t[ve] = "trade" === E, t["".concat(ve, "-suffix")] = "trade" === E && !!s, t.static = !!w, t.disabled = !!c, t.focus = !!X, t), e.className)
                        }), [me, pe, h, l, p, C, S, E, w, c, X, e.className]),
                        be = g && !c && "" !== K,
                        xe = (0, o.useCallback)((function() {
                            ae({
                                target: {
                                    value: ""
                                }
                            })
                        }), [ae]),
                        ye = null !== k && void 0 !== k ? k : j,
                        we = (0, o.useMemo)((function() {
                            return (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, ce), {
                                allowedDecimalSeparators: [",", "."]
                            }), q)
                        }), [q, Q.lq]),
                        Ae = (0, o.useMemo)((function() {
                            return Q.lq ? {
                                onInput: ae,
                                maxlength: ye
                            } : {
                                onChange: ae,
                                autoFocus: b,
                                maxLength: ye
                            }
                        }), [Q.lq, ae, ye, b]),
                        Ee = (0, o.useMemo)((function() {
                            return a().createElement(Z.A, {
                                name: "CircledCloseF",
                                color: "IconNormal"
                            })
                        }), []),
                        Se = (0, o.useMemo)((function() {
                            return "web" === A && Y || Y
                        }), [A]),
                        Ne = (0, o.useMemo)((function() {
                            return P && !Q.lq ? function(e) {
                                return a().createElement(M, (0, i.__assign)({}, we, e))
                            } : Se
                        }), [P, Se, we]),
                        je = (0, o.useCallback)((function(e) {
                            return void 0 !== e && function(e) {
                                return !isNaN(parseFloat(e)) && isFinite(e)
                            }(e) ? new $(e) : null
                        }), []),
                        ke = W ? W(K) : K,
                        Te = (0, o.useCallback)((function() {
                            var e = je(z) || new $(1),
                                t = je(ke) || new $(0),
                                n = je(F);
                            if (!n || t.plus(e).lte(n)) {
                                var r = t.plus(e).toString(),
                                    i = H ? H(r) : r;
                                ae({
                                    target: {
                                        value: i
                                    }
                                }), null === N || void 0 === N || N(r, {
                                    type: "up",
                                    step: e.toNumber()
                                })
                            }
                        }), [H, ke, ae, F, z, N, je]),
                        Ce = (0, o.useCallback)((function() {
                            var e = je(z) || new $(1),
                                t = je(ke) || new $(0),
                                n = je(B);
                            if (!n || t.minus(e).gte(n)) {
                                var r = t.minus(e).toString(),
                                    i = H ? H(r) : r;
                                ae({
                                    target: {
                                        value: i
                                    }
                                }), null === N || void 0 === N || N(r, {
                                    type: "down",
                                    step: e.toNumber()
                                })
                            }
                        }), [ke, H, ae, B, z, N, je]),
                        Oe = (0, o.useMemo)((function() {
                            return r ? S ? a().createElement(fe.Ay, {
                                className: J()("".concat(me, "-prefix"), "".concat(me, "-prefix-fixed")),
                                children: r
                            }) : a().createElement(fe.Ay, {
                                className: "".concat(me, "-prefix"),
                                children: r
                            }) : null
                        }), [S, r, me]),
                        Pe = (0, o.useCallback)((function(e, t) {
                            "Enter" === e.key && t()
                        }), []),
                        De = (0, o.useCallback)((function(e) {
                            return E ? "trade" === E ? "prefix" === e ? a().createElement(fe.Ay, {
                                className: "".concat(ve, "-minus"),
                                onClick: Ce,
                                role: "button",
                                "aria-label": "decrease value"
                            }, a().createElement(ee.A, {
                                name: "Minus1C",
                                color: "IconNormal"
                            })) : a().createElement(fe.Ay, {
                                className: "".concat(ve, "-plus"),
                                onClick: Te,
                                role: "button",
                                "aria-label": "increase value"
                            }, a().createElement(te.A, {
                                name: "Plus1C",
                                color: "IconNormal"
                            })) : "suffix" === e ? a().createElement(fe.Ay, {
                                className: "".concat(he, "-panel")
                            }, a().createElement(fe.Ay, {
                                className: "".concat(he, "-panel-up"),
                                onClick: Te,
                                role: "button",
                                "aria-label": "increase value"
                            }, a().createElement(ne.A, {
                                name: "CaretUpF",
                                color: "IconNormal"
                            })), a().createElement(fe.Ay, {
                                className: "".concat(he, "-panel-down"),
                                onClick: Ce,
                                role: "button",
                                "aria-label": "decrease value"
                            }, a().createElement(re.A, {
                                name: "CaretDownF",
                                color: "IconNormal"
                            }))) : null : null
                        }), [E, Ce, Te, he, ve]),
                        Me = (0, o.useCallback)((function() {
                            "trade" === E && U.current && U.current.focus()
                        }), [E, ve]),
                        _e = {
                            "aria-invalid": "error" === l ? "true" : void 0,
                            "aria-required": L.required ? "true" : void 0,
                            "aria-disabled": c ? "true" : void 0,
                            "aria-label": L.id ? void 0 : L.placeholder || "input field"
                        };
                    return a().createElement(fe.Ay, {
                        className: ge,
                        onClick: Me
                    }, De("prefix"), Oe, a().createElement(Ne, (0, i.__assign)({}, _e, L, Ae, {
                        type: R,
                        ref: U,
                        value: K,
                        disabled: c,
                        onBlur: ie,
                        onFocus: oe,
                        className: "".concat(me, "-input")
                    })), be && a().createElement(fe.Ay, {
                        onClick: xe,
                        className: "".concat(me, "-clear"),
                        children: Ee,
                        onKeyDown: function(e) {
                            return Pe(e, xe)
                        },
                        tabIndex: 0,
                        role: "button",
                        "aria-label": "clear"
                    }), s && a().createElement(fe.Ay, {
                        className: "".concat(me, "-suffix"),
                        children: s
                    }), De("suffix"))
                }));
            pe.__name = "TextField", pe.displayName = "TextField";
            const me = pe
        },
        "rl+/": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => Qe
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("qrIQ"),
                s = n("QFE7"),
                l = n("hyZw"),
                c = n("O94r"),
                u = n.n(c),
                f = n("lHGB"),
                d = n("U/k/"),
                p = n("STQw"),
                m = {
                    right: "left",
                    left: "right",
                    "top-start": "top-end",
                    "right-start": "left-start",
                    "left-start": "right-start",
                    "bottom-start": "bottom-end",
                    "top-end": "top-start",
                    "right-end": "left-end",
                    "left-end": "right-end",
                    "bottom-end": "bottom-start"
                },
                h = 50,
                v = function(e) {
                    var t;
                    e.stopPropagation(), a.lq || null === (t = null === e || void 0 === e ? void 0 : e.nativeEvent) || void 0 === t || t.stopImmediatePropagation()
                },
                g = n("H2//"),
                b = "tooltip";

            function x(e, t, n) {
                return "menu" === t ? {
                    role: "button",
                    "aria-expanded": n,
                    "aria-controls": e,
                    "aria-haspopup": "listbox"
                } : "combobox" === t ? {} : {
                    "aria-describedby": e
                }
            }

            function y(e, t, n) {
                return "combobox" === t ? {} : {
                    id: e,
                    role: t,
                    tabindex: n ? 0 : -1
                }
            }

            function w(e, t, n) {
                void 0 === t && (t = b), void 0 === n && (n = !1);
                var r = (0, i.useMemo)((function() {
                    return "".concat(e, "-").concat((0, g.uR)(8))
                }), [e, t, n]);
                return {
                    triggerAriaProps: x(r, t, n),
                    contentAriaProps: y(r, t, n)
                }
            }
            var A = function(e) {
                var t, n = e.open,
                    c = e.once,
                    g = e.arrow,
                    x = e.offset,
                    y = void 0 === x ? 12 : x,
                    A = e.disabled,
                    E = e.tooltips,
                    S = e.variant,
                    N = void 0 === S ? "gray" : S,
                    j = e.placement,
                    k = void 0 === j ? "top" : j,
                    T = e.trigger,
                    C = void 0 === T ? "hover" : T,
                    O = e.onVisibleChange,
                    P = e.enablePortal,
                    D = e.portalNode,
                    M = e.bubbleClassName,
                    _ = e.triggerClassName,
                    I = e.delay,
                    L = void 0 === I ? h : I,
                    R = e.enableClickBubble,
                    F = e.ariaRole,
                    B = void 0 === F ? b : F,
                    z = (0, r.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "bubbleClassName", "triggerClassName", "delay", "enableClickBubble", "ariaRole"]),
                    V = o().useState(n),
                    H = V[0],
                    W = V[1],
                    q = o().useRef(),
                    U = (0, p.r)(),
                    G = U.prefixCls,
                    K = U.isMobile,
                    $ = U.isTablet,
                    Y = U.isClient,
                    Z = U.isRTL,
                    Q = !a.lq && !K && !$;
                C = Q ? C : "click";
                var X = "".concat(G, "-tooltips");
                o().useEffect((function() {
                    "undefined" !== typeof n && H !== !!n && W(!H)
                }), [n, H]);
                var J = (0, s.d)({
                        fn: O
                    }).debounceFn,
                    ee = (0, i.useCallback)((function(e) {
                        A || W((function(t) {
                            var n = "boolean" === typeof e ? e : !t;
                            return t !== n && J(n), t !== n ? n : t
                        }))
                    }), [A, J]),
                    te = (0, i.useMemo)((function() {
                        var e, t, n;
                        return "number" === typeof L ? {
                            enter: L,
                            leave: L,
                            click: L
                        } : {
                            enter: null !== (e = L.enter) && void 0 !== e ? e : h,
                            leave: null !== (t = L.leave) && void 0 !== t ? t : h,
                            click: null !== (n = L.click) && void 0 !== n ? n : h
                        }
                    }), [L]),
                    ne = (0, s.d)({
                        fn: ee,
                        time: te.enter
                    }),
                    re = ne.debounceFn,
                    ie = ne.clearTimer,
                    oe = (0, s.d)({
                        fn: ee,
                        time: te.leave
                    }),
                    ae = oe.debounceFn,
                    se = oe.clearTimer,
                    le = (0, s.d)({
                        fn: ee,
                        time: te.click
                    }).debounceFn,
                    ce = (0, i.useCallback)(le, [le]),
                    ue = (0, i.useCallback)((function() {
                        return le(!1)
                    }), [le]);
                o().useEffect((function() {
                    var e = q.current,
                        t = function() {
                            se(), re(!0)
                        },
                        n = function() {
                            ie(), ae(!1)
                        };
                    if (!a.lq && e instanceof Element) {
                        if ("hover" === C) return e.addEventListener("mouseover", t, !0), e.addEventListener("mouseout", n, !0),
                            function() {
                                e.removeEventListener("mouseover", t, !0), e.removeEventListener("mouseout", n, !0)
                            };
                        var r = function(e) {
                            if (!q.current.contains(e.target)) return le(!1)
                        };
                        return document.addEventListener("click", r),
                            function() {
                                document.removeEventListener("click", r)
                            }
                    }
                    return l.es
                }), [C, re, se, ie, ae, le]);
                var fe = "click" === C,
                    de = !A && H,
                    pe = c ? ue : void 0,
                    me = !fe && !c || R ? void 0 : v,
                    he = fe ? ce : void 0,
                    ve = u()("".concat(X, "-wrap"), {
                        active: de
                    }, e.className),
                    ge = u()("".concat(X, "-ele"), ((t = {})["".concat(X, "-ele-rtl")] = !!Z, t), _),
                    be = u()(X, {
                        active: de
                    }, M),
                    xe = Z && m[k] || k,
                    ye = (0, r.__assign)({
                        arrow: g,
                        offset: y,
                        variant: N,
                        placement: xe,
                        shadow: !0,
                        isFloat: !0,
                        enablePortal: P,
                        portalNode: D
                    }, z);
                "gray" === N && (ye = (0, r.__assign)((0, r.__assign)({}, ye), {
                    shadow: !1
                }));
                var we = Y && !A,
                    Ae = w(X, B, we),
                    Ee = Ae.triggerAriaProps,
                    Se = Ae.contentAriaProps;
                return o().createElement(f.Ay, {
                    ref: q,
                    onClick: me,
                    className: ve
                }, o().createElement(f.Ay, (0, r.__assign)({}, Ee, {
                    className: ge,
                    onClick: he,
                    children: e.children
                })), we ? o().createElement(d.A, (0, r.__assign)({}, Se, ye, {
                    className: be,
                    onClick: pe,
                    children: E
                })) : null)
            };
            A.displayName = "Tooltips";
            const E = A;
            var S = n("hTvQ"),
                N = n.n(S),
                j = n("W3Ja");

            function k(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function T(e) {
                return e instanceof k(e).Element || e instanceof Element
            }

            function C(e) {
                return e instanceof k(e).HTMLElement || e instanceof HTMLElement
            }

            function O(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof k(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var P = Math.max,
                D = Math.min,
                M = Math.round;

            function _() {
                var e = navigator.userAgentData;
                return null != e && e.brands && Array.isArray(e.brands) ? e.brands.map((function(e) {
                    return e.brand + "/" + e.version
                })).join(" ") : navigator.userAgent
            }

            function I() {
                return !/^((?!chrome|android).)*safari/i.test(_())
            }

            function L(e, t, n) {
                void 0 === t && (t = !1), void 0 === n && (n = !1);
                var r = e.getBoundingClientRect(),
                    i = 1,
                    o = 1;
                t && C(e) && (i = e.offsetWidth > 0 && M(r.width) / e.offsetWidth || 1, o = e.offsetHeight > 0 && M(r.height) / e.offsetHeight || 1);
                var a = (T(e) ? k(e) : window).visualViewport,
                    s = !I() && n,
                    l = (r.left + (s && a ? a.offsetLeft : 0)) / i,
                    c = (r.top + (s && a ? a.offsetTop : 0)) / o,
                    u = r.width / i,
                    f = r.height / o;
                return {
                    width: u,
                    height: f,
                    top: c,
                    right: l + u,
                    bottom: c + f,
                    left: l,
                    x: l,
                    y: c
                }
            }

            function R(e) {
                var t = k(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function F(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function B(e) {
                return ((T(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function z(e) {
                return L(B(e)).left + R(e).scrollLeft
            }

            function V(e) {
                return k(e).getComputedStyle(e)
            }

            function H(e) {
                var t = V(e),
                    n = t.overflow,
                    r = t.overflowX,
                    i = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + i + r)
            }

            function W(e, t, n) {
                void 0 === n && (n = !1);
                var r = C(t),
                    i = C(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = M(t.width) / e.offsetWidth || 1,
                            r = M(t.height) / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    o = B(t),
                    a = L(e, i, n),
                    s = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    l = {
                        x: 0,
                        y: 0
                    };
                return (r || !r && !n) && (("body" !== F(t) || H(o)) && (s = function(e) {
                    return e !== k(e) && C(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : R(e);
                    var t
                }(t)), C(t) ? ((l = L(t, !0)).x += t.clientLeft, l.y += t.clientTop) : o && (l.x = z(o))), {
                    x: a.left + s.scrollLeft - l.x,
                    y: a.top + s.scrollTop - l.y,
                    width: a.width,
                    height: a.height
                }
            }

            function q(e) {
                var t = L(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function U(e) {
                return "html" === F(e) ? e : e.assignedSlot || e.parentNode || (O(e) ? e.host : null) || B(e)
            }

            function G(e) {
                return ["html", "body", "#document"].indexOf(F(e)) >= 0 ? e.ownerDocument.body : C(e) && H(e) ? e : G(U(e))
            }

            function K(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = G(e),
                    i = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    o = k(r),
                    a = i ? [o].concat(o.visualViewport || [], H(r) ? r : []) : r,
                    s = t.concat(a);
                return i ? s : s.concat(K(U(a)))
            }

            function $(e) {
                return ["table", "td", "th"].indexOf(F(e)) >= 0
            }

            function Y(e) {
                return C(e) && "fixed" !== V(e).position ? e.offsetParent : null
            }

            function Z(e) {
                for (var t = k(e), n = Y(e); n && $(n) && "static" === V(n).position;) n = Y(n);
                return n && ("html" === F(n) || "body" === F(n) && "static" === V(n).position) ? t : n || function(e) {
                    var t = /firefox/i.test(_());
                    if (/Trident/i.test(_()) && C(e) && "fixed" === V(e).position) return null;
                    var n = U(e);
                    for (O(n) && (n = n.host); C(n) && ["html", "body"].indexOf(F(n)) < 0;) {
                        var r = V(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var Q = "top",
                X = "bottom",
                J = "right",
                ee = "left",
                te = "auto",
                ne = [Q, X, J, ee],
                re = "start",
                ie = "end",
                oe = "viewport",
                ae = "popper",
                se = ne.reduce((function(e, t) {
                    return e.concat([t + "-" + re, t + "-" + ie])
                }), []),
                le = [].concat(ne, [te]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + re, t + "-" + ie])
                }), []),
                ce = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function ue(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function i(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && i(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || i(e)
                })), r
            }

            function fe(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var de = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function pe() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function me(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    i = t.defaultOptions,
                    o = void 0 === i ? de : i;
                return function(e, t, n) {
                    void 0 === n && (n = o);
                    var i = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, de, o),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        a = [],
                        s = !1,
                        l = {
                            state: i,
                            setOptions: function(n) {
                                var s = "function" === typeof n ? n(i.options) : n;
                                c(), i.options = Object.assign({}, o, i.options, s), i.scrollParents = {
                                    reference: T(e) ? K(e) : e.contextElement ? K(e.contextElement) : [],
                                    popper: K(t)
                                };
                                var u = function(e) {
                                    var t = ue(e);
                                    return ce.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, i.options.modifiers)));
                                return i.orderedModifiers = u.filter((function(e) {
                                    return e.enabled
                                })), i.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" === typeof o) {
                                        var s = o({
                                                state: i,
                                                name: t,
                                                instance: l,
                                                options: r
                                            }),
                                            c = function() {};
                                        a.push(s || c)
                                    }
                                })), l.update()
                            },
                            forceUpdate: function() {
                                if (!s) {
                                    var e = i.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (pe(t, n)) {
                                        i.rects = {
                                            reference: W(t, Z(n), "fixed" === i.options.strategy),
                                            popper: q(n)
                                        }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach((function(e) {
                                            return i.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < i.orderedModifiers.length; r++)
                                            if (!0 !== i.reset) {
                                                var o = i.orderedModifiers[r],
                                                    a = o.fn,
                                                    c = o.options,
                                                    u = void 0 === c ? {} : c,
                                                    f = o.name;
                                                "function" === typeof a && (i = a({
                                                    state: i,
                                                    options: u,
                                                    name: f,
                                                    instance: l
                                                }) || i)
                                            } else i.reset = !1, r = -1
                                    }
                                }
                            },
                            update: fe((function() {
                                return new Promise((function(e) {
                                    l.forceUpdate(), e(i)
                                }))
                            })),
                            destroy: function() {
                                c(), s = !0
                            }
                        };
                    if (!pe(e, t)) return l;

                    function c() {
                        a.forEach((function(e) {
                            return e()
                        })), a = []
                    }
                    return l.setOptions(n).then((function(e) {
                        !s && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), l
                }
            }
            var he = {
                passive: !0
            };

            function ve(e) {
                return e.split("-")[0]
            }

            function ge(e) {
                return e.split("-")[1]
            }

            function be(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function xe(e) {
                var t, n = e.reference,
                    r = e.element,
                    i = e.placement,
                    o = i ? ve(i) : null,
                    a = i ? ge(i) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    l = n.y + n.height / 2 - r.height / 2;
                switch (o) {
                    case Q:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case X:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case J:
                        t = {
                            x: n.x + n.width,
                            y: l
                        };
                        break;
                    case ee:
                        t = {
                            x: n.x - r.width,
                            y: l
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = o ? be(o) : null;
                if (null != c) {
                    var u = "y" === c ? "height" : "width";
                    switch (a) {
                        case re:
                            t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                            break;
                        case ie:
                            t[c] = t[c] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            var ye = {
                top: "auto",
                right: "auto",
                bottom: "auto",
                left: "auto"
            };

            function we(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    i = e.placement,
                    o = e.variation,
                    a = e.offsets,
                    s = e.position,
                    l = e.gpuAcceleration,
                    c = e.adaptive,
                    u = e.roundOffsets,
                    f = e.isFixed,
                    d = a.x,
                    p = void 0 === d ? 0 : d,
                    m = a.y,
                    h = void 0 === m ? 0 : m,
                    v = "function" === typeof u ? u({
                        x: p,
                        y: h
                    }) : {
                        x: p,
                        y: h
                    };
                p = v.x, h = v.y;
                var g = a.hasOwnProperty("x"),
                    b = a.hasOwnProperty("y"),
                    x = ee,
                    y = Q,
                    w = window;
                if (c) {
                    var A = Z(n),
                        E = "clientHeight",
                        S = "clientWidth";
                    if (A === k(n) && "static" !== V(A = B(n)).position && "absolute" === s && (E = "scrollHeight", S = "scrollWidth"), i === Q || (i === ee || i === J) && o === ie) y = X, h -= (f && A === w && w.visualViewport ? w.visualViewport.height : A[E]) - r.height, h *= l ? 1 : -1;
                    if (i === ee || (i === Q || i === X) && o === ie) x = J, p -= (f && A === w && w.visualViewport ? w.visualViewport.width : A[S]) - r.width, p *= l ? 1 : -1
                }
                var N, j = Object.assign({
                        position: s
                    }, c && ye),
                    T = !0 === u ? function(e, t) {
                        var n = e.x,
                            r = e.y,
                            i = t.devicePixelRatio || 1;
                        return {
                            x: M(n * i) / i || 0,
                            y: M(r * i) / i || 0
                        }
                    }({
                        x: p,
                        y: h
                    }, k(n)) : {
                        x: p,
                        y: h
                    };
                return p = T.x, h = T.y, l ? Object.assign({}, j, ((N = {})[y] = b ? "0" : "", N[x] = g ? "0" : "", N.transform = (w.devicePixelRatio || 1) <= 1 ? "translate(" + p + "px, " + h + "px)" : "translate3d(" + p + "px, " + h + "px, 0)", N)) : Object.assign({}, j, ((t = {})[y] = b ? h + "px" : "", t[x] = g ? p + "px" : "", t.transform = "", t))
            }
            const Ae = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        i = n.offset,
                        o = void 0 === i ? [0, 0] : i,
                        a = le.reduce((function(e, n) {
                            return e[n] = function(e, t, n) {
                                var r = ve(e),
                                    i = [ee, Q].indexOf(r) >= 0 ? -1 : 1,
                                    o = "function" === typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n,
                                    a = o[0],
                                    s = o[1];
                                return a = a || 0, s = (s || 0) * i, [ee, J].indexOf(r) >= 0 ? {
                                    x: s,
                                    y: a
                                } : {
                                    x: a,
                                    y: s
                                }
                            }(n, t.rects, o), e
                        }), {}),
                        s = a[t.placement],
                        l = s.x,
                        c = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                }
            };
            var Ee = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function Se(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return Ee[e]
                }))
            }
            var Ne = {
                start: "end",
                end: "start"
            };

            function je(e) {
                return e.replace(/start|end/g, (function(e) {
                    return Ne[e]
                }))
            }

            function ke(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && O(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function Te(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function Ce(e, t, n) {
                return t === oe ? Te(function(e, t) {
                    var n = k(e),
                        r = B(e),
                        i = n.visualViewport,
                        o = r.clientWidth,
                        a = r.clientHeight,
                        s = 0,
                        l = 0;
                    if (i) {
                        o = i.width, a = i.height;
                        var c = I();
                        (c || !c && "fixed" === t) && (s = i.offsetLeft, l = i.offsetTop)
                    }
                    return {
                        width: o,
                        height: a,
                        x: s + z(e),
                        y: l
                    }
                }(e, n)) : T(t) ? function(e, t) {
                    var n = L(e, !1, "fixed" === t);
                    return n.top = n.top + e.clientTop, n.left = n.left + e.clientLeft, n.bottom = n.top + e.clientHeight, n.right = n.left + e.clientWidth, n.width = e.clientWidth, n.height = e.clientHeight, n.x = n.left, n.y = n.top, n
                }(t, n) : Te(function(e) {
                    var t, n = B(e),
                        r = R(e),
                        i = null == (t = e.ownerDocument) ? void 0 : t.body,
                        o = P(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                        a = P(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                        s = -r.scrollLeft + z(e),
                        l = -r.scrollTop;
                    return "rtl" === V(i || n).direction && (s += P(n.clientWidth, i ? i.clientWidth : 0) - o), {
                        width: o,
                        height: a,
                        x: s,
                        y: l
                    }
                }(B(e)))
            }

            function Oe(e, t, n, r) {
                var i = "clippingParents" === t ? function(e) {
                        var t = K(U(e)),
                            n = ["absolute", "fixed"].indexOf(V(e).position) >= 0 && C(e) ? Z(e) : e;
                        return T(n) ? t.filter((function(e) {
                            return T(e) && ke(e, n) && "body" !== F(e)
                        })) : []
                    }(e) : [].concat(t),
                    o = [].concat(i, [n]),
                    a = o[0],
                    s = o.reduce((function(t, n) {
                        var i = Ce(e, n, r);
                        return t.top = P(i.top, t.top), t.right = D(i.right, t.right), t.bottom = D(i.bottom, t.bottom), t.left = P(i.left, t.left), t
                    }), Ce(e, a, r));
                return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
            }

            function Pe(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function De(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function Me(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    i = void 0 === r ? e.placement : r,
                    o = n.strategy,
                    a = void 0 === o ? e.strategy : o,
                    s = n.boundary,
                    l = void 0 === s ? "clippingParents" : s,
                    c = n.rootBoundary,
                    u = void 0 === c ? oe : c,
                    f = n.elementContext,
                    d = void 0 === f ? ae : f,
                    p = n.altBoundary,
                    m = void 0 !== p && p,
                    h = n.padding,
                    v = void 0 === h ? 0 : h,
                    g = Pe("number" !== typeof v ? v : De(v, ne)),
                    b = d === ae ? "reference" : ae,
                    x = e.rects.popper,
                    y = e.elements[m ? b : d],
                    w = Oe(T(y) ? y : y.contextElement || B(e.elements.popper), l, u, a),
                    A = L(e.elements.reference),
                    E = xe({
                        reference: A,
                        element: x,
                        strategy: "absolute",
                        placement: i
                    }),
                    S = Te(Object.assign({}, x, E)),
                    N = d === ae ? S : A,
                    j = {
                        top: w.top - N.top + g.top,
                        bottom: N.bottom - w.bottom + g.bottom,
                        left: w.left - N.left + g.left,
                        right: N.right - w.right + g.right
                    },
                    k = e.modifiersData.offset;
                if (d === ae && k) {
                    var C = k[i];
                    Object.keys(j).forEach((function(e) {
                        var t = [J, X].indexOf(e) >= 0 ? 1 : -1,
                            n = [Q, X].indexOf(e) >= 0 ? "y" : "x";
                        j[e] += C[n] * t
                    }))
                }
                return j
            }

            function _e(e, t, n) {
                return P(e, D(t, n))
            }
            const Ie = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        i = n.mainAxis,
                        o = void 0 === i || i,
                        a = n.altAxis,
                        s = void 0 !== a && a,
                        l = n.boundary,
                        c = n.rootBoundary,
                        u = n.altBoundary,
                        f = n.padding,
                        d = n.tether,
                        p = void 0 === d || d,
                        m = n.tetherOffset,
                        h = void 0 === m ? 0 : m,
                        v = Me(t, {
                            boundary: l,
                            rootBoundary: c,
                            padding: f,
                            altBoundary: u
                        }),
                        g = ve(t.placement),
                        b = ge(t.placement),
                        x = !b,
                        y = be(g),
                        w = "x" === y ? "y" : "x",
                        A = t.modifiersData.popperOffsets,
                        E = t.rects.reference,
                        S = t.rects.popper,
                        N = "function" === typeof h ? h(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : h,
                        j = "number" === typeof N ? {
                            mainAxis: N,
                            altAxis: N
                        } : Object.assign({
                            mainAxis: 0,
                            altAxis: 0
                        }, N),
                        k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                        T = {
                            x: 0,
                            y: 0
                        };
                    if (A) {
                        if (o) {
                            var C, O = "y" === y ? Q : ee,
                                M = "y" === y ? X : J,
                                _ = "y" === y ? "height" : "width",
                                I = A[y],
                                L = I + v[O],
                                R = I - v[M],
                                F = p ? -S[_] / 2 : 0,
                                B = b === re ? E[_] : S[_],
                                z = b === re ? -S[_] : -E[_],
                                V = t.elements.arrow,
                                H = p && V ? q(V) : {
                                    width: 0,
                                    height: 0
                                },
                                W = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                U = W[O],
                                G = W[M],
                                K = _e(0, E[_], H[_]),
                                $ = x ? E[_] / 2 - F - K - U - j.mainAxis : B - K - U - j.mainAxis,
                                Y = x ? -E[_] / 2 + F + K + G + j.mainAxis : z + K + G + j.mainAxis,
                                te = t.elements.arrow && Z(t.elements.arrow),
                                ne = te ? "y" === y ? te.clientTop || 0 : te.clientLeft || 0 : 0,
                                ie = null != (C = null == k ? void 0 : k[y]) ? C : 0,
                                oe = I + Y - ie,
                                ae = _e(p ? D(L, I + $ - ie - ne) : L, I, p ? P(R, oe) : R);
                            A[y] = ae, T[y] = ae - I
                        }
                        if (s) {
                            var se, le = "x" === y ? Q : ee,
                                ce = "x" === y ? X : J,
                                ue = A[w],
                                fe = "y" === w ? "height" : "width",
                                de = ue + v[le],
                                pe = ue - v[ce],
                                me = -1 !== [Q, ee].indexOf(g),
                                he = null != (se = null == k ? void 0 : k[w]) ? se : 0,
                                xe = me ? de : ue - E[fe] - S[fe] - he + j.altAxis,
                                ye = me ? ue + E[fe] + S[fe] - he - j.altAxis : pe,
                                we = p && me ? function(e, t, n) {
                                    var r = _e(e, t, n);
                                    return r > n ? n : r
                                }(xe, ue, ye) : _e(p ? xe : de, ue, p ? ye : pe);
                            A[w] = we, T[w] = we - ue
                        }
                        t.modifiersData[r] = T
                    }
                },
                requiresIfExists: ["offset"]
            };
            const Le = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state,
                        r = e.name,
                        i = e.options,
                        o = n.elements.arrow,
                        a = n.modifiersData.popperOffsets,
                        s = ve(n.placement),
                        l = be(s),
                        c = [ee, J].indexOf(s) >= 0 ? "height" : "width";
                    if (o && a) {
                        var u = function(e, t) {
                                return Pe("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : De(e, ne))
                            }(i.padding, n),
                            f = q(o),
                            d = "y" === l ? Q : ee,
                            p = "y" === l ? X : J,
                            m = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c],
                            h = a[l] - n.rects.reference[l],
                            v = Z(o),
                            g = v ? "y" === l ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                            b = m / 2 - h / 2,
                            x = u[d],
                            y = g - f[c] - u[p],
                            w = g / 2 - f[c] / 2 + b,
                            A = _e(x, w, y),
                            E = l;
                        n.modifiersData[r] = ((t = {})[E] = A, t.centerOffset = A - w, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && ke(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function Re(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function Fe(e) {
                return [Q, J, X, ee].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var Be = me({
                    defaultModifiers: [{
                        name: "eventListeners",
                        enabled: !0,
                        phase: "write",
                        fn: function() {},
                        effect: function(e) {
                            var t = e.state,
                                n = e.instance,
                                r = e.options,
                                i = r.scroll,
                                o = void 0 === i || i,
                                a = r.resize,
                                s = void 0 === a || a,
                                l = k(t.elements.popper),
                                c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                            return o && c.forEach((function(e) {
                                    e.addEventListener("scroll", n.update, he)
                                })), s && l.addEventListener("resize", n.update, he),
                                function() {
                                    o && c.forEach((function(e) {
                                        e.removeEventListener("scroll", n.update, he)
                                    })), s && l.removeEventListener("resize", n.update, he)
                                }
                        },
                        data: {}
                    }, {
                        name: "popperOffsets",
                        enabled: !0,
                        phase: "read",
                        fn: function(e) {
                            var t = e.state,
                                n = e.name;
                            t.modifiersData[n] = xe({
                                reference: t.rects.reference,
                                element: t.rects.popper,
                                strategy: "absolute",
                                placement: t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                i = void 0 === r || r,
                                o = n.adaptive,
                                a = void 0 === o || o,
                                s = n.roundOffsets,
                                l = void 0 === s || s,
                                c = {
                                    placement: ve(t.placement),
                                    variation: ge(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: i,
                                    isFixed: "fixed" === t.options.strategy
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, we(Object.assign({}, c, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: a,
                                roundOffsets: l
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, we(Object.assign({}, c, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: l
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    i = t.elements[e];
                                C(i) && F(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            i = t.attributes[e] || {},
                                            o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        C(r) && F(r) && (Object.assign(r.style, o), Object.keys(i).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, Ae, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, s = void 0 === a || a, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, h = n.allowedAutoPlacements, v = t.options.placement, g = ve(v), b = l || (g === v || !m ? [Se(v)] : function(e) {
                                        if (ve(e) === te) return [];
                                        var t = Se(e);
                                        return [je(e), t, je(t)]
                                    }(v)), x = [v].concat(b).reduce((function(e, n) {
                                        return e.concat(ve(n) === te ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                i = n.boundary,
                                                o = n.rootBoundary,
                                                a = n.padding,
                                                s = n.flipVariations,
                                                l = n.allowedAutoPlacements,
                                                c = void 0 === l ? le : l,
                                                u = ge(r),
                                                f = u ? s ? se : se.filter((function(e) {
                                                    return ge(e) === u
                                                })) : ne,
                                                d = f.filter((function(e) {
                                                    return c.indexOf(e) >= 0
                                                }));
                                            0 === d.length && (d = f);
                                            var p = d.reduce((function(t, n) {
                                                return t[n] = Me(e, {
                                                    placement: n,
                                                    boundary: i,
                                                    rootBoundary: o,
                                                    padding: a
                                                })[ve(n)], t
                                            }), {});
                                            return Object.keys(p).sort((function(e, t) {
                                                return p[e] - p[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: f,
                                            padding: c,
                                            flipVariations: m,
                                            allowedAutoPlacements: h
                                        }) : n)
                                    }), []), y = t.rects.reference, w = t.rects.popper, A = new Map, E = !0, S = x[0], N = 0; N < x.length; N++) {
                                    var j = x[N],
                                        k = ve(j),
                                        T = ge(j) === re,
                                        C = [Q, X].indexOf(k) >= 0,
                                        O = C ? "width" : "height",
                                        P = Me(t, {
                                            placement: j,
                                            boundary: u,
                                            rootBoundary: f,
                                            altBoundary: d,
                                            padding: c
                                        }),
                                        D = C ? T ? J : ee : T ? X : Q;
                                    y[O] > w[O] && (D = Se(D));
                                    var M = Se(D),
                                        _ = [];
                                    if (o && _.push(P[k] <= 0), s && _.push(P[D] <= 0, P[M] <= 0), _.every((function(e) {
                                            return e
                                        }))) {
                                        S = j, E = !1;
                                        break
                                    }
                                    A.set(j, _)
                                }
                                if (E)
                                    for (var I = function(e) {
                                            var t = x.find((function(t) {
                                                var n = A.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return S = t, "break"
                                        }, L = m ? 3 : 1; L > 0; L--) {
                                        if ("break" === I(L)) break
                                    }
                                t.placement !== S && (t.modifiersData[r]._skip = !0, t.placement = S, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, Ie, Le, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                i = t.rects.popper,
                                o = t.modifiersData.preventOverflow,
                                a = Me(t, {
                                    elementContext: "reference"
                                }),
                                s = Me(t, {
                                    altBoundary: !0
                                }),
                                l = Re(a, r),
                                c = Re(s, i, o),
                                u = Fe(l),
                                f = Fe(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: l,
                                popperEscapeOffsets: c,
                                isReferenceHidden: u,
                                hasPopperEscaped: f
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": f
                            })
                        }
                    }]
                }),
                ze = n("F0GY"),
                Ve = n.n(ze),
                He = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                We = window.document && window.document.createElement ? i.useLayoutEffect : i.useEffect,
                qe = [],
                Ue = (n("VNw5"), (0, i.forwardRef)((function(e, t) {
                    var n, i = e.arrow,
                        s = e.shadow,
                        l = e.variant,
                        c = void 0 === l ? "primary" : l,
                        d = (e.placement, e.style),
                        m = e.radius,
                        h = e.arrowRef,
                        v = e.arrowStyle,
                        g = e.bubbleFontSize,
                        b = void 0 === g ? 14 : g,
                        x = (0, r.__rest)(e, ["arrow", "shadow", "variant", "placement", "style", "radius", "arrowRef", "arrowStyle", "bubbleFontSize"]),
                        y = (0, p.r)().prefixCls,
                        w = "".concat(y, "-bubble"),
                        A = u()(w, "".concat(w, "-web"), ((n = {})["".concat(w, "__").concat(c)] = !!c, n["data-font-".concat(b)] = !!b, n["web-shadow"] = !!s, n), e.className),
                        E = {
                            borderRadius: m
                        };
                    if (a.lq) throw new Error("this component only use Web side");
                    return o().createElement(f.Ay, (0, r.__assign)({}, x, {
                        className: A,
                        style: d,
                        ref: t
                    }), o().createElement(f.Ay, {
                        style: E,
                        className: "".concat(w, "-content"),
                        children: e.children
                    }), !!i && o().createElement(f.Ay, {
                        className: "".concat(w, "-web-arrow"),
                        style: v,
                        ref: h,
                        "data-popper-arrow": !0
                    }))
                })));
            Ue.displayName = "Bubble";
            const Ge = Ue;
            var Ke = n("BkWY"),
                $e = function(e) {
                    var t, n = e.open,
                        l = e.once,
                        c = e.arrow,
                        d = e.offset,
                        g = void 0 === d ? 12 : d,
                        x = e.disabled,
                        y = e.tooltips,
                        A = e.variant,
                        E = void 0 === A ? "gray" : A,
                        k = e.placement,
                        T = void 0 === k ? "top" : k,
                        C = e.trigger,
                        O = void 0 === C ? "hover" : C,
                        P = e.onVisibleChange,
                        D = e.enablePortal,
                        M = e.portalNode,
                        _ = e.reactPopperProps,
                        I = void 0 === _ ? {} : _,
                        L = I.sameWidth,
                        R = I.popperWidth,
                        F = I.offsetX,
                        B = I.screenPadding,
                        z = e.bubbleClassName,
                        V = e.bubbleWrapperClz,
                        H = e.triggerClassName,
                        W = e.enableHoverSafeArea,
                        q = e.delay,
                        U = void 0 === q ? h : q,
                        G = e.enableClickBubble,
                        K = e.ariaRole,
                        $ = void 0 === K ? b : K,
                        Y = (0, r.__rest)(e, ["open", "once", "arrow", "offset", "disabled", "tooltips", "variant", "placement", "trigger", "onVisibleChange", "enablePortal", "portalNode", "reactPopperProps", "bubbleClassName", "bubbleWrapperClz", "triggerClassName", "enableHoverSafeArea", "delay", "enableClickBubble", "ariaRole"]),
                        Z = (0, i.useState)(n),
                        Q = Z[0],
                        X = Z[1],
                        J = (0, i.useState)(null),
                        ee = J[0],
                        te = J[1],
                        ne = (0, p.r)(),
                        re = ne.prefixCls,
                        ie = ne.isMobile,
                        oe = ne.isTablet,
                        ae = ne.isRTL,
                        se = ne.isClient,
                        le = (0, i.useState)(null),
                        ce = le[0],
                        ue = le[1],
                        fe = (0, i.useState)(null),
                        de = fe[0],
                        pe = fe[1],
                        me = (0, i.useState)(null),
                        he = me[0],
                        ve = me[1],
                        ge = (0, i.useState)(""),
                        be = ge[0],
                        xe = ge[1],
                        ye = !a.lq && !ie && !oe,
                        we = "".concat(re, "-tooltips"),
                        Ae = u()("".concat(re, "-tooltips-trans"), V),
                        Ee = u()("".concat(we, "-ele"), ((t = {})["".concat(we, "-ele-rtl")] = !!ae, t["".concat(we, "-ele-with-safe-area")] = !!W && "hover" === O, t), H),
                        Se = u()(we, {
                            active: Q
                        }, z),
                        Ne = u()("".concat(we, "-wrap"), "".concat(we, "-web"), {
                            active: !x && Q
                        }, Y.className);
                    O = ye ? O : "click";
                    var je = ae && m[T] || T;
                    if (a.lq) throw new Error("this component only use Web side");
                    var ke = (0, s.d)({
                            fn: P
                        }).debounceFn,
                        Te = (0, i.useCallback)((function(e) {
                            x || X((function(t) {
                                var n = "boolean" === typeof e ? e : !t;
                                return t !== n && (null === ke || void 0 === ke || ke(n)), t !== n ? n : t
                            }))
                        }), [x, ke]),
                        Ce = (0, i.useMemo)((function() {
                            var e, t, n;
                            return "number" === typeof U ? {
                                enter: U,
                                leave: U,
                                click: U
                            } : {
                                enter: null !== (e = U.enter) && void 0 !== e ? e : h,
                                leave: null !== (t = U.leave) && void 0 !== t ? t : h,
                                click: null !== (n = U.click) && void 0 !== n ? n : h
                            }
                        }), [U]),
                        Oe = (0, s.d)({
                            fn: Te,
                            time: Ce.enter
                        }),
                        Pe = Oe.debounceFn,
                        De = Oe.clearTimer,
                        Me = (0, s.d)({
                            fn: Te,
                            time: Ce.leave
                        }),
                        _e = Me.debounceFn,
                        Ie = Me.clearTimer,
                        Le = (0, s.d)({
                            fn: Te,
                            time: Ce.click
                        }).debounceFn,
                        Re = (0, i.useCallback)((function(e) {
                            var t = null === de || void 0 === de ? void 0 : de.contains(e.target),
                                n = null === ce || void 0 === ce ? void 0 : ce.contains(e.target);
                            !(!l && t || n) && Q && Le(!1)
                        }), [Le, ce, de, l, Q]);
                    g = c ? Math.max(g, 4) : g;
                    var Fe = o().useMemo((function() {
                            return {
                                name: "applyArrowHide",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = t.placement,
                                        r = t.elements,
                                        i = t.rects,
                                        o = r.arrow,
                                        a = r.reference;
                                    if (o && a) {
                                        var s = (["top", "bottom"].includes(n.split("-")[0]) ? i.reference.width : i.reference.height) / 2 - 3,
                                            l = Math.abs(t.modifiersData.arrow.centerOffset),
                                            c = Math.abs(l) > s;
                                        o && (c ? o.setAttribute("data-hide", "") : o.removeAttribute("data-hide"))
                                    }
                                }
                            }
                        }), []),
                        ze = [{
                            name: "arrow",
                            options: {
                                element: he,
                                padding: 12
                            }
                        }, {
                            name: "offset",
                            options: {
                                offset: [F || 0, g]
                            }
                        }, Fe],
                        Ue = o().useMemo((function() {
                            return {
                                name: "sameWidth",
                                enabled: !0,
                                phase: "beforeWrite",
                                requires: ["computeStyles"],
                                fn: function(e) {
                                    var t = e.state;
                                    t.styles.popper.width = "".concat(R || t.rects.reference.width, "px")
                                },
                                effect: function(e) {
                                    var t = e.state;
                                    t.elements.popper.style.width = "".concat(R || t.elements.reference.offsetWidth, "px")
                                }
                            }
                        }), [R]),
                        $e = o().useMemo((function() {
                            return {
                                name: "preventOverflow",
                                options: {
                                    padding: B
                                }
                            }
                        }), [B]);
                    (R || L) && ze.push(Ue), B && ze.push($e);
                    var Ye = function(e, t, n) {
                            void 0 === n && (n = {});
                            var r = i.useRef(null),
                                o = {
                                    onFirstUpdate: n.onFirstUpdate,
                                    placement: n.placement || "bottom",
                                    strategy: n.strategy || "absolute",
                                    modifiers: n.modifiers || qe
                                },
                                a = i.useState({
                                    styles: {
                                        popper: {
                                            position: o.strategy,
                                            left: "0",
                                            top: "0"
                                        },
                                        arrow: {
                                            position: "absolute"
                                        }
                                    },
                                    attributes: {}
                                }),
                                s = a[0],
                                l = a[1],
                                c = i.useMemo((function() {
                                    return {
                                        name: "updateState",
                                        enabled: !0,
                                        phase: "write",
                                        fn: function(e) {
                                            var t = e.state,
                                                n = Object.keys(t.elements);
                                            S.flushSync((function() {
                                                l({
                                                    styles: He(n.map((function(e) {
                                                        return [e, t.styles[e] || {}]
                                                    }))),
                                                    attributes: He(n.map((function(e) {
                                                        return [e, t.attributes[e]]
                                                    })))
                                                })
                                            }))
                                        },
                                        requires: ["computeStyles"]
                                    }
                                }), []),
                                u = i.useMemo((function() {
                                    var e = {
                                        onFirstUpdate: o.onFirstUpdate,
                                        placement: o.placement,
                                        strategy: o.strategy,
                                        modifiers: [].concat(o.modifiers, [c, {
                                            name: "applyStyles",
                                            enabled: !1
                                        }])
                                    };
                                    return Ve()(r.current, e) ? r.current || e : (r.current = e, e)
                                }), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, c]),
                                f = i.useRef();
                            return We((function() {
                                f.current && f.current.setOptions(u)
                            }), [u]), We((function() {
                                if (null != e && null != t) {
                                    var r = (n.createPopper || Be)(e, t, u);
                                    return f.current = r,
                                        function() {
                                            r.destroy(), f.current = null
                                        }
                                }
                            }), [e, t, n.createPopper]), {
                                state: f.current ? f.current.state : null,
                                styles: s.styles,
                                attributes: s.attributes,
                                update: f.current ? f.current.update : null,
                                forceUpdate: f.current ? f.current.forceUpdate : null
                            }
                        }(ce, de, {
                            placement: je,
                            strategy: "fixed",
                            modifiers: ze
                        }),
                        Ze = Ye.styles,
                        Qe = Ye.attributes,
                        Xe = Ye.update,
                        Je = (0, i.useCallback)((function(e) {
                            !G && v(e);
                            var t = null === de || void 0 === de ? void 0 : de.contains(e.target),
                                n = !l && t;
                            t && Xe && Xe(), n || Le(e)
                        }), [l, de, Le, Xe, G]),
                        et = (0, i.useCallback)((function(e) {
                            if (de && ce) {
                                var t, n, r, i = de.getBoundingClientRect(),
                                    o = ce.getBoundingClientRect(),
                                    a = e.clientX - o.left,
                                    s = e.clientY - o.top,
                                    l = {
                                        top: i.top - o.top,
                                        bottom: i.bottom - o.top,
                                        left: i.left - o.left,
                                        right: i.right - o.left
                                    };
                                switch (je.split("-")[0]) {
                                    case "left":
                                        a = Math.min(a + 4, o.width);
                                        var c = l.top + (a - l.right) * (0 - l.top) / (o.width - l.right),
                                            u = l.bottom + (a - l.right) * (o.height - l.bottom) / (o.width - l.right);
                                        s = Math.min(Math.max(s, c), u), t = "".concat(a, ",").concat(s), n = "".concat(l.right, ",").concat(l.top - 2), r = "".concat(l.right, ",").concat(l.bottom + 2);
                                        break;
                                    case "right":
                                        a = Math.max(a - 4, 0);
                                        var f = l.top + (a - l.left) * (0 - l.top) / (0 - l.left),
                                            d = l.bottom + (a - l.left) * (o.height - l.bottom) / (0 - l.left);
                                        s = Math.min(Math.max(s, f), d), t = "".concat(a, ",").concat(s), n = "".concat(l.left, ",").concat(l.top - 2), r = "".concat(l.left, ",").concat(l.bottom + 2);
                                        break;
                                    case "top":
                                        s = Math.min(s + 4, o.height);
                                        var p = l.left + (s - l.bottom) * (0 - l.left) / (o.height - l.bottom),
                                            m = l.right + (s - l.bottom) * (o.width - l.right) / (o.height - l.bottom);
                                        a = Math.min(Math.max(a, p), m), t = "".concat(a, ",").concat(s), n = "".concat(l.left, ",").concat(l.bottom), r = "".concat(l.right, ",").concat(l.bottom);
                                        break;
                                    default:
                                        s = Math.max(s - 4, 0);
                                        var h = l.left + (s - l.top) * (0 - l.left) / (0 - l.top),
                                            v = l.right + (s - l.top) * (o.width - l.right) / (0 - l.top);
                                        a = Math.min(Math.max(a, h), v), t = "".concat(a, ",").concat(s), n = "".concat(l.left, ",").concat(l.top), r = "".concat(l.right, ",").concat(l.top)
                                }
                                xe("".concat(t, " ").concat(n, " ").concat(r))
                            }
                        }), [de, ce, je]);
                    (0, i.useEffect)((function() {
                        return document.addEventListener("click", Re),
                            function() {
                                document.removeEventListener("click", Re)
                            }
                    }), [Re]), (0, i.useEffect)((function() {
                        "undefined" !== typeof n && !!n !== Q && X(n)
                    }), [n, Q]), (0, i.useEffect)((function() {
                        M instanceof HTMLElement ? te(M) : te(document.body)
                    }), [M]), (0, j.op)((function() {
                        null === Xe || void 0 === Xe || Xe()
                    }), [y, Xe]);
                    var tt = "hover" === O ? {
                            onMouseEnter: function() {
                                Ie(), Pe(!0)
                            },
                            onMouseLeave: function() {
                                De(), _e(!1)
                            },
                            onMouseMove: W ? et : void 0
                        } : {
                            onClick: Je
                        },
                        nt = (0, r.__assign)({
                            arrow: c,
                            variant: E,
                            shadow: !0
                        }, Y);
                    "gray" === E && (nt = (0, r.__assign)((0, r.__assign)({}, nt), {
                        shadow: !1
                    }));
                    var rt = !x && Q,
                        it = w(we, $, rt),
                        ot = it.triggerAriaProps,
                        at = it.contentAriaProps,
                        st = o().createElement(Ke.A, {
                            visible: rt,
                            className: Ae
                        }, o().createElement(Ge, (0, r.__assign)({}, at, nt, {
                            className: Se,
                            ref: pe,
                            arrowRef: ve,
                            arrowStyle: Ze.arrow,
                            style: (0, r.__assign)((0, r.__assign)({}, Ze.popper), null === Y || void 0 === Y ? void 0 : Y.style)
                        }, Qe.popper, {
                            children: y
                        })));
                    return o().createElement(f.Ay, (0, r.__assign)({
                        ref: ue
                    }, tt, {
                        className: Ne
                    }), W && "hover" === O && Q && o().createElement("svg", {
                        className: "".concat(we, "-safety-triangle"),
                        pointerEvents: "none"
                    }, o().createElement("polygon", {
                        pointerEvents: "auto",
                        points: be
                    })), o().createElement(f.Ay, (0, r.__assign)({}, ot, {
                        className: Ee,
                        children: Y.children
                    })), se && D && null !== ee ? N().createPortal(st, ee) : st)
                };
            $e.displayName = "Tooltips";
            const Ye = $e;
            var Ze = function(e) {
                var t = e.useReactPopper,
                    n = e.reactPopperProps,
                    i = e.enableHoverSafeArea,
                    s = e.bubbleWrapperClz,
                    l = (0, r.__rest)(e, ["useReactPopper", "reactPopperProps", "enableHoverSafeArea", "bubbleWrapperClz"]);
                return !a.lq && t ? o().createElement(Ye, (0, r.__assign)({
                    reactPopperProps: n,
                    enableHoverSafeArea: i,
                    bubbleWrapperClz: s
                }, l)) : o().createElement(E, (0, r.__assign)({}, l))
            };
            Ze.displayName = "Tooltips";
            const Qe = Ze
        },
        "5MVY": function(e) {
            e.exports = function() {
                "use strict";
                var e, t, n = 1e3,
                    r = 6e4,
                    i = 36e5,
                    o = 864e5,
                    a = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
                    s = 31536e6,
                    l = 2592e6,
                    c = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,
                    u = {
                        years: s,
                        months: l,
                        days: o,
                        hours: i,
                        minutes: r,
                        seconds: n,
                        milliseconds: 1,
                        weeks: 6048e5
                    },
                    f = function(e) {
                        return e instanceof b
                    },
                    d = function(e, t, n) {
                        return new b(e, n, t.$l)
                    },
                    p = function(e) {
                        return t.p(e) + "s"
                    },
                    m = function(e) {
                        return e < 0
                    },
                    h = function(e) {
                        return m(e) ? Math.ceil(e) : Math.floor(e)
                    },
                    v = function(e) {
                        return Math.abs(e)
                    },
                    g = function(e, t) {
                        return e ? m(e) ? {
                            negative: !0,
                            format: "" + v(e) + t
                        } : {
                            negative: !1,
                            format: "" + e + t
                        } : {
                            negative: !1,
                            format: ""
                        }
                    },
                    b = function() {
                        function m(e, t, n) {
                            var r = this;
                            if (this.$d = {}, this.$l = n, void 0 === e && (this.$ms = 0, this.parseFromMilliseconds()), t) return d(e * u[p(t)], this);
                            if ("number" == typeof e) return this.$ms = e, this.parseFromMilliseconds(), this;
                            if ("object" == typeof e) return Object.keys(e).forEach((function(t) {
                                r.$d[p(t)] = e[t]
                            })), this.calMilliseconds(), this;
                            if ("string" == typeof e) {
                                var i = e.match(c);
                                if (i) {
                                    var o = i.slice(2).map((function(e) {
                                        return null != e ? Number(e) : 0
                                    }));
                                    return this.$d.years = o[0], this.$d.months = o[1], this.$d.weeks = o[2], this.$d.days = o[3], this.$d.hours = o[4], this.$d.minutes = o[5], this.$d.seconds = o[6], this.calMilliseconds(), this
                                }
                            }
                            return this
                        }
                        var v = m.prototype;
                        return v.calMilliseconds = function() {
                            var e = this;
                            this.$ms = Object.keys(this.$d).reduce((function(t, n) {
                                return t + (e.$d[n] || 0) * u[n]
                            }), 0)
                        }, v.parseFromMilliseconds = function() {
                            var e = this.$ms;
                            this.$d.years = h(e / s), e %= s, this.$d.months = h(e / l), e %= l, this.$d.days = h(e / o), e %= o, this.$d.hours = h(e / i), e %= i, this.$d.minutes = h(e / r), e %= r, this.$d.seconds = h(e / n), e %= n, this.$d.milliseconds = e
                        }, v.toISOString = function() {
                            var e = g(this.$d.years, "Y"),
                                t = g(this.$d.months, "M"),
                                n = +this.$d.days || 0;
                            this.$d.weeks && (n += 7 * this.$d.weeks);
                            var r = g(n, "D"),
                                i = g(this.$d.hours, "H"),
                                o = g(this.$d.minutes, "M"),
                                a = this.$d.seconds || 0;
                            this.$d.milliseconds && (a += this.$d.milliseconds / 1e3);
                            var s = g(a, "S"),
                                l = e.negative || t.negative || r.negative || i.negative || o.negative || s.negative,
                                c = i.format || o.format || s.format ? "T" : "",
                                u = (l ? "-" : "") + "P" + e.format + t.format + r.format + c + i.format + o.format + s.format;
                            return "P" === u || "-P" === u ? "P0D" : u
                        }, v.toJSON = function() {
                            return this.toISOString()
                        }, v.format = function(e) {
                            var n = e || "YYYY-MM-DDTHH:mm:ss",
                                r = {
                                    Y: this.$d.years,
                                    YY: t.s(this.$d.years, 2, "0"),
                                    YYYY: t.s(this.$d.years, 4, "0"),
                                    M: this.$d.months,
                                    MM: t.s(this.$d.months, 2, "0"),
                                    D: this.$d.days,
                                    DD: t.s(this.$d.days, 2, "0"),
                                    H: this.$d.hours,
                                    HH: t.s(this.$d.hours, 2, "0"),
                                    m: this.$d.minutes,
                                    mm: t.s(this.$d.minutes, 2, "0"),
                                    s: this.$d.seconds,
                                    ss: t.s(this.$d.seconds, 2, "0"),
                                    SSS: t.s(this.$d.milliseconds, 3, "0")
                                };
                            return n.replace(a, (function(e, t) {
                                return t || String(r[e])
                            }))
                        }, v.as = function(e) {
                            return this.$ms / u[p(e)]
                        }, v.get = function(e) {
                            var t = this.$ms,
                                n = p(e);
                            return "milliseconds" === n ? t %= 1e3 : t = "weeks" === n ? h(t / u[n]) : this.$d[n], 0 === t ? 0 : t
                        }, v.add = function(e, t, n) {
                            var r;
                            return r = t ? e * u[p(t)] : f(e) ? e.$ms : d(e, this).$ms, d(this.$ms + r * (n ? -1 : 1), this)
                        }, v.subtract = function(e, t) {
                            return this.add(e, t, !0)
                        }, v.locale = function(e) {
                            var t = this.clone();
                            return t.$l = e, t
                        }, v.clone = function() {
                            return d(this.$ms, this)
                        }, v.humanize = function(t) {
                            return e().add(this.$ms, "ms").locale(this.$l).fromNow(!t)
                        }, v.milliseconds = function() {
                            return this.get("milliseconds")
                        }, v.asMilliseconds = function() {
                            return this.as("milliseconds")
                        }, v.seconds = function() {
                            return this.get("seconds")
                        }, v.asSeconds = function() {
                            return this.as("seconds")
                        }, v.minutes = function() {
                            return this.get("minutes")
                        }, v.asMinutes = function() {
                            return this.as("minutes")
                        }, v.hours = function() {
                            return this.get("hours")
                        }, v.asHours = function() {
                            return this.as("hours")
                        }, v.days = function() {
                            return this.get("days")
                        }, v.asDays = function() {
                            return this.as("days")
                        }, v.weeks = function() {
                            return this.get("weeks")
                        }, v.asWeeks = function() {
                            return this.as("weeks")
                        }, v.months = function() {
                            return this.get("months")
                        }, v.asMonths = function() {
                            return this.as("months")
                        }, v.years = function() {
                            return this.get("years")
                        }, v.asYears = function() {
                            return this.as("years")
                        }, m
                    }();
                return function(n, r, i) {
                    e = i, t = i().$utils(), i.duration = function(e, t) {
                        var n = i.locale();
                        return d(e, {
                            $l: n
                        }, t)
                    }, i.isDuration = f;
                    var o = r.prototype.add,
                        a = r.prototype.subtract;
                    r.prototype.add = function(e, t) {
                        return f(e) && (e = e.asMilliseconds()), o.bind(this)(e, t)
                    }, r.prototype.subtract = function(e, t) {
                        return f(e) && (e = e.asMilliseconds()), a.bind(this)(e, t)
                    }
                }
            }()
        },
        vm2h: function(e) {
            e.exports = function() {
                "use strict";
                return function(e, t, n) {
                    e = e || {};
                    var r = t.prototype,
                        i = {
                            future: "in %s",
                            past: "%s ago",
                            s: "a few seconds",
                            m: "a minute",
                            mm: "%d minutes",
                            h: "an hour",
                            hh: "%d hours",
                            d: "a day",
                            dd: "%d days",
                            M: "a month",
                            MM: "%d months",
                            y: "a year",
                            yy: "%d years"
                        };

                    function o(e, t, n, i) {
                        return r.fromToBase(e, t, n, i)
                    }
                    n.en.relativeTime = i, r.fromToBase = function(t, r, o, a, s) {
                        for (var l, c, u, f = o.$locale().relativeTime || i, d = e.thresholds || [{
                                l: "s",
                                r: 44,
                                d: "second"
                            }, {
                                l: "m",
                                r: 89
                            }, {
                                l: "mm",
                                r: 44,
                                d: "minute"
                            }, {
                                l: "h",
                                r: 89
                            }, {
                                l: "hh",
                                r: 21,
                                d: "hour"
                            }, {
                                l: "d",
                                r: 35
                            }, {
                                l: "dd",
                                r: 25,
                                d: "day"
                            }, {
                                l: "M",
                                r: 45
                            }, {
                                l: "MM",
                                r: 10,
                                d: "month"
                            }, {
                                l: "y",
                                r: 17
                            }, {
                                l: "yy",
                                d: "year"
                            }], p = d.length, m = 0; m < p; m += 1) {
                            var h = d[m];
                            h.d && (l = a ? n(t).diff(o, h.d, !0) : o.diff(t, h.d, !0));
                            var v = (e.rounding || Math.round)(Math.abs(l));
                            if (u = l > 0, v <= h.r || !h.r) {
                                v <= 1 && m > 0 && (h = d[m - 1]);
                                var g = f[h.l];
                                s && (v = s("" + v)), c = "string" == typeof g ? g.replace("%d", v) : g(v, r, h.l, u);
                                break
                            }
                        }
                        if (r) return c;
                        var b = u ? f.future : f.past;
                        return "function" == typeof b ? b(c) : b.replace("%s", c)
                    }, r.to = function(e, t) {
                        return o(e, t, this, !0)
                    }, r.from = function(e, t) {
                        return o(e, t, this)
                    };
                    var a = function(e) {
                        return e.$u ? n.utc() : n()
                    };
                    r.toNow = function(e) {
                        return this.to(a(this), e)
                    }, r.fromNow = function(e) {
                        return this.from(a(this), e)
                    }
                }
            }()
        },
        "7I3l": function(e) {
            e.exports = function() {
                "use strict";

                function e(e) {
                    for (var t = arguments, n = t.length, r = 1; r < n; r++) {
                        var i = t[r];
                        for (var o in i) e[o] = i[o]
                    }
                    return e
                }

                function t(e) {
                    return "number" === typeof e && !isNaN(e)
                }

                function n(e) {
                    return "function" === typeof e
                }

                function r(e, t) {
                    var n, r, i, o, a = e.scrollWidth,
                        s = e.scrollHeight;
                    if (t) {
                        var l = document.documentElement,
                            c = document.body;
                        i = l.clientWidth, o = l.clientHeight, n = c.scrollTop || l.scrollTop, r = c.scrollLeft || l.scrollLeft
                    } else i = e.offsetWidth, o = e.offsetHeight, n = e.scrollTop, r = e.scrollLeft;
                    return {
                        isScrollTopEnd: n <= 0,
                        isScrollBottomEnd: o + n >= s,
                        isScrollLeftEnd: r <= 0,
                        isScrollRightEnd: i + r >= a
                    }
                }

                function i(e) {
                    return "string" === typeof e ? document.querySelector(e) : e
                }

                function o(e, t, n, r) {
                    e.addEventListener(t, n, r)
                }

                function a(e, t, n) {
                    e.removeEventListener(t, n)
                }

                function s(e) {
                    var t = e.touches[0];
                    return {
                        x: t.clientX,
                        y: t.clientY
                    }
                }

                function l(e, r) {
                    return n(r) ? r(e) : t(r) ? e / r : e
                }

                function c(e, t, n) {
                    var r = n ? "translate(" + e + "px," + t + "px) translateZ(0)" : "translate(" + e + "px," + t + "px)";
                    return {
                        transform: r,
                        webkitTransform: r
                    }
                }
                var u = {
                        passive: !1
                    },
                    f = {
                        transition: "",
                        transform: "",
                        webkitTransform: "",
                        webkitTransition: ""
                    },
                    d = {
                        transition: "",
                        webkitTransition: ""
                    },
                    p = {
                        pullDown: "onPullDown",
                        pullUp: "onPullUp",
                        pullRight: "onPullRight",
                        pullLeft: "onPullLeft"
                    },
                    m = {
                        pullDown: "isScrollTopEnd",
                        pullUp: "isScrollBottomEnd",
                        pullRight: "isScrollLeftEnd",
                        pullLeft: "isScrollRightEnd"
                    },
                    h = {
                        action: "",
                        axis: "",
                        translateX: 0,
                        translateY: 0
                    },
                    v = e({
                        isScrollTopEnd: !0,
                        isScrollLeftEnd: !0,
                        isScrollBottomEnd: !0,
                        isScrollRightEnd: !0,
                        clientX: 0,
                        clientY: 0
                    }, h),
                    g = {
                        target: "body",
                        scroller: "",
                        trigger: "",
                        damping: 1.6,
                        wait: !0,
                        pullUp: !1,
                        pullDown: !1,
                        pullLeft: !1,
                        pullRight: !1,
                        detectScroll: !1,
                        detectScrollOnStart: !1,
                        stopPropagation: !1,
                        drag: !1,
                        transitionProperty: "transform",
                        transitionDuration: "0.3s",
                        transitionTimingFunction: "ease-out",
                        translateZ: !0
                    },
                    b = "function" === typeof Promise;

                function x(t) {
                    this.options = e({}, g, t), this.state = e({}, v), this.target = null, this.scroller = null, this.trigger = null, this.transitionStyle = null, this.isTouching = !1, this.isPreventDefault = !1, this.isWaiting = !1, this.isGlobalScroller = !1, this.transitionDuration = 0, this.handleTouchStart = this.handleTouchStart.bind(this), this.handleTouchMove = this.handleTouchMove.bind(this), this.handleTouchEnd = this.handleTouchEnd.bind(this)
                }
                return e(x.prototype, {
                    init: function() {
                        var e = this.options,
                            t = i(e.target),
                            n = e.scroller ? i(e.scroller) : t,
                            r = e.trigger ? i(e.trigger) : t;
                        this.target = t, this.scroller = n, this.trigger = r, this.isGlobalScroller = n === document.body || n === window || n === document.documentElement, this.transitionStyle = {
                            transitionProperty: e.transitionProperty,
                            transitionDuration: e.transitionDuration,
                            transitionTimingFunction: e.transitionTimingFunction,
                            webkitTransitionProperty: e.transitionProperty,
                            webkitTransitionDuration: e.transitionDuration,
                            webkitTransitionTimingFunction: e.transitionTimingFunction
                        };
                        var o = Number(e.transitionDuration.replace(/[^.\d]+/g, ""));
                        /[\d\.]+s$/.test(e.transitionDuration) && (o *= 1e3), this.transitionDuration = o, this.enable()
                    },
                    destroy: function() {
                        this.disable()
                    },
                    setTranslate: function(t, n) {
                        e(this.target.style, d, c(t, n, this.options.translateZ))
                    },
                    animateTo: function(t, n, r) {
                        var i = this.state,
                            o = this.target,
                            a = this.transitionDuration,
                            s = this.transitionStyle,
                            l = c(t, n, this.options.translateZ);
                        i.translateX = t, i.translateY = n;
                        var u = function(t) {
                            e(o.style, s, l), setTimeout(t, a)
                        };
                        if (b) return new Promise(u).then(r);
                        u(r)
                    },
                    animateToOrigin: function(t) {
                        var n = this,
                            r = function() {
                                e(n.target.style, f), e(n.state, h), n.isWaiting = !1, t && t()
                            };
                        return this.animateTo(0, 0, r)
                    },
                    enable: function() {
                        o(this.trigger, "touchstart", this.handleTouchStart), o(document, "touchmove", this.handleTouchMove, u), o(document, "touchend", this.handleTouchEnd), o(document, "touchcancel", this.handleTouchEnd)
                    },
                    disable: function() {
                        a(this.trigger, "touchstart", this.handleTouchStart), a(document, "touchmove", this.handleTouchMove, u), a(document, "touchend", this.handleTouchEnd), a(document, "touchcancel", this.handleTouchEnd)
                    },
                    preventDefault: function() {
                        this.isPreventDefault = !0
                    },
                    getScrollInfo: function() {
                        return r(this.scroller, this.isGlobalScroller)
                    },
                    isActiveAction: function(e) {
                        var t = this.options,
                            n = p[e];
                        return t[n] || t[n + "End"] || t[e]
                    },
                    emit: function(e, t) {
                        var r = this.options[e];
                        n(r) && r.call(this, t)
                    },
                    handleTouchStart: function(t) {
                        if (!this.isTouching && !this.isWaiting) {
                            var n = this.options,
                                r = s(t);
                            e(this.state, {
                                clientX: r.x,
                                clientY: r.y,
                                axis: "",
                                action: ""
                            }), (n.detectScroll || n.detectScrollOnStart) && e(this.state, this.getScrollInfo()), n.stopPropagation && t.stopPropagation(), this.isTouching = !0
                        }
                    },
                    handleTouchMove: function(t) {
                        if (this.isTouching) {
                            var n = s(t),
                                r = this.options,
                                i = this.state,
                                o = n.x,
                                a = n.y,
                                c = o - i.clientX,
                                u = a - i.clientY,
                                f = i.translateX,
                                d = i.translateY,
                                h = i.axis,
                                v = i.action;
                            h || (h = Math.abs(u) >= Math.abs(c) ? "y" : "x"), v || ("y" === h ? u > 0 ? v = "pullDown" : u < 0 && (v = "pullUp") : "x" === h && (c > 0 ? v = "pullRight" : c < 0 && (v = "pullLeft")));
                            var g = this.isActiveAction(v);
                            g && r.detectScroll && !i[m[v]] && (e(i, this.getScrollInfo()), i[m[v]] && (c = 0, u = 0));
                            var b = g && i[m[v]];
                            b && (f += l(c, r.damping), d += l(u, r.damping)), e(i, {
                                clientX: o,
                                clientY: a,
                                translateX: f,
                                translateY: d,
                                action: v,
                                axis: h
                            }), b && (r.drag || ("y" === h ? f = 0 : "x" === h && (d = 0)), this.emit(p[v], {
                                translateX: f,
                                translateY: d
                            }), this.isPreventDefault ? this.isPreventDefault = !1 : (r.wait && (this.isWaiting = !0), t.preventDefault(), this.setTranslate(f, d)))
                        }
                    },
                    handleTouchEnd: function() {
                        if (this.isTouching) {
                            this.isTouching = !1;
                            var e = this.state,
                                t = e.action;
                            this.isActiveAction(t) && e[m[t]] && (this.emit(p[t] + "End", {
                                translateX: e.translateX,
                                translateY: e.translateY
                            }), this.isPreventDefault ? this.isPreventDefault = !1 : this.animateToOrigin())
                        }
                    }
                }), x
            }()
        },
        Q4oW: (e, t, n) => {
            var r = n("zKkv"),
                i = n("bz5b")(r);
            e.exports = i
        },
        zKkv: (e, t, n) => {
            var r = n("UdtX"),
                i = n("BlJA");
            e.exports = function(e, t) {
                return e && r(e, t, i)
            }
        },
        bFjY: (e, t, n) => {
            var r = n("Q4oW"),
                i = n("9y2L");
            e.exports = function(e, t) {
                var n = -1,
                    o = i(e) ? Array(e.length) : [];
                return r(e, (function(e, r, i) {
                    o[++n] = t(e, r, i)
                })), o
            }
        },
        eHpp: (e, t, n) => {
            var r = n("H87J"),
                i = n("w2Tz"),
                o = n("S3pA"),
                a = n("bFjY"),
                s = n("4jPf"),
                l = n("SU8Q"),
                c = n("5WP5"),
                u = n("zWgn"),
                f = n("wxYD");
            e.exports = function(e, t, n) {
                t = t.length ? r(t, (function(e) {
                    return f(e) ? function(t) {
                        return i(t, 1 === e.length ? e[0] : e)
                    } : e
                })) : [u];
                var d = -1;
                t = r(t, l(o));
                var p = a(e, (function(e, n, i) {
                    return {
                        criteria: r(t, (function(t) {
                            return t(e)
                        })),
                        index: ++d,
                        value: e
                    }
                }));
                return s(p, (function(e, t) {
                    return c(e, t, n)
                }))
            }
        },
        "4jPf": e => {
            e.exports = function(e, t) {
                var n = e.length;
                for (e.sort(t); n--;) e[n] = e[n].value;
                return e
            }
        },
        "dnX/": (e, t, n) => {
            var r = n("a88S");
            e.exports = function(e, t) {
                if (e !== t) {
                    var n = void 0 !== e,
                        i = null === e,
                        o = e === e,
                        a = r(e),
                        s = void 0 !== t,
                        l = null === t,
                        c = t === t,
                        u = r(t);
                    if (!l && !u && !a && e > t || a && s && c && !l && !u || i && s && c || !n && c || !o) return 1;
                    if (!i && !a && !u && e < t || u && n && o && !i && !a || l && n && o || !s && o || !c) return -1
                }
                return 0
            }
        },
        "5WP5": (e, t, n) => {
            var r = n("dnX/");
            e.exports = function(e, t, n) {
                for (var i = -1, o = e.criteria, a = t.criteria, s = o.length, l = n.length; ++i < s;) {
                    var c = r(o[i], a[i]);
                    if (c) return i >= l ? c : c * ("desc" == n[i] ? -1 : 1)
                }
                return e.index - t.index
            }
        },
        bz5b: (e, t, n) => {
            var r = n("9y2L");
            e.exports = function(e, t) {
                return function(n, i) {
                    if (null == n) return n;
                    if (!r(n)) return e(n, i);
                    for (var o = n.length, a = t ? o : -1, s = Object(n);
                        (t ? a-- : ++a < o) && !1 !== i(s[a], a, s););
                    return n
                }
            }
        },
        u6DZ: (e, t, n) => {
            var r = n("YpBQ"),
                i = n("eHpp"),
                o = n("R3TX"),
                a = n("R5u7"),
                s = o((function(e, t) {
                    if (null == e) return [];
                    var n = t.length;
                    return n > 1 && a(e, t[0], t[1]) ? t = [] : n > 2 && a(t[0], t[1], t[2]) && (t = [t[0]]), i(e, r(t, 1), [])
                }));
            e.exports = s
        },
        VNw5: () => {},
        F0GY: e => {
            var t = "undefined" !== typeof Element,
                n = "function" === typeof Map,
                r = "function" === typeof Set,
                i = "function" === typeof ArrayBuffer && !!ArrayBuffer.isView;

            function o(e, a) {
                if (e === a) return !0;
                if (e && a && "object" == typeof e && "object" == typeof a) {
                    if (e.constructor !== a.constructor) return !1;
                    var s, l, c, u;
                    if (Array.isArray(e)) {
                        if ((s = e.length) != a.length) return !1;
                        for (l = s; 0 !== l--;)
                            if (!o(e[l], a[l])) return !1;
                        return !0
                    }
                    if (n && e instanceof Map && a instanceof Map) {
                        if (e.size !== a.size) return !1;
                        for (u = e.entries(); !(l = u.next()).done;)
                            if (!a.has(l.value[0])) return !1;
                        for (u = e.entries(); !(l = u.next()).done;)
                            if (!o(l.value[1], a.get(l.value[0]))) return !1;
                        return !0
                    }
                    if (r && e instanceof Set && a instanceof Set) {
                        if (e.size !== a.size) return !1;
                        for (u = e.entries(); !(l = u.next()).done;)
                            if (!a.has(l.value[0])) return !1;
                        return !0
                    }
                    if (i && ArrayBuffer.isView(e) && ArrayBuffer.isView(a)) {
                        if ((s = e.length) != a.length) return !1;
                        for (l = s; 0 !== l--;)
                            if (e[l] !== a[l]) return !1;
                        return !0
                    }
                    if (e.constructor === RegExp) return e.source === a.source && e.flags === a.flags;
                    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === a.valueOf();
                    if (e.toString !== Object.prototype.toString) return e.toString() === a.toString();
                    if ((s = (c = Object.keys(e)).length) !== Object.keys(a).length) return !1;
                    for (l = s; 0 !== l--;)
                        if (!Object.prototype.hasOwnProperty.call(a, c[l])) return !1;
                    if (t && e instanceof Element) return !1;
                    for (l = s; 0 !== l--;)
                        if (("_owner" !== c[l] && "__v" !== c[l] && "__o" !== c[l] || !e.$$typeof) && !o(e[c[l]], a[c[l]])) return !1;
                    return !0
                }
                return e !== e && a !== a
            }
            e.exports = function(e, t) {
                try {
                    return o(e, t)
                } catch (n) {
                    if ((n.message || "").match(/stack|recursion/i)) return console.warn("react-fast-compare cannot handle circular refs"), !1;
                    throw n
                }
            }
        },
        Vqct: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => l
            });
            var r = n("DPeK"),
                i = n("aiFg"),
                o = n("DTvD"),
                a = o.useLayoutEffect;

            function s() {
                return !0
            }
            const l = function(e) {
                var t = (0, o.useRef)(null),
                    n = (0, o.useReducer)(s, !1),
                    l = n[0],
                    c = n[1],
                    u = e.noWrapper,
                    f = e.ssrOnly,
                    d = e.whenIdle,
                    p = e.whenVisible,
                    m = e.promise,
                    h = e.on,
                    v = void 0 === h ? [] : h,
                    g = e.children,
                    b = e.didHydrate,
                    x = (0, i.A)(e, ["noWrapper", "ssrOnly", "whenIdle", "whenVisible", "promise", "on", "children", "didHydrate"]);
                a((function() {
                    t.current.hasChildNodes() || c()
                }), []), (0, o.useEffect)((function() {
                    l && b && b()
                }), [l]), (0, o.useEffect)((function() {
                    if (!f && !l) {
                        var e = t.current,
                            n = [];
                        if (m && m.then(c, c), p) {
                            var r = u ? e : e.firstElementChild;
                            if (!r || "undefined" === typeof IntersectionObserver) return c();
                            var i = new IntersectionObserver((function(e) {
                                e.forEach((function(e) {
                                    (e.isIntersecting || e.intersectionRatio > 0) && c()
                                }))
                            }), "object" === typeof p ? p : {
                                rootMargin: "250px"
                            });
                            i.observe(r), n.push((function() {
                                i.disconnect()
                            }))
                        }
                        if (d)
                            if ("undefined" !== typeof requestIdleCallback) {
                                var o = requestIdleCallback(c, {
                                    timeout: 500
                                });
                                n.push((function() {
                                    cancelIdleCallback(o)
                                }))
                            } else {
                                var a = setTimeout(c, 2e3);
                                n.push((function() {
                                    clearTimeout(a)
                                }))
                            }
                        return [].concat(v).forEach((function(t) {
                                e.addEventListener(t, c, {
                                    once: !0,
                                    passive: !0
                                }), n.push((function() {
                                    e.removeEventListener(t, c, {})
                                }))
                            })),
                            function() {
                                n.forEach((function(e) {
                                    e()
                                }))
                            }
                    }
                }), [l, v, f, d, p, b, m, u]);
                var y = "string" === typeof u ? u : "div";
                return l ? u ? g : (0, o.createElement)(y, (0, r.A)({
                    ref: t,
                    style: {
                        display: "contents"
                    }
                }, x), g) : (0, o.createElement)(y, (0, r.A)({}, x, {
                    ref: t,
                    suppressHydrationWarning: !0,
                    dangerouslySetInnerHTML: {
                        __html: ""
                    }
                }))
            }
        },
        uxFI: (e, t, n) => {
            "use strict";
            n.d(t, {
                E: () => Ee
            });
            var r = n("DTvD");

            function i(e) {
                if (null == e) return window;
                if ("[object Window]" !== e.toString()) {
                    var t = e.ownerDocument;
                    return t && t.defaultView || window
                }
                return e
            }

            function o(e) {
                return e instanceof i(e).Element || e instanceof Element
            }

            function a(e) {
                return e instanceof i(e).HTMLElement || e instanceof HTMLElement
            }

            function s(e) {
                return "undefined" !== typeof ShadowRoot && (e instanceof i(e).ShadowRoot || e instanceof ShadowRoot)
            }
            var l = Math.round;

            function c(e, t) {
                void 0 === t && (t = !1);
                var n = e.getBoundingClientRect(),
                    r = 1,
                    i = 1;
                return a(e) && t && (r = n.width / e.offsetWidth || 1, i = n.height / e.offsetHeight || 1), {
                    width: l(n.width / r),
                    height: l(n.height / i),
                    top: l(n.top / i),
                    right: l(n.right / r),
                    bottom: l(n.bottom / i),
                    left: l(n.left / r),
                    x: l(n.left / r),
                    y: l(n.top / i)
                }
            }

            function u(e) {
                var t = i(e);
                return {
                    scrollLeft: t.pageXOffset,
                    scrollTop: t.pageYOffset
                }
            }

            function f(e) {
                return e ? (e.nodeName || "").toLowerCase() : null
            }

            function d(e) {
                return ((o(e) ? e.ownerDocument : e.document) || window.document).documentElement
            }

            function p(e) {
                return c(d(e)).left + u(e).scrollLeft
            }

            function m(e) {
                return i(e).getComputedStyle(e)
            }

            function h(e) {
                var t = m(e),
                    n = t.overflow,
                    r = t.overflowX,
                    i = t.overflowY;
                return /auto|scroll|overlay|hidden/.test(n + i + r)
            }

            function v(e, t, n) {
                void 0 === n && (n = !1);
                var r = a(t),
                    o = a(t) && function(e) {
                        var t = e.getBoundingClientRect(),
                            n = t.width / e.offsetWidth || 1,
                            r = t.height / e.offsetHeight || 1;
                        return 1 !== n || 1 !== r
                    }(t),
                    s = d(t),
                    l = c(e, o),
                    m = {
                        scrollLeft: 0,
                        scrollTop: 0
                    },
                    v = {
                        x: 0,
                        y: 0
                    };
                return (r || !r && !n) && (("body" !== f(t) || h(s)) && (m = function(e) {
                    return e !== i(e) && a(e) ? {
                        scrollLeft: (t = e).scrollLeft,
                        scrollTop: t.scrollTop
                    } : u(e);
                    var t
                }(t)), a(t) ? ((v = c(t, !0)).x += t.clientLeft, v.y += t.clientTop) : s && (v.x = p(s))), {
                    x: l.left + m.scrollLeft - v.x,
                    y: l.top + m.scrollTop - v.y,
                    width: l.width,
                    height: l.height
                }
            }

            function g(e) {
                var t = c(e),
                    n = e.offsetWidth,
                    r = e.offsetHeight;
                return Math.abs(t.width - n) <= 1 && (n = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
                    x: e.offsetLeft,
                    y: e.offsetTop,
                    width: n,
                    height: r
                }
            }

            function b(e) {
                return "html" === f(e) ? e : e.assignedSlot || e.parentNode || (s(e) ? e.host : null) || d(e)
            }

            function x(e) {
                return ["html", "body", "#document"].indexOf(f(e)) >= 0 ? e.ownerDocument.body : a(e) && h(e) ? e : x(b(e))
            }

            function y(e, t) {
                var n;
                void 0 === t && (t = []);
                var r = x(e),
                    o = r === (null == (n = e.ownerDocument) ? void 0 : n.body),
                    a = i(r),
                    s = o ? [a].concat(a.visualViewport || [], h(r) ? r : []) : r,
                    l = t.concat(s);
                return o ? l : l.concat(y(b(s)))
            }

            function w(e) {
                return ["table", "td", "th"].indexOf(f(e)) >= 0
            }

            function A(e) {
                return a(e) && "fixed" !== m(e).position ? e.offsetParent : null
            }

            function E(e) {
                for (var t = i(e), n = A(e); n && w(n) && "static" === m(n).position;) n = A(n);
                return n && ("html" === f(n) || "body" === f(n) && "static" === m(n).position) ? t : n || function(e) {
                    var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
                    if (-1 !== navigator.userAgent.indexOf("Trident") && a(e) && "fixed" === m(e).position) return null;
                    for (var n = b(e); a(n) && ["html", "body"].indexOf(f(n)) < 0;) {
                        var r = m(n);
                        if ("none" !== r.transform || "none" !== r.perspective || "paint" === r.contain || -1 !== ["transform", "perspective"].indexOf(r.willChange) || t && "filter" === r.willChange || t && r.filter && "none" !== r.filter) return n;
                        n = n.parentNode
                    }
                    return null
                }(e) || t
            }
            var S = "top",
                N = "bottom",
                j = "right",
                k = "left",
                T = "auto",
                C = [S, N, j, k],
                O = "start",
                P = "end",
                D = "viewport",
                M = "popper",
                _ = C.reduce((function(e, t) {
                    return e.concat([t + "-" + O, t + "-" + P])
                }), []),
                I = [].concat(C, [T]).reduce((function(e, t) {
                    return e.concat([t, t + "-" + O, t + "-" + P])
                }), []),
                L = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

            function R(e) {
                var t = new Map,
                    n = new Set,
                    r = [];

                function i(e) {
                    n.add(e.name), [].concat(e.requires || [], e.requiresIfExists || []).forEach((function(e) {
                        if (!n.has(e)) {
                            var r = t.get(e);
                            r && i(r)
                        }
                    })), r.push(e)
                }
                return e.forEach((function(e) {
                    t.set(e.name, e)
                })), e.forEach((function(e) {
                    n.has(e.name) || i(e)
                })), r
            }

            function F(e) {
                var t;
                return function() {
                    return t || (t = new Promise((function(n) {
                        Promise.resolve().then((function() {
                            t = void 0, n(e())
                        }))
                    }))), t
                }
            }
            var B = {
                placement: "bottom",
                modifiers: [],
                strategy: "absolute"
            };

            function z() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                return !t.some((function(e) {
                    return !(e && "function" === typeof e.getBoundingClientRect)
                }))
            }

            function V(e) {
                void 0 === e && (e = {});
                var t = e,
                    n = t.defaultModifiers,
                    r = void 0 === n ? [] : n,
                    i = t.defaultOptions,
                    a = void 0 === i ? B : i;
                return function(e, t, n) {
                    void 0 === n && (n = a);
                    var i = {
                            placement: "bottom",
                            orderedModifiers: [],
                            options: Object.assign({}, B, a),
                            modifiersData: {},
                            elements: {
                                reference: e,
                                popper: t
                            },
                            attributes: {},
                            styles: {}
                        },
                        s = [],
                        l = !1,
                        c = {
                            state: i,
                            setOptions: function(n) {
                                u(), i.options = Object.assign({}, a, i.options, n), i.scrollParents = {
                                    reference: o(e) ? y(e) : e.contextElement ? y(e.contextElement) : [],
                                    popper: y(t)
                                };
                                var l = function(e) {
                                    var t = R(e);
                                    return L.reduce((function(e, n) {
                                        return e.concat(t.filter((function(e) {
                                            return e.phase === n
                                        })))
                                    }), [])
                                }(function(e) {
                                    var t = e.reduce((function(e, t) {
                                        var n = e[t.name];
                                        return e[t.name] = n ? Object.assign({}, n, t, {
                                            options: Object.assign({}, n.options, t.options),
                                            data: Object.assign({}, n.data, t.data)
                                        }) : t, e
                                    }), {});
                                    return Object.keys(t).map((function(e) {
                                        return t[e]
                                    }))
                                }([].concat(r, i.options.modifiers)));
                                return i.orderedModifiers = l.filter((function(e) {
                                    return e.enabled
                                })), i.orderedModifiers.forEach((function(e) {
                                    var t = e.name,
                                        n = e.options,
                                        r = void 0 === n ? {} : n,
                                        o = e.effect;
                                    if ("function" === typeof o) {
                                        var a = o({
                                                state: i,
                                                name: t,
                                                instance: c,
                                                options: r
                                            }),
                                            l = function() {};
                                        s.push(a || l)
                                    }
                                })), c.update()
                            },
                            forceUpdate: function() {
                                if (!l) {
                                    var e = i.elements,
                                        t = e.reference,
                                        n = e.popper;
                                    if (z(t, n)) {
                                        i.rects = {
                                            reference: v(t, E(n), "fixed" === i.options.strategy),
                                            popper: g(n)
                                        }, i.reset = !1, i.placement = i.options.placement, i.orderedModifiers.forEach((function(e) {
                                            return i.modifiersData[e.name] = Object.assign({}, e.data)
                                        }));
                                        for (var r = 0; r < i.orderedModifiers.length; r++)
                                            if (!0 !== i.reset) {
                                                var o = i.orderedModifiers[r],
                                                    a = o.fn,
                                                    s = o.options,
                                                    u = void 0 === s ? {} : s,
                                                    f = o.name;
                                                "function" === typeof a && (i = a({
                                                    state: i,
                                                    options: u,
                                                    name: f,
                                                    instance: c
                                                }) || i)
                                            } else i.reset = !1, r = -1
                                    }
                                }
                            },
                            update: F((function() {
                                return new Promise((function(e) {
                                    c.forceUpdate(), e(i)
                                }))
                            })),
                            destroy: function() {
                                u(), l = !0
                            }
                        };
                    if (!z(e, t)) return c;

                    function u() {
                        s.forEach((function(e) {
                            return e()
                        })), s = []
                    }
                    return c.setOptions(n).then((function(e) {
                        !l && n.onFirstUpdate && n.onFirstUpdate(e)
                    })), c
                }
            }
            var H = {
                passive: !0
            };
            const W = {
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(e) {
                    var t = e.state,
                        n = e.instance,
                        r = e.options,
                        o = r.scroll,
                        a = void 0 === o || o,
                        s = r.resize,
                        l = void 0 === s || s,
                        c = i(t.elements.popper),
                        u = [].concat(t.scrollParents.reference, t.scrollParents.popper);
                    return a && u.forEach((function(e) {
                            e.addEventListener("scroll", n.update, H)
                        })), l && c.addEventListener("resize", n.update, H),
                        function() {
                            a && u.forEach((function(e) {
                                e.removeEventListener("scroll", n.update, H)
                            })), l && c.removeEventListener("resize", n.update, H)
                        }
                },
                data: {}
            };

            function q(e) {
                return e.split("-")[0]
            }

            function U(e) {
                return e.split("-")[1]
            }

            function G(e) {
                return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
            }

            function K(e) {
                var t, n = e.reference,
                    r = e.element,
                    i = e.placement,
                    o = i ? q(i) : null,
                    a = i ? U(i) : null,
                    s = n.x + n.width / 2 - r.width / 2,
                    l = n.y + n.height / 2 - r.height / 2;
                switch (o) {
                    case S:
                        t = {
                            x: s,
                            y: n.y - r.height
                        };
                        break;
                    case N:
                        t = {
                            x: s,
                            y: n.y + n.height
                        };
                        break;
                    case j:
                        t = {
                            x: n.x + n.width,
                            y: l
                        };
                        break;
                    case k:
                        t = {
                            x: n.x - r.width,
                            y: l
                        };
                        break;
                    default:
                        t = {
                            x: n.x,
                            y: n.y
                        }
                }
                var c = o ? G(o) : null;
                if (null != c) {
                    var u = "y" === c ? "height" : "width";
                    switch (a) {
                        case O:
                            t[c] = t[c] - (n[u] / 2 - r[u] / 2);
                            break;
                        case P:
                            t[c] = t[c] + (n[u] / 2 - r[u] / 2)
                    }
                }
                return t
            }
            const $ = {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(e) {
                    var t = e.state,
                        n = e.name;
                    t.modifiersData[n] = K({
                        reference: t.rects.reference,
                        element: t.rects.popper,
                        strategy: "absolute",
                        placement: t.placement
                    })
                },
                data: {}
            };
            var Y = Math.max,
                Z = Math.min,
                Q = Math.round,
                X = {
                    top: "auto",
                    right: "auto",
                    bottom: "auto",
                    left: "auto"
                };

            function J(e) {
                var t, n = e.popper,
                    r = e.popperRect,
                    o = e.placement,
                    a = e.offsets,
                    s = e.position,
                    l = e.gpuAcceleration,
                    c = e.adaptive,
                    u = e.roundOffsets,
                    f = !0 === u ? function(e) {
                        var t = e.x,
                            n = e.y,
                            r = window.devicePixelRatio || 1;
                        return {
                            x: Q(Q(t * r) / r) || 0,
                            y: Q(Q(n * r) / r) || 0
                        }
                    }(a) : "function" === typeof u ? u(a) : a,
                    p = f.x,
                    h = void 0 === p ? 0 : p,
                    v = f.y,
                    g = void 0 === v ? 0 : v,
                    b = a.hasOwnProperty("x"),
                    x = a.hasOwnProperty("y"),
                    y = k,
                    w = S,
                    A = window;
                if (c) {
                    var T = E(n),
                        C = "clientHeight",
                        O = "clientWidth";
                    T === i(n) && "static" !== m(T = d(n)).position && (C = "scrollHeight", O = "scrollWidth"), o === S && (w = N, g -= T[C] - r.height, g *= l ? 1 : -1), o === k && (y = j, h -= T[O] - r.width, h *= l ? 1 : -1)
                }
                var P, D = Object.assign({
                    position: s
                }, c && X);
                return l ? Object.assign({}, D, ((P = {})[w] = x ? "0" : "", P[y] = b ? "0" : "", P.transform = (A.devicePixelRatio || 1) < 2 ? "translate(" + h + "px, " + g + "px)" : "translate3d(" + h + "px, " + g + "px, 0)", P)) : Object.assign({}, D, ((t = {})[w] = x ? g + "px" : "", t[y] = b ? h + "px" : "", t.transform = "", t))
            }
            const ee = {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        i = n.offset,
                        o = void 0 === i ? [0, 0] : i,
                        a = I.reduce((function(e, n) {
                            return e[n] = function(e, t, n) {
                                var r = q(e),
                                    i = [k, S].indexOf(r) >= 0 ? -1 : 1,
                                    o = "function" === typeof n ? n(Object.assign({}, t, {
                                        placement: e
                                    })) : n,
                                    a = o[0],
                                    s = o[1];
                                return a = a || 0, s = (s || 0) * i, [k, j].indexOf(r) >= 0 ? {
                                    x: s,
                                    y: a
                                } : {
                                    x: a,
                                    y: s
                                }
                            }(n, t.rects, o), e
                        }), {}),
                        s = a[t.placement],
                        l = s.x,
                        c = s.y;
                    null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += c), t.modifiersData[r] = a
                }
            };
            var te = {
                left: "right",
                right: "left",
                bottom: "top",
                top: "bottom"
            };

            function ne(e) {
                return e.replace(/left|right|bottom|top/g, (function(e) {
                    return te[e]
                }))
            }
            var re = {
                start: "end",
                end: "start"
            };

            function ie(e) {
                return e.replace(/start|end/g, (function(e) {
                    return re[e]
                }))
            }

            function oe(e, t) {
                var n = t.getRootNode && t.getRootNode();
                if (e.contains(t)) return !0;
                if (n && s(n)) {
                    var r = t;
                    do {
                        if (r && e.isSameNode(r)) return !0;
                        r = r.parentNode || r.host
                    } while (r)
                }
                return !1
            }

            function ae(e) {
                return Object.assign({}, e, {
                    left: e.x,
                    top: e.y,
                    right: e.x + e.width,
                    bottom: e.y + e.height
                })
            }

            function se(e, t) {
                return t === D ? ae(function(e) {
                    var t = i(e),
                        n = d(e),
                        r = t.visualViewport,
                        o = n.clientWidth,
                        a = n.clientHeight,
                        s = 0,
                        l = 0;
                    return r && (o = r.width, a = r.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (s = r.offsetLeft, l = r.offsetTop)), {
                        width: o,
                        height: a,
                        x: s + p(e),
                        y: l
                    }
                }(e)) : a(t) ? function(e) {
                    var t = c(e);
                    return t.top = t.top + e.clientTop, t.left = t.left + e.clientLeft, t.bottom = t.top + e.clientHeight, t.right = t.left + e.clientWidth, t.width = e.clientWidth, t.height = e.clientHeight, t.x = t.left, t.y = t.top, t
                }(t) : ae(function(e) {
                    var t, n = d(e),
                        r = u(e),
                        i = null == (t = e.ownerDocument) ? void 0 : t.body,
                        o = Y(n.scrollWidth, n.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0),
                        a = Y(n.scrollHeight, n.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0),
                        s = -r.scrollLeft + p(e),
                        l = -r.scrollTop;
                    return "rtl" === m(i || n).direction && (s += Y(n.clientWidth, i ? i.clientWidth : 0) - o), {
                        width: o,
                        height: a,
                        x: s,
                        y: l
                    }
                }(d(e)))
            }

            function le(e, t, n) {
                var r = "clippingParents" === t ? function(e) {
                        var t = y(b(e)),
                            n = ["absolute", "fixed"].indexOf(m(e).position) >= 0 && a(e) ? E(e) : e;
                        return o(n) ? t.filter((function(e) {
                            return o(e) && oe(e, n) && "body" !== f(e)
                        })) : []
                    }(e) : [].concat(t),
                    i = [].concat(r, [n]),
                    s = i[0],
                    l = i.reduce((function(t, n) {
                        var r = se(e, n);
                        return t.top = Y(r.top, t.top), t.right = Z(r.right, t.right), t.bottom = Z(r.bottom, t.bottom), t.left = Y(r.left, t.left), t
                    }), se(e, s));
                return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l
            }

            function ce(e) {
                return Object.assign({}, {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0
                }, e)
            }

            function ue(e, t) {
                return t.reduce((function(t, n) {
                    return t[n] = e, t
                }), {})
            }

            function fe(e, t) {
                void 0 === t && (t = {});
                var n = t,
                    r = n.placement,
                    i = void 0 === r ? e.placement : r,
                    a = n.boundary,
                    s = void 0 === a ? "clippingParents" : a,
                    l = n.rootBoundary,
                    u = void 0 === l ? D : l,
                    f = n.elementContext,
                    p = void 0 === f ? M : f,
                    m = n.altBoundary,
                    h = void 0 !== m && m,
                    v = n.padding,
                    g = void 0 === v ? 0 : v,
                    b = ce("number" !== typeof g ? g : ue(g, C)),
                    x = p === M ? "reference" : M,
                    y = e.elements.reference,
                    w = e.rects.popper,
                    A = e.elements[h ? x : p],
                    E = le(o(A) ? A : A.contextElement || d(e.elements.popper), s, u),
                    k = c(y),
                    T = K({
                        reference: k,
                        element: w,
                        strategy: "absolute",
                        placement: i
                    }),
                    O = ae(Object.assign({}, w, T)),
                    P = p === M ? O : k,
                    _ = {
                        top: E.top - P.top + b.top,
                        bottom: P.bottom - E.bottom + b.bottom,
                        left: E.left - P.left + b.left,
                        right: P.right - E.right + b.right
                    },
                    I = e.modifiersData.offset;
                if (p === M && I) {
                    var L = I[i];
                    Object.keys(_).forEach((function(e) {
                        var t = [j, N].indexOf(e) >= 0 ? 1 : -1,
                            n = [S, N].indexOf(e) >= 0 ? "y" : "x";
                        _[e] += L[n] * t
                    }))
                }
                return _
            }

            function de(e, t, n) {
                return Y(e, Z(t, n))
            }
            const pe = {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t = e.state,
                        n = e.options,
                        r = e.name,
                        i = n.mainAxis,
                        o = void 0 === i || i,
                        a = n.altAxis,
                        s = void 0 !== a && a,
                        l = n.boundary,
                        c = n.rootBoundary,
                        u = n.altBoundary,
                        f = n.padding,
                        d = n.tether,
                        p = void 0 === d || d,
                        m = n.tetherOffset,
                        h = void 0 === m ? 0 : m,
                        v = fe(t, {
                            boundary: l,
                            rootBoundary: c,
                            padding: f,
                            altBoundary: u
                        }),
                        b = q(t.placement),
                        x = U(t.placement),
                        y = !x,
                        w = G(b),
                        A = "x" === w ? "y" : "x",
                        T = t.modifiersData.popperOffsets,
                        C = t.rects.reference,
                        P = t.rects.popper,
                        D = "function" === typeof h ? h(Object.assign({}, t.rects, {
                            placement: t.placement
                        })) : h,
                        M = {
                            x: 0,
                            y: 0
                        };
                    if (T) {
                        if (o || s) {
                            var _ = "y" === w ? S : k,
                                I = "y" === w ? N : j,
                                L = "y" === w ? "height" : "width",
                                R = T[w],
                                F = T[w] + v[_],
                                B = T[w] - v[I],
                                z = p ? -P[L] / 2 : 0,
                                V = x === O ? C[L] : P[L],
                                H = x === O ? -P[L] : -C[L],
                                W = t.elements.arrow,
                                K = p && W ? g(W) : {
                                    width: 0,
                                    height: 0
                                },
                                $ = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                Q = $[_],
                                X = $[I],
                                J = de(0, C[L], K[L]),
                                ee = y ? C[L] / 2 - z - J - Q - D : V - J - Q - D,
                                te = y ? -C[L] / 2 + z + J + X + D : H + J + X + D,
                                ne = t.elements.arrow && E(t.elements.arrow),
                                re = ne ? "y" === w ? ne.clientTop || 0 : ne.clientLeft || 0 : 0,
                                ie = t.modifiersData.offset ? t.modifiersData.offset[t.placement][w] : 0,
                                oe = T[w] + ee - ie - re,
                                ae = T[w] + te - ie;
                            if (o) {
                                var se = de(p ? Z(F, oe) : F, R, p ? Y(B, ae) : B);
                                T[w] = se, M[w] = se - R
                            }
                            if (s) {
                                var le = "x" === w ? S : k,
                                    ce = "x" === w ? N : j,
                                    ue = T[A],
                                    pe = ue + v[le],
                                    me = ue - v[ce],
                                    he = de(p ? Z(pe, oe) : pe, ue, p ? Y(me, ae) : me);
                                T[A] = he, M[A] = he - ue
                            }
                        }
                        t.modifiersData[r] = M
                    }
                },
                requiresIfExists: ["offset"]
            };
            const me = {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(e) {
                    var t, n = e.state,
                        r = e.name,
                        i = e.options,
                        o = n.elements.arrow,
                        a = n.modifiersData.popperOffsets,
                        s = q(n.placement),
                        l = G(s),
                        c = [k, j].indexOf(s) >= 0 ? "height" : "width";
                    if (o && a) {
                        var u = function(e, t) {
                                return ce("number" !== typeof(e = "function" === typeof e ? e(Object.assign({}, t.rects, {
                                    placement: t.placement
                                })) : e) ? e : ue(e, C))
                            }(i.padding, n),
                            f = g(o),
                            d = "y" === l ? S : k,
                            p = "y" === l ? N : j,
                            m = n.rects.reference[c] + n.rects.reference[l] - a[l] - n.rects.popper[c],
                            h = a[l] - n.rects.reference[l],
                            v = E(o),
                            b = v ? "y" === l ? v.clientHeight || 0 : v.clientWidth || 0 : 0,
                            x = m / 2 - h / 2,
                            y = u[d],
                            w = b - f[c] - u[p],
                            A = b / 2 - f[c] / 2 + x,
                            T = de(y, A, w),
                            O = l;
                        n.modifiersData[r] = ((t = {})[O] = T, t.centerOffset = T - A, t)
                    }
                },
                effect: function(e) {
                    var t = e.state,
                        n = e.options.element,
                        r = void 0 === n ? "[data-popper-arrow]" : n;
                    null != r && ("string" !== typeof r || (r = t.elements.popper.querySelector(r))) && oe(t.elements.popper, r) && (t.elements.arrow = r)
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            };

            function he(e, t, n) {
                return void 0 === n && (n = {
                    x: 0,
                    y: 0
                }), {
                    top: e.top - t.height - n.y,
                    right: e.right - t.width + n.x,
                    bottom: e.bottom - t.height + n.y,
                    left: e.left - t.width - n.x
                }
            }

            function ve(e) {
                return [S, j, N, k].some((function(t) {
                    return e[t] >= 0
                }))
            }
            var ge = V({
                    defaultModifiers: [W, $, {
                        name: "computeStyles",
                        enabled: !0,
                        phase: "beforeWrite",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = n.gpuAcceleration,
                                i = void 0 === r || r,
                                o = n.adaptive,
                                a = void 0 === o || o,
                                s = n.roundOffsets,
                                l = void 0 === s || s,
                                c = {
                                    placement: q(t.placement),
                                    popper: t.elements.popper,
                                    popperRect: t.rects.popper,
                                    gpuAcceleration: i
                                };
                            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, J(Object.assign({}, c, {
                                offsets: t.modifiersData.popperOffsets,
                                position: t.options.strategy,
                                adaptive: a,
                                roundOffsets: l
                            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, J(Object.assign({}, c, {
                                offsets: t.modifiersData.arrow,
                                position: "absolute",
                                adaptive: !1,
                                roundOffsets: l
                            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-placement": t.placement
                            })
                        },
                        data: {}
                    }, {
                        name: "applyStyles",
                        enabled: !0,
                        phase: "write",
                        fn: function(e) {
                            var t = e.state;
                            Object.keys(t.elements).forEach((function(e) {
                                var n = t.styles[e] || {},
                                    r = t.attributes[e] || {},
                                    i = t.elements[e];
                                a(i) && f(i) && (Object.assign(i.style, n), Object.keys(r).forEach((function(e) {
                                    var t = r[e];
                                    !1 === t ? i.removeAttribute(e) : i.setAttribute(e, !0 === t ? "" : t)
                                })))
                            }))
                        },
                        effect: function(e) {
                            var t = e.state,
                                n = {
                                    popper: {
                                        position: t.options.strategy,
                                        left: "0",
                                        top: "0",
                                        margin: "0"
                                    },
                                    arrow: {
                                        position: "absolute"
                                    },
                                    reference: {}
                                };
                            return Object.assign(t.elements.popper.style, n.popper), t.styles = n, t.elements.arrow && Object.assign(t.elements.arrow.style, n.arrow),
                                function() {
                                    Object.keys(t.elements).forEach((function(e) {
                                        var r = t.elements[e],
                                            i = t.attributes[e] || {},
                                            o = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : n[e]).reduce((function(e, t) {
                                                return e[t] = "", e
                                            }), {});
                                        a(r) && f(r) && (Object.assign(r.style, o), Object.keys(i).forEach((function(e) {
                                            r.removeAttribute(e)
                                        })))
                                    }))
                                }
                        },
                        requires: ["computeStyles"]
                    }, ee, {
                        name: "flip",
                        enabled: !0,
                        phase: "main",
                        fn: function(e) {
                            var t = e.state,
                                n = e.options,
                                r = e.name;
                            if (!t.modifiersData[r]._skip) {
                                for (var i = n.mainAxis, o = void 0 === i || i, a = n.altAxis, s = void 0 === a || a, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, p = n.flipVariations, m = void 0 === p || p, h = n.allowedAutoPlacements, v = t.options.placement, g = q(v), b = l || (g === v || !m ? [ne(v)] : function(e) {
                                        if (q(e) === T) return [];
                                        var t = ne(e);
                                        return [ie(e), t, ie(t)]
                                    }(v)), x = [v].concat(b).reduce((function(e, n) {
                                        return e.concat(q(n) === T ? function(e, t) {
                                            void 0 === t && (t = {});
                                            var n = t,
                                                r = n.placement,
                                                i = n.boundary,
                                                o = n.rootBoundary,
                                                a = n.padding,
                                                s = n.flipVariations,
                                                l = n.allowedAutoPlacements,
                                                c = void 0 === l ? I : l,
                                                u = U(r),
                                                f = u ? s ? _ : _.filter((function(e) {
                                                    return U(e) === u
                                                })) : C,
                                                d = f.filter((function(e) {
                                                    return c.indexOf(e) >= 0
                                                }));
                                            0 === d.length && (d = f);
                                            var p = d.reduce((function(t, n) {
                                                return t[n] = fe(e, {
                                                    placement: n,
                                                    boundary: i,
                                                    rootBoundary: o,
                                                    padding: a
                                                })[q(n)], t
                                            }), {});
                                            return Object.keys(p).sort((function(e, t) {
                                                return p[e] - p[t]
                                            }))
                                        }(t, {
                                            placement: n,
                                            boundary: u,
                                            rootBoundary: f,
                                            padding: c,
                                            flipVariations: m,
                                            allowedAutoPlacements: h
                                        }) : n)
                                    }), []), y = t.rects.reference, w = t.rects.popper, A = new Map, E = !0, P = x[0], D = 0; D < x.length; D++) {
                                    var M = x[D],
                                        L = q(M),
                                        R = U(M) === O,
                                        F = [S, N].indexOf(L) >= 0,
                                        B = F ? "width" : "height",
                                        z = fe(t, {
                                            placement: M,
                                            boundary: u,
                                            rootBoundary: f,
                                            altBoundary: d,
                                            padding: c
                                        }),
                                        V = F ? R ? j : k : R ? N : S;
                                    y[B] > w[B] && (V = ne(V));
                                    var H = ne(V),
                                        W = [];
                                    if (o && W.push(z[L] <= 0), s && W.push(z[V] <= 0, z[H] <= 0), W.every((function(e) {
                                            return e
                                        }))) {
                                        P = M, E = !1;
                                        break
                                    }
                                    A.set(M, W)
                                }
                                if (E)
                                    for (var G = function(e) {
                                            var t = x.find((function(t) {
                                                var n = A.get(t);
                                                if (n) return n.slice(0, e).every((function(e) {
                                                    return e
                                                }))
                                            }));
                                            if (t) return P = t, "break"
                                        }, K = m ? 3 : 1; K > 0; K--) {
                                        if ("break" === G(K)) break
                                    }
                                t.placement !== P && (t.modifiersData[r]._skip = !0, t.placement = P, t.reset = !0)
                            }
                        },
                        requiresIfExists: ["offset"],
                        data: {
                            _skip: !1
                        }
                    }, pe, me, {
                        name: "hide",
                        enabled: !0,
                        phase: "main",
                        requiresIfExists: ["preventOverflow"],
                        fn: function(e) {
                            var t = e.state,
                                n = e.name,
                                r = t.rects.reference,
                                i = t.rects.popper,
                                o = t.modifiersData.preventOverflow,
                                a = fe(t, {
                                    elementContext: "reference"
                                }),
                                s = fe(t, {
                                    altBoundary: !0
                                }),
                                l = he(a, r),
                                c = he(s, i, o),
                                u = ve(l),
                                f = ve(c);
                            t.modifiersData[n] = {
                                referenceClippingOffsets: l,
                                popperEscapeOffsets: c,
                                isReferenceHidden: u,
                                hasPopperEscaped: f
                            }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                                "data-popper-reference-hidden": u,
                                "data-popper-escaped": f
                            })
                        }
                    }]
                }),
                be = n("F0GY"),
                xe = n.n(be),
                ye = function(e) {
                    return e.reduce((function(e, t) {
                        var n = t[0],
                            r = t[1];
                        return e[n] = r, e
                    }), {})
                },
                we = window.document && window.document.createElement ? r.useLayoutEffect : r.useEffect,
                Ae = [],
                Ee = function(e, t, n) {
                    void 0 === n && (n = {});
                    var i = r.useRef(null),
                        o = {
                            onFirstUpdate: n.onFirstUpdate,
                            placement: n.placement || "bottom",
                            strategy: n.strategy || "absolute",
                            modifiers: n.modifiers || Ae
                        },
                        a = r.useState({
                            styles: {
                                popper: {
                                    position: o.strategy,
                                    left: "0",
                                    top: "0"
                                },
                                arrow: {
                                    position: "absolute"
                                }
                            },
                            attributes: {}
                        }),
                        s = a[0],
                        l = a[1],
                        c = r.useMemo((function() {
                            return {
                                name: "updateState",
                                enabled: !0,
                                phase: "write",
                                fn: function(e) {
                                    var t = e.state,
                                        n = Object.keys(t.elements);
                                    l({
                                        styles: ye(n.map((function(e) {
                                            return [e, t.styles[e] || {}]
                                        }))),
                                        attributes: ye(n.map((function(e) {
                                            return [e, t.attributes[e]]
                                        })))
                                    })
                                },
                                requires: ["computeStyles"]
                            }
                        }), []),
                        u = r.useMemo((function() {
                            var e = {
                                onFirstUpdate: o.onFirstUpdate,
                                placement: o.placement,
                                strategy: o.strategy,
                                modifiers: [].concat(o.modifiers, [c, {
                                    name: "applyStyles",
                                    enabled: !1
                                }])
                            };
                            return xe()(i.current, e) ? i.current || e : (i.current = e, e)
                        }), [o.onFirstUpdate, o.placement, o.strategy, o.modifiers, c]),
                        f = r.useRef();
                    return we((function() {
                        f.current && f.current.setOptions(u)
                    }), [u]), we((function() {
                        if (null != e && null != t) {
                            var r = (n.createPopper || ge)(e, t, u);
                            return f.current = r,
                                function() {
                                    r.destroy(), f.current = null
                                }
                        }
                    }), [e, t, n.createPopper]), {
                        state: f.current ? f.current.state : null,
                        styles: s.styles,
                        attributes: s.attributes,
                        update: f.current ? f.current.update : null,
                        forceUpdate: f.current ? f.current.forceUpdate : null
                    }
                }
        },
        bg8v: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => b
            });
            var r = n("aiFg"),
                i = n("nUjt"),
                o = (n("aWzz"), n("DTvD")),
                a = n.n(o),
                s = n("hTvQ"),
                l = n.n(s);
            const c = !1,
                u = a().createContext(null);
            var f = "unmounted",
                d = "exited",
                p = "entering",
                m = "entered",
                h = "exiting",
                v = function(e) {
                    function t(t, n) {
                        var r;
                        r = e.call(this, t, n) || this;
                        var i, o = n && !n.isMounting ? t.enter : t.appear;
                        return r.appearStatus = null, t.in ? o ? (i = d, r.appearStatus = p) : i = m : i = t.unmountOnExit || t.mountOnEnter ? f : d, r.state = {
                            status: i
                        }, r.nextCallback = null, r
                    }(0, i.A)(t, e), t.getDerivedStateFromProps = function(e, t) {
                        return e.in && t.status === f ? {
                            status: d
                        } : null
                    };
                    var n = t.prototype;
                    return n.componentDidMount = function() {
                        this.updateStatus(!0, this.appearStatus)
                    }, n.componentDidUpdate = function(e) {
                        var t = null;
                        if (e !== this.props) {
                            var n = this.state.status;
                            this.props.in ? n !== p && n !== m && (t = p) : n !== p && n !== m || (t = h)
                        }
                        this.updateStatus(!1, t)
                    }, n.componentWillUnmount = function() {
                        this.cancelNextCallback()
                    }, n.getTimeouts = function() {
                        var e, t, n, r = this.props.timeout;
                        return e = t = n = r, null != r && "number" !== typeof r && (e = r.exit, t = r.enter, n = void 0 !== r.appear ? r.appear : t), {
                            exit: e,
                            enter: t,
                            appear: n
                        }
                    }, n.updateStatus = function(e, t) {
                        void 0 === e && (e = !1), null !== t ? (this.cancelNextCallback(), t === p ? this.performEnter(e) : this.performExit()) : this.props.unmountOnExit && this.state.status === d && this.setState({
                            status: f
                        })
                    }, n.performEnter = function(e) {
                        var t = this,
                            n = this.props.enter,
                            r = this.context ? this.context.isMounting : e,
                            i = this.props.nodeRef ? [r] : [l().findDOMNode(this), r],
                            o = i[0],
                            a = i[1],
                            s = this.getTimeouts(),
                            u = r ? s.appear : s.enter;
                        !e && !n || c ? this.safeSetState({
                            status: m
                        }, (function() {
                            t.props.onEntered(o)
                        })) : (this.props.onEnter(o, a), this.safeSetState({
                            status: p
                        }, (function() {
                            t.props.onEntering(o, a), t.onTransitionEnd(u, (function() {
                                t.safeSetState({
                                    status: m
                                }, (function() {
                                    t.props.onEntered(o, a)
                                }))
                            }))
                        })))
                    }, n.performExit = function() {
                        var e = this,
                            t = this.props.exit,
                            n = this.getTimeouts(),
                            r = this.props.nodeRef ? void 0 : l().findDOMNode(this);
                        t && !c ? (this.props.onExit(r), this.safeSetState({
                            status: h
                        }, (function() {
                            e.props.onExiting(r), e.onTransitionEnd(n.exit, (function() {
                                e.safeSetState({
                                    status: d
                                }, (function() {
                                    e.props.onExited(r)
                                }))
                            }))
                        }))) : this.safeSetState({
                            status: d
                        }, (function() {
                            e.props.onExited(r)
                        }))
                    }, n.cancelNextCallback = function() {
                        null !== this.nextCallback && (this.nextCallback.cancel(), this.nextCallback = null)
                    }, n.safeSetState = function(e, t) {
                        t = this.setNextCallback(t), this.setState(e, t)
                    }, n.setNextCallback = function(e) {
                        var t = this,
                            n = !0;
                        return this.nextCallback = function(r) {
                            n && (n = !1, t.nextCallback = null, e(r))
                        }, this.nextCallback.cancel = function() {
                            n = !1
                        }, this.nextCallback
                    }, n.onTransitionEnd = function(e, t) {
                        this.setNextCallback(t);
                        var n = this.props.nodeRef ? this.props.nodeRef.current : l().findDOMNode(this),
                            r = null == e && !this.props.addEndListener;
                        if (n && !r) {
                            if (this.props.addEndListener) {
                                var i = this.props.nodeRef ? [this.nextCallback] : [n, this.nextCallback],
                                    o = i[0],
                                    a = i[1];
                                this.props.addEndListener(o, a)
                            }
                            null != e && setTimeout(this.nextCallback, e)
                        } else setTimeout(this.nextCallback, 0)
                    }, n.render = function() {
                        var e = this.state.status;
                        if (e === f) return null;
                        var t = this.props,
                            n = t.children,
                            i = (t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef, (0, r.A)(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]));
                        return a().createElement(u.Provider, {
                            value: null
                        }, "function" === typeof n ? n(e, i) : a().cloneElement(a().Children.only(n), i))
                    }, t
                }(a().Component);

            function g() {}
            v.contextType = u, v.propTypes = {}, v.defaultProps = { in: !1,
                mountOnEnter: !1,
                unmountOnExit: !1,
                appear: !1,
                enter: !0,
                exit: !0,
                onEnter: g,
                onEntering: g,
                onEntered: g,
                onExit: g,
                onExiting: g,
                onExited: g
            }, v.UNMOUNTED = f, v.EXITED = d, v.ENTERING = p, v.ENTERED = m, v.EXITING = h;
            const b = v
        }
    }
]);
//# debugId=3bd0006c-8dfe-5ece-80ac-31aa7d5fe035