! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "8383a1c3-d8f0-5094-afda-8907d6bea0c0")
    } catch (e) {}
}();
(self.webpackChunkmini_notification_center = self.webpackChunkmini_notification_center || []).push([
    [755], {
        W1Th: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => u
            });
            var r = t("wIZF"),
                o = t("DTvD"),
                i = t.n(o),
                a = t("9xbI"),
                s = (0, o.forwardRef)((function(e, n) {
                    return i().createElement(a.A, (0, r.__assign)({}, e, {
                        ref: n
                    }))
                }));
            s.displayName = "Box";
            const u = s
        },
        AGKK: (e, n, t) => {
            "use strict";
            t.d(n, {
                Ay: () => r
            });
            const r = t("W1Th").A
        },
        sF4t: (e, n, t) => {
            "use strict";
            t.d(n, {
                Kq: () => l,
                wA: () => v,
                d4: () => A
            });
            var r = t("DTvD"),
                o = t.n(r),
                i = (t("aWzz"), o().createContext(null));
            var a = function(e) {
                    e()
                },
                s = function() {
                    return a
                },
                u = {
                    notify: function() {}
                };
            var c = function() {
                function e(e, n) {
                    this.store = e, this.parentSub = n, this.unsubscribe = null, this.listeners = u, this.handleChangeWrapper = this.handleChangeWrapper.bind(this)
                }
                var n = e.prototype;
                return n.addNestedSub = function(e) {
                    return this.trySubscribe(), this.listeners.subscribe(e)
                }, n.notifyNestedSubs = function() {
                    this.listeners.notify()
                }, n.handleChangeWrapper = function() {
                    this.onStateChange && this.onStateChange()
                }, n.isSubscribed = function() {
                    return Boolean(this.unsubscribe)
                }, n.trySubscribe = function() {
                    this.unsubscribe || (this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.handleChangeWrapper) : this.store.subscribe(this.handleChangeWrapper), this.listeners = function() {
                        var e = s(),
                            n = null,
                            t = null;
                        return {
                            clear: function() {
                                n = null, t = null
                            },
                            notify: function() {
                                e((function() {
                                    for (var e = n; e;) e.callback(), e = e.next
                                }))
                            },
                            get: function() {
                                for (var e = [], t = n; t;) e.push(t), t = t.next;
                                return e
                            },
                            subscribe: function(e) {
                                var r = !0,
                                    o = t = {
                                        callback: e,
                                        next: null,
                                        prev: t
                                    };
                                return o.prev ? o.prev.next = o : n = o,
                                    function() {
                                        r && null !== n && (r = !1, o.next ? o.next.prev = o.prev : t = o.prev, o.prev ? o.prev.next = o.next : n = o.next)
                                    }
                            }
                        }
                    }())
                }, n.tryUnsubscribe = function() {
                    this.unsubscribe && (this.unsubscribe(), this.unsubscribe = null, this.listeners.clear(), this.listeners = u)
                }, e
            }();
            const l = function(e) {
                var n = e.store,
                    t = e.context,
                    a = e.children,
                    s = (0, r.useMemo)((function() {
                        var e = new c(n);
                        return e.onStateChange = e.notifyNestedSubs, {
                            store: n,
                            subscription: e
                        }
                    }), [n]),
                    u = (0, r.useMemo)((function() {
                        return n.getState()
                    }), [n]);
                (0, r.useEffect)((function() {
                    var e = s.subscription;
                    return e.trySubscribe(), u !== n.getState() && e.notifyNestedSubs(),
                        function() {
                            e.tryUnsubscribe(), e.onStateChange = null
                        }
                }), [s, u]);
                var l = t || i;
                return o().createElement(l.Provider, {
                    value: s
                }, a)
            };
            t("oXkQ"), t("kvVz");
            var d = "undefined" !== typeof window.document && "undefined" !== typeof window.document.createElement ? r.useLayoutEffect : r.useEffect;
            t("9OUN");

            function p() {
                return (0, r.useContext)(i)
            }

            function f(e) {
                void 0 === e && (e = i);
                var n = e === i ? p : function() {
                    return (0, r.useContext)(e)
                };
                return function() {
                    return n().store
                }
            }
            var g = f();

            function h(e) {
                void 0 === e && (e = i);
                var n = e === i ? g : f(e);
                return function() {
                    return n().dispatch
                }
            }
            var v = h(),
                m = function(e, n) {
                    return e === n
                };

            function y(e) {
                void 0 === e && (e = i);
                var n = e === i ? p : function() {
                    return (0, r.useContext)(e)
                };
                return function(e, t) {
                    void 0 === t && (t = m);
                    var o = n(),
                        i = function(e, n, t, o) {
                            var i, a = (0, r.useReducer)((function(e) {
                                    return e + 1
                                }), 0)[1],
                                s = (0, r.useMemo)((function() {
                                    return new c(t, o)
                                }), [t, o]),
                                u = (0, r.useRef)(),
                                l = (0, r.useRef)(),
                                p = (0, r.useRef)(),
                                f = (0, r.useRef)(),
                                g = t.getState();
                            try {
                                i = e !== l.current || g !== p.current || u.current ? e(g) : f.current
                            } catch (h) {
                                throw u.current && (h.message += "\nThe error may be correlated with this previous error:\n" + u.current.stack + "\n\n"), h
                            }
                            return d((function() {
                                l.current = e, p.current = g, f.current = i, u.current = void 0
                            })), d((function() {
                                function e() {
                                    try {
                                        var e = l.current(t.getState());
                                        if (n(e, f.current)) return;
                                        f.current = e
                                    } catch (h) {
                                        u.current = h
                                    }
                                    a()
                                }
                                return s.onStateChange = e, s.trySubscribe(), e(),
                                    function() {
                                        return s.tryUnsubscribe()
                                    }
                            }), [t, s]), i
                        }(e, t, o.store, o.subscription);
                    return (0, r.useDebugValue)(i), i
                }
            }
            var b, A = y(),
                I = t("hTvQ");
            b = I.unstable_batchedUpdates, a = b
        },
        eZh5: (e, n, t) => {
            "use strict";
            t.d(n, {
                TU: () => d
            });
            var r = t("sViW"),
                o = t("BK7R"),
                i = t("Pz56"),
                a = t.n(i),
                s = t("VA12"),
                u = (0, s.fetchOrigin)().fetch,
                c = function() {
                    var e = (0, r.A)(a().mark((function e(n) {
                        var t, r, i = arguments;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = i.length > 1 && void 0 !== i[1] ? i[1] : {}, e.next = 3, u(n, (0, o.A)({
                                        method: "GET",
                                        mode: "cors"
                                    }, t));
                                case 3:
                                    if (!(r = e.sent).ok) {
                                        e.next = 6;
                                        break
                                    }
                                    return e.abrupt("return", r.json());
                                case 6:
                                    throw new Error("get url:".concat(n, " resource fail"));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                l = function() {
                    var e = (0, r.A)(a().mark((function e(n) {
                        var t, r, o, i, s, u, d, p;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = n.i18nHost, r = n.namespace, o = n.language, i = void 0 === o ? "en" : o, s = n.fallback, u = void 0 === s ? "en" : s, t && r) {
                                        e.next = 3;
                                        break
                                    }
                                    throw TypeError("i18nHost and namespace must be defined");
                                case 3:
                                    return e.prev = 3, d = "".concat(t, "/api/i18n/").concat(i, "/").concat(r), e.next = 7, c(d);
                                case 7:
                                    if ((p = e.sent) && Object.keys(p).length) {
                                        e.next = 10;
                                        break
                                    }
                                    throw new Error("fallback i18n");
                                case 10:
                                    return e.abrupt("return", p);
                                case 13:
                                    return e.prev = 13, e.t0 = e.catch(3), console.error("query i18n fail: ".concat(r, " | ").concat(i), e.t0), e.abrupt("return", "string" === typeof u && u !== i ? l({
                                        i18nHost: t,
                                        namespace: r,
                                        language: u,
                                        fallback: !1
                                    }) : Object.create(null));
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 13]
                        ])
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                d = function() {
                    var e = (0, r.A)(a().mark((function e(n) {
                        var t, r, o, i, s, u, l, p, f, g, h, v, m = arguments;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = m.length > 1 && void 0 !== m[1] ? m[1] : {}, r = n.basePath, o = n.namespace, i = n.locale, s = void 0 === i ? "en" : i, u = n.fallback, l = void 0 === u ? "en" : u, p = n.enable2NsKey, f = void 0 !== p && p, r && o) {
                                        e.next = 4;
                                        break
                                    }
                                    throw TypeError("basePath and namespace must be defined");
                                case 4:
                                    return e.prev = 4, g = "".concat(r, "/").concat(s, "/").concat(o), e.next = 8, c(g, t);
                                case 8:
                                    if ((h = e.sent) && Object.keys(h).length) {
                                        e.next = 11;
                                        break
                                    }
                                    throw new Error("fallback i18n");
                                case 11:
                                    if (!f) {
                                        e.next = 15;
                                        break
                                    }
                                    return v = {}, Object.keys(h).forEach((function(e) {
                                        v[e] = "".concat(o, ":").concat(e)
                                    })), e.abrupt("return", v);
                                case 15:
                                    return e.abrupt("return", h);
                                case 18:
                                    return e.prev = 18, e.t0 = e.catch(4), console.error("query i18n fail: ".concat(o, " | ").concat(s), e.t0), e.abrupt("return", "string" === typeof l && l !== s ? d({
                                        basePath: r,
                                        namespace: o,
                                        locale: l,
                                        fallback: !1
                                    }, t) : Object.create(null));
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 18]
                        ])
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        iyUK: (e, n, t) => {
            "use strict";
            t.d(n, {
                Wv: () => p,
                x8: () => f
            });
            var r = t("sViW"),
                o = t("Pz56"),
                i = t.n(o);

            function a(e) {
                var n = document.cookie.match(RegExp("(?:^|;\\s*)".concat(e, "=([^;]*)")));
                return n ? n[1] : null
            }
            var s = function() {
                    var e = (0, r.A)(i().mark((function e(n, t) {
                        var r, o;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n.url.includes("/public/authcenter/auth")) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 2:
                                    if (e.prev = 2, !(n.headers.get("Content-Type") || "").includes("application/json")) {
                                        e.next = 11;
                                        break
                                    }
                                    return e.next = 8, n.clone().json();
                                case 8:
                                    r = e.sent, e.next = 14;
                                    break;
                                case 11:
                                    return e.next = 13, n.clone().text();
                                case 13:
                                    r = e.sent;
                                case 14:
                                    return o = "1" === a("r30t"), e.abrupt("return", "100002001" === r.code || "100001005" === r.code && o);
                                case 18:
                                    return e.prev = 18, e.t0 = e.catch(2), t.error("parse isAuthExpired response's data failed", e.t0), e.abrupt("return", !1);
                                case 22:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 18]
                        ])
                    })));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                u = function(e, n) {
                    var t, r, o = e.headers;
                    return !!(null === o || void 0 === o || null === (t = o.get) || void 0 === t ? void 0 : t.call(o, "risk_challenge_biz_no")) && "true" === (null === o || void 0 === o || null === (r = o.get) || void 0 === r ? void 0 : r.call(o, "risk_challenge_enable_flow"))
                },
                c = !1,
                l = null;

            function d() {
                l || (l = setTimeout((function() {
                    c = !0
                }), 5e3))
            }
            var p = function() {
                    var e = (0, r.A)(i().mark((function e(n) {
                        var t, r = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = r.length > 1 && void 0 !== r[1] ? r[1] : console, !n.url.includes("/mfa-ui/version")) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 3:
                                    if (!c) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", !0);
                                case 7:
                                    d();
                                case 8:
                                    if (e.t1 = 401 === n.status || 418 === n.status, e.t1) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.next = 12, s(n, t);
                                case 12:
                                    e.t1 = e.sent;
                                case 13:
                                    if (e.t0 = e.t1, e.t0) {
                                        e.next = 16;
                                        break
                                    }
                                    e.t0 = u(n);
                                case 16:
                                    return e.abrupt("return", e.t0);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = function() {
                    var e = (0, r.A)(i().mark((function e(n) {
                        var t, r = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = r.length > 1 && void 0 !== r[1] ? r[1] : console, !n.url.includes("/mfa-ui/version")) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return", !1);
                                case 3:
                                    if (e.t1 = 401 === n.status || 418 === n.status, e.t1) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.next = 7, s(n, t);
                                case 7:
                                    e.t1 = e.sent;
                                case 8:
                                    if (e.t0 = e.t1, e.t0) {
                                        e.next = 11;
                                        break
                                    }
                                    e.t0 = u(n);
                                case 11:
                                    return e.abrupt("return", e.t0);
                                case 12:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        YvF5: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => o
            });
            var r = t("eZh5"),
                o = function(e) {
                    var n = e.lng,
                        t = e.ns,
                        o = e.fallback,
                        i = e.basePath,
                        a = e.customPath,
                        s = e.enable2NsKey,
                        u = i || "https://bin.bnbstatic.com/api/i18n/-/web/cms";
                    return (0, r.TU)({
                        basePath: a ? "".concat(u, "/").concat(a) : u,
                        locale: n,
                        namespace: t,
                        fallback: o && void 0,
                        enable2NsKey: s
                    })
                }
        },
        zJWh: (e, n, t) => {
            "use strict";
            t.d(n, {
                U: () => d
            });
            var r = t("LJ4M"),
                o = t("T3Fm"),
                i = function(e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                };

            function a(e) {
                try {
                    return decodeURIComponent(e)
                } catch (n) {
                    return e
                }
            }

            function s(e, n) {
                var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                    o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                (0, r.write)(e, n, t, o)
            }
            var u = s,
                c = s,
                l = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        o = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        i = arguments.length > 4 ? arguments[4] : void 0;
                    (0, r.write)(e, n, t, o, i)
                },
                d = {
                    parse: r.parse,
                    read: r.read,
                    readAsList: function(e, n) {
                        var t = [];
                        if (i(e))
                            for (var r = "".concat(e, "=").trim(), s = ((o.o ? document : n || {}).cookie || "").split(";"), u = 0; u < s.length; u++) {
                                var c = (s[u] || "").trim();
                                if (0 === c.indexOf(r)) {
                                    var l = c.slice(r.length).trim();
                                    t.push(a('"' === l[0] ? l.slice(1, -1) : l))
                                }
                            }
                        return t
                    },
                    matchRead: function(e, n) {
                        var t = (0, r.parse)(n);
                        return e.reduce((function(e, n) {
                            var r = n.key,
                                o = n.matches;
                            if (i(r)) {
                                var a = t[r];
                                e[r] = o ? o(a) : a
                            }
                            return e
                        }), {})
                    },
                    write: s,
                    erase: function(e) {
                        return s(e, "", -1)
                    },
                    _update: function() {
                        return !1
                    },
                    writeCookieWithDomain: u,
                    writeCookieWithDomainLevel: c,
                    writeCookieWithDomainLevelV2: l
                }
        },
        T3Fm: (e, n, t) => {
            "use strict";
            t.d(n, {
                o: () => r
            });
            var r = !!window.document
        },
        YELn: (e, n, t) => {
            "use strict";
            var r;
            t.d(n, {
                L: () => a
            }), r = function() {
                try {
                    return "localStorage" in window && null !== window.sessionStorage
                } catch (e) {
                    return !1
                }
            }() ? window.sessionStorage : function() {
                var e = {};
                return {
                    setItem: function(n, t) {
                        e[n] = t
                    },
                    getItem: function(n) {
                        return e[n] || null
                    },
                    removeItem: function(n) {
                        return delete e[n]
                    }
                }
            }();
            var o = function(e, n, t) {
                    try {
                        r.setItem(e, t ? String(n) : JSON.stringify(n))
                    } catch (o) {}
                },
                i = function(e, n, t) {
                    try {
                        var i = r.getItem(e);
                        if ("string" !== typeof i) throw o(e, n, t), new Error("init ".concat(e, " - values"));
                        return t ? i : JSON.parse(i || "null")
                    } catch (a) {
                        return n
                    }
                },
                a = {
                    setItem: o,
                    getItem: i,
                    removeItem: function(e) {
                        try {
                            r.removeItem(e)
                        } catch (n) {}
                    },
                    setExpireItem: function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        return t.ttl ? o(e, {
                            value: n,
                            expire: (new Date).getTime() + t.ttl
                        }, !1) : o(e, n)
                    },
                    getExpireItem: function(e, n) {
                        var t = i(e, n);
                        return t && t.expire ? t.expire && t.expire > (new Date).getTime() ? t.value : null : t
                    }
                }
        },
        Cl8C: (e, n, t) => {
            "use strict";
            t.d(n, {
                n: () => o
            });
            var r = t("tEf9"),
                o = function(e, n) {
                    var t;
                    return function() {
                        for (var o = arguments.length, i = new Array(o), a = 0; a < o; a++) i[a] = arguments[a];
                        var s, u = +new Date;
                        (!t || u - t > n) && ((s = e).call.apply(s, [null].concat((0, r.A)(i))), t = u)
                    }
                }
        },
        a59x: (e, n, t) => {
            "use strict";
            t.d(n, {
                Eg: () => i,
                JK: () => s,
                bG: () => a
            });
            t("kPx0");
            var r = t("tKUM"),
                o = t("T3Fm");

            function i(e, n) {
                return [e, (t = n, Object.keys(t).map((function(e) {
                    return t[e] ? "".concat(e, "=").concat(encodeURIComponent(t[e])) : ""
                })).filter((function(e) {
                    return !!e
                })).join(r || "&"))].filter(Boolean).join(/\?/.test(e) ? "&" : "?");
                var t, r
            }

            function a() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                    n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = o.o ? window.location : n,
                    r = t.hostname,
                    i = void 0 === r ? "" : r,
                    a = i.split(".");
                return a.length > 2 ? a.slice(-e).join(".") : i
            }
            var s = function(e) {
                return (0, r.getLanguage)()
            }
        },
        ofQG: (e, n) => {
            "use strict"
        },
        "64TO": (e, n, t) => {
            "use strict";
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.fetch = void 0;
            var r = t("E0uk");
            Object.defineProperty(n, "fetch", {
                enumerable: !0,
                get: function() {
                    return r.fetch
                }
            })
        },
        dKjp: (e, n, t) => {
            t("Bihu"), t("htmW")
        },
        "9xYj": (e, n, t) => {
            var r = t("/LHJ"),
                o = t("Oxe1"),
                i = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw i(o(e) + " is not a function")
            }
        },
        tTsQ: (e, n, t) => {
            var r = t("nFBW"),
                o = String,
                i = TypeError;
            e.exports = function(e) {
                if (r(e)) return e;
                throw i(o(e) + " is not an object")
            }
        },
        JXJY: (e, n, t) => {
            var r = t("/1o8"),
                o = t("cHg0"),
                i = t("C/5I"),
                a = function(e) {
                    return function(n, t, a) {
                        var s, u = r(n),
                            c = i(u),
                            l = o(a, c);
                        if (e && t != t) {
                            for (; c > l;)
                                if ((s = u[l++]) != s) return !0
                        } else
                            for (; c > l; l++)
                                if ((e || l in u) && u[l] === t) return e || l || 0;
                        return !e && -1
                    }
                };
            e.exports = {
                includes: a(!0),
                indexOf: a(!1)
            }
        },
        "3Ckp": (e, n, t) => {
            var r = t("rioE"),
                o = r({}.toString),
                i = r("".slice);
            e.exports = function(e) {
                return i(o(e), 8, -1)
            }
        },
        UI2s: (e, n, t) => {
            var r = t("hKKO"),
                o = t("ELNT"),
                i = t("PSsl"),
                a = t("xluy");
            e.exports = function(e, n, t) {
                for (var s = o(n), u = a.f, c = i.f, l = 0; l < s.length; l++) {
                    var d = s[l];
                    r(e, d) || t && r(t, d) || u(e, d, c(n, d))
                }
            }
        },
        SeAf: (e, n, t) => {
            var r = t("f8nr"),
                o = t("xluy"),
                i = t("lFLE");
            e.exports = r ? function(e, n, t) {
                return o.f(e, n, i(1, t))
            } : function(e, n, t) {
                return e[n] = t, e
            }
        },
        lFLE: e => {
            e.exports = function(e, n) {
                return {
                    enumerable: !(1 & e),
                    configurable: !(2 & e),
                    writable: !(4 & e),
                    value: n
                }
            }
        },
        "9vzw": (e, n, t) => {
            var r = t("/LHJ"),
                o = t("xluy"),
                i = t("iYp9"),
                a = t("2ZLl");
            e.exports = function(e, n, t, s) {
                s || (s = {});
                var u = s.enumerable,
                    c = void 0 !== s.name ? s.name : n;
                if (r(t) && i(t, c, s), s.global) u ? e[n] = t : a(n, t);
                else {
                    try {
                        s.unsafe ? e[n] && (u = !0) : delete e[n]
                    } catch (l) {}
                    u ? e[n] = t : o.f(e, n, {
                        value: t,
                        enumerable: !1,
                        configurable: !s.nonConfigurable,
                        writable: !s.nonWritable
                    })
                }
                return e
            }
        },
        "2ZLl": (e, n, t) => {
            var r = t("htmW"),
                o = Object.defineProperty;
            e.exports = function(e, n) {
                try {
                    o(r, e, {
                        value: n,
                        configurable: !0,
                        writable: !0
                    })
                } catch (t) {
                    r[e] = n
                }
                return n
            }
        },
        f8nr: (e, n, t) => {
            var r = t("L1Gn");
            e.exports = !r((function() {
                return 7 != Object.defineProperty({}, 1, {
                    get: function() {
                        return 7
                    }
                })[1]
            }))
        },
        vciX: e => {
            var n = "object" == typeof document && document.all,
                t = "undefined" == typeof n && void 0 !== n;
            e.exports = {
                all: n,
                IS_HTMLDDA: t
            }
        },
        LhkG: (e, n, t) => {
            var r = t("htmW"),
                o = t("nFBW"),
                i = r.document,
                a = o(i) && o(i.createElement);
            e.exports = function(e) {
                return a ? i.createElement(e) : {}
            }
        },
        wVGj: e => {
            e.exports = "undefined" != typeof navigator && String(navigator.userAgent) || ""
        },
        BcTq: (e, n, t) => {
            var r, o, i = t("htmW"),
                a = t("wVGj"),
                s = i.process,
                u = i.Deno,
                c = s && s.versions || u && u.version,
                l = c && c.v8;
            l && (o = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]), e.exports = o
        },
        XepZ: e => {
            e.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        },
        AS9I: (e, n, t) => {
            var r = t("htmW"),
                o = t("PSsl").f,
                i = t("SeAf"),
                a = t("9vzw"),
                s = t("2ZLl"),
                u = t("UI2s"),
                c = t("n1w0");
            e.exports = function(e, n) {
                var t, l, d, p, f, g = e.target,
                    h = e.global,
                    v = e.stat;
                if (t = h ? r : v ? r[g] || s(g, {}) : (r[g] || {}).prototype)
                    for (l in n) {
                        if (p = n[l], d = e.dontCallGetSet ? (f = o(t, l)) && f.value : t[l], !c(h ? l : g + (v ? "." : "#") + l, e.forced) && void 0 !== d) {
                            if (typeof p == typeof d) continue;
                            u(p, d)
                        }(e.sham || d && d.sham) && i(p, "sham", !0), a(t, l, p, e)
                    }
            }
        },
        L1Gn: e => {
            e.exports = function(e) {
                try {
                    return !!e()
                } catch (n) {
                    return !0
                }
            }
        },
        "0Ghs": (e, n, t) => {
            var r = t("L1Gn");
            e.exports = !r((function() {
                var e = function() {}.bind();
                return "function" != typeof e || e.hasOwnProperty("prototype")
            }))
        },
        SE89: (e, n, t) => {
            var r = t("0Ghs"),
                o = Function.prototype.call;
            e.exports = r ? o.bind(o) : function() {
                return o.apply(o, arguments)
            }
        },
        Tff8: (e, n, t) => {
            var r = t("f8nr"),
                o = t("hKKO"),
                i = Function.prototype,
                a = r && Object.getOwnPropertyDescriptor,
                s = o(i, "name"),
                u = s && "something" === function() {}.name,
                c = s && (!r || r && a(i, "name").configurable);
            e.exports = {
                EXISTS: s,
                PROPER: u,
                CONFIGURABLE: c
            }
        },
        rioE: (e, n, t) => {
            var r = t("0Ghs"),
                o = Function.prototype,
                i = o.call,
                a = r && o.bind.bind(i, i);
            e.exports = r ? a : function(e) {
                return function() {
                    return i.apply(e, arguments)
                }
            }
        },
        O8fN: (e, n, t) => {
            var r = t("htmW"),
                o = t("/LHJ"),
                i = function(e) {
                    return o(e) ? e : void 0
                };
            e.exports = function(e, n) {
                return arguments.length < 2 ? i(r[e]) : r[e] && r[e][n]
            }
        },
        WsRI: (e, n, t) => {
            var r = t("9xYj"),
                o = t("VzDr");
            e.exports = function(e, n) {
                var t = e[n];
                return o(t) ? void 0 : r(t)
            }
        },
        htmW: function(e, n, t) {
            var r = function(e) {
                return e && e.Math == Math && e
            };
            e.exports = r("object" == typeof globalThis && globalThis) || r(window) || r("object" == typeof self && self) || r("object" == typeof t.g && t.g) || function() {
                return this
            }() || this || Function("return this")()
        },
        hKKO: (e, n, t) => {
            var r = t("rioE"),
                o = t("Vir1"),
                i = r({}.hasOwnProperty);
            e.exports = Object.hasOwn || function(e, n) {
                return i(o(e), n)
            }
        },
        "D/Aq": e => {
            e.exports = {}
        },
        jRkR: (e, n, t) => {
            var r = t("f8nr"),
                o = t("L1Gn"),
                i = t("LhkG");
            e.exports = !r && !o((function() {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function() {
                        return 7
                    }
                }).a
            }))
        },
        "mV/l": (e, n, t) => {
            var r = t("rioE"),
                o = t("L1Gn"),
                i = t("3Ckp"),
                a = Object,
                s = r("".split);
            e.exports = o((function() {
                return !a("z").propertyIsEnumerable(0)
            })) ? function(e) {
                return "String" == i(e) ? s(e, "") : a(e)
            } : a
        },
        lFkn: (e, n, t) => {
            var r = t("rioE"),
                o = t("/LHJ"),
                i = t("vSaM"),
                a = r(Function.toString);
            o(i.inspectSource) || (i.inspectSource = function(e) {
                return a(e)
            }), e.exports = i.inspectSource
        },
        "3aPN": (e, n, t) => {
            var r, o, i, a = t("NW3L"),
                s = t("htmW"),
                u = t("nFBW"),
                c = t("SeAf"),
                l = t("hKKO"),
                d = t("vSaM"),
                p = t("17A7"),
                f = t("D/Aq"),
                g = "Object already initialized",
                h = s.TypeError,
                v = s.WeakMap;
            if (a || d.state) {
                var m = d.state || (d.state = new v);
                m.get = m.get, m.has = m.has, m.set = m.set, r = function(e, n) {
                    if (m.has(e)) throw h(g);
                    return n.facade = e, m.set(e, n), n
                }, o = function(e) {
                    return m.get(e) || {}
                }, i = function(e) {
                    return m.has(e)
                }
            } else {
                var y = p("state");
                f[y] = !0, r = function(e, n) {
                    if (l(e, y)) throw h(g);
                    return n.facade = e, c(e, y, n), n
                }, o = function(e) {
                    return l(e, y) ? e[y] : {}
                }, i = function(e) {
                    return l(e, y)
                }
            }
            e.exports = {
                set: r,
                get: o,
                has: i,
                enforce: function(e) {
                    return i(e) ? o(e) : r(e, {})
                },
                getterFor: function(e) {
                    return function(n) {
                        var t;
                        if (!u(n) || (t = o(n)).type !== e) throw h("Incompatible receiver, " + e + " required");
                        return t
                    }
                }
            }
        },
        "/LHJ": (e, n, t) => {
            var r = t("vciX"),
                o = r.all;
            e.exports = r.IS_HTMLDDA ? function(e) {
                return "function" == typeof e || e === o
            } : function(e) {
                return "function" == typeof e
            }
        },
        n1w0: (e, n, t) => {
            var r = t("L1Gn"),
                o = t("/LHJ"),
                i = /#|\.prototype\./,
                a = function(e, n) {
                    var t = u[s(e)];
                    return t == l || t != c && (o(n) ? r(n) : !!n)
                },
                s = a.normalize = function(e) {
                    return String(e).replace(i, ".").toLowerCase()
                },
                u = a.data = {},
                c = a.NATIVE = "N",
                l = a.POLYFILL = "P";
            e.exports = a
        },
        VzDr: e => {
            e.exports = function(e) {
                return null === e || void 0 === e
            }
        },
        nFBW: (e, n, t) => {
            var r = t("/LHJ"),
                o = t("vciX"),
                i = o.all;
            e.exports = o.IS_HTMLDDA ? function(e) {
                return "object" == typeof e ? null !== e : r(e) || e === i
            } : function(e) {
                return "object" == typeof e ? null !== e : r(e)
            }
        },
        imG2: e => {
            e.exports = !1
        },
        RTYJ: (e, n, t) => {
            var r = t("O8fN"),
                o = t("/LHJ"),
                i = t("kbQN"),
                a = t("lQr9"),
                s = Object;
            e.exports = a ? function(e) {
                return "symbol" == typeof e
            } : function(e) {
                var n = r("Symbol");
                return o(n) && i(n.prototype, s(e))
            }
        },
        "C/5I": (e, n, t) => {
            var r = t("UvTh");
            e.exports = function(e) {
                return r(e.length)
            }
        },
        iYp9: (e, n, t) => {
            var r = t("rioE"),
                o = t("L1Gn"),
                i = t("/LHJ"),
                a = t("hKKO"),
                s = t("f8nr"),
                u = t("Tff8").CONFIGURABLE,
                c = t("lFkn"),
                l = t("3aPN"),
                d = l.enforce,
                p = l.get,
                f = String,
                g = Object.defineProperty,
                h = r("".slice),
                v = r("".replace),
                m = r([].join),
                y = s && !o((function() {
                    return 8 !== g((function() {}), "length", {
                        value: 8
                    }).length
                })),
                b = String(String).split("String"),
                A = e.exports = function(e, n, t) {
                    "Symbol(" === h(f(n), 0, 7) && (n = "[" + v(f(n), /^Symbol\(([^)]*)\)/, "$1") + "]"), t && t.getter && (n = "get " + n), t && t.setter && (n = "set " + n), (!a(e, "name") || u && e.name !== n) && (s ? g(e, "name", {
                        value: n,
                        configurable: !0
                    }) : e.name = n), y && t && a(t, "arity") && e.length !== t.arity && g(e, "length", {
                        value: t.arity
                    });
                    try {
                        t && a(t, "constructor") && t.constructor ? s && g(e, "prototype", {
                            writable: !1
                        }) : e.prototype && (e.prototype = void 0)
                    } catch (o) {}
                    var r = d(e);
                    return a(r, "source") || (r.source = m(b, "string" == typeof n ? n : "")), e
                };
            Function.prototype.toString = A((function() {
                return i(this) && p(this).source || c(this)
            }), "toString")
        },
        Vu2e: e => {
            var n = Math.ceil,
                t = Math.floor;
            e.exports = Math.trunc || function(e) {
                var r = +e;
                return (r > 0 ? t : n)(r)
            }
        },
        xluy: (e, n, t) => {
            var r = t("f8nr"),
                o = t("jRkR"),
                i = t("lU+J"),
                a = t("tTsQ"),
                s = t("hm6+"),
                u = TypeError,
                c = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor,
                d = "enumerable",
                p = "configurable",
                f = "writable";
            n.f = r ? i ? function(e, n, t) {
                if (a(e), n = s(n), a(t), "function" === typeof e && "prototype" === n && "value" in t && f in t && !t.writable) {
                    var r = l(e, n);
                    r && r.writable && (e[n] = t.value, t = {
                        configurable: p in t ? t.configurable : r.configurable,
                        enumerable: d in t ? t.enumerable : r.enumerable,
                        writable: !1
                    })
                }
                return c(e, n, t)
            } : c : function(e, n, t) {
                if (a(e), n = s(n), a(t), o) try {
                    return c(e, n, t)
                } catch (r) {}
                if ("get" in t || "set" in t) throw u("Accessors not supported");
                return "value" in t && (e[n] = t.value), e
            }
        },
        PSsl: (e, n, t) => {
            var r = t("f8nr"),
                o = t("SE89"),
                i = t("7dK1"),
                a = t("lFLE"),
                s = t("/1o8"),
                u = t("hm6+"),
                c = t("hKKO"),
                l = t("jRkR"),
                d = Object.getOwnPropertyDescriptor;
            n.f = r ? d : function(e, n) {
                if (e = s(e), n = u(n), l) try {
                    return d(e, n)
                } catch (t) {}
                if (c(e, n)) return a(!o(i.f, e, n), e[n])
            }
        },
        Qhjw: (e, n, t) => {
            var r = t("9QHQ"),
                o = t("XepZ").concat("length", "prototype");
            n.f = Object.getOwnPropertyNames || function(e) {
                return r(e, o)
            }
        },
        n9EI: (e, n) => {
            n.f = Object.getOwnPropertySymbols
        },
        kbQN: (e, n, t) => {
            var r = t("rioE");
            e.exports = r({}.isPrototypeOf)
        },
        "9QHQ": (e, n, t) => {
            var r = t("rioE"),
                o = t("hKKO"),
                i = t("/1o8"),
                a = t("JXJY").indexOf,
                s = t("D/Aq"),
                u = r([].push);
            e.exports = function(e, n) {
                var t, r = i(e),
                    c = 0,
                    l = [];
                for (t in r) !o(s, t) && o(r, t) && u(l, t);
                for (; n.length > c;) o(r, t = n[c++]) && (~a(l, t) || u(l, t));
                return l
            }
        },
        "7dK1": (e, n) => {
            "use strict";
            var t = {}.propertyIsEnumerable,
                r = Object.getOwnPropertyDescriptor,
                o = r && !t.call({
                    1: 2
                }, 1);
            n.f = o ? function(e) {
                var n = r(this, e);
                return !!n && n.enumerable
            } : t
        },
        CzCt: (e, n, t) => {
            var r = t("SE89"),
                o = t("/LHJ"),
                i = t("nFBW"),
                a = TypeError;
            e.exports = function(e, n) {
                var t, s;
                if ("string" === n && o(t = e.toString) && !i(s = r(t, e))) return s;
                if (o(t = e.valueOf) && !i(s = r(t, e))) return s;
                if ("string" !== n && o(t = e.toString) && !i(s = r(t, e))) return s;
                throw a("Can't convert object to primitive value")
            }
        },
        ELNT: (e, n, t) => {
            var r = t("O8fN"),
                o = t("rioE"),
                i = t("Qhjw"),
                a = t("n9EI"),
                s = t("tTsQ"),
                u = o([].concat);
            e.exports = r("Reflect", "ownKeys") || function(e) {
                var n = i.f(s(e)),
                    t = a.f;
                return t ? u(n, t(e)) : n
            }
        },
        "4siQ": (e, n, t) => {
            var r = t("VzDr"),
                o = TypeError;
            e.exports = function(e) {
                if (r(e)) throw o("Can't call method on " + e);
                return e
            }
        },
        "17A7": (e, n, t) => {
            var r = t("vDgh"),
                o = t("qGbq"),
                i = r("keys");
            e.exports = function(e) {
                return i[e] || (i[e] = o(e))
            }
        },
        vSaM: (e, n, t) => {
            var r = t("htmW"),
                o = t("2ZLl"),
                i = "__core-js_shared__",
                a = r[i] || o(i, {});
            e.exports = a
        },
        vDgh: (e, n, t) => {
            var r = t("imG2"),
                o = t("vSaM");
            (e.exports = function(e, n) {
                return o[e] || (o[e] = void 0 !== n ? n : {})
            })("versions", []).push({
                version: "3.31.1",
                mode: r ? "pure" : "global",
                copyright: "\xa9 2014-2023 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.31.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        GyT7: (e, n, t) => {
            var r = t("BcTq"),
                o = t("L1Gn"),
                i = t("htmW").String;
            e.exports = !!Object.getOwnPropertySymbols && !o((function() {
                var e = Symbol();
                return !i(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && r && r < 41
            }))
        },
        cHg0: (e, n, t) => {
            var r = t("P+lJ"),
                o = Math.max,
                i = Math.min;
            e.exports = function(e, n) {
                var t = r(e);
                return t < 0 ? o(t + n, 0) : i(t, n)
            }
        },
        "/1o8": (e, n, t) => {
            var r = t("mV/l"),
                o = t("4siQ");
            e.exports = function(e) {
                return r(o(e))
            }
        },
        "P+lJ": (e, n, t) => {
            var r = t("Vu2e");
            e.exports = function(e) {
                var n = +e;
                return n !== n || 0 === n ? 0 : r(n)
            }
        },
        UvTh: (e, n, t) => {
            var r = t("P+lJ"),
                o = Math.min;
            e.exports = function(e) {
                return e > 0 ? o(r(e), 9007199254740991) : 0
            }
        },
        Vir1: (e, n, t) => {
            var r = t("4siQ"),
                o = Object;
            e.exports = function(e) {
                return o(r(e))
            }
        },
        "7ijk": (e, n, t) => {
            var r = t("SE89"),
                o = t("nFBW"),
                i = t("RTYJ"),
                a = t("WsRI"),
                s = t("CzCt"),
                u = t("O2X7"),
                c = TypeError,
                l = u("toPrimitive");
            e.exports = function(e, n) {
                if (!o(e) || i(e)) return e;
                var t, u = a(e, l);
                if (u) {
                    if (void 0 === n && (n = "default"), t = r(u, e, n), !o(t) || i(t)) return t;
                    throw c("Can't convert object to primitive value")
                }
                return void 0 === n && (n = "number"), s(e, n)
            }
        },
        "hm6+": (e, n, t) => {
            var r = t("7ijk"),
                o = t("RTYJ");
            e.exports = function(e) {
                var n = r(e, "string");
                return o(n) ? n : n + ""
            }
        },
        Oxe1: e => {
            var n = String;
            e.exports = function(e) {
                try {
                    return n(e)
                } catch (t) {
                    return "Object"
                }
            }
        },
        qGbq: (e, n, t) => {
            var r = t("rioE"),
                o = 0,
                i = Math.random(),
                a = r(1..toString);
            e.exports = function(e) {
                return "Symbol(" + (void 0 === e ? "" : e) + ")_" + a(++o + i, 36)
            }
        },
        lQr9: (e, n, t) => {
            var r = t("GyT7");
            e.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        },
        "lU+J": (e, n, t) => {
            var r = t("f8nr"),
                o = t("L1Gn");
            e.exports = r && o((function() {
                return 42 != Object.defineProperty((function() {}), "prototype", {
                    value: 42,
                    writable: !1
                }).prototype
            }))
        },
        NW3L: (e, n, t) => {
            var r = t("htmW"),
                o = t("/LHJ"),
                i = r.WeakMap;
            e.exports = o(i) && /native code/.test(String(i))
        },
        O2X7: (e, n, t) => {
            var r = t("htmW"),
                o = t("vDgh"),
                i = t("hKKO"),
                a = t("qGbq"),
                s = t("GyT7"),
                u = t("lQr9"),
                c = r.Symbol,
                l = o("wks"),
                d = u ? c.for || c : c && c.withoutSetter || a;
            e.exports = function(e) {
                return i(l, e) || (l[e] = s && i(c, e) ? c[e] : d("Symbol." + e)), l[e]
            }
        },
        Bihu: (e, n, t) => {
            var r = t("AS9I"),
                o = t("htmW");
            r({
                global: !0,
                forced: o.globalThis !== o
            }, {
                globalThis: o
            })
        },
        "h+kG": (e, n, t) => {
            "use strict";

            function r(e) {
                return e && e.Math == Math ? e : void 0
            }
            t.d(n, {
                OW: () => o
            });
            const o = "object" == typeof globalThis && r(globalThis) || r(window) || "object" == typeof self && r(self) || "object" == typeof t.g && r(t.g) || function() {
                return this
            }() || {}
        },
        cpeW: (e, n, t) => {
            "use strict";
            t("dKjp");
            t.g.pika = t.g.pika || {}, t.g.pika.version && "0.3.66" !== t.g.pika.version && console.error("Two versions of pika are loaded, please check the code. There may be potential risks.", t.g.pika.version, "0.3.66"), t.g.pika.version = t.g.pika.version || "0.3.66";
            try {
                t.g.__HTTP_NEXT_MODE_ENABLED__ = !0
            } catch (r) {
                console.error("[@pika/plugin-http]", r)
            }
        },
        bXSr: (e, n, t) => {
            "use strict";
            t.d(n, {
                P: () => ct
            });
            var r = t("EGIz"),
                o = t("2ae6"),
                i = t("Pz56"),
                a = t.n(i),
                s = t("wIZF"),
                u = t("UCWY"),
                c = t("+HTX"),
                l = t("VP0d");
            var d = t("Dz1D");

            function p() {
                var e = (0, d.PC)().SENSORS_SERVER_HOST;
                if (e) return e
            }
            t("ofQG");

            function f() {
                var e = (0, d.PC)().STATIC_HOST;
                if (e) return e
            }
            var g = function(e) {
                var n = (0, d.PC)();
                return {
                    sensorsConfig: {
                        server_url: p(),
                        staticHost: f(),
                        publicParams: {
                            df_projectName: e.projectName,
                            df_etag: n.COMMIT_HEAD
                        }
                    },
                    autoLogin: e.autoLogin,
                    API_HOST: "",
                    identifyId: ""
                }
            };
            const h = function(e) {
                return (0, u.yO)({
                    appComponent: function(n) {
                        return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function r() {
                            var o;
                            return a().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (p()) {
                                            r.next = 2;
                                            break
                                        }
                                        return r.abrupt("return", (console.log("[@pika/plugin-track] SENSORS_SERVER_HOST is not set, so the track data will not be uploaded."), n));
                                    case 2:
                                        o = g(e), (0, c.uz)(o);
                                        try {
                                            t.g.pika = t.g.pika || {}, t.g.pika.__REPORT_TRACK__ = t.g.pika.__REPORT_TRACK__ || [], t.g.pika.__REPORT_TRACK__.forEach((function(e) {
                                                var n = (0, l.A)(e, 3),
                                                    t = n[0],
                                                    r = n[1],
                                                    o = n[2];
                                                return (0, c.AC)({
                                                    eventName: t,
                                                    data: r,
                                                    options: o
                                                })
                                            })), t.g.pika.__REPORT_TRACK__.length = 0, t.g.pika.__REPORT_TRACK__.push = function(e) {
                                                var n = (0, l.A)(e, 3),
                                                    t = n[0],
                                                    r = n[1],
                                                    o = n[2];
                                                return (0, c.AC)({
                                                    eventName: t,
                                                    data: r,
                                                    options: o
                                                })
                                            }
                                        } catch (i) {
                                            console.error("[@pika/plugin-track] deprecatedTrackInit error", i)
                                        }
                                        return r.abrupt("return", n);
                                    case 6:
                                    case "end":
                                        return r.stop()
                                }
                            }), r)
                        })))
                    }
                })
            };
            var v = t("tEf9"),
                m = t("DTvD"),
                y = t.n(m),
                b = t("AXwM"),
                A = t("V+XC"),
                I = t("hFxi");
            const M = "PIKA_WEB_VITALS",
                x = {
                    PIKA_CLS: {
                        name: "PAGE-CLS",
                        duration: !1
                    },
                    PIKA_FCP: {
                        name: "PAGE-FCP",
                        duration: !1
                    },
                    PIKA_LCP: {
                        name: "PAGE-LCP",
                        duration: !1
                    },
                    PIKA_FID: {
                        name: "PAGE-FID",
                        duration: !1
                    },
                    PIKA_INP: {
                        name: "PAGE-INP",
                        duration: !1
                    },
                    PIKA_TTFB: {
                        name: "PAGE-TTFB",
                        duration: !1
                    }
                },
                C = e => e.replace(/^\//, "").replace(/\/$/, ""),
                k = e => {
                    if (!e) return "";
                    try {
                        const n = e.map((e => {
                                const {
                                    route: n
                                } = e;
                                return {
                                    id: n.id,
                                    path: n.path
                                }
                            })),
                            {
                                length: t
                            } = e;
                        for (let i = t - 1; i >= 0; i--) {
                            const {
                                route: t
                            } = e[i], {
                                children: r,
                                path: o,
                                id: a
                            } = t;
                            (null === r || void 0 === r ? void 0 : r.length) && n.forEach((e => {
                                r.some((n => n.id === e.id)) && (e.path = `${C(o)}/${C(e.path)}`, e.id = a)
                            }))
                        }
                        const r = n[n.length - 1],
                            {
                                path: o
                            } = r;
                        return /^\//.test(o) ? o : `/${o}`
                    } catch (Bn) {
                        return ""
                    }
                };
            new class {
                constructor(e) {
                    this.capacity = e, this.cache = new Map
                }
                get(e) {
                    if (!this.cache.has(e)) return null;
                    const n = this.cache.get(e);
                    return this.cache.delete(e), this.cache.set(e, n), n
                }
                put(e, n) {
                    if (this.cache.has(e)) this.cache.delete(e);
                    else if (this.cache.size === this.capacity) {
                        const e = this.cache.keys().next().value;
                        this.cache.delete(e)
                    }
                    this.cache.set(e, n)
                }
            }(10);
            const w = window.requestIdleCallback || function(e, n = {
                    timeout: 3e3
                }) {
                    return setTimeout((() => {
                        e({
                            didTimeout: !1,
                            timeRemaining: () => 50
                        })
                    }), n.timeout)
                },
                E = window.cancelIdleCallback || function(e) {
                    clearTimeout(e)
                };

            function _({
                remainingTime: e,
                timeout: n
            } = {
                remainingTime: 49,
                timeout: 2e3
            }) {
                return new Promise(((t, r) => {
                    let o;
                    const i = setTimeout((() => {
                        E && o && E(o), t()
                    }), n);

                    function a(n) {
                        n.timeRemaining() >= e ? (console.debug(`[awaitPageLoadAndIdle] Idle time remaining is >= ${e}ms`), clearTimeout(i), t()) : o = w(a)
                    }
                    const s = () => {
                        console.debug("[awaitPageLoadAndIdle] Page has just finished loading"), window.removeEventListener("load", s), o = w(a)
                    };
                    "complete" === document.readyState ? (console.debug("[awaitPageLoadAndIdle] Page is already loaded (document.readyState is complete)"), o = w(a)) : window.addEventListener("load", s)
                }))
            }
            var S = t("LJ4M");

            function T(e) {
                const n = (0, S.read)(e);
                return O(n) ? n : null
            }

            function O(e) {
                if ("string" !== typeof e) return !1;
                const n = /^[a-zA-Z0-9-_]+$/.test(e);
                return n || console.warn(`[@pika/utils] Invalid content: ${e}, it may contain XSS attack.`), n
            }
            var P = t("mnh2");

            function L() {
                var e = (0, d.PC)().STATIC_HOST_SHARE;
                if (e) return e
            }
            var N = function(e) {
                    return function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = (0, b.K7)(),
                            o = r.matches;
                        return m.useEffect((function() {
                            try {
                                t.g.pika = t.g.pika || {}, t.g.pika.currentPath = k(o)
                            } catch (e) {}
                        }), [o]), m.createElement(e, Object.assign({}, n))
                    }
                },
                R = !1;
            const D = function(e) {
                return (0, u.yO)({
                    appComponent: function(e) {
                        return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                            var r, o, i;
                            return a().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return R || ((r = L()) ? o = "".concat(r, "/unpkg/monitor/reporter-sdk@").concat(window._bn_reporter_version, ".js") : console.error("[@pika/plugin-monitor] STATIC_HOST_SHARE is not set."), i = function() {
                                            if (o) {
                                                var e = document.createElement("script");
                                                e.src = o, e.id = "Reporter-sdk", e.defer = !0, document.body.appendChild(e), R = !0
                                            }
                                        }, _({
                                            remainingTime: 49,
                                            timeout: 1e4
                                        }).then(i)), n.abrupt("return", N((0, P.X)(e, {
                                            onMount: function() {
                                                t.g.pika = t.g.pika || {}, t.g.pika.__REPORT_ERRORS__ = t.g.pika.__REPORT_ERRORS__ || [], t.g.pika.__REPORT_ERRORS__.forEach((function(e) {
                                                    return A.N7.apply(void 0, (0, v.A)(e))
                                                })), t.g.pika.__REPORT_ERRORS__.length = 0, t.g.pika.__REPORT_ERRORS__.push = function(e) {
                                                    return A.N7.apply(void 0, (0, v.A)(e))
                                                }, t.g.pika.__REPORT_MONITOR_EVENTS__ = t.g.pika.__REPORT_MONITOR_EVENTS__ || [], t.g.pika.__REPORT_MONITOR_EVENTS__.forEach((function(e) {
                                                    return I.N2.apply(void 0, (0, v.A)(e))
                                                })), t.g.pika.__REPORT_MONITOR_EVENTS__.length = 0, t.g.pika.__REPORT_MONITOR_EVENTS__.push = function(e) {
                                                    return I.N2.apply(void 0, (0, v.A)(e))
                                                }
                                            },
                                            name: "RootErrorBoundary",
                                            fallback: m.createElement(e, null)
                                        })));
                                    case 3:
                                    case "end":
                                        return n.stop()
                                }
                            }), n)
                        })))
                    }
                })
            };

            function F(e) {
                return !!e && /^\d+\.\d+\.\d+$/.test(e)
            }
            var B = function(e) {
                return function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, m.useEffect)((function() {
                        var e = null;
                        try {
                            e = setTimeout((function() {
                                ! function() {
                                    var e, n;
                                    F(null === (e = null === t.g || void 0 === t.g ? void 0 : t.g.pika) || void 0 === e ? void 0 : e.version) || console.error("[Risk][pika] You are using an unstable version of pika, please use the official released version.", null === (n = null === t.g || void 0 === t.g ? void 0 : t.g.pika) || void 0 === n ? void 0 : n.version)
                                }()
                            }), 5e3)
                        } catch (n) {}
                        return function() {
                            e && clearTimeout(e)
                        }
                    }), []), y().createElement(e, Object.assign({}, n))
                }
            };
            var G = t("E0uk");

            function j() {
                var e, n, r;
                t.g.pika = t.g.pika || {}, t.g.pika.__REQUEST_INTERCEPTORS__ = t.g.pika.__REQUEST_INTERCEPTORS__ || [], null === (e = t.g.pika.__REQUEST_INTERCEPTORS__) || void 0 === e || e.forEach((function(e) {
                    return G.addRequestInterceptor(e)
                })), t.g.pika.__REQUEST_INTERCEPTORS__.length = 0, t.g.pika.__REQUEST_INTERCEPTORS__.push = function(e) {
                    return G.addRequestInterceptor(e)
                }, t.g.pika.__RESPONSE_INTERCEPTORS__ = t.g.pika.__RESPONSE_INTERCEPTORS__ || [], null === (n = t.g.pika.__RESPONSE_INTERCEPTORS__) || void 0 === n || n.forEach((function(e) {
                    return G.addResponseInterceptor(e)
                })), t.g.pika.__RESPONSE_INTERCEPTORS__.length = 0, t.g.pika.__RESPONSE_INTERCEPTORS__.push = function(e) {
                    return G.addResponseInterceptor(e)
                }, t.g.pika.__RESULT_INTERCEPTORS__ = t.g.pika.__RESULT_INTERCEPTORS__ || [], null === (r = t.g.pika.__RESULT_INTERCEPTORS__) || void 0 === r || r.forEach((function(e) {
                    return G.addResultInterceptor(e)
                })), t.g.pika.__RESULT_INTERCEPTORS__.length = 0, t.g.pika.__RESULT_INTERCEPTORS__.push = function(e) {
                    return G.addResultInterceptor(e)
                }
            }
            var H = function() {
                    try {
                        t.g.__HTTP_NEXT_MODE_ENABLED__ = !0
                    } catch (e) {
                        console.error("[@pika/plugin-http]", e)
                    }
                },
                U = !1;
            const q = function() {
                return (0, u.yO)({
                    init: function() {
                        return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function e() {
                            return a().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        U || (U = !0, H(), j(), "function" === typeof t.g.__HTTP_MODULE_DEFER_RESOLVE__ && t.g.__HTTP_MODULE_DEFER_RESOLVE__(), t.g.pika = t.g.pika || {}, t.g.pika.__HTTP_MODULE__ = t.g.pika.__HTTP_MODULE__ || {
                                            _config: G._config,
                                            get: G.get,
                                            post: G.post,
                                            put: G.put,
                                            del: G.del,
                                            postForm: G.postForm,
                                            upload: G.upload,
                                            uploadHandler: G.uploadHandler
                                        });
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))
                    }
                }, {
                    name: "@pika/plugin-http"
                })
            };
            var W = t("NVnN"),
                V = t("9OUN");

            function K() {
                return K = Object.assign || function(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var t = arguments[n];
                        for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
                    }
                    return e
                }, K.apply(this, arguments)
            }

            function J(e) {
                e.models.forEach((function(n) {
                    return z(e, n)
                }));
                var n = $(e),
                    t = V.applyMiddleware.apply(V, e.reduxConfig.middlewares),
                    r = function(e) {
                        void 0 === e && (e = {});
                        return !e.disabled && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(e) : V.compose
                    }(e.reduxConfig.devtoolOptions).apply(void 0, e.reduxConfig.enhancers.concat([t])),
                    o = e.reduxConfig.createStore || V.createStore,
                    i = e.reduxConfig.initialState;
                return o(n, void 0 === i ? {} : i, r)
            }

            function z(e, n) {
                var t = {};
                Object.keys(n.reducers).forEach((function(e) {
                    var r = function(e) {
                        return e.indexOf("/") > -1
                    }(e) ? e : n.name + "/" + e;
                    t[r] = n.reducers[e]
                }));
                var r = function(e, r) {
                        return void 0 === e && (e = n.state), r.type in t ? t[r.type](e, r.payload, r.meta) : e
                    },
                    o = n.baseReducer,
                    i = o ? function(e, t) {
                        return void 0 === e && (e = n.state), r(o(e, t), t)
                    } : r;
                e.forEachPlugin("onReducer", (function(t) {
                    i = t(i, n.name, e) || i
                })), e.reduxConfig.reducers[n.name] = i
            }

            function $(e) {
                var n = e.reduxConfig.rootReducers,
                    t = function(e) {
                        var n = e.combineReducers || V.combineReducers;
                        if (!Object.keys(e.reducers).length) return function(e) {
                            return e
                        };
                        return n(e.reducers)
                    }(e.reduxConfig),
                    r = t;
                return n && Object.keys(n).length && (r = function(e, r) {
                    var o = n[r.type];
                    return t(o ? o(e, r) : e, r)
                }), e.forEachPlugin("onRootReducer", (function(n) {
                    r = n(r, e) || r
                })), r
            }
            var Y = function(e, n, t, r) {
                return Object.assign((function(r, o) {
                    var i = {
                        type: n + "/" + t
                    };
                    return "undefined" !== typeof r && (i.payload = r), "undefined" !== typeof o && (i.meta = o), e.dispatch(i)
                }), {
                    isEffect: r
                })
            };

            function X(e) {
                return Object.keys(e).map((function(n) {
                    var t = function(e, n) {
                        return K({
                            name: e,
                            reducers: {}
                        }, n)
                    }(n, e[n]);
                    return t
                }))
            }

            function Q(e) {
                var n = function(e) {
                    return {
                        models: X(e.models),
                        reduxConfig: e.redux,
                        forEachPlugin: function(n, t) {
                            e.plugins.forEach((function(e) {
                                e[n] && t(e[n])
                            }))
                        },
                        effects: {}
                    }
                }(e);
                n.reduxConfig.middlewares.push(function(e) {
                    return function(n) {
                        return function(t) {
                            return function(r) {
                                return r.type in e.effects ? (t(r), e.effects[r.type](r.payload, n.getState(), r.meta)) : t(r)
                            }
                        }
                    }
                }(n)), n.forEachPlugin("createMiddleware", (function(e) {
                    n.reduxConfig.middlewares.push(e(n))
                }));
                var t = J(n),
                    r = K({}, t, {
                        name: e.name,
                        addModel: function(e) {
                            z(n, e), Z(r, n, e), t.replaceReducer($(n)), t.dispatch({
                                type: "@@redux/REPLACE"
                            })
                        }
                    });
                return function(e, n) {
                    n.forEach((function(n) {
                        n.exposed && Object.keys(n.exposed).forEach((function(t) {
                            if (n.exposed) {
                                var r = n.exposed[t],
                                    o = "function" === typeof r;
                                e[t] = o ? function() {
                                    for (var n = arguments.length, t = new Array(n), o = 0; o < n; o++) t[o] = arguments[o];
                                    return r.apply(void 0, [e].concat(t))
                                } : Object.create(n.exposed[t])
                            }
                        }))
                    }))
                }(r, e.plugins), n.models.forEach((function(e) {
                    return Z(r, n, e)
                })), n.forEachPlugin("onStoreCreated", (function(e) {
                    r = e(r, n) || r
                })), r
            }

            function Z(e, n, t) {
                e.dispatch["" + t.name] = {},
                    function(e, n, t) {
                        var r = e.dispatch[t.name];
                        Object.keys(t.reducers).forEach((function(n) {
                            t.name, t.reducers, r[n] = Y(e, t.name, n, !1)
                        }));
                        var o = {};
                        t.effects && (o = "function" === typeof t.effects ? t.effects(e.dispatch) : t.effects), Object.keys(o).forEach((function(i) {
                            t.name, n.effects[t.name + "/" + i] = o[i].bind(r), r[i] = Y(e, t.name, i, !0)
                        }))
                    }(e, n, t), n.forEachPlugin("onModel", (function(n) {
                        n(t, e)
                    }))
            }
            var ee = 0;

            function ne(e, n) {
                return n ? K({}, n, e) : e
            }
            var te = function(e) {
                    var n = function(e) {
                        var n, t, r, o = null != (n = e.name) ? n : "Rematch Store " + ee;
                        ee += 1;
                        var i = {
                            name: o,
                            models: e.models || {},
                            plugins: e.plugins || [],
                            redux: K({
                                reducers: {},
                                rootReducers: {},
                                enhancers: [],
                                middlewares: []
                            }, e.redux, {
                                devtoolOptions: K({
                                    name: o
                                }, null != (t = null == (r = e.redux) ? void 0 : r.devtoolOptions) ? t : {})
                            })
                        };
                        return i.plugins.forEach((function(e) {
                            e.config && (i.models = ne(i.models, e.config.models), e.config.redux && (i.redux.initialState = ne(i.redux.initialState, e.config.redux.initialState), i.redux.reducers = ne(i.redux.reducers, e.config.redux.reducers), i.redux.rootReducers = ne(i.redux.rootReducers, e.config.redux.reducers), i.redux.enhancers = [].concat(i.redux.enhancers, e.config.redux.enhancers || []), i.redux.middlewares = [].concat(i.redux.middlewares, e.config.redux.middlewares || []), i.redux.combineReducers = i.redux.combineReducers || e.config.redux.combineReducers, i.redux.createStore = i.redux.createStore || e.config.redux.createStore))
                        })), i
                    }(e || {});
                    return Q(n)
                },
                re = function() {
                    return function(e) {
                        var n = e.reducers,
                            t = void 0 === n ? {} : n,
                            r = e.effects;
                        return K({}, e, {
                            reducers: t,
                            effects: void 0 === r ? {} : r
                        })
                    }
                };
            var oe, ie = t("sViW"),
                ae = t("ezuS"),
                se = t("BK7R"),
                ue = t("QUKP"),
                ce = t("gZfF"),
                le = t("qrIQ"),
                de = t("Cl8C"),
                pe = t("Osl1"),
                fe = t.n(pe),
                ge = t("nsO7"),
                he = t("tjHY"),
                ve = t("cyCu"),
                me = t("Zhab"),
                ye = t("EGuz"),
                be = t("aCc/"),
                Ae = t("4FdS"),
                Ie = t("ecyg"),
                Me = t("c+qD"),
                xe = t("ecmL"),
                Ce = t("JIKO"),
                ke = t("ykOY"),
                we = t("DkGs"),
                Ee = t("EHI9"),
                _e = t("nhnq"),
                Se = function(e) {
                    if (!Array.isArray(e)) return [];
                    try {
                        return e.concat().sort((function(e, n) {
                            return "number" !== typeof e.msgId ? 1 : "number" !== typeof n.msgId ? -1 : e.msgId - n.msgId
                        }))
                    } catch (Bn) {
                        return console.log(Bn), e
                    }
                },
                Te = t("BMtS"),
                Oe = 100,
                Pe = [],
                Le = null,
                Ne = {},
                Re = {},
                De = {
                    name: "chat",
                    state: {
                        haodeskRefId: void 0,
                        haodeskRefIdWeb: null,
                        hasGroup: !1,
                        currentServiceGroupId: 0,
                        currentChannelGroupId: 0,
                        currentChannelMember: null,
                        isCurrentChannelAdmin: !1,
                        isCurrentChannelSubAdmin: !1,
                        unReadInfo: {
                            count: 0,
                            hasNotDisturbMsg: !1
                        },
                        chatGroups: [],
                        channelGroups: [],
                        channelFileDictionary: {},
                        channelFileCurrentFetchingIds: [],
                        chats: [],
                        token: "",
                        socketDomain: "",
                        filter: !1,
                        nextId: 0,
                        groupMessages: {},
                        channelMessages: {},
                        msgIdImageMap: {},
                        quoteMsgInfo: null,
                        textInputHeight: 64,
                        inputValue: "",
                        openedChatGroupModalVisible: !1,
                        isSocketReconnecting: !1,
                        groupUserBaseInfo: {
                            email: "",
                            id: "",
                            nickname: "",
                            parentUser: !1,
                            entryNickName: null,
                            userOpenSession: null
                        },
                        uid: null,
                        deletedChannelMsgs: [],
                        serviceGroupLastSeqNo2: null,
                        timelineDisconnect: !1,
                        timelineInterval: 1e4,
                        socketStatus: Me.cZ.NOT_CONNECTED,
                        channelUserLabels: [],
                        largeGroupRateLimitModalVisible: !1,
                        tempUnreadMentionMsgChannelMap: {},
                        firstUnreadMentionMsgId: null,
                        msgToScrollId: null,
                        isScrollingToFirstUnreadMentionMsg: !1,
                        inputHeight: 0,
                        keyboardHeight: 0,
                        pasteImageHeight: 0,
                        scrollToBottomBtnRender: !0,
                        scrollToBottomBtnVisible: !1,
                        desktopRightMiniPageTitle: "",
                        desktopRightMiniPage: null,
                        toDeleteMsg: null,
                        searchChatHistoryVisible: !1,
                        isDisplayTempChannelMsgList: !1,
                        tempChannelMsgList: null,
                        largeGroupAvatarMap: {},
                        allAsset: {},
                        allProducts: [],
                        redPacketCreateConfig: null,
                        grabRedPacketConfig: null,
                        actionMenuVisible: !1,
                        anchoringPosition: "bottom",
                        channelOriginalFileDictionary: {},
                        confirmUrl: null
                    },
                    reducers: {
                        objectAssign: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return (0, se.A)({}, e, n)
                        },
                        objectChannelFileDictionaryAssign: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                t = (null === e || void 0 === e ? void 0 : e.channelFileDictionary) || {},
                                r = (0, se.A)({}, t, (null === n || void 0 === n ? void 0 : n.channelFileDictionary) || {});
                            return (0, ue.A)((0, se.A)({}, e, n), {
                                channelFileDictionary: r
                            })
                        },
                        setChannelUserLabels: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                channelUserLabels: n
                            })
                        },
                        setConfirmUrl: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                confirmUrl: n
                            })
                        },
                        setCurrentServiceGroupId: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                currentChannelGroupId: 0,
                                currentServiceGroupId: n
                            })
                        },
                        setCurrentChannelGroupId: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                currentServiceGroupId: 0,
                                currentChannelGroupId: n
                            })
                        },
                        setIsSocketReconnecting: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                isSocketReconnecting: n
                            })
                        },
                        setCurrentChannelMember: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                currentChannelMember: n
                            })
                        },
                        setUid: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                uid: n
                            })
                        },
                        setIsCurrentChannelAdmin: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                isCurrentChannelAdmin: !!n
                            })
                        },
                        setIsCurrentChannelSubAdmin: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                isCurrentChannelSubAdmin: !!n
                            })
                        },
                        setDesktopRightMiniPage: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                desktopRightMiniPage: n
                            })
                        },
                        setDesktopRightMiniPageTitle: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                desktopRightMiniPageTitle: n
                            })
                        },
                        setLargeGroupAvatarMap: function(e, n) {
                            return (0, ge.isEqual)(e.largeGroupAvatarMap, n) || (0, ge.isMatch)(e.largeGroupAvatarMap, n) ? e : (0, ue.A)((0, se.A)({}, e), {
                                largeGroupAvatarMap: (0, se.A)({}, e.largeGroupAvatarMap, n)
                            })
                        },
                        setSearchChatHistoryVisible: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                searchChatHistoryVisible: n
                            })
                        },
                        setMsgToScrollId: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                msgToScrollId: n
                            })
                        },
                        setToDeleteMsg: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                toDeleteMsg: n
                            })
                        },
                        setPasteImageHeight: function(e, n) {
                            return "number" !== typeof n ? e : (0, ue.A)((0, se.A)({}, e), {
                                pasteImageHeight: n
                            })
                        },
                        setKeyboardHeight: function(e, n) {
                            return "number" !== typeof n ? e : (0, ue.A)((0, se.A)({}, e), {
                                keyboardHeight: n
                            })
                        },
                        setScrollToBottomBtnRender: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                scrollToBottomBtnRender: n
                            })
                        },
                        setScrollToBottomBtnVisible: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                scrollToBottomBtnVisible: n
                            })
                        },
                        setOpenedChatGroupModalVisible: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                openedChatGroupModalVisible: n
                            })
                        },
                        setMsgIdImageMap: function(e, n) {
                            try {
                                var t = e.msgIdImageMap,
                                    r = n.msgId,
                                    o = n.image;
                                return (0, ue.A)((0, se.A)({}, e), {
                                    msgIdImageMap: (0, ue.A)((0, se.A)({}, t), (0, ae.A)({}, r, o))
                                })
                            } catch (Bn) {
                                return e
                            }
                        },
                        scrollToMessage: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                haodeskRefId: n
                            })
                        },
                        setActionMenuVisible: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                actionMenuVisible: n
                            })
                        },
                        setAllAsset: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                allAsset: n
                            })
                        },
                        setAllProducts: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                allProducts: n
                            })
                        },
                        setIsDisplayTempChannelMsgList: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                isDisplayTempChannelMsgList: n
                            })
                        },
                        setTempChannelMsgList: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                tempChannelMsgList: n
                            })
                        },
                        setSocketStatus: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                socketStatus: n
                            })
                        },
                        setTimelineInterval: function(e, n) {
                            return "number" === typeof n ? (0, ue.A)((0, se.A)({}, e), {
                                timelineInterval: 1e3 * n
                            }) : e
                        },
                        setInputHeight: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                inputHeight: n
                            })
                        },
                        setInputValue: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                inputValue: n
                            })
                        },
                        setDeletedChannelMsgs: function(e, n) {
                            var t = (0, v.A)(e.deletedChannelMsgs).concat([n]);
                            return (0, ue.A)((0, se.A)({}, e), {
                                deletedChannelMsgs: t
                            })
                        },
                        setTextInputHeight: function(e, n) {
                            return "number" === typeof n ? (0, ue.A)((0, se.A)({}, e), {
                                textInputHeight: n
                            }) : e
                        },
                        setQuoteMsgInfo: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                quoteMsgInfo: n
                            })
                        },
                        resetChatChannelGroupMsgById: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                channelMessages: (0, ue.A)((0, se.A)({}, e.channelMessages), (0, ae.A)({}, n, (0, ue.A)((0, se.A)({}, e.channelMessages[n]), {
                                    msgs: []
                                })))
                            })
                        },
                        updateChannelMessages: function(e, n) {
                            try {
                                var t, r = n.channelId,
                                    o = n.curChannelMsgs,
                                    i = n.hasMore,
                                    a = Re[r] || [],
                                    s = (null === e || void 0 === e || null === (t = e.channelMessages) || void 0 === t ? void 0 : t[r]) || {},
                                    u = (Array.isArray(null === s || void 0 === s ? void 0 : s.msgs) ? null === s || void 0 === s ? void 0 : s.msgs : []).concat(o).concat(a),
                                    c = Se(u),
                                    l = (0, _e.R3)(c),
                                    d = "boolean" === typeof i ? i : null === s || void 0 === s ? void 0 : s.hasMore,
                                    p = (0, ue.A)((0, se.A)({}, s), {
                                        msgs: l,
                                        hasMore: d
                                    });
                                return fe()(e, {
                                    channelMessages: (0, ae.A)({}, r, {
                                        $set: (0, se.A)({}, p)
                                    })
                                })
                            } catch (f) {
                                return console.error("error in updateChannelMessages", f), e
                            }
                        },
                        setLargeGroupRateLimitModalVisible: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                largeGroupRateLimitModalVisible: n
                            })
                        },
                        setAnchoringPosition: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                anchoringPosition: n
                            })
                        },
                        scrollToMessageWeb: function(e, n) {
                            return (null === n || void 0 === n ? void 0 : n.haodeskRefIdWeb) ? (0, ue.A)((0, se.A)({}, e), {
                                haodeskRefIdWeb: {
                                    haodeskRefIdWeb: null === n || void 0 === n ? void 0 : n.haodeskRefIdWeb,
                                    align: null === n || void 0 === n ? void 0 : n.align,
                                    offset: (null === n || void 0 === n ? void 0 : n.offset) || 0
                                }
                            }) : (0, ue.A)((0, se.A)({}, e), {
                                haodeskRefIdWeb: null
                            })
                        },
                        updateChannelOriginalFileDictionary: function(e, n) {
                            var t = n || {},
                                r = t.msgId,
                                o = t.url;
                            return (0, ue.A)((0, se.A)({}, e), {
                                channelOriginalFileDictionary: (0, ue.A)((0, se.A)({}, e.channelOriginalFileDictionary), (0, ae.A)({}, r, o))
                            })
                        },
                        clear: function(e) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                chats: []
                            })
                        }
                    },
                    effects: function(e) {
                        return {
                            logSocketConnectStatusBarShow: function(e, n) {
                                try {
                                    var t = (null === n || void 0 === n ? void 0 : n.chat) || {},
                                        r = t.uid,
                                        o = t.currentServiceGroupId,
                                        i = t.currentChannelGroupId,
                                        a = t.socketStatus,
                                        s = {
                                            uid: r,
                                            groupId: o,
                                            channelId: i,
                                            isLargeGroup: !!i,
                                            isMiniApp: le.lq,
                                            socketStatus: a
                                        };
                                    (0, ye.$3)("service-group-socketConnectStatusBar-show", {
                                        extraInfo: le.lq ? JSON.stringify(s) : s
                                    })
                                } catch (u) {
                                    console.error(u)
                                }
                            },
                            logSocketReconnect: function(e, n) {
                                try {
                                    var t = (null === n || void 0 === n ? void 0 : n.chat) || {},
                                        r = t.uid,
                                        o = t.currentServiceGroupId,
                                        i = t.currentChannelGroupId,
                                        a = {
                                            uid: r,
                                            groupId: o,
                                            channelId: i,
                                            isLargeGroup: !!i,
                                            isMiniApp: le.lq
                                        };
                                    (0, ye.$3)("service-group-socket-reconnect", {
                                        extraInfo: le.lq ? JSON.stringify(a) : a
                                    })
                                } catch (s) {
                                    console.error(s)
                                }
                            },
                            scrollToBottom: function() {
                                e.chat.scrollToMessage(Me.wh), e.chat.setAnchoringPosition("bottom"), setTimeout((function() {
                                    e.chat.setAnchoringPosition("auto"), e.chat.scrollToMessage("")
                                }), 500)
                            },
                            fetchCurrentUserInfo: function(n) {
                                return (0, ie.A)(a().mark((function t() {
                                    var r, o, i;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 3, (0, ke.xx)(n);
                                            case 3:
                                                (null === (o = t.sent) || void 0 === o || null === (r = o.data) || void 0 === r ? void 0 : r.uid) && (e.chat.setUid(o.data.uid), e.chat.setIsCurrentChannelAdmin(o.data.admin), e.chat.setIsCurrentChannelSubAdmin(o.data.subAdmin), null === e || void 0 === e || null === (i = e.chat) || void 0 === i || i.updateLargeGroupAvatarMap({
                                                    data: [o.data],
                                                    forceUpdate: !0
                                                }));
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            getChannelList: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                                return (0, ie.A)(a().mark((function t() {
                                    var r, o, i, s, u, c, l;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return n && e.chat.objectAssign({
                                                    channelGroups: []
                                                }), t.prev = 1, t.next = 5, (0, xe.is)();
                                            case 5:
                                                i = t.sent, (null === (r = i.data) || void 0 === r || null === (o = r.channels) || void 0 === o ? void 0 : o.length) > 0 && (u = i.data.channels.map((function(e) {
                                                    return (0, ue.A)((0, se.A)({}, e), {
                                                        groupName: e.name,
                                                        unreadCount: e.unreadCnt || 0,
                                                        lastMsg: e.lastMsg || {
                                                            content: "",
                                                            msgType: Me.Wr.CHANNEL_TEXT,
                                                            createTime: 0
                                                        }
                                                    })
                                                })), e.chat.objectAssign({
                                                    channelGroups: u
                                                }), c = Ie.Wt.getTemp(), l = {}, null === (s = u.forEach) || void 0 === s || s.call(u, (function(e) {
                                                    var n = e.id,
                                                        t = e.hasMention,
                                                        r = e.mentionAll;
                                                    c[n] = !!t, l[n] = !!r
                                                })), e.mention.setTempUnreadMentionMsgChannelMap(c), e.mention.setTempUnreadMentionAllChannelMap(l)), t.next = 12;
                                                break;
                                            case 9:
                                                t.prev = 9, t.t0 = t.catch(1), console.error("error in getChannelList", t.t0);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            getChatGroupList: function() {
                                var n = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                                    t = (arguments.length > 1 ? arguments[1] : void 0).chat;
                                return (0, ie.A)(a().mark((function r() {
                                    var o, i, s, u, c, l, d, p;
                                    return a().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (r.prev = 0, o = t.hasGroup, i = t.token, s = t.chatGroups, !o) {
                                                    r.next = 8;
                                                    break
                                                }
                                                return r.next = 5, (0, xe.FW)(i);
                                            case 5:
                                                (u = r.sent).success && (c = u.data || {}, l = c.token, d = c.groups, e.chat.objectAssign({
                                                    token: l
                                                }), l && Array.isArray(d) && d.length && (p = d.map((function(e) {
                                                    e.weaGroupId;
                                                    var n = (0, ce.A)(e, ["weaGroupId"]),
                                                        t = s.findIndex((function(e) {
                                                            return "".concat(e.groupId) === "".concat(n.groupId)
                                                        }));
                                                    return -1 !== t ? (0, se.A)({}, s[t], n) : (0, se.A)({}, n)
                                                })), e.chat.objectAssign({
                                                    chatGroups: p.sort((function(e, n) {
                                                        return n.lastMsgTime > e.lastMsgTime ? 1 : -1
                                                    }))
                                                }))), n && e.chat.getChatGroupListDetails();
                                            case 8:
                                                r.next = 13;
                                                break;
                                            case 10:
                                                r.prev = 10, r.t0 = r.catch(0), console.error("error in getChatGroupList", r.t0);
                                            case 13:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [0, 10]
                                    ])
                                })))()
                            },
                            getChatGroupListDetails: function(n, t) {
                                var r = t.chat;
                                return (0, ie.A)(a().mark((function n() {
                                    var t, o, i, s, u, c, l, d;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (n.prev = 0, t = r.hasGroup, o = r.token, i = r.chatGroups, !t) {
                                                    n.next = 8;
                                                    break
                                                }
                                                return n.next = 6, (0, xe.VY)(o);
                                            case 6:
                                                (c = n.sent).success && (null === (s = c.data) || void 0 === s || null === (u = s.groupList) || void 0 === u ? void 0 : u.length) && (l = c.data.groupList, Array.isArray(l) && (d = i.map((function(e) {
                                                    var n = e.groupId,
                                                        t = l.find((function(e) {
                                                            return "".concat(e.groupId) === "".concat(n)
                                                        }));
                                                    if (t && Array.isArray(null === t || void 0 === t ? void 0 : t.chatGroupMembers)) {
                                                        var r, o = t.chatGroupMembers.reduce((function(e, n) {
                                                                return (0, ue.A)((0, se.A)({}, e), (0, ae.A)({}, n.weaId, n))
                                                            }), {}),
                                                            i = t.weaGroupId,
                                                            a = t.userWeaId,
                                                            s = t.groupCategory,
                                                            u = t.lastMsg,
                                                            c = t.lastMsgSender,
                                                            d = t.lastMsgSenderType;
                                                        if (u) try {
                                                            var p, f, g = JSON.parse(u);
                                                            r = (null === g || void 0 === g || null === (p = g.msg) || void 0 === p ? void 0 : p.body) || (null === g || void 0 === g || null === (f = g.card) || void 0 === f ? void 0 : f.content) || null
                                                        } catch (Bn) {
                                                            r = null
                                                        }
                                                        return (0, ue.A)((0, se.A)({}, e, r && {
                                                            lastMsgPreview: r
                                                        }), {
                                                            chatGroupMemberTable: o,
                                                            weaGroupId: i,
                                                            userWeaId: a,
                                                            groupCategory: s,
                                                            lastMsgSender: c,
                                                            lastMsgSenderType: d
                                                        })
                                                    }
                                                    return e
                                                })), e.chat.objectAssign({
                                                    chatGroups: d.sort((function(e, n) {
                                                        return n.lastMsgTime > e.lastMsgTime ? 1 : -1
                                                    }))
                                                })));
                                            case 8:
                                                n.next = 13;
                                                break;
                                            case 10:
                                                n.prev = 10, n.t0 = n.catch(0), console.error("error in getChatGroupListDetails", n.t0);
                                            case 13:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [0, 10]
                                    ])
                                })))()
                            },
                            pushGroupMessage: function(n, t) {
                                var r = t.chat,
                                    o = n.groupId,
                                    i = n.content,
                                    a = n.seqNo2,
                                    s = n.channelId,
                                    u = r.groupMessages,
                                    c = r.currentServiceGroupId,
                                    l = r.channelMessages,
                                    d = r.currentChannelGroupId,
                                    p = r.uid;
                                try {
                                    if (o && (null === u || void 0 === u ? void 0 : u.hasOwnProperty(o)) && (!le.lq || le.lq && o === c)) {
                                        var f = JSON.parse(i),
                                            g = u[o],
                                            h = g.msgs;
                                        if (h.find((function(e) {
                                                var n, t;
                                                return null === e || void 0 === e || null === (n = e.content) || void 0 === n || null === (t = n.includes) || void 0 === t ? void 0 : t.call(n, f.timestamp)
                                            }))) return;
                                        var v = h.concat(n);
                                        a && h.some((function(e) {
                                            return (null === e || void 0 === e ? void 0 : e.seqNo2) > a
                                        })) && (v = v.sort((function(e, n) {
                                            return e.seqNo2 - n.seqNo2
                                        }))), e.chat.objectAssign({
                                            groupMessages: (0, ue.A)((0, se.A)({}, u), (0, ae.A)({}, o, (0, ue.A)((0, se.A)({}, g), {
                                                msgs: v
                                            })))
                                        })
                                    }
                                } catch (C) {
                                    he.Ay.showToast({
                                        title: JSON.stringify(C),
                                        icon: "error",
                                        duration: 2e3
                                    })
                                }
                                try {
                                    if (s && (null === l || void 0 === l ? void 0 : l.hasOwnProperty(s)) && (!le.lq || le.lq && s === d)) {
                                        var m, y = l[s],
                                            b = y.msgs;
                                        if (s === d) null === e || void 0 === e || null === (m = e.chat) || void 0 === m || m.sendChannelReadAckMessage(n);
                                        if ((null === n || void 0 === n ? void 0 : n.msgId) && -1 !== b.indexOf((function(e) {
                                                return (null === e || void 0 === e ? void 0 : e.msgId) === (null === n || void 0 === n ? void 0 : n.msgId)
                                            }))) return;
                                        if (n.msgType === Me.Wr.CHANNEL_RED_PACKET) {
                                            var A = (Array.isArray(null === Re || void 0 === Re ? void 0 : Re[s]) ? null === Re || void 0 === Re ? void 0 : Re[s] : []).concat(n);
                                            Re[s] = A
                                        }
                                        if ((null === n || void 0 === n ? void 0 : n.senderId) === p || n.self) {
                                            var I = b.concat(n),
                                                M = Se(I);
                                            return void e.chat.objectAssign({
                                                channelMessages: (0, ue.A)((0, se.A)({}, l), (0, ae.A)({}, s, (0, ue.A)((0, se.A)({}, y), {
                                                    msgs: M
                                                })))
                                            })
                                        }
                                        var x = (Array.isArray(null === Ne || void 0 === Ne ? void 0 : Ne[s]) ? null === Ne || void 0 === Ne ? void 0 : Ne[s] : []).concat(n);
                                        Ne[s] = x, Le || (Le = setTimeout((function() {
                                            var n;
                                            null === e || void 0 === e || null === (n = e.chat) || void 0 === n || n.batchUpdateChannelMessages()
                                        }), 1e3))
                                    }
                                } catch (k) {
                                    he.Ay.showToast({
                                        title: JSON.stringify(k),
                                        icon: "error",
                                        duration: 2e3
                                    })
                                }
                            },
                            batchUpdateChannelMessages: function(n, t) {
                                var r = t.chat;
                                return (0, ie.A)(a().mark((function n() {
                                    var t, o;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                try {
                                                    t = r.groupUserBaseInfo, o = Ne, Ne = {}, "object" === typeof o && Object.keys(o).forEach((function(n) {
                                                        var r = null === o || void 0 === o ? void 0 : o[n];
                                                        if (Array.isArray(r) && r.length > 0) {
                                                            e.chat.updateChannelMessages({
                                                                curChannelMsgs: r,
                                                                channelId: n
                                                            });
                                                            var i = {
                                                                msgId: r.map((function(e) {
                                                                    return e.msgId
                                                                })).join(","),
                                                                channel_id: n,
                                                                timestamp: (new Date).getTime(),
                                                                user_id: (null === t || void 0 === t ? void 0 : t.id) || "",
                                                                isMiniApp: le.lq || !1
                                                            };
                                                            (0, ye.$3)("group-service-msg-read", {
                                                                extraInfo: le.lq ? JSON.stringify(i) : i
                                                            })
                                                        }
                                                    }))
                                                } catch (Bn) {
                                                    console.log(Bn)
                                                } finally {
                                                    clearTimeout(Le), Le = null
                                                }
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            batchFetchChannelFileDictionary: function(n) {
                                return (0, ie.A)(a().mark((function t() {
                                    var r;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (Array.isArray(null === n || void 0 === n ? void 0 : n.msgIds) && (null === n || void 0 === n ? void 0 : n.channelId)) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                if (!Array.isArray(null === n || void 0 === n ? void 0 : n.msgIds) || 0 !== (null === n || void 0 === n ? void 0 : n.msgIds.length)) {
                                                    t.next = 4;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 4:
                                                try {
                                                    r = (0, v.A)(new Set(null === n || void 0 === n ? void 0 : n.msgIds)), (0, we.O6)(r, 20).forEach(function() {
                                                        var t = (0, ie.A)(a().mark((function t(r) {
                                                            var o;
                                                            return a().wrap((function(t) {
                                                                for (;;) switch (t.prev = t.next) {
                                                                    case 0:
                                                                        return t.next = 3, null === e || void 0 === e || null === (o = e.chat) || void 0 === o ? void 0 : o.fetchChannelFileDictionary({
                                                                            msgIds: r,
                                                                            channelId: null === n || void 0 === n ? void 0 : n.channelId
                                                                        });
                                                                    case 3:
                                                                    case "end":
                                                                        return t.stop()
                                                                }
                                                            }), t)
                                                        })));
                                                        return function(e) {
                                                            return t.apply(this, arguments)
                                                        }
                                                    }())
                                                } catch (Bn) {
                                                    console.log(Bn)
                                                }
                                            case 5:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            setMuteStatusById: function(n, t) {
                                try {
                                    var r = (null === t || void 0 === t ? void 0 : t.chat) || {},
                                        o = r.channelGroups,
                                        i = r.chatGroups,
                                        a = n || {},
                                        s = a.channelId,
                                        u = a.groupId,
                                        c = a.status;
                                    if (s) {
                                        var l = o.findIndex((function(e) {
                                            return "".concat(e.id) === "".concat(s)
                                        }));
                                        if (-1 !== l) {
                                            var d = (0, v.A)(o);
                                            d[l] = (0, ue.A)((0, se.A)({}, d[l]), {
                                                disturb: c
                                            }), e.chat.objectAssign({
                                                channelGroups: d
                                            })
                                        }
                                    }
                                    if (u) {
                                        var p = i.findIndex((function(e) {
                                            return "".concat(e.groupId) === "".concat(u)
                                        }));
                                        if (-1 !== p) {
                                            var f = (0, v.A)(i);
                                            f[p] = (0, ue.A)((0, se.A)({}, f[p]), {
                                                muted: c
                                            }), e.chat.objectAssign({
                                                chatGroups: f
                                            })
                                        }
                                    }
                                } catch (g) {
                                    console.error("error in setMuteStatusById", g)
                                }
                            },
                            fetchChannelFileDictionary: function(n, t) {
                                var r = t.chat;
                                return (0, ie.A)(a().mark((function t() {
                                    var o, i, s, u, c, l, d, p;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (o = r.channelFileDictionary, i = r.channelFileCurrentFetchingIds, Array.isArray(null === n || void 0 === n ? void 0 : n.msgIds) && (null === n || void 0 === n ? void 0 : n.channelId)) {
                                                    t.next = 3;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 3:
                                                if (!Array.isArray(null === n || void 0 === n ? void 0 : n.msgIds) || 0 !== (null === n || void 0 === n ? void 0 : n.msgIds.length)) {
                                                    t.next = 5;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 5:
                                                if (t.prev = 5, 0 !== (s = n.msgIds.filter((function(e) {
                                                        return !(null === o || void 0 === o ? void 0 : o[e])
                                                    }))).length) {
                                                    t.next = 9;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 9:
                                                if (0 !== (u = s.filter((function(e) {
                                                        return !i.includes(e)
                                                    }))).length) {
                                                    t.next = 12;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 12:
                                                return e.chat.objectAssign({
                                                    channelFileCurrentFetchingIds: (0, v.A)(i).concat((0, v.A)(u))
                                                }), t.next = 15, (0, xe.V5)({
                                                    channelId: null === n || void 0 === n ? void 0 : n.channelId,
                                                    msgIds: u
                                                });
                                            case 15:
                                                c = t.sent, l = (null === c || void 0 === c ? void 0 : c.data) || {}, (null === c || void 0 === c ? void 0 : c.success) && l && Array.isArray(null === l || void 0 === l ? void 0 : l.msgUrls) && (d = l.msgUrls, p = {}, d.forEach((function(e) {
                                                    (null === e || void 0 === e ? void 0 : e.msgId) && (null === e || void 0 === e ? void 0 : e.url) && (p[e.msgId] = e.url)
                                                })), e.chat.objectChannelFileDictionaryAssign({
                                                    channelFileDictionary: (0, se.A)({}, p),
                                                    channelFileCurrentFetchingIds: i.filter((function(e) {
                                                        return !u.includes(e)
                                                    }))
                                                })), t.next = 23;
                                                break;
                                            case 20:
                                                t.prev = 20, t.t0 = t.catch(5), console.error("fetchChannelFileDictionary error", t.t0);
                                            case 23:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [5, 20]
                                    ])
                                })))()
                            },
                            onChatMessage: function(n, t) {
                                var r = t.chat;
                                try {
                                    var o, i = r.uid,
                                        a = r.channelGroups,
                                        s = r.currentChannelGroupId,
                                        u = r.channelMessages,
                                        c = r.isDisplayTempChannelMsgList,
                                        l = r.groupUserBaseInfo,
                                        d = r.chatGroups,
                                        p = r.groupMessages,
                                        f = r.currentServiceGroupId,
                                        g = n.groupId,
                                        h = n.content,
                                        m = n.msgId,
                                        y = n.channelId,
                                        b = (n.senderId, n.msgType);
                                    null === e || void 0 === e || null === (o = e.chat) || void 0 === o || o.updateLargeGroupAvatarMap({
                                        data: [n],
                                        forceUpdate: !0
                                    });
                                    var A = (null === n || void 0 === n ? void 0 : n.senderId) === i;
                                    if (y && n.msgType) {
                                        var I, M, x, C, k, w = a.findIndex((function(e) {
                                                return "".concat(e.id) === "".concat(y)
                                            })),
                                            E = w < 0;
                                        if (!E && !Me.C9.includes(n.msgType)) {
                                            var _, S, T = (null === n || void 0 === n ? void 0 : n.senderId) === i,
                                                O = (0, v.A)(a);
                                            O[w] = (0, ue.A)((0, se.A)({}, O[w]), {
                                                lastMsg: {
                                                    content: (null === n || void 0 === n ? void 0 : n.text) || "",
                                                    msgType: n.msgType,
                                                    createTime: n.createTime,
                                                    mentionUserNameMap: n.mentionUserNameMap,
                                                    msgId: n.msgId
                                                },
                                                unreadCount: s === y || T ? 0 : (null === (_ = O[w]) || void 0 === _ ? void 0 : _.unreadCount) + 1
                                            }), e.chat.objectAssign({
                                                channelGroups: O
                                            }), (null === (S = O[w]) || void 0 === S ? void 0 : S.disturb) || T || !(0, Ae.iB)() || (0, Ce.R)()
                                        }
                                        if (n.msgType === Me.Wr.CHANNEL_TEXT || n.msgType === Me.Wr.CHANNEL_REPLY && n.text && !n.file) {
                                            var P, L = (null === n || void 0 === n ? void 0 : n.senderId) === i;
                                            if (E) null === e || void 0 === e || null === (P = e.chat) || void 0 === P || P.getChannelList();
                                            else if (n.identity) {
                                                if (u[y] && Array.isArray(u[y].msgs)) {
                                                    var N, R, D;
                                                    if (u[y].msgs.some((function(e) {
                                                            return e.identity === n.identity
                                                        }))) null === e || void 0 === e || null === (N = e.chat) || void 0 === N || N.changeGroupMessageStatus((0, ue.A)((0, se.A)({}, n), {
                                                        status: Ae.qp.done
                                                    })), null === e || void 0 === e || null === (R = e.chat) || void 0 === R || R.sendChannelReadAckMessage(n);
                                                    else null === e || void 0 === e || null === (D = e.chat) || void 0 === D || D.pushGroupMessage(n);
                                                    if (L) {
                                                        var F = {
                                                            msgId: m,
                                                            channel_id: y,
                                                            timestamp: (null === n || void 0 === n ? void 0 : n.createTime) || "",
                                                            user_id: (null === l || void 0 === l ? void 0 : l.id) || "",
                                                            isMiniApp: le.lq || !1
                                                        };
                                                        (0, ye.$3)("group-service-msg-send", {
                                                            extraInfo: le.lq ? JSON.stringify(F) : F
                                                        })
                                                    }
                                                }
                                            } else {
                                                var B;
                                                null === e || void 0 === e || null === (B = e.chat) || void 0 === B || B.pushGroupMessage(n)
                                            }
                                            if (L && n.msgType === Me.Wr.CHANNEL_REPLY && (null === n || void 0 === n ? void 0 : n.refMsg)) {
                                                var G, j = {
                                                    msgId: m,
                                                    responseMsgId: null === n || void 0 === n || null === (G = n.refMsg) || void 0 === G ? void 0 : G.msgId,
                                                    channelId: y,
                                                    timestamp: (null === n || void 0 === n ? void 0 : n.createTime) || "",
                                                    user_id: (null === l || void 0 === l ? void 0 : l.id) || "",
                                                    isMiniApp: le.lq || !1
                                                };
                                                (0, ye.$3)("group-service-msg-response", {
                                                    extraInfo: le.lq ? JSON.stringify(j) : j
                                                })
                                            }
                                        }
                                        if (n.msgType === Me.Wr.CHANNEL_FILE || n.msgType === Me.Wr.CHANNEL_REPLY && n.file) {
                                            var H = (null === n || void 0 === n ? void 0 : n.senderId) === i;
                                            if (E) {
                                                var U;
                                                null === e || void 0 === e || null === (U = e.chat) || void 0 === U || U.getChatGroupList(!0)
                                            } else {
                                                if (!H) {
                                                    var q;
                                                    if ((null === n || void 0 === n ? void 0 : n.key) && u[y] && Array.isArray(u[y].msgs)) null === e || void 0 === e || null === (q = e.chat) || void 0 === q || q.pushGroupMessage(n);
                                                    return
                                                }
                                                if (((null === n || void 0 === n ? void 0 : n.key) || n.msgType === Me.Wr.CHANNEL_REPLY) && u[y] && Array.isArray(u[y].msgs)) {
                                                    var W = u[y].msgs.some((function(e) {
                                                        var t;
                                                        return e.identity === ((null === n || void 0 === n ? void 0 : n.key) || (null === n || void 0 === n || null === (t = n.file) || void 0 === t ? void 0 : t.key)) || (null === e || void 0 === e ? void 0 : e.identity) === (null === n || void 0 === n ? void 0 : n.identity)
                                                    }));
                                                    if (W) {
                                                        var V, K, J, z, $;
                                                        if (n.msgType === Me.Wr.CHANNEL_REPLY) null === e || void 0 === e || null === (K = e.chat) || void 0 === K || K.changeGroupMessageStatus((0, ue.A)((0, se.A)({}, n), {
                                                            identity: (null === n || void 0 === n || null === (J = n.file) || void 0 === J ? void 0 : J.key) || (null === n || void 0 === n ? void 0 : n.identity),
                                                            status: Ae.qp.deleted,
                                                            channelId: n.channelId
                                                        })), null === e || void 0 === e || null === (z = e.chat) || void 0 === z || z.pushGroupMessage(n);
                                                        else null === e || void 0 === e || null === ($ = e.chat) || void 0 === $ || $.changeGroupMessageStatus((0, ue.A)((0, se.A)({}, n), {
                                                            status: Ae.qp.done,
                                                            identity: (null === n || void 0 === n ? void 0 : n.identity) || (null === n || void 0 === n ? void 0 : n.key)
                                                        }));
                                                        null === e || void 0 === e || null === (V = e.chat) || void 0 === V || V.sendChannelReadAckMessage(n)
                                                    } else {
                                                        var Y;
                                                        null === e || void 0 === e || null === (Y = e.chat) || void 0 === Y || Y.pushGroupMessage(n)
                                                    }
                                                }
                                            }
                                            if (H && n.msgType === Me.Wr.CHANNEL_REPLY && (null === n || void 0 === n ? void 0 : n.refMsg)) {
                                                var X, Q = {
                                                    msgId: m,
                                                    responseMsgId: null === n || void 0 === n || null === (X = n.refMsg) || void 0 === X ? void 0 : X.msgId,
                                                    channelId: y,
                                                    timestamp: (null === n || void 0 === n ? void 0 : n.createTime) || "",
                                                    user_id: (null === l || void 0 === l ? void 0 : l.id) || "",
                                                    isMiniApp: le.lq || !1
                                                };
                                                (0, ye.$3)("group-service-msg-response", {
                                                    extraInfo: le.lq ? JSON.stringify(Q) : Q
                                                })
                                            }
                                        }
                                        if (b === Me.Wr.CHANNEL_DELETE_MSG) null === e || void 0 === e || null === (I = e.chat) || void 0 === I || I.changeGroupMessageStatus({
                                            channelId: n.channelId,
                                            msgId: n.deleteMsgId,
                                            status: Ae.qp.deleted
                                        }), (null === r || void 0 === r ? void 0 : r.deletedChannelMsgs.some((function(e) {
                                            return e.id === n.msgId
                                        }))) || e.chat.setDeletedChannelMsgs({
                                            msgId: n.deleteMsgId,
                                            channelId: n.channelId
                                        }), null === e || void 0 === e || null === (M = e.chat) || void 0 === M || M.updateChannelLastMsgByDeleteMsgId({
                                            msgId: n.deleteMsgId,
                                            channelId: n.channelId
                                        }), e.preview.handleChannelDeleteMsg({
                                            msgId: n.deleteMsgId
                                        });
                                        if (n.msgType === Me.Wr.CHANNEL_RATE_LIMIT && (null === n || void 0 === n ? void 0 : n.channelId) === s && e.chat.setLargeGroupRateLimitModalVisible(!0), n.msgType === Me.Wr.CHANNEL_PIN_MSG) null === e || void 0 === e || null === (x = e.chat) || void 0 === x || x.pushGroupMessage(n);
                                        if (n.msgType === Me.Wr.CHANNEL_UNPIN_MSG && e.preview.handleChannelDeleteMsg({
                                                msgId: n.pinMsgId
                                            }), n.msgType === Me.Wr.CHANNEL_RED_PACKET)
                                            if (E) null === e || void 0 === e || null === (C = e.chat) || void 0 === C || C.getChannelList();
                                            else if (n.orderId && u[y] && Array.isArray(u[y].msgs)) {
                                            var Z, ee, ne, te = (0, ue.A)((0, se.A)({}, n), {
                                                identity: "".concat(n.orderId)
                                            });
                                            if (u[y].msgs.some((function(e) {
                                                    return "".concat(null === e || void 0 === e ? void 0 : e.orderId) === "".concat(null === te || void 0 === te ? void 0 : te.orderId)
                                                }))) null === e || void 0 === e || null === (Z = e.chat) || void 0 === Z || Z.changeGroupMessageStatus((0, ue.A)((0, se.A)({}, te), {
                                                status: Ae.qp.done
                                            })), null === e || void 0 === e || null === (ee = e.chat) || void 0 === ee || ee.sendChannelReadAckMessage(te);
                                            else null === e || void 0 === e || null === (ne = e.chat) || void 0 === ne || ne.pushGroupMessage(te), !c && s === y && ((null === n || void 0 === n ? void 0 : n.senderId) === i || null === r || void 0 === r || r.scrollToBottomBtnVisible)
                                        }
                                        if (n.msgType === Me.Wr.CHANNEL_RED_PACKET_RECEIVED)
                                            if (E) null === e || void 0 === e || null === (k = e.chat) || void 0 === k || k.getChannelList();
                                            else if (n.orderId && u[y] && Array.isArray(u[y].msgs)) {
                                            var re, oe, ie, ae, ce = (0, ue.A)((0, se.A)({}, n), {
                                                identity: "".concat(n.orderId)
                                            });
                                            if (u[y].msgs.some((function(e) {
                                                    return "".concat(null === e || void 0 === e ? void 0 : e.msgId) === "".concat(null === ce || void 0 === ce ? void 0 : ce.msgId)
                                                }))) null === e || void 0 === e || null === (re = e.chat) || void 0 === re || re.changeGroupMessageStatus((0, ue.A)((0, se.A)({}, ce), {
                                                status: Ae.qp.done
                                            })), null === e || void 0 === e || null === (oe = e.chat) || void 0 === oe || oe.sendChannelReadAckMessage(ce);
                                            else if (null === e || void 0 === e || null === (ie = e.chat) || void 0 === ie || ie.pushGroupMessage(ce), null === ce || void 0 === ce ? void 0 : ce.finished) null === e || void 0 === e || null === (ae = e.chat) || void 0 === ae || ae.changeRedMessageStatus((0, ue.A)((0, se.A)({}, ce), {
                                                status: "FULLY_CLAIMED"
                                            }))
                                        }
                                        if ([Me.Wr.CHANNEL_PIN_MSG, Me.Wr.CHANNEL_UNPIN_MSG, Me.Wr.CHANNEL_DELETE_MSG].includes(b) && e.pin.getChannelPinnedMsgs(null === n || void 0 === n ? void 0 : n.channelId), (null === n || void 0 === n ? void 0 : n.mentionUserNameMap) && Object.keys(null === n || void 0 === n ? void 0 : n.mentionUserNameMap).length && !A) {
                                            var de, pe, fe = (null === (de = Object.keys((null === n || void 0 === n ? void 0 : n.mentionUserNameMap) || [])) || void 0 === de || null === (pe = de.map) || void 0 === pe ? void 0 : pe.call(de, (function(e) {
                                                    return String(e)
                                                }))) || [],
                                                ge = {
                                                    msgId: n.msgId,
                                                    mentionAll: !1,
                                                    expireTime: Date.now() + Ie.Lu
                                                },
                                                ve = fe.includes(String(i)),
                                                be = n.mentionAll && (null === n || void 0 === n ? void 0 : n.mentionUserNameMap[String(Me.sI)]);
                                            be && (ge.mentionAll = !0), (ve || be) && function(t) {
                                                var r = (0, Ie.x9)(n.channelId, [t]);
                                                e.mention.setUnreadMentionMsgChannelMap(r), Ie.Wt.set(r)
                                            }(ge)
                                        }
                                        return
                                    }
                                    var xe, ke = {};
                                    try {
                                        ke = JSON.parse(h)
                                    } catch (Bn) {}
                                    if (n.msgType === Me.Wr.GROUP_FILE || n.msgType === Me.Wr.GROUP_TEXT) {
                                        var we = d.find((function(e) {
                                                return "".concat(e.groupId) === "".concat(g)
                                            })),
                                            Ee = we && (null === we || void 0 === we ? void 0 : we.userWeaId) === (null === ke || void 0 === ke ? void 0 : ke.src),
                                            _e = d.findIndex((function(e) {
                                                return "".concat(e.groupId) === "".concat(n.groupId)
                                            }));
                                        if (-1 !== _e) try {
                                            var Se, Te = "";
                                            if (n.content) {
                                                var Oe, Pe, Le = JSON.parse(n.content),
                                                    Ne = null === d || void 0 === d ? void 0 : d[_e];
                                                if (null === Ne || void 0 === Ne || null === (Oe = Ne.chatGroupMemberTable) || void 0 === Oe ? void 0 : Oe[null === Le || void 0 === Le ? void 0 : Le.src]) Te = null === (Pe = Ne.chatGroupMemberTable[null === Le || void 0 === Le ? void 0 : Le.src]) || void 0 === Pe ? void 0 : Pe.nickname
                                            }
                                            var Re = (0, ue.A)((0, se.A)({}, d[_e]), {
                                                    lastMsgTime: n.createTime,
                                                    lastMsgType: n.msgType,
                                                    lastMsgSender: Te,
                                                    lastMsgPreview: n.msgType === Me.Wr.GROUP_TEXT ? n.preview : "i18n-file",
                                                    unreadCount: f === g || Ee ? 0 : (null === (Se = d[_e]) || void 0 === Se ? void 0 : Se.unreadCount) + 1
                                                }),
                                                De = (0, v.A)(d);
                                            De[_e] = Re, e.chat.objectAssign({
                                                chatGroups: De.sort((function(e, n) {
                                                    return n.lastMsgTime > e.lastMsgTime ? 1 : -1
                                                }))
                                            })
                                        } catch (_n) {
                                            console.log(_n)
                                        }
                                    }
                                    if (n.msgType === Me.Wr.GROUP_TEXT) {
                                        var Fe = n.groupId,
                                            Be = (n.content, n.msgId),
                                            Ge = d.find((function(e) {
                                                return "".concat(e.groupId) === "".concat(Fe)
                                            })),
                                            je = Ge && (null === Ge || void 0 === Ge ? void 0 : Ge.userWeaId) === (null === ke || void 0 === ke ? void 0 : ke.src),
                                            He = d.findIndex((function(e) {
                                                return "".concat(e.groupId) === "".concat(Fe)
                                            })) < 0;
                                        if (He) {
                                            var Ue;
                                            null === e || void 0 === e || null === (Ue = e.chat) || void 0 === Ue || Ue.getChatGroupList(!0)
                                        } else {
                                            var qe;
                                            if (!((null === Ge || void 0 === Ge ? void 0 : Ge.chatGroupMemberTable) || {})["".concat(null === ke || void 0 === ke ? void 0 : ke.src)]) null === e || void 0 === e || null === (qe = e.chat) || void 0 === qe || qe.getChatGroupList(!0);
                                            if (n.identity) {
                                                var We, Ve, Ke, Je;
                                                if (p[Fe] && Array.isArray(p[Fe].msgs))
                                                    if (p[Fe].msgs.some((function(e) {
                                                            return e.identity === n.identity
                                                        }))) null === e || void 0 === e || null === (Ve = e.chat) || void 0 === Ve || Ve.changeGroupMessageStatus((0, ue.A)((0, se.A)({}, n), {
                                                        status: Ae.qp.done
                                                    }));
                                                    else null === e || void 0 === e || null === (Ke = e.chat) || void 0 === Ke || Ke.pushGroupMessage(n), null === e || void 0 === e || null === (Je = e.chat) || void 0 === Je || Je.scrollToMessage(""), setTimeout((function() {
                                                        var n;
                                                        null === e || void 0 === e || null === (n = e.chat) || void 0 === n || n.scrollToMessage("".concat(Me.qH, "-").concat(f))
                                                    }), 500);
                                                var ze = {
                                                    msgId: Be,
                                                    group_id: Fe,
                                                    timestamp: (null === ke || void 0 === ke ? void 0 : ke.timestamp) || "",
                                                    user_id: (null === l || void 0 === l ? void 0 : l.id) || "",
                                                    isMiniApp: le.lq || !1
                                                };
                                                if ((0, ye.$3)("group-service-msg-send", {
                                                        extraInfo: le.lq ? JSON.stringify(ze) : ze
                                                    }), null === ke || void 0 === ke || null === (We = ke.msg) || void 0 === We ? void 0 : We.quote) {
                                                    var $e, Ye = {
                                                        msgId: Be,
                                                        responseMsgId: (null === ke || void 0 === ke || null === ($e = ke.msg) || void 0 === $e ? void 0 : $e.quote).haodeskRefId,
                                                        group_id: Fe,
                                                        timestamp: (null === ke || void 0 === ke ? void 0 : ke.timestamp) || "",
                                                        user_id: (null === l || void 0 === l ? void 0 : l.id) || "",
                                                        isMiniApp: le.lq || !1
                                                    };
                                                    (0, ye.$3)("group-service-msg-response", {
                                                        extraInfo: le.lq ? JSON.stringify(Ye) : Ye
                                                    })
                                                }
                                            } else {
                                                var Xe;
                                                null === e || void 0 === e || null === (Xe = e.chat) || void 0 === Xe || Xe.pushGroupMessage(n)
                                            }
                                        }
                                        je || (null === Ge || void 0 === Ge ? void 0 : Ge.muted) || He || le.lq || !(0, Ae.iB)() || (0, Ce.R)(), Be && me.x.sendMsg(JSON.stringify({
                                            msgType: "GROUP_PUSH_ACK",
                                            groupId: Fe,
                                            msgId: Be
                                        }))
                                    }
                                    if (n.msgType === Me.Wr.GROUP_FILE) {
                                        var Qe = d.find((function(e) {
                                                return "".concat(e.groupId) === "".concat(g)
                                            })),
                                            Ze = Qe && (null === Qe || void 0 === Qe ? void 0 : Qe.userWeaId) === (null === ke || void 0 === ke ? void 0 : ke.src),
                                            en = d.findIndex((function(e) {
                                                return "".concat(e.groupId) === "".concat(g)
                                            })) < 0;
                                        if (en) {
                                            var nn;
                                            null === e || void 0 === e || null === (nn = e.chat) || void 0 === nn || nn.getChatGroupList(!0)
                                        } else {
                                            var tn, rn, on, an, sn, un, cn, ln;
                                            if (!((null === Qe || void 0 === Qe ? void 0 : Qe.chatGroupMemberTable) || {})["".concat(null === ke || void 0 === ke ? void 0 : ke.src)]) null === e || void 0 === e || null === (on = e.chat) || void 0 === on || on.getChatGroupList(!0);
                                            if (null === ke || void 0 === ke || null === (tn = ke.msg) || void 0 === tn || null === (rn = tn.haodeskFile) || void 0 === rn ? void 0 : rn.success)
                                                if (Ze) {
                                                    var dn, pn, fn, gn, hn;
                                                    if (p[g] && Array.isArray(p[g].msgs)) {
                                                        var vn, mn, yn = p[g].msgs;
                                                        if (ke)
                                                            if (null === ke || void 0 === ke || null === (vn = ke.msg) || void 0 === vn || null === (mn = vn.haodeskFile) || void 0 === mn ? void 0 : mn.objKey) {
                                                                var bn, An, In, Mn = null === ke || void 0 === ke || null === (bn = ke.msg) || void 0 === bn || null === (An = bn.haodeskFile) || void 0 === An ? void 0 : An.objKey;
                                                                if (!yn.some((function(e) {
                                                                        return !!(null === e || void 0 === e ? void 0 : e.identity) && Mn === (null === e || void 0 === e ? void 0 : e.identity)
                                                                    }))) null === e || void 0 === e || null === (In = e.chat) || void 0 === In || In.pushGroupMessage(n)
                                                            }
                                                    }
                                                    null === e || void 0 === e || null === (dn = e.chat) || void 0 === dn || dn.changeGroupMessageStatus((0, ue.A)((0, se.A)({}, n), {
                                                        status: Ae.qp.done,
                                                        identity: (null === ke || void 0 === ke || null === (pn = ke.msg) || void 0 === pn || null === (fn = pn.haodeskFile) || void 0 === fn ? void 0 : fn.objKey) || null
                                                    })), null === e || void 0 === e || null === (gn = e.chat) || void 0 === gn || gn.scrollToMessage(""), setTimeout((function() {
                                                        var n;
                                                        null === e || void 0 === e || null === (n = e.chat) || void 0 === n || n.scrollToMessage("".concat(Me.qH, "-").concat(f))
                                                    }), 500);
                                                    var xn = {
                                                        msgId: m,
                                                        group_id: g,
                                                        timestamp: (null === ke || void 0 === ke ? void 0 : ke.timestamp) || "",
                                                        user_id: (null === l || void 0 === l ? void 0 : l.id) || "",
                                                        isMiniApp: le.lq || !1
                                                    };
                                                    if ((0, ye.$3)("group-service-msg-send", {
                                                            extraInfo: le.lq ? JSON.stringify(xn) : xn
                                                        }), null === ke || void 0 === ke || null === (hn = ke.msg) || void 0 === hn ? void 0 : hn.quote) {
                                                        var Cn, kn = {
                                                            msgId: m,
                                                            responseMsgId: (null === (Cn = ke.msg) || void 0 === Cn ? void 0 : Cn.quote).haodeskRefId,
                                                            group_id: g,
                                                            timestamp: (null === ke || void 0 === ke ? void 0 : ke.timestamp) || "",
                                                            user_id: (null === l || void 0 === l ? void 0 : l.id) || "",
                                                            isMiniApp: le.lq || !1
                                                        };
                                                        (0, ye.$3)("group-service-msg-response", {
                                                            extraInfo: le.lq ? JSON.stringify(kn) : kn
                                                        })
                                                    }
                                                } else {
                                                    var wn;
                                                    null === e || void 0 === e || null === (wn = e.chat) || void 0 === wn || wn.pushGroupMessage(n), (null === Qe || void 0 === Qe ? void 0 : Qe.muted) || en || le.lq || !(0, Ae.iB)() || (0, Ce.R)()
                                                }
                                            else if (null === e || void 0 === e || null === (an = e.chat) || void 0 === an || an.changeGroupMessageStatus((0, ue.A)((0, se.A)({}, n), {
                                                    status: Ae.qp.failed,
                                                    identity: (null === ke || void 0 === ke || null === (sn = ke.msg) || void 0 === sn || null === (un = sn.haodeskFile) || void 0 === un ? void 0 : un.objKey) || null
                                                })), null === ke || void 0 === ke || null === (cn = ke.msg) || void 0 === cn ? void 0 : cn.body) he.Ay.showToast({
                                                title: null === ke || void 0 === ke || null === (ln = ke.msg) || void 0 === ln ? void 0 : ln.body,
                                                icon: "error",
                                                duration: 2e3
                                            })
                                        }
                                        m && me.x.sendMsg(JSON.stringify({
                                            msgType: "GROUP_PUSH_ACK",
                                            groupId: g,
                                            msgId: m
                                        }))
                                    }
                                    if ("GROUP_CHANGE" === n.msgType) null === e || void 0 === e || null === (xe = e.chat) || void 0 === xe || xe.getChatGroupList(!0);
                                    if (n.msgType !== Me.Wr.CHANNEL_TEXT && n.msgType !== Me.Wr.CHANNEL_FILE && (null === n || void 0 === n ? void 0 : n.seqNo2) && "number" === typeof(null === n || void 0 === n ? void 0 : n.seqNo2)) {
                                        var En = r.serviceGroupLastSeqNo2;
                                        null === En || "number" === typeof En && (null === n || void 0 === n ? void 0 : n.seqNo2) - En === 1 ? e.chat.objectAssign({
                                            serviceGroupLastSeqNo2: null === n || void 0 === n ? void 0 : n.seqNo2
                                        }) : e.chat.objectAssign({
                                            timelineInterval: 1e3
                                        })
                                    }
                                } catch (Sn) {
                                    console.log("error in onChatMessage", Sn)
                                }
                            },
                            getChannelGroupMsg: function(n, t) {
                                var r = t.chat;
                                return (0, ie.A)(a().mark((function t() {
                                    var o, i, s, u, c, l, d, p, f, g, h, m, y, b, A, I, M, x, C, k, w, E, _, S;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, s = (i = n || {}).channelId, u = i.isRestData, c = i.lastMsgId, l = i.callback, d = i.errorCallback, p = r.channelMessages, f = r.isDisplayTempChannelMsgList, g = r.tempChannelMsgList, h = [], m = !0, y = n.lastMsgId, b = function() {
                                                    var e = (0, ie.A)(a().mark((function e() {
                                                        var t, r, o, i, s, u, c;
                                                        return a().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    return e.prev = 0, e.next = 3, (0, xe.t8)((0, ue.A)((0, se.A)({}, n), {
                                                                        lastMsgId: y
                                                                    }));
                                                                case 3:
                                                                    if (!(t = e.sent).success) {
                                                                        e.next = 15;
                                                                        break
                                                                    }
                                                                    if (c = (null === (r = t.data) || void 0 === r ? void 0 : r.msgs) || [], m = null === (o = t.data) || void 0 === o ? void 0 : o.hasMore, y = (null === (i = t.data) || void 0 === i ? void 0 : i.lastMsgId) ? null === (s = t.data) || void 0 === s ? void 0 : s.lastMsgId : null === (u = c[c.length - 1]) || void 0 === u ? void 0 : u.msgId, !((h = h.concat(c)).length < 30 && m)) {
                                                                        e.next = 13;
                                                                        break
                                                                    }
                                                                    return e.next = 13, b();
                                                                case 13:
                                                                    e.next = 16;
                                                                    break;
                                                                case 15:
                                                                    d && d(t);
                                                                case 16:
                                                                    e.next = 22;
                                                                    break;
                                                                case 18:
                                                                    e.prev = 18, e.t0 = e.catch(0), console.error(e.t0), null === d || void 0 === d || d(e.t0);
                                                                case 22:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e, null, [
                                                            [0, 18]
                                                        ])
                                                    })));
                                                    return function() {
                                                        return e.apply(this, arguments)
                                                    }
                                                }(), t.next = 10, b();
                                            case 10:
                                                A = (0, v.A)(h).reverse(), I = u ? [] : (null === (o = p[s]) || void 0 === o ? void 0 : o.msgs) || [], u && e.chat.objectAssign({
                                                    isDisplayTempChannelMsgList: !1,
                                                    tempChannelMsgList: null
                                                }), x = [], (M = f) ? (C = (null === g || void 0 === g ? void 0 : g.msgs) || [], x = C.concat(A)) : x = (null === n || void 0 === n ? void 0 : n.lastMsgId) ? I.concat(A) : A.concat(I), x.sort((function(e, n) {
                                                    return e.msgId - n.msgId
                                                })), x = (0, _e.R3)(x), M ? e.chat.objectAssign({
                                                    tempChannelMsgList: (0, ue.A)((0, se.A)({}, g), {
                                                        msgs: x,
                                                        hasMorePrev: m
                                                    })
                                                }) : e.chat.updateChannelMessages({
                                                    curChannelMsgs: h,
                                                    channelId: s,
                                                    hasMore: m
                                                }), k = x.findIndex((function(e) {
                                                    return e.msgId === c
                                                })), l && l({
                                                    prevPosIndex: k
                                                }), h.length > 0 && (_ = h.filter((function(e) {
                                                    return "CHANNEL_FILE" === e.msgType
                                                })), S = _.map((function(e) {
                                                    return null === e || void 0 === e ? void 0 : e.msgId
                                                })), null === e || void 0 === e || null === (w = e.chat) || void 0 === w || w.updateLargeGroupAvatarMap({
                                                    data: h
                                                }), null === e || void 0 === e || null === (E = e.chat) || void 0 === E || E.batchFetchChannelFileDictionary({
                                                    msgIds: S,
                                                    channelId: s
                                                })), t.next = 28;
                                                break;
                                            case 24:
                                                t.prev = 24, t.t0 = t.catch(0), console.error("error in getChannelGroupMsg", t.t0), (null === n || void 0 === n ? void 0 : n.errorCallback) && n.errorCallback(t.t0);
                                            case 28:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 24]
                                    ])
                                })))()
                            },
                            changeGroupMessageStatus: function(n, t) {
                                var r = t.chat;
                                try {
                                    var o = n || {},
                                        i = o.groupId,
                                        a = o.identity,
                                        s = o.msgId,
                                        u = o.status,
                                        c = o.channelId,
                                        l = r.groupMessages,
                                        d = r.channelMessages;
                                    if (u === Ae.qp.done) {
                                        var p = Ae.B_.findIndex((function(e) {
                                            return e.identity === a
                                        }));
                                        if (p > -1 && (clearTimeout(Ae.B_[p].timer), Ae.B_.splice(p, 1)), l[i] || d[c]) {
                                            if (i) {
                                                var f = l[i],
                                                    g = f.msgs,
                                                    h = g.findIndex((function(e) {
                                                        var n;
                                                        return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(a)) || e.msgId === s
                                                    })),
                                                    v = g.map((function(e, t) {
                                                        return t === h ? (0, se.A)({}, n) : e
                                                    }));
                                                v = v.sort((function(e, n) {
                                                    return e.msgId - n.msgId
                                                })), h > -1 && e.chat.objectAssign({
                                                    groupMessages: (0, ue.A)((0, se.A)({}, l), (0, ae.A)({}, i, (0, ue.A)((0, se.A)({}, f), {
                                                        msgs: v
                                                    })))
                                                })
                                            }
                                            if (c) {
                                                var m = d[c],
                                                    y = m.msgs,
                                                    b = y.findIndex((function(e) {
                                                        var n;
                                                        return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(a)) || e.msgId === s
                                                    })),
                                                    A = y.map((function(e, t) {
                                                        return t === b ? (0, se.A)({}, n) : e
                                                    }));
                                                A = A.sort((function(e, n) {
                                                    return e.msgId - n.msgId
                                                })), b > -1 && e.chat.objectAssign({
                                                    channelMessages: (0, ue.A)((0, se.A)({}, d), (0, ae.A)({}, c, (0, ue.A)((0, se.A)({}, m), {
                                                        msgs: A
                                                    })))
                                                })
                                            }
                                        }
                                    }
                                    if (u === Ae.qp.deleted) {
                                        var I = Ae.B_.findIndex((function(e) {
                                            return e.identity === a
                                        }));
                                        if (I > -1 && (clearTimeout(Ae.B_[I].timer), Ae.B_.splice(I, 1)), l[i]) {
                                            var M = l[i],
                                                x = M.msgs,
                                                C = x.findIndex((function(e) {
                                                    var n;
                                                    return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(a)) || e.msgId === s
                                                }));
                                            C > -1 && e.chat.objectAssign({
                                                groupMessages: (0, ue.A)((0, se.A)({}, l), (0, ae.A)({}, i, (0, ue.A)((0, se.A)({}, M), {
                                                    msgs: x.filter((function(e, n) {
                                                        return n !== C
                                                    }))
                                                })))
                                            })
                                        }
                                        if (d[c]) {
                                            var k = d[c],
                                                w = k.msgs,
                                                E = w.findIndex((function(e) {
                                                    var n;
                                                    return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(a)) || e.msgId === s
                                                }));
                                            E > -1 && e.chat.objectAssign({
                                                channelMessages: (0, ue.A)((0, se.A)({}, d), (0, ae.A)({}, c, (0, ue.A)((0, se.A)({}, k), {
                                                    msgs: w.filter((function(e, n) {
                                                        return n !== E
                                                    }))
                                                })))
                                            })
                                        }
                                    }
                                    if (u === Ae.qp.sending) {
                                        if (l[i]) {
                                            var _ = l[i],
                                                S = _.msgs,
                                                T = S.findIndex((function(e) {
                                                    var n;
                                                    return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(a)) || e.msgId === s
                                                }));
                                            T > -1 && e.chat.objectAssign({
                                                groupMessages: (0, ue.A)((0, se.A)({}, l), (0, ae.A)({}, i, (0, ue.A)((0, se.A)({}, _), {
                                                    msgs: S.map((function(e, n) {
                                                        return n === T ? (0, ue.A)((0, se.A)({}, e), {
                                                            status: Ae.qp.sending
                                                        }) : e
                                                    }))
                                                })))
                                            })
                                        }
                                        if (d[c]) {
                                            var O = d[c],
                                                P = O.msgs,
                                                L = P.findIndex((function(e) {
                                                    var n;
                                                    return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(a)) || e.msgId === s
                                                }));
                                            L > -1 && e.chat.objectAssign({
                                                channelMessages: (0, ue.A)((0, se.A)({}, d), (0, ae.A)({}, c, (0, ue.A)((0, se.A)({}, O), {
                                                    msgs: P.map((function(e, n) {
                                                        return n === L ? (0, ue.A)((0, se.A)({}, e), {
                                                            status: Ae.qp.sending
                                                        }) : e
                                                    }))
                                                })))
                                            })
                                        }
                                    }
                                    if (u === Ae.qp.failed) {
                                        if (l[i]) {
                                            var N = l[i],
                                                R = N.msgs,
                                                D = R.findIndex((function(e) {
                                                    var n;
                                                    return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(a)) || e.msgId === s
                                                }));
                                            D > -1 && e.chat.objectAssign({
                                                groupMessages: (0, ue.A)((0, se.A)({}, l), (0, ae.A)({}, i, (0, ue.A)((0, se.A)({}, N), {
                                                    msgs: R.map((function(e, n) {
                                                        return n === D ? (0, ue.A)((0, se.A)({}, e), {
                                                            status: Ae.qp.failed
                                                        }) : e
                                                    }))
                                                })))
                                            })
                                        }
                                        if (d[c]) {
                                            var F = d[c],
                                                B = F.msgs,
                                                G = B.findIndex((function(e) {
                                                    var n;
                                                    return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(a)) || e.msgId === s
                                                }));
                                            G > -1 && e.chat.objectAssign({
                                                channelMessages: (0, ue.A)((0, se.A)({}, d), (0, ae.A)({}, c, (0, ue.A)((0, se.A)({}, F), {
                                                    msgs: B.map((function(e, n) {
                                                        return n === G ? (0, ue.A)((0, se.A)({}, e), {
                                                            status: Ae.qp.failed
                                                        }) : e
                                                    }))
                                                })))
                                            })
                                        }
                                    }
                                } catch (j) {
                                    console.error("changeGroupMessageStatus error", j)
                                }
                            },
                            sendChannelReadAckMessage: function(e, n) {
                                var t = n.chat;
                                try {
                                    var r = e || {},
                                        o = r.channelId,
                                        i = r.seqNo,
                                        a = r.force,
                                        s = r.mentionSeqNo,
                                        u = r.msgId,
                                        c = t.currentChannelGroupId;
                                    if (!o || !i || o !== c) return;
                                    var l = (0, se.A)({
                                        msgType: Me.Wr.CHANNEL_READ_ACK,
                                        channelId: o,
                                        seqNo: i,
                                        mentionSeqNo: s,
                                        msgId: u
                                    }, a && {
                                        force: a
                                    });
                                    (0, de.n)((function(e) {
                                        null === me.x || void 0 === me.x || me.x.sendMsg(JSON.stringify(e))
                                    }), 500)(l)
                                } catch (d) {
                                    console.error("error in sendChannelReadAckMessage", d)
                                }
                            },
                            sendGroupMessageAsync: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = n.callback,
                                    r = (0, ce.A)(n, ["callback"]);
                                try {
                                    var o;
                                    if (!(null === r || void 0 === r ? void 0 : r.groupId) && !(null === r || void 0 === r ? void 0 : r.channelId)) return;
                                    var i = Ae.B_.findIndex((function(e) {
                                        return e.identity === r.identity
                                    }));
                                    if (i > -1) return clearTimeout(Ae.B_[i].timer), void Ae.B_.splice(i, 1);
                                    null === me.x || void 0 === me.x || me.x.sendMsg(JSON.stringify(r));
                                    var a = setTimeout((function() {
                                        var n;
                                        null === e || void 0 === e || null === (n = e.chat) || void 0 === n || n.changeGroupMessageStatus({
                                            identity: r.identity,
                                            status: Ae.qp.failed,
                                            groupId: r.groupId,
                                            channelId: null === r || void 0 === r ? void 0 : r.channelId
                                        })
                                    }), Ae._V);
                                    Ae.B_.push({
                                        identity: r.identity,
                                        timer: a,
                                        groupId: null === r || void 0 === r ? void 0 : r.groupId,
                                        channelId: null === r || void 0 === r ? void 0 : r.channelId
                                    }), null === e || void 0 === e || null === (o = e.chat) || void 0 === o || o.pushGroupMessage(r), t && t()
                                } catch (s) {
                                    console.error("error in sendGroupMessageAsync", s)
                                }
                            },
                            removeChannelOrGroupById: function(n, t) {
                                var r = t.chat;
                                try {
                                    var o = r.chatGroups,
                                        i = r.channelGroups,
                                        a = o.filter((function(e) {
                                            return "".concat(e.groupId) !== "".concat(n)
                                        })),
                                        s = i.filter((function(e) {
                                            return "".concat(e.id) !== "".concat(n)
                                        }));
                                    e.chat.objectAssign({
                                        chatGroups: a,
                                        channelGroups: s
                                    })
                                } catch (u) {
                                    console.error("error in removeChannelOrGroupById", u)
                                }
                            },
                            updateLargeGroupMsgsFromPulling: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = n.channelId,
                                    r = n.msgs,
                                    o = (n.updateTempList, (arguments.length > 1 ? arguments[1] : void 0).chat);
                                return (0, ie.A)(a().mark((function n() {
                                    var i, s, u, c, l, d, p, f, g, h, m;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (n.prev = 0, s = o.deletedChannelMsgs, u = o.channelMessages, (c = r.filter((function(e) {
                                                        return e.msgType === Me.Wr.CHANNEL_DELETE_MSG
                                                    }))).length > 0 && c.forEach((function(n) {
                                                        var t, r, o;
                                                        (null === e || void 0 === e || null === (t = e.chat) || void 0 === t || t.changeGroupMessageStatus({
                                                            channelId: n.channelId,
                                                            msgId: n.deleteMsgId,
                                                            status: Ae.qp.deleted
                                                        }), s.some((function(e) {
                                                            return e.id === n.msgId
                                                        }))) || (null === e || void 0 === e || null === (o = e.chat) || void 0 === o || o.setDeletedChannelMsgs({
                                                            msgId: n.deleteMsgId,
                                                            channelId: n.channelId
                                                        }));
                                                        null === e || void 0 === e || null === (r = e.chat) || void 0 === r || r.updateChannelLastMsgByDeleteMsgId({
                                                            msgId: n.deleteMsgId,
                                                            channelId: n.channelId
                                                        })
                                                    })), l = (0, v.A)(r).reverse(), d = (null === (i = u[t]) || void 0 === i ? void 0 : i.msgs) || [], (p = l.concat(d)).sort((function(e, n) {
                                                        return e.msgId - n.msgId
                                                    })), p = (p = (0, _e.R3)(p)).filter((function(e) {
                                                        return e.msgType !== Me.Wr.CHANNEL_DELETE_MSG
                                                    })), e.chat.objectAssign({
                                                        channelMessages: (0, ue.A)((0, se.A)({}, u), (0, ae.A)({}, t, (0, ue.A)((0, se.A)({}, u[t]), {
                                                            msgs: p
                                                        })))
                                                    }), !((null === r || void 0 === r ? void 0 : r.length) > 0)) {
                                                    n.next = 19;
                                                    break
                                                }
                                                return h = r.filter((function(e) {
                                                    return "CHANNEL_FILE" === e.msgType
                                                })), m = h.map((function(e) {
                                                    return null === e || void 0 === e ? void 0 : e.msgId
                                                })), null === e || void 0 === e || null === (f = e.chat) || void 0 === f || f.updateLargeGroupAvatarMap({
                                                    data: r
                                                }), n.next = 19, null === e || void 0 === e || null === (g = e.chat) || void 0 === g ? void 0 : g.batchFetchChannelFileDictionary({
                                                    msgIds: m,
                                                    channelId: t
                                                });
                                            case 19:
                                                n.next = 24;
                                                break;
                                            case 21:
                                                n.prev = 21, n.t0 = n.catch(0), console.error("error in updateLargeGroupMsgsFromPulling", n.t0);
                                            case 24:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [0, 21]
                                    ])
                                })))()
                            },
                            resendGroupMessage: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                try {
                                    var t = Ae.B_.findIndex((function(e) {
                                        return e.identity === n.identity
                                    }));
                                    t > -1 && (clearTimeout(Ae.B_[t].timer), Ae.B_.splice(t, 1));
                                    var r = setTimeout((function() {
                                        var t;
                                        null === e || void 0 === e || null === (t = e.chat) || void 0 === t || t.changeGroupMessageStatus({
                                            identity: n.identity,
                                            status: Ae.qp.failed,
                                            groupId: null === n || void 0 === n ? void 0 : n.groupId,
                                            channelId: null === n || void 0 === n ? void 0 : n.channelId
                                        })
                                    }), Ae._V);
                                    Ae.B_.push({
                                        identity: n.identity,
                                        timer: r,
                                        groupId: n.groupId,
                                        channelId: null === n || void 0 === n ? void 0 : n.channelId
                                    }), null === me.x || void 0 === me.x || me.x.sendMsg(JSON.stringify(n))
                                } catch (o) {
                                    console.error("error in resendGroupMessage", o)
                                }
                            },
                            sendGroupReadAckMessage: function(n, t) {
                                var r = t.chat;
                                try {
                                    var o = n || {},
                                        i = o.groupId,
                                        a = o.msgId,
                                        s = o.content,
                                        u = r.chatGroups,
                                        c = {
                                            msgType: "GROUP_READ_ACK",
                                            groupId: i,
                                            msgId: a,
                                            content: s
                                        };
                                    null === me.x || void 0 === me.x || me.x.sendMsg(JSON.stringify(c));
                                    var l = u.findIndex((function(e) {
                                            return "".concat(e.groupId) === "".concat(i)
                                        })),
                                        d = (0, v.A)(u);
                                    d[l] = (0, ue.A)((0, se.A)({}, d[l]), {
                                        readAckId: a,
                                        unreadCount: 0
                                    }), e.chat.objectAssign({
                                        chatGroups: d
                                    })
                                } catch (Bn) {
                                    console.log("sendGroupReadAckMessage error", Bn)
                                }
                            },
                            resetChatGroupMsgById: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = (arguments.length > 1 ? arguments[1] : void 0).chat;
                                try {
                                    var r = n || {
                                            isChannel: !1
                                        },
                                        o = r.id,
                                        i = r.isChannel,
                                        a = void 0 !== i && i,
                                        s = t.channelMessages,
                                        u = t.groupMessages;
                                    a && s[o] && e.chat.objectAssign({
                                        channelMessages: (0, ue.A)((0, se.A)({}, s), (0, ae.A)({}, o, (0, ue.A)((0, se.A)({}, s[o]), {
                                            msgs: []
                                        })))
                                    }), !a && u[o] && e.chat.objectAssign({
                                        groupMessages: (0, ue.A)((0, se.A)({}, u), (0, ae.A)({}, o, (0, ue.A)((0, se.A)({}, u[o]), {
                                            msgs: []
                                        })))
                                    })
                                } catch (c) {
                                    console.error("error in resetChatGroupMsgById", c)
                                }
                            },
                            resetUnreadCount: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = (arguments.length > 1 ? arguments[1] : void 0).chat,
                                    r = n || {},
                                    o = r.channelId,
                                    i = void 0 === o ? void 0 : o,
                                    a = r.groupId,
                                    s = void 0 === a ? void 0 : a,
                                    u = r.lastMsg,
                                    c = void 0 === u ? void 0 : u,
                                    l = t.channelGroups,
                                    d = t.chatGroups;
                                try {
                                    if (i) {
                                        var p = l.findIndex((function(e) {
                                                return "".concat(e.id) === "".concat(i)
                                            })),
                                            f = -1 !== p;
                                        if (f) {
                                            var g = (0, v.A)(l);
                                            g[p] = (0, se.A)((0, ue.A)((0, se.A)({}, g[p]), {
                                                unreadCount: 0
                                            }), c && {
                                                lastMsg: c
                                            }), e.chat.objectAssign({
                                                channelGroups: g
                                            })
                                        }
                                    }
                                    if (s) {
                                        var h = d.findIndex((function(e) {
                                                return "".concat(e.groupId) === "".concat(s)
                                            })),
                                            m = -1 !== h;
                                        if (m) {
                                            var y = (0, v.A)(d);
                                            y[h] = (0, ue.A)((0, se.A)({}, y[h]), {
                                                unreadCount: 0
                                            }), e.chat.objectAssign({
                                                chatGroups: y
                                            })
                                        }
                                    }
                                } catch (Bn) {
                                    console.log("resetUnreadCount error", Bn)
                                }
                            },
                            reloadChannelImage: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                (arguments.length > 1 ? arguments[1] : void 0).chat;
                                return (0, ie.A)(a().mark((function t() {
                                    var r, o, i;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                try {
                                                    o = (r = n || {}).channelId, i = r.msgId, (0, xe.V5)({
                                                        channelId: o,
                                                        msgIds: [i]
                                                    }).then((function(n) {
                                                        var t = (null === n || void 0 === n ? void 0 : n.data) || {};
                                                        if ((null === n || void 0 === n ? void 0 : n.success) && t && Array.isArray(null === t || void 0 === t ? void 0 : t.msgUrls)) {
                                                            var r = t.msgUrls,
                                                                o = {};
                                                            r.forEach((function(e) {
                                                                (null === e || void 0 === e ? void 0 : e.msgId) && (null === e || void 0 === e ? void 0 : e.url) && (o[e.msgId] = e.url)
                                                            })), e.chat.objectChannelFileDictionaryAssign({
                                                                channelFileDictionary: (0, se.A)({}, o)
                                                            })
                                                        }
                                                    })).catch((function(e) {
                                                        console.log("reloadChannelImage error", e)
                                                    }))
                                                } catch (a) {
                                                    console.error("error in reloadChannelImage", a)
                                                }
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))()
                            },
                            deleteChannelMsgById: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = n.msgId,
                                    r = n.channelId;
                                return (0, ie.A)(a().mark((function n() {
                                    var o, i, s;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.prev = 0, n.next = 4, (0, xe.U7)({
                                                    msgId: t,
                                                    channelId: r
                                                });
                                            case 4:
                                                null === e || void 0 === e || null === (o = e.chat) || void 0 === o || o.setDeletedChannelMsgs({
                                                    msgId: t,
                                                    channelId: r
                                                }), null === e || void 0 === e || null === (i = e.chat) || void 0 === i || i.updateChannelLastMsgByDeleteMsgId({
                                                    msgId: t,
                                                    channelId: r
                                                }), null === e || void 0 === e || null === (s = e.chat) || void 0 === s || s.changeGroupMessageStatus({
                                                    msgId: t,
                                                    channelId: r,
                                                    status: Ae.qp.deleted
                                                }), e.pin.getChannelPinnedMsgs(r), n.next = 13;
                                                break;
                                            case 10:
                                                n.prev = 10, n.t0 = n.catch(0), console.error("error in deleteChannelMsgById", n.t0);
                                            case 13:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [0, 10]
                                    ])
                                })))()
                            },
                            updateChannelLastMsgByDeleteMsgId: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = n.msgId,
                                    r = n.channelId,
                                    o = (arguments.length > 1 ? arguments[1] : void 0).chat;
                                try {
                                    var i, a, s = o.channelGroups,
                                        u = o.channelMessages,
                                        c = o.deletedChannelMsgs,
                                        l = s.findIndex((function(e) {
                                            return "".concat(e.id) === "".concat(r)
                                        })),
                                        d = -1 !== l,
                                        p = (null === (i = s[l]) || void 0 === i || null === (a = i.lastMsg) || void 0 === a ? void 0 : a.msgId) === t;
                                    if (d && p) {
                                        var f, g = (null === (f = u[r]) || void 0 === f ? void 0 : f.msgs) || [],
                                            h = (g = g.filter((function(e) {
                                                return e.msgId !== t && -1 === Me.C9.indexOf(e.msgType) && !c.some((function(n) {
                                                    return e.msgId === n.msgId && n.channelId === r
                                                }))
                                            })))[g.length - 1];
                                        if (h) {
                                            var m, y, b = (0, v.A)(s);
                                            b[l] = (0, ue.A)((0, se.A)({}, b[l]), {
                                                lastMsg: h ? {
                                                    content: h.msgType === Me.Wr.CHANNEL_TEXT ? h.text : "",
                                                    msgType: h.msgType,
                                                    createTime: h.createTime,
                                                    mentionUserNameMap: h.mentionUserNameMap,
                                                    msgId: h.msgId
                                                } : null,
                                                unreadCount: (null === (m = b[l]) || void 0 === m ? void 0 : m.unreadCount) > 0 ? (null === (y = b[l]) || void 0 === y ? void 0 : y.unreadCount) - 1 : 0
                                            }), e.chat.objectAssign({
                                                channelGroups: b
                                            })
                                        } else setTimeout((function() {
                                            var n;
                                            null === e || void 0 === e || null === (n = e.chat) || void 0 === n || n.getChannelList()
                                        }), 1e3)
                                    }
                                } catch (A) {
                                    console.error("error in updateChannelLastMsgByDeleteMsgId", A)
                                }
                            },
                            getChatGroupMsg: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = (arguments.length > 1 ? arguments[1] : void 0).chat;
                                return (0, ie.A)(a().mark((function r() {
                                    var o, i, s, u, c, l, d, p, f, g, h, m, y, b, A, I, M, x, C;
                                    return a().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (r.prev = 0, i = t.groupMessages, s = n.groupId, u = n.isRestData, c = n.fromMsgId, l = n.callback, d = n.errorCallback, !((null === (p = (null === (o = i[s]) || void 0 === o ? void 0 : o.msgs) || []) || void 0 === p ? void 0 : p.length) > 0) || c || u) {
                                                    r.next = 23;
                                                    break
                                                }
                                                if (!(p.length > Oe)) {
                                                    r.next = 21;
                                                    break
                                                }
                                                return r.prev = 7, f = p.length - Oe, g = p.slice(f), e.chat.objectAssign({
                                                    groupMessages: (0, ue.A)((0, se.A)({}, i), (0, ae.A)({}, s, {
                                                        hasMore: !0,
                                                        msgs: g
                                                    }))
                                                }), h = g.findIndex((function(e) {
                                                    return e.msgId === c
                                                })), l && l({
                                                    prevPosIndex: h
                                                }), r.abrupt("return");
                                            case 16:
                                                r.prev = 16, r.t0 = r.catch(7), console.log(r.t0);
                                            case 19:
                                                r.next = 22;
                                                break;
                                            case 21:
                                                e.chat.objectAssign({
                                                    groupMessages: (0, ue.A)((0, se.A)({}, i), (0, ae.A)({}, s, (0, ue.A)((0, se.A)({}, i[s]), {
                                                        msgs: p
                                                    })))
                                                }), l && l();
                                            case 22:
                                                return r.abrupt("return");
                                            case 23:
                                                return console.log("params  ----\x3e>>>>>>>     ", n), r.prev = 24, r.next = 27, (0, xe.Kt)(n);
                                            case 27:
                                                (m = r.sent).success ? (A = (null === (y = m.data) || void 0 === y ? void 0 : y.msgs) || [], I = null === (b = m.data) || void 0 === b ? void 0 : b.hasMore, M = (0, v.A)(A).reverse(), i[s] ? (x = u ? [] : i[s].msgs || [], (C = (null === n || void 0 === n ? void 0 : n.fromMsgId) ? x.concat(M) : M.concat(x)).sort((function(e, n) {
                                                    return e.msgId - n.msgId
                                                })), C = (0, _e.R3)(C), e.chat.objectAssign({
                                                    groupMessages: (0, ue.A)((0, se.A)({}, i), (0, ae.A)({}, s, {
                                                        msgs: C,
                                                        hasMore: I
                                                    }))
                                                }), l && l(C)) : (e.chat.objectAssign({
                                                    groupMessages: (0, ue.A)((0, se.A)({}, i), (0, ae.A)({}, s, {
                                                        msgs: M,
                                                        hasMore: I
                                                    }))
                                                }), l && l(M))) : d && d(m), r.next = 34;
                                                break;
                                            case 31:
                                                r.prev = 31, r.t1 = r.catch(24), d && d(r.t1);
                                            case 34:
                                                r.next = 39;
                                                break;
                                            case 36:
                                                r.prev = 36, r.t2 = r.catch(0), console.error("error in getChatGroupMsg", r.t2);
                                            case 39:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [0, 36],
                                        [7, 16],
                                        [24, 31]
                                    ])
                                })))()
                            },
                            getChannelDetail: function() {
                                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                                    n = (arguments.length > 1 ? arguments[1] : void 0).chat;
                                return (0, ie.A)(a().mark((function t() {
                                    var r, o;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return r = n.currentChannelGroupId, t.prev = 1, t.next = 4, (0, ke.NF)(e || r);
                                            case 4:
                                                if ("000000" !== (null === (o = t.sent) || void 0 === o ? void 0 : o.code)) {
                                                    t.next = 7;
                                                    break
                                                }
                                                return t.abrupt("return", o.data);
                                            case 7:
                                                return t.abrupt("return", null);
                                            case 10:
                                                t.prev = 10, t.t0 = t.catch(1), console.error("error in getChannelDetail", t.t0);
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 10]
                                    ])
                                })))()
                            },
                            getRedPacketCreateConfig: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = n.channelId,
                                    r = n.clear,
                                    o = void 0 !== r && r;
                                return (0, ie.A)(a().mark((function n() {
                                    var r, i;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return o && e.chat.objectAssign({
                                                    redPacketCreateConfig: null
                                                }), n.prev = 1, n.next = 5, null === e || void 0 === e || null === (r = e.chat) || void 0 === r ? void 0 : r.getChannelDetail(t);
                                            case 5:
                                                (null === (i = n.sent) || void 0 === i ? void 0 : i.enableRedPacket) && (null === i || void 0 === i ? void 0 : i.redPacketTheme) ? e.chat.objectAssign({
                                                    redPacketCreateConfig: {
                                                        enableRedPacket: i.enableRedPacket,
                                                        redPacketTheme: i.redPacketTheme,
                                                        channelId: t
                                                    }
                                                }): e.chat.objectAssign({
                                                    redPacketCreateConfig: null
                                                }), n.next = 13;
                                                break;
                                            case 9:
                                                n.prev = 9, n.t0 = n.catch(1), console.error(n.t0), e.chat.objectAssign({
                                                    redPacketCreateConfig: null
                                                });
                                            case 13:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            updateGrabPacketConfig: function() {
                                var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                    t = n.packetConfig,
                                    r = n.isDirect,
                                    o = void 0 !== r && r,
                                    i = n.updateGrabPacketCallback,
                                    s = (arguments.length > 1 ? arguments[1] : void 0).chat;
                                return (0, ie.A)(a().mark((function n() {
                                    var r, u, c, l, d, p, f;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if ((null === t || void 0 === t ? void 0 : t.grabCode) || e.chat.objectAssign({
                                                        grabRedPacketConfig: null
                                                    }), n.prev = 1, !(null === t || void 0 === t ? void 0 : t.grabCode)) {
                                                    n.next = 11;
                                                    break
                                                }
                                                if (!o) {
                                                    n.next = 7;
                                                    break
                                                }
                                                e.chat.objectAssign({
                                                    grabRedPacketConfig: (0, se.A)({
                                                        visible: !0,
                                                        redPacketTheme: null === t || void 0 === t ? void 0 : t.theme
                                                    }, t)
                                                }), n.next = 11;
                                                break;
                                            case 7:
                                                return n.next = 9, (0, ve.Sl)({
                                                    grabCode: null === t || void 0 === t ? void 0 : t.grabCode,
                                                    uid: null === t || void 0 === t ? void 0 : t.uid
                                                });
                                            case 9:
                                                (r = n.sent).success ? (null === r || void 0 === r || null === (u = r.data) || void 0 === u ? void 0 : u.grabbed) ? (e.chat.objectAssign({
                                                    grabRedPacketConfig: null
                                                }), i && i(), null === e || void 0 === e || null === (c = e.chat) || void 0 === c || c.changeRedMessageStatus({
                                                    channelId: null === t || void 0 === t ? void 0 : t.channelId,
                                                    orderId: null === t || void 0 === t ? void 0 : t.orderId
                                                })) : e.chat.objectAssign({
                                                    grabRedPacketConfig: (0, ue.A)((0, se.A)({
                                                        visible: !0
                                                    }, t, r.data || {}), {
                                                        grabCode: null === t || void 0 === t ? void 0 : t.grabCode,
                                                        redPacketTheme: null === t || void 0 === t ? void 0 : t.theme
                                                    })
                                                }) : "403064" === r.code || "403802" === r.code ? (e.chat.objectAssign({
                                                    grabRedPacketConfig: (0, ue.A)((0, se.A)({
                                                        visible: !0
                                                    }, t), {
                                                        fullyClaimed: !0,
                                                        grabCode: null === t || void 0 === t ? void 0 : t.grabCode,
                                                        redPacketTheme: null === t || void 0 === t ? void 0 : t.theme
                                                    })
                                                }), null === e || void 0 === e || null === (l = e.chat) || void 0 === l || l.changeRedMessageStatus({
                                                    channelId: null === t || void 0 === t ? void 0 : t.channelId,
                                                    orderId: null === t || void 0 === t ? void 0 : t.orderId,
                                                    status: "FULLY_CLAIMED_AND_CLICKED"
                                                }), (0, Ee.uh)(null === t || void 0 === t ? void 0 : t.orderId, "finished"), d = {
                                                    channelId: null === t || void 0 === t ? void 0 : t.channelId,
                                                    orderId: null === t || void 0 === t ? void 0 : t.orderId,
                                                    user_id: (null === s || void 0 === s ? void 0 : s.uid) || "",
                                                    isMiniApp: le.lq || !1
                                                }, (0, ye.$3)("group-service-redpacket-clickbutallclaimed", {
                                                    extraInfo: le.lq ? JSON.stringify(d) : d
                                                })) : "403066" === r.code ? (e.chat.objectAssign({
                                                    grabRedPacketConfig: (0, ue.A)((0, se.A)({
                                                        visible: !0
                                                    }, t), {
                                                        grabCode: null === t || void 0 === t ? void 0 : t.grabCode,
                                                        redPacketTheme: null === t || void 0 === t ? void 0 : t.theme
                                                    })
                                                }), null === e || void 0 === e || null === (p = e.chat) || void 0 === p || p.changeRedMessageStatus({
                                                    channelId: null === t || void 0 === t ? void 0 : t.channelId,
                                                    orderId: null === t || void 0 === t ? void 0 : t.orderId,
                                                    status: "EXPIRED"
                                                })) : (e.chat.objectAssign({
                                                    grabRedPacketConfig: (0, ue.A)((0, se.A)({
                                                        visible: !0
                                                    }, t), {
                                                        errorMessage: null === r || void 0 === r ? void 0 : r.message,
                                                        grabCode: null === t || void 0 === t ? void 0 : t.grabCode,
                                                        redPacketTheme: null === t || void 0 === t ? void 0 : t.theme
                                                    })
                                                }), null === e || void 0 === e || null === (f = e.chat) || void 0 === f || f.changeRedMessageStatus({
                                                    channelId: null === t || void 0 === t ? void 0 : t.channelId,
                                                    orderId: null === t || void 0 === t ? void 0 : t.orderId
                                                }));
                                            case 11:
                                                n.next = 17;
                                                break;
                                            case 13:
                                                n.prev = 13, n.t0 = n.catch(1), console.error(n.t0), e.chat.objectAssign({
                                                    grabRedPacketConfig: null
                                                });
                                            case 17:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 13]
                                    ])
                                })))()
                            },
                            changeRedMessageStatus: function(n, t) {
                                var r = n.status,
                                    o = void 0 === r ? "RECEIVED" : r,
                                    i = (0, ce.A)(n, ["status"]),
                                    a = t.chat,
                                    s = i.channelId,
                                    u = i.orderId,
                                    c = a.channelGroups,
                                    l = a.channelMessages,
                                    d = c.findIndex((function(e) {
                                        return "".concat(e.id) === "".concat(s)
                                    }));
                                if (s && u && d >= 0 && l[s]) {
                                    var p = l[s],
                                        f = p.msgs,
                                        g = f.filter((function(e) {
                                            return e.orderId == u && "CHANNEL_RED_PACKET" === e.msgType
                                        }));
                                    if ((null === g || void 0 === g ? void 0 : g.length) > 0) {
                                        for (var h = 0; h < g.length; h++) "RECEIVED" === o && (g[h].received = !0), "EXPIRED" === o && (g[h].expired = !0), "FULLY_CLAIMED" === o && (g[h].finished = !0), "FULLY_CLAIMED_AND_CLICKED" === o && (g[h].finished = !0, g[h].clicked = !0);
                                        var v = f.sort((function(e, n) {
                                            return e.msgId - n.msgId
                                        }));
                                        e.chat.objectAssign({
                                            channelMessages: (0, ue.A)((0, se.A)({}, l), (0, ae.A)({}, s, (0, ue.A)((0, se.A)({}, p), {
                                                msgs: v
                                            })))
                                        })
                                    }
                                }
                            },
                            checkHasChatGroup: function(n) {
                                return (0, ie.A)(a().mark((function t() {
                                    var r, o, i, s, u, c, l;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.prev = 0, r = (null === n || void 0 === n ? void 0 : n.callback) || null, o = (null === n || void 0 === n ? void 0 : n.usePrefetchCache) || !1, t.next = 5, (0, xe.KJ)(o);
                                            case 5:
                                                (null === (i = t.sent) || void 0 === i ? void 0 : i.success) && (null === i || void 0 === i ? void 0 : i.data) && (s = i.data || {}, u = s.has, c = s.hasMention, l = s.mentionAll, e.chat.objectAssign({
                                                    unReadInfo: i.data,
                                                    hasGroup: u
                                                }), e.mention.setNcHomePageHasMentionYou(c), e.mention.setNcHomePageHasMentionAll(l), null === r || void 0 === r || r(i.data)), t.next = 12;
                                                break;
                                            case 9:
                                                t.prev = 9, t.t0 = t.catch(0), console.error("error in checkHasChatGroup", t.t0);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 9]
                                    ])
                                })))()
                            },
                            fetchChannelUserLabels: function() {
                                return (0, ie.A)(a().mark((function n() {
                                    var t;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.prev = 0, n.next = 3, (0, ke.yF)();
                                            case 3:
                                                t = n.sent, Array.isArray(t.data) && e.chat.setChannelUserLabels(t.data), n.next = 10;
                                                break;
                                            case 7:
                                                n.prev = 7, n.t0 = n.catch(0), console.error(n.t0);
                                            case 10:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [0, 7]
                                    ])
                                })))()
                            },
                            getChatToken: function(n, t) {
                                var r = t.chat;
                                return (0, ie.A)(a().mark((function t() {
                                    var o, i, s, u, c, l, d;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (o = (null === n || void 0 === n ? void 0 : n.isForceRequest) || !1, i = r.token, t.prev = 2, !i || o) {
                                                    t.next = 5;
                                                    break
                                                }
                                                return t.abrupt("return", i);
                                            case 5:
                                                return t.next = 7, (0, xe.RS)();
                                            case 7:
                                                if (!(null === (s = t.sent) || void 0 === s ? void 0 : s.success)) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return d = null === (u = s.data) || void 0 === u ? void 0 : u.token, e.chat.objectAssign({
                                                    token: d,
                                                    uid: null === (c = s.data) || void 0 === c ? void 0 : c.uid,
                                                    serviceGroupLastSeqNo2: null === (l = s.data) || void 0 === l ? void 0 : l.lastSeqNo2
                                                }), t.abrupt("return", d);
                                            case 13:
                                                return e.chat.objectAssign({
                                                    token: "",
                                                    uid: null
                                                }), t.abrupt("return", "");
                                            case 17:
                                                return t.prev = 17, t.t0 = t.catch(2), (0, be.vF)("error in getHaodeskToken", t.t0), t.abrupt("return", i);
                                            case 21:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [2, 17]
                                    ])
                                })))()
                            },
                            getChatWsDomain: function(n) {
                                return (0, ie.A)(a().mark((function t() {
                                    var r, o, i, s, u;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return r = (null === n || void 0 === n ? void 0 : n.callback) || null, t.prev = 1, t.next = 5, (0, xe.CB)();
                                            case 5:
                                                (null === (i = t.sent) || void 0 === i ? void 0 : i.success) && (null === i || void 0 === i || null === (o = i.data) || void 0 === o ? void 0 : o.chat) ? (u = null === i || void 0 === i || null === (s = i.data) || void 0 === s ? void 0 : s.chat, e.chat.objectAssign({
                                                    socketDomain: u
                                                }), "function" === typeof r && "function" === typeof r && (null === r || void 0 === r || r(u))) : "function" === typeof r && (null === r || void 0 === r || r()), t.next = 13;
                                                break;
                                            case 9:
                                                t.prev = 9, t.t0 = t.catch(1), (0, be.vF)("error in getChatWsDomain", t.t0), "function" === typeof r && (null === r || void 0 === r || r());
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 9]
                                    ])
                                })))()
                            },
                            getGroupUserBaseInfo: function(n, t) {
                                var r = t.chat;
                                return (0, ie.A)(a().mark((function n() {
                                    var t, o;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.prev = 0, n.next = 3, (0, xe.Mo)();
                                            case 3:
                                                t = n.sent.data, o = r.groupUserBaseInfo, t && e.chat.objectAssign({
                                                    groupUserBaseInfo: (0, ue.A)((0, se.A)({}, o), {
                                                        email: (null === t || void 0 === t ? void 0 : t.email) || "",
                                                        id: (null === t || void 0 === t ? void 0 : t.userId) || "",
                                                        parentUser: (null === t || void 0 === t ? void 0 : t.parentUser) || !1
                                                    })
                                                }), n.next = 11;
                                                break;
                                            case 8:
                                                n.prev = 8, n.t0 = n.catch(0), console.error(n.t0);
                                            case 11:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [0, 8]
                                    ])
                                })))()
                            },
                            checkHasChat: function(n, t) {
                                var r = n.getList,
                                    o = void 0 !== r && r,
                                    i = t.chat;
                                return (0, ie.A)(a().mark((function n() {
                                    var t, r;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                if (n.prev = 0, t = i.hasGroup, r = i.groupUserBaseInfo, t && !o) {
                                                    n.next = 5;
                                                    break
                                                }
                                                return n.next = 5, e.chat.checkHasChatGroup({
                                                    callback: (0, ie.A)(a().mark((function n() {
                                                        return a().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    return n.next = 2, e.chat.getChatGroupList(!0);
                                                                case 2:
                                                                    return n.next = 4, e.chat.getChannelList();
                                                                case 4:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n)
                                                    })))
                                                });
                                            case 5:
                                                if (null === r || void 0 === r ? void 0 : r.id) {
                                                    n.next = 8;
                                                    break
                                                }
                                                return n.next = 8, e.chat.getGroupUserBaseInfo();
                                            case 8:
                                                n.next = 13;
                                                break;
                                            case 10:
                                                n.prev = 10, n.t0 = n.catch(0), console.log(n.t0);
                                            case 13:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [0, 10]
                                    ])
                                })))()
                            },
                            postSeekTargetChannelMsgById: function(n, t) {
                                var r = n.channelId,
                                    o = n.msgId,
                                    i = n.lastMsgId,
                                    s = n.lastMsgSeqNo,
                                    u = n.callback,
                                    c = n.errorCallback,
                                    l = t.chat;
                                return (0, ie.A)(a().mark((function n() {
                                    var t, d, p, f, g, h, m, y, b, A, I, M, x, C, k, w, E, _, S, T, O, P, L, N, R, D, F;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return t = l.channelMessages, d = l.uid, n.prev = 1, n.next = 4, (0, xe.L0)({
                                                    channelId: r,
                                                    msgId: o,
                                                    lastMsgId: i,
                                                    lastMsgSeqNo: s,
                                                    pullSize: 30
                                                });
                                            case 4:
                                                if (p = n.sent, f = [], !(null === p || void 0 === p ? void 0 : p.data) || "000000" !== (null === p || void 0 === p ? void 0 : p.code)) {
                                                    n.next = 32;
                                                    break
                                                }
                                                if (x = (null === p || void 0 === p || null === (g = p.data) || void 0 === g ? void 0 : g.cur) || [], C = (null === p || void 0 === p || null === (h = p.data) || void 0 === h ? void 0 : h.previous) || [], k = (null === p || void 0 === p || null === (m = p.data) || void 0 === m ? void 0 : m.nexts) || [], w = C.concat(x).concat(k), E = (null === p || void 0 === p || null === (y = p.data) || void 0 === y ? void 0 : y.lastMsgId) || w[0], _ = !0, S = function() {
                                                        var e = (0, ie.A)(a().mark((function e() {
                                                            var n, t, o, i, s, u;
                                                            return a().wrap((function(e) {
                                                                for (;;) switch (e.prev = e.next) {
                                                                    case 0:
                                                                        return e.next = 2, (0, xe.t8)({
                                                                            channelId: r,
                                                                            lastMsgId: E
                                                                        });
                                                                    case 2:
                                                                        if (!(n = e.sent).success) {
                                                                            e.next = 15;
                                                                            break
                                                                        }
                                                                        if (u = (null === (t = n.data) || void 0 === t ? void 0 : t.msgs) || [], _ = !!(null === (o = n.data) || void 0 === o ? void 0 : o.hasMore), E = (null === (i = n.data) || void 0 === i ? void 0 : i.lastMsgId) ? null === (s = n.data) || void 0 === s ? void 0 : s.lastMsgId : u[u.length - 1].msgId, u = u.reverse(), !((w = u.concat(w)).length < 30 && _)) {
                                                                            e.next = 13;
                                                                            break
                                                                        }
                                                                        return e.next = 13, S();
                                                                    case 13:
                                                                        e.next = 16;
                                                                        break;
                                                                    case 15:
                                                                        c && c(n);
                                                                    case 16:
                                                                    case "end":
                                                                        return e.stop()
                                                                }
                                                            }), e)
                                                        })));
                                                        return function() {
                                                            return e.apply(this, arguments)
                                                        }
                                                    }(), !((w = (null === (A = (b = w || []).filter) || void 0 === A ? void 0 : A.call(b, (function(e) {
                                                        return e.msgType === Me.Wr.CHANNEL_RED_PACKET_RECEIVED ? d === e.receiverId || d === e.ownerId : e
                                                    }))) || []).length < 30)) {
                                                    n.next = 19;
                                                    break
                                                }
                                                return n.next = 19, S();
                                            case 19:
                                                if (T = w[w.length - 1], (null === (O = (null === (I = t[r]) || void 0 === I ? void 0 : I.msgs) || []) || void 0 === O || null === (M = O.some) || void 0 === M ? void 0 : M.call(O, (function(e) {
                                                        return e.msgId === (null === T || void 0 === T ? void 0 : T.msgId)
                                                    }))) ? ((P = w.concat(O)).sort((function(e, n) {
                                                        return e.msgId - n.msgId
                                                    })), P = (0, _e.R3)(P), L = t[r], e.chat.objectAssign({
                                                        channelMessages: (0, ue.A)((0, se.A)({}, t), (0, ae.A)({}, r, (0, ue.A)((0, se.A)({}, L), {
                                                            msgs: P
                                                        }))),
                                                        tempChannelMsgList: null,
                                                        isDisplayTempChannelMsgList: !1
                                                    }), f = (0, v.A)(P)) : (w.sort((function(e, n) {
                                                        return e.msgId - n.msgId
                                                    })), w = (0, _e.R3)(w), e.chat.objectAssign({
                                                        tempChannelMsgList: {
                                                            channelId: r,
                                                            msgs: w,
                                                            hasMorePrev: !0,
                                                            hasMoreNext: !0
                                                        },
                                                        isDisplayTempChannelMsgList: !0
                                                    }), f = (0, v.A)(w)), u && u(), !((null === f || void 0 === f ? void 0 : f.length) > 0)) {
                                                    n.next = 30;
                                                    break
                                                }
                                                return D = f.filter((function(e) {
                                                    return "CHANNEL_FILE" === e.msgType
                                                })), F = D.map((function(e) {
                                                    return null === e || void 0 === e ? void 0 : e.msgId
                                                })), null === e || void 0 === e || null === (N = e.chat) || void 0 === N || N.updateLargeGroupAvatarMap({
                                                    data: f
                                                }), n.next = 30, null === e || void 0 === e || null === (R = e.chat) || void 0 === R ? void 0 : R.batchFetchChannelFileDictionary({
                                                    msgIds: F,
                                                    channelId: r
                                                });
                                            case 30:
                                                n.next = 33;
                                                break;
                                            case 32:
                                                null === c || void 0 === c || c(p);
                                            case 33:
                                                n.next = 39;
                                                break;
                                            case 35:
                                                n.prev = 35, n.t0 = n.catch(1), null === c || void 0 === c || c(n.t0), console.error("error in postSeekTargetChannelMsgById", n.t0);
                                            case 39:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 35]
                                    ])
                                })))()
                            },
                            postChannelTempMsgListLoadNext: function(n, t) {
                                var r = n.channelId,
                                    o = n.msgId,
                                    i = n.callback,
                                    s = n.toMsgId,
                                    u = t.chat;
                                return (0, ie.A)(a().mark((function n() {
                                    var t, c, l, d, p, f, g, h, v, m, y, b, A, I, M, x, C, k, w;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.prev = 0, p = u.channelMessages, f = u.tempChannelMsgList, n.next = 5, (0, xe.AD)({
                                                    msgId: o,
                                                    channelId: r,
                                                    toMsgId: s
                                                });
                                            case 5:
                                                if (g = n.sent, h = (null === g || void 0 === g || null === (t = g.data) || void 0 === t ? void 0 : t.msgs) || [], v = (null === g || void 0 === g || null === (c = g.data) || void 0 === c ? void 0 : c.hasMore) || !1, m = h, y = Array.isArray(null === (l = p[r]) || void 0 === l ? void 0 : l.msgs) ? p[r].msgs : [], b = (null === f || void 0 === f ? void 0 : f.msgs) || [], A = h[h.length - 1], !v || (null === y || void 0 === y || null === (d = y.includes) || void 0 === d ? void 0 : d.call(y, (function(e) {
                                                        return e.msgId === (null === A || void 0 === A ? void 0 : A.msgId)
                                                    }))) ? ((I = b.concat(h).concat(y)).sort((function(e, n) {
                                                        return e.msgId - n.msgId
                                                    })), I = (0, _e.R3)(I), M = p[r], e.chat.objectAssign({
                                                        channelMessages: (0, ue.A)((0, se.A)({}, p), (0, ae.A)({}, r, (0, ue.A)((0, se.A)({}, M), {
                                                            msgs: I
                                                        }))),
                                                        tempChannelMsgList: null,
                                                        isDisplayTempChannelMsgList: !1
                                                    })) : (h.sort((function(e, n) {
                                                        return e.msgId - n.msgId
                                                    })), h = h.filter((function(e, n, t) {
                                                        return n === t.findIndex((function(n) {
                                                            return n.msgId === e.msgId
                                                        }))
                                                    })), e.chat.objectAssign({
                                                        tempChannelMsgList: {
                                                            channelId: r,
                                                            msgs: b.concat(h),
                                                            hasMorePrev: !0,
                                                            hasMoreNext: v
                                                        }
                                                    })), i && i(), !((null === m || void 0 === m ? void 0 : m.length) > 0)) {
                                                    n.next = 21;
                                                    break
                                                }
                                                return k = m.filter((function(e) {
                                                    return "CHANNEL_FILE" === e.msgType
                                                })), w = k.map((function(e) {
                                                    return null === e || void 0 === e ? void 0 : e.msgId
                                                })), null === e || void 0 === e || null === (x = e.chat) || void 0 === x || x.updateLargeGroupAvatarMap({
                                                    data: m
                                                }), n.next = 21, null === e || void 0 === e || null === (C = e.chat) || void 0 === C ? void 0 : C.batchFetchChannelFileDictionary({
                                                    msgIds: w,
                                                    channelId: r
                                                });
                                            case 21:
                                                n.next = 26;
                                                break;
                                            case 23:
                                                n.prev = 23, n.t0 = n.catch(0), console.error("error in postChannelTempMsgListLoadNext", n.t0);
                                            case 26:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [0, 23]
                                    ])
                                })))()
                            },
                            updateLargeGroupAvatarMap: function(e, n) {
                                var t = e.data,
                                    r = (e.forceUpdate, n.chat);
                                try {
                                    r.largeGroupAvatarMap;
                                    Array.isArray(t) && t.length > 0 && t.forEach((function(e) {
                                        ((null === e || void 0 === e ? void 0 : e.senderId) || (null === e || void 0 === e ? void 0 : e.uid)) && e.avatar
                                    }))
                                } catch (o) {
                                    console.error("error in updateLargeGroupAvatarMap", o)
                                }
                            },
                            getTimelineMsgAsync: function(n, t) {
                                var r = n.from,
                                    o = t.chat;
                                return (0, ie.A)(a().mark((function n() {
                                    var t, i, s, u, c;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                try {
                                                    t = o.token, i = o.timelineDisconnect, s = o.currentServiceGroupId, u = o.groupMessages, c = o.chatGroups, (0, xe.hm)({
                                                        token: t,
                                                        disconnect: i,
                                                        seqNo2From: r
                                                    }).then((function(n) {
                                                        if ("number" === typeof r)
                                                            if (n.success) {
                                                                var t = n.data,
                                                                    o = t.msgs,
                                                                    i = t.hasNext,
                                                                    a = t.interval,
                                                                    l = t.disconnect,
                                                                    d = t.seqNo2;
                                                                if ("boolean" === typeof l && e.chat.objectAssign({
                                                                        timelineDisconnect: l
                                                                    }), "number" !== typeof d) {
                                                                    if ("number" === typeof a && e.chat.objectAssign({
                                                                            timelineInterval: 1e3 * a
                                                                        }), Array.isArray(o))
                                                                        if (Pe = Pe.concat(o), i) {
                                                                            var p, f, g = null === (p = o[o.length - 1]) || void 0 === p ? void 0 : p.seqNo2;
                                                                            null === e || void 0 === e || null === (f = e.chat) || void 0 === f || f.getTimelineMsgAsync({
                                                                                from: g
                                                                            })
                                                                        } else {
                                                                            var h;
                                                                            if (Pe.length < 1) return;
                                                                            if (s) {
                                                                                var m, y = (null === (m = u[s]) || void 0 === m ? void 0 : m.msgs) || [],
                                                                                    b = Pe.filter((function(e) {
                                                                                        return e.groupId === s && (e.msgType === Me.Wr.GROUP_TEXT || e.msgType === Me.Wr.GROUP_FILE)
                                                                                    }));
                                                                                Ae.B_.length > 0 && Ae.B_.some((function(e) {
                                                                                    return e.groupId === s
                                                                                })) && (y = y.filter((function(e) {
                                                                                    var n = Ae.B_.findIndex((function(n) {
                                                                                        return n.identity === e.identity && n.groupId === s
                                                                                    }));
                                                                                    return n > -1 && (clearTimeout(Ae.B_[n].timer), Ae.B_.splice(n, 1)), n < 0
                                                                                })));
                                                                                var A = y.concat(b);
                                                                                A = (A = (0, _e.R3)(A)).filter((function(e, n, t) {
                                                                                    return n === t.findIndex((function(n) {
                                                                                        return n.msgId === e.msgId
                                                                                    }))
                                                                                })), s && e.chat.objectAssign({
                                                                                    groupMessages: (0, ue.A)((0, se.A)({}, u), (0, ae.A)({}, s, (0, ue.A)((0, se.A)({}, u[s]), {
                                                                                        msgs: A
                                                                                    })))
                                                                                })
                                                                            } else {
                                                                                Pe.filter((function(e) {
                                                                                    return e.msgType === Me.Wr.GROUP_TEXT || e.msgType === Me.Wr.GROUP_FILE
                                                                                })).sort((function(e, n) {
                                                                                    return e.groupId !== n.groupId ? e.groupId - n.groupId : n.msgId - e.msgId
                                                                                }));
                                                                                var I = [],
                                                                                    M = new Set,
                                                                                    x = !0,
                                                                                    C = !1,
                                                                                    k = void 0;
                                                                                try {
                                                                                    for (var w, E = Pe[Symbol.iterator](); !(x = (w = E.next()).done); x = !0) {
                                                                                        var _ = w.value;
                                                                                        M.has(_.groupId) || (I.push(_), M.add(_.groupId))
                                                                                    }
                                                                                } catch (T) {
                                                                                    C = !0, k = T
                                                                                } finally {
                                                                                    try {
                                                                                        x || null == E.return || E.return()
                                                                                    } finally {
                                                                                        if (C) throw k
                                                                                    }
                                                                                }
                                                                                if (I.length > 0) {
                                                                                    var S = (0, v.A)(c);
                                                                                    I.forEach((function(e) {
                                                                                        var n = c.find((function(n) {
                                                                                                return "".concat(n.groupId) === "".concat(e.groupId)
                                                                                            })),
                                                                                            t = c.findIndex((function(n) {
                                                                                                return Number(n.groupId) === Number(e.groupId)
                                                                                            }));
                                                                                        try {
                                                                                            var r, o, i = "",
                                                                                                a = !1;
                                                                                            if (e.content) {
                                                                                                var s, u, l = JSON.parse(e.content),
                                                                                                    d = null === c || void 0 === c ? void 0 : c[t];
                                                                                                if (null === d || void 0 === d || null === (s = d.chatGroupMemberTable) || void 0 === s ? void 0 : s[null === l || void 0 === l ? void 0 : l.src]) i = null === (u = d.chatGroupMemberTable[null === l || void 0 === l ? void 0 : l.src]) || void 0 === u ? void 0 : u.nickname;
                                                                                                (null === l || void 0 === l ? void 0 : l.src) === (null === n || void 0 === n ? void 0 : n.userWeaId) && (a = !0)
                                                                                            }
                                                                                            var p = (0, se.A)((0, ue.A)((0, se.A)({}, c[t]), {
                                                                                                lastMsgTime: e.createTime,
                                                                                                lastMsgType: e.msgType,
                                                                                                lastMsgSender: i,
                                                                                                lastMsgPreview: e.msgType === Me.Wr.GROUP_TEXT ? e.preview : "i18n-file"
                                                                                            }), !a && "number" === typeof(null === (r = c[t]) || void 0 === r ? void 0 : r.unreadCount) && {
                                                                                                unreadCount: (null === (o = c[t]) || void 0 === o ? void 0 : o.unreadCount) + 1
                                                                                            });
                                                                                            S[t] = p
                                                                                        } catch (f) {
                                                                                            console.log(f)
                                                                                        }
                                                                                    })), e.chat.objectAssign({
                                                                                        chatGroups: S.sort((function(e, n) {
                                                                                            return n.lastMsgTime > e.lastMsgTime ? 1 : -1
                                                                                        }))
                                                                                    })
                                                                                }
                                                                            }
                                                                            e.chat.objectAssign({
                                                                                serviceGroupLastSeqNo2: null === (h = Pe[Pe.length - 1]) || void 0 === h ? void 0 : h.seqNo2
                                                                            }), Pe = []
                                                                        }
                                                                } else e.chat.objectAssign({
                                                                    serviceGroupLastSeqNo2: d
                                                                })
                                                            } else Pe = []
                                                    })).catch((function(e) {
                                                        console.log(e), Pe = []
                                                    }))
                                                } catch (a) {
                                                    console.error("error in getTimelineMsgAsync", a)
                                                }
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))()
                            },
                            openUrl: function(n) {
                                return (0, ie.A)(a().mark((function t() {
                                    var r, o, i;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (t.prev = 0, !(o = n.url).startsWith("https://app.binance.com")) {
                                                    t.next = 6;
                                                    break
                                                }
                                                return le.lq ? (0, ke.Uu)({
                                                    qrCode: o
                                                }).then((function(e) {
                                                    var n, t, r = null === e || void 0 === e || null === (n = e.data) || void 0 === n || null === (t = n.deepLinkContent) || void 0 === t ? void 0 : t.path;
                                                    (null === r || void 0 === r ? void 0 : r.startsWith("bnc://app")) ? (0, he.VJ)({
                                                        url: r,
                                                        target: "deeplink"
                                                    }) : (0, he.VJ)({
                                                        url: o,
                                                        target: "external"
                                                    })
                                                })) : (0, Te.D)(o), t.abrupt("return");
                                            case 6:
                                                return t.next = 8, (0, ke.Y5)({
                                                    content: o,
                                                    type: "domain"
                                                });
                                            case 8:
                                                (null === (i = t.sent) || void 0 === i || null === (r = i.data) || void 0 === r ? void 0 : r.verifySuccess) ? le.lq ? (0, he.VJ)({
                                                    url: o,
                                                    target: "external"
                                                }) : (0, Te.D)(o): e.chat.setConfirmUrl(o), t.next = 16;
                                                break;
                                            case 12:
                                                throw t.prev = 12, t.t0 = t.catch(0), console.error("error in openUrl", t.t0), t.t0;
                                            case 16:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [0, 12]
                                    ])
                                })))()
                            }
                        }
                    }
                },
                Fe = (re()(De), {
                    name: "pin",
                    state: {
                        unpinMsgId: 0,
                        unpinMessageConfirmModalVisible: !1,
                        currentChannelPinnedMsgs: [],
                        pinnedMessagesPageTitle: "",
                        pinReachedMaxModalVisible: !1,
                        pinMaxLimit: 0
                    },
                    reducers: {
                        setPinnedMessagesPageTitle: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                pinnedMessagesPageTitle: n
                            })
                        },
                        setUnpinMsgId: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                unpinMsgId: n
                            })
                        },
                        setUnpinMessageConfirmModalVisible: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                unpinMessageConfirmModalVisible: n
                            })
                        },
                        setPinReachedMaxModalVisible: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                pinReachedMaxModalVisible: n
                            })
                        },
                        setCurrentChannelPinnedMsgs: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                currentChannelPinnedMsgs: n
                            })
                        },
                        setPinMaxLimit: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                pinMaxLimit: n
                            })
                        }
                    },
                    effects: function(e) {
                        return {
                            getChannelPinnedMsgs: function(n) {
                                return (0, ie.A)(a().mark((function t() {
                                    var r, o, i, s;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (!n) {
                                                    t.next = 12;
                                                    break
                                                }
                                                return t.prev = 1, t.next = 5, (0, ke.sq)(n);
                                            case 5:
                                                o = t.sent, Array.isArray(null === o || void 0 === o || null === (r = o.data) || void 0 === r ? void 0 : r.msgs) ? null === (i = e.pin) || void 0 === i || i.setCurrentChannelPinnedMsgs(o.data.msgs || []) : null === (s = e.pin) || void 0 === s || s.setCurrentChannelPinnedMsgs([]), t.next = 12;
                                                break;
                                            case 9:
                                                t.prev = 9, t.t0 = t.catch(1), console.error("error in getChannelPinnedMsgs", t.t0);
                                            case 12:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [1, 9]
                                    ])
                                })))()
                            }
                        }
                    }
                }),
                Be = (re()(Fe), {
                    name: "mention",
                    state: {
                        ncHomePageHasMentionAll: !1,
                        ncHomePageHasMentionYou: !1,
                        firstUnreadMentionMsgId: null,
                        currentChannelMemberQueryForMention: "",
                        mentionMemberModalVisible: !1,
                        channelMembersResponseForMention: {},
                        tempMentionMember: null,
                        mentionMemberList: [],
                        unreadMentionMsgChannelMap: {},
                        unreadMentionAllChannelMap: {},
                        tempUnreadMentionMsgChannelMap: {},
                        tempUnreadMentionAllChannelMap: {},
                        isScrollingToFirstUnreadMentionMsg: !1
                    },
                    reducers: {
                        setNcHomePageHasMentionAll: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                ncHomePageHasMentionAll: !!n
                            })
                        },
                        setNcHomePageHasMentionYou: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                ncHomePageHasMentionYou: !!n
                            })
                        },
                        setFirstUnreadMentionMsgId: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                firstUnreadMentionMsgId: n
                            })
                        },
                        setChannelMembersResponseForMention: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                channelMembersResponseForMention: n
                            })
                        },
                        setMentionMemberModalVisible: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                mentionMemberModalVisible: n
                            })
                        },
                        setChannelMemberQueryForMention: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                currentChannelMemberQueryForMention: n
                            })
                        },
                        setTempMentionMember: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                tempMentionMember: n
                            })
                        },
                        setMentionMemberList: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                mentionMemberList: n
                            })
                        },
                        setCurrentChannelMemberQueryForMention: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                currentChannelMemberQueryForMention: n
                            })
                        },
                        setUnreadMentionMsgChannelMap: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                unreadMentionMsgChannelMap: n
                            })
                        },
                        setIsScrollingToFirstUnreadMentionMsg: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                isScrollingToFirstUnreadMentionMsg: n
                            })
                        },
                        setTempUnreadMentionMsgChannelMap: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                tempUnreadMentionMsgChannelMap: n
                            })
                        },
                        setTempUnreadMentionAllChannelMap: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                tempUnreadMentionAllChannelMap: n
                            })
                        }
                    },
                    effects: function(e) {
                        return {
                            addMentionMember: function(n, t) {
                                try {
                                    var r = t.mention.mentionMemberList;
                                    e.mention.setMentionMemberList((0, v.A)(r).concat([n]))
                                } catch (o) {
                                    console.error(o)
                                }
                            },
                            getChannelMembersForMention: function(n, t) {
                                return (0, ie.A)(a().mark((function r() {
                                    var o, i, s, u, c, l, d, p, f, g, h, m;
                                    return a().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.prev = 0, o = t.chat.currentChannelGroupId, i = t.mention.channelMembersResponseForMention, u = (s = n || {}).query, c = s.cursorId, l = s.name, r.next = 6, (0, ke.kH)({
                                                    query: u,
                                                    name: l,
                                                    cursorId: c,
                                                    channelId: o
                                                });
                                            case 6:
                                                d = r.sent, p = (null === d || void 0 === d ? void 0 : d.data) || {}, f = p.adminCount, g = p.memberCount, h = p.cursorId, m = p.members, c ? e.mention.setChannelMembersResponseForMention({
                                                    adminCount: f,
                                                    memberCount: g,
                                                    cursorId: h,
                                                    members: (0, v.A)((null === i || void 0 === i ? void 0 : i.members) || []).concat((0, v.A)(m || []))
                                                }) : e.mention.setChannelMembersResponseForMention({
                                                    adminCount: f,
                                                    memberCount: g,
                                                    cursorId: h,
                                                    members: m
                                                }), r.next = 15;
                                                break;
                                            case 11:
                                                return r.prev = 11, r.t0 = r.catch(0), console.error(r.t0), r.abrupt("return", {});
                                            case 15:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [0, 11]
                                    ])
                                })))()
                            },
                            fetchUnreadMentionMsgList: function(n, t) {
                                return (0, ie.A)(a().mark((function n() {
                                    var r, o, i, s, u, c, l;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return r = t.chat.currentChannelGroupId, n.prev = 1, n.next = 4, (0, ke.Hm)(r);
                                            case 4:
                                                (null === (o = n.sent) || void 0 === o ? void 0 : o.data) && (i = o.data || {}, s = i.msgIds, u = i.mentionAllMsgIds, c = (s || []).map((function(e) {
                                                    var n;
                                                    return {
                                                        msgId: e,
                                                        mentionAll: null === u || void 0 === u || null === (n = u.includes) || void 0 === n ? void 0 : n.call(u, e),
                                                        expireTime: Date.now() + Ie.Lu
                                                    }
                                                })), l = (0, Ie.x9)(r, c), e.mention.setUnreadMentionMsgChannelMap(l)), n.next = 11;
                                                break;
                                            case 8:
                                                n.prev = 8, n.t0 = n.catch(1), console.error(n.t0);
                                            case 11:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n, null, [
                                        [1, 8]
                                    ])
                                })))()
                            },
                            readMentionMsg: function(n, t) {
                                try {
                                    var r = t.chat.currentChannelGroupId,
                                        o = t.mention,
                                        i = o.unreadMentionMsgChannelMap,
                                        a = o.tempUnreadMentionMsgChannelMap,
                                        s = o.tempUnreadMentionAllChannelMap,
                                        u = n,
                                        c = r;
                                    if (i[c]) {
                                        var l = (0, se.A)({}, i);
                                        l[c] = i[c].filter((function(e) {
                                            return e.msgId !== u
                                        })), e.mention.setUnreadMentionMsgChannelMap(l), Ie.Wt.set(l)
                                    }
                                    a[c] && (a[c] = !1, e.mention.setTempUnreadMentionMsgChannelMap((0, se.A)({}, a))), s[c] && (s[c] = !1, e.mention.setTempUnreadMentionAllChannelMap((0, se.A)({}, s)))
                                } catch (d) {
                                    console.error(d)
                                }
                            }
                        }
                    }
                }),
                Ge = (re()(Be), {
                    name: "channelMembers",
                    state: {
                        currentChannelMemberQuery: "",
                        channelMembersResponse: {}
                    },
                    reducers: {
                        setCurrentChannelMemberQuery: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                currentChannelMemberQuery: n
                            })
                        },
                        setChannelMembersResponse: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                channelMembersResponse: n
                            })
                        }
                    },
                    effects: function(e) {
                        return {
                            clearChannelMembers: function() {
                                e.channelMembers.setChannelMembersResponse({})
                            },
                            removeChannelMember: function(n, t) {
                                var r = n.uid,
                                    o = t.channelMembers.channelMembersResponse,
                                    i = o || {},
                                    a = i.members,
                                    s = void 0 === a ? [] : a,
                                    u = i.memberCount,
                                    c = void 0 === u ? 0 : u;
                                e.channelMembers.setChannelMembersResponse((0, ue.A)((0, se.A)({}, o), {
                                    memberCount: c - 1,
                                    members: s.filter((function(e) {
                                        return e.uid !== r
                                    }))
                                }))
                            },
                            getChannelMembers: function(n, t) {
                                return (0, ie.A)(a().mark((function r() {
                                    var o, i, s, u, c, l, d, p, f, g, h;
                                    return a().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return o = t.channelMembers.channelMembersResponse, i = n.query, s = n.cursorId, u = n.name, c = n.channelId, r.prev = 2, r.next = 5, (0, ke.kH)({
                                                    query: i,
                                                    name: u,
                                                    cursorId: s,
                                                    channelId: c
                                                });
                                            case 5:
                                                l = r.sent, d = (null === l || void 0 === l ? void 0 : l.data) || {}, p = d.adminCount, f = d.memberCount, g = d.cursorId, h = d.members, e.chat.updateLargeGroupAvatarMap({
                                                    data: h,
                                                    forceUpdate: !0
                                                }), s ? e.channelMembers.setChannelMembersResponse({
                                                    adminCount: p,
                                                    memberCount: f,
                                                    cursorId: g,
                                                    members: (0, v.A)((null === o || void 0 === o ? void 0 : o.members) || []).concat((0, v.A)(h || []))
                                                }) : e.channelMembers.setChannelMembersResponse({
                                                    adminCount: p,
                                                    memberCount: f,
                                                    cursorId: g,
                                                    members: h
                                                }), r.next = 15;
                                                break;
                                            case 11:
                                                return r.prev = 11, r.t0 = r.catch(2), console.error(r.t0), r.abrupt("return", {});
                                            case 15:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [2, 11]
                                    ])
                                })))()
                            }
                        }
                    }
                }),
                je = (re()(Ge), {
                    name: "chatHistory",
                    state: {},
                    reducers: {},
                    effects: function(e) {
                        return {}
                    }
                });
            re()(je);
            ! function(e) {
                e[e.PRE = 1] = "PRE", e[e.NEXT = 2] = "NEXT"
            }(oe || (oe = {}));
            var He = {
                    name: "preview",
                    state: {
                        channelImageMsgIdLinkedList: [],
                        previewImageUrl: null,
                        currentPreviewImageMsgId: null,
                        previewMsgIdImageMap: {},
                        isFromPinnedMsgsPage: !1
                    },
                    reducers: {
                        setPreviewImageUrl: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                previewImageUrl: n
                            })
                        },
                        setCurrentPreviewImageMsgId: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                currentPreviewImageMsgId: n
                            })
                        },
                        setPreviewMsgIdImageMap: function(e, n) {
                            var t = n.msgId,
                                r = n.imageUrl,
                                o = e.previewMsgIdImageMap;
                            return (0, ue.A)((0, se.A)({}, e), {
                                previewMsgIdImageMap: (0, ue.A)((0, se.A)({}, o), (0, ae.A)({}, t, r))
                            })
                        },
                        clearPreviewMsgIdImageMap: function(e) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                previewMsgIdImageMap: {}
                            })
                        },
                        setChannelImageMsgIdLinkedList: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                channelImageMsgIdLinkedList: n
                            })
                        },
                        setIsFromPinnedMsgsPage: function(e, n) {
                            return (0, ue.A)((0, se.A)({}, e), {
                                isFromPinnedMsgsPage: n
                            })
                        }
                    },
                    effects: function(e) {
                        return {
                            updateChannelImageMsgIdLinkedList: function(n, t) {
                                return (0, ie.A)(a().mark((function r() {
                                    var o, i, s, u, c, l, d, p, f, g, h, m, y, b, A, I;
                                    return a().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                if (r.prev = 0, o = t.chat.currentChannelGroupId, i = t.preview, s = i.channelImageMsgIdLinkedList, u = i.isFromPinnedMsgsPage, l = (c = n || {}).msgId, d = c.channelId, !l) {
                                                    r.next = 28;
                                                    break
                                                }
                                                if (!s.length || !s.includes(l)) {
                                                    r.next = 10;
                                                    break
                                                }
                                                if (p = s[0] === l, f = s[s.length - 1] === l, p || f) {
                                                    r.next = 10;
                                                    break
                                                }
                                                return r.abrupt("return");
                                            case 10:
                                                return r.prev = 10, g = {
                                                    msgId: l,
                                                    channelId: d || o,
                                                    pullInPin: !!u
                                                }, u || (g.pullType = s.length && s.includes(l) ? s[0] === l ? oe.PRE : oe.NEXT : null), r.next = 15, (0, ke.Ri)(g);
                                            case 15:
                                                h = r.sent, m = (null === h || void 0 === h ? void 0 : h.data) || {}, y = m.preImages, b = m.postImages, e.preview.setChannelImageMsgIdLinkedList([l]), A = [], I = [], Array.isArray(y) && (A = y.map((function(e) {
                                                    return e.msgId
                                                })).reverse()), Array.isArray(b) && (I = b.map((function(e) {
                                                    return e.msgId
                                                }))), e.preview.setChannelImageMsgIdLinkedList((0, v.A)(A).concat([l], (0, v.A)(I))), r.next = 28;
                                                break;
                                            case 25:
                                                r.prev = 25, r.t0 = r.catch(10), console.error("error in updateChannelImageMsgIdLinkedList", r.t0);
                                            case 28:
                                                r.next = 33;
                                                break;
                                            case 30:
                                                r.prev = 30, r.t1 = r.catch(0), console.error(r.t1);
                                            case 33:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r, null, [
                                        [0, 30],
                                        [10, 25]
                                    ])
                                })))()
                            },
                            handleChannelDeleteMsg: function(n, t) {
                                try {
                                    var r = n.msgId,
                                        o = t.preview,
                                        i = o.channelImageMsgIdLinkedList;
                                    o.currentPreviewImageMsgId === r && (e.preview.setCurrentPreviewImageMsgId(null), e.preview.setPreviewImageUrl(null));
                                    var a = i.filter((function(e) {
                                        return e !== r
                                    }));
                                    e.preview.setChannelImageMsgIdLinkedList(a), e.preview.setPreviewMsgIdImageMap({
                                        msgId: r,
                                        imageUrl: ""
                                    })
                                } catch (s) {
                                    console.error("error in handleChannelDeleteMsg", s)
                                }
                            }
                        }
                    }
                },
                Ue = (re()(He), {
                    chat: De,
                    pin: Fe,
                    mention: Be,
                    channelMembers: Ge,
                    chatHistory: je,
                    preview: He
                });
            const qe = function(e) {
                return te({
                    models: Ue,
                    redux: {
                        initialState: e
                    }
                })
            };
            const We = function(e, n) {
                return qe(e)
            };
            var Ve = t("sF4t"),
                Ke = function(e, n) {
                    var t = function(t) {
                        return y().createElement(Ve.Kq, {
                            store: n.redux
                        }, y().createElement(e, Object.assign({}, t)))
                    };
                    return t.displayName = "ReduxAppWrapper", t
                };
            var Je = t("tKUM"),
                ze = t("ztXJ"),
                $e = function(e, n) {
                    var t = function(t) {
                        var r = ze.s.Provider;
                        return y().createElement(r, {
                            value: n.lang
                        }, y().createElement(e, Object.assign({}, t)))
                    };
                    return t.displayName = "LanguageWrapper", t
                };
            const Ye = (0, u.l1)({
                appContext: function(e, n) {
                    n.req;
                    e.lang = (0, Je.getLanguage)()
                },
                appComponent: function(e, n) {
                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", $e(e, n));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            }, {
                name: "@pika/plugin-language"
            });
            var Xe = t("YvF5"),
                Qe = t("uA3k"),
                Ze = (t("888e"), t("nG1z"), t("rsqs"));
            t("wcIl");
            var en = t("qjHo");

            function nn() {
                var e = (0, d.PC)()[en.x];
                if (e) return e
            }
            var tn = !1,
                rn = function(e, n, t) {
                    var r = t.i18n.namespaces || [],
                        o = function(t) {
                            var o = (0, l.A)((0, m.useReducer)((function(e) {
                                    return e + 1
                                }), 0), 2),
                                i = o[0],
                                u = o[1],
                                c = (0, m.useRef)(!0),
                                p = function() {
                                    c.current && u()
                                };
                            (0, m.useEffect)((function() {
                                var e = n.i18n.i18nextIns;
                                return e.store.on("added", p),
                                    function() {
                                        e.store.off("added", p)
                                    }
                            }), []), (0, m.useEffect)((function() {
                                var e, t = (0, W.K)("i18nNamespaces", []);
                                t.length && !tn && (e = t, (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                                    var o, i, u, l, f, g, h, v, m, y, b, A;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (o = (0, d.PC)()[en.x], i = (0, W.K)("i18nRenderAsNsKey", !1), !o) {
                                                    t.next = 25;
                                                    break
                                                }
                                                return u = n.lang, t.next = 5, Promise.all(e.map((function(e) {
                                                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                                        var t, s, c, l;
                                                        return a().wrap((function(n) {
                                                            for (;;) switch (n.prev = n.next) {
                                                                case 0:
                                                                    return t = r.find((function(n) {
                                                                        var t = n.split("@");
                                                                        return t[t.length - 1] === e
                                                                    })), t && (c = t.split("@")).length > 1 && (s = c[0]), n.prev = 3, n.next = 6, (0, Xe.A)({
                                                                        basePath: o,
                                                                        lng: u,
                                                                        ns: e,
                                                                        customPath: s,
                                                                        enable2NsKey: i
                                                                    });
                                                                case 6:
                                                                    return l = n.sent, n.abrupt("return", {
                                                                        ns: e,
                                                                        resourceBundle: l
                                                                    });
                                                                case 10:
                                                                    n.prev = 10, n.t0 = n.catch(3), console.error("Failed to fetch i18n resource", n.t0);
                                                                case 13:
                                                                    return n.abrupt("return", {
                                                                        ns: e,
                                                                        resourceBundle: null
                                                                    });
                                                                case 14:
                                                                case "end":
                                                                    return n.stop()
                                                            }
                                                        }), n, null, [
                                                            [3, 10]
                                                        ])
                                                    })))
                                                })));
                                            case 5:
                                                for (l = t.sent, c.current = !1, f = !0, g = !1, h = void 0, t.prev = 8, v = l[Symbol.iterator](); !(f = (m = v.next()).done); f = !0) y = m.value, b = y.ns, (A = y.resourceBundle) && Object.keys(A).length ? n.i18n.i18nextIns.addResourceBundle(u, b, A, !1, !0) : console.log("Resource bundle is empty", u, b);
                                                t.next = 16;
                                                break;
                                            case 12:
                                                t.prev = 12, t.t0 = t.catch(8), g = !0, h = t.t0;
                                            case 16:
                                                t.prev = 16, t.prev = 17, f || null == v.return || v.return();
                                            case 19:
                                                if (t.prev = 19, !g) {
                                                    t.next = 22;
                                                    break
                                                }
                                                throw h;
                                            case 22:
                                                return t.finish(19);
                                            case 23:
                                                return t.finish(16);
                                            case 24:
                                                c.current = !0, p();
                                            case 25:
                                                tn = !0;
                                            case 26:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t, null, [
                                        [8, 12, 16, 24],
                                        [17, , 19, 23]
                                    ])
                                }))))
                            }), []);
                            var f = (0, m.useMemo)((function() {
                                return {
                                    i18n: n.i18n,
                                    __count__: i
                                }
                            }), [i]);
                            return y().createElement(Qe.y.Provider, {
                                value: f
                            }, y().createElement(e, Object.assign({}, t)))
                        };
                    return o.displayName = "I18nAppWrapper", o
                };
            const on = _bne.device;
            const an = function(e) {
                return (0, u.yO)({})
            };
            var sn = t("iyUK");
            var un, cn = !1;
            const ln = _bne.utils,
                dn = (0, m.createContext)({});
            const pn = function(e) {
                var n = e.pathPrefix,
                    t = e.isRegionMode,
                    r = e.level2Domain,
                    o = e.children,
                    i = (0, s.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "children"]);
                return y().createElement(dn.Provider, (0, s.__assign)({
                    value: {
                        pathPrefix: n,
                        isRegionMode: t,
                        level2Domain: r
                    },
                    children: o
                }, i))
            };

            function fn() {
                throw new Error("@desktop/runtime module is only available in the Binance desktop environment. Please check if it is being used in a server-side rendering (SSR) environment.")
            }
            const gn = {
                    isRunningInDesktop: !1,
                    isRunningInDesktopBrowser: !1,
                    desktop: {
                        get version() {
                            return fn()
                        },
                        get env() {
                            return fn()
                        },
                        closeCurrentWindow: fn,
                        getSettings: fn,
                        setSettings: fn,
                        openExternal: fn,
                        openWindow: fn,
                        showNotification: fn
                    },
                    app: {
                        getCurrent: fn,
                        checkForUpdates: fn
                    },
                    user: {
                        setTemporaryToken: fn,
                        login: fn,
                        logout: fn,
                        getUser: fn
                    },
                    trading: {
                        getCurrentLayout: fn
                    },
                    env: {
                        common: {}
                    },
                    bridge: {
                        desktopBridge: {},
                        setBridge: () => {}
                    },
                    on: () => {},
                    off: fn,
                    emit: fn,
                    all: fn
                },
                hn = window.__DESKTOP_RUNTIME_API__ ? window.__DESKTOP_RUNTIME_API__ : gn,
                vn = hn.isRunningInDesktop,
                mn = hn.isRunningInDesktopBrowser;
            hn.desktop, hn.app, hn.user, hn.trading, hn.env, hn.on, hn.off, hn.emit, hn.bridge;
            var yn = function(e, n) {
                var t = function(t) {
                    return n.ssrData ? y().createElement(pn, Object.assign({}, n.ssrData), y().createElement(e, Object.assign({}, t))) : (console.log("[@pika/plugin-data-provider] ssrData is not found in appContext"), y().createElement(e, Object.assign({}, t)))
                };
                return t.displayName = "DataProviderWrapper", t
            };

            function bn() {
                return vn && !mn ? {
                    lang: (0, Je.getLanguage)(),
                    pathPrefix: (0, Je.getPathPrefix)(),
                    level2Domain: (0, ln.getLevelDomain)(2),
                    isRegionMode: !1
                } : (0, W.K)("ssrData")
            }
            const An = (0, u.yO)({
                appContext: function(e, n) {
                    n.req;
                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                        return a().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    e.ssrData || (e.ssrData = bn());
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))
                },
                appComponent: function(e, n) {
                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                        return a().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", yn(e, n));
                                case 1:
                                case "end":
                                    return t.stop()
                            }
                        }), t)
                    })))
                }
            });
            var In = t("OFK0"),
                Mn = (0, In.A)((function() {
                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function e() {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, _({
                                        remainingTime: 49,
                                        timeout: 1e4
                                    });
                                case 2:
                                    return e.next = 4, t.e(428).then(t.bind(t, "d9Lu"));
                                case 4:
                                    return e.abrupt("return", e.sent.GlobalJSLoaderContent);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }), {
                    ssr: !1
                }),
                xn = (0, In.A)((function() {
                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function e() {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, _({
                                        remainingTime: 49,
                                        timeout: 1e4
                                    });
                                case 2:
                                    return e.next = 4, t.e(766).then(t.bind(t, "ItEv"));
                                case 4:
                                    return e.abrupt("return", e.sent.GlobalJSLoader);
                                case 5:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }), {
                    ssr: !1
                }),
                Cn = function(e, n) {
                    var t = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = n.useNewHeaderFooter,
                            o = n.globalJSDisclaimerConfig,
                            i = n.staticHost;
                        return y().createElement(y().Fragment, null, r ? y().createElement(Mn, {
                            disclaimerConfig: o
                        }) : y().createElement(xn, {
                            staticHost: i
                        }), y().createElement(e, Object.assign({}, t)))
                    };
                    return t.displayName = "CommonResourceAppWrapper", t
                };
            var kn = t("uHCZ"),
                wn = t("HS2I"),
                En = function(e, n) {
                    return "string" === typeof e ? new RegExp(e).test(n) : !!e
                },
                _n = function(e, n) {
                    var t = function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = (0, b.K7)(),
                            o = r.pathname,
                            i = (0, l.A)((0, m.useState)(En(n.useHeader, o)), 2),
                            a = i[0],
                            s = i[1],
                            u = (0, l.A)((0, m.useState)(En(n.useFooter, o)), 2),
                            c = u[0],
                            d = u[1],
                            p = (0, l.A)((0, m.useState)(En(n.useUserCenterSidebar, o)), 2),
                            f = p[0],
                            g = p[1];
                        (0, m.useLayoutEffect)((function() {
                            s(En(n.useHeader, o)), d(En(n.useFooter, o)), g(En(n.useUserCenterSidebar, o))
                        }), [o]);
                        var h = y().useMemo((function() {
                            var e = "";
                            return a || (e = "".concat(e, " #__APP_HEADER { display: none; }")), c || (e = "".concat(e, " #__APP_FOOTER { display: none; }")), f || (e = "".concat(e, " #__APP_SIDEBAR { display: none; width: 100%; }")), e
                        }), [a, c, f]);
                        return (0, m.useEffect)((function() {
                            n.ssr || (0, wn.configInitial)({
                                url: n.apiHost,
                                onWidgetConfig: n.onWidgetConfig,
                                onI18n: n.onI18n,
                                onCommonEnv: n.onCommonEnv,
                                team: n.team
                            })
                        }), []), y().createElement(y().Fragment, null, h && y().createElement(kn.A, null, y().createElement("style", {
                            id: "header-footer-global-style"
                        }, h)), y().createElement(e, Object.assign({}, t)))
                    };
                    return t.displayName = "HeaderFooterAppWrapper", t
                },
                Sn = function(e, n) {
                    var t = e.useHeader,
                        r = e.useFooter,
                        o = e.useUserCenterSidebar,
                        i = e.useCommonWidgetDataSDK;
                    return Object.assign(Object.assign({}, e), {
                        useHeader: En(t, n),
                        useFooter: En(r, n),
                        useSidebar: En(o, n),
                        useCommonWidgetDataSDK: En(i, n)
                    })
                };
            var Tn = t("qK3R"),
                On = function(e) {
                    var n = !1;
                    return function() {
                        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++) r[o] = arguments[o];
                        n || (e.apply(void 0, (0, v.A)(r)), n = !0)
                    }
                },
                Pn = !0,
                Ln = -1,
                Nn = function(e) {
                    var n = x,
                        r = n.PIKA_CLS,
                        o = n.PIKA_FCP,
                        i = n.PIKA_FID,
                        u = n.PIKA_INP,
                        c = n.PIKA_LCP,
                        l = n.PIKA_TTFB,
                        d = (0, Tn.trace)(M);
                    return function() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            p = (0, b.K7)(),
                            f = p.matches,
                            g = (0, m.useMemo)((function() {
                                return k(f)
                            }), [f]);
                        (0, m.useEffect)((function() {
                            _({
                                remainingTime: 49,
                                timeout: 1e4
                            }).then((function() {
                                return t.e(848).then(t.bind(t, "Rvfj"))
                            })).then((function(e) {
                                var n = e.onLCP,
                                    t = e.onFCP,
                                    r = e.onFID,
                                    p = e.onCLS,
                                    f = e.onINP,
                                    g = e.onTTFB;
                                n(On((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                        return a().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.t0 = d, n.t1 = c.name, n.next = 4, A({
                                                        value: e.value
                                                    }, {
                                                        lcp: e.value
                                                    });
                                                case 4:
                                                    n.t2 = n.sent, n.t0.traceChild.call(n.t0, n.t1, n.t2).stop(), setTimeout((function() {
                                                        Pn = !1
                                                    }), 2e3);
                                                case 7:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })))
                                }))), t(On((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                        return a().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.t0 = d, n.t1 = o.name, n.next = 4, A({
                                                        value: e.value
                                                    }, {
                                                        fcp: e.value
                                                    });
                                                case 4:
                                                    n.t2 = n.sent, n.t0.traceChild.call(n.t0, n.t1, n.t2).stop();
                                                case 6:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })))
                                }))), r(On((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                        return a().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.t0 = d, n.t1 = i.name, n.next = 4, A({
                                                        value: e.value
                                                    }, {
                                                        fid: e.value
                                                    });
                                                case 4:
                                                    n.t2 = n.sent, n.t0.traceChild.call(n.t0, n.t1, n.t2).stop();
                                                case 6:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })))
                                }))), p(On((function(e) {
                                    Pn && e.value > Ln && (Ln = e.value)
                                }))), f(On((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                        return a().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.t0 = d, n.t1 = u.name, n.next = 4, A({
                                                        value: e.value
                                                    }, {
                                                        inp: e.value
                                                    });
                                                case 4:
                                                    n.t2 = n.sent, n.t0.traceChild.call(n.t0, n.t1, n.t2).stop();
                                                case 6:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })))
                                }))), g(On((function(e) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                        return a().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return n.t0 = d, n.t1 = l.name, n.next = 4, A({
                                                        value: e.value
                                                    }, {});
                                                case 4:
                                                    n.t2 = n.sent, n.t0.traceChild.call(n.t0, n.t1, n.t2).stop();
                                                case 6:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })))
                                })))
                            })).catch((function(e) {
                                console.error("[Pika] dynamic load failed", e)
                            }))
                        }), []), (0, m.useEffect)((function() {
                            var e = function() {
                                "hidden" === document.visibilityState && (v(), h())
                            };
                            return document.addEventListener("visibilitychange", e),
                                function() {
                                    return document.removeEventListener("visibilitychange", e)
                                }
                        }), []);
                        var h = function() {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function e() {
                                    return a().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (e.t0 = Ln >= 0, !e.t0) {
                                                    e.next = 9;
                                                    break
                                                }
                                                return e.t1 = d, e.t2 = r.name, e.next = 6, A({
                                                    value: Ln
                                                }, {
                                                    cls: Ln
                                                });
                                            case 6:
                                                e.t3 = e.sent, e.t1.traceChild.call(e.t1, e.t2, e.t3).stop(), Ln = -1;
                                            case 9:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))
                            },
                            v = (0, m.useCallback)(On((function() {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function e() {
                                    var n, t, r, o, i;
                                    return a().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                if (o = null === (r = null === (t = null === (n = window.performance) || void 0 === n ? void 0 : n.getEntriesByType) || void 0 === t ? void 0 : t.call(n, "navigation")) || void 0 === r ? void 0 : r[0]) {
                                                    e.next = 4;
                                                    break
                                                }
                                                return e.abrupt("return");
                                            case 4:
                                                return i = {
                                                    dns: o.domainLookupEnd - o.domainLookupStart,
                                                    tcp: o.connectEnd - o.connectStart,
                                                    tls: o.requestStart - o.secureConnectionStart,
                                                    ttfb: o.responseStart - o.requestStart,
                                                    ddt: o.responseEnd - o.responseStart,
                                                    dpt: o.domInteractive - o.responseStart,
                                                    ldn: o.domComplete - o.startTime,
                                                    drt: o.loadEventStart - o.domInteractive
                                                }, Object.keys(i).forEach((function(e) {
                                                    i[e] <= 0 && delete i[e]
                                                })), i.t = "PAGE", e.t0 = d, e.next = 10, A({}, i);
                                            case 10:
                                                e.t1 = e.sent, e.t0.traceChild.call(e.t0, "PAGE", e.t1).stop();
                                            case 12:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })))
                            })), []),
                            A = function(e, n) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", Object.assign(Object.assign({}, e), {
                                                    __rootAttrs: Object.assign(n, {
                                                        ts: Date.now(),
                                                        path: g
                                                    }),
                                                    __flush: !0
                                                }));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            };
                        return y().createElement(e, Object.assign({}, n))
                    }
                };
            var Rn = function(e) {
                return function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, b.rd)();
                    return (0, m.useEffect)((function() {
                        return t.listen((function() {
                            if (location.search) {
                                var e = location.search.trim().replace(/^[?#&]/, "");
                                if (e) {
                                    var n = new RegExp(window.gaFilterExp || "^(email|mobile)"),
                                        t = e.split("&");
                                    t = t.filter((function(e) {
                                        return !n.test(e)
                                    }));
                                    var r = t.join("&");
                                    "function" === typeof window.ga && window.ga("set", "location", "".concat(location.origin + location.pathname, "?").concat(r))
                                }
                            } else "function" === typeof window.ga && window.ga("set", "location", location.href)
                        }))
                    }), []), y().createElement(e, Object.assign({}, n))
                }
            };
            const Dn = (0, u.yO)({
                appComponent: function(e) {
                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                        return a().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", (window._bn_reporter = window._bn_reporter || [], window._bn_reporter.push({
                                        key: "loadGAScript",
                                        data: {}
                                    }), Rn(e)));
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))
                }
            });
            (0, _bne.utm.writeUTMtoCookie)();
            const Fn = (0, u.yO)({});
            var Bn = "sensorsdata2015jssdkcross",
                Gn = document.cookie.split("; ");
            (function(e) {
                return Gn.filter((function(n) {
                    return n.startsWith("".concat(e, "="))
                })).length > 1
            })(Bn) && function(e) {
                var n = location.hostname.split(".");
                2 === n.length && n.unshift("www"), document.cookie = "".concat(e, "=; expires=Thu, 01 Jan 1970 00:00:00 GMT; domain=.").concat(n.join("."), "; path=/")
            }(Bn);
            const jn = (0, u.yO)({});
            var Hn = function(e) {
                return function() {
                    var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return m.useEffect((function() {
                        _({
                            remainingTime: 49,
                            timeout: 1e4
                        }).then((function() {
                            return t.e(317).then(t.bind(t, "r/AF"))
                        })).then((function(e) {
                            (0, e.syncLocalDfp)({
                                t: "binance",
                                domain: ""
                            })
                        })).catch((function(e) {
                            console.error("[Pika] dynamic load failed", e)
                        }))
                    }), []), m.createElement(e, Object.assign({}, n))
                }
            };
            const Un = (0, u.yO)({
                appComponent: function(e) {
                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                        return a().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", Hn(e));
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))
                }
            });
            var qn, Wn = t("NoXm"),
                Vn = t("oVQP"),
                Kn = new Map,
                Jn = t("MEAY"),
                zn = {
                    dark: Jn.zd,
                    light: Jn.bK
                },
                $n = "theme",
                Yn = "light",
                Xn = Yn,
                Qn = Xn;
            Qn = (null !== (qn = T($n)) && void 0 !== qn ? qn : Xn).split("_")[0];
            var Zn = function(e, n, t) {
                return function() {
                    var r, o = (0, l.A)((0, Wn.useCacheState)($n, Qn), 1)[0],
                        i = null === t || void 0 === t ? void 0 : t.detectColorMode,
                        a = null === t || void 0 === t ? void 0 : t.useNewHeaderFooter,
                        u = (null === n || void 0 === n ? void 0 : n.uikit) || {},
                        c = u.color,
                        d = u.isRedUpGreenDown,
                        p = u.theme,
                        f = null === (r = null === n || void 0 === n ? void 0 : n.ua) || void 0 === r ? void 0 : r.platform.isMobile,
                        g = a ? o : p,
                        h = m.useMemo((function() {
                            var e = g === Yn ? Vn.BB : Vn.XT,
                                n = i ? function(e) {
                                    var n = e.theme,
                                        t = e.isRedUpGreenDown,
                                        r = e.colorMode,
                                        o = ["fresh" !== r && r ? r : "", "true" === t ? "reverse" : ""].filter(Boolean);
                                    return zn[n][o.join("-")] || {}
                                }({
                                    theme: g,
                                    isRedUpGreenDown: d,
                                    colorMode: c
                                }) : {};
                            f && (e.mobile && (n = Object.assign(Object.assign({}, n), e.mobile)), n.mobile && (n = Object.assign(Object.assign({}, n), n.mobile)));
                            var t = Object.assign(Object.assign({}, e), n);
                            t.mobile;
                            return function(e) {
                                var n = JSON.stringify(e);
                                if (Kn.has(n)) return Kn.get(n);
                                var t = e.hasOwnProperty("BasicBg"),
                                    r = e.hasOwnProperty("PrimaryText"),
                                    o = "body { ".concat(Object.entries(e).map((function(e) {
                                        var n = (0, l.A)(e, 2),
                                            o = n[0],
                                            i = n[1];
                                        return "BasicBg" === o && t ? "--color-".concat(o, ": ").concat(i, "; background-color: var(--color-").concat(o, ");") : "PrimaryText" === o && r ? "--color-".concat(o, ": ").concat(i, "; color: var(--color-").concat(o, ");") : "--color-".concat(o, ": ").concat(i, ";")
                                    })).join(" "), " }");
                                return Kn.set(n, o), o
                            }((0, s.__rest)(t, ["mobile"]))
                        }), [g, f, c, d, i]);
                    return m.createElement(m.Fragment, null, m.createElement(kn.A, null, m.createElement("style", {
                        id: "webstudio-universal-uikit-colors"
                    }, h)), m.createElement(e, null))
                }
            };
            var et = {
                    plugin: function() {
                        return (0, u.yO)({
                            appComponent: function(e) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.abrupt("return", B(e));
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))
                            }
                        })
                    }
                },
                nt = {
                    plugin: function() {
                        return (0, u.Uu)({
                            appComponent: function(e, n) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.abrupt("return", Ke(e, n));
                                            case 1:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            },
                            appContext: function(e) {
                                var n;
                                e.redux || (n = (0, W.K)("redux", n), e.redux = function(e) {
                                    var n = e.initialState,
                                        t = e.ctx;
                                    return We(n, Object.assign(Object.assign({}, t), {
                                        isServer: !1
                                    }))
                                }({
                                    initialState: n,
                                    ctx: e
                                }))
                            }
                        }, {
                            name: "@pika/plugin-redux"
                        })
                    }
                },
                tt = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appComponent: function(n, t) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function r() {
                                    return a().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.abrupt("return", rn(n, t, e));
                                            case 1:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            },
                            appContext: function(n, t) {
                                var r = t.req,
                                    o = t.router;
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                                    var i, u, c, d, p, f, g, h, v;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (i = n.lang, u = e.i18n, c = u.namespaces, d = void 0 === c ? [] : c, p = u.keySeparator, f = u.nsSeparator, g = nn(), n.i18nBasePath = g, h = (0, Qe.T)({
                                                        namespaces: d,
                                                        basePath: g,
                                                        keySeparator: p,
                                                        nsSeparator: f
                                                    }), n.i18n = h, !o.beforeResolve) {
                                                    t.next = 9;
                                                    break
                                                }
                                                n.i18nPromise = new Promise((function(e) {
                                                    v = e
                                                })), o.beforeResolve((function(e, t, o) {
                                                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function e() {
                                                        var t, s, u, c, d, p;
                                                        return a().wrap((function(e) {
                                                            for (;;) switch (e.prev = e.next) {
                                                                case 0:
                                                                    e.prev = 0, e.next = 11;
                                                                    break;
                                                                case 7:
                                                                    s = e.sent, n.collectionKeys = t, s && ((0, Ze.pu)(r) ? (u = s[i], c = (0, Ze.Zu)(u), n.i18nResource = (0, ae.A)({}, i, c), Object.entries(c).forEach((function(e) {
                                                                        var n = (0, l.A)(e, 2),
                                                                            t = n[0],
                                                                            r = n[1];
                                                                        h.i18nextIns.addResources(i, t, r)
                                                                    })), n.i18nRenderAsNsKey = !0) : n.i18nResource = s), e.next = 16;
                                                                    break;
                                                                case 11:
                                                                    if (h.i18nextIns.isInitialized) {
                                                                        e.next = 16;
                                                                        break
                                                                    }
                                                                    return (d = (0, W.K)("i18nResource")) && !d[i] && ((p = Object.keys(d)).length ? d[i] = d[p[0]] : d[i] = {}), e.next = 16, h.init({
                                                                        lng: i,
                                                                        resources: d
                                                                    });
                                                                case 16:
                                                                    e.next = 21;
                                                                    break;
                                                                case 18:
                                                                    e.prev = 18, e.t0 = e.catch(0), console.error("i18n runtime error", e.t0);
                                                                case 21:
                                                                    v(), o();
                                                                case 22:
                                                                case "end":
                                                                    return e.stop()
                                                            }
                                                        }), e, null, [
                                                            [0, 18]
                                                        ])
                                                    })))
                                                })), t.next = 13;
                                                break;
                                            case 9:
                                                if (t.t0 = h.i18nextIns.isInitialized, t.t0) {
                                                    t.next = 13;
                                                    break
                                                }
                                                return t.next = 13, h.init({
                                                    lng: i
                                                });
                                            case 13:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            }
                        }, {
                            name: "@pika/plugin-i18n",
                            after: ["@pika/plugin-language"],
                            before: ["shuvi-custom-app"]
                        })
                    },
                    options: '{"i18n":{"namespaces":["mini-notification-center","Service-group","odin","binance-chat"]},"i18nBasePublic":"https://bin.bnbstatic.com/api/i18n/-/web/cms"}'
                },
                rt = {
                    plugin: function() {
                        return (0, u.yO)({
                            appContext: function(e, n) {
                                n.req;
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                    var t;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                t = "desktop", "undefined" !== typeof navigator && navigator.userAgent && (t = null === navigator || void 0 === navigator ? void 0 : navigator.userAgent), e.ua = (0, on.getDevice)(t);
                                            case 3:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))
                            }
                        })
                    }
                },
                ot = {
                    plugin: function() {
                        return (0, u.yO)({
                            init: function() {
                                var e = this;
                                if (!cn) {
                                    cn = !0;
                                    var n = function() {
                                        var e = (0, d.PC)().STATIC_HOST;
                                        return e ? {
                                            staticHost: e
                                        } : (console.error("[@pika/plugin-bids-interceptor] STATIC_HOST is not defined in runtimeConfig"), null)
                                    }();
                                    n && G._config.responseInterceptors.unshift((function(r) {
                                        for (var o = arguments.length, i = new Array(o > 1 ? o - 1 : 0), u = 1; u < o; u++) i[u - 1] = arguments[u];
                                        return (0, s.__awaiter)(e, void 0, void 0, a().mark((function e() {
                                            var o;
                                            return a().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, (0, sn.Wv)(r);
                                                    case 2:
                                                        if (!e.sent) {
                                                            e.next = 16;
                                                            break
                                                        }
                                                        if (!un) {
                                                            e.next = 7;
                                                            break
                                                        }
                                                        return e.next = 6, un.apply(void 0, [r].concat((0, v.A)(i)));
                                                    case 6:
                                                    case 15:
                                                        return e.abrupt("return", e.sent);
                                                    case 7:
                                                        return e.next = 9, _();
                                                    case 9:
                                                        return e.next = 11, t.e(97).then(t.bind(t, "LtWY"));
                                                    case 11:
                                                        return o = e.sent, un = o.BIDSInterceptor(n), e.next = 15, un.apply(void 0, [r].concat((0, v.A)(i)));
                                                    case 16:
                                                        return e.abrupt("return", r);
                                                    case 17:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })))
                                    }))
                                }
                            }
                        }, {
                            name: "@pika/plugin-bids-interceptor"
                        })
                    }
                },
                it = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appComponent: function(n, t) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                                    var r;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return r = (0, d.PC)(), t.abrupt("return", r.API_HOST ? _n(n, Object.assign(Object.assign({}, e), {
                                                    apiHost: r.API_HOST
                                                })) : (console.error("[@pika/plugin-header-footer] API_HOST is not set."), n));
                                            case 2:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            },
                            appContext: function(n, t) {
                                var r = t.req;
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (t.t0 = !1, !t.t0) {
                                                    t.next = 4;
                                                    break
                                                }
                                                return t.next = 4, undefined({
                                                    ctx: n,
                                                    req: r,
                                                    options: Sn(e, null === r || void 0 === r ? void 0 : r.pathname)
                                                });
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            }
                        }, {
                            name: "@pika/plugin-header-footer",
                            after: ["@pika/plugin-http"]
                        })
                    },
                    options: '{"ssr":true,"widgetExtends":{"useStickyHeader":true},"useHeader":"^(?!.*\\/messages\\/serviceGroup)(?!.*\\/messages\\/serviceGroupSetting)(?!.*\\/messages\\/serviceGroupMembers)(?!.*\\/messages\\/serviceGroupMemberProfile)(?!.*\\/messages\\/pinnedMessages)(?!.*\\/messages\\/searchChatHistory).*$","useFooter":"^(?!.*\\/messages\\/serviceGroup)(?!.*\\/messages\\/serviceGroupSetting)(?!.*\\/messages\\/serviceGroupMembers)(?!.*\\/messages\\/serviceGroupMemberProfile)(?!.*\\/messages\\/pinnedMessages)(?!.*\\/messages\\/searchChatHistory).*$"}'
                },
                at = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appComponent: function(e) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return n.abrupt("return", Nn(e));
                                            case 1:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))
                            }
                        })
                    }
                },
                st = {
                    plugin: function() {
                        return (0, u.yO)({
                            appComponent: function(e) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function n() {
                                    var t, r;
                                    return a().wrap((function(n) {
                                        for (;;) switch (n.prev = n.next) {
                                            case 0:
                                                return t = (0, d.PC)(), (r = t.STATIC_HOST) && (window._bn_reporter = window._bn_reporter || [], window._bn_reporter.push({
                                                    key: "falconInit",
                                                    data: {
                                                        host: r
                                                    }
                                                })), n.abrupt("return", e);
                                            case 2:
                                            case "end":
                                                return n.stop()
                                        }
                                    }), n)
                                })))
                            }
                        })
                    }
                },
                ut = {
                    plugin: function(e) {
                        return (0, u.yO)({
                            appContext: function(n, t) {
                                var r = t.req;
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                                    var o, i, s, u;
                                    return a().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                if (null === e || void 0 === e ? void 0 : e.injectColorsInHead) {
                                                    t.next = 2;
                                                    break
                                                }
                                                return t.abrupt("return");
                                            case 2:
                                                null === r || void 0 === r ? void 0 : r.cookies, null === r || void 0 === r ? void 0 : r.headers, u = (0, W.K)("_uikit", {
                                                    theme: Qn,
                                                    color: T("color"),
                                                    isRedUpGreenDown: T("isRedUpGreenDown")
                                                }), o = u.theme, (null === e || void 0 === e ? void 0 : e.detectColorMode) && (i = u.color, s = u.isRedUpGreenDown), o && !O(o) && (o = Xn), i && !O(i) && (i = void 0), s && !O(s) && (s = void 0), n.uikit = Object.assign(Object.assign({}, n.uikit), {
                                                    theme: o,
                                                    color: i,
                                                    isRedUpGreenDown: s
                                                });
                                            case 6:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                })))
                            },
                            appComponent: function(n, t) {
                                return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function r() {
                                    return a().wrap((function(r) {
                                        for (;;) switch (r.prev = r.next) {
                                            case 0:
                                                return r.abrupt("return", (null === e || void 0 === e ? void 0 : e.injectColorsInHead) ? Zn(n, t, e) : n);
                                            case 1:
                                            case "end":
                                                return r.stop()
                                        }
                                    }), r)
                                })))
                            }
                        })
                    },
                    options: '{"injectColorsInHead":true,"useNewHeaderFooter":{}}'
                },
                ct = {
                    plugin0: {
                        plugin: r.A
                    },
                    plugin1: {
                        plugin: o.A
                    },
                    plugin2: {
                        plugin: h,
                        options: '{"sensorsServerHost":"https://sensors.binance.cloud/sa?project=binance","projectName":"mini-notification-center"}'
                    },
                    plugin3: {
                        plugin: D,
                        options: '{"serverInjectSDK":true,"sentryDsn":"https://cdd57fb982a04b7f9f14ebadb561f648@o529943.ingest.sentry.io/4504831018729472","sentryEnv":"prod","packageName":"mini-notification-center","sentryReleaseVersion":"20250425-2ba2640f-229524","sampleRate":0.01,"pikaVersion":"0.3.66","ssr":true,"analyticsId":"mini-notification-center,COM,clowvclg24805790u4getsfqhkk","appTarget":"web"}'
                    },
                    plugin4: et,
                    plugin5: {
                        plugin: q
                    },
                    plugin6: nt,
                    plugin7: {
                        plugin: Ye,
                        options: '{"addHtmlAttr":true}'
                    },
                    plugin8: tt,
                    plugin9: {
                        plugin: function(e) {
                            return (0, u.yO)({
                                appContext: function(e, n) {
                                    n.router;
                                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function e() {
                                        return a().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                case 2:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })))
                                }
                            }, {
                                name: "@pika/plugin-smart-route"
                            })
                        },
                        options: '{"getPathPrefixFromClientSide":false}'
                    },
                    plugin10: rt,
                    plugin11: {
                        plugin: an,
                        options: '{"reactAndReactDomSuffix":"production.min.18.2.0","appTarget":"web"}'
                    },
                    plugin12: ot,
                    plugin13: {
                        plugin: An
                    },
                    plugin14: {
                        plugin: function(e) {
                            return (0, u.yO)({
                                appComponent: function(n) {
                                    return (0, s.__awaiter)(void 0, void 0, void 0, a().mark((function t() {
                                        var r;
                                        return a().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return r = (0, d.PC)(), t.abrupt("return", r.STATIC_HOST ? Cn(n, Object.assign(Object.assign({}, e), {
                                                        staticHost: r.STATIC_HOST
                                                    })) : (console.warn("[@pika/plugin-common-resource] STATIC_HOST is not set."), n));
                                                case 2:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                }
                            })
                        },
                        options: '{"useNewHeaderFooter":{}}'
                    },
                    plugin15: it,
                    plugin16: at,
                    plugin17: {
                        plugin: Dn,
                        options: '{"queryParamsFilter":[]}'
                    },
                    plugin18: {
                        plugin: Fn
                    },
                    plugin19: {
                        plugin: jn
                    },
                    plugin20: st,
                    plugin21: {
                        plugin: Un
                    },
                    plugin22: ut
                }
        },
        etBY: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => r
            });
            const r = {
                API_HOST: "https://www.binance.com",
                SENTRY_ENV: "prod",
                SENTRY_DSN: "https://cdd57fb982a04b7f9f14ebadb561f648@o529943.ingest.sentry.io/4504831018729472",
                SITE_HOST: "https://www.binance.com",
                STATIC_HOST: "https://bin.bnbstatic.com",
                STATIC_HOST_SHARE: "https://bin.bnbstatic.com",
                I18N_BASE_PUBLIC: "https://bin.bnbstatic.com/api/i18n/-/web/cms",
                I18N_BASE_PRIVATE: "https://bin.bnbstatic.com/api/i18n/-/web/cms",
                WS_HOST_TEMPLATE: "wss://stream.{{rootDomain}}",
                COMMIT_HEAD: "2ba2640f918500fc7b776aa7eb57c2a4450d7ba5",
                SENSORS_SERVER_HOST: "https://sensors.binance.cloud/sa?project=binance"
            }
        },
        accZ: (e, n, t) => {
            "use strict";
            t.d(n, {
                a: () => r
            });
            var r = "browser"
        },
        "3cKB": (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => r
            });
            const r = [{
                __import__: function() {
                    return Promise.all([t.e(593), t.e(253), t.e(520), t.e(880), t.e(499), t.e(247)]).then(t.bind(t, "OLMx"))
                },
                __resolveWeak__: function() {
                    return ["OLMx"]
                },
                path: "/",
                id: "c6aa",
                children: [{
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(397)]).then(t.bind(t, "xU3M"))
                    },
                    __resolveWeak__: function() {
                        return ["xU3M"]
                    },
                    path: "messages/channelList/cr490dmmfs1gcm1cc8bg",
                    id: "cce3"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(634)]).then(t.bind(t, "h2Pl"))
                    },
                    __resolveWeak__: function() {
                        return ["h2Pl"]
                    },
                    path: "messages/channelList/cr490hmmfs1gcm1cc8c0",
                    id: "175e"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(937)]).then(t.bind(t, "dFu1"))
                    },
                    __resolveWeak__: function() {
                        return ["dFu1"]
                    },
                    path: "messages/channelList/crajenodr078ak8b1ing",
                    id: "30d3"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(377)]).then(t.bind(t, "mCA/"))
                    },
                    __resolveWeak__: function() {
                        return ["mCA/"]
                    },
                    path: "messages/channelList/crajf6odr078chs2c2j0",
                    id: "4ee0"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(476)]).then(t.bind(t, "uSLI"))
                    },
                    __resolveWeak__: function() {
                        return ["uSLI"]
                    },
                    path: "messages/channelList/:channelId",
                    id: "9e74"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(252)]).then(t.bind(t, "x8FB"))
                    },
                    __resolveWeak__: function() {
                        return ["x8FB"]
                    },
                    path: "messages/chatList",
                    id: "d5b0"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(258)]).then(t.bind(t, "Vm7C"))
                    },
                    __resolveWeak__: function() {
                        return ["Vm7C"]
                    },
                    path: "messages/dashboard",
                    id: "d896"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(499), t.e(270)]).then(t.bind(t, "11iA"))
                    },
                    __resolveWeak__: function() {
                        return ["11iA"]
                    },
                    path: "messages/inmailDetail",
                    id: "139f"
                }, {
                    __import__: function() {
                        return t.e(611).then(t.bind(t, "8FSq"))
                    },
                    __resolveWeak__: function() {
                        return ["8FSq"]
                    },
                    path: "messages/mentionMemberModal",
                    id: "20f4"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(402)]).then(t.bind(t, "qvMS"))
                    },
                    __resolveWeak__: function() {
                        return ["qvMS"]
                    },
                    path: "messages/pinnedMessages",
                    id: "cd53"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(880), t.e(600), t.e(343)]).then(t.bind(t, "haEB"))
                    },
                    __resolveWeak__: function() {
                        return ["haEB"]
                    },
                    path: "messages/preview",
                    id: "cf65"
                }, {
                    __import__: function() {
                        return t.e(145).then(t.bind(t, "ncIz"))
                    },
                    __resolveWeak__: function() {
                        return ["ncIz"]
                    },
                    path: "messages/redPacketCreate",
                    id: "9d2c"
                }, {
                    __import__: function() {
                        return t.e(966).then(t.bind(t, "UAix"))
                    },
                    __resolveWeak__: function() {
                        return ["UAix"]
                    },
                    path: "messages/redPacketDetail",
                    id: "84b3"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(241)]).then(t.bind(t, "L1wM"))
                    },
                    __resolveWeak__: function() {
                        return ["L1wM"]
                    },
                    path: "messages/searchChatHistory",
                    id: "8d8f"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(485)]).then(t.bind(t, "9wsJ"))
                    },
                    __resolveWeak__: function() {
                        return ["9wsJ"]
                    },
                    path: "messages/serviceGroup",
                    id: "6729"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(662)]).then(t.bind(t, "nlFj"))
                    },
                    __resolveWeak__: function() {
                        return ["nlFj"]
                    },
                    path: "messages/serviceGroupMemberProfile",
                    id: "8eb6"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(968)]).then(t.bind(t, "q2MT"))
                    },
                    __resolveWeak__: function() {
                        return ["q2MT"]
                    },
                    path: "messages/serviceGroupMembers",
                    id: "4e5a"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(364), t.e(499), t.e(927)]).then(t.bind(t, "MSZD"))
                    },
                    __resolveWeak__: function() {
                        return ["MSZD"]
                    },
                    path: "messages/serviceGroupSetting",
                    id: "4439"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(836)]).then(t.bind(t, "tPWV"))
                    },
                    __resolveWeak__: function() {
                        return ["tPWV"]
                    },
                    path: "messages/systemMessageList",
                    id: "7557"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(880), t.e(600), t.e(364), t.e(499), t.e(17)]).then(t.bind(t, "vh4v"))
                    },
                    __resolveWeak__: function() {
                        return ["vh4v"]
                    },
                    path: "messages",
                    id: "2e9f"
                }, {
                    __import__: function() {
                        return Promise.all([t.e(253), t.e(520), t.e(455), t.e(82)]).then(t.bind(t, "ilyH"))
                    },
                    __resolveWeak__: function() {
                        return ["ilyH"]
                    },
                    path: "service-group-landing",
                    id: "36e5"
                }]
            }]
        },
        "6FIE": (e, n, t) => {
            "use strict";
            var r = t("Zu0i");
            t.o(r, "fetch") && t.d(n, {
                fetch: function() {
                    return r.fetch
                }
            }), t.o(r, "get") && t.d(n, {
                get: function() {
                    return r.get
                }
            }), t.o(r, "post") && t.d(n, {
                post: function() {
                    return r.post
                }
            })
        },
        ZSsA: (e, n, t) => {
            "use strict";
            t.d(n, {
                x6: () => c,
                s9: () => u
            });
            var r = t("VP0d"),
                o = t("DTvD"),
                i = t("hRh4"),
                a = t("h+kG"),
                s = t("uA3k"),
                u = function(e) {
                    var n = (0, o.useContext)(s.y),
                        t = n.i18n,
                        i = n.__count__,
                        a = t.i18nextIns,
                        u = (0, r.A)((0, o.useState)(a.language), 2),
                        c = u[0],
                        l = u[1],
                        d = (0, o.useCallback)((function(e) {
                            return e
                        }), []),
                        p = (0, o.useMemo)((function() {
                            return a.getFixedT(c, e)
                        }), [c, e, i]);
                    return (0, o.useEffect)((function() {
                        return a.isInitialized ? e && (Array.isArray(e) ? e : [e]).forEach((function(e) {
                                a.hasResourceBundle(c, e) || a.loadNamespaces(e)
                            })) : t.init(), a.on("languageChanged", l),
                            function() {
                                a.off("languageChanged", l)
                            }
                    }), []), {
                        locale: c,
                        language: c,
                        setLocale: t.setLocale,
                        t: a.isInitialized ? p : d,
                        i18n: a
                    }
                },
                c = function(e) {
                    var n = (0, o.useContext)(s.y).i18n;
                    return (0, i.Trans)(Object.assign({
                        i18n: n.i18nextIns.isInitialized ? n.i18nextIns : void 0
                    }, e))
                };
            if (null === a.OW || void 0 === a.OW ? void 0 : a.OW.PRERENDER);
            s.y.Provider, t("rsqs"), t("ztXJ")
        },
        NebQ: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                __esModule: () => r.B
            });
            var r = t("c2++")
        },
        "c+qD": (e, n, t) => {
            "use strict";
            var r, o, i;
            t.d(n, {
                    C9: () => I,
                    Ku: () => s,
                    M2: () => c,
                    Qh: () => C,
                    V4: () => l,
                    WD: () => g,
                    Wr: () => r,
                    aX: () => p,
                    b4: () => h,
                    c$: () => f,
                    cM: () => i,
                    cZ: () => y,
                    gk: () => d,
                    is: () => o,
                    m0: () => x,
                    mS: () => b,
                    qH: () => v,
                    r_: () => u,
                    sI: () => k,
                    um: () => M,
                    wh: () => m,
                    xb: () => A
                }),
                function(e) {
                    e.GROUP_TEXT = "GROUP_TEXT", e.GROUP_FILE = "GROUP_FILE", e.GROUP_CHANGE = "GROUP_CHANGE", e.CHANNEL_TEXT = "CHANNEL_TEXT", e.CHANNEL_FILE = "CHANNEL_FILE", e.CHANNEL_REPLY = "CHANNEL_REPLY", e.CHANNEL_DELETE_MSG = "CHANNEL_DELETE_MSG", e.CHANNEL_RATE_LIMIT = "CHANNEL_RATE_LIMIT", e.CHANNEL_READ_ACK = "CHANNEL_READ_ACK", e.CHANNEL_PIN_MSG = "CHANNEL_PIN_MSG", e.CHANNEL_UNPIN_MSG = "CHANNEL_UNPIN_MSG", e.CHANNEL_RED_PACKET = "CHANNEL_RED_PACKET", e.CHANNEL_RED_PACKET_RECEIVED = "CHANNEL_RED_PACKET_RECEIVED"
                }(r || (r = {})),
                function(e) {
                    e.Image = "IMAGE", e.ImageSvg = "IMAGE_SVG", e.ImageGif = "IMAGE_GIF", e.Media = "MEDIA", e.Word = "WORD", e.PDF = "PDF", e.Audio = "AUDIO", e.EML = "EML"
                }(o || (o = {})),
                function(e) {
                    e.ImageJpeg = "image/jpeg", e.ImagePng = "image/png", e.ApplicationPdf = "application/pdf", e.VideoQuicktime = "video/quicktime", e.VideoMP4 = "video/mp4", e.AudioMP4 = "audio/mp4"
                }(i || (i = {}));
            var a, s, u, c, l;
            i.ImageJpeg, i.ImagePng, i.ApplicationPdf, i.VideoQuicktime, i.VideoMP4, i.AudioMP4;
            ! function(e) {
                e[e.Sending = 0] = "Sending", e[e.Done = 1] = "Done", e[e.Failed = 2] = "Failed", e[e.Deleted = 3] = "Deleted", e[e.Archived = 4] = "Archived", e[e.Secured = 5] = "Secured"
            }(a || (a = {})),
            function(e) {
                e[e.VIP = 1] = "VIP", e[e.GCC = 2] = "GCC", e[e.GCC_VIP = 3] = "GCC_VIP", e[e.MKT = 4] = "MKT"
            }(s || (s = {})),
            function(e) {
                e.H5 = "A", e.MiniProgram = "B"
            }(u || (u = {})),
            function(e) {
                e.Text = "TEXT", e.Card = "CARD"
            }(c || (c = {})),
            function(e) {
                e.Reward = "reward"
            }(l || (l = {}));
            var d, p = u.MiniProgram,
                f = "/tocs\n";
            ! function(e) {
                e[e.Pin = 1] = "Pin", e[e.Unpin = 2] = "Unpin"
            }(d || (d = {}));
            var g, h = /\b(?:https?|ftp):\/\/[a-z0-9-+&@#\/%?=~_|!:,.;]*[a-z0-9-+&@#\/%=~_|]/gim,
                v = "last-msg-id",
                m = "msg-bottom";
            ! function(e) {
                e.PinnedMessages = "PinnedMessages", e.GroupChannelSetting = "GroupChannelSetting"
            }(g || (g = {}));
            var y, b = "800001",
                A = [r.CHANNEL_DELETE_MSG, r.CHANNEL_UNPIN_MSG],
                I = [r.CHANNEL_DELETE_MSG, r.CHANNEL_PIN_MSG, r.CHANNEL_UNPIN_MSG, r.CHANNEL_RED_PACKET_RECEIVED],
                M = 300,
                x = "9315500001",
                C = "{{DEFAULT_GIFT_WISHES}}";
            ! function(e) {
                e[e.NOT_CONNECTED = 0] = "NOT_CONNECTED", e[e.CONNECTING = 1] = "CONNECTING", e[e.CONNECTED = 2] = "CONNECTED", e[e.RECONNECTING = 3] = "RECONNECTING", e[e.DISCONNECTED = 4] = "DISCONNECTED", e[e.ERROR = 5] = "ERROR"
            }(y || (y = {}));
            var k = -1
        },
        HoNV: (e, n, t) => {
            "use strict";
            t.d(n, {
                aI: () => r,
                k4: () => u,
                mX: () => s,
                ok: () => a
            });
            var r, o = t("DTvD"),
                i = t("ZSsA");
            ! function(e) {
                e.MiniNotificationCenter = "mini-notification-center", e.Odin = "odin", e.BinanceChat = "binance-chat", e.ServiceGroup = "Service-group", e.MainExchangeUI = "main-exui"
            }(r || (r = {}));
            var a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r.MiniNotificationCenter,
                        t = (0, i.s9)(n),
                        a = t.t,
                        s = t.i18n,
                        u = t.locale,
                        c = (0, o.useCallback)((function(n, t) {
                            var r = [e, n].filter((function(e) {
                                return e
                            })).join("-");
                            return a(r, t) || n
                        }), [a, e]);
                    return {
                        t: c,
                        i18n: s,
                        locale: u || s.language || "en"
                    }
                },
                s = function() {
                    var e = (0, i.s9)(r.ServiceGroup),
                        n = e.t,
                        t = e.i18n,
                        a = e.locale;
                    return {
                        t: (0, o.useCallback)((function(e, t) {
                            return n(e, t) || e
                        }), [n]),
                        i18n: t,
                        locale: a || t.language || "en"
                    }
                },
                u = function() {
                    var e = (0, i.s9)(r.MainExchangeUI),
                        n = e.t,
                        t = e.i18n,
                        a = e.locale;
                    return {
                        t: (0, o.useCallback)((function(e, t) {
                            return n(e, t) || e
                        }), [n]),
                        i18n: t,
                        locale: a || t.language || "en"
                    }
                }
        },
        EHI9: (e, n, t) => {
            "use strict";
            t.d(n, {
                uh: () => i
            });
            t("DTvD");
            var r = t("tjHY"),
                o = "RED_PACKET_CLICK",
                i = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "clicked";
                    try {
                        (0, r.c7)({
                            key: o,
                            success: function(t) {
                                var i = Date.now();
                                try {
                                    var a, s = {};
                                    (null === t || void 0 === t ? void 0 : t.data) && (s = JSON.parse(t.data)), s[e] = {
                                        createTime: (null === (a = s[e]) || void 0 === a ? void 0 : a.createTime) || i,
                                        status: n
                                    }, (0, r.cT)({
                                        key: o,
                                        data: JSON.stringify(s)
                                    })
                                } catch (u) {
                                    console.error("Error handling red packet click:", u)
                                }
                            }
                        })
                    } catch (t) {
                        console.error("Error handling red packet click:", t)
                    }
                }
        },
        "4FdS": (e, n, t) => {
            "use strict";
            t.d(n, {
                B_: () => P,
                _V: () => O,
                iB: () => S,
                qp: () => r
            });
            var r, o = t("sViW"),
                i = t("ezuS"),
                a = t("BK7R"),
                s = t("QUKP"),
                u = t("gZfF"),
                c = t("tEf9"),
                l = t("Pz56"),
                d = t.n(l),
                p = t("VyXn"),
                f = t("qrIQ"),
                g = t("Cl8C"),
                h = t("tjHY"),
                v = t("ecmL"),
                m = t("aCc/"),
                y = t("Zhab"),
                b = t("c+qD"),
                A = t("ykOY"),
                I = t("cyCu"),
                M = t("DkGs"),
                x = t("EGuz"),
                C = t("JIKO"),
                k = t("EHI9"),
                w = t("nhnq"),
                E = 500,
                _ = 100,
                S = function() {
                    try {
                        var e, n;
                        return null === window || void 0 === window || null === (e = window.location) || void 0 === e || null === (n = e.pathname) || void 0 === n ? void 0 : n.includes("serviceGroup")
                    } catch (t) {
                        return !1
                    }
                },
                T = [];
            ! function(e) {
                e[e.sending = 0] = "sending", e[e.done = 1] = "done", e[e.failed = 2] = "failed", e[e.deleted = 3] = "deleted", e[e.archived = 4] = "archived", e[e.secured = 5] = "secured"
            }(r || (r = {}));
            var O = 1e4,
                P = [];
            (0, p.NP)({
                state: {
                    haodeskRefId: void 0,
                    anchoringPosition: "bottom",
                    haodeskRefIdWeb: null,
                    hasGroup: !1,
                    currentServiceGroupId: 0,
                    currentChannelGroupId: 0,
                    currentChannelMember: null,
                    isCurrentChannelAdmin: !1,
                    isCurrentChannelSubAdmin: !1,
                    currentChannelMemberQuery: "",
                    currentChannelMemberQueryForMention: "",
                    unReadInfo: {
                        count: 0,
                        hasNotDisturbMsg: !1
                    },
                    chatGroups: [],
                    channelGroups: [],
                    channelMembersResponse: {},
                    channelMembersResponseForMention: {},
                    channelFileDictionary: {},
                    channelOriginalFileDictionary: {},
                    channelFileCurrentFetchingIds: [],
                    chats: [],
                    token: "",
                    socketDomain: "",
                    filter: !1,
                    nextId: 0,
                    groupMessages: {},
                    channelMessages: {},
                    msgIdImageMap: {},
                    quoteMsgInfo: null,
                    textInputHeight: 64,
                    openedChatGroupModalVisible: !1,
                    isSocketReconnecting: !1,
                    previewImageUrl: null,
                    groupUserBaseInfo: {
                        email: "",
                        id: "",
                        nickname: "",
                        parentUser: !1,
                        entryNickName: null,
                        userOpenSession: null
                    },
                    uid: null,
                    deletedChannelMsgs: [],
                    serviceGroupLastSeqNo2: null,
                    timelineDisconnect: !1,
                    timelineInterval: 1e4,
                    socketStatus: b.cZ.NOT_CONNECTED,
                    channelUserLabels: [],
                    largeGroupRateLimitModalVisible: !1,
                    mentionMemberModalVisible: !1,
                    tempMentionMember: null,
                    mentionMemberList: [],
                    unreadMentionMsgChannelMap: {},
                    tempUnreadMentionMsgChannelMap: {},
                    ncHomePageHasMentionYou: !1,
                    firstUnreadMentionMsgId: null,
                    msgToScrollId: null,
                    isScrollingToFirstUnreadMentionMsg: !1,
                    inputHeight: 0,
                    keyboardHeight: 0,
                    pasteImageHeight: 0,
                    scrollToBottomBtnRender: !0,
                    scrollToBottomBtnVisible: !1,
                    currentChannelPinnedMsgs: [],
                    unpinMessageConfirmModalVisible: !1,
                    unpinMsgId: 0,
                    desktopRightMiniPageTitle: "",
                    desktopRightMiniPage: null,
                    pinnedMessagesPageTitle: "",
                    toDeleteMsg: null,
                    pinReachedMaxModalVisible: !1,
                    searchChatHistoryVisible: !1,
                    pinMaxLimit: null,
                    isDisplayTempChannelMsgList: !1,
                    tempChannelMsgList: null,
                    largeGroupAvatarMap: {},
                    allAsset: {},
                    redPacketCreateConfig: null,
                    grabRedPacketConfig: null,
                    actionMenuVisible: !1
                },
                actions: {
                    setSearchChatHistoryVisible: function(e) {
                        this.searchChatHistoryVisible = e
                    },
                    removeChannelOrGroupById: function(e) {
                        this.chatGroups = this.chatGroups.filter((function(n) {
                            return "".concat(n.groupId) !== "".concat(e)
                        })), this.channelGroups = this.channelGroups.filter((function(n) {
                            return "".concat(n.id) !== "".concat(e)
                        }))
                    },
                    setPinReachedMaxModalVisible: function(e) {
                        this.pinReachedMaxModalVisible = e
                    },
                    setPinMaxLimit: function(e) {
                        this.pinMaxLimit = e
                    },
                    setMsgToScrollId: function(e) {
                        this.msgToScrollId = e
                    },
                    setToDeleteMsg: function(e) {
                        this.toDeleteMsg = e
                    },
                    setPasteImageHeight: function(e) {
                        "number" === typeof e && (this.pasteImageHeight = e)
                    },
                    setKeyboardHeight: function(e) {
                        "number" === typeof e && (this.keyboardHeight = e)
                    },
                    setScrollToBottomBtnRender: function(e) {
                        this.scrollToBottomBtnRender = e
                    },
                    setScrollToBottomBtnVisible: function(e) {
                        this.scrollToBottomBtnVisible = e
                    },
                    setPinnedMessagesPageTitle: function(e) {
                        this.pinnedMessagesPageTitle = e
                    },
                    setDesktopRightMiniPageTitle: function(e) {
                        this.desktopRightMiniPageTitle = e
                    },
                    setDesktopRightMiniPage: function(e) {
                        this.desktopRightMiniPage = e
                    },
                    setUnpinMsgId: function(e) {
                        this.unpinMsgId = e
                    },
                    setUnpinMessageConfirmModalVisible: function(e) {
                        this.unpinMessageConfirmModalVisible = e
                    },
                    setOpenedChatGroupModalVisible: function(e) {
                        this.openedChatGroupModalVisible = e
                    },
                    setCurrentServiceGroupId: function(e) {
                        this.currentChannelGroupId = 0, this.currentServiceGroupId = e
                    },
                    setCurrentChannelGroupId: function(e) {
                        this.currentServiceGroupId = 0, this.currentChannelGroupId = e
                    },
                    setMsgIdImageMap: function(e, n) {
                        this.msgIdImageMap = (0, s.A)((0, a.A)({}, this.msgIdImageMap), (0, i.A)({}, e, n))
                    },
                    setCurrentChannelMember: function(e) {
                        this.currentChannelMember = e
                    },
                    scrollToMessage: function(e) {
                        this.haodeskRefId = e
                    },
                    setAnchoringPosition: function(e) {
                        this.anchoringPosition = e
                    },
                    scrollToMessageWeb: function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                        this.haodeskRefIdWeb = e ? {
                            id: e,
                            align: n,
                            offset: t
                        } : null
                    },
                    fetchCurrentUserInfo: function(e) {
                        return (0, o.A)(d().mark((function n() {
                            var t, r;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 3, (0, A.xx)(e);
                                    case 3:
                                        (null === (r = n.sent) || void 0 === r || null === (t = r.data) || void 0 === t ? void 0 : t.uid) && (this.uid = r.data.uid, this.isCurrentChannelAdmin = r.data.admin, this.updateLargeGroupAvatarMap([r.data], !0));
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this)
                        }))).apply(this)
                    },
                    readMentionMsg: function() {},
                    batchFetchChannelFileDictionary: function(e) {
                        return (0, o.A)(d().mark((function n() {
                            var t, r, i;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (Array.isArray(null === e || void 0 === e ? void 0 : e.msgIds) && (null === e || void 0 === e ? void 0 : e.channelId)) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 2:
                                        if (!Array.isArray(null === e || void 0 === e ? void 0 : e.msgIds) || 0 !== (null === e || void 0 === e ? void 0 : e.msgIds.length)) {
                                            n.next = 4;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 4:
                                        try {
                                            t = (0, c.A)(new Set(null === e || void 0 === e ? void 0 : e.msgIds)), r = (0, M.O6)(t, 20), i = this, r.forEach(function() {
                                                var n = (0, o.A)(d().mark((function n(t) {
                                                    return d().wrap((function(n) {
                                                        for (;;) switch (n.prev = n.next) {
                                                            case 0:
                                                                return n.next = 2, i.fetchChannelFileDictionary({
                                                                    msgIds: t,
                                                                    channelId: null === e || void 0 === e ? void 0 : e.channelId
                                                                });
                                                            case 2:
                                                            case "end":
                                                                return n.stop()
                                                        }
                                                    }), n)
                                                })));
                                                return function(e) {
                                                    return n.apply(this, arguments)
                                                }
                                            }())
                                        } catch (a) {
                                            console.log(a)
                                        }
                                    case 5:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this)
                        }))).apply(this)
                    },
                    updateChannelOriginalFileDictionary: function(e, n) {
                        this.channelOriginalFileDictionary = (0, s.A)((0, a.A)({}, this.channelOriginalFileDictionary), (0, i.A)({}, e, n))
                    },
                    fetchChannelFileDictionary: function(e) {
                        return (0, o.A)(d().mark((function n() {
                            var t, r, o, i, s, u, l, p;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t = this, Array.isArray(null === e || void 0 === e ? void 0 : e.msgIds) && (null === e || void 0 === e ? void 0 : e.channelId)) {
                                            n.next = 3;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 3:
                                        if (!Array.isArray(null === e || void 0 === e ? void 0 : e.msgIds) || 0 !== (null === e || void 0 === e ? void 0 : e.msgIds.length)) {
                                            n.next = 5;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 5:
                                        if (n.prev = 5, r = e.msgIds.filter((function(e) {
                                                var n;
                                                return !(null === (n = t.channelFileDictionary) || void 0 === n ? void 0 : n[e])
                                            })), 0 !== r.length) {
                                            n.next = 9;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 9:
                                        if (0 !== (o = r.filter((function(e) {
                                                return !t.channelFileCurrentFetchingIds.includes(e)
                                            }))).length) {
                                            n.next = 12;
                                            break
                                        }
                                        return n.abrupt("return");
                                    case 12:
                                        return this.channelFileCurrentFetchingIds = (0, c.A)(this.channelFileCurrentFetchingIds).concat((0, c.A)(o)), n.next = 15, (0, v.V5)({
                                            channelId: null === e || void 0 === e ? void 0 : e.channelId,
                                            msgIds: o
                                        });
                                    case 15:
                                        i = n.sent, s = (null === i || void 0 === i ? void 0 : i.data) || {}, (null === i || void 0 === i ? void 0 : i.success) && s && Array.isArray(null === s || void 0 === s ? void 0 : s.msgUrls) && (l = null === i || void 0 === i || null === (u = i.data) || void 0 === u ? void 0 : u.msgUrls, p = {}, l.forEach((function(e) {
                                            (null === e || void 0 === e ? void 0 : e.msgId) && (null === e || void 0 === e ? void 0 : e.url) && (p[e.msgId] = e.url)
                                        })), this.channelFileDictionary = (0, a.A)({}, this.channelFileDictionary, p), this.channelFileCurrentFetchingIds = this.channelFileCurrentFetchingIds.filter((function(e) {
                                            return !o.includes(e)
                                        }))), n.next = 23;
                                        break;
                                    case 20:
                                        n.prev = 20, n.t0 = n.catch(5), console.log(n.t0);
                                    case 23:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this, [
                                [5, 20]
                            ])
                        }))).apply(this)
                    },
                    getChannelDetail: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                        return (0, o.A)(d().mark((function n() {
                            var t;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, (0, A.NF)(e || this.currentChannelGroupId);
                                    case 3:
                                        if ("000000" !== (null === (t = n.sent) || void 0 === t ? void 0 : t.code)) {
                                            n.next = 6;
                                            break
                                        }
                                        return n.abrupt("return", t.data);
                                    case 6:
                                        return n.abrupt("return", null);
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(0), console.error("error in getChannelDetail", n.t0);
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this, [
                                [0, 9]
                            ])
                        }))).apply(this)
                    },
                    getChannelList: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return (0, o.A)(d().mark((function n() {
                            var t, r, o, i;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return e && (this.channelGroups = []), n.prev = 1, n.next = 5, (0, v.is)();
                                    case 5:
                                        o = n.sent, (null === (t = o.data) || void 0 === t || null === (r = t.channels) || void 0 === r ? void 0 : r.length) > 0 && (i = o.data.channels.map((function(e) {
                                            return (0, s.A)((0, a.A)({}, e), {
                                                groupName: e.name,
                                                unreadCount: e.unreadCnt || 0,
                                                lastMsg: e.lastMsg || {
                                                    content: "",
                                                    msgType: b.Wr.CHANNEL_TEXT,
                                                    createTime: 0
                                                }
                                            })
                                        })), this.channelGroups = i), n.next = 12;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(1), console.error("error in getChannelList", n.t0);
                                    case 12:
                                        return n.abrupt("return", this.channelGroups);
                                    case 13:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this, [
                                [1, 9]
                            ])
                        }))).apply(this)
                    },
                    checkHasChatGroup: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {},
                            n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return (0, o.A)(d().mark((function t() {
                            var r, o, i, a;
                            return d().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return t.prev = 0, t.next = 3, (0, v.KJ)(n);
                                    case 3:
                                        (null === (r = t.sent) || void 0 === r ? void 0 : r.success) && (null === r || void 0 === r ? void 0 : r.data) && (o = r.data || {}, i = o.has, a = o.hasMention, this.unReadInfo = r.data, this.hasGroup = i, this.ncHomePageHasMentionYou = a, e && e(r.data)), t.next = 10;
                                        break;
                                    case 7:
                                        t.prev = 7, t.t0 = t.catch(0), console.error("error in checkHasChatGroup", t.t0);
                                    case 10:
                                        return t.abrupt("return", this.hasGroup);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [0, 7]
                            ])
                        }))).apply(this)
                    },
                    pinMessage: function(e, n) {
                        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : b.gk.Pin;
                        return (0, o.A)(d().mark((function r() {
                            var o;
                            return d().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (n = n || this.currentChannelGroupId, !e || !n) {
                                            r.next = 12;
                                            break
                                        }
                                        return r.prev = 2, r.next = 5, (0, A.rS)(e, n, t);
                                    case 5:
                                        return o = r.sent, r.abrupt("return", o);
                                    case 9:
                                        return r.prev = 9, r.t0 = r.catch(2), r.abrupt("return", r.t0);
                                    case 12:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this, [
                                [2, 9]
                            ])
                        }))).apply(this)
                    },
                    getChannelPinnedMsgs: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.currentChannelGroupId;
                        return (0, o.A)(d().mark((function n() {
                            var t, r;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!e) {
                                            n.next = 12;
                                            break
                                        }
                                        return n.prev = 1, n.next = 5, (0, A.sq)(e);
                                    case 5:
                                        r = n.sent, Array.isArray(null === r || void 0 === r || null === (t = r.data) || void 0 === t ? void 0 : t.msgs) ? this.currentChannelPinnedMsgs = r.data.msgs || [] : this.currentChannelPinnedMsgs = [], n.next = 12;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(1), console.error("error in getChannelPinnedMsgs", n.t0);
                                    case 12:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this, [
                                [1, 9]
                            ])
                        }))).apply(this)
                    },
                    fetchChannelUserLabels: function() {
                        return (0, o.A)(d().mark((function e() {
                            var n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, A.yF)();
                                    case 3:
                                        n = e.sent, Array.isArray(n.data) && (this.channelUserLabels = n.data), e.next = 10;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0), console.error("fetchChannelUserLabels error", e.t0);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 7]
                            ])
                        }))).apply(this)
                    },
                    getChatToken: function(e) {
                        return (0, o.A)(d().mark((function n() {
                            var t, r, o, i;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (!this.token || e) {
                                            n.next = 2;
                                            break
                                        }
                                        return n.abrupt("return", this.token);
                                    case 2:
                                        return n.prev = 2, n.next = 5, (0, v.RS)();
                                    case 5:
                                        (t = n.sent).success ? (this.token = null === (r = t.data) || void 0 === r ? void 0 : r.token, this.uid = null === (o = t.data) || void 0 === o ? void 0 : o.uid, this.serviceGroupLastSeqNo2 = null === (i = t.data) || void 0 === i ? void 0 : i.lastSeqNo2) : (this.token = "", this.uid = null), n.next = 12;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(2), (0, m.vF)("error in getHaodeskToken", n.t0);
                                    case 12:
                                        return n.abrupt("return", this.token);
                                    case 13:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this, [
                                [2, 9]
                            ])
                        }))).apply(this)
                    },
                    getChatGroupList: function() {
                        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                        return (0, o.A)(d().mark((function n() {
                            var t, r, o, i, s, c;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (t = this, !this.hasGroup) {
                                            n.next = 7;
                                            break
                                        }
                                        return n.next = 4, (0, v.FW)(this.token);
                                    case 4:
                                        (r = n.sent).success && (o = r.data || {}, i = o.token, s = o.groups, this.token = i, i && Array.isArray(s) && s.length && (c = s.map((function(e) {
                                            e.weaGroupId;
                                            var n, r = (0, u.A)(e, ["weaGroupId"]),
                                                o = t.chatGroups.findIndex((function(e) {
                                                    return "".concat(e.groupId) === "".concat(r.groupId)
                                                }));
                                            return -1 !== o ? (0, a.A)({}, null === (n = t.chatGroups) || void 0 === n ? void 0 : n[o], r) : (0, a.A)({}, r)
                                        })), this.chatGroups = c.sort((function(e, n) {
                                            return n.lastMsgTime > e.lastMsgTime ? 1 : -1
                                        })))), e && this.getChatGroupListDetails();
                                    case 7:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this)
                        }))).apply(this)
                    },
                    getChatWsDomain: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : function() {};
                        return (0, o.A)(d().mark((function n() {
                            var t, r;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 4, (0, v.CB)();
                                    case 4:
                                        (r = n.sent).success && (null === (t = r.data) || void 0 === t ? void 0 : t.chat) ? (this.socketDomain = r.data.chat, e && e(r.data.chat)) : e(), n.next = 11;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n.catch(0), e();
                                    case 11:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this, [
                                [0, 8]
                            ])
                        }))).apply(this)
                    },
                    clear: function() {
                        this.chats = []
                    },
                    getGroupUserBaseInfo: function() {
                        return (0, o.A)(d().mark((function e() {
                            var n;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, v.Mo)();
                                    case 2:
                                        (n = e.sent.data) && (this.groupUserBaseInfo = (0, s.A)((0, a.A)({}, this.groupUserBaseInfo), {
                                            email: (null === n || void 0 === n ? void 0 : n.email) || "",
                                            id: (null === n || void 0 === n ? void 0 : n.userId) || "",
                                            parentUser: (null === n || void 0 === n ? void 0 : n.parentUser) || !1
                                        }));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))).apply(this)
                    },
                    checkHasChat: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        return (0, o.A)(d().mark((function n() {
                            var t, r;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (this.hasGroup && !e) {
                                            n.next = 5;
                                            break
                                        }
                                        return r = this, n.next = 5, this.checkHasChatGroup((0, o.A)(d().mark((function e() {
                                            return d().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, r.getChatGroupList(!0);
                                                    case 2:
                                                        return e.next = 4, r.getChannelList();
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        }))));
                                    case 5:
                                        if (null === (t = this.groupUserBaseInfo) || void 0 === t ? void 0 : t.id) {
                                            n.next = 8;
                                            break
                                        }
                                        return n.next = 8, this.getGroupUserBaseInfo();
                                    case 8:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this)
                        }))).apply(this)
                    },
                    clearChannelMembers: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && (this.isCurrentChannelAdmin = !1), this.channelMembersResponse = {}
                    },
                    clearChannelMembersForMention: function() {
                        this.channelMembersResponseForMention = {}
                    },
                    setCurrentChannelMemberQuery: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        this.currentChannelMemberQuery = e
                    },
                    setCurrentChannelMemberQueryForMention: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        this.currentChannelMemberQueryForMention = e
                    },
                    getChannelMembersForMention: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            t = arguments.length > 2 ? arguments[2] : void 0;
                        return (0, o.A)(d().mark((function r() {
                            var o, i, a, s, u, l, p;
                            return d().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, (0, A.kH)({
                                            query: e,
                                            name: t,
                                            cursorId: n,
                                            channelId: this.currentChannelGroupId
                                        });
                                    case 3:
                                        if (o = r.sent, i = (null === o || void 0 === o ? void 0 : o.data) || {}, a = i.adminCount, s = i.memberCount, u = i.cursorId, l = i.members, !n) {
                                            r.next = 9;
                                            break
                                        }
                                        return this.channelMembersResponseForMention = {
                                            adminCount: a,
                                            memberCount: s,
                                            cursorId: u,
                                            members: (0, c.A)((null === (p = this.channelMembersResponseForMention) || void 0 === p ? void 0 : p.members) || []).concat((0, c.A)(l || []))
                                        }, r.abrupt("return", this.channelMembersResponseForMention);
                                    case 9:
                                        return this.channelMembersResponseForMention = {
                                            adminCount: a,
                                            memberCount: s,
                                            cursorId: u,
                                            members: l
                                        }, r.abrupt("return", this.channelMembersResponseForMention);
                                    case 13:
                                        return r.prev = 13, r.t0 = r.catch(0), console.error(r.t0), r.abrupt("return", {});
                                    case 17:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this, [
                                [0, 13]
                            ])
                        }))).apply(this)
                    },
                    getChannelMembers: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            t = arguments.length > 2 ? arguments[2] : void 0;
                        return (0, o.A)(d().mark((function r() {
                            var o, i, a, s, u, l, p;
                            return d().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        return r.prev = 0, r.next = 3, (0, A.kH)({
                                            query: e,
                                            name: t,
                                            cursorId: n,
                                            channelId: this.currentChannelGroupId
                                        });
                                    case 3:
                                        if (o = r.sent, i = (null === o || void 0 === o ? void 0 : o.data) || {}, a = i.adminCount, s = i.memberCount, u = i.cursorId, l = i.members, "number" === typeof a && (this.isCurrentChannelAdmin = !0), this.updateLargeGroupAvatarMap(l, !0), !n) {
                                            r.next = 11;
                                            break
                                        }
                                        return this.channelMembersResponse = {
                                            adminCount: a,
                                            memberCount: s,
                                            cursorId: u,
                                            members: (0, c.A)((null === (p = this.channelMembersResponse) || void 0 === p ? void 0 : p.members) || []).concat((0, c.A)(l || []))
                                        }, r.abrupt("return", this.channelMembersResponse);
                                    case 11:
                                        return this.channelMembersResponse = {
                                            adminCount: a,
                                            memberCount: s,
                                            cursorId: u,
                                            members: l
                                        }, r.abrupt("return", this.channelMembersResponse);
                                    case 15:
                                        return r.prev = 15, r.t0 = r.catch(0), console.error(r.t0), r.abrupt("return", {});
                                    case 19:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this, [
                                [0, 15]
                            ])
                        }))).apply(this)
                    },
                    onChatMessage: function(e) {
                        var n = this;
                        try {
                            var t = e.groupId,
                                o = e.content,
                                i = e.msgId,
                                u = e.channelId,
                                l = (e.senderId, e.msgType);
                            this.updateLargeGroupAvatarMap([e], !0);
                            null === e || void 0 === e || e.senderId, this.uid;
                            if (u && e.msgType) {
                                var d = this.channelGroups.findIndex((function(e) {
                                        return "".concat(e.id) === "".concat(u)
                                    })),
                                    p = d < 0;
                                if (!p && !b.C9.includes(e.msgType)) {
                                    var g, v, m = (null === e || void 0 === e ? void 0 : e.senderId) === this.uid,
                                        A = (0, c.A)(this.channelGroups);
                                    A[d] = (0, s.A)((0, a.A)({}, A[d]), {
                                        lastMsg: {
                                            content: (null === e || void 0 === e ? void 0 : e.text) || "",
                                            msgType: e.msgType,
                                            createTime: e.createTime,
                                            mentionUserNameMap: e.mentionUserNameMap,
                                            msgId: e.msgId
                                        },
                                        unreadCount: this.currentChannelGroupId === u || m ? 0 : (null === (g = A[d]) || void 0 === g ? void 0 : g.unreadCount) + 1
                                    }), this.channelGroups = A, (null === (v = A[d]) || void 0 === v ? void 0 : v.disturb) || m || !S() || (0, C.R)()
                                }
                                if (e.msgType === b.Wr.CHANNEL_TEXT || e.msgType === b.Wr.CHANNEL_REPLY && e.text && !e.file) {
                                    var I = (null === e || void 0 === e ? void 0 : e.senderId) === this.uid;
                                    if (p) this.getChannelList();
                                    else if (e.identity) {
                                        if (this.channelMessages[u] && Array.isArray(this.channelMessages[u].msgs))
                                            if (this.channelMessages[u].msgs.some((function(n) {
                                                    return n.identity === e.identity
                                                })) ? (this.changeGroupMessageStatus((0, s.A)((0, a.A)({}, e), {
                                                    status: r.done
                                                })), this.sendChannelReadAckMessage(e)) : (this.pushGroupMessage(e), this.isDisplayTempChannelMsgList || this.currentChannelGroupId !== u || (this.scrollToMessage(""), setTimeout((function() {
                                                    n.scrollToMessage("".concat(b.qH, "-").concat(n.currentChannelGroupId))
                                                }), E))), I) {
                                                var M, k = {
                                                    msgId: i,
                                                    channel_id: u,
                                                    timestamp: (null === e || void 0 === e ? void 0 : e.createTime) || "",
                                                    user_id: (null === (M = this.groupUserBaseInfo) || void 0 === M ? void 0 : M.id) || "",
                                                    isMiniApp: f.lq || !1
                                                };
                                                (0, x.$3)("group-service-msg-send", {
                                                    extraInfo: f.lq ? JSON.stringify(k) : k
                                                })
                                            }
                                    } else this.pushGroupMessage(e);
                                    if (I && e.msgType === b.Wr.CHANNEL_REPLY && (null === e || void 0 === e ? void 0 : e.refMsg)) {
                                        var w, _, T = {
                                            msgId: i,
                                            responseMsgId: null === e || void 0 === e || null === (w = e.refMsg) || void 0 === w ? void 0 : w.msgId,
                                            channelId: u,
                                            timestamp: (null === e || void 0 === e ? void 0 : e.createTime) || "",
                                            user_id: (null === (_ = this.groupUserBaseInfo) || void 0 === _ ? void 0 : _.id) || "",
                                            isMiniApp: f.lq || !1
                                        };
                                        (0, x.$3)("group-service-msg-response", {
                                            extraInfo: f.lq ? JSON.stringify(T) : T
                                        })
                                    }
                                }
                                if (e.msgType === b.Wr.CHANNEL_FILE || e.msgType === b.Wr.CHANNEL_REPLY && !e.text && e.file) {
                                    var O = (null === e || void 0 === e ? void 0 : e.senderId) === this.uid;
                                    if (p) this.getChatGroupList(!0);
                                    else {
                                        var P = e.key;
                                        if (!O) return void(P && this.channelMessages[u] && Array.isArray(this.channelMessages[u].msgs) && this.pushGroupMessage(e));
                                        if ((P || e.msgType === b.Wr.CHANNEL_REPLY) && this.channelMessages[u] && Array.isArray(this.channelMessages[u].msgs)) {
                                            var L = this.channelMessages[u].msgs.some((function(n) {
                                                var t;
                                                return n.identity === (e.key || (null === e || void 0 === e || null === (t = e.file) || void 0 === t ? void 0 : t.key)) || (null === n || void 0 === n ? void 0 : n.identity) === (null === e || void 0 === e ? void 0 : e.identity)
                                            }));
                                            if (L) {
                                                var N;
                                                if (e.msgType === b.Wr.CHANNEL_REPLY) this.changeGroupMessageStatus((0, s.A)((0, a.A)({}, e), {
                                                    identity: (null === e || void 0 === e || null === (N = e.file) || void 0 === N ? void 0 : N.key) || (null === e || void 0 === e ? void 0 : e.identity),
                                                    status: r.deleted,
                                                    channelId: e.channelId
                                                })), this.pushGroupMessage(e);
                                                else this.changeGroupMessageStatus((0, s.A)((0, a.A)({}, e), {
                                                    status: r.done,
                                                    identity: (null === e || void 0 === e ? void 0 : e.identity) || e.key
                                                }));
                                                this.sendChannelReadAckMessage(e), this.isDisplayTempChannelMsgList || this.currentChannelGroupId !== u || (this.scrollToMessage(""), setTimeout((function() {
                                                    n.scrollToMessage("".concat(b.qH, "-").concat(n.currentChannelGroupId))
                                                }), E))
                                            } else this.pushGroupMessage(e)
                                        }
                                    }
                                    if (O && e.msgType === b.Wr.CHANNEL_REPLY && (null === e || void 0 === e ? void 0 : e.refMsg)) {
                                        var R, D, F = {
                                            msgId: i,
                                            responseMsgId: null === e || void 0 === e || null === (R = e.refMsg) || void 0 === R ? void 0 : R.msgId,
                                            channelId: u,
                                            timestamp: (null === e || void 0 === e ? void 0 : e.createTime) || "",
                                            user_id: (null === (D = this.groupUserBaseInfo) || void 0 === D ? void 0 : D.id) || "",
                                            isMiniApp: f.lq || !1
                                        };
                                        (0, x.$3)("group-service-msg-response", {
                                            extraInfo: f.lq ? JSON.stringify(F) : F
                                        })
                                    }
                                }
                                if (l === b.Wr.CHANNEL_DELETE_MSG && (this.changeGroupMessageStatus({
                                        channelId: e.channelId,
                                        msgId: e.deleteMsgId,
                                        status: r.deleted
                                    }), this.deletedChannelMsgs.some((function(n) {
                                        return n.id === e.msgId
                                    })) || this.setDeletedChannelMsgs({
                                        msgId: e.deleteMsgId,
                                        channelId: e.channelId
                                    }), this.updateChannelLastMsgByDeleteMsgId({
                                        msgId: e.deleteMsgId,
                                        channelId: e.channelId
                                    })), e.msgType === b.Wr.CHANNEL_RATE_LIMIT && (null === e || void 0 === e ? void 0 : e.channelId) === this.currentChannelGroupId && this.setLargeGroupRateLimitModalVisible(!0), e.msgType === b.Wr.CHANNEL_PIN_MSG && this.pushGroupMessage(e), e.msgType === b.Wr.CHANNEL_RED_PACKET)
                                    if (p) this.getChannelList();
                                    else if (e.orderId) {
                                    if (this.channelMessages[u] && Array.isArray(this.channelMessages[u].msgs)) {
                                        var B = (0, s.A)((0, a.A)({}, e), {
                                            identity: "".concat(e.orderId)
                                        });
                                        this.channelMessages[u].msgs.some((function(e) {
                                            return e.msgType === b.Wr.CHANNEL_RED_PACKET && "".concat(null === e || void 0 === e ? void 0 : e.orderId) === "".concat(null === B || void 0 === B ? void 0 : B.orderId)
                                        })) ? (this.changeGroupMessageStatus((0, s.A)((0, a.A)({}, B), {
                                            status: r.done
                                        })), this.sendChannelReadAckMessage(B)) : (this.pushGroupMessage(B), this.isDisplayTempChannelMsgList || this.currentChannelGroupId !== u || (this.scrollToMessage(""), setTimeout((function() {
                                            n.scrollToMessage("".concat(MSG_BOTTOM_ID))
                                        }), E)))
                                    }
                                } else this.pushGroupMessage(e);
                                if (e.msgType === b.Wr.CHANNEL_RED_PACKET_RECEIVED)
                                    if (p) this.getChannelList();
                                    else if (e.orderId) {
                                    if (this.channelMessages[u] && Array.isArray(this.channelMessages[u].msgs)) {
                                        var G = (0, s.A)((0, a.A)({}, e), {
                                            identity: "".concat(e.orderId)
                                        });
                                        this.channelMessages[u].msgs.some((function(e) {
                                            return "".concat(null === e || void 0 === e ? void 0 : e.msgId) === "".concat(null === G || void 0 === G ? void 0 : G.msgId)
                                        })) ? (this.changeGroupMessageStatus((0, s.A)((0, a.A)({}, G), {
                                            status: r.done
                                        })), this.sendChannelReadAckMessage(G)) : (this.pushGroupMessage(G), this.isDisplayTempChannelMsgList || this.currentChannelGroupId !== u || (this.scrollToMessage(""), setTimeout((function() {
                                            n.scrollToMessage("".concat(b.qH, "-").concat(n.currentChannelGroupId))
                                        }), E)), (null === G || void 0 === G ? void 0 : G.finished) && this.changeRedMessageStatus(G, "FULLY_CLAIMED"))
                                    }
                                } else this.pushGroupMessage(e);
                                return void([b.Wr.CHANNEL_PIN_MSG, b.Wr.CHANNEL_UNPIN_MSG, b.Wr.CHANNEL_DELETE_MSG].includes(l) && this.getChannelPinnedMsgs())
                            }
                            var j = {};
                            try {
                                j = JSON.parse(o)
                            } catch (Ne) {}
                            if (e.msgType === b.Wr.GROUP_FILE || e.msgType === b.Wr.GROUP_TEXT) {
                                var H = this.chatGroups.find((function(e) {
                                        return "".concat(e.groupId) === "".concat(t)
                                    })),
                                    U = H && (null === H || void 0 === H ? void 0 : H.userWeaId) === (null === j || void 0 === j ? void 0 : j.src),
                                    q = this.chatGroups.findIndex((function(n) {
                                        return "".concat(n.groupId) === "".concat(e.groupId)
                                    }));
                                if (-1 !== q) try {
                                    var W, V = "";
                                    if (e.content) {
                                        var K, J, z, $ = JSON.parse(e.content),
                                            Y = null === (K = this.chatGroups) || void 0 === K ? void 0 : K[q];
                                        if (null === Y || void 0 === Y || null === (J = Y.chatGroupMemberTable) || void 0 === J ? void 0 : J[null === $ || void 0 === $ ? void 0 : $.src]) V = null === (z = Y.chatGroupMemberTable[null === $ || void 0 === $ ? void 0 : $.src]) || void 0 === z ? void 0 : z.nickname
                                    }
                                    var X = (0, s.A)((0, a.A)({}, this.chatGroups[q]), {
                                            lastMsgTime: e.createTime,
                                            lastMsgType: e.msgType,
                                            lastMsgSender: V,
                                            lastMsgPreview: e.msgType === b.Wr.GROUP_TEXT ? e.preview : "i18n-file",
                                            unreadCount: this.currentServiceGroupId === t || U ? 0 : (null === (W = this.chatGroups[q]) || void 0 === W ? void 0 : W.unreadCount) + 1
                                        }),
                                        Q = (0, c.A)(this.chatGroups);
                                    Q[q] = X, this.chatGroups = Q.sort((function(e, n) {
                                        return n.lastMsgTime > e.lastMsgTime ? 1 : -1
                                    }))
                                } catch (Re) {
                                    console.log(Re)
                                }
                            }
                            if (e.msgType === b.Wr.GROUP_TEXT) {
                                var Z = e.groupId,
                                    ee = (e.content, e.msgId),
                                    ne = this.chatGroups.find((function(e) {
                                        return "".concat(e.groupId) === "".concat(Z)
                                    })),
                                    te = ne && (null === ne || void 0 === ne ? void 0 : ne.userWeaId) === (null === j || void 0 === j ? void 0 : j.src),
                                    re = this.chatGroups.findIndex((function(e) {
                                        return "".concat(e.groupId) === "".concat(Z)
                                    })) < 0;
                                if (re) this.getChatGroupList(!0);
                                else if (!((null === ne || void 0 === ne ? void 0 : ne.chatGroupMemberTable) || {})["".concat(null === j || void 0 === j ? void 0 : j.src)] && this.getChatGroupList(!0), e.identity && te) {
                                    var oe, ie;
                                    if (this.groupMessages[Z] && Array.isArray(this.groupMessages[Z].msgs)) this.groupMessages[Z].msgs.some((function(n) {
                                        return n.identity === e.identity
                                    })) ? this.changeGroupMessageStatus((0, s.A)((0, a.A)({}, e), {
                                        status: r.done
                                    })) : (this.pushGroupMessage(e), this.scrollToMessage(""), setTimeout((function() {
                                        n.scrollToMessage("".concat(b.qH, "-").concat(n.currentServiceGroupId))
                                    }), E));
                                    var ae = {
                                        msgId: ee,
                                        group_id: Z,
                                        timestamp: (null === j || void 0 === j ? void 0 : j.timestamp) || "",
                                        user_id: (null === (oe = this.groupUserBaseInfo) || void 0 === oe ? void 0 : oe.id) || "",
                                        isMiniApp: f.lq || !1
                                    };
                                    if ((0, x.$3)("group-service-msg-send", {
                                            extraInfo: f.lq ? JSON.stringify(ae) : ae
                                        }), null === j || void 0 === j || null === (ie = j.msg) || void 0 === ie ? void 0 : ie.quote) {
                                        var se, ue, ce = {
                                            msgId: ee,
                                            responseMsgId: (null === j || void 0 === j || null === (se = j.msg) || void 0 === se ? void 0 : se.quote).haodeskRefId,
                                            group_id: Z,
                                            timestamp: (null === j || void 0 === j ? void 0 : j.timestamp) || "",
                                            user_id: (null === (ue = this.groupUserBaseInfo) || void 0 === ue ? void 0 : ue.id) || "",
                                            isMiniApp: f.lq || !1
                                        };
                                        (0, x.$3)("group-service-msg-response", {
                                            extraInfo: f.lq ? JSON.stringify(ce) : ce
                                        })
                                    }
                                } else this.pushGroupMessage(e);
                                te || (null === ne || void 0 === ne ? void 0 : ne.muted) || re || f.lq || !S() || (0, C.R)(), ee && y.x.sendMsg(JSON.stringify({
                                    msgType: "GROUP_PUSH_ACK",
                                    groupId: Z,
                                    msgId: ee
                                }))
                            }
                            if (e.msgType === b.Wr.GROUP_FILE) {
                                var le, de, pe, fe, ge, he, ve = this.chatGroups.find((function(e) {
                                        return "".concat(e.groupId) === "".concat(t)
                                    })),
                                    me = ve && (null === ve || void 0 === ve ? void 0 : ve.userWeaId) === (null === j || void 0 === j ? void 0 : j.src),
                                    ye = this.chatGroups.findIndex((function(e) {
                                        return "".concat(e.groupId) === "".concat(t)
                                    })) < 0;
                                if (ye) this.getChatGroupList(!0);
                                else if (!((null === ve || void 0 === ve ? void 0 : ve.chatGroupMemberTable) || {})["".concat(null === j || void 0 === j ? void 0 : j.src)] && this.getChatGroupList(!0), null === j || void 0 === j || null === (le = j.msg) || void 0 === le || null === (de = le.haodeskFile) || void 0 === de ? void 0 : de.success)
                                    if (me) {
                                        var be, Ae, Ie, Me;
                                        if (this.groupMessages[t] && Array.isArray(this.groupMessages[t].msgs)) {
                                            var xe, Ce, ke = this.groupMessages[t].msgs;
                                            if (j)
                                                if (null === j || void 0 === j || null === (xe = j.msg) || void 0 === xe || null === (Ce = xe.haodeskFile) || void 0 === Ce ? void 0 : Ce.objKey) {
                                                    var we, Ee, _e = null === j || void 0 === j || null === (we = j.msg) || void 0 === we || null === (Ee = we.haodeskFile) || void 0 === Ee ? void 0 : Ee.objKey;
                                                    ke.some((function(e) {
                                                        return !!(null === e || void 0 === e ? void 0 : e.identity) && _e === (null === e || void 0 === e ? void 0 : e.identity)
                                                    })) || this.pushGroupMessage(e)
                                                }
                                        }
                                        this.changeGroupMessageStatus((0, s.A)((0, a.A)({}, e), {
                                            status: r.done,
                                            identity: (null === j || void 0 === j || null === (be = j.msg) || void 0 === be || null === (Ae = be.haodeskFile) || void 0 === Ae ? void 0 : Ae.objKey) || null
                                        })), this.scrollToMessage(""), setTimeout((function() {
                                            n.scrollToMessage("".concat(b.qH, "-").concat(n.currentServiceGroupId))
                                        }), E);
                                        var Se = {
                                            msgId: i,
                                            group_id: t,
                                            timestamp: (null === j || void 0 === j ? void 0 : j.timestamp) || "",
                                            user_id: (null === (Ie = this.groupUserBaseInfo) || void 0 === Ie ? void 0 : Ie.id) || "",
                                            isMiniApp: f.lq || !1
                                        };
                                        if ((0, x.$3)("group-service-msg-send", {
                                                extraInfo: f.lq ? JSON.stringify(Se) : Se
                                            }), null === j || void 0 === j || null === (Me = j.msg) || void 0 === Me ? void 0 : Me.quote) {
                                            var Te, Oe, Pe = {
                                                msgId: i,
                                                responseMsgId: (null === j || void 0 === j || null === (Te = j.msg) || void 0 === Te ? void 0 : Te.quote).haodeskRefId,
                                                group_id: t,
                                                timestamp: (null === j || void 0 === j ? void 0 : j.timestamp) || "",
                                                user_id: (null === (Oe = this.groupUserBaseInfo) || void 0 === Oe ? void 0 : Oe.id) || "",
                                                isMiniApp: f.lq || !1
                                            };
                                            (0, x.$3)("group-service-msg-response", {
                                                extraInfo: f.lq ? JSON.stringify(Pe) : Pe
                                            })
                                        }
                                    } else this.pushGroupMessage(e), (null === ve || void 0 === ve ? void 0 : ve.muted) || ye || f.lq || !S() || (0, C.R)();
                                else if (this.changeGroupMessageStatus((0, s.A)((0, a.A)({}, e), {
                                        status: r.failed,
                                        identity: (null === j || void 0 === j || null === (pe = j.msg) || void 0 === pe || null === (fe = pe.haodeskFile) || void 0 === fe ? void 0 : fe.objKey) || null
                                    })), null === j || void 0 === j || null === (ge = j.msg) || void 0 === ge ? void 0 : ge.body) h.Ay.showToast({
                                    title: null === j || void 0 === j || null === (he = j.msg) || void 0 === he ? void 0 : he.body,
                                    icon: "error",
                                    duration: 2e3
                                });
                                i && y.x.sendMsg(JSON.stringify({
                                    msgType: "GROUP_PUSH_ACK",
                                    groupId: t,
                                    msgId: i
                                }))
                            }
                            if ("GROUP_CHANGE" === e.msgType && this.getChatGroupList(!0), e.msgType !== b.Wr.CHANNEL_TEXT && e.msgType !== b.Wr.CHANNEL_FILE && (null === e || void 0 === e ? void 0 : e.seqNo2) && "number" === typeof(null === e || void 0 === e ? void 0 : e.seqNo2)) {
                                var Le = this.serviceGroupLastSeqNo2;
                                null === Le || "number" === typeof Le && (null === e || void 0 === e ? void 0 : e.seqNo2) - Le === 1 ? this.serviceGroupLastSeqNo2 = null === e || void 0 === e ? void 0 : e.seqNo2 : this.timelineInterval = 1e3
                            }
                        } catch (De) {
                            console.log("error in onChatMessage", De)
                        }
                    },
                    getChatGroupMsg: function(e, n, t) {
                        return (0, o.A)(d().mark((function r() {
                            var o, i, u, l, p, f, g, h, m, y, b, A, I, M, x;
                            return d().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (i = e.groupId, u = e.isRestData, l = e.fromMsgId, !((null === (p = (null === (o = this.groupMessages[i]) || void 0 === o ? void 0 : o.msgs) || []) || void 0 === p ? void 0 : p.length) > 0) || l || u) {
                                            r.next = 20;
                                            break
                                        }
                                        if (!(p.length > _)) {
                                            r.next = 18;
                                            break
                                        }
                                        return r.prev = 5, f = p.length - _, g = p.slice(f), this.groupMessages[i] = {
                                            hasMore: !0,
                                            msgs: g
                                        }, n && n(), r.abrupt("return");
                                    case 13:
                                        r.prev = 13, r.t0 = r.catch(5), console.log(r.t0);
                                    case 16:
                                        r.next = 19;
                                        break;
                                    case 18:
                                        this.groupMessages[i] = (0, s.A)((0, a.A)({}, this.groupMessages[i]), {
                                            msgs: p
                                        }), n && n();
                                    case 19:
                                        return r.abrupt("return");
                                    case 20:
                                        return console.log("params  ----\x3e>>>>>>>     ", e), r.prev = 21, r.next = 24, (0, v.Kt)(e);
                                    case 24:
                                        (h = r.sent).success ? (b = (null === (m = h.data) || void 0 === m ? void 0 : m.msgs) || [], A = null === (y = h.data) || void 0 === y ? void 0 : y.hasMore, I = (0, c.A)(b).reverse(), this.groupMessages[i] ? (M = u ? [] : this.groupMessages[i].msgs || [], (x = (null === e || void 0 === e ? void 0 : e.fromMsgId) ? M.concat(I) : I.concat(M)).sort((function(e, n) {
                                            return e.msgId - n.msgId
                                        })), x = (0, w.R3)(x), this.groupMessages[i] = {
                                            msgs: x,
                                            hasMore: A
                                        }, n && n(x)) : (this.groupMessages[i] = {
                                            msgs: I,
                                            hasMore: A
                                        }, n && n(I))) : t && t(h), r.next = 31;
                                        break;
                                    case 28:
                                        r.prev = 28, r.t1 = r.catch(21), t && t(r.t1);
                                    case 31:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this, [
                                [5, 13],
                                [21, 28]
                            ])
                        }))).apply(this)
                    },
                    getChannelGroupMsg: function(e) {
                        return (0, o.A)(d().mark((function n() {
                            var t, r, i, u, l, p, f, g, h, m, y, b, A, I, M, x, C, k, E, S, T, O;
                            return d().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        if (r = e.channelId, i = e.isRestData, u = e.lastMsgId, l = e.callback, p = e.errorCallback, !((null === (f = (null === (t = this.channelMessages[r]) || void 0 === t ? void 0 : t.msgs) || []) || void 0 === f ? void 0 : f.length) > 0) || u || i) {
                                            n.next = 20;
                                            break
                                        }
                                        if (!(f.length > _)) {
                                            n.next = 18;
                                            break
                                        }
                                        return n.prev = 5, g = f.length - _, h = f.slice(g), this.channelMessages[r] = {
                                            hasMore: !0,
                                            msgs: h
                                        }, l && l(), n.abrupt("return");
                                    case 13:
                                        n.prev = 13, n.t0 = n.catch(5), console.log(n.t0);
                                    case 16:
                                        n.next = 19;
                                        break;
                                    case 18:
                                        this.channelMessages[r] = (0, s.A)((0, a.A)({}, this.channelMessages[r]), {
                                            msgs: f
                                        }), l && l();
                                    case 19:
                                        return n.abrupt("return");
                                    case 20:
                                        return n.prev = 20, y = [], b = !0, A = e.lastMsgId, I = function() {
                                            var n = (0, o.A)(d().mark((function n() {
                                                var t, r, o, i, u, c;
                                                return d().wrap((function(n) {
                                                    for (;;) switch (n.prev = n.next) {
                                                        case 0:
                                                            return n.next = 2, (0, v.t8)((0, s.A)((0, a.A)({}, e), {
                                                                lastMsgId: A
                                                            }));
                                                        case 2:
                                                            if (!(t = n.sent).success) {
                                                                n.next = 14;
                                                                break
                                                            }
                                                            if (c = (null === (r = t.data) || void 0 === r ? void 0 : r.msgs) || [], b = null === (o = t.data) || void 0 === o ? void 0 : o.hasMore, A = (null === (i = t.data) || void 0 === i ? void 0 : i.lastMsgId) ? null === (u = t.data) || void 0 === u ? void 0 : u.lastMsgId : c[c.length - 1].msgId, !((y = y.concat(c)).length < 30 && b)) {
                                                                n.next = 12;
                                                                break
                                                            }
                                                            return n.next = 12, I();
                                                        case 12:
                                                            n.next = 15;
                                                            break;
                                                        case 14:
                                                            p && p(t);
                                                        case 15:
                                                        case "end":
                                                            return n.stop()
                                                    }
                                                }), n)
                                            })));
                                            return function() {
                                                return n.apply(this, arguments)
                                            }
                                        }(), n.next = 28, I();
                                    case 28:
                                        if (M = (0, c.A)(y).reverse(), x = i ? [] : (null === (m = this.channelMessages[r]) || void 0 === m ? void 0 : m.msgs) || [], i && (this.isDisplayTempChannelMsgList = !1, this.tempChannelMsgList = null), C = this.isDisplayTempChannelMsgList, k = [], C ? (S = (null === (E = this.tempChannelMsgList) || void 0 === E ? void 0 : E.msgs) || [], k = S.concat(M)) : k = (null === e || void 0 === e ? void 0 : e.lastMsgId) ? x.concat(M) : M.concat(x), k.sort((function(e, n) {
                                                return e.msgId - n.msgId
                                            })), k = (0, w.R3)(k), C ? this.tempChannelMsgList = (0, s.A)((0, a.A)({}, this.tempChannelMsgList), {
                                                msgs: k,
                                                hasMorePrev: b
                                            }) : this.channelMessages[r] = {
                                                msgs: k,
                                                hasMore: b
                                            }, l && l(k), !(y.length > 0)) {
                                            n.next = 44;
                                            break
                                        }
                                        return T = y.filter((function(e) {
                                            return "CHANNEL_FILE" === e.msgType
                                        })), O = T.map((function(e) {
                                            return null === e || void 0 === e ? void 0 : e.msgId
                                        })), this.updateLargeGroupAvatarMap(y), n.next = 44, this.batchFetchChannelFileDictionary({
                                            msgIds: O,
                                            channelId: r
                                        });
                                    case 44:
                                        n.next = 50;
                                        break;
                                    case 46:
                                        n.prev = 46, n.t1 = n.catch(20), console.log(" ---\x3e>>>    ", n.t1), null === p || void 0 === p || p(n.t1);
                                    case 50:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, this, [
                                [5, 13],
                                [20, 46]
                            ])
                        }))).apply(this)
                    },
                    resetChatGroupMsgById: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        n && this.channelMessages[e] && (this.channelMessages[e] = (0, s.A)((0, a.A)({}, this.channelMessages[e]), {
                            msgs: []
                        })), !n && this.groupMessages[e] && (this.groupMessages[e] = (0, s.A)((0, a.A)({}, this.groupMessages[e]), {
                            msgs: []
                        }))
                    },
                    resetChatChannelGroupMsgById: function(e) {
                        this.channelMessages[e] = (0, s.A)((0, a.A)({}, this.channelMessages[e]), {
                            msgs: []
                        })
                    },
                    reloadChannelImage: function(e, n) {
                        var t = this;
                        (0, v.V5)({
                            channelId: e,
                            msgIds: [n]
                        }).then((function(e) {
                            var n = (null === e || void 0 === e ? void 0 : e.data) || {};
                            if ((null === e || void 0 === e ? void 0 : e.success) && n && Array.isArray(null === n || void 0 === n ? void 0 : n.msgUrls)) {
                                var r, o = null === e || void 0 === e || null === (r = e.data) || void 0 === r ? void 0 : r.msgUrls,
                                    i = {};
                                o.forEach((function(e) {
                                    (null === e || void 0 === e ? void 0 : e.msgId) && (null === e || void 0 === e ? void 0 : e.url) && (i[e.msgId] = e.url)
                                })), t.channelFileDictionary = (0, a.A)({}, t.channelFileDictionary, i)
                            }
                        }))
                    },
                    getChatGroupListDetails: function() {
                        return (0, o.A)(d().mark((function e() {
                            var n, t, r, o, u;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!this.hasGroup) {
                                            e.next = 6;
                                            break
                                        }
                                        return e.next = 4, (0, v.VY)(this.token);
                                    case 4:
                                        (r = e.sent).success && (null === (n = r.data) || void 0 === n || null === (t = n.groupList) || void 0 === t ? void 0 : t.length) && (o = r.data.groupList, Array.isArray(o) && (u = this.chatGroups.map((function(e) {
                                            var n = e.groupId,
                                                t = o.find((function(e) {
                                                    return "".concat(e.groupId) === "".concat(n)
                                                }));
                                            if (t && Array.isArray(null === t || void 0 === t ? void 0 : t.chatGroupMembers)) {
                                                var r, u = t.chatGroupMembers.reduce((function(e, n) {
                                                        return (0, s.A)((0, a.A)({}, e), (0, i.A)({}, n.weaId, n))
                                                    }), {}),
                                                    c = t.weaGroupId,
                                                    l = t.userWeaId,
                                                    d = t.groupCategory,
                                                    p = t.lastMsg,
                                                    f = t.lastMsgSender,
                                                    g = t.lastMsgSenderType;
                                                if (p) try {
                                                    var h, v, m = JSON.parse(p);
                                                    r = (null === m || void 0 === m || null === (h = m.msg) || void 0 === h ? void 0 : h.body) || (null === m || void 0 === m || null === (v = m.card) || void 0 === v ? void 0 : v.content) || null
                                                } catch (y) {
                                                    r = null
                                                }
                                                return (0, s.A)((0, a.A)({}, e, r && {
                                                    lastMsgPreview: r
                                                }), {
                                                    chatGroupMemberTable: u,
                                                    weaGroupId: c,
                                                    userWeaId: l,
                                                    groupCategory: d,
                                                    lastMsgSender: f,
                                                    lastMsgSenderType: g
                                                })
                                            }
                                            return e
                                        })), this.chatGroups = u.sort((function(e, n) {
                                            return n.lastMsgTime > e.lastMsgTime ? 1 : -1
                                        }))));
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))).apply(this)
                    },
                    pushGroupMessage: function(e) {
                        var n = e.groupId,
                            t = e.content,
                            r = e.seqNo2,
                            o = e.channelId;
                        try {
                            if (n && this.groupMessages.hasOwnProperty(n) && (!f.lq || f.lq && n === this.currentServiceGroupId)) {
                                var u = JSON.parse(t),
                                    c = this.groupMessages[n],
                                    l = c.msgs;
                                if (l.find((function(e) {
                                        var n, t;
                                        return null === e || void 0 === e || null === (n = e.content) || void 0 === n || null === (t = n.includes) || void 0 === t ? void 0 : t.call(n, u.timestamp)
                                    }))) return;
                                var d = l.concat(e);
                                r && l.some((function(e) {
                                    return (null === e || void 0 === e ? void 0 : e.seqNo2) > r
                                })) && (d = d.sort((function(e, n) {
                                    return e.seqNo2 - n.seqNo2
                                }))), this.groupMessages = (0, s.A)((0, a.A)({}, this.groupMessages), (0, i.A)({}, n, (0, s.A)((0, a.A)({}, c), {
                                    msgs: d
                                })))
                            }
                        } catch (m) {
                            h.Ay.showToast({
                                title: JSON.stringify(m),
                                icon: "error",
                                duration: 2e3
                            })
                        }
                        try {
                            if (o && this.channelMessages.hasOwnProperty(o) && (!f.lq || f.lq && o === this.currentChannelGroupId)) {
                                var p = this.channelMessages[o],
                                    g = p.msgs;
                                o === this.currentChannelGroupId && this.sendChannelReadAckMessage(e);
                                var v = g.concat(e);
                                r && g.some((function(e) {
                                    return (null === e || void 0 === e ? void 0 : e.seqNo2) > r
                                })) && (v = v.sort((function(e, n) {
                                    return e.seqNo2 - n.seqNo2
                                }))), this.channelMessages = (0, s.A)((0, a.A)({}, this.channelMessages), (0, i.A)({}, o, (0, s.A)((0, a.A)({}, p), {
                                    msgs: v
                                })))
                            }
                        } catch (y) {
                            h.Ay.showToast({
                                title: JSON.stringify(y),
                                icon: "error",
                                duration: 2e3
                            })
                        }
                    },
                    changeGroupMessageStatus: function(e) {
                        var n = e.groupId,
                            t = e.identity,
                            o = e.msgId,
                            u = e.status,
                            c = e.channelId;
                        if (u === r.done) {
                            var l = P.findIndex((function(e) {
                                return e.identity === t
                            }));
                            if (l > -1 && (clearTimeout(P[l].timer), P.splice(l, 1)), this.groupMessages[n] || this.channelMessages[c]) {
                                if (n) {
                                    var d = this.groupMessages[n],
                                        p = d.msgs,
                                        f = p.findIndex((function(e) {
                                            var n;
                                            return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(t)) || e.msgId === o
                                        })),
                                        g = p.map((function(n, t) {
                                            return t === f ? (0, a.A)({}, e) : n
                                        }));
                                    g = g.sort((function(e, n) {
                                        return e.msgId - n.msgId
                                    })), f > -1 && (this.groupMessages = (0, s.A)((0, a.A)({}, this.groupMessages), (0, i.A)({}, n, (0, s.A)((0, a.A)({}, d), {
                                        msgs: g
                                    }))))
                                }
                                if (c) {
                                    var h = this.channelMessages[c],
                                        v = h.msgs,
                                        m = v.findIndex((function(e) {
                                            var n;
                                            return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(t)) || e.msgId === o
                                        })),
                                        y = v.map((function(n, t) {
                                            return t === m ? (0, a.A)({}, e) : n
                                        }));
                                    y = y.sort((function(e, n) {
                                        return e.msgId - n.msgId
                                    })), m > -1 && (this.channelMessages = (0, s.A)((0, a.A)({}, this.channelMessages), (0, i.A)({}, c, (0, s.A)((0, a.A)({}, h), {
                                        msgs: y
                                    }))))
                                }
                            }
                        }
                        if (u === r.deleted) {
                            var b = P.findIndex((function(e) {
                                return e.identity === t
                            }));
                            if (b > -1 && (clearTimeout(P[b].timer), P.splice(b, 1)), this.groupMessages[n]) {
                                var A = this.groupMessages[n],
                                    I = A.msgs,
                                    M = I.findIndex((function(e) {
                                        var n;
                                        return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(t)) || e.msgId === o
                                    }));
                                M > -1 && (this.groupMessages = (0, s.A)((0, a.A)({}, this.groupMessages), (0, i.A)({}, n, (0, s.A)((0, a.A)({}, A), {
                                    msgs: I.filter((function(e, n) {
                                        return n !== M
                                    }))
                                }))))
                            }
                            if (this.channelMessages[c]) {
                                var x = this.channelMessages[c],
                                    C = x.msgs,
                                    k = C.findIndex((function(e) {
                                        var n;
                                        return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(t)) || e.msgId === o
                                    }));
                                k > -1 && (this.channelMessages = (0, s.A)((0, a.A)({}, this.channelMessages), (0, i.A)({}, c, (0, s.A)((0, a.A)({}, x), {
                                    msgs: C.filter((function(e, n) {
                                        return n !== k
                                    }))
                                }))))
                            }
                        }
                        if (u === r.sending) {
                            if (this.groupMessages[n]) {
                                var w = this.groupMessages[n],
                                    E = w.msgs,
                                    _ = E.findIndex((function(e) {
                                        var n;
                                        return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(t)) || e.msgId === o
                                    }));
                                _ > -1 && (this.groupMessages = (0, s.A)((0, a.A)({}, this.groupMessages), (0, i.A)({}, n, (0, s.A)((0, a.A)({}, w), {
                                    msgs: E.map((function(e, n) {
                                        return n === _ ? (0, s.A)((0, a.A)({}, e), {
                                            status: r.sending
                                        }) : e
                                    }))
                                }))))
                            }
                            if (this.channelMessages[c]) {
                                var S = this.channelMessages[c],
                                    T = S.msgs,
                                    O = T.findIndex((function(e) {
                                        var n;
                                        return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(t)) || e.msgId === o
                                    }));
                                O > -1 && (this.channelMessages = (0, s.A)((0, a.A)({}, this.channelMessages), (0, i.A)({}, c, (0, s.A)((0, a.A)({}, S), {
                                    msgs: T.map((function(e, n) {
                                        return n === O ? (0, s.A)((0, a.A)({}, e), {
                                            status: r.sending
                                        }) : e
                                    }))
                                }))))
                            }
                        }
                        if (u === r.failed) {
                            if (this.groupMessages[n]) {
                                var L = this.groupMessages[n],
                                    N = L.msgs,
                                    R = N.findIndex((function(e) {
                                        var n;
                                        return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(t)) || e.msgId === o
                                    }));
                                R > -1 && (this.groupMessages = (0, s.A)((0, a.A)({}, this.groupMessages), (0, i.A)({}, n, (0, s.A)((0, a.A)({}, L), {
                                    msgs: N.map((function(e, n) {
                                        return n === R ? (0, s.A)((0, a.A)({}, e), {
                                            status: r.failed
                                        }) : e
                                    }))
                                }))))
                            }
                            if (this.channelMessages[c]) {
                                var D = this.channelMessages[c],
                                    F = D.msgs,
                                    B = F.findIndex((function(e) {
                                        var n;
                                        return (null === (n = e.identity) || void 0 === n ? void 0 : n.includes(t)) || e.msgId === o
                                    }));
                                B > -1 && (this.channelMessages = (0, s.A)((0, a.A)({}, this.channelMessages), (0, i.A)({}, c, (0, s.A)((0, a.A)({}, D), {
                                    msgs: F.map((function(e, n) {
                                        return n === B ? (0, s.A)((0, a.A)({}, e), {
                                            status: r.failed
                                        }) : e
                                    }))
                                }))))
                            }
                        }
                    },
                    changeRedMessageStatus: function(e) {
                        var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "RECEIVED",
                            r = e.channelId,
                            o = e.orderId,
                            u = null === (n = this) || void 0 === n ? void 0 : n.channelGroups.findIndex((function(e) {
                                return "".concat(e.id) === "".concat(r)
                            })),
                            c = u >= 0;
                        if (r && o && c && this.channelMessages[r]) {
                            var l = this.channelMessages[r],
                                d = l.msgs,
                                p = d.filter((function(e) {
                                    return e.orderId == o && "CHANNEL_RED_PACKET" === e.msgType
                                }));
                            if ((null === p || void 0 === p ? void 0 : p.length) > 0) {
                                for (var f = 0; f < p.length; f++) "RECEIVED" === t && (p[f].received = !0), "EXPIRED" === t && (p[f].expired = !0), "FULLY_CLAIMED" === t && (p[f].finished = !0), "FULLY_CLAIMED_AND_CLICKED" === t && (p[f].finished = !0, p[f].clicked = !0);
                                var g = d.sort((function(e, n) {
                                    return e.msgId - n.msgId
                                }));
                                this.channelMessages = (0, s.A)((0, a.A)({}, this.channelMessages), (0, i.A)({}, r, (0, s.A)((0, a.A)({}, l), {
                                    msgs: g
                                })))
                            }
                        }
                    },
                    sendGroupMessageAsync: function(e, n) {
                        var t = this;
                        if ((null === e || void 0 === e ? void 0 : e.groupId) || (null === e || void 0 === e ? void 0 : e.channelId)) {
                            var o = P.findIndex((function(n) {
                                return n.identity === e.identity
                            }));
                            if (o > -1) return clearTimeout(P[o].timer), void P.splice(o, 1);
                            null === y.x || void 0 === y.x || y.x.sendMsg(JSON.stringify(e));
                            var i = setTimeout((function() {
                                t.changeGroupMessageStatus({
                                    identity: e.identity,
                                    status: r.failed,
                                    groupId: e.groupId,
                                    channelId: null === e || void 0 === e ? void 0 : e.channelId
                                })
                            }), O);
                            P.push({
                                identity: e.identity,
                                timer: i,
                                groupId: null === e || void 0 === e ? void 0 : e.groupId,
                                channelId: null === e || void 0 === e ? void 0 : e.channelId
                            }), this.pushGroupMessage(e), n && n()
                        }
                    },
                    resendGroupMessage: function(e) {
                        var n = this,
                            t = P.findIndex((function(n) {
                                return n.identity === e.identity
                            }));
                        t > -1 && (clearTimeout(P[t].timer), P.splice(t, 1));
                        var o = setTimeout((function() {
                            n.changeGroupMessageStatus({
                                identity: e.identity,
                                status: r.failed,
                                groupId: null === e || void 0 === e ? void 0 : e.groupId,
                                channelId: null === e || void 0 === e ? void 0 : e.channelId
                            })
                        }), O);
                        P.push({
                            identity: e.identity,
                            timer: o,
                            groupId: e.groupId,
                            channelId: null === e || void 0 === e ? void 0 : e.channelId
                        }), null === y.x || void 0 === y.x || y.x.sendMsg(JSON.stringify(e))
                    },
                    sendGroupReadAckMessage: function(e) {
                        var n = e.groupId,
                            t = e.msgId,
                            r = e.content,
                            o = {
                                msgType: "GROUP_READ_ACK",
                                groupId: n,
                                msgId: t,
                                content: r
                            };
                        null === y.x || void 0 === y.x || y.x.sendMsg(JSON.stringify(o));
                        var i = this.chatGroups.findIndex((function(e) {
                                return "".concat(e.groupId) === "".concat(n)
                            })),
                            u = (0, c.A)(this.chatGroups);
                        u[i] = (0, s.A)((0, a.A)({}, u[i]), {
                            readAckId: t,
                            unreadCount: 0
                        }), this.chatGroups = u
                    },
                    sendChannelReadAckMessage: function(e) {
                        var n = this,
                            t = e.channelId,
                            r = e.seqNo,
                            o = e.force,
                            i = e.mentionSeqNo;
                        if (t && r && t === this.currentChannelGroupId) {
                            var s = (0, a.A)({
                                msgType: b.Wr.CHANNEL_READ_ACK,
                                channelId: t,
                                seqNo: r,
                                mentionSeqNo: i
                            }, o && {
                                force: o
                            });
                            (0, g.n)((function(t) {
                                var r;
                                null === y.x || void 0 === y.x || y.x.sendMsg(JSON.stringify(t));
                                var o = {
                                    msgId: (null === e || void 0 === e ? void 0 : e.msgId) || "",
                                    channel_id: (null === e || void 0 === e ? void 0 : e.channelId) || "",
                                    user_id: (null === (r = n.groupUserBaseInfo) || void 0 === r ? void 0 : r.id) || "",
                                    isMiniApp: f.lq || !1
                                };
                                (0, x.$3)("group-service-msg-read", {
                                    extraInfo: f.lq ? JSON.stringify(o) : o
                                })
                            }), 500)(s)
                        }
                    },
                    resetUnreadCount: function(e) {
                        var n = e.channelId,
                            t = void 0 === n ? void 0 : n,
                            r = e.groupId,
                            o = void 0 === r ? void 0 : r,
                            i = e.lastMsg,
                            u = void 0 === i ? void 0 : i;
                        if (t) {
                            var l = this.channelGroups.findIndex((function(e) {
                                return "".concat(e.id) === "".concat(t)
                            }));
                            if (-1 !== l) {
                                var d = (0, c.A)(this.channelGroups);
                                d[l] = (0, a.A)((0, s.A)((0, a.A)({}, d[l]), {
                                    unreadCount: 0
                                }), u && {
                                    lastMsg: u
                                }), this.channelGroups = d
                            }
                        }
                        if (o) {
                            var p = this.chatGroups.findIndex((function(e) {
                                return "".concat(e.groupId) === "".concat(o)
                            }));
                            if (-1 !== p) {
                                var f = (0, c.A)(this.chatGroups);
                                f[p] = (0, s.A)((0, a.A)({}, f[p]), {
                                    unreadCount: 0
                                }), this.chatGroups = f
                            }
                        }
                    },
                    setQuoteMsgInfo: function(e) {
                        this.quoteMsgInfo = e
                    },
                    setTextInputHeight: function(e) {
                        "number" === typeof e && (this.textInputHeight = e)
                    },
                    setIsSocketReconnecting: function(e) {
                        this.isSocketReconnecting = e
                    },
                    setPreviewImageUrl: function(e) {
                        this.previewImageUrl = "string" === typeof e ? e : null
                    },
                    deleteChannelMsgById: function(e) {
                        var n = e.msgId,
                            t = e.channelId;
                        return (0, o.A)(d().mark((function e() {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, v.U7)({
                                            msgId: n,
                                            channelId: t
                                        });
                                    case 2:
                                        this.setDeletedChannelMsgs({
                                            msgId: n,
                                            channelId: t
                                        }), this.updateChannelLastMsgByDeleteMsgId({
                                            msgId: n,
                                            channelId: t
                                        }), this.changeGroupMessageStatus({
                                            msgId: n,
                                            channelId: t,
                                            status: r.deleted
                                        }), this.getChannelPinnedMsgs(t);
                                    case 6:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))).apply(this)
                    },
                    updateChannelLastMsgByDeleteMsgId: function(e) {
                        var n, t, r = e.msgId,
                            o = e.channelId,
                            i = this,
                            u = this.channelGroups.findIndex((function(e) {
                                return "".concat(e.id) === "".concat(o)
                            })),
                            l = -1 !== u,
                            d = (null === (n = this.channelGroups[u]) || void 0 === n || null === (t = n.lastMsg) || void 0 === t ? void 0 : t.msgId) === r;
                        if (l && d) {
                            var p, f = (null === (p = this.channelMessages[o]) || void 0 === p ? void 0 : p.msgs) || [],
                                g = (f = f.filter((function(e) {
                                    return e.msgId !== r && -1 === b.C9.indexOf(e.msgType) && !i.deletedChannelMsgs.some((function(n) {
                                        return e.msgId === n.msgId && n.channelId === o
                                    }))
                                })))[f.length - 1];
                            if (g) {
                                var h, v, m = (0, c.A)(this.channelGroups);
                                m[u] = (0, s.A)((0, a.A)({}, m[u]), {
                                    lastMsg: g ? {
                                        content: g.msgType === b.Wr.CHANNEL_TEXT ? g.text : "",
                                        msgType: g.msgType,
                                        createTime: g.createTime,
                                        mentionUserNameMap: g.mentionUserNameMap,
                                        msgId: g.msgId
                                    } : null,
                                    unreadCount: (null === (h = m[u]) || void 0 === h ? void 0 : h.unreadCount) > 0 ? (null === (v = m[u]) || void 0 === v ? void 0 : v.unreadCount) - 1 : 0
                                }), this.channelGroups = m
                            } else setTimeout((function() {
                                i.getChannelList()
                            }), 1e3)
                        }
                    },
                    setDeletedChannelMsgs: function(e) {
                        this.deletedChannelMsgs = (0, c.A)(this.deletedChannelMsgs).concat([e])
                    },
                    setFirstUnreadMentionMsgId: function(e) {
                        var n = this;
                        !e && this.firstUnreadMentionMsgId && (this.unreadMentionMsgChannelMap[this.currentChannelGroupId] = this.unreadMentionMsgChannelMap[this.currentChannelGroupId].filter((function(e) {
                            return e !== n.firstUnreadMentionMsgId
                        }))), this.firstUnreadMentionMsgId = e
                    },
                    setTempMentionMember: function(e) {
                        this.tempMentionMember = e
                    },
                    addMentionMember: function(e) {
                        this.mentionMemberList = (0, c.A)(this.mentionMemberList).concat([e])
                    },
                    setMentionMemberList: function(e) {
                        this.mentionMemberList = e
                    },
                    setMentionMemberModalVisible: function(e) {
                        this.mentionMemberModalVisible = e
                    },
                    setIsScrollingToFirstUnreadMentionMsg: function(e) {
                        this.isScrollingToFirstUnreadMentionMsg = e
                    },
                    setInputHeight: function(e) {
                        this.inputHeight = e
                    },
                    getTimelineMsgAsync: function(e) {
                        var n = e.from;
                        return (0, o.A)(d().mark((function e() {
                            var t;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        t = this, (0, v.hm)({
                                            token: this.token,
                                            disconnect: this.timelineDisconnect,
                                            seqNo2From: n
                                        }).then((function(e) {
                                            if ("number" === typeof n)
                                                if (e.success) {
                                                    var r = e.data,
                                                        o = r.msgs,
                                                        u = r.hasNext,
                                                        l = r.interval,
                                                        d = r.disconnect,
                                                        p = r.seqNo2;
                                                    if ("boolean" === typeof d && (t.timelineDisconnect = d), "number" !== typeof p) {
                                                        if ("number" === typeof l && (t.timelineInterval = 1e3 * l), Array.isArray(o))
                                                            if (T = T.concat(o), u) {
                                                                var f, g = null === (f = o[o.length - 1]) || void 0 === f ? void 0 : f.seqNo2;
                                                                t.getTimelineMsgAsync({
                                                                    from: g
                                                                })
                                                            } else {
                                                                var h;
                                                                if (T.length < 1) return;
                                                                if (t.currentServiceGroupId) {
                                                                    var v, m = (null === (v = t.groupMessages[t.currentServiceGroupId]) || void 0 === v ? void 0 : v.msgs) || [],
                                                                        y = T.filter((function(e) {
                                                                            return e.groupId === t.currentServiceGroupId && (e.msgType === b.Wr.GROUP_TEXT || e.msgType === b.Wr.GROUP_FILE)
                                                                        }));
                                                                    P.length > 0 && P.some((function(e) {
                                                                        return e.groupId === t.currentServiceGroupId
                                                                    })) && (m = m.filter((function(e) {
                                                                        var n = P.findIndex((function(n) {
                                                                            return n.identity === e.identity && n.groupId === t.currentServiceGroupId
                                                                        }));
                                                                        return n > -1 && (clearTimeout(P[n].timer), P.splice(n, 1)), n < 0
                                                                    })));
                                                                    var A = m.concat(y);
                                                                    A = (A = (0, w.R3)(A)).filter((function(e, n, t) {
                                                                        return n === t.findIndex((function(n) {
                                                                            return n.msgId === e.msgId
                                                                        }))
                                                                    })), t.currentServiceGroupId && (t.groupMessages = (0, s.A)((0, a.A)({}, t.groupMessages), (0, i.A)({}, t.currentServiceGroupId, (0, s.A)((0, a.A)({}, t.groupMessages[t.currentServiceGroupId]), {
                                                                        msgs: A
                                                                    }))))
                                                                } else {
                                                                    T.filter((function(e) {
                                                                        return e.msgType === b.Wr.GROUP_TEXT || e.msgType === b.Wr.GROUP_FILE
                                                                    })).sort((function(e, n) {
                                                                        return e.groupId !== n.groupId ? e.groupId - n.groupId : n.msgId - e.msgId
                                                                    }));
                                                                    var I = [],
                                                                        M = new Set,
                                                                        x = !0,
                                                                        C = !1,
                                                                        k = void 0;
                                                                    try {
                                                                        for (var E, _ = T[Symbol.iterator](); !(x = (E = _.next()).done); x = !0) {
                                                                            var S = E.value;
                                                                            M.has(S.groupId) || (I.push(S), M.add(S.groupId))
                                                                        }
                                                                    } catch (L) {
                                                                        C = !0, k = L
                                                                    } finally {
                                                                        try {
                                                                            x || null == _.return || _.return()
                                                                        } finally {
                                                                            if (C) throw k
                                                                        }
                                                                    }
                                                                    if (I.length > 0) {
                                                                        var O = (0, c.A)(t.chatGroups);
                                                                        I.forEach((function(e) {
                                                                            var n = t.chatGroups.find((function(n) {
                                                                                    return "".concat(n.groupId) === "".concat(e.groupId)
                                                                                })),
                                                                                r = t.chatGroups.findIndex((function(n) {
                                                                                    return Number(n.groupId) === Number(e.groupId)
                                                                                }));
                                                                            try {
                                                                                var o, i, u = "",
                                                                                    c = !1;
                                                                                if (e.content) {
                                                                                    var l, d, p, f = JSON.parse(e.content),
                                                                                        g = null === (l = t.chatGroups) || void 0 === l ? void 0 : l[r];
                                                                                    if (null === g || void 0 === g || null === (d = g.chatGroupMemberTable) || void 0 === d ? void 0 : d[null === f || void 0 === f ? void 0 : f.src]) u = null === (p = g.chatGroupMemberTable[null === f || void 0 === f ? void 0 : f.src]) || void 0 === p ? void 0 : p.nickname;
                                                                                    (null === f || void 0 === f ? void 0 : f.src) === (null === n || void 0 === n ? void 0 : n.userWeaId) && (c = !0)
                                                                                }
                                                                                var h = (0, a.A)((0, s.A)((0, a.A)({}, t.chatGroups[r]), {
                                                                                    lastMsgTime: e.createTime,
                                                                                    lastMsgType: e.msgType,
                                                                                    lastMsgSender: u,
                                                                                    lastMsgPreview: e.msgType === b.Wr.GROUP_TEXT ? e.preview : "i18n-file"
                                                                                }), !c && "number" === typeof(null === (o = t.chatGroups[r]) || void 0 === o ? void 0 : o.unreadCount) && {
                                                                                    unreadCount: (null === (i = t.chatGroups[r]) || void 0 === i ? void 0 : i.unreadCount) + 1
                                                                                });
                                                                                O[r] = h
                                                                            } catch (v) {
                                                                                console.log(v)
                                                                            }
                                                                        })), t.chatGroups = O.sort((function(e, n) {
                                                                            return n.lastMsgTime > e.lastMsgTime ? 1 : -1
                                                                        }))
                                                                    }
                                                                }
                                                                t.serviceGroupLastSeqNo2 = null === (h = T[T.length - 1]) || void 0 === h ? void 0 : h.seqNo2, T = []
                                                            }
                                                    } else t.serviceGroupLastSeqNo2 = p
                                                } else T = []
                                        })).catch((function(e) {
                                            console.log(e), T = []
                                        }));
                                    case 2:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))).apply(this)
                    },
                    setTimelineInterval: function(e) {
                        "number" === typeof e && (this.timelineInterval = 1e3 * e)
                    },
                    updateLargeGroupMsgsFromPulling: function(e) {
                        var n = e.channelId,
                            t = e.msgs;
                        e.updateTempList;
                        return (0, o.A)(d().mark((function e() {
                            var o, i, u, l, p, f, g, h;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = this, (u = t.filter((function(e) {
                                                return e.msgType === b.Wr.CHANNEL_DELETE_MSG
                                            }))).length > 0 && u.forEach((function(e) {
                                                o.changeGroupMessageStatus({
                                                    channelId: e.channelId,
                                                    msgId: e.deleteMsgId,
                                                    status: r.deleted
                                                }), o.deletedChannelMsgs.some((function(n) {
                                                    return n.id === e.msgId
                                                })) || o.setDeletedChannelMsgs({
                                                    msgId: e.deleteMsgId,
                                                    channelId: e.channelId
                                                }), o.updateChannelLastMsgByDeleteMsgId({
                                                    msgId: e.deleteMsgId,
                                                    channelId: e.channelId
                                                })
                                            })), l = (0, c.A)(t).reverse(), p = (null === (i = this.channelMessages[n]) || void 0 === i ? void 0 : i.msgs) || [], (f = l.concat(p)).sort((function(e, n) {
                                                return e.msgId - n.msgId
                                            })), f = (f = (0, w.R3)(f)).filter((function(e) {
                                                return e.msgType !== b.Wr.CHANNEL_DELETE_MSG
                                            })), this.channelMessages[n] = (0, s.A)((0, a.A)({}, this.channelMessages[n]), {
                                                msgs: f
                                            }), !((null === t || void 0 === t ? void 0 : t.length) > 0)) {
                                            e.next = 17;
                                            break
                                        }
                                        return g = t.filter((function(e) {
                                            return "CHANNEL_FILE" === e.msgType
                                        })), h = g.map((function(e) {
                                            return null === e || void 0 === e ? void 0 : e.msgId
                                        })), this.updateLargeGroupAvatarMap(t), e.next = 17, this.batchFetchChannelFileDictionary({
                                            msgIds: h,
                                            channelId: n
                                        });
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))).apply(this)
                    },
                    setSocketStatus: function(e) {
                        this.socketStatus = e
                    },
                    setLargeGroupRateLimitModalVisible: function(e) {
                        this.largeGroupRateLimitModalVisible = e
                    },
                    setMuteStatusById: function(e) {
                        var n = e.channelId,
                            t = e.groupId,
                            r = e.status;
                        if (n) {
                            var o = this.channelGroups.findIndex((function(e) {
                                return "".concat(e.id) === "".concat(n)
                            }));
                            if (-1 !== o) {
                                var i = (0, c.A)(this.channelGroups);
                                i[o] = (0, s.A)((0, a.A)({}, i[o]), {
                                    disturb: r
                                }), this.channelGroups = i
                            }
                        }
                        if (t) {
                            var u = this.chatGroups.findIndex((function(e) {
                                return "".concat(e.groupId) === "".concat(t)
                            }));
                            if (-1 !== u) {
                                var l = (0, c.A)(this.chatGroups);
                                l[u] = (0, s.A)((0, a.A)({}, l[u]), {
                                    muted: r
                                }), this.chatGroups = l
                            }
                        }
                    },
                    setTempChannelMsgList: function(e) {
                        this.tempChannelMsgList = e
                    },
                    setIsDisplayTempChannelMsgList: function(e) {
                        this.isDisplayTempChannelMsgList = e
                    },
                    postSeekTargetChannelMsgById: function(e) {
                        var n = e.channelId,
                            t = e.msgId,
                            r = e.lastMsgId,
                            i = e.lastMsgSeqNo,
                            u = e.callback,
                            l = e.errorCallback;
                        return (0, o.A)(d().mark((function e() {
                            var p, f, g, h, m, y, b, A, I, M, x, C, k, E, _, S, T, O, P, L, N;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, v.L0)({
                                            channelId: n,
                                            msgId: t,
                                            lastMsgId: r,
                                            lastMsgSeqNo: i,
                                            pullSize: 30
                                        });
                                    case 3:
                                        if (p = e.sent, f = [], !(null === p || void 0 === p ? void 0 : p.data) || "000000" !== (null === p || void 0 === p ? void 0 : p.code)) {
                                            e.next = 29;
                                            break
                                        }
                                        if (I = (null === p || void 0 === p || null === (g = p.data) || void 0 === g ? void 0 : g.cur) || [], M = (null === p || void 0 === p || null === (h = p.data) || void 0 === h ? void 0 : h.previous) || [], x = (null === p || void 0 === p || null === (m = p.data) || void 0 === m ? void 0 : m.nexts) || [], C = M.concat(I).concat(x), k = (null === p || void 0 === p || null === (y = p.data) || void 0 === y ? void 0 : y.lastMsgId) || C[0], E = !0, _ = function() {
                                                var e = (0, o.A)(d().mark((function e() {
                                                    var t, r, o, i, a, s;
                                                    return d().wrap((function(e) {
                                                        for (;;) switch (e.prev = e.next) {
                                                            case 0:
                                                                return e.next = 2, (0, v.t8)({
                                                                    channelId: n,
                                                                    lastMsgId: k
                                                                });
                                                            case 2:
                                                                if (!(t = e.sent).success) {
                                                                    e.next = 15;
                                                                    break
                                                                }
                                                                if (s = (null === (r = t.data) || void 0 === r ? void 0 : r.msgs) || [], E = !!(null === (o = t.data) || void 0 === o ? void 0 : o.hasMore), k = (null === (i = t.data) || void 0 === i ? void 0 : i.lastMsgId) ? null === (a = t.data) || void 0 === a ? void 0 : a.lastMsgId : s[s.length - 1].msgId, s = s.reverse(), !((C = s.concat(C)).length < 30 && E)) {
                                                                    e.next = 13;
                                                                    break
                                                                }
                                                                return e.next = 13, _();
                                                            case 13:
                                                                e.next = 16;
                                                                break;
                                                            case 15:
                                                                l && l(t);
                                                            case 16:
                                                            case "end":
                                                                return e.stop()
                                                        }
                                                    }), e)
                                                })));
                                                return function() {
                                                    return e.apply(this, arguments)
                                                }
                                            }(), !(C.length < 30)) {
                                            e.next = 17;
                                            break
                                        }
                                        return e.next = 17, _();
                                    case 17:
                                        if (S = C[C.length - 1], (null === (T = (null === (b = this.channelMessages[n]) || void 0 === b ? void 0 : b.msgs) || []) || void 0 === T || null === (A = T.includes) || void 0 === A ? void 0 : A.call(T, (function(e) {
                                                return e.msgId === (null === S || void 0 === S ? void 0 : S.msgId)
                                            }))) ? ((O = C.concat(T)).sort((function(e, n) {
                                                return e.msgId - n.msgId
                                            })), O = (0, w.R3)(O), this.channelMessages[n] = (0, s.A)((0, a.A)({}, this.channelMessages[n]), {
                                                msgs: O
                                            }), this.tempChannelMsgList = null, this.isDisplayTempChannelMsgList = !1, f = (0, c.A)(O)) : (C.sort((function(e, n) {
                                                return e.msgId - n.msgId
                                            })), C = (0, w.R3)(C), this.tempChannelMsgList = {
                                                channelId: n,
                                                msgs: C,
                                                hasMorePrev: !0,
                                                hasMoreNext: null === p || void 0 === p || null === (P = p.data) || void 0 === P ? void 0 : P.hasGap
                                            }, this.isDisplayTempChannelMsgList = !0, f = (0, c.A)(C)), u && u(), !((null === f || void 0 === f ? void 0 : f.length) > 0)) {
                                            e.next = 27;
                                            break
                                        }
                                        return L = f.filter((function(e) {
                                            return "CHANNEL_FILE" === e.msgType
                                        })), N = L.map((function(e) {
                                            return null === e || void 0 === e ? void 0 : e.msgId
                                        })), this.updateLargeGroupAvatarMap(f), e.next = 27, this.batchFetchChannelFileDictionary({
                                            msgIds: N,
                                            channelId: n
                                        });
                                    case 27:
                                        e.next = 30;
                                        break;
                                    case 29:
                                        null === l || void 0 === l || l(p);
                                    case 30:
                                        e.next = 35;
                                        break;
                                    case 32:
                                        e.prev = 32, e.t0 = e.catch(0), null === l || void 0 === l || l(e.t0);
                                    case 35:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this, [
                                [0, 32]
                            ])
                        }))).apply(this)
                    },
                    postChannelTempMsgListLoadNext: function(e) {
                        var n = e.channelId,
                            t = e.msgId,
                            r = e.callback,
                            i = e.toMsgId;
                        return (0, o.A)(d().mark((function e() {
                            var o, u, c, l, p, f, g, h, m, y, b, A, I, M, x;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 3, (0, v.AD)({
                                            msgId: t,
                                            channelId: n,
                                            toMsgId: i
                                        });
                                    case 3:
                                        if (f = e.sent, g = (null === f || void 0 === f || null === (o = f.data) || void 0 === o ? void 0 : o.msgs) || [], h = (null === f || void 0 === f || null === (u = f.data) || void 0 === u ? void 0 : u.hasMore) || !1, m = g, y = Array.isArray(null === (c = this.channelMessages[n]) || void 0 === c ? void 0 : c.msgs) ? this.channelMessages[n].msgs : [], b = (null === (l = this.tempChannelMsgList) || void 0 === l ? void 0 : l.msgs) || [], A = g[g.length - 1], !h || (null === y || void 0 === y || null === (p = y.includes) || void 0 === p ? void 0 : p.call(y, (function(e) {
                                                return e.msgId === (null === A || void 0 === A ? void 0 : A.msgId)
                                            }))) ? ((I = b.concat(g).concat(y)).sort((function(e, n) {
                                                return e.msgId - n.msgId
                                            })), I = (0, w.R3)(I), this.channelMessages[n] = (0, s.A)((0, a.A)({}, this.channelMessages[n]), {
                                                msgs: I
                                            }), this.tempChannelMsgList = null, this.isDisplayTempChannelMsgList = !1) : (g.sort((function(e, n) {
                                                return e.msgId - n.msgId
                                            })), g = g.filter((function(e, n, t) {
                                                return n === t.findIndex((function(n) {
                                                    return n.msgId === e.msgId
                                                }))
                                            })), this.tempChannelMsgList = {
                                                channelId: n,
                                                msgs: b.concat(g),
                                                hasMorePrev: !0,
                                                hasMoreNext: h
                                            }), r && r(), !((null === m || void 0 === m ? void 0 : m.length) > 0)) {
                                            e.next = 18;
                                            break
                                        }
                                        return M = m.filter((function(e) {
                                            return "CHANNEL_FILE" === e.msgType
                                        })), x = M.map((function(e) {
                                            return null === e || void 0 === e ? void 0 : e.msgId
                                        })), this.updateLargeGroupAvatarMap(m), e.next = 18, this.batchFetchChannelFileDictionary({
                                            msgIds: x,
                                            channelId: n
                                        });
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, this)
                        }))).apply(this)
                    },
                    updateLargeGroupAvatarMap: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            t = this;
                        Array.isArray(e) && e.length > 0 && e.forEach((function(e) {
                            var r = (null === e || void 0 === e ? void 0 : e.senderId) || (null === e || void 0 === e ? void 0 : e.uid);
                            r && e.avatar && (!t.largeGroupAvatarMap[r] || n && t.largeGroupAvatarMap[r] !== e.avatar) && (t.largeGroupAvatarMap[r] = e.avatar)
                        }))
                    },
                    setAllAsset: function(e) {
                        this.allAsset = e
                    },
                    getRedPacketCreateConfig: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        return (0, o.A)(d().mark((function t() {
                            var r;
                            return d().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        return n && (this.redPacketCreateConfig = null), t.prev = 1, t.next = 4, this.getChannelDetail(e);
                                    case 4:
                                        (null === (r = t.sent) || void 0 === r ? void 0 : r.enableRedPacket) && (null === r || void 0 === r ? void 0 : r.redPacketTheme) ? this.redPacketCreateConfig = {
                                            enableRedPacket: r.enableRedPacket,
                                            redPacketTheme: r.redPacketTheme,
                                            channelId: e
                                        }: this.redPacketCreateConfig = null, t.next = 12;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(1), console.error(t.t0), this.redPacketCreateConfig = null;
                                    case 12:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, this, [
                                [1, 8]
                            ])
                        }))).apply(this)
                    },
                    updateGrabPacketConfig: function(e) {
                        var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            t = arguments.length > 2 ? arguments[2] : void 0;
                        return (0, o.A)(d().mark((function r() {
                            var o, i, u;
                            return d().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if ((null === e || void 0 === e ? void 0 : e.grabCode) || (this.grabRedPacketConfig = null), r.prev = 1, !(null === e || void 0 === e ? void 0 : e.grabCode)) {
                                            r.next = 12;
                                            break
                                        }
                                        if (!n) {
                                            r.next = 7;
                                            break
                                        }
                                        this.grabRedPacketConfig = (0, a.A)({
                                            visible: !0,
                                            redPacketTheme: null === e || void 0 === e ? void 0 : e.theme
                                        }, e), r.next = 12;
                                        break;
                                    case 7:
                                        return r.next = 9, (0, I.Sl)({
                                            grabCode: null === e || void 0 === e ? void 0 : e.grabCode,
                                            uid: null === e || void 0 === e ? void 0 : e.uid
                                        });
                                    case 9:
                                        o = r.sent, console.log("res ---\x3e>>>>   ", o), o.success ? (null === o || void 0 === o || null === (i = o.data) || void 0 === i ? void 0 : i.grabbed) ? (this.grabRedPacketConfig = null, t && t(), this.changeRedMessageStatus({
                                            channelId: null === e || void 0 === e ? void 0 : e.channelId,
                                            orderId: null === e || void 0 === e ? void 0 : e.orderId
                                        })) : this.grabRedPacketConfig = (0, s.A)((0, a.A)({
                                            visible: !0
                                        }, e, o.data || {}), {
                                            grabCode: null === e || void 0 === e ? void 0 : e.grabCode,
                                            redPacketTheme: null === e || void 0 === e ? void 0 : e.theme
                                        }) : "403064" === o.code || "403802" === o.code ? (this.grabRedPacketConfig = (0, s.A)((0, a.A)({
                                            visible: !0
                                        }, e), {
                                            fullyClaimed: !0,
                                            grabCode: null === e || void 0 === e ? void 0 : e.grabCode,
                                            redPacketTheme: null === e || void 0 === e ? void 0 : e.theme
                                        }), this.changeRedMessageStatus({
                                            channelId: null === e || void 0 === e ? void 0 : e.channelId,
                                            orderId: null === e || void 0 === e ? void 0 : e.orderId
                                        }, "FULLY_CLAIMED_AND_CLICKED"), (0, k.uh)(null === e || void 0 === e ? void 0 : e.orderId, "finished"), u = {
                                            channelId: null === e || void 0 === e ? void 0 : e.channelId,
                                            orderId: null === e || void 0 === e ? void 0 : e.orderId,
                                            user_id: this.uid || "",
                                            isMiniApp: f.lq || !1
                                        }, (0, x.$3)("group-service-redpacket-clickbutallclaimed", {
                                            extraInfo: f.lq ? JSON.stringify(u) : u
                                        })) : "403066" === o.code ? (this.grabRedPacketConfig = (0, s.A)((0, a.A)({
                                            visible: !0
                                        }, e), {
                                            grabCode: null === e || void 0 === e ? void 0 : e.grabCode,
                                            redPacketTheme: null === e || void 0 === e ? void 0 : e.theme
                                        }), this.changeRedMessageStatus({
                                            channelId: null === e || void 0 === e ? void 0 : e.channelId,
                                            orderId: null === e || void 0 === e ? void 0 : e.orderId
                                        }, "EXPIRED")) : this.grabRedPacketConfig = (0, s.A)((0, a.A)({
                                            visible: !0
                                        }, e), {
                                            errorMessage: null === o || void 0 === o ? void 0 : o.message,
                                            grabCode: null === e || void 0 === e ? void 0 : e.grabCode,
                                            redPacketTheme: null === e || void 0 === e ? void 0 : e.theme
                                        });
                                    case 12:
                                        r.next = 18;
                                        break;
                                    case 14:
                                        r.prev = 14, r.t0 = r.catch(1), console.error(r.t0), this.grabRedPacketConfig = null;
                                    case 18:
                                    case "end":
                                        return r.stop()
                                }
                            }), r, this, [
                                [1, 14]
                            ])
                        }))).apply(this)
                    },
                    setActionMenuVisible: function(e) {
                        this.actionMenuVisible = e
                    }
                },
                views: {
                    allChannelChatGroups: function(e) {
                        var n = e.channelGroups || [],
                            t = e.chatGroups || [],
                            r = n.concat(t),
                            o = r.filter((function(e) {
                                return (null === e || void 0 === e ? void 0 : e.unreadCount) > 0
                            })),
                            i = r.filter((function(e) {
                                return !(null === e || void 0 === e ? void 0 : e.unreadCount) || 0 === (null === e || void 0 === e ? void 0 : e.unreadCount)
                            })),
                            a = function(e, n) {
                                var t, r, o = (null === e || void 0 === e ? void 0 : e.lastMsgTime) ? null === e || void 0 === e ? void 0 : e.lastMsgTime : (null === e || void 0 === e || null === (t = e.lastMsg) || void 0 === t ? void 0 : t.createTime) || 0;
                                return ((null === n || void 0 === n ? void 0 : n.lastMsgTime) ? null === n || void 0 === n ? void 0 : n.lastMsgTime : (null === n || void 0 === n || null === (r = n.lastMsg) || void 0 === r ? void 0 : r.createTime) || 0) > o ? 1 : -1
                            };
                        return o.sort(a), i.sort(a), (0, c.A)(o).concat((0, c.A)(i))
                    },
                    currentServiceGroup: function(e) {
                        return e.currentChannelGroupId ? e.channelGroups.find((function(n) {
                            return String(n.id) === String(e.currentChannelGroupId)
                        })) || {} : e.currentServiceGroupId && e.chatGroups.find((function(n) {
                            return String(n.groupId) === String(e.currentServiceGroupId)
                        })) || {}
                    },
                    currentChannelGroup: function(e) {
                        return e.channelGroups.find((function(n) {
                            return String(n.id) === String(e.currentChannelGroupId)
                        })) || {}
                    },
                    currentServiceGroupMsgs: function(e) {
                        try {
                            if (e.currentServiceGroupId) {
                                var n, t, r, o = (null === (n = this.groupMessages[e.currentServiceGroupId]) || void 0 === n || null === (t = n.msgs) || void 0 === t || null === (r = t.map) || void 0 === r ? void 0 : r.call(t, (function(e, n, t) {
                                    var r;
                                    return "string" === typeof e.content ? r = JSON.parse(e.content || "{}") : "object" === typeof e.content && (r = e.content), (0, s.A)((0, a.A)({}, e), {
                                        content: r
                                    })
                                }))) || [];
                                return Array.isArray(o) ? o : []
                            }
                            if (e.currentChannelGroupId) {
                                var i, u, c, l = (null === (i = this.channelMessages[e.currentChannelGroupId]) || void 0 === i || null === (u = i.msgs) || void 0 === u || null === (c = u.map) || void 0 === c ? void 0 : c.call(u, (function(e, n, t) {
                                    var r;
                                    return "string" === typeof e.content ? r = JSON.parse(e.content || "{}") : "object" === typeof e.content && (r = e.content), (0, s.A)((0, a.A)({}, e), {
                                        content: r
                                    })
                                }))) || [];
                                return Array.isArray(l) ? l : []
                            }
                            return []
                        } catch (d) {
                            return []
                        }
                    },
                    currentServiceGroupMemberMap: function(e) {
                        var n;
                        return (null === e || void 0 === e || null === (n = e.currentServiceGroup) || void 0 === n ? void 0 : n.chatGroupMemberTable) || {}
                    },
                    currentServiceGroupMemberList: function(e) {
                        return Object.values(null === e || void 0 === e ? void 0 : e.currentServiceGroupMemberMap)
                    },
                    currentChannelUnreadMsgIds: function(e) {
                        try {
                            return e.unreadMentionMsgChannelMap[e.currentChannelGroupId] || []
                        } catch (n) {
                            return console.error(n), []
                        }
                    },
                    hasChatRender: function(e) {
                        return e.hasGroup
                    },
                    unreadCount: function(e) {
                        return e.chatGroups.reduce((function(e, n) {
                            return n.unreadCount + e
                        }), 0) + e.channelGroups.reduce((function(e, n) {
                            return ((null === n || void 0 === n ? void 0 : n.disturb) ? 0 : (null === n || void 0 === n ? void 0 : n.unreadCount) || 0) + e
                        }), 0) || 0
                    },
                    currentChannelMembers: function(e) {
                        var n;
                        return (null === (n = e.channelMembersResponse) || void 0 === n ? void 0 : n.members) || []
                    },
                    currentChannelMembersForMention: function(e) {
                        var n;
                        return (null === (n = e.channelMembersResponseForMention) || void 0 === n ? void 0 : n.members) || []
                    }
                }
            })
        },
        Zhab: (e, n, t) => {
            "use strict";
            t.d(n, {
                x: () => g,
                N: () => y
            });
            var r, o = t("sViW"),
                i = t("Pz56"),
                a = t.n(i),
                s = t("DTvD"),
                u = t("888e"),
                c = t("TUk3"),
                l = t("c+qD"),
                d = !1;
            ! function(e) {
                e[e.CONNECTING = 0] = "CONNECTING", e[e.OPEN = 1] = "OPEN", e[e.CLOSING = 2] = "CLOSING", e[e.CLOSED = 3] = "CLOSED"
            }(r || (r = {}));
            var p = function(e, n) {
                    return "".concat(e, "/chat?").concat(Object.keys(n).map((function(e) {
                        return Array.isArray(n[e]) ? n[e].map((function(n) {
                            return "".concat(e, "=").concat(n)
                        })).join("&") : "".concat(e, "=").concat(n[e])
                    })).join("&"))
                },
                f = function e(n) {
                    var t = n.getWsToken,
                        i = n.socketDomain,
                        s = n.onopen,
                        f = n.onmessage,
                        g = n.onclose,
                        h = n.onerror,
                        v = n.onNotSupportSocket,
                        m = n.getWsDomain,
                        y = n.setSocketStatus,
                        b = n.setIsSocketReconnecting,
                        A = this;
                    (0, u.A)(this, e), this.getWsToken = t, this.socketDomain = i, this.supportSocket = !0, this.reconnectTime = 0, this.maxReconnectTime = 2e4, this.dead = !1, this.onopenCallback = s, this.onmessageCallback = f, this.oncloseCallback = g, this.onerrorCallback = h, this.onNotSupportSocket = v, this.isNetworkConnected = null === navigator || void 0 === navigator ? void 0 : navigator.onLine;
                    var I = "HEART_BEAT";
                    null === window || void 0 === window || window.addEventListener("offline", (function() {
                        var e;
                        console.log("OFFLINE"), A.isNetworkConnected = !1, null === (e = A) || void 0 === e || e.close()
                    })), null === window || void 0 === window || window.addEventListener("online", (function() {
                        var e, n;
                        (console.log("ONLINE"), A.isNetworkConnected = !0, null === (e = A) || void 0 === e ? void 0 : e.instance) && (null === (n = A) || void 0 === n || n.reconnect())
                    })), this.performHeartBeat = function() {
                        A.heartBeatReset(), A.heartBeat()
                    }, this.heartBeat = function() {
                        A.dead || (A.pingTimeoutId = setTimeout((function() {
                            var e = {
                                msgType: I
                            };
                            try {
                                A.instance.send(JSON.stringify(e))
                            } catch (n) {}
                            A.pollingIntervalId = setInterval((function() {
                                try {
                                    A.instance && A.instance.readyState === r.OPEN && A.instance.send(JSON.stringify(e))
                                } catch (n) {}
                            }), 1e4), A.pongTimeoutId = setTimeout((function() {
                                A.instance && ((0, c.v)("close by heartBeat"), A.instance.close())
                            }), 3e4)
                        }), 1e4))
                    }, this.heartBeatReset = function() {
                        A.pingTimeoutId && clearTimeout(A.pingTimeoutId), A.pongTimeoutId && clearTimeout(A.pongTimeoutId), A.pollingIntervalId && clearInterval(A.pollingIntervalId)
                    };
                    var M = this;
                    this.connect = (0, o.A)(a().mark((function e() {
                        var n, o, i;
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, c.v)("enter connect"), y && y(l.cZ.CONNECTING), e.prev = 2, M.supportSocket) {
                                        e.next = 7;
                                        break
                                    }
                                    return (0, c.v)("This browser does not supports WebSocket"), M.onNotSupportSocket && M.onNotSupportSocket(), e.abrupt("return");
                                case 7:
                                    if (!M.dead) {
                                        e.next = 10;
                                        break
                                    }
                                    return (0, c.v)("error, socket dead."), e.abrupt("return");
                                case 10:
                                    if (M.reconnectTime += 1, !M.instance) {
                                        e.next = 27;
                                        break
                                    }
                                    if ((0, c.v)("\u5df2\u5b58\u5728socket\u5b9e\u4f8b"), (n = M.instance.readyState) !== r.CLOSING && !r.CLOSED) {
                                        e.next = 23;
                                        break
                                    }
                                    if ((0, c.v)("socket\u5df2\u5173\u95ed\uff0c\u51c6\u5907\u91cd\u8fde"), !(M.reconnectTime > M.maxReconnectTime)) {
                                        e.next = 21;
                                        break
                                    }
                                    return (0, c.v)("\u5df2\u8fbe\u5230\u91cd\u8fde\u6b21\u6570\u4e0a\u7ebf", M.maxReconnectTime), M.dead = !0, M.onDead && M.onDead(), e.abrupt("return");
                                case 21:
                                    e.next = 25;
                                    break;
                                case 23:
                                    return (0, c.v)("socket\u5df2\u8fde\u63a5\u4e2d", n), e.abrupt("return");
                                case 25:
                                    e.next = 32;
                                    break;
                                case 27:
                                    if (!(M.reconnectTime > M.maxReconnectTime)) {
                                        e.next = 32;
                                        break
                                    }
                                    return (0, c.v)("\u5df2\u8fbe\u5230\u91cd\u8fde\u6b21\u6570\u4e0a\u7ebf", M.maxReconnectTime), M.dead = !0, M.onDead && M.onDead(), e.abrupt("return");
                                case 32:
                                    return e.next = 34, t();
                                case 34:
                                    if (o = e.sent) {
                                        e.next = 38;
                                        break
                                    }
                                    return (0, c.v)("getWsToken failed"), e.abrupt("return");
                                case 38:
                                    i = p(M.socketDomain, {
                                        token: o,
                                        source: "channel"
                                    }), M.instance = new WebSocket(i), M.instance.onopen = function(e) {
                                        y && y(l.cZ.CONNECTED), d && (d = !1, b && b(!1)), M.dead = !1, M.performHeartBeat(), M.onopenCallback && M.onopenCallback(e)
                                    }, M.instance.onmessage = function(e) {
                                        var n;
                                        try {
                                            n = JSON.parse(null === e || void 0 === e ? void 0 : e.data)
                                        } catch (t) {
                                            return
                                        }
                                        n.msgType === I ? M.performHeartBeat && M.performHeartBeat() : M.onmessageCallback(n)
                                    }, M.instance.onclose = function(e) {
                                        y && y(l.cZ.DISCONNECTED), M.heartBeatReset(), M.oncloseCallback && M.oncloseCallback(e), 4004 !== (null === e || void 0 === e ? void 0 : e.code) && M.reconnect()
                                    }, M.instance.onerror = function(e) {
                                        y && y(l.cZ.ERROR), M.heartBeatReset(), M.reconnect(), M.onerrorCallback && M.onerrorCallback(e)
                                    }, e.next = 49;
                                    break;
                                case 46:
                                    e.prev = 46, e.t0 = e.catch(2), (0, c.v)(e.t0);
                                case 49:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 46]
                        ])
                    }))), this.reconnect = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && (A.dead = !1), A.isNetworkConnected && (d = !0, y && y(l.cZ.RECONNECTING), b && b(!0), m && m({
                            callback: function(e) {
                                e && (A.socketDomain = e, (0, c.v)("GET NEW DOMAIN: ".concat(e))), A.connect(), (0, c.v)("onclose ---\x3e reconnect")
                            }
                        }))
                    }, this.sendMsg = function(e) {
                        A.instance && A.instance.readyState === r.OPEN ? A.instance.send(e) : A.instance && A.instance.readyState === r.CONNECTING ? setTimeout((function() {
                            A.sendMsg(e)
                        }), 1e3) : console.warn("message not send, message = ".concat(JSON.stringify(e)))
                    }, this.close = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        A.instance && A.instance.close(), e && (A.reconnectTime = 0), A.heartBeatReset()
                    }, this.getSocketReadyState = function() {
                        return A.instance ? A.instance.readyState : r.CONNECTING
                    }
                };
            var g, h = t("aCc/"),
                v = t("sF4t"),
                m = !1,
                y = function(e) {
                    var n = e.skipFetchGroupList,
                        t = void 0 !== n && n,
                        r = e.onOpenCallback,
                        i = void 0 === r ? function() {} : r,
                        u = e.onErrorCallback,
                        c = void 0 === u ? function() {} : u,
                        l = e.closeChatSocketWhenUnmount,
                        d = void 0 !== l && l,
                        p = (0, v.wA)(),
                        y = (0, v.d4)((function(e) {
                            return e.chat
                        })).socketDomain,
                        b = function() {
                            var e = (0, o.A)(a().mark((function e(n) {
                                var t;
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 3, p.chat.checkHasChat({
                                                getList: !n
                                            });
                                        case 3:
                                            return e.next = 5, null === p || void 0 === p || null === (t = p.chat) || void 0 === t ? void 0 : t.getChatWsDomain();
                                        case 5:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(n) {
                                return e.apply(this, arguments)
                            }
                        }();
                    (0, s.useEffect)((function() {
                        g && (null === g || void 0 === g ? void 0 : g.dead) && g.connect(), t || b(t)
                    }), []), (0, s.useEffect)((function() {
                        try {
                            var e, n, r;
                            if (y && void 0 === g && !m) m = !0, (0, h.vF)("initChatSocket ---------\u300b\u3009\u300b 123"), o = {
                                getWsToken: null === p || void 0 === p || null === (e = p.chat) || void 0 === e ? void 0 : e.getChatToken,
                                socketDomain: y,
                                onopen: i,
                                onmessage: p.chat.onChatMessage,
                                onclose: function(e) {
                                    var n;
                                    4004 === (null === e || void 0 === e ? void 0 : e.code) && (null === p || void 0 === p || null === (n = p.chat) || void 0 === n || n.setOpenedChatGroupModalVisible(!0))
                                },
                                onerror: c,
                                onReconnect: function() {
                                    var e;
                                    null === p || void 0 === p || null === (e = p.chat) || void 0 === e || e.logSocketReconnect()
                                },
                                getWsDomain: null === p || void 0 === p || null === (n = p.chat) || void 0 === n ? void 0 : n.getChatWsDomain,
                                setSocketStatus: null === p || void 0 === p || null === (r = p.chat) || void 0 === r ? void 0 : r.setSocketStatus,
                                setIsSocketReconnecting: p.chat.setIsSocketReconnecting
                            }, (g = new f(o)).connect()
                        } catch (a) {
                            (0, h.vF)("initChatSocket error", a)
                        }
                        var o;
                        return function() {
                            t || d && ((0, h.vF)("closeChatSocketWhenUnmount"), null === g || void 0 === g || g.close(), g = void 0)
                        }
                    }), [y, t, i, c, d, p])
                }
        },
        r0YG: (e, n, t) => {
            "use strict";
            t.d(n, {
                I: () => r
            });
            var r = ""
        },
        ecmL: (e, n, t) => {
            "use strict";
            t.d(n, {
                AD: () => z,
                CB: () => f,
                FW: () => g,
                G0: () => T,
                Iz: () => L,
                KJ: () => J,
                Kt: () => h,
                L0: () => $,
                MB: () => F,
                Mo: () => K,
                Ns: () => m,
                Nv: () => C,
                Oh: () => _,
                R2: () => y,
                RS: () => p,
                U7: () => U,
                V4: () => k,
                V5: () => H,
                VY: () => v,
                a3: () => P,
                aJ: () => w,
                av: () => A,
                eR: () => q,
                hV: () => R,
                hm: () => W,
                is: () => B,
                jP: () => S,
                l1: () => I,
                ou: () => N,
                pn: () => b,
                sO: () => E,
                t7: () => D,
                t8: () => j,
                vO: () => x,
                vx: () => G,
                y$: () => O
            });
            var r = t("sViW"),
                o = t("BK7R"),
                i = t("QUKP"),
                a = t("Pz56"),
                s = t.n(a),
                u = t("a59x"),
                c = t("6FIE"),
                l = t("r0YG"),
                d = t("jhL5"),
                p = (t("pqTj"), function() {
                    return (0, c.get)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/token-v2?userType=1"))
                }),
                f = function() {
                    return (0, c.get)("".concat(l.I, "/bapi/composite/v1/public/common/config/client/dynamic-domain"))
                },
                g = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/chat-groups"), {
                        token: e,
                        channel: "app"
                    })
                },
                h = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/msg"), (0, i.A)((0, o.A)({}, e), {
                        channel: "app"
                    }))
                },
                v = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/group-list"), {
                        token: e
                    })
                },
                m = function() {
                    return (0, c.get)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/mini-program-applicable"))
                },
                y = function(e) {
                    return (null === e || void 0 === e ? void 0 : e.groupId) ? (delete e.channelId, (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/file-upload"), (0, i.A)((0, o.A)({}, e), {
                        channel: "app"
                    }))) : (null === e || void 0 === e ? void 0 : e.channelId) ? (delete e.groupId, (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-file-upload-url"), e)) : void 0
                },
                b = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/private/haodesk/saas/std/channel/batch-get-file-upload-url"), e)
                },
                A = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/leave-group"), {
                        groupId: e
                    })
                };

            function I(e) {
                return M.apply(this, arguments)
            }

            function M() {
                return (M = (0, r.A)(s().mark((function e(n) {
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/toggle-mute"), n));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var x = function() {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/mark-all-as-read"))
                },
                C = function() {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/mark-all-as-read"))
                };

            function k(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                return (0, c.post)("".concat(l.I, "/bapi/apex/v1/private/apex/inbox/message-text/select"), e, {
                    usePrefetchCache: n
                })
            }

            function w(e) {
                return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/trigger-group-assistant"), e)
            }

            function E(e) {
                return (0, c.post)("".concat(l.I, "/bapi/apex/v1/private/apex/inbox/message-text/read_delete"), e)
            }
            var _ = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    return (0, c.post)("".concat(l.I, "/bapi/apex/v2/friendly/apex/marketing/banners"), {}, {
                        usePrefetchCache: e
                    })
                },
                S = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    return (0, c.get)((0, u.Eg)("".concat(l.I, "/bapi/apex/v1/public/apex/market/notice/get"), e), {
                        usePrefetchCache: n
                    })
                },
                T = function(e) {
                    return (0, c.get)((0, u.Eg)("".concat(l.I, "/bapi/apex/v1/public/apex/cms/catalog/query"), (0, o.A)({
                        needIcon: 1,
                        needAll: "0",
                        type: 1,
                        lan: (0, d.yV)("language")
                    }, e)), {
                        headers: {
                            lang: (0, d.yV)("language")
                        }
                    })
                },
                O = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
                        pageNo: 1,
                        pageSize: 20
                    };
                    return (0, c.get)((0, u.Eg)("".concat(l.I, "/bapi/apex/v1/public/apex/cms/article/list/query"), (0, o.A)({
                        type: 1
                    }, e)), {
                        headers: {
                            lang: (0, d.yV)("language")
                        }
                    })
                },
                P = function(e) {
                    return (0, c.get)((0, u.Eg)("".concat(l.I, "/bapi/fe/messagecenter/account/message/list"), e))
                },
                L = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/fe/messagecenter/composite/channel/info"), e)
                },
                N = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/fe/messagecenter/user/read/report"), e)
                },
                R = function(e) {
                    return (0, c.get)("".concat(l.I, "/bapi/fe/messagecenter/user/accountconfig/get?accountId=").concat(e))
                },
                D = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/fe/messagecenter/user/accountconfig/update"), e)
                },
                F = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/fe/messagecenter/user/categoryconfig/update"), e)
                },
                B = function() {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-channels"))
                },
                G = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/block"), e)
                },
                j = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/channel-msgs"), e)
                },
                H = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-file-url"), e)
                },
                U = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/private/haodesk/std/channel/delete-msg"), e)
                },
                q = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/private/haodesk/std/channel/check-user-in-channel"), e)
                };

            function W(e) {
                return V.apply(this, arguments)
            }

            function V() {
                return (V = (0, r.A)(s().mark((function e(n) {
                    return s().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/friendly/haodesk/std/timeline-msg"), n));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var K = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, c.post)("".concat(l.I, "/bapi/accounts/v1/private/account/user/base-detail"), e)
                },
                J = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/private/haodesk/std/messages/unread-cnt-and-info"), {}, {
                        usePrefetchCache: e
                    })
                },
                z = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/private/haodesk/std/channel/pull-msgs"), e)
                },
                $ = function(e) {
                    return (0, c.post)("".concat(l.I, "/bapi/haodesk/v3/private/haodesk/std/channel/seek-msg"), e)
                }
        },
        cyCu: (e, n, t) => {
            "use strict";
            t.d(n, {
                Sl: () => s
            });
            var r = t("BK7R"),
                o = t("QUKP"),
                i = t("6FIE"),
                a = t("r0YG"),
                s = function(e) {
                    return (0, i.post)("".concat(a.I, "/bapi/pay/v1/private/binance-pay/gift-box/code/query"), (0, o.A)((0, r.A)({}, e), {
                        channel: "HAODESK",
                        enablePreChecks: !0
                    }))
                }
        },
        pqTj: (e, n, t) => {
            "use strict";
            t.d(n, {
                C: () => u
            });
            var r = t("r0YG"),
                o = t("6FIE"),
                i = t("HS2I"),
                a = t("NoXm"),
                s = a.cachePromiseStore.checkCacheBeforeRequest("preFetchChannelList", (0, i.requestAfterCheckLogin)((function() {
                    return (0, o.get)("".concat(r.I, "/bapi/fe/messagecenter/composite/channel/list"))
                })));
            s();
            var u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                return e ? s() : (0, o.get)("".concat(r.I, "/bapi/fe/messagecenter/composite/channel/list"))
            }
        },
        ykOY: (e, n, t) => {
            "use strict";
            t.d(n, {
                Cg: () => x,
                DL: () => d,
                Hm: () => p,
                NF: () => s,
                R1: () => y,
                Ri: () => b,
                Uu: () => I,
                Y5: () => A,
                af: () => M,
                bt: () => l,
                kH: () => a,
                nE: () => c,
                r2: () => m,
                rS: () => h,
                sq: () => v,
                uX: () => i,
                ur: () => u,
                xx: () => f,
                yF: () => g
            });
            var r = t("6FIE"),
                o = t("r0YG");

            function i(e) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/chat-group/view-file"), e)
            }

            function a(e) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-channel-members"), e)
            }

            function s(e) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-channel-info"), {
                    id: e
                })
            }

            function u(e, n) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/remove-member"), {
                    uid: e,
                    channelId: n
                })
            }
            var c = function(e) {
                    return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/leave"), {
                        channelId: e
                    })
                },
                l = function(e, n) {
                    return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/set-disturb"), {
                        channelId: e,
                        disturb: n
                    })
                };

            function d(e, n) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-member-info"), {
                    channelId: n,
                    uid: e
                })
            }

            function p(e) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-un-read-mention-msg-ids"), {
                    channelId: e
                })
            }

            function f(e) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-current-member-info"), e)
            }

            function g() {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-channel-labels"))
            }

            function h(e, n, t) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/private/haodesk/std/channel/pin-msg"), {
                    channelId: n,
                    msgId: e,
                    operateAction: t
                }).then((function(e) {
                    return (null === e || void 0 === e ? void 0 : e.data) ? e : Promise.reject(e)
                })).catch((function(e) {
                    return e
                }))
            }

            function v(e) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/private/haodesk/std/channel/get-pin-msg"), {
                    channelId: e
                })
            }

            function m(e, n, t) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/get-historic-channel-msg"), {
                    channelId: e,
                    keyword: n,
                    msgId: t
                })
            }

            function y(e) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/private/haodesk/std/channel/get-original-file-url"), e)
            }

            function b(e) {
                return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/private/haodesk/std/channel/pull-image"), e)
            }

            function A(e) {
                return (0, r.post)("".concat(o.I, "/bapi/composite/v1/public/official-channel/verifyInfo"), e)
            }

            function I(e) {
                return (0, r.post)("https://www.binance.com/bapi/fe/qrcode/get_content", e)
            }
            var M = function(e) {
                    var n = e.channelToken,
                        t = e.type;
                    return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/saas/std/channel/get-channel-join-info"), {
                        channelToken: n,
                        type: t
                    })
                },
                x = function(e) {
                    var n = e.channelToken,
                        t = e.type;
                    return (0, r.post)("".concat(o.I, "/bapi/haodesk/v3/friendly/haodesk/std/channel/join-channel"), {
                        channelToken: n,
                        type: t
                    })
                }
        },
        tjHY: (e, n, t) => {
            "use strict";
            t.d(n, {
                $c: () => p,
                Ay: () => y,
                Cs: () => h,
                JF: () => g,
                P0: () => m,
                RZ: () => v,
                Tl: () => s,
                VJ: () => l,
                c7: () => f,
                cT: () => d,
                uc: () => c
            });
            var r = t("sViW"),
                o = t("tEf9"),
                i = t("Pz56"),
                a = t.n(i);
            console.log("MOCK BMP API"), console.log("import bmpApi index");
            var s = function() {
                    window.history.back()
                },
                u = function() {
                    var e = (0, r.A)(a().mark((function e() {
                        return a().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", {
                                        platform: "web",
                                        model: ""
                                    });
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                c = function() {},
                l = function(e) {},
                d = function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    var r;
                    return (r = localStorage).setItem.apply(r, (0, o.A)(n))
                },
                p = function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    var r;
                    return (r = localStorage).setItem.apply(r, (0, o.A)(n))
                },
                f = function(e) {
                    var n = e.key,
                        t = e.success;
                    return new Promise((function(e, r) {
                        try {
                            var o = {
                                data: localStorage.getItem(n),
                                errMsg: "getStorage web:ok"
                            };
                            null === t || void 0 === t || t(o), e(o)
                        } catch (i) {
                            r(i)
                        }
                    }))
                },
                g = function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    var r;
                    return (r = localStorage).getItem.apply(r, (0, o.A)(n))
                },
                h = function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    console.log("showLoading------", n)
                },
                v = function() {},
                m = function(e) {
                    try {
                        var n = e || {},
                            t = n.duration,
                            r = void 0 === t ? 2e3 : t,
                            o = n.title,
                            i = "js-nc-toast-".concat(Date.now()),
                            a = document.createElement("div");
                        a.id = i, a.textContent = o, a.style.cssText = "\n      position: fixed;\n      top: 50%;\n      left: 50%;\n      z-index: 9999;\n      transform: translate(-50%, -50%);\n      background: #707A8A;\n      color: #EAECEF;\n      padding: 10px 15px;\n      border-radius: 8px;\n      text-align: center;\n      font-size: 14px;\n      font-weight: 400;\n      line-height: 22px;\n    ", document.body.appendChild(a), setTimeout((function() {
                            document.body.removeChild(a)
                        }), r)
                    } catch (s) {
                        console.log(s)
                    }
                };
            const y = {
                chooseMedia: function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                },
                chooseFile: function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                },
                showActionSheet: function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                },
                showToast: m,
                offKeyboardHeightChange: function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                },
                onKeyboardHeightChange: function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                },
                showModal: function() {},
                call: function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                },
                showLoading: h,
                hideLoading: v,
                onAppShow: function() {},
                getStorage: f,
                getStorageSync: g,
                getImageInfo: c,
                setNavigationBarTitle: function() {},
                setStorage: d,
                setStorageSync: p,
                navigateBack: s,
                navigateTo: l,
                navigateToDeepLink: function() {},
                navigateToMiniProgram: function() {},
                exitMiniProgram: function() {},
                reLaunch: function() {},
                getSystemInfo: u,
                stopPullDownRefresh: function() {},
                getSystemInfoSync: function() {
                    return {
                        SDKVersion: "4.5.0"
                    }
                },
                createSelectorQuery: function() {},
                getAppBaseInfo: function() {
                    return {
                        language: "en"
                    }
                },
                connectSocket: function(e) {},
                enableSheetGesture: function(e) {},
                uploadFile: function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t]
                }
            }
        },
        DkGs: (e, n, t) => {
            "use strict";

            function r(e, n) {
                for (var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "id", r = {}, o = 0; o < e.length; o++) r[e[o][t]] = e[o];
                var i = [],
                    a = !0,
                    s = !1,
                    u = void 0;
                try {
                    for (var c, l = n[Symbol.iterator](); !(a = (c = l.next()).done); a = !0) {
                        var d = c.value;
                        r[d[t]] || (r[d[t]] = d, i.push(d))
                    }
                } catch (p) {
                    s = !0, u = p
                } finally {
                    try {
                        a || null == l.return || l.return()
                    } finally {
                        if (s) throw u
                    }
                }
                return i
            }

            function o() {
                return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(e) {
                    var n = 16 * Math.random() | 0;
                    return ("x" == e ? n : 3 & n | 8).toString(16)
                }))
            }

            function i(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20;
                try {
                    for (var t = [], r = 0; r < e.length; r += n) {
                        var o = e.slice(r, r + n);
                        t.push(o)
                    }
                    return t
                } catch (i) {
                    return []
                }
            }
            t.d(n, {
                O6: () => i,
                V: () => r,
                lL: () => a,
                uR: () => o
            });
            var a = Boolean(function() {
                var e;
                if ((null === (e = window.navigator) || void 0 === e ? void 0 : e.userAgent) && /BNC\/[\d.]+/i.test(window.navigator.userAgent)) {
                    var n = window.navigator.userAgent.match(/BNC\/[\d.]+/i);
                    return n ? n[0].slice(4) : ""
                }
                return ""
            }())
        },
        "1AGP": (e, n, t) => {
            "use strict";
            t.d(n, {
                $: () => o,
                Z: () => r
            });
            var r = (0, t("Dz1D").PC)(),
                o = function() {
                    return "0.0.0"
                }
        },
        jhL5: (e, n, t) => {
            "use strict";
            t.d(n, {
                Lj: () => s,
                i0: () => r,
                rZ: () => d,
                x9: () => u,
                yV: () => l,
                zw: () => a
            });
            var r, o = t("zJWh"),
                i = t("+H9S"),
                a = 90,
                s = 42;
            ! function(e) {
                e[e.UNREAD = 1] = "UNREAD", e[e.READ = 2] = "READ", e[e.CLEAR = 3] = "CLEAR"
            }(r || (r = {}));
            var u = {
                "en-US": "en",
                cn: "zh-CN",
                zh_Hans: "zh-CN",
                "ko-KR": "ko",
                "vi-VN": "vi",
                "tr-TR": "tr",
                "es-EM": "es",
                "es-ES": "es-LA",
                es: "es-LA",
                "ru-RU": "ru",
                pt_BR: "pt",
                "ja-JP": "ja",
                zh_Hant: "zh-TW",
                "pl-PL": "pl",
                uk: "uk-UA",
                "fr-FR": "fr"
            };
            i.L.setItem("systemInfo", {});
            var c = {
                    screenHeight: 667,
                    screenWidth: 375,
                    statusBarHeight: 0,
                    platform: "web",
                    language: o.U.read("lang") || "en",
                    notificationAuthorized: !0,
                    version: ""
                },
                l = function(e) {
                    return e ? c[e] : c
                },
                d = !1
        },
        "aCc/": (e, n, t) => {
            "use strict";
            t.d(n, {
                RW: () => a.RW,
                gf: () => l.g,
                vF: () => s.v,
                $q: () => a.$q,
                d8: () => a.d8,
                DD: () => i,
                m6: () => a.m6,
                Tj: () => a.Tj,
                Br: () => a.Br
            });
            t("1AGP");
            var r = t("BK7R"),
                o = t("V+XC");
            t("+Od7"), t("mnh2");

            function i(e, n) {
                (0, o.N7)("0101018", e, (0, r.A)({
                    page: "mini-notification-center"
                }, n))
            }
            var a = t("EGuz"),
                s = t("TUk3"),
                u = t("888e"),
                c = t("tEf9"),
                l = (new(function() {
                    function e() {
                        (0, u.A)(this, e), this.eventMap = {}
                    }
                    var n = e.prototype;
                    return n.on = function(e, n) {
                        var t = this;
                        this.eventMap[e] || (this.eventMap[e] = []);
                        var r = this.eventMap[e].push(n);
                        return function() {
                            t.eventMap[e].splice(r - 1, 1)
                        }
                    }, n.emit = function(e) {
                        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                        var o = this.eventMap[e] || [];
                        o.forEach((function(e) {
                            e.apply(void 0, (0, c.A)(t))
                        }))
                    }, n.emitLast = function(e) {
                        for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                        var o = this.eventMap[e] || [],
                            i = o[o.length - 1];
                        i && i.apply(void 0, (0, c.A)(t))
                    }, e
                }()), t("MH8b"));
            t("6FIE")
        },
        TUk3: (e, n, t) => {
            "use strict";
            t.d(n, {
                v: () => a
            });
            var r = t("tEf9");

            function o(e, n) {
                return ("0".repeat(n) + e).slice(-n)
            }

            function i() {
                var e = new Date,
                    n = o(String(e.getHours()), 2),
                    t = o(String(e.getMinutes()), 2),
                    r = o(String(e.getSeconds()), 2),
                    i = o(String(e.getMilliseconds()), 3);
                return "[".concat(n, ":").concat(t, ":").concat(r, ":").concat(i, "] ")
            }

            function a() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return console.log.apply(null, [i(), "mini-notification-center"].concat((0, r.A)(n)))
            }
        },
        ecyg: (e, n, t) => {
            "use strict";
            t.d(n, {
                Lu: () => M,
                Ke: () => g,
                we: () => y,
                tH: () => b,
                Wt: () => x,
                x9: () => C,
                a3: () => k,
                pN: () => v
            });
            var r = t("BK7R"),
                o = t("tEf9"),
                i = t("TrCV"),
                a = t("DTvD"),
                s = t.n(a),
                u = t("AGKK"),
                c = t("tjHY"),
                l = t("c+qD"),
                d = t("HoNV");
            const p = "style_mentionMember__cPRGv";
            var f = "All",
                g = function(e, n) {
                    var t = new RegExp(n.map((function(e) {
                        return "@".concat(e.name)
                    })).join("|"), "g");
                    return e.replace(t, (function(e) {
                        var t = n.find((function(n) {
                            return "@".concat(n.name) === e
                        }));
                        return (null === t || void 0 === t ? void 0 : t.uid) ? "@{{".concat(t.uid, "}}") : e
                    }))
                },
                h = function(e) {
                    return "@".concat(e)
                },
                v = function(e) {
                    return (0, i.jsxs)(u.Ay, {
                        className: p,
                        children: ["@", e]
                    })
                };

            function m(e) {
                var n = e.userName,
                    t = e.mentionMemberRender,
                    r = e.isMentionAll,
                    o = (0, (0, d.mX)().t)("service_group_mention_all") || f;
                return (null === t || void 0 === t ? void 0 : t(r ? o : n)) || n
            }
            var y = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : h;
                    try {
                        if (n && Object.keys(n).length) {
                            var r = /@\{\{(-?\d+)\}\}/g,
                                o = null === e || void 0 === e ? void 0 : e.split(r).map((function(e, r) {
                                    if (r % 2 === 1) {
                                        var o = e,
                                            a = n[o];
                                        return (0, i.jsx)(m, {
                                            isMentionAll: o === String(l.sI),
                                            userName: a,
                                            mentionMemberRender: t
                                        }, r)
                                    }
                                    return (0, i.jsx)(s().Fragment, {
                                        children: e
                                    }, r)
                                }));
                            return o
                        }
                    } catch (a) {
                        return console.error(a), e
                    }
                    return e
                },
                b = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : f;
                    try {
                        if (n && Object.keys(n).length) {
                            var r = /@\{\{(-?\d+)\}\}/g,
                                o = null === e || void 0 === e ? void 0 : e.split(r).map((function(e, r) {
                                    if (r % 2 === 1) {
                                        var o = e,
                                            i = n[o];
                                        return o === String(l.sI) && (i = t), "@".concat(i)
                                    }
                                    return e
                                }));
                            return o.join("")
                        }
                        return e
                    } catch (i) {
                        return console.error(i), e
                    }
                    return e
                },
                A = "nc_unreadMentionMsgChannelMap",
                I = "nc_temp_unreadMentionMsgChannelMap",
                M = 5184e6,
                x = {
                    set: function(e) {
                        return (0, c.$c)(A, JSON.stringify(e))
                    },
                    setTemp: function(e) {
                        return (0, c.$c)(I, JSON.stringify(e))
                    },
                    getTemp: function() {
                        try {
                            return JSON.parse((0, c.JF)(I) || "{}") || {}
                        } catch (e) {
                            return {}
                        }
                    },
                    get: function() {
                        try {
                            return JSON.parse((0, c.JF)(A) || "{}") || {}
                        } catch (e) {
                            return {}
                        }
                    },
                    getAsync: function() {
                        return new Promise((function(e, n) {
                            try {
                                (0, c.c7)({
                                    key: A,
                                    success: function(n) {
                                        e(JSON.parse((null === n || void 0 === n ? void 0 : n.data) || "{}"))
                                    }
                                })
                            } catch (t) {
                                n(t)
                            }
                        }))
                    }
                },
                C = function(e, n) {
                    try {
                        var t = x.get() || {},
                            i = (0, r.A)({}, t);
                        return i[e] ? i[e] = (a = "msgId", (0, o.A)(n).concat((0, o.A)(i[e])).filter((function(e, n, t) {
                            return t.findIndex((function(n) {
                                return n[a] === e[a]
                            })) === n
                        }))) : i[e] = n, i[e] = i[e].filter((function(e) {
                            return e.expireTime > Date.now()
                        })), x.set(i), i
                    } catch (s) {
                        return console.error(s), {}
                    }
                    var a
                },
                k = function() {
                    var e = (0, (0, d.mX)().t)("service_group_mention_all") || f;
                    return {
                        avatar: "",
                        uid: l.sI,
                        name: e
                    }
                }
        },
        nhnq: (e, n, t) => {
            "use strict";
            t.d(n, {
                R3: () => u,
                bg: () => i,
                dY: () => o,
                f_: () => a,
                tA: () => s
            });
            var r = t("c+qD");

            function o(e) {
                try {
                    return "string" === typeof e && e.startsWith(r.c$)
                } catch (n) {
                    console.error("isBotRedirectionMsg error", n)
                }
                return !1
            }

            function i(e) {
                try {
                    var n, t = JSON.parse(e || "{}");
                    if ((null === t || void 0 === t ? void 0 : t.cardType) === r.V4.Reward && (null === t || void 0 === t || null === (n = t.rewardCard) || void 0 === n ? void 0 : n.claimUrl)) return !0
                } catch (o) {}
                return !1
            }

            function a(e, n) {
                try {
                    var t, o, i = JSON.parse(e || "{}");
                    if ((null === i || void 0 === i ? void 0 : i.cardType) === r.V4.Reward && (null === i || void 0 === i || null === (t = i.rewardCard) || void 0 === t ? void 0 : t.eventContent)) return null === n || void 0 === n ? void 0 : n(null === i || void 0 === i || null === (o = i.rewardCard) || void 0 === o ? void 0 : o.eventContent)
                } catch (a) {
                    console.error("getGroupTextRewardCardMsgPreview error", a)
                }
                return ""
            }

            function s(e) {
                var n;
                return (null === e || void 0 === e || null === (n = e.startsWith) || void 0 === n ? void 0 : n.call(e, r.c$)) ? e.substring(r.c$.length) : e
            }

            function u(e) {
                var n = new Set,
                    t = {};
                return e.filter((function(e) {
                    var r = e.msgId,
                        o = e.identity,
                        i = (e.orderId, e.msgType);
                    if (r && n.has(r)) return !1;
                    if (o && !["CHANNEL_RED_PACKET_RECEIVED", "CHANNEL_RED_PACKET"].includes(i))
                        if (t[o]) {
                            if (!r) return !1;
                            if (t[o].msgId) return !1;
                            t[o] = e
                        } else t[o] = e;
                    return r && n.add(r), !0
                }))
            }
        },
        JIKO: (e, n, t) => {
            "use strict";
            t.d(n, {
                R: () => o
            });
            var r = t("1AGP"),
                o = function() {
                    try {
                        var e = new Audio("".concat(r.Z.STATIC_HOST, "/static/trichat/sc_new_case.mp3"));
                        null === e || void 0 === e || e.play()
                    } catch (n) {
                        console.error("playNewMsgNotifyAudio error", n)
                    }
                }
        },
        MH8b: (e, n, t) => {
            "use strict";
            t.d(n, {
                g: () => i
            });
            var r = t("1AGP"),
                o = t("jhL5"),
                i = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "light",
                        t = e.replace("{{platform}}", o.rZ ? "bmp" : "web").replace("{{theme}}", n);
                    return t.startsWith("https://bin.bnbstatic.com") ? t.replace("https://bin.bnbstatic.com", r.Z.STATIC_HOST) : t.startsWith("http") || t.startsWith("https") ? t : "".concat(r.Z.STATIC_HOST).concat(t.startsWith("/") ? "" : "/").concat(t)
                }
        },
        "+H9S": (e, n, t) => {
            "use strict";
            t.d(n, {
                I: () => o,
                L: () => r.L
            });
            var r = t("YELn"),
                o = {
                    getExpireItem: function(e, n) {
                        return n
                    },
                    setExpireItem: function(e, n) {
                        return n
                    }
                }
        },
        EGuz: (e, n, t) => {
            "use strict";
            t.d(n, {
                RW: () => u,
                $q: () => s,
                d8: () => l,
                m6: () => d,
                Tj: () => p,
                Br: () => a,
                $3: () => c
            });
            var r = t("BK7R");
            var o = t("+HTX");

            function i(e, n, t) {
                var r = (null === n || void 0 === n ? void 0 : n.pageName) || "",
                    i = (null === n || void 0 === n ? void 0 : n.elementID) || "";
                return (0, o.AC)({
                    eventName: e,
                    data: Object.assign({
                        pageName: r,
                        elementID: i
                    }, n),
                    options: t
                })
            }
            var a = function(e, n) {
                    i("webClick", (0, r.A)({
                        elementID: e,
                        pageName: "odin"
                    }, n))
                },
                s = function(e, n) {
                    i("pageView", (0, r.A)({
                        elementID: e,
                        pageName: "odin"
                    }, n))
                },
                u = function(e, n) {
                    i("pageView", (0, r.A)({
                        elementID: e,
                        pageName: "odin"
                    }, n))
                },
                c = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i("webClick", (0, r.A)({
                        elementID: e,
                        pageName: "binance_message_session_page"
                    }, n))
                },
                l = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    i("pageView", (0, r.A)({
                        elementID: e,
                        pageName: "binance_message_session_page"
                    }, n))
                },
                d = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i("pageView", (0, r.A)({
                        eventName: "Content_Square_Profile_Chatroom_Exit"
                    }, e))
                },
                p = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    i("pageView", (0, r.A)({
                        eventName: "Content_Square_Profile_Chatroom_Impression"
                    }, e))
                }
        },
        BMtS: (e, n, t) => {
            "use strict";
            t.d(n, {
                D: () => o,
                Q: () => i
            });
            var r = t("a59x");

            function o(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                    t = (0, r.bG)(2);
                return e.startsWith("https://www.binance.com") && (e = e.replace("binance.com", t)), (e = e.replace("{{subdomain}}", t)).startsWith("http") || (e = "https://www.".concat((0, r.bG)(2)).concat(e)), e.startsWith("https://{{domain}}") && (e = e.replace("https://{{domain}}", "")), window.open(e, !1 === (null === n || void 0 === n ? void 0 : n.external) ? "_self" : "_blank")
            }
            var i = function(e) {
                var n = e.url,
                    t = e.body,
                    r = e.method,
                    o = void 0 === r ? "PUT" : r;
                return new Promise((function(e, r) {
                    var i = new window.XMLHttpRequest;
                    i && (i.onreadystatechange = function() {
                        var n = "undefined" !== typeof XMLHttpRequest.DONE ? XMLHttpRequest.DONE : 4;
                        i.readyState === n && (200 === i.status ? e({
                            success: !0
                        }) : r({
                            success: !1
                        }))
                    }, i.open(o, n), i.send(t))
                }))
            }
        },
        Zu0i: (e, n, t) => {
            "use strict";
            var r = t("E0uk");
            t.o(r, "fetch") && t.d(n, {
                fetch: function() {
                    return r.fetch
                }
            }), t.o(r, "get") && t.d(n, {
                get: function() {
                    return r.get
                }
            }), t.o(r, "post") && t.d(n, {
                post: function() {
                    return r.post
                }
            })
        },
        qjHo: (e, n, t) => {
            "use strict";
            t.d(n, {
                x: () => r
            });
            var r = "I18N_BASE_PUBLIC"
        },
        uA3k: (e, n, t) => {
            "use strict";
            t.d(n, {
                T: () => K,
                y: () => V
            });
            var r = t("tEf9"),
                o = t("Pz56"),
                i = t.n(o),
                a = t("wIZF"),
                s = t("6FIE"),
                u = t("sViW"),
                c = t("888e"),
                l = t("ezuS"),
                d = t("BK7R"),
                p = t("gZfF"),
                f = t("G0fi"),
                g = t("YvF5"),
                h = t("tKUM"),
                v = function e(n) {
                    var t = this;
                    (0, c.A)(this, e), this._i18nextIns = f.A.createInstance(), this.fetchingResourcesMap = new Map, this.currentNamespaces = [], this.addResources = function(e, n) {
                        var r = t;
                        n && n.length > 0 && (t.currentNamespaces = n);
                        var o = t.currentNamespaces.filter((function(n) {
                            var t = n.split("@"),
                                o = r._i18nextIns.hasResourceBundle(e, t[t.length - 1]);
                            return !o || 0 === Object.keys(o).length
                        }));
                        if (0 !== o.length) {
                            var a = t.fetchingResourcesMap.get(e);
                            if (!a) {
                                var s = t,
                                    c = t;
                                a = Promise.all(o.map(function() {
                                    var n = (0, u.A)(i().mark((function n(t) {
                                        var r, o, a, s;
                                        return i().wrap((function(n) {
                                            for (;;) switch (n.prev = n.next) {
                                                case 0:
                                                    return r = t.split("@"), o = r[r.length - 1], a = r.length > 1 ? r[0] : void 0, n.next = 5, (0, g.A)({
                                                        lng: e,
                                                        ns: o,
                                                        fallback: !0,
                                                        basePath: c.basePath,
                                                        customPath: a
                                                    });
                                                case 5:
                                                    return s = n.sent, c._i18nextIns.addResources(e, o, s), n.abrupt("return", {
                                                        res: s,
                                                        ns: o
                                                    });
                                                case 8:
                                                case "end":
                                                    return n.stop()
                                            }
                                        }), n)
                                    })));
                                    return function(e) {
                                        return n.apply(this, arguments)
                                    }
                                }())).then((function(e) {
                                    return e.reduce((function(e, n) {
                                        var t = n.res;
                                        return e[n.ns] = t, e
                                    }), {})
                                })), a.then((function() {
                                    return s.fetchingResourcesMap.delete(e)
                                })), t.fetchingResourcesMap.set(e, a)
                            }
                            return a
                        }
                    };
                    var r = this;
                    this._init = function() {
                        var e = (0, u.A)(i().mark((function e(n) {
                            var t, o, a, s, u, c, f, g, v;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o = (t = n || {}).lng, a = t.resources, s = void 0 === a ? {} : a, u = t.ns, c = (0, p.A)(t, ["lng", "resources", "ns"]), o || (o = (0, h.getLanguage)() || "en"), u) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error("i18n namespaces is required");
                                    case 4:
                                        r.currentNamespaces = Array.isArray(u) ? u : [u], f = r.currentNamespaces.map((function(e) {
                                            var n = e.split("@");
                                            return n[n.length - 1]
                                        })), e.next = 8;
                                        break;
                                    case 8:
                                        return g = (0, d.A)({
                                            lng: o,
                                            resources: s,
                                            ns: f,
                                            fallbackLng: "en",
                                            defaultNS: f[0],
                                            keySeparator: !1
                                        }, c), e.next = 11, r._i18nextIns.init(g);
                                    case 11:
                                        if (!o || (null === n || void 0 === n ? void 0 : n.resources)) {
                                            e.next = 16;
                                            break
                                        }
                                        return e.next = 14, r.addResources(o);
                                    case 14:
                                        (v = e.sent) && (s = (0, l.A)({}, o, v));
                                    case 16:
                                        return e.abrupt("return", s);
                                    case 17:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }();
                    var o = this;
                    this._addNamespaces = function() {
                        var e = (0, u.A)(i().mark((function e(n, t) {
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (o._i18nextIns.isInitialized) {
                                            e.next = 2;
                                            break
                                        }
                                        throw new Error("i18nInstance has not been initialized");
                                    case 2:
                                        return e.abrupt("return", o.addResources(n, t));
                                    case 3:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n, t) {
                            return e.apply(this, arguments)
                        }
                    }();
                    var a = this;
                    this.setLanguage = function() {
                        var e = (0, u.A)(i().mark((function e(n) {
                            var t;
                            return i().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (a._i18nextIns.isInitialized) {
                                            e.next = 3;
                                            break
                                        }
                                        throw new Error("i18nInstance has not been initialized");
                                    case 3:
                                        return e.next = 5, a.addResources(n);
                                    case 5:
                                        a._i18nextIns.changeLanguage(n), (null === (t = window.chrome) || void 0 === t ? void 0 : t.runtime) && localStorage.setItem("pika_i18n_lang", n);
                                    case 7:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(n) {
                            return e.apply(this, arguments)
                        }
                    }(), this.translate = this._i18nextIns.t.bind(this._i18nextIns), this.basePath = null === n || void 0 === n ? void 0 : n.basePath
                };
            var m = t("DTvD"),
                y = t("Dz1D"),
                b = t("qjHo");

            function A(e) {
                return A = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, A(e)
            }

            function I() {
                return "function" === typeof XMLHttpRequest || "object" === ("undefined" === typeof XMLHttpRequest ? "undefined" : A(XMLHttpRequest))
            }
            var M, x, C, k = t("47/P"),
                w = t.t(k, 2);

            function E(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function _(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? E(Object(t), !0).forEach((function(n) {
                        S(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : E(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function S(e, n, t) {
                return (n = function(e) {
                    var n = function(e, n) {
                        if ("object" != T(e) || !e) return e;
                        var t = e[Symbol.toPrimitive];
                        if (void 0 !== t) {
                            var r = t.call(e, n || "default");
                            if ("object" != T(r)) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === n ? String : Number)(e)
                    }(e, "string");
                    return "symbol" == T(n) ? n : String(n)
                }(n)) in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function T(e) {
                return T = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, T(e)
            }
            "function" === typeof fetch && (M = "undefined" !== typeof global && global.fetch ? global.fetch : window.fetch ? window.fetch : fetch), I() && ("undefined" !== typeof global && global.XMLHttpRequest ? x = global.XMLHttpRequest : window.XMLHttpRequest && (x = window.XMLHttpRequest)), "function" === typeof ActiveXObject && ("undefined" !== typeof global && global.ActiveXObject ? C = global.ActiveXObject : window.ActiveXObject && (C = window.ActiveXObject)), M || !w || x || C || (M = k || w), "function" !== typeof M && (M = void 0);
            var O = function(e, n) {
                    if (n && "object" === T(n)) {
                        var t = "";
                        for (var r in n) t += "&" + encodeURIComponent(r) + "=" + encodeURIComponent(n[r]);
                        if (!t) return e;
                        e = e + (-1 !== e.indexOf("?") ? "&" : "?") + t.slice(1)
                    }
                    return e
                },
                P = function(e, n, t, r) {
                    var o = function(e) {
                        if (!e.ok) return t(e.statusText || "Error", {
                            status: e.status
                        });
                        e.text().then((function(n) {
                            t(null, {
                                status: e.status,
                                data: n
                            })
                        })).catch(t)
                    };
                    if (r) {
                        var i = r(e, n);
                        if (i instanceof Promise) return void i.then(o).catch(t)
                    }
                    "function" === typeof fetch ? fetch(e, n).then(o).catch(t) : M(e, n).then(o).catch(t)
                },
                L = !1;
            const N = function(e, n, t, r) {
                return "function" === typeof t && (r = t, t = void 0), r = r || function() {}, M && 0 !== n.indexOf("file:") ? function(e, n, t, r) {
                    e.queryStringParams && (n = O(n, e.queryStringParams));
                    var o = _({}, "function" === typeof e.customHeaders ? e.customHeaders() : e.customHeaders);
                    t && (o["Content-Type"] = "application/json");
                    var i = "function" === typeof e.requestOptions ? e.requestOptions(t) : e.requestOptions,
                        a = _({
                            method: t ? "POST" : "GET",
                            body: t ? e.stringify(t) : void 0,
                            headers: o
                        }, L ? {} : i),
                        s = "function" === typeof e.alternateFetch && e.alternateFetch.length >= 1 ? e.alternateFetch : void 0;
                    try {
                        P(n, a, r, s)
                    } catch (u) {
                        if (!i || 0 === Object.keys(i).length || !u.message || u.message.indexOf("not implemented") < 0) return r(u);
                        try {
                            Object.keys(i).forEach((function(e) {
                                delete a[e]
                            })), P(n, a, r, s), L = !0
                        } catch (c) {
                            r(c)
                        }
                    }
                }(e, n, t, r) : I() || "function" === typeof ActiveXObject ? function(e, n, t, r) {
                    t && "object" === T(t) && (t = O("", t).slice(1)), e.queryStringParams && (n = O(n, e.queryStringParams));
                    try {
                        var o;
                        (o = x ? new x : new C("MSXML2.XMLHTTP.3.0")).open(t ? "POST" : "GET", n, 1), e.crossDomain || o.setRequestHeader("X-Requested-With", "XMLHttpRequest"), o.withCredentials = !!e.withCredentials, t && o.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), o.overrideMimeType && o.overrideMimeType("application/json");
                        var i = e.customHeaders;
                        if (i = "function" === typeof i ? i() : i)
                            for (var a in i) o.setRequestHeader(a, i[a]);
                        o.onreadystatechange = function() {
                            o.readyState > 3 && r(o.status >= 400 ? o.statusText : null, {
                                status: o.status,
                                data: o.responseText
                            })
                        }, o.send(t)
                    } catch (s) {
                        console && console.log(s)
                    }
                }(e, n, t, r) : void r(new Error("No fetch and no xhr implementation found!"))
            };

            function R(e) {
                return R = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, R(e)
            }

            function D(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function F(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? D(Object(t), !0).forEach((function(n) {
                        j(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : D(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }

            function B(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }

            function G(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, H(r.key), r)
                }
            }

            function j(e, n, t) {
                return (n = H(n)) in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }

            function H(e) {
                var n = function(e, n) {
                    if ("object" != R(e) || !e) return e;
                    var t = e[Symbol.toPrimitive];
                    if (void 0 !== t) {
                        var r = t.call(e, n || "default");
                        if ("object" != R(r)) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === n ? String : Number)(e)
                }(e, "string");
                return "symbol" == R(n) ? n : String(n)
            }
            var U = function() {
                    return {
                        loadPath: "/locales/{{lng}}/{{ns}}.json",
                        addPath: "/locales/add/{{lng}}/{{ns}}",
                        parse: function(e) {
                            return JSON.parse(e)
                        },
                        stringify: JSON.stringify,
                        parsePayload: function(e, n, t) {
                            return j({}, n, t || "")
                        },
                        parseLoadPayload: function(e, n) {},
                        request: N,
                        reloadInterval: !1,
                        customHeaders: {},
                        queryStringParams: {},
                        crossDomain: !1,
                        withCredentials: !1,
                        overrideMimeType: !1,
                        requestOptions: {
                            mode: "cors",
                            credentials: "same-origin",
                            cache: "default"
                        }
                    }
                },
                q = function() {
                    function e(n) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                        B(this, e), this.services = n, this.options = t, this.allOptions = r, this.type = "backend", this.init(n, t, r)
                    }
                    var n, t, r;
                    return n = e, t = [{
                        key: "init",
                        value: function(e) {
                            var n = this,
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                            this.services = e, this.options = F(F(F({}, U()), this.options || {}), t), this.allOptions = r, this.services && this.options.reloadInterval && setInterval((function() {
                                return n.reload()
                            }), this.options.reloadInterval)
                        }
                    }, {
                        key: "readMulti",
                        value: function(e, n, t) {
                            this._readAny(e, e, n, n, t)
                        }
                    }, {
                        key: "read",
                        value: function(e, n, t) {
                            this._readAny([e], e, [n], n, t)
                        }
                    }, {
                        key: "_readAny",
                        value: function(e, n, t, r, o) {
                            var i, a = this,
                                s = this.options.loadPath;
                            "function" === typeof this.options.loadPath && (s = this.options.loadPath(e, t)), (s = function(e) {
                                return !!e && "function" === typeof e.then
                            }(i = s) ? i : Promise.resolve(i)).then((function(i) {
                                if (!i) return o(null, {});
                                var s = a.services.interpolator.interpolate(i, {
                                    lng: e.join("+"),
                                    ns: t.join("+")
                                });
                                a.loadUrl(s, o, n, r)
                            }))
                        }
                    }, {
                        key: "loadUrl",
                        value: function(e, n, t, r) {
                            var o = this,
                                i = "string" === typeof t ? [t] : t,
                                a = "string" === typeof r ? [r] : r,
                                s = this.options.parseLoadPayload(i, a);
                            this.options.request(this.options, e, s, (function(i, a) {
                                if (a && (a.status >= 500 && a.status < 600 || !a.status)) return n("failed loading " + e + "; status code: " + a.status, !0);
                                if (a && a.status >= 400 && a.status < 500) return n("failed loading " + e + "; status code: " + a.status, !1);
                                if (!a && i && i.message && i.message.indexOf("Failed to fetch") > -1) return n("failed loading " + e + ": " + i.message, !0);
                                if (i) return n(i, !1);
                                var s, u;
                                try {
                                    s = "string" === typeof a.data ? o.options.parse(a.data, t, r) : a.data
                                } catch (c) {
                                    u = "failed parsing " + e + " to json"
                                }
                                if (u) return n(u, !1);
                                n(null, s)
                            }))
                        }
                    }, {
                        key: "create",
                        value: function(e, n, t, r, o) {
                            var i = this;
                            if (this.options.addPath) {
                                "string" === typeof e && (e = [e]);
                                var a = this.options.parsePayload(n, t, r),
                                    s = 0,
                                    u = [],
                                    c = [];
                                e.forEach((function(t) {
                                    var r = i.options.addPath;
                                    "function" === typeof i.options.addPath && (r = i.options.addPath(t, n));
                                    var l = i.services.interpolator.interpolate(r, {
                                        lng: t,
                                        ns: n
                                    });
                                    i.options.request(i.options, l, a, (function(n, t) {
                                        s += 1, u.push(n), c.push(t), s === e.length && "function" === typeof o && o(u, c)
                                    }))
                                }))
                            }
                        }
                    }, {
                        key: "reload",
                        value: function() {
                            var e = this,
                                n = this.services,
                                t = n.backendConnector,
                                r = n.languageUtils,
                                o = n.logger,
                                i = t.language;
                            if (!i || "cimode" !== i.toLowerCase()) {
                                var a = [],
                                    s = function(e) {
                                        r.toResolveHierarchy(e).forEach((function(e) {
                                            a.indexOf(e) < 0 && a.push(e)
                                        }))
                                    };
                                s(i), this.allOptions.preload && this.allOptions.preload.forEach((function(e) {
                                    return s(e)
                                })), a.forEach((function(n) {
                                    e.allOptions.ns.forEach((function(e) {
                                        t.read(n, e, "read", null, null, (function(r, i) {
                                            r && o.warn("loading namespace ".concat(e, " for language ").concat(n, " failed"), r), !r && i && o.log("loaded namespace ".concat(e, " for language ").concat(n), i), t.loaded("".concat(n, "|").concat(e), r, i)
                                        }))
                                    }))
                                }))
                            }
                        }
                    }], t && G(n.prototype, t), r && G(n, r), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), e
                }();
            q.type = "backend";
            const W = q;
            var V = (0, m.createContext)(null),
                K = function(e) {
                    var n = e.namespaces,
                        t = e.basePath,
                        o = e.nsSeparator,
                        u = e.keySeparator,
                        c = (0, y.PC)(),
                        l = new v({
                            basePath: t
                        }),
                        d = (l._init, l._i18nextIns),
                        p = l.setLanguage,
                        f = l._addNamespaces,
                        g = (0, a.__rest)(l, ["_init", "_i18nextIns", "setLanguage", "_addNamespaces"]),
                        h = "";
                    return Object.assign({
                        init: function(e) {
                            return (0, a.__awaiter)(this, void 0, void 0, i().mark((function a() {
                                var p, f, g, v, m, y, A, I, M, x;
                                return i().wrap((function(i) {
                                    for (;;) switch (i.prev = i.next) {
                                        case 0:
                                            if ((p = e || {}).ns || (p.ns = n.slice()), p.ns = Array.from(new Set(p.ns)), f = [], g = !0, v = !1, m = void 0, !p.postProcess) {
                                                i.next = 21;
                                                break
                                            }
                                            for (i.prev = 5, y = p.postProcess[Symbol.iterator](); !(g = (A = y.next()).done); g = !0) I = A.value, f.push(I.name), d.use(I);
                                            i.next = 13;
                                            break;
                                        case 9:
                                            i.prev = 9, i.t0 = i.catch(5), v = !0, m = i.t0;
                                        case 13:
                                            i.prev = 13, i.prev = 14, g || null == y.return || y.return();
                                        case 16:
                                            if (i.prev = 16, !v) {
                                                i.next = 19;
                                                break
                                            }
                                            throw m;
                                        case 19:
                                            return i.finish(16);
                                        case 20:
                                            return i.finish(13);
                                        case 21:
                                            return t && d.use(W), M = p.ns.slice(), x = {
                                                alternateFetch: s.fetch,
                                                loadPath: function(e, n) {
                                                    if (n.every((function(e) {
                                                            return M.includes(e)
                                                        })) || !e.includes(h || d.language)) return "";
                                                    if (1 === n.length) {
                                                        var t = n[0].split("@");
                                                        if (t.length > 1) return "".concat(c[b.x], "/").concat(t[0], "/{{lng}}/").concat(t[t.length - 1])
                                                    }
                                                    return "".concat(c[b.x], "/{{lng}}/{{ns}}")
                                                }
                                            }, i.next = 25, l._init(Object.assign(Object.assign({
                                                backend: x,
                                                react: {
                                                    useSuspense: !1
                                                },
                                                partialBundledLanguages: !0,
                                                nsSeparator: o,
                                                keySeparator: u || !1
                                            }, p), {
                                                postProcess: (0, r.A)(f)
                                            }));
                                        case 25:
                                            return i.abrupt("return", i.sent);
                                        case 26:
                                        case "end":
                                            return i.stop()
                                    }
                                }), a, null, [
                                    [5, 9, 13, 21],
                                    [14, , 16, 20]
                                ])
                            })))
                        },
                        i18nextIns: d,
                        setLocale: function(e, n) {
                            return (0, a.__awaiter)(void 0, void 0, void 0, i().mark((function t() {
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            if (h = e, t.t0 = n && n.length > 0, !t.t0) {
                                                t.next = 5;
                                                break
                                            }
                                            return t.next = 5, f(e, n);
                                        case 5:
                                            return t.abrupt("return", (t.t0 && t.sent, p(e)));
                                        case 6:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })))
                        }
                    }, g)
                }
        },
        rsqs: (e, n, t) => {
            "use strict";
            t.d(n, {
                pu: () => u,
                Zu: () => c
            });
            t("G0fi");
            var r = t("VP0d"),
                o = t("blBx"),
                i = t("6w+j"),
                a = t.n(i),
                s = (t("tKUM"), "(".concat("[a-zA-Z]+", ")(-(").concat("[a-zA-Z]+", "))?"));
            a()((function(e) {
                var n = "en",
                    t = "";
                if ("string" !== typeof e) return console.log("The type of path should be string, current is: ", "undefined" === typeof e ? "undefined" : (0, o.A)(e)), {
                    lang: n,
                    region: t,
                    path: e
                };
                var i, a, u, c = e.match(new RegExp("^".concat(s, "$")));
                return c ? {
                    lang: n = void 0 === (a = (i = (0, r.A)(c, 4))[1]) ? "" : a,
                    region: t = void 0 === (u = i[3]) ? "" : u,
                    path: e
                } : {
                    lang: n,
                    region: t,
                    path: e
                }
            }));

            function u(e) {
                return ((null === e || void 0 === e ? void 0 : e.headers.k8scluster) || "").includes("nskey")
            }

            function c(e) {
                return Object.keys(e).reduce((function(n, t) {
                    var r = e[t],
                        o = Object.keys(r).reduce((function(e, n) {
                            return e[n] = "".concat(t, ":").concat(n), e
                        }), {});
                    return n[t] = o, n
                }), {})
            }
        },
        ztXJ: (e, n, t) => {
            "use strict";
            t.d(n, {
                s: () => o
            });
            var r = t("DTvD"),
                o = (0, r.createContext)("")
        },
        hFxi: (e, n, t) => {
            "use strict";
            t.d(n, {
                N2: () => o,
                Vo: () => i
            });
            var r = t("lmEU"),
                o = function(e) {
                    var n = e.data;
                    (0, r.z)({
                        data: {
                            data: n
                        },
                        key: "reportMonitorEvent"
                    })
                },
                i = function(e) {
                    var n = e.data;
                    (0, r.z)({
                        data: {
                            data: n
                        },
                        key: "reportErrorEvent"
                    })
                }
        },
        Mp1J: (e, n, t) => {
            "use strict";
            var r = t("qK3R"),
                o = t("lmEU");
            (0, r.setReporter)((function(e) {
                return (0, o.z)({
                    key: "traceReporter",
                    data: e
                })
            }))
        },
        "+Od7": (e, n, t) => {
            "use strict";
            t.d(n, {
                t: () => g
            });
            var r = t("888e"),
                o = t("nG1z"),
                i = t("m+Lx");

            function a(e, n, t) {
                return a = "undefined" !== typeof Reflect && Reflect.get ? Reflect.get : function(e, n, t) {
                    var r = function(e, n) {
                        for (; !Object.prototype.hasOwnProperty.call(e, n) && null !== (e = (0, i.A)(e)););
                        return e
                    }(e, n);
                    if (r) {
                        var o = Object.getOwnPropertyDescriptor(r, n);
                        return o.get ? o.get.call(t || e) : o.value
                    }
                }, a(e, n, t)
            }
            var s = t("2PCm"),
                u = t("VKAp"),
                c = t("oH+a"),
                l = t("DTvD"),
                d = {
                    componentStack: null,
                    error: null
                },
                p = function(e) {
                    (0, s.A)(t, e);
                    var n = (0, u.A)(t);

                    function t() {
                        var e;
                        return (0, r.A)(this, t), (e = n.call.apply(n, [this].concat(Array.prototype.slice.call(arguments)))).state = d, e.resetErrorBoundary = function() {
                            var n = e.props.onReset,
                                t = e.state,
                                r = t.error,
                                o = t.componentStack;
                            n && n(r, o), e.setState(d)
                        }, (0, c.A)(e)
                    }
                    return (0, o.A)(t, [{
                        key: "componentDidCatch",
                        value: function(e, n) {
                            var t = n.componentStack,
                                r = this.props.onError;
                            r && r(e, t), this.setState({
                                error: e,
                                componentStack: t
                            }), console.log("ErrorBoundary caught an error:", e)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            var e = this.props.onMount;
                            e && e()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            var e = this.state,
                                n = e.error,
                                t = e.componentStack,
                                r = this.props.onUnmount;
                            r && r(n, t)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e, n = this.props,
                                t = n.fallback,
                                r = n.children,
                                o = this.state;
                            return o.error ? (e = "function" === typeof t ? t({
                                error: o.error,
                                componentStack: o.componentStack,
                                resetError: this.resetErrorBoundary
                            }) : t, l.isValidElement(e) ? e : null) : "function" === typeof r ? r() : r
                        }
                    }]), t
                }(l.Component),
                f = t("2URn");
            var g = function(e) {
                (0, s.A)(t, e);
                var n = (0, u.A)(t);

                function t() {
                    return (0, r.A)(this, t), n.apply(this, arguments)
                }
                return (0, o.A)(t, [{
                    key: "componentDidCatch",
                    value: function(e, n) {
                        var r, o, s, u = n.componentStack,
                            c = this.props.name;
                        "undefined" !== typeof originalSentry && function(e) {
                            try {
                                switch (Object.prototype.toString.call(e)) {
                                    case "[object Error]":
                                    case "[object Exception]":
                                    case "[object DOMException]":
                                        return !0;
                                    default:
                                        return (0, f.A)(e, Error)
                                }
                            } catch (p) {
                                return !1
                            }
                        }(e) && originalSentry.captureException(e, (function(n) {
                            var t;
                            return n.setExtra("componentStack", u), n.setLevel("fatal"), n.setTag("component", c || "ErrorBoundary ".concat(e.message)), n.setExtra("html-className", null === (t = null === document || void 0 === document ? void 0 : document.documentElement) || void 0 === t ? void 0 : t.className), n
                        })), (r = (0, i.A)(t.prototype), o = "componentDidCatch", s = this, a(r, o, s)).call(this, e, {
                            componentStack: u
                        })
                    }
                }]), t
            }(p)
        },
        "V+XC": (e, n, t) => {
            "use strict";
            t.d(n, {
                N7: () => i
            });
            var r = t("2URn"),
                o = t("hFxi");

            function i(e, n, t) {
                (0, r.A)(e, Error) ? function(e) {
                    "undefined" !== typeof originalSentry && originalSentry.captureException(e)
                }(e) : "string" === typeof e ? n ? (0, o.Vo)({
                    data: {
                        event: {
                            c: e,
                            bc: n,
                            extra: t
                        }
                    }
                }) : console.warn("reportError: message is required") : console.warn("reportError: invalid error type")
            }
        },
        lmEU: (e, n, t) => {
            "use strict";

            function r(e) {
                window._bn_reporter = window._bn_reporter || [], window._bn_reporter.push(e)
            }
            t.d(n, {
                z: () => r
            })
        },
        mnh2: (e, n, t) => {
            "use strict";
            t.d(n, {
                X: () => a
            });
            var r = t("DTvD"),
                o = t.n(r),
                i = t("+Od7"),
                a = function(e) {
                    var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        t = function(t) {
                            return o().createElement(i.t, Object.assign({}, n), o().createElement(e, Object.assign({}, t)))
                        },
                        r = n.name;
                    return r && (t.displayName = r), t
                }
        },
        "+HTX": (e, n, t) => {
            "use strict";
            t.d(n, {
                AC: () => i,
                uz: () => a
            });
            var r = t("h+kG");

            function o(e) {
                r.OW._bn_reporter = r.OW._bn_reporter || [], r.OW._bn_reporter.push(e)
            }
            var i = function(e) {
                    o({
                        data: e,
                        key: "reportTrackEvent"
                    })
                },
                a = function(e) {
                    return o({
                        data: e,
                        key: "trackInit"
                    })
                }
        },
        "7laY": (e, n, t) => {
            "use strict";
            t.d(n, {
                j2: () => S,
                qd: () => O,
                K2: () => P,
                z0: () => T,
                ik: () => L,
                w8: () => N,
                vT: () => x,
                C0: () => k,
                mt: () => w,
                $r: () => C,
                eL: () => E,
                Wu: () => _
            });
            var r = "#FFFFFF",
                o = "#FAFAFA",
                i = "#F5F5F5",
                a = "#EAECEF",
                s = "#D8DCE1",
                u = "#B7BDC6",
                c = "#848E9C",
                l = "#707A8A",
                d = "#434C5A",
                p = "#333B47",
                f = "#29313D",
                g = "#202630",
                h = "#FCD535",
                v = "#F0B90B",
                m = "#E6FFF1",
                y = "#2EBD85",
                b = "#102821",
                A = "#FEF1F2",
                I = "#F6465D",
                M = "#35141D",
                x = {
                    BasicBg: r,
                    SecondaryBg: o,
                    Input: i,
                    InputLine: s,
                    CardBg: r,
                    TagBg: a,
                    Line: a,
                    DisableBtn: s,
                    Grid: a,
                    DisabledText: u,
                    DisableText: u,
                    Placeholder: u,
                    TertiaryText: u,
                    SecondaryText: c,
                    PrimaryText: g,
                    RedGreenBgText: r,
                    EmphasizeText: "#FF693D",
                    TextOnGray: a,
                    TextOnYellow: g,
                    IconNormal: "#929AA5",
                    ToastBg: l,
                    BtnBg: h,
                    PrimaryYellow: v,
                    TextLink: "#D89F00",
                    TradeBg: i,
                    SellHover: I,
                    Sell: I,
                    TextSell: I,
                    DepthBuyBg: m,
                    BuyHover: y,
                    Buy: y,
                    TextBuy: y,
                    Error: I,
                    Success: y,
                    Vessel: o,
                    LiteBg1: r,
                    LiteBg2: o,
                    TextToast: v,
                    DepthSellBg: A,
                    SuccessBg: m,
                    TwoColorIcon: d,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                C = {
                    DepthBuyBg: A,
                    BuyHover: I,
                    Buy: I,
                    TextBuy: I,
                    DepthSellBg: m,
                    SellHover: y,
                    Sell: y,
                    TextSell: y
                },
                k = {
                    Sell: "#DD7A2B",
                    TextSell: "#DD7A2B",
                    SellHover: "#DD7A2B",
                    DepthSellBg: "#FFEFE2",
                    Buy: "#1F8DF9",
                    TextBuy: "#1F8DF9",
                    BuyHover: "#1F8DF9",
                    DepthBuyBg: "#E6F3FF",
                    Error: "#DD7A2B",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF"
                },
                w = {
                    Sell: "#1F8DF9",
                    TextSell: "#1F8DF9",
                    SellHover: "#1F8DF9",
                    DepthSellBg: "#E6F3FF",
                    Buy: "#DD7A2B",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#DD7A2B",
                    DepthBuyBg: "#FFEFE2",
                    Error: "#DD7A2B",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF"
                },
                E = {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#FFD9EB",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1"
                },
                _ = {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#FFD9EB",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1"
                },
                S = {
                    BasicBg: "#181E25",
                    SecondaryBg: "#191A1F",
                    Input: f,
                    InputLine: d,
                    CardBg: g,
                    TagBg: d,
                    Line: p,
                    DisableBtn: d,
                    Grid: p,
                    DisabledText: l,
                    DisableText: l,
                    Placeholder: d,
                    TertiaryText: "#4F5867",
                    SecondaryText: c,
                    PrimaryText: a,
                    RedGreenBgText: r,
                    EmphasizeText: "#FF693D",
                    TextOnGray: a,
                    TextOnYellow: g,
                    IconNormal: l,
                    ToastBg: l,
                    BtnBg: h,
                    PrimaryYellow: v,
                    TextLink: v,
                    TradeBg: "#0B0E11",
                    SellHover: I,
                    Sell: I,
                    TextSell: I,
                    DepthBuyBg: b,
                    BuyHover: y,
                    Buy: y,
                    TextBuy: y,
                    Error: I,
                    Success: y,
                    Vessel: f,
                    LiteBg1: r,
                    LiteBg2: o,
                    TextToast: v,
                    DepthSellBg: M,
                    SuccessBg: b,
                    TwoColorIcon: "#CACED3",
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                T = {
                    DepthBuyBg: M,
                    BuyHover: I,
                    Buy: I,
                    TextBuy: I,
                    DepthSellBg: b,
                    SellHover: y,
                    Sell: y,
                    TextSell: y
                },
                O = {
                    Sell: "#DD7A2B",
                    TextSell: "#DD7A2B",
                    SellHover: "#DD7A2B",
                    DepthSellBg: "#553821",
                    Buy: "#1F8DF9",
                    TextBuy: "#1F8DF9",
                    BuyHover: "#1F8DF9",
                    DepthBuyBg: "#22384E",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E"
                },
                P = {
                    Sell: "#1F8DF9",
                    TextSell: "#1F8DF9",
                    SellHover: "#1F8DF9",
                    DepthSellBg: "#22384E",
                    Buy: "#DD7A2B",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#DD7A2B",
                    DepthBuyBg: "#553821",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E"
                },
                L = {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#40172B",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315"
                },
                N = {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#40172B",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315"
                }
        },
        "/kHH": (e, n, t) => {
            "use strict";
            t.d(n, {
                CY: () => f,
                Cc: () => c,
                NM: () => i,
                NY: () => o,
                Qx: () => g,
                bY: () => l,
                ep: () => s,
                k8: () => u,
                mC: () => a,
                ml: () => h,
                pJ: () => d,
                s: () => p
            });
            var r = t("t50Z"),
                o = {
                    BasicBg: r.wm[0],
                    SecondaryBg: r.wm[5],
                    Input: r.wm[10],
                    InputLine: r.wm[100],
                    CardBg: r.wm[0],
                    Vessel: r.wm[5],
                    Line: r.wm[50],
                    DisableBtn: r.wm[50],
                    DisabledText: r.wm[200],
                    DisableText: r.wm[200],
                    TertiaryText: r.wm[400],
                    SecondaryText: r.wm[600],
                    PrimaryText: r.wm[850],
                    RedGreenBgText: r.wm[0],
                    EmphasizeText: "#FF693D",
                    TextOnGray: r.wm[50],
                    TextOnYellow: r.wm[850],
                    IconNormal: r.wm[250],
                    LiteBg1: r.wm[0],
                    LiteBg2: r.wm[5],
                    BtnBg: r.D9[100],
                    PrimaryYellow: r.D9[200],
                    TextLink: r.D9[300],
                    TradeBg: r.wm[10],
                    TextToast: r.D9[500],
                    DepthSellBg: r.wv[10],
                    SellHover: r.wv[300],
                    Sell: r.wv[400],
                    TextSell: r.wv[450],
                    DepthBuyBg: r.wL[10],
                    BuyHover: r.wL[300],
                    Buy: r.wL[500],
                    TextBuy: r.wL[500],
                    Error: r.wv[450],
                    SuccessBg: r.wL[10],
                    Success: r.wL[500],
                    TagBg: r.wm[50],
                    Grid: r.wm[50],
                    Placeholder: r.wm[200],
                    ToastBg: r.wm[400],
                    TwoColorIcon: r.wm[600],
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                i = {
                    DepthBuyBg: r.wv[10],
                    BuyHover: r.wv[300],
                    Buy: r.wv[400],
                    TextBuy: r.wv[450],
                    DepthSellBg: r.wL[10],
                    SellHover: r.wL[300],
                    Sell: r.wL[500],
                    TextSell: r.wL[500]
                },
                a = {
                    Sell: "#EC8D42",
                    TextSell: "#DD7A2B",
                    SellHover: "#EEA062",
                    DepthSellBg: "#FFEFE2",
                    Buy: "#1F8DF9",
                    TextBuy: "#297FD4",
                    BuyHover: "#69B1F8",
                    DepthBuyBg: "#E6F3FF",
                    Error: "#EC8D42",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF"
                },
                s = {
                    Sell: "#1F8DF9",
                    TextSell: "#297FD4",
                    SellHover: "#69B1F8",
                    DepthSellBg: "#E6F3FF",
                    Buy: "#EC8D42",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#EEA062",
                    DepthBuyBg: "#FFEFE2",
                    Error: "#EC8D42",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF"
                },
                u = {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#FFD9EB",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1"
                },
                c = {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#FFD9EB",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1"
                },
                l = {
                    BasicBg: r.wm[900],
                    SecondaryBg: r.wm[1e3],
                    Input: r.wm[700],
                    InputLine: r.wm[600],
                    CardBg: r.wm[800],
                    Vessel: r.wm[800],
                    Line: r.wm[700],
                    DisableBtn: r.wm[700],
                    DisabledText: r.wm[500],
                    DisableText: r.wm[500],
                    TertiaryText: r.wm[300],
                    SecondaryText: r.wm[200],
                    PrimaryText: r.wm[50],
                    RedGreenBgText: r.wm[0],
                    EmphasizeText: "#FF693D",
                    TextOnGray: r.wm[50],
                    TextOnYellow: r.wm[850],
                    IconNormal: r.wm[300],
                    LiteBg1: r.wm[850],
                    LiteBg2: r.wm[950],
                    BtnBg: r.D9[100],
                    PrimaryYellow: r.D9[200],
                    TextLink: r.D9[200],
                    TradeBg: r.wm[1e3],
                    TextToast: r.D9[400],
                    DepthSellBg: r.wv[800],
                    SellHover: r.wv[300],
                    Sell: r.wv[400],
                    TextSell: r.wv[400],
                    DepthBuyBg: r.wL[800],
                    BuyHover: r.wL[300],
                    Buy: r.wL[500],
                    TextBuy: r.wL[500],
                    Error: r.wv[400],
                    SuccessBg: r.wL[800],
                    Success: r.wL[500],
                    TagBg: r.wm[600],
                    Grid: r.wm[700],
                    Placeholder: r.wm[600],
                    ToastBg: r.wm[400],
                    TwoColorIcon: r.wm[150],
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)"
                },
                d = {
                    DepthBuyBg: r.wv[800],
                    BuyHover: r.wv[300],
                    Buy: r.wv[400],
                    TextBuy: r.wv[400],
                    DepthSellBg: r.wL[800],
                    SellHover: r.wL[300],
                    Sell: r.wL[500],
                    TextSell: r.wL[500]
                },
                p = {
                    Sell: "#EC8D42",
                    TextSell: "#DD7A2B",
                    SellHover: "#EEA062",
                    DepthSellBg: "#553821",
                    Buy: "#1F8DF9",
                    TextBuy: "#1F8DF9",
                    BuyHover: "#69B1F8",
                    DepthBuyBg: "#22384E",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E"
                },
                f = {
                    Sell: "#1F8DF9",
                    TextSell: "#297FD4",
                    SellHover: "#69B1F8",
                    DepthSellBg: "#E6F3FF",
                    Buy: "#EC8D42",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#EEA062",
                    DepthBuyBg: "#FFEFE2",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E"
                },
                g = {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#40172B",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315"
                },
                h = {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#40172B",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315"
                }
        },
        MEAY: (e, n, t) => {
            "use strict";
            t.d(n, {
                bK: () => s,
                zd: () => u
            });
            var r = t("wIZF"),
                o = t("/kHH"),
                i = t("7laY"),
                a = t("t50Z"),
                s = {
                    reverse: (0, r.__assign)((0, r.__assign)({
                        sell: a.wL[400],
                        textSell: a.wL[500],
                        sellHover: a.wL[300],
                        depthSellBg: a.wL[10],
                        buy: a.wv[400],
                        textBuy: a.wv[450],
                        buyHover: a.wv[300],
                        depthBuyBg: a.wv[10]
                    }, o.NM), {
                        mobile: (0, r.__assign)({}, i.$r)
                    }),
                    cvd: (0, r.__assign)((0, r.__assign)({
                        sell: "#EC8D42",
                        textSell: "#DD7A2B",
                        sellHover: "#EEA062",
                        depthSellBg: "#FFEFE2",
                        buy: "#1F8DF9",
                        textBuy: "#297FD4",
                        buyHover: "#69B1F8",
                        depthBuyBg: "#E6F3FF",
                        error: "#EC8D42",
                        errorBg: "#FFEFE2",
                        success: "#1F8DF9",
                        successBg: "#E6F3FF"
                    }, o.mC), {
                        mobile: (0, r.__assign)({}, i.C0)
                    }),
                    "cvd-reverse": (0, r.__assign)((0, r.__assign)({
                        sell: "#1F8DF9",
                        textSell: "#297FD4",
                        sellHover: "#69B1F8",
                        depthSellBg: "#E6F3FF",
                        buy: "#EC8D42",
                        textBuy: "#DD7A2B",
                        buyHover: "#EEA062",
                        depthBuyBg: "#FFEFE2",
                        error: "#EC8D42",
                        errorBg: "#FFEFE2",
                        success: "#1F8DF9",
                        successBg: "#E6F3FF"
                    }, o.ep), {
                        mobile: (0, r.__assign)({}, i.mt)
                    }),
                    traditional: (0, r.__assign)((0, r.__assign)({}, o.k8), {
                        mobile: (0, r.__assign)({}, i.eL)
                    }),
                    "traditional-reverse": (0, r.__assign)((0, r.__assign)({}, o.Cc), {
                        mobile: (0, r.__assign)({}, i.Wu)
                    })
                },
                u = {
                    reverse: (0, r.__assign)((0, r.__assign)({
                        sell: a.wL[400],
                        textSell: a.wL[400],
                        sellHover: a.wL[300],
                        depthSellBg: a.wL[800],
                        buy: a.wv[400],
                        textBuy: a.wv[400],
                        buyHover: a.wv[300],
                        depthBuyBg: a.wv[800]
                    }, o.pJ), {
                        mobile: (0, r.__assign)({}, i.z0)
                    }),
                    cvd: (0, r.__assign)((0, r.__assign)({
                        sell: "#EC8D42",
                        textSell: "#DD7A2B",
                        sellHover: "#EEA062",
                        depthSellBg: "#553821",
                        buy: "#1F8DF9",
                        textBuy: "#1F8DF9",
                        buyHover: "#69B1F8",
                        depthBuyBg: "#22384E",
                        error: "#EC8D42",
                        errorBg: "#553821",
                        success: "#1F8DF9",
                        successBg: "#22384E"
                    }, o.s), {
                        mobile: (0, r.__assign)({}, i.qd)
                    }),
                    "cvd-reverse": (0, r.__assign)((0, r.__assign)({
                        sell: "#1F8DF9",
                        textSell: "#297FD4",
                        sellHover: "#69B1F8",
                        depthSellBg: "#E6F3FF",
                        buy: "#EC8D42",
                        textBuy: "#DD7A2B",
                        buyHover: "#EEA062",
                        depthBuyBg: "#FFEFE2",
                        error: "#EC8D42",
                        errorBg: "#553821",
                        success: "#1F8DF9",
                        successBg: "#22384E"
                    }, o.CY), {
                        mobile: (0, r.__assign)({}, i.K2)
                    }),
                    traditional: (0, r.__assign)((0, r.__assign)({}, o.Qx), {
                        mobile: (0, r.__assign)({}, i.ik)
                    }),
                    "traditional-reverse": (0, r.__assign)((0, r.__assign)({}, o.ml), {
                        mobile: (0, r.__assign)({}, i.w8)
                    })
                }
        },
        oVQP: (e, n, t) => {
            "use strict";
            t.d(n, {
                BB: () => u,
                XT: () => l
            });
            var r = t("wIZF"),
                o = t("t50Z"),
                i = t("/kHH"),
                a = t("7laY"),
                s = {
                    sell: o.wv[400],
                    textSell: o.wv[450],
                    sellHover: o.wv[300],
                    depthSellBg: o.wv[10],
                    buy: o.wL[400],
                    textBuy: o.wL[500],
                    buyHover: o.wL[300],
                    depthBuyBg: o.wL[10],
                    line: o.wm[50],
                    outlineHover: o.D9[50],
                    primary: o.D9[100],
                    primaryHover: o.D9[200],
                    error: o.wv[450],
                    errorBg: o.wv[10],
                    success: o.wL[400],
                    successBg: o.wL[10],
                    disable: o.wm[50],
                    iconNormal: o.wm[250],
                    textWhite: o.wm[0],
                    textGray: o.wm[50],
                    textBlack: o.wm[1e3],
                    textPrimary: o.wm[800],
                    textSecondary: o.wm[600],
                    textThird: o.wm[400],
                    textDisabled: o.wm[200],
                    textBrand: o.D9[300],
                    textToast: o.D9[500],
                    bg: o.wm[10],
                    bg1: o.wm[0],
                    bg2: o.wm[5],
                    bg3: o.wm[10],
                    bg4: o.wm[500],
                    bg6: o.wm[0],
                    bg7: o.wm[5],
                    popupBg: o.wm[0],
                    badgeBg: o.D9[10],
                    selectedBg: o.wm[5],
                    gradientBrand: o.D7.primary,
                    gradientPrimary: o.D7.light
                },
                u = (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, s), i.NY), {
                    mobile: (0, r.__assign)({}, a.vT)
                }),
                c = {
                    sell: o.wv[400],
                    textSell: o.wv[400],
                    sellHover: o.wv[300],
                    depthSellBg: o.wv[800],
                    buy: o.wL[400],
                    textBuy: o.wL[400],
                    buyHover: o.wL[300],
                    depthBuyBg: o.wL[800],
                    line: o.wm[700],
                    outlineHover: o.D9[600],
                    primary: o.D9[100],
                    primaryHover: o.D9[200],
                    error: o.wv[400],
                    errorBg: o.wv[800],
                    success: o.wL[400],
                    successBg: o.wL[800],
                    disable: o.wm[600],
                    iconNormal: o.wm[300],
                    textWhite: o.wm[0],
                    textGray: o.wm[50],
                    textBlack: o.wm[1e3],
                    textPrimary: o.wm[50],
                    textSecondary: o.wm[200],
                    textThird: o.wm[300],
                    textDisabled: o.wm[500],
                    textBrand: o.D9[200],
                    textToast: o.D9[400],
                    bg: o.wm[900],
                    bg1: o.wm[900],
                    bg2: o.wm[1e3],
                    bg3: o.wm[700],
                    bg4: o.wm[500],
                    bg6: o.wm[850],
                    bg7: o.wm[950],
                    popupBg: o.wm[800],
                    badgeBg: o.D9[750],
                    selectedBg: o.wm[875],
                    gradientBrand: o.D7.primary,
                    gradientPrimary: o.D7.dark
                },
                l = (0, r.__assign)((0, r.__assign)((0, r.__assign)({}, c), i.bY), {
                    mobile: (0, r.__assign)({}, a.j2)
                })
        },
        t50Z: (e, n, t) => {
            "use strict";
            t.d(n, {
                D7: () => s,
                D9: () => o,
                wL: () => i,
                wm: () => r,
                wv: () => a
            });
            var r = {
                    0: "#FFFFFF",
                    5: "#FAFAFA",
                    10: "#F5F5F5",
                    50: "#EAECEF",
                    100: "#D8DCE1",
                    150: "#CACED3",
                    200: "#B7BDC6",
                    250: "#929AA5",
                    300: "#848E9C",
                    400: "#707A8A",
                    500: "#5E6673",
                    600: "#474D57",
                    700: "#2B3139",
                    800: "#1E2329",
                    850: "#202630",
                    875: "#1E2026",
                    900: "#181A20",
                    950: "#191A1F",
                    1e3: "#0B0E11"
                },
                o = {
                    5: "#FFFDE6",
                    10: "#FEF6D8",
                    50: "#FFEF87",
                    100: "#FCD535",
                    200: "#F0B90B",
                    300: "#C99400",
                    400: "#A37200",
                    500: "#8D5F02",
                    600: "#6A4403",
                    700: "#3C2601",
                    750: "#2D2A20",
                    800: "#281A00",
                    900: "#181301",
                    950: "#2C1C00",
                    1e3: "#0C0900"
                },
                i = {
                    5: "#F2FFF7",
                    10: "#E6FFF1",
                    50: "#B5FFD9",
                    100: "#85F2BE",
                    200: "#5AE6A7",
                    300: "#32D993",
                    400: "#0ECB81",
                    500: "#2EBD85",
                    600: "#008057",
                    700: "#005940",
                    800: "#102821",
                    900: "#091F19",
                    1e3: "#00110B"
                },
                a = {
                    5: "#FEF6F7",
                    10: "#FEF1F2",
                    50: "#FDDDDE",
                    100: "#FFC2C4",
                    200: "#FF99A0",
                    300: "#FF707E",
                    400: "#F6465D",
                    450: "#E33B54",
                    500: "#CF304A",
                    550: "#E33B54",
                    600: "#A81E3A",
                    700: "#82112B",
                    800: "#35141D",
                    900: "#2C1018",
                    1e3: "#1F0A10"
                },
                s = {
                    primary: "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)",
                    dark: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                    light: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                }
        },
        qrIQ: (e, n, t) => {
            "use strict";
            t.d(n, {
                S$: () => o,
                lq: () => i
            });
            var r = function() {
                    try {
                        return "function" === typeof bn.getSystemInfoSync ? "mini-app" : "webview"
                    } catch (e) {
                        if (window.__RUN_BY_ELECTRON__) return "electron"
                    }
                    return "browser"
                },
                o = !1,
                i = !o && "mini-app" === r();
            !o && r();

            function a(e) {
                return e && e.Math == Math ? e : void 0
            }
            "object" == typeof globalThis && a(globalThis) || a(window) || "object" == typeof self && a(self) || "object" == typeof t.g && a(t.g)
        },
        "9xbI": (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => a
            });
            var r = t("wIZF"),
                o = t("DTvD"),
                i = t.n(o);
            const a = (0, o.forwardRef)((function(e, n) {
                var t = e.as,
                    o = void 0 === t ? "div" : t,
                    a = (0, r.__rest)(e, ["as"]);
                return i().createElement(o, (0, r.__assign)((0, r.__assign)({}, a), {
                    ref: n
                }))
            }))
        },
        "1Fob": e => {
            "use strict";
            var n = "%[a-f0-9]{2}",
                t = new RegExp(n, "gi"),
                r = new RegExp("(" + n + ")+", "gi");

            function o(e, n) {
                try {
                    return decodeURIComponent(e.join(""))
                } catch (i) {}
                if (1 === e.length) return e;
                n = n || 1;
                var t = e.slice(0, n),
                    r = e.slice(n);
                return Array.prototype.concat.call([], o(t), o(r))
            }

            function i(e) {
                try {
                    return decodeURIComponent(e)
                } catch (i) {
                    for (var n = e.match(t), r = 1; r < n.length; r++) n = (e = o(n, r).join("")).match(t);
                    return e
                }
            }
            e.exports = function(e) {
                if ("string" !== typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (n) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "\ufffd\ufffd",
                                "%FF%FE": "\ufffd\ufffd"
                            }, o = r.exec(e); o;) {
                            try {
                                t[o[0]] = decodeURIComponent(o[0])
                            } catch (n) {
                                var a = i(o[0]);
                                a !== o[0] && (t[o[0]] = a)
                            }
                            o = r.exec(e)
                        }
                        t["%C2"] = "\ufffd";
                        for (var s = Object.keys(t), u = 0; u < s.length; u++) {
                            var c = s[u];
                            e = e.replace(new RegExp(c, "g"), t[c])
                        }
                        return e
                    }(e)
                }
            }
        },
        oXkQ: (e, n, t) => {
            "use strict";
            var r = t("kvVz"),
                o = {
                    childContextTypes: !0,
                    contextType: !0,
                    contextTypes: !0,
                    defaultProps: !0,
                    displayName: !0,
                    getDefaultProps: !0,
                    getDerivedStateFromError: !0,
                    getDerivedStateFromProps: !0,
                    mixins: !0,
                    propTypes: !0,
                    type: !0
                },
                i = {
                    name: !0,
                    length: !0,
                    prototype: !0,
                    caller: !0,
                    callee: !0,
                    arguments: !0,
                    arity: !0
                },
                a = {
                    $$typeof: !0,
                    compare: !0,
                    defaultProps: !0,
                    displayName: !0,
                    propTypes: !0,
                    type: !0
                },
                s = {};

            function u(e) {
                return r.isMemo(e) ? a : s[e.$$typeof] || o
            }
            s[r.ForwardRef] = {
                $$typeof: !0,
                render: !0,
                defaultProps: !0,
                displayName: !0,
                propTypes: !0
            }, s[r.Memo] = a;
            var c = Object.defineProperty,
                l = Object.getOwnPropertyNames,
                d = Object.getOwnPropertySymbols,
                p = Object.getOwnPropertyDescriptor,
                f = Object.getPrototypeOf,
                g = Object.prototype;
            e.exports = function e(n, t, r) {
                if ("string" !== typeof t) {
                    if (g) {
                        var o = f(t);
                        o && o !== g && e(n, o, r)
                    }
                    var a = l(t);
                    d && (a = a.concat(d(t)));
                    for (var s = u(n), h = u(t), v = 0; v < a.length; ++v) {
                        var m = a[v];
                        if (!i[m] && (!r || !r[m]) && (!h || !h[m]) && (!s || !s[m])) {
                            var y = p(t, m);
                            try {
                                c(n, m, y)
                            } catch (b) {}
                        }
                    }
                }
                return n
            }
        },
        G0fi: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => q
            });
            var r = t("Cffy"),
                o = t("OHGK");

            function i(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? Object(arguments[n]) : {},
                        r = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && r.push.apply(r, Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.forEach((function(n) {
                        (0, o.A)(e, n, t[n])
                    }))
                }
                return e
            }
            var a = t("BxAp"),
                s = t("nTdK");

            function u(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }

            function c(e, n) {
                if (n && ("object" === (0, r.A)(n) || "function" === typeof n)) return n;
                if (void 0 !== n) throw new TypeError("Derived constructors may only return object or undefined");
                return u(e)
            }

            function l(e) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, l(e)
            }

            function d(e, n) {
                return d = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                }, d(e, n)
            }

            function p(e, n) {
                if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), n && d(e, n)
            }
            var f = {
                    type: "logger",
                    log: function(e) {
                        this.output("log", e)
                    },
                    warn: function(e) {
                        this.output("warn", e)
                    },
                    error: function(e) {
                        this.output("error", e)
                    },
                    output: function(e, n) {
                        console && console[e] && console[e].apply(console, n)
                    }
                },
                g = new(function() {
                    function e(n) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, a.A)(this, e), this.init(n, t)
                    }
                    return (0, s.A)(e, [{
                        key: "init",
                        value: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.prefix = n.prefix || "i18next:", this.logger = e || f, this.options = n, this.debug = n.debug
                        }
                    }, {
                        key: "setDebug",
                        value: function(e) {
                            this.debug = e
                        }
                    }, {
                        key: "log",
                        value: function() {
                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                            return this.forward(n, "log", "", !0)
                        }
                    }, {
                        key: "warn",
                        value: function() {
                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                            return this.forward(n, "warn", "", !0)
                        }
                    }, {
                        key: "error",
                        value: function() {
                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                            return this.forward(n, "error", "")
                        }
                    }, {
                        key: "deprecate",
                        value: function() {
                            for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                            return this.forward(n, "warn", "WARNING DEPRECATED: ", !0)
                        }
                    }, {
                        key: "forward",
                        value: function(e, n, t, r) {
                            return r && !this.debug ? null : ("string" === typeof e[0] && (e[0] = "".concat(t).concat(this.prefix, " ").concat(e[0])), this.logger[n](e))
                        }
                    }, {
                        key: "create",
                        value: function(n) {
                            return new e(this.logger, i({}, {
                                prefix: "".concat(this.prefix, ":").concat(n, ":")
                            }, this.options))
                        }
                    }]), e
                }()),
                h = function() {
                    function e() {
                        (0, a.A)(this, e), this.observers = {}
                    }
                    return (0, s.A)(e, [{
                        key: "on",
                        value: function(e, n) {
                            var t = this;
                            return e.split(" ").forEach((function(e) {
                                t.observers[e] = t.observers[e] || [], t.observers[e].push(n)
                            })), this
                        }
                    }, {
                        key: "off",
                        value: function(e, n) {
                            this.observers[e] && (n ? this.observers[e] = this.observers[e].filter((function(e) {
                                return e !== n
                            })) : delete this.observers[e])
                        }
                    }, {
                        key: "emit",
                        value: function(e) {
                            for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                            if (this.observers[e]) {
                                var o = [].concat(this.observers[e]);
                                o.forEach((function(e) {
                                    e.apply(void 0, t)
                                }))
                            }
                            if (this.observers["*"]) {
                                var i = [].concat(this.observers["*"]);
                                i.forEach((function(n) {
                                    n.apply(n, [e].concat(t))
                                }))
                            }
                        }
                    }]), e
                }();

            function v() {
                var e, n, t = new Promise((function(t, r) {
                    e = t, n = r
                }));
                return t.resolve = e, t.reject = n, t
            }

            function m(e) {
                return null == e ? "" : "" + e
            }

            function y(e, n, t) {
                e.forEach((function(e) {
                    n[e] && (t[e] = n[e])
                }))
            }

            function b(e, n, t) {
                function r(e) {
                    return e && e.indexOf("###") > -1 ? e.replace(/###/g, ".") : e
                }

                function o() {
                    return !e || "string" === typeof e
                }
                for (var i = "string" !== typeof n ? [].concat(n) : n.split("."); i.length > 1;) {
                    if (o()) return {};
                    var a = r(i.shift());
                    !e[a] && t && (e[a] = new t), e = Object.prototype.hasOwnProperty.call(e, a) ? e[a] : {}
                }
                return o() ? {} : {
                    obj: e,
                    k: r(i.shift())
                }
            }

            function A(e, n, t) {
                var r = b(e, n, Object);
                r.obj[r.k] = t
            }

            function I(e, n) {
                var t = b(e, n),
                    r = t.obj,
                    o = t.k;
                if (r) return r[o]
            }

            function M(e, n, t) {
                var r = I(e, t);
                return void 0 !== r ? r : I(n, t)
            }

            function x(e, n, t) {
                for (var r in n) "__proto__" !== r && "constructor" !== r && (r in e ? "string" === typeof e[r] || e[r] instanceof String || "string" === typeof n[r] || n[r] instanceof String ? t && (e[r] = n[r]) : x(e[r], n[r], t) : e[r] = n[r]);
                return e
            }

            function C(e) {
                return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
            }
            var k = {
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#x2F;"
            };

            function w(e) {
                return "string" === typeof e ? e.replace(/[&<>"'\/]/g, (function(e) {
                    return k[e]
                })) : e
            }
            var E = window.navigator && window.navigator.userAgent && window.navigator.userAgent.indexOf("MSIE") > -1,
                _ = function(e) {
                    function n(e) {
                        var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                            ns: ["translation"],
                            defaultNS: "translation"
                        };
                        return (0, a.A)(this, n), t = c(this, l(n).call(this)), E && h.call(u(t)), t.data = e || {}, t.options = r, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t
                    }
                    return p(n, e), (0, s.A)(n, [{
                        key: "addNamespaces",
                        value: function(e) {
                            this.options.ns.indexOf(e) < 0 && this.options.ns.push(e)
                        }
                    }, {
                        key: "removeNamespaces",
                        value: function(e) {
                            var n = this.options.ns.indexOf(e);
                            n > -1 && this.options.ns.splice(n, 1)
                        }
                    }, {
                        key: "getResource",
                        value: function(e, n, t) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {},
                                o = void 0 !== r.keySeparator ? r.keySeparator : this.options.keySeparator,
                                i = [e, n];
                            return t && "string" !== typeof t && (i = i.concat(t)), t && "string" === typeof t && (i = i.concat(o ? t.split(o) : t)), e.indexOf(".") > -1 && (i = e.split(".")), I(this.data, i)
                        }
                    }, {
                        key: "addResource",
                        value: function(e, n, t, r) {
                            var o = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : {
                                    silent: !1
                                },
                                i = this.options.keySeparator;
                            void 0 === i && (i = ".");
                            var a = [e, n];
                            t && (a = a.concat(i ? t.split(i) : t)), e.indexOf(".") > -1 && (r = n, n = (a = e.split("."))[1]), this.addNamespaces(n), A(this.data, a, r), o.silent || this.emit("added", e, n, t, r)
                        }
                    }, {
                        key: "addResources",
                        value: function(e, n, t) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                                silent: !1
                            };
                            for (var o in t) "string" !== typeof t[o] && "[object Array]" !== Object.prototype.toString.apply(t[o]) || this.addResource(e, n, o, t[o], {
                                silent: !0
                            });
                            r.silent || this.emit("added", e, n, t)
                        }
                    }, {
                        key: "addResourceBundle",
                        value: function(e, n, t, r, o) {
                            var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {
                                    silent: !1
                                },
                                s = [e, n];
                            e.indexOf(".") > -1 && (r = t, t = n, n = (s = e.split("."))[1]), this.addNamespaces(n);
                            var u = I(this.data, s) || {};
                            r ? x(u, t, o) : u = i({}, u, t), A(this.data, s, u), a.silent || this.emit("added", e, n, t)
                        }
                    }, {
                        key: "removeResourceBundle",
                        value: function(e, n) {
                            this.hasResourceBundle(e, n) && delete this.data[e][n], this.removeNamespaces(n), this.emit("removed", e, n)
                        }
                    }, {
                        key: "hasResourceBundle",
                        value: function(e, n) {
                            return void 0 !== this.getResource(e, n)
                        }
                    }, {
                        key: "getResourceBundle",
                        value: function(e, n) {
                            return n || (n = this.options.defaultNS), "v1" === this.options.compatibilityAPI ? i({}, {}, this.getResource(e, n)) : this.getResource(e, n)
                        }
                    }, {
                        key: "getDataByLanguage",
                        value: function(e) {
                            return this.data[e]
                        }
                    }, {
                        key: "toJSON",
                        value: function() {
                            return this.data
                        }
                    }]), n
                }(h),
                S = {
                    processors: {},
                    addPostProcessor: function(e) {
                        this.processors[e.name] = e
                    },
                    handle: function(e, n, t, r, o) {
                        var i = this;
                        return e.forEach((function(e) {
                            i.processors[e] && (n = i.processors[e].process(n, t, r, o))
                        })), n
                    }
                },
                T = {},
                O = function(e) {
                    function n(e) {
                        var t, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return (0, a.A)(this, n), t = c(this, l(n).call(this)), E && h.call(u(t)), y(["resourceStore", "languageUtils", "pluralResolver", "interpolator", "backendConnector", "i18nFormat", "utils"], e, u(t)), t.options = r, void 0 === t.options.keySeparator && (t.options.keySeparator = "."), t.logger = g.create("translator"), t
                    }
                    return p(n, e), (0, s.A)(n, [{
                        key: "changeLanguage",
                        value: function(e) {
                            e && (this.language = e)
                        }
                    }, {
                        key: "exists",
                        value: function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                    interpolation: {}
                                },
                                t = this.resolve(e, n);
                            return t && void 0 !== t.res
                        }
                    }, {
                        key: "extractFromKey",
                        value: function(e, n) {
                            var t = void 0 !== n.nsSeparator ? n.nsSeparator : this.options.nsSeparator;
                            void 0 === t && (t = ":");
                            var r = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                o = n.ns || this.options.defaultNS;
                            if (t && e.indexOf(t) > -1) {
                                var i = e.match(this.interpolator.nestingRegexp);
                                if (i && i.length > 0) return {
                                    key: e,
                                    namespaces: o
                                };
                                var a = e.split(t);
                                (t !== r || t === r && this.options.ns.indexOf(a[0]) > -1) && (o = a.shift()), e = a.join(r)
                            }
                            return "string" === typeof o && (o = [o]), {
                                key: e,
                                namespaces: o
                            }
                        }
                    }, {
                        key: "translate",
                        value: function(e, n, t) {
                            var o = this;
                            if ("object" !== (0, r.A)(n) && this.options.overloadTranslationOptionHandler && (n = this.options.overloadTranslationOptionHandler(arguments)), n || (n = {}), void 0 === e || null === e) return "";
                            Array.isArray(e) || (e = [String(e)]);
                            var a = void 0 !== n.keySeparator ? n.keySeparator : this.options.keySeparator,
                                s = this.extractFromKey(e[e.length - 1], n),
                                u = s.key,
                                c = s.namespaces,
                                l = c[c.length - 1],
                                d = n.lng || this.language,
                                p = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
                            if (d && "cimode" === d.toLowerCase()) {
                                if (p) {
                                    var f = n.nsSeparator || this.options.nsSeparator;
                                    return l + f + u
                                }
                                return u
                            }
                            var g = this.resolve(e, n),
                                h = g && g.res,
                                v = g && g.usedKey || u,
                                m = g && g.exactUsedKey || u,
                                y = Object.prototype.toString.apply(h),
                                b = ["[object Number]", "[object Function]", "[object RegExp]"],
                                A = void 0 !== n.joinArrays ? n.joinArrays : this.options.joinArrays,
                                I = !this.i18nFormat || this.i18nFormat.handleAsObject,
                                M = "string" !== typeof h && "boolean" !== typeof h && "number" !== typeof h;
                            if (I && h && M && b.indexOf(y) < 0 && ("string" !== typeof A || "[object Array]" !== y)) {
                                if (!n.returnObjects && !this.options.returnObjects) return this.logger.warn("accessing an object - but returnObjects options is not enabled!"), this.options.returnedObjectHandler ? this.options.returnedObjectHandler(v, h, n) : "key '".concat(u, " (").concat(this.language, ")' returned an object instead of string.");
                                if (a) {
                                    var x = "[object Array]" === y,
                                        C = x ? [] : {},
                                        k = x ? m : v;
                                    for (var w in h)
                                        if (Object.prototype.hasOwnProperty.call(h, w)) {
                                            var E = "".concat(k).concat(a).concat(w);
                                            C[w] = this.translate(E, i({}, n, {
                                                joinArrays: !1,
                                                ns: c
                                            })), C[w] === E && (C[w] = h[w])
                                        }
                                    h = C
                                }
                            } else if (I && "string" === typeof A && "[object Array]" === y)(h = h.join(A)) && (h = this.extendTranslation(h, e, n, t));
                            else {
                                var _ = !1,
                                    S = !1;
                                if (!this.isValidLookup(h) && void 0 !== n.defaultValue) {
                                    if (_ = !0, void 0 !== n.count) {
                                        var T = this.pluralResolver.getSuffix(d, n.count);
                                        h = n["defaultValue".concat(T)]
                                    }
                                    h || (h = n.defaultValue)
                                }
                                this.isValidLookup(h) || (S = !0, h = u);
                                var O = n.defaultValue && n.defaultValue !== h && this.options.updateMissing;
                                if (S || _ || O) {
                                    if (this.logger.log(O ? "updateKey" : "missingKey", d, l, u, O ? n.defaultValue : h), a) {
                                        var P = this.resolve(u, i({}, n, {
                                            keySeparator: !1
                                        }));
                                        P && P.res && this.logger.warn("Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.")
                                    }
                                    var L = [],
                                        N = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
                                    if ("fallback" === this.options.saveMissingTo && N && N[0])
                                        for (var R = 0; R < N.length; R++) L.push(N[R]);
                                    else "all" === this.options.saveMissingTo ? L = this.languageUtils.toResolveHierarchy(n.lng || this.language) : L.push(n.lng || this.language);
                                    var D = function(e, t) {
                                        o.options.missingKeyHandler ? o.options.missingKeyHandler(e, l, t, O ? n.defaultValue : h, O, n) : o.backendConnector && o.backendConnector.saveMissing && o.backendConnector.saveMissing(e, l, t, O ? n.defaultValue : h, O, n), o.emit("missingKey", e, l, t, h)
                                    };
                                    if (this.options.saveMissing) {
                                        var F = void 0 !== n.count && "string" !== typeof n.count;
                                        this.options.saveMissingPlurals && F ? L.forEach((function(e) {
                                            o.pluralResolver.getPluralFormsOfKey(e, u).forEach((function(n) {
                                                return D([e], n)
                                            }))
                                        })) : D(L, u)
                                    }
                                }
                                h = this.extendTranslation(h, e, n, g, t), S && h === u && this.options.appendNamespaceToMissingKey && (h = "".concat(l, ":").concat(u)), S && this.options.parseMissingKeyHandler && (h = this.options.parseMissingKeyHandler(h))
                            }
                            return h
                        }
                    }, {
                        key: "extendTranslation",
                        value: function(e, n, t, r, o) {
                            var a = this;
                            if (this.i18nFormat && this.i18nFormat.parse) e = this.i18nFormat.parse(e, t, r.usedLng, r.usedNS, r.usedKey, {
                                resolved: r
                            });
                            else if (!t.skipInterpolation) {
                                t.interpolation && this.interpolator.init(i({}, t, {
                                    interpolation: i({}, this.options.interpolation, t.interpolation)
                                }));
                                var s, u = t.interpolation && t.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                                if (u) {
                                    var c = e.match(this.interpolator.nestingRegexp);
                                    s = c && c.length
                                }
                                var l = t.replace && "string" !== typeof t.replace ? t.replace : t;
                                if (this.options.interpolation.defaultVariables && (l = i({}, this.options.interpolation.defaultVariables, l)), e = this.interpolator.interpolate(e, l, t.lng || this.language, t), u) {
                                    var d = e.match(this.interpolator.nestingRegexp);
                                    s < (d && d.length) && (t.nest = !1)
                                }!1 !== t.nest && (e = this.interpolator.nest(e, (function() {
                                    for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++) r[i] = arguments[i];
                                    return o && o[0] === r[0] && !t.context ? (a.logger.warn("It seems you are nesting recursively key: ".concat(r[0], " in key: ").concat(n[0])), null) : a.translate.apply(a, r.concat([n]))
                                }), t)), t.interpolation && this.interpolator.reset()
                            }
                            var p = t.postProcess || this.options.postProcess,
                                f = "string" === typeof p ? [p] : p;
                            return void 0 !== e && null !== e && f && f.length && !1 !== t.applyPostProcessor && (e = S.handle(f, e, n, this.options && this.options.postProcessPassResolved ? i({
                                i18nResolved: r
                            }, t) : t, this)), e
                        }
                    }, {
                        key: "resolve",
                        value: function(e) {
                            var n, t, r, o, i, a = this,
                                s = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return "string" === typeof e && (e = [e]), e.forEach((function(e) {
                                if (!a.isValidLookup(n)) {
                                    var u = a.extractFromKey(e, s),
                                        c = u.key;
                                    t = c;
                                    var l = u.namespaces;
                                    a.options.fallbackNS && (l = l.concat(a.options.fallbackNS));
                                    var d = void 0 !== s.count && "string" !== typeof s.count,
                                        p = void 0 !== s.context && "string" === typeof s.context && "" !== s.context,
                                        f = s.lngs ? s.lngs : a.languageUtils.toResolveHierarchy(s.lng || a.language, s.fallbackLng);
                                    l.forEach((function(e) {
                                        a.isValidLookup(n) || (i = e, !T["".concat(f[0], "-").concat(e)] && a.utils && a.utils.hasLoadedNamespace && !a.utils.hasLoadedNamespace(i) && (T["".concat(f[0], "-").concat(e)] = !0, a.logger.warn('key "'.concat(t, '" for languages "').concat(f.join(", "), '" won\'t get resolved as namespace "').concat(i, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!")), f.forEach((function(t) {
                                            if (!a.isValidLookup(n)) {
                                                o = t;
                                                var i, u, l = c,
                                                    f = [l];
                                                if (a.i18nFormat && a.i18nFormat.addLookupKeys) a.i18nFormat.addLookupKeys(f, c, t, e, s);
                                                else d && (i = a.pluralResolver.getSuffix(t, s.count)), d && p && f.push(l + i), p && f.push(l += "".concat(a.options.contextSeparator).concat(s.context)), d && f.push(l += i);
                                                for (; u = f.pop();) a.isValidLookup(n) || (r = u, n = a.getResource(t, e, u, s))
                                            }
                                        })))
                                    }))
                                }
                            })), {
                                res: n,
                                usedKey: t,
                                exactUsedKey: r,
                                usedLng: o,
                                usedNS: i
                            }
                        }
                    }, {
                        key: "isValidLookup",
                        value: function(e) {
                            return void 0 !== e && !(!this.options.returnNull && null === e) && !(!this.options.returnEmptyString && "" === e)
                        }
                    }, {
                        key: "getResource",
                        value: function(e, n, t) {
                            var r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                            return this.i18nFormat && this.i18nFormat.getResource ? this.i18nFormat.getResource(e, n, t, r) : this.resourceStore.getResource(e, n, t, r)
                        }
                    }]), n
                }(h);

            function P(e) {
                return e.charAt(0).toUpperCase() + e.slice(1)
            }
            var L = function() {
                    function e(n) {
                        (0, a.A)(this, e), this.options = n, this.whitelist = this.options.supportedLngs || !1, this.supportedLngs = this.options.supportedLngs || !1, this.logger = g.create("languageUtils")
                    }
                    return (0, s.A)(e, [{
                        key: "getScriptPartFromCode",
                        value: function(e) {
                            if (!e || e.indexOf("-") < 0) return null;
                            var n = e.split("-");
                            return 2 === n.length ? null : (n.pop(), "x" === n[n.length - 1].toLowerCase() ? null : this.formatLanguageCode(n.join("-")))
                        }
                    }, {
                        key: "getLanguagePartFromCode",
                        value: function(e) {
                            if (!e || e.indexOf("-") < 0) return e;
                            var n = e.split("-");
                            return this.formatLanguageCode(n[0])
                        }
                    }, {
                        key: "formatLanguageCode",
                        value: function(e) {
                            if ("string" === typeof e && e.indexOf("-") > -1) {
                                var n = ["hans", "hant", "latn", "cyrl", "cans", "mong", "arab"],
                                    t = e.split("-");
                                return this.options.lowerCaseLng ? t = t.map((function(e) {
                                    return e.toLowerCase()
                                })) : 2 === t.length ? (t[0] = t[0].toLowerCase(), t[1] = t[1].toUpperCase(), n.indexOf(t[1].toLowerCase()) > -1 && (t[1] = P(t[1].toLowerCase()))) : 3 === t.length && (t[0] = t[0].toLowerCase(), 2 === t[1].length && (t[1] = t[1].toUpperCase()), "sgn" !== t[0] && 2 === t[2].length && (t[2] = t[2].toUpperCase()), n.indexOf(t[1].toLowerCase()) > -1 && (t[1] = P(t[1].toLowerCase())), n.indexOf(t[2].toLowerCase()) > -1 && (t[2] = P(t[2].toLowerCase()))), t.join("-")
                            }
                            return this.options.cleanCode || this.options.lowerCaseLng ? e.toLowerCase() : e
                        }
                    }, {
                        key: "isWhitelisted",
                        value: function(e) {
                            return this.logger.deprecate("languageUtils.isWhitelisted", 'function "isWhitelisted" will be renamed to "isSupportedCode" in the next major - please make sure to rename it\'s usage asap.'), this.isSupportedCode(e)
                        }
                    }, {
                        key: "isSupportedCode",
                        value: function(e) {
                            return ("languageOnly" === this.options.load || this.options.nonExplicitSupportedLngs) && (e = this.getLanguagePartFromCode(e)), !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(e) > -1
                        }
                    }, {
                        key: "getBestMatchFromCodes",
                        value: function(e) {
                            var n, t = this;
                            return e ? (e.forEach((function(e) {
                                if (!n) {
                                    var r = t.formatLanguageCode(e);
                                    t.options.supportedLngs && !t.isSupportedCode(r) || (n = r)
                                }
                            })), !n && this.options.supportedLngs && e.forEach((function(e) {
                                if (!n) {
                                    var r = t.getLanguagePartFromCode(e);
                                    if (t.isSupportedCode(r)) return n = r;
                                    n = t.options.supportedLngs.find((function(e) {
                                        if (0 === e.indexOf(r)) return e
                                    }))
                                }
                            })), n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]), n) : null
                        }
                    }, {
                        key: "getFallbackCodes",
                        value: function(e, n) {
                            if (!e) return [];
                            if ("function" === typeof e && (e = e(n)), "string" === typeof e && (e = [e]), "[object Array]" === Object.prototype.toString.apply(e)) return e;
                            if (!n) return e.default || [];
                            var t = e[n];
                            return t || (t = e[this.getScriptPartFromCode(n)]), t || (t = e[this.formatLanguageCode(n)]), t || (t = e[this.getLanguagePartFromCode(n)]), t || (t = e.default), t || []
                        }
                    }, {
                        key: "toResolveHierarchy",
                        value: function(e, n) {
                            var t = this,
                                r = this.getFallbackCodes(n || this.options.fallbackLng || [], e),
                                o = [],
                                i = function(e) {
                                    e && (t.isSupportedCode(e) ? o.push(e) : t.logger.warn("rejecting language code not found in supportedLngs: ".concat(e)))
                                };
                            return "string" === typeof e && e.indexOf("-") > -1 ? ("languageOnly" !== this.options.load && i(this.formatLanguageCode(e)), "languageOnly" !== this.options.load && "currentOnly" !== this.options.load && i(this.getScriptPartFromCode(e)), "currentOnly" !== this.options.load && i(this.getLanguagePartFromCode(e))) : "string" === typeof e && i(this.formatLanguageCode(e)), r.forEach((function(e) {
                                o.indexOf(e) < 0 && i(t.formatLanguageCode(e))
                            })), o
                        }
                    }]), e
                }(),
                N = [{
                    lngs: ["ach", "ak", "am", "arn", "br", "fil", "gun", "ln", "mfe", "mg", "mi", "oc", "pt", "pt-BR", "tg", "ti", "tr", "uz", "wa"],
                    nr: [1, 2],
                    fc: 1
                }, {
                    lngs: ["af", "an", "ast", "az", "bg", "bn", "ca", "da", "de", "dev", "el", "en", "eo", "es", "et", "eu", "fi", "fo", "fur", "fy", "gl", "gu", "ha", "hi", "hu", "hy", "ia", "it", "kn", "ku", "lb", "mai", "ml", "mn", "mr", "nah", "nap", "nb", "ne", "nl", "nn", "no", "nso", "pa", "pap", "pms", "ps", "pt-PT", "rm", "sco", "se", "si", "so", "son", "sq", "sv", "sw", "ta", "te", "tk", "ur", "yo"],
                    nr: [1, 2],
                    fc: 2
                }, {
                    lngs: ["ay", "bo", "cgg", "fa", "ht", "id", "ja", "jbo", "ka", "kk", "km", "ko", "ky", "lo", "ms", "sah", "su", "th", "tt", "ug", "vi", "wo", "zh"],
                    nr: [1],
                    fc: 3
                }, {
                    lngs: ["be", "bs", "cnr", "dz", "hr", "ru", "sr", "uk"],
                    nr: [1, 2, 5],
                    fc: 4
                }, {
                    lngs: ["ar"],
                    nr: [0, 1, 2, 3, 11, 100],
                    fc: 5
                }, {
                    lngs: ["cs", "sk"],
                    nr: [1, 2, 5],
                    fc: 6
                }, {
                    lngs: ["csb", "pl"],
                    nr: [1, 2, 5],
                    fc: 7
                }, {
                    lngs: ["cy"],
                    nr: [1, 2, 3, 8],
                    fc: 8
                }, {
                    lngs: ["fr"],
                    nr: [1, 2],
                    fc: 9
                }, {
                    lngs: ["ga"],
                    nr: [1, 2, 3, 7, 11],
                    fc: 10
                }, {
                    lngs: ["gd"],
                    nr: [1, 2, 3, 20],
                    fc: 11
                }, {
                    lngs: ["is"],
                    nr: [1, 2],
                    fc: 12
                }, {
                    lngs: ["jv"],
                    nr: [0, 1],
                    fc: 13
                }, {
                    lngs: ["kw"],
                    nr: [1, 2, 3, 4],
                    fc: 14
                }, {
                    lngs: ["lt"],
                    nr: [1, 2, 10],
                    fc: 15
                }, {
                    lngs: ["lv"],
                    nr: [1, 2, 0],
                    fc: 16
                }, {
                    lngs: ["mk"],
                    nr: [1, 2],
                    fc: 17
                }, {
                    lngs: ["mnk"],
                    nr: [0, 1, 2],
                    fc: 18
                }, {
                    lngs: ["mt"],
                    nr: [1, 2, 11, 20],
                    fc: 19
                }, {
                    lngs: ["or"],
                    nr: [2, 1],
                    fc: 2
                }, {
                    lngs: ["ro"],
                    nr: [1, 2, 20],
                    fc: 20
                }, {
                    lngs: ["sl"],
                    nr: [5, 1, 2, 3],
                    fc: 21
                }, {
                    lngs: ["he", "iw"],
                    nr: [1, 2, 20, 21],
                    fc: 22
                }],
                R = {
                    1: function(e) {
                        return Number(e > 1)
                    },
                    2: function(e) {
                        return Number(1 != e)
                    },
                    3: function(e) {
                        return 0
                    },
                    4: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    5: function(e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2 == e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5)
                    },
                    6: function(e) {
                        return Number(1 == e ? 0 : e >= 2 && e <= 4 ? 1 : 2)
                    },
                    7: function(e) {
                        return Number(1 == e ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    8: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 8 != e && 11 != e ? 2 : 3)
                    },
                    9: function(e) {
                        return Number(e >= 2)
                    },
                    10: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4)
                    },
                    11: function(e) {
                        return Number(1 == e || 11 == e ? 0 : 2 == e || 12 == e ? 1 : e > 2 && e < 20 ? 2 : 3)
                    },
                    12: function(e) {
                        return Number(e % 10 != 1 || e % 100 == 11)
                    },
                    13: function(e) {
                        return Number(0 !== e)
                    },
                    14: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : 3 == e ? 2 : 3)
                    },
                    15: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2)
                    },
                    16: function(e) {
                        return Number(e % 10 == 1 && e % 100 != 11 ? 0 : 0 !== e ? 1 : 2)
                    },
                    17: function(e) {
                        return Number(1 == e || e % 10 == 1 && e % 100 != 11 ? 0 : 1)
                    },
                    18: function(e) {
                        return Number(0 == e ? 0 : 1 == e ? 1 : 2)
                    },
                    19: function(e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 1 && e % 100 < 11 ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3)
                    },
                    20: function(e) {
                        return Number(1 == e ? 0 : 0 == e || e % 100 > 0 && e % 100 < 20 ? 1 : 2)
                    },
                    21: function(e) {
                        return Number(e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0)
                    },
                    22: function(e) {
                        return Number(1 == e ? 0 : 2 == e ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3)
                    }
                };

            function D() {
                var e = {};
                return N.forEach((function(n) {
                    n.lngs.forEach((function(t) {
                        e[t] = {
                            numbers: n.nr,
                            plurals: R[n.fc]
                        }
                    }))
                })), e
            }
            var F = function() {
                    function e(n) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        (0, a.A)(this, e), this.languageUtils = n, this.options = t, this.logger = g.create("pluralResolver"), this.rules = D()
                    }
                    return (0, s.A)(e, [{
                        key: "addRule",
                        value: function(e, n) {
                            this.rules[e] = n
                        }
                    }, {
                        key: "getRule",
                        value: function(e) {
                            return this.rules[e] || this.rules[this.languageUtils.getLanguagePartFromCode(e)]
                        }
                    }, {
                        key: "needsPlural",
                        value: function(e) {
                            var n = this.getRule(e);
                            return n && n.numbers.length > 1
                        }
                    }, {
                        key: "getPluralFormsOfKey",
                        value: function(e, n) {
                            var t = this,
                                r = [],
                                o = this.getRule(e);
                            return o ? (o.numbers.forEach((function(o) {
                                var i = t.getSuffix(e, o);
                                r.push("".concat(n).concat(i))
                            })), r) : r
                        }
                    }, {
                        key: "getSuffix",
                        value: function(e, n) {
                            var t = this,
                                r = this.getRule(e);
                            if (r) {
                                var o = r.noAbs ? r.plurals(n) : r.plurals(Math.abs(n)),
                                    i = r.numbers[o];
                                this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] && (2 === i ? i = "plural" : 1 === i && (i = ""));
                                var a = function() {
                                    return t.options.prepend && i.toString() ? t.options.prepend + i.toString() : i.toString()
                                };
                                return "v1" === this.options.compatibilityJSON ? 1 === i ? "" : "number" === typeof i ? "_plural_".concat(i.toString()) : a() : "v2" === this.options.compatibilityJSON || this.options.simplifyPluralSuffix && 2 === r.numbers.length && 1 === r.numbers[0] ? a() : this.options.prepend && o.toString() ? this.options.prepend + o.toString() : o.toString()
                            }
                            return this.logger.warn("no plural rule found for: ".concat(e)), ""
                        }
                    }]), e
                }(),
                B = function() {
                    function e() {
                        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        (0, a.A)(this, e), this.logger = g.create("interpolator"), this.options = n, this.format = n.interpolation && n.interpolation.format || function(e) {
                            return e
                        }, this.init(n)
                    }
                    return (0, s.A)(e, [{
                        key: "init",
                        value: function() {
                            var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            e.interpolation || (e.interpolation = {
                                escapeValue: !0
                            });
                            var n = e.interpolation;
                            this.escape = void 0 !== n.escape ? n.escape : w, this.escapeValue = void 0 === n.escapeValue || n.escapeValue, this.useRawValueToEscape = void 0 !== n.useRawValueToEscape && n.useRawValueToEscape, this.prefix = n.prefix ? C(n.prefix) : n.prefixEscaped || "{{", this.suffix = n.suffix ? C(n.suffix) : n.suffixEscaped || "}}", this.formatSeparator = n.formatSeparator ? n.formatSeparator : n.formatSeparator || ",", this.unescapePrefix = n.unescapeSuffix ? "" : n.unescapePrefix || "-", this.unescapeSuffix = this.unescapePrefix ? "" : n.unescapeSuffix || "", this.nestingPrefix = n.nestingPrefix ? C(n.nestingPrefix) : n.nestingPrefixEscaped || C("$t("), this.nestingSuffix = n.nestingSuffix ? C(n.nestingSuffix) : n.nestingSuffixEscaped || C(")"), this.nestingOptionsSeparator = n.nestingOptionsSeparator ? n.nestingOptionsSeparator : n.nestingOptionsSeparator || ",", this.maxReplaces = n.maxReplaces ? n.maxReplaces : 1e3, this.alwaysFormat = void 0 !== n.alwaysFormat && n.alwaysFormat, this.resetRegExp()
                        }
                    }, {
                        key: "reset",
                        value: function() {
                            this.options && this.init(this.options)
                        }
                    }, {
                        key: "resetRegExp",
                        value: function() {
                            var e = "".concat(this.prefix, "(.+?)").concat(this.suffix);
                            this.regexp = new RegExp(e, "g");
                            var n = "".concat(this.prefix).concat(this.unescapePrefix, "(.+?)").concat(this.unescapeSuffix).concat(this.suffix);
                            this.regexpUnescape = new RegExp(n, "g");
                            var t = "".concat(this.nestingPrefix, "(.+?)").concat(this.nestingSuffix);
                            this.nestingRegexp = new RegExp(t, "g")
                        }
                    }, {
                        key: "interpolate",
                        value: function(e, n, t, r) {
                            var o, i, a, s = this,
                                u = this.options && this.options.interpolation && this.options.interpolation.defaultVariables || {};

                            function c(e) {
                                return e.replace(/\$/g, "$$$$")
                            }
                            var l = function(e) {
                                if (e.indexOf(s.formatSeparator) < 0) {
                                    var o = M(n, u, e);
                                    return s.alwaysFormat ? s.format(o, void 0, t) : o
                                }
                                var i = e.split(s.formatSeparator),
                                    a = i.shift().trim(),
                                    c = i.join(s.formatSeparator).trim();
                                return s.format(M(n, u, a), c, t, r)
                            };
                            this.resetRegExp();
                            var d = r && r.missingInterpolationHandler || this.options.missingInterpolationHandler,
                                p = r && r.interpolation && r.interpolation.skipOnVariables || this.options.interpolation.skipOnVariables;
                            return [{
                                regex: this.regexpUnescape,
                                safeValue: function(e) {
                                    return c(e)
                                }
                            }, {
                                regex: this.regexp,
                                safeValue: function(e) {
                                    return s.escapeValue ? c(s.escape(e)) : c(e)
                                }
                            }].forEach((function(n) {
                                for (a = 0; o = n.regex.exec(e);) {
                                    if (void 0 === (i = l(o[1].trim())))
                                        if ("function" === typeof d) {
                                            var t = d(e, o, r);
                                            i = "string" === typeof t ? t : ""
                                        } else {
                                            if (p) {
                                                i = o[0];
                                                continue
                                            }
                                            s.logger.warn("missed to pass in variable ".concat(o[1], " for interpolating ").concat(e)), i = ""
                                        }
                                    else "string" === typeof i || s.useRawValueToEscape || (i = m(i));
                                    if (e = e.replace(o[0], n.safeValue(i)), n.regex.lastIndex = 0, ++a >= s.maxReplaces) break
                                }
                            })), e
                        }
                    }, {
                        key: "nest",
                        value: function(e, n) {
                            var t, r, o = this,
                                a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                s = i({}, a);

                            function u(e, n) {
                                var t = this.nestingOptionsSeparator;
                                if (e.indexOf(t) < 0) return e;
                                var r = e.split(new RegExp("".concat(t, "[ ]*{"))),
                                    o = "{".concat(r[1]);
                                e = r[0], o = (o = this.interpolate(o, s)).replace(/'/g, '"');
                                try {
                                    s = JSON.parse(o), n && (s = i({}, n, s))
                                } catch (a) {
                                    return this.logger.warn("failed parsing options string in nesting for key ".concat(e), a), "".concat(e).concat(t).concat(o)
                                }
                                return delete s.defaultValue, e
                            }
                            for (s.applyPostProcessor = !1, delete s.defaultValue; t = this.nestingRegexp.exec(e);) {
                                var c = [],
                                    l = !1;
                                if (t[0].includes(this.formatSeparator) && !/{.*}/.test(t[1])) {
                                    var d = t[1].split(this.formatSeparator).map((function(e) {
                                        return e.trim()
                                    }));
                                    t[1] = d.shift(), c = d, l = !0
                                }
                                if ((r = n(u.call(this, t[1].trim(), s), s)) && t[0] === e && "string" !== typeof r) return r;
                                "string" !== typeof r && (r = m(r)), r || (this.logger.warn("missed to resolve ".concat(t[1], " for nesting ").concat(e)), r = ""), l && (r = c.reduce((function(e, n) {
                                    return o.format(e, n, a.lng, a)
                                }), r.trim())), e = e.replace(t[0], r), this.regexp.lastIndex = 0
                            }
                            return e
                        }
                    }]), e
                }();
            var G = function(e) {
                function n(e, t, r) {
                    var o, i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    return (0, a.A)(this, n), o = c(this, l(n).call(this)), E && h.call(u(o)), o.backend = e, o.store = t, o.services = r, o.languageUtils = r.languageUtils, o.options = i, o.logger = g.create("backendConnector"), o.state = {}, o.queue = [], o.backend && o.backend.init && o.backend.init(r, i.backend, i), o
                }
                return p(n, e), (0, s.A)(n, [{
                    key: "queueLoad",
                    value: function(e, n, t, r) {
                        var o = this,
                            i = [],
                            a = [],
                            s = [],
                            u = [];
                        return e.forEach((function(e) {
                            var r = !0;
                            n.forEach((function(n) {
                                var s = "".concat(e, "|").concat(n);
                                !t.reload && o.store.hasResourceBundle(e, n) ? o.state[s] = 2 : o.state[s] < 0 || (1 === o.state[s] ? a.indexOf(s) < 0 && a.push(s) : (o.state[s] = 1, r = !1, a.indexOf(s) < 0 && a.push(s), i.indexOf(s) < 0 && i.push(s), u.indexOf(n) < 0 && u.push(n)))
                            })), r || s.push(e)
                        })), (i.length || a.length) && this.queue.push({
                            pending: a,
                            loaded: {},
                            errors: [],
                            callback: r
                        }), {
                            toLoad: i,
                            pending: a,
                            toLoadLanguages: s,
                            toLoadNamespaces: u
                        }
                    }
                }, {
                    key: "loaded",
                    value: function(e, n, t) {
                        var r = e.split("|"),
                            o = r[0],
                            i = r[1];
                        n && this.emit("failedLoading", o, i, n), t && this.store.addResourceBundle(o, i, t), this.state[e] = n ? -1 : 2;
                        var a = {};
                        this.queue.forEach((function(t) {
                            ! function(e, n, t, r) {
                                var o = b(e, n, Object),
                                    i = o.obj,
                                    a = o.k;
                                i[a] = i[a] || [], r && (i[a] = i[a].concat(t)), r || i[a].push(t)
                            }(t.loaded, [o], i),
                            function(e, n) {
                                for (var t = e.indexOf(n); - 1 !== t;) e.splice(t, 1), t = e.indexOf(n)
                            }(t.pending, e), n && t.errors.push(n), 0 !== t.pending.length || t.done || (Object.keys(t.loaded).forEach((function(e) {
                                a[e] || (a[e] = []), t.loaded[e].length && t.loaded[e].forEach((function(n) {
                                    a[e].indexOf(n) < 0 && a[e].push(n)
                                }))
                            })), t.done = !0, t.errors.length ? t.callback(t.errors) : t.callback())
                        })), this.emit("loaded", a), this.queue = this.queue.filter((function(e) {
                            return !e.done
                        }))
                    }
                }, {
                    key: "read",
                    value: function(e, n, t) {
                        var r = this,
                            o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                            i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : 350,
                            a = arguments.length > 5 ? arguments[5] : void 0;
                        return e.length ? this.backend[t](e, n, (function(s, u) {
                            s && u && o < 5 ? setTimeout((function() {
                                r.read.call(r, e, n, t, o + 1, 2 * i, a)
                            }), i) : a(s, u)
                        })) : a(null, {})
                    }
                }, {
                    key: "prepareLoading",
                    value: function(e, n) {
                        var t = this,
                            r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                            o = arguments.length > 3 ? arguments[3] : void 0;
                        if (!this.backend) return this.logger.warn("No backend was added via i18next.use. Will not load resources."), o && o();
                        "string" === typeof e && (e = this.languageUtils.toResolveHierarchy(e)), "string" === typeof n && (n = [n]);
                        var i = this.queueLoad(e, n, r, o);
                        if (!i.toLoad.length) return i.pending.length || o(), null;
                        i.toLoad.forEach((function(e) {
                            t.loadOne(e)
                        }))
                    }
                }, {
                    key: "load",
                    value: function(e, n, t) {
                        this.prepareLoading(e, n, {}, t)
                    }
                }, {
                    key: "reload",
                    value: function(e, n, t) {
                        this.prepareLoading(e, n, {
                            reload: !0
                        }, t)
                    }
                }, {
                    key: "loadOne",
                    value: function(e) {
                        var n = this,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                            r = e.split("|"),
                            o = r[0],
                            i = r[1];
                        this.read(o, i, "read", void 0, void 0, (function(r, a) {
                            r && n.logger.warn("".concat(t, "loading namespace ").concat(i, " for language ").concat(o, " failed"), r), !r && a && n.logger.log("".concat(t, "loaded namespace ").concat(i, " for language ").concat(o), a), n.loaded(e, r, a)
                        }))
                    }
                }, {
                    key: "saveMissing",
                    value: function(e, n, t, r, o) {
                        var a = arguments.length > 5 && void 0 !== arguments[5] ? arguments[5] : {};
                        this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n) ? this.logger.warn('did not save key "'.concat(t, '" as the namespace "').concat(n, '" was not yet loaded'), "This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!") : void 0 !== t && null !== t && "" !== t && (this.backend && this.backend.create && this.backend.create(e, n, t, r, null, i({}, a, {
                            isUpdate: o
                        })), e && e[0] && this.store.addResource(e[0], n, t, r))
                    }
                }]), n
            }(h);

            function j() {
                return {
                    debug: !1,
                    initImmediate: !0,
                    ns: ["translation"],
                    defaultNS: ["translation"],
                    fallbackLng: ["dev"],
                    fallbackNS: !1,
                    whitelist: !1,
                    nonExplicitWhitelist: !1,
                    supportedLngs: !1,
                    nonExplicitSupportedLngs: !1,
                    load: "all",
                    preload: !1,
                    simplifyPluralSuffix: !0,
                    keySeparator: ".",
                    nsSeparator: ":",
                    pluralSeparator: "_",
                    contextSeparator: "_",
                    partialBundledLanguages: !1,
                    saveMissing: !1,
                    updateMissing: !1,
                    saveMissingTo: "fallback",
                    saveMissingPlurals: !0,
                    missingKeyHandler: !1,
                    missingInterpolationHandler: !1,
                    postProcess: !1,
                    postProcessPassResolved: !1,
                    returnNull: !0,
                    returnEmptyString: !0,
                    returnObjects: !1,
                    joinArrays: !1,
                    returnedObjectHandler: !1,
                    parseMissingKeyHandler: !1,
                    appendNamespaceToMissingKey: !1,
                    appendNamespaceToCIMode: !1,
                    overloadTranslationOptionHandler: function(e) {
                        var n = {};
                        if ("object" === (0, r.A)(e[1]) && (n = e[1]), "string" === typeof e[1] && (n.defaultValue = e[1]), "string" === typeof e[2] && (n.tDescription = e[2]), "object" === (0, r.A)(e[2]) || "object" === (0, r.A)(e[3])) {
                            var t = e[3] || e[2];
                            Object.keys(t).forEach((function(e) {
                                n[e] = t[e]
                            }))
                        }
                        return n
                    },
                    interpolation: {
                        escapeValue: !0,
                        format: function(e, n, t, r) {
                            return e
                        },
                        prefix: "{{",
                        suffix: "}}",
                        formatSeparator: ",",
                        unescapePrefix: "-",
                        nestingPrefix: "$t(",
                        nestingSuffix: ")",
                        nestingOptionsSeparator: ",",
                        maxReplaces: 1e3,
                        skipOnVariables: !1
                    }
                }
            }

            function H(e) {
                return "string" === typeof e.ns && (e.ns = [e.ns]), "string" === typeof e.fallbackLng && (e.fallbackLng = [e.fallbackLng]), "string" === typeof e.fallbackNS && (e.fallbackNS = [e.fallbackNS]), e.whitelist && (e.whitelist && e.whitelist.indexOf("cimode") < 0 && (e.whitelist = e.whitelist.concat(["cimode"])), e.supportedLngs = e.whitelist), e.nonExplicitWhitelist && (e.nonExplicitSupportedLngs = e.nonExplicitWhitelist), e.supportedLngs && e.supportedLngs.indexOf("cimode") < 0 && (e.supportedLngs = e.supportedLngs.concat(["cimode"])), e
            }

            function U() {}
            const q = new(function(e) {
                function n() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        r = arguments.length > 1 ? arguments[1] : void 0;
                    if ((0, a.A)(this, n), e = c(this, l(n).call(this)), E && h.call(u(e)), e.options = H(t), e.services = {}, e.logger = g, e.modules = {
                            external: []
                        }, r && !e.isInitialized && !t.isClone) {
                        if (!e.options.initImmediate) return e.init(t, r), c(e, u(e));
                        setTimeout((function() {
                            e.init(t, r)
                        }), 0)
                    }
                    return e
                }
                return p(n, e), (0, s.A)(n, [{
                    key: "init",
                    value: function() {
                        var e = this,
                            n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;

                        function r(e) {
                            return e ? "function" === typeof e ? new e : e : null
                        }
                        if ("function" === typeof n && (t = n, n = {}), n.whitelist && !n.supportedLngs && this.logger.deprecate("whitelist", 'option "whitelist" will be renamed to "supportedLngs" in the next major - please make sure to rename this option asap.'), n.nonExplicitWhitelist && !n.nonExplicitSupportedLngs && this.logger.deprecate("whitelist", 'options "nonExplicitWhitelist" will be renamed to "nonExplicitSupportedLngs" in the next major - please make sure to rename this option asap.'), this.options = i({}, j(), this.options, H(n)), this.format = this.options.interpolation.format, t || (t = U), !this.options.isClone) {
                            this.modules.logger ? g.init(r(this.modules.logger), this.options) : g.init(null, this.options);
                            var o = new L(this.options);
                            this.store = new _(this.options.resources, this.options);
                            var a = this.services;
                            a.logger = g, a.resourceStore = this.store, a.languageUtils = o, a.pluralResolver = new F(o, {
                                prepend: this.options.pluralSeparator,
                                compatibilityJSON: this.options.compatibilityJSON,
                                simplifyPluralSuffix: this.options.simplifyPluralSuffix
                            }), a.interpolator = new B(this.options), a.utils = {
                                hasLoadedNamespace: this.hasLoadedNamespace.bind(this)
                            }, a.backendConnector = new G(r(this.modules.backend), a.resourceStore, a, this.options), a.backendConnector.on("*", (function(n) {
                                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                                e.emit.apply(e, [n].concat(r))
                            })), this.modules.languageDetector && (a.languageDetector = r(this.modules.languageDetector), a.languageDetector.init(a, this.options.detection, this.options)), this.modules.i18nFormat && (a.i18nFormat = r(this.modules.i18nFormat), a.i18nFormat.init && a.i18nFormat.init(this)), this.translator = new O(this.services, this.options), this.translator.on("*", (function(n) {
                                for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), o = 1; o < t; o++) r[o - 1] = arguments[o];
                                e.emit.apply(e, [n].concat(r))
                            })), this.modules.external.forEach((function(n) {
                                n.init && n.init(e)
                            }))
                        }
                        if (this.options.fallbackLng && !this.services.languageDetector && !this.options.lng) {
                            var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                            s.length > 0 && "dev" !== s[0] && (this.options.lng = s[0])
                        }
                        this.services.languageDetector || this.options.lng || this.logger.warn("init: no languageDetector is used and no lng is defined");
                        var u = ["getResource", "hasResourceBundle", "getResourceBundle", "getDataByLanguage"];
                        u.forEach((function(n) {
                            e[n] = function() {
                                var t;
                                return (t = e.store)[n].apply(t, arguments)
                            }
                        }));
                        var c = ["addResource", "addResources", "addResourceBundle", "removeResourceBundle"];
                        c.forEach((function(n) {
                            e[n] = function() {
                                var t;
                                return (t = e.store)[n].apply(t, arguments), e
                            }
                        }));
                        var l = v(),
                            d = function() {
                                e.changeLanguage(e.options.lng, (function(n, r) {
                                    e.isInitialized = !0, e.options.isClone || e.logger.log("initialized", e.options), e.emit("initialized", e.options), l.resolve(r), t(n, r)
                                }))
                            };
                        return this.options.resources || !this.options.initImmediate ? d() : setTimeout(d, 0), l
                    }
                }, {
                    key: "loadResources",
                    value: function(e) {
                        var n = this,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                            r = t,
                            o = "string" === typeof e ? e : this.language;
                        if ("function" === typeof e && (r = e), !this.options.resources || this.options.partialBundledLanguages) {
                            if (o && "cimode" === o.toLowerCase()) return r();
                            var i = [],
                                a = function(e) {
                                    e && n.services.languageUtils.toResolveHierarchy(e).forEach((function(e) {
                                        i.indexOf(e) < 0 && i.push(e)
                                    }))
                                };
                            if (o) a(o);
                            else {
                                var s = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
                                s.forEach((function(e) {
                                    return a(e)
                                }))
                            }
                            this.options.preload && this.options.preload.forEach((function(e) {
                                return a(e)
                            })), this.services.backendConnector.load(i, this.options.ns, r)
                        } else r(null)
                    }
                }, {
                    key: "reloadResources",
                    value: function(e, n, t) {
                        var r = v();
                        return e || (e = this.languages), n || (n = this.options.ns), t || (t = U), this.services.backendConnector.reload(e, n, (function(e) {
                            r.resolve(), t(e)
                        })), r
                    }
                }, {
                    key: "use",
                    value: function(e) {
                        if (!e) throw new Error("You are passing an undefined module! Please check the object you are passing to i18next.use()");
                        if (!e.type) throw new Error("You are passing a wrong module! Please check the object you are passing to i18next.use()");
                        return "backend" === e.type && (this.modules.backend = e), ("logger" === e.type || e.log && e.warn && e.error) && (this.modules.logger = e), "languageDetector" === e.type && (this.modules.languageDetector = e), "i18nFormat" === e.type && (this.modules.i18nFormat = e), "postProcessor" === e.type && S.addPostProcessor(e), "3rdParty" === e.type && this.modules.external.push(e), this
                    }
                }, {
                    key: "changeLanguage",
                    value: function(e, n) {
                        var t = this;
                        this.isLanguageChangingTo = e;
                        var r = v();
                        this.emit("languageChanging", e);
                        var o = function(e) {
                            var o = "string" === typeof e ? e : t.services.languageUtils.getBestMatchFromCodes(e);
                            o && (t.language || (t.language = o, t.languages = t.services.languageUtils.toResolveHierarchy(o)), t.translator.language || t.translator.changeLanguage(o), t.services.languageDetector && t.services.languageDetector.cacheUserLanguage(o)), t.loadResources(o, (function(e) {
                                ! function(e, o) {
                                    o ? (t.language = o, t.languages = t.services.languageUtils.toResolveHierarchy(o), t.translator.changeLanguage(o), t.isLanguageChangingTo = void 0, t.emit("languageChanged", o), t.logger.log("languageChanged", o)) : t.isLanguageChangingTo = void 0, r.resolve((function() {
                                        return t.t.apply(t, arguments)
                                    })), n && n(e, (function() {
                                        return t.t.apply(t, arguments)
                                    }))
                                }(e, o)
                            }))
                        };
                        return e || !this.services.languageDetector || this.services.languageDetector.async ? !e && this.services.languageDetector && this.services.languageDetector.async ? this.services.languageDetector.detect(o) : o(e) : o(this.services.languageDetector.detect()), r
                    }
                }, {
                    key: "getFixedT",
                    value: function(e, n) {
                        var t = this,
                            o = function e(n, o) {
                                var a;
                                if ("object" !== (0, r.A)(o)) {
                                    for (var s = arguments.length, u = new Array(s > 2 ? s - 2 : 0), c = 2; c < s; c++) u[c - 2] = arguments[c];
                                    a = t.options.overloadTranslationOptionHandler([n, o].concat(u))
                                } else a = i({}, o);
                                return a.lng = a.lng || e.lng, a.lngs = a.lngs || e.lngs, a.ns = a.ns || e.ns, t.t(n, a)
                            };
                        return "string" === typeof e ? o.lng = e : o.lngs = e, o.ns = n, o
                    }
                }, {
                    key: "t",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).translate.apply(e, arguments)
                    }
                }, {
                    key: "exists",
                    value: function() {
                        var e;
                        return this.translator && (e = this.translator).exists.apply(e, arguments)
                    }
                }, {
                    key: "setDefaultNamespace",
                    value: function(e) {
                        this.options.defaultNS = e
                    }
                }, {
                    key: "hasLoadedNamespace",
                    value: function(e) {
                        var n = this,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        if (!this.isInitialized) return this.logger.warn("hasLoadedNamespace: i18next was not initialized", this.languages), !1;
                        if (!this.languages || !this.languages.length) return this.logger.warn("hasLoadedNamespace: i18n.languages were undefined or empty", this.languages), !1;
                        var r = this.languages[0],
                            o = !!this.options && this.options.fallbackLng,
                            i = this.languages[this.languages.length - 1];
                        if ("cimode" === r.toLowerCase()) return !0;
                        var a = function(e, t) {
                            var r = n.services.backendConnector.state["".concat(e, "|").concat(t)];
                            return -1 === r || 2 === r
                        };
                        if (t.precheck) {
                            var s = t.precheck(this, a);
                            if (void 0 !== s) return s
                        }
                        return !!this.hasResourceBundle(r, e) || (!this.services.backendConnector.backend || !(!a(r, e) || o && !a(i, e)))
                    }
                }, {
                    key: "loadNamespaces",
                    value: function(e, n) {
                        var t = this,
                            r = v();
                        return this.options.ns ? ("string" === typeof e && (e = [e]), e.forEach((function(e) {
                            t.options.ns.indexOf(e) < 0 && t.options.ns.push(e)
                        })), this.loadResources((function(e) {
                            r.resolve(), n && n(e)
                        })), r) : (n && n(), Promise.resolve())
                    }
                }, {
                    key: "loadLanguages",
                    value: function(e, n) {
                        var t = v();
                        "string" === typeof e && (e = [e]);
                        var r = this.options.preload || [],
                            o = e.filter((function(e) {
                                return r.indexOf(e) < 0
                            }));
                        return o.length ? (this.options.preload = r.concat(o), this.loadResources((function(e) {
                            t.resolve(), n && n(e)
                        })), t) : (n && n(), Promise.resolve())
                    }
                }, {
                    key: "dir",
                    value: function(e) {
                        if (e || (e = this.languages && this.languages.length > 0 ? this.languages[0] : this.language), !e) return "rtl";
                        return ["ar", "shu", "sqr", "ssh", "xaa", "yhd", "yud", "aao", "abh", "abv", "acm", "acq", "acw", "acx", "acy", "adf", "ads", "aeb", "aec", "afb", "ajp", "apc", "apd", "arb", "arq", "ars", "ary", "arz", "auz", "avl", "ayh", "ayl", "ayn", "ayp", "bbz", "pga", "he", "iw", "ps", "pbt", "pbu", "pst", "prp", "prd", "ug", "ur", "ydd", "yds", "yih", "ji", "yi", "hbo", "men", "xmn", "fa", "jpr", "peo", "pes", "prs", "dv", "sam"].indexOf(this.services.languageUtils.getLanguagePartFromCode(e)) >= 0 ? "rtl" : "ltr"
                    }
                }, {
                    key: "createInstance",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            t = arguments.length > 1 ? arguments[1] : void 0;
                        return new n(e, t)
                    }
                }, {
                    key: "cloneInstance",
                    value: function() {
                        var e = this,
                            t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : U,
                            o = i({}, this.options, t, {
                                isClone: !0
                            }),
                            a = new n(o),
                            s = ["store", "services", "language"];
                        return s.forEach((function(n) {
                            a[n] = e[n]
                        })), a.services = i({}, this.services), a.services.utils = {
                            hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                        }, a.translator = new O(a.services, a.options), a.translator.on("*", (function(e) {
                            for (var n = arguments.length, t = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) t[r - 1] = arguments[r];
                            a.emit.apply(a, [e].concat(t))
                        })), a.init(o, r), a.translator.options = a.options, a.translator.backendConnector.services.utils = {
                            hasLoadedNamespace: a.hasLoadedNamespace.bind(a)
                        }, a
                    }
                }]), n
            }(h))
        },
        "6w+j": (e, n, t) => {
            var r = "__lodash_hash_undefined__",
                o = "[object Function]",
                i = "[object GeneratorFunction]",
                a = /^\[object .+?Constructor\]$/,
                s = "object" == typeof t.g && t.g && t.g.Object === Object && t.g,
                u = "object" == typeof self && self && self.Object === Object && self,
                c = s || u || Function("return this")();
            var l = Array.prototype,
                d = Function.prototype,
                p = Object.prototype,
                f = c["__core-js_shared__"],
                g = function() {
                    var e = /[^.]+$/.exec(f && f.keys && f.keys.IE_PROTO || "");
                    return e ? "Symbol(src)_1." + e : ""
                }(),
                h = d.toString,
                v = p.hasOwnProperty,
                m = p.toString,
                y = RegExp("^" + h.call(v).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                b = l.splice,
                A = _(c, "Map"),
                I = _(Object, "create");

            function M(e) {
                var n = -1,
                    t = e ? e.length : 0;
                for (this.clear(); ++n < t;) {
                    var r = e[n];
                    this.set(r[0], r[1])
                }
            }

            function x(e) {
                var n = -1,
                    t = e ? e.length : 0;
                for (this.clear(); ++n < t;) {
                    var r = e[n];
                    this.set(r[0], r[1])
                }
            }

            function C(e) {
                var n = -1,
                    t = e ? e.length : 0;
                for (this.clear(); ++n < t;) {
                    var r = e[n];
                    this.set(r[0], r[1])
                }
            }

            function k(e, n) {
                for (var t, r, o = e.length; o--;)
                    if ((t = e[o][0]) === (r = n) || t !== t && r !== r) return o;
                return -1
            }

            function w(e) {
                if (!T(e) || (n = e, g && g in n)) return !1;
                var n, t = function(e) {
                    var n = T(e) ? m.call(e) : "";
                    return n == o || n == i
                }(e) || function(e) {
                    var n = !1;
                    if (null != e && "function" != typeof e.toString) try {
                        n = !!(e + "")
                    } catch (t) {}
                    return n
                }(e) ? y : a;
                return t.test(function(e) {
                    if (null != e) {
                        try {
                            return h.call(e)
                        } catch (n) {}
                        try {
                            return e + ""
                        } catch (n) {}
                    }
                    return ""
                }(e))
            }

            function E(e, n) {
                var t = e.__data__;
                return function(e) {
                    var n = typeof e;
                    return "string" == n || "number" == n || "symbol" == n || "boolean" == n ? "__proto__" !== e : null === e
                }(n) ? t["string" == typeof n ? "string" : "hash"] : t.map
            }

            function _(e, n) {
                var t = function(e, n) {
                    return null == e ? void 0 : e[n]
                }(e, n);
                return w(t) ? t : void 0
            }

            function S(e, n) {
                if ("function" != typeof e || n && "function" != typeof n) throw new TypeError("Expected a function");
                var t = function() {
                    var r = arguments,
                        o = n ? n.apply(this, r) : r[0],
                        i = t.cache;
                    if (i.has(o)) return i.get(o);
                    var a = e.apply(this, r);
                    return t.cache = i.set(o, a), a
                };
                return t.cache = new(S.Cache || C), t
            }

            function T(e) {
                var n = typeof e;
                return !!e && ("object" == n || "function" == n)
            }
            M.prototype.clear = function() {
                this.__data__ = I ? I(null) : {}
            }, M.prototype.delete = function(e) {
                return this.has(e) && delete this.__data__[e]
            }, M.prototype.get = function(e) {
                var n = this.__data__;
                if (I) {
                    var t = n[e];
                    return t === r ? void 0 : t
                }
                return v.call(n, e) ? n[e] : void 0
            }, M.prototype.has = function(e) {
                var n = this.__data__;
                return I ? void 0 !== n[e] : v.call(n, e)
            }, M.prototype.set = function(e, n) {
                return this.__data__[e] = I && void 0 === n ? r : n, this
            }, x.prototype.clear = function() {
                this.__data__ = []
            }, x.prototype.delete = function(e) {
                var n = this.__data__,
                    t = k(n, e);
                return !(t < 0) && (t == n.length - 1 ? n.pop() : b.call(n, t, 1), !0)
            }, x.prototype.get = function(e) {
                var n = this.__data__,
                    t = k(n, e);
                return t < 0 ? void 0 : n[t][1]
            }, x.prototype.has = function(e) {
                return k(this.__data__, e) > -1
            }, x.prototype.set = function(e, n) {
                var t = this.__data__,
                    r = k(t, e);
                return r < 0 ? t.push([e, n]) : t[r][1] = n, this
            }, C.prototype.clear = function() {
                this.__data__ = {
                    hash: new M,
                    map: new(A || x),
                    string: new M
                }
            }, C.prototype.delete = function(e) {
                return E(this, e).delete(e)
            }, C.prototype.get = function(e) {
                return E(this, e).get(e)
            }, C.prototype.has = function(e) {
                return E(this, e).has(e)
            }, C.prototype.set = function(e, n) {
                return E(this, e).set(e, n), this
            }, S.Cache = C, e.exports = S
        },
        maj8: e => {
            "use strict";
            var n = Object.getOwnPropertySymbols,
                t = Object.prototype.hasOwnProperty,
                r = Object.prototype.propertyIsEnumerable;

            function o(e) {
                if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                return Object(e)
            }
            e.exports = function() {
                try {
                    if (!Object.assign) return !1;
                    var e = new String("abc");
                    if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                    for (var n = {}, t = 0; t < 10; t++) n["_" + String.fromCharCode(t)] = t;
                    if ("0123456789" !== Object.getOwnPropertyNames(n).map((function(e) {
                            return n[e]
                        })).join("")) return !1;
                    var r = {};
                    return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                        r[e] = e
                    })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("")
                } catch (o) {
                    return !1
                }
            }() ? Object.assign : function(e, i) {
                for (var a, s, u = o(e), c = 1; c < arguments.length; c++) {
                    for (var l in a = Object(arguments[c])) t.call(a, l) && (u[l] = a[l]);
                    if (n) {
                        s = n(a);
                        for (var d = 0; d < s.length; d++) r.call(a, s[d]) && (u[s[d]] = a[s[d]])
                    }
                }
                return u
            }
        },
        emlf: (e, n, t) => {
            "use strict";
            var r = t("YjNL");

            function o() {}

            function i() {}
            i.resetWarningCache = o, e.exports = function() {
                function e(e, n, t, o, i, a) {
                    if (a !== r) {
                        var s = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw s.name = "Invariant Violation", s
                    }
                }

                function n() {
                    return e
                }
                e.isRequired = e;
                var t = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: n,
                    element: e,
                    elementType: e,
                    instanceOf: n,
                    node: e,
                    objectOf: n,
                    oneOf: n,
                    oneOfType: n,
                    shape: n,
                    exact: n,
                    checkPropTypes: i,
                    resetWarningCache: o
                };
                return t.PropTypes = t, t
            }
        },
        aWzz: (e, n, t) => {
            e.exports = t("emlf")()
        },
        YjNL: e => {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        Osl1: (e, n, t) => {
            "use strict";
            var r = t("maj8"),
                o = {}.hasOwnProperty;

            function i(e, n, t, r, o, i, a, s) {
                if (!e) {
                    var u;
                    if (void 0 === n) u = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                    else {
                        var c = [t, r, o, i, a, s],
                            l = 0;
                        (u = new Error(n.replace(/%s/g, (function() {
                            return c[l++]
                        })))).name = "Invariant Violation"
                    }
                    throw u.framesToPop = 1, u
                }
            }
            var a = "$push",
                s = "$unshift",
                u = "$splice",
                c = "$set",
                l = "$merge",
                d = "$apply",
                p = [a, s, u, c, l, d],
                f = {};

            function g(e, n, t) {
                i(Array.isArray(e), "update(): expected target of %s to be an array; got %s.", t, e);
                var r = n[t];
                i(Array.isArray(r), "update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?", t, r)
            }
            p.forEach((function(e) {
                f[e] = !0
            })), e.exports = function e(n, t) {
                if (i("object" === typeof t, "update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?", p.join(", "), c), o.call(t, c)) return i(1 === Object.keys(t).length, "Cannot have more than one key in an object with %s", c), t.$set;
                var h, v = (h = n, Array.isArray(h) ? h.concat() : h && "object" === typeof h ? r(new h.constructor, h) : h);
                if (o.call(t, l)) {
                    var m = t.$merge;
                    i(m && "object" === typeof m, "update(): %s expects a spec of type 'object'; got %s", l, m), i(v && "object" === typeof v, "update(): %s expects a target of type 'object'; got %s", l, v), r(v, t.$merge)
                }
                for (var y in o.call(t, a) && (g(n, t, a), t.$push.forEach((function(e) {
                        v.push(e)
                    }))), o.call(t, s) && (g(n, t, s), t.$unshift.forEach((function(e) {
                        v.unshift(e)
                    }))), o.call(t, u) && (i(Array.isArray(n), "Expected %s target to be an array; got %s", u, n), i(Array.isArray(t.$splice), "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", u, t.$splice), t.$splice.forEach((function(e) {
                        i(Array.isArray(e), "update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?", u, t.$splice), v.splice.apply(v, e)
                    }))), o.call(t, d) && (i("function" === typeof t.$apply, "update(): expected spec of %s to be a function; got %s.", d, t.$apply), v = t.$apply(v)), t) f.hasOwnProperty(y) && f[y] || (v[y] = e(n[y], t[y]));
                return v
            }
        },
        hRh4: function(e, n, t) {
            ! function(e, n) {
                "use strict";

                function t(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), t.push.apply(t, r)
                    }
                    return t
                }

                function r(e) {
                    for (var n = 1; n < arguments.length; n++) {
                        var r = null != arguments[n] ? arguments[n] : {};
                        n % 2 ? t(Object(r), !0).forEach((function(n) {
                            u(e, n, r[n])
                        })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : t(Object(r)).forEach((function(n) {
                            Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n))
                        }))
                    }
                    return e
                }

                function o(e) {
                    return o = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, o(e)
                }

                function i(e, n) {
                    if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
                }

                function a(e, n) {
                    for (var t = 0; t < n.length; t++) {
                        var r = n[t];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function s(e, n, t) {
                    return n && a(e.prototype, n), t && a(e, t), e
                }

                function u(e, n, t) {
                    return n in e ? Object.defineProperty(e, n, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[n] = t, e
                }

                function c(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }

                function l(e, n) {
                    if (null == e) return {};
                    var t, r, o = c(e, n);
                    if (Object.getOwnPropertySymbols) {
                        var i = Object.getOwnPropertySymbols(e);
                        for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                    }
                    return o
                }

                function d(e, n) {
                    return p(e) || f(e, n) || g(e, n) || v()
                }

                function p(e) {
                    if (Array.isArray(e)) return e
                }

                function f(e, n) {
                    var t = e && ("undefined" !== typeof Symbol && e[Symbol.iterator] || e["@@iterator"]);
                    if (null != t) {
                        var r, o, i = [],
                            a = !0,
                            s = !1;
                        try {
                            for (t = t.call(e); !(a = (r = t.next()).done) && (i.push(r.value), !n || i.length !== n); a = !0);
                        } catch (u) {
                            s = !0, o = u
                        } finally {
                            try {
                                a || null == t.return || t.return()
                            } finally {
                                if (s) throw o
                            }
                        }
                        return i
                    }
                }

                function g(e, n) {
                    if (e) {
                        if ("string" === typeof e) return h(e, n);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(e) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? h(e, n) : void 0
                    }
                }

                function h(e, n) {
                    (null == n || n > e.length) && (n = e.length);
                    for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                    return r
                }

                function v() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var m = {
                        area: !0,
                        base: !0,
                        br: !0,
                        col: !0,
                        embed: !0,
                        hr: !0,
                        img: !0,
                        input: !0,
                        link: !0,
                        meta: !0,
                        param: !0,
                        source: !0,
                        track: !0,
                        wbr: !0
                    },
                    y = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;

                function b(e) {
                    var n = {
                            type: "tag",
                            name: "",
                            voidElement: !1,
                            attrs: {},
                            children: []
                        },
                        t = e.match(/<\/?([^\s]+?)[/\s>]/);
                    if (t && (n.name = t[1], (m[t[1]] || "/" === e.charAt(e.length - 2)) && (n.voidElement = !0), n.name.startsWith("!--"))) {
                        var r = e.indexOf("--\x3e");
                        return {
                            type: "comment",
                            comment: -1 !== r ? e.slice(4, r) : ""
                        }
                    }
                    for (var o = new RegExp(y), i = null; null !== (i = o.exec(e));)
                        if (i[0].trim())
                            if (i[1]) {
                                var a = i[1].trim(),
                                    s = [a, ""];
                                a.indexOf("=") > -1 && (s = a.split("=")), n.attrs[s[0]] = s[1], o.lastIndex--
                            } else i[2] && (n.attrs[i[2]] = i[3].trim().substring(1, i[3].length - 1));
                    return n
                }
                var A = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
                    I = /^\s*$/,
                    M = Object.create(null);

                function x(e, n) {
                    switch (n.type) {
                        case "text":
                            return e + n.content;
                        case "tag":
                            return e += "<" + n.name + (n.attrs ? function(e) {
                                var n = [];
                                for (var t in e) n.push(t + '="' + e[t] + '"');
                                return n.length ? " " + n.join(" ") : ""
                            }(n.attrs) : "") + (n.voidElement ? "/>" : ">"), n.voidElement ? e : e + n.children.reduce(x, "") + "</" + n.name + ">";
                        case "comment":
                            return e + "\x3c!--" + n.comment + "--\x3e"
                    }
                }
                var C, k = {
                        parse: function(e, n) {
                            n || (n = {}), n.components || (n.components = M);
                            var t, r = [],
                                o = [],
                                i = -1,
                                a = !1;
                            if (0 !== e.indexOf("<")) {
                                var s = e.indexOf("<");
                                r.push({
                                    type: "text",
                                    content: -1 === s ? e : e.substring(0, s)
                                })
                            }
                            return e.replace(A, (function(s, u) {
                                if (a) {
                                    if (s !== "</" + t.name + ">") return;
                                    a = !1
                                }
                                var c, l = "/" !== s.charAt(1),
                                    d = s.startsWith("\x3c!--"),
                                    p = u + s.length,
                                    f = e.charAt(p);
                                if (d) {
                                    var g = b(s);
                                    return i < 0 ? (r.push(g), r) : ((c = o[i]).children.push(g), r)
                                }
                                if (l && (i++, "tag" === (t = b(s)).type && n.components[t.name] && (t.type = "component", a = !0), t.voidElement || a || !f || "<" === f || t.children.push({
                                        type: "text",
                                        content: e.slice(p, e.indexOf("<", p))
                                    }), 0 === i && r.push(t), (c = o[i - 1]) && c.children.push(t), o[i] = t), (!l || t.voidElement) && (i > -1 && (t.voidElement || t.name === s.slice(2, -1)) && (i--, t = -1 === i ? r : o[i]), !a && "<" !== f && f)) {
                                    c = -1 === i ? r : o[i].children;
                                    var h = e.indexOf("<", p),
                                        v = e.slice(p, -1 === h ? void 0 : h);
                                    I.test(v) && (v = " "), (h > -1 && i + c.length >= 0 || " " !== v) && c.push({
                                        type: "text",
                                        content: v
                                    })
                                }
                            })), r
                        },
                        stringify: function(e) {
                            return e.reduce((function(e, n) {
                                return e + x("", n)
                            }), "")
                        }
                    },
                    w = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
                    E = {
                        "&amp;": "&",
                        "&#38;": "&",
                        "&lt;": "<",
                        "&#60;": "<",
                        "&gt;": ">",
                        "&#62;": ">",
                        "&apos;": "'",
                        "&#39;": "'",
                        "&quot;": '"',
                        "&#34;": '"',
                        "&nbsp;": " ",
                        "&#160;": " ",
                        "&copy;": "\xa9",
                        "&#169;": "\xa9",
                        "&reg;": "\xae",
                        "&#174;": "\xae",
                        "&hellip;": "\u2026",
                        "&#8230;": "\u2026",
                        "&#x2F;": "/",
                        "&#47;": "/"
                    },
                    _ = function(e) {
                        return E[e]
                    },
                    S = {
                        bindI18n: "languageChanged",
                        bindI18nStore: "",
                        transEmptyNodeValue: "",
                        transSupportBasicHtmlNodes: !0,
                        transWrapTextNodes: "",
                        transKeepBasicHtmlNodesFor: ["br", "strong", "i", "p"],
                        useSuspense: !0,
                        unescape: function(e) {
                            return e.replace(w, _)
                        }
                    },
                    T = n.createContext();

                function O() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    S = r(r({}, S), e)
                }

                function P() {
                    return S
                }
                var L = function() {
                    function e() {
                        i(this, e), this.usedNamespaces = {}
                    }
                    return s(e, [{
                        key: "addUsedNamespaces",
                        value: function(e) {
                            var n = this;
                            e.forEach((function(e) {
                                n.usedNamespaces[e] || (n.usedNamespaces[e] = !0)
                            }))
                        }
                    }, {
                        key: "getUsedNamespaces",
                        value: function() {
                            return Object.keys(this.usedNamespaces)
                        }
                    }]), e
                }();

                function N(e) {
                    C = e
                }

                function R() {
                    return C
                }
                var D = {
                    type: "3rdParty",
                    init: function(e) {
                        O(e.options.react), N(e)
                    }
                };

                function F(e) {
                    return function(n) {
                        return new Promise((function(t) {
                            var o = B();
                            e.getInitialProps ? e.getInitialProps(n).then((function(e) {
                                t(r(r({}, e), o))
                            })) : t(o)
                        }))
                    }
                }

                function B() {
                    var e = R(),
                        n = e.reportNamespaces ? e.reportNamespaces.getUsedNamespaces() : [],
                        t = {},
                        r = {};
                    return e.languages.forEach((function(t) {
                        r[t] = {}, n.forEach((function(n) {
                            r[t][n] = e.getResourceBundle(t, n) || {}
                        }))
                    })), t.initialI18nStore = r, t.initialLanguage = e.language, t
                }

                function G() {
                    if (console && console.warn) {
                        for (var e, n = arguments.length, t = new Array(n), r = 0; r < n; r++) t[r] = arguments[r];
                        "string" === typeof t[0] && (t[0] = "react-i18next:: ".concat(t[0])), (e = console).warn.apply(e, t)
                    }
                }
                var j = {};

                function H() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    "string" === typeof n[0] && j[n[0]] || ("string" === typeof n[0] && (j[n[0]] = new Date), G.apply(void 0, n))
                }

                function U(e, n, t) {
                    e.loadNamespaces(n, (function() {
                        if (e.isInitialized) t();
                        else {
                            var n = function n() {
                                setTimeout((function() {
                                    e.off("initialized", n)
                                }), 0), t()
                            };
                            e.on("initialized", n)
                        }
                    }))
                }

                function q(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        r = n.languages[0],
                        o = !!n.options && n.options.fallbackLng,
                        i = n.languages[n.languages.length - 1];
                    if ("cimode" === r.toLowerCase()) return !0;
                    var a = function(e, t) {
                        var r = n.services.backendConnector.state["".concat(e, "|").concat(t)];
                        return -1 === r || 2 === r
                    };
                    return !(t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !a(n.isLanguageChangingTo, e)) && (!!n.hasResourceBundle(r, e) || !(n.services.backendConnector.backend && (!n.options.resources || n.options.partialBundledLanguages)) || !(!a(r, e) || o && !a(i, e)))
                }

                function W(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return n.languages && n.languages.length ? void 0 !== n.options.ignoreJSONStructure ? n.hasLoadedNamespace(e, {
                        precheck: function(n, r) {
                            if (t.bindI18n && t.bindI18n.indexOf("languageChanging") > -1 && n.services.backendConnector.backend && n.isLanguageChangingTo && !r(n.isLanguageChangingTo, e)) return !1
                        }
                    }) : q(e, n, t) : (H("i18n.languages were undefined or empty", n.languages), !0)
                }

                function V(e) {
                    return e.displayName || e.name || ("string" === typeof e && e.length > 0 ? e : "Unknown")
                }
                var K = ["format"],
                    J = ["children", "count", "parent", "i18nKey", "context", "tOptions", "values", "defaults", "components", "ns", "i18n", "t", "shouldUnescape"];

                function z(e, n) {
                    if (!e) return !1;
                    var t = e.props ? e.props.children : e.children;
                    return n ? t.length > 0 : !!t
                }

                function $(e) {
                    return e ? e.props ? e.props.children : e.children : []
                }

                function Y(e) {
                    return "[object Array]" === Object.prototype.toString.call(e) && e.every((function(e) {
                        return n.isValidElement(e)
                    }))
                }

                function X(e) {
                    return Array.isArray(e) ? e : [e]
                }

                function Q(e, n) {
                    var t = r({}, n);
                    return t.props = Object.assign(e.props, n.props), t
                }

                function Z(e, t) {
                    if (!e) return "";
                    var r = "",
                        i = X(e),
                        a = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
                    return i.forEach((function(e, i) {
                        if ("string" === typeof e) r += "".concat(e);
                        else if (n.isValidElement(e)) {
                            var s = Object.keys(e.props).length,
                                u = a.indexOf(e.type) > -1,
                                c = e.props.children;
                            if (!c && u && 0 === s) r += "<".concat(e.type, "/>");
                            else if (c || u && 0 === s)
                                if (e.props.i18nIsDynamicList) r += "<".concat(i, "></").concat(i, ">");
                                else if (u && 1 === s && "string" === typeof c) r += "<".concat(e.type, ">").concat(c, "</").concat(e.type, ">");
                            else {
                                var d = Z(c, t);
                                r += "<".concat(i, ">").concat(d, "</").concat(i, ">")
                            } else r += "<".concat(i, "></").concat(i, ">")
                        } else if (null === e) G("Trans: the passed in value is invalid - seems you passed in a null child.");
                        else if ("object" === o(e)) {
                            var p = e.format,
                                f = l(e, K),
                                g = Object.keys(f);
                            if (1 === g.length) {
                                var h = p ? "".concat(g[0], ", ").concat(p) : g[0];
                                r += "{{".concat(h, "}}")
                            } else G("react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.", e)
                        } else G("Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.", e)
                    })), r
                }

                function ee(e, t, i, a, s, u) {
                    if ("" === t) return [];
                    var c = a.transKeepBasicHtmlNodesFor || [],
                        l = t && new RegExp(c.join("|")).test(t);
                    if (!e && !l) return [t];
                    var d = {};

                    function p(e) {
                        X(e).forEach((function(e) {
                            "string" !== typeof e && (z(e) ? p($(e)) : "object" !== o(e) || n.isValidElement(e) || Object.assign(d, e))
                        }))
                    }
                    p(e);
                    var f = k.parse("<0>".concat(t, "</0>")),
                        g = r(r({}, d), s);

                    function h(e, n, t) {
                        var r = $(e),
                            o = m(r, n.children, t);
                        return Y(r) && 0 === o.length ? r : o
                    }

                    function v(e, t, o, i, a) {
                        e.dummy && (e.children = t), o.push(n.cloneElement(e, r(r({}, e.props), {}, {
                            key: i
                        }), a ? void 0 : t))
                    }

                    function m(t, s, d) {
                        var p = X(t);
                        return X(s).reduce((function(t, s, f) {
                            var y = s.children && s.children[0] && s.children[0].content && i.services.interpolator.interpolate(s.children[0].content, g, i.language);
                            if ("tag" === s.type) {
                                var b = p[parseInt(s.name, 10)];
                                !b && 1 === d.length && d[0][s.name] && (b = d[0][s.name]), b || (b = {});
                                var A = 0 !== Object.keys(s.attrs).length ? Q({
                                        props: s.attrs
                                    }, b) : b,
                                    I = n.isValidElement(A),
                                    M = I && z(s, !0) && !s.voidElement,
                                    x = l && "object" === o(A) && A.dummy && !I,
                                    C = "object" === o(e) && null !== e && Object.hasOwnProperty.call(e, s.name);
                                if ("string" === typeof A) {
                                    var k = i.services.interpolator.interpolate(A, g, i.language);
                                    t.push(k)
                                } else if (z(A) || M) v(A, h(A, s, d), t, f);
                                else if (x) {
                                    var w = m(p, s.children, d);
                                    t.push(n.cloneElement(A, r(r({}, A.props), {}, {
                                        key: f
                                    }), w))
                                } else if (Number.isNaN(parseFloat(s.name)))
                                    if (C) v(A, h(A, s, d), t, f, s.voidElement);
                                    else if (a.transSupportBasicHtmlNodes && c.indexOf(s.name) > -1)
                                    if (s.voidElement) t.push(n.createElement(s.name, {
                                        key: "".concat(s.name, "-").concat(f)
                                    }));
                                    else {
                                        var E = m(p, s.children, d);
                                        t.push(n.createElement(s.name, {
                                            key: "".concat(s.name, "-").concat(f)
                                        }, E))
                                    }
                                else if (s.voidElement) t.push("<".concat(s.name, " />"));
                                else {
                                    var _ = m(p, s.children, d);
                                    t.push("<".concat(s.name, ">").concat(_, "</").concat(s.name, ">"))
                                } else if ("object" !== o(A) || I) 1 === s.children.length && y ? t.push(n.cloneElement(A, r(r({}, A.props), {}, {
                                    key: f
                                }), y)) : t.push(n.cloneElement(A, r(r({}, A.props), {}, {
                                    key: f
                                })));
                                else {
                                    var S = s.children[0] ? y : null;
                                    S && t.push(S)
                                }
                            } else if ("text" === s.type) {
                                var T = a.transWrapTextNodes,
                                    O = u ? a.unescape(i.services.interpolator.interpolate(s.content, g, i.language)) : i.services.interpolator.interpolate(s.content, g, i.language);
                                T ? t.push(n.createElement(T, {
                                    key: "".concat(s.name, "-").concat(f)
                                }, O)) : t.push(O)
                            }
                            return t
                        }), [])
                    }
                    return $(m([{
                        dummy: !0,
                        children: e || []
                    }], f, X(e || []))[0])
                }

                function ne(e) {
                    var t = e.children,
                        o = e.count,
                        i = e.parent,
                        a = e.i18nKey,
                        s = e.context,
                        u = e.tOptions,
                        c = void 0 === u ? {} : u,
                        d = e.values,
                        p = e.defaults,
                        f = e.components,
                        g = e.ns,
                        h = e.i18n,
                        v = e.t,
                        m = e.shouldUnescape,
                        y = l(e, J),
                        b = n.useContext(T) || {},
                        A = b.i18n,
                        I = b.defaultNS,
                        M = h || A || R();
                    if (!M) return H("You will need to pass in an i18next instance by using i18nextReactModule"), t;
                    var x = v || M.t.bind(M) || function(e) {
                        return e
                    };
                    s && (c.context = s);
                    var C = r(r({}, P()), M.options && M.options.react),
                        k = g || x.ns || I || M.options && M.options.defaultNS;
                    k = "string" === typeof k ? [k] : k || ["translation"];
                    var w = p || Z(t, C) || C.transEmptyNodeValue || a,
                        E = C.hashTransKey,
                        _ = a || (E ? E(w) : w),
                        S = d ? c.interpolation : {
                            interpolation: r(r({}, c.interpolation), {}, {
                                prefix: "#$?",
                                suffix: "?$#"
                            })
                        },
                        O = r(r(r(r({}, c), {}, {
                            count: o
                        }, d), S), {}, {
                            defaultValue: w,
                            ns: k
                        }),
                        L = ee(f || t, _ ? x(_, O) : w, M, C, O, m),
                        N = void 0 !== i ? i : C.defaultTransParent;
                    return N ? n.createElement(N, y, L) : L
                }
                var te = function(e, t) {
                    var r = n.useRef();
                    return n.useEffect((function() {
                        r.current = t ? r.current : e
                    }), [e, t]), r.current
                };

                function re(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        o = t.i18n,
                        i = n.useContext(T) || {},
                        a = i.i18n,
                        s = i.defaultNS,
                        u = o || a || R();
                    if (u && !u.reportNamespaces && (u.reportNamespaces = new L), !u) {
                        H("You will need to pass in an i18next instance by using initReactI18next");
                        var c = function(e) {
                                return Array.isArray(e) ? e[e.length - 1] : e
                            },
                            l = [c, {}, !1];
                        return l.t = c, l.i18n = {}, l.ready = !1, l
                    }
                    u.options.react && void 0 !== u.options.react.wait && H("It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.");
                    var p = r(r(r({}, P()), u.options.react), t),
                        f = p.useSuspense,
                        g = p.keyPrefix,
                        h = e || s || u.options && u.options.defaultNS;
                    h = "string" === typeof h ? [h] : h || ["translation"], u.reportNamespaces.addUsedNamespaces && u.reportNamespaces.addUsedNamespaces(h);
                    var v = (u.isInitialized || u.initializedStoreOnce) && h.every((function(e) {
                        return W(e, u, p)
                    }));

                    function m() {
                        return u.getFixedT(null, "fallback" === p.nsMode ? h : h[0], g)
                    }
                    var y = d(n.useState(m), 2),
                        b = y[0],
                        A = y[1],
                        I = h.join(),
                        M = te(I),
                        x = n.useRef(!0);
                    n.useEffect((function() {
                        var e = p.bindI18n,
                            n = p.bindI18nStore;

                        function t() {
                            x.current && A(m)
                        }
                        return x.current = !0, v || f || U(u, h, (function() {
                                x.current && A(m)
                            })), v && M && M !== I && x.current && A(m), e && u && u.on(e, t), n && u && u.store.on(n, t),
                            function() {
                                x.current = !1, e && u && e.split(" ").forEach((function(e) {
                                    return u.off(e, t)
                                })), n && u && n.split(" ").forEach((function(e) {
                                    return u.store.off(e, t)
                                }))
                            }
                    }), [u, I]);
                    var C = n.useRef(!0);
                    n.useEffect((function() {
                        x.current && !C.current && A(m), C.current = !1
                    }), [u, g]);
                    var k = [b, u, v];
                    if (k.t = b, k.i18n = u, k.ready = v, v) return k;
                    if (!v && !f) return k;
                    throw new Promise((function(e) {
                        U(u, h, (function() {
                            e()
                        }))
                    }))
                }
                var oe = ["forwardedRef"];

                function ie(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return function(o) {
                        function i(i) {
                            var a = i.forwardedRef,
                                s = l(i, oe),
                                u = d(re(e, r(r({}, s), {}, {
                                    keyPrefix: t.keyPrefix
                                })), 3),
                                c = u[0],
                                p = u[1],
                                f = u[2],
                                g = r(r({}, s), {}, {
                                    t: c,
                                    i18n: p,
                                    tReady: f
                                });
                            return t.withRef && a ? g.ref = a : !t.withRef && a && (g.forwardedRef = a), n.createElement(o, g)
                        }
                        i.displayName = "withI18nextTranslation(".concat(V(o), ")"), i.WrappedComponent = o;
                        var a = function(e, t) {
                            return n.createElement(i, Object.assign({}, e, {
                                forwardedRef: t
                            }))
                        };
                        return t.withRef ? n.forwardRef(a) : i
                    }
                }
                var ae = ["ns", "children"];

                function se(e) {
                    var n = e.ns,
                        t = e.children,
                        r = d(re(n, l(e, ae)), 3),
                        o = r[0],
                        i = r[1],
                        a = r[2];
                    return t(o, {
                        i18n: i,
                        lng: i.language
                    }, a)
                }

                function ue(e) {
                    var t = e.i18n,
                        r = e.defaultNS,
                        o = e.children,
                        i = n.useMemo((function() {
                            return {
                                i18n: t,
                                defaultNS: r
                            }
                        }), [t, r]);
                    return n.createElement(T.Provider, {
                        value: i
                    }, o)
                }

                function ce(e, t) {
                    var r = (arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}).i18n,
                        o = (n.useContext(T) || {}).i18n,
                        i = r || o || R();
                    i.options && i.options.isClone || (e && !i.initializedStoreOnce && (i.services.resourceStore.data = e, i.options.ns = Object.values(e).reduce((function(e, n) {
                        return Object.keys(n).forEach((function(n) {
                            e.indexOf(n) < 0 && e.push(n)
                        })), e
                    }), i.options.ns), i.initializedStoreOnce = !0, i.isInitialized = !0), t && !i.initializedLanguageOnce && (i.changeLanguage(t), i.initializedLanguageOnce = !0))
                }
                var le = ["initialI18nStore", "initialLanguage"];

                function de() {
                    return function(e) {
                        function t(t) {
                            var o = t.initialI18nStore,
                                i = t.initialLanguage,
                                a = l(t, le);
                            return ce(o, i), n.createElement(e, r({}, a))
                        }
                        return t.getInitialProps = F(e), t.displayName = "withI18nextSSR(".concat(V(e), ")"), t.WrappedComponent = e, t
                    }
                }
                var pe = function() {
                        return ""
                    },
                    fe = function() {
                        return ""
                    },
                    ge = function() {
                        return ""
                    },
                    he = function() {
                        return ""
                    },
                    ve = function() {
                        return ""
                    },
                    me = function() {
                        return ""
                    };
                e.I18nContext = T, e.I18nextProvider = ue, e.Trans = ne, e.Translation = se, e.composeInitialProps = F, e.date = pe, e.getDefaults = P, e.getI18n = R, e.getInitialProps = B, e.initReactI18next = D, e.number = ge, e.plural = ve, e.select = he, e.selectOrdinal = me, e.setDefaults = O, e.setI18n = N, e.time = fe, e.useSSR = ce, e.useTranslation = re, e.withSSR = de, e.withTranslation = ie, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }(n, t("DTvD"))
        },
        hTPx: (e, n) => {
            "use strict";
            var t = "function" === typeof Symbol && Symbol.for,
                r = t ? Symbol.for("react.element") : 60103,
                o = t ? Symbol.for("react.portal") : 60106,
                i = t ? Symbol.for("react.fragment") : 60107,
                a = t ? Symbol.for("react.strict_mode") : 60108,
                s = t ? Symbol.for("react.profiler") : 60114,
                u = t ? Symbol.for("react.provider") : 60109,
                c = t ? Symbol.for("react.context") : 60110,
                l = t ? Symbol.for("react.async_mode") : 60111,
                d = t ? Symbol.for("react.concurrent_mode") : 60111,
                p = t ? Symbol.for("react.forward_ref") : 60112,
                f = t ? Symbol.for("react.suspense") : 60113,
                g = t ? Symbol.for("react.suspense_list") : 60120,
                h = t ? Symbol.for("react.memo") : 60115,
                v = t ? Symbol.for("react.lazy") : 60116,
                m = t ? Symbol.for("react.block") : 60121,
                y = t ? Symbol.for("react.fundamental") : 60117,
                b = t ? Symbol.for("react.responder") : 60118,
                A = t ? Symbol.for("react.scope") : 60119;

            function I(e) {
                if ("object" === typeof e && null !== e) {
                    var n = e.$$typeof;
                    switch (n) {
                        case r:
                            switch (e = e.type) {
                                case l:
                                case d:
                                case i:
                                case s:
                                case a:
                                case f:
                                    return e;
                                default:
                                    switch (e = e && e.$$typeof) {
                                        case c:
                                        case p:
                                        case v:
                                        case h:
                                        case u:
                                            return e;
                                        default:
                                            return n
                                    }
                            }
                        case o:
                            return n
                    }
                }
            }

            function M(e) {
                return I(e) === d
            }
            n.AsyncMode = l, n.ConcurrentMode = d, n.ContextConsumer = c, n.ContextProvider = u, n.Element = r, n.ForwardRef = p, n.Fragment = i, n.Lazy = v, n.Memo = h, n.Portal = o, n.Profiler = s, n.StrictMode = a, n.Suspense = f, n.isAsyncMode = function(e) {
                return M(e) || I(e) === l
            }, n.isConcurrentMode = M, n.isContextConsumer = function(e) {
                return I(e) === c
            }, n.isContextProvider = function(e) {
                return I(e) === u
            }, n.isElement = function(e) {
                return "object" === typeof e && null !== e && e.$$typeof === r
            }, n.isForwardRef = function(e) {
                return I(e) === p
            }, n.isFragment = function(e) {
                return I(e) === i
            }, n.isLazy = function(e) {
                return I(e) === v
            }, n.isMemo = function(e) {
                return I(e) === h
            }, n.isPortal = function(e) {
                return I(e) === o
            }, n.isProfiler = function(e) {
                return I(e) === s
            }, n.isStrictMode = function(e) {
                return I(e) === a
            }, n.isSuspense = function(e) {
                return I(e) === f
            }, n.isValidElementType = function(e) {
                return "string" === typeof e || "function" === typeof e || e === i || e === d || e === s || e === a || e === f || e === g || "object" === typeof e && null !== e && (e.$$typeof === v || e.$$typeof === h || e.$$typeof === u || e.$$typeof === c || e.$$typeof === p || e.$$typeof === y || e.$$typeof === b || e.$$typeof === A || e.$$typeof === m)
            }, n.typeOf = I
        },
        kvVz: (e, n, t) => {
            "use strict";
            e.exports = t("hTPx")
        },
        "9OUN": (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                __DO_NOT_USE__ActionTypes: () => s,
                applyMiddleware: () => g,
                bindActionCreators: () => p,
                combineReducers: () => l,
                compose: () => f,
                createStore: () => c
            });
            var r = t("gtzB");

            function o(e) {
                return "Minified Redux error #" + e + "; visit https://redux.js.org/Errors?code=" + e + " for the full message or use the non-minified dev environment for full errors. "
            }
            var i = "function" === typeof Symbol && Symbol.observable || "@@observable",
                a = function() {
                    return Math.random().toString(36).substring(7).split("").join(".")
                },
                s = {
                    INIT: "@@redux/INIT" + a(),
                    REPLACE: "@@redux/REPLACE" + a(),
                    PROBE_UNKNOWN_ACTION: function() {
                        return "@@redux/PROBE_UNKNOWN_ACTION" + a()
                    }
                };

            function u(e) {
                if ("object" !== typeof e || null === e) return !1;
                for (var n = e; null !== Object.getPrototypeOf(n);) n = Object.getPrototypeOf(n);
                return Object.getPrototypeOf(e) === n
            }

            function c(e, n, t) {
                var r;
                if ("function" === typeof n && "function" === typeof t || "function" === typeof t && "function" === typeof arguments[3]) throw new Error(o(0));
                if ("function" === typeof n && "undefined" === typeof t && (t = n, n = void 0), "undefined" !== typeof t) {
                    if ("function" !== typeof t) throw new Error(o(1));
                    return t(c)(e, n)
                }
                if ("function" !== typeof e) throw new Error(o(2));
                var a = e,
                    l = n,
                    d = [],
                    p = d,
                    f = !1;

                function g() {
                    p === d && (p = d.slice())
                }

                function h() {
                    if (f) throw new Error(o(3));
                    return l
                }

                function v(e) {
                    if ("function" !== typeof e) throw new Error(o(4));
                    if (f) throw new Error(o(5));
                    var n = !0;
                    return g(), p.push(e),
                        function() {
                            if (n) {
                                if (f) throw new Error(o(6));
                                n = !1, g();
                                var t = p.indexOf(e);
                                p.splice(t, 1), d = null
                            }
                        }
                }

                function m(e) {
                    if (!u(e)) throw new Error(o(7));
                    if ("undefined" === typeof e.type) throw new Error(o(8));
                    if (f) throw new Error(o(9));
                    try {
                        f = !0, l = a(l, e)
                    } finally {
                        f = !1
                    }
                    for (var n = d = p, t = 0; t < n.length; t++) {
                        (0, n[t])()
                    }
                    return e
                }

                function y(e) {
                    if ("function" !== typeof e) throw new Error(o(10));
                    a = e, m({
                        type: s.REPLACE
                    })
                }

                function b() {
                    var e, n = v;
                    return (e = {
                        subscribe: function(e) {
                            if ("object" !== typeof e || null === e) throw new Error(o(11));

                            function t() {
                                e.next && e.next(h())
                            }
                            return t(), {
                                unsubscribe: n(t)
                            }
                        }
                    })[i] = function() {
                        return this
                    }, e
                }
                return m({
                    type: s.INIT
                }), (r = {
                    dispatch: m,
                    subscribe: v,
                    getState: h,
                    replaceReducer: y
                })[i] = b, r
            }

            function l(e) {
                for (var n = Object.keys(e), t = {}, r = 0; r < n.length; r++) {
                    var i = n[r];
                    0, "function" === typeof e[i] && (t[i] = e[i])
                }
                var a, u = Object.keys(t);
                try {
                    ! function(e) {
                        Object.keys(e).forEach((function(n) {
                            var t = e[n];
                            if ("undefined" === typeof t(void 0, {
                                    type: s.INIT
                                })) throw new Error(o(12));
                            if ("undefined" === typeof t(void 0, {
                                    type: s.PROBE_UNKNOWN_ACTION()
                                })) throw new Error(o(13))
                        }))
                    }(t)
                } catch (c) {
                    a = c
                }
                return function(e, n) {
                    if (void 0 === e && (e = {}), a) throw a;
                    for (var r = !1, i = {}, s = 0; s < u.length; s++) {
                        var c = u[s],
                            l = t[c],
                            d = e[c],
                            p = l(d, n);
                        if ("undefined" === typeof p) {
                            n && n.type;
                            throw new Error(o(14))
                        }
                        i[c] = p, r = r || p !== d
                    }
                    return (r = r || u.length !== Object.keys(e).length) ? i : e
                }
            }

            function d(e, n) {
                return function() {
                    return n(e.apply(this, arguments))
                }
            }

            function p(e, n) {
                if ("function" === typeof e) return d(e, n);
                if ("object" !== typeof e || null === e) throw new Error(o(16));
                var t = {};
                for (var r in e) {
                    var i = e[r];
                    "function" === typeof i && (t[r] = d(i, n))
                }
                return t
            }

            function f() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return 0 === n.length ? function(e) {
                    return e
                } : 1 === n.length ? n[0] : n.reduce((function(e, n) {
                    return function() {
                        return e(n.apply(void 0, arguments))
                    }
                }))
            }

            function g() {
                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                return function(e) {
                    return function() {
                        var t = e.apply(void 0, arguments),
                            i = function() {
                                throw new Error(o(15))
                            },
                            a = {
                                getState: t.getState,
                                dispatch: function() {
                                    return i.apply(void 0, arguments)
                                }
                            },
                            s = n.map((function(e) {
                                return e(a)
                            }));
                        return i = f.apply(void 0, s)(t.dispatch), (0, r.A)((0, r.A)({}, t), {}, {
                            dispatch: i
                        })
                    }
                }
            }
        },
        "p/97": e => {
            "use strict";
            e.exports = (e, n) => {
                if ("string" !== typeof e || "string" !== typeof n) throw new TypeError("Expected the arguments to be of type `string`");
                if ("" === n) return [e];
                const t = e.indexOf(n);
                return -1 === t ? [e] : [e.slice(0, t), e.slice(t + n.length)]
            }
        },
        UM5q: e => {
            "use strict";
            e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, (e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`))
        },
        h7FZ: (e, n, t) => {
            "use strict";
            t.r(n), t.d(n, {
                default: () => o
            });
            var r = "Invariant failed";
            const o = function(e, n) {
                if (!e) throw new Error(r)
            }
        },
        F3rx: e => {
            "use strict";
            e.exports = MD5
        },
        DTvD: e => {
            "use strict";
            e.exports = React
        },
        hTvQ: e => {
            "use strict";
            e.exports = ReactDOM
        },
        LJ4M: e => {
            "use strict";
            e.exports = _bne.cookies
        },
        E0uk: e => {
            "use strict";
            e.exports = _bne.http
        },
        tKUM: e => {
            "use strict";
            e.exports = _bne.language
        },
        mo5a: e => {
            "use strict";
            e.exports = _bne.utils.uuid
        },
        kPx0: e => {
            "use strict";
            e.exports = b2aSDK
        },
        HS2I: e => {
            "use strict";
            e.exports = dataUMD
        },
        ZFFV: e => {
            "use strict";
            e.exports = fetchPonyfill
        },
        VA12: e => {
            "use strict";
            e.exports = httpSDK
        },
        Pz56: e => {
            "use strict";
            e.exports = regeneratorRuntime
        },
        wIZF: e => {
            "use strict";
            e.exports = tslib
        },
        NoXm: e => {
            "use strict";
            e.exports = utilsUMD
        },
        "47/P": (e, n, t) => {
            var r;
            if ("function" === typeof fetch && (r = "undefined" !== typeof t.g && t.g.fetch ? t.g.fetch : window.fetch ? window.fetch : fetch), "undefined" === typeof window.document) {
                var o = r || t("64TO");
                o.default && (o = o.default), n.default = o, e.exports = n.default
            }
        },
        BxAp: (e, n, t) => {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(n, {
                A: () => r
            })
        },
        nTdK: (e, n, t) => {
            "use strict";

            function r(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, n, t) {
                return n && r(e.prototype, n), t && r(e, t), e
            }
            t.d(n, {
                A: () => o
            })
        },
        OHGK: (e, n, t) => {
            "use strict";

            function r(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            t.d(n, {
                A: () => r
            })
        },
        gtzB: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => i
            });
            var r = t("OHGK");

            function o(e, n) {
                var t = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    n && (r = r.filter((function(n) {
                        return Object.getOwnPropertyDescriptor(e, n).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function i(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {};
                    n % 2 ? o(Object(t), !0).forEach((function(n) {
                        (0, r.A)(e, n, t[n])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach((function(n) {
                        Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(t, n))
                    }))
                }
                return e
            }
        },
        Cffy: (e, n, t) => {
            "use strict";

            function r(e) {
                return r = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, r(e)
            }
            t.d(n, {
                A: () => r
            })
        },
        BA4h: (e, n, t) => {
            "use strict";

            function r(e, n) {
                (null == n || n > e.length) && (n = e.length);
                for (var t = 0, r = new Array(n); t < n; t++) r[t] = e[t];
                return r
            }
            t.d(n, {
                A: () => r
            })
        },
        uqCI: (e, n, t) => {
            "use strict";

            function r(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
            }
            t.d(n, {
                A: () => r
            })
        },
        sViW: (e, n, t) => {
            "use strict";

            function r(e, n, t, r, o, i, a) {
                try {
                    var s = e[i](a),
                        u = s.value
                } catch (c) {
                    return void t(c)
                }
                s.done ? n(u) : Promise.resolve(u).then(r, o)
            }

            function o(e) {
                return function() {
                    var n = this,
                        t = arguments;
                    return new Promise((function(o, i) {
                        var a = e.apply(n, t);

                        function s(e) {
                            r(a, o, i, s, u, "next", e)
                        }

                        function u(e) {
                            r(a, o, i, s, u, "throw", e)
                        }
                        s(void 0)
                    }))
                }
            }
            t.d(n, {
                A: () => o
            })
        },
        "888e": (e, n, t) => {
            "use strict";

            function r(e, n) {
                if (!(e instanceof n)) throw new TypeError("Cannot call a class as a function")
            }
            t.d(n, {
                A: () => r
            })
        },
        nG1z: (e, n, t) => {
            "use strict";

            function r(e, n) {
                for (var t = 0; t < n.length; t++) {
                    var r = n[t];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }

            function o(e, n, t) {
                return n && r(e.prototype, n), t && r(e, t), e
            }
            t.d(n, {
                A: () => o
            })
        },
        VKAp: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => i
            });
            var r = t("m+Lx"),
                o = t("oH+a");

            function i(e) {
                var n = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var t, i = (0, r.A)(e);
                    if (n) {
                        var a = (0, r.A)(this).constructor;
                        t = Reflect.construct(i, arguments, a)
                    } else t = i.apply(this, arguments);
                    return (0, o.A)(this, t)
                }
            }
        },
        ezuS: (e, n, t) => {
            "use strict";

            function r(e, n, t) {
                return n in e ? Object.defineProperty(e, n, {
                    value: t,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[n] = t, e
            }
            t.d(n, {
                A: () => r
            })
        },
        "m+Lx": (e, n, t) => {
            "use strict";

            function r(e) {
                return r = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                    return e.__proto__ || Object.getPrototypeOf(e)
                }, r(e)
            }

            function o(e) {
                return r(e)
            }
            t.d(n, {
                A: () => o
            })
        },
        "2PCm": (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => o
            });
            var r = t("Wdkv");

            function o(e, n) {
                if ("function" !== typeof n && null !== n) throw new TypeError("Super expression must either be null or a function");
                e.prototype = Object.create(n && n.prototype, {
                    constructor: {
                        value: e,
                        writable: !0,
                        configurable: !0
                    }
                }), n && (0, r.A)(e, n)
            }
        },
        "2URn": (e, n, t) => {
            "use strict";

            function r(e, n) {
                return null != n && "undefined" !== typeof Symbol && n[Symbol.hasInstance] ? !!n[Symbol.hasInstance](e) : e instanceof n
            }
            t.d(n, {
                A: () => r
            })
        },
        x9Vb: (e, n, t) => {
            "use strict";

            function r(e) {
                if ("undefined" !== typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
            }
            t.d(n, {
                A: () => r
            })
        },
        BK7R: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => o
            });
            var r = t("ezuS");

            function o(e) {
                for (var n = 1; n < arguments.length; n++) {
                    var t = null != arguments[n] ? arguments[n] : {},
                        o = Object.keys(t);
                    "function" === typeof Object.getOwnPropertySymbols && (o = o.concat(Object.getOwnPropertySymbols(t).filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    })))), o.forEach((function(n) {
                        (0, r.A)(e, n, t[n])
                    }))
                }
                return e
            }
        },
        QUKP: (e, n, t) => {
            "use strict";

            function r(e, n) {
                return n = null != n ? n : {}, Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : function(e, n) {
                    var t = Object.keys(e);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(e);
                        n && (r = r.filter((function(n) {
                            return Object.getOwnPropertyDescriptor(e, n).enumerable
                        }))), t.push.apply(t, r)
                    }
                    return t
                }(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                })), e
            }
            t.d(n, {
                A: () => r
            })
        },
        gZfF: (e, n, t) => {
            "use strict";

            function r(e, n) {
                if (null == e) return {};
                var t, r, o = function(e, n) {
                    if (null == e) return {};
                    var t, r, o = {},
                        i = Object.keys(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || (o[t] = e[t]);
                    return o
                }(e, n);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    for (r = 0; r < i.length; r++) t = i[r], n.indexOf(t) >= 0 || Object.prototype.propertyIsEnumerable.call(e, t) && (o[t] = e[t])
                }
                return o
            }
            t.d(n, {
                A: () => r
            })
        },
        "oH+a": (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => i
            });
            var r = t("uqCI"),
                o = t("blBx");

            function i(e, n) {
                return !n || "object" !== (0, o.A)(n) && "function" !== typeof n ? (0, r.A)(e) : n
            }
        },
        Wdkv: (e, n, t) => {
            "use strict";

            function r(e, n) {
                return r = Object.setPrototypeOf || function(e, n) {
                    return e.__proto__ = n, e
                }, r(e, n)
            }

            function o(e, n) {
                return r(e, n)
            }
            t.d(n, {
                A: () => o
            })
        },
        VP0d: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => i
            });
            var r = t("x9Vb");
            var o = t("xjOY");

            function i(e, n) {
                return function(e) {
                    if (Array.isArray(e)) return e
                }(e) || (0, r.A)(e, n) || (0, o.A)(e, n) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        tEf9: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => a
            });
            var r = t("BA4h");
            var o = t("x9Vb");
            var i = t("xjOY");

            function a(e) {
                return function(e) {
                    if (Array.isArray(e)) return (0, r.A)(e)
                }(e) || (0, o.A)(e) || (0, i.A)(e) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }
        },
        blBx: (e, n, t) => {
            "use strict";

            function r(e) {
                return e && e.constructor === Symbol ? "symbol" : typeof e
            }
            t.d(n, {
                A: () => r
            })
        },
        xjOY: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => o
            });
            var r = t("BA4h");

            function o(e, n) {
                if (e) {
                    if ("string" === typeof e) return (0, r.A)(e, n);
                    var t = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === t && e.constructor && (t = e.constructor.name), "Map" === t || "Set" === t ? Array.from(t) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? (0, r.A)(e, n) : void 0
                }
            }
        }
    },
    e => {
        var n = n => e(e.s = n);
        e.O(0, [593, 596], (() => (n("Mp1J"), n("nlrA"))));
        e.O()
    }
]);
//# debugId=8383a1c3-d8f0-5094-afda-8907d6bea0c0