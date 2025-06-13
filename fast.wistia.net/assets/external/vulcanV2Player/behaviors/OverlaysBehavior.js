/*! For license information please see OverlaysBehavior.js.LICENSE.txt */
var __webpack_modules__ = {
        2: (t, e, n) => {
            n.d(e, {
                h: () => b,
                render: () => H
            });
            var r, i, o, a, c, l, s, u, f, p, d, h = {},
                v = [],
                m = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                y = Array.isArray;

            function g(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function _(t) {
                t && t.parentNode && t.parentNode.removeChild(t)
            }

            function b(t, e, n) {
                var i, o, a, c = {};
                for (a in e) "key" == a ? i = e[a] : "ref" == a ? o = e[a] : c[a] = e[a];
                if (arguments.length > 2 && (c.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof t && null != t.defaultProps)
                    for (a in t.defaultProps) null == c[a] && (c[a] = t.defaultProps[a]);
                return w(t, c, i, o, null)
            }

            function w(t, e, n, r, a) {
                var c = {
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
                return null == a && null != i.vnode && i.vnode(c), c
            }

            function E(t) {
                return t.children
            }

            function O(t, e) {
                this.props = t, this.context = e
            }

            function T(t, e) {
                if (null == e) return t.__ ? T(t.__, t.__i + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? T(t) : null
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

            function S(t) {
                (!t.__d && (t.__d = !0) && a.push(t) && !P.__r++ || c != i.debounceRendering) && ((c = i.debounceRendering) || l)(P)
            }

            function P() {
                for (var t, e, n, r, o, c, l, u = 1; a.length;) a.length > u && a.sort(s), t = a.shift(), u = a.length, t.__d && (n = void 0, o = (r = (e = t).__v).__e, c = [], l = [], e.__P && ((n = g({}, r)).__v = r.__v + 1, i.vnode && i.vnode(n), M(e.__P, n, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, c, null == o ? T(r) : o, !!(32 & r.__u), l), n.__v = r.__v, n.__.__k[n.__i] = n, N(c, n, l), n.__e != o && k(n)));
                P.__r = 0
            }

            function A(t, e, n, r, i, o, a, c, l, s, u) {
                var f, p, d, m, y, g, _ = r && r.__k || v,
                    b = e.length;
                for (l = j(n, e, _, l, b), f = 0; f < b; f++) null != (d = n.__k[f]) && (p = -1 == d.__i ? h : _[d.__i] || h, d.__i = f, g = M(t, d, p, i, o, a, c, l, s, u), m = d.__e, d.ref && p.ref != d.ref && (p.ref && R(p.ref, null, d), u.push(d.ref, d.__c || m, d)), null == y && null != m && (y = m), 4 & d.__u || p.__k === d.__k ? l = W(d, l, t) : "function" == typeof d.type && void 0 !== g ? l = g : m && (l = m.nextSibling), d.__u &= -7);
                return n.__e = y, l
            }

            function j(t, e, n, r, i) {
                var o, a, c, l, s, u = n.length,
                    f = u,
                    p = 0;
                for (t.__k = new Array(i), o = 0; o < i; o++) null != (a = e[o]) && "boolean" != typeof a && "function" != typeof a ? (l = o + p, (a = t.__k[o] = "string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? w(null, a, null, null, null) : y(a) ? w(E, {
                    children: a
                }, null, null, null) : null == a.constructor && a.__b > 0 ? w(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = t, a.__b = t.__b + 1, c = null, -1 != (s = a.__i = x(a, n, l, f)) && (f--, (c = n[s]) && (c.__u |= 2)), null == c || null == c.__v ? (-1 == s && (i > u ? p-- : i < u && p++), "function" != typeof a.type && (a.__u |= 4)) : s != l && (s == l - 1 ? p-- : s == l + 1 ? p++ : (s > l ? p-- : p++, a.__u |= 4))) : t.__k[o] = null;
                if (f)
                    for (o = 0; o < u; o++) null != (c = n[o]) && !(2 & c.__u) && (c.__e == r && (r = T(c)), F(c, c));
                return r
            }

            function W(t, e, n) {
                var r, i;
                if ("function" == typeof t.type) {
                    for (r = t.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = t, e = W(r[i], e, n));
                    return e
                }
                t.__e != e && (e && t.type && !n.contains(e) && (e = T(t)), n.insertBefore(t.__e, e || null), e = t.__e);
                do {
                    e = e && e.nextSibling
                } while (null != e && 8 == e.nodeType);
                return e
            }

            function x(t, e, n, r) {
                var i, o, a = t.key,
                    c = t.type,
                    l = e[n];
                if (null === l && null == t.key || l && a == l.key && c == l.type && !(2 & l.__u)) return n;
                if (r > (null == l || 2 & l.__u ? 0 : 1))
                    for (i = n - 1, o = n + 1; i >= 0 || o < e.length;) {
                        if (i >= 0) {
                            if ((l = e[i]) && !(2 & l.__u) && a == l.key && c == l.type) return i;
                            i--
                        }
                        if (o < e.length) {
                            if ((l = e[o]) && !(2 & l.__u) && a == l.key && c == l.type) return o;
                            o++
                        }
                    }
                return -1
            }

            function L(t, e, n) {
                "-" == e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || m.test(e) ? n : n + "px"
            }

            function C(t, e, n, r, i) {
                var o;
                t: if ("style" == e)
                    if ("string" == typeof n) t.style.cssText = n;
                    else {
                        if ("string" == typeof r && (t.style.cssText = r = ""), r)
                            for (e in r) n && e in n || L(t.style, e, "");
                        if (n)
                            for (e in n) r && n[e] == r[e] || L(t.style, e, n[e])
                    }
                else if ("o" == e[0] && "n" == e[1]) o = e != (e = e.replace(u, "$1")), e = e.toLowerCase() in t || "onFocusOut" == e || "onFocusIn" == e ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r ? n.u = r.u : (n.u = f, t.addEventListener(e, o ? d : p, o)) : t.removeEventListener(e, o ? d : p, o);
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

            function M(t, e, n, r, o, a, c, l, s, u) {
                var f, p, d, h, v, m, b, w, T, k, S, P, j, W, x, L, C, D = e.type;
                if (null != e.constructor) return null;
                128 & n.__u && (s = !!(32 & n.__u), a = [l = e.__e = n.__e]), (f = i.__b) && f(e);
                t: if ("function" == typeof D) try {
                    if (w = e.props, T = "prototype" in D && D.prototype.render, k = (f = D.contextType) && r[f.__c], S = f ? k ? k.props.value : f.__ : r, n.__c ? b = (p = e.__c = n.__c).__ = p.__E : (T ? e.__c = p = new D(w, S) : (e.__c = p = new O(w, S), p.constructor = D, p.render = U), k && k.sub(p), p.props = w, p.state || (p.state = {}), p.context = S, p.__n = r, d = p.__d = !0, p.__h = [], p._sb = []), T && null == p.__s && (p.__s = p.state), T && null != D.getDerivedStateFromProps && (p.__s == p.state && (p.__s = g({}, p.__s)), g(p.__s, D.getDerivedStateFromProps(w, p.__s))), h = p.props, v = p.state, p.__v = e, d) T && null == D.getDerivedStateFromProps && null != p.componentWillMount && p.componentWillMount(), T && null != p.componentDidMount && p.__h.push(p.componentDidMount);
                    else {
                        if (T && null == D.getDerivedStateFromProps && w !== h && null != p.componentWillReceiveProps && p.componentWillReceiveProps(w, S), !p.__e && null != p.shouldComponentUpdate && !1 === p.shouldComponentUpdate(w, p.__s, S) || e.__v == n.__v) {
                            for (e.__v != n.__v && (p.props = w, p.state = p.__s, p.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some((function(t) {
                                    t && (t.__ = e)
                                })), P = 0; P < p._sb.length; P++) p.__h.push(p._sb[P]);
                            p._sb = [], p.__h.length && c.push(p);
                            break t
                        }
                        null != p.componentWillUpdate && p.componentWillUpdate(w, p.__s, S), T && null != p.componentDidUpdate && p.__h.push((function() {
                            p.componentDidUpdate(h, v, m)
                        }))
                    }
                    if (p.context = S, p.props = w, p.__P = t, p.__e = !1, j = i.__r, W = 0, T) {
                        for (p.state = p.__s, p.__d = !1, j && j(e), f = p.render(p.props, p.state, p.context), x = 0; x < p._sb.length; x++) p.__h.push(p._sb[x]);
                        p._sb = []
                    } else
                        do {
                            p.__d = !1, j && j(e), f = p.render(p.props, p.state, p.context), p.state = p.__s
                        } while (p.__d && ++W < 25);
                    p.state = p.__s, null != p.getChildContext && (r = g(g({}, r), p.getChildContext())), T && !d && null != p.getSnapshotBeforeUpdate && (m = p.getSnapshotBeforeUpdate(h, v)), L = f, null != f && f.type === E && null == f.key && (L = I(f.props.children)), l = A(t, y(L) ? L : [L], e, n, r, o, a, c, l, s, u), p.base = e.__e, e.__u &= -161, p.__h.length && c.push(p), b && (p.__E = p.__ = null)
                } catch (t) {
                    if (e.__v = null, s || null != a)
                        if (t.then) {
                            for (e.__u |= s ? 160 : 128; l && 8 == l.nodeType && l.nextSibling;) l = l.nextSibling;
                            a[a.indexOf(l)] = null, e.__e = l
                        } else
                            for (C = a.length; C--;) _(a[C]);
                    else e.__e = n.__e, e.__k = n.__k;
                    i.__e(t, e, n)
                } else null == a && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : l = e.__e = B(n.__e, e, n, r, o, a, c, s, u);
                return (f = i.diffed) && f(e), 128 & e.__u ? void 0 : l
            }

            function N(t, e, n) {
                for (var r = 0; r < n.length; r++) R(n[r], n[++r], n[++r]);
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

            function I(t) {
                return "object" != typeof t || null == t || t.__b && t.__b > 0 ? t : y(t) ? t.map(I) : g({}, t)
            }

            function B(t, e, n, o, a, c, l, s, u) {
                var f, p, d, v, m, g, b, w = n.props,
                    E = e.props,
                    O = e.type;
                if ("svg" == O ? a = "http://www.w3.org/2000/svg" : "math" == O ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), null != c)
                    for (f = 0; f < c.length; f++)
                        if ((m = c[f]) && "setAttribute" in m == !!O && (O ? m.localName == O : 3 == m.nodeType)) {
                            t = m, c[f] = null;
                            break
                        }
                if (null == t) {
                    if (null == O) return document.createTextNode(E);
                    t = document.createElementNS(a, O, E.is && E), s && (i.__m && i.__m(e, c), s = !1), c = null
                }
                if (null == O) w === E || s && t.data == E || (t.data = E);
                else {
                    if (c = c && r.call(t.childNodes), w = n.props || h, !s && null != c)
                        for (w = {}, f = 0; f < t.attributes.length; f++) w[(m = t.attributes[f]).name] = m.value;
                    for (f in w)
                        if (m = w[f], "children" == f);
                        else if ("dangerouslySetInnerHTML" == f) d = m;
                    else if (!(f in E)) {
                        if ("value" == f && "defaultValue" in E || "checked" == f && "defaultChecked" in E) continue;
                        C(t, f, null, m, a)
                    }
                    for (f in E) m = E[f], "children" == f ? v = m : "dangerouslySetInnerHTML" == f ? p = m : "value" == f ? g = m : "checked" == f ? b = m : s && "function" != typeof m || w[f] === m || C(t, f, m, w[f], a);
                    if (p) s || d && (p.__html == d.__html || p.__html == t.innerHTML) || (t.innerHTML = p.__html), e.__k = [];
                    else if (d && (t.innerHTML = ""), A("template" == e.type ? t.content : t, y(v) ? v : [v], e, n, o, "foreignObject" == O ? "http://www.w3.org/1999/xhtml" : a, c, l, c ? c[0] : n.__k && T(n, 0), s, u), null != c)
                        for (f = c.length; f--;) _(c[f]);
                    s || (f = "value", "progress" == O && null == g ? t.removeAttribute("value") : null != g && (g !== t[f] || "progress" == O && !g || "option" == O && g != w[f]) && C(t, f, g, w[f], a), f = "checked", null != b && b != t[f] && C(t, f, b, w[f], a))
                }
                return t
            }

            function R(t, e, n) {
                try {
                    if ("function" == typeof t) {
                        var r = "function" == typeof t.__u;
                        r && t.__u(), r && null == e || (t.__u = t(e))
                    } else t.current = e
                } catch (t) {
                    i.__e(t, n)
                }
            }

            function F(t, e, n) {
                var r, o;
                if (i.unmount && i.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || R(r, null, e)), null != (r = t.__c)) {
                    if (r.componentWillUnmount) try {
                        r.componentWillUnmount()
                    } catch (t) {
                        i.__e(t, e)
                    }
                    r.base = r.__P = null
                }
                if (r = t.__k)
                    for (o = 0; o < r.length; o++) r[o] && F(r[o], e, n || "function" != typeof t.type);
                n || _(t.__e), t.__c = t.__ = t.__e = void 0
            }

            function U(t, e, n) {
                return this.constructor(t, n)
            }

            function H(t, e, n) {
                var o, a, c, l;
                e == document && (e = document.documentElement), i.__ && i.__(t, e), a = (o = "function" == typeof n) ? null : n && n.__k || e.__k, c = [], l = [], M(e, t = (!o && n || e).__k = b(E, null, [t]), a || h, h, e.namespaceURI, !o && n ? [n] : a ? null : e.firstChild ? r.call(e.childNodes) : null, c, !o && n ? n : a ? a.__e : e.firstChild, o, l), N(c, t, l)
            }
            r = v.slice, i = {
                __e: function(t, e, n, r) {
                    for (var i, o, a; e = e.__;)
                        if ((i = e.__c) && !i.__) try {
                            if ((o = i.constructor) && null != o.getDerivedStateFromError && (i.setState(o.getDerivedStateFromError(t)), a = i.__d), null != i.componentDidCatch && (i.componentDidCatch(t, r || {}), a = i.__d), a) return i.__E = i
                        } catch (e) {
                            t = e
                        }
                    throw t
                }
            }, o = 0, O.prototype.setState = function(t, e) {
                var n;
                n = null != this.__s && this.__s != this.state ? this.__s : this.__s = g({}, this.state), "function" == typeof t && (t = t(g({}, n), this.props)), t && g(n, t), null != t && this.__v && (e && this._sb.push(e), S(this))
            }, O.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), S(this))
            }, O.prototype.render = E, a = [], l = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, s = function(t, e) {
                return t.__v.__b - e.__v.__b
            }, P.__r = 0, u = /(PointerCapture)$|Capture$/i, f = 0, p = D(!1), d = D(!0)
        },
        3: (t, e, n) => {
            n.d(e, {
                elemAnimate: () => g,
                elemAppend: () => p,
                elemBind: () => _,
                elemFromObject: () => f,
                elemRemove: () => d,
                elemStyle: () => h,
                elemUnbind: () => b
            });
            var r, i = n(4),
                o = (n(6), n(8), n(9)),
                a = n(12),
                c = (n(19), n(20), n(26)),
                l = n(16),
                s = function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                },
                u = (l.Wistia, (0, o.cachedDetect)()),
                f = function(t) {
                    if ((0, i.isArray)(t)) {
                        for (var e = [], n = 0; n < t.length; n++) e.push(f(t[n]));
                        return e
                    }
                    var r = t.tagName || "div",
                        o = t.childNodes || [];
                    (0, i.isArray)(o) || (o = [o]);
                    var a = document.createElement(r);
                    for (var c in t)
                        if (s(t, c)) {
                            var l = t[c];
                            if ("childNodes" !== c && "tagName" !== c && "ref" !== c) {
                                var u = c.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
                                if ("style" === c)
                                    if ((0, i.isObject)(l))
                                        for (var d in l) a.style[d] = l[d];
                                    else
                                        for (var h = l.split(";"), v = 0; v < h.length; v++) {
                                            var m = h[v].split(/\s*:\s*/),
                                                y = m[0],
                                                g = m[1];
                                            y && g && (a.style[y] = g)
                                        } else if ("events" === c)
                                            for (var b in l) {
                                                var w = l[b];
                                                _(a, b, w)
                                            } else "className" === c || "class" === c ? a.className = l : "innerHTML" === c ? a.innerHTML = l : "innerText" === c ? a.innerText = l : null != l && "function" == typeof l.toString && a.setAttribute(u, l.toString())
                            }
                        }
                    for (var E = 0; E < o.length; E++) {
                        var O = o[E];
                        if ((0, i.isObject)(O)) {
                            var T = f(O);
                            p(a, T)
                        } else {
                            var k = document.createTextNode(O.toString());
                            p(a, k)
                        }
                    }
                    return "function" == typeof t.ref && t.ref(a), a
                },
                p = function(t, e) {
                    if ((0, i.isArray)(e))
                        for (var n = 0; n < e.length; n++) p(t, e[n]);
                    else t.tagName.includes("-") ? t.shadowRoot.appendChild(e, {
                        wistiaGridCaller: !0
                    }) : t.appendChild(e, {
                        wistiaGridCaller: !0
                    })
                },
                d = function(t) {
                    var e;
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList)
                        for (var n = 0; n < t.length; n++) d(t[n]);
                    else null == t || 1 !== t.nodeType && 3 !== t.nodeType || !(e = t.parentNode) || (e.removeChild(t), t = null)
                },
                h = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList) {
                        for (var o = [], c = 0; c < t.length; c++) {
                            var l = t[c];
                            1 === l.nodeType && o.push(h.apply(void 0, [l].concat(n)))
                        }
                        return o
                    }
                    if (2 === n.length) {
                        var s = n[0],
                            u = n[1];
                        t.style[s] = u
                    } else if (1 === n.length)
                        if ("string" == typeof n[0]) {
                            var f = n[0];
                            try {
                                return t.currentStyle ? t.currentStyle[f] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(f) : null
                            } catch (t) {
                                a.wlog.notice(t)
                            }
                        } else {
                            var p = y(n[0]);
                            for (var d in p) {
                                var v = p[d];
                                t.style[d] = v
                            }
                        }
                    else a.wlog.apply(void 0, ["Unexpected args", t].concat(n))
                },
                v = {
                    borderImage: !0,
                    mixBlendMode: !0,
                    transform: !0,
                    transition: !0,
                    transitionDuration: !0
                },
                m = ["webkit", "moz", "o", "ms"],
                y = function(t) {
                    if (u.chrome) return t;
                    var e = {};
                    for (var n in t) {
                        var r = t[n];
                        if (e[n] = r, v[n])
                            for (var i = m, o = 0; o < i.length; o++) {
                                var a = i[o] + n.charAt(0).toUpperCase() + n.slice(1);
                                n[a] || (e[a] = r)
                            }
                    }
                    return e
                },
                g = function(t) {
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
                    h(t, {
                        transition: r
                    }), T((function() {
                        h(t, e), setTimeout((function() {
                            h(t, {
                                transition: ""
                            }), "function" == typeof n.callback && n.callback()
                        }), n.time)
                    }))
                },
                _ = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = function(r) {
                            (r = r || window.event).pageX || r.pageY || !r.clientX && !r.clientY || (r.pageX = r.clientX + O(), r.pageY = r.clientY + E()), r.preventDefault || (r.preventDefault = function() {
                                r.returnValue = !1
                            }), r.stopPropagation || (r.stopPropagation = function() {
                                r.cancelBubble = !0
                            }), null == r.which && (r.which = null != r.charCode ? r.charCode : r.keyCode), null == r.which && null != r.button && (1 & r.button ? r.which = 1 : 2 & r.button ? r.which = 3 : 4 & r.button ? r.which = 2 : r.which = 0), r.target || r.srcElement && (r.target = r.srcElement), r.target && 3 === r.target.nodeType && (r.target = r.target.parentNode);
                            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                            var c = n.apply(r.target, [r].concat(o));
                            return c === b && b(t, e, n), c
                        };
                    l.Wistia._elemBind = l.Wistia._elemBind || {};
                    var o = w(t, e, n);
                    return l.Wistia._elemBind[o] = i, i.elem = t, i.event = e, t.addEventListener(e, i, r),
                        function() {
                            b(t, e, n, r)
                        }
                },
                b = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (null != t && null != t._wistiaElemId && null != n && n._wistiaBindId) {
                        var i = w(t, e, n),
                            o = l.Wistia._elemBind[i];
                        return o && (t.removeEventListener(e, o, r), o.elem = null, o.event = null), delete l.Wistia._elemBind[i]
                    }
                },
                w = function(t, e, n) {
                    return t._wistiaElemId = t._wistiaElemId || (0, c.seqId)("wistia_elem_"), n._wistiaBindId = n._wistiaBindId || (0, c.seqId)("wistia_bind_"), "".concat(t._wistiaElemId, ".").concat(e, ".").concat(n._wistiaBindId)
                },
                E = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollTop || e && e.scrollTop || 0;
                    e && (e.scrollTop = t), n && (n.scrollTop = t)
                },
                O = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollLeft || e && e.scrollLeft || 0;
                    e && (e.scrollLeft = t), n && (n.scrollLeft = t)
                },
                T = function(t) {
                    return (window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(t) {
                        return setTimeout(t, 1e3 / 60)
                    })(t)
                };
            ["auxclick", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mouseup", "reset", "submit", "touchend", "touchstart"].forEach((function(t) {
                _(document, t, (function(t) {
                    r = t, Date.now(), setTimeout((function() {
                        r === t && (r = void 0)
                    }), 0)
                }), !u.passiveSupported || {
                    capture: !0,
                    passive: !0
                })
            }))
        },
        4: (t, e, n) => {
            n.d(e, {
                cast: () => v,
                clone: () => s,
                eachLeaf: () => P,
                getDeep: () => u,
                isArray: () => _,
                isEmpty: () => k,
                isObject: () => w,
                merge: () => o,
                setAndPreserveUndefined: () => p,
                setDeep: () => f,
                unsetDeep: () => h
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
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : c,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : l;
                    if (_(e)) {
                        _(t) || (t = []);
                        for (var o = 0; o < e.length; o++) {
                            var s = e[o];
                            null == t[o] && null != s && (_(s) ? t[o] = [] : w(s) && (t[o] = {}));
                            var u = a(t[o], s, n);
                            i(e, o, u) ? delete t[o] : t[o] = u
                        }
                        return n(t)
                    }
                    if (w(e)) {
                        for (var f in e)
                            if (r(e, f) && (r(t, f) || null == t[f])) {
                                var p = e[f];
                                _(p) ? (_(t[f]) || (t[f] = []), a(t[f], p, n), t[f] = n(t[f])) : w(p) ? (w(t[f]) || (t[f] = {}), a(t[f], p, n), t[f] = n(t[f])) : null == t ? (t = {}, i(e, f, p) || (t[f] = n(p))) : i(e, f, p) ? delete t[f] : t[f] = n(p)
                            }
                        return n(t)
                    }
                    return n(e)
                },
                c = function(t) {
                    return t
                },
                l = function(t, e, n) {
                    return null == n
                },
                s = function(t, e) {
                    return _(t) ? a([], t, e) : a({}, t, e)
                },
                u = function(t, e, n) {
                    e = "string" == typeof e ? e.split(".") : i.call(e);
                    for (var o, a = t; null != t && e.length;) {
                        var c = e.shift();
                        void 0 !== t[c] && (w(t[c]) || _(t[c])) || !n || (0 === c ? (t = a[o] = [])[c] = {} : t[c] = {}), a = t, o = c, t = r(t, c) ? t[c] : void 0
                    }
                    return t
                },
                f = function(t, e, n) {
                    return d(t, e, n, !0)
                },
                p = function(t, e, n) {
                    return d(t, e, n, !1)
                },
                d = function(t, e, n) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = (e = "string" == typeof e ? e.split(".") : i.call(e)).pop();
                    null != (t = u(t, e, !0)) && (w(t) || _(t)) && null != o && (r && null == n ? delete t[o] : t[o] = n)
                },
                h = function(t, e) {
                    return f(t, e)
                },
                v = function(t) {
                    return null == t ? t : w(t) || _(t) ? y(t) : m("".concat(t), t)
                },
                m = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                    return /^-?[1-9]\d*?$/.test(t) ? parseInt(t, 10) : "0" === t || "-0" === t ? 0 : /^-?\d*\.\d+$/.test(t) ? parseFloat(t) : !!/^true$/i.test(t) || !/^false$/i.test(t) && e
                },
                y = function(t) {
                    return a(t, t, (function(t) {
                        return "string" == typeof t ? m(t) : t
                    }), (function() {
                        return !1
                    }))
                },
                g = /^\s*function Array()/,
                _ = function(t) {
                    return null != t && t.push && g.test(t.constructor)
                },
                b = /^\s*function Object()/,
                w = function(t) {
                    return null != t && "object" == typeof t && b.test(t.constructor)
                },
                E = /^\s*function RegExp()/,
                O = /^string|number|boolean|function$/i,
                T = function(t) {
                    return null != t && (O.test(typeof t) || function(t) {
                        return null != t && E.test(t.constructor)
                    }(t))
                },
                k = function(t) {
                    return null == t || (!(!_(t) || t.length) || !!w(t) && !Object.keys(t).length)
                },
                S = function(t, e, n, o, a) {
                    if (null == n && (n = []), T(t)) e(t, n, o, a);
                    else if (w(t) || _(t)) {
                        for (var c in e(t, n, o, a), t)
                            if (r(t, c)) {
                                var l = i.call(n);
                                l.push(c), S(t[c], e, l, t, c)
                            }
                    } else e(t, n, o, a)
                },
                P = function(t, e) {
                    S(t, (function(t, n, r, i) {
                        _(t) || w(t) || e(t, n, r, i)
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
            n.d(e, {
                onDocReady: () => o
            });
            var r = n(7),
                i = function() {
                    return /loaded|complete/.test(document.readyState)
                },
                o = function() {
                    var t, e;
                    if (arguments.length > 1 ? (t = arguments[0], e = arguments[1]) : (t = 1e4, e = arguments[0]), i()) e();
                    else if (top === self && document.documentElement.doScroll) {
                        (0, r.poll)((function() {
                            try {
                                return document.documentElement.doScroll("left"), !0
                            } catch (t) {
                                return !1
                            }
                        }), e, 50, t, e)
                    } else {
                        var n = function() {
                                i() && (clearTimeout(a), o(), e())
                            },
                            o = function() {
                                document.removeEventListener("DOMContentLoaded", n, !1), document.removeEventListener("readystatechange", n, !1), window.removeEventListener("load", n, !1)
                            },
                            a = setTimeout((function() {
                                o(), e()
                            }), t);
                        document.addEventListener("DOMContentLoaded", n, !1), document.addEventListener("readystatechange", n, !1), window.addEventListener("load", n, !1)
                    }
                }
        },
        7: (t, e, n) => {
            n.d(e, {
                poll: () => r
            });
            var r = function(t, e, n, r, i) {
                var o = null,
                    a = (new Date).getTime(),
                    c = function() {
                        (new Date).getTime() - a > r ? "function" == typeof i && i() : t() ? e() : (clearTimeout(o), o = setTimeout(c, n))
                    };
                o = setTimeout(c, 1)
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
                cachedDetect: () => R
            });
            var r, i = n(10),
                o = n(11),
                a = navigator.userAgent,
                c = null,
                l = /(webkit)[ /]([^\s]+)/i,
                s = /OPR\/([^\s]+)/i,
                u = /(edge)\/(\d+(?:\.\d+)?)/i,
                f = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
                p = /(android) ([^;]+)/i,
                d = /(iphone)/i,
                h = /(Windows Phone OS (\d+(?:\.\d+)?))/,
                v = /OS (\d+)_(\d+)/i,
                m = /(firefox)/i,
                y = /Mobile VR/i,
                g = /Version\/([^\s]+)/i,
                _ = function() {
                    return (w()[1] || "webkit").toLowerCase()
                },
                b = function() {
                    return w()[2]
                },
                w = function() {
                    var t;
                    return (t = a.match(u)) || (t = a.match(l)) || (t = a.match(s)) ? t : t ? (null != document.documentMode && (t[2] = document.documentMode), t) : (t = a.match(f)) || []
                },
                E = function() {
                    var t = a.match(p);
                    return null != t && {
                        version: t[2]
                    }
                },
                O = function() {
                    return d.test(a)
                },
                T = function() {
                    return W() > 0 || E() || S()
                },
                k = function() {
                    try {
                        var t = matchMedia("(hover:hover)");
                        if ("not all" !== t.media) return t.matches
                    } catch (t) {}
                    return !T()
                },
                S = function() {
                    return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
                },
                P = function() {
                    return l.test(a) && !/chrome/i.test(a) && !S() && !O()
                },
                A = function() {
                    return !(!/Chrome/.test(a) || !/Google Inc/.test(navigator.vendor)) && {
                        version: j()
                    }
                },
                j = function() {
                    var t = a.match(/\bChrome\/([^\s]+)/);
                    return t && t[1]
                },
                W = function() {
                    var t = a.match(v),
                        e = a.match(g);
                    return null != t ? parseFloat("".concat(t[1], ".").concat(t[2])) : null != e && e[1] && S() ? parseFloat(e[1]) : 0
                },
                x = function() {
                    return u.test(a)
                },
                L = function() {
                    return m.test(a)
                },
                C = function() {
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
                D = function() {
                    try {
                        return "localStorage" in i.root && null != i.root.localStorage
                    } catch (t) {
                        return !1
                    }
                },
                M = ["WebKit", "Moz", "O", "Ms", ""],
                N = function() {
                    for (var t = 0; t < M.length; t++) {
                        var e = "".concat(M[t], "MutationObserver");
                        if (i.root[e]) return e
                    }
                    return null
                },
                I = function() {
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
                B = function() {
                    var t = A(),
                        e = L(),
                        n = x(),
                        r = s.test(a),
                        i = t && b() >= 32,
                        o = t && b() >= 75 && E(),
                        c = e && b() >= 65,
                        l = e && b() >= 67 && E(),
                        u = n && b() >= 18,
                        f = r && b() >= 19;
                    return i || o || c || l || u || f
                },
                R = function() {
                    return c || (c = F())
                },
                F = function() {
                    var t, e, n, r = {
                        browser: {
                            version: b()
                        },
                        edge: x(),
                        firefox: L(),
                        gearvr: y.test(a),
                        hdr: !(null === (e = (n = window).matchMedia) || void 0 === e || !e.call(n, "(dynamic-range: high)").matches) || !!(screen.colorDepth && screen.colorDepth >= 30),
                        android: E(),
                        oldandroid: E() && parseFloat(E().version) < 4.1,
                        iphone: O(),
                        ipad: S(),
                        safari: P(),
                        chrome: A(),
                        winphone: {
                            version: h.test(a)[2]
                        },
                        ios: {
                            version: W()
                        },
                        windows: /win/i.test(navigator.platform),
                        mac: /mac/i.test(navigator.platform),
                        retina: null != i.root.devicePixelRatio && i.root.devicePixelRatio > 1,
                        hoverIsNatural: k(),
                        touchScreen: T(),
                        video: C(),
                        mediaSource: i.root.MediaSource && i.root.MediaSource.isTypeSupported("".concat('video/mp4; codecs="avc1.42E01E', ', mp4a.40.2"')),
                        nativeHls: (O() || S() || P()) && C().nativeHls,
                        localstorage: D(),
                        fullscreenEnabled: document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
                        vulcanV2Support: (t = /webkit|mozilla|edge/.test(_()), !!(O() || S() || E()) || Boolean(t && C().h264 && Object.defineProperties)),
                        mutationObserver: N(),
                        callingPlayRequiresEventContext: W() > 0 || E() || P(),
                        passiveSupported: I(),
                        webp: B(),
                        performanceMeasure: (0, o.hasPerformanceMeasureSupport)()
                    };
                    return r.browser[_()] = !0, r
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
                wlog: () => m
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
            var c = {
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
                l = function() {},
                s = function(t) {
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
                u = s.prototype;
            u.reset = function() {
                this.ctx.level = 0, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = (new Date).getTime()
            }, u.setLevel = function(t) {
                var e = this.logFunc(3);
                null != c[t] ? (this.ctx.level = c[t], e('Log level set to "'.concat(t, '" (').concat(c[t], ")"))) : e('Unknown log level "'.concat(t, '"'))
            }, u.setGrep = function(t) {
                this.ctx.grep = t
            }, u.setGrepv = function(t) {
                this.ctx.grepv = t
            }, u.first1000LogLines = function() {
                return this.ctx.first1000LogLines
            }, u.last1000LogLines = function() {
                return this.ctx.last1000LogLines
            }, u.matchedGrep = function(t) {
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
                        c = !this.ctx.grepv || !o.match(this.ctx.grepv);
                    e = a && c
                } else e = !0;
                return e
            }, u.now = function() {
                return "undefined" != typeof performance && "function" == typeof performance.now ? performance.now().toFixed(3) : Date.now ? Date.now() - this.ctx.initializedAt : (new Date).getTime() - this.ctx.initializedAt
            }, u.messagesToLogLine = function(t, e, n) {
                var r, i = [t, e];
                i = i.concat(n);
                try {
                    (r = i.join(" ") || "").length > 200 && (r = r.slice(0, 200))
                } catch (t) {
                    r = "could not serialize"
                }
                return r
            }, u.persistLine = function(t) {
                this.ctx.first1000LogLines.length < 1e3 ? this.ctx.first1000LogLines.push(t) : (this.ctx.last1000LogLines.length >= 1e3 && this.ctx.last1000LogLines.shift(), this.ctx.last1000LogLines.push(t))
            }, u.log = function(t, e) {
                var n, i = t <= this.ctx.level,
                    a = t < 4,
                    c = (i || a) && this.matchedGrep(e);
                if (0 === t && (0, r.globalTrigger)("problem", {
                        type: "error-logged",
                        data: {
                            messages: e
                        }
                    }), c && (i || a) && (n = this.now()), a && c) {
                    var l = this.messagesToLogLine(t, n, e);
                    this.persistLine(l)
                }
                if (i && c) {
                    var s, u = this.logFunc(t);
                    1 === e.length && (s = e[0]) instanceof Error ? (u(s.message), s.stack && u(s.stack)) : u.apply(void 0, o(e))
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
                d = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.info.apply(console, e)
                },
                h = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.debug.apply(console, e)
                },
                v = function(t) {
                    console.log.apply(console, t)
                };
            u.logFunc = function(t) {
                return null == t && (t = this.level), console ? (0 === t ? e = f : 1 === t ? e = p : 3 === t ? e = d : 4 === t && (e = h), e || (e = v), "function" != typeof e && (this.noConsoleLog = !0, e = l), e) : l;
                var e
            }, u.maybePrefix = function(t, e) {
                if (t) {
                    if ("function" == typeof t) try {
                        t = t()
                    } catch (e) {
                        t = 'prefix err "'.concat(e.message, '"')
                    }
                    return t instanceof Array ? t.concat(e) : [t].concat(e)
                }
                return e
            }, u.getPrefixedFunctions = function(t) {
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
            var m = new s(i.Wistia.wlogCtx)
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
                        var a = c(n);
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
                        var a = c(n);
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
                    var l = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && l) {
                        var s = c(l);
                        return void 0 === i.Wistia.EventShepherdManager[s] && (i.Wistia.EventShepherdManager[s] = new o.EventShepherd(l)), i.Wistia.EventShepherdManager[s].addListener(t, l, e),
                            function() {
                                i.Wistia.EventShepherdManager[s].removeListener(t, l, e)
                            }
                    }
                    return r.bind.call(this, t, e)
                },
                off: function(t, e) {
                    if ("crosstime" === t && this.crossTime) return this.crossTime.removeBinding(arguments[1], arguments[2]);
                    if ("betweentimes" === t && this.betweenTimes) return this.betweenTimes.removeBinding(arguments[1], arguments[2], arguments[3]);
                    var n = this.embedElement || this.container;
                    if (Object.keys(o.convertedEventNames).includes(t) && n) {
                        var a = c(n);
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
                c = function(t) {
                    return null != t && t.mediaId ? t.mediaId : null != t && t.id ? t.id : void 0
                }
        },
        15: (t, e, n) => {
            n.d(e, {
                bind: () => l,
                bindNamed: () => h,
                bindify: () => g,
                trigger: () => f,
                unbind: () => s,
                unbindAllInNamespace: () => m,
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
            var c = Array.prototype.slice,
                l = function(t, e) {
                    var n = this;
                    return n._bindings || (n._bindings = {}), n._bindings[t] || (n._bindings[t] = []), n._bindings[t].push(e),
                        function() {
                            n.unbind(t, e)
                        }
                },
                s = function(t, e) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var n = [], r = 0; r < this._bindings[t].length; r++) {
                        var i = this._bindings[t][r];
                        i !== e && n.push(i)
                    }
                    this._bindings[t] = n
                },
                u = function(t, e) {
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
                    for (var e, n = c.call(arguments, 1), i = o(this._bindings[t]), a = 0; a < i.length; a++) {
                        var l = i[a];
                        try {
                            l.apply(this, n) === this.unbind && (null == e && (e = []), e.push({
                                event: t,
                                fn: l
                            }))
                        } catch (t) {
                            if (this._throwTriggerErrors) throw t;
                            r.Wistia.error && r.Wistia.error(t)
                        }
                    }
                    if (e)
                        for (var s = 0; s < e.length; s++) {
                            var u = e[s];
                            this.unbind(u.event, u.fn)
                        }
                    return this
                },
                d = function(t, e) {
                    null == t._namedBindings && (t._namedBindings = {}), null == t._namedBindings[e] && (t._namedBindings[e] = {})
                },
                h = function(t, e, n, r) {
                    return this.unbindNamed(t, e),
                        function(t, e, n, r, i) {
                            d(t, e), t._namedBindings[e][n] = {
                                event: r,
                                fn: i
                            }
                        }(this, t, e, n, r), this.bind(n, r),
                        function() {
                            this.unbindNamed(t, e)
                        }
                },
                v = function(t, e) {
                    d(this, t);
                    var n = function(t, e, n) {
                        return d(t, e), t._namedBindings[e][n]
                    }(this, t, e);
                    if (n) {
                        var r = n.event,
                            i = n.fn;
                        this.unbind(r, i)
                    }
                    var o = this._namedBindings;
                    return delete o[t][e], y(o[t]) && delete o[t], this
                },
                m = function(t) {
                    var e = this._namedBindings && this._namedBindings[t];
                    if (null == e) return this;
                    for (var n in e) i(e, n) && this.unbindNamed(t, n)
                },
                y = function(t) {
                    for (var e in t)
                        if (i(t, e)) return !1;
                    return !0
                },
                g = function(t) {
                    return t.bind = l, t.unbind = s, t.on = l, t.off = s, t.rebind = u, t.trigger = f, t.bindNamed = h, t.unbindNamed = v, t.unbindAllInNamespace = m, t
                };
            g(function() {}.prototype)
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
                EventShepherd: () => c,
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
                c = function() {
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
                            var c = function(e) {
                                if (a[t]) {
                                    var r = a[t](e.detail);
                                    n(r)
                                } else n()
                            };
                            this.convertedEventsMap[i].push({
                                givenCallback: n,
                                eventListenerCallback: c
                            }), e.addEventListener(i, c)
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
                                c = [];
                            n ? (e.removeEventListener(a, n), this.convertedEventsMap[a] && (this.convertedEventsMap[a].forEach((function(t, r) {
                                t.givenCallback === n && (c.push(r), e.removeEventListener(a, t.eventListenerCallback))
                            })), c.forEach((function(t) {
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
                        c = document.documentElement,
                        l = t.getBoundingClientRect(),
                        s = c.clientTop || r.clientTop || 0,
                        u = c.clientLeft || r.clientLeft || 0;
                    e = o && null != o.pageYOffset ? o.pageYOffset : i() && c && null != c.scrollTop ? c.scrollTop : r.scrollTop, n = o && null != o.pageXOffset ? o.pageXOffset : i() && c && null != c.scrollLeft ? c.scrollLeft : r.scrollLeft;
                    var f = a(t);
                    return {
                        height: l.height * f,
                        top: l.top * f + e - s,
                        left: l.left * f + n - u,
                        width: l.width * f,
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
                runScripts: () => u
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
            var l = function(t) {
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
                s = function(t) {
                    var e, n, r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8e3,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                    return null == r && (r = 8e3), null == i && (i = {}), new Promise((function(a) {
                        !0 === i.once && (e = l(t)) && (n = !0), i.once && n ? e.readyState && !/loaded|complete/.test(e.readyState) || setTimeout((function() {
                            a()
                        }), 1) : (0, o.runScript)(t, r).then(a).catch((function(t) {
                            a(t), setTimeout((function() {
                                console.error(t)
                            }), 1)
                        }))
                    }))
                },
                u = function() {
                    for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    t = n[0] instanceof Array ? n[0] : n, t = f(t);
                    var o = [],
                        l = [],
                        u = [];
                    return t.forEach((function(t) {
                        var e = function(t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? a(Object(n), !0).forEach((function(e) {
                                        c(t, e, n[e])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach((function(e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                                    }))
                                }
                                return t
                            }({}, t),
                            n = new Promise((function(t) {
                                e.resolve = t
                            }));
                        e.promise = n, u.push(e.promise), t.async ? o.push(e) : l.push(e)
                    })), l.reduce((function(t, e) {
                        if (e.fn) try {
                            e.fn()
                        } catch (t) {
                            r.wlog.error(t)
                        } finally {
                            e.resolve()
                        } else e.src && s(e.src, null, e).then(e.resolve);
                        return t.then(e.promise)
                    }), Promise.resolve()), setTimeout((function() {
                        o.forEach((function(t) {
                            if (t.fn) try {
                                t.fn()
                            } catch (t) {
                                r.wlog.error(t)
                            } finally {
                                t.resolve()
                            } else t.src && s(t.src, null, t).then(t.resolve)
                        }))
                    }), 1), Promise.all(u)
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
                            c = !1,
                            l = function() {
                                o.onerror = o.onreadystatechange = o.onload = null, clearTimeout(a), clearTimeout(u), a = setTimeout((function() {
                                    o && o.parentNode && o.parentNode.removeChild(o)
                                }), 500)
                            },
                            s = function() {
                                var t = o.readyState;
                                c || t && !/loaded|complete/.test(t) || (c = !0, setTimeout((function() {
                                    r(), l()
                                }), 1))
                            },
                            u = setTimeout((function() {
                                c = !0, l(), i(new Error("timeout"))
                            }), e);
                        o.onerror = function(t) {
                            c = !0, l(), i(t)
                        }, o.onreadystatechange = s, o.onload = s, (document.body || document.head).appendChild(o)
                    }))
                }
        },
        23: (t, e, n) => {
            n.d(e, {
                TAGGED_VERSION: () => c,
                eV1HostWithPort: () => p,
                eV1Protocol: () => d,
                metricsHost: () => h
            });
            var r = n(10),
                i = n(24),
                o = n(25),
                a = ((0, o.appHostname)("app"), (0, o.appHostname)("fast-protected"), (0, o.appHostname)("fast")),
                c = "",
                l = ("undefined" != typeof window && r.root === window && r.root.location && r.root.location.protocol, function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                    return t || a
                }),
                s = function() {
                    return "fast.".concat("wistia.net")
                },
                u = function() {
                    for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.src) {
                            var r = new i.Url(n.src),
                                o = /\/assets\/external\/E-v1?\.js$/.test(r.rawPath),
                                a = r.host === l() || r.host === s() || "fast-canary.wistia.net" === r.host,
                                c = "https:" === location.protocol && "https:" === r.protocol,
                                u = "" === r.protocol || null == r.protocol,
                                f = c || u || "http:" === location.protocol,
                                p = !n.readyState || /loaded|complete/.test(n.readyState);
                            if (o && a && f && p) return r
                        }
                    }
                    return new i.Url("".concat((0, i.proto)(), "//").concat(s(), "/E-v1.js"))
                }(),
                f = function() {
                    return u.host
                },
                p = function() {
                    return u.port ? "".concat(f(), ":").concat(u.port) : f()
                },
                d = function() {
                    return u.protocol
                },
                h = function() {
                    return "pipedream.".concat("wistia.com")
                },
                v = [].concat(["wistia.net", "wistia.com"], ["wistia.mx", "wistia.dev", "wistia.tech", "wistia.am", "wistia.se", "wistia.io", "wistia.st"]);
            new RegExp("(".concat(v.map((function(t) {
                return "\\.".concat(t.replace(".", "\\."))
            })).join("|"), ")$"))
        },
        24: (t, e, n) => {
            n.d(e, {
                Url: () => u,
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
                c = function(t) {
                    for (var e = t[0], n = 1; n < t.length; n++) e += "[".concat(t[n], "]");
                    return e
                },
                l = function(t) {
                    return t.match(/([\w\-_]+)/g)
                },
                s = ["protocol", "host", "port", "params", "path"],
                u = function(t) {
                    var e = this;
                    e.params = {}, e.path = [], e.host = "", "object" == typeof t ? e.fromOptions(t) : t && e.fromRaw(t)
                },
                f = u.prototype;
            f.fromOptions = function(t) {
                for (var e = 0; e < s.length; e++) {
                    var n = s[e];
                    null != t[n] && (this[n] = t[n])
                }
                return this
            }, f.fromRaw = function(t) {
                var e;
                return this.rawUrl = t, (e = t.match(/^((?:https?:)|(?:file:)|(?:ftp:))?\/\//)) && (this.protocol = e[1] || void 0), (e = t.match(/\/\/([^:?#/]*)/)) && (this.host = e[1] || void 0), (e = t.match(/\/\/.*?(\/[^?#$]+)/) || t.match(/(^\/[^/][^?#$]+)/)) && this.setPath(e[1]), (e = t.match(/:(\d+)/)) && (this.port = parseInt(e[1], 10)), (e = t.match(/\?([^#]+)/)) && (this.rawParams = e[1], this.params = function(t) {
                    var e = {};
                    if (!t) return e;
                    for (var n = t.split("&"), o = function() {
                            var t = n[c].split("="),
                                o = t[0],
                                s = t[1];
                            try {
                                o = l(decodeURIComponent(o)) || ""
                            } catch (t) {
                                setTimeout((function() {
                                    i.wlog.notice(t)
                                }), 50), o = ""
                            }(0, r.cast)(o);
                            var u = (0, r.getDeep)(e, o);
                            if (null != u)
                                if ((0, r.isArray)(u)) u.push(a(s));
                                else {
                                    var f = [u];
                                    f.push(a(s)), (0, r.setAndPreserveUndefined)(e, o, f)
                                }
                            else(0, r.setAndPreserveUndefined)(e, o, a(s))
                        }, c = 0; c < n.length; c++) o();
                    return e
                }(this.rawParams)), (e = t.match(/#(.*)$/)) && (this.anchor = e[1]), this
            }, f.clone = function() {
                return new u({
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
                    null != t ? i.push("".concat(encodeURIComponent(c(e)), "=").concat(encodeURIComponent(t))) : i.push(encodeURIComponent(c(e)))
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
            }, u.create = function(t) {
                return new u(t)
            };
            u.create;
            u.parse = function(t) {
                return new u(t)
            };
            u.parse
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
        38: (t, e, n) => {
            n.d(e, {
                isVisitorTrackingEnabled: () => f
            });
            var r = n(13),
                i = n(39),
                o = n(41),
                a = n(16);

            function c(t) {
                return function(t) {
                    if (Array.isArray(t)) return l(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return l(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function l(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            var s;
            a.Wistia._visitorTrackingDomain || (a.Wistia._visitorTrackingDomain = location.hostname || ""), a.Wistia._visitorTracking || (null != (s = (0, i.getWistiaLocalStorage)().visitorTrackingEnabled) && ((0, i.updateWistiaLocalStorage)((function(t) {
                return delete t.visitorTrackingEnabled
            })), a.Wistia._visitorTracking = {}, a.Wistia._visitorTracking[a.Wistia._visitorTrackingDomain] = {
                isEnabled: s,
                updatedAt: Date.now()
            }, (0, i.updateWistiaLocalStorage)((function(t) {
                return t.visitorTracking = a.Wistia._visitorTracking
            }))), a.Wistia._visitorTracking = (0, i.getWistiaLocalStorage)().visitorTracking || {});
            a.Wistia.consent = function(t) {
                return null == t ? f() : u(t)
            };
            var u = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : a.Wistia._visitorTrackingDomain;
                    "default" === t ? delete a.Wistia._visitorTracking[e] : a.Wistia._visitorTracking[e] = {
                        isEnabled: "true" === "".concat(t),
                        updatedAt: Date.now()
                    }, (0, i.updateWistiaLocalStorage)((function(t) {
                        return t.visitorTracking = a.Wistia._visitorTracking
                    })), (0, r.globalTrigger)("visitortrackingchange", t), c(document.getElementsByTagName("wistia-player")).forEach((function(e) {
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
                        e.push.apply(e, c(a.Wistia.channel.all()))
                    } catch (t) {}
                    return !e.some((function(t) {
                        return !0 === (t._mediaData || t._galleryData || {}).privacyMode
                    }))
                }
        },
        39: (t, e, n) => {
            n.d(e, {
                getWistiaLocalStorage: () => a,
                updateWistiaLocalStorage: () => c
            });
            var r = n(40),
                i = n(16),
                o = "wistia",
                a = function() {
                    return (0, r.getLocalStorage)(o)
                },
                c = function(t) {
                    return i.Wistia._localStorage = (0, r.updateLocalStorage)(o, t), i.Wistia._localStorage
                }
        },
        40: (t, e, n) => {
            n.d(e, {
                getLocalStorage: () => l,
                removeLocalStorage: () => s,
                setLocalStorage: () => u,
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
                c = function() {
                    return null == r.Wistia[o] && (r.Wistia[o] = {}), r.Wistia[o]
                },
                l = function(t) {
                    if (!a()) return c()[t] || {};
                    if (localStorage[t]) try {
                        return "null" === localStorage[t] ? {} : JSON.parse(localStorage[t])
                    } catch (t) {
                        i(t)
                    }
                    return {}
                },
                s = function(t) {
                    if (a()) try {
                        localStorage.removeItem(t)
                    } catch (t) {
                        i(t)
                    } else c()[t] = {}
                },
                u = function(t, e) {
                    if (!a()) return null != e && "object" == typeof e && (c()[t] = e), e;
                    try {
                        c()[t] = e, localStorage[t] = JSON.stringify(e)
                    } catch (t) {
                        i(t)
                    }
                    return e
                },
                f = function(t, e) {
                    var n = l(t);
                    try {
                        e(n)
                    } catch (t) {
                        i(t)
                    }
                    return u(t, n)
                }
        },
        41: (t, e, n) => {
            n.d(e, {
                getAllApiHandles: () => c,
                getAllApiHandlesByDomOrder: () => l
            });
            var r = n(42),
                i = (n(12), n(43));

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
            var c = function() {
                    return (void 0 === (0, i.wData)("video") ? [] : Object.values((0, i.wData)("video"))).concat(void 0 === (0, i.wData)("iframe_api") ? [] : Object.values((0, i.wData)("iframe_api")))
                },
                l = function() {
                    var t = Array.from((0, r.getAllApiEmbedElements)("wistia_embed_initialized")).reduce((function(t, e) {
                            return void 0 !== e.wistiaApi && "removed" !== e.wistiaApi && null !== e.wistiaApi && t.push(e.wistiaApi), t
                        }), []),
                        e = Array.from(document.querySelectorAll("wistia-player")).reduce((function(t, e) {
                            return void 0 !== e.deprecatedApiDoNotUse && "removed" !== e.deprecatedApiDoNotUse && null !== e.deprecatedApiDoNotUse && t.push(e.deprecatedApiDoNotUse), t
                        }), []);
                    return [].concat(o(t), o(e))
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
                    c = a.iterator || "@@iterator",
                    l = a.asyncIterator || "@@asyncIterator",
                    s = a.toStringTag || "@@toStringTag";

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

                function f(t, e, n, r) {
                    var i = e && e.prototype instanceof g ? e : g,
                        a = Object.create(i.prototype),
                        c = new x(r || []);
                    return o(a, "_invoke", {
                        value: P(t, n, c)
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
                var d = "suspendedStart",
                    h = "suspendedYield",
                    v = "executing",
                    m = "completed",
                    y = {};

                function g() {}

                function _() {}

                function b() {}
                var w = {};
                u(w, c, (function() {
                    return this
                }));
                var E = Object.getPrototypeOf,
                    O = E && E(E(L([])));
                O && O !== n && r.call(O, c) && (w = O);
                var T = b.prototype = g.prototype = Object.create(w);

                function k(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function S(t, e) {
                    function n(i, o, a, c) {
                        var l = p(t[i], t, o);
                        if ("throw" !== l.type) {
                            var s = l.arg,
                                u = s.value;
                            return u && "object" == typeof u && r.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                                n("next", t, a, c)
                            }), (function(t) {
                                n("throw", t, a, c)
                            })) : e.resolve(u).then((function(t) {
                                s.value = t, a(s)
                            }), (function(t) {
                                return n("throw", t, a, c)
                            }))
                        }
                        c(l.arg)
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

                function P(e, n, r) {
                    var i = d;
                    return function(o, a) {
                        if (i === v) throw Error("Generator is already running");
                        if (i === m) {
                            if ("throw" === o) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (r.method = o, r.arg = a;;) {
                            var c = r.delegate;
                            if (c) {
                                var l = A(c, r);
                                if (l) {
                                    if (l === y) continue;
                                    return l
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (i === d) throw i = m, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            i = v;
                            var s = p(e, n, r);
                            if ("normal" === s.type) {
                                if (i = r.done ? m : h, s.arg === y) continue;
                                return {
                                    value: s.arg,
                                    done: r.done
                                }
                            }
                            "throw" === s.type && (i = m, r.method = "throw", r.arg = s.arg)
                        }
                    }
                }

                function A(e, n) {
                    var r = n.method,
                        i = e.iterator[r];
                    if (i === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, A(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), y;
                    var o = p(i, e.iterator, n.arg);
                    if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, y;
                    var a = o.arg;
                    return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, y) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
                }

                function j(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function W(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function x(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(j, this), this.reset(!0)
                }

                function L(e) {
                    if (e || "" === e) {
                        var n = e[c];
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
                return _.prototype = b, o(T, "constructor", {
                    value: b,
                    configurable: !0
                }), o(b, "constructor", {
                    value: _,
                    configurable: !0
                }), _.displayName = u(b, s, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === _ || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, u(t, s, "GeneratorFunction")), t.prototype = Object.create(T), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, k(S.prototype), u(S.prototype, l, (function() {
                    return this
                })), e.AsyncIterator = S, e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new S(f(t, n, r, i), o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, k(T), u(T, s, "Generator"), u(T, c, (function() {
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
                }, e.values = L, x.prototype = {
                    constructor: x,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(W), !e)
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
                            return c.type = "throw", c.arg = e, n.next = r, i && (n.method = "next", n.arg = t), !!i
                        }
                        for (var o = this.tryEntries.length - 1; o >= 0; --o) {
                            var a = this.tryEntries[o],
                                c = a.completion;
                            if ("root" === a.tryLoc) return i("end");
                            if (a.tryLoc <= this.prev) {
                                var l = r.call(a, "catchLoc"),
                                    s = r.call(a, "finallyLoc");
                                if (l && s) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                } else if (l) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                } else {
                                    if (!s) throw Error("try statement without catch or finally");
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
                        return a.type = t, a.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, y) : this.complete(a)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), W(n), y
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    W(n)
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
                        }, "next" === this.method && (this.arg = t), y
                    }
                }, e
            }

            function o(t, e, n, r, i, o, a) {
                try {
                    var c = t[o](a),
                        l = c.value
                } catch (t) {
                    return void n(t)
                }
                c.done ? e(l) : Promise.resolve(l).then(r, i)
            }
            var a = function() {
                var t, e = (t = i().mark((function t(e) {
                    var n, o, a, c, l = arguments;
                    return i().wrap((function(t) {
                        for (;;) switch (t.prev = t.next) {
                            case 0:
                                if (a = null !== (n = (o = l.length > 1 && void 0 !== l[1] ? l[1] : {}).host) && void 0 !== n ? n : (0, r.eV1HostWithPort)(), !("" !== (c = r.TAGGED_VERSION) && c.length > 0 && !0 !== o.mediaData)) {
                                    t.next = 5;
                                    break
                                }
                                return t.abrupt("return",
                                    import ("".concat((0, r.eV1Protocol)(), "//").concat(a, "/").concat(e, "@").concat(c)));
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

                        function c(t) {
                            o(a, r, i, c, l, "next", t)
                        }

                        function l(t) {
                            o(a, r, i, c, l, "throw", t)
                        }
                        c(void 0)
                    }))
                });
                return function(t) {
                    return e.apply(this, arguments)
                }
            }()
        },
        53: (t, e, n) => {
            n.d(e, {
                unescapeHtml: () => r.unescapeHtml
            });
            n(7), n(54);
            var r = n(55);
            n(16)
        },
        54: (t, e, n) => {
            n.d(e, {
                throttle: () => r
            });
            var r = function(t, e) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                    r = null,
                    i = null,
                    o = null,
                    a = null,
                    c = 0,
                    l = function() {
                        c = !1 === n.leading ? 0 : (new Date).getTime(), a = null, o = e.apply(r, i), a || (r = i = null)
                    };
                return function() {
                    var s = (new Date).getTime();
                    c || !1 !== n.leading || (c = s);
                    var u = t - (s - c);
                    return r = this, i = arguments, u <= 0 || u > t ? (clearTimeout(a), a = null, c = s, o = e.apply(r, i), a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(l, u)), o
                }
            }
        },
        55: (t, e, n) => {
            n.d(e, {
                unescapeHtml: () => i
            });
            var r = {},
                i = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    if (!t) return "";
                    if (e.cache) {
                        var n = r[t];
                        if (r[t]) return n
                    }
                    var i, o = document.createElement("div");
                    return o.innerHTML = t.toString().replace(/</g, "&lt;").replace(/>/g, "&gt;"), i = o.childNodes.length > 0 ? o.childNodes[0].nodeValue : "", e.cache && (r[t] = i), i
                }
        },
        70: (t, e, n) => {
            n.d(e, {
                destroyControl: () => c
            });
            n(5);
            var r = n(9),
                i = (n(71), n(3)),
                o = n(2),
                a = (n(26), n(72), function(t, e) {
                    if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                    return Object.prototype.hasOwnProperty.call(Object(t), e)
                }),
                c = ((0, r.cachedDetect)(), function(t) {
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
                        }(t), l(t), u(t), f(t)
                }),
                l = function(t) {
                    t.rootElem && (0, i.elemRemove)(Array.prototype.slice.call(t.rootElem.childNodes))
                },
                s = function(t) {
                    var e = t[0],
                        n = t[1];
                    e && n && (0, o.render)((0, o.h)("nothing", null), e)
                },
                u = function(t) {
                    var e = t.reactMounts;
                    if (e)
                        if (e instanceof Array) s(e);
                        else
                            for (var n in e) a(e, n) && e[n] && s(e[n])
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
                    var o = l(t);
                    if (a(t, o), e) {
                        var c = i.Wistia._timeouts[o];
                        null == c && (c = i.Wistia._timeouts[o] = {});
                        var s = setTimeout((function() {
                            delete c[t], e()
                        }), n);
                        return c[t] = s, s
                    }
                    return i.Wistia._timeouts[o][t]
                },
                a = function(t) {
                    var e, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if ((0, r.isArray)(t) && (t = t.join(".")), "__global__" === (n = n || l(t)) && (e = i.Wistia._timeouts[t]))
                        for (var o in e) {
                            var a = e[o];
                            clearTimeout(a), delete e[o]
                        }
                    if (e = i.Wistia._timeouts[n])
                        for (var s in e) {
                            var u = e[s];
                            !s.indexOf || 0 !== s.indexOf(t) || s.length !== t.length && "." !== s.charAt(t.length) || (clearTimeout(u), delete e[s])
                        }
                    i.Wistia.blockSweepTimeouts || (i.Wistia.blockSweepTimeouts = !0, setTimeout(c, 0), setTimeout((function() {
                        i.Wistia.blockSweepTimeouts = !1
                    }), 5e3))
                },
                c = function() {
                    for (var t in i.Wistia._timeouts) {
                        var e = i.Wistia._timeouts[t];
                        (0, r.isEmpty)(e) && delete i.Wistia._timeouts[t]
                    }
                },
                l = function(t) {
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
                countMetric: () => s
            });
            var r = n(5),
                i = n(8),
                o = n(38),
                a = n(23),
                c = n(16);
            null == c.Wistia._simpleMetricsCache && (c.Wistia._simpleMetricsCache = {}), null == c.Wistia._simpleMetricsDebounceInterval && (c.Wistia._simpleMetricsDebounceInterval = 500);
            var l = c.Wistia._simpleMetricsCache,
                s = function(t) {
                    return f("count", t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
                },
                u = function() {
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
                    var a, s = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if ((0, o.isVisitorTrackingEnabled)()) try {
                        null == l.toMput && (l.toMput = []);
                        var f = (0, r.assign)({
                                type: t,
                                key: e,
                                value: null != n ? n : null
                            }, s),
                            p = JSON.stringify(f, (a = new WeakSet, function(t, e) {
                                if ("object" == typeof e && null !== e) {
                                    if (a.has(e)) return "[Circular]";
                                    a.add(e)
                                }
                                return e
                            }));
                        l.toMput.push(p), clearTimeout(c.Wistia._msendTimeout), c.Wistia._msendTimeout = setTimeout((function() {
                            (0, i.pageLoaded)((function() {
                                u.apply(undefined, l.toMput), l.toMput = []
                            }))
                        }), c.Wistia._simpleMetricsDebounceInterval)
                    } catch (t) {
                        console.error(t.message), console.error(t.stack)
                    }
                }
        },
        135: (t, e, n) => {
            n.d(e, {
                maybeLoadAndSetupEmbedLinksThrottled: () => p
            });
            var r = n(6),
                i = n(71),
                o = n(46),
                a = n(54),
                c = n(41),
                l = n(16);

            function s(t) {
                return function(t) {
                    if (Array.isArray(t)) return u(t)
                }(t) || function(t) {
                    if ("undefined" != typeof Symbol && null != t[Symbol.iterator] || null != t["@@iterator"]) return Array.from(t)
                }(t) || function(t, e) {
                    if (t) {
                        if ("string" == typeof t) return u(t, e);
                        var n = {}.toString.call(t).slice(8, -1);
                        return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? u(t, e) : void 0
                    }
                }(t) || function() {
                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }()
            }

            function u(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
                return r
            }
            l.Wistia._destructors.destroyEmbedLinks = function() {
                l.Wistia.EmbedLink.EmbedLinkClass && l.Wistia.EmbedLink.EmbedLinkClass._onEv1Destroy()
            };
            var f = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    (function() {
                        for (var t = (0, c.getAllApiHandlesByDomOrder)(), e = 0; e < t.length; e++)
                            if (t[e]._attrs && t[e]._attrs.playlistLinks) return !0;
                        return document.querySelectorAll('a[href^="#wistia_"]').length > 0 || s(document.getElementsByTagName("wistia-player")).some((function(t) {
                            return t.shadowRoot.querySelectorAll('a[href^="#wistia_"]').length > 0
                        }))
                    })() && (0, o.dynamicImport)("assets/external/embedLinks.js").then((function(t) {
                        var n;
                        (n = t.EmbedLink).setupAll.apply(n, e)
                    }))
                },
                p = (0, a.throttle)(1e3, (function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    f.apply(void 0, e), (0, r.onDocReady)((function() {
                        f.apply(void 0, e), (0, i.doTimeout)("maybe_load_embed_links_5000", f, 5e3)
                    }))
                }));
            l.Wistia.EmbedLink = {}, l.Wistia.EmbedLink.setupAll = f
        },
        185: (t, e, n) => {
            n.d(e, {
                default: () => s
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

            function c(t, e, n) {
                if ("function" == typeof t ? t === e : t.has(e)) return arguments.length < 3 ? e : n;
                throw new TypeError("Private element is not present on this object")
            }
            var l = new WeakMap;
            const s = function() {
                return t = function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), a(this, l, void 0), this.video = e, this.embedElement = e.container, this.unbinds = [], this.eventListeners = new Map, this.reactMounts = {}, this.isWistiaPlayer = "WISTIA-PLAYER" === this.embedElement.tagName, this.impl = e, this.api = this.isWistiaPlayer ? this.embedElement : e.publicApi, this.props = {}
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
                        return e = this, (t = l).get(c(t, e));
                        var t, e
                    },
                    set: function(t) {
                        var e, n, r;
                        n = this, r = t, (e = l).set(c(e, n), r)
                    }
                }]) && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e, n
            }()
        },
        232: (t, e, n) => {
            n.d(e, {
                PlayerBehavior: () => a
            });
            var r = function(t, e) {
                if (null == t) throw new TypeError("Cannot convert undefined or null to object");
                return Object.prototype.hasOwnProperty.call(Object(t), e)
            };

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
            var a = function() {
                return t = function t(e) {
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, t), this.impl = e, this.embedElement = e.container, this.unbinds = [], this.eventListeners = new Map, this.namedUnbinds = {}
                }, (e = [{
                    key: "addNamedUnbind",
                    value: function(t, e) {
                        this.namedUnbinds[t] && this.namedUnbinds[t](), this.namedUnbinds[t] = e
                    }
                }, {
                    key: "removeNamedUnbind",
                    value: function(t) {
                        this.namedUnbinds[t] && (this.namedUnbinds[t](), delete this.namedUnbinds[t])
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        var t = this;
                        for (var e in this.unbinds instanceof Array && this.unbinds.map((function(t) {
                                return t()
                            })), this.eventListeners instanceof Map && (this.eventListeners.forEach((function(e, n) {
                                t.embedElement.removeEventListener(n, e)
                            })), this.eventListeners.clear()), this.namedUnbinds) r(this.namedUnbinds, e) && this.namedUnbinds[e].map((function(t) {
                            return t()
                        }));
                        this.unbinds = [], this.namedUnbinds = {}, this.impl = null, this._destroyed = !0
                    }
                }]) && i(t.prototype, e), n && i(t, n), Object.defineProperty(t, "prototype", {
                    writable: !1
                }), t;
                var t, e, n
            }()
        },
        929: (t, e, n) => {
            var r = n(4),
                i = n(3),
                o = n(185),
                a = n(72);

            function c(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, l(r.key), r)
                }
            }

            function l(t) {
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

            function s(t, e, n) {
                return e = p(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, u() ? Reflect.construct(e, n || [], p(t).constructor) : e.apply(t, n))
            }

            function u() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (u = function() {
                    return !!t
                })()
            }

            function f() {
                return f = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = p(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }, f.apply(null, arguments)
            }

            function p(t) {
                return p = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, p(t)
            }

            function d(t, e) {
                return d = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, d(t, e)
            }
            var h = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = s(this, e, [t])).queue = [], n.video = t, n
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
                }(e, t), n = e, o = [{
                    key: "destroy",
                    value: function() {
                        var t, n, r, i, o;
                        this._active && this._active.config.destroy && this._active.config.destroy(), (t = e, n = "destroy", r = this, o = f(p(1 & (i = 3) ? t.prototype : t), n, r), 2 & i && "function" == typeof o ? function(t) {
                            return o.apply(r, t)
                        } : o)([])
                    }
                }, {
                    key: "mount",
                    value: function(t) {
                        this.rootElem = t
                    }
                }, {
                    key: "onControlPropsUpdated",
                    value: function(t) {
                        this._active && (this._active.config.props = this.props, this._active.config.onControlPropsUpdated && this._active.config.onControlPropsUpdated(t))
                    }
                }, {
                    key: "mountConfig",
                    value: function(t) {
                        var e = this;
                        return this.mounted.then((function() {
                            e._prev = e._active, e._active = {
                                config: t
                            }, e._active.config.props = e.props;
                            var n = (0, r.merge)({
                                backgroundColor: "rgba(0,0,0,.55)",
                                backgroundImage: "radial-gradient(farthest-corner, rgba(0,0,0,.05), rgba(0,0,0,.2), rgba(0,0,0,0.9))",
                                clip: "rect(0,0,0,0)",
                                color: "#fff",
                                fontFamily: "Helvetica, Sans-Serif",
                                height: "100%",
                                left: 0,
                                position: "absolute",
                                top: 0,
                                width: "100%"
                            }, e._active.config.style);
                            e._active.rootElem = (0, i.elemFromObject)({
                                style: n,
                                class: "w-css-reset"
                            }), (0, i.elemAppend)(e.rootElem, e._active.rootElem);
                            var o = e._active.config.mount(e._active.rootElem);
                            return (o && o.then && o.catch ? o : Promise.resolve()).then((function() {
                                (0, i.elemStyle)(e._active.rootElem, {
                                    clip: ""
                                });
                                var n, r = e.getTransitionOptions(t).transition;
                                n = e._prev ? e.animateOut(e._prev.rootElem, t) : Promise.resolve(), "fade" === r ? n.then((function() {
                                    e.animateIn(e._active.rootElem, t).then((function() {
                                        e.removeAbilityToFocusControls()
                                    }))
                                })) : "slide" === r && e.animateIn(e._active.rootElem, t).then((function() {
                                    e.removeAbilityToFocusControls()
                                }))
                            }))
                        }))
                    }
                }, {
                    key: "hide",
                    value: function() {
                        var t = this,
                            e = this._active;
                        if (e) {
                            var n = e.rootElem;
                            this._active = null, this.animateOut(n, e.config).then((function() {
                                t.restoreAbilityToFocusControls(), (0, i.elemRemove)(n)
                            }))
                        }
                    }
                }, {
                    key: "animateIn",
                    value: function(t, e) {
                        var n = this.getTransitionOptions(e),
                            r = n.transition,
                            o = n.transitionTime,
                            a = n.transitionDirection;
                        return new Promise((function(e) {
                            if ("fade" === r)(0, i.elemStyle)(t, {
                                opacity: 0
                            }), setTimeout((function() {
                                (0, i.elemAnimate)(t, {
                                    opacity: 1
                                }, {
                                    time: o,
                                    callback: e
                                })
                            }), 0);
                            else if ("slide" === r) {
                                var n = "translateX(100%)";
                                "ltor" === a && (n = "translateX(-100%)"), (0, i.elemStyle)(t, {
                                    transform: n
                                }), setTimeout((function() {
                                    (0, i.elemAnimate)(t, {
                                        transform: "translateX(0)"
                                    }, {
                                        time: o,
                                        easing: "linear",
                                        callback: e
                                    })
                                }), 0)
                            }
                        }))
                    }
                }, {
                    key: "animateOut",
                    value: function(t, e) {
                        var n = this.getTransitionOptions(e),
                            r = n.transition,
                            o = n.transitionTime;
                        return new Promise((function(e) {
                            "fade" === r ? ((0, i.elemStyle)(t, {
                                opacity: 1
                            }), setTimeout((function() {
                                (0, i.elemAnimate)(t, {
                                    opacity: 0
                                }, {
                                    time: o,
                                    callback: e
                                })
                            }), 0)) : "slide" === r && ((0, i.elemStyle)(t, {
                                transform: "translateX(0)"
                            }), setTimeout((function() {
                                (0, i.elemAnimate)(t, {
                                    transform: "translateX(100%)"
                                }, {
                                    time: o,
                                    easing: "linear",
                                    callback: e
                                })
                            }), 0))
                        }))
                    }
                }, {
                    key: "destroyActiveConfig",
                    value: function() {
                        var t = this;
                        return new Promise((function(e) {
                            t._active && t._active.config ? t.animateOut(t._active.rootElem).then((function() {
                                t._active.config.destroy && t._active.config.destroy(), (0, i.elemRemove)(t._active.rootElem), e()
                            })) : e()
                        }))
                    }
                }, {
                    key: "getTransitionOptions",
                    value: function(t) {
                        return {
                            transition: t.transition || "fade",
                            transitionTime: t.transitionTime || 400,
                            transitionDirection: t.transitionDirection || ""
                        }
                    }
                }, {
                    key: "removeAbilityToFocusControls",
                    value: function() {
                        var t = this;
                        this._changedFocus = {
                            elems: [],
                            previousTabIndex: []
                        };
                        var n = this.video.behaviors.ui.mountRefs;
                        Object.keys(this.video.controls).forEach((function(r) {
                            if (r !== e.handle) {
                                var i = n[r].querySelectorAll('button, [href], input, select, textarea, [tabindex="0"]');
                                t._changedFocus.elems = t._changedFocus.elems.concat(Array.prototype.slice.call(i))
                            }
                        })), this._changedFocus.elems.forEach((function(e) {
                            t._changedFocus.previousTabIndex.push(e.getAttribute("tabindex")), e.setAttribute("tabindex", -1)
                        }))
                    }
                }, {
                    key: "restoreAbilityToFocusControls",
                    value: function() {
                        var t = this;
                        this._changedFocus.elems.forEach((function(e, n) {
                            var r = t._changedFocus.previousTabIndex[n];
                            null != r ? e.setAttribute("tabindex", r) : e.removeAttribute("tabindex")
                        })), this._changedFocus = {}
                    }
                }], o && c(n.prototype, o), a && c(n, a), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, o, a
            }(o.default);
            h.handle = "modalOverlay", h.type = "foreground", h.sortValue = 500, (0, a.defineControl)(h)
        },
        930: (t, e, n) => {
            var r = n(4),
                i = n(28),
                o = n(53),
                a = n(3),
                c = n(46),
                l = n(72),
                s = n(185);

            function u(t, e) {
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
                    e % 2 ? u(Object(n), !0).forEach((function(e) {
                        p(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function p(t, e, n) {
                return (e = h(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function d(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, h(r.key), r)
                }
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

            function v(t, e, n) {
                return e = g(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, m() ? Reflect.construct(e, n || [], g(t).constructor) : e.apply(t, n))
            }

            function m() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (m = function() {
                    return !!t
                })()
            }

            function y() {
                return y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = g(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }, y.apply(null, arguments)
            }

            function g(t) {
                return g = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, g(t)
            }

            function _(t, e) {
                return _ = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, _(t, e)
            }
            var b = function(t) {
                    function e(t) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), (n = v(this, e, [t])).annotations = {}, n.unbinds = [], n.video = t, n._conversionOpportunityType = "link", n.unbinds.push(n.video.bind("clickforsoundvisibilitychange", (function(t) {
                            n.adjustSpacingForClickForSound(t)
                        }))), n
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
                        }), e && _(t, e)
                    }(e, t), n = e, l = [{
                        key: "mount",
                        value: function(t) {
                            var e = {
                                    position: "absolute",
                                    display: "flex",
                                    flexDirection: "column",
                                    pointerEvents: "none",
                                    maxWidth: "50%",
                                    width: "100%"
                                },
                                n = (0, a.elemFromObject)({
                                    childNodes: [{
                                        style: (0, r.merge)(f(f({}, e), {}, {
                                            alignItems: "flex-start"
                                        }))
                                    }, {
                                        style: (0, r.merge)(f(f({}, e), {}, {
                                            right: "0px",
                                            alignItems: "flex-end"
                                        }))
                                    }]
                                });
                            (0, a.elemAppend)(t, n), this.rootElem = t.childNodes[0]
                        }
                    }, {
                        key: "destroy",
                        value: function() {
                            for (var t in this.annotations) this.annotations[t].config.destroy && this.annotations[t].config.destroy();
                            var n, r, i, o, a;
                            (n = e, r = "destroy", i = this, a = y(g(1 & (o = 3) ? n.prototype : n), r, i), 2 & o && "function" == typeof a ? function(t) {
                                return a.apply(i, t)
                            } : a)([])
                        }
                    }, {
                        key: "onControlPropsUpdated",
                        value: function(t) {
                            var e = "".concat(this.roundBaseFontSize(), "px"),
                                n = "".concat(Math.round(this.roundBaseFontSize() / 3), "px");
                            for (var r in this.annotations)(0, a.elemStyle)(this.annotations[r].config.rootElem, {
                                fontSize: e,
                                borderRadius: n
                            }), this.annotations[r].config.onControlPropsUpdated && this.annotations[r].config.onControlPropsUpdated(t)
                        }
                    }, {
                        key: "mountConfig",
                        value: function(t, e) {
                            var n = this;
                            return (0, c.dynamicImport)("assets/external/interFontFace.js").then((function() {
                                return n.mounted.then((function() {
                                    var c = {
                                        config: t
                                    };
                                    if (n.annotations[e.name]) return Promise.resolve();
                                    n.annotations[e.name] = {
                                        config: t
                                    }, 1 === Object.keys(n.annotations).length && n.video.trigger("annotationvisible"), n.video.trigger("annotation-impression", {
                                        annotationId: c.config.annotationId
                                    }), c.config.props = n.props;
                                    var l = "left" === (c.config.location || c.config.position) ? 0 : 1,
                                        s = w(t),
                                        u = t.url ? E(t.url) : "",
                                        p = .75 * n.roundBaseFontSize(),
                                        d = (0, r.merge)(f({
                                            fontFamily: i.interFontFamily,
                                            margin: "".concat(p, "px ").concat(p, "px 0 ").concat(p, "px"),
                                            pointerEvents: "auto",
                                            display: "block",
                                            lineHeight: "1.2em",
                                            fontWeight: "600",
                                            fontSize: "".concat(n.roundBaseFontSize(), "px"),
                                            letterSpacing: "0.03em",
                                            padding: "".concat(p, "px ").concat(p + 3, "px"),
                                            borderRadius: "".concat(n.roundBaseFontSize() / 5, "px"),
                                            boxShadow: " 0 0 5px 0 rgba(108, 108, 108, 0.5)"
                                        }, s), c.config.style);
                                    c.rootElem = (0, a.elemFromObject)({
                                        tagName: "a",
                                        target: "_blank",
                                        innerText: (0, o.unescapeHtml)(O(t.text)),
                                        href: u,
                                        class: "w-css-reset",
                                        style: d
                                    }), n.addClickBinding(c), (0, a.elemAppend)(n.rootElem.childNodes[l], c.rootElem);
                                    var h = c.config.mount(c.rootElem);
                                    return (h && h.then && h.catch ? h : Promise.resolve()).then((function() {
                                        (0, a.elemStyle)(c.rootElem, {
                                            clip: ""
                                        });
                                        var e = t.transition || "pop",
                                            r = t.transitionTime || 200;
                                        "pop" === e ? n.animateIn(c.rootElem, e, r) : (0, a.elemStyle)(t.rootElem, {
                                            transform: "scale3d(1,1,1)",
                                            opacity: 1
                                        })
                                    }))
                                }))
                            }))
                        }
                    }, {
                        key: "addClickBinding",
                        value: function(t) {
                            var e = this;
                            this.unbinds.push((0, a.elemBind)(t.rootElem, "click", (function(n) {
                                var r = {
                                    annotationId: t.config.annotationId
                                };
                                t.config.url || (t.config.onClick && (e.video.trigger("annotation-click", r), t.config.onClick()), n.preventDefault());
                                var i = {
                                    converted: !0,
                                    link: t.config.url,
                                    co_key: t.config.conversionOpportunityKey || null,
                                    co_type: e._conversionOpportunityType,
                                    time: e.video.time()
                                };
                                t.config.url && (e.video.trigger("annotation-click", r), e.video.trigger("conversion-link", i), e.video.pause())
                            })))
                        }
                    }, {
                        key: "hide",
                        value: function(t) {
                            var e = this.annotations[t.name];
                            if (e) {
                                delete this.annotations[t.name], 0 === Object.keys(this.annotations).length && this.video.trigger("noannotationsvisible");
                                var n = e.config.rootElem,
                                    r = e.config.transition || "pop",
                                    i = e.config.transitionTime || 200;
                                n === document.activeElement && this.video._focusNextVisibleElem(), "pop" === r ? this.animateOut(n, r, i).then((function() {
                                    (0, a.elemRemove)(n)
                                })) : (0, a.elemRemove)(n)
                            }
                        }
                    }, {
                        key: "animateIn",
                        value: function(t, e, n) {
                            return new Promise((function(e) {
                                (0, a.elemStyle)(t, {
                                    transform: "scale3d(.7,.7,1)",
                                    opacity: 0
                                }), setTimeout((function() {
                                    (0, a.elemAnimate)(t, {
                                        transform: "scale3d(1,1,1)",
                                        opacity: 1
                                    }, {
                                        time: n,
                                        easing: "ease-in",
                                        callback: e
                                    })
                                }), 0)
                            }))
                        }
                    }, {
                        key: "animateOut",
                        value: function(t, e, n) {
                            return new Promise((function(e) {
                                (0, a.elemStyle)(t, {
                                    transform: "scale3d(1,1,1)",
                                    opacity: 1
                                }), setTimeout((function() {
                                    (0, a.elemAnimate)(t, {
                                        transform: "scale3d(.7,.7,1)",
                                        opacity: 0
                                    }, {
                                        time: n,
                                        easing: "ease-out",
                                        callback: e
                                    })
                                }), 0)
                            }))
                        }
                    }, {
                        key: "roundBaseFontSize",
                        value: function() {
                            return Math.round(16 * this.props.scale)
                        }
                    }, {
                        key: "updateFromOptions",
                        value: function(t) {
                            if (t.name && this.video._impl._overlays[t.name])
                                for (var e in t) this.updateFromOption(e, t)
                        }
                    }, {
                        key: "updateFromOption",
                        value: function(t, e) {
                            switch (t) {
                                case "text":
                                    this.updateAnnotationText(e);
                                    break;
                                case "url":
                                    this.updateAnnotationUrl(e);
                                    break;
                                case "time":
                                    this.updateAnnotationTime(e);
                                    break;
                                case "duration":
                                    this.updateAnnotationDuration(e)
                            }
                        }
                    }, {
                        key: "updateAnnotationText",
                        value: function(t) {
                            var e = O(t.text || "");
                            this.video._impl._overlays[t.name].text = (0, o.unescapeHtml)(e), this.annotations[t.name] && (this.annotations[t.name].config.rootElem.innerText = e)
                        }
                    }, {
                        key: "updateAnnotationUrl",
                        value: function(t) {
                            var e = E(t.url);
                            this.video._impl._overlays[t.name].url = e, this.annotations[t.name] && (this.annotations[t.name].config.rootElem.href = e)
                        }
                    }, {
                        key: "updateAnnotationTime",
                        value: function(t) {
                            this.video._impl._overlays[t.name].time = t.time, this.annotations[t.name] && (this.annotations[t.name].config.time = t.time)
                        }
                    }, {
                        key: "updateAnnotationDuration",
                        value: function(t) {
                            this.video._impl._overlays[t.name].duration = t.duration, this.annotations[t.name] && (this.annotations[t.name].config.duration = t.duration)
                        }
                    }, {
                        key: "adjustSpacingForClickForSound",
                        value: function(t) {
                            this.rootElem && this.rootElem.childNodes.length >= 2 && (t ? (0, a.elemStyle)(this.rootElem.childNodes[1], {
                                marginTop: "".concat(56 * this.props.scale, "px")
                            }) : (0, a.elemStyle)(this.rootElem.childNodes[1], {
                                marginTop: "0px"
                            }))
                        }
                    }], l && d(n.prototype, l), s && d(n, s), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, l, s
                }(s.default),
                w = function(t) {
                    return t.theme && "light" === t.theme ? {
                        color: "#505050",
                        backgroundColor: "rgba(255,255,255,.80)"
                    } : {
                        color: "#fff",
                        backgroundColor: "rgba(0,0,0,.55)"
                    }
                },
                E = function(t) {
                    var e = (0, o.unescapeHtml)(t);
                    return "http" == e.substring(0, 4) || "mailto" == e.substring(0, 6) || "ftp" == e.substring(0, 3) || "/" == e.substring(0, 1) || "#" == e.substring(0, 1) || "tel" == e.substring(0, 3) ? e : "http://".concat(e)
                },
                O = function(t) {
                    return t.replace(/<br\/>/g, "\n").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>")
                };
            b.handle = "annotationOverlay", b.type = "above-control-bar", b.sortValue = 500, (0, l.defineControl)(b)
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
(() => {
    __webpack_require__.d(__webpack_exports__, {
        OverlaysBehavior: () => v
    });
    __webpack_require__(929), __webpack_require__(930);
    var t = __webpack_require__(12),
        e = __webpack_require__(15),
        n = __webpack_require__(232),
        r = __webpack_require__(135);

    function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var r = Object.getOwnPropertySymbols(t);
            e && (r = r.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, r)
        }
        return n
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var n = null != arguments[e] ? arguments[e] : {};
            e % 2 ? i(Object(n), !0).forEach((function(e) {
                a(t, e, n[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
            }))
        }
        return t
    }

    function a(t, e, n) {
        return (e = u(e)) in t ? Object.defineProperty(t, e, {
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
                var r, i, o, a, c = [],
                    l = !0,
                    s = !1;
                try {
                    if (o = (n = n.call(t)).next, 0 === e) {
                        if (Object(n) !== n) return;
                        l = !1
                    } else
                        for (; !(l = (r = o.call(n)).done) && (c.push(r.value), c.length !== e); l = !0);
                } catch (t) {
                    s = !0, i = t
                } finally {
                    try {
                        if (!l && null != n.return && (a = n.return(), Object(a) !== a)) return
                    } finally {
                        if (s) throw i
                    }
                }
                return c
            }
        }(t, e) || function(t, e) {
            if (t) {
                if ("string" == typeof t) return l(t, e);
                var n = {}.toString.call(t).slice(8, -1);
                return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? l(t, e) : void 0
            }
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function l(t, e) {
        (null == e || e > t.length) && (e = t.length);
        for (var n = 0, r = Array(e); n < e; n++) r[n] = t[n];
        return r
    }

    function s(t, e) {
        for (var n = 0; n < e.length; n++) {
            var r = e[n];
            r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, u(r.key), r)
        }
    }

    function u(t) {
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

    function f(t, e, n) {
        return e = d(e),
            function(t, e) {
                if (e && ("object" == typeof e || "function" == typeof e)) return e;
                if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                return function(t) {
                    if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return t
                }(t)
            }(t, p() ? Reflect.construct(e, n || [], d(t).constructor) : e.apply(t, n))
    }

    function p() {
        try {
            var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (t) {}
        return (p = function() {
            return !!t
        })()
    }

    function d(t) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }, d(t)
    }

    function h(t, e) {
        return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
            return t.__proto__ = e, t
        }, h(t, e)
    }
    var v = function(e) {
        function n() {
            return function(t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }(this, n), f(this, n, arguments)
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
            }), e && h(t, e)
        }(n, e), i = n, a = [{
            key: "init",
            value: function() {
                var t = this;
                this.overlaysQueue = [], this.unbinds = [], this.unbinds.push(this.impl.on("beforepopoverhide", (function() {
                    if (t._activeOverlayName && "modal" === t._activeOverlayConfig.type && (t.impl.publicApi.unsuspend({
                            state: "paused"
                        }), t._activeOverlayConfig.options)) {
                        var e = t._activeOverlayConfig.options.time;
                        t.cancelOverlay(t._activeOverlayName).then((function() {
                            "before" === e && t.impl.publicApi.suspend()
                        }))
                    }
                })))
            }
        }, {
            key: "requestOverlay",
            value: function(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                    shouldSuspendPlayer: !0
                };
                if (this._activeOverlayName === e) return Promise.resolve();
                var r = this.impl._overlays[e];
                if (r) return "modal" === r.type ? this.showOrQueueOverlay(e, r, n) : this.showOrQueueOverlay(e, this.getConfig(r), n);
                t.wlog.error("No overlay with name ".concat(e, " is defined"))
            }
        }, {
            key: "showOrQueueOverlay",
            value: function(t, e) {
                var n = this,
                    r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        shouldSuspendPlayer: !0
                    };
                return this._activeOverlayConfig && "modal" === this._activeOverlayConfig.type ? new Promise((function(i) {
                    n.bind("show", (function(e) {
                        if (e === t) return i(), n.unbind
                    })), n.overlaysQueue.push([t, e, r])
                })) : this.showOverlay(t, e, r)
            }
        }, {
            key: "cancelOverlay",
            value: function(t) {
                var e = this,
                    n = this.impl._overlays[t];
                return n ? (this.overlaysQueue = this.overlaysQueue.filter((function(e) {
                    return e[0] !== t
                })), this._activeOverlayConfig && this._activeOverlayName !== t && "modal" === this._activeOverlayConfig.type ? Promise.resolve() : this.getControlFromConfigType(n.type).then((function(r) {
                    if (e._activeOverlayName = null, e._activeOverlayConfig = null, e.overlaysQueue.length > 0) {
                        var i = c(e.overlaysQueue.pop(), 3),
                            o = i[0],
                            a = i[1],
                            l = i[2];
                        e.showOverlay(o, a, l).then((function() {
                            a.type !== n.type && e.hideControl(n, r, t), e.trigger("hide", t)
                        }))
                    } else e.hideControl(n, r, t), e.trigger("hide", t), e.impl.publicApi.unsuspend()
                }))) : Promise.resolve()
            }
        }, {
            key: "hideControl",
            value: function(t, e, n) {
                "annotation" === t.type ? e.hide({
                    name: n
                }) : e.hide()
            }
        }, {
            key: "showOverlay",
            value: function(t, e) {
                var n = this,
                    i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                        shouldSuspendPlayer: !0
                    };
                return this._activeOverlayName = t, this._activeOverlayConfig = e, "modal" === e.type && i.shouldSuspendPlayer && this.impl.publicApi.suspend(), this.getControlFromConfigType(e.type).then((function(i) {
                    var o = "annotation" === e.type ? {
                            name: t
                        } : {},
                        a = i.mountConfig(e, o);
                    return (a && a.then && a.catch ? a : Promise.resolve()).then((function() {
                        (0, r.maybeLoadAndSetupEmbedLinksThrottled)(n.rootElem), n.trigger("show", t)
                    }))
                })).catch((function() {
                    "modal" === e.type && n.impl.publicApi.unsuspend()
                }))
            }
        }, {
            key: "getConfig",
            value: function(t) {
                return t.mount ? t : o(o({}, t), {}, {
                    mount: function(t) {
                        this.rootElem = t
                    }
                })
            }
        }, {
            key: "getControlFromConfigType",
            value: function(t) {
                return "annotation" === t ? this.impl.whenControlMounted("annotationOverlay") : "transcript" === t ? this.impl.whenControlMounted("transcript") : this.impl.whenControlMounted("modalOverlay")
            }
        }, {
            key: "undefineOverlay",
            value: function(t) {
                this.impl._overlays[t] && delete this.impl._overlays[t]
            }
        }], a && s(i.prototype, a), l && s(i, l), Object.defineProperty(i, "prototype", {
            writable: !1
        }), i;
        var i, a, l
    }(n.PlayerBehavior);
    (0, e.bindify)(v.prototype), v.handle = "overlays"
})();
var __webpack_exports__OverlaysBehavior = __webpack_exports__.OverlaysBehavior;
export {
    __webpack_exports__OverlaysBehavior as OverlaysBehavior
};
//# sourceMappingURL=OverlaysBehavior.js.map