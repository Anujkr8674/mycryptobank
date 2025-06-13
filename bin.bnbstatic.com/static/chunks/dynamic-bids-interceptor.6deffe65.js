"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f4a93aa0-ad08-5034-a537-6595717e20b7")
    } catch (e) {}
}();
(self.webpackChunkconvert_ui = self.webpackChunkconvert_ui || []).push([
    [97], {
        "0VaG": (e, r, t) => {
            t.d(r, {
                BIDSInterceptor: () => Ie
            });
            var n = t("sViW"),
                o = t("tEf9"),
                a = t("3yYM"),
                c = t.n(a),
                i = t("888e"),
                s = t("GlbY");
            var u = [],
                l = ["private-e2e-tracker"];
            var p = function() {
                    var e = (0, n.A)(c().mark((function e(r) {
                        var t, n, a, i, p, f, v, m, h;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = r.err, !(n = (null === t || void 0 === t ? void 0 : t.message) || (null === t || void 0 === t ? void 0 : t.errMsg) || "") || !l.some((function(e) {
                                            return n.includes(e)
                                        }))) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 4:
                                    a = window.location.pathname || "";
                                    try {
                                        i = "[".concat(t.code || "NULL", "]").concat(n), p = Math.random().toString(36).slice(2, 15), f = d(u), u.length = 0, v = {
                                            errorCode: t.code || "",
                                            errorMsg: i,
                                            path: a,
                                            id: p,
                                            reportId: 53,
                                            log1: "",
                                            log2: "",
                                            extra: ""
                                        }, f && (2e3, m = [], h = [], f.forEach((function(e) {
                                            var r = JSON.stringify(e);
                                            (0, o.A)(m).concat([r]).join("**").length < 2e3 ? m.push(r) : (0, o.A)(h).concat([r]).join("**").length < 2e3 && h.push(r)
                                        })), v.log1 = m.join("**"), v.log2 = h.join("**")), c = v, (0, s.Ay)("webClick", {
                                            elementID: "error_track",
                                            pageName: "common",
                                            df_3: c.errorCode,
                                            df_4: c.errorMsg,
                                            df_5: c.path,
                                            df_6: c.reportId || 0,
                                            df_7: c.id,
                                            df_8: c.log1,
                                            df_9: c.log2,
                                            df_10: c.extra
                                        })
                                    } catch (w) {}
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                            var c
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                f = ["The event type must be the following values", "className not found", "skip report", "combine-export", "queryI18nResource", "report_event, name: "];

            function d() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                try {
                    var r = (0, o.A)(Array.from(new Set(e))).filter((function(e) {
                        if (!e) return !1;
                        try {
                            var r = JSON.stringify(e);
                            return !(r.length > 1e3) && !f.some((function(e) {
                                return r.includes(e)
                            }))
                        } catch (t) {
                            return !1
                        }
                    }));
                    r.reverse();
                    var t = (0, o.A)(r);
                    return t
                } catch (n) {
                    console.error(n)
                }
                return []
            }
            var v = new(function() {
                function e() {
                    (0, i.A)(this, e), this.report = function(e) {
                        "string" === typeof e && (e = new Error(e));
                        try {
                            p({
                                err: e
                            })
                        } catch (r) {
                            console.error("reportBidsError error", r)
                        }
                    }
                }
                var r = e.prototype;
                return r.log = function(e) {
                    for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
                    var a, c = (new Date).toISOString();
                    (a = console).log.apply(a, ["[IDGM][".concat(c, "] ").concat(e)].concat((0, o.A)(t)))
                }, r.time = function(e) {
                    console.time("[IDGM] ".concat(e))
                }, r.timeEnd = function(e) {
                    console.timeEnd("[IDGM] ".concat(e))
                }, r.error = function(e) {
                    for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) t[n - 1] = arguments[n];
                    var a, c = (new Date).toISOString();
                    (a = console).error.apply(a, ["ERROR [IDGM] [".concat(c, "]"), e].concat((0, o.A)(t)))
                }, e
            }());
            try {
                ! function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).logger,
                        r = function() {
                            for (var r = arguments.length, t = new Array(r), a = 0; a < r; a++) t[a] = arguments[a];
                            return n.log && u.push(t), o.log.apply(e.log, t)
                        },
                        t = function() {
                            for (var r = arguments.length, t = new Array(r), a = 0; a < r; a++) t[a] = arguments[a];
                            return n.log && u.push(t), o.error.apply(e.error, t)
                        },
                        n = {
                            error: !0,
                            warn: !0,
                            log: !0
                        },
                        o = e ? {
                            log: e.log,
                            error: e.error
                        } : {};
                    e.log = r, e.error = t
                }({
                    logger: v
                })
            } catch (xe) {
                console.error("initReportConsole error", xe)
            }
            var m = v;

            function h(e) {
                var r = e.checkFunction,
                    t = e.interval,
                    n = e.timeout;
                return new Promise((function(e, o) {
                    var a = Date.now(),
                        c = setInterval((function() {
                            r() ? (clearInterval(c), e()) : Date.now() - a >= n && (clearInterval(c), o(new Error("runtime checking timeout")))
                        }), t)
                }))
            }

            function w() {
                try {
                    0;
                    var e = Array.from(document.head.querySelectorAll("link[href], script[src]")).map((function(e) {
                        var r = e.getAttribute("href") || e.getAttribute("src");
                        return r ? new URL(r).origin : ""
                    })).reduce((function(e, r) {
                        return r && (e[r] = (e[r] || 0) + 1), e
                    }), {});
                    return Object.keys(e).reduce((function(r, t) {
                        return e[r] > e[t] ? r : t
                    }), "")
                } catch (xe) {
                    m.error("Error in getMostFrequentDomain:", xe)
                }
                return "https://bin.bnbstatic.com"
            }
            var g = t("BK7R"),
                b = t("2URn"),
                y = "identity-service-installations-database",
                I = "identity-service-installations-store",
                x = null,
                _ = !1;

            function S() {
                return (S = (0, n.A)(c().mark((function e() {
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e, r) {
                                    if (_) return e();
                                    var t = indexedDB.open(y, 1);
                                    t.onupgradeneeded = function(e) {
                                        m.log("IndexedDBStorage upgrading...");
                                        var r = e.target.result;
                                        r.objectStoreNames.contains(I) || r.createObjectStore(I, {
                                            keyPath: "key"
                                        })
                                    }, t.onsuccess = function(r) {
                                        x = r.target.result, _ = !0, e()
                                    }, t.onerror = function(e) {
                                        var t;
                                        m.error("Failed to initialize IndexedDBStorage:", e.target.error), m.report(new Error("Failed to initialize IndexedDBStorage ".concat(y, ": ").concat(null === (t = e.target.error) || void 0 === t ? void 0 : t.message))), r(e.target.error)
                                    }
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function k() {
                return (k = (0, n.A)(c().mark((function e(r) {
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e, t) {
                                    if (x) {
                                        var n = x.transaction([I], "readonly").objectStore(I).get(r);
                                        n.onsuccess = function(r) {
                                            e(r.target.result ? r.target.result.value : null)
                                        }, n.onerror = function(e) {
                                            t(e.target.error)
                                        }
                                    } else t("Database is not initialized")
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function E() {
                return (E = (0, n.A)(c().mark((function e(r, t) {
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e, n) {
                                    if (x) {
                                        var o = x.transaction([I], "readwrite").objectStore(I).put({
                                            key: r,
                                            value: t
                                        });
                                        o.onsuccess = function() {
                                            e()
                                        }, o.onerror = function(e) {
                                            n(e.target.error)
                                        }
                                    } else n("Database is not initialized")
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function A() {
                return (A = (0, n.A)(c().mark((function e(r) {
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e, t) {
                                    if (x) {
                                        var n = x.transaction([I], "readwrite").objectStore(I).delete(r);
                                        n.onsuccess = function() {
                                            e()
                                        }, n.onerror = function(e) {
                                            t(e.target.error)
                                        }
                                    } else t("Database is not initialized")
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }

            function D() {
                return (D = (0, n.A)(c().mark((function e() {
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return e.abrupt("return", new Promise((function(e, r) {
                                    if (x) {
                                        var t = x.transaction([I], "readwrite").objectStore(I).clear();
                                        t.onsuccess = function() {
                                            e()
                                        }, t.onerror = function(e) {
                                            r(e.target.error)
                                        }
                                    } else r("Database is not initialized")
                                })));
                            case 1:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var R = {
                    init: function() {
                        return S.apply(this, arguments)
                    },
                    getItem: function(e) {
                        return k.apply(this, arguments)
                    },
                    setItem: function(e, r) {
                        return E.apply(this, arguments)
                    },
                    removeItem: function(e) {
                        return A.apply(this, arguments)
                    },
                    clear: function() {
                        return D.apply(this, arguments)
                    }
                },
                B = function() {
                    var e = (0, n.A)(c().mark((function e(r) {
                        var t, n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.variableName, n = r.version, e.abrupt("return", new Promise((function(e, r) {
                                        var o = 0,
                                            a = setInterval((function() {
                                                return o++, window[t] ? (clearInterval(a), e(!0)) : 10 === o ? (m.error("checkScriptInRuntime time out", {
                                                    version: n,
                                                    variableName: t
                                                }), clearInterval(a), r(!1)) : void 0
                                            }), 20)
                                    })));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = new Map;

            function T(e) {
                return O.apply(this, arguments)
            }

            function O() {
                return O = (0, n.A)(c().mark((function e(r) {
                    var t, o, a, i, s, u, l, p, f, d;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = r.src, o = r.variableName, a = void 0 === o ? "$BIDS" : o, i = r.cacheStoreKey, s = void 0 === i ? "" : i, u = r.version, l = void 0 === u ? "" : u, p = r.extraAttributes, f = void 0 === p ? {} : p, !N.has(t)) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return", N.get(t));
                            case 3:
                                return d = new Promise(function() {
                                    var e = (0, n.A)(c().mark((function e(r, n) {
                                        var o;
                                        return c().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, P({
                                                        cacheStoreKey: s,
                                                        variableName: a
                                                    });
                                                case 2:
                                                    if (!e.sent) {
                                                        e.next = 6;
                                                        break
                                                    }
                                                    return setTimeout((function() {
                                                        return C({
                                                            src: t,
                                                            cacheStoreKey: s,
                                                            version: l
                                                        })
                                                    }), 1e4), e.abrupt("return", r());
                                                case 6:
                                                    (o = document.createElement("script")).setAttributeNode(document.createAttribute("data-ot-ignore")), o.id = "".concat(a, "-").concat(l), o.src = t, Object.keys(f).forEach((function(e) {
                                                        o.setAttribute(e, f[e])
                                                    })), o.onload = function() {
                                                        var e = 0;
                                                        ! function o() {
                                                            setTimeout((function() {
                                                                if (e > 20) return n(new Error("init script timeout or load a wrong script ".concat(l))), void m.report(new Error("init script timeout or load a wrong script ".concat(l)));
                                                                window[a] ? (C({
                                                                    src: t,
                                                                    cacheStoreKey: s,
                                                                    version: l
                                                                }), r()) : (e++, o())
                                                            }), 50)
                                                        }()
                                                    }, o.onerror = function(e) {
                                                        m.error("\u274c script in head load error", {
                                                            src: t,
                                                            e: e
                                                        });
                                                        var r = (0, b.A)(e, ErrorEvent) ? e.message : "Unknown error";
                                                        m.report(new Error("script in head load error ".concat(t, ", ").concat(r))), N.delete(t), o.remove(), n(e)
                                                    }, (document.head || document.body).appendChild(o);
                                                case 14:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function(r, t) {
                                        return e.apply(this, arguments)
                                    }
                                }()), N.set(t, d), e.abrupt("return", d);
                            case 6:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), O.apply(this, arguments)
            }
            var C = function() {
                    var e = (0, n.A)(c().mark((function e(r) {
                        var t, n, o, a, i, s;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.src, n = r.cacheStoreKey, o = r.version, e.prev = 1, e.next = 4, R.getItem(n);
                                case 4:
                                    if (!(a = e.sent)) {
                                        e.next = 9;
                                        break
                                    }
                                    if (JSON.parse(a).version !== o) {
                                        e.next = 9;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 9:
                                    e.next = 15;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(1), m.error("Failed to check script cache:", e.t0), m.report(new Error("Failed to check script cache: ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message)));
                                case 15:
                                    return m.log("Try to cache script:", o), e.prev = 16, e.next = 19, fetch(t);
                                case 19:
                                    if (404 !== (i = e.sent).status && i.ok) {
                                        e.next = 22;
                                        break
                                    }
                                    return e.abrupt("return", m.error("Error: Failed to load script from ".concat(t, ", status: ").concat(i.status)));
                                case 22:
                                    return e.next = 24, i.text();
                                case 24:
                                    return s = e.sent, e.next = 27, R.setItem(n, JSON.stringify({
                                        version: o,
                                        content: s
                                    }));
                                case 27:
                                    m.log("Cache Script Success", {
                                        version: o,
                                        cacheStoreKey: n
                                    }), e.next = 34;
                                    break;
                                case 30:
                                    e.prev = 30, e.t1 = e.catch(16), m.error("\u274c Delayed Cache Script Failed", {
                                        version: o,
                                        cacheStoreKey: n,
                                        error: e.t1
                                    }), m.report(new Error("Delayed Cache Script Failed: ".concat(e.t1.message, ",version: ").concat(o, ",cacheStoreKey: ").concat(n)));
                                case 34:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 11],
                            [16, 30]
                        ])
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                P = function() {
                    var e = (0, n.A)(c().mark((function e(r) {
                        var t, n, o, a, i, s, u;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.cacheStoreKey, n = r.variableName, e.prev = 1, e.next = 4, R.getItem(t);
                                case 4:
                                    if (!(o = e.sent)) {
                                        e.next = 21;
                                        break
                                    }
                                    return (a = document.createElement("script")).setAttributeNode(document.createAttribute("data-ot-ignore")), i = JSON.parse(o), s = i.content, a.textContent = s, a.id = "".concat(n, "-").concat(i.version), a.nonce = U(), document.head.appendChild(a), e.next = 16, B({
                                        variableName: n,
                                        version: i.version
                                    });
                                case 16:
                                    return u = e.sent, m.log("script init successful form cache :", i.version), e.abrupt("return", u);
                                case 21:
                                    return m.log("No script found in cache."), R.removeItem(t), e.abrupt("return", !1);
                                case 24:
                                    e.next = 30;
                                    break;
                                case 26:
                                    return e.prev = 26, e.t0 = e.catch(1), R.removeItem(t), e.abrupt("return", !1);
                                case 30:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 26]
                        ])
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                U = function() {
                    try {
                        0;
                        var e = Array.from(document.querySelectorAll("script[nonce]")).map((function(e) {
                            return e.nonce || e.getAttribute("nonce") || ""
                        })).reduce((function(e, r) {
                            return e[r] = (e[r] || 0) + 1, e
                        }), {});
                        return Object.keys(e).reduce((function(r, t) {
                            return e[r] > e[t] ? r : t
                        }))
                    } catch (xe) {}
                    return ""
                },
                j = t("VA12");

            function M() {
                var e = "prod",
                    r = window.location.host;
                return (r.includes("dev") || r.includes("qa") || r.includes("localhost")) && (e = "dev"), e
            }
            var L, H = t("QUKP"),
                G = t("8tQJ"),
                F = t("LJ4M"),
                K = "https://api.saasexch.com/bapi/themis/api/",
                Y = "MDMyNTY2NTYxMjpmV3JhemhFSFpUWHRuMlVSWXhjOHN6dFhkYmpwR24yUA==";

            function J() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    r = e.themisConfigs,
                    t = void 0 === r ? {} : r,
                    o = e.baseUrl,
                    a = void 0 === o ? K : o,
                    i = e.timeout,
                    s = void 0 === i ? 2e3 : i;
                return L = new Promise(function() {
                    var e = (0, n.A)(c().mark((function e(r, n) {
                        var o;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return s > 0 && setTimeout((function() {
                                        L = void 0, n(new Error("load themis timeout"))
                                    }), s), e.prev = 1, e.next = 4, G.Ay.init((0, H.A)((0, g.A)({}, t), {
                                        trace_id: t.trace_id || F.read("bnc-uuid"),
                                        env: t.env || M().toUpperCase()
                                    }), {
                                        baseUrl: a,
                                        authHeader: Y
                                    });
                                case 4:
                                    if (o = e.sent) {
                                        e.next = 8;
                                        break
                                    }
                                    return n(new Error("load themis failed")), e.abrupt("return");
                                case 8:
                                    r(o), e.next = 15;
                                    break;
                                case 11:
                                    e.prev = 11, e.t0 = e.catch(1), L = void 0, n(e.t0);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 11]
                        ])
                    })));
                    return function(r, t) {
                        return e.apply(this, arguments)
                    }
                }()), L
            }
            var z = t("VP0d"),
                V = window.__RUN_BY_ELECTRON__ || window.__RUN_BY_ELECTRON_BROWSER__;

            function $() {
                try {
                    var e = new URLSearchParams(window.location.search).get("hl");
                    if (e) return e;
                    var r = document.cookie.match(/(?:^|; )lang=([^;]*)/),
                        t = r ? decodeURIComponent(r[1]) : null;
                    if (t) {
                        var n = (0, z.A)(t.split("-"), 2),
                            o = n[0],
                            a = n[1];
                        return a ? "".concat(o, "-").concat(a.toUpperCase()) : t
                    }
                    var c = document.documentElement.getAttribute("lang");
                    if (c) return c;
                    var i = window.location.pathname.split("/").filter((function(e) {
                            return e
                        })),
                        s = i.length > 0 ? i[0] : null;
                    return s || (V && window.__ElectronDesktop ? window.__ElectronDesktop.getUserSettings().language : "en")
                } catch (xe) {
                    m.error("getLanguage error", xe)
                }
                return "en"
            }
            var W = M(),
                q = window.__RUN_BY_ELECTRON__ || window.__RUN_BY_ELECTRON_BROWSER__,
                Z = {
                    prod: "ad9c00e",
                    dev: "ad9c00e"
                }[W];

            function Q() {
                var e = "";
                try {
                    var r, t;
                    if (q) return e = null === window || void 0 === window || null === (r = window.__INJECTED_BY_ELECTRON__) || void 0 === r || null === (t = r.env) || void 0 === t ? void 0 : t.ACCOUNTS_SITE_HOST
                } catch (xe) {
                    m.error("get version domain error on electron", xe)
                }
                var n = location.host.split(".");
                return e = atob("YmluYW5jZS5jb20="), location.host.includes("localhost") ? "https://www.".concat(atob("cWExZmRnLm5ldA==")) : (e = n.length > 2 ? n.slice(-2).join(".") : document.domain, "https://www.".concat(e))
            }
            var X, ee = function(e, r) {
                    return Promise.race([(0, j.get)(e), new Promise((function(e, t) {
                        return setTimeout((function() {
                            return t(new Error("get timeout"))
                        }), r)
                    }))])
                },
                re = function() {
                    var e = (0, n.A)(c().mark((function e() {
                        var r, t, n;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 2;
                                    break;
                                case 2:
                                    return r = Q(), e.prev = 3, t = $(), e.next = 7, ee("".concat(r, "/").concat(t, "/mfa-ui/version"), 3e3);
                                case 7:
                                    return n = e.sent, e.abrupt("return", n);
                                case 11:
                                    throw e.prev = 11, e.t0 = e.catch(3), m.error(e.t0), m.report(new Error("get version network error, status: ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message))), e.t0;
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 11]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            const te = (0, n.A)(c().mark((function e() {
                var r, t, n, o, a, i;
                return c().wrap((function(e) {
                    for (;;) switch (e.prev = e.next) {
                        case 0:
                            if (e.prev = 0, !X) {
                                e.next = 3;
                                break
                            }
                            return e.abrupt("return", X);
                        case 3:
                            return r = !1, e.prev = 4, e.next = 7, J();
                        case 7:
                            return t = e.sent, e.next = 10, t.getFeatureGateResults();
                        case 10:
                            n = e.sent, o = n.BIDS_INTERCEPTOR_UPGRADE, a = n.BIDS_INTERCEPTOR_UPGRADE_DEV, "dev" === W ? (m.log("BIDS_INTERCEPTOR_UPGRADE_DEV", null === a || void 0 === a ? void 0 : a.pass), r = null === a || void 0 === a ? void 0 : a.pass) : (m.log("BIDS_INTERCEPTOR_UPGRADE", null === o || void 0 === o ? void 0 : o.pass), r = null === o || void 0 === o ? void 0 : o.pass), e.next = 19;
                            break;
                        case 16:
                            e.prev = 16, e.t0 = e.catch(4), m.error("\u274c BIDS_INTERCEPTOR_UPGRADE checking fail ", e.t0);
                        case 19:
                            if (r) {
                                e.next = 22;
                                break
                            }
                            return m.log("use stable version", {
                                useLatestVersion: r,
                                stableVersion: Z
                            }), e.abrupt("return", Z);
                        case 22:
                            return e.next = 24, re();
                        case 24:
                            if (!(i = e.sent).version) {
                                e.next = 28;
                                break
                            }
                            return X = i.version, e.abrupt("return", X);
                        case 28:
                            return m.error("new version get fail,use stable version", Z), e.abrupt("return", Z);
                        case 32:
                            return e.prev = 32, e.t1 = e.catch(0), m.error("get script version fail", e.t1), m.report(new Error("get script version fail ".concat(null === e.t1 || void 0 === e.t1 ? void 0 : e.t1.message))), e.abrupt("return", Z);
                        case 37:
                        case "end":
                            return e.stop()
                    }
                }), e, null, [
                    [0, 32],
                    [4, 16]
                ])
            })));

            function ne() {
                try {
                    var e = window.__RUN_BY_ELECTRON__ || window.__RUN_BY_ELECTRON_BROWSER__,
                        r = window.__DESKTOP_RUNTIME_API__,
                        t = window.__mp_private_api__;
                    if (e || t || r) return;
                    if (document.getElementById("switch-account-iframe")) return;
                    var n = $(),
                        o = "accounts.".concat(window.location.hostname.split(".").slice(-2).join("."));
                    location.host.includes("localhost") && (o = "accounts.".concat(atob("cWExZmRnLm5ldA==")));
                    var a = document.createElement("iframe");
                    a.style.display = "none", a.importance = "low", a.id = "switch-account-iframe", a.src = "https://".concat(o, "/").concat(n, "/login/switch/callback"), setTimeout((function() {
                        m.log("iframe loaded", document.readyState), document.body.appendChild(a)
                    }), 100);
                    var c = function(e) {
                        "refreshPageToParent" === e.data && window.location.reload()
                    };
                    window.removeEventListener("message", c), window.addEventListener("message", c, !1)
                } catch (xe) {
                    m.error(xe)
                }
            }
            setTimeout((function() {
                try {
                    0,
                    "complete" !== document.readyState ? (m.log("iframe from 'load' event"), window.addEventListener("load", ne)) : "complete" === document.readyState && (m.log("iframe from 'complete' event"), ne())
                }
                catch (xe) {
                    m.error("\u274c BIDSInterceptor initIframeToPage failed", xe), m.report("BIDSInterceptor initIframeToPage failed ".concat(null === xe || void 0 === xe ? void 0 : xe.message))
                }
            }), 2e3);
            var oe = !1;

            function ae(e) {
                return ce.apply(this, arguments)
            }

            function ce() {
                return ce = (0, n.A)(c().mark((function e(r) {
                    var t, n;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = r.staticHost, !oe) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (!window.$BIDS) {
                                    e.next = 6;
                                    break
                                }
                                return m.log("IdentityGlobalManager already exists, don't load again"), e.abrupt("return", window.$BIDS);
                            case 6:
                                return t || (t = w(), m.error("\u274c staticHost is required, use default staticHost", t)), e.prev = 7, e.next = 10, R.init();
                            case 10:
                                e.next = 16;
                                break;
                            case 12:
                                e.prev = 12, e.t0 = e.catch(7), m.error("\u274c BIDSInterceptor indexedDBStorage init failed", e.t0), m.report("BIDSInterceptor indexedDBStorage init failed ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message));
                            case 16:
                                try {
                                    ne()
                                } catch (xe) {
                                    m.error("\u274c BIDSInterceptor initIframeToPage failed", xe), m.report("BIDSInterceptor initIframeToPage failed ".concat(null === xe || void 0 === xe ? void 0 : xe.message))
                                }
                                return e.next = 19, te();
                            case 19:
                                return n = e.sent, e.prev = 20, m.time("Loaded remote IdentityGlobalManager"), e.next = 24, T({
                                    src: "".concat(t, "/static/mfa-ui.").concat(n, ".js"),
                                    version: n,
                                    cacheStoreKey: "identity",
                                    extraAttributes: {
                                        crossorigin: "true",
                                        type: "module"
                                    }
                                });
                            case 24:
                                m.timeEnd("Loaded remote IdentityGlobalManager"), m.report("Loaded remote IdentityGlobalManager ".concat(n)), e.next = 37;
                                break;
                            case 28:
                                return e.prev = 28, e.t1 = e.catch(20), m.error("\u274c load Remote Interceptor error", e.t1), m.log("fallback to stable version", Z), m.time("focus load remote IdentityGlobalManager stable"), m.report(new Error("load Remote Interceptor error ".concat(null === e.t1 || void 0 === e.t1 ? void 0 : e.t1.message, ". stable version: ").concat(Z))), e.next = 36, T({
                                    src: "".concat(t, "/static/mfa-ui.").concat(Z, ".js"),
                                    version: Z,
                                    cacheStoreKey: "identity-stable",
                                    extraAttributes: {
                                        crossorigin: "true",
                                        type: "module"
                                    }
                                });
                            case 36:
                                m.timeEnd("focus load remote IdentityGlobalManager stable");
                            case 37:
                                try {
                                    window.$BIDS.initConstants && window.$BIDS.initConstants({
                                        staticHost: t
                                    })
                                } catch (o) {
                                    m.error("\u274c initConstants error", o)
                                }
                                return e.abrupt("return", window.$BIDS);
                            case 39:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [7, 12],
                        [20, 28]
                    ])
                }))), ce.apply(this, arguments)
            }
            var ie = {
                retryCount: 0,
                hasStarted: !1,
                initSuccess: !1
            };

            function se(e) {
                return ue.apply(this, arguments)
            }

            function ue() {
                return ue = (0, n.A)(c().mark((function e(r) {
                    var t, n, o;
                    return c().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (t = r.initRemoteInterceptor, n = r.initLocalInterceptor, o = r.staticHost, !ie.initSuccess) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (!ie.hasStarted && !ie.initSuccess) {
                                    e.next = 5;
                                    break
                                }
                                return e.abrupt("return");
                            case 5:
                                return m.time("\u2705 BIDSInterceptor init successful time"), m.log("start initBIDSInterceptor"), ie.hasStarted = !0, e.prev = 8, e.next = 11, ae({
                                    staticHost: o
                                });
                            case 11:
                                t(), ie.initSuccess = !0, m.timeEnd("\u2705 BIDSInterceptor init successful time"), e.next = 31;
                                break;
                            case 16:
                                if (e.prev = 16, e.t0 = e.catch(8), m.error("\u274c BIDSInterceptor start retry", e.t0, {
                                        initState: ie
                                    }), m.report(new Error("BIDSInterceptor start retry ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message))), ie.retryCount++, ie.hasStarted = !1, !(ie.retryCount >= 3)) {
                                    e.next = 30;
                                    break
                                }
                                return m.error("\u274c BIDSInterceptor init failed", (0, g.A)({
                                    error: e.t0
                                }, ie)), m.report("BIDSInterceptor init failed ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message)), n(e.t0), ie.initSuccess = !0, e.abrupt("return");
                            case 30:
                                setTimeout((function() {
                                    return se(r)
                                }), 1e3 * ie.retryCount);
                            case 31:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [8, 16]
                    ])
                }))), ue.apply(this, arguments)
            }
            var le = t("iyUK"),
                pe = null,
                fe = !1;
            var de = function(e) {
                    var r = !1;
                    return function() {
                        for (var t = arguments.length, n = new Array(t), a = 0; a < t; a++) n[a] = arguments[a];
                        if (!r) return r = !0, e.apply(void 0, (0, o.A)(n))
                    }
                }((function(e) {
                    m.log("initialize from ".concat(e)), m.report("initialize from ".concat(e))
                })),
                ve = function() {
                    var e = (0, n.A)(c().mark((function e(r) {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return t = r.response, e.prev = 1, e.next = 4, (0, le.x8)(t, m);
                                case 4:
                                    if (!e.sent) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 7, h({
                                        checkFunction: function() {
                                            return "function" === typeof pe
                                        },
                                        interval: 100,
                                        timeout: 7e3
                                    });
                                case 7:
                                    return e.next = 9, pe(r);
                                case 9:
                                    t = e.sent;
                                case 10:
                                    e.next = 16;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(1), m.error("\u274c Timeout, abort blocking", t.url, e.t0), m.report(new Error("Timeout, abort blocking ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message)));
                                case 16:
                                    return e.abrupt("return", t);
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 12]
                        ])
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                me = function() {
                    var e = (0, n.A)(c().mark((function e(r) {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, ve(r);
                                case 2:
                                    return t = e.sent, e.abrupt("return", t);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                he = (function() {
                    var e = (0, n.A)(c().mark((function e(r) {
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", "");
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function(e) {
                    m.log("\ud83d\ude14\ud83d\ude14\ud83d\ude14\ud83d\ude14  Interceptor init fail"), m.report("\u274c init Interceptor fail,".concat(null === e || void 0 === e ? void 0 : e.message))
                }),
                we = function() {
                    try {
                        m.log("\ud83d\ude80\ud83d\ude80\ud83d\ude80 init Remote Interceptor"), window.$BIDS.MFARequestInterceptor, window.$BIDS.getMFAToken, me = window.$BIDS.BIDSInterceptor, pe = window.$BIDS.BIDSInterceptor
                    } catch (xe) {
                        m.error("\u274c init Remote Interceptor error", xe), he(xe)
                    }
                },
                ge = !!window.__mp_private_api__,
                be = function() {
                    var e = (0, n.A)(c().mark((function e(r) {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.prev = 0, e.next = 3;
                                    break;
                                case 3:
                                    if (!fe) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return", r.response);
                                case 5:
                                    if (!ge) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", r.response);
                                case 7:
                                    return de(r.source), r.globalOpts = r.globalOpts || {}, r.logger || (r.logger = m), r.http || (r.http = j), r.staticHost || r.globalOpts.staticHost || (r.staticHost = w(), m.log("interceptor can't get staticHost from globalOpts, use default staticHost", r.staticHost), m.report(new Error("interceptor can't get staticHost from globalOpts, use default staticHost"))), se({
                                        staticHost: r.staticHost || r.globalOpts.staticHost,
                                        initRemoteInterceptor: we,
                                        initLocalInterceptor: he
                                    }), e.next = 15, me(r);
                                case 15:
                                    return t = e.sent, e.abrupt("return", t);
                                case 19:
                                    return e.prev = 19, e.t0 = e.catch(0), m.report(new Error("remote BIDSInterceptor error ".concat(null === e.t0 || void 0 === e.t0 ? void 0 : e.t0.message))), e.abrupt("return", r.response);
                                case 23:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 19]
                        ])
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                ye = (function() {
                    var e = (0, n.A)(c().mark((function e(r) {
                        var t;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r.source = "MFAInterceptor", r.globalOpts = r.globalOpts || {}, !ye) {
                                        e.next = 4;
                                        break
                                    }
                                    return e.abrupt("return", r.response);
                                case 4:
                                    return e.next = 6, be(r);
                                case 6:
                                    return t = e.sent, e.abrupt("return", t);
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), !1),
                Ie = function(e) {
                    var r = e.staticHost;
                    return function() {
                        var e = (0, n.A)(c().mark((function e(t, n, o) {
                            return c().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return ye = !0, e.next = 3, be({
                                            response: t,
                                            apiOpts: n,
                                            opts: o,
                                            staticHost: r,
                                            source: "Pika"
                                        });
                                    case 3:
                                        return t = e.sent, e.abrupt("return", t);
                                    case 5:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })));
                        return function(r, t, n) {
                            return e.apply(this, arguments)
                        }
                    }()
                }
        },
        zvJu: (e, r, t) => {
            t.d(r, {
                o: () => n
            });
            var n = function(e) {
                location.origin.includes("localhost") && ("undefined" !== typeof(e || {}).df_2 && console.error("@binance/track warning: df_2 is lang code, cannot be modified, please use another field name!"))
            }
        },
        GlbY: (e, r, t) => {
            t.d(r, {
                Ay: () => n
            });
            const n = t("err1").A
        },
        err1: (e, r, t) => {
            t.d(r, {
                A: () => f,
                D: () => p
            });
            var n, o = t("BK7R"),
                a = t("QUKP"),
                c = t("gZfF"),
                i = t("blBx"),
                s = t("zvJu"),
                u = function(e, r, t) {
                    var n = "undefined" !== typeof e[r] ? e[r] : e[t];
                    if ("undefined" === typeof n) throw new Error("".concat(r, " is require"));
                    e[r] = n
                },
                l = function(e) {
                    var r = "undefined" === typeof e ? "undefined" : (0, i.A)(e);
                    return "number" === r || "string" === r || "boolean" === r
                },
                p = function(e) {
                    n = e
                };
            const f = function(e, r, t) {
                var i = null,
                    p = function(e, r, t) {
                        if ("string" === typeof e) {
                            (0, s.o)(r);
                            var n = r || {},
                                i = (n.df_2, (0, c.A)(n, ["df_2"]));
                            return {
                                info: (0, a.A)((0, o.A)({}, i), {
                                    eventName: e
                                }),
                                opt: t
                            }
                        }
                        if ("object" === typeof e) {
                            (0, s.o)(e);
                            var u = e || {};
                            return u.df_2, {
                                info: (0, c.A)(u, ["df_2"]),
                                opt: r
                            }
                        }
                        throw new Error("params is error")
                    }(e, r, t),
                    f = p.info,
                    d = void 0 === f ? {} : f,
                    v = p.opt,
                    m = d.eventName,
                    h = (0, c.A)(d, ["eventName"]);
                try {
                    u(d, "eventName"), u(d, "elementID", "elementId"), u(d, "pageName", "ScreenName"),
                        function(e) {
                            if ("object" === typeof e) Object.entries(e).forEach((function(e) {
                                if (Array.isArray(e[1])) {
                                    if (e[1].filter((function(e) {
                                            return !l(e)
                                        })).length > 0) throw new Error("extraInfo key:".concat(e[0], " array data limit string/number/boolean"))
                                } else if (!l(e[1])) throw new Error("extraInfo key:".concat(e[0], " limited string/number/array/boolean"))
                            }));
                            else if ("undefined" !== typeof e) throw new Error("extraInfo must be a object")
                        }(null === d || void 0 === d ? void 0 : d.extraInfo)
                } catch (g) {
                    i = g
                }
                var w = n && n(m, h, function(e) {
                    return "function" === typeof e ? {
                        callback: e
                    } : "object" === typeof e ? e : {}
                }(v));
                return i ? Promise.reject(i) : w
            }
        }
    }
]);
//# debugId=f4a93aa0-ad08-5034-a537-6595717e20b7