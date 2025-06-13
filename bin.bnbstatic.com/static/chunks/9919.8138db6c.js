"use strict";
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [9919], {
        bBDr: (e, t, n) => {
            n.d(t, {
                Q: () => r
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
                r = () => a((e => e))
        },
        "4CAz": (e, t, n) => {
            n.d(t, {
                Mh: () => C,
                zq: () => _,
                cM: () => S,
                OA: () => g,
                H6: () => h,
                Co: () => T,
                ob: () => v,
                RJ: () => A,
                Ti: () => E,
                Ck: () => N,
                oE: () => I
            });
            var a = n("mXdx"),
                r = n("DTvD"),
                o = n.n(r),
                i = n("wIZF"),
                s = n("qqbu");
            const c = function(e) {
                return o().createElement(s.A, (0, i.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M7 4h10v2h3v5h-3 3l-3.161 1.264a5.01 5.01 0 01-3.339 3.507V18h4.453v3h-12v-3H10.5v-2.229a5.013 5.013 0 01-3.226-3.134L4 11h3-3V6h3V4zm7 4h-4v3h4V8z",
                    fill: "currentColor"
                }))
            };
            const u = function(e) {
                return o().createElement(s.A, (0, i.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 3a7 7 0 00-7 7v3l-1 1v2h16v-2l-1-1v-3a7 7 0 00-7-7zm0 18a5.001 5.001 0 01-4.584-3h9.168A5.001 5.001 0 0112 21z",
                    fill: "currentColor"
                }))
            };
            const l = function(e) {
                return o().createElement(s.A, (0, i.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M20.01 3.991h-6.414L9.408 8.18l-4.943.055-2.821 2.82 4.59 4.592 3.528-3.528 2.121 2.121-3.528 3.528 4.593 4.594 2.822-2.821.053-4.947 4.187-4.188V3.991zM8.347 17.776l-2.121-2.122-2.12 2.12 2.122 2.12 2.119-2.118z",
                    fill: "currentColor"
                }))
            };
            const d = function(e) {
                return o().createElement(s.A, (0, i.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 19V5h18v14H3zM18 8H6v2.5h12V8zm-3 4.5h3V16h-3v-3.5zm-9 0V16h7v-3.5H6z",
                    fill: "currentColor"
                }))
            };
            const p = function(e) {
                return o().createElement(s.A, (0, i.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M9 4h11.5v12a4 4 0 01-4 4H8a3.5 3.5 0 01-3.5-3.5V10H9V4zm0 8.5H7v4a1 1 0 102 0v-4zM11.758 7h6v2h-6V7zm6 4h-6v2h6v-2z",
                    fill: "currentColor"
                }))
            };
            var f = n("lu7o"),
                m = n("blJy");
            const h = {
                    topLeft: "top-[70px] left-[20px]",
                    topRight: "top-[70px] right-[20px]",
                    bottomLeft: "bottom-[24px] left-[20px]",
                    bottomRight: "bottom-[24px] right-[20px]",
                    topCenter: "top-[64px] left-[15px] right-[15px]",
                    bottomCenter: "bottom-[14px] left-[8px] right-[8px]"
                },
                N = 16,
                A = [...[m.aW.ANNOUNCEMENT, m.aW.CAMPAIGN, m.aW.NEW_TRADING_PAIR, m.aW.BLOG, m.aW.WHAT_IS_HAPPENING, m.aW.NONE]].reverse(),
                E = [m.aW.ANNOUNCEMENT, m.aW.CAMPAIGN, m.aW.NEW_TRADING_PAIR, m.aW.BLOG, m.aW.WHAT_IS_HAPPENING, m.aW.NONE],
                I = E.reduce(((e, t) => ({ ...e,
                    [t]: !0
                })), {}),
                v = {
                    [m.aW.ANNOUNCEMENT]: ["important-notice", "Important Notice"],
                    [m.aW.CAMPAIGN]: ["hot-campaign", "Hot Campaign"],
                    [m.aW.NEW_TRADING_PAIR]: ["new-trading-pair", "New Trading Pair"],
                    [m.aW.BLOG]: ["new-blog", "New Blog"],
                    [m.aW.WHAT_IS_HAPPENING]: ["whats-happening", "What's Happening"],
                    [m.aW.NONE]: ["other", "Other"]
                },
                S = "HISTORY_FILTER_ALL",
                _ = [S, m.aW.ANNOUNCEMENT, m.aW.CAMPAIGN, m.aW.NEW_TRADING_PAIR],
                g = {
                    [S]: ["all", "All"],
                    [m.aW.ANNOUNCEMENT]: ["important-notice", "Important Notice"],
                    [m.aW.CAMPAIGN]: ["hot-campaign", "Hot Campaign"],
                    [m.aW.NEW_TRADING_PAIR]: ["new-trading-pair", "New Trading Pair"]
                },
                T = {
                    [S]: "all",
                    [m.aW.ANNOUNCEMENT]: "important_notice",
                    [m.aW.CAMPAIGN]: "hot_campaign",
                    [m.aW.NEW_TRADING_PAIR]: "new_trading_pair",
                    [m.aW.BLOG]: "new_blog",
                    [m.aW.WHAT_IS_HAPPENING]: "whats_happening",
                    [m.aW.NONE]: "other"
                },
                b = "w-[12px] h-[12px]",
                C = {
                    CAMPAIGN: {
                        icon: (0, a.jsx)(c, {
                            className: b
                        }),
                        key: "HotCampaign",
                        defaultValue: "Hot Campaign",
                        title: "hotCampaign"
                    },
                    ANNOUNCEMENT: {
                        icon: (0, a.jsx)(u, {
                            className: b
                        }),
                        key: "ImportantNotice",
                        defaultValue: "Important Notice",
                        title: "announcement"
                    },
                    NEW_TRADING_PAIR: {
                        icon: (0, a.jsx)(l, {
                            className: b
                        }),
                        key: "NewTradingPair",
                        defaultValue: "New Trading Pair",
                        title: "newTradingPairs"
                    },
                    [m.aW.BLOG]: {
                        icon: (0, a.jsx)(d, {
                            className: b
                        }),
                        key: v[m.aW.BLOG][0],
                        defaultValue: v[m.aW.BLOG][1],
                        title: "blog"
                    },
                    [m.aW.WHAT_IS_HAPPENING]: {
                        icon: (0, a.jsx)(p, {
                            className: b
                        }),
                        key: v[m.aW.WHAT_IS_HAPPENING][0],
                        defaultValue: v[m.aW.WHAT_IS_HAPPENING][1],
                        title: "whatIsHappening"
                    },
                    [m.aW.NONE]: {
                        icon: (0, a.jsx)(f.A, {
                            className: b
                        }),
                        key: v[m.aW.NONE][0],
                        defaultValue: v[m.aW.NONE][1],
                        title: "other"
                    }
                }
        },
        L6E9: (e, t, n) => {
            n.d(t, {
                X$: () => m,
                is: () => h,
                ud: () => f
            });
            var a = n("blJy"),
                r = n("DTvD"),
                o = n("Hf/4"),
                i = n("eAFj"),
                s = n("OVFS"),
                c = n("5K4W"),
                u = n("4CAz"),
                l = n("+KAX"),
                d = n("bBDr");
            const p = (0, i.A)(((e, t) => ({
                    data: null,
                    pushSettingSwitch: !0,
                    pushSettingMap: null,
                    async queryAnnouncementViewSetting({
                        isLoggedIn: t
                    }) {
                        if (void 0 === t) return;
                        const {
                            pushSettingMap: n,
                            pushSettingSwitch: r
                        } = await (async () => {
                            try {
                                const e = await s.LS.getItem(c.p.LOCAL_ANNOUNCEMENT_PUSH_SETTING),
                                    t = await s.LS.getItem(c.p.LOCAL_ANNOUNCEMENT_PUSH_SETTING_SWITCH);
                                return {
                                    pushSettingMap: e || u.oE,
                                    pushSettingSwitch: void 0 === t || null === t || t
                                }
                            } catch (e) {
                                return {
                                    pushSettingMap: u.oE,
                                    pushSettingSwitch: !0
                                }
                            }
                        })();
                        if (!t) return void e({
                            pushSettingMap: n,
                            pushSettingSwitch: r,
                            data: (0, l.RW)(n)
                        });
                        const {
                            success: o,
                            data: i
                        } = await (0, a.bM)();
                        if (o && "number" === typeof i) {
                            const t = i === (0, l.eh)();
                            e({
                                pushSettingMap: t ? n : (0, l.JW)(i),
                                pushSettingSwitch: !t,
                                data: i
                            })
                        } else e({
                            pushSettingMap: n,
                            pushSettingSwitch: r,
                            data: (0, l.RW)(n)
                        })
                    },
                    updateAnnouncementViewSetting({
                        type: n,
                        value: a
                    }) {
                        const r = { ...t().pushSettingMap,
                            [n]: a
                        };
                        e({
                            pushSettingMap: r,
                            pushSettingSwitch: (0, l.RW)(r) !== (0, l.eh)()
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
                f = () => p((e => e)),
                m = ({
                    isLoggedIn: e
                }) => {
                    const {
                        pushSettingMap: t,
                        pushSettingSwitch: n,
                        data: i,
                        updateDate: u
                    } = f(), {
                        activePanel: p,
                        visible: m
                    } = (0, d.Q)(), h = (0, o.A)(e), N = (0, o.A)(p), A = (0, o.A)(m), E = "setting" === N && "list" === p || A && !m, I = m && "setting" === p, v = (0, r.useCallback)((() => {
                        if (!t) return;
                        const r = n ? (0, l.RW)(t) : (0, l.eh)();
                        if (i !== r && (((e, t) => {
                                s.LS.setItem(c.p.LOCAL_ANNOUNCEMENT_PUSH_SETTING, e), s.LS.setItem(c.p.LOCAL_ANNOUNCEMENT_PUSH_SETTING_SWITCH, t)
                            })(t, n), u(r), h && e)) {
                            const e = n ? (0, l.RW)(t) : (0, l.eh)();
                            (0, a.u1)({
                                config: e
                            })
                        }
                    }), [i, t, n, u, h, e]);
                    (0, r.useEffect)((function() {
                        if (I) return window.addEventListener("beforeunload", v), () => window.removeEventListener("beforeunload", v)
                    }), [I, v]), (0, r.useEffect)((function() {
                        E && v()
                    }), [E, v])
                },
                h = e => e ? Object.keys(e).reduce(((t, n) => {
                    const a = e[n] ? "on" : "off";
                    return { ...t,
                        [`ann_push_${u.Co[n]}`]: a
                    }
                }), {}) : null
        },
        "+KAX": (e, t, n) => {
            n.d(t, {
                JW: () => d,
                RW: () => p,
                V8: () => s,
                W1: () => o,
                eh: () => l,
                u4: () => i
            });
            var a = n("O13v"),
                r = n("4CAz");
            const o = () => (new Date).setHours(23, 59, 59),
                i = ({
                    _track: e,
                    elementSelector: t,
                    elementId: n,
                    elementTargetUrl: a,
                    pageName: r = "",
                    dfSource: o = ""
                }) => {
                    e && e("$WebClick", {
                        module: "announcement_tool",
                        $element_selector: t,
                        $element_id: n,
                        $element_target_url: a,
                        pageName: r,
                        df_source: o
                    })
                };
            async function s({
                i18nInstance: e,
                language: t,
                i18nHost: n,
                namespace: r
            }) {
                e ? .hasResourceBundle(t, r) || e ? .addResourceBundle(t, r, await (0, a.TU)({
                    basePath: n,
                    locale: t,
                    namespace: r,
                    fallback: "en"
                }), !0, !0)
            }
            const c = r.RJ.length,
                u = r.Ck - c,
                l = () => parseInt(`${"1".repeat(u)}${"0".repeat(c)}`, 2),
                d = e => {
                    const t = e.toString(2).split("").reverse().map((e => Boolean(Number(e))));
                    return r.Ti.reduce(((e, n, a) => ({ ...e,
                        [n]: !!t[a]
                    })), {})
                },
                p = e => {
                    const t = r.RJ.map((t => e[t] ? "1" : "0")).join("");
                    return parseInt(`${"1".repeat(u)}${t}`, 2)
                }
        },
        NbzZ: (e, t, n) => {
            n.d(t, {
                t: () => p
            });
            var a = n("mXdx"),
                r = n("DTvD"),
                o = n.n(r),
                i = n("w2W/"),
                s = n("k+xn");
            const c = ({
                    sentryEventId: e,
                    name: t,
                    resetErrorBoundary: n
                }) => {
                    const o = (0, r.useCallback)((() => {
                            window.location.reload()
                        }), []),
                        c = (0, r.useCallback)((() => {
                            e && (0, i.l)(e)
                        }), [e]);
                    return (0, a.jsxs)("div", {
                        className: "error-boundary-default",
                        children: [(0, a.jsxs)("p", {
                            className: "error-boundary-default-tip",
                            children: ["Sorry, ", t || "something", " went wrong."]
                        }), !!e && (0, a.jsxs)("p", {
                            className: "error-boundary-default-id",
                            onClick: c,
                            children: [e, (0, a.jsx)(s.A, {})]
                        }), (0, a.jsxs)("p", {
                            className: "error-boundary-default-tip",
                            children: [(0, a.jsx)("span", {
                                className: "error-boundary-default-action",
                                onClick: n,
                                children: "Reload"
                            }), " ", "it or", " ", (0, a.jsx)("span", {
                                className: "error-boundary-default-action",
                                onClick: o,
                                children: "refresh"
                            }), " ", "the page."]
                        })]
                    })
                },
                u = {
                    hasError: !1,
                    error: null,
                    info: null,
                    sentryEventId: null
                },
                l = "fatal";
            let d = !1;
            class p extends o().Component {
                static getDerivedStateFromError() {
                    return {
                        hasError: !0
                    }
                }
                componentDidCatch(e, t) {
                    const {
                        name: n,
                        beforeCapture: a
                    } = this.props, r = t ? .componentStack;
                    console.error(`${n||"Something"} went wrong.`, e, r);
                    try {
                        if ("undefined" !== typeof window && "undefined" !== typeof window.Sentry) {
                            const t = window.Sentry.captureException(e, (function(t) {
                                return a ? .(t, e, r), t.setExtra("componentStack", r), t.setLevel(l), t.setTag("component", n || "ErrorBoundary ".concat(e.message)), t
                            }));
                            this.setState({
                                sentryEventId: t
                            })
                        }
                    } catch (o) {
                        console.error("Error reporting failed: ", o)
                    }
                    this.props.onError ? .(e, t ? .componentStack, null), this.setState({
                        error: e,
                        info: t,
                        hasError: !0
                    })
                }
                componentDidMount() {
                    const {
                        onComponentMounting: e
                    } = this.props;
                    e && e()
                }
                componentWillUnmount() {
                    const {
                        error: e,
                        info: t
                    } = this.state, {
                        onUnmount: n
                    } = this.props;
                    n && n(e, t ? .componentStack, null)
                }
                render() {
                    const {
                        error: e,
                        info: t,
                        hasError: n,
                        sentryEventId: r
                    } = this.state, {
                        fallbackRender: i,
                        FallbackComponent: s,
                        fallback: u,
                        name: l
                    } = this.props;
                    if (n) {
                        const n = {
                            componentStack: t ? .componentStack,
                            error: e,
                            resetErrorBoundary: this.resetErrorBoundary,
                            eventId: null
                        };
                        return o().isValidElement(u) ? u : "function" === typeof i ? i(n) : "function" === typeof s ? (0, a.jsx)(s, { ...n
                        }) : (0, a.jsx)(c, {
                            name: l,
                            sentryEventId: r,
                            resetErrorBoundary: this.resetErrorBoundary
                        })
                    }
                    return this.props.children
                }
                constructor(e) {
                    super(e), this.state = u, this.resetErrorBoundary = () => {
                        const {
                            error: e,
                            info: t,
                            sentryEventId: n
                        } = this.state, {
                            onReset: a
                        } = this.props;
                        a && a(e, t ? .componentStack, n), this.setState(u)
                    }, !d && "undefined" !== typeof Sentry && "addGlobalEventProcessor" in Sentry && (Sentry.addGlobalEventProcessor((e => {
                        try {
                            return e.level === l && e.exception && e.exception.values.forEach((e => {
                                e.mechanism.handled = !1
                            })), e
                        } catch (t) {
                            return e
                        }
                    })), d = !0)
                }
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
                LS: () => u,
                zr: () => d
            });
            var a = n("DTvD"),
                r = n("BmHO"),
                o = n.n(r),
                i = n("WT+B");
            const s = new(n("HwII").b),
                c = {
                    name: "futures-core"
                },
                u = o().createInstance({
                    name: c.name
                }),
                l = {
                    [c.name]: u
                },
                d = (e, t, n = c) => {
                    const {
                        name: r = "futures-core",
                        onError: u,
                        afterInit: d
                    } = n, [p, f] = (0, a.useState)(t), [m, h] = (0, a.useState)(!1), N = l[r] || o().createInstance({
                        name: r
                    });
                    N && !l[r] && (l[r] = N);
                    const A = (0, i.Z)((e => {
                            "function" === typeof u && u(e)
                        })),
                        E = (0, i.Z)((e => {
                            "function" === typeof d && d(e)
                        })),
                        I = (0, i.Z)((t => {
                            N.setItem(e, t).then((() => {
                                f(t), s.emit("LOCAL_FORAGE_UPDATE", {
                                    key: e,
                                    value: t
                                })
                            })).catch((e => {
                                A(e)
                            }))
                        }));
                    (0, a.useEffect)((function() {
                        return s.on("LOCAL_FORAGE_UPDATE", (({
                            key: t,
                            value: n
                        }) => {
                            t === e && p !== n && f(n)
                        }))
                    }), [e, p]), (0, a.useEffect)((() => {
                        (async () => {
                            try {
                                const t = await N.getItem(e);
                                f((n => {
                                    const a = null === t,
                                        r = a ? n : t;
                                    return a && N.setItem(e, r), E(r), r
                                })), h(!0)
                            } catch (t) {
                                A(t)
                            }
                        })()
                    }), [e, A, I, N, E]);
                    const v = (0, a.useCallback)((async () => await N.getItem(e)), [N, e]);
                    return {
                        data: p,
                        setData: I,
                        getData: v,
                        hasInitialized: m
                    }
                }
        },
        blJy: (e, t, n) => {
            n.d(t, {
                KJ: () => u,
                Sp: () => l,
                YX: () => p,
                aW: () => c,
                bM: () => f,
                ob: () => d,
                u1: () => m
            });
            var a = n("S+0I"),
                r = n("66mo"),
                o = n.n(r),
                i = n("VA12"),
                s = n("XqCI"),
                c = {
                    ANNOUNCEMENT: "ANNOUNCEMENT",
                    CAMPAIGN: "CAMPAIGN",
                    NEW_TRADING_PAIR: "NEW_TRADING_PAIR",
                    BLOG: "BLOG",
                    WHAT_IS_HAPPENING: "WHAT_IS_HAPPENING",
                    NONE: "NONE"
                },
                u = {
                    WEB: "WEB",
                    IOS: "IOS",
                    ANDROID: "ANDROID",
                    ELECTRON: "ELECTRON",
                    H5: "H5"
                },
                l = {
                    ALL: "ALL",
                    FUTURES: "FUTURES",
                    OPTIONS: "OPTIONS",
                    SPOT: "SPOT",
                    MARGIN: "MARGIN"
                },
                d = {
                    ALL: "ALL",
                    TRADING_PAGE: "TRADING_PAGE",
                    HOMEPAGE: "HOMEPAGE",
                    ACTIVITY_PAGE: "ACTIVITY_PAGE"
                },
                p = function() {
                    var e = (0, a._)(o().mark((function e(t) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, i.get)("/bapi/futures/v1/public/future/announcement/announcement-history-v2?".concat((0, s.E2)(t))));
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
                f = function() {
                    var e = (0, a._)(o().mark((function e() {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.abrupt("return", (0, i.post)("/bapi/futures/v1/private/future/announcement/announcement-view-setting"));
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
                m = function() {
                    var e = (0, a._)(o().mark((function e(t) {
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.abrupt("return", (0, i.post)("/bapi/futures/v1/private/future/announcement/save/announcement-view-setting", t));
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
        vjpm: (e, t, n) => {
            n.d(t, {
                Q: () => R
            });
            var a = n("mguP"),
                r = n("DTvD"),
                o = n.n(r),
                i = n("TGX5"),
                s = n.n(i),
                c = n("oOBz"),
                u = n("7so9"),
                l = n.n(u),
                d = n("hrAD"),
                p = n("1YyT"),
                f = n.n(p),
                m = f().oneOfType([f().string, f().number]),
                h = {
                    orientation: f().oneOf(["portrait", "landscape"]),
                    scan: f().oneOf(["progressive", "interlace"]),
                    aspectRatio: f().string,
                    deviceAspectRatio: f().string,
                    height: m,
                    deviceHeight: m,
                    width: m,
                    deviceWidth: m,
                    color: f().bool,
                    colorIndex: f().bool,
                    monochrome: f().bool,
                    resolution: m
                },
                N = (0, d._)({
                    minAspectRatio: f().string,
                    maxAspectRatio: f().string,
                    minDeviceAspectRatio: f().string,
                    maxDeviceAspectRatio: f().string,
                    minHeight: m,
                    maxHeight: m,
                    minDeviceHeight: m,
                    maxDeviceHeight: m,
                    minWidth: m,
                    maxWidth: m,
                    minDeviceWidth: m,
                    maxDeviceWidth: m,
                    minColor: f().number,
                    maxColor: f().number,
                    minColorIndex: f().number,
                    maxColorIndex: f().number,
                    minMonochrome: f().number,
                    maxMonochrome: f().number,
                    minResolution: m,
                    maxResolution: m
                }, h),
                A = {
                    all: f().bool,
                    grid: f().bool,
                    aural: f().bool,
                    braille: f().bool,
                    handheld: f().bool,
                    print: f().bool,
                    projection: f().bool,
                    screen: f().bool,
                    tty: f().bool,
                    tv: f().bool,
                    embossed: f().bool
                },
                E = (0, d._)({}, A, N);
            h.type = Object.keys(A);
            const I = {
                all: E,
                types: A,
                matchers: h,
                features: N
            };
            const v = function(e) {
                var t = [];
                return Object.keys(I.all).forEach((function(n) {
                    var a = e[n];
                    null != a && t.push(function(e, t) {
                        var n = (0, c.A)(e);
                        return "number" === typeof t && (t = "".concat(t, "px")), !0 === t ? n : !1 === t ? "not ".concat(n) : "(".concat(n, ": ").concat(t, ")")
                    }(n, a))
                })), t.join(" and ")
            };
            const S = o().createContext();
            var _ = function(e) {
                    if (!e) return null;
                    var t = Object.keys(e);
                    return 0 === t.length ? null : t.reduce((function(t, n) {
                        return t[(0, c.A)(n)] = e[n], t
                    }), {})
                },
                g = function() {
                    var e = o().useRef(!1);
                    return o().useEffect((function() {
                        e.current = !0
                    }), []), e.current
                },
                T = function(e) {
                    var t = function() {
                            return function(e) {
                                return e.query || v(e)
                            }(e)
                        },
                        n = (0, a._)(o().useState(t), 2),
                        r = n[0],
                        i = n[1];
                    return o().useEffect((function() {
                        var e = t();
                        r !== e && i(e)
                    }), [e]), r
                };
            const b = function(e, t, n) {
                var r = function(e) {
                        var t = o().useContext(S),
                            n = function() {
                                return _(e) || _(t)
                            },
                            r = (0, a._)(o().useState(n), 2),
                            i = r[0],
                            s = r[1];
                        return o().useEffect((function() {
                            var e = n();
                            l()(i, e) || s(e)
                        }), [e, t]), i
                    }(t),
                    i = T(e);
                if (!i) throw new Error("Invalid or missing MediaQuery!");
                var c = function(e, t) {
                        var n = function() {
                                return s()(e, t || {}, !!t)
                            },
                            r = (0, a._)(o().useState(n), 2),
                            i = r[0],
                            c = r[1],
                            u = g();
                        return o().useEffect((function() {
                            return u && c(n()),
                                function() {
                                    i.dispose()
                                }
                        }), [e, t]), i
                    }(i, r),
                    u = function(e) {
                        var t = (0, a._)(o().useState(e.matches), 2),
                            n = t[0],
                            r = t[1];
                        return o().useEffect((function() {
                            var t = function() {
                                r(e.matches)
                            };
                            return e.addListener(t), t(),
                                function() {
                                    e.removeListener(t)
                                }
                        }), [e]), n
                    }(c),
                    d = g();
                return o().useEffect((function() {
                    d && n && n(u)
                }), [u]), u
            };
            var C = "undefined" === typeof window,
                w = {
                    query: "screen and (max-width: 767px)"
                },
                O = {
                    query: "screen and (max-width: 1023px)"
                },
                y = {
                    query: "screen and (max-width: 1279px)"
                },
                L = {
                    query: "screen and (max-width: 1439px)"
                };

            function R() {
                if (C) return {
                    isMobile: !1,
                    isIPad: !1,
                    is13Desk: !1,
                    isLeastWebSize: !1
                };
                var e = b(w),
                    t = b(O),
                    n = b(y);
                return {
                    isMobile: e,
                    isIPad: t,
                    is13Desk: b(L),
                    isLeastWebSize: n
                }
            }
        },
        HwII: (e, t, n) => {
            n.d(t, {
                b: () => r
            });
            var a = n("Bkzn"),
                r = function e() {
                    var t = this;
                    (0, a._)(this, e), this.cbs = {}, this.on = function(e, n) {
                        var a = t;
                        return t.cbs[e] || (t.cbs[e] = []), t.cbs[e].push(n),
                            function() {
                                return a.off(e, n)
                            }
                    }, this.off = function(e, n) {
                        t.cbs[e] || (t.cbs[e] = []), t.cbs[e] = t.cbs[e].filter((function(e) {
                            return e !== n
                        }))
                    }, this.emit = function(e, n) {
                        t.cbs[e] || (t.cbs[e] = []), t.cbs[e].forEach((function(e) {
                            return "function" === typeof e && e(n)
                        }))
                    }
                }
        },
        OijF: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => H
            });
            var a = n("mguP"),
                r = n("mXdx"),
                o = n("DTvD"),
                i = n("blJy"),
                s = n("NbzZ"),
                c = n("hTvQ"),
                u = n("S9mB"),
                l = n("MD8j"),
                d = n("Ov3/"),
                p = n("fPZ3"),
                f = function(e, t) {
                    return "boolean" === typeof t ? t : !e
                };
            const m = function(e) {
                return (0, o.useReducer)(f, e)
            };
            var h = n("iOZB");
            const N = ({
                    isLastSlide: e,
                    countdownSeconds: t = 5
                }) => {
                    const n = (0, o.useRef)(t),
                        [a, r] = m(!1),
                        [i, s] = m(!1),
                        u = (0, o.useCallback)((() => {
                            n.current = t, (0, c.unstable_batchedUpdates)((() => {
                                s(!1), r(!1)
                            }))
                        }), [t, s, r]);
                    return (0, h.A)((() => {
                        e && (n.current--, 0 === n.current && r(!0))
                    }), i ? 1e3 : null), (0, o.useMemo)((() => ({
                        isIdle: a,
                        clearIdleStatus: u,
                        startWatchIdle: s
                    })), [u, a, s])
                },
                A = {
                    ids: [],
                    expiryTime: 0
                },
                E = () => {
                    const [e, t] = (0, d.A)("alreadyAlertAnn", A), {
                        ids: n = [],
                        expiryTime: a = 0
                    } = e || {};
                    return (0, h.A)((() => {
                        n.length && Date.now() > a && t({
                            ids: [],
                            expiryTime: 0
                        })
                    }), 1e3), (0, o.useMemo)((() => ({
                        alertedAnnInfo: e,
                        setAlertedAnnInfo: t
                    })), [e, t])
                };
            var I = n("jIw6"),
                v = n("vjpm");
            var S = n("EesX");
            const _ = {
                updateState: (e, t) => ({ ...e,
                    ...t
                })
            };
            var g = n("vYM6");
            const T = {
                    name: "announcementTool",
                    state: {
                        announcementInfos: [],
                        annIsInvalid: !1
                    },
                    reducers: { ..._
                    },
                    effects: e => ({
                        async queryAnnouncement({
                            lng: t
                        }) {
                            const {
                                success: n,
                                data: a
                            } = await (0, i.YX)({
                                language: t,
                                status: "RELEASED"
                            }) || {};
                            if (n) {
                                const t = a.map((({
                                    announcement: e,
                                    announcementDevices: t,
                                    announcementLanguages: n
                                }) => ({
                                    announcement: e,
                                    announcementDevices: t || [],
                                    announcementLanguage: (0, g.A)(n || [], "announcementId")
                                })));
                                e.announcementTool.updateState({
                                    announcementInfos: t,
                                    annIsInvalid: 0 === a.length
                                })
                            }
                        }
                    })
                },
                b = {
                    announcementTool: T
                },
                C = (0, S.init)({
                    name: "AnnouncementTool",
                    models: b
                });
            var w = n("4CAz"),
                O = n("+KAX");
            const y = (0, o.lazy)((() => Promise.all([n.e(5587), n.e(5), n.e(9992)]).then(n.bind(n, "EdYS")))),
                L = (0, o.memo)((({
                    i18nHost: e = "",
                    i18nInstance: t = u.A,
                    business: n = i.Sp.ALL,
                    scope: a = i.ob.ALL,
                    WS_HOST: s = "",
                    placement: l = "bottomRight",
                    sensorsTrack: f,
                    trackParams: m,
                    isLoggedIn: h
                }) => {
                    const [A, S] = (0, o.useState)(!1), [_, g] = (0, o.useState)({
                        activeIndex: 0,
                        isLastSlide: !1
                    }), {
                        activeIndex: T,
                        isLastSlide: b
                    } = _, [C, L] = (0, d.A)("alreadyReadAnn", []), {
                        annData: R,
                        annIsInvalid: P
                    } = (0, p.Ay)(n, a, s, h), {
                        isIdle: x,
                        startWatchIdle: W,
                        clearIdleStatus: M
                    } = N({
                        isLastSlide: b,
                        countdownSeconds: 5
                    }), {
                        alertedAnnInfo: D,
                        setAlertedAnnInfo: G
                    } = E(), {
                        ids: H = []
                    } = D || {}, k = (0, o.useMemo)((() => R.filter((({
                        annId: e
                    }) => !H ? .includes(e) && !C ? .includes(e)))), [C, R, H]), {
                        annId: U
                    } = k ? .[T] || {}, B = 1 === k.length, j = !!k.length, {
                        pageName: V,
                        dfSource: z
                    } = m || {}, $ = (0, o.useMemo)((() => ({
                        elementSelector: `${n}_${a}`,
                        elementTargetUrl: U,
                        pageName: V,
                        dfSource: z
                    })), [U, n, a, V, z]);
                    (0, I.A)(e, t), (({
                        track: e,
                        isPopup: t,
                        title: n = "",
                        annId: a = "",
                        pageName: r = "",
                        dfSource: i = ""
                    }) => {
                        const {
                            isMobile: s
                        } = (0, v.Q)();
                        (0, o.useEffect)((() => {
                            t && a && e && e("PopupView", {
                                eventName: "campaign_announce_dialog",
                                clientType: s ? "h5" : "web",
                                title: n,
                                item: a,
                                pageName: r,
                                df_source: i
                            })
                        }), [a, i, s, t, r, n, e])
                    })({
                        track: f,
                        isPopup: A,
                        title: w.Mh[k ? .[0] ? .annType] ? .title ? ? "none",
                        annId: k ? .[0] ? .annId ? ? "",
                        pageName: V,
                        dfSource: z
                    });
                    const F = (0, o.useCallback)((e => {
                            (0, O.u4)({
                                _track: f,
                                elementId: e,
                                ...$
                            })
                        }), [f, $]),
                        q = (0, o.useCallback)((e => {
                            L([...C || [], ...e])
                        }), [C, L]),
                        J = (0, o.useCallback)((() => {
                            (0, c.unstable_batchedUpdates)((() => {
                                S(!1), M()
                            }))
                        }), [M]);
                    return (0, o.useEffect)((() => {
                        !A && j && (0, c.unstable_batchedUpdates)((() => {
                            S(!0), W(!0)
                        }))
                    }), [j, B, W, A]), (0, o.useEffect)((() => {
                        g({
                            activeIndex: 0,
                            isLastSlide: B
                        })
                    }), [B]), (0, o.useEffect)((() => {
                        x && (0, c.unstable_batchedUpdates)((() => {
                            J();
                            const e = k.map((({
                                annId: e
                            }) => e));
                            G({
                                ids: [...H, ...e],
                                expiryTime: (0, O.W1)()
                            })
                        }))
                    }), [k, x, H, J, G]), (0, o.useEffect)((() => {
                        P && L([])
                    }), [P, L]), j && A ? (0, r.jsx)("div", {
                        className: `fixed z-[1002] w-auto md:w-[345px] ${w.H6[l]}`,
                        children: (0, r.jsx)(o.Suspense, {
                            fallback: null,
                            children: (0, r.jsx)(y, {
                                data: k,
                                updateAlreadyReadAnn: q,
                                closeAnnouncementToast: J,
                                onTrack: F,
                                setActiveSlide: g,
                                activeIndex: T
                            })
                        })
                    }) : null
                })),
                R = e => (0, r.jsx)(l.Kq, {
                    store: C,
                    children: (0, r.jsx)(L, { ...e
                    })
                });
            var P = n("bQ69"),
                x = n("Qhol"),
                W = n("wtFP"),
                M = n("iygL"),
                D = n("hAzz"),
                G = function(e) {
                    switch (e) {
                        case P.a0:
                            return "topRight";
                        case P.ND:
                            return "topCenter";
                        case P.Pv:
                        case P.ug:
                        default:
                            return "bottomRight"
                    }
                };
            const H = function() {
                var e = function() {
                        var e = (0, x.QsY)().isMobile,
                            t = (0, x.x$o)();
                        if (e) return P.ND;
                        switch (t) {
                            case P.ug:
                                return P.ug;
                            case P.a0:
                                return P.a0;
                            case P.Pv:
                            default:
                                return P.Pv
                        }
                    }(),
                    t = (0, a._)((0, x.Grl)(), 1)[0],
                    n = (0, x.x$o)(),
                    c = (0, x.$mR)(),
                    u = (0, o.useMemo)((function() {
                        return (0, D.V$)(t) ? "margin" : "spot"
                    }), [t]),
                    l = (0, o.useMemo)((function() {
                        var e = n === P.a0 ? "full" : n === P.ug ? "pro" : n === P.Pv ? "classic" : "";
                        return "".concat(u, "_trading_").concat(e)
                    }), [n, u]),
                    p = (0, x.nHk)(),
                    f = void 0 === (0, a._)((0, d.A)("tradeAlreadyView"), 1)[0] && !p;
                return P.S$ || f || c ? (0, r.jsx)(r.Fragment, {}) : (0, r.jsx)(s.t, {
                    name: "announcement",
                    children: (0, r.jsx)(R, {
                        business: (0, M.J)(t),
                        scope: i.ob.TRADING_PAGE,
                        i18nHost: P.HN,
                        WS_HOST: P.$L,
                        sensorsTrack: W.u4,
                        trackParams: {
                            pageName: l,
                            dfSource: u
                        },
                        placement: G(e),
                        isLoggedIn: p
                    })
                })
            }
        },
        iygL: (e, t, n) => {
            n.d(t, {
                J: () => o
            });
            var a = n("blJy"),
                r = n("bQ69"),
                o = function(e) {
                    switch (e) {
                        case r.Gr.ISOLATED:
                        case r.Gr.CROSS:
                            return a.Sp.MARGIN;
                        case r.Gr.SPOT:
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
                r = n("DTvD"),
                o = n.n(r),
                i = n("qqbu");
            const s = function(e) {
                return o().createElement(i.A, (0, a.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.002 7H16l4-4v16l-4-4h-4v6H7v-6H4.002V7z",
                    fill: "currentColor"
                }))
            }
        },
        TGX5: (e, t, n) => {
            var a = n("lRhT").Y,
                r = "undefined" !== typeof window ? window.matchMedia : null;

            function o(e, t, n) {
                var o = this;
                if (r && !n) {
                    var i = r.call(window, e);
                    this.matches = i.matches, this.media = i.media, i.addListener(s)
                } else this.matches = a(e, t), this.media = e;

                function s(e) {
                    o.matches = e.matches, o.media = e.media
                }
                this.addListener = function(e) {
                    i && i.addListener(e)
                }, this.removeListener = function(e) {
                    i && i.removeListener(e)
                }, this.dispose = function() {
                    i && i.removeListener(s)
                }
            }
            e.exports = function(e, t, n) {
                return new o(e, t, n)
            }
        },
        "7so9": e => {
            e.exports = function(e, t) {
                if (e === t) return !0;
                if (!e || !t) return !1;
                var n = Object.keys(e),
                    a = Object.keys(t),
                    r = n.length;
                if (a.length !== r) return !1;
                for (var o = 0; o < r; o++) {
                    var i = n[o];
                    if (e[i] !== t[i] || !Object.prototype.hasOwnProperty.call(t, i)) return !1
                }
                return !0
            }
        }
    }
]);