! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "0ccdc70d-0737-5e71-b6e3-068e6887e5ad")
    } catch (e) {}
}();
(self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || []).push([
    [2899], {
        Bfcd: (t, e, r) => {
            t = r.nmd(t);
            var n = "__lodash_hash_undefined__",
                o = 9007199254740991,
                a = "[object Arguments]",
                i = "[object Array]",
                s = "[object Boolean]",
                u = "[object Date]",
                l = "[object Error]",
                c = "[object Function]",
                f = "[object Map]",
                p = "[object Number]",
                d = "[object Object]",
                h = "[object Promise]",
                y = "[object RegExp]",
                g = "[object Set]",
                b = "[object String]",
                m = "[object Symbol]",
                v = "[object WeakMap]",
                w = "[object ArrayBuffer]",
                O = "[object DataView]",
                S = /^\[object .+?Constructor\]$/,
                D = /^(?:0|[1-9]\d*)$/,
                j = {};
            j["[object Float32Array]"] = j["[object Float64Array]"] = j["[object Int8Array]"] = j["[object Int16Array]"] = j["[object Int32Array]"] = j["[object Uint8Array]"] = j["[object Uint8ClampedArray]"] = j["[object Uint16Array]"] = j["[object Uint32Array]"] = !0, j[a] = j[i] = j[w] = j[s] = j[O] = j[u] = j[l] = j[c] = j[f] = j[p] = j[d] = j[y] = j[g] = j[b] = j[v] = !1;
            var P = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                x = "object" == typeof self && self && self.Object === Object && self,
                _ = P || x || Function("return this")(),
                R = e && !e.nodeType && e,
                z = R && t && !t.nodeType && t,
                C = z && z.exports === R,
                k = C && P.process,
                E = function() {
                    try {
                        return k && k.binding && k.binding("util")
                    } catch (t) {}
                }(),
                M = E && E.isTypedArray;

            function T(t, e) {
                for (var r = -1, n = null == t ? 0 : t.length; ++r < n;)
                    if (e(t[r], r, t)) return !0;
                return !1
            }

            function L(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t, n) {
                    r[++e] = [n, t]
                })), r
            }

            function N(t) {
                var e = -1,
                    r = Array(t.size);
                return t.forEach((function(t) {
                    r[++e] = t
                })), r
            }
            var H, W, A = Array.prototype,
                I = Function.prototype,
                Y = Object.prototype,
                B = _["__core-js_shared__"],
                G = I.toString,
                X = Y.hasOwnProperty,
                q = function() {
                    var t = /[^.]+$/.exec(B && B.keys && B.keys.IE_PROTO || "");
                    return t ? "Symbol(src)_1." + t : ""
                }(),
                U = Y.toString,
                F = RegExp("^" + G.call(X).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                V = C ? _.Buffer : void 0,
                Q = _.Symbol,
                K = _.Uint8Array,
                $ = Y.propertyIsEnumerable,
                J = A.splice,
                Z = Q ? Q.toStringTag : void 0,
                tt = Object.getOwnPropertySymbols,
                et = V ? V.isBuffer : void 0,
                rt = (H = Object.keys, W = Object, function(t) {
                    return H(W(t))
                }),
                nt = kt(_, "DataView"),
                ot = kt(_, "Map"),
                at = kt(_, "Promise"),
                it = kt(_, "Set"),
                st = kt(_, "WeakMap"),
                ut = kt(Object, "create"),
                lt = Lt(nt),
                ct = Lt(ot),
                ft = Lt(at),
                pt = Lt(it),
                dt = Lt(st),
                ht = Q ? Q.prototype : void 0,
                yt = ht ? ht.valueOf : void 0;

            function gt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }

            function bt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }

            function mt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.clear(); ++e < r;) {
                    var n = t[e];
                    this.set(n[0], n[1])
                }
            }

            function vt(t) {
                var e = -1,
                    r = null == t ? 0 : t.length;
                for (this.__data__ = new mt; ++e < r;) this.add(t[e])
            }

            function wt(t) {
                var e = this.__data__ = new bt(t);
                this.size = e.size
            }

            function Ot(t, e) {
                var r = Wt(t),
                    n = !r && Ht(t),
                    o = !r && !n && At(t),
                    a = !r && !n && !o && Xt(t),
                    i = r || n || o || a,
                    s = i ? function(t, e) {
                        for (var r = -1, n = Array(t); ++r < t;) n[r] = e(r);
                        return n
                    }(t.length, String) : [],
                    u = s.length;
                for (var l in t) !e && !X.call(t, l) || i && ("length" == l || o && ("offset" == l || "parent" == l) || a && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || Tt(l, u)) || s.push(l);
                return s
            }

            function St(t, e) {
                for (var r = t.length; r--;)
                    if (Nt(t[r][0], e)) return r;
                return -1
            }

            function Dt(t) {
                return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : Z && Z in Object(t) ? function(t) {
                    var e = X.call(t, Z),
                        r = t[Z];
                    try {
                        t[Z] = void 0;
                        var n = !0
                    } catch (a) {}
                    var o = U.call(t);
                    n && (e ? t[Z] = r : delete t[Z]);
                    return o
                }(t) : function(t) {
                    return U.call(t)
                }(t)
            }

            function jt(t) {
                return Gt(t) && Dt(t) == a
            }

            function Pt(t, e, r, n, o) {
                return t === e || (null == t || null == e || !Gt(t) && !Gt(e) ? t !== t && e !== e : function(t, e, r, n, o, c) {
                    var h = Wt(t),
                        v = Wt(e),
                        S = h ? i : Mt(t),
                        D = v ? i : Mt(e),
                        j = (S = S == a ? d : S) == d,
                        P = (D = D == a ? d : D) == d,
                        x = S == D;
                    if (x && At(t)) {
                        if (!At(e)) return !1;
                        h = !0, j = !1
                    }
                    if (x && !j) return c || (c = new wt), h || Xt(t) ? Rt(t, e, r, n, o, c) : function(t, e, r, n, o, a, i) {
                        switch (r) {
                            case O:
                                if (t.byteLength != e.byteLength || t.byteOffset != e.byteOffset) return !1;
                                t = t.buffer, e = e.buffer;
                            case w:
                                return !(t.byteLength != e.byteLength || !a(new K(t), new K(e)));
                            case s:
                            case u:
                            case p:
                                return Nt(+t, +e);
                            case l:
                                return t.name == e.name && t.message == e.message;
                            case y:
                            case b:
                                return t == e + "";
                            case f:
                                var c = L;
                            case g:
                                var d = 1 & n;
                                if (c || (c = N), t.size != e.size && !d) return !1;
                                var h = i.get(t);
                                if (h) return h == e;
                                n |= 2, i.set(t, e);
                                var v = Rt(c(t), c(e), n, o, a, i);
                                return i.delete(t), v;
                            case m:
                                if (yt) return yt.call(t) == yt.call(e)
                        }
                        return !1
                    }(t, e, S, r, n, o, c);
                    if (!(1 & r)) {
                        var _ = j && X.call(t, "__wrapped__"),
                            R = P && X.call(e, "__wrapped__");
                        if (_ || R) {
                            var z = _ ? t.value() : t,
                                C = R ? e.value() : e;
                            return c || (c = new wt), o(z, C, r, n, c)
                        }
                    }
                    if (!x) return !1;
                    return c || (c = new wt),
                        function(t, e, r, n, o, a) {
                            var i = 1 & r,
                                s = zt(t),
                                u = s.length,
                                l = zt(e),
                                c = l.length;
                            if (u != c && !i) return !1;
                            var f = u;
                            for (; f--;) {
                                var p = s[f];
                                if (!(i ? p in e : X.call(e, p))) return !1
                            }
                            var d = a.get(t);
                            if (d && a.get(e)) return d == e;
                            var h = !0;
                            a.set(t, e), a.set(e, t);
                            var y = i;
                            for (; ++f < u;) {
                                var g = t[p = s[f]],
                                    b = e[p];
                                if (n) var m = i ? n(b, g, p, e, t, a) : n(g, b, p, t, e, a);
                                if (!(void 0 === m ? g === b || o(g, b, r, n, a) : m)) {
                                    h = !1;
                                    break
                                }
                                y || (y = "constructor" == p)
                            }
                            if (h && !y) {
                                var v = t.constructor,
                                    w = e.constructor;
                                v == w || !("constructor" in t) || !("constructor" in e) || "function" == typeof v && v instanceof v && "function" == typeof w && w instanceof w || (h = !1)
                            }
                            return a.delete(t), a.delete(e), h
                        }(t, e, r, n, o, c)
                }(t, e, r, n, Pt, o))
            }

            function xt(t) {
                return !(!Bt(t) || function(t) {
                    return !!q && q in t
                }(t)) && (It(t) ? F : S).test(Lt(t))
            }

            function _t(t) {
                if (! function(t) {
                        var e = t && t.constructor,
                            r = "function" == typeof e && e.prototype || Y;
                        return t === r
                    }(t)) return rt(t);
                var e = [];
                for (var r in Object(t)) X.call(t, r) && "constructor" != r && e.push(r);
                return e
            }

            function Rt(t, e, r, n, o, a) {
                var i = 1 & r,
                    s = t.length,
                    u = e.length;
                if (s != u && !(i && u > s)) return !1;
                var l = a.get(t);
                if (l && a.get(e)) return l == e;
                var c = -1,
                    f = !0,
                    p = 2 & r ? new vt : void 0;
                for (a.set(t, e), a.set(e, t); ++c < s;) {
                    var d = t[c],
                        h = e[c];
                    if (n) var y = i ? n(h, d, c, e, t, a) : n(d, h, c, t, e, a);
                    if (void 0 !== y) {
                        if (y) continue;
                        f = !1;
                        break
                    }
                    if (p) {
                        if (!T(e, (function(t, e) {
                                if (i = e, !p.has(i) && (d === t || o(d, t, r, n, a))) return p.push(e);
                                var i
                            }))) {
                            f = !1;
                            break
                        }
                    } else if (d !== h && !o(d, h, r, n, a)) {
                        f = !1;
                        break
                    }
                }
                return a.delete(t), a.delete(e), f
            }

            function zt(t) {
                return function(t, e, r) {
                    var n = e(t);
                    return Wt(t) ? n : function(t, e) {
                        for (var r = -1, n = e.length, o = t.length; ++r < n;) t[o + r] = e[r];
                        return t
                    }(n, r(t))
                }(t, qt, Et)
            }

            function Ct(t, e) {
                var r = t.__data__;
                return function(t) {
                    var e = typeof t;
                    return "string" == e || "number" == e || "symbol" == e || "boolean" == e ? "__proto__" !== t : null === t
                }(e) ? r["string" == typeof e ? "string" : "hash"] : r.map
            }

            function kt(t, e) {
                var r = function(t, e) {
                    return null == t ? void 0 : t[e]
                }(t, e);
                return xt(r) ? r : void 0
            }
            gt.prototype.clear = function() {
                this.__data__ = ut ? ut(null) : {}, this.size = 0
            }, gt.prototype.delete = function(t) {
                var e = this.has(t) && delete this.__data__[t];
                return this.size -= e ? 1 : 0, e
            }, gt.prototype.get = function(t) {
                var e = this.__data__;
                if (ut) {
                    var r = e[t];
                    return r === n ? void 0 : r
                }
                return X.call(e, t) ? e[t] : void 0
            }, gt.prototype.has = function(t) {
                var e = this.__data__;
                return ut ? void 0 !== e[t] : X.call(e, t)
            }, gt.prototype.set = function(t, e) {
                var r = this.__data__;
                return this.size += this.has(t) ? 0 : 1, r[t] = ut && void 0 === e ? n : e, this
            }, bt.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, bt.prototype.delete = function(t) {
                var e = this.__data__,
                    r = St(e, t);
                return !(r < 0) && (r == e.length - 1 ? e.pop() : J.call(e, r, 1), --this.size, !0)
            }, bt.prototype.get = function(t) {
                var e = this.__data__,
                    r = St(e, t);
                return r < 0 ? void 0 : e[r][1]
            }, bt.prototype.has = function(t) {
                return St(this.__data__, t) > -1
            }, bt.prototype.set = function(t, e) {
                var r = this.__data__,
                    n = St(r, t);
                return n < 0 ? (++this.size, r.push([t, e])) : r[n][1] = e, this
            }, mt.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new gt,
                    map: new(ot || bt),
                    string: new gt
                }
            }, mt.prototype.delete = function(t) {
                var e = Ct(this, t).delete(t);
                return this.size -= e ? 1 : 0, e
            }, mt.prototype.get = function(t) {
                return Ct(this, t).get(t)
            }, mt.prototype.has = function(t) {
                return Ct(this, t).has(t)
            }, mt.prototype.set = function(t, e) {
                var r = Ct(this, t),
                    n = r.size;
                return r.set(t, e), this.size += r.size == n ? 0 : 1, this
            }, vt.prototype.add = vt.prototype.push = function(t) {
                return this.__data__.set(t, n), this
            }, vt.prototype.has = function(t) {
                return this.__data__.has(t)
            }, wt.prototype.clear = function() {
                this.__data__ = new bt, this.size = 0
            }, wt.prototype.delete = function(t) {
                var e = this.__data__,
                    r = e.delete(t);
                return this.size = e.size, r
            }, wt.prototype.get = function(t) {
                return this.__data__.get(t)
            }, wt.prototype.has = function(t) {
                return this.__data__.has(t)
            }, wt.prototype.set = function(t, e) {
                var r = this.__data__;
                if (r instanceof bt) {
                    var n = r.__data__;
                    if (!ot || n.length < 199) return n.push([t, e]), this.size = ++r.size, this;
                    r = this.__data__ = new mt(n)
                }
                return r.set(t, e), this.size = r.size, this
            };
            var Et = tt ? function(t) {
                    return null == t ? [] : (t = Object(t), function(t, e) {
                        for (var r = -1, n = null == t ? 0 : t.length, o = 0, a = []; ++r < n;) {
                            var i = t[r];
                            e(i, r, t) && (a[o++] = i)
                        }
                        return a
                    }(tt(t), (function(e) {
                        return $.call(t, e)
                    })))
                } : function() {
                    return []
                },
                Mt = Dt;

            function Tt(t, e) {
                return !!(e = null == e ? o : e) && ("number" == typeof t || D.test(t)) && t > -1 && t % 1 == 0 && t < e
            }

            function Lt(t) {
                if (null != t) {
                    try {
                        return G.call(t)
                    } catch (e) {}
                    try {
                        return t + ""
                    } catch (e) {}
                }
                return ""
            }

            function Nt(t, e) {
                return t === e || t !== t && e !== e
            }(nt && Mt(new nt(new ArrayBuffer(1))) != O || ot && Mt(new ot) != f || at && Mt(at.resolve()) != h || it && Mt(new it) != g || st && Mt(new st) != v) && (Mt = function(t) {
                var e = Dt(t),
                    r = e == d ? t.constructor : void 0,
                    n = r ? Lt(r) : "";
                if (n) switch (n) {
                    case lt:
                        return O;
                    case ct:
                        return f;
                    case ft:
                        return h;
                    case pt:
                        return g;
                    case dt:
                        return v
                }
                return e
            });
            var Ht = jt(function() {
                    return arguments
                }()) ? jt : function(t) {
                    return Gt(t) && X.call(t, "callee") && !$.call(t, "callee")
                },
                Wt = Array.isArray;
            var At = et || function() {
                return !1
            };

            function It(t) {
                if (!Bt(t)) return !1;
                var e = Dt(t);
                return e == c || "[object GeneratorFunction]" == e || "[object AsyncFunction]" == e || "[object Proxy]" == e
            }

            function Yt(t) {
                return "number" == typeof t && t > -1 && t % 1 == 0 && t <= o
            }

            function Bt(t) {
                var e = typeof t;
                return null != t && ("object" == e || "function" == e)
            }

            function Gt(t) {
                return null != t && "object" == typeof t
            }
            var Xt = M ? function(t) {
                return function(e) {
                    return t(e)
                }
            }(M) : function(t) {
                return Gt(t) && Yt(t.length) && !!j[Dt(t)]
            };

            function qt(t) {
                return null != (e = t) && Yt(e.length) && !It(e) ? Ot(t) : _t(t);
                var e
            }
            t.exports = function(t, e) {
                return Pt(t, e)
            }
        },
        X9y0: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), Object.defineProperty(e, "DraggableCore", {
                enumerable: !0,
                get: function() {
                    return c.default
                }
            }), e.default = void 0;
            var n = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== h(t) && "function" !== typeof t) return {
                        default: t
                    };
                    var e = d();
                    if (e && e.has(t)) return e.get(t);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(t, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = t[o]
                        }
                    r.default = t, e && e.set(t, r);
                    return r
                }(r("DTvD")),
                o = p(r("1YyT")),
                a = p(r("hTvQ")),
                i = p(r("xqbL")),
                s = r("Ptj7"),
                u = r("+yTO"),
                l = r("lwQF"),
                c = p(r("k3Qf")),
                f = p(r("lYLv"));

            function p(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function d() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap;
                return d = function() {
                    return t
                }, t
            }

            function h(t) {
                return h = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, h(t)
            }

            function y() {
                return y = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, y.apply(this, arguments)
            }

            function g(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function b(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return m(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return m(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function m(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function v(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function w(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? v(Object(r), !0).forEach((function(e) {
                        _(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function O(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function S(t, e, r) {
                return e && O(t.prototype, e), r && O(t, r), t
            }

            function D(t, e) {
                return D = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, D(t, e)
            }

            function j(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = x(t);
                    if (e) {
                        var o = x(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return function(t, e) {
                        if (e && ("object" === h(e) || "function" === typeof e)) return e;
                        return P(t)
                    }(this, r)
                }
            }

            function P(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function x(t) {
                return x = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, x(t)
            }

            function _(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var R = function(t) {
                ! function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && D(t, e)
                }(r, t);
                var e = j(r);

                function r(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, r), _(P(n = e.call(this, t)), "onDragStart", (function(t, e) {
                        if ((0, f.default)("Draggable: onDragStart: %j", e), !1 === n.props.onStart(t, (0, u.createDraggableData)(P(n), e))) return !1;
                        n.setState({
                            dragging: !0,
                            dragged: !0
                        })
                    })), _(P(n), "onDrag", (function(t, e) {
                        if (!n.state.dragging) return !1;
                        (0, f.default)("Draggable: onDrag: %j", e);
                        var r = (0, u.createDraggableData)(P(n), e),
                            o = {
                                x: r.x,
                                y: r.y
                            };
                        if (n.props.bounds) {
                            var a = o.x,
                                i = o.y;
                            o.x += n.state.slackX, o.y += n.state.slackY;
                            var s = b((0, u.getBoundPosition)(P(n), o.x, o.y), 2),
                                l = s[0],
                                c = s[1];
                            o.x = l, o.y = c, o.slackX = n.state.slackX + (a - o.x), o.slackY = n.state.slackY + (i - o.y), r.x = o.x, r.y = o.y, r.deltaX = o.x - n.state.x, r.deltaY = o.y - n.state.y
                        }
                        if (!1 === n.props.onDrag(t, r)) return !1;
                        n.setState(o)
                    })), _(P(n), "onDragStop", (function(t, e) {
                        if (!n.state.dragging) return !1;
                        if (!1 === n.props.onStop(t, (0, u.createDraggableData)(P(n), e))) return !1;
                        (0, f.default)("Draggable: onDragStop: %j", e);
                        var r = {
                            dragging: !1,
                            slackX: 0,
                            slackY: 0
                        };
                        if (Boolean(n.props.position)) {
                            var o = n.props.position,
                                a = o.x,
                                i = o.y;
                            r.x = a, r.y = i
                        }
                        n.setState(r)
                    })), n.state = {
                        dragging: !1,
                        dragged: !1,
                        x: t.position ? t.position.x : t.defaultPosition.x,
                        y: t.position ? t.position.y : t.defaultPosition.y,
                        prevPropsPosition: w({}, t.position),
                        slackX: 0,
                        slackY: 0,
                        isElementSVG: !1
                    }, !t.position || t.onDrag || t.onStop || console.warn("A `position` was applied to this <Draggable>, without drag handlers. This will make this component effectively undraggable. Please attach `onDrag` or `onStop` handlers so you can adjust the `position` of this element."), n
                }
                return S(r, null, [{
                    key: "getDerivedStateFromProps",
                    value: function(t, e) {
                        var r = t.position,
                            n = e.prevPropsPosition;
                        return !r || n && r.x === n.x && r.y === n.y ? null : ((0, f.default)("Draggable: getDerivedStateFromProps %j", {
                            position: r,
                            prevPropsPosition: n
                        }), {
                            x: r.x,
                            y: r.y,
                            prevPropsPosition: w({}, r)
                        })
                    }
                }]), S(r, [{
                    key: "componentDidMount",
                    value: function() {
                        "undefined" !== typeof window.SVGElement && this.findDOMNode() instanceof window.SVGElement && this.setState({
                            isElementSVG: !0
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.setState({
                            dragging: !1
                        })
                    }
                }, {
                    key: "findDOMNode",
                    value: function() {
                        return this.props.nodeRef ? this.props.nodeRef.current : a.default.findDOMNode(this)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e = this.props,
                            r = (e.axis, e.bounds, e.children),
                            o = e.defaultPosition,
                            a = e.defaultClassName,
                            l = e.defaultClassNameDragging,
                            f = e.defaultClassNameDragged,
                            p = e.position,
                            d = e.positionOffset,
                            h = (e.scale, g(e, ["axis", "bounds", "children", "defaultPosition", "defaultClassName", "defaultClassNameDragging", "defaultClassNameDragged", "position", "positionOffset", "scale"])),
                            b = {},
                            m = null,
                            v = !Boolean(p) || this.state.dragging,
                            O = p || o,
                            S = {
                                x: (0, u.canDragX)(this) && v ? this.state.x : O.x,
                                y: (0, u.canDragY)(this) && v ? this.state.y : O.y
                            };
                        this.state.isElementSVG ? m = (0, s.createSVGTransform)(S, d) : b = (0, s.createCSSTransform)(S, d);
                        var D = (0, i.default)(r.props.className || "", a, (_(t = {}, l, this.state.dragging), _(t, f, this.state.dragged), t));
                        return n.createElement(c.default, y({}, h, {
                            onStart: this.onDragStart,
                            onDrag: this.onDrag,
                            onStop: this.onDragStop
                        }), n.cloneElement(n.Children.only(r), {
                            className: D,
                            style: w(w({}, r.props.style), b),
                            transform: m
                        }))
                    }
                }]), r
            }(n.Component);
            e.default = R, _(R, "displayName", "Draggable"), _(R, "propTypes", w(w({}, c.default.propTypes), {}, {
                axis: o.default.oneOf(["both", "x", "y", "none"]),
                bounds: o.default.oneOfType([o.default.shape({
                    left: o.default.number,
                    right: o.default.number,
                    top: o.default.number,
                    bottom: o.default.number
                }), o.default.string, o.default.oneOf([!1])]),
                defaultClassName: o.default.string,
                defaultClassNameDragging: o.default.string,
                defaultClassNameDragged: o.default.string,
                defaultPosition: o.default.shape({
                    x: o.default.number,
                    y: o.default.number
                }),
                positionOffset: o.default.shape({
                    x: o.default.oneOfType([o.default.number, o.default.string]),
                    y: o.default.oneOfType([o.default.number, o.default.string])
                }),
                position: o.default.shape({
                    x: o.default.number,
                    y: o.default.number
                }),
                className: l.dontSetMe,
                style: l.dontSetMe,
                transform: l.dontSetMe
            })), _(R, "defaultProps", w(w({}, c.default.defaultProps), {}, {
                axis: "both",
                bounds: !1,
                defaultClassName: "react-draggable",
                defaultClassNameDragging: "react-draggable-dragging",
                defaultClassNameDragged: "react-draggable-dragged",
                defaultPosition: {
                    x: 0,
                    y: 0
                },
                position: null,
                scale: 1
            }))
        },
        k3Qf: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== p(t) && "function" !== typeof t) return {
                        default: t
                    };
                    var e = f();
                    if (e && e.has(t)) return e.get(t);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(t, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = t[o]
                        }
                    r.default = t, e && e.set(t, r);
                    return r
                }(r("DTvD")),
                o = c(r("1YyT")),
                a = c(r("hTvQ")),
                i = r("Ptj7"),
                s = r("+yTO"),
                u = r("lwQF"),
                l = c(r("lYLv"));

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap;
                return f = function() {
                    return t
                }, t
            }

            function p(t) {
                return p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, p(t)
            }

            function d(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    if ("undefined" === typeof Symbol || !(Symbol.iterator in Object(t))) return;
                    var r = [],
                        n = !0,
                        o = !1,
                        a = void 0;
                    try {
                        for (var i, s = t[Symbol.iterator](); !(n = (i = s.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
                    } catch (u) {
                        o = !0, a = u
                    } finally {
                        try {
                            n || null == s.return || s.return()
                        } finally {
                            if (o) throw a
                        }
                    }
                    return r
                }(t, e) || function(t, e) {
                    if (!t) return;
                    if ("string" === typeof t) return h(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    "Object" === r && t.constructor && (r = t.constructor.name);
                    if ("Map" === r || "Set" === r) return Array.from(t);
                    if ("Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)) return h(t, e)
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function h(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, n = new Array(e); r < e; r++) n[r] = t[r];
                return n
            }

            function y(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function g(t, e) {
                return g = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, g(t, e)
            }

            function b(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var r, n = v(t);
                    if (e) {
                        var o = v(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return function(t, e) {
                        if (e && ("object" === p(e) || "function" === typeof e)) return e;
                        return m(t)
                    }(this, r)
                }
            }

            function m(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function v(t) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, v(t)
            }

            function w(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var O = {
                    start: "touchstart",
                    move: "touchmove",
                    stop: "touchend"
                },
                S = {
                    start: "mousedown",
                    move: "mousemove",
                    stop: "mouseup"
                },
                D = S,
                j = function(t) {
                    ! function(t, e) {
                        if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), e && g(t, e)
                    }(c, t);
                    var e, r, o, u = b(c);

                    function c() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, c);
                        for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                        return w(m(t = u.call.apply(u, [this].concat(r))), "state", {
                            dragging: !1,
                            lastX: NaN,
                            lastY: NaN,
                            touchIdentifier: null
                        }), w(m(t), "mounted", !1), w(m(t), "handleDragStart", (function(e) {
                            if (t.props.onMouseDown(e), !t.props.allowAnyClick && "number" === typeof e.button && 0 !== e.button) return !1;
                            var r = t.findDOMNode();
                            if (!r || !r.ownerDocument || !r.ownerDocument.body) throw new Error("<DraggableCore> not mounted on DragStart!");
                            var n = r.ownerDocument;
                            if (!(t.props.disabled || !(e.target instanceof n.defaultView.Node) || t.props.handle && !(0, i.matchesSelectorAndParentsTo)(e.target, t.props.handle, r) || t.props.cancel && (0, i.matchesSelectorAndParentsTo)(e.target, t.props.cancel, r))) {
                                "touchstart" === e.type && e.preventDefault();
                                var o = (0, i.getTouchIdentifier)(e);
                                t.setState({
                                    touchIdentifier: o
                                });
                                var a = (0, s.getControlPosition)(e, o, m(t));
                                if (null != a) {
                                    var u = a.x,
                                        c = a.y,
                                        f = (0, s.createCoreData)(m(t), u, c);
                                    (0, l.default)("DraggableCore: handleDragStart: %j", f), (0, l.default)("calling", t.props.onStart), !1 !== t.props.onStart(e, f) && !1 !== t.mounted && (t.props.enableUserSelectHack && (0, i.addUserSelectStyles)(n), t.setState({
                                        dragging: !0,
                                        lastX: u,
                                        lastY: c
                                    }), (0, i.addEvent)(n, D.move, t.handleDrag), (0, i.addEvent)(n, D.stop, t.handleDragStop))
                                }
                            }
                        })), w(m(t), "handleDrag", (function(e) {
                            var r = (0, s.getControlPosition)(e, t.state.touchIdentifier, m(t));
                            if (null != r) {
                                var n = r.x,
                                    o = r.y;
                                if (Array.isArray(t.props.grid)) {
                                    var a = n - t.state.lastX,
                                        i = o - t.state.lastY,
                                        u = d((0, s.snapToGrid)(t.props.grid, a, i), 2);
                                    if (a = u[0], i = u[1], !a && !i) return;
                                    n = t.state.lastX + a, o = t.state.lastY + i
                                }
                                var c = (0, s.createCoreData)(m(t), n, o);
                                if ((0, l.default)("DraggableCore: handleDrag: %j", c), !1 !== t.props.onDrag(e, c) && !1 !== t.mounted) t.setState({
                                    lastX: n,
                                    lastY: o
                                });
                                else try {
                                    t.handleDragStop(new MouseEvent("mouseup"))
                                } catch (p) {
                                    var f = document.createEvent("MouseEvents");
                                    f.initMouseEvent("mouseup", !0, !0, window, 0, 0, 0, 0, 0, !1, !1, !1, !1, 0, null), t.handleDragStop(f)
                                }
                            }
                        })), w(m(t), "handleDragStop", (function(e) {
                            if (t.state.dragging) {
                                var r = (0, s.getControlPosition)(e, t.state.touchIdentifier, m(t));
                                if (null != r) {
                                    var n = r.x,
                                        o = r.y,
                                        a = (0, s.createCoreData)(m(t), n, o);
                                    if (!1 === t.props.onStop(e, a) || !1 === t.mounted) return !1;
                                    var u = t.findDOMNode();
                                    u && t.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(u.ownerDocument), (0, l.default)("DraggableCore: handleDragStop: %j", a), t.setState({
                                        dragging: !1,
                                        lastX: NaN,
                                        lastY: NaN
                                    }), u && ((0, l.default)("DraggableCore: Removing handlers"), (0, i.removeEvent)(u.ownerDocument, D.move, t.handleDrag), (0, i.removeEvent)(u.ownerDocument, D.stop, t.handleDragStop))
                                }
                            }
                        })), w(m(t), "onMouseDown", (function(e) {
                            return D = S, t.handleDragStart(e)
                        })), w(m(t), "onMouseUp", (function(e) {
                            return D = S, t.handleDragStop(e)
                        })), w(m(t), "onTouchStart", (function(e) {
                            return D = O, t.handleDragStart(e)
                        })), w(m(t), "onTouchEnd", (function(e) {
                            return D = O, t.handleDragStop(e)
                        })), t
                    }
                    return e = c, (r = [{
                        key: "componentDidMount",
                        value: function() {
                            this.mounted = !0;
                            var t = this.findDOMNode();
                            t && (0, i.addEvent)(t, O.start, this.onTouchStart, {
                                passive: !1
                            })
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.mounted = !1;
                            var t = this.findDOMNode();
                            if (t) {
                                var e = t.ownerDocument;
                                (0, i.removeEvent)(e, S.move, this.handleDrag), (0, i.removeEvent)(e, O.move, this.handleDrag), (0, i.removeEvent)(e, S.stop, this.handleDragStop), (0, i.removeEvent)(e, O.stop, this.handleDragStop), (0, i.removeEvent)(t, O.start, this.onTouchStart, {
                                    passive: !1
                                }), this.props.enableUserSelectHack && (0, i.removeUserSelectStyles)(e)
                            }
                        }
                    }, {
                        key: "findDOMNode",
                        value: function() {
                            return this.props.nodeRef ? this.props.nodeRef.current : a.default.findDOMNode(this)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return n.cloneElement(n.Children.only(this.props.children), {
                                onMouseDown: this.onMouseDown,
                                onMouseUp: this.onMouseUp,
                                onTouchEnd: this.onTouchEnd
                            })
                        }
                    }]) && y(e.prototype, r), o && y(e, o), c
                }(n.Component);
            e.default = j, w(j, "displayName", "DraggableCore"), w(j, "propTypes", {
                allowAnyClick: o.default.bool,
                disabled: o.default.bool,
                enableUserSelectHack: o.default.bool,
                offsetParent: function(t, e) {
                    if (t[e] && 1 !== t[e].nodeType) throw new Error("Draggable's offsetParent must be a DOM Node.")
                },
                grid: o.default.arrayOf(o.default.number),
                handle: o.default.string,
                cancel: o.default.string,
                nodeRef: o.default.object,
                onStart: o.default.func,
                onDrag: o.default.func,
                onStop: o.default.func,
                onMouseDown: o.default.func,
                scale: o.default.number,
                className: u.dontSetMe,
                style: u.dontSetMe,
                transform: u.dontSetMe
            }), w(j, "defaultProps", {
                allowAnyClick: !1,
                cancel: null,
                disabled: !1,
                enableUserSelectHack: !0,
                offsetParent: null,
                handle: null,
                grid: null,
                transform: null,
                onStart: function() {},
                onDrag: function() {},
                onStop: function() {},
                onMouseDown: function() {},
                scale: 1
            })
        },
        "0qUY": (t, e, r) => {
            "use strict";
            var n = r("X9y0"),
                o = n.default,
                a = n.DraggableCore;
            t.exports = o, t.exports.default = o, t.exports.DraggableCore = a
        },
        Ptj7: (t, e, r) => {
            "use strict";

            function n(t) {
                return n = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, n(t)
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.matchesSelector = f, e.matchesSelectorAndParentsTo = function(t, e, r) {
                var n = t;
                do {
                    if (f(n, e)) return !0;
                    if (n === r) return !1;
                    n = n.parentNode
                } while (n);
                return !1
            }, e.addEvent = function(t, e, r, n) {
                if (!t) return;
                var o = u({
                    capture: !0
                }, n);
                t.addEventListener ? t.addEventListener(e, r, o) : t.attachEvent ? t.attachEvent("on" + e, r) : t["on" + e] = r
            }, e.removeEvent = function(t, e, r, n) {
                if (!t) return;
                var o = u({
                    capture: !0
                }, n);
                t.removeEventListener ? t.removeEventListener(e, r, o) : t.detachEvent ? t.detachEvent("on" + e, r) : t["on" + e] = null
            }, e.outerHeight = function(t) {
                var e = t.clientHeight,
                    r = t.ownerDocument.defaultView.getComputedStyle(t);
                return e += (0, o.int)(r.borderTopWidth), e += (0, o.int)(r.borderBottomWidth)
            }, e.outerWidth = function(t) {
                var e = t.clientWidth,
                    r = t.ownerDocument.defaultView.getComputedStyle(t);
                return e += (0, o.int)(r.borderLeftWidth), e += (0, o.int)(r.borderRightWidth)
            }, e.innerHeight = function(t) {
                var e = t.clientHeight,
                    r = t.ownerDocument.defaultView.getComputedStyle(t);
                return e -= (0, o.int)(r.paddingTop), e -= (0, o.int)(r.paddingBottom)
            }, e.innerWidth = function(t) {
                var e = t.clientWidth,
                    r = t.ownerDocument.defaultView.getComputedStyle(t);
                return e -= (0, o.int)(r.paddingLeft), e -= (0, o.int)(r.paddingRight)
            }, e.offsetXYFromParent = function(t, e, r) {
                var n = e === e.ownerDocument.body ? {
                        left: 0,
                        top: 0
                    } : e.getBoundingClientRect(),
                    o = (t.clientX + e.scrollLeft - n.left) / r,
                    a = (t.clientY + e.scrollTop - n.top) / r;
                return {
                    x: o,
                    y: a
                }
            }, e.createCSSTransform = function(t, e) {
                var r = p(t, e, "px");
                return l({}, (0, a.browserPrefixToKey)("transform", a.default), r)
            }, e.createSVGTransform = function(t, e) {
                return p(t, e, "")
            }, e.getTranslation = p, e.getTouch = function(t, e) {
                return t.targetTouches && (0, o.findInArray)(t.targetTouches, (function(t) {
                    return e === t.identifier
                })) || t.changedTouches && (0, o.findInArray)(t.changedTouches, (function(t) {
                    return e === t.identifier
                }))
            }, e.getTouchIdentifier = function(t) {
                if (t.targetTouches && t.targetTouches[0]) return t.targetTouches[0].identifier;
                if (t.changedTouches && t.changedTouches[0]) return t.changedTouches[0].identifier
            }, e.addUserSelectStyles = function(t) {
                if (!t) return;
                var e = t.getElementById("react-draggable-style-el");
                e || ((e = t.createElement("style")).type = "text/css", e.id = "react-draggable-style-el", e.innerHTML = ".react-draggable-transparent-selection *::-moz-selection {all: inherit;}\n", e.innerHTML += ".react-draggable-transparent-selection *::selection {all: inherit;}\n", t.getElementsByTagName("head")[0].appendChild(e));
                t.body && d(t.body, "react-draggable-transparent-selection")
            }, e.removeUserSelectStyles = function(t) {
                if (!t) return;
                try {
                    if (t.body && h(t.body, "react-draggable-transparent-selection"), t.selection) t.selection.empty();
                    else {
                        var e = (t.defaultView || window).getSelection();
                        e && "Caret" !== e.type && e.removeAllRanges()
                    }
                } catch (r) {}
            }, e.addClassName = d, e.removeClassName = h;
            var o = r("lwQF"),
                a = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== n(t) && "function" !== typeof t) return {
                        default: t
                    };
                    var e = i();
                    if (e && e.has(t)) return e.get(t);
                    var r = {},
                        o = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in t)
                        if (Object.prototype.hasOwnProperty.call(t, a)) {
                            var s = o ? Object.getOwnPropertyDescriptor(t, a) : null;
                            s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = t[a]
                        }
                    r.default = t, e && e.set(t, r);
                    return r
                }(r("3iAz"));

            function i() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap;
                return i = function() {
                    return t
                }, t
            }

            function s(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(r), !0).forEach((function(e) {
                        l(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function l(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var c = "";

            function f(t, e) {
                return c || (c = (0, o.findInArray)(["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"], (function(e) {
                    return (0, o.isFunction)(t[e])
                }))), !!(0, o.isFunction)(t[c]) && t[c](e)
            }

            function p(t, e, r) {
                var n = t.x,
                    o = t.y,
                    a = "translate(".concat(n).concat(r, ",").concat(o).concat(r, ")");
                if (e) {
                    var i = "".concat("string" === typeof e.x ? e.x : e.x + r),
                        s = "".concat("string" === typeof e.y ? e.y : e.y + r);
                    a = "translate(".concat(i, ", ").concat(s, ")") + a
                }
                return a
            }

            function d(t, e) {
                t.classList ? t.classList.add(e) : t.className.match(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"))) || (t.className += " ".concat(e))
            }

            function h(t, e) {
                t.classList ? t.classList.remove(e) : t.className = t.className.replace(new RegExp("(?:^|\\s)".concat(e, "(?!\\S)"), "g"), "")
            }
        },
        "3iAz": (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getPrefix = n, e.browserPrefixToKey = o, e.browserPrefixToStyle = function(t, e) {
                return e ? "-".concat(e.toLowerCase(), "-").concat(t) : t
            }, e.default = void 0;
            var r = ["Moz", "Webkit", "O", "ms"];

            function n() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "transform";
                if ("undefined" === typeof window || "undefined" === typeof window.document) return "";
                var e = window.document.documentElement.style;
                if (t in e) return "";
                for (var n = 0; n < r.length; n++)
                    if (o(t, r[n]) in e) return r[n];
                return ""
            }

            function o(t, e) {
                return e ? "".concat(e).concat(function(t) {
                    for (var e = "", r = !0, n = 0; n < t.length; n++) r ? (e += t[n].toUpperCase(), r = !1) : "-" === t[n] ? r = !0 : e += t[n];
                    return e
                }(t)) : t
            }
            var a = n();
            e.default = a
        },
        lYLv: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = function() {
                0
            }
        },
        "+yTO": (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getBoundPosition = function(t, e, r) {
                if (!t.props.bounds) return [e, r];
                var i = t.props.bounds;
                i = "string" === typeof i ? i : function(t) {
                    return {
                        left: t.left,
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom
                    }
                }(i);
                var s = a(t);
                if ("string" === typeof i) {
                    var u, l = s.ownerDocument,
                        c = l.defaultView;
                    if (!((u = "parent" === i ? s.parentNode : l.querySelector(i)) instanceof c.HTMLElement)) throw new Error('Bounds selector "' + i + '" could not find an element.');
                    var f = c.getComputedStyle(s),
                        p = c.getComputedStyle(u);
                    i = {
                        left: -s.offsetLeft + (0, n.int)(p.paddingLeft) + (0, n.int)(f.marginLeft),
                        top: -s.offsetTop + (0, n.int)(p.paddingTop) + (0, n.int)(f.marginTop),
                        right: (0, o.innerWidth)(u) - (0, o.outerWidth)(s) - s.offsetLeft + (0, n.int)(p.paddingRight) - (0, n.int)(f.marginRight),
                        bottom: (0, o.innerHeight)(u) - (0, o.outerHeight)(s) - s.offsetTop + (0, n.int)(p.paddingBottom) - (0, n.int)(f.marginBottom)
                    }
                }(0, n.isNum)(i.right) && (e = Math.min(e, i.right));
                (0, n.isNum)(i.bottom) && (r = Math.min(r, i.bottom));
                (0, n.isNum)(i.left) && (e = Math.max(e, i.left));
                (0, n.isNum)(i.top) && (r = Math.max(r, i.top));
                return [e, r]
            }, e.snapToGrid = function(t, e, r) {
                var n = Math.round(e / t[0]) * t[0],
                    o = Math.round(r / t[1]) * t[1];
                return [n, o]
            }, e.canDragX = function(t) {
                return "both" === t.props.axis || "x" === t.props.axis
            }, e.canDragY = function(t) {
                return "both" === t.props.axis || "y" === t.props.axis
            }, e.getControlPosition = function(t, e, r) {
                var n = "number" === typeof e ? (0, o.getTouch)(t, e) : null;
                if ("number" === typeof e && !n) return null;
                var i = a(r),
                    s = r.props.offsetParent || i.offsetParent || i.ownerDocument.body;
                return (0, o.offsetXYFromParent)(n || t, s, r.props.scale)
            }, e.createCoreData = function(t, e, r) {
                var o = t.state,
                    i = !(0, n.isNum)(o.lastX),
                    s = a(t);
                return i ? {
                    node: s,
                    deltaX: 0,
                    deltaY: 0,
                    lastX: e,
                    lastY: r,
                    x: e,
                    y: r
                } : {
                    node: s,
                    deltaX: e - o.lastX,
                    deltaY: r - o.lastY,
                    lastX: o.lastX,
                    lastY: o.lastY,
                    x: e,
                    y: r
                }
            }, e.createDraggableData = function(t, e) {
                var r = t.props.scale;
                return {
                    node: e.node,
                    x: t.state.x + e.deltaX / r,
                    y: t.state.y + e.deltaY / r,
                    deltaX: e.deltaX / r,
                    deltaY: e.deltaY / r,
                    lastX: t.state.x,
                    lastY: t.state.y
                }
            };
            var n = r("lwQF"),
                o = r("Ptj7");

            function a(t) {
                var e = t.findDOMNode();
                if (!e) throw new Error("<DraggableCore>: Unmounted during event!");
                return e
            }
        },
        lwQF: (t, e) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.findInArray = function(t, e) {
                for (var r = 0, n = t.length; r < n; r++)
                    if (e.apply(e, [t[r], r, t])) return t[r]
            }, e.isFunction = function(t) {
                return "function" === typeof t || "[object Function]" === Object.prototype.toString.call(t)
            }, e.isNum = function(t) {
                return "number" === typeof t && !isNaN(t)
            }, e.int = function(t) {
                return parseInt(t, 10)
            }, e.dontSetMe = function(t, e, r) {
                if (t[e]) return new Error("Invalid prop ".concat(e, " passed to ").concat(r, " - do not set this, set it on the child."))
            }
        },
        GVjx: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = f(r("DTvD")),
                o = f(r("hTvQ")),
                a = f(r("1YyT")),
                i = r("0qUY"),
                s = r("5kuX"),
                u = r("uyKF"),
                l = r("0jVu"),
                c = f(r("xqbL"));

            function f(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function p(t) {
                return p = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, p(t)
            }

            function d(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? d(Object(r), !0).forEach((function(e) {
                        v(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function y(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function g(t) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, g(t)
            }

            function b(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function m(t, e) {
                return m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function v(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var w = function(t) {
                function e() {
                    var t, r;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return r = function(t, e) {
                        return !e || "object" !== p(e) && "function" !== typeof e ? b(t) : e
                    }(this, (t = g(e)).call.apply(t, [this].concat(o))), v(b(r), "state", {
                        resizing: null,
                        dragging: null,
                        className: ""
                    }), v(b(r), "currentNode", void 0), v(b(r), "onDragStart", (function(t, e) {
                        var n = e.node;
                        if (r.props.onDragStart) {
                            var o = {
                                    top: 0,
                                    left: 0
                                },
                                a = n.offsetParent;
                            if (a) {
                                var i = a.getBoundingClientRect(),
                                    s = n.getBoundingClientRect(),
                                    u = s.left / r.props.transformScale,
                                    c = i.left / r.props.transformScale,
                                    f = s.top / r.props.transformScale,
                                    p = i.top / r.props.transformScale;
                                o.left = u - c + a.scrollLeft, o.top = f - p + a.scrollTop, r.setState({
                                    dragging: o
                                });
                                var d = (0, l.calcXY)(r.getPositionParams(), o.top, o.left, r.props.w, r.props.h),
                                    h = d.x,
                                    y = d.y;
                                return r.props.onDragStart && r.props.onDragStart.call(b(r), r.props.i, h, y, {
                                    e: t,
                                    node: n,
                                    newPosition: o
                                })
                            }
                        }
                    })), v(b(r), "onDrag", (function(t, e) {
                        var n = e.node,
                            o = e.deltaX,
                            a = e.deltaY,
                            i = r.props,
                            s = i.onDrag,
                            u = i.transformScale;
                        if (s) {
                            o /= u, a /= u;
                            var c = {
                                top: 0,
                                left: 0
                            };
                            if (!r.state.dragging) throw new Error("onDrag called before onDragStart.");
                            c.left = r.state.dragging.left + o, c.top = r.state.dragging.top + a, r.setState({
                                dragging: c
                            });
                            var f = (0, l.calcXY)(r.getPositionParams(), c.top, c.left, r.props.w, r.props.h),
                                p = f.x,
                                d = f.y;
                            return s && s.call(b(r), r.props.i, p, d, {
                                e: t,
                                node: n,
                                newPosition: c
                            })
                        }
                    })), v(b(r), "onDragStop", (function(t, e) {
                        var n = e.node;
                        if (r.props.onDragStop) {
                            var o = {
                                top: 0,
                                left: 0
                            };
                            if (!r.state.dragging) throw new Error("onDragEnd called before onDragStart.");
                            o.left = r.state.dragging.left, o.top = r.state.dragging.top, r.setState({
                                dragging: null
                            });
                            var a = (0, l.calcXY)(r.getPositionParams(), o.top, o.left, r.props.w, r.props.h),
                                i = a.x,
                                s = a.y;
                            return r.props.onDragStop && r.props.onDragStop.call(b(r), r.props.i, i, s, {
                                e: t,
                                node: n,
                                newPosition: o
                            })
                        }
                    })), v(b(r), "onResizeStop", (function(t, e) {
                        r.onResizeHandler(t, e, "onResizeStop")
                    })), v(b(r), "onResizeStart", (function(t, e) {
                        r.onResizeHandler(t, e, "onResizeStart")
                    })), v(b(r), "onResize", (function(t, e) {
                        r.onResizeHandler(t, e, "onResize")
                    })), r
                }
                var r, a, f;
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && m(t, e)
                }(e, t), r = e, a = [{
                    key: "shouldComponentUpdate",
                    value: function(t, e) {
                        if (this.props.children !== t.children) return !0;
                        if (this.props.droppingPosition !== t.droppingPosition) return !0;
                        var r = (0, l.calcGridItemPosition)(this.getPositionParams(this.props), this.props.x, this.props.y, this.props.w, this.props.h, this.state),
                            n = (0, l.calcGridItemPosition)(this.getPositionParams(t), t.x, t.y, t.w, t.h, e);
                        return !(0, u.fastPositionEqual)(r, n) || this.props.useCSSTransforms !== t.useCSSTransforms
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.moveDroppingItem({})
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t) {
                        this.moveDroppingItem(t)
                    }
                }, {
                    key: "moveDroppingItem",
                    value: function(t) {
                        var e = this.props.droppingPosition;
                        if (e) {
                            var r = t.droppingPosition || {
                                    left: 0,
                                    top: 0
                                },
                                n = this.state.dragging;
                            this.currentNode || (this.currentNode = o.default.findDOMNode(this));
                            var a = n && e.left !== r.left || e.top !== r.top;
                            if (n) {
                                if (a) {
                                    var i = e.left - n.left,
                                        s = e.top - n.top;
                                    this.onDrag(e.e, {
                                        node: this.currentNode,
                                        deltaX: i,
                                        deltaY: s
                                    })
                                }
                            } else this.onDragStart(e.e, {
                                node: this.currentNode,
                                deltaX: e.left,
                                deltaY: e.top
                            })
                        }
                    }
                }, {
                    key: "getPositionParams",
                    value: function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : this.props;
                        return {
                            cols: t.cols,
                            containerPadding: t.containerPadding,
                            containerWidth: t.containerWidth,
                            margin: t.margin,
                            maxRows: t.maxRows,
                            rowHeight: t.rowHeight
                        }
                    }
                }, {
                    key: "createStyle",
                    value: function(t) {
                        var e, r = this.props,
                            n = r.usePercentages,
                            o = r.containerWidth;
                        return r.useCSSTransforms ? e = (0, u.setTransform)(t) : (e = (0, u.setTopLeft)(t), n && (e.left = (0, u.perc)(t.left / o), e.width = (0, u.perc)(t.width / o))), e
                    }
                }, {
                    key: "mixinDraggable",
                    value: function(t, e) {
                        return n.default.createElement(i.DraggableCore, {
                            disabled: !e,
                            onStart: this.onDragStart,
                            onDrag: this.onDrag,
                            onStop: this.onDragStop,
                            handle: this.props.handle,
                            cancel: ".react-resizable-handle" + (this.props.cancel ? "," + this.props.cancel : ""),
                            scale: this.props.transformScale
                        }, t)
                    }
                }, {
                    key: "mixinResizable",
                    value: function(t, e, r) {
                        var o = this.props,
                            a = o.cols,
                            i = o.x,
                            u = o.minW,
                            c = o.minH,
                            f = o.maxW,
                            p = o.maxH,
                            d = o.transformScale,
                            h = this.getPositionParams(),
                            y = (0, l.calcGridItemPosition)(h, 0, 0, a - i, 0).width,
                            g = (0, l.calcGridItemPosition)(h, 0, 0, u, c),
                            b = (0, l.calcGridItemPosition)(h, 0, 0, f, p),
                            m = [g.width, g.height],
                            v = [Math.min(b.width, y), Math.min(b.height, 1 / 0)];
                        return n.default.createElement(s.Resizable, {
                            draggableOpts: {
                                disabled: !r
                            },
                            className: r ? void 0 : "react-resizable-hide",
                            width: e.width,
                            height: e.height,
                            minConstraints: m,
                            maxConstraints: v,
                            onResizeStop: this.onResizeStop,
                            onResizeStart: this.onResizeStart,
                            onResize: this.onResize,
                            transformScale: d
                        }, t)
                    }
                }, {
                    key: "onResizeHandler",
                    value: function(t, e, r) {
                        var n = e.node,
                            o = e.size,
                            a = this.props[r];
                        if (a) {
                            var i = this.props,
                                s = i.cols,
                                u = i.x,
                                c = i.y,
                                f = i.i,
                                p = i.maxW,
                                d = i.minW,
                                h = i.maxH,
                                y = i.minH,
                                g = (0, l.calcWH)(this.getPositionParams(), o.width, o.height, u, c),
                                b = g.w,
                                m = g.h;
                            b = Math.min(b, s - u), b = Math.max(b, 1), b = Math.max(Math.min(b, p), d), m = Math.max(Math.min(m, h), y), this.setState({
                                resizing: "onResizeStop" === r ? null : o
                            }), a.call(this, f, b, m, {
                                e: t,
                                node: n,
                                size: o
                            })
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.x,
                            r = t.y,
                            o = t.w,
                            a = t.h,
                            i = t.isDraggable,
                            s = t.isResizable,
                            u = t.droppingPosition,
                            f = t.useCSSTransforms,
                            p = (0, l.calcGridItemPosition)(this.getPositionParams(), e, r, o, a, this.state),
                            d = n.default.Children.only(this.props.children),
                            y = n.default.cloneElement(d, {
                                className: (0, c.default)("react-grid-item", d.props.className, this.props.className, {
                                    static: this.props.static,
                                    resizing: Boolean(this.state.resizing),
                                    "react-draggable": i,
                                    "react-draggable-dragging": Boolean(this.state.dragging),
                                    dropping: Boolean(u),
                                    cssTransforms: f
                                }),
                                style: h({}, this.props.style, {}, d.props.style, {}, this.createStyle(p))
                            });
                        return y = this.mixinResizable(y, p, s), y = this.mixinDraggable(y, i)
                    }
                }], a && y(r.prototype, a), f && y(r, f), e
            }(n.default.Component);
            e.default = w, v(w, "propTypes", {
                children: a.default.element,
                cols: a.default.number.isRequired,
                containerWidth: a.default.number.isRequired,
                rowHeight: a.default.number.isRequired,
                margin: a.default.array.isRequired,
                maxRows: a.default.number.isRequired,
                containerPadding: a.default.array.isRequired,
                x: a.default.number.isRequired,
                y: a.default.number.isRequired,
                w: a.default.number.isRequired,
                h: a.default.number.isRequired,
                minW: function(t, e) {
                    var r = t[e];
                    return "number" !== typeof r ? new Error("minWidth not Number") : r > t.w || r > t.maxW ? new Error("minWidth larger than item width/maxWidth") : void 0
                },
                maxW: function(t, e) {
                    var r = t[e];
                    return "number" !== typeof r ? new Error("maxWidth not Number") : r < t.w || r < t.minW ? new Error("maxWidth smaller than item width/minWidth") : void 0
                },
                minH: function(t, e) {
                    var r = t[e];
                    return "number" !== typeof r ? new Error("minHeight not Number") : r > t.h || r > t.maxH ? new Error("minHeight larger than item height/maxHeight") : void 0
                },
                maxH: function(t, e) {
                    var r = t[e];
                    return "number" !== typeof r ? new Error("maxHeight not Number") : r < t.h || r < t.minH ? new Error("maxHeight smaller than item height/minHeight") : void 0
                },
                i: a.default.string.isRequired,
                onDragStop: a.default.func,
                onDragStart: a.default.func,
                onDrag: a.default.func,
                onResizeStop: a.default.func,
                onResizeStart: a.default.func,
                onResize: a.default.func,
                isDraggable: a.default.bool.isRequired,
                isResizable: a.default.bool.isRequired,
                static: a.default.bool,
                useCSSTransforms: a.default.bool.isRequired,
                transformScale: a.default.number,
                className: a.default.string,
                handle: a.default.string,
                cancel: a.default.string,
                droppingPosition: a.default.shape({
                    e: a.default.object.isRequired,
                    left: a.default.number.isRequired,
                    top: a.default.number.isRequired
                })
            }), v(w, "defaultProps", {
                className: "",
                cancel: "",
                handle: "",
                minH: 1,
                minW: 1,
                maxH: 1 / 0,
                maxW: 1 / 0,
                transformScale: 1
            })
        },
        G1OQ: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = c(r("DTvD")),
                o = c(r("Bfcd")),
                a = c(r("xqbL")),
                i = r("uyKF"),
                s = r("0jVu"),
                u = c(r("GVjx")),
                l = c(r("GE/Y"));

            function c(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function f(t) {
                return f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, f(t)
            }

            function p(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(r), !0).forEach((function(e) {
                        v(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : p(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function h(t) {
                return function(t) {
                    if (Array.isArray(t)) {
                        for (var e = 0, r = new Array(t.length); e < t.length; e++) r[e] = t[e];
                        return r
                    }
                }(t) || function(t) {
                    if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t)
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance")
                }()
            }

            function y(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function g(t) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, g(t)
            }

            function b(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function m(t, e) {
                return m = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function v(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var w = "react-grid-layout",
                O = !1;
            try {
                O = /firefox/i.test(navigator.userAgent)
            } catch (D) {}
            var S = function(t) {
                function e(t, r) {
                    var o;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), o = function(t, e) {
                        return !e || "object" !== f(e) && "function" !== typeof e ? b(t) : e
                    }(this, g(e).call(this, t, r)), v(b(o), "state", {
                        activeDrag: null,
                        layout: (0, i.synchronizeLayoutWithChildren)(o.props.layout, o.props.children, o.props.cols, (0, i.compactType)(o.props)),
                        mounted: !1,
                        oldDragItem: null,
                        oldLayout: null,
                        oldResizeItem: null,
                        droppingDOMNode: null,
                        children: []
                    }), v(b(o), "dragEnterCounter", 0), v(b(o), "onDragOver", (function(t) {
                        if (O && -1 === t.nativeEvent.target.className.indexOf(w)) return !1;
                        var e = o.props,
                            r = e.droppingItem,
                            a = e.margin,
                            i = e.cols,
                            u = e.rowHeight,
                            l = e.maxRows,
                            c = e.width,
                            f = e.containerPadding,
                            p = o.state.layout,
                            y = t.nativeEvent,
                            g = y.layerX,
                            b = y.layerY,
                            m = {
                                left: g,
                                top: b,
                                e: t
                            };
                        if (o.state.droppingDOMNode) {
                            if (o.state.droppingPosition) {
                                var v = o.state.droppingPosition,
                                    S = v.left,
                                    D = v.top;
                                (S != g || D != b) && o.setState({
                                    droppingPosition: m
                                })
                            }
                        } else {
                            var j = {
                                    cols: i,
                                    margin: a,
                                    maxRows: l,
                                    rowHeight: u,
                                    containerWidth: c,
                                    containerPadding: f || a
                                },
                                P = (0, s.calcXY)(j, b, g, r.w, r.h);
                            o.setState({
                                droppingDOMNode: n.default.createElement("div", {
                                    key: r.i
                                }),
                                droppingPosition: m,
                                layout: [].concat(h(p), [d({}, r, {
                                    x: P.x,
                                    y: P.y,
                                    static: !1,
                                    isDraggable: !0
                                })])
                            })
                        }
                        t.stopPropagation(), t.preventDefault()
                    })), v(b(o), "removeDroppingPlaceholder", (function() {
                        var t = o.props,
                            e = t.droppingItem,
                            r = t.cols,
                            n = o.state.layout,
                            a = (0, i.compact)(n.filter((function(t) {
                                return t.i !== e.i
                            })), (0, i.compactType)(o.props), r);
                        o.setState({
                            layout: a,
                            droppingDOMNode: null,
                            activeDrag: null,
                            droppingPosition: void 0
                        })
                    })), v(b(o), "onDragLeave", (function() {
                        o.dragEnterCounter--, 0 === o.dragEnterCounter && o.removeDroppingPlaceholder()
                    })), v(b(o), "onDragEnter", (function() {
                        o.dragEnterCounter++
                    })), v(b(o), "onDrop", (function(t) {
                        var e = o.props.droppingItem,
                            r = o.state.layout.find((function(t) {
                                return t.i === e.i
                            })) || {},
                            n = r.x,
                            a = r.y,
                            i = r.w,
                            s = r.h;
                        o.dragEnterCounter = 0, o.removeDroppingPlaceholder(), o.props.onDrop({
                            x: n,
                            y: a,
                            w: i,
                            h: s,
                            e: t
                        })
                    })), (0, i.autoBindHandlers)(b(o), ["onDragStart", "onDrag", "onDragStop", "onResizeStart", "onResize", "onResizeStop"]), o
                }
                var r, l, c;
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && m(t, e)
                }(e, t), r = e, c = [{
                    key: "getDerivedStateFromProps",
                    value: function(t, e) {
                        var r;
                        return e.activeDrag ? null : ((0, o.default)(t.layout, e.propsLayout) && t.compactType === e.compactType ? (0, i.childrenEqual)(t.children, e.children) || (r = e.layout) : r = t.layout, r ? {
                            layout: (0, i.synchronizeLayoutWithChildren)(r, t.children, t.cols, (0, i.compactType)(t)),
                            compactType: t.compactType,
                            children: t.children,
                            propsLayout: t.layout
                        } : null)
                    }
                }], (l = [{
                    key: "componentDidMount",
                    value: function() {
                        this.setState({
                            mounted: !0
                        }), this.onLayoutMaybeChanged(this.state.layout, this.props.layout)
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function(t, e) {
                        return this.props.children !== t.children || !(0, i.fastRGLPropsEqual)(this.props, t, o.default) || this.state.activeDrag !== e.activeDrag || this.state.droppingPosition !== e.droppingPosition
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t, e) {
                        if (!this.state.activeDrag) {
                            var r = this.state.layout,
                                n = e.layout;
                            this.onLayoutMaybeChanged(r, n)
                        }
                    }
                }, {
                    key: "containerHeight",
                    value: function() {
                        if (this.props.autoSize) {
                            var t = (0, i.bottom)(this.state.layout),
                                e = this.props.containerPadding ? this.props.containerPadding[1] : this.props.margin[1];
                            return t * this.props.rowHeight + (t - 1) * this.props.margin[1] + 2 * e + "px"
                        }
                    }
                }, {
                    key: "onDragStart",
                    value: function(t, e, r, n) {
                        var o = n.e,
                            a = n.node,
                            s = this.state.layout,
                            u = (0, i.getLayoutItem)(s, t);
                        if (u) return this.setState({
                            oldDragItem: (0, i.cloneLayoutItem)(u),
                            oldLayout: this.state.layout
                        }), this.props.onDragStart(s, u, u, null, o, a)
                    }
                }, {
                    key: "onDrag",
                    value: function(t, e, r, n) {
                        var o = n.e,
                            a = n.node,
                            s = this.state.oldDragItem,
                            u = this.state.layout,
                            l = this.props.cols,
                            c = (0, i.getLayoutItem)(u, t);
                        if (c) {
                            var f = {
                                w: c.w,
                                h: c.h,
                                x: c.x,
                                y: c.y,
                                placeholder: !0,
                                i: t
                            };
                            u = (0, i.moveElement)(u, c, e, r, !0, this.props.preventCollision, (0, i.compactType)(this.props), l), this.props.onDrag(u, s, c, f, o, a), this.setState({
                                layout: (0, i.compact)(u, (0, i.compactType)(this.props), l),
                                activeDrag: f
                            })
                        }
                    }
                }, {
                    key: "onDragStop",
                    value: function(t, e, r, n) {
                        var o = n.e,
                            a = n.node;
                        if (this.state.activeDrag) {
                            var s = this.state.oldDragItem,
                                u = this.state.layout,
                                l = this.props,
                                c = l.cols,
                                f = l.preventCollision,
                                p = (0, i.getLayoutItem)(u, t);
                            if (p) {
                                u = (0, i.moveElement)(u, p, e, r, !0, f, (0, i.compactType)(this.props), c), this.props.onDragStop(u, s, p, null, o, a);
                                var d = (0, i.compact)(u, (0, i.compactType)(this.props), c),
                                    h = this.state.oldLayout;
                                this.setState({
                                    activeDrag: null,
                                    layout: d,
                                    oldDragItem: null,
                                    oldLayout: null
                                }), this.onLayoutMaybeChanged(d, h)
                            }
                        }
                    }
                }, {
                    key: "onLayoutMaybeChanged",
                    value: function(t, e) {
                        e || (e = this.state.layout), (0, o.default)(e, t) || this.props.onLayoutChange(t)
                    }
                }, {
                    key: "onResizeStart",
                    value: function(t, e, r, n) {
                        var o = n.e,
                            a = n.node,
                            s = this.state.layout,
                            u = (0, i.getLayoutItem)(s, t);
                        u && (this.setState({
                            oldResizeItem: (0, i.cloneLayoutItem)(u),
                            oldLayout: this.state.layout
                        }), this.props.onResizeStart(s, u, u, null, o, a))
                    }
                }, {
                    key: "onResize",
                    value: function(t, e, r, n) {
                        var o = n.e,
                            a = n.node,
                            s = this.state,
                            u = s.layout,
                            l = s.oldResizeItem,
                            c = this.props,
                            f = c.cols,
                            p = c.preventCollision,
                            h = (0, i.getLayoutItem)(u, t);
                        if (h) {
                            var y;
                            if (p) {
                                var g = (0, i.getAllCollisions)(u, d({}, h, {
                                    w: e,
                                    h: r
                                })).filter((function(t) {
                                    return t.i !== h.i
                                }));
                                if (y = g.length > 0) {
                                    var b = 1 / 0,
                                        m = 1 / 0;
                                    g.forEach((function(t) {
                                        t.x > h.x && (b = Math.min(b, t.x)), t.y > h.y && (m = Math.min(m, t.y))
                                    })), Number.isFinite(b) && (h.w = b - h.x), Number.isFinite(m) && (h.h = m - h.y)
                                }
                            }
                            y || (h.w = e, h.h = r);
                            var v = {
                                w: h.w,
                                h: h.h,
                                x: h.x,
                                y: h.y,
                                static: !0,
                                i: t
                            };
                            this.props.onResize(u, l, h, v, o, a), this.setState({
                                layout: (0, i.compact)(u, (0, i.compactType)(this.props), f),
                                activeDrag: v
                            })
                        }
                    }
                }, {
                    key: "onResizeStop",
                    value: function(t, e, r, n) {
                        var o = n.e,
                            a = n.node,
                            s = this.state,
                            u = s.layout,
                            l = s.oldResizeItem,
                            c = this.props.cols,
                            f = (0, i.getLayoutItem)(u, t);
                        this.props.onResizeStop(u, l, f, null, o, a);
                        var p = (0, i.compact)(u, (0, i.compactType)(this.props), c),
                            d = this.state.oldLayout;
                        this.setState({
                            activeDrag: null,
                            layout: p,
                            oldResizeItem: null,
                            oldLayout: null
                        }), this.onLayoutMaybeChanged(p, d)
                    }
                }, {
                    key: "placeholder",
                    value: function() {
                        var t = this.state.activeDrag;
                        if (!t) return null;
                        var e = this.props,
                            r = e.width,
                            o = e.cols,
                            a = e.margin,
                            i = e.containerPadding,
                            s = e.rowHeight,
                            l = e.maxRows,
                            c = e.useCSSTransforms,
                            f = e.transformScale;
                        return n.default.createElement(u.default, {
                            w: t.w,
                            h: t.h,
                            x: t.x,
                            y: t.y,
                            i: t.i,
                            className: "react-grid-placeholder",
                            containerWidth: r,
                            cols: o,
                            margin: a,
                            containerPadding: i || a,
                            maxRows: l,
                            rowHeight: s,
                            isDraggable: !1,
                            isResizable: !1,
                            useCSSTransforms: c,
                            transformScale: f
                        }, n.default.createElement("div", null))
                    }
                }, {
                    key: "processGridItem",
                    value: function(t, e) {
                        if (t && t.key) {
                            var r = (0, i.getLayoutItem)(this.state.layout, String(t.key));
                            if (!r) return null;
                            var o = this.props,
                                a = o.width,
                                s = o.cols,
                                l = o.margin,
                                c = o.containerPadding,
                                f = o.rowHeight,
                                p = o.maxRows,
                                d = o.isDraggable,
                                h = o.isResizable,
                                y = o.useCSSTransforms,
                                g = o.transformScale,
                                b = o.draggableCancel,
                                m = o.draggableHandle,
                                v = this.state,
                                w = v.mounted,
                                O = v.droppingPosition,
                                S = "boolean" === typeof r.isDraggable ? r.isDraggable : !r.static && d,
                                D = "boolean" === typeof r.isResizable ? r.isResizable : !r.static && h;
                            return n.default.createElement(u.default, {
                                containerWidth: a,
                                cols: s,
                                margin: l,
                                containerPadding: c || l,
                                maxRows: p,
                                rowHeight: f,
                                cancel: b,
                                handle: m,
                                onDragStop: this.onDragStop,
                                onDragStart: this.onDragStart,
                                onDrag: this.onDrag,
                                onResizeStart: this.onResizeStart,
                                onResize: this.onResize,
                                onResizeStop: this.onResizeStop,
                                isDraggable: S,
                                isResizable: D,
                                useCSSTransforms: y && w,
                                usePercentages: !w,
                                transformScale: g,
                                w: r.w,
                                h: r.h,
                                x: r.x,
                                y: r.y,
                                i: r.i,
                                minH: r.minH,
                                minW: r.minW,
                                maxH: r.maxH,
                                maxW: r.maxW,
                                static: r.static,
                                droppingPosition: e ? O : void 0
                            }, t)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            r = e.className,
                            o = e.style,
                            s = e.isDroppable,
                            u = (0, a.default)(w, r),
                            l = d({
                                height: this.containerHeight()
                            }, o);
                        return n.default.createElement("div", {
                            className: u,
                            style: l,
                            onDrop: s ? this.onDrop : i.noop,
                            onDragLeave: s ? this.onDragLeave : i.noop,
                            onDragEnter: s ? this.onDragEnter : i.noop,
                            onDragOver: s ? this.onDragOver : i.noop
                        }, n.default.Children.map(this.props.children, (function(e) {
                            return t.processGridItem(e)
                        })), s && this.state.droppingDOMNode && this.processGridItem(this.state.droppingDOMNode, !0), this.placeholder())
                    }
                }]) && y(r.prototype, l), c && y(r, c), e
            }(n.default.Component);
            e.default = S, v(S, "displayName", "ReactGridLayout"), v(S, "propTypes", l.default), v(S, "defaultProps", {
                autoSize: !0,
                cols: 12,
                className: "",
                style: {},
                draggableHandle: "",
                draggableCancel: "",
                containerPadding: null,
                rowHeight: 150,
                maxRows: 1 / 0,
                layout: [],
                margin: [10, 10],
                isDraggable: !0,
                isResizable: !0,
                isDroppable: !1,
                useCSSTransforms: !0,
                transformScale: 1,
                verticalCompact: !0,
                compactType: "vertical",
                preventCollision: !1,
                droppingItem: {
                    i: "__dropping-elem__",
                    h: 1,
                    w: 1
                },
                onLayoutChange: i.noop,
                onDragStart: i.noop,
                onDrag: i.noop,
                onDragStop: i.noop,
                onResizeStart: i.noop,
                onResize: i.noop,
                onResizeStop: i.noop,
                onDrop: i.noop
            })
        },
        "GE/Y": (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = a(r("1YyT")),
                o = a(r("DTvD"));

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }
            var i = {
                className: n.default.string,
                style: n.default.object,
                width: n.default.number,
                autoSize: n.default.bool,
                cols: n.default.number,
                draggableCancel: n.default.string,
                draggableHandle: n.default.string,
                verticalCompact: function(t) {
                    t.verticalCompact, 0
                },
                compactType: n.default.oneOf(["vertical", "horizontal"]),
                layout: function(t) {
                    var e = t.layout;
                    void 0 !== e && r("uyKF").validateLayout(e, "layout")
                },
                margin: n.default.arrayOf(n.default.number),
                containerPadding: n.default.arrayOf(n.default.number),
                rowHeight: n.default.number,
                maxRows: n.default.number,
                isDraggable: n.default.bool,
                isResizable: n.default.bool,
                preventCollision: n.default.bool,
                useCSSTransforms: n.default.bool,
                transformScale: n.default.number,
                isDroppable: n.default.bool,
                onLayoutChange: n.default.func,
                onDragStart: n.default.func,
                onDrag: n.default.func,
                onDragStop: n.default.func,
                onResizeStart: n.default.func,
                onResize: n.default.func,
                onResizeStop: n.default.func,
                onDrop: n.default.func,
                droppingItem: n.default.shape({
                    i: n.default.string.isRequired,
                    w: n.default.number.isRequired,
                    h: n.default.number.isRequired
                }),
                children: function(t, e) {
                    var r = t[e],
                        n = {};
                    o.default.Children.forEach(r, (function(t) {
                        if (n[t.key]) throw new Error('Duplicate child key "' + t.key + '" found! This will cause problems in ReactGridLayout.');
                        n[t.key] = !0
                    }))
                }
            };
            e.default = i
        },
        "1EOI": (t, e, r) => {
            "use strict";
            e.default = void 0;
            var n = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== f(t) && "function" !== typeof t) return {
                        default: t
                    };
                    var e = c();
                    if (e && e.has(t)) return e.get(t);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(t, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = t[o]
                        }
                    r.default = t, e && e.set(t, r);
                    return r
                }(r("DTvD")),
                o = l(r("1YyT")),
                a = l(r("Bfcd")),
                i = r("uyKF"),
                s = r("hWwo"),
                u = l(r("G1OQ"));

            function l(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function c() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap;
                return c = function() {
                    return t
                }, t
            }

            function f(t) {
                return f = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, f(t)
            }

            function p() {
                return p = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, p.apply(this, arguments)
            }

            function d(t, e) {
                if (null == t) return {};
                var r, n, o = function(t, e) {
                    if (null == t) return {};
                    var r, n, o = {},
                        a = Object.keys(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                    return o
                }(t, e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(t);
                    for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (o[r] = t[r])
                }
                return o
            }

            function h(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function y(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? h(Object(r), !0).forEach((function(e) {
                        w(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function g(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function b(t) {
                return b = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, b(t)
            }

            function m(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function v(t, e) {
                return v = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, v(t, e)
            }

            function w(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var O = function(t) {
                return Object.prototype.toString.call(t)
            };

            function S(t, e) {
                return Array.isArray(t) ? t : t[e]
            }
            var D = function(t) {
                function e() {
                    var t, r;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    for (var n = arguments.length, o = new Array(n), a = 0; a < n; a++) o[a] = arguments[a];
                    return r = function(t, e) {
                        return !e || "object" !== f(e) && "function" !== typeof e ? m(t) : e
                    }(this, (t = b(e)).call.apply(t, [this].concat(o))), w(m(r), "state", r.generateInitialState()), w(m(r), "onLayoutChange", (function(t) {
                        r.props.onLayoutChange(t, y({}, r.props.layouts, w({}, r.state.breakpoint, t)))
                    })), r
                }
                var r, o, l;
                return function(t, e) {
                    if ("function" !== typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && v(t, e)
                }(e, t), r = e, l = [{
                    key: "getDerivedStateFromProps",
                    value: function(t, e) {
                        if (!(0, a.default)(t.layouts, e.layouts)) {
                            var r = e.breakpoint,
                                n = e.cols;
                            return {
                                layout: (0, s.findOrGenerateResponsiveLayout)(t.layouts, t.breakpoints, r, r, n, t.compactType),
                                layouts: t.layouts
                            }
                        }
                        return null
                    }
                }], (o = [{
                    key: "generateInitialState",
                    value: function() {
                        var t = this.props,
                            e = t.width,
                            r = t.breakpoints,
                            n = t.layouts,
                            o = t.cols,
                            a = (0, s.getBreakpointFromWidth)(r, e),
                            i = (0, s.getColsFromBreakpoint)(a, o),
                            u = !1 === this.props.verticalCompact ? null : this.props.compactType;
                        return {
                            layout: (0, s.findOrGenerateResponsiveLayout)(n, r, a, a, i, u),
                            breakpoint: a,
                            cols: i
                        }
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t) {
                        this.props.width == t.width && this.props.breakpoint === t.breakpoint && (0, a.default)(this.props.breakpoints, t.breakpoints) && (0, a.default)(this.props.cols, t.cols) || this.onWidthChange(t)
                    }
                }, {
                    key: "onWidthChange",
                    value: function(t) {
                        var e = this.props,
                            r = e.breakpoints,
                            n = e.cols,
                            o = e.layouts,
                            a = e.compactType,
                            u = this.props.breakpoint || (0, s.getBreakpointFromWidth)(this.props.breakpoints, this.props.width),
                            l = this.state.breakpoint,
                            c = (0, s.getColsFromBreakpoint)(u, n),
                            f = y({}, o);
                        if (l !== u || t.breakpoints !== r || t.cols !== n) {
                            l in f || (f[l] = (0, i.cloneLayout)(this.state.layout));
                            var p = (0, s.findOrGenerateResponsiveLayout)(f, r, u, l, c, a);
                            p = (0, i.synchronizeLayoutWithChildren)(p, this.props.children, c, a), f[u] = p, this.props.onLayoutChange(p, f), this.props.onBreakpointChange(u, c), this.setState({
                                breakpoint: u,
                                layout: p,
                                cols: c
                            })
                        }
                        var d = S(this.props.margin, u),
                            h = S(this.props.containerPadding, u);
                        this.props.onWidthChange(this.props.width, d, c, h)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = (t.breakpoint, t.breakpoints, t.cols, t.layouts, t.margin),
                            r = t.containerPadding,
                            o = (t.onBreakpointChange, t.onLayoutChange, t.onWidthChange, d(t, ["breakpoint", "breakpoints", "cols", "layouts", "margin", "containerPadding", "onBreakpointChange", "onLayoutChange", "onWidthChange"]));
                        return n.createElement(u.default, p({}, o, {
                            margin: S(e, this.state.breakpoint),
                            containerPadding: S(r, this.state.breakpoint),
                            onLayoutChange: this.onLayoutChange,
                            layout: this.state.layout,
                            cols: this.state.cols
                        }))
                    }
                }]) && g(r.prototype, o), l && g(r, l), e
            }(n.Component);
            e.default = D, w(D, "propTypes", {
                breakpoint: o.default.string,
                breakpoints: o.default.object,
                cols: o.default.object,
                margin: o.default.oneOfType([o.default.array, o.default.object]),
                containerPadding: o.default.oneOfType([o.default.array, o.default.object]),
                layouts: function(t, e) {
                    if ("[object Object]" !== O(t[e])) throw new Error("Layout property must be an object. Received: " + O(t[e]));
                    Object.keys(t[e]).forEach((function(e) {
                        if (!(e in t.breakpoints)) throw new Error("Each key in layouts must align with a key in breakpoints.");
                        (0, i.validateLayout)(t.layouts[e], "layouts." + e)
                    }))
                },
                width: o.default.number.isRequired,
                onBreakpointChange: o.default.func,
                onLayoutChange: o.default.func,
                onWidthChange: o.default.func
            }), w(D, "defaultProps", {
                breakpoints: {
                    lg: 1200,
                    md: 996,
                    sm: 768,
                    xs: 480,
                    xxs: 0
                },
                cols: {
                    lg: 12,
                    md: 10,
                    sm: 6,
                    xs: 4,
                    xxs: 2
                },
                layouts: {},
                margin: [10, 10],
                containerPadding: {
                    lg: [0, 0],
                    md: [0, 0],
                    sm: [0, 0],
                    xs: [0, 0],
                    xxs: [0, 0]
                },
                onBreakpointChange: i.noop,
                onLayoutChange: i.noop,
                onWidthChange: i.noop
            })
        },
        "0jVu": (t, e) => {
            "use strict";

            function r(t) {
                var e = t.margin,
                    r = t.containerPadding,
                    n = t.containerWidth,
                    o = t.cols;
                return (n - e[0] * (o - 1) - 2 * r[0]) / o
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.calcGridColWidth = r, e.calcGridItemPosition = function(t, e, n, o, a, i) {
                var s = t.margin,
                    u = t.containerPadding,
                    l = t.rowHeight,
                    c = r(t),
                    f = {};
                i && i.resizing ? (f.width = Math.round(i.resizing.width), f.height = Math.round(i.resizing.height)) : (f.width = o === 1 / 0 ? o : Math.round(c * o + Math.max(0, o - 1) * s[0]), f.height = a === 1 / 0 ? a : Math.round(l * a + Math.max(0, a - 1) * s[1]));
                i && i.dragging ? (f.top = Math.round(i.dragging.top), f.left = Math.round(i.dragging.left)) : (f.top = Math.round((l + s[1]) * n + u[1]), f.left = Math.round((c + s[0]) * e + u[0]));
                return f
            }, e.calcXY = function(t, e, n, o, a) {
                var i = t.margin,
                    s = t.cols,
                    u = t.rowHeight,
                    l = t.maxRows,
                    c = r(t),
                    f = Math.round((n - i[0]) / (c + i[0])),
                    p = Math.round((e - i[1]) / (u + i[1]));
                return f = Math.max(Math.min(f, s - o), 0), p = Math.max(Math.min(p, l - a), 0), {
                    x: f,
                    y: p
                }
            }, e.calcWH = function(t, e, n, o, a) {
                var i = t.margin,
                    s = t.maxRows,
                    u = t.cols,
                    l = t.rowHeight,
                    c = r(t),
                    f = Math.round((e + i[0]) / (c + i[0])),
                    p = Math.round((n + i[1]) / (l + i[1]));
                return f = Math.max(Math.min(f, u - o), 0), p = Math.max(Math.min(p, s - a), 0), {
                    w: f,
                    h: p
                }
            }
        },
        UNQD: (t, e, r) => {
            "use strict";
            var n = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== u(t) && "function" !== typeof t) return {
                        default: t
                    };
                    var e = s();
                    if (e && e.has(t)) return e.get(t);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(t, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = t[o]
                        }
                    r.default = t, e && e.set(t, r);
                    return r
                }(r("DTvD")),
                o = i(r("1YyT")),
                a = i(r("hTvQ"));

            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function s() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap;
                return s = function() {
                    return t
                }, t
            }

            function u(t) {
                return u = "function" === typeof Symbol && "symbol" === typeof Symbol.iterator ? function(t) {
                    return typeof t
                } : function(t) {
                    return t && "function" === typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
                }, u(t)
            }

            function l() {
                return l = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, l.apply(this, arguments)
            }

            function c(t, e) {
                for (var r = 0; r < e.length; r++) {
                    var n = e[r];
                    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(t, n.key, n)
                }
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function p(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function d(t, e) {
                return d = Object.setPrototypeOf || function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function h(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
        },
        "4aYj": t => {
            t.exports = function(t, e, r) {
                return t === e || t.className === e.className && r(t.style, e.style) && t.width === e.width && t.autoSize === e.autoSize && t.cols === e.cols && t.draggableCancel === e.draggableCancel && t.draggableHandle === e.draggableHandle && r(t.verticalCompact, e.verticalCompact) && r(t.compactType, e.compactType) && r(t.layout, e.layout) && r(t.margin, e.margin) && r(t.containerPadding, e.containerPadding) && t.rowHeight === e.rowHeight && t.maxRows === e.maxRows && t.isDraggable === e.isDraggable && t.isResizable === e.isResizable && t.preventCollision === e.preventCollision && t.useCSSTransforms === e.useCSSTransforms && t.transformScale === e.transformScale && t.isDroppable === e.isDroppable && t.onLayoutChange === e.onLayoutChange && t.onDragStart === e.onDragStart && t.onDrag === e.onDrag && t.onDragStop === e.onDragStop && t.onResizeStart === e.onResizeStart && t.onResize === e.onResize && t.onResizeStop === e.onResizeStop && t.onDrop === e.onDrop && r(t.droppingItem, e.droppingItem)
            }
        },
        hWwo: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.getBreakpointFromWidth = function(t, e) {
                for (var r = o(t), n = r[0], a = 1, i = r.length; a < i; a++) {
                    var s = r[a];
                    e > t[s] && (n = s)
                }
                return n
            }, e.getColsFromBreakpoint = function(t, e) {
                if (!e[t]) throw new Error("ResponsiveReactGridLayout: `cols` entry for breakpoint " + t + " is missing!");
                return e[t]
            }, e.findOrGenerateResponsiveLayout = function(t, e, r, a, i, s) {
                if (t[r]) return (0, n.cloneLayout)(t[r]);
                for (var u = t[a], l = o(e), c = l.slice(l.indexOf(r)), f = 0, p = c.length; f < p; f++) {
                    var d = c[f];
                    if (t[d]) {
                        u = t[d];
                        break
                    }
                }
                return u = (0, n.cloneLayout)(u || []), (0, n.compact)((0, n.correctBounds)(u, {
                    cols: i
                }), s, i)
            }, e.sortBreakpoints = o;
            var n = r("uyKF");

            function o(t) {
                return Object.keys(t).sort((function(e, r) {
                    return t[e] - t[r]
                }))
            }
        },
        uyKF: (t, e, r) => {
            "use strict";
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.bottom = c, e.cloneLayout = function(t) {
                for (var e = Array(t.length), r = 0, n = t.length; r < n; r++) e[r] = f(t[r]);
                return e
            }, e.cloneLayoutItem = f, e.childrenEqual = function(t, e) {
                return (0, n.default)(o.default.Children.map(t, (function(t) {
                    return t.key
                })), o.default.Children.map(e, (function(t) {
                    return t.key
                })))
            }, e.fastPositionEqual = function(t, e) {
                return t.left === e.left && t.top === e.top && t.width === e.width && t.height === e.height
            }, e.collides = d, e.compact = h, e.compactItem = b, e.correctBounds = m, e.getLayoutItem = v, e.getFirstCollision = w, e.getAllCollisions = O, e.getStatics = S, e.moveElement = D, e.moveElementAwayFromCollision = j, e.perc = function(t) {
                return 100 * t + "%"
            }, e.setTransform = function(t) {
                var e = t.top,
                    r = t.left,
                    n = t.width,
                    o = t.height,
                    a = "translate(".concat(r, "px,").concat(e, "px)");
                return {
                    transform: a,
                    WebkitTransform: a,
                    MozTransform: a,
                    msTransform: a,
                    OTransform: a,
                    width: "".concat(n, "px"),
                    height: "".concat(o, "px"),
                    position: "absolute"
                }
            }, e.setTopLeft = function(t) {
                var e = t.top,
                    r = t.left,
                    n = t.width,
                    o = t.height;
                return {
                    top: "".concat(e, "px"),
                    left: "".concat(r, "px"),
                    width: "".concat(n, "px"),
                    height: "".concat(o, "px"),
                    position: "absolute"
                }
            }, e.sortLayoutItems = P, e.sortLayoutItemsByRowCol = x, e.sortLayoutItemsByColRow = _, e.synchronizeLayoutWithChildren = function(t, e, r, n) {
                t = t || [];
                var a = [];
                return o.default.Children.forEach(e, (function(e, r) {
                    var n = v(t, String(e.key));
                    if (n) a[r] = f(n);
                    else {
                        !u && e.props._grid && console.warn("`_grid` properties on children have been deprecated as of React 15.2. Please use `data-grid` or add your properties directly to the `layout`.");
                        var o = e.props["data-grid"] || e.props._grid;
                        o ? (u || R([o], "ReactGridLayout.children"), a[r] = f(function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var r = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? i(Object(r), !0).forEach((function(e) {
                                    s(t, e, r[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : i(Object(r)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                                }))
                            }
                            return t
                        }({}, o, {
                            i: e.key
                        }))) : a[r] = f({
                            w: 1,
                            h: 1,
                            x: 0,
                            y: c(a),
                            i: String(e.key)
                        })
                    }
                })), h(m(a, {
                    cols: r
                }), n, r)
            }, e.validateLayout = R, e.compactType = function(t) {
                var e = t || {},
                    r = e.verticalCompact,
                    n = e.compactType;
                return !1 === r ? null : n
            }, e.autoBindHandlers = function(t, e) {
                e.forEach((function(e) {
                    return t[e] = t[e].bind(t)
                }))
            }, e.noop = e.fastRGLPropsEqual = void 0;
            var n = a(r("Bfcd")),
                o = a(r("DTvD"));

            function a(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function i(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function s(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var u = !0,
                l = !1;

            function c(t) {
                for (var e, r = 0, n = 0, o = t.length; n < o; n++)(e = t[n].y + t[n].h) > r && (r = e);
                return r
            }

            function f(t) {
                return {
                    w: t.w,
                    h: t.h,
                    x: t.x,
                    y: t.y,
                    i: t.i,
                    minW: t.minW,
                    maxW: t.maxW,
                    minH: t.minH,
                    maxH: t.maxH,
                    moved: Boolean(t.moved),
                    static: Boolean(t.static),
                    isDraggable: t.isDraggable,
                    isResizable: t.isResizable
                }
            }
            var p = r("4aYj");

            function d(t, e) {
                return t.i !== e.i && (!(t.x + t.w <= e.x) && (!(t.x >= e.x + e.w) && (!(t.y + t.h <= e.y) && !(t.y >= e.y + e.h))))
            }

            function h(t, e, r) {
                for (var n = S(t), o = P(t, e), a = Array(t.length), i = 0, s = o.length; i < s; i++) {
                    var u = f(o[i]);
                    u.static || (u = b(n, u, e, r, o), n.push(u)), a[t.indexOf(o[i])] = u, u.moved = !1
                }
                return a
            }
            e.fastRGLPropsEqual = p;
            var y = {
                x: "w",
                y: "h"
            };

            function g(t, e, r, n) {
                var o = y[n];
                e[n] += 1;
                for (var a = t.map((function(t) {
                        return t.i
                    })).indexOf(e.i) + 1; a < t.length; a++) {
                    var i = t[a];
                    if (!i.static) {
                        if (i.y > e.y + e.h) break;
                        d(e, i) && g(t, i, r + e[o], n)
                    }
                }
                e[n] = r
            }

            function b(t, e, r, n, o) {
                var a, i = "horizontal" === r;
                if ("vertical" === r)
                    for (e.y = Math.min(c(t), e.y); e.y > 0 && !w(t, e);) e.y--;
                else if (i)
                    for (e.y = Math.min(c(t), e.y); e.x > 0 && !w(t, e);) e.x--;
                for (; a = w(t, e);) i ? g(o, e, a.x + a.w, "x") : g(o, e, a.y + a.h, "y"), i && e.x + e.w > n && (e.x = n - e.w, e.y++);
                return e
            }

            function m(t, e) {
                for (var r = S(t), n = 0, o = t.length; n < o; n++) {
                    var a = t[n];
                    if (a.x + a.w > e.cols && (a.x = e.cols - a.w), a.x < 0 && (a.x = 0, a.w = e.cols), a.static)
                        for (; w(r, a);) a.y++;
                    else r.push(a)
                }
                return t
            }

            function v(t, e) {
                for (var r = 0, n = t.length; r < n; r++)
                    if (t[r].i === e) return t[r]
            }

            function w(t, e) {
                for (var r = 0, n = t.length; r < n; r++)
                    if (d(t[r], e)) return t[r]
            }

            function O(t, e) {
                return t.filter((function(t) {
                    return d(t, e)
                }))
            }

            function S(t) {
                return t.filter((function(t) {
                    return t.static
                }))
            }

            function D(t, e, r, n, o, a, i, s) {
                if (e.static && !0 !== e.isDraggable) return t;
                if (e.y === n && e.x === r) return t;
                z("Moving element ".concat(e.i, " to [").concat(String(r), ",").concat(String(n), "] from [").concat(e.x, ",").concat(e.y, "]"));
                var u = e.x,
                    l = e.y;
                "number" === typeof r && (e.x = r), "number" === typeof n && (e.y = n), e.moved = !0;
                var c = P(t, i);
                ("vertical" === i && "number" === typeof n ? l >= n : "horizontal" === i && "number" === typeof r && u >= r) && (c = c.reverse());
                var f = O(c, e);
                if (a && f.length) return z("Collision prevented on ".concat(e.i, ", reverting.")), e.x = u, e.y = l, e.moved = !1, t;
                for (var p = 0, d = f.length; p < d; p++) {
                    var h = f[p];
                    z("Resolving collision between ".concat(e.i, " at [").concat(e.x, ",").concat(e.y, "] and ").concat(h.i, " at [").concat(h.x, ",").concat(h.y, "]")), h.moved || (t = h.static ? j(t, h, e, o, i, s) : j(t, e, h, o, i, s))
                }
                return t
            }

            function j(t, e, r, n, o, a) {
                var i = "horizontal" === o,
                    s = "horizontal" !== o,
                    u = e.static;
                if (n) {
                    n = !1;
                    var l = {
                        x: i ? Math.max(e.x - r.w, 0) : r.x,
                        y: s ? Math.max(e.y - r.h, 0) : r.y,
                        w: r.w,
                        h: r.h,
                        i: "-1"
                    };
                    if (!w(t, l)) return z("Doing reverse collision on ".concat(r.i, " up to [").concat(l.x, ",").concat(l.y, "].")), D(t, r, i ? l.x : void 0, s ? l.y : void 0, n, u, o, a)
                }
                return D(t, r, i ? r.x + 1 : void 0, s ? r.y + 1 : void 0, n, u, o, a)
            }

            function P(t, e) {
                return "horizontal" === e ? _(t) : x(t)
            }

            function x(t) {
                return t.slice(0).sort((function(t, e) {
                    return t.y > e.y || t.y === e.y && t.x > e.x ? 1 : t.y === e.y && t.x === e.x ? 0 : -1
                }))
            }

            function _(t) {
                return t.slice(0).sort((function(t, e) {
                    return t.x > e.x || t.x === e.x && t.y > e.y ? 1 : -1
                }))
            }

            function R(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "Layout",
                    r = ["x", "y", "w", "h"];
                if (!Array.isArray(t)) throw new Error(e + " must be an array!");
                for (var n = 0, o = t.length; n < o; n++) {
                    for (var a = t[n], i = 0; i < r.length; i++)
                        if ("number" !== typeof a[r[i]]) throw new Error("ReactGridLayout: " + e + "[" + n + "]." + r[i] + " must be a number!");
                    if (a.i && "string" !== typeof a.i) throw new Error("ReactGridLayout: " + e + "[" + n + "].i must be a string!");
                    if (void 0 !== a.static && "boolean" !== typeof a.static) throw new Error("ReactGridLayout: " + e + "[" + n + "].static must be a boolean!")
                }
            }

            function z() {
                var t;
                l && (t = console).log.apply(t, arguments)
            }
            e.noop = function() {}
        },
        Pyqi: (t, e, r) => {
            t.exports = r("G1OQ").default, r("uyKF"), t.exports.Responsive = r("1EOI").default, t.exports.Responsive.utils = r("hWwo"), r("UNQD")
        },
        yBiP: (t, e, r) => {
            "use strict";
            e.__esModule = !0, e.default = void 0;
            var n, o = (n = r("DTvD")) && n.__esModule ? n : {
                    default: n
                },
                a = r("0qUY"),
                i = r("44r5"),
                s = r("Hk78");

            function u() {
                return u = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, u.apply(this, arguments)
            }

            function l(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(r), !0).forEach((function(e) {
                        p(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function f(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function p(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var d = function(t) {
                var e, r;

                function n() {
                    for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return p(f(e = t.call.apply(t, [this].concat(n)) || this), "state", void 0), p(f(e), "lastHandleRect", null), p(f(e), "slack", null), e
                }
                r = t, (e = n).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r;
                var s = n.prototype;
                return s.componentWillUnmount = function() {
                    this.resetData()
                }, s.lockAspectRatio = function(t, e, r) {
                    return [t = (e = t / r) * r, e]
                }, s.resetData = function() {
                    this.lastHandleRect = this.slack = null
                }, s.runConstraints = function(t, e) {
                    var r = [this.props.minConstraints, this.props.maxConstraints],
                        n = r[0],
                        o = r[1];
                    if (!n && !o) return [t, e];
                    if (this.props.lockAspectRatio)
                        if (e === this.props.height) {
                            var a = this.props.width / this.props.height;
                            t = (e = t / a) * a
                        } else {
                            var i = this.props.height / this.props.width;
                            e = (t = e / i) * i
                        }
                    var s = t,
                        u = e,
                        l = this.slack || [0, 0],
                        c = l[0],
                        f = l[1];
                    return t += c, e += f, n && (t = Math.max(n[0], t), e = Math.max(n[1], e)), o && (t = Math.min(o[0], t), e = Math.min(o[1], e)), this.slack = [c + (s - t), f + (u - e)], [t, e]
                }, s.resizeHandler = function(t, e) {
                    var r = this;
                    return function(n, o) {
                        var a = o.node,
                            i = o.deltaX,
                            s = o.deltaY;
                        "onResizeStart" === t && r.resetData();
                        var u = ("both" === r.props.axis || "x" === r.props.axis) && "n" !== e && "s" !== e,
                            l = ("both" === r.props.axis || "y" === r.props.axis) && "e" !== e && "w" !== e;
                        if (u || l) {
                            var c = e[0],
                                f = e[e.length - 1],
                                p = a.getBoundingClientRect();
                            if (null != r.lastHandleRect) {
                                if ("w" === f) i += p.left - r.lastHandleRect.left;
                                if ("n" === c) s += p.top - r.lastHandleRect.top
                            }
                            r.lastHandleRect = p, "w" === f && (i = -i), "n" === c && (s = -s);
                            var d = r.props.width + (u ? i / r.props.transformScale : 0),
                                h = r.props.height + (l ? s / r.props.transformScale : 0),
                                y = r.runConstraints(d, h);
                            d = y[0], h = y[1];
                            var g = d !== r.props.width || h !== r.props.height,
                                b = "function" === typeof r.props[t] ? r.props[t] : null;
                            b && !("onResize" === t && !g) && ("function" === typeof n.persist && n.persist(), b(n, {
                                node: a,
                                size: {
                                    width: d,
                                    height: h
                                },
                                handle: e
                            })), "onResizeStop" === t && r.resetData()
                        }
                    }
                }, s.renderResizeHandle = function(t) {
                    var e = this.props.handle;
                    return e ? "function" === typeof e ? e(t) : e : o.default.createElement("span", {
                        className: "react-resizable-handle react-resizable-handle-" + t
                    })
                }, s.render = function() {
                    var t = this,
                        e = this.props,
                        r = e.children,
                        n = e.className,
                        s = e.draggableOpts,
                        l = (e.width, e.height, e.handle, e.handleSize, e.lockAspectRatio, e.axis, e.minConstraints, e.maxConstraints, e.onResize, e.onResizeStop, e.onResizeStart, e.resizeHandles),
                        f = (e.transformScale, function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                a = Object.keys(t);
                            for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(e, ["children", "className", "draggableOpts", "width", "height", "handle", "handleSize", "lockAspectRatio", "axis", "minConstraints", "maxConstraints", "onResize", "onResizeStop", "onResizeStart", "resizeHandles", "transformScale"]));
                    return (0, i.cloneElement)(r, c(c({}, f), {}, {
                        className: (n ? n + " " : "") + "react-resizable",
                        children: [].concat(r.props.children, l.map((function(e) {
                            return o.default.createElement(a.DraggableCore, u({}, s, {
                                key: "resizableHandle-" + e,
                                onStop: t.resizeHandler("onResizeStop", e),
                                onStart: t.resizeHandler("onResizeStart", e),
                                onDrag: t.resizeHandler("onResize", e)
                            }), t.renderResizeHandle(e))
                        })))
                    }))
                }, n
            }(o.default.Component);
            e.default = d, p(d, "propTypes", s.resizableProps), p(d, "defaultProps", {
                handleSize: [20, 20],
                lockAspectRatio: !1,
                axis: "both",
                minConstraints: [20, 20],
                maxConstraints: [1 / 0, 1 / 0],
                resizeHandles: ["se"],
                transformScale: 1
            })
        },
        sCUt: (t, e, r) => {
            "use strict";
            e.default = void 0;
            var n = function(t) {
                    if (t && t.__esModule) return t;
                    if (null === t || "object" !== typeof t && "function" !== typeof t) return {
                        default: t
                    };
                    var e = u();
                    if (e && e.has(t)) return e.get(t);
                    var r = {},
                        n = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var o in t)
                        if (Object.prototype.hasOwnProperty.call(t, o)) {
                            var a = n ? Object.getOwnPropertyDescriptor(t, o) : null;
                            a && (a.get || a.set) ? Object.defineProperty(r, o, a) : r[o] = t[o]
                        }
                    r.default = t, e && e.set(t, r);
                    return r
                }(r("DTvD")),
                o = s(r("1YyT")),
                a = s(r("yBiP")),
                i = r("Hk78");

            function s(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            }

            function u() {
                if ("function" !== typeof WeakMap) return null;
                var t = new WeakMap;
                return u = function() {
                    return t
                }, t
            }

            function l() {
                return l = Object.assign || function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var r = arguments[e];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n])
                    }
                    return t
                }, l.apply(this, arguments)
            }

            function c(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? c(Object(r), !0).forEach((function(e) {
                        d(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function p(t) {
                if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return t
            }

            function d(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
            var h = function(t) {
                var e, r;

                function o() {
                    for (var e, r = arguments.length, n = new Array(r), o = 0; o < r; o++) n[o] = arguments[o];
                    return d(p(e = t.call.apply(t, [this].concat(n)) || this), "state", {
                        width: e.props.width,
                        height: e.props.height,
                        propsWidth: e.props.width,
                        propsHeight: e.props.height
                    }), d(p(e), "onResize", (function(t, r) {
                        var n = r.size;
                        e.props.onResize ? (t.persist && t.persist(), e.setState(n, (function() {
                            return e.props.onResize && e.props.onResize(t, r)
                        }))) : e.setState(n)
                    })), e
                }
                return r = t, (e = o).prototype = Object.create(r.prototype), e.prototype.constructor = e, e.__proto__ = r, o.getDerivedStateFromProps = function(t, e) {
                    return e.propsWidth !== t.width || e.propsHeight !== t.height ? {
                        width: t.width,
                        height: t.height,
                        propsWidth: t.width,
                        propsHeight: t.height
                    } : null
                }, o.prototype.render = function() {
                    var t = this.props,
                        e = t.handle,
                        r = t.handleSize,
                        o = (t.onResize, t.onResizeStart),
                        i = t.onResizeStop,
                        s = t.draggableOpts,
                        u = t.minConstraints,
                        c = t.maxConstraints,
                        p = t.lockAspectRatio,
                        d = t.axis,
                        h = (t.width, t.height, t.resizeHandles),
                        y = t.style,
                        g = t.transformScale,
                        b = function(t, e) {
                            if (null == t) return {};
                            var r, n, o = {},
                                a = Object.keys(t);
                            for (n = 0; n < a.length; n++) r = a[n], e.indexOf(r) >= 0 || (o[r] = t[r]);
                            return o
                        }(t, ["handle", "handleSize", "onResize", "onResizeStart", "onResizeStop", "draggableOpts", "minConstraints", "maxConstraints", "lockAspectRatio", "axis", "width", "height", "resizeHandles", "style", "transformScale"]);
                    return n.createElement(a.default, {
                        axis: d,
                        draggableOpts: s,
                        handle: e,
                        handleSize: r,
                        height: this.state.height,
                        lockAspectRatio: p,
                        maxConstraints: c,
                        minConstraints: u,
                        onResizeStart: o,
                        onResize: this.onResize,
                        onResizeStop: i,
                        resizeHandles: h,
                        transformScale: g,
                        width: this.state.width
                    }, n.createElement("div", l({}, b, {
                        style: f(f({}, y), {}, {
                            width: this.state.width + "px",
                            height: this.state.height + "px"
                        })
                    })))
                }, o
            }(n.Component);
            e.default = h, d(h, "propTypes", f(f({}, i.resizableProps), {}, {
                children: o.default.element
            }))
        },
        Hk78: (t, e, r) => {
            "use strict";
            e.__esModule = !0, e.resizableProps = void 0;
            var n, o = (n = r("1YyT")) && n.__esModule ? n : {
                default: n
            };
            r("0qUY");
            var a = {
                axis: o.default.oneOf(["both", "x", "y", "none"]),
                className: o.default.string,
                children: o.default.element.isRequired,
                draggableOpts: o.default.shape({
                    allowAnyClick: o.default.bool,
                    cancel: o.default.string,
                    children: o.default.node,
                    disabled: o.default.bool,
                    enableUserSelectHack: o.default.bool,
                    offsetParent: o.default.node,
                    grid: o.default.arrayOf(o.default.number),
                    handle: o.default.string,
                    nodeRef: o.default.object,
                    onStart: o.default.func,
                    onDrag: o.default.func,
                    onStop: o.default.func,
                    onMouseDown: o.default.func,
                    scale: o.default.number
                }),
                height: o.default.number.isRequired,
                handle: o.default.oneOfType([o.default.node, o.default.func]),
                handleSize: o.default.arrayOf(o.default.number),
                lockAspectRatio: o.default.bool,
                maxConstraints: o.default.arrayOf(o.default.number),
                minConstraints: o.default.arrayOf(o.default.number),
                onResizeStop: o.default.func,
                onResizeStart: o.default.func,
                onResize: o.default.func,
                resizeHandles: o.default.arrayOf(o.default.oneOf(["s", "w", "e", "n", "sw", "nw", "se", "ne"])),
                transformScale: o.default.number,
                width: o.default.number.isRequired
            };
            e.resizableProps = a
        },
        "44r5": (t, e, r) => {
            "use strict";
            e.__esModule = !0, e.cloneElement = function(t, e) {
                e.style && t.props.style && (e.style = i(i({}, t.props.style), e.style));
                e.className && t.props.className && (e.className = t.props.className + " " + e.className);
                return o.default.cloneElement(t, e)
            };
            var n, o = (n = r("DTvD")) && n.__esModule ? n : {
                default: n
            };

            function a(t, e) {
                var r = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var r = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(r), !0).forEach((function(e) {
                        s(t, e, r[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(r, e))
                    }))
                }
                return t
            }

            function s(t, e, r) {
                return e in t ? Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = r, t
            }
        },
        "5kuX": (t, e, r) => {
            "use strict";
            t.exports = function() {
                throw new Error("Don't instantiate Resizable directly! Use require('react-resizable').Resizable")
            }, t.exports.Resizable = r("yBiP").default, t.exports.ResizableBox = r("sCUt").default
        }
    }
]);
//# debugId=0ccdc70d-0737-5e71-b6e3-068e6887e5ad