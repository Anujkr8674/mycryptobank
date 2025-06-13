"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "be46145a-31b9-54a7-a1d8-bf5f82cbbc77")
    } catch (e) {}
}();
(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [346], {
        HJTh: (t, e, r) => {
            r.d(e, {
                M8: () => s
            });
            var n = r("DTvD"),
                u = r("/OND"),
                a = function(t) {
                    return t.persistSetting || {}
                },
                s = function() {
                    var t = (0, n.useRef)(),
                        e = (0, u.wA)();
                    return t.current = (0, u.d4)(a), {
                        setting: t.current,
                        saveSetting: (0, n.useCallback)((function(r, n) {
                            var u = "function" === typeof n ? n(t.current[r]) : n;
                            e.persistSetting.save({
                                key: r,
                                value: u
                            })
                        }), [])
                    }
                }
        },
        "/I6J": (t, e, r) => {
            r.d(e, {
                ph: () => Y,
                _m: () => T,
                WB: () => P,
                Mh: () => E
            });
            var n = r("sViW"),
                u = r("tEf9"),
                a = r("Pz56"),
                s = r.n(a),
                c = r("DTvD"),
                i = r("/OND"),
                o = r("VA12"),
                p = (function() {
                    var t = (0, n.A)(s().mark((function t(e, r) {
                        var n;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, (0, o.get)("/bapi/eoptions/v1/private/eoptions/user-setting/set-boolean?key=".concat(e, "&val=").concat(r));
                                case 3:
                                    return n = t.sent, t.abrupt("return", n);
                                case 7:
                                    return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", {
                                        success: !1
                                    });
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n.A)(s().mark((function t(e, r) {
                        var n;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, (0, o.post)("/bapi/eoptions/v1/private/eoptions/user-setting/set-list?key=".concat(e), r);
                                case 3:
                                    return n = t.sent, t.abrupt("return", n);
                                case 7:
                                    return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", {
                                        success: !1
                                    });
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })));
                    return function(e, r) {
                        return t.apply(this, arguments)
                    }
                }()),
                f = (function() {
                    var t = (0, n.A)(s().mark((function t(e, r) {
                        var n;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, (0, o.post)("/bapi/eoptions/v1/private/eoptions/user-setting/set-map?key=".concat(e), {
                                        val: r
                                    });
                                case 3:
                                    return n = t.sent, t.abrupt("return", n);
                                case 7:
                                    return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", {
                                        success: !1
                                    });
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n.A)(s().mark((function t(e) {
                        var r;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, (0, o.get)("/bapi/eoptions/v1/private/eoptions/user-setting/get-boolean?key=".concat(e));
                                case 3:
                                    return r = t.sent, t.abrupt("return", r.data);
                                case 7:
                                    return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", !1);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })))
                }(), function() {
                    var t = (0, n.A)(s().mark((function t(e) {
                        var r;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, (0, o.post)("/bapi/eoptions/v1/private/eoptions/user-setting/get-list?key=".concat(e));
                                case 3:
                                    return r = t.sent, t.abrupt("return", r.data);
                                case 7:
                                    return t.prev = 7, t.t0 = t.catch(0), t.abrupt("return", []);
                                case 10:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 7]
                        ])
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }()),
                v = (function() {
                    var t = (0, n.A)(s().mark((function t(e) {
                        var r, n;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 4, (0, o.get)("/bapi/eoptions/v1/private/eoptions/user-setting/get-map?key=".concat(e));
                                case 4:
                                    return n = t.sent, t.abrupt("return", null === (r = n.data) || void 0 === r ? void 0 : r.val);
                                case 8:
                                    return t.prev = 8, t.t0 = t.catch(0), t.abrupt("return", {});
                                case 11:
                                case "end":
                                    return t.stop()
                            }
                        }), t, null, [
                            [0, 8]
                        ])
                    })))
                }(), r("HIvj")),
                l = r("HJTh"),
                h = r("mFFV"),
                b = "/bapi/asset/v1/private/asset-service/portfolio",
                g = function() {
                    var t = (0, n.A)(s().mark((function t(e) {
                        var r;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, h.UY)("".concat(b, "/get"), e);
                                case 2:
                                    return r = t.sent.data, t.abrupt("return", r || []);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var t = (0, n.A)(s().mark((function t(e) {
                        var r;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, h.UY)("".concat(b, "/add"), e);
                                case 2:
                                    return r = t.sent.success, t.abrupt("return", r);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                w = function() {
                    var t = (0, n.A)(s().mark((function t(e) {
                        var r;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, h.UY)("".concat(b, "/del"), e);
                                case 2:
                                    return r = t.sent.success, t.abrupt("return", r);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                d = "/bapi/futures/v1/private/future/user-setting",
                x = function() {
                    var t = (0, n.A)(s().mark((function t(e) {
                        var r, n, u;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, h.UY)("".concat(d, "/get-optional-symbols"), e);
                                case 2:
                                    if (r = t.sent, n = r.success, u = r.data, n) {
                                        t.next = 7;
                                        break
                                    }
                                    throw new Error("query future favorites fail");
                                case 7:
                                    return t.abrupt("return", (u || "").split(","));
                                case 8:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                A = function() {
                    var t = (0, n.A)(s().mark((function t(e) {
                        var r;
                        return s().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, (0, h.UY)("".concat(d, "/update-optional-symbols"), e);
                                case 2:
                                    return r = t.sent.success, t.abrupt("return", r);
                                case 4:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })));
                    return function(e) {
                        return t.apply(this, arguments)
                    }
                }(),
                m = function(t, e, r) {
                    return -1 === r ? t.push(e) : t.splice(r, 1), t
                },
                y = function() {},
                S = [],
                C = !1,
                F = "favorites",
                E = function() {
                    var t = (0, v.vz)().isLoggedIn,
                        e = (0, l.M8)(),
                        r = e.setting,
                        a = e.saveSetting;
                    (0, c.useEffect)((function() {
                        if (C || !t) return y;
                        C = !0, g().then((function(t) {
                            return a(F, t)
                        }))
                    }), [t]);
                    var i = (0, c.useCallback)((function(t) {
                            return a(F, t)
                        }), []),
                        o = r[F] || [],
                        p = (0, c.useCallback)(function() {
                            var e = (0, n.A)(s().mark((function e(r, n) {
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a(F, (function(e) {
                                                return e = e || S, Promise.resolve(!t || (-1 === n ? k({
                                                    symbol: r
                                                }) : w({
                                                    symbols: [r]
                                                }))).then((function(t) {
                                                    t || i((0, u.A)(e))
                                                })), m((0, u.A)(e), r, n)
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), [t]);
                    return {
                        fetching: {},
                        favorites: o,
                        toggleFavorite: p
                    }
                },
                O = !1,
                M = "futureFavorites",
                Y = function() {
                    var t = !!((0, v.Py)() || {}).isExistFutureAccount,
                        e = (0, l.M8)(),
                        r = e.setting,
                        a = e.saveSetting;
                    (0, c.useEffect)((function() {
                        if (O || !t) return y;
                        O = !0, x().then((function(t) {
                            return a(M, t)
                        }))
                    }), [t]);
                    var i = (0, c.useCallback)((function(t) {
                            return a(M, t)
                        }), []),
                        o = r[M] || [],
                        p = (0, c.useCallback)(function() {
                            var e = (0, n.A)(s().mark((function e(r, n) {
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a(M, (function(e) {
                                                e = e || S;
                                                var a = m((0, u.A)(e), r, n);
                                                return t && A({
                                                    optionalSymbols: a.join(",")
                                                }).then((function(t) {
                                                    t || i((0, u.A)(e))
                                                })), a
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), [t]);
                    return {
                        favorites: o,
                        toggleFavorite: p
                    }
                },
                D = !1,
                L = "optionsFavorites",
                P = function() {
                    var t = !!((0, v.Py)() || {}).isExistFutureAccount,
                        e = (0, l.M8)(),
                        r = e.setting,
                        a = e.saveSetting;
                    (0, c.useEffect)((function() {
                        if (D || !t) return y;
                        D = !0, f("OPTIONAL_SYMBOLS").then((function(t) {
                            return a(L, t)
                        }))
                    }), [t]);
                    var i = (0, c.useCallback)((function(t) {
                            return a(L, t)
                        }), []),
                        o = r[L] || [],
                        h = (0, c.useCallback)(function() {
                            var e = (0, n.A)(s().mark((function e(r, n) {
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            a(L, (function(e) {
                                                e = e || S;
                                                var a = m((0, u.A)(e), r, n);
                                                return t && p("OPTIONAL_SYMBOLS", a).then((function(t) {
                                                    t || i((0, u.A)(e))
                                                })), a
                                            }));
                                        case 1:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t, r) {
                                return e.apply(this, arguments)
                            }
                        }(), [t]);
                    return {
                        favorites: o,
                        toggleFavorite: h
                    }
                },
                T = function() {
                    var t = (0, i.wA)();
                    (0, c.useEffect)((function() {
                        t.persistSetting.batchLoadSetting([F, M, L])
                    }), [])
                }
        }
    }
]);
//# debugId=be46145a-31b9-54a7-a1d8-bf5f82cbbc77