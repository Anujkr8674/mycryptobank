(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [4268], {
        Wbjr: (e, r, t) => {
            "use strict";
            t.d(r, {
                Tl: () => s,
                Yc: () => i
            });
            var n = t("S+0I"),
                a = t("66mo"),
                u = t.n(a),
                o = t("VA12"),
                s = (function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/accounts/v1/private/account/user/order-confirm-status", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/accounts/v1/private/account/user/order-confirm-statusV2", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/usermodule/update", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/usermodule/updateV2", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/usermodule/updateV3", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/apex/v1/private/apex/inbox/usermodule/updateV3", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/userlanguage/select");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/composite/v1/public/push-center/preference/language/all-language");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/composite/v1/private/push-center/preference/language/user-language");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/language/saveupdate", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/push-center/preference/language/save-user-language", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/composite/v1/private/inbox/config/language");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/accounts/v1/private/account/user-personal-config/get-marketing-analytics-status");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/accounts/v1/private/account/user-personal-config/modify-marketing-analytics-status", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/query", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/updateAvatar", r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        var t, n, a, s, i;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.params, n = void 0 === t ? {} : t, a = r.opts, s = void 0 === a ? {} : a, e.next = 3, (0, o.post)("/bapi/apex/v1/private/apex/marketing/user/current/profile/updateNickName", n, s);
                                case 3:
                                    return i = e.sent, e.abrupt("return", i);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e() {
                        var r;
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, o.get)("/bapi/apex/v1/private/apex/marketing/user/current/profile/avatar/default-list");
                                case 2:
                                    return r = e.sent, e.abrupt("return", r);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, o.post)("/bapi/futures/v1/private/future/user-setting/get-saved-preferences", r));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }()),
                i = function() {
                    var e = (0, n._)(u().mark((function e(r) {
                        return u().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", (0, o.post)("/bapi/futures/v1/private/future/user-setting/update-saved-preferences", r));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }();
            ! function() {
                var e = (0, n._)(u().mark((function e(r) {
                    return u().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, o.post)("/bapi/futures/v1/private/future/user-setting/reset-saved-preferences", r));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))
            }()
        },
        LdGg: (e, r, t) => {
            "use strict";

            function n(e) {
                if ("undefined" === typeof window) {
                    var r, t;
                    if (!(null === e || void 0 === e ? void 0 : e.request)) throw new Error("[@binance/essential] getIsRegionMode request params is required");
                    return function(e) {
                        if ("string" === typeof e && ("false" === e.toLowerCase() || "0" === e)) return !1;
                        return Boolean(e)
                    }((null === (r = e.request.headers) || void 0 === r ? void 0 : r["Is-Region-Mode"]) || (null === (t = e.request.headers) || void 0 === t ? void 0 : t["is-region-mode"]))
                }
                throw new Error("[@binance/essential] getIsRegionMode is not supported in browser")
            }
            t.d(r, {
                y: () => n
            })
        },
        EAFr: (e, r, t) => {
            "use strict";

            function n(e) {
                if ("undefined" === typeof window) {
                    var r;
                    if (!(null === e || void 0 === e ? void 0 : e.request)) throw new Error("[@binance/essential] getPathPrefix request params is required");
                    var t = null === (r = e.request.headers) || void 0 === r ? void 0 : r["bnc-path-prefix"];
                    return null !== t && void 0 !== t ? t : "/"
                }
                try {
                    var n, a, u, o = null === document || void 0 === document || null === (n = document.documentElement) || void 0 === n || null === (a = n.getAttribute) || void 0 === a ? void 0 : a.call(n, "path-prefix");
                    if (o) return o;
                    var s = null === (u = document.getElementById("__APP_DATA")) || void 0 === u ? void 0 : u.textContent;
                    if (s) {
                        var i = JSON.parse(s);
                        if (i && "string" === typeof i.basename) return i.basename || "/"
                    }
                } catch (c) {
                    console.warn("[@binance/essential] getPathPrefix", c)
                }
                throw new Error("[@binance/essential] path-prefix is undefined on client side.")
            }
            t.d(r, {
                y: () => n
            })
        },
        Lmoe: (e, r, t) => {
            "use strict";
            t.d(r, {
                b: () => a
            });
            var n = ".";

            function a() {
                var e, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                    t = arguments.length > 1 ? arguments[1] : void 0;
                if ("undefined" !== typeof window) e = window.location.hostname;
                else {
                    var a;
                    if (!(null === t || void 0 === t ? void 0 : t.request)) throw new Error("[@binance/essential] getLevelDomain request params is required");
                    if (!(e = null === (a = t.request.headers) || void 0 === a ? void 0 : a.host)) throw new Error("[getLevelDomain] getLevelDomain request.headers.host is undefined")
                }
                var u = e.split(".");
                return u.length > 2 ? u.slice(-r).join(n) : e
            }
        },
        "0Rlb": (e, r, t) => {
            "use strict";
            t.d(r, {
                M: () => g
            });
            var n = t("mguP"),
                a = t("DTvD"),
                u = t("UXyB");
            const o = function() {};
            const s = function(e) {
                return void 0 === e
            };
            const i = function(e) {
                return null == e
            };
            var c = function() {
                return "undefined" !== typeof window && window.localStorage
            };
            !c() && console.warn("localStorage API is unavailable.");
            var p = function(e) {
                    var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : o;
                    try {
                        return c() ? e(window.localStorage) : r()
                    } catch (t) {
                        console.error("[growth-utils:storage] localStorage:", t)
                    }
                },
                v = function(e, r) {
                    return p((function(t) {
                        s(r) || t.setItem(e, JSON.stringify(r))
                    }))
                },
                f = function(e) {
                    return p((function(r) {
                        return r.removeItem(e)
                    }))
                },
                d = function(e, r) {
                    return p((function(t) {
                        var n = t.getItem(e);
                        if (i(n) && !s(r)) return v(e, r), r;
                        try {
                            return JSON.parse(n)
                        } catch (a) {
                            return console.error("[growth-utils:storage] localStorage:", a), n
                        }
                    }), (function() {
                        return r
                    }))
                };
            const l = d,
                w = v,
                m = f;
            var g = function(e, r) {
                var t = (0, n._)((0, a.useState)((function() {
                        return l(e, r)
                    })), 2),
                    o = t[0],
                    s = t[1],
                    i = (0, a.useCallback)((function() {
                        s(void 0), m(e)
                    }), [e]);
                return (0, u.A)((function() {
                    return w(e, o)
                }), [e, o]), [o, s, i]
            }
        },
        MI6P: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => s
            });
            var n = t("b6CO"),
                a = t("DTvD"),
                u = t.n(a),
                o = t("PzHQ");
            const s = function(e) {
                return u().createElement(o.A, (0, n._)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), u().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21a9 9 0 100-18 9 9 0 000 18zm0-12.733c-.59 0-1.066.477-1.066 1.066v.427H8.8v-.427a3.2 3.2 0 115.461 2.262l-1.196 1.196v1.234h-2.133v-2.117l1.821-1.82A1.066 1.066 0 0012 8.267zm-1.066 9.598v-2.133h2.132v2.133h-2.133z",
                    fill: "currentColor"
                }))
            }
        },
        "456j": (e, r, t) => {
            "use strict";
            t.d(r, {
                default: () => n.A
            });
            var n = t("Lnou")
        },
        "0wzd": e => {
            e.exports = function(e) {
                for (var r = -1, t = null == e ? 0 : e.length, n = 0, a = []; ++r < t;) {
                    var u = e[r];
                    u && (a[n++] = u)
                }
                return a
            }
        },
        brax: (e, r, t) => {
            var n = t("DEoa");
            e.exports = function(e, r) {
                return r = "function" == typeof r ? r : void 0, e && e.length ? n(e, void 0, r) : []
            }
        }
    }
]);