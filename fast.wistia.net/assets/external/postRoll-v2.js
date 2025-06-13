/*! For license information please see postRoll-v2.js.LICENSE.txt */
var __webpack_modules__ = {
        2: (t, e, n) => {
            n.d(e, {
                Component: () => T,
                h: () => b,
                render: () => U
            });
            var r, i, o, a, s, c, u, l, h, f, p, d = {},
                v = [],
                m = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,
                g = Array.isArray;

            function y(t, e) {
                for (var n in e) t[n] = e[n];
                return t
            }

            function _(t) {
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

            function S(t) {
                return t.children
            }

            function T(t, e) {
                this.props = t, this.context = e
            }

            function k(t, e) {
                if (null == e) return t.__ ? k(t.__, t.__i + 1) : null;
                for (var n; e < t.__k.length; e++)
                    if (null != (n = t.__k[e]) && null != n.__e) return n.__e;
                return "function" == typeof t.type ? k(t) : null
            }

            function E(t) {
                var e, n;
                if (null != (t = t.__) && null != t.__c) {
                    for (t.__e = t.__c.base = null, e = 0; e < t.__k.length; e++)
                        if (null != (n = t.__k[e]) && null != n.__e) {
                            t.__e = t.__c.base = n.__e;
                            break
                        }
                    return E(t)
                }
            }

            function O(t) {
                (!t.__d && (t.__d = !0) && a.push(t) && !P.__r++ || s != i.debounceRendering) && ((s = i.debounceRendering) || c)(P)
            }

            function P() {
                for (var t, e, n, r, o, s, c, l = 1; a.length;) a.length > l && a.sort(u), t = a.shift(), l = a.length, t.__d && (n = void 0, o = (r = (e = t).__v).__e, s = [], c = [], e.__P && ((n = y({}, r)).__v = r.__v + 1, i.vnode && i.vnode(n), L(e.__P, n, r, e.__n, e.__P.namespaceURI, 32 & r.__u ? [o] : null, s, null == o ? k(r) : o, !!(32 & r.__u), c), n.__v = r.__v, n.__.__k[n.__i] = n, R(s, n, c), n.__e != o && E(n)));
                P.__r = 0
            }

            function x(t, e, n, r, i, o, a, s, c, u, l) {
                var h, f, p, m, g, y, _ = r && r.__k || v,
                    b = e.length;
                for (c = W(n, e, _, c, b), h = 0; h < b; h++) null != (p = n.__k[h]) && (f = -1 == p.__i ? d : _[p.__i] || d, p.__i = h, y = L(t, p, f, i, o, a, s, c, u, l), m = p.__e, p.ref && f.ref != p.ref && (f.ref && H(f.ref, null, p), l.push(p.ref, p.__c || m, p)), null == g && null != m && (g = m), 4 & p.__u || f.__k === p.__k ? c = j(p, c, t) : "function" == typeof p.type && void 0 !== y ? c = y : m && (c = m.nextSibling), p.__u &= -7);
                return n.__e = g, c
            }

            function W(t, e, n, r, i) {
                var o, a, s, c, u, l = n.length,
                    h = l,
                    f = 0;
                for (t.__k = new Array(i), o = 0; o < i; o++) null != (a = e[o]) && "boolean" != typeof a && "function" != typeof a ? (c = o + f, (a = t.__k[o] = "string" == typeof a || "number" == typeof a || "bigint" == typeof a || a.constructor == String ? w(null, a, null, null, null) : g(a) ? w(S, {
                    children: a
                }, null, null, null) : null == a.constructor && a.__b > 0 ? w(a.type, a.props, a.key, a.ref ? a.ref : null, a.__v) : a).__ = t, a.__b = t.__b + 1, s = null, -1 != (u = a.__i = C(a, n, c, h)) && (h--, (s = n[u]) && (s.__u |= 2)), null == s || null == s.__v ? (-1 == u && (i > l ? f-- : i < l && f++), "function" != typeof a.type && (a.__u |= 4)) : u != c && (u == c - 1 ? f-- : u == c + 1 ? f++ : (u > c ? f-- : f++, a.__u |= 4))) : t.__k[o] = null;
                if (h)
                    for (o = 0; o < l; o++) null != (s = n[o]) && !(2 & s.__u) && (s.__e == r && (r = k(s)), F(s, s));
                return r
            }

            function j(t, e, n) {
                var r, i;
                if ("function" == typeof t.type) {
                    for (r = t.__k, i = 0; r && i < r.length; i++) r[i] && (r[i].__ = t, e = j(r[i], e, n));
                    return e
                }
                t.__e != e && (e && t.type && !n.contains(e) && (e = k(t)), n.insertBefore(t.__e, e || null), e = t.__e);
                do {
                    e = e && e.nextSibling
                } while (null != e && 8 == e.nodeType);
                return e
            }

            function C(t, e, n, r) {
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
                "-" == e[0] ? t.setProperty(e, null == n ? "" : n) : t[e] = null == n ? "" : "number" != typeof n || m.test(e) ? n : n + "px"
            }

            function M(t, e, n, r, i) {
                var o;
                t: if ("style" == e)
                    if ("string" == typeof n) t.style.cssText = n;
                    else {
                        if ("string" == typeof r && (t.style.cssText = r = ""), r)
                            for (e in r) n && e in n || A(t.style, e, "");
                        if (n)
                            for (e in n) r && n[e] == r[e] || A(t.style, e, n[e])
                    }
                else if ("o" == e[0] && "n" == e[1]) o = e != (e = e.replace(l, "$1")), e = e.toLowerCase() in t || "onFocusOut" == e || "onFocusIn" == e ? e.toLowerCase().slice(2) : e.slice(2), t.l || (t.l = {}), t.l[e + o] = n, n ? r ? n.u = r.u : (n.u = h, t.addEventListener(e, o ? p : f, o)) : t.removeEventListener(e, o ? p : f, o);
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
                        if (null == e.t) e.t = h++;
                        else if (e.t < n.u) return;
                        return n(i.event ? i.event(e) : e)
                    }
                }
            }

            function L(t, e, n, r, o, a, s, c, u, l) {
                var h, f, p, d, v, m, b, w, k, E, O, P, W, j, C, A, M, D = e.type;
                if (null != e.constructor) return null;
                128 & n.__u && (u = !!(32 & n.__u), a = [c = e.__e = n.__e]), (h = i.__b) && h(e);
                t: if ("function" == typeof D) try {
                    if (w = e.props, k = "prototype" in D && D.prototype.render, E = (h = D.contextType) && r[h.__c], O = h ? E ? E.props.value : h.__ : r, n.__c ? b = (f = e.__c = n.__c).__ = f.__E : (k ? e.__c = f = new D(w, O) : (e.__c = f = new T(w, O), f.constructor = D, f.render = B), E && E.sub(f), f.props = w, f.state || (f.state = {}), f.context = O, f.__n = r, p = f.__d = !0, f.__h = [], f._sb = []), k && null == f.__s && (f.__s = f.state), k && null != D.getDerivedStateFromProps && (f.__s == f.state && (f.__s = y({}, f.__s)), y(f.__s, D.getDerivedStateFromProps(w, f.__s))), d = f.props, v = f.state, f.__v = e, p) k && null == D.getDerivedStateFromProps && null != f.componentWillMount && f.componentWillMount(), k && null != f.componentDidMount && f.__h.push(f.componentDidMount);
                    else {
                        if (k && null == D.getDerivedStateFromProps && w !== d && null != f.componentWillReceiveProps && f.componentWillReceiveProps(w, O), !f.__e && null != f.shouldComponentUpdate && !1 === f.shouldComponentUpdate(w, f.__s, O) || e.__v == n.__v) {
                            for (e.__v != n.__v && (f.props = w, f.state = f.__s, f.__d = !1), e.__e = n.__e, e.__k = n.__k, e.__k.some((function(t) {
                                    t && (t.__ = e)
                                })), P = 0; P < f._sb.length; P++) f.__h.push(f._sb[P]);
                            f._sb = [], f.__h.length && s.push(f);
                            break t
                        }
                        null != f.componentWillUpdate && f.componentWillUpdate(w, f.__s, O), k && null != f.componentDidUpdate && f.__h.push((function() {
                            f.componentDidUpdate(d, v, m)
                        }))
                    }
                    if (f.context = O, f.props = w, f.__P = t, f.__e = !1, W = i.__r, j = 0, k) {
                        for (f.state = f.__s, f.__d = !1, W && W(e), h = f.render(f.props, f.state, f.context), C = 0; C < f._sb.length; C++) f.__h.push(f._sb[C]);
                        f._sb = []
                    } else
                        do {
                            f.__d = !1, W && W(e), h = f.render(f.props, f.state, f.context), f.state = f.__s
                        } while (f.__d && ++j < 25);
                    f.state = f.__s, null != f.getChildContext && (r = y(y({}, r), f.getChildContext())), k && !p && null != f.getSnapshotBeforeUpdate && (m = f.getSnapshotBeforeUpdate(d, v)), A = h, null != h && h.type === S && null == h.key && (A = N(h.props.children)), c = x(t, g(A) ? A : [A], e, n, r, o, a, s, c, u, l), f.base = e.__e, e.__u &= -161, f.__h.length && s.push(f), b && (f.__E = f.__ = null)
                } catch (t) {
                    if (e.__v = null, u || null != a)
                        if (t.then) {
                            for (e.__u |= u ? 160 : 128; c && 8 == c.nodeType && c.nextSibling;) c = c.nextSibling;
                            a[a.indexOf(c)] = null, e.__e = c
                        } else
                            for (M = a.length; M--;) _(a[M]);
                    else e.__e = n.__e, e.__k = n.__k;
                    i.__e(t, e, n)
                } else null == a && e.__v == n.__v ? (e.__k = n.__k, e.__e = n.__e) : c = e.__e = I(n.__e, e, n, r, o, a, s, u, l);
                return (h = i.diffed) && h(e), 128 & e.__u ? void 0 : c
            }

            function R(t, e, n) {
                for (var r = 0; r < n.length; r++) H(n[r], n[++r], n[++r]);
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
                return "object" != typeof t || null == t || t.__b && t.__b > 0 ? t : g(t) ? t.map(N) : y({}, t)
            }

            function I(t, e, n, o, a, s, c, u, l) {
                var h, f, p, v, m, y, b, w = n.props,
                    S = e.props,
                    T = e.type;
                if ("svg" == T ? a = "http://www.w3.org/2000/svg" : "math" == T ? a = "http://www.w3.org/1998/Math/MathML" : a || (a = "http://www.w3.org/1999/xhtml"), null != s)
                    for (h = 0; h < s.length; h++)
                        if ((m = s[h]) && "setAttribute" in m == !!T && (T ? m.localName == T : 3 == m.nodeType)) {
                            t = m, s[h] = null;
                            break
                        }
                if (null == t) {
                    if (null == T) return document.createTextNode(S);
                    t = document.createElementNS(a, T, S.is && S), u && (i.__m && i.__m(e, s), u = !1), s = null
                }
                if (null == T) w === S || u && t.data == S || (t.data = S);
                else {
                    if (s = s && r.call(t.childNodes), w = n.props || d, !u && null != s)
                        for (w = {}, h = 0; h < t.attributes.length; h++) w[(m = t.attributes[h]).name] = m.value;
                    for (h in w)
                        if (m = w[h], "children" == h);
                        else if ("dangerouslySetInnerHTML" == h) p = m;
                    else if (!(h in S)) {
                        if ("value" == h && "defaultValue" in S || "checked" == h && "defaultChecked" in S) continue;
                        M(t, h, null, m, a)
                    }
                    for (h in S) m = S[h], "children" == h ? v = m : "dangerouslySetInnerHTML" == h ? f = m : "value" == h ? y = m : "checked" == h ? b = m : u && "function" != typeof m || w[h] === m || M(t, h, m, w[h], a);
                    if (f) u || p && (f.__html == p.__html || f.__html == t.innerHTML) || (t.innerHTML = f.__html), e.__k = [];
                    else if (p && (t.innerHTML = ""), x("template" == e.type ? t.content : t, g(v) ? v : [v], e, n, o, "foreignObject" == T ? "http://www.w3.org/1999/xhtml" : a, s, c, s ? s[0] : n.__k && k(n, 0), u, l), null != s)
                        for (h = s.length; h--;) _(s[h]);
                    u || (h = "value", "progress" == T && null == y ? t.removeAttribute("value") : null != y && (y !== t[h] || "progress" == T && !y || "option" == T && y != w[h]) && M(t, h, y, w[h], a), h = "checked", null != b && b != t[h] && M(t, h, b, w[h], a))
                }
                return t
            }

            function H(t, e, n) {
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
                if (i.unmount && i.unmount(t), (r = t.ref) && (r.current && r.current != t.__e || H(r, null, e)), null != (r = t.__c)) {
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

            function B(t, e, n) {
                return this.constructor(t, n)
            }

            function U(t, e, n) {
                var o, a, s, c;
                e == document && (e = document.documentElement), i.__ && i.__(t, e), a = (o = "function" == typeof n) ? null : n && n.__k || e.__k, s = [], c = [], L(e, t = (!o && n || e).__k = b(S, null, [t]), a || d, d, e.namespaceURI, !o && n ? [n] : a ? null : e.firstChild ? r.call(e.childNodes) : null, s, !o && n ? n : a ? a.__e : e.firstChild, o, c), R(s, t, c)
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
            }, o = 0, T.prototype.setState = function(t, e) {
                var n;
                n = null != this.__s && this.__s != this.state ? this.__s : this.__s = y({}, this.state), "function" == typeof t && (t = t(y({}, n), this.props)), t && y(n, t), null != t && this.__v && (e && this._sb.push(e), O(this))
            }, T.prototype.forceUpdate = function(t) {
                this.__v && (this.__e = !0, t && this.__h.push(t), O(this))
            }, T.prototype.render = S, a = [], c = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, u = function(t, e) {
                return t.__v.__b - e.__v.__b
            }, P.__r = 0, l = /(PointerCapture)$|Capture$/i, h = 0, f = D(!1), p = D(!0)
        },
        3: (t, e, n) => {
            n.d(e, {
                elemBind: () => w,
                elemHeight: () => y,
                elemIsInside: () => b,
                elemOffset: () => s.elemOffset,
                elemStripEventAttributes: () => k,
                elemUnbind: () => S,
                elemWidth: () => g,
                execCssTags: () => p,
                execScriptTags: () => c.execScriptTags,
                getCssTags: () => f,
                getScriptTags: () => c.getScriptTags,
                removeCssTags: () => d,
                removeScriptTags: () => c.removeScriptTags
            });
            var r, i = n(4),
                o = (n(6), n(8), n(9)),
                a = n(12),
                s = n(19),
                c = n(20),
                u = n(26),
                l = n(16),
                h = (l.Wistia, (0, o.cachedDetect)()),
                f = function(t) {
                    return t.match(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/gi) || []
                },
                p = function(t, e) {
                    if (!t) return null;
                    (0, i.isArray)(t) || (t = f(t));
                    for (var n = [], r = 0; r < t.length; r++) {
                        var o = t[r];
                        if (/<link.*?rel=['"]stylesheet['"][^>]*>/.test(o)) {
                            var a = o.match(/href=['"](.*?)['"]/i);
                            if (a) {
                                var s = document.createElement("link");
                                s.setAttribute("rel", "stylesheet"), s.setAttribute("href", a[1]), s.className = "wistia_injected_style", (e || document.body || document.head).appendChild(s), n.push(s)
                            }
                        } else if (/<style>[\s\S]+?<\/style>/gi.test(o)) {
                            var c = o.match(/<style>([\s\S]+?)<\/style>/i);
                            if (c) {
                                var u = v(e || document.body || document.head, c[1]);
                                n.push(u)
                            }
                        }
                    }
                    return n
                },
                d = function(t) {
                    return t.replace(/<link.*?rel=['"]stylesheet['"][^>]*>|<style>[\s\S]+?<\/style>/gi, "")
                },
                v = function(t, e) {
                    var n = t || document.body || document.head,
                        r = document.createElement("style");
                    return r.id = (0, u.seqId)("wistia_", "_style"), r.setAttribute("type", "text/css"), r.className = "wistia_injected_style", n.appendChild(r, n.nextSibling), r.styleSheet ? r.styleSheet.cssText = e : r.appendChild(document.createTextNode(e)), r
                },
                m = function(t, e) {
                    if (!window.getComputedStyle) return null;
                    var n = window.getComputedStyle(t, null);
                    return null == n ? null : null != e ? n[e] : n
                },
                g = function(t) {
                    if (t === window) return window.innerWidth ? window.innerWidth : document.documentElement ? document.documentElement.offsetWidth : document.body.offsetWidth;
                    if (t === document) {
                        var e = document.body,
                            n = document.documentElement;
                        return Math.max(e.scrollWidth, e.offsetWidth, n.clientWidth, n.scrollWidth, n.offsetWidth)
                    }
                    var r;
                    return (r = m(t, "width")) && null != r ? parseFloat(r) : t.currentStyle ? t.offsetWidth : -1
                },
                y = function(t) {
                    if (t === window) return window.innerHeight ? window.innerHeight : document.documentElement ? document.documentElement.offsetHeight : document.body.offsetHeight;
                    if (t === document) {
                        var e = document.body,
                            n = document.documentElement;
                        return Math.max(e.scrollHeight, e.offsetHeight, n.clientHeight, n.scrollHeight, n.offsetHeight)
                    }
                    var r;
                    return (r = m(t, "height")) && null != r ? parseFloat(r) : t.currentStyle ? t.offsetHeight : -1
                },
                _ = function(t) {
                    for (var e = t, n = []; e = e.parentNode;) n.push(e);
                    return n
                },
                b = function(t, e) {
                    return t === e || function(t, e) {
                        for (var n = _(t), r = 0; r < n.length; r++)
                            if (n[r] === e) return !0;
                        return !1
                    }(t, e)
                },
                w = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3],
                        i = function(r) {
                            (r = r || window.event).pageX || r.pageY || !r.clientX && !r.clientY || (r.pageX = r.clientX + O(), r.pageY = r.clientY + E()), r.preventDefault || (r.preventDefault = function() {
                                r.returnValue = !1
                            }), r.stopPropagation || (r.stopPropagation = function() {
                                r.cancelBubble = !0
                            }), null == r.which && (r.which = null != r.charCode ? r.charCode : r.keyCode), null == r.which && null != r.button && (1 & r.button ? r.which = 1 : 2 & r.button ? r.which = 3 : 4 & r.button ? r.which = 2 : r.which = 0), r.target || r.srcElement && (r.target = r.srcElement), r.target && 3 === r.target.nodeType && (r.target = r.target.parentNode);
                            for (var i = arguments.length, o = new Array(i > 1 ? i - 1 : 0), a = 1; a < i; a++) o[a - 1] = arguments[a];
                            var s = n.apply(r.target, [r].concat(o));
                            return s === S && S(t, e, n), s
                        };
                    l.Wistia._elemBind = l.Wistia._elemBind || {};
                    var o = T(t, e, n);
                    return l.Wistia._elemBind[o] = i, i.elem = t, i.event = e, t.addEventListener(e, i, r),
                        function() {
                            S(t, e, n, r)
                        }
                },
                S = function(t, e, n) {
                    var r = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    if (null != t && null != t._wistiaElemId && null != n && n._wistiaBindId) {
                        var i = T(t, e, n),
                            o = l.Wistia._elemBind[i];
                        return o && (t.removeEventListener(e, o, r), o.elem = null, o.event = null), delete l.Wistia._elemBind[i]
                    }
                },
                T = function(t, e, n) {
                    return t._wistiaElemId = t._wistiaElemId || (0, u.seqId)("wistia_elem_"), n._wistiaBindId = n._wistiaBindId || (0, u.seqId)("wistia_bind_"), "".concat(t._wistiaElemId, ".").concat(e, ".").concat(n._wistiaBindId)
                },
                k = function(t) {
                    var e = t && t.attributes || [];
                    try {
                        for (var n = 0; n < e.length; n++) {
                            var r = e[n];
                            /^on.+/i.test(r.name) && (t[r.name] = null, t.removeAttribute(r.name))
                        }
                    } catch (t) {
                        a.wlog.error(t)
                    }
                    if (t.childNodes)
                        for (var i = 0; i < t.childNodes.length; i++) {
                            var o = t.childNodes[i];
                            1 === o.nodeType && k(o)
                        }
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
                };
            ["auxclick", "click", "contextmenu", "dblclick", "focus", "keydown", "keypress", "keyup", "mousedown", "mouseup", "reset", "submit", "touchend", "touchstart"].forEach((function(t) {
                w(document, t, (function(t) {
                    r = t, Date.now(), setTimeout((function() {
                        r === t && (r = void 0)
                    }), 0)
                }), !h.passiveSupported || {
                    capture: !0,
                    passive: !0
                })
            }))
        },
        4: (t, e, n) => {
            n.d(e, {
                cast: () => v,
                clone: () => u,
                eachLeaf: () => P,
                getDeep: () => l,
                isArray: () => _,
                isEmpty: () => E,
                isObject: () => w,
                merge: () => o,
                setAndPreserveUndefined: () => f,
                setDeep: () => h,
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
                    if (_(e)) {
                        _(t) || (t = []);
                        for (var o = 0; o < e.length; o++) {
                            var u = e[o];
                            null == t[o] && null != u && (_(u) ? t[o] = [] : w(u) && (t[o] = {}));
                            var l = a(t[o], u, n);
                            i(e, o, l) ? delete t[o] : t[o] = l
                        }
                        return n(t)
                    }
                    if (w(e)) {
                        for (var h in e)
                            if (r(e, h) && (r(t, h) || null == t[h])) {
                                var f = e[h];
                                _(f) ? (_(t[h]) || (t[h] = []), a(t[h], f, n), t[h] = n(t[h])) : w(f) ? (w(t[h]) || (t[h] = {}), a(t[h], f, n), t[h] = n(t[h])) : null == t ? (t = {}, i(e, h, f) || (t[h] = n(f))) : i(e, h, f) ? delete t[h] : t[h] = n(f)
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
                    return _(t) ? a([], t, e) : a({}, t, e)
                },
                l = function(t, e, n) {
                    e = "string" == typeof e ? e.split(".") : i.call(e);
                    for (var o, a = t; null != t && e.length;) {
                        var s = e.shift();
                        void 0 !== t[s] && (w(t[s]) || _(t[s])) || !n || (0 === s ? (t = a[o] = [])[s] = {} : t[s] = {}), a = t, o = s, t = r(t, s) ? t[s] : void 0
                    }
                    return t
                },
                h = function(t, e, n) {
                    return p(t, e, n, !0)
                },
                f = function(t, e, n) {
                    return p(t, e, n, !1)
                },
                p = function(t, e, n) {
                    var r = !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3],
                        o = (e = "string" == typeof e ? e.split(".") : i.call(e)).pop();
                    null != (t = l(t, e, !0)) && (w(t) || _(t)) && null != o && (r && null == n ? delete t[o] : t[o] = n)
                },
                d = function(t, e) {
                    return h(t, e)
                },
                v = function(t) {
                    return null == t ? t : w(t) || _(t) ? g(t) : m("".concat(t), t)
                },
                m = function(t) {
                    var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t;
                    return /^-?[1-9]\d*?$/.test(t) ? parseInt(t, 10) : "0" === t || "-0" === t ? 0 : /^-?\d*\.\d+$/.test(t) ? parseFloat(t) : !!/^true$/i.test(t) || !/^false$/i.test(t) && e
                },
                g = function(t) {
                    return a(t, t, (function(t) {
                        return "string" == typeof t ? m(t) : t
                    }), (function() {
                        return !1
                    }))
                },
                y = /^\s*function Array()/,
                _ = function(t) {
                    return null != t && t.push && y.test(t.constructor)
                },
                b = /^\s*function Object()/,
                w = function(t) {
                    return null != t && "object" == typeof t && b.test(t.constructor)
                },
                S = /^\s*function RegExp()/,
                T = /^string|number|boolean|function$/i,
                k = function(t) {
                    return null != t && (T.test(typeof t) || function(t) {
                        return null != t && S.test(t.constructor)
                    }(t))
                },
                E = function(t) {
                    return null == t || (!(!_(t) || t.length) || !!w(t) && !Object.keys(t).length)
                },
                O = function(t, e, n, o, a) {
                    if (null == n && (n = []), k(t)) e(t, n, o, a);
                    else if (w(t) || _(t)) {
                        for (var s in e(t, n, o, a), t)
                            if (r(t, s)) {
                                var c = i.call(n);
                                c.push(s), O(t[s], e, c, t, s)
                            }
                    } else e(t, n, o, a)
                },
                P = function(t, e) {
                    O(t, (function(t, n, r, i) {
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
                cachedDetect: () => H
            });
            var r, i = n(10),
                o = n(11),
                a = navigator.userAgent,
                s = null,
                c = /(webkit)[ /]([^\s]+)/i,
                u = /OPR\/([^\s]+)/i,
                l = /(edge)\/(\d+(?:\.\d+)?)/i,
                h = /(mozilla)(?:.*? rv:([^\s)]+))?/i,
                f = /(android) ([^;]+)/i,
                p = /(iphone)/i,
                d = /(Windows Phone OS (\d+(?:\.\d+)?))/,
                v = /OS (\d+)_(\d+)/i,
                m = /(firefox)/i,
                g = /Mobile VR/i,
                y = /Version\/([^\s]+)/i,
                _ = function() {
                    return (w()[1] || "webkit").toLowerCase()
                },
                b = function() {
                    return w()[2]
                },
                w = function() {
                    var t;
                    return (t = a.match(l)) || (t = a.match(c)) || (t = a.match(u)) ? t : t ? (null != document.documentMode && (t[2] = document.documentMode), t) : (t = a.match(h)) || []
                },
                S = function() {
                    var t = a.match(f);
                    return null != t && {
                        version: t[2]
                    }
                },
                T = function() {
                    return p.test(a)
                },
                k = function() {
                    return j() > 0 || S() || O()
                },
                E = function() {
                    try {
                        var t = matchMedia("(hover:hover)");
                        if ("not all" !== t.media) return t.matches
                    } catch (t) {}
                    return !k()
                },
                O = function() {
                    return /Macintosh/i.test(navigator.userAgent) && navigator.maxTouchPoints && navigator.maxTouchPoints > 1
                },
                P = function() {
                    return c.test(a) && !/chrome/i.test(a) && !O() && !T()
                },
                x = function() {
                    return !(!/Chrome/.test(a) || !/Google Inc/.test(navigator.vendor)) && {
                        version: W()
                    }
                },
                W = function() {
                    var t = a.match(/\bChrome\/([^\s]+)/);
                    return t && t[1]
                },
                j = function() {
                    var t = a.match(v),
                        e = a.match(y);
                    return null != t ? parseFloat("".concat(t[1], ".").concat(t[2])) : null != e && e[1] && O() ? parseFloat(e[1]) : 0
                },
                C = function() {
                    return l.test(a)
                },
                A = function() {
                    return m.test(a)
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
                D = function() {
                    try {
                        return "localStorage" in i.root && null != i.root.localStorage
                    } catch (t) {
                        return !1
                    }
                },
                L = ["WebKit", "Moz", "O", "Ms", ""],
                R = function() {
                    for (var t = 0; t < L.length; t++) {
                        var e = "".concat(L[t], "MutationObserver");
                        if (i.root[e]) return e
                    }
                    return null
                },
                N = function() {
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
                I = function() {
                    var t = x(),
                        e = A(),
                        n = C(),
                        r = u.test(a),
                        i = t && b() >= 32,
                        o = t && b() >= 75 && S(),
                        s = e && b() >= 65,
                        c = e && b() >= 67 && S(),
                        l = n && b() >= 18,
                        h = r && b() >= 19;
                    return i || o || s || c || l || h
                },
                H = function() {
                    return s || (s = F())
                },
                F = function() {
                    var t, e, n, r = {
                        browser: {
                            version: b()
                        },
                        edge: C(),
                        firefox: A(),
                        gearvr: g.test(a),
                        hdr: !(null === (e = (n = window).matchMedia) || void 0 === e || !e.call(n, "(dynamic-range: high)").matches) || !!(screen.colorDepth && screen.colorDepth >= 30),
                        android: S(),
                        oldandroid: S() && parseFloat(S().version) < 4.1,
                        iphone: T(),
                        ipad: O(),
                        safari: P(),
                        chrome: x(),
                        winphone: {
                            version: d.test(a)[2]
                        },
                        ios: {
                            version: j()
                        },
                        windows: /win/i.test(navigator.platform),
                        mac: /mac/i.test(navigator.platform),
                        retina: null != i.root.devicePixelRatio && i.root.devicePixelRatio > 1,
                        hoverIsNatural: E(),
                        touchScreen: k(),
                        video: M(),
                        mediaSource: i.root.MediaSource && i.root.MediaSource.isTypeSupported("".concat('video/mp4; codecs="avc1.42E01E', ', mp4a.40.2"')),
                        nativeHls: (T() || O() || P()) && M().nativeHls,
                        localstorage: D(),
                        fullscreenEnabled: document.fullscreenEnabled || document.mozFullScreenEnabled || document.webkitFullscreenEnabled || document.msFullscreenEnabled,
                        vulcanV2Support: (t = /webkit|mozilla|edge/.test(_()), !!(T() || O() || S()) || Boolean(t && M().h264 && Object.defineProperties)),
                        mutationObserver: R(),
                        callingPlayRequiresEventContext: j() > 0 || S() || P(),
                        passiveSupported: N(),
                        webp: I(),
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
            var h = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    console.error.apply(console, e)
                },
                f = function() {
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
            l.logFunc = function(t) {
                return null == t && (t = this.level), console ? (0 === t ? e = h : 1 === t ? e = f : 3 === t ? e = p : 4 === t && (e = d), e || (e = v), "function" != typeof e && (this.noConsoleLog = !0, e = c), e) : c;
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
            var m = new u(i.Wistia.wlogCtx)
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
                bindify: () => y,
                trigger: () => h,
                unbind: () => u,
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
                h = function(t) {
                    for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++) n[r - 1] = arguments[r];
                    return this._bindings && null != this._bindings.all && f.apply(this, ["all", t].concat(n)), f.apply(this, [t].concat(n))
                },
                f = function(t) {
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
                p = function(t, e) {
                    null == t._namedBindings && (t._namedBindings = {}), null == t._namedBindings[e] && (t._namedBindings[e] = {})
                },
                d = function(t, e, n, r) {
                    return this.unbindNamed(t, e),
                        function(t, e, n, r, i) {
                            p(t, e), t._namedBindings[e][n] = {
                                event: r,
                                fn: i
                            }
                        }(this, t, e, n, r), this.bind(n, r),
                        function() {
                            this.unbindNamed(t, e)
                        }
                },
                v = function(t, e) {
                    p(this, t);
                    var n = function(t, e, n) {
                        return p(t, e), t._namedBindings[e][n]
                    }(this, t, e);
                    if (n) {
                        var r = n.event,
                            i = n.fn;
                        this.unbind(r, i)
                    }
                    var o = this._namedBindings;
                    return delete o[t][e], g(o[t]) && delete o[t], this
                },
                m = function(t) {
                    var e = this._namedBindings && this._namedBindings[t];
                    if (null == e) return this;
                    for (var n in e) i(e, n) && this.unbindNamed(t, n)
                },
                g = function(t) {
                    for (var e in t)
                        if (i(t, e)) return !1;
                    return !0
                },
                y = function(t) {
                    return t.bind = c, t.unbind = u, t.on = c, t.off = u, t.rebind = l, t.trigger = h, t.bindNamed = d, t.unbindNamed = v, t.unbindAllInNamespace = m, t
                };
            y(function() {}.prototype)
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
                    var h = a(t);
                    return {
                        height: c.height * h,
                        top: c.top * h + e - u,
                        left: c.left * h + n - l,
                        width: c.width * h,
                        zoom: h
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
                    t = n[0] instanceof Array ? n[0] : n, t = h(t);
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
                h = function(t) {
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
                eV1HostWithPort: () => p,
                eV1Protocol: () => d,
                metricsHost: () => v
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
                h = function() {
                    for (var t = document.getElementsByTagName("script"), e = 0; e < t.length; e++) {
                        var n = t[e];
                        if (n.src) {
                            var r = new i.Url(n.src),
                                o = /\/assets\/external\/E-v1?\.js$/.test(r.rawPath),
                                a = r.host === u() || r.host === l() || "fast-canary.wistia.net" === r.host,
                                s = "https:" === location.protocol && "https:" === r.protocol,
                                c = "" === r.protocol || null == r.protocol,
                                h = s || c || "http:" === location.protocol,
                                f = !n.readyState || /loaded|complete/.test(n.readyState);
                            if (o && a && h && f) return r
                        }
                    }
                    return new i.Url("".concat((0, i.proto)(), "//").concat(l(), "/E-v1.js"))
                }(),
                f = function() {
                    return h.host
                },
                p = function() {
                    return h.port ? "".concat(f(), ":").concat(h.port) : f()
                },
                d = function() {
                    return h.protocol
                },
                v = function() {
                    return "pipedream.".concat("wistia.com")
                },
                m = [].concat(["wistia.net", "wistia.com"], ["wistia.mx", "wistia.dev", "wistia.tech", "wistia.am", "wistia.se", "wistia.io", "wistia.st"]);
            new RegExp("(".concat(m.map((function(t) {
                return "\\.".concat(t.replace(".", "\\."))
            })).join("|"), ")$"))
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
                h = l.prototype;
            h.fromOptions = function(t) {
                for (var e = 0; e < u.length; e++) {
                    var n = u[e];
                    null != t[n] && (this[n] = t[n])
                }
                return this
            }, h.fromRaw = function(t) {
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
                                    var h = [l];
                                    h.push(a(u)), (0, r.setAndPreserveUndefined)(e, o, h)
                                }
                            else(0, r.setAndPreserveUndefined)(e, o, a(u))
                        }, s = 0; s < n.length; s++) o();
                    return e
                }(this.rawParams)), (e = t.match(/#(.*)$/)) && (this.anchor = e[1]), this
            }, h.clone = function() {
                return new l({
                    protocol: this.protocol,
                    host: this.host,
                    port: this.port,
                    path: (0, r.clone)(this.path),
                    params: (0, r.clone)(this.params),
                    anchor: this.anchor
                })
            }, h.ext = function(t) {
                if (null != t) {
                    var e = this.ext(),
                        n = this.path.length - 1,
                        r = new RegExp("\\.".concat(e), "g");
                    return e && (this.path[n] = "".concat(this.path[n].replace(r, ""))), this.path[n] = "".concat(this.path[n], ".").concat(t)
                }
                var i = this.path[this.path.length - 1].match(/\.(.*)$/);
                return null != i && i[1] || null
            }, h.isRelative = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location,
                    e = this.protocol,
                    n = this.host;
                return !(null != e && "" !== e && e !== t.protocol || n && n !== t.hostname)
            }, h.toString = function() {
                return this.isRelative() ? this.relative() : this.absolute()
            }, h.absolute = function() {
                var t = "";
                null != this.protocol && (t = this.protocol);
                var e = "";
                return null != this.port && (e = ":".concat(this.port)), "".concat(t, "//").concat(this.host || location.host).concat(e).concat(this.relative())
            }, h.relative = function() {
                var t, e = "";
                this.path.length > 0 && ("string" == typeof(t = this.path) && (t = t.split("/")), e = null == t ? "" : "/".concat(t.join("/")), this._hasTrailingSlash && (e += "/"));
                var n, i, o = "?".concat((n = this.params, i = [], (0, r.eachLeaf)(n, (function(t, e) {
                    null != t ? i.push("".concat(encodeURIComponent(s(e)), "=").concat(encodeURIComponent(t))) : i.push(encodeURIComponent(s(e)))
                })), i.join("&")));
                return 1 === o.length && (o = ""), "".concat(e).concat(o).concat(this.relativeAnchor())
            }, h.authority = function() {
                var t = null != this.port ? ":".concat(this.port) : "";
                return "".concat(this.host).concat(t)
            }, h.relativeProtocol = function() {
                var t = "";
                return null != this.port && (t = ":".concat(this.port)), "//".concat(this.host).concat(t).concat(this.relative())
            }, h.relativeAnchor = function() {
                var t = "";
                return null != this.anchor && (t = "#".concat(this.anchor)), "".concat(t)
            }, h.setPath = function(t) {
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
        34: (t, e, n) => {
            n.d(e, {
                Color: () => f
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
                h = function(t, e, n) {
                    return n < 0 && (n += 1), n > 1 && (n -= 1), n < 1 / 6 ? t + 6 * (e - t) * n : n < .5 ? e : n < 2 / 3 ? t + (e - t) * (2 / 3 - n) * 6 : t
                },
                f = function() {
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
                            return this.r = 255 * h(i, r, t + 1 / 3), this.g = 255 * h(i, r, t), this.b = 255 * h(i, r, t - 1 / 3), this
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
                        h = 0,
                        f = (c + u) / 2;
                    c === u && (l = 0, h = 0);
                    var p = c - u;
                    return 0 === p ? {
                        hue: l,
                        saturation: h,
                        lightness: 100 * o
                    } : (l = c === o ? (a - s) / p + (a < s ? 6 : 0) : c === a ? (s - o) / p + 2 : (o - a) / p + 4, {
                        hue: 360 * (l /= 6),
                        saturation: 100 * (h = f > .5 ? p / (2 - c - u) : p / (c + u)),
                        lightness: 100 * f
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
                isVisitorTrackingEnabled: () => h
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
                return null == t ? h() : l(t)
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
                h = function() {
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
                updateLocalStorage: () => h
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
                h = function(t, e) {
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
                getAllApiHandles: () => s,
                getAllApiHandlesByDomOrder: () => c
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
            var s = function() {
                    return (void 0 === (0, i.wData)("video") ? [] : Object.values((0, i.wData)("video"))).concat(void 0 === (0, i.wData)("iframe_api") ? [] : Object.values((0, i.wData)("iframe_api")))
                },
                c = function() {
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
        44: (t, e, n) => {
            n.d(e, {
                isMouseDown: () => l,
                isMouseDownRecently: () => h
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
                h = function() {
                    return null != o.Wistia._mouseDownForceReturnVal ? o.Wistia._mouseDownForceReturnVal : (t = 500, Math.max(o.Wistia._lastMouseDownAt || 0, (o.Wistia._lastMouseUpAt || 0) - 1) > Date.now() - t);
                    var t
                }
        },
        45: (t, e, n) => {
            n.d(e, {
                getTranslation: () => f
            });
            var r = n(4),
                i = (n(46), n(16)),
                o = i.Wistia.languages = i.Wistia.languages || {},
                a = i.Wistia.translations = i.Wistia.translations || {};
            i.Wistia._translationPromises || (i.Wistia._translationPromises = {});
            var s, c = function(t, e, n) {
                    o[t] = {
                        code: t,
                        text: h(e)
                    }, n && u(t, n)
                },
                u = function(t, e) {
                    if (null == o[t]) throw new Error("Must define a language with code ".concat(t, " before defining its translations."));
                    var n = a[t];
                    n ? (0, r.merge)(n, e) : a[t] = (0, r.clone)(e)
                },
                l = i.Wistia.cachedDecodings = i.Wistia.cachedDecodings || {},
                h = function(t) {
                    return s || (s = document.createElement("textarea")), null != l[t] ? l[t] : (s.innerHTML = t, l[t] = s.value, s.value)
                },
                f = function(t, e) {
                    var n;
                    return n = a[t] && a[t][e] ? a[t][e] : a["en-US"][e], h(function(t) {
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

                function h(t, e, n, r) {
                    var i = e && e.prototype instanceof y ? e : y,
                        a = Object.create(i.prototype),
                        s = new C(r || []);
                    return o(a, "_invoke", {
                        value: P(t, n, s)
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
                e.wrap = h;
                var p = "suspendedStart",
                    d = "suspendedYield",
                    v = "executing",
                    m = "completed",
                    g = {};

                function y() {}

                function _() {}

                function b() {}
                var w = {};
                l(w, s, (function() {
                    return this
                }));
                var S = Object.getPrototypeOf,
                    T = S && S(S(A([])));
                T && T !== n && r.call(T, s) && (w = T);
                var k = b.prototype = y.prototype = Object.create(w);

                function E(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        l(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function O(t, e) {
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
                    var i = p;
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
                            var s = r.delegate;
                            if (s) {
                                var c = x(s, r);
                                if (c) {
                                    if (c === g) continue;
                                    return c
                                }
                            }
                            if ("next" === r.method) r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if (i === p) throw i = m, r.arg;
                                r.dispatchException(r.arg)
                            } else "return" === r.method && r.abrupt("return", r.arg);
                            i = v;
                            var u = f(e, n, r);
                            if ("normal" === u.type) {
                                if (i = r.done ? m : d, u.arg === g) continue;
                                return {
                                    value: u.arg,
                                    done: r.done
                                }
                            }
                            "throw" === u.type && (i = m, r.method = "throw", r.arg = u.arg)
                        }
                    }
                }

                function x(e, n) {
                    var r = n.method,
                        i = e.iterator[r];
                    if (i === t) return n.delegate = null, "throw" === r && e.iterator.return && (n.method = "return", n.arg = t, x(e, n), "throw" === n.method) || "return" !== r && (n.method = "throw", n.arg = new TypeError("The iterator does not provide a '" + r + "' method")), g;
                    var o = f(i, e.iterator, n.arg);
                    if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, g;
                    var a = o.arg;
                    return a ? a.done ? (n[e.resultName] = a.value, n.next = e.nextLoc, "return" !== n.method && (n.method = "next", n.arg = t), n.delegate = null, g) : a : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, g)
                }

                function W(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function j(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function C(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(W, this), this.reset(!0)
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
                return _.prototype = b, o(k, "constructor", {
                    value: b,
                    configurable: !0
                }), o(b, "constructor", {
                    value: _,
                    configurable: !0
                }), _.displayName = l(b, u, "GeneratorFunction"), e.isGeneratorFunction = function(t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === _ || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, b) : (t.__proto__ = b, l(t, u, "GeneratorFunction")), t.prototype = Object.create(k), t
                }, e.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, E(O.prototype), l(O.prototype, c, (function() {
                    return this
                })), e.AsyncIterator = O, e.async = function(t, n, r, i, o) {
                    void 0 === o && (o = Promise);
                    var a = new O(h(t, n, r, i), o);
                    return e.isGeneratorFunction(n) ? a : a.next().then((function(t) {
                        return t.done ? t.value : a.next()
                    }))
                }, E(k), l(k, u, "Generator"), l(k, s, (function() {
                    return this
                })), l(k, "toString", (function() {
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
                }, e.values = A, C.prototype = {
                    constructor: C,
                    reset: function(e) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(j), !e)
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
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), j(n), g
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var i = r.arg;
                                    j(n)
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
                    s = 0,
                    c = function() {
                        s = !1 === n.leading ? 0 : (new Date).getTime(), a = null, o = e.apply(r, i), a || (r = i = null)
                    };
                return function() {
                    var u = (new Date).getTime();
                    s || !1 !== n.leading || (s = u);
                    var l = t - (u - s);
                    return r = this, i = arguments, l <= 0 || l > t ? (clearTimeout(a), a = null, s = u, o = e.apply(r, i), a || (r = i = null)) : a || !1 === n.trailing || (a = setTimeout(c, l)), o
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
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, p(r.key), r)
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

            function h(t, e) {
                return h = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, h(t, e)
            }

            function f(t, e, n) {
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
            var d = (0, i.cachedDetect)(),
                v = function(t) {
                    function e() {
                        var t;
                        ! function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e);
                        for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                        return f(t = c(this, e, [].concat(r)), "onSwipe", (function(e, n) {
                            var r = t.props.onSwipe;
                            r && r(e, n)
                        })), f(t, "onPinch", (function(e, n) {
                            var r = t.props.onPinch;
                            r && r(e, n)
                        })), f(t, "onLongPress", (function(e, n) {
                            var r = t.props.onLongPress;
                            r && r(e, n)
                        })), f(t, "onCustomTouchMove", (function(e, n) {
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
                        }), e && h(t, e)
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
        71: (t, e, n) => {
            n.d(e, {
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
                    return h("count", t, arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {})
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
                h = function(t, e, n) {
                    var a, u = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                    if ((0, o.isVisitorTrackingEnabled)()) try {
                        null == c.toMput && (c.toMput = []);
                        var h = (0, r.assign)({
                                type: t,
                                key: e,
                                value: null != n ? n : null
                            }, u),
                            f = JSON.stringify(h, (a = new WeakSet, function(t, e) {
                                if ("object" == typeof e && null !== e) {
                                    if (a.has(e)) return "[Circular]";
                                    a.add(e)
                                }
                                return e
                            }));
                        c.toMput.push(f), clearTimeout(s.Wistia._msendTimeout), s.Wistia._msendTimeout = setTimeout((function() {
                            (0, i.pageLoaded)((function() {
                                l.apply(undefined, c.toMput), c.toMput = []
                            }))
                        }), s.Wistia._simpleMetricsDebounceInterval)
                    } catch (t) {
                        console.error(t.message), console.error(t.stack)
                    }
                }
        },
        135: (t, e, n) => {
            n.d(e, {
                maybeLoadAndSetupEmbedLinksThrottled: () => f
            });
            var r = n(6),
                i = n(71),
                o = n(46),
                a = n(54),
                s = n(41),
                c = n(16);

            function u(t) {
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
            c.Wistia._destructors.destroyEmbedLinks = function() {
                c.Wistia.EmbedLink.EmbedLinkClass && c.Wistia.EmbedLink.EmbedLinkClass._onEv1Destroy()
            };
            var h = function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    (function() {
                        for (var t = (0, s.getAllApiHandlesByDomOrder)(), e = 0; e < t.length; e++)
                            if (t[e]._attrs && t[e]._attrs.playlistLinks) return !0;
                        return document.querySelectorAll('a[href^="#wistia_"]').length > 0 || u(document.getElementsByTagName("wistia-player")).some((function(t) {
                            return t.shadowRoot.querySelectorAll('a[href^="#wistia_"]').length > 0
                        }))
                    })() && (0, o.dynamicImport)("assets/external/embedLinks.js").then((function(t) {
                        var n;
                        (n = t.EmbedLink).setupAll.apply(n, e)
                    }))
                },
                f = (0, a.throttle)(1e3, (function() {
                    for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
                    h.apply(void 0, e), (0, r.onDocReady)((function() {
                        h.apply(void 0, e), (0, i.doTimeout)("maybe_load_embed_links_5000", h, 5e3)
                    }))
                }));
            c.Wistia.EmbedLink = {}, c.Wistia.EmbedLink.setupAll = h
        },
        777: (t, e, n) => {
            var r = n(2),
                i = n(44),
                o = n(34),
                a = n(53),
                s = n(3),
                c = n(73),
                u = n(46),
                l = n(16),
                h = n(778),
                f = n(135);

            function p(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function d(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? p(Object(n), !0).forEach((function(e) {
                        w(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function v(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, S(r.key), r)
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
                    }(t, g() ? Reflect.construct(e, n || [], _(t).constructor) : e.apply(t, n))
            }

            function g() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (g = function() {
                    return !!t
                })()
            }

            function y() {
                return y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function(t, e, n) {
                    var r = function(t, e) {
                        for (; !{}.hasOwnProperty.call(t, e) && null !== (t = _(t)););
                        return t
                    }(t, e);
                    if (r) {
                        var i = Object.getOwnPropertyDescriptor(r, e);
                        return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value
                    }
                }, y.apply(null, arguments)
            }

            function _(t) {
                return _ = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, _(t)
            }

            function b(t, e) {
                return b = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, b(t, e)
            }

            function w(t, e, n) {
                return (e = S(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function S(t) {
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
            var T = "postRoll-v2-cta",
                k = function(t) {
                    function e(t, n) {
                        var r, a;
                        return function(t, e) {
                            if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                        }(this, e), w(a = m(this, e, [t, n]), "nextVideo", (function() {
                            return a.video.nextVideo()
                        })), w(a, "translateColor", (function() {
                            var t = new o.Color("#303030").alpha(a._style.backgroundOpacity || .91),
                                e = new o.Color(t);
                            return {
                                rgbaBackgroundColor: t.toRgba(),
                                rgbaHoverColor: e.alpha(.41).toRgba()
                            }
                        })), w(a, "onClickSkip", (function() {
                            "beforeplay" === a.video.state() && a.video.unsuspend({
                                state: "playing",
                                time: a.video.time()
                            }), a.hide(), (0, i.isMouseDownRecently)() || a.video._focusNextVisibleElem()
                        })), w(a, "onClickRewatch", (function() {
                            a.video.unsuspend({
                                time: 0,
                                state: "playing"
                            }), a.hide(), (0, i.isMouseDownRecently)() || a.video._focusNextVisibleElem()
                        })), w(a, "logConversionEvent", (function() {
                            var t = d(d({}, a.formatConversionData()), {}, {
                                converted: !0,
                                link: a._link
                            });
                            a.video.trigger("conversion-postRoll", t), a.video._tracker.logConversionOpportunity(t)
                        })), a.pluginName = "postRoll-v2", a.video = t, a.options = n, a.updateFromOptions(a.options), a._conversionOpportunityType = "callToAction", a._isVisible = !1, a.unbinds = [], a.boundEnsurePauseOnShowInCustomizePreviewMode = a.ensurePauseOnShowInCustomizePreviewMode.bind(a), null == a._time && (a._time = "end"), a._style || (a._style = {}), (null === (r = a._scriptTags) || void 0 === r ? void 0 : r.length) > 0 && (0, c.countMetric)("cta-scripts", 1, {
                            script: a._scriptTags,
                            url: window.location.href
                        }), a.video.defineOverlay(T, a.getOptionsForDefineOverlay()), a.setupOverlayBindings(), a
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
                    }(e, t), n = e, p = [{
                        key: "renderCta",
                        value: function() {
                            var t = this;
                            return new Promise((function(e) {
                                var n = {
                                        altText: t._altText,
                                        ctaType: t._ctaType,
                                        text: t._text,
                                        raw: t._raw,
                                        image: t._image,
                                        time: t._time,
                                        rewatch: t._rewatch,
                                        autoSize: t._autoSize,
                                        style: t._style,
                                        link: t._link
                                    },
                                    i = t.video,
                                    o = i.controls.modalOverlay.props.isMostRecentFocusViaMouse;
                                (0, u.dynamicImport)("assets/external/interFontFace.js").then((function() {
                                    (0, r.render)((0, r.h)(h.CTAOverlay, {
                                        options: n,
                                        playerLanguage: i.playerLanguage(),
                                        videoHeight: i.videoHeight(),
                                        videoWidth: i.videoWidth(),
                                        isMostRecentFocusViaMouse: o,
                                        onClickSkip: t.onClickSkip,
                                        onClickRewatch: t.onClickRewatch,
                                        nextVideo: t.nextVideo,
                                        logConversionEvent: t.logConversionEvent,
                                        hoverColor: t.translateColor().rgbaHoverColor,
                                        uiContainer: i.uiContainer
                                    }), t.rootElem), t.reactMounts = [t.rootElem], e()
                                }))
                            }))
                        }
                    }, {
                        key: "customizePreview",
                        value: function(t) {
                            var e = this;
                            if (this._isInCustomizePreviewMode = !0, t.anyChanged(["plugin[postRoll-v2]", "plugin[postRoll-v1]", "ephemeral[ui][callToAction]"])) {
                                this.resetOverLayType();
                                var n, r = d({}, t.currentValue("plugin[postRoll-v2]") || t.currentValue("plugin[postRoll-v1]") || {
                                    on: !1
                                });
                                this._isEnabled = !1 !== r.on, "text" === r.ctaType && (r.text || (r.text = "Here's a link to click! →"), r.link || (r.link = "https://wistia.com")), this.updateFromOptions(r), (t.changed("plugin[postRoll-v2][time]") || t.changed("plugin[postRoll-v1][time]")) && (null === (n = this.unbinds) || void 0 === n || n.map((function(t) {
                                    return t()
                                })), this.unbinds = [], this.setupOverlayBindings()), t.currentValue("ephemeral[ui][callToAction][isOpen]") && this._isEnabled ? this.video.ready((function() {
                                    e.video.time(e.formatStringToTime(r.time)).then((function() {
                                        e._isEnabled && !e._isSuppressed && e.show()
                                    }))
                                })) : this.hide()
                            }
                        }
                    }, {
                        key: "suppress",
                        value: function() {
                            return this._isSuppressed = !0, this.hide()
                        }
                    }, {
                        key: "unsuppress",
                        value: function() {
                            this._isSuppressed = !1
                        }
                    }, {
                        key: "formatStringToTime",
                        value: function(t) {
                            return "before" === t ? 0 : "end" === t ? this.video.duration() : t
                        }
                    }, {
                        key: "getOptionsForDefineOverlay",
                        value: function() {
                            var t = this;
                            return {
                                mount: function(e) {
                                    return t.rootElem = e, t.renderCta().then((function() {
                                        t.possiblyExecuteScriptTags(!0)
                                    }))
                                },
                                onControlPropsUpdated: function(e) {
                                    e.videoWidth !== this.props.videoWidth && t.renderCta(), e.playerLanguage && e.playerLanguage.code !== this.props.playerLanguage.code && t.renderCta()
                                },
                                style: d(d({}, t._style), {}, {
                                    backgroundColor: t.translateColor().rgbaBackgroundColor
                                }),
                                type: "modal",
                                transition: "fade"
                            }
                        }
                    }, {
                        key: "setupOverlayBindings",
                        value: function() {
                            var t = this;
                            this.video.embedded((function() {
                                var e = t._time;
                                "before" === e && "beforeplay" === t.video.state() ? t.show() : "end" === e ? t.unbinds.push(t.video.on("end", (function() {
                                    t.show()
                                }))) : t.unbinds.push(t.video.on("crosstime", t._time, (function() {
                                    t.show()
                                }))), t.unbinds.push(t.video.on("beforerebuild", (function() {
                                    t._isVisible = !1
                                })))
                            }))
                        }
                    }, {
                        key: "hide",
                        value: function() {
                            return this._isVisible = !1, this.video.cancelOverlay(T)
                        }
                    }, {
                        key: "sanitizeUrl",
                        value: function(t) {
                            var e = (0, a.unescapeHtml)(t);
                            return /^(https?|mailto|ftp|tel|#|\/)/.test(e) ? e : "http://".concat(e)
                        }
                    }, {
                        key: "sanitizeRaw",
                        value: function(t) {
                            return this._previousUnstrippedRaw = this._unstrippedRaw || t, this._unstrippedRaw = t, this._scriptTags = (0, s.getScriptTags)(t), this._cssTags = (0, s.getCssTags)(t), (0, s.removeCssTags)((0, s.removeScriptTags)(t))
                        }
                    }, {
                        key: "formatConversionData",
                        value: function() {
                            var t;
                            return t = "end" === this._time ? this.video.duration() : "before" === this._time ? 0 : this._time, {
                                co_key: this._conversionOpportunityKey,
                                co_type: this._conversionOpportunityType,
                                time: t
                            }
                        }
                    }, {
                        key: "logConversionOpportunity",
                        value: function() {
                            this.video._tracker.logConversionOpportunity(this.formatConversionData())
                        }
                    }, {
                        key: "ensurePauseOnShowInCustomizePreviewMode",
                        value: function() {
                            this._isVisible && this.video.pause(), this.video.off("play", this.boundEnsurePauseOnShowInCustomizePreviewMode)
                        }
                    }, {
                        key: "show",
                        value: function() {
                            var t = this;
                            if (this._isSuppressed) return Promise.resolve();
                            if (this._isInCustomizePreviewMode) {
                                this.video.pause();
                                var e = this.video.on("play", this.boundEnsurePauseOnShowInCustomizePreviewMode);
                                this.unbinds.push(e)
                            }
                            return this.video.requestOverlay(T, {
                                shouldSuspendPlayer: !this._isInCustomizePreviewMode
                            }).then((function() {
                                return t.renderCta()
                            })).then((function() {
                                t._isVisible || (t._isVisible = !0, t.logConversionOpportunity()), t.possiblyExecuteScriptTags(), t.rootElem && ((0, f.maybeLoadAndSetupEmbedLinksThrottled)(t.rootElem), l.Wistia.plugin._allow3rdParty(t.video.embedOptions()) || (0, s.elemStripEventAttributes)(t.rootElem))
                            }))
                        }
                    }, {
                        key: "possiblyExecuteScriptTags",
                        value: function(t) {
                            var e = this._unstrippedRaw !== this._previousUnstrippedRaw || t,
                                n = this._scriptTags && this._scriptTags.length > 0,
                                r = this._cssTags && this._cssTags.length > 0;
                            this._raw && (n || r) && e && l.Wistia.plugin._allow3rdParty(this.video.embedOptions()) && ((0, s.execScriptTags)(this._scriptTags || []), (0, s.execCssTags)(this._cssTags || []))
                        }
                    }, {
                        key: "remove",
                        value: function() {
                            var t, n, r, i, o;
                            this.unbinds.map((function(t) {
                                return t()
                            })), this.unbinds = [], this.video.cancelOverlay(T), this._isInCustomizePreviewMode = !1, (t = e, n = "remove", r = this, o = y(_(1 & (i = 3) ? t.prototype : t), n, r), 2 & i && "function" == typeof o ? function(t) {
                                return o.apply(r, t)
                            } : o)([])
                        }
                    }, {
                        key: "resetOverLayType",
                        value: function() {
                            this._text = void 0, this._image = void 0, this._html = void 0, this._raw = void 0
                        }
                    }, {
                        key: "updateText",
                        value: function(t) {
                            this.resetOverLayType(), this._text = t, this.show()
                        }
                    }, {
                        key: "updateImage",
                        value: function(t) {
                            this.resetOverLayType(), this._image = E(t), this.show()
                        }
                    }, {
                        key: "updateRaw",
                        value: function(t) {
                            this.resetOverLayType(), this._raw = this.sanitizeRaw(t), this.show()
                        }
                    }, {
                        key: "updateUrl",
                        value: function(t) {
                            this._link = this.sanitizeUrl(t), this.show()
                        }
                    }, {
                        key: "showRewatch",
                        value: function() {
                            this._rewatch = !0, this.show()
                        }
                    }, {
                        key: "hideRewatch",
                        value: function() {
                            this._rewatch = !1, this.show()
                        }
                    }, {
                        key: "updateFromOptions",
                        value: function(t) {
                            for (var e in t) this.updateFromOption("_".concat(e), t[e])
                        }
                    }, {
                        key: "updateFromOption",
                        value: function(t, e) {
                            switch (t) {
                                case "_link":
                                    this._link = this.sanitizeUrl(e);
                                    break;
                                case "_raw":
                                    this._raw = this.sanitizeRaw(e);
                                    break;
                                case "_image":
                                    this._image = E(e);
                                    break;
                                case "_backgroundOpacity":
                                    this._style = d(d({}, this._style), {}, {
                                        backgroundOpacity: e
                                    });
                                    break;
                                default:
                                    this[t] = e
                            }
                        }
                    }], p && v(n.prototype, p), g && v(n, g), Object.defineProperty(n, "prototype", {
                        writable: !1
                    }), n;
                    var n, p, g
                }(l.Wistia.Plugin.Base),
                E = function(t) {
                    if (t) {
                        var e = new Image;
                        return e.src = t, e
                    }
                };
            l.Wistia.plugin("postRoll-v2", (function(t, e) {
                return new k(t, e)
            }))
        },
        778: (t, e, n) => {
            n.d(e, {
                CTAOverlay: () => _
            });
            var r = n(2),
                i = n(28),
                o = n(44),
                a = n(3),
                s = n(45),
                c = n(67),
                u = n(779);

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

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(n), !0).forEach((function(e) {
                        g(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : l(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function f(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, y(r.key), r)
                }
            }

            function p(t, e, n) {
                return e = v(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, d() ? Reflect.construct(e, n || [], v(t).constructor) : e.apply(t, n))
            }

            function d() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (d = function() {
                    return !!t
                })()
            }

            function v(t) {
                return v = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, v(t)
            }

            function m(t, e) {
                return m = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, m(t, e)
            }

            function g(t, e, n) {
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
            var _ = function(t) {
                function e(t) {
                    var n;
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), g(n = p(this, e, [t]), "setSkipSVGFocusState", (function(t) {
                        n.setState({
                            skipSvgHasFocus: t
                        })
                    })), g(n, "setRewatchSVGFocusState", (function(t) {
                        n.setState({
                            rewatchSvgHasFocus: t
                        })
                    })), g(n, "setContainerHasFocus", (function(t) {
                        n.setState({
                            containerHasFocus: t
                        })
                    })), n.state = {
                        hovering: !1,
                        skipSvgHasFocus: !1,
                        rewatchSvgHasFocus: !1,
                        containerHasFocus: !1
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
                    }), e && m(t, e)
                }(e, t), n = e, l = [{
                    key: "componentDidMount",
                    value: function() {
                        var t = this;
                        "raw" === this.deriveCtaTypeFromOptions(this.props.options) && (0, a.elemIsInside)(document.activeElement, this.props.uiContainer) && setTimeout((function() {
                            t.overlayRef.focus()
                        }), 0)
                    }
                }, {
                    key: "deriveCtaTypeFromOptions",
                    value: function(t) {
                        return "raw" === t.ctaType && t.raw ? "raw" : "text" === t.ctaType && t.text ? "text" : "image" === t.ctaType && t.image ? "image" : !t.ctaType && (t.raw || t.text || t.image ? t.raw || !t.text && !t.image ? "raw" : t.image ? "image" : "text" : void 0)
                    }
                }, {
                    key: "fontSizing",
                    value: function() {
                        var t = 30,
                            e = this.props,
                            n = e.videoHeight,
                            r = e.videoWidth;
                        if (this.props.options.autoSize) {
                            var i = r / n < 1 ? 58 : 72;
                            t = Math.round(this.props.videoHeight / 9), t = Math.min(i, Math.max(10, t))
                        }
                        return t
                    }
                }, {
                    key: "fontFamily",
                    value: function() {
                        return {
                            fontFamily: i.interFontFamily
                        }
                    }
                }, {
                    key: "containerStyles",
                    value: function() {
                        var t = this.fontFamily();
                        return h({
                            height: "100%",
                            backgroundColor: this.state.hovering ? this.props.hoverColor : "",
                            boxShadow: this.state.containerHasFocus && !this.props.isMostRecentFocusViaMouse ? "0 0 0 2px #fff inset" : "none",
                            color: "#ffffff",
                            fontSize: "".concat(this.fontSizing(), "px"),
                            lineHeight: "1.2em",
                            position: "relative",
                            textAlign: "center",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }, t)
                    }
                }, {
                    key: "skipOrRewatchStyles",
                    value: function() {
                        return {
                            bottom: "".concat(this.fontSizing() / 3, "px"),
                            boxSizing: "border-box",
                            cursor: "pointer",
                            padding: "".concat(this.fontSizing() / 6, "px"),
                            position: "absolute"
                        }
                    }
                }, {
                    key: "rewatchSVG",
                    value: function() {
                        var t = this;
                        if (this.props.options.rewatch && "end" === this.props.options.time) {
                            var e = "".concat(this.fontSizing() / 2, "px");
                            return (0, r.h)(c.CustomEventsWrapper, {
                                tagName: "button",
                                onClick: this.props.onClickRewatch,
                                style: h(h({}, this.skipOrRewatchStyles()), {}, {
                                    left: "".concat(e),
                                    border: this.state.rewatchSvgHasFocus ? "2px solid white" : "2px solid transparent"
                                }),
                                className: "w-css-reset w-vulcan-v2-button",
                                onfocusin: function() {
                                    return t.setRewatchSVGFocusState(!(0, o.isMouseDown)())
                                },
                                onfocusout: function() {
                                    return t.setRewatchSVGFocusState(!1)
                                }
                            }, (0, r.h)("span", {
                                style: h(h({}, this.fontFamily()), {}, {
                                    fontSize: "".concat(e)
                                })
                            }, "↺ ", (0, s.getTranslation)(this.props.playerLanguage.code, "REWATCH")))
                        }
                    }
                }, {
                    key: "skipSVG",
                    value: function() {
                        var t = this;
                        if (Boolean(this.props.nextVideo()) || "end" !== this.props.options.time) {
                            var e = "".concat(this.fontSizing() / 2, "px");
                            return (0, r.h)(c.CustomEventsWrapper, {
                                tagName: "button",
                                onClick: this.props.onClickSkip,
                                style: h(h({}, this.skipOrRewatchStyles()), {}, {
                                    right: "".concat(e),
                                    border: this.state.skipSvgHasFocus ? "2px solid white" : "2px solid transparent"
                                }),
                                className: "w-css-reset w-vulcan-v2-button",
                                onfocusin: function() {
                                    return t.setSkipSVGFocusState(!(0, o.isMouseDown)())
                                },
                                onfocusout: function() {
                                    return t.setSkipSVGFocusState(!1)
                                }
                            }, (0, r.h)("span", {
                                style: h(h({}, this.fontFamily()), {}, {
                                    fontSize: "".concat(e)
                                })
                            }, (0, s.getTranslation)(this.props.playerLanguage.code, "SKIP"), " →"))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = h({}, this.props.options),
                            n = this.deriveCtaTypeFromOptions(e);
                        return (0, r.h)("div", {
                            style: this.containerStyles(),
                            onBlur: function() {
                                return t.setContainerHasFocus(!1)
                            },
                            onFocus: function() {
                                return t.setContainerHasFocus(!0)
                            },
                            tabIndex: "raw" === n ? 0 : -1,
                            ref: function(e) {
                                return t.overlayRef = e
                            }
                        }, (0, r.h)(u.CTAContent, {
                            ctaType: n,
                            fontFamily: this.fontFamily(),
                            fontSize: this.fontSizing(),
                            isMostRecentFocusViaMouse: this.props.isMostRecentFocusViaMouse,
                            logConversionEvent: this.props.logConversionEvent,
                            options: this.props.options,
                            videoHeight: this.props.videoHeight,
                            videoWidth: this.props.videoWidth,
                            uiContainer: this.props.uiContainer
                        }), this.rewatchSVG(), this.skipSVG())
                    }
                }], l && f(n.prototype, l), d && f(n, d), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, l, d
            }(r.Component)
        },
        779: (t, e, n) => {
            n.d(e, {
                CTAContent: () => m
            });
            var r = n(2),
                i = n(3),
                o = n(780);

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
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function c(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? s(Object(n), !0).forEach((function(e) {
                        d(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }

            function u(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, v(r.key), r)
                }
            }

            function l(t, e, n) {
                return e = f(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, h() ? Reflect.construct(e, n || [], f(t).constructor) : e.apply(t, n))
            }

            function h() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (h = function() {
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

            function d(t, e, n) {
                return (e = v(e)) in t ? Object.defineProperty(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }

            function v(t) {
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
            var m = function(t) {
                function e() {
                    var t;
                    ! function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e);
                    for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                    return d(t = l(this, e, [].concat(r)), "setHoverState", (function(e) {
                        t.setState({
                            hovering: e
                        })
                    })), d(t, "setHasFocus", (function(e) {
                        t.setState({
                            hasFocus: e
                        })
                    })), d(t, "resizeOnImageLoad", (function() {
                        t.ctaImage && t.forceUpdate()
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
                    }), e && p(t, e)
                }(e, t), n = e, s = [{
                    key: "componentDidMount",
                    value: function() {
                        var t, e = this.props.ctaType;
                        "raw" !== e && (0, i.elemIsInside)(document.activeElement, this.props.uiContainer) && ("text" === e ? t = this.overlayTextRef : "image" === e && (t = this.overlayImageRef), setTimeout((function() {
                            var e;
                            null === (e = t) || void 0 === e || e.focus()
                        }), 0))
                    }
                }, {
                    key: "ctaContentStyles",
                    value: function() {
                        return {
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            height: "100%",
                            width: "100%",
                            textDecoration: "none",
                            boxShadow: this.state.hasFocus && !this.props.isMostRecentFocusViaMouse ? "0 0 0 2px #fff inset" : "none",
                            boxSizing: "border-box"
                        }
                    }
                }, {
                    key: "imageStyles",
                    value: function() {
                        if (this.ctaImage) {
                            var t = this.ctaImage,
                                e = t.naturalWidth,
                                n = t.naturalHeight,
                                r = this.props,
                                i = r.videoWidth,
                                o = r.videoHeight;
                            if (n < o && e < i) {
                                var a = Math.min(i / e, o / n);
                                return {
                                    width: "".concat(e * a, "px"),
                                    height: "".concat(n * a, "px")
                                }
                            }
                            return {
                                maxWidth: "100%",
                                maxHeight: "100%"
                            }
                        }
                    }
                }, {
                    key: "textStyle",
                    value: function() {
                        return {
                            textAlign: "center",
                            lineHeight: "1.2em",
                            fontWeight: 100,
                            width: "80%",
                            color: "white",
                            fontSize: "".concat(this.props.fontSize, "px")
                        }
                    }
                }, {
                    key: "renderText",
                    value: function() {
                        var t = this.props.options.text.replace(/<br\/>/g, "\n").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/\n/g, "<br/>");
                        return (0, r.h)("div", {
                            className: "w-css-reset-tree",
                            style: c(c({}, this.props.fontFamily), this.textStyle()),
                            dangerouslySetInnerHTML: {
                                __html: t || ""
                            }
                        })
                    }
                }, {
                    key: "renderImage",
                    value: function() {
                        var t = this;
                        if (this.props.options.image.src) return (0, r.h)("img", {
                            className: "w-css-reset-tree",
                            src: this.props.options.image.src,
                            ref: function(e) {
                                return t.ctaImage = e
                            },
                            style: this.imageStyles(),
                            onLoad: this.resizeOnImageLoad,
                            alt: this.props.options.altText || null
                        })
                    }
                }, {
                    key: "renderRaw",
                    value: function() {
                        return (0, r.h)("div", {
                            dangerouslySetInnerHTML: {
                                __html: this.props.options.raw
                            }
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this,
                            e = this.props,
                            n = e.options,
                            i = e.ctaType,
                            s = n.link ? "a" : "span",
                            c = {
                                href: n.link,
                                target: "_blank",
                                class: "w-css-reset",
                                style: this.ctaContentStyles(),
                                onClick: n.link ? this.props.logConversionEvent : null,
                                onMouseEnter: function() {
                                    return t.setHoverState(!0)
                                },
                                onMouseLeave: function() {
                                    return t.setHoverState(!1)
                                },
                                onFocus: function() {
                                    return t.setHasFocus(!0)
                                },
                                onBlur: function() {
                                    return t.setHasFocus(!1)
                                }
                            };
                        return (0, r.h)("div", {
                            style: {
                                width: "100%",
                                height: "100%"
                            }
                        }, "text" === i && (0, r.h)(s, a({}, c, {
                            ref: function(e) {
                                return t.overlayTextRef = e
                            }
                        }), this.renderText()), "image" === i && (0, r.h)(s, a({}, c, {
                            ref: function(e) {
                                return t.overlayImageRef = e
                            }
                        }), this.renderImage()), "raw" === i && (0, r.h)(o.CTARawHtml, {
                            raw: this.props.options.raw
                        }))
                    }
                }], s && u(n.prototype, s), h && u(n, h), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, s, h
            }(r.Component)
        },
        780: (t, e, n) => {
            n.d(e, {
                CTARawHtml: () => l
            });
            var r = n(2);

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
                return e = c(e),
                    function(t, e) {
                        if (e && ("object" == typeof e || "function" == typeof e)) return e;
                        if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
                        return function(t) {
                            if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return t
                        }(t)
                    }(t, s() ? Reflect.construct(e, n || [], c(t).constructor) : e.apply(t, n))
            }

            function s() {
                try {
                    var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
                } catch (t) {}
                return (s = function() {
                    return !!t
                })()
            }

            function c(t) {
                return c = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
                    return t.__proto__ || Object.getPrototypeOf(t)
                }, c(t)
            }

            function u(t, e) {
                return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
                    return t.__proto__ = e, t
                }, u(t, e)
            }
            var l = function(t) {
                function e() {
                    return function(t, e) {
                        if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), a(this, e, arguments)
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
                    }), e && u(t, e)
                }(e, t), n = e, (o = [{
                    key: "shouldComponentUpdate",
                    value: function(t) {
                        return !(this.props.raw === t.raw)
                    }
                }, {
                    key: "rawContainerStyles",
                    value: function() {
                        return {
                            alignContent: "center",
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            justifyContent: "center"
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return (0, r.h)("div", {
                            style: this.rawContainerStyles(),
                            dangerouslySetInnerHTML: {
                                __html: this.props.raw
                            }
                        })
                    }
                }]) && i(n.prototype, o), s && i(n, s), Object.defineProperty(n, "prototype", {
                    writable: !1
                }), n;
                var n, o, s
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
__webpack_require__(777);
//# sourceMappingURL=postRoll-v2.js.map