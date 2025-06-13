"use strict";
(self.webpackChunklanding_strategy_ui = self.webpackChunklanding_strategy_ui || []).push([
    [443], {
        "8SIA": (e, t, n) => {
            n.d(t, {
                Jt: () => ue,
                bE: () => le
            });
            var r = n("wIZF"),
                o = n("m0k9"),
                a = n("7ZgD"),
                i = n("PoZF"),
                c = n("1CC6"),
                s = n("lUEC"),
                u = n("ZFFV"),
                l = n.n(u),
                d = n("F3rx"),
                h = n.n(d),
                g = n("kPx0"),
                f = n("c6Y9"),
                p = (l()().fetch, (0, o.S)().isHybrid, "_acc_org"),
                v = !1;

            function w(e) {
                return e && +new Date - e < 432e5
            }

            function I(e) {
                e = y(e), window._ACCELERATE_ORIGIN = e
            }

            function b(e) {
                var t = {
                    t: +new Date
                };
                e && (e = y(e), t.o = e);
                var n = C(),
                    r = n.r;
                w(n.t) && r && (t.r = r), window.localStorage.setItem(p, JSON.stringify(t))
            }

            function C() {
                return JSON.parse(window.localStorage.getItem(p) || "{}")
            }

            function y(e) {
                return e ? /^https?:/.test(e) ? e : "https://".concat(e) : e
            }
            var m = n("hjFp"),
                N = n("J02F");
            const A = (0, N.vt)((0, N.Q)((0, r.__assign)((0, r.__assign)({}, m), {})));
            var T = {
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
            var j = (0, o.S)().isHybrid,
                D = "",
                M = T.enableLog && T.enableMonitorLog,
                x = function(e) {
                    if (!j && M) try {
                        var t = function(e) {
                                var t = e.startTime,
                                    n = e.status,
                                    r = e.url,
                                    o = e.page,
                                    i = e.error,
                                    c = e.uuid,
                                    s = e.bncUuid,
                                    u = Date.now(),
                                    l = {
                                        t: "API",
                                        resc: n,
                                        requ: r,
                                        ts: u,
                                        ct: u - t,
                                        ret: a.o ? "Browser" : "Node",
                                        rest: i ? "error" : "success",
                                        uid: c,
                                        bid: s
                                    };
                                o && (l.p = o);
                                i && (l.errt = function(e) {
                                    return !e.code && "string" === typeof e.message && ~e.message.indexOf("JSON") ? "Invalid-Json" : e.name
                                }(i));
                                return l
                            }(e),
                            n = t.ret,
                            o = t.bid,
                            i = (0, r.__rest)(t, ["ret", "bid"]);
                        T.track("web_http", (0, r.__assign)((0, r.__assign)({}, i), {
                            wh_clientType: n,
                            bnc_uuid: o
                        }))
                    } catch (c) {
                        console.error("libs/http@log", c)
                    }
                };

            function k(e) {
                var t = e.id,
                    n = e.src,
                    r = e.timeout,
                    o = void 0 === r ? 6e4 : r;
                return new Promise((function(e, r) {
                    var a = document.createElement("script");
                    a.src = n, t && (a.id = t), a.onload = function() {
                        return e(!0)
                    }, a.onerror = function() {
                        return r("script load error")
                    }, setTimeout((function() {
                        return r("script load timeout")
                    }), o), document.body.appendChild(a)
                }))
            }

            function _(e) {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    var t, n, o, a, i, c;
                    return (0, r.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                return t = e.bizId, n = e.staticHost, o = e.lang, a = e.apiHost, i = e.validateId, window.BCaptcha ? [3, 2] : [4, k({
                                    id: "_bnwv_se_captcha",
                                    src: "".concat(n, "/static/js/se/captcha/v1/captcha.min.js")
                                })];
                            case 1:
                                r.sent(), r.label = 2;
                            case 2:
                                return c = new window.BCaptcha({
                                    lang: o,
                                    bizId: t,
                                    staticHost: n,
                                    apiHost: a || "",
                                    apiBasePath: "/bapi/composite/v1/public/antibot"
                                }), [2, new Promise((function(e, t) {
                                    c.show({
                                        securityCheckResponseValidateId: i,
                                        onCancel: function() {
                                            return e(!1)
                                        },
                                        onError: function(e) {
                                            return t({
                                                message: e
                                            })
                                        },
                                        onValidateSuccess: function(t, n) {
                                            return e({
                                                challenge: t,
                                                token: n
                                            })
                                        }
                                    })
                                }))]
                        }
                    }))
                }))
            }

            function O(e) {
                return (0, r.__awaiter)(this, void 0, void 0, (function() {
                    var t, n, o;
                    return (0, r.__generator)(this, (function(r) {
                        switch (r.label) {
                            case 0:
                                if (t = e.googleReCaptchaKey, n = e.needCaptcha, !t || !n) throw new Error("miss google captchaKey & needCaptcha");
                                return (o = window.grecaptcha) ? [3, 3] : [4, k({
                                    src: "https://www.google.com/recaptcha/enterprise.js?render=".concat(t)
                                })];
                            case 1:
                                return r.sent(), o = window.grecaptcha, [4, new Promise((function(e, t) {
                                    o.enterprise.ready(e), setTimeout((function() {
                                        return t("grecaptcha ready timeout")
                                    }), 1e4)
                                }))];
                            case 2:
                                r.sent(), r.label = 3;
                            case 3:
                                return [2, o.enterprise.execute(t, {
                                    action: "submit"
                                }).then((function(e) {
                                    return {
                                        token: e
                                    }
                                }))]
                        }
                    }))
                }))
            }
            var E = n("TfYz"),
                S = function(e) {
                    var t, n, r, o, a, i, c, s, u;
                    try {
                        if ("undefined" === typeof window) return;
                        var l = {
                            event: {
                                reqm: null === (t = e.opts) || void 0 === t ? void 0 : t.method,
                                host: null === (n = new URL(e.url)) || void 0 === n ? void 0 : n.host,
                                path: null === (r = new URL(e.url)) || void 0 === r ? void 0 : r.pathname,
                                s: null === (o = e.res) || void 0 === o ? void 0 : o.status,
                                res_header: z(null === (a = e.res) || void 0 === a ? void 0 : a.headers),
                                ct: e.duration,
                                bc: null === (i = e.result) || void 0 === i ? void 0 : i.message,
                                busc: null === (c = e.result) || void 0 === c ? void 0 : c.code,
                                tid: null === (u = null === (s = e.opts) || void 0 === s ? void 0 : s.headers) || void 0 === u ? void 0 : u["X-TRACE-ID"],
                                phost: location.host,
                                ppath: location.pathname
                            }
                        };
                        (0, E.N2)({
                            data: l
                        })
                    } catch (d) {
                        console.log("libs/http/logger2", d)
                    }
                },
                z = function(e) {
                    var t = {};
                    return e ? (["x-cache"].forEach((function(n) {
                        t[n] = e.get ? e.get(n) : e[n]
                    })), t) : t
                };
            var U = 2654435769;

            function F(e, t) {
                var n = e.length,
                    r = n << 2;
                if (t) {
                    var o = e[n - 1];
                    if (o < (r -= 4) - 3 || o > r) return null;
                    r = o
                }
                for (var a = 0; a < n; a++) e[a] = String.fromCharCode(255 & e[a], e[a] >>> 8 & 255, e[a] >>> 16 & 255, e[a] >>> 24 & 255);
                var i = e.join("");
                return t ? i.substring(0, r) : i
            }

            function Z(e, t) {
                var n, r = e.length,
                    o = r >> 2;
                0 !== (3 & r) && ++o, t ? (n = new Array(o + 1))[o] = r : n = new Array(o);
                for (var a = 0; a < r; ++a) n[a >> 2] |= e.charCodeAt(a) << ((3 & a) << 3);
                return n
            }

            function G(e) {
                return 4294967295 & e
            }

            function P(e, t, n, r, o, a) {
                return (n >>> 5 ^ t << 2) + (t >>> 3 ^ n << 4) ^ (e ^ t) + (a[3 & r ^ o] ^ n)
            }

            function W(e) {
                return e.length < 4 && (e.length = 4), e
            }

            function R(e) {
                if (/^[\x00-\x7f]*$/.test(e)) return e;
                for (var t = [], n = e.length, r = 0, o = 0; r < n; ++r, ++o) {
                    var a = e.charCodeAt(r);
                    if (a < 128) t[o] = e.charAt(r);
                    else if (a < 2048) t[o] = String.fromCharCode(192 | a >> 6, 128 | 63 & a);
                    else {
                        if (!(a < 55296 || a > 57343)) {
                            if (r + 1 < n) {
                                var i = e.charCodeAt(r + 1);
                                if (a < 56320 && 56320 <= i && i <= 57343) {
                                    var c = 65536 + ((1023 & a) << 10 | 1023 & i);
                                    t[o] = String.fromCharCode(240 | c >> 18 & 63, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | 63 & c), ++r;
                                    continue
                                }
                            }
                            throw new Error("Malformed string")
                        }
                        t[o] = String.fromCharCode(224 | a >> 12, 128 | a >> 6 & 63, 128 | 63 & a)
                    }
                }
                return t.join("")
            }

            function Y(e, t) {
                return (void 0 === t || null === t || t < 0) && (t = e.length), 0 === t ? "" : /^[\x00-\x7f]*$/.test(e) || !/^[\x00-\xff]*$/.test(e) ? t === e.length ? e : e.substr(0, t) : t < 32767 ? function(e, t) {
                    for (var n = new Array(t), r = 0, o = 0, a = e.length; r < t && o < a; r++) {
                        var i = e.charCodeAt(o++);
                        switch (i >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                n[r] = i;
                                break;
                            case 12:
                            case 13:
                                if (!(o < a)) throw new Error("Unfinished UTF-8 octet sequence");
                                n[r] = (31 & i) << 6 | 63 & e.charCodeAt(o++);
                                break;
                            case 14:
                                if (!(o + 1 < a)) throw new Error("Unfinished UTF-8 octet sequence");
                                n[r] = (15 & i) << 12 | (63 & e.charCodeAt(o++)) << 6 | 63 & e.charCodeAt(o++);
                                break;
                            case 15:
                                if (!(o + 2 < a)) throw new Error("Unfinished UTF-8 octet sequence");
                                var c = ((7 & i) << 18 | (63 & e.charCodeAt(o++)) << 12 | (63 & e.charCodeAt(o++)) << 6 | 63 & e.charCodeAt(o++)) - 65536;
                                if (!(0 <= c && c <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + c.toString(16));
                                n[r++] = c >> 10 & 1023 | 55296, n[r] = 1023 & c | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + i.toString(16))
                        }
                    }
                    return r < t && (n.length = r), String.fromCharCode.apply(String, n)
                }(e, t) : function(e, t) {
                    for (var n = [], r = new Array(32768), o = 0, a = 0, i = e.length; o < t && a < i; o++) {
                        var c = e.charCodeAt(a++);
                        switch (c >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                r[o] = c;
                                break;
                            case 12:
                            case 13:
                                if (!(a < i)) throw new Error("Unfinished UTF-8 octet sequence");
                                r[o] = (31 & c) << 6 | 63 & e.charCodeAt(a++);
                                break;
                            case 14:
                                if (!(a + 1 < i)) throw new Error("Unfinished UTF-8 octet sequence");
                                r[o] = (15 & c) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++);
                                break;
                            case 15:
                                if (!(a + 2 < i)) throw new Error("Unfinished UTF-8 octet sequence");
                                var s = ((7 & c) << 18 | (63 & e.charCodeAt(a++)) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++)) - 65536;
                                if (!(0 <= s && s <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + s.toString(16));
                                r[o++] = s >> 10 & 1023 | 55296, r[o] = 1023 & s | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + c.toString(16))
                        }
                        if (o >= 32766) {
                            var u = o + 1;
                            r.length = u, n[n.length] = String.fromCharCode.apply(String, r), t -= u, o = -1
                        }
                    }
                    return o > 0 && (r.length = o, n[n.length] = String.fromCharCode.apply(String, r)), n.join("")
                }(e, t)
            }

            function H(e, t) {
                return void 0 === e || null === e || 0 === e.length ? e : (e = R(e), t = R(t), F(function(e, t) {
                    var n, r, o, a, i, c, s = e.length,
                        u = s - 1;
                    for (r = e[u], o = 0, c = 0 | Math.floor(6 + 52 / s); c > 0; --c) {
                        for (a = (o = G(o + U)) >>> 2 & 3, i = 0; i < u; ++i) n = e[i + 1], r = e[i] = G(e[i] + P(o, n, r, i, a, t));
                        n = e[0], r = e[u] = G(e[u] + P(o, n, r, u, a, t))
                    }
                    return e
                }(Z(e, !0), W(Z(t, !1))), !1))
            }

            function L(e, t) {
                return void 0 === e || null === e || 0 === e.length ? e : (t = R(t), Y(F(function(e, t) {
                    var n, r, o, a, i, c = e.length,
                        s = c - 1;
                    for (n = e[0], o = G(Math.floor(6 + 52 / c) * U); 0 !== o; o = G(o - U)) {
                        for (a = o >>> 2 & 3, i = s; i > 0; --i) r = e[i - 1], n = e[i] = G(e[i] - P(o, n, r, i, a, t));
                        r = e[s], n = e[0] = G(e[0] - P(o, n, r, 0, a, t))
                    }
                    return e
                }(Z(e, !1), W(Z(t, !1))), !0)))
            }
            const B = {
                utf8Encode: R,
                utf8Decode: Y,
                encrypt: H,
                encryptToBase64: function(e, t) {
                    return function() {
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                        return function(t) {
                            var n, r, o, a, i, c, s;
                            for (r = o = 0, a = t.length, c = (a -= i = a % 3) / 3 << 2, i > 0 && (c += 4), n = new Array(c); r < a;) s = t.charCodeAt(r++) << 16 | t.charCodeAt(r++) << 8 | t.charCodeAt(r++), n[o++] = e[s >> 18] + e[s >> 12 & 63] + e[s >> 6 & 63] + e[63 & s];
                            return 1 == i ? (s = t.charCodeAt(r++), n[o++] = e[s >> 2] + e[(3 & s) << 4] + "==") : 2 == i && (s = t.charCodeAt(r++) << 8 | t.charCodeAt(r++), n[o++] = e[s >> 10] + e[s >> 4 & 63] + e[(15 & s) << 2] + "="), n.join("")
                        }
                    }()(H(e, t))
                },
                decrypt: L,
                decryptFromBase64: function(e, t) {
                    return void 0 === e || null === e || 0 === e.length ? e : L(function() {
                        var e = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
                        return function(t) {
                            var n, r, o, a, i, c, s, u, l, d;
                            if ((s = t.length) % 4 !== 0) return "";
                            if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(t)) return "";
                            for (l = s, (u = "=" == t.charAt(s - 2) ? 1 : "=" == t.charAt(s - 1) ? 2 : 0) > 0 && (l -= 4), l = 3 * (l >> 2) + u, d = new Array(l), i = c = 0; i < s && -1 != (n = e[t.charCodeAt(i++)]) && -1 != (r = e[t.charCodeAt(i++)]) && (d[c++] = String.fromCharCode(n << 2 | (48 & r) >> 4), -1 != (o = e[t.charCodeAt(i++)])) && (d[c++] = String.fromCharCode((15 & r) << 4 | (60 & o) >> 2), -1 != (a = e[t.charCodeAt(i++)]));) d[c++] = String.fromCharCode((3 & o) << 6 | a);
                            return d.join("")
                        }
                    }()(e), t)
                }
            };
            var Q = function(e) {
                    if (!e) return "";
                    var t = function(e) {
                            for (var t = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", n = ""; n.length < e;) n += t[Math.floor(62 * Math.random())];
                            return n
                        }(6),
                        n = Date.now(),
                        o = "".concat(e, "|").concat(n),
                        a = B.encryptToBase64(o, t),
                        i = function(e) {
                            var t, n, o = 0;
                            try {
                                for (var a = (0, r.__values)(e), i = a.next(); !i.done; i = a.next()) o ^= i.value.charCodeAt(0)
                            } catch (s) {
                                t = {
                                    error: s
                                }
                            } finally {
                                try {
                                    i && !i.done && (n = a.return) && n.call(a)
                                } finally {
                                    if (t) throw t.error
                                }
                            }
                            var c = o.toString(16);
                            return 2 == c.length ? c : "0" + c
                        }("".concat(t).concat(a));
                    return "".concat(t).concat(a).concat(i)
                },
                V = (0, o.S)().isHybrid,
                J = function(e, t) {
                    return (0, r.__awaiter)(void 0, void 0, void 0, (function() {
                        return (0, r.__generator)(this, (function(n) {
                            return [2, A.fetch(e, t)]
                        }))
                    }))
                },
                X = a.o ? J.bind(window) : J,
                K = console.log,
                q = console.warn,
                $ = function() {
                    if (!a.o) return "";
                    var e = c.U.read("bnc-uuid");
                    return e || (e = (0, f.v4)(), c.U.writeCookieWithDomainLevel("bnc-uuid", e, 1825, !0)), e
                }(),
                ee = function() {
                    if (!a.o) return "en";
                    var e = document.location.pathname;
                    return (0, r.__read)(e.split("/").slice(1), 1)[0] || c.U.read("lang") || "en"
                },
                te = function(e) {
                    var t = "";
                    a.o && (t = window.location.href);
                    try {
                        var n = D;
                        a.o || (t = e ? "https://".concat(e.headers.host).concat(e.url) : n)
                    } catch (r) {}
                    return t
                },
                ne = function() {
                    if (a.o) return "";
                    try {
                        return "{}".CDN_REGION
                    } catch (e) {
                        return "en"
                    }
                }(),
                re = function(e, t) {
                    return (0, r.__awaiter)(void 0, void 0, void 0, (function() {
                        var n, o, u, l, d, h, g, f, p, v, w, I;
                        return (0, r.__generator)(this, (function(b) {
                            switch (b.label) {
                                case 0:
                                    return n = t.omitHeader, o = t.lang, u = t.headers, l = t.req, d = t.credentials, h = t.request, [4, (0, r.__awaiter)(void 0, void 0, void 0, (function() {
                                        var e, t;
                                        return (0, r.__generator)(this, (function(n) {
                                            switch (n.label) {
                                                case 0:
                                                    return !a.o || V ? [2, {}] : (t = {}, e = "device-info", [4, (0, i._5)()]);
                                                case 1:
                                                    return [2, (t[e] = n.sent(), t)]
                                            }
                                        }))
                                    }))];
                                case 1:
                                    return g = b.sent(), f = n ? {} : (0, r.__assign)({
                                        lang: o || ee(),
                                        "X-UI-REQUEST-TRACE": e,
                                        "X-TRACE-ID": e,
                                        "BNC-UUID": $,
                                        "Content-Type": "application/json"
                                    }, g), !n && ne && (f = Object.assign(f, {
                                        "X-CDN-REGION": ne
                                    })), n || V || (f = Object.assign(f, {
                                        clienttype: "web"
                                    })), a.o && !V && (f = Object.assign(f, {
                                        "FVIDEO-ID": c.U.read("BNC_FV_KEY") || "",
                                        "FVIDEO-TOKEN": Q(c.U.read("BNC_FV_KEY_T") || ""),
                                        "X-PASSTHROUGH-TOKEN": c.U.read("bnc-challenge-token") || ""
                                    })), p = function(e) {
                                        var t;
                                        if (a.o) return {};
                                        var n = (null === (t = null === e || void 0 === e ? void 0 : e.headers) || void 0 === t ? void 0 : t.cookie) || null;
                                        return n ? {
                                            cookie: n
                                        } : {}
                                    }(l), v = a.o ? (0, s.M)() : {}, w = function() {
                                        if (a.o) return {};
                                        var e = globalThis.ssrHeaders,
                                            t = void 0 === e ? {} : e,
                                            n = {};
                                        return Object.keys(t).forEach((function(e) {
                                            ("k8scluster" === e || /x-gateway-gray/i.test(e) || /x-gray-env/i.test(e) && "gray" === t[e]) && (n[e] = t[e])
                                        })), n
                                    }(), I = te(h || l), [2, {
                                        opts: {
                                            method: "GET",
                                            mode: "cors",
                                            headers: (0, r.__assign)((0, r.__assign)((0, r.__assign)((0, r.__assign)((0, r.__assign)({}, f), p), u), w), v),
                                            credentials: d
                                        },
                                        page: I
                                    }]
                            }
                        }))
                    }))
                },
                oe = function(e) {
                    if ("undefined" === typeof window) return e;
                    var t = c.U.read("cr00");
                    return e.headers = e.headers || {}, e.headers.csrftoken || (e.headers.csrftoken = h()(t || "")), e
                },
                ae = function(e) {
                    var t, n, r = T.baseUrl,
                        o = T.accelerateOrigin,
                        i = T.checkAccelerable,
                        c = T.accelerate;
                    if (i = c.checkAccelerable || i, a.o) {
                        var s = c.enbleSites;
                        "string" === typeof(o = window._ACCELERATE_ORIGIN || c.defaultOrigin || o) && (o = (n = o) ? /^https?:/.test(n) ? n : "https://".concat(n) : n), s && (t = s, "[object Array]" === he.call(t)) && !~s.indexOf(window.location.hostname) && (o = "")
                    }
                    return /^(https?:)?\/\//.test(e) ? e : a.o && !V && o && "string" === typeof o && /^(https?:)?\/\//.test(o) && i && i(e) ? "".concat(o).concat(e) : r ? "".concat(r).concat(e) : a.o ? "".concat(window.location.origin).concat(e) : e
                },
                ie = !1,
                ce = function(e) {
                    return -1 === e.indexOf("/v1/public/account/security/challenge/select") && -1 === e.indexOf("/v1/public/account/security/challenge/pass")
                },
                se = function(e, t, n, o, i) {
                    return (0, r.__awaiter)(void 0, void 0, void 0, (function() {
                        var s, u, l, d, h, f, p, w, C, y, m, N, A, j, D, k, E, z, U, F, Z, G, P, W, R, Y, H, L, B, Q, J, te, ne, re, oe, se;
                        return (0, r.__generator)(this, (function(de) {
                            switch (de.label) {
                                case 0:
                                    s = T.debug, u = T.responseInterceptor, l = T.requestInterceptor, d = T.resultInterceptor, h = T.needAuthCheck, f = T.staticUrl, p = Date.now(), de.label = 1;
                                case 1:
                                    return de.trys.push([1, 11, , 23]), e = ae(e), [4, l(e, t, i)];
                                case 2:
                                    if (ne = r.__read.apply(void 0, [de.sent(), 2]), e = ne[0], t = ne[1], ce(e) && ie) throw new Error("captcha is doing, please wait");
                                    return e.includes("gateway-api"), m = u, [4, X(e, t)];
                                case 3:
                                    return [4, m.apply(void 0, [de.sent(), i, t])];
                                case 4:
                                    return w = de.sent(), N = Date.now(), C = N - p, [4, (fe = w, (0, r.__awaiter)(void 0, void 0, void 0, (function() {
                                        var e, t, n;
                                        return (0, r.__generator)(this, (function(r) {
                                            switch (r.label) {
                                                case 0:
                                                    if ((o = fe.status) >= 200 && o < 300 || 401 === o) return [2, fe];
                                                    r.label = 1;
                                                case 1:
                                                    return r.trys.push([1, 3, , 4]), [4, fe.json()];
                                                case 2:
                                                    throw e = r.sent(), (t = new Error(fe.statusText || fe.status)).errorMsg = e, t;
                                                case 3:
                                                    throw (n = r.sent()).code = fe.status, a.o && (n.name = fe.status), n;
                                                case 4:
                                                    return [2]
                                            }
                                            var o
                                        }))
                                    })))];
                                case 5:
                                    return de.sent(), (A = w._bodyBlob) && ["application/vnd.ms-excel", "application/vnd.ms-pdf", "application/pdf", "application/octet-stream"].some((function(e) {
                                        return "".concat(A.type).includes(e)
                                    })) ? [2, w.blob()] : [4, w.json()];
                                case 6:
                                    if (y = de.sent(), !h || "undefined" === typeof window) return [3, 10];
                                    if (-1 !== e.indexOf("accounts/v1/public/authcenter/auth") || !["100001005", "100002001", "600000007"].includes(null === y || void 0 === y ? void 0 : y.code)) return [3, 10];
                                    if (L = ee(), j = {}, !sessionStorage.getItem(L + "basecommontranslate")) return [3, 7];
                                    try {
                                        j = JSON.parse(sessionStorage.getItem(L + "basecommontranslate") || "") || {}
                                    } catch (pe) {}
                                    return [3, 9];
                                case 7:
                                    return [4, ue("".concat(f, "/api/i18n/-/web/cms/").concat(L, "/infra-common"))];
                                case 8:
                                    D = de.sent(), sessionStorage.setItem(L + "basecommontranslate", JSON.stringify(D)), j = D, de.label = 9;
                                case 9:
                                    ! function(e, t) {
                                        if ("undefined" !== typeof window && !document.querySelector("#svdfnjnojksmodel")) {
                                            var n = !(window.innerWidth < 768),
                                                r = document.createElement("div");
                                            r.id = "svdfnjnojksmodel", r.style.display = "flex", r.style.justifyContent = "center", r.style.alignItems = "center", r.style.position = "fixed", r.style.top = "0", r.style.left = "0", r.style.width = "100%", r.style.height = "100%", r.style.zIndex = "999999", r.style.backgroundColor = "rgba(0,0,0,0.5)";
                                            var o = n ? 360 : 298,
                                                a = n ? 60 : 96,
                                                i = n ? 500 : 600,
                                                c = n ? 16 : 20,
                                                s = n ? 24 : 28,
                                                u = n ? 36 : 40,
                                                l = document.createElement("div");
                                            l.style.cssText = "width: ".concat(o, "px;background-color: #fff;border-radius: 5px;display: flex;flex-direction: column;justify-content: center;align-items: center;box-shadow: 0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16);border-radius: 8px;padding: 24px;"), l.innerHTML = '\n      <div style="width: '.concat(a, "px;height: ").concat(a, "px;margin-bottom: 16px;background-size: contain;background-image: url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iOTYiIGhlaWdodD0iOTYiIHZpZXdCb3g9IjAgMCA5NiA5NiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3QgeD0iMzYiIHk9IjU0IiB3aWR0aD0iMjQiIGhlaWdodD0iMzAiIGZpbGw9IiM3NjgwOEYiLz4KPHBhdGggZD0iTTY1Ljk5NzYgMjguMDAwN0M2NS45OTc2IDE4LjA1OTcgNTcuOTM4OSAxMC4wMDAyIDQ3Ljk5OCAxMEMzOC4wNTY4IDEwIDI5Ljk5OCAxOC4wNTg5IDI5Ljk5OCAyOEw2NS45OTc2IDI4LjAwMDdaIiBmaWxsPSJ1cmwoI3BhaW50MF9saW5lYXJfMTU5ODFfMTI3NTc2KSIvPgo8cGF0aCBkPSJNMjkuOTk4MyAyOC4wMDAzQzI5Ljk5ODMgMzcuOTQxMyAzOC4wNTY5IDQ2LjAwMDggNDcuOTk3OSA0Ni4wMDFDNTcuOTM5IDQ2LjAwMSA2NS45OTc5IDM3Ljk0MjEgNjUuOTk3OSAyOC4wMDFMMjkuOTk4MyAyOC4wMDAzWiIgZmlsbD0iI0U2RThFQSIvPgo8cGF0aCBkPSJNMzYgNTRIMjhDMTkuMTYzNCA1NCAxMiA2MS4xNjM0IDEyIDcwVjg0SDM2VjU0WiIgZmlsbD0idXJsKCNwYWludDFfbGluZWFyXzE1OTgxXzEyNzU3NikiLz4KPHBhdGggZD0iTTYwIDg0SDg0VjcwQzg0IDYxLjE2MzQgNzYuODM2NiA1NCA2OCA1NEg2MFY4NFoiIGZpbGw9InVybCgjcGFpbnQyX2xpbmVhcl8xNTk4MV8xMjc1NzYpIi8+CjxwYXRoIGQ9Ik02MCA1NEw2MCA2NEw1MCA1NEw2MCA1NFoiIGZpbGw9IiNFNkU4RUEiLz4KPHBhdGggZD0iTTM2IDU0TDM2IDY0TDQ2IDU0TDM2IDU0WiIgZmlsbD0iI0U2RThFQSIvPgo8cGF0aCBkPSJNNzIgNDhDNjMuNzE1NyA0OCA1NyA1NC43MTU3IDU3IDYzQzU3IDcxLjI4NDMgNjMuNzE1NyA3OCA3MiA3OEM4MC4yODQzIDc4IDg3IDcxLjI4NDMgODcgNjNDODcgNTQuNzE1NyA4MC4yODQzIDQ4IDcyIDQ4WiIgZmlsbD0idXJsKCNwYWludDNfbGluZWFyXzE1OTgxXzEyNzU3NikiLz4KPHBhdGggZD0iTTczLjUgNzJINzAuNVY2OUg3My41VjcyWiIgZmlsbD0iIzE0MTUxQSIvPgo8cGF0aCBkPSJNNzAuNSA2NlY1NEg3My41VjY2TDcwLjUgNjZaIiBmaWxsPSIjMTQxNTFBIi8+CjxyZWN0IHg9IjQ2IiB5PSI1NCIgd2lkdGg9IjQiIGhlaWdodD0iMzAiIGZpbGw9IiNFNkU4RUEiLz4KPGRlZnM+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQwX2xpbmVhcl8xNTk4MV8xMjc1NzYiIHgxPSI2NS45OTc2IiB5MT0iMTkuMDAwMyIgeDI9IjI5Ljk5OCIgeTI9IjE5LjAwMDMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iIzkyOUFBNSIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiM3NjgwOEYiLz4KPC9saW5lYXJHcmFkaWVudD4KPGxpbmVhckdyYWRpZW50IGlkPSJwYWludDFfbGluZWFyXzE1OTgxXzEyNzU3NiIgeDE9IjQ4IiB5MT0iODQiIHgyPSI0OCIgeTI9IjU0IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+CjxzdG9wIHN0b3AtY29sb3I9IiM5MjlBQTUiLz4KPHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjNzY4MDhGIi8+CjwvbGluZWFyR3JhZGllbnQ+CjxsaW5lYXJHcmFkaWVudCBpZD0icGFpbnQyX2xpbmVhcl8xNTk4MV8xMjc1NzYiIHgxPSI0OCIgeTE9Ijg0IiB4Mj0iNDgiIHkyPSI1NCIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPgo8c3RvcCBzdG9wLWNvbG9yPSIjOTI5QUE1Ii8+CjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzc2ODA4RiIvPgo8L2xpbmVhckdyYWRpZW50Pgo8bGluZWFyR3JhZGllbnQgaWQ9InBhaW50M19saW5lYXJfMTU5ODFfMTI3NTc2IiB4MT0iNTciIHkxPSI2MyIgeDI9Ijg3IiB5Mj0iNjMiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj4KPHN0b3Agc3RvcC1jb2xvcj0iI0YwQjkwQiIvPgo8c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiNGOEQzM0EiLz4KPC9saW5lYXJHcmFkaWVudD4KPC9kZWZzPgo8L3N2Zz4K')\"></div>\n      <div style=\"font-size: ").concat(c, "px;line-height: ").concat(s, "px; font-weight: ").concat(i, '; color: #1E2329;margin-bottom: 8px;">').concat(t["cm-without-auth-title"] || "Logged Out", '</div>\n      <div style="font-size: 14px;line-height: 20px; font-weight: 400; color: #707A8A;margin-bottom: 24px;text-align: center;">').concat(t["cm-without-auth-content"] || "You have been logged out. You must log in again to continue.", "</div>\n      <style>\n      .svdfnjnojksmodelbtn:hover{opacity:0.7;}\n      </style>\n  ");
                                            var d = document.createElement("div");
                                            d.innerHTML = t["cm-without-auth-primary-btn"] || "Log In", d.className = "svdfnjnojksmodelbtn", d.style.cssText = "font-size: 14px;font-weight: 500;cursor: pointer;width: 100%;height: ".concat(u, "px; background: #FCD535; border-radius: 4px; display: flex;justify-content: center;align-items: center;margin-bottom: 12px;");
                                            var h = window.location.href;
                                            d.onclick = function() {
                                                var t = window.location.host.split(".");
                                                t.shift(), t.unshift("accounts");
                                                var n = t.join(".");
                                                window.location.href = "https://".concat(n, "/").concat(e, "/login/?return_to=").concat((0, g.btoau)(h))
                                            };
                                            var f = document.createElement("div");
                                            f.innerHTML = t["cm-without-auth-cancel-btn"] || "Close", f.className = "svdfnjnojksmodelbtn", f.style.cssText = "font-size: 14px;font-weight: 500;cursor: pointer;width: 128px;height: ".concat(u, "px; color: #C99400;display: flex;align-items:center;justify-content: center;"), f.onclick = function() {
                                                document.body.removeChild(r), window.location.reload()
                                            }, l.appendChild(d), l.appendChild(f), r.appendChild(l), document.body.appendChild(r)
                                        }
                                    }(L, j), de.label = 10;
                                case 10:
                                    return M && (x({
                                        startTime: p,
                                        status: w.status,
                                        url: w.url,
                                        page: o,
                                        uuid: null === (re = null === t || void 0 === t ? void 0 : t.headers) || void 0 === re ? void 0 : re["X-TRACE-ID"],
                                        bncUuid: $
                                    }), V || S({
                                        opts: t,
                                        url: e,
                                        res: w,
                                        duration: C,
                                        result: y
                                    })), s && K("\n      Request url: ".concat(e, ",\n      params is: ").concat(JSON.stringify(n), "\n      responseStatus: ").concat(w.status, "\n      duration time is ").concat(C, ",\n      ").concat(C > 500 ? "more than 500ms, " : "")), ge = d, "[object Function]" === he.call(ge) ? [2, d(y) || y] : [2, y];
                                case 11:
                                    if (k = de.sent(), E = T.needCaptcha, z = T.captchaConfig, U = k.status || k.code || (null === (oe = k.errorMsg) || void 0 === oe ? void 0 : oe.status), V || !a.o || !E || 418 !== U) return [3, 22];
                                    if (F = z.staticHost, Z = z.googleReCaptchaKey, !ce(e) || ie || !F) return [3, 22];
                                    ie = !0, de.label = 12;
                                case 12:
                                    return de.trys.push([12, 20, , 21]), c.U.writeCookieWithDomainLevel("bnc-challenge-token", "", -1, !0), G = {
                                        supportedTypes: ["bCAPTCHA2", Z ? "reCAPTCHA" : ""].filter(Boolean)
                                    }, [4, le("/bapi/accounts/v1/public/account/security/challenge/select", G)];
                                case 13:
                                    return P = de.sent().data, R = (W = P || {}).challengeType, Y = W.sessionId, H = {
                                        validateCodeType: R,
                                        sessionId: Y
                                    }, "bCAPTCHA2" !== R ? [3, 15] : [4, _({
                                        bizId: "issue_token",
                                        lang: L = ee(),
                                        staticHost: F
                                    })];
                                case 14:
                                    return B = de.sent(), H.bCaptchaToken = B.token, [3, 18];
                                case 15:
                                    return "reCAPTCHA" !== R ? [3, 17] : [4, O({
                                        googleReCaptchaKey: Z,
                                        needCaptcha: E
                                    })];
                                case 16:
                                    return Q = de.sent(), H.siteKey = Z, H.recaptchaResponse = Q.token, [3, 18];
                                case 17:
                                    throw new Error("challengeType type is not support");
                                case 18:
                                    return [4, le("/bapi/accounts/v1/public/account/security/challenge/pass", H)];
                                case 19:
                                    return J = de.sent().data, c.U.writeCookieWithDomainLevel("bnc-challenge-token", J.token, 7, !0), [3, 21];
                                case 20:
                                    return te = de.sent(), k.message = te.message, console.log("captcha error", te), [3, 21];
                                case 21:
                                    ie = !1, de.label = 22;
                                case 22:
                                    throw a.o && !V && k && "TypeError" === k.name && function() {
                                        if (a.o && !v) {
                                            v = !0;
                                            var e = window.location.origin;
                                            I(e), b(e)
                                        }
                                    }(), M && (x({
                                        startTime: p,
                                        status: w && w.status,
                                        url: e,
                                        page: o,
                                        error: k,
                                        uuid: null === (se = null === t || void 0 === t ? void 0 : t.headers) || void 0 === se ? void 0 : se["X-TRACE-ID"],
                                        bncUuid: $
                                    }), V || S({
                                        opts: t,
                                        url: e,
                                        res: w,
                                        duration: C,
                                        result: y,
                                        net_err_exist: !0
                                    })), s && K("\n      BAD REQUEST:\n      Request url: {".concat(e, "},\n      params is: ").concat(JSON.stringify(n), ",\n      parse ERROR is ").concat(JSON.stringify(k))), q(k), k;
                                case 23:
                                    return [2]
                            }
                            var ge, fe
                        }))
                    }))
                },
                ue = function(e, t) {
                    return (0, r.__awaiter)(void 0, void 0, void 0, (function() {
                        var n, o, a, i;
                        return (0, r.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return t = t || {}, n = (0, f.v4)(), [4, re(n, oe(t))];
                                case 1:
                                    return o = r.sent(), a = o.opts, i = o.page, [2, se(e, a, {}, i, t)]
                            }
                        }))
                    }))
                },
                le = function(e, t, n) {
                    return void 0 === n && (n = {}), (0, r.__awaiter)(void 0, void 0, void 0, (function() {
                        var o, a, i, c;
                        return (0, r.__generator)(this, (function(r) {
                            switch (r.label) {
                                case 0:
                                    return o = (0, f.v4)(), [4, re(o, oe(n))];
                                case 1:
                                    return a = r.sent(), i = a.opts, c = a.page, i = Object.assign(i, {
                                        method: "POST",
                                        body: JSON.stringify(t)
                                    }), [2, se(e, i, t, c, n)]
                            }
                        }))
                    }))
                },
                de = l(),
                he = Object.prototype.toString;
            de().fetch
        }
    }
]);