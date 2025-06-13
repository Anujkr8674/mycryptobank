! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "1005ab9c-e88e-52b9-9e0c-de2c4ec05a5e")
    } catch (e) {}
}();
(self.webpackChunkconvert_ui = self.webpackChunkconvert_ui || []).push([
    [239], {
        nn0X: (e, r, t) => {
            "use strict";
            t.d(r, {
                oP: () => c,
                uE: () => l
            });
            var n = t("DTvD"),
                i = t("/OND"),
                o = function(e) {
                    return e.cookies || {}
                },
                s = function() {
                    var e = (0, n.useRef)(null),
                        r = (0, i.wA)();
                    return e.current = (0, i.d4)(o), {
                        cookies: e.current,
                        saveCookie: (0, n.useCallback)((function(t, n) {
                            var i = "function" === typeof n ? n(e.current[t]) : n;
                            r.cookies.save({
                                key: t,
                                value: i
                            })
                        }), [])
                    }
                },
                a = "userPreferredCurrency",
                c = function() {
                    var e = s(),
                        r = e.cookies,
                        t = e.saveCookie;
                    return {
                        cachePreferFiat: r[a],
                        setCacheFiat: (0, n.useCallback)((function(e) {
                            t(a, e)
                        }), [])
                    }
                },
                l = function() {
                    return c().cachePreferFiat
                }
        },
        HIvj: (e, r, t) => {
            "use strict";
            t.d(r, {
                E7: () => w,
                PC: () => f,
                Py: () => d,
                vz: () => u,
                xN: () => b
            });
            var n = t("DTvD"),
                i = t("/OND"),
                o = t("nn0X"),
                s = function(e) {
                    var r;
                    return null === (r = e.userCenter) || void 0 === r ? void 0 : r.loginStatus
                },
                a = function(e) {
                    var r;
                    return null === (r = e.userCenter) || void 0 === r ? void 0 : r.userInfo
                },
                c = function(e) {
                    var r;
                    return null === (r = e.userCenter) || void 0 === r ? void 0 : r.fiatCurrency
                },
                l = function(e) {
                    var r;
                    return null === (r = e.userCenter) || void 0 === r ? void 0 : r.userPreferredCurrency
                },
                u = function() {
                    return (0, i.d4)(s, i.bN) || {}
                },
                d = function() {
                    return (0, i.d4)(a, i.bN) || {}
                },
                f = function() {
                    return (0, i.d4)(c, i.bN) || {}
                },
                p = function() {
                    return (0, i.d4)(l, i.bN) || {}
                },
                w = function() {
                    var e = u().isLoggedIn,
                        r = (0, o.oP)().setCacheFiat,
                        t = p().configName;
                    (0, n.useEffect)((function() {
                        e && t && r(t)
                    }), [e, t])
                },
                b = function() {
                    var e = (0, i.wA)(),
                        r = u().isLoggedIn,
                        t = (0, o.oP)(),
                        s = t.cachePreferFiat,
                        a = t.setCacheFiat,
                        c = p().configName;
                    return {
                        userFiat: (r ? c : s) || s,
                        setUseFiat: (0, n.useMemo)((function() {
                            return r ? function(r) {
                                return e.userCenter.updateCurrentFiat(r)
                            } : function(e) {
                                return a(e)
                            }
                        }), [r])
                    }
                }
        },
        zvJu: (e, r, t) => {
            "use strict";
            t.d(r, {
                o: () => n
            });
            var n = function(e) {
                location.origin.includes("localhost") && ("undefined" !== typeof(e || {}).df_2 && console.error("@binance/track warning: df_2 is lang code, cannot be modified, please use another field name!"))
            }
        },
        wmq8: (e, r, t) => {
            "use strict";
            t.d(r, {
                Y: () => p,
                a: () => f
            });
            var n = t("sViW"),
                i = t("BK7R"),
                o = t("3yYM"),
                s = t.n(o),
                a = t("T3Fm"),
                c = t("zJWh"),
                l = t("tbM7"),
                u = t("BMJD"),
                d = t("qAxa"),
                f = function(e) {
                    if (a.o) {
                        var r = window.location.host;
                        (r.includes("qa1fdg") || r.includes("devfdg") || r.includes("localhost")) && console.info("datalayer", e), window.dataLayer = window.dataLayer || [], "y" === c.U.read("data_opt_out") || window.dataLayer.push(e)
                    }
                },
                p = function() {
                    var e = (0, n.A)(s().mark((function e(r, t) {
                        var n, o, p, w, b, m, g;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = r.getUserId, o = r.cancel, p = r.extraParams, a.o && !o && t) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (w = window.location.pathname.match(/\/[a-z]{2}(-[a-zA-Z]{2})?(\/.*)?/), b = w ? w[2] : "/", m = {
                                            pageName: b,
                                            bncUUID: c.U.read("bnc-uuid")
                                        }, !window.location.origin.startsWith("https")) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 9, (0, l.CY)();
                                case 9:
                                    if (!e.sent) {
                                        e.next = 23;
                                        break
                                    }
                                    if (!n) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 14, n();
                                case 14:
                                    e.t0 = e.sent, e.next = 20;
                                    break;
                                case 17:
                                    return e.next = 19, (0, u.Tc)();
                                case 19:
                                    e.t0 = e.sent.userId;
                                case 20:
                                    g = e.t0, m.userId = g, (0, d.A)(g);
                                case 23:
                                    m = (0, i.A)({}, m, "object" === typeof p ? p : {}), f({
                                        event: "page loading",
                                        page_load_info: m
                                    });
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r, t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        qAxa: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => o,
                b: () => i
            });
            var n = function(e) {
                    console.warn("You login ".concat(e, ",but never init sensor or ga"))
                },
                i = function(e) {
                    n = e
                };
            const o = function(e) {
                return n(e)
            }
        },
        err1: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => f,
                D: () => d
            });
            var n, i = t("BK7R"),
                o = t("QUKP"),
                s = t("gZfF"),
                a = t("blBx"),
                c = t("zvJu"),
                l = function(e, r, t) {
                    var n = "undefined" !== typeof e[r] ? e[r] : e[t];
                    if ("undefined" === typeof n) throw new Error("".concat(r, " is require"));
                    e[r] = n
                },
                u = function(e) {
                    var r = "undefined" === typeof e ? "undefined" : (0, a.A)(e);
                    return "number" === r || "string" === r || "boolean" === r
                },
                d = function(e) {
                    n = e
                };
            const f = function(e, r, t) {
                var a = null,
                    d = function(e, r, t) {
                        if ("string" === typeof e) {
                            (0, c.o)(r);
                            var n = r || {},
                                a = (n.df_2, (0, s.A)(n, ["df_2"]));
                            return {
                                info: (0, o.A)((0, i.A)({}, a), {
                                    eventName: e
                                }),
                                opt: t
                            }
                        }
                        if ("object" === typeof e) {
                            (0, c.o)(e);
                            var l = e || {};
                            return l.df_2, {
                                info: (0, s.A)(l, ["df_2"]),
                                opt: r
                            }
                        }
                        throw new Error("params is error")
                    }(e, r, t),
                    f = d.info,
                    p = void 0 === f ? {} : f,
                    w = d.opt,
                    b = p.eventName,
                    m = (0, s.A)(p, ["eventName"]);
                try {
                    l(p, "eventName"), l(p, "elementID", "elementId"), l(p, "pageName", "ScreenName"),
                        function(e) {
                            if ("object" === typeof e) Object.entries(e).forEach((function(e) {
                                if (Array.isArray(e[1])) {
                                    if (e[1].filter((function(e) {
                                            return !u(e)
                                        })).length > 0) throw new Error("extraInfo key:".concat(e[0], " array data limit string/number/boolean"))
                                } else if (!u(e[1])) throw new Error("extraInfo key:".concat(e[0], " limited string/number/array/boolean"))
                            }));
                            else if ("undefined" !== typeof e) throw new Error("extraInfo must be a object")
                        }(null === p || void 0 === p ? void 0 : p.extraInfo)
                } catch (h) {
                    a = h
                }
                var g = n && n(b, m, function(e) {
                    return "function" === typeof e ? {
                        callback: e
                    } : "object" === typeof e ? e : {}
                }(w));
                return a ? Promise.reject(a) : g
            }
        },
        P3FW: (e, r, t) => {
            "use strict";
            t.d(r, {
                s9: () => n.s9,
                x6: () => n.x6
            });
            var n = t("MII3");
            t("rsqs"), t("RVij")
        },
        Xuwk: (e, r, t) => {
            "use strict";
            t.d(r, {
                default: () => ce
            });
            var n = t("BK7R"),
                i = t("jg1C"),
                o = t("DTvD"),
                s = t("g80r"),
                a = t("dItC"),
                c = t("Srb9"),
                l = t("BK9r"),
                u = t("tKUM"),
                d = t("/OND"),
                f = t("HIvj"),
                p = t("nn0X"),
                w = function(e) {
                    var r = e.lng,
                        t = e.children,
                        n = (0, d.wA)(),
                        i = (0, f.vz)().isLoggedIn,
                        s = (0, p.uE)();
                    return (0, f.E7)(), o.useEffect((function() {
                        n.global.queryRegion(), window.__RUN_BY_ELECTRON__ || n.cookies.loadCurrency(r), n.userCenter.queryCurrency(), window.__RUN_BY_ELECTRON__ || n.userCenter.checkLogin()
                    }), []), o.useEffect((function() {
                        i && !window.__RUN_BY_ELECTRON__ && (n.userCenter.queryUserInfo(), n.userCenter.queryUserConfig())
                    }), [i]), o.useEffect((function() {
                        if (void 0 !== i) {
                            var e, r = null !== (e = null === s || void 0 === s ? void 0 : s.split("_")[0]) && void 0 !== e ? e : "USD";
                            n.global.queryRestrictedBusinessKeys(r)
                        }
                    }), [r, s, i]), t
                };
            const b = o.memo(w);
            var m, g = t("c+5G"),
                h = t("tEf9"),
                v = t("sViW"),
                y = t("3yYM"),
                x = t.n(y),
                k = t("XMC1"),
                _ = function() {
                    var e = (0, v.A)(x().mark((function e(r) {
                        return x().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if ((0, k.$s)()) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.next = 3, (0, k.lZ)({
                                        sourceUrl: r.sourceUrl,
                                        version: r.version || "V1",
                                        isHttp: r.isHttp,
                                        getWsToken: r.getWsToken,
                                        getSessionInfo: function(e) {
                                            return r.getSessionInfo().then((function(r) {
                                                return r[e]
                                            }))
                                        },
                                        track: r.track || function(e, r) {
                                            console.log(e + r.toString())
                                        },
                                        clientType: r.clientType
                                    });
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(r) {
                        return e.apply(this, arguments)
                    }
                }(),
                A = t("gZfF"),
                E = t("QUKP"),
                C = t("T3Fm"),
                j = t("zJWh"),
                O = t("vpUY"),
                N = t("Utn3"),
                S = t("Cjys"),
                P = t("zvJu"),
                R = (t("3as9"), (0, O.S)().isHybrid);
            ! function(e) {
                e.Electron = "electron", e.Hybrid = "Hybrid", e.Web = "Web"
            }(m || (m = {}));
            var T, z, I = function() {
                    return /electron/i.test(navigator.userAgent) ? m.Electron : R ? m.Hybrid : m.Web
                },
                D = function(e, r) {
                    var t = document.createElement("script");
                    t.setAttribute("data-ot-ignore", "true"), t.setAttribute("class", "optanon-category-C0001");
                    var n = document.getElementsByTagName("script")[0];
                    t.async = !0, t.src = e, t.onload = r, (null === n || void 0 === n ? void 0 : n.parentNode) ? n.parentNode.insertBefore(t, n) : document.body.appendChild(t)
                },
                L = [],
                U = "UA-162512367-1",
                M = ["track", "quick", "register", "registerPage", "registerOnce", "clearAllRegister", "trackSignup", "trackAbtest", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "use"],
                F = (0, O.S)().isHybrid,
                $ = (0, S.vt)((0, S.Q)(N)),
                B = function(e) {
                    var r = e.sdk_url,
                        t = void 0 === r ? "https://bin.bnbstatic.com/static/sensors/sensorsdata@1.15.26.js" : r,
                        i = e.heatmap_url,
                        o = void 0 === i ? "https://bin.bnbstatic.com/static/sensors/heatmap@1.15.26.js" : i,
                        s = e.name,
                        a = void 0 === s ? "sensor" : s,
                        c = (0, A.A)(e, ["sdk_url", "heatmap_url", "name"]);
                    if (t = t.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), o = o.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), window.sensorsDataAnalytic201505 = a, !window[a]) {
                        window[a] = window[a] || function(e) {
                            return function() {
                                for (var r = arguments.length, t = new Array(r), n = 0; n < r; n++) t[n] = arguments[n];
                                (window[a]._q = window[a]._q || []).push([e, t])
                            }
                        }, T = window[a];
                        for (var l = 0; l < M.length; l++) T[M[l]] = T.call(null, M[l]);
                        T._t || (D(t, (function() {
                            return T = window[a]
                        })), T.para = (0, E.A)((0, n.A)({}, c), {
                            heatmap_url: o
                        }))
                    }
                },
                q = function() {
                    return function() {
                        var e = Object.create(null);
                        M.forEach((function(r) {
                            e[r] = {
                                configurable: !0,
                                get: function() {
                                    return T ? T[r] : (C.o && console.error("error: run ".concat(r, " handler after init")), console.log("empty", T), function() {})
                                }
                            }
                        }));
                        var r = Object.create(null);
                        return Object.defineProperties(r, e), r.init = C.o ? B : function() {}, r
                    }()
                },
                H = function() {
                    for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                    var n;
                    (n = console).log.apply(n, ["ssr call"].concat((0, h.A)(r)))
                },
                V = function() {
                    "y" === j.U.read("data_opt_out") ? window["ga-disable-".concat(U)] = !0 : window["ga-disable-".concat(U)] = !1
                },
                K = function(e) {
                    var r = e.sdk_url,
                        t = void 0 === r ? "https://www.google-analytics.com/analytics.js" : r,
                        n = e.name,
                        i = void 0 === n ? "ga" : n;
                    window.GoogleAnalyticsObject = i, window[i] || (window[i] = window[i] || function() {
                        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                        (window[i].q = window[i].q || []).push(r)
                    }, window[i].l = +new Date), document.querySelector("script[src*=analytics]") || D(t, (function() {
                        return z = window[i]
                    })), (z = window[i])("create", U, "auto")
                };
            const Z = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (C.o) {
                    V(), K(e);
                    var r = function() {
                        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                        z.apply(void 0, (0, h.A)(r))
                    };
                    return r.track = function(e, r, t) {
                        z("send", {
                            hitType: "event",
                            eventCategory: e,
                            eventAction: null === r || void 0 === r ? void 0 : r.elementID,
                            eventLabel: window.location,
                            custom_dimension: r,
                            hitCallback: t
                        })
                    }, r.login = function(e) {
                        z("set", "userId", e)
                    }, r
                }
                var t = function() {};
                return t.track = H, t.login = H, t
            };
            var Y = t("err1"),
                W = t("qAxa"),
                G = t("wmq8"),
                Q = t("pu3o"),
                X = t.n(Q),
                J = function() {};
            const ee = function(e) {
                var r = e.sensorsConfig,
                    t = e.ableGA,
                    i = e.otherDisabledEvent,
                    o = void 0 === i ? L : i,
                    s = e.pageViewLayerConfig,
                    a = void 0 === s ? {} : s,
                    c = e.autoLogin,
                    l = void 0 === c || c;
                J();
                var u, d, f = [],
                    p = function(e, r, t) {
                        if ((null === r || void 0 === r ? void 0 : r.elementId) && (r.elementID = r.elementId, delete r.elementId), (null === r || void 0 === r ? void 0 : r.extraInfo) && (r.extraInfo = JSON.stringify(r.extraInfo)), location.origin.includes("localhost")) {
                            if (e.startsWith("$")) throw new Error('event name must not start with "$"');
                            if (Number.isInteger(e[0])) throw new Error("event name cannot start with a number");
                            if (!/^[0-9a-zA-Z_\$]+$/.test(e)) throw new Error("event name can only contain numbers/letters/underscores/$")
                        }
                        u.track(e, r, t)
                    };
                try {
                    window.__PIKA_TRACK__ && (u = window.__PIKA_TRACK__.sensors, f.push(p))
                } catch (D) {}
                if (!window.__PIKA_TRACK__ && r) {
                    var w = r.staticHost,
                        b = (r.update, r.old),
                        g = (r.test, r.publicParams),
                        v = r.initParams,
                        y = (0, A.A)(r, ["staticHost", "update", "old", "test", "publicParams", "initParams"]);
                    u = q();
                    var x = (0, n.A)({
                        name: "SensorsSdk",
                        send_type: "beacon",
                        use_client_time: !0,
                        datasend_timeout: 1e4,
                        is_track_single_page: !0,
                        app_js_bridge: {
                            white_list: (0, h.A)(new Set([null === y || void 0 === y ? void 0 : y.server_url, "https://sensors.binance.cloud/sa?project=binance", "https://api.saasexch.com/bapi/fe/usd/sa?project=binance", "https://api.saasexch.cc/bapi/fe/usd/sa?project=binance", "https://api.saasexch.co/bapi/fe/usd/sa?project=binance", "https://api.saasexch.io/bapi/fe/usd/sa?project=binance", "https://api.saasexch.info/bapi/fe/usd/sa?project=binance"].filter(Boolean)))
                        },
                        show_log: !1,
                        heatmap: {
                            collect_tags: {
                                div: !0
                            }
                        }
                    }, y);
                    w && (b ? Object.assign(x, {
                        sdk_url: "".concat(w, "/static/sensors/sensorsdata@1.15.26.js"),
                        heatmap_url: "".concat(w, "/static/sensors/heatmap@1.15.26.js"),
                        vtrack_url: "".concat(w, "/static/sensors/vtrack.min.js")
                    }) : Object.assign(x, {
                        sdk_url: "".concat(w, "/static/sensors/sensorsdata@1.26.12.js"),
                        heatmap_url: "".concat(w, "/static/sensors/heatmap@1.26.12.js"),
                        vtrack_url: "".concat(w, "/static/sensors/vtrack@1.26.12.js")
                    }));
                    try {
                        var k, _, O, N = (null === (_ = null === y || void 0 === y || null === (k = y.server_url) || void 0 === k ? void 0 : k.split("?")) || void 0 === _ ? void 0 : _[1]) || "",
                            S = X().parse(N).project;
                        S && (O = "https://ss.datasconsole.com?project=".concat(S)), O && (x.web_url = O)
                    } catch (D) {}
                    v && Object.assign(x, v), u.init(x),
                        function(e, r) {
                            if (C.o) {
                                (0, P.o)(r);
                                var t = /\/([a-z]{2}(-[a-zA-Z]{2})?)(\/)?/,
                                    i = window.location,
                                    o = i.pathname,
                                    s = i.hash,
                                    a = o.match(t),
                                    c = m.Web,
                                    l = a ? a[1] : String();
                                if (I() === m.Electron && (a = s.match(t), l = a ? a[1] : String(), c = m.Electron), F) {
                                    var u = !0,
                                        d = [],
                                        f = e.quick;
                                    Object.defineProperty(e, "quick", {
                                        get: function() {
                                            return function(e) {
                                                u ? d.push((function() {
                                                    return f(e)
                                                })) : f(e)
                                            }
                                        }
                                    }), $.getAppConfig().then((function(t) {
                                        var i = t.project_type;
                                        u = !1, e.registerPage((0, E.A)((0, n.A)({
                                            $url: window.location.href,
                                            $bot_name: j.U.read("bnc-uuid"),
                                            df_1: i,
                                            df_fvideoid: j.U.read("BNC_FV_KEY")
                                        }, r), {
                                            df_2: l,
                                            theme: j.U.read("theme")
                                        })), d.forEach((function(e) {
                                            return e()
                                        }))
                                    }))
                                } else e.registerPage((0, E.A)((0, n.A)({
                                    $url: window.location.href,
                                    $bot_name: j.U.read("bnc-uuid"),
                                    df_1: c,
                                    df_fvideoid: j.U.read("BNC_FV_KEY")
                                }, r), {
                                    df_2: l,
                                    theme: j.U.read("theme")
                                }))
                            }
                        }(u, g), u.use("PageLeave", {
                            custom_props: {},
                            heartbeat_interval_time: 5
                        }), f.push(p)
                }
                if (t) {
                    var R;
                    d = Z();
                    f.push((function() {
                        for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                        return (R = d).track.apply(R, (0, h.A)(r))
                    }))
                }
                if (f.length) {
                    var T = function(e, r, t) {
                        var i = [],
                            s = function() {
                                var e = {
                                    gaTrack: "gaDisabled",
                                    bTrack: "bTrackDisabled",
                                    sensorsTrack: "sensorsDisabled"
                                };
                                return function(r, t) {
                                    return !t[e[r]]
                                }
                            }();
                        return function(e, r) {
                            return !Array.isArray(r) || !r.find((function(r) {
                                return r === e
                            }))
                        }(e, o) && f.forEach((function(o) {
                            s(o.name, t) && i.push(function(e, r, t) {
                                return new Promise((function(i) {
                                    t(e, (0, n.A)({}, r), (function(e) {
                                        return i({
                                            type: t.name,
                                            success: "boolean" !== typeof e || e
                                        })
                                    })), setTimeout((function() {
                                        i({
                                            type: t.name,
                                            success: !1
                                        })
                                    }), 5e3)
                                }))
                            }(e, r, o))
                        })), Promise.all(i).then(null === t || void 0 === t ? void 0 : t.callback), i[i.length - 1]
                    };
                    T && (0, Y.D)(T), (0, W.b)((function(e) {
                        u && u.login(e), d && d.login(e)
                    }))
                }
                try {
                    if (window.__PIKA_TRACK__) return window.__PIKA_TRACK__
                } catch (U) {}(0, G.Y)(a, l);
                try {
                    var z = Object.create(u);
                    Object.defineProperty(z, "quick", {
                        configurable: !0,
                        value: function() {}
                    }), window.__PIKA_TRACK__ = {
                        sensors: z,
                        ga: d
                    }
                } catch (M) {}
                return {
                    sensors: u,
                    ga: d
                }
            };
            var re = t("6p3b"),
                te = t("iG7D"),
                ne = function() {
                    return (0, o.useEffect)((function() {
                        try {
                            var e = ee({
                                sensorsConfig: {
                                    server_url: g.LD,
                                    staticHost: g.K5,
                                    batch_send: !0,
                                    heatmap: {
                                        useCapture: !0,
                                        collect_elements: "all",
                                        scroll_notice_map: "default",
                                        clickmap: "default",
                                        custom_property: function(e) {
                                            if (e) return {
                                                tag: "convert"
                                            }
                                        }
                                    },
                                    preset_properties: {
                                        url: !0
                                    },
                                    show_log: !0
                                },
                                ableGA: "test" !== g.Zu
                            }).sensors;
                            e.quick("autoTrack", (0, n.A)({}, {
                                tag: "convert",
                                version: g.Hw
                            }, g.Ui ? {
                                channel: g.Ui
                            } : {})), (0, te.cc)(e)
                        } catch (r) {
                            console.log("senor init error", r)
                        }
                    }), []), null
                },
                ie = t("oVQP"),
                oe = t("ulLh"),
                se = t("cPbI"),
                ae = (t("P3FW"), t("HS2I"));
            const ce = function() {
                var e = (0, c.L)(),
                    r = e.lngRegion,
                    t = (e.i18n, (0, ae.useTheme)().theme),
                    d = "dark" === t ? ie.XT : ie.BB;
                (0, o.useLayoutEffect)((function() {
                    ! function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "en",
                            r = window.navigator.userAgent.toLowerCase().includes("electron"),
                            t = {
                                "bnc-uuid": j.U.read("bnc-uuid"),
                                lang: r ? String(e).toLowerCase() : j.U.read("lang"),
                                cr00: !!r || j.U.read("cr00")
                            },
                            n = ee({
                                sensorsConfig: {
                                    staticHost: g.K5,
                                    server_url: g.LD,
                                    is_track_single_page: function() {
                                        return {
                                            canary: "gamma"
                                        }
                                    }
                                },
                                ableGA: "test" !== g.Zu,
                                otherDisabledEvent: ["pageView"]
                            }).sensors,
                            i = Math.random() < Number(g.wT);
                        _({
                            clientType: "web",
                            isHttp: i,
                            getSessionInfo: function() {
                                return new Promise((function(e) {
                                    return e(t)
                                }))
                            },
                            track: function() {
                                for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++) r[t] = arguments[t];
                                var i;
                                (i = n).track.apply(i, (0, h.A)(r))
                            },
                            sourceUrl: "".concat(g.$L, "/market")
                        })
                    }(r)
                }), []);
                var f = (0, u.dir)(r),
                    p = "rtl" === f;
                return (0, i.jsx)(s._y, {
                    value: (0, a.A)({
                        stylisPlugins: [p ? re.Ay : void 0]
                    }),
                    children: (0, i.jsx)(oe.A, {
                        mode: t,
                        scope: !0,
                        isRTL: p,
                        className: f,
                        themeColors: (0, n.A)({}, d),
                        children: (0, i.jsx)(se.A, {
                            children: (0, i.jsxs)(b, {
                                lng: r,
                                children: [(0, i.jsx)(ne, {}), (0, i.jsx)(l.Tp, {})]
                            })
                        })
                    })
                })
            }
        },
        iG7D: (e, r, t) => {
            "use strict";
            t.d(r, {
                cc: () => A,
                u4: () => E,
                HY: () => j
            });
            var n = t("BK7R"),
                i = t("QUKP"),
                o = t("VP0d"),
                s = t("zJWh"),
                a = t("c+5G");
            var c, l = t("kbMF"),
                u = t("ZFFV"),
                d = t.n(u),
                f = (t("c6Y9"), t("nsO7")),
                p = d()().fetch,
                w = new l.A,
                b = "monitor-uid",
                m = [],
                g = w.get(b),
                h = function() {
                    if (m.length) try {
                        p("https://frontend-m.binance.cloud/monitor/v1/log", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "data-list": m
                            })
                        }).then((function() {
                            m = []
                        }))
                    } catch (e) {
                        console.error("Monitor failed to send log.")
                    }
                },
                v = (0, f.throttle)(h, 1500),
                y = function(e) {
                    var r = (0, a.L2)();
                    m.push((0, n.A)({
                        p: window.location.href,
                        d: Date.now(),
                        pathname: r,
                        uid: g
                    }, e)), v()
                },
                x = new Set,
                k = "";
            k = function(e, r) {
                for (var t = document.getElementsByTagName("meta"), n = 0; n < t.length; n++)
                    if (t[n].getAttribute(e) === r) return t[n].getAttribute("content");
                return ""
            }("http-equiv", "etag");
            var _ = function(e) {
                    c && (x.forEach((function(r) {
                        var t = (0, o.A)(r, 2),
                            a = t[0],
                            l = t[1],
                            u = (0, n.A)((0, i.A)((0, n.A)({}, l), {
                                etag: k,
                                business: "convert"
                            }), {
                                bnc_uuid: s.U.read("bnc-uuid")
                            });
                        c.track(a, u), e && y((0, n.A)({
                            t: a
                        }, u))
                    })), x.clear())
                },
                A = function(e) {
                    c = e, _(!0)
                },
                E = function(e, r) {
                    var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    a.S$ || (x.add([e, r]), _(t))
                };

            function C(e) {
                var r = e.match(/^\/[a-z]{2}(-[a-zA-Z]{2})?(\/.*)?$/);
                return r ? r[2] || "/" : e
            }
            var j = function(e, r) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    o = document.referrer,
                    s = (0, i.A)((0, n.A)({}, r), {
                        $referrer: "",
                        $referrer_host: "",
                        referrerURL: ""
                    });
                if (o) {
                    var a = new URL(o);
                    s.$referrer = o, s.$referrer_host = a.host, s.referrerURL = C(a.pathname)
                }
                E(e, s, t)
            }
        },
        cPbI: (e, r, t) => {
            "use strict";
            t.d(r, {
                A: () => l,
                r: () => c
            });
            var n = t("wIZF"),
                i = t("DTvD"),
                o = t.n(i),
                s = t("hyZw"),
                a = (0, i.createContext)({
                    getCoachMark: s.es,
                    showCoachMark: s.es,
                    preCoachMark: s.es,
                    nextCoachMark: s.es,
                    closeCoachMark: s.es
                }),
                c = function() {
                    return o().useContext(a)
                };
            const l = function(e) {
                var r = e.children,
                    t = o().useState({}),
                    s = t[0],
                    c = t[1],
                    l = (0, i.useCallback)((function(e) {
                        c((function(r) {
                            var t = r.index,
                                i = void 0 === t ? 0 : t,
                                o = Math.max(i + e, 0);
                            return r.id ? (0, n.__assign)((0, n.__assign)({}, r), {
                                index: o
                            }) : r
                        }))
                    }), []),
                    u = {};
                return u.getCoachMark = (0, i.useCallback)((function(e) {
                    return s.id === e ? s.index : void 0
                }), [s]), u.showCoachMark = (0, i.useCallback)((function(e) {
                    return c({
                        id: e,
                        index: 0
                    })
                }), []), u.preCoachMark = (0, i.useCallback)((function() {
                    return l(-1)
                }), []), u.nextCoachMark = (0, i.useCallback)((function() {
                    return l(1)
                }), []), u.closeCoachMark = (0, i.useCallback)((function() {
                    return c({})
                }), []), o().createElement(a.Provider, {
                    value: u,
                    children: r
                })
            }
        },
        fALc: (e, r) => {
            var t;

            function n(e, r) {
                var t = [],
                    n = 0;

                function i(e) {
                    return t.push(e), r
                }

                function o() {
                    return t[n++]
                }
                return {
                    tokenize: function(r) {
                        return r.replace(e, i)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + r + ")", "g"), o)
                    }
                }
            }
            t = new function() {
                var e = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    r = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    t = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    i = "(?:[_a-z0-9-]|[^\\u0020-\\u007e]|" + t + ")",
                    o = e + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",
                    s = "((?:-?" + o + ")|(?:inherit|auto))",
                    a = "(#?" + i + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    c = "(?:[!#$%&*-~]|[^\\u0020-\\u007e]|" + t + ")*?",
                    l = "(?!(" + i + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    u = "(?!" + c + "['\"]?\\s*\\))",
                    d = "(?=" + c + "['\"]?\\s*\\))",
                    f = "(\\s*(?:!important\\s*)?[;}])",
                    p = new RegExp("`TMP`", "g"),
                    w = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    b = new RegExp("(" + r + l + "[^;}]+;?)", "gi"),
                    m = new RegExp("(" + r + "[^\\}]*?})", "gi"),
                    g = new RegExp("(direction\\s*:\\s*)ltr", "gi"),
                    h = new RegExp("(direction\\s*:\\s*)rtl", "gi"),
                    v = new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])" + u + l, "gi"),
                    y = new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])" + u + l, "gi"),
                    x = new RegExp("(^|[^a-zA-Z])(left)" + d, "gi"),
                    k = new RegExp("(^|[^a-zA-Z])(right)" + d, "gi"),
                    _ = new RegExp("(^|[^a-zA-Z])(ltr)" + d, "gi"),
                    A = new RegExp("(^|[^a-zA-Z])(rtl)" + d, "gi"),
                    E = new RegExp("(^|[^a-zA-Z])([ns]?)e-resize", "gi"),
                    C = new RegExp("(^|[^a-zA-Z])([ns]?)w-resize", "gi"),
                    j = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + s + "(\\s+)" + s + "(\\s+)" + s + "(\\s+)" + s + f, "gi"),
                    O = new RegExp("((?:-color|border-style)\\s*:\\s*)" + a + "(\\s+)" + a + "(\\s+)" + a + "(\\s+)" + a + f, "gi"),
                    N = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + o + ")", "gi"),
                    S = new RegExp("(background-position-x\\s*:\\s*)(-?" + e + "%)", "gi"),
                    P = new RegExp("(border-radius\\s*:\\s*)" + s + "(?:(?:\\s+" + s + ")(?:\\s+" + s + ")?(?:\\s+" + s + ")?)?(?:(?:(?:\\s*\\/\\s*)" + s + ")(?:\\s+" + s + ")?(?:\\s+" + s + ")?(?:\\s+" + s + ")?)?" + f, "gi"),
                    R = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + s, "gi"),
                    T = new RegExp("(text-shadow\\s*:\\s*)" + s + "(\\s*)" + a, "gi"),
                    z = new RegExp("(text-shadow\\s*:\\s*)" + a + "(\\s*)" + s, "gi"),
                    I = new RegExp("(text-shadow\\s*:\\s*)" + s, "gi"),
                    D = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + s + "(\\s*\\))", "gi"),
                    L = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + s + "((?:\\s*,\\s*" + s + "){0,2}\\s*\\))", "gi");

                function U(e, r, t) {
                    var n, i;
                    return "%" === t.slice(-1) && (-1 !== (n = t.indexOf(".")) ? (i = t.length - n - 2, t = (t = 100 - parseFloat(t)).toFixed(i) + "%") : t = 100 - parseFloat(t) + "%"), r + t
                }

                function M(e) {
                    switch (e.length) {
                        case 4:
                            e = [e[1], e[0], e[3], e[2]];
                            break;
                        case 3:
                            e = [e[1], e[0], e[1], e[2]];
                            break;
                        case 2:
                            e = [e[1], e[0]];
                            break;
                        case 1:
                            e = [e[0]]
                    }
                    return e.join(" ")
                }

                function F(e, r) {
                    var t = [].slice.call(arguments),
                        n = t.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        i = t.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        o = t[10] || "";
                    return r + (i.length ? M(n) + " / " + M(i) : M(n)) + o
                }

                function $(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function B(e, r, t) {
                    return r + $(t)
                }

                function q(e, r, t, n, i) {
                    return r + t + $(n) + i
                }

                function H(e, r, t, n, i) {
                    return r + t + n + $(i)
                }
                return {
                    transform: function(e, r) {
                        var t = new n(b, "`NOFLIP_SINGLE`"),
                            i = new n(m, "`NOFLIP_CLASS`"),
                            o = new n(w, "`COMMENT`");
                        return e = o.tokenize(i.tokenize(t.tokenize(e.replace("`", "%60")))), r.transformDirInUrl && (e = e.replace(_, "$1`TMP`").replace(A, "$1ltr").replace(p, "rtl")), r.transformEdgeInUrl && (e = e.replace(x, "$1`TMP`").replace(k, "$1left").replace(p, "right")), e = e.replace(g, "$1`TMP`").replace(h, "$1ltr").replace(p, "rtl").replace(v, "$1`TMP`").replace(y, "$1left").replace(p, "right").replace(E, "$1$2`TMP`").replace(C, "$1$2e-resize").replace(p, "w-resize").replace(P, F).replace(R, B).replace(T, H).replace(z, H).replace(I, B).replace(D, q).replace(L, q).replace(j, "$1$2$3$8$5$6$7$4$9").replace(O, "$1$2$3$8$5$6$7$4$9").replace(N, U).replace(S, U), e = t.detokenize(i.detokenize(o.detokenize(e)))
                    }
                }
            }, e.exports ? r.transform = function(e, r, n) {
                var i;
                return "object" === typeof r ? i = r : (i = {}, "boolean" === typeof r && (i.transformDirInUrl = r), "boolean" === typeof n && (i.transformEdgeInUrl = n)), t.transform(e, i)
            } : window.cssjanus = t
        },
        cYYr: e => {
            "use strict";
            var r = String.prototype.replace,
                t = /%20/g,
                n = "RFC1738",
                i = "RFC3986";
            e.exports = {
                default: i,
                formatters: {
                    RFC1738: function(e) {
                        return r.call(e, t, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: n,
                RFC3986: i
            }
        },
        pu3o: (e, r, t) => {
            "use strict";
            var n = t("SYP+"),
                i = t("w7lK"),
                o = t("cYYr");
            e.exports = {
                formats: o,
                parse: i,
                stringify: n
            }
        },
        w7lK: (e, r, t) => {
            "use strict";
            var n = t("V/Lb"),
                i = Object.prototype.hasOwnProperty,
                o = Array.isArray,
                s = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: n.decode,
                    delimiter: "&",
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                a = function(e) {
                    return e.replace(/&#(\d+);/g, (function(e, r) {
                        return String.fromCharCode(parseInt(r, 10))
                    }))
                },
                c = function(e, r) {
                    return e && "string" === typeof e && r.comma && e.indexOf(",") > -1 ? e.split(",") : e
                },
                l = function(e, r, t, n) {
                    if (e) {
                        var o = t.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            s = /(\[[^[\]]*])/g,
                            a = t.depth > 0 && /(\[[^[\]]*])/.exec(o),
                            l = a ? o.slice(0, a.index) : o,
                            u = [];
                        if (l) {
                            if (!t.plainObjects && i.call(Object.prototype, l) && !t.allowPrototypes) return;
                            u.push(l)
                        }
                        for (var d = 0; t.depth > 0 && null !== (a = s.exec(o)) && d < t.depth;) {
                            if (d += 1, !t.plainObjects && i.call(Object.prototype, a[1].slice(1, -1)) && !t.allowPrototypes) return;
                            u.push(a[1])
                        }
                        return a && u.push("[" + o.slice(a.index) + "]"),
                            function(e, r, t, n) {
                                for (var i = n ? r : c(r, t), o = e.length - 1; o >= 0; --o) {
                                    var s, a = e[o];
                                    if ("[]" === a && t.parseArrays) s = [].concat(i);
                                    else {
                                        s = t.plainObjects ? Object.create(null) : {};
                                        var l = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                            u = parseInt(l, 10);
                                        t.parseArrays || "" !== l ? !isNaN(u) && a !== l && String(u) === l && u >= 0 && t.parseArrays && u <= t.arrayLimit ? (s = [])[u] = i : s[l] = i : s = {
                                            0: i
                                        }
                                    }
                                    i = s
                                }
                                return i
                            }(u, r, t, n)
                    }
                };
            e.exports = function(e, r) {
                var t = function(e) {
                    if (!e) return s;
                    if (null !== e.decoder && void 0 !== e.decoder && "function" !== typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                    if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var r = "undefined" === typeof e.charset ? s.charset : e.charset;
                    return {
                        allowDots: "undefined" === typeof e.allowDots ? s.allowDots : !!e.allowDots,
                        allowPrototypes: "boolean" === typeof e.allowPrototypes ? e.allowPrototypes : s.allowPrototypes,
                        arrayLimit: "number" === typeof e.arrayLimit ? e.arrayLimit : s.arrayLimit,
                        charset: r,
                        charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : s.charsetSentinel,
                        comma: "boolean" === typeof e.comma ? e.comma : s.comma,
                        decoder: "function" === typeof e.decoder ? e.decoder : s.decoder,
                        delimiter: "string" === typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : s.delimiter,
                        depth: "number" === typeof e.depth || !1 === e.depth ? +e.depth : s.depth,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" === typeof e.interpretNumericEntities ? e.interpretNumericEntities : s.interpretNumericEntities,
                        parameterLimit: "number" === typeof e.parameterLimit ? e.parameterLimit : s.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" === typeof e.plainObjects ? e.plainObjects : s.plainObjects,
                        strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : s.strictNullHandling
                    }
                }(r);
                if ("" === e || null === e || "undefined" === typeof e) return t.plainObjects ? Object.create(null) : {};
                for (var u = "string" === typeof e ? function(e, r) {
                        var t, l = {},
                            u = r.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                            d = r.parameterLimit === 1 / 0 ? void 0 : r.parameterLimit,
                            f = u.split(r.delimiter, d),
                            p = -1,
                            w = r.charset;
                        if (r.charsetSentinel)
                            for (t = 0; t < f.length; ++t) 0 === f[t].indexOf("utf8=") && ("utf8=%E2%9C%93" === f[t] ? w = "utf-8" : "utf8=%26%2310003%3B" === f[t] && (w = "iso-8859-1"), p = t, t = f.length);
                        for (t = 0; t < f.length; ++t)
                            if (t !== p) {
                                var b, m, g = f[t],
                                    h = g.indexOf("]="),
                                    v = -1 === h ? g.indexOf("=") : h + 1; - 1 === v ? (b = r.decoder(g, s.decoder, w, "key"), m = r.strictNullHandling ? null : "") : (b = r.decoder(g.slice(0, v), s.decoder, w, "key"), m = n.maybeMap(c(g.slice(v + 1), r), (function(e) {
                                    return r.decoder(e, s.decoder, w, "value")
                                }))), m && r.interpretNumericEntities && "iso-8859-1" === w && (m = a(m)), g.indexOf("[]=") > -1 && (m = o(m) ? [m] : m), i.call(l, b) ? l[b] = n.combine(l[b], m) : l[b] = m
                            }
                        return l
                    }(e, t) : e, d = t.plainObjects ? Object.create(null) : {}, f = Object.keys(u), p = 0; p < f.length; ++p) {
                    var w = f[p],
                        b = l(w, u[w], t, "string" === typeof e);
                    d = n.merge(d, b, t)
                }
                return n.compact(d)
            }
        },
        "SYP+": (e, r, t) => {
            "use strict";
            var n = t("V/Lb"),
                i = t("cYYr"),
                o = Object.prototype.hasOwnProperty,
                s = {
                    brackets: function(e) {
                        return e + "[]"
                    },
                    comma: "comma",
                    indices: function(e, r) {
                        return e + "[" + r + "]"
                    },
                    repeat: function(e) {
                        return e
                    }
                },
                a = Array.isArray,
                c = Array.prototype.push,
                l = function(e, r) {
                    c.apply(e, a(r) ? r : [r])
                },
                u = Date.prototype.toISOString,
                d = i.default,
                f = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encoder: n.encode,
                    encodeValuesOnly: !1,
                    format: d,
                    formatter: i.formatters[d],
                    indices: !1,
                    serializeDate: function(e) {
                        return u.call(e)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                p = function e(r, t, i, o, s, c, u, d, p, w, b, m, g, h) {
                    var v, y = r;
                    if ("function" === typeof u ? y = u(t, y) : y instanceof Date ? y = w(y) : "comma" === i && a(y) && (y = n.maybeMap(y, (function(e) {
                            return e instanceof Date ? w(e) : e
                        }))), null === y) {
                        if (o) return c && !g ? c(t, f.encoder, h, "key", b) : t;
                        y = ""
                    }
                    if ("string" === typeof(v = y) || "number" === typeof v || "boolean" === typeof v || "symbol" === typeof v || "bigint" === typeof v || n.isBuffer(y)) return c ? [m(g ? t : c(t, f.encoder, h, "key", b)) + "=" + m(c(y, f.encoder, h, "value", b))] : [m(t) + "=" + m(String(y))];
                    var x, k = [];
                    if ("undefined" === typeof y) return k;
                    if ("comma" === i && a(y)) x = [{
                        value: y.length > 0 ? y.join(",") || null : void 0
                    }];
                    else if (a(u)) x = u;
                    else {
                        var _ = Object.keys(y);
                        x = d ? _.sort(d) : _
                    }
                    for (var A = 0; A < x.length; ++A) {
                        var E = x[A],
                            C = "object" === typeof E && void 0 !== E.value ? E.value : y[E];
                        if (!s || null !== C) {
                            var j = a(y) ? "function" === typeof i ? i(t, E) : t : t + (p ? "." + E : "[" + E + "]");
                            l(k, e(C, j, i, o, s, c, u, d, p, w, b, m, g, h))
                        }
                    }
                    return k
                };
            e.exports = function(e, r) {
                var t, n = e,
                    c = function(e) {
                        if (!e) return f;
                        if (null !== e.encoder && void 0 !== e.encoder && "function" !== typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                        var r = e.charset || f.charset;
                        if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var t = i.default;
                        if ("undefined" !== typeof e.format) {
                            if (!o.call(i.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                            t = e.format
                        }
                        var n = i.formatters[t],
                            s = f.filter;
                        return ("function" === typeof e.filter || a(e.filter)) && (s = e.filter), {
                            addQueryPrefix: "boolean" === typeof e.addQueryPrefix ? e.addQueryPrefix : f.addQueryPrefix,
                            allowDots: "undefined" === typeof e.allowDots ? f.allowDots : !!e.allowDots,
                            charset: r,
                            charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : f.charsetSentinel,
                            delimiter: "undefined" === typeof e.delimiter ? f.delimiter : e.delimiter,
                            encode: "boolean" === typeof e.encode ? e.encode : f.encode,
                            encoder: "function" === typeof e.encoder ? e.encoder : f.encoder,
                            encodeValuesOnly: "boolean" === typeof e.encodeValuesOnly ? e.encodeValuesOnly : f.encodeValuesOnly,
                            filter: s,
                            format: t,
                            formatter: n,
                            serializeDate: "function" === typeof e.serializeDate ? e.serializeDate : f.serializeDate,
                            skipNulls: "boolean" === typeof e.skipNulls ? e.skipNulls : f.skipNulls,
                            sort: "function" === typeof e.sort ? e.sort : null,
                            strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : f.strictNullHandling
                        }
                    }(r);
                "function" === typeof c.filter ? n = (0, c.filter)("", n) : a(c.filter) && (t = c.filter);
                var u, d = [];
                if ("object" !== typeof n || null === n) return "";
                u = r && r.arrayFormat in s ? r.arrayFormat : r && "indices" in r ? r.indices ? "indices" : "repeat" : "indices";
                var w = s[u];
                t || (t = Object.keys(n)), c.sort && t.sort(c.sort);
                for (var b = 0; b < t.length; ++b) {
                    var m = t[b];
                    c.skipNulls && null === n[m] || l(d, p(n[m], m, w, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.format, c.formatter, c.encodeValuesOnly, c.charset))
                }
                var g = d.join(c.delimiter),
                    h = !0 === c.addQueryPrefix ? "?" : "";
                return c.charsetSentinel && ("iso-8859-1" === c.charset ? h += "utf8=%26%2310003%3B&" : h += "utf8=%E2%9C%93&"), g.length > 0 ? h + g : ""
            }
        },
        "V/Lb": (e, r, t) => {
            "use strict";
            var n = t("cYYr"),
                i = Object.prototype.hasOwnProperty,
                o = Array.isArray,
                s = function() {
                    for (var e = [], r = 0; r < 256; ++r) e.push("%" + ((r < 16 ? "0" : "") + r.toString(16)).toUpperCase());
                    return e
                }(),
                a = function(e, r) {
                    for (var t = r && r.plainObjects ? Object.create(null) : {}, n = 0; n < e.length; ++n) "undefined" !== typeof e[n] && (t[n] = e[n]);
                    return t
                };
            e.exports = {
                arrayToObject: a,
                assign: function(e, r) {
                    return Object.keys(r).reduce((function(e, t) {
                        return e[t] = r[t], e
                    }), e)
                },
                combine: function(e, r) {
                    return [].concat(e, r)
                },
                compact: function(e) {
                    for (var r = [{
                            obj: {
                                o: e
                            },
                            prop: "o"
                        }], t = [], n = 0; n < r.length; ++n)
                        for (var i = r[n], s = i.obj[i.prop], a = Object.keys(s), c = 0; c < a.length; ++c) {
                            var l = a[c],
                                u = s[l];
                            "object" === typeof u && null !== u && -1 === t.indexOf(u) && (r.push({
                                obj: s,
                                prop: l
                            }), t.push(u))
                        }
                    return function(e) {
                        for (; e.length > 1;) {
                            var r = e.pop(),
                                t = r.obj[r.prop];
                            if (o(t)) {
                                for (var n = [], i = 0; i < t.length; ++i) "undefined" !== typeof t[i] && n.push(t[i]);
                                r.obj[r.prop] = n
                            }
                        }
                    }(r), e
                },
                decode: function(e, r, t) {
                    var n = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === t) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(n)
                    } catch (i) {
                        return n
                    }
                },
                encode: function(e, r, t, i, o) {
                    if (0 === e.length) return e;
                    var a = e;
                    if ("symbol" === typeof e ? a = Symbol.prototype.toString.call(e) : "string" !== typeof e && (a = String(e)), "iso-8859-1" === t) return escape(a).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    }));
                    for (var c = "", l = 0; l < a.length; ++l) {
                        var u = a.charCodeAt(l);
                        45 === u || 46 === u || 95 === u || 126 === u || u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || o === n.RFC1738 && (40 === u || 41 === u) ? c += a.charAt(l) : u < 128 ? c += s[u] : u < 2048 ? c += s[192 | u >> 6] + s[128 | 63 & u] : u < 55296 || u >= 57344 ? c += s[224 | u >> 12] + s[128 | u >> 6 & 63] + s[128 | 63 & u] : (l += 1, u = 65536 + ((1023 & u) << 10 | 1023 & a.charCodeAt(l)), c += s[240 | u >> 18] + s[128 | u >> 12 & 63] + s[128 | u >> 6 & 63] + s[128 | 63 & u])
                    }
                    return c
                },
                isBuffer: function(e) {
                    return !(!e || "object" !== typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                },
                isRegExp: function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                },
                maybeMap: function(e, r) {
                    if (o(e)) {
                        for (var t = [], n = 0; n < e.length; n += 1) t.push(r(e[n]));
                        return t
                    }
                    return r(e)
                },
                merge: function e(r, t, n) {
                    if (!t) return r;
                    if ("object" !== typeof t) {
                        if (o(r)) r.push(t);
                        else {
                            if (!r || "object" !== typeof r) return [r, t];
                            (n && (n.plainObjects || n.allowPrototypes) || !i.call(Object.prototype, t)) && (r[t] = !0)
                        }
                        return r
                    }
                    if (!r || "object" !== typeof r) return [r].concat(t);
                    var s = r;
                    return o(r) && !o(t) && (s = a(r, n)), o(r) && o(t) ? (t.forEach((function(t, o) {
                        if (i.call(r, o)) {
                            var s = r[o];
                            s && "object" === typeof s && t && "object" === typeof t ? r[o] = e(s, t, n) : r.push(t)
                        } else r[o] = t
                    })), r) : Object.keys(t).reduce((function(r, o) {
                        var s = t[o];
                        return i.call(r, o) ? r[o] = e(r[o], s, n) : r[o] = s, r
                    }), s)
                }
            }
        },
        "6p3b": (e, r, t) => {
            "use strict";
            var n, i = t("fALc"),
                o = (n = i) && n.__esModule ? n : {
                    default: n
                };
            var s = -1;

            function a(e, r) {
                if (e === s) return o.default.transform(r)
            }
            r.Ay = a
        },
        "3as9": (e, r, t) => {
            var n;
            ! function(i, o) {
                "use strict";
                var s = "function",
                    a = "undefined",
                    c = "object",
                    l = "string",
                    u = "model",
                    d = "name",
                    f = "type",
                    p = "vendor",
                    w = "version",
                    b = "architecture",
                    m = "console",
                    g = "mobile",
                    h = "tablet",
                    v = "smarttv",
                    y = "wearable",
                    x = "embedded",
                    k = {
                        extend: function(e, r) {
                            var t = {};
                            for (var n in e) r[n] && r[n].length % 2 === 0 ? t[n] = r[n].concat(e[n]) : t[n] = e[n];
                            return t
                        },
                        has: function(e, r) {
                            return typeof e === l && -1 !== r.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return typeof e === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : o
                        },
                        trim: function(e, r) {
                            return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof r === a ? e : e.substring(0, 255)
                        }
                    },
                    _ = {
                        rgx: function(e, r) {
                            for (var t, n, i, a, l, u, d = 0; d < r.length && !l;) {
                                var f = r[d],
                                    p = r[d + 1];
                                for (t = n = 0; t < f.length && !l;)
                                    if (l = f[t++].exec(e))
                                        for (i = 0; i < p.length; i++) u = l[++n], typeof(a = p[i]) === c && a.length > 0 ? 2 == a.length ? typeof a[1] == s ? this[a[0]] = a[1].call(this, u) : this[a[0]] = a[1] : 3 == a.length ? typeof a[1] !== s || a[1].exec && a[1].test ? this[a[0]] = u ? u.replace(a[1], a[2]) : o : this[a[0]] = u ? a[1].call(this, u, a[2]) : o : 4 == a.length && (this[a[0]] = u ? a[3].call(this, u.replace(a[1], a[2])) : o) : this[a] = u || o;
                                d += 2
                            }
                        },
                        str: function(e, r) {
                            for (var t in r)
                                if (typeof r[t] === c && r[t].length > 0) {
                                    for (var n = 0; n < r[t].length; n++)
                                        if (k.has(r[t][n], e)) return "?" === t ? o : t
                                } else if (k.has(r[t], e)) return "?" === t ? o : t;
                            return e
                        }
                    },
                    A = {
                        browser: {
                            oldSafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            },
                            oldEdge: {
                                version: {
                                    .1: "12.",
                                    21: "13.",
                                    31: "14.",
                                    39: "15.",
                                    41: "16.",
                                    42: "17.",
                                    44: "18."
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
                                    ME: "4.90",
                                    "NT 3.11": "NT3.51",
                                    "NT 4.0": "NT4.0",
                                    2e3: "NT 5.0",
                                    XP: ["NT 5.1", "NT 5.2"],
                                    Vista: "NT 6.0",
                                    7: "NT 6.1",
                                    8: "NT 6.2",
                                    8.1: "NT 6.3",
                                    10: ["NT 6.4", "NT 10.0"],
                                    RT: "ARM"
                                }
                            }
                        }
                    },
                    E = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [w, [d, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [w, [d, "Edge"]],
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                            [d, w],
                            [/opios[\/\s]+([\w\.]+)/i],
                            [w, [d, "Opera Mini"]],
                            [/\sopr\/([\w\.]+)/i],
                            [w, [d, "Opera"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [d, w],
                            [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [w, [d, "UCBrowser"]],
                            [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                            [w, [d, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [w, [d, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [w, [d, "Konqueror"]],
                            [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                            [w, [d, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [w, [d, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Secure Browser"], w
                            ],
                            [/focus\/([\w\.]+)/i],
                            [w, [d, "Firefox Focus"]],
                            [/opt\/([\w\.]+)/i],
                            [w, [d, "Opera Touch"]],
                            [/coc_coc_browser\/([\w\.]+)/i],
                            [w, [d, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [w, [d, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [w, [d, "Opera Coast"]],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [w, [d, "MIUI Browser"]],
                            [/fxios\/([\w\.-]+)/i],
                            [w, [d, "Firefox"]],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [
                                [d, "360 Browser"]
                            ],
                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Browser"], w
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [d, /_/g, " "], w
                            ],
                            [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
                            [d, w],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                            [d],
                            [/;fbav\/([\w\.]+);/i],
                            [w, [d, "Facebook"]],
                            [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                            [
                                [d, "Facebook"]
                            ],
                            [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                            [d, w],
                            [/\bgsa\/([\w\.]+)\s.*safari\//i],
                            [w, [d, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [w, [d, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [d, "Chrome WebView"], w
                            ],
                            [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                            [w, [d, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [d, w],
                            [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                            [w, [d, "Mobile Safari"]],
                            [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                            [w, d],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [d, [w, _.str, A.browser.oldSafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [d, w],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [d, "Netscape"], w
                            ],
                            [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                            [w, [d, "Firefox Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [d, w]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                [b, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [b, k.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [b, "ia32"]
                            ],
                            [/\b(aarch64|armv?8e?l?)\b/i],
                            [
                                [b, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [b, "armhf"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                [b, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                [b, /ower/, "", k.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [b, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [b, k.lowerize]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                            [u, [p, "Samsung"],
                                [f, h]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                            [u, [p, "Samsung"],
                                [f, g]
                            ],
                            [/\((ip(?:hone|od)[\s\w]*);/i],
                            [u, [p, "Apple"],
                                [f, g]
                            ],
                            [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [u, [p, "Apple"],
                                [f, h]
                            ],
                            [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                            [u, [p, "Huawei"],
                                [f, h]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
                            [u, [p, "Huawei"],
                                [f, g]
                            ],
                            [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                            [
                                [u, /_/g, " "],
                                [p, "Xiaomi"],
                                [f, g]
                            ],
                            [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                            [
                                [u, /_/g, " "],
                                [p, "Xiaomi"],
                                [f, h]
                            ],
                            [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                            [u, [p, "OPPO"],
                                [f, g]
                            ],
                            [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                            [u, [p, "Vivo"],
                                [f, g]
                            ],
                            [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                            [u, [p, "Realme"],
                                [f, g]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
                            [u, [p, "Motorola"],
                                [f, g]
                            ],
                            [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [u, [p, "Motorola"],
                                [f, h]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                            [u, [p, "LG"],
                                [f, h]
                            ],
                            [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                            [u, [p, "LG"],
                                [f, g]
                            ],
                            [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                            [u, [p, "Lenovo"],
                                [f, h]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                            [
                                [u, /_/g, " "],
                                [p, "Nokia"],
                                [f, g]
                            ],
                            [/droid.+;\s(pixel\sc)[\s)]/i],
                            [u, [p, "Google"],
                                [f, h]
                            ],
                            [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                            [u, [p, "Google"],
                                [f, g]
                            ],
                            [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [u, [p, "Sony"],
                                [f, g]
                            ],
                            [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                            [
                                [u, "Xperia Tablet"],
                                [p, "Sony"],
                                [f, h]
                            ],
                            [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                            [u, [p, "OnePlus"],
                                [f, g]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                            [u, [p, "Amazon"],
                                [f, h]
                            ],
                            [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                            [
                                [u, "Fire Phone"],
                                [p, "Amazon"],
                                [f, g]
                            ],
                            [/\((playbook);[\w\s\),;-]+(rim)/i],
                            [u, p, [f, h]],
                            [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                            [u, [p, "BlackBerry"],
                                [f, g]
                            ],
                            [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                            [u, [p, "ASUS"],
                                [f, h]
                            ],
                            [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                            [u, [p, "ASUS"],
                                [f, g]
                            ],
                            [/(nexus\s9)/i],
                            [u, [p, "HTC"],
                                [f, h]
                            ],
                            [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [p, [u, /_/g, " "],
                                [f, g]
                            ],
                            [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [u, [p, "Acer"],
                                [f, h]
                            ],
                            [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                            [u, [p, "Meizu"],
                                [f, g]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [p, u, [f, g]],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
                            [p, u, [f, h]],
                            [/\s(surface\sduo)\s/i],
                            [u, [p, "Microsoft"],
                                [f, h]
                            ],
                            [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                            [u, [p, "Fairphone"],
                                [f, g]
                            ],
                            [/\s(u304aa)\sbuild/i],
                            [u, [p, "AT&T"],
                                [f, g]
                            ],
                            [/sie-(\w*)/i],
                            [u, [p, "Siemens"],
                                [f, g]
                            ],
                            [/[;\/]\s?(rct\w+)\sbuild/i],
                            [u, [p, "RCA"],
                                [f, h]
                            ],
                            [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                            [u, [p, "Dell"],
                                [f, h]
                            ],
                            [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                            [u, [p, "Verizon"],
                                [f, h]
                            ],
                            [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                            [u, [p, "Barnes & Noble"],
                                [f, h]
                            ],
                            [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                            [u, [p, "NuVision"],
                                [f, h]
                            ],
                            [/;\s(k88)\sbuild/i],
                            [u, [p, "ZTE"],
                                [f, h]
                            ],
                            [/;\s(nx\d{3}j)\sbuild/i],
                            [u, [p, "ZTE"],
                                [f, g]
                            ],
                            [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                            [u, [p, "Swiss"],
                                [f, g]
                            ],
                            [/[;\/]\s?(zur\d{3})\sbuild/i],
                            [u, [p, "Swiss"],
                                [f, h]
                            ],
                            [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                            [u, [p, "Zeki"],
                                [f, h]
                            ],
                            [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                            [
                                [p, "Dragon Touch"], u, [f, h]
                            ],
                            [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                            [u, [p, "Insignia"],
                                [f, h]
                            ],
                            [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                            [u, [p, "NextBook"],
                                [f, h]
                            ],
                            [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                            [
                                [p, "Voice"], u, [f, g]
                            ],
                            [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                            [
                                [p, "LvTel"], u, [f, g]
                            ],
                            [/;\s(ph-1)\s/i],
                            [u, [p, "Essential"],
                                [f, g]
                            ],
                            [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                            [u, [p, "Envizen"],
                                [f, h]
                            ],
                            [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                            [u, [p, "MachSpeed"],
                                [f, h]
                            ],
                            [/[;\/]\s?tu_(1491)\sbuild/i],
                            [u, [p, "Rotor"],
                                [f, h]
                            ],
                            [/(shield[\w\s]+)\sbuild/i],
                            [u, [p, "Nvidia"],
                                [f, h]
                            ],
                            [/(sprint)\s(\w+)/i],
                            [p, u, [f, g]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [u, /\./g, " "],
                                [p, "Microsoft"],
                                [f, g]
                            ],
                            [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [u, [p, "Zebra"],
                                [f, h]
                            ],
                            [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [u, [p, "Zebra"],
                                [f, g]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                            [p, u, [f, m]],
                            [/droid.+;\s(shield)\sbuild/i],
                            [u, [p, "Nvidia"],
                                [f, m]
                            ],
                            [/(playstation\s[345portablevi]+)/i],
                            [u, [p, "Sony"],
                                [f, m]
                            ],
                            [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                            [u, [p, "Microsoft"],
                                [f, m]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [p, [f, v]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [u, /^/, "SmartTV"],
                                [p, "Samsung"],
                                [f, v]
                            ],
                            [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                            [
                                [p, "LG"],
                                [f, v]
                            ],
                            [/(apple)\s?tv/i],
                            [p, [u, "Apple TV"],
                                [f, v]
                            ],
                            [/crkey/i],
                            [
                                [u, "Chromecast"],
                                [p, "Google"],
                                [f, v]
                            ],
                            [/droid.+aft([\w])(\sbuild\/|\))/i],
                            [u, [p, "Amazon"],
                                [f, v]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [u, [p, "Sharp"],
                                [f, v]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [p, k.trim],
                                [u, k.trim],
                                [f, v]
                            ],
                            [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                            [
                                [f, v]
                            ],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [p, u, [f, y]],
                            [/droid.+;\s(glass)\s\d/i],
                            [u, [p, "Google"],
                                [f, y]
                            ],
                            [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                            [u, [p, "Zebra"],
                                [f, y]
                            ],
                            [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                            [p, [f, x]],
                            [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                            [u, [f, g]],
                            [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                            [u, [f, h]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [f, k.lowerize]
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [u, [p, "Generic"]],
                            [/(phone)/i],
                            [
                                [f, g]
                            ]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [w, [d, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [w, [d, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [d, w],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [w, d]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [d, w],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
                            [d, [w, _.str, A.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [d, "Windows"],
                                [w, _.str, A.os.windows.version]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [w, /_/g, "."],
                                [d, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                            [
                                [d, "Mac OS"],
                                [w, /_/g, "."]
                            ],
                            [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
                            [d, w],
                            [/\(bb(10);/i],
                            [w, [d, "BlackBerry"]],
                            [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                            [w, [d, "Symbian"]],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [d, "Firefox OS"]
                            ],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [w, [d, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [w, [d, "Chromecast"]],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [d, "Chromium OS"], w
                            ],
                            [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
                            [d, w],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [d, "Solaris"], w
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [d, w]
                        ]
                    },
                    C = function(e, r) {
                        if ("object" === typeof e && (r = e, e = o), !(this instanceof C)) return new C(e, r).getResult();
                        var t = e || ("undefined" !== typeof i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                            n = r ? k.extend(E, r) : E;
                        return this.getBrowser = function() {
                            var e = {
                                name: o,
                                version: o
                            };
                            return _.rgx.call(e, t, n.browser), e.major = k.major(e.version), e
                        }, this.getCPU = function() {
                            var e = {
                                architecture: o
                            };
                            return _.rgx.call(e, t, n.cpu), e
                        }, this.getDevice = function() {
                            var e = {
                                vendor: o,
                                model: o,
                                type: o
                            };
                            return _.rgx.call(e, t, n.device), e
                        }, this.getEngine = function() {
                            var e = {
                                name: o,
                                version: o
                            };
                            return _.rgx.call(e, t, n.engine), e
                        }, this.getOS = function() {
                            var e = {
                                name: o,
                                version: o
                            };
                            return _.rgx.call(e, t, n.os), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return t
                        }, this.setUA = function(e) {
                            return t = typeof e === l && e.length > 255 ? k.trim(e, 255) : e, this
                        }, this.setUA(t), this
                    };
                C.VERSION = "0.7.28", C.BROWSER = {
                    NAME: d,
                    MAJOR: "major",
                    VERSION: w
                }, C.CPU = {
                    ARCHITECTURE: b
                }, C.DEVICE = {
                    MODEL: u,
                    VENDOR: p,
                    TYPE: f,
                    CONSOLE: m,
                    MOBILE: g,
                    SMARTTV: v,
                    TABLET: h,
                    WEARABLE: y,
                    EMBEDDED: x
                }, C.ENGINE = {
                    NAME: d,
                    VERSION: w
                }, C.OS = {
                    NAME: d,
                    VERSION: w
                }, typeof r !== a ? (e.exports && (r = e.exports = C), r.UAParser = C) : (n = function() {
                    return C
                }.call(r, t, r, e)) === o || (e.exports = n);
                var j = "undefined" !== typeof i && (i.jQuery || i.Zepto);
                if (j && !j.ua) {
                    var O = new C;
                    j.ua = O.getResult(), j.ua.get = function() {
                        return O.getUA()
                    }, j.ua.set = function(e) {
                        O.setUA(e);
                        var r = O.getResult();
                        for (var t in r) j.ua[t] = r[t]
                    }
                }
            }(window)
        }
    }
]);
//# debugId=1005ab9c-e88e-52b9-9e0c-de2c4ec05a5e