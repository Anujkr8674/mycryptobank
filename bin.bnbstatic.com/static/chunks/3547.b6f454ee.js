(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [3547], {
        l35J: (e, t, r) => {
            "use strict";
            r.d(t, {
                r: () => u
            });
            var n = r("DTvD"),
                a = r("9YZR"),
                i = r("qGQ4"),
                o = r("f3y+"),
                s = r("sTk4"),
                c = r("rPbR");
            const u = ({
                drawingSyncEnabled: e,
                indicatorSyncEnabled: t,
                namespace: r,
                type: u,
                symbol: l,
                toIndicatorSettingIdHelper: d
            }) => {
                const f = (0, c.createStore)(r),
                    [p] = f(c.getCandlestickReference),
                    m = (0, n.useRef)([]),
                    v = (0, n.useRef)({}),
                    g = (0, n.useCallback)((async ({
                        payload: {
                            annotations: t
                        },
                        annotationsStoreKey: r,
                        storage: n
                    }) => {
                        await (0, o.UN)({
                            cloudEnabled: e,
                            annotations: t,
                            symbol: l,
                            type: u,
                            storage: n,
                            annotationsStoreKey: r,
                            unknownAnnotations: m.current
                        })
                    }), [e, l, u]),
                    M = (0, n.useCallback)((async ({
                        payload: {
                            indicators: e,
                            indicatorSetting: r
                        },
                        indicatorStoreKey: n,
                        indicatorSettingStoreKey: a,
                        storage: i
                    }) => {
                        await (0, s.UN)({
                            cloudEnabled: t,
                            indicatorStoreKey: n,
                            indicatorSettingStoreKey: a,
                            storage: i,
                            indicators: e,
                            indicatorSetting: r,
                            initialIndicatorSetting: v.current
                        })
                    }), [t]),
                    b = (0, n.useCallback)((async ({
                        payload: {
                            setting: e
                        },
                        settingStoreKey: t,
                        storage: r
                    }) => {
                        await r.setItem(t, e)
                    }), []),
                    y = (0, n.useCallback)((async ({
                        storage: r,
                        indicatorStoreKey: n,
                        annotationsStoreKey: a,
                        indicatorSettingStoreKey: c,
                        settingStoreKey: f
                    }) => {
                        const g = await (0, i.m)({
                            drawing: {
                                enabled: e,
                                symbol: l,
                                type: u
                            },
                            indicator: {
                                enabled: t
                            }
                        });
                        v.current = g.find((e => "techInd" === e.type)) ? .data || {};
                        const {
                            indicators: M,
                            indicatorSetting: b
                        } = await (0, s.Hh)({
                            cloudEnabled: t,
                            indicatorStoreKey: n,
                            indicatorSettingStoreKey: c,
                            storage: r,
                            cloudData: g,
                            toIndicatorSettingIdHelper: d,
                            candlestick: p
                        }), {
                            annotations: y,
                            unknown: h
                        } = await (0, o.Hh)({
                            cloudEnabled: e,
                            annotationsStoreKey: a,
                            storage: r,
                            symbol: l,
                            type: u,
                            settingsData: g
                        });
                        m.current = h;
                        return {
                            indicators: M,
                            annotations: y,
                            indicatorSetting: b,
                            setting: await r.getItem(f)
                        }
                    }), [e, t, l, u, d, p]),
                    h = (0, n.useCallback)((({
                        storage: e
                    }) => {
                        e.clear()
                    }), []),
                    j = (0, n.useMemo)((() => (0, a.aq)({
                        type: "cloud",
                        namespace: r,
                        symbol: l,
                        saveAnnotations: g,
                        saveIndicators: M,
                        saveSettings: b,
                        load: y,
                        clear: h
                    })), [g, M, b, h, y, r, l]);
                return (0, n.useMemo)((() => e || t ? j : void 0), [j, e, t])
            }
        },
        Wbjr: (e, t, r) => {
            "use strict";
            r.d(t, {
                Tl: () => s,
                Yc: () => c
            });
            var n = r("S+0I"),
                a = r("66mo"),
                i = r.n(a),
                o = r("VA12"),
                s = (function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/accounts/v1/private/account/user/order-confirm-status", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/accounts/v1/private/account/user/order-confirm-statusV2", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/usermodule/update", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/usermodule/updateV2", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/usermodule/updateV3", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/apex/v1/private/apex/inbox/usermodule/updateV3", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/userlanguage/select");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/composite/v1/public/push-center/preference/language/all-language");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/composite/v1/private/push-center/preference/language/user-language");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/language/saveupdate", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/push-center/preference/language/save-user-language", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/config/language");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/accounts/v1/private/account/user-personal-config/get-marketing-analytics-status");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/accounts/v1/private/account/user-personal-config/modify-marketing-analytics-status", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/query", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/updateAvatar", t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        var r, n, a, s, c;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.params, n = void 0 === r ? {} : r, a = t.opts, s = void 0 === a ? {} : a, e.next = 3, (0, o.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/updateNickName", n, s);
                                case 3:
                                    return c = e.sent, e.abrupt("return", c);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e() {
                        var t;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/apex/v1/private/apex/marketing/user/current/profile/avatar/default-list");
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, o.post)("/bapi/futures/v1/private/future/user-setting/get-saved-preferences", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                c = function() {
                    var e = (0, n._)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, o.post)("/bapi/futures/v1/private/future/user-setting/update-saved-preferences", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            ! function() {
                var e = (0, n._)(i().mark((function e(t) {
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, o.post)("/bapi/futures/v1/private/future/user-setting/reset-saved-preferences", t));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }()
        },
        "0Rlb": (e, t, r) => {
            "use strict";
            r.d(t, {
                M: () => M
            });
            var n = r("mguP"),
                a = r("DTvD"),
                i = r("UXyB");
            const o = function() {};
            const s = function(e) {
                return void 0 === e
            };
            const c = function(e) {
                return null == e
            };
            var u = function() {
                return "undefined" !== typeof window && window.localStorage
            };
            !u() && console.warn("localStorage API is unavailable.");
            var l = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                    try {
                        return u() ? e(window.localStorage) : t()
                    } catch (r) {
                        console.error("[growth-utils:storage] localStorage:", r)
                    }
                },
                d = function(e, t) {
                    return l((function(r) {
                        s(t) || r.setItem(e, JSON.stringify(t))
                    }))
                },
                f = function(e) {
                    return l((function(t) {
                        return t.removeItem(e)
                    }))
                },
                p = function(e, t) {
                    return l((function(r) {
                        var n = r.getItem(e);
                        if (c(n) && !s(t)) return d(e, t), t;
                        try {
                            return JSON.parse(n)
                        } catch (a) {
                            return console.error("[growth-utils:storage] localStorage:", a), n
                        }
                    }), (function() {
                        return t
                    }))
                };
            const m = p,
                v = d,
                g = f;
            var M = function(e, t) {
                var r = (0, n._)((0, a.useState)((function() {
                        return m(e, t)
                    })), 2),
                    o = r[0],
                    s = r[1],
                    c = (0, a.useCallback)((function() {
                        s(void 0), g(e)
                    }), [e]);
                return (0, i.A)((function() {
                    return v(e, o)
                }), [e, o]), [o, s, c]
            }
        },
        ZHed: (e, t, r) => {
            "use strict";
            r.d(t, {
                AK: () => c,
                Wb: () => l,
                hi: () => d,
                rQ: () => f
            });
            var n = r("MD8j"),
                a = r("eWL+"),
                i = r("zx3+"),
                o = r("Vy0f"),
                s = r("DTvD");

            function c(e, t) {
                for (var r = t.num, n = t.level, a = t.desc, i = e.tree.slice(), o = e.levelById, s = []; i.length > 0;) {
                    var c = (a ? i.pop() : i.shift()) || {},
                        u = c.price,
                        l = c.levelID,
                        d = c.level,
                        f = c.children;
                    if (d === n) {
                        var p = o[l];
                        if (p && u && s.push({
                                price: u,
                                amount: p.amount,
                                total: p.total
                            }), r && s.length >= r) break
                    } else f && (i = a ? i.concat(f) : null === f || void 0 === f ? void 0 : f.concat(i))
                }
                return a ? s : s.reverse()
            }
            var u = ["0.001", "0.01", "0.1", "1"];

            function l(e, t) {
                var r = (0, n.d4)((function(t) {
                        return t.exchangeInfo.infos[e]
                    })),
                    c = ((null === r || void 0 === r ? void 0 : r.levels) && Array.isArray(null === r || void 0 === r ? void 0 : r.levels) && (null === r || void 0 === r ? void 0 : r.levels.length) > 0 ? r : {
                        levels: u
                    }).levels,
                    l = ((0, a.hF)()[e] || {}).minQty,
                    d = void 0 === l ? "0.00000001" : l,
                    f = (0, i.w1)(Number(d)),
                    p = (0, s.useReducer)((function(e) {
                        return -1 * e
                    }), 1)[1],
                    m = (0, s.useState)((0, o.SN)(c, f)),
                    v = m[0],
                    g = m[1];
                return (0, s.useEffect)((function() {
                    var r = t.getOrderbookStore(e, {
                        levels: c,
                        quantityPrecision: f
                    });
                    return g(r.getState()), r.subscribe((function(e) {
                        p(), g(e)
                    }))
                }), [e, JSON.stringify(c), f, p]), v
            }

            function d(e, t, r) {
                var n = r.num,
                    a = r.level;
                return c(l(e, t).bid, {
                    num: n,
                    level: a,
                    desc: !0
                })
            }

            function f(e, t, r) {
                var n = r.num,
                    a = r.level;
                return c(l(e, t).ask, {
                    num: n,
                    level: a,
                    desc: !1
                })
            }
        },
        l38Q: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, {
                default: () => at
            });
            var n = r("mguP"),
                a = r("mXdx"),
                i = r("DTvD"),
                o = r("oQEc"),
                s = r("hufm"),
                c = r("cvvB"),
                u = r("l35J"),
                l = r("NbzZ"),
                d = r("Qhol"),
                f = r("FWGn"),
                p = r("FkjH"),
                m = r("hAzz"),
                v = r("FyDe"),
                g = r("J+BU"),
                M = r("b9LU"),
                b = r("wtFP"),
                y = r("d+Ar"),
                h = r("3aNG"),
                j = function(e) {
                    var t = e.type,
                        r = e.isSpot;
                    "chart-trading" === e.source ? (0, b.u4)("$WebClick", {
                        pageName: (0, h.bg)(r),
                        df_source: (0, h.YT)(r),
                        module: "chart",
                        $element_id: "plus_icon",
                        type: t
                    }) : (0, b.u4)("$WebClick", {
                        df_source: "spot",
                        module: "right_click",
                        $element_id: "place_new_order",
                        type: t
                    })
                },
                I = r("KrVi"),
                w = r("WrUx"),
                k = r("hYIL"),
                S = new RegExp(/.*grid.*/),
                x = r("CLKF"),
                N = function(e) {
                    (0, b.u4)("$WebClick", {
                        module: "original_kline",
                        $element_id: e,
                        pageName: "spot_trading",
                        df_source: "spot"
                    })
                },
                T = r("S+0I"),
                z = r("d12p"),
                _ = r("jbFV"),
                D = r.n(_),
                C = r("MD8j"),
                A = r("OlNZ"),
                L = r.n(A),
                Y = r("zHUU"),
                E = r("J+v0"),
                P = r.n(E),
                Z = r("lhQG"),
                O = r.n(Z),
                V = r("lW1t"),
                B = function(e) {
                    return e ? "spot_kline" : "margin_kline"
                },
                R = function(e) {
                    var t = e.isSpot,
                        r = e.url,
                        n = e.elementId,
                        a = e.displayAllSymbol;
                    (0, b.u4)("$WebClick", {
                        pageName: B(t),
                        $element_id: n,
                        $url: r,
                        mode: a ? "display_all_currency_information" : "display_current_currency_information"
                    })
                },
                U = function(e) {
                    var t = e.isSpot,
                        r = e.url,
                        n = e.elementId;
                    (0, b.u4)("ModuleView", {
                        pagename: B(t),
                        $element_id: n,
                        $url: r
                    })
                },
                W = function(e) {
                    var t = e.id,
                        r = e.type,
                        n = e.index;
                    (0, b.u4)("df_pageview", {
                        $element_id: "binance_web_feed_content_card_view",
                        df_source: "spot_spotlight",
                        df_10: r,
                        df_8: n,
                        df_6: t
                    })
                },
                H = r("VA12"),
                G = r("XqCI"),
                Q = function(e) {
                    return (0, H.get)("/bapi/asset/v1/public/asset-service/spot-light/get-category-info-by-symbol?".concat((0, G.E2)(e)))
                },
                K = r("hrAD"),
                X = r("vCb5"),
                F = r.n(X),
                J = r("iKvg"),
                q = r("qoEP"),
                $ = r("Ov3/"),
                ee = function(e) {
                    var t = e.symbol,
                        r = e.isMobile,
                        a = e.enabled,
                        o = (0, i.useState)([]),
                        s = o[0],
                        c = o[1],
                        u = (0, i.useState)(!1),
                        l = u[0],
                        f = u[1],
                        p = (0, i.useState)(!0),
                        m = p[0],
                        v = p[1],
                        g = (0, i.useRef)(1),
                        M = (0, d.i24)(),
                        b = function(e) {
                            var t = e.symbol,
                                r = (0, n._)((0, $.A)("spot-last-latest-spotlight-id", {}), 2),
                                a = r[0],
                                o = void 0 === a ? {} : a,
                                s = r[1],
                                c = (0, i.useState)(o),
                                u = c[0],
                                l = c[1],
                                d = (0, i.useCallback)((function(e) {
                                    var t = e.symbol,
                                        r = e.id;
                                    l((function(e) {
                                        var n = (0, q._)((0, K._)({}, e), (0, J._)({}, t, r));
                                        return s(n), n
                                    }))
                                }), [l, s]);
                            return {
                                lastId: (0, i.useMemo)((function() {
                                    return t && u[t] || "-1"
                                }), [u, t]),
                                lastIdRecord: u,
                                setLastIdRecord: d
                            }
                        }({
                            symbol: t
                        }),
                        y = b.lastId,
                        h = b.setLastIdRecord,
                        j = (0, d.gh4)("Display_currency_information", "Display_all_currency_information"),
                        I = (0, i.useMemo)((function() {
                            return (s[0] || {}).id
                        }), [s]),
                        w = (0, i.useCallback)((function(e) {
                            c((function(t) {
                                return F()(t.concat(e), "id")
                            })), g.current > 1 && e.forEach((function(e, t) {
                                return W({
                                    id: e.id,
                                    type: 2 === e.sourceType ? "annoucement" : "news",
                                    index: t
                                })
                            }))
                        }), []),
                        k = (0, i.useCallback)((function() {
                            t && (h({
                                symbol: t,
                                id: I
                            }), f(!1))
                        }), [I, h, t]),
                        S = (0, i.useCallback)(function() {
                            var e = (0, T._)(D().mark((function e(r) {
                                var n, a;
                                return D().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, i = (0, K._)({
                                                pageIndex: r,
                                                pageSize: 10
                                            }, t ? {
                                                token: t
                                            } : {}), (0, H.get)("/bapi/composite/v1/public/pgc/feed/news/spotlight?".concat((0, G.E2)(i)));
                                        case 2:
                                            return n = e.sent, a = n.data || [], v(a.length > 0), w(a), e.abrupt("return", a);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                    var i
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [w, t]),
                        x = (0, i.useCallback)((0, T._)(D().mark((function e() {
                            var t;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return g.current += 1, e.next = 3, S(g.current);
                                    case 3:
                                        return t = e.sent, R({
                                            elementId: "view_more",
                                            isSpot: M,
                                            displayAllSymbol: j,
                                            url: ""
                                        }), e.abrupt("return", t.map((function(e) {
                                            return e.id
                                        })));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [S, j, M]);
                    return (0, i.useEffect)((function() {
                        !r && a ? (c([]), g.current = 1, S(g.current)) : c([])
                    }), [S, r, a]), (0, i.useEffect)((function() {
                        s.length < 1 || g.current > 1 || f(y !== I)
                    }), [s, I, y]), {
                        data: s,
                        nextPage: x,
                        hasMoreNews: m,
                        showRedDot: l,
                        setAsVisited: k
                    }
                },
                te = r("iOZB");
            P().extend(O());
            var re = "latest-news",
                ne = {
                    dark: {
                        inactive: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgcng9IjUuNSIgZmlsbD0iIzE4MUEyMCIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgcng9IjUuNSIgc3Ryb2tlPSIjMkIzMTM5Ii8+CjxwYXRoIGQ9Ik01IDlINy42NjY2N1YxNC4zMzMzQzcuNjY2NjcgMTUuMDY5NyA3LjA2OTcxIDE1LjY2NjcgNi4zMzMzMyAxNS42NjY3TC1uYW4gLW5hbkw2LjMzMzMzIDE1LjY2NjdDNS41OTY5NSAxNS42NjY3IDUgMTUuMDY5NyA1IDE0LjMzMzNWOVoiIGZpbGw9IiNGMEI5MEIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy42NjYgNUg4Ljk5OTM1VjE1QzguOTk5MzUgMTUuNzM2NCA4LjQwMjM5IDE2LjMzMzMgNy42NjYwMiAxNi4zMzMzSDE0Ljk5OTRDMTYuNDcyMSAxNi4zMzMzIDE3LjY2NiAxNS4xMzk0IDE3LjY2NiAxMy42NjY3VjVaTTE1LjQ5OTMgMTIuMzMzM0wxMS4xNjYgMTIuMzMzM1YxMC42NjY3SDE1LjQ5OTNWMTIuMzMzM1pNMTEuMTY2IDkuMzMzMzNMMTUuNDk5MyA5LjMzMzMzVjcuNjY2NjdIMTEuMTY2VjkuMzMzMzNaIiBmaWxsPSIjODQ4RTlDIi8+Cjwvc3ZnPgo=",
                        hover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgcng9IjUuNSIgZmlsbD0iIzE4MUEyMCIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgcng9IjUuNSIgc3Ryb2tlPSIjRUFFQ0VGIi8+CjxwYXRoIGQ9Ik01IDlINy42NjY2N1YxNC4zMzMzQzcuNjY2NjcgMTUuMDY5NyA3LjA2OTcxIDE1LjY2NjcgNi4zMzMzMyAxNS42NjY3TC1uYW4gLW5hbkw2LjMzMzMzIDE1LjY2NjdDNS41OTY5NSAxNS42NjY3IDUgMTUuMDY5NyA1IDE0LjMzMzNWOVoiIGZpbGw9IiNGMEI5MEIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy42NjYgNUg4Ljk5OTM1VjE1QzguOTk5MzUgMTUuNzM2NCA4LjQwMjM5IDE2LjMzMzMgNy42NjYwMiAxNi4zMzMzSDE0Ljk5OTRDMTYuNDcyMSAxNi4zMzMzIDE3LjY2NiAxNS4xMzk0IDE3LjY2NiAxMy42NjY3VjVaTTE1LjQ5OTMgMTIuMzMzM0wxMS4xNjYgMTIuMzMzM1YxMC42NjY3SDE1LjQ5OTNWMTIuMzMzM1pNMTEuMTY2IDkuMzMzMzNMMTUuNDk5MyA5LjMzMzMzVjcuNjY2NjdIMTEuMTY2VjkuMzMzMzNaIiBmaWxsPSIjODQ4RTlDIi8+Cjwvc3ZnPgo=",
                        active: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgcng9IjUuNSIgZmlsbD0iIzE4MUEyMCIgZmlsbC1vcGFjaXR5PSIwLjUiLz4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgcng9IjUuNSIgc3Ryb2tlPSIjRUFFQ0VGIi8+CjxwYXRoIGQ9Ik01IDlINy42NjY2N1YxNC4zMzMzQzcuNjY2NjcgMTUuMDY5NyA3LjA2OTcxIDE1LjY2NjcgNi4zMzMzMyAxNS42NjY3TC1uYW4gLW5hbkw2LjMzMzMzIDE1LjY2NjdDNS41OTY5NSAxNS42NjY3IDUgMTUuMDY5NyA1IDE0LjMzMzNWOVoiIGZpbGw9IiNGMEI5MEIiLz4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNy42NjYgNUg4Ljk5OTM1VjE1QzguOTk5MzUgMTUuNzM2NCA4LjQwMjM5IDE2LjMzMzMgNy42NjYwMiAxNi4zMzMzSDE0Ljk5OTRDMTYuNDcyMSAxNi4zMzMzIDE3LjY2NiAxNS4xMzk0IDE3LjY2NiAxMy42NjY3VjVaTTE1LjQ5OTMgMTIuMzMzM0wxMS4xNjYgMTIuMzMzM1YxMC42NjY3SDE1LjQ5OTNWMTIuMzMzM1pNMTEuMTY2IDkuMzMzMzNMMTUuNDk5MyA5LjMzMzMzVjcuNjY2NjdIMTEuMTY2VjkuMzMzMzNaIiBmaWxsPSIjODQ4RTlDIi8+Cjwvc3ZnPgo="
                    },
                    light: {
                        inactive: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgcng9IjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHJ4PSI1LjUiIHN0cm9rZT0iI0VBRUNFRiIvPgo8cGF0aCBkPSJNNSA5SDcuNjY2NjdWMTQuMzMzM0M3LjY2NjY3IDE1LjA2OTcgNy4wNjk3MSAxNS42NjY3IDYuMzMzMzMgMTUuNjY2N0wtbmFuIC1uYW5MNi4zMzMzMyAxNS42NjY3QzUuNTk2OTUgMTUuNjY2NyA1IDE1LjA2OTcgNSAxNC4zMzMzVjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNjY2IDVIOC45OTkzNVYxNUM4Ljk5OTM1IDE1LjczNjQgOC40MDIzOSAxNi4zMzMzIDcuNjY2MDIgMTYuMzMzM0gxNC45OTk0QzE2LjQ3MjEgMTYuMzMzMyAxNy42NjYgMTUuMTM5NCAxNy42NjYgMTMuNjY2N1Y1Wk0xNS40OTkzIDEyLjMzMzNMMTEuMTY2IDEyLjMzMzNWMTAuNjY2N0gxNS40OTkzVjEyLjMzMzNaTTExLjE2NiA5LjMzMzMzTDE1LjQ5OTMgOS4zMzMzM1Y3LjY2NjY3SDExLjE2NlY5LjMzMzMzWiIgZmlsbD0iIzkyOUFBNSIvPgo8L3N2Zz4K",
                        hover: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgcng9IjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHJ4PSI1LjUiIHN0cm9rZT0iIzIwMjYzMCIvPgo8cGF0aCBkPSJNNSA5SDcuNjY2NjdWMTQuMzMzM0M3LjY2NjY3IDE1LjA2OTcgNy4wNjk3MSAxNS42NjY3IDYuMzMzMzMgMTUuNjY2N0wtbmFuIC1uYW5MNi4zMzMzMyAxNS42NjY3QzUuNTk2OTUgMTUuNjY2NyA1IDE1LjA2OTcgNSAxNC4zMzMzVjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNjY2IDVIOC45OTkzNVYxNUM4Ljk5OTM1IDE1LjczNjQgOC40MDIzOSAxNi4zMzMzIDcuNjY2MDIgMTYuMzMzM0gxNC45OTk0QzE2LjQ3MjEgMTYuMzMzMyAxNy42NjYgMTUuMTM5NCAxNy42NjYgMTMuNjY2N1Y1Wk0xNS40OTkzIDEyLjMzMzNMMTEuMTY2IDEyLjMzMzNWMTAuNjY2N0gxNS40OTkzVjEyLjMzMzNaTTExLjE2NiA5LjMzMzMzTDE1LjQ5OTMgOS4zMzMzM1Y3LjY2NjY3SDExLjE2NlY5LjMzMzMzWiIgZmlsbD0iIzkyOUFBNSIvPgo8L3N2Zz4K",
                        active: "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjIiIGhlaWdodD0iMjIiIHZpZXdCb3g9IjAgMCAyMiAyMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIyMSIgaGVpZ2h0PSIyMSIgcng9IjUuNSIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC41Ii8+CjxyZWN0IHg9IjAuNSIgeT0iMC41IiB3aWR0aD0iMjEiIGhlaWdodD0iMjEiIHJ4PSI1LjUiIHN0cm9rZT0iIzIwMjYzMCIvPgo8cGF0aCBkPSJNNSA5SDcuNjY2NjdWMTQuMzMzM0M3LjY2NjY3IDE1LjA2OTcgNy4wNjk3MSAxNS42NjY3IDYuMzMzMzMgMTUuNjY2N0wtbmFuIC1uYW5MNi4zMzMzMyAxNS42NjY3QzUuNTk2OTUgMTUuNjY2NyA1IDE1LjA2OTcgNSAxNC4zMzMzVjlaIiBmaWxsPSIjRjBCOTBCIi8+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMTcuNjY2IDVIOC45OTkzNVYxNUM4Ljk5OTM1IDE1LjczNjQgOC40MDIzOSAxNi4zMzMzIDcuNjY2MDIgMTYuMzMzM0gxNC45OTk0QzE2LjQ3MjEgMTYuMzMzMyAxNy42NjYgMTUuMTM5NCAxNy42NjYgMTMuNjY2N1Y1Wk0xNS40OTkzIDEyLjMzMzNMMTEuMTY2IDEyLjMzMzNWMTAuNjY2N0gxNS40OTkzVjEyLjMzMzNaTTExLjE2NiA5LjMzMzMzTDE1LjQ5OTMgOS4zMzMzM1Y3LjY2NjY3SDExLjE2NlY5LjMzMzMzWiIgZmlsbD0iIzkyOUFBNSIvPgo8L3N2Zz4K"
                    }
                },
                ae = /%language%/,
                ie = function(e) {
                    var t = e.symbol,
                        a = e.namespace,
                        o = c.t1.Store.createStore(a),
                        s = c.t1.SessionStore.createStore(a),
                        u = (0, n._)(o(c.t1.Store.getInterval), 1)[0],
                        l = (0, n._)(s(c.t1.SessionStore.getShowMoreSettingTooltip), 2)[1],
                        f = (0, C.d4)(V.makeComplianceDisabledTags),
                        p = ((0, d.hFK)()[t] || {}).baseAsset,
                        m = (0, Y.po)(),
                        v = (0, d.DPo)(),
                        g = (0, d.QsY)().isMobile,
                        M = (0, d.i24)(),
                        y = (0, d.ok2)().getI18n,
                        h = (0, d.gh4)("Display_currency_information", "Display_all_currency_information"),
                        j = (0, d.gh4)("Display_currency_information", "Display_currency_information"),
                        I = (0, d.Bm2)("Spotlight"),
                        w = (0, i.useMemo)((function() {
                            return u === c.t1.Store.DisplayIntervals["1s"]
                        }), [u]),
                        k = function(e) {
                            var t = e.isMobile,
                                r = e.enabled,
                                n = e.symbol,
                                a = e.langCode,
                                o = (0, i.useState)([]),
                                s = o[0],
                                c = o[1],
                                u = (0, i.useCallback)(function() {
                                    var e = (0, T._)(D().mark((function e(t) {
                                        var r;
                                        return D().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, Q({
                                                        symbol: t.symbol,
                                                        symbolType: "SPOT",
                                                        clientType: "WEB",
                                                        lang: t.langCode
                                                    });
                                                case 2:
                                                    r = e.sent, c(r.data || []);
                                                case 4:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(), []);
                            return (0, i.useEffect)((function() {
                                !t && r && u({
                                    symbol: n,
                                    langCode: a
                                })
                            }), [n, t, r, a, u]), s
                        }({
                            isMobile: g,
                            enabled: I,
                            symbol: t,
                            langCode: m
                        }),
                        S = ee({
                            isMobile: g,
                            enabled: I && !j && !w,
                            symbol: h ? void 0 : p
                        }),
                        x = S.data,
                        N = S.nextPage,
                        _ = S.hasMoreNews,
                        A = S.showRedDot,
                        E = S.setAsVisited,
                        Z = (0, i.useMemo)((function() {
                            return y("spotlight-title-headlines", {
                                defaultValue: "Spotlight"
                            }) || ""
                        }), [y]),
                        O = (0, i.useMemo)((function() {
                            return y("spotlight-tag-news", {
                                defaultValue: "News"
                            }) || ""
                        }), [y]),
                        B = (0, i.useMemo)((function() {
                            return y("spotlight-tag-announcement", {
                                defaultValue: "Announcement"
                            }) || ""
                        }), [y]),
                        H = (0, i.useMemo)((function() {
                            return "zh-tc" === (e = m).toLowerCase() ? "zh-tw" : e;
                            var e
                        }), [m]);
                    (0, i.useEffect)((function() {
                        var e = function() {
                            var e = (0, T._)(D().mark((function e() {
                                return D().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.prev = 0, e.next = 3, r("VYio")("./".concat(H));
                                        case 3:
                                            e.next = 7;
                                            break;
                                        case 5:
                                            e.prev = 5, e.t0 = e.catch(0);
                                        case 7:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e, null, [
                                    [0, 5]
                                ])
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        e()
                    }), [H]);
                    var G = (0, i.useMemo)((function() {
                            return v.isLight
                        }), [v]),
                        K = (0, i.useMemo)((function() {
                            return "/support/faq/binance-feed-community-platform-terms-and-conditions-5dfcea5fbc0d4c4c9c90c2597f3da358"
                        }), []),
                        X = (0, i.useMemo)((function() {
                            return G ? ne.light : ne.dark
                        }), [G]),
                        F = (0, i.useMemo)((function() {
                            return k.reduce((function(e, t, r) {
                                var n, a = {
                                        id: r.toString(),
                                        title: t.title,
                                        normalIconUrl: G ? t.iconWebLight : t.iconWebDark,
                                        hoveredIconUrl: G ? t.iconWebLightHover : t.iconWebDarkHover,
                                        toggledIconUrl: G ? t.iconWebLightToggled : t.iconWebDarkToggled,
                                        priority: t.priority,
                                        showRedDot: !1,
                                        showMoreButton: !1,
                                        hasMoreNews: !1,
                                        type: "normal"
                                    },
                                    i = t.items.map((function(e) {
                                        var t;
                                        return {
                                            id: e.id,
                                            timestamp: e.klineTime,
                                            categoryId: a.id,
                                            priority: e.priority,
                                            title: e.title,
                                            date: P()(e.klineTime).locale(H).fromNow(),
                                            content: e.content,
                                            link: null === (t = e.contentLink) || void 0 === t ? void 0 : t.replace(ae, m),
                                            useSymbolIcons: !1,
                                            symbolIcons: [],
                                            tags: []
                                        }
                                    }));
                                return e.categories.push(a), (n = e.mines).push.apply(n, (0, z._)(i)), e
                            }), {
                                categories: [],
                                mines: []
                            })
                        }), [k, G, H, m]),
                        J = F.mines,
                        q = F.categories,
                        $ = (0, i.useMemo)((function() {
                            return {
                                id: re,
                                title: "".concat(p, " ").concat(Z),
                                normalIconUrl: X.inactive,
                                hoveredIconUrl: X.hover,
                                toggledIconUrl: X.active,
                                priority: -1,
                                showRedDot: A,
                                showMoreButton: !0,
                                hasMoreNews: _,
                                disclaimerLink: K,
                                onClickMoreNews: N,
                                type: "latest"
                            }
                        }), [p, K, A, _, Z, X.inactive, X.active, X.hover, N]),
                        ie = function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e4,
                                t = (0, i.useState)(Date.now()),
                                r = t[0],
                                n = t[1];
                            return (0, te.A)((function() {
                                return n(Date.now())
                            }), e), r
                        }(),
                        oe = (0, i.useMemo)((function() {
                            return x.map((function(e) {
                                return {
                                    id: e.id,
                                    timestamp: ie,
                                    categoryId: $.id,
                                    priority: -1,
                                    title: e.title,
                                    date: P()(1e3 * e.date).locale(H).fromNow(),
                                    content: e.subTitle,
                                    link: "/".concat(m, "/feed/post/").concat(e.id),
                                    useSymbolIcons: !0,
                                    symbolIcons: e.tradingPairs.map((function(e) {
                                        return e.logoUrl
                                    })),
                                    tags: [2 === e.sourceType ? B : O]
                                }
                            }))
                        }), [B, ie, m, $.id, x, H, O]),
                        se = (0, i.useMemo)((function() {
                            return J.concat(oe)
                        }), [oe, J]),
                        ce = (0, i.useMemo)((function() {
                            return q.concat($)
                        }), [$, q]),
                        ue = (0, i.useCallback)((function(e) {
                            (0, b.u4)("ModuleView", {
                                eventName: "Spotlight_Moduleview",
                                df_source: "Spotlight_Moduleview",
                                title: e.title
                            })
                        }), []),
                        le = (0, i.useCallback)((function(e) {
                            e.id === re && E(), U({
                                isSpot: M,
                                elementId: "spotlight_entry",
                                url: ""
                            }), R({
                                isSpot: M,
                                elementId: "spotlight_entry_click",
                                url: "",
                                displayAllSymbol: h
                            }), e.visible && x.forEach((function(e, t) {
                                W({
                                    id: e.id,
                                    type: 2 === e.sourceType ? "annoucement" : "news",
                                    index: t
                                })
                            }))
                        }), [M, E, x, h]),
                        de = (0, i.useCallback)((function(e) {
                            U({
                                isSpot: M,
                                elementId: "spotlight_list_details",
                                url: e.link || ""
                            }), R({
                                isSpot: M,
                                elementId: "spotlight_list_details_click",
                                url: e.link || "",
                                displayAllSymbol: h
                            })
                        }), [M, h]),
                        fe = (0, i.useCallback)((function() {
                            l(!0)
                        }), [l]),
                        pe = (0, i.useMemo)((function() {
                            return L()(ue, 200, {
                                leading: !0,
                                trailing: !1
                            })
                        }), [ue]),
                        me = (0, i.useMemo)((function() {
                            return {
                                mines: se,
                                categories: ce,
                                onHovered: pe,
                                onToggled: le,
                                onClickNews: de,
                                onClickDisableSpotlight: fe
                            }
                        }), [ce, pe, se, de, le, fe]);
                    return {
                        informationMines: f.includes("chart_spotlight") || g || !I ? void 0 : me
                    }
                },
                oe = r("nbv6"),
                se = r.n(oe),
                ce = r("me6M"),
                ue = r("UXyB"),
                le = r("593c"),
                de = r("tM9B"),
                fe = r("foOH"),
                pe = r("wKUA"),
                me = r("T0Sc"),
                ve = r("tSdT"),
                ge = function() {
                    var e = (0, me.o)("trd", "trade-ui").getI18n;
                    return {
                        priceReachesText: (0, i.useMemo)((function() {
                            return e("price-reaches", {
                                defaultValue: "Price Reaches"
                            }) || ""
                        }), [e]),
                        priceRisesAboveText: (0, i.useMemo)((function() {
                            return e("price-rises-above", {
                                defaultValue: "Price Rises Above"
                            }) || ""
                        }), [e]),
                        priceDropsToText: (0, i.useMemo)((function() {
                            return e("price-drops-to", {
                                defaultValue: "Price Drops to"
                            }) || ""
                        }), [e]),
                        alertSavedText: (0, i.useMemo)((function() {
                            return e("alert-saved", {
                                defaultValue: "Price alert saved"
                            })
                        }), [e]),
                        valueShouldBeLargerText: (0, i.useMemo)((function() {
                            return e("alert-price-should-be-larger", {
                                defaultValue: "Value should be larger than latest price"
                            })
                        }), [e]),
                        valueShouldBeLowerText: (0, i.useMemo)((function() {
                            return e("alert-price-should-be-lower", {
                                defaultValue: "Value should be lower than latest price"
                            })
                        }), [e])
                    }
                },
                Me = function() {
                    (0, b.u4)("$WebClick", {
                        module: "more_settngs",
                        $element_id: "drag_to_adjust_price_alert"
                    })
                },
                be = function(e) {
                    var t = e.namespace,
                        r = e.symbol,
                        a = (0, i.useContext)(pe.A).show,
                        s = (0, C.wA)(),
                        u = (0, d.Uan)(),
                        l = c.t1.Store.createStore(t),
                        f = c.t1.SessionStore.createStore(t),
                        p = (0, n._)(l(c.t1.Store.getShowPriceAlert, le.A), 1)[0],
                        m = (0, n._)(f(c.t1.SessionStore.getCandlestickReference), 1)[0],
                        v = (0, x.O)(),
                        g = (0, i.useMemo)((function() {
                            return !v && p
                        }), [v, p]),
                        M = (0, d.wjM)(r),
                        y = function() {
                            var e = ge(),
                                t = e.priceReachesText,
                                r = e.priceRisesAboveText,
                                n = e.priceDropsToText;
                            return (0, i.useCallback)((function(e) {
                                switch (e) {
                                    case 1:
                                        return r;
                                    case 2:
                                        return n;
                                    default:
                                        return t
                                }
                            }), [n, t, r])
                        }(),
                        h = (0, d.QsY)().isMobile,
                        j = (0, d.nHk)(),
                        I = (0, d.hFK)()[r] || {},
                        w = I.baseAsset,
                        k = I.quoteAsset,
                        S = (0, o.x)("finance-common", "Adjust_Kline_Alert").result,
                        N = (void 0 === S ? {
                            pass: !1
                        } : S).pass,
                        z = ge(),
                        _ = z.alertSavedText,
                        A = z.valueShouldBeLargerText,
                        L = z.valueShouldBeLowerText,
                        Y = function() {
                            var e = (0, ve.A)().enqueueNotification;
                            return (0, i.useCallback)((function(t) {
                                var r = t.message,
                                    n = t.variant;
                                e((0, K._)({
                                    message: r,
                                    variant: n,
                                    anchorOrigin: {
                                        vertical: "bottom",
                                        horizontal: "right"
                                    }
                                }, "warning" === n ? {
                                    bg: "badgeYellowBg"
                                } : {}))
                            }), [e])
                        }(),
                        E = (0, i.useCallback)((function() {
                            s.orderAlert.queryAlerts(), Y({
                                message: _,
                                variant: "success"
                            })
                        }), [_, s.orderAlert, Y]),
                        P = (0, i.useCallback)((function(e) {
                            var t = e.type,
                                r = e.id;
                            e.message;
                            switch (t) {
                                case fe.PriceAdjustmentError.PriceShouldBeLarger:
                                    Y({
                                        message: A,
                                        variant: "warning"
                                    });
                                    break;
                                case fe.PriceAdjustmentError.PriceShouldBeLower:
                                    Y({
                                        message: L,
                                        variant: "warning"
                                    });
                                    break;
                                case fe.PriceAdjustmentError.NotFound:
                                    Y({
                                        message: "Alert ".concat(r, " cannot be found'"),
                                        variant: "warning"
                                    });
                                case fe.PriceAdjustmentError.General:
                            }
                            s.orderAlert.forceUpdate()
                        }), [s.orderAlert, Y, A, L]),
                        Z = (0, i.useCallback)(function() {
                            var e = (0, T._)(D().mark((function e(t) {
                                var r;
                                return D().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.id, e.abrupt("return", a(r));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [a]),
                        O = (0, i.useCallback)(function() {
                            var e = (0, T._)(D().mark((function e(t) {
                                var r, n, a;
                                return D().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return r = t.id, n = t.currentPrice, a = null === m || void 0 === m ? void 0 : m.getLastSeriesDataClosePrice(), e.next = 4, s.orderAlert.adjustAlert({
                                                id: r,
                                                lastPrice: a,
                                                newPrice: n,
                                                onSuccess: E,
                                                onError: P
                                            });
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [m, s.orderAlert, P, E]);
                    (0, i.useEffect)((function() {
                        j && (! function(e) {
                            var t = e.enabled;
                            (0, b.u4)("pageView", {
                                df_tpSettings: JSON.stringify({
                                    alert_on_kline: t ? "on" : "off"
                                })
                            })
                        }({
                            enabled: g
                        }), g && s.orderAlert.queryAlerts())
                    }), [j]), (0, ue.A)((function() {
                        ! function(e) {
                            var t = e.enabled;
                            (0, b.u4)("$WebClick", {
                                module: "more_settings",
                                $element_id: "alert",
                                type: t ? "turn_on" : "turn_off"
                            })
                        }({
                            enabled: g
                        }), g && s.orderAlert.queryAlerts()
                    }), [g]);
                    var V = (0, i.useMemo)((function() {
                        var e = u.filter((function(e) {
                            return e.baseAsset === w && e.quoteAsset === k && "SPOT" === e.marketType && "COMMON" === e.priceType
                        })).map((function(e) {
                            var t = e.id,
                                r = e.price,
                                n = e.side;
                            return {
                                id: t.toString(),
                                price: r,
                                text: "".concat(y(n), " ").concat((0, de.ZV)(r, M)),
                                showCloseButton: N,
                                isPriceChangeable: !h && N,
                                onClick: Me,
                                onClose: Z,
                                onPriceChanged: O
                            }
                        }));
                        return e
                    }), [w, N, y, Z, O, M, k, u, h]);
                    return {
                        alerts: V
                    }
                },
                ye = r("c6Y9"),
                he = r("i6bu"),
                je = r("56yC"),
                Ie = r("xFxZ"),
                we = 6e4,
                ke = 36e5,
                Se = 24 * ke,
                xe = 7 * Se,
                Ne = function(e) {
                    var t = e.time1,
                        r = e.time2,
                        n = e.interval;
                    return Math.abs(r - t) / function(e) {
                        switch (e) {
                            case "1s":
                                return 1e3;
                            case "1m":
                                return we;
                            case "3m":
                                return 18e4;
                            case "5m":
                                return 3e5;
                            case "15m":
                                return 9e5;
                            case "30m":
                                return 18e5;
                            case "1h":
                                return ke;
                            case "2h":
                                return 2 * ke;
                            case "4h":
                                return 4 * ke;
                            case "6h":
                                return 6 * ke;
                            case "8h":
                                return 8 * ke;
                            case "12h":
                                return 12 * ke;
                            case "1d":
                                return Se;
                            case "3d":
                                return 3 * Se;
                            case "1w":
                                return xe;
                            case "1M":
                                return 4 * xe;
                            default:
                                return 0
                        }
                    }(n)
                },
                Te = r("P4Wp"),
                ze = 1e3,
                _e = function(e) {
                    return function(t) {
                        var r = function(e) {
                            return function(t) {
                                return (0, q._)((0, K._)({}, (0, Te.P)(t)), {
                                    symbol: e
                                })
                            }
                        }(e);
                        return t.map(r)
                    }
                },
                De = function(e) {
                    var t = e.symbol,
                        r = e.fetchKline,
                        n = _e(t);
                    return function() {
                        var e = (0, T._)(D().mark((function e(t) {
                            var a;
                            return D().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, r(t);
                                    case 2:
                                        return a = e.sent, e.abrupt("return", n(a));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }()
                },
                Ce = function() {
                    var e = (0, T._)(D().mark((function e(t) {
                        var r, n, a, i, o, s, c, u, l, d, f;
                        return D().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    r = t.symbol, n = t.interval, a = t.startTime, i = t.endTime, o = t.timeZone, s = t.fetchKline, c = [], u = a;
                                case 3:
                                    if (!(u < i)) {
                                        e.next = 21;
                                        break
                                    }
                                    return e.prev = 4, e.next = 8, s({
                                        symbol: r,
                                        interval: n,
                                        startTime: u,
                                        limit: ze,
                                        timeZone: (0, Ie.g)(o)
                                    });
                                case 8:
                                    if (0 !== (d = e.sent).length) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", c);
                                case 11:
                                    (l = c).push.apply(l, (0, z._)(d)), f = d[d.length - 1], u = f.time + 1, e.next = 19;
                                    break;
                                case 16:
                                    return e.prev = 16, e.t0 = e.catch(4), e.abrupt("break", 21);
                                case 19:
                                    e.next = 3;
                                    break;
                                case 21:
                                    return e.abrupt("return", c);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 16]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ae = function() {
                    var e = (0, T._)(D().mark((function e(t) {
                        var r, n, a, i, o, s, c;
                        return D().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    r = t.symbol, n = t.interval, a = t.startTime, i = t.endTime, o = t.timeZone, s = t.fetchKline, c = t.mode, e.t0 = c, e.next = "time-range" === e.t0 ? 4 : "load-past" === e.t0 ? 9 : "load-future" === e.t0 || "go-to-date" === e.t0 ? 12 : (e.t0, 13);
                                    break;
                                case 4:
                                    if (i && a) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 6:
                                    if (!(a >= Date.now())) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", s({
                                        symbol: r,
                                        interval: n,
                                        limit: ze,
                                        timeZone: o
                                    }));
                                case 8:
                                    return e.abrupt("return", Ce({
                                        symbol: r,
                                        interval: n,
                                        startTime: a,
                                        endTime: i,
                                        timeZone: o,
                                        fetchKline: s
                                    }));
                                case 9:
                                    if (i) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 11:
                                    return e.abrupt("return", s({
                                        symbol: r,
                                        interval: n,
                                        endTime: i - 1,
                                        limit: ze,
                                        timeZone: o
                                    }));
                                case 12:
                                    return e.abrupt("return", s({
                                        symbol: r,
                                        interval: n,
                                        startTime: a,
                                        limit: ze,
                                        timeZone: o
                                    }));
                                case 13:
                                    return e.abrupt("return", s({
                                        symbol: r,
                                        interval: n,
                                        limit: ze,
                                        timeZone: o
                                    }));
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Le = function() {
                    var e = (0, T._)(D().mark((function e(t) {
                        var r, n, a, i, o, s, c, u, l, d, f, p, m, v, g, M, b, y, h, j, I, w, k, S, x, N, T, _, C, A, L, Y, E, P, Z, O;
                        return D().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    r = t.predecessorSymbol, n = t.symbol, a = t.interval, i = t.startTime, o = t.endTime, s = t.timeZone, c = t.fetchOriginalHistory, u = t.fetchPredecessorHistory, l = t.mode, d = t.seriesData, f = null === d || void 0 === d ? void 0 : d[0], p = null === d || void 0 === d ? void 0 : d[d.length - 1], m = null === f || void 0 === f ? void 0 : f.symbol, v = null === p || void 0 === p ? void 0 : p.symbol, e.t0 = l, e.next = "time-range" === e.t0 ? 8 : "load-past" === e.t0 ? 31 : "load-future" === e.t0 ? 42 : "go-to-date" === e.t0 ? 59 : (e.t0, 78);
                                    break;
                                case 8:
                                    if (i && o) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 10:
                                    if (!(i >= Date.now())) {
                                        e.next = 12;
                                        break
                                    }
                                    return e.abrupt("return", c({
                                        symbol: n,
                                        interval: a,
                                        limit: ze,
                                        timeZone: s
                                    }));
                                case 12:
                                    return g = i, M = o, e.next = 16, Ce({
                                        symbol: n,
                                        interval: a,
                                        startTime: g,
                                        endTime: M,
                                        timeZone: s,
                                        fetchKline: c
                                    });
                                case 16:
                                    if (0 !== (b = e.sent).length) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 19:
                                    if (y = b[0].time, !(M < y)) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.abrupt("return", Ce({
                                        symbol: r,
                                        interval: a,
                                        startTime: g,
                                        endTime: M,
                                        timeZone: s,
                                        fetchKline: u
                                    }));
                                case 22:
                                    if (!(Ne({
                                            time1: g,
                                            time2: y,
                                            interval: a
                                        }) < 1)) {
                                        e.next = 25;
                                        break
                                    }
                                    return e.abrupt("return", b);
                                case 25:
                                    return h = y - 1, e.next = 28, Ce({
                                        symbol: r,
                                        interval: a,
                                        startTime: g,
                                        endTime: h,
                                        timeZone: s,
                                        fetchKline: u
                                    });
                                case 28:
                                    return j = e.sent, I = j.filter((function(e) {
                                        return e.time < h
                                    })), e.abrupt("return", (0, z._)(I).concat((0, z._)(b)));
                                case 31:
                                    if (o) {
                                        e.next = 33;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 33:
                                    if (w = o - 1, m === n) {
                                        e.next = 36;
                                        break
                                    }
                                    return e.abrupt("return", u({
                                        symbol: r,
                                        interval: a,
                                        endTime: w,
                                        limit: ze,
                                        timeZone: s
                                    }));
                                case 36:
                                    return e.next = 38, c({
                                        symbol: n,
                                        interval: a,
                                        endTime: w,
                                        limit: ze,
                                        timeZone: s
                                    });
                                case 38:
                                    if (0 !== (k = e.sent).length) {
                                        e.next = 41;
                                        break
                                    }
                                    return e.abrupt("return", u({
                                        symbol: r,
                                        interval: a,
                                        endTime: w,
                                        limit: ze,
                                        timeZone: s
                                    }));
                                case 41:
                                    return e.abrupt("return", k);
                                case 42:
                                    if (i) {
                                        e.next = 44;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 44:
                                    if (S = i, v === n) {
                                        e.next = 58;
                                        break
                                    }
                                    return e.next = 48, u({
                                        symbol: r,
                                        interval: a,
                                        startTime: S,
                                        limit: ze,
                                        timeZone: s
                                    });
                                case 48:
                                    if (0 !== (x = e.sent).length) {
                                        e.next = 51;
                                        break
                                    }
                                    return e.abrupt("return", c({
                                        symbol: n,
                                        interval: a,
                                        startTime: S,
                                        limit: ze,
                                        timeZone: s
                                    }));
                                case 51:
                                    if (!(x.length < ze)) {
                                        e.next = 57;
                                        break
                                    }
                                    return N = x[x.length - 1].time, e.next = 55, c({
                                        symbol: n,
                                        interval: a,
                                        startTime: N,
                                        limit: ze,
                                        timeZone: s
                                    });
                                case 55:
                                    return T = e.sent, e.abrupt("return", (0, z._)(x).concat((0, z._)(T)));
                                case 57:
                                    return e.abrupt("return", x);
                                case 58:
                                    return e.abrupt("return", c({
                                        symbol: n,
                                        interval: a,
                                        startTime: S,
                                        limit: ze,
                                        timeZone: s
                                    }));
                                case 59:
                                    if (i) {
                                        e.next = 61;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 61:
                                    return _ = i, e.next = 64, c({
                                        symbol: n,
                                        interval: a,
                                        startTime: _,
                                        limit: ze,
                                        timeZone: s
                                    });
                                case 64:
                                    if (0 !== (C = e.sent).length) {
                                        e.next = 67;
                                        break
                                    }
                                    return e.abrupt("return", []);
                                case 67:
                                    if (A = C[0].time, !((L = Ne({
                                            time1: _,
                                            time2: A,
                                            interval: a
                                        })) < 1)) {
                                        e.next = 71;
                                        break
                                    }
                                    return e.abrupt("return", C);
                                case 71:
                                    if (!(L < ze)) {
                                        e.next = 77;
                                        break
                                    }
                                    return Y = A - 1, e.next = 75, u({
                                        symbol: r,
                                        interval: a,
                                        endTime: Y,
                                        limit: ze,
                                        timeZone: s
                                    });
                                case 75:
                                    return E = e.sent, e.abrupt("return", (0, z._)(E).concat((0, z._)(C)));
                                case 77:
                                    return e.abrupt("return", u({
                                        symbol: r,
                                        interval: a,
                                        startTime: _,
                                        limit: ze,
                                        timeZone: s
                                    }));
                                case 78:
                                    return e.next = 80, c({
                                        symbol: n,
                                        interval: a,
                                        limit: ze,
                                        timeZone: s
                                    });
                                case 80:
                                    if (0 !== (P = e.sent).length) {
                                        e.next = 83;
                                        break
                                    }
                                    return e.abrupt("return", u({
                                        symbol: r,
                                        interval: a,
                                        limit: ze,
                                        timeZone: s
                                    }));
                                case 83:
                                    if (!(P.length < ze)) {
                                        e.next = 89;
                                        break
                                    }
                                    return Z = P[0].time - 1, e.next = 87, u({
                                        symbol: r,
                                        endTime: Z,
                                        interval: a,
                                        limit: ze,
                                        timeZone: s
                                    });
                                case 87:
                                    return O = e.sent, e.abrupt("return", (0, z._)(O).concat((0, z._)(P)));
                                case 89:
                                    return e.abrupt("return", P);
                                case 90:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ye = function() {
                    var e = (0, T._)(D().mark((function e(t) {
                        var r, n, a;
                        return D().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = (0, Ie.g)(t.timeZone), n = De({
                                            symbol: t.symbol,
                                            fetchKline: t.fetchKline
                                        }), t.dataSourceType !== je.ol.FullWithSwapped || !t.predecessorSymbol) {
                                        e.next = 5;
                                        break
                                    }
                                    return a = De({
                                        symbol: t.predecessorSymbol,
                                        fetchKline: t.fetchKline
                                    }), e.abrupt("return", Le((0, q._)((0, K._)({}, t), {
                                        timeZone: r,
                                        fetchOriginalHistory: n,
                                        fetchPredecessorHistory: a
                                    })));
                                case 5:
                                    return e.abrupt("return", Ae((0, q._)((0, K._)({}, t), {
                                        timeZone: r,
                                        fetchKline: n
                                    })));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ee = r("qv9I"),
                Pe = r("fc5I"),
                Ze = r.n(Pe),
                Oe = r("zx3+"),
                Ve = r("ZHed"),
                Be = (0, r("bQ69").D$)(),
                Re = [100, 50, 10, 1],
                Ue = function(e) {
                    var t = e.symbol,
                        r = e.namespace,
                        a = e.useMiniTicker,
                        o = e.timeZone,
                        s = c.t1.Store.createStore(r),
                        u = (0, je.y$)(r),
                        l = s(c.t1.Store.getTrueInterval),
                        f = function(e) {
                            var t = (0, i.useRef)(Ze()),
                                r = (0, d.hFK)() || {},
                                n = (0, C.d4)((function(t) {
                                    return t.exchangeInfo.infos[e]
                                })),
                                a = r[e] || {},
                                o = a.minQty,
                                s = void 0 === o ? "0.00000001" : o,
                                c = a.tickSize,
                                u = (0, i.useMemo)((function() {
                                    return (0, Oe.w1)(Number(s))
                                }), [s]),
                                l = (0, i.useMemo)((function() {
                                    return n || {
                                        levels: Re.map((function(e) {
                                            return 0 === (t = e) ? "1" : "0.".concat("0".repeat(t - 1), "1");
                                            var t
                                        }))
                                    }
                                }), [n]).levels,
                                f = (0, i.useMemo)((function() {
                                    return Be.getOrderbookStore(e, {
                                        levels: l,
                                        quantityPrecision: u
                                    })
                                }), [l, u, e]),
                                p = f.subscribe,
                                m = f.getState,
                                v = (0, i.useCallback)((function() {
                                    var e, t, r = m(),
                                        n = r.ask,
                                        a = r.bid,
                                        i = (0, Ve.AK)(n, {
                                            level: c,
                                            desc: !1
                                        }),
                                        o = (0, Ve.AK)(a, {
                                            level: c,
                                            desc: !0
                                        });
                                    return {
                                        ask: (null === (e = i[i.length - 1]) || void 0 === e ? void 0 : e.price) || 0,
                                        bid: (null === (t = o[0]) || void 0 === t ? void 0 : t.price) || 0
                                    }
                                }), [m, c]),
                                g = (0, i.useCallback)((function(e) {
                                    e(v()), t.current = p((function() {
                                        e(v())
                                    }))
                                }), [v, p]),
                                M = (0, i.useCallback)((function() {
                                    t.current()
                                }), []);
                            return (0, i.useMemo)((function() {
                                return {
                                    subscribeAskBid: g,
                                    unsubscribeAskBid: M
                                }
                            }), [g, M])
                        }(t),
                        p = f.subscribeAskBid,
                        m = f.unsubscribeAskBid,
                        v = (0, i.useMemo)((function() {
                            return (0, je.j8)({
                                symbol: t
                            })
                        }), [t]).getPredecessorSymbol,
                        g = function(e) {
                            var t = e.namespace,
                                r = e.symbol,
                                a = Ee.createStore(t),
                                o = (0, je.y$)(t),
                                s = (0, n._)(a(Ee.getChartMode), 1)[0],
                                c = (0, n._)(a(Ee.getDataSource), 1)[0],
                                u = (0, i.useMemo)((function() {
                                    return (0, je.j8)({
                                        symbol: r
                                    })
                                }), [r]).createGetDataSourceType;
                            return o((0, i.useMemo)((function() {
                                return u({
                                    chartMode: s,
                                    dataSource: c
                                })
                            }), [s, c, u]))
                        }({
                            namespace: r,
                            symbol: t
                        }),
                        M = u(v),
                        b = (0, je.MG)(g);
                    return (0, i.useMemo)((function() {
                        return b ? function(e) {
                            var t = e.symbol,
                                r = e.interval,
                                n = e.useMiniTicker,
                                a = e.onNewDataArrived,
                                i = void 0 === a ? function() {
                                    return null
                                } : a,
                                o = e.dataSourceType,
                                s = e.subscribeAskBid,
                                c = e.unsubscribeAskBid,
                                u = e.timeZone,
                                l = e.predecessorSymbol,
                                d = e.fetchKline,
                                f = function() {
                                    return null
                                },
                                p = {
                                    klineDataQueue: []
                                };
                            return {
                                trackingData: p,
                                getData: function() {
                                    var e = (0, T._)(D().mark((function e(n) {
                                        var a, i, s, c, f, m, v = arguments;
                                        return D().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return a = n.startTime, i = n.endTime, s = n.mode, c = n.seriesData, f = v.length > 1 && void 0 !== v[1] ? v[1] : function() {
                                                        return !1
                                                    }, e.prev = 1, e.next = 4, Ye({
                                                        symbol: t,
                                                        predecessorSymbol: l,
                                                        interval: r,
                                                        startTime: a,
                                                        endTime: i,
                                                        timeZone: u,
                                                        dataSourceType: o,
                                                        fetchKline: d,
                                                        mode: s,
                                                        seriesData: c
                                                    });
                                                case 4:
                                                    m = e.sent, p.klineDataQueue = m.slice(-100).map((function(e) {
                                                        return (0, q._)((0, K._)({}, e), {
                                                            id: (0, ye.v4)()
                                                        })
                                                    })), f({
                                                        data: m,
                                                        isLoadAll: 0 === m.length
                                                    }), e.next = 11;
                                                    break;
                                                case 9:
                                                    e.prev = 9, e.t0 = e.catch(1);
                                                case 11:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [1, 9]
                                        ])
                                    })));
                                    return function(t) {
                                        return e.apply(this, arguments)
                                    }
                                }(),
                                subscribe: function(e, a) {
                                    f = (0, he.B)({
                                        symbol: t,
                                        interval: r,
                                        useMiniTicker: n,
                                        timeZone: u,
                                        callback: function(e, r) {
                                            var n, o;
                                            o = (0, q._)((0, K._)({}, r), {
                                                id: (0, ye.v4)()
                                            }), (n = p.klineDataQueue).push(o), n.length > 100 && n.splice(0, 1);
                                            var s = (0, q._)((0, K._)({}, e), {
                                                symbol: t
                                            });
                                            a(s), i(e)
                                        }
                                    })
                                },
                                unsubscribe: function() {
                                    f()
                                },
                                subscribeAskBid: s,
                                unsubscribeAskBid: c,
                                getBarDatas: function() {
                                    return null
                                },
                                subcribe: function() {
                                    return null
                                },
                                unSubcribe: function() {
                                    return null
                                }
                            }
                        }({
                            symbol: t,
                            interval: l,
                            useMiniTicker: a,
                            dataSourceType: g,
                            subscribeAskBid: p,
                            unsubscribeAskBid: m,
                            timeZone: o,
                            predecessorSymbol: M,
                            fetchKline: b
                        }) : void 0
                    }), [b, t, l, a, g, p, m, o, M])
                },
                We = r("qFGl"),
                He = r.n(We),
                Ge = r("9YZR"),
                Qe = r("WT+B"),
                Ke = r("e3WN"),
                Xe = "trd_chart_basic_kline_load_timeout",
                Fe = function(e) {
                    return [e.time, e.open, e.high, e.low, e.close]
                },
                Je = function(e) {
                    var t = e.dataProvider,
                        r = e.symbol,
                        n = e.interval,
                        a = e.logOnFetchEndCallback,
                        o = e.logOnFetchStartCallback,
                        s = e.logOnKlineReadyCallback,
                        c = e.logOnErrorDataCallback,
                        u = e.logOnCatchChartCallback,
                        l = (0, i.useCallback)((function() {
                            He()((function() {
                                (0, m._)({
                                    eventId: Xe,
                                    stepId: "fetchDataEnd",
                                    catch: function(e) {
                                        var t = e.error,
                                            r = e.track;
                                        r({
                                            FETCH_DATA_END_TYPE: t
                                        }), r({
                                            type: "FETCH_DATA_END_TYPE_".concat(t)
                                        })
                                    },
                                    log: function(e) {
                                        (0, e.track)({
                                            FETCH_DATA_END_TYPE: "SUCCESS"
                                        })
                                    }
                                })
                            })), null === a || void 0 === a || a()
                        }), [a]),
                        d = (0, i.useCallback)((function() {
                            He()((function() {
                                var e = (0, m.PM)({
                                        id: "fetchDataStart"
                                    }),
                                    t = (0, m.PM)({
                                        id: "fetchDataEnd",
                                        timeout: 6
                                    }),
                                    r = (0, m.PM)({
                                        id: "basicKlineReady",
                                        timeout: 3
                                    }),
                                    n = m.PM.auto({
                                        log: function(e) {
                                            (0, e.track)({
                                                type: "SUCCESS"
                                            })
                                        }
                                    });
                                m._.init({
                                    step: e._(t)._(r)._(n),
                                    eventId: "trd_chart_basic_kline_load_timeout"
                                }), (0, m._)({
                                    eventId: Xe,
                                    stepId: "fetchDataStart",
                                    catch: function(e) {
                                        var t = e.error,
                                            r = e.track;
                                        r({
                                            FETCH_DATA_START_TYPE: t
                                        }), r({
                                            type: "FETCH_DATA_START_TYPE_".concat(t)
                                        })
                                    },
                                    log: function(e) {
                                        (0, e.track)({
                                            FETCH_DATA_START_TYPE: "SUCCESS"
                                        })
                                    }
                                })
                            })), null === o || void 0 === o || o()
                        }), [o]),
                        f = (0, i.useCallback)((function() {
                            He()((function() {
                                (0, m._)({
                                    eventId: Xe,
                                    stepId: "basicKlineReady",
                                    catch: function(e) {
                                        var t = e.error,
                                            r = e.track;
                                        r({
                                            BASIC_KLINE_READY_TYPE: t
                                        }), r({
                                            type: "BASIC_KLINE_READY_TYPE_".concat(t)
                                        })
                                    },
                                    log: function(e) {
                                        (0, e.track)({
                                            BASIC_KLINE_READY_TYPE: "SUCCESS"
                                        })
                                    }
                                })
                            })), null === s || void 0 === s || s()
                        }), [s]),
                        p = (0, Qe.Z)((function() {
                            He()((function(e) {
                                var a, i, o = null === t || void 0 === t || null === (a = t.trackingData) || void 0 === a ? void 0 : a.klineDataQueue.find((function(t) {
                                        var r = t.id;
                                        return e.payload.prevItem.id === r
                                    })),
                                    s = null === t || void 0 === t || null === (i = t.trackingData) || void 0 === i ? void 0 : i.klineDataQueue.find((function(t) {
                                        var r = t.id;
                                        return e.payload.nextItem.id === r
                                    }));
                                (0, b.u4)("trd_chart_".concat(e.type), (0, K._)({
                                    trd_chart_symbol: r,
                                    trd_chart_interval: n,
                                    neighbor: JSON.stringify([o, s])
                                }, function(e) {
                                    switch (e.type) {
                                        case "disConnect":
                                        case "renderError":
                                            return {
                                                trd_chart_nextItem: JSON.stringify(Fe(e.payload.nextItem)),
                                                trd_chart_prevItem: JSON.stringify(Fe(e.payload.prevItem))
                                            };
                                        case "invalidData":
                                            return {
                                                trd_chart_invalid_data: JSON.stringify(Fe(e.payload.data))
                                            };
                                        default:
                                            return {}
                                    }
                                }(e))), null === c || void 0 === c || c()
                            }))
                        }));
                    return {
                        logOnFetchEnd: l,
                        logOnFetchStart: d,
                        logOnKlineReady: f,
                        logOnErrorData: p,
                        logOnCatchChart: (0, i.useCallback)((function(e) {
                            null === u || void 0 === u || u()
                        }), [u])
                    }
                },
                qe = function(e) {
                    var t = e.namespace,
                        r = c.t1.SessionStore.createStore(t),
                        a = (0, n._)(r(c.t1.SessionStore.getCandlestickReference), 1)[0],
                        o = (0, n._)((0, d.Grl)(), 1)[0],
                        s = (0, i.useMemo)((function() {
                            return "SPOT" === o ? "spot" : "margin"
                        }), [o]),
                        u = (0, Ke.Oc)();
                    (0, i.useEffect)((function() {
                        if (!a) return function() {};
                        var e = function(e) {
                                var t = function(e) {
                                    switch (e) {
                                        case Ge.X2.DefaultCursor:
                                            return "cursor";
                                        case Ge.X2.CrossHairCursor:
                                            return "cross_cursor";
                                        case Ge.X2.TrendLine:
                                            return "trade_line";
                                        case Ge.X2.ExtendTrendLine:
                                            return "extended_trade_line";
                                        case Ge.X2.HorizontalLine:
                                            return "horizontal_line";
                                        case Ge.X2.VerticalLine:
                                            return "vertical_line";
                                        case Ge.X2.CrossLine:
                                            return "cross_line";
                                        case Ge.X2.ParallelLine:
                                            return "parallel_line";
                                        case Ge.X2.RayLine:
                                            return "ray";
                                        case Ge.X2.PriceLine:
                                            return "price_line";
                                        case Ge.X2.ArrowLine:
                                            return "arrow_line";
                                        case Ge.X2.InfoLine:
                                            return "info_line";
                                        case Ge.X2.UpArrow:
                                            return "up_arrow";
                                        case Ge.X2.DownArrow:
                                            return "down_arrow";
                                        case Ge.X2.LeftArrow:
                                            return "left_arrow";
                                        case Ge.X2.RightArrow:
                                            return "right_arrow";
                                        case Ge.X2.FibonacciLine:
                                            return "fibonacci_retracement";
                                        case Ge.X2.Rectangle:
                                            return "rectangle";
                                        case Ge.X2.Text:
                                            return "text";
                                        case Ge.X2.KeepDrawing:
                                            return "continuous_drawing_mode";
                                        case Ge.X2.LockDraw:
                                            return "lock_all_drawing";
                                        case Ge.X2.ToggleVisible:
                                            return "hide_all_drawing";
                                        case Ge.X2.Delete:
                                            return "delete_all";
                                        default:
                                            return ""
                                    }
                                }(e.data);
                                "" !== t && function(e) {
                                    var t = e.source,
                                        r = e.pageName,
                                        n = e.type;
                                    (0, b.u4)("$WebClick", {
                                        module: "chart",
                                        pageName: r,
                                        df_source: t,
                                        $element_id: "drawing_tool",
                                        type: n
                                    })
                                }({
                                    source: s,
                                    pageName: u,
                                    type: t
                                })
                            },
                            t = function(e) {
                                var t = function(e) {
                                    switch (e) {
                                        case Ge.Pf.BackToDefault:
                                            return "back_to_default";
                                        case Ge.Pf.Color:
                                            return "color";
                                        case Ge.Pf.LineWidth:
                                            return "width";
                                        case Ge.Pf.LineStyle:
                                            return "style";
                                        case Ge.Pf.Background:
                                            return "background";
                                        case Ge.Pf.Lock:
                                            return "lock";
                                        case Ge.Pf.Delete:
                                            return "delete";
                                        default:
                                            return ""
                                    }
                                }(e.data);
                                "" !== t && function(e) {
                                    var t = e.source,
                                        r = e.pageName,
                                        n = e.type;
                                    (0, b.u4)("$WebClick", {
                                        module: "chart",
                                        pageName: r,
                                        df_source: t,
                                        $element_id: "drawing_tools_small",
                                        type: n
                                    })
                                }({
                                    source: s,
                                    pageName: u,
                                    type: t
                                })
                            },
                            r = function(e) {
                                var t = function(e) {
                                    switch (e) {
                                        case Ge.yo.Setting:
                                            return "setting";
                                        case Ge.yo.Hide:
                                            return "hide";
                                        case Ge.yo.Delete:
                                            return "delete";
                                        default:
                                            return ""
                                    }
                                }(e.data);
                                "" !== t && function(e) {
                                    var t = e.source,
                                        r = e.pageName,
                                        n = e.type;
                                    (0, b.u4)("$WebClick", {
                                        module: "chart",
                                        pageName: r,
                                        df_srouce: t,
                                        $element_id: "indicator_setting",
                                        type: n
                                    })
                                }({
                                    source: s,
                                    pageName: u,
                                    type: t
                                })
                            };
                        return a.on("clickDrawingTool", e), a.on("clickAnnotationEditTool", t), a.on("clickIndicatorCommonButton", r),
                            function() {
                                a.off("clickDrawingTool", e), a.off("clickAnnotationEditTool", t), a.off("clickIndicatorCommonButton", r)
                            }
                    }), [a, s, u])
                },
                $e = r("Nimi"),
                et = r("vjpm"),
                tt = r("NyG8"),
                rt = r("mFKG"),
                nt = r("kI+t");
            const at = function(e) {
                var t = e.namespace,
                    r = e.symbol,
                    b = e.useMiniTicker,
                    h = e.chartMode,
                    T = c.t1.Store.createStore(t),
                    z = (0, n._)(T(c.t1.Store.getShowExecutionOrder), 1)[0],
                    _ = T(c.t1.Store.getTrueInterval),
                    D = (0, je.y$)(t),
                    C = D(je.m0),
                    A = D((0, i.useMemo)((function() {
                        return (0, je.j8)({
                            symbol: r
                        })
                    }), [r]).getIsDataReady),
                    L = (0, n._)((0, d.Grl)(), 1)[0],
                    Y = (0, d.nHk)() || !1,
                    E = (0, w.L)(t),
                    P = (0, d.hFK)()[r] || {},
                    Z = P.symbolDisplay,
                    O = void 0 === Z ? "" : Z,
                    V = P.baseAsset,
                    B = P.quoteAsset,
                    R = P.tickSize,
                    U = void 0 === R ? "0.01" : R,
                    W = (0, i.useMemo)((function() {
                        return (0, m.XV)(+U)
                    }), [U]),
                    H = (0, o.x)("finance-common", "web_spot_kline_utc8").result,
                    G = (0, s.$H)().basisTimeZone;
                (0, rt.J)(r, b), (0, nt.z)({
                    symbol: r,
                    interval: _,
                    timeZone: (null === H || void 0 === H ? void 0 : H.pass) ? G : "",
                    enabled: void 0 !== H
                });
                var Q = Ue({
                        symbol: r,
                        namespace: t,
                        useMiniTicker: b,
                        timeZone: (null === H || void 0 === H ? void 0 : H.pass) ? G : ""
                    }),
                    K = function(e) {
                        var t = e.symbol,
                            r = e.chartMode,
                            n = (0, k.v)({
                                symbol: t
                            }),
                            a = (0, d.i24)(),
                            o = (0, d.QsY)().isMobile,
                            s = (0, d.$iq)().klineAdjustment,
                            u = (0, x.O)(),
                            l = (0, i.useMemo)((function() {
                                return r !== c.t1.Store.ChartMode.Single ? [] : n.map((function(e) {
                                    var t, r = e.order,
                                        n = e.price,
                                        i = e.quantity,
                                        c = e.text,
                                        l = e.cancel,
                                        d = e.isBuy,
                                        f = e.showOrderConfirmation,
                                        p = e.showOrderModificationModal;
                                    return {
                                        id: r.orderId.toString(),
                                        isBuy: d,
                                        price: n,
                                        quantity: i.toString(),
                                        text: c,
                                        showCloseButton: !0,
                                        editable: !o && s && a && r.type === g.W4.LIMIT && (t = r.clientOrderId, !S.test(t)) && !u,
                                        onClose: l,
                                        onPriceChange: function(e) {
                                            var t = e.price || "0";
                                            f({
                                                newPrice: t
                                            }), N("drag_adjust_limit")
                                        },
                                        onClickDragArea: function(e) {},
                                        onClickPrice: function(e) {
                                            e.prevPrice === e.currentPrice && (p({
                                                entryType: "price"
                                            }), N("click_adjust_limit"))
                                        },
                                        onClickQuantity: function(e) {
                                            p({
                                                entryType: "amount"
                                            }), N("click_adjust_limit")
                                        }
                                    }
                                }))
                            }), [r, n, o, s, a, u]);
                        return {
                            orders: l
                        }
                    }({
                        symbol: r,
                        chartMode: h
                    }).orders,
                    X = function(e) {
                        var t = e.chartMode,
                            r = (0, I._)(e, ["chartMode"]),
                            n = (0, w.K)(r),
                            a = (0, i.useMemo)((function() {
                                return n.map((function(e) {
                                    return {
                                        id: e.id,
                                        time: e.time,
                                        isBuy: e.isBuy,
                                        text: e.tooltip
                                    }
                                }))
                            }), [n]);
                        return {
                            executionOrders: t === c.t1.Store.ChartMode.Single ? a : []
                        }
                    }({
                        symbol: r,
                        namespace: t,
                        chartMode: h
                    }).executionOrders,
                    F = ie({
                        symbol: r,
                        namespace: t
                    }).informationMines,
                    J = function(e) {
                        var t = e.namespace,
                            r = e.symbol,
                            n = (0, ce.e)({
                                namespace: t,
                                symbol: r
                            }),
                            a = n.avgBuyPrice,
                            o = n.buyCostText,
                            s = n.avgSellPrice,
                            u = n.sellCostText,
                            l = (0, i.useMemo)((function() {
                                return "0" === a || "" === a ? [] : [{
                                    price: +a,
                                    priceText: a,
                                    text: o,
                                    type: c.t1.Store.LabelLineType.AverageBuyPrice
                                }]
                            }), [a, o]),
                            d = (0, i.useMemo)((function() {
                                return "0" === s || "" === s ? [] : [{
                                    price: +s,
                                    priceText: s,
                                    text: u,
                                    type: c.t1.Store.LabelLineType.AverageSellPrice
                                }]
                            }), [s, u]);
                        return {
                            labelLines: (0, i.useMemo)((function() {
                                return se()([l, d])
                            }), [l, d])
                        }
                    }({
                        symbol: r,
                        namespace: t
                    }).labelLines,
                    q = be({
                        symbol: r,
                        namespace: t
                    }).alerts,
                    $ = function(e) {
                        var t = e.chartMode,
                            r = (0, i.useContext)(M.x),
                            n = r.setOrderType,
                            a = r.setTabSide,
                            o = (0, i.useContext)(y.A),
                            s = o.showDialog,
                            u = o.setPrice,
                            l = (0, i.useMemo)((function() {
                                return window.location.href.indexOf("multipleChart") > -1
                            }), []),
                            f = (0, d.i24)(),
                            p = (0, d.QsY)().isMobile,
                            m = {
                                onClickBuyLimit: function(e) {
                                    null === a || void 0 === a || a("Buy" === e.side ? "BUY" : "SELL"), null === n || void 0 === n || n(g.W4.LIMIT), u(e.formattedPrice), s(), j({
                                        type: "option_1",
                                        isSpot: f,
                                        source: e.source
                                    })
                                },
                                onClickBuyStop: function(e) {
                                    null === a || void 0 === a || a("Buy" === e.side ? "BUY" : "SELL"), null === n || void 0 === n || n(g.W4.STOPLIMIT), u(e.formattedPrice), s(), j({
                                        type: "option_2",
                                        isSpot: f,
                                        source: e.source
                                    })
                                },
                                onClickCreateNewOrder: function(e) {
                                    null === a || void 0 === a || a("Sell" === e.side ? "BUY" : "SELL"), null === n || void 0 === n || n(g.W4.STOPLIMIT), u(e.formattedPrice), s(), j({
                                        type: "option_3",
                                        isSpot: f,
                                        source: e.source
                                    })
                                },
                                onClickCreateHorizontalLine: function(e) {
                                    j({
                                        type: "option_4",
                                        isSpot: f,
                                        source: e.source
                                    })
                                }
                            };
                        return t !== c.t1.Store.ChartMode.Single || l || p ? void 0 : m
                    }({
                        chartMode: h
                    }),
                    ee = (0, d._ar)().setMessageInfo,
                    te = Je({
                        dataProvider: Q,
                        symbol: r,
                        interval: _
                    }),
                    re = (0, i.useMemo)((function() {
                        return h === c.t1.Store.ChartMode.Single
                    }), [h]);
                ! function(e) {
                    var t = e.namespace,
                        r = c.t1.SessionStore.createStore(t),
                        a = (0, n._)(r(c.t1.SessionStore.getCandlestickReference), 1)[0];
                    (0, i.useEffect)((function() {
                        var e = "Main",
                            t = function(e) {
                                var t = e.data;
                                (0, $e.u)({
                                    eventLabel: "chart::tool_".concat(t),
                                    elementId: "chart:-tool-".concat(t)
                                })
                            },
                            r = function(t) {
                                var r = t.data;
                                e = r, (0, $e.u)({
                                    eventLabel: "chart::indicator::".concat(r),
                                    elementId: "chart-indicator-".concat(r)
                                })
                            },
                            n = function() {
                                (0, $e.u)({
                                    eventAction: "save",
                                    eventLabel: "chart::indicator",
                                    elementId: "chart-indicator-save"
                                })
                            },
                            i = function() {
                                (0, $e.u)({
                                    eventAction: "reset",
                                    eventLabel: "chart::indicator",
                                    elementId: "chart-indicator-reset"
                                })
                            },
                            o = function(t) {
                                var r = t.data;
                                (0, $e.u)({
                                    eventLabel: "chart::indicator::".concat(e, "_").concat(r),
                                    elementId: "chart-indicator-".concat(e, "-").concat(r)
                                })
                            };
                        return null === a || void 0 === a || a.on("clickDrawingTool", t), null === a || void 0 === a || a.on("indicatorTabChanged", r), null === a || void 0 === a || a.on("indicatorSaved", n), null === a || void 0 === a || a.on("indicatorReset", i), null === a || void 0 === a || a.on("indicatorAddedOrRemoved", o),
                            function() {
                                null === a || void 0 === a || a.off("clickDrawingTool", t), null === a || void 0 === a || a.off("indicatorTabChanged", r), null === a || void 0 === a || a.off("indicatorSaved", n), null === a || void 0 === a || a.off("indicatorReset", i), null === a || void 0 === a || a.off("indicatorAddedOrRemoved", o)
                            }
                    }), [a])
                }({
                    namespace: t
                }), qe({
                    namespace: t
                }), (0, i.useEffect)((function() {
                    E({
                        symbol: r,
                        tradeType: L,
                        isReady: Y && z
                    })
                }), [Y, E, z, r, L]);
                var ne = function(e) {
                        var t = e.namespace,
                            r = e.chartMode,
                            n = (0, i.useMemo)((function() {
                                return r === Ee.ChartMode.Single
                            }), [r]),
                            a = (0, et.Q)().isMobile,
                            o = (0, i.useMemo)((function() {
                                return window.location.href.indexOf("multipleChart") > -1
                            }), []);
                        return {
                            rightClickPlaceOrder: {
                                visible: n && !a && !o
                            },
                            moreSettings: (0, tt.o)({
                                namespace: t,
                                chartMode: r
                            })
                        }
                    }({
                        namespace: t,
                        chartMode: h
                    }),
                    ae = (0, v.VV)().data,
                    oe = (0, v.jQ)().data,
                    ue = (0, u.r)({
                        drawingSyncEnabled: ae,
                        indicatorSyncEnabled: oe,
                        namespace: t,
                        type: "sp",
                        symbol: r
                    }),
                    le = (0, i.useMemo)((function() {
                        return {
                            tickSize: W
                        }
                    }), [W]);
                (0, i.useEffect)((function() {
                    C({
                        symbol: r
                    })
                }), [C, r]);
                var de = (0, f.R)(),
                    fe = (0, i.useCallback)((function(e) {
                        !1 === e && de("basicKline")
                    }), [de]);
                return r && _ && A && Q ? (0, a.jsx)(l.t, {
                    name: "origin_kline",
                    children: (0, a.jsx)(c.t1.Containers.BasicKline, {
                        klineOptions: {
                            symbol: r,
                            storeSymbol: r,
                            candlestick: le,
                            baseAsset: V,
                            quoteAsset: B,
                            dataProvider: Q,
                            namespace: t,
                            sensorsManager: te,
                            placeOrder: $,
                            informationMines: re ? F : void 0,
                            isShowDrawPanel: re,
                            isShowAnnotationPanel: re,
                            contextMenu: ne,
                            storage: ue
                        },
                        symbolDisplay: O.split("/").join("_"),
                        bizType: "trade",
                        setMessageInfo: ee,
                        orders: K,
                        executionOrders: X,
                        labelLines: J,
                        alerts: q,
                        enableBacktest: !1,
                        electron: p.A,
                        onLoadingChange: fe
                    })
                }) : null
            }
        },
        FyDe: (e, t, r) => {
            "use strict";
            r.d(t, {
                Og: () => Q,
                Ck: () => K,
                FF: () => q,
                VV: () => X,
                jQ: () => F
            });
            var n = r("S+0I"),
                a = r("mguP"),
                i = r("jbFV"),
                o = r.n(i),
                s = r("mXdx"),
                c = r("DTvD"),
                u = r("0Rlb"),
                l = r("T0Sc"),
                d = function() {
                    var e = (0, l.o)("", "trade-ui").getI18n;
                    return (0, c.useMemo)((function() {
                        return {
                            moreInfo: e("kline-sync-more-info", {
                                defaultValue: "More Info"
                            }),
                            chartSynchronization: e("kline-drawings-sync-mode", {
                                defaultValue: "Chart Synchronization"
                            }),
                            chartDrawingSyncMode: e("kline-sync-mode", {
                                defaultValue: "Chart Drawings Sync Mode"
                            }),
                            chartDrawingSyncModeTooltip: e("kline-sync-mode-tooltip", {
                                defaultValue: "Chart Drawings Sync Mode: Enter a mode where drawings are saved to the server and synced across devices which also has the feature turned on. Limited to 100 drawings per symbol/trading pair."
                            }),
                            cancel: e("trd-dialog-cancel", {
                                defaultValue: "Cancel"
                            }),
                            confirm: e("trd-dialog-confirm", {
                                defaultValue: "Confirm"
                            }),
                            doNotShowAgain: e("do-not-show-again", {
                                defaultValue: "Don't Show Again For 7 Days"
                            }),
                            drawing: {
                                tooltip: e("kline-drawing-tooltip", {
                                    defaultValue: "Chart Drawings Sync Mode: Enter a mode where drawings are saved to the server and synced across devices which also has the feature turned on. Limited to 100 drawings per symbol/trading pair. Available on original chart view."
                                })
                            },
                            addDrawings: {
                                title: e("add-drawings", {
                                    defaultValue: "Add Drawings"
                                }),
                                description: e("add-drawings-description", {
                                    defaultValue: "Drawings saved locally will be added to drawings on the server for this symbol/token. Limited to 100 drawings per symbol/trading pair."
                                }),
                                tooltip: e("add-drawings-tooltip", {
                                    defaultValue: "Add Drawings:  Drawings saved locally will be added to drawings on the server for this symbol/token."
                                }),
                                toast: {
                                    succeed: e("add-drawings-succeed-toast", {
                                        defaultValue: "Drawings successfully added"
                                    }),
                                    failed: e("add-drawings-failed-toast", {
                                        defaultValue: "Add Drawings unsuccessful"
                                    })
                                }
                            },
                            overwriteDrawings: {
                                title: e("overwrite-drawings", {
                                    defaultValue: "Overwrite Drawings"
                                }),
                                description: e("overwrite-drawings-description", {
                                    defaultValue: "Drawings saved locally will replace drawings on the server for this symbol/token. Limited to 100 drawings per symbol/trading pair. Drawings replaced cannot be retrieved."
                                }),
                                tooltip: e("overwrite-drawings-tooltip", {
                                    defaultValue: "Overwrite Drawings: Drawings saved locally will replace drawings on the server for this symbol/token."
                                }),
                                toast: {
                                    succeed: e("overwrite-drawings-succeed-toast", {
                                        defaultValue: "Drawings successfully overwritten"
                                    }),
                                    failed: e("overwrite-drawings-failed-toast", {
                                        defaultValue: "Overwrite Drawings unsuccessful"
                                    })
                                }
                            },
                            indicator: {
                                title: e("kline-indicator-sync-title", {
                                    defaultValue: "Chart Indicators Sync Mode"
                                }),
                                dialog: {
                                    title: e("kline-indicator-sync-dialog-title", {
                                        defaultValue: "Overwrite Indicator Settings"
                                    }),
                                    description: e("kline-indicator-sync-description", {
                                        defaultValue: "Indicator Settings saved locally will replace indicator settings on the server."
                                    })
                                },
                                tooltip1: e("kline-indicator-sync-tooltip-1", {
                                    defaultValue: "Chart Indicators Sync Mode: Will save your indicator settings to the server and sync across devices which also has the feature turned on. Available on original chart view."
                                }),
                                tooltip2: e("kline-indicator-sync-tooltip-2", {
                                    defaultValue: "Overwrite Indicators: Indicator settings saved locally will replace indicators settings on the server"
                                }),
                                overwrite: e("kline-indicator-sync-overwrite", {
                                    defaultValue: "Overwrite"
                                }),
                                toast: {
                                    succeed: e("overwrite-indicators-succeed-toast", {
                                        defaultValue: "Indicator Settings successfully overwritten"
                                    })
                                }
                            }
                        }
                    }), [e])
                },
                f = r("hrAD"),
                p = r("qoEP"),
                m = r("f3y+"),
                v = r("tSdT"),
                g = r("I4z7"),
                M = r("Gz4J"),
                b = r("kcvK"),
                y = r("HvRD"),
                h = function(e) {
                    var t = e.children,
                        r = e.width,
                        n = void 0 === r ? 220 : r;
                    return (0, s.jsx)(b.A, {
                        enablePortal: !0,
                        useReactPopper: !0,
                        arrow: !0,
                        reactPopperProps: {
                            sameWidth: !1,
                            popperWidth: n
                        },
                        bubbleClassName: "typography-caption1 text-SecondaryBg [&_.bn-bubble-content]:!max-h-full",
                        trigger: "hover",
                        tooltips: t,
                        children: (0, s.jsx)(y.A, {
                            className: "text-IconNormal hover:text-PrimaryText text-[16px]"
                        })
                    })
                },
                j = r("oQEc"),
                I = r("q+oq"),
                w = r("Qhol"),
                k = r("gz7j"),
                S = r("CLKF"),
                x = r("lSwr"),
                N = function() {
                    var e = (0, a._)((0, k.s)(), 1)[0],
                        t = (0, S.O)();
                    return {
                        namespace: (0, c.useMemo)((function() {
                            return t ? x.ZC : x.X8
                        }), [t]),
                        symbol: e
                    }
                },
                T = function(e) {
                    return function() {
                        var t = (0, w.nHk)(),
                            r = (0, j.x)("finance-common", e),
                            n = r.result,
                            a = r.isLoading;
                        return !!(0, c.useMemo)((function() {
                            return t && !a && (null === n || void 0 === n ? void 0 : n.pass)
                        }), [a, t, null === n || void 0 === n ? void 0 : n.pass])
                    }
                },
                z = function(e) {
                    var t = e.key,
                        r = e.trackCallback;
                    return function() {
                        var e = (0, a._)((0, I.T)(t, !1), 2),
                            n = e[0],
                            i = void 0 !== n && n,
                            o = e[1];
                        return {
                            toggle: (0, c.useCallback)((function() {
                                var e = !i;
                                o(e), r(e)
                            }), [i, o]),
                            data: i,
                            setData: o
                        }
                    }
                },
                _ = r("wtFP"),
                D = "kline-drawings-sync-key",
                C = T("Web_Drawings_to_BE"),
                A = z({
                    key: D,
                    trackCallback: function(e) {
                        (0, _.u4)("$WebClick", {
                            module: "Preference_&_style_settings",
                            $element_id: "kline_sync_mode",
                            action: e ? "turn_on" : "turn_off"
                        })
                    }
                }),
                L = function() {
                    var e = C(),
                        t = A();
                    return (0, p._)((0, f._)({}, t), {
                        data: t.data && e
                    })
                },
                Y = function() {
                    var e = d();
                    return (0, s.jsxs)(h, {
                        children: [e.drawing.tooltip, " ", (0, s.jsx)("a", {
                            className: "typography-caption0 text-TextLink no-underline",
                            target: "_blank",
                            href: "/support/faq/ada761201c6f44d1acc125e27b680331",
                            children: e.moreInfo
                        }), (0, s.jsx)("div", {
                            children: e.overwriteDrawings.tooltip
                        }), (0, s.jsx)("div", {
                            children: e.addDrawings.tooltip
                        })]
                    })
                },
                E = function(e) {
                    var t = e.onAdd,
                        r = e.onOverwrite,
                        n = d(),
                        a = L(),
                        i = a.toggle,
                        o = a.data;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "setting-item-content-i",
                            children: [(0, s.jsxs)("div", {
                                className: "item-left gap-[6px]",
                                children: [n.chartDrawingSyncMode, (0, s.jsx)(Y, {})]
                            }), (0, s.jsx)(g.A, {
                                size: "small",
                                checked: o,
                                onChange: i
                            })]
                        }), o && (0, s.jsxs)("div", {
                            className: "flex gap-[--space-2xs] h-[24px]",
                            children: [(0, s.jsx)(M.A, {
                                className: "w-full h-full typography-subtitle3",
                                style: {
                                    minHeight: 0
                                },
                                variant: "secondary",
                                onClick: r,
                                children: n.overwriteDrawings.title
                            }), (0, s.jsx)(M.A, {
                                className: "w-full h-full typography-subtitle3",
                                style: {
                                    minHeight: 0
                                },
                                variant: "secondary",
                                onClick: t,
                                children: n.addDrawings.title
                            })]
                        })]
                    })
                },
                P = r("sTk4"),
                Z = "kline-indicator-sync-key",
                O = T("Indicators_to_BE"),
                V = z({
                    key: Z,
                    trackCallback: function(e) {
                        (0, _.u4)("$WebClick", {
                            module: "Preference_&_style_settings",
                            $element_id: "chart_indicators_sync_mode",
                            action: e ? "turn_on" : "turn_off"
                        })
                    }
                }),
                B = function() {
                    var e = O(),
                        t = V();
                    return (0, p._)((0, f._)({}, t), {
                        data: t.data && e
                    })
                },
                R = function() {
                    var e = d();
                    return (0, s.jsxs)(h, {
                        children: [(0, s.jsx)("div", {
                            children: e.indicator.tooltip1
                        }), (0, s.jsx)("a", {
                            className: "typography-caption0 text-TextLink no-underline",
                            target: "_blank",
                            href: "/support/faq/ada761201c6f44d1acc125e27b680331",
                            children: e.moreInfo
                        }), (0, s.jsx)("div", {
                            children: e.indicator.tooltip2
                        })]
                    })
                },
                U = function(e) {
                    var t = e.onOverwrite,
                        r = d(),
                        n = B(),
                        a = n.toggle,
                        i = n.data;
                    return (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "setting-item-content-i",
                            children: [(0, s.jsxs)("div", {
                                className: "item-left gap-[6px]",
                                children: [r.indicator.title, (0, s.jsx)(R, {})]
                            }), (0, s.jsx)(g.A, {
                                size: "small",
                                checked: i,
                                onChange: a
                            })]
                        }), i && (0, s.jsxs)("div", {
                            className: "flex gap-[--space-2xs] h-[24px]",
                            children: [(0, s.jsx)(M.A, {
                                className: "w-full h-full typography-subtitle3 p-0",
                                style: {
                                    minHeight: 0
                                },
                                variant: "secondary",
                                onClick: t,
                                children: r.indicator.overwrite
                            }), (0, s.jsx)("div", {
                                className: "w-full"
                            })]
                        })]
                    })
                },
                W = r("jwne"),
                H = r("zxgP"),
                G = function(e) {
                    var t = e.type,
                        r = e.visible,
                        n = e.onCancel,
                        a = e.onConfirm,
                        i = (0, c.useState)(!1),
                        o = i[0],
                        u = i[1],
                        l = d(),
                        f = function(e) {
                            var t = d();
                            switch (e) {
                                case "drawing:add":
                                    return t.addDrawings.title;
                                case "drawing:overwrite":
                                    return t.overwriteDrawings.title;
                                case "indicator:overwrite":
                                    return t.indicator.dialog.title;
                                default:
                                    return ""
                            }
                        }(t),
                        p = function(e) {
                            var t = d();
                            switch (e) {
                                case "drawing:add":
                                    return t.addDrawings.description;
                                case "drawing:overwrite":
                                    return t.overwriteDrawings.description;
                                case "indicator:overwrite":
                                    return t.indicator.dialog.description;
                                default:
                                    return ""
                            }
                        }(t),
                        m = (0, c.useCallback)((function() {
                            u(!1), null === n || void 0 === n || n()
                        }), [n]),
                        v = (0, c.useCallback)((function() {
                            u(!1), null === a || void 0 === a || a({
                                type: t,
                                doNotShowAgain: o
                            })
                        }), [o, a, t]);
                    return (0, s.jsxs)(W.Ay, {
                        visible: r,
                        onClose: m,
                        enablePortal: !0,
                        children: [(0, s.jsxs)(W.Ay.Content, {
                            className: "flex flex-col",
                            children: [(0, s.jsx)("div", {
                                className: "flex items-center justify-center typography-headline5 text-PrimaryText mb-[--space-2xs]",
                                children: f
                            }), (0, s.jsx)("div", {
                                className: "typography-body3 text-PrimaryText",
                                children: p
                            }), (0, s.jsx)("div", {
                                className: "border-0 border-b-[1px] border-solid border-Line my-[--space-m]"
                            }), (0, s.jsx)(H.A, {
                                onChange: function(e, t) {
                                    return u(t)
                                },
                                sz: "md",
                                children: l.doNotShowAgain
                            })]
                        }), (0, s.jsxs)(W.Ay.Footer, {
                            className: "gap-space-2xs",
                            children: [(0, s.jsx)(M.A, {
                                variant: "secondary",
                                className: "w-full h-[40px] min-h-0",
                                onClick: m,
                                children: l.cancel
                            }), (0, s.jsx)(M.A, {
                                variant: "primary",
                                className: "w-full h-[40px] min-h-0",
                                onClick: v,
                                children: l.confirm
                            })]
                        })]
                    })
                },
                Q = D,
                K = Z,
                X = L,
                F = B,
                J = 6048e5,
                q = function() {
                    var e = (0, c.useState)(!1),
                        t = e[0],
                        r = e[1],
                        i = (0, c.useState)("drawing:add"),
                        l = i[0],
                        f = i[1],
                        p = (0, a._)((0, u.M)("kline-drawings-hide-overwriting-dialog", 0), 2),
                        g = p[0],
                        M = p[1],
                        b = (0, a._)((0, u.M)("kline-drawings-hide-add-dialog", 0), 2),
                        y = b[0],
                        h = b[1],
                        j = (0, a._)((0, u.M)("kline-indicators-hide-overwrite-dialog", 0), 2),
                        I = j[0],
                        w = j[1],
                        k = d(),
                        S = C(),
                        x = O(),
                        T = function() {
                            var e = d(),
                                t = N(),
                                r = t.namespace,
                                a = t.symbol,
                                i = (0, v.A)().enqueueNotification,
                                s = (0, c.useMemo)((function() {
                                    return {
                                        namespace: r,
                                        symbol: a,
                                        type: "sp"
                                    }
                                }), [r, a]),
                                u = (0, m.eN)({
                                    target: s
                                }),
                                l = (0, m.pC)({
                                    target: s
                                });
                            return {
                                add: (0, c.useCallback)((0, n._)(o().mark((function t() {
                                    return o().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, u();
                                            case 3:
                                                i({
                                                    variant: "success",
                                                    message: e.addDrawings.toast.succeed
                                                }), t.next = 9;
                                                break;
                                            case 6:
                                                t.prev = 6, t.t0 = t.catch(0), i({
                                                    variant: "error",
                                                    message: e.addDrawings.toast.failed
                                                });
                                            case 9:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 6]
                                    ])
                                }))), [u, i, e.addDrawings.toast.failed, e.addDrawings.toast.succeed]),
                                overwrite: (0, c.useCallback)((0, n._)(o().mark((function t() {
                                    return o().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, l();
                                            case 3:
                                                i({
                                                    variant: "success",
                                                    message: e.overwriteDrawings.toast.succeed
                                                }), t.next = 9;
                                                break;
                                            case 6:
                                                t.prev = 6, t.t0 = t.catch(0), i({
                                                    variant: "error",
                                                    message: e.overwriteDrawings.toast.failed
                                                });
                                            case 9:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 6]
                                    ])
                                }))), [l, i, e.overwriteDrawings.toast.failed, e.overwriteDrawings.toast.succeed])
                            }
                        }(),
                        z = function() {
                            var e = d(),
                                t = N().namespace,
                                r = (0, v.A)().enqueueNotification,
                                a = (0, P.hm)({
                                    namespace: t
                                });
                            return {
                                overwrite: (0, c.useCallback)((0, n._)(o().mark((function t() {
                                    return o().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, t.next = 3, a();
                                            case 3:
                                                r({
                                                    variant: "success",
                                                    message: e.indicator.toast.succeed
                                                }), t.next = 8;
                                                break;
                                            case 6:
                                                t.prev = 6, t.t0 = t.catch(0);
                                            case 8:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 6]
                                    ])
                                }))), [a, r, e.indicator.toast.succeed])
                            }
                        }(),
                        _ = (0, c.useCallback)((0, n._)(o().mark((function e() {
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(Date.now() >= J + g)) {
                                            e.next = 4;
                                            break
                                        }
                                        f("drawing:overwrite"), r(!0), e.next = 6;
                                        break;
                                    case 4:
                                        return e.next = 6, T.overwrite();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [T, g]),
                        D = (0, c.useCallback)((0, n._)(o().mark((function e() {
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(Date.now() >= J + y)) {
                                            e.next = 4;
                                            break
                                        }
                                        f("drawing:add"), r(!0), e.next = 6;
                                        break;
                                    case 4:
                                        return e.next = 6, T.add();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [T, y]),
                        A = (0, c.useCallback)((0, n._)(o().mark((function e() {
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!(Date.now() >= J + I)) {
                                            e.next = 4;
                                            break
                                        }
                                        f("indicator:overwrite"), r(!0), e.next = 6;
                                        break;
                                    case 4:
                                        return e.next = 6, z.overwrite();
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [z, I]),
                        L = (0, c.useCallback)((function() {
                            return r(!1)
                        }), []),
                        Y = (0, c.useCallback)((function(e) {
                            var t = e.type,
                                r = e.doNotShowAgain;
                            switch (L(), t) {
                                case "drawing:add":
                                    T.add(), r && h(Date.now());
                                    break;
                                case "drawing:overwrite":
                                    T.overwrite(), r && M(Date.now());
                                    break;
                                case "indicator:overwrite":
                                    z.overwrite(), r && w(Date.now())
                            }
                        }), [T, z, L, h, w, M]);
                    return S || S ? (0, s.jsxs)(s.Fragment, {
                        children: [(0, s.jsxs)("div", {
                            className: "setting-item",
                            children: [(0, s.jsx)("div", {
                                className: "flex items-center h-[32px] gap-1",
                                children: (0, s.jsx)("div", {
                                    className: "typography-caption2 text-TertiaryText",
                                    children: k.chartSynchronization
                                })
                            }), S && (0, s.jsx)(E, {
                                onAdd: D,
                                onOverwrite: _
                            }), x && (0, s.jsx)(U, {
                                onOverwrite: A
                            })]
                        }), (0, s.jsx)(G, {
                            visible: t,
                            onCancel: L,
                            onConfirm: Y,
                            type: l
                        })]
                    }) : null
                }
        },
        lhQG: function(e) {
            e.exports = function() {
                "use strict";
                return function(e, t, r) {
                    e = e || {};
                    var n = t.prototype,
                        a = {
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

                    function i(e, t, r, a) {
                        return n.fromToBase(e, t, r, a)
                    }
                    r.en.relativeTime = a, n.fromToBase = function(t, n, i, o, s) {
                        for (var c, u, l, d = i.$locale().relativeTime || a, f = e.thresholds || [{
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
                            }], p = f.length, m = 0; m < p; m += 1) {
                            var v = f[m];
                            v.d && (c = o ? r(t).diff(i, v.d, !0) : i.diff(t, v.d, !0));
                            var g = (e.rounding || Math.round)(Math.abs(c));
                            if (l = c > 0, g <= v.r || !v.r) {
                                g <= 1 && m > 0 && (v = f[m - 1]);
                                var M = d[v.l];
                                s && (g = s("" + g)), u = "string" == typeof M ? M.replace("%d", g) : M(g, n, v.l, l);
                                break
                            }
                        }
                        if (n) return u;
                        var b = l ? d.future : d.past;
                        return "function" == typeof b ? b(u) : b.replace("%s", u)
                    }, n.to = function(e, t) {
                        return i(e, t, this, !0)
                    }, n.from = function(e, t) {
                        return i(e, t, this)
                    };
                    var o = function(e) {
                        return e.$u ? r.utc() : r()
                    };
                    n.toNow = function(e) {
                        return this.to(o(this), e)
                    }, n.fromNow = function(e) {
                        return this.from(o(this), e)
                    }
                }
            }()
        },
        "0wzd": e => {
            e.exports = function(e) {
                for (var t = -1, r = null == e ? 0 : e.length, n = 0, a = []; ++t < r;) {
                    var i = e[t];
                    i && (a[n++] = i)
                }
                return a
            }
        },
        brax: (e, t, r) => {
            var n = r("DEoa");
            e.exports = function(e, t) {
                return t = "function" == typeof t ? t : void 0, e && e.length ? n(e, void 0, t) : []
            }
        },
        VYio: (e, t, r) => {
            var n = {
                "./af": ["4LKH", 736],
                "./af.js": ["4LKH", 736],
                "./ar": ["AzWW"],
                "./ar-dz": ["iYKb", 307],
                "./ar-dz.js": ["iYKb", 307],
                "./ar-kw": ["pWHV", 5175],
                "./ar-kw.js": ["pWHV", 5175],
                "./ar-ly": ["VbHQ", 1246],
                "./ar-ly.js": ["VbHQ", 1246],
                "./ar-ma": ["fiQQ", 7031],
                "./ar-ma.js": ["fiQQ", 7031],
                "./ar-ps": ["JMIc", 2616],
                "./ar-ps.js": ["JMIc", 2616],
                "./ar-sa": ["6GoU", 109],
                "./ar-sa.js": ["6GoU", 109],
                "./ar-tn": ["5vdA", 1703],
                "./ar-tn.js": ["5vdA", 1703],
                "./ar.js": ["AzWW"],
                "./az": ["NS2I", 36],
                "./az.js": ["NS2I", 36],
                "./be": ["c3Gu", 598],
                "./be.js": ["c3Gu", 598],
                "./bg": ["B3GR", 6892],
                "./bg.js": ["B3GR", 6892],
                "./bm": ["K2Sr", 9326],
                "./bm.js": ["K2Sr", 9326],
                "./bn": ["qf9B", 8955],
                "./bn-bd": ["EpV2", 9014],
                "./bn-bd.js": ["EpV2", 9014],
                "./bn.js": ["qf9B", 8955],
                "./bo": ["3m+w", 3284],
                "./bo.js": ["3m+w", 3284],
                "./br": ["6+mW", 9111],
                "./br.js": ["6+mW", 9111],
                "./bs": ["5rTU", 3984],
                "./bs.js": ["5rTU", 3984],
                "./ca": ["fRh6", 4219],
                "./ca.js": ["fRh6", 4219],
                "./cs": ["FyAa", 2445],
                "./cs.js": ["FyAa", 2445],
                "./cv": ["RjVM", 1682],
                "./cv.js": ["RjVM", 1682],
                "./cy": ["CdxN", 7555],
                "./cy.js": ["CdxN", 7555],
                "./da": ["Ff5/", 4200],
                "./da.js": ["Ff5/", 4200],
                "./de": ["Ew1e", 468],
                "./de-at": ["He4g", 2568],
                "./de-at.js": ["He4g", 2568],
                "./de-ch": ["w1Bj", 6622],
                "./de-ch.js": ["w1Bj", 6622],
                "./de.js": ["Ew1e", 468],
                "./dv": ["1uQ1", 989],
                "./dv.js": ["1uQ1", 989],
                "./el": ["lhnJ", 9494],
                "./el.js": ["lhnJ", 9494],
                "./en-au": ["76eO", 8263],
                "./en-au.js": ["76eO", 8263],
                "./en-ca": ["32Lm", 8317],
                "./en-ca.js": ["32Lm", 8317],
                "./en-gb": ["vjfk"],
                "./en-gb.js": ["vjfk"],
                "./en-ie": ["iXf4", 4879],
                "./en-ie.js": ["iXf4", 4879],
                "./en-il": ["wXiK", 9632],
                "./en-il.js": ["wXiK", 9632],
                "./en-in": ["akoQ", 6954],
                "./en-in.js": ["akoQ", 6954],
                "./en-nz": ["Rcv9", 7321],
                "./en-nz.js": ["Rcv9", 7321],
                "./en-sg": ["lW1s", 5903],
                "./en-sg.js": ["lW1s", 5903],
                "./eo": ["EX2g", 1251],
                "./eo.js": ["EX2g", 1251],
                "./es": ["THOc", 5119],
                "./es-do": ["6QRU", 8949],
                "./es-do.js": ["6QRU", 8949],
                "./es-mx": ["Mf9l", 4093],
                "./es-mx.js": ["Mf9l", 4093],
                "./es-us": ["RSNS", 1748],
                "./es-us.js": ["RSNS", 1748],
                "./es.js": ["THOc", 5119],
                "./et": ["9KJG", 8270],
                "./et.js": ["9KJG", 8270],
                "./eu": ["Er+O", 8189],
                "./eu.js": ["Er+O", 8189],
                "./fa": ["CvpB", 6054],
                "./fa.js": ["CvpB", 6054],
                "./fi": ["/TCz", 7022],
                "./fi.js": ["/TCz", 7022],
                "./fil": ["1suU", 7928],
                "./fil.js": ["1suU", 7928],
                "./fo": ["5Seb", 5064],
                "./fo.js": ["5Seb", 5064],
                "./fr": ["XXvq", 2163],
                "./fr-ca": ["eFgg", 6520],
                "./fr-ca.js": ["eFgg", 6520],
                "./fr-ch": ["ucYC", 5479],
                "./fr-ch.js": ["ucYC", 5479],
                "./fr.js": ["XXvq", 2163],
                "./fy": ["JnmS", 7502],
                "./fy.js": ["JnmS", 7502],
                "./ga": ["tHqc", 1623],
                "./ga.js": ["tHqc", 1623],
                "./gd": ["RGGe", 9948],
                "./gd.js": ["RGGe", 9948],
                "./gl": ["TMwQ", 6868],
                "./gl.js": ["TMwQ", 6868],
                "./gom-deva": ["cKss", 9221],
                "./gom-deva.js": ["cKss", 9221],
                "./gom-latn": ["m6r2", 622],
                "./gom-latn.js": ["m6r2", 622],
                "./gu": ["NsbS", 5827],
                "./gu.js": ["NsbS", 5827],
                "./he": ["zQTn", 728],
                "./he.js": ["zQTn", 728],
                "./hi": ["19UU", 1628],
                "./hi.js": ["19UU", 1628],
                "./hr": ["U1j3", 7517],
                "./hr.js": ["U1j3", 7517],
                "./hu": ["i+AT", 6664],
                "./hu.js": ["i+AT", 6664],
                "./hy-am": ["AKgk", 959],
                "./hy-am.js": ["AKgk", 959],
                "./id": ["jWO5", 9285],
                "./id.js": ["jWO5", 9285],
                "./is": ["B0cQ", 9419],
                "./is.js": ["B0cQ", 9419],
                "./it": ["opyM", 8146],
                "./it-ch": ["U2uA", 2172],
                "./it-ch.js": ["U2uA", 2172],
                "./it.js": ["opyM", 8146],
                "./ja": ["7vJ8", 4370],
                "./ja.js": ["7vJ8", 4370],
                "./jv": ["jViO", 8539],
                "./jv.js": ["jViO", 8539],
                "./ka": ["4Xf5", 4659],
                "./ka.js": ["4Xf5", 4659],
                "./kk": ["45DQ", 8173],
                "./kk.js": ["45DQ", 8173],
                "./km": ["LWev", 8895],
                "./km.js": ["LWev", 8895],
                "./kn": ["NNfW", 8354],
                "./kn.js": ["NNfW", 8354],
                "./ko": ["eqij", 417],
                "./ko.js": ["eqij", 417],
                "./ku": ["Wx9r", 1943],
                "./ku-kmr": ["OOvS", 7240],
                "./ku-kmr.js": ["OOvS", 7240],
                "./ku.js": ["Wx9r", 1943],
                "./ky": ["pwk2", 3531],
                "./ky.js": ["pwk2", 3531],
                "./lb": ["mgsV", 3129],
                "./lb.js": ["mgsV", 3129],
                "./lo": ["z3on", 5358],
                "./lo.js": ["z3on", 5358],
                "./lt": ["cnxp", 6675],
                "./lt.js": ["cnxp", 6675],
                "./lv": ["RojT", 4773],
                "./lv.js": ["RojT", 4773],
                "./me": ["XNyE", 4373],
                "./me.js": ["XNyE", 4373],
                "./mi": ["aRT9", 4753],
                "./mi.js": ["aRT9", 4753],
                "./mk": ["VvHf", 2767],
                "./mk.js": ["VvHf", 2767],
                "./ml": ["UnS6", 9086],
                "./ml.js": ["UnS6", 9086],
                "./mn": ["msLh", 1028],
                "./mn.js": ["msLh", 1028],
                "./mr": ["PxH8", 5328],
                "./mr.js": ["PxH8", 5328],
                "./ms": ["d6Rg", 5047],
                "./ms-my": ["XeaA", 6358],
                "./ms-my.js": ["XeaA", 6358],
                "./ms.js": ["d6Rg", 5047],
                "./mt": ["XaRh", 6518],
                "./mt.js": ["XaRh", 6518],
                "./my": ["fEcQ", 1745],
                "./my.js": ["fEcQ", 1745],
                "./nb": ["/aZC", 1211],
                "./nb.js": ["/aZC", 1211],
                "./ne": ["HI8N", 7778],
                "./ne.js": ["HI8N", 7778],
                "./nl": ["6gsI", 7081],
                "./nl-be": ["tD54", 3003],
                "./nl-be.js": ["tD54", 3003],
                "./nl.js": ["6gsI", 7081],
                "./nn": ["8+7o", 3591],
                "./nn.js": ["8+7o", 3591],
                "./oc-lnc": ["c5b8", 6783],
                "./oc-lnc.js": ["c5b8", 6783],
                "./pa-in": ["Gdao", 6314],
                "./pa-in.js": ["Gdao", 6314],
                "./pl": ["upsv", 9567],
                "./pl.js": ["upsv", 9567],
                "./pt": ["R5f+", 644],
                "./pt-br": ["W5hF", 4684],
                "./pt-br.js": ["W5hF", 4684],
                "./pt.js": ["R5f+", 644],
                "./ro": ["/r7v", 1156],
                "./ro.js": ["/r7v", 1156],
                "./ru": ["m7Wk", 582],
                "./ru.js": ["m7Wk", 582],
                "./sd": ["Qbp+", 3771],
                "./sd.js": ["Qbp+", 3771],
                "./se": ["FAV7", 767],
                "./se.js": ["FAV7", 767],
                "./si": ["Xx0t", 7315],
                "./si.js": ["Xx0t", 7315],
                "./sk": ["f9o+", 5333],
                "./sk.js": ["f9o+", 5333],
                "./sl": ["LGl+", 5952],
                "./sl.js": ["LGl+", 5952],
                "./sq": ["eAXZ", 3451],
                "./sq.js": ["eAXZ", 3451],
                "./sr": ["pxp8", 2238],
                "./sr-cyrl": ["/7Kh", 8849],
                "./sr-cyrl.js": ["/7Kh", 8849],
                "./sr.js": ["pxp8", 2238],
                "./ss": ["UKVq", 2941],
                "./ss.js": ["UKVq", 2941],
                "./sv": ["hFbw", 7490],
                "./sv.js": ["hFbw", 7490],
                "./sw": ["xiZw", 5377],
                "./sw.js": ["xiZw", 5377],
                "./ta": ["nlpP", 5336],
                "./ta.js": ["nlpP", 5336],
                "./te": ["HQhK", 1604],
                "./te.js": ["HQhK", 1604],
                "./tet": ["mpv2", 2706],
                "./tet.js": ["mpv2", 2706],
                "./tg": ["j/TP", 1838],
                "./tg.js": ["j/TP", 1838],
                "./th": ["u22q", 2711],
                "./th.js": ["u22q", 2711],
                "./tk": ["ivkF", 8986],
                "./tk.js": ["ivkF", 8986],
                "./tl-ph": ["sBhT", 1304],
                "./tl-ph.js": ["sBhT", 1304],
                "./tlh": ["CZjc", 4523],
                "./tlh.js": ["CZjc", 4523],
                "./tr": ["w0CP", 4497],
                "./tr.js": ["w0CP", 4497],
                "./tzl": ["GNLl", 6449],
                "./tzl.js": ["GNLl", 6449],
                "./tzm": ["EBv7", 2546],
                "./tzm-latn": ["qnHE", 8226],
                "./tzm-latn.js": ["qnHE", 8226],
                "./tzm.js": ["EBv7", 2546],
                "./ug-cn": ["k+B5", 2765],
                "./ug-cn.js": ["k+B5", 2765],
                "./uk": ["SAA4", 7767],
                "./uk.js": ["SAA4", 7767],
                "./ur": ["f07v", 1560],
                "./ur.js": ["f07v", 1560],
                "./uz": ["1GRv", 9472],
                "./uz-latn": ["cIDD", 2576],
                "./uz-latn.js": ["cIDD", 2576],
                "./uz.js": ["1GRv", 9472],
                "./vi": ["IuGO", 7582],
                "./vi.js": ["IuGO", 7582],
                "./x-pseudo": ["dRna", 7150],
                "./x-pseudo.js": ["dRna", 7150],
                "./yo": ["B1Eu", 6535],
                "./yo.js": ["B1Eu", 6535],
                "./zh-cn": ["+rfd"],
                "./zh-cn.js": ["+rfd"],
                "./zh-hk": ["cJYx", 199],
                "./zh-hk.js": ["cJYx", 199],
                "./zh-mo": ["dA8N", 8274],
                "./zh-mo.js": ["dA8N", 8274],
                "./zh-tw": ["yT6F", 5327],
                "./zh-tw.js": ["yT6F", 5327]
            };

            function a(e) {
                if (!r.o(n, e)) return Promise.resolve().then((() => {
                    var t = new Error("Cannot find module '" + e + "'");
                    throw t.code = "MODULE_NOT_FOUND", t
                }));
                var t = n[e],
                    a = t[0];
                return Promise.all(t.slice(1).map(r.e)).then((() => r.t(a, 23)))
            }
            a.keys = () => Object.keys(n), a.id = "VYio", e.exports = a
        }
    }
]);