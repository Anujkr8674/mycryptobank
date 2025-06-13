! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a238d968-dc3d-58c0-a446-f05228dca379")
    } catch (e) {}
}();
(self.webpackChunkconvert_ui = self.webpackChunkconvert_ui || []).push([
    [317], {
        "r/AF": (e, n, t) => {
            "use strict";
            t.d(n, {
                syncLocalDfp: () => zn
            });
            var r, i = t("sViW"),
                a = t("3yYM"),
                o = t.n(a),
                s = "2025.01.10",
                c = "unknown",
                u = "BNC_FV_KEY",
                l = "BNC_FV_KEY_EXPIRE",
                d = !!(null === (r = window) || void 0 === r ? void 0 : r.__RUN_BY_ELECTRON__),
                f = !! function() {
                    try {
                        if (window && window.navigator.userAgent) {
                            var e, n, t, r, i = window.navigator.userAgent;
                            return /BNC\/[\d\.]+/i.test(i) ? null === i || void 0 === i || null === (e = i.match) || void 0 === e || null === (n = e.call(i, /BNC\/[\d\.]+/i)) || void 0 === n || null === (t = n[0]) || void 0 === t || null === (r = t.slice) || void 0 === r ? void 0 : r.call(t, 4) : ""
                        }
                        return ""
                    } catch (a) {
                        return ""
                    }
                }(),
                m = function() {
                    var e;
                    return "undefined" !== typeof(null === window || void 0 === window || null === (e = window.Telegram) || void 0 === e ? void 0 : e.WebApp)
                },
                v = t("BK7R"),
                h = t("QUKP"),
                p = t("2URn"),
                g = function() {
                    return g = Object.assign || function(e) {
                        for (var n, t = 1, r = arguments.length; t < r; t++)
                            for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
                        return e
                    }, g.apply(this, arguments)
                };

            function w(e, n, t, r) {
                return new(t || (t = Promise))((function(i, a) {
                    var o = function(e) {
                            try {
                                c(r.next(e))
                            } catch (n) {
                                a(n)
                            }
                        },
                        s = function(e) {
                            try {
                                c(r.throw(e))
                            } catch (n) {
                                a(n)
                            }
                        },
                        c = function(e) {
                            var n;
                            e.done ? i(e.value) : (n = e.value, (0, p.A)(n, t) ? n : new t((function(e) {
                                e(n)
                            }))).then(o, s)
                        };
                    c((r = r.apply(e, n || [])).next())
                }))
            }

            function b(e, n) {
                var t, r, i, a, o = function(o) {
                        return function(c) {
                            return function(o) {
                                if (t) throw new TypeError("Generator is already executing.");
                                for (; a && (a = 0, o[0] && (s = 0)), s;) try {
                                    if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                                    switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                                        case 0:
                                        case 1:
                                            i = o;
                                            break;
                                        case 4:
                                            return s.label++, {
                                                value: o[1],
                                                done: !1
                                            };
                                        case 5:
                                            s.label++, r = o[1], o = [0];
                                            continue;
                                        case 7:
                                            o = s.ops.pop(), s.trys.pop();
                                            continue;
                                        default:
                                            if (!((i = (i = s.trys).length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                s = 0;
                                                continue
                                            }
                                            if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                                s.label = o[1];
                                                break
                                            }
                                            if (6 === o[0] && s.label < i[1]) {
                                                s.label = i[1], i = o;
                                                break
                                            }
                                            if (i && s.label < i[2]) {
                                                s.label = i[2], s.ops.push(o);
                                                break
                                            }
                                            i[2] && s.ops.pop(), s.trys.pop();
                                            continue
                                    }
                                    o = n.call(e, s)
                                } catch (c) {
                                    o = [6, c], r = 0
                                } finally {
                                    t = i = 0
                                }
                                if (5 & o[0]) throw o[1];
                                return {
                                    value: o[0] ? o[1] : void 0,
                                    done: !0
                                }
                            }([o, c])
                        }
                    },
                    s = {
                        label: 0,
                        sent: function() {
                            if (1 & i[0]) throw i[1];
                            return i[1]
                        },
                        trys: [],
                        ops: []
                    };
                return a = {
                    next: o(0),
                    throw: o(1),
                    return: o(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a
            }

            function y(e, n, t) {
                if (t || 2 === arguments.length)
                    for (var r, i = 0, a = n.length; i < a; i++) !r && i in n || (r || (r = Array.prototype.slice.call(n, 0, i)), r[i] = n[i]);
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

            function x(e, n) {
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

            function A(e, n, t) {
                return void 0 === t && (t = 16), w(this, void 0, void 0, (function() {
                    var r, i, a, o;
                    return b(this, (function(s) {
                        switch (s.label) {
                            case 0:
                                r = Array(e.length), i = Date.now(), a = 0, s.label = 1;
                            case 1:
                                return a < e.length ? (r[a] = n(e[a], a), (o = Date.now()) >= i + t ? (i = o, [4, new Promise((function(e) {
                                    var n = new MessageChannel;
                                    n.port1.onmessage = function() {
                                        return e()
                                    }, n.port2.postMessage(null)
                                }))]) : [3, 3]) : [3, 4];
                            case 2:
                                s.sent(), s.label = 3;
                            case 3:
                                return ++a, [3, 1];
                            case 4:
                                return [2, r]
                        }
                    }))
                }))
            }

            function k(e) {
                return e.then(void 0, (function() {})), e
            }

            function C(e) {
                return parseInt(e)
            }

            function E(e) {
                return parseFloat(e)
            }

            function L(e, n) {
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

            function _(e, n) {
                var t = e[0] >>> 16,
                    r = 65535 & e[0],
                    i = e[1] >>> 16,
                    a = 65535 & e[1],
                    o = n[0] >>> 16,
                    s = 65535 & n[0],
                    c = n[1] >>> 16,
                    u = 0,
                    l = 0,
                    d = 0,
                    f = 0;
                d += (f += a + (65535 & n[1])) >>> 16, f &= 65535, l += (d += i + c) >>> 16, d &= 65535, u += (l += r + s) >>> 16, l &= 65535, u += t + o, u &= 65535, e[0] = u << 16 | l, e[1] = d << 16 | f
            }

            function R(e, n) {
                var t = e[0] >>> 16,
                    r = 65535 & e[0],
                    i = e[1] >>> 16,
                    a = 65535 & e[1],
                    o = n[0] >>> 16,
                    s = 65535 & n[0],
                    c = n[1] >>> 16,
                    u = 65535 & n[1],
                    l = 0,
                    d = 0,
                    f = 0,
                    m = 0;
                f += (m += a * u) >>> 16, m &= 65535, d += (f += i * u) >>> 16, f &= 65535, d += (f += a * c) >>> 16, f &= 65535, l += (d += r * u) >>> 16, d &= 65535, l += (d += i * c) >>> 16, d &= 65535, l += (d += a * s) >>> 16, d &= 65535, l += t * u + r * c + i * s + a * o, l &= 65535, e[0] = l << 16 | d, e[1] = f << 16 | m
            }

            function I(e, n) {
                var t = e[0];
                32 === (n %= 64) ? (e[0] = e[1], e[1] = t) : n < 32 ? (e[0] = t << n | e[1] >>> 32 - n, e[1] = e[1] << n | t >>> 32 - n) : (n -= 32, e[0] = e[1] << n | t >>> 32 - n, e[1] = t << n | e[1] >>> 32 - n)
            }

            function O(e, n) {
                0 !== (n %= 64) && (n < 32 ? (e[0] = e[1] >>> 32 - n, e[1] = e[1] << n) : (e[0] = e[1] << n - 32, e[1] = 0))
            }

            function P(e, n) {
                e[0] ^= n[0], e[1] ^= n[1]
            }
            var N = [4283543511, 3981806797],
                V = [3301882366, 444984403];

            function D(e) {
                var n = [0, e[0] >>> 1];
                P(e, n), R(e, N), n[1] = e[0] >>> 1, P(e, n), R(e, V), n[1] = e[0] >>> 1, P(e, n)
            }
            var F = [2277735313, 289559509],
                G = [1291169091, 658871167],
                W = [0, 5],
                U = [0, 1390208809],
                j = [0, 944331445];

            function Z(e, n) {
                var t = function(e) {
                    for (var n = new Uint8Array(e.length), t = 0; t < e.length; t++) {
                        var r = e.charCodeAt(t);
                        if (r > 127) return (new TextEncoder).encode(e);
                        n[t] = r
                    }
                    return n
                }(e);
                n = n || 0;
                var r, i = [0, t.length],
                    a = i[1] % 16,
                    o = i[1] - a,
                    s = [0, n],
                    c = [0, n],
                    u = [0, 0],
                    l = [0, 0];
                for (r = 0; r < o; r += 16) u[0] = t[r + 4] | t[r + 5] << 8 | t[r + 6] << 16 | t[r + 7] << 24, u[1] = t[r] | t[r + 1] << 8 | t[r + 2] << 16 | t[r + 3] << 24, l[0] = t[r + 12] | t[r + 13] << 8 | t[r + 14] << 16 | t[r + 15] << 24, l[1] = t[r + 8] | t[r + 9] << 8 | t[r + 10] << 16 | t[r + 11] << 24, R(u, F), I(u, 31), R(u, G), P(s, u), I(s, 27), _(s, c), R(s, W), _(s, U), R(l, G), I(l, 33), R(l, F), P(c, l), I(c, 31), _(c, s), R(c, W), _(c, j);
                u[0] = 0, u[1] = 0, l[0] = 0, l[1] = 0;
                var d = [0, 0];
                switch (a) {
                    case 15:
                        d[1] = t[r + 14], O(d, 48), P(l, d);
                    case 14:
                        d[1] = t[r + 13], O(d, 40), P(l, d);
                    case 13:
                        d[1] = t[r + 12], O(d, 32), P(l, d);
                    case 12:
                        d[1] = t[r + 11], O(d, 24), P(l, d);
                    case 11:
                        d[1] = t[r + 10], O(d, 16), P(l, d);
                    case 10:
                        d[1] = t[r + 9], O(d, 8), P(l, d);
                    case 9:
                        d[1] = t[r + 8], P(l, d), R(l, G), I(l, 33), R(l, F), P(c, l);
                    case 8:
                        d[1] = t[r + 7], O(d, 56), P(u, d);
                    case 7:
                        d[1] = t[r + 6], O(d, 48), P(u, d);
                    case 6:
                        d[1] = t[r + 5], O(d, 40), P(u, d);
                    case 5:
                        d[1] = t[r + 4], O(d, 32), P(u, d);
                    case 4:
                        d[1] = t[r + 3], O(d, 24), P(u, d);
                    case 3:
                        d[1] = t[r + 2], O(d, 16), P(u, d);
                    case 2:
                        d[1] = t[r + 1], O(d, 8), P(u, d);
                    case 1:
                        d[1] = t[r], P(u, d), R(u, F), I(u, 31), R(u, G), P(s, u)
                }
                return P(s, i), P(c, i), _(s, c), _(c, s), D(s), D(c), _(s, c), _(c, s), ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (c[1] >>> 0).toString(16)).slice(-8)
            }

            function H(e) {
                return "function" != typeof e
            }

            function X() {
                var e = window,
                    n = navigator;
                return B(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in n, "msPointerEnabled" in n]) >= 4
            }

            function z() {
                var e = window,
                    n = navigator;
                return B(["webkitPersistentStorage" in n, "webkitTemporaryStorage" in n, 0 === n.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
            }

            function Y() {
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

            function q() {
                var e, n, t = window;
                return B(["buildID" in navigator, "MozAppearance" in (null !== (n = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== n ? n : {}), "onmozfullscreenchange" in t, "mozInnerScreenX" in t, "CSSMozDocumentRule" in t, "CanvasCaptureMediaStream" in t]) >= 4
            }

            function Q() {
                var e = window,
                    n = navigator,
                    t = e.CSS,
                    r = e.HTMLButtonElement;
                return B([!("getStorageUpdates" in n), r && "popover" in r.prototype, "CSSCounterStyleRule" in e, t.supports("font-size-adjust: ex-height 0.5"), t.supports("text-transform: full-width")]) >= 4
            }

            function $() {
                var e = z(),
                    n = q(),
                    t = window,
                    r = navigator,
                    i = "connection";
                return e ? B([!("SharedWorker" in t), r[i] && "ontypechange" in r[i], !("sinkId" in new Audio)]) >= 2 : !!n && B(["onorientationchange" in t, "orientation" in t, /android/i.test(r.appVersion)]) >= 2
            }

            function ee(e) {
                var n = new Error(e);
                return n.name = e, n
            }

            function ne(e, n, t) {
                var r, i, a;
                return void 0 === t && (t = 50), w(this, void 0, void 0, (function() {
                    var o, s;
                    return b(this, (function(c) {
                        switch (c.label) {
                            case 0:
                                o = document, c.label = 1;
                            case 1:
                                return o.body ? [3, 3] : [4, S(t)];
                            case 2:
                                return c.sent(), [3, 1];
                            case 3:
                                s = o.createElement("iframe"), c.label = 4;
                            case 4:
                                return c.trys.push([4, , 10, 11]), [4, new Promise((function(e, t) {
                                    var r = !1,
                                        i = function() {
                                            r = !0, e()
                                        };
                                    s.onload = i, s.onerror = function(e) {
                                        r = !0, t(e)
                                    };
                                    var a = s.style;
                                    a.setProperty("display", "block", "important"), a.position = "absolute", a.top = "0", a.left = "0", a.visibility = "hidden", n && "srcdoc" in s ? s.srcdoc = n : s.src = "about:blank", o.body.appendChild(s);
                                    var c = function() {
                                        var e, n;
                                        r || ("complete" === (null === (n = null === (e = s.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === n ? void 0 : n.readyState) ? i() : setTimeout(c, 10))
                                    };
                                    c()
                                }))];
                            case 5:
                                c.sent(), c.label = 6;
                            case 6:
                                return (null === (i = null === (r = s.contentWindow) || void 0 === r ? void 0 : r.document) || void 0 === i ? void 0 : i.body) ? [3, 8] : [4, S(t)];
                            case 7:
                                return c.sent(), [3, 6];
                            case 8:
                                return [4, e(s, s.contentWindow)];
                            case 9:
                                return [2, c.sent()];
                            case 10:
                                return null === (a = s.parentNode) || void 0 === a || a.removeChild(s), [7];
                            case 11:
                                return [2]
                        }
                    }))
                }))
            }

            function te(e) {
                for (var n = function(e) {
                        for (var n, t, r = "Unexpected syntax '".concat(e, "'"), i = /^\s*([a-z-]*)(.*)$/i.exec(e), a = i[1] || void 0, o = {}, s = /([.:#][\w-]+|\[.+?\])/gi, c = function(e, n) {
                                o[e] = o[e] || [], o[e].push(n)
                            };;) {
                            var u = s.exec(i[2]);
                            if (!u) break;
                            var l = u[0];
                            switch (l[0]) {
                                case ".":
                                    c("class", l.slice(1));
                                    break;
                                case "#":
                                    c("id", l.slice(1));
                                    break;
                                case "[":
                                    var d = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(l);
                                    if (!d) throw new Error(r);
                                    c(d[1], null !== (t = null !== (n = d[4]) && void 0 !== n ? n : d[5]) && void 0 !== t ? t : "");
                                    break;
                                default:
                                    throw new Error(r)
                            }
                        }
                        return [a, o]
                    }(e), t = n[0], r = n[1], i = document.createElement(null != t ? t : "div"), a = 0, o = Object.keys(r); a < o.length; a++) {
                    var s = o[a],
                        c = r[s].join(" ");
                    "style" === s ? re(i.style, c) : i.setAttribute(s, c)
                }
                return i
            }

            function re(e, n) {
                for (var t = 0, r = n.split(";"); t < r.length; t++) {
                    var i = r[t],
                        a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(i);
                    if (a) {
                        var o = a[1],
                            s = a[2],
                            c = a[4];
                        e.setProperty(o, s, c || "")
                    }
                }
            }
            var ie, ae, oe = ["monospace", "sans-serif", "serif"],
                se = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

            function ce(e) {
                return e.toDataURL()
            }

            function ue() {
                var e = this;
                return function() {
                        if (void 0 === ae) {
                            var e = function() {
                                var n = le();
                                de(n) ? ae = setTimeout(e, 2500) : (ie = n, ae = void 0)
                            };
                            e()
                        }
                    }(),
                    function() {
                        return w(e, void 0, void 0, (function() {
                            var e;
                            return b(this, (function(n) {
                                switch (n.label) {
                                    case 0:
                                        return de(e = le()) ? ie ? [2, y([], ie, !0)] : function() {
                                            var e = document;
                                            return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
                                        }() ? [4, (t = document, (t.exitFullscreen || t.msExitFullscreen || t.mozCancelFullScreen || t.webkitExitFullscreen).call(t))] : [3, 2] : [3, 2];
                                    case 1:
                                        n.sent(), e = le(), n.label = 2;
                                    case 2:
                                        return de(e) || (ie = e), [2, e]
                                }
                                var t
                            }))
                        }))
                    }
            }

            function le() {
                var e = screen;
                return [L(E(e.availTop), null), L(E(e.width) - E(e.availWidth) - L(E(e.availLeft), 0), null), L(E(e.height) - E(e.availHeight) - L(E(e.availTop), 0), null), L(E(e.availLeft), null)]
            }

            function de(e) {
                for (var n = 0; n < 4; ++n)
                    if (e[n]) return !1;
                return !0
            }

            function fe(e) {
                var n;
                return w(this, void 0, void 0, (function() {
                    var t, r, i, a, o, s, c;
                    return b(this, (function(u) {
                        switch (u.label) {
                            case 0:
                                for (t = document, r = t.createElement("div"), i = new Array(e.length), a = {}, me(r), c = 0; c < e.length; ++c) "DIALOG" === (o = te(e[c])).tagName && o.show(), me(s = t.createElement("div")), s.appendChild(o), r.appendChild(s), i[c] = o;
                                u.label = 1;
                            case 1:
                                return t.body ? [3, 3] : [4, S(50)];
                            case 2:
                                return u.sent(), [3, 1];
                            case 3:
                                t.body.appendChild(r);
                                try {
                                    for (c = 0; c < e.length; ++c) i[c].offsetParent || (a[e[c]] = !0)
                                } finally {
                                    null === (n = r.parentNode) || void 0 === n || n.removeChild(r)
                                }
                                return [2, a]
                        }
                    }))
                }))
            }

            function me(e) {
                e.style.setProperty("visibility", "hidden", "important"), e.style.setProperty("display", "block", "important")
            }

            function ve(e) {
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

            function we(e) {
                return matchMedia("(prefers-reduced-transparency: ".concat(e, ")")).matches
            }

            function be(e) {
                return matchMedia("(dynamic-range: ".concat(e, ")")).matches
            }
            var ye = Math,
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
                xe = new Set([10752, 2849, 2884, 2885, 2886, 2928, 2929, 2930, 2931, 2932, 2960, 2961, 2962, 2963, 2964, 2965, 2966, 2967, 2968, 2978, 3024, 3042, 3088, 3089, 3106, 3107, 32773, 32777, 32777, 32823, 32824, 32936, 32937, 32938, 32939, 32968, 32969, 32970, 32971, 3317, 33170, 3333, 3379, 3386, 33901, 33902, 34016, 34024, 34076, 3408, 3410, 3411, 3412, 3413, 3414, 3415, 34467, 34816, 34817, 34818, 34819, 34877, 34921, 34930, 35660, 35661, 35724, 35738, 35739, 36003, 36004, 36005, 36347, 36348, 36349, 37440, 37441, 37443, 7936, 7937, 7938]),
                Ae = new Set([34047, 35723, 36063, 34852, 34853, 34854, 34229, 36392, 36795, 38449]),
                ke = ["FRAGMENT_SHADER", "VERTEX_SHADER"],
                Ce = ["LOW_FLOAT", "MEDIUM_FLOAT", "HIGH_FLOAT", "LOW_INT", "MEDIUM_INT", "HIGH_INT"];

            function Ee(e) {
                if (e.webgl) return e.webgl.context;
                var n, t = document.createElement("canvas");
                t.addEventListener("webglCreateContextError", (function() {
                    return n = void 0
                }));
                for (var r = 0, i = ["webgl", "experimental-webgl"]; r < i.length; r++) {
                    var a = i[r];
                    try {
                        n = t.getContext(a)
                    } catch (o) {}
                    if (n) break
                }
                return e.webgl = {
                    context: n
                }, n
            }

            function Le(e, n, t) {
                var r = e.getShaderPrecisionFormat(e[n], e[t]);
                return r ? [r.rangeMin, r.rangeMax, r.precision] : []
            }

            function Be(e) {
                return Object.keys(e.__proto__).filter(Me)
            }

            function Me(e) {
                return "string" == typeof e && !e.match(/[^A-Z0-9_x]/)
            }

            function _e() {
                return q()
            }

            function Re(e) {
                return "function" == typeof e.getParameter
            }
            var Ie = {
                fonts: function() {
                    var e = this;
                    return ne((function(n, t) {
                        var r = t.document;
                        return w(e, void 0, void 0, (function() {
                            var e, n, t, i, a, o, s, c, u, l, d;
                            return b(this, (function(f) {
                                for ((e = r.body).style.fontSize = "48px", (n = r.createElement("div")).style.setProperty("visibility", "hidden", "important"), t = {}, i = {}, a = function(e) {
                                        var t = r.createElement("span"),
                                            i = t.style;
                                        return i.position = "absolute", i.top = "0", i.left = "0", i.fontFamily = e, t.textContent = "mmMwWLliI0O&1", n.appendChild(t), t
                                    }, o = function(e, n) {
                                        return a("'".concat(e, "',").concat(n))
                                    }, s = function() {
                                        for (var e = {}, n = function(n) {
                                                e[n] = oe.map((function(e) {
                                                    return o(n, e)
                                                }))
                                            }, t = 0, r = se; t < r.length; t++) n(r[t]);
                                        return e
                                    }, c = function(e) {
                                        return oe.some((function(n, r) {
                                            return e[r].offsetWidth !== t[n] || e[r].offsetHeight !== i[n]
                                        }))
                                    }, u = oe.map(a), l = s(), e.appendChild(n), d = 0; d < oe.length; d++) t[oe[d]] = u[d].offsetWidth, i[oe[d]] = u[d].offsetHeight;
                                return [2, se.filter((function(e) {
                                    return c(l[e])
                                }))]
                            }))
                        }))
                    }))
                },
                domBlockers: function(e) {
                    var n = (void 0 === e ? {} : e).debug;
                    return w(this, void 0, void 0, (function() {
                        var e, t, r, i, a;
                        return b(this, (function(o) {
                            switch (o.label) {
                                case 0:
                                    return Y() || $() ? (s = atob, e = {
                                        abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', s("I0JveC1CYW5uZXItYWRz")],
                                        abpvn: [".quangcao", "#mobileCatfish", s("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                                        adBlockFinland: [".mainostila", s("LnNwb25zb3JpdA=="), ".ylamainos", s("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                                        adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", s("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                                        adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", s("LmhlYWRlci1ibG9ja2VkLWFk"), s("I2FkX2Jsb2NrZXI=")],
                                        adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                                        adGuardBase: [".BetterJsPopOverlay", s("I2FkXzMwMFgyNTA="), s("I2Jhbm5lcmZsb2F0MjI="), s("I2NhbXBhaWduLWJhbm5lcg=="), s("I0FkLUNvbnRlbnQ=")],
                                        adGuardChinese: [s("LlppX2FkX2FfSA=="), s("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", s("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), s("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                                        adGuardFrench: ["#pavePub", s("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", s("LmFkc19iYW4=")],
                                        adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                                        adGuardJapanese: ["#kauli_yad_1", s("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), s("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), s("LmFkZ29vZ2xl"), s("Ll9faXNib29zdFJldHVybkFk")],
                                        adGuardMobile: [s("YW1wLWF1dG8tYWRz"), s("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", s("I2FkX2ludmlld19hcmVh")],
                                        adGuardRussian: [s("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), s("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', s("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                                        adGuardSocial: [s("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), s("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                                        adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                                        adGuardTrackingProtection: ["#qoo-counter", s("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), s("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), s("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                                        adGuardTurkish: ["#backkapat", s("I3Jla2xhbWk="), s("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), s("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), s("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                                        bulgarian: [s("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                                        easyList: [".yb-floorad", s("LndpZGdldF9wb19hZHNfd2lkZ2V0"), s("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", s("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                                        easyListChina: [s("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), s("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                                        easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", s("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                                        easyListCzechSlovak: ["#onlajny-stickers", s("I3Jla2xhbW5pLWJveA=="), s("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", s("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                                        easyListDutch: [s("I2FkdmVydGVudGll"), s("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", s("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                                        easyListGermany: ["#SSpotIMPopSlider", s("LnNwb25zb3JsaW5rZ3J1ZW4="), s("I3dlcmJ1bmdza3k="), s("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), s("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                                        easyListItaly: [s("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", s("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                                        easyListLithuania: [s("LnJla2xhbW9zX3RhcnBhcw=="), s("LnJla2xhbW9zX251b3JvZG9z"), s("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), s("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), s("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                                        estonian: [s("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                                        fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                                        fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                                        fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                                        fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                                        frellwitSwedish: [s("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), s("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", s("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                                        greekAdBlock: [s("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), s("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), s("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                                        hungarian: ["#cemp_doboz", ".optimonk-iframe-container", s("LmFkX19tYWlu"), s("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                                        iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                                        icelandicAbp: [s("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                                        latvian: [s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), s("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                                        listKr: [s("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), s("I2xpdmVyZUFkV3JhcHBlcg=="), s("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), s("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                                        listeAr: [s("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", s("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), s("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), s("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                                        listeFr: [s("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), s("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), s("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                                        officialPolish: ["#ceneo-placeholder-ceneo-12", s("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), s("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), s("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), s("ZGl2I3NrYXBpZWNfYWQ=")],
                                        ro: [s("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), s("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), s("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                                        ruAd: [s("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), s("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), s("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                                        thaiAds: ["a[href*=macau-uta-popup]", s("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), s("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                                        webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", s("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                                    }, t = Object.keys(e), [4, fe((a = []).concat.apply(a, t.map((function(n) {
                                        return e[n]
                                    }))))]) : [2, void 0];
                                case 1:
                                    return r = o.sent(), n && function(e, n) {
                                        for (var t = "DOM blockers debug:\n```", r = 0, i = Object.keys(e); r < i.length; r++) {
                                            var a = i[r];
                                            t += "\n".concat(a, ":");
                                            for (var o = 0, s = e[a]; o < s.length; o++) {
                                                var c = s[o];
                                                t += "\n  ".concat(n[c] ? "\ud83d\udeab" : "\u27a1\ufe0f", " ").concat(c)
                                            }
                                        }
                                        console.log("".concat(t, "\n```"))
                                    }(e, r), (i = t.filter((function(n) {
                                        var t = e[n];
                                        return B(t.map((function(e) {
                                            return r[e]
                                        }))) > .6 * t.length
                                    }))).sort(), [2, i]
                            }
                            var s
                        }))
                    }))
                },
                fontPreferences: function() {
                    return void 0 === e && (e = 4e3), ne((function(n, t) {
                        var r = t.document,
                            i = r.body,
                            a = i.style;
                        a.width = "".concat(e, "px"), a.webkitTextSizeAdjust = a.textSizeAdjust = "none", z() ? i.style.zoom = "".concat(1 / t.devicePixelRatio) : Y() && (i.style.zoom = "reset");
                        var o = r.createElement("div");
                        return o.textContent = y([], Array(e / 20 << 0), !0).map((function() {
                                return "word"
                            })).join(" "), i.appendChild(o),
                            function(e, n) {
                                for (var t = {}, r = {}, i = 0, a = Object.keys(Te); i < a.length; i++) {
                                    var o = a[i],
                                        s = Te[o],
                                        c = s[0],
                                        u = void 0 === c ? {} : c,
                                        l = s[1],
                                        d = void 0 === l ? "mmMwWLliI0fiflO&1" : l,
                                        f = e.createElement("span");
                                    f.textContent = d, f.style.whiteSpace = "nowrap";
                                    for (var m = 0, v = Object.keys(u); m < v.length; m++) {
                                        var h = v[m],
                                            p = u[h];
                                        void 0 !== p && (f.style[h] = p)
                                    }
                                    t[o] = f, n.append(e.createElement("br"), f)
                                }
                                for (var g = 0, w = Object.keys(Te); g < w.length; g++) r[o = w[g]] = t[o].getBoundingClientRect().width;
                                return r
                            }(r, i)
                    }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
                    var e
                },
                audio: function() {
                    return Y() && Q() && K() || z() && function() {
                        var e = navigator,
                            n = window,
                            t = Audio.prototype,
                            r = n.visualViewport;
                        return B(["srLatency" in t, "srChannelCount" in t, "devicePosture" in e, r && "segments" in r, "getTextInformation" in Image.prototype]) >= 3
                    }() && (n = (e = window).URLPattern, B(["union" in Set.prototype, "Iterator" in e, n && "hasRegExpGroups" in n.prototype, "RGB8" in WebGLRenderingContext.prototype]) >= 3) ? -4 : function() {
                        var e = window,
                            n = e.OfflineAudioContext || e.webkitOfflineAudioContext;
                        if (!n) return -2;
                        if (Y() && !J() && ! function() {
                                var e = window;
                                return B(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
                            }()) return -1;
                        var t = new n(1, 5e3, 44100),
                            r = t.createOscillator();
                        r.type = "triangle", r.frequency.value = 1e4;
                        var i = t.createDynamicsCompressor();
                        i.threshold.value = -50, i.knee.value = 40, i.ratio.value = 12, i.attack.value = 0, i.release.value = .25, r.connect(i), i.connect(t.destination), r.start(0);
                        var a = function(e) {
                                var n = function() {};
                                return [new Promise((function(t, r) {
                                    var i = !1,
                                        a = 0,
                                        o = 0;
                                    e.oncomplete = function(e) {
                                        return t(e.renderedBuffer)
                                    };
                                    var s = function() {
                                            setTimeout((function() {
                                                return r(ee("timeout"))
                                            }), Math.min(500, o + 5e3 - Date.now()))
                                        },
                                        c = function() {
                                            try {
                                                var n = e.startRendering();
                                                switch (T(n) && k(n), e.state) {
                                                    case "running":
                                                        o = Date.now(), i && s();
                                                        break;
                                                    case "suspended":
                                                        document.hidden || a++, i && a >= 3 ? r(ee("suspended")) : setTimeout(c, 500)
                                                }
                                            } catch (t) {
                                                r(t)
                                            }
                                        };
                                    c(), n = function() {
                                        i || (i = !0, o > 0 && s())
                                    }
                                })), n]
                            }(t),
                            o = a[0],
                            s = a[1],
                            c = k(o.then((function(e) {
                                return function(e) {
                                    for (var n = 0, t = 0; t < e.length; ++t) n += Math.abs(e[t]);
                                    return n
                                }(e.getChannelData(0).subarray(4500))
                            }), (function(e) {
                                if ("timeout" === e.name || "suspended" === e.name) return -3;
                                throw e
                            })));
                        return function() {
                            return s(), c
                        }
                    }();
                    var e, n
                },
                screenFrame: function() {
                    var e = this;
                    if (Y() && Q() && K()) return function() {
                        return Promise.resolve(void 0)
                    };
                    var n = ue();
                    return function() {
                        return w(e, void 0, void 0, (function() {
                            var e, t;
                            return b(this, (function(r) {
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
                        var n, t, r, i, a, o = !1,
                            s = function() {
                                var e = document.createElement("canvas");
                                return e.width = 1, e.height = 1, [e, e.getContext("2d")]
                            }(),
                            c = s[0],
                            u = s[1];
                        return a = c, u && a.toDataURL ? ((i = u).rect(0, 0, 10, 10), i.rect(2, 2, 6, 6), o = !i.isPointInPath(5, 5, "evenodd"), e ? t = r = "skipped" : (t = (n = function(e, n) {
                            ! function(e, n) {
                                e.width = 240, e.height = 60, n.textBaseline = "alphabetic", n.fillStyle = "#f60", n.fillRect(100, 1, 62, 20), n.fillStyle = "#069", n.font = '11pt "Times New Roman"';
                                var t = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                                n.fillText(t, 2, 15), n.fillStyle = "rgba(102, 204, 0, 0.2)", n.font = "18pt Arial", n.fillText(t, 4, 45)
                            }(e, n);
                            var t = ce(e);
                            return t !== ce(e) ? ["unstable", "unstable"] : (function(e, n) {
                                e.width = 122, e.height = 110, n.globalCompositeOperation = "multiply";
                                for (var t = 0, r = [
                                        ["#f2f", 40, 40],
                                        ["#2ff", 80, 40],
                                        ["#ff2", 60, 80]
                                    ]; t < r.length; t++) {
                                    var i = r[t],
                                        a = i[0],
                                        o = i[1],
                                        s = i[2];
                                    n.fillStyle = a, n.beginPath(), n.arc(o, s, 40, 0, 2 * Math.PI, !0), n.closePath(), n.fill()
                                }
                                n.fillStyle = "#f9c", n.arc(60, 60, 60, 0, 2 * Math.PI, !0), n.arc(60, 60, 20, 0, 2 * Math.PI, !0), n.fill("evenodd")
                            }(e, n), [ce(e), t])
                        }(c, u))[0], r = n[1])) : t = r = "unsupported", {
                            winding: o,
                            geometry: t,
                            text: r
                        }
                    }(Y() && Q() && K())
                },
                osCpu: function() {
                    return navigator.oscpu
                },
                languages: function() {
                    var e, n = navigator,
                        t = [],
                        r = n.language || n.userLanguage || n.browserLanguage || n.systemLanguage;
                    if (void 0 !== r && t.push([r]), Array.isArray(n.languages)) z() && B([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || t.push(n.languages);
                    else if ("string" == typeof n.languages) {
                        var i = n.languages;
                        i && t.push(i.split(","))
                    }
                    return t
                },
                colorDepth: function() {
                    return window.screen.colorDepth
                },
                deviceMemory: function() {
                    return L(E(navigator.deviceMemory), void 0)
                },
                screenResolution: function() {
                    if (!(Y() && Q() && K())) return function() {
                        var e = screen,
                            n = function(e) {
                                return L(C(e), null)
                            },
                            t = [n(e.width), n(e.height)];
                        return t.sort().reverse(), t
                    }()
                },
                hardwareConcurrency: function() {
                    return L(C(navigator.hardwareConcurrency), void 0)
                },
                timezone: function() {
                    var e, n = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
                    if (n) {
                        var t = (new n).resolvedOptions().timeZone;
                        if (t) return t
                    }
                    var r, i = (r = (new Date).getFullYear(), -Math.max(E(new Date(r, 0, 1).getTimezoneOffset()), E(new Date(r, 6, 1).getTimezoneOffset())));
                    return "UTC".concat(i >= 0 ? "+" : "").concat(i)
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
                    return "MacIntel" === e && Y() && !J() ? function() {
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
                                for (var i = [], a = 0; a < r.length; ++a) {
                                    var o = r[a];
                                    i.push({
                                        type: o.type,
                                        suffixes: o.suffixes
                                    })
                                }
                                n.push({
                                    name: r.name,
                                    description: r.description,
                                    mimeTypes: i
                                })
                            }
                        }
                        return n
                    }
                },
                touchSupport: function() {
                    var e, n = navigator,
                        t = 0;
                    void 0 !== n.maxTouchPoints ? t = C(n.maxTouchPoints) : void 0 !== n.msMaxTouchPoints && (t = n.msMaxTouchPoints);
                    try {
                        document.createEvent("TouchEvent"), e = !0
                    } catch (y) {
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
                            i = window[r];
                        i && "object" == typeof i && e.push(r)
                    }
                    return e.sort()
                },
                cookiesEnabled: function() {
                    var e = document;
                    try {
                        e.cookie = "cookietest=1; SameSite=Strict;";
                        var n = -1 !== e.cookie.indexOf("cookietest=");
                        return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", n
                    } catch (b) {
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
                    return !!ve("inverted") || !ve("none") && void 0
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
                    return !!we("reduce") || !we("no-preference") && void 0
                },
                hdr: function() {
                    return !!be("high") || !be("standard") && void 0
                },
                math: function() {
                    var e, n = ye.acos || Se,
                        t = ye.acosh || Se,
                        r = ye.asin || Se,
                        i = ye.asinh || Se,
                        a = ye.atanh || Se,
                        o = ye.atan || Se,
                        s = ye.sin || Se,
                        c = ye.sinh || Se,
                        u = ye.cos || Se,
                        l = ye.cosh || Se,
                        d = ye.tan || Se,
                        f = ye.tanh || Se,
                        m = ye.exp || Se,
                        v = ye.expm1 || Se,
                        h = ye.log1p || Se;
                    return {
                        acos: n(.12312423423423424),
                        acosh: t(1e308),
                        acoshPf: (e = 1e154, ye.log(e + ye.sqrt(e * e - 1))),
                        asin: r(.12312423423423424),
                        asinh: i(1),
                        asinhPf: ye.log(1 + ye.sqrt(2)),
                        atanh: a(.5),
                        atanhPf: ye.log(3) / 2,
                        atan: o(.5),
                        sin: s(-1e300),
                        sinh: c(1),
                        sinhPf: ye.exp(1) - 1 / ye.exp(1) / 2,
                        cos: u(10.000000000123),
                        cosh: l(1),
                        coshPf: (ye.exp(1) + 1 / ye.exp(1)) / 2,
                        tan: d(-1e300),
                        tanh: f(1),
                        tanhPf: (ye.exp(2) - 1) / (ye.exp(2) + 1),
                        exp: m(1),
                        expm1: v(1),
                        expm1Pf: ye.exp(1) - 1,
                        log1p: h(10),
                        log1pPf: ye.log(11),
                        powPI: ye.pow(ye.PI, -100)
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
                    return $() || Y() ? window.AudioContext && null !== (e = (new AudioContext).baseLatency) && void 0 !== e ? e : -1 : -2
                },
                webGlBasics: function(e) {
                    var n, t, r, i, a, o, s = Ee(e.cache);
                    if (!s) return -1;
                    if (!Re(s)) return -2;
                    var c = _e() ? null : s.getExtension("WEBGL_debug_renderer_info");
                    return {
                        version: (null === (n = s.getParameter(s.VERSION)) || void 0 === n ? void 0 : n.toString()) || "",
                        vendor: (null === (t = s.getParameter(s.VENDOR)) || void 0 === t ? void 0 : t.toString()) || "",
                        vendorUnmasked: c ? null === (r = s.getParameter(c.UNMASKED_VENDOR_WEBGL)) || void 0 === r ? void 0 : r.toString() : "",
                        renderer: (null === (i = s.getParameter(s.RENDERER)) || void 0 === i ? void 0 : i.toString()) || "",
                        rendererUnmasked: c ? null === (a = s.getParameter(c.UNMASKED_RENDERER_WEBGL)) || void 0 === a ? void 0 : a.toString() : "",
                        shadingLanguageVersion: (null === (o = s.getParameter(s.SHADING_LANGUAGE_VERSION)) || void 0 === o ? void 0 : o.toString()) || ""
                    }
                },
                webGlExtensions: function(e) {
                    var n = Ee(e.cache);
                    if (!n) return -1;
                    if (!Re(n)) return -2;
                    var t = n.getSupportedExtensions(),
                        r = n.getContextAttributes(),
                        i = [],
                        a = [],
                        o = [],
                        s = [],
                        c = [];
                    if (r)
                        for (var u = 0, l = Object.keys(r); u < l.length; u++) {
                            var d = l[u];
                            a.push("".concat(d, "=").concat(r[d]))
                        }
                    for (var f = 0, m = Be(n); f < m.length; f++) {
                        var v = n[S = m[f]];
                        o.push("".concat(S, "=").concat(v).concat(xe.has(v) ? "=".concat(n.getParameter(v)) : ""))
                    }
                    if (t)
                        for (var h = 0, p = t; h < p.length; h++) {
                            var g = p[h];
                            if (!("WEBGL_debug_renderer_info" === g && _e() || "WEBGL_polygon_mode" === g && (z() || Y()))) {
                                var w = n.getExtension(g);
                                if (w)
                                    for (var b = 0, y = Be(w); b < y.length; b++) {
                                        var S;
                                        v = w[S = y[b]], s.push("".concat(S, "=").concat(v).concat(Ae.has(v) ? "=".concat(n.getParameter(v)) : ""))
                                    } else i.push(g)
                            }
                        }
                    for (var T = 0, x = ke; T < x.length; T++)
                        for (var A = x[T], k = 0, C = Ce; k < C.length; k++) {
                            var E = C[k],
                                L = Le(n, A, E);
                            c.push("".concat(A, ".").concat(E, "=").concat(L.join(",")))
                        }
                    return s.sort(), o.sort(), {
                        contextAttributes: a,
                        parameters: o,
                        shaderPrecisions: c,
                        extensions: t,
                        extensionParameters: s,
                        unsupportedExtensions: i
                    }
                }
            };

            function Oe(e) {
                var n = function(e) {
                        if ($()) return .4;
                        if (Y()) return !J() || Q() && K() ? .3 : .5;
                        var n = "value" in e.platform ? e.platform.value : "";
                        return /^Win/.test(n) ? .6 : /^Mac/.test(n) ? .5 : .7
                    }(e),
                    t = M(.99 + .01 * n, 1e-4);
                return {
                    score: n,
                    comment: "$ if upgrade to Pro: https://fpjs.dev/pro".replace(/\$/g, "".concat(t))
                }
            }

            function Pe(e) {
                return JSON.stringify(e, (function(e, n) {
                    return (0, p.A)(n, Error) ? g({
                        name: (t = n).name,
                        message: t.message,
                        stack: null === (r = t.stack) || void 0 === r ? void 0 : r.split("\n")
                    }, t) : n;
                    var t, r
                }), 2)
            }

            function Ne(e) {
                return Z(function(e) {
                    for (var n = "", t = 0, r = Object.keys(e).sort(); t < r.length; t++) {
                        var i = r[t],
                            a = e[i],
                            o = "error" in a ? "error" : JSON.stringify(a.value);
                        n += "".concat(n ? "|" : "").concat(i.replace(/([:|\\])/g, "\\$1"), ":").concat(o)
                    }
                    return n
                }(e))
            }

            function Ve(e, n) {
                var t = Date.now();
                return {
                    get: function(r) {
                        return w(this, void 0, void 0, (function() {
                            var i, a, o;
                            return b(this, (function(s) {
                                switch (s.label) {
                                    case 0:
                                        return i = Date.now(), [4, e()];
                                    case 1:
                                        return a = s.sent(), o = function(e) {
                                            var n;
                                            return {
                                                get visitorId() {
                                                    return void 0 === n && (n = Ne(this.components)), n
                                                },
                                                set visitorId(e) {
                                                    n = e
                                                },
                                                confidence: Oe(e),
                                                components: e,
                                                version: "4.5.1"
                                            }
                                        }(a), (n || (null == r ? void 0 : r.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(o.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(i - t, "\nvisitorId: ").concat(o.visitorId, "\ncomponents: ").concat(Pe(a), "\n```")), [2, o]
                                }
                            }))
                        }))
                    }
                }
            }
            var De = {
                    load: function(e) {
                        return void 0 === e && (e = {}), w(this, void 0, void 0, (function() {
                            var n, t, r;
                            return b(this, (function(i) {
                                switch (i.label) {
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
                                            })) : S(Math.min(e, n))
                                        }(a, 2 * a))];
                                    case 1:
                                        return i.sent(), r = function(e, n, t, r) {
                                            var i = Object.keys(e).filter((function(e) {
                                                    return ! function(e, n) {
                                                        for (var t = 0, r = e.length; t < r; ++t)
                                                            if (e[t] === n) return !0;
                                                        return !1
                                                    }(t, e)
                                                })),
                                                a = k(A(i, (function(t) {
                                                    return function(e, n) {
                                                        var t = k(new Promise((function(t) {
                                                            var r = Date.now();
                                                            x(e.bind(null, n), (function() {
                                                                for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                                                                var i = Date.now() - r;
                                                                if (!e[0]) return t((function() {
                                                                    return {
                                                                        error: e[1],
                                                                        duration: i
                                                                    }
                                                                }));
                                                                var a = e[1];
                                                                if (H(a)) return t((function() {
                                                                    return {
                                                                        value: a,
                                                                        duration: i
                                                                    }
                                                                }));
                                                                t((function() {
                                                                    return new Promise((function(e) {
                                                                        var n = Date.now();
                                                                        x(a, (function() {
                                                                            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                                                                            var a = i + Date.now() - n;
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
                                                return w(this, void 0, void 0, (function() {
                                                    var e, n, t, o;
                                                    return b(this, (function(s) {
                                                        switch (s.label) {
                                                            case 0:
                                                                return [4, a];
                                                            case 1:
                                                                return [4, A(s.sent(), (function(e) {
                                                                    return k(e())
                                                                }), r)];
                                                            case 2:
                                                                return e = s.sent(), [4, Promise.all(e)];
                                                            case 3:
                                                                for (n = s.sent(), t = {}, o = 0; o < i.length; ++o) t[i[o]] = n[o];
                                                                return [2, t]
                                                        }
                                                    }))
                                                }))
                                            }
                                        }(Ie, {
                                            cache: {},
                                            debug: t
                                        }, []), [2, Ve(r, t)]
                                }
                                var a
                            }))
                        }))
                    },
                    hashComponents: Ne,
                    componentsToDebugString: Pe
                },
                Fe = function() {
                    var e = (0, i.A)(o().mark((function e() {
                        var n, t, r, a, s, c;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return n = function() {
                                        var e, n, t, r;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            platform: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n ? void 0 : n.platform,
                                            version: null === (t = window.Telegram) || void 0 === t || null === (r = t.WebApp) || void 0 === r ? void 0 : r.version
                                        }
                                    }, t = function() {
                                        var e, n, t, r, i, a, o, s, c, u, l, d, f, m, v, h;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            userId: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (t = n.initDataUnsafe) || void 0 === t || null === (r = t.user) || void 0 === r ? void 0 : r.id,
                                            username: null === (i = window.Telegram) || void 0 === i || null === (a = i.WebApp) || void 0 === a || null === (o = a.initDataUnsafe) || void 0 === o || null === (s = o.user) || void 0 === s ? void 0 : s.username,
                                            userLanguageCode: null === (c = window.Telegram) || void 0 === c || null === (u = c.WebApp) || void 0 === u || null === (l = u.initDataUnsafe) || void 0 === l || null === (d = l.user) || void 0 === d ? void 0 : d.language_code,
                                            userIsBot: null === (f = window.Telegram) || void 0 === f || null === (m = f.WebApp) || void 0 === m || null === (v = m.initDataUnsafe) || void 0 === v || null === (h = v.user) || void 0 === h ? void 0 : h.is_bot
                                        }
                                    }, r = function() {
                                        return {
                                            ua: navigator.userAgent
                                        }
                                    }, a = function() {
                                        var e, n, t, r, i, a, o, s, c, u, l, d;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            isBioInited: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (t = n.BiometricManager) || void 0 === t ? void 0 : t.isInited,
                                            isBioAva: null === (r = window.Telegram) || void 0 === r || null === (i = r.WebApp) || void 0 === i || null === (a = i.BiometricManager) || void 0 === a ? void 0 : a.isBiometricAvailable,
                                            bioType: null === (o = window.Telegram) || void 0 === o || null === (s = o.WebApp) || void 0 === s || null === (c = s.BiometricManager) || void 0 === c ? void 0 : c.biometricType,
                                            bioDeviceId: null === (u = window.Telegram) || void 0 === u || null === (l = u.WebApp) || void 0 === l || null === (d = l.BiometricManager) || void 0 === d ? void 0 : d.deviceId
                                        }
                                    }, s = function() {
                                        var e, n, t;
                                        return "undefined" === typeof window.Telegram ? {} : {
                                            chatType: null === (e = window.Telegram) || void 0 === e || null === (n = e.WebApp) || void 0 === n || null === (t = n.initDataUnsafe) || void 0 === t ? void 0 : t.chat_type
                                        }
                                    }, c = function() {
                                        var e = (0, i.A)(o().mark((function e() {
                                            var i, c, u, l, d, f, m, h, p, g, w, b, y, S, T, x, A, k, C, E, L, B;
                                            return o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, De.load();
                                                    case 2:
                                                        return i = e.sent, e.next = 5, i.get();
                                                    case 5:
                                                        return c = e.sent, u = c.components, l = u.applePay, d = u.architecture, f = u.audio, m = u.cookiesEnabled, h = u.cpuClass, p = u.deviceMemory, g = u.fonts, w = u.hardwareConcurrency, b = u.hdr, y = u.languages, S = u.pdfViewerEnabled, T = u.plugins, x = u.screenResolution, A = u.timezone, k = u.touchSupport, C = u.vendor, E = u.webGlBasics, L = {
                                                            applePay: l.value,
                                                            architecture: d.value,
                                                            audio: f.value,
                                                            cookiesEnabled: m.value,
                                                            cpuClass: h.value,
                                                            deviceMemory: p.value,
                                                            fonts: g.value,
                                                            hardwareConcurrency: w.value,
                                                            hdr: b.value,
                                                            languages: y.value,
                                                            pdfViewerEnabled: S.value,
                                                            plugins: T.value,
                                                            screenResolution: x.value,
                                                            timezone: A.value,
                                                            touchSupport: k.value,
                                                            browserVendor: C.value,
                                                            webGlVendor: E.value.vendor,
                                                            webGlVendorUnmasked: E.value.vendorUnmasked,
                                                            webGlRenderer: E.value.renderer,
                                                            webGlRendererUnmasked: E.value.rendererUnmasked,
                                                            webGlVersion: E.value.version
                                                        }, B = (0, v.A)({}, n(), r(), a(), t(), s(), L), console.log(B), e.abrupt("return", {});
                                                    case 11:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), e.prev = 11, e.next = 14, c();
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
            "".concat(u, "_T");

            function We(e) {
                var n, t, r;
                if (!e.t) throw new Error("please make sure config.t and config.domain are not empty");
                return {
                    t: e.t,
                    domain: e.domain || "",
                    storeKey: {
                        device_id_key: (null === e || void 0 === e || null === (n = e.storeKey) || void 0 === n ? void 0 : n.device_id_key) || u,
                        device_dfp_expire_key: (null === e || void 0 === e || null === (t = e.storeKey) || void 0 === t ? void 0 : t.device_dfp_expire_key) || l
                    },
                    fvideo_token_key: "".concat((null === e || void 0 === e || null === (r = e.storeKey) || void 0 === r ? void 0 : r.device_id_key) || u, "_T")
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
            var Ze = function(e) {
                    return -1 === [void 0, null, ""].indexOf(e)
                },
                He = function(e) {
                    if (!Ze(e)) return null;
                    if (d) {
                        if ("BNC-Location" === e) return window.__store.getState().temp.bncLocation;
                        var n = window.localStorage.getItem("APP_COOKIES_".concat(e));
                        return n ? Ue(n) : null
                    }
                    for (var t = "".concat(e, "=").trim(), r = ((document || {}).cookie || "").split(";"), i = 0; i < r.length; i++) {
                        var a = (r[i] || "").trim();
                        if (0 === a.indexOf(t)) {
                            var o = a.slice(t.length).trim();
                            return Ue('"' === o[0] ? o.slice(1, -1) : o)
                        }
                    }
                    return null
                },
                Xe = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 365,
                        r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3];
                    if (Ze(e)) {
                        d && (n ? window.localStorage.setItem("APP_COOKIES_".concat(e), encodeURIComponent(n)) : window.localStorage.removeItem("APP_COOKIES_".concat(e)));
                        var i = ["path=/"];
                        r && i.unshift("Domain=".concat(je())), Number.isNaN(+t) || i.unshift("Max-Age=".concat(Math.floor(86400 * t))), i.unshift("".concat(e, "=").concat(encodeURIComponent(n))), document.cookie = i.join("; ")
                    }
                },
                ze = function(e) {
                    if (!e) return e;
                    try {
                        return JSON.parse(e)
                    } catch (n) {
                        return e
                    }
                },
                Ye = function() {
                    return "undefined" !== typeof localStorage
                },
                Je = function() {
                    return "undefined" !== typeof sessionStorage
                },
                Ke = function(e, n) {
                    var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    if (Ye()) return t.ttl ? localStorage.setItem(e, JSON.stringify({
                        value: n,
                        expire: (new Date).getTime() + t.ttl
                    })) : localStorage.setItem(e, JSON.stringify(n))
                },
                qe = function(e) {
                    if (Ye()) {
                        var n = localStorage.getItem(e),
                            t = ze(n);
                        return t && t.expire ? t.expire && t.expire > (new Date).getTime() ? t.value : null : t
                    }
                },
                Qe = function(e) {
                    var n;
                    n = e, document.cookie = "".concat(n, "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"),
                        function(e) {
                            Ye() && localStorage.removeItem(e)
                        }(e),
                        function(e) {
                            Je() && sessionStorage.removeItem(e)
                        }(e)
                },
                $e = t("F3rx"),
                en = t.n($e),
                nn = function(e, n, t) {
                    var r, i = function(e) {
                            var n = He("cr00");
                            return e.headers = e.headers || {}, e.headers.csrftoken || (e.headers.csrftoken = en()(n || "")), e
                        }(e) || {},
                        a = {
                            method: n || "GET",
                            mode: "cors",
                            headers: i.headers,
                            credentials: i.credentials,
                            body: t
                        };
                    e.headers && e.headers["Content-Type"] || (null === a || void 0 === a || null === (r = a.headers) || void 0 === r || delete r["Content-Type"]);
                    return a
                },
                tn = function() {
                    var e = (0, i.A)(o().mark((function e(n, t) {
                        var r;
                        return o().wrap((function(e) {
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
                    var e = (0, i.A)(o().mark((function e(n, t) {
                        var r, i, a = arguments;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = a.length > 2 && void 0 !== a[2] ? a[2] : {}, i = nn(r, "POST", t), e.abrupt("return", tn(n, i));
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
                        i = !1,
                        a = void 0;
                    try {
                        for (var o, s = n[Symbol.iterator](); !(r = (o = s.next()).done); r = !0) {
                            var c = o.value;
                            if (null !== c && void 0 !== c) return c
                        }
                    } catch (u) {
                        i = !0, a = u
                    } finally {
                        try {
                            r || null == s.return || s.return()
                        } finally {
                            if (i) throw a
                        }
                    }
                    return null
                },
                sn = function(e) {
                    var n, t = e.storeKey.device_id_key,
                        r = e.fvideo_token_key,
                        i = He(t),
                        a = null === (n = qe(t)) || void 0 === n ? void 0 : n.value,
                        o = He(r),
                        s = function(e) {
                            if (Ye()) return localStorage.getItem(e)
                        }(r);
                    return {
                        dfp: on(i, a),
                        dt: on(o, s)
                    }
                },
                cn = function(e, n, t) {
                    var r = t.storeKey,
                        i = r.device_id_key,
                        a = r.device_dfp_expire_key,
                        o = t.fvideo_token_key,
                        s = Date.now() + 216e5;
                    Xe(i, e, 365), Xe(o, n, 365), Xe(a, s, 365), Ke(i, (0, an.A)({
                            value: e
                        }, a, s)),
                        function(e, n) {
                            if (Ye()) localStorage.setItem(e, n)
                        }(o, n)
                },
                un = function(e) {
                    var n = e.storeKey.device_dfp_expire_key,
                        t = He(n);
                    null != t && (t = Number(t));
                    var r = qe(n);
                    return null != r && "string" === typeof r && (r = Number(t)), on(t, r)
                };
            var ln = 2654435769;

            function dn(e, n) {
                var t = e.length,
                    r = t << 2;
                if (n) {
                    var i = e[t - 1];
                    if (i < (r -= 4) - 3 || i > r) return null;
                    r = i
                }
                for (var a = 0; a < t; a++) e[a] = String.fromCharCode(255 & e[a], e[a] >>> 8 & 255, e[a] >>> 16 & 255, e[a] >>> 24 & 255);
                var o = e.join("");
                return n ? o.substring(0, r) : o
            }

            function fn(e, n) {
                var t, r = e.length,
                    i = r >> 2;
                0 !== (3 & r) && ++i, n ? (t = new Array(i + 1))[i] = r : t = new Array(i);
                for (var a = 0; a < r; ++a) t[a >> 2] |= e.charCodeAt(a) << ((3 & a) << 3);
                return t
            }

            function mn(e) {
                return 4294967295 & e
            }

            function vn(e, n, t, r, i, a) {
                return (t >>> 5 ^ n << 2) + (n >>> 3 ^ t << 4) ^ (e ^ n) + (a[3 & r ^ i] ^ t)
            }

            function hn(e) {
                return e.length < 4 && (e.length = 4), e
            }

            function pn(e) {
                if (/^[\x00-\x7f]*$/.test(e)) return e;
                for (var n = [], t = e.length, r = 0, i = 0; r < t; ++r, ++i) {
                    var a = e.charCodeAt(r);
                    if (a < 128) n[i] = e.charAt(r);
                    else if (a < 2048) n[i] = String.fromCharCode(192 | a >> 6, 128 | 63 & a);
                    else {
                        if (!(a < 55296 || a > 57343)) {
                            if (r + 1 < t) {
                                var o = e.charCodeAt(r + 1);
                                if (a < 56320 && 56320 <= o && o <= 57343) {
                                    var s = 65536 + ((1023 & a) << 10 | 1023 & o);
                                    n[i] = String.fromCharCode(240 | s >> 18 & 63, 128 | s >> 12 & 63, 128 | s >> 6 & 63, 128 | 63 & s), ++r;
                                    continue
                                }
                            }
                            throw new Error("Malformed string")
                        }
                        n[i] = String.fromCharCode(224 | a >> 12, 128 | a >> 6 & 63, 128 | 63 & a)
                    }
                }
                return n.join("")
            }

            function gn(e, n) {
                return (void 0 === n || null === n || n < 0) && (n = e.length), 0 === n ? "" : /^[\x00-\x7f]*$/.test(e) || !/^[\x00-\xff]*$/.test(e) ? n === e.length ? e : e.substr(0, n) : n < 32767 ? function(e, n) {
                    for (var t = new Array(n), r = 0, i = 0, a = e.length; r < n && i < a; r++) {
                        var o = e.charCodeAt(i++);
                        switch (o >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                t[r] = o;
                                break;
                            case 12:
                            case 13:
                                if (!(i < a)) throw new Error("Unfinished UTF-8 octet sequence");
                                t[r] = (31 & o) << 6 | 63 & e.charCodeAt(i++);
                                break;
                            case 14:
                                if (!(i + 1 < a)) throw new Error("Unfinished UTF-8 octet sequence");
                                t[r] = (15 & o) << 12 | (63 & e.charCodeAt(i++)) << 6 | 63 & e.charCodeAt(i++);
                                break;
                            case 15:
                                if (!(i + 2 < a)) throw new Error("Unfinished UTF-8 octet sequence");
                                var s = ((7 & o) << 18 | (63 & e.charCodeAt(i++)) << 12 | (63 & e.charCodeAt(i++)) << 6 | 63 & e.charCodeAt(i++)) - 65536;
                                if (!(0 <= s && s <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + s.toString(16));
                                t[r++] = s >> 10 & 1023 | 55296, t[r] = 1023 & s | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + o.toString(16))
                        }
                    }
                    return r < n && (t.length = r), String.fromCharCode.apply(String, t)
                }(e, n) : function(e, n) {
                    for (var t = [], r = new Array(32768), i = 0, a = 0, o = e.length; i < n && a < o; i++) {
                        var s = e.charCodeAt(a++);
                        switch (s >> 4) {
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 5:
                            case 6:
                            case 7:
                                r[i] = s;
                                break;
                            case 12:
                            case 13:
                                if (!(a < o)) throw new Error("Unfinished UTF-8 octet sequence");
                                r[i] = (31 & s) << 6 | 63 & e.charCodeAt(a++);
                                break;
                            case 14:
                                if (!(a + 1 < o)) throw new Error("Unfinished UTF-8 octet sequence");
                                r[i] = (15 & s) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++);
                                break;
                            case 15:
                                if (!(a + 2 < o)) throw new Error("Unfinished UTF-8 octet sequence");
                                var c = ((7 & s) << 18 | (63 & e.charCodeAt(a++)) << 12 | (63 & e.charCodeAt(a++)) << 6 | 63 & e.charCodeAt(a++)) - 65536;
                                if (!(0 <= c && c <= 1048575)) throw new Error("Character outside valid Unicode range: 0x" + c.toString(16));
                                r[i++] = c >> 10 & 1023 | 55296, r[i] = 1023 & c | 56320;
                                break;
                            default:
                                throw new Error("Bad UTF-8 encoding 0x" + s.toString(16))
                        }
                        if (i >= 32766) {
                            var u = i + 1;
                            r.length = u, t[t.length] = String.fromCharCode.apply(String, r), n -= u, i = -1
                        }
                    }
                    return i > 0 && (r.length = i, t[t.length] = String.fromCharCode.apply(String, r)), t.join("")
                }(e, n)
            }

            function wn(e, n) {
                return void 0 === e || null === e || 0 === e.length ? e : (e = pn(e), n = pn(n), dn(function(e, n) {
                    var t, r, i, a, o, s, c = e.length,
                        u = c - 1;
                    for (r = e[u], i = 0, s = 0 | Math.floor(6 + 52 / c); s > 0; --s) {
                        for (a = (i = mn(i + ln)) >>> 2 & 3, o = 0; o < u; ++o) t = e[o + 1], r = e[o] = mn(e[o] + vn(i, t, r, o, a, n));
                        t = e[0], r = e[u] = mn(e[u] + vn(i, t, r, u, a, n))
                    }
                    return e
                }(fn(e, !0), hn(fn(n, !1))), !1))
            }

            function bn(e, n) {
                return void 0 === e || null === e || 0 === e.length ? e : (n = pn(n), gn(dn(function(e, n) {
                    var t, r, i, a, o, s = e.length,
                        c = s - 1;
                    for (t = e[0], i = mn(Math.floor(6 + 52 / s) * ln); 0 !== i; i = mn(i - ln)) {
                        for (a = i >>> 2 & 3, o = c; o > 0; --o) r = e[o - 1], t = e[o] = mn(e[o] - vn(i, t, r, o, a, n));
                        r = e[c], t = e[0] = mn(e[0] - vn(i, t, r, 0, a, n))
                    }
                    return e
                }(fn(e, !1), hn(fn(n, !1))), !0)))
            }
            const yn = {
                utf8Encode: pn,
                utf8Decode: gn,
                encrypt: wn,
                encryptToBase64: function(e, n) {
                    return function() {
                        var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split("");
                        return function(n) {
                            var t, r, i, a, o, s, c;
                            for (r = i = 0, a = n.length, s = (a -= o = a % 3) / 3 << 2, o > 0 && (s += 4), t = new Array(s); r < a;) c = n.charCodeAt(r++) << 16 | n.charCodeAt(r++) << 8 | n.charCodeAt(r++), t[i++] = e[c >> 18] + e[c >> 12 & 63] + e[c >> 6 & 63] + e[63 & c];
                            return 1 == o ? (c = n.charCodeAt(r++), t[i++] = e[c >> 2] + e[(3 & c) << 4] + "==") : 2 == o && (c = n.charCodeAt(r++) << 8 | n.charCodeAt(r++), t[i++] = e[c >> 10] + e[c >> 4 & 63] + e[(15 & c) << 2] + "="), t.join("")
                        }
                    }()(wn(e, n))
                },
                decrypt: bn,
                decryptFromBase64: function(e, n) {
                    return void 0 === e || null === e || 0 === e.length ? e : bn(function() {
                        var e = [-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1];
                        return function(n) {
                            var t, r, i, a, o, s, c, u, l, d;
                            if ((c = n.length) % 4 !== 0) return "";
                            if (/[^ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789\+\/\=]/.test(n)) return "";
                            for (l = c, (u = "=" == n.charAt(c - 2) ? 1 : "=" == n.charAt(c - 1) ? 2 : 0) > 0 && (l -= 4), l = 3 * (l >> 2) + u, d = new Array(l), o = s = 0; o < c && -1 != (t = e[n.charCodeAt(o++)]) && -1 != (r = e[n.charCodeAt(o++)]) && (d[s++] = String.fromCharCode(t << 2 | (48 & r) >> 4), -1 != (i = e[n.charCodeAt(o++)])) && (d[s++] = String.fromCharCode((15 & r) << 4 | (60 & i) >> 2), -1 != (a = e[n.charCodeAt(o++)]));) d[s++] = String.fromCharCode((3 & i) << 6 | a);
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
                        i = yn.encryptToBase64(r, n),
                        a = function(e) {
                            var n = 0,
                                t = !0,
                                r = !1,
                                i = void 0;
                            try {
                                for (var a, o = e[Symbol.iterator](); !(t = (a = o.next()).done); t = !0) n ^= a.value.charCodeAt(0)
                            } catch (c) {
                                r = !0, i = c
                            } finally {
                                try {
                                    t || null == o.return || o.return()
                                } finally {
                                    if (r) throw i
                                }
                            }
                            var s = n.toString(16);
                            return 2 === s.length ? s : "0".concat(s)
                        }("".concat(n).concat(i));
                    return "".concat(n).concat(i).concat(a)
                },
                Tn = function(e, n, t) {
                    var r = "".concat(e.domain, "/fvideo/dt/sign/").concat(t, "?en=YDS&t=").concat(e.t, "&v=").concat(s),
                        i = Sn(JSON.stringify(n));
                    try {
                        rn(r, i, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(n) {
                            n.success && cn(n.dfp, n.dt, e)
                        }))
                    } catch (a) {}
                },
                xn = function(e, n, t, r, i) {
                    var a = t || n,
                        o = "".concat(e.domain, "/fvideo/dt/report/").concat(i, "?en=YDS&t=").concat(e.t, "&v=").concat(s),
                        c = Sn(JSON.stringify((0, h.A)((0, v.A)({}, r), {
                            dfp: a
                        })));
                    try {
                        rn(o, c, {
                            headers: {
                                "Content-Type": "application/json"
                            }
                        }).then((function(n) {
                            n.success && cn(n.dfp, n.dt, e)
                        }))
                    } catch (u) {}
                },
                An = function(e) {
                    Qe(e.storeKey.device_id_key), Qe(e.storeKey.device_dfp_expire_key), Qe(e.fvideo_token_key);
                    var n = He("BNC_TG_FV_KEY"),
                        t = He("BNC_TG_FV_KEY_T");
                    return Qe("BNC_TG_FV_KEY"), Qe("BNC_TG_FV_KEY_T"), Qe("BNC_TG_FV_UT"), {
                        dfp: n,
                        dt: t
                    }
                };

            function kn(e) {
                return Cn.apply(this, arguments)
            }

            function Cn() {
                return (Cn = (0, i.A)(o().mark((function e(n) {
                    var t, r, i, a, s, c, u, l;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, !f) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (t = We(n), r = sn(t), i = r.dfp, a = r.dt, s = un(t), i && i.startsWith("3") && (c = An(t), i = c.dfp, a = c.dt, s = null), !(i && a && s && Number(s) > Date.now())) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                return e.next = 13, Ge();
                            case 13:
                                u = e.sent, l = (0, h.A)((0, v.A)({}, u), {
                                    deviceTime: Date.now()
                                }), i ? xn(t, i, a, l, "tgma") : Tn(t, l, "tgma"), e.next = 21;
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
            var En, Ln = t("3as9"),
                Bn = t("4TZb"),
                Mn = t.n(Bn),
                _n = function(e) {
                    var n, t = Math.floor(Math.abs(e) / 60),
                        r = Math.abs(e % 60);
                    return n = 0 === r ? "".concat(t.toString().padStart(2, "0"), ":00") : "".concat(t.toString().padStart(2, "0"), ":").concat(r.toString().padStart(2, "0")), n = e > 0 ? "-".concat(n) : "+".concat(n), "GMT".concat(n)
                },
                Rn = function(e) {
                    var n = e.plugins || e.regular_plugins || e.ie_plugins;
                    if (!Array.isArray(n)) return c;
                    var t = [];
                    return n.forEach((function(e) {
                        t.push(e[0])
                    })), t.length > 500 ? t.slice(0, 500).join(",") : t.join(",")
                },
                In = function(e) {
                    var n = e[1].replace("canvas fp:data:image/png;base64,", "");
                    try {
                        var t = function(e) {
                            var n, t, r, i = "";
                            for (n = 0, t = (e += "").length; n < t; n++) i += (r = e.charCodeAt(n).toString(16)).length < 2 ? "0".concat(r) : r;
                            return i
                        }(atob(n).slice(-16, -12));
                        return t
                    } catch (r) {
                        return console.warn("Failed to get canvas code: ", r), c
                    }
                },
                On = function(e) {
                    var n = {
                        screenResolution: c,
                        avaScreenResolution: c
                    };
                    return e.screenResolution && (n.screenResolution = e.screenResolution.join(",")), e.availableScreenResolution && (n.avaScreenResolution = e.availableScreenResolution.join(",")), n
                },
                Pn = function(e) {
                    var n = {
                        vendor: c,
                        renderer: c
                    };
                    if (!e || !e.length) return n;
                    for (var t = e.length, r = 0, i = 0; i < t; i++) {
                        var a = e[i] || "";
                        if (a.indexOf("webgl unmasked vendor:") > -1 ? (n.vendor = a.split("webgl unmasked vendor:")[1] || c, r += 1) : a.indexOf("webgl unmasked renderer:") > -1 && (n.renderer = a.split("webgl unmasked renderer:")[1] || c, r += 1), 2 === r) break
                    }
                    return n
                },
                Nn = {
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

            function Vn() {
                return En = En || (new Ln.UAParser).getResult()
            }
            var Dn = c,
                Fn = function() {
                    var e = Vn().os;
                    return e && e.name ? "".concat(e.name, " ").concat(e.version) : Dn
                },
                Gn = function() {
                    var e = Vn().device;
                    return e && e.model ? [e.type, e.vendor, e.model, ""].join(" ") : Dn
                },
                Wn = function() {
                    var e = Vn(),
                        n = e.browser,
                        t = e.os || {};
                    return n && n.name ? "".concat(n.name, " V").concat(n.version, " (").concat(t.name || "", ")") : Dn
                },
                Un = function() {
                    var e = (0, i.A)(o().mark((function e() {
                        var n, t, r, a;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 2;
                                    break;
                                case 2:
                                    if (n = "FV_INFO", t = (0, v.A)({}, Nn), !(r = ze(qe(n)))) {
                                        e.next = 8;
                                        break
                                    }
                                    return r.deviceTime = Date.now(), e.abrupt("return", r);
                                case 8:
                                    return a = function() {
                                        var e = (0, i.A)(o().mark((function e() {
                                            var r, i, a, s, c, u;
                                            return o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.next = 2, Mn().getPromise({
                                                            excludes: t
                                                        });
                                                    case 2:
                                                        return r = e.sent, i = r.reduce((function(e, n) {
                                                            return e[n.key] = n.value, e
                                                        }), {}), a = Pn(i.webgl), s = On(i), c = {
                                                            resolution: s.screenResolution,
                                                            availableResolution: s.avaScreenResolution,
                                                            systemVersion: Fn(),
                                                            brandModel: Gn(),
                                                            sysLanguage: i.language,
                                                            timezone: _n(i.timezoneOffset),
                                                            timezoneOffset: i.timezoneOffset,
                                                            ua: i.userAgent,
                                                            pluginList: Rn(i),
                                                            canvas: In(i.canvas),
                                                            webglVendor: a.vendor,
                                                            webglRenderer: a.renderer,
                                                            audio: i.audio,
                                                            platform: i.platform,
                                                            webTimezone: i.timezone,
                                                            cpuClass: i.cpuClass,
                                                            doNotTrack: i.doNotTrack,
                                                            deviceName: Wn(),
                                                            domain: document.domain
                                                        }, u = Object.keys(c).sort().map((function(e) {
                                                            return c[e]
                                                        })), c.fingerprint = Mn().x64hash128(u.join(""), 32), Ke(n, JSON.stringify(c), {
                                                            ttl: 864e5
                                                        }), e.abrupt("return", c);
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
            const jn = Un;
            var Zn = function(e) {
                Qe(e.storeKey.device_id_key), Qe(e.storeKey.device_dfp_expire_key), Qe(e.fvideo_token_key)
            };

            function Hn(e) {
                return Xn.apply(this, arguments)
            }

            function Xn() {
                return (Xn = (0, i.A)(o().mark((function e(n) {
                    var t, r, i, a, s, c, u;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (e.prev = 0, !f) {
                                    e.next = 3;
                                    break
                                }
                                return e.abrupt("return");
                            case 3:
                                if (t = We(n), r = sn(t), i = r.dfp, a = r.dt, s = un(t), i && i.startsWith("7") && (Zn(t), i = null, a = null), !(i && a && s && Number(s) > Date.now())) {
                                    e.next = 11;
                                    break
                                }
                                return e.abrupt("return");
                            case 11:
                                return e.next = 13, jn();
                            case 13:
                                c = e.sent, u = (0, h.A)((0, v.A)({}, c), {
                                    deviceTime: Date.now()
                                }), i ? xn(t, i, a, u, "web") : Tn(t, u, "web"), e.next = 21;
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
            "".concat(u, "_T");

            function zn(e) {
                return Yn.apply(this, arguments)
            }

            function Yn() {
                return (Yn = (0, i.A)(o().mark((function e(n) {
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                if (!m()) {
                                    e.next = 5;
                                    break
                                }
                                return e.next = 3, kn(n);
                            case 3:
                                e.next = 7;
                                break;
                            case 5:
                                return e.next = 7, Hn(n);
                            case 7:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                })))).apply(this, arguments)
            }
        },
        "4TZb": function(e, n, t) {
            var r, i;
            ! function(a, o, s) {
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
                        i = function(e, n) {
                            return [e[0] ^ n[0], e[1] ^ n[1]]
                        },
                        a = function(e) {
                            return e = i(e, [0, e[0] >>> 1]), e = n(e, [4283543511, 3981806797]), e = i(e, [0, e[0] >>> 1]), e = n(e, [3301882366, 444984403]), e = i(e, [0, e[0] >>> 1])
                        },
                        o = function(o, s) {
                            s = s || 0;
                            for (var c = (o = o || "").length % 16, u = o.length - c, l = [0, s], d = [0, s], f = [0, 0], m = [0, 0], v = [2277735313, 289559509], h = [1291169091, 658871167], p = 0; p < u; p += 16) f = [255 & o.charCodeAt(p + 4) | (255 & o.charCodeAt(p + 5)) << 8 | (255 & o.charCodeAt(p + 6)) << 16 | (255 & o.charCodeAt(p + 7)) << 24, 255 & o.charCodeAt(p) | (255 & o.charCodeAt(p + 1)) << 8 | (255 & o.charCodeAt(p + 2)) << 16 | (255 & o.charCodeAt(p + 3)) << 24], m = [255 & o.charCodeAt(p + 12) | (255 & o.charCodeAt(p + 13)) << 8 | (255 & o.charCodeAt(p + 14)) << 16 | (255 & o.charCodeAt(p + 15)) << 24, 255 & o.charCodeAt(p + 8) | (255 & o.charCodeAt(p + 9)) << 8 | (255 & o.charCodeAt(p + 10)) << 16 | (255 & o.charCodeAt(p + 11)) << 24], f = n(f, v), f = t(f, 31), f = n(f, h), l = i(l, f), l = t(l, 27), l = e(l, d), l = e(n(l, [0, 5]), [0, 1390208809]), m = n(m, h), m = t(m, 33), m = n(m, v), d = i(d, m), d = t(d, 31), d = e(d, l), d = e(n(d, [0, 5]), [0, 944331445]);
                            switch (f = [0, 0], m = [0, 0], c) {
                                case 15:
                                    m = i(m, r([0, o.charCodeAt(p + 14)], 48));
                                case 14:
                                    m = i(m, r([0, o.charCodeAt(p + 13)], 40));
                                case 13:
                                    m = i(m, r([0, o.charCodeAt(p + 12)], 32));
                                case 12:
                                    m = i(m, r([0, o.charCodeAt(p + 11)], 24));
                                case 11:
                                    m = i(m, r([0, o.charCodeAt(p + 10)], 16));
                                case 10:
                                    m = i(m, r([0, o.charCodeAt(p + 9)], 8));
                                case 9:
                                    m = i(m, [0, o.charCodeAt(p + 8)]), m = n(m, h), m = t(m, 33), m = n(m, v), d = i(d, m);
                                case 8:
                                    f = i(f, r([0, o.charCodeAt(p + 7)], 56));
                                case 7:
                                    f = i(f, r([0, o.charCodeAt(p + 6)], 48));
                                case 6:
                                    f = i(f, r([0, o.charCodeAt(p + 5)], 40));
                                case 5:
                                    f = i(f, r([0, o.charCodeAt(p + 4)], 32));
                                case 4:
                                    f = i(f, r([0, o.charCodeAt(p + 3)], 24));
                                case 3:
                                    f = i(f, r([0, o.charCodeAt(p + 2)], 16));
                                case 2:
                                    f = i(f, r([0, o.charCodeAt(p + 1)], 8));
                                case 1:
                                    f = i(f, [0, o.charCodeAt(p)]), f = n(f, v), f = t(f, 31), f = n(f, h), l = i(l, f)
                            }
                            return l = i(l, [0, o.length]), d = i(d, [0, o.length]), l = e(l, d), d = e(d, l), l = a(l), d = a(d), l = e(l, d), d = e(d, l), ("00000000" + (l[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (l[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (d[1] >>> 0).toString(16)).slice(-8)
                        },
                        s = {
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
                        c = function(e, n) {
                            if (Array.prototype.forEach && e.forEach === Array.prototype.forEach) e.forEach(n);
                            else if (e.length === +e.length)
                                for (var t = 0, r = e.length; t < r; t++) n(e[t], t, e);
                            else
                                for (var i in e) e.hasOwnProperty(i) && n(e[i], i, e)
                        },
                        u = function(e, n) {
                            var t = [];
                            return null == e ? t : Array.prototype.map && e.map === Array.prototype.map ? e.map(n) : (c(e, (function(e, r, i) {
                                t.push(n(e, r, i))
                            })), t)
                        },
                        l = function(e, n) {
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
                        m = function(e, n) {
                            var t = n.audio;
                            if (t.excludeIOS11 && navigator.userAgent.match(/OS 11.+Version\/11.+Safari/)) return e(n.EXCLUDED);
                            var r = window.OfflineAudioContext || window.webkitOfflineAudioContext;
                            if (null == r) return e(n.NOT_AVAILABLE);
                            var i = new r(1, 44100, 44100),
                                a = i.createOscillator();
                            a.type = "triangle", a.frequency.setValueAtTime(1e4, i.currentTime);
                            var o = i.createDynamicsCompressor();
                            c([
                                ["threshold", -50],
                                ["knee", 40],
                                ["ratio", 12],
                                ["reduction", -20],
                                ["attack", 0],
                                ["release", .25]
                            ], (function(e) {
                                void 0 !== o[e[0]] && "function" === typeof o[e[0]].setValueAtTime && o[e[0]].setValueAtTime(e[1], i.currentTime)
                            })), a.connect(o), o.connect(i.destination), a.start(0), i.startRendering();
                            var s = setTimeout((function() {
                                return console.warn('Audio fingerprint timed out. Please report bug at https://github.com/Valve/fingerprintjs2 with your user agent: "' + navigator.userAgent + '".'), i.oncomplete = function() {}, i = null, e("audioTimeout")
                            }), t.timeout);
                            i.oncomplete = function(n) {
                                var t;
                                try {
                                    clearTimeout(s), t = n.renderedBuffer.getChannelData(0).slice(4500, 5e3).reduce((function(e, n) {
                                        return e + Math.abs(n)
                                    }), 0).toString(), a.disconnect(), o.disconnect()
                                } catch (r) {
                                    return void e(r)
                                }
                                e(t)
                            }
                        },
                        v = function(e, n) {
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
                        w = function(e, n) {
                            e(F(n))
                        },
                        b = function(e, n) {
                            e(G(n))
                        },
                        y = function(e, n) {
                            e(W(n))
                        },
                        S = function(e, n) {
                            e(j(n))
                        },
                        T = function(e, n) {
                            e(Z(n))
                        },
                        x = function(e, n) {
                            e(H(n))
                        },
                        A = function(e, n) {
                            ne() ? e(z(n)) : e(n.NOT_AVAILABLE)
                        },
                        k = function(e, n) {
                            te() ? e(Y()) : e(n.NOT_AVAILABLE)
                        },
                        C = function(e) {
                            te() ? e(J()) : e()
                        },
                        E = function(e) {
                            e(K())
                        },
                        L = function(e) {
                            e(q())
                        },
                        B = function(e) {
                            e(Q())
                        },
                        M = function(e) {
                            e($())
                        },
                        _ = function(e) {
                            e(ee())
                        },
                        R = function(e, n) {
                            return ie() ? ae() ? n.fonts.swfPath ? void se((function(n) {
                                e(n)
                            }), n) : e("missing options.fonts.swfPath") : e("flash not installed") : e("swf object not loaded")
                        },
                        I = function(e, n) {
                            re() ? n.plugins.excludeIE ? e(n.EXCLUDED) : e(P(n)) : e(O(n))
                        },
                        O = function(e) {
                            if (null == navigator.plugins) return e.NOT_AVAILABLE;
                            for (var n = [], t = 0, r = navigator.plugins.length; t < r; t++) navigator.plugins[t] && n.push(navigator.plugins[t]);
                            return N(e) && (n = n.sort((function(e, n) {
                                return e.name > n.name ? 1 : e.name < n.name ? -1 : 0
                            }))), u(n, (function(e) {
                                var n = u(e, (function(e) {
                                    return [e.type, e.suffixes]
                                }));
                                return [e.name, e.description, n]
                            }))
                        },
                        P = function(e) {
                            var n = [];
                            Object.getOwnPropertyDescriptor && Object.getOwnPropertyDescriptor(window, "ActiveXObject") || "ActiveXObject" in window ? n = u(["AcroPDF.PDF", "Adodb.Stream", "AgControl.AgControl", "DevalVRXCtrl.DevalVRXCtrl.1", "MacromediaFlashPaper.MacromediaFlashPaper", "Msxml2.DOMDocument", "Msxml2.XMLHTTP", "PDF.PdfCtrl", "QuickTime.QuickTime", "QuickTimeCheckObject.QuickTimeCheck.1", "RealPlayer", "RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", "RealVideo.RealVideo(tm) ActiveX Control (32-bit)", "Scripting.Dictionary", "SWCtl.SWCtl", "Shell.UIHelper", "ShockwaveFlash.ShockwaveFlash", "Skype.Detection", "TDCCtl.TDCCtl", "WMPlayer.OCX", "rmocx.RealPlayer G2 Control", "rmocx.RealPlayer G2 Control.1"], (function(n) {
                                try {
                                    return new window.ActiveXObject(n), n
                                } catch (t) {
                                    return e.ERROR
                                }
                            })) : n.push(e.NOT_AVAILABLE);
                            return navigator.plugins && (n = n.concat(O(e))), n
                        },
                        N = function(e) {
                            for (var n = !1, t = 0, r = e.plugins.sortPluginsFor.length; t < r; t++) {
                                var i = e.plugins.sortPluginsFor[t];
                                if (navigator.userAgent.match(i)) {
                                    n = !0;
                                    break
                                }
                            }
                            return n
                        },
                        V = function(e) {
                            e(X())
                        },
                        D = function(e, n) {
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
                        Z = function(e) {
                            return navigator.platform ? navigator.platform : e.NOT_AVAILABLE
                        },
                        H = function(e) {
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
                        z = function(e) {
                            var n = [],
                                t = document.createElement("canvas");
                            t.width = 2e3, t.height = 200, t.style.display = "inline";
                            var r = t.getContext("2d");
                            return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), n.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", e.dontUseFakeFontInCanvas ? r.font = "11pt Arial" : r.font = "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz, \ud83d\ude03", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill("evenodd"), t.toDataURL && n.push("canvas fp:" + t.toDataURL()), n
                        },
                        Y = function() {
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
                            if (!(e = ce())) return null;
                            var r = [],
                                i = "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}",
                                a = "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}",
                                o = e.createBuffer();
                            e.bindBuffer(e.ARRAY_BUFFER, o);
                            var s = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                            e.bufferData(e.ARRAY_BUFFER, s, e.STATIC_DRAW), o.itemSize = 3, o.numItems = 3;
                            var u = e.createProgram(),
                                l = e.createShader(e.VERTEX_SHADER);
                            e.shaderSource(l, i), e.compileShader(l);
                            var d = e.createShader(e.FRAGMENT_SHADER);
                            e.shaderSource(d, a), e.compileShader(d), e.attachShader(u, l), e.attachShader(u, d), e.linkProgram(u), e.useProgram(u), u.vertexPosAttrib = e.getAttribLocation(u, "attrVertex"), u.offsetUniform = e.getUniformLocation(u, "uniformOffset"), e.enableVertexAttribArray(u.vertexPosArray), e.vertexAttribPointer(u.vertexPosAttrib, o.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(u.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, o.numItems);
                            try {
                                r.push(e.canvas.toDataURL())
                            } catch (m) {}
                            r.push("extensions:" + (e.getSupportedExtensions() || []).join(";")), r.push("webgl aliased line width range:" + n(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), r.push("webgl aliased point size range:" + n(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), r.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), r.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), r.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), r.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), r.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), r.push("webgl max anisotropy:" + t(e)), r.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), r.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), r.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), r.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), r.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), r.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), r.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), r.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), r.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), r.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), r.push("webgl max viewport dims:" + n(e.getParameter(e.MAX_VIEWPORT_DIMS))), r.push("webgl red bits:" + e.getParameter(e.RED_BITS)), r.push("webgl renderer:" + e.getParameter(e.RENDERER)), r.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), r.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), r.push("webgl vendor:" + e.getParameter(e.VENDOR)), r.push("webgl version:" + e.getParameter(e.VERSION));
                            try {
                                var f = e.getExtension("WEBGL_debug_renderer_info");
                                f && (r.push("webgl unmasked vendor:" + e.getParameter(f.UNMASKED_VENDOR_WEBGL)), r.push("webgl unmasked renderer:" + e.getParameter(f.UNMASKED_RENDERER_WEBGL)))
                            } catch (m) {}
                            return e.getShaderPrecisionFormat ? (c(["FLOAT", "INT"], (function(n) {
                                c(["VERTEX", "FRAGMENT"], (function(t) {
                                    c(["HIGH", "MEDIUM", "LOW"], (function(i) {
                                        c(["precision", "rangeMin", "rangeMax"], (function(a) {
                                            var o = e.getShaderPrecisionFormat(e[t + "_SHADER"], e[i + "_" + n])[a];
                                            "precision" !== a && (a = "precision " + a);
                                            var s = ["webgl ", t.toLowerCase(), " shader ", i.toLowerCase(), " ", n.toLowerCase(), " ", a, ":", o].join("");
                                            r.push(s)
                                        }))
                                    }))
                                }))
                            })), r) : r
                        },
                        J = function() {
                            try {
                                var e = ce(),
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
                        q = function() {
                            if ("undefined" !== typeof navigator.languages) try {
                                if (navigator.languages[0].substr(0, 2) !== navigator.language.substr(0, 2)) return !0
                            } catch (e) {
                                return !0
                            }
                            return !1
                        },
                        Q = function() {
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
                            var r, i = eval.toString().length;
                            if (37 === i && "Safari" !== e && "Firefox" !== e && "Other" !== e) return !0;
                            if (39 === i && "Internet Explorer" !== e && "Other" !== e) return !0;
                            if (33 === i && "Chrome" !== e && "Opera" !== e && "Other" !== e) return !0;
                            try {
                                throw "a"
                            } catch (a) {
                                try {
                                    a.toSource(), r = !0
                                } catch (o) {
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
                            var e = ce();
                            return !!window.WebGLRenderingContext && !!e
                        },
                        re = function() {
                            return "Microsoft Internet Explorer" === navigator.appName || !("Netscape" !== navigator.appName || !/Trident/.test(navigator.userAgent))
                        },
                        ie = function() {
                            return "undefined" !== typeof window.swfobject
                        },
                        ae = function() {
                            return window.swfobject.hasFlashPlayerVersion("9.0.0")
                        },
                        oe = function(e) {
                            var n = document.createElement("div");
                            n.setAttribute("id", e.fonts.swfContainerId), document.body.appendChild(n)
                        },
                        se = function(e, n) {
                            var t = "___fp_swf_loaded";
                            window[t] = function(n) {
                                e(n)
                            };
                            var r = n.fonts.swfContainerId;
                            oe();
                            var i = {
                                    onReady: t
                                },
                                a = {
                                    allowScriptAccess: "always",
                                    menu: "false"
                                };
                            window.swfobject.embedSWF(n.fonts.swfPath, r, "1", "1", "9.0.0", !1, i, a, {})
                        },
                        ce = function() {
                            var e = document.createElement("canvas"),
                                n = null;
                            try {
                                n = e.getContext("webgl") || e.getContext("experimental-webgl")
                            } catch (t) {}
                            return n || (n = null), n
                        },
                        ue = [{
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
                            getData: D
                        }, {
                            key: "screenResolution",
                            getData: v
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
                            getData: w
                        }, {
                            key: "localStorage",
                            getData: b
                        }, {
                            key: "indexedDb",
                            getData: y
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
                            getData: x
                        }, {
                            key: "plugins",
                            getData: I
                        }, {
                            key: "canvas",
                            getData: A
                        }, {
                            key: "webgl",
                            getData: k
                        }, {
                            key: "webglVendorAndRenderer",
                            getData: C
                        }, {
                            key: "adBlock",
                            getData: E
                        }, {
                            key: "hasLiedLanguages",
                            getData: L
                        }, {
                            key: "hasLiedResolution",
                            getData: B
                        }, {
                            key: "hasLiedOs",
                            getData: M
                        }, {
                            key: "hasLiedBrowser",
                            getData: _
                        }, {
                            key: "touchSupport",
                            getData: V
                        }, {
                            key: "fonts",
                            getData: function(e, n) {
                                var t = ["monospace", "sans-serif", "serif"],
                                    r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"];
                                if (n.fonts.extendedJsFonts) {
                                    var i = ["Abadi MT Condensed Light", "Academy Engraved LET", "ADOBE CASLON PRO", "Adobe Garamond", "ADOBE GARAMOND PRO", "Agency FB", "Aharoni", "Albertus Extra Bold", "Albertus Medium", "Algerian", "Amazone BT", "American Typewriter", "American Typewriter Condensed", "AmerType Md BT", "Andalus", "Angsana New", "AngsanaUPC", "Antique Olive", "Aparajita", "Apple Chancery", "Apple Color Emoji", "Apple SD Gothic Neo", "Arabic Typesetting", "ARCHER", "ARNO PRO", "Arrus BT", "Aurora Cn BT", "AvantGarde Bk BT", "AvantGarde Md BT", "AVENIR", "Ayuthaya", "Bandy", "Bangla Sangam MN", "Bank Gothic", "BankGothic Md BT", "Baskerville", "Baskerville Old Face", "Batang", "BatangChe", "Bauer Bodoni", "Bauhaus 93", "Bazooka", "Bell MT", "Bembo", "Benguiat Bk BT", "Berlin Sans FB", "Berlin Sans FB Demi", "Bernard MT Condensed", "BernhardFashion BT", "BernhardMod BT", "Big Caslon", "BinnerD", "Blackadder ITC", "BlairMdITC TT", "Bodoni 72", "Bodoni 72 Oldstyle", "Bodoni 72 Smallcaps", "Bodoni MT", "Bodoni MT Black", "Bodoni MT Condensed", "Bodoni MT Poster Compressed", "Bookshelf Symbol 7", "Boulder", "Bradley Hand", "Bradley Hand ITC", "Bremen Bd BT", "Britannic Bold", "Broadway", "Browallia New", "BrowalliaUPC", "Brush Script MT", "Californian FB", "Calisto MT", "Calligrapher", "Candara", "CaslonOpnface BT", "Castellar", "Centaur", "Cezanne", "CG Omega", "CG Times", "Chalkboard", "Chalkboard SE", "Chalkduster", "Charlesworth", "Charter Bd BT", "Charter BT", "Chaucer", "ChelthmITC Bk BT", "Chiller", "Clarendon", "Clarendon Condensed", "CloisterBlack BT", "Cochin", "Colonna MT", "Constantia", "Cooper Black", "Copperplate", "Copperplate Gothic", "Copperplate Gothic Bold", "Copperplate Gothic Light", "CopperplGoth Bd BT", "Corbel", "Cordia New", "CordiaUPC", "Cornerstone", "Coronet", "Cuckoo", "Curlz MT", "DaunPenh", "Dauphin", "David", "DB LCD Temp", "DELICIOUS", "Denmark", "DFKai-SB", "Didot", "DilleniaUPC", "DIN", "DokChampa", "Dotum", "DotumChe", "Ebrima", "Edwardian Script ITC", "Elephant", "English 111 Vivace BT", "Engravers MT", "EngraversGothic BT", "Eras Bold ITC", "Eras Demi ITC", "Eras Light ITC", "Eras Medium ITC", "EucrosiaUPC", "Euphemia", "Euphemia UCAS", "EUROSTILE", "Exotc350 Bd BT", "FangSong", "Felix Titling", "Fixedsys", "FONTIN", "Footlight MT Light", "Forte", "FrankRuehl", "Fransiscan", "Freefrm721 Blk BT", "FreesiaUPC", "Freestyle Script", "French Script MT", "FrnkGothITC Bk BT", "Fruitger", "FRUTIGER", "Futura", "Futura Bk BT", "Futura Lt BT", "Futura Md BT", "Futura ZBlk BT", "FuturaBlack BT", "Gabriola", "Galliard BT", "Gautami", "Geeza Pro", "Geometr231 BT", "Geometr231 Hv BT", "Geometr231 Lt BT", "GeoSlab 703 Lt BT", "GeoSlab 703 XBd BT", "Gigi", "Gill Sans", "Gill Sans MT", "Gill Sans MT Condensed", "Gill Sans MT Ext Condensed Bold", "Gill Sans Ultra Bold", "Gill Sans Ultra Bold Condensed", "Gisha", "Gloucester MT Extra Condensed", "GOTHAM", "GOTHAM BOLD", "Goudy Old Style", "Goudy Stout", "GoudyHandtooled BT", "GoudyOLSt BT", "Gujarati Sangam MN", "Gulim", "GulimChe", "Gungsuh", "GungsuhChe", "Gurmukhi MN", "Haettenschweiler", "Harlow Solid Italic", "Harrington", "Heather", "Heiti SC", "Heiti TC", "HELV", "Herald", "High Tower Text", "Hiragino Kaku Gothic ProN", "Hiragino Mincho ProN", "Hoefler Text", "Humanst 521 Cn BT", "Humanst521 BT", "Humanst521 Lt BT", "Imprint MT Shadow", "Incised901 Bd BT", "Incised901 BT", "Incised901 Lt BT", "INCONSOLATA", "Informal Roman", "Informal011 BT", "INTERSTATE", "IrisUPC", "Iskoola Pota", "JasmineUPC", "Jazz LET", "Jenson", "Jester", "Jokerman", "Juice ITC", "Kabel Bk BT", "Kabel Ult BT", "Kailasa", "KaiTi", "Kalinga", "Kannada Sangam MN", "Kartika", "Kaufmann Bd BT", "Kaufmann BT", "Khmer UI", "KodchiangUPC", "Kokila", "Korinna BT", "Kristen ITC", "Krungthep", "Kunstler Script", "Lao UI", "Latha", "Leelawadee", "Letter Gothic", "Levenim MT", "LilyUPC", "Lithograph", "Lithograph Light", "Long Island", "Lydian BT", "Magneto", "Maiandra GD", "Malayalam Sangam MN", "Malgun Gothic", "Mangal", "Marigold", "Marion", "Marker Felt", "Market", "Marlett", "Matisse ITC", "Matura MT Script Capitals", "Meiryo", "Meiryo UI", "Microsoft Himalaya", "Microsoft JhengHei", "Microsoft New Tai Lue", "Microsoft PhagsPa", "Microsoft Tai Le", "Microsoft Uighur", "Microsoft YaHei", "Microsoft Yi Baiti", "MingLiU", "MingLiU_HKSCS", "MingLiU_HKSCS-ExtB", "MingLiU-ExtB", "Minion", "Minion Pro", "Miriam", "Miriam Fixed", "Mistral", "Modern", "Modern No. 20", "Mona Lisa Solid ITC TT", "Mongolian Baiti", "MONO", "MoolBoran", "Mrs Eaves", "MS LineDraw", "MS Mincho", "MS PMincho", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MUSEO", "MV Boli", "Nadeem", "Narkisim", "NEVIS", "News Gothic", "News GothicMT", "NewsGoth BT", "Niagara Engraved", "Niagara Solid", "Noteworthy", "NSimSun", "Nyala", "OCR A Extended", "Old Century", "Old English Text MT", "Onyx", "Onyx BT", "OPTIMA", "Oriya Sangam MN", "OSAKA", "OzHandicraft BT", "Palace Script MT", "Papyrus", "Parchment", "Party LET", "Pegasus", "Perpetua", "Perpetua Titling MT", "PetitaBold", "Pickwick", "Plantagenet Cherokee", "Playbill", "PMingLiU", "PMingLiU-ExtB", "Poor Richard", "Poster", "PosterBodoni BT", "PRINCETOWN LET", "Pristina", "PTBarnum BT", "Pythagoras", "Raavi", "Rage Italic", "Ravie", "Ribbon131 Bd BT", "Rockwell", "Rockwell Condensed", "Rockwell Extra Bold", "Rod", "Roman", "Sakkal Majalla", "Santa Fe LET", "Savoye LET", "Sceptre", "Script", "Script MT Bold", "SCRIPTINA", "Serifa", "Serifa BT", "Serifa Th BT", "ShelleyVolante BT", "Sherwood", "Shonar Bangla", "Showcard Gothic", "Shruti", "Signboard", "SILKSCREEN", "SimHei", "Simplified Arabic", "Simplified Arabic Fixed", "SimSun", "SimSun-ExtB", "Sinhala Sangam MN", "Sketch Rockwell", "Skia", "Small Fonts", "Snap ITC", "Snell Roundhand", "Socket", "Souvenir Lt BT", "Staccato222 BT", "Steamer", "Stencil", "Storybook", "Styllo", "Subway", "Swis721 BlkEx BT", "Swiss911 XCm BT", "Sylfaen", "Synchro LET", "System", "Tamil Sangam MN", "Technical", "Teletype", "Telugu Sangam MN", "Tempus Sans ITC", "Terminal", "Thonburi", "Traditional Arabic", "Trajan", "TRAJAN PRO", "Tristan", "Tubular", "Tunga", "Tw Cen MT", "Tw Cen MT Condensed", "Tw Cen MT Condensed Extra Bold", "TypoUpright BT", "Unicorn", "Univers", "Univers CE 55 Medium", "Univers Condensed", "Utsaah", "Vagabond", "Vani", "Vijaya", "Viner Hand ITC", "VisualUI", "Vivaldi", "Vladimir Script", "Vrinda", "Westminster", "WHITNEY", "Wide Latin", "ZapfEllipt BT", "ZapfHumnst BT", "ZapfHumnst Dm BT", "Zapfino", "Zurich BlkEx BT", "Zurich Ex BT", "ZWAdobeF"];
                                    r = r.concat(i)
                                }
                                r = (r = r.concat(n.fonts.userDefinedFonts)).filter((function(e, n) {
                                    return r.indexOf(e) === n
                                }));
                                var a = "mmmmmmmmmmlli",
                                    o = "72px",
                                    s = document.getElementsByTagName("body")[0],
                                    c = document.createElement("div"),
                                    u = document.createElement("div"),
                                    l = {},
                                    d = {},
                                    f = function() {
                                        var e = document.createElement("span");
                                        return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = o, e.style.fontStyle = "normal", e.style.fontWeight = "normal", e.style.letterSpacing = "normal", e.style.lineBreak = "auto", e.style.lineHeight = "normal", e.style.textTransform = "none", e.style.textAlign = "left", e.style.textDecoration = "none", e.style.textShadow = "none", e.style.whiteSpace = "normal", e.style.wordBreak = "normal", e.style.wordSpacing = "normal", e.innerHTML = a, e
                                    },
                                    m = function(e, n) {
                                        var t = f();
                                        return t.style.fontFamily = "'" + e + "'," + n, t
                                    },
                                    v = function() {
                                        for (var e = [], n = 0, r = t.length; n < r; n++) {
                                            var i = f();
                                            i.style.fontFamily = t[n], c.appendChild(i), e.push(i)
                                        }
                                        return e
                                    },
                                    h = function() {
                                        for (var e = {}, n = 0, i = r.length; n < i; n++) {
                                            for (var a = [], o = 0, s = t.length; o < s; o++) {
                                                var c = m(r[n], t[o]);
                                                u.appendChild(c), a.push(c)
                                            }
                                            e[r[n]] = a
                                        }
                                        return e
                                    },
                                    p = function(e) {
                                        for (var n = !1, r = 0; r < t.length; r++)
                                            if (n = e[r].offsetWidth !== l[t[r]] || e[r].offsetHeight !== d[t[r]]) return n;
                                        return n
                                    },
                                    g = v();
                                s.appendChild(c);
                                for (var w = 0, b = t.length; w < b; w++) l[t[w]] = g[w].offsetWidth, d[t[w]] = g[w].offsetHeight;
                                var y = h();
                                s.appendChild(u);
                                for (var S = [], T = 0, x = r.length; T < x; T++) p(y[r[T]]) && S.push(r[T]);
                                s.removeChild(u), s.removeChild(c), e(S)
                            },
                            pauseBefore: !0
                        }, {
                            key: "fontsFlash",
                            getData: R,
                            pauseBefore: !0
                        }, {
                            key: "audio",
                            getData: m
                        }, {
                            key: "enumerateDevices",
                            getData: d
                        }],
                        le = function(e) {
                            throw new Error("'new Fingerprint()' is deprecated, see https://github.com/Valve/fingerprintjs2#upgrade-guide-from-182-to-200")
                        };
                    return le.get = function(e, n) {
                        n ? e || (e = {}) : (n = e, e = {}), l(e, s), e.components = e.extraComponents.concat(ue);
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
                            i = function(a) {
                                if ((r += 1) >= e.components.length) n(t.data);
                                else {
                                    var o = e.components[r];
                                    if (e.excludes[o.key]) i(!1);
                                    else {
                                        if (!a && o.pauseBefore) return r -= 1, void setTimeout((function() {
                                            i(!0)
                                        }), 1);
                                        try {
                                            o.getData((function(e) {
                                                t.addPreprocessedComponent(o.key, e), i(!1)
                                            }), e)
                                        } catch (s) {
                                            t.addPreprocessedComponent(o.key, String(s)), i(!1)
                                        }
                                    }
                                }
                            };
                        i(!1)
                    }, le.getPromise = function(e) {
                        return new Promise((function(n, t) {
                            le.get(e, n)
                        }))
                    }, le.getV18 = function(e, n) {
                        return null == n && (n = e, e = {}), le.get(e, (function(t) {
                            for (var r = [], i = 0; i < t.length; i++) {
                                var a = t[i];
                                if (a.value === (e.NOT_AVAILABLE || "not available")) r.push({
                                    key: a.key,
                                    value: "unknown"
                                });
                                else if ("plugins" === a.key) r.push({
                                    key: "plugins",
                                    value: u(a.value, (function(e) {
                                        var n = u(e[2], (function(e) {
                                            return e.join ? e.join("~") : e
                                        })).join(",");
                                        return [e[0], e[1], n].join("::")
                                    }))
                                });
                                else if (-1 !== ["canvas", "webgl"].indexOf(a.key)) r.push({
                                    key: a.key,
                                    value: a.value.join("~")
                                });
                                else if (-1 !== ["sessionStorage", "localStorage", "indexedDb", "addBehavior", "openDatabase"].indexOf(a.key)) {
                                    if (!a.value) continue;
                                    r.push({
                                        key: a.key,
                                        value: 1
                                    })
                                } else a.value ? r.push(a.value.join ? {
                                    key: a.key,
                                    value: a.value.join(";")
                                } : a) : r.push({
                                    key: a.key,
                                    value: a.value
                                })
                            }
                            var s = o(u(r, (function(e) {
                                return e.value
                            })).join("~~~"), 31);
                            n(s, r)
                        }))
                    }, le.x64hash128 = o, le.VERSION = "2.1.0", le
                }, void 0 === (i = "function" === typeof r ? r.call(n, t, n, e) : r) || (e.exports = i)
            }()
        },
        "3as9": (e, n, t) => {
            var r;
            ! function(i, a) {
                "use strict";
                var o = "function",
                    s = "undefined",
                    c = "object",
                    u = "string",
                    l = "model",
                    d = "name",
                    f = "type",
                    m = "vendor",
                    v = "version",
                    h = "architecture",
                    p = "console",
                    g = "mobile",
                    w = "tablet",
                    b = "smarttv",
                    y = "wearable",
                    S = "embedded",
                    T = {
                        extend: function(e, n) {
                            var t = {};
                            for (var r in e) n[r] && n[r].length % 2 === 0 ? t[r] = n[r].concat(e[r]) : t[r] = e[r];
                            return t
                        },
                        has: function(e, n) {
                            return typeof e === u && -1 !== n.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return typeof e === u ? e.replace(/[^\d\.]/g, "").split(".")[0] : a
                        },
                        trim: function(e, n) {
                            return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof n === s ? e : e.substring(0, 255)
                        }
                    },
                    x = {
                        rgx: function(e, n) {
                            for (var t, r, i, s, u, l, d = 0; d < n.length && !u;) {
                                var f = n[d],
                                    m = n[d + 1];
                                for (t = r = 0; t < f.length && !u;)
                                    if (u = f[t++].exec(e))
                                        for (i = 0; i < m.length; i++) l = u[++r], typeof(s = m[i]) === c && s.length > 0 ? 2 == s.length ? typeof s[1] == o ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 == s.length ? typeof s[1] !== o || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : a : this[s[0]] = l ? s[1].call(this, l, s[2]) : a : 4 == s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : a) : this[s] = l || a;
                                d += 2
                            }
                        },
                        str: function(e, n) {
                            for (var t in n)
                                if (typeof n[t] === c && n[t].length > 0) {
                                    for (var r = 0; r < n[t].length; r++)
                                        if (T.has(n[t][r], e)) return "?" === t ? a : t
                                } else if (T.has(n[t], e)) return "?" === t ? a : t;
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
                    k = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [v, [d, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [v, [d, "Edge"]],
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                            [d, v],
                            [/opios[\/\s]+([\w\.]+)/i],
                            [v, [d, "Opera Mini"]],
                            [/\sopr\/([\w\.]+)/i],
                            [v, [d, "Opera"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [d, v],
                            [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [v, [d, "UCBrowser"]],
                            [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                            [v, [d, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [v, [d, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [v, [d, "Konqueror"]],
                            [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                            [v, [d, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [v, [d, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Secure Browser"], v
                            ],
                            [/focus\/([\w\.]+)/i],
                            [v, [d, "Firefox Focus"]],
                            [/opt\/([\w\.]+)/i],
                            [v, [d, "Opera Touch"]],
                            [/coc_coc_browser\/([\w\.]+)/i],
                            [v, [d, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [v, [d, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [v, [d, "Opera Coast"]],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [v, [d, "MIUI Browser"]],
                            [/fxios\/([\w\.-]+)/i],
                            [v, [d, "Firefox"]],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [
                                [d, "360 Browser"]
                            ],
                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Browser"], v
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [d, /_/g, " "], v
                            ],
                            [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
                            [d, v],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                            [d],
                            [/;fbav\/([\w\.]+);/i],
                            [v, [d, "Facebook"]],
                            [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                            [
                                [d, "Facebook"]
                            ],
                            [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                            [d, v],
                            [/\bgsa\/([\w\.]+)\s.*safari\//i],
                            [v, [d, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [v, [d, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [d, "Chrome WebView"], v
                            ],
                            [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                            [v, [d, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [d, v],
                            [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                            [v, [d, "Mobile Safari"]],
                            [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                            [v, d],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [d, [v, x.str, A.browser.oldSafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [d, v],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [d, "Netscape"], v
                            ],
                            [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                            [v, [d, "Firefox Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [d, v]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                [h, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [h, T.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [h, "ia32"]
                            ],
                            [/\b(aarch64|armv?8e?l?)\b/i],
                            [
                                [h, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [h, "armhf"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                [h, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                [h, /ower/, "", T.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [h, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [h, T.lowerize]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                            [l, [m, "Samsung"],
                                [f, w]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                            [l, [m, "Samsung"],
                                [f, g]
                            ],
                            [/\((ip(?:hone|od)[\s\w]*);/i],
                            [l, [m, "Apple"],
                                [f, g]
                            ],
                            [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [l, [m, "Apple"],
                                [f, w]
                            ],
                            [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                            [l, [m, "Huawei"],
                                [f, w]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
                            [l, [m, "Huawei"],
                                [f, g]
                            ],
                            [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                            [
                                [l, /_/g, " "],
                                [m, "Xiaomi"],
                                [f, g]
                            ],
                            [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                            [
                                [l, /_/g, " "],
                                [m, "Xiaomi"],
                                [f, w]
                            ],
                            [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                            [l, [m, "OPPO"],
                                [f, g]
                            ],
                            [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                            [l, [m, "Vivo"],
                                [f, g]
                            ],
                            [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                            [l, [m, "Realme"],
                                [f, g]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
                            [l, [m, "Motorola"],
                                [f, g]
                            ],
                            [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [l, [m, "Motorola"],
                                [f, w]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                            [l, [m, "LG"],
                                [f, w]
                            ],
                            [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                            [l, [m, "LG"],
                                [f, g]
                            ],
                            [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                            [l, [m, "Lenovo"],
                                [f, w]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                            [
                                [l, /_/g, " "],
                                [m, "Nokia"],
                                [f, g]
                            ],
                            [/droid.+;\s(pixel\sc)[\s)]/i],
                            [l, [m, "Google"],
                                [f, w]
                            ],
                            [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                            [l, [m, "Google"],
                                [f, g]
                            ],
                            [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [l, [m, "Sony"],
                                [f, g]
                            ],
                            [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                            [
                                [l, "Xperia Tablet"],
                                [m, "Sony"],
                                [f, w]
                            ],
                            [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                            [l, [m, "OnePlus"],
                                [f, g]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                            [l, [m, "Amazon"],
                                [f, w]
                            ],
                            [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                            [
                                [l, "Fire Phone"],
                                [m, "Amazon"],
                                [f, g]
                            ],
                            [/\((playbook);[\w\s\),;-]+(rim)/i],
                            [l, m, [f, w]],
                            [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                            [l, [m, "BlackBerry"],
                                [f, g]
                            ],
                            [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                            [l, [m, "ASUS"],
                                [f, w]
                            ],
                            [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                            [l, [m, "ASUS"],
                                [f, g]
                            ],
                            [/(nexus\s9)/i],
                            [l, [m, "HTC"],
                                [f, w]
                            ],
                            [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [m, [l, /_/g, " "],
                                [f, g]
                            ],
                            [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [l, [m, "Acer"],
                                [f, w]
                            ],
                            [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                            [l, [m, "Meizu"],
                                [f, g]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [m, l, [f, g]],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
                            [m, l, [f, w]],
                            [/\s(surface\sduo)\s/i],
                            [l, [m, "Microsoft"],
                                [f, w]
                            ],
                            [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                            [l, [m, "Fairphone"],
                                [f, g]
                            ],
                            [/\s(u304aa)\sbuild/i],
                            [l, [m, "AT&T"],
                                [f, g]
                            ],
                            [/sie-(\w*)/i],
                            [l, [m, "Siemens"],
                                [f, g]
                            ],
                            [/[;\/]\s?(rct\w+)\sbuild/i],
                            [l, [m, "RCA"],
                                [f, w]
                            ],
                            [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                            [l, [m, "Dell"],
                                [f, w]
                            ],
                            [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                            [l, [m, "Verizon"],
                                [f, w]
                            ],
                            [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                            [l, [m, "Barnes & Noble"],
                                [f, w]
                            ],
                            [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                            [l, [m, "NuVision"],
                                [f, w]
                            ],
                            [/;\s(k88)\sbuild/i],
                            [l, [m, "ZTE"],
                                [f, w]
                            ],
                            [/;\s(nx\d{3}j)\sbuild/i],
                            [l, [m, "ZTE"],
                                [f, g]
                            ],
                            [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                            [l, [m, "Swiss"],
                                [f, g]
                            ],
                            [/[;\/]\s?(zur\d{3})\sbuild/i],
                            [l, [m, "Swiss"],
                                [f, w]
                            ],
                            [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                            [l, [m, "Zeki"],
                                [f, w]
                            ],
                            [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                            [
                                [m, "Dragon Touch"], l, [f, w]
                            ],
                            [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                            [l, [m, "Insignia"],
                                [f, w]
                            ],
                            [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                            [l, [m, "NextBook"],
                                [f, w]
                            ],
                            [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                            [
                                [m, "Voice"], l, [f, g]
                            ],
                            [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                            [
                                [m, "LvTel"], l, [f, g]
                            ],
                            [/;\s(ph-1)\s/i],
                            [l, [m, "Essential"],
                                [f, g]
                            ],
                            [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                            [l, [m, "Envizen"],
                                [f, w]
                            ],
                            [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                            [l, [m, "MachSpeed"],
                                [f, w]
                            ],
                            [/[;\/]\s?tu_(1491)\sbuild/i],
                            [l, [m, "Rotor"],
                                [f, w]
                            ],
                            [/(shield[\w\s]+)\sbuild/i],
                            [l, [m, "Nvidia"],
                                [f, w]
                            ],
                            [/(sprint)\s(\w+)/i],
                            [m, l, [f, g]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [l, /\./g, " "],
                                [m, "Microsoft"],
                                [f, g]
                            ],
                            [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [l, [m, "Zebra"],
                                [f, w]
                            ],
                            [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [l, [m, "Zebra"],
                                [f, g]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                            [m, l, [f, p]],
                            [/droid.+;\s(shield)\sbuild/i],
                            [l, [m, "Nvidia"],
                                [f, p]
                            ],
                            [/(playstation\s[345portablevi]+)/i],
                            [l, [m, "Sony"],
                                [f, p]
                            ],
                            [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                            [l, [m, "Microsoft"],
                                [f, p]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [m, [f, b]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [l, /^/, "SmartTV"],
                                [m, "Samsung"],
                                [f, b]
                            ],
                            [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                            [
                                [m, "LG"],
                                [f, b]
                            ],
                            [/(apple)\s?tv/i],
                            [m, [l, "Apple TV"],
                                [f, b]
                            ],
                            [/crkey/i],
                            [
                                [l, "Chromecast"],
                                [m, "Google"],
                                [f, b]
                            ],
                            [/droid.+aft([\w])(\sbuild\/|\))/i],
                            [l, [m, "Amazon"],
                                [f, b]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [l, [m, "Sharp"],
                                [f, b]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [m, T.trim],
                                [l, T.trim],
                                [f, b]
                            ],
                            [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                            [
                                [f, b]
                            ],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [m, l, [f, y]],
                            [/droid.+;\s(glass)\s\d/i],
                            [l, [m, "Google"],
                                [f, y]
                            ],
                            [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                            [l, [m, "Zebra"],
                                [f, y]
                            ],
                            [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                            [m, [f, S]],
                            [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                            [l, [f, g]],
                            [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                            [l, [f, w]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [f, T.lowerize]
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [l, [m, "Generic"]],
                            [/(phone)/i],
                            [
                                [f, g]
                            ]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [v, [d, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [v, [d, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [d, v],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [v, d]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [d, v],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
                            [d, [v, x.str, A.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [d, "Windows"],
                                [v, x.str, A.os.windows.version]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [v, /_/g, "."],
                                [d, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                            [
                                [d, "Mac OS"],
                                [v, /_/g, "."]
                            ],
                            [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
                            [d, v],
                            [/\(bb(10);/i],
                            [v, [d, "BlackBerry"]],
                            [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                            [v, [d, "Symbian"]],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [d, "Firefox OS"]
                            ],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [v, [d, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [v, [d, "Chromecast"]],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [d, "Chromium OS"], v
                            ],
                            [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
                            [d, v],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [d, "Solaris"], v
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [d, v]
                        ]
                    },
                    C = function(e, n) {
                        if ("object" === typeof e && (n = e, e = a), !(this instanceof C)) return new C(e, n).getResult();
                        var t = e || ("undefined" !== typeof i && i.navigator && i.navigator.userAgent ? i.navigator.userAgent : ""),
                            r = n ? T.extend(k, n) : k;
                        return this.getBrowser = function() {
                            var e = {
                                name: a,
                                version: a
                            };
                            return x.rgx.call(e, t, r.browser), e.major = T.major(e.version), e
                        }, this.getCPU = function() {
                            var e = {
                                architecture: a
                            };
                            return x.rgx.call(e, t, r.cpu), e
                        }, this.getDevice = function() {
                            var e = {
                                vendor: a,
                                model: a,
                                type: a
                            };
                            return x.rgx.call(e, t, r.device), e
                        }, this.getEngine = function() {
                            var e = {
                                name: a,
                                version: a
                            };
                            return x.rgx.call(e, t, r.engine), e
                        }, this.getOS = function() {
                            var e = {
                                name: a,
                                version: a
                            };
                            return x.rgx.call(e, t, r.os), e
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
                            return t = typeof e === u && e.length > 255 ? T.trim(e, 255) : e, this
                        }, this.setUA(t), this
                    };
                C.VERSION = "0.7.28", C.BROWSER = {
                    NAME: d,
                    MAJOR: "major",
                    VERSION: v
                }, C.CPU = {
                    ARCHITECTURE: h
                }, C.DEVICE = {
                    MODEL: l,
                    VENDOR: m,
                    TYPE: f,
                    CONSOLE: p,
                    MOBILE: g,
                    SMARTTV: b,
                    TABLET: w,
                    WEARABLE: y,
                    EMBEDDED: S
                }, C.ENGINE = {
                    NAME: d,
                    VERSION: v
                }, C.OS = {
                    NAME: d,
                    VERSION: v
                }, typeof n !== s ? (e.exports && (n = e.exports = C), n.UAParser = C) : (r = function() {
                    return C
                }.call(n, t, n, e)) === a || (e.exports = r);
                var E = "undefined" !== typeof i && (i.jQuery || i.Zepto);
                if (E && !E.ua) {
                    var L = new C;
                    E.ua = L.getResult(), E.ua.get = function() {
                        return L.getUA()
                    }, E.ua.set = function(e) {
                        L.setUA(e);
                        var n = L.getResult();
                        for (var t in n) E.ua[t] = n[t]
                    }
                }
            }(window)
        }
    }
]);
//# debugId=a238d968-dc3d-58c0-a446-f05228dca379