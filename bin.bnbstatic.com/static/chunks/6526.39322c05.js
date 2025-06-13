"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [6526], {
        qRru: (e, t, r) => {
            r.d(t, {
                w_: () => s,
                cc: () => c,
                u4: () => u
            });
            var n = r("1CC6");
            const o = "undefined" === typeof window;
            let a, i = "";
            "undefined" !== typeof window && (i = function(e, t) {
                const r = document.getElementsByTagName("meta");
                for (let n = 0; n < r.length; n++)
                    if (r[n].getAttribute(e) === t) return r[n].getAttribute("content");
                return ""
            }("http-equiv", "etag"));
            const c = e => {
                    a = e
                },
                s = () => a,
                l = new Set,
                u = (e, t) => {
                    o || (l.add([e, t]), a && (l.forEach((([e, t]) => {
                        const r = { ...t,
                            etag: i,
                            bnc_uuid: n.U.read("bnc-uuid")
                        };
                        a.track(e, r)
                    })), l.clear()))
                }
        },
        CfyP: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => $
            });
            var n, o = r("hrAD"),
                a = r("KrVi"),
                i = r("d12p"),
                c = r("qoEP"),
                s = r("7ZgD"),
                l = r("1CC6"),
                u = r("m0k9"),
                d = r("hjFp"),
                f = r("J02F"),
                p = r("UEAs"),
                y = (r("ew97"), (0, u.S)().isHybrid);
            ! function(e) {
                e.Electron = "electron", e.Hybrid = "Hybrid", e.Web = "Web"
            }(n || (n = {}));
            var m, h, w = function() {
                    return /electron/i.test(navigator.userAgent) ? n.Electron : y ? n.Hybrid : n.Web
                },
                g = function(e, t) {
                    var r = document.createElement("script");
                    r.setAttribute("data-ot-ignore", "true"), r.setAttribute("class", "optanon-category-C0001");
                    var n = document.getElementsByTagName("script")[0];
                    r.async = !0, r.src = e, r.onload = t, (null === n || void 0 === n ? void 0 : n.parentNode) ? n.parentNode.insertBefore(r, n) : document.body.appendChild(r)
                },
                b = [],
                v = "UA-162512367-1",
                _ = ["track", "quick", "register", "registerPage", "registerOnce", "clearAllRegister", "trackSignup", "trackAbtest", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "use"],
                j = (0, u.S)().isHybrid,
                E = (0, f.vt)((0, f.Q)(d)),
                A = function(e) {
                    var t = e.sdk_url,
                        r = void 0 === t ? "https://bin.bnbstatic.com/static/sensors/sensorsdata@1.15.26.js" : t,
                        n = e.heatmap_url,
                        i = void 0 === n ? "https://bin.bnbstatic.com/static/sensors/heatmap@1.15.26.js" : n,
                        s = e.name,
                        l = void 0 === s ? "sensor" : s,
                        u = (0, a._)(e, ["sdk_url", "heatmap_url", "name"]);
                    if (r = r.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), i = i.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), window.sensorsDataAnalytic201505 = l, !window[l]) {
                        window[l] = window[l] || function(e) {
                            return function() {
                                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                                (window[l]._q = window[l]._q || []).push([e, r])
                            }
                        }, m = window[l];
                        for (var d = 0; d < _.length; d++) m[_[d]] = m.call(null, _[d]);
                        m._t || (g(r, (function() {
                            return m = window[l]
                        })), m.para = (0, c._)((0, o._)({}, u), {
                            heatmap_url: i
                        }))
                    }
                },
                O = function() {
                    return function() {
                        var e = Object.create(null);
                        _.forEach((function(t) {
                            e[t] = {
                                configurable: !0,
                                get: function() {
                                    return m ? m[t] : (s.o && console.error("error: run ".concat(t, " handler after init")), console.log("empty", m), function() {})
                                }
                            }
                        }));
                        var t = Object.create(null);
                        return Object.defineProperties(t, e), t.init = s.o ? A : function() {}, t
                    }()
                },
                D = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n;
                    (n = console).log.apply(n, ["ssr call"].concat((0, i._)(t)))
                };
            const k = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (s.o) {
                    "y" === l.U.read("data_opt_out") ? window["ga-disable-".concat(v)] = !0 : window["ga-disable-".concat(v)] = !1,
                        function(e) {
                            var t = e.sdk_url,
                                r = void 0 === t ? "https://www.google-analytics.com/analytics.js" : t,
                                n = e.name,
                                o = void 0 === n ? "ga" : n;
                            window.GoogleAnalyticsObject = o, window[o] || (window[o] = window[o] || function() {
                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                (window[o].q = window[o].q || []).push(t)
                            }, window[o].l = +new Date), document.querySelector("script[src*=analytics]") || g(r, (function() {
                                return h = window[o]
                            })), (h = window[o])("create", v, "auto")
                        }(e);
                    var t = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        h.apply(void 0, (0, i._)(t))
                    };
                    return t.track = function(e, t, r) {
                        h("send", {
                            hitType: "event",
                            eventCategory: e,
                            eventAction: null === t || void 0 === t ? void 0 : t.elementID,
                            eventLabel: window.location,
                            custom_dimension: t,
                            hitCallback: r
                        })
                    }, t.login = function(e) {
                        h("set", "userId", e)
                    }, t
                }
                var r = function() {};
                return r.track = D, r.login = D, r
            };
            var x = r("x5+s"),
                I = function(e) {
                    console.warn("You login ".concat(e, ",but never init sensor or ga"))
                };
            const P = function(e) {
                return I(e)
            };
            var S = r("S+0I"),
                T = r("66mo"),
                C = r.n(T),
                N = r("tLIz"),
                K = r("QQ00"),
                L = function(e) {
                    if (s.o) {
                        var t = window.location.host;
                        (t.includes("qa1fdg") || t.includes("devfdg") || t.includes("localhost")) && console.info("datalayer", e), window.dataLayer = window.dataLayer || [], "y" === l.U.read("data_opt_out") || window.dataLayer.push(e)
                    }
                },
                R = function() {
                    var e = (0, S._)(C().mark((function e(t, r) {
                        var n, a, i, c, u, d, f;
                        return C().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.getUserId, a = t.cancel, i = t.extraParams, s.o && !a && r) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (c = window.location.pathname.match(/\/[a-z]{2}(-[a-zA-Z]{2})?(\/.*)?/), u = c ? c[2] : "/", d = {
                                            pageName: u,
                                            bncUUID: l.U.read("bnc-uuid")
                                        }, !window.location.origin.startsWith("https")) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 9, (0, N.CY)();
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
                                    return e.next = 19, (0, K.Tc)();
                                case 19:
                                    e.t0 = e.sent.userId;
                                case 20:
                                    f = e.t0, d.userId = f, P(f);
                                case 23:
                                    d = (0, o._)({}, d, "object" === typeof i ? i : {}), L({
                                        event: "page loading",
                                        page_load_info: d
                                    });
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                H = r("p8v0"),
                U = r.n(H),
                F = function() {};
            const q = function(e) {
                var t = e.sensorsConfig,
                    r = e.ableGA,
                    u = e.otherDisabledEvent,
                    d = void 0 === u ? b : u,
                    f = e.pageViewLayerConfig,
                    y = void 0 === f ? {} : f,
                    m = e.autoLogin,
                    h = void 0 === m || m;
                F();
                var g, v, _ = [],
                    A = function(e, t, r) {
                        if ((null === t || void 0 === t ? void 0 : t.elementId) && (t.elementID = t.elementId, delete t.elementId), (null === t || void 0 === t ? void 0 : t.extraInfo) && (t.extraInfo = JSON.stringify(t.extraInfo)), location.origin.includes("localhost")) {
                            if (e.startsWith("$")) throw new Error('event name must not start with "$"');
                            if (Number.isInteger(e[0])) throw new Error("event name cannot start with a number");
                            if (!/^[0-9a-zA-Z_\$]+$/.test(e)) throw new Error("event name can only contain numbers/letters/underscores/$")
                        }
                        g.track(e, t, r)
                    };
                try {
                    "undefined" !== typeof window && window.__PIKA_TRACK__ && (g = window.__PIKA_TRACK__.sensors, _.push(A))
                } catch ($) {}
                if (("undefined" === typeof window || !window.__PIKA_TRACK__) && t) {
                    var D = t.staticHost,
                        P = (t.update, t.old),
                        S = (t.test, t.publicParams),
                        T = t.initParams,
                        C = (0, a._)(t, ["staticHost", "update", "old", "test", "publicParams", "initParams"]);
                    g = O();
                    var N = (0, o._)({
                        name: "SensorsSdk",
                        send_type: "beacon",
                        use_client_time: !0,
                        datasend_timeout: 1e4,
                        is_track_single_page: !0,
                        app_js_bridge: {
                            white_list: (0, i._)(new Set([null === C || void 0 === C ? void 0 : C.server_url, "https://sensors.binance.cloud/sa?project=binance", "https://api.saasexch.com/bapi/fe/usd/sa?project=binance", "https://api.saasexch.cc/bapi/fe/usd/sa?project=binance", "https://api.saasexch.co/bapi/fe/usd/sa?project=binance", "https://api.saasexch.io/bapi/fe/usd/sa?project=binance", "https://api.saasexch.info/bapi/fe/usd/sa?project=binance"].filter(Boolean)))
                        },
                        show_log: !1,
                        heatmap: {
                            collect_tags: {
                                div: !0
                            }
                        }
                    }, C);
                    D && (P ? Object.assign(N, {
                        sdk_url: "".concat(D, "/static/sensors/sensorsdata@1.15.26.js"),
                        heatmap_url: "".concat(D, "/static/sensors/heatmap@1.15.26.js"),
                        vtrack_url: "".concat(D, "/static/sensors/vtrack.min.js")
                    }) : Object.assign(N, {
                        sdk_url: "".concat(D, "/static/sensors/sensorsdata@1.26.12.js"),
                        heatmap_url: "".concat(D, "/static/sensors/heatmap@1.26.12.js"),
                        vtrack_url: "".concat(D, "/static/sensors/vtrack@1.26.12.js")
                    }));
                    try {
                        var K, L, H, q = (null === (L = null === C || void 0 === C || null === (K = C.server_url) || void 0 === K ? void 0 : K.split("?")) || void 0 === L ? void 0 : L[1]) || "",
                            B = U().parse(q).project;
                        B && (H = "https://ss.datasconsole.com?project=".concat(B)), H && (N.web_url = H)
                    } catch ($) {}
                    T && Object.assign(N, T), g.init(N),
                        function(e, t) {
                            if (s.o) {
                                (0, p.o)(t);
                                var r = /\/([a-z]{2}(-[a-zA-Z]{2})?)(\/)?/,
                                    a = window.location,
                                    i = a.pathname,
                                    u = a.hash,
                                    d = i.match(r),
                                    f = n.Web,
                                    y = d ? d[1] : String();
                                if (w() === n.Electron && (d = u.match(r), y = d ? d[1] : String(), f = n.Electron), j) {
                                    var m = !0,
                                        h = [],
                                        g = e.quick;
                                    Object.defineProperty(e, "quick", {
                                        get: function() {
                                            return function(e) {
                                                m ? h.push((function() {
                                                    return g(e)
                                                })) : g(e)
                                            }
                                        }
                                    }), E.getAppConfig().then((function(r) {
                                        var n = r.project_type;
                                        m = !1, e.registerPage((0, c._)((0, o._)({
                                            $url: window.location.href,
                                            $bot_name: l.U.read("bnc-uuid"),
                                            df_1: n,
                                            df_fvideoid: l.U.read("BNC_FV_KEY")
                                        }, t), {
                                            df_2: y,
                                            theme: l.U.read("theme")
                                        })), h.forEach((function(e) {
                                            return e()
                                        }))
                                    }))
                                } else e.registerPage((0, c._)((0, o._)({
                                    $url: window.location.href,
                                    $bot_name: l.U.read("bnc-uuid"),
                                    df_1: f,
                                    df_fvideoid: l.U.read("BNC_FV_KEY")
                                }, t), {
                                    df_2: y,
                                    theme: l.U.read("theme")
                                }))
                            }
                        }(g, S), g.use("PageLeave", {
                            custom_props: {},
                            heartbeat_interval_time: 5
                        }), _.push(A)
                }
                if (r) {
                    var V;
                    v = k();
                    _.push((function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return (V = v).track.apply(V, (0, i._)(t))
                    }))
                }
                if (_.length) {
                    var Q = function(e, t, r) {
                        var n = [],
                            a = function() {
                                var e = {
                                    gaTrack: "gaDisabled",
                                    bTrack: "bTrackDisabled",
                                    sensorsTrack: "sensorsDisabled"
                                };
                                return function(t, r) {
                                    return !r[e[t]]
                                }
                            }();
                        return function(e, t) {
                            return !Array.isArray(t) || !t.find((function(t) {
                                return t === e
                            }))
                        }(e, d) && _.forEach((function(i) {
                            a(i.name, r) && n.push(function(e, t, r) {
                                return new Promise((function(n) {
                                    r(e, (0, o._)({}, t), (function(e) {
                                        return n({
                                            type: r.name,
                                            success: "boolean" !== typeof e || e
                                        })
                                    })), setTimeout((function() {
                                        n({
                                            type: r.name,
                                            success: !1
                                        })
                                    }), 5e3)
                                }))
                            }(e, t, i))
                        })), Promise.all(n).then(null === r || void 0 === r ? void 0 : r.callback), n[n.length - 1]
                    };
                    Q && (0, x.D)(Q),
                        function(e) {
                            I = e
                        }((function(e) {
                            g && g.login(e), v && v.login(e)
                        }))
                }
                try {
                    if ("undefined" !== typeof window && window.__PIKA_TRACK__) return window.__PIKA_TRACK__
                } catch (G) {}
                R(y, h);
                try {
                    if ("undefined" !== typeof window) {
                        var z = Object.create(g);
                        Object.defineProperty(z, "quick", {
                            configurable: !0,
                            value: function() {}
                        }), window.__PIKA_TRACK__ = {
                            sensors: z,
                            ga: v
                        }
                    }
                } catch (W) {}
                return {
                    sensors: g,
                    ga: v
                }
            };
            var B = r("qRru"),
                V = r("DTvD"),
                Q = r("gYIm"),
                z = r("Gii1");
            const $ = function() {
                var e = (0, z.Py)().userId;
                return (0, V.useEffect)((function() {
                    try {
                        var e = q({
                            sensorsConfig: {
                                server_url: Q.LD,
                                staticHost: Q.K5,
                                batch_send: !0,
                                heatmap: {
                                    track_attr: ["data-testid"],
                                    custom_property: function(e) {
                                        if (e) {
                                            var t, r = {
                                                    tag: "landing-strategy-ui"
                                                },
                                                n = null === (t = e.dataset) || void 0 === t ? void 0 : t.testid;
                                            return n && (r.dataTestId = n), r
                                        }
                                    }
                                }
                            },
                            ableGA: !1
                        }).sensors;
                        (0, B.cc)(e), e.quick("autoTrack", {
                            tag: "landing-strategy-ui",
                            canary: "beta",
                            version: Q.Hw
                        })
                    } catch (t) {}
                }), []), (0, V.useEffect)((function() {
                    e && P(e)
                }), [e]), null
            }
        },
        jUV6: e => {
            var t = String.prototype.replace,
                r = /%20/g,
                n = "RFC1738",
                o = "RFC3986";
            e.exports = {
                default: o,
                formatters: {
                    RFC1738: function(e) {
                        return t.call(e, r, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: n,
                RFC3986: o
            }
        },
        p8v0: (e, t, r) => {
            var n = r("aEGj"),
                o = r("3jG/"),
                a = r("jUV6");
            e.exports = {
                formats: a,
                parse: o,
                stringify: n
            }
        },
        "3jG/": (e, t, r) => {
            var n = r("/8cR"),
                o = Object.prototype.hasOwnProperty,
                a = Array.isArray,
                i = {
                    allowDots: !1,
                    allowEmptyArrays: !1,
                    allowPrototypes: !1,
                    allowSparse: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decodeDotInKeys: !1,
                    decoder: n.decode,
                    delimiter: "&",
                    depth: 5,
                    duplicates: "combine",
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictDepth: !1,
                    strictNullHandling: !1,
                    throwOnLimitExceeded: !1
                },
                c = function(e) {
                    return e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(parseInt(t, 10))
                    }))
                },
                s = function(e, t, r) {
                    if (e && "string" === typeof e && t.comma && e.indexOf(",") > -1) return e.split(",");
                    if (t.throwOnLimitExceeded && r >= t.arrayLimit) throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (1 === t.arrayLimit ? "" : "s") + " allowed in an array.");
                    return e
                },
                l = function(e, t, r, a) {
                    if (e) {
                        var i = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            c = /(\[[^[\]]*])/g,
                            l = r.depth > 0 && /(\[[^[\]]*])/.exec(i),
                            u = l ? i.slice(0, l.index) : i,
                            d = [];
                        if (u) {
                            if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes) return;
                            d.push(u)
                        }
                        for (var f = 0; r.depth > 0 && null !== (l = c.exec(i)) && f < r.depth;) {
                            if (f += 1, !r.plainObjects && o.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes) return;
                            d.push(l[1])
                        }
                        if (l) {
                            if (!0 === r.strictDepth) throw new RangeError("Input depth exceeded depth option of " + r.depth + " and strictDepth is true");
                            d.push("[" + i.slice(l.index) + "]")
                        }
                        return function(e, t, r, o) {
                            var a = 0;
                            if (e.length > 0 && "[]" === e[e.length - 1]) {
                                var i = e.slice(0, -1).join("");
                                a = Array.isArray(t) && t[i] ? t[i].length : 0
                            }
                            for (var c = o ? t : s(t, r, a), l = e.length - 1; l >= 0; --l) {
                                var u, d = e[l];
                                if ("[]" === d && r.parseArrays) u = r.allowEmptyArrays && ("" === c || r.strictNullHandling && null === c) ? [] : n.combine([], c);
                                else {
                                    u = r.plainObjects ? {
                                        __proto__: null
                                    } : {};
                                    var f = "[" === d.charAt(0) && "]" === d.charAt(d.length - 1) ? d.slice(1, -1) : d,
                                        p = r.decodeDotInKeys ? f.replace(/%2E/g, ".") : f,
                                        y = parseInt(p, 10);
                                    r.parseArrays || "" !== p ? !isNaN(y) && d !== p && String(y) === p && y >= 0 && r.parseArrays && y <= r.arrayLimit ? (u = [])[y] = c : "__proto__" !== p && (u[p] = c) : u = {
                                        0: c
                                    }
                                }
                                c = u
                            }
                            return c
                        }(d, t, r, a)
                    }
                };
            e.exports = function(e, t) {
                var r = function(e) {
                    if (!e) return i;
                    if ("undefined" !== typeof e.allowEmptyArrays && "boolean" !== typeof e.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if ("undefined" !== typeof e.decodeDotInKeys && "boolean" !== typeof e.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== e.decoder && "undefined" !== typeof e.decoder && "function" !== typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                    if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    if ("undefined" !== typeof e.throwOnLimitExceeded && "boolean" !== typeof e.throwOnLimitExceeded) throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
                    var t = "undefined" === typeof e.charset ? i.charset : e.charset,
                        r = "undefined" === typeof e.duplicates ? i.duplicates : e.duplicates;
                    if ("combine" !== r && "first" !== r && "last" !== r) throw new TypeError("The duplicates option must be either combine, first, or last");
                    return {
                        allowDots: "undefined" === typeof e.allowDots ? !0 === e.decodeDotInKeys || i.allowDots : !!e.allowDots,
                        allowEmptyArrays: "boolean" === typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : i.allowEmptyArrays,
                        allowPrototypes: "boolean" === typeof e.allowPrototypes ? e.allowPrototypes : i.allowPrototypes,
                        allowSparse: "boolean" === typeof e.allowSparse ? e.allowSparse : i.allowSparse,
                        arrayLimit: "number" === typeof e.arrayLimit ? e.arrayLimit : i.arrayLimit,
                        charset: t,
                        charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : i.charsetSentinel,
                        comma: "boolean" === typeof e.comma ? e.comma : i.comma,
                        decodeDotInKeys: "boolean" === typeof e.decodeDotInKeys ? e.decodeDotInKeys : i.decodeDotInKeys,
                        decoder: "function" === typeof e.decoder ? e.decoder : i.decoder,
                        delimiter: "string" === typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : i.delimiter,
                        depth: "number" === typeof e.depth || !1 === e.depth ? +e.depth : i.depth,
                        duplicates: r,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" === typeof e.interpretNumericEntities ? e.interpretNumericEntities : i.interpretNumericEntities,
                        parameterLimit: "number" === typeof e.parameterLimit ? e.parameterLimit : i.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" === typeof e.plainObjects ? e.plainObjects : i.plainObjects,
                        strictDepth: "boolean" === typeof e.strictDepth ? !!e.strictDepth : i.strictDepth,
                        strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : i.strictNullHandling,
                        throwOnLimitExceeded: "boolean" === typeof e.throwOnLimitExceeded && e.throwOnLimitExceeded
                    }
                }(t);
                if ("" === e || null === e || "undefined" === typeof e) return r.plainObjects ? {
                    __proto__: null
                } : {};
                for (var u = "string" === typeof e ? function(e, t) {
                        var r = {
                                __proto__: null
                            },
                            l = t.ignoreQueryPrefix ? e.replace(/^\?/, "") : e;
                        l = l.replace(/%5B/gi, "[").replace(/%5D/gi, "]");
                        var u = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                            d = l.split(t.delimiter, t.throwOnLimitExceeded ? u + 1 : u);
                        if (t.throwOnLimitExceeded && d.length > u) throw new RangeError("Parameter limit exceeded. Only " + u + " parameter" + (1 === u ? "" : "s") + " allowed.");
                        var f, p = -1,
                            y = t.charset;
                        if (t.charsetSentinel)
                            for (f = 0; f < d.length; ++f) 0 === d[f].indexOf("utf8=") && ("utf8=%E2%9C%93" === d[f] ? y = "utf-8" : "utf8=%26%2310003%3B" === d[f] && (y = "iso-8859-1"), p = f, f = d.length);
                        for (f = 0; f < d.length; ++f)
                            if (f !== p) {
                                var m, h, w = d[f],
                                    g = w.indexOf("]="),
                                    b = -1 === g ? w.indexOf("=") : g + 1; - 1 === b ? (m = t.decoder(w, i.decoder, y, "key"), h = t.strictNullHandling ? null : "") : (m = t.decoder(w.slice(0, b), i.decoder, y, "key"), h = n.maybeMap(s(w.slice(b + 1), t, a(r[m]) ? r[m].length : 0), (function(e) {
                                    return t.decoder(e, i.decoder, y, "value")
                                }))), h && t.interpretNumericEntities && "iso-8859-1" === y && (h = c(String(h))), w.indexOf("[]=") > -1 && (h = a(h) ? [h] : h);
                                var v = o.call(r, m);
                                v && "combine" === t.duplicates ? r[m] = n.combine(r[m], h) : v && "last" !== t.duplicates || (r[m] = h)
                            }
                        return r
                    }(e, r) : e, d = r.plainObjects ? {
                        __proto__: null
                    } : {}, f = Object.keys(u), p = 0; p < f.length; ++p) {
                    var y = f[p],
                        m = l(y, u[y], r, "string" === typeof e);
                    d = n.merge(d, m, r)
                }
                return !0 === r.allowSparse ? d : n.compact(d)
            }
        },
        aEGj: (e, t, r) => {
            var n = r("EJuG"),
                o = r("/8cR"),
                a = r("jUV6"),
                i = Object.prototype.hasOwnProperty,
                c = {
                    brackets: function(e) {
                        return e + "[]"
                    },
                    comma: "comma",
                    indices: function(e, t) {
                        return e + "[" + t + "]"
                    },
                    repeat: function(e) {
                        return e
                    }
                },
                s = Array.isArray,
                l = Array.prototype.push,
                u = function(e, t) {
                    l.apply(e, s(t) ? t : [t])
                },
                d = Date.prototype.toISOString,
                f = a.default,
                p = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    allowEmptyArrays: !1,
                    arrayFormat: "indices",
                    charset: "utf-8",
                    charsetSentinel: !1,
                    commaRoundTrip: !1,
                    delimiter: "&",
                    encode: !0,
                    encodeDotInKeys: !1,
                    encoder: o.encode,
                    encodeValuesOnly: !1,
                    filter: void 0,
                    format: f,
                    formatter: a.formatters[f],
                    indices: !1,
                    serializeDate: function(e) {
                        return d.call(e)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                y = {},
                m = function e(t, r, a, i, c, l, d, f, m, h, w, g, b, v, _, j, E, A) {
                    for (var O, D = t, k = A, x = 0, I = !1; void 0 !== (k = k.get(y)) && !I;) {
                        var P = k.get(t);
                        if (x += 1, "undefined" !== typeof P) {
                            if (P === x) throw new RangeError("Cyclic object value");
                            I = !0
                        }
                        "undefined" === typeof k.get(y) && (x = 0)
                    }
                    if ("function" === typeof h ? D = h(r, D) : D instanceof Date ? D = b(D) : "comma" === a && s(D) && (D = o.maybeMap(D, (function(e) {
                            return e instanceof Date ? b(e) : e
                        }))), null === D) {
                        if (l) return m && !j ? m(r, p.encoder, E, "key", v) : r;
                        D = ""
                    }
                    if ("string" === typeof(O = D) || "number" === typeof O || "boolean" === typeof O || "symbol" === typeof O || "bigint" === typeof O || o.isBuffer(D)) return m ? [_(j ? r : m(r, p.encoder, E, "key", v)) + "=" + _(m(D, p.encoder, E, "value", v))] : [_(r) + "=" + _(String(D))];
                    var S, T = [];
                    if ("undefined" === typeof D) return T;
                    if ("comma" === a && s(D)) j && m && (D = o.maybeMap(D, m)), S = [{
                        value: D.length > 0 ? D.join(",") || null : void 0
                    }];
                    else if (s(h)) S = h;
                    else {
                        var C = Object.keys(D);
                        S = w ? C.sort(w) : C
                    }
                    var N = f ? String(r).replace(/\./g, "%2E") : String(r),
                        K = i && s(D) && 1 === D.length ? N + "[]" : N;
                    if (c && s(D) && 0 === D.length) return K + "[]";
                    for (var L = 0; L < S.length; ++L) {
                        var R = S[L],
                            H = "object" === typeof R && R && "undefined" !== typeof R.value ? R.value : D[R];
                        if (!d || null !== H) {
                            var U = g && f ? String(R).replace(/\./g, "%2E") : String(R),
                                F = s(D) ? "function" === typeof a ? a(K, U) : K : K + (g ? "." + U : "[" + U + "]");
                            A.set(t, x);
                            var q = n();
                            q.set(y, A), u(T, e(H, F, a, i, c, l, d, f, "comma" === a && j && s(D) ? null : m, h, w, g, b, v, _, j, E, q))
                        }
                    }
                    return T
                };
            e.exports = function(e, t) {
                var r, o = e,
                    l = function(e) {
                        if (!e) return p;
                        if ("undefined" !== typeof e.allowEmptyArrays && "boolean" !== typeof e.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                        if ("undefined" !== typeof e.encodeDotInKeys && "boolean" !== typeof e.encodeDotInKeys) throw new TypeError("`encodeDotInKeys` option can only be `true` or `false`, when provided");
                        if (null !== e.encoder && "undefined" !== typeof e.encoder && "function" !== typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                        var t = e.charset || p.charset;
                        if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var r = a.default;
                        if ("undefined" !== typeof e.format) {
                            if (!i.call(a.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                            r = e.format
                        }
                        var n, o = a.formatters[r],
                            l = p.filter;
                        if (("function" === typeof e.filter || s(e.filter)) && (l = e.filter), n = e.arrayFormat in c ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : p.arrayFormat, "commaRoundTrip" in e && "boolean" !== typeof e.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
                        var u = "undefined" === typeof e.allowDots ? !0 === e.encodeDotInKeys || p.allowDots : !!e.allowDots;
                        return {
                            addQueryPrefix: "boolean" === typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                            allowDots: u,
                            allowEmptyArrays: "boolean" === typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : p.allowEmptyArrays,
                            arrayFormat: n,
                            charset: t,
                            charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                            commaRoundTrip: !!e.commaRoundTrip,
                            delimiter: "undefined" === typeof e.delimiter ? p.delimiter : e.delimiter,
                            encode: "boolean" === typeof e.encode ? e.encode : p.encode,
                            encodeDotInKeys: "boolean" === typeof e.encodeDotInKeys ? e.encodeDotInKeys : p.encodeDotInKeys,
                            encoder: "function" === typeof e.encoder ? e.encoder : p.encoder,
                            encodeValuesOnly: "boolean" === typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
                            filter: l,
                            format: r,
                            formatter: o,
                            serializeDate: "function" === typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                            skipNulls: "boolean" === typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                            sort: "function" === typeof e.sort ? e.sort : null,
                            strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
                        }
                    }(t);
                "function" === typeof l.filter ? o = (0, l.filter)("", o) : s(l.filter) && (r = l.filter);
                var d = [];
                if ("object" !== typeof o || null === o) return "";
                var f = c[l.arrayFormat],
                    y = "comma" === f && l.commaRoundTrip;
                r || (r = Object.keys(o)), l.sort && r.sort(l.sort);
                for (var h = n(), w = 0; w < r.length; ++w) {
                    var g = r[w],
                        b = o[g];
                    l.skipNulls && null === b || u(d, m(b, g, f, y, l.allowEmptyArrays, l.strictNullHandling, l.skipNulls, l.encodeDotInKeys, l.encode ? l.encoder : null, l.filter, l.sort, l.allowDots, l.serializeDate, l.format, l.formatter, l.encodeValuesOnly, l.charset, h))
                }
                var v = d.join(l.delimiter),
                    _ = !0 === l.addQueryPrefix ? "?" : "";
                return l.charsetSentinel && ("iso-8859-1" === l.charset ? _ += "utf8=%26%2310003%3B&" : _ += "utf8=%E2%9C%93&"), v.length > 0 ? _ + v : ""
            }
        },
        "/8cR": (e, t, r) => {
            var n = r("jUV6"),
                o = Object.prototype.hasOwnProperty,
                a = Array.isArray,
                i = function() {
                    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                    return e
                }(),
                c = function(e, t) {
                    for (var r = t && t.plainObjects ? {
                            __proto__: null
                        } : {}, n = 0; n < e.length; ++n) "undefined" !== typeof e[n] && (r[n] = e[n]);
                    return r
                },
                s = 1024;
            e.exports = {
                arrayToObject: c,
                assign: function(e, t) {
                    return Object.keys(t).reduce((function(e, r) {
                        return e[r] = t[r], e
                    }), e)
                },
                combine: function(e, t) {
                    return [].concat(e, t)
                },
                compact: function(e) {
                    for (var t = [{
                            obj: {
                                o: e
                            },
                            prop: "o"
                        }], r = [], n = 0; n < t.length; ++n)
                        for (var o = t[n], i = o.obj[o.prop], c = Object.keys(i), s = 0; s < c.length; ++s) {
                            var l = c[s],
                                u = i[l];
                            "object" === typeof u && null !== u && -1 === r.indexOf(u) && (t.push({
                                obj: i,
                                prop: l
                            }), r.push(u))
                        }
                    return function(e) {
                        for (; e.length > 1;) {
                            var t = e.pop(),
                                r = t.obj[t.prop];
                            if (a(r)) {
                                for (var n = [], o = 0; o < r.length; ++o) "undefined" !== typeof r[o] && n.push(r[o]);
                                t.obj[t.prop] = n
                            }
                        }
                    }(t), e
                },
                decode: function(e, t, r) {
                    var n = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === r) return n.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(n)
                    } catch (o) {
                        return n
                    }
                },
                encode: function(e, t, r, o, a) {
                    if (0 === e.length) return e;
                    var c = e;
                    if ("symbol" === typeof e ? c = Symbol.prototype.toString.call(e) : "string" !== typeof e && (c = String(e)), "iso-8859-1" === r) return escape(c).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    }));
                    for (var l = "", u = 0; u < c.length; u += s) {
                        for (var d = c.length >= s ? c.slice(u, u + s) : c, f = [], p = 0; p < d.length; ++p) {
                            var y = d.charCodeAt(p);
                            45 === y || 46 === y || 95 === y || 126 === y || y >= 48 && y <= 57 || y >= 65 && y <= 90 || y >= 97 && y <= 122 || a === n.RFC1738 && (40 === y || 41 === y) ? f[f.length] = d.charAt(p) : y < 128 ? f[f.length] = i[y] : y < 2048 ? f[f.length] = i[192 | y >> 6] + i[128 | 63 & y] : y < 55296 || y >= 57344 ? f[f.length] = i[224 | y >> 12] + i[128 | y >> 6 & 63] + i[128 | 63 & y] : (p += 1, y = 65536 + ((1023 & y) << 10 | 1023 & d.charCodeAt(p)), f[f.length] = i[240 | y >> 18] + i[128 | y >> 12 & 63] + i[128 | y >> 6 & 63] + i[128 | 63 & y])
                        }
                        l += f.join("")
                    }
                    return l
                },
                isBuffer: function(e) {
                    return !(!e || "object" !== typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                },
                isRegExp: function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                },
                maybeMap: function(e, t) {
                    if (a(e)) {
                        for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
                        return r
                    }
                    return t(e)
                },
                merge: function e(t, r, n) {
                    if (!r) return t;
                    if ("object" !== typeof r && "function" !== typeof r) {
                        if (a(t)) t.push(r);
                        else {
                            if (!t || "object" !== typeof t) return [t, r];
                            (n && (n.plainObjects || n.allowPrototypes) || !o.call(Object.prototype, r)) && (t[r] = !0)
                        }
                        return t
                    }
                    if (!t || "object" !== typeof t) return [t].concat(r);
                    var i = t;
                    return a(t) && !a(r) && (i = c(t, n)), a(t) && a(r) ? (r.forEach((function(r, a) {
                        if (o.call(t, a)) {
                            var i = t[a];
                            i && "object" === typeof i && r && "object" === typeof r ? t[a] = e(i, r, n) : t.push(r)
                        } else t[a] = r
                    })), t) : Object.keys(r).reduce((function(t, a) {
                        var i = r[a];
                        return o.call(t, a) ? t[a] = e(t[a], i, n) : t[a] = i, t
                    }), i)
                }
            }
        }
    }
]);