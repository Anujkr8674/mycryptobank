! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "65b5e0ab-a0a5-57f7-965c-0a9b9bd6fa73")
    } catch (e) {}
}();
(self.webpackChunkreferral_ui = self.webpackChunkreferral_ui || []).push([
    [1990], {
        vM3x: function(e, r, n) {
            var t;
            ! function(i) {
                "use strict";
                var o, s = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = Math.ceil,
                    f = Math.floor,
                    l = "[BigNumber Error] ",
                    c = l + "Number primitive has more than 15 significant digits: ",
                    a = 1e14,
                    h = 14,
                    g = 9007199254740991,
                    p = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    w = 1e7,
                    m = 1e9;

                function d(e) {
                    var r = 0 | e;
                    return e > 0 || e === r ? r : r - 1
                }

                function v(e) {
                    for (var r, n, t = 1, i = e.length, o = e[0] + ""; t < i;) {
                        for (r = e[t++] + "", n = h - r.length; n--; r = "0" + r);
                        o += r
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function N(e, r) {
                    var n, t, i = e.c,
                        o = r.c,
                        s = e.s,
                        u = r.s,
                        f = e.e,
                        l = r.e;
                    if (!s || !u) return null;
                    if (n = i && !i[0], t = o && !o[0], n || t) return n ? t ? 0 : -u : s;
                    if (s != u) return s;
                    if (n = s < 0, t = f == l, !i || !o) return t ? 0 : !i ^ n ? 1 : -1;
                    if (!t) return f > l ^ n ? 1 : -1;
                    for (u = (f = i.length) < (l = o.length) ? f : l, s = 0; s < u; s++)
                        if (i[s] != o[s]) return i[s] > o[s] ^ n ? 1 : -1;
                    return f == l ? 0 : f > l ^ n ? 1 : -1
                }

                function O(e, r, n, t) {
                    if (e < r || e > n || e !== f(e)) throw Error(l + (t || "Argument") + ("number" == typeof e ? e < r || e > n ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function b(e) {
                    var r = e.c.length - 1;
                    return d(e.e / h) == r && e.c[r] % 2 != 0
                }

                function y(e, r) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (r < 0 ? "e" : "e+") + r
                }

                function E(e, r, n) {
                    var t, i;
                    if (r < 0) {
                        for (i = n + "."; ++r; i += n);
                        e = i + e
                    } else if (++r > (t = e.length)) {
                        for (i = n, r -= t; --r; i += n);
                        e += i
                    } else r < t && (e = e.slice(0, r) + "." + e.slice(r));
                    return e
                }
                o = function e(r) {
                    var n, t, i, o = T.prototype = {
                            constructor: T,
                            toString: null,
                            valueOf: null
                        },
                        A = new T(1),
                        _ = 20,
                        S = 4,
                        R = -7,
                        D = 21,
                        P = -1e7,
                        x = 1e7,
                        B = !1,
                        L = 1,
                        U = 0,
                        C = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: "\xa0",
                            suffix: ""
                        },
                        I = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function T(e, r) {
                        var n, o, u, l, a, p, w, m, d = this;
                        if (!(d instanceof T)) return new T(e, r);
                        if (null == r) {
                            if (e && !0 === e._isBigNumber) return d.s = e.s, void(!e.c || e.e > x ? d.c = d.e = null : e.e < P ? d.c = [d.e = 0] : (d.e = e.e, d.c = e.c.slice()));
                            if ((p = "number" == typeof e) && 0 * e == 0) {
                                if (d.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (l = 0, a = e; a >= 10; a /= 10, l++);
                                    return void(l > x ? d.c = d.e = null : (d.e = l, d.c = [e]))
                                }
                                m = String(e)
                            } else {
                                if (!s.test(m = String(e))) return i(d, m, p);
                                d.s = 45 == m.charCodeAt(0) ? (m = m.slice(1), -1) : 1
                            }(l = m.indexOf(".")) > -1 && (m = m.replace(".", "")), (a = m.search(/e/i)) > 0 ? (l < 0 && (l = a), l += +m.slice(a + 1), m = m.substring(0, a)) : l < 0 && (l = m.length)
                        } else {
                            if (O(r, 2, I.length, "Base"), 10 == r) return F(d = new T(e), _ + d.e + 1, S);
                            if (m = String(e), p = "number" == typeof e) {
                                if (0 * e != 0) return i(d, m, p, r);
                                if (d.s = 1 / e < 0 ? (m = m.slice(1), -1) : 1, T.DEBUG && m.replace(/^0\.0*|\./, "").length > 15) throw Error(c + e)
                            } else d.s = 45 === m.charCodeAt(0) ? (m = m.slice(1), -1) : 1;
                            for (n = I.slice(0, r), l = a = 0, w = m.length; a < w; a++)
                                if (n.indexOf(o = m.charAt(a)) < 0) {
                                    if ("." == o) {
                                        if (a > l) {
                                            l = w;
                                            continue
                                        }
                                    } else if (!u && (m == m.toUpperCase() && (m = m.toLowerCase()) || m == m.toLowerCase() && (m = m.toUpperCase()))) {
                                        u = !0, a = -1, l = 0;
                                        continue
                                    }
                                    return i(d, String(e), p, r)
                                }
                            p = !1, (l = (m = t(m, r, 10, d.s)).indexOf(".")) > -1 ? m = m.replace(".", "") : l = m.length
                        }
                        for (a = 0; 48 === m.charCodeAt(a); a++);
                        for (w = m.length; 48 === m.charCodeAt(--w););
                        if (m = m.slice(a, ++w)) {
                            if (w -= a, p && T.DEBUG && w > 15 && (e > g || e !== f(e))) throw Error(c + d.s * e);
                            if ((l = l - a - 1) > x) d.c = d.e = null;
                            else if (l < P) d.c = [d.e = 0];
                            else {
                                if (d.e = l, d.c = [], a = (l + 1) % h, l < 0 && (a += h), a < w) {
                                    for (a && d.c.push(+m.slice(0, a)), w -= h; a < w;) d.c.push(+m.slice(a, a += h));
                                    a = h - (m = m.slice(a)).length
                                } else a -= w;
                                for (; a--; m += "0");
                                d.c.push(+m)
                            }
                        } else d.c = [d.e = 0]
                    }

                    function M(e, r, n, t) {
                        var i, o, s, u, f;
                        if (null == n ? n = S : O(n, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], s = e.e, null == r) f = v(e.c), f = 1 == t || 2 == t && (s <= R || s >= D) ? y(f, s) : E(f, s, "0");
                        else if (o = (e = F(new T(e), r, n)).e, u = (f = v(e.c)).length, 1 == t || 2 == t && (r <= o || o <= R)) {
                            for (; u < r; f += "0", u++);
                            f = y(f, o)
                        } else if (r -= s, f = E(f, o, "0"), o + 1 > u) {
                            if (--r > 0)
                                for (f += "."; r--; f += "0");
                        } else if ((r += o - u) > 0)
                            for (o + 1 == u && (f += "."); r--; f += "0");
                        return e.s < 0 && i ? "-" + f : f
                    }

                    function k(e, r) {
                        for (var n, t = 1, i = new T(e[0]); t < e.length; t++) {
                            if (!(n = new T(e[t])).s) {
                                i = n;
                                break
                            }
                            r.call(i, n) && (i = n)
                        }
                        return i
                    }

                    function G(e, r, n) {
                        for (var t = 1, i = r.length; !r[--i]; r.pop());
                        for (i = r[0]; i >= 10; i /= 10, t++);
                        return (n = t + n * h - 1) > x ? e.c = e.e = null : n < P ? e.c = [e.e = 0] : (e.e = n, e.c = r), e
                    }

                    function F(e, r, n, t) {
                        var i, o, s, l, c, g, w, m = e.c,
                            d = p;
                        if (m) {
                            e: {
                                for (i = 1, l = m[0]; l >= 10; l /= 10, i++);
                                if ((o = r - i) < 0) o += h,
                                s = r,
                                w = (c = m[g = 0]) / d[i - s - 1] % 10 | 0;
                                else if ((g = u((o + 1) / h)) >= m.length) {
                                    if (!t) break e;
                                    for (; m.length <= g; m.push(0));
                                    c = w = 0, i = 1, s = (o %= h) - h + 1
                                } else {
                                    for (c = l = m[g], i = 1; l >= 10; l /= 10, i++);
                                    w = (s = (o %= h) - h + i) < 0 ? 0 : c / d[i - s - 1] % 10 | 0
                                }
                                if (t = t || r < 0 || null != m[g + 1] || (s < 0 ? c : c % d[i - s - 1]), t = n < 4 ? (w || t) && (0 == n || n == (e.s < 0 ? 3 : 2)) : w > 5 || 5 == w && (4 == n || t || 6 == n && (o > 0 ? s > 0 ? c / d[i - s] : 0 : m[g - 1]) % 10 & 1 || n == (e.s < 0 ? 8 : 7)), r < 1 || !m[0]) return m.length = 0, t ? (r -= e.e + 1, m[0] = d[(h - r % h) % h], e.e = -r || 0) : m[0] = e.e = 0, e;
                                if (0 == o ? (m.length = g, l = 1, g--) : (m.length = g + 1, l = d[h - o], m[g] = s > 0 ? f(c / d[i - s] % d[s]) * l : 0), t)
                                    for (;;) {
                                        if (0 == g) {
                                            for (o = 1, s = m[0]; s >= 10; s /= 10, o++);
                                            for (s = m[0] += l, l = 1; s >= 10; s /= 10, l++);
                                            o != l && (e.e++, m[0] == a && (m[0] = 1));
                                            break
                                        }
                                        if (m[g] += l, m[g] != a) break;
                                        m[g--] = 0, l = 1
                                    }
                                for (o = m.length; 0 === m[--o]; m.pop());
                            }
                            e.e > x ? e.c = e.e = null : e.e < P && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function q(e) {
                        var r, n = e.e;
                        return null === n ? e.toString() : (r = v(e.c), r = n <= R || n >= D ? y(r, n) : E(r, n, "0"), e.s < 0 ? "-" + r : r)
                    }
                    return T.clone = e, T.ROUND_UP = 0, T.ROUND_DOWN = 1, T.ROUND_CEIL = 2, T.ROUND_FLOOR = 3, T.ROUND_HALF_UP = 4, T.ROUND_HALF_DOWN = 5, T.ROUND_HALF_EVEN = 6, T.ROUND_HALF_CEIL = 7, T.ROUND_HALF_FLOOR = 8, T.EUCLID = 9, T.config = T.set = function(e) {
                        var r, n;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(l + "Object expected: " + e);
                            if (e.hasOwnProperty(r = "DECIMAL_PLACES") && (O(n = e[r], 0, m, r), _ = n), e.hasOwnProperty(r = "ROUNDING_MODE") && (O(n = e[r], 0, 8, r), S = n), e.hasOwnProperty(r = "EXPONENTIAL_AT") && ((n = e[r]) && n.pop ? (O(n[0], -m, 0, r), O(n[1], 0, m, r), R = n[0], D = n[1]) : (O(n, -m, m, r), R = -(D = n < 0 ? -n : n))), e.hasOwnProperty(r = "RANGE"))
                                if ((n = e[r]) && n.pop) O(n[0], -m, -1, r), O(n[1], 1, m, r), P = n[0], x = n[1];
                                else {
                                    if (O(n, -m, m, r), !n) throw Error(l + r + " cannot be zero: " + n);
                                    P = -(x = n < 0 ? -n : n)
                                }
                            if (e.hasOwnProperty(r = "CRYPTO")) {
                                if ((n = e[r]) !== !!n) throw Error(l + r + " not true or false: " + n);
                                if (n) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw B = !n, Error(l + "crypto unavailable");
                                    B = n
                                } else B = n
                            }
                            if (e.hasOwnProperty(r = "MODULO_MODE") && (O(n = e[r], 0, 9, r), L = n), e.hasOwnProperty(r = "POW_PRECISION") && (O(n = e[r], 0, m, r), U = n), e.hasOwnProperty(r = "FORMAT")) {
                                if ("object" != typeof(n = e[r])) throw Error(l + r + " not an object: " + n);
                                C = n
                            }
                            if (e.hasOwnProperty(r = "ALPHABET")) {
                                if ("string" != typeof(n = e[r]) || /^.?$|[+\-.\s]|(.).*\1/.test(n)) throw Error(l + r + " invalid: " + n);
                                I = n
                            }
                        }
                        return {
                            DECIMAL_PLACES: _,
                            ROUNDING_MODE: S,
                            EXPONENTIAL_AT: [R, D],
                            RANGE: [P, x],
                            CRYPTO: B,
                            MODULO_MODE: L,
                            POW_PRECISION: U,
                            FORMAT: C,
                            ALPHABET: I
                        }
                    }, T.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!T.DEBUG) return !0;
                        var r, n, t = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == {}.toString.call(t)) {
                            if ((1 === o || -1 === o) && i >= -m && i <= m && i === f(i)) {
                                if (0 === t[0]) {
                                    if (0 === i && 1 === t.length) return !0;
                                    break e
                                }
                                if ((r = (i + 1) % h) < 1 && (r += h), String(t[0]).length == r) {
                                    for (r = 0; r < t.length; r++)
                                        if ((n = t[r]) < 0 || n >= a || n !== f(n)) break e;
                                    if (0 !== n) return !0
                                }
                            }
                        } else
                        if (null === t && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(l + "Invalid BigNumber: " + e)
                    }, T.maximum = T.max = function() {
                        return k(arguments, o.lt)
                    }, T.minimum = T.min = function() {
                        return k(arguments, o.gt)
                    }, T.random = function() {
                        var e = 9007199254740992,
                            r = Math.random() * e & 2097151 ? function() {
                                return f(Math.random() * e)
                            } : function() {
                                return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                            };
                        return function(e) {
                            var n, t, i, o, s, c = 0,
                                a = [],
                                g = new T(A);
                            if (null == e ? e = _ : O(e, 0, m), o = u(e / h), B)
                                if (crypto.getRandomValues) {
                                    for (n = crypto.getRandomValues(new Uint32Array(o *= 2)); c < o;)(s = 131072 * n[c] + (n[c + 1] >>> 11)) >= 9e15 ? (t = crypto.getRandomValues(new Uint32Array(2)), n[c] = t[0], n[c + 1] = t[1]) : (a.push(s % 1e14), c += 2);
                                    c = o / 2
                                } else {
                                    if (!crypto.randomBytes) throw B = !1, Error(l + "crypto unavailable");
                                    for (n = crypto.randomBytes(o *= 7); c < o;)(s = 281474976710656 * (31 & n[c]) + 1099511627776 * n[c + 1] + 4294967296 * n[c + 2] + 16777216 * n[c + 3] + (n[c + 4] << 16) + (n[c + 5] << 8) + n[c + 6]) >= 9e15 ? crypto.randomBytes(7).copy(n, c) : (a.push(s % 1e14), c += 7);
                                    c = o / 7
                                }
                            if (!B)
                                for (; c < o;)(s = r()) < 9e15 && (a[c++] = s % 1e14);
                            for (o = a[--c], e %= h, o && e && (s = p[h - e], a[c] = f(o / s) * s); 0 === a[c]; a.pop(), c--);
                            if (c < 0) a = [i = 0];
                            else {
                                for (i = -1; 0 === a[0]; a.splice(0, 1), i -= h);
                                for (c = 1, s = a[0]; s >= 10; s /= 10, c++);
                                c < h && (i -= h - c)
                            }
                            return g.e = i, g.c = a, g
                        }
                    }(), T.sum = function() {
                        for (var e = 1, r = arguments, n = new T(r[0]); e < r.length;) n = n.plus(r[e++]);
                        return n
                    }, t = function() {
                        var e = "0123456789";

                        function r(e, r, n, t) {
                            for (var i, o, s = [0], u = 0, f = e.length; u < f;) {
                                for (o = s.length; o--; s[o] *= r);
                                for (s[0] += t.indexOf(e.charAt(u++)), i = 0; i < s.length; i++) s[i] > n - 1 && (null == s[i + 1] && (s[i + 1] = 0), s[i + 1] += s[i] / n | 0, s[i] %= n)
                            }
                            return s.reverse()
                        }
                        return function(t, i, o, s, u) {
                            var f, l, c, a, h, g, p, w, m = t.indexOf("."),
                                d = _,
                                N = S;
                            for (m >= 0 && (a = U, U = 0, t = t.replace(".", ""), g = (w = new T(i)).pow(t.length - m), U = a, w.c = r(E(v(g.c), g.e, "0"), 10, o, e), w.e = w.c.length), c = a = (p = r(t, i, o, u ? (f = I, e) : (f = e, I))).length; 0 == p[--a]; p.pop());
                            if (!p[0]) return f.charAt(0);
                            if (m < 0 ? --c : (g.c = p, g.e = c, g.s = s, p = (g = n(g, w, d, N, o)).c, h = g.r, c = g.e), m = p[l = c + d + 1], a = o / 2, h = h || l < 0 || null != p[l + 1], h = N < 4 ? (null != m || h) && (0 == N || N == (g.s < 0 ? 3 : 2)) : m > a || m == a && (4 == N || h || 6 == N && 1 & p[l - 1] || N == (g.s < 0 ? 8 : 7)), l < 1 || !p[0]) t = h ? E(f.charAt(1), -d, f.charAt(0)) : f.charAt(0);
                            else {
                                if (p.length = l, h)
                                    for (--o; ++p[--l] > o;) p[l] = 0, l || (++c, p = [1].concat(p));
                                for (a = p.length; !p[--a];);
                                for (m = 0, t = ""; m <= a; t += f.charAt(p[m++]));
                                t = E(t, c, f.charAt(0))
                            }
                            return t
                        }
                    }(), n = function() {
                        function e(e, r, n) {
                            var t, i, o, s, u = 0,
                                f = e.length,
                                l = r % w,
                                c = r / w | 0;
                            for (e = e.slice(); f--;) u = ((i = l * (o = e[f] % w) + (t = c * o + (s = e[f] / w | 0) * l) % w * w + u) / n | 0) + (t / w | 0) + c * s, e[f] = i % n;
                            return u && (e = [u].concat(e)), e
                        }

                        function r(e, r, n, t) {
                            var i, o;
                            if (n != t) o = n > t ? 1 : -1;
                            else
                                for (i = o = 0; i < n; i++)
                                    if (e[i] != r[i]) {
                                        o = e[i] > r[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function n(e, r, n, t) {
                            for (var i = 0; n--;) e[n] -= i, i = e[n] < r[n] ? 1 : 0, e[n] = i * t + e[n] - r[n];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(t, i, o, s, u) {
                            var l, c, g, p, w, m, v, N, O, b, y, E, A, _, S, R, D, P = t.s == i.s ? 1 : -1,
                                x = t.c,
                                B = i.c;
                            if (!x || !x[0] || !B || !B[0]) return new T(t.s && i.s && (x ? !B || x[0] != B[0] : B) ? x && 0 == x[0] || !B ? 0 * P : P / 0 : NaN);
                            for (O = (N = new T(P)).c = [], P = o + (c = t.e - i.e) + 1, u || (u = a, c = d(t.e / h) - d(i.e / h), P = P / h | 0), g = 0; B[g] == (x[g] || 0); g++);
                            if (B[g] > (x[g] || 0) && c--, P < 0) O.push(1), p = !0;
                            else {
                                for (_ = x.length, R = B.length, g = 0, P += 2, (w = f(u / (B[0] + 1))) > 1 && (B = e(B, w, u), x = e(x, w, u), R = B.length, _ = x.length), A = R, y = (b = x.slice(0, R)).length; y < R; b[y++] = 0);
                                D = B.slice(), D = [0].concat(D), S = B[0], B[1] >= u / 2 && S++;
                                do {
                                    if (w = 0, (l = r(B, b, R, y)) < 0) {
                                        if (E = b[0], R != y && (E = E * u + (b[1] || 0)), (w = f(E / S)) > 1)
                                            for (w >= u && (w = u - 1), v = (m = e(B, w, u)).length, y = b.length; 1 == r(m, b, v, y);) w--, n(m, R < v ? D : B, v, u), v = m.length, l = 1;
                                        else 0 == w && (l = w = 1), v = (m = B.slice()).length;
                                        if (v < y && (m = [0].concat(m)), n(b, m, y, u), y = b.length, -1 == l)
                                            for (; r(B, b, R, y) < 1;) w++, n(b, R < y ? D : B, y, u), y = b.length
                                    } else 0 === l && (w++, b = [0]);
                                    O[g++] = w, b[0] ? b[y++] = x[A] || 0 : (b = [x[A]], y = 1)
                                } while ((A++ < _ || null != b[0]) && P--);
                                p = null != b[0], O[0] || O.splice(0, 1)
                            }
                            if (u == a) {
                                for (g = 1, P = O[0]; P >= 10; P /= 10, g++);
                                F(N, o + (N.e = g + c * h - 1) + 1, s, p)
                            } else N.e = c, N.r = +p;
                            return N
                        }
                    }(), i = function() {
                        var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                            r = /^([^.]+)\.$/,
                            n = /^\.([^.]+)$/,
                            t = /^-?(Infinity|NaN)$/,
                            i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                        return function(o, s, u, f) {
                            var c, a = u ? s : s.replace(i, "");
                            if (t.test(a)) o.s = isNaN(a) ? null : a < 0 ? -1 : 1;
                            else {
                                if (!u && (a = a.replace(e, (function(e, r, n) {
                                        return c = "x" == (n = n.toLowerCase()) ? 16 : "b" == n ? 2 : 8, f && f != c ? e : r
                                    })), f && (c = f, a = a.replace(r, "$1").replace(n, "0.$1")), s != a)) return new T(a, c);
                                if (T.DEBUG) throw Error(l + "Not a" + (f ? " base " + f : "") + " number: " + s);
                                o.s = null
                            }
                            o.c = o.e = null
                        }
                    }(), o.absoluteValue = o.abs = function() {
                        var e = new T(this);
                        return e.s < 0 && (e.s = 1), e
                    }, o.comparedTo = function(e, r) {
                        return N(this, new T(e, r))
                    }, o.decimalPlaces = o.dp = function(e, r) {
                        var n, t, i, o = this;
                        if (null != e) return O(e, 0, m), null == r ? r = S : O(r, 0, 8), F(new T(o), e + o.e + 1, r);
                        if (!(n = o.c)) return null;
                        if (t = ((i = n.length - 1) - d(this.e / h)) * h, i = n[i])
                            for (; i % 10 == 0; i /= 10, t--);
                        return t < 0 && (t = 0), t
                    }, o.dividedBy = o.div = function(e, r) {
                        return n(this, new T(e, r), _, S)
                    }, o.dividedToIntegerBy = o.idiv = function(e, r) {
                        return n(this, new T(e, r), 0, 1)
                    }, o.exponentiatedBy = o.pow = function(e, r) {
                        var n, t, i, o, s, c, a, g, p = this;
                        if ((e = new T(e)).c && !e.isInteger()) throw Error(l + "Exponent not an integer: " + q(e));
                        if (null != r && (r = new T(r)), s = e.e > 14, !p.c || !p.c[0] || 1 == p.c[0] && !p.e && 1 == p.c.length || !e.c || !e.c[0]) return g = new T(Math.pow(+q(p), s ? 2 - b(e) : +q(e))), r ? g.mod(r) : g;
                        if (c = e.s < 0, r) {
                            if (r.c ? !r.c[0] : !r.s) return new T(NaN);
                            (t = !c && p.isInteger() && r.isInteger()) && (p = p.mod(r))
                        } else {
                            if (e.e > 9 && (p.e > 0 || p.e < -1 || (0 == p.e ? p.c[0] > 1 || s && p.c[1] >= 24e7 : p.c[0] < 8e13 || s && p.c[0] <= 9999975e7))) return o = p.s < 0 && b(e) ? -0 : 0, p.e > -1 && (o = 1 / o), new T(c ? 1 / o : o);
                            U && (o = u(U / h + 2))
                        }
                        for (s ? (n = new T(.5), c && (e.s = 1), a = b(e)) : a = (i = Math.abs(+q(e))) % 2, g = new T(A);;) {
                            if (a) {
                                if (!(g = g.times(p)).c) break;
                                o ? g.c.length > o && (g.c.length = o) : t && (g = g.mod(r))
                            }
                            if (i) {
                                if (0 === (i = f(i / 2))) break;
                                a = i % 2
                            } else if (F(e = e.times(n), e.e + 1, 1), e.e > 14) a = b(e);
                            else {
                                if (0 === (i = +q(e))) break;
                                a = i % 2
                            }
                            p = p.times(p), o ? p.c && p.c.length > o && (p.c.length = o) : t && (p = p.mod(r))
                        }
                        return t ? g : (c && (g = A.div(g)), r ? g.mod(r) : o ? F(g, U, S, undefined) : g)
                    }, o.integerValue = function(e) {
                        var r = new T(this);
                        return null == e ? e = S : O(e, 0, 8), F(r, r.e + 1, e)
                    }, o.isEqualTo = o.eq = function(e, r) {
                        return 0 === N(this, new T(e, r))
                    }, o.isFinite = function() {
                        return !!this.c
                    }, o.isGreaterThan = o.gt = function(e, r) {
                        return N(this, new T(e, r)) > 0
                    }, o.isGreaterThanOrEqualTo = o.gte = function(e, r) {
                        return 1 === (r = N(this, new T(e, r))) || 0 === r
                    }, o.isInteger = function() {
                        return !!this.c && d(this.e / h) > this.c.length - 2
                    }, o.isLessThan = o.lt = function(e, r) {
                        return N(this, new T(e, r)) < 0
                    }, o.isLessThanOrEqualTo = o.lte = function(e, r) {
                        return -1 === (r = N(this, new T(e, r))) || 0 === r
                    }, o.isNaN = function() {
                        return !this.s
                    }, o.isNegative = function() {
                        return this.s < 0
                    }, o.isPositive = function() {
                        return this.s > 0
                    }, o.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, o.minus = function(e, r) {
                        var n, t, i, o, s = this,
                            u = s.s;
                        if (r = (e = new T(e, r)).s, !u || !r) return new T(NaN);
                        if (u != r) return e.s = -r, s.plus(e);
                        var f = s.e / h,
                            l = e.e / h,
                            c = s.c,
                            g = e.c;
                        if (!f || !l) {
                            if (!c || !g) return c ? (e.s = -r, e) : new T(g ? s : NaN);
                            if (!c[0] || !g[0]) return g[0] ? (e.s = -r, e) : new T(c[0] ? s : 3 == S ? -0 : 0)
                        }
                        if (f = d(f), l = d(l), c = c.slice(), u = f - l) {
                            for ((o = u < 0) ? (u = -u, i = c) : (l = f, i = g), i.reverse(), r = u; r--; i.push(0));
                            i.reverse()
                        } else
                            for (t = (o = (u = c.length) < (r = g.length)) ? u : r, u = r = 0; r < t; r++)
                                if (c[r] != g[r]) {
                                    o = c[r] < g[r];
                                    break
                                } if (o && (i = c, c = g, g = i, e.s = -e.s), (r = (t = g.length) - (n = c.length)) > 0)
                            for (; r--; c[n++] = 0);
                        for (r = a - 1; t > u;) {
                            if (c[--t] < g[t]) {
                                for (n = t; n && !c[--n]; c[n] = r);
                                --c[n], c[t] += a
                            }
                            c[t] -= g[t]
                        }
                        for (; 0 == c[0]; c.splice(0, 1), --l);
                        return c[0] ? G(e, c, l) : (e.s = 3 == S ? -1 : 1, e.c = [e.e = 0], e)
                    }, o.modulo = o.mod = function(e, r) {
                        var t, i, o = this;
                        return e = new T(e, r), !o.c || !e.s || e.c && !e.c[0] ? new T(NaN) : !e.c || o.c && !o.c[0] ? new T(o) : (9 == L ? (i = e.s, e.s = 1, t = n(o, e, 0, 3), e.s = i, t.s *= i) : t = n(o, e, 0, L), (e = o.minus(t.times(e))).c[0] || 1 != L || (e.s = o.s), e)
                    }, o.multipliedBy = o.times = function(e, r) {
                        var n, t, i, o, s, u, f, l, c, g, p, m, v, N, O, b = this,
                            y = b.c,
                            E = (e = new T(e, r)).c;
                        if (!y || !E || !y[0] || !E[0]) return !b.s || !e.s || y && !y[0] && !E || E && !E[0] && !y ? e.c = e.e = e.s = null : (e.s *= b.s, y && E ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (t = d(b.e / h) + d(e.e / h), e.s *= b.s, (f = y.length) < (g = E.length) && (v = y, y = E, E = v, i = f, f = g, g = i), i = f + g, v = []; i--; v.push(0));
                        for (N = a, O = w, i = g; --i >= 0;) {
                            for (n = 0, p = E[i] % O, m = E[i] / O | 0, o = i + (s = f); o > i;) n = ((l = p * (l = y[--s] % O) + (u = m * l + (c = y[s] / O | 0) * p) % O * O + v[o] + n) / N | 0) + (u / O | 0) + m * c, v[o--] = l % N;
                            v[o] = n
                        }
                        return n ? ++t : v.splice(0, 1), G(e, v, t)
                    }, o.negated = function() {
                        var e = new T(this);
                        return e.s = -e.s || null, e
                    }, o.plus = function(e, r) {
                        var n, t = this,
                            i = t.s;
                        if (r = (e = new T(e, r)).s, !i || !r) return new T(NaN);
                        if (i != r) return e.s = -r, t.minus(e);
                        var o = t.e / h,
                            s = e.e / h,
                            u = t.c,
                            f = e.c;
                        if (!o || !s) {
                            if (!u || !f) return new T(i / 0);
                            if (!u[0] || !f[0]) return f[0] ? e : new T(u[0] ? t : 0 * i)
                        }
                        if (o = d(o), s = d(s), u = u.slice(), i = o - s) {
                            for (i > 0 ? (s = o, n = f) : (i = -i, n = u), n.reverse(); i--; n.push(0));
                            n.reverse()
                        }
                        for ((i = u.length) - (r = f.length) < 0 && (n = f, f = u, u = n, r = i), i = 0; r;) i = (u[--r] = u[r] + f[r] + i) / a | 0, u[r] = a === u[r] ? 0 : u[r] % a;
                        return i && (u = [i].concat(u), ++s), G(e, u, s)
                    }, o.precision = o.sd = function(e, r) {
                        var n, t, i, o = this;
                        if (null != e && e !== !!e) return O(e, 1, m), null == r ? r = S : O(r, 0, 8), F(new T(o), e, r);
                        if (!(n = o.c)) return null;
                        if (t = (i = n.length - 1) * h + 1, i = n[i]) {
                            for (; i % 10 == 0; i /= 10, t--);
                            for (i = n[0]; i >= 10; i /= 10, t++);
                        }
                        return e && o.e + 1 > t && (t = o.e + 1), t
                    }, o.shiftedBy = function(e) {
                        return O(e, -9007199254740991, g), this.times("1e" + e)
                    }, o.squareRoot = o.sqrt = function() {
                        var e, r, t, i, o, s = this,
                            u = s.c,
                            f = s.s,
                            l = s.e,
                            c = _ + 4,
                            a = new T("0.5");
                        if (1 !== f || !u || !u[0]) return new T(!f || f < 0 && (!u || u[0]) ? NaN : u ? s : 1 / 0);
                        if (0 == (f = Math.sqrt(+q(s))) || f == 1 / 0 ? (((r = v(u)).length + l) % 2 == 0 && (r += "0"), f = Math.sqrt(+r), l = d((l + 1) / 2) - (l < 0 || l % 2), t = new T(r = f == 1 / 0 ? "5e" + l : (r = f.toExponential()).slice(0, r.indexOf("e") + 1) + l)) : t = new T(f + ""), t.c[0])
                            for ((f = (l = t.e) + c) < 3 && (f = 0);;)
                                if (o = t, t = a.times(o.plus(n(s, o, c, 1))), v(o.c).slice(0, f) === (r = v(t.c)).slice(0, f)) {
                                    if (t.e < l && --f, "9999" != (r = r.slice(f - 3, f + 1)) && (i || "4999" != r)) {
                                        +r && (+r.slice(1) || "5" != r.charAt(0)) || (F(t, t.e + _ + 2, 1), e = !t.times(t).eq(s));
                                        break
                                    }
                                    if (!i && (F(o, o.e + _ + 2, 0), o.times(o).eq(s))) {
                                        t = o;
                                        break
                                    }
                                    c += 4, f += 4, i = 1
                                }
                        return F(t, t.e + _ + 1, S, e)
                    }, o.toExponential = function(e, r) {
                        return null != e && (O(e, 0, m), e++), M(this, e, r, 1)
                    }, o.toFixed = function(e, r) {
                        return null != e && (O(e, 0, m), e = e + this.e + 1), M(this, e, r)
                    }, o.toFormat = function(e, r, n) {
                        var t, i = this;
                        if (null == n) null != e && r && "object" == typeof r ? (n = r, r = null) : e && "object" == typeof e ? (n = e, e = r = null) : n = C;
                        else if ("object" != typeof n) throw Error(l + "Argument not an object: " + n);
                        if (t = i.toFixed(e, r), i.c) {
                            var o, s = t.split("."),
                                u = +n.groupSize,
                                f = +n.secondaryGroupSize,
                                c = n.groupSeparator || "",
                                a = s[0],
                                h = s[1],
                                g = i.s < 0,
                                p = g ? a.slice(1) : a,
                                w = p.length;
                            if (f && (o = u, u = f, f = o, w -= o), u > 0 && w > 0) {
                                for (o = w % u || u, a = p.substr(0, o); o < w; o += u) a += c + p.substr(o, u);
                                f > 0 && (a += c + p.slice(o)), g && (a = "-" + a)
                            }
                            t = h ? a + (n.decimalSeparator || "") + ((f = +n.fractionGroupSize) ? h.replace(new RegExp("\\d{" + f + "}\\B", "g"), "$&" + (n.fractionGroupSeparator || "")) : h) : a
                        }
                        return (n.prefix || "") + t + (n.suffix || "")
                    }, o.toFraction = function(e) {
                        var r, t, i, o, s, u, f, c, a, g, w, m, d = this,
                            N = d.c;
                        if (null != e && (!(f = new T(e)).isInteger() && (f.c || 1 !== f.s) || f.lt(A))) throw Error(l + "Argument " + (f.isInteger() ? "out of range: " : "not an integer: ") + q(f));
                        if (!N) return new T(d);
                        for (r = new T(A), a = t = new T(A), i = c = new T(A), m = v(N), s = r.e = m.length - d.e - 1, r.c[0] = p[(u = s % h) < 0 ? h + u : u], e = !e || f.comparedTo(r) > 0 ? s > 0 ? r : a : f, u = x, x = 1 / 0, f = new T(m), c.c[0] = 0; g = n(f, r, 0, 1), 1 != (o = t.plus(g.times(i))).comparedTo(e);) t = i, i = o, a = c.plus(g.times(o = a)), c = o, r = f.minus(g.times(o = r)), f = o;
                        return o = n(e.minus(t), i, 0, 1), c = c.plus(o.times(a)), t = t.plus(o.times(i)), c.s = a.s = d.s, w = n(a, i, s *= 2, S).minus(d).abs().comparedTo(n(c, t, s, S).minus(d).abs()) < 1 ? [a, i] : [c, t], x = u, w
                    }, o.toNumber = function() {
                        return +q(this)
                    }, o.toPrecision = function(e, r) {
                        return null != e && O(e, 1, m), M(this, e, r, 2)
                    }, o.toString = function(e) {
                        var r, n = this,
                            i = n.s,
                            o = n.e;
                        return null === o ? i ? (r = "Infinity", i < 0 && (r = "-" + r)) : r = "NaN" : (null == e ? r = o <= R || o >= D ? y(v(n.c), o) : E(v(n.c), o, "0") : 10 === e ? r = E(v((n = F(new T(n), _ + o + 1, S)).c), n.e, "0") : (O(e, 2, I.length, "Base"), r = t(E(v(n.c), o, "0"), 10, e, i, !0)), i < 0 && n.c[0] && (r = "-" + r)), r
                    }, o.valueOf = o.toJSON = function() {
                        return q(this)
                    }, o._isBigNumber = !0, null != r && T.set(r), T
                }(), o.default = o.BigNumber = o, void 0 === (t = function() {
                    return o
                }.call(r, n, r, e)) || (e.exports = t)
            }()
        }
    }
]);
//# debugId=65b5e0ab-a0a5-57f7-965c-0a9b9bd6fa73