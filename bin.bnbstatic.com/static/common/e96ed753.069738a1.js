"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1c8927fd-cea3-534f-a9ca-1874d53f7fd2")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [4569], {
        "9rIu": (e, t, a) => {
            a.d(t, {
                A: () => b,
                E: () => h
            });
            var n = a("M5j3"),
                c = a("BK7R"),
                r = a("gZfF"),
                l = a("DTvD"),
                i = a.n(l),
                o = a("2Lg3"),
                s = a.n(o),
                m = a("Lp65"),
                u = a("eeEA"),
                d = a("YiNW"),
                p = a("LjJk"),
                h = 16,
                f = function(e) {
                    var t = e.tooltips,
                        a = e.tooltipProps,
                        c = e.children;
                    return t ? i().createElement(p.A, (0, n.A)({
                        tooltips: t,
                        placement: "top",
                        arrow: !0
                    }, a), c) : i().createElement(i().Fragment, null, c)
                };
            const b = function(e) {
                var t = e.text,
                    a = e.size,
                    o = void 0 === a ? h : a,
                    p = e.dotSize,
                    b = e.children,
                    v = e.isOnline,
                    g = e.src,
                    A = e.className,
                    E = e.style,
                    w = e.toolTips,
                    y = e.toolTipProps,
                    T = e.variant,
                    S = void 0 === T ? "primary" : T,
                    x = (0, r.A)(e, ["text", "size", "dotSize", "children", "isOnline", "src", "className", "style", "toolTips", "toolTipProps", "variant"]),
                    B = (0, l.useMemo)((function() {
                        return t && !g ? t.slice(0, 1) : ""
                    }), [g, t]);
                return i().createElement(f, {
                    tooltips: w,
                    tooltipProps: y
                }, i().createElement(m.A, (0, n.A)({
                    className: (0, d.cn)("merchantName-avatar items-center justify-center relative rounded-m subtitle3 text-center flex-none", "primary" === S ? "bg-primaryText text-basicBg" : "bg-line text-primaryText", A),
                    style: (0, c.A)({
                        width: o,
                        height: o
                    }, g ? {
                        backgroundImage: "url(".concat(g, ")"),
                        backgroundPosition: "center",
                        backgroundSize: "cover"
                    } : {}, E)
                }, x), B || b, !s()(v) && i().createElement(u.Ay, {
                    className: (0, d.cn)("border border-basicBg absolute right-0 bottom-0 rounded-circle", v ? "bg-old-success" : "bg-disabledText"),
                    style: {
                        width: p || .35 * o,
                        height: p || .35 * o,
                        maxHeight: "10px",
                        maxWidth: "10px"
                    }
                })))
            }
        },
        qgKY: (e, t, a) => {
            a.d(t, {
                A: () => x
            });
            var n = a("ezuS"),
                c = a("M5j3"),
                r = a("gZfF"),
                l = a("DTvD"),
                i = a.n(l),
                o = a("T9BW"),
                s = a("Dz1D"),
                m = a("eeEA"),
                u = a("qtT+"),
                d = a("Lp65"),
                p = a("JgEn"),
                h = a("wIZF"),
                f = a("Y4uf");
            const b = function(e) {
                return i().createElement(f.A, (0, h.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M16.438 4.313L14.814 1.5 12 3.124 9.187 1.5 7.562 4.313H4.313v3.25L1.5 9.186 3.124 12 1.5 14.813l2.813 1.625v3.248h3.25L9.186 22.5 12 20.876l2.813 1.624 1.625-2.814h3.248v-3.248l2.814-1.624L20.876 12 22.5 9.187l-2.814-1.625V4.313h-3.248zm-.902 4.215l1.414 1.414-6.364 6.364L7.05 12.77l1.414-1.414 2.122 2.122 4.95-4.95z",
                    fill: "#F0B90B"
                }))
            };
            const v = function(e) {
                return i().createElement(f.A, (0, h.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 3h14l4 4v14H7l-4-4V3zm3.218 12.382H4.72V8.5h3.253c1.282 0 2.09.897 2.09 2.199 0 1.301-.808 2.198-2.09 2.198H6.218v2.485zm0-5.58v1.794h1.578c.443 0 .72-.237.72-.68v-.434c0-.444-.277-.68-.72-.68H6.218zm6.256 5.58h-1.46v-5.176h1.46v1.124h.049c.118-.572.513-1.124 1.321-1.124h.257v1.36h-.365c-.848 0-1.262.188-1.262.789v3.027zm2.153-2.593c0 1.666.907 2.711 2.425 2.711 1.519 0 2.426-1.045 2.426-2.711s-.907-2.702-2.426-2.702c-1.518 0-2.425 1.036-2.425 2.702zm3.332.532c0 .65-.335 1.026-.907 1.026-.571 0-.907-.375-.907-1.026v-1.055c0-.65.336-1.025.907-1.025.572 0 .907.375.907 1.025v1.055z",
                    fill: "#FF375B"
                }))
            };
            var g, A = a("09uy"),
                E = a("YiNW"),
                w = a("3o5u"),
                y = a("ELN5"),
                T = [y.RY.Shield, y.RY.Block],
                S = (g = {}, (0, n.A)(g, y.RY.Ordinary, 1), (0, n.A)(g, y.RY.Block, 1), (0, n.A)(g, y.RY.Pro, 2), (0, n.A)(g, y.RY.Shield, 2), g);
            const x = function(e) {
                var t = e.badgeSize,
                    a = void 0 === t ? 20 : t,
                    n = e.showChineseBadge,
                    h = void 0 !== n && n,
                    f = e.badges,
                    g = void 0 === f ? [] : f,
                    x = e.vipLevel,
                    B = e.alwaysShowVipBadge,
                    N = void 0 !== B && B,
                    _ = e.className,
                    k = (0, r.A)(e, ["badgeSize", "showChineseBadge", "badges", "vipLevel", "alwaysShowVipBadge", "className"]),
                    z = (0, o.useTranslation)(w.VX).t,
                    R = (0, s.PC)(),
                    Y = "".concat(null === R || void 0 === R ? void 0 : R.STATIC_HOST, "/static/images/c2c/user/verified-merchant-bronze.png"),
                    L = "".concat(null === R || void 0 === R ? void 0 : R.STATIC_HOST, "/static/images/c2c/user/verified-merchant-silver.png"),
                    P = "".concat(null === R || void 0 === R ? void 0 : R.STATIC_HOST, "/static/images/c2c/user/verified-merchant-gold.png"),
                    C = "".concat(null === R || void 0 === R ? void 0 : R.STATIC_HOST, "/static/images/c2c/user/block-merchant.png"),
                    H = "".concat(null === R || void 0 === R ? void 0 : R.STATIC_HOST, "/static/images/c2c/user/shield-merchant.png"),
                    I = function(e) {
                        if (!e) return [];
                        var t = e.reduce((function(e, t) {
                            var a = S[t];
                            return a && (T.includes(e[a]) || (e[a] = t)), e
                        }), {});
                        return Object.values(t)
                    }(g),
                    F = (0, l.useMemo)((function() {
                        return I.map((function(e) {
                            switch (e) {
                                case y.RY.Ordinary:
                                    return x ? null : {
                                        id: "verify_merchant",
                                        tip: i().createElement(m.Ay, null, z("c2c-ui-merchant-badge-verified-merchant-tooltip"), i().createElement(m.Ay, {
                                            as: "a",
                                            href: "".concat(A.bl.mainSite, "/support/faq/9632ff206bff4f80a7a6a13724c18892"),
                                            target: "_blank",
                                            className: "ml-1 underline"
                                        }, z("c2c-ui-merchant-name-merchant-badge-learn-more"))),
                                        icon: function(e) {
                                            return i().createElement(b, (0, c.A)({}, e))
                                        }
                                    };
                                case y.RY.Shield:
                                    return {
                                        id: "shield_merchant",
                                        tip: i().createElement(m.Ay, null, z("c2c-ui-merchant-badge-shield-merchant-tooltip"), i().createElement(m.Ay, {
                                            as: "a",
                                            href: "".concat(A.bl.mainSite, "/support/announcement/fde1f79f60ce47acba525c0851eb4404"),
                                            target: "_blank",
                                            className: "ml-1 underline"
                                        }, z("c2c-ui-merchant-name-merchant-badge-learn-more"))),
                                        icon: function(e) {
                                            return i().createElement(u.A, (0, c.A)({
                                                src: H
                                            }, e))
                                        }
                                    };
                                case y.RY.Block:
                                    return {
                                        id: "block_merchant",
                                        tip: i().createElement(m.Ay, null, z("c2c-ui-merchant-badge-block-merchant-tooltip"), i().createElement(m.Ay, {
                                            as: "a",
                                            className: "ml-1 underline",
                                            href: "".concat(A.bl.mainSite, "/blog/p2p/421499824684903353"),
                                            target: "_blank"
                                        }, z("c2c-ui-merchant-name-merchant-badge-learn-more"))),
                                        icon: function(e) {
                                            return i().createElement(u.A, (0, c.A)({
                                                src: C
                                            }, e))
                                        }
                                    };
                                case y.RY.Pro:
                                    return {
                                        id: "pro_merchant",
                                        tip: i().createElement(m.Ay, null, z("c2c-ui-merchant-badge-pro-merchant-tooltip"), i().createElement(m.Ay, {
                                            as: "a",
                                            className: "ml-1 underline",
                                            href: h ? "https://www.binance.com/cn/support/announcement/fde1f79f60ce47acba525c0851eb4404" : "".concat(A.bl.mainSite, "/support/faq/5d90781ef6054803bee2e30ea87f2013"),
                                            target: "_blank"
                                        }, z("c2c-ui-merchant-name-merchant-badge-learn-more"))),
                                        icon: function(e) {
                                            return i().createElement(v, (0, c.A)({}, e))
                                        }
                                    };
                                default:
                                    return null
                            }
                        }))
                    }), [I, h, x, z]),
                    M = (0, l.useMemo)((function() {
                        if (I.find((function(e) {
                                return e === y.RY.Block
                            }))) return null;
                        switch (x) {
                            case 1:
                                return {
                                    className: "text-[#B97030]",
                                    tooltip: i().createElement(o.Trans, {
                                        t: z,
                                        i18nKey: "c2c-ui-badge-bronze-desc",
                                        components: {
                                            l: i().createElement(m.Ay, {
                                                as: "a",
                                                href: "".concat(A.bl.mainSite, "/support/faq/what-is-the-binance-p2p-merchant-vip-program-340e8ae26bab46a08376f5cc3a36ef25"),
                                                target: "_blank",
                                                className: "underline",
                                                rel: "noreferrer"
                                            })
                                        }
                                    }),
                                    icon: Y
                                };
                            case 2:
                                return {
                                    className: "text-[#929AA5]",
                                    tooltip: i().createElement(o.Trans, {
                                        t: z,
                                        i18nKey: "c2c-ui-badge-silver-desc",
                                        components: {
                                            l: i().createElement(m.Ay, {
                                                as: "a",
                                                href: "".concat(A.bl.mainSite, "/support/faq/what-is-the-binance-p2p-merchant-vip-program-340e8ae26bab46a08376f5cc3a36ef25"),
                                                target: "_blank",
                                                className: "underline",
                                                rel: "noreferrer"
                                            })
                                        }
                                    }),
                                    icon: L
                                };
                            default:
                                return {
                                    className: "text-[#F0B90B]",
                                    tooltip: i().createElement(o.Trans, {
                                        t: z,
                                        i18nKey: "c2c-ui-badge-gold-desc",
                                        components: {
                                            l: i().createElement(m.Ay, {
                                                as: "a",
                                                href: "".concat(A.bl.mainSite, "/support/faq/what-is-the-binance-p2p-merchant-vip-program-340e8ae26bab46a08376f5cc3a36ef25"),
                                                target: "_blank",
                                                className: "underline",
                                                rel: "noreferrer"
                                            })
                                        }
                                    }),
                                    icon: P
                                }
                        }
                    }), [x, z, I]);
                return 0 !== I.length || N ? i().createElement(d.A, (0, c.A)({
                    className: (0, E.cn)("gap-4xs", _)
                }, k), Boolean(x) && M ? i().createElement(p.A, {
                    placement: "top",
                    enablePortal: !0,
                    useReactPopper: !0,
                    arrow: !0,
                    tooltips: M.tooltip
                }, i().createElement(u.A, {
                    src: M.icon,
                    className: "mt-5xs",
                    style: {
                        width: a,
                        height: a
                    }
                })) : null, F.map((function(e, t) {
                    if (!e) return null;
                    var n = e.tip,
                        c = e.icon,
                        r = e.id;
                    return i().createElement(p.A, {
                        tooltips: i().createElement(m.Ay, {
                            className: "text-left"
                        }, n),
                        placement: "top",
                        className: "[&_.bn-tooltip-box]:g-[max-w-[330px],whitespace-break-spaces] flex items-center",
                        enablePortal: !0,
                        useReactPopper: !0,
                        arrow: !0,
                        key: null !== r && void 0 !== r ? r : t
                    }, i().createElement(c, {
                        className: "merchantBadge-icon mt-5xs",
                        style: {
                            width: a,
                            height: a
                        }
                    }))
                }))) : null
            }
        },
        "D/GS": (e, t, a) => {
            a.d(t, {
                o: () => d
            });
            var n = a("DTvD"),
                c = a.n(n),
                r = a("wIZF"),
                l = a("Y4uf");
            const i = function(e) {
                return c().createElement(l.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), c().createElement("path", {
                    d: "M15.54 10.004l.886-.004 1.34 2.84 2.959.46.275.831-2.161 2.23.497 3.13-.721.509-2.63-1.471L13.352 20l-.72-.513.526-3.128L11 14.13l.275-.83 2.957-.461 1.308-2.836z",
                    fill: "#F0B90B"
                }), c().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M13.5 8a4 4 0 11-8 0 4 4 0 018 0zM7 14h1.937l-.217.653 2.299 2.371-.5 2.976H3v-2a4 4 0 014-4z",
                    fill: "currentColor"
                }))
            };
            var o = a("T9BW"),
                s = a("JgEn"),
                m = a("YWmI"),
                u = a("3o5u"),
                d = function(e) {
                    var t = e.takerLevel,
                        a = e.showStarTraderBadge,
                        n = void 0 === a || a,
                        r = e.badgeSize,
                        l = void 0 === r ? 16 : r,
                        d = (0, o.useTranslation)(u.VX).t;
                    return n && t ? c().createElement(s.A, {
                        useReactPopper: !0,
                        tooltips: c().createElement(o.Trans, {
                            subdomain: "www",
                            t: d,
                            i18nKey: "c2c-ui-star-trade-badge-tooltip",
                            components: {
                                l: c().createElement(m.A, {
                                    path: "/support/faq/5c4b79aa8eae4e728c7bc3c48cc72c8b",
                                    className: "text-textLink"
                                })
                            }
                        }),
                        placement: "top",
                        arrow: !0
                    }, c().createElement(i, {
                        className: "text-twoColorIcon",
                        style: {
                            width: l,
                            height: l
                        }
                    })) : null
                }
        }
    }
]);
//# debugId=1c8927fd-cea3-534f-a9ca-1874d53f7fd2