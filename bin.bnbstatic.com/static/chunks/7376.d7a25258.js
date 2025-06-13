"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "959adb21-4292-5b33-8909-ca319e61819f")
    } catch (e) {}
}();
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [7376], {
        "81MD": (e, t, r) => {
            r.d(t, {
                A: () => F
            });
            var n, o = r("hrAD"),
                i = r("KrVi"),
                a = r("d12p"),
                s = r("qoEP"),
                c = r("7ZgD"),
                l = r("1CC6"),
                u = r("m0k9"),
                d = r("hjFp"),
                f = r("J02F"),
                p = r("UEAs"),
                y = (r("ew97"), (0, u.S)().isHybrid);
            ! function(e) {
                e.Electron = "electron", e.Hybrid = "Hybrid", e.Web = "Web"
            }(n || (n = {}));
            var h, m, w = function() {
                    return /electron/i.test(navigator.userAgent) ? n.Electron : y ? n.Hybrid : n.Web
                },
                g = function(e, t) {
                    var r = document.createElement("script");
                    r.setAttribute("data-ot-ignore", "true"), r.setAttribute("class", "optanon-category-C0001");
                    var n = document.getElementsByTagName("script")[0];
                    r.async = !0, r.src = e, r.onload = t, (null === n || void 0 === n ? void 0 : n.parentNode) ? n.parentNode.insertBefore(r, n) : document.body.appendChild(r)
                },
                v = [],
                b = "UA-162512367-1",
                _ = ["track", "quick", "register", "registerPage", "registerOnce", "clearAllRegister", "trackSignup", "trackAbtest", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "use"],
                E = (0, u.S)().isHybrid,
                j = (0, f.vt)((0, f.Q)(d)),
                O = function(e) {
                    var t = e.sdk_url,
                        r = void 0 === t ? "https://bin.bnbstatic.com/static/sensors/sensorsdata@1.15.26.js" : t,
                        n = e.heatmap_url,
                        a = void 0 === n ? "https://bin.bnbstatic.com/static/sensors/heatmap@1.15.26.js" : n,
                        c = e.name,
                        l = void 0 === c ? "sensor" : c,
                        u = (0, i._)(e, ["sdk_url", "heatmap_url", "name"]);
                    if (r = r.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), a = a.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), window.sensorsDataAnalytic201505 = l, !window[l]) {
                        window[l] = window[l] || function(e) {
                            return function() {
                                for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
                                (window[l]._q = window[l]._q || []).push([e, r])
                            }
                        }, h = window[l];
                        for (var d = 0; d < _.length; d++) h[_[d]] = h.call(null, _[d]);
                        h._t || (g(r, (function() {
                            return h = window[l]
                        })), h.para = (0, s._)((0, o._)({}, u), {
                            heatmap_url: a
                        }))
                    }
                },
                A = function() {
                    return function() {
                        var e = Object.create(null);
                        _.forEach((function(t) {
                            e[t] = {
                                configurable: !0,
                                get: function() {
                                    return h ? h[t] : (c.o && console.error("error: run ".concat(t, " handler after init")), console.log("empty", h), function() {})
                                }
                            }
                        }));
                        var t = Object.create(null);
                        return Object.defineProperties(t, e), t.init = c.o ? O : function() {}, t
                    }()
                },
                k = function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    var n;
                    (n = console).log.apply(n, ["ssr call"].concat((0, a._)(t)))
                };
            const x = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (c.o) {
                    "y" === l.U.read("data_opt_out") ? window["ga-disable-".concat(b)] = !0 : window["ga-disable-".concat(b)] = !1,
                        function(e) {
                            var t = e.sdk_url,
                                r = void 0 === t ? "https://www.google-analytics.com/analytics.js" : t,
                                n = e.name,
                                o = void 0 === n ? "ga" : n;
                            window.GoogleAnalyticsObject = o, window[o] || (window[o] = window[o] || function() {
                                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                                (window[o].q = window[o].q || []).push(t)
                            }, window[o].l = +new Date), document.querySelector("script[src*=analytics]") || g(r, (function() {
                                return m = window[o]
                            })), (m = window[o])("create", b, "auto")
                        }(e);
                    var t = function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        m.apply(void 0, (0, a._)(t))
                    };
                    return t.track = function(e, t, r) {
                        m("send", {
                            hitType: "event",
                            eventCategory: e,
                            eventAction: null === t || void 0 === t ? void 0 : t.elementID,
                            eventLabel: window.location,
                            custom_dimension: t,
                            hitCallback: r
                        })
                    }, t.login = function(e) {
                        m("set", "userId", e)
                    }, t
                }
                var r = function() {};
                return r.track = k, r.login = k, r
            };
            var S = r("x5+s"),
                D = r("iuyg"),
                C = r("S+0I"),
                I = r("66mo"),
                P = r.n(I),
                T = r("tLIz"),
                L = r("QQ00"),
                N = function(e) {
                    if (c.o) {
                        var t = window.location.host;
                        (t.includes("qa1fdg") || t.includes("devfdg") || t.includes("localhost")) && console.info("datalayer", e), window.dataLayer = window.dataLayer || [], "y" === l.U.read("data_opt_out") || window.dataLayer.push(e)
                    }
                },
                K = function() {
                    var e = (0, C._)(P().mark((function e(t, r) {
                        var n, i, a, s, u, d, f;
                        return P().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.getUserId, i = t.cancel, a = t.extraParams, c.o && !i && r) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (s = window.location.pathname.match(/\/[a-z]{2}(-[a-zA-Z]{2})?(\/.*)?/), u = s ? s[2] : "/", d = {
                                            pageName: u,
                                            bncUUID: l.U.read("bnc-uuid")
                                        }, !window.location.origin.startsWith("https")) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 9, (0, T.CY)();
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
                                    return e.next = 19, (0, L.Tc)();
                                case 19:
                                    e.t0 = e.sent.userId;
                                case 20:
                                    f = e.t0, d.userId = f, (0, D.A)(f);
                                case 23:
                                    d = (0, o._)({}, d, "object" === typeof a ? a : {}), N({
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
                R = r("p8v0"),
                U = r.n(R),
                H = function() {};
            const F = function(e) {
                var t = e.sensorsConfig,
                    r = e.ableGA,
                    u = e.otherDisabledEvent,
                    d = void 0 === u ? v : u,
                    f = e.pageViewLayerConfig,
                    y = void 0 === f ? {} : f,
                    h = e.autoLogin,
                    m = void 0 === h || h;
                H();
                var g, b, _ = [],
                    O = function(e, t, r) {
                        if ((null === t || void 0 === t ? void 0 : t.elementId) && (t.elementID = t.elementId, delete t.elementId), (null === t || void 0 === t ? void 0 : t.extraInfo) && (t.extraInfo = JSON.stringify(t.extraInfo)), location.origin.includes("localhost")) {
                            if (e.startsWith("$")) throw new Error('event name must not start with "$"');
                            if (Number.isInteger(e[0])) throw new Error("event name cannot start with a number");
                            if (!/^[0-9a-zA-Z_\$]+$/.test(e)) throw new Error("event name can only contain numbers/letters/underscores/$")
                        }
                        g.track(e, t, r)
                    };
                try {
                    "undefined" !== typeof window && window.__PIKA_TRACK__ && (g = window.__PIKA_TRACK__.sensors, _.push(O))
                } catch (M) {}
                if (("undefined" === typeof window || !window.__PIKA_TRACK__) && t) {
                    var k = t.staticHost,
                        C = (t.update, t.old),
                        I = (t.test, t.publicParams),
                        P = t.initParams,
                        T = (0, i._)(t, ["staticHost", "update", "old", "test", "publicParams", "initParams"]);
                    g = A();
                    var L = (0, o._)({
                        name: "SensorsSdk",
                        send_type: "beacon",
                        use_client_time: !0,
                        datasend_timeout: 1e4,
                        is_track_single_page: !0,
                        app_js_bridge: {
                            white_list: (0, a._)(new Set([null === T || void 0 === T ? void 0 : T.server_url, "https://sensors.binance.cloud/sa?project=binance", "https://api.saasexch.com/bapi/fe/usd/sa?project=binance", "https://api.saasexch.cc/bapi/fe/usd/sa?project=binance", "https://api.saasexch.co/bapi/fe/usd/sa?project=binance", "https://api.saasexch.io/bapi/fe/usd/sa?project=binance", "https://api.saasexch.info/bapi/fe/usd/sa?project=binance"].filter(Boolean)))
                        },
                        show_log: !1,
                        heatmap: {
                            collect_tags: {
                                div: !0
                            }
                        }
                    }, T);
                    k && (C ? Object.assign(L, {
                        sdk_url: "".concat(k, "/static/sensors/sensorsdata@1.15.26.js"),
                        heatmap_url: "".concat(k, "/static/sensors/heatmap@1.15.26.js"),
                        vtrack_url: "".concat(k, "/static/sensors/vtrack.min.js")
                    }) : Object.assign(L, {
                        sdk_url: "".concat(k, "/static/sensors/sensorsdata@1.26.12.js"),
                        heatmap_url: "".concat(k, "/static/sensors/heatmap@1.26.12.js"),
                        vtrack_url: "".concat(k, "/static/sensors/vtrack@1.26.12.js")
                    }));
                    try {
                        var N, R, F, V = (null === (R = null === T || void 0 === T || null === (N = T.server_url) || void 0 === N ? void 0 : N.split("?")) || void 0 === R ? void 0 : R[1]) || "",
                            q = U().parse(V).project;
                        q && (F = "https://ss.datasconsole.com?project=".concat(q)), F && (L.web_url = F)
                    } catch (M) {}
                    P && Object.assign(L, P), g.init(L),
                        function(e, t) {
                            if (c.o) {
                                (0, p.o)(t);
                                var r = /\/([a-z]{2}(-[a-zA-Z]{2})?)(\/)?/,
                                    i = window.location,
                                    a = i.pathname,
                                    u = i.hash,
                                    d = a.match(r),
                                    f = n.Web,
                                    y = d ? d[1] : String();
                                if (w() === n.Electron && (d = u.match(r), y = d ? d[1] : String(), f = n.Electron), E) {
                                    var h = !0,
                                        m = [],
                                        g = e.quick;
                                    Object.defineProperty(e, "quick", {
                                        get: function() {
                                            return function(e) {
                                                h ? m.push((function() {
                                                    return g(e)
                                                })) : g(e)
                                            }
                                        }
                                    }), j.getAppConfig().then((function(r) {
                                        var n = r.project_type;
                                        h = !1, e.registerPage((0, s._)((0, o._)({
                                            $url: window.location.href,
                                            $bot_name: l.U.read("bnc-uuid"),
                                            df_1: n,
                                            df_fvideoid: l.U.read("BNC_FV_KEY")
                                        }, t), {
                                            df_2: y,
                                            theme: l.U.read("theme")
                                        })), m.forEach((function(e) {
                                            return e()
                                        }))
                                    }))
                                } else e.registerPage((0, s._)((0, o._)({
                                    $url: window.location.href,
                                    $bot_name: l.U.read("bnc-uuid"),
                                    df_1: f,
                                    df_fvideoid: l.U.read("BNC_FV_KEY")
                                }, t), {
                                    df_2: y,
                                    theme: l.U.read("theme")
                                }))
                            }
                        }(g, I), g.use("PageLeave", {
                            custom_props: {},
                            heartbeat_interval_time: 5
                        }), _.push(O)
                }
                if (r) {
                    var B;
                    b = x();
                    _.push((function() {
                        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                        return (B = b).track.apply(B, (0, a._)(t))
                    }))
                }
                if (_.length) {
                    var Q = function(e, t, r) {
                        var n = [],
                            i = function() {
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
                        }(e, d) && _.forEach((function(a) {
                            i(a.name, r) && n.push(function(e, t, r) {
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
                            }(e, t, a))
                        })), Promise.all(n).then(null === r || void 0 === r ? void 0 : r.callback), n[n.length - 1]
                    };
                    Q && (0, S.D)(Q), (0, D.b)((function(e) {
                        g && g.login(e), b && b.login(e)
                    }))
                }
                try {
                    if ("undefined" !== typeof window && window.__PIKA_TRACK__) return window.__PIKA_TRACK__
                } catch ($) {}
                K(y, m);
                try {
                    if ("undefined" !== typeof window) {
                        var z = Object.create(g);
                        Object.defineProperty(z, "quick", {
                            configurable: !0,
                            value: function() {}
                        }), window.__PIKA_TRACK__ = {
                            sensors: z,
                            ga: b
                        }
                    }
                } catch (G) {}
                return {
                    sensors: g,
                    ga: b
                }
            }
        },
        iuyg: (e, t, r) => {
            r.d(t, {
                A: () => i,
                b: () => o
            });
            var n = function(e) {
                    console.warn("You login ".concat(e, ",but never init sensor or ga"))
                },
                o = function(e) {
                    n = e
                };
            const i = function(e) {
                return n(e)
            }
        },
        L7qe: (e, t) => {
            t.q = function(e, t) {
                if ("string" !== typeof e) throw new TypeError("argument str must be a string");
                for (var n = {}, o = t || {}, a = e.split(";"), s = o.decode || r, c = 0; c < a.length; c++) {
                    var l = a[c],
                        u = l.indexOf("=");
                    if (!(u < 0)) {
                        var d = l.substring(0, u).trim();
                        if (void 0 == n[d]) {
                            var f = l.substring(u + 1, l.length).trim();
                            '"' === f[0] && (f = f.slice(1, -1)), n[d] = i(f, s)
                        }
                    }
                }
                return n
            }, t.l = function(e, t, r) {
                var i = r || {},
                    a = i.encode || n;
                if ("function" !== typeof a) throw new TypeError("option encode is invalid");
                if (!o.test(e)) throw new TypeError("argument name is invalid");
                var s = a(t);
                if (s && !o.test(s)) throw new TypeError("argument val is invalid");
                var c = e + "=" + s;
                if (null != i.maxAge) {
                    var l = i.maxAge - 0;
                    if (isNaN(l) || !isFinite(l)) throw new TypeError("option maxAge is invalid");
                    c += "; Max-Age=" + Math.floor(l)
                }
                if (i.domain) {
                    if (!o.test(i.domain)) throw new TypeError("option domain is invalid");
                    c += "; Domain=" + i.domain
                }
                if (i.path) {
                    if (!o.test(i.path)) throw new TypeError("option path is invalid");
                    c += "; Path=" + i.path
                }
                if (i.expires) {
                    if ("function" !== typeof i.expires.toUTCString) throw new TypeError("option expires is invalid");
                    c += "; Expires=" + i.expires.toUTCString()
                }
                i.httpOnly && (c += "; HttpOnly");
                i.secure && (c += "; Secure");
                if (i.sameSite) {
                    switch ("string" === typeof i.sameSite ? i.sameSite.toLowerCase() : i.sameSite) {
                        case !0:
                            c += "; SameSite=Strict";
                            break;
                        case "lax":
                            c += "; SameSite=Lax";
                            break;
                        case "strict":
                            c += "; SameSite=Strict";
                            break;
                        case "none":
                            c += "; SameSite=None";
                            break;
                        default:
                            throw new TypeError("option sameSite is invalid")
                    }
                }
                return c
            };
            var r = decodeURIComponent,
                n = encodeURIComponent,
                o = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;

            function i(e, t) {
                try {
                    return t(e)
                } catch (r) {
                    return e
                }
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
                i = r("jUV6");
            e.exports = {
                formats: i,
                parse: o,
                stringify: n
            }
        },
        "3jG/": (e, t, r) => {
            var n = r("/8cR"),
                o = Object.prototype.hasOwnProperty,
                i = Array.isArray,
                a = {
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
                s = function(e) {
                    return e.replace(/&#(\d+);/g, (function(e, t) {
                        return String.fromCharCode(parseInt(t, 10))
                    }))
                },
                c = function(e, t, r) {
                    if (e && "string" === typeof e && t.comma && e.indexOf(",") > -1) return e.split(",");
                    if (t.throwOnLimitExceeded && r >= t.arrayLimit) throw new RangeError("Array limit exceeded. Only " + t.arrayLimit + " element" + (1 === t.arrayLimit ? "" : "s") + " allowed in an array.");
                    return e
                },
                l = function(e, t, r, i) {
                    if (e) {
                        var a = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            s = /(\[[^[\]]*])/g,
                            l = r.depth > 0 && /(\[[^[\]]*])/.exec(a),
                            u = l ? a.slice(0, l.index) : a,
                            d = [];
                        if (u) {
                            if (!r.plainObjects && o.call(Object.prototype, u) && !r.allowPrototypes) return;
                            d.push(u)
                        }
                        for (var f = 0; r.depth > 0 && null !== (l = s.exec(a)) && f < r.depth;) {
                            if (f += 1, !r.plainObjects && o.call(Object.prototype, l[1].slice(1, -1)) && !r.allowPrototypes) return;
                            d.push(l[1])
                        }
                        if (l) {
                            if (!0 === r.strictDepth) throw new RangeError("Input depth exceeded depth option of " + r.depth + " and strictDepth is true");
                            d.push("[" + a.slice(l.index) + "]")
                        }
                        return function(e, t, r, o) {
                            var i = 0;
                            if (e.length > 0 && "[]" === e[e.length - 1]) {
                                var a = e.slice(0, -1).join("");
                                i = Array.isArray(t) && t[a] ? t[a].length : 0
                            }
                            for (var s = o ? t : c(t, r, i), l = e.length - 1; l >= 0; --l) {
                                var u, d = e[l];
                                if ("[]" === d && r.parseArrays) u = r.allowEmptyArrays && ("" === s || r.strictNullHandling && null === s) ? [] : n.combine([], s);
                                else {
                                    u = r.plainObjects ? {
                                        __proto__: null
                                    } : {};
                                    var f = "[" === d.charAt(0) && "]" === d.charAt(d.length - 1) ? d.slice(1, -1) : d,
                                        p = r.decodeDotInKeys ? f.replace(/%2E/g, ".") : f,
                                        y = parseInt(p, 10);
                                    r.parseArrays || "" !== p ? !isNaN(y) && d !== p && String(y) === p && y >= 0 && r.parseArrays && y <= r.arrayLimit ? (u = [])[y] = s : "__proto__" !== p && (u[p] = s) : u = {
                                        0: s
                                    }
                                }
                                s = u
                            }
                            return s
                        }(d, t, r, i)
                    }
                };
            e.exports = function(e, t) {
                var r = function(e) {
                    if (!e) return a;
                    if ("undefined" !== typeof e.allowEmptyArrays && "boolean" !== typeof e.allowEmptyArrays) throw new TypeError("`allowEmptyArrays` option can only be `true` or `false`, when provided");
                    if ("undefined" !== typeof e.decodeDotInKeys && "boolean" !== typeof e.decodeDotInKeys) throw new TypeError("`decodeDotInKeys` option can only be `true` or `false`, when provided");
                    if (null !== e.decoder && "undefined" !== typeof e.decoder && "function" !== typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                    if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    if ("undefined" !== typeof e.throwOnLimitExceeded && "boolean" !== typeof e.throwOnLimitExceeded) throw new TypeError("`throwOnLimitExceeded` option must be a boolean");
                    var t = "undefined" === typeof e.charset ? a.charset : e.charset,
                        r = "undefined" === typeof e.duplicates ? a.duplicates : e.duplicates;
                    if ("combine" !== r && "first" !== r && "last" !== r) throw new TypeError("The duplicates option must be either combine, first, or last");
                    return {
                        allowDots: "undefined" === typeof e.allowDots ? !0 === e.decodeDotInKeys || a.allowDots : !!e.allowDots,
                        allowEmptyArrays: "boolean" === typeof e.allowEmptyArrays ? !!e.allowEmptyArrays : a.allowEmptyArrays,
                        allowPrototypes: "boolean" === typeof e.allowPrototypes ? e.allowPrototypes : a.allowPrototypes,
                        allowSparse: "boolean" === typeof e.allowSparse ? e.allowSparse : a.allowSparse,
                        arrayLimit: "number" === typeof e.arrayLimit ? e.arrayLimit : a.arrayLimit,
                        charset: t,
                        charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : a.charsetSentinel,
                        comma: "boolean" === typeof e.comma ? e.comma : a.comma,
                        decodeDotInKeys: "boolean" === typeof e.decodeDotInKeys ? e.decodeDotInKeys : a.decodeDotInKeys,
                        decoder: "function" === typeof e.decoder ? e.decoder : a.decoder,
                        delimiter: "string" === typeof e.delimiter || n.isRegExp(e.delimiter) ? e.delimiter : a.delimiter,
                        depth: "number" === typeof e.depth || !1 === e.depth ? +e.depth : a.depth,
                        duplicates: r,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" === typeof e.interpretNumericEntities ? e.interpretNumericEntities : a.interpretNumericEntities,
                        parameterLimit: "number" === typeof e.parameterLimit ? e.parameterLimit : a.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" === typeof e.plainObjects ? e.plainObjects : a.plainObjects,
                        strictDepth: "boolean" === typeof e.strictDepth ? !!e.strictDepth : a.strictDepth,
                        strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : a.strictNullHandling,
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
                                var h, m, w = d[f],
                                    g = w.indexOf("]="),
                                    v = -1 === g ? w.indexOf("=") : g + 1; - 1 === v ? (h = t.decoder(w, a.decoder, y, "key"), m = t.strictNullHandling ? null : "") : (h = t.decoder(w.slice(0, v), a.decoder, y, "key"), m = n.maybeMap(c(w.slice(v + 1), t, i(r[h]) ? r[h].length : 0), (function(e) {
                                    return t.decoder(e, a.decoder, y, "value")
                                }))), m && t.interpretNumericEntities && "iso-8859-1" === y && (m = s(String(m))), w.indexOf("[]=") > -1 && (m = i(m) ? [m] : m);
                                var b = o.call(r, h);
                                b && "combine" === t.duplicates ? r[h] = n.combine(r[h], m) : b && "last" !== t.duplicates || (r[h] = m)
                            }
                        return r
                    }(e, r) : e, d = r.plainObjects ? {
                        __proto__: null
                    } : {}, f = Object.keys(u), p = 0; p < f.length; ++p) {
                    var y = f[p],
                        h = l(y, u[y], r, "string" === typeof e);
                    d = n.merge(d, h, r)
                }
                return !0 === r.allowSparse ? d : n.compact(d)
            }
        },
        aEGj: (e, t, r) => {
            var n = r("EJuG"),
                o = r("/8cR"),
                i = r("jUV6"),
                a = Object.prototype.hasOwnProperty,
                s = {
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
                c = Array.isArray,
                l = Array.prototype.push,
                u = function(e, t) {
                    l.apply(e, c(t) ? t : [t])
                },
                d = Date.prototype.toISOString,
                f = i.default,
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
                    formatter: i.formatters[f],
                    indices: !1,
                    serializeDate: function(e) {
                        return d.call(e)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                y = {},
                h = function e(t, r, i, a, s, l, d, f, h, m, w, g, v, b, _, E, j, O) {
                    for (var A, k = t, x = O, S = 0, D = !1; void 0 !== (x = x.get(y)) && !D;) {
                        var C = x.get(t);
                        if (S += 1, "undefined" !== typeof C) {
                            if (C === S) throw new RangeError("Cyclic object value");
                            D = !0
                        }
                        "undefined" === typeof x.get(y) && (S = 0)
                    }
                    if ("function" === typeof m ? k = m(r, k) : k instanceof Date ? k = v(k) : "comma" === i && c(k) && (k = o.maybeMap(k, (function(e) {
                            return e instanceof Date ? v(e) : e
                        }))), null === k) {
                        if (l) return h && !E ? h(r, p.encoder, j, "key", b) : r;
                        k = ""
                    }
                    if ("string" === typeof(A = k) || "number" === typeof A || "boolean" === typeof A || "symbol" === typeof A || "bigint" === typeof A || o.isBuffer(k)) return h ? [_(E ? r : h(r, p.encoder, j, "key", b)) + "=" + _(h(k, p.encoder, j, "value", b))] : [_(r) + "=" + _(String(k))];
                    var I, P = [];
                    if ("undefined" === typeof k) return P;
                    if ("comma" === i && c(k)) E && h && (k = o.maybeMap(k, h)), I = [{
                        value: k.length > 0 ? k.join(",") || null : void 0
                    }];
                    else if (c(m)) I = m;
                    else {
                        var T = Object.keys(k);
                        I = w ? T.sort(w) : T
                    }
                    var L = f ? String(r).replace(/\./g, "%2E") : String(r),
                        N = a && c(k) && 1 === k.length ? L + "[]" : L;
                    if (s && c(k) && 0 === k.length) return N + "[]";
                    for (var K = 0; K < I.length; ++K) {
                        var R = I[K],
                            U = "object" === typeof R && R && "undefined" !== typeof R.value ? R.value : k[R];
                        if (!d || null !== U) {
                            var H = g && f ? String(R).replace(/\./g, "%2E") : String(R),
                                F = c(k) ? "function" === typeof i ? i(N, H) : N : N + (g ? "." + H : "[" + H + "]");
                            O.set(t, S);
                            var V = n();
                            V.set(y, O), u(P, e(U, F, i, a, s, l, d, f, "comma" === i && E && c(k) ? null : h, m, w, g, v, b, _, E, j, V))
                        }
                    }
                    return P
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
                        var r = i.default;
                        if ("undefined" !== typeof e.format) {
                            if (!a.call(i.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                            r = e.format
                        }
                        var n, o = i.formatters[r],
                            l = p.filter;
                        if (("function" === typeof e.filter || c(e.filter)) && (l = e.filter), n = e.arrayFormat in s ? e.arrayFormat : "indices" in e ? e.indices ? "indices" : "repeat" : p.arrayFormat, "commaRoundTrip" in e && "boolean" !== typeof e.commaRoundTrip) throw new TypeError("`commaRoundTrip` must be a boolean, or absent");
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
                "function" === typeof l.filter ? o = (0, l.filter)("", o) : c(l.filter) && (r = l.filter);
                var d = [];
                if ("object" !== typeof o || null === o) return "";
                var f = s[l.arrayFormat],
                    y = "comma" === f && l.commaRoundTrip;
                r || (r = Object.keys(o)), l.sort && r.sort(l.sort);
                for (var m = n(), w = 0; w < r.length; ++w) {
                    var g = r[w],
                        v = o[g];
                    l.skipNulls && null === v || u(d, h(v, g, f, y, l.allowEmptyArrays, l.strictNullHandling, l.skipNulls, l.encodeDotInKeys, l.encode ? l.encoder : null, l.filter, l.sort, l.allowDots, l.serializeDate, l.format, l.formatter, l.encodeValuesOnly, l.charset, m))
                }
                var b = d.join(l.delimiter),
                    _ = !0 === l.addQueryPrefix ? "?" : "";
                return l.charsetSentinel && ("iso-8859-1" === l.charset ? _ += "utf8=%26%2310003%3B&" : _ += "utf8=%E2%9C%93&"), b.length > 0 ? _ + b : ""
            }
        },
        "/8cR": (e, t, r) => {
            var n = r("jUV6"),
                o = Object.prototype.hasOwnProperty,
                i = Array.isArray,
                a = function() {
                    for (var e = [], t = 0; t < 256; ++t) e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
                    return e
                }(),
                s = function(e, t) {
                    for (var r = t && t.plainObjects ? {
                            __proto__: null
                        } : {}, n = 0; n < e.length; ++n) "undefined" !== typeof e[n] && (r[n] = e[n]);
                    return r
                },
                c = 1024;
            e.exports = {
                arrayToObject: s,
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
                        for (var o = t[n], a = o.obj[o.prop], s = Object.keys(a), c = 0; c < s.length; ++c) {
                            var l = s[c],
                                u = a[l];
                            "object" === typeof u && null !== u && -1 === r.indexOf(u) && (t.push({
                                obj: a,
                                prop: l
                            }), r.push(u))
                        }
                    return function(e) {
                        for (; e.length > 1;) {
                            var t = e.pop(),
                                r = t.obj[t.prop];
                            if (i(r)) {
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
                encode: function(e, t, r, o, i) {
                    if (0 === e.length) return e;
                    var s = e;
                    if ("symbol" === typeof e ? s = Symbol.prototype.toString.call(e) : "string" !== typeof e && (s = String(e)), "iso-8859-1" === r) return escape(s).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    }));
                    for (var l = "", u = 0; u < s.length; u += c) {
                        for (var d = s.length >= c ? s.slice(u, u + c) : s, f = [], p = 0; p < d.length; ++p) {
                            var y = d.charCodeAt(p);
                            45 === y || 46 === y || 95 === y || 126 === y || y >= 48 && y <= 57 || y >= 65 && y <= 90 || y >= 97 && y <= 122 || i === n.RFC1738 && (40 === y || 41 === y) ? f[f.length] = d.charAt(p) : y < 128 ? f[f.length] = a[y] : y < 2048 ? f[f.length] = a[192 | y >> 6] + a[128 | 63 & y] : y < 55296 || y >= 57344 ? f[f.length] = a[224 | y >> 12] + a[128 | y >> 6 & 63] + a[128 | 63 & y] : (p += 1, y = 65536 + ((1023 & y) << 10 | 1023 & d.charCodeAt(p)), f[f.length] = a[240 | y >> 18] + a[128 | y >> 12 & 63] + a[128 | y >> 6 & 63] + a[128 | 63 & y])
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
                    if (i(e)) {
                        for (var r = [], n = 0; n < e.length; n += 1) r.push(t(e[n]));
                        return r
                    }
                    return t(e)
                },
                merge: function e(t, r, n) {
                    if (!r) return t;
                    if ("object" !== typeof r && "function" !== typeof r) {
                        if (i(t)) t.push(r);
                        else {
                            if (!t || "object" !== typeof t) return [t, r];
                            (n && (n.plainObjects || n.allowPrototypes) || !o.call(Object.prototype, r)) && (t[r] = !0)
                        }
                        return t
                    }
                    if (!t || "object" !== typeof t) return [t].concat(r);
                    var a = t;
                    return i(t) && !i(r) && (a = s(t, n)), i(t) && i(r) ? (r.forEach((function(r, i) {
                        if (o.call(t, i)) {
                            var a = t[i];
                            a && "object" === typeof a && r && "object" === typeof r ? t[i] = e(a, r, n) : t.push(r)
                        } else t[i] = r
                    })), t) : Object.keys(r).reduce((function(t, i) {
                        var a = r[i];
                        return o.call(t, i) ? t[i] = e(t[i], a, n) : t[i] = a, t
                    }), a)
                }
            }
        },
        yKn7: (e, t, r) => {
            r.d(t, {
                A: () => a
            });
            var n = r("L7qe");

            function o(e, t) {
                void 0 === t && (t = {});
                var r = function(e) {
                    if (e && "j" === e[0] && ":" === e[1]) return e.substr(2);
                    return e
                }(e);
                if (function(e, t) {
                        return "undefined" === typeof t && (t = !e || "{" !== e[0] && "[" !== e[0] && '"' !== e[0]), !t
                    }(r, t.doNotParse)) try {
                    return JSON.parse(r)
                } catch (n) {}
                return e
            }
            var i = function() {
                return i = Object.assign || function(e) {
                    for (var t, r = 1, n = arguments.length; r < n; r++)
                        for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, i.apply(this, arguments)
            };
            const a = function() {
                function e(e, t) {
                    var r = this;
                    this.changeListeners = [], this.HAS_DOCUMENT_COOKIE = !1, this.cookies = function(e, t) {
                        return "string" === typeof e ? n.q(e, t) : "object" === typeof e && null !== e ? e : {}
                    }(e, t), new Promise((function() {
                        r.HAS_DOCUMENT_COOKIE = "object" === typeof document && "string" === typeof document.cookie
                    })).catch((function() {}))
                }
                return e.prototype._updateBrowserValues = function(e) {
                    this.HAS_DOCUMENT_COOKIE && (this.cookies = n.q(document.cookie, e))
                }, e.prototype._emitChange = function(e) {
                    for (var t = 0; t < this.changeListeners.length; ++t) this.changeListeners[t](e)
                }, e.prototype.get = function(e, t, r) {
                    return void 0 === t && (t = {}), this._updateBrowserValues(r), o(this.cookies[e], t)
                }, e.prototype.getAll = function(e, t) {
                    void 0 === e && (e = {}), this._updateBrowserValues(t);
                    var r = {};
                    for (var n in this.cookies) r[n] = o(this.cookies[n], e);
                    return r
                }, e.prototype.set = function(e, t, r) {
                    var o;
                    "object" === typeof t && (t = JSON.stringify(t)), this.cookies = i(i({}, this.cookies), ((o = {})[e] = t, o)), this.HAS_DOCUMENT_COOKIE && (document.cookie = n.l(e, t, r)), this._emitChange({
                        name: e,
                        value: t,
                        options: r
                    })
                }, e.prototype.remove = function(e, t) {
                    var r = t = i(i({}, t), {
                        expires: new Date(1970, 1, 1, 0, 0, 1),
                        maxAge: 0
                    });
                    this.cookies = i({}, this.cookies), delete this.cookies[e], this.HAS_DOCUMENT_COOKIE && (document.cookie = n.l(e, "", r)), this._emitChange({
                        name: e,
                        value: void 0,
                        options: t
                    })
                }, e.prototype.addChangeListener = function(e) {
                    this.changeListeners.push(e)
                }, e.prototype.removeChangeListener = function(e) {
                    var t = this.changeListeners.indexOf(e);
                    t >= 0 && this.changeListeners.splice(t, 1)
                }, e
            }()
        }
    }
]);
//# debugId=959adb21-4292-5b33-8909-ca319e61819f