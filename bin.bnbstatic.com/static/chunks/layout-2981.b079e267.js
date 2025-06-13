! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "021a4479-fea1-5376-be3d-53a39295b73a")
    } catch (e) {}
}();
(self.webpackChunkrewards_hub_ui = self.webpackChunkrewards_hub_ui || []).push([
    [628], {
        BxDl: (e, t, r) => {
            "use strict";
            r.d(t, {
                b: () => s
            });
            var n = r("DTvD"),
                o = r("HS2I"),
                i = r("HIvj").vz,
                a = (0, n.createContext)({
                    isLoggedIn: !1,
                    isLoading: !0,
                    useNezhaWebviewLogin: !1
                });
            var s = function() {
                var e = (0, n.useContext)(a),
                    t = (null === o.useUserLoginStatus || void 0 === o.useUserLoginStatus ? void 0 : (0, o.useUserLoginStatus)()) || {},
                    r = t.value,
                    s = t.loading,
                    l = i(),
                    c = "boolean" === typeof r ? {
                        isLoggedIn: r,
                        isLoading: s
                    } : l;
                return e.useNezhaWebviewLogin ? e : c
            }
        },
        ySFI: (e, t, r) => {
            "use strict";
            r.d(t, {
                lL: () => a
            });
            var n = r("Zu1U"),
                o = r("5tkj"),
                i = window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction,
                a = (0, n.S)().isHybrid;
            o.cz
        },
        "5tkj": (e, t, r) => {
            "use strict";
            r.d(t, {
                cz: () => n
            });
            var n = !1
        },
        xOkS: (e, t, r) => {
            "use strict";
            r.d(t, {
                I: () => o
            });
            var n = r("DTvD"),
                o = r.n(n)().createContext({
                    isReady: !1,
                    isLoading: !1,
                    themisHelper: void 0,
                    config: {}
                })
        },
        MXiP: (e, t, r) => {
            "use strict";
            r.d(t, {
                j: () => a
            });
            var n, o = r("DTvD"),
                i = r("NrY2");
            ! function(e) {
                e.RTL = "rtl", e.LTR = "ltr"
            }(n || (n = {}));
            var a = function() {
                var e = o.useContext(i.A);
                return {
                    direction: e,
                    isRtl: e === n.RTL,
                    isLtr: e === n.LTR
                }
            }
        },
        "Z/B3": (e, t, r) => {
            "use strict";
            r.d(t, {
                C: () => o,
                k: () => n
            });
            var n = "theme",
                o = {
                    LIGHT: "light",
                    LIGHT_GLACIER: "light_glacier",
                    DARK: "dark",
                    DARK_CLASSIC: "dark_classic",
                    DARK_MIDNIGHT: "dark_midnight"
                }
        },
        xrNQ: (e, t, r) => {
            "use strict";
            r.d(t, {
                D: () => s
            });
            var n = r("HS2I"),
                o = r("nn0X"),
                i = r("Z/B3"),
                a = r("+Yhp"),
                s = function() {
                    var e = (null === n.useTheme || void 0 === n.useTheme ? void 0 : (0, n.useTheme)()) || {},
                        t = e.theme,
                        r = e.toggleTheme,
                        s = (0, o.DP)(),
                        l = s.isLight,
                        c = s.toggleTheme,
                        u = t || (l ? i.C.LIGHT : i.C.DARK),
                        d = Object.values(i.C).includes(u.toLowerCase()) ? u.toLowerCase() : i.C.LIGHT;
                    return {
                        isLight: (0, a.k)(d),
                        theme: d,
                        toggleTheme: r || c
                    }
                }
        },
        "+Yhp": (e, t, r) => {
            "use strict";
            r.d(t, {
                k: () => o
            });
            var n = r("Z/B3"),
                o = function(e) {
                    return e.toLowerCase().startsWith(n.C.LIGHT)
                }
        },
        "+8e/": (e, t, r) => {
            "use strict";
            r.d(t, {
                iO: () => fe,
                wi: () => me
            });
            var n = r("sViW"),
                o = r("BK7R"),
                i = r("VP0d"),
                a = r("Pz56"),
                s = r.n(a),
                l = r("DTvD"),
                c = r("8tQJ"),
                u = r("xOkS"),
                d = r("0HvA"),
                p = r("zJWh"),
                h = function() {
                    var e = (0, n.A)(s().mark((function e() {
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", Promise.resolve(p.U.read("bnc-uuid") || ""));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                g = r("NrPD");
            const f = () => {},
                b = f(),
                m = Object,
                x = e => e === b,
                v = e => "function" == typeof e,
                y = (e, t) => ({ ...e,
                    ...t
                }),
                E = new WeakMap;
            let A = 0;
            const w = e => {
                    const t = typeof e,
                        r = e && e.constructor,
                        n = r == Date;
                    let o, i;
                    if (m(e) !== e || n || r == RegExp) o = n ? e.toJSON() : "symbol" == t ? e.toString() : "string" == t ? JSON.stringify(e) : "" + e;
                    else {
                        if (o = E.get(e), o) return o;
                        if (o = ++A + "~", E.set(e, o), r == Array) {
                            for (o = "@", i = 0; i < e.length; i++) o += w(e[i]) + ",";
                            E.set(e, o)
                        }
                        if (r == m) {
                            o = "#";
                            const t = m.keys(e).sort();
                            for (; !x(i = t.pop());) x(e[i]) || (o += i + ":" + w(e[i]) + ",");
                            E.set(e, o)
                        }
                    }
                    return o
                },
                B = new WeakMap,
                S = {},
                C = {},
                F = "undefined",
                D = typeof document != F,
                k = (e, t) => {
                    const r = B.get(e);
                    return [() => !x(t) && e.get(t) || S, n => {
                        if (!x(t)) {
                            const o = e.get(t);
                            t in C || (C[t] = o), r[5](t, y(o, n), o || S)
                        }
                    }, r[6], () => !x(t) && t in C ? C[t] : !x(t) && e.get(t) || S]
                };
            let R = !0;
            const [T, _] = window.addEventListener ? [window.addEventListener.bind(window), window.removeEventListener.bind(window)] : [f, f], I = {
                isOnline: () => R,
                isVisible: () => {
                    const e = D && document.visibilityState;
                    return x(e) || "hidden" !== e
                }
            }, L = {
                initFocus: e => (D && document.addEventListener("visibilitychange", e), T("focus", e), () => {
                    D && document.removeEventListener("visibilitychange", e), _("focus", e)
                }),
                initReconnect: e => {
                    const t = () => {
                            R = !0, e()
                        },
                        r = () => {
                            R = !1
                        };
                    return T("online", t), T("offline", r), () => {
                        _("online", t), _("offline", r)
                    }
                }
            }, O = !l.useId, H = "Deno" in window, N = e => typeof window.requestAnimationFrame != F ? window.requestAnimationFrame(e) : setTimeout(e, 1), P = H ? l.useEffect : l.useLayoutEffect, z = "undefined" !== typeof navigator && navigator.connection, $ = !H && z && (["slow-2g", "2g"].includes(z.effectiveType) || z.saveData), G = e => {
                if (v(e)) try {
                    e = e()
                } catch (r) {
                    e = ""
                }
                const t = e;
                return [e = "string" == typeof e ? e : (Array.isArray(e) ? e.length : e) ? w(e) : "", t]
            };
            let M = 0;
            const j = () => ++M;
            var W = 3,
                U = 0,
                q = 2,
                Q = 1;
            async function V(...e) {
                const [t, r, n, o] = e, i = y({
                    populateCache: !0,
                    throwOnError: !0
                }, "boolean" === typeof o ? {
                    revalidate: o
                } : o || {});
                let a = i.populateCache;
                const s = i.rollbackOnError;
                let l = i.optimisticData;
                const c = !1 !== i.revalidate,
                    u = i.throwOnError;
                if (v(r)) {
                    const e = r,
                        n = [],
                        o = t.keys();
                    for (const r of o) !/^\$(inf|sub)\$/.test(r) && e(t.get(r)._k) && n.push(r);
                    return Promise.all(n.map(d))
                }
                return d(r);
                async function d(r) {
                    const [o] = G(r);
                    if (!o) return;
                    const [i, d] = k(t, o), [p, h, g, f] = B.get(t), m = () => {
                        const e = p[o];
                        return c && (delete g[o], delete f[o], e && e[0]) ? e[0](2).then((() => i().data)) : i().data
                    };
                    if (e.length < 3) return m();
                    let y, E = n;
                    const A = j();
                    h[o] = [A, 0];
                    const w = !x(l),
                        S = i(),
                        C = S.data,
                        F = S._c,
                        D = x(F) ? C : F;
                    if (w && (l = v(l) ? l(D, C) : l, d({
                            data: l,
                            _c: D
                        })), v(E)) try {
                        E = E(D)
                    } catch (R) {
                        y = R
                    }
                    if (E && v(E.then)) {
                        if (E = await E.catch((e => {
                                y = e
                            })), A !== h[o][0]) {
                            if (y) throw y;
                            return E
                        }
                        y && w && (e => "function" === typeof s ? s(e) : !1 !== s)(y) && (a = !0, d({
                            data: D,
                            _c: b
                        }))
                    }
                    if (a && !y)
                        if (v(a)) {
                            const e = a(E, D);
                            d({
                                data: e,
                                error: b,
                                _c: b
                            })
                        } else d({
                            data: E,
                            error: b,
                            _c: b
                        });
                    if (h[o][1] = j(), Promise.resolve(m()).then((() => {
                            d({
                                _c: b
                            })
                        })), !y) return E;
                    if (u) throw y
                }
            }
            const Y = (e, t) => {
                    for (const r in e) e[r][0] && e[r][0](t)
                },
                X = (e, t) => {
                    if (!B.has(e)) {
                        const r = y(L, t),
                            n = {},
                            o = V.bind(b, e);
                        let i = f;
                        const a = {},
                            s = (e, t) => {
                                const r = a[e] || [];
                                return a[e] = r, r.push(t), () => r.splice(r.indexOf(t), 1)
                            },
                            l = (t, r, n) => {
                                e.set(t, r);
                                const o = a[t];
                                if (o)
                                    for (const e of o) e(r, n)
                            },
                            c = () => {
                                if (!B.has(e) && (B.set(e, [n, {}, {}, {}, o, l, s]), !H)) {
                                    const t = r.initFocus(setTimeout.bind(b, Y.bind(b, n, 0))),
                                        o = r.initReconnect(setTimeout.bind(b, Y.bind(b, n, 1)));
                                    i = () => {
                                        t && t(), o && o(), B.delete(e)
                                    }
                                }
                            };
                        return c(), [e, o, c, i]
                    }
                    return [e, B.get(e)[4]]
                },
                [K, Z] = X(new Map),
                J = y({
                    onLoadingSlow: f,
                    onSuccess: f,
                    onError: f,
                    onErrorRetry: (e, t, r, n, o) => {
                        const i = r.errorRetryCount,
                            a = o.retryCount,
                            s = ~~((Math.random() + .5) * (1 << (a < 8 ? a : 8))) * r.errorRetryInterval;
                        !x(i) && a > i || setTimeout(n, s, o)
                    },
                    onDiscarded: f,
                    revalidateOnFocus: !0,
                    revalidateOnReconnect: !0,
                    revalidateIfStale: !0,
                    shouldRetryOnError: !0,
                    errorRetryInterval: $ ? 1e4 : 5e3,
                    focusThrottleInterval: 5e3,
                    dedupingInterval: 2e3,
                    loadingTimeout: $ ? 5e3 : 3e3,
                    compare: (e, t) => w(e) == w(t),
                    isPaused: () => !1,
                    cache: K,
                    mutate: Z,
                    fallback: {}
                }, I),
                ee = (e, t) => {
                    const r = y(e, t);
                    if (t) {
                        const {
                            use: n,
                            fallback: o
                        } = e, {
                            use: i,
                            fallback: a
                        } = t;
                        n && i && (r.use = n.concat(i)), o && a && (r.fallback = y(o, a))
                    }
                    return r
                },
                te = (0, l.createContext)({}),
                re = window.__SWR_DEVTOOLS_USE__,
                ne = re ? window.__SWR_DEVTOOLS_USE__ : [],
                oe = e => v(e[1]) ? [e[0], e[1], e[2] || {}] : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
                ie = ne.concat((e => (t, r, n) => e(t, r && ((...e) => {
                    const [n] = G(t), [, , , o] = B.get(K);
                    if (n.startsWith("$inf$")) return r(...e);
                    const i = o[n];
                    return x(i) ? r(...e) : (delete o[n], i)
                }), n)));
            re && (window.__SWR_DEVTOOLS_REACT__ = l);
            const ae = l.use || (e => {
                    if ("pending" === e.status) throw e;
                    if ("fulfilled" === e.status) return e.value;
                    throw "rejected" === e.status ? e.reason : (e.status = "pending", e.then((t => {
                        e.status = "fulfilled", e.value = t
                    }), (t => {
                        e.status = "rejected", e.reason = t
                    })), e)
                }),
                se = {
                    dedupe: !0
                },
                le = (m.defineProperty((e => {
                    const {
                        value: t
                    } = e, r = (0, l.useContext)(te), n = v(t), o = (0, l.useMemo)((() => n ? t(r) : t), [n, r, t]), i = (0, l.useMemo)((() => n ? o : ee(r, o)), [n, r, o]), a = o && o.provider, s = (0, l.useRef)(b);
                    a && !s.current && (s.current = X(a(i.cache || K), o));
                    const c = s.current;
                    return c && (i.cache = c[0], i.mutate = c[1]), P((() => {
                        if (c) return c[2] && c[2](), c[3]
                    }), []), (0, l.createElement)(te.Provider, y(e, {
                        value: i
                    }))
                }), "defaultValue", {
                    value: J
                }), ce = (e, t, r) => {
                    const {
                        cache: n,
                        compare: o,
                        suspense: i,
                        fallbackData: a,
                        revalidateOnMount: s,
                        revalidateIfStale: c,
                        refreshInterval: u,
                        refreshWhenHidden: d,
                        refreshWhenOffline: p,
                        keepPreviousData: h
                    } = r, [f, m, E, A] = B.get(n), [w, S] = G(e), C = (0, l.useRef)(!1), F = (0, l.useRef)(!1), D = (0, l.useRef)(w), R = (0, l.useRef)(t), T = (0, l.useRef)(r), _ = () => T.current, I = () => _().isVisible() && _().isOnline(), [L, z, $, M] = k(n, w), Y = (0, l.useRef)({}).current, X = x(a) ? r.fallback[w] : a, K = (e, t) => {
                        for (const r in Y) {
                            const n = r;
                            if ("data" === n) {
                                if (!o(e[n], t[n])) {
                                    if (!x(e[n])) return !1;
                                    if (!o(le, t[n])) return !1
                                }
                            } else if (t[n] !== e[n]) return !1
                        }
                        return !0
                    }, Z = (0, l.useMemo)((() => {
                        const e = !!w && !!t && (x(s) ? !_().isPaused() && !i && (!!x(c) || c) : s),
                            r = t => {
                                const r = y(t);
                                return delete r._k, e ? {
                                    isValidating: !0,
                                    isLoading: !0,
                                    ...r
                                } : r
                            },
                            n = L(),
                            o = M(),
                            a = r(n),
                            l = n === o ? a : r(o);
                        let u = a;
                        return [() => {
                            const e = r(L());
                            return K(e, u) ? (u.data = e.data, u.isLoading = e.isLoading, u.isValidating = e.isValidating, u.error = e.error, u) : (u = e, e)
                        }, () => l]
                    }), [n, w]), J = (0, g.useSyncExternalStore)((0, l.useCallback)((e => $(w, ((t, r) => {
                        K(r, t) || e()
                    }))), [n, w]), Z[0], Z[1]), ee = !C.current, te = f[w] && f[w].length > 0, re = J.data, ne = x(re) ? X : re, oe = J.error, ie = (0, l.useRef)(ne), le = h ? x(re) ? ie.current : re : ne, ce = !(te && !x(oe)) && (ee && !x(s) ? s : !_().isPaused() && (i ? !x(ne) && c : x(ne) || c)), ue = !!(w && t && ee && ce), de = x(J.isValidating) ? ue : J.isValidating, pe = x(J.isLoading) ? ue : J.isLoading, he = (0, l.useCallback)((async e => {
                        const t = R.current;
                        if (!w || !t || F.current || _().isPaused()) return !1;
                        let n, i, a = !0;
                        const s = e || {},
                            l = !E[w] || !s.dedupe,
                            c = () => O ? !F.current && w === D.current && C.current : w === D.current,
                            u = {
                                isValidating: !1,
                                isLoading: !1
                            },
                            d = () => {
                                z(u)
                            },
                            p = () => {
                                const e = E[w];
                                e && e[1] === i && delete E[w]
                            },
                            h = {
                                isValidating: !0
                            };
                        x(L().data) && (h.isLoading = !0);
                        try {
                            if (l && (z(h), r.loadingTimeout && x(L().data) && setTimeout((() => {
                                    a && c() && _().onLoadingSlow(w, r)
                                }), r.loadingTimeout), E[w] = [t(S), j()]), [n, i] = E[w], n = await n, l && setTimeout(p, r.dedupingInterval), !E[w] || E[w][1] !== i) return l && c() && _().onDiscarded(w), !1;
                            u.error = b;
                            const e = m[w];
                            if (!x(e) && (i <= e[0] || i <= e[1] || 0 === e[1])) return d(), l && c() && _().onDiscarded(w), !1;
                            const s = L().data;
                            u.data = o(s, n) ? s : n, l && c() && _().onSuccess(n, w, r)
                        } catch (g) {
                            p();
                            const e = _(),
                                {
                                    shouldRetryOnError: t
                                } = e;
                            e.isPaused() || (u.error = g, l && c() && (e.onError(g, w, e), (!0 === t || v(t) && t(g)) && I() && e.onErrorRetry(g, w, e, (e => {
                                const t = f[w];
                                t && t[0] && t[0](W, e)
                            }), {
                                retryCount: (s.retryCount || 0) + 1,
                                dedupe: !0
                            })))
                        }
                        return a = !1, d(), !0
                    }), [w, n]), ge = (0, l.useCallback)(((...e) => V(n, D.current, ...e)), []);
                    if (P((() => {
                            R.current = t, T.current = r, x(re) || (ie.current = re)
                        })), P((() => {
                            if (!w) return;
                            const e = he.bind(b, se);
                            let t = 0;
                            const r = ((e, t, r) => {
                                const n = t[e] || (t[e] = []);
                                return n.push(r), () => {
                                    const e = n.indexOf(r);
                                    e >= 0 && (n[e] = n[n.length - 1], n.pop())
                                }
                            })(w, f, ((r, n = {}) => {
                                if (r == U) {
                                    const r = Date.now();
                                    _().revalidateOnFocus && r > t && I() && (t = r + _().focusThrottleInterval, e())
                                } else if (r == Q) _().revalidateOnReconnect && I() && e();
                                else {
                                    if (r == q) return he();
                                    if (r == W) return he(n)
                                }
                            }));
                            return F.current = !1, D.current = w, C.current = !0, z({
                                _k: S
                            }), ce && (x(ne) || H ? e() : N(e)), () => {
                                F.current = !0, r()
                            }
                        }), [w]), P((() => {
                            let e;

                            function t() {
                                const t = v(u) ? u(L().data) : u;
                                t && -1 !== e && (e = setTimeout(r, t))
                            }

                            function r() {
                                L().error || !d && !_().isVisible() || !p && !_().isOnline() ? t() : he(se).then(t)
                            }
                            return t(), () => {
                                e && (clearTimeout(e), e = -1)
                            }
                        }), [u, d, p, w]), (0, l.useDebugValue)(le), i && x(ne) && w) {
                        if (!O && H) throw new Error("Fallback data is required when using suspense in SSR.");
                        R.current = t, T.current = r, F.current = !1;
                        const e = A[w];
                        if (!x(e)) {
                            const t = ge(e);
                            ae(t)
                        }
                        if (!x(oe)) throw oe; {
                            const e = he(se);
                            x(le) || (e.status = "fulfilled", e.value = !0), ae(e)
                        }
                    }
                    return {
                        mutate: ge,
                        get data() {
                            return Y.data = !0, le
                        },
                        get error() {
                            return Y.error = !0, oe
                        },
                        get isValidating() {
                            return Y.isValidating = !0, de
                        },
                        get isLoading() {
                            return Y.isLoading = !0, pe
                        }
                    }
                }, function(...e) {
                    const t = y(J, (0, l.useContext)(te)),
                        [r, n, o] = oe(e),
                        i = ee(t, o);
                    let a = ce;
                    const {
                        use: s
                    } = i, c = (s || []).concat(ie);
                    for (let l = c.length; l--;) a = c[l](a);
                    return a(r, n || i.fetcher || null, i)
                });
            var ce;
            const ue = ((e, t) => (...r) => {
                const [n, o, i] = oe(r), a = (i.use || []).concat(t);
                return e(n, o, { ...i,
                    use: a
                })
            })(le, (e => (t, r, n) => (n.revalidateOnFocus = !1, n.revalidateIfStale = !1, n.revalidateOnReconnect = !1, e(t, r, n))));
            var de = r("BxDl"),
                pe = r("xj71"),
                he = function() {
                    var e = (0, de.b)(),
                        t = e.isLoggedIn,
                        r = e.isLoading,
                        o = ue(t ? "useUserBaseDetail" : null, (0, n.A)(s().mark((function e() {
                            var t;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, (0, pe.bE)("/bapi/accounts/v1/private/account/user/base-detail");
                                    case 3:
                                        if ((null === (t = e.sent) || void 0 === t ? void 0 : t.success) && (null === t || void 0 === t ? void 0 : t.data)) {
                                            e.next = 6;
                                            break
                                        }
                                        throw new Error("Invalid User Detail data");
                                    case 6:
                                        return e.abrupt("return", t.data);
                                    case 9:
                                        return e.prev = 9, e.t0 = e.catch(0), d.vF.error("[utils | useUserBaseDetail] error fetching user base detail"), d.vF.error(e.t0), e.abrupt("return", null);
                                    case 14:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 9]
                            ])
                        })))),
                        i = o.data,
                        a = void 0 === i ? null : i,
                        l = o.isValidating;
                    return {
                        isLoading: r || l,
                        data: a
                    }
                },
                ge = {},
                fe = function(e, t) {
                    var r = e,
                        a = function(e) {
                            var t = e,
                                r = (0, i.A)((0, l.useState)(t.trace_id), 2),
                                n = r[0],
                                o = r[1];
                            (0, l.useEffect)((function() {
                                "undefined" === typeof n && h().then((function(e) {
                                    o(e || "")
                                }))
                            }), [n]);
                            var a = he(),
                                s = a.isLoading,
                                c = a.data;
                            return {
                                uid: t.uid || (null === c || void 0 === c ? void 0 : c.userId),
                                traceId: n,
                                isLoading: s
                            }
                        }(e),
                        u = a.uid,
                        p = a.traceId,
                        g = a.isLoading,
                        f = (0, i.A)((0, l.useState)(!0), 2),
                        b = f[0],
                        m = f[1],
                        x = (0, i.A)((0, l.useState)(), 2),
                        v = x[0],
                        y = x[1],
                        E = (0, i.A)((0, l.useState)({}), 2),
                        A = E[0],
                        w = E[1];
                    return (0, l.useEffect)((function() {
                        (0, n.A)(s().mark((function e() {
                            var n;
                            return s().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!g && "undefined" !== typeof p) {
                                            e.next = 2;
                                            break
                                        }
                                        return e.abrupt("return");
                                    case 2:
                                        return e.prev = 2, e.next = 5, c.Ay.init((0, o.A)({}, r, p ? {
                                            trace_id: p
                                        } : {}, u ? {
                                            uid: u
                                        } : {}), t, w);
                                    case 5:
                                        n = e.sent, y(n), e.next = 13;
                                        break;
                                    case 9:
                                        e.prev = 9, e.t0 = e.catch(2), d.vF.error("[utils | Themis] init error"), d.vF.error(e.t0);
                                    case 13:
                                        return e.prev = 13, m(!1), e.finish(13);
                                    case 16:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [2, 9, 13, 16]
                            ])
                        })))()
                    }), [p, u, g]), (0, l.useEffect)((function() {
                        return function() {
                            v && v.unsubscribe(w)
                        }
                    }), [v]), {
                        isLoading: b,
                        isReady: !!v,
                        themisHelper: v,
                        config: A
                    }
                },
                be = function() {
                    var e = (0, l.useContext)(u.I),
                        t = e.isReady,
                        r = e.isLoading,
                        n = e.themisHelper;
                    return {
                        config: (0, l.useMemo)((function() {
                            return (null === n || void 0 === n ? void 0 : n.getStrategiesConfig()) || ge
                        }), [n]),
                        isReady: t,
                        isLoading: r
                    }
                },
                me = function() {
                    var e = be(),
                        t = e.config,
                        r = e.isReady,
                        n = e.isLoading,
                        o = t.experiments;
                    return {
                        experiments: void 0 === o ? ge : o,
                        isReady: r,
                        isLoading: n
                    }
                }
        },
        "93jd": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("DTvD"),
                o = r.n(n),
                i = r("+8e/"),
                a = r("xOkS");
            const s = function(e) {
                var t = e.params,
                    r = e.options,
                    n = e.children,
                    s = (0, i.iO)(t, r),
                    l = s.isReady,
                    c = s.isLoading,
                    u = s.themisHelper,
                    d = s.config;
                return o().createElement(a.I.Provider, {
                    value: {
                        isReady: l,
                        isLoading: c,
                        themisHelper: u,
                        config: d
                    }
                }, n)
            }
        },
        nn0X: (e, t, r) => {
            "use strict";
            r.d(t, {
                DP: () => p,
                oP: () => g,
                uE: () => f
            });
            var n = r("DTvD"),
                o = r("NsjG"),
                i = r("/Q1k"),
                a = function(e) {
                    return e.cookies || {}
                },
                s = function() {
                    var e = (0, n.useRef)(null),
                        t = (0, i.wA)();
                    return e.current = (0, i.d4)(a), {
                        cookies: e.current,
                        saveCookie: (0, n.useCallback)((function(r, n) {
                            var o = "function" === typeof n ? n(e.current[r]) : n;
                            t.cookies.save({
                                key: r,
                                value: o
                            })
                        }), [])
                    }
                },
                l = "dark",
                c = "light",
                u = "theme",
                d = "shouldResetTradingView",
                p = function() {
                    var e = s(),
                        t = e.cookies,
                        r = e.saveCookie,
                        i = (0, n.useCallback)((function() {
                            return o.IG.getItem(d, 0) || 0
                        }), []),
                        a = (0, n.useCallback)((function() {
                            var e = i();
                            o.IG.setItem(d, e + 1)
                        }), [i]);
                    return {
                        isLight: t.theme !== l,
                        shouldResetTradingViewKey: d,
                        getThemeCounter: i,
                        incThemeCounter: a,
                        toggleTheme: (0, n.useCallback)((function() {
                            r(u, (function(e) {
                                return e !== c ? c : l
                            })), a()
                        }), [a])
                    }
                },
                h = "userPreferredCurrency",
                g = function() {
                    var e = s(),
                        t = e.cookies,
                        r = e.saveCookie;
                    return {
                        cachePreferFiat: t[h],
                        setCacheFiat: (0, n.useCallback)((function(e) {
                            r(h, e)
                        }), [])
                    }
                },
                f = function() {
                    return g().cachePreferFiat
                }
        },
        HIvj: (e, t, r) => {
            "use strict";
            r.d(t, {
                E7: () => h,
                G: () => p,
                vz: () => u
            });
            var n = r("ezuS"),
                o = r("DTvD"),
                i = r("/Q1k"),
                a = r("nn0X"),
                s = function(e) {
                    return e.userCenter
                },
                l = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.loginStatus
                },
                c = function(e) {
                    var t;
                    return null === (t = e.userCenter) || void 0 === t ? void 0 : t.userPreferredCurrency
                },
                u = function() {
                    return (0, i.d4)(l, i.bN) || {}
                },
                d = function() {
                    return (0, i.d4)(c, i.bN) || {}
                },
                p = function() {
                    var e = (0, o.useRef)(),
                        t = (0, i.wA)();
                    return e.current = (0, i.d4)(s) || {}, {
                        userCenter: e.current,
                        setUserCenter: (0, o.useCallback)((function(r, o) {
                            var i = "function" === typeof o ? o(e.current[r]) : o;
                            t.userCenter.updateState((0, n.A)({}, r, i))
                        }), [])
                    }
                },
                h = function() {
                    var e = u().isLoggedIn,
                        t = (0, a.oP)().setCacheFiat,
                        r = d().configName;
                    (0, o.useEffect)((function() {
                        e && r && t(r)
                    }), [e, r])
                }
        },
        NrY2: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => o
            });
            var n = r("DTvD");
            const o = n.createContext("ltr")
        },
        "9Fw3": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => c
            });
            var n = r("iC9S");
            const o = function(e) {
                function t(e, n, l, c, p) {
                    for (var h, g, f, b, y, A = 0, w = 0, B = 0, S = 0, C = 0, _ = 0, L = f = h = 0, H = 0, N = 0, P = 0, z = 0, $ = l.length, G = $ - 1, M = "", j = "", W = "", U = ""; H < $;) {
                        if (g = l.charCodeAt(H), H === G && 0 !== w + S + B + A && (0 !== w && (g = 47 === w ? 10 : 47), S = B = A = 0, $++, G++), 0 === w + S + B + A) {
                            if (H === G && (0 < N && (M = M.replace(d, "")), 0 < M.trim().length)) {
                                switch (g) {
                                    case 32:
                                    case 9:
                                    case 59:
                                    case 13:
                                    case 10:
                                        break;
                                    default:
                                        M += l.charAt(H)
                                }
                                g = 59
                            }
                            switch (g) {
                                case 123:
                                    for (h = (M = M.trim()).charCodeAt(0), f = 1, z = ++H; H < $;) {
                                        switch (g = l.charCodeAt(H)) {
                                            case 123:
                                                f++;
                                                break;
                                            case 125:
                                                f--;
                                                break;
                                            case 47:
                                                switch (g = l.charCodeAt(H + 1)) {
                                                    case 42:
                                                    case 47:
                                                        e: {
                                                            for (L = H + 1; L < G; ++L) switch (l.charCodeAt(L)) {
                                                                case 47:
                                                                    if (42 === g && 42 === l.charCodeAt(L - 1) && H + 2 !== L) {
                                                                        H = L + 1;
                                                                        break e
                                                                    }
                                                                    break;
                                                                case 10:
                                                                    if (47 === g) {
                                                                        H = L + 1;
                                                                        break e
                                                                    }
                                                            }
                                                            H = L
                                                        }
                                                }
                                                break;
                                            case 91:
                                                g++;
                                            case 40:
                                                g++;
                                            case 34:
                                            case 39:
                                                for (; H++ < G && l.charCodeAt(H) !== g;);
                                        }
                                        if (0 === f) break;
                                        H++
                                    }
                                    if (f = l.substring(z, H), 0 === h && (h = (M = M.replace(u, "").trim()).charCodeAt(0)), 64 === h) {
                                        switch (0 < N && (M = M.replace(d, "")), g = M.charCodeAt(1)) {
                                            case 100:
                                            case 109:
                                            case 115:
                                            case 45:
                                                N = n;
                                                break;
                                            default:
                                                N = T
                                        }
                                        if (z = (f = t(n, N, f, g, p + 1)).length, 0 < I && (y = s(3, f, N = r(T, M, P), n, D, F, z, g, p, c), M = N.join(""), void 0 !== y && 0 === (z = (f = y.trim()).length) && (g = 0, f = "")), 0 < z) switch (g) {
                                            case 115:
                                                M = M.replace(E, a);
                                            case 100:
                                            case 109:
                                            case 45:
                                                f = M + "{" + f + "}";
                                                break;
                                            case 107:
                                                f = (M = M.replace(m, "$1 $2")) + "{" + f + "}", f = 1 === R || 2 === R && i("@" + f, 3) ? "@-webkit-" + f + "@" + f : "@" + f;
                                                break;
                                            default:
                                                f = M + f, 112 === c && (j += f, f = "")
                                        } else f = ""
                                    } else f = t(n, r(n, M, P), f, c, p + 1);
                                    W += f, f = P = N = L = h = 0, M = "", g = l.charCodeAt(++H);
                                    break;
                                case 125:
                                case 59:
                                    if (1 < (z = (M = (0 < N ? M.replace(d, "") : M).trim()).length)) switch (0 === L && (h = M.charCodeAt(0), 45 === h || 96 < h && 123 > h) && (z = (M = M.replace(" ", ":")).length), 0 < I && void 0 !== (y = s(1, M, n, e, D, F, j.length, c, p, c)) && 0 === (z = (M = y.trim()).length) && (M = "\0\0"), h = M.charCodeAt(0), g = M.charCodeAt(1), h) {
                                        case 0:
                                            break;
                                        case 64:
                                            if (105 === g || 99 === g) {
                                                U += M + l.charAt(H);
                                                break
                                            }
                                        default:
                                            58 !== M.charCodeAt(z - 1) && (j += o(M, h, g, M.charCodeAt(2)))
                                    }
                                    P = N = L = h = 0, M = "", g = l.charCodeAt(++H)
                            }
                        }
                        switch (g) {
                            case 13:
                            case 10:
                                47 === w ? w = 0 : 0 === 1 + h && 107 !== c && 0 < M.length && (N = 1, M += "\0"), 0 < I * O && s(0, M, n, e, D, F, j.length, c, p, c), F = 1, D++;
                                break;
                            case 59:
                            case 125:
                                if (0 === w + S + B + A) {
                                    F++;
                                    break
                                }
                            default:
                                switch (F++, b = l.charAt(H), g) {
                                    case 9:
                                    case 32:
                                        if (0 === S + A + w) switch (C) {
                                            case 44:
                                            case 58:
                                            case 9:
                                            case 32:
                                                b = "";
                                                break;
                                            default:
                                                32 !== g && (b = " ")
                                        }
                                        break;
                                    case 0:
                                        b = "\\0";
                                        break;
                                    case 12:
                                        b = "\\f";
                                        break;
                                    case 11:
                                        b = "\\v";
                                        break;
                                    case 38:
                                        0 === S + w + A && (N = P = 1, b = "\f" + b);
                                        break;
                                    case 108:
                                        if (0 === S + w + A + k && 0 < L) switch (H - L) {
                                            case 2:
                                                112 === C && 58 === l.charCodeAt(H - 3) && (k = C);
                                            case 8:
                                                111 === _ && (k = _)
                                        }
                                        break;
                                    case 58:
                                        0 === S + w + A && (L = H);
                                        break;
                                    case 44:
                                        0 === w + B + S + A && (N = 1, b += "\r");
                                        break;
                                    case 34:
                                    case 39:
                                        0 === w && (S = S === g ? 0 : 0 === S ? g : S);
                                        break;
                                    case 91:
                                        0 === S + w + B && A++;
                                        break;
                                    case 93:
                                        0 === S + w + B && A--;
                                        break;
                                    case 41:
                                        0 === S + w + A && B--;
                                        break;
                                    case 40:
                                        if (0 === S + w + A) {
                                            if (0 === h)
                                                if (2 * C + 3 * _ === 533);
                                                else h = 1;
                                            B++
                                        }
                                        break;
                                    case 64:
                                        0 === w + B + S + A + L + f && (f = 1);
                                        break;
                                    case 42:
                                    case 47:
                                        if (!(0 < S + A + B)) switch (w) {
                                            case 0:
                                                switch (2 * g + 3 * l.charCodeAt(H + 1)) {
                                                    case 235:
                                                        w = 47;
                                                        break;
                                                    case 220:
                                                        z = H, w = 42
                                                }
                                                break;
                                            case 42:
                                                47 === g && 42 === C && z + 2 !== H && (33 === l.charCodeAt(z + 2) && (j += l.substring(z, H + 1)), b = "", w = 0)
                                        }
                                }
                                0 === w && (M += b)
                        }
                        _ = C, C = g, H++
                    }
                    if (0 < (z = j.length)) {
                        if (N = n, 0 < I && (void 0 !== (y = s(2, j, N, e, D, F, z, c, p, c)) && 0 === (j = y).length)) return U + j + W;
                        if (j = N.join(",") + "{" + j + "}", 0 !== R * k) {
                            switch (2 !== R || i(j, 2) || (k = 0), k) {
                                case 111:
                                    j = j.replace(v, ":-moz-$1") + j;
                                    break;
                                case 112:
                                    j = j.replace(x, "::-webkit-input-$1") + j.replace(x, "::-moz-$1") + j.replace(x, ":-ms-input-$1") + j
                            }
                            k = 0
                        }
                    }
                    return U + j + W
                }

                function r(e, t, r) {
                    var o = t.trim().split(f);
                    t = o;
                    var i = o.length,
                        a = e.length;
                    switch (a) {
                        case 0:
                        case 1:
                            var s = 0;
                            for (e = 0 === a ? "" : e[0] + " "; s < i; ++s) t[s] = n(e, t[s], r).trim();
                            break;
                        default:
                            var l = s = 0;
                            for (t = []; s < i; ++s)
                                for (var c = 0; c < a; ++c) t[l++] = n(e[c] + " ", o[s], r).trim()
                    }
                    return t
                }

                function n(e, t, r) {
                    var n = t.charCodeAt(0);
                    switch (33 > n && (n = (t = t.trim()).charCodeAt(0)), n) {
                        case 38:
                            return t.replace(b, "$1" + e.trim());
                        case 58:
                            return e.trim() + t.replace(b, "$1" + e.trim());
                        default:
                            if (0 < 1 * r && 0 < t.indexOf("\f")) return t.replace(b, (58 === e.charCodeAt(0) ? "" : "$1") + e.trim())
                    }
                    return e + t
                }

                function o(e, t, r, n) {
                    var a = e + ";",
                        s = 2 * t + 3 * r + 4 * n;
                    if (944 === s) {
                        e = a.indexOf(":", 9) + 1;
                        var l = a.substring(e, a.length - 1).trim();
                        return l = a.substring(0, e).trim() + l + ";", 1 === R || 2 === R && i(l, 1) ? "-webkit-" + l + l : l
                    }
                    if (0 === R || 2 === R && !i(a, 1)) return a;
                    switch (s) {
                        case 1015:
                            return 97 === a.charCodeAt(10) ? "-webkit-" + a + a : a;
                        case 951:
                            return 116 === a.charCodeAt(3) ? "-webkit-" + a + a : a;
                        case 963:
                            return 110 === a.charCodeAt(5) ? "-webkit-" + a + a : a;
                        case 1009:
                            if (100 !== a.charCodeAt(4)) break;
                        case 969:
                        case 942:
                            return "-webkit-" + a + a;
                        case 978:
                            return "-webkit-" + a + "-moz-" + a + a;
                        case 1019:
                        case 983:
                            return "-webkit-" + a + "-moz-" + a + "-ms-" + a + a;
                        case 883:
                            if (45 === a.charCodeAt(8)) return "-webkit-" + a + a;
                            if (0 < a.indexOf("image-set(", 11)) return a.replace(C, "$1-webkit-$2") + a;
                            break;
                        case 932:
                            if (45 === a.charCodeAt(4)) switch (a.charCodeAt(5)) {
                                case 103:
                                    return "-webkit-box-" + a.replace("-grow", "") + "-webkit-" + a + "-ms-" + a.replace("grow", "positive") + a;
                                case 115:
                                    return "-webkit-" + a + "-ms-" + a.replace("shrink", "negative") + a;
                                case 98:
                                    return "-webkit-" + a + "-ms-" + a.replace("basis", "preferred-size") + a
                            }
                            return "-webkit-" + a + "-ms-" + a + a;
                        case 964:
                            return "-webkit-" + a + "-ms-flex-" + a + a;
                        case 1023:
                            if (99 !== a.charCodeAt(8)) break;
                            return "-webkit-box-pack" + (l = a.substring(a.indexOf(":", 15)).replace("flex-", "").replace("space-between", "justify")) + "-webkit-" + a + "-ms-flex-pack" + l + a;
                        case 1005:
                            return h.test(a) ? a.replace(p, ":-webkit-") + a.replace(p, ":-moz-") + a : a;
                        case 1e3:
                            switch (t = (l = a.substring(13).trim()).indexOf("-") + 1, l.charCodeAt(0) + l.charCodeAt(t)) {
                                case 226:
                                    l = a.replace(y, "tb");
                                    break;
                                case 232:
                                    l = a.replace(y, "tb-rl");
                                    break;
                                case 220:
                                    l = a.replace(y, "lr");
                                    break;
                                default:
                                    return a
                            }
                            return "-webkit-" + a + "-ms-" + l + a;
                        case 1017:
                            if (-1 === a.indexOf("sticky", 9)) break;
                        case 975:
                            switch (t = (a = e).length - 10, s = (l = (33 === a.charCodeAt(t) ? a.substring(0, t) : a).substring(e.indexOf(":", 7) + 1).trim()).charCodeAt(0) + (0 | l.charCodeAt(7))) {
                                case 203:
                                    if (111 > l.charCodeAt(8)) break;
                                case 115:
                                    a = a.replace(l, "-webkit-" + l) + ";" + a;
                                    break;
                                case 207:
                                case 102:
                                    a = a.replace(l, "-webkit-" + (102 < s ? "inline-" : "") + "box") + ";" + a.replace(l, "-webkit-" + l) + ";" + a.replace(l, "-ms-" + l + "box") + ";" + a
                            }
                            return a + ";";
                        case 938:
                            if (45 === a.charCodeAt(5)) switch (a.charCodeAt(6)) {
                                case 105:
                                    return l = a.replace("-items", ""), "-webkit-" + a + "-webkit-box-" + l + "-ms-flex-" + l + a;
                                case 115:
                                    return "-webkit-" + a + "-ms-flex-item-" + a.replace(w, "") + a;
                                default:
                                    return "-webkit-" + a + "-ms-flex-line-pack" + a.replace("align-content", "").replace(w, "") + a
                            }
                            break;
                        case 973:
                        case 989:
                            if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break;
                        case 931:
                        case 953:
                            if (!0 === S.test(e)) return 115 === (l = e.substring(e.indexOf(":") + 1)).charCodeAt(0) ? o(e.replace("stretch", "fill-available"), t, r, n).replace(":fill-available", ":stretch") : a.replace(l, "-webkit-" + l) + a.replace(l, "-moz-" + l.replace("fill-", "")) + a;
                            break;
                        case 962:
                            if (a = "-webkit-" + a + (102 === a.charCodeAt(5) ? "-ms-" + a : "") + a, 211 === r + n && 105 === a.charCodeAt(13) && 0 < a.indexOf("transform", 10)) return a.substring(0, a.indexOf(";", 27) + 1).replace(g, "$1-webkit-$2") + a
                    }
                    return a
                }

                function i(e, t) {
                    var r = e.indexOf(1 === t ? ":" : "{"),
                        n = e.substring(0, 3 !== t ? r : 10);
                    return r = e.substring(r + 1, e.length - 1), L(2 !== t ? n : n.replace(B, "$1"), r, t)
                }

                function a(e, t) {
                    var r = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2));
                    return r !== t + ";" ? r.replace(A, " or ($1)").substring(4) : "(" + t + ")"
                }

                function s(e, t, r, n, o, i, a, s, l, u) {
                    for (var d, p = 0, h = t; p < I; ++p) switch (d = _[p].call(c, e, h, r, n, o, i, a, s, l, u)) {
                        case void 0:
                        case !1:
                        case !0:
                        case null:
                            break;
                        default:
                            h = d
                    }
                    if (h !== t) return h
                }

                function l(e) {
                    return void 0 !== (e = e.prefix) && (L = null, e ? "function" !== typeof e ? R = 1 : (R = 2, L = e) : R = 0), l
                }

                function c(e, r) {
                    var n = e;
                    if (33 > n.charCodeAt(0) && (n = n.trim()), n = [n], 0 < I) {
                        var o = s(-1, r, n, n, D, F, 0, 0, 0, 0);
                        void 0 !== o && "string" === typeof o && (r = o)
                    }
                    var i = t(T, n, r, 0, 0);
                    return 0 < I && (void 0 !== (o = s(-2, i, n, n, D, F, i.length, 0, 0, 0)) && (i = o)), "", k = 0, F = D = 1, i
                }
                var u = /^\0+/g,
                    d = /[\0\r\f]/g,
                    p = /: */g,
                    h = /zoo|gra/,
                    g = /([,: ])(transform)/g,
                    f = /,\r+?/g,
                    b = /([\t\r\n ])*\f?&/g,
                    m = /@(k\w+)\s*(\S*)\s*/,
                    x = /::(place)/g,
                    v = /:(read-only)/g,
                    y = /[svh]\w+-[tblr]{2}/,
                    E = /\(\s*(.*)\s*\)/g,
                    A = /([\s\S]*?);/g,
                    w = /-self|flex-/g,
                    B = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
                    S = /stretch|:\s*\w+\-(?:conte|avail)/,
                    C = /([^-])(image-set\()/,
                    F = 1,
                    D = 1,
                    k = 0,
                    R = 1,
                    T = [],
                    _ = [],
                    I = 0,
                    L = null,
                    O = 0;
                return c.use = function e(t) {
                    switch (t) {
                        case void 0:
                        case null:
                            I = _.length = 0;
                            break;
                        default:
                            if ("function" === typeof t) _[I++] = t;
                            else if ("object" === typeof t)
                                for (var r = 0, n = t.length; r < n; ++r) e(t[r]);
                            else O = 0 | !!t
                    }
                    return e
                }, c.set = l, void 0 !== e && l(e), c
            };
            var i = "/*|*/";

            function a(e) {
                e && s.current.insert(e + "}")
            }
            var s = {
                    current: null
                },
                l = function(e, t, r, n, o, l, c, u, d, p) {
                    switch (e) {
                        case 1:
                            switch (t.charCodeAt(0)) {
                                case 64:
                                    return s.current.insert(t + ";"), "";
                                case 108:
                                    if (98 === t.charCodeAt(2)) return ""
                            }
                            break;
                        case 2:
                            if (0 === u) return t + i;
                            break;
                        case 3:
                            switch (u) {
                                case 102:
                                case 112:
                                    return s.current.insert(r[0] + t), "";
                                default:
                                    return t + (0 === p ? i : "")
                            }
                        case -2:
                            t.split("/*|*/}").forEach(a)
                    }
                };
            const c = function(e) {
                void 0 === e && (e = {});
                var t, r = e.key || "css";
                void 0 !== e.prefix && (t = {
                    prefix: e.prefix
                });
                var i = new o(t);
                var a, c = {};
                a = e.container || document.head;
                var u, d = document.querySelectorAll("style[data-emotion-" + r + "]");
                Array.prototype.forEach.call(d, (function(e) {
                    e.getAttribute("data-emotion-" + r).split(" ").forEach((function(e) {
                        c[e] = !0
                    })), e.parentNode !== a && a.appendChild(e)
                })), i.use(e.stylisPlugins)(l), u = function(e, t, r, n) {
                    var o = t.name;
                    s.current = r, i(e, t.styles), n && (p.inserted[o] = !0)
                };
                var p = {
                    key: r,
                    sheet: new n.v({
                        key: r,
                        container: a,
                        nonce: e.nonce,
                        speedy: e.speedy
                    }),
                    nonce: e.nonce,
                    inserted: c,
                    registered: {},
                    insert: u
                };
                return p
            }
        },
        yxv7: (e, t, r) => {
            "use strict";
            r.d(t, {
                _y: () => c,
                mL: () => g,
                Dx: () => l,
                AH: () => h,
                ic: () => u
            });
            var n = r("XDNX");
            var o = r("DTvD"),
                i = r("9Fw3"),
                a = r("5nMU"),
                s = (Object.prototype.hasOwnProperty, (0, o.createContext)("undefined" !== typeof HTMLElement ? (0, i.A)() : null)),
                l = (0, o.createContext)({}),
                c = s.Provider,
                u = function(e) {
                    var t = function(t, r) {
                        return (0, o.createElement)(s.Consumer, null, (function(n) {
                            return e(t, n, r)
                        }))
                    };
                    return (0, o.forwardRef)(t)
                };
            var d = r("3xeB"),
                p = r("iC9S");
            const h = function() {
                for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                return (0, a.J)(t)
            };
            var g = u((function(e, t) {
                    var r = e.styles;
                    if ("function" === typeof r) return (0, o.createElement)(l.Consumer, null, (function(e) {
                        var n = (0, a.J)([r(e)]);
                        return (0, o.createElement)(f, {
                            serialized: n,
                            cache: t
                        })
                    }));
                    var n = (0, a.J)([r]);
                    return (0, o.createElement)(f, {
                        serialized: n,
                        cache: t
                    })
                })),
                f = function(e) {
                    var t, r;

                    function o(t, r, n) {
                        return e.call(this, t, r, n) || this
                    }
                    r = e, (t = o).prototype = Object.create(r.prototype), t.prototype.constructor = t, (0, n.A)(t, r);
                    var i = o.prototype;
                    return i.componentDidMount = function() {
                        this.sheet = new p.v({
                            key: this.props.cache.key + "-global",
                            nonce: this.props.cache.sheet.nonce,
                            container: this.props.cache.sheet.container
                        });
                        var e = document.querySelector("style[data-emotion-" + this.props.cache.key + '="' + this.props.serialized.name + '"]');
                        null !== e && this.sheet.tags.push(e), this.props.cache.sheet.tags.length && (this.sheet.before = this.props.cache.sheet.tags[0]), this.insertStyles()
                    }, i.componentDidUpdate = function(e) {
                        e.serialized.name !== this.props.serialized.name && this.insertStyles()
                    }, i.insertStyles = function() {
                        if (void 0 !== this.props.serialized.next && (0, d.s)(this.props.cache, this.props.serialized.next, !0), this.sheet.tags.length) {
                            var e = this.sheet.tags[this.sheet.tags.length - 1].nextElementSibling;
                            this.sheet.before = e, this.sheet.flush()
                        }
                        this.props.cache.insert("", this.props.serialized, this.sheet, !1)
                    }, i.componentWillUnmount = function() {
                        this.sheet.flush()
                    }, i.render = function() {
                        return null
                    }, o
                }(o.Component),
                b = function e(t) {
                    for (var r = t.length, n = 0, o = ""; n < r; n++) {
                        var i = t[n];
                        if (null != i) {
                            var a = void 0;
                            switch (typeof i) {
                                case "boolean":
                                    break;
                                case "object":
                                    if (Array.isArray(i)) a = e(i);
                                    else
                                        for (var s in a = "", i) i[s] && s && (a && (a += " "), a += s);
                                    break;
                                default:
                                    a = i
                            }
                            a && (o && (o += " "), o += a)
                        }
                    }
                    return o
                };

            function m(e, t, r) {
                var n = [],
                    o = (0, d.R)(e, n, r);
                return n.length < 2 ? r : o + t(n)
            }
            u((function(e, t) {
                return (0, o.createElement)(l.Consumer, null, (function(r) {
                    var n = function() {
                            for (var e = arguments.length, r = new Array(e), n = 0; n < e; n++) r[n] = arguments[n];
                            var o = (0, a.J)(r, t.registered);
                            return (0, d.s)(t, o, !1), t.key + "-" + o.name
                        },
                        o = {
                            css: n,
                            cx: function() {
                                for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++) r[o] = arguments[o];
                                return m(t.registered, n, b(r))
                            },
                            theme: r
                        },
                        i = e.children(o);
                    return !0, i
                }))
            }))
        },
        "5nMU": (e, t, r) => {
            "use strict";
            r.d(t, {
                J: () => g
            });
            const n = function(e) {
                for (var t, r = 0, n = 0, o = e.length; o >= 4; ++n, o -= 4) t = 1540483477 * (65535 & (t = 255 & e.charCodeAt(n) | (255 & e.charCodeAt(++n)) << 8 | (255 & e.charCodeAt(++n)) << 16 | (255 & e.charCodeAt(++n)) << 24)) + (59797 * (t >>> 16) << 16), r = 1540483477 * (65535 & (t ^= t >>> 24)) + (59797 * (t >>> 16) << 16) ^ 1540483477 * (65535 & r) + (59797 * (r >>> 16) << 16);
                switch (o) {
                    case 3:
                        r ^= (255 & e.charCodeAt(n + 2)) << 16;
                    case 2:
                        r ^= (255 & e.charCodeAt(n + 1)) << 8;
                    case 1:
                        r = 1540483477 * (65535 & (r ^= 255 & e.charCodeAt(n))) + (59797 * (r >>> 16) << 16)
                }
                return (((r = 1540483477 * (65535 & (r ^= r >>> 13)) + (59797 * (r >>> 16) << 16)) ^ r >>> 15) >>> 0).toString(36)
            };
            const o = {
                animationIterationCount: 1,
                borderImageOutset: 1,
                borderImageSlice: 1,
                borderImageWidth: 1,
                boxFlex: 1,
                boxFlexGroup: 1,
                boxOrdinalGroup: 1,
                columnCount: 1,
                columns: 1,
                flex: 1,
                flexGrow: 1,
                flexPositive: 1,
                flexShrink: 1,
                flexNegative: 1,
                flexOrder: 1,
                gridRow: 1,
                gridRowEnd: 1,
                gridRowSpan: 1,
                gridRowStart: 1,
                gridColumn: 1,
                gridColumnEnd: 1,
                gridColumnSpan: 1,
                gridColumnStart: 1,
                msGridRow: 1,
                msGridRowSpan: 1,
                msGridColumn: 1,
                msGridColumnSpan: 1,
                fontWeight: 1,
                lineHeight: 1,
                opacity: 1,
                order: 1,
                orphans: 1,
                tabSize: 1,
                widows: 1,
                zIndex: 1,
                zoom: 1,
                WebkitLineClamp: 1,
                fillOpacity: 1,
                floodOpacity: 1,
                stopOpacity: 1,
                strokeDasharray: 1,
                strokeDashoffset: 1,
                strokeMiterlimit: 1,
                strokeOpacity: 1,
                strokeWidth: 1
            };
            var i = /[A-Z]|^ms/g,
                a = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
                s = function(e) {
                    return 45 === e.charCodeAt(1)
                },
                l = function(e) {
                    return null != e && "boolean" !== typeof e
                },
                c = function(e) {
                    var t = {};
                    return function(r) {
                        return void 0 === t[r] && (t[r] = e(r)), t[r]
                    }
                }((function(e) {
                    return s(e) ? e : e.replace(i, "-$&").toLowerCase()
                })),
                u = function(e, t) {
                    switch (e) {
                        case "animation":
                        case "animationName":
                            if ("string" === typeof t) return t.replace(a, (function(e, t, r) {
                                return p = {
                                    name: t,
                                    styles: r,
                                    next: p
                                }, t
                            }))
                    }
                    return 1 === o[e] || s(e) || "number" !== typeof t || 0 === t ? t : t + "px"
                };

            function d(e, t, r, n) {
                if (null == r) return "";
                if (void 0 !== r.__emotion_styles) return r;
                switch (typeof r) {
                    case "boolean":
                        return "";
                    case "object":
                        if (1 === r.anim) return p = {
                            name: r.name,
                            styles: r.styles,
                            next: p
                        }, r.name;
                        if (void 0 !== r.styles) {
                            var o = r.next;
                            if (void 0 !== o)
                                for (; void 0 !== o;) p = {
                                    name: o.name,
                                    styles: o.styles,
                                    next: p
                                }, o = o.next;
                            return r.styles + ";"
                        }
                        return function(e, t, r) {
                            var n = "";
                            if (Array.isArray(r))
                                for (var o = 0; o < r.length; o++) n += d(e, t, r[o], !1);
                            else
                                for (var i in r) {
                                    var a = r[i];
                                    if ("object" !== typeof a) null != t && void 0 !== t[a] ? n += i + "{" + t[a] + "}" : l(a) && (n += c(i) + ":" + u(i, a) + ";");
                                    else if (!Array.isArray(a) || "string" !== typeof a[0] || null != t && void 0 !== t[a[0]]) {
                                        var s = d(e, t, a, !1);
                                        switch (i) {
                                            case "animation":
                                            case "animationName":
                                                n += c(i) + ":" + s + ";";
                                                break;
                                            default:
                                                n += i + "{" + s + "}"
                                        }
                                    } else
                                        for (var p = 0; p < a.length; p++) l(a[p]) && (n += c(i) + ":" + u(i, a[p]) + ";")
                                }
                            return n
                        }(e, t, r);
                    case "function":
                        if (void 0 !== e) {
                            var i = p,
                                a = r(e);
                            return p = i, d(e, t, a, n)
                        }
                }
                if (null == t) return r;
                var s = t[r];
                return void 0 === s || n ? r : s
            }
            var p, h = /label:\s*([^\s;\n{]+)\s*;/g;
            var g = function(e, t, r) {
                if (1 === e.length && "object" === typeof e[0] && null !== e[0] && void 0 !== e[0].styles) return e[0];
                var o = !0,
                    i = "";
                p = void 0;
                var a = e[0];
                null == a || void 0 === a.raw ? (o = !1, i += d(r, t, a, !1)) : i += a[0];
                for (var s = 1; s < e.length; s++) i += d(r, t, e[s], 46 === i.charCodeAt(i.length - 1)), o && (i += a[s]);
                h.lastIndex = 0;
                for (var l, c = ""; null !== (l = h.exec(i));) c += "-" + l[1];
                return {
                    name: n(i) + c,
                    styles: i,
                    next: p
                }
            }
        },
        iC9S: (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => n
            });
            var n = function() {
                function e(e) {
                    this.isSpeedy = void 0 === e.speedy || e.speedy, this.tags = [], this.ctr = 0, this.nonce = e.nonce, this.key = e.key, this.container = e.container, this.before = null
                }
                var t = e.prototype;
                return t.insert = function(e) {
                    if (this.ctr % (this.isSpeedy ? 65e3 : 1) === 0) {
                        var t, r = function(e) {
                            var t = document.createElement("style");
                            return t.setAttribute("data-emotion", e.key), void 0 !== e.nonce && t.setAttribute("nonce", e.nonce), t.appendChild(document.createTextNode("")), t
                        }(this);
                        t = 0 === this.tags.length ? this.before : this.tags[this.tags.length - 1].nextSibling, this.container.insertBefore(r, t), this.tags.push(r)
                    }
                    var n = this.tags[this.tags.length - 1];
                    if (this.isSpeedy) {
                        var o = function(e) {
                            if (e.sheet) return e.sheet;
                            for (var t = 0; t < document.styleSheets.length; t++)
                                if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t]
                        }(n);
                        try {
                            var i = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0);
                            o.insertRule(e, i ? 0 : o.cssRules.length)
                        } catch (a) {
                            0
                        }
                    } else n.appendChild(document.createTextNode(e));
                    this.ctr++
                }, t.flush = function() {
                    this.tags.forEach((function(e) {
                        return e.parentNode.removeChild(e)
                    })), this.tags = [], this.ctr = 0
                }, e
            }()
        },
        "3xeB": (e, t, r) => {
            "use strict";
            r.d(t, {
                R: () => n,
                s: () => o
            });

            function n(e, t, r) {
                var n = "";
                return r.split(" ").forEach((function(r) {
                    void 0 !== e[r] ? t.push(e[r]) : n += r + " "
                })), n
            }
            var o = function(e, t, r) {
                var n = e.key + "-" + t.name;
                if (!1 === r && void 0 === e.registered[n] && (e.registered[n] = t.styles), void 0 === e.inserted[t.name]) {
                    var o = t;
                    do {
                        e.insert("." + n, o, e.sheet, !0);
                        o = o.next
                    } while (void 0 !== o)
                }
            }
        },
        "Y1+p": (e, t, r) => {
            "use strict";
            r.d(t, {
                J: () => p
            });
            var n = r("ezuS"),
                o = r("BK7R"),
                i = r("QUKP"),
                a = r("gZfF"),
                s = r("TrCV"),
                l = r("O94r"),
                c = r.n(l),
                u = r("eeEA"),
                d = r("k5JY"),
                p = function(e) {
                    var t = e.header,
                        r = e.footer,
                        l = e.children,
                        p = e.showClose,
                        h = void 0 !== p && p,
                        g = e.onClose,
                        f = e.withActionSheetStyle,
                        b = void 0 !== f && f,
                        m = e.className,
                        x = (0, a.A)(e, ["header", "footer", "children", "showClose", "onClose", "withActionSheetStyle", "className"]);
                    return (0, s.jsx)(s.Fragment, {
                        children: (0, s.jsxs)(d.Ay, (0, i.A)((0, o.A)({}, x), {
                            enablePortal: !0,
                            className: c()("CommonModal", m, (0, n.A)({
                                "CommonModal--ActionSheet": b
                            }, m || "", m)),
                            children: [(0, s.jsx)(d.Ay.Header, {
                                showNext: h,
                                onNextClick: g,
                                children: (0, s.jsx)(u.Ay, {
                                    className: "ul-flex-1",
                                    children: t
                                })
                            }), l && (0, s.jsx)(d.Ay.Content, {
                                children: l
                            }), r && (0, s.jsx)(d.Ay.Footer, {
                                children: (0, s.jsx)(s.Fragment, {
                                    children: r
                                })
                            })]
                        }))
                    })
                }
        },
        "5/aQ": (e, t, r) => {
            "use strict";
            r.d(t, {
                v: () => l
            });
            var n = r("BK7R"),
                o = r("QUKP"),
                i = r("TrCV"),
                a = r("Y4uf"),
                s = r("DTvD"),
                l = function(e) {
                    var t = (0, s.useMemo)((function() {
                        return Math.random()
                    }), []);
                    return (0, i.jsxs)(a.A, (0, o.A)((0, n.A)({
                        width: "97",
                        height: "96",
                        viewBox: "0 0 97 96"
                    }, e), {
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, i.jsx)("path", {
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: "M88.5 48C88.5 70.0914 70.5914 88 48.5 88C26.4086 88 8.5 70.0914 8.5 48C8.5 25.9086 26.4086 8 48.5 8C70.5914 8 88.5 25.9086 88.5 48Z",
                            fill: "url(#paint0_linear_681_43855_".concat(t, ")")
                        }), (0, i.jsx)("path", {
                            d: "M48.5 19C64.5163 19 77.5 31.9837 77.5 48C77.5 64.0163 64.5163 77 48.5 77C32.4837 77 19.5 64.0163 19.5 48C19.5 31.9837 32.4837 19 48.5 19Z",
                            fill: "url(#paint1_linear_681_43855_".concat(t, ")")
                        }), (0, i.jsx)("path", {
                            d: "M45.5 66H51.5V60H45.5V66Z",
                            fill: "#14151A"
                        }), (0, i.jsx)("path", {
                            d: "M51.5 54V30H45.5V54L51.5 54Z",
                            fill: "#14151A"
                        }), (0, i.jsxs)("defs", {
                            children: [(0, i.jsxs)("linearGradient", {
                                id: "paint0_linear_681_43855_".concat(t),
                                x1: "8.5",
                                y1: "48",
                                x2: "103",
                                y2: "48",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, i.jsx)("stop", {
                                    stopColor: "#F0B90B",
                                    stopOpacity: "0"
                                }), (0, i.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F0B90B"
                                })]
                            }), (0, i.jsxs)("linearGradient", {
                                id: "paint1_linear_681_43855_".concat(t),
                                x1: "77.5",
                                y1: "48",
                                x2: "19.5",
                                y2: "48",
                                gradientUnits: "userSpaceOnUse",
                                children: [(0, i.jsx)("stop", {
                                    stopColor: "#F0B90B"
                                }), (0, i.jsx)("stop", {
                                    offset: "1",
                                    stopColor: "#F8D33A"
                                })]
                            })]
                        })]
                    }))
                }
        },
        "/vTW": (e, t, r) => {
            "use strict";
            r.d(t, {
                default: () => fi
            });
            var n = r("BK7R"),
                o = r("TrCV"),
                i = r("UgDF"),
                a = r("A1pX"),
                s = r("DTvD"),
                l = r.n(s),
                c = r("V0mm"),
                u = r("/Q1k"),
                d = r("BK9r"),
                p = r("M5j3"),
                h = r("QUKP"),
                g = r("gZfF"),
                f = r("N/Z2"),
                b = r("yxv7"),
                m = r("uHCZ"),
                x = r("ySFI"),
                v = r("VP0d"),
                y = r("HS2I"),
                E = r("nn0X"),
                A = r("zJWh"),
                w = r("Z/B3"),
                B = r("+Yhp"),
                S = r("0ff3"),
                C = r("Zu1U"),
                F = r("fqkG"),
                D = r("0HvA"),
                k = (0, C.S)(),
                R = k.isHybrid,
                T = k.clientVersion,
                _ = R && (0, S.gte)(T, "2.57.0");

            function I() {
                var e = (0, v.A)((0, s.useState)(!0), 2),
                    t = e[0],
                    r = e[1],
                    n = (0, v.A)((0, s.useState)(null), 2),
                    o = n[0],
                    i = n[1];
                return (0, s.useEffect)((function() {
                    _ ? (F.A.getAppConfig().then((function(e) {
                        (null === e || void 0 === e ? void 0 : e.themeMode) && i(e.themeMode)
                    })).catch((function(e) {
                        D.vF.error("[utils | useHybridTheme] Error while fetching app config via h5 bridge"), D.vF.error(e)
                    })).finally((function() {
                        r(!1)
                    })), F.A.on("theme-change", (function(e) {
                        var t = e.theme;
                        t && i(t)
                    }))) : r(!1)
                }), []), {
                    isLoading: t,
                    hybridTheme: o
                }
            }
            var L = function(e) {
                    return Object.values(w.C).includes(e)
                },
                O = function(e) {
                    var t, r = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        o = (0, v.A)((0, s.useState)(!1), 2),
                        i = o[0],
                        a = o[1],
                        l = (0, E.DP)(),
                        c = l.isLight,
                        u = l.toggleTheme,
                        d = I().hybridTheme,
                        p = (0, s.useMemo)((function() {
                            return A.U.read(w.k)
                        }), []),
                        g = null === (t = e || d || p) || void 0 === t ? void 0 : t.toLowerCase();
                    (0, s.useEffect)((function() {
                        a(!g)
                    }), [g]), (0, s.useEffect)((function() {
                        var t = function(t) {
                            return p && e && p !== e && A.U.writeCookieWithDomainLevelV2(w.k, p, 365, !0, "High"), ""
                        };
                        return window.addEventListener("beforeunload", t, {
                                once: !0
                            }),
                            function() {
                                window.removeEventListener("beforeunload", t)
                            }
                    }), []), (0, s.useEffect)((function() {
                        i || r || (a(!0), L(g) && (0, B.k)(g) !== c && u())
                    }), [c, r, g, i, u]);
                    var f = (0, y.useTheme)(),
                        b = f.theme,
                        m = f.setTheme,
                        x = f.toggleTheme,
                        S = b.toLowerCase(),
                        C = (0, y.useAllConfig)().setConfig;
                    return (0, s.useEffect)((function() {
                        !i && r && (a(!0), L(g) && (S !== g && m(g), e && C((function(t) {
                            return (0, h.A)((0, n.A)({}, t), {
                                header: (0, h.A)((0, n.A)({}, null === t || void 0 === t ? void 0 : t.header), {
                                    theme: e
                                }),
                                footer: (0, h.A)((0, n.A)({}, null === t || void 0 === t ? void 0 : t.footer), {
                                    theme: e
                                })
                            })
                        }))))
                    }), [i, r, S, e, g]), (0, s.useEffect)((function() {
                        if (r && L(S)) {
                            var e = (0, B.k)(S);
                            c !== e && u()
                        }
                    }), [r, c, S]), {
                        isLight: c,
                        toggleTheme: r ? x : u,
                        themeChecked: i
                    }
                },
                H = r("JfTh"),
                N = l().createContext({
                    mobile: !1,
                    tablet: !1,
                    desktop: !0,
                    updateMedia: function() {}
                }),
                P = r("2URn");

            function z(e) {
                for (var t = [], r = 0; r < e.length;) {
                    var n = e[r];
                    if ("*" !== n && "+" !== n && "?" !== n)
                        if ("\\" !== n)
                            if ("{" !== n)
                                if ("}" !== n)
                                    if (":" !== n)
                                        if ("(" !== n) t.push({
                                            type: "CHAR",
                                            index: r,
                                            value: e[r++]
                                        });
                                        else {
                                            var o = 1,
                                                i = "",
                                                a = r + 1;
                                            if ("?" === e[a]) throw new TypeError('Pattern cannot start with "?" at '.concat(a));
                                            for (; a < e.length;)
                                                if ("\\" !== e[a]) {
                                                    if (")" === e[a]) {
                                                        if (0 === --o) {
                                                            a++;
                                                            break
                                                        }
                                                    } else if ("(" === e[a] && (o++, "?" !== e[a + 1])) throw new TypeError("Capturing groups are not allowed at ".concat(a));
                                                    i += e[a++]
                                                } else i += e[a++] + e[a++];
                                            if (o) throw new TypeError("Unbalanced pattern at ".concat(r));
                                            if (!i) throw new TypeError("Missing pattern at ".concat(r));
                                            t.push({
                                                type: "PATTERN",
                                                index: r,
                                                value: i
                                            }), r = a
                                        }
                    else {
                        for (var s = "", l = r + 1; l < e.length;) {
                            var c = e.charCodeAt(l);
                            if (!(c >= 48 && c <= 57 || c >= 65 && c <= 90 || c >= 97 && c <= 122 || 95 === c)) break;
                            s += e[l++]
                        }
                        if (!s) throw new TypeError("Missing parameter name at ".concat(r));
                        t.push({
                            type: "NAME",
                            index: r,
                            value: s
                        }), r = l
                    } else t.push({
                        type: "CLOSE",
                        index: r,
                        value: e[r++]
                    });
                    else t.push({
                        type: "OPEN",
                        index: r,
                        value: e[r++]
                    });
                    else t.push({
                        type: "ESCAPED_CHAR",
                        index: r++,
                        value: e[r++]
                    });
                    else t.push({
                        type: "MODIFIER",
                        index: r,
                        value: e[r++]
                    })
                }
                return t.push({
                    type: "END",
                    index: r,
                    value: ""
                }), t
            }

            function $(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r = z(e), n = t.prefixes, o = void 0 === n ? "./" : n, i = "[^".concat(G(t.delimiter || "/#?"), "]+?"), a = [], s = 0, l = 0, c = "", u = function(e) {
                        if (l < r.length && r[l].type === e) return r[l++].value
                    }, d = function(e) {
                        var t = u(e);
                        if (void 0 !== t) return t;
                        var n = r[l],
                            o = n.type,
                            i = n.index;
                        throw new TypeError("Unexpected ".concat(o, " at ").concat(i, ", expected ").concat(e))
                    }, p = function() {
                        for (var e, t = ""; e = u("CHAR") || u("ESCAPED_CHAR");) t += e;
                        return t
                    }; l < r.length;) {
                    var h = u("CHAR"),
                        g = u("NAME"),
                        f = u("PATTERN");
                    if (g || f) {
                        var b = h || ""; - 1 === o.indexOf(b) && (c += b, b = ""), c && (a.push(c), c = ""), a.push({
                            name: g || s++,
                            prefix: b,
                            suffix: "",
                            pattern: f || i,
                            modifier: u("MODIFIER") || ""
                        })
                    } else {
                        var m = h || u("ESCAPED_CHAR");
                        if (m) c += m;
                        else {
                            c && (a.push(c), c = "");
                            var x = u("OPEN");
                            if (x) {
                                var v = p(),
                                    y = u("NAME") || "",
                                    E = u("PATTERN") || "",
                                    A = p();
                                d("CLOSE"), a.push({
                                    name: y || (E ? s++ : ""),
                                    pattern: y && !E ? i : E,
                                    prefix: v,
                                    suffix: A,
                                    modifier: u("MODIFIER") || ""
                                })
                            } else d("END")
                        }
                    }
                }
                return a
            }

            function G(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function M(e) {
                return e && e.sensitive ? "" : "i"
            }

            function j(e, t, r) {
                return function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        n = r.strict,
                        o = void 0 !== n && n,
                        i = r.start,
                        a = void 0 === i || i,
                        s = r.end,
                        l = void 0 === s || s,
                        c = r.encode,
                        u = void 0 === c ? function(e) {
                            return e
                        } : c,
                        d = "[".concat(G(r.endsWith || ""), "]|$"),
                        p = "[".concat(G(r.delimiter || "/#?"), "]"),
                        h = a ? "^" : "",
                        g = !0,
                        f = !1,
                        b = void 0;
                    try {
                        for (var m, x = e[Symbol.iterator](); !(g = (m = x.next()).done); g = !0) {
                            var v = m.value;
                            if ("string" === typeof v) h += G(u(v));
                            else {
                                var y = G(u(v.prefix)),
                                    E = G(u(v.suffix));
                                if (v.pattern)
                                    if (t && t.push(v), y || E)
                                        if ("+" === v.modifier || "*" === v.modifier) {
                                            var A = "*" === v.modifier ? "?" : "";
                                            h += "(?:".concat(y, "((?:").concat(v.pattern, ")(?:").concat(E).concat(y, "(?:").concat(v.pattern, "))*)").concat(E, ")").concat(A)
                                        } else h += "(?:".concat(y, "(").concat(v.pattern, ")").concat(E, ")").concat(v.modifier);
                                else h += "(".concat(v.pattern, ")").concat(v.modifier);
                                else h += "(?:".concat(y).concat(E, ")").concat(v.modifier)
                            }
                        }
                    } catch (S) {
                        f = !0, b = S
                    } finally {
                        try {
                            g || null == x.return || x.return()
                        } finally {
                            if (f) throw b
                        }
                    }
                    if (l) o || (h += "".concat(p, "?")), h += r.endsWith ? "(?=".concat(d, ")") : "$";
                    else {
                        var w = e[e.length - 1],
                            B = "string" === typeof w ? p.indexOf(w[w.length - 1]) > -1 : void 0 === w;
                        o || (h += "(?:".concat(p, "(?=").concat(d, "))?")), B || (h += "(?=".concat(p, "|").concat(d, ")"))
                    }
                    return new RegExp(h, M(r))
                }($(e, r), t, r)
            }

            function W(e, t, r) {
                return (0, P.A)(e, RegExp) ? function(e, t) {
                    if (!t) return e;
                    var r = e.source.match(/\((?!\?)/g);
                    if (r)
                        for (var n = 0; n < r.length; n++) t.push({
                            name: n,
                            prefix: "",
                            suffix: "",
                            modifier: "",
                            pattern: ""
                        });
                    return e
                }(e, t) : Array.isArray(e) ? function(e, t, r) {
                    var n = e.map((function(e) {
                        return W(e, t, r).source
                    }));
                    return new RegExp("(?:".concat(n.join("|"), ")"), M(r))
                }(e, t, r) : j(e, t, r)
            }
            var U = {
                    "&": "&amp;",
                    '"': "&quot;",
                    "'": "&#39;",
                    ">": "&gt;",
                    "<": "&lt;"
                },
                q = /[&><'"]/g;

            function Q(e, t) {
                var r = "".concat(e.replace(/\/+$/, ""), "/").concat(t.replace(/^\/+/, ""));
                return r.replace(q, (function(e) {
                    return U[e]
                }))
            }

            function V(e) {
                var t = e.canonicalPathMap,
                    r = void 0 === t ? {} : t,
                    n = e.canonicalBase,
                    o = function(e) {
                        var t = Object.keys(e).map((function(t) {
                            var r = W(t);
                            return function(n) {
                                return r.test(n) ? e[t] : null
                            }
                        }));
                        return function(e) {
                            for (var r = null, n = 0; !r && n < t.length; n++) r = (0, t[n])(e);
                            return r || e
                        }
                    }(r);
                return function(e) {
                    var t = e.canonicalBase,
                        r = void 0 === t ? n : t,
                        i = e.req,
                        a = e.fromAmp,
                        s = void 0 === a || a,
                        l = i.path.replace(/\?.*$/, "");
                    return [{
                        lang: "canonical",
                        rel: s ? "canonical" : "amphtml",
                        href: Q(r, o(l))
                    }]
                }
            }

            function Y() {
                var e = (0, f.A)(["\n            #__APP_HEADER {\n              ", "\n            }\n            #__APP_FOOTER {\n              ", "\n            }\n            body {\n              background-color: ", ";\n            }\n          "]);
                return Y = function() {
                    return e
                }, e
            }
            var X, K = (X = function(e) {
                    var t = e.children,
                        r = e.metaData,
                        o = e.linkData,
                        i = void 0 === o ? [] : o,
                        a = (0, g.A)(e, ["children", "metaData", "linkData"]),
                        c = (0, H.B)().t,
                        u = r.titleKey,
                        d = r.descriptionKey,
                        f = r.publicAssetUrl,
                        b = void 0 === f ? "https://public.bnbstatic.com" : f,
                        x = r.brand,
                        v = void 0 === x ? "binance" : x,
                        y = r.type,
                        E = void 0 === y ? "website" : y,
                        A = r.seoLinks,
                        w = u ? c(u) : r.title,
                        B = d ? c(d) : r.description,
                        S = function() {
                            var e = (0, s.useContext)(N),
                                t = e.mobile,
                                r = e.tablet,
                                n = e.desktop;
                            return (0, s.useMemo)((function() {
                                return {
                                    isTablet: r,
                                    isMobile: t,
                                    isDesktop: n
                                }
                            }), [t, r, n])
                        }().isMobile,
                        C = r.url || "https://www.binance.com",
                        F = r.image || "".concat(b, "/static/images/common/ogImage.jpg"),
                        D = a.staticUrl,
                        k = A ? V({
                            canonicalBase: A.canonicalBase,
                            langRules: [{
                                test: "/:pre/:after*",
                                path: "/#lang/:after"
                            }]
                        })({
                            req: {
                                path: A.reqPath
                            }
                        }) : null,
                        R = (0, s.useMemo)((function() {
                            var e = r.noIndex,
                                t = void 0 !== e && e,
                                n = r.noFollow,
                                o = void 0 !== n && n;
                            if (!t && !o) return null;
                            var i = [t && "noindex", o && "nofollow"].filter(Boolean).join(",");
                            return l().createElement("meta", {
                                name: "robots",
                                content: i
                            })
                        }), [r.noIndex, r.noFollow]);
                    return l().createElement(l().Fragment, null, l().createElement(m.A, null, l().createElement("link", {
                        rel: "preconnect",
                        href: D
                    }), i.map((function(e) {
                        var t = e.rel,
                            r = e.href,
                            o = (0, g.A)(e, ["rel", "href"]);
                        return l().createElement("link", (0, p.A)({}, (0, h.A)((0, n.A)({}, o), {
                            rel: t,
                            href: r
                        }), {
                            key: "".concat(t, "-").concat(r)
                        }))
                    })), l().createElement("title", null, w), B && l().createElement("meta", {
                        name: "description",
                        content: B
                    }), r.keywords && l().createElement("meta", {
                        name: "keywords",
                        content: r.keywords
                    }), R, S && l().createElement("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                    }), null === k || void 0 === k ? void 0 : k.map((function(e) {
                        var t = e.lang,
                            r = (0, g.A)(e, ["lang"]);
                        return l().createElement("link", (0, p.A)({
                            key: t
                        }, r))
                    })), l().createElement("meta", {
                        property: "og:url",
                        content: C
                    }), l().createElement("meta", {
                        property: "og:type",
                        content: E
                    }), l().createElement("meta", {
                        property: "og:title",
                        content: w
                    }), l().createElement("meta", {
                        property: "og:site_name",
                        content: v
                    }), l().createElement("meta", {
                        property: "og:image",
                        content: F
                    }), l().createElement("meta", {
                        property: "twitter:title",
                        content: w
                    }), l().createElement("meta", {
                        property: "twitter:site",
                        content: v
                    }), l().createElement("meta", {
                        property: "twitter:image",
                        content: F
                    }), l().createElement("meta", {
                        property: "twitter:image:src",
                        content: F
                    })), t)
                }, function(e) {
                    var t = e.withHeader,
                        r = void 0 === t ? !x.lL : t,
                        n = e.withFooter,
                        o = void 0 === n ? !x.lL : n,
                        i = e.theme,
                        a = (0, g.A)(e, ["withHeader", "withFooter", "theme"]),
                        s = O(i, !0).isLight;
                    return l().createElement(l().Fragment, null, l().createElement(b.mL, {
                        styles: (0, b.AH)(Y(), !x.lL && r ? "" : "display: none;", o ? "" : "display: none;", s ? "#ffffff" : "#181A20")
                    }), l().createElement(X, (0, p.A)({}, a)))
                }),
                Z = r("5tkj"),
                J = r("xrNQ"),
                ee = r("MXiP"),
                te = r("LKsJ"),
                re = r("N3iv"),
                ne = r("oVQP"),
                oe = r("wIZF"),
                ie = "#FFFFFF",
                ae = "#FAFAFA",
                se = "#F5F5F5",
                le = "#EDEDED",
                ce = "#DDDDDD",
                ue = "#CFCFCF",
                de = "#BFBFBF",
                pe = "#9C9C9C",
                he = "#909090",
                ge = "#7D7D7D",
                fe = "#696969",
                be = "#4F4F4F",
                me = "#323232",
                xe = "#242424",
                ve = "#282828",
                ye = "#222222",
                Ee = "#1C1C1C",
                Ae = "#111111",
                we = "#000000",
                Be = "#FFFFFF",
                Se = "#EAECEF",
                Ce = "#CACED3",
                Fe = "#B7BDC6",
                De = "#848E9C",
                ke = "#707A8A",
                Re = "#5E6673",
                Te = "#474D57",
                _e = "#2B3139",
                Ie = "#1E2329",
                Le = "#202630",
                Oe = "#181A20",
                He = "#191A1F",
                Ne = "#0B0E11",
                Pe = "#FCD535",
                ze = "#F0B90B",
                $e = "#C99400",
                Ge = "#A37200",
                Me = "#8D5F02",
                je = "#E6FFF1",
                We = "#32D993",
                Ue = "#2EBD85",
                qe = "#28A473",
                Qe = "#102821",
                Ve = "#FEF1F2",
                Ye = "#FF707E",
                Xe = "#F6465D",
                Ke = "#E33B54",
                Ze = "#F63C55",
                Je = "#35141D",
                et = {
                    BasicBg: ie,
                    SecondaryBg: ae,
                    Input: se,
                    InputLine: ce,
                    CardBg: ie,
                    Vessel: ae,
                    Line: le,
                    DisableBtn: le,
                    DisableText: de,
                    TertiaryText: ge,
                    SecondaryText: be,
                    PrimaryText: ve,
                    RedGreenBgText: ie,
                    EmphasizeText: "#FF693D",
                    TextOnGray: le,
                    TextOnYellow: ve,
                    IconNormal: pe,
                    LiteBg1: ie,
                    LiteBg2: ae,
                    TwoColorIcon: be,
                    TradeBg: se,
                    BadgeBg: "rgba(240,185,11,0.1)",
                    BtnBg: Pe,
                    PrimaryYellow: ze,
                    TextLink: $e,
                    TextToast: Me,
                    DepthSellBg: Ve,
                    SellHover: Ye,
                    Sell: Xe,
                    TextSell: Ke,
                    DepthBuyBg: je,
                    BuyHover: We,
                    Buy: Ue,
                    TextBuy: Ue,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    Error: Ke,
                    SuccessBg: je,
                    Success: Ue,
                    TagBg: le,
                    Grid: le,
                    Placeholder: de,
                    ToastBg: ge,
                    Popup: ie,
                    Mask: "rgba(0, 0, 0, 0.6)",
                    WidgetSecondaryBg: "rgba(0, 0, 0, 0.04)",
                    ContainerBg: ae,
                    YellowAlpha10: "rgba(252, 213, 53, 0.1)",
                    YellowAlpha20: "rgba(252, 213, 53, 0.2)",
                    RedAlpha10: "rgba(246, 70, 93, 0.1)",
                    RedAlpha20: "rgba(246, 70, 93, 0.2)",
                    GreenAlpha10: "rgba(46, 189, 133, 0.1)",
                    GreenAlpha20: "rgba(46, 189, 133, 0.2)"
                },
                tt = {
                    DepthBuyBg: Ve,
                    BuyHover: Ye,
                    Buy: Xe,
                    TextBuy: Ke,
                    DepthSellBg: je,
                    SellHover: We,
                    Sell: Ue,
                    TextSell: Ue,
                    RedAlpha10: "rgba(46, 189, 133, 0.1)",
                    RedAlpha20: "rgba(46, 189, 133, 0.2)",
                    GreenAlpha10: "rgba(246, 70, 93, 0.1)",
                    GreenAlpha20: "rgba(246, 70, 93, 0.2)"
                },
                rt = {
                    BasicBg: we,
                    SecondaryBg: we,
                    Input: ye,
                    InputLine: be,
                    CardBg: xe,
                    Vessel: xe,
                    Line: me,
                    DisableBtn: me,
                    DisableText: fe,
                    TertiaryText: he,
                    SecondaryText: de,
                    PrimaryText: le,
                    RedGreenBgText: ie,
                    TextOnGray: le,
                    TextOnYellow: ve,
                    IconNormal: he,
                    LiteBg1: ve,
                    LiteBg2: Ae,
                    TwoColorIcon: ue,
                    TradeBg: we,
                    BadgeBg: "rgba(240, 185, 11, 0.1)",
                    BtnBg: Pe,
                    PrimaryYellow: ze,
                    TextLink: ze,
                    TextToast: Ge,
                    DepthSellBg: Je,
                    SellHover: Ye,
                    Sell: Ze,
                    TextSell: Ze,
                    DepthBuyBg: Qe,
                    BuyHover: We,
                    Buy: qe,
                    TextBuy: qe,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    Error: Ze,
                    SuccessBg: Qe,
                    Success: qe,
                    EmphasizeText: "#FF693D",
                    ToastBg: ge,
                    TagBg: be,
                    Grid: me,
                    Placeholder: be,
                    Popup: ve,
                    Mask: "rgba(0, 0, 0, 0.6)",
                    WidgetSecondaryBg: "rgba(255, 255, 255, 0.04)",
                    ContainerBg: Ee,
                    YellowAlpha10: "rgba(252, 213, 53, 0.1)",
                    YellowAlpha20: "rgba(252, 213, 53, 0.2)",
                    RedAlpha10: "rgba(246, 60, 85, 0.1)",
                    RedAlpha20: "rgba(246, 60, 85, 0.2)",
                    GreenAlpha10: "rgba(40, 164, 115, 0.1)",
                    GreenAlpha20: "rgba(40, 164, 115, 0.2)"
                },
                nt = {
                    DepthBuyBg: Je,
                    BuyHover: Ye,
                    Buy: Ze,
                    TextBuy: Ze,
                    DepthSellBg: Qe,
                    SellHover: We,
                    Sell: qe,
                    TextSell: qe,
                    RedAlpha10: "rgba(40, 164, 115, 0.1)",
                    RedAlpha20: "rgba(40, 164, 115, 0.2)",
                    GreenAlpha10: "rgba(246, 60, 85, 0.1)",
                    GreenAlpha20: "rgba(246, 60, 85, 0.2)"
                },
                ot = {
                    BasicBg: Oe,
                    SecondaryBg: Ne,
                    Input: _e,
                    InputLine: Te,
                    CardBg: Ie,
                    Vessel: Ie,
                    Line: _e,
                    DisableBtn: _e,
                    DisableText: Re,
                    TertiaryText: De,
                    SecondaryText: Fe,
                    PrimaryText: Se,
                    RedGreenBgText: Be,
                    EmphasizeText: "#FF693D",
                    TextOnGray: Se,
                    TextOnYellow: Le,
                    IconNormal: De,
                    LiteBg1: Le,
                    LiteBg2: He,
                    BtnBg: Pe,
                    PrimaryYellow: ze,
                    TextLink: ze,
                    TradeBg: Ne,
                    TextToast: Ge,
                    DepthSellBg: Je,
                    SellHover: Ye,
                    Sell: Xe,
                    TextSell: Xe,
                    DepthBuyBg: Qe,
                    BuyHover: We,
                    Buy: Ue,
                    TextBuy: Ue,
                    Error: Xe,
                    SuccessBg: Qe,
                    Success: Ue,
                    TagBg: Te,
                    Grid: _e,
                    Placeholder: Te,
                    ToastBg: ke,
                    TwoColorIcon: Ce,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)",
                    Popup: _e,
                    Mask: "rgba(11, 14, 17, 0.6)",
                    WidgetSecondaryBg: "rgba(193, 204, 219, 0.08)",
                    ContainerBg: Ie,
                    YellowAlpha10: "rgba(252, 213, 53, 0.1)",
                    YellowAlpha20: "rgba(252, 213, 53, 0.2)",
                    RedAlpha10: "rgba(246, 70, 93, 0.1)",
                    RedAlpha20: "rgba(246, 70, 93, 0.2)",
                    GreenAlpha10: "rgba(46, 189, 133, 0.1)",
                    GreenAlpha20: "rgba(46, 189, 133, 0.2)"
                },
                it = {
                    DepthBuyBg: Je,
                    BuyHover: Ye,
                    Buy: Xe,
                    TextBuy: Xe,
                    DepthSellBg: Qe,
                    SellHover: We,
                    Sell: Ue,
                    TextSell: Ue,
                    RedAlpha10: "rgba(46, 189, 133, 0.1)",
                    RedAlpha20: "rgba(46, 189, 133, 0.2)",
                    GreenAlpha10: "rgba(246, 70, 93, 0.1)",
                    GreenAlpha20: "rgba(246, 70, 93, 0.2)"
                },
                at = "#FFFFFF",
                st = "#FAFAFA",
                lt = "#F5F5F5",
                ct = "#EDEDED",
                ut = "#DDDDDD",
                dt = "#BFBFBF",
                pt = "#909090",
                ht = "#7D7D7D",
                gt = "#4F4F4F",
                ft = "#3D3D3D",
                bt = "#282828",
                mt = "#1F1F1F",
                xt = "#000000",
                vt = "#EAECEF",
                yt = "#707A8A",
                Et = "#4F5867",
                At = "#434C5A",
                wt = "#303846",
                Bt = "#29313D",
                St = "#202630",
                Ct = "#191A1F",
                Ft = "#FCD535",
                Dt = "#F0B90B",
                kt = "#E6FFF1",
                Rt = "#2EBD85",
                Tt = "#28A473",
                _t = "#102821",
                It = "#FEF1F2",
                Lt = "#F6465D",
                Ot = "#F63C55",
                Ht = "#35141D",
                Nt = {
                    BasicBg: at,
                    SecondaryBg: st,
                    Input: lt,
                    InputLine: ut,
                    CardBg: at,
                    TagBg: ct,
                    Line: ct,
                    DisableBtn: ut,
                    Grid: ct,
                    DisableText: dt,
                    Placeholder: dt,
                    TertiaryText: dt,
                    SecondaryText: pt,
                    PrimaryText: xt,
                    RedGreenBgText: at,
                    EmphasizeText: "#FF693D",
                    TextOnGray: ct,
                    TextOnYellow: xt,
                    IconNormal: "#9C9C9C",
                    ToastBg: "rgba(40, 40, 40, 0.95)",
                    BtnBg: Ft,
                    PrimaryYellow: Dt,
                    TextLink: "#D89F00",
                    TradeBg: lt,
                    SellHover: Lt,
                    Sell: Lt,
                    TextSell: Lt,
                    DepthBuyBg: kt,
                    BuyHover: Rt,
                    Buy: Rt,
                    TextBuy: Rt,
                    Error: Lt,
                    Success: Rt,
                    Vessel: st,
                    LiteBg1: at,
                    LiteBg2: st,
                    TextToast: Dt,
                    DepthSellBg: It,
                    SuccessBg: kt,
                    TwoColorIcon: gt,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)",
                    Popup: at,
                    Mask: "rgba(0, 0, 0, 0.6)",
                    WidgetSecondaryBg: "rgba(0, 0, 0, 0.04)",
                    ContainerBg: st,
                    YellowAlpha10: "rgba(252, 213, 53, 0.1)",
                    YellowAlpha20: "rgba(252, 213, 53, 0.2)",
                    RedAlpha10: "rgba(246, 70, 93, 0.1)",
                    RedAlpha20: "rgba(246, 70, 93, 0.2)",
                    GreenAlpha10: "rgba(46, 189, 133, 0.1)",
                    GreenAlpha20: "rgba(46, 189, 133, 0.2)"
                },
                Pt = {
                    DepthBuyBg: It,
                    BuyHover: Lt,
                    Buy: Lt,
                    TextBuy: Lt,
                    DepthSellBg: kt,
                    SellHover: Rt,
                    Sell: Rt,
                    TextSell: Rt,
                    RedAlpha10: "rgba(46, 189, 133, 0.1)",
                    RedAlpha20: "rgba(46, 189, 133, 0.2)",
                    GreenAlpha10: "rgba(246, 70, 93, 0.1)",
                    GreenAlpha20: "rgba(246, 70, 93, 0.2)"
                },
                zt = {
                    BasicBg: xt,
                    Input: "#222222",
                    CardBg: "#1A1A1A",
                    Vessel: "#333333",
                    TagBg: gt,
                    Line: ft,
                    DisableBtn: gt,
                    DisableText: ht,
                    TertiaryText: "#5B5B5B",
                    SecondaryText: pt,
                    PrimaryText: at,
                    RedGreenBgText: at,
                    TextOnGray: ct,
                    TextOnYellow: xt,
                    IconNormal: ht,
                    ToastBg: "rgba(79, 79, 79, 0.95)",
                    TwoColorIcon: gt,
                    TradeBg: "#111111",
                    BtnBg: Ft,
                    PrimaryYellow: Dt,
                    TextLink: Dt,
                    Sell: Ot,
                    Buy: Tt,
                    Error: Ot,
                    Success: Tt,
                    EmphasizeText: "#FF693D",
                    SecondaryBg: mt,
                    InputLine: gt,
                    Grid: ft,
                    Placeholder: gt,
                    SellHover: Lt,
                    TextSell: Ot,
                    DepthBuyBg: _t,
                    BuyHover: Rt,
                    TextBuy: Tt,
                    LiteBg1: bt,
                    LiteBg2: mt,
                    TextToast: Dt,
                    DepthSellBg: Ht,
                    SuccessBg: _t,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240, 185, 11, 0.1)",
                    Popup: bt,
                    Mask: "rgba(0, 0, 0, 0.6)",
                    WidgetSecondaryBg: "rgba(255, 255, 255, 0.08)",
                    ContainerBg: "#1A1A1A",
                    YellowAlpha10: "rgba(252, 213, 53, 0.1)",
                    YellowAlpha20: "rgba(252, 213, 53, 0.2)",
                    RedAlpha10: "rgba(246, 60, 85, 0.1)",
                    RedAlpha20: "rgba(246, 60, 85, 0.2)",
                    GreenAlpha10: "rgba(40, 164, 115, 0.1)",
                    GreenAlpha20: "rgba(40, 164, 115, 0.2)"
                },
                $t = {
                    DepthBuyBg: Ht,
                    BuyHover: Lt,
                    Buy: Ot,
                    TextBuy: Ot,
                    DepthSellBg: _t,
                    SellHover: Rt,
                    Sell: Tt,
                    TextSell: Tt,
                    RedAlpha10: "rgba(40, 164, 115, 0.1)",
                    RedAlpha20: "rgba(40, 164, 115, 0.2)",
                    GreenAlpha10: "rgba(246, 60, 85, 0.1)",
                    GreenAlpha20: "rgba(246, 60, 85, 0.2)"
                },
                Gt = {
                    BasicBg: St,
                    SecondaryBg: Ct,
                    Input: Bt,
                    InputLine: At,
                    CardBg: St,
                    TagBg: At,
                    Line: wt,
                    DisableBtn: At,
                    Grid: wt,
                    DisableText: yt,
                    Placeholder: At,
                    TertiaryText: Et,
                    SecondaryText: "#848E9C",
                    PrimaryText: vt,
                    RedGreenBgText: "#FFFFFF",
                    EmphasizeText: "#FF693D",
                    TextOnGray: vt,
                    TextOnYellow: St,
                    IconNormal: yt,
                    ToastBg: "rgba(79, 88, 103, 0.95)",
                    BtnBg: Ft,
                    PrimaryYellow: Dt,
                    TextLink: Dt,
                    TradeBg: "#0B0E11",
                    SellHover: Lt,
                    Sell: Lt,
                    TextSell: Lt,
                    DepthBuyBg: _t,
                    BuyHover: Rt,
                    Buy: Rt,
                    TextBuy: Rt,
                    Error: Lt,
                    Success: Rt,
                    Vessel: Bt,
                    LiteBg1: St,
                    LiteBg2: Ct,
                    TextToast: Dt,
                    DepthSellBg: Ht,
                    SuccessBg: _t,
                    TwoColorIcon: Et,
                    ErrorBg: "rgba(246, 70, 93, 0.1)",
                    BadgeBg: "rgba(240,185,11,0.1)",
                    Popup: wt,
                    Mask: "rgba(11, 14, 17, 0.6)",
                    WidgetSecondaryBg: "rgba(193, 204, 219, 0.08)",
                    ContainerBg: Bt,
                    YellowAlpha10: "rgba(252, 213, 53, 0.1)",
                    YellowAlpha20: "rgba(252, 213, 53, 0.2)",
                    RedAlpha10: "rgba(246, 70, 93, 0.1)",
                    RedAlpha20: "rgba(246, 70, 93, 0.2)",
                    GreenAlpha10: "rgba(46, 189, 133, 0.1)",
                    GreenAlpha20: "rgba(46, 189, 133, 0.2)"
                },
                Mt = {
                    DepthBuyBg: Ht,
                    BuyHover: Lt,
                    Buy: Lt,
                    TextBuy: Lt,
                    DepthSellBg: _t,
                    SellHover: Rt,
                    Sell: Rt,
                    TextSell: Rt,
                    RedAlpha10: "rgba(46, 189, 133, 0.1)",
                    RedAlpha20: "rgba(46, 189, 133, 0.2)",
                    GreenAlpha10: "rgba(246, 70, 93, 0.1)",
                    GreenAlpha20: "rgba(246, 70, 93, 0.2)"
                },
                jt = ((0, oe.__assign)((0, oe.__assign)({}, et), {
                    mobile: Nt
                }), (0, oe.__assign)((0, oe.__assign)({}, rt), {
                    mobile: zt
                })),
                Wt = ((0, oe.__assign)((0, oe.__assign)({}, ot), {
                    mobile: Gt
                }), r("MEAY")),
                Ut = ((0, oe.__assign)((0, oe.__assign)({}, tt), {
                    mobile: (0, oe.__assign)({}, Pt)
                }), (0, oe.__assign)((0, oe.__assign)({}, {
                    Sell: "#EC8D42",
                    TextSell: "#DD7A2B",
                    SellHover: "#EEA062",
                    DepthSellBg: "#FFEFE2",
                    Buy: "#1F8DF9",
                    TextBuy: "#297FD4",
                    BuyHover: "#69B1F8",
                    DepthBuyBg: "#E6F3FF",
                    Error: "#EC8D42",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF",
                    RedAlpha10: "rgba(221, 122, 43, 0.1)",
                    RedAlpha20: "rgba(221, 122, 43, 0.2)",
                    GreenAlpha10: "rgba(31, 141, 249, 0.1)",
                    GreenAlpha20: "rgba(31, 141, 249, 0.2)"
                }), {
                    mobile: (0, oe.__assign)({}, {
                        Sell: "#DD7A2B",
                        TextSell: "#DD7A2B",
                        SellHover: "#DD7A2B",
                        DepthSellBg: "#FFEFE2",
                        Buy: "#1F8DF9",
                        TextBuy: "#1F8DF9",
                        BuyHover: "#1F8DF9",
                        DepthBuyBg: "#E6F3FF",
                        Error: "#DD7A2B",
                        ErrorBg: "#FFEFE2",
                        Success: "#1F8DF9",
                        SuccessBg: "#E6F3FF",
                        RedAlpha10: "rgba(221, 122, 43, 0.1)",
                        RedAlpha20: "rgba(221, 122, 43, 0.2)",
                        GreenAlpha10: "rgba(31, 141, 249, 0.1)",
                        GreenAlpha20: "rgba(31, 141, 249, 0.2)"
                    })
                }), (0, oe.__assign)((0, oe.__assign)({}, {
                    Sell: "#1F8DF9",
                    TextSell: "#297FD4",
                    SellHover: "#69B1F8",
                    DepthSellBg: "#E6F3FF",
                    Buy: "#EC8D42",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#EEA062",
                    DepthBuyBg: "#FFEFE2",
                    Error: "#EC8D42",
                    ErrorBg: "#FFEFE2",
                    Success: "#1F8DF9",
                    SuccessBg: "#E6F3FF",
                    RedAlpha10: "rgba(31, 141, 249, 0.1)",
                    RedAlpha20: "rgba(31, 141, 249, 0.2)",
                    GreenAlpha10: "rgba(221, 122, 43, 0.1)",
                    GreenAlpha20: "rgba(221, 122, 43, 0.2)"
                }), {
                    mobile: (0, oe.__assign)({}, {
                        Sell: "#1F8DF9",
                        TextSell: "#1F8DF9",
                        SellHover: "#1F8DF9",
                        DepthSellBg: "#E6F3FF",
                        Buy: "#DD7A2B",
                        TextBuy: "#DD7A2B",
                        BuyHover: "#DD7A2B",
                        DepthBuyBg: "#FFEFE2",
                        Error: "#DD7A2B",
                        ErrorBg: "#FFEFE2",
                        Success: "#1F8DF9",
                        SuccessBg: "#E6F3FF",
                        RedAlpha10: "rgba(31, 141, 249, 0.1)",
                        RedAlpha20: "rgba(31, 141, 249, 0.2)",
                        GreenAlpha10: "rgba(221, 122, 43, 0.1)",
                        GreenAlpha20: "rgba(221, 122, 43, 0.2)"
                    })
                }), (0, oe.__assign)((0, oe.__assign)({}, {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#FFD9EB",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1",
                    RedAlpha10: "rgba(234, 0, 112, 0.1)",
                    RedAlpha20: "rgba(234, 0, 112, 0.2)",
                    GreenAlpha10: "rgba(116, 167, 0, 0.1)",
                    GreenAlpha20: "rgba(116, 167, 0, 0.2)"
                }), {
                    mobile: (0, oe.__assign)({}, {
                        Sell: "#EA0070",
                        TextSell: "#EA0070",
                        SellHover: "#EE358D",
                        DepthSellBg: "#FFD9EB",
                        Buy: "#74A700",
                        TextBuy: "#74A700",
                        BuyHover: "#9BCB2F",
                        DepthBuyBg: "#F6FFE1",
                        Error: "#EA0070",
                        ErrorBg: "#FFD9EB",
                        Success: "#74A700",
                        SuccessBg: "#F6FFE1",
                        RedAlpha10: "rgba(234, 0, 112, 0.1)",
                        RedAlpha20: "rgba(234, 0, 112, 0.2)",
                        GreenAlpha10: "rgba(116, 167, 0, 0.1)",
                        GreenAlpha20: "rgba(116, 167, 0, 0.2)"
                    })
                }), (0, oe.__assign)((0, oe.__assign)({}, {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#FFD9EB",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#F6FFE1",
                    Error: "#EA0070",
                    ErrorBg: "#FFD9EB",
                    Success: "#74A700",
                    SuccessBg: "#F6FFE1",
                    RedAlpha10: "rgba(116, 167, 0, 0.1)",
                    RedAlpha20: "rgba(116, 167, 0, 0.2)",
                    GreenAlpha10: "rgba(234, 0, 112, 0.1)",
                    GreenAlpha20: "rgba(234, 0, 112, 0.2)"
                }), {
                    mobile: (0, oe.__assign)({}, {
                        Buy: "#EA0070",
                        TextBuy: "#EA0070",
                        BuyHover: "#EE358D",
                        DepthBuyBg: "#FFD9EB",
                        Sell: "#74A700",
                        TextSell: "#74A700",
                        SellHover: "#9BCB2F",
                        DepthSellBg: "#F6FFE1",
                        Error: "#EA0070",
                        ErrorBg: "#FFD9EB",
                        Success: "#74A700",
                        SuccessBg: "#F6FFE1",
                        RedAlpha10: "rgba(116, 167, 0, 0.1)",
                        RedAlpha20: "rgba(116, 167, 0, 0.2)",
                        GreenAlpha10: "rgba(234, 0, 112, 0.1)",
                        GreenAlpha20: "rgba(234, 0, 112, 0.2)"
                    })
                }), (0, oe.__assign)((0, oe.__assign)({}, it), {
                    mobile: (0, oe.__assign)({}, Mt)
                }), (0, oe.__assign)((0, oe.__assign)({}, {
                    Sell: "#EC8D42",
                    TextSell: "#DD7A2B",
                    SellHover: "#EEA062",
                    DepthSellBg: "#553821",
                    Buy: "#1F8DF9",
                    TextBuy: "#1F8DF9",
                    BuyHover: "#69B1F8",
                    DepthBuyBg: "#22384E",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E",
                    RedAlpha10: "rgba(221, 122, 43, 0.1)",
                    RedAlpha20: "rgba(221, 122, 43, 0.2)",
                    GreenAlpha10: "rgba(31, 141, 249, 0.1)",
                    GreenAlpha20: "rgba(31, 141, 249, 0.2)"
                }), {
                    mobile: (0, oe.__assign)({}, {
                        Sell: "#DD7A2B",
                        TextSell: "#DD7A2B",
                        SellHover: "#DD7A2B",
                        DepthSellBg: "#553821",
                        Buy: "#1F8DF9",
                        TextBuy: "#1F8DF9",
                        BuyHover: "#1F8DF9",
                        DepthBuyBg: "#22384E",
                        Error: "#EC8D42",
                        ErrorBg: "#553821",
                        Success: "#1F8DF9",
                        SuccessBg: "#22384E",
                        RedAlpha10: "rgba(221, 122, 43, 0.1)",
                        RedAlpha20: "rgba(221, 122, 43, 0.2)",
                        GreenAlpha10: "rgba(31, 141, 249, 0.1)",
                        GreenAlpha20: "rgba(31, 141, 249, 0.2)"
                    })
                }), (0, oe.__assign)((0, oe.__assign)({}, {
                    Sell: "#1F8DF9",
                    TextSell: "#297FD4",
                    SellHover: "#69B1F8",
                    DepthSellBg: "#E6F3FF",
                    Buy: "#EC8D42",
                    TextBuy: "#DD7A2B",
                    BuyHover: "#EEA062",
                    DepthBuyBg: "#FFEFE2",
                    Error: "#EC8D42",
                    ErrorBg: "#553821",
                    Success: "#1F8DF9",
                    SuccessBg: "#22384E",
                    RedAlpha10: "rgba(31, 141, 249, 0.1)",
                    RedAlpha20: "rgba(31, 141, 249, 0.2)",
                    GreenAlpha10: "rgba(221, 122, 43, 0.1)",
                    GreenAlpha20: "rgba(221, 122, 43, 0.2)"
                }), {
                    mobile: (0, oe.__assign)({}, {
                        Sell: "#1F8DF9",
                        TextSell: "#1F8DF9",
                        SellHover: "#1F8DF9",
                        DepthSellBg: "#22384E",
                        Buy: "#DD7A2B",
                        TextBuy: "#DD7A2B",
                        BuyHover: "#DD7A2B",
                        DepthBuyBg: "#553821",
                        Error: "#EC8D42",
                        ErrorBg: "#553821",
                        Success: "#1F8DF9",
                        SuccessBg: "#22384E",
                        RedAlpha10: "rgba(31, 141, 249, 0.1)",
                        RedAlpha20: "rgba(31, 141, 249, 0.2)",
                        GreenAlpha10: "rgba(221, 122, 43, 0.1)",
                        GreenAlpha20: "rgba(221, 122, 43, 0.2)"
                    })
                }), (0, oe.__assign)((0, oe.__assign)({}, {
                    Sell: "#EA0070",
                    TextSell: "#EA0070",
                    SellHover: "#EE358D",
                    DepthSellBg: "#40172B",
                    Buy: "#74A700",
                    TextBuy: "#74A700",
                    BuyHover: "#9BCB2F",
                    DepthBuyBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315",
                    RedAlpha10: "rgba(234, 0, 112, 0.1)",
                    RedAlpha20: "rgba(234, 0, 112, 0.2)",
                    GreenAlpha10: "rgba(116, 167, 0, 0.1)",
                    GreenAlpha20: "rgba(116, 167, 0, 0.2)"
                }), {
                    mobile: (0, oe.__assign)({}, {
                        Sell: "#EA0070",
                        TextSell: "#EA0070",
                        SellHover: "#EE358D",
                        DepthSellBg: "#40172B",
                        Buy: "#74A700",
                        TextBuy: "#74A700",
                        BuyHover: "#9BCB2F",
                        DepthBuyBg: "#2A3315",
                        Error: "#EA0070",
                        ErrorBg: "#40172B",
                        Success: "#74A700",
                        SuccessBg: "#2A3315",
                        RedAlpha10: "rgba(234, 0, 112, 0.1)",
                        RedAlpha20: "rgba(234, 0, 112, 0.2)",
                        GreenAlpha10: "rgba(116, 167, 0, 0.1)",
                        GreenAlpha20: "rgba(116, 167, 0, 0.2)"
                    })
                }), (0, oe.__assign)((0, oe.__assign)({}, {
                    Buy: "#EA0070",
                    TextBuy: "#EA0070",
                    BuyHover: "#EE358D",
                    DepthBuyBg: "#40172B",
                    Sell: "#74A700",
                    TextSell: "#74A700",
                    SellHover: "#9BCB2F",
                    DepthSellBg: "#2A3315",
                    Error: "#EA0070",
                    ErrorBg: "#40172B",
                    Success: "#74A700",
                    SuccessBg: "#2A3315",
                    RedAlpha10: "rgba(116, 167, 0, 0.1)",
                    RedAlpha20: "rgba(116, 167, 0, 0.2)",
                    GreenAlpha10: "rgba(234, 0, 112, 0.1)",
                    GreenAlpha20: "rgba(234, 0, 112, 0.2)"
                }), {
                    mobile: (0, oe.__assign)({}, {
                        Buy: "#EA0070",
                        TextBuy: "#EA0070",
                        BuyHover: "#EE358D",
                        DepthBuyBg: "#40172B",
                        Sell: "#74A700",
                        TextSell: "#74A700",
                        SellHover: "#9BCB2F",
                        DepthSellBg: "#2A3315",
                        Error: "#EA0070",
                        ErrorBg: "#40172B",
                        Success: "#74A700",
                        SuccessBg: "#2A3315",
                        RedAlpha10: "rgba(116, 167, 0, 0.1)",
                        RedAlpha20: "rgba(116, 167, 0, 0.2)",
                        GreenAlpha10: "rgba(234, 0, 112, 0.1)",
                        GreenAlpha20: "rgba(234, 0, 112, 0.2)"
                    })
                }), {
                    reverse: (0, oe.__assign)((0, oe.__assign)({}, nt), {
                        mobile: (0, oe.__assign)({}, $t)
                    }),
                    cvd: (0, oe.__assign)((0, oe.__assign)({}, {
                        Sell: "#D4762B",
                        TextSell: "#D4762B",
                        SellHover: "#EEA062",
                        DepthSellBg: "#553821",
                        Buy: "#1F8DF9",
                        TextBuy: "#1F8DF9",
                        BuyHover: "#69B1F8",
                        DepthBuyBg: "#22384E",
                        Error: "#D4762B",
                        ErrorBg: "#553821",
                        Success: "#1F8DF9",
                        SuccessBg: "#22384E",
                        RedAlpha10: "rgba(212, 118, 43, 0.1)",
                        RedAlpha20: "rgba(212, 118, 43, 0.2)",
                        GreenAlpha10: "rgba(31, 141, 249, 0.1)",
                        GreenAlpha20: "rgba(31, 141, 249, 0.2)"
                    }), {
                        mobile: (0, oe.__assign)({}, {
                            Sell: "#D4762B",
                            TextSell: "#DD7A2B",
                            SellHover: "#DD7A2B",
                            DepthSellBg: "#553821",
                            Buy: "#1F8DF9",
                            TextBuy: "#1F8DF9",
                            BuyHover: "#1F8DF9",
                            DepthBuyBg: "#22384E",
                            Error: "#D4762B",
                            ErrorBg: "#553821",
                            Success: "#1F8DF9",
                            SuccessBg: "#22384E",
                            RedAlpha10: "rgba(212, 118, 43, 0.1)",
                            RedAlpha20: "rgba(212, 118, 43, 0.2)",
                            GreenAlpha10: "rgba(31, 141, 249, 0.1)",
                            GreenAlpha20: "rgba(31, 141, 249, 0.2)"
                        })
                    }),
                    "cvd-reverse": (0, oe.__assign)((0, oe.__assign)({}, {
                        Sell: "#1F8DF9",
                        TextSell: "#297FD4",
                        SellHover: "#69B1F8",
                        DepthSellBg: "#E6F3FF",
                        Buy: "#D4762B",
                        TextBuy: "#D4762B",
                        BuyHover: "#EEA062",
                        DepthBuyBg: "#FFEFE2",
                        Error: "#D4762B",
                        ErrorBg: "#553821",
                        Success: "#1F8DF9",
                        SuccessBg: "#22384E",
                        RedAlpha10: "rgba(31, 141, 249, 0.1)",
                        RedAlpha20: "rgba(31, 141, 249, 0.2)",
                        GreenAlpha10: "rgba(212, 118, 43, 0.1)",
                        GreenAlpha20: "rgba(212, 118, 43, 0.2)"
                    }), {
                        mobile: (0, oe.__assign)({}, {
                            Sell: "#1F8DF9",
                            TextSell: "#1F8DF9",
                            SellHover: "#1F8DF9",
                            DepthSellBg: "#22384E",
                            Buy: "#D4762B",
                            TextBuy: "#DD7A2B",
                            BuyHover: "#DD7A2B",
                            DepthBuyBg: "#553821",
                            Error: "#D4762B",
                            ErrorBg: "#553821",
                            Success: "#1F8DF9",
                            SuccessBg: "#22384E",
                            RedAlpha10: "rgba(31, 141, 249, 0.1)",
                            RedAlpha20: "rgba(31, 141, 249, 0.2)",
                            GreenAlpha10: "rgba(212, 118, 43, 0.1)",
                            GreenAlpha20: "rgba(212, 118, 43, 0.2)"
                        })
                    }),
                    traditional: (0, oe.__assign)((0, oe.__assign)({}, {
                        Sell: "#EA0070",
                        TextSell: "#EA0070",
                        SellHover: "#EE358D",
                        DepthSellBg: "#40172B",
                        Buy: "#709B0D",
                        TextBuy: "#709B0D",
                        BuyHover: "#9BCB2F",
                        DepthBuyBg: "#2A3315",
                        Error: "#EA0070",
                        ErrorBg: "#40172B",
                        Success: "#709B0D",
                        SuccessBg: "#2A3315",
                        RedAlpha10: "rgba(234, 0, 112, 0.1)",
                        RedAlpha20: "rgba(234, 0, 112, 0.2)",
                        GreenAlpha10: "rgba(112, 155, 13, 0.1)",
                        GreenAlpha20: "rgba(112, 155, 13, 0.2)"
                    }), {
                        mobile: (0, oe.__assign)({}, {
                            Sell: "#EA0070",
                            TextSell: "#EA0070",
                            SellHover: "#EE358D",
                            DepthSellBg: "#40172B",
                            Buy: "#709B0D",
                            TextBuy: "#74A700",
                            BuyHover: "#9BCB2F",
                            DepthBuyBg: "#2A3315",
                            Error: "#EA0070",
                            ErrorBg: "#40172B",
                            Success: "#709B0D",
                            SuccessBg: "#2A3315",
                            RedAlpha10: "rgba(234, 0, 112, 0.1)",
                            RedAlpha20: "rgba(234, 0, 112, 0.2)",
                            GreenAlpha10: "rgba(112, 155, 13, 0.1)",
                            GreenAlpha20: "rgba(112, 155, 13, 0.2)"
                        })
                    }),
                    "traditional-reverse": (0, oe.__assign)((0, oe.__assign)({}, {
                        Buy: "#EA0070",
                        TextBuy: "#EA0070",
                        BuyHover: "#EE358D",
                        DepthBuyBg: "#40172B",
                        Sell: "#709B0D",
                        TextSell: "#709B0D",
                        SellHover: "#9BCB2F",
                        DepthSellBg: "#2A3315",
                        Error: "#EA0070",
                        ErrorBg: "#40172B",
                        Success: "#709B0D",
                        SuccessBg: "#2A3315",
                        RedAlpha10: "rgba(112, 155, 13, 0.1)",
                        RedAlpha20: "rgba(112, 155, 13, 0.2)",
                        GreenAlpha10: "rgba(234, 0, 112, 0.1)",
                        GreenAlpha20: "rgba(234, 0, 112, 0.2)"
                    }), {
                        mobile: (0, oe.__assign)({}, {
                            Buy: "#EA0070",
                            TextBuy: "#EA0070",
                            BuyHover: "#EE358D",
                            DepthBuyBg: "#40172B",
                            Sell: "#709B0D",
                            TextSell: "#74A700",
                            SellHover: "#9BCB2F",
                            DepthSellBg: "#2A3315",
                            Error: "#EA0070",
                            ErrorBg: "#40172B",
                            Success: "#709B0D",
                            SuccessBg: "#2A3315",
                            RedAlpha10: "rgba(112, 155, 13, 0.1)",
                            RedAlpha20: "rgba(112, 155, 13, 0.2)",
                            GreenAlpha10: "rgba(234, 0, 112, 0.1)",
                            GreenAlpha20: "rgba(234, 0, 112, 0.2)"
                        })
                    })
                }),
                qt = r("W3Ja");
            const Qt = (0, s.createContext)({
                colors: {},
                mode: "light"
            });
            var Vt = r("qrIQ"),
                Yt = r("hyZw"),
                Xt = r("OKx2"),
                Kt = r("O94r"),
                Zt = r.n(Kt),
                Jt = r("eeEA"),
                er = r("fvKX"),
                tr = {
                    fresh: "",
                    traditional: "traditional"
                };
            const rr = function(e) {
                var t = e.scope,
                    r = e.isCVD,
                    n = e.isReverse,
                    o = e.themeColors,
                    i = e.colorMode,
                    a = void 0 === i ? "fresh" : i,
                    c = e.mode,
                    u = void 0 === c ? "light" : c,
                    d = e.themeExtraColors,
                    p = void 0 === d ? {} : d,
                    h = (0, er.r)().isMobile,
                    g = (0, s.useMemo)((function() {
                        var e = [r ? "cvd" : tr[a] || "", n ? "reverse" : ""].filter(Boolean),
                            t = (0, oe.__assign)({}, o),
                            i = p[e.join("-")] || {};
                        h && ((null === o || void 0 === o ? void 0 : o.mobile) && (t = (0, oe.__assign)((0, oe.__assign)({}, t), t.mobile)), (null === i || void 0 === i ? void 0 : i.mobile) && (i = (0, oe.__assign)((0, oe.__assign)({}, i), i.mobile)));
                        var s = (0, oe.__assign)((0, oe.__assign)({}, t), i);
                        delete s.mobile;
                        var l;
                        return l = Object.keys(s).reduce((function(e, t) {
                            var r;
                            return (0, oe.__assign)((0, oe.__assign)({}, e), ((r = {})["--color-".concat(t)] = s[t], r))
                        }), {}), {
                            colors: s,
                            styles: l
                        }
                    }), [r, n, o, p, h, a]),
                    f = g.colors,
                    b = g.styles,
                    m = Zt()("theme-root", u, e.className);
                return (0, qt.op)((function() {
                    var e;
                    return Vt.lq || t || !document.body ? Yt.es : ((0, Xt.Dq)(document.body, b, !0), (e = document.body.classList).add.apply(e, m.split(" ")), function() {
                        var e;
                        (null === document || void 0 === document ? void 0 : document.body) && ((0, Xt.Dq)(document.body, b, !1), (e = document.body.classList).remove.apply(e, m.split(" ")))
                    })
                }), [m, t, b]), l().createElement(Qt.Provider, {
                    value: {
                        isCVD: r,
                        isReverse: n,
                        mode: u,
                        colors: f
                    }
                }, Vt.lq || t ? l().createElement(Jt.Ay, {
                    className: m,
                    style: b,
                    children: e.children
                }) : e.children)
            };
            var nr = r("jSBn");
            const or = function(e) {
                var t = e.pathPrefix,
                    r = e.isRegionMode,
                    n = e.level2Domain,
                    o = e.lang,
                    i = e.prefixCls,
                    a = e.isRTL,
                    s = e.iconConfig,
                    c = e.children,
                    u = e.isElectron,
                    d = e.isMobile,
                    p = (0, oe.__rest)(e, ["pathPrefix", "isRegionMode", "level2Domain", "lang", "prefixCls", "isRTL", "iconConfig", "children", "isElectron", "isMobile"]),
                    h = {
                        prefixCls: i,
                        isRTL: a,
                        iconConfig: s,
                        isElectron: u,
                        isMobile: d
                    },
                    g = {
                        pathPrefix: t,
                        isRegionMode: r,
                        level2Domain: n,
                        lang: o
                    },
                    f = Object.values(g).some((function(e) {
                        return "undefined" !== typeof e
                    })),
                    b = l().createElement(er.A, (0, oe.__assign)({}, h), l().createElement(rr, (0, oe.__assign)({}, p), c));
                return f ? l().createElement(nr.A, (0, oe.__assign)({}, g), b) : b
            };
            var ir = r("JyHn"),
                ar = {
                    light: (Z.cz, ne.BB),
                    dark: (Z.cz, ne.XT),
                    dark_midnight: jt
                },
                sr = {
                    light: (Z.cz, Wt.bK),
                    dark: (Z.cz, Wt.zd),
                    dark_midnight: Ut
                };
            const lr = function(e) {
                var t = e.mode,
                    r = void 0 === t ? "" : t,
                    o = e.themeColors,
                    i = void 0 === o ? {} : o,
                    a = e.children,
                    s = (0, g.A)(e, ["mode", "themeColors", "children"]),
                    c = (0, J.D)().theme,
                    u = r || c,
                    d = ar[u],
                    h = sr[u],
                    f = i[u],
                    b = (0, ee.j)().isRtl,
                    m = (0, te.o3)(re.Ay.http.apiHost) ? "https://www.devfdg.net" : re.Ay.http.apiHost,
                    x = "".concat(m, "/bapi/fe/micro/static/icon");
                return l().createElement(or, (0, p.A)({}, (0, n.A)({
                    isRTL: b,
                    iconConfig: {
                        path: x,
                        useBuffer: !0
                    },
                    mode: u,
                    themeColors: (0, n.A)({}, d, f),
                    themeExtraColors: h
                }, s)), l().createElement(ir.A, null, a))
            };
            var cr = r("93jd"),
                ur = r("6p3b"),
                dr = r("LawY"),
                pr = r("HIvj"),
                hr = function(e) {
                    var t = e.lng,
                        r = e.children,
                        n = (0, u.wA)(),
                        o = (0, pr.vz)().isLoggedIn,
                        i = (0, E.uE)();
                    return (0, pr.E7)(), s.useEffect((function() {
                        n.global.queryRegion(), window.__RUN_BY_ELECTRON__ || n.cookies.loadCurrency(t), n.userCenter.queryCurrency(), window.__RUN_BY_ELECTRON__ || n.userCenter.checkLogin()
                    }), []), s.useEffect((function() {
                        o && !window.__RUN_BY_ELECTRON__ && (n.userCenter.queryUserInfo(), n.userCenter.queryUserConfig())
                    }), [o]), s.useEffect((function() {
                        if (void 0 !== o) {
                            var e, t = null !== (e = null === i || void 0 === i ? void 0 : i.split("_")[0]) && void 0 !== e ? e : "USD";
                            n.global.queryRestrictedBusinessKeys(t)
                        }
                    }), [t, i, o]), r
                };
            const gr = s.memo(hr);
            var fr = r("9Fw3"),
                br = r("tKUM"),
                mr = r("OHGK");
            const xr = function(e) {
                var t = new WeakMap;
                return function(r) {
                    if (t.has(r)) return t.get(r);
                    var n = e(r);
                    return t.set(r, n), n
                }
            };
            r("oXkQ");

            function vr(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }
            var yr = function(e, t) {
                    return "function" === typeof t ? t(e) : function(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? vr(r, !0).forEach((function(t) {
                                (0, mr.A)(e, t, r[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : vr(r).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                            }))
                        }
                        return e
                    }({}, e, {}, t)
                },
                Er = xr((function(e) {
                    return xr((function(t) {
                        return yr(e, t)
                    }))
                })),
                Ar = function(e) {
                    return (0, s.createElement)(b.Dx.Consumer, null, (function(t) {
                        return e.theme !== t && (t = Er(t)(e.theme)), (0, s.createElement)(b.Dx.Provider, {
                            value: t
                        }, e.children)
                    }))
                };
            var wr = r("NrY2");
            const Br = function(e) {
                var t = e.children,
                    r = e.dir,
                    n = e.theme;
                return s.createElement(wr.A.Consumer, null, (function(e) {
                    return s.createElement(wr.A.Provider, {
                        value: r || e
                    }, s.createElement(Ar, {
                        theme: n
                    }, t))
                }))
            };
            var Sr = r("ezuS");
            var Cr = {
                    normal: {
                        height: "32px",
                        ".rc-picker": {
                            fontSize: "sm",
                            ".rc-picker-input > input": {
                                fontSize: "sm"
                            }
                        }
                    },
                    tiny: {
                        height: "20px",
                        ".rc-picker": {
                            fontSize: "xs",
                            ".rc-picker-input > input": {
                                fontSize: "xs"
                            }
                        }
                    }
                },
                Fr = {
                    ".rc-picker-range": {
                        "&:hover": {
                            ".rc-picker-clear": {
                                opacity: 1
                            }
                        }
                    },
                    ".rc-picker-clear": {
                        position: "absolute",
                        display: "flex",
                        alignItems: "center",
                        right: 0,
                        top: "50%",
                        transform: "translateY(-50%)",
                        color: "t.third",
                        opacity: 0,
                        transition: ".3s opacity linear",
                        cursor: "pointer"
                    },
                    ".rc-picker-suffix": {
                        display: "flex",
                        alignItems: "center",
                        color: "t.third"
                    }
                },
                Dr = (0, n.A)({
                    display: "inline-flex",
                    minWidth: "240px",
                    ".rc-picker-range-separator": {
                        display: "flex",
                        alignItems: "center"
                    },
                    ".rc-picker": {
                        flexGrow: 1
                    },
                    ".rc-picker .rc-picker-input > input": {
                        py: "0px",
                        outline: "none",
                        border: "none",
                        color: "t.primary",
                        bg: "inherit",
                        textAlign: "center",
                        "&::placeholder": {
                            color: "t.placeholder"
                        }
                    }
                }, Fr),
                kr = function(e) {
                    return Object.keys(Cr).reduce((function(t, r) {
                        return t[r] = (0, n.A)({}, e, Cr[r]), t
                    }), {})
                },
                Rr = (0, n.A)({
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    height: "48px",
                    bg: "transparent",
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "ls",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    minWidth: "246px",
                    py: "14px",
                    paddingRight: "ls",
                    "&.bn-picker-opened": {
                        borderColor: "primaryHover"
                    },
                    "&.bn-picker-disabled": {
                        backgroundColor: "line",
                        ".rc-picker-input input": {
                            cursor: "not-allowed",
                            color: "t.disabled"
                        },
                        "&:hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                            borderColor: "line"
                        }
                    },
                    ".rc-picker-range-separator": {
                        display: "flex",
                        alignItems: "center"
                    },
                    ".rc-picker-active-bar": {
                        display: "none"
                    },
                    ".rc-picker-input input": {
                        border: "none",
                        color: "t.primary",
                        lineHeight: "20px",
                        background: "transparent",
                        padding: 0,
                        paddingLeft: "ls",
                        outline: "none",
                        "&::placeholder": {
                            color: "t.disabled"
                        }
                    }
                }, Fr);
            const Tr = {
                    rangePicker: {
                        default: Dr,
                        underline: (0, n.A)({}, kr({
                            variant: "rangePicker.default",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "solid",
                            borderBottomColor: "line",
                            "&.bn-picker-opened": {
                                borderBottomColor: "primary"
                            },
                            ":hover": {
                                borderColor: "primary"
                            }
                        })),
                        outline: (0, n.A)({}, kr({
                            variant: "rangePicker.default",
                            height: "48px",
                            borderRadius: "small",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            pr: "xs",
                            "&.bn-picker-opened": {
                                borderColor: "primary"
                            },
                            ":hover": {
                                borderColor: "primary"
                            }
                        })),
                        phantom: (0, n.A)({}, kr({
                            variant: "rangePicker.default",
                            border: "none",
                            ".rc-picker-range.rc-picker-focused .rc-picker-active-bar": {
                                opacity: "0"
                            },
                            ".rc-picker-range .rc-picker-input:hover": {
                                border: "none",
                                input: {
                                    color: "t.yellow"
                                }
                            },
                            "&.bn-picker-opened": {
                                ".rc-picker-range.rc-picker-focused .rc-picker-input.rc-picker-input-active input": {
                                    color: "t.yellow"
                                }
                            },
                            ":hover": {
                                border: "none"
                            }
                        })),
                        line: {
                            md: (0, h.A)((0, n.A)({}, Rr), {
                                height: "40px"
                            }),
                            lg: (0, h.A)((0, n.A)({}, Rr), {
                                height: "48px"
                            })
                        }
                    }
                },
                _r = {
                    text: {
                        extraHeadline: {
                            fontWeight: "semibold",
                            fontSize: "xxxxl",
                            lineHeight: "64px"
                        },
                        headline1: {
                            fontWeight: "semibold",
                            fontSize: "xxxl",
                            lineHeight: "56px"
                        },
                        headline2: {
                            fontWeight: "semibold",
                            fontSize: "xxl",
                            lineHeight: "48px"
                        },
                        headline3: {
                            fontWeight: "semibold",
                            fontSize: "xl",
                            lineHeight: "40px"
                        },
                        headline4: {
                            fontWeight: "semibold",
                            fontSize: "lg",
                            lineHeight: "36px"
                        },
                        headline5: {
                            fontWeight: "semibold",
                            fontSize: "xp",
                            lineHeight: "32px"
                        },
                        headline6: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        largeBody: {
                            fontWeight: "normal",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        mediumBody: {
                            fontWeight: "light",
                            fontSize: "minor",
                            lineHeight: "28px"
                        },
                        subtitle1: {
                            fontWeight: "medium",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        subtitle2: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        body1: {
                            fontWeight: "normal",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        body2: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        captionSub: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        caption: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        largeLink: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkBody: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        addressLink: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "20px",
                            textDecoration: "underline"
                        },
                        linkCaption: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px",
                            textDecoration: "underline"
                        },
                        primaryNum1: {
                            fontWeight: "semibold",
                            fontSize: "xl",
                            lineHeight: "40px"
                        },
                        primaryNum2: {
                            fontWeight: "semibold",
                            fontSize: "lg",
                            lineHeight: "36px"
                        },
                        primaryNum3: {
                            fontWeight: "semibold",
                            fontSize: "xp",
                            lineHeight: "32px"
                        },
                        secondaryNum1: {
                            fontWeight: "medium",
                            fontSize: "plus",
                            lineHeight: "28px"
                        },
                        secondaryNum2: {
                            fontWeight: "medium",
                            fontSize: "md",
                            lineHeight: "24px"
                        },
                        tertiaryNum1: {
                            fontWeight: "medium",
                            fontSize: "sm",
                            lineHeight: "20px"
                        },
                        tertiaryNum2: {
                            fontWeight: "medium",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        tertiaryNum3: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px"
                        },
                        formLabel: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: "16px",
                            color: "t.primary"
                        },
                        formLabelSmall: {
                            fontWeight: "normal",
                            fontSize: "xs",
                            lineHeight: "16px",
                            color: "t.primary"
                        },
                        formLabelDisabled: {
                            variant: "text.formLabel",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        formLabelSmallDisabled: {
                            variant: "text.formLabelSmall",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        checkbox: {
                            fontWeight: "normal",
                            fontSize: "sm",
                            lineHeight: 1.43,
                            color: "t.primary",
                            cursor: "pointer"
                        },
                        checkboxDisabled: {
                            variant: "text.checkbox",
                            color: "t.disabled",
                            cursor: "not-allowed"
                        },
                        infoHelperText: {
                            height: "24px",
                            lineHeight: "24px",
                            fontSize: "xs",
                            color: "t.third"
                        },
                        errorHelperText: {
                            variant: "text.infoHelperText",
                            color: "error"
                        },
                        dottedUnderline: {
                            variant: "text.formLabel",
                            borderBottomWidth: "1px",
                            borderBottomStyle: "dashed",
                            borderBottomColor: "t.third"
                        },
                        title2: {
                            fontWeight: "semibold",
                            fontSize: "48px",
                            lineHeight: "56px"
                        },
                        title3: {
                            fontWeight: "semibold",
                            fontSize: "40px",
                            lineHeight: "48px"
                        },
                        title4: {
                            fontWeight: "semibold",
                            fontSize: "32px",
                            lineHeight: "40px"
                        },
                        title5: {
                            fontWeight: "semibold",
                            fontSize: "24px",
                            lineHeight: "28px"
                        },
                        largeText: {
                            fontWeight: "normal",
                            fontSize: "24px",
                            lineHeight: "28px"
                        },
                        title6: {
                            fontWeight: "medium",
                            fontSize: "20px",
                            lineHeight: "24px"
                        },
                        heading: {
                            fontFamily: "heading",
                            lineHeight: "heading",
                            fontWeight: "heading"
                        },
                        display: {
                            fontFamily: "heading",
                            fontWeight: "heading",
                            lineHeight: "heading",
                            fontSize: [5, 6, 7]
                        },
                        caps: {
                            textTransform: "uppercase",
                            letterSpacing: "0.1em"
                        },
                        h1: {
                            fontWeight: "semibold",
                            fontSize: [24, 28, 32],
                            lineHeight: ["30px", "32px", "40px"]
                        },
                        h2: {
                            fontWeight: "normal",
                            fontSize: 24,
                            lineHeight: "30px"
                        },
                        h3: {
                            fontWeight: "medium",
                            fontSize: 20,
                            lineHeight: "28px"
                        },
                        h4: {
                            fontWeight: "semibold",
                            fontSize: 16,
                            lineHeight: "22px"
                        },
                        h5: {
                            fontWeight: "semibold",
                            fontSize: 2
                        },
                        h6: {
                            fontWeight: "semibold",
                            fontSize: 1
                        },
                        label1: {
                            fontWeight: "medium",
                            fontSize: 20,
                            lineHeight: "26px"
                        },
                        label2: {
                            fontWeight: "medium",
                            fontSize: [16, 18],
                            lineHeight: ["22px", "24px"]
                        },
                        label3: {
                            fontWeight: ["normal", "medium"],
                            fontSize: 16,
                            lineHeight: "22px"
                        },
                        label4: {
                            fontWeight: "medium",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        label5: {
                            fontWeight: "normal",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        label6: {
                            fontWeight: "normal",
                            fontSize: 13,
                            lineHeight: "18px"
                        },
                        label7: {
                            fontWeight: "medium",
                            fontSize: 12,
                            lineHeight: "16px"
                        },
                        label8: {
                            fontWeight: "normal",
                            fontSize: 12,
                            lineHeight: "16px"
                        },
                        p1: {
                            fontWeight: "normal",
                            fontSize: 14,
                            lineHeight: "20px"
                        },
                        p2: {
                            fontWeight: "normal",
                            fontSize: 0
                        }
                    }
                };
            var Ir = _r.text,
                Lr = Ir.subtitle1,
                Or = Ir.caption,
                Hr = Ir.body2,
                Nr = Ir.body1,
                Pr = {
                    variant: "searchDropdown.default",
                    " .bn-sdd-optionGroupLabel": {
                        px: "sm",
                        py: "xxs",
                        height: "28px"
                    },
                    ".bn-sdd-optionGroupText": (0, n.A)({}, Or),
                    " .bn-sdd-option": {
                        maxHeight: "40px",
                        px: "sm",
                        fontSize: "sm",
                        lineHeight: "20px"
                    },
                    " .bn-sdd-value": {
                        minHeight: "32px",
                        pl: "ls",
                        pr: "md",
                        py: "ls"
                    },
                    " .bn-sdd-noResults": {
                        p: "ls",
                        fontSize: "sm",
                        color: "t.primary"
                    },
                    " .bn-sdd-innerInputContainer": {
                        px: "ls",
                        py: "xs",
                        width: "100%"
                    },
                    " .bn-sdd-icon": {
                        cursor: "pointer",
                        verticalAlign: "middle"
                    }
                };
            const zr = {
                searchDropdown: {
                    default: {
                        position: "relative",
                        outline: "none",
                        ".bn-sdd-dropdown": {
                            position: "absolute",
                            zIndex: "dropdown",
                            transition: "height 0.2s ease",
                            bg: "popupBg",
                            boxShadow: "elevation2",
                            borderRadius: "default"
                        },
                        ".bn-sdd-list": {
                            padding: 0,
                            overflowY: "scroll",
                            py: "minor",
                            borderBottomLeftRadius: "default",
                            borderBottomRightRadius: "default"
                        },
                        ".bn-sdd-optionGroupLabel": {
                            color: "t.third"
                        },
                        ".bn-sdd-option": {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            alignItems: "center"
                        },
                        ".bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        }
                    },
                    drawer: {
                        px: "md",
                        bg: "modal.bg",
                        position: "relative",
                        flexDirection: "column",
                        width: "100%",
                        borderTopLeftRadius: "xlarge",
                        borderTopRightRadius: "xlarge",
                        ".bn-sdd-list": {
                            pl: 0,
                            listStyle: "none",
                            overflowY: "auto",
                            py: "minor"
                        },
                        ".bn-sdd-optionGroupLabel": {
                            color: "t.third"
                        },
                        ".bn-sdd-option": {
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            alignItems: "center"
                        },
                        ".bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        },
                        ".bn-sdd-noResults": {
                            p: "ls",
                            fontSize: "sm",
                            color: "t.primary"
                        }
                    },
                    outline: Pr,
                    filled: Pr,
                    line: Pr,
                    clear: Pr,
                    normal: Pr,
                    emphasizedGrouping: {
                        variant: "searchDropdown.default",
                        " .bn-sdd-optionGroupLabel": {
                            px: "sm",
                            py: "s",
                            "&.is-active .bn-sdd-optionGroupText": {
                                color: "t.yellow"
                            },
                            "&:hover": {
                                bg: "bg3"
                            },
                            "&:active": {
                                bg: "bg2"
                            },
                            "&.disabled": {
                                " .bn-sdd-optionGroupText": (0, n.A)({
                                    color: "t.disabled"
                                }, Nr)
                            }
                        },
                        " .bn-sdd-optionGroupText": (0, n.A)({
                            color: "t.primary"
                        }, Lr),
                        " .bn-sdd-option-item": {
                            maxHeight: "40px"
                        },
                        " .bn-sdd-option": (0, n.A)({
                            maxHeight: "40px",
                            px: "sm"
                        }, Hr),
                        " .bn-sdd-value": {
                            minHeight: "32px",
                            pl: "ls",
                            pr: "md",
                            py: "ls"
                        },
                        " .bn-sdd-noResults": {
                            p: "ls",
                            fontSize: "sm",
                            color: "t.primary"
                        },
                        " .bn-sdd-innerInputContainer": {
                            px: "ls",
                            py: "xs",
                            width: "100%"
                        },
                        " .bn-sdd-icon": {
                            cursor: "pointer",
                            verticalAlign: "middle"
                        }
                    }
                }
            };
            var $r = {
                py: "xs",
                px: ["sm", "md"],
                fontWeight: "medium",
                fontSize: ["sm", "md"],
                lineHeight: ["20px", "24px"],
                marginRight: ["sm", "md"],
                userSelect: "none",
                color: "t.third",
                borderRadius: "default"
            };
            const Gr = {
                tabs: {
                    default: {
                        tab: {
                            padding: "10px 90px",
                            height: "100%",
                            boxSizing: "border-box",
                            userSelect: "none",
                            "&.active": {
                                borderBottomWidth: "tiny",
                                borderBottomStyle: "solid",
                                borderBottom: "tiny solid",
                                borderColor: "primary",
                                color: "primary"
                            }
                        }
                    },
                    standard: {
                        container: {
                            boxShadow: "inset 0px -1px 0px currentColor",
                            color: "line"
                        },
                        normal: {
                            padding: "14px 0px",
                            marginRight: "28px",
                            boxSizing: "border-box",
                            userSelect: "none",
                            lineHeight: "20px",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "t.third",
                            "&.active": {
                                boxShadow: "inset 0px -2px 0px #F0B90B",
                                color: "t.primary"
                            },
                            ":hover": {
                                color: "t.primary"
                            }
                        },
                        large: {
                            variant: "tabs.standard.normal",
                            padding: "20px 0px",
                            marginRight: "28px",
                            lineHeight: "24px",
                            fontSize: "md"
                        },
                        small: {
                            variant: "tabs.standard.normal",
                            padding: "8px 0px"
                        }
                    },
                    vertical: {
                        layout: {
                            display: "flex"
                        },
                        container: {
                            color: "line",
                            display: "flex",
                            flexDirection: "column",
                            width: "fit-content"
                        },
                        normal: {
                            padding: "10px 18px",
                            boxSizing: "border-box",
                            userSelect: "none",
                            lineHeight: "20px",
                            fontSize: "sm",
                            fontWeight: "medium",
                            color: "t.third",
                            "&.active": {
                                boxShadow: "inset 2px 0px 0px #F0B90B",
                                color: "t.primary"
                            },
                            ":hover": {
                                color: "t.primary"
                            }
                        },
                        large: {
                            variant: "tabs.vertical.normal",
                            margin: "4px 0",
                            "&.active": {
                                boxShadow: "inset 4px 0px 0px #F0B90B",
                                color: "t.primary"
                            }
                        }
                    },
                    flow: {
                        tab: {
                            fontWeight: "medium",
                            fontSize: ["14px", "16px"],
                            lineHeight: ["20px", "24px"],
                            letterSpacing: [".16px", ".32px"],
                            padding: ["8px 16px", "8px 24px"],
                            marginRight: "16px",
                            userSelect: "none",
                            color: "t.primary",
                            borderRadius: "extraLarger",
                            ":hover": {
                                bg: "bg3"
                            },
                            "&.active": {
                                bg: "tabs.flowBg",
                                color: "tabs.flowText"
                            }
                        }
                    },
                    filled: {
                        tab: {
                            primary: (0, h.A)((0, n.A)({}, $r), {
                                "&.active": {
                                    bg: "badgeYellowBg",
                                    color: "t.yellow"
                                }
                            }),
                            secondary: (0, h.A)((0, n.A)({}, $r), {
                                "&.active": {
                                    bg: "bg3",
                                    color: "t.primary"
                                }
                            })
                        }
                    },
                    secondary: {
                        container: {
                            bg: "bg3",
                            borderRadius: "default",
                            height: "24px",
                            width: "fit-content"
                        },
                        tab: {
                            fontSize: "xs",
                            lineHeight: "16px",
                            px: "minor",
                            py: "minor",
                            userSelect: "none",
                            color: "t.primary",
                            borderRadius: "default",
                            minWidth: "82px",
                            textAlign: "center",
                            "&.active": {
                                bg: "primary",
                                color: "bg5",
                                fontWeight: "medium"
                            }
                        }
                    },
                    "trade-next": {
                        tab: {
                            padding: "16px 1px 10px 1px",
                            marginRight: "sm",
                            height: "100%",
                            boxSizing: "border-box",
                            userSelect: "none",
                            fontSize: "sm",
                            color: "t.secondary",
                            "&.active": {
                                borderBottom: "2px solid",
                                borderColor: "primary",
                                color: "t.primary",
                                fontWeight: "semibold"
                            }
                        }
                    }
                }
            };
            var Mr = {
                default: {
                    borderBottom: "1px solid transparent",
                    borderColor: "line",
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {},
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "md",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        mr: "minor",
                        fontSize: "sm"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mx: "minor",
                        fontSize: "sm"
                    }
                },
                helperText: {
                    default: {
                        variant: "text.body2"
                    },
                    info: {
                        variant: "textField.helperText.default",
                        color: "t.third"
                    },
                    error: {
                        variant: "textField.helperText.default",
                        color: "error"
                    }
                },
                outline: {
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    "& .bn-input-label": {
                        fontSize: "xs"
                    },
                    ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {
                        bg: "line",
                        "> input": {
                            color: "t.disabled"
                        }
                    },
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "xs",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        fontSize: "sm"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mx: "minor",
                        fontSize: "sm"
                    }
                },
                outlineLarge: {
                    variant: "textField.outline",
                    "&  input": {
                        px: "ls"
                    }
                },
                inline: {
                    border: "1px solid transparent",
                    borderColor: "line",
                    borderRadius: "default",
                    ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-focus": {
                        borderColor: "primary"
                    },
                    "&.bn-input-status-disabled": {
                        bg: "line",
                        "> input": {
                            color: "t.disabled"
                        }
                    },
                    "&.bn-input-status-error": {
                        borderColor: "error"
                    },
                    "& input": {
                        color: "t.primary",
                        fontSize: "sm",
                        px: "minor",
                        textAlign: "right",
                        "&:-webkit-autofill": {
                            transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                        }
                    },
                    "& .bn-input-prefix": {
                        flexShrink: "0",
                        ml: "xs",
                        minWidth: "48px",
                        fontSize: "sm",
                        color: "t.secondary"
                    },
                    "& .bn-input-suffix": {
                        flexShrink: "0",
                        mr: "xs",
                        fontSize: "sm",
                        color: "t.third"
                    },
                    "& .bn-input-tooltip": {
                        position: "absolute",
                        bottom: "110%",
                        left: "50%",
                        transform: "translateX(-50%)",
                        zIndex: "tooltip"
                    },
                    "& .bn-input-tooltip-arrow": {
                        position: "absolute",
                        width: "8px",
                        height: "8px",
                        left: "50%",
                        bottom: "-4px",
                        transform: "translateX(-50%) rotate(45deg)",
                        bg: "#FFFFFF",
                        boxShadow: "1px 1px 1px rgba(0, 0, 0, 0.08)"
                    },
                    "& .bn-input-tooltip-content": {
                        boxShadow: "card",
                        borderRadius: "default",
                        p: "xxs",
                        bg: "#FFFFFF",
                        fontSize: "sm",
                        lineHeight: "18px",
                        color: "t.secondary"
                    }
                }
            };
            const jr = {
                textField: Mr,
                textFieldV2: (0, h.A)((0, n.A)({}, Mr), {
                    line: {
                        border: "1px solid transparent",
                        borderColor: "line",
                        borderRadius: "default",
                        bg: "transparent",
                        ":hover:not(.bn-input-status-disabled):not(.bn-input-status-error)": {
                            borderColor: "primary"
                        },
                        "&.bn-input-status-focus": {
                            borderColor: "primary"
                        },
                        "&.bn-input-status-disabled": {
                            bg: "line",
                            "> input": {
                                color: "t.disabled"
                            }
                        },
                        "&.bn-input-status-error": {
                            borderColor: "error"
                        },
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            px: "ls",
                            "&:-webkit-autofill": {
                                transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                            }
                        },
                        "& .bn-input-prefix": {
                            flexShrink: "0",
                            fontSize: "14px"
                        },
                        "& .bn-input-suffix": {
                            flexShrink: "0",
                            mx: "minor",
                            fontSize: "sm"
                        }
                    },
                    filled: {
                        bg: "bg3",
                        borderRadius: "default",
                        borderWidth: "1px",
                        borderStyle: "solid",
                        borderColor: "transparent",
                        "&.bn-input-status-focus": {
                            bg: "transparent",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "primary"
                        },
                        "&.bn-input-status-disabled": {
                            bg: "line",
                            opacity: .7,
                            "> input": {
                                color: "t.disabled"
                            }
                        },
                        "&.bn-input-status-error": {
                            borderColor: "error"
                        },
                        "& input": {
                            color: "t.primary",
                            fontSize: "sm",
                            borderRadius: "default",
                            px: "ls",
                            "&:-webkit-autofill": {
                                transition: "color 99999s ease-in-out 0s, background-color 99999s ease-in-out 0s"
                            }
                        },
                        "& .bn-input-prefix": {
                            flexShrink: "0",
                            mr: "minor",
                            fontSize: "sm"
                        },
                        "& .bn-input-suffix": {
                            flexShrink: "0",
                            mx: "minor",
                            fontSize: "sm"
                        }
                    },
                    transparent: {
                        variant: "textField.line",
                        border: "none"
                    }
                })
            };
            var Wr = {
                borderRadius: "default",
                boxShadow: "tooltip",
                bg: "toast.bg",
                alignItems: "flex-start",
                justifyContent: "space-between",
                maxWidth: ["343px", "360px"],
                minWidth: "288px",
                minHeight: "56px"
            };
            const Ur = {
                toast: {
                    default: (0, h.A)((0, n.A)({}, Wr), {
                        color: "t.primary",
                        lineHeight: "18px",
                        fontSize: "sm",
                        maxHeight: "178px",
                        p: "sm"
                    }),
                    error: {
                        variant: "toast.default"
                    },
                    warning: {
                        variant: "toast.default"
                    },
                    success: {
                        variant: "toast.default"
                    },
                    info: {
                        variant: "toast.default"
                    },
                    tips: {
                        variant: "toast.default"
                    },
                    reset: (0, h.A)((0, n.A)({}, Wr), {
                        ".bn-notification-body-wrapper": {
                            maxHeight: "unset",
                            ".bn-notification-msg-wrapper": {
                                maxHeight: "unset"
                            }
                        }
                    })
                }
            };
            var qr = {
                px: "md",
                bg: "modal.bg",
                position: "relative",
                flexDirection: "column"
            };
            const Qr = {
                modal: {
                    default: (0, h.A)((0, n.A)({}, qr), {
                        borderRadius: "large"
                    }),
                    drawer: (0, h.A)((0, n.A)({}, qr), {
                        width: "100%",
                        borderTopLeftRadius: "xlarge",
                        borderTopRightRadius: "xlarge"
                    })
                },
                modaltitle: {
                    default: {
                        position: "relative",
                        height: "64px",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between"
                    },
                    center: {
                        position: "relative",
                        height: "64px",
                        alignItems: "center",
                        width: "100%",
                        justifyContent: "space-between",
                        ".modaltitle": {
                            flex: "1",
                            justifyContent: "center"
                        }
                    }
                },
                modalfooter: {
                    default: {
                        gap: "sm",
                        mb: "md",
                        width: "100%",
                        justifyContent: "flex-end",
                        ".btn": {
                            flex: "1"
                        }
                    },
                    leftReverseOrder: {
                        mb: "md",
                        gap: "sm",
                        justifyContent: "flex-start",
                        ".btn": {
                            "&:nth-of-type(2)": {
                                order: 1
                            },
                            "&:first-of-type": {
                                order: 2
                            }
                        }
                    },
                    column: {
                        flexDirection: "column-reverse",
                        mb: "md",
                        gap: "xs",
                        width: "100%",
                        justifyContent: "flex-end",
                        ".btn": {
                            flex: "1"
                        }
                    }
                }
            };
            var Vr = {
                    minWidth: "343px",
                    height: "72px",
                    p: "ls",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                },
                Yr = {
                    minWidth: "343px",
                    height: "40px",
                    p: "xxs",
                    textAlign: "left",
                    justifyContent: "start",
                    px: "ls"
                };
            const Xr = {
                    uploader: {
                        common: {
                            color: "t.primary",
                            fontSize: "sm",
                            lineHeight: "20px",
                            wordBreak: "keep-all",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            appearance: "none",
                            userSelect: "none",
                            cursor: "pointer",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            boxSizing: "border-box",
                            textAlign: "center",
                            textDecoration: "none",
                            outline: "none",
                            backgroundColor: "bg3",
                            fontFamily: "inherit",
                            "&:hover": {
                                backgroundColor: "line"
                            }
                        },
                        drag: {
                            default: {
                                position: "relative",
                                variant: "uploader.common",
                                minWidth: "164px",
                                maxWidth: "164px",
                                height: "164px",
                                py: "ls",
                                color: "t.secondary"
                            },
                            waiting: {
                                variant: "uploader.drag.default"
                            },
                            success: {
                                variant: "uploader.drag.default"
                            },
                            loading: {
                                variant: "uploader.drag.default"
                            },
                            error: {
                                variant: "uploader.drag.default",
                                color: "error"
                            },
                            pending: {
                                variant: "uploader.drag.default"
                            }
                        },
                        click: {
                            default: {
                                variant: "uploader.common",
                                display: "inline-flex",
                                alignItems: "center",
                                justifyContent: "center"
                            },
                            normal: {
                                waiting: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "s",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, Vr),
                                error: (0, n.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, Vr),
                                loading: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, Vr),
                                pending: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, Vr)
                            },
                            small: {
                                waiting: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, {
                                    py: "xxs",
                                    px: "sm",
                                    fontWeight: "medium"
                                }),
                                success: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, Yr),
                                error: (0, n.A)({
                                    variant: "uploader.click.default",
                                    color: "error"
                                }, Yr),
                                loading: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, Yr),
                                pending: (0, n.A)({
                                    variant: "uploader.click.default"
                                }, Yr)
                            }
                        }
                    }
                },
                Kr = (0, n.A)({}, Xr, {
                    alertV2: {
                        default: {
                            color: "dark.text",
                            borderRadius: "default",
                            fontSize: 1
                        },
                        error: {
                            variant: "alertV2.default",
                            color: "alertV2.errorColor",
                            bg: "alertV2.errorBg"
                        },
                        warning: {
                            variant: "alertV2.default",
                            color: "alertV2.warningColor",
                            bg: "alertV2.warningBg"
                        },
                        success: {
                            variant: "alertV2.default",
                            color: "alertV2.successColor",
                            bg: "alertV2.successBg"
                        },
                        info: {
                            variant: "alertV2.default",
                            color: "alertV2.infoColor",
                            bg: "alertV2.infoBg"
                        }
                    }
                }, {
                    alert: {
                        default: {
                            color: "dark.text",
                            borderRadius: "default",
                            lineHeight: "18px",
                            fontSize: 1
                        },
                        error: {
                            variant: "alert.default",
                            color: "error",
                            bg: "alert.errorBg"
                        },
                        warning: {
                            variant: "alert.default",
                            color: "t.yellow",
                            bg: "alert.warningBg"
                        },
                        success: {
                            variant: "alert.default",
                            color: "secondary",
                            bg: "alert.successBg"
                        },
                        info: {
                            variant: "alert.default",
                            color: "t.blue",
                            bg: "alert.infoBg"
                        },
                        tips: {
                            variant: "alert.default",
                            color: "t.yellow",
                            bg: "alert.warningBg"
                        }
                    }
                }, {
                    button: {
                        default: {
                            wordBreak: "keep-all",
                            color: "bg5",
                            borderRadius: "default",
                            minHeight: "24px",
                            border: "none",
                            "&:disabled": {
                                cursor: "not-allowed",
                                backgroundImage: "none",
                                backgroundColor: "line",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active)": {
                                boxShadow: "none"
                            },
                            "&.inactive": {
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        primary: {
                            variant: "button.default",
                            backgroundImage: "none",
                            backgroundColor: "primaryHover",
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                boxShadow: "none",
                                backgroundImage: "none",
                                backgroundColor: "primaryHover",
                                opacity: .9
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundImage: "none",
                                backgroundColor: "primary"
                            },
                            ":disabled:not(.inactive)": {
                                bg: "line",
                                color: "t.disabled",
                                cursor: "not-allowed"
                            },
                            "&.inactive": {
                                bg: "primaryHover",
                                opacity: .3,
                                color: "bg5",
                                cursor: "not-allowed"
                            }
                        },
                        secondary: {
                            variant: "button.default",
                            backgroundColor: "line",
                            color: "t.primary",
                            backgroundImage: "none",
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                boxShadow: "none",
                                backgroundImage: "none",
                                bg: "bg3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                boxShadow: "none",
                                backgroundColor: "t.disabled",
                                color: "t.primary"
                            },
                            "&:disabled": {
                                cursor: "not-allowed",
                                boxShadow: "none",
                                color: "t.disabled",
                                bg: "bg3"
                            },
                            "&.inactive": {
                                backgroundColor: "line",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        quiet: {
                            variant: "button.default",
                            color: "t.primary",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "badgeYellowBg"
                            },
                            "&.inactive": {
                                opacity: .7,
                                cursor: "not-allowed"
                            }
                        },
                        text: {
                            variant: "button.default",
                            color: "bg5",
                            bg: "transparent",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "badgeYellowBg"
                            },
                            "&.inactive": {
                                opacity: .7,
                                cursor: "not-allowed"
                            }
                        },
                        round: {
                            variant: "button.default",
                            color: "t.yellow",
                            bg: "bg3",
                            borderRadius: "xlarge",
                            ":disabled:not(.inactive)": {
                                bg: "bg3",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                color: "primary",
                                bg: "bg3"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                backgroundColor: "line"
                            },
                            "&.inactive": {
                                bg: "bg3",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        },
                        graytype: {
                            variant: "button.default",
                            color: "t.white",
                            bg: "t.secondary",
                            ":disabled:not(.inactive)": {
                                bg: "transparent",
                                color: "t.disabled"
                            },
                            "&:hover:not(:disabled):not(:active):not(.inactive)": {
                                bg: "t.primary",
                                color: "popupBg"
                            },
                            "&:active:not(:disabled):not(.inactive)": {
                                bg: "t.primary",
                                color: "popupBg"
                            },
                            "&.inactive": {
                                bg: "bg4",
                                opacity: .3,
                                cursor: "not-allowed"
                            }
                        }
                    },
                    buttons: {
                        default: {
                            default: {
                                variant: "button.primary"
                            },
                            primary: {
                                variant: "button.primary"
                            },
                            flatprimary: {
                                variant: "button.primary"
                            },
                            flatpure: {
                                variant: "button.secondary"
                            },
                            secondary: {
                                variant: "button.secondary"
                            },
                            buy: {
                                variant: "button.default",
                                bg: "buy",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "buyHover"
                                },
                                "&:active:not(:disabled)": {
                                    boxShadow: "none",
                                    bg: "buy"
                                }
                            },
                            sell: {
                                variant: "button.default",
                                bg: "sell",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "sellHover"
                                },
                                "&:active:not(:disabled)": {
                                    boxShadow: "none",
                                    bg: "t.sell"
                                }
                            },
                            negative: {
                                variant: "button.default",
                                bg: "error",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "error"
                                }
                            },
                            destructive: {
                                variant: "button.default",
                                bg: "error",
                                color: "t.white",
                                "&:hover:not(:disabled):not(:active)": {
                                    boxShadow: "none",
                                    bg: "error"
                                }
                            }
                        },
                        quiet: {
                            primary: {
                                variant: "button.quiet",
                                color: "t.yellow"
                            },
                            secondary: {
                                variant: "button.quiet"
                            },
                            negative: {
                                variant: "button.quiet",
                                color: "negative"
                            }
                        },
                        text: {
                            primary: {
                                variant: "button.quiet",
                                color: "t.yellow"
                            },
                            secondary: {
                                variant: "button.quiet"
                            },
                            negative: {
                                variant: "button.quiet",
                                color: "negative"
                            }
                        },
                        round: {
                            primary: {
                                variant: "button.round"
                            },
                            default: {
                                variant: "button.round"
                            }
                        },
                        graytype: {
                            primary: {
                                variant: "button.graytype"
                            },
                            default: {
                                variant: "button.graytype"
                            }
                        },
                        primary: {
                            default: {
                                variant: "button.primary"
                            }
                        }
                    }
                }, {
                    variants: {
                        inputCode: {
                            width: "inputCode",
                            marginRight: "xs"
                        },
                        avatar: {
                            width: "avatar",
                            height: "avatar",
                            borderRadius: "circle"
                        },
                        card: {
                            p: "xs",
                            bg: "background",
                            boxShadow: "card",
                            borderRadius: "default"
                        },
                        standardLink: {
                            fontSize: "sm",
                            color: "t.yellow"
                        },
                        defaultLink: {
                            fontSize: "xs",
                            color: "t.yellow",
                            textDecoration: "none"
                        },
                        secondaryLink: {
                            fontSize: "xs",
                            color: "t.primary"
                        },
                        link: {
                            color: "primary"
                        },
                        nav: {
                            fontSize: "sm",
                            fontWeight: "bold",
                            display: "inline-block",
                            p: "xs",
                            color: "inherit",
                            textDecoration: "none",
                            ":hover,:focus,.active": {
                                color: "primary"
                            }
                        },
                        badge: {
                            fontSize: "xs",
                            color: "#fff",
                            bg: "error",
                            fontWeight: "semibold",
                            borderRadius: "circle"
                        },
                        mask: {
                            bg: "rgba(0, 0, 0, 0.5)",
                            zIndex: "mask"
                        },
                        icon: {
                            fill: "t.primary"
                        },
                        balanceChart: {
                            fill: "bg1"
                        },
                        tooltip: {
                            variant: "text.caption",
                            fontSize: "xs",
                            color: "t.white",
                            backgroundColor: "bg4",
                            borderRadius: "default",
                            py: "xs",
                            px: "ls",
                            filter: "drop-shadow(0px 3px 6px rgba(20,21,26, 0.08)) drop-shadow(0px 7px 14px rgba(71,77,87,0.08)) drop-shadow(0px 0px 1px rgba(20,21,26,0.1))",
                            ".bn-tooltip-arrow::before": {
                                backgroundColor: "bg4"
                            }
                        }
                    }
                }, {
                    dividers: {
                        primary: {
                            bg: "lines.light"
                        },
                        reverse: {
                            bg: "lines.dark"
                        },
                        selected: {
                            bg: "primary"
                        },
                        disabled: {
                            bg: "lines.light"
                        },
                        error: {
                            bg: "error"
                        }
                    }
                }, {
                    forms: {
                        placeholder: {
                            color: "t.secondary",
                            fontSize: "md"
                        },
                        label: {
                            color: "t.secondary",
                            fontSize: "sm"
                        },
                        selectedLabel: {
                            variant: "forms.label",
                            color: "primary"
                        },
                        disabledLabel: {
                            variant: "forms.label",
                            color: "t.muted"
                        },
                        errorLabel: {
                            variant: "forms.label",
                            color: "error"
                        },
                        field: {
                            borderColor: "lightgray",
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 2px ".concat(e.colors.primary)
                                }
                            }
                        },
                        input: {
                            variant: "forms.field"
                        },
                        select: {
                            variant: "forms.field"
                        },
                        textarea: {
                            variant: "forms.field",
                            ":disabled": {
                                bg: "line",
                                cursor: "not-allowed"
                            }
                        },
                        radio: {},
                        slider: {
                            bg: "lightgray"
                        }
                    }
                }, {
                    textarea: {
                        grayflat: {
                            px: "xs",
                            py: "ls",
                            bg: "bg3",
                            fontSize: "md",
                            lineHeight: "body",
                            borderRadius: "default",
                            border: "none",
                            "&::placeholder": {
                                color: "t.placeholder"
                            },
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.primary)
                                }
                            },
                            "&.bn-textarea-error": {
                                borderColor: "error",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.error)
                                }
                            }
                        },
                        line: {
                            px: "xs",
                            py: "ls",
                            bg: "transparent",
                            fontSize: "md",
                            lineHeight: "body",
                            borderRadius: "default",
                            borderWidth: "1px",
                            borderStyle: "solid",
                            borderColor: "line",
                            "&::placeholder": {
                                color: "t.placeholder"
                            },
                            ":focus": {
                                borderColor: "primary",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.primary)
                                }
                            },
                            "&.bn-textarea-error": {
                                borderColor: "error",
                                outline: "none",
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.error)
                                }
                            }
                        }
                    }
                }, {
                    hint: {
                        default: {
                            fontSize: "sm",
                            color: "t.primary",
                            "&::before": {
                                mr: "xs"
                            }
                        },
                        circle: {
                            variant: "hint.default",
                            "&::before": {
                                borderRadius: "circle",
                                mr: "xs"
                            }
                        }
                    }
                }, {
                    inputs: {
                        primary: {
                            bg: "transparent",
                            color: "t.primary",
                            fontSize: "md",
                            "&:disabled": {
                                color: "t.muted",
                                "-webkit-text-fill-color": "currentcolor",
                                opacity: 1
                            },
                            "&:disabled + label": {
                                variant: "forms.disabledLabel"
                            },
                            "&:disabled ~ .bn-input-divider": {
                                variant: "dividers.disabled"
                            },
                            "&:focus + label, &:active + label": {
                                variant: "forms.selectedLabel"
                            },
                            "&:focus ~ .bn-input-divider, &:active ~ .bn-input-divider": {
                                variant: "dividers.selected"
                            }
                        },
                        error: {
                            variant: "inputs.primary",
                            "& + label": {
                                variant: "forms.errorLabel"
                            },
                            "& ~ .bn-input-divider": {
                                variant: "dividers.error"
                            },
                            "&:focus + label": {
                                variant: "forms.errorLabel"
                            },
                            "&:focus ~ .bn-input-divider": {
                                variant: "dividers.error"
                            }
                        }
                    }
                }, jr, {
                    listGrid: {
                        default: {
                            borderBottomColor: "line",
                            color: "t.third",
                            fontSize: "sm"
                        },
                        header: {
                            mt: "sm",
                            color: "t.primary",
                            fontSize: "md",
                            fontWeight: "medium",
                            padding: "0 10px 0 16px"
                        },
                        toggleIcon: {
                            color: "t.third",
                            fontSize: "minor",
                            verticalAlign: "middle"
                        },
                        leftHeader: {
                            variant: "text.body2",
                            marginRight: "md"
                        },
                        rightContent: {
                            variant: "text.body2",
                            color: "t.primary",
                            textAlign: "right"
                        },
                        checkbox: {
                            width: "26px",
                            "& svg": {
                                color: "icon",
                                size: "20px",
                                mt: "line"
                            }
                        }
                    }
                }, {
                    pagination: {
                        default: {
                            mx: "minor",
                            p: "0px",
                            bg: "transparent",
                            borderRadius: "default",
                            color: "t.secondary",
                            fontWeight: "normal",
                            "&:hover:not(:disabled)": {
                                bg: "line"
                            },
                            "&:disabled": {
                                cursor: "default"
                            }
                        },
                        current: {
                            variant: "pagination.default",
                            bg: "line",
                            color: "t.primary",
                            fontWeight: "medium"
                        }
                    }
                }, {
                    progress: {
                        outer: {
                            width: "100%",
                            height: 8,
                            borderRadius: "default",
                            bg: "lines.primary"
                        },
                        bar: {
                            borderRadius: "default",
                            background: function(e) {
                                return e.colors.primaryGradient
                            }
                        }
                    }
                }, Tr, {
                    tag: {
                        default: {
                            borderRadius: "default",
                            px: "xs",
                            py: "minor",
                            fontSize: "xs",
                            lineHeight: "16px",
                            bg: "tag.defaultBg",
                            color: "t.yellow"
                        },
                        blue: {
                            variant: "tag.default",
                            bg: "tag.blueBg",
                            color: "tag.blueTxt"
                        },
                        gray: {
                            variant: "tag.default",
                            bg: "tag.grayBg",
                            color: "tag.grayTxt"
                        },
                        green: {
                            variant: "tag.default",
                            bg: "tag.greenBg",
                            color: "tag.greenTxt"
                        },
                        red: {
                            variant: "tag.default",
                            bg: "tag.redBg",
                            color: "tag.redTxt"
                        }
                    }
                }, Gr, _r, {
                    tabBarItem: {
                        primary: {
                            color: "t.third"
                        },
                        selected: {
                            color: "primary"
                        }
                    },
                    tabBar: {
                        default: {
                            bg: "background",
                            height: 56
                        }
                    }
                }, Ur, {
                    sideMenu: {
                        item: {
                            borderLeftWidth: "4px",
                            borderLeftColor: "primary",
                            cursor: "pointer",
                            alignItems: "center",
                            fontSize: 1,
                            ":hover": {
                                bg: "muted"
                            }
                        },
                        mainItem: {
                            variant: "sideMenu.item",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent",
                            height: "48px",
                            fontWeight: "medium",
                            "& > div": {
                                flexGrow: 1,
                                overflow: "hidden",
                                fontWeight: "medium",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap"
                            },
                            "& svg:first-of-type": {
                                flexShrink: 0,
                                marginLeft: "xs",
                                marginRight: "xs",
                                color: "icon"
                            }
                        },
                        activeMainItem: {
                            variant: "sideMenu.mainItem",
                            borderLeftColor: "primary",
                            bg: "muted"
                        },
                        activeLeftIcon: {
                            variant: "sideMenu.leftIcon",
                            color: "primary"
                        },
                        rightIcon: {
                            flexShrink: 0,
                            marginLeft: "minor",
                            marginRight: "sm",
                            color: "icon",
                            transition: "all 0.1s"
                        },
                        activeBlock: {
                            paddingLeft: "32px"
                        },
                        subItem: {
                            variant: "sideMenu.item",
                            pt: "xs",
                            pb: "xs",
                            minHeight: "40px",
                            wordBreak: "break-word",
                            fontWeight: "normal",
                            borderLeftStyle: "solid",
                            borderLeftColor: "transparent"
                        },
                        activeSubItem: {
                            variant: "sideMenu.subItem",
                            bg: "muted",
                            fontWeight: "medium",
                            borderLeftColor: "primary"
                        }
                    }
                }, {
                    mobileMenu: {
                        container: {
                            bg: "black.header",
                            p: "sm"
                        },
                        noSubMenuContainer: {
                            variant: "mobileMenu.container",
                            pb: "xs"
                        },
                        tabs: {
                            height: "35px"
                        },
                        tab: {
                            marginRight: "md",
                            alignItems: "center",
                            color: "t.third",
                            "& >svg": {
                                marginRight: "minor"
                            },
                            "& >div": {
                                flexDirection: "column",
                                fontSize: "md",
                                lineHeight: 1.5,
                                position: "relative",
                                "& >div": {
                                    position: "absolute",
                                    bottom: "-2px",
                                    height: 2,
                                    width: "100%",
                                    bg: "primary"
                                }
                            }
                        },
                        activeTab: {
                            variant: "mobileMenu.tab",
                            "& > svg": {
                                color: "primary"
                            },
                            "& > div": {
                                color: "#fff"
                            }
                        },
                        dropdownContainer: {
                            width: "100%",
                            zIndex: 11,
                            whiteSpace: "nowrap",
                            fontSize: 1
                        },
                        dropdownBox: {
                            marginTop: "-1px",
                            bg: "background",
                            width: "100%",
                            borderRadius: "0 0 2px 2px",
                            color: "#212833"
                        },
                        dropdown: {
                            p: "0 xp",
                            lineHeight: "40px",
                            height: "40px",
                            bg: "#fff",
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            fontSize: "sm",
                            borderRadius: "small"
                        },
                        selectedDropDown: {
                            variant: "mobileMenu.dropdown",
                            bg: "#F5F5F5",
                            fontWeight: "medium"
                        },
                        dropdownInput: {
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%",
                            height: "40px",
                            bg: "#fff",
                            borderRadius: "small",
                            padding: "0 md",
                            color: "#212833",
                            fontWeight: "medium",
                            "& >svg": {
                                marginLeft: "minor",
                                flexShrink: 0,
                                color: "icon"
                            },
                            "& >div": {
                                textOverflow: "ellipsis",
                                overflow: "hidden"
                            }
                        }
                    }
                }, {
                    twoFactor: {
                        pointerText: {
                            cursor: "pointer",
                            textAlign: "center",
                            marginTop: "plus",
                            fontWeight: "normal",
                            fontSize: 1
                        },
                        lable: {
                            fontWeight: "normal",
                            fontSize: 1,
                            lineHeight: "32px",
                            marginBottom: "md"
                        },
                        tabItem: {
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [172, 192]
                        },
                        tabItemSingle: {
                            borderBottom: "2px solid",
                            borderColor: "primary",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "30px",
                            width: [344, 384]
                        },
                        loading: {
                            position: "absolute",
                            bottom: "0",
                            left: "0",
                            justifyContent: "center",
                            alignItems: "center",
                            lineHeight: "lg",
                            color: "t.third",
                            fontSize: "2",
                            height: "100%",
                            width: "100%",
                            zIndex: "1",
                            userSelect: "none",
                            backgroundColor: "rgba(255, 255, 255, 0.9)"
                        },
                        error: {
                            color: "accent",
                            fontSize: "0",
                            marginTop: "minor"
                        },
                        googleActive: {
                            transform: ["translate3d(0px, 0px, 0px)"]
                        },
                        smsActive: {
                            transform: ["translate3d(172px, 0px, 0px)", "translate3d(192px, 0px, 0px)"]
                        }
                    },
                    Ensure2FA: {
                        title: {
                            color: "text",
                            fontWeight: "medium",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        },
                        desc: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: [296, 336],
                            textAlign: "center",
                            lineHeight: "18px",
                            marginBottom: "xs"
                        }
                    },
                    Enable2FA: {
                        wrap: {
                            width: [344, 384],
                            height: "342px",
                            position: "relative",
                            justifyContent: "center",
                            flexDirection: "column"
                        },
                        title: {
                            color: "text",
                            fontWeight: "normal",
                            fontSize: 1,
                            width: "296px",
                            textAlign: "center",
                            lineHeight: "18px"
                        },
                        card: {
                            width: "160px",
                            height: "64px",
                            border: "1px solid #EAECEF",
                            borderRadius: "4px",
                            margin: "minor",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-evenly",
                            boxSizing: "content-box",
                            cursor: "pointer",
                            "&:hover": {
                                borderColor: "primary"
                            },
                            "&:active": {
                                backgroundColor: "#FBEAB6",
                                borderColor: "primary"
                            }
                        },
                        risk: {
                            color: "#F0B90A",
                            fontSize: "1",
                            lineHeight: "30px"
                        },
                        skip: {
                            color: "t.third",
                            fontSize: "1",
                            textDecoration: "underline",
                            cursor: "pointer"
                        },
                        cardWrap: {
                            margin: "40px 0"
                        },
                        icon: {
                            width: "42px",
                            height: "42px",
                            marginRight: "sm"
                        },
                        front: {
                            zIndex: "1",
                            visibility: "visible"
                        },
                        back: {
                            zIndex: "0",
                            visibility: "hidden"
                        }
                    },
                    Modal: {
                        wrap: {
                            py: [40],
                            width: [344, 384],
                            height: [342],
                            borderRadius: "default"
                        }
                    }
                }, {
                    inputCode: {
                        default: {
                            width: "100%",
                            justifyContent: "space-between",
                            "& > div:not(:last-child)": {
                                mr: "minor"
                            },
                            ".bn-inputCode-input": {
                                width: ["inputCodeMobile", "inputCode"]
                            },
                            ".bn-inputCode-input input": {
                                textAlign: "center",
                                bottom: "xs",
                                position: "relative",
                                fontSize: "md"
                            }
                        },
                        outlineLarge: {
                            variant: "inputCode.default",
                            ".bn-inputCode-input  input": {
                                bottom: "0px",
                                fontSize: "md"
                            },
                            ".bn-inputCode-input > div": {
                                width: "40px"
                            }
                        }
                    }
                }, {
                    safety: {
                        container: {
                            alignItems: "baseline",
                            "& > div": {
                                transform: "translateY(-2px)"
                            },
                            "& > label": {
                                fontSize: "xs",
                                ml: "minor"
                            }
                        },
                        level: {
                            width: "8px",
                            height: "3px",
                            borderRadius: "small",
                            mr: "minor",
                            bg: "muted"
                        }
                    }
                }, {
                    styledSlider: {
                        default: {
                            mt: "sm",
                            mb: "sm",
                            paddingLeft: "ls",
                            paddingRight: "ls",
                            width: "100%",
                            ".bn-slider-container": {
                                position: "relative",
                                justifyContent: "space-between",
                                alignItems: "center",
                                width: "calc(100% - 14px)",
                                ml: "7px",
                                height: "25px",
                                "&:hover > label": {
                                    visibility: "visible",
                                    opacity: 1
                                }
                            },
                            ".bn-slider-available-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.line",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-progress-bar": {
                                bg: "slider.progressBar"
                            },
                            ".bn-slider-disabled-bar": {
                                boxSizing: "content-box",
                                position: "absolute",
                                height: "4px",
                                bg: "slider.disabledBar",
                                borderTop: "10px solid transparent",
                                borderBottom: "10px solid transparent",
                                backgroundClip: "padding-box"
                            },
                            ".bn-slider-radio-button": {
                                position: "absolute",
                                width: "16px",
                                height: "16px",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "slider.tooltipText",
                                borderRadius: "default",
                                border: "4px solid",
                                borderColor: "slider.progressBar",
                                zIndex: 20,
                                cursor: "grab",
                                transition: "box-shadow 0.2s ease",
                                "&::after": {
                                    content: '""',
                                    display: "block",
                                    width: "16px",
                                    height: "16px",
                                    border: "2px solid",
                                    borderColor: "bg1",
                                    borderRadius: "default",
                                    background: "transparent",
                                    position: "absolute",
                                    top: "50%",
                                    left: "50%",
                                    transform: "translate(-50%,-50%)"
                                }
                            },
                            ".bn-slider-radio-tooltip": {
                                visibility: "hidden",
                                opacity: 0,
                                position: "absolute",
                                top: 0,
                                marginTop: "-24px",
                                padding: "2px 4px",
                                borderRadius: "small",
                                bg: "slider.progressBar",
                                color: "slider.tooltipText",
                                fontSize: 0,
                                verticalAlign: "top",
                                transform: "translateX(-50%)",
                                zIndex: 10,
                                userSelect: "none",
                                transition: "visibility 0.2s ease, opacity 0.2s ease"
                            },
                            ".bn-slider-stepper": {
                                boxSizing: "content-box",
                                position: "absolute",
                                transform: "translateX(-50%) rotate(45deg)",
                                bg: "bg1",
                                color: "t.third",
                                width: "6px",
                                height: "6px",
                                borderRadius: "small",
                                border: "2px solid",
                                borderColor: "line",
                                zIndex: "10",
                                overflow: "visible",
                                cursor: "pointer",
                                ":hover": {
                                    bg: "line",
                                    borderColor: "bg1"
                                }
                            },
                            ".bn-slider-progress-stepper": {
                                bg: "slider.progressBar",
                                borderColor: "bg1",
                                ":hover": {
                                    bg: "slider.progressBar"
                                }
                            },
                            ".bn-slider-disabled-stepper": {
                                bg: "slider.disabledBar",
                                color: "slider.disabledBar",
                                ":hover": {
                                    bg: "slider.disabledBar"
                                }
                            },
                            ".bn-slider-scale": {
                                position: "absolute",
                                left: "20px",
                                top: "15px",
                                transform: "translateX(calc(-50% + 4px)) rotate(-45deg)",
                                fontSize: 1,
                                userSelect: "none"
                            }
                        },
                        primary: {
                            variant: "styledSlider.default",
                            " .bn-slider-progress-bar": {
                                bg: "primary"
                            },
                            " .bn-slider-radio-button": {
                                borderColor: "primary"
                            },
                            " .bn-slider-radio-tooltip": {
                                bg: "primary"
                            },
                            " .bn-slider-progress-stepper": {
                                bg: "primary"
                            }
                        }
                    }
                }, {
                    smartSlider: {
                        wrapper: {
                            mt: "sm",
                            mb: "sm",
                            width: "100%"
                        },
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "xxs",
                            height: "25px",
                            "&:hover > label": {
                                display: "block"
                            }
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "#48515D",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        disabledBar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            height: "4px",
                            bg: "#cccccc",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "#76808F",
                            opacity: "0.2",
                            borderRadius: "circle",
                            border: "2px solid",
                            zIndex: 20,
                            cursor: "grab"
                        },
                        tooltip: {
                            display: "none",
                            position: "absolute",
                            top: 0,
                            marginTop: "-18px",
                            padding: "1px 2px",
                            borderRadius: "small",
                            color: "#FFFFFF",
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "#656D7B",
                            borderRadius: "circle",
                            zIndex: "10",
                            overflow: "visible"
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }, {
                    tradeSlider: {
                        wrapper: {
                            mt: "sm",
                            mb: "sm",
                            width: "100%"
                        },
                        container: {
                            position: "relative",
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "calc(100% - 14px)",
                            ml: "7px",
                            height: "25px",
                            "&:hover > label": {
                                visibility: "visible",
                                opacity: 1
                            },
                            "&:hover > .bn-tradeSlider-ratioButton": {
                                boxShadow: function(e) {
                                    return "0 0 0 1px ".concat(e.colors.slider.ratioButton, ", 0 0 0 4px ").concat(e.colors.lines.primary)
                                }
                            }
                        },
                        bar: {
                            boxSizing: "content-box",
                            position: "absolute",
                            width: "100%",
                            height: "4px",
                            bg: "lines.primary",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            backgroundClip: "padding-box"
                        },
                        ratioButton: {
                            position: "absolute",
                            width: "14px",
                            height: "14px",
                            transform: "translateX(-50%)",
                            bg: "slider.ratioButton",
                            borderRadius: "circle",
                            border: "3px solid",
                            zIndex: 20,
                            cursor: "grab",
                            transition: "box-shadow 0.2s ease"
                        },
                        tooltip: {
                            visibility: "hidden",
                            opacity: 0,
                            position: "absolute",
                            top: 0,
                            marginTop: "20px",
                            padding: "1px 2px",
                            borderRadius: 2,
                            fontSize: 0,
                            verticalAlign: "top",
                            transform: "translateX(-50%)",
                            zIndex: 10,
                            userSelect: "none",
                            bg: "transparent",
                            color: "slider.progress",
                            transition: "visibility 0.2s ease, opacity 0.2s ease"
                        },
                        stepper: {
                            position: "absolute",
                            transform: "translateX(-50%)",
                            width: "8px",
                            height: "8px",
                            bg: "lines.primary",
                            borderRadius: "circle",
                            boxShadow: "0 0 0 2px",
                            color: "slider.ratioButton",
                            zIndex: "10",
                            overflow: "visible",
                            cursor: "pointer",
                            transition: "all 0.2s ease",
                            "&:hover": {
                                width: "14px",
                                height: "14px"
                            }
                        },
                        scale: {
                            position: "absolute",
                            transform: "translateX(calc(-50% + 4px))",
                            mt: "10px",
                            fontSize: 1,
                            userSelect: "none"
                        }
                    }
                }, {
                    select: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: 10,
                            padding: 0,
                            transition: "height 0.2s ease",
                            background: "#FFFFFF",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {
                                background: "#F5F5F7"
                            }
                        }
                    }
                }, {
                    search: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            bg: "search.bg",
                            boxShadow: "card"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            bg: "search.bg",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            "&:hover": {
                                backgroundColor: "search.hoverBg"
                            }
                        },
                        icon: {
                            cursor: "pointer",
                            color: "t.third",
                            verticalAlign: "middle"
                        }
                    }
                }, zr, {
                    pureSelect: {
                        dropdown: {
                            position: "absolute",
                            overflowY: "scroll",
                            width: "100%",
                            zIndex: "dropdown",
                            padding: 0,
                            transition: "height 0.2s ease",
                            boxShadow: "tooltip",
                            borderRadius: "default",
                            cursor: "pointer",
                            bg: "popupBg"
                        },
                        option: {
                            cursor: "pointer",
                            display: "flex",
                            px: "sm",
                            py: "xs",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis"
                        },
                        icon: {
                            color: "icon",
                            position: "absolute",
                            right: "10px",
                            top: "50%"
                        }
                    }
                }, {
                    breadcrumb: {
                        container: {
                            alignItems: "center",
                            pl: "plus",
                            pr: "plus",
                            height: "48px",
                            fontSize: 0,
                            color: "t.secondary"
                        },
                        splitter: {
                            ml: "xs",
                            mr: "xs",
                            lineHeight: 1,
                            color: "line"
                        }
                    },
                    breadcrumbLink: {
                        default: {
                            textDecoration: "none",
                            fontSize: "sm",
                            lineHeight: 1
                        }
                    }
                }, {
                    radio: {
                        default: {
                            variant: "text.label5",
                            display: "inline-block",
                            cursor: "pointer",
                            "& svg:hover": {
                                color: "primary"
                            },
                            "& svg:active": {
                                color: "primary"
                            }
                        },
                        disabled: {
                            variant: "text.label5",
                            display: "inline-block",
                            cursor: "not-allowed",
                            color: "t.disabled",
                            "& svg, & label": {
                                cursor: "not-allowed"
                            }
                        }
                    }
                }, {
                    mediaBox: {
                        default: {
                            width: ["100%", "384px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            px: "md",
                            borderRadius: "default",
                            bg: "#fff"
                        },
                        rwdContentBox: {
                            textAlign: "center",
                            width: ["100%", "100%", "736px"],
                            m: [0, "24px auto", "24px auto"],
                            px: "md",
                            py: "xp",
                            borderRadius: "default",
                            bg: "#fff",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadow: {
                            width: ["100%", "750px", "970px"],
                            m: ["0 auto", "40px auto", "40px auto"],
                            p: ["md", "40px", "40px"],
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        shadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"]
                        },
                        topShadowSm: {
                            variant: "mediaBox.default",
                            py: "xp",
                            boxShadow: ["", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)", "0px 2px 4px rgba(0, 0, 0, 0.08), 0px 0px 2px rgba(0, 0, 0, 0.08)"],
                            mt: ["0", "100px", "100px"]
                        },
                        newDSdefault: {
                            width: ["100%", "400px", "432px"],
                            m: ["40px auto", "48px auto", "48px auto"],
                            px: ["sm", "md"],
                            bg: "#fff"
                        }
                    }
                }, {
                    twoFAThreeCode: {
                        default: {
                            width: "484px",
                            position: "relative",
                            maxWidth: "100%",
                            height: "100%",
                            flexDirection: "column",
                            p: "sm",
                            "&.dialog": {
                                width: "436px",
                                p: 0
                            },
                            "&.safeWrap": {
                                width: ["300px", "384px", "384px"],
                                p: 0,
                                ".bn-2fa-title": {
                                    fontSize: "plus",
                                    mt: "xs"
                                }
                            },
                            ".bn-2fa-title": {
                                textAlign: "center"
                            },
                            ".bn-2fa-info": {
                                textAlign: "center",
                                mt: "ls",
                                mb: "plus",
                                color: "t.third",
                                lineHeight: "16px",
                                height: "auto"
                            },
                            ".bn-2fa-info.bn-2fa-table-info": {
                                mb: "27px"
                            },
                            "&.dialog .bn-2fa-title": {
                                lineHeight: "64px",
                                fontSize: "20px",
                                textAlign: "left"
                            },
                            "&.dialog .bn-2fa-info": {
                                textAlign: "left",
                                mt: 0,
                                mb: 4
                            },
                            ".bn-2fa-link": {
                                color: "t.yellow",
                                fontSize: "14px",
                                lineHeight: "20px",
                                fontWeight: 500,
                                textDecoration: "none",
                                textAlign: "left",
                                mb: "md"
                            },
                            ".error .bn-2fa-field": {
                                borderColor: "toast.error"
                            },
                            ".bn-2fa-field": {
                                flex: 1
                            },
                            ".bn-2fa-field .bn-input-label": {
                                whiteSpace: "nowrap",
                                fontSize: "14px"
                            },
                            ".bn-2fa-fieldbutton": {
                                width: "104px",
                                ml: "xs",
                                "&.noCn": {
                                    flexDirection: "column",
                                    lineHeight: 1.15
                                },
                                "&:disabled": {
                                    color: "#D0980B"
                                },
                                "& .sub": {
                                    color: "t.third",
                                    fontSize: "xs",
                                    fontWeight: "normal"
                                }
                            },
                            ".bn-2fa-fieldInfo": {
                                mt: "minor",
                                mb: "20px",
                                lineHeight: "16px",
                                color: "t.third",
                                height: "auto",
                                "& .voiceGet": {
                                    color: "t.yellow",
                                    cursor: "pointer"
                                }
                            },
                            ".error .bn-2fa-fieldInfo": {
                                color: "toast.error"
                            },
                            ".bn-2fa-submit": {
                                mb: "md"
                            },
                            ".bn-2fa-fullscreenSubmit": {
                                position: "fixed",
                                bottom: 0,
                                left: 0,
                                right: 0,
                                boxShadow: "0px -2px 4px rgba(0, 0, 0, 0.06)",
                                p: "md"
                            },
                            ".bn-2fa-cell": {
                                width: "148px",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                flexDirection: "column",
                                lineHeight: "18px",
                                padding: "16px",
                                border: "none",
                                ":hover": {
                                    bg: "bg3",
                                    cursor: "pointer"
                                }
                            },
                            ".bn-2fa-cell:nth-of-type(n+2)": {
                                ml: ["sm", "md", "md"]
                            },
                            ".bn-2fa-celltext": {
                                mt: "ls",
                                fontWeight: "medium",
                                whiteSpace: "break-spaces"
                            },
                            ".bn-2fa-nextHit": {
                                fontSize: "xs",
                                textDecoration: "none",
                                color: "t.yellow",
                                "&:hover": {
                                    color: "t.yellow"
                                },
                                cursor: "pointer",
                                alignSelf: "flex-end",
                                mb: 3
                            },
                            ".bn-2fa-tabGroup": {
                                mb: "md"
                            },
                            ".bn-2fa-switchChoice": {
                                textDecoration: "none",
                                mb: "md",
                                color: "t.yellow",
                                width: "auto",
                                display: "inline-block",
                                cursor: "pointer"
                            },
                            ".bn-2fa-cellIconWrap": {
                                position: "relative",
                                width: "48px",
                                height: "48px",
                                lineHeight: "20px"
                            },
                            ".bn-2fa-cellIcon": {
                                position: "absolute"
                            }
                        }
                    }
                }, {
                    card: {
                        default: {
                            p: "xs",
                            bg: "background",
                            boxShadow: "card",
                            borderRadius: "default"
                        }
                    }
                }, Qr, {
                    backTop: {
                        default: {
                            borderRadius: "circle",
                            width: "40px",
                            height: "40px",
                            bg: "t.primary",
                            opacity: .5,
                            justifyContent: "center",
                            alignItems: "center",
                            cursor: "pointer",
                            zIndex: "backTop",
                            "&:hover": {
                                opacity: .7
                            },
                            ".backTop-arrow-icon": {
                                color: "bg1"
                            }
                        }
                    }
                }, {
                    table: {
                        dimhead: {
                            ".bn-table th": {
                                backgroundColor: "bg2"
                            }
                        },
                        purehead: {
                            ".bn-table th": {
                                backgroundColor: "bg1"
                            }
                        }
                    }
                }, {
                    carousel: {
                        dot: {
                            bar: {
                                ".slick-dots": {
                                    li: {
                                        position: "relative",
                                        display: "inline-block",
                                        "-webkit-box-flex": 0,
                                        "-ms-flex": "0 1 auto",
                                        flex: "0 1 auto",
                                        "-webkit-box-sizing": "content-box",
                                        boxSizing: "content-box",
                                        width: "16px",
                                        height: "3px",
                                        margin: "0 2px",
                                        marginRight: "3px",
                                        marginLeft: "3px",
                                        padding: 0,
                                        textAlign: "center",
                                        textIndent: "-999px",
                                        verticalAlign: "top",
                                        "-webkit-transition": "all 0.5s",
                                        transition: "all 0.5s",
                                        button: {
                                            display: "block",
                                            width: "100%",
                                            height: "3px",
                                            padding: 0,
                                            color: "transparent",
                                            fontSize: 0,
                                            background: "#fff",
                                            border: 0,
                                            borderRadius: "1px",
                                            outline: "none",
                                            cursor: "pointer",
                                            opacity: .3,
                                            "-webkit-transition": "all 0.5s",
                                            transition: "all 0.5s",
                                            "&:hover": {
                                                opacity: .75
                                            },
                                            "&:focus": {
                                                opacity: .75
                                            }
                                        },
                                        "&.slick-active": {
                                            width: "24px",
                                            button: {
                                                background: "#fff",
                                                opacity: 1
                                            },
                                            "&:hover": {
                                                opacity: 1
                                            },
                                            "&:focus": {
                                                opacity: 1
                                            }
                                        }
                                    },
                                    "&.slick-dots-bottom": {
                                        bottom: "12px"
                                    },
                                    "&.slick-dots-top": {
                                        top: "12px"
                                    }
                                },
                                "&.uikit-carousel-vertical": {
                                    ".slick-dots": {
                                        top: "50%",
                                        bottom: "auto",
                                        "-webkit-box-orient": "vertical",
                                        "-webkit-box-direction": "normal",
                                        "-ms-flex-direction": "column",
                                        flexDirection: "column",
                                        width: "3px",
                                        height: "auto",
                                        margin: 0,
                                        "-webkit-transform": "translateY(-50%)",
                                        transform: "translateY(-50%)",
                                        li: {
                                            width: "3px",
                                            height: "16px",
                                            margin: "4px 2px",
                                            verticalAlign: "baseline",
                                            "&.slick-active": {
                                                width: "3px",
                                                height: "24px",
                                                button: {
                                                    width: "3px",
                                                    height: "24px"
                                                }
                                            },
                                            button: {
                                                width: "3px",
                                                height: "16px"
                                            }
                                        },
                                        "&.slick-dots-left": {
                                            right: "auto",
                                            left: "12px"
                                        },
                                        "&.slick-dots-right": {
                                            right: "12px",
                                            left: "auto"
                                        }
                                    }
                                }
                            },
                            circle: {
                                ".slick-dots": {
                                    li: {
                                        position: "relative",
                                        display: "inline-block",
                                        "-webkit-box-flex": 0,
                                        "-ms-flex": "0 1 auto",
                                        flex: "0 1 auto",
                                        "-webkit-box-sizing": "content-box",
                                        boxSizing: "content-box",
                                        width: "8px",
                                        height: "3px",
                                        margin: "0 2px",
                                        marginRight: "3px",
                                        marginLeft: "3px",
                                        padding: 0,
                                        textAlign: "center",
                                        textIndent: "-999px",
                                        verticalAlign: "top",
                                        "-webkit-transition": "all 0.5s",
                                        transition: "all 0.5s",
                                        button: {
                                            display: "block",
                                            width: "100%",
                                            height: "8px",
                                            padding: 0,
                                            color: "transparent",
                                            fontSize: 0,
                                            backgroundColor: "line",
                                            border: 0,
                                            borderRadius: "8px",
                                            outline: "none",
                                            cursor: "pointer",
                                            "-webkit-transition": "all 0.5s",
                                            transition: "all 0.5s"
                                        },
                                        "&.slick-active": {
                                            width: "24px",
                                            button: {
                                                backgroundColor: "primary"
                                            }
                                        }
                                    }
                                },
                                "&.uikit-carousel-vertical": {
                                    ".slick-dots-left": {
                                        right: "auto",
                                        left: "12px"
                                    },
                                    ".slick-dots-right": {
                                        right: "12px",
                                        left: "auto"
                                    },
                                    ".slick-dots": {
                                        top: "50%",
                                        bottom: "auto",
                                        "-webkit-box-orient": "vertical",
                                        "-webkit-box-direction": "normal",
                                        "-ms-flex-direction": "column",
                                        flexDirection: "column",
                                        width: "8px",
                                        height: "auto",
                                        margin: 0,
                                        "-webkit-transform": "translateY(-50%)",
                                        transform: "translateY(-50%)",
                                        li: {
                                            width: "8px",
                                            height: "8px",
                                            margin: "4px 2px",
                                            verticalAlign: "baseline",
                                            button: {
                                                width: "8px",
                                                height: "8px"
                                            },
                                            "&.slick-active": {
                                                width: "8px",
                                                height: "24px",
                                                button: {
                                                    width: "8px",
                                                    height: "24px"
                                                }
                                            }
                                        },
                                        "&.slick-dots-bottom": {
                                            bottom: "12px"
                                        },
                                        "&.slick-dots-top": {
                                            top: "12px"
                                        }
                                    }
                                }
                            }
                        }
                    }
                }, {
                    formItem: {
                        default: {
                            width: "100%",
                            mb: "md"
                        },
                        label: {
                            variant: "text.body2",
                            width: "100%",
                            alignItems: "center",
                            mb: "minor",
                            color: "t.primary"
                        },
                        help_default: {
                            variant: "text.body2",
                            width: "100%",
                            mt: "minor",
                            color: "t.third"
                        },
                        help_error: {
                            variant: "formItem.help_default",
                            color: "t.sell"
                        },
                        help_warning: {
                            variant: "formItem.help_default",
                            color: "t.yellow"
                        },
                        content: {
                            width: "100%",
                            position: "relative",
                            minHeight: "12px",
                            "&.hide": {
                                height: 0,
                                minHeight: 0,
                                overflow: "hidden"
                            }
                        },
                        crowded: {
                            variant: "formItem.default",
                            display: "flex",
                            alignItems: "center"
                        },
                        crowdedContent: {
                            variant: "formItem.content",
                            flex: 1
                        }
                    }
                }),
                Zr = (0, n.A)({
                    colors: {
                        greys: {
                            switch: "#C1C6CD",
                            risk: "#EAECEF"
                        },
                        black: {
                            header: "#12161C",
                            footer: "#0B0E11",
                            text: "#212833"
                        },
                        header: {
                            text: "white",
                            bg: "#12161C",
                            dropdown: "#1E2126",
                            gray: "#848E9C",
                            black: "#212833"
                        }
                    },
                    fonts: {
                        heading: "inherit",
                        monospace: "Menlo, monospace"
                    },
                    breakpoints: ["768px", "1024px", "1280px"],
                    fontSizes: (0, h.A)((0, n.A)({}, [12, 14, 16, 20, 24, 28, 32]), {
                        xs: 12,
                        sm: 14,
                        md: 16,
                        minor: 18,
                        plus: 20,
                        xp: 24,
                        lg: 28,
                        xl: 32,
                        xxl: 40,
                        xxxl: 48,
                        xxxxl: 56
                    }),
                    fontWeights: {
                        extraLight: 200,
                        light: 300,
                        normal: 400,
                        regular: 400,
                        medium: 500,
                        semibold: 600,
                        bold: 700
                    },
                    lineHeights: {
                        body: 1.5,
                        heading: 1.25
                    },
                    space: (0, h.A)((0, n.A)({}, [0, 4, 8, 16, 24, 32, 48, 64, 80]), {
                        line: 1,
                        tiny: 2,
                        minor: 4,
                        xxs: 6,
                        xs: 8,
                        s: 10,
                        ls: 12,
                        sm: 16,
                        md: 24,
                        plus: 32,
                        xp: 40,
                        lg: 48,
                        xl: 64,
                        xxl: 80
                    }),
                    sizes: {
                        avatar: 48,
                        inputCode: 44,
                        inputCodeMobile: 40
                    },
                    radii: {
                        small: 2,
                        default: 4,
                        large: 6,
                        extra: 8,
                        larger: 10,
                        xlarge: 16,
                        extraLarger: 20,
                        xxlarge: 26,
                        circle: 99999
                    },
                    shadows: {
                        card: " 0px 1px 2px rgba(20,21,26,0.04), 0px 3px 6px rgba(71,77,87,0.04), 0px 0px 1px rgba(20,21,26,0.1)",
                        tooltip: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        calendar: " 0px 3px 6px rgba(20,21,26,0.08), 0px 7px 14px rgba(71,77,87,0.08), 0px 0px 1px rgba(20,21,26,0.1)",
                        dialog: "0px 8px 16px rgba(20,21,26,0.16), 0px 16px 32px rgba(71,77,87,0.16), 0px 0px 1px rgba(20,21,26,0.1)",
                        area: "0px 0px 20px rgba(0, 0, 0, 0.08)",
                        dropdown: "0px 8px 16px rgba(24, 26, 32, 0.16)"
                    },
                    zIndices: {
                        mask: 10,
                        menu: 1e3,
                        header: 1001,
                        dropdown: 1100,
                        modal: 1200,
                        backTop: 1225,
                        calendar: 1250,
                        mobileDatePopup: 1275,
                        notification: 1300,
                        alert: 1350,
                        tooltip: 1400,
                        drawer: 9999
                    },
                    styles: {
                        root: {
                            fontWeight: "body",
                            lineHeight: "body"
                        }
                    }
                }, Kr);
            var Jr = "#FFFFFF",
                en = "#FAFAFA",
                tn = "#F5F5F5",
                rn = "#EAECEF",
                nn = "#D8DCE1",
                on = "#B7BDC6",
                an = "#929AA5",
                sn = "#848E9C",
                ln = "#707A8A",
                cn = "#5E6673",
                un = "#474D57",
                dn = "#2B3139",
                pn = "#1E2329",
                hn = "#181A20",
                gn = "#0B0E11",
                fn = "#FFFDE6",
                bn = "#FEF6D8",
                mn = "#FFEF87",
                xn = "#FCD535",
                vn = "#F0B90B",
                yn = "#C99400",
                En = "#A37200",
                An = "#8D5F02",
                wn = "#6A4403",
                Bn = "#3C2601",
                Sn = "#281A00",
                Cn = "#328DFD",
                Fn = "#F2FFF7",
                Dn = "#E6FFF1",
                kn = "#32D993",
                Rn = "#0ECB81",
                Tn = "#03A66D",
                _n = "#102821",
                In = "#FEF6F7",
                Ln = "#FEF1F2",
                On = "#FF707E",
                Hn = "#F6465D",
                Nn = "#CF304A",
                Pn = "#35141D",
                zn = r("tEf9"),
                $n = r("veKZ"),
                Gn = r.n($n),
                Mn = r("3POh"),
                jn = r.n(Mn),
                Wn = r("jPI1"),
                Un = r.n(Wn),
                qn = r("pL+m"),
                Qn = r.n(qn),
                Vn = r("H8sf"),
                Yn = r.n(Vn);
            const Xn = {
                dark: {
                    colors: {
                        t: {
                            sell: "#EC8D42",
                            buy: "#1F8DF9"
                        },
                        sell: "#DD7A2B",
                        buy: "#1F8DF9",
                        sellHover: "#EEA062",
                        buyHover: "#69B1F8",
                        depthSellBg: "#553821",
                        depthBuyBg: "#22384E",
                        toastFailBg: "#553821",
                        toastSuccessBg: "#22384E",
                        success: "#1F8DF9",
                        error: "#DD7A2B",
                        successBg: "#22384E",
                        errorBg: "#553821"
                    }
                },
                light: {
                    colors: {
                        t: {
                            sell: "#EC8D42",
                            buy: "#297FD4"
                        },
                        sell: "#DD7A2B",
                        buy: "#1F8DF9",
                        sellHover: "#EEA062",
                        buyHover: "#69B1F8",
                        depthSellBg: "#FFEFE2",
                        depthBuyBg: "#E6F3FF",
                        toastFailBg: "#FFEFE2",
                        toastSuccessBg: "#E6F2FF",
                        success: "#1F8DF9",
                        error: "#DD7A2B",
                        errorBg: "#FFEFE2",
                        successBg: "#E6F2FF"
                    }
                }
            };
            var Kn = ["light", "dark"],
                Zn = jn()(Gn()),
                Jn = function(e) {
                    return Zn({})((function(t, r) {
                        var n;
                        return t[r] = (n = r, Un()([Qn(), Zn({})((function(e, t) {
                            var r = (0, v.A)(t, 2),
                                o = r[0],
                                i = r[1];
                            return e[o] = i[n], e
                        }))]))(e), t
                    }))(Kn)
                },
                eo = function(e) {
                    return t = Xn[e].colors,
                        function(e) {
                            return Yn()({}, e, t)
                        };
                    var t
                },
                to = function(e) {
                    return function() {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Yn().apply(void 0, [{}, t].concat((0, zn.A)(e)))
                    }
                },
                ro = function(e) {
                    var t = e.palette,
                        r = e.externalColors,
                        n = e.layout;
                    return to([{
                        colors: r(t)
                    }, {
                        colors: t
                    }])(n)
                },
                no = "linear-gradient(180deg, #F8D12F 0%, #F0B90B 100%)";
            const oo = {
                primaryGradient: {
                    light: no,
                    dark: no
                },
                grayGradient: {
                    light: "linear-gradient(295.27deg, #15141A 0%, #474D57 84.52%)",
                    dark: "linear-gradient(295.27deg, #FFFFFF 0%, #E6E8EA 84.52%)"
                }
            };
            var io = Jn(oo).light,
                ao = (0, n.A)({
                    modalBg: Jr,
                    popupBg: Jr,
                    bg1: Jr,
                    bg2: en,
                    bg3: tn,
                    bg4: cn,
                    bg5: hn,
                    bg6: gn,
                    line: rn,
                    liteBg1: Jr,
                    liteBg2: en,
                    t: {
                        primary: pn,
                        secondary: un,
                        third: ln,
                        placeholder: on,
                        disabled: on,
                        yellow: yn,
                        buy: Tn,
                        sell: Nn,
                        toast: An,
                        white: Jr
                    },
                    iconNormal: an,
                    alertYellowBg: fn,
                    badgeYellowBg: bn,
                    outlineHover: mn,
                    primaryHover: xn,
                    primary: vn,
                    toastFailBg: In,
                    depthSellBg: Ln,
                    sellHover: On,
                    sell: Hn,
                    toastSuccessBg: Fn,
                    depthBuyBg: Dn,
                    buyHover: kn,
                    buy: Rn,
                    invBg: en,
                    success: Rn,
                    successBg: Fn,
                    error: Hn,
                    errorBg: In,
                    disableBg: rn
                }, io),
                so = eo("light")(ao);
            const lo = ao;
            var co = function(e) {
                    return (0, h.A)((0, n.A)({}, Zr.colors), {
                        tooltipBg: e.modalBg,
                        t: {
                            blue: "#285C93",
                            muted: "#CCCCCC",
                            grey: "#D8D8D8",
                            link: e.t.yellow
                        },
                        errors: e.error,
                        elevation: {
                            shadow01: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                            shadow02: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                            shadow03: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                        },
                        calendar: {
                            selected: vn,
                            selectedRange: xn,
                            disableColor: e.t.disabled,
                            shadow: rn,
                            line: e.line,
                            buttonDisableBg: e.bg3,
                            mobileMaskBg: "255, 255, 255"
                        },
                        mobileDatePopup: {
                            maskGradientTop: "linear-gradient(0deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 80%, #ffffff)",
                            maskGradientBottom: "linear-gradient(180deg, rgba(255, 255, 255, 0.6) 0%, rgba(255, 255, 255, 0.8) 80%, #ffffff)"
                        },
                        slider: {
                            disabledBar: e.line,
                            availableBar: nn,
                            progressBar: dn,
                            tooltipText: e.modalBg,
                            ratioButton: Jr,
                            progress: sn,
                            line: e.line
                        },
                        button: {
                            primaryPressed: e.primary,
                            defaultDisabled: e.line,
                            secondaryBg: e.line,
                            secondaryPressedBg: e.t.placeholder,
                            graytypeBg: e.t.secondary,
                            graytypeHoverBg: e.t.primary,
                            graytypePressedBg: e.t.primary,
                            graytypeHoverFontColor: e.popupBg,
                            graytypePressedFontColor: e.popupBg,
                            buyBg: e.buy,
                            buyHover: e.buyHover,
                            buyActiveBg: e.buy,
                            white: e.t.white,
                            primaryHover: e.primaryHover,
                            sellBg: e.sell,
                            sellHover: e.sellHover,
                            sellActiveBg: e.t.sell,
                            negativeBg: e.error,
                            negativeHover: e.error,
                            outlineBgHover: e.badgeYellowBg,
                            outlineBorderHover: e.primaryHover,
                            outlineBgActive: e.badgeYellowBg,
                            outlineBorderActive: e.primary,
                            outlineText: e.t.primary,
                            outlinePrimaryText: e.t.yellow
                        },
                        radio: {
                            gray: "#5C5C5C"
                        },
                        checkbox: {
                            gray: "#AEB4BC",
                            hover: e.primary,
                            bg: e.primary,
                            indeterminateFill: e.t.white,
                            disabledBorder: e.t.placeholder
                        },
                        toast: {
                            info: e.t.disabled,
                            error: e.error,
                            warning: e.primary,
                            success: e.success,
                            title: e.t.primary,
                            content: e.t.secondary,
                            tips: e.primary,
                            bg: e.modalBg,
                            closeColor: e.t.third
                        },
                        search: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        searchDropdown: {
                            clearIconColor: nn
                        },
                        pureSelect: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        alert: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#DAE6F5"
                        },
                        alertV2: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#DAE6F5",
                            successColor: e.success,
                            warningColor: e.primary,
                            errorColor: e.error,
                            infoColor: Cn,
                            errorFontColor: e.error,
                            successFontColor: e.t.primary,
                            warningFontColor: e.t.primary,
                            infoFontColor: e.t.primary
                        },
                        tag: {
                            defaultBg: e.badgeYellowBg,
                            blueBg: "#4A90E230",
                            blueTxt: "#4A90E2",
                            grayBg: e.line,
                            grayTxt: e.t.third,
                            greenBg: e.successBg,
                            greenTxt: e.success,
                            redBg: e.errorBg,
                            redTxt: e.error
                        },
                        dialog: {
                            mask: "rgb(0, 0, 0, 0.5)"
                        },
                        tabs: {
                            flowBg: xn,
                            flowText: pn
                        },
                        advanced: {
                            downDropBg: Jr
                        },
                        transInputBG: e.bg3,
                        maskBg: hn,
                        secondary: "#2EBD85",
                        background: "#FAFAFA",
                        accent: "#F23051",
                        muted: "#F5F5F5",
                        negative: "#F23051",
                        icon: "#848E9C",
                        bg: "#EAECEF",
                        stress: "#F2F2F2",
                        lines: {
                            primary: "#EAECEF",
                            light: "#EAECEF",
                            dark: "#272A2E"
                        },
                        modal: {
                            bg: e.popupBg
                        }
                    })
                },
                uo = (0, h.A)((0, n.A)({}, Zr), {
                    shadows: (0, h.A)((0, n.A)({}, Zr.shadows), {
                        elevation1: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 3px 6px rgba(71, 77, 87, 0.04), 0px 1px 2px rgba(24, 26, 32, 0.04)",
                        elevation2: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 7px 14px rgba(71, 77, 87, 0.08), 0px 3px 6px rgba(24, 26, 32, 0.08)",
                        elevation3: "0px 0px 1px rgba(24, 26, 32, 0.1), 0px 16px 32px rgba(71, 77, 87, 0.16), 0px 8px 16px rgba(24, 26, 32, 0.16)"
                    })
                }),
                po = ro({
                    palette: lo,
                    externalColors: co,
                    layout: uo
                });
            ro({
                palette: so,
                externalColors: co,
                layout: uo
            });
            const ho = po;
            var go = Jn(oo).dark,
                fo = (0, n.A)({
                    modalBg: pn,
                    popupBg: pn,
                    bg1: hn,
                    bg2: gn,
                    bg3: dn,
                    bg4: cn,
                    bg5: hn,
                    bg6: gn,
                    line: un,
                    liteBg1: "#20262D",
                    liteBg2: "#191A1F",
                    t: {
                        primary: rn,
                        secondary: on,
                        third: sn,
                        placeholder: cn,
                        disabled: cn,
                        yellow: vn,
                        buy: Rn,
                        sell: Hn,
                        toast: En,
                        white: Jr
                    },
                    iconNormal: sn,
                    alertYellowBg: Sn,
                    badgeYellowBg: Bn,
                    outlineHover: wn,
                    primaryHover: xn,
                    primary: vn,
                    toastFailBg: Pn,
                    depthSellBg: Pn,
                    sellHover: On,
                    sell: Hn,
                    toastSuccessBg: _n,
                    depthBuyBg: _n,
                    buyHover: kn,
                    buy: Rn,
                    invBg: dn,
                    success: Rn,
                    error: Hn,
                    successBg: _n,
                    errorBg: Pn,
                    disableBg: un
                }, go),
                bo = eo("dark")(fo);
            const mo = fo;
            var xo = function(e) {
                    return (0, h.A)((0, n.A)({}, Zr.colors), {
                        tooltipBg: e.modalBg,
                        t: {
                            blue: "#285C93",
                            muted: "#444",
                            grey: "#D8D8D8",
                            link: e.t.yellow
                        },
                        errors: e.error,
                        elevation: {
                            shadow01: "0px 3px 6px rgba(0,0,0,0.04), 0px 1px 2px rgba(0,0,0,0.04), inset 0px 0px 1px rgba(94,102,115,0.8)",
                            shadow02: "0px 7px 14px rgba(0,0,0,.08), 0px 3px 6px rgba(0,0,0,.08), inset 0px 0px 1px rgba(94,102,115,.9)",
                            shadow03: "0px 16px 32px rgba(0,0,0,0.16), 0px 8px 16px rgba(0,0,0,0.16), inset 0px 0px 1px rgba(94,102,115,0.9)"
                        },
                        calendar: {
                            selected: ln,
                            selectedRange: un,
                            disableColor: e.t.disabled,
                            shadow: gn,
                            line: e.line,
                            buttonDisableBg: e.bg3,
                            mobileMaskBg: "0, 0, 0"
                        },
                        mobileDatePopup: {
                            maskGradientTop: "linear-gradient(0deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 80%, #000000)",
                            maskGradientBottom: "linear-gradient(180deg, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 80%, #000000)"
                        },
                        slider: {
                            disabledBar: e.line,
                            availableBar: cn,
                            progressBar: tn,
                            tooltipText: e.modalBg,
                            ratioButton: "#1F2124",
                            progress: Jr,
                            line: e.line
                        },
                        button: {
                            primaryPressed: e.primary,
                            defaultDisabled: e.line,
                            secondaryBg: e.line,
                            secondaryPressedBg: e.t.placeholder,
                            graytypeBg: e.t.secondary,
                            graytypeHoverBg: e.t.primary,
                            graytypePressedBg: e.t.primary,
                            graytypeHoverFontColor: e.popupBg,
                            graytypePressedFontColor: e.popupBg,
                            buyBg: e.buy,
                            buyHover: e.buyHover,
                            buyActiveBg: e.buy,
                            white: e.t.white,
                            primaryHover: e.primaryHover,
                            sellBg: e.sell,
                            sellHover: e.sellHover,
                            sellActiveBg: e.t.sell,
                            negativeBg: e.error,
                            negativeHover: e.error,
                            outlineBgHover: e.badgeYellowBg,
                            outlineBorderHover: e.primaryHover,
                            outlineBgActive: e.badgeYellowBg,
                            outlineBorderActive: e.primary,
                            outlineText: e.t.primary,
                            outlinePrimaryText: e.t.yellow
                        },
                        radio: {
                            gray: "#5C5C5C"
                        },
                        checkbox: {
                            gray: "#AEB4BC",
                            hover: e.primary,
                            bg: e.primary,
                            indeterminateFill: e.t.white,
                            disabledBorder: e.t.placeholder
                        },
                        toast: {
                            info: e.t.disabled,
                            error: e.error,
                            warning: e.primary,
                            success: e.success,
                            title: e.t.primary,
                            content: e.t.secondary,
                            tips: e.primary,
                            bg: e.modalBg,
                            closeColor: e.t.third
                        },
                        search: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        searchDropdown: {
                            clearIconColor: nn
                        },
                        pureSelect: {
                            bg: e.modalBg,
                            hoverBg: e.bg3
                        },
                        alert: {
                            errorBg: "#3B182B",
                            warningBg: "#3C351F",
                            successBg: "#17352F",
                            infoBg: "#1C2D40"
                        },
                        alertV2: {
                            errorBg: e.errorBg,
                            warningBg: e.badgeYellowBg,
                            successBg: e.successBg,
                            infoBg: "#1C2D40",
                            successColor: e.success,
                            warningColor: e.primary,
                            errorColor: e.error,
                            infoColor: Cn,
                            errorFontColor: e.error,
                            successFontColor: e.t.primary,
                            warningFontColor: e.t.primary,
                            infoFontColor: e.t.primary
                        },
                        tag: {
                            defaultBg: e.badgeYellowBg,
                            blueBg: "#4A90E230",
                            blueTxt: "#4A90E2",
                            grayBg: e.line,
                            grayTxt: e.t.third,
                            greenBg: e.successBg,
                            greenTxt: e.success,
                            redBg: e.errorBg,
                            redTxt: e.error
                        },
                        dialog: {
                            mask: "rgb(0, 0, 0, 0.5)"
                        },
                        tabs: {
                            flowBg: xn,
                            flowText: pn
                        },
                        advanced: {
                            downDropBg: "#313336"
                        },
                        transInputBG: e.bg3,
                        maskBg: hn,
                        secondary: "#2EBD85",
                        background: "#12161C",
                        accent: "#F23051",
                        muted: "#262626",
                        negative: "#F23051",
                        icon: "#848E9C",
                        bg: "#1B1F25",
                        stress: "#1F2124",
                        lines: {
                            primary: "#272A2E",
                            light: "#272A2E",
                            dark: "#272A2E"
                        },
                        modal: {
                            bg: e.popupBg
                        }
                    })
                },
                vo = (0, h.A)((0, n.A)({}, Zr), {
                    shadows: (0, h.A)((0, n.A)({}, Zr.shadows), {
                        elevation1: "0px 3px 6px rgba(0, 0, 0, 0.04), 0px 1px 2px rgba(0, 0, 0, 0.04), inset 0px 0px 1px rgba(94, 102, 115, 0.8)",
                        elevation2: "0px 7px 14px rgba(0, 0, 0, 0.08), 0px 3px 6px rgba(0, 0, 0, 0.08), inset 0px 0px 1px rgba(94, 102, 115, 0.9)",
                        elevation3: "0px 16px 32px rgba(0, 0, 0, 0.16), 0px 8px 16px rgba(0, 0, 0, 0.16), inset 0px 0px 1px rgba(94, 102, 115, 0.9)"
                    })
                }),
                yo = ro({
                    palette: mo,
                    externalColors: xo,
                    layout: vo
                });
            ro({
                palette: bo,
                externalColors: xo,
                layout: vo
            });
            const Eo = yo;
            var Ao, wo = Object.freeze({
                    LIGHT: "light",
                    DARK: "dark"
                }),
                Bo = (Ao = {}, (0, Sr.A)(Ao, wo.LIGHT, ho), (0, Sr.A)(Ao, wo.DARK, Eo), Ao);
            const So = function(e) {
                var t = e.children,
                    r = e.mode,
                    n = void 0 === r ? void 0 : r,
                    o = e.themes,
                    i = void 0 === o ? {} : o,
                    s = e.dir,
                    c = e.enableSyncTheme;
                n && (void 0 === c ? !!n : c) && O(n);
                var u = (0, J.D)().theme,
                    d = function(e, t) {
                        return (0, a.A)({}, Bo, t)[e]
                    }(n || u, i);
                return l().createElement(Br, {
                    dir: s,
                    theme: d
                }, t)
            };
            const Co = function(e) {
                var t = e.themeProps,
                    r = e.withThemeProvider,
                    n = void 0 !== r && r,
                    o = e.withCacheProvider,
                    i = void 0 !== o && o,
                    a = e.children,
                    s = (0, dr.Y)(),
                    c = a;
                return i && (c = l().createElement(b._y, {
                    value: (0, fr.A)({
                        stylisPlugins: ["rtl" === (0, br.dir)(s) ? ur.Ay : void 0]
                    })
                }, c)), n && (c = l().createElement(So, (0, p.A)({
                    dir: (0, br.dir)(s)
                }, t), c)), l().createElement(gr, {
                    lng: s
                }, c)
            };
            var Fo = (0, s.createContext)({
                getCoachMark: Yt.es,
                showCoachMark: Yt.es,
                preCoachMark: Yt.es,
                nextCoachMark: Yt.es,
                closeCoachMark: Yt.es
            });
            const Do = function(e) {
                var t = e.children,
                    r = l().useState({}),
                    n = r[0],
                    o = r[1],
                    i = (0, s.useCallback)((function(e) {
                        o((function(t) {
                            var r = t.index,
                                n = void 0 === r ? 0 : r,
                                o = Math.max(n + e, 0);
                            return t.id ? (0, oe.__assign)((0, oe.__assign)({}, t), {
                                index: o
                            }) : t
                        }))
                    }), []),
                    a = {};
                return a.getCoachMark = (0, s.useCallback)((function(e) {
                    return n.id === e ? n.index : void 0
                }), [n]), a.showCoachMark = (0, s.useCallback)((function(e) {
                    return o({
                        id: e,
                        index: 0
                    })
                }), []), a.preCoachMark = (0, s.useCallback)((function() {
                    return i(-1)
                }), []), a.nextCoachMark = (0, s.useCallback)((function() {
                    return i(1)
                }), []), a.closeCoachMark = (0, s.useCallback)((function() {
                    return o({})
                }), []), l().createElement(Fo.Provider, {
                    value: a,
                    children: t
                })
            };
            r("Peay");
            var ko, Ro = r("sViW"),
                To = r("Pz56"),
                _o = r.n(To),
                Io = r("xj71"),
                Lo = function() {
                    var e = (0, Ro.A)(_o().mark((function e(t) {
                        var r, n, o, i, a, s = arguments;
                        return _o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = s.length > 1 && void 0 !== s[1] ? s[1] : 1e3, n = s.length > 2 && void 0 !== s[2] ? s[2] : 10, o = s.length > 3 && void 0 !== s[3] ? s[3] : function() {}, a = function() {
                                        var e = (0, Ro.A)(_o().mark((function e() {
                                            return _o().wrap((function(e) {
                                                for (;;) switch (e.prev = e.next) {
                                                    case 0:
                                                        if (0 !== n) {
                                                            e.next = 3;
                                                            break
                                                        }
                                                        return o(), e.abrupt("return", {});
                                                    case 3:
                                                        return e.abrupt("return", new Promise((function(e) {
                                                            setTimeout((0, Ro.A)(_o().mark((function i() {
                                                                return _o().wrap((function(i) {
                                                                    for (;;) switch (i.prev = i.next) {
                                                                        case 0:
                                                                            return i.t0 = e, i.next = 3, Lo(t, 2 * r, n - 1, o);
                                                                        case 3:
                                                                            return i.t1 = i.sent, i.abrupt("return", (0, i.t0)(i.t1));
                                                                        case 5:
                                                                        case "end":
                                                                            return i.stop()
                                                                    }
                                                                }), i)
                                                            }))), r)
                                                        })));
                                                    case 4:
                                                    case "end":
                                                        return e.stop()
                                                }
                                            }), e)
                                        })));
                                        return function() {
                                            return e.apply(this, arguments)
                                        }
                                    }(), e.prev = 3, e.next = 6, t();
                                case 6:
                                    if (null === (i = e.sent) || void 0 === i ? void 0 : i.success) {
                                        e.next = 9;
                                        break
                                    }
                                    throw new Error;
                                case 9:
                                    e.next = 14;
                                    break;
                                case 11:
                                    return e.prev = 11, e.t0 = e.catch(3), e.abrupt("return", a());
                                case 14:
                                    return e.abrupt("return", i);
                                case 15:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [3, 11]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                Oo = {
                    api: "/bapi/composite/v1/friendly/growth-activity/validation/userCountryCheck",
                    onApiError: function() {},
                    onCheckOver: function() {}
                },
                Ho = r("mXw3"),
                No = r("D4P9"),
                Po = r("yiIT"),
                zo = r("B0yh"),
                $o = r("5/aQ"),
                Go = r("xE8/"),
                Mo = r("Y1+p"),
                jo = {
                    JP: {
                        tasks: !0,
                        dailyLogin: !1,
                        points: !1,
                        faq: !1,
                        vouchers: !0
                    },
                    AE: {
                        tasks: !0,
                        dailyLogin: !0,
                        points: !0,
                        faq: !0,
                        vouchers: !0
                    }
                },
                Wo = (ko = {}, (0, Sr.A)(ko, Po.L3.RewardsHub, ["tasks", "dailyLogin", "points", "faq", "vouchers"]), (0, Sr.A)(ko, Po.L3.RewardsHubVouchers, ["vouchers"]), (0, Sr.A)(ko, Po.L3.RewardsHubTasks, ["tasks"]), (0, Sr.A)(ko, Po.L3.RewardsHubRewards, ["points"]), (0, Sr.A)(ko, Po.L3.RewardsHubPoints, ["points"]), (0, Sr.A)(ko, Po.L3.NewUserZone, ["tasks", "vouchers"]), ko),
                Uo = function() {
                    var e = (0, Ro.A)(_o().mark((function e() {
                        return _o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    e.next = 2;
                                    break;
                                case 2:
                                    return e.abrupt("return", (0, Io.bE)("/bapi/composite/v1/friendly/growth-activity/validation/userCountryCheck"));
                                case 3:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                qo = function(e) {
                    var t = (0, zo.Bd)().t,
                        r = (0, zo.Oc)(),
                        i = (0, u.wA)(),
                        l = (0, s.useState)(!1),
                        c = l[0],
                        d = l[1],
                        p = (0, s.useState)(!1),
                        g = p[0],
                        f = p[1],
                        b = function() {
                            var e = (0, Ro.A)(_o().mark((function e() {
                                var t;
                                return _o().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            return e.next = 2, Uo();
                                        case 2:
                                            return t = e.sent, e.abrupt("return", t);
                                        case 4:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                    return function(e) {
                        var t = (0, a.A)({}, Oo, e),
                            r = t.api,
                            n = t.onApiError,
                            o = t.onCheckOver,
                            i = (0, v.A)((0, s.useState)(!0), 2),
                            l = i[0],
                            c = i[1];
                        (0, s.useEffect)((function() {
                            var e = function() {
                                var e = (0, Ro.A)(_o().mark((function e() {
                                    var t, i, a, s;
                                    return _o().wrap((function(e) {
                                        for (;;) switch (e.prev = e.next) {
                                            case 0:
                                                return e.next = 3, Lo("string" === typeof r ? function() {
                                                    return (0, Io.bE)(r)
                                                } : r, 1e3, 10, n);
                                            case 3:
                                                a = e.sent, s = ["236401", "236402"].some((function(e) {
                                                    var t;
                                                    return e === (null === a || void 0 === a || null === (t = a.data) || void 0 === t ? void 0 : t.errorCode)
                                                })), c(!1), o({
                                                    isRestricted: s,
                                                    errorCode: null === a || void 0 === a || null === (t = a.data) || void 0 === t ? void 0 : t.errorCode,
                                                    country: null === a || void 0 === a || null === (i = a.data) || void 0 === i ? void 0 : i.country
                                                });
                                            case 7:
                                            case "end":
                                                return e.stop()
                                        }
                                    }), e)
                                })));
                                return function() {
                                    return e.apply(this, arguments)
                                }
                            }();
                            e()
                        }), [])
                    }({
                        api: b,
                        onCheckOver: function(e) {
                            var t = e.isRestricted,
                                n = e.errorCode,
                                o = e.country;
                            if (t) {
                                var a = t;
                                if (null === jo || void 0 === jo ? void 0 : jo[o]) {
                                    i.settings.updateState({
                                        allowedModules: jo[o]
                                    });
                                    var s = Object.entries(Wo).filter((function(e) {
                                        var t = (0, v.A)(e, 2);
                                        t[0];
                                        return t[1].some((function(e) {
                                            var t;
                                            return null === (t = jo[o]) || void 0 === t ? void 0 : t[e]
                                        }))
                                    })).map((function(e) {
                                        return (0, v.A)(e, 1)[0]
                                    }));
                                    s.includes(r) && (a = !1)
                                }
                                d(a)
                            } else n && f(!0)
                        }
                    }), (0, o.jsxs)(o.Fragment, {
                        children: [g && (0, o.jsx)(Ho.A, {
                            variant: "error",
                            closable: !0,
                            onClose: function() {
                                f(!1)
                            },
                            message: t("CountryRestrictionModal-checkIpFailed", "Fail to check IP address, please refresh the page.")
                        }), (0, o.jsxs)(Mo.J, (0, h.A)((0, n.A)({
                            enablePortal: !0,
                            visible: c
                        }, e), {
                            className: "CountryRestrictionModal",
                            header: (0, o.jsx)(Jt.Ay, {}),
                            children: [(0, o.jsx)(Jt.Ay, {
                                className: "CountryRestrictionModal-logo",
                                children: (0, o.jsx)($o.v, {})
                            }), (0, o.jsx)(Jt.Ay, {
                                className: "CountryRestrictionModal-title",
                                children: t("CountryRestrictionModal-title", "Service Notice")
                            }), (0, o.jsx)(Jt.Ay, {
                                className: "CountryRestrictionModal-subTitle",
                                children: t("CountryRestrictionModal-desc", "Dear user, as per our Terms of Use and compliance with local regulations, these features are not available in your region.")
                            }), (0, o.jsx)(Go.qO, {
                                to: "/",
                                hybrid: "bnc://app.binance.com/main/main",
                                className: "ul-width-full ul-decoration-none",
                                children: (0, o.jsx)(No.A, {
                                    variant: "primary",
                                    as: "div",
                                    className: "ul-width-full",
                                    children: t("CountryRestrictionModal-Cta", "Back to Homepage")
                                })
                            })]
                        }))]
                    })
                },
                Qo = r("XLaE"),
                Vo = r("XxiJ"),
                Yo = function(e) {
                    var t = e.children;
                    return (0, o.jsx)(Qo.tH, {
                        onError: function(e) {
                            var t;
                            D.vF.log("CSR ErrorBoundary", {
                                path: null === window || void 0 === window || null === (t = window.location) || void 0 === t ? void 0 : t.pathname,
                                error: e,
                                errMsg: null === e || void 0 === e ? void 0 : e.message
                            }), D.vF.log(e)
                        },
                        fallback: function() {
                            return (0, o.jsx)(Jt.Ay, {
                                className: "ul-fullScreen ul-relative",
                                children: (0, o.jsxs)(Jt.Ay, {
                                    className: "GlobalErrorBoundary",
                                    style: {
                                        fontSize: "var(--space-5xl)"
                                    },
                                    children: [(0, o.jsx)(Jt.Ay, {
                                        className: "GlobalErrorBoundary-icon",
                                        children: (0, o.jsx)(Vo.A, {})
                                    }), (0, o.jsx)(Jt.Ay, {
                                        className: "GlobalErrorBoundary-title",
                                        children: "Something went wrong. "
                                    }), (0, o.jsx)(No.A, {
                                        variant: "primary",
                                        onClick: function() {
                                            window.location.reload()
                                        },
                                        children: "Refresh"
                                    })]
                                })
                            })
                        },
                        children: t
                    })
                },
                Xo = r("1T48");
            const Ko = (0, r("VyXn").Sz)();
            r("H7mm");
            const Zo = {
                light: {},
                dark: {}
            };
            var Jo = r("WDth"),
                ei = r("+d3A"),
                ti = r("gKJf"),
                ri = r("fEgu"),
                ni = r("Zu9h");
            class oi extends ni.k {
                constructor(e) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || ei.U, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || function(e) {
                        const t = "function" === typeof e.initialData ? e.initialData() : e.initialData,
                            r = "undefined" !== typeof t,
                            n = r ? "function" === typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                        return {
                            data: t,
                            dataUpdateCount: 0,
                            dataUpdatedAt: r ? null != n ? n : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: r ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(e, t) {
                    const r = (0, Jo.pl)(this.state.data, e, this.options);
                    return this.dispatch({
                        data: r,
                        type: "success",
                        dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                        manual: null == t ? void 0 : t.manual
                    }), r
                }
                setState(e, t) {
                    this.dispatch({
                        type: "setState",
                        state: e,
                        setStateOptions: t
                    })
                }
                cancel(e) {
                    var t;
                    const r = this.promise;
                    return null == (t = this.retryer) || t.cancel(e), r ? r.then(Jo.lQ).catch(Jo.lQ) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some((e => !1 !== e.options.enabled))
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some((e => e.getCurrentResult().isStale))
                }
                isStaleByTime(e = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !(0, Jo.j3)(this.state.dataUpdatedAt, e)
                }
                onFocus() {
                    var e;
                    const t = this.observers.find((e => e.shouldFetchOnWindowFocus()));
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                onOnline() {
                    var e;
                    const t = this.observers.find((e => e.shouldFetchOnReconnect()));
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                addObserver(e) {
                    -1 === this.observers.indexOf(e) && (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    -1 !== this.observers.indexOf(e) && (this.observers = this.observers.filter((t => t !== e)), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: e
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(e, t) {
                    var r, n;
                    if ("idle" !== this.state.fetchStatus)
                        if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) {
                        var o;
                        return null == (o = this.retryer) || o.continueRetry(), this.promise
                    }
                    if (e && this.setOptions(e), !this.options.queryFn) {
                        const e = this.observers.find((e => e.options.queryFn));
                        e && this.setOptions(e.options)
                    }
                    Array.isArray(this.options.queryKey);
                    const i = (0, Jo.jY)(),
                        a = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        s = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (i) return this.abortSignalConsumed = !0, i.signal
                                }
                            })
                        };
                    s(a);
                    const l = {
                        fetchOptions: t,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(a)) : Promise.reject("Missing queryFn")
                    };
                    var c;
                    (s(l), null == (r = this.options.behavior) || r.onFetch(l), this.revertState = this.state, "idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (n = l.fetchOptions) ? void 0 : n.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (c = l.fetchOptions) ? void 0 : c.meta
                    });
                    const u = e => {
                        var t, r;
                        ((0, ri.wm)(e) && e.silent || this.dispatch({
                            type: "error",
                            error: e
                        }), (0, ri.wm)(e)) || (null == (t = (r = this.cache.config).onError) || t.call(r, e, this));
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = (0, ri.II)({
                        fn: l.fetchFn,
                        abort: null == i ? void 0 : i.abort.bind(i),
                        onSuccess: e => {
                            var t, r;
                            "undefined" !== typeof e ? (this.setData(e), null == (t = (r = this.cache.config).onSuccess) || t.call(r, e, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1) : u(new Error("undefined"))
                        },
                        onError: u,
                        onFail: (e, t) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: e,
                                error: t
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: l.options.retry,
                        retryDelay: l.options.retryDelay,
                        networkMode: l.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(e) {
                    this.state = (t => {
                        var r, n;
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    fetchFailureCount: e.failureCount,
                                    fetchFailureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...t,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...t,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (r = e.meta) ? r : null,
                                    fetchStatus: (0, ri.v_)(this.options.networkMode) ? "fetching" : "paused",
                                    ...!t.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (n = e.dataUpdatedAt) ? n : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!e.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                const o = e.error;
                                return (0, ri.wm)(o) && o.revert && this.revertState ? { ...this.revertState
                                } : { ...t,
                                    error: o,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    fetchFailureReason: o,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...t,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), ti.j.batch((() => {
                        this.observers.forEach((t => {
                            t.onQueryUpdate(e)
                        })), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: e
                        })
                    }))
                }
            }
            var ii = r("3lyO");
            class ai extends ii.Q {
                constructor(e) {
                    super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
                }
                build(e, t, r) {
                    var n;
                    const o = t.queryKey,
                        i = null != (n = t.queryHash) ? n : (0, Jo.F$)(o, t);
                    let a = this.get(i);
                    return a || (a = new oi({
                        cache: this,
                        logger: e.getLogger(),
                        queryKey: o,
                        queryHash: i,
                        options: e.defaultQueryOptions(t),
                        state: r,
                        defaultOptions: e.getQueryDefaults(o)
                    }), this.add(a)), a
                }
                add(e) {
                    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                        type: "added",
                        query: e
                    }))
                }
                remove(e) {
                    const t = this.queriesMap[e.queryHash];
                    t && (e.destroy(), this.queries = this.queries.filter((t => t !== e)), t === e && delete this.queriesMap[e.queryHash], this.notify({
                        type: "removed",
                        query: e
                    }))
                }
                clear() {
                    ti.j.batch((() => {
                        this.queries.forEach((e => {
                            this.remove(e)
                        }))
                    }))
                }
                get(e) {
                    return this.queriesMap[e]
                }
                getAll() {
                    return this.queries
                }
                find(e, t) {
                    const [r] = (0, Jo.b_)(e, t);
                    return "undefined" === typeof r.exact && (r.exact = !0), this.queries.find((e => (0, Jo.MK)(r, e)))
                }
                findAll(e, t) {
                    const [r] = (0, Jo.b_)(e, t);
                    return Object.keys(r).length > 0 ? this.queries.filter((e => (0, Jo.MK)(r, e))) : this.queries
                }
                notify(e) {
                    ti.j.batch((() => {
                        this.listeners.forEach((t => {
                            t(e)
                        }))
                    }))
                }
                onFocus() {
                    ti.j.batch((() => {
                        this.queries.forEach((e => {
                            e.onFocus()
                        }))
                    }))
                }
                onOnline() {
                    ti.j.batch((() => {
                        this.queries.forEach((e => {
                            e.onOnline()
                        }))
                    }))
                }
            }
            var si = r("G14Y");
            class li extends ii.Q {
                constructor(e) {
                    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
                }
                build(e, t, r) {
                    const n = new si.s({
                        mutationCache: this,
                        logger: e.getLogger(),
                        mutationId: ++this.mutationId,
                        options: e.defaultMutationOptions(t),
                        state: r,
                        defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
                    });
                    return this.add(n), n
                }
                add(e) {
                    this.mutations.push(e), this.notify({
                        type: "added",
                        mutation: e
                    })
                }
                remove(e) {
                    this.mutations = this.mutations.filter((t => t !== e)), this.notify({
                        type: "removed",
                        mutation: e
                    })
                }
                clear() {
                    ti.j.batch((() => {
                        this.mutations.forEach((e => {
                            this.remove(e)
                        }))
                    }))
                }
                getAll() {
                    return this.mutations
                }
                find(e) {
                    return "undefined" === typeof e.exact && (e.exact = !0), this.mutations.find((t => (0, Jo.nJ)(e, t)))
                }
                findAll(e) {
                    return this.mutations.filter((t => (0, Jo.nJ)(e, t)))
                }
                notify(e) {
                    ti.j.batch((() => {
                        this.listeners.forEach((t => {
                            t(e)
                        }))
                    }))
                }
                resumePausedMutations() {
                    const e = this.mutations.filter((e => e.state.isPaused));
                    return ti.j.batch((() => e.reduce(((e, t) => e.then((() => t.continue().catch(Jo.lQ)))), Promise.resolve())))
                }
            }
            var ci = r("vUEn"),
                ui = r("VhRz"),
                di = r("TVlR");
            var pi = new class {
                    constructor(e = {}) {
                        this.queryCache = e.queryCache || new ai, this.mutationCache = e.mutationCache || new li, this.logger = e.logger || ei.U, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = []
                    }
                    mount() {
                        this.unsubscribeFocus = ci.m.subscribe((() => {
                            ci.m.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                        })), this.unsubscribeOnline = ui.t.subscribe((() => {
                            ui.t.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                        }))
                    }
                    unmount() {
                        var e, t;
                        null == (e = this.unsubscribeFocus) || e.call(this), null == (t = this.unsubscribeOnline) || t.call(this)
                    }
                    isFetching(e, t) {
                        const [r] = (0, Jo.b_)(e, t);
                        return r.fetchStatus = "fetching", this.queryCache.findAll(r).length
                    }
                    isMutating(e) {
                        return this.mutationCache.findAll({ ...e,
                            fetching: !0
                        }).length
                    }
                    getQueryData(e, t) {
                        var r;
                        return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state.data
                    }
                    ensureQueryData(e, t, r) {
                        const n = (0, Jo.vh)(e, t, r),
                            o = this.getQueryData(n.queryKey);
                        return o ? Promise.resolve(o) : this.fetchQuery(n)
                    }
                    getQueriesData(e) {
                        return this.getQueryCache().findAll(e).map((({
                            queryKey: e,
                            state: t
                        }) => [e, t.data]))
                    }
                    setQueryData(e, t, r) {
                        const n = this.queryCache.find(e),
                            o = null == n ? void 0 : n.state.data,
                            i = (0, Jo.Zw)(t, o);
                        if ("undefined" === typeof i) return;
                        const a = (0, Jo.vh)(e),
                            s = this.defaultQueryOptions(a);
                        return this.queryCache.build(this, s).setData(i, { ...r,
                            manual: !0
                        })
                    }
                    setQueriesData(e, t, r) {
                        return ti.j.batch((() => this.getQueryCache().findAll(e).map((({
                            queryKey: e
                        }) => [e, this.setQueryData(e, t, r)]))))
                    }
                    getQueryState(e, t) {
                        var r;
                        return null == (r = this.queryCache.find(e, t)) ? void 0 : r.state
                    }
                    removeQueries(e, t) {
                        const [r] = (0, Jo.b_)(e, t), n = this.queryCache;
                        ti.j.batch((() => {
                            n.findAll(r).forEach((e => {
                                n.remove(e)
                            }))
                        }))
                    }
                    resetQueries(e, t, r) {
                        const [n, o] = (0, Jo.b_)(e, t, r), i = this.queryCache, a = {
                            type: "active",
                            ...n
                        };
                        return ti.j.batch((() => (i.findAll(n).forEach((e => {
                            e.reset()
                        })), this.refetchQueries(a, o))))
                    }
                    cancelQueries(e, t, r) {
                        const [n, o = {}] = (0, Jo.b_)(e, t, r);
                        "undefined" === typeof o.revert && (o.revert = !0);
                        const i = ti.j.batch((() => this.queryCache.findAll(n).map((e => e.cancel(o)))));
                        return Promise.all(i).then(Jo.lQ).catch(Jo.lQ)
                    }
                    invalidateQueries(e, t, r) {
                        const [n, o] = (0, Jo.b_)(e, t, r);
                        return ti.j.batch((() => {
                            var e, t;
                            if (this.queryCache.findAll(n).forEach((e => {
                                    e.invalidate()
                                })), "none" === n.refetchType) return Promise.resolve();
                            const r = { ...n,
                                type: null != (e = null != (t = n.refetchType) ? t : n.type) ? e : "active"
                            };
                            return this.refetchQueries(r, o)
                        }))
                    }
                    refetchQueries(e, t, r) {
                        const [n, o] = (0, Jo.b_)(e, t, r), i = ti.j.batch((() => this.queryCache.findAll(n).filter((e => !e.isDisabled())).map((e => {
                            var t;
                            return e.fetch(void 0, { ...o,
                                cancelRefetch: null == (t = null == o ? void 0 : o.cancelRefetch) || t,
                                meta: {
                                    refetchPage: n.refetchPage
                                }
                            })
                        }))));
                        let a = Promise.all(i).then(Jo.lQ);
                        return null != o && o.throwOnError || (a = a.catch(Jo.lQ)), a
                    }
                    fetchQuery(e, t, r) {
                        const n = (0, Jo.vh)(e, t, r),
                            o = this.defaultQueryOptions(n);
                        "undefined" === typeof o.retry && (o.retry = !1);
                        const i = this.queryCache.build(this, o);
                        return i.isStaleByTime(o.staleTime) ? i.fetch(o) : Promise.resolve(i.state.data)
                    }
                    prefetchQuery(e, t, r) {
                        return this.fetchQuery(e, t, r).then(Jo.lQ).catch(Jo.lQ)
                    }
                    fetchInfiniteQuery(e, t, r) {
                        const n = (0, Jo.vh)(e, t, r);
                        return n.behavior = (0, di.PL)(), this.fetchQuery(n)
                    }
                    prefetchInfiniteQuery(e, t, r) {
                        return this.fetchInfiniteQuery(e, t, r).then(Jo.lQ).catch(Jo.lQ)
                    }
                    resumePausedMutations() {
                        return this.mutationCache.resumePausedMutations()
                    }
                    getQueryCache() {
                        return this.queryCache
                    }
                    getMutationCache() {
                        return this.mutationCache
                    }
                    getLogger() {
                        return this.logger
                    }
                    getDefaultOptions() {
                        return this.defaultOptions
                    }
                    setDefaultOptions(e) {
                        this.defaultOptions = e
                    }
                    setQueryDefaults(e, t) {
                        const r = this.queryDefaults.find((t => (0, Jo.Od)(e) === (0, Jo.Od)(t.queryKey)));
                        r ? r.defaultOptions = t : this.queryDefaults.push({
                            queryKey: e,
                            defaultOptions: t
                        })
                    }
                    getQueryDefaults(e) {
                        if (!e) return;
                        const t = this.queryDefaults.find((t => (0, Jo.Cp)(e, t.queryKey)));
                        return null == t ? void 0 : t.defaultOptions
                    }
                    setMutationDefaults(e, t) {
                        const r = this.mutationDefaults.find((t => (0, Jo.Od)(e) === (0, Jo.Od)(t.mutationKey)));
                        r ? r.defaultOptions = t : this.mutationDefaults.push({
                            mutationKey: e,
                            defaultOptions: t
                        })
                    }
                    getMutationDefaults(e) {
                        if (!e) return;
                        const t = this.mutationDefaults.find((t => (0, Jo.Cp)(e, t.mutationKey)));
                        return null == t ? void 0 : t.defaultOptions
                    }
                    defaultQueryOptions(e) {
                        if (null != e && e._defaulted) return e;
                        const t = { ...this.defaultOptions.queries,
                            ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
                            ...e,
                            _defaulted: !0
                        };
                        return !t.queryHash && t.queryKey && (t.queryHash = (0, Jo.F$)(t.queryKey, t)), "undefined" === typeof t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), "undefined" === typeof t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
                    }
                    defaultMutationOptions(e) {
                        return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations,
                            ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                            ...e,
                            _defaulted: !0
                        }
                    }
                    clear() {
                        this.queryCache.clear(), this.mutationCache.clear()
                    }
                }({
                    defaultOptions: {
                        queries: {
                            enabled: !0,
                            refetchOnWindowFocus: !1
                        }
                    }
                }),
                hi = function() {
                    var e = (0, d.K7)(),
                        t = (0, u.d4)(Xo.i0),
                        r = t.pageName,
                        n = t.metaData,
                        i = t.linkData,
                        s = (0, a.A)({}, {
                            seoLinks: {
                                reqPath: e.pathname,
                                canonicalBase: Po.dM
                            }
                        }, n);
                    return (0, o.jsxs)(o.Fragment, {
                        children: [(0, o.jsx)(qo, {}), (0, o.jsx)(K, {
                            metaData: s,
                            linkData: i,
                            staticUrl: Po.K5,
                            withHeader: !0,
                            withFooter: !0,
                            theme: r === Po.L3.NewUserZone ? "dark" : void 0,
                            children: (0, o.jsx)(d.Tp, {})
                        })]
                    })
                },
                gi = function() {
                    return (0, o.jsx)(i.Ht, {
                        client: pi,
                        children: (0, o.jsx)(lr, {
                            themeColors: Zo,
                            children: (0, o.jsx)(Yo, {
                                children: (0, o.jsx)(Do, {
                                    children: (0, o.jsx)(cr.A, {
                                        params: {
                                            env: Po.lF
                                        },
                                        options: {
                                            authHeader: Po.Ap
                                        },
                                        children: (0, o.jsx)(hi, {})
                                    })
                                })
                            })
                        })
                    })
                };

            function fi(e) {
                return (0, o.jsx)(Co, {
                    withCacheProvider: !0,
                    withThemeProvider: !0,
                    children: (0, o.jsx)(c.ab, {
                        store: Ko,
                        children: (0, o.jsx)(gi, (0, n.A)({}, e))
                    })
                })
            }
        },
        "I6V/": (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("Y4uf");
            const s = function(e) {
                return i().createElement(a.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M2.999 11.999l7.071-7.072 1.768 1.768-4.055 4.055H21v2.5H7.785l4.053 4.053-1.768 1.768L3 12v-.001z",
                    fill: "currentColor"
                }))
            }
        },
        X4b0: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => s
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("Y4uf");
            const s = function(e) {
                return i().createElement(a.A, (0, n.__assign)({
                    viewBox: "0 0 24 24",
                    fill: "none"
                }, e), i().createElement("path", {
                    d: "M6.697 4.575L4.575 6.697 9.88 12l-5.304 5.303 2.122 2.122L12 14.12l5.303 5.304 2.122-2.122L14.12 12l5.304-5.303-2.122-2.122L12 9.88 6.697 4.575z",
                    fill: "currentColor"
                }))
            }
        },
        cZx9: (e, t, r) => {
            "use strict";
            r.d(t, {
                A: () => x
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("O94r"),
                s = r.n(a),
                l = r("QFE7"),
                c = r("9xbI");
            const u = function(e) {
                var t = e.direction,
                    r = void 0 === t ? "left" : t,
                    a = e.children,
                    s = e.className,
                    l = e.onClose,
                    u = (e.visible, e.draggable, (0, n.__rest)(e, ["direction", "children", "className", "onClose", "visible", "draggable"])),
                    d = (0, o.useState)(!1),
                    p = d[0],
                    h = d[1],
                    g = (0, o.useState)({
                        x: 0,
                        y: 0
                    }),
                    f = g[0],
                    b = g[1],
                    m = (0, o.useState)(0),
                    x = m[0],
                    v = m[1],
                    y = (0, o.useRef)(null),
                    E = (0, o.useMemo)((function() {
                        var e = "top" === r || "bottom" === r;
                        return {
                            isVertical: e,
                            getTransform: function(t) {
                                var r = "".concat(t, "px");
                                return "translate3d(".concat(e ? "0, ".concat(r) : "".concat(r, ", 0"), ", 0)")
                            },
                            getOffset: function(t) {
                                var n = e ? t.y - f.y : t.x - f.x;
                                switch (r) {
                                    case "top":
                                    case "left":
                                        return Math.min(n, 0);
                                    default:
                                        return Math.max(n, 0)
                                }
                            }
                        }
                    }), [r, f]),
                    A = E.isVertical,
                    w = E.getTransform,
                    B = E.getOffset,
                    S = (0, o.useCallback)((function(e, t) {
                        return Math.abs(e) / t
                    }), []),
                    C = (0, o.useCallback)((function() {
                        return {
                            top: "translate3d(0, -100%, 0)",
                            right: "translate3d(100%, 0, 0)",
                            bottom: "translate3d(0, 100%, 0)",
                            left: "translate3d(-100%, 0, 0)"
                        }[r]
                    }), [r]),
                    F = (0, o.useCallback)((function(e) {
                        if (!p) {
                            var t = e.touches[0];
                            h(!0), b({
                                x: t.pageX,
                                y: t.pageY
                            }), v(e.timeStamp), y.current && (y.current.style.transition = "none")
                        }
                    }), [p]),
                    D = (0, o.useCallback)((function(e) {
                        if (p && y.current) {
                            var t = e.touches[0],
                                r = {
                                    x: t.pageX,
                                    y: t.pageY
                                },
                                n = B(r);
                            y.current.style.transform = w(n)
                        }
                    }), [p, B, w]),
                    k = (0, o.useCallback)((function(e) {
                        if (p && y.current) {
                            var t = e.changedTouches[0],
                                r = {
                                    x: t.pageX,
                                    y: t.pageY
                                },
                                n = y.current.getBoundingClientRect(),
                                o = e.timeStamp - x;
                            y.current.style.transition = "";
                            var i = Math.abs(B(r)),
                                a = S(i, o);
                            i > (A ? n.height / 2 : n.width / 2) || a > 1.5 ? (y.current.style.transform = C(), null === l || void 0 === l || l()) : y.current.style.transform = "", h(!1)
                        }
                    }), [p, x, B, S, A, C, l]);
                return i().createElement(c.A, (0, n.__assign)({
                    ref: y,
                    className: s,
                    onTouchStart: F,
                    onTouchMove: D,
                    onTouchEnd: k
                }, u), a)
            };
            var d = r("mk7A"),
                p = r("eeEA"),
                h = r("fvKX"),
                g = function(e) {
                    var t, r = e.direction,
                        o = e.className,
                        a = (0, n.__rest)(e, ["direction", "className"]),
                        l = (0, h.r)().prefixCls,
                        c = "".concat(l, "-drawer-handle"),
                        u = "".concat(c, "-icon"),
                        d = s()(c, ((t = {})["data-dir-".concat(r)] = !!r, t), o);
                    return i().createElement(p.Ay, (0, n.__assign)({}, {
                        role: "button",
                        tabIndex: 0,
                        "aria-label": "drawer handle"
                    }, a, {
                        className: d
                    }), i().createElement(p.Ay, {
                        className: u,
                        "aria-hidden": "true"
                    }))
                },
                f = function(e) {
                    var t = e.direction,
                        r = void 0 === t ? "left" : t,
                        o = e.children,
                        a = e.onClose,
                        s = e.maskClz,
                        l = e.wrapClz,
                        c = (0, n.__rest)(e, ["direction", "children", "onClose", "maskClz", "wrapClz"]);
                    return i().createElement(d.A, (0, n.__assign)({}, c, {
                        onClose: a,
                        className: s
                    }), i().createElement(u, {
                        direction: r,
                        className: l,
                        onClose: a
                    }, i().createElement(g, {
                        direction: r
                    }), o))
                };
            f.displayName = "Drawer";
            const b = f;
            var m = function(e) {
                var t, r = e.direction,
                    a = void 0 === r ? "left" : r,
                    c = e.className,
                    u = e.children,
                    g = e.size,
                    f = void 0 === g ? "auto" : g,
                    m = e.once,
                    x = e.onVisibleChange,
                    v = e.draggable,
                    y = e.onClose,
                    E = (0, n.__rest)(e, ["direction", "className", "children", "size", "once", "onVisibleChange", "draggable", "onClose"]),
                    A = (0, h.r)().prefixCls,
                    w = "".concat(A, "-drawer"),
                    B = s()("".concat(w, "-wrap"), ((t = {})["data-size-".concat(f)] = "auto" !== f, t["data-dir-".concat(a)] = !!a, t["data-draggable"] = !!v, t)),
                    S = s()(w, c),
                    C = (0, l.d)({
                        fn: x,
                        time: 50
                    }).debounceFn,
                    F = (0, o.useCallback)((function() {
                        null === y || void 0 === y || y(), C(!1)
                    }), [y, C]),
                    D = (0, o.useCallback)((function() {
                        m && F()
                    }), [m, F]),
                    k = {
                        "aria-modal": !0,
                        role: "dialog",
                        "aria-label": e.title || "drawer"
                    };
                return v ? i().createElement(b, (0, n.__assign)({}, k, {
                    onClose: F,
                    maskClz: S,
                    wrapClz: B
                }, e)) : i().createElement(d.A, (0, n.__assign)({}, E, {
                    onClose: F,
                    className: S
                }), i().createElement(p.Ay, (0, n.__assign)({}, k, {
                    className: B,
                    children: u,
                    onClick: D
                })))
            };
            m.displayName = "Drawer";
            const x = m
        },
        k5JY: (e, t, r) => {
            "use strict";
            r.d(t, {
                Ay: () => b
            });
            var n = r("wIZF"),
                o = r("DTvD"),
                i = r.n(o),
                a = r("O94r"),
                s = r.n(a),
                l = r("eeEA"),
                c = r("mk7A"),
                u = r("fvKX"),
                d = r("I6V/"),
                p = r("X4b0"),
                h = r("hyZw"),
                g = r("cZx9"),
                f = function(e) {
                    var t, r = e.children,
                        o = e.className,
                        a = e.responsive,
                        d = e.direction,
                        p = void 0 === d ? "bottom" : d,
                        h = e.modalSize,
                        f = void 0 === h ? "small" : h,
                        b = (0, n.__rest)(e, ["children", "className", "responsive", "direction", "modalSize"]),
                        m = (0, u.r)(),
                        x = m.prefixCls,
                        v = m.isMobile,
                        y = "".concat(x, "-modal"),
                        E = s()(y, o),
                        A = s()("".concat(y, "-wrap"), ((t = {})["data-size-".concat(f)] = !!f, t));
                    if (a && v) return i().createElement(g.A, (0, n.__assign)({}, b, {
                        direction: p,
                        className: o,
                        children: r
                    }));
                    var w = {
                        role: "dialog",
                        tabIndex: 0,
                        "aria-modal": !0,
                        "aria-label": b["aria-label"] || "modal"
                    };
                    return i().createElement(c.A, (0, n.__assign)({}, b, {
                        className: E
                    }), i().createElement(l.Ay, (0, n.__assign)({}, w, {
                        className: A,
                        children: r
                    })))
                };
            f.Header = function(e) {
                var t, r, o = e.showPre,
                    a = e.prev,
                    c = e.onPreClick,
                    g = void 0 === c ? h.es : c,
                    f = e.showNext,
                    b = e.next,
                    m = e.onNextClick,
                    x = void 0 === m ? h.es : m,
                    v = (0, n.__rest)(e, ["showPre", "prev", "onPreClick", "showNext", "next", "onNextClick"]),
                    y = (0, u.r)().prefixCls,
                    E = "".concat(y, "-modal-header"),
                    A = s()(E, ((t = {})["".concat(E, "-pre")] = !!o, t["".concat(E, "-pre-hidden")] = "hidden" === o, t), e.className);
                return o && void 0 === a && (a = i().createElement(d.A, {
                    name: "ArrowLeft1C",
                    color: "PrimaryText"
                })), i().createElement(l.Ay, (0, n.__assign)({}, v, {
                    className: A
                }), o ? i().createElement(l.Ay, {
                    className: s()("".concat(E, "-prev")),
                    onClick: g,
                    children: a,
                    role: "button",
                    "aria-label": "Previous"
                }) : null, i().createElement(l.Ay, {
                    className: "".concat(E, "-main"),
                    children: e.children
                }), f ? i().createElement(l.Ay, {
                    className: s()("".concat(E, "-next"), (r = {}, r["".concat(E, "-next-hidden")] = "hidden" === f, r)),
                    onClick: x,
                    children: b || i().createElement(p.A, {
                        name: "Close1C",
                        color: "PrimaryText"
                    }),
                    role: "button",
                    "aria-label": b ? "Next" : "Close"
                }) : null)
            }, f.Content = function(e) {
                var t = (0, u.r)().prefixCls,
                    r = "".concat(t, "-modal-content"),
                    o = s()(r, e.className);
                return i().createElement(l.Ay, (0, n.__assign)({}, e, {
                    className: o
                }))
            }, f.Footer = function(e) {
                var t, r = e.layout,
                    o = (0, n.__rest)(e, ["layout"]),
                    a = (0, u.r)().prefixCls,
                    c = "".concat(a, "-modal-footer"),
                    d = s()(c, ((t = {})["".concat(c, "-").concat(r)] = !!r, t), o.className);
                return i().createElement(l.Ay, (0, n.__assign)({}, o, {
                    className: d
                }))
            };
            const b = f
        },
        fALc: (e, t) => {
            var r;

            function n(e, t) {
                var r = [],
                    n = 0;

                function o(e) {
                    return r.push(e), t
                }

                function i() {
                    return r[n++]
                }
                return {
                    tokenize: function(t) {
                        return t.replace(e, o)
                    },
                    detokenize: function(e) {
                        return e.replace(new RegExp("(" + t + ")", "g"), i)
                    }
                }
            }
            r = new function() {
                var e = "(?:[0-9]*\\.[0-9]+|[0-9]+)",
                    t = "\\/\\*\\!?\\s*@noflip\\s*\\*\\/",
                    r = "(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f])",
                    o = "(?:[_a-z0-9-]|[^\\u0020-\\u007e]|" + r + ")",
                    i = e + "(?:\\s*(?:em|ex|px|cm|mm|in|pt|pc|deg|rad|grad|ms|s|hz|khz|%)|-?(?:[_a-z]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))(?:[_a-z0-9-]|[^\\u0020-\\u007e]|(?:(?:(?:\\\\[0-9a-f]{1,6})(?:\\r\\n|\\s)?)|\\\\[^\\r\\n\\f0-9a-f]))*)?",
                    a = "((?:-?" + i + ")|(?:inherit|auto))",
                    s = "(#?" + o + "+|(?:rgba?|hsla?)\\([ \\d.,%-]+\\))",
                    l = "(?:[!#$%&*-~]|[^\\u0020-\\u007e]|" + r + ")*?",
                    c = "(?!(" + o + "|\\r?\\n|\\s|#|\\:|\\.|\\,|\\+|>|\\(|\\)|\\[|\\]|=|\\*=|~=|\\^=|'[^']*'])*?{)",
                    u = "(?!" + l + "['\"]?\\s*\\))",
                    d = "(?=" + l + "['\"]?\\s*\\))",
                    p = "(\\s*(?:!important\\s*)?[;}])",
                    h = new RegExp("`TMP`", "g"),
                    g = new RegExp("\\/\\*[^*]*\\*+([^\\/*][^*]*\\*+)*\\/", "gi"),
                    f = new RegExp("(" + t + c + "[^;}]+;?)", "gi"),
                    b = new RegExp("(" + t + "[^\\}]*?})", "gi"),
                    m = new RegExp("(direction\\s*:\\s*)ltr", "gi"),
                    x = new RegExp("(direction\\s*:\\s*)rtl", "gi"),
                    v = new RegExp("(^|[^a-zA-Z])(left)(?![a-zA-Z])" + u + c, "gi"),
                    y = new RegExp("(^|[^a-zA-Z])(right)(?![a-zA-Z])" + u + c, "gi"),
                    E = new RegExp("(^|[^a-zA-Z])(left)" + d, "gi"),
                    A = new RegExp("(^|[^a-zA-Z])(right)" + d, "gi"),
                    w = new RegExp("(^|[^a-zA-Z])(ltr)" + d, "gi"),
                    B = new RegExp("(^|[^a-zA-Z])(rtl)" + d, "gi"),
                    S = new RegExp("(^|[^a-zA-Z])([ns]?)e-resize", "gi"),
                    C = new RegExp("(^|[^a-zA-Z])([ns]?)w-resize", "gi"),
                    F = new RegExp("((?:margin|padding|border-width)\\s*:\\s*)" + a + "(\\s+)" + a + "(\\s+)" + a + "(\\s+)" + a + p, "gi"),
                    D = new RegExp("((?:-color|border-style)\\s*:\\s*)" + s + "(\\s+)" + s + "(\\s+)" + s + "(\\s+)" + s + p, "gi"),
                    k = new RegExp("(background(?:-position)?\\s*:\\s*(?:[^:;}\\s]+\\s+)*?)(" + i + ")", "gi"),
                    R = new RegExp("(background-position-x\\s*:\\s*)(-?" + e + "%)", "gi"),
                    T = new RegExp("(border-radius\\s*:\\s*)" + a + "(?:(?:\\s+" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?(?:(?:(?:\\s*\\/\\s*)" + a + ")(?:\\s+" + a + ")?(?:\\s+" + a + ")?(?:\\s+" + a + ")?)?" + p, "gi"),
                    _ = new RegExp("(box-shadow\\s*:\\s*(?:inset\\s*)?)" + a, "gi"),
                    I = new RegExp("(text-shadow\\s*:\\s*)" + a + "(\\s*)" + s, "gi"),
                    L = new RegExp("(text-shadow\\s*:\\s*)" + s + "(\\s*)" + a, "gi"),
                    O = new RegExp("(text-shadow\\s*:\\s*)" + a, "gi"),
                    H = new RegExp("(transform\\s*:[^;}]*)(translateX\\s*\\(\\s*)" + a + "(\\s*\\))", "gi"),
                    N = new RegExp("(transform\\s*:[^;}]*)(translate\\s*\\(\\s*)" + a + "((?:\\s*,\\s*" + a + "){0,2}\\s*\\))", "gi");

                function P(e, t, r) {
                    var n, o;
                    return "%" === r.slice(-1) && (-1 !== (n = r.indexOf(".")) ? (o = r.length - n - 2, r = (r = 100 - parseFloat(r)).toFixed(o) + "%") : r = 100 - parseFloat(r) + "%"), t + r
                }

                function z(e) {
                    switch (e.length) {
                        case 4:
                            e = [e[1], e[0], e[3], e[2]];
                            break;
                        case 3:
                            e = [e[1], e[0], e[1], e[2]];
                            break;
                        case 2:
                            e = [e[1], e[0]];
                            break;
                        case 1:
                            e = [e[0]]
                    }
                    return e.join(" ")
                }

                function $(e, t) {
                    var r = [].slice.call(arguments),
                        n = r.slice(2, 6).filter((function(e) {
                            return e
                        })),
                        o = r.slice(6, 10).filter((function(e) {
                            return e
                        })),
                        i = r[10] || "";
                    return t + (o.length ? z(n) + " / " + z(o) : z(n)) + i
                }

                function G(e) {
                    return 0 === parseFloat(e) ? e : "-" === e[0] ? e.slice(1) : "-" + e
                }

                function M(e, t, r) {
                    return t + G(r)
                }

                function j(e, t, r, n, o) {
                    return t + r + G(n) + o
                }

                function W(e, t, r, n, o) {
                    return t + r + n + G(o)
                }
                return {
                    transform: function(e, t) {
                        var r = new n(f, "`NOFLIP_SINGLE`"),
                            o = new n(b, "`NOFLIP_CLASS`"),
                            i = new n(g, "`COMMENT`");
                        return e = i.tokenize(o.tokenize(r.tokenize(e.replace("`", "%60")))), t.transformDirInUrl && (e = e.replace(w, "$1`TMP`").replace(B, "$1ltr").replace(h, "rtl")), t.transformEdgeInUrl && (e = e.replace(E, "$1`TMP`").replace(A, "$1left").replace(h, "right")), e = e.replace(m, "$1`TMP`").replace(x, "$1ltr").replace(h, "rtl").replace(v, "$1`TMP`").replace(y, "$1left").replace(h, "right").replace(S, "$1$2`TMP`").replace(C, "$1$2e-resize").replace(h, "w-resize").replace(T, $).replace(_, M).replace(I, W).replace(L, W).replace(O, M).replace(H, j).replace(N, j).replace(F, "$1$2$3$8$5$6$7$4$9").replace(D, "$1$2$3$8$5$6$7$4$9").replace(k, P).replace(R, P), e = r.detokenize(o.detokenize(i.detokenize(e)))
                    }
                }
            }, e.exports ? t.transform = function(e, t, n) {
                var o;
                return "object" === typeof t ? o = t : (o = {}, "boolean" === typeof t && (o.transformDirInUrl = t), "boolean" === typeof n && (o.transformEdgeInUrl = n)), r.transform(e, o)
            } : window.cssjanus = r
        },
        deT9: (e, t, r) => {
            var n = r("vGGS"),
                o = r("obGE");

            function i(e) {
                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
            }
            i.prototype = n(o.prototype), i.prototype.constructor = i, e.exports = i
        },
        "0+c5": (e, t, r) => {
            var n = r("vGGS"),
                o = r("obGE");

            function i(e, t) {
                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
            }
            i.prototype = n(o.prototype), i.prototype.constructor = i, e.exports = i
        },
        OfKG: (e, t, r) => {
            var n = r("c7Qd");
            e.exports = function(e, t) {
                return !!(null == e ? 0 : e.length) && n(e, t, 0) > -1
            }
        },
        cPMt: e => {
            e.exports = function(e, t, r, n) {
                var o = -1,
                    i = null == e ? 0 : e.length;
                for (n && i && (r = e[++o]); ++o < i;) r = t(r, e[o], o, e);
                return r
            }
        },
        amiU: (e, t, r) => {
            var n = r("wC3K"),
                o = r("pPzx");
            e.exports = function(e, t, r) {
                (void 0 !== r && !o(e[t], r) || void 0 === r && !(t in e)) && n(e, t, r)
            }
        },
        DuXo: e => {
            e.exports = function(e, t, r, n) {
                for (var o = e.length, i = r + (n ? 1 : -1); n ? i-- : ++i < o;)
                    if (t(e[i], i, e)) return i;
                return -1
            }
        },
        c7Qd: (e, t, r) => {
            var n = r("DuXo"),
                o = r("z9Jh"),
                i = r("n1QJ");
            e.exports = function(e, t, r) {
                return t === t ? i(e, t, r) : n(e, o, r)
            }
        },
        z9Jh: e => {
            e.exports = function(e) {
                return e !== e
            }
        },
        obGE: e => {
            e.exports = function() {}
        },
        MzY2: (e, t, r) => {
            var n = r("HsnV"),
                o = r("amiU"),
                i = r("UdtX"),
                a = r("cb1R"),
                s = r("tQYX"),
                l = r("zH+d"),
                c = r("LL3N");
            e.exports = function e(t, r, u, d, p) {
                t !== r && i(r, (function(i, l) {
                    if (p || (p = new n), s(i)) a(t, r, l, u, e, d, p);
                    else {
                        var h = d ? d(c(t, l), i, l + "", t, r, p) : void 0;
                        void 0 === h && (h = i), o(t, l, h)
                    }
                }), l)
            }
        },
        cb1R: (e, t, r) => {
            var n = r("amiU"),
                o = r("Grae"),
                i = r("6Rtw"),
                a = r("QT01"),
                s = r("sD1O"),
                l = r("bvyN"),
                c = r("wxYD"),
                u = r("Ndl3"),
                d = r("3ajY"),
                p = r("2q8g"),
                h = r("tQYX"),
                g = r("Kkar"),
                f = r("Qd2C"),
                b = r("LL3N"),
                m = r("4ScB");
            e.exports = function(e, t, r, x, v, y, E) {
                var A = b(e, r),
                    w = b(t, r),
                    B = E.get(w);
                if (B) n(e, r, B);
                else {
                    var S = y ? y(A, w, r + "", e, t, E) : void 0,
                        C = void 0 === S;
                    if (C) {
                        var F = c(w),
                            D = !F && d(w),
                            k = !F && !D && f(w);
                        S = w, F || D || k ? c(A) ? S = A : u(A) ? S = a(A) : D ? (C = !1, S = o(w, !0)) : k ? (C = !1, S = i(w, !0)) : S = [] : g(w) || l(w) ? (S = A, l(A) ? S = m(A) : h(A) && !p(A) || (S = s(w))) : C = !1
                    }
                    C && (E.set(w, S), v(S, w, x, y, E), E.delete(w)), n(e, r, S)
                }
            }
        },
        "5q8j": e => {
            e.exports = function(e, t, r, n, o) {
                return o(e, (function(e, o, i) {
                    r = n ? (n = !1, e) : t(r, e, o, i)
                })), r
            }
        },
        R3TX: (e, t, r) => {
            var n = r("zWgn"),
                o = r("UAs9"),
                i = r("7Pat");
            e.exports = function(e, t) {
                return i(o(e, t, n), e + "")
            }
        },
        uA6v: (e, t, r) => {
            var n = r("zWgn"),
                o = r("BVx2"),
                i = o ? function(e, t) {
                    return o.set(e, t), e
                } : n;
            e.exports = i
        },
        vyvt: (e, t, r) => {
            var n = r("H87J");
            e.exports = function(e, t) {
                return n(t, (function(t) {
                    return [t, e[t]]
                }))
            }
        },
        I1fX: (e, t, r) => {
            var n = r("6XIJ"),
                o = /^\s+/;
            e.exports = function(e) {
                return e ? e.slice(0, n(e) + 1).replace(o, "") : e
            }
        },
        "6sC/": e => {
            var t = Math.max;
            e.exports = function(e, r, n, o) {
                for (var i = -1, a = e.length, s = n.length, l = -1, c = r.length, u = t(a - s, 0), d = Array(c + u), p = !o; ++l < c;) d[l] = r[l];
                for (; ++i < s;)(p || i < a) && (d[n[i]] = e[i]);
                for (; u--;) d[l++] = e[i++];
                return d
            }
        },
        gGwV: e => {
            var t = Math.max;
            e.exports = function(e, r, n, o) {
                for (var i = -1, a = e.length, s = -1, l = n.length, c = -1, u = r.length, d = t(a - l, 0), p = Array(d + u), h = !o; ++i < d;) p[i] = e[i];
                for (var g = i; ++c < u;) p[g + c] = r[c];
                for (; ++s < l;)(h || i < a) && (p[g + n[s]] = e[i++]);
                return p
            }
        },
        "qFO/": e => {
            e.exports = function(e, t) {
                for (var r = e.length, n = 0; r--;) e[r] === t && ++n;
                return n
            }
        },
        wpQC: (e, t, r) => {
            var n = r("R3TX"),
                o = r("R5u7");
            e.exports = function(e) {
                return n((function(t, r) {
                    var n = -1,
                        i = r.length,
                        a = i > 1 ? r[i - 1] : void 0,
                        s = i > 2 ? r[2] : void 0;
                    for (a = e.length > 3 && "function" == typeof a ? (i--, a) : void 0, s && o(r[0], r[1], s) && (a = i < 3 ? void 0 : a, i = 1), t = Object(t); ++n < i;) {
                        var l = r[n];
                        l && e(t, l, n, a)
                    }
                    return t
                }))
            }
        },
        HCUT: (e, t, r) => {
            var n = r("iWTG"),
                o = r("IBsm");
            e.exports = function(e, t, r) {
                var i = 1 & t,
                    a = n(e);
                return function t() {
                    var n = this && this !== o && this instanceof t ? a : e;
                    return n.apply(i ? r : this, arguments)
                }
            }
        },
        iWTG: (e, t, r) => {
            var n = r("vGGS"),
                o = r("tQYX");
            e.exports = function(e) {
                return function() {
                    var t = arguments;
                    switch (t.length) {
                        case 0:
                            return new e;
                        case 1:
                            return new e(t[0]);
                        case 2:
                            return new e(t[0], t[1]);
                        case 3:
                            return new e(t[0], t[1], t[2]);
                        case 4:
                            return new e(t[0], t[1], t[2], t[3]);
                        case 5:
                            return new e(t[0], t[1], t[2], t[3], t[4]);
                        case 6:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                        case 7:
                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                    }
                    var r = n(e.prototype),
                        i = e.apply(r, t);
                    return o(i) ? i : r
                }
            }
        },
        LtMG: (e, t, r) => {
            var n = r("zaNA"),
                o = r("iWTG"),
                i = r("JtPM"),
                a = r("kBvp"),
                s = r("4mQY"),
                l = r("AeOa"),
                c = r("IBsm");
            e.exports = function(e, t, r) {
                var u = o(e);
                return function o() {
                    for (var d = arguments.length, p = Array(d), h = d, g = s(o); h--;) p[h] = arguments[h];
                    var f = d < 3 && p[0] !== g && p[d - 1] !== g ? [] : l(p, g);
                    if ((d -= f.length) < r) return a(e, t, i, o.placeholder, void 0, p, f, void 0, void 0, r - d);
                    var b = this && this !== c && this instanceof o ? u : e;
                    return n(b, this, p)
                }
            }
        },
        tUbk: (e, t, r) => {
            var n = r("0+c5"),
                o = r("cH1A"),
                i = r("rjis"),
                a = r("rKb1"),
                s = r("wxYD"),
                l = r("/Bkq");
            e.exports = function(e) {
                return o((function(t) {
                    var r = t.length,
                        o = r,
                        c = n.prototype.thru;
                    for (e && t.reverse(); o--;) {
                        var u = t[o];
                        if ("function" != typeof u) throw new TypeError("Expected a function");
                        if (c && !d && "wrapper" == a(u)) var d = new n([], !0)
                    }
                    for (o = d ? o : r; ++o < r;) {
                        u = t[o];
                        var p = a(u),
                            h = "wrapper" == p ? i(u) : void 0;
                        d = h && l(h[0]) && 424 == h[1] && !h[4].length && 1 == h[9] ? d[a(h[0])].apply(d, h[3]) : 1 == u.length && l(u) ? d[p]() : d.thru(u)
                    }
                    return function() {
                        var e = arguments,
                            n = e[0];
                        if (d && 1 == e.length && s(n)) return d.plant(n).value();
                        for (var o = 0, i = r ? t[o].apply(this, e) : n; ++o < r;) i = t[o].call(this, i);
                        return i
                    }
                }))
            }
        },
        JtPM: (e, t, r) => {
            var n = r("6sC/"),
                o = r("gGwV"),
                i = r("qFO/"),
                a = r("iWTG"),
                s = r("kBvp"),
                l = r("4mQY"),
                c = r("MRwE"),
                u = r("AeOa"),
                d = r("IBsm");
            e.exports = function e(t, r, p, h, g, f, b, m, x, v) {
                var y = 128 & r,
                    E = 1 & r,
                    A = 2 & r,
                    w = 24 & r,
                    B = 512 & r,
                    S = A ? void 0 : a(t);
                return function C() {
                    for (var F = arguments.length, D = Array(F), k = F; k--;) D[k] = arguments[k];
                    if (w) var R = l(C),
                        T = i(D, R);
                    if (h && (D = n(D, h, g, w)), f && (D = o(D, f, b, w)), F -= T, w && F < v) {
                        var _ = u(D, R);
                        return s(t, r, e, C.placeholder, p, D, _, m, x, v - F)
                    }
                    var I = E ? p : this,
                        L = A ? I[t] : t;
                    return F = D.length, m ? D = c(D, m) : B && F > 1 && D.reverse(), y && x < F && (D.length = x), this && this !== d && this instanceof C && (L = S || a(L)), L.apply(I, D)
                }
            }
        },
        I6tc: (e, t, r) => {
            var n = r("zaNA"),
                o = r("iWTG"),
                i = r("IBsm");
            e.exports = function(e, t, r, a) {
                var s = 1 & t,
                    l = o(e);
                return function t() {
                    for (var o = -1, c = arguments.length, u = -1, d = a.length, p = Array(d + c), h = this && this !== i && this instanceof t ? l : e; ++u < d;) p[u] = a[u];
                    for (; c--;) p[u++] = arguments[++o];
                    return n(h, s ? r : this, p)
                }
            }
        },
        kBvp: (e, t, r) => {
            var n = r("/Bkq"),
                o = r("SStt"),
                i = r("E2v+");
            e.exports = function(e, t, r, a, s, l, c, u, d, p) {
                var h = 8 & t;
                t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
                var g = [e, t, s, h ? l : void 0, h ? c : void 0, h ? void 0 : l, h ? void 0 : c, u, d, p],
                    f = r.apply(void 0, g);
                return n(e) && o(f, g), f.placeholder = a, i(f, e, t)
            }
        },
        zWkt: (e, t, r) => {
            var n = r("vyvt"),
                o = r("kkM+"),
                i = r("aURW"),
                a = r("5KBi");
            e.exports = function(e) {
                return function(t) {
                    var r = o(t);
                    return "[object Map]" == r ? i(t) : "[object Set]" == r ? a(t) : n(t, e(t))
                }
            }
        },
        "P+cI": (e, t, r) => {
            var n = r("uA6v"),
                o = r("HCUT"),
                i = r("LtMG"),
                a = r("JtPM"),
                s = r("I6tc"),
                l = r("rjis"),
                c = r("9Oiy"),
                u = r("SStt"),
                d = r("E2v+"),
                p = r("m2YG"),
                h = Math.max;
            e.exports = function(e, t, r, g, f, b, m, x) {
                var v = 2 & t;
                if (!v && "function" != typeof e) throw new TypeError("Expected a function");
                var y = g ? g.length : 0;
                if (y || (t &= -97, g = f = void 0), m = void 0 === m ? m : h(p(m), 0), x = void 0 === x ? x : p(x), y -= f ? f.length : 0, 64 & t) {
                    var E = g,
                        A = f;
                    g = f = void 0
                }
                var w = v ? void 0 : l(e),
                    B = [e, t, r, g, f, E, A, b, m, x];
                if (w && c(B, w), e = B[0], t = B[1], r = B[2], g = B[3], f = B[4], !(x = B[9] = void 0 === B[9] ? v ? 0 : e.length : h(B[9] - y, 0)) && 24 & t && (t &= -25), t && 1 != t) S = 8 == t || 16 == t ? i(e, t, x) : 32 != t && 33 != t || f.length ? a.apply(void 0, B) : s(e, t, r, g);
                else var S = o(e, t, r);
                return d((w ? n : u)(S, B), e, t)
            }
        },
        rjis: (e, t, r) => {
            var n = r("BVx2"),
                o = r("nnm9"),
                i = n ? function(e) {
                    return n.get(e)
                } : o;
            e.exports = i
        },
        rKb1: (e, t, r) => {
            var n = r("QaiR"),
                o = Object.prototype.hasOwnProperty;
            e.exports = function(e) {
                for (var t = e.name + "", r = n[t], i = o.call(n, t) ? r.length : 0; i--;) {
                    var a = r[i],
                        s = a.func;
                    if (null == s || s == e) return a.name
                }
                return t
            }
        },
        "4mQY": e => {
            e.exports = function(e) {
                return e.placeholder
            }
        },
        wafF: e => {
            var t = /\{\n\/\* \[wrapped with (.+)\] \*/,
                r = /,? & /;
            e.exports = function(e) {
                var n = e.match(t);
                return n ? n[1].split(r) : []
            }
        },
        kEP7: e => {
            var t = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/;
            e.exports = function(e, r) {
                var n = r.length;
                if (!n) return e;
                var o = n - 1;
                return r[o] = (n > 1 ? "& " : "") + r[o], r = r.join(n > 2 ? ", " : " "), e.replace(t, "{\n/* [wrapped with " + r + "] */\n")
            }
        },
        R5u7: (e, t, r) => {
            var n = r("pPzx"),
                o = r("9y2L"),
                i = r("pnw1"),
                a = r("tQYX");
            e.exports = function(e, t, r) {
                if (!a(r)) return !1;
                var s = typeof t;
                return !!("number" == s ? o(r) && i(t, r.length) : "string" == s && t in r) && n(r[t], e)
            }
        },
        "/Bkq": (e, t, r) => {
            var n = r("deT9"),
                o = r("rjis"),
                i = r("rKb1"),
                a = r("jm4U");
            e.exports = function(e) {
                var t = i(e),
                    r = a[t];
                if ("function" != typeof r || !(t in n.prototype)) return !1;
                if (e === r) return !0;
                var s = o(r);
                return !!s && e === s[0]
            }
        },
        "9Oiy": (e, t, r) => {
            var n = r("6sC/"),
                o = r("gGwV"),
                i = r("AeOa"),
                a = "__lodash_placeholder__",
                s = 128,
                l = Math.min;
            e.exports = function(e, t) {
                var r = e[1],
                    c = t[1],
                    u = r | c,
                    d = u < 131,
                    p = c == s && 8 == r || c == s && 256 == r && e[7].length <= t[8] || 384 == c && t[7].length <= t[8] && 8 == r;
                if (!d && !p) return e;
                1 & c && (e[2] = t[2], u |= 1 & r ? 0 : 4);
                var h = t[3];
                if (h) {
                    var g = e[3];
                    e[3] = g ? n(g, h, t[4]) : h, e[4] = g ? i(e[3], a) : t[4]
                }
                return (h = t[5]) && (g = e[5], e[5] = g ? o(g, h, t[6]) : h, e[6] = g ? i(e[5], a) : t[6]), (h = t[7]) && (e[7] = h), c & s && (e[8] = null == e[8] ? t[8] : l(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = u, e
            }
        },
        BVx2: (e, t, r) => {
            var n = r("4+Vk"),
                o = n && new n;
            e.exports = o
        },
        QaiR: e => {
            e.exports = {}
        },
        MRwE: (e, t, r) => {
            var n = r("QT01"),
                o = r("pnw1"),
                i = Math.min;
            e.exports = function(e, t) {
                for (var r = e.length, a = i(t.length, r), s = n(e); a--;) {
                    var l = t[a];
                    e[a] = o(l, r) ? s[l] : void 0
                }
                return e
            }
        },
        AeOa: e => {
            var t = "__lodash_placeholder__";
            e.exports = function(e, r) {
                for (var n = -1, o = e.length, i = 0, a = []; ++n < o;) {
                    var s = e[n];
                    s !== r && s !== t || (e[n] = t, a[i++] = n)
                }
                return a
            }
        },
        LL3N: e => {
            e.exports = function(e, t) {
                if (("constructor" !== t || "function" !== typeof e[t]) && "__proto__" != t) return e[t]
            }
        },
        SStt: (e, t, r) => {
            var n = r("uA6v"),
                o = r("kG2z")(n);
            e.exports = o
        },
        "5KBi": e => {
            e.exports = function(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach((function(e) {
                    r[++t] = [e, e]
                })), r
            }
        },
        "E2v+": (e, t, r) => {
            var n = r("wafF"),
                o = r("kEP7"),
                i = r("7Pat"),
                a = r("p4bK");
            e.exports = function(e, t, r) {
                var s = t + "";
                return i(e, o(s, a(n(s), r)))
            }
        },
        n1QJ: e => {
            e.exports = function(e, t, r) {
                for (var n = r - 1, o = e.length; ++n < o;)
                    if (e[n] === t) return n;
                return -1
            }
        },
        "6XIJ": e => {
            var t = /\s/;
            e.exports = function(e) {
                for (var r = e.length; r-- && t.test(e.charAt(r)););
                return r
            }
        },
        p4bK: (e, t, r) => {
            var n = r("LmOH"),
                o = r("OfKG"),
                i = [
                    ["ary", 128],
                    ["bind", 1],
                    ["bindKey", 2],
                    ["curry", 8],
                    ["curryRight", 16],
                    ["flip", 512],
                    ["partial", 32],
                    ["partialRight", 64],
                    ["rearg", 256]
                ];
            e.exports = function(e, t) {
                return n(i, (function(r) {
                    var n = "_." + r[0];
                    t & r[1] && !o(e, n) && e.push(n)
                })), e.sort()
            }
        },
        "e+ll": (e, t, r) => {
            var n = r("deT9"),
                o = r("0+c5"),
                i = r("QT01");
            e.exports = function(e) {
                if (e instanceof n) return e.clone();
                var t = new o(e.__wrapped__, e.__chain__);
                return t.__actions__ = i(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
            }
        },
        "3POh": (e, t, r) => {
            var n = r("P+cI");

            function o(e, t, r) {
                var i = n(e, 16, void 0, void 0, void 0, void 0, void 0, t = r ? void 0 : t);
                return i.placeholder = o.placeholder, i
            }
            o.placeholder = {}, e.exports = o
        },
        jPI1: (e, t, r) => {
            var n = r("tUbk")();
            e.exports = n
        },
        Ndl3: (e, t, r) => {
            var n = r("9y2L"),
                o = r("tLQN");
            e.exports = function(e) {
                return o(e) && n(e)
            }
        },
        H8sf: (e, t, r) => {
            var n = r("MzY2"),
                o = r("wpQC")((function(e, t, r) {
                    n(e, t, r)
                }));
            e.exports = o
        },
        nnm9: e => {
            e.exports = function() {}
        },
        veKZ: (e, t, r) => {
            var n = r("cPMt"),
                o = r("Q4oW"),
                i = r("S3pA"),
                a = r("5q8j"),
                s = r("wxYD");
            e.exports = function(e, t, r) {
                var l = s(e) ? n : a,
                    c = arguments.length < 3;
                return l(e, i(t, 4), r, c, o)
            }
        },
        fWyh: (e, t, r) => {
            var n = r("nvU9"),
                o = 1 / 0;
            e.exports = function(e) {
                return e ? (e = n(e)) === o || e === -1 / 0 ? 17976931348623157e292 * (e < 0 ? -1 : 1) : e === e ? e : 0 : 0 === e ? e : 0
            }
        },
        m2YG: (e, t, r) => {
            var n = r("fWyh");
            e.exports = function(e) {
                var t = n(e),
                    r = t % 1;
                return t === t ? r ? t - r : t : 0
            }
        },
        nvU9: (e, t, r) => {
            var n = r("I1fX"),
                o = r("tQYX"),
                i = r("a88S"),
                a = /^[-+]0x[0-9a-f]+$/i,
                s = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                c = parseInt;
            e.exports = function(e) {
                if ("number" == typeof e) return e;
                if (i(e)) return NaN;
                if (o(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = o(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = n(e);
                var r = s.test(e);
                return r || l.test(e) ? c(e.slice(2), r ? 2 : 8) : a.test(e) ? NaN : +e
            }
        },
        "pL+m": (e, t, r) => {
            var n = r("zWkt")(r("BlJA"));
            e.exports = n
        },
        "4ScB": (e, t, r) => {
            var n = r("LtXa"),
                o = r("zH+d");
            e.exports = function(e) {
                return n(e, o(e))
            }
        },
        jm4U: (e, t, r) => {
            var n = r("deT9"),
                o = r("0+c5"),
                i = r("obGE"),
                a = r("wxYD"),
                s = r("tLQN"),
                l = r("e+ll"),
                c = Object.prototype.hasOwnProperty;

            function u(e) {
                if (s(e) && !a(e) && !(e instanceof n)) {
                    if (e instanceof o) return e;
                    if (c.call(e, "__wrapped__")) return l(e)
                }
                return new o(e)
            }
            u.prototype = i.prototype, u.prototype.constructor = u, e.exports = u
        },
        H7mm: () => {},
        Peay: () => {},
        i6j3: (e, t, r) => {
            const n = Symbol("SemVer ANY");
            class o {
                static get ANY() {
                    return n
                }
                constructor(e, t) {
                    if (t = i(t), e instanceof o) {
                        if (e.loose === !!t.loose) return e;
                        e = e.value
                    }
                    e = e.trim().split(/\s+/).join(" "), c("comparator", e, t), this.options = t, this.loose = !!t.loose, this.parse(e), this.semver === n ? this.value = "" : this.value = this.operator + this.semver.version, c("comp", this)
                }
                parse(e) {
                    const t = this.options.loose ? a[s.COMPARATORLOOSE] : a[s.COMPARATOR],
                        r = e.match(t);
                    if (!r) throw new TypeError(`Invalid comparator: ${e}`);
                    this.operator = void 0 !== r[1] ? r[1] : "", "=" === this.operator && (this.operator = ""), r[2] ? this.semver = new u(r[2], this.options.loose) : this.semver = n
                }
                toString() {
                    return this.value
                }
                test(e) {
                    if (c("Comparator.test", e, this.options.loose), this.semver === n || e === n) return !0;
                    if ("string" === typeof e) try {
                        e = new u(e, this.options)
                    } catch (t) {
                        return !1
                    }
                    return l(e, this.operator, this.semver, this.options)
                }
                intersects(e, t) {
                    if (!(e instanceof o)) throw new TypeError("a Comparator is required");
                    return "" === this.operator ? "" === this.value || new d(e.value, t).test(this.value) : "" === e.operator ? "" === e.value || new d(this.value, t).test(e.semver) : (!(t = i(t)).includePrerelease || "<0.0.0-0" !== this.value && "<0.0.0-0" !== e.value) && (!(!t.includePrerelease && (this.value.startsWith("<0.0.0") || e.value.startsWith("<0.0.0"))) && (!(!this.operator.startsWith(">") || !e.operator.startsWith(">")) || (!(!this.operator.startsWith("<") || !e.operator.startsWith("<")) || (!(this.semver.version !== e.semver.version || !this.operator.includes("=") || !e.operator.includes("=")) || (!!(l(this.semver, "<", e.semver, t) && this.operator.startsWith(">") && e.operator.startsWith("<")) || !!(l(this.semver, ">", e.semver, t) && this.operator.startsWith("<") && e.operator.startsWith(">")))))))
                }
            }
            e.exports = o;
            const i = r("dsn1"),
                {
                    safeRe: a,
                    t: s
                } = r("liU0"),
                l = r("YIFi"),
                c = r("/XAB"),
                u = r("V5/F"),
                d = r("0Q6K")
        },
        "0Q6K": (e, t, r) => {
            class n {
                constructor(e, t) {
                    if (t = i(t), e instanceof n) return e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease ? e : new n(e.raw, t);
                    if (e instanceof a) return this.raw = e.value, this.set = [
                        [e]
                    ], this.format(), this;
                    if (this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease, this.raw = e.trim().split(/\s+/).join(" "), this.set = this.raw.split("||").map((e => this.parseRange(e.trim()))).filter((e => e.length)), !this.set.length) throw new TypeError(`Invalid SemVer Range: ${this.raw}`);
                    if (this.set.length > 1) {
                        const e = this.set[0];
                        if (this.set = this.set.filter((e => !b(e[0]))), 0 === this.set.length) this.set = [e];
                        else if (this.set.length > 1)
                            for (const t of this.set)
                                if (1 === t.length && m(t[0])) {
                                    this.set = [t];
                                    break
                                }
                    }
                    this.format()
                }
                format() {
                    return this.range = this.set.map((e => e.join(" ").trim())).join("||").trim(), this.range
                }
                toString() {
                    return this.range
                }
                parseRange(e) {
                    const t = ((this.options.includePrerelease && g) | (this.options.loose && f)) + ":" + e,
                        r = o.get(t);
                    if (r) return r;
                    const n = this.options.loose,
                        i = n ? c[u.HYPHENRANGELOOSE] : c[u.HYPHENRANGE];
                    e = e.replace(i, k(this.options.includePrerelease)), s("hyphen replace", e), e = e.replace(c[u.COMPARATORTRIM], d), s("comparator trim", e), e = e.replace(c[u.TILDETRIM], p), s("tilde trim", e), e = e.replace(c[u.CARETTRIM], h), s("caret trim", e);
                    let l = e.split(" ").map((e => v(e, this.options))).join(" ").split(/\s+/).map((e => D(e, this.options)));
                    n && (l = l.filter((e => (s("loose invalid filter", e, this.options), !!e.match(c[u.COMPARATORLOOSE]))))), s("range list", l);
                    const m = new Map,
                        x = l.map((e => new a(e, this.options)));
                    for (const o of x) {
                        if (b(o)) return [o];
                        m.set(o.value, o)
                    }
                    m.size > 1 && m.has("") && m.delete("");
                    const y = [...m.values()];
                    return o.set(t, y), y
                }
                intersects(e, t) {
                    if (!(e instanceof n)) throw new TypeError("a Range is required");
                    return this.set.some((r => x(r, t) && e.set.some((e => x(e, t) && r.every((r => e.every((e => r.intersects(e, t)))))))))
                }
                test(e) {
                    if (!e) return !1;
                    if ("string" === typeof e) try {
                        e = new l(e, this.options)
                    } catch (t) {
                        return !1
                    }
                    for (let r = 0; r < this.set.length; r++)
                        if (R(this.set[r], e, this.options)) return !0;
                    return !1
                }
            }
            e.exports = n;
            const o = new(r("rzVv")),
                i = r("dsn1"),
                a = r("i6j3"),
                s = r("/XAB"),
                l = r("V5/F"),
                {
                    safeRe: c,
                    t: u,
                    comparatorTrimReplace: d,
                    tildeTrimReplace: p,
                    caretTrimReplace: h
                } = r("liU0"),
                {
                    FLAG_INCLUDE_PRERELEASE: g,
                    FLAG_LOOSE: f
                } = r("IaN/"),
                b = e => "<0.0.0-0" === e.value,
                m = e => "" === e.value,
                x = (e, t) => {
                    let r = !0;
                    const n = e.slice();
                    let o = n.pop();
                    for (; r && n.length;) r = n.every((e => o.intersects(e, t))), o = n.pop();
                    return r
                },
                v = (e, t) => (s("comp", e, t), e = w(e, t), s("caret", e), e = E(e, t), s("tildes", e), e = S(e, t), s("xrange", e), e = F(e, t), s("stars", e), e),
                y = e => !e || "x" === e.toLowerCase() || "*" === e,
                E = (e, t) => e.trim().split(/\s+/).map((e => A(e, t))).join(" "),
                A = (e, t) => {
                    const r = t.loose ? c[u.TILDELOOSE] : c[u.TILDE];
                    return e.replace(r, ((t, r, n, o, i) => {
                        let a;
                        return s("tilde", e, t, r, n, o, i), y(r) ? a = "" : y(n) ? a = `>=${r}.0.0 <${+r+1}.0.0-0` : y(o) ? a = `>=${r}.${n}.0 <${r}.${+n+1}.0-0` : i ? (s("replaceTilde pr", i), a = `>=${r}.${n}.${o}-${i} <${r}.${+n+1}.0-0`) : a = `>=${r}.${n}.${o} <${r}.${+n+1}.0-0`, s("tilde return", a), a
                    }))
                },
                w = (e, t) => e.trim().split(/\s+/).map((e => B(e, t))).join(" "),
                B = (e, t) => {
                    s("caret", e, t);
                    const r = t.loose ? c[u.CARETLOOSE] : c[u.CARET],
                        n = t.includePrerelease ? "-0" : "";
                    return e.replace(r, ((t, r, o, i, a) => {
                        let l;
                        return s("caret", e, t, r, o, i, a), y(r) ? l = "" : y(o) ? l = `>=${r}.0.0${n} <${+r+1}.0.0-0` : y(i) ? l = "0" === r ? `>=${r}.${o}.0${n} <${r}.${+o+1}.0-0` : `>=${r}.${o}.0${n} <${+r+1}.0.0-0` : a ? (s("replaceCaret pr", a), l = "0" === r ? "0" === o ? `>=${r}.${o}.${i}-${a} <${r}.${o}.${+i+1}-0` : `>=${r}.${o}.${i}-${a} <${r}.${+o+1}.0-0` : `>=${r}.${o}.${i}-${a} <${+r+1}.0.0-0`) : (s("no pr"), l = "0" === r ? "0" === o ? `>=${r}.${o}.${i}${n} <${r}.${o}.${+i+1}-0` : `>=${r}.${o}.${i}${n} <${r}.${+o+1}.0-0` : `>=${r}.${o}.${i} <${+r+1}.0.0-0`), s("caret return", l), l
                    }))
                },
                S = (e, t) => (s("replaceXRanges", e, t), e.split(/\s+/).map((e => C(e, t))).join(" ")),
                C = (e, t) => {
                    e = e.trim();
                    const r = t.loose ? c[u.XRANGELOOSE] : c[u.XRANGE];
                    return e.replace(r, ((r, n, o, i, a, l) => {
                        s("xRange", e, r, n, o, i, a, l);
                        const c = y(o),
                            u = c || y(i),
                            d = u || y(a),
                            p = d;
                        return "=" === n && p && (n = ""), l = t.includePrerelease ? "-0" : "", c ? r = ">" === n || "<" === n ? "<0.0.0-0" : "*" : n && p ? (u && (i = 0), a = 0, ">" === n ? (n = ">=", u ? (o = +o + 1, i = 0, a = 0) : (i = +i + 1, a = 0)) : "<=" === n && (n = "<", u ? o = +o + 1 : i = +i + 1), "<" === n && (l = "-0"), r = `${n+o}.${i}.${a}${l}`) : u ? r = `>=${o}.0.0${l} <${+o+1}.0.0-0` : d && (r = `>=${o}.${i}.0${l} <${o}.${+i+1}.0-0`), s("xRange return", r), r
                    }))
                },
                F = (e, t) => (s("replaceStars", e, t), e.trim().replace(c[u.STAR], "")),
                D = (e, t) => (s("replaceGTE0", e, t), e.trim().replace(c[t.includePrerelease ? u.GTE0PRE : u.GTE0], "")),
                k = e => (t, r, n, o, i, a, s, l, c, u, d, p) => `${r=y(n)?"":y(o)?`>=${n}.0.0${e?"-0":""}`:y(i)?`>=${n}.${o}.0${e?"-0":""}`:a?`>=${r}`:`>=${r}${e?"-0":""}`} ${l=y(c)?"":y(u)?`<${+c+1}.0.0-0`:y(d)?`<${c}.${+u+1}.0-0`:p?`<=${c}.${u}.${d}-${p}`:e?`<${c}.${u}.${+d+1}-0`:`<=${l}`}`.trim(),
                R = (e, t, r) => {
                    for (let n = 0; n < e.length; n++)
                        if (!e[n].test(t)) return !1;
                    if (t.prerelease.length && !r.includePrerelease) {
                        for (let r = 0; r < e.length; r++)
                            if (s(e[r].semver), e[r].semver !== a.ANY && e[r].semver.prerelease.length > 0) {
                                const n = e[r].semver;
                                if (n.major === t.major && n.minor === t.minor && n.patch === t.patch) return !0
                            }
                        return !1
                    }
                    return !0
                }
        },
        "V5/F": (e, t, r) => {
            const n = r("/XAB"),
                {
                    MAX_LENGTH: o,
                    MAX_SAFE_INTEGER: i
                } = r("IaN/"),
                {
                    safeRe: a,
                    t: s
                } = r("liU0"),
                l = r("dsn1"),
                {
                    compareIdentifiers: c
                } = r("T/24");
            class u {
                constructor(e, t) {
                    if (t = l(t), e instanceof u) {
                        if (e.loose === !!t.loose && e.includePrerelease === !!t.includePrerelease) return e;
                        e = e.version
                    } else if ("string" !== typeof e) throw new TypeError(`Invalid version. Must be a string. Got type "${typeof e}".`);
                    if (e.length > o) throw new TypeError(`version is longer than ${o} characters`);
                    n("SemVer", e, t), this.options = t, this.loose = !!t.loose, this.includePrerelease = !!t.includePrerelease;
                    const r = e.trim().match(t.loose ? a[s.LOOSE] : a[s.FULL]);
                    if (!r) throw new TypeError(`Invalid Version: ${e}`);
                    if (this.raw = e, this.major = +r[1], this.minor = +r[2], this.patch = +r[3], this.major > i || this.major < 0) throw new TypeError("Invalid major version");
                    if (this.minor > i || this.minor < 0) throw new TypeError("Invalid minor version");
                    if (this.patch > i || this.patch < 0) throw new TypeError("Invalid patch version");
                    r[4] ? this.prerelease = r[4].split(".").map((e => {
                        if (/^[0-9]+$/.test(e)) {
                            const t = +e;
                            if (t >= 0 && t < i) return t
                        }
                        return e
                    })) : this.prerelease = [], this.build = r[5] ? r[5].split(".") : [], this.format()
                }
                format() {
                    return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version
                }
                toString() {
                    return this.version
                }
                compare(e) {
                    if (n("SemVer.compare", this.version, this.options, e), !(e instanceof u)) {
                        if ("string" === typeof e && e === this.version) return 0;
                        e = new u(e, this.options)
                    }
                    return e.version === this.version ? 0 : this.compareMain(e) || this.comparePre(e)
                }
                compareMain(e) {
                    return e instanceof u || (e = new u(e, this.options)), c(this.major, e.major) || c(this.minor, e.minor) || c(this.patch, e.patch)
                }
                comparePre(e) {
                    if (e instanceof u || (e = new u(e, this.options)), this.prerelease.length && !e.prerelease.length) return -1;
                    if (!this.prerelease.length && e.prerelease.length) return 1;
                    if (!this.prerelease.length && !e.prerelease.length) return 0;
                    let t = 0;
                    do {
                        const r = this.prerelease[t],
                            o = e.prerelease[t];
                        if (n("prerelease compare", t, r, o), void 0 === r && void 0 === o) return 0;
                        if (void 0 === o) return 1;
                        if (void 0 === r) return -1;
                        if (r !== o) return c(r, o)
                    } while (++t)
                }
                compareBuild(e) {
                    e instanceof u || (e = new u(e, this.options));
                    let t = 0;
                    do {
                        const r = this.build[t],
                            o = e.build[t];
                        if (n("build compare", t, r, o), void 0 === r && void 0 === o) return 0;
                        if (void 0 === o) return 1;
                        if (void 0 === r) return -1;
                        if (r !== o) return c(r, o)
                    } while (++t)
                }
                inc(e, t, r) {
                    switch (e) {
                        case "premajor":
                            this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t, r);
                            break;
                        case "preminor":
                            this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t, r);
                            break;
                        case "prepatch":
                            this.prerelease.length = 0, this.inc("patch", t, r), this.inc("pre", t, r);
                            break;
                        case "prerelease":
                            0 === this.prerelease.length && this.inc("patch", t, r), this.inc("pre", t, r);
                            break;
                        case "major":
                            0 === this.minor && 0 === this.patch && 0 !== this.prerelease.length || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                            break;
                        case "minor":
                            0 === this.patch && 0 !== this.prerelease.length || this.minor++, this.patch = 0, this.prerelease = [];
                            break;
                        case "patch":
                            0 === this.prerelease.length && this.patch++, this.prerelease = [];
                            break;
                        case "pre":
                            {
                                const e = Number(r) ? 1 : 0;
                                if (!t && !1 === r) throw new Error("invalid increment argument: identifier is empty");
                                if (0 === this.prerelease.length) this.prerelease = [e];
                                else {
                                    let n = this.prerelease.length;
                                    for (; --n >= 0;) "number" === typeof this.prerelease[n] && (this.prerelease[n]++, n = -2);
                                    if (-1 === n) {
                                        if (t === this.prerelease.join(".") && !1 === r) throw new Error("invalid increment argument: identifier already exists");
                                        this.prerelease.push(e)
                                    }
                                }
                                if (t) {
                                    let n = [t, e];
                                    !1 === r && (n = [t]), 0 === c(this.prerelease[0], t) ? isNaN(this.prerelease[1]) && (this.prerelease = n) : this.prerelease = n
                                }
                                break
                            }
                        default:
                            throw new Error(`invalid increment argument: ${e}`)
                    }
                    return this.raw = this.format(), this.build.length && (this.raw += `+${this.build.join(".")}`), this
                }
            }
            e.exports = u
        },
        ui0r: (e, t, r) => {
            const n = r("MXGD");
            e.exports = (e, t) => {
                const r = n(e.trim().replace(/^[=v]+/, ""), t);
                return r ? r.version : null
            }
        },
        YIFi: (e, t, r) => {
            const n = r("hoh8"),
                o = r("/hW4"),
                i = r("Ng+Q"),
                a = r("ay0z"),
                s = r("NgA/"),
                l = r("l/Q6");
            e.exports = (e, t, r, c) => {
                switch (t) {
                    case "===":
                        return "object" === typeof e && (e = e.version), "object" === typeof r && (r = r.version), e === r;
                    case "!==":
                        return "object" === typeof e && (e = e.version), "object" === typeof r && (r = r.version), e !== r;
                    case "":
                    case "=":
                    case "==":
                        return n(e, r, c);
                    case "!=":
                        return o(e, r, c);
                    case ">":
                        return i(e, r, c);
                    case ">=":
                        return a(e, r, c);
                    case "<":
                        return s(e, r, c);
                    case "<=":
                        return l(e, r, c);
                    default:
                        throw new TypeError(`Invalid operator: ${t}`)
                }
            }
        },
        dOLF: (e, t, r) => {
            const n = r("V5/F"),
                o = r("MXGD"),
                {
                    safeRe: i,
                    t: a
                } = r("liU0");
            e.exports = (e, t) => {
                if (e instanceof n) return e;
                if ("number" === typeof e && (e = String(e)), "string" !== typeof e) return null;
                let r = null;
                if ((t = t || {}).rtl) {
                    const n = t.includePrerelease ? i[a.COERCERTLFULL] : i[a.COERCERTL];
                    let o;
                    for (;
                        (o = n.exec(e)) && (!r || r.index + r[0].length !== e.length);) r && o.index + o[0].length === r.index + r[0].length || (r = o), n.lastIndex = o.index + o[1].length + o[2].length;
                    n.lastIndex = -1
                } else r = e.match(t.includePrerelease ? i[a.COERCEFULL] : i[a.COERCE]);
                if (null === r) return null;
                const s = r[2],
                    l = r[3] || "0",
                    c = r[4] || "0",
                    u = t.includePrerelease && r[5] ? `-${r[5]}` : "",
                    d = t.includePrerelease && r[6] ? `+${r[6]}` : "";
                return o(`${s}.${l}.${c}${u}${d}`, t)
            }
        },
        "9Y3l": (e, t, r) => {
            const n = r("V5/F");
            e.exports = (e, t, r) => {
                const o = new n(e, r),
                    i = new n(t, r);
                return o.compare(i) || o.compareBuild(i)
            }
        },
        wMkP: (e, t, r) => {
            const n = r("PCir");
            e.exports = (e, t) => n(e, t, !0)
        },
        PCir: (e, t, r) => {
            const n = r("V5/F");
            e.exports = (e, t, r) => new n(e, r).compare(new n(t, r))
        },
        noZu: (e, t, r) => {
            const n = r("MXGD");
            e.exports = (e, t) => {
                const r = n(e, null, !0),
                    o = n(t, null, !0),
                    i = r.compare(o);
                if (0 === i) return null;
                const a = i > 0,
                    s = a ? r : o,
                    l = a ? o : r,
                    c = !!s.prerelease.length;
                if (!!l.prerelease.length && !c) return l.patch || l.minor ? s.patch ? "patch" : s.minor ? "minor" : "major" : "major";
                const u = c ? "pre" : "";
                return r.major !== o.major ? u + "major" : r.minor !== o.minor ? u + "minor" : r.patch !== o.patch ? u + "patch" : "prerelease"
            }
        },
        hoh8: (e, t, r) => {
            const n = r("PCir");
            e.exports = (e, t, r) => 0 === n(e, t, r)
        },
        "Ng+Q": (e, t, r) => {
            const n = r("PCir");
            e.exports = (e, t, r) => n(e, t, r) > 0
        },
        ay0z: (e, t, r) => {
            const n = r("PCir");
            e.exports = (e, t, r) => n(e, t, r) >= 0
        },
        jmOT: (e, t, r) => {
            const n = r("V5/F");
            e.exports = (e, t, r, o, i) => {
                "string" === typeof r && (i = o, o = r, r = void 0);
                try {
                    return new n(e instanceof n ? e.version : e, r).inc(t, o, i).version
                } catch (a) {
                    return null
                }
            }
        },
        "NgA/": (e, t, r) => {
            const n = r("PCir");
            e.exports = (e, t, r) => n(e, t, r) < 0
        },
        "l/Q6": (e, t, r) => {
            const n = r("PCir");
            e.exports = (e, t, r) => n(e, t, r) <= 0
        },
        fdSp: (e, t, r) => {
            const n = r("V5/F");
            e.exports = (e, t) => new n(e, t).major
        },
        "5oLB": (e, t, r) => {
            const n = r("V5/F");
            e.exports = (e, t) => new n(e, t).minor
        },
        "/hW4": (e, t, r) => {
            const n = r("PCir");
            e.exports = (e, t, r) => 0 !== n(e, t, r)
        },
        MXGD: (e, t, r) => {
            const n = r("V5/F");
            e.exports = (e, t, r = !1) => {
                if (e instanceof n) return e;
                try {
                    return new n(e, t)
                } catch (o) {
                    if (!r) return null;
                    throw o
                }
            }
        },
        ZQtu: (e, t, r) => {
            const n = r("V5/F");
            e.exports = (e, t) => new n(e, t).patch
        },
        Oy3M: (e, t, r) => {
            const n = r("MXGD");
            e.exports = (e, t) => {
                const r = n(e, t);
                return r && r.prerelease.length ? r.prerelease : null
            }
        },
        a69Q: (e, t, r) => {
            const n = r("PCir");
            e.exports = (e, t, r) => n(t, e, r)
        },
        "/BUg": (e, t, r) => {
            const n = r("9Y3l");
            e.exports = (e, t) => e.sort(((e, r) => n(r, e, t)))
        },
        "71xT": (e, t, r) => {
            const n = r("0Q6K");
            e.exports = (e, t, r) => {
                try {
                    t = new n(t, r)
                } catch (o) {
                    return !1
                }
                return t.test(e)
            }
        },
        Od0l: (e, t, r) => {
            const n = r("9Y3l");
            e.exports = (e, t) => e.sort(((e, r) => n(e, r, t)))
        },
        Erf0: (e, t, r) => {
            const n = r("MXGD");
            e.exports = (e, t) => {
                const r = n(e, t);
                return r ? r.version : null
            }
        },
        "0ff3": (e, t, r) => {
            const n = r("liU0"),
                o = r("IaN/"),
                i = r("V5/F"),
                a = r("T/24"),
                s = r("MXGD"),
                l = r("Erf0"),
                c = r("ui0r"),
                u = r("jmOT"),
                d = r("noZu"),
                p = r("fdSp"),
                h = r("5oLB"),
                g = r("ZQtu"),
                f = r("Oy3M"),
                b = r("PCir"),
                m = r("a69Q"),
                x = r("wMkP"),
                v = r("9Y3l"),
                y = r("Od0l"),
                E = r("/BUg"),
                A = r("Ng+Q"),
                w = r("NgA/"),
                B = r("hoh8"),
                S = r("/hW4"),
                C = r("ay0z"),
                F = r("l/Q6"),
                D = r("YIFi"),
                k = r("dOLF"),
                R = r("i6j3"),
                T = r("0Q6K"),
                _ = r("71xT"),
                I = r("LqX8"),
                L = r("2eyZ"),
                O = r("WTOh"),
                H = r("rik/"),
                N = r("SPvU"),
                P = r("mKcJ"),
                z = r("zBay"),
                $ = r("QCYF"),
                G = r("UAcN"),
                M = r("lfx9"),
                j = r("xQVu");
            e.exports = {
                parse: s,
                valid: l,
                clean: c,
                inc: u,
                diff: d,
                major: p,
                minor: h,
                patch: g,
                prerelease: f,
                compare: b,
                rcompare: m,
                compareLoose: x,
                compareBuild: v,
                sort: y,
                rsort: E,
                gt: A,
                lt: w,
                eq: B,
                neq: S,
                gte: C,
                lte: F,
                cmp: D,
                coerce: k,
                Comparator: R,
                Range: T,
                satisfies: _,
                toComparators: I,
                maxSatisfying: L,
                minSatisfying: O,
                minVersion: H,
                validRange: N,
                outside: P,
                gtr: z,
                ltr: $,
                intersects: G,
                simplifyRange: M,
                subset: j,
                SemVer: i,
                re: n.re,
                src: n.src,
                tokens: n.t,
                SEMVER_SPEC_VERSION: o.SEMVER_SPEC_VERSION,
                RELEASE_TYPES: o.RELEASE_TYPES,
                compareIdentifiers: a.compareIdentifiers,
                rcompareIdentifiers: a.rcompareIdentifiers
            }
        },
        "IaN/": e => {
            const t = Number.MAX_SAFE_INTEGER || 9007199254740991;
            e.exports = {
                MAX_LENGTH: 256,
                MAX_SAFE_COMPONENT_LENGTH: 16,
                MAX_SAFE_BUILD_LENGTH: 250,
                MAX_SAFE_INTEGER: t,
                RELEASE_TYPES: ["major", "premajor", "minor", "preminor", "patch", "prepatch", "prerelease"],
                SEMVER_SPEC_VERSION: "2.0.0",
                FLAG_INCLUDE_PRERELEASE: 1,
                FLAG_LOOSE: 2
            }
        },
        "/XAB": (e, t, r) => {
            const n = "object" === typeof r("F63i") && "{}".NODE_DEBUG && /\bsemver\b/i.test("{}".NODE_DEBUG) ? (...e) => console.error("SEMVER", ...e) : () => {};
            e.exports = n
        },
        "T/24": e => {
            const t = /^[0-9]+$/,
                r = (e, r) => {
                    const n = t.test(e),
                        o = t.test(r);
                    return n && o && (e = +e, r = +r), e === r ? 0 : n && !o ? -1 : o && !n ? 1 : e < r ? -1 : 1
                };
            e.exports = {
                compareIdentifiers: r,
                rcompareIdentifiers: (e, t) => r(t, e)
            }
        },
        rzVv: e => {
            e.exports = class {
                constructor() {
                    this.max = 1e3, this.map = new Map
                }
                get(e) {
                    const t = this.map.get(e);
                    return void 0 === t ? void 0 : (this.map.delete(e), this.map.set(e, t), t)
                }
                delete(e) {
                    return this.map.delete(e)
                }
                set(e, t) {
                    if (!this.delete(e) && void 0 !== t) {
                        if (this.map.size >= this.max) {
                            const e = this.map.keys().next().value;
                            this.delete(e)
                        }
                        this.map.set(e, t)
                    }
                    return this
                }
            }
        },
        dsn1: e => {
            const t = Object.freeze({
                    loose: !0
                }),
                r = Object.freeze({});
            e.exports = e => e ? "object" !== typeof e ? t : e : r
        },
        liU0: (e, t, r) => {
            const {
                MAX_SAFE_COMPONENT_LENGTH: n,
                MAX_SAFE_BUILD_LENGTH: o,
                MAX_LENGTH: i
            } = r("IaN/"), a = r("/XAB"), s = (t = e.exports = {}).re = [], l = t.safeRe = [], c = t.src = [], u = t.t = {};
            let d = 0;
            const p = "[a-zA-Z0-9-]",
                h = [
                    ["\\s", 1],
                    ["\\d", i],
                    [p, o]
                ],
                g = (e, t, r) => {
                    const n = (e => {
                            for (const [t, r] of h) e = e.split(`${t}*`).join(`${t}{0,${r}}`).split(`${t}+`).join(`${t}{1,${r}}`);
                            return e
                        })(t),
                        o = d++;
                    a(e, o, t), u[e] = o, c[o] = t, s[o] = new RegExp(t, r ? "g" : void 0), l[o] = new RegExp(n, r ? "g" : void 0)
                };
            g("NUMERICIDENTIFIER", "0|[1-9]\\d*"), g("NUMERICIDENTIFIERLOOSE", "\\d+"), g("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), g("MAINVERSION", `(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})\\.(${c[u.NUMERICIDENTIFIER]})`), g("MAINVERSIONLOOSE", `(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})\\.(${c[u.NUMERICIDENTIFIERLOOSE]})`), g("PRERELEASEIDENTIFIER", `(?:${c[u.NUMERICIDENTIFIER]}|${c[u.NONNUMERICIDENTIFIER]})`), g("PRERELEASEIDENTIFIERLOOSE", `(?:${c[u.NUMERICIDENTIFIERLOOSE]}|${c[u.NONNUMERICIDENTIFIER]})`), g("PRERELEASE", `(?:-(${c[u.PRERELEASEIDENTIFIER]}(?:\\.${c[u.PRERELEASEIDENTIFIER]})*))`), g("PRERELEASELOOSE", `(?:-?(${c[u.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${c[u.PRERELEASEIDENTIFIERLOOSE]})*))`), g("BUILDIDENTIFIER", "[a-zA-Z0-9-]+"), g("BUILD", `(?:\\+(${c[u.BUILDIDENTIFIER]}(?:\\.${c[u.BUILDIDENTIFIER]})*))`), g("FULLPLAIN", `v?${c[u.MAINVERSION]}${c[u.PRERELEASE]}?${c[u.BUILD]}?`), g("FULL", `^${c[u.FULLPLAIN]}$`), g("LOOSEPLAIN", `[v=\\s]*${c[u.MAINVERSIONLOOSE]}${c[u.PRERELEASELOOSE]}?${c[u.BUILD]}?`), g("LOOSE", `^${c[u.LOOSEPLAIN]}$`), g("GTLT", "((?:<|>)?=?)"), g("XRANGEIDENTIFIERLOOSE", `${c[u.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), g("XRANGEIDENTIFIER", `${c[u.NUMERICIDENTIFIER]}|x|X|\\*`), g("XRANGEPLAIN", `[v=\\s]*(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:\\.(${c[u.XRANGEIDENTIFIER]})(?:${c[u.PRERELEASE]})?${c[u.BUILD]}?)?)?`), g("XRANGEPLAINLOOSE", `[v=\\s]*(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:\\.(${c[u.XRANGEIDENTIFIERLOOSE]})(?:${c[u.PRERELEASELOOSE]})?${c[u.BUILD]}?)?)?`), g("XRANGE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAIN]}$`), g("XRANGELOOSE", `^${c[u.GTLT]}\\s*${c[u.XRANGEPLAINLOOSE]}$`), g("COERCEPLAIN", `(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?`), g("COERCE", `${c[u.COERCEPLAIN]}(?:$|[^\\d])`), g("COERCEFULL", c[u.COERCEPLAIN] + `(?:${c[u.PRERELEASE]})?` + `(?:${c[u.BUILD]})?(?:$|[^\\d])`), g("COERCERTL", c[u.COERCE], !0), g("COERCERTLFULL", c[u.COERCEFULL], !0), g("LONETILDE", "(?:~>?)"), g("TILDETRIM", `(\\s*)${c[u.LONETILDE]}\\s+`, !0), t.tildeTrimReplace = "$1~", g("TILDE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAIN]}$`), g("TILDELOOSE", `^${c[u.LONETILDE]}${c[u.XRANGEPLAINLOOSE]}$`), g("LONECARET", "(?:\\^)"), g("CARETTRIM", `(\\s*)${c[u.LONECARET]}\\s+`, !0), t.caretTrimReplace = "$1^", g("CARET", `^${c[u.LONECARET]}${c[u.XRANGEPLAIN]}$`), g("CARETLOOSE", `^${c[u.LONECARET]}${c[u.XRANGEPLAINLOOSE]}$`), g("COMPARATORLOOSE", `^${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]})$|^$`), g("COMPARATOR", `^${c[u.GTLT]}\\s*(${c[u.FULLPLAIN]})$|^$`), g("COMPARATORTRIM", `(\\s*)${c[u.GTLT]}\\s*(${c[u.LOOSEPLAIN]}|${c[u.XRANGEPLAIN]})`, !0), t.comparatorTrimReplace = "$1$2$3", g("HYPHENRANGE", `^\\s*(${c[u.XRANGEPLAIN]})\\s+-\\s+(${c[u.XRANGEPLAIN]})\\s*$`), g("HYPHENRANGELOOSE", `^\\s*(${c[u.XRANGEPLAINLOOSE]})\\s+-\\s+(${c[u.XRANGEPLAINLOOSE]})\\s*$`), g("STAR", "(<|>)?=?\\s*\\*"), g("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), g("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$")
        },
        zBay: (e, t, r) => {
            const n = r("mKcJ");
            e.exports = (e, t, r) => n(e, t, ">", r)
        },
        UAcN: (e, t, r) => {
            const n = r("0Q6K");
            e.exports = (e, t, r) => (e = new n(e, r), t = new n(t, r), e.intersects(t, r))
        },
        QCYF: (e, t, r) => {
            const n = r("mKcJ");
            e.exports = (e, t, r) => n(e, t, "<", r)
        },
        "2eyZ": (e, t, r) => {
            const n = r("V5/F"),
                o = r("0Q6K");
            e.exports = (e, t, r) => {
                let i = null,
                    a = null,
                    s = null;
                try {
                    s = new o(t, r)
                } catch (l) {
                    return null
                }
                return e.forEach((e => {
                    s.test(e) && (i && -1 !== a.compare(e) || (i = e, a = new n(i, r)))
                })), i
            }
        },
        WTOh: (e, t, r) => {
            const n = r("V5/F"),
                o = r("0Q6K");
            e.exports = (e, t, r) => {
                let i = null,
                    a = null,
                    s = null;
                try {
                    s = new o(t, r)
                } catch (l) {
                    return null
                }
                return e.forEach((e => {
                    s.test(e) && (i && 1 !== a.compare(e) || (i = e, a = new n(i, r)))
                })), i
            }
        },
        "rik/": (e, t, r) => {
            const n = r("V5/F"),
                o = r("0Q6K"),
                i = r("Ng+Q");
            e.exports = (e, t) => {
                e = new o(e, t);
                let r = new n("0.0.0");
                if (e.test(r)) return r;
                if (r = new n("0.0.0-0"), e.test(r)) return r;
                r = null;
                for (let o = 0; o < e.set.length; ++o) {
                    const t = e.set[o];
                    let a = null;
                    t.forEach((e => {
                        const t = new n(e.semver.version);
                        switch (e.operator) {
                            case ">":
                                0 === t.prerelease.length ? t.patch++ : t.prerelease.push(0), t.raw = t.format();
                            case "":
                            case ">=":
                                a && !i(t, a) || (a = t);
                                break;
                            case "<":
                            case "<=":
                                break;
                            default:
                                throw new Error(`Unexpected operation: ${e.operator}`)
                        }
                    })), !a || r && !i(r, a) || (r = a)
                }
                return r && e.test(r) ? r : null
            }
        },
        mKcJ: (e, t, r) => {
            const n = r("V5/F"),
                o = r("i6j3"),
                {
                    ANY: i
                } = o,
                a = r("0Q6K"),
                s = r("71xT"),
                l = r("Ng+Q"),
                c = r("NgA/"),
                u = r("l/Q6"),
                d = r("ay0z");
            e.exports = (e, t, r, p) => {
                let h, g, f, b, m;
                switch (e = new n(e, p), t = new a(t, p), r) {
                    case ">":
                        h = l, g = u, f = c, b = ">", m = ">=";
                        break;
                    case "<":
                        h = c, g = d, f = l, b = "<", m = "<=";
                        break;
                    default:
                        throw new TypeError('Must provide a hilo val of "<" or ">"')
                }
                if (s(e, t, p)) return !1;
                for (let n = 0; n < t.set.length; ++n) {
                    const r = t.set[n];
                    let a = null,
                        s = null;
                    if (r.forEach((e => {
                            e.semver === i && (e = new o(">=0.0.0")), a = a || e, s = s || e, h(e.semver, a.semver, p) ? a = e : f(e.semver, s.semver, p) && (s = e)
                        })), a.operator === b || a.operator === m) return !1;
                    if ((!s.operator || s.operator === b) && g(e, s.semver)) return !1;
                    if (s.operator === m && f(e, s.semver)) return !1
                }
                return !0
            }
        },
        lfx9: (e, t, r) => {
            const n = r("71xT"),
                o = r("PCir");
            e.exports = (e, t, r) => {
                const i = [];
                let a = null,
                    s = null;
                const l = e.sort(((e, t) => o(e, t, r)));
                for (const o of l) {
                    n(o, t, r) ? (s = o, a || (a = o)) : (s && i.push([a, s]), s = null, a = null)
                }
                a && i.push([a, null]);
                const c = [];
                for (const [n, o] of i) n === o ? c.push(n) : o || n !== l[0] ? o ? n === l[0] ? c.push(`<=${o}`) : c.push(`${n} - ${o}`) : c.push(`>=${n}`) : c.push("*");
                const u = c.join(" || "),
                    d = "string" === typeof t.raw ? t.raw : String(t);
                return u.length < d.length ? u : t
            }
        },
        xQVu: (e, t, r) => {
            const n = r("0Q6K"),
                o = r("i6j3"),
                {
                    ANY: i
                } = o,
                a = r("71xT"),
                s = r("PCir"),
                l = [new o(">=0.0.0-0")],
                c = [new o(">=0.0.0")],
                u = (e, t, r) => {
                    if (e === t) return !0;
                    if (1 === e.length && e[0].semver === i) {
                        if (1 === t.length && t[0].semver === i) return !0;
                        e = r.includePrerelease ? l : c
                    }
                    if (1 === t.length && t[0].semver === i) {
                        if (r.includePrerelease) return !0;
                        t = c
                    }
                    const n = new Set;
                    let o, u, h, g, f, b, m;
                    for (const i of e) ">" === i.operator || ">=" === i.operator ? o = d(o, i, r) : "<" === i.operator || "<=" === i.operator ? u = p(u, i, r) : n.add(i.semver);
                    if (n.size > 1) return null;
                    if (o && u) {
                        if (h = s(o.semver, u.semver, r), h > 0) return null;
                        if (0 === h && (">=" !== o.operator || "<=" !== u.operator)) return null
                    }
                    for (const i of n) {
                        if (o && !a(i, String(o), r)) return null;
                        if (u && !a(i, String(u), r)) return null;
                        for (const e of t)
                            if (!a(i, String(e), r)) return !1;
                        return !0
                    }
                    let x = !(!u || r.includePrerelease || !u.semver.prerelease.length) && u.semver,
                        v = !(!o || r.includePrerelease || !o.semver.prerelease.length) && o.semver;
                    x && 1 === x.prerelease.length && "<" === u.operator && 0 === x.prerelease[0] && (x = !1);
                    for (const i of t) {
                        if (m = m || ">" === i.operator || ">=" === i.operator, b = b || "<" === i.operator || "<=" === i.operator, o)
                            if (v && i.semver.prerelease && i.semver.prerelease.length && i.semver.major === v.major && i.semver.minor === v.minor && i.semver.patch === v.patch && (v = !1), ">" === i.operator || ">=" === i.operator) {
                                if (g = d(o, i, r), g === i && g !== o) return !1
                            } else if (">=" === o.operator && !a(o.semver, String(i), r)) return !1;
                        if (u)
                            if (x && i.semver.prerelease && i.semver.prerelease.length && i.semver.major === x.major && i.semver.minor === x.minor && i.semver.patch === x.patch && (x = !1), "<" === i.operator || "<=" === i.operator) {
                                if (f = p(u, i, r), f === i && f !== u) return !1
                            } else if ("<=" === u.operator && !a(u.semver, String(i), r)) return !1;
                        if (!i.operator && (u || o) && 0 !== h) return !1
                    }
                    return !(o && b && !u && 0 !== h) && (!(u && m && !o && 0 !== h) && (!v && !x))
                },
                d = (e, t, r) => {
                    if (!e) return t;
                    const n = s(e.semver, t.semver, r);
                    return n > 0 ? e : n < 0 || ">" === t.operator && ">=" === e.operator ? t : e
                },
                p = (e, t, r) => {
                    if (!e) return t;
                    const n = s(e.semver, t.semver, r);
                    return n < 0 ? e : n > 0 || "<" === t.operator && "<=" === e.operator ? t : e
                };
            e.exports = (e, t, r = {}) => {
                if (e === t) return !0;
                e = new n(e, r), t = new n(t, r);
                let o = !1;
                e: for (const n of e.set) {
                    for (const e of t.set) {
                        const t = u(n, e, r);
                        if (o = o || null !== t, t) continue e
                    }
                    if (o) return !1
                }
                return !0
            }
        },
        LqX8: (e, t, r) => {
            const n = r("0Q6K");
            e.exports = (e, t) => new n(e, t).set.map((e => e.map((e => e.value)).join(" ").trim().split(" ")))
        },
        SPvU: (e, t, r) => {
            const n = r("0Q6K");
            e.exports = (e, t) => {
                try {
                    return new n(e, t).range || "*"
                } catch (r) {
                    return null
                }
            }
        },
        "6p3b": (e, t, r) => {
            "use strict";
            var n, o = r("fALc"),
                i = (n = o) && n.__esModule ? n : {
                    default: n
                };
            var a = -1;

            function s(e, t) {
                if (e === a) return i.default.transform(t)
            }
            t.Ay = s
        },
        M5j3: (e, t, r) => {
            "use strict";

            function n() {
                return n = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }, n.apply(this, arguments)
            }

            function o() {
                return n.apply(this, arguments)
            }
            r.d(t, {
                A: () => o
            })
        },
        "N/Z2": (e, t, r) => {
            "use strict";

            function n(e, t) {
                return t || (t = e.slice(0)), Object.freeze(Object.defineProperties(e, {
                    raw: {
                        value: Object.freeze(t)
                    }
                }))
            }
            r.d(t, {
                A: () => n
            })
        },
        TVlR: (e, t, r) => {
            "use strict";

            function n() {
                return {
                    onFetch: e => {
                        e.fetchFn = () => {
                            var t, r, n, a, s, l;
                            const c = null == (t = e.fetchOptions) || null == (r = t.meta) ? void 0 : r.refetchPage,
                                u = null == (n = e.fetchOptions) || null == (a = n.meta) ? void 0 : a.fetchMore,
                                d = null == u ? void 0 : u.pageParam,
                                p = "forward" === (null == u ? void 0 : u.direction),
                                h = "backward" === (null == u ? void 0 : u.direction),
                                g = (null == (s = e.state.data) ? void 0 : s.pages) || [],
                                f = (null == (l = e.state.data) ? void 0 : l.pageParams) || [];
                            let b = f,
                                m = !1;
                            const x = e.options.queryFn || (() => Promise.reject("Missing queryFn")),
                                v = (e, t, r, n) => (b = n ? [t, ...b] : [...b, t], n ? [r, ...e] : [...e, r]),
                                y = (t, r, n, o) => {
                                    if (m) return Promise.reject("Cancelled");
                                    if ("undefined" === typeof n && !r && t.length) return Promise.resolve(t);
                                    const i = {
                                        queryKey: e.queryKey,
                                        pageParam: n,
                                        meta: e.options.meta
                                    };
                                    var a;
                                    a = i, Object.defineProperty(a, "signal", {
                                        enumerable: !0,
                                        get: () => {
                                            var t, r;
                                            return null != (t = e.signal) && t.aborted ? m = !0 : null == (r = e.signal) || r.addEventListener("abort", (() => {
                                                m = !0
                                            })), e.signal
                                        }
                                    });
                                    const s = x(i);
                                    return Promise.resolve(s).then((e => v(t, n, e, o)))
                                };
                            let E;
                            if (g.length)
                                if (p) {
                                    const t = "undefined" !== typeof d,
                                        r = t ? d : o(e.options, g);
                                    E = y(g, t, r)
                                } else if (h) {
                                const t = "undefined" !== typeof d,
                                    r = t ? d : i(e.options, g);
                                E = y(g, t, r, !0)
                            } else {
                                b = [];
                                const t = "undefined" === typeof e.options.getNextPageParam;
                                E = !c || !g[0] || c(g[0], 0, g) ? y([], t, f[0]) : Promise.resolve(v([], f[0], g[0]));
                                for (let r = 1; r < g.length; r++) E = E.then((n => {
                                    if (!c || !g[r] || c(g[r], r, g)) {
                                        const i = t ? f[r] : o(e.options, n);
                                        return y(n, t, i)
                                    }
                                    return Promise.resolve(v(n, f[r], g[r]))
                                }))
                            } else E = y([]);
                            return E.then((e => ({
                                pages: e,
                                pageParams: b
                            })))
                        }
                    }
                }
            }

            function o(e, t) {
                return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }

            function i(e, t) {
                return null == e.getPreviousPageParam ? void 0 : e.getPreviousPageParam(t[0], t)
            }

            function a(e, t) {
                if (e.getNextPageParam && Array.isArray(t)) {
                    const r = o(e, t);
                    return "undefined" !== typeof r && null !== r && !1 !== r
                }
            }

            function s(e, t) {
                if (e.getPreviousPageParam && Array.isArray(t)) {
                    const r = i(e, t);
                    return "undefined" !== typeof r && null !== r && !1 !== r
                }
            }
            r.d(t, {
                PL: () => n,
                RQ: () => s,
                rB: () => a
            })
        }
    }
]);
//# debugId=021a4479-fea1-5376-be3d-53a39295b73a