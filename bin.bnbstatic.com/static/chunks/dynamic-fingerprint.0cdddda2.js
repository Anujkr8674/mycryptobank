! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "ec4fac1b-0c9d-5e4a-bec6-0b1116637e5e")
    } catch (e) {}
}();
(self.webpackChunkreferral_ui = self.webpackChunkreferral_ui || []).push([
    [9317], {
        "r/AF": (e, n, t) => {
            "use strict";
            t.d(n, {
                syncLocalDfp: () => Yn
            });
            var r, a = t("sViW"),
                o = t("Pz56"),
                i = t.n(o),
                c = "2025.01.10",
                u = "unknown",
                l = "BNC_FV_KEY",
                s = "BNC_FV_KEY_EXPIRE",
                d = !!(null === (r = window) || void 0 === r ? void 0 : r.__RUN_BY_ELECTRON__),
                f = !! function() {
                    try {
                        if (window && window.navigator.userAgent) {
                            var e, n, t, r, a = window.navigator.userAgent;
                            return /BNC\/[\d\.]+/i.test(a) ? null === a || void 0 === a || null === (e = a.match) || void 0 === e || null === (n = e.call(a, /BNC\/[\d\.]+/i)) || void 0 === n || null === (t = n[0]) || void 0 === t || null === (r = t.slice) || void 0 === r ? void 0 : r.call(t, 4) : ""
                        }
                        return ""
                    } catch (o) {
                        return ""
                    }
                }(),
                v = function() {
                    var e;
                    return "undefined" !== typeof(null === window || void 0 === window || null === (e = window.Telegram) || void 0 === e ? void 0 : e.WebApp)
                },
                m = t("BK7R"),
                h = t("QUKP"),
                p = t("2URn"),
                g = function() {
                    return g = Object.assign || function(e) {
                        for (var n, t = 1, r = arguments.length; t < r; t++)
                            for (var a in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
                        return e
                    }, g.apply(this, arguments)
                };

            function y(e, n, t, r) {
                return new(t || (t = Promise))((function(a, o) {
                    var i = function(e) {
                            try {
                                u(r.next(e))
                            } catch (n) {
                                o(n)
                            }
                        },
                        c = function(e) {
                            try {
                                u(r.throw(e))
                            } catch (n) {
                                o(n)
                            }
                        },
                        u = function(e) {
                            var n;
                            e.done ? a(e.value) : (n = e.value, (0, p.A)(n, t) ? n : new t((function(e) {
                                e(n)
                            }))).then(i, c)
                        };
                    u((r = r.apply(e, n || [])).next())
                }))
            }

            function w(e, n) {
                var t, r, a, o, i = function(i) {
                        return function(u) {
                            return function(i) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; o && (o = 0, i[0] && (c = 0)), c;) try {
                                    if (t = 1, r && (a = 2 & i[0] ? r.return : i[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, i[1])).done) return a;
                                    switch (r = 0, a && (i = [2 & i[0], a.value]), i[0]) {
                                        case 0:
                                        case 1:
                                            a = i;
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
                                            if (!((a = (a = c.trys).length > 0 && a[a.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                                c = 0;
                                                continue
                                            }
                                            if (3 === i[0] && (!a || i[1] > a[0] && i[1] < a[3])) {
                                                c.label = i[1];
                                                break
                                            }
                                            if (6 === i[0] && c.label < a[1]) {
                                                c.label = a[1], a = i;
                                                break
                                            }
                                            if (a && c.label < a[2]) {
                                                c.label = a[2], c.ops.push(i);
                                                break
                                            }
                                            a[2] && c.ops.pop(), c.trys.pop();
                                            continue
                                    }
                                    i = n.call(e, c)
                                } catch (u) {
                                    i = [6, u], r = 0
                                } finally {
                                    t = a = 0
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
                            if (1 & a[0]) throw a[1];
                            return a[1]
                        },
                        trys: [],
                        ops: []
                    };
                return o = {
                    next: i(0),
                    throw: i(1),
                    return: i(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o
            }

            function b(e, n, t) {
                if (t || 2 === arguments.length)
                    for (var r, a = 0, o = n.length; a < o; a++) !r && a in n || (r || (r = Array.prototype.slice.call(n, 0, a)), r[a] = n[a]);
                return e.concat(r || Array.prototype.slice.call(n))
            }

            function S(e, n) {
                return new Promise((function(t) {
                    return setTimeout(t, e, n)
                }))
            }

            function T(e) {
                return !!e && "function" == typeof e.then
            }

            function A(e, n) {
                try {
                    var t = e();
                    T(t) ? t.then((function(e) {
                        return n(!0, e)
                    }), (function(e) {
                        return n(!1, e)
                    })) : n(!0, t)
                } catch (r) {
                    n(!1, r)
                }
            }

            function C(e, n, t) {
                return void 0 === t && (t = 16), y(this, void 0, void 0, (function() {
                    var r, a, o, i;
                    return w(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                r = Array(e.length), a = Date.now(), o = 0, c.label = 1;
                            case 1:
                                return o < e.length ? (r[o] = n(e[o], o), (i = Date.now()) >= a + t ? (a = i, [4, new Promise((function(e) {
                                    var n = new MessageChannel;
                                    n.port1.onmessage = function() {
                                        return e()
                                    }, n.port2.postMessage(null)
                                }))]) : [3, 3]) : [3, 4];
                            case 2:
                                c.sent(), c.label = 3;
                            case 3:
                                return ++o, [3, 1];
                            case 4:
                                return [2, r]
                        }
                    }))
                }))
            }

            function k(e) {
                return e.then(void 0, (function() {})), e
            }

            function x(e) {
                return parseInt(e)
            }

            function L(e) {
                return parseFloat(e)
            }

            function E(e, n) {
                return "number" == typeof e && isNaN(e) ? n : e
            }

            function B(e) {
                return e.reduce((function(e, n) {
                    return e + (n ? 1 : 0)
                }), 0)
            }

            function M(e, n) {
                if (void 0 === n && (n = 1), Math.abs(n) >= 1) return Math.round(e / n) * n;
                var t = 1 / n;
                return Math.round(e * t) / t
            }

            function R(e, n) {
                var t = e[0] >>> 16,
                    r = 65535 & e[0],
                    a = e[1] >>> 16,
                    o = 65535 & e[1],
                    i = n[0] >>> 16,
                    c = 65535 & n[0],
                    u = n[1] >>> 16,
                    l = 0,
                    s = 0,
                    d = 0,
                    f = 0;
                d += (f += o + (65535 & n[1])) >>> 16, f &= 65535, s += (d += a + u) >>> 16, d &= 65535, l += (s += r + c) >>> 16, s &= 65535, l += t + i, l &= 65535, e[0] = l << 16 | s, e[1] = d << 16 | f
            }

            function I(e, n) {
                var t = e[0] >>> 16,
                    r = 65535 & e[0],
                    a = e[1] >>> 16,
                    o = 65535 & e[1],
                    i = n[0] >>> 16,
                    c = 65535 & n[0],
                    u = n[1] >>> 16,
                    l = 65535 & n[1],
                    s = 0,
                    d = 0,
                    f = 0,
                    v = 0;
                f += (v += o * l) >>> 16, v &= 65535, d += (f += a * l) >>> 16, f &= 65535, d += (f += o * u) >>> 16, f &= 65535, s += (d += r * l) >>> 16, d &= 65535, s += (d += a * u) >>> 16, d &= 65535, s += (d += o * c) >>> 16, d &= 65535, s += t * l + r * u + a * c + o * i, s &= 65535, e[0] = s << 16 | d, e[1] = f << 16 | v
            }

            function _(e, n) {
                var t = e[0];
                32 === (n %= 64) ? (e[0] = e[1], e[1] = t) : n < 32 ? (e[0] = t << n | e[1] >>> 32 - n, e[1] = e[1] << n | t >>> 32 - n) : (n -= 32, e[0] = e[1] << n | t >>> 32 - n, e[1] = t << n | e[1] >>> 32 - n)
            }

            function P(e, n) {
                0 !== (n %= 64) && (n < 32 ? (e[0] = e[1] >>> 32 - n, e[1] = e[1] << n) : (e[0] = e[1] << n - 32, e[1] = 0))
            }

            function O(e, n) {
                e[0] ^= n[0], e[1] ^= n[1]
            }
            var V = [4283543511, 3981806797],
                D = [3301882366, 444984403];

            function N(e) {
                var n = [0, e[0] >>> 1];
                O(e, n), I(e, V), n[1] = e[0] >>> 1, O(e, n), I(e, D), n[1] = e[0] >>> 1, O(e, n)
            }
            var F = [2277735313, 289559509],
                G = [1291169091, 658871167],
                W = [0, 5],
                U = [0, 1390208809],
                j = [0, 944331445];

            function H(e, n) {
                var t = function(e) {
                    for (var n = new Uint8Array(e.length), t = 0; t < e.length; t++) {
                        var r = e.charCodeAt(t);
                        if (r > 127) return (new TextEncoder).encode(e);
                        n[t] = r
                    }
                    return n
                }(e);
                n = n || 0;
                var r, a = [0, t.length],
                    o = a[1] % 16,
                    i = a[1] - o,
                    c = [0, n],
                    u = [0, n],
                    l = [0, 0],
                    s = [0, 0];
                for (r = 0; r < i; r += 16) l[0] = t[r + 4] | t[r + 5] << 8 | t[r + 6] << 16 | t[r + 7] << 24, l[1] = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24, s[0] = t[r + 12] | t[r + 13] << 8 | t[r + 14] << 16 | t[r + 15] << 24, s[1] = t[r + 8] | t[r + 9] << 8 | t[r + 10] << 16 | t[r + 11] << 24, I(l, F), _(l, 31), I(l, G), O(c, l), _(c, 27), R(c, u), I(c, W), R(c, U), I(s, G), _(s, 33), I(s, F), O(u, s), _(u, 31), R(u, c), I(u, W), R(u, j);
                l[0] = 0, l[1] = 0, s[0] = 0, s[1] = 0;
                var d = [0, 0];
                switch (o) {
                    case 15:
                        d[1] = t[r + 14], P(d, 48), O(s, d);
                    case 14:
                        d[1] = t[r + 13], P(d, 40), O(s, d);
                    case 13:
                        d[1] = t[r + 12], P(d, 32), O(s, d);
                    case 12:
                        d[1] = t[r + 11], P(d, 24), O(s, d);
                    case 11:
                        d[1] = t[r + 10], P(d, 16), O(s, d);
                    case 10:
                        d[1] = t[r + 9], P(d, 8), O(s, d);
                    case 9:
                        d[1] = t[r + 8], O(s, d), I(s, G), _(s, 33), I(s, F), O(u, s);
                    case 8:
                        d[1] = t[r + 7], P(d, 56), O(l, d);
                    case 7:
                        d[1] = t[r + 6], P(d, 48), O(l, d);
                    case 6:
                        d[1] = t[r + 5], P(d, 40), O(l, d);
                    case 5:
                        d[1] = t[r + 4], P(d, 32), O(l, d);
                    case 4:
                        d[1] = t[r + 3], P(d, 24), O(l, d);
                    case 3:
                        d[1] = t[r + 2], P(d, 16), O(l, d);
                    case 2:
                        d[1] = t[r + 1], P(d, 8), O(l, d);
                    case 1:
                        d[1] = t[r], O(l, d), I(l, F), _(l, 31), I(l, G), O(c, l)
                }
                return O(c, a), O(u, a), R(c, u), R(u, c), N(c), N(u), R(c, u), R(u, c), ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (u[1] >>> 0).toString(16)).slice(-8)
            }

            function Z(e) {
                return "function" != typeof e
            }

            function X() {
                var e = window,
                    n = navigator;
                return B(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in n, "msPointerEnabled" in n]) >= 4
            }

            function Y() {
                var e = window,
                    n = navigator;
                return B(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, 0 === n.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
            }

            function z() {
                var e = window;
                return B(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === navigator.vendor.indexOf("Apple"), "RGBColor" in e, "WebKitMediaKeys" in e]) >= 4
            }

            function J() {
                var e = window,
                    n = e.HTMLElement,
                    t = e.Document;
                return B(["safari" in e, !("ongestureend" in e), !("TouchEvent" in e), !("orientation" in e), n && !("autocapitalize" in n.prototype), t && "pointerLockElement" in t.prototype]) >= 4
            }

            function K() {
                var e, n = window;
                return e = n.print, /^function\s.*?\{\s*\[native code]\s*}$/.test(String(e)) && "[object WebPageNamespace]" === String(n.browser)
            }

            function Q() {
                var e, n, t = window;
                return B(["buildID" in navigator, "MozAppearance" in (null !== (n = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}), "onmozfullscreenchange" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4
            }

            function q() {
                var e = window,
                    n = navigator,
                    t = e.CSS,
                    r = e.HTMLButtonElement;
                return B([!("getStorageUpdates" in n), r && "popover" in r.prototype, "CSSCounterStyleRule" in e, t.supports("font-size-adjust: ex-height 0.5"), t.supports("text-transform: full-width")]) >= 4
            }

            function $() {
                var e = Y(),
                    n = Q(),
                    t = window,
                    r = navigator,
                    a = "connection";
                return e ? B([!("SharedWorker" in t), r[a] && "ontypechange" in r[a], !("sinkId" in new Audio)]) >= 2 : !!n && B(["onorientationchange" in t, "orientation" in t, /android/i.test(r.appVersion)]) >= 2
            }

            function ee(e) {
                var n = new Error(e);
                return n.name = e, n
            }

            function ne(e, n, t) {
                var r, a, o;
                return void 0 === t && (t = 50), y(this, void 0, void 0, (function() {
                    var i, c;
                    return w(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                i = document, u.label = 1;
                            case 1:
                                return i.body ? [3, 3] : [4, S(t)];
                            case 2:
                                return u.sent(), [3, 1];
                            case 3:
                                c = i.createElement("iframe"), u.label = 4;
                            case 4:
                                return u.trys.push([4, , 10, 11]), [4, new Promise((function(e, t) {
                                    var r = !1,
                                        a = function() {
                                            r = !0, e()
                                        };
                                    c.onload = a, c.onerror = function(e) {
                                        r = !0, t(e)
                                    };
                                    var o = c.style;
                                    o.setProperty("display", "block", "important"), o.position = "absolute", o.top = "0", o.left = "0", o.visibility = "hidden", n && "srcdoc" in c ? c.srcdoc = n : c.src = "about:blank", i.body.appendChild(c);
                                    var u = function() {
                                        var e, n;
                                        r || ("complete" === (null === (n = null === (e = c.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === n ? void 0 : n.readyState) ? a() : setTimeout(u, 10))
                                    };
                                    u()
                                }))];
                            case 5:
                                u.sent(), u.label = 6;
                            case 6:
                                return (null === (a = null === (r = c.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === a ? void 0 : a.body) ? [3, 8] : [4, S(t)];
                            case 7:
                                return u.sent(), [3, 6];
                            case 8:
                                return [4, e(c, c.contentWindow)];
                            case 9:
                                return [2, u.sent()];
                            case 10:
                                return null === (o = c.parentNode) || void 0 === o || o.removeChild(c), [7];
                            case 11:
                                return [2]
                        }
                    }))
                }))
            }

            function te(e) {
                for (var n = function(e) {
                        for (var n, t, r = "Unexpected syntax '".concat(e, "'"), a = /^\s*([a-z-]*)(.*)$/i.exec(e), o = a[1] || void 0, i = {}, c = /([.:#][\w-]+|\[.+?\])/gi, u = function(e, n) {
                                i[e] = i[e] || [], i[e].push(n)
                            };;) {
                            var l = c.exec(a[2]);
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
                        return [o, i]
                    }(e), t = n[0], r = n[1], a = document.createElement(null != t ? t : "div"), o = 0, i = Object.keys(r); o < i.length; o++) {
                    var c = i[o],
                        u = r[c].join(" ");
                    "style" === c ? re(a.style, u) : a.setAttribute(c, u)
                }
                return a
            }

            function re(e, n) {
                for (var t = 0, r = n.split(";"); t < r.length; t++) {
                    var a = r[t],
                        o = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(a);
                    if (o) {
                        var i = o[1],
                            c = o[2],
                            u = o[4];
                        e.setProperty(i, c, u || "")
                    }
                }
            }
            var ae, oe, ie = ["monospace", "sans-serif", "serif"],
                ce = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

            function ue(e) {
                return e.toDataURL()
            }

            function le() {
                var e = this;
                return function() {
                        if (void 0 === oe) {
                            var e = function() {
                                var n = se();
                                de(n) ? oe = setTimeout(e, 2500) : (ae = n, oe = void 0)
                            };
                            e()
                        }
                    }(),
                    function() {
                        return y(e, void 0, void 0, (function() {
                            var e;
                            return w(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return de(e = se()) ? ae ? [2, b([], ae, !0)] : function() {
                                            var e = document;
                                            return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
                                        }() ? [4, (t = document, (t.exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t))] : [3, 2] : [3, 2];
                                    case 1:
                                        n.sent(), e = se(), n.label = 2;
                                    case 2:
                                        return de(e) || (ae = e), [2, e]
                                }
                                var t
                            }))
                        }))
                    }
            }

            function se() {
                var e = screen;
                return [E(L(e.availTop), null), E(L(e.width) - L(e.availWidth) - E(L(e.availLeft), 0), null), E(L(e.height) - L(e.availHeight) - E(L(e.availTop), 0), null), E(L(e.availLeft), null)]
            }

            function de(e) {
                for (var n = 0; n < 4; ++n)
                    if (e[n]) return !1;
                return !0
            }

            function fe(e) {
                var n;
                return y(this, void 0, void 0, (function() {
                    var t, r, a, o, i, c, u;
                    return w(this, (function(l) {
                        switch (l.label) {
                            case 0:
                                for (t = document, r = t.createElement("div"), a = new Array(e.length), o = {}, ve(r), u = 0; u < e.length; ++u) "DIALOG" === (i = te(e[u])).tagName && i.show(), ve(c = t.createElement("div")), c.appendChild(i), r.appendChild(c), a[u] = i;
                                l.label = 1;
                            case 1:
                                return t.body ? [3, 3] : [4, S(50)];
                            case 2:
                                return l.sent(), [3, 1];
                            case 3:
                                t.body.appendChild(r);
                                try {
                                    for (u = 0; u < e.length; ++u) a[u].offsetParent || (o[e[u]] = !0)
                                } finally {
                                    null === (n = r.parentNode) || void 0 === n || n.removeChild(r)
                                }
                                return [2, o]
                        }
                    }))
                }))
            }

            function ve(e) {
                e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
            }

            function me(e) {
                return matchMedia("(inverted-colors: ".concat(e, ")")).matches
            }

            function he(e) {
                return matchMedia("(forced-colors: ".concat(e, ")")).matches
            }

            function pe(e) {
                return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
            }

            function ge(e) {
                return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
            }

            function ye(e) {
                return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches
            }

            function we(e) {
                return matchMedia("(dynamic-range: ".concat(e, ")")).matches
            }
            var be = Math,
                Se = function() {
                    return 0
                },
                Te = {
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
                Ae = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
                Ce = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
                ke = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
                xe = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"];

            function Le(e) {
                if (e.webgl) return e.webgl.context;
                var n, t = document.createElement("canvas");
                t.addEventListener("webglCreateContextError", (function() {
                    return n = void 0
                }));
                for (var r = 0, a = ["webgl", "experimental-webgl"]; r < a.length; r++) {
                    var o = a[r];
                    try {
                        n = t.getContext(o)
                    } catch (i) {}
                    if (n) break
                }
                return e.webgl = {
                    context: n
                }, n
            }

            function Ee(e, n, t) {
                var r = e.getShaderPrecisionFormat(e[n], e[t]);
                return r ? [r.rangeMin, r.rangeMax, r.precision] : []
            }

            function Be(e) {
                return Object.keys(e.__proto__).filter(Me)
            }

            function Me(e) {
                return "string" == typeof e && !e.match(/[^A-Z0-9_x]/)
            }

            function Re() {
                return Q()
            }

            function Ie(e) {
                return "function" == typeof e.getParameter
            }
            var _e = {
                fonts: function() {
                    var e = this;
                    return ne((function(n, t) {
                        var r = t.document;
                        return y(e, void 0, void 0, (function() {
                            var e, n, t, a, o, i, c, u, l, s, d;
                            return w(this, (function(f) {
                                for ((e = r.body).style.fontSize = "48px", (n = r.createElement("div")).style.setProperty("visibility", "hidden", "important"), t = {}, a = {}, o = function(e) {
                                        var t = r.createElement("span"),
                                            a = t.style;
                                        return a.position = "absolute", a.top = "0", a.left = "0", a.fontFamily = e, t.textContent = "mmMwWLliI0O&1", n.appendChild(t), t
                                    }, i = function(e, n) {
                                        return o("'".concat(e, "',").concat(n))
                                    }, c = function() {
                                        for (var e = {}, n = function(n) {
                                                e[n] = ie.map((function(e) {
                                                    return i(n, e)
                                                }))
                                            }, t = 0, r = ce; t < r.length; t++) n(r[t]);
                                        return e
                                    }, u = function(e) {
                                        return ie.some((function(n, r) {
                                            return e[r].offsetWidth !== t[n] || e[r].offsetHeight !== a[n]
                                        }))
                                    }, l = ie.map(o), s = c(), e.appendChild(n), d = 0; d < ie.length; d++) t[ie[d]] = l[d].offsetWidth, a[ie[d]] = l[d].offsetHeight;
                                return [2, ce.filter((function(e) {
                                    return u(s[e])
                                }))]
                            }))
                        }))
                    }))
                },
                domBlockers: function(e) {
                    var n = (void 0 === e ? {} : e).debug;
                    return y(this, void 0, void 0, (function() {
                        var e, t, r, a, o;
                        return w(this, (function(i) {
                            switch (i.label) {
                                case 0:
                                    return z() || $() ? (c = atob, e = {
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
                                    }, t = Object.keys(e), [4, fe((o = []).concat.apply(o, t.map((function(n) {
                                        return e[n]
                                    }))))]) : [2, void 0];
                                case 1:
                                    return r = i.sent(), n && function(e, n) {
                                        for (var t = "DOM blockers debug:\n```", r = 0, a = Object.keys(e); r < a.length; r++) {
                                            var o = a[r];
                                            t += "\n".concat(o, ":");
                                            for (var i = 0, c = e[o]; i < c.length; i++) {
                                                var u = c[i];
                                                t += "\n  ".concat(n[u] ? "\ud83d\udeab" : "\u27a1\ufe0f", " ").concat(u)
                                            }
                                        }
                                        console.log("".concat(t, "\n```"))
                                    }(e, r), (a = t.filter((function(n) {
                                        var t = e[n];
                                        return B(t.map((function(e) {
                                            return r[e]
                                        }))) > .6 * t.length
                                    }))).sort(), [2, a]
                            }
                            var c
                        }))
                    }))
                },
                fontPreferences: function() {
                    return void 0 === e && (e = 4e3), ne((function(n, t) {
                        var r = t.document,
                            a = r.body,
                            o = a.style;
                        o.width = "".concat(e, "px"), o.webkitTextSizeAdjust = o.textSizeAdjust = "none", Y() ? a.style.zoom = "".concat(1 / t.devicePixelRatio) : z() && (a.style.zoom = "reset");
                        var i = r.createElement("div");
                        return i.textContent = b([], Array(e / 20 << 0), !0).map((function() {
                                return "word"
                            })).join(" "), a.appendChild(i),
                            function(e, n) {
                                for (var t = {}, r = {}, a = 0, o = Object.keys(Te); a < o.length; a++) {
                                    var i = o[a],
                                        c = Te[i],
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
                                for (var g = 0, y = Object.keys(Te); g < y.length; g++) r[i = y[g]] = t[i].getBoundingClientRect().width;
                                return r
                            }(r, a)
                    }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
                    var e
                },
                audio: function() {
                    return z() && q() && K() || Y() && function() {
                        var e = navigator,
                            n = window,
                            t = Audio.prototype,
                            r = n.visualViewport;
                        return B(["srLatency" in t, "srChannelCount" in t, "devicePosture" in e, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
                    }() && (n = (e = window).URLPattern, B(["union" in Set.prototype, "Iterator" in e, n && "hasRegExpGroups" in n.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3) ? -4 : function() {
                        var e = window,
                            n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
                        if (!n) return -2;
                        if (z() && !J() && ! function() {
                                var e = window;
                                return B(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
                            }()) return -1;
                        var t = new n(1, 5e3, 44100),
                            r = t.createOscillator();
                        r.type = "triangle", r.frequency.value = 1e4;
                        var a = t.createDynamicsCompressor();
                        a.threshold.value = -50, a.knee.value = 40, a.ratio.value = 12, a.attack.value = 0, a.release.value = .25, r.connect(a), a.connect(t.destination), r.start(0);
                        var o = function(e) {
                                var n = function() {};
                                return [new Promise((function(t, r) {
                                    var a = !1,
                                        o = 0,
                                        i = 0;
                                    e.oncomplete = function(e) {
                                        return t(e.renderedBuffer)
                                    };
                                    var c = function() {
                                            setTimeout((function() {
                                                return r(ee("timeout"))
                                            }), Math.min(500, i + 5e3 - Date.now()))
                                        },
                                        u = function() {
                                            try {
                                                var n = e.startRendering();
                                                switch (T(n) && k(n), e.state) {
                                                    case "running":
                                                        i = Date.now(), a && c();
                                                        break;
                                                    case "suspended":
                                                        document.hidden || o++, a && o >= 3 ? r(ee("suspended")) : setTimeout(u, 500)
                                                }
                                            } catch (t) {
                                                r(t)
                                            }
                                        };
                                    u(), n = function() {
                                        a || (a = !0, i > 0 && c())
                                    }
                                })), n]
                            }(t),
                            i = o[0],
                            c = o[1],
                            u = k(i.then((function(e) {
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
                    if (z() && q() && K()) return function() {
                        return Promise.resolve(void 0)
                    };
                    var n = le();
                    return function() {
                        return y(e, void 0, void 0, (function() {
                            var e, t;
                            return w(this, (function(r) {
                                switch (r.label) {
                                    case 0:
                                        return [4, n()];
                                    case 1:
                                        return e = r.sent(), [2, [(t = function(e) {
                                            return null === e ? null : M(e, 10)
                                        })(e[0]), t(e[1]), t(e[2]), t(e[3])]]
                                }
                            }))
                        }))
                    }
                },
                canvas: function() {
                    return function(e) {
                        var n, t, r, a, o, i = !1,
                            c = function() {
                                var e = document.createElement("canvas");
                                return e.width = 1, e.height = 1, [e, e.getContext("2d")]
                            }(),
                            u = c[0],
                            l = c[1];
                        return o = u, l && o.toDataURL ? ((a = l).rect(0, 0, 10, 10), a.rect(2, 2, 6, 6), i = !a.isPointInPath(5, 5, "evenodd"), e ? t = r = "skipped" : (t = (n = function(e, n) {
                            ! function(e, n) {
                                e.width = 240, e.height = 60, n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(100, 1, 62, 20), n.fillStyle = "#069", n.font = '11pt "Times New Roman"';
                                var t = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                                n.fillText(t, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(t, 4, 45)
                            }(e, n);
                            var t = ue(e);
                            return t !== ue(e) ? ["unstable", "unstable"] : (function(e, n) {
                                e.width = 122, e.height = 110, n.globalCompositeOperation = "multiply";
                                for (var t = 0, r = [
                                        ["#f2f", 40, 40],
                                        ["#2ff", 80, 40],
                                        ["#ff2", 60, 80]
                                    ]; t < r.length; t++) {
                                    var a = r[t],
                                        o = a[0],
                                        i = a[1],
                                        c = a[2];
                                    n.fillStyle = o, n.beginPath(), n.arc(i, c, 40, 0, 2 * Math.PI, !0), n.closePath(), n.fill()
                                }
                                n.fillStyle = "#f9c", n.arc(60, 60, 60, 0, 2 * Math.PI, !0), n.arc(60, 60, 20, 0, 2 * Math.PI, !0), n.fill("evenodd")
                            }(e, n), [ue(e), t])
                        }(u, l))[0], r = n[1])) : t = r = "unsupported", {
                            winding: i,
                            geometry: t,
                            text: r
                        }
                    }(z() && q() && K())
                },
                osCpu: function() {
                    return navigator.oscpu
                },
                languages: function() {
                    var e, n = navigator,
                        t = [],
                        r = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
                    if (void 0 !== r && t.push([r]), Array.isArray(n.languages)) Y() && B([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || t.push(n.languages);
                    else if ("string" == typeof n.languages) {
                        var a = n.languages;
                        a && t.push(a.split(","))
                    }
                    return t
                },
                colorDepth: function() {
                    return window.screen.colorDepth
                },
                deviceMemory: function() {
                    return E(L(navigator.deviceMemory), void 0)
                },
                screenResolution: function() {
                    if (!(z() && q() && K())) return function() {
                        var e = screen,
                            n = function(e) {
                                return E(x(e), null)
                            },
                            t = [n(e.width), n(e.height)];
                        return t.sort().reverse(), t
                    }()
                },
                hardwareConcurrency: function() {
                    return E(x(navigator.hardwareConcurrency), void 0)
                },
                timezone: function() {
                    var e, n = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                    if (n) {
                        var t = (new n).resolvedOptions().timeZone;
                        if (t) return t
                    }
                    var r, a = (r = (new Date).getFullYear(), -Math.max(L(new Date(r, 0, 1).getTimezoneOffset()), L(new Date(r, 6, 1).getTimezoneOffset())));
                    return "UTC".concat(a >= 0 ? "+" : "").concat(a)
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
                    if (!X() && ! function() {
                            var e = window,
                                n = navigator;
                            return B(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in n, "msSaveBlob" in n]) >= 3 && !X()
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
                    return "MacIntel" === e && z() && !J() ? function() {
                        if ("iPad" === navigator.platform) return !0;
                        var e = screen,
                            n = e.width / e.height;
                        return B(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, n > .65 && n < 1.53]) >= 2
                    }() ? "iPad" : "iPhone" : e
                },
                plugins: function() {
                    var e = navigator.plugins;
                    if (e) {
                        for (var n = [], t = 0; t < e.length; ++t) {
                            var r = e[t];
                            if (r) {
                                for (var a = [], o = 0; o < r.length; ++o) {
                                    var i = r[o];
                                    a.push({
                                        type: i.type,
                                        suffixes: i.suffixes
                                    })
                                }
                                n.push({
                                    name: r.name,
                                    description: r.description,
                                    mimeTypes: a
                                })
                            }
                        }
                        return n
                    }
                },
                touchSupport: function() {
                    var e, n = navigator,
                        t = 0;
                    void 0 !== n.maxTouchPoints ? t = x(n.maxTouchPoints) : void 0 !== n.msMaxTouchPoints && (t = n.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (b) {
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
                            a = window[r];
                        a && "object" == typeof a && e.push(r)
                    }
                    return e.sort()
                },
                cookiesEnabled: function() {
                    var e = document;
                    try {
                        e.cookie = "cookietest=1; SameSite=Strict;";
                        var n = -1 !== e.cookie.indexOf("cookietest=");
                        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", n
                    } catch (w) {
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
                    return !!me("inverted") || !me("none") && void 0
                },
                forcedColors: function() {
                    return !!he("active") || !he("none") && void 0
                },
                monochrome: function() {
                    if (matchMedia("(min-monochrome: 0)").matches) {
                        for (var e = 0; e <= 100; ++e)
                            if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
                        throw new Error("Too high value")
                    }
                },
                contrast: function() {
                    return pe("no-preference") ? 0 : pe("high") || pe("more") ? 1 : pe("low") || pe("less") ? -1 : pe("forced") ? 10 : void 0
                },
                reducedMotion: function() {
                    return !!ge("reduce") || !ge("no-preference") && void 0
                },
                reducedTransparency: function() {
                    return !!ye("reduce") || !ye("no-preference") && void 0
                },
                hdr: function() {
                    return !!we("high") || !we("standard") && void 0
                },
                math: function() {
                    var e, n = be.acos || Se,
                        t = be.acosh || Se,
                        r = be.asin || Se,
                        a = be.asinh || Se,
                        o = be.atanh || Se,
                        i = be.atan || Se,
                        c = be.sin || Se,
                        u = be.sinh || Se,
                        l = be.cos || Se,
                        s = be.cosh || Se,
                        d = be.tan || Se,
                        f = be.tanh || Se,
                        v = be.exp || Se,
                        m = be.expm1 || Se,
                        h = be.log1p || Se;
                    return {
                        acos: n(.12312423423423424),
                        acosh: t(1e308),
                        acoshPf: (e = 1e154, be.log(e + be.sqrt(e * e - 1))),
                        asin: r(.12312423423423424),
                        asinh: a(1),
                        asinhPf: be.log(1 + be.sqrt(2)),
                        atanh: o(.5),
                        atanhPf: be.log(3) / 2,
                        atan: i(.5),
                        sin: c(-1e300),
                        sinh: u(1),
                        sinhPf: be.exp(1) - 1 / be.exp(1) / 2,
                        cos: l(10.000000000123),
                        cosh: s(1),
                        coshPf: (be.exp(1) + 1 / be.exp(1)) / 2,
                        tan: d(-1e300),
                        tanh: f(1),
                        tanhPf: (be.exp(2) - 1) / (be.exp(2) + 1),
                        exp: v(1),
                        expm1: m(1),
                        expm1Pf: be.exp(1) - 1,
                        log1p: h(10),
                        log1pPf: be.log(11),
                        powPI: be.pow(be.PI, -100)
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
                                    if ((0, p.A)(t, Error) && "SecurityError" === t.name) return !0;
                                    throw t
                                }
                                e = n
                            }
                        }()) return -3;
                    try {
                        return e.canMakePayments() ? 1 : 0
                    } catch (n) {
                        return function(e) {
                            if ((0, p.A)(e, Error) && "InvalidAccessError" === e.name && /\bfrom\b.*\binsecure\b/i.test(e.message)) return -2;
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
                    return $() || z() ? window.AudioContext && null !== (e = (new AudioContext).baseLatency) && void 0 !== e ? e : -1 : -2
                },
                webGlBasics: function(e) {
                    var n, t, r, a, o, i, c = Le(e.cache);
                    if (!c) return -1;
                    if (!Ie(c)) return -2;
                    var u = Re() ? null : c.getExtension("WEBGL_debug_renderer_info");
                    return {
                        version: (null === (n = c.getParameter(c.VERSION)) || void 0 === n ? void 0 : n.toString()) || "",
                        vendor: (null === (t = c.getParameter(c.VENDOR)) || void 0 === t ? void 0 : t.toString()) || "",
                        vendorUnmasked: u ? null === (r = c.getParameter(u.UNMASKED_VENDOR_WEBGL)) || void 0 === r ? void 0 : r.toString() : "",
                        renderer: (null === (a = c.getParameter(c.RENDERER)) || void 0 === a ? void 0 : a.toString()) || "",
                        rendererUnmasked: u ? null === (o = c.getParameter(u.UNMASKED_RENDERER_WEBGL)) || void 0 === o ? void 0 : o.toString() : "",
                        shadingLanguageVersion: (null === (i = c.getParameter(c.SHADING_LANGUAGE_VERSION)) || void 0 === i ? void 0 : i.toString()) || ""
                    }
                },
                webGlExtensions: function(e) {
                    var n = Le(e.cache);
                    if (!n) return -1;
                    if (!Ie(n)) return -2;
                    var t = n.getSupportedExtensions(),
                        r = n.getContextAttributes(),
                        a = [],
                        o = [],
                        i = [],
                        c = [],
                        u = [];
                    if (r)
                        for (var l = 0, s = Object.keys(r); l < s.length; l++) {
                            var d = s[l];
                            o.push("".concat(d, "=").concat(r[d]))
                        }
                    for (var f = 0, v = Be(n); f < v.length; f++) {
                        var m = n[S = v[f]];
                        i.push("".concat(S, "=").concat(m).concat(Ae.has(m) ? "=".concat(n.getParameter(m)) : ""))
                    }
                    if (t)
                        for (var h = 0, p = t; h < p.length; h++) {
                            var g = p[h];
                            if (!("WEBGL_debug_renderer_info" === g && Re() || "WEBGL_polygon_mode" === g && (Y() || z()))) {
                                var y = n.getExtension(g);
                                if (y)
                                    for (var w = 0, b = Be(y); w < b.length; w++) {
                                        var S;
                                        m = y[S = b[w]], c.push("".concat(S, "=").concat(m).concat(Ce.has(m) ? "=".concat(n.getParameter(m)) : ""))
                                    } else a.push(g)
                            }
                        }
                    for (var T = 0, A = ke; T < A.length; T++)
                        for (var C = A[T], k = 0, x = xe; k < x.length; k++) {
                            var L = x[k],
                                E = Ee(n, C, L);
                            u.push("".concat(C, ".").concat(L, "=").concat(E.join(",")))
                        }
                    return c.sort(), i.sort(), {
                        contextAttributes: o,
                        parameters: i,
                        shaderPrecisions: u,
                        extensions: t,
                        extensionParameters: c,
                        unsupportedExtensions: a
                    }
                }
            };

            function Pe(e) {
                var n = function(e) {
                        if ($()) return .4;
                        if (z()) return !J() || q() && K() ? .3 : .5;
                        var n = "value" in e.platform ? e.platform.value : "";
                        return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
                    }(e),
                    t = M(.99 + .01 * n, 1e-4);
                return {
                    score: n,
                    comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "".concat(t))
                }
            }

            function Oe(e) {
                return JSON.stringify(e, (function(e, n) {
                    return (0, p.A)(n, Error) ? g({
                        name: (t = n).name,
                        message: t.message,
                        stack: null === (r = t.stack) || void 0 === r ? void 0 : r.split("\n")
                    }, t) : n;
                    var t, r
                }), 2)
            }

            function Ve(e) {
                return H(function(e) {
                    for (var n = "", t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
                        var a = r[t],
                            o = e[a],
                            i = "error" in o ? "error" : JSON.stringify(o.value);
                        n += "".concat(n ? "|" : "").concat(a.replace(/([:|\\])/g, "\\$1"), ":").concat(i)
                    }
                    return n
                }(e))
            }

            function De(e, n) {
                var t = Date.now();
                return {
                    get: function(r) {
                        return y(this, void 0, void 0, (function() {
                            var a, o, i;
                            return w(this, (function(c) {
                                switch (c.label) {
                                    case 0:
                                        return a = Date.now(), [4, e()];
                                    case 1:
                                        return o = c.sent(), i = function(e) {
                                            var n;
                                            return {
                                                get visitorId() {
                                                    return void 0 === n && (n = Ve(this.components)), n
                                                },
                                                set visitorId(e) {
                                                    n = e
                                                },
                                                confidence: Pe(e),
                                                components: e,
                                                version: "4.5.1"
                                            }
                                        }(o), (n || (null == r ? void 0 : r.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(i.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(a - t, "\nvisitorId: ").concat(i.visitorId, "\ncomponents: ").concat(Oe(o), "\n```")), [2, i]
                                }
                            }))
                        }))
                    }
                }
            }
            var Ne = {
                    load: function(e) {
                        return void 0 === e && (e = {}), y(this, void 0, void 0, (function() {
                            var n, t, r;
                            return w(this, (function(a) {
                                switch (a.label) {
                                    case 0:
                                        return e.monitoring, n = e.delayFallback, t = e.debug, [4, (o = n, void 0 === o && (o = 50), function(e, n) {
                                            void 0 === n && (n = 1 / 0);
                                            var t = window.requestIdleCallback;
                                            return t ? new Promise((function(e) {
                                                return t.call(window, (function() {
                                                    return e()
                                                }), {
                                                    timeout: n
                                                })
                                            })) : S(Math.min(e, n))
                                        }(o, 2 * o))];
                                    case 1:
                                        return a.sent(), r = function(e, n, t, r) {
                                            var a = Object.keys(e).filter((function(e) {
                                                    return ! function(e, n) {
                                                        for (var t = 0, r = e.length; t < r; ++t)
                                                            if (e[t] === n) return !0;
                                                        return !1
                                                    }(t, e)
                                                })),
                                                o = k(C(a, (function(t) {
                                                    return function(e, n) {
                                                        var t = k(new Promise((function(t) {
                                                            var r = Date.now();
                                                            A(e.bind(null, n), (function() {
                                                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                                                var a = Date.now() - r;
                                                                if (!e[0]) return t((function() {
                                                                    return {
                                                                        error: e[1],
                                                                        duration: a
                                                                    }
                                                                }));
                                                                var o = e[1];
                                                                if (Z(o)) return t((function() {
                                                                    return {
                                                                        value: o,
                                                                        duration: a
                                                                    }
                                                                }));
                                                                t((function() {
                                                                    return new Promise((function(e) {
                                                                        var n = Date.now();
                                                                        A(o, (function() {
                                                                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                                                            var o = a + Date.now() - n;
                                                                            if (!t[0]) return e({
                                                                                error: t[1],
                                                                                duration: o
                                                                            });
                                                                            e({
                                                                                value: t[1],
                                                                                duration: o
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
                                                return y(this, void 0, void 0, (function() {
                                                    var e, n, t, i;
                                                    return w(this, (function(c) {
                                                        switch (c.label) {
                                                            case 0:
                                                                return [4, o];
                                                            case 1:
                                                                return [4, C(c.sent(), (function(e) {
                                                                    return k(e())
                                                                }), r)];
                                                            case 2:
                                                                return e = c.sent(), [4, Promise.all(e)];
                                                            case 3:
                                                                for (n = c.sent(), t = {}, i = 0; i < a.length; ++i) t[a[i]] = n[i];
                                                                return [2, t]
                                                        }
                                                    }))
                                                }))
                                            }
                                        }(_e, {
                                            cache: {},
                                            debug: t
                                        }, []), [2, De(r, t)]
                                }
                                var o
                            }))
                        }))
                    },
                    hashComponents: Ve,
                    componentsToDebugString: Oe
                },
                Fe = function() {
                    var e = (0, a.A)(i().mark((function e() {
                        var n, t, r, o, c, u;
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
                                        var e, n, t, r, a, o, i, c, u, l, s, d, f, v, m, h;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            userId: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (t = n.initDataUnsafe) || void 0 === t || null === (r = t.user) || void 0 === r ? void 0 : r.id,
                                            username: null === (a = window.Telegram) || void 0 === a || null === (o = a.WebApp) || void 0 === o || null === (i = o.initDataUnsafe) || void 0 === i || null === (c = i.user) || void 0 === c ? void 0 : c.username,
                                            userLanguageCode: null === (u = window.Telegram) || void 0 === u || null === (l = u.WebApp) || void 0 === l || null === (s = l.initDataUnsafe) || void 0 === s || null === (d = s.user) || void 0 === d ? void 0 : d.language_code,
                                            userIsBot: null === (f = window.Telegram) || void 0 === f || null === (v = f.WebApp) || void 0 === v || null === (m = v.initDataUnsafe) || void 0 === m || null === (h = m.user) || void 0 === h ? void 0 : h.is_bot
                                        }
                                    }, r = function() {
                                        return {
                                            ua: navigator.userAgent
                                        }
                                    }, o = function() {
                                        var e, n, t, r, a, o, i, c, u, l, s, d;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            isBioInited: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (t = n.BiometricManager) || void 0 === t ? void 0 : t.isInited,
                                            isBioAva: null === (r = window.Telegram) || void 0 === r || null === (a = r.WebApp) || void 0 === a || null === (o = a.BiometricManager) || void 0 === o ? void 0 : o.isBiometricAvailable,
                                            bioType: null === (i = window.Telegram) || void 0 === i || null === (c = i.WebApp) || void 0 === c || null === (u = c.BiometricManager) || void 0 === u ? void 0 : u.biometricType,
                                            bioDeviceId: null === (l = window.Telegram) || void 0 === l || null === (s = l.WebApp) || void 0 === s || null === (d = s.BiometricManager) || void 0 === d ? void 0 : d.deviceId
                                        }
                                    }, c = function() {
                                        var e, n, t;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            chatType: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (t = n.initDataUnsafe) || void 0 === t ? void 0 : t.chat_type
                                        }
                                    }, u = function() {
                                        var e = (0, a.A)(i().mark((function e() {
                                            var a, u, l, s, d, f, v, h, p, g, y, w, b, S, T, A, C, k, x, L, E, B;
                                            return i().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Ne.load();
                                                    case 2:
                                                        return a = e.sent, e.next = 5, a.get();
                                                    case 5:
                                                        return u = e.sent, l = u.components, s = l.applePay, d = l.architecture, f = l.audio, v = l.cookiesEnabled, h = l.cpuClass, p = l.deviceMemory, g = l.fonts, y = l.hardwareConcurrency, w = l.hdr, b = l.languages, S = l.pdfViewerEnabled, T = l.plugins, A = l.screenResolution, C = l.timezone, k = l.touchSupport, x = l.vendor, L = l.webGlBasics, E = {
                                                            applePay: s.value,
                                                            architecture: d.value,
                                                            audio: f.value,
                                                            cookiesEnabled: v.value,
                                                            cpuClass: h.value,
                                                            deviceMemory: p.value,
                                                            fonts: g.value,
                                                            hardwareConcurrency: y.value,
                                                            hdr: w.value,
                                                            languages: b.value,
                                                            pdfViewerEnabled: S.value,
                                                            plugins: T.value,
                                                            screenResolution: A.value,
                                                            timezone: C.value,
                                                            touchSupport: k.value,
                                                            browserVendor: x.value,
                                                            webGlVendor: L.value.vendor,
                                                            webGlVendorUnmasked: L.value.vendorUnmasked,
                                                            webGlRenderer: L.value.renderer,
                                                            webGlRendererUnmasked: L.value.rendererUnmasked,
                                                            webGlVersion: L.value.version
                                                        }, B = (0, m.A)({}, n(), r(), o(), t(), c(), E), console.log(B), e.abrupt("return", {});
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
            const Ge = Fe;
            "".concat(l, "_T");

            function We(e) {
                var n, t, r;
                if (!e.t) throw new Error("please make sure config.t and config.domain are not empty");
                return {
                    t: e.t,
                    domain: e.domain || "",
                    storeKey: {
                        device_id_key: (null === e || void 0 === e || null === (n = e.storeKey) || void 0 === n ? void 0 : n.device_id_key) || l,
                        device_dfp_expire_key: (null === e || void 0 === e || null === (t = e.storeKey) || void 0 === t ? void 0 : t.device_dfp_expire_key) || s
                    },
                    fvideo_token_key: "".concat((null === e || void 0 === e || null === (r = e.storeKey) || void 0 === r ? void 0 : r.device_id_key) || l, "_T")
                }
            }

            function Ue(e) {
                try {
                    return decodeURIComponent(e)
                } catch (n) {
                    return e
                }
            }

            function je() {
                var e = window.location.hostname,
                    n = e.split(".");
                return n.length > 2 ? n.slice(-2).join(".") : e
            }
            var He = function(e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                },
                Ze = function(e) {
                    if (!He(e)) return null;
                    if (d) {
                        if ("BNC-Location" === e) return window.__store.getState().temp.bncLocation;
                        var n = window.localStorage.getItem("APP_COOKIES_".concat(e));
                        return n ? Ue(n) : null
                    }
                    for (var t = "".concat(e, "=").trim(), r = ((document || {}).cookie || "").split(";"), a = 0; a < r.length; a++) {
                        var o = (r[a] || "").trim();
                        if (0 === o.indexOf(t)) {
                            var i = o.slice(t.length).trim();
                            return Ue('"' === i[0] ? i.slice(1, -1) : i)
                        }
                    }
                    return null
                },
                Xe = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (He(e)) {
                        d && (n ? window.localStorage.setItem("APP_COOKIES_".concat(e), encodeURIComponent(n)) : window.localStorage.removeItem("APP_COOKIES_".concat(e)));
                        var a = ["path=/"];
                        r && a.unshift("Domain=".concat(je())), Number.isNaN(+t) || a.unshift("Max-Age=".concat(Math.floor(86400 * t))), a.unshift("".concat(e, "=").concat(encodeURIComponent(n))), document.cookie = a.join("; ")
                    }
                },
                Ye = function(e) {
                    if (!e) return e;
                    try {
                        return JSON.parse(e)
                    } catch (n) {
                        return e
                    }
                },
                ze = function() {
                    return "undefined" !== typeof localStorage
                },
                Je = function() {
                    return "undefined" !== typeof sessionStorage
                },
                Ke = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (ze()) return t.ttl ? localStorage.setItem(e, JSON.stringify({
                        value: n,
                        expire: (new Date).getTime() + t.ttl
                    })) : localStorage.setItem(e, JSON.stringify(n))
                },
                Qe = function(e) {
                    if (ze()) {
                        var n = localStorage.getItem(e),
                            t = Ye(n);
                        return t && t.expire ? t.expire && t.expire > (new Date).getTime() ? t.value : null : t
                    }
                },
                qe = function(e) {
                    var n;
                    n = e, document.cookie = "".concat(n, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
                        function(e) {
                            ze() && localStorage.removeItem(e)
                        }(e),
                        function(e) {
                            Je() && sessionStorage.removeItem(e)
                        }(e)
                },
                $e = t("F3rx"),
                en = t.n($e),
                nn = function(e, n, t) {
                    var r, a = function(e) {
                            var n = Ze("cr00");
                            return e.headers = e.headers || {}, e.headers.csrftoken || (e.headers.csrftoken = en()(n || "")), e
                        }(e) || {},
                        o = {
                            method: n || "GET",
                            mode: "cors",
                            headers: a.headers,
                            credentials: a.credentials,
                            body: t
                        };
                    e.headers && e.headers["Content-Type"] || (null === o || void 0 === o || null === (r = o.headers) || void 0 === r || delete r["Content-Type"]);
                    return o
                },
                tn = function() {
                    var e = (0, a.A)(i().mark((function e(n, t) {
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
                rn = function() {
                    var e = (0, a.A)(i().mark((function e(n, t) {
                        var r, a, o = arguments;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = o.length > 2 && void 0 !== o[2] ? o[2] : {}, a = nn(r, "POST", t), e.abrupt("return", tn(n, a));
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
                an = t("ezuS"),
                on = function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    var r = !0,
                        a = !1,
                        o = void 0;
                    try {
                        for (var i, c = n[Symbol.iterator](); !(r = (i = c.next()).done); r = !0) {
                            var u = i.value;
                            if (null !== u && void 0 !== u) return u
                        }
                    } catch (l) {
                        a = !0, o = l
                    } finally {
                        try {
                            r || null == c.return || c.return()
                        } finally {
                            if (a) throw o
                        }
                    }
                    return null
                },
                cn = function(e) {
                    var n, t = e.storeKey.device_id_key,
                        r = e.fvideo_token_key,
                        a = Ze(t),
                        o = null === (n = Qe(t)) || void 0 === n ? void 0 : n.value,
                        i = Ze(r),
                        c = function(e) {
                            if (ze()) return localStorage.getItem(e)
                        }(r);
                    return {
                        dfp: on(a, o),
                        dt: on(i, c)
                    }
                },
                un = function(e, n, t) {
                    var r = t.storeKey,
                        a = r.device_id_key,
                        o = r.device_dfp_expire_key,
                        i = t.fvideo_token_key,
                        c = Date.now() + 216e5;
                    Xe(a, e, 365), Xe(i, n, 365), Xe(o, c, 365), Ke(a, (0, an.A)({
                            value: e
                        }, o, c)),
                        function(e, n) {
                            if (ze()) localStorage.setItem(e, n)
                        }(i, n)
                },
                ln = function(e) {
                    var n = e.storeKey.device_dfp_expire_key,
                        t = Ze(n);
                    null != t && (t = Number(t));
                    var r = Qe(n);
                    return null != r && "string" === typeof r && (r = Number(t)), on(t, r)
                };
            var sn = 2654435769;

            function dn(e, n) {
                var t = e.length,
                    r = t << 2;
                if (n) {
                    var a = e[t - 1];
                    if (a < (r -= 4) - 3 || a > r) return null;
                    r = a
                }
                for (var o = 0; o < t; o++) e[o] = String.fromCharCode(255 & e[o], e[o] >>> 8 & 255, e[o] >>> 16 & 255, e[o] >>> 24 & 255);
                var i = e.join("");
                return n ? i.substring(0, r) : i
            }

            function fn(e, n) {
                var t, r = e.length,
                    a = r >> 2;
                0 !== (3 & r) && ++a, n ? (t = new Array(a + 1))[a] = r : t = new Array(a);
                for (var o = 0; o < r; ++o) t[o >> 2] |= e.charCodeAt(o) << ((3 & o) << 3);
                return t
            }

            function vn(e) {
                return 4294967295 & e
            }

            function mn(e, n, t, r, a, o) {
                return (t >>> 5 ^ n << 2) + (n >>> 3 ^ t << 4) ^ (e ^ n) + (o[3 & r ^ a] ^ t)
            }

            function hn(e) {
                return e.length < 4 && (e.length = 4), e
            }

            function pn(e) {
                if (/^[\x00-\x7f]*$/.test(e)) return e;
                for (var n = [], t = e.length, r = 0, a = 0; r < t; ++r, ++a) {
                    var o = e.charCodeAt(r);
                    if (o < 128) n[a] = e.charAt(r);
                    else if (o < 2048) n[a] = String.fromCharCode(192 | o >> 6, 128 | 63 & o);
                    else {
                        if (!(o < 55296 || o > 57343)) {
                            if (r + 1 < t) {
                                var i = e.charCodeAt(r + 1);
                                if (o < 56320 && 56320 <= i && i <= 57343) {
                                    var c = 65536 + ((1023 & o) << 10 | 1023 & i);
                                    n[a] = String.fromCharCode(240 | c >> 18 & 63, 128 | c >> 12 & 63, 128 | c >> 6 & 63, 128 | 63 & c), ++r;
                                    continue
                                }
                            }
                            throw new Error("Malformed string")
                        }
                        n[a] = String.fromCharCode(224 | o >> 12, 128 | o >> 6 & 63, 128 | 63 & o)
                    }
                }
                return n.join("")
            }

            function gn(e, n) {
                return (void 0 === n || null === n || n < 0) && (n = e.length), 0 === n ? "" : /^[\x00-\x7f]*$/.test(e) || !/^[\x00-\xff]*$/.test(e) ? n === e.length ? e : e.substr(0, n) : n < 32767 ? function(e, n) {
                    for (var t = new Array(n), r = 0, a = 0, o = e.length; r < n && a < o; r++) {
                        var i = e.charCodeAt(a++);
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
                                if (!(a < o)) throw new Error("Unfinished UTF-8 octet sequence");
                                t[r] = (31 & i) << 6 | 63 & e.charCodeAt(a++);
                                break;
                            case 14:
                                if (!(a + 1 < o)) throw new Error("Unfinished UTF-8 octet sequence");
                                t[r] = (15 & i) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++);
                                break;
                            case 15:
                                if (!(a + 2 < o)) throw new Error("Unfinished UTF-8 octet sequence");
                                var c = ((7 & i) << 18 | (63 & e.charCodeAt(a++)) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++)) - 65536;
                                if (!(0 <= c && c <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + c.toString(16));
                                t[r++] = c >> 10 & 1023 | 55296, t[r] = 1023 & c | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + i.toString(16))
                        }
                    }
                    return r < n && (t.length = r), String.fromCharCode.apply(String, t)
                }(e, n) : function(e, n) {
                    for (var t = [], r = new Array(32768), a = 0, o = 0, i = e.length; a < n && o < i; a++) {
                        var c = e.charCodeAt(o++);
                        switch (c >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                r[a] = c;
                                break;
                            case 12:
                            case 13:
                                if (!(o < i)) throw new Error("Unfinished UTF-8 octet sequence");
                                r[a] = (31 & c) << 6 | 63 & e.charCodeAt(o++);
                                break;
                            case 14:
                                if (!(o + 1 < i)) throw new Error("Unfinished UTF-8 octet sequence");
                                r[a] = (15 & c) << 12 | (63 & e.charCodeAt(o++)) << 6 | 63 & e.charCodeAt(o++);
                                break;
                            case 15:
                                if (!(o + 2 < i)) throw new Error("Unfinished UTF-8 octet sequence");
                                var u = ((7 & c) << 18 | (63 & e.charCodeAt(o++)) << 12 | (63 & e.charCodeAt(o++)) << 6 | 63 & e.charCodeAt(o++)) - 65536;
                                if (!(0 <= u && u <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + u.toString(16));
                                r[a++] = u >> 10 & 1023 | 55296, r[a] = 1023 & u | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + c.toString(16))
                        }
                        if (a >= 32766) {
                            var l = a + 1;
                            r.length = l, t[t.length] = String.fromCharCode.apply(String, r), n -= l, a = -1
                        }
                    }
                    return a > 0 && (r.length = a, t[t.length] = String.fromCharCode.apply(String, r)), t.join("")
                }(e, n)
            }

            function yn(e, n) {
                return void 0 === e || null === e || 0 === e.length ? e : (e = pn(e), n = pn(n), dn(function(e, n) {
                    var t, r, a, o, i, c, u = e.length,
                        l = u - 1;
                    for (r = e[l], a = 0, c = 0 | Math.floor(6 + 52 / u); c > 0; --c) {
                        for (o = (a = vn(a + sn)) >>> 2 & 3, i = 0; i < l; ++i) t = e[i + 1], r = e[i] = vn(e[i] + mn(a, t, r, i, o, n));
                        t = e[0], r = e[l] = vn(e[l] + mn(a, t, r, l, o, n))
                    }
                    return e
                }(fn(e, !0), hn(fn(n, !1))), !1))
            }

            function wn(e, n) {
                return void 0 === e || null === e || 0 === e.length ? e : (n = pn(n), gn(dn(function(e, n) {
                    var t, r, a, o, i, c = e.length,
                        u = c - 1;
                    for (t = e[0], a = vn(Math.floor(6 + 52 / c) * sn); 0 !== a; a = vn(a - sn)) {
                        for (o = a >>> 2 & 3, i = u; i > 0; --i) r = e[i - 1], t = e[i] = vn(e[i] - mn(a, t, r, i, o, n));
                        r = e[u], t = e[0] = vn(e[0] - mn(a, t, r, 0, o, n))
                    }
                    return e
                }(fn(e, !1), hn(fn(n, !1))), !0)))
            }
            const bn = {
                utf8Encode: pn,
                utf8Decode: gn,
                encrypt: yn,
                encryptToBase64: function(e, n) {
                    return function() {
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                        return function(n) {
                            var t, r, a, o, i, c, u;
                            for (r = a = 0, o = n.length, c = (o -= i = o % 3) / 3 << 2, i > 0 && (c += 4), t = new Array(c); r < o;) u = n.charCodeAt(r++) << 16 | n.charCodeAt(r++) << 8 | n.charCodeAt(r++), t[a++] = e[u >> 18] + e[u >> 12 & 63] + e[u >> 6 & 63] + e[63 & u];
                            return 1 == i ? (u = n.charCodeAt(r++), t[a++] = e[u >> 2] + e[(3 & u) << 4] + "==") : 2 == i && (u = n.charCodeAt(r++) << 8 | n.charCodeAt(r++), t[a++] = e[u >> 10] + e[u >> 4 & 63] + e[(15 & u) << 2] + "="), t.join("")
                        }
                    }()(yn(e, n))
                },
                decrypt: wn,
                decryptFromBase64: function(e, n) {
                    return void 0 === e || null === e || 0 === e.length ? e : wn(function() {
                        var e = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
                        return function(n) {
                            var t, r, a, o, i, c, u, l, s, d;
                            if ((u = n.length) % 4 !== 0) return "";
                            if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(n)) return "";
                            for (s = u, (l = "=" == n.charAt(u - 2) ? 1 : "=" == n.charAt(u - 1) ? 2 : 0) > 0 && (s -= 4), s = 3 * (s >> 2) + l, d = new Array(s), i = c = 0; i < u && -1 != (t = e[n.charCodeAt(i++)]) && -1 != (r = e[n.charCodeAt(i++)]) && (d[c++] = String.fromCharCode(t << 2 | (48 & r) >> 4), -1 != (a = e[n.charCodeAt(i++)])) && (d[c++] = String.fromCharCode((15 & r) << 4 | (60 & a) >> 2), -1 != (o = e[n.charCodeAt(i++)]));) d[c++] = String.fromCharCode((3 & a) << 6 | o);
                            return d.join("")
                        }
                    }()(e), n)
                }
            };
            var Sn = function(e) {
                    var n = function(e) {
                            for (var n = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789", t = ""; t.length < e;) t += n[Math.floor(Math.random() * n.length)];
                            return t
                        }(6),
                        t = Date.now(),
                        r = "".concat(e, "|").concat(t),
                        a = bn.encryptToBase64(r, n),
                        o = function(e) {
                            var n = 0,
                                t = !0,
                                r = !1,
                                a = void 0;
                            try {
                                for (var o, i = e[Symbol.iterator](); !(t = (o = i.next()).done); t = !0) n ^= o.value.charCodeAt(0)
                            } catch (u) {
                                r = !0, a = u
                            } finally {
                                try {
                                    t || null == i.return || i.return()
                                } finally {
                                    if (r) throw a
                                }
                            }
                            var c = n.toString(16);
                            return 2 === c.length ? c : "0".concat(c)
                        }("".concat(n).concat(a));
                    return "".concat(n).concat(a).concat(o)
                },
                Tn = function(e, n, t) {
                    var r = "".concat(e.domain, "/fvideo/dt/sign/").concat(t, "?en=YDS&t=").concat(e.t, "&v=").concat(c),
                        a = Sn(JSON.stringify(n));
                    try {
                        rn(r, a, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(n) {
                            n.success && un(n.dfp, n.dt, e)
                        }))
                    } catch (o) {}
                },
                An = function(e, n, t, r, a) {
                    var o = t || n,
                        i = "".concat(e.domain, "/fvideo/dt/report/").concat(a, "?en=YDS&t=").concat(e.t, "&v=").concat(c),
                        u = Sn(JSON.stringify((0, h.A)((0, m.A)({}, r), {
                            dfp: o
                        })));
                    try {
                        rn(i, u, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(n) {
                            n.success && un(n.dfp, n.dt, e)
                        }))
                    } catch (l) {}
                },
                Cn = function(e) {
                    qe(e.storeKey.device_id_key), qe(e.storeKey.device_dfp_expire_key), qe(e.fvideo_token_key);
                    var n = Ze("BNC_TG_FV_KEY"),
                        t = Ze("BNC_TG_FV_KEY_T");
                    return qe("BNC_TG_FV_KEY"), qe("BNC_TG_FV_KEY_T"), qe("BNC_TG_FV_UT"), {
                        dfp: n,
                        dt: t
                    }
                };

            function kn(e) {
                return xn.apply(this, arguments)
            }

            function xn() {
                return (xn = (0, a.A)(i().mark((function e(n) {
                    var t, r, a, o, c, u, l, s;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, !f) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (t = We(n), r = cn(t), a = r.dfp, o = r.dt, c = ln(t), a && a.startsWith("3") && (u = Cn(t), a = u.dfp, o = u.dt, c = null), !(a && o && c && Number(c) > Date.now())) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                return e.next = 13, Ge();
                            case 13:
                                l = e.sent, s = (0, h.A)((0, m.A)({}, l), {
                                    deviceTime: Date.now()
                                }), a ? An(t, a, o, s, "tgma") : Tn(t, s, "tgma"), e.next = 21;
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
            var Ln, En = t("3as9"),
                Bn = t("4TZb"),
                Mn = t.n(Bn),
                Rn = function(e) {
                    var n, t = Math.floor(Math.abs(e) / 60),
                        r = Math.abs(e % 60);
                    return n = 0 === r ? "".concat(t.toString().padStart(2, "0"), ":00") : "".concat(t.toString().padStart(2, "0"), ":").concat(r.toString().padStart(2, "0")), n = e > 0 ? "-".concat(n) : "+".concat(n), "GMT".concat(n)
                },
                In = function(e) {
                    var n = e.plugins || e.regular_plugins || e.ie_plugins;
                    if (!Array.isArray(n)) return u;
                    var t = [];
                    return n.forEach((function(e) {
                        t.push(e[0])
                    })), t.length > 500 ? t.slice(0, 500).join(",") : t.join(",")
                },
                _n = function(e) {
                    var n = e[1].replace("canvas fp:data:image/png;base64,", "");
                    try {
                        var t = function(e) {
                            var n, t, r, a = "";
                            for (n = 0, t = (e += "").length; n < t; n++) a += (r = e.charCodeAt(n).toString(16)).length < 2 ? "0".concat(r) : r;
                            return a
                        }(atob(n).slice(-16, -12));
                        return t
                    } catch (r) {
                        return console.warn("Failed to get canvas code: ", r), u
                    }
                },
                Pn = function(e) {
                    var n = {
                        screenResolution: u,
                        avaScreenResolution: u
                    };
                    return e.screenResolution && (n.screenResolution = e.screenResolution.join(",")), e.availableScreenResolution && (n.avaScreenResolution = e.availableScreenResolution.join(",")), n
                },
                On = function(e) {
                    var n = {
                        vendor: u,
                        renderer: u
                    };
                    if (!e || !e.length) return n;
                    for (var t = e.length, r = 0, a = 0; a < t; a++) {
                        var o = e[a] || "";
                        if (o.indexOf("webgl unmasked vendor:") > -1 ? (n.vendor = o.split("webgl unmasked vendor:")[1] || u, r += 1) : o.indexOf("webgl unmasked renderer:") > -1 && (n.renderer = o.split("webgl unmasked renderer:")[1] || u, r += 1), 2 === r) break
                    }
                    return n
                },
                Vn = {
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

            function Dn() {
                return Ln = Ln || (new En.UAParser).getResult()
            }
            var Nn = u,
                Fn = function() {
                    var e = Dn().os;
                    return e && e.name ? "".concat(e.name, " ").concat(e.version) : Nn
                },
                Gn = function() {
                    var e = Dn().device;
                    return e && e.model ? [e.type, e.vendor, e.model, ""].join(" ") : Nn
                },
                Wn = function() {
                    var e = Dn(),
                        n = e.browser,
                        t = e.os || {};
                    return n && n.name ? "".concat(n.name, " V").concat(n.version, " (").concat(t.name || "", ")") : Nn
                },
                Un = function() {
                    var e = (0, a.A)(i().mark((function e() {
                        var n, t, r, o;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 2;
                                    break;
                                case 2:
                                    if (n = "FV_INFO", t = (0, m.A)({}, Vn), !(r = Ye(Qe(n)))) {
                                        e.next = 8;
                                        break
                                    }
                                    return r.deviceTime = Date.now(), e.abrupt("return", r);
                                case 8:
                                    return o = function() {
                                        var e = (0, a.A)(i().mark((function e() {
                                            var r, a, o, c, u, l;
                                            return i().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Mn().getPromise({
                                                            excludes: t
                                                        });
                                                    case 2:
                                                        return r = e.sent, a = r.reduce((function(e, n) {
                                                            return e[n.key] = n.value, e
                                                        }), {}), o = On(a.webgl), c = Pn(a), u = {
                                                            resolution: c.screenResolution,
                                                            availableResolution: c.avaScreenResolution,
                                                            systemVersion: Fn(),
                                                            brandModel: Gn(),
                                                            sysLanguage: a.language,
                                                            timezone: Rn(a.timezoneOffset),
                                                            timezoneOffset: a.timezoneOffset,
                                                            ua: a.userAgent,
                                                            pluginList: In(a),
                                                            canvas: _n(a.canvas),
                                                            webglVendor: o.vendor,
                                                            webglRenderer: o.renderer,
                                                            audio: a.audio,
                                                            platform: a.platform,
                                                            webTimezone: a.timezone,
                                                            cpuClass: a.cpuClass,
                                                            doNotTrack: a.doNotTrack,
                                                            deviceName: Wn(),
                                                            domain: document.domain
                                                        }, l = Object.keys(u).sort().map((function(e) {
                                                            return u[e]
                                                        })), u.fingerprint = Mn().x64hash128(l.join(""), 32), Ke(n, JSON.stringify(u), {
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
                                    }(), e.prev = 9, e.next = 12, o();
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
            const jn = Un;
            var Hn = function(e) {
                qe(e.storeKey.device_id_key), qe(e.storeKey.device_dfp_expire_key), qe(e.fvideo_token_key)
            };

            function Zn(e) {
                return Xn.apply(this, arguments)
            }

            function Xn() {
                return (Xn = (0, a.A)(i().mark((function e(n) {
                    var t, r, a, o, c, u, l;
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, !f) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (t = We(n), r = cn(t), a = r.dfp, o = r.dt, c = ln(t), a && a.startsWith("7") && (Hn(t), a = null, o = null), !(a && o && c && Number(c) > Date.now())) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                return e.next = 13, jn();
                            case 13:
                                u = e.sent, l = (0, h.A)((0, m.A)({}, u), {
                                    deviceTime: Date.now()
                                }), a ? An(t, a, o, l, "web") : Tn(t, l, "web"), e.next = 21;
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
            "".concat(l, "_T");

            function Yn(e) {
                return zn.apply(this, arguments)
            }

            function zn() {
                return (zn = (0, a.A)(i().mark((function e(n) {
                    return i().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!v()) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3, kn(n);
                            case 3:
                                e.next = 7;
                                break;
                            case 5:
                                return e.next = 7, Zn(n);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        "4TZb": function(e, n, t) {
            var r, a;
            ! function(o, i, c) {
                "use strict";
                r = function() {
                    var e = function(e, n) {
                            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
                            var t = [0, 0, 0, 0];
                            return t[3] += e[3] + n[3], t[2] += t[3] >>> 16, t[3] &= 65535, t[2] += e[2] + n[2], t[1] += t[2] >>> 16, t[2] &= 65535, t[1] += e[1] + n[1], t[0] += t[1] >>> 16, t[1] &= 65535, t[0] += e[0] + n[0], t[0] &= 65535, [t[0] << 16 | t[1], t[2] << 16 | t[3]]
                        },
                        n = function(e, n) {
                            e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], n = [n[0] >>> 16, 65535 & n[0], n[1] >>> 16, 65535 & n[1]];
                            var t = [0, 0, 0, 0];
                            return t[3] += e[3] * n[3], t[2] += t[3] >>> 16, t[3] &= 65535, t[2] += e[2] * n[3], t[1] += t[2] >>> 16, t[2] &= 65535, t[2] += e[3] * n[2], t[1] += t[2] >>> 16, t[2] &= 65535, t[1] += e[1] * n[3], t[0] += t[1] >>> 16, t[1] &= 65535, t[1] += e[2] * n[2], t[0] += t[1] >>> 16, t[1] &= 65535, t[1] += e[3] * n[1], t[0] += t[1] >>> 16, t[1] &= 65535, t[0] += e[0] * n[3] + e[1] * n[2] + e[2] * n[1] + e[3] * n[0], t[0] &= 65535, [t[0] << 16 | t[1], t[2] << 16 | t[3]]
                        },
                        t = function(e, n) {
                            return 32 === (n %= 64) ? [e[1], e[0]] : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n | e[0] >>> 32 - n] : (n -= 32, [e[1] << n | e[0] >>> 32 - n, e[0] << n | e[1] >>> 32 - n])
                        },
                        r = function(e, n) {
                            return 0 === (n %= 64) ? e : n < 32 ? [e[0] << n | e[1] >>> 32 - n, e[1] << n] : [e[1] << n - 32, 0]
                        },
                        a = function(e, n) {
                            return [e[0] ^ n[0], e[1] ^ n[1]]
                        },
                        o = function(e) {
                            return e = a(e, [0, e[0] >>> 1]), e = n(e, [4283543511, 3981806797]), e = a(e, [0, e[0] >>> 1]), e = n(e, [3301882366, 444984403]), e = a(e, [0, e[0] >>> 1])
                        },
                        i = function(i, c) {
                            c = c || 0;
                            for (var u = (i = i || "").length % 16, l = i.length - u, s = [0, c], d = [0, c], f = [0, 0], v = [0, 0], m = [2277735313, 289559509], h = [1291169091, 658871167], p = 0; p < l; p += 16) f = [255 & i.charCodeAt(p + 4) | (255 & i.charCodeAt(p + 5)) << 8 | (255 & i.charCodeAt(p + 6)) << 16 | (255 & i.charCodeAt(p + 7)) << 24, 255 & i.charCodeAt(p) | (255 & i.charCodeAt(p + 1)) << 8 | (255 & i.charCodeAt(p + 2)) << 16 | (255 & i.charCodeAt(p + 3)) << 24], v = [255 & i.charCodeAt(p + 12) | (255 & i.charCodeAt(p + 13)) << 8 | (255 & i.charCodeAt(p + 14)) << 16 | (255 & i.charCodeAt(p + 15)) << 24, 255 & i.charCodeAt(p + 8) | (255 & i.charCodeAt(p + 9)) << 8 | (255 & i.charCodeAt(p + 10)) << 16 | (255 & i.charCodeAt(p + 11)) << 24], f = n(f, m), f = t(f, 31), f = n(f, h), s = a(s, f), s = t(s, 27), s = e(s, d), s = e(n(s, [0, 5]), [0, 1390208809]), v = n(v, h), v = t(v, 33), v = n(v, m), d = a(d, v), d = t(d, 31), d = e(d, s), d = e(n(d, [0, 5]), [0, 944331445]);
                            switch (f = [0, 0], v = [0, 0], u) {
                                case 15:
                                    v = a(v, r([0, i.charCodeAt(p + 14)], 48));
                                case 14:
                                    v = a(v, r([0, i.charCodeAt(p + 13)], 40));
                                case 13:
                                    v = a(v, r([0, i.charCodeAt(p + 12)], 32));
                                case 12:
                                    v = a(v, r([0, i.charCodeAt(p + 11)], 24));
                                case 11:
                                    v = a(v, r([0, i.charCodeAt(p + 10)], 16));
                                case 10:
                                    v = a(v, r([0, i.charCodeAt(p + 9)], 8));
                                case 9:
                                    v = a(v, [0, i.charCodeAt(p + 8)]), v = n(v, h), v = t(v, 33), v = n(v, m), d = a(d, v);
                                case 8:
                                    f = a(f, r([0, i.charCodeAt(p + 7)], 56));
                                case 7:
                                    f = a(f, r([0, i.charCodeAt(p + 6)], 48));
                                case 6:
                                    f = a(f, r([0, i.charCodeAt(p + 5)], 40));
                                case 5:
                                    f = a(f, r([0, i.charCodeAt(p + 4)], 32));
                                case 4:
                                    f = a(f, r([0, i.charCodeAt(p + 3)], 24));
                                case 3:
                                    f = a(f, r([0, i.charCodeAt(p + 2)], 16));
                                case 2:
                                    f = a(f, r([0, i.charCodeAt(p + 1)], 8));
                                case 1:
                                    f = a(f, [0, i.charCodeAt(p)]), f = n(f, m), f = t(f, 31), f = n(f, h), s = a(s, f)
                            }
                            return s = a(s, [0, i.length]), d = a(d, [0, i.length]), s = e(s, d), d = e(d, s), s = o(s), d = o(d), s = e(s, d), d = e(d, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
                        },
                        c = {
                            preprocessor: null,
                            audio: {
                                timeout: 1e3,
                                excludeIOS11: !0
                            },
                            fonts: {
                                swfContainerId: "fingerprintjs2",
                                swfPath: "flash/compiled/FontList.swf",
                                userDefinedFonts: [],
                                extendedJsFonts: !1
                            },
                            screen: {
                                detectScreenOrientation: !0
                            },
                            plugins: {
                                sortPluginsFor: [/palemoon/i],
                                excludeIE: !1
                            },
                            extraComponents: [],
                            excludes: {
                                enumerateDevices: !0,
                                pixelRatio: !0,
                                doNotTrack: !0,
                                fontsFlash: !0
                            },
                            NOT_AVAILABLE: "not available",
                            ERROR: "error",
                            EXCLUDED: "excluded"
                        },
                        u = function(e, n) {
                            if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(n);
                            else if (e.length === +e.length)
                                for (var t = 0, r = e.length; t < r; t++) n(e[t], t, e);
                            else
                                for (var a in e) e.hasOwnProperty(a) && n(e[a], a, e)
                        },
                        l = function(e, n) {
                            var t = [];
                            return null == e ? t : Array.prototype.map && e.map === Array.prototype.map ? e.map(n) : (u(e, (function(e, r, a) {
                                t.push(n(e, r, a))
                            })), t)
                        },
                        s = function(e, n) {
                            if (null == n) return e;
                            var t, r;
                            for (r in n) null == (t = n[r]) || Object.prototype.hasOwnProperty.call(e, r) || (e[r] = t);
                            return e
                        },
                        d = function(e, n) {
                            if (!f()) return e(n.NOT_AVAILABLE);
                            navigator.mediaDevices.enumerateDevices().then((function(n) {
                                e(n.map((function(e) {
                                    return "id=" + e.deviceId + ";gid=" + e.groupId + ";" + e.kind + ";" + e.label
                                })))
                            })).catch((function(n) {
                                e(n)
                            }))
                        },
                        f = function() {
                            return navigator.mediaDevices && navigator.mediaDevices.enumerateDevices
                        },
                        v = function(e, n) {
                            var t = n.audio;
                            if (t.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(n.EXCLUDED);
                            var r = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                            if (null == r) return e(n.NOT_AVAILABLE);
                            var a = new r(1, 44100, 44100),
                                o = a.createOscillator();
                            o.type = "triangle", o.frequency.setValueAtTime(1e4, a.currentTime);
                            var i = a.createDynamicsCompressor();
                            u([
                                ["threshold", -50],
                                ["knee", 40],
                                ["ratio", 12],
                                ["reduction", -20],
                                ["attack", 0],
                                ["release", .25]
                            ], (function(e) {
                                void 0 !== i[e[0]] && "function" === typeof i[e[0]].setValueAtTime && i[e[0]].setValueAtTime(e[1], a.currentTime)
                            })), o.connect(i), i.connect(a.destination), o.start(0), a.startRendering();
                            var c = setTimeout((function() {
                                return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'), a.oncomplete = function() {}, a = null, e("audioTimeout")
                            }), t.timeout);
                            a.oncomplete = function(n) {
                                var t;
                                try {
                                    clearTimeout(c), t = n.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(e, n) {
                                        return e + Math.abs(n)
                                    }), 0).toString(), o.disconnect(), i.disconnect()
                                } catch (r) {
                                    return void e(r)
                                }
                                e(t)
                            }
                        },
                        m = function(e, n) {
                            e(h(n))
                        },
                        h = function(e) {
                            var n = [window.screen.width, window.screen.height];
                            return e.screen.detectScreenOrientation && n.sort().reverse(), n
                        },
                        p = function(e, n) {
                            e(g(n))
                        },
                        g = function(e) {
                            if (window.screen.availWidth && window.screen.availHeight) {
                                var n = [window.screen.availHeight, window.screen.availWidth];
                                return e.screen.detectScreenOrientation && n.sort().reverse(), n
                            }
                            return e.NOT_AVAILABLE
                        },
                        y = function(e, n) {
                            e(F(n))
                        },
                        w = function(e, n) {
                            e(G(n))
                        },
                        b = function(e, n) {
                            e(W(n))
                        },
                        S = function(e, n) {
                            e(j(n))
                        },
                        T = function(e, n) {
                            e(H(n))
                        },
                        A = function(e, n) {
                            e(Z(n))
                        },
                        C = function(e, n) {
                            ne() ? e(Y(n)) : e(n.NOT_AVAILABLE)
                        },
                        k = function(e, n) {
                            te() ? e(z()) : e(n.NOT_AVAILABLE)
                        },
                        x = function(e) {
                            te() ? e(J()) : e()
                        },
                        L = function(e) {
                            e(K())
                        },
                        E = function(e) {
                            e(Q())
                        },
                        B = function(e) {
                            e(q())
                        },
                        M = function(e) {
                            e($())
                        },
                        R = function(e) {
                            e(ee())
                        },
                        I = function(e, n) {
                            return ae() ? oe() ? n.fonts.swfPath ? void ce((function(n) {
                                e(n)
                            }), n) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
                        },
                        _ = function(e, n) {
                            re() ? n.plugins.excludeIE ? e(n.EXCLUDED) : e(O(n)) : e(P(n))
                        },
                        P = function(e) {
                            if (null == navigator.plugins) return e.NOT_AVAILABLE;
                            for (var n = [], t = 0, r = navigator.plugins.length; t < r; t++) navigator.plugins[t] && n.push(navigator.plugins[t]);
                            return V(e) && (n = n.sort((function(e, n) {
                                return e.name > n.name ? 1 : e.name < n.name ? -1 : 0
                            }))), l(n, (function(e) {
                                var n = l(e, (function(e) {
                                    return [e.type, e.suffixes]
                                }));
                                return [e.name, e.description, n]
                            }))
                        },
                        O = function(e) {
                            var n = [];
                            Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window ? n = l(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(n) {
                                try {
                                    return new window.ActiveXObject(n), n
                                } catch (t) {
                                    return e.ERROR
                                }
                            })) : n.push(e.NOT_AVAILABLE);
                            return navigator.plugins && (n = n.concat(P(e))), n
                        },
                        V = function(e) {
                            for (var n = !1, t = 0, r = e.plugins.sortPluginsFor.length; t < r; t++) {
                                var a = e.plugins.sortPluginsFor[t];
                                if (navigator.userAgent.match(a)) {
                                    n = !0;
                                    break
                                }
                            }
                            return n
                        },
                        D = function(e) {
                            e(X())
                        },
                        N = function(e, n) {
                            e(U(n))
                        },
                        F = function(e) {
                            try {
                                return !!window.sessionStorage
                            } catch (n) {
                                return e.ERROR
                            }
                        },
                        G = function(e) {
                            try {
                                return !!window.localStorage
                            } catch (n) {
                                return e.ERROR
                            }
                        },
                        W = function(e) {
                            try {
                                return !!window.indexedDB
                            } catch (n) {
                                return e.ERROR
                            }
                        },
                        U = function(e) {
                            return navigator.hardwareConcurrency ? navigator.hardwareConcurrency : e.NOT_AVAILABLE
                        },
                        j = function(e) {
                            return navigator.cpuClass || e.NOT_AVAILABLE
                        },
                        H = function(e) {
                            return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                        },
                        Z = function(e) {
                            return navigator.doNotTrack ? navigator.doNotTrack : navigator.msDoNotTrack ? navigator.msDoNotTrack : window.doNotTrack ? window.doNotTrack : e.NOT_AVAILABLE
                        },
                        X = function() {
                            var e, n = 0;
                            "undefined" !== typeof navigator.maxTouchPoints ? n = navigator.maxTouchPoints : "undefined" !== typeof navigator.msMaxTouchPoints && (n = navigator.msMaxTouchPoints);
                            try {
                                document.createEvent("TouchEvent"), e = !0
                            } catch (t) {
                                e = !1
                            }
                            return [n, e, "ontouchstart" in window]
                        },
                        Y = function(e) {
                            var n = [],
                                t = document.createElement("canvas");
                            t.width = 2e3, t.height = 200, t.style.display = "inline";
                            var r = t.getContext("2d");
                            return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), n.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", e.dontUseFakeFontInCanvas ? r.font = "11pt Arial" : r.font = "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill("evenodd"), t.toDataURL && n.push("canvas fp:" + t.toDataURL()), n
                        },
                        z = function() {
                            var e, n = function(n) {
                                    return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + n[0] + ", " + n[1] + "]"
                                },
                                t = function(e) {
                                    var n = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                                    if (n) {
                                        var t = e.getParameter(n.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
                                        return 0 === t && (t = 2), t
                                    }
                                    return null
                                };
                            if (!(e = ue())) return null;
                            var r = [],
                                a = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
                                o = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
                                i = e.createBuffer();
                            e.bindBuffer(e.ARRAY_BUFFER, i);
                            var c = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                            e.bufferData(e.ARRAY_BUFFER, c, e.STATIC_DRAW), i.itemSize = 3, i.numItems = 3;
                            var l = e.createProgram(),
                                s = e.createShader(e.VERTEX_SHADER);
                            e.shaderSource(s, a), e.compileShader(s);
                            var d = e.createShader(e.FRAGMENT_SHADER);
                            e.shaderSource(d, o), e.compileShader(d), e.attachShader(l, s), e.attachShader(l, d), e.linkProgram(l), e.useProgram(l), l.vertexPosAttrib = e.getAttribLocation(l, "attrVertex"), l.offsetUniform = e.getUniformLocation(l, "uniformOffset"), e.enableVertexAttribArray(l.vertexPosArray), e.vertexAttribPointer(l.vertexPosAttrib, i.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(l.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems);
                            try {
                                r.push(e.canvas.toDataURL())
                            } catch (v) {}
                            r.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), r.push("webgl aliased line width range:" + n(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), r.push("webgl aliased point size range:" + n(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), r.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), r.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), r.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), r.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), r.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), r.push("webgl max anisotropy:" + t(e)), r.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), r.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), r.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), r.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), r.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), r.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), r.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), r.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), r.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), r.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), r.push("webgl max viewport dims:" + n(e.getParameter(e.MAX_VIEWPORT_DIMS))), r.push("webgl red bits:" + e.getParameter(e.RED_BITS)), r.push("webgl renderer:" + e.getParameter(e.RENDERER)), r.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), r.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), r.push("webgl vendor:" + e.getParameter(e.VENDOR)), r.push("webgl version:" + e.getParameter(e.VERSION));
                            try {
                                var f = e.getExtension("WEBGL_debug_renderer_info");
                                f && (r.push("webgl unmasked vendor:" + e.getParameter(f.UNMASKED_VENDOR_WEBGL)), r.push("webgl unmasked renderer:" + e.getParameter(f.UNMASKED_RENDERER_WEBGL)))
                            } catch (v) {}
                            return e.getShaderPrecisionFormat ? (u(["FLOAT", "INT"], (function(n) {
                                u(["VERTEX", "FRAGMENT"], (function(t) {
                                    u(["HIGH", "MEDIUM", "LOW"], (function(a) {
                                        u(["precision", "rangeMin", "rangeMax"], (function(o) {
                                            var i = e.getShaderPrecisionFormat(e[t + "_SHADER"], e[a + "_" + n])[o];
                                            "precision" !== o && (o = "precision " + o);
                                            var c = ["webgl ", t.toLowerCase(), " shader ", a.toLowerCase(), " ", n.toLowerCase(), " ", o, ":", i].join("");
                                            r.push(c)
                                        }))
                                    }))
                                }))
                            })), r) : r
                        },
                        J = function() {
                            try {
                                var e = ue(),
                                    n = e.getExtension("WEBGL_debug_renderer_info");
                                return e.getParameter(n.UNMASKED_VENDOR_WEBGL) + "~" + e.getParameter(n.UNMASKED_RENDERER_WEBGL)
                            } catch (t) {
                                return null
                            }
                        },
                        K = function() {
                            var e = document.createElement("div");
                            e.innerHTML = "&nbsp;", e.className = "adsbox";
                            var n = !1;
                            try {
                                document.body.appendChild(e), n = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
                            } catch (t) {
                                n = !1
                            }
                            return n
                        },
                        Q = function() {
                            if ("undefined" !== typeof navigator.languages) try {
                                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                            } catch (e) {
                                return !0
                            }
                            return !1
                        },
                        q = function() {
                            return window.screen.width < window.screen.availWidth || window.screen.height < window.screen.availHeight
                        },
                        $ = function() {
                            var e, n = navigator.userAgent.toLowerCase(),
                                t = navigator.oscpu,
                                r = navigator.platform.toLowerCase();
                            if (e = n.indexOf("windows phone") >= 0 ? "Windows Phone" : n.indexOf("win") >= 0 ? "Windows" : n.indexOf("android") >= 0 ? "Android" : n.indexOf("linux") >= 0 || n.indexOf("cros") >= 0 ? "Linux" : n.indexOf("iphone") >= 0 || n.indexOf("ipad") >= 0 ? "iOS" : n.indexOf("mac") >= 0 ? "Mac" : "Other", ("ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0) && "Windows Phone" !== e && "Android" !== e && "iOS" !== e && "Other" !== e) return !0;
                            if ("undefined" !== typeof t) {
                                if ((t = t.toLowerCase()).indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e) return !0;
                                if (t.indexOf("linux") >= 0 && "Linux" !== e && "Android" !== e) return !0;
                                if (t.indexOf("mac") >= 0 && "Mac" !== e && "iOS" !== e) return !0;
                                if ((-1 === t.indexOf("win") && -1 === t.indexOf("linux") && -1 === t.indexOf("mac")) !== ("Other" === e)) return !0
                            }
                            return r.indexOf("win") >= 0 && "Windows" !== e && "Windows Phone" !== e || ((r.indexOf("linux") >= 0 || r.indexOf("android") >= 0 || r.indexOf("pike") >= 0) && "Linux" !== e && "Android" !== e || ((r.indexOf("mac") >= 0 || r.indexOf("ipad") >= 0 || r.indexOf("ipod") >= 0 || r.indexOf("iphone") >= 0) && "Mac" !== e && "iOS" !== e || ((r.indexOf("win") < 0 && r.indexOf("linux") < 0 && r.indexOf("mac") < 0 && r.indexOf("iphone") < 0 && r.indexOf("ipad") < 0) !== ("Other" === e) || "undefined" === typeof navigator.plugins && "Windows" !== e && "Windows Phone" !== e)))
                        },
                        ee = function() {
                            var e, n = navigator.userAgent.toLowerCase(),
                                t = navigator.productSub;
                            if (("Chrome" === (e = n.indexOf("firefox") >= 0 ? "Firefox" : n.indexOf("opera") >= 0 || n.indexOf("opr") >= 0 ? "Opera" : n.indexOf("chrome") >= 0 ? "Chrome" : n.indexOf("safari") >= 0 ? "Safari" : n.indexOf("trident") >= 0 ? "Internet Explorer" : "Other") || "Safari" === e || "Opera" === e) && "20030107" !== t) return !0;
                            var r, a = eval.toString().length;
                            if (37 === a && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                            if (39 === a && "Internet Explorer" !== e && "Other" !== e) return !0;
                            if (33 === a && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                            try {
                                throw "a"
                            } catch (o) {
                                try {
                                    o.toSource(), r = !0
                                } catch (i) {
                                    r = !1
                                }
                            }
                            return r && "Firefox" !== e && "Other" !== e
                        },
                        ne = function() {
                            var e = document.createElement("canvas");
                            return !(!e.getContext || !e.getContext("2d"))
                        },
                        te = function() {
                            if (!ne()) return !1;
                            var e = ue();
                            return !!window.WebGLRenderingContext && !!e
                        },
                        re = function() {
                            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                        },
                        ae = function() {
                            return "undefined" !== typeof window.swfobject
                        },
                        oe = function() {
                            return window.swfobject.hasFlashPlayerVersion("9.0.0")
                        },
                        ie = function(e) {
                            var n = document.createElement("div");
                            n.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(n)
                        },
                        ce = function(e, n) {
                            var t = "___fp_swf_loaded";
                            window[t] = function(n) {
                                e(n)
                            };
                            var r = n.fonts.swfContainerId;
                            ie();
                            var a = {
                                    onReady: t
                                },
                                o = {
                                    allowScriptAccess: "always",
                                    menu: "false"
                                };
                            window.swfobject.embedSWF(n.fonts.swfPath, r, "1", "1", "9.0.0", !1, a, o, {})
                        },
                        ue = function() {
                            var e = document.createElement("canvas"),
                                n = null;
                            try {
                                n = e.getContext("webgl") || e.getContext("experimental-webgl")
                            } catch (t) {}
                            return n || (n = null), n
                        },
                        le = [{
                            key: "userAgent",
                            getData: function(e) {
                                e(navigator.userAgent)
                            }
                        }, {
                            key: "webdriver",
                            getData: function(e, n) {
                                e(null == navigator.webdriver ? n.NOT_AVAILABLE : navigator.webdriver)
                            }
                        }, {
                            key: "language",
                            getData: function(e, n) {
                                e(navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || n.NOT_AVAILABLE)
                            }
                        }, {
                            key: "colorDepth",
                            getData: function(e, n) {
                                e(window.screen.colorDepth || n.NOT_AVAILABLE)
                            }
                        }, {
                            key: "deviceMemory",
                            getData: function(e, n) {
                                e(navigator.deviceMemory || n.NOT_AVAILABLE)
                            }
                        }, {
                            key: "pixelRatio",
                            getData: function(e, n) {
                                e(window.devicePixelRatio || n.NOT_AVAILABLE)
                            }
                        }, {
                            key: "hardwareConcurrency",
                            getData: N
                        }, {
                            key: "screenResolution",
                            getData: m
                        }, {
                            key: "availableScreenResolution",
                            getData: p
                        }, {
                            key: "timezoneOffset",
                            getData: function(e) {
                                e((new Date).getTimezoneOffset())
                            }
                        }, {
                            key: "timezone",
                            getData: function(e, n) {
                                window.Intl && window.Intl.DateTimeFormat ? e((new window.Intl.DateTimeFormat).resolvedOptions().timeZone) : e(n.NOT_AVAILABLE)
                            }
                        }, {
                            key: "sessionStorage",
                            getData: y
                        }, {
                            key: "localStorage",
                            getData: w
                        }, {
                            key: "indexedDb",
                            getData: b
                        }, {
                            key: "addBehavior",
                            getData: function(e) {
                                e(!(!document.body || !document.body.addBehavior))
                            }
                        }, {
                            key: "openDatabase",
                            getData: function(e) {
                                e(!!window.openDatabase)
                            }
                        }, {
                            key: "cpuClass",
                            getData: S
                        }, {
                            key: "platform",
                            getData: T
                        }, {
                            key: "doNotTrack",
                            getData: A
                        }, {
                            key: "plugins",
                            getData: _
                        }, {
                            key: "canvas",
                            getData: C
                        }, {
                            key: "webgl",
                            getData: k
                        }, {
                            key: "webglVendorAndRenderer",
                            getData: x
                        }, {
                            key: "adBlock",
                            getData: L
                        }, {
                            key: "hasLiedLanguages",
                            getData: E
                        }, {
                            key: "hasLiedResolution",
                            getData: B
                        }, {
                            key: "hasLiedOs",
                            getData: M
                        }, {
                            key: "hasLiedBrowser",
                            getData: R
                        }, {
                            key: "touchSupport",
                            getData: D
                        }, {
                            key: "fonts",
                            getData: function(e, n) {
                                var t = ["monospace", "sans-serif", "serif"],
                                    r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                                if (n.fonts.extendedJsFonts) {
                                    var a = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                                    r = r.concat(a)
                                }
                                r = (r = r.concat(n.fonts.userDefinedFonts)).filter((function(e, n) {
                                    return r.indexOf(e) === n
                                }));
                                var o = "mmmmmmmmmmlli",
                                    i = "72px",
                                    c = document.getElementsByTagName("body")[0],
                                    u = document.createElement("div"),
                                    l = document.createElement("div"),
                                    s = {},
                                    d = {},
                                    f = function() {
                                        var e = document.createElement("span");
                                        return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = i, e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = o, e
                                    },
                                    v = function(e, n) {
                                        var t = f();
                                        return t.style.fontFamily = "'" + e + "'," + n, t
                                    },
                                    m = function() {
                                        for (var e = [], n = 0, r = t.length; n < r; n++) {
                                            var a = f();
                                            a.style.fontFamily = t[n], u.appendChild(a), e.push(a)
                                        }
                                        return e
                                    },
                                    h = function() {
                                        for (var e = {}, n = 0, a = r.length; n < a; n++) {
                                            for (var o = [], i = 0, c = t.length; i < c; i++) {
                                                var u = v(r[n], t[i]);
                                                l.appendChild(u), o.push(u)
                                            }
                                            e[r[n]] = o
                                        }
                                        return e
                                    },
                                    p = function(e) {
                                        for (var n = !1, r = 0; r < t.length; r++)
                                            if (n = e[r].offsetWidth !== s[t[r]] || e[r].offsetHeight !== d[t[r]]) return n;
                                        return n
                                    },
                                    g = m();
                                c.appendChild(u);
                                for (var y = 0, w = t.length; y < w; y++) s[t[y]] = g[y].offsetWidth, d[t[y]] = g[y].offsetHeight;
                                var b = h();
                                c.appendChild(l);
                                for (var S = [], T = 0, A = r.length; T < A; T++) p(b[r[T]]) && S.push(r[T]);
                                c.removeChild(l), c.removeChild(u), e(S)
                            },
                            pauseBefore: !0
                        }, {
                            key: "fontsFlash",
                            getData: I,
                            pauseBefore: !0
                        }, {
                            key: "audio",
                            getData: v
                        }, {
                            key: "enumerateDevices",
                            getData: d
                        }],
                        se = function(e) {
                            throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
                        };
                    return se.get = function(e, n) {
                        n ? e || (e = {}) : (n = e, e = {}), s(e, c), e.components = e.extraComponents.concat(le);
                        var t = {
                                data: [],
                                addPreprocessedComponent: function(n, r) {
                                    "function" === typeof e.preprocessor && (r = e.preprocessor(n, r)), t.data.push({
                                        key: n,
                                        value: r
                                    })
                                }
                            },
                            r = -1,
                            a = function(o) {
                                if ((r += 1) >= e.components.length) n(t.data);
                                else {
                                    var i = e.components[r];
                                    if (e.excludes[i.key]) a(!1);
                                    else {
                                        if (!o && i.pauseBefore) return r -= 1, void setTimeout((function() {
                                            a(!0)
                                        }), 1);
                                        try {
                                            i.getData((function(e) {
                                                t.addPreprocessedComponent(i.key, e), a(!1)
                                            }), e)
                                        } catch (c) {
                                            t.addPreprocessedComponent(i.key, String(c)), a(!1)
                                        }
                                    }
                                }
                            };
                        a(!1)
                    }, se.getPromise = function(e) {
                        return new Promise((function(n, t) {
                            se.get(e, n)
                        }))
                    }, se.getV18 = function(e, n) {
                        return null == n && (n = e, e = {}), se.get(e, (function(t) {
                            for (var r = [], a = 0; a < t.length; a++) {
                                var o = t[a];
                                if (o.value === (e.NOT_AVAILABLE || "not available")) r.push({
                                    key: o.key,
                                    value: "unknown"
                                });
                                else if ("plugins" === o.key) r.push({
                                    key: "plugins",
                                    value: l(o.value, (function(e) {
                                        var n = l(e[2], (function(e) {
                                            return e.join ? e.join("~") : e
                                        })).join(",");
                                        return [e[0], e[1], n].join("::")
                                    }))
                                });
                                else if (-1 !== ["canvas", "webgl"].indexOf(o.key)) r.push({
                                    key: o.key,
                                    value: o.value.join("~")
                                });
                                else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(o.key)) {
                                    if (!o.value) continue;
                                    r.push({
                                        key: o.key,
                                        value: 1
                                    })
                                } else o.value ? r.push(o.value.join ? {
                                    key: o.key,
                                    value: o.value.join(";")
                                } : o) : r.push({
                                    key: o.key,
                                    value: o.value
                                })
                            }
                            var c = i(l(r, (function(e) {
                                return e.value
                            })).join("~~~"), 31);
                            n(c, r)
                        }))
                    }, se.x64hash128 = i, se.VERSION = "2.1.0", se
                }, void 0 === (a = "function" === typeof r ? r.call(n, t, n, e) : r) || (e.exports = a)
            }()
        }
    }
]);
//# debugId=ec4fac1b-0c9d-5e4a-bec6-0b1116637e5e