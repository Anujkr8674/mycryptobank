"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [9139], {
        bBDr: (e, t, n) => {
            n.d(t, {
                Q: () => i
            });
            const a = (0, n("eAFj").A)((e => ({
                    visible: !1,
                    setVisible: t => e({
                        visible: t
                    }),
                    activePanel: "list",
                    setActivePanel: t => e({
                        activePanel: t
                    }),
                    openSettingPanel: () => e({
                        visible: !0,
                        activePanel: "setting"
                    })
                }))),
                i = () => a((e => e))
        },
        "4CAz": (e, t, n) => {
            n.d(t, {
                Mh: () => x,
                zq: () => S,
                cM: () => f,
                OA: () => T,
                H6: () => A,
                Co: () => v,
                ob: () => g,
                RJ: () => m,
                Ti: () => I,
                Ck: () => _,
                oE: () => E
            });
            var a = n("mXdx"),
                i = n("DTvD"),
                r = n.n(i),
                o = n("wIZF"),
                s = n("qqbu");
            const c = function(e) {
                return r().createElement(s.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), r().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7 4h10v2h3v5h-3 3l-3.161 1.264a5.01 5.01 0 01-3.339 3.507V18h4.453v3h-12v-3H10.5v-2.229a5.013 5.013 0 01-3.226-3.134L4 11h3-3V6h3V4zm7 4h-4v3h4V8z",
                    fill: "currentColor"
                }))
            };
            const l = function(e) {
                return r().createElement(s.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), r().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z",
                    fill: "currentColor"
                }))
            };
            const u = function(e) {
                return r().createElement(s.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), r().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.01 3.991h-6.414L9.408 8.18l-4.943.055-2.821 2.82 4.59 4.592 3.528-3.528 2.121 2.121-3.528 3.528 4.593 4.594 2.822-2.821.053-4.947 4.187-4.188V3.991zM8.347 17.776l-2.121-2.122-2.12 2.12 2.122 2.12 2.119-2.118z",
                    fill: "currentColor"
                }))
            };
            const p = function(e) {
                return r().createElement(s.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), r().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 19V5h18v14H3zM18 8H6v2.5h12V8zm-3 4.5h3V16h-3v-3.5zm-9 0V16h7v-3.5H6z",
                    fill: "currentColor"
                }))
            };
            const N = function(e) {
                return r().createElement(s.A, (0, o.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), r().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 4h11.5v12a4 4 0 01-4 4H8a3.5 3.5 0 01-3.5-3.5V10H9V4zm0 8.5H7v4a1 1 0 102 0v-4zM11.758 7h6v2h-6V7zm6 4h-6v2h6v-2z",
                    fill: "currentColor"
                }))
            };
            var d = n("lu7o"),
                h = n("blJy");
            const A = {
                    topLeft: "top-[70px] left-[20px]",
                    topRight: "top-[70px] right-[20px]",
                    bottomLeft: "bottom-[24px] left-[20px]",
                    bottomRight: "bottom-[24px] right-[20px]",
                    topCenter: "top-[64px] left-[15px] right-[15px]",
                    bottomCenter: "bottom-[14px] left-[8px] right-[8px]"
                },
                _ = 16,
                m = [...[h.aW.ANNOUNCEMENT, h.aW.CAMPAIGN, h.aW.NEW_TRADING_PAIR, h.aW.BLOG, h.aW.WHAT_IS_HAPPENING, h.aW.NONE]].reverse(),
                I = [h.aW.ANNOUNCEMENT, h.aW.CAMPAIGN, h.aW.NEW_TRADING_PAIR, h.aW.BLOG, h.aW.WHAT_IS_HAPPENING, h.aW.NONE],
                E = I.reduce(((e, t) => ({ ...e,
                    [t]: !0
                })), {}),
                g = {
                    [h.aW.ANNOUNCEMENT]: ["important-notice", "Important Notice"],
                    [h.aW.CAMPAIGN]: ["hot-campaign", "Hot Campaign"],
                    [h.aW.NEW_TRADING_PAIR]: ["new-trading-pair", "New Trading Pair"],
                    [h.aW.BLOG]: ["new-blog", "New Blog"],
                    [h.aW.WHAT_IS_HAPPENING]: ["whats-happening", "What's Happening"],
                    [h.aW.NONE]: ["other", "Other"]
                },
                f = "HISTORY_FILTER_ALL",
                S = [f, h.aW.ANNOUNCEMENT, h.aW.CAMPAIGN, h.aW.NEW_TRADING_PAIR],
                T = {
                    [f]: ["all", "All"],
                    [h.aW.ANNOUNCEMENT]: ["important-notice", "Important Notice"],
                    [h.aW.CAMPAIGN]: ["hot-campaign", "Hot Campaign"],
                    [h.aW.NEW_TRADING_PAIR]: ["new-trading-pair", "New Trading Pair"]
                },
                v = {
                    [f]: "all",
                    [h.aW.ANNOUNCEMENT]: "important_notice",
                    [h.aW.CAMPAIGN]: "hot_campaign",
                    [h.aW.NEW_TRADING_PAIR]: "new_trading_pair",
                    [h.aW.BLOG]: "new_blog",
                    [h.aW.WHAT_IS_HAPPENING]: "whats_happening",
                    [h.aW.NONE]: "other"
                },
                C = "w-[12px] h-[12px]",
                x = {
                    CAMPAIGN: {
                        icon: (0, a.jsx)(c, {
                            className: C
                        }),
                        key: "HotCampaign",
                        defaultValue: "Hot Campaign",
                        title: "hotCampaign"
                    },
                    ANNOUNCEMENT: {
                        icon: (0, a.jsx)(l, {
                            className: C
                        }),
                        key: "ImportantNotice",
                        defaultValue: "Important Notice",
                        title: "announcement"
                    },
                    NEW_TRADING_PAIR: {
                        icon: (0, a.jsx)(u, {
                            className: C
                        }),
                        key: "NewTradingPair",
                        defaultValue: "New Trading Pair",
                        title: "newTradingPairs"
                    },
                    [h.aW.BLOG]: {
                        icon: (0, a.jsx)(p, {
                            className: C
                        }),
                        key: g[h.aW.BLOG][0],
                        defaultValue: g[h.aW.BLOG][1],
                        title: "blog"
                    },
                    [h.aW.WHAT_IS_HAPPENING]: {
                        icon: (0, a.jsx)(N, {
                            className: C
                        }),
                        key: g[h.aW.WHAT_IS_HAPPENING][0],
                        defaultValue: g[h.aW.WHAT_IS_HAPPENING][1],
                        title: "whatIsHappening"
                    },
                    [h.aW.NONE]: {
                        icon: (0, a.jsx)(d.A, {
                            className: C
                        }),
                        key: g[h.aW.NONE][0],
                        defaultValue: g[h.aW.NONE][1],
                        title: "other"
                    }
                }
        },
        L6E9: (e, t, n) => {
            n.d(t, {
                X$: () => h,
                is: () => A,
                ud: () => d
            });
            var a = n("blJy"),
                i = n("DTvD"),
                r = n("Hf/4"),
                o = n("eAFj"),
                s = n("OVFS"),
                c = n("5K4W"),
                l = n("4CAz"),
                u = n("+KAX"),
                p = n("bBDr");
            const N = (0, o.A)(((e, t) => ({
                    data: null,
                    pushSettingSwitch: !0,
                    pushSettingMap: null,
                    async queryAnnouncementViewSetting({
                        isLoggedIn: t
                    }) {
                        if (void 0 === t) return;
                        const {
                            pushSettingMap: n,
                            pushSettingSwitch: i
                        } = await (async () => {
                            try {
                                const e = await s.LS.getItem(c.p.LOCAL_ANNOUNCEMENT_PUSH_SETTING),
                                    t = await s.LS.getItem(c.p.LOCAL_ANNOUNCEMENT_PUSH_SETTING_SWITCH);
                                return {
                                    pushSettingMap: e || l.oE,
                                    pushSettingSwitch: void 0 === t || null === t || t
                                }
                            } catch (e) {
                                return {
                                    pushSettingMap: l.oE,
                                    pushSettingSwitch: !0
                                }
                            }
                        })();
                        if (!t) return void e({
                            pushSettingMap: n,
                            pushSettingSwitch: i,
                            data: (0, u.RW)(n)
                        });
                        const {
                            success: r,
                            data: o
                        } = await (0, a.bM)();
                        if (r && "number" === typeof o) {
                            const t = o === (0, u.eh)();
                            e({
                                pushSettingMap: t ? n : (0, u.JW)(o),
                                pushSettingSwitch: !t,
                                data: o
                            })
                        } else e({
                            pushSettingMap: n,
                            pushSettingSwitch: i,
                            data: (0, u.RW)(n)
                        })
                    },
                    updateAnnouncementViewSetting({
                        type: n,
                        value: a
                    }) {
                        const i = { ...t().pushSettingMap,
                            [n]: a
                        };
                        e({
                            pushSettingMap: i,
                            pushSettingSwitch: (0, u.RW)(i) !== (0, u.eh)()
                        })
                    },
                    updateAnnouncementViewSettingSwitch(t) {
                        e({
                            pushSettingSwitch: t
                        })
                    },
                    updateDate(t) {
                        e({
                            data: t
                        })
                    }
                }))),
                d = () => N((e => e)),
                h = ({
                    isLoggedIn: e
                }) => {
                    const {
                        pushSettingMap: t,
                        pushSettingSwitch: n,
                        data: o,
                        updateDate: l
                    } = d(), {
                        activePanel: N,
                        visible: h
                    } = (0, p.Q)(), A = (0, r.A)(e), _ = (0, r.A)(N), m = (0, r.A)(h), I = "setting" === _ && "list" === N || m && !h, E = h && "setting" === N, g = (0, i.useCallback)((() => {
                        if (!t) return;
                        const i = n ? (0, u.RW)(t) : (0, u.eh)();
                        if (o !== i && (((e, t) => {
                                s.LS.setItem(c.p.LOCAL_ANNOUNCEMENT_PUSH_SETTING, e), s.LS.setItem(c.p.LOCAL_ANNOUNCEMENT_PUSH_SETTING_SWITCH, t)
                            })(t, n), l(i), A && e)) {
                            const e = n ? (0, u.RW)(t) : (0, u.eh)();
                            (0, a.u1)({
                                config: e
                            })
                        }
                    }), [o, t, n, l, A, e]);
                    (0, i.useEffect)((function() {
                        if (E) return window.addEventListener("beforeunload", g), () => window.removeEventListener("beforeunload", g)
                    }), [E, g]), (0, i.useEffect)((function() {
                        I && g()
                    }), [I, g])
                },
                A = e => e ? Object.keys(e).reduce(((t, n) => {
                    const a = e[n] ? "on" : "off";
                    return { ...t,
                        [`ann_push_${l.Co[n]}`]: a
                    }
                }), {}) : null
        },
        "+KAX": (e, t, n) => {
            n.d(t, {
                JW: () => p,
                RW: () => N,
                V8: () => s,
                W1: () => r,
                eh: () => u,
                u4: () => o
            });
            var a = n("O13v"),
                i = n("4CAz");
            const r = () => (new Date).setHours(23, 59, 59),
                o = ({
                    _track: e,
                    elementSelector: t,
                    elementId: n,
                    elementTargetUrl: a,
                    pageName: i = "",
                    dfSource: r = ""
                }) => {
                    e && e("$WebClick", {
                        module: "announcement_tool",
                        $element_selector: t,
                        $element_id: n,
                        $element_target_url: a,
                        pageName: i,
                        df_source: r
                    })
                };
            async function s({
                i18nInstance: e,
                language: t,
                i18nHost: n,
                namespace: i
            }) {
                e ? .hasResourceBundle(t, i) || e ? .addResourceBundle(t, i, await (0, a.TU)({
                    basePath: n,
                    locale: t,
                    namespace: i,
                    fallback: "en"
                }), !0, !0)
            }
            const c = i.RJ.length,
                l = i.Ck - c,
                u = () => parseInt(`${"1".repeat(l)}${"0".repeat(c)}`, 2),
                p = e => {
                    const t = e.toString(2).split("").reverse().map((e => Boolean(Number(e))));
                    return i.Ti.reduce(((e, n, a) => ({ ...e,
                        [n]: !!t[a]
                    })), {})
                },
                N = e => {
                    const t = i.RJ.map((t => e[t] ? "1" : "0")).join("");
                    return parseInt(`${"1".repeat(l)}${t}`, 2)
                }
        },
        "5K4W": (e, t, n) => {
            n.d(t, {
                p: () => a
            });
            const a = {
                DISCLAIMER_WARNING: "DISCLAIMER_WARNING",
                DISCLAIMER_POPUP: "DISCLAIMER_POPUP_WARNING",
                IS_ANNOUNCEMENT_RED_DOT_VISIBLE: "IS_ANNOUNCEMENT_RED_DOT_VISIBLE",
                IS_ANNOUNCEMENT_SETTING_RED_DOT_VISIBLE: "IS_ANNOUNCEMENT_SETTING_RED_DOT_VISIBLE",
                IS_FIRST_TIME_CLICK_ANN_CLOSE_BUTTON: "IS_FIRST_TIME_CLICK_ANN_CLOSE_BUTTON",
                LOCAL_ANNOUNCEMENT_PUSH_SETTING: "LOCAL_ANNOUNCEMENT_PUSH_SETTING",
                LOCAL_ANNOUNCEMENT_PUSH_SETTING_SWITCH: "LOCAL_ANNOUNCEMENT_PUSH_SETTING_SWITCH",
                USER_HAS_TRADED: "USER_HAS_TRADED",
                ZA_TO_BSC: "ZA_TO_BSC"
            }
        },
        OVFS: (e, t, n) => {
            n.d(t, {
                LS: () => l,
                zr: () => p
            });
            var a = n("DTvD"),
                i = n("BmHO"),
                r = n.n(i),
                o = n("WT+B");
            const s = new(n("HwII").b),
                c = {
                    name: "futures-core"
                },
                l = r().createInstance({
                    name: c.name
                }),
                u = {
                    [c.name]: l
                },
                p = (e, t, n = c) => {
                    const {
                        name: i = "futures-core",
                        onError: l,
                        afterInit: p
                    } = n, [N, d] = (0, a.useState)(t), [h, A] = (0, a.useState)(!1), _ = u[i] || r().createInstance({
                        name: i
                    });
                    _ && !u[i] && (u[i] = _);
                    const m = (0, o.Z)((e => {
                            "function" === typeof l && l(e)
                        })),
                        I = (0, o.Z)((e => {
                            "function" === typeof p && p(e)
                        })),
                        E = (0, o.Z)((t => {
                            _.setItem(e, t).then((() => {
                                d(t), s.emit("LOCAL_FORAGE_UPDATE", {
                                    key: e,
                                    value: t
                                })
                            })).catch((e => {
                                m(e)
                            }))
                        }));
                    (0, a.useEffect)((function() {
                        return s.on("LOCAL_FORAGE_UPDATE", (({
                            key: t,
                            value: n
                        }) => {
                            t === e && N !== n && d(n)
                        }))
                    }), [e, N]), (0, a.useEffect)((() => {
                        (async () => {
                            try {
                                const t = await _.getItem(e);
                                d((n => {
                                    const a = null === t,
                                        i = a ? n : t;
                                    return a && _.setItem(e, i), I(i), i
                                })), A(!0)
                            } catch (t) {
                                m(t)
                            }
                        })()
                    }), [e, m, E, _, I]);
                    const g = (0, a.useCallback)((async () => await _.getItem(e)), [_, e]);
                    return {
                        data: N,
                        setData: E,
                        getData: g,
                        hasInitialized: h
                    }
                }
        },
        blJy: (e, t, n) => {
            n.d(t, {
                KJ: () => l,
                Sp: () => u,
                YX: () => N,
                aW: () => c,
                bM: () => d,
                ob: () => p,
                u1: () => h
            });
            var a = n("S+0I"),
                i = n("66mo"),
                r = n.n(i),
                o = n("VA12"),
                s = n("XqCI"),
                c = {
                    ANNOUNCEMENT: "ANNOUNCEMENT",
                    CAMPAIGN: "CAMPAIGN",
                    NEW_TRADING_PAIR: "NEW_TRADING_PAIR",
                    BLOG: "BLOG",
                    WHAT_IS_HAPPENING: "WHAT_IS_HAPPENING",
                    NONE: "NONE"
                },
                l = {
                    WEB: "WEB",
                    IOS: "IOS",
                    ANDROID: "ANDROID",
                    ELECTRON: "ELECTRON",
                    H5: "H5"
                },
                u = {
                    ALL: "ALL",
                    FUTURES: "FUTURES",
                    OPTIONS: "OPTIONS",
                    SPOT: "SPOT",
                    MARGIN: "MARGIN"
                },
                p = {
                    ALL: "ALL",
                    TRADING_PAGE: "TRADING_PAGE",
                    HOMEPAGE: "HOMEPAGE",
                    ACTIVITY_PAGE: "ACTIVITY_PAGE"
                },
                N = function() {
                    var e = (0, a._)(r().mark((function e(t) {
                        return r().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, o.get)("/bapi/futures/v1/public/future/announcement/announcement-history-v2?".concat((0, s.E2)(t))));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, a._)(r().mark((function e() {
                        return r().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.abrupt("return", (0, o.post)("/bapi/futures/v1/private/future/announcement/announcement-view-setting"));
                                case 4:
                                    return e.prev = 4, e.t0 = e.catch(0), e.abrupt("return", {
                                        success: !1
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 4]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function() {
                    var e = (0, a._)(r().mark((function e(t) {
                        return r().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.abrupt("return", (0, o.post)("/bapi/futures/v1/private/future/announcement/save/announcement-view-setting", t));
                                case 4:
                                    return e.prev = 4, e.t0 = e.catch(0), e.abrupt("return", {
                                        success: !1
                                    });
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 4]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        hhWk: (e, t, n) => {
            n.d(t, {
                A: () => S
            });
            var a = n("mguP"),
                i = n("mXdx"),
                r = n("DTvD"),
                o = n.n(r),
                s = n("blJy"),
                c = n("bBDr"),
                l = n("OVFS"),
                u = n("5K4W");
            const p = () => {
                const {
                    data: e,
                    setData: t,
                    hasInitialized: n
                } = (0, l.zr)(u.p.IS_ANNOUNCEMENT_RED_DOT_VISIBLE, !0);
                return {
                    isRedDotVisible: n && e,
                    setIsRedDotVisible: t
                }
            };
            var N = n("L6E9"),
                d = n("bQ69"),
                h = n("Qhol"),
                A = n("wtFP"),
                _ = n("iygL"),
                m = n("Xeyi"),
                I = n("7y/z"),
                E = o().lazy((function() {
                    return n.e(7602).then(n.bind(n, "dYou"))
                })),
                g = function(e) {
                    var t = e.children,
                        n = e.business,
                        a = e.scope,
                        o = e.visible,
                        s = e.isLightTheme,
                        c = e.staticHost,
                        l = e.i18nHost,
                        u = e.onToggle,
                        p = e.sensorsTrack,
                        N = e.trackParams,
                        d = e.isLoggedIn;
                    return (0, i.jsx)(r.Suspense, {
                        fallback: null,
                        children: (0, i.jsx)(E, {
                            business: n,
                            scope: a,
                            visible: o,
                            isLightTheme: s,
                            staticHost: c,
                            i18nHost: l,
                            onToggle: u,
                            sensorsTrack: p,
                            trackParams: N,
                            isLoggedIn: d,
                            children: t
                        })
                    })
                };
            const f = o().memo(g);
            const S = function() {
                var e = (0, h.nHk)(),
                    t = (0, h.ok2)().getI18n,
                    n = (0, h.DPo)().isLight,
                    o = (0, a._)((0, h.Grl)(), 1)[0],
                    l = (0, h.x$o)(),
                    u = (0, c.Q)(),
                    E = u.visible,
                    g = u.setVisible,
                    S = (0, r.useState)(!1),
                    T = S[0],
                    v = S[1];
                (0, r.useEffect)((function() {
                    E && !T && v(!0)
                }), [T, E]);
                var C = (0, h.$mR)(),
                    x = (0, r.useMemo)((function() {
                        return (0, m.V$)(o) ? "margin" : "spot"
                    }), [o]),
                    O = (0, r.useMemo)((function() {
                        var e = l === d.a0 ? "full" : l === d.ug ? "pro" : l === d.Pv ? "classic" : "";
                        return "".concat(x, "_trading_").concat(e)
                    }), [l, x]),
                    P = p(),
                    b = P.isRedDotVisible,
                    R = P.setIsRedDotVisible,
                    W = (0, r.useCallback)((function() {
                        var e = !E;
                        g(e), e && b && R(!1), e && ((0, A.u4)("$WebClick", {
                            module: "announcement_newsroom",
                            $element_id: "newsroom_entry",
                            pageName: O,
                            df_source: x
                        }), (0, A.u4)("$WebClick", {
                            module: "footer",
                            $element_id: "trade_announcement",
                            pageName: O,
                            df_source: x
                        }))
                    }), [E, g, b, O, x, R]),
                    L = (0, N.ud)().pushSettingMap,
                    w = (0, h.ZCR)(L);
                return (0, r.useEffect)((function() {
                    !w && L && (0, A.u4)("ModuleView", {
                        df_source: x,
                        pageName: O,
                        df_tpSettings: JSON.stringify((0, N.is)(L))
                    })
                }), [x, O, L, w]), C ? (0, i.jsx)(i.Fragment, {}) : (0, i.jsxs)(i.Fragment, {
                    children: [(0, i.jsxs)("div", {
                        className: "title text-PrimaryText hover:text-TertiaryText",
                        style: I.dp,
                        onClick: W,
                        children: [b && (0, i.jsx)("div", {
                            style: {
                                width: "4px",
                                height: "4px",
                                borderRadius: "2px",
                                backgroundColor: "var(--color-PrimaryYellow)",
                                position: "absolute",
                                top: "-2px",
                                right: "-1px"
                            }
                        }), t("trd-announcements", {
                            defaultValue: "Announcements"
                        })]
                    }), T && (0, i.jsx)(f, {
                        isLoggedIn: e,
                        business: (0, _.J)(o),
                        scope: s.ob.TRADING_PAGE,
                        visible: E,
                        isLightTheme: n,
                        staticHost: d.K5,
                        i18nHost: d.HN,
                        onToggle: W,
                        sensorsTrack: A.u4,
                        trackParams: {
                            pageName: O,
                            dfSource: x
                        }
                    })]
                })
            }
        },
        hIwD: (e, t, n) => {
            n.d(t, {
                A: () => l
            });
            var a = n("mXdx"),
                i = n("DTvD"),
                r = n.n(i),
                o = n("b2AH"),
                s = n("7y/z"),
                c = function() {
                    var e = (0, o.ok)().getI18n;
                    return (0, a.jsx)("div", {
                        className: "text-PrimaryText hover:text-TertiaryText",
                        style: s.iY,
                        "data-ot-trigger": "true",
                        children: e("ba-one-trust-cookie", {
                            defaultValue: "Cookie Preferences"
                        })
                    })
                };
            const l = r().memo(c)
        },
        mwpU: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => g
            });
            var a = n("mXdx"),
                i = n("DTvD"),
                r = n.n(i),
                o = n("tgKj"),
                s = n("hIwD"),
                c = n("hhWk"),
                l = n("2IQ4"),
                u = n("oY5g"),
                p = n("5XRN"),
                N = n("OMC8"),
                d = n("b2AH"),
                h = n("Qhol"),
                A = {
                    bg: "popupBg",
                    borderRadius: "4px",
                    padding: "16px",
                    color: "t.third",
                    width: "165px",
                    ".item": {
                        display: "flex",
                        fontSize: "12px",
                        alignItems: "center",
                        justifyContent: "space-between",
                        pb: "12px",
                        "&:last-child": {
                            pb: "0px"
                        }
                    },
                    ".active": {
                        color: "primary"
                    }
                },
                _ = function() {
                    var e = (0, d.ok)().getI18n,
                        t = (0, h.SJn)(),
                        n = t.show,
                        i = t.setShow;
                    return (0, a.jsxs)(l.A, {
                        sx: A,
                        children: [(0, a.jsx)("div", {
                            className: "item",
                            children: e("trd-orderForm-Preference")
                        }), (0, a.jsxs)("label", {
                            onClick: function(e) {
                                return e.stopPropagation()
                            },
                            className: "item display-new",
                            htmlFor: "display-new",
                            children: [(0, a.jsx)(u.A, {
                                id: "display-new",
                                size: 16,
                                checked: n,
                                onChange: function(e) {
                                    i(e.target.checked)
                                }
                            }), (0, a.jsx)("span", {
                                children: e("trd-footer-overlay-news")
                            })]
                        })]
                    })
                },
                m = function() {
                    var e = (0, i.useState)(!1),
                        t = e[0],
                        n = e[1],
                        r = (0, i.useCallback)((function(e) {
                            n(e)
                        }), []),
                        o = (0, i.useMemo)((function() {
                            return t ? (0, a.jsx)(_, {}) : null
                        }), [t]);
                    return (0, a.jsx)(p.Ay, {
                        trigger: "click",
                        placement: "top-end",
                        overlay: o,
                        onVisibleChange: r,
                        sx: {
                            display: "flex",
                            alignItems: "center"
                        },
                        children: (0, a.jsx)(N.A, {
                            size: 16,
                            color: "t.third",
                            sx: {
                                ml: "16px",
                                mt: "2px",
                                "&:hover": {
                                    cursor: "pointer",
                                    color: "primary"
                                }
                            }
                        })
                    })
                };
            const I = (0, i.memo)(m);
            var E = function() {
                return (0, a.jsxs)(o.A, {
                    style: {
                        alignItems: "center",
                        justifyContent: "space-between",
                        position: "fixed",
                        zIndex: 2,
                        bottom: 0,
                        backgroundColor: "var(--color-BasicBg)",
                        width: "100%",
                        height: "33px"
                    },
                    children: [(0, a.jsx)(I, {}), (0, a.jsxs)(o.A, {
                        style: {
                            justifyContent: "space-between",
                            alignItems: "center"
                        },
                        children: [(0, a.jsx)(c.A, {}), (0, a.jsx)(s.A, {})]
                    })]
                })
            };
            const g = r().memo(E)
        },
        "7y/z": (e, t, n) => {
            n.d(t, {
                HL: () => r,
                dp: () => i,
                iY: () => a
            });
            var a = {
                    display: "flex",
                    alignItems: "center",
                    marginRight: "8px",
                    cursor: "pointer",
                    fontSize: "12px",
                    height: "24px"
                },
                i = {
                    display: "flex",
                    alignItems: "center",
                    margin: "0 8px",
                    cursor: "pointer",
                    fontSize: "12px",
                    position: "relative",
                    height: "16px"
                },
                r = {
                    width: "1px",
                    height: "16px",
                    backgroundColor: "var(--color-Line)",
                    marginRight: "8px"
                }
        },
        iygL: (e, t, n) => {
            n.d(t, {
                J: () => r
            });
            var a = n("blJy"),
                i = n("bQ69"),
                r = function(e) {
                    switch (e) {
                        case i.Gr.ISOLATED:
                        case i.Gr.CROSS:
                            return a.Sp.MARGIN;
                        case i.Gr.SPOT:
                            return a.Sp.SPOT;
                        default:
                            return a.Sp.ALL
                    }
                }
        },
        lu7o: (e, t, n) => {
            n.d(t, {
                A: () => s
            });
            var a = n("wIZF"),
                i = n("DTvD"),
                r = n.n(i),
                o = n("qqbu");
            const s = function(e) {
                return r().createElement(o.A, (0, a.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), r().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.002 7H16l4-4v16l-4-4h-4v6H7v-6H4.002V7z",
                    fill: "currentColor"
                }))
            }
        }
    }
]);