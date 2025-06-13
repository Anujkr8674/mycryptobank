"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "29584657-8a00-5831-8de6-8a6be441e326")
    } catch (e) {}
}();
(self.webpackChunkmain_exchange_ui = self.webpackChunkmain_exchange_ui || []).push([
    [9736], {
        qEWw: (e, t, r) => {
            r.d(t, {
                $V: () => n.$V,
                $y: () => n.$y,
                AS: () => n.AS,
                An: () => n.An,
                Bf: () => n.Bf,
                Dm: () => n.Dm,
                EY: () => n.EY,
                Eq: () => n.Eq,
                Ez: () => n.Ez,
                Fj: () => n.Fj,
                GV: () => n.GV,
                Hd: () => n.Hd,
                Ii: () => n.Ii,
                MA: () => n.MA,
                Md: () => n.Md,
                Nm: () => n.Nm,
                Nx: () => n.Nx,
                O$: () => n.O$,
                O8: () => n.O8,
                OM: () => n.OM,
                Rq: () => n.Rq,
                Rt: () => n.Rt,
                Sg: () => n.Sg,
                Sz: () => n.Sz,
                Tc: () => n.Tc,
                Ux: () => n.Ux,
                W0: () => n.W0,
                WC: () => n.WC,
                Wi: () => n.Wi,
                Xh: () => n.Xh,
                Yn: () => n.Yn,
                _B: () => n._B,
                a1: () => n.a1,
                c1: () => n.c1,
                cW: () => n.cW,
                e3: () => n.e3,
                er: () => n.er,
                fC: () => n.fC,
                gM: () => n.gM,
                gO: () => n.gO,
                jh: () => n.jh,
                k3: () => n.k3,
                kV: () => n.kV,
                kz: () => n.kz,
                l0: () => n.l0,
                o6: () => n.o6,
                o9: () => n.o9,
                oF: () => n.oF,
                oM: () => n.oM,
                r2: () => n.r2,
                sX: () => n.sX,
                tY: () => n.tY,
                u5: () => n.u5
            });
            var n = r("1Akf")
        },
        "1Akf": (e, t, r) => {
            r.d(t, {
                Rq: () => U,
                Sz: () => pe,
                Md: () => Ee,
                Eq: () => _e,
                Rt: () => V,
                o8: () => k,
                Xh: () => te,
                r2: () => H,
                kz: () => re,
                Ez: () => $,
                fC: () => B,
                kV: () => z,
                Dm: () => q,
                gM: () => W,
                oF: () => G,
                Yn: () => ne,
                Tc: () => D,
                oM: () => X,
                O$: () => h,
                AS: () => b,
                jh: () => S,
                l0: () => T,
                sX: () => fe,
                W0: () => I,
                EY: () => ae,
                $V: () => J,
                Ii: () => ee,
                k3: () => R,
                u5: () => L,
                GV: () => ue,
                Ux: () => ie,
                gO: () => ce,
                WC: () => o,
                Nx: () => m,
                cW: () => d,
                tY: () => p,
                $y: () => j,
                er: () => oe,
                o9: () => be,
                MA: () => me,
                O8: () => _,
                e3: () => K,
                OM: () => w,
                An: () => E,
                _B: () => Q,
                Nm: () => Z,
                Fj: () => y,
                o6: () => g,
                Hd: () => M,
                Bf: () => de,
                Sg: () => F,
                c1: () => se,
                a1: () => le,
                Wi: () => P
            });
            var n = r("eZh5"),
                a = r("GjVY"),
                i = r("sViW"),
                c = r("0GOp"),
                u = r.n(c),
                s = r("xaLX"),
                p = function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/margin/v1/public/margin/symbols", e.next = 3, (0, s.i8)("/bapi/margin/v1/public/margin/symbols");
                                case 3:
                                    return t = e.sent.data, e.abrupt("return", t || []);
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
                o = function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/margin/v1/public/isolated-margin/pair/all", e.next = 3, (0, s.i8)("/bapi/margin/v1/public/isolated-margin/pair/all");
                                case 3:
                                    return t = e.sent.data, e.abrupt("return", t || []);
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
                v = r("a59x"),
                f = {
                    "15m": 24,
                    "5m": 8,
                    "1m": 4
                },
                l = (function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n, a, i, c, p;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.symbol, n = t.interval, a = void 0 === n ? "15m" : n, i = Date.now(), c = i - 60 * (f[a] || 24) * 6e4 - 6e4, e.next = 6, (0, s.i8)((0, v.Eg)("/fapi/v1/klines", {
                                        symbol: r,
                                        interval: a,
                                        startTime: c,
                                        endTime: i
                                    }));
                                case 6:
                                    return p = e.sent, e.abrupt("return", (Array.isArray(p) ? p : []).map((function(e) {
                                        return {
                                            time: e[0],
                                            value: +e[4]
                                        }
                                    })));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), r("BK7R")),
                b = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, v.Eg)("/bapi/asset/v2/public/asset-service/product/get-products", {
                                        includeEtf: t
                                    }), e.next = 3, (0, s.i8)(r);
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, v.Eg)("/bapi/apex/v3/public/apex/market/notice/get", {
                                        page: 1,
                                        rows: 1
                                    }), e.next = 3, (0, s.i8)(r, {
                                        headers: {
                                            lang: t
                                        }
                                    });
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                _ = function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/composite/v1/public/market/recommend/get-asset", e.next = 3, (0, s.i8)("/bapi/composite/v1/public/market/recommend/get-asset");
                                case 3:
                                    return t = e.sent.data, e.abrupt("return", t || []);
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
                E = (function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.currency, n = (0, v.Eg)("/bapi/composite/v1/friendly/marketing/market/getMarketsPagePairs", {
                                        currency: r
                                    }), e.next = 4, (0, s.i8)(n);
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
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, v.Eg)("/bapi/apex/v1/public/apex/marketing/web/querylangMappingByKey", {
                                        key: t
                                    }), e.next = 3, (0, s.i8)(r);
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                d = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = (0, v.Eg)("/bapi/composite/v1/public/marketing/markets/web/highLightSymbolList", {}), e.next = 3, (0, s.i8)(r, t);
                                case 3:
                                    return n = e.sent.data, e.abrupt("return", n);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = {
                    headers: {}
                },
                T = function() {
                    var e = (0, i.A)(u().mark((function e(t, r) {
                        var n, a, i, c = arguments;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = c.length > 2 && void 0 !== c[2] ? c[2] : A, a = (0, v.Eg)("/bapi/asset/v2/public/asset/biz-tags", {
                                        bizKey: t
                                    }), e.next = 4, (0, s.i8)(a, {
                                        headers: (0, l.A)({
                                            lang: r
                                        }, n.headers)
                                    });
                                case 4:
                                    return i = e.sent.data, e.abrupt("return", i || []);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                I = (function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = (0, v.Eg)("/bapi/composite/v1/public/marketing/markets/wsSymbol", {}), e.next = 3, (0, s.i8)(t);
                                case 3:
                                    return r = e.sent.data, e.abrupt("return", r);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = (0, v.Eg)("/bapi/margin/v1/friendly/margin/symbols", {}), e.next = 3, (0, s.i8)(t);
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
                g = (function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = (0, v.Eg)("/bapi/margin/v1/public/isolated-margin/pair/listed", {}), e.next = 3, (0, s.i8)(t);
                                case 3:
                                    return r = e.sent.data, e.abrupt("return", r || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.replace(/-/g, ""), n = (0, v.Eg)("/bapi/composite/v1/public/marketing/symbolTotalInfo", {
                                        bizTagsType: r
                                    }), e.next = 4, (0, s.i8)(n);
                                case 4:
                                    return a = e.sent.data, e.abrupt("return", a || {});
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                S = function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = (0, v.Eg)("/bapi/composite/v1/public/marketing/allSymbolTotalInfo", {}), e.next = 3, (0, s.i8)(t);
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
                x = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return (0, s.Ye)(t), "/bapi/composite/v1/friendly/common/event-log", e.next = 4, (0, s.UY)("/bapi/composite/v1/friendly/common/event-log", {
                                        eventName: t,
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
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function(e) {
                    return new Promise((function(t, r) {
                        setTimeout((function() {
                            return r(new Error("timeout"))
                        }), 3e3), x(e).then(t, r)
                    }))
                },
                h = (function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/asset/v1/public/asset-service/product/get-currency-by-lang", e.next = 3, (0, s.i8)("/bapi/asset/v1/public/asset-service/product/get-currency-by-lang", {
                                        headers: {
                                            lang: t
                                        }
                                    });
                                case 3:
                                    return r = e.sent.data, e.abrupt("return", r || "");
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/asset/v2/public/asset/asset/get-all-asset", e.next = 3, (0, s.i8)("/bapi/asset/v2/public/asset/asset/get-all-asset");
                                case 3:
                                    return t = e.sent.data, e.abrupt("return", t || "");
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
                O = r("6IHq"),
                w = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = O.k.GET_SYMBOL_LIST, e.next = 3, (0, s.i8)(r, t);
                                case 3:
                                    return n = e.sent, e.abrupt("return", n && n.data || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                y = (function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t, r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = O.k.GET_SYMBOL_LIST, e.next = 3, (0, s.i8)(t);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r && r.data || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = "".concat(O.k.GET_ZONE_CONFIG, "/").concat(t), e.next = 3, (0, s.i8)(r);
                                case 3:
                                    if ((n = e.sent).data) {
                                        e.next = 8;
                                        break
                                    }
                                    throw (a = new Error).code = 404, a;
                                case 8:
                                    return e.abrupt("return", n.data);
                                case 9:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                N = function(e, t) {
                    return t ? e ? a.w1 : a.Ig : ""
                },
                L = function() {
                    var e = (0, i.A)(u().mark((function e(t, r, n) {
                        var a, i, c;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = N(t, r), i = "".concat(a, t ? "/dapi/v1/ticker/24hr" : "/fapi/v1/ticker/24hr"), e.next = 4, (0, s.i8)(i, n);
                                case 4:
                                    return c = e.sent, e.abrupt("return", c || []);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                R = function() {
                    var e = (0, i.A)(u().mark((function e(t, r, n) {
                        var a, i, c;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return a = N(t, r), i = "".concat(a, t ? "/dapi/v1/exchangeInfo" : "/fapi/v1/exchangeInfo"), e.next = 4, (0, s.i8)(i, n);
                                case 4:
                                    return c = e.sent.symbols, e.abrupt("return", c || []);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                C = "/bapi/asset/v1/private/asset-service/portfolio",
                F = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.UY)("".concat(C, "/get"), t);
                                case 2:
                                    return r = e.sent.data, e.abrupt("return", r || []);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                U = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.UY)("".concat(C, "/add"), t);
                                case 2:
                                    return r = e.sent.success, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                V = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.UY)("".concat(C, "/del"), t);
                                case 2:
                                    return r = e.sent.success, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Y = "/bapi/futures/v1/private/future/user-setting",
                M = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.UY)("".concat(Y, "/get-optional-symbols"), t);
                                case 2:
                                    if (r = e.sent, n = r.success, a = r.data, n) {
                                        e.next = 7;
                                        break
                                    }
                                    throw new Error("query future favorites fail");
                                case 7:
                                    return e.abrupt("return", (a || "").split(","));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                P = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.UY)("".concat(Y, "/update-optional-symbols"), t);
                                case 2:
                                    return r = e.sent.success, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                D = function() {
                    return (0, s.i8)(O.k.TRADE_LEVEL_INFO)
                },
                G = function() {
                    return (0, s.i8)(O.k.NFT_TRADE_LEVEL_INFO)
                },
                W = function() {
                    return (0, s.i8)(O.k.NFT_HOLD_LEVEL_INFO)
                },
                q = function() {
                    return (0, s.i8)(O.k.FUTURES_LEVEL_INFO)
                },
                B = function() {
                    return (0, s.i8)(O.k.DELIVERY_LEVEL_INFO)
                },
                H = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 ? arguments[1] : void 0,
                        r = e.lang,
                        n = void 0 === r ? "en" : r;
                    return (0, s.i8)((0, v.Eg)(O.k.NETWORK_COIN_ALL, e), (0, l.A)({
                        lang: n
                    }, t))
                },
                K = function(e) {
                    return (0, s.i8)((0, v.Eg)(O.k.SYMBOL_ACTIVITY_LIST, e))
                },
                z = function() {
                    return (0, s.UY)(O.k.TRADE_RULE_FIAT_LIST)
                },
                $ = function(e, t) {
                    return (0, s.UY)(O.k.C2C_COMMISION_RATE_OVERVIEW, {
                        fiat: e,
                        channelArea: t
                    })
                },
                j = function() {
                    return (0, s.UY)(O.k.MERCHANT_INFO)
                },
                X = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = e.lang,
                        r = void 0 === t ? "en" : t;
                    return (0, s.i8)((0, v.Eg)(O.k.GET_ALL_ASSET, {
                        lang: r
                    }))
                },
                Q = function() {
                    return (0, s.i8)(O.k.VIP_FEE)
                },
                Z = function(e) {
                    return (0, s.i8)((0, v.Eg)(O.k.VIP_LOANABLE_ASSET, {
                        vipLevel: e || 0
                    }))
                },
                J = function() {
                    return (0, s.i8)(O.k.VIP_FEE_SUMMARY)
                },
                ee = function(e) {
                    return (0, s.i8)("".concat(O.k.LEVELS_COUNTRY, "/").concat(e))
                },
                te = (function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.UY)(O.k.VIP_SUB_ACCOUNTS, t);
                                case 2:
                                    return r = e.sent, e.abrupt("return", null === r || void 0 === r ? void 0 : r.data);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function(e) {
                    return (0, s.i8)("".concat(O.k.GET_ANNOUNCEMENTS, "?page=1&rows=5"), {
                        lang: e
                    })
                }),
                re = function(e) {
                    return (0, s.i8)("".concat(O.k.GET_BLOGS, "?lang=").concat(e, "&pageIndex=1&pageSize=6"), {
                        lang: e
                    })
                },
                ne = function(e) {
                    return (0, s.i8)("".concat(O.k.GET_NEWS, "?pageNo=1&pageSize=10&categoryId=0"), {
                        lang: e
                    })
                },
                ae = function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.i8)("/bapi/asset/v1/public/asset-service/product/get-exchange-info");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                ie = function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.i8)("/bapi/margin/v1/public/margin/market-order-quote-ratio");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                ce = function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.i8)("/bapi/margin/v1/public/margin/market-order-ratio");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                ue = function() {
                    var e = (0, i.A)(u().mark((function e() {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, s.i8)("/bapi/margin/v1/public/margin/collateral-rate");
                                case 2:
                                    return t = e.sent.data, e.abrupt("return", t || []);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                se = function(e) {
                    return (0, s.UY)(O.k.POST_USER_NPS, e)
                },
                pe = function() {
                    return (0, s.i8)(O.k.GET_CHECK_USER_NPS)
                },
                oe = function(e, t) {
                    return (0, s.UY)("/bapi/composite/v1/public/official-channel/verifyInfo", {
                        content: e,
                        type: t
                    })
                },
                ve = r("VA12"),
                fe = (function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, e.next = 3, (0, ve.post)(O.k.VIPALGOS_NOTIFICATION, t);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r);
                                case 7:
                                    return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", {
                                        code: e.t0.status,
                                        success: !1
                                    });
                                case 10:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, "/bapi/compliance/v1/friendly/compliance/market/business-compliance-check", e.next = 5, (0, s.i8)("".concat("/bapi/compliance/v1/friendly/compliance/market/business-compliance-check", "?platform=").concat(a.cp ? "ELECTRON" : "WEB"), {
                                        headers: t
                                    });
                                case 5:
                                    return n = e.sent.data, e.abrupt("return", (null === n || void 0 === n || null === (r = n.restriction) || void 0 === r ? void 0 : r.keys) || []);
                                case 9:
                                    return e.prev = 9, e.t0 = e.catch(0), e.abrupt("return", []);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 9]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                le = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/compliance/v1/private/compliance/questionnaire/submit", e.next = 3, (0, s.UY)("/bapi/compliance/v1/private/compliance/questionnaire/submit", t);
                                case 3:
                                    return r = e.sent, e.abrupt("return", r || []);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                be = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/compliance/v1/private/compliance/questionnaire", e.next = 3, (0, s.UY)("/bapi/compliance/v1/private/compliance/questionnaire", t);
                                case 3:
                                    return r = e.sent, n = r.data, a = void 0 === n ? {} : n, e.abrupt("return", a || []);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                me = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/compliance/v1/private/compliance/getQuestionnaireStep", e.next = 3, (0, s.UY)("/bapi/compliance/v1/private/compliance/getQuestionnaireStep", t);
                                case 3:
                                    return r = e.sent, n = r.data, a = void 0 === n ? {} : n, e.abrupt("return", a || []);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                _e = function() {
                    var e = (0, i.A)(u().mark((function e(t) {
                        var r, n, a;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return "/bapi/compliance/v1/private/compliance/confirmTnc", e.next = 3, (0, s.UY)("/bapi/compliance/v1/private/compliance/confirmTnc", t);
                                case 3:
                                    return r = e.sent, n = r.data, a = void 0 === n ? {} : n, e.abrupt("return", a || []);
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ee = function(e) {
                    var t = e.symbol,
                        r = e.wallet;
                    return (0, s.UY)(O.k.WHITELIST_CHECK, {
                        symbol: t,
                        wallet: r
                    })
                },
                de = function(e) {
                    var t, r = e.ns,
                        i = void 0 === r ? "web2.0" : r,
                        c = e.lng,
                        u = void 0 === c ? a.Fm.en : c,
                        s = e.ctx,
                        p = (((null === s || void 0 === s || null === (t = s.req) || void 0 === t ? void 0 : t.headers) || {}).k8scluster || "").includes("nskey");
                    return (0, n.TU)({
                        basePath: a.NO,
                        namespace: i,
                        locale: u,
                        enable2NsKey: p
                    })
                }
        },
        "6IHq": (e, t, r) => {
            r.d(t, {
                k: () => n
            });
            var n = {
                VIPALGOS_NOTIFICATION: "bapi/apex/v1/private/apex/market/vipAlgos/contact/notification",
                AUDIT_PROOF_SNAPSHOT_CONDITION: "/bapi/apex/v1/public/apex/market/query/auditProofSnapshotCondition",
                USER_RESERVE_AUDIT_PROOF_SNAPSHOT: "/bapi/apex/v1/public/apex/market/query/userReserveAuditProofSnapshot",
                COMPLIANCE_TNCTOU_SAVE_STATUS: "/bapi/compliance/v1/private/compliance/tncTOU/saveStatus",
                COMPLIANCE_FIAT_PAY_SAFE_SAVE_STATUS: "/bapi/compliance/v1/private/compliance/fiat/paysafe/saveSignedRecord",
                OFFICIAL_CHANNEL_VERIFYINFO: "/bapi/apex/v1/public/apex/official-channel/verifyInfo",
                ASSOCIATE_LINK: "/bapi/apex/v1/friendly/apex/marketing/associateTheLink",
                GET_ANNOUNCEMENTS: "/bapi/apex/v3/public/apex/market/notice/get",
                GET_BLOGS: "/bapi/apex/v1/public/apex/article/list/page",
                GET_DEPOSIT_TOTAL_DEPOSIT: "/bapi/apex/v1/public/apex/marketing/deposit/totalDeposit",
                GET_SYMBOL_LIST: "/bapi/apex/v1/public/apex/marketing/symbol/list",
                GET_ZONE_CONFIG: "/bapi/apex/v1/public/apex/marketing/config/sectionpage",
                POST_USER_NPS: "/bapi/apex/v1/private/apex/marketing/user/nps",
                GET_CHECK_USER_NPS: "/bapi/apex/v1/private/apex/marketing/user/checkNps",
                GET_USER_AIRDROP_RECORD: "/bapi/apex/v1/private/apex/marketing/userAirdropRecord",
                OFFICIAL_CHANNEL_VERIFY: "/bapi/apex/v1/public/apex/official-channel/verify",
                OTC_NOTIFICATION: "/bapi/apex/v1/private/apex/otc/notification",
                TRADE_LEVEL_INFO: "/bapi/composite/v1/public/commission/trade-level/get",
                NFT_COLLECTIONS: "/bapi/accounts/v1/public/vip/vip-portal/vip-nft/collections",
                NFT_TRADE_LEVEL_INFO: "/bapi/accounts/v1/public/vip/vip-portal/vip-nft/trading/requirements",
                NFT_HOLD_LEVEL_INFO: "/bapi/accounts/v1/public/vip/vip-portal/vip-nft/holding/requirements",
                VIP_INTEREST: "/bapi/margin/v1/public/margin/vip/spec/list-all",
                FUTURES_LEVEL_INFO: "/bapi/composite/v1/public/commission/futures-trade-level/get",
                DELIVERY_LEVEL_INFO: "/bapi/futures/v1/public/delivery/trade-level/get",
                LEVELS_COUNTRY: "/bapi/accounts/v1/public/commission/vip-level/site",
                NETWORK_COIN_ALL: "/bapi/capital/v2/public/capital/getNetworkCoinAll",
                ASSET_LOGOS: "/bapi/asset/v1/public/asset/asset/get-asset-logo",
                SYMBOL_ACTIVITY_LIST: "/bapi/accounts/v1/public/commission/symbol-activity-list",
                USER_FUTURE_BALANCE: "/bapi/futures/v3/private/future/user-data/user-balance",
                CHANGE_FEE_BURN_INFO: "/bapi/futures/v1/private/future/user-data/change-fee-burn",
                GET_FEE_BURN_INFO: "/bapi/futures/v1/private/future/user-data/get-fee-burn",
                REPORT_FUTURES_TRADE_INFO_GET: "/bapi/apex/v1/private/apex/report/futures-trade-info/get",
                POST_FUTURES_LOAN_RATE: "/bapi/futures/v1/friendly/future/loan/rate-configs",
                ALL_TRADING_PAIRS: "/bapi/earn/v1/public/swap-api/coin/list",
                ALL_COIN_FEE_INFO: "/bapi/fiat/v1/public/fiatpayment/fiat-fee/settings",
                SWAP_FEE_BY_ID: "/bapi/earn/v1/public/swap-api/vip/fee/listAll",
                TRADE_RULE_FIAT_LIST: "/bapi/c2c/v1/friendly/c2c/trade-rule/fiat-list",
                C2C_COMMISION_RATE_OVERVIEW: "/bapi/c2c/v1/friendly/c2c/commission-rate/overview",
                RISK_QUOTA_SPECIAL_TYPE: "/bapi/composite/v1/public/risk/quota-center/quota-rule-detail/list-by-type",
                QUOTA_SPECIAL_TYPE_LIMIT: "/bapi/composite/v1/private/risk/quota/limit",
                MERCHANT_INFO: "/bapi/c2c/v1/private/c2c/merchant/info",
                GET_ALL_ASSET: "/bapi/asset/v2/public/asset/asset/get-all-asset",
                VIP_FEE: "/bapi/accounts/v1/private/vip/vip-portal/vip-fee/vip-programs-and-fees",
                VIP_LOANABLE_ASSET: "/bapi/margin/v2/friendly/collateral/loans/loan-data/vip/loanable-asset",
                COMMISSION_DAILY_STATISTICS: "/bapi/accounts/v1/private/commission/commission-daily-statistics",
                COMMISSION_STATISTICS_SUMMARY_V2: "/bapi/accounts/v1/private/commission/commission-statistics-summaryV2",
                COMMISSION_DAILY_STATISTICS_V2: "/bapi/accounts/v1/private/commission/commission-daily-statisticsV2",
                COMMISSION_DAILY_STATISTICS_DETAIL: "/bapi/accounts/v1/private/commission/commission-daily-statistics-detail",
                COMMISSION_STATISTICS_DETAIL: "/bapi/accounts/v1/private/commission/commission-statistics-detail",
                VIP_FEE_SUMMARY: "/bapi/accounts/v1/private/vip/vip-portal/vip-fee/vip-fee-summary",
                VIP_SUB_ACCOUNTS: "/bapi/accounts/v1/private/account/subuser/sub-user/list",
                POST_USER_AIRDROP_RECORD_BY_ID: "/bapi/asset/v1/private/asset-service/userAirdropRecord",
                GET_AIRDROP_LIST: "/bapi/asset/v1/friendly/asset-service/airdrop/list",
                GET_NEWS: "/bapi/composite/v1/public/cms/news/queryTopNewsList",
                GET_AUDIT_ADDR_DOWNLOAD: "/bapi/apex/v1/public/apex/market/por/getDownloadUrl",
                WHITELIST_CHECK: "/bapi/apex/v1/public/apex/market/symbol/whitelist/check",
                TOKEN_UNLOCK_LIST: "/bapi/apex/v1/public/apex/marketing/token-unlock/list",
                FEE_FIAT_DEPOSIT_WITHDRAW_PRIVATE: "/bapi/fiat/v1/private/fiatpayment/dw/queryFeeSetting",
                FEE_FIAT_DEPOSIT_WITHDRAW_PUBLIC: "/bapi/fiat/v1/public/fiatpayment/dw/queryFeeSetting",
                FEE_FIAT_MARKER: "/bapi/accounts/v1/public/vip/vip-portal/lp/queryLpFiatSymbolConfig"
            }
        }
    }
]);
//# debugId=29584657-8a00-5831-8de6-8a6be441e326