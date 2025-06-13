"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "223c3a31-cad3-53d5-a421-b346f5e64e58")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [777], {
        q5Na: (e, n, r) => {
            var t;
            r.d(n, {
                    d: () => t
                }),
                function(e) {
                    e.Overview = "overview", e.TradingData = "trading_data", e.Opportunity = "opportunity", e.TokenUnlock = "token_unlock"
                }(t || (t = {}))
        },
        "Mco/": (e, n, r) => {
            r.d(n, {
                a: () => a,
                t: () => t
            });
            var t = function(e) {
                    setTimeout(e, 0)
                },
                a = function() {
                    return new Promise((function(e) {
                        setTimeout(e, 0)
                    }))
                }
        },
        Cl8C: (e, n, r) => {
            r.d(n, {
                n: () => a
            });
            var t = r("tEf9"),
                a = function(e, n) {
                    var r;
                    return function() {
                        for (var a = arguments.length, i = new Array(a), u = 0; u < a; u++) i[u] = arguments[u];
                        var o, c = +new Date;
                        (!r || c - r > n) && ((o = e).call.apply(o, [null].concat((0, t.A)(i))), r = c)
                    }
                }
        },
        Xrpz: (e, n, r) => {
            r.d(n, {
                AF: () => d,
                DB: () => p,
                QK: () => l,
                aD: () => s,
                sB: () => o,
                t9: () => c
            });
            var t = r("VP0d"),
                a = r("nsO7"),
                i = r("WgX+"),
                u = r("AcsR"),
                o = function(e) {
                    for (var n = {}, r = 0; r < e.length; r += 2) n[e[r]] = e[r + 1];
                    return n
                },
                c = function(e) {
                    var n, r;
                    return ((null === e || void 0 === e || null === (n = e.req) || void 0 === n || null === (r = n.cookies) || void 0 === r ? void 0 : r.userPreferredCurrency) || "").split("_")[0]
                },
                s = function(e) {
                    return {
                        coinToFilter: (0, a.keyBy)((0, a.pickBy)(e, (function(e) {
                            var n = e.isLegalMoney,
                                r = e.etf,
                                t = e.tags;
                            return n || r || t.includes("stablecoin")
                        })), "assetCode")
                    }
                },
                p = function(e, n) {
                    if (!u.cp) {
                        var r = (null === n || void 0 === n ? void 0 : n.cookies) || {},
                            t = r.theme,
                            a = r.color,
                            o = void 0 === a ? i.o0 : a,
                            c = r.isRedUpGreenDown,
                            s = void 0 === c ? i.nN : c;
                        e.cookies.updateState({
                            theme: t
                        }), e.ssrStore.updateState({
                            color: o,
                            isRedUpGreenDown: s
                        })
                    }
                },
                l = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                        n = arguments.length > 1 ? arguments[1] : void 0;
                    switch (!0) {
                        case "kz" === n:
                        case "ru-KZ" === n:
                        case "en-KZ" === n:
                        case "kk-KZ" === n:
                            return e.filter((function(e) {
                                var n = e.tag;
                                return ["Metaverse", "defi", "innovation-zone", "Layer1_Layer2", "pos", "pow", "bnbchain"].includes(n)
                            }));
                        default:
                            return e.filter((function(e) {
                                return "newListing" !== e.tag
                            }))
                    }
                },
                f = {
                    c: "close",
                    q: "quoteAsset",
                    b: "baseAsset"
                },
                d = function(e) {
                    return (0, a.merge)(e.map((function(e) {
                        return (0, a.fromPairs)(Object.entries(e).map((function(e) {
                            var n = (0, t.A)(e, 2),
                                r = n[0],
                                a = n[1];
                            return [f[r], a]
                        })))
                    })), {})
                }
        },
        "WgX+": (e, n, r) => {
            r.d(n, {
                T: () => c,
                by: () => v,
                nN: () => f,
                nd: () => s,
                o0: () => p
            });
            var t = r("DTvD"),
                a = r("iwTY"),
                i = r("dn+i"),
                u = r("T3Fm"),
                o = r("AcsR"),
                c = "light",
                s = "dark",
                p = "fresh",
                l = "color",
                f = "false",
                d = "isRedUpGreenDown",
                v = function() {
                    var e = (0, i.Rm)(),
                        n = e.color,
                        r = e.isRedUpGreenDown,
                        c = (0, t.useState)(n || p),
                        s = c[0],
                        v = c[1],
                        m = (0, t.useState)(r || f),
                        w = m[0],
                        b = m[1];
                    return (0, t.useEffect)((function() {
                        if (o.cp) return v(n || p), void b(r || f);
                        u.o && (v(a.A.get(l) || p), b(a.A.get(d) || f))
                    }), [n, r]), {
                        color: s,
                        isRedUpGreenDown: "true" === w
                    }
                }
        },
        rpWC: (e, n, r) => {
            r.d(n, {
                F8: () => s,
                WC: () => c,
                tY: () => o
            });
            var t = r("sViW"),
                a = r("Pz56"),
                i = r.n(a),
                u = r("mFFV"),
                o = function() {
                    var e = (0, t.A)(i().mark((function e() {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/margin/v1/public/margin/symbols", e.next = 3, (0, u.i8)("/bapi/margin/v1/public/margin/symbols");
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {
                    var e = (0, t.A)(i().mark((function e() {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/margin/v1/public/isolated-margin/pair/all", e.next = 3, (0, u.i8)("/bapi/margin/v1/public/isolated-margin/pair/all");
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                s = function() {
                    var e = (0, t.A)(i().mark((function e() {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/margin/v1/friendly/margin/pair/all", e.next = 3, (0, u.i8)("/bapi/margin/v1/friendly/margin/pair/all");
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        dZDg: (e, n, r) => {
            r.d(n, {
                AS: () => p,
                An: () => l,
                W0: () => m,
                WG: () => f,
                aJ: () => y,
                jh: () => b,
                l0: () => v,
                o6: () => w,
                o8: () => h
            });
            var t = r("sViW"),
                a = r("BK7R"),
                i = r("Pz56"),
                u = r.n(i),
                o = r("a59x"),
                c = r("mFFV"),
                s = r("l1yP"),
                p = function() {
                    var e = (0, t.A)(u().mark((function e(n, r) {
                        var t, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = (0, o.Eg)("/bapi/asset/v2/public/asset-service/product/get-products", {
                                        includeEtf: n
                                    }), e.next = 3, (0, c.i8)(t, r);
                                case 3:
                                    return a = e.sent.data, e.abrupt("return", a || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = (function() {
                    var e = (0, t.A)(u().mark((function e(n) {
                        var r, t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, o.Eg)("/bapi/apex/v3/public/apex/market/notice/get", {
                                        page: 1,
                                        rows: 1
                                    }), e.next = 3, (0, c.i8)(r, {
                                        headers: {
                                            lang: n
                                        }
                                    });
                                case 3:
                                    return t = e.sent.data, e.abrupt("return", t || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, t.A)(u().mark((function e() {
                        var n;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/apex/v1/public/apex/market/recommend/get-asset", e.next = 3, (0, c.i8)("/bapi/apex/v1/public/apex/market/recommend/get-asset");
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, t.A)(u().mark((function e(n) {
                        var r, t, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.currency, t = (0, o.Eg)("/bapi/apex/v1/friendly/apex/marketing/market/getMarketsPagePairs", {
                                        currency: r
                                    }), e.next = 4, (0, c.i8)(t);
                                case 4:
                                    return a = e.sent.data, e.abrupt("return", (a.pairs || []).map((function(e) {
                                        return (e || "").replace(/\//g, "").toLocaleUpperCase()
                                    })));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, t.A)(u().mark((function e(n) {
                        var r, t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, o.Eg)("/bapi/apex/v1/public/apex/marketing/web/querylangMappingByKey", {
                                        key: n
                                    }), e.next = 3, (0, c.i8)(r);
                                case 3:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()),
                f = function() {
                    var e = (0, t.A)(u().mark((function e(n) {
                        var r, t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, o.Eg)("/bapi/apex/v1/public/apex/marketing/markets/web/highLightSymbolList", {}), e.next = 3, (0, c.i8)(r, n);
                                case 3:
                                    return t = e.sent.data, e.abrupt("return", t || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = {
                    headers: {}
                },
                v = function() {
                    var e = (0, t.A)(u().mark((function e(n, r) {
                        var t, i, s, p = arguments;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = p.length > 2 && void 0 !== p[2] ? p[2] : d, i = (0, o.Eg)("/bapi/asset/v2/public/asset/biz-tags", {
                                        bizKey: n
                                    }), e.next = 4, (0, c.i8)(i, {
                                        headers: (0, a.A)({
                                            lang: r
                                        }, t.headers)
                                    });
                                case 4:
                                    return s = e.sent.data, e.abrupt("return", s || []);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = (function() {
                    var e = (0, t.A)(u().mark((function e() {
                        var n, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = (0, o.Eg)("/bapi/composite/v1/public/marketing/markets/wsSymbol", {}), e.next = 3, (0, c.i8)(n);
                                case 3:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, t.A)(u().mark((function e() {
                        var n, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = (0, o.Eg)("/bapi/margin/v1/friendly/margin/symbols", {}), e.next = 3, (0, c.i8)(n);
                                case 3:
                                    return r = e.sent.data, e.abrupt("return", r || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()),
                w = (function() {
                    var e = (0, t.A)(u().mark((function e() {
                        var n, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = (0, o.Eg)("/bapi/margin/v1/public/isolated-margin/pair/listed", {}), e.next = 3, (0, c.i8)(n);
                                case 3:
                                    return r = e.sent.data, e.abrupt("return", r || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, t.A)(u().mark((function e(n) {
                        var r, t, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.replace(/-/g, ""), t = (0, o.Eg)("/bapi/apex/v1/public/apex/marketing/symbolTotalInfo", {
                                        bizTagsType: r
                                    }), e.next = 4, (0, c.i8)(t);
                                case 4:
                                    return a = e.sent.data, e.abrupt("return", a || {});
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()),
                b = function() {
                    var e = (0, t.A)(u().mark((function e() {
                        var n, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = (0, o.Eg)("/bapi/apex/v1/public/apex/marketing/allSymbolTotalInfo", {}), e.next = 3, (0, c.i8)(n);
                                case 3:
                                    return r = e.sent.data, e.abrupt("return", r || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                g = function() {
                    var e = (0, t.A)(u().mark((function e(n) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, s.Ye)(n), "/bapi/composite/v1/friendly/common/event-log", e.next = 4, (0, c.UY)("/bapi/composite/v1/friendly/common/event-log", {
                                        eventName: n,
                                        host: window.location.host
                                    });
                                case 4:
                                    return r = e.sent, e.abrupt("return", r || []);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                h = function(e) {
                    return new Promise((function(n, r) {
                        setTimeout((function() {
                            return r(new Error("timeout"))
                        }), 3e3), g(e).then(n, r)
                    }))
                },
                y = (function() {
                    var e = (0, t.A)(u().mark((function e(n, r) {
                        var t, i, s, p = arguments;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = p.length > 2 && void 0 !== p[2] ? p[2] : d, i = (0, o.Eg)("/bapi/asset/v1/public/asset-service/product/get-product-active-tags", {
                                        tagBiz: n
                                    }), e.next = 4, (0, c.i8)(i, {
                                        headers: (0, a.A)({
                                            lang: r
                                        }, t.headers)
                                    });
                                case 4:
                                    return s = e.sent.data, e.abrupt("return", s || []);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, t.A)(u().mark((function e(n, r) {
                        var t, i, s, p, l, f = arguments;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = f.length > 2 && void 0 !== f[2] ? f[2] : d, i = (0, o.Eg)("/bapi/accounts/v1/public/commission/symbol-activity-list", n), e.next = 4, (0, c.i8)(i, {
                                        headers: (0, a.A)({
                                            lang: r
                                        }, t.headers)
                                    });
                                case 4:
                                    return s = e.sent.data, p = (s || {}).symbolCommissionActivityList, l = void 0 === p ? [] : p, e.abrupt("return", l);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n, r) {
                        return e.apply(this, arguments)
                    }
                }())
        },
        l1yP: (e, n, r) => {
            r.d(n, {
                Au: () => t,
                Ye: () => a,
                dE: () => u,
                kz: () => o,
                sx: () => i
            });
            var t = {
                    BINANCEPAGEVIEW: "binancePageView",
                    BINANCEWEBCLICK: "BWebClick"
                },
                a = function(e) {
                    var n = window.sensorsDataAnalytic201505 && window.sensorsDataAnalytic201505.readyState && 3 === window.sensorsDataAnalytic201505.readyState.state || !1,
                        r = document.createElement("img");
                    r.width = 1, r.height = 1, r.style.display = "none", r.src = "https://sensors.binance.cloud/bitest.gif?eventName=".concat(e, "&sensorInitState=").concat(n), document.body.appendChild(r), r.onload = function() {
                        document.body.removeChild(r)
                    }
                },
                i = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        r = "".concat(window.location.href, "?").concat(n),
                        t = "https://sensors.binance.cloud/sa.gif?project=binance&data=".concat(n),
                        a = null;
                    return new Promise((function(n) {
                        var i;
                        a = setTimeout(n, 1e3), (null === window || void 0 === window || null === (i = window._sensors) || void 0 === i ? void 0 : i.track) && window._sensors.track(e, {
                            url: r,
                            $option: {
                                server_url: t
                            }
                        }, (function() {
                            return n()
                        }))
                    })).then((function() {
                        return clearTimeout(a)
                    }))
                },
                u = function(e, n) {
                    var r = "".concat(window.location.href, "?").concat(n),
                        t = "https://sensors.binance.cloud/bisa.gif?project=binance&data=".concat(n),
                        a = null;
                    return new Promise((function(n) {
                        var i;
                        a = setTimeout(n, 1e3), (null === window || void 0 === window || null === (i = window._sensors) || void 0 === i ? void 0 : i.track) && window._sensors.track(e, {
                            url: r,
                            $option: {
                                server_url: t
                            }
                        }, (function() {
                            return n()
                        }))
                    })).then((function() {
                        return clearTimeout(a)
                    }))
                },
                o = function(e, n) {
                    window.ga && window.ga("send", "event", {
                        eventAction: n || "webclick",
                        eventCategory: e,
                        eventLabel: window.location.href
                    })
                }
        }
    }
]);
//# debugId=223c3a31-cad3-53d5-a421-b346f5e64e58