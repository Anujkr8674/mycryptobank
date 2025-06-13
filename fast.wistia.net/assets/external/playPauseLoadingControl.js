/*! For license information please see playPauseLoadingControl.js.LICENSE.txt */
var __webpack_modules__ = {
        2: (t, e, n) => {
            n.d(e, {
                Component: () => E,
                h: () => b,
                render: () => V
            });
            var r, i, o, a, s, c, l, u, f, h, p, d = {},
                v = [],
                _ = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                g = Array.isArray;

            function m(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function y(t) {
                t && t.parentNode && t.parentNode.removeChild(t)
            }

            function b(t, e, n) {
                var i, o, a, s = {};
                for (a in e) "key" == a ? i = e[a] : "ref" == a ? o = e[a] : s[a] = e[a];
                if (arguments.length > 2 && (s.children = arguments.length > 3 ? r.call(arguments, 2) : n), "function" == typeof t && null != t.defaultProps)
                    for (a in t.defaultProps) null == s[a] && (s[a] = t.defaultProps[a]);
                return w(t, s, i, o, null)
            }

            function w(t, e, n, r, a) {
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

            function T(t) {
                return t.children
            }

            function E(t, e) {
                this.props = t, this.context = e
            }

            function S(t, e) {
                if (null == e) return t.__ ? S(t.__, t.__i + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? S(t) : null
            }

            function W(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return W(t)
                }
            }

            function P(t) {
                (!t.__d && (t.__d = !0) && a.push(t) && !k.__r++ || s != i.debounceRendering) && ((s = i.debounceRendering) || c)(k)
            }

            function k() {
                for (var t, e, n, r, o, s, c, u = 1; a.length;) a.length > u && a.sort(l), t = a.shift(), u = a.length, t.__d && (n = void 0, o = (r = (e = t).__v).__e, s = [], c = [], e.__P && ((n = m({}, r)).__v = r.__v + 1, i.vnode && i.vnode(n), D(e.__P, n, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, s, null == o ? S(r) : o, !!(32 & r.__u), c), n.__v = r.__v, n.__.__k[n.__i] = n, N(s, n, c), n.__e != o && W(n)));
                k.__r = 0
            }

            function O(t, e, n, r, i, o, a, s, c, l, u) {
                var f, h, p, _, g, m, y = r && r.__k || v,
                    b = e.length;
                for (c = L(n, e, y, c, b), f = 0; f < b; f++) null != (p = n.__k[f]) && (h = -1 == p.__i ? d : y[p.__i] || d, p.__i = f, m = D(t, p, h, i, o, a, s, c, l, u), _ = p.__e, p.ref && h.ref != p.ref && (h.ref && R(h.ref, null, p), u.push(p.ref, p.__c || _, p)), null == g && null != _ && (g = _), 4 & p.__u || h.__k === p.__k ? c = x(p, c, t) : "function" == typeof p.type && void 0 !== m ? c = m : _ && (c = _.nextSibling), p.__u &= -7);
                return n.__e = g, c
            }

            function L(t, e, n, r, i) {
                var o, a, s, c, l, u = n.length,
                    f = u,
                    h = 0;
                for (t.__k = new Array(i), o = 0; o < i; o++) null != (a = e[o]) && "boolean" != typeof a && "function" != typeof a ? (c = o + h, (a = t.__k[o] = "string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? w(null, a, null, null, null) : g(a) ? w(T, {
                    children: a
                }, null, null, null) : null == a.constructor && a.__b > 0 ? w(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = t, a.__b = t.__b + 1, s = null, -1 != (l = a.__i = j(a, n, c, f)) && (f--, (s = n[l]) && (s.__u |= 2)), null == s || null == s.__v ? (-1 == l && (i > u ? h-- : i < u && h++), "function" != typeof a.type && (a.__u |= 4)) : l != c && (l == c - 1 ? h-- : l == c + 1 ? h++ : (l > c ? h-- : h++, a.__u |= 4))) : t.__k[o] = null;
                if (f)
                    for (o = 0; o < u; o++) null != (s = n[o]) && !(2 & s.__u) && (s.__e == r && (r = S(s)), U(s, s));
                return r
            }

            function x(t, e, n) {
                var r, i;
                if ("function" == typeof t.type) {
                    for (r = t.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = t, e = x(r[i], e, n));
                    return e
                }
                t.__e != e && (e && t.type && !n.contains(e) && (e = S(t)), n.insertBefore(t.__e, e || null), e = t.__e);
                do {
                    e = e && e.nextSibling
                } while (null != e && 8 == e.nodeType);
                return e
            }

            function j(t, e, n, r) {
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

            function A(t, e, n) {
                "-" == e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || _.test(e) ? n : n + "px"
            }

            function C(t, e, n, r, i) {
                var o;
                t: if ("style" == e)
                    if ("string" == typeof n) t.style.cssText = n;
                    else {
                        if ("string" == typeof r && (t.style.cssText = r = ""), r)
                            for (e in r) n && e in n || A(t.style, e, "");
                        if (n)
                            for (e in n) r && n[e] == r[e] || A(t.style, e, n[e])
                    }
                else if ("o" == e[0] && "n" == e[1]) o = e != (e = e.replace(u, "$1")), e = e.toLowerCase() in t || "onFocusOut" == e || "onFocusIn" == e ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r ? n.u = r.u : (n.u = f, t.addEventListener(e, o ? p : h, o)) : t.removeEventListener(e, o ? p : h, o);
                else {
                    if ("http://www.w3.org/2000/svg" == i) e = e.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
                    else if ("width" != e && "height" != e && "href" != e && "list" != e && "form" != e && "tabIndex" != e && "download" != e && "rowSpan" != e && "colSpan" != e && "role" != e && "popover" != e && e in t) try {
                        t[e] = null == n ? "" : n;
                        break t
                    } catch (t) {}
                    "function" == typeof n || (null == n || !1 === n && "-" != e[4] ? t.removeAttribute(e) : t.setAttribute(e, "popover" == e && 1 == n ? "" : n))
                }
            }

            function M(t) {
                return function(e) {
                    if (this.l) {
                        var n = this.l[e.type + t];
                        if (null == e.t) e.t = f++;
                        else if (e.t < n.u) return;
                        return n(i.event ? i.event(e) : e)
                    }
                }
            }

            function D(t, e, n, r, o, a, s, c, l, u) {
                var f, h, p, d, v, _, b, w, S, W, P, k, L, x, j, A, C, M = e.type;
                if (null != e.constructor) return null;
                128 & n.__u && (l = !!(32 & n.__u), a = [c = e.__e = n.__e]), (f = i.__b) && f(e);
                t: if ("function" == typeof M) try {
                    if (w = e.props, S = "prototype" in M && M.prototype.render, W = (f = M.contextType) && r[f.__c], P = f ? W ? W.props.value : f.__ : r, n.__c ? b = (h = e.__c = n.__c).__ = h.__E : (S ? e.__c = h = new M(w, P) : (e.__c = h = new E(w, P), h.constructor = M, h.render = F), W && W.sub(h), h.props = w, h.state || (h.state = {}), h.context = P, h.__n = r, p = h.__d = !0, h.__h = [], h._sb = []), S && null == h.__s && (h.__s = h.state), S && null != M.getDerivedStateFromProps && (h.__s == h.state && (h.__s = m({}, h.__s)), m(h.__s, M.getDerivedStateFromProps(w, h.__s))), d = h.props, v = h.state, h.__v = e, p) S && null == M.getDerivedStateFromProps && null != h.componentWillMount && h.componentWillMount(), S && null != h.componentDidMount && h.__h.push(h.componentDidMount);
                    else {
                        if (S && null == M.getDerivedStateFromProps && w !== d && null != h.componentWillReceiveProps && h.componentWillReceiveProps(w, P), !h.__e && null != h.shouldComponentUpdate && !1 === h.shouldComponentUpdate(w, h.__s, P) || e.__v == n.__v) {
                            for (e.__v != n.__v && (h.props = w, h.state = h.__s, h.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some((function(t) {
                                    t && (t.__ = e)
                                })), k = 0; k < h._sb.length; k++) h.__h.push(h._sb[k]);
                            h._sb = [], h.__h.length && s.push(h);
                            break t
                        }
                        null != h.componentWillUpdate && h.componentWillUpdate(w, h.__s, P), S && null != h.componentDidUpdate && h.__h.push((function() {
                            h.componentDidUpdate(d, v, _)
                        }))
                    }
                    if (h.context = P, h.props = w, h.__P = t, h.__e = !1, L = i.__r, x = 0, S) {
                        for (h.state = h.__s, h.__d = !1, L && L(e), f = h.render(h.props, h.state, h.context), j = 0; j < h._sb.length; j++) h.__h.push(h._sb[j]);
                        h._sb = []
                    } else
                        do {
                            h.__d = !1, L && L(e), f = h.render(h.props, h.state, h.context), h.state = h.__s
                        } while (h.__d && ++x < 25);
                    h.state = h.__s, null != h.getChildContext && (r = m(m({}, r), h.getChildContext())), S && !p && null != h.getSnapshotBeforeUpdate && (_ = h.getSnapshotBeforeUpdate(d, v)), A = f, null != f && f.type === T && null == f.key && (A = I(f.props.children)), c = O(t, g(A) ? A : [A], e, n, r, o, a, s, c, l, u), h.base = e.__e, e.__u &= -161, h.__h.length && s.push(h), b && (h.__E = h.__ = null)
                } catch (t) {
                    if (e.__v = null, l || null != a)
                        if (t.then) {
                            for (e.__u |= l ? 160 : 128; c && 8 == c.nodeType && c.nextSibling;) c = c.nextSibling;
                            a[a.indexOf(c)] = null, e.__e = c
                        } else
                            for (C = a.length; C--;) y(a[C]);
                    else e.__e = n.__e, e.__k = n.__k;
                    i.__e(t, e, n)
                } else null == a && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = B(n.__e, e, n, r, o, a, s, l, u);
                return (f = i.diffed) && f(e), 128 & e.__u ? void 0 : c
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
                return "object" != typeof t || null == t || t.__b && t.__b > 0 ? t : g(t) ? t.map(I) : m({}, t)
            }

            function B(t, e, n, o, a, s, c, l, u) {
                var f, h, p, v, _, m, b, w = n.props,
                    T = e.props,
                    E = e.type;
                if ("svg" == E ? a = "http://www.w3.org/2000/svg" : "math" == E ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), null != s)
                    for (f = 0; f < s.length; f++)
                        if ((_ = s[f]) && "setAttribute" in _ == !!E && (E ? _.localName == E : 3 == _.nodeType)) {
                            t = _, s[f] = null;
                            break
                        }
                if (null == t) {
                    if (null == E) return document.createTextNode(T);
                    t = document.createElementNS(a, E, T.is && T), l && (i.__m && i.__m(e, s), l = !1), s = null
                }
                if (null == E) w === T || l && t.data == T || (t.data = T);
                else {
                    if (s = s && r.call(t.childNodes), w = n.props || d, !l && null != s)
                        for (w = {}, f = 0; f < t.attributes.length; f++) w[(_ = t.attributes[f]).name] = _.value;
                    for (f in w)
                        if (_ = w[f], "children" == f);
                        else if ("dangerouslySetInnerHTML" == f) p = _;
                    else if (!(f in T)) {
                        if ("value" == f && "defaultValue" in T || "checked" == f && "defaultChecked" in T) continue;
                        C(t, f, null, _, a)
                    }
                    for (f in T) _ = T[f], "children" == f ? v = _ : "dangerouslySetInnerHTML" == f ? h = _ : "value" == f ? m = _ : "checked" == f ? b = _ : l && "function" != typeof _ || w[f] === _ || C(t, f, _, w[f], a);
                    if (h) l || p && (h.__html == p.__html || h.__html == t.innerHTML) || (t.innerHTML = h.__html), e.__k = [];
                    else if (p && (t.innerHTML = ""), O("template" == e.type ? t.content : t, g(v) ? v : [v], e, n, o, "foreignObject" == E ? "http://www.w3.org/1999/xhtml" : a, s, c, s ? s[0] : n.__k && S(n, 0), l, u), null != s)
                        for (f = s.length; f--;) y(s[f]);
                    l || (f = "value", "progress" == E && null == m ? t.removeAttribute("value") : null != m && (m !== t[f] || "progress" == E && !m || "option" == E && m != w[f]) && C(t, f, m, w[f], a), f = "checked", null != b && b != t[f] && C(t, f, b, w[f], a))
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

            function U(t, e, n) {
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
                    for (o = 0; o < r.length; o++) r[o] && U(r[o], e, n || "function" != typeof t.type);
                n || y(t.__e), t.__c = t.__ = t.__e = void 0
            }

            function F(t, e, n) {
                return this.constructor(t, n)
            }

            function V(t, e, n) {
                var o, a, s, c;
                e == document && (e = document.documentElement), i.__ && i.__(t, e), a = (o = "function" == typeof n) ? null : n && n.__k || e.__k, s = [], c = [], D(e, t = (!o && n || e).__k = b(T, null, [t]), a || d, d, e.namespaceURI, !o && n ? [n] : a ? null : e.firstChild ? r.call(e.childNodes) : null, s, !o && n ? n : a ? a.__e : e.firstChild, o, c), N(s, t, c)
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
            }, o = 0, E.prototype.setState = function(t, e) {
                var n;
                n = null != this.__s && this.__s != this.state ? this.__s : this.__s = m({}, this.state), "function" == typeof t && (t = t(m({}, n), this.props)), t && m(n, t), null != t && this.__v && (e && this._sb.push(e), P(this))
            }, E.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), P(this))
            }, E.prototype.render = T, a = [], c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, l = function(t, e) {
                return t.__v.__b - e.__v.__b
            }, k.__r = 0, u = /(PointerCapture)$|Capture$/i, f = 0, h = M(!1), p = M(!0)
        },
        3: (t, e, n) => {
            n.d(e, {
                addInlineCss: () => u,
                elemBind: () => _,
                elemRemove: () => f,
                elemStyle: () => h,
                elemUnbind: () => g
            });
            var r, i = n(4),
                o = (n(6), n(8), n(9)),
                a = n(12),
                s = (n(19), n(20), n(26)),
                c = n(16),
                l = (c.Wistia, (0, o.cachedDetect)()),
                u = function(t, e) {
                    var n = t || document.body || document.head,
                        r = document.createElement("style");
                    return r.id = (0, s.seqId)("wistia_", "_style"), r.setAttribute("type", "text/css"), r.className = "wistia_injected_style", n.appendChild(r, n.nextSibling), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e)), r
                },
                f = function(t) {
                    var e;
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList)
                        for (var n = 0; n < t.length; n++) f(t[n]);
                    else null == t || 1 !== t.nodeType && 3 !== t.nodeType || !(e = t.parentNode) || (e.removeChild(t), t = null)
                },
                h = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    if ((0, i.isArray)(t) || window.NodeList && t instanceof NodeList) {
                        for (var o = [], s = 0; s < t.length; s++) {
                            var c = t[s];
                            1 === c.nodeType && o.push(h.apply(void 0, [c].concat(n)))
                        }
                        return o
                    }
                    if (2 === n.length) {
                        var l = n[0],
                            u = n[1];
                        t.style[l] = u
                    } else if (1 === n.length)
                        if ("string" == typeof n[0]) {
                            var f = n[0];
                            try {
                                return t.currentStyle ? t.currentStyle[f] : window.getComputedStyle ? window.getComputedStyle(t, null).getPropertyValue(f) : null
                            } catch (t) {
                                a.wlog.notice(t)
                            }
                        } else {
                            var p = v(n[0]);
                            for (var d in p) {
                                var _ = p[d];
                                t.style[d] = _
                            }
                        }
                    else a.wlog.apply(void 0, ["Unexpected args", t].concat(n))
                },
                p = {
                    borderImage: !0,
                    mixBlendMode: !0,
                    transform: !0,
                    transition: !0,
                    transitionDuration: !0
                },
                d = ["webkit", "moz", "o", "ms"],
                v = function(t) {
                    if (l.chrome) return t;
                    var e = {};
                    for (var n in t) {
                        var r = t[n];
                        if (e[n] = r, p[n])
                            for (var i = d, o = 0; o < i.length; o++) {
                                var a = i[o] + n.charAt(0).toUpperCase() + n.slice(1);
                                n[a] || (e[a] = r)
                            }
                    }
                    return e
                },
                _ = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = function(r) {
                            (r = r || window.event).pageX || r.pageY || !r.clientX && !r.clientY || (r.pageX = r.clientX + b(), r.pageY = r.clientY + y()), r.preventDefault || (r.preventDefault = function() {
                                r.returnValue = !1
                            }), r.stopPropagation || (r.stopPropagation = function() {
                                r.cancelBubble = !0
                            }), null == r.which && (r.which = null != r.charCode ? r.charCode : r.keyCode), null == r.which && null != r.button && (1 & r.button ? r.which = 1 : 2 & r.button ? r.which = 3 : 4 & r.button ? r.which = 2 : r.which = 0), r.target || r.srcElement && (r.target = r.srcElement), r.target && 3 === r.target.nodeType && (r.target = r.target.parentNode);
                            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                            var s = n.apply(r.target, [r].concat(o));
                            return s === g && g(t, e, n), s
                        };
                    c.Wistia._elemBind = c.Wistia._elemBind || {};
                    var o = m(t, e, n);
                    return c.Wistia._elemBind[o] = i, i.elem = t, i.event = e, t.addEventListener(e, i, r),
                        function() {
                            g(t, e, n, r)
                        }
                },
                g = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (null != t && null != t._wistiaElemId && null != n && n._wistiaBindId) {
                        var i = m(t, e, n),
                            o = c.Wistia._elemBind[i];
                        return o && (t.removeEventListener(e, o, r), o.elem = null, o.event = null), delete c.Wistia._elemBind[i]
                    }
                },
                m = function(t, e, n) {
                    return t._wistiaElemId = t._wistiaElemId || (0, s.seqId)("wistia_elem_"), n._wistiaBindId = n._wistiaBindId || (0, s.seqId)("wistia_bind_"), "".concat(t._wistiaElemId, ".").concat(e, ".").concat(n._wistiaBindId)
                },
                y = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollTop || e && e.scrollTop || 0;
                    e && (e.scrollTop = t), n && (n.scrollTop = t)
                },
                b = function(t) {
                    var e = document.body,
                        n = document.documentElement;
                    if (null == t) return n && n.scrollLeft || e && e.scrollLeft || 0;
                    e && (e.scrollLeft = t), n && (n.scrollLeft = t)
                };
            ["auxclick", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mouseup", "reset", "submit", "touchend", "touchstart"].forEach((function(t) {
                _(document, t, (function(t) {
                    r = t, Date.now(), setTimeout((function() {
                        r === t && (r = void 0)
                    }), 0)
                }), !l.passiveSupported || {
                    capture: !0,
                    passive: !0
                })
            }))
        },
        4: (t, e, n) => {
            n.d(e, {
                cast: () => v,
                clone: () => l,
                eachLeaf: () => k,
                getDeep: () => u,
                isArray: () => y,
                isEmpty: () => W,
                isObject: () => w,
                merge: () => o,
                setAndPreserveUndefined: () => h,
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
                    if (y(e)) {
                        y(t) || (t = []);
                        for (var o = 0; o < e.length; o++) {
                            var l = e[o];
                            null == t[o] && null != l && (y(l) ? t[o] = [] : w(l) && (t[o] = {}));
                            var u = a(t[o], l, n);
                            i(e, o, u) ? delete t[o] : t[o] = u
                        }
                        return n(t)
                    }
                    if (w(e)) {
                        for (var f in e)
                            if (r(e, f) && (r(t, f) || null == t[f])) {
                                var h = e[f];
                                y(h) ? (y(t[f]) || (t[f] = []), a(t[f], h, n), t[f] = n(t[f])) : w(h) ? (w(t[f]) || (t[f] = {}), a(t[f], h, n), t[f] = n(t[f])) : null == t ? (t = {}, i(e, f, h) || (t[f] = n(h))) : i(e, f, h) ? delete t[f] : t[f] = n(h)
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
                l = function(t, e) {
                    return y(t) ? a([], t, e) : a({}, t, e)
                },
                u = function(t, e, n) {
                    e = "string" == typeof e ? e.split(".") : i.call(e);
                    for (var o, a = t; null != t && e.length;) {
                        var s = e.shift();
                        void 0 !== t[s] && (w(t[s]) || y(t[s])) || !n || (0 === s ? (t = a[o] = [])[s] = {} : t[s] = {}), a = t, o = s, t = r(t, s) ? t[s] : void 0
                    }
                    return t
                },
                f = function(t, e, n) {
                    return p(t, e, n, !0)
                },
                h = function(t, e, n) {
                    return p(t, e, n, !1)
                },
                p = function(t, e, n) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = (e = "string" == typeof e ? e.split(".") : i.call(e)).pop();
                    null != (t = u(t, e, !0)) && (w(t) || y(t)) && null != o && (r && null == n ? delete t[o] : t[o] = n)
                },
                d = function(t, e) {
                    return f(t, e)
                },
                v = function(t) {
                    return null == t ? t : w(t) || y(t) ? g(t) : _("".concat(t), t)
                },
                _ = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                    return /^-?[1-9]\d*?$/.test(t) ? parseInt(t, 10) : "0" === t || "-0" === t ? 0 : /^-?\d*\.\d+$/.test(t) ? parseFloat(t) : !!/^true$/i.test(t) || !/^false$/i.test(t) && e
                },
                g = function(t) {
                    return a(t, t, (function(t) {
                        return "string" == typeof t ? _(t) : t
                    }), (function() {
                        return !1
                    }))
                },
                m = /^\s*function Array()/,
                y = function(t) {
                    return null != t && t.push && m.test(t.constructor)
                },
                b = /^\s*function Object()/,
                w = function(t) {
                    return null != t && "object" == typeof t && b.test(t.constructor)
                },
                T = /^\s*function RegExp()/,
                E = /^string|number|boolean|function$/i,
                S = function(t) {
                    return null != t && (E.test(typeof t) || function(t) {
                        return null != t && T.test(t.constructor)
                    }(t))
                },
                W = function(t) {
                    return null == t || (!(!y(t) || t.length) || !!w(t) && !Object.keys(t).length)
                },
                P = function(t, e, n, o, a) {
                    if (null == n && (n = []), S(t)) e(t, n, o, a);
                    else if (w(t) || y(t)) {
                        for (var s in e(t, n, o, a), t)
                            if (r(t, s)) {
                                var c = i.call(n);
                                c.push(s), P(t[s], e, c, t, s)
                            }
                    } else e(t, n, o, a)
                },
                k = function(t, e) {
                    P(t, (function(t, n, r, i) {
                        y(t) || w(t) || e(t, n, r, i)
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
                cachedDetect: () => R
            });
            var r, i = n(10),
                o = n(11),
                a = navigator.userAgent,
                s = null,
                c = /(webkit)[ /]([^\s]+)/i,
                l = /OPR\/([^\s]+)/i,
                u = /(edge)\/(\d+(?:\.\d+)?)/i,
                f = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
                h = /(android) ([^;]+)/i,
                p = /(iphone)/i,
                d = /(Windows Phone OS (\d+(?:\.\d+)?))/,
                v = /OS (\d+)_(\d+)/i,
                _ = /(firefox)/i,
                g = /Mobile VR/i,
                m = /Version\/([^\s]+)/i,
                y = function() {
                    return (w()[1] || "webkit").toLowerCase()
                },
                b = function() {
                    return w()[2]
                },
                w = function() {
                    var t;
                    return (t = a.match(u)) || (t = a.match(c)) || (t = a.match(l)) ? t : t ? (null != document.documentMode && (t[2] = document.documentMode), t) : (t = a.match(f)) || []
                },
                T = function() {
                    var t = a.match(h);
                    return null != t && {
                        version: t[2]
                    }
                },
                E = function() {
                    return p.test(a)
                },
                S = function() {
                    return x() > 0 || T() || P()
                },
                W = function() {
                    try {
                        var t = matchMedia("(hover:hover)");
                        if ("not all" !== t.media) return t.matches
                    } catch (t) {}
                    return !S()
                },
                P = function() {
                    return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
                },
                k = function() {
                    return c.test(a) && !/chrome/i.test(a) && !P() && !E()
                },
                O = function() {
                    return !(!/Chrome/.test(a) || !/Google Inc/.test(navigator.vendor)) && {
                        version: L()
                    }
                },
                L = function() {
                    var t = a.match(/\bChrome\/([^\s]+)/);
                    return t && t[1]
                },
                x = function() {
                    var t = a.match(v),
                        e = a.match(m);
                    return null != t ? parseFloat("".concat(t[1], ".").concat(t[2])) : null != e && e[1] && P() ? parseFloat(e[1]) : 0
                },
                j = function() {
                    return u.test(a)
                },
                A = function() {
                    return _.test(a)
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
                M = function() {
                    try {
                        return "localStorage" in i.root && null != i.root.localStorage
                    } catch (t) {
                        return !1
                    }
                },
                D = ["WebKit", "Moz", "O", "Ms", ""],
                N = function() {
                    for (var t = 0; t < D.length; t++) {
                        var e = "".concat(D[t], "MutationObserver");
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
                    var t = O(),
                        e = A(),
                        n = j(),
                        r = l.test(a),
                        i = t && b() >= 32,
                        o = t && b() >= 75 && T(),
                        s = e && b() >= 65,
                        c = e && b() >= 67 && T(),
                        u = n && b() >= 18,
                        f = r && b() >= 19;
                    return i || o || s || c || u || f
                },
                R = function() {
                    return s || (s = U())
                },
                U = function() {
                    var t, e, n, r = {
                        browser: {
                            version: b()
                        },
                        edge: j(),
                        firefox: A(),
                        gearvr: g.test(a),
                        hdr: !(null === (e = (n = window).matchMedia) || void 0 === e || !e.call(n, "(dynamic-range: high)").matches) || !!(screen.colorDepth && screen.colorDepth >= 30),
                        android: T(),
                        oldandroid: T() && parseFloat(T().version) < 4.1,
                        iphone: E(),
                        ipad: P(),
                        safari: k(),
                        chrome: O(),
                        winphone: {
                            version: d.test(a)[2]
                        },
                        ios: {
                            version: x()
                        },
                        windows: /win/i.test(navigator.platform),
                        mac: /mac/i.test(navigator.platform),
                        retina: null != i.root.devicePixelRatio && i.root.devicePixelRatio > 1,
                        hoverIsNatural: W(),
                        touchScreen: S(),
                        video: C(),
                        mediaSource: i.root.MediaSource && i.root.MediaSource.isTypeSupported("".concat('video/mp4; codecs="avc1.42E01E', ', mp4a.40.2"')),
                        nativeHls: (E() || P() || k()) && C().nativeHls,
                        localstorage: M(),
                        fullscreenEnabled: document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
                        vulcanV2Support: (t = /webkit|mozilla|edge/.test(y()), !!(E() || P() || T()) || Boolean(t && C().h264 && Object.defineProperties)),
                        mutationObserver: N(),
                        callingPlayRequiresEventContext: x() > 0 || T() || k(),
                        passiveSupported: I(),
                        webp: B(),
                        performanceMeasure: (0, o.hasPerformanceMeasureSupport)()
                    };
                    return r.browser[y()] = !0, r
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
                wlog: () => _
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
                l = function(t) {
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
                u = l.prototype;
            u.reset = function() {
                this.ctx.level = 0, this.ctx.grep = null, this.ctx.grepv = null, this.ctx.first1000LogLines = [], this.ctx.last1000LogLines = [], this.ctx.initializedAt = (new Date).getTime()
            }, u.setLevel = function(t) {
                var e = this.logFunc(3);
                null != s[t] ? (this.ctx.level = s[t], e('Log level set to "'.concat(t, '" (').concat(s[t], ")"))) : e('Unknown log level "'.concat(t, '"'))
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
                        s = !this.ctx.grepv || !o.match(this.ctx.grepv);
                    e = a && s
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
                    var l, u = this.logFunc(t);
                    1 === e.length && (l = e[0]) instanceof Error ? (u(l.message), l.stack && u(l.stack)) : u.apply(void 0, o(e))
                }
            };
            var f = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.error.apply(console, e)
                },
                h = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.warn.apply(console, e)
                },
                p = function() {
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
            u.logFunc = function(t) {
                return null == t && (t = this.level), console ? (0 === t ? e = f : 1 === t ? e = h : 3 === t ? e = p : 4 === t && (e = d), e || (e = v), "function" != typeof e && (this.noConsoleLog = !0, e = c), e) : c;
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
            var _ = new l(i.Wistia.wlogCtx)
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
                        var l = s(c);
                        return void 0 === i.Wistia.EventShepherdManager[l] && (i.Wistia.EventShepherdManager[l] = new o.EventShepherd(c)), i.Wistia.EventShepherdManager[l].addListener(t, c, e),
                            function() {
                                i.Wistia.EventShepherdManager[l].removeListener(t, c, e)
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
                bind: () => l,
                bindNamed: () => v,
                trigger: () => h,
                unbind: () => u,
                unbindAllInNamespace: () => g,
                unbindNamed: () => _
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
            var s, c = Array.prototype.slice,
                l = function(t, e) {
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
                f = function(t, e) {
                    return this.unbind(t, e), this.bind(t, e), {
                        event: t,
                        fn: e
                    }
                },
                h = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return this._bindings && null != this._bindings.all && p.apply(this, ["all", t].concat(n)), p.apply(this, [t].concat(n))
                },
                p = function(t) {
                    if (!this._bindings) return this;
                    if (!this._bindings[t]) return this;
                    for (var e, n = c.call(arguments, 1), i = o(this._bindings[t]), a = 0; a < i.length; a++) {
                        var s = i[a];
                        try {
                            s.apply(this, n) === this.unbind && (null == e && (e = []), e.push({
                                event: t,
                                fn: s
                            }))
                        } catch (t) {
                            if (this._throwTriggerErrors) throw t;
                            r.Wistia.error && r.Wistia.error(t)
                        }
                    }
                    if (e)
                        for (var l = 0; l < e.length; l++) {
                            var u = e[l];
                            this.unbind(u.event, u.fn)
                        }
                    return this
                },
                d = function(t, e) {
                    null == t._namedBindings && (t._namedBindings = {}), null == t._namedBindings[e] && (t._namedBindings[e] = {})
                },
                v = function(t, e, n, r) {
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
                _ = function(t, e) {
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
                    return delete o[t][e], m(o[t]) && delete o[t], this
                },
                g = function(t) {
                    var e = this._namedBindings && this._namedBindings[t];
                    if (null == e) return this;
                    for (var n in e) i(e, n) && this.unbindNamed(t, n)
                },
                m = function(t) {
                    for (var e in t)
                        if (i(t, e)) return !1;
                    return !0
                };
            (s = function() {}.prototype).bind = l, s.unbind = u, s.on = l, s.off = u, s.rebind = f, s.trigger = h, s.bindNamed = v, s.unbindNamed = _, s.unbindAllInNamespace = g
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
                        l = s.clientTop || r.clientTop || 0,
                        u = s.clientLeft || r.clientLeft || 0;
                    e = o && null != o.pageYOffset ? o.pageYOffset : i() && s && null != s.scrollTop ? s.scrollTop : r.scrollTop, n = o && null != o.pageXOffset ? o.pageXOffset : i() && s && null != s.scrollLeft ? s.scrollLeft : r.scrollLeft;
                    var f = a(t);
                    return {
                        height: c.height * f,
                        top: c.top * f + e - l,
                        left: c.left * f + n - u,
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
                l = function(t) {
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
                u = function() {
                    for (var t, e = arguments.length, n = new Array(e), i = 0; i < e; i++) n[i] = arguments[i];
                    t = n[0] instanceof Array ? n[0] : n, t = f(t);
                    var o = [],
                        c = [],
                        u = [];
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
                        e.promise = n, u.push(e.promise), t.async ? o.push(e) : c.push(e)
                    })), c.reduce((function(t, e) {
                        if (e.fn) try {
                            e.fn()
                        } catch (t) {
                            r.wlog.error(t)
                        } finally {
                            e.resolve()
                        } else e.src && l(e.src, null, e).then(e.resolve);
                        return t.then(e.promise)
                    }), Promise.resolve()), setTimeout((function() {
                        o.forEach((function(t) {
                            if (t.fn) try {
                                t.fn()
                            } catch (t) {
                                r.wlog.error(t)
                            } finally {
                                t.resolve()
                            } else t.src && l(t.src, null, t).then(t.resolve)
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
                            s = !1,
                            c = function() {
                                o.onerror = o.onreadystatechange = o.onload = null, clearTimeout(a), clearTimeout(u), a = setTimeout((function() {
                                    o && o.parentNode && o.parentNode.removeChild(o)
                                }), 500)
                            },
                            l = function() {
                                var t = o.readyState;
                                s || t && !/loaded|complete/.test(t) || (s = !0, setTimeout((function() {
                                    r(), c()
                                }), 1))
                            },
                            u = setTimeout((function() {
                                s = !0, c(), i(new Error("timeout"))
                            }), e);
                        o.onerror = function(t) {
                            s = !0, c(), i(t)
                        }, o.onreadystatechange = l, o.onload = l, (document.body || document.head).appendChild(o)
                    }))
                }
        },
        23: (t, e, n) => {
            n.d(e, {
                TAGGED_VERSION: () => s,
                eV1HostWithPort: () => h,
                eV1Protocol: () => p,
                metricsHost: () => d
            });
            var r = n(10),
                i = n(24),
                o = n(25),
                a = ((0, o.appHostname)("app"), (0, o.appHostname)("fast-protected"), (0, o.appHostname)("fast")),
                s = "",
                c = ("undefined" != typeof window && r.root === window && r.root.location && r.root.location.protocol, function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : void 0;
                    return t || a
                }),
                l = function() {
                    return "fast.".concat("wistia.net")
                },
                u = function() {
                    for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.src) {
                            var r = new i.Url(n.src),
                                o = /\/assets\/external\/E-v1?\.js$/.test(r.rawPath),
                                a = r.host === c() || r.host === l() || "fast-canary.wistia.net" === r.host,
                                s = "https:" === location.protocol && "https:" === r.protocol,
                                u = "" === r.protocol || null == r.protocol,
                                f = s || u || "http:" === location.protocol,
                                h = !n.readyState || /loaded|complete/.test(n.readyState);
                            if (o && a && f && h) return r
                        }
                    }
                    return new i.Url("".concat((0, i.proto)(), "//").concat(l(), "/E-v1.js"))
                }(),
                f = function() {
                    return u.host
                },
                h = function() {
                    return u.port ? "".concat(f(), ":").concat(u.port) : f()
                },
                p = function() {
                    return u.protocol
                },
                d = function() {
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
                s = function(t) {
                    for (var e = t[0], n = 1; n < t.length; n++) e += "[".concat(t[n], "]");
                    return e
                },
                c = function(t) {
                    return t.match(/([\w\-_]+)/g)
                },
                l = ["protocol", "host", "port", "params", "path"],
                u = function(t) {
                    var e = this;
                    e.params = {}, e.path = [], e.host = "", "object" == typeof t ? e.fromOptions(t) : t && e.fromRaw(t)
                },
                f = u.prototype;
            f.fromOptions = function(t) {
                for (var e = 0; e < l.length; e++) {
                    var n = l[e];
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
                                l = t[1];
                            try {
                                o = c(decodeURIComponent(o)) || ""
                            } catch (t) {
                                setTimeout((function() {
                                    i.wlog.notice(t)
                                }), 50), o = ""
                            }(0, r.cast)(o);
                            var u = (0, r.getDeep)(e, o);
                            if (null != u)
                                if ((0, r.isArray)(u)) u.push(a(l));
                                else {
                                    var f = [u];
                                    f.push(a(l)), (0, r.setAndPreserveUndefined)(e, o, f)
                                }
                            else(0, r.setAndPreserveUndefined)(e, o, a(l))
                        }, s = 0; s < n.length; s++) o();
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
                    l = void 0 !== c && c,
                    u = t.fillColor,
                    f = void 0 === u ? "#ffffff" : u;
                return {
                    x: "0px",
                    y: "0px",
                    viewBox: "0 0 ".concat(n, " ").concat(o),
                    "enable-background": "new 0 0 ".concat(n, " ").concat(o),
                    "aria-hidden": "".concat(!!l),
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
            var l;
            a.Wistia._visitorTrackingDomain || (a.Wistia._visitorTrackingDomain = location.hostname || ""), a.Wistia._visitorTracking || (null != (l = (0, i.getWistiaLocalStorage)().visitorTrackingEnabled) && ((0, i.updateWistiaLocalStorage)((function(t) {
                return delete t.visitorTrackingEnabled
            })), a.Wistia._visitorTracking = {}, a.Wistia._visitorTracking[a.Wistia._visitorTrackingDomain] = {
                isEnabled: l,
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
                removeLocalStorage: () => l,
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
                l = function(t) {
                    if (a()) try {
                        localStorage.removeItem(t)
                    } catch (t) {
                        i(t)
                    } else s()[t] = {}
                },
                u = function(t, e) {
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
                    return u(t, n)
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
        45: (t, e, n) => {
            n.d(e, {
                getTranslation: () => h
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
                    }, n && l(t, n)
                },
                l = function(t, e) {
                    if (null == o[t]) throw new Error("Must define a language with code ".concat(t, " before defining its translations."));
                    var n = a[t];
                    n ? (0, r.merge)(n, e) : a[t] = (0, r.clone)(e)
                },
                u = i.Wistia.cachedDecodings = i.Wistia.cachedDecodings || {},
                f = function(t) {
                    return s || (s = document.createElement("textarea")), null != u[t] ? u[t] : (s.innerHTML = t, u[t] = s.value, s.value)
                },
                h = function(t, e) {
                    var n;
                    return n = a[t] && a[t][e] ? a[t][e] : a["en-US"][e], f(function(t) {
                        return null == t ? "?" : t
                    }(n))
                };
            c("en-US", "English"), l("en-US", {
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
                    l = a.toStringTag || "@@toStringTag";

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
                    var i = e && e.prototype instanceof m ? e : m,
                        a = Object.create(i.prototype),
                        s = new j(r || []);
                    return o(a, "_invoke", {
                        value: k(t, n, s)
                    }), a
                }

                function h(t, e, n) {
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
                var p = "suspendedStart",
                    d = "suspendedYield",
                    v = "executing",
                    _ = "completed",
                    g = {};

                function m() {}

                function y() {}

                function b() {}
                var w = {};
                u(w, s, (function() {
                    return this
                }));
                var T = Object.getPrototypeOf,
                    E = T && T(T(A([])));
                E && E !== n && r.call(E, s) && (w = E);
                var S = b.prototype = m.prototype = Object.create(w);

                function W(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        u(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function P(t, e) {
                    function n(i, o, a, s) {
                        var c = h(t[i], t, o);
                        if ("throw" !== c.type) {
                            var l = c.arg,
                                u = l.value;
                            return u && "object" == typeof u && r.call(u, "__await") ? e.resolve(u.__await).then((function(t) {
                                n("next", t, a, s)
                            }), (function(t) {
                                n("throw", t, a, s)
                            })) : e.resolve(u).then((function(t) {
                                l.value = t, a(l)
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
                    var i = p;
                    return function(o, a) {
                        if (i === v) throw Error("Generator is already running");
                        if (i === _) {
                            if ("throw" === o) throw a;
                            return {
                                value: t,
                                done: !0
                            }
                        }
                        for (r.method = o, r.arg = a;;) {
                            var s = r.delegate;
                            if (s) {
                                var c = O(s, r);
                                if (c) {
                                    if (c === g) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (i === p) throw i = _, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            i = v;
                            var l = h(e, n, r);
                            if ("normal" === l.type) {
                                if (i = r.done ? _ : d, l.arg === g) continue;
                                return {
                                    value: l.arg,
                                    done: r.done
                                }
                            }
                            "throw" === l.type && (i = _, r.method = "throw", r.arg = l.arg)
                        }
                    }
                }

                function O(e, n) {
                    var r = n.method,
                        i = e.iterator[r];
                    if (i === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, O(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), g;
                    var o = h(i, e.iterator, n.arg);
                    if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g;
                    var a = o.arg;
                    return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                }

                function L(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function x(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(L, this), this.reset(!0)
                }

                function A(e) {
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
                return y.prototype = b, o(S, "constructor", {
                    value: b,
                    configurable: !0
                }), o(b, "constructor", {
                    value: y,
                    configurable: !0
                }), y.displayName = u(b, l, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === y || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, u(t, l, "GeneratorFunction")), t.prototype = Object.create(S), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, W(P.prototype), u(P.prototype, c, (function() {
                    return this
                })), e.AsyncIterator = P, e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new P(f(t, n, r, i), o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, W(S), u(S, l, "Generator"), u(S, s, (function() {
                    return this
                })), u(S, "toString", (function() {
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
                }, e.values = A, j.prototype = {
                    constructor: j,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(x), !e)
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
                                    l = r.call(a, "finallyLoc");
                                if (c && l) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0);
                                    if (this.prev < a.finallyLoc) return i(a.finallyLoc)
                                } else if (c) {
                                    if (this.prev < a.catchLoc) return i(a.catchLoc, !0)
                                } else {
                                    if (!l) throw Error("try statement without catch or finally");
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
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), x(n), g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    x(n)
                                }
                                return i
                            }
                        }
                        throw Error("illegal catch attempt")
                    },
                    delegateYield: function(e, n, r) {
                        return this.delegate = {
                            iterator: A(e),
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
                        }(t), c(t), u(t), f(t)
                }),
                c = function(t) {
                    t.rootElem && (0, i.elemRemove)(Array.prototype.slice.call(t.rootElem.childNodes))
                },
                l = function(t) {
                    var e = t[0],
                        n = t[1];
                    e && n && (0, o.render)((0, o.h)("nothing", null), e)
                },
                u = function(t) {
                    var e = t.reactMounts;
                    if (e)
                        if (e instanceof Array) l(e);
                        else
                            for (var n in e) a(e, n) && e[n] && l(e[n])
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
                        var l = setTimeout((function() {
                            delete s[t], e()
                        }), n);
                        return s[t] = l, l
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
                        for (var l in e) {
                            var u = e[l];
                            !l.indexOf || 0 !== l.indexOf(t) || l.length !== t.length && "." !== l.charAt(t.length) || (clearTimeout(u), delete e[l])
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
                getControlDefinitions: () => o
            });
            var r = n(73),
                i = n(16);
            null == i.Wistia._controlDefinitions && (i.Wistia._controlDefinitions = {});
            var o = function() {
                return i.Wistia._controlDefinitions || {}
            };
            i.Wistia.defineControl = function(t) {
                var e;
                (0, r.countMetric)("player/custom-control-definition", 1, {
                    name: t.handle,
                    location: location.origin + location.pathname
                }), null != (e = t).handle ? null == i.Wistia._controlDefinitions[e.handle] && (i.Wistia._controlDefinitions[e.handle] = e, i.Wistia.trigger && i.Wistia.trigger("controldefined", e)) : console.error("Please specify a handle property for control", e)
            }
        },
        73: (t, e, n) => {
            n.d(e, {
                countMetric: () => l
            });
            var r = n(5),
                i = n(8),
                o = n(38),
                a = n(23),
                s = n(16);
            null == s.Wistia._simpleMetricsCache && (s.Wistia._simpleMetricsCache = {}), null == s.Wistia._simpleMetricsDebounceInterval && (s.Wistia._simpleMetricsDebounceInterval = 500);
            var c = s.Wistia._simpleMetricsCache,
                l = function(t) {
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
                    var a, l = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if ((0, o.isVisitorTrackingEnabled)()) try {
                        null == c.toMput && (c.toMput = []);
                        var f = (0, r.assign)({
                                type: t,
                                key: e,
                                value: null != n ? n : null
                            }, l),
                            h = JSON.stringify(f, (a = new WeakSet, function(t, e) {
                                if ("object" == typeof e && null !== e) {
                                    if (a.has(e)) return "[Circular]";
                                    a.add(e)
                                }
                                return e
                            }));
                        c.toMput.push(h), clearTimeout(s.Wistia._msendTimeout), s.Wistia._msendTimeout = setTimeout((function() {
                            (0, i.pageLoaded)((function() {
                                u.apply(undefined, c.toMput), c.toMput = []
                            }))
                        }), s.Wistia._simpleMetricsDebounceInterval)
                    } catch (t) {
                        console.error(t.message), console.error(t.stack)
                    }
                }
        },
        185: (t, e, n) => {
            n.d(e, {
                default: () => l
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
            const l = function() {
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
                controlMultiplierBasedOnVideo: () => u
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
                            l = !1;
                        try {
                            if (o = (n = n.call(t)).next, 0 === e) {
                                if (Object(n) !== n) return;
                                c = !1
                            } else
                                for (; !(c = (r = o.call(n)).done) && (s.push(r.value), s.length !== e); c = !0);
                        } catch (t) {
                            l = !0, i = t
                        } finally {
                            try {
                                if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                            } finally {
                                if (l) throw i
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
                l = function(t) {
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
                u = function(t, e) {
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
                            u = i[1];
                        if (r <= a) return r / a;
                        if (r > u) return r / u
                    } else {
                        var f = o(e || l(t), 2),
                            h = f[0],
                            p = f[1];
                        if (n <= h) return n / h;
                        if (n > p) return n / p
                    }
                    return 1
                }
        },
        214: (t, e, n) => {
            n.d(e, {
                RoundedSmallPlayButton: () => o
            });
            var r = n(2),
                i = n(30),
                o = function(t) {
                    var e = t.isPlaying,
                        n = t.svgStyle,
                        o = void 0 === n ? {} : n,
                        a = t.marginLeft,
                        s = void 0 === a ? 0 : a,
                        c = (0, i.standardSvgAttrs)({
                            width: 40,
                            height: 34,
                            ariaHidden: !0,
                            styleOverride: o
                        });
                    return (0, r.h)("div", {
                        style: {
                            width: "100%",
                            height: "100%",
                            marginLeft: null != s ? s : 0
                        }
                    }, (0, r.h)("svg", c, e ? (0, r.h)("path", {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M16.5 11C15.6716 11 15 11.6716 15 12.5V22.5C15 23.3284 15.6716 24 16.5 24H17.5C18.3284 24 19 23.3284 19 22.5V12.5C19 11.6716 18.3284 11 17.5 11H16.5ZM23.5 11C22.6716 11 22 11.6716 22 12.5V22.5C22 23.3284 22.6716 24 23.5 24H24.5C25.3284 24 26 23.3284 26 22.5V12.5C26 11.6716 25.3284 11 24.5 11H23.5Z",
                        fill: "white"
                    }) : (0, r.h)("path", {
                        d: "M24.888 16.1913C25.4371 16.5906 25.4371 17.4094 24.888 17.8087L16.5882 23.845C15.9272 24.3257 15 23.8535 15 23.0362V10.9638C15 10.1465 15.9272 9.67433 16.5882 10.155L24.888 16.1913Z",
                        fill: "white"
                    })))
                }
        },
        737: (t, e, n) => {
            n.d(e, {
                PlayPauseLoadingCircleControl: () => y
            });
            var r = n(2),
                i = n(191),
                o = n(9),
                a = n(185),
                s = n(738),
                c = n(739),
                l = n(45),
                u = n(214);

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, g(r.key), r)
                }
            }

            function h(t, e, n) {
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

            function v(t, e) {
                return v = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, v(t, e)
            }

            function _(t, e, n) {
                return (e = g(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function g(t) {
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
            var m = (0, o.cachedDetect)(),
                y = function(t) {
                    function e(t) {
                        var n;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), _(n = h(this, e, [t]), "onClick", (function() {
                            "playing" === n.video.state() ? n.video.pause() : n.video.play()
                        })), _(n, "renderButton", (function() {
                            var t = "playing" === n.video.state(),
                                e = n.scale(),
                                i = 1.05;
                            "".concat(45 * e * i, "px"), "".concat((t ? 51 : 55) * e * i, "px"), "".concat((t ? 51 : 45) * e * i, "px"), "".concat(45 * e * i, "px");
                            n.isLoading && n.video.setAriaLiveText("The video is loading..."), (0, r.render)((0, r.h)(s.default, {
                                ariaLabel: t ? n.translate("TITLE_WHEN_PLAYING") : n.translate("TITLE_WHEN_NOT_PLAYING"),
                                isVisible: n.isVisible(),
                                left: "50%",
                                onClick: n.onClick,
                                scale: e,
                                top: "50%"
                            }, n.isLoading && (0, r.h)(c.default, null), (0, r.h)(u.RoundedSmallPlayButton, {
                                isPlaying: t
                            })), n.rootElem), n.reactMounts = [n.rootElem]
                        })), n.isLoading = !1, n.hasMounted = !1, n
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
                        }), e && v(t, e)
                    }(e, t), n = e, (o = [{
                        key: "isVisible",
                        value: function() {
                            var t = this.props.controlsAreVisible,
                                e = this.video,
                                n = e.state(),
                                r = "beforeplay" === n,
                                i = "ended" === n && "reset" === e._attrs.endVideoBehavior,
                                o = e._impl.ui.anyDialogOpen();
                            return this.isLoading || m.touchScreen && t && !o && !r && !i
                        }
                    }, {
                        key: "mount",
                        value: function(t) {
                            this.rootElem = t, this.setupBindings(), this.hasMounted = !0, this.renderButton()
                        }
                    }, {
                        key: "onControlPropsUpdated",
                        value: function(t) {
                            var e = this;
                            ["anyDialogOpen", "controlsAreVisible", "videoWidth"].some((function(n) {
                                return e.props[n] !== t[n]
                            })) && this.renderButton()
                        }
                    }, {
                        key: "setupBindings",
                        value: function() {
                            var t = this,
                                e = -1;
                            this.hasMounted || this.unbinds.push(this.video.on("play", this.renderButton), this.video.on("pause", this.renderButton), this.video.on("end", this.renderButton), this.video.on("waiting", (function(n) {
                                !t.isLoading && e < 2 && n >= 2 && (t.isLoading = !0, t.renderButton()), e = n
                            })), this.video.on("done-waiting", (function() {
                                t.isLoading = !1, t.renderButton(), e = -1
                            })), this.video.on("timechange", (function() {
                                t.isLoading = !1, t.renderButton(), e = -1
                            })))
                        }
                    }, {
                        key: "scale",
                        value: function() {
                            return Math.min(1.3, Math.max(.3, (0, i.controlMultiplierBasedOnVideo)(this.video, [640, 960])))
                        }
                    }, {
                        key: "translate",
                        value: function(t) {
                            return (0, l.getTranslation)(this.props.playerLanguage.code, "PLAY_BUTTON_".concat(t))
                        }
                    }]) && f(n.prototype, o), a && f(n, a), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, o, a
                }(a.default);
            y.shouldMount = function() {
                return !0
            }, y.handle = "playPauseLoading", y.type = "above-control-bar"
        },
        738: (t, e, n) => {
            n.d(e, {
                default: () => v
            });
            var r = n(2),
                i = n(9),
                o = n(4),
                a = n(26);

            function s(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, p(r.key), r)
                }
            }

            function c(t, e, n) {
                return e = u(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, l() ? Reflect.construct(e, n || [], u(t).constructor) : e.apply(t, n))
            }

            function l() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (l = function() {
                    return !!t
                })()
            }

            function u(t) {
                return u = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, u(t)
            }

            function f(t, e) {
                return f = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, f(t, e)
            }

            function h(t, e, n) {
                return (e = p(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function p(t) {
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
            var d = (0, i.cachedDetect)();
            const v = function(t) {
                function e() {
                    var t;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return h(t = c(this, e, [].concat(r)), "state", {
                        buttons: [{
                            key: (0, a.seqId)(),
                            isFadingUp: !1,
                            isFirstRender: !1
                        }],
                        isDisplayNone: !0,
                        isMouseDown: !1,
                        isOpaque: !1
                    }), h(t, "onClick", (function(e) {
                        if (t.props.fadeUpOnClick) {
                            var n = t.state.buttons,
                                r = (0, o.clone)(n),
                                i = r[r.length - 1];
                            i.isFadingUp = !0;
                            var s = i.key;
                            r.push({
                                key: (0, a.seqId)(),
                                isFadingUp: !1,
                                isFirstRender: !0
                            }), t.setState({
                                buttons: r
                            }), setTimeout((function() {
                                t.setState({
                                    buttons: t.state.buttons.filter((function(t) {
                                        return t.key !== s
                                    }))
                                })
                            }), 700)
                        }
                        var c = t.props.onClick;
                        c && c(e)
                    })), h(t, "onMouseDown", (function() {
                        t.setState({
                            isMouseDown: !0
                        })
                    })), h(t, "onMouseUp", (function() {
                        t.setState({
                            isMouseDown: !1
                        })
                    })), h(t, "onTouchEnd", (function() {
                        t.setState({
                            isMouseDown: !1
                        })
                    })), h(t, "onTouchStart", (function() {
                        t.setState({
                            isMouseDown: !0
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
                    }), e && f(t, e)
                }(e, t), n = e, (i = [{
                    key: "buttonStyle",
                    value: function(t) {
                        var e = this.props,
                            n = e.bottom,
                            r = e.left,
                            i = e.right,
                            o = e.scale,
                            a = e.top,
                            s = t.isFadingUp,
                            c = t.isFirstRender,
                            l = this.state,
                            u = l.isDisplayNone,
                            f = l.isMouseDown,
                            h = l.isOpaque,
                            p = 140 * o,
                            d = -50,
                            v = .8;
                        return s ? d = -120 : c && (d = 20), s ? v = 1 : c ? v = .4 : f && (v = .9), {
                            background: "rgba(0,0,0,.6)",
                            border: 0,
                            borderRadius: "50%",
                            bottom: n,
                            cursor: "pointer",
                            display: u ? "none" : "block",
                            height: "".concat(140 * o, "px"),
                            left: r,
                            margin: 0,
                            padding: 0,
                            pointerEvents: "auto",
                            position: "absolute",
                            opacity: !h || s || c ? 0 : 1,
                            outline: "none",
                            right: i,
                            top: a,
                            transform: "translate(-50%, ".concat(d, "%) scale(").concat(v, ")"),
                            transition: "opacity ".concat(s ? 600 : 200, "ms, transform ").concat(f ? 200 : 600, "ms"),
                            webkitTapHighlightColor: "rgba(0,0,0,0)",
                            width: "".concat(p, "px")
                        }
                    }
                }, {
                    key: "componentDidMount",
                    value: function() {
                        this.handleVisibilityChange(this.props, this.state)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var t = this,
                            e = this.props.isVisible,
                            n = this.state.buttons;
                        if (e && n[n.length - 1].isFirstRender) {
                            var r = (0, o.clone)(n);
                            r[r.length - 1].isFirstRender = !1, setTimeout((function() {
                                t.setState({
                                    buttons: r
                                })
                            }), 10)
                        }
                    }
                }, {
                    key: "componentWillReceiveProps",
                    value: function(t) {
                        t.isVisible !== this.props.isVisible && this.handleVisibilityChange(t, this.state)
                    }
                }, {
                    key: "handleVisibilityChange",
                    value: function(t, e) {
                        var n = this,
                            r = t.isVisible,
                            i = e.isDisplayNone,
                            o = e.isOpaque;
                        r && i ? (this.setState({
                            isDisplayNone: !1
                        }), setTimeout((function() {
                            n.setState({
                                isOpaque: !0
                            })
                        }), 10)) : !r && o && (this.setState({
                            isOpaque: !1
                        }), setTimeout((function() {
                            n.setState({
                                isDisplayNone: !0
                            })
                        }), 100))
                    }
                }, {
                    key: "rootStyle",
                    value: function() {
                        return {
                            height: "100%",
                            left: 0,
                            pointerEvents: "none",
                            position: "absolute",
                            top: 0,
                            width: "100%"
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            n = e.ariaLabel,
                            i = e.children,
                            o = this.state.buttons;
                        return (0, r.h)("div", {
                            class: "w-css-reset w-css-reset-tree",
                            style: this.rootStyle()
                        }, o.map((function(e, a) {
                            return (0, r.h)("button", {
                                "aria-label": n,
                                class: "w-vulcan-v2-button",
                                key: e.key,
                                onClick: a === o.length - 1 && t.onClick,
                                onMouseDown: !d.touchScreen && t.onMouseDown,
                                onMouseUp: !d.touchScreen && t.onMouseUp,
                                onTouchEnd: d.touchScreen && t.onTouchEnd,
                                onTouchStart: d.touchScreen && t.onTouchStart,
                                style: t.buttonStyle(e)
                            }, i)
                        })))
                    }
                }]) && s(n.prototype, i), l && s(n, l), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, i, l
            }(r.Component)
        },
        739: (t, e, n) => {
            n.d(e, {
                default: () => d
            });
            var r = n(2),
                i = n(3),
                o = n(26),
                a = n(30);

            function s() {
                return s = Object.assign ? Object.assign.bind() : function(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = arguments[e];
                        for (var r in n)({}).hasOwnProperty.call(n, r) && (t[r] = n[r])
                    }
                    return t
                }, s.apply(null, arguments)
            }

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

            function u(t, e, n) {
                return e = h(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, f() ? Reflect.construct(e, n || [], h(t).constructor) : e.apply(t, n))
            }

            function f() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (f = function() {
                    return !!t
                })()
            }

            function h(t) {
                return h = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, h(t)
            }

            function p(t, e) {
                return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, p(t, e)
            }
            const d = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), (n = u(this, e, [t])).svgId = (0, o.seqId)("w-loading-swoop-"), n.gradientId = (0, o.seqId)("w-loading-swoop-grad-"), n.animName = (0, o.seqId)("w-loading-swoop-"), n
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
                }(e, t), n = e, (l = [{
                    key: "componentDidMount",
                    value: function() {
                        (0, i.addInlineCss)(this.svgEl, "\n@keyframes ".concat(this.animName, " {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n#").concat(this.svgId, " path {\n  animation: ").concat(this.animName, " 1s cubic-bezier(0.495, 0.155, 0.580, 0.845) infinite;\n  transform-origin: center;\n}\n    "))
                    }
                }, {
                    key: "shouldComponentUpdate",
                    value: function() {
                        return !1
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this;
                        return (0, r.h)("svg", s({}, (0, a.standardSvgAttrs)({
                            width: 120,
                            height: 120,
                            styleOverride: {
                                position: "absolute"
                            }
                        }), {
                            id: this.svgId
                        }), (0, r.h)("linearGradient", {
                            gradientUnits: "userSpaceOnUse",
                            id: this.gradientId,
                            ref: function(e) {
                                t.svgEl = e
                            },
                            x1: "31.5",
                            x2: "31.5",
                            y1: "0",
                            y2: "120"
                        }, (0, r.h)("stop", {
                            offset: "0",
                            style: {
                                stopColor: "#FFFFFF"
                            }
                        }), (0, r.h)("stop", {
                            offset: "0.7279",
                            style: {
                                stopColor: "#FFFFFF",
                                stopOpacity: 0
                            }
                        })), (0, r.h)("path", {
                            d: "M60,0C26.9,0,0,26.9,0,60s26.9,60,60,60v-6C30.2,114,6,89.8,6,60S30.2,6,60,6c1.7,0,3-1.3,3-3S61.7,0,60,0z",
                            style: {
                                fill: "url(#".concat(this.gradientId, ")"),
                                opacity: .8
                            }
                        }))
                    }
                }]) && c(n.prototype, l), f && c(n, f), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, l, f
            }(r.Component)
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
        PlayPauseLoadingCircleControl: () => t.PlayPauseLoadingCircleControl
    });
    var t = __webpack_require__(737)
})();
var __webpack_exports__PlayPauseLoadingCircleControl = __webpack_exports__.PlayPauseLoadingCircleControl;
export {
    __webpack_exports__PlayPauseLoadingCircleControl as PlayPauseLoadingCircleControl
};
//# sourceMappingURL=playPauseLoadingControl.js.map