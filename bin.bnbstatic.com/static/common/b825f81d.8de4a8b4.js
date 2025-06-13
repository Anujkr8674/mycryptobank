(self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || []).push([
    [87], {
        QF3D: (r, t, e) => {
            var n = e("vxC8")(e("IBsm"), "DataView");
            r.exports = n
        },
        IS0S: (r, t, e) => {
            var n = e("vxC8")(e("IBsm"), "Promise");
            r.exports = n
        },
        OBn4: (r, t, e) => {
            var n = e("vxC8")(e("IBsm"), "Set");
            r.exports = n
        },
        "JBn+": (r, t, e) => {
            var n = e("hyzI"),
                o = e("qjF7"),
                u = e("cEmw");

            function a(r) {
                var t = -1,
                    e = null == r ? 0 : r.length;
                for (this.__data__ = new n; ++t < e;) this.add(r[t])
            }
            a.prototype.add = a.prototype.push = o, a.prototype.has = u, r.exports = a
        },
        "4+Vk": (r, t, e) => {
            var n = e("vxC8")(e("IBsm"), "WeakMap");
            r.exports = n
        },
        LmOH: r => {
            r.exports = function(r, t) {
                for (var e = -1, n = null == r ? 0 : r.length; ++e < n && !1 !== t(r[e], e, r););
                return r
            }
        },
        W0vE: r => {
            r.exports = function(r, t) {
                for (var e = -1, n = null == r ? 0 : r.length, o = 0, u = []; ++e < n;) {
                    var a = r[e];
                    t(a, e, r) && (u[o++] = a)
                }
                return u
            }
        },
        H87J: r => {
            r.exports = function(r, t) {
                for (var e = -1, n = null == r ? 0 : r.length, o = Array(n); ++e < n;) o[e] = t(r[e], e, r);
                return o
            }
        },
        "y/9h": r => {
            r.exports = function(r, t) {
                for (var e = -1, n = t.length, o = r.length; ++e < n;) r[o + e] = t[e];
                return r
            }
        },
        myUI: r => {
            r.exports = function(r, t) {
                for (var e = -1, n = null == r ? 0 : r.length; ++e < n;)
                    if (t(r[e], e, r)) return !0;
                return !1
            }
        },
        w2Tz: (r, t, e) => {
            var n = e("xoyU"),
                o = e("Ypsa");
            r.exports = function(r, t) {
                for (var e = 0, u = (t = n(t, r)).length; null != r && e < u;) r = r[o(t[e++])];
                return e && e == u ? r : void 0
            }
        },
        pIod: (r, t, e) => {
            var n = e("y/9h"),
                o = e("wxYD");
            r.exports = function(r, t, e) {
                var u = t(r);
                return o(r) ? u : n(u, e(r))
            }
        },
        JYmt: r => {
            r.exports = function(r, t) {
                return null != r && t in Object(r)
            }
        },
        NYSw: (r, t, e) => {
            var n = e("BqUW"),
                o = e("tLQN");
            r.exports = function r(t, e, u, a, i) {
                return t === e || (null == t || null == e || !o(t) && !o(e) ? t !== t && e !== e : n(t, e, u, a, r, i))
            }
        },
        BqUW: (r, t, e) => {
            var n = e("HsnV"),
                o = e("ZZ+W"),
                u = e("R3gn"),
                a = e("yZHP"),
                i = e("kkM+"),
                c = e("wxYD"),
                s = e("3ajY"),
                f = e("Qd2C"),
                p = "[object Arguments]",
                v = "[object Array]",
                l = "[object Object]",
                x = Object.prototype.hasOwnProperty;
            r.exports = function(r, t, e, h, y, b) {
                var w = c(r),
                    g = c(t),
                    d = w ? v : i(r),
                    j = g ? v : i(t),
                    S = (d = d == p ? l : d) == l,
                    O = (j = j == p ? l : j) == l,
                    m = d == j;
                if (m && s(r)) {
                    if (!s(t)) return !1;
                    w = !0, S = !1
                }
                if (m && !S) return b || (b = new n), w || f(r) ? o(r, t, e, h, y, b) : u(r, t, d, e, h, y, b);
                if (!(1 & e)) {
                    var _ = S && x.call(r, "__wrapped__"),
                        k = O && x.call(t, "__wrapped__");
                    if (_ || k) {
                        var C = _ ? r.value() : r,
                            Y = k ? t.value() : t;
                        return b || (b = new n), y(C, Y, e, h, b)
                    }
                }
                return !!m && (b || (b = new n), a(r, t, e, h, y, b))
            }
        },
        ZjRn: (r, t, e) => {
            var n = e("HsnV"),
                o = e("NYSw");
            r.exports = function(r, t, e, u) {
                var a = e.length,
                    i = a,
                    c = !u;
                if (null == r) return !i;
                for (r = Object(r); a--;) {
                    var s = e[a];
                    if (c && s[2] ? s[1] !== r[s[0]] : !(s[0] in r)) return !1
                }
                for (; ++a < i;) {
                    var f = (s = e[a])[0],
                        p = r[f],
                        v = s[1];
                    if (c && s[2]) {
                        if (void 0 === p && !(f in r)) return !1
                    } else {
                        var l = new n;
                        if (u) var x = u(p, v, f, r, t, l);
                        if (!(void 0 === x ? o(v, p, 3, u, l) : x)) return !1
                    }
                }
                return !0
            }
        },
        S3pA: (r, t, e) => {
            var n = e("7/we"),
                o = e("KAo/"),
                u = e("zWgn"),
                a = e("wxYD"),
                i = e("1EDM");
            r.exports = function(r) {
                return "function" == typeof r ? r : null == r ? u : "object" == typeof r ? a(r) ? o(r[0], r[1]) : n(r) : i(r)
            }
        },
        "4uJK": (r, t, e) => {
            var n = e("CbIe"),
                o = e("OtNC"),
                u = Object.prototype.hasOwnProperty;
            r.exports = function(r) {
                if (!n(r)) return o(r);
                var t = [];
                for (var e in Object(r)) u.call(r, e) && "constructor" != e && t.push(e);
                return t
            }
        },
        "7/we": (r, t, e) => {
            var n = e("ZjRn"),
                o = e("hMsr"),
                u = e("0Ss3");
            r.exports = function(r) {
                var t = o(r);
                return 1 == t.length && t[0][2] ? u(t[0][0], t[0][1]) : function(e) {
                    return e === r || n(e, r, t)
                }
            }
        },
        "KAo/": (r, t, e) => {
            var n = e("NYSw"),
                o = e("2srY"),
                u = e("NW/2"),
                a = e("i7nn"),
                i = e("+tCn"),
                c = e("0Ss3"),
                s = e("Ypsa");
            r.exports = function(r, t) {
                return a(r) && i(t) ? c(s(r), t) : function(e) {
                    var a = o(e, r);
                    return void 0 === a && a === t ? u(e, r) : n(t, a, 3)
                }
            }
        },
        EI7Z: r => {
            r.exports = function(r) {
                return function(t) {
                    return null == t ? void 0 : t[r]
                }
            }
        },
        CEyS: (r, t, e) => {
            var n = e("w2Tz");
            r.exports = function(r) {
                return function(t) {
                    return n(t, r)
                }
            }
        },
        JcJ6: (r, t, e) => {
            var n = e("Syyo"),
                o = e("H87J"),
                u = e("wxYD"),
                a = e("a88S"),
                i = n ? n.prototype : void 0,
                c = i ? i.toString : void 0;
            r.exports = function r(t) {
                if ("string" == typeof t) return t;
                if (u(t)) return o(t, r) + "";
                if (a(t)) return c ? c.call(t) : "";
                var e = t + "";
                return "0" == e && 1 / t == -Infinity ? "-0" : e
            }
        },
        S0iI: r => {
            r.exports = function(r, t) {
                return r.has(t)
            }
        },
        xoyU: (r, t, e) => {
            var n = e("wxYD"),
                o = e("i7nn"),
                u = e("SoOq"),
                a = e("dw5g");
            r.exports = function(r, t) {
                return n(r) ? r : o(r, t) ? [r] : u(a(r))
            }
        },
        "ZZ+W": (r, t, e) => {
            var n = e("JBn+"),
                o = e("myUI"),
                u = e("S0iI");
            r.exports = function(r, t, e, a, i, c) {
                var s = 1 & e,
                    f = r.length,
                    p = t.length;
                if (f != p && !(s && p > f)) return !1;
                var v = c.get(r),
                    l = c.get(t);
                if (v && l) return v == t && l == r;
                var x = -1,
                    h = !0,
                    y = 2 & e ? new n : void 0;
                for (c.set(r, t), c.set(t, r); ++x < f;) {
                    var b = r[x],
                        w = t[x];
                    if (a) var g = s ? a(w, b, x, t, r, c) : a(b, w, x, r, t, c);
                    if (void 0 !== g) {
                        if (g) continue;
                        h = !1;
                        break
                    }
                    if (y) {
                        if (!o(t, (function(r, t) {
                                if (!u(y, t) && (b === r || i(b, r, e, a, c))) return y.push(t)
                            }))) {
                            h = !1;
                            break
                        }
                    } else if (b !== w && !i(b, w, e, a, c)) {
                        h = !1;
                        break
                    }
                }
                return c.delete(r), c.delete(t), h
            }
        },
        R3gn: (r, t, e) => {
            var n = e("Syyo"),
                o = e("mGzy"),
                u = e("pPzx"),
                a = e("ZZ+W"),
                i = e("aURW"),
                c = e("XlL0"),
                s = n ? n.prototype : void 0,
                f = s ? s.valueOf : void 0;
            r.exports = function(r, t, e, n, s, p, v) {
                switch (e) {
                    case "[object DataView]":
                        if (r.byteLength != t.byteLength || r.byteOffset != t.byteOffset) return !1;
                        r = r.buffer, t = t.buffer;
                    case "[object ArrayBuffer]":
                        return !(r.byteLength != t.byteLength || !p(new o(r), new o(t)));
                    case "[object Boolean]":
                    case "[object Date]":
                    case "[object Number]":
                        return u(+r, +t);
                    case "[object Error]":
                        return r.name == t.name && r.message == t.message;
                    case "[object RegExp]":
                    case "[object String]":
                        return r == t + "";
                    case "[object Map]":
                        var l = i;
                    case "[object Set]":
                        var x = 1 & n;
                        if (l || (l = c), r.size != t.size && !x) return !1;
                        var h = v.get(r);
                        if (h) return h == t;
                        n |= 2, v.set(r, t);
                        var y = a(l(r), l(t), n, s, p, v);
                        return v.delete(r), y;
                    case "[object Symbol]":
                        if (f) return f.call(r) == f.call(t)
                }
                return !1
            }
        },
        yZHP: (r, t, e) => {
            var n = e("tlBq"),
                o = Object.prototype.hasOwnProperty;
            r.exports = function(r, t, e, u, a, i) {
                var c = 1 & e,
                    s = n(r),
                    f = s.length;
                if (f != n(t).length && !c) return !1;
                for (var p = f; p--;) {
                    var v = s[p];
                    if (!(c ? v in t : o.call(t, v))) return !1
                }
                var l = i.get(r),
                    x = i.get(t);
                if (l && x) return l == t && x == r;
                var h = !0;
                i.set(r, t), i.set(t, r);
                for (var y = c; ++p < f;) {
                    var b = r[v = s[p]],
                        w = t[v];
                    if (u) var g = c ? u(w, b, v, t, r, i) : u(b, w, v, r, t, i);
                    if (!(void 0 === g ? b === w || a(b, w, e, u, i) : g)) {
                        h = !1;
                        break
                    }
                    y || (y = "constructor" == v)
                }
                if (h && !y) {
                    var d = r.constructor,
                        j = t.constructor;
                    d == j || !("constructor" in r) || !("constructor" in t) || "function" == typeof d && d instanceof d && "function" == typeof j && j instanceof j || (h = !1)
                }
                return i.delete(r), i.delete(t), h
            }
        },
        tlBq: (r, t, e) => {
            var n = e("pIod"),
                o = e("70Le"),
                u = e("BlJA");
            r.exports = function(r) {
                return n(r, u, o)
            }
        },
        hMsr: (r, t, e) => {
            var n = e("+tCn"),
                o = e("BlJA");
            r.exports = function(r) {
                for (var t = o(r), e = t.length; e--;) {
                    var u = t[e],
                        a = r[u];
                    t[e] = [u, a, n(a)]
                }
                return t
            }
        },
        "70Le": (r, t, e) => {
            var n = e("W0vE"),
                o = e("X4R2"),
                u = Object.prototype.propertyIsEnumerable,
                a = Object.getOwnPropertySymbols,
                i = a ? function(r) {
                    return null == r ? [] : (r = Object(r), n(a(r), (function(t) {
                        return u.call(r, t)
                    })))
                } : o;
            r.exports = i
        },
        "kkM+": (r, t, e) => {
            var n = e("QF3D"),
                o = e("qeCs"),
                u = e("IS0S"),
                a = e("OBn4"),
                i = e("4+Vk"),
                c = e("Dhk8"),
                s = e("c18h"),
                f = "[object Map]",
                p = "[object Promise]",
                v = "[object Set]",
                l = "[object WeakMap]",
                x = "[object DataView]",
                h = s(n),
                y = s(o),
                b = s(u),
                w = s(a),
                g = s(i),
                d = c;
            (n && d(new n(new ArrayBuffer(1))) != x || o && d(new o) != f || u && d(u.resolve()) != p || a && d(new a) != v || i && d(new i) != l) && (d = function(r) {
                var t = c(r),
                    e = "[object Object]" == t ? r.constructor : void 0,
                    n = e ? s(e) : "";
                if (n) switch (n) {
                    case h:
                        return x;
                    case y:
                        return f;
                    case b:
                        return p;
                    case w:
                        return v;
                    case g:
                        return l
                }
                return t
            }), r.exports = d
        },
        "z+TE": (r, t, e) => {
            var n = e("xoyU"),
                o = e("bvyN"),
                u = e("wxYD"),
                a = e("pnw1"),
                i = e("t0L4"),
                c = e("Ypsa");
            r.exports = function(r, t, e) {
                for (var s = -1, f = (t = n(t, r)).length, p = !1; ++s < f;) {
                    var v = c(t[s]);
                    if (!(p = null != r && e(r, v))) break;
                    r = r[v]
                }
                return p || ++s != f ? p : !!(f = null == r ? 0 : r.length) && i(f) && a(v, f) && (u(r) || o(r))
            }
        },
        i7nn: (r, t, e) => {
            var n = e("wxYD"),
                o = e("a88S"),
                u = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                a = /^\w*$/;
            r.exports = function(r, t) {
                if (n(r)) return !1;
                var e = typeof r;
                return !("number" != e && "symbol" != e && "boolean" != e && null != r && !o(r)) || (a.test(r) || !u.test(r) || null != t && r in Object(t))
            }
        },
        "+tCn": (r, t, e) => {
            var n = e("tQYX");
            r.exports = function(r) {
                return r === r && !n(r)
            }
        },
        aURW: r => {
            r.exports = function(r) {
                var t = -1,
                    e = Array(r.size);
                return r.forEach((function(r, n) {
                    e[++t] = [n, r]
                })), e
            }
        },
        "0Ss3": r => {
            r.exports = function(r, t) {
                return function(e) {
                    return null != e && (e[r] === t && (void 0 !== t || r in Object(e)))
                }
            }
        },
        "0+aC": (r, t, e) => {
            var n = e("pFSi");
            r.exports = function(r) {
                var t = n(r, (function(r) {
                        return 500 === e.size && e.clear(), r
                    })),
                    e = t.cache;
                return t
            }
        },
        OtNC: (r, t, e) => {
            var n = e("TAtK")(Object.keys, Object);
            r.exports = n
        },
        qjF7: r => {
            r.exports = function(r) {
                return this.__data__.set(r, "__lodash_hash_undefined__"), this
            }
        },
        cEmw: r => {
            r.exports = function(r) {
                return this.__data__.has(r)
            }
        },
        XlL0: r => {
            r.exports = function(r) {
                var t = -1,
                    e = Array(r.size);
                return r.forEach((function(r) {
                    e[++t] = r
                })), e
            }
        },
        SoOq: (r, t, e) => {
            var n = e("0+aC"),
                o = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                u = /\\(\\)?/g,
                a = n((function(r) {
                    var t = [];
                    return 46 === r.charCodeAt(0) && t.push(""), r.replace(o, (function(r, e, n, o) {
                        t.push(n ? o.replace(u, "$1") : e || r)
                    })), t
                }));
            r.exports = a
        },
        Ypsa: (r, t, e) => {
            var n = e("a88S");
            r.exports = function(r) {
                if ("string" == typeof r || n(r)) return r;
                var t = r + "";
                return "0" == t && 1 / r == -Infinity ? "-0" : t
            }
        },
        "2srY": (r, t, e) => {
            var n = e("w2Tz");
            r.exports = function(r, t, e) {
                var o = null == r ? void 0 : n(r, t);
                return void 0 === o ? e : o
            }
        },
        "NW/2": (r, t, e) => {
            var n = e("JYmt"),
                o = e("z+TE");
            r.exports = function(r, t) {
                return null != r && o(r, t, n)
            }
        },
        BlJA: (r, t, e) => {
            var n = e("rmhs"),
                o = e("4uJK"),
                u = e("9y2L");
            r.exports = function(r) {
                return u(r) ? n(r) : o(r)
            }
        },
        pFSi: (r, t, e) => {
            var n = e("hyzI");

            function o(r, t) {
                if ("function" != typeof r || null != t && "function" != typeof t) throw new TypeError("Expected a function");
                var e = function() {
                    var n = arguments,
                        o = t ? t.apply(this, n) : n[0],
                        u = e.cache;
                    if (u.has(o)) return u.get(o);
                    var a = r.apply(this, n);
                    return e.cache = u.set(o, a) || u, a
                };
                return e.cache = new(o.Cache || n), e
            }
            o.Cache = n, r.exports = o
        },
        "1EDM": (r, t, e) => {
            var n = e("EI7Z"),
                o = e("CEyS"),
                u = e("i7nn"),
                a = e("Ypsa");
            r.exports = function(r) {
                return u(r) ? n(a(r)) : o(r)
            }
        },
        X4R2: r => {
            r.exports = function() {
                return []
            }
        },
        dw5g: (r, t, e) => {
            var n = e("JcJ6");
            r.exports = function(r) {
                return null == r ? "" : n(r)
            }
        }
    }
]);