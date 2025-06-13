! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "9bcf2a97-24f5-5c75-a564-57fd94cc3b47")
    } catch (e) {}
}();
(self.webpackChunkmini_notification_center = self.webpackChunkmini_notification_center || []).push([
    [455], {
        Jfxg: (t, e, r) => {
            "use strict";
            r.d(e, {
                A: () => O
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                s = r("o0Ko"),
                f = r.n(s);

            function u(t) {
                var e = t.img;
                return new Promise((function(t, r) {
                    (function(t) {
                        var e = t.img;
                        return new Promise((function(t) {
                            return t(e)
                        }))
                    })({
                        img: e
                    }).then((function(e) {
                        if (/^http/i.test(e)) {
                            var n = new Image;
                            n.addEventListener("load", (function() {
                                return t(e)
                            })), n.addEventListener("error", (function() {
                                return r(new Error("img load error"))
                            })), n.src = e
                        } else r("image path is null")
                    }))
                }))
            }
            var a = r("OKx2"),
                c = r("eh2c"),
                h = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.$refs = {}, e.setRefs = function(t) {
                            return function(r) {
                                e.$refs[t] = r
                            }
                        }, e
                    }
                    return (0, n.__extends)(e, t), e
                }(o.PureComponent);
            var l = function(t) {
                    return "function" === typeof t
                },
                p = function(t) {
                    return t && "object" === typeof t
                },
                y = function(t, e) {
                    var r = p(t) && !(0, o.isValidElement)(t),
                        n = p(e) && !(0, o.isValidElement)(e);
                    if (r && r === n) {
                        var i = Object.keys(t),
                            s = Object.keys(e);
                        if (i.length === s.length) return Number(i.every((function(r) {
                            return y(t[r], e[r])
                        })))
                    } else {
                        if (l(t) && l(e)) return !0;
                        if ((0, o.isValidElement)(t) && (0, o.isValidElement)(e)) return !0
                    }
                    return t === e
                },
                g = {
                    offset: 0,
                    x: !0
                },
                d = function(t) {
                    function e(r) {
                        var o = t.call(this, r) || this;
                        return o.unmount = !1, o.index = e.count, o.checkUpdate = function() {
                            return o.$refs.root && !o.unmount
                        }, o.checkViewport = function(t) {
                            var r = o.$refs.root,
                                i = o.props,
                                s = i.check,
                                f = i.lazyLoad;
                            if (o.checkUpdate()) {
                                var u = (0, n.__assign)((0, n.__assign)({}, g), s),
                                    c = u.offset,
                                    h = u.x;
                                !f || (0, a.cH)(r, c, h) ? (delete e.instances[o.index], o.inViewPort(t), "componentDidMount" === t && console.warn("Warning: This element is already in the viewport on first render. Lazy loading may not be necessary. Consider removing the lazyLoad prop for better performance and to avoid unnecessary JavaScript execution.", "\nElement:", r)) : e.instances[o.index] = o
                            }
                        }, o.inViewPort = function(t) {
                            return t
                        }, o.equalUpdate = function(t, e) {
                            y(t, e) || o.checkViewport()
                        }, e.count += 1, o
                    }
                    return (0, n.__extends)(e, t), e.prototype.componentDidUpdate = function(t) {
                        var e = this.props,
                            r = (e.check, (0, n.__rest)(e, ["check"])),
                            o = (t.check, (0, n.__rest)(t, ["check"]));
                        this.equalUpdate(o, r)
                    }, e.prototype.componentDidMount = function() {
                        var t = this;
                        window.window === window ? window.requestAnimationFrame((function() {
                            return t.checkViewport("componentDidMount")
                        })) : this.checkViewport("componentDidMount")
                    }, e.prototype.componentWillUnmount = function() {
                        this.unmount = !0, delete e.instances[this.index]
                    }, e.count = 0, e.instances = {}, e.checkViewport = function() {
                        var t = e.instances;
                        Object.keys(t).forEach((function(e) {
                            var r = t[e];
                            r && r.checkViewport()
                        }))
                    }, e
                }(h),
                w = (0, c.nF)(d.checkViewport, 200),
                m = !(0, a.dg)() || {
                    passive: !0,
                    capture: !0
                };
            window.window === window && (window.addEventListener("resize", w, m), document.addEventListener("scroll", w, m), document.addEventListener("transitionend", w, m));
            const b = d;
            var E = r("9xbI");
            const B = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.inViewPort = function() {
                            var t = e.$refs.root,
                                r = e.props,
                                n = r.isBackground;
                            u({
                                img: r.src
                            }).then((function(e) {
                                t.style.backgroundColor = "transparent", n ? (t.style.backgroundSize = "100%", t.style.backgroundPosition = "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundImage = "url('".concat(e, "')")) : t.src = e
                            })).catch((function() {
                                return null
                            }))
                        }, e
                    }
                    return (0, n.__extends)(e, t), e.prototype.render = function() {
                        var t = this.props,
                            e = t.src,
                            r = (t.check, t.lazyLoad, t.isBackground),
                            o = (0, n.__rest)(t, ["src", "check", "lazyLoad", "isBackground"]);
                        return i().createElement(E.A, (0, n.__assign)({}, o, {
                            "data-src": e,
                            ref: this.setRefs("root"),
                            as: r ? "div" : "img"
                        }))
                    }, e
                }(b),
                v = (0, o.forwardRef)((function(t, e) {
                    var r = t.lazyLoad,
                        o = t.src,
                        s = t.isBackground,
                        f = t.check,
                        u = (0, n.__rest)(t, ["lazyLoad", "src", "isBackground", "check"]);
                    return r || s ? i().createElement(B, (0, n.__assign)({
                        lazyLoad: r,
                        src: o,
                        isBackground: s,
                        check: f
                    }, u)) : i().createElement(E.A, (0, n.__assign)({}, u, {
                        as: "img",
                        ref: e,
                        src: o,
                        "data-src": o
                    }))
                }));
            var A = r("qrIQ"),
                I = r("Prrn"),
                U = r("GmLw").hp,
                _ = "/bapi/fe/resource/image",
                R = "https://www.binance.com",
                k = r("AGKK"),
                L = function(t) {
                    var e, r = t.isRound,
                        s = t.isMask,
                        u = t.mode,
                        a = t.responsive,
                        c = t.src,
                        h = (0, n.__rest)(t, ["isRound", "isMask", "mode", "responsive", "src"]),
                        l = (0, o.useState)(!1),
                        p = l[0],
                        y = l[1],
                        g = (0, I.r)().prefixCls,
                        d = f()("".concat(g, "-lazy-img"), ((e = {
                            "data-mask": !!s,
                            "data-round": !!r,
                            "data-lazy-load": !!t.lazyLoad || !!t.isBackground
                        })["data-mode-".concat(null === u || void 0 === u ? void 0 : u.replace(/\s+/g, "-"))] = !!u, e), t.className),
                        w = (0, o.useCallback)((function() {
                            return y(!0)
                        }), []),
                        m = (0, o.useMemo)((function() {
                            return !(a && (a.mobile || a.tablet || a.desktop)) || p ? {
                                default: c
                            } : Object.keys(a).reduce((function(t, e) {
                                return t[e] = function(t, e) {
                                    var r = U.from(t).toString("base64");
                                    try {
                                        var n = new URL(_, "https://www.binance.com");
                                        return n.searchParams.set("image", r), Object.entries(e).forEach((function(t) {
                                            var e = t[0],
                                                r = t[1];
                                            void 0 !== r && n.searchParams.set(e, String(r))
                                        })), "".concat(n.pathname).concat(n.search)
                                    } catch (o) {
                                        return "".concat(_, "?image=").concat(r, "&w=").concat(e.w, "&h=").concat(e.h)
                                    }
                                }(c, a[e]), t
                            }), {})
                        }), [c, a, p]),
                        b = {
                            role: "img",
                            "aria-label": "image",
                            alt: "image"
                        };
                    if ("default" in m) return i().createElement(v, (0, n.__assign)({}, b, h, {
                        className: d,
                        mode: u,
                        src: m.default
                    }));
                    var E = m.mobile,
                        B = m.tablet,
                        L = m.desktop;
                    if (A.lq) {
                        var O = env.API_HOST || R,
                            T = "".concat(O).concat(E || B || L);
                        return i().createElement(v, (0, n.__assign)({}, b, {
                            onError: w
                        }, h, {
                            className: d,
                            mode: u,
                            src: T
                        }))
                    }
                    return i().createElement(k.Ay, {
                        as: "picture"
                    }, i().createElement(k.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 1024px)",
                        srcSet: L
                    }), B && i().createElement(k.Ay, {
                        as: "source",
                        media: "only screen and (min-width: 768px)",
                        srcSet: B
                    }), E && i().createElement(k.Ay, {
                        as: "source",
                        media: "only screen and (max-width: 767px)",
                        srcSet: E
                    }), i().createElement(v, (0, n.__assign)({}, b, {
                        onError: w
                    }, h, {
                        className: d,
                        mode: u,
                        src: L || c
                    })))
                };
            L.displayName = "Image";
            const O = L
        },
        ByND: (t, e, r) => {
            "use strict";
            r.d(e, {
                A: () => l
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                s = r("o0Ko"),
                f = r.n(s),
                u = r("AGKK"),
                a = r("Prrn"),
                c = function(t) {
                    return {
                        animationDelay: "".concat(50 * t, "ms")
                    }
                },
                h = function(t) {
                    var e = (0, a.r)().prefixCls,
                        r = f()("".concat(e, "-spinner__nezha"), t.className);
                    return i().createElement(u.Ay, (0, n.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, t, {
                        className: r
                    }), i().createElement(u.Ay, {
                        className: "nezha-line",
                        style: c(1)
                    }), i().createElement(u.Ay, {
                        className: "nezha-line",
                        style: c(2)
                    }), i().createElement(u.Ay, {
                        className: "nezha-line",
                        style: c(3)
                    }), i().createElement(u.Ay, {
                        className: "nezha-line",
                        style: c(4)
                    }))
                };
            h.displayName = "Spinner";
            const l = h
        },
        TSYQ: (t, e) => {
            var r;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function o() {
                    for (var t = [], e = 0; e < arguments.length; e++) {
                        var r = arguments[e];
                        if (r) {
                            var i = typeof r;
                            if ("string" === i || "number" === i) t.push(r);
                            else if (Array.isArray(r)) {
                                if (r.length) {
                                    var s = o.apply(null, r);
                                    s && t.push(s)
                                }
                            } else if ("object" === i) {
                                if (r.toString !== Object.prototype.toString && !r.toString.toString().includes("[native code]")) {
                                    t.push(r.toString());
                                    continue
                                }
                                for (var f in r) n.call(r, f) && r[f] && t.push(f)
                            }
                        }
                    }
                    return t.join(" ")
                }
                t.exports ? (o.default = o, t.exports = o) : void 0 === (r = function() {
                    return o
                }.apply(e, [])) || (t.exports = r)
            }()
        },
        dEMF: (t, e) => {
            "use strict";
            e.byteLength = function(t) {
                var e = u(t),
                    r = e[0],
                    n = e[1];
                return 3 * (r + n) / 4 - n
            }, e.toByteArray = function(t) {
                var e, r, i = u(t),
                    s = i[0],
                    f = i[1],
                    a = new o(function(t, e, r) {
                        return 3 * (e + r) / 4 - r
                    }(0, s, f)),
                    c = 0,
                    h = f > 0 ? s - 4 : s;
                for (r = 0; r < h; r += 4) e = n[t.charCodeAt(r)] << 18 | n[t.charCodeAt(r + 1)] << 12 | n[t.charCodeAt(r + 2)] << 6 | n[t.charCodeAt(r + 3)], a[c++] = e >> 16 & 255, a[c++] = e >> 8 & 255, a[c++] = 255 & e;
                2 === f && (e = n[t.charCodeAt(r)] << 2 | n[t.charCodeAt(r + 1)] >> 4, a[c++] = 255 & e);
                1 === f && (e = n[t.charCodeAt(r)] << 10 | n[t.charCodeAt(r + 1)] << 4 | n[t.charCodeAt(r + 2)] >> 2, a[c++] = e >> 8 & 255, a[c++] = 255 & e);
                return a
            }, e.fromByteArray = function(t) {
                for (var e, n = t.length, o = n % 3, i = [], s = 16383, f = 0, u = n - o; f < u; f += s) i.push(a(t, f, f + s > u ? u : f + s));
                1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "="));
                return i.join("")
            };
            for (var r = [], n = [], o = "undefined" !== typeof Uint8Array ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, f = i.length; s < f; ++s) r[s] = i[s], n[i.charCodeAt(s)] = s;

            function u(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = t.indexOf("=");
                return -1 === r && (r = e), [r, r === e ? 0 : 4 - r % 4]
            }

            function a(t, e, n) {
                for (var o, i, s = [], f = e; f < n; f += 3) o = (t[f] << 16 & 16711680) + (t[f + 1] << 8 & 65280) + (255 & t[f + 2]), s.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                return s.join("")
            }
            n["-".charCodeAt(0)] = 62, n["_".charCodeAt(0)] = 63
        },
        GmLw: (t, e, r) => {
            "use strict";
            const n = r("dEMF"),
                o = r("1TxV"),
                i = "function" === typeof Symbol && "function" === typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
            e.hp = u, e.IS = 50;
            const s = 2147483647;

            function f(t) {
                if (t > s) throw new RangeError('The value "' + t + '" is invalid for option "size"');
                const e = new Uint8Array(t);
                return Object.setPrototypeOf(e, u.prototype), e
            }

            function u(t, e, r) {
                if ("number" === typeof t) {
                    if ("string" === typeof e) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return h(t)
                }
                return a(t, e, r)
            }

            function a(t, e, r) {
                if ("string" === typeof t) return function(t, e) {
                    "string" === typeof e && "" !== e || (e = "utf8");
                    if (!u.isEncoding(e)) throw new TypeError("Unknown encoding: " + e);
                    const r = 0 | g(t, e);
                    let n = f(r);
                    const o = n.write(t, e);
                    o !== r && (n = n.slice(0, o));
                    return n
                }(t, e);
                if (ArrayBuffer.isView(t)) return function(t) {
                    if (J(t, Uint8Array)) {
                        const e = new Uint8Array(t);
                        return p(e.buffer, e.byteOffset, e.byteLength)
                    }
                    return l(t)
                }(t);
                if (null == t) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t);
                if (J(t, ArrayBuffer) || t && J(t.buffer, ArrayBuffer)) return p(t, e, r);
                if ("undefined" !== typeof SharedArrayBuffer && (J(t, SharedArrayBuffer) || t && J(t.buffer, SharedArrayBuffer))) return p(t, e, r);
                if ("number" === typeof t) throw new TypeError('The "value" argument must not be of type number. Received type number');
                const n = t.valueOf && t.valueOf();
                if (null != n && n !== t) return u.from(n, e, r);
                const o = function(t) {
                    if (u.isBuffer(t)) {
                        const e = 0 | y(t.length),
                            r = f(e);
                        return 0 === r.length || t.copy(r, 0, 0, e), r
                    }
                    if (void 0 !== t.length) return "number" !== typeof t.length || Z(t.length) ? f(0) : l(t);
                    if ("Buffer" === t.type && Array.isArray(t.data)) return l(t.data)
                }(t);
                if (o) return o;
                if ("undefined" !== typeof Symbol && null != Symbol.toPrimitive && "function" === typeof t[Symbol.toPrimitive]) return u.from(t[Symbol.toPrimitive]("string"), e, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof t)
            }

            function c(t) {
                if ("number" !== typeof t) throw new TypeError('"size" argument must be of type number');
                if (t < 0) throw new RangeError('The value "' + t + '" is invalid for option "size"')
            }

            function h(t) {
                return c(t), f(t < 0 ? 0 : 0 | y(t))
            }

            function l(t) {
                const e = t.length < 0 ? 0 : 0 | y(t.length),
                    r = f(e);
                for (let n = 0; n < e; n += 1) r[n] = 255 & t[n];
                return r
            }

            function p(t, e, r) {
                if (e < 0 || t.byteLength < e) throw new RangeError('"offset" is outside of buffer bounds');
                if (t.byteLength < e + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                let n;
                return n = void 0 === e && void 0 === r ? new Uint8Array(t) : void 0 === r ? new Uint8Array(t, e) : new Uint8Array(t, e, r), Object.setPrototypeOf(n, u.prototype), n
            }

            function y(t) {
                if (t >= s) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + s.toString(16) + " bytes");
                return 0 | t
            }

            function g(t, e) {
                if (u.isBuffer(t)) return t.length;
                if (ArrayBuffer.isView(t) || J(t, ArrayBuffer)) return t.byteLength;
                if ("string" !== typeof t) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof t);
                const r = t.length,
                    n = arguments.length > 2 && !0 === arguments[2];
                if (!n && 0 === r) return 0;
                let o = !1;
                for (;;) switch (e) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return K(t).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return Y(t).length;
                    default:
                        if (o) return n ? -1 : K(t).length;
                        e = ("" + e).toLowerCase(), o = !0
                }
            }

            function d(t, e, r) {
                let n = !1;
                if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (e >>>= 0)) return "";
                for (t || (t = "utf8");;) switch (t) {
                    case "hex":
                        return O(this, e, r);
                    case "utf8":
                    case "utf-8":
                        return _(this, e, r);
                    case "ascii":
                        return k(this, e, r);
                    case "latin1":
                    case "binary":
                        return L(this, e, r);
                    case "base64":
                        return U(this, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return T(this, e, r);
                    default:
                        if (n) throw new TypeError("Unknown encoding: " + t);
                        t = (t + "").toLowerCase(), n = !0
                }
            }

            function w(t, e, r) {
                const n = t[e];
                t[e] = t[r], t[r] = n
            }

            function m(t, e, r, n, o) {
                if (0 === t.length) return -1;
                if ("string" === typeof r ? (n = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), Z(r = +r) && (r = o ? 0 : t.length - 1), r < 0 && (r = t.length + r), r >= t.length) {
                    if (o) return -1;
                    r = t.length - 1
                } else if (r < 0) {
                    if (!o) return -1;
                    r = 0
                }
                if ("string" === typeof e && (e = u.from(e, n)), u.isBuffer(e)) return 0 === e.length ? -1 : b(t, e, r, n, o);
                if ("number" === typeof e) return e &= 255, "function" === typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, r) : Uint8Array.prototype.lastIndexOf.call(t, e, r) : b(t, [e], r, n, o);
                throw new TypeError("val must be string, number or Buffer")
            }

            function b(t, e, r, n, o) {
                let i, s = 1,
                    f = t.length,
                    u = e.length;
                if (void 0 !== n && ("ucs2" === (n = String(n).toLowerCase()) || "ucs-2" === n || "utf16le" === n || "utf-16le" === n)) {
                    if (t.length < 2 || e.length < 2) return -1;
                    s = 2, f /= 2, u /= 2, r /= 2
                }

                function a(t, e) {
                    return 1 === s ? t[e] : t.readUInt16BE(e * s)
                }
                if (o) {
                    let n = -1;
                    for (i = r; i < f; i++)
                        if (a(t, i) === a(e, -1 === n ? 0 : i - n)) {
                            if (-1 === n && (n = i), i - n + 1 === u) return n * s
                        } else -1 !== n && (i -= i - n), n = -1
                } else
                    for (r + u > f && (r = f - u), i = r; i >= 0; i--) {
                        let r = !0;
                        for (let n = 0; n < u; n++)
                            if (a(t, i + n) !== a(e, n)) {
                                r = !1;
                                break
                            }
                        if (r) return i
                    }
                return -1
            }

            function E(t, e, r, n) {
                r = Number(r) || 0;
                const o = t.length - r;
                n ? (n = Number(n)) > o && (n = o) : n = o;
                const i = e.length;
                let s;
                for (n > i / 2 && (n = i / 2), s = 0; s < n; ++s) {
                    const n = parseInt(e.substr(2 * s, 2), 16);
                    if (Z(n)) return s;
                    t[r + s] = n
                }
                return s
            }

            function B(t, e, r, n) {
                return W(K(e, t.length - r), t, r, n)
            }

            function v(t, e, r, n) {
                return W(function(t) {
                    const e = [];
                    for (let r = 0; r < t.length; ++r) e.push(255 & t.charCodeAt(r));
                    return e
                }(e), t, r, n)
            }

            function A(t, e, r, n) {
                return W(Y(e), t, r, n)
            }

            function I(t, e, r, n) {
                return W(function(t, e) {
                    let r, n, o;
                    const i = [];
                    for (let s = 0; s < t.length && !((e -= 2) < 0); ++s) r = t.charCodeAt(s), n = r >> 8, o = r % 256, i.push(o), i.push(n);
                    return i
                }(e, t.length - r), t, r, n)
            }

            function U(t, e, r) {
                return 0 === e && r === t.length ? n.fromByteArray(t) : n.fromByteArray(t.slice(e, r))
            }

            function _(t, e, r) {
                r = Math.min(t.length, r);
                const n = [];
                let o = e;
                for (; o < r;) {
                    const e = t[o];
                    let i = null,
                        s = e > 239 ? 4 : e > 223 ? 3 : e > 191 ? 2 : 1;
                    if (o + s <= r) {
                        let r, n, f, u;
                        switch (s) {
                            case 1:
                                e < 128 && (i = e);
                                break;
                            case 2:
                                r = t[o + 1], 128 === (192 & r) && (u = (31 & e) << 6 | 63 & r, u > 127 && (i = u));
                                break;
                            case 3:
                                r = t[o + 1], n = t[o + 2], 128 === (192 & r) && 128 === (192 & n) && (u = (15 & e) << 12 | (63 & r) << 6 | 63 & n, u > 2047 && (u < 55296 || u > 57343) && (i = u));
                                break;
                            case 4:
                                r = t[o + 1], n = t[o + 2], f = t[o + 3], 128 === (192 & r) && 128 === (192 & n) && 128 === (192 & f) && (u = (15 & e) << 18 | (63 & r) << 12 | (63 & n) << 6 | 63 & f, u > 65535 && u < 1114112 && (i = u))
                        }
                    }
                    null === i ? (i = 65533, s = 1) : i > 65535 && (i -= 65536, n.push(i >>> 10 & 1023 | 55296), i = 56320 | 1023 & i), n.push(i), o += s
                }
                return function(t) {
                    const e = t.length;
                    if (e <= R) return String.fromCharCode.apply(String, t);
                    let r = "",
                        n = 0;
                    for (; n < e;) r += String.fromCharCode.apply(String, t.slice(n, n += R));
                    return r
                }(n)
            }
            u.TYPED_ARRAY_SUPPORT = function() {
                try {
                    const t = new Uint8Array(1),
                        e = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(e, Uint8Array.prototype), Object.setPrototypeOf(t, e), 42 === t.foo()
                } catch (t) {
                    return !1
                }
            }(), u.TYPED_ARRAY_SUPPORT || "undefined" === typeof console || "function" !== typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(u.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(u.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (u.isBuffer(this)) return this.byteOffset
                }
            }), u.poolSize = 8192, u.from = function(t, e, r) {
                return a(t, e, r)
            }, Object.setPrototypeOf(u.prototype, Uint8Array.prototype), Object.setPrototypeOf(u, Uint8Array), u.alloc = function(t, e, r) {
                return function(t, e, r) {
                    return c(t), t <= 0 ? f(t) : void 0 !== e ? "string" === typeof r ? f(t).fill(e, r) : f(t).fill(e) : f(t)
                }(t, e, r)
            }, u.allocUnsafe = function(t) {
                return h(t)
            }, u.allocUnsafeSlow = function(t) {
                return h(t)
            }, u.isBuffer = function(t) {
                return null != t && !0 === t._isBuffer && t !== u.prototype
            }, u.compare = function(t, e) {
                if (J(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), J(e, Uint8Array) && (e = u.from(e, e.offset, e.byteLength)), !u.isBuffer(t) || !u.isBuffer(e)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (t === e) return 0;
                let r = t.length,
                    n = e.length;
                for (let o = 0, i = Math.min(r, n); o < i; ++o)
                    if (t[o] !== e[o]) {
                        r = t[o], n = e[o];
                        break
                    }
                return r < n ? -1 : n < r ? 1 : 0
            }, u.isEncoding = function(t) {
                switch (String(t).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, u.concat = function(t, e) {
                if (!Array.isArray(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === t.length) return u.alloc(0);
                let r;
                if (void 0 === e)
                    for (e = 0, r = 0; r < t.length; ++r) e += t[r].length;
                const n = u.allocUnsafe(e);
                let o = 0;
                for (r = 0; r < t.length; ++r) {
                    let e = t[r];
                    if (J(e, Uint8Array)) o + e.length > n.length ? (u.isBuffer(e) || (e = u.from(e)), e.copy(n, o)) : Uint8Array.prototype.set.call(n, e, o);
                    else {
                        if (!u.isBuffer(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        e.copy(n, o)
                    }
                    o += e.length
                }
                return n
            }, u.byteLength = g, u.prototype._isBuffer = !0, u.prototype.swap16 = function() {
                const t = this.length;
                if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (let e = 0; e < t; e += 2) w(this, e, e + 1);
                return this
            }, u.prototype.swap32 = function() {
                const t = this.length;
                if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (let e = 0; e < t; e += 4) w(this, e, e + 3), w(this, e + 1, e + 2);
                return this
            }, u.prototype.swap64 = function() {
                const t = this.length;
                if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (let e = 0; e < t; e += 8) w(this, e, e + 7), w(this, e + 1, e + 6), w(this, e + 2, e + 5), w(this, e + 3, e + 4);
                return this
            }, u.prototype.toString = function() {
                const t = this.length;
                return 0 === t ? "" : 0 === arguments.length ? _(this, 0, t) : d.apply(this, arguments)
            }, u.prototype.toLocaleString = u.prototype.toString, u.prototype.equals = function(t) {
                if (!u.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                return this === t || 0 === u.compare(this, t)
            }, u.prototype.inspect = function() {
                let t = "";
                const r = e.IS;
                return t = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (t += " ... "), "<Buffer " + t + ">"
            }, i && (u.prototype[i] = u.prototype.inspect), u.prototype.compare = function(t, e, r, n, o) {
                if (J(t, Uint8Array) && (t = u.from(t, t.offset, t.byteLength)), !u.isBuffer(t)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof t);
                if (void 0 === e && (e = 0), void 0 === r && (r = t ? t.length : 0), void 0 === n && (n = 0), void 0 === o && (o = this.length), e < 0 || r > t.length || n < 0 || o > this.length) throw new RangeError("out of range index");
                if (n >= o && e >= r) return 0;
                if (n >= o) return -1;
                if (e >= r) return 1;
                if (this === t) return 0;
                let i = (o >>>= 0) - (n >>>= 0),
                    s = (r >>>= 0) - (e >>>= 0);
                const f = Math.min(i, s),
                    a = this.slice(n, o),
                    c = t.slice(e, r);
                for (let u = 0; u < f; ++u)
                    if (a[u] !== c[u]) {
                        i = a[u], s = c[u];
                        break
                    }
                return i < s ? -1 : s < i ? 1 : 0
            }, u.prototype.includes = function(t, e, r) {
                return -1 !== this.indexOf(t, e, r)
            }, u.prototype.indexOf = function(t, e, r) {
                return m(this, t, e, r, !0)
            }, u.prototype.lastIndexOf = function(t, e, r) {
                return m(this, t, e, r, !1)
            }, u.prototype.write = function(t, e, r, n) {
                if (void 0 === e) n = "utf8", r = this.length, e = 0;
                else if (void 0 === r && "string" === typeof e) n = e, r = this.length, e = 0;
                else {
                    if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    e >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === n && (n = "utf8")) : (n = r, r = void 0)
                }
                const o = this.length - e;
                if ((void 0 === r || r > o) && (r = o), t.length > 0 && (r < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                n || (n = "utf8");
                let i = !1;
                for (;;) switch (n) {
                    case "hex":
                        return E(this, t, e, r);
                    case "utf8":
                    case "utf-8":
                        return B(this, t, e, r);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return v(this, t, e, r);
                    case "base64":
                        return A(this, t, e, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return I(this, t, e, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + n);
                        n = ("" + n).toLowerCase(), i = !0
                }
            }, u.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            };
            const R = 4096;

            function k(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let o = e; o < r; ++o) n += String.fromCharCode(127 & t[o]);
                return n
            }

            function L(t, e, r) {
                let n = "";
                r = Math.min(t.length, r);
                for (let o = e; o < r; ++o) n += String.fromCharCode(t[o]);
                return n
            }

            function O(t, e, r) {
                const n = t.length;
                (!e || e < 0) && (e = 0), (!r || r < 0 || r > n) && (r = n);
                let o = "";
                for (let i = e; i < r; ++i) o += H[t[i]];
                return o
            }

            function T(t, e, r) {
                const n = t.slice(e, r);
                let o = "";
                for (let i = 0; i < n.length - 1; i += 2) o += String.fromCharCode(n[i] + 256 * n[i + 1]);
                return o
            }

            function x(t, e, r) {
                if (t % 1 !== 0 || t < 0) throw new RangeError("offset is not uint");
                if (t + e > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function S(t, e, r, n, o, i) {
                if (!u.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
                if (r + n > t.length) throw new RangeError("Index out of range")
            }

            function C(t, e, r, n, o) {
                D(e, n, o, t, r, 7);
                let i = Number(e & BigInt(4294967295));
                t[r++] = i, i >>= 8, t[r++] = i, i >>= 8, t[r++] = i, i >>= 8, t[r++] = i;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, s >>= 8, t[r++] = s, r
            }

            function N(t, e, r, n, o) {
                D(e, n, o, t, r, 7);
                let i = Number(e & BigInt(4294967295));
                t[r + 7] = i, i >>= 8, t[r + 6] = i, i >>= 8, t[r + 5] = i, i >>= 8, t[r + 4] = i;
                let s = Number(e >> BigInt(32) & BigInt(4294967295));
                return t[r + 3] = s, s >>= 8, t[r + 2] = s, s >>= 8, t[r + 1] = s, s >>= 8, t[r] = s, r + 8
            }

            function M(t, e, r, n, o, i) {
                if (r + n > t.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function P(t, e, r, n, i) {
                return e = +e, r >>>= 0, i || M(t, 0, r, 4), o.write(t, e, r, n, 23, 4), r + 4
            }

            function $(t, e, r, n, i) {
                return e = +e, r >>>= 0, i || M(t, 0, r, 8), o.write(t, e, r, n, 52, 8), r + 8
            }
            u.prototype.slice = function(t, e) {
                const r = this.length;
                (t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t);
                const n = this.subarray(t, e);
                return Object.setPrototypeOf(n, u.prototype), n
            }, u.prototype.readUintLE = u.prototype.readUIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || x(t, e, this.length);
                let n = this[t],
                    o = 1,
                    i = 0;
                for (; ++i < e && (o *= 256);) n += this[t + i] * o;
                return n
            }, u.prototype.readUintBE = u.prototype.readUIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || x(t, e, this.length);
                let n = this[t + --e],
                    o = 1;
                for (; e > 0 && (o *= 256);) n += this[t + --e] * o;
                return n
            }, u.prototype.readUint8 = u.prototype.readUInt8 = function(t, e) {
                return t >>>= 0, e || x(t, 1, this.length), this[t]
            }, u.prototype.readUint16LE = u.prototype.readUInt16LE = function(t, e) {
                return t >>>= 0, e || x(t, 2, this.length), this[t] | this[t + 1] << 8
            }, u.prototype.readUint16BE = u.prototype.readUInt16BE = function(t, e) {
                return t >>>= 0, e || x(t, 2, this.length), this[t] << 8 | this[t + 1]
            }, u.prototype.readUint32LE = u.prototype.readUInt32LE = function(t, e) {
                return t >>>= 0, e || x(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
            }, u.prototype.readUint32BE = u.prototype.readUInt32BE = function(t, e) {
                return t >>>= 0, e || x(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
            }, u.prototype.readBigUInt64LE = Q((function(t) {
                V(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || G(t, this.length - 8);
                const n = e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24,
                    o = this[++t] + 256 * this[++t] + 65536 * this[++t] + r * 2 ** 24;
                return BigInt(n) + (BigInt(o) << BigInt(32))
            })), u.prototype.readBigUInt64BE = Q((function(t) {
                V(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || G(t, this.length - 8);
                const n = e * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + this[++t],
                    o = this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r;
                return (BigInt(n) << BigInt(32)) + BigInt(o)
            })), u.prototype.readIntLE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || x(t, e, this.length);
                let n = this[t],
                    o = 1,
                    i = 0;
                for (; ++i < e && (o *= 256);) n += this[t + i] * o;
                return o *= 128, n >= o && (n -= Math.pow(2, 8 * e)), n
            }, u.prototype.readIntBE = function(t, e, r) {
                t >>>= 0, e >>>= 0, r || x(t, e, this.length);
                let n = e,
                    o = 1,
                    i = this[t + --n];
                for (; n > 0 && (o *= 256);) i += this[t + --n] * o;
                return o *= 128, i >= o && (i -= Math.pow(2, 8 * e)), i
            }, u.prototype.readInt8 = function(t, e) {
                return t >>>= 0, e || x(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
            }, u.prototype.readInt16LE = function(t, e) {
                t >>>= 0, e || x(t, 2, this.length);
                const r = this[t] | this[t + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt16BE = function(t, e) {
                t >>>= 0, e || x(t, 2, this.length);
                const r = this[t + 1] | this[t] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, u.prototype.readInt32LE = function(t, e) {
                return t >>>= 0, e || x(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
            }, u.prototype.readInt32BE = function(t, e) {
                return t >>>= 0, e || x(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
            }, u.prototype.readBigInt64LE = Q((function(t) {
                V(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || G(t, this.length - 8);
                const n = this[t + 4] + 256 * this[t + 5] + 65536 * this[t + 6] + (r << 24);
                return (BigInt(n) << BigInt(32)) + BigInt(e + 256 * this[++t] + 65536 * this[++t] + this[++t] * 2 ** 24)
            })), u.prototype.readBigInt64BE = Q((function(t) {
                V(t >>>= 0, "offset");
                const e = this[t],
                    r = this[t + 7];
                void 0 !== e && void 0 !== r || G(t, this.length - 8);
                const n = (e << 24) + 65536 * this[++t] + 256 * this[++t] + this[++t];
                return (BigInt(n) << BigInt(32)) + BigInt(this[++t] * 2 ** 24 + 65536 * this[++t] + 256 * this[++t] + r)
            })), u.prototype.readFloatLE = function(t, e) {
                return t >>>= 0, e || x(t, 4, this.length), o.read(this, t, !0, 23, 4)
            }, u.prototype.readFloatBE = function(t, e) {
                return t >>>= 0, e || x(t, 4, this.length), o.read(this, t, !1, 23, 4)
            }, u.prototype.readDoubleLE = function(t, e) {
                return t >>>= 0, e || x(t, 8, this.length), o.read(this, t, !0, 52, 8)
            }, u.prototype.readDoubleBE = function(t, e) {
                return t >>>= 0, e || x(t, 8, this.length), o.read(this, t, !1, 52, 8)
            }, u.prototype.writeUintLE = u.prototype.writeUIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    S(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
                }
                let o = 1,
                    i = 0;
                for (this[e] = 255 & t; ++i < r && (o *= 256);) this[e + i] = t / o & 255;
                return e + r
            }, u.prototype.writeUintBE = u.prototype.writeUIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, r >>>= 0, !n) {
                    S(this, t, e, r, Math.pow(2, 8 * r) - 1, 0)
                }
                let o = r - 1,
                    i = 1;
                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
                return e + r
            }, u.prototype.writeUint8 = u.prototype.writeUInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 1, 255, 0), this[e] = 255 & t, e + 1
            }, u.prototype.writeUint16LE = u.prototype.writeUInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 2, 65535, 0), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeUint16BE = u.prototype.writeUInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 2, 65535, 0), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeUint32LE = u.prototype.writeUInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 4, 4294967295, 0), this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t, e + 4
            }, u.prototype.writeUint32BE = u.prototype.writeUInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 4, 4294967295, 0), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigUInt64LE = Q((function(t, e = 0) {
                return C(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeBigUInt64BE = Q((function(t, e = 0) {
                return N(this, t, e, BigInt(0), BigInt("0xffffffffffffffff"))
            })), u.prototype.writeIntLE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    S(this, t, e, r, n - 1, -n)
                }
                let o = 0,
                    i = 1,
                    s = 0;
                for (this[e] = 255 & t; ++o < r && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + o - 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255;
                return e + r
            }, u.prototype.writeIntBE = function(t, e, r, n) {
                if (t = +t, e >>>= 0, !n) {
                    const n = Math.pow(2, 8 * r - 1);
                    S(this, t, e, r, n - 1, -n)
                }
                let o = r - 1,
                    i = 1,
                    s = 0;
                for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) t < 0 && 0 === s && 0 !== this[e + o + 1] && (s = 1), this[e + o] = (t / i >> 0) - s & 255;
                return e + r
            }, u.prototype.writeInt8 = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 1, 127, -128), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
            }, u.prototype.writeInt16LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 2, 32767, -32768), this[e] = 255 & t, this[e + 1] = t >>> 8, e + 2
            }, u.prototype.writeInt16BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 2, 32767, -32768), this[e] = t >>> 8, this[e + 1] = 255 & t, e + 2
            }, u.prototype.writeInt32LE = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 4, 2147483647, -2147483648), this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24, e + 4
            }, u.prototype.writeInt32BE = function(t, e, r) {
                return t = +t, e >>>= 0, r || S(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t, e + 4
            }, u.prototype.writeBigInt64LE = Q((function(t, e = 0) {
                return C(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeBigInt64BE = Q((function(t, e = 0) {
                return N(this, t, e, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            })), u.prototype.writeFloatLE = function(t, e, r) {
                return P(this, t, e, !0, r)
            }, u.prototype.writeFloatBE = function(t, e, r) {
                return P(this, t, e, !1, r)
            }, u.prototype.writeDoubleLE = function(t, e, r) {
                return $(this, t, e, !0, r)
            }, u.prototype.writeDoubleBE = function(t, e, r) {
                return $(this, t, e, !1, r)
            }, u.prototype.copy = function(t, e, r, n) {
                if (!u.isBuffer(t)) throw new TypeError("argument should be a Buffer");
                if (r || (r = 0), n || 0 === n || (n = this.length), e >= t.length && (e = t.length), e || (e = 0), n > 0 && n < r && (n = r), n === r) return 0;
                if (0 === t.length || 0 === this.length) return 0;
                if (e < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                if (n < 0) throw new RangeError("sourceEnd out of bounds");
                n > this.length && (n = this.length), t.length - e < n - r && (n = t.length - e + r);
                const o = n - r;
                return this === t && "function" === typeof Uint8Array.prototype.copyWithin ? this.copyWithin(e, r, n) : Uint8Array.prototype.set.call(t, this.subarray(r, n), e), o
            }, u.prototype.fill = function(t, e, r, n) {
                if ("string" === typeof t) {
                    if ("string" === typeof e ? (n = e, e = 0, r = this.length) : "string" === typeof r && (n = r, r = this.length), void 0 !== n && "string" !== typeof n) throw new TypeError("encoding must be a string");
                    if ("string" === typeof n && !u.isEncoding(n)) throw new TypeError("Unknown encoding: " + n);
                    if (1 === t.length) {
                        const e = t.charCodeAt(0);
                        ("utf8" === n && e < 128 || "latin1" === n) && (t = e)
                    }
                } else "number" === typeof t ? t &= 255 : "boolean" === typeof t && (t = Number(t));
                if (e < 0 || this.length < e || this.length < r) throw new RangeError("Out of range index");
                if (r <= e) return this;
                let o;
                if (e >>>= 0, r = void 0 === r ? this.length : r >>> 0, t || (t = 0), "number" === typeof t)
                    for (o = e; o < r; ++o) this[o] = t;
                else {
                    const i = u.isBuffer(t) ? t : u.from(t, n),
                        s = i.length;
                    if (0 === s) throw new TypeError('The value "' + t + '" is invalid for argument "value"');
                    for (o = 0; o < r - e; ++o) this[o + e] = i[o % s]
                }
                return this
            };
            const z = {};

            function j(t, e, r) {
                z[t] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: e.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${t}]`, this.stack, delete this.name
                    }
                    get code() {
                        return t
                    }
                    set code(t) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: t,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${t}]: ${this.message}`
                    }
                }
            }

            function F(t) {
                let e = "",
                    r = t.length;
                const n = "-" === t[0] ? 1 : 0;
                for (; r >= n + 4; r -= 3) e = `_${t.slice(r-3,r)}${e}`;
                return `${t.slice(0,r)}${e}`
            }

            function D(t, e, r, n, o, i) {
                if (t > r || t < e) {
                    const n = "bigint" === typeof e ? "n" : "";
                    let o;
                    throw o = i > 3 ? 0 === e || e === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8*(i+1)}${n}` : `>= -(2${n} ** ${8*(i+1)-1}${n}) and < 2 ** ${8*(i+1)-1}${n}` : `>= ${e}${n} and <= ${r}${n}`, new z.ERR_OUT_OF_RANGE("value", o, t)
                }! function(t, e, r) {
                    V(e, "offset"), void 0 !== t[e] && void 0 !== t[e + r] || G(e, t.length - (r + 1))
                }(n, o, i)
            }

            function V(t, e) {
                if ("number" !== typeof t) throw new z.ERR_INVALID_ARG_TYPE(e, "number", t)
            }

            function G(t, e, r) {
                if (Math.floor(t) !== t) throw V(t, r), new z.ERR_OUT_OF_RANGE(r || "offset", "an integer", t);
                if (e < 0) throw new z.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new z.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${e}`, t)
            }
            j("ERR_BUFFER_OUT_OF_BOUNDS", (function(t) {
                return t ? `${t} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }), RangeError), j("ERR_INVALID_ARG_TYPE", (function(t, e) {
                return `The "${t}" argument must be of type number. Received type ${typeof e}`
            }), TypeError), j("ERR_OUT_OF_RANGE", (function(t, e, r) {
                let n = `The value of "${t}" is out of range.`,
                    o = r;
                return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? o = F(String(r)) : "bigint" === typeof r && (o = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (o = F(o)), o += "n"), n += ` It must be ${e}. Received ${o}`, n
            }), RangeError);
            const q = /[^+/0-9A-Za-z-_]/g;

            function K(t, e) {
                let r;
                e = e || 1 / 0;
                const n = t.length;
                let o = null;
                const i = [];
                for (let s = 0; s < n; ++s) {
                    if (r = t.charCodeAt(s), r > 55295 && r < 57344) {
                        if (!o) {
                            if (r > 56319) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === n) {
                                (e -= 3) > -1 && i.push(239, 191, 189);
                                continue
                            }
                            o = r;
                            continue
                        }
                        if (r < 56320) {
                            (e -= 3) > -1 && i.push(239, 191, 189), o = r;
                            continue
                        }
                        r = 65536 + (o - 55296 << 10 | r - 56320)
                    } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                    if (o = null, r < 128) {
                        if ((e -= 1) < 0) break;
                        i.push(r)
                    } else if (r < 2048) {
                        if ((e -= 2) < 0) break;
                        i.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((e -= 3) < 0) break;
                        i.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((e -= 4) < 0) break;
                        i.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return i
            }

            function Y(t) {
                return n.toByteArray(function(t) {
                    if ((t = (t = t.split("=")[0]).trim().replace(q, "")).length < 2) return "";
                    for (; t.length % 4 !== 0;) t += "=";
                    return t
                }(t))
            }

            function W(t, e, r, n) {
                let o;
                for (o = 0; o < n && !(o + r >= e.length || o >= t.length); ++o) e[o + r] = t[o];
                return o
            }

            function J(t, e) {
                return t instanceof e || null != t && null != t.constructor && null != t.constructor.name && t.constructor.name === e.name
            }

            function Z(t) {
                return t !== t
            }
            const H = function() {
                const t = "0123456789abcdef",
                    e = new Array(256);
                for (let r = 0; r < 16; ++r) {
                    const n = 16 * r;
                    for (let o = 0; o < 16; ++o) e[n + o] = t[r] + t[o]
                }
                return e
            }();

            function Q(t) {
                return "undefined" === typeof BigInt ? X : t
            }

            function X() {
                throw new Error("BigInt not supported")
            }
        },
        "1TxV": (t, e) => {
            e.read = function(t, e, r, n, o) {
                var i, s, f = 8 * o - n - 1,
                    u = (1 << f) - 1,
                    a = u >> 1,
                    c = -7,
                    h = r ? o - 1 : 0,
                    l = r ? -1 : 1,
                    p = t[e + h];
                for (h += l, i = p & (1 << -c) - 1, p >>= -c, c += f; c > 0; i = 256 * i + t[e + h], h += l, c -= 8);
                for (s = i & (1 << -c) - 1, i >>= -c, c += n; c > 0; s = 256 * s + t[e + h], h += l, c -= 8);
                if (0 === i) i = 1 - a;
                else {
                    if (i === u) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                    s += Math.pow(2, n), i -= a
                }
                return (p ? -1 : 1) * s * Math.pow(2, i - n)
            }, e.write = function(t, e, r, n, o, i) {
                var s, f, u, a = 8 * i - o - 1,
                    c = (1 << a) - 1,
                    h = c >> 1,
                    l = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                    p = n ? 0 : i - 1,
                    y = n ? 1 : -1,
                    g = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (f = isNaN(e) ? 1 : 0, s = c) : (s = Math.floor(Math.log(e) / Math.LN2), e * (u = Math.pow(2, -s)) < 1 && (s--, u *= 2), (e += s + h >= 1 ? l / u : l * Math.pow(2, 1 - h)) * u >= 2 && (s++, u /= 2), s + h >= c ? (f = 0, s = c) : s + h >= 1 ? (f = (e * u - 1) * Math.pow(2, o), s += h) : (f = e * Math.pow(2, h - 1) * Math.pow(2, o), s = 0)); o >= 8; t[r + p] = 255 & f, p += y, f /= 256, o -= 8);
                for (s = s << o | f, a += o; a > 0; t[r + p] = 255 & s, p += y, s /= 256, a -= 8);
                t[r + p - y] |= 128 * g
            }
        }
    }
]);
//# debugId=9bcf2a97-24f5-5c75-a564-57fd94cc3b47