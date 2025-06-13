/*! For license information please see captions.js.LICENSE.txt */
var __webpack_modules__ = {
        2: (t, e, n) => {
            n.d(e, {
                Component: () => C,
                Fragment: () => T,
                cloneElement: () => q,
                createContext: () => $,
                createElement: () => w,
                createRef: () => O,
                h: () => w,
                hydrate: () => z,
                options: () => i,
                render: () => K,
                toChildArray: () => M
            });
            var r, i, o, a, s, c, u, l, f, p, h, d, v = {},
                y = [],
                g = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                m = Array.isArray;

            function b(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function _(t) {
                t && t.parentNode && t.parentNode.removeChild(t)
            }

            function w(t, e, n) {
                var i, o, a, s = {};
                for (a in e) "key" == a ? i = e[a] : "ref" == a ? o = e[a] : s[a] = e[a];
                if (arguments.length > 2 && (s.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof t && null != t.defaultProps)
                    for (a in t.defaultProps) null == s[a] && (s[a] = t.defaultProps[a]);
                return S(t, s, i, o, null)
            }

            function S(t, e, n, r, a) {
                var s = {
                    type: t,
                    props: e,
                    key: n,
                    ref: r,
                    __k: null,
                    __: null,
                    __b: 0,
                    __e: null,
                    __c: null,
                    constructor: void 0,
                    __v: null == a ? ++o : a,
                    __i: -1,
                    __u: 0
                };
                return null == a && null != i.vnode && i.vnode(s), s
            }

            function O() {
                return {
                    current: null
                }
            }

            function T(t) {
                return t.children
            }

            function C(t, e) {
                this.props = t, this.context = e
            }

            function E(t, e) {
                if (null == e) return t.__ ? E(t.__, t.__i + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? E(t) : null
            }

            function k(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return k(t)
                }
            }

            function P(t) {
                (!t.__d && (t.__d = !0) && a.push(t) && !x.__r++ || s != i.debounceRendering) && ((s = i.debounceRendering) || c)(x)
            }

            function x() {
                for (var t, e, n, r, o, s, c, l = 1; a.length;) a.length > l && a.sort(u), t = a.shift(), l = a.length, t.__d && (n = void 0, o = (r = (e = t).__v).__e, s = [], c = [], e.__P && ((n = b({}, r)).__v = r.__v + 1, i.vnode && i.vnode(n), W(e.__P, n, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, s, null == o ? E(r) : o, !!(32 & r.__u), c), n.__v = r.__v, n.__.__k[n.__i] = n, H(s, n, c), n.__e != o && k(n)));
                x.__r = 0
            }

            function A(t, e, n, r, i, o, a, s, c, u, l) {
                var f, p, h, d, g, m, b = r && r.__k || y,
                    _ = e.length;
                for (c = j(n, e, b, c, _), f = 0; f < _; f++) null != (h = n.__k[f]) && (p = -1 == h.__i ? v : b[h.__i] || v, h.__i = f, m = W(t, h, p, i, o, a, s, c, u, l), d = h.__e, h.ref && p.ref != h.ref && (p.ref && U(p.ref, null, h), l.push(h.ref, h.__c || d, h)), null == g && null != d && (g = d), 4 & h.__u || p.__k === h.__k ? c = L(h, c, t) : "function" == typeof h.type && void 0 !== m ? c = m : d && (c = d.nextSibling), h.__u &= -7);
                return n.__e = g, c
            }

            function j(t, e, n, r, i) {
                var o, a, s, c, u, l = n.length,
                    f = l,
                    p = 0;
                for (t.__k = new Array(i), o = 0; o < i; o++) null != (a = e[o]) && "boolean" != typeof a && "function" != typeof a ? (c = o + p, (a = t.__k[o] = "string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? S(null, a, null, null, null) : m(a) ? S(T, {
                    children: a
                }, null, null, null) : null == a.constructor && a.__b > 0 ? S(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = t, a.__b = t.__b + 1, s = null, -1 != (u = a.__i = I(a, n, c, f)) && (f--, (s = n[u]) && (s.__u |= 2)), null == s || null == s.__v ? (-1 == u && (i > l ? p-- : i < l && p++), "function" != typeof a.type && (a.__u |= 4)) : u != c && (u == c - 1 ? p-- : u == c + 1 ? p++ : (u > c ? p-- : p++, a.__u |= 4))) : t.__k[o] = null;
                if (f)
                    for (o = 0; o < l; o++) null != (s = n[o]) && !(2 & s.__u) && (s.__e == r && (r = E(s)), V(s, s));
                return r
            }

            function L(t, e, n) {
                var r, i;
                if ("function" == typeof t.type) {
                    for (r = t.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = t, e = L(r[i], e, n));
                    return e
                }
                t.__e != e && (e && t.type && !n.contains(e) && (e = E(t)), n.insertBefore(t.__e, e || null), e = t.__e);
                do {
                    e = e && e.nextSibling
                } while (null != e && 8 == e.nodeType);
                return e
            }

            function M(t, e) {
                return e = e || [], null == t || "boolean" == typeof t || (m(t) ? t.some((function(t) {
                    M(t, e)
                })) : e.push(t)), e
            }

            function I(t, e, n, r) {
                var i, o, a = t.key,
                    s = t.type,
                    c = e[n];
                if (null === c && null == t.key || c && a == c.key && s == c.type && !(2 & c.__u)) return n;
                if (r > (null == c || 2 & c.__u ? 0 : 1))
                    for (i = n - 1, o = n + 1; i >= 0 || o < e.length;) {
                        if (i >= 0) {
                            if ((c = e[i]) && !(2 & c.__u) && a == c.key && s == c.type) return i;
                            i--
                        }
                        if (o < e.length) {
                            if ((c = e[o]) && !(2 & c.__u) && a == c.key && s == c.type) return o;
                            o++
                        }
                    }
                return -1
            }

            function R(t, e, n) {
                "-" == e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || g.test(e) ? n : n + "px"
            }

            function F(t, e, n, r, i) {
                var o;
                t: if ("style" == e)
                    if ("string" == typeof n) t.style.cssText = n;
                    else {
                        if ("string" == typeof r && (t.style.cssText = r = ""), r)
                            for (e in r) n && e in n || R(t.style, e, "");
                        if (n)
                            for (e in n) r && n[e] == r[e] || R(t.style, e, n[e])
                    }
                else if ("o" == e[0] && "n" == e[1]) o = e != (e = e.replace(l, "$1")), e = e.toLowerCase() in t || "onFocusOut" == e || "onFocusIn" == e ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r ? n.u = r.u : (n.u = f, t.addEventListener(e, o ? h : p, o)) : t.removeEventListener(e, o ? h : p, o);
                else {
                    if ("http://www.w3.org/2000/svg" == i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" != e && "height" != e && "href" != e && "list" != e && "form" != e && "tabIndex" != e && "download" != e && "rowSpan" != e && "colSpan" != e && "role" != e && "popover" != e && e in t) try {
                        t[e] = null == n ? "" : n;
                        break t
                    } catch (t) {}
                    "function" == typeof n || (null == n || !1 === n && "-" != e[4] ? t.removeAttribute(e) : t.setAttribute(e, "popover" == e && 1 == n ? "" : n))
                }
            }

            function D(t) {
                return function(e) {
                    if (this.l) {
                        var n = this.l[e.type + t];
                        if (null == e.t) e.t = f++;
                        else if (e.t < n.u) return;
                        return n(i.event ? i.event(e) : e)
                    }
                }
            }

            function W(t, e, n, r, o, a, s, c, u, l) {
                var f, p, h, d, v, y, g, w, S, O, E, k, P, x, j, L, M, I = e.type;
                if (null != e.constructor) return null;
                128 & n.__u && (u = !!(32 & n.__u), a = [c = e.__e = n.__e]), (f = i.__b) && f(e);
                t: if ("function" == typeof I) try {
                    if (w = e.props, S = "prototype" in I && I.prototype.render, O = (f = I.contextType) && r[f.__c], E = f ? O ? O.props.value : f.__ : r, n.__c ? g = (p = e.__c = n.__c).__ = p.__E : (S ? e.__c = p = new I(w, E) : (e.__c = p = new C(w, E), p.constructor = I, p.render = G), O && O.sub(p), p.props = w, p.state || (p.state = {}), p.context = E, p.__n = r, h = p.__d = !0, p.__h = [], p._sb = []), S && null == p.__s && (p.__s = p.state), S && null != I.getDerivedStateFromProps && (p.__s == p.state && (p.__s = b({}, p.__s)), b(p.__s, I.getDerivedStateFromProps(w, p.__s))), d = p.props, v = p.state, p.__v = e, h) S && null == I.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), S && null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (S && null == I.getDerivedStateFromProps && w !== d && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, E), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, E) || e.__v == n.__v) {
                            for (e.__v != n.__v && (p.props = w, p.state = p.__s, p.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some((function(t) {
                                    t && (t.__ = e)
                                })), k = 0; k < p._sb.length; k++) p.__h.push(p._sb[k]);
                            p._sb = [], p.__h.length && s.push(p);
                            break t
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, E), S && null != p.componentDidUpdate && p.__h.push((function() {
                            p.componentDidUpdate(d, v, y)
                        }))
                    }
                    if (p.context = E, p.props = w, p.__P = t, p.__e = !1, P = i.__r, x = 0, S) {
                        for (p.state = p.__s, p.__d = !1, P && P(e), f = p.render(p.props, p.state, p.context), j = 0; j < p._sb.length; j++) p.__h.push(p._sb[j]);
                        p._sb = []
                    } else
                        do {
                            p.__d = !1, P && P(e), f = p.render(p.props, p.state, p.context), p.state = p.__s
                        } while (p.__d && ++x < 25);
                    p.state = p.__s, null != p.getChildContext && (r = b(b({}, r), p.getChildContext())), S && !h && null != p.getSnapshotBeforeUpdate && (y = p.getSnapshotBeforeUpdate(d, v)), L = f, null != f && f.type === T && null == f.key && (L = N(f.props.children)), c = A(t, m(L) ? L : [L], e, n, r, o, a, s, c, u, l), p.base = e.__e, e.__u &= -161, p.__h.length && s.push(p), g && (p.__E = p.__ = null)
                } catch (t) {
                    if (e.__v = null, u || null != a)
                        if (t.then) {
                            for (e.__u |= u ? 160 : 128; c && 8 == c.nodeType && c.nextSibling;) c = c.nextSibling;
                            a[a.indexOf(c)] = null, e.__e = c
                        } else
                            for (M = a.length; M--;) _(a[M]);
                    else e.__e = n.__e, e.__k = n.__k;
                    i.__e(t, e, n)
                } else null == a && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = B(n.__e, e, n, r, o, a, s, u, l);
                return (f = i.diffed) && f(e), 128 & e.__u ? void 0 : c
            }

            function H(t, e, n) {
                for (var r = 0; r < n.length; r++) U(n[r], n[++r], n[++r]);
                i.__c && i.__c(e, t), t.some((function(e) {
                    try {
                        t = e.__h, e.__h = [], t.some((function(t) {
                            t.call(e)
                        }))
                    } catch (t) {
                        i.__e(t, e.__v)
                    }
                }))
            }

            function N(t) {
                return "object" != typeof t || null == t || t.__b && t.__b > 0 ? t : m(t) ? t.map(N) : b({}, t)
            }

            function B(t, e, n, o, a, s, c, u, l) {
                var f, p, h, d, y, g, b, w = n.props,
                    S = e.props,
                    O = e.type;
                if ("svg" == O ? a = "http://www.w3.org/2000/svg" : "math" == O ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), null != s)
                    for (f = 0; f < s.length; f++)
                        if ((y = s[f]) && "setAttribute" in y == !!O && (O ? y.localName == O : 3 == y.nodeType)) {
                            t = y, s[f] = null;
                            break
                        }
                if (null == t) {
                    if (null == O) return document.createTextNode(S);
                    t = document.createElementNS(a, O, S.is && S), u && (i.__m && i.__m(e, s), u = !1), s = null
                }
                if (null == O) w === S || u && t.data == S || (t.data = S);
                else {
                    if (s = s && r.call(t.childNodes), w = n.props || v, !u && null != s)
                        for (w = {}, f = 0; f < t.attributes.length; f++) w[(y = t.attributes[f]).name] = y.value;
                    for (f in w)
                        if (y = w[f], "children" == f);
                        else if ("dangerouslySetInnerHTML" == f) h = y;
                    else if (!(f in S)) {
                        if ("value" == f && "defaultValue" in S || "checked" == f && "defaultChecked" in S) continue;
                        F(t, f, null, y, a)
                    }
                    for (f in S) y = S[f], "children" == f ? d = y : "dangerouslySetInnerHTML" == f ? p = y : "value" == f ? g = y : "checked" == f ? b = y : u && "function" != typeof y || w[f] === y || F(t, f, y, w[f], a);
                    if (p) u || h && (p.__html == h.__html || p.__html == t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
                    else if (h && (t.innerHTML = ""), A("template" == e.type ? t.content : t, m(d) ? d : [d], e, n, o, "foreignObject" == O ? "http://www.w3.org/1999/xhtml" : a, s, c, s ? s[0] : n.__k && E(n, 0), u, l), null != s)
                        for (f = s.length; f--;) _(s[f]);
                    u || (f = "value", "progress" == O && null == g ? t.removeAttribute("value") : null != g && (g !== t[f] || "progress" == O && !g || "option" == O && g != w[f]) && F(t, f, g, w[f], a), f = "checked", null != b && b != t[f] && F(t, f, b, w[f], a))
                }
                return t
            }

            function U(t, e, n) {
                try {
                    if ("function" == typeof t) {
                        var r = "function" == typeof t.__u;
                        r && t.__u(), r && null == e || (t.__u = t(e))
                    } else t.current = e
                } catch (t) {
                    i.__e(t, n)
                }
            }

            function V(t, e, n) {
                var r, o;
                if (i.unmount && i.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || U(r, null, e)), null != (r = t.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (t) {
                        i.__e(t, e)
                    }
                    r.base = r.__P = null
                }
                if (r = t.__k)
                    for (o = 0; o < r.length; o++) r[o] && V(r[o], e, n || "function" != typeof t.type);
                n || _(t.__e), t.__c = t.__ = t.__e = void 0
            }

            function G(t, e, n) {
                return this.constructor(t, n)
            }

            function K(t, e, n) {
                var o, a, s, c;
                e == document && (e = document.documentElement), i.__ && i.__(t, e), a = (o = "function" == typeof n) ? null : n && n.__k || e.__k, s = [], c = [], W(e, t = (!o && n || e).__k = w(T, null, [t]), a || v, v, e.namespaceURI, !o && n ? [n] : a ? null : e.firstChild ? r.call(e.childNodes) : null, s, !o && n ? n : a ? a.__e : e.firstChild, o, c), H(s, t, c)
            }

            function z(t, e) {
                K(t, e, z)
            }

            function q(t, e, n) {
                var i, o, a, s, c = b({}, t.props);
                for (a in t.type && t.type.defaultProps && (s = t.type.defaultProps), e) "key" == a ? i = e[a] : "ref" == a ? o = e[a] : c[a] = null == e[a] && null != s ? s[a] : e[a];
                return arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n), S(t.type, c, i || t.key, o || t.ref, null)
            }

            function $(t) {
                function e(t) {
                    var n, r;
                    return this.getChildContext || (n = new Set, (r = {})[e.__c] = this, this.getChildContext = function() {
                        return r
                    }, this.componentWillUnmount = function() {
                        n = null
                    }, this.shouldComponentUpdate = function(t) {
                        this.props.value != t.value && n.forEach((function(t) {
                            t.__e = !0, P(t)
                        }))
                    }, this.sub = function(t) {
                        n.add(t);
                        var e = t.componentWillUnmount;
                        t.componentWillUnmount = function() {
                            n && n.delete(t), e && e.call(t)
                        }
                    }), t.children
                }
                return e.__c = "__cC" + d++, e.__ = t, e.Provider = e.__l = (e.Consumer = function(t, e) {
                    return t.children(e)
                }).contextType = e, e
            }
            r = y.slice, i = {
                __e: function(t, e, n, r) {
                    for (var i, o, a; e = e.__;)
                        if ((i = e.__c) && !i.__) try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), null != i.componentDidCatch && (i.componentDidCatch(t, r || {}), a = i.__d), a) return i.__E = i
                        } catch (e) {
                            t = e
                        }
                    throw t
                }
            }, o = 0, C.prototype.setState = function(t, e) {
                var n;
                n = null != this.__s && this.__s != this.state ? this.__s : this.__s = b({}, this.state), "function" == typeof t && (t = t(b({}, n), this.props)), t && b(n, t), null != t && this.__v && (e && this._sb.push(e), P(this))
            }, C.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), P(this))
            }, C.prototype.render = T, a = [], c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(t, e) {
                return t.__v.__b - e.__v.__b
            }, x.__r = 0, l = /(PointerCapture)$|Capture$/i, f = 0, p = D(!1), h = D(!0), d = 0
        },
        3: (t, e, n) => {
            n.d(e, {
                addInlineCss: () => p,
                elemAnimate: () => C,
                elemAppend: () => d,
                elemBind: () => E,
                elemFromObject: () => h,
                elemHeight: () => S,
                elemIsInside: () => T,
                elemOffset: () => s.elemOffset,
                elemRemove: () => v,
                elemStyle: () => y,
                elemUnbind: () => k,
                elemWidth: () => w
            });
            var r, i = n(4),
                o = (n(6), n(8), n(9)),
                a = n(12),
                s = n(19),
                c = (n(20), n(26)),
                u = n(16),
                l = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                },
                f = (u.Wistia, (0, o.cachedDetect)()),
                p = function(t, e) {
                    var n = t || document.body || document.head,
                        r = document.createElement("style");
                    return r.id = (0, c.seqId)("wistia_", "_style"), r.setAttribute("type", "text/css"), r.className = "wistia_injected_style", n.appendChild(r, n.nextSibling), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e)), r
                },
                h = function(t) {
                    if ((0, i.isArray)(t)) {
                        for (var e = [], n = 0; n < t.length; n++) e.push(h(t[n]));
                        return e
                    }
                    var r = t.tagName || "div",
                        o = t.childNodes || [];
                    (0, i.isArray)(o) || (o = [o]);
                    var a = document.createElement(r);
                    for (var s in t)
                        if (l(t, s)) {
                            var c = t[s];
                            if ("childNodes" !== s && "tagName" !== s && "ref" !== s) {
                                var u = s.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                                if ("style" === s)
                                    if ((0, i.isObject)(c))
                                        for (var f in c) a.style[f] = c[f];
                                    else
                                        for (var p = c.split(";"), v = 0; v < p.length; v++) {
                                            var y = p[v].split(/\s*:\s*/),
                                                g = y[0],
                                                m = y[1];
                                            g && m && (a.style[g] = m)
                                        } else if ("events" === s)
                                            for (var b in c) {
                                                var _ = c[b];
                                                E(a, b, _)
                                            } else "className" === s || "class" === s ? a.className = c : "innerHTML" === s ? a.innerHTML = c : "innerText" === s ? a.innerText = c : null != c && "function" == typeof c.toString && a.setAttribute(u, c.toString())
                            }
                        }
                    for (var w = 0; w < o.length; w++) {
                        var S = o[w];
                        if ((0, i.isObject)(S)) {
                            var O = h(S);
                            d(a, O)
                        } else {
                            var T = document.createTextNode(S.toString());
                            d(a, T)
                        }
                    }
                    return "function" == typeof t.ref && t.ref(a), a
                },
                d = function(t, e) {
                    if ((0, i.isArray)(e))
                        for (var n = 0; n < e.length; n++) d(t, e[n]);
                    else t.tagName.includes("-") ? t.shadowRoot.appendChild(e, {
                        wistiaGridCaller: !0
                    }) : t.appendChild(e, {
                        wistiaGridCaller: !0
                    })
                },
                v = function(t) {
                    var e;
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList)
                        for (var n = 0; n < t.length; n++) v(t[n]);
                    else null == t || 1 !== t.nodeType && 3 !== t.nodeType || !(e = t.parentNode) || (e.removeChild(t), t = null)
                },
                y = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList) {
                        for (var o = [], s = 0; s < t.length; s++) {
                            var c = t[s];
                            1 === c.nodeType && o.push(y.apply(void 0, [c].concat(n)))
                        }
                        return o
                    }
                    if (2 === n.length) {
                        var u = n[0],
                            l = n[1];
                        t.style[u] = l
                    } else if (1 === n.length)
                        if ("string" == typeof n[0]) {
                            var f = n[0];
                            try {
                                return t.currentStyle ? t.currentStyle[f] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(f) : null
                            } catch (t) {
                                a.wlog.notice(t)
                            }
                        } else {
                            var p = b(n[0]);
                            for (var h in p) {
                                var d = p[h];
                                t.style[h] = d
                            }
                        }
                    else a.wlog.apply(void 0, ["Unexpected args", t].concat(n))
                },
                g = {
                    borderImage: !0,
                    mixBlendMode: !0,
                    transform: !0,
                    transition: !0,
                    transitionDuration: !0
                },
                m = ["webkit", "moz", "o", "ms"],
                b = function(t) {
                    if (f.chrome) return t;
                    var e = {};
                    for (var n in t) {
                        var r = t[n];
                        if (e[n] = r, g[n])
                            for (var i = m, o = 0; o < i.length; o++) {
                                var a = i[o] + n.charAt(0).toUpperCase() + n.slice(1);
                                n[a] || (e[a] = r)
                            }
                    }
                    return e
                },
                _ = function(t, e) {
                    if (!window.getComputedStyle) return null;
                    var n = window.getComputedStyle(t, null);
                    return null == n ? null : null != e ? n[e] : n
                },
                w = function(t) {
                    if (t === window) return window.innerWidth ? window.innerWidth : document.documentElement ? document.documentElement.offsetWidth : document.body.offsetWidth;
                    if (t === document) {
                        var e = document.body,
                            n = document.documentElement;
                        return Math.max(e.scrollWidth, e.offsetWidth, n.clientWidth, n.scrollWidth, n.offsetWidth)
                    }
                    var r;
                    return (r = _(t, "width")) && null != r ? parseFloat(r) : t.currentStyle ? t.offsetWidth : -1
                },
                S = function(t) {
                    if (t === window) return window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.offsetHeight : document.body.offsetHeight;
                    if (t === document) {
                        var e = document.body,
                            n = document.documentElement;
                        return Math.max(e.scrollHeight, e.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)
                    }
                    var r;
                    return (r = _(t, "height")) && null != r ? parseFloat(r) : t.currentStyle ? t.offsetHeight : -1
                },
                O = function(t) {
                    for (var e = t, n = []; e = e.parentNode;) n.push(e);
                    return n
                },
                T = function(t, e) {
                    return t === e || function(t, e) {
                        for (var n = O(t), r = 0; r < n.length; r++)
                            if (n[r] === e) return !0;
                        return !1
                    }(t, e)
                },
                C = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    n = (0, i.merge)({
                        time: 400,
                        easing: "ease"
                    }, n);
                    var r = function(t, e, n) {
                        var r = [];
                        for (var i in t) r.push("".concat(i, " ").concat(e, "ms ").concat(n));
                        return r.join(",")
                    }(e, n.time, n.easing);
                    y(t, {
                        transition: r
                    }), j((function() {
                        y(t, e), setTimeout((function() {
                            y(t, {
                                transition: ""
                            }), "function" == typeof n.callback && n.callback()
                        }), n.time)
                    }))
                },
                E = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = function(r) {
                            (r = r || window.event).pageX || r.pageY || !r.clientX && !r.clientY || (r.pageX = r.clientX + A(), r.pageY = r.clientY + x()), r.preventDefault || (r.preventDefault = function() {
                                r.returnValue = !1
                            }), r.stopPropagation || (r.stopPropagation = function() {
                                r.cancelBubble = !0
                            }), null == r.which && (r.which = null != r.charCode ? r.charCode : r.keyCode), null == r.which && null != r.button && (1 & r.button ? r.which = 1 : 2 & r.button ? r.which = 3 : 4 & r.button ? r.which = 2 : r.which = 0), r.target || r.srcElement && (r.target = r.srcElement), r.target && 3 === r.target.nodeType && (r.target = r.target.parentNode);
                            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                            var s = n.apply(r.target, [r].concat(o));
                            return s === k && k(t, e, n), s
                        };
                    u.Wistia._elemBind = u.Wistia._elemBind || {};
                    var o = P(t, e, n);
                    return u.Wistia._elemBind[o] = i, i.elem = t, i.event = e, t.addEventListener(e, i, r),
                        function() {
                            k(t, e, n, r)
                        }
                },
                k = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (null != t && null != t._wistiaElemId && null != n && n._wistiaBindId) {
                        var i = P(t, e, n),
                            o = u.Wistia._elemBind[i];
                        return o && (t.removeEventListener(e, o, r), o.elem = null, o.event = null), delete u.Wistia._elemBind[i]
                    }
                },
                P = function(t, e, n) {
                    return t._wistiaElemId = t._wistiaElemId || (0, c.seqId)("wistia_elem_"), n._wistiaBindId = n._wistiaBindId || (0, c.seqId)("wistia_bind_"), "".concat(t._wistiaElemId, ".").concat(e, ".").concat(n._wistiaBindId)
                },
                x = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollTop || e && e.scrollTop || 0;
                    e && (e.scrollTop = t), n && (n.scrollTop = t)
                },
                A = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollLeft || e && e.scrollLeft || 0;
                    e && (e.scrollLeft = t), n && (n.scrollLeft = t)
                },
                j = function(t) {
                    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                        return setTimeout(t, 1e3 / 60)
                    })(t)
                };
            ["auxclick", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mouseup", "reset", "submit", "touchend", "touchstart"].forEach((function(t) {
                E(document, t, (function(t) {
                    r = t, Date.now(), setTimeout((function() {
                        r === t && (r = void 0)
                    }), 0)
                }), !f.passiveSupported || {
                    capture: !0,
                    passive: !0
                })
            }))
        },
        4: (t, e, n) => {
            n.d(e, {
                cast: () => v,
                clone: () => u,
                eachLeaf: () => x,
                equalsDeep: () => k,
                getDeep: () => l,
                isArray: () => b,
                isEmpty: () => C,
                isObject: () => w,
                merge: () => o,
                setAndPreserveUndefined: () => p,
                setDeep: () => f,
                unsetDeep: () => d
            });
            n(5);
            var r = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                },
                i = Array.prototype.slice,
                o = function(t) {
                    if (0 == (arguments.length <= 1 ? 0 : arguments.length - 1)) return t;
                    for (var e = 0; e < (arguments.length <= 1 ? 0 : arguments.length - 1); e++) a(t, e + 1 < 1 || arguments.length <= e + 1 ? void 0 : arguments[e + 1]);
                    return t
                },
                a = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : s,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : c;
                    if (b(e)) {
                        b(t) || (t = []);
                        for (var o = 0; o < e.length; o++) {
                            var u = e[o];
                            null == t[o] && null != u && (b(u) ? t[o] = [] : w(u) && (t[o] = {}));
                            var l = a(t[o], u, n);
                            i(e, o, l) ? delete t[o] : t[o] = l
                        }
                        return n(t)
                    }
                    if (w(e)) {
                        for (var f in e)
                            if (r(e, f) && (r(t, f) || null == t[f])) {
                                var p = e[f];
                                b(p) ? (b(t[f]) || (t[f] = []), a(t[f], p, n), t[f] = n(t[f])) : w(p) ? (w(t[f]) || (t[f] = {}), a(t[f], p, n), t[f] = n(t[f])) : null == t ? (t = {}, i(e, f, p) || (t[f] = n(p))) : i(e, f, p) ? delete t[f] : t[f] = n(p)
                            }
                        return n(t)
                    }
                    return n(e)
                },
                s = function(t) {
                    return t
                },
                c = function(t, e, n) {
                    return null == n
                },
                u = function(t, e) {
                    return b(t) ? a([], t, e) : a({}, t, e)
                },
                l = function(t, e, n) {
                    e = "string" == typeof e ? e.split(".") : i.call(e);
                    for (var o, a = t; null != t && e.length;) {
                        var s = e.shift();
                        void 0 !== t[s] && (w(t[s]) || b(t[s])) || !n || (0 === s ? (t = a[o] = [])[s] = {} : t[s] = {}), a = t, o = s, t = r(t, s) ? t[s] : void 0
                    }
                    return t
                },
                f = function(t, e, n) {
                    return h(t, e, n, !0)
                },
                p = function(t, e, n) {
                    return h(t, e, n, !1)
                },
                h = function(t, e, n) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = (e = "string" == typeof e ? e.split(".") : i.call(e)).pop();
                    null != (t = l(t, e, !0)) && (w(t) || b(t)) && null != o && (r && null == n ? delete t[o] : t[o] = n)
                },
                d = function(t, e) {
                    return f(t, e)
                },
                v = function(t) {
                    return null == t ? t : w(t) || b(t) ? g(t) : y("".concat(t), t)
                },
                y = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                    return /^-?[1-9]\d*?$/.test(t) ? parseInt(t, 10) : "0" === t || "-0" === t ? 0 : /^-?\d*\.\d+$/.test(t) ? parseFloat(t) : !!/^true$/i.test(t) || !/^false$/i.test(t) && e
                },
                g = function(t) {
                    return a(t, t, (function(t) {
                        return "string" == typeof t ? y(t) : t
                    }), (function() {
                        return !1
                    }))
                },
                m = /^\s*function Array()/,
                b = function(t) {
                    return null != t && t.push && m.test(t.constructor)
                },
                _ = /^\s*function Object()/,
                w = function(t) {
                    return null != t && "object" == typeof t && _.test(t.constructor)
                },
                S = /^\s*function RegExp()/,
                O = /^string|number|boolean|function$/i,
                T = function(t) {
                    return null != t && (O.test(typeof t) || function(t) {
                        return null != t && S.test(t.constructor)
                    }(t))
                },
                C = function(t) {
                    return null == t || (!(!b(t) || t.length) || !!w(t) && !Object.keys(t).length)
                },
                E = function(t, e) {
                    if (t === e) return !0;
                    if (null != t && null == e || null == t && null != e) return !1;
                    var n = !0;
                    return x(t, (function(t, r) {
                        t !== l(e, r) && (n = !1)
                    })), n
                },
                k = function(t, e) {
                    return E(t, e) && E(e, t)
                },
                P = function(t, e, n, o, a) {
                    if (null == n && (n = []), T(t)) e(t, n, o, a);
                    else if (w(t) || b(t)) {
                        for (var s in e(t, n, o, a), t)
                            if (r(t, s)) {
                                var c = i.call(n);
                                c.push(s), P(t[s], e, c, t, s)
                            }
                    } else e(t, n, o, a)
                },
                x = function(t, e) {
                    P(t, (function(t, n, r, i) {
                        b(t) || w(t) || e(t, n, r, i)
                    }))
                }
        },
        5: (t, e, n) => {
            n.d(e, {
                assign: () => i
            });
            var r = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                },
                i = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    if (Object.assign) return Object.assign.apply(Object, [t].concat(n));
                    for (var i = 0; i < n.length; i++) o(t, n[i]);
                    return t
                },
                o = function(t, e) {
                    for (var n in e) r(e, n) && (t[n] = e[n]);
                    return t
                }
        },
        6: (t, e, n) => {
            n(7)
        },
        7: (t, e, n) => {
            n.d(e, {
                poll: () => r
            });
            var r = function(t, e, n, r, i) {
                var o = null,
                    a = (new Date).getTime(),
                    s = function() {
                        (new Date).getTime() - a > r ? "function" == typeof i && i() : t() ? e() : (clearTimeout(o), o = setTimeout(s, n))
                    };
                o = setTimeout(s, 1)
            }
        },
        8: (t, e, n) => {
            n.d(e, {
                pageLoaded: () => r
            });
            var r = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 4e3,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : document,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : window;
                if (/loaded|complete/.test(n.readyState)) setTimeout(t, 0);
                else {
                    var i = function() {
                            r.removeEventListener("load", o, !1)
                        },
                        o = function() {
                            clearTimeout(a), i(), t()
                        };
                    r.addEventListener("load", o, !1);
                    var a = setTimeout((function() {
                        i(), t()
                    }), e)
                }
            }
        },
        9: (t, e, n) => {
            n.d(e, {
                cachedDetect: () => H,
                detectIsMobile: () => B
            });
            var r, i = n(10),
                o = n(11),
                a = navigator.userAgent,
                s = null,
                c = /(webkit)[ /]([^\s]+)/i,
                u = /OPR\/([^\s]+)/i,
                l = /(edge)\/(\d+(?:\.\d+)?)/i,
                f = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
                p = /(android) ([^;]+)/i,
                h = /(iphone)/i,
                d = /(Windows Phone OS (\d+(?:\.\d+)?))/,
                v = /OS (\d+)_(\d+)/i,
                y = /(firefox)/i,
                g = /Mobile VR/i,
                m = /Version\/([^\s]+)/i,
                b = function() {
                    return (w()[1] || "webkit").toLowerCase()
                },
                _ = function() {
                    return w()[2]
                },
                w = function() {
                    var t;
                    return (t = a.match(l)) || (t = a.match(c)) || (t = a.match(u)) ? t : t ? (null != document.documentMode && (t[2] = document.documentMode), t) : (t = a.match(f)) || []
                },
                S = function() {
                    var t = a.match(p);
                    return null != t && {
                        version: t[2]
                    }
                },
                O = function() {
                    return h.test(a)
                },
                T = function() {
                    return A() > 0 || S() || E()
                },
                C = function() {
                    try {
                        var t = matchMedia("(hover:hover)");
                        if ("not all" !== t.media) return t.matches
                    } catch (t) {}
                    return !T()
                },
                E = function() {
                    return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
                },
                k = function() {
                    return c.test(a) && !/chrome/i.test(a) && !E() && !O()
                },
                P = function() {
                    return !(!/Chrome/.test(a) || !/Google Inc/.test(navigator.vendor)) && {
                        version: x()
                    }
                },
                x = function() {
                    var t = a.match(/\bChrome\/([^\s]+)/);
                    return t && t[1]
                },
                A = function() {
                    var t = a.match(v),
                        e = a.match(m);
                    return null != t ? parseFloat("".concat(t[1], ".").concat(t[2])) : null != e && e[1] && E() ? parseFloat(e[1]) : 0
                },
                j = function() {
                    return l.test(a)
                },
                L = function() {
                    return y.test(a)
                },
                M = function() {
                    var t = document.createElement("video"),
                        e = !1;
                    try {
                        if (t.canPlayType) {
                            var n = 'video/mp4; codecs="avc1.42E01E';
                            (e = {}).h264 = !!t.canPlayType("".concat(n, '"')) || !!t.canPlayType("".concat(n, ', mp4a.40.2"')), e.webm = !!t.canPlayType('video/webm; codecs="vp9, vorbis"'), e.nativeHls = !!t.canPlayType("application/vnd.apple.mpegURL")
                        }
                    } catch (t) {
                        e = {
                            ogg: !1,
                            h264: !1,
                            webm: !1,
                            nativeHls: !1
                        }
                    }
                    return e
                },
                I = function() {
                    try {
                        return "localStorage" in i.root && null != i.root.localStorage
                    } catch (t) {
                        return !1
                    }
                },
                R = ["WebKit", "Moz", "O", "Ms", ""],
                F = function() {
                    for (var t = 0; t < R.length; t++) {
                        var e = "".concat(R[t], "MutationObserver");
                        if (i.root[e]) return e
                    }
                    return null
                },
                D = function() {
                    if (null != r) return r;
                    try {
                        var t = Object.defineProperty({}, "passive", {
                            get: function() {
                                r = !0
                            }
                        });
                        window.addEventListener("test", null, t)
                    } catch (t) {
                        r = !1
                    }
                    return r
                },
                W = function() {
                    var t = P(),
                        e = L(),
                        n = j(),
                        r = u.test(a),
                        i = t && _() >= 32,
                        o = t && _() >= 75 && S(),
                        s = e && _() >= 65,
                        c = e && _() >= 67 && S(),
                        l = n && _() >= 18,
                        f = r && _() >= 19;
                    return i || o || s || c || l || f
                },
                H = function() {
                    return s || (s = N())
                },
                N = function() {
                    var t, e, n, r = {
                        browser: {
                            version: _()
                        },
                        edge: j(),
                        firefox: L(),
                        gearvr: g.test(a),
                        hdr: !(null === (e = (n = window).matchMedia) || void 0 === e || !e.call(n, "(dynamic-range: high)").matches) || !!(screen.colorDepth && screen.colorDepth >= 30),
                        android: S(),
                        oldandroid: S() && parseFloat(S().version) < 4.1,
                        iphone: O(),
                        ipad: E(),
                        safari: k(),
                        chrome: P(),
                        winphone: {
                            version: d.test(a)[2]
                        },
                        ios: {
                            version: A()
                        },
                        windows: /win/i.test(navigator.platform),
                        mac: /mac/i.test(navigator.platform),
                        retina: null != i.root.devicePixelRatio && i.root.devicePixelRatio > 1,
                        hoverIsNatural: C(),
                        touchScreen: T(),
                        video: M(),
                        mediaSource: i.root.MediaSource && i.root.MediaSource.isTypeSupported("".concat('video/mp4; codecs="avc1.42E01E', ', mp4a.40.2"')),
                        nativeHls: (O() || E() || k()) && M().nativeHls,
                        localstorage: I(),
                        fullscreenEnabled: document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
                        vulcanV2Support: (t = /webkit|mozilla|edge/.test(b()), !!(O() || E() || S()) || Boolean(t && M().h264 && Object.defineProperties)),
                        mutationObserver: F(),
                        callingPlayRequiresEventContext: A() > 0 || S() || k(),
                        passiveSupported: D(),
                        webp: W(),
                        performanceMeasure: (0, o.hasPerformanceMeasureSupport)()
                    };
                    return r.browser[b()] = !0, r
                },
                B = function() {
                    var t = S(),
                        e = E(),
                        n = O();
                    return t || e || n
                }
        },
        10: (t, e, n) => {
            var r;
            n.d(e, {
                root: () => i
            });
            try {
                (r = self).self !== r && void 0 !== r.self && "undefined" != typeof window && (r = window)
            } catch (t) {
                r = "undefined" != typeof globalThis ? globalThis : window
            }
            var i = r
        },
        11: (t, e, n) => {
            n.d(e, {
                hasPerformanceMeasureSupport: () => r
            });
            var r = function() {
                var t = window.performance;
                return Boolean(t) && Boolean(t.measure)
            }
        },
        12: (t, e, n) => {
            n.d(e, {
                wlog: () => y
            });
            var r = n(13),
                i = n(16);

            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var s = {
                    ERROR: 0,
                    WARNING: 1,
                    NOTICE: 2,
                    INFO: 3,
                    DEBUG: 4,
                    error: 0,
                    warning: 1,
                    notice: 2,
                    info: 3,
                    debug: 4
                },
                c = function() {},
                u = function(t) {
                    var e = this;
                    null == t && (t = {});
                    return e.error = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(0, n)
                    }, e.warn = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(1, n)
                    }, e.notice = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(1, n)
                    }, e.info = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(3, n)
                    }, e.debug = function() {
                        for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
                        return e.log(4, n)
                    }, e.ctx = t, e.ctx.initializedAt || e.reset(), e
                },
                l = u.prototype;
            l.reset = function() {
                this.ctx.level = 0, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = (new Date).getTime()
            }, l.setLevel = function(t) {
                var e = this.logFunc(3);
                null != s[t] ? (this.ctx.level = s[t], e('Log level set to "'.concat(t, '" (').concat(s[t], ")"))) : e('Unknown log level "'.concat(t, '"'))
            }, l.setGrep = function(t) {
                this.ctx.grep = t
            }, l.setGrepv = function(t) {
                this.ctx.grepv = t
            }, l.first1000LogLines = function() {
                return this.ctx.first1000LogLines
            }, l.last1000LogLines = function() {
                return this.ctx.last1000LogLines
            }, l.matchedGrep = function(t) {
                var e = !1;
                if (this.ctx.grep || this.ctx.grepv) {
                    for (var n = [], r = 0; r < t.length; r++) try {
                        var i = t[r];
                        n.push(i.toString && i.toString())
                    } catch (t) {
                        n.push("")
                    }
                    var o = n.join(" "),
                        a = !this.ctx.grep || o.match(this.ctx.grep),
                        s = !this.ctx.grepv || !o.match(this.ctx.grepv);
                    e = a && s
                } else e = !0;
                return e
            }, l.now = function() {
                return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now().toFixed(3) : Date.now ? Date.now() - this.ctx.initializedAt : (new Date).getTime() - this.ctx.initializedAt
            }, l.messagesToLogLine = function(t, e, n) {
                var r, i = [t, e];
                i = i.concat(n);
                try {
                    (r = i.join(" ") || "").length > 200 && (r = r.slice(0, 200))
                } catch (t) {
                    r = "could not serialize"
                }
                return r
            }, l.persistLine = function(t) {
                this.ctx.first1000LogLines.length < 1e3 ? this.ctx.first1000LogLines.push(t) : (this.ctx.last1000LogLines.length >= 1e3 && this.ctx.last1000LogLines.shift(), this.ctx.last1000LogLines.push(t))
            }, l.log = function(t, e) {
                var n, i = t <= this.ctx.level,
                    a = t < 4,
                    s = (i || a) && this.matchedGrep(e);
                if (0 === t && (0, r.globalTrigger)("problem", {
                        type: "error-logged",
                        data: {
                            messages: e
                        }
                    }), s && (i || a) && (n = this.now()), a && s) {
                    var c = this.messagesToLogLine(t, n, e);
                    this.persistLine(c)
                }
                if (i && s) {
                    var u, l = this.logFunc(t);
                    1 === e.length && (u = e[0]) instanceof Error ? (l(u.message), u.stack && l(u.stack)) : l.apply(void 0, o(e))
                }
            };
            var f = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.error.apply(console, e)
                },
                p = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.warn.apply(console, e)
                },
                h = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.info.apply(console, e)
                },
                d = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.debug.apply(console, e)
                },
                v = function(t) {
                    console.log.apply(console, t)
                };
            l.logFunc = function(t) {
                return null == t && (t = this.level), console ? (0 === t ? e = f : 1 === t ? e = p : 3 === t ? e = h : 4 === t && (e = d), e || (e = v), "function" != typeof e && (this.noConsoleLog = !0, e = c), e) : c;
                var e
            }, l.maybePrefix = function(t, e) {
                if (t) {
                    if ("function" == typeof t) try {
                        t = t()
                    } catch (e) {
                        t = 'prefix err "'.concat(e.message, '"')
                    }
                    return t instanceof Array ? t.concat(e) : [t].concat(e)
                }
                return e
            }, l.getPrefixedFunctions = function(t) {
                var e = this;
                return {
                    log: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(0, e.maybePrefix(t, r))
                    },
                    error: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(0, e.maybePrefix(t, r))
                    },
                    warn: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(1, e.maybePrefix(t, r))
                    },
                    notice: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(1, e.maybePrefix(t, r))
                    },
                    info: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(3, e.maybePrefix(t, r))
                    },
                    debug: function() {
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return e.log(4, e.maybePrefix(t, r))
                    }
                }
            }, i.Wistia && null == i.Wistia.wlogCtx && (i.Wistia.wlogCtx = {});
            var y = new u(i.Wistia.wlogCtx)
        },
        13: (t, e, n) => {
            n.d(e, {
                globalTrigger: () => o
            });
            var r = n(14),
                i = n(16);
            (0, r.makeWbindable)(i.Wistia);
            i.Wistia.bind.bind(i.Wistia), i.Wistia.on.bind(i.Wistia), i.Wistia.off.bind(i.Wistia), i.Wistia.rebind.bind(i.Wistia);
            var o = i.Wistia.trigger.bind(i.Wistia);
            i.Wistia.unbind.bind(i.Wistia)
        },
        14: (t, e, n) => {
            n.d(e, {
                makeWbindable: () => a
            });
            var r = n(15),
                i = n(16),
                o = n(17);
            i.Wistia.bindable || (i.Wistia.EventShepherdManager || (i.Wistia.EventShepherdManager = {}), i.Wistia.bindable = {
                bind: function(t, e) {
                    if ("crosstime" === t && this.crossTime) return this.crossTime.addBinding(arguments[1], arguments[2]), this;
                    if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]), this;
                    var n = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && n) {
                        var a = s(n);
                        return void 0 === i.Wistia.EventShepherdManager[a] && (i.Wistia.EventShepherdManager[a] = new o.EventShepherd), i.Wistia.EventShepherdManager[a].addListener(t, n, e), this
                    }
                    if (e) return r.bind.call(this, t, e), this;
                    i.Wistia.warn && i.Wistia.warn(this.constructor.name, "bind", "falsey value passed in as callback:", e)
                },
                unbind: function(t, e) {
                    if ("crosstime" === t && this.crossTime) return e ? this.crossTime.removeBinding(arguments[1], arguments[2]) : this.crossTime.removeAllBindings(), this;
                    if ("betweentimes" === t && this.betweenTimes) return e ? this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]) : this.betweenTimes.removeAllBindings(), this;
                    var n = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && n) {
                        var a = s(n);
                        return void 0 === i.Wistia.EventShepherdManager[a] || i.Wistia.EventShepherdManager[a].removeListener(t, n, e), this
                    }
                    return e ? r.unbind.call(this, t, e) : this._bindings && (this._bindings[t] = []), this._bindings && this._bindings[t] && !this._bindings[t].length && (this._bindings[t] = null, delete this._bindings[t]), this
                },
                on: function(t, e) {
                    var n = arguments,
                        a = this;
                    if ("crosstime" === t && this.crossTime) return this.crossTime.addBinding(arguments[1], arguments[2]),
                        function() {
                            a.crossTime.removeBinding(n[1], n[2])
                        };
                    if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.addBinding(arguments[1], arguments[2], arguments[3]),
                        function() {
                            a.betweenTimes.removeBinding(n[1], n[2], n[3])
                        };
                    var c = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && c) {
                        var u = s(c);
                        return void 0 === i.Wistia.EventShepherdManager[u] && (i.Wistia.EventShepherdManager[u] = new o.EventShepherd(c)), i.Wistia.EventShepherdManager[u].addListener(t, c, e),
                            function() {
                                i.Wistia.EventShepherdManager[u].removeListener(t, c, e)
                            }
                    }
                    return r.bind.call(this, t, e)
                },
                off: function(t, e) {
                    if ("crosstime" === t && this.crossTime) return this.crossTime.removeBinding(arguments[1], arguments[2]);
                    if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]);
                    var n = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && n) {
                        var a = s(n);
                        return void 0 === i.Wistia.EventShepherdManager[a] ? function() {} : i.Wistia.EventShepherdManager[a].removeListener(t, n, e)
                    }
                    return r.unbind.call(this, t, e)
                },
                rebind: function(t, e) {
                    return this.unbind(t, e), this.bind(t, e), this
                },
                trigger: function(t) {
                    for (var e, n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) i[o - 1] = arguments[o];
                    return (e = r.trigger).call.apply(e, [this, t].concat(i)), this
                },
                bindNamed: function() {
                    return r.bindNamed.apply(this, arguments)
                },
                unbindNamed: function() {
                    return r.unbindNamed.apply(this, arguments)
                },
                unbindAllInNamespace: function() {
                    return r.unbindAllInNamespace.apply(this, arguments)
                }
            });
            var a = function(t) {
                    for (var e in i.Wistia.bindable) {
                        var n = i.Wistia.bindable[e];
                        t[e] || (t[e] = n)
                    }
                },
                s = function(t) {
                    return null != t && t.mediaId ? t.mediaId : null != t && t.id ? t.id : void 0
                }
        },
        15: (t, e, n) => {
            n.d(e, {
                bind: () => c,
                bindNamed: () => d,
                bindify: () => m,
                trigger: () => f,
                unbind: () => u,
                unbindAllInNamespace: () => y,
                unbindNamed: () => v
            });
            var r = n(16),
                i = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                };

            function o(t) {
                return function(t) {
                    if (Array.isArray(t)) return a(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var s = Array.prototype.slice,
                c = function(t, e) {
                    var n = this;
                    return n._bindings || (n._bindings = {}), n._bindings[t] || (n._bindings[t] = []), n._bindings[t].push(e),
                        function() {
                            n.unbind(t, e)
                        }
                },
                u = function(t, e) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var n = [], r = 0; r < this._bindings[t].length; r++) {
                        var i = this._bindings[t][r];
                        i !== e && n.push(i)
                    }
                    this._bindings[t] = n
                },
                l = function(t, e) {
                    return this.unbind(t, e), this.bind(t, e), {
                        event: t,
                        fn: e
                    }
                },
                f = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return this._bindings && null != this._bindings.all && p.apply(this, ["all", t].concat(n)), p.apply(this, [t].concat(n))
                },
                p = function(t) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var e, n = s.call(arguments, 1), i = o(this._bindings[t]), a = 0; a < i.length; a++) {
                        var c = i[a];
                        try {
                            c.apply(this, n) === this.unbind && (null == e && (e = []), e.push({
                                event: t,
                                fn: c
                            }))
                        } catch (t) {
                            if (this._throwTriggerErrors) throw t;
                            r.Wistia.error && r.Wistia.error(t)
                        }
                    }
                    if (e)
                        for (var u = 0; u < e.length; u++) {
                            var l = e[u];
                            this.unbind(l.event, l.fn)
                        }
                    return this
                },
                h = function(t, e) {
                    null == t._namedBindings && (t._namedBindings = {}), null == t._namedBindings[e] && (t._namedBindings[e] = {})
                },
                d = function(t, e, n, r) {
                    return this.unbindNamed(t, e),
                        function(t, e, n, r, i) {
                            h(t, e), t._namedBindings[e][n] = {
                                event: r,
                                fn: i
                            }
                        }(this, t, e, n, r), this.bind(n, r),
                        function() {
                            this.unbindNamed(t, e)
                        }
                },
                v = function(t, e) {
                    h(this, t);
                    var n = function(t, e, n) {
                        return h(t, e), t._namedBindings[e][n]
                    }(this, t, e);
                    if (n) {
                        var r = n.event,
                            i = n.fn;
                        this.unbind(r, i)
                    }
                    var o = this._namedBindings;
                    return delete o[t][e], g(o[t]) && delete o[t], this
                },
                y = function(t) {
                    var e = this._namedBindings && this._namedBindings[t];
                    if (null == e) return this;
                    for (var n in e) i(e, n) && this.unbindNamed(t, n)
                },
                g = function(t) {
                    for (var e in t)
                        if (i(t, e)) return !1;
                    return !0
                },
                m = function(t) {
                    return t.bind = c, t.unbind = u, t.on = c, t.off = u, t.rebind = l, t.trigger = f, t.bindNamed = d, t.unbindNamed = v, t.unbindAllInNamespace = y, t
                };
            m(function() {}.prototype)
        },
        16: (t, e, n) => {
            n.d(e, {
                Wistia: () => i
            });
            var r = n(10);
            null == r.root.Wistia && (r.root.Wistia = {}), null == r.root.Wistia._destructors && (r.root.Wistia._destructors = {}), null == r.root.Wistia._initializers && (r.root.Wistia._initializers = {}), null == r.root.Wistia._remoteData && (r.root.Wistia._remoteData = new Map), null == r.root.Wistia.api && (r.root.Wistia.api = function() {
                return console.error("Accessed Wistia.api() before it was initialized"), null
            }), null == r.root.Wistia.defineControl && (r.root.Wistia.defineControl = function() {
                return console.error("Accessed Wistia.defineControl() before it was initialized"), null
            }), null == r.root.Wistia.EventShepherdManager && (r.root.Wistia.EventShepherdManager = {}), null == r.root.Wistia.mixin && (r.root.Wistia.mixin = function(t) {
                var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                Object.keys(e).forEach((function(n) {
                    (function(t, e) {
                        if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                        return Object.prototype.hasOwnProperty.call(Object(t), e)
                    })(e, n) && (t[n] = e[n])
                }))
            }), null == r.root.Wistia.playlistMethods && (r.root.Wistia.playlistMethods = new Map), null == r.root.Wistia.PublicApi && (r.root.Wistia.PublicApi = null), null == r.root.Wistia.uncacheMedia && (r.root.Wistia.uncacheMedia = function() {
                return console.error("Accessed Wistia.uncacheMedia() before it was initialized"), null
            }), null == r.root.Wistia.VisitorKey && (r.root.Wistia.VisitorKey = null), null == r.root.Wistia.visitorKey && (r.root.Wistia.visitorKey = null), null == r.root.Wistia.wistia && (r.root.Wistia.wistia = void 0), null == r.root.Wistia._mediaDataPromises && (r.root.Wistia._mediaDataPromises = {}), null == r.root.Wistia._liveStreamPollingPromises && (r.root.Wistia._liveStreamPollingPromises = {}), null == r.root.Wistia.first && (r.root.Wistia.first = function() {
                var t;
                return null !== (t = r.root.Wistia.api()) && void 0 !== t ? t : document.querySelector("wistia-player")
            });
            var i = r.root.Wistia
        },
        17: (t, e, n) => {
            function r(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, i(r.key), r)
                }
            }

            function i(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            n.d(e, {
                EventShepherd: () => s,
                convertedEventNames: () => o
            });
            var o = {
                    mutechange: n(18).MUTE_CHANGE_EVENT
                },
                a = {
                    mutechange: function(t) {
                        return t.isMuted
                    }
                },
                s = function() {
                    return t = function t() {
                        var e, n, r;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e = this, r = {}, (n = i(n = "convertedEventsMap")) in e ? Object.defineProperty(e, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[n] = r
                    }, (e = [{
                        key: "addListener",
                        value: function(t, e, n) {
                            var r, i = null !== (r = o[t]) && void 0 !== r ? r : t;
                            this.convertedEventsMap[i] || (this.convertedEventsMap[i] = []);
                            var s = function(e) {
                                if (a[t]) {
                                    var r = a[t](e.detail);
                                    n(r)
                                } else n()
                            };
                            this.convertedEventsMap[i].push({
                                givenCallback: n,
                                eventListenerCallback: s
                            }), e.addEventListener(i, s)
                        }
                    }, {
                        key: "removeAllListeners",
                        value: function(t) {
                            var e = this;
                            Object.keys(this.convertedEventsMap).forEach((function(n) {
                                var r;
                                null === (r = e.convertedEventsMap[n]) || void 0 === r || r.forEach((function(e) {
                                    t.removeEventListener(n, e.eventListenerCallback)
                                })), e.convertedEventsMap[n] = []
                            }))
                        }
                    }, {
                        key: "removeListener",
                        value: function(t, e, n) {
                            var r, i = this,
                                a = null !== (r = o[t]) && void 0 !== r ? r : t,
                                s = [];
                            n ? (e.removeEventListener(a, n), this.convertedEventsMap[a] && (this.convertedEventsMap[a].forEach((function(t, r) {
                                t.givenCallback === n && (s.push(r), e.removeEventListener(a, t.eventListenerCallback))
                            })), s.forEach((function(t) {
                                i.convertedEventsMap[a] && i.convertedEventsMap[a].splice(t, 1)
                            })))) : this.convertedEventsMap[a] = []
                        }
                    }]) && r(t.prototype, e), n && r(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                    var t, e, n
                }()
        },
        18: (t, e, n) => {
            n.d(e, {
                MUTE_CHANGE_EVENT: () => r
            });
            var r = "mute-change"
        },
        19: (t, e, n) => {
            var r;
            n.d(e, {
                elemOffset: () => o
            });
            var i = function() {
                    if (null != r) return r;
                    var t = document.createElement("div");
                    return t.style.paddingLeft = t.style.width = "1px", document.body.appendChild(t), r = 2 === t.offsetWidth, document.body.removeChild(t), r
                },
                o = function(t) {
                    var e, n, r = document.body,
                        o = document.defaultView,
                        s = document.documentElement,
                        c = t.getBoundingClientRect(),
                        u = s.clientTop || r.clientTop || 0,
                        l = s.clientLeft || r.clientLeft || 0;
                    e = o && null != o.pageYOffset ? o.pageYOffset : i() && s && null != s.scrollTop ? s.scrollTop : r.scrollTop, n = o && null != o.pageXOffset ? o.pageXOffset : i() && s && null != s.scrollLeft ? s.scrollLeft : r.scrollLeft;
                    var f = a(t);
                    return {
                        height: c.height * f,
                        top: c.top * f + e - u,
                        left: c.left * f + n - l,
                        width: c.width * f,
                        zoom: f
                    }
                },
                a = function(t) {
                    return t && t !== document.documentElement ? a(t.parentElement) * (getComputedStyle(t).zoom || 1) : 1
                }
        },
        20: (__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {
            __webpack_require__.d(__webpack_exports__, {
                execScriptTags: () => execScriptTags,
                getScriptTags: () => getScriptTags,
                removeScriptTags: () => removeScriptTags
            });
            var utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(21),
                getScriptTags = function(t) {
                    return t.match(/<script.*?src[^>]*>\s*<\/script>|<script.*?>[\s\S]+?<\/script>/gi) || []
                },
                scriptTagsToRunScriptsInput = function scriptTagsToRunScriptsInput(scriptTags) {
                    if (!scriptTags) return [];
                    scriptTags instanceof Array || (scriptTags = getScriptTags(scriptTags));
                    for (var hashes = [], _loop = function _loop() {
                            var scriptTag = scriptTags[i],
                                hash = {},
                                matches = scriptTag.match(/<script.*?>/i);
                            if (matches && (matches = matches[0].match(/src="([^"]+)"/i), matches && (hash.src = matches[1], hash.async = /async/i.test(scriptTag.replace(hash.src, "")))), !matches && (matches = scriptTag.match(/<script>([\s\S]+?)<\/script>/i), matches)) {
                                var src = matches[1];
                                hash.fn = function() {
                                    return eval(src)
                                }
                            }
                            hashes.push(hash)
                        }, i = 0; i < scriptTags.length; i++) _loop();
                    return hashes
                },
                execScriptTags = function(t, e) {
                    if (!t) return null;
                    var n = scriptTagsToRunScriptsInput(t);
                    return (0, utilities_script_utils_js__WEBPACK_IMPORTED_MODULE_0__.runScripts)(n).then(e)
                },
                removeScriptTags = function(t) {
                    return t.replace(/<script.*?src[^>]*>\s*<\/script>|<script>[\s\S]+?<\/script>/g, "")
                }
        },
        21: (t, e, n) => {
            n.d(e, {
                runScripts: () => l
            });
            var r = n(12),
                i = n(4),
                o = n(22);

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var c = function(t) {
                    for (var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = document.getElementsByTagName("script"), r = 0; r < n.length; r++) {
                        var i = n[r],
                            o = i.getAttribute("src") || "";
                        if (e.ignoreQueryParams) {
                            var a = o.split("?");
                            o = a[0]
                        }
                        if (!e.scriptRegex && e.ignoreProtocol && (o = o.replace(/^https?:/, ""), t = t.replace(/^https?:/, "")), e.scriptRegex && e.scriptRegex.test(o)) return i;
                        if (e.testStartsWith && 0 === o.indexOf(t)) return i;
                        if (o === t) return i
                    }
                    return null
                },
                u = function(t) {
                    var e, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8e3,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return null == r && (r = 8e3), null == i && (i = {}), new Promise((function(a) {
                        !0 === i.once && (e = c(t)) && (n = !0), i.once && n ? e.readyState && !/loaded|complete/.test(e.readyState) || setTimeout((function() {
                            a()
                        }), 1) : (0, o.runScript)(t, r).then(a).catch((function(t) {
                            a(t), setTimeout((function() {
                                console.error(t)
                            }), 1)
                        }))
                    }))
                },
                l = function() {
                    for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    t = n[0] instanceof Array ? n[0] : n, t = f(t);
                    var o = [],
                        c = [],
                        l = [];
                    return t.forEach((function(t) {
                        var e = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                                        s(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({}, t),
                            n = new Promise((function(t) {
                                e.resolve = t
                            }));
                        e.promise = n, l.push(e.promise), t.async ? o.push(e) : c.push(e)
                    })), c.reduce((function(t, e) {
                        if (e.fn) try {
                            e.fn()
                        } catch (t) {
                            r.wlog.error(t)
                        } finally {
                            e.resolve()
                        } else e.src && u(e.src, null, e).then(e.resolve);
                        return t.then(e.promise)
                    }), Promise.resolve()), setTimeout((function() {
                        o.forEach((function(t) {
                            if (t.fn) try {
                                t.fn()
                            } catch (t) {
                                r.wlog.error(t)
                            } finally {
                                t.resolve()
                            } else t.src && u(t.src, null, t).then(t.resolve)
                        }))
                    }), 1), Promise.all(l)
                },
                f = function(t) {
                    for (var e = [], n = 0; n < t.length; n++) {
                        var r = t[n];
                        "string" == typeof r ? e.push({
                            src: r,
                            async: !1
                        }) : (0, i.isObject)(r) ? e.push(r) : e.push({
                            fn: r,
                            async: !1
                        })
                    }
                    return e
                }
        },
        22: (t, e, n) => {
            n.d(e, {
                runScript: () => i
            });
            var r = n(23),
                i = function(t, e) {
                    var n = r.TAGGED_VERSION;
                    return new Promise((function(r, i) {
                        var o;
                        null == e && (e = 8e3), (o = document.createElement("script")).src = t, o.async = !0, o.type = "text/javascript", /https?:\/\/fast\.wistia\./.test(o.src) && "" !== n && n.length > 0 && (o.src = "".concat(o.src, "@").concat(n));
                        var a = null,
                            s = !1,
                            c = function() {
                                o.onerror = o.onreadystatechange = o.onload = null, clearTimeout(a), clearTimeout(l), a = setTimeout((function() {
                                    o && o.parentNode && o.parentNode.removeChild(o)
                                }), 500)
                            },
                            u = function() {
                                var t = o.readyState;
                                s || t && !/loaded|complete/.test(t) || (s = !0, setTimeout((function() {
                                    r(), c()
                                }), 1))
                            },
                            l = setTimeout((function() {
                                s = !0, c(), i(new Error("timeout"))
                            }), e);
                        o.onerror = function(t) {
                            s = !0, c(), i(t)
                        }, o.onreadystatechange = u, o.onload = u, (document.body || document.head).appendChild(o)
                    }))
                }
        },
        23: (t, e, n) => {
            n.d(e, {
                CURRENT_SHA: () => c,
                TAGGED_VERSION: () => s,
                cdnFastWistiaNetHost: () => l,
                eV1HostWithPort: () => h,
                eV1Protocol: () => d,
                mediaDataHost: () => v,
                metricsHost: () => y
            });
            var r = n(10),
                i = n(24),
                o = n(25),
                a = ((0, o.appHostname)("app"), (0, o.appHostname)("fast-protected"), (0, o.appHostname)("fast")),
                s = "",
                c = "26afb53175c97e1081f538381d7fa10a4f65d853",
                u = ("undefined" != typeof window && r.root === window && r.root.location && r.root.location.protocol, function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                    return t || a
                }),
                l = function() {
                    return "fast.".concat("wistia.net")
                },
                f = function() {
                    for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.src) {
                            var r = new i.Url(n.src),
                                o = /\/assets\/external\/E-v1?\.js$/.test(r.rawPath),
                                a = r.host === u() || r.host === l() || "fast-canary.wistia.net" === r.host,
                                s = "https:" === location.protocol && "https:" === r.protocol,
                                c = "" === r.protocol || null == r.protocol,
                                f = s || c || "http:" === location.protocol,
                                p = !n.readyState || /loaded|complete/.test(n.readyState);
                            if (o && a && f && p) return r
                        }
                    }
                    return new i.Url("".concat((0, i.proto)(), "//").concat(l(), "/E-v1.js"))
                }(),
                p = function() {
                    return f.host
                },
                h = function() {
                    return f.port ? "".concat(p(), ":").concat(f.port) : p()
                },
                d = function() {
                    return f.protocol
                },
                v = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return t.embedHost ? b(t.embedHost) : h()
                },
                y = function() {
                    return "pipedream.".concat("wistia.com")
                },
                g = [].concat(["wistia.net", "wistia.com"], ["wistia.mx", "wistia.dev", "wistia.tech", "wistia.am", "wistia.se", "wistia.io", "wistia.st"]),
                m = new RegExp("(".concat(g.map((function(t) {
                    return "\\.".concat(t.replace(".", "\\."))
                })).join("|"), ")$")),
                b = function(t) {
                    return t && m.test(t) ? t : h()
                }
        },
        24: (t, e, n) => {
            n.d(e, {
                Url: () => l,
                proto: () => o
            });
            var r = n(4),
                i = n(12),
                o = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : location.href;
                    return /^http:\/\//.test(t) ? "http:" : "https:"
                },
                a = function(t) {
                    if (null == t) return t;
                    var e;
                    try {
                        e = decodeURIComponent(t)
                    } catch (n) {
                        setTimeout((function() {
                            i.wlog.notice(n)
                        }), 50), e = t
                    }
                    return e
                },
                s = function(t) {
                    for (var e = t[0], n = 1; n < t.length; n++) e += "[".concat(t[n], "]");
                    return e
                },
                c = function(t) {
                    return t.match(/([\w\-_]+)/g)
                },
                u = ["protocol", "host", "port", "params", "path"],
                l = function(t) {
                    var e = this;
                    e.params = {}, e.path = [], e.host = "", "object" == typeof t ? e.fromOptions(t) : t && e.fromRaw(t)
                },
                f = l.prototype;
            f.fromOptions = function(t) {
                for (var e = 0; e < u.length; e++) {
                    var n = u[e];
                    null != t[n] && (this[n] = t[n])
                }
                return this
            }, f.fromRaw = function(t) {
                var e;
                return this.rawUrl = t, (e = t.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//)) && (this.protocol = e[1] || void 0), (e = t.match(/\/\/([^:?#/]*)/)) && (this.host = e[1] || void 0), (e = t.match(/\/\/.*?(\/[^?#$]+)/) || t.match(/(^\/[^/][^?#$]+)/)) && this.setPath(e[1]), (e = t.match(/:(\d+)/)) && (this.port = parseInt(e[1], 10)), (e = t.match(/\?([^#]+)/)) && (this.rawParams = e[1], this.params = function(t) {
                    var e = {};
                    if (!t) return e;
                    for (var n = t.split("&"), o = function() {
                            var t = n[s].split("="),
                                o = t[0],
                                u = t[1];
                            try {
                                o = c(decodeURIComponent(o)) || ""
                            } catch (t) {
                                setTimeout((function() {
                                    i.wlog.notice(t)
                                }), 50), o = ""
                            }(0, r.cast)(o);
                            var l = (0, r.getDeep)(e, o);
                            if (null != l)
                                if ((0, r.isArray)(l)) l.push(a(u));
                                else {
                                    var f = [l];
                                    f.push(a(u)), (0, r.setAndPreserveUndefined)(e, o, f)
                                }
                            else(0, r.setAndPreserveUndefined)(e, o, a(u))
                        }, s = 0; s < n.length; s++) o();
                    return e
                }(this.rawParams)), (e = t.match(/#(.*)$/)) && (this.anchor = e[1]), this
            }, f.clone = function() {
                return new l({
                    protocol: this.protocol,
                    host: this.host,
                    port: this.port,
                    path: (0, r.clone)(this.path),
                    params: (0, r.clone)(this.params),
                    anchor: this.anchor
                })
            }, f.ext = function(t) {
                if (null != t) {
                    var e = this.ext(),
                        n = this.path.length - 1,
                        r = new RegExp("\\.".concat(e), "g");
                    return e && (this.path[n] = "".concat(this.path[n].replace(r, ""))), this.path[n] = "".concat(this.path[n], ".").concat(t)
                }
                var i = this.path[this.path.length - 1].match(/\.(.*)$/);
                return null != i && i[1] || null
            }, f.isRelative = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                    e = this.protocol,
                    n = this.host;
                return !(null != e && "" !== e && e !== t.protocol || n && n !== t.hostname)
            }, f.toString = function() {
                return this.isRelative() ? this.relative() : this.absolute()
            }, f.absolute = function() {
                var t = "";
                null != this.protocol && (t = this.protocol);
                var e = "";
                return null != this.port && (e = ":".concat(this.port)), "".concat(t, "//").concat(this.host || location.host).concat(e).concat(this.relative())
            }, f.relative = function() {
                var t, e = "";
                this.path.length > 0 && ("string" == typeof(t = this.path) && (t = t.split("/")), e = null == t ? "" : "/".concat(t.join("/")), this._hasTrailingSlash && (e += "/"));
                var n, i, o = "?".concat((n = this.params, i = [], (0, r.eachLeaf)(n, (function(t, e) {
                    null != t ? i.push("".concat(encodeURIComponent(s(e)), "=").concat(encodeURIComponent(t))) : i.push(encodeURIComponent(s(e)))
                })), i.join("&")));
                return 1 === o.length && (o = ""), "".concat(e).concat(o).concat(this.relativeAnchor())
            }, f.authority = function() {
                var t = null != this.port ? ":".concat(this.port) : "";
                return "".concat(this.host).concat(t)
            }, f.relativeProtocol = function() {
                var t = "";
                return null != this.port && (t = ":".concat(this.port)), "//".concat(this.host).concat(t).concat(this.relative())
            }, f.relativeAnchor = function() {
                var t = "";
                return null != this.anchor && (t = "#".concat(this.anchor)), "".concat(t)
            }, f.setPath = function(t) {
                this.rawPath = t, this._hasTrailingSlash = /\/$/.test(this.rawPath), this.path = function(t) {
                    var e = [];
                    if (null == t) return e;
                    for (var n = t.split(/\/+/), r = 0; r < n.length; r++) {
                        var i = n[r];
                        null != i && "" !== i && e.push(i)
                    }
                    return e
                }(this.rawPath)
            }, l.create = function(t) {
                return new l(t)
            };
            l.create;
            l.parse = function(t) {
                return new l(t)
            };
            l.parse
        },
        25: (t, e, n) => {
            n.d(e, {
                appHostname: () => r
            });
            var r = function() {
                return "".concat(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "app", ".").concat("wistia.com")
            }
        },
        26: (t, e, n) => {
            n.d(e, {
                seqId: () => i
            });
            var r = n(16),
                i = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia_",
                        e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
                        n = r.Wistia._sequenceVal || 1,
                        i = "".concat(t).concat(n).concat(e);
                    return r.Wistia._sequenceVal = n + 1, i
                }
        },
        28: (t, e, n) => {
            n.d(e, {
                interFontFamily: () => r
            });
            var r = "WistiaPlayerInter, Helvetica, Sans-Serif"
        },
        30: (t, e, n) => {
            function r(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? r(Object(n), !0).forEach((function(e) {
                        o(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function o(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            n.d(e, {
                standardSvgAttrs: () => a
            });
            var a = function(t) {
                var e = t.width,
                    n = void 0 === e ? 40 : e,
                    r = t.height,
                    o = void 0 === r ? 34 : r,
                    a = t.styleOverride,
                    s = void 0 === a ? {} : a,
                    c = t.ariaHidden,
                    u = void 0 !== c && c,
                    l = t.fillColor,
                    f = void 0 === l ? "#ffffff" : l;
                return {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 ".concat(n, " ").concat(o),
                    "enable-background": "new 0 0 ".concat(n, " ").concat(o),
                    "aria-hidden": "".concat(!!u),
                    style: i({
                        fill: f,
                        height: "100%",
                        left: 0,
                        strokeWidth: 0,
                        top: 0,
                        width: "100%"
                    }, s)
                }
            }
        },
        34: (t, e, n) => {
            n.d(e, {
                Color: () => p
            });
            var r = n(35);

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, o(r.key), r)
                }
            }

            function o(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var a = /^#?([0-9a-f]{3,4}|[0-9a-f]{6,8})$/i,
                s = /^rgba?\((\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?),\s*(\d{1,3}(?:\.\d+)?%?)(?:,\s*([01]?\.?\d*))?\)$/,
                c = /^\d+(\.\d+)*%$/,
                u = /([0-9a-f])/gi,
                l = function(t) {
                    return c.test(t) ? 2.55 * parseFloat(t) : t
                },
                f = function(t, e, n) {
                    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                },
                p = function() {
                    function t(e) {
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), e instanceof t ? (this.r = e.r, this.g = e.g, this.b = e.b, this.a = e.a) : e ? this.parse(e) : (this.r = this.g = this.b = 0, this.a = 1)
                    }
                    return e = t, (n = [{
                        key: "parse",
                        value: function(t) {
                            var e;
                            if (Array.isArray(t)) this.r = t[0], this.g = t[1], this.b = t[2], this.a = null !== (e = t[3]) && void 0 !== e ? e : 1;
                            else if (a.test(t)) {
                                var n = (t = String(t)).replace(/^#/, "");
                                3 !== n.length && 4 !== n.length || (n = n.replace(u, "$1$1")), this.r = parseInt(n.substr(0, 2), 16), this.g = parseInt(n.substr(2, 2), 16), this.b = parseInt(n.substr(4, 2), 16), 8 === n.length ? this.a = parseInt(n.substr(6, 2), 16) / 255 : this.a = 1
                            } else if (s.test(t)) {
                                var r = (t = String(t)).match(s);
                                this.r = parseFloat(l(r[1])), this.g = parseFloat(l(r[2])), this.b = parseFloat(l(r[3])), r[4] ? this.a = parseFloat(r[4]) : this.a = 1
                            }
                            return this
                        }
                    }, {
                        key: "clone",
                        value: function() {
                            return new t(this)
                        }
                    }, {
                        key: "_hslFromRgb",
                        value: function() {
                            var t = (0, r.rgbToHsl)([this.r, this.g, this.b]),
                                e = t.hue,
                                n = t.saturation,
                                i = t.lightness;
                            return this._h = e, this._s = n, this._l = i, this
                        }
                    }, {
                        key: "_rgbFromHsl",
                        value: function() {
                            var t = this._h / 360,
                                e = this._s / 100,
                                n = this._l / 100,
                                r = n < .5 ? n * (1 + e) : n + e - n * e,
                                i = 2 * n - r;
                            return this.r = 255 * f(i, r, t + 1 / 3), this.g = 255 * f(i, r, t), this.b = 255 * f(i, r, t - 1 / 3), this
                        }
                    }, {
                        key: "blendChannel",
                        value: function(t, e, n, r) {
                            return r ? (this[t] = Math.sqrt(Math.pow(this[t], 2) * (1 - n) + Math.pow(e, 2) * n), this) : (this[t] = n * e + (1 - n) * this[t], this)
                        }
                    }, {
                        key: "blend",
                        value: function(e, n, r) {
                            return e = new t(e), this.blendChannel("r", e.r, n, r), this.blendChannel("g", e.g, n, r), this.blendChannel("b", e.b, n, r), this
                        }
                    }, {
                        key: "getContrastRatio",
                        value: function(e) {
                            return (0, r.getContrast)(this.toHexWithHash(), new t(e).toHexWithHash())
                        }
                    }, {
                        key: "hasAccessibleContrast",
                        value: function(t, e) {
                            return this.getContrastRatio(t) >= r.colorContrastRatiosByShape[e]
                        }
                    }, {
                        key: "hue",
                        value: function() {
                            return this._hslFromRgb(), this._h
                        }
                    }, {
                        key: "lightenChannel",
                        value: function(t, e) {
                            return this[t] += e, this[t] < 0 ? this[t] = 0 : this[t] > 255 && (this[t] = 255), this
                        }
                    }, {
                        key: "lighten",
                        value: function(t) {
                            return this.looksLikePercent(t) ? this.lightness(this.lightness() + parseFloat(t)) : (this.lightenChannel("r", t), this.lightenChannel("g", t), this.lightenChannel("b", t)), this
                        }
                    }, {
                        key: "darken",
                        value: function(t) {
                            return "string" == typeof t ? this.lighten("-".concat(t)) : this.lighten(-t)
                        }
                    }, {
                        key: "looksLikePercent",
                        value: function(t) {
                            return /^-?\d+(\.\d+)?%$/.test(t)
                        }
                    }, {
                        key: "lightness",
                        value: function(t) {
                            return this._hslFromRgb(), null != t ? (this._l = Math.max(0, Math.min(100, t)), this._rgbFromHsl(), this) : this._l
                        }
                    }, {
                        key: "saturation",
                        value: function(t) {
                            return this._hslFromRgb(), null != t ? (this._s = Math.max(0, Math.min(100, t)), this._rgbFromHsl(), this) : this._s
                        }
                    }, {
                        key: "setHue",
                        value: function(t) {
                            if (this._hslFromRgb(), null != t) return this._h = Math.max(0, Math.min(360, t)), this._rgbFromHsl(), this
                        }
                    }, {
                        key: "shade",
                        value: function(t, e) {
                            return this.blend("#000000", t, e)
                        }
                    }, {
                        key: "grayLevel",
                        value: function() {
                            return (.299 * this.r + .587 * this.g + .114 * this.b) / 255
                        }
                    }, {
                        key: "tint",
                        value: function(t, e) {
                            return this.blend("#ffffff", t, e)
                        }
                    }, {
                        key: "whiteLevel",
                        value: function() {
                            return Math.min(Math.min(this.r, this.g), this.b)
                        }
                    }, {
                        key: "getRelativeLuminance",
                        value: function() {
                            var t = function(t) {
                                var e = .003921569 * t;
                                return e <= .03928 ? e / 12.92 : Math.pow((e + .055) / 1.055, 2.4)
                            };
                            return .2126 * t(this.r) + .7152 * t(this.g) + .0722 * t(this.b)
                        }
                    }, {
                        key: "isDark",
                        value: function(t) {
                            return t ? this.getRelativeLuminance() < .15 : this.grayLevel() <= .4
                        }
                    }, {
                        key: "isLight",
                        value: function(t) {
                            return t ? this.getRelativeLuminance() >= .8 : this.grayLevel() > .4
                        }
                    }, {
                        key: "isGrayscale",
                        value: function() {
                            return this.r === this.g && this.g === this.b
                        }
                    }, {
                        key: "distanceFrom",
                        value: function(t) {
                            return Math.sqrt(Math.pow(this.r - t.r, 2) + Math.pow(this.g - t.g, 2) + Math.pow(this.b - t.b, 2))
                        }
                    }, {
                        key: "channelDominance",
                        value: function() {
                            var t = this;
                            return ["r", "g", "b"].sort((function(e, n) {
                                return t[n] - t[e]
                            }))
                        }
                    }, {
                        key: "alpha",
                        value: function(t) {
                            return null != t ? (this.a = t, this) : this.a
                        }
                    }, {
                        key: "red",
                        value: function(t) {
                            return null != t ? (this.r = t, this) : this.r
                        }
                    }, {
                        key: "green",
                        value: function(t) {
                            return null != t ? (this.g = t, this) : this.g
                        }
                    }, {
                        key: "blue",
                        value: function(t) {
                            return null != t ? (this.b = t, this) : this.b
                        }
                    }, {
                        key: "toHex",
                        value: function() {
                            var t = Math.round(this.r).toString(16),
                                e = Math.round(this.g).toString(16),
                                n = Math.round(this.b).toString(16);
                            return 1 === t.length && (t = "0".concat(t)), 1 === e.length && (e = "0".concat(e)), 1 === n.length && (n = "0".concat(n)), "".concat(t).concat(e).concat(n)
                        }
                    }, {
                        key: "toHexWithAlpha",
                        value: function() {
                            var t = Math.round(255 * this.a).toString(16);
                            return 1 === t.length && (t = "0".concat(t)), "".concat(t).concat(this.toHex())
                        }
                    }, {
                        key: "toHexWithHash",
                        value: function() {
                            return "#".concat(this.toHex())
                        }
                    }, {
                        key: "toRgb",
                        value: function() {
                            return "rgb(".concat(Math.round(this.r), ",").concat(Math.round(this.g), ",").concat(Math.round(this.b), ")")
                        }
                    }, {
                        key: "toRgba",
                        value: function() {
                            return "rgba(".concat(Math.round(this.r), ",").concat(Math.round(this.g), ",").concat(Math.round(this.b), ",").concat(this.a, ")")
                        }
                    }, {
                        key: "toRgbaOrHex",
                        value: function() {
                            return this.toRgba()
                        }
                    }, {
                        key: "toPercent",
                        value: function() {
                            return "rgba(".concat(this.r / 255 * 100, "%,").concat(this.g / 255 * 100, "%,").concat(this.b / 255 * 100, "%,").concat(this.a, ")")
                        }
                    }, {
                        key: "toIeGradient",
                        value: function() {
                            return "progid:DXImageTransform.Microsoft.gradient(startColorStr='#".concat(this.toHexWithAlpha(), "', endColorStr='#").concat(this.toHexWithAlpha(), "')")
                        }
                    }, {
                        key: "toString",
                        value: function() {
                            return this.toPercent()
                        }
                    }]) && i(e.prototype, n), o && i(e, o), Object.defineProperty(e, "prototype", {
                        writable: !1
                    }), e;
                    var e, n, o
                }()
        },
        35: (t, e, n) => {
            n.d(e, {
                colorContrastRatiosByShape: () => o,
                getContrast: () => s,
                rgbToHsl: () => a
            });
            var r = n(36),
                i = n(34);
            n(37);
            var o = {
                    nonText: 3,
                    largeText: 3,
                    paragraphText: 4.5,
                    smallText: 5.5
                },
                a = function(t) {
                    var e = t;
                    if (t instanceof i.Color) {
                        if ((0, r.isNil)(t.r) || (0, r.isNil)(t.g) || (0, r.isNil)(t.b)) throw new Error("Color does not contain required RGB values");
                        e = [t.r, t.g, t.b]
                    } else if ("string" == typeof t) {
                        var n = new i.Color(t);
                        if ((0, r.isNil)(n.r) || (0, r.isNil)(n.g) || (0, r.isNil)(n.b)) throw new Error("Color does not contain required RGB values");
                        e = [n.r, n.g, n.b]
                    }
                    var o = e[0] / 255,
                        a = e[1] / 255,
                        s = e[2] / 255,
                        c = Math.max(o, a, s),
                        u = Math.min(o, a, s),
                        l = 0,
                        f = 0,
                        p = (c + u) / 2;
                    c === u && (l = 0, f = 0);
                    var h = c - u;
                    return 0 === h ? {
                        hue: l,
                        saturation: f,
                        lightness: 100 * o
                    } : (l = c === o ? (a - s) / h + (a < s ? 6 : 0) : c === a ? (s - o) / h + 2 : (o - a) / h + 4, {
                        hue: 360 * (l /= 6),
                        saturation: 100 * (f = p > .5 ? h / (2 - c - u) : h / (c + u)),
                        lightness: 100 * p
                    })
                },
                s = function(t, e) {
                    var n = new i.Color(t),
                        r = new i.Color(e),
                        o = n.getRelativeLuminance(),
                        a = r.getRelativeLuminance();
                    return o > a ? (o + .05) / (a + .05) : (a + .05) / (o + .05)
                }
        },
        36: (t, e) => {
            e.isBoolean = e.isFunction = e.isArray = e.isNonEmptyRecord = e.isRecord = e.isNumber = e.isNonEmptyString = e.isEmptyString = e.isString = e.isNotNil = e.isNil = e.isUndefined = e.isNull = void 0;
            e.isNull = t => null === t;
            e.isUndefined = t => void 0 === t;
            e.isNil = t => (0, e.isNull)(t) || (0, e.isUndefined)(t);
            e.isNotNil = t => !(0, e.isNil)(t);
            e.isString = t => "string" == typeof t;
            e.isEmptyString = t => (0, e.isString)(t) && "" === t;
            e.isNonEmptyString = t => (0, e.isString)(t) && !(0, e.isEmptyString)(t);
            e.isNumber = t => "number" == typeof t;
            e.isRecord = t => (0, e.isNotNil)(t) && "object" == typeof t && !(t instanceof Array);
            e.isNonEmptyRecord = t => (0, e.isRecord)(t) && Object.keys(t).length > 0;
            e.isArray = t => (0, e.isNotNil)(t) && "object" == typeof t && t instanceof Array;
            e.isFunction = t => (0, e.isNotNil)(t) && "function" == typeof t;
            e.isBoolean = t => (0, e.isNotNil)(t) && "boolean" == typeof t
        },
        37: (t, e, n) => {
            n.d(e, {
                reportError: () => a
            });
            var r = n(36),
                i = n(38),
                o = n(16),
                a = (n(25), n(23), function(t, e, n) {
                    try {
                        if (!o.Wistia.isSentryInitialized) return;
                        var a = function(t) {
                            switch (t) {
                                case "carousel":
                                case "playlist":
                                    return 1;
                                case "channel":
                                case "form":
                                case "transcript":
                                    return .25;
                                case "mediaPlayback":
                                    return .001;
                                default:
                                    return .1
                            }
                        }(t);
                        false;
                        var s = !1,
                            c = (0, r.isNil)(window.crypto) ? window.msCrypto : window.crypto;
                        if (void 0 !== c) s = c.getRandomValues(new Uint32Array(1))[0] / 4294967296 < a;
                        else s = Math.random() < a;
                        s ? (0, i.isVisitorTrackingEnabled)() && (o.Wistia._sentryScope.clear(), o.Wistia._sentryScope.setTag("pillar", "publish"), o.Wistia._sentryScope.setTag("product", t), (0, r.isNonEmptyRecord)(n) && o.Wistia._sentryScope.setTags(n), o.Wistia._sentryScope.captureException(e)) : console.error(e)
                    } catch (t) {
                        console.error(t)
                    }
                })
        },
        38: (t, e, n) => {
            n.d(e, {
                isVisitorTrackingEnabled: () => f
            });
            var r = n(13),
                i = n(39),
                o = n(41),
                a = n(16);

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return c(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var u;
            a.Wistia._visitorTrackingDomain || (a.Wistia._visitorTrackingDomain = location.hostname || ""), a.Wistia._visitorTracking || (null != (u = (0, i.getWistiaLocalStorage)().visitorTrackingEnabled) && ((0, i.updateWistiaLocalStorage)((function(t) {
                return delete t.visitorTrackingEnabled
            })), a.Wistia._visitorTracking = {}, a.Wistia._visitorTracking[a.Wistia._visitorTrackingDomain] = {
                isEnabled: u,
                updatedAt: Date.now()
            }, (0, i.updateWistiaLocalStorage)((function(t) {
                return t.visitorTracking = a.Wistia._visitorTracking
            }))), a.Wistia._visitorTracking = (0, i.getWistiaLocalStorage)().visitorTracking || {});
            a.Wistia.consent = function(t) {
                return null == t ? f() : l(t)
            };
            var l = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Wistia._visitorTrackingDomain;
                    "default" === t ? delete a.Wistia._visitorTracking[e] : a.Wistia._visitorTracking[e] = {
                        isEnabled: "true" === "".concat(t),
                        updatedAt: Date.now()
                    }, (0, i.updateWistiaLocalStorage)((function(t) {
                        return t.visitorTracking = a.Wistia._visitorTracking
                    })), (0, r.globalTrigger)("visitortrackingchange", t), s(document.getElementsByTagName("wistia-player")).forEach((function(e) {
                        e.dispatchEvent(new CustomEvent("visitor-tracking-change", {
                            detail: {
                                isTrackingEnabled: t
                            }
                        }))
                    }))
                },
                f = function() {
                    if ("boolean" == typeof a.Wistia._visitorTracking) return a.Wistia._visitorTracking;
                    if (a.Wistia._visitorTracking) {
                        var t = function() {
                            if (a.Wistia._visitorTrackingDomain)
                                for (var t = a.Wistia._visitorTrackingDomain.split("."); t.length > 0;) {
                                    var e = a.Wistia._visitorTracking[t.join(".")],
                                        n = e && e.isEnabled;
                                    if (null != n) return n;
                                    t.shift()
                                }
                        }();
                        if (null != t) return Boolean(t)
                    }
                    var e = (0, o.getAllApiHandles)();
                    if (a.Wistia.channel && a.Wistia.channel.all) try {
                        e.push.apply(e, s(a.Wistia.channel.all()))
                    } catch (t) {}
                    return !e.some((function(t) {
                        return !0 === (t._mediaData || t._galleryData || {}).privacyMode
                    }))
                }
        },
        39: (t, e, n) => {
            n.d(e, {
                getWistiaLocalStorage: () => a,
                updateWistiaLocalStorage: () => s
            });
            var r = n(40),
                i = n(16),
                o = "wistia",
                a = function() {
                    return (0, r.getLocalStorage)(o)
                },
                s = function(t) {
                    return i.Wistia._localStorage = (0, r.updateLocalStorage)(o, t), i.Wistia._localStorage
                }
        },
        40: (t, e, n) => {
            n.d(e, {
                getLocalStorage: () => c,
                removeLocalStorage: () => u,
                setLocalStorage: () => l,
                updateLocalStorage: () => f
            });
            var r = n(16),
                i = function(t) {
                    setTimeout((function() {
                        throw t
                    }), 0)
                },
                o = "_namespacedLocalStorage",
                a = function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia-test-localstorage";
                    if (null != r.Wistia._localStorageWorks) return r.Wistia._localStorageWorks;
                    try {
                        var e = localStorage.getItem(t);
                        localStorage.removeItem(t), localStorage.setItem(t, e), localStorage.removeItem(t), r.Wistia._localStorageWorks = !0
                    } catch (t) {
                        r.Wistia._localStorageWorks = !1
                    }
                    return r.Wistia._localStorageWorks
                },
                s = function() {
                    return null == r.Wistia[o] && (r.Wistia[o] = {}), r.Wistia[o]
                },
                c = function(t) {
                    if (!a()) return s()[t] || {};
                    if (localStorage[t]) try {
                        return "null" === localStorage[t] ? {} : JSON.parse(localStorage[t])
                    } catch (t) {
                        i(t)
                    }
                    return {}
                },
                u = function(t) {
                    if (a()) try {
                        localStorage.removeItem(t)
                    } catch (t) {
                        i(t)
                    } else s()[t] = {}
                },
                l = function(t, e) {
                    if (!a()) return null != e && "object" == typeof e && (s()[t] = e), e;
                    try {
                        s()[t] = e, localStorage[t] = JSON.stringify(e)
                    } catch (t) {
                        i(t)
                    }
                    return e
                },
                f = function(t, e) {
                    var n = c(t);
                    try {
                        e(n)
                    } catch (t) {
                        i(t)
                    }
                    return l(t, n)
                }
        },
        41: (t, e, n) => {
            n.d(e, {
                getAllApiHandles: () => i
            });
            n(42), n(12);
            var r = n(43);
            var i = function() {
                return (void 0 === (0, r.wData)("video") ? [] : Object.values((0, r.wData)("video"))).concat(void 0 === (0, r.wData)("iframe_api") ? [] : Object.values((0, r.wData)("iframe_api")))
            }
        },
        42: (t, e, n) => {
            n.d(e, {
                getAllApiEmbedElements: () => r
            });
            var r = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "wistia_embed",
                    e = document.querySelectorAll("div.".concat(t, ",span.").concat(t, ",iframe.").concat(t));
                return Array.from(e).map((function(t) {
                    var e;
                    return "WISTIA-PLAYER" === (null === (e = t.lastChild) || void 0 === e ? void 0 : e.nodeName) ? t.lastChild : t
                }))
            }
        },
        43: (t, e, n) => {
            n.d(e, {
                wData: () => o
            });
            var r = n(4),
                i = n(16),
                o = function(t, e) {
                    return (0, r.isArray)(t) || (t = t.split(".")), null != e && (0, r.setDeep)(i.Wistia, ["_data"].concat(t), e), (0, r.getDeep)(i.Wistia, ["_data"].concat(t))
                }
        },
        44: (t, e, n) => {
            n.d(e, {
                isMouseDown: () => l,
                isMouseDownRecently: () => f
            });
            var r = n(3),
                i = n(9),
                o = n(16),
                a = (0, i.cachedDetect)();
            if (null == o.Wistia._isMouseDown) {
                o.Wistia._isMouseDown = !1;
                var s = function(t) {
                        o.Wistia._isMouseDown = !0, o.Wistia._lastMouseDownAt = Date.now(), setTimeout((function() {
                            t.defaultPrevented && (o.Wistia._isMouseDown = !1)
                        }), 0)
                    },
                    c = function() {
                        o.Wistia._lastMouseUpAt = Date.now(), setTimeout((function() {
                            o.Wistia._isMouseDown = !1
                        }), 0)
                    };
                a.touchScreen ? ((0, r.elemBind)(document, "touchstart", s, !0), (0, r.elemBind)(document, "touchend", (function() {
                    o.Wistia._lastMouseUpAt = Date.now(), setTimeout((function() {
                        o.Wistia._isMouseDown = !1
                    }), 0)
                }), !0)) : ((0, r.elemBind)(document, "mousedown", s, !0), (0, r.elemBind)(document, "mouseup", c, !0));
                var u = a.windows ? c : s;
                (0, r.elemBind)(document, "contextmenu", u, !0)
            }
            var l = function() {
                    return null != o.Wistia._mouseDownForceReturnVal ? o.Wistia._mouseDownForceReturnVal : o.Wistia._isMouseDown
                },
                f = function() {
                    return null != o.Wistia._mouseDownForceReturnVal ? o.Wistia._mouseDownForceReturnVal : (t = 500, Math.max(o.Wistia._lastMouseDownAt || 0, (o.Wistia._lastMouseUpAt || 0) - 1) > Date.now() - t);
                    var t
                }
        },
        45: (t, e, n) => {
            n.d(e, {
                defineTranslations: () => u,
                getTranslation: () => p
            });
            var r = n(4),
                i = (n(46), n(16)),
                o = i.Wistia.languages = i.Wistia.languages || {},
                a = i.Wistia.translations = i.Wistia.translations || {};
            i.Wistia._translationPromises || (i.Wistia._translationPromises = {});
            var s, c = function(t, e, n) {
                    o[t] = {
                        code: t,
                        text: f(e)
                    }, n && u(t, n)
                },
                u = function(t, e) {
                    if (null == o[t]) throw new Error("Must define a language with code ".concat(t, " before defining its translations."));
                    var n = a[t];
                    n ? (0, r.merge)(n, e) : a[t] = (0, r.clone)(e)
                },
                l = i.Wistia.cachedDecodings = i.Wistia.cachedDecodings || {},
                f = function(t) {
                    return s || (s = document.createElement("textarea")), null != l[t] ? l[t] : (s.innerHTML = t, l[t] = s.value, s.value)
                },
                p = function(t, e) {
                    var n;
                    return n = a[t] && a[t][e] ? a[t][e] : a["en-US"][e], f(function(t) {
                        return null == t ? "?" : t
                    }(n))
                };
            c("en-US", "English"), u("en-US", {
                PLAY: "Play",
                PLAY_BUTTON_LIVE_NOT_STARTED: "Livestream has not started",
                PLAY_BUTTON_TITLE_WHEN_NOT_PLAYING: "Play Video",
                PLAY_BUTTON_TITLE_WHEN_PLAYING: "Pause",
                REWATCH: "Rewatch",
                SKIP: "Skip"
            })
        },
        46: (t, e, n) => {
            n.d(e, {
                dynamicImport: () => a
            });
            var r = n(23);

            function i() {
                i = function() {
                    return e
                };
                var t, e = {},
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = Object.defineProperty || function(t, e, n) {
                        t[e] = n.value
                    },
                    a = "function" == typeof Symbol ? Symbol : {},
                    s = a.iterator || "@@iterator",
                    c = a.asyncIterator || "@@asyncIterator",
                    u = a.toStringTag || "@@toStringTag";

                function l(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    l({}, "")
                } catch (t) {
                    l = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function f(t, e, n, r) {
                    var i = e && e.prototype instanceof m ? e : m,
                        a = Object.create(i.prototype),
                        s = new j(r || []);
                    return o(a, "_invoke", {
                        value: k(t, n, s)
                    }), a
                }

                function p(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = f;
                var h = "suspendedStart",
                    d = "suspendedYield",
                    v = "executing",
                    y = "completed",
                    g = {};

                function m() {}

                function b() {}

                function _() {}
                var w = {};
                l(w, s, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(L([])));
                O && O !== n && r.call(O, s) && (w = O);
                var T = _.prototype = m.prototype = Object.create(w);

                function C(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function E(t, e) {
                    function n(i, o, a, s) {
                        var c = p(t[i], t, o);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == typeof l && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                n("next", t, a, s)
                            }), (function(t) {
                                n("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return n("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var i;
                    o(this, "_invoke", {
                        value: function(t, r) {
                            function o() {
                                return new e((function(e, i) {
                                    n(t, r, e, i)
                                }))
                            }
                            return i = i ? i.then(o, o) : o()
                        }
                    })
                }

                function k(e, n, r) {
                    var i = h;
                    return function(o, a) {
                        if (i === v) throw Error("Generator is already running");
                        if (i === y) {
                            if ("throw" === o) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (r.method = o, r.arg = a;;) {
                            var s = r.delegate;
                            if (s) {
                                var c = P(s, r);
                                if (c) {
                                    if (c === g) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (i === h) throw i = y, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            i = v;
                            var u = p(e, n, r);
                            if ("normal" === u.type) {
                                if (i = r.done ? y : d, u.arg === g) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (i = y, r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function P(e, n) {
                    var r = n.method,
                        i = e.iterator[r];
                    if (i === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, P(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), g;
                    var o = p(i, e.iterator, n.arg);
                    if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g;
                    var a = o.arg;
                    return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                }

                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function A(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function L(e) {
                    if (e || "" === e) {
                        var n = e[s];
                        if (n) return n.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var i = -1,
                                o = function n() {
                                    for (; ++i < e.length;)
                                        if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                                    return n.value = t, n.done = !0, n
                                };
                            return o.next = o
                        }
                    }
                    throw new TypeError(typeof e + " is not iterable")
                }
                return b.prototype = _, o(T, "constructor", {
                    value: _,
                    configurable: !0
                }), o(_, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = l(_, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, _) : (t.__proto__ = _, l(t, u, "GeneratorFunction")), t.prototype = Object.create(T), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, C(E.prototype), l(E.prototype, c, (function() {
                    return this
                })), e.AsyncIterator = E, e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new E(f(t, n, r, i), o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, C(T), l(T, u, "Generator"), l(T, s, (function() {
                    return this
                })), l(T, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        n = [];
                    for (var r in e) n.push(r);
                    return n.reverse(),
                        function t() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in e) return t.value = r, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = L, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(A), !e)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var n = this;

                        function i(r, i) {
                            return s.type = "throw", s.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), A(n), g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    A(n)
                                }
                                return i
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, r) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = t), g
                    }
                }, e
            }

            function o(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }
            var a = function() {
                var t, e = (t = i().mark((function t(e) {
                    var n, o, a, s, c = arguments;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (a = null !== (n = (o = c.length > 1 && void 0 !== c[1] ? c[1] : {}).host) && void 0 !== n ? n : (0, r.eV1HostWithPort)(), !("" !== (s = r.TAGGED_VERSION) && s.length > 0 && !0 !== o.mediaData)) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return",
                                    import ("".concat((0, r.eV1Protocol)(), "//").concat(a, "/").concat(e, "@").concat(s)));
                            case 5:
                                return t.abrupt("return",
                                    import ("".concat((0, r.eV1Protocol)(), "//").concat(a, "/").concat(e)));
                            case 6:
                            case "end":
                                return t.stop()
                        }
                    }), t)
                })), function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var a = t.apply(e, n);

                        function s(t) {
                            o(a, r, i, s, c, "next", t)
                        }

                        function c(t) {
                            o(a, r, i, s, c, "throw", t)
                        }
                        s(void 0)
                    }))
                });
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        },
        67: (t, e, n) => {
            n.d(e, {
                CustomEventsWrapper: () => v
            });
            var r = n(2),
                i = n(9),
                o = n(68);

            function a() {
                return a = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, a.apply(null, arguments)
            }

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, h(r.key), r)
                }
            }

            function c(t, e, n) {
                return e = l(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }

            function p(t, e, n) {
                return (e = h(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function h(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var d = (0, i.cachedDetect)(),
                v = function(t) {
                    function e() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return p(t = c(this, e, [].concat(r)), "onSwipe", (function(e, n) {
                            var r = t.props.onSwipe;
                            r && r(e, n)
                        })), p(t, "onPinch", (function(e, n) {
                            var r = t.props.onPinch;
                            r && r(e, n)
                        })), p(t, "onLongPress", (function(e, n) {
                            var r = t.props.onLongPress;
                            r && r(e, n)
                        })), p(t, "onCustomTouchMove", (function(e, n) {
                            var r = t.props.onCustomTouchMove;
                            r && r(e, n)
                        })), t
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && f(t, e)
                    }(e, t), n = e, (i = [{
                        key: "render",
                        value: function() {
                            var t = this.props.tagName || "div";
                            return (0, r.h)(t, a({}, this.props, {
                                ref: this.props.elemRef
                            }), this.props.children)
                        }
                    }, {
                        key: "componentDidMount",
                        value: function() {
                            this._savedBase = this.base, this.setupBindings()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.base !== this._savedBase && (this._savedBase = this.base, this.destroyBindings(), this.setupBindings())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.destroyBindings()
                        }
                    }, {
                        key: "setupBindings",
                        value: function() {
                            if (this.unbinds = [], d.touchScreen) {
                                var t = this.touchEvents = new o.default(this.base);
                                t.on("swipe", this.onSwipe), t.on("pinch", this.onPinch), t.on("longpress", this.onLongPress), t.on("touchmove", this.onCustomTouchMove)
                            }
                        }
                    }, {
                        key: "destroyBindings",
                        value: function() {
                            this.touchEvents && (this.touchEvents.destroy(), this.touchEvents = null), this.unbinds && (this.unbinds.map((function(t) {
                                return t()
                            })), this.unbinds = null)
                        }
                    }]) && s(n.prototype, i), u && s(n, u), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, i, u
                }(r.Component)
        },
        68: (t, e, n) => {
            n.d(e, {
                default: () => l
            });
            var r = n(15),
                i = n(3);

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
                }
            }

            function a(t, e, n) {
                return (e = s(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function s(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var c = (0, n(9).cachedDetect)(),
                u = function() {
                    return t = function t(e) {
                        var n = this;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, t), a(this, "onTouchStart", (function(t) {
                            n.rootWidth = (0, i.elemWidth)(n.rootElem), n.rootHeight = (0, i.elemHeight)(n.rootElem), n.rootOffset = (0, i.elemOffset)(n.rootElem), n.resetTouchContext(), t.touches[0] && (n.xDown = t.touches[0].clientX, n.yDown = t.touches[0].clientY), n.updatePinch(t), 2 == t.touches.length && n.touchesAreInsideRootElem() && t.preventDefault(), n.startedAt = Date.now(), (0, i.elemBind)(document, "touchmove", n.onTouchMoveDocument, {
                                passive: !1
                            }), (0, i.elemBind)(document, "touchend", n.onTouchEndDocument), (0, i.elemBind)(n.rootElem, "touchmove", n.onTouchMove, {
                                passive: !1
                            }), (0, i.elemBind)(n.rootElem, "touchend", n.onTouchEnd);
                            var e = n.getTouchContext(t);
                            n.trigger("touchstart", t, e), n.maybeTriggerMoreSpecificEvent(t, e)
                        })), a(this, "onTouchMove", (function(t) {
                            t._handledByTouchMove = !0;
                            var e = t.touches[0].clientX,
                                r = t.touches[0].clientY;
                            n.xDiff = n.xDown - e, n.yDiff = n.yDown - r, n.updatePinch(t), n.isPinch || (Math.sqrt(n.xDiff * n.xDiff + n.yDiff * n.yDiff) > 25 || Date.now() - n.startedAt > 300) && (n.isSwipe = !0);
                            var i = n.getTouchContext(t);
                            n.trigger("touchmove", t, i), n.maybeTriggerMoreSpecificEvent(t, i)
                        })), a(this, "onTouchMoveDocument", (function(t) {
                            t._handledByTouchMove || n.onTouchMove(t)
                        })), a(this, "onTouchEnd", (function(t) {
                            t._handledByTouchEnd = !0;
                            var e = n.getTouchContext(t);
                            n.trigger("touchend", t, e), n.maybeTriggerMoreSpecificEvent(t, e), setTimeout((function() {
                                n.resetTouchContext(), n.unbindTouchEndAndTouchMove()
                            }), 0)
                        })), a(this, "onTouchEndDocument", (function(t) {
                            t._handledByTouchEnd || n.onTouchEnd(t)
                        })), this.rootElem = e, this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.initialPinchDistance = null, this.touch1 = this.touch2 = null, this.pinchDistance = 0, this.pinchScale = 0, (0, i.elemBind)(e, "touchstart", this.onTouchStart, !!c.passiveSupported && {
                            passive: !1
                        })
                    }, e = [{
                        key: "updatePinch",
                        value: function(t) {
                            var e = this.rootOffset;
                            return 2 === t.touches.length ? (this.touch1 = {
                                left: t.touches[0].pageX - e.left,
                                top: t.touches[0].pageY - e.top
                            }, this.touch2 = {
                                left: t.touches[1].pageX - e.left,
                                top: t.touches[1].pageY - e.top
                            }, this.pinchDistance = Math.sqrt(Math.pow(this.touch1.left - this.touch2.left, 2), Math.pow(this.touch1.top - this.touch2.top, 2)), null == this.initialPinchDistance && (this.initialPinchDistance = this.pinchDistance), this.pinchScale = this.pinchDistance / this.initialPinchDistance, this.pinchDelta = this.pinchDistance - this.initialPinchDistance, this.isPinch = !0, this.pinchScale) : 0
                        }
                    }, {
                        key: "getTouchContext",
                        value: function(t) {
                            var e = this.rootOffset,
                                n = Date.now() - this.startedAt,
                                r = Object(t.touches[0]);
                            return {
                                xOffset: r.pageX - e.left,
                                yOffset: r.pageY - e.top,
                                xDelta: this.xDiff,
                                yDelta: this.yDiff,
                                absXDelta: Math.abs(this.xDiff),
                                absYDelta: Math.abs(this.yDiff),
                                delta: Math.sqrt(this.xDiff * this.xDiff + this.yDiff * this.yDiff),
                                startedAt: this.startedAt,
                                isSwipe: !this.isPinch && this.isSwipe,
                                isTap: n < 1e3 && !this.isPinch && !this.isSwipe,
                                isLongPress: n >= 1e3 && !this.isPinch && !this.isSwipe,
                                isPinch: this.isPinch,
                                timeDelta: n,
                                pinchScale: this.pinchScale,
                                pinchDistance: this.pinchDistance
                            }
                        }
                    }, {
                        key: "touchIsInsideRootElem",
                        value: function(t) {
                            return t.left >= 0 && t.left < this.rootWidth && t.top >= 0 && t.top < this.rootHeight
                        }
                    }, {
                        key: "touchesAreInsideRootElem",
                        value: function() {
                            return this.touchIsInsideRootElem(this.touch1) && this.touchIsInsideRootElem(this.touch2)
                        }
                    }, {
                        key: "resetTouchContext",
                        value: function() {
                            this.xDown = this.yDown = null, this.xDiff = this.yDiff = 0, this.isSwipe = !1, this.isPinch = !1, this.startedAt = null, this.pinchDelta = 0, this.pinchDistance = 0, this.initialPinchDistance = null, this.touch1 = this.touch2 = null
                        }
                    }, {
                        key: "maybeTriggerMoreSpecificEvent",
                        value: function(t, e) {
                            e.isLongPress ? this.trigger("longpress", t, e) : e.isTap ? this.trigger("tap", t, e) : e.isSwipe ? this.trigger("swipe", t, e) : e.isPinch && this.trigger("pinch", t, e)
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            (0, i.elemUnbind)(this.rootElem, "touchstart", this.onTouchStart), this.unbindTouchEndAndTouchMove(), this.rootElem = null
                        }
                    }, {
                        key: "unbindTouchEndAndTouchMove",
                        value: function() {
                            (0, i.elemUnbind)(document, "touchmove", this.onTouchMoveDocument), (0, i.elemUnbind)(document, "touchend", this.onTouchEndDocument), (0, i.elemUnbind)(this.rootElem, "touchmove", this.onTouchMove), (0, i.elemUnbind)(this.rootElem, "touchend", this.onTouchEnd)
                        }
                    }], e && o(t.prototype, e), n && o(t, n), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), t;
                    var t, e, n
                }();
            (0, r.bindify)(u.prototype);
            const l = u
        },
        70: (t, e, n) => {
            n.d(e, {
                destroyControl: () => s
            });
            n(5);
            var r = n(9),
                i = (n(71), n(3)),
                o = n(2),
                a = (n(26), n(72), function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                }),
                s = ((0, r.cachedDetect)(), function(t) {
                    t._destroyed = !0,
                        function(t) {
                            t.unbinds instanceof Array && (t.unbinds.forEach((function(t) {
                                try {
                                    "function" == typeof t && t()
                                } catch (t) {
                                    setTimeout((function() {
                                        throw t
                                    }), 1)
                                }
                            })), t.unbinds = null)
                        }(t),
                        function(t) {
                            t.eventListeners instanceof Map && (t.eventListeners.forEach((function(e, n) {
                                try {
                                    "function" == typeof e && t.embedElement.removeEventListener(n, e)
                                } catch (t) {
                                    setTimeout((function() {
                                        throw t
                                    }), 1)
                                }
                            })), t.eventListeners.clear())
                        }(t), c(t), l(t), f(t)
                }),
                c = function(t) {
                    t.rootElem && (0, i.elemRemove)(Array.prototype.slice.call(t.rootElem.childNodes))
                },
                u = function(t) {
                    var e = t[0],
                        n = t[1];
                    e && n && (0, o.render)((0, o.h)("nothing", null), e)
                },
                l = function(t) {
                    var e = t.reactMounts;
                    if (e)
                        if (e instanceof Array) u(e);
                        else
                            for (var n in e) a(e, n) && e[n] && u(e[n])
                },
                f = function(t) {
                    for (var e in t) a(t, e) && ("_" !== (n = e)[0] || "_" !== n[1]) && "mounted" !== e && (t[e] = null);
                    var n;
                    t.__prevProps = null, t._destroyed = !0
                }
        },
        71: (t, e, n) => {
            n.d(e, {
                clearTimeouts: () => a,
                doTimeout: () => o
            });
            var r = n(4),
                i = n(16);
            i.Wistia;
            null == i.Wistia._timeouts && (i.Wistia._timeouts = {});
            var o = function(t, e) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                    (0, r.isArray)(t) && (t = t.join("."));
                    var o = c(t);
                    if (a(t, o), e) {
                        var s = i.Wistia._timeouts[o];
                        null == s && (s = i.Wistia._timeouts[o] = {});
                        var u = setTimeout((function() {
                            delete s[t], e()
                        }), n);
                        return s[t] = u, u
                    }
                    return i.Wistia._timeouts[o][t]
                },
                a = function(t) {
                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if ((0, r.isArray)(t) && (t = t.join(".")), "__global__" === (n = n || c(t)) && (e = i.Wistia._timeouts[t]))
                        for (var o in e) {
                            var a = e[o];
                            clearTimeout(a), delete e[o]
                        }
                    if (e = i.Wistia._timeouts[n])
                        for (var u in e) {
                            var l = e[u];
                            !u.indexOf || 0 !== u.indexOf(t) || u.length !== t.length && "." !== u.charAt(t.length) || (clearTimeout(l), delete e[u])
                        }
                    i.Wistia.blockSweepTimeouts || (i.Wistia.blockSweepTimeouts = !0, setTimeout(s, 0), setTimeout((function() {
                        i.Wistia.blockSweepTimeouts = !1
                    }), 5e3))
                },
                s = function() {
                    for (var t in i.Wistia._timeouts) {
                        var e = i.Wistia._timeouts[t];
                        (0, r.isEmpty)(e) && delete i.Wistia._timeouts[t]
                    }
                },
                c = function(t) {
                    var e = t.indexOf(".");
                    return e > 0 ? t.substring(0, e) : "__global__"
                }
        },
        72: (t, e, n) => {
            n.d(e, {
                defineControl: () => o,
                getControlDefinitions: () => a
            });
            var r = n(73),
                i = n(16);
            null == i.Wistia._controlDefinitions && (i.Wistia._controlDefinitions = {});
            var o = function(t) {
                    null != t.handle ? null == i.Wistia._controlDefinitions[t.handle] && (i.Wistia._controlDefinitions[t.handle] = t, i.Wistia.trigger && i.Wistia.trigger("controldefined", t)) : console.error("Please specify a handle property for control", t)
                },
                a = function() {
                    return i.Wistia._controlDefinitions || {}
                };
            i.Wistia.defineControl = function(t) {
                (0, r.countMetric)("player/custom-control-definition", 1, {
                    name: t.handle,
                    location: location.origin + location.pathname
                }), o(t)
            }
        },
        73: (t, e, n) => {
            n.d(e, {
                countMetric: () => u
            });
            var r = n(5),
                i = n(8),
                o = n(38),
                a = n(23),
                s = n(16);
            null == s.Wistia._simpleMetricsCache && (s.Wistia._simpleMetricsCache = {}), null == s.Wistia._simpleMetricsDebounceInterval && (s.Wistia._simpleMetricsDebounceInterval = 500);
            var c = s.Wistia._simpleMetricsCache,
                u = function(t) {
                    return f("count", t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
                },
                l = function() {
                    if ((0, o.isVisitorTrackingEnabled)()) {
                        for (var t = "https://".concat((0, a.metricsHost)(), "/mput?topic=metrics"), e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                        return fetch(t, {
                            method: "POST",
                            mode: "cors",
                            headers: {
                                "Content-Type": "application/x-www-form-urlencoded"
                            },
                            body: n.join("\n")
                        }).then((function(t) {
                            t.ok || console.error(t)
                        })).catch((function(t) {
                            console.error(t)
                        }))
                    }
                },
                f = function(t, e, n) {
                    var a, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if ((0, o.isVisitorTrackingEnabled)()) try {
                        null == c.toMput && (c.toMput = []);
                        var f = (0, r.assign)({
                                type: t,
                                key: e,
                                value: null != n ? n : null
                            }, u),
                            p = JSON.stringify(f, (a = new WeakSet, function(t, e) {
                                if ("object" == typeof e && null !== e) {
                                    if (a.has(e)) return "[Circular]";
                                    a.add(e)
                                }
                                return e
                            }));
                        c.toMput.push(p), clearTimeout(s.Wistia._msendTimeout), s.Wistia._msendTimeout = setTimeout((function() {
                            (0, i.pageLoaded)((function() {
                                l.apply(undefined, c.toMput), c.toMput = []
                            }))
                        }), s.Wistia._simpleMetricsDebounceInterval)
                    } catch (t) {
                        console.error(t.message), console.error(t.stack)
                    }
                }
        },
        90: (t, e, n) => {
            n.d(e, {
                getViewerPreference: () => o,
                setViewerPreference: () => a
            });
            var r = n(40),
                i = function() {
                    return "wistia-viewer-preferences"
                },
                o = function(t) {
                    var e = (0, r.getLocalStorage)(i());
                    return e ? e[t] : null
                },
                a = function(t, e) {
                    (0, r.updateLocalStorage)(i(), (function(n) {
                        n.plugin && delete n.plugin, n[t] = e
                    }))
                }
        },
        166: (t, e, n) => {
            function r(t) {
                return function(t) {
                    if (Array.isArray(t)) return i(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return i(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? i(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function i(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function o(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, a(r.key), r)
                }
            }

            function a(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            n.d(e, {
                Interpolation: () => s
            });
            var s = function() {
                return t = function t() {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t);
                    var e = arguments.length <= 0 ? void 0 : arguments[0],
                        n = e.seedRange,
                        r = e.seedFunction,
                        i = e.seedStart,
                        o = e.outputStart,
                        a = null != o ? o : 0,
                        s = e.outputEnd,
                        c = null != s ? s : 1,
                        u = e.easing,
                        l = null != u ? u : t.linear;
                    if (null == n) throw new Error("Must provide seedRange argument");
                    if (null != r && "function" != typeof r) throw new Error("Given seed is not a function");
                    if ("function" != typeof l) throw new Error("Invalid easing function given: ".concat(this.easing));
                    this._seedRange = n, this._seedFunction = r || function() {
                        return (new Date).getTime()
                    }, this._outputStart = a, this._outputEnd = c, this._easing = l, this._seedStart = (null == i ? void 0 : i()) || this.seed()
                }, n = [{
                    key: "linear",
                    value: function(t, e, n, r) {
                        return t * e / (n || 1) + r
                    }
                }, {
                    key: "easeInOut",
                    value: function(t, e, n, r) {
                        return (e /= (n || 1) / 2) < 1 ? t / 2 * e * e + r : -t / 2 * ((e -= 1) * (e - 2) - 1) + r
                    }
                }], (e = [{
                    key: "seed",
                    value: function() {
                        return this.seedFunction()()
                    }
                }, {
                    key: "seedStart",
                    value: function() {
                        return this._seedStart
                    }
                }, {
                    key: "seedRange",
                    value: function() {
                        return this._valOrFn(this._seedRange)
                    }
                }, {
                    key: "seedFunction",
                    value: function() {
                        return this._seedFunction
                    }
                }, {
                    key: "outputStart",
                    value: function() {
                        return this._valOrFn(this._outputStart)
                    }
                }, {
                    key: "outputEnd",
                    value: function() {
                        return this._valOrFn(this._outputEnd)
                    }
                }, {
                    key: "easing",
                    value: function() {
                        return this._valOrFn(this._easing)
                    }
                }, {
                    key: "value",
                    value: function() {
                        return this._easing.apply(this, r(Array.from(this.easingArgs() || [])))
                    }
                }, {
                    key: "atEnd",
                    value: function() {
                        return 1 === this.ratio()
                    }
                }, {
                    key: "atStart",
                    value: function() {
                        return 0 === this.ratio()
                    }
                }, {
                    key: "easingArgs",
                    value: function() {
                        return [this.c(), this.t(), this.d(), this.b()]
                    }
                }, {
                    key: "seedDelta",
                    value: function() {
                        return this.seedRange() > 0 ? Math.min(this.seedRange(), this.seed() - this.seedStart()) : this.seedRange() < 0 ? Math.max(this.seedRange(), this.seed() - this.seedStart()) : 0
                    }
                }, {
                    key: "ratio",
                    value: function() {
                        var t = this.seedRange();
                        return 0 === t ? 1 : Math.max(0, Math.min(1, this.seedDelta() / t))
                    }
                }, {
                    key: "c",
                    value: function() {
                        return this.outputEnd() - this.outputStart()
                    }
                }, {
                    key: "t",
                    value: function() {
                        return this.seedDelta()
                    }
                }, {
                    key: "d",
                    value: function() {
                        return this.seedRange()
                    }
                }, {
                    key: "b",
                    value: function() {
                        return this.outputStart()
                    }
                }, {
                    key: "_valOrFn",
                    value: function(t) {
                        return "function" == typeof t ? t() : t
                    }
                }]) && o(t.prototype, e), n && o(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e, n
            }()
        },
        182: (t, e, n) => {
            n.d(e, {
                default: () => p
            });
            var r = n(2),
                i = n(183);

            function o() {
                return o = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, o.apply(null, arguments)
            }

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
                }
            }

            function s(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function c(t, e, n) {
                return e = l(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }
            const p = function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), c(this, e, arguments)
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && f(t, e)
                }(e, t), n = e, (s = [{
                    key: "render",
                    value: function() {
                        var t = this.props.tagName || "div";
                        return (0, r.h)(t, o({}, this.props, {
                            ref: this.props.elemRef,
                            style: i.visuallyHiddenElementStyles
                        }), this.props.children)
                    }
                }]) && a(n.prototype, s), u && a(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, s, u
            }(r.Component)
        },
        183: (t, e, n) => {
            n.d(e, {
                visuallyHiddenElementStyles: () => r
            });
            var r = {
                clip: "rect(1px, 1px, 1px, 1px)",
                height: "1px",
                overflow: "hidden",
                position: "absolute",
                whiteSpace: "nowrap",
                width: "1px"
            }
        },
        185: (t, e, n) => {
            n.d(e, {
                default: () => u
            });
            var r = n(70);

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, o(r.key), r)
                }
            }

            function o(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function a(t, e, n) {
                (function(t, e) {
                    if (e.has(t)) throw new TypeError("Cannot initialize the same private elements twice on an object")
                })(t, e), e.set(t, n)
            }

            function s(t, e, n) {
                if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
                throw new TypeError("Private element is not present on this object")
            }
            var c = new WeakMap;
            const u = function() {
                return t = function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), a(this, c, void 0), this.video = e, this.embedElement = e.container, this.unbinds = [], this.eventListeners = new Map, this.reactMounts = {}, this.isWistiaPlayer = "WISTIA-PLAYER" === this.embedElement.tagName, this.impl = e, this.api = this.isWistiaPlayer ? this.embedElement : e.publicApi, this.props = {}
                }, (e = [{
                    key: "mount",
                    value: function(t) {
                        this.rootElem = t
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        (0, r.destroyControl)(this)
                    }
                }, {
                    key: "disabledButton",
                    get: function() {
                        return e = this, (t = c).get(s(t, e));
                        var t, e
                    },
                    set: function(t) {
                        var e, n, r;
                        n = this, r = t, (e = c).set(s(e, n), r)
                    }
                }]) && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e, n
            }()
        },
        191: (t, e, n) => {
            n.d(e, {
                controlMultiplierBasedOnVideo: () => l
            });
            n(3), n(71);
            var r = n(9),
                i = n(4);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return a(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var s = (0, r.cachedDetect)(),
                c = function() {
                    var t = document.querySelector("meta[name=viewport]"),
                        e = t && t.getAttribute("content"),
                        n = {};
                    e && e.split(/[\s,]+/).forEach((function(t) {
                        var e = t.split("=");
                        2 === e.length && (n[e[0]] = (0, i.cast)(e[1]))
                    }));
                    return n
                },
                u = function(t) {
                    if (!(s.iphone || s.ipad || s.android)) return [640, 960];
                    if (null != t && t.isAudio()) return [500, 960];
                    var e, n = c();
                    if (n.width) {
                        e = "number" == typeof n.width ? 0 + n.width : screen.width || window.innerWidth;
                        var r = Math.max(n["minimum-scale"] || 0, Math.min(n["maximum-scale"] || 10, n["initial-scale"] || 1));
                        r < 1 && (e /= r)
                    } else e = window.innerWidth;
                    return [e, 2 * e / 3]
                },
                l = function(t, e) {
                    var n = t.videoWidth(),
                        r = t.videoHeight();
                    if (n / r < 1) {
                        var i = o(function(t) {
                                if (!(s.iphone || s.ipad || s.android)) return [340, 860];
                                if (null != t && t.isAudio()) return [500, 960];
                                var e, n = c();
                                if (n.height) {
                                    e = "number" == typeof n.height ? 0 + n.height : screen.height || window.innerHeight;
                                    var r = Math.max(n["minimum-scale"] || 0, Math.min(n["maximum-scale"] || 10, n["initial-scale"] || 1));
                                    r < 1 && (e /= r)
                                } else e = window.innerWidth;
                                return [e, 2 * e / 1.3]
                            }(t), 2),
                            a = i[0],
                            l = i[1];
                        if (r <= a) return r / a;
                        if (r > l) return r / l
                    } else {
                        var f = o(e || u(t), 2),
                            p = f[0],
                            h = f[1];
                        if (n <= p) return n / p;
                        if (n > h) return n / h
                    }
                    return 1
                }
        },
        193: (t, e, n) => {
            n.d(e, {
                useCallback: () => C,
                useContext: () => E,
                useDebugValue: () => k,
                useEffect: () => _,
                useId: () => P,
                useImperativeHandle: () => O,
                useLayoutEffect: () => w,
                useMemo: () => T,
                useReducer: () => b,
                useRef: () => S,
                useState: () => m
            });
            var r, i, o, a, s = n(2),
                c = 0,
                u = [],
                l = s.options,
                f = l.__b,
                p = l.__r,
                h = l.diffed,
                d = l.__c,
                v = l.unmount,
                y = l.__;

            function g(t, e) {
                l.__h && l.__h(i, t, c || e), c = 0;
                var n = i.__H || (i.__H = {
                    __: [],
                    __h: []
                });
                return t >= n.__.length && n.__.push({}), n.__[t]
            }

            function m(t) {
                return c = 1, b(R, t)
            }

            function b(t, e, n) {
                var o = g(r++, 2);
                if (o.t = t, !o.__c && (o.__ = [n ? n(e) : R(void 0, e), function(t) {
                        var e = o.__N ? o.__N[0] : o.__[0],
                            n = o.t(e, t);
                        e !== n && (o.__N = [n, o.__[1]], o.__c.setState({}))
                    }], o.__c = i, !i.__f)) {
                    var a = function(t, e, n) {
                        if (!o.__c.__H) return !0;
                        var r = o.__c.__H.__.filter((function(t) {
                            return !!t.__c
                        }));
                        if (r.every((function(t) {
                                return !t.__N
                            }))) return !s || s.call(this, t, e, n);
                        var i = o.__c.props !== t;
                        return r.forEach((function(t) {
                            if (t.__N) {
                                var e = t.__[0];
                                t.__ = t.__N, t.__N = void 0, e !== t.__[0] && (i = !0)
                            }
                        })), s && s.call(this, t, e, n) || i
                    };
                    i.__f = !0;
                    var s = i.shouldComponentUpdate,
                        c = i.componentWillUpdate;
                    i.componentWillUpdate = function(t, e, n) {
                        if (this.__e) {
                            var r = s;
                            s = void 0, a(t, e, n), s = r
                        }
                        c && c.call(this, t, e, n)
                    }, i.shouldComponentUpdate = a
                }
                return o.__N || o.__
            }

            function _(t, e) {
                var n = g(r++, 3);
                !l.__s && I(n.__H, e) && (n.__ = t, n.u = e, i.__H.__h.push(n))
            }

            function w(t, e) {
                var n = g(r++, 4);
                !l.__s && I(n.__H, e) && (n.__ = t, n.u = e, i.__h.push(n))
            }

            function S(t) {
                return c = 5, T((function() {
                    return {
                        current: t
                    }
                }), [])
            }

            function O(t, e, n) {
                c = 6, w((function() {
                    if ("function" == typeof t) {
                        var n = t(e());
                        return function() {
                            t(null), n && "function" == typeof n && n()
                        }
                    }
                    if (t) return t.current = e(),
                        function() {
                            return t.current = null
                        }
                }), null == n ? n : n.concat(t))
            }

            function T(t, e) {
                var n = g(r++, 7);
                return I(n.__H, e) && (n.__ = t(), n.__H = e, n.__h = t), n.__
            }

            function C(t, e) {
                return c = 8, T((function() {
                    return t
                }), e)
            }

            function E(t) {
                var e = i.context[t.__c],
                    n = g(r++, 9);
                return n.c = t, e ? (null == n.__ && (n.__ = !0, e.sub(i)), e.props.value) : t.__
            }

            function k(t, e) {
                l.useDebugValue && l.useDebugValue(e ? e(t) : t)
            }

            function P() {
                var t = g(r++, 11);
                if (!t.__) {
                    for (var e = i.__v; null !== e && !e.__m && null !== e.__;) e = e.__;
                    var n = e.__m || (e.__m = [0, 0]);
                    t.__ = "P" + n[0] + "-" + n[1]++
                }
                return t.__
            }

            function x() {
                for (var t; t = u.shift();)
                    if (t.__P && t.__H) try {
                        t.__H.__h.forEach(L), t.__H.__h.forEach(M), t.__H.__h = []
                    } catch (e) {
                        t.__H.__h = [], l.__e(e, t.__v)
                    }
            }
            l.__b = function(t) {
                i = null, f && f(t)
            }, l.__ = function(t, e) {
                t && e.__k && e.__k.__m && (t.__m = e.__k.__m), y && y(t, e)
            }, l.__r = function(t) {
                p && p(t), r = 0;
                var e = (i = t.__c).__H;
                e && (o === i ? (e.__h = [], i.__h = [], e.__.forEach((function(t) {
                    t.__N && (t.__ = t.__N), t.u = t.__N = void 0
                }))) : (e.__h.forEach(L), e.__h.forEach(M), e.__h = [], r = 0)), o = i
            }, l.diffed = function(t) {
                h && h(t);
                var e = t.__c;
                e && e.__H && (e.__H.__h.length && (1 !== u.push(e) && a === l.requestAnimationFrame || ((a = l.requestAnimationFrame) || j)(x)), e.__H.__.forEach((function(t) {
                    t.u && (t.__H = t.u), t.u = void 0
                }))), o = i = null
            }, l.__c = function(t, e) {
                e.some((function(t) {
                    try {
                        t.__h.forEach(L), t.__h = t.__h.filter((function(t) {
                            return !t.__ || M(t)
                        }))
                    } catch (n) {
                        e.some((function(t) {
                            t.__h && (t.__h = [])
                        })), e = [], l.__e(n, t.__v)
                    }
                })), d && d(t, e)
            }, l.unmount = function(t) {
                v && v(t);
                var e, n = t.__c;
                n && n.__H && (n.__H.__.forEach((function(t) {
                    try {
                        L(t)
                    } catch (t) {
                        e = t
                    }
                })), n.__H = void 0, e && l.__e(e, n.__v))
            };
            var A = "function" == typeof requestAnimationFrame;

            function j(t) {
                var e, n = function() {
                        clearTimeout(r), A && cancelAnimationFrame(e), setTimeout(t)
                    },
                    r = setTimeout(n, 100);
                A && (e = requestAnimationFrame(n))
            }

            function L(t) {
                var e = i,
                    n = t.__c;
                "function" == typeof n && (t.__c = void 0, n()), i = e
            }

            function M(t) {
                var e = i;
                t.__c = t.__(), i = e
            }

            function I(t, e) {
                return !t || t.length !== e.length || e.some((function(e, n) {
                    return e !== t[n]
                }))
            }

            function R(t, e) {
                return "function" == typeof e ? e(t) : e
            }
        },
        246: (t, e, n) => {
            n.d(e, {
                BASE_CONTROL_BAR_HEIGHT_PX: () => r,
                DEFAULT_BUTTON_HEIGHT_PX: () => i,
                DEFAULT_BUTTON_MARGIN_RIGHT_PX: () => s,
                DEFAULT_BUTTON_WIDTH_PX: () => o,
                DEFAULT_DIALOG_MENU_ITEM_FONT_SIZE_PX: () => a,
                DEFAULT_MENU_ITEM_HEIGHT_PX: () => c
            });
            var r = 34,
                i = r,
                o = 40,
                a = 14,
                s = 10,
                c = 40
        },
        249: (t, e, n) => {
            n.d(e, {
                getCaptionSettings: () => f,
                getCaptionViewerPreferences: () => l,
                updateCaptionViewerPreferences: () => p
            });
            var r = n(250),
                i = n(251),
                o = n(90);

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function c(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var u = "captionsViewerPreferences",
                l = function() {
                    var t, e = (0, o.getViewerPreference)(u);
                    return "object" != typeof(t = e) || null == t ? {} : e
                },
                f = function() {
                    var t = l();
                    return (0, i.isCaptionsSettings)(t) ? t : s({}, r.DEFAULT_CAPTION_SETTINGS)
                },
                p = function(t) {
                    (0, o.setViewerPreference)(u, s(s({}, l()), t))
                }
        },
        250: (t, e, n) => {
            n.d(e, {
                BASE_COLORS: () => c,
                CAPTIONS_FONT_FAMILY_MAP: () => i,
                DEFAULT_CAPTION_SETTINGS: () => u,
                FONT_SIZES: () => o,
                NARROW_WIDTH_THRESHOLD_PX: () => f,
                NON_ZERO_OPACITY_PERCENTAGES: () => s,
                OPACITY_PERCENTAGES: () => a,
                SETTINGS_MENU_PADDING_X_PX: () => l
            });
            var r = n(28),
                i = new Map([
                    ["Monospace serif", '"Courier New", Courier, "Nimbus Mono L", "Cutive Mono", monospace'],
                    ["Monospace sans-serif", '"Deja Vu Sans Mono", "Lucida Console", Monaco, Consolas, "PT Mono", monospace'],
                    ["Proportional serif", '"Times New Roman", Times, Georgia, Cambria, "PT Serif Caption", serif'],
                    ["Proportional sans-serif", r.interFontFamily],
                    ["Casual", '"Comic Sans MS", Impact, Handlee, fantasy'],
                    ["Cursive", '"Monotype Corsiva", "URW Chancery L", "Apple Chancery", "Dancing Script", cursive'],
                    ["Small caps", r.interFontFamily]
                ]),
                o = [100, 120, 140, 160],
                a = [100, 75, 50, 25, 0],
                s = a.filter((function(t) {
                    return 0 !== t
                })),
                c = ["#000000", "#FFF200", "#00F024", "#00EAFF", "#001AFF", "#FF00AA", "#FF0000", "#FFFFFF"],
                u = {
                    fontSize: o[0],
                    fontOpacityPercentage: a[0],
                    backgroundOpacityPercentage: a[1],
                    windowOpacityPercentage: a[a.length - 1],
                    fontColor: c[c.length - 1],
                    backgroundColor: c[0],
                    windowColor: c[0],
                    fontFamily: "Proportional sans-serif",
                    characterEdgeStyle: "None"
                },
                l = 16,
                f = 340
        },
        251: (t, e, n) => {
            n.d(e, {
                isCaptionColor: () => a,
                isCaptionFontSize: () => i,
                isCaptionOpacityPercentage: () => o,
                isCaptionsSettings: () => s
            });
            var r = n(250),
                i = function(t) {
                    return r.FONT_SIZES.some((function(e) {
                        return e === t
                    }))
                },
                o = function(t) {
                    return r.OPACITY_PERCENTAGES.some((function(e) {
                        return e === t
                    }))
                },
                a = function(t) {
                    return r.BASE_COLORS.some((function(e) {
                        return e === t
                    }))
                },
                s = function(t) {
                    if ("object" != typeof t || null === t) return !1;
                    var e = t;
                    return a(e.backgroundColor) && o(e.backgroundOpacityPercentage) && a(e.fontColor) && i(e.fontSize) && o(e.fontOpacityPercentage) && a(e.windowColor) && o(e.windowOpacityPercentage)
                }
        },
        253: (t, e, n) => {
            n.d(e, {
                getFontFamilyForFontOptionLabel: () => o
            });
            var r = n(250),
                i = n(28),
                o = function(t) {
                    var e;
                    return null !== (e = r.CAPTIONS_FONT_FAMILY_MAP.get(t)) && void 0 !== e ? e : i.interFontFamily
                }
        },
        255: (t, e, n) => {
            n.d(e, {
                getFontVariantForFontOptionLabel: () => r
            });
            var r = function(t) {
                return "Small caps" === t ? "small-caps" : "normal"
            }
        },
        319: (t, e, n) => {
            n.d(e, {
                getLoadedSelfHostedGoogleFonts: () => o,
                loadSelfHostedGoogleFont: () => a
            });
            n(36);
            var r = ["Arsenal", "Barlow Condensed", "Catamaran", "Chivo", "Corben", "Dancing Script", "Fira Mono", "Inconsolata", "Inter", "Lato", "Libre Franklin", "Lora", "Merriweather", "Montserrat", "Nunito", "Open Sans", "Oswald", "PT Serif", "Playfair Display", "Poppins", "Roboto", "Slabo 13px", "Source Sans Pro", "Source Serif Pro", "Work Sans", "Zilla Slab"],
                i = "https://fast.wistia.com/fonts/google_fonts/",
                o = function() {
                    var t = document.querySelectorAll('link[rel="stylesheet"][href^="'.concat(i, '"]'));
                    return 0 === t.length ? [] : Array.from(t).reduce((function(t, e) {
                        var n = new URL(e.href).pathname.split("/")[3];
                        return t.includes(n) || t.push(n), t
                    }), [])
                },
                a = function(t) {
                    if (r.includes(t)) {
                        var e = encodeURIComponent(t).replaceAll("%20", "_");
                        if (!o().includes(e)) {
                            var n = document.createElement("link");
                            n.rel = "stylesheet", n.href = "".concat(i).concat(e, "/").concat(e, ".css"), document.head.appendChild(n)
                        }
                    }
                }
        },
        441: (t, e, n) => {
            n.d(e, {
                forwardRef: () => y
            });
            var r = n(2),
                i = n(193);

            function o(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function a(t, e) {
                for (var n in t)
                    if ("__source" !== n && !(n in e)) return !0;
                for (var r in e)
                    if ("__source" !== r && t[r] !== e[r]) return !0;
                return !1
            }

            function s(t, e) {
                var n = e(),
                    r = (0, i.useState)({
                        t: {
                            __: n,
                            u: e
                        }
                    }),
                    o = r[0].t,
                    a = r[1];
                return (0, i.useLayoutEffect)((function() {
                    o.__ = n, o.u = e, c(o) && a({
                        t: o
                    })
                }), [t, n, e]), (0, i.useEffect)((function() {
                    return c(o) && a({
                        t: o
                    }), t((function() {
                        c(o) && a({
                            t: o
                        })
                    }))
                }), [t]), n
            }

            function c(t) {
                var e, n, r = t.u,
                    i = t.__;
                try {
                    var o = r();
                    return !((e = i) === (n = o) && (0 !== e || 1 / e == 1 / n) || e != e && n != n)
                } catch (t) {
                    return !0
                }
            }

            function u(t) {
                t()
            }

            function l(t) {
                return t
            }

            function f() {
                return [!1, u]
            }
            var p = i.useLayoutEffect;

            function h(t, e) {
                this.props = t, this.context = e
            }(h.prototype = new r.Component).isPureReactComponent = !0, h.prototype.shouldComponentUpdate = function(t, e) {
                return a(this.props, t) || a(this.state, e)
            };
            var d = r.options.__b;
            r.options.__b = function(t) {
                t.type && t.type.__f && t.ref && (t.props.ref = t.ref, t.ref = null), d && d(t)
            };
            var v = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;

            function y(t) {
                function e(e) {
                    var n = o({}, e);
                    return delete n.ref, t(n, e.ref || null)
                }
                return e.$$typeof = v, e.render = e, e.prototype.isReactComponent = e.__f = !0, e.displayName = "ForwardRef(" + (t.displayName || t.name) + ")", e
            }
            var g = function(t, e) {
                    return null == t ? null : (0, r.toChildArray)((0, r.toChildArray)(t).map(e))
                },
                m = (r.toChildArray, r.options.__e);
            r.options.__e = function(t, e, n, r) {
                if (t.then)
                    for (var i, o = e; o = o.__;)
                        if ((i = o.__c) && i.__c) return null == e.__e && (e.__e = n.__e, e.__k = n.__k), i.__c(t, e);
                m(t, e, n, r)
            };
            var b = r.options.unmount;

            function _(t, e, n) {
                return t && (t.__c && t.__c.__H && (t.__c.__H.__.forEach((function(t) {
                    "function" == typeof t.__c && t.__c()
                })), t.__c.__H = null), null != (t = o({}, t)).__c && (t.__c.__P === n && (t.__c.__P = e), t.__c.__e = !0, t.__c = null), t.__k = t.__k && t.__k.map((function(t) {
                    return _(t, e, n)
                }))), t
            }

            function w(t, e, n) {
                return t && n && (t.__v = null, t.__k = t.__k && t.__k.map((function(t) {
                    return w(t, e, n)
                })), t.__c && t.__c.__P === e && (t.__e && n.appendChild(t.__e), t.__c.__e = !0, t.__c.__P = n)), t
            }

            function S() {
                this.__u = 0, this.o = null, this.__b = null
            }

            function O(t) {
                var e = t.__.__c;
                return e && e.__a && e.__a(t)
            }

            function T() {
                this.i = null, this.l = null
            }
            r.options.unmount = function(t) {
                var e = t.__c;
                e && e.__R && e.__R(), e && 32 & t.__u && (t.type = null), b && b(t)
            }, (S.prototype = new r.Component).__c = function(t, e) {
                var n = e.__c,
                    r = this;
                null == r.o && (r.o = []), r.o.push(n);
                var i = O(r.__v),
                    o = !1,
                    a = function() {
                        o || (o = !0, n.__R = null, i ? i(s) : s())
                    };
                n.__R = a;
                var s = function() {
                    if (!--r.__u) {
                        if (r.state.__a) {
                            var t = r.state.__a;
                            r.__v.__k[0] = w(t, t.__c.__P, t.__c.__O)
                        }
                        var e;
                        for (r.setState({
                                __a: r.__b = null
                            }); e = r.o.pop();) e.forceUpdate()
                    }
                };
                r.__u++ || 32 & e.__u || r.setState({
                    __a: r.__b = r.__v.__k[0]
                }), t.then(a, a)
            }, S.prototype.componentWillUnmount = function() {
                this.o = []
            }, S.prototype.render = function(t, e) {
                if (this.__b) {
                    if (this.__v.__k) {
                        var n = document.createElement("div"),
                            i = this.__v.__k[0].__c;
                        this.__v.__k[0] = _(this.__b, n, i.__O = i.__P)
                    }
                    this.__b = null
                }
                var o = e.__a && (0, r.createElement)(r.Fragment, null, t.fallback);
                return o && (o.__u &= -33), [(0, r.createElement)(r.Fragment, null, e.__a ? null : t.children), o]
            };
            var C = function(t, e, n) {
                if (++n[1] === n[0] && t.l.delete(e), t.props.revealOrder && ("t" !== t.props.revealOrder[0] || !t.l.size))
                    for (n = t.i; n;) {
                        for (; n.length > 3;) n.pop()();
                        if (n[1] < n[0]) break;
                        t.i = n = n[2]
                    }
            };
            (T.prototype = new r.Component).__a = function(t) {
                var e = this,
                    n = O(e.__v),
                    r = e.l.get(t);
                return r[0]++,
                    function(i) {
                        var o = function() {
                            e.props.revealOrder ? (r.push(i), C(e, t, r)) : i()
                        };
                        n ? n(o) : o()
                    }
            }, T.prototype.render = function(t) {
                this.i = null, this.l = new Map;
                var e = (0, r.toChildArray)(t.children);
                t.revealOrder && "b" === t.revealOrder[0] && e.reverse();
                for (var n = e.length; n--;) this.l.set(e[n], this.i = [1, 0, this.i]);
                return t.children
            }, T.prototype.componentDidUpdate = T.prototype.componentDidMount = function() {
                var t = this;
                this.l.forEach((function(e, n) {
                    C(t, n, e)
                }))
            };
            var E = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103,
                k = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,
                P = /^on(Ani|Tra|Tou|BeforeInp|Compo)/,
                x = /[A-Z0-9]/g,
                A = "undefined" != typeof document,
                j = function(t) {
                    return ("undefined" != typeof Symbol && "symbol" == typeof Symbol() ? /fil|che|rad/ : /fil|che|ra/).test(t)
                };
            r.Component.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach((function(t) {
                Object.defineProperty(r.Component.prototype, t, {
                    configurable: !0,
                    get: function() {
                        return this["UNSAFE_" + t]
                    },
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            }));
            var L = r.options.event;

            function M() {}

            function I() {
                return this.cancelBubble
            }

            function R() {
                return this.defaultPrevented
            }
            r.options.event = function(t) {
                return L && (t = L(t)), t.persist = M, t.isPropagationStopped = I, t.isDefaultPrevented = R, t.nativeEvent = t
            };
            var F, D = {
                    enumerable: !1,
                    configurable: !0,
                    get: function() {
                        return this.class
                    }
                },
                W = r.options.vnode;
            r.options.vnode = function(t) {
                "string" == typeof t.type && function(t) {
                    var e = t.props,
                        n = t.type,
                        i = {},
                        o = -1 === n.indexOf("-");
                    for (var a in e) {
                        var s = e[a];
                        if (!("value" === a && "defaultValue" in e && null == s || A && "children" === a && "noscript" === n || "class" === a || "className" === a)) {
                            var c = a.toLowerCase();
                            "defaultValue" === a && "value" in e && null == e.value ? a = "value" : "download" === a && !0 === s ? s = "" : "translate" === c && "no" === s ? s = !1 : "o" === c[0] && "n" === c[1] ? "ondoubleclick" === c ? a = "ondblclick" : "onchange" !== c || "input" !== n && "textarea" !== n || j(e.type) ? "onfocus" === c ? a = "onfocusin" : "onblur" === c ? a = "onfocusout" : P.test(a) && (a = c) : c = a = "oninput" : o && k.test(a) ? a = a.replace(x, "-$&").toLowerCase() : null === s && (s = void 0), "oninput" === c && i[a = c] && (a = "oninputCapture"), i[a] = s
                        }
                    }
                    "select" == n && i.multiple && Array.isArray(i.value) && (i.value = (0, r.toChildArray)(e.children).forEach((function(t) {
                        t.props.selected = -1 != i.value.indexOf(t.props.value)
                    }))), "select" == n && null != i.defaultValue && (i.value = (0, r.toChildArray)(e.children).forEach((function(t) {
                        t.props.selected = i.multiple ? -1 != i.defaultValue.indexOf(t.props.value) : i.defaultValue == t.props.value
                    }))), e.class && !e.className ? (i.class = e.class, Object.defineProperty(i, "className", D)) : (e.className && !e.class || e.class && e.className) && (i.class = i.className = e.className), t.props = i
                }(t), t.$$typeof = E, W && W(t)
            };
            var H = r.options.__r;
            r.options.__r = function(t) {
                H && H(t), F = t.__c
            };
            var N = r.options.diffed;
            r.options.diffed = function(t) {
                N && N(t);
                var e = t.props,
                    n = t.__e;
                null != n && "textarea" === t.type && "value" in e && e.value !== n.value && (n.value = null == e.value ? "" : e.value), F = null
            };
            i.useCallback, i.useContext, i.useDebugValue, i.useEffect, i.useId, i.useImperativeHandle, i.useLayoutEffect, i.useMemo, i.useReducer, i.useRef, i.useState;
            r.Fragment, i.useState, i.useId, i.useReducer, i.useEffect, i.useLayoutEffect, i.useRef, i.useImperativeHandle, i.useMemo, i.useCallback, i.useContext, i.useDebugValue, r.createElement, r.createContext, r.createRef, r.Fragment, r.Component
        },
        447: (t, e, n) => {
            var r = n(2),
                i = n(9),
                o = n(46),
                a = n(185),
                s = n(448),
                c = n(449),
                u = n(72),
                l = n(45),
                f = n(472),
                p = n(44),
                h = n(249),
                d = n(4),
                v = n(16);

            function y() {
                return y = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, y.apply(null, arguments)
            }

            function g(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, O(r.key), r)
                }
            }

            function m(t, e, n) {
                return e = _(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, b() ? Reflect.construct(e, n || [], _(t).constructor) : e.apply(t, n))
            }

            function b() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (b = function() {
                    return !!t
                })()
            }

            function _(t) {
                return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, _(t)
            }

            function w(t, e) {
                return w = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, w(t, e)
            }

            function S(t, e, n) {
                return (e = O(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function O(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var T = (0, i.cachedDetect)();
            (0, l.defineTranslations)("en-US", {
                CAPTIONS_HIDE_MENU: "Hide captions menu",
                CAPTIONS_OFF: "Off",
                CAPTIONS_SHOW_MENU: "Show captions menu"
            });
            var C = "_off_",
                E = ["playerLanguage", "scale", "controlBarBorderRadius", "videoWidth"],
                k = function(t) {
                    function e(t) {
                        var n, r, i;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), S(i = m(this, e, [t]), "onCaptionSettingsChange", (function(t, e) {
                            i.video.embedElement.dispatchEvent(new CustomEvent("captionssettingschange", {
                                detail: t
                            })), v.Wistia.Metrics.videoCount(i.video, "player/captions-settings-change", 1, {
                                allSettings: t,
                                changedSettings: e
                            })
                        })), S(i, "toggleTranscript", (function() {
                            i.video.whenControlMounted("transcript").then((function(t) {
                                t._isVisible ? t.close() : t.open()
                            }))
                        })), i.video = t, i.options = t.plugin.captions.options, i._menuKey = 0;
                        var o = null != i.options.language && (null !== (n = null !== (r = t.plugin.captions.captions) && void 0 !== r ? r : t._mediaData.availableTranscripts) && void 0 !== n ? n : []).some((function(t) {
                            return t.language === i.options.language
                        }));
                        return i.selectedLanguage = o ? i.options.language : C, i.unbinds = [], i
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && w(t, e)
                    }(e, t), n = e, (i = [{
                        key: "mountButton",
                        value: function(t) {
                            var e = this;
                            this.buttonRoot = t, this.renderButton(), this.options.onByDefault && this.fetchCaptions().then((function() {
                                if (!e._destroyed) {
                                    var t = e.getPreferredCaptions();
                                    t && e.setSelectedLanguage(t.language)
                                }
                            }))
                        }
                    }, {
                        key: "mountDialog",
                        value: function(t) {
                            var e = this;
                            this.dialogRoot = t;
                            var n = Promise.all([(0, o.dynamicImport)("assets/external/interFontFace.js"), this.fetchCaptions()]).then((function() {
                                e.renderDialog()
                            }));
                            return this.loading(new Promise((function(t) {
                                n.then(t)
                            }))), n
                        }
                    }, {
                        key: "renderButton",
                        value: function() {
                            this.video._inNativeMode() || this.buttonRoot && (this.updateButtonLabel(), (0, r.render)((0, r.h)(s.RoundedAudioDescriptionButton, null), this.buttonRoot), this.reactMounts.button = [this.buttonRoot])
                        }
                    }, {
                        key: "controlDialogOpened",
                        value: function() {
                            this.updateButtonLabel()
                        }
                    }, {
                        key: "controlDialogClosed",
                        value: function() {
                            this._menuKey += 1, this.renderDialog(), this.updateButtonLabel()
                        }
                    }, {
                        key: "updateButtonLabel",
                        value: function() {
                            this.dialog && (this.dialog.isOpen() ? this.setButtonLabel(this.translate("HIDE_MENU")) : this.setButtonLabel(this.translate("SHOW_MENU")))
                        }
                    }, {
                        key: "renderDialog",
                        value: function() {
                            var t;
                            this.captionsResp && this.dialogRoot && ((0, r.render)((0, r.h)(c.CaptionsMenu, y({}, this.props, {
                                key: this._menuKey,
                                items: this.menuItems(),
                                scale: this.props.scale,
                                isPlaybarEnabled: this.video.isControlEnabled("playbar"),
                                isTranscriptEnabled: this.isTranscriptEnabled(),
                                toggleTranscript: this.toggleTranscript,
                                shouldShowCaptionsSettings: null !== (t = this.video.embedOptions().shouldShowCaptionsSettings) && void 0 !== t && t,
                                onCaptionsSettingsUpdated: this.onCaptionSettingsChange
                            })), this.dialogRoot), this.reactMounts.menu = [this.dialogRoot])
                        }
                    }, {
                        key: "shouldRenderDialog",
                        value: function(t) {
                            var e = this;
                            return this.dialog && this.dialog.isOpen() && E.some((function(n) {
                                return !(0, d.equalsDeep)(t[n], e.props[n])
                            }))
                        }
                    }, {
                        key: "onControlPropsUpdated",
                        value: function(t) {
                            this.shouldRenderDialog(t) && this.renderDialog(), t.playerLanguage && this.props.playerLanguage.code !== t.playerLanguage.code && this.updateButtonLabel()
                        }
                    }, {
                        key: "translate",
                        value: function(t) {
                            return (0, l.getTranslation)(this.props.playerLanguage.code, "CAPTIONS_".concat(t))
                        }
                    }, {
                        key: "isTranscriptEnabled",
                        value: function() {
                            return !1 !== this.options.transcript
                        }
                    }, {
                        key: "tearDownDialogIfClickedRecently",
                        value: function() {
                            var t = this;
                            (0, p.isMouseDownRecently)() && setTimeout((function() {
                                t.dialog.close(), t.buttonRoot.parentElement.focus()
                            }), 300)
                        }
                    }, {
                        key: "clearCaptionsViewerPreferenceLanguage",
                        value: function() {
                            (0, h.updateCaptionViewerPreferences)({
                                language: void 0
                            })
                        }
                    }, {
                        key: "setCaptionsLanguageInViewerPreferences",
                        value: function(t) {
                            (0, h.updateCaptionViewerPreferences)({
                                language: t
                            })
                        }
                    }, {
                        key: "setCaptionsInViewerPreferences",
                        value: function() {
                            (0, h.updateCaptionViewerPreferences)({
                                onByViewerPreferences: this.selectedLanguage !== C,
                                language: this.selectedLanguage === C ? void 0 : this.selectedLanguage
                            })
                        }
                    }, {
                        key: "menuItems",
                        value: function() {
                            var t = this;
                            return [{
                                text: this.translate("OFF"),
                                isSelected: this.selectedLanguage === C,
                                onClick: function() {
                                    t.isTranscriptEnabled() && t.video.whenControlMounted("transcript").then((function(t) {
                                        return t.close()
                                    })), t.turnOff(), t.setCaptionsInViewerPreferences(), t.tearDownDialogIfClickedRecently()
                                }
                            }].concat(this.captionsResp.captions.map((function(e) {
                                return {
                                    text: t.captionsResp.captions.some((function(t) {
                                        return t.native_name !== e.native_name && t.generic_name === e.generic_name
                                    })) ? e.native_name : e.generic_native_name,
                                    isSelected: t.selectedLanguage === e.language,
                                    onClick: function() {
                                        t.setSelectedLanguage(e.language), t.setCaptionsInViewerPreferences(), t.tearDownDialogIfClickedRecently()
                                    }
                                }
                            })).sort((function(e, n) {
                                return e.text === t.translate("OFF") ? -1 : n.text === t.translate("OFF") ? 1 : e.text.localeCompare(n.text)
                            })))
                        }
                    }, {
                        key: "getCaptions",
                        value: function() {
                            return this.captionsResp && this.captionsResp.captions ? this.captionsResp.captions : []
                        }
                    }, {
                        key: "getPreferredCaptions",
                        value: function() {
                            for (var t = this.captionsResp.preferred_languages, e = 0; e < t.length; e++) {
                                var n = t[e],
                                    r = (0, f.getCaptionsForLanguage)(n, this.captionsResp.captions);
                                if (r) return r
                            }
                            return null
                        }
                    }, {
                        key: "turnOff",
                        value: function() {
                            this.setSelectedLanguage(C)
                        }
                    }, {
                        key: "setSelectedLanguage",
                        value: function(t) {
                            var e = this.selectedLanguage;
                            this.selectedLanguage = t, this.renderDialog(), this.video.controls.captions.setLanguage(t), this.logSelectionInStats(), e !== t && (this.video.embedElement.dispatchEvent(new CustomEvent("captions-change", {
                                detail: {
                                    isVisible: t !== C,
                                    language: t
                                }
                            })), this.video.trigger("captionschange", {
                                visible: t !== C,
                                language: t
                            }))
                        }
                    }, {
                        key: "logSelectionInStats",
                        value: function() {
                            if (this.captionsResp) {
                                var t = (0, f.getCaptionsForLanguage)(this.selectedLanguage, this.captionsResp.captions);
                                t && "_preview_" !== t.language ? (this._lastStatsData = {
                                    caption_key: t.key,
                                    language: t.language,
                                    time: this.video.time(),
                                    enabled: t.language !== C
                                }, this.video._tracker.logCaptionSelection(this._lastStatsData)) : this._lastStatsData && (this._lastStatsData.enabled = !1, this._lastStatsData.time = this.video.time(), this.video._tracker.logCaptionSelection(this._lastStatsData))
                            }
                        }
                    }, {
                        key: "fetchCaptions",
                        value: function() {
                            var t = this;
                            return this._destroyed ? new Promise((function() {})) : (0, f.fetchCaptions)(this.video, this.options).then((function(e) {
                                return t.captionsResp = e, e
                            }))
                        }
                    }, {
                        key: "matchMenuToSelectedTextTrack",
                        value: function() {
                            if (!T.edge || this.video._inNativeMode()) {
                                var t = this.video.getMediaElement(),
                                    e = this.selectedLanguage;
                                this.selectedLanguage = C;
                                for (var n = 0; n < t.textTracks.length; n++) {
                                    var r = t.textTracks[n];
                                    "showing" === r.mode && "captions" === r.kind && (this.selectedLanguage = r.language)
                                }
                                this.renderDialog(), this.video.controls.captions.setLanguage(this.selectedLanguage, {
                                    track: !1
                                }), e !== this.selectedLanguage && this.logSelectionInStats()
                            }
                        }
                    }]) && g(n.prototype, i), a && g(n, a), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, i, a
                }(a.default);
            k.handle = "captionsButton", k.type = "control-bar-right", k.sortValue = 50, k.shouldMount = function(t) {
                var e, n, r = t.plugin.captions;
                return null != r && !1 === t.isLiveMedia() && (null != r.captions ? r.captions.length > 0 : (null !== (e = null === (n = t._mediaData.availableTranscripts) || void 0 === n ? void 0 : n.length) && void 0 !== e ? e : 0) > 0)
            }, (0, u.defineControl)(k)
        },
        448: (t, e, n) => {
            n.d(e, {
                RoundedAudioDescriptionButton: () => o
            });
            var r = n(2),
                i = n(30),
                o = function() {
                    var t = (0, i.standardSvgAttrs)({
                        width: 40,
                        height: 34,
                        ariaHidden: !0,
                        styleOverride: {
                            fill: "none"
                        }
                    });
                    return (0, r.h)("svg", t, (0, r.h)("path", {
                        d: "M18.4 18.7C17.9 19.4 17.3 19.9 16.3 19.9C15 19.9 13.9 18.8 13.9 17.1C13.9 15.5 14.9 14.3 16.3 14.3C17.3 14.3 17.9 14.8 18.3 15.5",
                        stroke: "white",
                        "stroke-width": "1.8",
                        "stroke-linecap": "round"
                    }), (0, r.h)("path", {
                        d: "M25.8 18.7C25.3 19.4 24.7 19.9 23.7 19.9C22.4 19.9 21.3 18.8 21.3 17.1C21.3 15.5 22.3 14.3 23.7 14.3C24.7 14.3 25.3 14.8 25.7 15.5",
                        stroke: "white",
                        "stroke-width": "1.8",
                        "stroke-linecap": "round"
                    }), (0, r.h)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M31 21.9811C31 23.5912 29.6 25 28 25H12C10.4 25 9 23.5912 9 21.9811V12.0189C9 10.4088 10.4 9 12 9H28C29.6 9 31 10.4088 31 12.0189V21.9811Z",
                        stroke: "white",
                        "stroke-width": "2",
                        "stroke-linecap": "round"
                    }))
                }
        },
        449: (t, e, n) => {
            n.d(e, {
                CaptionsMenu: () => p
            });
            var r = n(2),
                i = n(450),
                o = n(456),
                a = n(459),
                s = n(182),
                c = n(470),
                u = n(471),
                l = n(246),
                f = n(250),
                p = function(t) {
                    var e = t.isTranscriptEnabled,
                        n = t.isPlaybarEnabled,
                        p = t.items,
                        h = t.controlBarBorderRadius,
                        d = t.scale,
                        v = t.playerLanguage,
                        y = t.toggleTranscript,
                        g = t.shouldShowCaptionsSettings,
                        m = t.onCaptionsSettingsUpdated,
                        b = t.videoWidth < f.NARROW_WIDTH_THRESHOLD_PX;
                    return (0, r.h)(a.MenuRoot, {
                        scale: d,
                        controlBarBorderRadius: h
                    }, (0, r.h)("div", {
                        class: "w-captions-menu w-css-reset w-css-reset-tree",
                        "data-testid": "captions-menu"
                    }, (0, r.h)(a.Menu, null, e && n && (0, r.h)(c.TranscriptItem, {
                        playerLanguage: v,
                        toggleTranscript: y,
                        controlBarBorderRadius: h,
                        scale: d
                    }), (0, r.h)("fieldset", {
                        style: {
                            border: 0,
                            padding: 0,
                            margin: 0
                        }
                    }, (0, r.h)(s.default, {
                        tagName: "legend"
                    }, "Captions Menu"), p.map((function(t, e) {
                        return (0, r.h)(u.CaptionsItem, {
                            controlBarBorderRadius: h,
                            scale: d,
                            item: t,
                            index: e,
                            isLastItem: e === p.length - 1 && !g
                        })
                    }))), g && (0, r.h)(a.MenuTrigger, {
                        menuKey: "captionsSettings",
                        shouldHaveRoundedBottomCorners: !0
                    }, (0, r.h)("div", {
                        style: {
                            height: "".concat(l.DEFAULT_MENU_ITEM_HEIGHT_PX * d, "px"),
                            display: "flex",
                            alignItems: "center",
                            lineHeight: "".concat(l.DEFAULT_BUTTON_HEIGHT_PX * d, "px")
                        }
                    }, (0, r.h)(o.CaptionsSettingsIcon, {
                        scale: d
                    }), "Captions settings"))), (0, r.h)(i.CaptionsSettingsMenu, {
                        onCaptionsSettingsUpdated: m,
                        isNarrow: b
                    })))
                }
        },
        450: (t, e, n) => {
            n.d(e, {
                CaptionsSettingsMenu: () => b
            });
            var r = n(2),
                i = n(451),
                o = n(452),
                a = n(455),
                s = n(456),
                c = n(457),
                u = n(458),
                l = n(459),
                f = n(454),
                p = n(464),
                h = n(468),
                d = n(251),
                v = n(469),
                y = n(250),
                g = function(t) {
                    var e = t.menuKey,
                        n = t.scale,
                        i = t.children;
                    return (0, r.h)(l.MenuTrigger, {
                        menuKey: e
                    }, (0, r.h)("div", {
                        style: {
                            display: "flex",
                            justifyContent: "space-between",
                            width: "100%",
                            fontSize: "".concat(12 * n, "px"),
                            position: "relative",
                            paddingLeft: "".concat(y.SETTINGS_MENU_PADDING_X_PX * n, "px")
                        }
                    }, i, (0, r.h)("div", {
                        style: {
                            position: "absolute",
                            right: 0,
                            top: "50%",
                            transform: "translateY(-50%)"
                        }
                    }, (0, r.h)(a.MenuForwardIcon, {
                        scale: n
                    }))))
                },
                m = function(t) {
                    var e = t.children,
                        n = (0, f.useMenuRootContext)().uiContext.scale;
                    return (0, r.h)("div", {
                        style: {
                            padding: "0 ".concat(y.SETTINGS_MENU_PADDING_X_PX * n, "px")
                        }
                    }, e)
                },
                b = function(t) {
                    var e = t.onCaptionsSettingsUpdated,
                        n = t.isNarrow,
                        a = (0, f.useMenuRootContext)().uiContext.scale,
                        b = (0, i.useCaptionsSettingsFromLocalStorage)({
                            onCaptionsSettingsUpdated: e
                        }),
                        _ = b.captionsSettings,
                        w = b.setCaptionsSettings;
                    return (0, r.h)(r.Fragment, null, (0, r.h)(l.Menu, {
                        menuKey: "captionsSettings",
                        label: "Captions settings"
                    }, (0, r.h)(c.CaptionsSettingsMenuSection, {
                        title: "Font size"
                    }, (0, r.h)(m, null, (0, r.h)(p.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Font size",
                        scale: a
                    }, y.FONT_SIZES.map((function(t) {
                        return (0, r.h)(p.RadioPill, {
                            key: t,
                            name: "font-size",
                            label: "".concat(t, "%"),
                            value: t.toString(),
                            scale: a,
                            checked: _.fontSize === t,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = Number(t.target.value);
                                    (0, d.isCaptionFontSize)(e) && w({
                                        fontSize: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(c.CaptionsSettingsMenuSection, {
                        title: "Font family",
                        style: {
                            gap: "4px"
                        }
                    }, (0, r.h)(g, {
                        menuKey: "font-family",
                        scale: a
                    }, (0, r.h)("span", {
                        style: (0, v.getFontStyleForCaptions)(_.fontFamily)
                    }, _.fontFamily))), (0, r.h)(c.CaptionsSettingsMenuSection, {
                        title: "Font color"
                    }, (0, r.h)(m, null, (0, r.h)(p.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Font color",
                        scale: a
                    }, y.BASE_COLORS.map((function(t) {
                        return (0, r.h)(p.RadioColorSwatch, {
                            key: t,
                            scale: a,
                            name: "Font color",
                            ariaLabel: t,
                            value: t,
                            checked: _.fontColor === t,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = t.target.value;
                                    (0, d.isCaptionColor)(e) && w({
                                        fontColor: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(c.CaptionsSettingsMenuSection, {
                        title: "Font opacity"
                    }, (0, r.h)(m, null, (0, r.h)(p.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Font opacity",
                        scale: a
                    }, y.NON_ZERO_OPACITY_PERCENTAGES.map((function(t) {
                        return (0, r.h)(p.RadioPill, {
                            key: t,
                            name: "font-opacity",
                            label: "".concat(t, "%"),
                            value: t.toString(),
                            checked: _.fontOpacityPercentage === t,
                            scale: a,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = Number(t.target.value);
                                    (0, d.isCaptionOpacityPercentage)(e) && w({
                                        fontOpacityPercentage: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(c.CaptionsSettingsMenuSection, {
                        title: "Character edge style",
                        style: {
                            gap: "4px"
                        }
                    }, (0, r.h)(g, {
                        menuKey: "character-edge-styles",
                        scale: a
                    }, _.characterEdgeStyle)), (0, r.h)(c.CaptionsSettingsMenuSection, {
                        title: "Background color"
                    }, (0, r.h)(m, null, (0, r.h)(p.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Background color",
                        scale: a
                    }, y.BASE_COLORS.map((function(t) {
                        return (0, r.h)(p.RadioColorSwatch, {
                            key: t,
                            scale: a,
                            name: "Background color",
                            ariaLabel: t,
                            value: t,
                            checked: _.backgroundColor === t,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = t.target.value;
                                    (0, d.isCaptionColor)(e) && w({
                                        backgroundColor: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(c.CaptionsSettingsMenuSection, {
                        title: "Background opacity"
                    }, (0, r.h)(m, null, (0, r.h)(p.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Background opacity",
                        scale: a
                    }, y.OPACITY_PERCENTAGES.map((function(t) {
                        return (0, r.h)(p.RadioPill, {
                            key: t,
                            name: "background-opacity",
                            label: "".concat(t, "%"),
                            value: t.toString(),
                            scale: a,
                            checked: _.backgroundOpacityPercentage === t,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = Number(t.target.value);
                                    (0, d.isCaptionOpacityPercentage)(e) && w({
                                        backgroundOpacityPercentage: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(c.CaptionsSettingsMenuSection, {
                        title: "Window color"
                    }, (0, r.h)(m, null, (0, r.h)(p.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Window color",
                        scale: a
                    }, y.BASE_COLORS.map((function(t) {
                        return (0, r.h)(p.RadioColorSwatch, {
                            key: t,
                            scale: a,
                            name: "Window color",
                            ariaLabel: t,
                            value: t,
                            checked: _.windowColor === t,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = t.target.value;
                                    (0, d.isCaptionColor)(e) && w({
                                        windowColor: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(c.CaptionsSettingsMenuSection, {
                        title: "Window opacity"
                    }, (0, r.h)(m, null, (0, r.h)(p.RadioGroup, {
                        shouldWrap: n,
                        ariaLabel: "Window opacity",
                        scale: a
                    }, y.OPACITY_PERCENTAGES.map((function(t) {
                        return (0, r.h)(p.RadioPill, {
                            key: t,
                            name: "window-opacity",
                            label: "".concat(t, "%"),
                            value: t.toString(),
                            scale: a,
                            checked: _.windowOpacityPercentage === t,
                            onChange: function(t) {
                                if (t.target instanceof HTMLInputElement) {
                                    var e = Number(t.target.value);
                                    (0, d.isCaptionOpacityPercentage)(e) && w({
                                        windowOpacityPercentage: e
                                    })
                                }
                            }
                        })
                    }))))), (0, r.h)(u.MenuItemButton, {
                        onClick: function() {
                            w(y.DEFAULT_CAPTION_SETTINGS)
                        },
                        shouldHaveRoundedBottomCorners: !0
                    }, (0, r.h)(s.CaptionsSettingsIcon, {
                        scale: a
                    }), "Reset to defaults")), (0, r.h)(l.Menu, {
                        menuKey: "font-family",
                        label: "Font family"
                    }, (0, r.h)(h.FontFamilyRadioGroup, {
                        selectedFontOptionLabel: _.fontFamily,
                        setSelectedFontOptionLabel: function(t) {
                            w({
                                fontFamily: t
                            })
                        }
                    })), (0, r.h)(l.Menu, {
                        menuKey: "character-edge-styles",
                        label: "Character edge style"
                    }, (0, r.h)(o.CharacterEdgeStyleRadioGroup, {
                        selectedEdgeStyleOption: _.characterEdgeStyle,
                        setSelectedEdgeStyleOption: function(t) {
                            w({
                                characterEdgeStyle: t
                            })
                        }
                    })))
                }
        },
        451: (t, e, n) => {
            n.d(e, {
                useCaptionsSettingsFromLocalStorage: () => l
            });
            var r = n(193),
                i = n(249);

            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function a(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach((function(e) {
                        s(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function s(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var l = function(t) {
                var e = t.onCaptionsSettingsUpdated,
                    n = c((0, r.useState)((0, i.getCaptionSettings)()), 2),
                    o = n[0],
                    s = n[1];
                return {
                    captionsSettings: o,
                    setCaptionsSettings: function(t) {
                        var n = a(a({}, o), t);
                        s(n), (0, i.updateCaptionViewerPreferences)(n), null == e || e(n, t)
                    }
                }
            }
        },
        452: (t, e, n) => {
            n.d(e, {
                CharacterEdgeStyleRadioGroup: () => a
            });
            var r = n(2),
                i = n(453),
                o = ["None", "Depressed", "Drop shadow", "Outline", "Raised"],
                a = function(t) {
                    var e = t.selectedEdgeStyleOption,
                        n = t.setSelectedEdgeStyleOption;
                    return (0, r.h)(r.Fragment, null, o.map((function(t, a) {
                        return (0, r.h)(i.RadioItem, {
                            key: t,
                            name: "fontFamily",
                            value: t,
                            checked: t === e,
                            onChange: function() {
                                return n(t)
                            },
                            shouldHaveRoundedBottomCorners: a === o.length - 1
                        }, (0, r.h)("span", null, t))
                    })))
                }
        },
        453: (t, e, n) => {
            n.d(e, {
                RadioItem: () => d
            });
            var r = n(2),
                i = n(193),
                o = n(183),
                a = n(44),
                s = n(30),
                c = n(454),
                u = n(246);

            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return f(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function p() {
                return p = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, p.apply(null, arguments)
            }
            var h = function(t) {
                    var e = t.visible,
                        n = (0, c.useMenuRootContext)().uiContext.scale,
                        i = {
                            height: "".concat(u.DEFAULT_BUTTON_HEIGHT_PX * n, "px"),
                            verticalAlign: "middle",
                            width: "".concat(u.DEFAULT_BUTTON_WIDTH_PX * n, "px"),
                            visibility: e ? "visible" : "hidden"
                        };
                    return (0, r.h)("svg", p({}, (0, s.standardSvgAttrs)({
                        width: 40,
                        height: 34,
                        styleOverride: i,
                        ariaHidden: !0
                    }), {
                        class: "w-checkmark"
                    }), (0, r.h)("polyline", {
                        fill: "none",
                        stroke: "#ffffff",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        "stroke-miterlimit": "10",
                        points: "17,17 20,20 25,14 "
                    }))
                },
                d = function(t) {
                    var e = t.value,
                        n = t.onChange,
                        s = t.name,
                        f = t.checked,
                        p = t.children,
                        d = t.shouldHaveRoundedBottomCorners,
                        v = void 0 !== d && d,
                        y = (0, c.useMenuRootContext)().uiContext,
                        g = y.scale,
                        m = y.controlBarBorderRadius,
                        b = l((0, i.useState)(!1), 2),
                        _ = b[0],
                        w = b[1],
                        S = l((0, i.useState)(!1), 2),
                        O = S[0],
                        T = S[1];
                    return (0, r.h)("div", {
                        onMouseEnter: function() {
                            return T(!0)
                        },
                        onMouseLeave: function() {
                            return T(!1)
                        },
                        onFocus: function() {
                            (0, a.isMouseDownRecently)() || w(!0)
                        },
                        onBlur: function() {
                            return w(!1)
                        },
                        style: {
                            cursor: "pointer",
                            outline: "none",
                            backgroundColor: O ? "rgba(0,0,0,.3)" : "",
                            boxShadow: _ ? "inset 0 0 0 2px #fff" : "",
                            fontSize: u.DEFAULT_DIALOG_MENU_ITEM_FONT_SIZE_PX * g,
                            borderBottomLeftRadius: v ? "".concat(m, "px") : "0",
                            borderBottomRightRadius: v ? "".concat(m, "px") : "0"
                        }
                    }, (0, r.h)("input", {
                        type: "radio",
                        name: s,
                        onChange: n,
                        id: e,
                        style: o.visuallyHiddenElementStyles,
                        value: e,
                        checked: f
                    }), (0, r.h)("label", {
                        htmlFor: e
                    }, (0, r.h)(h, {
                        visible: f
                    }), p))
                }
        },
        454: (t, e, n) => {
            n.d(e, {
                MenuRoot: () => d,
                useMenuRootContext: () => v
            });
            var r = n(2),
                i = n(193);

            function o(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || l(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function a(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function s(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                        c(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function c(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function u(t) {
                return function(t) {
                    if (Array.isArray(t)) return f(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || l(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(t, e) {
                if (t) {
                    if ("string" == typeof t) return f(t, e);
                    var n = {}.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
                }
            }

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var p = (0, r.createContext)(null),
                h = function(t, e) {
                    var n = t.menuStack[t.menuStack.length - 1];
                    switch (e.type) {
                        case "OPEN_SUBMENU":
                            return {
                                menuStack: [].concat(u(t.menuStack), [e.menuKey]),
                                prevMenuKey: n,
                                navigationDirection: "away-from-root"
                            };
                        case "GO_BACK":
                            return {
                                menuStack: t.menuStack.slice(0, -1),
                                prevMenuKey: n,
                                navigationDirection: "towards-root"
                            };
                        case "GO_TO_ROOT":
                            return {
                                menuStack: ["root"],
                                prevMenuKey: n,
                                navigationDirection: "towards-root"
                            };
                        case "NAVIGATION_END":
                            return s(s({}, t), {}, {
                                navigationDirection: "none"
                            });
                        default:
                            return t
                    }
                },
                d = function(t) {
                    var e = t.children,
                        n = t.controlBarBorderRadius,
                        a = t.scale,
                        s = o((0, i.useReducer)(h, {
                            menuStack: ["root"],
                            prevMenuKey: null,
                            navigationDirection: "none"
                        }), 2),
                        c = s[0],
                        u = s[1],
                        l = c.navigationDirection,
                        f = c.prevMenuKey,
                        d = c.menuStack,
                        v = (0, i.useMemo)((function() {
                            var t;
                            return null !== (t = d[d.length - 1]) && void 0 !== t ? t : "root"
                        }), [d]),
                        y = (0, i.useMemo)((function() {
                            return {
                                goBack: function() {
                                    return u({
                                        type: "GO_BACK"
                                    })
                                },
                                goToRoot: function() {
                                    return u({
                                        type: "GO_TO_ROOT"
                                    })
                                },
                                openMenu: function(t) {
                                    return u({
                                        menuKey: t,
                                        type: "OPEN_SUBMENU"
                                    })
                                },
                                currentMenuKey: v,
                                uiContext: {
                                    scale: a,
                                    controlBarBorderRadius: n
                                },
                                navigationDirection: l,
                                prevMenuKey: f
                            }
                        }), [v, a, n, l, f]);
                    return (0, r.h)(p.Provider, {
                        value: y
                    }, e)
                },
                v = function() {
                    var t = (0, i.useContext)(p);
                    if (null === t) throw new Error("useMenuRootContext must be used within a MenuRoot");
                    return t
                }
        },
        455: (t, e, n) => {
            n.d(e, {
                MenuForwardIcon: () => a
            });
            var r = n(2),
                i = n(30),
                o = n(246),
                a = function(t) {
                    var e = t.scale,
                        n = (0, i.standardSvgAttrs)({
                            width: 40,
                            height: 34,
                            styleOverride: {
                                height: "".concat(o.BASE_CONTROL_BAR_HEIGHT_PX * e, "px"),
                                verticalAlign: "middle",
                                visibility: "visible",
                                width: "".concat(o.DEFAULT_BUTTON_WIDTH_PX * e, "px"),
                                transform: "rotate(180deg)"
                            },
                            ariaHidden: !0
                        });
                    return (0, r.h)("svg", n, (0, r.h)("path", {
                        d: "M21.6889 22.0889C21.5438 22.0889 21.3988 22.0337 21.2884 21.9227L16.5662 17.2004C16.3448 16.9791 16.3448 16.6202 16.5662 16.3988L21.2884 11.6773C21.5098 11.456 21.8687 11.456 22.0901 11.6773C22.3115 11.8987 22.3115 12.2576 22.0901 12.479L17.7683 16.8008L22.0901 21.1225C22.3115 21.3439 22.3115 21.7028 22.0901 21.9242C21.9798 22.0345 21.8347 22.0904 21.6896 22.0904L21.6889 22.0889Z",
                        fill: "white"
                    }))
                }
        },
        456: (t, e, n) => {
            n.d(e, {
                CaptionsSettingsIcon: () => a
            });
            var r = n(2),
                i = n(30),
                o = n(246),
                a = function(t) {
                    var e = t.scale,
                        n = (0, i.standardSvgAttrs)({
                            width: 40,
                            height: 34,
                            styleOverride: {
                                height: "".concat(o.BASE_CONTROL_BAR_HEIGHT_PX * e, "px"),
                                verticalAlign: "middle",
                                visibility: "visible",
                                width: "".concat(o.DEFAULT_BUTTON_WIDTH_PX * e, "px")
                            },
                            ariaHidden: !0
                        });
                    return (0, r.h)("svg", n, (0, r.h)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M26.4 15.4H28.3C28.7 15.4 29 15.7 29 16.1V16.7C29 17.1 28.7 17.4 28.3 17.4H26.4C26 17.4 25.6 17.7 25.5 18.1L25.1 19.2C25 19.5 25 20 25.3 20.3L26.6 21.6C26.9 21.9 26.9 22.3 26.6 22.6L26.2 23C25.9 23.3 25.5 23.3 25.2 23L23.9 21.7C23.6 21.5 23.1 21.4 22.8 21.6L21.7 22.1C21.3 22.2 21 22.6 21 23V24.7C21 25.1 20.7 25.4 20.3 25.4H19.7C19.3 25.4 19 25.1 19 24.7V23C19 22.6 18.7 22.2 18.3 22.1L17.1 21.6C16.8 21.5 16.3 21.5 16 21.8L14.8 23C14.5 23.3 14.1 23.3 13.8 23L13.4 22.6C13.1 22.3 13.1 21.9 13.4 21.6L14.6 20.4C14.8 20.1 14.9 19.6 14.7 19.3L14.2 18.1C14.1 17.7 13.7 17.4 13.3 17.4H11.7C11.3 17.4 11 17.1 11 16.7V16.1C11 15.7 11.3 15.4 11.7 15.4H13.3C13.7 15.4 14.1 15.1 14.2 14.7L14.7 13.5C14.9 13.2 14.9 12.7 14.6 12.4L13.4 11.2C13.1 10.9 13.1 10.5 13.4 10.2L13.8 9.8C14.1 9.5 14.5 9.5 14.8 9.8L16 11C16.3 11.3 16.8 11.4 17.1 11.2L18.3 10.7C18.7 10.6 19 10.2 19 9.8V8.1C19 7.7 19.3 7.4 19.7 7.4H20.3C20.7 7.4 21 7.7 21 8.1V9.8C21 10.2 21.3 10.6 21.7 10.7L22.8 11.2C23.1 11.4 23.6 11.4 23.9 11.1L25.2 9.8C25.5 9.5 25.9 9.5 26.2 9.8L26.6 10.2C26.9 10.5 26.9 10.9 26.6 11.2L25.3 12.5C25 12.8 24.9 13.3 25.1 13.6L25.5 14.7C25.6 15.1 26 15.4 26.4 15.4ZM19.9 20.4C22 20.4 23.8 18.7 23.8 16.5C23.8 14.3 22.1 12.6 19.9 12.6C17.7 12.6 16 14.4 16 16.5C16 18.6 17.7 20.4 19.9 20.4Z",
                        fill: "white"
                    }))
                }
        },
        457: (t, e, n) => {
            n.d(e, {
                CaptionsSettingsMenuSection: () => l
            });
            var r = n(2),
                i = n(246),
                o = n(454),
                a = n(250);

            function s(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(t, e, n) {
                return (e = function(t) {
                    var e = function(t, e) {
                        if ("object" != typeof t || !t) return t;
                        var n = t[Symbol.toPrimitive];
                        if (void 0 !== n) {
                            var r = n.call(t, e || "default");
                            if ("object" != typeof r) return r;
                            throw new TypeError("@@toPrimitive must return a primitive value.")
                        }
                        return ("string" === e ? String : Number)(t)
                    }(t, "string");
                    return "symbol" == typeof e ? e : e + ""
                }(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }
            var u = function(t) {
                    var e = t.title,
                        n = (0, o.useMenuRootContext)().uiContext.scale,
                        s = {
                            fontSize: i.DEFAULT_DIALOG_MENU_ITEM_FONT_SIZE_PX * n,
                            lineHeight: "".concat(18 * n, "px"),
                            padding: "0 ".concat(a.SETTINGS_MENU_PADDING_X_PX * n, "px")
                        };
                    return (0, r.h)("label", {
                        style: s
                    }, e)
                },
                l = function(t) {
                    var e = t.children,
                        n = t.title,
                        i = t.style,
                        a = void 0 === i ? {} : i,
                        l = (0, o.useMenuRootContext)().uiContext.scale,
                        f = function(t) {
                            for (var e = 1; e < arguments.length; e++) {
                                var n = null != arguments[e] ? arguments[e] : {};
                                e % 2 ? s(Object(n), !0).forEach((function(e) {
                                    c(t, e, n[e])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
                                    Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                }))
                            }
                            return t
                        }({
                            display: "flex",
                            flexDirection: "column",
                            gap: "".concat(8 * l, "px"),
                            padding: "".concat(8 * l, "px 0")
                        }, a);
                    return (0, r.h)("div", {
                        style: f
                    }, (0, r.h)(u, {
                        title: n
                    }), e)
                }
        },
        458: (t, e, n) => {
            n.d(e, {
                MenuItemButton: () => p
            });
            var r = n(2),
                i = n(193),
                o = n(441),
                a = n(454),
                s = n(246),
                c = n(67),
                u = n(44);

            function l(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return f(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function f(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var p = (0, o.forwardRef)((function(t, e) {
                var n = t.children,
                    o = t.onClick,
                    f = t.shouldHaveRoundedBottomCorners,
                    p = void 0 !== f && f,
                    h = t.shouldHaveRoundedTopCorners,
                    d = void 0 !== h && h,
                    v = (0, a.useMenuRootContext)().uiContext,
                    y = v.scale,
                    g = v.controlBarBorderRadius,
                    m = l((0, i.useState)(!1), 2),
                    b = m[0],
                    _ = m[1],
                    w = l((0, i.useState)(!1), 2),
                    S = w[0],
                    O = w[1],
                    T = {
                        alignItems: "center",
                        background: b ? "rgba(0,0,0,.3)" : "",
                        borderBottomLeftRadius: p ? "".concat(g, "px") : "0",
                        borderBottomRightRadius: p ? "".concat(g, "px") : "0",
                        borderTopLeftRadius: d ? "".concat(g, "px") : "0",
                        borderTopRightRadius: d ? "".concat(g, "px") : "0",
                        boxShadow: S ? "0 0 0 2px #fff inset" : "none",
                        cursor: "pointer",
                        display: "flex",
                        fontSize: s.DEFAULT_DIALOG_MENU_ITEM_FONT_SIZE_PX * y,
                        marginRight: "".concat(s.DEFAULT_BUTTON_MARGIN_RIGHT_PX * y, "px"),
                        textAlign: "left",
                        width: "100%"
                    };
                return (0, r.h)(c.CustomEventsWrapper, {
                    elemRef: e,
                    class: "w-css-reset-button-important w-vulcan-v2-button",
                    tagName: "button",
                    onClick: o,
                    onFocusIn: function() {
                        (0, u.isMouseDownRecently)() || O(!0)
                    },
                    onFocusOut: function() {
                        O(!1)
                    },
                    onMouseEnter: function() {
                        return _(!0)
                    },
                    onMouseLeave: function() {
                        return _(!1)
                    },
                    style: T
                }, n)
            }))
        },
        459: (t, e, n) => {
            n.d(e, {
                Menu: () => r.Menu,
                MenuRoot: () => o.MenuRoot,
                MenuTrigger: () => i.MenuTrigger
            });
            var r = n(460),
                i = n(463),
                o = n(454)
        },
        460: (t, e, n) => {
            n.d(e, {
                Menu: () => u
            });
            var r = n(2),
                i = n(193),
                o = n(454),
                a = n(458),
                s = n(461),
                c = n(462),
                u = function(t) {
                    var e = t.children,
                        n = t.label,
                        u = t.menuKey,
                        l = void 0 === u ? "root" : u,
                        f = (0, i.useRef)(null),
                        p = (0, o.useMenuRootContext)(),
                        h = p.currentMenuKey,
                        d = p.goBack,
                        v = p.uiContext.scale,
                        y = p.navigationDirection,
                        g = (0, i.useMemo)((function() {
                            return l === h
                        }), [h, l]),
                        m = (0, i.useMemo)((function() {
                            return "root" !== l
                        }), [l]);
                    return (0, i.useEffect)((function() {
                        var t = f.current;
                        t && "away-from-root" === y && (0, c.focusFirstFocusableElement)(t)
                    }), [g, y]), g ? (0, r.h)("div", {
                        class: "w-css-reset w-css-reset-tree",
                        ref: f
                    }, m && (0, r.h)(a.MenuItemButton, {
                        onClick: d,
                        shouldHaveRoundedTopCorners: !0
                    }, (0, r.h)(s.MenuBackIcon, {
                        scale: v
                    }), null != n ? n : "Go back"), e) : null
                }
        },
        461: (t, e, n) => {
            n.d(e, {
                MenuBackIcon: () => a
            });
            var r = n(2),
                i = n(30),
                o = n(246),
                a = function(t) {
                    var e = t.scale,
                        n = (0, i.standardSvgAttrs)({
                            width: 40,
                            height: 34,
                            styleOverride: {
                                height: "".concat(o.BASE_CONTROL_BAR_HEIGHT_PX * e, "px"),
                                verticalAlign: "middle",
                                visibility: "visible",
                                width: "".concat(o.DEFAULT_BUTTON_WIDTH_PX * e, "px")
                            },
                            ariaHidden: !0
                        });
                    return (0, r.h)("svg", n, (0, r.h)("path", {
                        d: "M21.6889 22.0889C21.5438 22.0889 21.3988 22.0337 21.2884 21.9227L16.5662 17.2004C16.3448 16.9791 16.3448 16.6202 16.5662 16.3988L21.2884 11.6773C21.5098 11.456 21.8687 11.456 22.0901 11.6773C22.3115 11.8987 22.3115 12.2576 22.0901 12.479L17.7683 16.8008L22.0901 21.1225C22.3115 21.3439 22.3115 21.7028 22.0901 21.9242C21.9798 22.0345 21.8347 22.0904 21.6896 22.0904L21.6889 22.0889Z",
                        fill: "white"
                    }))
                }
        },
        462: (t, e, n) => {
            n.d(e, {
                focusFirstFocusableElement: () => o
            });
            var r = function(t) {
                    return "INPUT" === t.tagName
                },
                i = function(t) {
                    for (var e = [], n = document.createTreeWalker(t, NodeFilter.SHOW_ELEMENT, {
                            acceptNode: function(t) {
                                if (!(t instanceof HTMLElement)) return NodeFilter.FILTER_SKIP;
                                var e, n = r(t) && "hidden" === t.type;
                                return (r(e = t) || "BUTTON" === e.tagName) && t.disabled || t.hidden || n ? NodeFilter.FILTER_SKIP : t.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
                            }
                        }); n.nextNode();) e.push(n.currentNode);
                    return e
                },
                o = function(t) {
                    var e;
                    null === (e = i(t)[0]) || void 0 === e || e.focus({
                        preventScroll: !0
                    })
                }
        },
        463: (t, e, n) => {
            n.d(e, {
                MenuTrigger: () => l
            });
            var r = n(2),
                i = n(193),
                o = n(458),
                a = n(454),
                s = n(73),
                c = n(9);

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, u.apply(null, arguments)
            }
            var l = function(t) {
                var e = (0, a.useMenuRootContext)(),
                    n = e.openMenu,
                    l = e.navigationDirection,
                    f = e.prevMenuKey,
                    p = (0, i.useRef)(null);
                return (0, i.useEffect)((function() {
                    var e = p.current;
                    e && "towards-root" === l && f === t.menuKey && e.focus({
                        preventScroll: !0
                    })
                }), [l, f, t.menuKey]), (0, r.h)(o.MenuItemButton, u({
                    ref: p
                }, t, {
                    onClick: function() {
                        var e = Boolean((0, c.detectIsMobile)());
                        (0, s.countMetric)("player/control-button-click", 1, {
                            control: t.menuKey,
                            desktop: !e,
                            mobile: e
                        }), n(t.menuKey)
                    }
                }))
            }
        },
        464: (t, e, n) => {
            n.d(e, {
                RadioColorSwatch: () => o.RadioColorSwatch,
                RadioGroup: () => r.RadioGroup,
                RadioPill: () => i.RadioPill
            });
            var r = n(465),
                i = n(466),
                o = n(467)
        },
        465: (t, e, n) => {
            n.d(e, {
                RadioGroup: () => i
            });
            var r = n(2),
                i = function(t) {
                    var e = t.children,
                        n = t.ariaLabel,
                        i = t.scale,
                        o = t.shouldWrap,
                        a = {
                            display: "flex",
                            gap: "".concat(8 * i, "px"),
                            alignItems: "center",
                            flexWrap: o ? "wrap" : "nowrap",
                            justifyContent: "start"
                        };
                    return (0, r.h)("div", {
                        role: "radiogroup",
                        "aria-label": n,
                        style: a
                    }, e)
                }
        },
        466: (t, e, n) => {
            n.d(e, {
                RadioPill: () => l
            });
            var r = n(2),
                i = n(193),
                o = n(183),
                a = n(26),
                s = n(44);

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var l = function(t) {
                var e = t.value,
                    n = t.label,
                    u = t.onChange,
                    l = t.name,
                    f = t.checked,
                    p = t.scale,
                    h = c((0, i.useState)(!1), 2),
                    d = h[0],
                    v = h[1],
                    y = {
                        appearance: "none",
                        borderRadius: 99999,
                        padding: "".concat(2 * p, "px ").concat(10 * p, "px"),
                        fontSize: "".concat(12 * p, "px"),
                        cursor: "pointer",
                        border: "1px solid #82828A",
                        lineHeight: "".concat(16 * p, "px"),
                        backgroundColor: f ? "white" : "transparent",
                        color: f ? "#242528" : "#fff",
                        outline: "none",
                        boxShadow: d ? "0 0 0 2px #fff" : "none",
                        flex: "0 0 auto"
                    },
                    g = (0, a.seqId)("w-radio-".concat(e, "-"));
                return (0, r.h)("div", {
                    style: {
                        display: "flex",
                        alignItems: "center"
                    }
                }, (0, r.h)("input", {
                    type: "radio",
                    name: l,
                    onChange: u,
                    id: g,
                    style: o.visuallyHiddenElementStyles,
                    value: e,
                    checked: f,
                    onFocus: function() {
                        (0, s.isMouseDownRecently)() || v(!0)
                    },
                    onBlur: function() {
                        v(!1)
                    }
                }), (0, r.h)("label", {
                    htmlFor: g,
                    style: y
                }, n))
            }
        },
        467: (t, e, n) => {
            n.d(e, {
                RadioColorSwatch: () => l
            });
            var r = n(2),
                i = n(193),
                o = n(183),
                a = n(26),
                s = n(44);

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var l = function(t) {
                var e = t.value,
                    n = t.onChange,
                    u = t.name,
                    l = t.checked,
                    f = t.ariaLabel,
                    p = t.scale,
                    h = c((0, i.useState)(!1), 2),
                    d = h[0],
                    v = h[1],
                    y = (0, a.seqId)("w-radio-".concat(e, "-")),
                    g = {
                        appearance: "none",
                        borderRadius: "50%",
                        width: "".concat(24 * p, "px"),
                        height: "".concat(24 * p, "px"),
                        cursor: "pointer",
                        border: "none",
                        backgroundColor: e
                    },
                    m = {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "50%",
                        boxShadow: l ? "0 0 0 2px #fff" : "",
                        padding: "2px",
                        transform: d ? "scale(1.2)" : "",
                        transition: "transform 150ms ease"
                    };
                return (0, r.h)("div", {
                    style: {
                        flex: "0 0 auto"
                    }
                }, (0, r.h)("input", {
                    type: "radio",
                    name: u,
                    onChange: n,
                    id: y,
                    value: e,
                    checked: l,
                    style: o.visuallyHiddenElementStyles,
                    onFocus: function() {
                        (0, s.isMouseDownRecently)() || v(!0)
                    },
                    onBlur: function() {
                        v(!1)
                    }
                }), (0, r.h)("div", {
                    style: m
                }, (0, r.h)("label", {
                    htmlFor: y,
                    style: g,
                    "aria-label": f
                })))
            }
        },
        468: (t, e, n) => {
            n.d(e, {
                FontFamilyRadioGroup: () => u
            });
            var r = n(2),
                i = n(453),
                o = n(250),
                a = n(469);

            function s(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return c(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? c(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function c(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var u = function(t) {
                var e = t.selectedFontOptionLabel,
                    n = t.setSelectedFontOptionLabel;
                return (0, r.h)(r.Fragment, null, Array.from(o.CAPTIONS_FONT_FAMILY_MAP).map((function(t, c) {
                    var u = s(t, 1)[0];
                    return (0, r.h)(i.RadioItem, {
                        key: u,
                        name: "fontFamily",
                        value: u,
                        checked: u === e,
                        onChange: function() {
                            return n(u)
                        },
                        shouldHaveRoundedBottomCorners: c === o.CAPTIONS_FONT_FAMILY_MAP.size - 1
                    }, (0, r.h)("span", {
                        style: (0, a.getFontStyleForCaptions)(u)
                    }, u))
                })))
            }
        },
        469: (t, e, n) => {
            n.d(e, {
                getFontStyleForCaptions: () => o
            });
            var r = n(255),
                i = n(253),
                o = function(t) {
                    return {
                        fontFamily: (0, i.getFontFamilyForFontOptionLabel)(t),
                        fontVariant: (0, r.getFontVariantForFontOptionLabel)(t)
                    }
                }
        },
        470: (t, e, n) => {
            n.d(e, {
                TranscriptItem: () => g
            });
            var r = n(2),
                i = n(28),
                o = n(30),
                a = n(44),
                s = n(45),
                c = n(67);

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, u.apply(null, arguments)
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, y(r.key), r)
                }
            }

            function f(t, e, n) {
                return e = h(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, p() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function v(t, e, n) {
                return (e = y(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function y(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }(0, s.defineTranslations)("en-US", {
                CAPTIONS_READ_TRANSCRIPT: "Search Video"
            });
            var g = function(t) {
                    function e() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return v(t = f(this, e, [].concat(r)), "onFocus", (function() {
                            (0, a.isMouseDownRecently)() || t.setState({
                                isKeyboardFocused: !0
                            })
                        })), v(t, "onBlur", (function() {
                            t.state.isKeyboardFocused && t.setState({
                                isKeyboardFocused: !1
                            })
                        })), v(t, "onMouseEnter", (function() {
                            t.setState({
                                isHovering: !0
                            })
                        })), v(t, "onMouseLeave", (function() {
                            t.setState({
                                isHovering: !1
                            })
                        })), t
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && d(t, e)
                    }(e, t), n = e, (p = [{
                        key: "render",
                        value: function() {
                            return (0, r.h)(c.CustomEventsWrapper, {
                                class: "w-css-reset-button-important w-vulcan-v2-button w-transcript-item",
                                tagName: "button",
                                onClick: this.props.toggleTranscript,
                                onfocusin: this.onFocus,
                                onfocusout: this.onBlur,
                                onMouseEnter: this.onMouseEnter,
                                onMouseLeave: this.onMouseLeave,
                                style: this.menuItemStyle()
                            }, (0, r.h)("svg", u({}, (0, o.standardSvgAttrs)({
                                width: 40,
                                height: 34,
                                styleOverride: this.transcriptStyle(),
                                ariaHidden: !0
                            }), {
                                class: "w-checkmark"
                            }), (0, r.h)("g", {
                                fill: "none",
                                stroke: "#ffffff",
                                "stroke-width": "1.5",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-miterlimit": "10"
                            }, (0, r.h)("line", {
                                x1: "17",
                                x2: "27",
                                y1: "12",
                                y2: "12"
                            }), (0, r.h)("line", {
                                x1: "17",
                                x2: "30",
                                y1: "17",
                                y2: "17"
                            }), (0, r.h)("line", {
                                x1: "17",
                                x2: "25",
                                y1: "22",
                                y2: "22"
                            }))), this.translate("READ_TRANSCRIPT"))
                        }
                    }, {
                        key: "transcriptStyle",
                        value: function() {
                            return {
                                height: _(this),
                                verticalAlign: "middle",
                                visibility: "visible",
                                width: m(this)
                            }
                        }
                    }, {
                        key: "menuItemStyle",
                        value: function() {
                            return {
                                background: this.state.isHovering ? "rgba(0,0,0,.3)" : "",
                                boxShadow: this.state.isKeyboardFocused ? "0 0 0 2px #fff inset" : "none",
                                borderTopLeftRadius: "".concat(this.props.controlBarBorderRadius, "px"),
                                borderTopRightRadius: "".concat(this.props.controlBarBorderRadius, "px"),
                                cursor: "pointer",
                                display: "block",
                                fontFamily: i.interFontFamily,
                                fontSize: b(this),
                                lineHeight: _(this),
                                marginRight: "".concat(10 * this.props.scale, "px"),
                                textAlign: "left",
                                width: "100%"
                            }
                        }
                    }, {
                        key: "translate",
                        value: function(t) {
                            return (0, s.getTranslation)(this.props.playerLanguage.code, "CAPTIONS_".concat(t))
                        }
                    }]) && l(n.prototype, p), h && l(n, h), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, p, h
                }(r.Component),
                m = function(t) {
                    return "".concat(function(t) {
                        return 40 * t.props.scale
                    }(t), "px")
                },
                b = function(t) {
                    return 14 * t.props.scale
                },
                _ = function(t) {
                    return "".concat(w(t), "px")
                },
                w = function(t) {
                    return 34 * t.props.scale
                }
        },
        471: (t, e, n) => {
            n.d(e, {
                CaptionsItem: () => g
            });
            var r = n(2),
                i = n(28),
                o = n(44),
                a = n(26),
                s = n(30),
                c = n(182);

            function u() {
                return u = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, u.apply(null, arguments)
            }

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, y(r.key), r)
                }
            }

            function f(t, e, n) {
                return e = h(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, p() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function v(t, e, n) {
                return (e = y(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function y(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var g = function(t) {
                    function e() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return v(t = f(this, e, [].concat(r)), "onBlur", (function() {
                            t.state.isKeyboardFocused && t.setState({
                                isKeyboardFocused: !1
                            })
                        })), v(t, "onClick", (function() {
                            t.props.item.onClick()
                        })), v(t, "onFocus", (function() {
                            (0, o.isMouseDown)() || t.setState({
                                isKeyboardFocused: !0
                            })
                        })), v(t, "onMouseEnter", (function() {
                            t.setState({
                                isHovering: !0
                            })
                        })), v(t, "onMouseLeave", (function() {
                            t.setState({
                                isHovering: !1
                            })
                        })), t
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && d(t, e)
                    }(e, t), n = e, (p = [{
                        key: "render",
                        value: function() {
                            var t = this.props.item,
                                e = (0, a.seqId)("w-captions-".concat(t.text, "-"));
                            return (0, r.h)("div", {
                                style: this.menuItemStyle(),
                                onMouseEnter: this.onMouseEnter,
                                onMouseLeave: this.onMouseLeave
                            }, (0, r.h)(c.default, {
                                checked: Boolean(t.isSelected),
                                id: e,
                                name: "Captions Menu",
                                onFocus: this.onFocus,
                                onClick: this.onClick,
                                onBlur: this.onBlur,
                                tagName: "input",
                                type: "radio",
                                value: t.text
                            }), (0, r.h)("label", {
                                class: "w-css-reset",
                                for: e,
                                "data-handle": "captions-menu-item-".concat(this.props.index)
                            }, (0, r.h)("svg", u({}, (0, s.standardSvgAttrs)({
                                width: 40,
                                height: 34,
                                styleOverride: this.checkStyle(),
                                ariaHidden: !0
                            }), {
                                class: "w-checkmark"
                            }), (0, r.h)("polyline", {
                                fill: "none",
                                stroke: "#ffffff",
                                "stroke-width": "2",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-miterlimit": "10",
                                points: "17,17 20,20 25,14 "
                            })), t.text))
                        }
                    }, {
                        key: "checkStyle",
                        value: function() {
                            return {
                                height: b(this),
                                verticalAlign: "middle",
                                visibility: this.props.item.isSelected ? "visible" : "hidden",
                                width: m(this)
                            }
                        }
                    }, {
                        key: "menuItemStyle",
                        value: function() {
                            return {
                                background: this.state.isHovering ? "rgba(0,0,0,.3)" : "",
                                boxShadow: this.state.isKeyboardFocused ? "0 0 0 2px #fff inset" : "none",
                                borderBottomLeftRadius: this.props.isLastItem ? "".concat(this.props.controlBarBorderRadius, "px") : 0,
                                borderBottomRightRadius: this.props.isLastItem ? "".concat(this.props.controlBarBorderRadius, "px") : 0,
                                display: "block",
                                fontFamily: i.interFontFamily,
                                fontSize: _(this),
                                lineHeight: b(this),
                                marginRight: "".concat(10 * this.props.scale, "px"),
                                textAlign: "left",
                                width: "100%"
                            }
                        }
                    }]) && l(n.prototype, p), h && l(n, h), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, p, h
                }(r.Component),
                m = function(t) {
                    return "".concat(function(t) {
                        return 40 * t.props.scale
                    }(t), "px")
                },
                b = function(t) {
                    return "".concat(function(t) {
                        return 34 * t.props.scale
                    }(t), "px")
                },
                _ = function(t) {
                    return 14 * t.props.scale
                }
        },
        472: (t, e, n) => {
            n.d(e, {
                captionsPromises: () => s,
                fetchCaptions: () => p,
                getCaptionsForLanguage: () => d,
                getPreferredCaptionsIndex: () => l,
                shouldShowNativeCaptions: () => h
            });
            var r, i = n(16),
                o = n(23),
                a = n(12);
            null !== (r = i.Wistia.captionsPromises) && void 0 !== r || (i.Wistia.captionsPromises = {});
            var s = i.Wistia.captionsPromises;
            i.Wistia.uncacheCaptions = function(t, e) {
                if (t && e) {
                    var n = f(t, e);
                    delete i.Wistia.captionsPromises[n]
                } else t ? Object.keys(i.Wistia.captionsPromises).forEach((function(e) {
                    e.startsWith(t) && delete i.Wistia.captionsPromises[e]
                })) : Object.keys(i.Wistia.captionsPromises).forEach((function(t) {
                    delete i.Wistia.captionsPromises[t]
                }))
            };
            var c = Array.from(new Set((navigator.languages || [navigator.language]).concat(["en"]))),
                u = function(t) {
                    return t.split("-")[0]
                },
                l = function(t) {
                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = -1,
                        i = c;
                    return null == t || null == t.captions ? -1 : (n.language && (null === (e = t.captions) || void 0 === e ? void 0 : e.length) > 0 && t.preferred_languages.some((function(e) {
                        return (r = t.captions.findIndex((function(t) {
                            var n = t.alpha3_bibliographic || t.language,
                                r = t.alpha3_terminologic || "";
                            return n === e || "" !== r && r === e
                        }))) >= 0
                    })), -1 === r && i.some((function(e) {
                        return (r = t.captions.findIndex((function(t) {
                            return t.iso639_2_language_code === e
                        }))) >= 0
                    })), -1 === r && i.some((function(e) {
                        var n = u(e);
                        return (r = t.captions.findIndex((function(t) {
                            return u(t.iso639_2_language_code) === n
                        }))) >= 0
                    })), r)
                },
                f = function(t, e) {
                    return "".concat(t).concat(e ? "-".concat(e) : "")
                },
                p = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        n = t.hashedId(),
                        r = f(n, e.language);
                    return i.Wistia.captionsPromises[r] ? i.Wistia.captionsPromises[r] : i.Wistia.captionsPromises[r] = new Promise((function(r) {
                        var i = "".concat((0, o.eV1Protocol)(), "//").concat((0, o.mediaDataHost)(t._opts)),
                            s = new window.URL("".concat(i, "/embed/captions/").concat(n, ".json"));
                        e.language && s.searchParams.append("language", e.language), a.wlog.info(s, e), fetch(s).then((function(t) {
                            return t.json()
                        })).then((function(t) {
                            null != t && null == t.error || (t = {
                                    captions: []
                                }),
                                function(t) {
                                    var e = l(t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {});
                                    if (e > 0) {
                                        var n = e >= 0 ? t.captions[e] : t.captions[0];
                                        t.captions.splice(e, 1), t.captions.unshift(n), t.preferred_languages = [n.language]
                                    }
                                }(t, e), r(t)
                        }))
                    }))
                },
                h = function(t) {
                    return t._inNativeMode() || t._impl.behaviors.fullscreen && t._impl.behaviors.fullscreen.inNativeFullscreen()
                },
                d = function(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        if (r.language === t) return r
                    }
                    return null
                }
        },
        473: (t, e, n) => {
            var r = n(191),
                i = n(23),
                o = n(24),
                a = n(26),
                s = n(2),
                c = n(3),
                u = n(9),
                l = n(72),
                f = n(46),
                p = n(472),
                h = n(474),
                d = n(185);

            function v() {
                v = function() {
                    return e
                };
                var t, e = {},
                    n = Object.prototype,
                    r = n.hasOwnProperty,
                    i = Object.defineProperty || function(t, e, n) {
                        t[e] = n.value
                    },
                    o = "function" == typeof Symbol ? Symbol : {},
                    a = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    c = o.toStringTag || "@@toStringTag";

                function u(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    u({}, "")
                } catch (t) {
                    u = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function l(t, e, n, r) {
                    var o = e && e.prototype instanceof m ? e : m,
                        a = Object.create(o.prototype),
                        s = new j(r || []);
                    return i(a, "_invoke", {
                        value: k(t, n, s)
                    }), a
                }

                function f(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (t) {
                        return {
                            type: "throw",
                            arg: t
                        }
                    }
                }
                e.wrap = l;
                var p = "suspendedStart",
                    h = "suspendedYield",
                    d = "executing",
                    y = "completed",
                    g = {};

                function m() {}

                function b() {}

                function _() {}
                var w = {};
                u(w, a, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    O = S && S(S(L([])));
                O && O !== n && r.call(O, a) && (w = O);
                var T = _.prototype = m.prototype = Object.create(w);

                function C(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function E(t, e) {
                    function n(i, o, a, s) {
                        var c = f(t[i], t, o);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                l = u.value;
                            return l && "object" == typeof l && r.call(l, "__await") ? e.resolve(l.__await).then((function(t) {
                                n("next", t, a, s)
                            }), (function(t) {
                                n("throw", t, a, s)
                            })) : e.resolve(l).then((function(t) {
                                u.value = t, a(u)
                            }), (function(t) {
                                return n("throw", t, a, s)
                            }))
                        }
                        s(c.arg)
                    }
                    var o;
                    i(this, "_invoke", {
                        value: function(t, r) {
                            function i() {
                                return new e((function(e, i) {
                                    n(t, r, e, i)
                                }))
                            }
                            return o = o ? o.then(i, i) : i()
                        }
                    })
                }

                function k(e, n, r) {
                    var i = p;
                    return function(o, a) {
                        if (i === d) throw Error("Generator is already running");
                        if (i === y) {
                            if ("throw" === o) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (r.method = o, r.arg = a;;) {
                            var s = r.delegate;
                            if (s) {
                                var c = P(s, r);
                                if (c) {
                                    if (c === g) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (i === p) throw i = y, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            i = d;
                            var u = f(e, n, r);
                            if ("normal" === u.type) {
                                if (i = r.done ? y : h, u.arg === g) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (i = y, r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function P(e, n) {
                    var r = n.method,
                        i = e.iterator[r];
                    if (i === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, P(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), g;
                    var o = f(i, e.iterator, n.arg);
                    if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g;
                    var a = o.arg;
                    return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                }

                function x(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function A(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(x, this), this.reset(!0)
                }

                function L(e) {
                    if (e || "" === e) {
                        var n = e[a];
                        if (n) return n.call(e);
                        if ("function" == typeof e.next) return e;
                        if (!isNaN(e.length)) {
                            var i = -1,
                                o = function n() {
                                    for (; ++i < e.length;)
                                        if (r.call(e, i)) return n.value = e[i], n.done = !1, n;
                                    return n.value = t, n.done = !0, n
                                };
                            return o.next = o
                        }
                    }
                    throw new TypeError(typeof e + " is not iterable")
                }
                return b.prototype = _, i(T, "constructor", {
                    value: _,
                    configurable: !0
                }), i(_, "constructor", {
                    value: b,
                    configurable: !0
                }), b.displayName = u(_, c, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === b || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, _) : (t.__proto__ = _, u(t, c, "GeneratorFunction")), t.prototype = Object.create(T), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, C(E.prototype), u(E.prototype, s, (function() {
                    return this
                })), e.AsyncIterator = E, e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new E(l(t, n, r, i), o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, C(T), u(T, c, "Generator"), u(T, a, (function() {
                    return this
                })), u(T, "toString", (function() {
                    return "[object Generator]"
                })), e.keys = function(t) {
                    var e = Object(t),
                        n = [];
                    for (var r in e) n.push(r);
                    return n.reverse(),
                        function t() {
                            for (; n.length;) {
                                var r = n.pop();
                                if (r in e) return t.value = r, t.done = !1, t
                            }
                            return t.done = !0, t
                        }
                }, e.values = L, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(A), !e)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = t)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(e) {
                        if (this.done) throw e;
                        var n = this;

                        function i(r, i) {
                            return s.type = "throw", s.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                s = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var c = r.call(a, "catchLoc"),
                                    u = r.call(a, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                } else {
                                    if (!u) throw Error("try statement without catch or finally");
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var i = this.tryEntries[n];
                            if (i.tryLoc <= this.prev && r.call(i, "finallyLoc") && this.prev < i.finallyLoc) {
                                var o = i;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var a = o ? o.completion : {};
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, g) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), g
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), A(n), g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    A(n)
                                }
                                return i
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, r) {
                        return this.delegate = {
                            iterator: L(e),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = t), g
                    }
                }, e
            }

            function y(t, e, n, r, i, o, a) {
                try {
                    var s = t[o](a),
                        c = s.value
                } catch (t) {
                    return void n(t)
                }
                s.done ? e(c) : Promise.resolve(c).then(r, i)
            }

            function g(t) {
                return function() {
                    var e = this,
                        n = arguments;
                    return new Promise((function(r, i) {
                        var o = t.apply(e, n);

                        function a(t) {
                            y(o, r, i, a, s, "next", t)
                        }

                        function s(t) {
                            y(o, r, i, a, s, "throw", t)
                        }
                        a(void 0)
                    }))
                }
            }

            function m() {
                return m = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, m.apply(null, arguments)
            }

            function b(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, P(r.key), r)
                }
            }

            function _(t, e, n) {
                return e = O(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, w() ? Reflect.construct(e, n || [], O(t).constructor) : e.apply(t, n))
            }

            function w() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (w = function() {
                    return !!t
                })()
            }

            function S() {
                return S = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = O(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }, S.apply(null, arguments)
            }

            function O(t) {
                return O = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, O(t)
            }

            function T(t, e) {
                return T = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, T(t, e)
            }

            function C(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function E(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? C(Object(n), !0).forEach((function(e) {
                        k(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : C(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function k(t, e, n) {
                return (e = P(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function P(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function x(t) {
                return function(t) {
                    if (Array.isArray(t)) return A(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return A(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? A(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function A(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var j = (0, u.cachedDetect)(),
                L = "_off_",
                M = function(t, e) {
                    var n;
                    if (!e || null == t) return t;
                    var r = ((null === (n = e.currentTrack()) || void 0 === n ? void 0 : n.cues) || []).map((function(t) {
                            return {
                                start: t.triggerStart,
                                end: t.triggerEnd,
                                text: t.text.split("\n"),
                                extendedAudioDescription: !0
                            }
                        })),
                        i = t.hash.lines.filter((function(t) {
                            return !t.extendedAudioDescription
                        })),
                        o = [].concat(x(i), x(r)).sort((function(t, e) {
                            return t.start - e.start || t.end - e.end
                        }));
                    return E(E({}, t), {}, {
                        hash: E(E({}, t.hash), {}, {
                            lines: o
                        })
                    })
                },
                I = function(t) {
                    function e(t) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), k(n = _(this, e, [t]), "setActiveLineForTime", (function(t) {
                            if (n.captions && n.captions.language !== L) {
                                var e, r, i = n.captions.hash.lines.filter((function(e) {
                                        return e.start <= t && t < e.end
                                    })),
                                    o = i[0];
                                if (null !== (e = n.video.controls.extendedAudioDescriptionButton) && void 0 !== e && e.isEnabled() && null !== (r = n.video.controls.extendedAudioDescriptionButton) && void 0 !== r && r.isAudioPlaying()) {
                                    var a = i.find((function(t) {
                                        return t.extendedAudioDescription
                                    }));
                                    a && (o = a)
                                } else {
                                    o = i.find((function(t) {
                                        return !t.extendedAudioDescription
                                    }))
                                }
                                if (o) return n.setActiveLine(o.text, n.captions.right_to_left), void n.renderCaptions()
                            }
                            n.setNoActiveLine(), n.renderCaptions()
                        })), (0, f.dynamicImport)("assets/external/interFontFace.js"), n.options = t.plugin.captions.options, n._wistiaCaptionsId = (0, a.seqId)("wistia_", "_captions"), n._userScale = n.options.subtitlesScale || 1, n.unbinds = [t.on("timechange", n.setActiveLineForTime), t.on("extendedaudiodescriptionplay", (function() {
                            n.setActiveLineForTime(n.video.time())
                        })), t.on("extendedaudiodescriptionstop", (function() {
                            n.setActiveLineForTime(n.video.time())
                        })), t.on("enterfullscreen", (function() {
                            n.hideOrShowNativeCaptions()
                        })), t.on("cancelfullscreen", (function() {
                            n.hideOrShowNativeCaptions()
                        })), t.on("beforereplace", (function() {
                            n.removeTextTracks()
                        })), t.on("extendedaudiodescriptionchange", (function() {
                            var t, e;
                            n.captions = M(n.captions, n.video.controls.extendedAudioDescriptionButton), n.resetTextTracks();
                            var r = "playing" === n.video.state(),
                                i = n.video.time();
                            null === (t = (e = n.video._impl.engine).loadSource) || void 0 === t || t.call(e), n.video.time(i), r && n.video.play(), n.setActiveLineForTime(n.video.time()), n.renderCaptions()
                        }))], n
                    }
                    return function(t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                        t.prototype = Object.create(e && e.prototype, {
                            constructor: {
                                value: t,
                                writable: !0,
                                configurable: !0
                            }
                        }), Object.defineProperty(t, "prototype", {
                            writable: !1
                        }), e && T(t, e)
                    }(e, t), n = e, u = [{
                        key: "destroy",
                        value: function() {
                            var t, n, r, i, o;
                            (0, c.elemRemove)(this.clippedCueStyle), this.clippedCueStyle = null, this.removeTextTracks(), (t = e, n = "destroy", r = this, o = S(O(1 & (i = 3) ? t.prototype : t), n, r), 2 & i && "function" == typeof o ? function(t) {
                                return o.apply(r, t)
                            } : o)([])
                        }
                    }, {
                        key: "mount",
                        value: function(t) {
                            var e = this;
                            this.rootElem = t, this.fetchCaptions().then((function() {
                                e._destroyed || (e.setupTextTracks(), e.setActiveLineForTime(e.video.time()), e.renderCaptions())
                            }))
                        }
                    }, {
                        key: "getSelectedCaptions",
                        value: function() {
                            return this.captions
                        }
                    }, {
                        key: "fetchCaptions",
                        value: function() {
                            var t = this;
                            return this._destroyed ? new Promise((function() {})) : (0, p.fetchCaptions)(this.video, this.options).then((function(e) {
                                return t.captionsResp = e, e
                            }))
                        }
                    }, {
                        key: "resetTextTracks",
                        value: function() {
                            this.removeTextTracks(), this._setupTextTracksPromise = null, this.setupTextTracks()
                        }
                    }, {
                        key: "setupTextTracks",
                        value: function() {
                            var t = this;
                            if (this._setupTextTracksPromise) return this._setupTextTracksPromise;
                            if (j.edge && !this.video._inNativeMode()) return this._setupTextTracksPromise = new Promise((function() {}));
                            var e = this.video;
                            return this._setupTextTracksPromise = new Promise((function(n) {
                                t.fetchCaptions();
                                var r = function() {
                                    t.fetchCaptions().then((function(r) {
                                        t.removeTextTracks(), e.whenVideoElementInDom().then((function(a) {
                                            if (!t._destroyed) {
                                                if (e.engine) {
                                                    var s = r.captions.map((function(n) {
                                                        n._wistiaCaptionsId = t._wistiaCaptionsId;
                                                        var r = "".concat((0, o.proto)(), "//").concat((0, i.cdnFastWistiaNetHost)(), "/embed/captions/").concat(e.hashedId(), ".vtt?language=").concat(n.language);
                                                        return n.src = r, n
                                                    })).filter((function(t) {
                                                        return "_preview_" !== t.language
                                                    }));
                                                    e.engine.addTextTracks(s)
                                                }
                                                t.hideOrShowNativeCaptions(), t.unbinds.push((0, c.elemBind)(a.textTracks, "change", (function() {
                                                    (0, p.shouldShowNativeCaptions)(e) && e.controls.captionsButton && e.controls.captionsButton.matchMenuToSelectedTextTrack()
                                                }))), n()
                                            }
                                        }))
                                    }))
                                };
                                "beforeplay" === e.state() && (j.safari || j.ios.version) ? e.bind("play", (function() {
                                    return r(), e.unbind
                                })) : r()
                            }))
                        }
                    }, {
                        key: "removeTextTracks",
                        value: function() {
                            this.video.engine && this.video.engine.removeTextTracks(this._wistiaCaptionsId)
                        }
                    }, {
                        key: "renderCaptions",
                        value: function() {
                            this.video._inNativeMode() || (this.activeLine && !this._captionsHidden ? (0, s.render)((0, s.h)(h.default, m({}, this.props, this.activeLine, {
                                scale: this.scale(),
                                isInFullscreen: this.video.inFullscreen(),
                                isPlaybarEnabled: this.video.isControlEnabled("playbar"),
                                isTranscriptEnabled: this.isTranscriptEnabled()
                            })), this.rootElem) : (0, s.render)((0, s.h)("nothing", null), this.rootElem), this.reactMounts.captions = [this.rootElem])
                        }
                    }, {
                        key: "isTranscriptEnabled",
                        value: function() {
                            return !1 !== this.options.transcript
                        }
                    }, {
                        key: "onControlPropsUpdated",
                        value: function(t) {
                            t.videoWidth === this.props.videoWidth && t.controlsAreVisible === this.props.controlsAreVisible && t.controlBarHeight === this.props.controlBarHeight && t.captionsBackgroundColor === this.props.captionsBackgroundColor && t.captionsTextSize === this.props.captionsTextSize && t.captionsTextColor === this.props.captionsTextColor && t.captionsTextShadow === this.props.captionsTextShadow && t.captionsFontFamily === this.props.captionsFontFamily && t.captionsFontVariant === this.props.captionsFontVariant && t.captionsBorderRadius === this.props.captionsBorderRadius && t.captionsWindowColor === this.props.captionsWindowColor && t.captionsWindowOpacityPercentage === this.props.captionsWindowOpacityPercentage && t.captionsTextOpacityPercentage === this.props.captionsTextOpacityPercentage && t.captionsBackgroundOpacityPercentage === this.props.captionsBackgroundOpacityPercentage && t.scale === this.props.scale || this.renderCaptions()
                        }
                    }, {
                        key: "setActiveLine",
                        value: function(t) {
                            var e = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                            this.activeLine = {
                                text: t,
                                rtl: e
                            }
                        }
                    }, {
                        key: "setNoActiveLine",
                        value: function() {
                            this.activeLine = null
                        }
                    }, {
                        key: "remapCaptionsTimingsToMatchVideoLanguage",
                        value: function() {
                            var t = this;
                            if (null != this.captions && this.captions.media_hashed_id !== this.video.hashedId()) {
                                var e = this.video.languages().find((function(t) {
                                        return t.sourceLanguage
                                    })),
                                    n = this.video.language().ietfLanguageTag,
                                    r = this.captions.hash.lines.map((function(r) {
                                        var i = t.remapTime(e.ietfLanguageTag, n, r.start),
                                            o = t.remapTime(e.ietfLanguageTag, n, r.end);
                                        return E(E({}, r), {}, {
                                            start: i,
                                            end: o
                                        })
                                    }));
                                this.captions = E(E({}, this.captions), {}, {
                                    hash: E(E({}, this.captions.hash), {}, {
                                        lines: r
                                    })
                                })
                            }
                        }
                    }, {
                        key: "setLanguage",
                        value: function(t) {
                            var e = this,
                                n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            this.fetchCaptions().then(g(v().mark((function r() {
                                var i;
                                return v().wrap((function(r) {
                                    for (;;) switch (r.prev = r.next) {
                                        case 0:
                                            return i = (0, p.getCaptionsForLanguage)(t, e.captionsResp.captions), e.captions = M(i, e.video.controls.extendedAudioDescriptionButton), r.next = 4, e.video.getRemapTime();
                                        case 4:
                                            e.remapTime = r.sent, e.remapCaptionsTimingsToMatchVideoLanguage(), e.setActiveLineForTime(e.video.time()), e.renderCaptions(), !1 !== n.track && e.showCorrespondingTrack(i), e.video.trigger("captionslanguagechange", t);
                                        case 10:
                                        case "end":
                                            return r.stop()
                                    }
                                }), r)
                            }))))
                        }
                    }, {
                        key: "turnOff",
                        value: function() {
                            this.setLanguage(L)
                        }
                    }, {
                        key: "showCorrespondingTrack",
                        value: function(t) {
                            var e = this;
                            j.edge && !this.video._inNativeMode() || this.setupTextTracks().then((function() {
                                for (var n = e.video.getMediaElement(), r = 0; r < n.textTracks.length; r++) {
                                    var i = n.textTracks[r];
                                    "captions" === i.kind && (t && i.language === t.language ? i.mode = "showing" : i.mode = "disabled")
                                }
                            }))
                        }
                    }, {
                        key: "hideOrShowNativeCaptions",
                        value: function() {
                            (0, p.shouldShowNativeCaptions)(this.video) ? this.allowShowingNativeCaptions(): this.disallowShowingNativeCaptions()
                        }
                    }, {
                        key: "allowShowingNativeCaptions",
                        value: function() {
                            this.clippedCueStyle && ((0, c.elemRemove)(this.clippedCueStyle), this.clippedCueStyle = null), this.hideCustomCaptions()
                        }
                    }, {
                        key: "disallowShowingNativeCaptions",
                        value: function() {
                            if (this.clippedCueStyle) return this.clippedCueStyle;
                            var t = "WISTIA-PLAYER" === this.embedElement.tagName && !0 !== this.video._attrs.wistiaPopover ? this.embedElement.shadowRoot : document.head;
                            this.clippedCueStyle = (0, c.addInlineCss)(t, "\n      #".concat(this.video.chrome.id, " ::cue {\n        visibility: hidden;\n      }\n      #").concat(this.video.chrome.id, " ::-webkit-media-text-track-container {\n        visibility: hidden;\n      }\n      #").concat(this.video.chrome.id, " ::-webkit-media-text-track-background {\n        visibility: hidden;\n      }\n      #").concat(this.video.chrome.id, " ::-webkit-media-text-track-display {\n        visibility: hidden;\n      }\n    ")), this.showCustomCaptions()
                        }
                    }, {
                        key: "hideCustomCaptions",
                        value: function() {
                            this._captionsHidden = !0, this.renderCaptions()
                        }
                    }, {
                        key: "showCustomCaptions",
                        value: function() {
                            this._captionsHidden = !1, this.renderCaptions()
                        }
                    }, {
                        key: "setUserScale",
                        value: function(t) {
                            this._userScale = t, this.renderCaptions()
                        }
                    }, {
                        key: "getUserScale",
                        value: function() {
                            return this._userScale
                        }
                    }, {
                        key: "scale",
                        value: function() {
                            return this._userScale * Math.min(2, Math.max(.6, (0, r.controlMultiplierBasedOnVideo)(this.video, [640, 850])))
                        }
                    }], u && b(n.prototype, u), l && b(n, l), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, u, l
                }(d.default);
            I.handle = "captions", I.type = "above-control-bar", I.shouldMount = function(t) {
                return t.plugin.captions && !1 === t.isLiveMedia()
            }, (0, l.defineControl)(I)
        },
        474: (t, e, n) => {
            n.d(e, {
                default: () => h
            });
            var r = n(2),
                i = n(34),
                o = n(319);

            function a(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, s(r.key), r)
                }
            }

            function s(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function c(t, e, n) {
                return e = l(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], l(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function l(t) {
                return l = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, l(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }
            var p = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), n = c(this, e, [t]), (0, o.getLoadedSelfHostedGoogleFonts)().includes(t.captionsFontFamily) || (0, o.loadSelfHostedGoogleFont)(t.captionsFontFamily), n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && f(t, e)
                }(e, t), n = e, (s = [{
                    key: "componentDidUpdate",
                    value: function(t) {
                        var e = (0, o.getLoadedSelfHostedGoogleFonts)();
                        this.props.captionsFontFamily == t.captionsFontFamily || e.includes(this.props.captionsFontFamily) || (0, o.loadSelfHostedGoogleFont)(this.props.captionsFontFamily)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props.text.map((function(e, n) {
                                return t.renderLine(e, n)
                            }));
                        return (0, r.h)("div", {
                            class: "w-captions w-css-reset w-css-reset-tree w-vulcan-v2-button",
                            style: this.rootContainerStyle()
                        }, (0, r.h)("div", {
                            class: "w-captions-window",
                            style: this.groupStyle()
                        }, e))
                    }
                }, {
                    key: "renderLine",
                    value: function(t, e) {
                        var n = {
                                isFirst: 0 === e,
                                isLast: e === this.props.text.length - 1
                            },
                            i = this.props.rtl ? "rtl" : "ltr";
                        return (0, r.h)("p", {
                            class: "w-captions-line",
                            style: this.lineStyle()
                        }, (0, r.h)("div", {
                            style: {
                                display: "inline-block",
                                transition: "all 200ms ease",
                                verticalAlign: "bottom"
                            },
                            class: "w-css-reset"
                        }, (0, r.h)("span", {
                            dir: i,
                            style: this.spanStyle(n),
                            dangerouslySetInnerHTML: {
                                __html: t
                            }
                        })))
                    }
                }, {
                    key: "rootContainerStyle",
                    value: function() {
                        var t = this.props,
                            e = 18 * t.scale,
                            n = t.controlsAreVisible ? 0 : -t.controlBarHeight;
                        return {
                            bottom: "".concat(n + e, "px"),
                            left: 0,
                            pointerEvents: "none",
                            position: "absolute",
                            textAlign: "center",
                            width: "100%",
                            transition: "all 100ms ease"
                        }
                    }
                }, {
                    key: "groupStyle",
                    value: function() {
                        var t = this.props,
                            e = t.captionsWindowColor,
                            n = t.captionsWindowOpacityPercentage;
                        return {
                            backgroundColor: new i.Color(e).alpha(n),
                            display: "inline-block",
                            position: "relative",
                            margin: "auto",
                            maxWidth: "80%",
                            outline: "none",
                            cursor: "pointer"
                        }
                    }
                }, {
                    key: "lineStyle",
                    value: function() {
                        return {
                            lineHeight: "1em",
                            margin: 0,
                            padding: 0
                        }
                    }
                }, {
                    key: "spanStyle",
                    value: function() {
                        var t = this.props,
                            e = t.scale,
                            n = t.captionsBackgroundOpacityPercentage,
                            r = t.captionsBackgroundColor,
                            o = t.captionsBorderRadius,
                            a = t.captionsTextColor,
                            s = t.captionsTextOpacityPercentage,
                            c = t.captionsTextSize,
                            u = t.captionsFontFamily,
                            l = t.captionsFontVariant,
                            f = t.captionsTextShadow,
                            p = new i.Color(r).alpha(n),
                            h = new i.Color(a).alpha(s);
                        return {
                            background: p,
                            borderRadius: "".concat(o, "px"),
                            color: h,
                            display: "block",
                            fontFamily: u,
                            fontSize: "".concat(c * e, "px"),
                            fontVariant: l,
                            textShadow: f,
                            lineHeight: "1em",
                            overflow: "hidden",
                            padding: ".25em .6em",
                            textOverflow: "ellipsis",
                            webkitFontSmoothing: "antialiased",
                            width: "100%",
                            transition: "all 200ms ease-in-out"
                        }
                    }
                }]) && a(n.prototype, s), u && a(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, s, u
            }(r.Component);
            p.defaultProps = {
                captionsBorderRadius: 0,
                captionsBackgroundColor: "#000",
                captionsTextColor: "#fff",
                captionsTextSize: 18,
                captionsTextOpacityPercentage: 1,
                captionsFontVariant: "normal",
                captionsTextShadow: "none",
                captionsFontFamily: "Inter",
                captionsBackgroundOpacityPercentage: .75,
                captionsWindowColor: "#000",
                captionsWindowOpacityPercentage: 0
            };
            const h = p
        },
        475: (t, e, n) => {
            var r = n(2),
                i = n(3),
                o = n(46),
                a = n(72),
                s = n(16),
                c = n(185),
                u = n(476),
                l = n(472);

            function f(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(n), !0).forEach((function(e) {
                        m(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, b(r.key), r)
                }
            }

            function d(t, e, n) {
                return e = y(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, v() ? Reflect.construct(e, n || [], y(t).constructor) : e.apply(t, n))
            }

            function v() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (v = function() {
                    return !!t
                })()
            }

            function y(t) {
                return y = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, y(t)
            }

            function g(t, e) {
                return g = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, g(t, e)
            }

            function m(t, e, n) {
                return (e = b(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function b(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var _ = function(t) {
                function e(t) {
                    var n, i, o;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), m(o = d(this, e, [t]), "close", (function() {
                        o._isVisible = !1, o.animateOut().then((function() {
                            o.video.controls.captions.showCustomCaptions(), (0, r.render)((0, r.h)("nothing", null), o.rootElem), o.reactMounts = [o.rootElem]
                        }))
                    })), m(o, "seekTranscript", (function(t) {
                        o.video.time(t)
                    })), m(o, "metricsVideoCount", (function(t) {
                        s.Wistia.Metrics.videoCount(o.video._impl, "player/".concat(t))
                    })), m(o, "onClickCloseTranscript", (function() {
                        o.close(), o.video.controls.captionsButton.buttonElement.focus()
                    })), m(o, "onSearchHitCounterChange", (function(t) {
                        var e = t.activeHitIndex,
                            n = t.totalHits;
                        o.video.behaviors.ui.setAriaLiveText("".concat(e, " of ").concat(n, " results."))
                    })), o.video = t, o.options = null !== (n = null === (i = t.plugin.captions) || void 0 === i ? void 0 : i.options) && void 0 !== n ? n : {}, o._isVisible = !1, o._turnstileClosed = !1, o.unbinds = [], o.unbinds.push(o.video.on("captionschange", (function(t) {
                        o.setSelectedLanguage(t)
                    })), o.video.on("timechange", (function() {
                        o._isVisible && o.renderTranscript()
                    })), o.video.on("turnstileclose", (function() {
                        o._turnstileClosed = !0, o._isVisible && o.renderTranscript()
                    })), o.video.on("extendedaudiodescriptionchange", (function() {
                        o._isVisible && o.rerenderTranscript()
                    })), o.video.on("extendedaudiodescriptioninit", (function() {
                        o._isVisible && o.rerenderTranscript()
                    }))), o
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && g(t, e)
                }(e, t), n = e, (a = [{
                    key: "mount",
                    value: function(t) {
                        var e = this;
                        this.fetchCaptions().then((function() {
                            var n = (0, i.elemFromObject)({
                                style: {
                                    position: "absolute"
                                },
                                class: "w-css-reset"
                            });
                            (0, i.elemAppend)(t, n), e.rootElem = n
                        }))
                    }
                }, {
                    key: "open",
                    value: function() {
                        "beforeplay" === this.video.state() && this.video.setControlEnabled("bigPlayButton", !1), this.video.controls.captions.hideCustomCaptions(), this._isVisible = !0, this.renderTranscript(), this.animateIn()
                    }
                }, {
                    key: "onControlPropsUpdated",
                    value: function(t) {
                        var e = this;
                        this._isVisible && (this.props.controlsAreVisible !== t.controlsAreVisible && this.fetchCaptions().then((function() {
                            e.renderTranscript()
                        })), this.props.videoWidth !== t.videoWidth && this.fetchCaptions().then((function() {
                            e.renderTranscript()
                        })), this.props.videoHeight !== t.videoHeight && this.fetchCaptions().then((function() {
                            e.renderTranscript()
                        })))
                    }
                }, {
                    key: "fetchCaptions",
                    value: function() {
                        var t = this;
                        return (0, l.fetchCaptions)(this.video, this.options).then((function(e) {
                            return t.captionsResp = e, e
                        }))
                    }
                }, {
                    key: "setSelectedLanguage",
                    value: function(t) {
                        this.selectedLanguage = t.language, this.rootElem && this._isVisible && ("_off_" === t.language ? this.close() : this.renderTranscript())
                    }
                }, {
                    key: "renderTranscript",
                    value: function() {
                        var t, e = this;
                        this.video.controls.captions.hideCustomCaptions();
                        var n, i = (0, l.getPreferredCaptionsIndex)(this.captionsResp, null === (t = this.video.embedOptions().plugin) || void 0 === t ? void 0 : t["captions-v1"]);
                        return i >= 0 && (n = this.captionsResp.captions[i].language), new Promise((function(t) {
                            (0, o.dynamicImport)("assets/external/interFontFace.js").then((function() {
                                (0, r.render)((0, r.h)(u.default, {
                                    closeTranscript: e.onClickCloseTranscript,
                                    controlBarHeight: e.props.controlBarHeight,
                                    controlsAreVisible: e.props.controlsAreVisible,
                                    preferredLanguage: n,
                                    playerLanguage: e.video.playerLanguage(),
                                    scale: e.props.scale,
                                    seekTranscript: e.seekTranscript,
                                    selectedLanguage: e.selectedLanguage || e.captionsResp.preferred_languages[0],
                                    srtCaptions: e.getSrtCaptions(),
                                    metricsVideoCount: e.metricsVideoCount,
                                    turnstileClosed: e._turnstileClosed,
                                    turnstileEmail: e.video.email(),
                                    turnstilePlugin: e.video.plugin["requireEmail-v1"],
                                    videoDuration: e.video.duration(),
                                    videoHeight: e.video.videoHeight(),
                                    videoTime: e.video.time(),
                                    videoWidth: e.video.videoWidth(),
                                    onSearchHitCounterChange: e.onSearchHitCounterChange
                                }), e.rootElem), e.reactMounts = [e.rootElem], t()
                            }))
                        }))
                    }
                }, {
                    key: "rerenderTranscript",
                    value: function() {
                        return (0, r.render)((0, r.h)("nothing", null), this.rootElem), this.renderTranscript()
                    }
                }, {
                    key: "getSrtCaptions",
                    value: function() {
                        var t;
                        return null !== (t = this.video.controls.extendedAudioDescriptionButton) && void 0 !== t && t.isEnabled() ? this.captionsResp.captions : (this.captionsWithoutExtendedAudioDescription || (this.captionsWithoutExtendedAudioDescription = {}, this.captionsWithoutExtendedAudioDescription.captions = this.captionsResp.captions.map((function(t) {
                            var e = t.hash.lines.filter((function(t) {
                                return !t.extendedAudioDescription
                            }));
                            return p(p({}, t), {}, {
                                hash: p(p({}, t.hash), {}, {
                                    lines: e
                                })
                            })
                        }))), this.captionsWithoutExtendedAudioDescription.captions)
                    }
                }, {
                    key: "animateIn",
                    value: function() {
                        var t = this;
                        return new Promise((function(e) {
                            (0, i.elemStyle)(t.rootElem, {
                                opacity: 0,
                                height: "100%",
                                width: "100%"
                            }), setTimeout((function() {
                                (0, i.elemAnimate)(t.rootElem, {
                                    opacity: 1
                                }, {
                                    time: 200,
                                    callback: e
                                })
                            }), 0)
                        }))
                    }
                }, {
                    key: "animateOut",
                    value: function() {
                        var t = this;
                        return new Promise((function(e) {
                            (0, i.elemStyle)(t.rootElem, {
                                opacity: 1
                            }), setTimeout((function() {
                                (0, i.elemAnimate)(t.rootElem, {
                                    opacity: 0
                                }, {
                                    time: 200,
                                    callback: function() {
                                        (0, i.elemStyle)(t.rootElem, {
                                            height: 0,
                                            width: 0
                                        }), e()
                                    }
                                })
                            }), 0)
                        }))
                    }
                }]) && h(n.prototype, a), c && h(n, c), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, a, c
            }(c.default);
            _.handle = "transcript", _.type = "above-control-bar", _.sortValue = 600, _.shouldMount = function(t) {
                var e = t.embedOptions().plugin && t.embedOptions().plugin["captions-v1"] && !1 === t.embedOptions().plugin["captions-v1"].transcript;
                return !e && (t.plugin.captions && t.plugin.captions.options && !1 === t.isLiveMedia() && !e)
            }, (0, a.defineControl)(_)
        },
        476: (t, e, n) => {
            n.d(e, {
                default: () => m
            });
            var r = n(2),
                i = n(28),
                o = n(44),
                a = n(477),
                s = n(479),
                c = n(480),
                u = n(246);

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, y(r.key), r)
                }
            }

            function f(t, e, n) {
                return e = h(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, p() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function v(t, e, n) {
                return (e = y(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function y(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var g = 20;
            const m = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), v(n = f(this, e, [t]), "setRefs", (function(t) {
                        n.sectionRefs = t
                    })), v(n, "resetFirstHitIndex", (function() {
                        n.setState({
                            activeSearchHitIndex: void 0
                        })
                    })), v(n, "setCloseFocus", (function() {
                        (0, o.isMouseDown)() || n.setState({
                            closeFocus: !0
                        })
                    })), v(n, "setCloseBlur", (function() {
                        n.setState({
                            closeFocus: !1
                        })
                    })), v(n, "setClearSearchFocus", (function() {
                        (0, o.isMouseDown)() || n.setState({
                            clearSearchFocus: !0
                        })
                    })), v(n, "setClearSearchBlur", (function() {
                        n.setState({
                            clearSearchFocus: !1
                        })
                    })), v(n, "updateSearchValue", (function(t) {
                        n.setState({
                            searchKey: t.target.value
                        })
                    })), v(n, "inputKeyDown", (function(t) {
                        var e = n.state,
                            r = e.hitCounter,
                            i = e.activeSearchHitIndex,
                            o = e.hitAndMissIndices,
                            a = e.searchKey,
                            s = 40 === t.which ? 0 : i + 1,
                            c = o.indexOf(!0, s),
                            u = o.indexOf(!0);
                        u = -1 === u ? 0 : u;
                        var l, f = r;
                        switch (-1 === c ? (l = u, f = a ? 1 : 0) : (l = c, f += 1), t.which) {
                            case 40:
                                n.setState({
                                    activeSearchHitIndex: l,
                                    hitCounter: a ? 1 : 0
                                }), setTimeout((function() {
                                    requestAnimationFrame((function() {
                                        n.sectionRefs[l].focus()
                                    }))
                                }), 20);
                                break;
                            case 13:
                                n.setState({
                                    activeSearchHitIndex: l,
                                    hitCounter: f
                                })
                        }
                    })), v(n, "inputOnFocus", (function() {
                        n.setState({
                            inputHasFocus: !0
                        })
                    })), v(n, "inputOnBlur", (function() {
                        n.setState({
                            inputHasFocus: !1
                        })
                    })), v(n, "focusInput", (function(t) {
                        n.inputElem.focus(), n.setState({
                            activeSearchHitIndex: t
                        })
                    })), v(n, "updateHitCounter", (function(t) {
                        var e = n.state.hitCounter,
                            r = t ? e + 1 : e - 1;
                        n.state.searchKey && n.setState({
                            hitCounter: r
                        })
                    })), v(n, "onMouseMove", (function() {
                        !1 === n.state.recentlyMoused && n.setState({
                            recentlyMoused: !0
                        }), n.isMousingTimeout && clearTimeout(n.isMousingTimeout), n.isMousingTimeout = setTimeout((function() {
                            n.setState({
                                recentlyMoused: !1
                            })
                        }), 7e3)
                    })), v(n, "onKeyUp", (function(t) {
                        27 !== t.which || t.escapeHandled || (t.escapeHandled = !0, n.props.closeTranscript())
                    })), n.state = {
                        captions: n.formatCaptions(),
                        clearSearchFocus: !1,
                        closeFocus: !1,
                        hitAndMissIndices: [],
                        hitCounter: 0,
                        inputHasFocus: !1,
                        isContainerHover: null,
                        recentlyMoused: !1,
                        searchKey: "",
                        totalHits: 0,
                        turnstile: {}
                    }, n.isMousingTimeout = null, n.searchTimeout = null, n.setTurnstileOptions(), n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && d(t, e)
                }(e, t), n = e, (p = [{
                    key: "componentDidMount",
                    value: function() {
                        this.setState({
                            hitAndMissIndices: this.initialHitAndMissIndices()
                        }), this.props.metricsVideoCount("interactiveCaptions-open"), this.inputElem.focus()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.metricsVideoCount("interactiveCaptions-close")
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t, e) {
                        this.state.searchKey !== e.searchKey && this.debounceSearch(), this.props.selectedLanguage !== t.selectedLanguage && (this.setState({
                            captions: this.formatCaptions()
                        }), this.setState({
                            hitAndMissIndices: this.initialHitAndMissIndices()
                        })), (this.props.turnstileClosed !== t.turnstileClosed || this.props.turnstileEmail !== t.turnstileEmail || void 0 !== this.props.turnstilePlugin && void 0 === t.turnstilePlugin) && this.setTurnstileOptions(), e.hitCounter === this.state.hitCounter && e.totalHits === this.state.totalHits || this.props.onSearchHitCounterChange({
                            activeHitIndex: this.state.hitCounter,
                            totalHits: this.state.totalHits
                        })
                    }
                }, {
                    key: "initialHitAndMissIndices",
                    value: function() {
                        var t = this.state.captions.length;
                        return Array.apply(null, Array(t)).map((function() {
                            return !1
                        }))
                    }
                }, {
                    key: "setTurnstileOptions",
                    value: function() {
                        var t = this.props.turnstilePlugin;
                        t ? this.setState({
                            turnstile: {
                                enabled: !0,
                                time: t.options.time,
                                hasClosed: this.props.turnstileClosed || Boolean(this.props.turnstileEmail) || !1
                            }
                        }) : this.setState({
                            turnstile: {
                                enabled: !1,
                                time: void 0,
                                hasClosed: void 0
                            }
                        })
                    }
                }, {
                    key: "debounceSearch",
                    value: function() {
                        var t = this;
                        clearTimeout(this.searchTimeout), this.searchTimeout = setTimeout((function() {
                            t.doSearch()
                        }), 350)
                    }
                }, {
                    key: "doSearch",
                    value: function() {
                        var t, e = this.state,
                            n = e.searchKey,
                            r = e.captions,
                            i = n.replaceAll("&", "&amp;"),
                            o = new RegExp(i, "ig"),
                            a = 0;
                        if (r && n) {
                            var s = r.map((function(e, n) {
                                    var r = o.test(e.text);
                                    return void 0 === t && r && (t = n), r && (a += 1), r
                                })),
                                c = t ? 1 : 0;
                            this.setState({
                                hitAndMissIndices: s,
                                activeSearchHitIndex: t,
                                hitCounter: c,
                                totalHits: a
                            }), this.props.metricsVideoCount("interactiveCaptions-search")
                        } else this.setState({
                            hitAndMissIndices: this.initialHitAndMissIndices(),
                            totalHits: a,
                            hitCounter: 0,
                            activeSearchHitIndex: t
                        })
                    }
                }, {
                    key: "getCaptionsForLanguage",
                    value: function() {
                        var t = this.props,
                            e = t.srtCaptions,
                            n = t.selectedLanguage,
                            r = t.preferredLanguage,
                            i = n && "_off_" !== n ? n : r;
                        return e.filter((function(t) {
                            return t.language === i
                        }))[0]
                    }
                }, {
                    key: "formatCaptions",
                    value: function() {
                        var t = this.getCaptionsForLanguage(),
                            e = null == t ? void 0 : t.hash.lines.map((function(t) {
                                return t.text.map((function(e) {
                                    return {
                                        start: t.start,
                                        end: t.end,
                                        text: e
                                    }
                                }))
                            }));
                        return [].concat.apply([], e)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e = this,
                            n = (this.props.scale, this.state),
                            i = n.captions,
                            o = n.hitCounter,
                            u = n.totalHits,
                            l = null !== (t = this.getCaptionsForLanguage()) && void 0 !== t && t.right_to_left ? "rtl" : "ltr";
                        return (0, r.h)("div", {
                            class: "w-css-reset w-css-reset-tree",
                            onKeyUp: this.onKeyUp,
                            onMouseMove: this.onMouseMove,
                            style: this.rootStyles()
                        }, (0, r.h)("div", {
                            dir: l,
                            style: this.searchAndCloseContainerStyles()
                        }, (0, r.h)("div", {
                            style: {
                                position: "absolute",
                                width: "50%",
                                left: 0,
                                right: 0,
                                top: "50%",
                                transform: "translateY(-50%)",
                                margin: "auto"
                            }
                        }, (0, r.h)("div", {
                            style: this.searchIconStyles()
                        }, (0, r.h)(c.SearchIcon, {
                            color: this.state.inputHasFocus || this.state.searchKey ? "#505050" : "#FFF"
                        })), (0, r.h)("style", {
                            dangerouslySetInnerHTML: {
                                __html: "\n                .w-interactive-captions--search-input::placeholder {\n                  color: ".concat(this.state.inputHasFocus || this.state.searchKey ? "#505050" : "#FFF", ";\n                  opacity: 1;\n                }\n                .w-interactive-captions--search-input::-webkit-search-cancel-button {\n                  display: none;\n                }\n              ")
                            }
                        }), (0, r.h)("input", {
                            "aria-label": "Search Captions",
                            class: "w-interactive-captions--search-input",
                            onBlur: this.inputOnBlur,
                            onInput: this.updateSearchValue,
                            onFocus: this.inputOnFocus,
                            onKeyDown: this.inputKeyDown,
                            placeholder: "Search",
                            style: this.searchInputStyles(),
                            type: "search",
                            value: this.state.searchKey,
                            ref: function(t) {
                                return e.inputElem = t
                            }
                        }), (0, r.h)("button", {
                            style: this.stylesForClearSearchButton(),
                            class: "w-vulcan-v2-button w-css-reset",
                            onClick: function() {
                                e.setState({
                                    searchKey: ""
                                }), e.inputElem.focus()
                            },
                            onFocus: this.setClearSearchFocus,
                            onBlur: this.setClearSearchBlur,
                            tabIndex: 0,
                            "aria-label": "Clear search input"
                        }, (0, r.h)(s.CloseIcon, {
                            color: "#000"
                        })), (0, r.h)("div", {
                            style: this.hitCountStyle()
                        }, o, " / ", u)), (0, r.h)("div", {
                            style: {
                                position: "absolute",
                                right: "5%",
                                top: "50%",
                                transform: "translateY(-50%)",
                                display: "inline-block"
                            }
                        }, (0, r.h)("button", {
                            style: this.closeButtonStyles(),
                            class: "w-vulcan-v2-button w-css-reset",
                            onClick: this.props.closeTranscript,
                            onFocus: this.setCloseFocus,
                            onBlur: this.setCloseBlur,
                            tabIndex: 0,
                            "aria-label": "Close Interactive Captions"
                        }, (0, r.h)(s.CloseIcon, {
                            color: "#FFF"
                        })))), (0, r.h)(a.default, {
                            activeSearchHitIndex: this.state.activeSearchHitIndex,
                            allRefs: this.sectionRefs,
                            captions: i,
                            closeTranscript: this.props.closeTranscript,
                            controlsAreVisible: this.props.controlsAreVisible,
                            controlBarHeight: this.calculateSearchHeight(),
                            focusInput: this.focusInput,
                            hitAndMissIndices: this.state.hitAndMissIndices,
                            recentlyMoused: this.state.recentlyMoused,
                            scale: this.props.scale,
                            setRefs: this.setRefs,
                            searchKey: this.state.searchKey,
                            seekTranscript: this.props.seekTranscript,
                            turnstile: this.state.turnstile,
                            updateHitCounter: this.updateHitCounter,
                            videoDuration: this.props.videoDuration,
                            videoHeight: this.props.videoHeight,
                            videoTime: this.props.videoTime,
                            dir: l
                        }))
                    }
                }, {
                    key: "rootStyles",
                    value: function() {
                        return {
                            backgroundColor: "rgba(0,0,0,.65)",
                            clip: "rect(0,0,0,0)",
                            color: "#fff",
                            height: "calc(100% + ".concat(this.props.controlBarHeight, "px)")
                        }
                    }
                }, {
                    key: "calculateSearchHeight",
                    value: function() {
                        return this.props.controlBarHeight ? this.props.controlBarHeight : u.BASE_CONTROL_BAR_HEIGHT_PX * this.props.scale
                    }
                }, {
                    key: "searchAndCloseContainerStyles",
                    value: function() {
                        return {
                            position: "relative",
                            height: "".concat(2 * this.calculateSearchHeight(), "px"),
                            minHeight: "".concat(2 * this.calculateSearchHeight(), "px")
                        }
                    }
                }, {
                    key: "searchIconStyles",
                    value: function() {
                        var t = this.props.scale,
                            e = "".concat(16 * t, "px");
                        return {
                            position: "absolute",
                            display: "inline-block",
                            top: "".concat(g * t, "px"),
                            transform: "translateY(-50%)",
                            left: e,
                            transition: "all 300ms ease",
                            width: "".concat(g * t, "px")
                        }
                    }
                }, {
                    key: "closeButtonStyles",
                    value: function() {
                        var t = this.props.scale;
                        return {
                            boxShadow: this.state.closeFocus ? "0 0 0 2px #fff inset" : "none",
                            borderWidth: "1px",
                            borderRadius: "0%",
                            cursor: "pointer",
                            padding: "2px",
                            height: "".concat(22.5 * t, "px"),
                            width: "".concat(22.5 * t, "px"),
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }
                }, {
                    key: "hitCountStyle",
                    value: function() {
                        var t, e = this.props.scale,
                            n = this.state.searchKey,
                            r = {
                                position: "absolute",
                                transform: "translateY(-50%)",
                                color: "#888",
                                top: "50%",
                                fontSize: "".concat(10 * e, "px"),
                                fontWeight: 600,
                                fontFamily: i.interFontFamily,
                                opacity: n ? 1 : 0,
                                transition: "all 300ms ease"
                            };
                        return (null === (t = this.getCaptionsForLanguage()) || void 0 === t ? void 0 : t.right_to_left) ? r.left = "".concat(48 * e + 45, "px") : r.right = "".concat(48 * e, "px"), r
                    }
                }, {
                    key: "stylesForClearSearchButton",
                    value: function() {
                        var t = this.props.scale,
                            e = this.state.searchKey;
                        return {
                            boxShadow: this.state.clearSearchFocus ? "0 0 0 2px #000 inset" : "none",
                            cursor: "pointer",
                            display: "flex",
                            opacity: e ? 1 : 0,
                            outline: "none",
                            padding: "2px",
                            pointerEvents: e ? "auto" : "none",
                            position: "absolute",
                            right: "".concat(16 * t, "px"),
                            top: "50%",
                            transform: "translateY(-50%)",
                            transition: "all 300ms ease",
                            width: "".concat(15 * t, "px")
                        }
                    }
                }, {
                    key: "searchInputStyles",
                    value: function() {
                        var t = this.props.scale,
                            e = this.state,
                            n = e.inputHasFocus,
                            r = e.searchKey,
                            o = Boolean(n || r),
                            a = o ? "white" : "transparent",
                            s = 8 * t;
                        return {
                            "-webkit-appearance": "none",
                            padding: "".concat(s, "px ").concat(85 * t, "px ").concat(s, "px ").concat(45 * t, "px"),
                            fontSize: "".concat(17 * t, "px"),
                            display: "block",
                            fontFamily: i.interFontFamily,
                            transition: "all 300ms ease",
                            color: o ? "#505050" : "white",
                            backgroundColor: a,
                            border: "1px solid white",
                            width: "100%",
                            margin: 0,
                            outline: "none",
                            boxSizing: "border-box"
                        }
                    }
                }]) && l(n.prototype, p), h && l(n, h), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, p, h
            }(r.Component)
        },
        477: (t, e, n) => {
            n.d(e, {
                default: () => m
            });
            var r = n(166),
                i = n(2),
                o = n(28),
                a = n(3),
                s = n(44),
                c = n(26),
                u = n(478);

            function l(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, y(r.key), r)
                }
            }

            function f(t, e, n) {
                return e = h(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, p() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
            }

            function p() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (p = function() {
                    return !!t
                })()
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }

            function v(t, e, n) {
                return (e = y(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function y(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            var g = 20;
            const m = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), v(n = f(this, e, [t]), "focusNextOrPrevious", (function(t) {
                        n.setState({
                            scrollToIndex: t,
                            focusIndex: t
                        }), setTimeout((function() {
                            requestAnimationFrame((function() {
                                n.props.allRefs[t].focus()
                            }))
                        }), 20)
                    })), v(n, "handleScroll", (function(t) {
                        n.setState({
                            scrollTop: t.target.scrollTop
                        })
                    })), v(n, "onKeyDown", (function(t) {
                        if ((38 === t.which || 40 === t.which) && !t.wistiaPlayerHandled) {
                            t.preventDefault(), t.wistiaPlayerHandled = !0;
                            var e = n.props.hitAndMissIndices.indexOf(!0),
                                r = -1 !== e ? e : 0;
                            n.setState({
                                scrollToIndex: r,
                                focusIndex: r
                            }), setTimeout((function() {
                                requestAnimationFrame((function() {
                                    n.props.allRefs[r].focus()
                                }))
                            }), 20)
                        }
                    })), v(n, "onWheel", (function() {
                        !1 === n.state.recentlyScrolled && n.setState({
                            recentlyScrolled: !0
                        }), n.scrollingTimeout && clearTimeout(n.scrollingTimeout), n.scrollingTimeout = setTimeout((function() {
                            n.setState({
                                recentlyScrolled: !1
                            })
                        }), 7e3)
                    })), v(n, "setSectionBlur", (function() {
                        n.setState({
                            sectionFocus: !1
                        })
                    })), v(n, "setSectionFocus", (function() {
                        (0, s.isMouseDown)() || n.setState({
                            sectionFocus: !0
                        })
                    })), v(n, "setFocusIndex", (function(t) {
                        n.setState({
                            focusIndex: t
                        })
                    })), v(n, "setSectionRef", (function(t, e) {
                        n.savedRefs[e] = t
                    })), v(n, "renderRowAtIndex", (function(t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return n.renderLine(n.props.captions[t], t, e)
                    })), n.state = {
                        sectionFocus: !1,
                        availableHeight: 0,
                        scrollTop: 0,
                        scrollToIndex: void 0,
                        prevScrollToIndex: void 0,
                        recentlyScrolled: !1
                    }, n.savedRefs = {}, n.scrollingTimeout = null, n.containerId = (0, c.seqId)("w-interactive-transcript-"), n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && d(t, e)
                }(e, t), n = e, (p = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this.props.captions;
                        if (this.props.setRefs && this.props.setRefs(this.savedRefs), this.setState({
                                availableHeight: this.calculateAvailableHeight()
                            }), this.props.videoTime > 0)
                            for (var e = 0; e < t.length; e++)
                                if (this.isWithinTime(t[e])) {
                                    this.setState({
                                        scrollToIndex: e
                                    });
                                    break
                                }
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(t, e) {
                        var n = this.props.captions;
                        if (this.props.setRefs && this.props.setRefs(this.savedRefs), this.props.controlsAreVisible === t.controlsAreVisible && this.props.videoHeight === t.videoHeight || this.setState({
                                availableHeight: this.calculateAvailableHeight()
                            }), this.props.activeSearchHitIndex !== t.activeSearchHitIndex && this.setState({
                                scrollToIndex: this.props.activeSearchHitIndex,
                                prevScrollToIndex: t.activeSearchHitIndex
                            }), this.state.scrollToIndex !== e.scrollToIndex && this.setState({
                                prevScrollToIndex: this.state.scrollToIndex
                            }), this.props.videoTime !== t.videoTime && !1 === this.props.recentlyMoused && !1 === this.state.recentlyScrolled)
                            for (var r = 0; r < n.length; r++)
                                if (this.isWithinTime(n[r])) {
                                    this.props.allRefs[r - 1] && null !== this.props.allRefs[r - 1].offsetParent ? this.startScrollAnimation(r) : this.setState({
                                        scrollToIndex: r
                                    });
                                    break
                                }
                        this.props.controlsAreVisible && !t.controlsAreVisible && this.isAtBottomOfCaptions() && this.scrollToBottom()
                    }
                }, {
                    key: "animate",
                    value: function() {
                        var t = this;
                        this.scollInterpolation && !this.scollInterpolation.atEnd() ? this.scrollingAnimation = requestAnimationFrame((function() {
                            t.transcriptText.scrollTop = t.scollInterpolation.value(), t.scollInterpolation.atEnd() || t.animate()
                        })) : cancelAnimationFrame(this.scrollingAnimation)
                    }
                }, {
                    key: "calculateAvailableHeight",
                    value: function() {
                        var t = this.props,
                            e = t.controlsAreVisible,
                            n = t.controlBarHeight;
                        return t.videoHeight - (2 * n + (e ? n : 0))
                    }
                }, {
                    key: "focusMaintainer",
                    value: function(t, e) {
                        this.state.focusIndex && (0, a.elemIsInside)(document.activeElement, this.transcriptTextRoot) && (this.state.focusIndex < t || this.state.focusIndex >= e ? this.props.allRefs.focusHelper && this.props.allRefs.focusHelper.focus({
                            preventScroll: !0
                        }) : this.state.focusIndex > t && this.state.focusIndex < e && this.props.allRefs[this.state.focusIndex].focus())
                    }
                }, {
                    key: "calculateNumberOfRowsToRender",
                    value: function() {
                        var t = this.props,
                            e = t.captions,
                            n = t.turnstile;
                        if (n.enabled && !1 === n.hasClosed && "end" !== n.time) {
                            for (var r = 0, i = e.length - 1, o = Math.floor((r + i) / 2); e[o].start > n.time && o - 1 < i;) n.time > e[o].start ? r = o - 1 : i = o + 1, o = Math.floor((r + i) / 2);
                            return e[o].start <= n.time ? o + 1 : 1
                        }
                        return e.length
                    }
                }, {
                    key: "getNeighboringIndices",
                    value: function(t) {
                        var e = t,
                            n = t,
                            r = this.props.hitAndMissIndices;
                        if (!this.props.searchKey) return [t - 1, t === r.length - 1 ? -1 : t + 1];
                        for (;
                            (e -= 1) >= 0 && !r[e];);
                        for (;
                            (n += 1) < r.length && !r[n];);
                        return [e, n === r.length ? -1 : n]
                    }
                }, {
                    key: "isAtBottomOfCaptions",
                    value: function() {
                        var t = this.transcriptText;
                        return t.scrollTop + 5 >= t.scrollHeight - t.offsetHeight
                    }
                }, {
                    key: "isWithinTime",
                    value: function(t) {
                        var e = this.props.videoTime,
                            n = t.start,
                            r = t.end;
                        return e >= n && e < r
                    }
                }, {
                    key: "scrollToBottom",
                    value: function() {
                        var t = this.props.captions.length - 1;
                        this.startScrollAnimation(t)
                    }
                }, {
                    key: "sectionContainerStyles",
                    value: function() {
                        return {
                            height: "100%",
                            overflowY: "scroll",
                            boxShadow: this.state.sectionFocus ? "0 0 0 2px #fff inset" : "none",
                            outline: "none"
                        }
                    }
                }, {
                    key: "startScrollAnimation",
                    value: function(t) {
                        var e = t * g * 1.5 * this.props.scale,
                            n = Math.max(0, e),
                            i = this.transcriptText.scrollTop;
                        cancelAnimationFrame(this.scrollingAnimation), this.scollInterpolation = new r.Interpolation({
                            seedRange: 300,
                            outputStart: i,
                            outputEnd: n
                        }), this.animate()
                    }
                }, {
                    key: "turnstileText",
                    value: function() {
                        var t = this.props.scale;
                        return {
                            display: "block",
                            fontWeight: "500",
                            fontSize: "".concat(16 * t, "px"),
                            lineHeight: "".concat(30 * t, "px"),
                            fontFamily: o.interFontFamily,
                            textAlign: "center",
                            textStyle: "italic"
                        }
                    }
                }, {
                    key: "renderLine",
                    value: function(t, e, n) {
                        var r = t.start,
                            o = t.end,
                            a = this.isWithinTime({
                                start: r,
                                end: o
                            }),
                            s = this.getNeighboringIndices(e);
                        return (0, i.h)("div", {
                            key: e,
                            style: {
                                boxShadow: a && !n.focusHelper ? "2px 0 0 0 #fff inset" : "none",
                                boxSizing: "border-box"
                            },
                            dir: this.props.dir,
                            "aria-rowindex": e + 1,
                            role: !n.focusHelper && "row"
                        }, (0, i.h)(u.default, {
                            containerId: this.containerId,
                            dir: this.props.dir,
                            line: t,
                            focusHelper: n.focusHelper || !1,
                            focusInput: this.props.focusInput,
                            focusNeighbors: s,
                            focusNextOrPrevious: this.focusNextOrPrevious,
                            index: e,
                            isActive: a,
                            isHovered: !1,
                            key: e,
                            scale: this.props.scale,
                            searchKey: this.props.searchKey,
                            seek: this.props.seekTranscript,
                            setSectionRef: this.setSectionRef,
                            setFocusIndex: this.setFocusIndex,
                            updateHitCounter: this.props.updateHitCounter
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t, e = this,
                            n = this.props,
                            r = n.scale,
                            o = n.turnstile,
                            a = n.videoDuration,
                            s = this.calculateNumberOfRowsToRender(),
                            c = 30 * r,
                            u = c * s;
                        t = "end" === o.time || a - 5 <= o.time;
                        var l = this.state,
                            f = l.availableHeight,
                            p = l.scrollTop,
                            h = Math.floor(p / c);
                        this.state.prevScrollToIndex !== this.state.scrollToIndex && this.transcriptText && void 0 !== this.state.scrollToIndex && (h = this.state.scrollToIndex, this.transcriptText.scrollTop = h * c);
                        var d = h + Math.ceil(f / c);
                        d > s && (d = s);
                        for (var v = [], y = h; y < d;) v.push(this.renderRowAtIndex(y, {})), y += 1;
                        this.focusMaintainer(h, d);
                        var g = {
                            height: u,
                            paddingTop: "".concat(h * c, "px")
                        };
                        "rtl" === this.props.dir ? (g.marginRight = "".concat(25, "%"), g.textAlign = "right") : (g.marginLeft = "".concat(29, "%"), g.textAlign = "left", g.width = "".concat(60, "%"));
                        var m = this.props.captions.length > 0;
                        return (0, i.h)("div", {
                            style: {
                                height: "".concat(f, "px")
                            },
                            ref: function(t) {
                                return e.transcriptTextRoot = t
                            }
                        }, (0, i.h)("div", {
                            key: "focusHelper",
                            style: {
                                height: 0
                            }
                        }, m && this.renderRowAtIndex(this.state.focusIndex || 0, {
                            focusHelper: !0
                        })), (0, i.h)("div", {
                            "aria-label": "Use the arrow keys to move between the different caption lines. Click each line to seek the video to that line",
                            id: this.containerId,
                            onBlur: this.setSectionBlur,
                            onFocus: this.setSectionFocus,
                            onKeyDown: this.onKeyDown,
                            onScroll: this.handleScroll,
                            onWheel: this.onWheel,
                            ref: function(t) {
                                return e.transcriptText = t
                            },
                            style: this.sectionContainerStyles(),
                            tabIndex: 0
                        }, (0, i.h)("div", {
                            style: g,
                            role: "grid",
                            "aria-rowcount": s
                        }, (0, i.h)("div", {
                            role: "rowgroup"
                        }, v)), o.enabled && !1 === o.hasClosed && !t && (0, i.h)("span", {
                            style: this.turnstileText()
                        }, "-- You must enter your email to access the rest of the video. --")))
                    }
                }]) && l(n.prototype, p), h && l(n, h), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, p, h
            }(i.Component)
        },
        478: (t, e, n) => {
            n.d(e, {
                default: () => v
            });
            var r = n(2),
                i = n(28),
                o = n(44);

            function a(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return s(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function s(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
                }
            }

            function u(t, e, n) {
                return e = f(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, l() ? Reflect.construct(e, n || [], f(t).constructor) : e.apply(t, n))
            }

            function l() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (l = function() {
                    return !!t
                })()
            }

            function f(t) {
                return f = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, f(t)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }

            function h(t, e, n) {
                return (e = d(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function d(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }
            const v = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), h(n = u(this, e, [t]), "clickLine", (function(t) {
                        var e = n.props,
                            r = e.seek,
                            i = e.line;
                        t.preventDefault(), r(i.start + .001)
                    })), h(n, "onMouseEnter", (function() {
                        !0 !== n.state.isHovered && n.setState({
                            isHovered: !0
                        })
                    })), h(n, "onMouseLeave", (function() {
                        !1 !== n.state.isHovered && n.setState({
                            isHovered: !1
                        })
                    })), h(n, "onFocus", (function() {
                        (0, o.isMouseDown)() || (n.props.setFocusIndex(n.props.index), n.setState({
                            isKeyboardFocused: !0
                        }))
                    })), h(n, "unsetKeyboardFocus", (function() {
                        n.setState({
                            isKeyboardFocused: !1
                        })
                    })), h(n, "onKeyDown", (function(t) {
                        var e = a(n.props.focusNeighbors, 2),
                            r = e[0],
                            i = e[1];
                        switch (t.which) {
                            case 40:
                                t.preventDefault(), t.wistiaPlayerHandled = !0, -1 !== i && (n.unsetKeyboardFocus(), n.props.focusNextOrPrevious(i), n.props.updateHitCounter(!0));
                                break;
                            case 38:
                                t.preventDefault(), t.wistiaPlayerHandled = !0, n.unsetKeyboardFocus(), -1 !== r ? (n.props.focusNextOrPrevious(r), n.props.updateHitCounter(!1)) : n.props.focusInput(n.props.index)
                        }
                    })), h(n, "onKeyUp", (function(t) {
                        27 === t.which && (n.props.focusInput(n.props.index), t.escapeHandled = !0)
                    })), n.state = {
                        isHovered: !1,
                        isKeyboardFocused: !1
                    }, n
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && p(t, e)
                }(e, t), n = e, (s = [{
                    key: "componentDidMount",
                    value: function() {
                        if (this.el) {
                            var t = this.props.focusHelper ? "focusHelper" : this.props.index;
                            this.props.setSectionRef(this.el, t)
                        }
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        if (this.el) {
                            var t = this.props.focusHelper ? "focusHelper" : this.props.index;
                            this.props.setSectionRef(this.el, t)
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            n = e.searchKey,
                            i = e.line,
                            o = e.isActive,
                            a = e.scale,
                            s = n.replaceAll("&", "&amp;"),
                            c = new RegExp(s, "ig"),
                            u = this.props.focusHelper ? "div" : "button",
                            l = i.text;
                        return "" !== n && c.test(i.text) && (l = i.text.replace(c, (function(t) {
                            return "<mark>".concat(t, "</mark>")
                        }))), (0, r.h)("div", {
                            role: !this.props.focusHelper && "gridcell"
                        }, (0, r.h)(u, {
                            "aria-describedby": this.props.focusHelper ? "" : this.props.containerId,
                            onBlur: this.unsetKeyboardFocus,
                            onClick: this.clickLine,
                            onFocus: this.onFocus,
                            onKeyDown: this.onKeyDown,
                            onKeyUp: this.onKeyUp,
                            onMouseLeave: this.onMouseLeave,
                            onMouseEnter: this.onMouseEnter,
                            ref: function(e) {
                                return t.el = e
                            },
                            style: this.lineStyles(o),
                            tabIndex: -1
                        }, !1 === this.props.focusHelper && (0, r.h)("span", {
                            dangerouslySetInnerHTML: {
                                __html: l
                            },
                            style: {
                                backgroundColor: this.state.isHovered ? "black" : "transparent",
                                boxShadow: this.state.isKeyboardFocused ? "0 0 0 2px #fff inset" : "none",
                                cursor: "pointer",
                                padding: "".concat(3.4 * a, "px ").concat(8 * a, "px"),
                                textAlign: "rtl" === this.props.dir ? "right" : "left"
                            }
                        })))
                    }
                }, {
                    key: "lineStyles",
                    value: function(t) {
                        var e = this.props.scale;
                        return {
                            display: "inline-flex",
                            minHeight: this.props.focusHelper ? "0" : "".concat(30 * e, "px"),
                            fontFamily: i.interFontFamily,
                            fontSize: "".concat(17 * e, "px"),
                            fontWeight: t ? "700" : "500",
                            lineHeight: this.props.focusHelper ? "0" : "".concat(26 * e, "px"),
                            outline: "none",
                            marginLeft: "".concat(20 / 3.3 * e, "px")
                        }
                    }
                }]) && c(n.prototype, s), l && c(n, l), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, s, l
            }(r.Component)
        },
        479: (t, e, n) => {
            n.d(e, {
                CloseIcon: () => o
            });
            var r = n(2),
                i = n(30),
                o = function(t) {
                    var e = t.color;
                    return (0, r.h)("svg", (0, i.standardSvgAttrs)({
                        width: 24,
                        height: 24,
                        ariaHidden: !0
                    }), (0, r.h)("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "".concat(e) || "#fff",
                        fillRule: "evenodd"
                    }, (0, r.h)("path", {
                        d: "M18.643128,20.7643515 C19.228878,21.3502515 20.178678,21.3502515 20.764428,20.7643515 C21.350178,20.1786015 21.350178,19.2288015 20.764428,18.6430515 L14.121378,12.0000015 L20.764428,5.3569065 C21.350178,4.7711115 21.350178,3.8213715 20.764428,3.2355765 C20.178678,2.6497965 19.228878,2.6497965 18.643128,3.2355765 L12.000018,9.8786715 L5.356893,3.2355465 C4.771098,2.6497515 3.821358,2.6497515 3.235563,3.2355465 C2.649783,3.8213265 2.649783,4.7710815 3.235563,5.3568615 L9.878703,12.0000015 L3.235578,18.6430515 C2.649783,19.2289515 2.649783,20.1786015 3.235578,20.7645015 C3.821358,21.3502515 4.771113,21.3502515 5.356893,20.7645015 L12.000018,14.1213165 L18.643128,20.7643515 Z"
                    })))
                }
        },
        480: (t, e, n) => {
            n.d(e, {
                SearchIcon: () => o
            });
            var r = n(2),
                i = n(30),
                o = function(t) {
                    var e = t.color;
                    return (0, r.h)("svg", (0, i.standardSvgAttrs)({
                        width: 24,
                        height: 24,
                        ariaHidden: !0
                    }), (0, r.h)("g", {
                        stroke: "none",
                        strokeWidth: "1",
                        fill: "".concat(e) || "#fff",
                        fillRule: "evenodd"
                    }, (0, r.h)("path", {
                        d: "M3 10.5C3 6.364 6.364 3 10.5 3S18 6.364 18 10.5 14.636 18 10.5 18 3 14.636 3 10.5m20.562 10.941l-4.661-4.661C20.213 15.027 21 12.858 21 10.5 21 4.701 16.298 0 10.5 0 4.7 0 0 4.701 0 10.5 0 16.298 4.7 21 10.5 21c2.358 0 4.527-.787 6.28-2.098l4.661 4.66c.292.291.677.438 1.06.438.386 0 .77-.147 1.061-.438.584-.584.584-1.539 0-2.121"
                    })))
                }
        },
        481: (t, e, n) => {
            var r = n(4),
                i = n(12),
                o = n(16),
                a = n(472),
                s = n(249);

            function c(t, e) {
                return function(t) {
                    if (Array.isArray(t)) return t
                }(t) || function(t, e) {
                    var n = null == t ? null : "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"];
                    if (null != n) {
                        var r, i, o, a, s = [],
                            c = !0,
                            u = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            u = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (u) throw i
                            }
                        }
                        return s
                    }
                }(t, e) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t, e) || function() {
                    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            function l(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function f(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(n), !0).forEach((function(e) {
                        p(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function p(t, e, n) {
                return (e = d(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function h(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, d(r.key), r)
                }
            }

            function d(t) {
                var e = function(t, e) {
                    if ("object" != typeof t || !t) return t;
                    var n = t[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var r = n.call(t, e || "default");
                        if ("object" != typeof r) return r;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === e ? String : Number)(t)
                }(t, "string");
                return "symbol" == typeof e ? e : e + ""
            }

            function v(t, e, n) {
                return e = m(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, y() ? Reflect.construct(e, n || [], m(t).constructor) : e.apply(t, n))
            }

            function y() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (y = function() {
                    return !!t
                })()
            }

            function g() {
                return g = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = m(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }, g.apply(null, arguments)
            }

            function m(t) {
                return m = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, m(t)
            }

            function b(t, e) {
                return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, b(t, e)
            }
            var _ = function(t) {
                function e(t, n) {
                    var r;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), r = v(this, e, [t, n]);
                    var i = (0, s.getCaptionViewerPreferences)();
                    r.video = t, r.options = f(f({}, n), i), r.captions = null;
                    var o = r.options.language ? {
                        language: r.options.language
                    } : {};
                    return r.fetched = (0, a.fetchCaptions)(t, o).then((function(t) {
                        r.captions = t.captions
                    })), r.isEnabled = !1 !== n.on, r.unbinds = [], r.unbinds.push(r.video.on("plugininitialized", (function(t) {
                        "captions" === t && (r.isEnabled ? (r.enable(), r.options.onByDefault ? r.turnOn() : !1 !== r.options.autoEnableForSilentAutoPlay && ("playing" === r.video.state() && r.video.inSilentPlaybackMode() && r.turnOn(), r.video.on("play", (function() {
                            return (r.video.inSilentPlaybackMode() || r.options.onByViewerPreferences) && r.turnOn(), r.video.unbind
                        })), r.video.on("silentplaybackmodechange", (function(t) {
                            return t && r.turnOn(), r.video.unbind
                        })))) : r.disable())
                    }))), r
                }
                return function(t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), Object.defineProperty(t, "prototype", {
                        writable: !1
                    }), e && b(t, e)
                }(e, t), n = e, o = [{
                    key: "customizePreview",
                    value: function(t) {
                        var e = this;
                        if (t.anyChanged(["plugin[captions]", "ephemeral[captions]"])) return new Promise((function(n) {
                            var i = t.currentValue("plugin[captions]") || {
                                on: !1
                            };
                            t.changed("ephemeral[captions][captionsArray]") && e.clearCache(), e.allMountedAndFetched().then((function() {
                                e.video.requestControls("customizePreview-captions", 4e3);
                                var t = (0, r.getDeep)(e.video, "controls.captionsButton.dialog");
                                null == t || t.open(), setTimeout((function() {
                                    var t = (0, r.getDeep)(e.video, "controls.captionsButton.dialog");
                                    null == t || t.close()
                                }), 4e3), e.captions.length ? i.onByDefault ? e.turnOn() : e.turnOff() : (e.insertCaptions([{
                                    start: 0,
                                    end: 5,
                                    text: ["These captions are only an example."]
                                }, {
                                    start: 5,
                                    end: 10,
                                    text: ["When you get real captions,", "they'll be automatically enabled."]
                                }, {
                                    start: 10,
                                    end: 15,
                                    text: ["Go ahead: upload an SRT or VTT file,", "or order a transcript!"]
                                }]), e.turnOn()), n()
                            }))
                        }))
                    }
                }, {
                    key: "captionsOptionsChanged",
                    value: function(t) {
                        return t.some((function(t) {
                            return 0 === t.indexOf("plugin[captions-v1]") || 0 === t.indexOf("ephemeral[captions]")
                        }))
                    }
                }, {
                    key: "captionsArrayChanged",
                    value: function(t) {
                        return t.some((function(t) {
                            return 0 === t.indexOf("ephemeral[captions][captionsArray]")
                        }))
                    }
                }, {
                    key: "enable",
                    value: function() {
                        this.video.setControlEnabled("captions", !0), this.video.setControlEnabled("captionsButton", !0), this.video.addPlugin("captions-v1", {
                            legacy: !0
                        })
                    }
                }, {
                    key: "disable",
                    value: function() {
                        this.video.setControlEnabled("captions", !1), this.video.setControlEnabled("captionsButton", !1), this.video.removePlugin("captions-v1")
                    }
                }, {
                    key: "allMountedAndFetched",
                    value: function() {
                        var t = [this.video.whenControlMounted("captionsButton"), this.video.whenControlMounted("captions")];
                        return Promise.all(t).then((function(t) {
                            var e = c(t, 2),
                                n = e[0],
                                r = e[1];
                            return Promise.all([n.fetchCaptions(), r.fetchCaptions()])
                        }))
                    }
                }, {
                    key: "turnOn",
                    value: function() {
                        var t = this;
                        this.allMountedAndFetched().then((function() {
                            var e = t.video.controls.captionsButton;
                            if (e) {
                                var n = e.getPreferredCaptions();
                                if (n) e.setSelectedLanguage(n.language);
                                else {
                                    var r = e.captionsResp.captions[0];
                                    r && e.setSelectedLanguage(r.language)
                                }
                            }
                        }))
                    }
                }, {
                    key: "remove",
                    value: function() {
                        var t, n, r, o, a;
                        this.unbinds.forEach((function(t) {
                            "function" == typeof t ? t() : i.wlog.warn("trying to unbind a non-function", t)
                        })), this.disable(), delete this.video.plugin.captions, delete this.video.plugin["captions-v1"], (t = e, n = "remove", r = this, a = g(m(1 & (o = 3) ? t.prototype : t), n, r), 2 & o && "function" == typeof a ? function(t) {
                            return a.apply(r, t)
                        } : a)([])
                    }
                }, {
                    key: "turnOff",
                    value: function() {
                        this.video.controls.captionsButton.turnOff()
                    }
                }, {
                    key: "show",
                    value: function() {
                        this.video.setControlEnabled("captions", !0)
                    }
                }, {
                    key: "hide",
                    value: function() {
                        this.video.setControlEnabled("captions", !1)
                    }
                }, {
                    key: "setSubtitlesScale",
                    value: function(t) {
                        var e = this;
                        this.video.whenControlMounted("captions").then((function() {
                            e.video.controls.captions.setUserScale(t)
                        }))
                    }
                }, {
                    key: "getSubtitlesScale",
                    value: function() {
                        return this.video.controls.captions ? this.video.controls.captions.getUserScale() : 1
                    }
                }, {
                    key: "saveOriginalHash",
                    value: function(t) {
                        if (this.captions && (this.originalHashByLanguage || (this.originalHashByLanguage = {}), !this.originalHashByLanguage[t])) {
                            var e = this.captions.find((function(e) {
                                return e.language === t
                            }));
                            e && (this.originalHashByLanguage[t] = e.hash)
                        }
                    }
                }, {
                    key: "restoreOriginalHash",
                    value: function(t) {
                        var e;
                        if (this.captions) {
                            if (this.originalHashByLanguage || (this.originalHashByLanguage = {}), this.originalHashByLanguage[t]) {
                                var n = this.captions.find((function(e) {
                                    return e.language === t
                                }));
                                n && (n.hash = this.originalHashByLanguage[t]), delete this.originalHashByLanguage[t]
                            }
                            null === (e = this.video.controls.captions) || void 0 === e || e.setActiveLineForTime(this.video.time())
                        }
                    }
                }, {
                    key: "restoreOriginalCaptions",
                    value: function() {
                        var t = this;
                        Object.keys(this.originalHashByLanguage || {}).forEach((function(e) {
                            t.restoreOriginalHash(e)
                        }))
                    }
                }, {
                    key: "setCaptionsHash",
                    value: function(t, e) {
                        var n;
                        this.captions && (this.captions.forEach((function(n) {
                            n.language === t && (n.hash = e)
                        })), null === (n = this.video.controls.captions) || void 0 === n || n.setActiveLineForTime(this.video.time()))
                    }
                }, {
                    key: "refreshDataFromServer",
                    value: function() {
                        var t = this;
                        return new Promise((function(e) {
                            if (t.clearCache(), t.video.isControlEnabled("captions") || t.video.isControlEnabled("captionsButton")) {
                                t.video.setControlEnabled("captions", !1), t.video.setControlEnabled("captionsButton", !1);
                                var n = t.video.on("controldisabled", (function(r) {
                                    "captions" !== r && "captionsButton" !== r || (n(), t.video.setControlEnabled("captions", !0), t.video.setControlEnabled("captionsButton", !0), t.video.whenControlMounted("captions").then((function(n) {
                                        n.setActiveLineForTime(t.video.time()), e()
                                    })))
                                }))
                            }
                        }))
                    }
                }, {
                    key: "insertCaptions",
                    value: function(t) {
                        var e = {
                                english_name: "English",
                                hash: {
                                    lines: t
                                },
                                language: "_preview_",
                                native_name: "English",
                                right_to_left: !1
                            },
                            n = {
                                captions: [e],
                                preferred_languages: []
                            };
                        this.video.controls.captions.captionsResp = n, this.video.controls.captionsButton.captionsResp = n, this.video.controls.transcript.captionsResp = n, this.captions = [e], a.captionsPromises[this.video.hashedId()] = Promise.resolve(n)
                    }
                }, {
                    key: "clearCache",
                    value: function() {
                        var t = this;
                        this.captions = null, delete a.captionsPromises[this.video.hashedId()], this.fetched = (0, a.fetchCaptions)(this.video, this.options).then((function(e) {
                            t.captions = e.captions
                        }))
                    }
                }, {
                    key: "setLanguage",
                    value: function(t) {
                        this.video.controls.captionsButton.setSelectedLanguage(t)
                    }
                }, {
                    key: "turnOnByDefaultForAllMediaInCarousel",
                    value: function() {
                        this.options.isForCarousel = !0, this.options.onByDefault = !0, this.turnOn()
                    }
                }, {
                    key: "turnOffByDefaultForAllMediaInCarousel",
                    value: function() {
                        this.options.isForCarousel = !0, this.options.onByDefault = !1, this.turnOff()
                    }
                }], o && h(n.prototype, o), u && h(n, u), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, o, u
            }(o.Wistia.Plugin.Base);
            o.Wistia.plugin("captions", (function(t, e) {
                if (!t.isLiveMedia()) return new _(t, e)
            })), o.Wistia.plugin("captions-v1", (function(t, e) {
                return t.isLiveMedia() ? {} : {
                    turnOn: function() {
                        t.plugin.captions.turnOn()
                    },
                    turnOff: function() {
                        t.plugin.captions.turnOff()
                    }
                }
            }))
        }
    },
    __webpack_module_cache__ = {};

function __webpack_require__(t) {
    var e = __webpack_module_cache__[t];
    if (void 0 !== e) return e.exports;
    var n = __webpack_module_cache__[t] = {
        exports: {}
    };
    return __webpack_modules__[t](n, n.exports, __webpack_require__), n.exports
}
__webpack_require__.d = (t, e) => {
    for (var n in e) __webpack_require__.o(e, n) && !__webpack_require__.o(t, n) && Object.defineProperty(t, n, {
        enumerable: !0,
        get: e[n]
    })
}, __webpack_require__.o = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
var __webpack_exports__ = {};
__webpack_require__(447), __webpack_require__(473), __webpack_require__(475), __webpack_require__(481);
//# sourceMappingURL=captions.js.map