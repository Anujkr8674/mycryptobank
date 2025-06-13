"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "871e81d2-95ab-5636-9202-c28b9ac8aeb0")
    } catch (e) {}
}();
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [9317], {
        Fv9w: (e, n, t) => {
            t.r(n), t.d(n, {
                generateFvideoToken: () => zn,
                generateToken: () => Un,
                getFvideoId: () => Kn,
                syncLocalDfp: () => Jn
            });
            var r, o = t("S+0I"),
                a = t("66mo"),
                i = t.n(a),
                c = "undefined" !== typeof window,
                u = !("undefined" === typeof window || !(null === (r = window) || void 0 === r ? void 0 : r.__RUN_BY_ELECTRON__)),
                l = !! function() {
                    try {
                        if ("undefined" === typeof window) return "";
                        if (window && window.navigator.userAgent) {
                            var e, n, t, r, o = window.navigator.userAgent;
                            return /BNC\/[\d\.]+/i.test(o) ? null === o || void 0 === o || null === (e = o.match) || void 0 === e || null === (n = e.call(o, /BNC\/[\d\.]+/i)) || void 0 === n || null === (t = n[0]) || void 0 === t || null === (r = t.slice) || void 0 === r ? void 0 : r.call(t, 4) : ""
                        }
                        return ""
                    } catch (a) {
                        return ""
                    }
                }();

            function s(e) {
                try {
                    return decodeURIComponent(e)
                } catch (n) {
                    return e
                }
            }
            var d = function(e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                },
                f = function(e) {
                    if (!c || !d(e)) return null;
                    if (u) {
                        if ("BNC-Location" === e) return window.__store.getState().temp.bncLocation;
                        var n = window.localStorage.getItem("APP_COOKIES_".concat(e));
                        return n ? s(n) : null
                    }
                    for (var t = "".concat(e, "=").trim(), r = ((document || {}).cookie || "").split(";"), o = 0; o < r.length; o++) {
                        var a = (r[o] || "").trim();
                        if (0 === a.indexOf(t)) {
                            var i = a.slice(t.length).trim();
                            return s('"' === i[0] ? i.slice(1, -1) : i)
                        }
                    }
                    return null
                },
                v = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (c && d(e)) {
                        u && (n ? window.localStorage.setItem("APP_COOKIES_".concat(e), encodeURIComponent(n)) : window.localStorage.removeItem("APP_COOKIES_".concat(e)));
                        var o = ["path=/"];
                        r && o.unshift("Domain=".concat(function() {
                            var e = window.location.hostname,
                                n = e.split(".");
                            return n.length > 2 ? n.slice(-2).join(".") : e
                        }())), Number.isNaN(+t) || o.unshift("Max-Age=".concat(Math.floor(86400 * t))), o.unshift("".concat(e, "=").concat(encodeURIComponent(n))), document.cookie = o.join("; ")
                    }
                },
                m = "2024.12.17",
                h = "unknown",
                p = "BNC_FV_KEY",
                g = "BNC_FV_KEY_EXPIRE",
                y = t("hrAD"),
                b = t("qoEP"),
                w = t("EnBZ"),
                k = function() {
                    return k = Object.assign || function(e) {
                        for (var n, t = 1, r = arguments.length; t < r; t++)
                            for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        return e
                    }, k.apply(this, arguments)
                };

            function S(e, n, t, r) {
                return new(t || (t = Promise))((function(o, a) {
                    var i = function(e) {
                            try {
                                u(r.next(e))
                            } catch (n) {
                                a(n)
                            }
                        },
                        c = function(e) {
                            try {
                                u(r.throw(e))
                            } catch (n) {
                                a(n)
                            }
                        },
                        u = function(e) {
                            var n;
                            e.done ? o(e.value) : (n = e.value, (0, w._)(n, t) ? n : new t((function(e) {
                                e(n)
                            }))).then(i, c)
                        };
                    u((r = r.apply(e, n || [])).next())
                }))
            }

            function L(e, n) {
                var t, r, o, a, i = function(i) {
                        return function(u) {
                            return function(i) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a && (a = 0, i[0] && (c = 0)), c;) try {
                                    if (t = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                    switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            o = i;
                                            break;
                                        case 4:
                                            return c.label++, {
                                                value: i[1],
                                                done: !1
                                            };
                                        case 5:
                                            c.label++, r = i[1], i = [0];
                                            continue;
                                        case 7:
                                            i = c.ops.pop(), c.trys.pop();
                                            continue;
                                        default:
                                            if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                                c.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && c.label < o[1]) {
                                                c.label = o[1], o = i;
                                                break
                                            }
                                            if (o && c.label < o[2]) {
                                                c.label = o[2], c.ops.push(i);
                                                break
                                            }
                                            o[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    i = n.call(e, c)
                                } catch (u) {
                                    i = [6, u], r = 0
                                } finally {
                                    t = o = 0
                                }
                                if (5 & i[0]) throw i[1];
                                return {
                                    value: i[0] ? i[1] : void 0,
                                    done: !0
                                }
                            }([i, u])
                        }
                    },
                    c = {
                        label: 0,
                        sent: function() {
                            if (1 & o[0]) throw o[1];
                            return o[1]
                        },
                        trys: [],
                        ops: []
                    };
                return a = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a
            }

            function x(e, n, t) {
                if (t || 2 === arguments.length)
                    for (var r, o = 0, a = n.length; o < a; o++) !r && o in n || (r || (r = Array.prototype.slice.call(n, 0, o)), r[o] = n[o]);
                return e.concat(r || Array.prototype.slice.call(n))
            }

            function _(e, n) {
                return new Promise((function(t) {
                    return setTimeout(t, e, n)
                }))
            }

            function C(e) {
                return !!e && "function" == typeof e.then
            }

            function V(e, n) {
                try {
                    var t = e();
                    C(t) ? t.then((function(e) {
                        return n(!0, e)
                    }), (function(e) {
                        return n(!1, e)
                    })) : n(!0, t)
                } catch (r) {
                    n(!1, r)
                }
            }

            function A(e, n, t) {
                return void 0 === t && (t = 16), S(this, void 0, void 0, (function() {
                    var r, o, a, i;
                    return L(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                r = Array(e.length), o = Date.now(), a = 0, c.label = 1;
                            case 1:
                                return a < e.length ? (r[a] = n(e[a], a), (i = Date.now()) >= o + t ? (o = i, [4, new Promise((function(e) {
                                    var n = new MessageChannel;
                                    n.port1.onmessage = function() {
                                        return e()
                                    }, n.port2.postMessage(null)
                                }))]) : [3, 3]) : [3, 4];
                            case 2:
                                c.sent(), c.label = 3;
                            case 3:
                                return ++a, [3, 1];
                            case 4:
                                return [2, r]
                        }
                    }))
                }))
            }

            function W(e) {
                return e.then(void 0, (function() {})), e
            }

            function R(e) {
                return parseInt(e)
            }

            function M(e) {
                return parseFloat(e)
            }

            function F(e, n) {
                return "number" == typeof e && isNaN(e) ? n : e
            }

            function I(e) {
                return e.reduce((function(e, n) {
                    return e + (n ? 1 : 0)
                }), 0)
            }

            function T(e, n) {
                if (void 0 === n && (n = 1), Math.abs(n) >= 1) return Math.round(e / n) * n;
                var t = 1 / n;
                return Math.round(e * t) / t
            }

            function Z(e, n) {
                var t = e[0] >>> 16,
                    r = 65535 & e[0],
                    o = e[1] >>> 16,
                    a = 65535 & e[1],
                    i = n[0] >>> 16,
                    c = 65535 & n[0],
                    u = n[1] >>> 16,
                    l = 0,
                    s = 0,
                    d = 0,
                    f = 0;
                d += (f += a + (65535 & n[1])) >>> 16, f &= 65535, s += (d += o + u) >>> 16, d &= 65535, l += (s += r + c) >>> 16, s &= 65535, l += t + i, l &= 65535, e[0] = l << 16 | s, e[1] = d << 16 | f
            }

            function G(e, n) {
                var t = e[0] >>> 16,
                    r = 65535 & e[0],
                    o = e[1] >>> 16,
                    a = 65535 & e[1],
                    i = n[0] >>> 16,
                    c = 65535 & n[0],
                    u = n[1] >>> 16,
                    l = 65535 & n[1],
                    s = 0,
                    d = 0,
                    f = 0,
                    v = 0;
                f += (v += a * l) >>> 16, v &= 65535, d += (f += o * l) >>> 16, f &= 65535, d += (f += a * u) >>> 16, f &= 65535, s += (d += r * l) >>> 16, d &= 65535, s += (d += o * u) >>> 16, d &= 65535, s += (d += a * c) >>> 16, d &= 65535, s += t * l + r * u + o * c + a * i, s &= 65535, e[0] = s << 16 | d, e[1] = f << 16 | v
            }

            function E(e, n) {
                var t = e[0];
                32 === (n %= 64) ? (e[0] = e[1], e[1] = t) : n < 32 ? (e[0] = t << n | e[1] >>> 32 - n, e[1] = e[1] << n | t >>> 32 - n) : (n -= 32, e[0] = e[1] << n | t >>> 32 - n, e[1] = t << n | e[1] >>> 32 - n)
            }

            function j(e, n) {
                0 !== (n %= 64) && (n < 32 ? (e[0] = e[1] >>> 32 - n, e[1] = e[1] << n) : (e[0] = e[1] << n - 32, e[1] = 0))
            }

            function P(e, n) {
                e[0] ^= n[0], e[1] ^= n[1]
            }
            var Y = [4283543511, 3981806797],
                N = [3301882366, 444984403];

            function X(e) {
                var n = [0, e[0] >>> 1];
                P(e, n), G(e, Y), n[1] = e[0] >>> 1, P(e, n), G(e, N), n[1] = e[0] >>> 1, P(e, n)
            }
            var D = [2277735313, 289559509],
                B = [1291169091, 658871167],
                H = [0, 5],
                J = [0, 1390208809],
                O = [0, 944331445];

            function z(e, n) {
                var t = function(e) {
                    for (var n = new Uint8Array(e.length), t = 0; t < e.length; t++) {
                        var r = e.charCodeAt(t);
                        if (r > 127) return (new TextEncoder).encode(e);
                        n[t] = r
                    }
                    return n
                }(e);
                n = n || 0;
                var r, o = [0, t.length],
                    a = o[1] % 16,
                    i = o[1] - a,
                    c = [0, n],
                    u = [0, n],
                    l = [0, 0],
                    s = [0, 0];
                for (r = 0; r < i; r += 16) l[0] = t[r + 4] | t[r + 5] << 8 | t[r + 6] << 16 | t[r + 7] << 24, l[1] = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24, s[0] = t[r + 12] | t[r + 13] << 8 | t[r + 14] << 16 | t[r + 15] << 24, s[1] = t[r + 8] | t[r + 9] << 8 | t[r + 10] << 16 | t[r + 11] << 24, G(l, D), E(l, 31), G(l, B), P(c, l), E(c, 27), Z(c, u), G(c, H), Z(c, J), G(s, B), E(s, 33), G(s, D), P(u, s), E(u, 31), Z(u, c), G(u, H), Z(u, O);
                l[0] = 0, l[1] = 0, s[0] = 0, s[1] = 0;
                var d = [0, 0];
                switch (a) {
                    case 15:
                        d[1] = t[r + 14], j(d, 48), P(s, d);
                    case 14:
                        d[1] = t[r + 13], j(d, 40), P(s, d);
                    case 13:
                        d[1] = t[r + 12], j(d, 32), P(s, d);
                    case 12:
                        d[1] = t[r + 11], j(d, 24), P(s, d);
                    case 11:
                        d[1] = t[r + 10], j(d, 16), P(s, d);
                    case 10:
                        d[1] = t[r + 9], j(d, 8), P(s, d);
                    case 9:
                        d[1] = t[r + 8], P(s, d), G(s, B), E(s, 33), G(s, D), P(u, s);
                    case 8:
                        d[1] = t[r + 7], j(d, 56), P(l, d);
                    case 7:
                        d[1] = t[r + 6], j(d, 48), P(l, d);
                    case 6:
                        d[1] = t[r + 5], j(d, 40), P(l, d);
                    case 5:
                        d[1] = t[r + 4], j(d, 32), P(l, d);
                    case 4:
                        d[1] = t[r + 3], j(d, 24), P(l, d);
                    case 3:
                        d[1] = t[r + 2], j(d, 16), P(l, d);
                    case 2:
                        d[1] = t[r + 1], j(d, 8), P(l, d);
                    case 1:
                        d[1] = t[r], P(l, d), G(l, D), E(l, 31), G(l, B), P(c, l)
                }
                return P(c, o), P(u, o), Z(c, u), Z(u, c), X(c), X(u), Z(c, u), Z(u, c), ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
            }

            function U(e) {
                return "function" != typeof e
            }

            function K() {
                var e = window,
                    n = navigator;
                return I(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in n, "msPointerEnabled" in n]) >= 4
            }

            function Q() {
                var e = window,
                    n = navigator;
                return I(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, 0 === n.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
            }

            function q() {
                var e = window;
                return I(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === navigator.vendor.indexOf("Apple"), "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4
            }

            function $() {
                var e = window,
                    n = e.HTMLElement,
                    t = e.Document;
                return I(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), n && !("autocapitalize" in n.prototype), t && "pointerLockElement" in t.prototype]) >= 4
            }

            function ee() {
                var e, n = window;
                return e = n.print, /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e)) && "[object WebPageNamespace]" === String(n.browser)
            }

            function ne() {
                var e, n, t = window;
                return I(["buildID" in navigator, "MozAppearance" in (null !== (n = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}), "onmozfullscreenchange" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4
            }

            function te() {
                var e = window,
                    n = navigator,
                    t = e.CSS,
                    r = e.HTMLButtonElement;
                return I([!("getStorageUpdates" in n), r && "popover" in r.prototype, "CSSCounterStyleRule" in e, t.supports("font-size-adjust: ex-height 0.5"), t.supports("text-transform: full-width")]) >= 4
            }

            function re() {
                var e = Q(),
                    n = ne(),
                    t = window,
                    r = navigator,
                    o = "connection";
                return e ? I([!("SharedWorker" in t), r[o] && "ontypechange" in r[o], !("sinkId" in new Audio)]) >= 2 : !!n && I(["onorientationchange" in t, "orientation" in t, /android/i.test(r.appVersion)]) >= 2
            }

            function oe(e) {
                var n = new Error(e);
                return n.name = e, n
            }

            function ae(e, n, t) {
                var r, o, a;
                return void 0 === t && (t = 50), S(this, void 0, void 0, (function() {
                    var i, c;
                    return L(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                i = document, u.label = 1;
                            case 1:
                                return i.body ? [3, 3] : [4, _(t)];
                            case 2:
                                return u.sent(), [3, 1];
                            case 3:
                                c = i.createElement("iframe"), u.label = 4;
                            case 4:
                                return u.trys.push([4, , 10, 11]), [4, new Promise((function(e, t) {
                                    var r = !1,
                                        o = function() {
                                            r = !0, e()
                                        };
                                    c.onload = o, c.onerror = function(e) {
                                        r = !0, t(e)
                                    };
                                    var a = c.style;
                                    a.setProperty("display", "block", "important"), a.position = "absolute", a.top = "0", a.left = "0", a.visibility = "hidden", n && "srcdoc" in c ? c.srcdoc = n : c.src = "about:blank", i.body.appendChild(c);
                                    var u = function() {
                                        var e, n;
                                        r || ("complete" === (null === (n = null === (e = c.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === n ? void 0 : n.readyState) ? o() : setTimeout(u, 10))
                                    };
                                    u()
                                }))];
                            case 5:
                                u.sent(), u.label = 6;
                            case 6:
                                return (null === (o = null === (r = c.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === o ? void 0 : o.body) ? [3, 8] : [4, _(t)];
                            case 7:
                                return u.sent(), [3, 6];
                            case 8:
                                return [4, e(c, c.contentWindow)];
                            case 9:
                                return [2, u.sent()];
                            case 10:
                                return null === (a = c.parentNode) || void 0 === a || a.removeChild(c), [7];
                            case 11:
                                return [2]
                        }
                    }))
                }))
            }

            function ie(e) {
                for (var n = function(e) {
                        for (var n, t, r = "Unexpected syntax '".concat(e, "'"), o = /^\s*([a-z-]*)(.*)$/i.exec(e), a = o[1] || void 0, i = {}, c = /([.:#][\w-]+|\[.+?\])/gi, u = function(e, n) {
                                i[e] = i[e] || [], i[e].push(n)
                            };;) {
                            var l = c.exec(o[2]);
                            if (!l) break;
                            var s = l[0];
                            switch (s[0]) {
                                case ".":
                                    u("class", s.slice(1));
                                    break;
                                case "#":
                                    u("id", s.slice(1));
                                    break;
                                case "[":
                                    var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(s);
                                    if (!d) throw new Error(r);
                                    u(d[1], null !== (t = null !== (n = d[4]) && void 0 !== n ? n : d[5]) && void 0 !== t ? t : "");
                                    break;
                                default:
                                    throw new Error(r)
                            }
                        }
                        return [a, i]
                    }(e), t = n[0], r = n[1], o = document.createElement(null != t ? t : "div"), a = 0, i = Object.keys(r); a < i.length; a++) {
                    var c = i[a],
                        u = r[c].join(" ");
                    "style" === c ? ce(o.style, u) : o.setAttribute(c, u)
                }
                return o
            }

            function ce(e, n) {
                for (var t = 0, r = n.split(";"); t < r.length; t++) {
                    var o = r[t],
                        a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(o);
                    if (a) {
                        var i = a[1],
                            c = a[2],
                            u = a[4];
                        e.setProperty(i, c, u || "")
                    }
                }
            }
            var ue, le, se = ["monospace", "sans-serif", "serif"],
                de = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

            function fe(e) {
                return e.toDataURL()
            }

            function ve() {
                var e = this;
                return function() {
                        if (void 0 === le) {
                            var e = function() {
                                var n = me();
                                he(n) ? le = setTimeout(e, 2500) : (ue = n, le = void 0)
                            };
                            e()
                        }
                    }(),
                    function() {
                        return S(e, void 0, void 0, (function() {
                            var e;
                            return L(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return he(e = me()) ? ue ? [2, x([], ue, !0)] : function() {
                                            var e = document;
                                            return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
                                        }() ? [4, (t = document, (t.exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t))] : [3, 2] : [3, 2];
                                    case 1:
                                        n.sent(), e = me(), n.label = 2;
                                    case 2:
                                        return he(e) || (ue = e), [2, e]
                                }
                                var t
                            }))
                        }))
                    }
            }

            function me() {
                var e = screen;
                return [F(M(e.availTop), null), F(M(e.width) - M(e.availWidth) - F(M(e.availLeft), 0), null), F(M(e.height) - M(e.availHeight) - F(M(e.availTop), 0), null), F(M(e.availLeft), null)]
            }

            function he(e) {
                for (var n = 0; n < 4; ++n)
                    if (e[n]) return !1;
                return !0
            }

            function pe(e) {
                var n;
                return S(this, void 0, void 0, (function() {
                    var t, r, o, a, i, c, u;
                    return L(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                for (t = document, r = t.createElement("div"), o = new Array(e.length), a = {}, ge(r), u = 0; u < e.length; ++u) "DIALOG" === (i = ie(e[u])).tagName && i.show(), ge(c = t.createElement("div")), c.appendChild(i), r.appendChild(c), o[u] = i;
                                l.label = 1;
                            case 1:
                                return t.body ? [3, 3] : [4, _(50)];
                            case 2:
                                return l.sent(), [3, 1];
                            case 3:
                                t.body.appendChild(r);
                                try {
                                    for (u = 0; u < e.length; ++u) o[u].offsetParent || (a[e[u]] = !0)
                                } finally {
                                    null === (n = r.parentNode) || void 0 === n || n.removeChild(r)
                                }
                                return [2, a]
                        }
                    }))
                }))
            }

            function ge(e) {
                e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
            }

            function ye(e) {
                return matchMedia("(inverted-colors: ".concat(e, ")")).matches
            }

            function be(e) {
                return matchMedia("(forced-colors: ".concat(e, ")")).matches
            }

            function we(e) {
                return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
            }

            function ke(e) {
                return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
            }

            function Se(e) {
                return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches
            }

            function Le(e) {
                return matchMedia("(dynamic-range: ".concat(e, ")")).matches
            }
            var xe = Math,
                _e = function() {
                    return 0
                },
                Ce = {
                    default: [],
                    apple: [{
                        font: "-apple-system-body"
                    }],
                    serif: [{
                        fontFamily: "serif"
                    }],
                    sans: [{
                        fontFamily: "sans-serif"
                    }],
                    mono: [{
                        fontFamily: "monospace"
                    }],
                    min: [{
                        fontSize: "1px"
                    }],
                    system: [{
                        fontFamily: "system-ui"
                    }]
                },
                Ve = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
                Ae = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
                We = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
                Re = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"];

            function Me(e) {
                if (e.webgl) return e.webgl.context;
                var n, t = document.createElement("canvas");
                t.addEventListener("webglCreateContextError", (function() {
                    return n = void 0
                }));
                for (var r = 0, o = ["webgl", "experimental-webgl"]; r < o.length; r++) {
                    var a = o[r];
                    try {
                        n = t.getContext(a)
                    } catch (i) {}
                    if (n) break
                }
                return e.webgl = {
                    context: n
                }, n
            }

            function Fe(e, n, t) {
                var r = e.getShaderPrecisionFormat(e[n], e[t]);
                return r ? [r.rangeMin, r.rangeMax, r.precision] : []
            }

            function Ie(e) {
                return Object.keys(e.__proto__).filter(Te)
            }

            function Te(e) {
                return "string" == typeof e && !e.match(/[^A-Z0-9_x]/)
            }

            function Ze() {
                return ne()
            }

            function Ge(e) {
                return "function" == typeof e.getParameter
            }
            var Ee = {
                fonts: function() {
                    var e = this;
                    return ae((function(n, t) {
                        var r = t.document;
                        return S(e, void 0, void 0, (function() {
                            var e, n, t, o, a, i, c, u, l, s, d;
                            return L(this, (function(f) {
                                for ((e = r.body).style.fontSize = "48px", (n = r.createElement("div")).style.setProperty("visibility", "hidden", "important"), t = {}, o = {}, a = function(e) {
                                        var t = r.createElement("span"),
                                            o = t.style;
                                        return o.position = "absolute", o.top = "0", o.left = "0", o.fontFamily = e, t.textContent = "mmMwWLliI0O&1", n.appendChild(t), t
                                    }, i = function(e, n) {
                                        return a("'".concat(e, "',").concat(n))
                                    }, c = function() {
                                        for (var e = {}, n = function(n) {
                                                e[n] = se.map((function(e) {
                                                    return i(n, e)
                                                }))
                                            }, t = 0, r = de; t < r.length; t++) n(r[t]);
                                        return e
                                    }, u = function(e) {
                                        return se.some((function(n, r) {
                                            return e[r].offsetWidth !== t[n] || e[r].offsetHeight !== o[n]
                                        }))
                                    }, l = se.map(a), s = c(), e.appendChild(n), d = 0; d < se.length; d++) t[se[d]] = l[d].offsetWidth, o[se[d]] = l[d].offsetHeight;
                                return [2, de.filter((function(e) {
                                    return u(s[e])
                                }))]
                            }))
                        }))
                    }))
                },
                domBlockers: function(e) {
                    var n = (void 0 === e ? {} : e).debug;
                    return S(this, void 0, void 0, (function() {
                        var e, t, r, o, a;
                        return L(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return q() || re() ? (c = atob, e = {
                                        abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', c("I0JveC1CYW5uZXItYWRz")],
                                        abpvn: [".quangcao", "#mobileCatfish", c("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                                        adBlockFinland: [".mainostila", c("LnNwb25zb3JpdA=="), ".ylamainos", c("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                                        adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", c("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                                        adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", c("LmhlYWRlci1ibG9ja2VkLWFk"), c("I2FkX2Jsb2NrZXI=")],
                                        adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                                        adGuardBase: [".BetterJsPopOverlay", c("I2FkXzMwMFgyNTA="), c("I2Jhbm5lcmZsb2F0MjI="), c("I2NhbXBhaWduLWJhbm5lcg=="), c("I0FkLUNvbnRlbnQ=")],
                                        adGuardChinese: [c("LlppX2FkX2FfSA=="), c("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", c("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), c("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                                        adGuardFrench: ["#pavePub", c("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", c("LmFkc19iYW4=")],
                                        adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                                        adGuardJapanese: ["#kauli_yad_1", c("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), c("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), c("LmFkZ29vZ2xl"), c("Ll9faXNib29zdFJldHVybkFk")],
                                        adGuardMobile: [c("YW1wLWF1dG8tYWRz"), c("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", c("I2FkX2ludmlld19hcmVh")],
                                        adGuardRussian: [c("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), c("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', c("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                                        adGuardSocial: [c("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), c("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                                        adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                                        adGuardTrackingProtection: ["#qoo-counter", c("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), c("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), c("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                                        adGuardTurkish: ["#backkapat", c("I3Jla2xhbWk="), c("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), c("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), c("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                                        bulgarian: [c("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                                        easyList: [".yb-floorad", c("LndpZGdldF9wb19hZHNfd2lkZ2V0"), c("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", c("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                                        easyListChina: [c("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), c("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                                        easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", c("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                                        easyListCzechSlovak: ["#onlajny-stickers", c("I3Jla2xhbW5pLWJveA=="), c("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", c("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                                        easyListDutch: [c("I2FkdmVydGVudGll"), c("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", c("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                                        easyListGermany: ["#SSpotIMPopSlider", c("LnNwb25zb3JsaW5rZ3J1ZW4="), c("I3dlcmJ1bmdza3k="), c("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), c("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                                        easyListItaly: [c("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", c("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                                        easyListLithuania: [c("LnJla2xhbW9zX3RhcnBhcw=="), c("LnJla2xhbW9zX251b3JvZG9z"), c("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), c("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), c("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                                        estonian: [c("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                                        fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                                        fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                                        fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                                        fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                                        frellwitSwedish: [c("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), c("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", c("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                                        greekAdBlock: [c("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), c("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), c("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                                        hungarian: ["#cemp_doboz", ".optimonk-iframe-container", c("LmFkX19tYWlu"), c("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                                        iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                                        icelandicAbp: [c("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                                        latvian: [c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), c("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                                        listKr: [c("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), c("I2xpdmVyZUFkV3JhcHBlcg=="), c("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), c("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                                        listeAr: [c("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", c("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), c("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), c("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                                        listeFr: [c("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), c("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), c("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                                        officialPolish: ["#ceneo-placeholder-ceneo-12", c("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), c("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), c("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), c("ZGl2I3NrYXBpZWNfYWQ=")],
                                        ro: [c("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), c("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), c("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                                        ruAd: [c("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), c("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), c("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                                        thaiAds: ["a[href*=macau-uta-popup]", c("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), c("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                                        webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", c("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                                    }, t = Object.keys(e), [4, pe((a = []).concat.apply(a, t.map((function(n) {
                                        return e[n]
                                    }))))]) : [2, void 0];
                                case 1:
                                    return r = i.sent(), n && function(e, n) {
                                        for (var t = "DOM blockers debug:\n```", r = 0, o = Object.keys(e); r < o.length; r++) {
                                            var a = o[r];
                                            t += "\n".concat(a, ":");
                                            for (var i = 0, c = e[a]; i < c.length; i++) {
                                                var u = c[i];
                                                t += "\n  ".concat(n[u] ? "\ud83d\udeab" : "\u27a1\ufe0f", " ").concat(u)
                                            }
                                        }
                                        console.log("".concat(t, "\n```"))
                                    }(e, r), (o = t.filter((function(n) {
                                        var t = e[n];
                                        return I(t.map((function(e) {
                                            return r[e]
                                        }))) > .6 * t.length
                                    }))).sort(), [2, o]
                            }
                            var c
                        }))
                    }))
                },
                fontPreferences: function() {
                    return void 0 === e && (e = 4e3), ae((function(n, t) {
                        var r = t.document,
                            o = r.body,
                            a = o.style;
                        a.width = "".concat(e, "px"), a.webkitTextSizeAdjust = a.textSizeAdjust = "none", Q() ? o.style.zoom = "".concat(1 / t.devicePixelRatio) : q() && (o.style.zoom = "reset");
                        var i = r.createElement("div");
                        return i.textContent = x([], Array(e / 20 | 0), !0).map((function() {
                                return "word"
                            })).join(" "), o.appendChild(i),
                            function(e, n) {
                                for (var t = {}, r = {}, o = 0, a = Object.keys(Ce); o < a.length; o++) {
                                    var i = a[o],
                                        c = Ce[i],
                                        u = c[0],
                                        l = void 0 === u ? {} : u,
                                        s = c[1],
                                        d = void 0 === s ? "mmMwWLliI0fiflO&1" : s,
                                        f = e.createElement("span");
                                    f.textContent = d, f.style.whiteSpace = "nowrap";
                                    for (var v = 0, m = Object.keys(l); v < m.length; v++) {
                                        var h = m[v],
                                            p = l[h];
                                        void 0 !== p && (f.style[h] = p)
                                    }
                                    t[i] = f, n.append(e.createElement("br"), f)
                                }
                                for (var g = 0, y = Object.keys(Ce); g < y.length; g++) r[i = y[g]] = t[i].getBoundingClientRect().width;
                                return r
                            }(r, o)
                    }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
                    var e
                },
                audio: function() {
                    return q() && te() && ee() || Q() && function() {
                        var e = navigator,
                            n = window,
                            t = Audio.prototype,
                            r = n.visualViewport;
                        return I(["srLatency" in t, "srChannelCount" in t, "devicePosture" in e, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
                    }() && (n = (e = window).URLPattern, I(["union" in Set.prototype, "Iterator" in e, n && "hasRegExpGroups" in n.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3) ? -4 : function() {
                        var e = window,
                            n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
                        if (!n) return -2;
                        if (q() && !$() && ! function() {
                                var e = window;
                                return I(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
                            }()) return -1;
                        var t = new n(1, 5e3, 44100),
                            r = t.createOscillator();
                        r.type = "triangle", r.frequency.value = 1e4;
                        var o = t.createDynamicsCompressor();
                        o.threshold.value = -50, o.knee.value = 40, o.ratio.value = 12, o.attack.value = 0, o.release.value = .25, r.connect(o), o.connect(t.destination), r.start(0);
                        var a = function(e) {
                                var n = function() {};
                                return [new Promise((function(t, r) {
                                    var o = !1,
                                        a = 0,
                                        i = 0;
                                    e.oncomplete = function(e) {
                                        return t(e.renderedBuffer)
                                    };
                                    var c = function() {
                                            setTimeout((function() {
                                                return r(oe("timeout"))
                                            }), Math.min(500, i + 5e3 - Date.now()))
                                        },
                                        u = function() {
                                            try {
                                                var n = e.startRendering();
                                                switch (C(n) && W(n), e.state) {
                                                    case "running":
                                                        i = Date.now(), o && c();
                                                        break;
                                                    case "suspended":
                                                        document.hidden || a++, o && a >= 3 ? r(oe("suspended")) : setTimeout(u, 500)
                                                }
                                            } catch (t) {
                                                r(t)
                                            }
                                        };
                                    u(), n = function() {
                                        o || (o = !0, i > 0 && c())
                                    }
                                })), n]
                            }(t),
                            i = a[0],
                            c = a[1],
                            u = W(i.then((function(e) {
                                return function(e) {
                                    for (var n = 0, t = 0; t < e.length; ++t) n += Math.abs(e[t]);
                                    return n
                                }(e.getChannelData(0).subarray(4500))
                            }), (function(e) {
                                if ("timeout" === e.name || "suspended" === e.name) return -3;
                                throw e
                            })));
                        return function() {
                            return c(), u
                        }
                    }();
                    var e, n
                },
                screenFrame: function() {
                    var e = this;
                    if (q() && te() && ee()) return function() {
                        return Promise.resolve(void 0)
                    };
                    var n = ve();
                    return function() {
                        return S(e, void 0, void 0, (function() {
                            var e, t;
                            return L(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, n()];
                                    case 1:
                                        return e = r.sent(), [2, [(t = function(e) {
                                            return null === e ? null : T(e, 10)
                                        })(e[0]), t(e[1]), t(e[2]), t(e[3])]]
                                }
                            }))
                        }))
                    }
                },
                canvas: function() {
                    return function(e) {
                        var n, t, r, o, a, i = !1,
                            c = function() {
                                var e = document.createElement("canvas");
                                return e.width = 1, e.height = 1, [e, e.getContext("2d")]
                            }(),
                            u = c[0],
                            l = c[1];
                        return a = u, l && a.toDataURL ? ((o = l).rect(0, 0, 10, 10), o.rect(2, 2, 6, 6), i = !o.isPointInPath(5, 5, "evenodd"), e ? t = r = "skipped" : (t = (n = function(e, n) {
                            ! function(e, n) {
                                e.width = 240, e.height = 60, n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(100, 1, 62, 20), n.fillStyle = "#069", n.font = '11pt "Times New Roman"';
                                var t = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                                n.fillText(t, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(t, 4, 45)
                            }(e, n);
                            var t = fe(e);
                            return t !== fe(e) ? ["unstable", "unstable"] : (function(e, n) {
                                e.width = 122, e.height = 110, n.globalCompositeOperation = "multiply";
                                for (var t = 0, r = [
                                        ["#f2f", 40, 40],
                                        ["#2ff", 80, 40],
                                        ["#ff2", 60, 80]
                                    ]; t < r.length; t++) {
                                    var o = r[t],
                                        a = o[0],
                                        i = o[1],
                                        c = o[2];
                                    n.fillStyle = a, n.beginPath(), n.arc(i, c, 40, 0, 2 * Math.PI, !0), n.closePath(), n.fill()
                                }
                                n.fillStyle = "#f9c", n.arc(60, 60, 60, 0, 2 * Math.PI, !0), n.arc(60, 60, 20, 0, 2 * Math.PI, !0), n.fill("evenodd")
                            }(e, n), [fe(e), t])
                        }(u, l))[0], r = n[1])) : t = r = "unsupported", {
                            winding: i,
                            geometry: t,
                            text: r
                        }
                    }(q() && te() && ee())
                },
                osCpu: function() {
                    return navigator.oscpu
                },
                languages: function() {
                    var e, n = navigator,
                        t = [],
                        r = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
                    if (void 0 !== r && t.push([r]), Array.isArray(n.languages)) Q() && I([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || t.push(n.languages);
                    else if ("string" == typeof n.languages) {
                        var o = n.languages;
                        o && t.push(o.split(","))
                    }
                    return t
                },
                colorDepth: function() {
                    return window.screen.colorDepth
                },
                deviceMemory: function() {
                    return F(M(navigator.deviceMemory), void 0)
                },
                screenResolution: function() {
                    if (!(q() && te() && ee())) return function() {
                        var e = screen,
                            n = function(e) {
                                return F(R(e), null)
                            },
                            t = [n(e.width), n(e.height)];
                        return t.sort().reverse(), t
                    }()
                },
                hardwareConcurrency: function() {
                    return F(R(navigator.hardwareConcurrency), void 0)
                },
                timezone: function() {
                    var e, n = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                    if (n) {
                        var t = (new n).resolvedOptions().timeZone;
                        if (t) return t
                    }
                    var r, o = (r = (new Date).getFullYear(), -Math.max(M(new Date(r, 0, 1).getTimezoneOffset()), M(new Date(r, 6, 1).getTimezoneOffset())));
                    return "UTC".concat(o >= 0 ? "+" : "").concat(o)
                },
                sessionStorage: function() {
                    try {
                        return !!window.sessionStorage
                    } catch (e) {
                        return !0
                    }
                },
                localStorage: function() {
                    try {
                        return !!window.localStorage
                    } catch (e) {
                        return !0
                    }
                },
                indexedDB: function() {
                    if (!K() && ! function() {
                            var e = window,
                                n = navigator;
                            return I(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in n, "msSaveBlob" in n]) >= 3 && !K()
                        }()) try {
                        return !!window.indexedDB
                    } catch (e) {
                        return !0
                    }
                },
                openDatabase: function() {
                    return !!window.openDatabase
                },
                cpuClass: function() {
                    return navigator.cpuClass
                },
                platform: function() {
                    var e = navigator.platform;
                    return "MacIntel" === e && q() && !$() ? function() {
                        if ("iPad" === navigator.platform) return !0;
                        var e = screen,
                            n = e.width / e.height;
                        return I(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
                    }() ? "iPad" : "iPhone" : e
                },
                plugins: function() {
                    var e = navigator.plugins;
                    if (e) {
                        for (var n = [], t = 0; t < e.length; ++t) {
                            var r = e[t];
                            if (r) {
                                for (var o = [], a = 0; a < r.length; ++a) {
                                    var i = r[a];
                                    o.push({
                                        type: i.type,
                                        suffixes: i.suffixes
                                    })
                                }
                                n.push({
                                    name: r.name,
                                    description: r.description,
                                    mimeTypes: o
                                })
                            }
                        }
                        return n
                    }
                },
                touchSupport: function() {
                    var e, n = navigator,
                        t = 0;
                    void 0 !== n.maxTouchPoints ? t = R(n.maxTouchPoints) : void 0 !== n.msMaxTouchPoints && (t = n.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (x) {
                        e = !1
                    }
                    return {
                        maxTouchPoints: t,
                        touchEvent: e,
                        touchStart: "ontouchstart" in window
                    }
                },
                vendor: function() {
                    return navigator.vendor || ""
                },
                vendorFlavors: function() {
                    for (var e = [], n = 0, t = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; n < t.length; n++) {
                        var r = t[n],
                            o = window[r];
                        o && "object" == typeof o && e.push(r)
                    }
                    return e.sort()
                },
                cookiesEnabled: function() {
                    var e = document;
                    try {
                        e.cookie = "cookietest=1; SameSite=Strict;";
                        var n = -1 !== e.cookie.indexOf("cookietest=");
                        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", n
                    } catch (L) {
                        return !1
                    }
                },
                colorGamut: function() {
                    for (var e = 0, n = ["rec2020", "p3", "srgb"]; e < n.length; e++) {
                        var t = n[e];
                        if (matchMedia("(color-gamut: ".concat(t, ")")).matches) return t
                    }
                },
                invertedColors: function() {
                    return !!ye("inverted") || !ye("none") && void 0
                },
                forcedColors: function() {
                    return !!be("active") || !be("none") && void 0
                },
                monochrome: function() {
                    if (matchMedia("(min-monochrome: 0)").matches) {
                        for (var e = 0; e <= 100; ++e)
                            if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
                        throw new Error("Too high value")
                    }
                },
                contrast: function() {
                    return we("no-preference") ? 0 : we("high") || we("more") ? 1 : we("low") || we("less") ? -1 : we("forced") ? 10 : void 0
                },
                reducedMotion: function() {
                    return !!ke("reduce") || !ke("no-preference") && void 0
                },
                reducedTransparency: function() {
                    return !!Se("reduce") || !Se("no-preference") && void 0
                },
                hdr: function() {
                    return !!Le("high") || !Le("standard") && void 0
                },
                math: function() {
                    var e, n = xe.acos || _e,
                        t = xe.acosh || _e,
                        r = xe.asin || _e,
                        o = xe.asinh || _e,
                        a = xe.atanh || _e,
                        i = xe.atan || _e,
                        c = xe.sin || _e,
                        u = xe.sinh || _e,
                        l = xe.cos || _e,
                        s = xe.cosh || _e,
                        d = xe.tan || _e,
                        f = xe.tanh || _e,
                        v = xe.exp || _e,
                        m = xe.expm1 || _e,
                        h = xe.log1p || _e;
                    return {
                        acos: n(.12312423423423424),
                        acosh: t(1e308),
                        acoshPf: (e = 1e154, xe.log(e + xe.sqrt(e * e - 1))),
                        asin: r(.12312423423423424),
                        asinh: o(1),
                        asinhPf: xe.log(1 + xe.sqrt(2)),
                        atanh: a(.5),
                        atanhPf: xe.log(3) / 2,
                        atan: i(.5),
                        sin: c(-1e300),
                        sinh: u(1),
                        sinhPf: xe.exp(1) - 1 / xe.exp(1) / 2,
                        cos: l(10.000000000123),
                        cosh: s(1),
                        coshPf: (xe.exp(1) + 1 / xe.exp(1)) / 2,
                        tan: d(-1e300),
                        tanh: f(1),
                        tanhPf: (xe.exp(2) - 1) / (xe.exp(2) + 1),
                        exp: v(1),
                        expm1: m(1),
                        expm1Pf: xe.exp(1) - 1,
                        log1p: h(10),
                        log1pPf: xe.log(11),
                        powPI: xe.pow(xe.PI, -100)
                    }
                },
                pdfViewerEnabled: function() {
                    return navigator.pdfViewerEnabled
                },
                architecture: function() {
                    var e = new Float32Array(1),
                        n = new Uint8Array(e.buffer);
                    return e[0] = 1 / 0, e[0] = e[0] - e[0], n[3]
                },
                applePay: function() {
                    var e = window.ApplePaySession;
                    if ("function" != typeof(null == e ? void 0 : e.canMakePayments)) return -1;
                    if (function() {
                            for (var e = window;;) {
                                var n = e.parent;
                                if (!n || n === e) return !1;
                                try {
                                    if (n.location.origin !== e.location.origin) return !0
                                } catch (t) {
                                    if ((0, w._)(t, Error) && "SecurityError" === t.name) return !0;
                                    throw t
                                }
                                e = n
                            }
                        }()) return -3;
                    try {
                        return e.canMakePayments() ? 1 : 0
                    } catch (n) {
                        return function(e) {
                            if ((0, w._)(e, Error) && "InvalidAccessError" === e.name && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
                            throw e
                        }(n)
                    }
                },
                privateClickMeasurement: function() {
                    var e, n = document.createElement("a"),
                        t = null !== (e = n.attributionSourceId) && void 0 !== e ? e : n.attributionsourceid;
                    return void 0 === t ? void 0 : String(t)
                },
                audioBaseLatency: function() {
                    var e;
                    return re() || q() ? window.AudioContext && null !== (e = (new AudioContext).baseLatency) && void 0 !== e ? e : -1 : -2
                },
                webGlBasics: function(e) {
                    var n, t, r, o, a, i, c = Me(e.cache);
                    if (!c) return -1;
                    if (!Ge(c)) return -2;
                    var u = Ze() ? null : c.getExtension("WEBGL_debug_renderer_info");
                    return {
                        version: (null === (n = c.getParameter(c.VERSION)) || void 0 === n ? void 0 : n.toString()) || "",
                        vendor: (null === (t = c.getParameter(c.VENDOR)) || void 0 === t ? void 0 : t.toString()) || "",
                        vendorUnmasked: u ? null === (r = c.getParameter(u.UNMASKED_VENDOR_WEBGL)) || void 0 === r ? void 0 : r.toString() : "",
                        renderer: (null === (o = c.getParameter(c.RENDERER)) || void 0 === o ? void 0 : o.toString()) || "",
                        rendererUnmasked: u ? null === (a = c.getParameter(u.UNMASKED_RENDERER_WEBGL)) || void 0 === a ? void 0 : a.toString() : "",
                        shadingLanguageVersion: (null === (i = c.getParameter(c.SHADING_LANGUAGE_VERSION)) || void 0 === i ? void 0 : i.toString()) || ""
                    }
                },
                webGlExtensions: function(e) {
                    var n = Me(e.cache);
                    if (!n) return -1;
                    if (!Ge(n)) return -2;
                    var t = n.getSupportedExtensions(),
                        r = n.getContextAttributes(),
                        o = [],
                        a = [],
                        i = [],
                        c = [],
                        u = [];
                    if (r)
                        for (var l = 0, s = Object.keys(r); l < s.length; l++) {
                            var d = s[l];
                            a.push("".concat(d, "=").concat(r[d]))
                        }
                    for (var f = 0, v = Ie(n); f < v.length; f++) {
                        var m = n[k = v[f]];
                        i.push("".concat(k, "=").concat(m).concat(Ve.has(m) ? "=".concat(n.getParameter(m)) : ""))
                    }
                    if (t)
                        for (var h = 0, p = t; h < p.length; h++) {
                            var g = p[h];
                            if (!("WEBGL_debug_renderer_info" === g && Ze() || "WEBGL_polygon_mode" === g && (Q() || q()))) {
                                var y = n.getExtension(g);
                                if (y)
                                    for (var b = 0, w = Ie(y); b < w.length; b++) {
                                        var k;
                                        m = y[k = w[b]], c.push("".concat(k, "=").concat(m).concat(Ae.has(m) ? "=".concat(n.getParameter(m)) : ""))
                                    } else o.push(g)
                            }
                        }
                    for (var S = 0, L = We; S < L.length; S++)
                        for (var x = L[S], _ = 0, C = Re; _ < C.length; _++) {
                            var V = C[_],
                                A = Fe(n, x, V);
                            u.push("".concat(x, ".").concat(V, "=").concat(A.join(",")))
                        }
                    return c.sort(), i.sort(), {
                        contextAttributes: a,
                        parameters: i,
                        shaderPrecisions: u,
                        extensions: t,
                        extensionParameters: c,
                        unsupportedExtensions: o
                    }
                }
            };

            function je(e) {
                var n = function(e) {
                        if (re()) return .4;
                        if (q()) return !$() || te() && ee() ? .3 : .5;
                        var n = "value" in e.platform ? e.platform.value : "";
                        return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
                    }(e),
                    t = T(.99 + .01 * n, 1e-4);
                return {
                    score: n,
                    comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "".concat(t))
                }
            }

            function Pe(e) {
                return JSON.stringify(e, (function(e, n) {
                    return (0, w._)(n, Error) ? k({
                        name: (t = n).name,
                        message: t.message,
                        stack: null === (r = t.stack) || void 0 === r ? void 0 : r.split("\n")
                    }, t) : n;
                    var t, r
                }), 2)
            }

            function Ye(e) {
                return z(function(e) {
                    for (var n = "", t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
                        var o = r[t],
                            a = e[o],
                            i = "error" in a ? "error" : JSON.stringify(a.value);
                        n += "".concat(n ? "|" : "").concat(o.replace(/([:|\\])/g, "\\$1"), ":").concat(i)
                    }
                    return n
                }(e))
            }

            function Ne(e, n) {
                var t = Date.now();
                return {
                    get: function(r) {
                        return S(this, void 0, void 0, (function() {
                            var o, a, i;
                            return L(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return o = Date.now(), [4, e()];
                                    case 1:
                                        return a = c.sent(), i = function(e) {
                                            var n;
                                            return {
                                                get visitorId() {
                                                    return void 0 === n && (n = Ye(this.components)), n
                                                },
                                                set visitorId(e) {
                                                    n = e
                                                },
                                                confidence: je(e),
                                                components: e,
                                                version: "4.5.1"
                                            }
                                        }(a), (n || (null == r ? void 0 : r.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(i.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(o - t, "\nvisitorId: ").concat(i.visitorId, "\ncomponents: ").concat(Pe(a), "\n```")), [2, i]
                                }
                            }))
                        }))
                    }
                }
            }
            var Xe = {
                    load: function(e) {
                        return void 0 === e && (e = {}), S(this, void 0, void 0, (function() {
                            var n, t, r;
                            return L(this, (function(o) {
                                switch (o.label) {
                                    case 0:
                                        return e.monitoring, n = e.delayFallback, t = e.debug, [4, (a = n, void 0 === a && (a = 50), function(e, n) {
                                            void 0 === n && (n = 1 / 0);
                                            var t = window.requestIdleCallback;
                                            return t ? new Promise((function(e) {
                                                return t.call(window, (function() {
                                                    return e()
                                                }), {
                                                    timeout: n
                                                })
                                            })) : _(Math.min(e, n))
                                        }(a, 2 * a))];
                                    case 1:
                                        return o.sent(), r = function(e, n, t, r) {
                                            var o = Object.keys(e).filter((function(e) {
                                                    return ! function(e, n) {
                                                        for (var t = 0, r = e.length; t < r; ++t)
                                                            if (e[t] === n) return !0;
                                                        return !1
                                                    }(t, e)
                                                })),
                                                a = W(A(o, (function(t) {
                                                    return function(e, n) {
                                                        var t = W(new Promise((function(t) {
                                                            var r = Date.now();
                                                            V(e.bind(null, n), (function() {
                                                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                                                var o = Date.now() - r;
                                                                if (!e[0]) return t((function() {
                                                                    return {
                                                                        error: e[1],
                                                                        duration: o
                                                                    }
                                                                }));
                                                                var a = e[1];
                                                                if (U(a)) return t((function() {
                                                                    return {
                                                                        value: a,
                                                                        duration: o
                                                                    }
                                                                }));
                                                                t((function() {
                                                                    return new Promise((function(e) {
                                                                        var n = Date.now();
                                                                        V(a, (function() {
                                                                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                                                            var a = o + Date.now() - n;
                                                                            if (!t[0]) return e({
                                                                                error: t[1],
                                                                                duration: a
                                                                            });
                                                                            e({
                                                                                value: t[1],
                                                                                duration: a
                                                                            })
                                                                        }))
                                                                    }))
                                                                }))
                                                            }))
                                                        })));
                                                        return function() {
                                                            return t.then((function(e) {
                                                                return e()
                                                            }))
                                                        }
                                                    }(e[t], n)
                                                }), r));
                                            return function() {
                                                return S(this, void 0, void 0, (function() {
                                                    var e, n, t, i;
                                                    return L(this, (function(c) {
                                                        switch (c.label) {
                                                            case 0:
                                                                return [4, a];
                                                            case 1:
                                                                return [4, A(c.sent(), (function(e) {
                                                                    return W(e())
                                                                }), r)];
                                                            case 2:
                                                                return e = c.sent(), [4, Promise.all(e)];
                                                            case 3:
                                                                for (n = c.sent(), t = {}, i = 0; i < o.length; ++i) t[o[i]] = n[i];
                                                                return [2, t]
                                                        }
                                                    }))
                                                }))
                                            }
                                        }(Ee, {
                                            cache: {},
                                            debug: t
                                        }, []), [2, Ne(r, t)]
                                }
                                var a
                            }))
                        }))
                    },
                    hashComponents: Ye,
                    componentsToDebugString: Pe
                },
                De = function() {
                    var e = (0, o._)(i().mark((function e() {
                        var n, t, r, a, c, u;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = function() {
                                        var e, n, t, r;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            platform: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n ? void 0 : n.platform,
                                            version: null === (t = window.Telegram) || void 0 === t || null === (r = t.WebApp) || void 0 === r ? void 0 : r.version
                                        }
                                    }, t = function() {
                                        var e, n, t, r, o, a, i, c, u, l, s, d, f, v, m, h;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            userId: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (t = n.initDataUnsafe) || void 0 === t || null === (r = t.user) || void 0 === r ? void 0 : r.id,
                                            username: null === (o = window.Telegram) || void 0 === o || null === (a = o.WebApp) || void 0 === a || null === (i = a.initDataUnsafe) || void 0 === i || null === (c = i.user) || void 0 === c ? void 0 : c.username,
                                            userLanguageCode: null === (u = window.Telegram) || void 0 === u || null === (l = u.WebApp) || void 0 === l || null === (s = l.initDataUnsafe) || void 0 === s || null === (d = s.user) || void 0 === d ? void 0 : d.language_code,
                                            userIsBot: null === (f = window.Telegram) || void 0 === f || null === (v = f.WebApp) || void 0 === v || null === (m = v.initDataUnsafe) || void 0 === m || null === (h = m.user) || void 0 === h ? void 0 : h.is_bot
                                        }
                                    }, r = function() {
                                        return {
                                            ua: navigator.userAgent
                                        }
                                    }, a = function() {
                                        var e, n, t, r, o, a, i, c, u, l, s, d;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            isBioInited: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (t = n.BiometricManager) || void 0 === t ? void 0 : t.isInited,
                                            isBioAva: null === (r = window.Telegram) || void 0 === r || null === (o = r.WebApp) || void 0 === o || null === (a = o.BiometricManager) || void 0 === a ? void 0 : a.isBiometricAvailable,
                                            bioType: null === (i = window.Telegram) || void 0 === i || null === (c = i.WebApp) || void 0 === c || null === (u = c.BiometricManager) || void 0 === u ? void 0 : u.biometricType,
                                            bioDeviceId: null === (l = window.Telegram) || void 0 === l || null === (s = l.WebApp) || void 0 === s || null === (d = s.BiometricManager) || void 0 === d ? void 0 : d.deviceId
                                        }
                                    }, c = function() {
                                        var e, n, t;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            chatType: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (t = n.initDataUnsafe) || void 0 === t ? void 0 : t.chat_type
                                        }
                                    }, u = function() {
                                        var e = (0, o._)(i().mark((function e() {
                                            var o, u, l, s, d, f, v, m, h, p, g, b, w, k, S, L, x, _, C, V, A, W;
                                            return i().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Xe.load();
                                                    case 2:
                                                        return o = e.sent, e.next = 5, o.get();
                                                    case 5:
                                                        return u = e.sent, l = u.components, s = l.applePay, d = l.architecture, f = l.audio, v = l.cookiesEnabled, m = l.cpuClass, h = l.deviceMemory, p = l.fonts, g = l.hardwareConcurrency, b = l.hdr, w = l.languages, k = l.pdfViewerEnabled, S = l.plugins, L = l.screenResolution, x = l.timezone, _ = l.touchSupport, C = l.vendor, V = l.webGlBasics, A = {
                                                            applePay: s.value,
                                                            architecture: d.value,
                                                            audio: f.value,
                                                            cookiesEnabled: v.value,
                                                            cpuClass: m.value,
                                                            deviceMemory: h.value,
                                                            fonts: p.value,
                                                            hardwareConcurrency: g.value,
                                                            hdr: b.value,
                                                            languages: w.value,
                                                            pdfViewerEnabled: k.value,
                                                            plugins: S.value,
                                                            screenResolution: L.value,
                                                            timezone: x.value,
                                                            touchSupport: _.value,
                                                            browserVendor: C.value,
                                                            webGlVendor: V.value.vendor,
                                                            webGlVendorUnmasked: V.value.vendorUnmasked,
                                                            webGlRenderer: V.value.renderer,
                                                            webGlRendererUnmasked: V.value.rendererUnmasked,
                                                            webGlVersion: V.value.version
                                                        }, W = (0, y._)({}, n(), r(), a(), t(), c(), A), console.log(W), e.abrupt("return", {});
                                                    case 11:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), e.prev = 11, e.next = 14, u();
                                case 14:
                                    return e.abrupt("return", e.sent);
                                case 17:
                                    e.prev = 17, e.t0 = e.catch(11), console.error("Fingerprint error: ", e.t0);
                                case 20:
                                    return e.abrupt("return", Promise.resolve({}));
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [11, 17]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            const Be = De;
            "".concat(p, "_T");

            function He(e) {
                var n, t, r;
                if (!e.t) throw new Error("please make sure config.t and config.domain are not empty");
                return {
                    t: e.t,
                    domain: e.domain || "",
                    storeKey: {
                        device_id_key: (null === e || void 0 === e || null === (n = e.storeKey) || void 0 === n ? void 0 : n.device_id_key) || p,
                        device_dfp_expire_key: (null === e || void 0 === e || null === (t = e.storeKey) || void 0 === t ? void 0 : t.device_dfp_expire_key) || g
                    },
                    fvideo_token_key: "".concat((null === e || void 0 === e || null === (r = e.storeKey) || void 0 === r ? void 0 : r.device_id_key) || p, "_T")
                }
            }
            var Je = function(e) {
                    if (!e) return e;
                    try {
                        return JSON.parse(e)
                    } catch (n) {
                        return e
                    }
                },
                Oe = function() {
                    return "undefined" !== typeof localStorage
                },
                ze = function() {
                    return "undefined" !== typeof sessionStorage
                },
                Ue = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (Oe()) return t.ttl ? localStorage.setItem(e, JSON.stringify({
                        value: n,
                        expire: (new Date).getTime() + t.ttl
                    })) : localStorage.setItem(e, JSON.stringify(n))
                },
                Ke = function(e) {
                    if (Oe()) {
                        var n = localStorage.getItem(e),
                            t = Je(n);
                        return t && t.expire ? t.expire && t.expire > (new Date).getTime() ? t.value : null : t
                    }
                },
                Qe = t("F3rx"),
                qe = t.n(Qe),
                $e = function(e, n, t) {
                    var r, o = function(e) {
                            if ("undefined" === typeof window) return e;
                            var n = f("cr00");
                            return e.headers = e.headers || {}, e.headers.csrftoken || (e.headers.csrftoken = qe()(n || "")), e
                        }(e) || {},
                        a = {
                            method: n || "GET",
                            mode: "cors",
                            headers: o.headers,
                            credentials: o.credentials,
                            body: t
                        };
                    e.headers && e.headers["Content-Type"] || (null === a || void 0 === a || null === (r = a.headers) || void 0 === r || delete r["Content-Type"]);
                    return a
                },
                en = function() {
                    var e = (0, o._)(i().mark((function e(n, t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, fetch(n, t);
                                case 2:
                                    return r = e.sent, e.next = 5, r.json();
                                case 5:
                                    return e.abrupt("return", e.sent);
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                nn = function() {
                    var e = (0, o._)(i().mark((function e(n, t) {
                        var r, o = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = $e(o.length > 2 && void 0 !== o[2] ? o[2] : {}, "POST", t), e.abrupt("return", en(n, r));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                tn = t("iKvg"),
                rn = function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    var r = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, c = n[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                            var u = i.value;
                            if (null !== u && void 0 !== u) return u
                        }
                    } catch (l) {
                        o = !0, a = l
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return null
                },
                on = function(e) {
                    var n, t = e.storeKey.device_id_key,
                        r = e.fvideo_token_key,
                        o = f(t),
                        a = null === (n = Ke(t)) || void 0 === n ? void 0 : n.value,
                        i = f(r),
                        c = function(e) {
                            if (Oe()) return localStorage.getItem(e)
                        }(r);
                    return {
                        dfp: rn(o, a),
                        dt: rn(i, c)
                    }
                },
                an = function(e, n, t) {
                    var r = t.storeKey,
                        o = r.device_id_key,
                        a = r.device_dfp_expire_key,
                        i = t.fvideo_token_key,
                        c = Date.now() + 216e5;
                    v(o, e, 365), v(i, n, 365), v(a, c, 365), Ue(o, (0, tn._)({
                            value: e
                        }, a, c)),
                        function(e, n) {
                            if (Oe()) localStorage.setItem(e, n)
                        }(i, n)
                },
                cn = function(e) {
                    var n = e.storeKey.device_dfp_expire_key,
                        t = f(n);
                    null != t && (t = Number(t));
                    var r = Ke(n);
                    return null != r && "string" === typeof r && (r = Number(t)), rn(t, r)
                };
            var un = 2654435769;

            function ln(e, n) {
                var t = e.length,
                    r = t << 2;
                if (n) {
                    var o = e[t - 1];
                    if (o < (r -= 4) - 3 || o > r) return null;
                    r = o
                }
                for (var a = 0; a < t; a++) e[a] = String.fromCharCode(255 & e[a], e[a] >>> 8 & 255, e[a] >>> 16 & 255, e[a] >>> 24 & 255);
                var i = e.join("");
                return n ? i.substring(0, r) : i
            }

            function sn(e, n) {
                var t, r = e.length,
                    o = r >> 2;
                0 !== (3 & r) && ++o, n ? (t = new Array(o + 1))[o] = r : t = new Array(o);
                for (var a = 0; a < r; ++a) t[a >> 2] |= e.charCodeAt(a) << ((3 & a) << 3);
                return t
            }

            function dn(e) {
                return 4294967295 & e
            }

            function fn(e, n, t, r, o, a) {
                return (t >>> 5 ^ n << 2) + (n >>> 3 ^ t << 4) ^ (e ^ n) + (a[3 & r ^ o] ^ t)
            }

            function vn(e) {
                return e.length < 4 && (e.length = 4), e
            }

            function mn(e) {
                if (/^[\x00-\x7f]*$/.test(e)) return e;
                for (var n = [], t = e.length, r = 0, o = 0; r < t; ++r, ++o) {
                    var a = e.charCodeAt(r);
                    if (a < 128) n[o] = e.charAt(r);
                    else if (a < 2048) n[o] = String.fromCharCode(192 | a >> 6, 128 | 63 & a);
                    else {
                        if (!(a < 55296 || a > 57343)) {
                            if (r + 1 < t) {
                                var i = e.charCodeAt(r + 1);
                                if (a < 56320 && 56320 <= i && i <= 57343) {
                                    var c = 65536 + ((1023 & a) << 10 | 1023 & i);
                                    n[o] = String.fromCharCode(240 | c >> 18 & 63, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | 63 & c), ++r;
                                    continue
                                }
                            }
                            throw new Error("Malformed string")
                        }
                        n[o] = String.fromCharCode(224 | a >> 12, 128 | a >> 6 & 63, 128 | 63 & a)
                    }
                }
                return n.join("")
            }

            function hn(e, n) {
                return (void 0 === n || null === n || n < 0) && (n = e.length), 0 === n ? "" : /^[\x00-\x7f]*$/.test(e) || !/^[\x00-\xff]*$/.test(e) ? n === e.length ? e : e.substr(0, n) : n < 32767 ? function(e, n) {
                    for (var t = new Array(n), r = 0, o = 0, a = e.length; r < n && o < a; r++) {
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
                                t[r] = i;
                                break;
                            case 12:
                            case 13:
                                if (!(o < a)) throw new Error("Unfinished UTF-8 octet sequence");
                                t[r] = (31 & i) << 6 | 63 & e.charCodeAt(o++);
                                break;
                            case 14:
                                if (!(o + 1 < a)) throw new Error("Unfinished UTF-8 octet sequence");
                                t[r] = (15 & i) << 12 | (63 & e.charCodeAt(o++)) << 6 | 63 & e.charCodeAt(o++);
                                break;
                            case 15:
                                if (!(o + 2 < a)) throw new Error("Unfinished UTF-8 octet sequence");
                                var c = ((7 & i) << 18 | (63 & e.charCodeAt(o++)) << 12 | (63 & e.charCodeAt(o++)) << 6 | 63 & e.charCodeAt(o++)) - 65536;
                                if (!(0 <= c && c <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + c.toString(16));
                                t[r++] = c >> 10 & 1023 | 55296, t[r] = 1023 & c | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + i.toString(16))
                        }
                    }
                    return r < n && (t.length = r), String.fromCharCode.apply(String, t)
                }(e, n) : function(e, n) {
                    for (var t = [], r = new Array(32768), o = 0, a = 0, i = e.length; o < n && a < i; o++) {
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
                                var u = ((7 & c) << 18 | (63 & e.charCodeAt(a++)) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++)) - 65536;
                                if (!(0 <= u && u <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + u.toString(16));
                                r[o++] = u >> 10 & 1023 | 55296, r[o] = 1023 & u | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + c.toString(16))
                        }
                        if (o >= 32766) {
                            var l = o + 1;
                            r.length = l, t[t.length] = String.fromCharCode.apply(String, r), n -= l, o = -1
                        }
                    }
                    return o > 0 && (r.length = o, t[t.length] = String.fromCharCode.apply(String, r)), t.join("")
                }(e, n)
            }

            function pn(e, n) {
                return void 0 === e || null === e || 0 === e.length ? e : (e = mn(e), n = mn(n), ln(function(e, n) {
                    var t, r, o, a, i, c, u = e.length,
                        l = u - 1;
                    for (r = e[l], o = 0, c = 0 | Math.floor(6 + 52 / u); c > 0; --c) {
                        for (a = (o = dn(o + un)) >>> 2 & 3, i = 0; i < l; ++i) t = e[i + 1], r = e[i] = dn(e[i] + fn(o, t, r, i, a, n));
                        t = e[0], r = e[l] = dn(e[l] + fn(o, t, r, l, a, n))
                    }
                    return e
                }(sn(e, !0), vn(sn(n, !1))), !1))
            }

            function gn(e, n) {
                return void 0 === e || null === e || 0 === e.length ? e : (n = mn(n), hn(ln(function(e, n) {
                    var t, r, o, a, i, c = e.length,
                        u = c - 1;
                    for (t = e[0], o = dn(Math.floor(6 + 52 / c) * un); 0 !== o; o = dn(o - un)) {
                        for (a = o >>> 2 & 3, i = u; i > 0; --i) r = e[i - 1], t = e[i] = dn(e[i] - fn(o, t, r, i, a, n));
                        r = e[u], t = e[0] = dn(e[0] - fn(o, t, r, 0, a, n))
                    }
                    return e
                }(sn(e, !1), vn(sn(n, !1))), !0)))
            }
            const yn = {
                utf8Encode: mn,
                utf8Decode: hn,
                encrypt: pn,
                encryptToBase64: function(e, n) {
                    return function() {
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                        return function(n) {
                            var t, r, o, a, i, c, u;
                            for (r = o = 0, a = n.length, c = (a -= i = a % 3) / 3 << 2, i > 0 && (c += 4), t = new Array(c); r < a;) u = n.charCodeAt(r++) << 16 | n.charCodeAt(r++) << 8 | n.charCodeAt(r++), t[o++] = e[u >> 18] + e[u >> 12 & 63] + e[u >> 6 & 63] + e[63 & u];
                            return 1 == i ? (u = n.charCodeAt(r++), t[o++] = e[u >> 2] + e[(3 & u) << 4] + "==") : 2 == i && (u = n.charCodeAt(r++) << 8 | n.charCodeAt(r++), t[o++] = e[u >> 10] + e[u >> 4 & 63] + e[(15 & u) << 2] + "="), t.join("")
                        }
                    }()(pn(e, n))
                },
                decrypt: gn,
                decryptFromBase64: function(e, n) {
                    return void 0 === e || null === e || 0 === e.length ? e : gn(function() {
                        var e = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
                        return function(n) {
                            var t, r, o, a, i, c, u, l, s, d;
                            if ((u = n.length) % 4 !== 0) return "";
                            if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(n)) return "";
                            for (s = u, (l = "=" == n.charAt(u - 2) ? 1 : "=" == n.charAt(u - 1) ? 2 : 0) > 0 && (s -= 4), s = 3 * (s >> 2) + l, d = new Array(s), i = c = 0; i < u && -1 != (t = e[n.charCodeAt(i++)]) && -1 != (r = e[n.charCodeAt(i++)]) && (d[c++] = String.fromCharCode(t << 2 | (48 & r) >> 4), -1 != (o = e[n.charCodeAt(i++)])) && (d[c++] = String.fromCharCode((15 & r) << 4 | (60 & o) >> 2), -1 != (a = e[n.charCodeAt(i++)]));) d[c++] = String.fromCharCode((3 & o) << 6 | a);
                            return d.join("")
                        }
                    }()(e), n)
                }
            };
            var bn = function(e) {
                    var n = function(e) {
                            for (var n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", t = ""; t.length < e;) t += n[Math.floor(62 * Math.random())];
                            return t
                        }(6),
                        t = Date.now(),
                        r = "".concat(e, "|").concat(t),
                        o = yn.encryptToBase64(r, n),
                        a = function(e) {
                            var n = 0,
                                t = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var a, i = e[Symbol.iterator](); !(t = (a = i.next()).done); t = !0) n ^= a.value.charCodeAt(0)
                            } catch (u) {
                                r = !0, o = u
                            } finally {
                                try {
                                    t || null == i.return || i.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            var c = n.toString(16);
                            return 2 === c.length ? c : "0".concat(c)
                        }("".concat(n).concat(o));
                    return "".concat(n).concat(o).concat(a)
                },
                wn = function(e, n, t) {
                    var r = "".concat(e.domain, "/fvideo/dt/sign/").concat(t, "?en=YDS&t=").concat(e.t, "&v=").concat(m),
                        o = bn(JSON.stringify(n));
                    try {
                        nn(r, o, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(n) {
                            n.success && an(n.dfp, n.dt, e)
                        }))
                    } catch (a) {}
                },
                kn = function(e, n, t, r, o) {
                    var a = t || n,
                        i = "".concat(e.domain, "/fvideo/dt/report/").concat(o, "?en=YDS&t=").concat(e.t, "&v=").concat(m),
                        c = bn(JSON.stringify((0, b._)((0, y._)({}, r), {
                            dfp: a
                        })));
                    try {
                        nn(i, c, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(n) {
                            n.success && an(n.dfp, n.dt, e)
                        }))
                    } catch (u) {}
                },
                Sn = function(e) {
                    var n;
                    n = e, document.cookie = "".concat(n, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
                        function(e) {
                            Oe() && localStorage.removeItem(e)
                        }(e),
                        function(e) {
                            ze() && sessionStorage.removeItem(e)
                        }(e)
                },
                Ln = function(e) {
                    Sn(e.storeKey.device_id_key), Sn(e.storeKey.device_dfp_expire_key), Sn(e.fvideo_token_key);
                    var n = f("BNC_TG_FV_KEY"),
                        t = f("BNC_TG_FV_KEY_T");
                    return Sn("BNC_TG_FV_KEY"), Sn("BNC_TG_FV_KEY_T"), Sn("BNC_TG_FV_UT"), {
                        dfp: n,
                        dt: t
                    }
                };

            function xn(e) {
                return _n.apply(this, arguments)
            }

            function _n() {
                return (_n = (0, o._)(i().mark((function e(n) {
                    var t, r, o, a, c, u, s, d;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, "undefined" !== typeof window && !l) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (t = He(n), r = on(t), o = r.dfp, a = r.dt, c = cn(t), o && o.startsWith("3") && (u = Ln(t), o = u.dfp, a = u.dt, c = null), !(o && a && c && Number(c) > Date.now())) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                return e.next = 13, Be();
                            case 13:
                                s = e.sent, d = (0, b._)((0, y._)({}, s), {
                                    deviceTime: Date.now()
                                }), o ? kn(t, o, a, d, "tgma") : wn(t, d, "tgma"), e.next = 21;
                                break;
                            case 18:
                                e.prev = 18, e.t0 = e.catch(0), console.log(e.t0);
                            case 21:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 18]
                    ])
                })))).apply(this, arguments)
            }
            var Cn, Vn = t("ew97"),
                An = t("qGMf"),
                Wn = t.n(An),
                Rn = function(e) {
                    var n, t = Math.floor(Math.abs(e) / 60),
                        r = Math.abs(e % 60);
                    return n = 0 === r ? "".concat(t.toString().padStart(2, "0"), ":00") : "".concat(t.toString().padStart(2, "0"), ":").concat(r.toString().padStart(2, "0")), n = e > 0 ? "-".concat(n) : "+".concat(n), "GMT".concat(n)
                },
                Mn = function(e) {
                    var n = e.plugins || e.regular_plugins || e.ie_plugins;
                    if (!Array.isArray(n)) return h;
                    var t = [];
                    return n.forEach((function(e) {
                        t.push(e[0])
                    })), t.length > 500 ? t.slice(0, 500).join(",") : t.join(",")
                },
                Fn = function(e) {
                    var n = e[1].replace("canvas fp:data:image/png;base64,", "");
                    try {
                        var t = function(e) {
                            var n, t, r, o = "";
                            for (n = 0, t = (e += "").length; n < t; n++) o += (r = e.charCodeAt(n).toString(16)).length < 2 ? "0".concat(r) : r;
                            return o
                        }(atob(n).slice(-16, -12));
                        return t
                    } catch (r) {
                        return console.warn("Failed to get canvas code: ", r), h
                    }
                },
                In = function(e) {
                    var n = {
                        screenResolution: h,
                        avaScreenResolution: h
                    };
                    return e.screenResolution && (n.screenResolution = e.screenResolution.join(",")), e.availableScreenResolution && (n.avaScreenResolution = e.availableScreenResolution.join(",")), n
                },
                Tn = function(e) {
                    var n = {
                        vendor: h,
                        renderer: h
                    };
                    if (!e || !e.length) return n;
                    for (var t = e.length, r = 0, o = 0; o < t; o++) {
                        var a = e[o] || "";
                        if (a.indexOf("webgl unmasked vendor:") > -1 ? (n.vendor = a.split("webgl unmasked vendor:")[1] || h, r += 1) : a.indexOf("webgl unmasked renderer:") > -1 && (n.renderer = a.split("webgl unmasked renderer:")[1] || h, r += 1), 2 === r) break
                    }
                    return n
                },
                Zn = {
                    colorDepth: !0,
                    deviceMemory: !0,
                    pixelRatio: !0,
                    hardwareConcurrency: !0,
                    sessionStorage: !0,
                    localStorage: !0,
                    indexedDb: !0,
                    addBehavior: !0,
                    openDatabase: !0,
                    adBlock: !0,
                    hasLiedLanguages: !0,
                    hasLiedResolution: !0,
                    hasLiedOs: !0,
                    hasLiedBrowser: !0,
                    touchSupport: !0,
                    fonts: !0,
                    fontsFlash: !0,
                    enumerateDevices: !0
                };

            function Gn() {
                return Cn = Cn || (new Vn.UAParser).getResult()
            }
            var En = h,
                jn = function() {
                    var e = Gn().os;
                    return e && e.name ? "".concat(e.name, " ").concat(e.version) : En
                },
                Pn = function() {
                    var e = Gn().device;
                    return e && e.model ? [e.type, e.vendor, e.model, ""].join(" ") : En
                },
                Yn = function() {
                    var e = Gn(),
                        n = e.browser,
                        t = e.os || {};
                    return n && n.name ? "".concat(n.name, " V").concat(n.version, " (").concat(t.name || "", ")") : En
                },
                Nn = function() {
                    var e = (0, o._)(i().mark((function e() {
                        var n, t, r, a;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (c) {
                                        e.next = 2;
                                        break
                                    }
                                    return e.abrupt("return", Promise.resolve({}));
                                case 2:
                                    if (n = "FV_INFO", t = (0, y._)({}, Zn), !(r = Je(Ke(n)))) {
                                        e.next = 8;
                                        break
                                    }
                                    return r.deviceTime = Date.now(), e.abrupt("return", r);
                                case 8:
                                    return a = function() {
                                        var e = (0, o._)(i().mark((function e() {
                                            var r, o, a, c, u, l;
                                            return i().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Wn().getPromise({
                                                            excludes: t
                                                        });
                                                    case 2:
                                                        return r = e.sent, o = r.reduce((function(e, n) {
                                                            return e[n.key] = n.value, e
                                                        }), {}), a = Tn(o.webgl), c = In(o), u = {
                                                            resolution: c.screenResolution,
                                                            availableResolution: c.avaScreenResolution,
                                                            systemVersion: jn(),
                                                            brandModel: Pn(),
                                                            sysLanguage: o.language,
                                                            timezone: Rn(o.timezoneOffset),
                                                            timezoneOffset: o.timezoneOffset,
                                                            ua: o.userAgent,
                                                            pluginList: Mn(o),
                                                            canvas: Fn(o.canvas),
                                                            webglVendor: a.vendor,
                                                            webglRenderer: a.renderer,
                                                            audio: o.audio,
                                                            platform: o.platform,
                                                            webTimezone: o.timezone,
                                                            cpuClass: o.cpuClass,
                                                            doNotTrack: o.doNotTrack,
                                                            deviceName: Yn(),
                                                            domain: document.domain
                                                        }, l = Object.keys(u).sort().map((function(e) {
                                                            return u[e]
                                                        })), u.fingerprint = Wn().x64hash128(l.join(""), 32), Ue(n, JSON.stringify(u), {
                                                            ttl: 864e5
                                                        }), e.abrupt("return", u);
                                                    case 11:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), e.prev = 9, e.next = 12, a();
                                case 12:
                                    return e.abrupt("return", e.sent);
                                case 15:
                                    e.prev = 15, e.t0 = e.catch(9), console.error("Fingerprint error: ", e.t0);
                                case 18:
                                    return e.abrupt("return", Promise.resolve({}));
                                case 19:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [9, 15]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            const Xn = Nn;

            function Dn(e) {
                return Bn.apply(this, arguments)
            }

            function Bn() {
                return (Bn = (0, o._)(i().mark((function e(n) {
                    var t, r, o, a, c, u, s;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, "undefined" !== typeof window && !l) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (t = He(n), r = on(t), o = r.dfp, a = r.dt, c = cn(t), !(o && a && c && Number(c) > Date.now())) {
                                    e.next = 10;
                                    break
                                }
                                return e.abrupt("return");
                            case 10:
                                return e.next = 12, Xn();
                            case 12:
                                u = e.sent, s = (0, b._)((0, y._)({}, u), {
                                    deviceTime: Date.now()
                                }), o ? kn(t, o, a, s, "web") : wn(t, s, "web"), e.next = 20;
                                break;
                            case 17:
                                e.prev = 17, e.t0 = e.catch(0), console.log(e.t0);
                            case 20:
                            case "end":
                                return e.stop()
                        }
                    }), e, null, [
                        [0, 17]
                    ])
                })))).apply(this, arguments)
            }
            var Hn = {
                t: "",
                client: "",
                domain: "",
                storeKey: {
                    device_id_key: p,
                    device_dfp_expire_key: g
                },
                fvideo_token_key: "".concat(p, "_T")
            };

            function Jn(e) {
                return On.apply(this, arguments)
            }

            function On() {
                return (On = (0, o._)(i().mark((function e(n) {
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if ("undefined" === typeof window || !window.Telegram) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3, xn(n);
                            case 3:
                                e.next = 7;
                                break;
                            case 5:
                                return e.next = 7, Dn(n);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
            var zn = function(e) {
                    return bn(e)
                },
                Un = function() {
                    var e = f(Hn.fvideo_token_key);
                    return e ? zn(e) : ""
                },
                Kn = function() {
                    return f(Hn.storeKey.device_id_key) || ""
                }
        }
    }
]);
//# debugId=871e81d2-95ab-5636-9202-c28b9ac8aeb0