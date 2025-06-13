! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "b2671275-d620-5054-a142-1997f1485a35")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [8206], {
        y45O: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => jt,
                Y: () => Ft
            });
            var r = n("sViW"),
                i = n("BK7R"),
                o = n("aVXY"),
                a = n("3yYM"),
                s = n.n(a),
                c = n("DTvD"),
                l = n.n(c),
                u = n("hCsC"),
                d = n("x9UB"),
                p = n("wZ0P"),
                f = n("i55B"),
                h = n("q6JD");
            var m = n("rX+A"),
                v = function() {
                    var e = (0, h.l)(),
                        t = function() {
                            var e = window.navigator,
                                t = e.userAgent.toLowerCase(),
                                n = e.standalone,
                                r = /ip(ad|hone|od)/.test(t) || "MacIntel" === e.platform && e.maxTouchPoints > 1,
                                i = /android/.test(t),
                                o = /safari/.test(t),
                                a = i && /; wv\)/.test(t) || r && !n && !o;
                            return !a && /tradingview/.test(t) && (a = !0), {
                                isIOS: r,
                                isAndroid: i,
                                isWebview: a
                            }
                        }(),
                        n = t.isIOS,
                        r = t.isAndroid,
                        i = t.isWebview;
                    return e ? "electron" : i ? r ? "android" : n ? "ios" : "web" : "web"
                },
                g = function() {
                    var e = (0, r.A)(s().mark((function e() {
                        var t, n, r, i, a, c, l, u;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.t0 = o.A, e.next = 4, Promise.all([(0, f.mR)(), (0, f.ZF)()]);
                                case 4:
                                    return e.t1 = e.sent, i = (0, e.t0)(e.t1, 2), a = i[0], c = i[1], l = null === (t = a.data) || void 0 === t ? void 0 : t["c2c-im"], u = v(), e.abrupt("return", "".concat(l, "/chatrooms/").concat(null === (n = c.data) || void 0 === n ? void 0 : n.listenKey, "?token=").concat(null === (r = c.data) || void 0 === r ? void 0 : r.listenToken, "&clientType=").concat(u));
                                case 11:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }();
            const y = function(e) {
                var t = (0, o.A)((0, c.useState)(), 2),
                    n = t[0],
                    i = t[1],
                    a = (0, o.A)((0, c.useState)(!1), 2),
                    l = a[0],
                    u = a[1],
                    d = (0, c.useRef)(null),
                    f = function() {
                        d.current && d.current.close()
                    },
                    h = function() {
                        var t = (0, r.A)(s().mark((function t() {
                            var n, r, o, a, c = arguments;
                            return s().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = c.length > 0 && void 0 !== c[0] ? c[0] : 0, t.prev = 1, !(o = n > 0) || (null === (r = d.current) || void 0 === r ? void 0 : r.readyState) === WebSocket.CLOSED) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 6:
                                        if (o || !d.current) {
                                            t.next = 8;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 8:
                                        return t.next = 10, g();
                                    case 10:
                                        if (a = t.sent) {
                                            t.next = 13;
                                            break
                                        }
                                        throw new Error;
                                    case 13:
                                        u(!1), m.A.logCounter(o ? "c2c_metrics_v1_chat_wss_connect_retry" : "c2c_metrics_v1_chat_wss_connect_start", {}), (0, m.h)(o ? "c2c-chat-wss-reconnect" : "c2c-chat-wss-connect-start"), d.current = new WebSocket(a), d.current.onmessage = function(t) {
                                            var n;
                                            (0, m.h)("c2c-chat-wss-msg-receive", t.data);
                                            var r = JSON.parse(t.data);
                                            (null === r || void 0 === r ? void 0 : r.type) === p.Go.Text && m.A.logCounter("c2c_metrics_v1_chat_wss_msg_text_receive_response", {}), (null === r || void 0 === r ? void 0 : r.type) === p.Go.Image && m.A.logCounter("c2c_metrics_v1_chat_wss_msg_img_receive_response", {}), (null === r || void 0 === r ? void 0 : r.type) === p.Go.Video && m.A.logCounter("c2c_metrics_v1_chat_wss_msg_video_receive_response", {}), null === e || void 0 === e || null === (n = e.current) || void 0 === n || n.call(e, r)
                                        }, d.current.onopen = function() {
                                            (0, m.h)("c2c-chat-wss-connect-success"), m.A.logCounter("c2c_metrics_v1_chat_wss_connect_success", {}), i(WebSocket.OPEN)
                                        }, d.current.onclose = function(e) {
                                            (0, m.h)("c2c-chat-wss-connect-failed", {
                                                errorCode: e.code
                                            }), m.A.logCounter("c2c_metrics_v1_chat_wss_connect_failed", {}), setTimeout((function() {
                                                var e, t;
                                                (null === (e = d.current) || void 0 === e ? void 0 : e.readyState) !== WebSocket.OPEN && (n >= 5 ? u(!0) : (n++, null === (t = d.current) || void 0 === t || t.close(), h(n)))
                                            }), 5e3), i(WebSocket.CLOSED)
                                        }, t.next = 25;
                                        break;
                                    case 22:
                                        t.prev = 22, t.t0 = t.catch(1), f();
                                    case 25:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [1, 22]
                            ])
                        })));
                        return function() {
                            return t.apply(this, arguments)
                        }
                    }();
                return {
                    requireManualRestart: l,
                    beginSocket: h,
                    wsSend: function(e) {
                        var t;
                        if ((null === (t = d.current) || void 0 === t ? void 0 : t.readyState) === WebSocket.OPEN) {
                            var n = JSON.stringify(e);
                            "text" === (null === e || void 0 === e ? void 0 : e.type) && m.A.logCounter("c2c_metrics_v1_chat_wss_msg_text_send_out", {}), "image" === (null === e || void 0 === e ? void 0 : e.type) && m.A.logCounter("c2c_metrics_v1_chat_wss_msg_img_send_out", {}), "video" === (null === e || void 0 === e ? void 0 : e.type) && m.A.logCounter("c2c_metrics_v1_chat_wss_msg_video_send_out", {}), (0, m.h)("c2c-chat-wss-msg-send", n), d.current.send(n)
                        }
                    },
                    wsStatus: n,
                    closeConnection: f,
                    restartConnection: function() {
                        var e, t;
                        (null === (e = d.current) || void 0 === e ? void 0 : e.readyState) !== WebSocket.OPEN && (u(!1), null === (t = d.current) || void 0 === t || t.close(), d.current = null, h())
                    }
                }
            };
            var b = n("QUKP");

            function w(e, t) {
                return function() {
                    return e.apply(t, arguments)
                }
            }
            const {
                toString: _
            } = Object.prototype, {
                getPrototypeOf: E
            } = Object, x = (C = Object.create(null), e => {
                const t = _.call(e);
                return C[t] || (C[t] = t.slice(8, -1).toLowerCase())
            });
            var C;
            const A = e => (e = e.toLowerCase(), t => x(t) === e),
                S = e => t => typeof t === e,
                {
                    isArray: k
                } = Array,
                R = S("undefined");
            const T = A("ArrayBuffer");
            const B = S("string"),
                I = S("function"),
                P = S("number"),
                O = e => null !== e && "object" === typeof e,
                N = e => {
                    if ("object" !== x(e)) return !1;
                    const t = E(e);
                    return (null === t || t === Object.prototype || null === Object.getPrototypeOf(t)) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e)
                },
                L = A("Date"),
                M = A("File"),
                U = A("Blob"),
                z = A("FileList"),
                D = A("URLSearchParams");

            function F(e, t, {
                allOwnKeys: n = !1
            } = {}) {
                if (null === e || "undefined" === typeof e) return;
                let r, i;
                if ("object" !== typeof e && (e = [e]), k(e))
                    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
                else {
                    const i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
                        o = i.length;
                    let a;
                    for (r = 0; r < o; r++) a = i[r], t.call(null, e[a], a, e)
                }
            }

            function j(e, t) {
                t = t.toLowerCase();
                const n = Object.keys(e);
                let r, i = n.length;
                for (; i-- > 0;)
                    if (r = n[i], t === r.toLowerCase()) return r;
                return null
            }
            const H = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof self ? self : window,
                V = e => !R(e) && e !== H;
            const q = (W = "undefined" !== typeof Uint8Array && E(Uint8Array), e => W && e instanceof W);
            var W;
            const K = A("HTMLFormElement"),
                Y = (({
                    hasOwnProperty: e
                }) => (t, n) => e.call(t, n))(Object.prototype),
                G = A("RegExp"),
                Q = (e, t) => {
                    const n = Object.getOwnPropertyDescriptors(e),
                        r = {};
                    F(n, ((n, i) => {
                        let o;
                        !1 !== (o = t(n, i, e)) && (r[i] = o || n)
                    })), Object.defineProperties(e, r)
                },
                Z = "abcdefghijklmnopqrstuvwxyz",
                J = "0123456789",
                X = {
                    DIGIT: J,
                    ALPHA: Z,
                    ALPHA_DIGIT: Z + Z.toUpperCase() + J
                };
            const $ = A("AsyncFunction"),
                ee = {
                    isArray: k,
                    isArrayBuffer: T,
                    isBuffer: function(e) {
                        return null !== e && !R(e) && null !== e.constructor && !R(e.constructor) && I(e.constructor.isBuffer) && e.constructor.isBuffer(e)
                    },
                    isFormData: e => {
                        let t;
                        return e && ("function" === typeof FormData && e instanceof FormData || I(e.append) && ("formdata" === (t = x(e)) || "object" === t && I(e.toString) && "[object FormData]" === e.toString()))
                    },
                    isArrayBufferView: function(e) {
                        let t;
                        return t = "undefined" !== typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : e && e.buffer && T(e.buffer), t
                    },
                    isString: B,
                    isNumber: P,
                    isBoolean: e => !0 === e || !1 === e,
                    isObject: O,
                    isPlainObject: N,
                    isUndefined: R,
                    isDate: L,
                    isFile: M,
                    isBlob: U,
                    isRegExp: G,
                    isFunction: I,
                    isStream: e => O(e) && I(e.pipe),
                    isURLSearchParams: D,
                    isTypedArray: q,
                    isFileList: z,
                    forEach: F,
                    merge: function e() {
                        const {
                            caseless: t
                        } = V(this) && this || {}, n = {}, r = (r, i) => {
                            const o = t && j(n, i) || i;
                            N(n[o]) && N(r) ? n[o] = e(n[o], r) : N(r) ? n[o] = e({}, r) : k(r) ? n[o] = r.slice() : n[o] = r
                        };
                        for (let i = 0, o = arguments.length; i < o; i++) arguments[i] && F(arguments[i], r);
                        return n
                    },
                    extend: (e, t, n, {
                        allOwnKeys: r
                    } = {}) => (F(t, ((t, r) => {
                        n && I(t) ? e[r] = w(t, n) : e[r] = t
                    }), {
                        allOwnKeys: r
                    }), e),
                    trim: e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""),
                    stripBOM: e => (65279 === e.charCodeAt(0) && (e = e.slice(1)), e),
                    inherits: (e, t, n, r) => {
                        e.prototype = Object.create(t.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", {
                            value: t.prototype
                        }), n && Object.assign(e.prototype, n)
                    },
                    toFlatObject: (e, t, n, r) => {
                        let i, o, a;
                        const s = {};
                        if (t = t || {}, null == e) return t;
                        do {
                            for (i = Object.getOwnPropertyNames(e), o = i.length; o-- > 0;) a = i[o], r && !r(a, e, t) || s[a] || (t[a] = e[a], s[a] = !0);
                            e = !1 !== n && E(e)
                        } while (e && (!n || n(e, t)) && e !== Object.prototype);
                        return t
                    },
                    kindOf: x,
                    kindOfTest: A,
                    endsWith: (e, t, n) => {
                        e = String(e), (void 0 === n || n > e.length) && (n = e.length), n -= t.length;
                        const r = e.indexOf(t, n);
                        return -1 !== r && r === n
                    },
                    toArray: e => {
                        if (!e) return null;
                        if (k(e)) return e;
                        let t = e.length;
                        if (!P(t)) return null;
                        const n = new Array(t);
                        for (; t-- > 0;) n[t] = e[t];
                        return n
                    },
                    forEachEntry: (e, t) => {
                        const n = (e && e[Symbol.iterator]).call(e);
                        let r;
                        for (;
                            (r = n.next()) && !r.done;) {
                            const n = r.value;
                            t.call(e, n[0], n[1])
                        }
                    },
                    matchAll: (e, t) => {
                        let n;
                        const r = [];
                        for (; null !== (n = e.exec(t));) r.push(n);
                        return r
                    },
                    isHTMLForm: K,
                    hasOwnProperty: Y,
                    hasOwnProp: Y,
                    reduceDescriptors: Q,
                    freezeMethods: e => {
                        Q(e, ((t, n) => {
                            if (I(e) && -1 !== ["arguments", "caller", "callee"].indexOf(n)) return !1;
                            const r = e[n];
                            I(r) && (t.enumerable = !1, "writable" in t ? t.writable = !1 : t.set || (t.set = () => {
                                throw Error("Can not rewrite read-only method '" + n + "'")
                            }))
                        }))
                    },
                    toObjectSet: (e, t) => {
                        const n = {},
                            r = e => {
                                e.forEach((e => {
                                    n[e] = !0
                                }))
                            };
                        return k(e) ? r(e) : r(String(e).split(t)), n
                    },
                    toCamelCase: e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, (function(e, t, n) {
                        return t.toUpperCase() + n
                    })),
                    noop: () => {},
                    toFiniteNumber: (e, t) => (e = +e, Number.isFinite(e) ? e : t),
                    findKey: j,
                    global: H,
                    isContextDefined: V,
                    ALPHABET: X,
                    generateString: (e = 16, t = X.ALPHA_DIGIT) => {
                        let n = "";
                        const {
                            length: r
                        } = t;
                        for (; e--;) n += t[Math.random() * r | 0];
                        return n
                    },
                    isSpecCompliantForm: function(e) {
                        return !!(e && I(e.append) && "FormData" === e[Symbol.toStringTag] && e[Symbol.iterator])
                    },
                    toJSONObject: e => {
                        const t = new Array(10),
                            n = (e, r) => {
                                if (O(e)) {
                                    if (t.indexOf(e) >= 0) return;
                                    if (!("toJSON" in e)) {
                                        t[r] = e;
                                        const i = k(e) ? [] : {};
                                        return F(e, ((e, t) => {
                                            const o = n(e, r + 1);
                                            !R(o) && (i[t] = o)
                                        })), t[r] = void 0, i
                                    }
                                }
                                return e
                            };
                        return n(e, 0)
                    },
                    isAsyncFn: $,
                    isThenable: e => e && (O(e) || I(e)) && I(e.then) && I(e.catch)
                };

            function te(e, t, n, r, i) {
                Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = (new Error).stack, this.message = e, this.name = "AxiosError", t && (this.code = t), n && (this.config = n), r && (this.request = r), i && (this.response = i)
            }
            ee.inherits(te, Error, {
                toJSON: function() {
                    return {
                        message: this.message,
                        name: this.name,
                        description: this.description,
                        number: this.number,
                        fileName: this.fileName,
                        lineNumber: this.lineNumber,
                        columnNumber: this.columnNumber,
                        stack: this.stack,
                        config: ee.toJSONObject(this.config),
                        code: this.code,
                        status: this.response && this.response.status ? this.response.status : null
                    }
                }
            });
            const ne = te.prototype,
                re = {};
            ["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach((e => {
                re[e] = {
                    value: e
                }
            })), Object.defineProperties(te, re), Object.defineProperty(ne, "isAxiosError", {
                value: !0
            }), te.from = (e, t, n, r, i, o) => {
                const a = Object.create(ne);
                return ee.toFlatObject(e, a, (function(e) {
                    return e !== Error.prototype
                }), (e => "isAxiosError" !== e)), te.call(a, e.message, t, n, r, i), a.cause = e, a.name = e.name, o && Object.assign(a, o), a
            };
            const ie = te;
            var oe = n("GmLw").hp;

            function ae(e) {
                return ee.isPlainObject(e) || ee.isArray(e)
            }

            function se(e) {
                return ee.endsWith(e, "[]") ? e.slice(0, -2) : e
            }

            function ce(e, t, n) {
                return e ? e.concat(t).map((function(e, t) {
                    return e = se(e), !n && t ? "[" + e + "]" : e
                })).join(n ? "." : "") : t
            }
            const le = ee.toFlatObject(ee, {}, null, (function(e) {
                return /^is[A-Z]/.test(e)
            }));
            const ue = function(e, t, n) {
                if (!ee.isObject(e)) throw new TypeError("target must be an object");
                t = t || new FormData;
                const r = (n = ee.toFlatObject(n, {
                        metaTokens: !0,
                        dots: !1,
                        indexes: !1
                    }, !1, (function(e, t) {
                        return !ee.isUndefined(t[e])
                    }))).metaTokens,
                    i = n.visitor || l,
                    o = n.dots,
                    a = n.indexes,
                    s = (n.Blob || "undefined" !== typeof Blob && Blob) && ee.isSpecCompliantForm(t);
                if (!ee.isFunction(i)) throw new TypeError("visitor must be a function");

                function c(e) {
                    if (null === e) return "";
                    if (ee.isDate(e)) return e.toISOString();
                    if (!s && ee.isBlob(e)) throw new ie("Blob is not supported. Use a Buffer instead.");
                    return ee.isArrayBuffer(e) || ee.isTypedArray(e) ? s && "function" === typeof Blob ? new Blob([e]) : oe.from(e) : e
                }

                function l(e, n, i) {
                    let s = e;
                    if (e && !i && "object" === typeof e)
                        if (ee.endsWith(n, "{}")) n = r ? n : n.slice(0, -2), e = JSON.stringify(e);
                        else if (ee.isArray(e) && function(e) {
                            return ee.isArray(e) && !e.some(ae)
                        }(e) || (ee.isFileList(e) || ee.endsWith(n, "[]")) && (s = ee.toArray(e))) return n = se(n), s.forEach((function(e, r) {
                        !ee.isUndefined(e) && null !== e && t.append(!0 === a ? ce([n], r, o) : null === a ? n : n + "[]", c(e))
                    })), !1;
                    return !!ae(e) || (t.append(ce(i, n, o), c(e)), !1)
                }
                const u = [],
                    d = Object.assign(le, {
                        defaultVisitor: l,
                        convertValue: c,
                        isVisitable: ae
                    });
                if (!ee.isObject(e)) throw new TypeError("data must be an object");
                return function e(n, r) {
                    if (!ee.isUndefined(n)) {
                        if (-1 !== u.indexOf(n)) throw Error("Circular reference detected in " + r.join("."));
                        u.push(n), ee.forEach(n, (function(n, o) {
                            !0 === (!(ee.isUndefined(n) || null === n) && i.call(t, n, ee.isString(o) ? o.trim() : o, r, d)) && e(n, r ? r.concat(o) : [o])
                        })), u.pop()
                    }
                }(e), t
            };

            function de(e) {
                const t = {
                    "!": "%21",
                    "'": "%27",
                    "(": "%28",
                    ")": "%29",
                    "~": "%7E",
                    "%20": "+",
                    "%00": "\0"
                };
                return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, (function(e) {
                    return t[e]
                }))
            }

            function pe(e, t) {
                this._pairs = [], e && ue(e, this, t)
            }
            const fe = pe.prototype;
            fe.append = function(e, t) {
                this._pairs.push([e, t])
            }, fe.toString = function(e) {
                const t = e ? function(t) {
                    return e.call(this, t, de)
                } : de;
                return this._pairs.map((function(e) {
                    return t(e[0]) + "=" + t(e[1])
                }), "").join("&")
            };
            const he = pe;

            function me(e) {
                return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]")
            }

            function ve(e, t, n) {
                if (!t) return e;
                const r = n && n.encode || me,
                    i = n && n.serialize;
                let o;
                if (o = i ? i(t, n) : ee.isURLSearchParams(t) ? t.toString() : new he(t, n).toString(r), o) {
                    const t = e.indexOf("#"); - 1 !== t && (e = e.slice(0, t)), e += (-1 === e.indexOf("?") ? "?" : "&") + o
                }
                return e
            }
            const ge = class {
                    constructor() {
                        this.handlers = []
                    }
                    use(e, t, n) {
                        return this.handlers.push({
                            fulfilled: e,
                            rejected: t,
                            synchronous: !!n && n.synchronous,
                            runWhen: n ? n.runWhen : null
                        }), this.handlers.length - 1
                    }
                    eject(e) {
                        this.handlers[e] && (this.handlers[e] = null)
                    }
                    clear() {
                        this.handlers && (this.handlers = [])
                    }
                    forEach(e) {
                        ee.forEach(this.handlers, (function(t) {
                            null !== t && e(t)
                        }))
                    }
                },
                ye = {
                    silentJSONParsing: !0,
                    forcedJSONParsing: !0,
                    clarifyTimeoutError: !1
                },
                be = {
                    isBrowser: !0,
                    classes: {
                        URLSearchParams: "undefined" !== typeof URLSearchParams ? URLSearchParams : he,
                        FormData: "undefined" !== typeof FormData ? FormData : null,
                        Blob: "undefined" !== typeof Blob ? Blob : null
                    },
                    isStandardBrowserEnv: (() => {
                        let e;
                        return ("undefined" === typeof navigator || "ReactNative" !== (e = navigator.product) && "NativeScript" !== e && "NS" !== e) && "undefined" !== typeof document
                    })(),
                    isStandardBrowserWebWorkerEnv: "undefined" !== typeof WorkerGlobalScope && self instanceof WorkerGlobalScope && "function" === typeof self.importScripts,
                    protocols: ["http", "https", "file", "blob", "url", "data"]
                };
            const we = function(e) {
                function t(e, n, r, i) {
                    let o = e[i++];
                    const a = Number.isFinite(+o),
                        s = i >= e.length;
                    if (o = !o && ee.isArray(r) ? r.length : o, s) return ee.hasOwnProp(r, o) ? r[o] = [r[o], n] : r[o] = n, !a;
                    r[o] && ee.isObject(r[o]) || (r[o] = []);
                    return t(e, n, r[o], i) && ee.isArray(r[o]) && (r[o] = function(e) {
                        const t = {},
                            n = Object.keys(e);
                        let r;
                        const i = n.length;
                        let o;
                        for (r = 0; r < i; r++) o = n[r], t[o] = e[o];
                        return t
                    }(r[o])), !a
                }
                if (ee.isFormData(e) && ee.isFunction(e.entries)) {
                    const n = {};
                    return ee.forEachEntry(e, ((e, r) => {
                        t(function(e) {
                            return ee.matchAll(/\w+|\[(\w*)]/g, e).map((e => "[]" === e[0] ? "" : e[1] || e[0]))
                        }(e), r, n, 0)
                    })), n
                }
                return null
            };
            const _e = {
                transitional: ye,
                adapter: be.isNode ? "http" : "xhr",
                transformRequest: [function(e, t) {
                    const n = t.getContentType() || "",
                        r = n.indexOf("application/json") > -1,
                        i = ee.isObject(e);
                    i && ee.isHTMLForm(e) && (e = new FormData(e));
                    if (ee.isFormData(e)) return r && r ? JSON.stringify(we(e)) : e;
                    if (ee.isArrayBuffer(e) || ee.isBuffer(e) || ee.isStream(e) || ee.isFile(e) || ee.isBlob(e)) return e;
                    if (ee.isArrayBufferView(e)) return e.buffer;
                    if (ee.isURLSearchParams(e)) return t.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), e.toString();
                    let o;
                    if (i) {
                        if (n.indexOf("application/x-www-form-urlencoded") > -1) return function(e, t) {
                            return ue(e, new be.classes.URLSearchParams, Object.assign({
                                visitor: function(e, t, n, r) {
                                    return be.isNode && ee.isBuffer(e) ? (this.append(t, e.toString("base64")), !1) : r.defaultVisitor.apply(this, arguments)
                                }
                            }, t))
                        }(e, this.formSerializer).toString();
                        if ((o = ee.isFileList(e)) || n.indexOf("multipart/form-data") > -1) {
                            const t = this.env && this.env.FormData;
                            return ue(o ? {
                                "files[]": e
                            } : e, t && new t, this.formSerializer)
                        }
                    }
                    return i || r ? (t.setContentType("application/json", !1), function(e, t, n) {
                        if (ee.isString(e)) try {
                            return (t || JSON.parse)(e), ee.trim(e)
                        } catch (r) {
                            if ("SyntaxError" !== r.name) throw r
                        }
                        return (n || JSON.stringify)(e)
                    }(e)) : e
                }],
                transformResponse: [function(e) {
                    const t = this.transitional || _e.transitional,
                        n = t && t.forcedJSONParsing,
                        r = "json" === this.responseType;
                    if (e && ee.isString(e) && (n && !this.responseType || r)) {
                        const n = !(t && t.silentJSONParsing) && r;
                        try {
                            return JSON.parse(e)
                        } catch (i) {
                            if (n) {
                                if ("SyntaxError" === i.name) throw ie.from(i, ie.ERR_BAD_RESPONSE, this, null, this.response);
                                throw i
                            }
                        }
                    }
                    return e
                }],
                timeout: 0,
                xsrfCookieName: "XSRF-TOKEN",
                xsrfHeaderName: "X-XSRF-TOKEN",
                maxContentLength: -1,
                maxBodyLength: -1,
                env: {
                    FormData: be.classes.FormData,
                    Blob: be.classes.Blob
                },
                validateStatus: function(e) {
                    return e >= 200 && e < 300
                },
                headers: {
                    common: {
                        Accept: "application/json, text/plain, */*",
                        "Content-Type": void 0
                    }
                }
            };
            ee.forEach(["delete", "get", "head", "post", "put", "patch"], (e => {
                _e.headers[e] = {}
            }));
            const Ee = _e,
                xe = ee.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]),
                Ce = Symbol("internals");

            function Ae(e) {
                return e && String(e).trim().toLowerCase()
            }

            function Se(e) {
                return !1 === e || null == e ? e : ee.isArray(e) ? e.map(Se) : String(e)
            }

            function ke(e, t, n, r, i) {
                return ee.isFunction(r) ? r.call(this, t, n) : (i && (t = n), ee.isString(t) ? ee.isString(r) ? -1 !== t.indexOf(r) : ee.isRegExp(r) ? r.test(t) : void 0 : void 0)
            }
            class Re {
                constructor(e) {
                    e && this.set(e)
                }
                set(e, t, n) {
                    const r = this;

                    function i(e, t, n) {
                        const i = Ae(t);
                        if (!i) throw new Error("header name must be a non-empty string");
                        const o = ee.findKey(r, i);
                        (!o || void 0 === r[o] || !0 === n || void 0 === n && !1 !== r[o]) && (r[o || t] = Se(e))
                    }
                    const o = (e, t) => ee.forEach(e, ((e, n) => i(e, n, t)));
                    return ee.isPlainObject(e) || e instanceof this.constructor ? o(e, t) : ee.isString(e) && (e = e.trim()) && !/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim()) ? o((e => {
                        const t = {};
                        let n, r, i;
                        return e && e.split("\n").forEach((function(e) {
                            i = e.indexOf(":"), n = e.substring(0, i).trim().toLowerCase(), r = e.substring(i + 1).trim(), !n || t[n] && xe[n] || ("set-cookie" === n ? t[n] ? t[n].push(r) : t[n] = [r] : t[n] = t[n] ? t[n] + ", " + r : r)
                        })), t
                    })(e), t) : null != e && i(t, e, n), this
                }
                get(e, t) {
                    if (e = Ae(e)) {
                        const n = ee.findKey(this, e);
                        if (n) {
                            const e = this[n];
                            if (!t) return e;
                            if (!0 === t) return function(e) {
                                const t = Object.create(null),
                                    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
                                let r;
                                for (; r = n.exec(e);) t[r[1]] = r[2];
                                return t
                            }(e);
                            if (ee.isFunction(t)) return t.call(this, e, n);
                            if (ee.isRegExp(t)) return t.exec(e);
                            throw new TypeError("parser must be boolean|regexp|function")
                        }
                    }
                }
                has(e, t) {
                    if (e = Ae(e)) {
                        const n = ee.findKey(this, e);
                        return !(!n || void 0 === this[n] || t && !ke(0, this[n], n, t))
                    }
                    return !1
                }
                delete(e, t) {
                    const n = this;
                    let r = !1;

                    function i(e) {
                        if (e = Ae(e)) {
                            const i = ee.findKey(n, e);
                            !i || t && !ke(0, n[i], i, t) || (delete n[i], r = !0)
                        }
                    }
                    return ee.isArray(e) ? e.forEach(i) : i(e), r
                }
                clear(e) {
                    const t = Object.keys(this);
                    let n = t.length,
                        r = !1;
                    for (; n--;) {
                        const i = t[n];
                        e && !ke(0, this[i], i, e, !0) || (delete this[i], r = !0)
                    }
                    return r
                }
                normalize(e) {
                    const t = this,
                        n = {};
                    return ee.forEach(this, ((r, i) => {
                        const o = ee.findKey(n, i);
                        if (o) return t[o] = Se(r), void delete t[i];
                        const a = e ? function(e) {
                            return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, ((e, t, n) => t.toUpperCase() + n))
                        }(i) : String(i).trim();
                        a !== i && delete t[i], t[a] = Se(r), n[a] = !0
                    })), this
                }
                concat(...e) {
                    return this.constructor.concat(this, ...e)
                }
                toJSON(e) {
                    const t = Object.create(null);
                    return ee.forEach(this, ((n, r) => {
                        null != n && !1 !== n && (t[r] = e && ee.isArray(n) ? n.join(", ") : n)
                    })), t
                }[Symbol.iterator]() {
                    return Object.entries(this.toJSON())[Symbol.iterator]()
                }
                toString() {
                    return Object.entries(this.toJSON()).map((([e, t]) => e + ": " + t)).join("\n")
                }
                get[Symbol.toStringTag]() {
                    return "AxiosHeaders"
                }
                static from(e) {
                    return e instanceof this ? e : new this(e)
                }
                static concat(e, ...t) {
                    const n = new this(e);
                    return t.forEach((e => n.set(e))), n
                }
                static accessor(e) {
                    const t = (this[Ce] = this[Ce] = {
                            accessors: {}
                        }).accessors,
                        n = this.prototype;

                    function r(e) {
                        const r = Ae(e);
                        t[r] || (! function(e, t) {
                            const n = ee.toCamelCase(" " + t);
                            ["get", "set", "has"].forEach((r => {
                                Object.defineProperty(e, r + n, {
                                    value: function(e, n, i) {
                                        return this[r].call(this, t, e, n, i)
                                    },
                                    configurable: !0
                                })
                            }))
                        }(n, e), t[r] = !0)
                    }
                    return ee.isArray(e) ? e.forEach(r) : r(e), this
                }
            }
            Re.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]), ee.reduceDescriptors(Re.prototype, (({
                value: e
            }, t) => {
                let n = t[0].toUpperCase() + t.slice(1);
                return {
                    get: () => e,
                    set(e) {
                        this[n] = e
                    }
                }
            })), ee.freezeMethods(Re);
            const Te = Re;

            function Be(e, t) {
                const n = this || Ee,
                    r = t || n,
                    i = Te.from(r.headers);
                let o = r.data;
                return ee.forEach(e, (function(e) {
                    o = e.call(n, o, i.normalize(), t ? t.status : void 0)
                })), i.normalize(), o
            }

            function Ie(e) {
                return !(!e || !e.__CANCEL__)
            }

            function Pe(e, t, n) {
                ie.call(this, null == e ? "canceled" : e, ie.ERR_CANCELED, t, n), this.name = "CanceledError"
            }
            ee.inherits(Pe, ie, {
                __CANCEL__: !0
            });
            const Oe = Pe;
            const Ne = be.isStandardBrowserEnv ? {
                write: function(e, t, n, r, i, o) {
                    const a = [];
                    a.push(e + "=" + encodeURIComponent(t)), ee.isNumber(n) && a.push("expires=" + new Date(n).toGMTString()), ee.isString(r) && a.push("path=" + r), ee.isString(i) && a.push("domain=" + i), !0 === o && a.push("secure"), document.cookie = a.join("; ")
                },
                read: function(e) {
                    const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
                    return t ? decodeURIComponent(t[3]) : null
                },
                remove: function(e) {
                    this.write(e, "", Date.now() - 864e5)
                }
            } : {
                write: function() {},
                read: function() {
                    return null
                },
                remove: function() {}
            };

            function Le(e, t) {
                return e && !/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t) ? function(e, t) {
                    return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e
                }(e, t) : t
            }
            const Me = be.isStandardBrowserEnv ? function() {
                const e = /(msie|trident)/i.test(navigator.userAgent),
                    t = document.createElement("a");
                let n;

                function r(n) {
                    let r = n;
                    return e && (t.setAttribute("href", r), r = t.href), t.setAttribute("href", r), {
                        href: t.href,
                        protocol: t.protocol ? t.protocol.replace(/:$/, "") : "",
                        host: t.host,
                        search: t.search ? t.search.replace(/^\?/, "") : "",
                        hash: t.hash ? t.hash.replace(/^#/, "") : "",
                        hostname: t.hostname,
                        port: t.port,
                        pathname: "/" === t.pathname.charAt(0) ? t.pathname : "/" + t.pathname
                    }
                }
                return n = r(window.location.href),
                    function(e) {
                        const t = ee.isString(e) ? r(e) : e;
                        return t.protocol === n.protocol && t.host === n.host
                    }
            }() : function() {
                return !0
            };
            const Ue = function(e, t) {
                e = e || 10;
                const n = new Array(e),
                    r = new Array(e);
                let i, o = 0,
                    a = 0;
                return t = void 0 !== t ? t : 1e3,
                    function(s) {
                        const c = Date.now(),
                            l = r[a];
                        i || (i = c), n[o] = s, r[o] = c;
                        let u = a,
                            d = 0;
                        for (; u !== o;) d += n[u++], u %= e;
                        if (o = (o + 1) % e, o === a && (a = (a + 1) % e), c - i < t) return;
                        const p = l && c - l;
                        return p ? Math.round(1e3 * d / p) : void 0
                    }
            };

            function ze(e, t) {
                let n = 0;
                const r = Ue(50, 250);
                return i => {
                    const o = i.loaded,
                        a = i.lengthComputable ? i.total : void 0,
                        s = o - n,
                        c = r(s);
                    n = o;
                    const l = {
                        loaded: o,
                        total: a,
                        progress: a ? o / a : void 0,
                        bytes: s,
                        rate: c || void 0,
                        estimated: c && a && o <= a ? (a - o) / c : void 0,
                        event: i
                    };
                    l[t ? "download" : "upload"] = !0, e(l)
                }
            }
            const De = "undefined" !== typeof XMLHttpRequest && function(e) {
                    return new Promise((function(t, n) {
                        let r = e.data;
                        const i = Te.from(e.headers).normalize(),
                            o = e.responseType;
                        let a;

                        function s() {
                            e.cancelToken && e.cancelToken.unsubscribe(a), e.signal && e.signal.removeEventListener("abort", a)
                        }
                        ee.isFormData(r) && (be.isStandardBrowserEnv || be.isStandardBrowserWebWorkerEnv ? i.setContentType(!1) : i.setContentType("multipart/form-data;", !1));
                        let c = new XMLHttpRequest;
                        if (e.auth) {
                            const t = e.auth.username || "",
                                n = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
                            i.set("Authorization", "Basic " + btoa(t + ":" + n))
                        }
                        const l = Le(e.baseURL, e.url);

                        function u() {
                            if (!c) return;
                            const r = Te.from("getAllResponseHeaders" in c && c.getAllResponseHeaders());
                            ! function(e, t, n) {
                                const r = n.config.validateStatus;
                                n.status && r && !r(n.status) ? t(new ie("Request failed with status code " + n.status, [ie.ERR_BAD_REQUEST, ie.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)) : e(n)
                            }((function(e) {
                                t(e), s()
                            }), (function(e) {
                                n(e), s()
                            }), {
                                data: o && "text" !== o && "json" !== o ? c.response : c.responseText,
                                status: c.status,
                                statusText: c.statusText,
                                headers: r,
                                config: e,
                                request: c
                            }), c = null
                        }
                        if (c.open(e.method.toUpperCase(), ve(l, e.params, e.paramsSerializer), !0), c.timeout = e.timeout, "onloadend" in c ? c.onloadend = u : c.onreadystatechange = function() {
                                c && 4 === c.readyState && (0 !== c.status || c.responseURL && 0 === c.responseURL.indexOf("file:")) && setTimeout(u)
                            }, c.onabort = function() {
                                c && (n(new ie("Request aborted", ie.ECONNABORTED, e, c)), c = null)
                            }, c.onerror = function() {
                                n(new ie("Network Error", ie.ERR_NETWORK, e, c)), c = null
                            }, c.ontimeout = function() {
                                let t = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
                                const r = e.transitional || ye;
                                e.timeoutErrorMessage && (t = e.timeoutErrorMessage), n(new ie(t, r.clarifyTimeoutError ? ie.ETIMEDOUT : ie.ECONNABORTED, e, c)), c = null
                            }, be.isStandardBrowserEnv) {
                            const t = (e.withCredentials || Me(l)) && e.xsrfCookieName && Ne.read(e.xsrfCookieName);
                            t && i.set(e.xsrfHeaderName, t)
                        }
                        void 0 === r && i.setContentType(null), "setRequestHeader" in c && ee.forEach(i.toJSON(), (function(e, t) {
                            c.setRequestHeader(t, e)
                        })), ee.isUndefined(e.withCredentials) || (c.withCredentials = !!e.withCredentials), o && "json" !== o && (c.responseType = e.responseType), "function" === typeof e.onDownloadProgress && c.addEventListener("progress", ze(e.onDownloadProgress, !0)), "function" === typeof e.onUploadProgress && c.upload && c.upload.addEventListener("progress", ze(e.onUploadProgress)), (e.cancelToken || e.signal) && (a = t => {
                            c && (n(!t || t.type ? new Oe(null, e, c) : t), c.abort(), c = null)
                        }, e.cancelToken && e.cancelToken.subscribe(a), e.signal && (e.signal.aborted ? a() : e.signal.addEventListener("abort", a)));
                        const d = function(e) {
                            const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
                            return t && t[1] || ""
                        }(l);
                        d && -1 === be.protocols.indexOf(d) ? n(new ie("Unsupported protocol " + d + ":", ie.ERR_BAD_REQUEST, e)) : c.send(r || null)
                    }))
                },
                Fe = {
                    http: null,
                    xhr: De
                };
            ee.forEach(Fe, ((e, t) => {
                if (e) {
                    try {
                        Object.defineProperty(e, "name", {
                            value: t
                        })
                    } catch (n) {}
                    Object.defineProperty(e, "adapterName", {
                        value: t
                    })
                }
            }));
            const je = e => {
                e = ee.isArray(e) ? e : [e];
                const {
                    length: t
                } = e;
                let n, r;
                for (let i = 0; i < t && (n = e[i], !(r = ee.isString(n) ? Fe[n.toLowerCase()] : n)); i++);
                if (!r) {
                    if (!1 === r) throw new ie(`Adapter ${n} is not supported by the environment`, "ERR_NOT_SUPPORT");
                    throw new Error(ee.hasOwnProp(Fe, n) ? `Adapter '${n}' is not available in the build` : `Unknown adapter '${n}'`)
                }
                if (!ee.isFunction(r)) throw new TypeError("adapter is not a function");
                return r
            };

            function He(e) {
                if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted) throw new Oe(null, e)
            }

            function Ve(e) {
                He(e), e.headers = Te.from(e.headers), e.data = Be.call(e, e.transformRequest), -1 !== ["post", "put", "patch"].indexOf(e.method) && e.headers.setContentType("application/x-www-form-urlencoded", !1);
                return je(e.adapter || Ee.adapter)(e).then((function(t) {
                    return He(e), t.data = Be.call(e, e.transformResponse, t), t.headers = Te.from(t.headers), t
                }), (function(t) {
                    return Ie(t) || (He(e), t && t.response && (t.response.data = Be.call(e, e.transformResponse, t.response), t.response.headers = Te.from(t.response.headers))), Promise.reject(t)
                }))
            }
            const qe = e => e instanceof Te ? e.toJSON() : e;

            function We(e, t) {
                t = t || {};
                const n = {};

                function r(e, t, n) {
                    return ee.isPlainObject(e) && ee.isPlainObject(t) ? ee.merge.call({
                        caseless: n
                    }, e, t) : ee.isPlainObject(t) ? ee.merge({}, t) : ee.isArray(t) ? t.slice() : t
                }

                function i(e, t, n) {
                    return ee.isUndefined(t) ? ee.isUndefined(e) ? void 0 : r(void 0, e, n) : r(e, t, n)
                }

                function o(e, t) {
                    if (!ee.isUndefined(t)) return r(void 0, t)
                }

                function a(e, t) {
                    return ee.isUndefined(t) ? ee.isUndefined(e) ? void 0 : r(void 0, e) : r(void 0, t)
                }

                function s(n, i, o) {
                    return o in t ? r(n, i) : o in e ? r(void 0, n) : void 0
                }
                const c = {
                    url: o,
                    method: o,
                    data: o,
                    baseURL: a,
                    transformRequest: a,
                    transformResponse: a,
                    paramsSerializer: a,
                    timeout: a,
                    timeoutMessage: a,
                    withCredentials: a,
                    adapter: a,
                    responseType: a,
                    xsrfCookieName: a,
                    xsrfHeaderName: a,
                    onUploadProgress: a,
                    onDownloadProgress: a,
                    decompress: a,
                    maxContentLength: a,
                    maxBodyLength: a,
                    beforeRedirect: a,
                    transport: a,
                    httpAgent: a,
                    httpsAgent: a,
                    cancelToken: a,
                    socketPath: a,
                    responseEncoding: a,
                    validateStatus: s,
                    headers: (e, t) => i(qe(e), qe(t), !0)
                };
                return ee.forEach(Object.keys(Object.assign({}, e, t)), (function(r) {
                    const o = c[r] || i,
                        a = o(e[r], t[r], r);
                    ee.isUndefined(a) && o !== s || (n[r] = a)
                })), n
            }
            const Ke = "1.5.0",
                Ye = {};
            ["object", "boolean", "number", "function", "string", "symbol"].forEach(((e, t) => {
                Ye[e] = function(n) {
                    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e
                }
            }));
            const Ge = {};
            Ye.transitional = function(e, t, n) {
                function r(e, t) {
                    return "[Axios v1.5.0] Transitional option '" + e + "'" + t + (n ? ". " + n : "")
                }
                return (n, i, o) => {
                    if (!1 === e) throw new ie(r(i, " has been removed" + (t ? " in " + t : "")), ie.ERR_DEPRECATED);
                    return t && !Ge[i] && (Ge[i] = !0, console.warn(r(i, " has been deprecated since v" + t + " and will be removed in the near future"))), !e || e(n, i, o)
                }
            };
            const Qe = {
                    assertOptions: function(e, t, n) {
                        if ("object" !== typeof e) throw new ie("options must be an object", ie.ERR_BAD_OPTION_VALUE);
                        const r = Object.keys(e);
                        let i = r.length;
                        for (; i-- > 0;) {
                            const o = r[i],
                                a = t[o];
                            if (a) {
                                const t = e[o],
                                    n = void 0 === t || a(t, o, e);
                                if (!0 !== n) throw new ie("option " + o + " must be " + n, ie.ERR_BAD_OPTION_VALUE)
                            } else if (!0 !== n) throw new ie("Unknown option " + o, ie.ERR_BAD_OPTION)
                        }
                    },
                    validators: Ye
                },
                Ze = Qe.validators;
            class Je {
                constructor(e) {
                    this.defaults = e, this.interceptors = {
                        request: new ge,
                        response: new ge
                    }
                }
                request(e, t) {
                    "string" === typeof e ? (t = t || {}).url = e : t = e || {}, t = We(this.defaults, t);
                    const {
                        transitional: n,
                        paramsSerializer: r,
                        headers: i
                    } = t;
                    void 0 !== n && Qe.assertOptions(n, {
                        silentJSONParsing: Ze.transitional(Ze.boolean),
                        forcedJSONParsing: Ze.transitional(Ze.boolean),
                        clarifyTimeoutError: Ze.transitional(Ze.boolean)
                    }, !1), null != r && (ee.isFunction(r) ? t.paramsSerializer = {
                        serialize: r
                    } : Qe.assertOptions(r, {
                        encode: Ze.function,
                        serialize: Ze.function
                    }, !0)), t.method = (t.method || this.defaults.method || "get").toLowerCase();
                    let o = i && ee.merge(i.common, i[t.method]);
                    i && ee.forEach(["delete", "get", "head", "post", "put", "patch", "common"], (e => {
                        delete i[e]
                    })), t.headers = Te.concat(o, i);
                    const a = [];
                    let s = !0;
                    this.interceptors.request.forEach((function(e) {
                        "function" === typeof e.runWhen && !1 === e.runWhen(t) || (s = s && e.synchronous, a.unshift(e.fulfilled, e.rejected))
                    }));
                    const c = [];
                    let l;
                    this.interceptors.response.forEach((function(e) {
                        c.push(e.fulfilled, e.rejected)
                    }));
                    let u, d = 0;
                    if (!s) {
                        const e = [Ve.bind(this), void 0];
                        for (e.unshift.apply(e, a), e.push.apply(e, c), u = e.length, l = Promise.resolve(t); d < u;) l = l.then(e[d++], e[d++]);
                        return l
                    }
                    u = a.length;
                    let p = t;
                    for (d = 0; d < u;) {
                        const e = a[d++],
                            t = a[d++];
                        try {
                            p = e(p)
                        } catch (f) {
                            t.call(this, f);
                            break
                        }
                    }
                    try {
                        l = Ve.call(this, p)
                    } catch (f) {
                        return Promise.reject(f)
                    }
                    for (d = 0, u = c.length; d < u;) l = l.then(c[d++], c[d++]);
                    return l
                }
                getUri(e) {
                    return ve(Le((e = We(this.defaults, e)).baseURL, e.url), e.params, e.paramsSerializer)
                }
            }
            ee.forEach(["delete", "get", "head", "options"], (function(e) {
                Je.prototype[e] = function(t, n) {
                    return this.request(We(n || {}, {
                        method: e,
                        url: t,
                        data: (n || {}).data
                    }))
                }
            })), ee.forEach(["post", "put", "patch"], (function(e) {
                function t(t) {
                    return function(n, r, i) {
                        return this.request(We(i || {}, {
                            method: e,
                            headers: t ? {
                                "Content-Type": "multipart/form-data"
                            } : {},
                            url: n,
                            data: r
                        }))
                    }
                }
                Je.prototype[e] = t(), Je.prototype[e + "Form"] = t(!0)
            }));
            const Xe = Je;
            class $e {
                constructor(e) {
                    if ("function" !== typeof e) throw new TypeError("executor must be a function.");
                    let t;
                    this.promise = new Promise((function(e) {
                        t = e
                    }));
                    const n = this;
                    this.promise.then((e => {
                        if (!n._listeners) return;
                        let t = n._listeners.length;
                        for (; t-- > 0;) n._listeners[t](e);
                        n._listeners = null
                    })), this.promise.then = e => {
                        let t;
                        const r = new Promise((e => {
                            n.subscribe(e), t = e
                        })).then(e);
                        return r.cancel = function() {
                            n.unsubscribe(t)
                        }, r
                    }, e((function(e, r, i) {
                        n.reason || (n.reason = new Oe(e, r, i), t(n.reason))
                    }))
                }
                throwIfRequested() {
                    if (this.reason) throw this.reason
                }
                subscribe(e) {
                    this.reason ? e(this.reason) : this._listeners ? this._listeners.push(e) : this._listeners = [e]
                }
                unsubscribe(e) {
                    if (!this._listeners) return;
                    const t = this._listeners.indexOf(e); - 1 !== t && this._listeners.splice(t, 1)
                }
                static source() {
                    let e;
                    return {
                        token: new $e((function(t) {
                            e = t
                        })),
                        cancel: e
                    }
                }
            }
            const et = $e;
            const tt = {
                Continue: 100,
                SwitchingProtocols: 101,
                Processing: 102,
                EarlyHints: 103,
                Ok: 200,
                Created: 201,
                Accepted: 202,
                NonAuthoritativeInformation: 203,
                NoContent: 204,
                ResetContent: 205,
                PartialContent: 206,
                MultiStatus: 207,
                AlreadyReported: 208,
                ImUsed: 226,
                MultipleChoices: 300,
                MovedPermanently: 301,
                Found: 302,
                SeeOther: 303,
                NotModified: 304,
                UseProxy: 305,
                Unused: 306,
                TemporaryRedirect: 307,
                PermanentRedirect: 308,
                BadRequest: 400,
                Unauthorized: 401,
                PaymentRequired: 402,
                Forbidden: 403,
                NotFound: 404,
                MethodNotAllowed: 405,
                NotAcceptable: 406,
                ProxyAuthenticationRequired: 407,
                RequestTimeout: 408,
                Conflict: 409,
                Gone: 410,
                LengthRequired: 411,
                PreconditionFailed: 412,
                PayloadTooLarge: 413,
                UriTooLong: 414,
                UnsupportedMediaType: 415,
                RangeNotSatisfiable: 416,
                ExpectationFailed: 417,
                ImATeapot: 418,
                MisdirectedRequest: 421,
                UnprocessableEntity: 422,
                Locked: 423,
                FailedDependency: 424,
                TooEarly: 425,
                UpgradeRequired: 426,
                PreconditionRequired: 428,
                TooManyRequests: 429,
                RequestHeaderFieldsTooLarge: 431,
                UnavailableForLegalReasons: 451,
                InternalServerError: 500,
                NotImplemented: 501,
                BadGateway: 502,
                ServiceUnavailable: 503,
                GatewayTimeout: 504,
                HttpVersionNotSupported: 505,
                VariantAlsoNegotiates: 506,
                InsufficientStorage: 507,
                LoopDetected: 508,
                NotExtended: 510,
                NetworkAuthenticationRequired: 511
            };
            Object.entries(tt).forEach((([e, t]) => {
                tt[t] = e
            }));
            const nt = tt;
            const rt = function e(t) {
                const n = new Xe(t),
                    r = w(Xe.prototype.request, n);
                return ee.extend(r, Xe.prototype, n, {
                    allOwnKeys: !0
                }), ee.extend(r, n, null, {
                    allOwnKeys: !0
                }), r.create = function(n) {
                    return e(We(t, n))
                }, r
            }(Ee);
            rt.Axios = Xe, rt.CanceledError = Oe, rt.CancelToken = et, rt.isCancel = Ie, rt.VERSION = Ke, rt.toFormData = ue, rt.AxiosError = ie, rt.Cancel = rt.CanceledError, rt.all = function(e) {
                return Promise.all(e)
            }, rt.spread = function(e) {
                return function(t) {
                    return e.apply(null, t)
                }
            }, rt.isAxiosError = function(e) {
                return ee.isObject(e) && !0 === e.isAxiosError
            }, rt.mergeConfig = We, rt.AxiosHeaders = Te, rt.formToJSON = e => we(ee.isHTMLForm(e) ? new FormData(e) : e), rt.getAdapter = je, rt.HttpStatusCode = nt, rt.default = rt;
            const it = rt;
            var ot = n("1oZX");
            const at = function(e) {
                var t = e.wsSend,
                    n = e.activeChatRoom,
                    a = e.chatCoreFunctionHooks,
                    c = a.findExistingMessage,
                    l = a.updateMessage,
                    u = a.sendMessage,
                    d = a.createMinimumWsMessagePayload,
                    h = function(e) {
                        if (e.groupId) {
                            var n = c(e).existingMessage;
                            if (n) {
                                var r = e.fileStatus,
                                    o = e.abortController,
                                    a = e.isImage,
                                    s = e.uploadProgress,
                                    u = (0, b.A)((0, i.A)({}, n), {
                                        fileStatus: r,
                                        abortController: o,
                                        uploadProgress: s
                                    });
                                r === p.BM.Retrieving && (a ? function(e, n) {
                                    (null === e || void 0 === e ? void 0 : e.imageUrl) && (0, ot.b)(e.imageUrl, {
                                        maxRetry: 5,
                                        initialDelay: 2e3,
                                        onReady: function() {
                                            t(e), (0, m.h)("c2c-chat-image-retrieve-success", e), h((0, b.A)((0, i.A)({}, e), {
                                                isImage: n,
                                                fileStatus: p.BM.Success
                                            }))
                                        },
                                        onFailed: function() {
                                            (0, m.h)("c2c-chat-image-retrieve-failed", e), h((0, b.A)((0, i.A)({}, e), {
                                                isImage: n,
                                                fileStatus: p.BM.Error
                                            }))
                                        }
                                    })
                                }(u, a) : t(u)), l(u, "localOnly")
                            }
                        }
                    },
                    v = function() {
                        var e = (0, r.A)(s().mark((function e(t, n, r) {
                            var o, a, c;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, h((0, b.A)((0, i.A)({}, r), {
                                            fileStatus: p.BM.Uploading
                                        })), o = new AbortController, e.next = 5, it.put(n, t, {
                                            signal: o.signal,
                                            onUploadProgress: function(e) {
                                                var t = e.total && Math.round(e.loaded / e.total * 100);
                                                h((0, b.A)((0, i.A)({}, r), {
                                                    fileStatus: p.BM.Uploading,
                                                    abortController: o,
                                                    uploadProgress: t
                                                }))
                                            }
                                        });
                                    case 5:
                                        if (200 === e.sent.status) {
                                            e.next = 8;
                                            break
                                        }
                                        throw new Error;
                                    case 8:
                                        a = (0, b.A)((0, i.A)({}, r), {
                                            fileStatus: p.BM.Retrieving
                                        }), h(a), (0, m.h)("c2c-chat-file-upload-success", a), e.next = 18;
                                        break;
                                    case 13:
                                        e.prev = 13, e.t0 = e.catch(0), c = (0, b.A)((0, i.A)({}, r), {
                                            fileStatus: "ERR_CANCELED" === e.t0.code ? p.BM.Cancelled : p.BM.Error
                                        }), h(c), (0, m.h)("c2c-chat-file-upload-failed", c);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 13]
                            ])
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    g = function() {
                        var e = (0, r.A)(s().mark((function e(t, a, c) {
                            var l, h, m, g, y, w, _, E, x, C;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, f.uk)({
                                            thumbnailHeight: 158,
                                            thumbnailWidth: 158
                                        });
                                    case 3:
                                        if (l = e.sent, h = l.success, m = l.data, h && m) {
                                            e.next = 8;
                                            break
                                        }
                                        return e.abrupt("return", {
                                            imageUrl: "",
                                            thumbnailUrl: "",
                                            success: !1
                                        });
                                    case 8:
                                        return e.next = 10, (0, ot.In)(t);
                                    case 10:
                                        return g = e.sent, e.t0 = o.A, e.next = 14, (0, ot.a5)(g);
                                    case 14:
                                        return e.t1 = e.sent, y = (0, e.t0)(e.t1, 4), w = y[0], _ = y[1], y[2], E = y[3], x = m.uploadUrl.replace("http:", window.location.protocol), C = d({
                                            type: p.Go.Image,
                                            content: "",
                                            groupId: a,
                                            orderNo: c,
                                            isFromChatPage: !!(null === n || void 0 === n ? void 0 : n.isFromChatPage),
                                            image_url: m.rawImageUrl,
                                            thumbnail_url: m.thumbnailUrl,
                                            image_type: t.type.split("/")[1],
                                            imageUrl: m.rawImageUrl,
                                            thumbnailUrl: m.thumbnailUrl,
                                            width: w,
                                            height: _,
                                            fileStatus: p.BM.Uploading,
                                            resend: (0, r.A)(s().mark((function e() {
                                                return s().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", v(E || t, x, (0, b.A)((0, i.A)({}, C), {
                                                                isImage: !0
                                                            })));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })))
                                        }), u(C, "localOnly"), v(E || t, x, (0, b.A)((0, i.A)({}, C), {
                                            isImage: !0
                                        })), e.abrupt("return", {
                                            imageUrl: (null === m || void 0 === m ? void 0 : m.rawImageUrl) || "",
                                            thumbnailUrl: (null === m || void 0 === m ? void 0 : m.thumbnailUrl) || "",
                                            success: !0
                                        });
                                    case 27:
                                        return e.prev = 27, e.t2 = e.catch(0), e.abrupt("return", {
                                            imageUrl: "",
                                            thumbnailUrl: "",
                                            success: !1
                                        });
                                    case 30:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 27]
                            ])
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    y = function() {
                        var e = (0, r.A)(s().mark((function e(t, o, a) {
                            var c, l, h;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, f.mX)({
                                            fileName: t.name
                                        });
                                    case 3:
                                        if (c = e.sent.data) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error;
                                    case 6:
                                        l = c.presignedUrl.replace("http:", window.location.protocol), h = d({
                                            type: p.Go.Video,
                                            orderNo: a,
                                            groupId: o,
                                            fileUrl: c.objKeyPrefix,
                                            content: "",
                                            video: t,
                                            fileStatus: p.BM.Uploading,
                                            transcodingStatus: p.TZ.Pending,
                                            isFromChatPage: !!(null === n || void 0 === n ? void 0 : n.isFromChatPage),
                                            resend: (0, r.A)(s().mark((function e() {
                                                return s().wrap((function(e) {
                                                    for (;;) switch (e.prev = e.next) {
                                                        case 0:
                                                            return e.abrupt("return", v(t, l, (0, b.A)((0, i.A)({}, h), {
                                                                isImage: !1
                                                            })));
                                                        case 1:
                                                        case "end":
                                                            return e.stop()
                                                    }
                                                }), e)
                                            })))
                                        }), u(h, "localOnly"), v(t, l, (0, b.A)((0, i.A)({}, h), {
                                            isImage: !1
                                        })), e.next = 14;
                                        break;
                                    case 12:
                                        e.prev = 12, e.t0 = e.catch(0);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 12]
                            ])
                        })));
                        return function(t, n, r) {
                            return e.apply(this, arguments)
                        }
                    }();
                return {
                    handleImageUpload: g,
                    handleVideoUpload: y,
                    updateFileStatus: h
                }
            };
            var st = n("tEf9"),
                ct = n("wgY5"),
                lt = n.n(ct);

            function ut(e, t, n) {
                if (!t) return null;
                var r = lt()(t.createTime);
                if (!(!(e ? lt()(e.createTime) : r).isSame(r, "day") || !e && !n)) return null;
                var i = r.format("YYYY-MM-DD");
                return r.isSame(lt()(), "day") && (i = "c2c-user-chat-timestamp-today"), r.isSame(lt()().subtract(1, "day"), "day") && (i = "c2c-user-chat-timestamp-yesterday"), {
                    clientType: "web",
                    uuid: "".concat(+new Date(t.createTime), "timeStamp"),
                    groupId: t.groupId,
                    topicId: t.topicId || t.orderNo || "",
                    topicType: p.CK.Order,
                    status: p.wC.UnRead,
                    createTime: t.createTime,
                    self: !0,
                    content: i,
                    type: p.Go.System,
                    subType: p.Sj.Time,
                    sendStatus: p.tk.Success
                }
            }
            var dt = function(e, t) {
                    return e.reduce((function(n, r, i) {
                        var o, a;
                        if (n.push(e[i]), (null === (o = e[i + 1]) || void 0 === o ? void 0 : o.subType) === p.Sj.NewOrderNotice) {
                            var s = ut(void 0, e[i], !1);
                            return s && e[i].subType !== p.Sj.Time && n.push(s), n
                        }
                        if ((null === (a = e[i]) || void 0 === a ? void 0 : a.subType) === p.Sj.NewOrderNotice) return n;
                        var c = ut(e[i + 1], e[i], t);
                        return c && e[i].subType !== p.Sj.Time && n.push(c), n
                    }), [])
                },
                pt = n("MwrP"),
                ft = n.n(pt),
                ht = function(e) {
                    return (0, st.A)(Object.values(p.rF)).concat((0, st.A)(Object.values(p.Bq)), [p.VW.OrderCreated, p.RW.BuyerTradeWithRef, p.RW.MakerBuyWithRef, p.RW.SellWithRef]).includes(e)
                },
                mt = n("WA3n"),
                vt = n("DDY9"),
                gt = function() {
                    var e = (0, r.A)(s().mark((function e(t) {
                        var n, r, i, o, a, c, l, u, d, h, m, v, g, y;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.data, r = t.groupId, i = t.orderNo, o = t.isFromChatPage, c = n.messageList, l = null === c || void 0 === c ? void 0 : c.findIndex((function(e) {
                                            if (e.type === p.Go.System) try {
                                                var t = !!e.content && JSON.parse(e.content);
                                                if (ft()(t)) return !1;
                                                var n = t.type;
                                                return ht(void 0 === n ? "" : n)
                                            } catch (r) {
                                                return !1
                                            }
                                            return !1
                                        })), u = null === (a = c[l]) || void 0 === a ? void 0 : a.orderNo) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 7:
                                    return e.prev = 7, e.next = 11, (0, f.XV)({
                                        orderNo: u
                                    });
                                case 11:
                                    if (h = e.sent, m = h.data, vt.hw.includes(null === m || void 0 === m ? void 0 : m.orderStatus)) {
                                        e.next = 16;
                                        break
                                    }
                                    return e.abrupt("return", n);
                                case 16:
                                    return v = (0, mt.Wt)({
                                        content: "",
                                        groupId: r,
                                        type: p.Go.System,
                                        subType: p.Sj.NewOrderNotice,
                                        sendStatus: p.tk.Success,
                                        isFromChatPage: !!o,
                                        createTime: null === (d = c[l]) || void 0 === d ? void 0 : d.createTime
                                    }), g = l !== (null === c || void 0 === c ? void 0 : c.length) - 1, c.splice(l + 1, 0, v), y = !i || i === u ? c.slice(0, l + 2) : c, e.abrupt("return", {
                                        messageList: y,
                                        hasPreviousPage: g,
                                        hasNextPage: !1,
                                        earliestMessageIdFromApi: c[l].id,
                                        mostRecentMessageIdFromApi: n.mostRecentMessageIdFromApi
                                    });
                                case 24:
                                    return e.prev = 24, e.t0 = e.catch(7), e.abrupt("return", n);
                                case 27:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [7, 24]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
            const yt = function(e) {
                var t = e.chatCoreFunctionHooks,
                    n = e.activeChatRoom,
                    a = e.updateActiveChatRoom,
                    l = t.updateChatroom,
                    u = (0, o.A)((0, c.useState)(!1), 2),
                    d = u[0],
                    h = u[1],
                    m = function() {
                        var e = (0, r.A)(s().mark((function e(t) {
                            var n, r, o, a, c;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.groupId, r = t.id, o = t.direction, a = void 0 === o ? p.Yl.Up : o, e.prev = 1, e.next = 4, (0, f.r)((0, b.A)((0, i.A)({
                                            rows: 20,
                                            page: 1
                                        }, r && {
                                            id: r
                                        }), {
                                            groupId: n,
                                            direction: a
                                        }));
                                    case 4:
                                        if ((c = e.sent).success) {
                                            e.next = 7;
                                            break
                                        }
                                        throw new Error;
                                    case 7:
                                        return e.abrupt("return", c);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(1), e.abrupt("return", null);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    v = function() {
                        var e = (0, r.A)(s().mark((function e(t) {
                            var n, r, i, o, a, c, u, d, p, f, v, g, y, b;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.params, r = t.fallback, i = t.needReverse, o = t.needTimeStamp, a = void 0 === o || o, e.prev = 1, h(!0), e.next = 6, m(n);
                                    case 6:
                                        if (d = e.sent, (p = (null === d || void 0 === d ? void 0 : d.data) || []).length) {
                                            e.next = 12;
                                            break
                                        }
                                        return l({
                                            messageList: r,
                                            groupId: n.groupId,
                                            hasPreviousPage: !1,
                                            earliestMessageIdFromApi: void 0
                                        }), h(!1), e.abrupt("return", null);
                                    case 12:
                                        return f = 20 === p.length, v = 20 === p.length, i && p.reverse(), g = null === (c = p[0]) || void 0 === c ? void 0 : c.id, y = null === (u = p[p.length - 1]) || void 0 === u ? void 0 : u.id, b = a ? dt(p, f) : p, h(!1), e.abrupt("return", {
                                            messageList: b,
                                            hasPreviousPage: f,
                                            hasNextPage: v,
                                            earliestMessageIdFromApi: y,
                                            mostRecentMessageIdFromApi: g
                                        });
                                    case 22:
                                        return e.prev = 22, e.t0 = e.catch(1), e.abrupt("return", null);
                                    case 25:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 22]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    g = function() {
                        var e = (0, r.A)(s().mark((function e(t) {
                            var r, o, a, c, u, d;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (e.prev = 0, o = (r = t || n || {}).groupId, a = r.orderNo, o) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error;
                                    case 4:
                                        return e.next = 6, v({
                                            params: {
                                                groupId: o
                                            },
                                            fallback: [],
                                            needTimeStamp: !1
                                        });
                                    case 6:
                                        if (c = e.sent) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 9:
                                        return e.next = 11, gt({
                                            data: c,
                                            orderNo: a,
                                            groupId: o,
                                            isFromChatPage: !!(null === n || void 0 === n ? void 0 : n.isFromChatPage)
                                        });
                                    case 11:
                                        return u = e.sent, d = dt(u.messageList, c.hasPreviousPage), l((0, b.A)((0, i.A)({}, u), {
                                            groupId: o,
                                            messageList: d
                                        })), e.abrupt("return", !0);
                                    case 17:
                                        return e.prev = 17, e.t0 = e.catch(0), e.abrupt("return", !1);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 17]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    y = function() {
                        var e = (0, r.A)(s().mark((function e(t) {
                            var r, i, o, a, c, u, d;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.id, i = t.currentMessageList, e.prev = 1, n) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error;
                                    case 4:
                                        return o = n.groupId, e.next = 7, v({
                                            params: {
                                                groupId: o,
                                                id: r,
                                                direction: p.Yl.Up
                                            },
                                            fallback: (0, st.A)(i)
                                        });
                                    case 7:
                                        if (a = e.sent) {
                                            e.next = 10;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 10:
                                        return c = a.messageList, u = a.hasPreviousPage, d = a.earliestMessageIdFromApi, l({
                                            messageList: i.concat(c),
                                            groupId: o,
                                            hasPreviousPage: u,
                                            earliestMessageIdFromApi: d
                                        }), e.abrupt("return", !0);
                                    case 15:
                                        return e.prev = 15, e.t0 = e.catch(1), e.abrupt("return", !1);
                                    case 18:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 15]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    w = function() {
                        var e = (0, r.A)(s().mark((function e(t) {
                            var r, i, o, c, u, d, f;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.id, e.prev = 1, n) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error;
                                    case 4:
                                        return i = n.groupId, l({
                                            messageList: [],
                                            groupId: i,
                                            hasPreviousPage: !1
                                        }), e.next = 8, v({
                                            params: {
                                                groupId: i,
                                                id: r,
                                                direction: p.Yl.Down
                                            },
                                            fallback: [],
                                            needReverse: !0
                                        });
                                    case 8:
                                        if (o = e.sent) {
                                            e.next = 11;
                                            break
                                        }
                                        return e.abrupt("return", !1);
                                    case 11:
                                        return c = o.messageList, u = o.mostRecentMessageIdFromApi, d = o.earliestMessageIdFromApi, f = o.hasNextPage, l({
                                            messageList: c,
                                            groupId: i,
                                            earliestMessageIdFromApi: d,
                                            hasPreviousPage: !f
                                        }), a({
                                            searchMessage: {
                                                viewOldMessageMode: f,
                                                hasNextPage: f,
                                                mostRecentMessageIdFromApi: u
                                            }
                                        }), e.abrupt("return", !0);
                                    case 17:
                                        return e.prev = 17, e.t0 = e.catch(1), e.abrupt("return", !1);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 17]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    _ = function() {
                        var e = (0, r.A)(s().mark((function e(t) {
                            var r, i, o, c, u, d, f;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (r = t.id, i = t.currentMessageList, e.prev = 1, n) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error;
                                    case 4:
                                        return o = n.groupId, e.next = 7, v({
                                            params: {
                                                groupId: o,
                                                id: r,
                                                direction: p.Yl.Down
                                            },
                                            fallback: (0, st.A)(i),
                                            needReverse: !0
                                        });
                                    case 7:
                                        if (c = e.sent) {
                                            e.next = 11;
                                            break
                                        }
                                        return a({
                                            searchMessage: {
                                                viewOldMessageMode: !1,
                                                hasNextPage: !1,
                                                mostRecentMessageIdFromApi: void 0
                                            }
                                        }), e.abrupt("return", !1);
                                    case 11:
                                        return u = c.messageList, d = c.hasNextPage, f = c.mostRecentMessageIdFromApi, l({
                                            messageList: u.concat(i),
                                            groupId: o,
                                            hasPreviousPage: !d
                                        }), a({
                                            searchMessage: {
                                                viewOldMessageMode: d,
                                                hasNextPage: d,
                                                mostRecentMessageIdFromApi: f
                                            }
                                        }), e.abrupt("return", !0);
                                    case 17:
                                        return e.prev = 17, e.t0 = e.catch(1), e.abrupt("return", !1);
                                    case 20:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 17]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return {
                    fetching: d,
                    fetchInitialList: g,
                    fetchInitialListForSearchChat: w,
                    loadPreviousPage: y,
                    loadNextPage: _
                }
            };
            var bt = n("Rehy"),
                wt = n("fMvB"),
                _t = n("2voF"),
                Et = n("ImVr"),
                xt = function(e) {
                    var t, n, r = e.queryClient,
                        i = e.newMessage,
                        o = e.groupId,
                        a = e.activeChatRoomData;
                    if (r && i.type === p.Go.System && o === (null === a || void 0 === a ? void 0 : a.groupId) && (null === a || void 0 === a || null === (t = a.latestOrderInfo) || void 0 === t ? void 0 : t.orderNumber)) try {
                        var s, c, l = !!i.content && JSON.parse(i.content) || {};
                        if (ht(l.type)) r.setQueryData(_t.Rx({
                            tradeUserNo: null === a || void 0 === a || null === (c = a.counterPartyInfo) || void 0 === c ? void 0 : c.userNo,
                            page: 1,
                            rows: 1
                        }), {
                            data: [{
                                orderNumber: i.orderNo
                            }]
                        });
                        i.orderNo === (null === a || void 0 === a || null === (s = a.latestOrderInfo) || void 0 === s ? void 0 : s.orderNumber) && (n = l.type, [p.RW.BuyerPaidWithRef, p.RW.SellerPaidWithRef, p.y2.SellerKycSuccess, p.y2.BuyerKycSuccess, p.y2.SellerNewUserSuccess, p.y2.BuyerOldUserSuccess, p.y2.BuyerNewUserSuccess, p.y2.SellerOldUserSuccess].concat((0, st.A)(Object.values(p.mQ)), (0, st.A)(Object.values(p.EM)), (0, st.A)(Object.values(p.mL))).includes(n)) && r.invalidateQueries(Et.l({
                            orderNumber: a.latestOrderInfo.orderNumber
                        }))
                    } catch (u) {}
                },
                Ct = n("1WnT");
            const At = function(e, t) {
                var n, r, o = t.actionType,
                    a = t.localOnly,
                    s = t.userInfo,
                    c = t.activeChatRoom,
                    l = t.activeChatRoomData,
                    u = t.wsStatus,
                    d = t.wsSend,
                    f = t.chatRoomList,
                    h = t.chatRoom,
                    m = t.message,
                    v = t.queryClient,
                    g = (null === h || void 0 === h ? void 0 : h.groupId) || (null === m || void 0 === m ? void 0 : m.groupId) || (null === c || void 0 === c ? void 0 : c.groupId) || "-1",
                    y = (null === m || void 0 === m ? void 0 : m.orderNo) || (null === c || void 0 === c ? void 0 : c.orderNo) || (null === e || void 0 === e || null === (n = e[g]) || void 0 === n || null === (r = n.latestOrderInfo) || void 0 === r ? void 0 : r.orderNumber) || null,
                    w = !!(null === c || void 0 === c ? void 0 : c.isFromChatPage);
                switch (o) {
                    case "updateChatRoomList":
                        return f || e;
                    case "updateChatroom":
                        if (!g) return e;
                        var _ = (0, i.A)({}, e);
                        return _[g] = (0, i.A)({}, _[g], h), _;
                    case "sendMessage":
                        var E;
                        if (!m || !g || !e[g]) return e;
                        var x = (0, i.A)({}, e),
                            C = x[g],
                            A = (0, mt.Wt)((0, b.A)((0, i.A)({}, m), {
                                groupId: g,
                                orderNo: y,
                                isFromChatPage: w
                            }));
                        if (!(g === (null === c || void 0 === c ? void 0 : c.groupId) && (null === c || void 0 === c || null === (E = c.searchMessage) || void 0 === E ? void 0 : E.viewOldMessageMode))) {
                            var S = ut(C.messageList[0], A, !1);
                            C.messageList = [A].concat((0, st.A)(S ? [S] : []), (0, st.A)(C.messageList))
                        }
                        var k = u === WebSocket.OPEN;
                        return d && k && !a && d(A), x[g] = C, x;
                    case "updateMessage":
                        var R, T;
                        if (!m || !g || !e[g]) return e;
                        var B = (0, i.A)({}, e),
                            I = B[g],
                            P = null === (R = I.messageList) || void 0 === R ? void 0 : R.findIndex((function(e) {
                                return e.uuid && e.uuid === m.uuid
                            }));
                        if (-1 === P) return e;
                        var O = null === (T = I.messageList) || void 0 === T ? void 0 : T[P],
                            N = u === WebSocket.OPEN;
                        return d && N && !a && d((0, i.A)({}, O, m)), I.messageList[P] = (0, i.A)({}, O, m), B[g] = I, B;
                    case "receiveMessage":
                        var L;
                        if ((null === m || void 0 === m ? void 0 : m.type) === p.Go.Statistics) return function(e) {
                            var t = e.newMessage,
                                n = e.queryClient,
                                r = t.subType,
                                o = t.totalCount;
                            n.setQueryData(wt.n(), (function(e) {
                                if (e) return (0, b.A)((0, i.A)({}, e), {
                                    data: (0, i.A)({}, e.data, r === p.Sj.UnreadChatCount && {
                                        unreadChatCount: null !== o && void 0 !== o ? o : 0
                                    }, r === p.Sj.OngoingChatCount && {
                                        ongoingChatCount: null !== o && void 0 !== o ? o : 0
                                    }, r === p.Sj.TotalUnreadMessageCount && {
                                        totalUnreadMessageCount: null !== o && void 0 !== o ? o : 0
                                    }, r === p.Sj.SendPendingCount && {
                                        sendPendingCount: null !== o && void 0 !== o ? o : 0
                                    }, r === p.Sj.ReceivedPendingCount && {
                                        receivedPendingCount: null !== o && void 0 !== o ? o : 0
                                    })
                                })
                            }))
                        }({
                            newMessage: m,
                            queryClient: v
                        }), e;
                        if ((null === m || void 0 === m ? void 0 : m.type) === p.Go.Contact && (null === m || void 0 === m ? void 0 : m.subType) === p.Sj.AddContactRequest) {
                            var M = m.inviteeChatId,
                                U = m.status,
                                z = (null === s || void 0 === s ? void 0 : s.chatId) === M;
                            return U === p.IZ.Approved && z || v.invalidateQueries({
                                queryKey: Ct.J$({
                                    requestType: z ? p.sB.Received : p.sB.Requested
                                })
                            }), e
                        }
                        if (!m || !g || !e[g]) return e;
                        if (xt({
                                queryClient: v,
                                newMessage: m,
                                groupId: g,
                                activeChatRoomData: l
                            }), g === (null === c || void 0 === c ? void 0 : c.groupId) && (null === c || void 0 === c || null === (L = c.searchMessage) || void 0 === L ? void 0 : L.viewOldMessageMode)) return e;
                        var D = (0, i.A)({}, e),
                            F = D[g];
                        return function(e) {
                                var t = e.chatroom,
                                    n = e.activeChatRoom,
                                    r = e.newMessage,
                                    o = t.messageList.findIndex((function(e) {
                                        return e.uuid && e.uuid === r.uuid
                                    })),
                                    a = t.messageList[o];
                                if (r.type === p.Go.Error && !a && r.subType !== p.Sj.UntrustedUrl) return;
                                if (r.type !== p.Go.AutoReply || r.self) {
                                    if (r.sendStatus = r.type === p.Go.Error ? p.tk.Error : p.tk.Success, r.transcodingStatus === p.TZ.Success && (r.fileStatus = p.BM.Success), a) {
                                        if (r.subType === p.Sj.RecallRead && a.recallReadError && a.recallReadError(), r.subType === p.Sj.RecallTimeOut && a.recallTimeoutError && a.recallTimeoutError(), r.subType === p.Sj.Restriction) {
                                            r.sendStatus = p.tk.Error, r.content = a.content, r.restricted = !0;
                                            var s = (0, mt.Wt)({
                                                type: p.Go.System,
                                                subType: p.Sj.Restriction,
                                                content: "",
                                                groupId: a.groupId,
                                                orderNo: a.orderNo || (null === n || void 0 === n ? void 0 : n.orderNo) || "",
                                                isFromChatPage: !!(null === n || void 0 === n ? void 0 : n.isFromChatPage)
                                            });
                                            t.messageList = [s].concat((0, st.A)(t.messageList))
                                        }
                                        r.type === p.Go.Error && (r.type = a.originalType || a.type, r.subType !== p.Sj.UntrustedUrl && (r.subType = a.subType || r.subType))
                                    }
                                    if (a) {
                                        o = t.messageList.findIndex((function(e) {
                                            return e.uuid && e.uuid === r.uuid
                                        }));
                                        var c = (0, i.A)({}, a, r);
                                        t.messageList[o] = c
                                    } else {
                                        var l = ut(t.messageList[0], r, !1);
                                        t.messageList = [r].concat((0, st.A)(l ? [l] : []), (0, st.A)(t.messageList))
                                    }
                                }
                            }({
                                chatroom: F,
                                activeChatRoom: c,
                                newMessage: m
                            }),
                            function(e, t, n) {
                                var r = t.messageList,
                                    i = t.groupId;
                                if (e.type === p.Go.System) try {
                                    var o = JSON.parse(e.content || "");
                                    if (ft()(o)) return;
                                    var a = o.type;
                                    if (!ht(void 0 === a ? "" : a)) return;
                                    var s = r.findIndex((function(e) {
                                        return e.subType === p.Sj.NewOrderNotice
                                    })); - 1 !== s && r.splice(s, 1);
                                    var c = (0, mt.Wt)({
                                        content: "",
                                        groupId: i,
                                        type: p.Go.System,
                                        subType: p.Sj.NewOrderNotice,
                                        sendStatus: p.tk.Success,
                                        isFromChatPage: !!n
                                    });
                                    r.splice(1, 0, c)
                                } catch (l) {}
                            }(m, F, w), D[g] = F, D;
                    default:
                        return e
                }
            };
            const St = function(e) {
                var t, n = null === (t = e.activeChatRoom) || void 0 === t ? void 0 : t.groupId,
                    r = (0, o.A)((0, c.useReducer)(At, {}), 2),
                    a = r[0],
                    s = r[1],
                    l = (0, u.jE)(),
                    d = (0, b.A)((0, i.A)({}, e), {
                        queryClient: l
                    }),
                    p = (0, c.useMemo)((function() {
                        return n && a[n] || null
                    }), [n, a]);
                return {
                    activeChatRoomData: p,
                    localChatRoomList: a,
                    updateChatRoomList: function(e) {
                        s((0, i.A)({
                            actionType: "updateChatRoomList",
                            chatRoomList: e
                        }, d))
                    },
                    updateChatroom: function(e) {
                        s((0, i.A)({
                            actionType: "updateChatroom",
                            chatRoom: e
                        }, d))
                    },
                    sendMessage: function(e, t) {
                        s((0, i.A)({
                            actionType: "sendMessage",
                            message: e,
                            localOnly: "localOnly" === t
                        }, d))
                    },
                    updateMessage: function(e, t) {
                        s((0, i.A)({
                            actionType: "updateMessage",
                            message: e,
                            localOnly: "localOnly" === t
                        }, d))
                    },
                    receiveMessage: function(t) {
                        (0, bt.xL)({
                            newMessage: t,
                            contactListState: e.contactListState,
                            queryClient: l
                        }), s((0, i.A)({
                            actionType: "receiveMessage",
                            message: t,
                            activeChatRoomData: p
                        }, d))
                    },
                    findExistingMessage: function(e) {
                        var t, r = e.groupId || n || "-1",
                            i = (null === (t = a[r]) || void 0 === t ? void 0 : t.messageList) || [];
                        if (!i) return {
                            existingMessageIndex: -1,
                            existingMessage: null
                        };
                        var o = i.findIndex((function(t) {
                            return t.uuid && t.uuid === e.uuid
                        }));
                        return {
                            existingMessageIndex: o,
                            existingMessage: i[o]
                        }
                    },
                    createMinimumWsMessagePayload: mt.Wt
                }
            };
            var kt = n("ezuS"),
                Rt = n("T9BW"),
                Tt = n("3o5u"),
                Bt = n("5MW0"),
                It = n("FYhw"),
                Pt = n("vkN1"),
                Ot = n("B2Yp"),
                Nt = function(e) {
                    return [Pt.A.QUERY_ADVERTISER_SHARE, e]
                },
                Lt = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, It.I)(Nt(e), (function() {
                        return (0, Ot.bE)(Pt.A.QUERY_ADVERTISER_SHARE, e)
                    }), t)
                },
                Mt = "c2c_counterParty_suspension";
            const Ut = function(e) {
                var t, n = e.chatCoreFunctionHooks,
                    o = e.showChatToast,
                    a = e.userInfo,
                    l = e.setUserInfo,
                    u = (0, Rt.useTranslation)(Tt.VX).t,
                    d = n.activeChatRoomData || {},
                    h = d.groupId,
                    m = d.counterPartyInfo,
                    v = Bt.v4().data;
                (0, c.useEffect)((function() {
                    (null === v || void 0 === v ? void 0 : v.data) && w(v.data)
                }), [null === v || void 0 === v ? void 0 : v.data]);
                var g = Lt({
                    advertiserNo: null === a || void 0 === a ? void 0 : a.userNo
                }, {
                    enabled: !!(null === a || void 0 === a ? void 0 : a.userNo),
                    cacheTime: 1 / 0,
                    staleTime: 1 / 0
                }).data;
                (0, c.useEffect)((function() {
                    var e, t, n;
                    (null === g || void 0 === g ? void 0 : g.data) && w({
                        qrCode: null === (e = g.data) || void 0 === e ? void 0 : e.qrCode,
                        userStatsRet: null === (t = g.data) || void 0 === t || null === (n = t.advertiser) || void 0 === n ? void 0 : n.userStatsRet
                    })
                }), [null === g || void 0 === g ? void 0 : g.data]);
                var y = Lt({
                    advertiserNo: null === m || void 0 === m ? void 0 : m.userNo
                }, {
                    enabled: !!(null === m || void 0 === m ? void 0 : m.userNo),
                    cacheTime: 1 / 0,
                    staleTime: 1 / 0
                }).data;
                (0, c.useEffect)((function() {
                    var e;
                    (null === y || void 0 === y || null === (e = y.data) || void 0 === e ? void 0 : e.advertiser) && h && m && n.updateChatroom({
                        counterPartyInfo: (0, b.A)((0, i.A)({}, m), {
                            userStatsRet: y.data.advertiser.userStatsRet
                        }),
                        groupId: h
                    })
                }), [null === y || void 0 === y || null === (t = y.data) || void 0 === t ? void 0 : t.advertiser]);
                var w = function(e) {
                        return l((function(t) {
                            return t ? (0, i.A)({}, t, e) : e
                        }))
                    },
                    _ = function() {
                        var e = (0, r.A)(s().mark((function e(t) {
                            var n, r, a, c, l, d, h, m, v;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return n = t.counterPartyUserNo, e.prev = 1, e.next = 5, (0, f.Xz)({
                                            counterPartyUserNo: n
                                        });
                                    case 5:
                                        a = e.sent, (null === (r = a.data) || void 0 === r ? void 0 : r.counterPartyChatSuspensionFlag) === p.mG.Restricted && (c = localStorage.getItem(Mt), l = c ? JSON.parse(c) : {}, d = !0, (h = l[n]) && (m = lt()(h), v = lt().duration(lt()().diff(m)), d = v.asHours() > 24), d && (o(u("c2c-user-chat-counterparty-suspended")), localStorage.setItem(Mt, JSON.stringify((0, b.A)((0, i.A)({}, l), (0, kt.A)({}, n, lt()().toISOString())))))), e.next = 11;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(1);
                                    case 11:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 9]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                return {
                    showCounterPartyRestrictionNotice: _
                }
            };
            const zt = function(e) {
                var t, n, r, o, a = e.chatCoreFunctionHooks,
                    s = (a || {}).activeChatRoomData,
                    l = (s || {}).counterPartyInfo,
                    u = _t.g3({
                        tradeUserNo: (null === l || void 0 === l ? void 0 : l.userNo) || "",
                        page: 1,
                        rows: 1
                    }, {
                        enabled: !!(null === l || void 0 === l ? void 0 : l.userNo)
                    }).data,
                    d = Et.N({
                        orderNumber: null === u || void 0 === u || null === (t = u.data) || void 0 === t || null === (n = t[0]) || void 0 === n ? void 0 : n.orderNumber
                    }, {
                        enabled: !!(null === u || void 0 === u || null === (r = u.data) || void 0 === r || null === (o = r[0]) || void 0 === o ? void 0 : o.orderNumber),
                        onSuccess: function(e) {
                            (null === s || void 0 === s ? void 0 : s.groupId) && a.updateChatroom((0, b.A)((0, i.A)({}, s), {
                                latestOrderInfo: null === e || void 0 === e ? void 0 : e.data
                            }))
                        }
                    }).data;
                return (0, c.useEffect)((function() {
                    (null === s || void 0 === s ? void 0 : s.groupId) && a.updateChatroom((0, b.A)((0, i.A)({}, s), {
                        latestOrderInfo: null === d || void 0 === d ? void 0 : d.data
                    }))
                }), [null === s || void 0 === s ? void 0 : s.groupId]), null
            };
            var Dt = (0, c.createContext)(void 0),
                Ft = function() {
                    var e = (0, c.useContext)(Dt);
                    if (!e) throw new Error("useChat must be used within a ChatProvider");
                    return e
                };
            const jt = function(e) {
                var t = e.children,
                    n = (0, u.jE)(),
                    a = (0, o.A)((0, c.useState)(null), 2),
                    h = a[0],
                    v = a[1],
                    g = (0, o.A)((0, c.useState)(!1), 2),
                    b = g[0],
                    w = g[1],
                    _ = (0, o.A)((0, c.useState)(null), 2),
                    E = _[0],
                    x = _[1],
                    C = (0, o.A)((0, c.useState)({
                        selectedContact: null,
                        searchKey: "",
                        selectedMenu: p.qk.Contact,
                        selectedTab: p.xu.All
                    }), 2),
                    A = C[0],
                    S = C[1],
                    k = (0, c.useRef)(),
                    R = function(e) {
                        x((function(t) {
                            return t ? (0, i.A)({}, t, e) : null
                        }))
                    },
                    T = function(e) {
                        S((function(t) {
                            return (0, i.A)({}, t, e)
                        }))
                    },
                    B = function(e, t) {
                        R && R({
                            toast: {
                                show: !0,
                                content: e,
                                showTime: t
                            }
                        })
                    },
                    I = (0, d.k)().isLoggedIn,
                    P = y(k),
                    O = P.wsSend,
                    N = P.wsStatus,
                    L = St({
                        wsSend: O,
                        wsStatus: N,
                        userInfo: h,
                        activeChatRoom: E,
                        contactListState: A,
                        updateContactListState: T
                    }),
                    M = Ut({
                        chatCoreFunctionHooks: L,
                        showChatToast: B,
                        userInfo: h,
                        setUserInfo: v
                    }),
                    U = at({
                        wsSend: O,
                        activeChatRoom: E,
                        chatCoreFunctionHooks: L
                    }),
                    z = yt({
                        chatCoreFunctionHooks: L,
                        activeChatRoom: E,
                        updateActiveChatRoom: R
                    }),
                    D = L.localChatRoomList,
                    F = L.updateChatRoomList;
                zt({
                    chatCoreFunctionHooks: L
                }), (0, c.useEffect)((function() {
                    return I && P.beginSocket(),
                        function() {
                            return P.closeConnection()
                        }
                }), [I]), (0, c.useEffect)((function() {
                    k.current = L.receiveMessage
                }), [L.receiveMessage]);
                var j = function() {
                        var e = (0, r.A)(s().mark((function e(t) {
                            var n, r, i;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 4, (0, f.q3)({
                                            topicId: t,
                                            topicType: p.CK.Order,
                                            rows: 1,
                                            page: 1
                                        });
                                    case 4:
                                        if ((i = e.sent) && i.success && (null === i || void 0 === i || null === (n = i.data) || void 0 === n || null === (r = n[0]) || void 0 === r ? void 0 : r.groupId)) {
                                            e.next = 7;
                                            break
                                        }
                                        throw new Error;
                                    case 7:
                                        return e.abrupt("return", i.data[0]);
                                    case 10:
                                        return e.prev = 10, e.t0 = e.catch(0), e.abrupt("return", null);
                                    case 13:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }(),
                    H = function() {
                        var e = (0, r.A)(s().mark((function e(t) {
                            var n, r, i, o, a, c, l, u, d;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (n = t.orderNo, r = t.groupInfo, i = t.counterPartyUserNo, e.prev = 1, r || n) {
                                            e.next = 4;
                                            break
                                        }
                                        throw new Error;
                                    case 4:
                                        if (!r) {
                                            e.next = 8;
                                            break
                                        }
                                        e.t0 = r, e.next = 11;
                                        break;
                                    case 8:
                                        return e.next = 10, j(n);
                                    case 10:
                                        e.t0 = e.sent;
                                    case 11:
                                        if (o = e.t0) {
                                            e.next = 14;
                                            break
                                        }
                                        throw new Error;
                                    case 14:
                                        if (a = o.userDetailVo, c = o.groupId, l = (null === a || void 0 === a ? void 0 : a.userNo) || i, x({
                                                groupId: c,
                                                orderNo: n,
                                                chatVisible: !1,
                                                isFromChatPage: !n,
                                                counterPartyUserNo: l
                                            }), (0, m.h)("c2c-chat-enter-chatroom", {
                                                groupId: c,
                                                orderNo: n
                                            }), u = D[c]) {
                                            e.next = 30;
                                            break
                                        }
                                        return D[c] = {
                                            groupId: c,
                                            messageList: [],
                                            hasPreviousPage: !1
                                        }, F(D), e.next = 24, z.fetchInitialList({
                                            groupId: c,
                                            orderNo: n
                                        });
                                    case 24:
                                        e.sent && W({
                                            groupId: c
                                        }), L.updateChatroom({
                                            counterPartyInfo: o.userDetailVo,
                                            groupId: c
                                        }), l && M.showCounterPartyRestrictionNotice({
                                            counterPartyUserNo: l
                                        }), e.next = 38;
                                        break;
                                    case 30:
                                        if (u.messageList && 0 !== (null === (d = u.messageList) || void 0 === d ? void 0 : d.length)) {
                                            e.next = 37;
                                            break
                                        }
                                        return e.next = 34, z.fetchInitialList({
                                            groupId: c,
                                            orderNo: n
                                        });
                                    case 34:
                                        return e.sent && W({
                                            groupId: c
                                        }), e.abrupt("return");
                                    case 37:
                                        W({
                                            groupId: c
                                        });
                                    case 38:
                                        e.next = 44;
                                        break;
                                    case 40:
                                        e.prev = 40, e.t1 = e.catch(1), x(null), (0, m.h)("c2c-chat-enter-chatroom-failed", e.t1);
                                    case 44:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [1, 40]
                            ])
                        })));
                        return function(t) {
                            return e.apply(this, arguments)
                        }
                    }();
                (0, c.useEffect)((function() {
                    w(N === WebSocket.OPEN && !!E)
                }), [N, E]);
                var V = (0, c.useRef)(E);
                (0, c.useEffect)((function() {
                    V.current = E
                }), [E]);
                var q = (0, c.useRef)(D);
                (0, c.useEffect)((function() {
                    q.current = D
                }), [D]);
                var W = function() {
                    var e = (0, r.A)(s().mark((function e(t) {
                        var r, i;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.groupId, (0, bt.PV)({
                                        groupId: r,
                                        contactListState: A,
                                        queryClient: n
                                    }), e.prev = 2, e.next = 5, (0, f.s4)({
                                        groupId: r
                                    });
                                case 5:
                                    if (!((i = e.sent).data && i.data > 0)) {
                                        e.next = 8;
                                        break
                                    }
                                    return e.abrupt("return", !0);
                                case 8:
                                    return e.abrupt("return", !1);
                                case 11:
                                    return e.prev = 11, e.t0 = e.catch(2), e.abrupt("return", !1);
                                case 14:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [2, 11]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }();
                return l().createElement(Dt.Provider, {
                    value: (0, i.A)({
                        isChatRoomReady: b,
                        activeChatRoom: E,
                        contactListState: A,
                        userInfo: h,
                        fetchGroupInfo: j,
                        enterChatRoom: H,
                        leaveChatRoom: function() {
                            var e, t, n, r, o = V.current,
                                a = null !== (r = q.current) && void 0 !== r ? r : {};
                            if (o && (null === (e = o.searchMessage) || void 0 === e ? void 0 : e.viewOldMessageMode)) {
                                var s = (0, i.A)({}, a);
                                s[o.groupId] && delete s[o.groupId], F(s)
                            }
                            x(null), (0, m.h)("c2c-chat-enter-chatroom", {
                                groupId: null === (t = V.current) || void 0 === t ? void 0 : t.groupId,
                                orderNo: null === (n = V.current) || void 0 === n ? void 0 : n.orderNo
                            })
                        },
                        showChatToast: B,
                        markChatRoomMessagesAsRead: W,
                        updateActiveChatRoom: R,
                        updateContactListState: T
                    }, P, L, M, U, z)
                }, t)
            }
        },
        Rehy: (e, t, n) => {
            "use strict";
            n.d(t, {
                JY: () => m,
                PV: () => h,
                xL: () => p
            });
            var r = n("sViW"),
                i = n("BK7R"),
                o = n("QUKP"),
                a = n("3yYM"),
                s = n.n(a),
                c = n("wgY5"),
                l = n.n(c),
                u = n("wZ0P"),
                d = n("4EVw"),
                p = function(e) {
                    var t, n, r = e.newMessage,
                        a = e.contactListState,
                        s = e.queryClient;
                    if (r.groupId && r.createTime) {
                        f({
                            newMessage: r,
                            contactListState: a,
                            queryClient: s
                        });
                        var c = (0, d.c9)({
                                contactType: null === a || void 0 === a ? void 0 : a.selectedTab
                            }),
                            l = s.getQueryData(c),
                            p = s.getQueryState(c),
                            h = "fetching" === (null === p || void 0 === p ? void 0 : p.fetchStatus) || "loading" === (null === p || void 0 === p ? void 0 : p.status),
                            m = !0;
                        if ((null === a || void 0 === a ? void 0 : a.selectedTab) === u.xu.OngoingOrder && (m = !!r.hasOngoingOrder), (null === a || void 0 === a ? void 0 : a.selectedTab) === u.xu.UnreadMessage && (m = !!r.unreadCount), null === l || void 0 === l ? void 0 : l.pages.length) {
                            var v, g, y = null === l || void 0 === l ? void 0 : l.pages.flatMap((function(e) {
                                    return e.data
                                })),
                                b = null !== (v = null === y || void 0 === y ? void 0 : y.findIndex((function(e) {
                                    return e.groupId === r.groupId
                                }))) && void 0 !== v ? v : -1;
                            if (-1 !== b)
                                if (-1 === b || m) {
                                    if (r.self || r.type === u.Go.System || (void 0 !== r.unreadCount && (y[b].unreadMessageCount = r.unreadCount), r.status === u.wC.Read && (y[b].unreadMessageCount = 0)), !(r.createTime < (null !== (g = null === (t = y[b]) || void 0 === t || null === (n = t.lastMessage) || void 0 === n ? void 0 : n.createTime) && void 0 !== g ? g : 0))) {
                                        var w, _;
                                        if (y[b].lastMessage = r, b > 0) y.sort((function(e, t) {
                                            var n, r;
                                            return (null !== (w = null === (n = t.lastMessage) || void 0 === n ? void 0 : n.createTime) && void 0 !== w ? w : 0) - (null !== (_ = null === (r = e.lastMessage) || void 0 === r ? void 0 : r.createTime) && void 0 !== _ ? _ : 0)
                                        }));
                                        var E = null === l || void 0 === l ? void 0 : l.pages.map((function(e, t) {
                                            return (0, o.A)((0, i.A)({}, e), {
                                                data: 0 === t ? y : []
                                            })
                                        }));
                                        s.setQueryData(c, {
                                            pageParams: l.pageParams,
                                            pages: E
                                        })
                                    }
                                } else !h && s.invalidateQueries(c);
                            else !m || r.status !== u.wC.UnRead && r.type !== u.Go.System || h || s.invalidateQueries(c)
                        } else m && !h && s.invalidateQueries(c)
                    }
                },
                f = function(e) {
                    var t, n, r = e.newMessage,
                        a = e.contactListState,
                        s = e.queryClient;
                    if (r.groupId && r.createTime && (null === a || void 0 === a ? void 0 : a.searchKey)) {
                        var c = (0, d.UI)({
                                page: 1,
                                rows: 50,
                                groupName: null === a || void 0 === a ? void 0 : a.searchKey
                            }),
                            l = s.getQueryData(c),
                            p = null === l || void 0 === l ? void 0 : l.data;
                        if ((null === p || void 0 === p ? void 0 : p.length) && l) {
                            var f, h, m = null !== (f = null === p || void 0 === p ? void 0 : p.findIndex((function(e) {
                                return e.groupId === r.groupId
                            }))) && void 0 !== f ? f : -1;
                            if (-1 !== m) r.self || (void 0 !== r.unreadCount && (p[m].unreadMessageCount = r.unreadCount), r.status === u.wC.Read && (p[m].unreadMessageCount = 0)), r.createTime < (null !== (h = null === (t = p[m]) || void 0 === t || null === (n = t.lastMessage) || void 0 === n ? void 0 : n.createTime) && void 0 !== h ? h : 0) || (p[m].lastMessage = r, s.setQueryData(c, (0, o.A)((0, i.A)({}, l), {
                                data: p
                            })))
                        }
                    }
                },
                h = function() {
                    var e = (0, r.A)(s().mark((function e(t) {
                        var n, r, a, c, l, u, p, f, h, m, v;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = t.groupId, r = t.contactListState, a = t.queryClient, n) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (c = d.c9, l = c({
                                            contactType: null === r || void 0 === r ? void 0 : r.selectedTab
                                        }), u = a.getQueryState(l), !("fetching" === (null === u || void 0 === u ? void 0 : u.fetchStatus) || "loading" === (null === u || void 0 === u ? void 0 : u.status))) {
                                        e.next = 10;
                                        break
                                    }
                                    return e.next = 10, new Promise((function(e) {
                                        var t = a.getQueryCache().subscribe((function(n) {
                                            n.query.queryKey === l && "fetching" !== n.query.state.fetchStatus && "loading" !== (null === u || void 0 === u ? void 0 : u.status) && (t(), e())
                                        }))
                                    }));
                                case 10:
                                    if (null === (p = a.getQueryData(l)) || void 0 === p ? void 0 : p.pages.length) {
                                        e.next = 13;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 13:
                                    if (f = null === p || void 0 === p ? void 0 : p.pages.flatMap((function(e) {
                                            return e.data
                                        })), -1 !== (m = null !== (h = null === f || void 0 === f ? void 0 : f.findIndex((function(e) {
                                            return e.groupId === n
                                        }))) && void 0 !== h ? h : -1)) {
                                        e.next = 18;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 18:
                                    f[m].unreadMessageCount = 0, v = null === p || void 0 === p ? void 0 : p.pages.map((function(e, t) {
                                        return (0, o.A)((0, i.A)({}, e), {
                                            data: 0 === t ? f : []
                                        })
                                    })), a.setQueryData(l, {
                                        pageParams: p.pageParams,
                                        pages: v
                                    });
                                case 21:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                m = function(e, t) {
                    return e ? l()(e).isSame(l()(), "day") ? l()(e).format("HH:mm") : l()(e).isSame(l()().subtract(1, "day"), "day") ? t("c2c-user-chat-timestamp-yesterday") : l()(e).isSame(l()(), "year") ? l()(e).format("MM/DD") : l()(e).format("YYYY/MM/DD") : ""
                }
        },
        WA3n: (e, t, n) => {
            "use strict";
            n.d(t, {
                Bq: () => c,
                Du: () => a,
                Wt: () => s
            });
            var r = n("BK7R"),
                i = n("gZfF"),
                o = n("wZ0P"),
                a = function() {
                    return "".concat(+new Date)
                },
                s = function(e) {
                    e.isFromChatPage;
                    var t = e.orderNo,
                        n = (0, i.A)(e, ["isFromChatPage", "orderNo"]);
                    return (0, r.A)({
                        uuid: a(),
                        self: !0,
                        createTime: +new Date,
                        clientType: "web",
                        sourceType: e.isFromChatPage ? "contact" : "order",
                        sendStatus: o.tk.Pending
                    }, t && {
                        topicType: o.CK.Order,
                        topicId: t
                    }, n)
                },
                c = function(e) {
                    return e.uuid
                }
        },
        DDY9: (e, t, n) => {
            "use strict";
            n.d(t, {
                $n: () => B,
                AV: () => W,
                Bb: () => w,
                G$: () => p,
                JW: () => j,
                NE: () => P,
                P: () => T,
                Pd: () => K,
                Vr: () => m,
                _G: () => R,
                dm: () => v,
                eJ: () => O,
                gC: () => h,
                gD: () => L,
                hw: () => d,
                iD: () => I,
                ik: () => Y,
                qR: () => F,
                qg: () => N,
                rJ: () => q,
                re: () => f,
                s8: () => k,
                sJ: () => M,
                wh: () => o
            });
            var r, i, o, a = n("ezuS"),
                s = n("wgY5"),
                c = n.n(s),
                l = n("WgBO"),
                u = n("CYwS"),
                d = [l.Re.Freeze, l.Re.Unreceived, l.Re.Received, l.Re.Releasing, l.Re.InAppeal],
                p = "YYYY-MM-DD HH:mm",
                f = 8,
                h = 6,
                m = 375,
                v = {
                    IN_PROGRESS: 1,
                    EXPORTED: 2,
                    EXPIRED: 3,
                    CANCELLED: 4
                },
                g = 0,
                y = 1,
                b = 2,
                w = (r = {}, (0, a.A)(r, v.IN_PROGRESS, "c2c-ui-exportOrders-exporting-status"), (0, a.A)(r, v.EXPORTED, "c2c-ui-exportOrders-exported-status"), (0, a.A)(r, v.EXPIRED, "c2c-ui-exportOrders-invalid-status"), (0, a.A)(r, v.CANCELLED, "c2c-ui-exportOrders-cancelled-status"), r);
            i = {}, (0, a.A)(i, v.IN_PROGRESS, "#F0B90B"), (0, a.A)(i, v.EXPORTED, "t.buy"), (0, a.A)(i, v.EXPIRED, "t.sell"), (0, a.A)(i, v.CANCELLED, "#B7BDC6");
            ! function(e) {
                e[e.BUY = u.nP.Buy] = "BUY", e[e.SELL = u.nP.Sell] = "SELL"
            }(o || (o = {}));
            var _, E, x, C, A, S, k = "all",
                R = -2,
                T = R,
                B = 1,
                I = 2,
                P = 3,
                O = 4,
                N = 5,
                L = 6,
                M = 7,
                U = {
                    id: "C2CordersList_btn_appealDetail",
                    txt: "c2c-ui-fiatOrders-appeal-detail-operation",
                    tooltip: "c2c-ui-fiatOrders-appeal-detail-operation-tip"
                },
                z = (_ = {}, (0, a.A)(_, g, "c2c-ui-fiatOrders-complainant-process-status"), (0, a.A)(_, y, "c2c-ui-fiatOrders-complaint-process-status"), (0, a.A)(_, b, "c2c-ui-fiatOrders-cs-process-status"), _),
                D = (E = {}, (0, a.A)(E, g, "c2c-ui-fiatOrders-complaint-process-status"), (0, a.A)(E, y, "c2c-ui-fiatOrders-complainant-process-status"), (0, a.A)(E, b, "c2c-ui-fiatOrders-cs-process-status"), E),
                F = (x = {}, (0, a.A)(x, g, [U]), (0, a.A)(x, y, [U]), (0, a.A)(x, b, [U]), x),
                j = (C = {}, (0, a.A)(C, 0, []), (0, a.A)(C, B, []), (0, a.A)(C, I, [{
                    id: "C2CordersList_btn_appeal",
                    txt: "c2c-ui-fiatOrders-appeal-operation",
                    tooltip: "c2c-ui-fiatOrders-appeal-operation-tip"
                }]), (0, a.A)(C, P, []), (0, a.A)(C, O, [{
                    id: "C2CordersList_btn_receipt",
                    txt: "c2c-ui-fiatOrders-receipt-operation"
                }]), (0, a.A)(C, L, []), (0, a.A)(C, M, []), C),
                H = (A = {}, (0, a.A)(A, 0, "c2c-ui-fiatOrders-process-status"), (0, a.A)(A, P, "c2c-ui-fiatOrders-releasing-status"), (0, a.A)(A, B, "c2c-ui-fiatOrders-seller-pending-status"), (0, a.A)(A, I, "c2c-ui-fiatOrders-seller-release-status"), (0, a.A)(A, O, "c2c-ui-fiatOrders-completed-status"), (0, a.A)(A, L, "c2c-ui-fiatOrders-cancelled-status"), (0, a.A)(A, N, "c2c-ui-status-appealing"), (0, a.A)(A, M, "c2c-ui-status-cc"), A),
                V = (S = {}, (0, a.A)(S, 0, "c2c-ui-fiatOrders-process-status"), (0, a.A)(S, P, "c2c-ui-fiatOrders-releasing-status"), (0, a.A)(S, B, "c2c-ui-fiatOrders-pending-status"), (0, a.A)(S, I, "c2c-ui-fiatOrders-release-status"), (0, a.A)(S, O, "c2c-ui-fiatOrders-completed-status"), (0, a.A)(S, L, "c2c-ui-fiatOrders-cancelled-status"), (0, a.A)(S, N, "c2c-ui-status-appealing"), (0, a.A)(S, M, "c2c-ui-status-cc"), S),
                q = (0, a.A)({}, B, "notifyPayEndTime"),
                W = function(e) {
                    return e ? z : D
                },
                K = function(e) {
                    return e === u.nP.Sell ? H : V
                },
                Y = (c()().subtract(6, "months"), c()(), {
                    startDate: c()().subtract(3, "months").startOf("date").format("x"),
                    endDate: c()().endOf("date").format("x")
                })
        },
        fMvB: (e, t, n) => {
            "use strict";
            n.d(t, {
                n: () => s,
                s: () => c
            });
            var r = n("BK7R"),
                i = n("FYhw"),
                o = n("vkN1"),
                a = n("B2Yp"),
                s = function() {
                    return [o.A.QUERY_CONTACT_STATISTIC]
                },
                c = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return (0, i.I)(s(), (function() {
                        return (0, a.Jt)(o.A.QUERY_CONTACT_STATISTIC)
                    }), (0, r.A)({
                        staleTime: 1 / 0,
                        cacheTime: 1 / 0
                    }, e))
                }
        },
        "4EVw": (e, t, n) => {
            "use strict";
            n.d(t, {
                U$: () => p,
                UI: () => d,
                c9: () => u,
                i2: () => f,
                uq: () => h
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("FYhw"),
                a = n("vkN1"),
                s = n("B2Yp"),
                c = n("rlo4"),
                l = n("x9UB"),
                u = function(e) {
                    return [a.A.QUERY_GROUPS, e]
                },
                d = function(e) {
                    return [a.A.SEARCH_GROUPS, e]
                },
                p = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        c = (0, l.k)().isLoggedIn;
                    return (0, o.I)(u(e), (function() {
                        return (0, s.bE)(a.A.QUERY_GROUPS, e)
                    }), (0, i.A)((0, r.A)({}, n), {
                        enabled: Boolean((null === (t = null === n || void 0 === n ? void 0 : n.enabled) || void 0 === t || t) && c)
                    }))
                },
                f = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return (0, c.A)({
                        moreEleRef: t,
                        queryKey: u(e),
                        queryFn: function(t) {
                            var n = t.pageParam,
                                o = void 0 === n ? 1 : n;
                            return (0, s.bE)(a.A.QUERY_GROUPS, (0, i.A)((0, r.A)({
                                rows: 10
                            }, e), {
                                page: o
                            }))
                        },
                        otherQueryConfig: n
                    })
                },
                h = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.I)(d(e), (function() {
                        return (0, s.bE)(a.A.SEARCH_GROUPS, e)
                    }), t)
                }
        },
        "5MW0": (e, t, n) => {
            "use strict";
            n.d(t, {
                d2: () => f,
                v4: () => p
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("FYhw"),
                a = n("hCsC"),
                s = n("DfE6"),
                c = n("x9UB"),
                l = n("vkN1"),
                u = n("B2Yp"),
                d = function() {
                    return [l.A.QUERY_USER_CHAT_PROFILE]
                },
                p = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        n = (0, c.k)().isLoggedIn;
                    return (0, o.I)(d(), (function() {
                        return (0, u.bE)(l.A.QUERY_USER_CHAT_PROFILE)
                    }), (0, i.A)((0, r.A)({
                        cacheTime: 1 / 0,
                        staleTime: 1 / 0
                    }, t), {
                        enabled: Boolean((null === (e = null === t || void 0 === t ? void 0 : t.enabled) || void 0 === e || e) && n)
                    }))
                },
                f = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = (0, a.jE)();
                    return (0, s.n)((0, i.A)((0, r.A)({
                        mutationFn: function(e) {
                            return (0, u.bE)(l.A.UPDATE_USER_CHAT_PROFILE, e)
                        }
                    }, e), {
                        onSuccess: function(n, r, i) {
                            var o;
                            t.invalidateQueries({
                                queryKey: d()
                            }), null === (o = e.onSuccess) || void 0 === o || o.call(e, n, r, i)
                        }
                    }))
                }
        },
        "1WnT": (e, t, n) => {
            "use strict";
            n.d(t, {
                J$: () => c,
                Vn: () => l
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("vkN1"),
                a = n("B2Yp"),
                s = n("rlo4"),
                c = function(e) {
                    return [o.A.QUERY_CONTACT_REQUEST_LIST, e]
                },
                l = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return (0, s.A)({
                        moreEleRef: t,
                        queryKey: c(e),
                        queryFn: function(t) {
                            var n = t.pageParam,
                                s = void 0 === n ? 1 : n;
                            return (0, a.bE)(o.A.QUERY_CONTACT_REQUEST_LIST, (0, i.A)((0, r.A)({
                                rows: 10
                            }, e), {
                                page: s
                            }))
                        },
                        otherQueryConfig: n
                    })
                }
        },
        ImVr: (e, t, n) => {
            "use strict";
            n.d(t, {
                N: () => u,
                l: () => l
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("FYhw"),
                a = n("CYwS"),
                s = n("vkN1"),
                c = n("B2Yp"),
                l = function(e) {
                    return [s.A.GET_ORDER_DETAIL_V2, e]
                },
                u = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    return (0, o.I)(l(e), (function() {
                        return (0, c.bE)(s.A.GET_ORDER_DETAIL_V2, e)
                    }), (0, i.A)((0, r.A)({}, t), {
                        select: function(e) {
                            var t = null === e || void 0 === e ? void 0 : e.data;
                            return (0, i.A)((0, r.A)({}, e), {
                                data: (0, i.A)((0, r.A)({}, t), {
                                    isOwner: (null === t || void 0 === t ? void 0 : t.tradeType) === a.nP.Buy ? (null === t || void 0 === t ? void 0 : t.buyerUserNo) === (null === t || void 0 === t ? void 0 : t.merchantNo) : (null === t || void 0 === t ? void 0 : t.sellerUserNo) === (null === t || void 0 === t ? void 0 : t.merchantNo)
                                })
                            })
                        }
                    }))
                }
        },
        "2voF": (e, t, n) => {
            "use strict";
            n.d(t, {
                Rx: () => m,
                _q: () => g,
                g3: () => v
            });
            var r = n("sViW"),
                i = n("BK7R"),
                o = n("QUKP"),
                a = n("3yYM"),
                s = n.n(a),
                c = n("FYhw"),
                l = n("x9UB"),
                u = n("B2Yp"),
                d = n("vkN1"),
                p = n("aVXY"),
                f = function(e) {
                    return Object.fromEntries(Object.entries(e).filter((function(e) {
                        var t = (0, p.A)(e, 2);
                        t[0];
                        return null != t[1]
                    })))
                },
                h = n("rlo4"),
                m = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return [d.A.GET_ORDER_LIST_V2, e]
                },
                v = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = (0, l.k)().isLoggedIn,
                        a = f(e);
                    return (0, c.I)(m(a), (function() {
                        return (0, u.bE)(d.A.GET_ORDER_LIST_V2, f(a))
                    }), (0, o.A)((0, i.A)({}, n), {
                        enabled: Boolean((null === (t = null === n || void 0 === n ? void 0 : n.enabled) || void 0 === t || t) && r)
                    }))
                },
                g = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        a = (0, l.k)().isLoggedIn,
                        c = f(e);
                    return (0, h.A)({
                        moreEleRef: null === n || void 0 === n ? void 0 : n.moreEleRef,
                        queryKey: m(c),
                        queryFn: function() {
                            var e = (0, r.A)(s().mark((function e(t) {
                                var n, r;
                                return s().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return n = t.pageParam, r = void 0 === n ? 1 : n, e.abrupt("return", (0, u.bE)(d.A.GET_ORDER_LIST_V2, (0, o.A)((0, i.A)({}, c), {
                                                page: r
                                            })));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(),
                        otherQueryConfig: (0, o.A)((0, i.A)({}, n), {
                            enabled: Boolean((null === (t = null === n || void 0 === n ? void 0 : n.enabled) || void 0 === t || t) && a)
                        })
                    })
                }
        },
        rlo4: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var r = n("sViW"),
                i = n("BK7R"),
                o = n("3yYM"),
                a = n.n(o),
                s = n("DTvD"),
                c = n("EdqO"),
                l = n("1xil"),
                u = n.n(l);
            const d = function(e) {
                var t, n, o, l = e.moreEleRef,
                    d = e.queryKey,
                    p = e.queryFn,
                    f = e.otherQueryConfig,
                    h = (0, c.q)(d, p, (0, i.A)({
                        getNextPageParam: function(e, t) {
                            var n, r = (null === e || void 0 === e ? void 0 : e.total) || 0;
                            return ((null === (n = u()(t.map((function(e) {
                                return null === e || void 0 === e ? void 0 : e.data
                            })).filter((function(e) {
                                return Boolean(e)
                            })))) || void 0 === n ? void 0 : n.length) || 0) < r ? (null === t || void 0 === t ? void 0 : t.length) + 1 : void 0
                        }
                    }, f)),
                    m = h.status,
                    v = h.data,
                    g = h.fetchNextPage,
                    y = h.isFetching,
                    b = h.isInitialLoading,
                    w = h.isFetchingNextPage,
                    _ = h.hasNextPage,
                    E = "loading" === m || y,
                    x = E ? 0 : (null === v || void 0 === v || null === (t = v.pages) || void 0 === t ? void 0 : t[0].total) || 0,
                    C = E ? 0 : (null === (n = u()((null !== (o = null === v || void 0 === v ? void 0 : v.pages) && void 0 !== o ? o : []).map((function(e) {
                        return e.data
                    })).filter((function(e) {
                        return Boolean(e)
                    })))) || void 0 === n ? void 0 : n.length) || 0,
                    A = !E && (x > C && !!_);
                return (0, s.useLayoutEffect)((function() {
                    if (A && l.current) {
                        var e = new IntersectionObserver(function() {
                            var e = (0, r.A)(a().mark((function e(t) {
                                return a().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (!t[0].isIntersecting) {
                                                e.next = 3;
                                                break
                                            }
                                            return e.next = 3, g();
                                        case 3:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), {
                            threshold: .4,
                            rootMargin: "0px 0px"
                        });
                        return e.observe(l.current),
                            function() {
                                null === e || void 0 === e || e.disconnect()
                            }
                    }
                }), [A, g]), {
                    data: v,
                    loading: E,
                    numOfTotalItemsInCache: C,
                    hasMore: A,
                    isInitialLoading: b,
                    isFetchingNextPage: w
                }
            }
        },
        wZ0P: (e, t, n) => {
            "use strict";
            var r, i, o, a, s, c, l, u, d, p, f, h, m, v, g, y, b, w, _, E, x, C, A, S, k, R, T;
            n.d(t, {
                    BM: () => s,
                    Bq: () => b,
                    CK: () => i,
                    EM: () => E,
                    Go: () => d,
                    IZ: () => k,
                    Jw: () => R,
                    RW: () => v,
                    Sj: () => a,
                    TK: () => h,
                    TZ: () => c,
                    VW: () => m,
                    Yl: () => f,
                    b3: () => S,
                    mG: () => g,
                    mL: () => x,
                    mQ: () => _,
                    qk: () => r,
                    rF: () => w,
                    sB: () => A,
                    tk: () => u,
                    wC: () => l,
                    wN: () => T,
                    xu: () => p,
                    y2: () => y
                }),
                function(e) {
                    e.Profile = "profile", e.Contact = "contact", e.InvitationList = "invitationList", e.Setting = "setting"
                }(r || (r = {})),
                function(e) {
                    e.Order = "order"
                }(i || (i = {})),
                function(e) {
                    e[e.Private = 1] = "Private", e[e.Group = 2] = "Group", e[e.Public = 3] = "Public"
                }(o || (o = {})),
                function(e) {
                    e.UntrustedUrl = "UNTRUSTED_URL", e.RecallTimeOut = "RECALL_TIMEOUT", e.RecallRead = "RECALL_READ", e.Advertisement = "advertisement", e.PaymentMethod = "order_payment", e.PaymentMethodNew = "order_payment_v2", e.KycVerification = "add_kyc_vrf", e.Restriction = "PENALTIES_RESTRICTION", e.UnreadChatCount = "unreadChatCount", e.OngoingChatCount = "ongoingChatCount", e.TotalUnreadMessageCount = "totalUnreadMessageCount", e.SendPendingCount = "sendPendingCount", e.ReceivedPendingCount = "receivedPendingCount", e.AddContactRequest = "addContactRequest", e.Time = "time", e.NewOrderNotice = "new_order_notice"
                }(a || (a = {})),
                function(e) {
                    e.Uploading = "uploading", e.Retrieving = "retrieving", e.Success = "success", e.Error = "error", e.Cancelled = "cancelled"
                }(s || (s = {})),
                function(e) {
                    e[e.Pending = 0] = "Pending", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
                }(c || (c = {})),
                function(e) {
                    e.Read = "read", e.UnRead = "unread"
                }(l || (l = {})),
                function(e) {
                    e[e.Pending = 0] = "Pending", e[e.Success = 1] = "Success", e[e.Error = 2] = "Error"
                }(u || (u = {})),
                function(e) {
                    e.AutoReply = "auto_reply", e.System = "system", e.Text = "text", e.Image = "image", e.Video = "video", e.Card = "card", e.Recall = "recall", e.Error = "error", e.QuickReply = "quick_reply", e.Statistics = "statistics", e.Contact = "contact"
                }(d || (d = {})),
                function(e) {
                    e[e.All = 0] = "All", e[e.UnreadMessage = 1] = "UnreadMessage", e[e.OngoingOrder = 2] = "OngoingOrder", e[e.UserNo = 3] = "UserNo"
                }(p || (p = {})),
                function(e) {
                    e.Up = "up", e.Down = "down"
                }(f || (f = {})),
                function(e) {
                    e.EarlyRelease = "nlp_early_release", e.FakeCustomerService = "nlp_fake_customer_service", e.OfflinePayment = "nlp_offline_payment", e.ThirdParty = "nlp_third_party", e.FakeCop = "nlp_fake_cop", e.ImageScam = "nlp_image_scam", e.PhoneNumber = "nlp_phone_number", e.PaymentScreenshotScam = "local_payment_screenshot_scam", e.OtpIssue = "nlp_otp_issue", e.Email = "nlp_email_risk", e.NewRiskAlert = "risk_alert"
                }(h || (h = {})),
                function(e) {
                    e.OrderCreated = "cash_trade_order_created", e.StoreAlmostCloseReminder = "store_almost_close_reminder"
                }(m || (m = {})),
                function(e) {
                    e.BuyerTradeWithRef = "buyer_user_trading_with_ref", e.SellWithRef = "seller_user_trading_with_ref", e.MakerBuyWithRef = "buyer_merchant_trading_with_ref", e.BuyerPaidWithRef = "buyer_payed_with_ref", e.SellerPaidWithRef = "seller_payed_with_ref"
                }(v || (v = {})),
                function(e) {
                    e[e.Restricted = 1] = "Restricted", e[e.NotRestricted = 0] = "NotRestricted"
                }(g || (g = {})),
                function(e) {
                    e.SellerKycRequest = "c2c_extend_pay_time_before_extend_additional_kyc_seller", e.BuyerKycRequest = "c2c_extend_pay_time_before_extend_additional_kyc_buyer", e.SellerKycSuccess = "c2c_extend_pay_time_after_extend_additional_kyc_seller", e.BuyerKycSuccess = "c2c_extend_pay_time_after_extend_additional_kyc_buyer", e.SellerNewUserRequest = "c2c_extend_pay_time_before_extend_new_user_seller", e.BuyerNewUserRequest = "c2c_extend_pay_time_before_extend_new_user_buyer", e.SellerNewUserSuccess = "c2c_extend_pay_time_after_extend_new_user_seller", e.BuyerNewUserSuccess = "c2c_extend_pay_time_after_extend_new_user_buyer", e.SellerOldUserRequest = "c2c_extend_pay_time_before_extend_old_user_seller", e.BuyerOldUserRequest = "c2c_extend_pay_time_before_extend_old_user_buyer", e.SellerOldUserSuccess = "c2c_extend_pay_time_after_extend_old_user_seller", e.BuyerOldUserSuccess = "c2c_extend_pay_time_after_extend_old_user_buyer"
                }(y || (y = {})),
                function(e) {
                    e.MakerBuy = "order_created_with_additional_kyc_maker_buy", e.MakerSell = "order_created_with_additional_kyc_maker_sell", e.TakerBuy = "order_created_with_additional_kyc_taker_buy", e.TakerSell = "order_created_with_additional_kyc_taker_sell"
                }(b || (b = {})),
                function(e) {
                    e.Buy = "buyer_user_trading", e.Sell = "seller_user_trading", e.MakerBuy = "buyer_merchant_trading", e.MakerSell = "seller_merchant_trading"
                }(w || (w = {})),
                function(e) {
                    e.TakerSellMarkVerifiedKyc = "maker_verified_additional_kyc_taker_sell", e.MakerSellMarkVerifiedKyc = "maker_verified_additional_kyc_maker_sell", e.TakerBuyMarkVerifiedKyc = "maker_verified_additional_kyc_taker_buy", e.MakerBuyMarkVerifiedKyc = "maker_verified_additional_kyc_maker_buy", e.BuyerPaid = "buyer_payed", e.SellerPaid = "seller_payed", e.BuyerCompleted = "buyer_completed", e.SellerCompleted = "seller_completed", e.BuyerQuickCompleted = "buyer_quick_completed", e.SellerQuickCompleted = "seller_quick_completed", e.BuyerCancel = "buyer_cancelled", e.SellerCancel = "seller_cancelled"
                }(_ || (_ = {})),
                function(e) {
                    e.BeAppeal = "be_appeal", e.SubmitAppeal = "submit_appeal", e.BuyerAppeal = "buyer_appeal", e.SellerAppeal = "seller_appeal", e.BuyerAppealCompleted = "buyer_appeal_completed", e.SellerAppealCompleted = "seller_appeal_completed", e.BuyerCancelAppealCompleted = "buyer_cancel_appeal_completed", e.SellerCancelAppealCompleted = "seller_cancel_appeal_completed", e.BuyerSystemCancelAppeal = "buyer_system_cancel_appeal", e.SellerSystemCancelAppeal = "seller_system_cancel_appeal"
                }(E || (E = {})),
                function(e) {
                    e.BuyerForceCancelled = "buyer_force_cancelled", e.SellerForceReleased = "seller_force_released"
                }(x || (x = {})),
                function(e) {
                    e.CheckIdReminder = "check_id_reminder", e.SellerNameMismatch = "seller_payed_name_mismatch", e.OrderAboutTimeout = "order_about_timeout", e.KycDisclaimer = "order_created_with_additional_kyc_disclaimer", e.AddContactRequestApproved = "add_contact_request_approved", e.SellerReasonBuyerRequested = "seller_reason_buyer_requested", e.SellerReasonConfirmPending = "seller_reason_confirm_pending", e.SellerReasonAgree = "seller_reason_agree", e.SellerReasonDisagree = "seller_reason_disagree", e.SellerReasonExpired = "seller_reason_expired"
                }(C || (C = {})),
                function(e) {
                    e[e.All = 0] = "All", e[e.Requested = 1] = "Requested", e[e.Received = 2] = "Received"
                }(A || (A = {})),
                function(e) {
                    e[e.Search = 1] = "Search", e[e.QRCode = 2] = "QRCode", e[e.GroupChat = 3] = "GroupChat"
                }(S || (S = {})),
                function(e) {
                    e[e.Pending = 1] = "Pending", e[e.Approved = 2] = "Approved", e[e.Rejected = 3] = "Rejected", e[e.Cancelled = 4] = "Cancelled"
                }(k || (k = {})),
                function(e) {
                    e[e.Sender = 1] = "Sender", e[e.Receiver = 2] = "Receiver"
                }(R || (R = {})),
                function(e) {
                    e[e.Approve = 1] = "Approve", e[e.Reject = 0] = "Reject"
                }(T || (T = {}))
        },
        "1oZX": (e, t, n) => {
            "use strict";
            n.d(t, {
                yR: () => b,
                TT: () => w,
                hp: () => v,
                yj: () => y,
                f1: () => g,
                b: () => S,
                In: () => C,
                I3: () => E,
                ti: () => _,
                a5: () => A
            });
            var r = n("sViW"),
                i = n("3yYM"),
                o = n.n(i),
                a = n("VA12"),
                s = n("rAey"),
                c = n("Q+Qy"),
                l = n("B35M"),
                u = n("wIZF"),
                d = n("DTvD"),
                p = n.n(d),
                f = n("Y4uf");
            const h = function(e) {
                return p().createElement(f.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), p().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 21l-5-5H3V8h4l5-5v18zm9.015-9a9.968 9.968 0 01-2.93 7.072l-1.767-1.768a7.477 7.477 0 002.197-5.303c0-2.071-.84-3.946-2.197-5.304l1.768-1.767A9.969 9.969 0 0121.015 12z",
                    fill: "currentColor"
                }), p().createElement("path", {
                    d: "M15.535 15.536A4.984 4.984 0 0017 12c0-1.38-.56-2.63-1.465-3.535l-1.767 1.768c.452.452.732 1.077.732 1.767s-.28 1.316-.732 1.768l1.767 1.768z",
                    fill: "currentColor"
                }))
            };
            const m = function(e) {
                return p().createElement(f.A, (0, u.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), p().createElement("path", {
                    d: "M12.666 6l-2-2H4v4h16V6h-7.334z",
                    fill: "currentColor"
                }), p().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4 10v10h16V10H4zm14 2h-6v2h6v-2z",
                    fill: "currentColor"
                }))
            };
            var v = ".jpg,.jpeg,.png,.gif",
                g = ".mp4,.avi,.rm,.rmvb,.mov,.wmv",
                y = ".pdf",
                b = ".mp3",
                w = ".txt,.doc,.xls,.docx,.xlsx",
                _ = function(e) {
                    return v.includes(e.toLowerCase()) ? "image" : g.includes(e.toLowerCase()) ? "video" : y.includes(e.toLowerCase()) ? "pdf" : b.includes(e.toLowerCase()) ? "audio" : "file"
                },
                E = function(e) {
                    return "image" === e ? s.A : "video" === e ? c.A : "pdf" === e ? l.A : "audio" === e ? h : m
                };

            function x(e) {
                for (var t, n, r = e.split(","), i = null === (n = null === (t = r[0]) || void 0 === t ? void 0 : t.match(/:(.*?);/)) || void 0 === n ? void 0 : n[1], o = atob(r[1]), a = o.length, s = new Uint8Array(a); a--;) s[a] = o.charCodeAt(a);
                return new Blob([s], {
                    type: i
                })
            }

            function C(e) {
                return new Promise((function(t, n) {
                    var r = new FileReader;
                    r.readAsDataURL(e), r.onload = function() {
                        return t(r.result)
                    }, r.onerror = function(e) {
                        return n(e)
                    }
                }))
            }
            var A = function(e) {
                    return new Promise((function(t) {
                        n.e(4586).then(n.t.bind(n, "x3+h", 23)).then((function(n) {
                            (n.default || n)(e, {
                                image: !0
                            }, (function(e, n) {
                                var r = new window.Image;
                                r.src = e, r.onload = function() {
                                    return t([n.naturalWidth, n.naturalHeight, e, x(e)])
                                }
                            }))
                        }))
                    }))
                },
                S = function() {
                    var e = (0, r.A)(o().mark((function e(t, n) {
                        var i, s, c, l, u, d, p, f, h, m;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    i = n.maxRetry, s = void 0 === i ? 10 : i, c = n.delay, l = void 0 === c ? 2e3 : c, u = n.initialDelay, d = void 0 === u ? 0 : u, p = n.onReady, f = n.onFailed, h = function() {
                                        var e = (0, r.A)(o().mark((function e(t) {
                                            var n;
                                            return o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        return e.prev = 0, e.next = 3, (0, a.fetch)(t, {
                                                            method: "HEAD"
                                                        });
                                                    case 3:
                                                        return n = e.sent, e.abrupt("return", n.status < 400);
                                                    case 7:
                                                        return e.prev = 7, e.t0 = e.catch(0), e.abrupt("return", !1);
                                                    case 10:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e, null, [
                                                [0, 7]
                                            ])
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), m = function() {
                                        var e = (0, r.A)(o().mark((function e(n) {
                                            return o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (!(n <= 0)) {
                                                            e.next = 3;
                                                            break
                                                        }
                                                        return f(), e.abrupt("return");
                                                    case 3:
                                                        return e.next = 5, h(t);
                                                    case 5:
                                                        e.sent ? p() : setTimeout((function() {
                                                            return m(n - 1)
                                                        }), l);
                                                    case 7:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function(t) {
                                            return e.apply(this, arguments)
                                        }
                                    }(), d > 0 ? setTimeout((function() {
                                        return m(s)
                                    }), d) : m(s);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t, n) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        W8qe: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("w/Qz");
            const s = function(e) {
                return o().createElement(a.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M19.068 4.932A9.917 9.917 0 0012 2a9.917 9.917 0 00-7.068 2.932A9.917 9.917 0 002 11.988C2 17.521 6.479 22 12 22a9.917 9.917 0 007.068-2.932A9.992 9.992 0 0022 11.988a9.918 9.918 0 00-2.932-7.056zm-8.912 12.234L5.71 12.71l1.42-1.42 3.025 3.024 6.7-6.713 1.421 1.42-8.121 8.145z",
                    fill: "currentColor"
                }))
            }
        },
        "5cux": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("w/Qz");
            const s = function(e) {
                return o().createElement(a.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.326 13.909l-1.429 1.417L12 13.429l-3.897 3.897-1.429-1.417 3.909-3.898-3.909-3.908 1.429-1.417L12 10.583l3.897-3.897 1.429 1.417-3.897 3.908 3.897 3.898z",
                    fill: "currentColor"
                }))
            }
        },
        "1eoB": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("w/Qz");
            const s = function(e) {
                return o().createElement(a.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M88 48c0 22.091-17.909 40-40 40S8 70.091 8 48 25.909 8 48 8s40 17.909 40 40z",
                    fill: "url(#general-warning_svg__paint0_linear_22059_28207)"
                }), o().createElement("path", {
                    d: "M48 19c16.016 0 29 12.984 29 29S64.016 77 48 77 19 64.016 19 48s12.984-29 29-29z",
                    fill: "url(#general-warning_svg__paint1_linear_22059_28207)"
                }), o().createElement("path", {
                    d: "M45 66h6v-6h-6v6zM51 54V30h-6v24h6z",
                    fill: "#14151A"
                }), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "general-warning_svg__paint0_linear_22059_28207",
                    x1: 8,
                    y1: 48,
                    x2: 102.5,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B",
                    stopOpacity: 0
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F0B90B"
                })), o().createElement("linearGradient", {
                    id: "general-warning_svg__paint1_linear_22059_28207",
                    x1: 77,
                    y1: 48,
                    x2: 19,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            }
        },
        BMA0: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("M5j3"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("w/Qz");
            const s = function(e) {
                return o().createElement(a.A, (0, r.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    d: "M12.011 2H12C6.472 2 2 6.472 2 12c0 5.527 4.472 10 10 10 5.516 0 9.988-4.473 10-9.989.012-5.527-4.461-10-9.989-10.011zm.998 16.984h-2.018v-2.007h2.018v2.007zm0-4.633h-2.018V5.005h2.018v9.346z",
                    fill: "currentColor"
                }))
            }
        },
        S8bp: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => a
            });
            var r = n("DTvD"),
                i = n("VXBK"),
                o = n("NrY2");
            const a = function(e) {
                var t = e.children,
                    n = e.dir,
                    a = e.theme;
                return r.createElement(o.A.Consumer, null, (function(e) {
                    return r.createElement(o.A.Provider, {
                        value: n || e
                    }, r.createElement(i.NP, {
                        theme: a
                    }, t))
                }))
            }
        },
        afOl: (e, t, n) => {
            "use strict";
            n.d(t, {
                Ay: () => a,
                Q2: () => o,
                Vj: () => r,
                g3: () => i
            });
            var r = ["INR", "PKR"],
                i = {
                    INR_BUY: {
                        title: "Buy {{assetName}} ({{asset}}) with INR on Binance P2P Express | Competitive Rates",
                        description: "Buy {{asset}} with INR easily on the Binance P2P marketplace in Express mode. Discover the best rates & trade with experienced, trusted parties. Fast & secure!"
                    },
                    INR_SELL: {
                        title: "Sell {{assetName}} ({{asset}}) for INR on Binance P2P Express | Competitive Rates",
                        description: "Sell {{asset}} for INR and cash out easily on the Binance P2P marketplace in Express mode. Discover the best rates & trade with experienced, trusted parties. Fast & secure!"
                    },
                    PKR_BUY: {
                        title: "Buy {{assetName}} ({{asset}}) with PKR on Binance P2P Express | Competitive Rates",
                        description: "Buy {{asset}} with PKR easily on the Binance P2P marketplace in Express mode. Discover the best rates & trade with experienced, trusted parties. Fast & secure!"
                    },
                    PKR_SELL: {
                        title: "Sell {{assetName}} ({{asset}}) for PKR on Binance P2P Express | Competitive Rates",
                        description: "Sell {{asset}} for PKR and cash out easily on the Binance P2P marketplace in Express mode. Discover the best rates & trade with experienced, trusted parties. Fast & secure!"
                    }
                },
                o = {
                    INR_BUY: {
                        title: "Use INR to buy {{asset}} with Binance P2P | Local Payment Methods",
                        description: "Use INR to buy {{asset}} easily on the Binance P2P marketplace. Enjoy competitive prices and support for local P2P transfer methods."
                    },
                    INR_SELL: {
                        title: "Get INR by selling {{asset}} with Binance P2P | Local Payment Methods",
                        description: "Get INR by selling {{asset}} and cash out easily on the Binance P2P marketplace. Enjoy competitive prices and support for local P2P transfer methods."
                    },
                    PKR_BUY: {
                        title: "Use PKR to buy {{asset}} with Binance P2P | Local Payment Methods",
                        description: "Use PKR to buy {{asset}} easily on the Binance P2P marketplace. Enjoy competitive prices and support for local P2P transfer methods."
                    },
                    PKR_SELL: {
                        title: "Get PKR by selling {{asset}} with Binance P2P | Local Payment Methods",
                        description: "Get PKR by selling {{asset}} and cash out easily on the Binance P2P marketplace. Enjoy competitive prices and support for local P2P transfer methods."
                    }
                };
            const a = {
                brands: {
                    en: "Binance P2P",
                    cn: "\u5e01\u5b89\u4e70\u5e01",
                    "zh-CN": "\u5e01\u5b89\u4e70\u5e01",
                    tw: "\u5e01\u5b89",
                    kr: "\ubc14\uc774\ub0b8\uc2a4",
                    ru: "\u0411\u0438\u043d\u0430\u043d\u0441",
                    es: "Binance",
                    fr: "Binance",
                    de: "Binance",
                    vn: "Binance",
                    tr: "Binance",
                    nl: "Binance",
                    pt: "Binance",
                    it: "Binance",
                    pl: "Binance",
                    ja: "Binance"
                },
                metaTitles: {
                    en: "Buy and Sell Bitcoin on P2P | Local Bitcoin Exchange | Binance",
                    cn: "\u6bd4\u7279\u5e01\u4ea4\u6613\uff5c\u6bd4\u7279\u5e01\u4ea4\u6613\u5e73\u53f0\uff5c\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u5e73\u53f0\uff5c\u5e01\u5b89",
                    "zh-CN": "\u6bd4\u7279\u5e01\u4ea4\u6613\uff5c\u6bd4\u7279\u5e01\u4ea4\u6613\u5e73\u53f0\uff5c\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u5e73\u53f0\uff5c\u5e01\u5b89",
                    tw: "\u6bd4\u7279\u5e63\u4ea4\u6613\u5e73\u53f0 | \u6578\u5b57\u8ca8\u5e63\u4ea4\u6613\u5e73\u53f0 | \u5e01\u5b89",
                    kr: "\ube44\ud2b8\ucf54\uc778 \uac70\ub798\uc18c | \uc554\ud638\ud654\ud3d0 \uac70\ub798\uc18c | Binance",
                    ru: "\u0411\u0438\u0442\u043a\u043e\u0438\u043d \u0411\u0438\u0440\u0436\u0430 | \u041a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u0411\u0438\u0440\u0436\u0430 | Binance",
                    es: "Bitcoin Exchange | Exchange de Criptomonedas | Binance",
                    fr: "La plateforme d'\xe9change de Bitcoin | La plateforme d'\xe9change de cryptomonnaies | Binance",
                    de: "Bitcoin B\xf6rse | B\xf6rse f\xfcr Kryptow\xe4hrungen | Binance",
                    vn: "S\xe0n giao d\u1ecbch Bitcoin | S\xe0n giao d\u1ecbch ti\u1ec1n m\xe3 ho\xe1 | Binance",
                    tr: "Bitcoin Borsas\u0131 | Kriptopara Borsas\u0131 | Binance",
                    nl: "Bitcoin Handelsplatform | Cryptocurrency Handelsplatform | Binance",
                    pt: "Bitcoin Exchange | Exchange de criptomoedas | Binance",
                    it: "Bitcoin Exchange | Exchange di criptovalute | Binance",
                    pl: "Gie\u0142da Bitcoin | Gie\u0142da kryptowalut | Binance",
                    ja: "Bitcoin Exchange | Exchange de Criptomonedas | Binance"
                },
                metaKeywords: {
                    en: "Blockchain Crypto Exchange, Cryptocurrency Exchange, Bitcoin Trading, Ethereum price trend, BNB, CZ, BTC price, ETH wallet registration, LTC price, Binance, Poloniex, Bittrex",
                    cn: "\u533a\u5757\u94fe\u8d44\u4ea7\u4ea4\u6613\u5e73\u53f0,\u5e01\u5e01\u4ea4\u6613,\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u7f51,\u865a\u62df\u8d27\u5e01\u8d26\u6237,\u6bd4\u7279\u5e01\u4ea4\u6613\u7cfb\u7edf,\u4ee5\u592a\u574a\u884c\u60c5,\u83b1\u7279\u5e01\u8d70\u52bf,BNB,\u8d75\u957f\u9e4f,BTC\u4ef7\u683c,ETH\u94b1\u5305\u6ce8\u518c,LTC\u5e02\u4ef7,\u5e01\u5b89,\u6760\u6746\u671f\u8d27,Binance",
                    "zh-CN": "\u533a\u5757\u94fe\u8d44\u4ea7\u4ea4\u6613\u5e73\u53f0,\u5e01\u5e01\u4ea4\u6613,\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u7f51,\u865a\u62df\u8d27\u5e01\u8d26\u6237,\u6bd4\u7279\u5e01\u4ea4\u6613\u7cfb\u7edf,\u4ee5\u592a\u574a\u884c\u60c5,\u83b1\u7279\u5e01\u8d70\u52bf,BNB,\u8d75\u957f\u9e4f,BTC\u4ef7\u683c,ETH\u94b1\u5305\u6ce8\u518c,LTC\u5e02\u4ef7,\u5e01\u5b89,\u6760\u6746\u671f\u8d27,Binance",
                    tw: "\u533a\u5757\u94fe\u8d44\u4ea7\u4ea4\u6613\u5e73\u53f0,\u5e01\u5e01\u4ea4\u6613,\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u7f51,\u865a\u62df\u8d27\u5e01\u8d26\u6237,\u6bd4\u7279\u5e01\u4ea4\u6613\u7cfb\u7edf,\u4ee5\u592a\u574a\u884c\u60c5,\u83b1\u7279\u5e01\u8d70\u52bf,BNB,\u8d75\u957f\u9e4f,BTC\u4ef7\u683c,ETH\u94b1\u5305\u6ce8\u518c,LTC\u5e02\u4ef7,\u5e01\u5b89,\u6760\u6746\u671f\u8d27,Binance",
                    kr: "\ube14\ub85d\uccb4\uc778 \uac70\ub798\uc18c, \uac00\uc0c1\ud654\ud3d0 \uac70\ub798\uc18c, \ube44\ud2b8\ucf54\uc778 \uac70\ub798, \uc774\ub354\ub9ac\uc6c0 \uac00\uaca9 \ub3d9\ud5a5, BNB, CZ, BTC \uc2dc\uc138, ETH \uc9c0\uac11 \ub4f1\ub85d, LTC \ube44\uc138, \ubc14\uc774\ub0b8\uc2a4, \ud3f4\ub85c\ub2c8\uc5d1\uc2a4. \ube44\ud2b8\ub809\uc2a4",
                    ru: "\u0411\u043b\u043e\u043a\u0447\u0435\u043d \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u0431\u0438\u0440\u0436\u0430, \u041a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u0431\u0438\u0440\u0436\u0430, \u0422\u043e\u0440\u0433\u043e\u0432\u043b\u044f \u043d\u0430 \u0431\u0438\u0442\u043a\u043e\u0438\u043d, \u0446\u0435\u043d\u043e\u0432\u043e\u0439 \u0442\u0440\u0435\u043d\u0434 Ethereum, BNB, CZ, \u0446\u0435\u043d\u0430 BTC, \u0440\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044f \u043a\u043e\u0448\u0435\u043b\u044c\u043a\u0430 ETH, \u0446\u0435\u043d\u0430 LTC, \u0431\u0438\u043d\u0430\u043d\u0441, Poloniex, Bittrex",
                    es: "Cripto Monedas Blockchain Exchange, Compra Venta de Bitcoin, Tendencia de Precio Ethereum, BNB, CZ, BTC precio, ETH registro cartera, LTC precio, Binance, Poloniex, Bittrex",
                    fr: "Cryptomonnaie Blockchain Echange, Cryptommonaie Echange, Achat Vente de Bitcoin, Tendance des prix ETH, BNB, CZ, Prix du BTC, ETH cr\xe9ation de porte-monnaie, Prix du LTC, Binance, Poloniex, Bittrex",
                    de: "Blockchain und Krypto- Handelsplattform, Handelsplattform f\xfcr Kryptow\xe4hrung, Bitcoin Handeln, Ethereum Preis Trend, BNB, CZ, BTC Preis, ETH-Wallet Anmeldung, LTC Preis, Binance, Poloniex, Bittrex",
                    vn: "S\xe0n giao d\u1ecbch Blockchain Crypto, S\xe0n giao d\u1ecbch Cryptocurrency, Bitcoin Trading, xu h\u01b0\u1edbng gi\xe1 Ethereum , BNB, CZ, gi\xe1 BTC, \u0111\u0103ng k\xed v\xed ETH , gi\xe1 LTC, Binance, Poloniex, Bittrex",
                    tr: "Blockchain Kripto Borsas\u0131, Kripto Para Borsas\u0131,Bitcoin al\u0131m sat\u0131m, Ethereum fiyat trendi,BNB,CZ,BTC fiyat\u0131, Ethereum c\xfczdan kayd\u0131,LTC fiyat\u0131, Binance, Poloniex, Bittrex.",
                    nl: "Blockchain Crypto wisselkoers, Cryptocurrency wisselkoers, Bitcoin handel, Ethereum prijsontwikkeling, BNB, CZ, BTC-prijs, ETH-portemonnee-registratie, LTC-prijs, Binance",
                    pt: "Criptomoedas, Blockchain Cripto Bolsa, Bolsa de Criptomoedas, Bitcoin Trading, Tend\xeancia de pre\xe7os Ethereum, BNB, CZ, pre\xe7o BTC, registro carteira ETH, pre\xe7o LTC, Binance",
                    it: "chiave: Blockchain Piattaforma di scambio di Cripto, Criptomonete, Piattaforma di scambio, Trading di Bitcoin, Trend del prezzo di Ethereum, BNB, CZ, Prezzo di BTC, Registro del Portafoglio di ETH, Prezzo di LTC, Binance, Poloniex, Bittrex",
                    pl: "Gie\u0142da wymiany kryptowalut, handel kryptowalutami, handel walutami cyfrowymi, konto do walut wirtualnych, system handlu bitcoinami, rynek Ethereum, Litecoin, BNB, Zhao Changpeng, cena BTC, rejestracja portfela ETH, cena rynkowa LTC, opcje futures, Binance",
                    ja: "Cripto Monedas Blockchain Exchange, Compra Venta de Bitcoin, Tendencia de Precio Ethereum, BNB, CZ, BTC precio, ETH registro cartera, LTC precio, Binance, Poloniex, Bittrex"
                },
                metaDescriptions: {
                    en: "Get Bitcoins with Binance P2P today! Buy and sell Bitcoin via P2P with the best local bitcoin exchange rates when you make peer-to-peer trades on Binance.",
                    cn: "\u5e01\u5b89\u662f\u5168\u7403\u9886\u5148\u7684\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u5e73\u53f0\uff0c\u63d0\u4f9b\u6bd4\u7279\u5e01\u4ea4\u6613\u3001\u4ee5\u592a\u574a\u3001BNB\u4ee5\u53caUSDT\u7b49\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u3002",
                    "zh-CN": "\u5e01\u5b89\u662f\u5168\u7403\u9886\u5148\u7684\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u5e73\u53f0\uff0c\u63d0\u4f9b\u6bd4\u7279\u5e01\u4ea4\u6613\u3001\u4ee5\u592a\u574a\u3001BNB\u4ee5\u53caUSDT\u7b49\u6570\u5b57\u8d27\u5e01\u4ea4\u6613\u3002",
                    tw: "\u5e63\u5b89\u662f\u5168\u7403\u9818\u5148\u7684\u6578\u5b57\u8ca8\u5e63\u4ea4\u6613\u5e73\u53f0\uff0c\u63d0\u4f9b\u6bd4\u7279\u5e63\u3001\u4ee5\u592a\u574a\u3001BNB\u4ee5\u53caUSDT\u4ea4\u6613",
                    kr: "\ubc14\uc774\ub0b8\uc2a4 \uc554\ud638\ud654\ud3d0 \uac70\ub798\uc18c - \ube44\ud2b8\ucf54\uc778\uacfc \uc54c\ud2b8\ucf54\uc778\uc744 \uac70\ub798\ud560 \uc218 \uc788\ub294 \uc804\uc138\uacc4 \ucd5c\ub300 \uaddc\ubaa8\uc758 \uc554\ud638\ud654\ud3d0 \uac70\ub798\uc18c\uc785\ub2c8\ub2e4",
                    ru: "\u041a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u0430\u044f \u0431\u0438\u0440\u0436\u0430 Binance - \u041c\u044b \u0443\u043f\u0440\u0430\u0432\u043b\u044f\u0435\u043c \u043a\u0440\u0443\u043f\u043d\u0435\u0439\u0448\u0435\u0439 \u0432 \u043c\u0438\u0440\u0435 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442\u043d\u043e\u0439 \u0431\u0438\u0440\u0436\u0435\u0439 \u0411\u0438\u0442\u043a\u043e\u0438\u043d \u0438 \u0430\u043b\u044c\u0442\u043a\u043e\u0438\u043d\u043e\u0432 \u043f\u043e \u043e\u0431\u044a\u0435\u043c\u0443",
                    es: "Binance Exchange de Criptomonedas - Operamos el exchange de criptomonedas con mayor volumen en el mundo",
                    fr: "Binance est une plateforme avanc\xe9e qui vous propose d\u2019\xe9changer BTC, ETH, BNB et d\u2019autres cryptomonnaies",
                    de: "Binance B\xf6rse f\xfcr Kryptow\xe4hrungen \u2013 Wir betreiben f\xfcr Bitcoin und Altcoins die gr\xf6\xdfte B\xf6rse der Welt nach Tradingvolumen",
                    vn: "S\xe0n giao d\u1ecbch ti\u1ec1n m\xe3 ho\xe1 Binance - Ch\xfang t\xf4i l\xe0 s\xe0n giao d\u1ecbch Bitcoin v\xe0 Altcoin v\u1edbi kh\u1ed1i l\u01b0\u1ee3ng giao d\u1ecbch l\u1edbn nh\u1ea5t th\u1ebf gi\u1edbi",
                    tr: "Binance kriptopara borsas\u0131 - D\xfcnyan\u0131n en y\xfcksek hacimli bitcoin ve altcoin borsas\u0131n\u0131 i\u015fletiyoruz",
                    nl: "Binance cryptocurrency handelsplatform - Wij beheren's werelds grootste bitcoin en altcoin handelsplatform in de wereld gebaseerd op volume",
                    pt: "Binance, exchange de criptomoedas - n\xf3s operamos a maior exchange de bitcoin e altcoins do mundo por volume",
                    it: "Binance, exchange di criptovalute - Il maggior exchange di bitcoin e criptovalute del mondo per volume",
                    pl: "Binance - najwi\u0119ksza na \u015bwiecie gie\u0142da bitcoina i kryptowalut pod wzgl\u0119dem wolumen\xf3w handlowych",
                    ja: "Blockchain Crypto Exchange, Cryptocurrency Exchange, Bitcoin Trading, Ethereum price trend, BNB, CZ, BTC price, ETH wallet registration, LTC price, Binance, Poloniex, Bittrex"
                }
            }
        },
        "155P": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => Bt
            });
            var r = n("BK7R"),
                i = n("QUKP"),
                o = n("TrCV"),
                a = n("DTvD"),
                s = n.n(a),
                c = (n("LNcM"), n("LCuF")),
                l = n("aVXY"),
                u = n("C6y2"),
                d = n("yhUQ"),
                p = n("S8bp"),
                f = n("Ki6D"),
                h = n("BMA0"),
                m = n("M5j3"),
                v = n("w/Qz");
            const g = function(e) {
                return s().createElement(v.A, (0, m.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M13.5 12L7 18.6 8.4 20l8-8-8-8L7 5.4l6.5 6.6z",
                    fill: "currentColor"
                }))
            };
            var y = n("888e"),
                b = n("2PCm"),
                w = n("VKAp"),
                _ = n("T3Fm"),
                E = function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!_.o) return !1;
                    var r = "".concat(e, ":"),
                        i = document.createElement("test"),
                        o = i.style;
                    if (n) o.cssText = "".concat(r).concat(t);
                    else {
                        var a = ["-webkit-", ""].join("".concat(t, ";").concat(r));
                        o.cssText = "".concat(r).concat(a).concat(t, ";")
                    }
                    return -1 !== o[e].indexOf(t)
                };

            function x(e, t) {
                var n = this,
                    r = null;
                return function() {
                    for (var i = arguments.length, o = new Array(i), a = 0; a < i; a++) o[a] = arguments[a];
                    if (null === r) {
                        var s = n;
                        r = setTimeout((function() {
                            e.apply(s, o), r = null
                        }), t)
                    }
                }
            }
            var C = n("N/Z2"),
                A = n("f+pp");

            function S() {
                var e = (0, C.A)(["\n        .mica-sticky {\n          width: 100%;\n          z-index: 9999;\n        }\n\n        .mica-sticky:not([data-simulate='true']) {\n          position: -webkit-sticky;\n          position: sticky;\n        }\n\n        .mica-sticky[data-simulate='true'] {\n          position: relative;\n        }\n\n        .mica-sticky[data-simulate='true'][data-sticky='true'] > .child {\n          position: fixed;\n        }\n      "]);
                return S = function() {
                    return e
                }, e
            }

            function k() {
                return s().createElement(A.mL, {
                    styles: (0, A.AH)(S())
                })
            }
            var R = function(e) {
                (0, b.A)(n, e);
                var t = (0, w.A)(n);

                function n(e) {
                    var r;
                    (0, y.A)(this, n), (r = t.call(this, e)).index = 0, r.$refs = {}, r.state = {
                        sticky: !1,
                        childRect: {}
                    }, r.simulate = !E("position", "sticky"), r.unmount = !1, r.setRefs = function(e) {
                        return function(t) {
                            r.$refs[e] = t
                        }
                    }, r.checkSticky = function() {
                        if (!r.unmount) {
                            var e = parseFloat(r.props.top),
                                t = r.$refs,
                                n = t.root,
                                i = t.placeholder,
                                o = t.child,
                                a = i.getBoundingClientRect().top,
                                s = n.parentNode.getBoundingClientRect().bottom,
                                c = n.getBoundingClientRect(),
                                l = c.height,
                                u = c.width,
                                d = s - l - e >= 0 && a - e <= 1,
                                p = r.simulate ? o.getBoundingClientRect() : {},
                                f = p.width,
                                h = p.left,
                                m = p.height,
                                v = r.simulate ? +(100 * f / u).toFixed(2) : 0;
                            r.setState({
                                sticky: d,
                                childRect: {
                                    left: h,
                                    width: "".concat(v, "%"),
                                    height: m
                                }
                            })
                        }
                    };
                    var i = e.simulate;
                    return r.index = n.count, r.simulate = i || !E("position", "sticky"), n.count = r.index + 1, r
                }
                var r = n.prototype;
                return r.componentDidMount = function() {
                    n.instances[this.index] = this, this.checkSticky()
                }, r.componentWillUnmount = function() {
                    delete n.instances[this.index], this.unmount = !0
                }, r.render = function() {
                    var e = this,
                        t = e.simulate,
                        n = e.props,
                        r = n.top,
                        i = n.children,
                        o = e.state,
                        a = o.sticky,
                        c = o.childRect,
                        l = c.width,
                        u = c.height,
                        d = c.left,
                        p = t ? {} : {
                            top: r
                        },
                        f = t && a && l && u ? {
                            width: l,
                            height: u
                        } : {},
                        h = t && a ? {
                            left: d || 0,
                            top: r,
                            width: l || "100%"
                        } : {};
                    return s().createElement(s().Fragment, null, s().createElement(k, null), s().createElement("div", {
                        className: "mica-sticky",
                        ref: this.setRefs("root"),
                        style: p,
                        "data-sticky": a,
                        "data-simulate": t
                    }, s().createElement("div", {
                        ref: this.setRefs("placeholder"),
                        style: f
                    }), s().createElement("div", {
                        ref: this.setRefs("child"),
                        className: "child",
                        style: h
                    }, i)))
                }, n.checkSticky = function() {
                    Object.keys(n.instances).forEach((function(e) {
                        var t = n.instances[e];
                        t && t.checkSticky()
                    }))
                }, n
            }(a.PureComponent);
            R.count = 0, R.instances = {}, R.defaultProps = {
                top: 0,
                simulate: !1
            };
            var T = x(R.checkSticky, 16.66667);
            window.addEventListener("resize", T, !0), document.addEventListener("scroll", T, !0), document.addEventListener("transitionend", T, !0);
            const B = R;
            var I = n("ezuS"),
                P = n("cJDP");
            const O = function(e) {
                return s().createElement(v.A, (0, m.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M22 20H2V4h20v16zM4 7h7v6H4V7zm9 0h4v2h-4V7z",
                    fill: "url(#id-g_svg__paint0_linear)"
                }), s().createElement("path", {
                    d: "M7.5 12a2 2 0 100-4 2 2 0 000 4zM11 17v-4H4v4h7zM13 11h7v2h-7v-2zM20 15h-7v2h7v-2z",
                    fill: "#76808F"
                }), s().createElement("defs", null, s().createElement("linearGradient", {
                    id: "id-g_svg__paint0_linear",
                    x1: 12,
                    y1: 20,
                    x2: 12,
                    y2: 4,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#F0B90B"
                }), s().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            const N = function(e) {
                return s().createElement(v.A, (0, m.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 16 16",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M16 8l-1.6-2.1.1-2.7-2.6-.6L10.5.4 8 1.3 5.5.4 4.1 2.6l-2.6.7.1 2.7L0 8l1.6 2.1-.1 2.6 2.5.7 1.5 2.2 2.5-.9 2.5 1 1.5-2.2 2.6-.7-.2-2.8L16 8zm-9.2 3.3L4 8.5l1.1-1.1 1.7 1.7 4-4 1.1 1.1-5.1 5.1z",
                    fill: "currentColor"
                }))
            };
            var L = {},
                M = s().createContext(L),
                U = function() {
                    return (0, a.useContext)(M)
                },
                z = function(e, t) {
                    return t && t[e] || e
                },
                D = {
                    PROCESS: "PROCESS",
                    PASS: "PASS",
                    REFUSED: "REFUSED"
                },
                F = {
                    PASS: "PASS",
                    FAILED: "FAILED",
                    SKIP: "SKIP"
                },
                j = 0,
                H = 1,
                V = 2,
                q = 3,
                W = "Success",
                K = "Fail",
                Y = "SKIP",
                G = "SUBMIT",
                Q = "CME_KYC_QUESTION",
                Z = n("gZfF"),
                J = n("cKr8");
            const X = function(e) {
                return s().createElement(v.A, (0, m.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M20.5 7.42L9.41 18.5 8 17.09l-5-5 1.41-1.42 5 5L19.08 6l1.42 1.42z",
                    fill: "currentColor"
                }))
            };
            var $, ee, te = n("5cux"),
                ne = n("W8qe"),
                re = function(e) {
                    var t = e.boxCss,
                        n = (0, Z.A)(e, ["boxCss"]),
                        r = U().layoutMax;
                    return s().createElement(c.A, {
                        sx: t
                    }, s().createElement(c.A, (0, m.A)({}, n, {
                        __css: {
                            mx: "auto",
                            px: ["sm", "md"],
                            maxWidth: r
                        }
                    })))
                },
                ie = function(e) {
                    var t = e.checked,
                        n = e.optionStr,
                        r = e.multiSelect,
                        i = void 0 === r || r,
                        o = (0, Z.A)(e, ["checked", "optionStr", "multiSelect"]);
                    return i ? s().createElement(u.A, (0, m.A)({}, o, {
                        __css: {
                            flex: "none",
                            cursor: "pointer",
                            alignItems: "center"
                        }
                    }), s().createElement(u.A, {
                        __css: {
                            width: 16,
                            height: 16,
                            flex: "none"
                        },
                        sx: {
                            bg: t ? "primary" : "bg1",
                            border: t ? "none" : "1px solid #E6E8EA"
                        },
                        children: t ? s().createElement(X, {
                            size: 16,
                            color: "bg1"
                        }) : null
                    }), s().createElement(d.A, {
                        sx: {
                            ml: "xs"
                        },
                        children: n
                    })) : s().createElement(u.A, (0, m.A)({}, o, {
                        __css: {
                            flex: "none",
                            cursor: "pointer",
                            alignItems: "center"
                        }
                    }), s().createElement(u.A, {
                        __css: {
                            flex: "none",
                            borderRadius: "circle",
                            p: "4px"
                        },
                        sx: {
                            border: "1px solid",
                            bg: "bg1",
                            borderColor: t ? "primary" : "#E6E8EA"
                        },
                        children: s().createElement(c.A, {
                            sx: {
                                width: 8,
                                height: 8,
                                bg: t ? "primary" : "bg1",
                                borderRadius: "circle"
                            }
                        })
                    }), s().createElement(d.A, {
                        sx: {
                            ml: "xs"
                        },
                        children: n
                    }))
                },
                oe = {
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    bg: "rgba(30,32,38,0.5)",
                    position: ["fixed", "absolute"]
                },
                ae = function() {
                    return s().createElement(u.A, {
                        __css: oe,
                        children: s().createElement(J.A, null),
                        sx: {
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    })
                },
                se = function(e) {
                    var t = e.children;
                    return (0, a.useEffect)((function() {
                        return document.body.style.overflowY = "hidden",
                            function() {
                                document.body.style.overflowY = "auto"
                            }
                    }), []), s().createElement(u.A, {
                        __css: oe,
                        children: t,
                        sx: {
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: 9999
                        }
                    })
                },
                ce = {
                    flex: "none",
                    borderRadius: "circle"
                },
                le = function(e) {
                    var t = e.size,
                        n = e.color;
                    return s().createElement(te.A, {
                        __css: ce,
                        sx: {
                            color: n,
                            fontSize: t
                        }
                    })
                },
                ue = function(e) {
                    var t = e.size,
                        n = e.color;
                    return s().createElement(ne.A, {
                        __css: ce,
                        sx: {
                            color: n,
                            fontSize: t
                        }
                    })
                },
                de = function(e) {
                    var t = e.size,
                        n = e.color;
                    return s().createElement(h.A, {
                        __css: ce,
                        sx: {
                            color: n,
                            fontSize: t
                        }
                    })
                },
                pe = function() {
                    var e = U(),
                        t = e.i18n,
                        n = e.staticHost;
                    return s().createElement(s().Fragment, null, s().createElement(d.A, {
                        as: "span",
                        children: z("cme-statement-pre", t)
                    }), s().createElement(d.A, {
                        as: "a",
                        target: "_blank",
                        href: "".concat(n, "/static/files/compliance-de-protocol.pdf"),
                        sx: {
                            color: "primary",
                            ml: "2px",
                            textDecoration: "underline"
                        },
                        children: z("cme-statement-link", t)
                    }))
                },
                fe = ["cme-idVerify-basic", "cme-idVerify-Advanced", "cme-idVerify-poa"],
                he = ($ = {}, (0, I.A)($, D.PROCESS, ue), (0, I.A)($, D.REFUSED, le), (0, I.A)($, D.PASS, ue), $),
                me = (ee = {}, (0, I.A)(ee, D.PROCESS, "primary"), (0, I.A)(ee, D.REFUSED, "error"), (0, I.A)(ee, D.PASS, "success"), ee);
            const ve = function(e) {
                var t = function() {
                        var e = (0, l.A)((0, a.useState)(""), 2),
                            t = e[0],
                            n = e[1];
                        return (0, a.useEffect)((function() {
                            var e = document.domain.split(".").slice(-2);
                            n(e.join("."))
                        }), []), t
                    }(),
                    n = U(),
                    r = n.lng,
                    i = n.i18n,
                    o = n.cmeInfo,
                    p = o.Kyc,
                    f = o.kycWckStatus,
                    h = p.some((function(e) {
                        return !!e.status
                    })) || f,
                    v = h && p.every((function(e) {
                        return e.status === D.PASS
                    })),
                    g = f === D.PASS,
                    y = t ? "https://www.".concat(t, "/").concat(r, "/my/settings/profile") : "";
                return s().createElement(c.A, (0, m.A)({}, e, {
                    __css: {
                        color: "button.white"
                    }
                }), s().createElement(u.A, {
                    sx: {
                        alignItems: "center"
                    }
                }, s().createElement(O, {
                    size: 20,
                    color: "t.yellow",
                    sx: {
                        mr: "xs"
                    }
                }), s().createElement(d.A, {
                    children: z("cme-idVerify-title", i)
                })), s().createElement(d.A, {
                    __css: {
                        mt: "xs",
                        mb: "sm"
                    },
                    sx: {
                        color: "#848E9C",
                        fontSize: 1,
                        lineHeight: "20px"
                    },
                    children: z("cme-idVerify-message", i)
                }), h ? v && g ? s().createElement(c.A, {
                    __css: {
                        display: "inline-flex",
                        bg: "rgba(46,189,133,0.15)"
                    },
                    sx: {
                        alignItems: "center",
                        borderRadius: "circle",
                        px: "xs",
                        py: "minor"
                    }
                }, s().createElement(N, {
                    size: 18,
                    color: "success",
                    sx: {
                        mr: "xs"
                    }
                }), s().createElement(d.A, {
                    sx: {
                        color: "success",
                        fontSize: 0
                    },
                    children: z("cme-idVerify-succ", i)
                })) : s().createElement(s().Fragment, null, fe.map((function(e, t) {
                    var n = (p[t] || {}).status,
                        r = n === D.REFUSED,
                        o = 1 === t && n === D.PASS && !g,
                        a = o ? de : he[n] || ue,
                        c = o ? "primary" : me[n] || "t.third",
                        l = [z(e, i), o ? " (".concat(z("cme-idVerify-wckFail", i), ")") : "", r ? " ".concat(z("cme-idVerify-fail", i)) : ""].join("");
                    return s().createElement(u.A, {
                        key: t,
                        sx: {
                            color: "button.white",
                            mb: "xs"
                        }
                    }, s().createElement(a, {
                        size: 16,
                        color: c
                    }), s().createElement(d.A, {
                        sx: {
                            ml: "xs"
                        },
                        children: l
                    }))
                })), !v && s().createElement(P.A, {
                    as: "a",
                    href: y,
                    sx: {
                        mt: "sm",
                        display: "inline-flex"
                    },
                    children: z("cme-idVerify-continue", i)
                })) : s().createElement(P.A, {
                    as: "a",
                    href: y,
                    children: z("cme-idVerify-go", i)
                }))
            };
            var ge = n("sViW"),
                ye = n("3yYM"),
                be = n.n(ye),
                we = n("VA12"),
                _e = n("8fYl"),
                Ee = n("5XPI");
            const xe = function(e) {
                return s().createElement(v.A, (0, m.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M20 22H5V2h15v20z",
                    fill: "url(#help-g_svg__paint0_linear)"
                }), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5 5H3v2h2V5zM5 13H3v2h2v-2zM5 9H3v2h2V9zM5 17H3v2h2v-2z",
                    fill: "#76808F"
                }), s().createElement("path", {
                    d: "M11 9.5a1.5 1.5 0 112.56 1.06l-2.06 2.061V14.5h2v-1.05l1.475-1.475A3.5 3.5 0 109 9.5v.5h2v-.5zM13.5 18.5v-2h-2v2h2z",
                    fill: "#76808F"
                }), s().createElement("defs", null, s().createElement("linearGradient", {
                    id: "help-g_svg__paint0_linear",
                    x1: 12.5,
                    y1: 22,
                    x2: 12.5,
                    y2: 2,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#F0B90B"
                }), s().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            };
            const Ce = function(e) {
                return s().createElement(v.A, (0, m.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), s().createElement("g", {
                    clipPath: "url(#success-b96_svg__clip0)",
                    fill: "#00C087"
                }, s().createElement("path", {
                    d: "M71 25a32.523 32.523 0 00-22.96-9.52c-17.95-.01-32.51 14.53-32.52 32.48C15.51 65.91 30.05 80.47 48 80.48c17.95.01 32.51-14.53 32.52-32.48 0-8.63-3.42-16.9-9.52-23zM42.04 60.5L30.97 49.43l2.12-2.12 8.95 8.95 20.91-20.91 2.13 2.13L42.04 60.5zM46.48 2.51L46.56 5H49l.03-2.49h-2.55zm5.65.16l-.22 2.49c.79.07 1.6.17 2.39.28l.36-2.47c-.84-.12-1.69-.22-2.53-.3zm-8.7 0c-.84.08-1.69.19-2.52.33l.39 2.51c.78-.13 1.59-.23 2.38-.35l-.25-2.49zm14.19.83l-.53 2.44c.78.17 1.57.37 2.34.58l.66-2.41c-.81-.23-1.64-.43-2.47-.61zm-19.71.11c-.83.19-1.66.4-2.47.64l.69 2.4c.77-.22 1.56-.42 2.33-.6l-.55-2.44zM63 5l-.79 2.38c.75.26 1.51.55 2.25.86l.92-2.33C64.6 5.58 63.8 5.28 63 5zm-30.46.19c-.79.29-1.59.61-2.37.94l1 2.29c.73-.32 1.48-.61 2.22-.88l-.85-2.35zm-1.37 3.24v-.01c-.01 0-.01.01-.02.01h.02zm36.99-1.24l-1.11 2.24c.71.36 1.43.74 2.12 1.13l1.24-2.17c-.74-.42-1.5-.82-2.25-1.2zm-40.78.24c-.75.38-1.5.79-2.23 1.22l1.26 2.16h.02c.69-.41 1.4-.81 2.09-1.16l-1.14-2.22zM73 10l-1.39 2.07c.69.44 1.36.9 2 1.38l1.48-1.99C74.41 11 73.71 10.47 73 10zm-50.44.26c-.7.49-1.39.97-2.07 1.49l1.51 2c.66-.49 1.32-.96 2-1.41l-1.44-2.08zm54.94 3.08l-1.62 1.91c.61.52 1.21 1.06 1.79 1.61l1.72-1.81c-.59-.59-1.22-1.16-1.89-1.71zm-59.37.34c-.63.56-1.26 1.14-1.87 1.73L18 17.2c.58-.56 1.18-1.11 1.77-1.63l-1.64-1.89zm63.42 3.55l-1.85 1.69c.58.59 1.07 1.2 1.58 1.82l1.93-1.58c-.53-.65-1.09-1.3-1.66-1.93zm-67.4.38c-.56.63-1.12 1.28-1.65 1.94l1.95 1.57c.55-.63 1.03-1.24 1.55-1.84l-1.85-1.67zm70.92 3.97l-2 1.45c.46.65.92 1.33 1.34 2l2.08-1.33c-.42-.72-.93-1.43-1.42-2.12zm-74.4.42c-.48.7-.95 1.41-1.39 2.13l2.13 1.31c.41-.68.86-1.35 1.32-2.01L10.67 22zM88 26.33l-2.22 1.19c.38.7.75 1.43 1.09 2.15l2.28-1.07c-.36-.76-.75-1.53-1.15-2.27zm-80.28.5c-.39.74-.77 1.51-1.12 2.28l2.27 1h.04c.33-.73.69-1.45 1.09-2.11l-2.28-1.17zm82.66 4.58l-2.33.91c.29.74.57 1.51.82 2.27l2.37-.79c-.26-.8-.55-1.61-.86-2.39zm-84.92.48c-.3.8-.58 1.61-.83 2.41l2.37.75c.25-.76.51-1.52.8-2.27l-2.34-.89zm86.65 4.85l-2.42.62c.19.77.37 1.56.53 2.34l2.45-.48c-.16-.83-.35-1.66-.56-2.48zm-88.3.51c-.2.82-.38 1.66-.53 2.49l2.46.45c.14-.78.31-1.58.5-2.35l-2.43-.59zm89.34 4.99l-2.48.31c.1.79.18 1.6.24 2.4l2.49-.18c-.06-.84-.14-1.69-.25-2.53zm-90.32.52c-.1.84-.22 1.7-.22 2.54l2.5.15c.04-.8.11-1.61.2-2.4l-2.48-.29zm88.23 5.07v.14c0 .8-.06 1.61-.06 2.41l2.44.14c.05-.84.07-1.7.12-2.52v-.17h-2.5zm-86.03.53h-2.5c.01.84.04 1.7.1 2.54l2.49-.14c-.09-.79-.09-1.6-.09-2.4zm85.66 4.9c-.1.8-.22 1.6-.36 2.38l2.46.44c.15-.83.28-1.67.38-2.52l-2.48-.3zm-85.29.36l-2.48.32c.11.84.25 1.69.4 2.52l2.46-.47a37.7 37.7 0 01-.38-2.37zm84.32 4.84c-.19.78-.41 1.56-.65 2.32l2.39.74c.25-.8.48-1.63.69-2.45l-2.43-.61zm-83.31.35l-2.42.63c.21.82.45 1.64.71 2.44l2.38-.76c-.24-.76-.47-1.54-.67-2.31zm81.71 4.73c-.28.74-.6 1.49-.93 2.22l2.28 1c.35-.76.68-1.56.98-2.32l-2.33-.9zm-80.07.3l-2.32.92c.31.78.65 1.57 1 2.34L9 66.04c-.33-.72-.65-1.46-.95-2.2zm80.07 5.64l-2.21-1.18c-.37.7-.78 1.41-1.19 2.09l2.13 1.3v.02c.44-.71.87-1.47 1.27-2.23zM10.3 68.6l-2.19 1.2c.4.74.84 1.48 1.28 2.2l2.13-1.32c-.43-.68-.84-1.38-1.22-2.08zm72.78 4.22c-.44.65-.95 1.3-1.44 1.93l2 1.55h.01c.52-.66 1.04-1.3 1.43-2.04l-2-1.44zm-69.99.3l-2 1.46c.5.66 1.01 1.34 1.55 2l1.91-1.54c-.46-.62-.99-1.27-1.46-1.92zm66.73 3.83c-.46.47-.92 1-1.4 1.47l-.27.27 1.76 1.78.28-.28c.48-.51 1-1.02 1.48-1.56l-1.85-1.68zm-63.35.24l-1.84 1.7c.57.62 1.17 1.23 1.78 1.82l1.74-1.8c-.58-.55-1.14-1.13-1.68-1.72zm59.54 3.43c-.6.52-1.23 1.03-1.87 1.52l1.52 2h.01c.67-.51 1.33-1.05 1.97-1.62l-1.63-1.9zm-55.74.23l-1.61 1.91c.66.59 1.33 1.08 2 1.59l1.49-1.99c-.64-.51-1.27-.99-1.88-1.51zm51.46 2.98c-.62.45-1.31.88-2 1.28L71 87.27c.76-.43 1.48-.89 2.12-1.36l-1.39-2.08zm-47.2.17l-1.4 2.11c.71.47 1.44.92 2.17 1.34l1.23-2.19c-.64-.4-1.33-.82-2-1.26zm42.65 2.51c-.71.34-1.45.68-2.18 1l1 2.29c.81-.34 1.59-.7 2.3-1.06l-1.12-2.23zm-38.05.18l-1.1 2.25c.76.37 1.54.73 2.32 1.06l.97-2.31c-.73-.3-1.47-.64-2.19-1zm33.23 1.87c-.76.27-1.53.52-2.29.74l.7 2.4c.81-.24 1.62-.5 2.42-.78l-.83-2.36zM34 88.68l-.79 2.36c.8.28 1.62.54 2.43.77l.66-2.41c-.77-.22-1.54-.46-2.3-.72zm23.27 1.34c-.78.17-1.57.32-2.36.45l.4 2.47c.83-.14 1.69-.3 2.5-.48l-.54-2.44zm-18.15.07l-.52 2.45c.83.17 1.68.33 2.51.46l.38-2.48c-.79-.12-1.59-.26-2.37-.43zm12.93.75c-.8.08-1.6.16-2.4.16l.09 2.49c.84-.03 1.7-.09 2.54-.16l-.23-2.49zm-7.7.02l-.21 2.5c.85.07 1.7.14 2.54.14l.08-2.5c-.8-.02-1.61-.07-2.41-.14z"
                })), s().createElement("defs", null, s().createElement("clipPath", {
                    id: "success-b96_svg__clip0"
                }, s().createElement("path", {
                    fill: "#fff",
                    d: "M0 0h96v96H0z"
                }))))
            };
            const Ae = function(e) {
                return s().createElement(v.A, (0, m.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 64 64",
                    fill: "none"
                }, e), s().createElement("path", {
                    d: "M44.38 19.62c-6.83-6.86-17.92-6.87-24.77-.04-6.86 6.84-6.87 17.93-.04 24.78 6.84 6.85 17.93 6.87 24.78.03 3.29-3.28 5.15-7.74 5.15-12.39.01-4.64-1.83-9.1-5.12-12.38zm-11.4 21.99h-2v-2h2v2zm0-4.37h-2v-14.8h2v14.8z",
                    fill: "url(#warning-filled-m64_svg__paint0_linear)"
                }), s().createElement("path", {
                    d: "M32 56.5c-.4 0-.8-.01-1.19-.03l.1-2c.63.03 1.27.03 1.9.01l.07 2c-.29.01-.59.02-.88.02zm3.46-.24l-.28-1.98c.62-.09 1.25-.2 1.87-.35l.45 1.95c-.68.15-1.36.28-2.04.38zm-7.23-.05c-.68-.1-1.36-.24-2.03-.4l.47-1.94c.61.15 1.24.27 1.87.37l-.31 1.97zm11.75-1.04l-.65-1.89c.6-.21 1.19-.44 1.77-.7l.81 1.83c-.63.28-1.28.53-1.93.76zm-16.26-.11c-.65-.23-1.29-.5-1.92-.78l.83-1.82c.57.26 1.16.5 1.76.72l-.67 1.88zm20.5-1.83l-1-1.73c.54-.31 1.09-.66 1.61-1.02l1.14 1.64c-.57.4-1.15.77-1.75 1.11zm-24.71-.15c-.59-.35-1.18-.73-1.73-1.13l1.16-1.63c.51.37 1.05.72 1.59 1.04l-1.02 1.72zm28.51-2.54l-1.31-1.51c.48-.41.95-.85 1.39-1.3l1.43 1.4c-.48.48-.99.96-1.51 1.41zm-32.27-.2c-.51-.46-1.02-.94-1.49-1.44l1.45-1.38c.44.46.9.9 1.37 1.32l-1.33 1.5zm35.48-3.17l-1.57-1.24c.39-.5.77-1.01 1.11-1.54l1.67 1.1c-.37.58-.78 1.14-1.21 1.68zm-38.65-.24c-.42-.55-.82-1.12-1.19-1.69l1.68-1.08c.34.53.71 1.05 1.1 1.56l-1.59 1.21zm41.18-3.67l-1.78-.92c.29-.56.56-1.14.8-1.72l1.85.77c-.26.63-.56 1.27-.87 1.87zm-43.66-.27c-.31-.61-.6-1.25-.85-1.89l1.86-.74c.24.59.5 1.17.78 1.73l-1.79.9zm45.4-4.04l-1.92-.57c.18-.61.33-1.23.46-1.84l1.96.4c-.14.67-.31 1.35-.5 2.01zm-47.08-.3c-.19-.66-.35-1.34-.48-2.02l1.96-.38c.12.62.27 1.25.44 1.85l-1.92.55zm47.96-4.27l-1.99-.19c.06-.63.1-1.27.1-1.9l2 .02c0 .69-.04 1.38-.11 2.07zm-48.79-.31c-.06-.68-.09-1.38-.09-2.07l2-.1v.1c0 .63.03 1.27.08 1.9l-1.99.17zm46.81-4.16c-.06-.63-.14-1.26-.25-1.88l1.97-.35c.12.68.21 1.37.28 2.05l-2 .18zm-44.76-.38l-1.99-.22c.08-.69.18-1.37.31-2.05l1.96.38c-.12.63-.22 1.26-.28 1.89zm43.97-3.82c-.17-.6-.38-1.21-.61-1.8l1.87-.72c.25.65.47 1.31.66 1.96l-1.92.56zm-43.11-.36l-1.91-.59c.2-.66.44-1.31.7-1.95l1.85.75c-.24.58-.45 1.18-.64 1.79zm41.53-3.61c-.29-.56-.6-1.12-.94-1.65l1.7-1.06c.37.58.71 1.19 1.02 1.8l-1.78.91zm-39.88-.34l-1.76-.94c.32-.6.68-1.2 1.05-1.78l1.68 1.09c-.35.53-.67 1.08-.97 1.63zm37.57-3.26c-.39-.5-.8-.98-1.23-1.45l1.46-1.36c.47.51.92 1.04 1.35 1.58l-1.58 1.23zm-35.21-.3l-1.55-1.26c.43-.53.89-1.06 1.37-1.55l1.44 1.39c-.44.45-.86.93-1.26 1.42zm32.27-2.8c-.48-.42-.98-.82-1.49-1.19l1.18-1.61c.55.41 1.1.84 1.62 1.29l-1.31 1.51zm-29.27-.25l-1.29-1.53c.53-.44 1.08-.87 1.64-1.27l1.16 1.63c-.52.37-1.03.76-1.51 1.17zm25.79-2.25c-.55-.32-1.11-.62-1.68-.89l.86-1.81c.62.29 1.24.62 1.83.97l-1.01 1.73zm-22.28-.18l-.98-1.75c.6-.34 1.22-.65 1.85-.94l.83 1.82c-.57.27-1.14.56-1.7.87zm18.4-1.6c-.6-.21-1.21-.39-1.82-.55l.5-1.94c.67.17 1.33.37 1.98.6l-.66 1.89zm-14.48-.13l-.63-1.9c.65-.22 1.32-.41 1.99-.57l.46 1.95c-.61.15-1.23.33-1.82.52zm10.33-.89c-.62-.09-1.26-.16-1.89-.19l.12-2c.69.04 1.38.11 2.06.21l-.29 1.98zm-6.17-.05l-.25-1.99c.68-.09 1.38-.15 2.06-.18l.09 2c-.63.03-1.27.09-1.9.17z",
                    fill: "url(#warning-filled-m64_svg__paint1_linear)"
                }), s().createElement("defs", null, s().createElement("linearGradient", {
                    id: "warning-filled-m64_svg__paint0_linear",
                    x1: 19.587,
                    y1: 44.377,
                    x2: 44.336,
                    y2: 19.628,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#F0B90B"
                }), s().createElement("stop", {
                    offset: .28,
                    stopColor: "#F1BC0F"
                }), s().createElement("stop", {
                    offset: .569,
                    stopColor: "#F4C41C"
                }), s().createElement("stop", {
                    offset: .862,
                    stopColor: "#F8D230"
                }), s().createElement("stop", {
                    offset: .993,
                    stopColor: "#FBDA3C"
                })), s().createElement("linearGradient", {
                    id: "warning-filled-m64_svg__paint1_linear",
                    x1: 14.68,
                    y1: 49.323,
                    x2: 49.312,
                    y2: 14.691,
                    gradientUnits: "userSpaceOnUse"
                }, s().createElement("stop", {
                    stopColor: "#F0B90B"
                }), s().createElement("stop", {
                    offset: .28,
                    stopColor: "#F1BC0F"
                }), s().createElement("stop", {
                    offset: .569,
                    stopColor: "#F4C41C"
                }), s().createElement("stop", {
                    offset: .862,
                    stopColor: "#F8D230"
                }), s().createElement("stop", {
                    offset: .993,
                    stopColor: "#FBDA3C"
                }))))
            };
            var Se = j,
                ke = H,
                Re = q,
                Te = V,
                Be = function() {
                    var e = (0, l.A)((0, a.useState)(j), 2),
                        t = e[0],
                        n = e[1];
                    return {
                        loading: t,
                        wrapper: (0, a.useCallback)(function() {
                            var e = (0, ge.A)(be().mark((function e(t) {
                                return be().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            n((function(e) {
                                                return e === Se ? ke : Re
                                            })), t().finally((function() {
                                                return n(Te)
                                            }));
                                        case 2:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }(), [])
                    }
                },
                Ie = {
                    action: "",
                    actionResult: "",
                    Questionnaire: {
                        flowId: "",
                        questions: []
                    }
                };
            const Pe = function() {
                var e = (0, l.A)((0, a.useState)({}), 2),
                    t = e[0],
                    n = e[1],
                    o = (0, l.A)((0, a.useState)(!1), 2),
                    p = o[0],
                    f = o[1],
                    h = U(),
                    m = h.i18n,
                    v = h.setCmeInfo,
                    g = h.onRefresh,
                    y = function() {
                        var e = Be(),
                            t = e.loading,
                            n = e.wrapper,
                            o = (0, l.A)((0, a.useState)(Ie), 2),
                            s = o[0],
                            c = o[1],
                            u = (0, a.useCallback)((function() {
                                n((0, ge.A)(be().mark((function e() {
                                    var t;
                                    return be().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return c(Ie), e.next = 3, (0, we.post)("/bapi/kyc/v1/private/certificate/fixed/question/init", {
                                                    flowType: Q
                                                });
                                            case 3:
                                                t = e.sent.data, c((function(e) {
                                                    return (0, i.A)((0, r.A)({}, e), {
                                                        Questionnaire: t || {}
                                                    })
                                                }));
                                            case 5:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))))
                            }), []);
                        (0, a.useMemo)((function() {
                            return u()
                        }), []);
                        var d = (0, a.useCallback)((function(e) {
                                n((0, ge.A)(be().mark((function t() {
                                    var n;
                                    return be().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, (0, we.post)("/bapi/kyc/v1/private/certificate/fixed/question/skip", e);
                                            case 2:
                                                n = t.sent.data, c((function(e) {
                                                    return (0, i.A)((0, r.A)({}, e), {
                                                        action: Y,
                                                        actionResult: n && n.result ? W : K
                                                    })
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))))
                            }), []),
                            p = (0, a.useCallback)((function(e) {
                                n((0, ge.A)(be().mark((function t() {
                                    var n;
                                    return be().wrap((function(t) {
                                        for (;;) switch (t.prev = t.next) {
                                            case 0:
                                                return t.next = 2, (0, we.post)("/bapi/kyc/v1/private/certificate/fixed/question/submit", e);
                                            case 2:
                                                n = t.sent.data, c((function(e) {
                                                    return (0, i.A)((0, r.A)({}, e), {
                                                        action: G,
                                                        actionResult: n && n.result
                                                    })
                                                }));
                                            case 4:
                                            case "end":
                                                return t.stop()
                                        }
                                    }), t)
                                }))))
                            }), []);
                        return {
                            questionnaire: s,
                            loading: t,
                            onRefresh: u,
                            skipAnswer: d,
                            commitAnswer: p
                        }
                    }(),
                    b = y.loading,
                    w = y.skipAnswer,
                    _ = y.commitAnswer,
                    E = y.onRefresh,
                    x = y.questionnaire,
                    C = x.action,
                    A = x.actionResult,
                    S = x.Questionnaire,
                    k = S.flowId,
                    R = void 0 === k ? "" : k,
                    T = S.questions,
                    B = void 0 === T ? [] : T,
                    O = (0, a.useCallback)((function(e) {
                        var t = e.questionId,
                            o = e.opt,
                            a = e.multiSelect;
                        return function() {
                            n((function(e) {
                                var n = e[t] || [],
                                    s = n.indexOf(o),
                                    c = a ? n : [],
                                    l = s > -1 ? c.filter((function(e) {
                                        return e !== o
                                    })) : c.concat(o);
                                return (0, i.A)((0, r.A)({}, e), (0, I.A)({}, t, l))
                            }))
                        }
                    }), []),
                    N = H === b,
                    L = B.every((function(e) {
                        var n = e.questionId;
                        return (t[n] || []).length
                    }));
                if (s().useEffect((function() {
                        C === Y && A === W && v((function(e) {
                            return (0, i.A)((0, r.A)({}, e), {
                                Questionnaire: F.SKIP
                            })
                        }))
                    }), [C, A]), C === G) {
                    if (A === W) return s().createElement(c.A, {
                        __css: {
                            p: "md",
                            bg: "popupBg"
                        },
                        sx: {
                            borderRadius: "8px",
                            textAlign: "center"
                        }
                    }, s().createElement(Ce, {
                        size: 76,
                        sx: {
                            my: "xs"
                        }
                    }), s().createElement(c.A, {
                        sx: {
                            my: "md",
                            px: "md"
                        }
                    }, s().createElement(d.A, {
                        sx: {
                            fontSize: 20,
                            color: "t.primary"
                        },
                        children: z("cme-ques-modal-succMsg", m)
                    }), s().createElement(d.A, {
                        sx: {
                            fontSize: 14,
                            mt: "xs",
                            color: "t.third"
                        },
                        children: z("cme-ques-modal-succTip", m)
                    })), s().createElement(u.A, {
                        sx: {
                            alignItems: "center"
                        }
                    }, s().createElement(P.A, {
                        variant: "default",
                        sx: {
                            height: 48,
                            flex: 1
                        },
                        onClick: function() {
                            return g()
                        },
                        children: z("cme-ques-modal-complete", m)
                    })));
                    if (A === K) return s().createElement(c.A, {
                        __css: {
                            p: "md",
                            bg: "popupBg"
                        },
                        sx: {
                            borderRadius: "8px",
                            textAlign: "center"
                        }
                    }, s().createElement(Ae, {
                        size: 76,
                        sx: {
                            my: "xs"
                        }
                    }), s().createElement(c.A, {
                        sx: {
                            my: "md",
                            px: "md"
                        }
                    }, s().createElement(d.A, {
                        sx: {
                            fontSize: 20,
                            color: "t.primary"
                        },
                        children: z("cme-ques-modal-failMsg", m)
                    }), s().createElement(d.A, {
                        sx: {
                            fontSize: 14,
                            mt: "xs",
                            color: "t.third"
                        },
                        children: z("cme-ques-modal-failTip", m)
                    })), s().createElement(u.A, {
                        sx: {
                            alignItems: "center"
                        }
                    }, s().createElement(P.A, {
                        variant: "quiet",
                        disabled: N,
                        sx: {
                            height: 48,
                            mr: "xs",
                            flex: 1
                        },
                        onClick: function() {
                            return w({
                                flowType: Q
                            })
                        },
                        children: z("cme-ques-modal-skip", m)
                    }), s().createElement(P.A, {
                        variant: "default",
                        disabled: N,
                        sx: {
                            height: 48,
                            flex: 1
                        },
                        onClick: function() {
                            return E()
                        },
                        children: z("cme-ques-modal-reAnswer", m)
                    })))
                }
                return s().createElement(u.A, {
                    __css: {
                        fontSize: 1,
                        p: "md",
                        bg: "popupBg",
                        color: "t.primary"
                    },
                    sx: {
                        borderRadius: [0, "4px"],
                        flexDirection: "column",
                        width: ["100vw", 580],
                        height: ["100vh", 600],
                        maxHeight: ["100vh", "90vh"],
                        maxWidth: ["100vw", "90vw"]
                    }
                }, s().createElement(c.A, {
                    sx: {
                        flex: "none",
                        mb: "md"
                    }
                }, s().createElement(d.A, {
                    sx: {
                        fontSize: 4,
                        mb: "xs",
                        fontWeight: "semibold"
                    },
                    children: z("cme-ques-modal-title", m)
                }), s().createElement(d.A, {
                    sx: {
                        color: "t.secondary",
                        lineHeight: "20px"
                    },
                    children: z("cme-ques-modal-desc", m)
                })), s().createElement(c.A, {
                    __css: {
                        flex: 1,
                        p: "sm",
                        bg: "bg3"
                    },
                    sx: {
                        overflowY: "auto",
                        position: "relative"
                    }
                }, b === H && s().createElement(ae, null), B.map((function(e, n) {
                    var r = e.questionId,
                        i = e.titleLangFlag,
                        o = e.options,
                        a = e.multiSelect,
                        l = "0".concat(n + 1, ".").slice(-3),
                        p = t[r] || [];
                    return s().createElement(u.A, {
                        key: r,
                        sx: {
                            alignItems: "flex-start",
                            mb: "md"
                        }
                    }, s().createElement(d.A, {
                        sx: {
                            flex: "none",
                            fontSize: "2",
                            fontWeight: "semibold"
                        },
                        children: l
                    }), s().createElement(c.A, {
                        sx: {
                            flex: 1,
                            ml: "minor"
                        }
                    }, s().createElement(d.A, {
                        __css: {
                            fontSize: 2,
                            fontWeight: "semibold"
                        },
                        sx: {
                            "&::after": {
                                content: '"*"',
                                color: "error",
                                ml: "minor",
                                fontSize: "80%"
                            }
                        },
                        children: z(i, m)
                    }), o.map((function(e, t) {
                        return s().createElement(ie, {
                            key: t,
                            sx: {
                                mt: "sm"
                            },
                            multiSelect: a,
                            optionStr: z(e, m),
                            checked: p.indexOf(e) > -1,
                            onClick: O({
                                questionId: r,
                                opt: e,
                                multiSelect: a
                            })
                        })
                    }))))
                }))), s().createElement(c.A, {
                    sx: {
                        flex: "none",
                        mt: "md",
                        fontSize: 2,
                        color: "t.primary"
                    }
                }, s().createElement(ie, {
                    checked: p,
                    sx: {
                        fontSize: 0
                    },
                    onClick: function() {
                        return f(!p)
                    },
                    optionStr: s().createElement(pe, null)
                }), s().createElement(u.A, {
                    sx: {
                        alignItems: "center",
                        justifyContent: "center",
                        mt: "md"
                    }
                }, s().createElement(P.A, {
                    variant: "quiet",
                    disabled: N,
                    onClick: function() {
                        return w({
                            flowType: Q
                        })
                    },
                    sx: {
                        height: 48,
                        fontSize: 2,
                        minWidth: ["auto", 180],
                        flex: [1, "auto"],
                        mr: "md"
                    },
                    children: z("cme-ques-modal-skip", m)
                }), s().createElement(P.A, {
                    sx: {
                        height: 48,
                        fontSize: 2,
                        minWidth: ["auto", 180],
                        flex: [1, "auto"]
                    },
                    disabled: N || !p || !L,
                    onClick: function() {
                        var e = Object.keys(t).map((function(e) {
                            return {
                                questionId: e,
                                options: t[e]
                            }
                        }));
                        n({}), _({
                            flowId: R,
                            flowType: Q,
                            answers: e
                        })
                    },
                    children: z("cme-ques-modal-submit", m)
                }))))
            };
            var Oe = n("g2tk"),
                Ne = n("vMSZ");
            const Le = function() {
                var e = U(),
                    t = e.i18n,
                    n = e.onRefresh,
                    r = (0, l.A)((0, a.useState)(!1), 2),
                    i = r[0],
                    o = r[1],
                    p = function() {
                        var e = (0, l.A)((0, Ne.A)(function() {
                            var e = (0, ge.A)(be().mark((function e(t) {
                                var n;
                                return be().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, (0, we.post)("/bapi/kyc/v1/private/certificate/fixed/question/contract/check", t);
                                        case 2:
                                            return n = e.sent.data, e.abrupt("return", n && n.result ? W : K);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function(t) {
                                return e.apply(this, arguments)
                            }
                        }()), 2);
                        return {
                            state: e[0],
                            commitDisclaimer: e[1]
                        }
                    }(),
                    f = p.commitDisclaimer,
                    h = p.state,
                    m = h.loading,
                    v = h.value,
                    g = (0, a.useMemo)((function() {
                        return z("cme-disclaimer-content", t).split("|")
                    }), [t]);
                return s().useEffect((function() {
                    v === W && n()
                }), [v]), s().createElement(u.A, {
                    __css: {
                        fontSize: 1,
                        p: "md",
                        bg: "popupBg",
                        color: "t.primary"
                    },
                    sx: {
                        borderRadius: [0, "4px"],
                        flexDirection: "column",
                        width: ["100vw", 580],
                        height: ["100vh", 600],
                        maxHeight: ["100vh", "90vh"],
                        maxWidth: ["100vw", "90vw"]
                    }
                }, s().createElement(u.A, {
                    sx: {
                        alignItems: "flex-start",
                        mb: "md",
                        justifyContent: "space-between"
                    }
                }, s().createElement(d.A, {
                    sx: {
                        fontSize: 4,
                        fontWeight: "semibold"
                    },
                    children: z("cme-disclaimer-title", t)
                }), s().createElement(Oe.A, {
                    onClick: n,
                    sx: {
                        cursor: "pointer"
                    },
                    size: 20,
                    color: "icon"
                })), s().createElement(c.A, {
                    __css: {
                        fontSize: 1,
                        color: "t.secondary"
                    },
                    sx: {
                        flex: 1,
                        p: "sm",
                        bg: "bg3",
                        overflowY: "auto"
                    }
                }, g.map((function(e, t) {
                    return s().createElement(d.A, {
                        key: t,
                        sx: {
                            mt: t ? "md" : 0,
                            textIndent: "2em"
                        },
                        children: e
                    })
                }))), s().createElement(c.A, {
                    sx: {
                        flex: "none",
                        mt: "md",
                        fontSize: 2,
                        color: "t.primary"
                    }
                }, s().createElement(ie, {
                    checked: i,
                    sx: {
                        fontSize: 0
                    },
                    onClick: function() {
                        return o(!i)
                    },
                    optionStr: z("cme-disclaimer-statement", t)
                }), s().createElement(u.A, {
                    sx: {
                        justifyContent: "center",
                        mt: "md"
                    }
                }, s().createElement(P.A, {
                    variant: "default",
                    disabled: !i && !m,
                    onClick: function() {
                        return f({
                            flowType: Q
                        })
                    },
                    sx: {
                        height: 48,
                        minWidth: 180,
                        fontSize: 2
                    },
                    children: z("cme-disclaimer-submit", t)
                }))))
            };
            const Me = function(e) {
                var t = U(),
                    n = t.i18n,
                    o = t.cmeLoading,
                    f = t.setCmeInfo,
                    h = t.cmeInfo,
                    v = h.Questionnaire,
                    g = h.Contract,
                    y = Be(),
                    b = y.loading,
                    w = y.wrapper,
                    _ = (0, l.A)((0, a.useState)(!1), 2),
                    E = _[0],
                    x = _[1];
                s().useEffect((function() {
                    x(!1)
                }), [o]);
                var C = b === H || b === q,
                    A = v === F.PASS || v === F.SKIP && g,
                    S = v === F.FAILED,
                    k = v === F.SKIP && !g,
                    R = k ? Le : Pe,
                    T = (0, a.useCallback)((function() {
                        w((0, ge.A)(be().mark((function e() {
                            var t;
                            return be().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.next = 2, (0, we.post)("/bapi/kyc/v1/private/certificate/fixed/question/skip", {
                                            flowType: Q
                                        });
                                    case 2:
                                        (t = e.sent.data) && t.result && (f((function(e) {
                                            return (0, i.A)((0, r.A)({}, e), {
                                                Questionnaire: F.SKIP
                                            })
                                        })), setTimeout((function() {
                                            return x(!0)
                                        }), 100));
                                    case 4:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))))
                    }), []);
                return s().createElement(c.A, (0, m.A)({}, e, {
                    __css: {
                        color: "button.white"
                    }
                }), s().createElement(u.A, {
                    sx: {
                        alignItems: "center"
                    }
                }, s().createElement(xe, {
                    size: 20,
                    color: "t.yellow",
                    sx: {
                        mr: "xs"
                    }
                }), s().createElement(d.A, {
                    children: z("cme-ques-title", n)
                })), s().createElement(d.A, {
                    __css: {
                        mt: "xs",
                        mb: "sm"
                    },
                    sx: {
                        color: "#848E9C",
                        fontSize: 1,
                        lineHeight: "20px"
                    },
                    children: z("cme-ques-message", n)
                }), A ? s().createElement(c.A, {
                    __css: {
                        display: "inline-flex",
                        bg: "rgba(46,189,133,0.3)",
                        color: "success"
                    },
                    sx: {
                        alignItems: "center",
                        fontSize: 0,
                        borderRadius: "circle",
                        px: "xs",
                        py: "minor"
                    }
                }, s().createElement(ne.A, {
                    size: 18,
                    color: "success",
                    sx: {
                        mr: "minor"
                    }
                }), s().createElement(d.A, {
                    children: z("cme-ques-completed", n)
                })) : S ? s().createElement(c.A, {
                    __css: {}
                }, s().createElement(u.A, {
                    sx: {
                        mb: "sm",
                        alignItems: "center"
                    }
                }, s().createElement(le, {
                    color: "error",
                    size: 16
                }), s().createElement(d.A, {
                    sx: {
                        ml: "xs",
                        color: "error"
                    },
                    children: z("cme-ques-fail", n)
                })), s().createElement(u.A, null, s().createElement(P.A, {
                    disabled: C,
                    sx: {
                        mr: "xs"
                    },
                    onClick: function() {
                        return x(!0)
                    },
                    children: z("cme-ques-reAnswer", n)
                }), s().createElement(P.A, {
                    variant: "quiet",
                    disabled: C,
                    onClick: T,
                    children: z("cme-ques-skip", n)
                }))) : k ? s().createElement(c.A, {
                    __css: {}
                }, s().createElement(u.A, {
                    sx: {
                        mb: "sm",
                        alignItems: "center"
                    }
                }, s().createElement(le, {
                    color: "error",
                    size: 18
                }), s().createElement(d.A, {
                    sx: {
                        ml: "xs",
                        color: "error"
                    },
                    children: z("cme-ques-noDisclaimer", n)
                })), s().createElement(P.A, {
                    onClick: function() {
                        return x(!0)
                    },
                    children: z("cme-ques-continue", n)
                })) : s().createElement(P.A, {
                    onClick: function() {
                        return x(!0)
                    },
                    children: z("cme-ques-start", n)
                }), E ? s().createElement(Ee.Ay, null, s().createElement(p.A, {
                    theme: _e.A
                }, s().createElement(se, {
                    children: s().createElement(R, null)
                }))) : null)
            };
            var Ue = n("eZh5"),
                ze = n("Hkrp"),
                De = function(e) {
                    return [{
                        key: "kycBasicStatus",
                        status: 0
                    }, {
                        key: "kycAdvancedStatus",
                        status: 0
                    }, {
                        key: "kycPoaStatus",
                        status: 0
                    }].map((function(t) {
                        var n = e[t.key] || "";
                        return {
                            key: t.key,
                            status: D[n] || 0
                        }
                    }))
                },
                Fe = {
                    showCME: !1,
                    Kyc: De({}),
                    kycWckStatus: 0,
                    Questionnaire: 0,
                    Contract: !1
                },
                je = x(B.checkSticky, 16.66667),
                He = function() {
                    return null
                },
                Ve = function(e) {
                    e.top;
                    return e.children
                },
                qe = function(e) {
                    var t = e.lng,
                        n = e.i18nHost,
                        o = e.staticHost,
                        c = void 0 === o ? n : o,
                        m = e.isPage,
                        v = void 0 !== m && m,
                        y = e.isSticky,
                        b = void 0 !== y && y,
                        w = e.stickyTop,
                        _ = void 0 === w ? 0 : w,
                        E = e.expand,
                        x = void 0 !== E && E,
                        C = e.layoutMax,
                        A = void 0 === C ? 1248 : C,
                        S = e.emit,
                        k = void 0 === S ? He : S,
                        R = (0, l.A)((0, a.useState)(v || x), 2),
                        T = R[0],
                        I = R[1],
                        P = function(e) {
                            var t = e.i18nHost,
                                n = e.language,
                                o = (0, ze.s)((0, ge.A)(be().mark((function e() {
                                    return be().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.abrupt("return", (0, Ue.TU)({
                                                    basePath: "".concat(t, "/api/i18n/-/web/cms"),
                                                    namespace: "compliance",
                                                    locale: n,
                                                    fallback: "en"
                                                }));
                                            case 1:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                }))), [t, n], {
                                    value: {}
                                }),
                                a = o.value,
                                s = o.loading,
                                c = (0, Z.A)(o, ["value", "loading"]);
                            return (0, i.A)((0, r.A)({}, c), {
                                i18n: a,
                                loading: s
                            })
                        }({
                            i18nHost: n,
                            language: /de/i.test(t) ? t : "en"
                        }),
                        O = P.i18n,
                        N = P.loading,
                        L = function() {
                            var e = Be(),
                                t = e.loading,
                                n = e.wrapper,
                                r = (0, l.A)((0, a.useState)(Fe), 2),
                                i = r[0],
                                o = r[1],
                                s = (0, a.useCallback)((function() {
                                    n((0, ge.A)(be().mark((function e() {
                                        var t, n, r, i, a, s, c;
                                        return be().wrap((function(e) {
                                            for (;;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.prev = 0, e.next = 3, (0, we.get)("/bapi/accounts/v2/private/country/user/restricted");
                                                case 3:
                                                    t = e.sent.data, n = t.checkResult, r = t.country, i = t.extraInfo, a = i.kycWckStatus, s = i.cmeQuestionnaireStatus, c = i.cmeContractChecked, o({
                                                        showCME: !n && "TWO" === r,
                                                        Kyc: De(i || {}),
                                                        kycWckStatus: D[a] || 0,
                                                        Questionnaire: F[s],
                                                        Contract: !!c
                                                    }), e.next = 12;
                                                    break;
                                                case 9:
                                                    e.prev = 9, e.t0 = e.catch(0), o(Fe);
                                                case 12:
                                                case "end":
                                                    return e.stop()
                                            }
                                        }), e, null, [
                                            [0, 9]
                                        ])
                                    }))))
                                }), []);
                            return (0, a.useMemo)((function() {
                                return s()
                            }), []), {
                                cmeInfo: i,
                                setCmeInfo: o,
                                loading: t,
                                onRefresh: s
                            }
                        }(),
                        U = L.cmeInfo,
                        H = L.setCmeInfo,
                        V = L.loading,
                        W = L.onRefresh,
                        K = V !== j && !N;
                    s().useEffect((function() {
                        k({
                            done: K
                        })
                    }), [K]);
                    var Y = (0, a.useCallback)((function(e) {
                            I(e), b && !v && je()
                        }), [b, v]),
                        G = !v && b ? B : Ve,
                        Q = {
                            lng: t,
                            i18n: O,
                            cmeInfo: U,
                            cmeLoading: V,
                            setCmeInfo: H,
                            onRefresh: W,
                            staticHost: c,
                            layoutMax: A
                        };
                    return K && U.showCME ? s().createElement(G, {
                        top: "".concat(_)
                    }, s().createElement(p.A, {
                        theme: f.A
                    }, s().createElement(M.Provider, {
                        value: Q
                    }, !v && s().createElement(re, {
                        as: u.A,
                        boxCss: {
                            bg: "badgeYellowBg"
                        },
                        sx: {
                            py: "12px",
                            cursor: "pointer",
                            alignItems: "center"
                        },
                        onClick: function() {
                            return Y(!T)
                        }
                    }, s().createElement(h.A, {
                        color: "primary",
                        size: 20,
                        sx: {
                            flex: "none"
                        }
                    }), s().createElement(d.A, {
                        sx: {
                            color: "t.primary",
                            flex: 1,
                            px: "xs",
                            fontSize: 1
                        },
                        children: z("cme-prompt", O)
                    }), s().createElement(g, {
                        size: 20,
                        color: "t.disabled",
                        sx: {
                            flex: "none",
                            transform: "rotate(".concat(T ? -90 : 90, "deg)")
                        }
                    })), s().createElement(re, {
                        as: u.A,
                        boxCss: {
                            bg: "popupBg",
                            position: "relative",
                            display: T ? "block" : "none"
                        },
                        sx: {
                            flexDirection: ["column", "column", "row"],
                            color: "button.white",
                            py: "md"
                        }
                    }, V === q && s().createElement(ae, null), s().createElement(d.A, {
                        __css: {
                            flex: 1,
                            mr: [0, 0, 120]
                        },
                        sx: {
                            color: "#848E9C",
                            fontSize: 1,
                            lineHeight: "20px"
                        },
                        children: z("cme-message", O)
                    }), s().createElement(u.A, {
                        __css: {
                            flexDirection: ["column", "row"]
                        },
                        sx: {
                            flex: [1, 1, 2],
                            fontSize: 1,
                            mt: ["md", "md", 0]
                        }
                    }, s().createElement(ve, {
                        sx: {
                            flex: 1,
                            mr: [0, 120]
                        }
                    }), s().createElement(Me, {
                        sx: {
                            flex: 1,
                            mt: ["plus", 0]
                        }
                    })))))) : null
                };
            const We = s().memo(qe);
            var Ke = n("x9UB"),
                Ye = n("nG1z"),
                Ge = n("tEf9"),
                Qe = n("GlbY"),
                Ze = n("tKUM");
            const Je = function() {
                var e = localStorage.getItem("deviceId");
                if (e) return e;
                var t = function() {
                    for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++) e[n] = t.substr(Math.floor(16 * Math.random()), 1);
                    return e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("")
                }();
                return localStorage.setItem("deviceId", t), t
            };
            var Xe = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        (0, Qe.Ay)("webClick", (0, r.A)({}, e), (0, r.A)({}, t))
                    } catch (n) {}
                },
                $e = function() {
                    function e(t) {
                        var n = t.cdnHost,
                            r = void 0 === n ? "" : n,
                            i = t.isChatEnable,
                            o = void 0 === i || i,
                            a = t.isChatVisible,
                            s = void 0 === a || a,
                            c = t.isChatPopUp,
                            l = void 0 !== c && c,
                            u = t.onChatLoadedCallbackFunction,
                            d = void 0 === u ? function() {} : u,
                            p = t.apiHost,
                            f = void 0 === p ? "" : p,
                            h = t.entryChatData,
                            m = void 0 === h ? {} : h,
                            v = t.onClick,
                            g = t.sourceEntry,
                            b = t.isSenseiMode,
                            w = void 0 !== b && b;
                        (0, y.A)(this, e), this._cdnHost = r, this._isChatEnable = o, this._isChatVisible = s, this._isChatPopUp = l, this.entryChatData = m, this._scriptNode = null, this.onChatLoadedCallbackFunction = d, this._events = {}, this._hasVipGroup = !1, this._isVip = !1, this.apiHost = f, this.onClick = v, this._sourceEntry = g, this._isSenseiMode = w, this._chatScriptUrl = "", this._preChatContainerElement = null
                    }
                    var t = e.prototype;
                    return t.on = function(e, t) {
                        this._events[e] || (this._events[e] = []), this._events[e].push(t)
                    }, t.once = function(e, t) {
                        var n = this,
                            r = function() {
                                t(), n.off(e, r)
                            };
                        this.on(e, r)
                    }, t.off = function(e, t) {
                        this._events[e] = t ? this._events[e].filter((function(e) {
                            return e !== t
                        })) : []
                    }, t.emit = function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) n[r - 1] = arguments[r];
                        if (this._events[e]) {
                            var i, o = this;
                            this._events[e].forEach((function(e) {
                                return (i = e).call.apply(i, [o].concat((0, Ge.A)(n)))
                            }))
                        }
                    }, t.changeChatVisibilityStatus = function(e) {
                        this._isChatVisible = e, this.emit("onChatVisibilityStatusChanged", this._isChatVisible), this.scriptNode || (e ? this.initChatEntry() : this.hideChatEntry())
                    }, t.changeChatPopUpStatus = function(e) {
                        this._isChatPopUp = e, this.emit("onChatPopUpStatusChanged", this._isChatPopUp), e && (localStorage.setItem("chatButtonVisible", "false"), this.scriptNode || this.addScript())
                    }, t.entryChat = function(e) {
                        var t = e.step,
                            n = void 0 === t ? 2 : t,
                            r = e.question,
                            i = void 0 === r ? "" : r,
                            o = e.extraInfo;
                        if (this.entryChatData = {
                                step: n,
                                question: i,
                                extraInfo: o
                            }, 1 === n) {
                            var a = document.getElementById("pre-chat-container");
                            this.drawToolTip(a, this.langData.api_tooltip), Xe({
                                pageName: "binance_support_chat",
                                elementId: "chat_bubble_entry_tooltip_shown_times",
                                extraInfo: {
                                    url: window.location.href
                                }
                            })
                        }
                        2 === n && (this.changeChatPopUpStatus(!0), this.emit("onEntryChat", this.entryChatData))
                    }, t.checkScriptByUrl = function(e) {
                        return Array.prototype.some.call(document.querySelectorAll("script"), (function(t) {
                            return t.src === e
                        }))
                    }, t.preloadingJsUrl = function() {
                        var e = this;
                        return (0, ge.A)(be().mark((function t() {
                            var n;
                            return be().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, e._chatScriptUrl) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 4, e.getChatScriptUrl();
                                    case 4:
                                        "string" === typeof(n = t.sent) && (e._chatScriptUrl = n);
                                    case 6:
                                        t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0), console.log(t.t0);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 8]
                            ])
                        })))()
                    }, t.getChatScriptUrl = function() {
                        var e = this;
                        return (0, ge.A)(be().mark((function t() {
                            var n, r, i, o, a, s, c, l;
                            return be().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = "", e._chatScriptUrl) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.next = 5, (0, we.get)("/bapi/haodesk/v3/friendly/haodesk/std/base-info");
                                    case 5:
                                        return i = t.sent, o = i && i.success && (null === (r = i.data) || void 0 === r ? void 0 : r.login) ? "".concat(e.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/common/config/js?pathName=").concat(encodeURIComponent(window.location.pathname), "&h=").concat(encodeURIComponent(window.location.hostname)) : "".concat(e.apiHost, "/bapi/haodesk/v3/public/haodesk/std/common/config/js?pathName=").concat(encodeURIComponent(window.location.pathname), "&h=").concat(encodeURIComponent(window.location.hostname)), t.next = 10, (0, we.get)(o);
                                    case 10:
                                        if (a = t.sent, s = a.success, c = a.data, s) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 15:
                                        l = /.*binancezh.*$/.test(window.location.hostname), n = l ? "".concat(e.cdnHost).concat(c.cn) : "".concat(e.cdnHost).concat(c.com), t.next = 20;
                                        break;
                                    case 19:
                                        n = e._chatScriptUrl;
                                    case 20:
                                        return t.abrupt("return", n);
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, t.displayLoadingIcon = function() {
                        if (this._preChatContainerElement) {
                            var e = this._preChatContainerElement.querySelector(".widget-chat-loading-icon-wrap"),
                                t = this._preChatContainerElement.querySelector(".chat-icon");
                            e && t && (e.style.display = "block", t.style.display = "none")
                        }
                    }, t.hideLoadingIcon = function() {
                        if (this._preChatContainerElement) {
                            var e = this._preChatContainerElement.querySelector(".widget-chat-loading-icon-wrap"),
                                t = this._preChatContainerElement.querySelector(".chat-icon");
                            e && t && (e.style.display = "none", t.style.display = "block")
                        }
                    }, t.addScript = function() {
                        var e = this;
                        return (0, ge.A)(be().mark((function t() {
                            var n, r, i;
                            return be().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, n = "", e._chatScriptUrl) {
                                            t.next = 13;
                                            break
                                        }
                                        return e.displayLoadingIcon(), t.next = 6, e.getChatScriptUrl();
                                    case 6:
                                        if (r = t.sent, e.hideLoadingIcon(), r) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 10:
                                        n = r, t.next = 14;
                                        break;
                                    case 13:
                                        n = e._chatScriptUrl;
                                    case 14:
                                        if (!e.checkScriptByUrl(n)) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 16:
                                        (i = document.createElement("script")).setAttribute("async", "true"), i.src = n, i.onload = function() {
                                            e.removeChatEntry(), e.onChatLoadedCallbackFunction && e.onChatLoadedCallbackFunction(), e.emit("onChatLoaded"), "function" === typeof window.onload && window.onload(new Event("load"))
                                        }, e.scriptNode = i, document.body.appendChild(i), t.next = 28;
                                        break;
                                    case 24:
                                        t.prev = 24, t.t0 = t.catch(0), console.log(t.t0), e.hideLoadingIcon();
                                    case 28:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 24]
                            ])
                        })))()
                    }, t.removeCustomizedOnClick = function() {
                        this.onClick = null
                    }, t.removeChatEntry = function() {
                        var e, t = document.getElementById("pre-chat-container");
                        null === t || void 0 === t || null === (e = t.parentNode) || void 0 === e || e.removeChild(t), this._preChatContainerElement = null
                    }, t.hideChatEntry = function() {
                        var e = document.getElementById("pre-chat-container");
                        e && e.classList.remove("visible")
                    }, t.showChatEntry = function() {
                        var e = document.getElementById("pre-chat-container");
                        e && e.classList.add("visible")
                    }, t.drawChatEntry = function(e) {
                        var t = e.chatEntryTitle,
                            n = void 0 === t ? "Support" : t,
                            i = e.isVip,
                            o = void 0 !== i && i,
                            a = this,
                            s = document.getElementById("pre-chat-container");
                        if (s) return s;
                        var c = document.createElement("style");
                        c.innerHTML = "@keyframes widget-show-grow {0% {opacity: 0;}1% {opacity: 0;transform: scale(0.5);}100% {opacity: 1;transform: scale(1);}}.chat-container {position: fixed; right: 24px; bottom: 24px; cursor: pointer; opacity: 1; z-index: 998; border-radius: 16px; background: #FCD535; display: none; justify-content: center; align-items: center; padding:0px; min-width: 48px; height: 48px;} @media screen and (max-width: 767px) {.chat-container{right: 16px;bottom: 16px;border-radius: 14px; min-width: 40px; height: 40px}}.chat-container.visible {display: flex; animation: 0.5s ease 0s 1 normal backwards running widget-show-grow;}.chat-container.visible:hover {padding: 0 12px 0 8px;}.chat-container.visible:hover .chat-text {display: block;}.chat-container .chat-text {display: none; font-weight: 500; font-size: 16px; line-height: 24px; margin-left: 4px;color: #1E2329;}.chat-container .unread-message-alert { position: absolute;top: 5px;right: -8px; transform: translate(0px, -8px); color: #ffffff; background: #f6465d; border-radius: 16px; text-align: center; line-height: 16px; width: fit-content; min-width:8px; padding: 0px 4px; font-size: 16px; font-weight: 500;}.chat-container .tool-tip { position: absolute; width: 300px; right: 0; bottom: calc(100% + 9px); background: #fff; font-weight: 500; font-size: 16px; line-height: 24px; color: #474D57; border-radius: 4px; padding: 16px }.chat-container .tool-tip:after { content: ''; position: absolute; border: 8px solid transparent; border-top-color: #fff; bottom: -14px; right: 16px;}@keyframes widget-chat-loading-spin {\n        0%{-webkit-transform:rotate(0deg);}\n        25%{-webkit-transform:rotate(90deg);}\n        50%{-webkit-transform:rotate(180deg);}\n        75%{-webkit-transform:rotate(270deg);}\n        100%{-webkit-transform:rotate(360deg);}\n      }\n      .widget-chat-loading-icon {\n        display: inline-block; /* \u786e\u4fdd\u5143\u7d20\u662f\u884c\u5185\u5757\u5143\u7d20\uff0c\u8fd9\u6837 transform \u5c5e\u6027\u4f1a\u751f\u6548 */\n        animation: widget-chat-loading-spin 2s linear infinite; /* 2s\u662f\u65cb\u8f6c\u4e00\u5708\u7684\u65f6\u95f4\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8c03\u6574 */\n      }\n      ";
                        var l = document.createElement("div"),
                            u = this;
                        l.addEventListener("click", (0, ge.A)(be().mark((function e() {
                            var t;
                            return be().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!u.onClick) {
                                            e.next = 4;
                                            break
                                        }
                                        u.onClick(), e.next = 9;
                                        break;
                                    case 4:
                                        return localStorage.setItem("chatButtonVisible", "false"), e.next = 8, u.addScript();
                                    case 8:
                                        null === (t = window.CHATWIDGET) || void 0 === t || t.changeChatPopUpStatus(!0);
                                    case 9:
                                        Xe({
                                            pageName: "binance_support_chat",
                                            elementId: "chat_bubble_in_web",
                                            extraInfo: {
                                                deviceId: Je()
                                            }
                                        });
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), l.id = "pre-chat-container", l.classList.add("chat-container"), l.classList.add("visible");
                        var d = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        o ? (d.style.cssText = "width: 32px; height: 35px", d.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.23868 12.7502H11.3363V19.8335H4.25298V15.618C4.25294 15.6065 4.25293 15.595 4.25293 15.5835C4.25293 8.54187 9.9613 2.8335 17.0029 2.8335C24.0446 2.8335 29.7529 8.54187 29.7529 15.5835L29.753 15.5835V19.8335H22.6696V12.7502H25.7671C24.5721 9.05089 21.0999 6.37518 17.0029 6.37518C12.9058 6.37518 9.43372 9.05089 8.23868 12.7502Z" fill="#181A20"/><path d="M21.9162 25.4389V26.5755H23.0528C23.3126 26.5755 23.4912 26.4375 23.4912 26.1615V25.8449C23.4912 25.577 23.3126 25.4389 23.0528 25.4389H21.9162Z" fill="#181A20"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.9163 22.6665H7.08301V31.1665H26.9163V22.6665ZM10.4958 29.7498H12.2088L14.0111 24.0832H12.5011L11.7136 26.7217L11.4132 28.2885H11.397L11.056 26.7217L10.2685 24.0832H8.70166L10.4958 29.7498ZM15.4779 29.7498H18.4249V28.5158H17.7349V25.3172H18.4249V24.0832H15.4779V25.3172H16.168V28.5158H15.4779V29.7498ZM21.9162 29.7498H20.3494V24.0832H23.2882C24.368 24.0832 25.0905 24.8869 25.0905 26.0072C25.0905 27.1195 24.368 27.9313 23.2882 27.9313H21.9162V29.7498Z" fill="#181A20"/>') : (d.style.cssText = "width: 28px; @media screen and (max-width: 767px) {width: 24px;}", d.setAttribute("viewBox", "0 0 28 29"), d.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5023 20.4105V14.5771C24.5023 14.2147 24.4839 13.8566 24.4481 13.5036C24.4449 13.4725 24.4416 13.4415 24.4382 13.4105C23.8579 8.16054 19.4069 4.07715 14.0023 4.07715C8.2033 4.07715 3.50229 8.77816 3.50229 14.5771V20.4105H9.33562V13.4105H6.50814C7.06932 9.77621 10.2109 6.99381 14.0023 6.99381C17.7937 6.99381 20.9353 9.77621 21.4964 13.4105H18.669V20.4105H19.7178C18.6728 21.4345 17.3539 22.1799 15.8812 22.5266C15.4563 21.9507 14.7729 21.5771 14.0023 21.5771C12.7136 21.5771 11.669 22.6218 11.669 23.9105C11.669 25.1991 12.7136 26.2438 14.0023 26.2438C14.9526 26.2438 15.7702 25.6757 16.134 24.8606C18.8766 24.295 21.2285 22.6599 22.7342 20.4105H24.5023Z" fill="#202630"/>'), d.classList.add("chat-icon"), l.appendChild(d);
                        var p = document.createElement("div");
                        p.style.cssText = "width: 32px; height: 32px;display:none;", p.innerHTML = '\n      <svg class="widget-chat-loading-icon"  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <g id="ic/loading-1c">\n      <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M14 29.1281V25.2891C12.8595 25.0447 11.7948 24.5956 10.8465 23.982L8.13198 26.6966C9.82568 27.9445 11.8265 28.7998 14 29.1281ZM5.30352 23.8682L8.01807 21.1536C7.40449 20.2053 6.95532 19.1406 6.71092 18H2.87183C3.2002 20.1736 4.05554 22.1744 5.30352 23.8682ZM2.87183 14H6.71092C6.95532 12.8593 7.40449 11.7947 8.01806 10.8463L5.30352 8.13177C4.05554 9.82551 3.2002 11.8263 2.87183 14ZM8.13197 5.30337L10.8465 8.01791C11.7948 7.40436 12.8595 6.95522 14 6.71082V2.87183C11.8265 3.20018 9.82568 4.05546 8.13197 5.30337ZM18 29.1281C20.1736 28.7997 22.1744 27.9444 23.8682 26.6964L21.1537 23.982C20.2054 24.5956 19.1407 25.0448 18 25.2892V29.1281ZM23.9821 21.1535L26.6966 23.868C27.9445 22.1743 28.7997 20.1735 29.1281 18H25.2892C25.0449 19.1406 24.5957 20.2052 23.9821 21.1535ZM25.2893 14H29.1281C28.7997 11.8264 27.9445 9.82568 26.6966 8.13199L23.9822 10.8464C24.5957 11.7947 25.0449 12.8594 25.2893 14ZM21.1537 8.01795L23.8682 5.30353C22.1744 4.05556 20.1736 3.20023 18 2.87184V6.71079C19.1407 6.95519 20.2054 7.40436 21.1537 8.01795Z" fill="#202630"/>\n      </g>\n      </svg>\n      ', p.classList.add("widget-chat-loading-icon-wrap"), l.appendChild(p);
                        var f = document.createElement("div");
                        return f.classList.add("chat-text"), f.innerHTML = n, l.appendChild(f), document.getElementsByTagName("head")[0].appendChild(c), document.body.appendChild(l), this._preChatContainerElement = l,
                            function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                try {
                                    (0, Qe.Ay)("elementShow", (0, r.A)({}, e), (0, r.A)({}, t))
                                } catch (n) {}
                            }({
                                pageName: "binance_support_chat",
                                elementId: "chat_bubble_in_web",
                                extraInfo: {
                                    deviceId: Je()
                                }
                            }), (0, we.post)("".concat(this.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/has-unread"), {
                                token: localStorage.getItem("chatToken")
                            }).then((function(e) {
                                var t, n, r;
                                if (e.success && (!(null === (t = e.data) || void 0 === t ? void 0 : t.expire) && (null === (n = e.data) || void 0 === n ? void 0 : n.hasUnread) || (null === (r = e.data) || void 0 === r ? void 0 : r.hasGroupUnread))) {
                                    var i, o, s = ((null === (i = e.data) || void 0 === i ? void 0 : i.chatUnreadCount) || 0) + ((null === (o = e.data) || void 0 === o ? void 0 : o.groupUnreadCount) || 0);
                                    s > 0 && a.drawUnreadMessageAlert(l, s)
                                }
                            })).catch((function() {})), l
                    }, t.drawUnreadMessageAlert = function(e, t) {
                        var n = document.createElement("div");
                        n.classList.add("unread-message-alert");
                        var r = document.createTextNode("".concat(t > 999 ? "999+" : t));
                        n.appendChild(r), e.appendChild(n)
                    }, t.drawToolTip = function(e, t) {
                        var n = document.createElement("div");
                        n.classList.add("tool-tip");
                        var r = document.createTextNode(t);
                        n.appendChild(r), e.appendChild(n)
                    }, t.getLocaleFromUrl = function() {
                        return (0, Ze.getLanguage)() || "en"
                    }, t.getI18n = function() {
                        var e = this.getLocaleFromUrl();
                        return fetch("".concat(this.cdnHost, "/api/i18n/-/web/cms/").concat(e, "/binance-chat")).then((function(e) {
                            return e.json()
                        })).catch((function() {}))
                    }, t.initChatEntry = function() {
                        var e = this;
                        return (0, ge.A)(be().mark((function t() {
                            var n, r, i, o, a, s, c, l, u, d, p, f, h, m, v, g;
                            return be().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!["academy.binance.com", "academy.binance.info", "academy.mokexweb.cloud", "academy.binance.me", "academy.binancezh.jp", "academy.binancezh.top"].includes(null === window || void 0 === window ? void 0 : window.location.hostname) && !e.isSenseiMode) {
                                            t.next = 4;
                                            break
                                        }
                                        return e.addScript(), t.abrupt("return");
                                    case 4:
                                        if (!document.getElementById("pre-chat-container")) {
                                            t.next = 8;
                                            break
                                        }
                                        return e.showChatEntry(), t.abrupt("return");
                                    case 8:
                                        return n = localStorage.getItem("chatToken"), r = !1, t.prev = 10, t.next = 13, (0, we.get)("".concat(e.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/visible2?deviceId=").concat(Je()));
                                    case 13:
                                        if (!(i = t.sent).data || !i.success) {
                                            t.next = 21;
                                            break
                                        }
                                        if (o = i.data, a = o.visible, s = o.vip, c = o.hasGroup, r = !!s, e._isVip = r, e._hasVipGroup = !!c, a) {
                                            t.next = 21;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 21:
                                        t.next = 25;
                                        break;
                                    case 23:
                                        t.prev = 23, t.t0 = t.catch(10);
                                    case 25:
                                        if (!(l = window.location.search)) {
                                            t.next = 35;
                                            break
                                        }
                                        if (u = new URLSearchParams(l), !u.get("service-group")) {
                                            t.next = 35;
                                            break
                                        }
                                        return null === (d = window.CHATWIDGET) || void 0 === d || d.changeChatPopUpStatus(!0), t.next = 34, e.addScript();
                                    case 34:
                                        return t.abrupt("return");
                                    case 35:
                                        if (!n) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.next = 38, (0, we.post)("".concat(e.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/user-open-session"), {
                                            token: n
                                        });
                                    case 38:
                                        if (p = t.sent, f = p.success, h = p.data, !f || !h.sessionId || "false" !== localStorage.getItem("chatButtonVisible")) {
                                            t.next = 48;
                                            break
                                        }
                                        return null === (m = window.CHATWIDGET) || void 0 === m || m.changeChatPopUpStatus(!0), t.next = 46, e.addScript();
                                    case 46:
                                        t.next = 59;
                                        break;
                                    case 48:
                                        return t.prev = 48, t.next = 51, e.getI18n();
                                    case 51:
                                        v = t.sent, e.langData = v, e.drawChatEntry({
                                            chatEntryTitle: v["chat-chatButtonText"],
                                            isVip: r
                                        }), t.next = 59;
                                        break;
                                    case 56:
                                        t.prev = 56, t.t1 = t.catch(48), e.drawChatEntry({
                                            chatEntryTitle: "Support",
                                            isVip: r
                                        });
                                    case 59:
                                        t.next = 72;
                                        break;
                                    case 61:
                                        return t.prev = 61, t.next = 64, e.getI18n();
                                    case 64:
                                        g = t.sent, e.langData = g, e.drawChatEntry({
                                            chatEntryTitle: g["chat-chatButtonText"],
                                            isVip: r
                                        }), t.next = 72;
                                        break;
                                    case 69:
                                        t.prev = 69, t.t2 = t.catch(61), e.drawChatEntry({
                                            chatEntryTitle: "Support",
                                            isVip: r
                                        });
                                    case 72:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [10, 23],
                                [48, 56],
                                [61, 69]
                            ])
                        })))()
                    }, (0, Ye.A)(e, [{
                        key: "isChatEnable",
                        get: function() {
                            return this._isChatEnable
                        }
                    }, {
                        key: "isChatVisible",
                        get: function() {
                            return this._isChatVisible
                        }
                    }, {
                        key: "isChatPopUp",
                        get: function() {
                            return this._isChatPopUp
                        }
                    }, {
                        key: "scriptNode",
                        get: function() {
                            return this._scriptNode
                        },
                        set: function(e) {
                            this._scriptNode = e
                        }
                    }, {
                        key: "cdnHost",
                        get: function() {
                            return this._cdnHost
                        },
                        set: function(e) {
                            this._cdnHost = e
                        }
                    }, {
                        key: "hasVipGroup",
                        get: function() {
                            return this._hasVipGroup
                        }
                    }, {
                        key: "isVip",
                        get: function() {
                            return this._isVip
                        }
                    }, {
                        key: "sourceEntry",
                        get: function() {
                            return this._sourceEntry
                        }
                    }, {
                        key: "isSenseiMode",
                        get: function() {
                            return this._isSenseiMode
                        }
                    }]), e
                }(),
                et = n("vpUY"),
                tt = n("FYhw"),
                nt = n("B2Yp"),
                rt = n("vkN1"),
                it = function() {
                    return [rt.A.USER_INFO]
                },
                ot = n("y45O"),
                at = n("0GOp"),
                st = n.n(at),
                ct = n("1eoB"),
                lt = n("kxKT"),
                ut = n("HcTV"),
                dt = n("nocm"),
                pt = n("cNVJ");
            const ft = function() {
                var e = (0, ut.Ay)().t,
                    t = dt.A.site().wwwBinance,
                    n = (0, a.useState)(!1),
                    r = n[0],
                    i = n[1],
                    s = (0, a.useState)(!0),
                    c = s[0],
                    l = s[1],
                    u = (0, a.useState)(null),
                    p = u[0],
                    f = u[1],
                    h = (0, pt.d4)((function(e) {
                        return e.common.themisConfig
                    })).themisHelper;
                return (0, a.useEffect)((function() {
                    var e = function() {
                        var e = (0, ge.A)(st().mark((function e() {
                            var t;
                            return st().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, null === h || void 0 === h ? void 0 : h.getFeatureGateValueByName("aeRestrictionWhitelist");
                                    case 3:
                                        t = e.sent, f(null === t || void 0 === t ? void 0 : t.pass), e.next = 9;
                                        break;
                                    case 7:
                                        e.prev = 7, e.t0 = e.catch(0);
                                    case 9:
                                        return e.prev = 9, l(!1), e.finish(9);
                                    case 12:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 7, 9, 12]
                            ])
                        })));
                        return function() {
                            return e.apply(this, arguments)
                        }
                    }();
                    e()
                }), [h]), (0, a.useEffect)((function() {
                    var e = function(e) {
                        var t = e.data;
                        e.origin === window.location.origin && "commonJS:isAEUser" === (null === t || void 0 === t ? void 0 : t.scope) && i(null === t || void 0 === t ? void 0 : t.value)
                    };
                    return window.addEventListener("message", e),
                        function() {
                            return window.removeEventListener("message", e)
                        }
                }), []), (0, o.jsxs)(lt.A, {
                    sx: {
                        width: ["298px", "360px"],
                        p: "md",
                        textAlign: "center"
                    },
                    visible: r && !c && !1 === p,
                    children: [(0, o.jsx)(ct.A, {
                        size: [64, 96],
                        mb: "sm",
                        mx: "auto"
                    }), (0, o.jsx)(d.A, {
                        color: "t.primary",
                        variant: "headline6",
                        mb: "xs",
                        children: e("c2c-ae-modal-title")
                    }), (0, o.jsx)(d.A, {
                        color: "t.secondary",
                        mb: "md",
                        children: e("c2c-ae-modal-content")
                    }), (0, o.jsx)(P.A, {
                        sz: "normal",
                        fontSize: 16,
                        width: "100%",
                        mb: ["s", 0],
                        onClick: function() {
                            window.location.href = t
                        },
                        children: e("c2c-ae-modal-button-primary")
                    })]
                })
            };
            var ht = n("uHCZ"),
                mt = n("zUKr");
            const vt = function(e) {
                var t = e.metaData;
                return (0, o.jsxs)(ht.A, {
                    children: [(0, o.jsx)("title", {
                        children: t.title
                    }), t.keywords ? (0, o.jsx)("meta", {
                        name: "keywords",
                        content: t.keywords
                    }) : null, t.description ? (0, o.jsx)("meta", {
                        name: "description",
                        content: t.description
                    }) : null, (0, o.jsx)("meta", {
                        property: "og:type",
                        content: "website"
                    }), (0, o.jsx)("meta", {
                        property: "og:title",
                        content: t.metaTitle || t.title
                    }), (0, o.jsx)("meta", {
                        property: "og:site_name",
                        content: mt.qt
                    }), (0, o.jsx)("meta", {
                        property: "og:image",
                        content: mt.Hh
                    }), (0, o.jsx)("meta", {
                        property: "twitter:title",
                        content: t.metaTitle || t.title
                    }), (0, o.jsx)("meta", {
                        property: "twitter:site",
                        content: mt.qt
                    }), (0, o.jsx)("meta", {
                        property: "twitter:image",
                        content: mt.Hh
                    }), (0, o.jsx)("meta", {
                        property: "twitter:image:src",
                        content: mt.Hh
                    }), (0, o.jsx)("meta", {
                        property: "twitter:card",
                        content: "summary_large_image"
                    }), (0, o.jsx)("meta", {
                        name: "viewport",
                        content: "width=device-width,minimum-scale=1,maximum-scale=1.0,initial-scale=1,user-scalable=no"
                    })]
                })
            };
            var gt = n("afOl"),
                yt = n("wYc8"),
                bt = "FRANCE_COMPLIANCE_SHOWED";
            const wt = function() {
                var e = (0, ut.Ay)(),
                    t = e.t,
                    n = e.language;
                (0, a.useEffect)((function() {
                    "fr" === n && "true" !== sessionStorage.getItem(bt) && ((0, yt.A)({
                        title: t("c2c-ui-compliance-popup-fr-service-notice"),
                        message: t("c2c-ui-compliance-popup-fr-msg"),
                        hideCancelButton: !0,
                        confirmText: t("c2c-ui-compliance-popup-fr-btn-ok")
                    }), sessionStorage.setItem(bt, "true"))
                }), [n, t])
            };
            var _t = n("URRj"),
                Et = n("RNvQ"),
                xt = n.n(Et);
            const Ct = function(e) {
                return s().createElement(v.A, (0, m.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), s().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M12 2.999l7.071 7.071-1.768 1.768-4.054-4.055V21h-2.5V7.784l-4.053 4.054-1.768-1.768 7.07-7.071H12z",
                    fill: "currentColor"
                }))
            };
            var At = (0, n("6aZm").UF)("uikit-widget", "BackTop");

            function St(e) {
                At();
                var t = e.children,
                    n = e.offsetX,
                    i = void 0 === n ? 0 : n,
                    o = e.offsetY,
                    s = void 0 === o ? 0 : o,
                    c = e.position,
                    l = void 0 === c ? "right" : c,
                    d = e.willBackTopWhenClick,
                    p = void 0 === d || d,
                    f = e.onClick,
                    h = (0, Z.A)(e, ["children", "offsetX", "offsetY", "position", "willBackTopWhenClick", "onClick"]),
                    v = a.useMemo((function() {
                        var e = {};
                        return i && ("right" === l && (e.right = i), "left" === l && (e.left = i)), s && (e.bottom = s), e
                    }), [i, s, l]);
                return a.createElement(u.A, (0, m.A)({
                    tx: "backTop",
                    variant: "default",
                    __css: (0, r.A)({}, {
                        left: {
                            position: "fixed",
                            left: "ls",
                            bottom: "ls"
                        },
                        right: {
                            position: "fixed",
                            right: "ls",
                            bottom: "ls"
                        },
                        center: {
                            position: "fixed",
                            left: "50%",
                            transform: "translateX(-50%)",
                            bottom: "ls"
                        }
                    }[l], v),
                    onClick: function(e) {
                        p && window && window.scrollTo({
                            top: 0
                        }), f && f(e)
                    }
                }, h), t && t, !t && a.createElement(Ct, {
                    className: "backTop-arrow-icon"
                }))
            }
            const kt = function() {
                var e = (0, a.useState)(!1),
                    t = e[0],
                    n = e[1],
                    r = (0, a.useCallback)(xt()((function() {
                        n(window.scrollY > 400)
                    }), 300), []);
                return (0, a.useEffect)((function() {
                    return document.querySelector("body").addEventListener("scroll", r),
                        function() {
                            document.querySelector("body").removeEventListener("scroll", r)
                        }
                }), []), t ? (0, o.jsx)(c.A, {
                    children: (0, o.jsx)(St, {
                        position: "right",
                        offsetX: 25,
                        offsetY: 145,
                        onClick: function() {
                            return window.scrollTo({
                                top: 0
                            })
                        }
                    })
                }) : null
            };
            var Rt = (0, et.S)().isHybrid,
                Tt = function() {
                    return function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                isChatEnable: !0,
                                isChatVisible: !0,
                                isChatPopUp: !1,
                                onChatLoadedCallbackFunction: function() {},
                                onClick: null,
                                isSenseiMode: !1
                            },
                            n = t.isChatEnable,
                            r = t.isChatVisible,
                            i = t.isChatPopUp,
                            o = t.onChatLoadedCallbackFunction,
                            s = t.apiHost,
                            c = t.onClick,
                            l = t.sourceEntry,
                            u = t.isSenseiMode,
                            d = (0, a.useRef)(new $e({
                                cdnHost: e,
                                isChatEnable: n,
                                isChatPopUp: i,
                                isChatVisible: r,
                                onChatLoadedCallbackFunction: o,
                                apiHost: s,
                                onClick: c,
                                sourceEntry: l,
                                isSenseiMode: u
                            }));
                        (0, a.useEffect)((function() {
                            if (n) {
                                var t = d.current;
                                t.cdnHost = e, window.CHATWIDGET = t, Xe({
                                    pageName: "binance_support_chat",
                                    elementId: "chat_bubble_entry_amount_of_calls",
                                    extraInfo: {
                                        url: window.location.href
                                    }
                                }), r && (i ? t.changeChatPopUpStatus(!0) : t.changeChatVisibilityStatus(!0))
                            }
                        }), [e]), (0, a.useEffect)((function() {
                            d.current.changeChatVisibilityStatus(r)
                        }), [r]), (0, a.useEffect)((function() {
                            d.current.changeChatPopUpStatus(i)
                        }), [i]), (0, a.useEffect)((function() {
                            setTimeout((function() {
                                d.current.preloadingJsUrl()
                            }), 4e3)
                        }), []), d.current
                    }(mt.K5, {
                        isChatEnable: !Rt,
                        isChatVisible: !Rt,
                        isChatPopUp: null,
                        onChatLoadedCallbackFunction: function() {}
                    }), null
                };
            const Bt = function(e) {
                var t, n = e.metaData,
                    s = void 0 === n ? {} : n,
                    l = e.showChatWidget,
                    u = void 0 === l || l,
                    d = e.bg,
                    p = void 0 === d ? void 0 : d,
                    f = e.children,
                    h = gt.Ay.metaTitles,
                    m = gt.Ay.brands,
                    v = (0, ut.Ay)().language,
                    g = (null === s || void 0 === s ? void 0 : s.title) || h[v] || h.en || m[v],
                    y = (0, Ke.k)().isLoggedIn,
                    b = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return (0, tt.I)(it(), (function() {
                            return (0, nt.bE)(rt.A.USER_INFO)
                        }), e)
                    }({
                        enabled: !!y
                    }),
                    w = b.data,
                    _ = null === w || void 0 === w || null === (t = w.data) || void 0 === t ? void 0 : t.userId;
                (0, a.useEffect)((function() {
                    var e;
                    y && _ && (null === window || void 0 === window || null === (e = window.localStorage) || void 0 === e || e.setItem("pl-id", _))
                }), [y, _]), wt();
                var E = (0, _t.A)({}),
                    x = (0, a.useMemo)((function() {
                        return (null === E || void 0 === E ? void 0 : E.total) ? "(".concat(null === E || void 0 === E ? void 0 : E.total, ") ").concat(g) : g
                    }), [g, null === E || void 0 === E ? void 0 : E.total]);
                return (0, o.jsxs)(ot.A, {
                    children: [(0, o.jsx)(vt, {
                        metaData: (0, i.A)((0, r.A)({}, s), {
                            title: x
                        })
                    }), (0, o.jsxs)(c.A, {
                        sx: {
                            height: "100%",
                            "header, > div": {
                                flexShrink: "0"
                            },
                            footer: {
                                pt: "60px"
                            }
                        },
                        className: "scroll-container",
                        children: [y && (0, o.jsx)(We, {
                            lng: v,
                            i18nHost: mt.K5,
                            expand: !0
                        }), (0, o.jsx)(c.A, {
                            className: "main-content",
                            as: "main",
                            bg: p,
                            children: f
                        }), (0, o.jsx)(kt, {}), u && (0, o.jsx)(Tt, {}), (0, o.jsx)(ft, {})]
                    })]
                })
            }
        },
        "Q+Qy": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 12a9 9 0 1118 0 9 9 0 01-18 0zm8.934 3.5H10v-7h1.934L16 12l-4.066 3.5z",
                    fill: "currentColor"
                }))
            }
        },
        B35M: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M5 3v18h14V7l-4-4H5zm3 6.5h8V12H8V9.5zm0 5h8V17H8v-2.5z",
                    fill: "currentColor"
                }))
            }
        },
        rAey: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => s
            });
            var r = n("wIZF"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("Y4uf");
            const s = function(e) {
                return o().createElement(a.A, (0, r.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M3 5h18v14H3V5zm7 5l6 6.05H6v-2.5L10 10zm6 2a2 2 0 100-4 2 2 0 000 4z",
                    fill: "currentColor"
                }))
            }
        },
        VXBK: (e, t, n) => {
            "use strict";
            n.d(t, {
                NP: () => d,
                DP: () => p
            });
            var r = n("OHGK"),
                i = n("DTvD"),
                o = n.n(i),
                a = n("f+pp");
            const s = function(e) {
                var t = new WeakMap;
                return function(n) {
                    if (t.has(n)) return t.get(n);
                    var r = e(n);
                    return t.set(n, r), r
                }
            };
            n("oXkQ");

            function c(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }
            var l = function(e, t) {
                    return "function" === typeof t ? t(e) : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? c(n, !0).forEach((function(t) {
                                (0, r.A)(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : c(n).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }({}, e, {}, t)
                },
                u = s((function(e) {
                    return s((function(t) {
                        return l(e, t)
                    }))
                })),
                d = function(e) {
                    return (0, i.createElement)(a.Dx.Consumer, null, (function(t) {
                        return e.theme !== t && (t = u(t)(e.theme)), (0, i.createElement)(a.Dx.Provider, {
                            value: t
                        }, e.children)
                    }))
                };

            function p() {
                return o().useContext(a.Dx)
            }
        },
        LNcM: () => {
            ! function() {
                "use strict";
                if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
                else {
                    var e = window.document,
                        t = [];
                    r.prototype.THROTTLE_TIMEOUT = 100, r.prototype.POLL_INTERVAL = null, r.prototype.USE_MUTATION_OBSERVER = !0, r.prototype.observe = function(e) {
                        if (!this._observationTargets.some((function(t) {
                                return t.element == e
                            }))) {
                            if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({
                                element: e,
                                entry: null
                            }), this._monitorIntersections(), this._checkForIntersections()
                        }
                    }, r.prototype.unobserve = function(e) {
                        this._observationTargets = this._observationTargets.filter((function(t) {
                            return t.element != e
                        })), this._observationTargets.length || (this._unmonitorIntersections(), this._unregisterInstance())
                    }, r.prototype.disconnect = function() {
                        this._observationTargets = [], this._unmonitorIntersections(), this._unregisterInstance()
                    }, r.prototype.takeRecords = function() {
                        var e = this._queuedEntries.slice();
                        return this._queuedEntries = [], e
                    }, r.prototype._initThresholds = function(e) {
                        var t = e || [0];
                        return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
                            if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return e !== n[t - 1]
                        }))
                    }, r.prototype._parseRootMargin = function(e) {
                        var t = (e || "0px").split(/\s+/).map((function(e) {
                            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(t[1]),
                                unit: t[2]
                            }
                        }));
                        return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
                    }, r.prototype._monitorIntersections = function() {
                        this._monitoringIntersections || (this._monitoringIntersections = !0, this.POLL_INTERVAL ? this._monitoringInterval = setInterval(this._checkForIntersections, this.POLL_INTERVAL) : (i(window, "resize", this._checkForIntersections, !0), i(e, "scroll", this._checkForIntersections, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in window && (this._domObserver = new MutationObserver(this._checkForIntersections), this._domObserver.observe(e, {
                            attributes: !0,
                            childList: !0,
                            characterData: !0,
                            subtree: !0
                        }))))
                    }, r.prototype._unmonitorIntersections = function() {
                        this._monitoringIntersections && (this._monitoringIntersections = !1, clearInterval(this._monitoringInterval), this._monitoringInterval = null, o(window, "resize", this._checkForIntersections, !0), o(e, "scroll", this._checkForIntersections, !0), this._domObserver && (this._domObserver.disconnect(), this._domObserver = null))
                    }, r.prototype._checkForIntersections = function() {
                        var e = this._rootIsInDom(),
                            t = e ? this._getRootRect() : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            };
                        this._observationTargets.forEach((function(r) {
                            var i = r.element,
                                o = s(i),
                                a = this._rootContainsTarget(i),
                                c = r.entry,
                                l = e && a && this._computeTargetAndRootIntersection(i, t),
                                u = r.entry = new n({
                                    time: window.performance && performance.now && performance.now(),
                                    target: i,
                                    boundingClientRect: o,
                                    rootBounds: t,
                                    intersectionRect: l
                                });
                            c ? e && a ? this._hasCrossedThreshold(c, u) && this._queuedEntries.push(u) : c && c.isIntersecting && this._queuedEntries.push(u) : this._queuedEntries.push(u)
                        }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                    }, r.prototype._computeTargetAndRootIntersection = function(t, n) {
                        if ("none" != window.getComputedStyle(t).display) {
                            for (var r = s(t), i = l(t), o = !1; !o;) {
                                var c = null,
                                    u = 1 == i.nodeType ? window.getComputedStyle(i) : {};
                                if ("none" == u.display) return;
                                if (i == this.root || i == e ? (o = !0, c = n) : i != e.body && i != e.documentElement && "visible" != u.overflow && (c = s(i)), c && !(r = a(c, r))) break;
                                i = l(i)
                            }
                            return r
                        }
                    }, r.prototype._getRootRect = function() {
                        var t;
                        if (this.root) t = s(this.root);
                        else {
                            var n = e.documentElement,
                                r = e.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: n.clientWidth || r.clientWidth,
                                width: n.clientWidth || r.clientWidth,
                                bottom: n.clientHeight || r.clientHeight,
                                height: n.clientHeight || r.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(t)
                    }, r.prototype._expandRectByRootMargin = function(e) {
                        var t = this._rootMarginValues.map((function(t, n) {
                                return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                            })),
                            n = {
                                top: e.top - t[0],
                                right: e.right + t[1],
                                bottom: e.bottom + t[2],
                                left: e.left - t[3]
                            };
                        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                    }, r.prototype._hasCrossedThreshold = function(e, t) {
                        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                            r = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                        if (n !== r)
                            for (var i = 0; i < this.thresholds.length; i++) {
                                var o = this.thresholds[i];
                                if (o == n || o == r || o < n !== o < r) return !0
                            }
                    }, r.prototype._rootIsInDom = function() {
                        return !this.root || c(e, this.root)
                    }, r.prototype._rootContainsTarget = function(t) {
                        return c(this.root || e, t)
                    }, r.prototype._registerInstance = function() {
                        t.indexOf(this) < 0 && t.push(this)
                    }, r.prototype._unregisterInstance = function() {
                        var e = t.indexOf(this); - 1 != e && t.splice(e, 1)
                    }, window.IntersectionObserver = r, window.IntersectionObserverEntry = n
                }

                function n(e) {
                    this.time = e.time, this.target = e.target, this.rootBounds = e.rootBounds, this.boundingClientRect = e.boundingClientRect, this.intersectionRect = e.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }, this.isIntersecting = !!e.intersectionRect;
                    var t = this.boundingClientRect,
                        n = t.width * t.height,
                        r = this.intersectionRect,
                        i = r.width * r.height;
                    this.intersectionRatio = n ? Number((i / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function r(e, t) {
                    var n = t || {};
                    if ("function" != typeof e) throw new Error("callback must be a function");
                    if (n.root && 1 != n.root.nodeType) throw new Error("root must be an Element");
                    this._checkForIntersections = function(e, t) {
                        var n = null;
                        return function() {
                            n || (n = setTimeout((function() {
                                e(), n = null
                            }), t))
                        }
                    }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
                        return e.value + e.unit
                    })).join(" ")
                }

                function i(e, t, n, r) {
                    "function" == typeof e.addEventListener ? e.addEventListener(t, n, r || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
                }

                function o(e, t, n, r) {
                    "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, r || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
                }

                function a(e, t) {
                    var n = Math.max(e.top, t.top),
                        r = Math.min(e.bottom, t.bottom),
                        i = Math.max(e.left, t.left),
                        o = Math.min(e.right, t.right),
                        a = o - i,
                        s = r - n;
                    return a >= 0 && s >= 0 && {
                        top: n,
                        bottom: r,
                        left: i,
                        right: o,
                        width: a,
                        height: s
                    }
                }

                function s(e) {
                    var t;
                    try {
                        t = e.getBoundingClientRect()
                    } catch (n) {}
                    return t ? (t.width && t.height || (t = {
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    }), t) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function c(e, t) {
                    for (var n = t; n;) {
                        if (n == e) return !0;
                        n = l(n)
                    }
                    return !1
                }

                function l(e) {
                    var t = e.parentNode;
                    return t && 11 == t.nodeType && t.host ? t.host : t && t.assignedSlot ? t.assignedSlot.parentNode : t
                }
            }()
        }
    }
]);
//# debugId=b2671275-d620-5054-a142-1997f1485a35