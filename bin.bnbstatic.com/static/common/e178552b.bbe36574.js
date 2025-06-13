"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "eb7bdadd-e3a5-51e0-aba1-f232aa3e3f84")
    } catch (e) {}
}();
(self.webpackChunkreferral_ui = self.webpackChunkreferral_ui || []).push([
    [5994], {
        "7vYB": (e, n, t) => {
            t.d(n, {
                Ay: () => K,
                BE: () => z
            });
            var r = t("DTvD");

            function i(e, n, t, r) {
                return new(t || (t = Promise))((function(i, u) {
                    function o(e) {
                        try {
                            c(r.next(e))
                        } catch (n) {
                            u(n)
                        }
                    }

                    function a(e) {
                        try {
                            c(r.throw(e))
                        } catch (n) {
                            u(n)
                        }
                    }

                    function c(e) {
                        var n;
                        e.done ? i(e.value) : (n = e.value, n instanceof t ? n : new t((function(e) {
                            e(n)
                        }))).then(o, a)
                    }
                    c((r = r.apply(e, n || [])).next())
                }))
            }

            function u(e, n) {
                var t, r, i, u, o = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return u = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" === typeof Symbol && (u[Symbol.iterator] = function() {
                    return this
                }), u;

                function a(u) {
                    return function(a) {
                        return function(u) {
                            if (t) throw new TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (t = 1, r && (i = 2 & u[0] ? r.return : u[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, u[1])).done) return i;
                                switch (r = 0, i && (u = [2 & u[0], i.value]), u[0]) {
                                    case 0:
                                    case 1:
                                        i = u;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: u[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, r = u[1], u = [0];
                                        continue;
                                    case 7:
                                        u = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(i = (i = o.trys).length > 0 && i[i.length - 1]) && (6 === u[0] || 2 === u[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === u[0] && (!i || u[1] > i[0] && u[1] < i[3])) {
                                            o.label = u[1];
                                            break
                                        }
                                        if (6 === u[0] && o.label < i[1]) {
                                            o.label = i[1], i = u;
                                            break
                                        }
                                        if (i && o.label < i[2]) {
                                            o.label = i[2], o.ops.push(u);
                                            break
                                        }
                                        i[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                u = n.call(e, o)
                            } catch (a) {
                                u = [6, a], r = 0
                            } finally {
                                t = i = 0
                            }
                            if (5 & u[0]) throw u[1];
                            return {
                                value: u[0] ? u[1] : void 0,
                                done: !0
                            }
                        }([u, a])
                    }
                }
            }
            var o, a = function() {},
                c = a(),
                f = Object,
                s = function(e) {
                    return e === c
                },
                l = function(e) {
                    return "function" == typeof e
                },
                d = function(e, n) {
                    return f.assign({}, e, n)
                },
                v = "undefined",
                h = new WeakMap,
                g = 0,
                p = function(e) {
                    var n, t, r = typeof e,
                        i = e && e.constructor,
                        u = i == Date;
                    if (f(e) !== e || u || i == RegExp) n = u ? e.toJSON() : "symbol" == r ? e.toString() : "string" == r ? JSON.stringify(e) : "" + e;
                    else {
                        if (n = h.get(e)) return n;
                        if (n = ++g + "~", h.set(e, n), i == Array) {
                            for (n = "@", t = 0; t < e.length; t++) n += p(e[t]) + ",";
                            h.set(e, n)
                        }
                        if (i == f) {
                            n = "#";
                            for (var o = f.keys(e).sort(); !s(t = o.pop());) s(e[t]) || (n += t + ":" + p(e[t]) + ",");
                            h.set(e, n)
                        }
                    }
                    return n
                },
                b = !0,
                y = typeof document != v,
                w = window.addEventListener ? window.addEventListener.bind(window) : a,
                m = y ? document.addEventListener.bind(document) : a,
                E = window.removeEventListener ? window.removeEventListener.bind(window) : a,
                R = y ? document.removeEventListener.bind(document) : a,
                k = {
                    isOnline: function() {
                        return b
                    },
                    isVisible: function() {
                        var e = y && document.visibilityState;
                        return s(e) || "hidden" !== e
                    }
                },
                O = {
                    initFocus: function(e) {
                        return m("visibilitychange", e), w("focus", e),
                            function() {
                                R("visibilitychange", e), E("focus", e)
                            }
                    },
                    initReconnect: function(e) {
                        var n = function() {
                                b = !0, e()
                            },
                            t = function() {
                                b = !1
                            };
                        return w("online", n), w("offline", t),
                            function() {
                                E("online", n), E("offline", t)
                            }
                    }
                },
                T = "Deno" in window,
                S = function(e) {
                    return typeof window.requestAnimationFrame != v ? window.requestAnimationFrame(e) : setTimeout(e, 1)
                },
                V = T ? r.useEffect : r.useLayoutEffect,
                C = "undefined" !== typeof navigator && navigator.connection,
                D = !T && C && (["slow-2g", "2g"].includes(C.effectiveType) || C.saveData),
                x = function(e) {
                    if (l(e)) try {
                        e = e()
                    } catch (t) {
                        e = ""
                    }
                    var n = [].concat(e);
                    return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? p(e) : "", n, e ? "$swr$" + e : ""]
                },
                I = new WeakMap,
                L = function(e, n, t, r, i, u, o) {
                    void 0 === o && (o = !0);
                    var a = I.get(e),
                        c = a[0],
                        f = a[1],
                        s = a[3],
                        l = c[n],
                        d = f[n];
                    if (o && d)
                        for (var v = 0; v < d.length; ++v) d[v](t, r, i);
                    return u && (delete s[n], l && l[0]) ? l[0](2).then((function() {
                        return e.get(n)
                    })) : e.get(n)
                },
                P = 0,
                A = function() {
                    return ++P
                },
                F = function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    return i(void 0, void 0, void 0, (function() {
                        var n, t, r, i, o, a, f, v, h, g, p, b, y, w, m, E, R, k, O, T, S;
                        return u(this, (function(u) {
                            switch (u.label) {
                                case 0:
                                    if (n = e[0], t = e[1], r = e[2], i = e[3], a = !!s((o = "boolean" === typeof i ? {
                                            revalidate: i
                                        } : i || {}).populateCache) || o.populateCache, f = !1 !== o.revalidate, v = !1 !== o.rollbackOnError, h = o.optimisticData, g = x(t), p = g[0], b = g[2], !p) return [2];
                                    if (y = I.get(n), w = y[2], e.length < 3) return [2, L(n, p, n.get(p), c, c, f, !0)];
                                    if (m = r, R = A(), w[p] = [R, 0], k = !s(h), O = n.get(p), k && (T = l(h) ? h(O) : h, n.set(p, T), L(n, p, T)), l(m)) try {
                                        m = m(n.get(p))
                                    } catch (V) {
                                        E = V
                                    }
                                    return m && l(m.then) ? [4, m.catch((function(e) {
                                        E = e
                                    }))] : [3, 2];
                                case 1:
                                    if (m = u.sent(), R !== w[p][0]) {
                                        if (E) throw E;
                                        return [2, m]
                                    }
                                    E && k && v && (a = !0, m = O, n.set(p, O)), u.label = 2;
                                case 2:
                                    return a && (E || (l(a) && (m = a(m, O)), n.set(p, m)), n.set(b, d(n.get(b), {
                                        error: E
                                    }))), w[p][1] = A(), [4, L(n, p, m, E, c, f, !!a)];
                                case 3:
                                    if (S = u.sent(), E) throw E;
                                    return [2, a ? S : m]
                            }
                        }))
                    }))
                },
                M = function(e, n) {
                    for (var t in e) e[t][0] && e[t][0](n)
                },
                W = function(e, n) {
                    if (!I.has(e)) {
                        var t = d(O, n),
                            r = {},
                            i = F.bind(c, e),
                            u = a;
                        if (I.set(e, [r, {}, {}, {}, i]), !T) {
                            var o = t.initFocus(setTimeout.bind(c, M.bind(c, r, 0))),
                                f = t.initReconnect(setTimeout.bind(c, M.bind(c, r, 1)));
                            u = function() {
                                o && o(), f && f(), I.delete(e)
                            }
                        }
                        return [e, i, u]
                    }
                    return [e, I.get(e)[4]]
                },
                q = W(new Map),
                B = q[0],
                J = q[1],
                N = d({
                    onLoadingSlow: a,
                    onSuccess: a,
                    onError: a,
                    onErrorRetry: function(e, n, t, r, i) {
                        var u = t.errorRetryCount,
                            o = i.retryCount,
                            a = ~~((Math.random() + .5) * (1 << (o < 8 ? o : 8))) * t.errorRetryInterval;
                        !s(u) && o > u || setTimeout(r, a, i)
                    },
                    onDiscarded: a,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: D ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: D ? 5e3 : 3e3,
                    compare: function(e, n) {
                        return p(e) == p(n)
                    },
                    isPaused: function() {
                        return !1
                    },
                    cache: B,
                    mutate: J,
                    fallback: {}
                }, k),
                $ = function(e, n) {
                    var t = d(e, n);
                    if (n) {
                        var r = e.use,
                            i = e.fallback,
                            u = n.use,
                            o = n.fallback;
                        r && u && (t.use = r.concat(u)), i && o && (t.fallback = d(i, o))
                    }
                    return t
                },
                _ = (0, r.createContext)({}),
                j = function(e) {
                    return l(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}]
                },
                G = function() {
                    return d(N, (0, r.useContext)(_))
                },
                H = function(e, n, t) {
                    var r = n[e] || (n[e] = []);
                    return r.push(t),
                        function() {
                            var e = r.indexOf(t);
                            e >= 0 && (r[e] = r[r.length - 1], r.pop())
                        }
                },
                Y = {
                    dedupe: !0
                },
                z = f.defineProperty((function(e) {
                    var n = e.value,
                        t = $((0, r.useContext)(_), n),
                        i = n && n.provider,
                        u = (0, r.useState)((function() {
                            return i ? W(i(t.cache || B), n) : c
                        }))[0];
                    return u && (t.cache = u[0], t.mutate = u[1]), V((function() {
                        return u ? u[2] : c
                    }), []), (0, r.createElement)(_.Provider, d(e, {
                        value: t
                    }))
                }), "default", {
                    value: N
                }),
                K = (o = function(e, n, t) {
                    var o = t.cache,
                        a = t.compare,
                        f = t.fallbackData,
                        v = t.suspense,
                        h = t.revalidateOnMount,
                        g = t.refreshInterval,
                        p = t.refreshWhenHidden,
                        b = t.refreshWhenOffline,
                        y = I.get(o),
                        w = y[0],
                        m = y[1],
                        E = y[2],
                        R = y[3],
                        k = x(e),
                        O = k[0],
                        C = k[1],
                        D = k[2],
                        P = (0, r.useRef)(!1),
                        M = (0, r.useRef)(!1),
                        W = (0, r.useRef)(O),
                        q = (0, r.useRef)(n),
                        B = (0, r.useRef)(t),
                        J = function() {
                            return B.current
                        },
                        N = function() {
                            return J().isVisible() && J().isOnline()
                        },
                        $ = function(e) {
                            return o.set(D, d(o.get(D), e))
                        },
                        _ = o.get(O),
                        j = s(f) ? t.fallback[O] : f,
                        G = s(_) ? j : _,
                        z = o.get(D) || {},
                        K = z.error,
                        Q = !P.current,
                        U = function() {
                            return Q && !s(h) ? h : !J().isPaused() && (v ? !s(G) && t.revalidateIfStale : s(G) || t.revalidateIfStale)
                        },
                        X = !(!O || !n) && (!!z.isValidating || Q && U()),
                        Z = function(e, n) {
                            var t = (0, r.useState)({})[1],
                                i = (0, r.useRef)(e),
                                u = (0, r.useRef)({
                                    data: !1,
                                    error: !1,
                                    isValidating: !1
                                }),
                                o = (0, r.useCallback)((function(e) {
                                    var r = !1,
                                        o = i.current;
                                    for (var a in e) {
                                        var c = a;
                                        o[c] !== e[c] && (o[c] = e[c], u.current[c] && (r = !0))
                                    }
                                    r && !n.current && t({})
                                }), []);
                            return V((function() {
                                i.current = e
                            })), [i, u.current, o]
                        }({
                            data: G,
                            error: K,
                            isValidating: X
                        }, M),
                        ee = Z[0],
                        ne = Z[1],
                        te = Z[2],
                        re = (0, r.useCallback)((function(e) {
                            return i(void 0, void 0, void 0, (function() {
                                var n, r, i, f, d, v, h, g, p, b, y, w, m;
                                return u(this, (function(u) {
                                    switch (u.label) {
                                        case 0:
                                            if (n = q.current, !O || !n || M.current || J().isPaused()) return [2, !1];
                                            f = !0, d = e || {}, v = !R[O] || !d.dedupe, h = function() {
                                                return !M.current && O === W.current && P.current
                                            }, g = function() {
                                                var e = R[O];
                                                e && e[1] === i && delete R[O]
                                            }, p = {
                                                isValidating: !1
                                            }, b = function() {
                                                $({
                                                    isValidating: !1
                                                }), h() && te(p)
                                            }, $({
                                                isValidating: !0
                                            }), te({
                                                isValidating: !0
                                            }), u.label = 1;
                                        case 1:
                                            return u.trys.push([1, 3, , 4]), v && (L(o, O, ee.current.data, ee.current.error, !0), t.loadingTimeout && !o.get(O) && setTimeout((function() {
                                                f && h() && J().onLoadingSlow(O, t)
                                            }), t.loadingTimeout), R[O] = [n.apply(void 0, C), A()]), m = R[O], r = m[0], i = m[1], [4, r];
                                        case 2:
                                            return r = u.sent(), v && setTimeout(g, t.dedupingInterval), R[O] && R[O][1] === i ? ($({
                                                error: c
                                            }), p.error = c, y = E[O], !s(y) && (i <= y[0] || i <= y[1] || 0 === y[1]) ? (b(), v && h() && J().onDiscarded(O), [2, !1]) : (a(ee.current.data, r) ? p.data = ee.current.data : p.data = r, a(o.get(O), r) || o.set(O, r), v && h() && J().onSuccess(r, O, t), [3, 4])) : (v && h() && J().onDiscarded(O), [2, !1]);
                                        case 3:
                                            return w = u.sent(), g(), J().isPaused() || ($({
                                                error: w
                                            }), p.error = w, v && h() && (J().onError(w, O, t), ("boolean" === typeof t.shouldRetryOnError && t.shouldRetryOnError || l(t.shouldRetryOnError) && t.shouldRetryOnError(w)) && N() && J().onErrorRetry(w, O, t, re, {
                                                retryCount: (d.retryCount || 0) + 1,
                                                dedupe: !0
                                            }))), [3, 4];
                                        case 4:
                                            return f = !1, b(), h() && v && L(o, O, p.data, p.error, !1), [2, !0]
                                    }
                                }))
                            }))
                        }), [O]),
                        ie = (0, r.useCallback)(F.bind(c, o, (function() {
                            return W.current
                        })), []);
                    if (V((function() {
                            q.current = n, B.current = t
                        })), V((function() {
                            if (O) {
                                var e = O !== W.current,
                                    n = re.bind(c, Y),
                                    t = 0,
                                    r = H(O, m, (function(e, n, t) {
                                        te(d({
                                            error: n,
                                            isValidating: t
                                        }, a(ee.current.data, e) ? c : {
                                            data: e
                                        }))
                                    })),
                                    i = H(O, w, (function(e) {
                                        if (0 == e) {
                                            var r = Date.now();
                                            J().revalidateOnFocus && r > t && N() && (t = r + J().focusThrottleInterval, n())
                                        } else if (1 == e) J().revalidateOnReconnect && N() && n();
                                        else if (2 == e) return re()
                                    }));
                                return M.current = !1, W.current = O, P.current = !0, e && te({
                                        data: G,
                                        error: K,
                                        isValidating: X
                                    }), U() && (s(G) || T ? n() : S(n)),
                                    function() {
                                        M.current = !0, r(), i()
                                    }
                            }
                        }), [O, re]), V((function() {
                            var e;

                            function n() {
                                var n = l(g) ? g(G) : g;
                                n && -1 !== e && (e = setTimeout(t, n))
                            }

                            function t() {
                                ee.current.error || !p && !J().isVisible() || !b && !J().isOnline() ? n() : re(Y).then(n)
                            }
                            return n(),
                                function() {
                                    e && (clearTimeout(e), e = -1)
                                }
                        }), [g, p, b, re]), (0, r.useDebugValue)(G), v && s(G) && O) throw q.current = n, B.current = t, M.current = !1, s(K) ? re(Y) : K;
                    return {
                        mutate: ie,
                        get data() {
                            return ne.data = !0, G
                        },
                        get error() {
                            return ne.error = !0, K
                        },
                        get isValidating() {
                            return ne.isValidating = !0, X
                        }
                    }
                }, function() {
                    for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
                    var t = G(),
                        r = j(e),
                        i = r[0],
                        u = r[1],
                        a = r[2],
                        c = $(t, a),
                        f = o,
                        s = c.use;
                    if (s)
                        for (var l = s.length; l-- > 0;) f = s[l](f);
                    return f(i, u || c.fetcher, c)
                })
        }
    }
]);
//# debugId=eb7bdadd-e3a5-51e0-aba1-f232aa3e3f84