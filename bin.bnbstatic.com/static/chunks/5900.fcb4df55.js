(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [5900], {
        wkzY: (e, t, n) => {
            "use strict";
            n.d(t, {
                Jt: () => Ae,
                bE: () => Ce
            });
            var r = n("S+0I"),
                o = n("hrAD"),
                a = n("mguP"),
                c = n("66mo"),
                i = n.n(c),
                u = n("m0k9"),
                s = n("7ZgD"),
                f = n("qR81"),
                l = n.n(f),
                d = n("cMQ8"),
                p = "__BNC_USER_DEVICE_ID__",
                v = "unknown",
                h = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if ("undefined" !== typeof document) {
                        var o, a = new Date;
                        n ? (a.setTime(a.getTime() + 24 * n * 60 * 60 * 1e3), o = "; expires=".concat(a.toGMTString())) : o = "";
                        var c = r ? "; domain=".concat(function() {
                            var e = window.location.hostname.split(".");
                            return e[0] = "", e.join(".")
                        }()) : "";
                        document.cookie = "".concat(e, "=").concat(t).concat(o).concat(c, "; path=/; secure=true;")
                    }
                },
                g = function(e) {
                    if (!e) return e;
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return e
                    }
                },
                b = "undefined" !== typeof window,
                w = {},
                m = function() {
                    return "undefined" !== typeof sessionStorage
                },
                y = function() {
                    return "undefined" !== typeof localStorage
                };
            var S, x = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (y()) return n.ttl ? localStorage.setItem(e, JSON.stringify({
                        value: t,
                        expire: (new Date).getTime() + n.ttl
                    })) : localStorage.setItem(e, t)
                },
                _ = function(e) {
                    if (y()) {
                        var t = localStorage.getItem(e),
                            n = g(t) || {};
                        return n.expire ? n.expire && n.expire > (new Date).getTime() ? n.value : null : t
                    }
                },
                A = function(e) {
                    if (b) {
                        var t = p,
                            n = JSON.stringify(e);
                        ! function(e) {
                            h(e, "", -1, !1)
                        }(t), y() && x(t, n), m() && sessionStorage.setItem(t, n), w[p] = n
                    }
                },
                C = function() {
                    if (!b) return {};
                    var e = p,
                        t = null;
                    t || (t = w[p]), !t && y() && (t = _(e) || null), !t && m() && (t = sessionStorage.getItem(e) || null);
                    var n, r = g(t) || {};
                    if (n = r, "[object String]" === Object.prototype.toString.call(n)) {
                        console.log("device need decodeURIComponent");
                        try {
                            r = g(decodeURIComponent(r))
                        } catch (o) {
                            console.log("device need decodeURIComponent error", o)
                        }
                    }
                    return t && A(r), r
                },
                O = function() {
                    return C()
                },
                k = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = Object.assign({}, t);
                    if (b) {
                        n.device_id = function(e) {
                            if (!e) return "";
                            var t = O()[l()(e)];
                            return t && t.value || ""
                        }(e);
                        var r = l()(e || ""),
                            o = O(),
                            a = Object.keys(o).filter((function(e) {
                                return e !== r
                            }));
                        n.related_device_ids = a.map((function(e) {
                            return o[e].value
                        })).join(",")
                    }
                    return d.Base64.encode(JSON.stringify(n))
                },
                R = n("ew97"),
                I = n("qGMf"),
                j = n.n(I),
                E = {
                    colorDepth: !0,
                    deviceMemory: !0,
                    pixelRatio: !0,
                    hardwareConcurrency: !0,
                    sessionStorage: !0,
                    localStorage: !0,
                    indexedDb: !0,
                    addBehavior: !0,
                    openDatabase: !0,
                    cpuClass: !0,
                    doNotTrack: !0,
                    adBlock: !0,
                    hasLiedLanguages: !0,
                    hasLiedResolution: !0,
                    hasLiedOs: !0,
                    hasLiedBrowser: !0,
                    touchSupport: !0,
                    fonts: !0,
                    fontsFlash: !0,
                    enumerateDevices: !0
                },
                B = v;

            function F() {
                return S = S || (new R.UAParser).getResult()
            }
            var U = function() {
                    var e = F().os;
                    return e && e.name ? "".concat(e.name, " ").concat(e.version) : B
                },
                N = function() {
                    var e = F().device;
                    return e && e.model ? [e.type, e.vendor, e.model, ""].join(" ") : B
                },
                D = function() {
                    var e = F(),
                        t = e.browser,
                        n = e.os || {};
                    return t && t.name ? "".concat(t.name, " V").concat(t.version, " (").concat(n.name || "", ")") : B
                },
                T = function(e) {
                    var t, n = Math.floor(Math.abs(e) / 60),
                        r = Math.abs(e % 60);
                    return t = 0 === r ? "".concat(n.toString().padStart(2, "0"), ":00") : "".concat(n.toString().padStart(2, "0"), ":").concat(r.toString().padStart(2, "0")), t = e > 0 ? "-".concat(t) : "+".concat(t), "GMT".concat(t)
                },
                P = function(e) {
                    var t = e[1].replace("canvas fp:data:image/png;base64,", "");
                    try {
                        return function(e) {
                            var t, n, r, o = "";
                            for (t = 0, n = (e += "").length; t < n; t++) o += (r = e.charCodeAt(t).toString(16)).length < 2 ? "0".concat(r) : r;
                            return o
                        }(atob(t).slice(-16, -12))
                    } catch (n) {
                        return console.warn("Failed to get canvas code: ", n), v
                    }
                },
                J = function(e) {
                    var t = {
                        vendor: v,
                        renderer: v
                    };
                    if (!e || !e.length) return t;
                    for (var n = e.length, r = 0, o = 0; o < n; o++) {
                        var a = e[o] || "";
                        if (a.indexOf("webgl unmasked vendor:") > -1 ? (t.vendor = a.split("webgl unmasked vendor:")[1] || v, r += 1) : a.indexOf("webgl unmasked renderer:") > -1 && (t.renderer = a.split("webgl unmasked renderer:")[1] || v, r += 1), 2 === r) break
                    }
                    return t
                },
                L = function(e) {
                    var t = e.plugins || e.regular_plugins || e.ie_plugins;
                    if (!Array.isArray(t)) return v;
                    var n = [];
                    return t.forEach((function(e) {
                        n.push(e[0])
                    })), n.length > 500 ? n.slice(0, 500).join(",") : n.join(",")
                },
                M = function(e) {
                    var t = {
                        screenResolution: v,
                        avaScreenResolution: v
                    };
                    return e.screenResolution && Array.isArray(e.availableScreenResolution) && (t.screenResolution = e.screenResolution.join(",")), e.availableScreenResolution && Array.isArray(e.availableScreenResolution) && (t.avaScreenResolution = e.availableScreenResolution.join(",")), t
                };
            const q = function() {
                var e = (0, r._)(i().mark((function e() {
                    var t, n, a, c;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (b) {
                                    e.next = 2;
                                    break
                                }
                                return e.abrupt("return", Promise.resolve({}));
                            case 2:
                                if (t = "__BNC_FP_INFO__", n = (0, o._)({}, E), !(a = g(_(t)))) {
                                    e.next = 7;
                                    break
                                }
                                return e.abrupt("return", a);
                            case 7:
                                return c = function() {
                                    var e = (0, r._)(i().mark((function e() {
                                        var r, o, a, c, u, s;
                                        return i().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, j().getPromise({
                                                        excludes: n
                                                    });
                                                case 2:
                                                    return r = e.sent, o = r.reduce((function(e, t) {
                                                        return e[t.key] = t.value, e
                                                    }), {}), a = J(o.webgl), c = M(o), u = {
                                                        screen_resolution: c.screenResolution,
                                                        available_screen_resolution: c.avaScreenResolution,
                                                        system_version: U(),
                                                        brand_model: N(),
                                                        system_lang: o.language,
                                                        timezone: T(o.timezoneOffset),
                                                        timezoneOffset: o.timezoneOffset,
                                                        user_agent: o.userAgent,
                                                        list_plugin: L(o),
                                                        canvas_code: P(o.canvas),
                                                        webgl_vendor: a.vendor,
                                                        webgl_renderer: a.renderer,
                                                        audio: o.audio,
                                                        platform: o.platform,
                                                        web_timezone: o.timezone,
                                                        device_name: D()
                                                    }, s = Object.keys(u).sort().map((function(e) {
                                                        return u[e]
                                                    })), u.fingerprint = j().x64hash128(s.join(""), 32), localStorage.removeItem("__BNC_FP_INFO__0093cf"), x(t, JSON.stringify(u), {
                                                        ttl: 864e5
                                                    }), e.abrupt("return", u);
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e)
                                    })));
                                    return function() {
                                        return e.apply(this, arguments)
                                    }
                                }(), e.prev = 8, e.next = 11, c();
                            case 11:
                                return e.abrupt("return", e.sent);
                            case 14:
                                e.prev = 14, e.t0 = e.catch(8), console.error("Fingerprint error: ", e.t0);
                            case 17:
                                return e.abrupt("return", Promise.resolve({}));
                            case 18:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [8, 14]
                    ])
                })));
                return function() {
                    return e.apply(this, arguments)
                }
            }();
            var G = {},
                z = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = !Object.keys(G).length, !b || !n) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.next = 4, q();
                                case 4:
                                    G = e.sent;
                                case 5:
                                    return e.abrupt("return", k(t, G));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            "undefined" !== typeof window && "requestIdleCallback" in window && window.requestIdleCallback((function() {
                z()
            }));
            var H = "";
            var V = n("1CC6"),
                Q = n("L3mt"),
                X = n("ZFFV"),
                Z = n.n(X),
                K = n("F3rx"),
                Y = n.n(K),
                W = n("c6Y9"),
                $ = (Z()().fetch, (0, u.S)().isHybrid, "_acc_org"),
                ee = !1;

            function te() {
                if (s.o && !ee) {
                    ee = !0;
                    var e = window.location.origin;
                    re(e), oe(e)
                }
            }

            function ne(e) {
                return e && +new Date - e < 432e5
            }

            function re(e) {
                e = ce(e), window._ACCELERATE_ORIGIN = e
            }

            function oe(e) {
                var t = {
                    t: +new Date
                };
                e && (e = ce(e), t.o = e);
                var n = ae(),
                    r = n.r;
                ne(n.t) && r && (t.r = r), window.localStorage.setItem($, JSON.stringify(t))
            }

            function ae() {
                return JSON.parse(window.localStorage.getItem($) || "{}")
            }

            function ce(e) {
                return e ? /^https?:/.test(e) ? e : "https://".concat(e) : e
            }
            var ie = n("hjFp"),
                ue = n("J02F");
            const se = (0, ue.vt)((0, ue.Q)((0, o._)({}, ie, {})));
            var fe = {
                track: function() {},
                debug: !1,
                responseInterceptor: function(e) {
                    return e
                },
                requestInterceptor: function(e, t) {
                    return [e, t]
                },
                resultInterceptor: function(e) {
                    return e
                },
                baseUrl: "undefined" !== typeof window ? window.location.origin : "",
                accelerateOrigin: "",
                checkAccelerable: function() {
                    return !1
                },
                accelerate: {
                    defaultOrigin: "",
                    origins: [],
                    enbleSites: null,
                    checkAccelerable: null
                },
                enableSentry: !0,
                enableLog: !0,
                enableMonitorLog: !0,
                enableBigdataApiLog: !0,
                logUrl: "",
                ssrHeaders: {},
                needAuthCheck: !1,
                needCaptcha: !1,
                captchaConfig: {
                    staticHost: "",
                    googleReCaptchaKey: ""
                },
                staticUrl: ""
            };
            var le = (0, u.S)().isHybrid,
                de = function() {
                    var e = (0, r._)(i().mark((function e(t, n) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", se.fetch(t, n));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }();
            s.o && (de = de.bind(window));
            s.o && !le && window.fetch;
            var pe = console.log,
                ve = console.warn,
                he = function() {
                    var e = (0, r._)(i().mark((function e(t) {
                        var n, r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (!((o = t.status) >= 200 && o < 300 || 401 === o)) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", t);
                                case 2:
                                    return e.prev = 2, e.next = 5, t.json();
                                case 5:
                                    throw n = e.sent, (r = new Error(t.statusText || t.status)).errorMsg = n, r;
                                case 11:
                                    throw e.prev = 11, e.t0 = e.catch(2), e.t0.code = t.status, s.o && (e.t0.name = t.status), e.t0;
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                            var o
                        }), e, null, [
                            [2, 11]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                ge = function() {
                    var e = (0, r._)(i().mark((function e() {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (s.o && !le) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", {});
                                case 2:
                                    return e.next = 4, z((void 0 || H).trim().toLowerCase());
                                case 4:
                                    return e.t0 = e.sent, e.abrupt("return", {
                                        "device-info": e.t0
                                    });
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                be = function() {
                    if (!s.o) return "";
                    var e = V.U.read("bnc-uuid");
                    return e || (e = (0, W.v4)(), V.U.writeCookieWithDomainLevel("bnc-uuid", e, 1825, !0)), e
                }(),
                we = function(e) {
                    var t;
                    if (s.o) return {};
                    var n = (null === e || void 0 === e || null === (t = e.headers) || void 0 === t ? void 0 : t.cookie) || null;
                    return n ? {
                        cookie: n
                    } : {}
                },
                me = function() {
                    if (s.o) return "";
                    try {
                        return "{}".CDN_REGION
                    } catch (e) {
                        return "en"
                    }
                }(),
                ye = function() {
                    var e = (0, r._)(i().mark((function e(t, n) {
                        var r, a, c, u, f, l, d, p, v;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = n.omitHeader, a = n.lang, c = n.headers, u = n.req, f = n.credentials, e.next = 3, ge();
                                case 3:
                                    return l = e.sent, d = r ? {} : (0, o._)({
                                        lang: a || s.o && ((0, Q.Z)() || V.U.read("lang")) || "en",
                                        "X-UI-REQUEST-TRACE": t,
                                        "X-TRACE-ID": t,
                                        "BNC-UUID": be,
                                        "Content-Type": "application/json"
                                    }, l), !r && me && (d = Object.assign(d, {
                                        "X-CDN-REGION": me
                                    })), r || le || (d = Object.assign(d, {
                                        clienttype: "web"
                                    })), s.o && !le && (d = Object.assign(d, {
                                        "FVIDEO-ID": V.U.read("BNC_FV_KEY") || "",
                                        "X-PASSTHROUGH-TOKEN": localStorage.getItem("X-PASSTHROUGH-TOKEN") || V.U.read("bnc-challenge-token") || ""
                                    })), p = we(u), v = {
                                        method: "GET",
                                        mode: "cors",
                                        headers: (0, o._)({}, d, p, c),
                                        credentials: f
                                    }, e.abrupt("return", {
                                        opts: v
                                    });
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Se = function(e) {
                    if ("undefined" === typeof window) return e;
                    var t = V.U.read("cr00");
                    return e.headers = e.headers || {}, e.headers.csrftoken || (e.headers.csrftoken = Y()(t || "")), e
                },
                xe = function(e) {
                    var t, n, r = fe.baseUrl,
                        o = fe.accelerateOrigin,
                        a = fe.checkAccelerable,
                        c = fe.accelerate;
                    if (a = c.checkAccelerable || a, s.o) {
                        var i = c.enbleSites;
                        "string" === typeof(o = window._ACCELERATE_ORIGIN || c.defaultOrigin || o) && (o = (n = o) ? /^https?:/.test(n) ? n : "https://".concat(n) : n), i && (t = i, "[object Array]" === Oe.call(t)) && !~i.indexOf(window.location.hostname) && (o = "")
                    }
                    return /^(https?:)?\/\//.test(e) ? e : s.o && !le && o && "string" === typeof o && /^(https?:)?\/\//.test(o) && a && a(e) ? "".concat(o).concat(e) : r ? "".concat(r).concat(e) : s.o ? "".concat(window.location.origin).concat(e) : e
                },
                _e = function() {
                    var e = (0, r._)(i().mark((function e(t, n, r, o) {
                        var c, u, f, l, d, p, v, h, g, b, w, m;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return c = fe.debug, u = fe.responseInterceptor, f = fe.requestInterceptor, l = fe.resultInterceptor, d = Date.now(), e.prev = 5, t = xe(t), g = (0, a._)(f(t, n, o), 2), t = g[0], n = g[1], b = s.o && !le ? window.fetch : de, e.t0 = u, e.next = 13, b(t, n);
                                case 13:
                                    return e.t1 = e.sent, e.t2 = o, e.t3 = n, e.next = 18, (0, e.t0)(e.t1, e.t2, e.t3);
                                case 18:
                                    return p = e.sent, w = Date.now(), v = w - d, e.next = 23, he(p);
                                case 23:
                                    if (!(m = p._bodyBlob) || !["application/vnd.ms-excel", "application/vnd.ms-pdf", "application/pdf", "application/octet-stream"].some((function(e) {
                                            return "".concat(m.type).includes(e)
                                        }))) {
                                        e.next = 26;
                                        break
                                    }
                                    return e.abrupt("return", p.blob());
                                case 26:
                                    return e.next = 28, p.json();
                                case 28:
                                    if (h = e.sent, c && pe("\n      Request url: ".concat(t, ",\n      params is: ").concat(JSON.stringify(r), "\n      responseStatus: ").concat(p.status, "\n      duration time is ").concat(v, ",\n      ").concat(v > 500 ? "more than 500ms, " : "")), i = l, "[object Function]" !== Oe.call(i)) {
                                        e.next = 32;
                                        break
                                    }
                                    return e.abrupt("return", l(h) || h);
                                case 32:
                                    return e.abrupt("return", h);
                                case 35:
                                    throw e.prev = 35, e.t4 = e.catch(5), s.o && !le && e.t4 && "TypeError" === e.t4.name && te(), c && pe("\n      BAD REQUEST:\n      Request url: {".concat(t, "},\n      params is: ").concat(JSON.stringify(r), ",\n      parse ERROR is ").concat(JSON.stringify(e.t4))), ve({
                                        url: t,
                                        err: e.t4
                                    }), e.t4;
                                case 41:
                                case "end":
                                    return e.stop()
                            }
                            var i
                        }), e, null, [
                            [5, 35]
                        ])
                    })));
                    return function(t, n, r, o) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ae = function() {
                    var e = (0, r._)(i().mark((function e(t, n) {
                        var r, o;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = n || {}, r = (0, W.v4)(), e.next = 4, ye(r, Se(n));
                                case 4:
                                    return o = e.sent.opts, e.abrupt("return", _e(t, o, {}, n));
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Ce = function() {
                    var e = (0, r._)(i().mark((function e(t, n) {
                        var r, o, a, c = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = c.length > 2 && void 0 !== c[2] ? c[2] : {}, o = (0, W.v4)(), e.next = 4, ye(o, Se(r));
                                case 4:
                                    return a = e.sent.opts, a = Object.assign(a, {
                                        method: "POST",
                                        body: JSON.stringify(n)
                                    }), e.abrupt("return", _e(t, a, n, r));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }(),
                Oe = (function() {
                    var e = (0, r._)(i().mark((function e(t, n) {
                        var r, o, a, c = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = c.length > 2 && void 0 !== c[2] ? c[2] : {}, o = (0, W.v4)(), e.next = 4, ye(o, Se(r));
                                case 4:
                                    return a = e.sent.opts, a = Object.assign(a, {
                                        method: "PUT",
                                        body: JSON.stringify(n)
                                    }), e.abrupt("return", _e(t, a, n, r));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t, n) {
                        var r, o, a, c = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = c.length > 2 && void 0 !== c[2] ? c[2] : {}, o = (0, W.v4)(), e.next = 4, ye(o, Se(r));
                                case 4:
                                    return a = e.sent.opts, a = Object.assign(a, {
                                        method: "DELETE",
                                        body: JSON.stringify(n)
                                    }), e.abrupt("return", _e(t, a, n, r));
                                case 7:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, r._)(i().mark((function e(t, n) {
                        var r, o, a, c = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = c.length > 2 && void 0 !== c[2] ? c[2] : {}, o = (0, W.v4)(), e.next = 4, ye(o, Se(r));
                                case 4:
                                    return a = e.sent.opts, r.headers && r.headers["Content-Type"] || delete a.headers["Content-Type"], a = Object.assign(a, {
                                        method: "POST",
                                        body: n
                                    }), e.abrupt("return", _e(t, a, n, r));
                                case 8:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), s.o && window.fetch || Z(), Object.prototype.toString)
        },
        qR81: function(e, t, n) {
            var r;
            ! function() {
                "use strict";

                function o(e, t) {
                    var n = (65535 & e) + (65535 & t);
                    return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                }

                function a(e, t, n, r, a, c) {
                    return o((i = o(o(t, e), o(r, c))) << (u = a) | i >>> 32 - u, n);
                    var i, u
                }

                function c(e, t, n, r, o, c, i) {
                    return a(t & n | ~t & r, e, t, o, c, i)
                }

                function i(e, t, n, r, o, c, i) {
                    return a(t & r | n & ~r, e, t, o, c, i)
                }

                function u(e, t, n, r, o, c, i) {
                    return a(t ^ n ^ r, e, t, o, c, i)
                }

                function s(e, t, n, r, o, c, i) {
                    return a(n ^ (t | ~r), e, t, o, c, i)
                }

                function f(e, t) {
                    var n, r, a, f, l;
                    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                    var d = 1732584193,
                        p = -271733879,
                        v = -1732584194,
                        h = 271733878;
                    for (n = 0; n < e.length; n += 16) r = d, a = p, f = v, l = h, d = c(d, p, v, h, e[n], 7, -680876936), h = c(h, d, p, v, e[n + 1], 12, -389564586), v = c(v, h, d, p, e[n + 2], 17, 606105819), p = c(p, v, h, d, e[n + 3], 22, -1044525330), d = c(d, p, v, h, e[n + 4], 7, -176418897), h = c(h, d, p, v, e[n + 5], 12, 1200080426), v = c(v, h, d, p, e[n + 6], 17, -1473231341), p = c(p, v, h, d, e[n + 7], 22, -45705983), d = c(d, p, v, h, e[n + 8], 7, 1770035416), h = c(h, d, p, v, e[n + 9], 12, -1958414417), v = c(v, h, d, p, e[n + 10], 17, -42063), p = c(p, v, h, d, e[n + 11], 22, -1990404162), d = c(d, p, v, h, e[n + 12], 7, 1804603682), h = c(h, d, p, v, e[n + 13], 12, -40341101), v = c(v, h, d, p, e[n + 14], 17, -1502002290), d = i(d, p = c(p, v, h, d, e[n + 15], 22, 1236535329), v, h, e[n + 1], 5, -165796510), h = i(h, d, p, v, e[n + 6], 9, -1069501632), v = i(v, h, d, p, e[n + 11], 14, 643717713), p = i(p, v, h, d, e[n], 20, -373897302), d = i(d, p, v, h, e[n + 5], 5, -701558691), h = i(h, d, p, v, e[n + 10], 9, 38016083), v = i(v, h, d, p, e[n + 15], 14, -660478335), p = i(p, v, h, d, e[n + 4], 20, -405537848), d = i(d, p, v, h, e[n + 9], 5, 568446438), h = i(h, d, p, v, e[n + 14], 9, -1019803690), v = i(v, h, d, p, e[n + 3], 14, -187363961), p = i(p, v, h, d, e[n + 8], 20, 1163531501), d = i(d, p, v, h, e[n + 13], 5, -1444681467), h = i(h, d, p, v, e[n + 2], 9, -51403784), v = i(v, h, d, p, e[n + 7], 14, 1735328473), d = u(d, p = i(p, v, h, d, e[n + 12], 20, -1926607734), v, h, e[n + 5], 4, -378558), h = u(h, d, p, v, e[n + 8], 11, -2022574463), v = u(v, h, d, p, e[n + 11], 16, 1839030562), p = u(p, v, h, d, e[n + 14], 23, -35309556), d = u(d, p, v, h, e[n + 1], 4, -1530992060), h = u(h, d, p, v, e[n + 4], 11, 1272893353), v = u(v, h, d, p, e[n + 7], 16, -155497632), p = u(p, v, h, d, e[n + 10], 23, -1094730640), d = u(d, p, v, h, e[n + 13], 4, 681279174), h = u(h, d, p, v, e[n], 11, -358537222), v = u(v, h, d, p, e[n + 3], 16, -722521979), p = u(p, v, h, d, e[n + 6], 23, 76029189), d = u(d, p, v, h, e[n + 9], 4, -640364487), h = u(h, d, p, v, e[n + 12], 11, -421815835), v = u(v, h, d, p, e[n + 15], 16, 530742520), d = s(d, p = u(p, v, h, d, e[n + 2], 23, -995338651), v, h, e[n], 6, -198630844), h = s(h, d, p, v, e[n + 7], 10, 1126891415), v = s(v, h, d, p, e[n + 14], 15, -1416354905), p = s(p, v, h, d, e[n + 5], 21, -57434055), d = s(d, p, v, h, e[n + 12], 6, 1700485571), h = s(h, d, p, v, e[n + 3], 10, -1894986606), v = s(v, h, d, p, e[n + 10], 15, -1051523), p = s(p, v, h, d, e[n + 1], 21, -2054922799), d = s(d, p, v, h, e[n + 8], 6, 1873313359), h = s(h, d, p, v, e[n + 15], 10, -30611744), v = s(v, h, d, p, e[n + 6], 15, -1560198380), p = s(p, v, h, d, e[n + 13], 21, 1309151649), d = s(d, p, v, h, e[n + 4], 6, -145523070), h = s(h, d, p, v, e[n + 11], 10, -1120210379), v = s(v, h, d, p, e[n + 2], 15, 718787259), p = s(p, v, h, d, e[n + 9], 21, -343485551), d = o(d, r), p = o(p, a), v = o(v, f), h = o(h, l);
                    return [d, p, v, h]
                }

                function l(e) {
                    var t, n = "",
                        r = 32 * e.length;
                    for (t = 0; t < r; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                    return n
                }

                function d(e) {
                    var t, n = [];
                    for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                    var r = 8 * e.length;
                    for (t = 0; t < r; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                    return n
                }

                function p(e) {
                    var t, n, r = "0123456789abcdef",
                        o = "";
                    for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), o += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
                    return o
                }

                function v(e) {
                    return unescape(encodeURIComponent(e))
                }

                function h(e) {
                    return function(e) {
                        return l(f(d(e), 8 * e.length))
                    }(v(e))
                }

                function g(e, t) {
                    return function(e, t) {
                        var n, r, o = d(e),
                            a = [],
                            c = [];
                        for (a[15] = c[15] = void 0, o.length > 16 && (o = f(o, 8 * e.length)), n = 0; n < 16; n += 1) a[n] = 909522486 ^ o[n], c[n] = 1549556828 ^ o[n];
                        return r = f(a.concat(d(t)), 512 + 8 * t.length), l(f(c.concat(r), 640))
                    }(v(e), v(t))
                }

                function b(e, t, n) {
                    return t ? n ? g(t, e) : p(g(t, e)) : n ? h(e) : p(h(e))
                }
                void 0 === (r = function() {
                    return b
                }.call(t, n, t, e)) || (e.exports = r)
            }()
        },
        cMQ8: function(e, t, n) {
            var r, o;
            o = "undefined" !== typeof self ? self : "undefined" !== typeof window ? window : "undefined" !== typeof n.g ? n.g : this, e.exports = function(n) {
                "use strict";
                var o, a = (n = n || {}).Base64,
                    c = "2.6.4",
                    i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    u = function(e) {
                        for (var t = {}, n = 0, r = e.length; n < r; n++) t[e.charAt(n)] = n;
                        return t
                    }(i),
                    s = String.fromCharCode,
                    f = function(e) {
                        if (e.length < 2) return (t = e.charCodeAt(0)) < 128 ? e : t < 2048 ? s(192 | t >>> 6) + s(128 | 63 & t) : s(224 | t >>> 12 & 15) + s(128 | t >>> 6 & 63) + s(128 | 63 & t);
                        var t = 65536 + 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320);
                        return s(240 | t >>> 18 & 7) + s(128 | t >>> 12 & 63) + s(128 | t >>> 6 & 63) + s(128 | 63 & t)
                    },
                    l = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
                    d = function(e) {
                        return e.replace(l, f)
                    },
                    p = function(e) {
                        var t = [0, 2, 1][e.length % 3],
                            n = e.charCodeAt(0) << 16 | (e.length > 1 ? e.charCodeAt(1) : 0) << 8 | (e.length > 2 ? e.charCodeAt(2) : 0);
                        return [i.charAt(n >>> 18), i.charAt(n >>> 12 & 63), t >= 2 ? "=" : i.charAt(n >>> 6 & 63), t >= 1 ? "=" : i.charAt(63 & n)].join("")
                    },
                    v = n.btoa && "function" == typeof n.btoa ? function(e) {
                        return n.btoa(e)
                    } : function(e) {
                        if (e.match(/[^\x00-\xFF]/)) throw new RangeError("The string contains invalid characters.");
                        return e.replace(/[\s\S]{1,3}/g, p)
                    },
                    h = function(e) {
                        return v(d(String(e)))
                    },
                    g = function(e) {
                        return e.replace(/[+\/]/g, (function(e) {
                            return "+" == e ? "-" : "_"
                        })).replace(/=/g, "")
                    },
                    b = function(e, t) {
                        return t ? g(h(e)) : h(e)
                    },
                    w = function(e) {
                        return b(e, !0)
                    };
                n.Uint8Array && (o = function(e, t) {
                    for (var n = "", r = 0, o = e.length; r < o; r += 3) {
                        var a = e[r],
                            c = e[r + 1],
                            u = e[r + 2],
                            s = a << 16 | c << 8 | u;
                        n += i.charAt(s >>> 18) + i.charAt(s >>> 12 & 63) + ("undefined" != typeof c ? i.charAt(s >>> 6 & 63) : "=") + ("undefined" != typeof u ? i.charAt(63 & s) : "=")
                    }
                    return t ? g(n) : n
                });
                var m, y = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
                    S = function(e) {
                        switch (e.length) {
                            case 4:
                                var t = ((7 & e.charCodeAt(0)) << 18 | (63 & e.charCodeAt(1)) << 12 | (63 & e.charCodeAt(2)) << 6 | 63 & e.charCodeAt(3)) - 65536;
                                return s(55296 + (t >>> 10)) + s(56320 + (1023 & t));
                            case 3:
                                return s((15 & e.charCodeAt(0)) << 12 | (63 & e.charCodeAt(1)) << 6 | 63 & e.charCodeAt(2));
                            default:
                                return s((31 & e.charCodeAt(0)) << 6 | 63 & e.charCodeAt(1))
                        }
                    },
                    x = function(e) {
                        return e.replace(y, S)
                    },
                    _ = function(e) {
                        var t = e.length,
                            n = t % 4,
                            r = (t > 0 ? u[e.charAt(0)] << 18 : 0) | (t > 1 ? u[e.charAt(1)] << 12 : 0) | (t > 2 ? u[e.charAt(2)] << 6 : 0) | (t > 3 ? u[e.charAt(3)] : 0),
                            o = [s(r >>> 16), s(r >>> 8 & 255), s(255 & r)];
                        return o.length -= [0, 0, 2, 1][n], o.join("")
                    },
                    A = n.atob && "function" == typeof n.atob ? function(e) {
                        return n.atob(e)
                    } : function(e) {
                        return e.replace(/\S{1,4}/g, _)
                    },
                    C = function(e) {
                        return A(String(e).replace(/[^A-Za-z0-9\+\/]/g, ""))
                    },
                    O = function(e) {
                        return x(A(e))
                    },
                    k = function(e) {
                        return String(e).replace(/[-_]/g, (function(e) {
                            return "-" == e ? "+" : "/"
                        })).replace(/[^A-Za-z0-9\+\/]/g, "")
                    },
                    R = function(e) {
                        return O(k(e))
                    };
                n.Uint8Array && (m = function(e) {
                    return Uint8Array.from(C(k(e)), (function(e) {
                        return e.charCodeAt(0)
                    }))
                });
                var I = function() {
                    var e = n.Base64;
                    return n.Base64 = a, e
                };
                if (n.Base64 = {
                        VERSION: c,
                        atob: C,
                        btoa: v,
                        fromBase64: R,
                        toBase64: b,
                        utob: d,
                        encode: b,
                        encodeURI: w,
                        btou: x,
                        decode: R,
                        noConflict: I,
                        fromUint8Array: o,
                        toUint8Array: m
                    }, "function" === typeof Object.defineProperty) {
                    var j = function(e) {
                        return {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    };
                    n.Base64.extendString = function() {
                        Object.defineProperty(String.prototype, "fromBase64", j((function() {
                            return R(this)
                        }))), Object.defineProperty(String.prototype, "toBase64", j((function(e) {
                            return b(this, e)
                        }))), Object.defineProperty(String.prototype, "toBase64URI", j((function() {
                            return b(this, !0)
                        })))
                    }
                }
                return n.Meteor && (Base64 = n.Base64), e.exports ? e.exports.Base64 = n.Base64 : void 0 === (r = function() {
                    return n.Base64
                }.apply(t, [])) || (e.exports = r), {
                    Base64: n.Base64
                }
            }(o)
        }
    }
]);