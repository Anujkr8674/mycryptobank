! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "41504ea6-17df-5135-a297-838d2308b5d8")
    } catch (e) {}
}();
(self.webpackChunkbroker_ui = self.webpackChunkbroker_ui || []).push([
    [6593], {
        fix3: (t, e, n) => {
            "use strict";
            n.d(e, {
                Y: () => o
            });
            var r = n("k/Mm");

            function o() {
                const t = document.getElementById(r.CH);
                return t && t.textContent ? JSON.parse(t.textContent) : {
                    ssr: !1,
                    pageData: {},
                    filesByRoutId: {},
                    publicPath: "/",
                    runtimeConfig: {}
                }
            }
        },
        NVnN: (t, e, n) => {
            "use strict";
            n.d(e, {
                K: () => i
            });
            var r = n("fix3");
            const o = Object.prototype.hasOwnProperty;

            function i(t, e) {
                const {
                    pageData: n = {}
                } = (0, r.Y)();
                return o.call(n, t) ? n[t] : e
            }
        },
        JtFa: (t, e, n) => {
            "use strict";
            n.d(e, {
                K: () => o,
                l: () => i
            });
            var r = n("VyXn");
            const o = "loader",
                i = (0, r.NP)({
                    state: {
                        dataByRouteId: {}
                    },
                    actions: {
                        setDatas(t) {
                            this.dataByRouteId = (0, r.IG)(Object.assign(Object.assign({}, this.dataByRouteId), t))
                        }
                    },
                    views: {
                        getAllData() {
                            return this.dataByRouteId
                        }
                    }
                })
        },
        UCWY: (t, e, n) => {
            "use strict";
            n.d(e, {
                yO: () => E,
                Uu: () => k,
                l1: () => S,
                EI: () => x,
                H7: () => O
            });
            var r = function(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            };
            const o = () => {
                    let t = [];
                    return {
                        use: (...e) => {
                            t.push(...e)
                        },
                        run: (...e) => t.map((t => t(...e))),
                        clear: () => {
                            t = []
                        },
                        type: "SyncHook"
                    }
                },
                i = () => {
                    let t = [];
                    return {
                        use: (...e) => {
                            t.push(...e)
                        },
                        run: (...e) => {
                            for (let n = 0; n < t.length; n++) {
                                const r = (0, t[n])(...e);
                                if (r) return r
                            }
                        },
                        clear: () => {
                            t = []
                        },
                        type: "SyncBailHook"
                    }
                },
                s = () => {
                    let t = [];
                    return {
                        use: (...e) => {
                            t.push(...e)
                        },
                        run: (...e) => {
                            let [n, ...r] = e;
                            for (let o = 0; o < t.length; o++) {
                                const e = (0, t[o])(n, ...r);
                                void 0 !== e && (n = e)
                            }
                            return n
                        },
                        clear: () => {
                            t = []
                        },
                        type: "SyncWaterfallHook"
                    }
                },
                a = () => {
                    let t = [];
                    return {
                        use: (...e) => {
                            t.push(...e)
                        },
                        run: (...e) => r(void 0, void 0, void 0, (function*() {
                            return yield Promise.all(t.map((t => t(...e))))
                        })),
                        clear: () => {
                            t = []
                        },
                        type: "AsyncParallelHook"
                    }
                },
                c = () => {
                    let t = [];
                    return {
                        use: (...e) => {
                            t.push(...e)
                        },
                        run: (...e) => r(void 0, void 0, void 0, (function*() {
                            const n = [];
                            for (let r = 0; r < t.length; r++) {
                                const o = t[r],
                                    i = yield o(...e);
                                n.push(i)
                            }
                            return n
                        })),
                        clear: () => {
                            t = []
                        },
                        type: "AsyncSeriesHook"
                    }
                },
                u = () => {
                    let t = [];
                    return {
                        use: (...e) => {
                            t.push(...e)
                        },
                        run: (...e) => r(void 0, void 0, void 0, (function*() {
                            for (let n = 0; n < t.length; n++) {
                                const r = t[n],
                                    o = yield r(...e);
                                if (void 0 !== o) return o
                            }
                        })),
                        clear: () => {
                            t = []
                        },
                        type: "AsyncSeriesHook"
                    }
                },
                l = () => {
                    let t = [];
                    return {
                        use: (...e) => {
                            t.push(...e)
                        },
                        run: (...e) => r(void 0, void 0, void 0, (function*() {
                            let [n, ...r] = e;
                            for (let e = 0; e < t.length; e++) {
                                const o = t[e],
                                    i = yield o(n, ...r);
                                void 0 !== i && (n = i)
                            }
                            return n
                        })),
                        clear: () => {
                            t = []
                        },
                        type: "AsyncSeriesWaterfallHook"
                    }
                },
                h = t => {
                    const e = new Map;
                    t.forEach((t => {
                        e.has(t.group) || e.set(t.group, []), e.get(t.group).push(t)
                    }));
                    const n = Array.from(e.keys()).sort(((t, e) => t - e)),
                        r = [];
                    return n.forEach((t => {
                        r.push(...(t => {
                            const e = new Map,
                                n = new Map,
                                r = (t, e) => {
                                    n.has(e) || n.set(e, new Set), n.get(e).add(t)
                                };
                            t.forEach((t => {
                                e.set(t.name, t)
                            })), t.forEach((t => {
                                n.has(t.name) || n.set(t.name, new Set), t.before && t.before.forEach((n => {
                                    e.has(n) && r(t.name, n)
                                })), t.after && t.after.forEach((n => {
                                    e.has(n) && r(n, t.name)
                                }))
                            }));
                            const o = [];
                            for (; n.size > 0;) {
                                let t = !1;
                                if (n.forEach(((r, i) => {
                                        0 === r.size && (t = !0, o.push(e.get(i)), n.delete(i), n.forEach((t => {
                                            t.delete(i)
                                        })))
                                    })), !t) throw new Error(`Plugin circular dependency detected: ${Array.from(n.keys()).join(", ")}. Please ensure the plugins have correct 'before' and 'after' property.`)
                            }
                            return o
                        })(e.get(t)))
                    })), r
                },
                f = {
                    name: "untitled",
                    before: [],
                    after: [],
                    conflict: [],
                    required: [],
                    group: 0
                },
                p = "PLUGIN_SYMBOL",
                d = t => t && t.hasOwnProperty(p) && t.PLUGIN_SYMBOL === p;
            const y = t => {
                const e = {};
                for (const n in t) {
                    const r = t[n];
                    switch (null === r || void 0 === r ? void 0 : r.type) {
                        case "SyncHook":
                            e[n] = o();
                            break;
                        case "SyncBailHook":
                            e[n] = i();
                            break;
                        case "SyncWaterfallHook":
                            e[n] = s();
                            break;
                        case "AsyncParallelHook":
                            e[n] = a();
                            break;
                        case "AsyncSeriesHook":
                            e[n] = c();
                            break;
                        case "AsyncSeriesBailHook":
                            e[n] = u();
                            break;
                        case "AsyncSeriesWaterfallHook":
                            e[n] = l()
                    }
                }
                return e
            };

            function m(t, e = {}) {
                return Object.assign(Object.assign(Object.assign(Object.assign({}, f), {
                    name: `plugin-id-${"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}`
                }), e), {
                    handlers: t,
                    PLUGIN_SYMBOL: p
                })
            }
            const g = (t, e = !0) => {
                const n = o(),
                    r = Object.assign(Object.assign({}, y(t)), {
                        setup: n
                    });
                let i, s = [],
                    a = {},
                    c = {},
                    u = !1;
                const l = () => {
                        (t => {
                            const e = new Set;
                            for (const n of t) {
                                if ("string" !== typeof n.name) throw new Error("Plugin name must be string type.");
                                if (!n.name) throw new Error("Plugin name must be non-empty string.");
                                if (e.has(n.name)) throw new Error(`Plugin name duplication detected: ${n.name}.`);
                                if (e.add(n.name), n.conflict)
                                    for (const e of n.conflict)
                                        for (const r of t)
                                            if (e === r.name) throw new Error(`Plugin conflict detected: ${n.name} has conflict with ${r.name}.`);
                                if (n.required)
                                    for (const e of n.required)
                                        if (!t.some((t => t.name === e))) throw new Error(`Plugin missing detected: ${e} is required by ${n.name}.`)
                            }
                        })(s), s = h(s), s.forEach((t => {
                            const e = t.handlers;
                            let n;
                            for (n in e) a[n] || (a[n] = []), a[n].push(e[n])
                        }))
                    },
                    f = r,
                    p = t => {
                        const e = y(t);
                        for (const n in e) r[n] ? console.log("has been added", n) : (r[n] = e[n], c[n] && delete c[n])
                    },
                    d = t => {
                        if (c[t]) return c[t];
                        const e = g(t);
                        return c[t] = e, e
                    },
                    g = t => {
                        let n = !1;
                        const o = r[t],
                            s = a[t] || [];
                        if (!o) return () => {};
                        return "setup" === t ? t => {
                            let e = !1;
                            n || (o.use(...s), o.use((() => {
                                e = !0
                            })), n = !0);
                            const r = Object.assign({}, t);
                            for (let n in r) "function" === typeof r[n] && (r[n] = (i = r[n], new Proxy(i, {
                                apply(t, n, r) {
                                    if (!e) return t.apply(n, r)
                                }
                            })));
                            var i;
                            return o.run(r)
                        } : (...r) => {
                            if (n || (o.use(...s), n = !0), e && !i) throw new Error(`Context not set. Hook ${String(t)} running failed.`);
                            return o.run(...r, i)
                        }
                    };
                return {
                    createPlugin: m,
                    usePlugin: (...t) => {
                        u || s.push(...t)
                    },
                    runner: new Proxy({}, {
                        get: (t, e) => (u || (l(), d("setup")({
                            addHooks: p
                        }), u = !0), d(e))
                    }),
                    clear: () => {
                        Object.values(r).forEach((t => {
                            t.clear()
                        })), s = [], a = {}, c = {}, u = !1
                    },
                    addHooks: p,
                    hooks: f,
                    setContext: t => {
                        i = t
                    },
                    getPlugins: () => s
                }
            };
            var v = function(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            };
            const _ = a(),
                b = c(),
                w = {
                    init: _,
                    appComponent: l(),
                    appContext: b,
                    dispose: a()
                },
                x = () => g(w, !1),
                {
                    createPluginBefore: S,
                    createPlugin: E,
                    createPluginAfter: k
                } = function() {
                    const t = (t, e = {}) => {
                        const {
                            name: n,
                            before: r,
                            after: o,
                            conflict: i,
                            required: s
                        } = e, a = {
                            group: t
                        };
                        return void 0 !== n && (a.name = n), void 0 !== r && (a.before = r), void 0 !== o && (a.after = o), void 0 !== i && (a.conflict = i), void 0 !== s && (a.required = s), a
                    };
                    return {
                        createPluginBefore: (e, n) => m(e, t(-1, n)),
                        createPlugin: (e, n) => m(e, t(0, n)),
                        createPluginAfter: (e, n) => m(e, t(1, n))
                    }
                }(),
                O = (t, e) => v(void 0, void 0, void 0, (function*() {
                    for (const [n, r] of e) {
                        let e;
                        r && (e = JSON.parse(r)), d(n) ? t.usePlugin(n) : t.usePlugin(n(e))
                    }
                }))
        },
        Dz1D: (t, e) => {
            "use strict";
            e.PC = function() {
                return Object.assign(Object.assign({}, i() || {}), o() || {})
            }, e.UB = function(t) {
                n = t
            };
            Symbol.for("shuvi_server_runtime_config"), Symbol.for("shuvi_client_runtime_config");
            let n, r;

            function o() {
                return n
            }

            function i() {
                return r
            }
        },
        BK9r: (t, e, n) => {
            "use strict";
            n.d(e, {
                N_: () => O,
                Ix: () => w,
                zA: () => l,
                Tp: () => E,
                K7: () => p,
                $P: () => d,
                z7: () => b,
                Zp: () => m,
                g: () => g,
                x$: () => v,
                rd: () => _
            });
            var r = n("wcIl"),
                o = n("DTvD");
            const i = t => t;

            function s(t, e) {
                if (!t) {
                    "undefined" !== typeof console && console.warn(e);
                    try {
                        throw new Error(e)
                    } catch (n) {}
                }
            }
            var a = n("IJ96"),
                c = n.n(a),
                u = n("t2HS");
            const l = o.createContext(null);
            const h = o.createContext(null);
            const f = o.createContext({
                depth: 0,
                params: i({}),
                pathname: "",
                route: null
            });

            function p() {
                return (0, o.useContext)(h)
            }

            function d(t) {
                c()(y(), "useHref() may be used only in the context of a <Router> component.");
                const {
                    router: e
                } = (0, o.useContext)(l), n = v(t);
                return e.resolve(n).href
            }

            function y() {
                return null != (0, o.useContext)(l)
            }

            function m() {
                c()(y(), "useNavigate() may be used only in the context of a <Router> component.");
                const {
                    router: t
                } = (0, o.useContext)(l), {
                    pathname: e
                } = (0, o.useContext)(f), n = o.useRef(!1);
                return o.useEffect((() => {
                    n.current = !0
                })), o.useCallback(((r, o = {}) => {
                    if (n.current)
                        if ("number" === typeof r) t.go(r);
                        else {
                            let {
                                path: n
                            } = t.resolve(r, e);
                            (o.replace ? t.replace : t.push).call(t, n, o.state)
                        }
                    else s(!1, "You should call navigate() in a useEffect, not when your component is first rendered.")
                }), [t, e])
            }

            function g() {
                return (0, o.useContext)(h).params
            }

            function v(t) {
                const {
                    router: e
                } = (0, o.useContext)(l), {
                    pathname: n
                } = (0, o.useContext)(f);
                return o.useMemo((() => e.resolve(t, n).path), [t, n])
            }

            function _() {
                return c()(y(), "useRouter() may be used only in the context of a <Router> component."), (0, o.useContext)(l).router
            }

            function b() {
                return (0, o.useContext)(f)
            }

            function w({
                children: t = null,
                static: e = !1,
                router: n
            }) {
                c()(!y(), "You cannot render a <Router> inside another <Router>. You never need more than one.");
                const r = o.useMemo((() => ({
                        static: e,
                        router: n
                    })), [e, n]),
                    {
                        subscribe: i,
                        getSnapshot: s
                    } = o.useMemo((() => ({
                        subscribe: t => n.listen(t),
                        getSnapshot: () => n.current
                    })), [n]),
                    a = (0, u.useSyncExternalStore)(i, s, s);
                return o.createElement(l.Provider, {
                    value: r
                }, o.createElement(h.Provider, {
                    children: t,
                    value: a
                }))
            }
            const x = o.createElement(E, null);

            function S({
                match: t,
                depth: e,
                parentPathname: n,
                parentParams: s
            }) {
                const {
                    route: a,
                    params: c,
                    pathname: u
                } = t, l = o.useMemo((() => a.component ? o.createElement(a.component, a.props) : x), [a.component, a.props, x]);
                return o.createElement(f.Provider, {
                    children: l,
                    value: {
                        depth: e + 1,
                        params: i(Object.assign(Object.assign({}, s), c)),
                        pathname: (0, r.HS)([n, u]),
                        route: a
                    }
                })
            }

            function E() {
                let {
                    depth: t,
                    pathname: e,
                    params: n
                } = o.useContext(f);
                const {
                    matches: r
                } = p();
                if (!r.length) return null;
                const i = r[t];
                return i ? o.createElement(S, {
                    match: i,
                    depth: t,
                    parentPathname: e,
                    parentParams: n
                }) : null
            }
            var k = function(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                }
                return n
            };
            const O = o.forwardRef((function(t, e) {
                var {
                    onClick: n,
                    replace: i = !1,
                    state: s,
                    target: a,
                    to: c
                } = t, u = k(t, ["onClick", "replace", "state", "target", "to"]);
                let l = d(c),
                    h = m();
                const f = p();
                let y = v(c);
                return o.createElement("a", Object.assign({}, u, {
                    href: l,
                    onClick: function(t) {
                        if (n && n(t), !t.defaultPrevented && 0 === t.button && (!a || "_self" === a) && ! function(t) {
                                return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
                            }(t)) {
                            t.preventDefault();
                            let e = !!i || (f && (0, r.uj)(f)) === (0, r.uj)(y);
                            h(c, {
                                replace: e,
                                state: s
                            })
                        }
                    },
                    ref: e,
                    target: a
                }))
            }))
        },
        "8dyb": (t, e, n) => {
            "use strict";
            var r = n("DTvD");
            var o = "function" === typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
                },
                i = r.useState,
                s = r.useEffect,
                a = r.useLayoutEffect,
                c = r.useDebugValue;

            function u(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var n = e();
                    return !o(t, n)
                } catch (r) {
                    return !0
                }
            }
            var l = "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var n = e(),
                    r = i({
                        inst: {
                            value: n,
                            getSnapshot: e
                        }
                    }),
                    o = r[0].inst,
                    l = r[1];
                return a((function() {
                    o.value = n, o.getSnapshot = e, u(o) && l({
                        inst: o
                    })
                }), [t, n, e]), s((function() {
                    return u(o) && l({
                        inst: o
                    }), t((function() {
                        u(o) && l({
                            inst: o
                        })
                    }))
                }), [t]), c(n), n
            };
            e.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        t2HS: (t, e, n) => {
            "use strict";
            t.exports = n("8dyb")
        },
        oUj1: (t, e, n) => {
            "use strict";
            var r = n("hTvQ");
            e.createRoot = r.createRoot, e.hydrateRoot = r.hydrateRoot
        },
        V0mm: (t, e, n) => {
            "use strict";
            n.d(e, {
                ab: () => h,
                fn: () => d,
                g$: () => l
            });
            var r = n("DTvD"),
                o = n.n(r),
                i = n("VyXn"),
                s = n("dod3"),
                a = n("hTvQ");
            const c = (t, e) => (n, o, i, a) => {
                    const c = (0, r.useRef)(i),
                        {
                            modelInstance: u,
                            subscribe: l
                        } = function(t, e, n, o) {
                            const {
                                modelInstance: i,
                                subscribe: s
                            } = (0, r.useMemo)((() => {
                                const r = n.getModel(t, e);
                                return {
                                    modelInstance: r,
                                    subscribe: t => o.addSubscribe(r, t)
                                }
                            }), [t, n]);
                            return {
                                modelInstance: i,
                                subscribe: s
                            }
                        }(n, o, t, e);
                    return c.current ? function(t, e, n, o) {
                        const i = (0, r.useRef)(void 0),
                            a = (0, r.useMemo)((() => {
                                const e = i.current;
                                return e && e.destory(), i.current = t.$createView(n)
                            }), [t, ...o || [n]]),
                            c = (0, s.useSyncExternalStore)(e, a, a);
                        return (0, r.useDebugValue)(c), c
                    }(u, l, i, a) : function(t, e) {
                        const n = (0, r.useMemo)((() => () => t.$getApi()), [t]),
                            o = (0, s.useSyncExternalStore)(e, n, n);
                        return (0, r.useDebugValue)(o), o
                    }(u, l)
                },
                u = () => {
                    const t = new WeakMap,
                        e = new WeakMap,
                        n = function(n, r) {
                            const o = t.get(n);
                            if (o && (o.delete(r), 0 === o.size && e.has(n))) {
                                t.delete(n);
                                const r = e.get(n);
                                r && (r(), e.delete(n))
                            }
                        },
                        r = function(e) {
                            const n = Array.from(t.get(e) || []);
                            (0, a.unstable_batchedUpdates)((() => {
                                let t = n.pop();
                                for (; t;) t(), t = n.pop()
                            }))
                        };
                    return {
                        addSubscribe: function(o, i) {
                            let s = t.get(o);
                            if (s) s.add(i);
                            else {
                                s = new Set, s.add(i);
                                const n = o.$subscribe((function() {
                                    r(o)
                                }));
                                t.set(o, s), e.set(o, n)
                            }
                            return function() {
                                return n(o, i)
                            }
                        },
                        triggerSubscribe: r
                    }
                };
            const l = function(t) {
                    const e = (0, r.createContext)(null);
                    const n = () => (0, r.useContext)(e);
                    return {
                        Provider: function(n) {
                            const {
                                children: s,
                                store: a
                            } = n, c = (0, r.useMemo)((function() {
                                let e;
                                e = a || (0, i.Sz)(t);
                                return {
                                    store: e,
                                    batchManager: u()
                                }
                            }), [a]), [l, h] = (0, r.useState)(c);
                            return (0, r.useEffect)((function() {
                                h(c)
                            }), [a]), o().createElement(e.Provider, {
                                value: l
                            }, s)
                        },
                        useSharedModel: (t, e, o, i) => {
                            const {
                                store: s,
                                batchManager: a
                            } = n();
                            return (0, r.useMemo)((() => c(s, a)), [s, a])(t, e, o, i)
                        },
                        useStaticModel: (t, e) => {
                            const {
                                store: o
                            } = n();
                            return (0, r.useMemo)((() => {
                                return t = o, (e, n) => {
                                    const o = (0, r.useMemo)((() => t.getModel(e, n)), [e, t]);
                                    return (0, r.useMemo)((() => o), [o])
                                };
                                var t
                            }), [o])(t, e)
                        }
                    }
                },
                {
                    Provider: h,
                    useSharedModel: f,
                    useStaticModel: p
                } = l({
                    plugins: []
                }),
                d = (t, e, n, o) => "string" === typeof t ? f(t, e, n, o) : ((t, e, n) => {
                    const o = (0, r.useRef)(null);
                    return o.current || (o.current = {
                        douraStore: (0, i.Sz)(),
                        batchManager: u()
                    }), (0, r.useMemo)((function() {
                        return c(o.current.douraStore, o.current.batchManager)
                    }), [o.current.douraStore, o.current.batchManager])("anonymous model", t, e, n)
                })(t, e, n)
        },
        "1kr1": (t, e, n) => {
            "use strict";
            var r = n("DTvD");
            var o = "function" === typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
                },
                i = r.useState,
                s = r.useEffect,
                a = r.useLayoutEffect,
                c = r.useDebugValue;

            function u(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var n = e();
                    return !o(t, n)
                } catch (r) {
                    return !0
                }
            }
            var l = "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var n = e(),
                    r = i({
                        inst: {
                            value: n,
                            getSnapshot: e
                        }
                    }),
                    o = r[0].inst,
                    l = r[1];
                return a((function() {
                    o.value = n, o.getSnapshot = e, u(o) && l({
                        inst: o
                    })
                }), [t, n, e]), s((function() {
                    return u(o) && l({
                        inst: o
                    }), t((function() {
                        u(o) && l({
                            inst: o
                        })
                    }))
                }), [t]), c(n), n
            };
            e.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        dod3: (t, e, n) => {
            "use strict";
            t.exports = n("1kr1")
        },
        UyHI: (t, e, n) => {
            "use strict";
            var r = n("DTvD"),
                o = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function u(t, e, n) {
                var r, i = {},
                    u = null,
                    l = null;
                for (r in void 0 !== n && (u = "" + n), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (l = e.ref), e) s.call(e, r) && !c.hasOwnProperty(r) && (i[r] = e[r]);
                if (t && t.defaultProps)
                    for (r in e = t.defaultProps) void 0 === i[r] && (i[r] = e[r]);
                return {
                    $$typeof: o,
                    type: t,
                    key: u,
                    ref: l,
                    props: i,
                    _owner: a.current
                }
            }
            e.Fragment = i, e.jsx = u, e.jsxs = u
        },
        TrCV: (t, e, n) => {
            "use strict";
            t.exports = n("UyHI")
        },
        F2HG: (t, e, n) => {
            "use strict";
            var r = n("DTvD");
            var o = "function" === typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
                },
                i = r.useState,
                s = r.useEffect,
                a = r.useLayoutEffect,
                c = r.useDebugValue;

            function u(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var n = e();
                    return !o(t, n)
                } catch (r) {
                    return !0
                }
            }
            var l = "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var n = e(),
                    r = i({
                        inst: {
                            value: n,
                            getSnapshot: e
                        }
                    }),
                    o = r[0].inst,
                    l = r[1];
                return a((function() {
                    o.value = n, o.getSnapshot = e, u(o) && l({
                        inst: o
                    })
                }), [t, n, e]), s((function() {
                    return u(o) && l({
                        inst: o
                    }), t((function() {
                        u(o) && l({
                            inst: o
                        })
                    }))
                }), [t]), c(n), n
            };
            e.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        "8ptQ": (t, e, n) => {
            "use strict";
            t.exports = n("F2HG")
        },
        wcIl: (t, e, n) => {
            "use strict";
            n.d(e, {
                zR: () => $,
                TM: () => z,
                aE: () => Y,
                HS: () => _,
                WN: () => p,
                uj: () => S
            });
            const r = "[^/]+?",
                o = {
                    sensitive: !1,
                    strict: !1,
                    start: !0,
                    end: !0
                },
                i = {
                    type: 3,
                    value: "*",
                    regexp: "(?:/((?:.*?)(?:/(?:.*?))*))?$"
                },
                s = Object.assign(Object.assign({}, i), {
                    regexp: "(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))?$"
                }),
                a = /[.+*?^${}()[\]/\\]/g;

            function c(t, e, n) {
                var c;
                const u = Object.assign({}, o, e);
                let l = i;
                u.strict && (l = s);
                let h = !1;
                const f = t[t.length - 1];
                if (f) {
                    const e = f[f.length - 1];
                    e && 0 === e.type && (e.value === l.value ? (h = !0, f.pop(), 0 === f.length && t.pop(), t.push([l])) : e.value.endsWith(l.value) && (h = !0, console.warn(`Route path "${e.value}" will be treated as if it were "${e.value.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.value.replace(/\*$/,"/*")}".`), e.value = e.value.slice(0, -1), t.push([l])))
                }
                let p = [],
                    d = u.start ? "^" : "";
                const y = [];
                for (const o of t) {
                    const t = o.length ? [] : [90];
                    u.strict && !o.length && (d += "/");
                    for (let e = 0; e < o.length; e++) {
                        const n = o[e];
                        let i = 40 + (u.sensitive ? .25 : 0);
                        if (0 === n.type) e || (d += "/"), d += n.value.replace(a, "\\$&"), i += 40;
                        else if (1 === n.type) {
                            const {
                                value: t,
                                repeatable: s,
                                optional: a,
                                regexp: c
                            } = n;
                            y.push({
                                name: t,
                                repeatable: s,
                                optional: a
                            });
                            const l = c || r;
                            if (l !== r) {
                                i += 10;
                                try {
                                    new RegExp(`(${l})`)
                                } catch (g) {
                                    throw new Error(`Invalid custom RegExp for param "${t}" (${l}): ` + g.message)
                                }
                            }
                            let h = s ? `((?:${l})(?:/(?:${l}))*)` : `(${l})`;
                            e || (h = a && o.length < 2 ? `(?:/${h})` : "/" + h), a && (h += "?"), d += h, u.end || (d += "(?=/|$)"), i += 20, a && (i += -8), s && (i += -20), ".*" === l && (i += -50)
                        } else if (3 === n.type) {
                            const {
                                value: t,
                                regexp: e
                            } = n;
                            y.push({
                                name: t,
                                repeatable: !1,
                                optional: !1
                            }), d += e, i += 20, i += -41
                        }
                        t.push(i)
                    }
                    p.push(t)
                }
                if (u.strict && u.end) {
                    const t = p.length - 1;
                    p[t][p[t].length - 1] += .7000000000000001
                }
                h || (u.strict || (d += "/*?"), u.end ? d += "$" : u.strict && (d += "(?:/*|$)"));
                const m = new RegExp(d, u.sensitive ? "" : "i");
                if (null === n || void 0 === n ? void 0 : n.routes) {
                    "" === (null === (c = n.routes[n.routes.length - 1]) || void 0 === c ? void 0 : c.path) && p.push([.1])
                }
                return {
                    re: m,
                    score: p,
                    keys: y,
                    parse: function(t) {
                        const e = t.match(m),
                            n = {};
                        if (!e) return null;
                        for (let r = 1; r < e.length; r++) {
                            const t = e[r] || "",
                                o = y[r - 1];
                            if (o.name === l.value) {
                                n[o.name] = t;
                                break
                            }
                            o.repeatable ? n[o.name] = t ? t.split("/") : [] : n[o.name] = t
                        }
                        return {
                            match: e[0],
                            params: n
                        }
                    },
                    stringify: function(e) {
                        let n = "",
                            r = !1;
                        for (const o of t) {
                            r && n.endsWith("/") || (n += "/"), r = !1;
                            for (const t of o)
                                if (0 === t.type) n += t.value;
                                else if (1 === t.type) {
                                const {
                                    value: i,
                                    repeatable: s,
                                    optional: a
                                } = t, c = e[i];
                                if (Array.isArray(c) && !s) throw new Error(`Provided param "${i}" is an array but it is not repeatable (* or + modifiers)`);
                                if (void 0 === c && !a) throw new Error(`Missing required param "${i}"`);
                                const u = Array.isArray(c) ? c.join("/") : c || "";
                                !u && a && o.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0), n += u
                            }
                        }
                        return n
                    }
                }
            }

            function u(t, e) {
                let n = 0;
                for (; n < t.length && n < e.length;) {
                    const r = e[n] - t[n];
                    if (r) return r;
                    n++
                }
                return t.length < e.length ? 1 === t.length && 80 === t[0] ? -1 : 1 : t.length > e.length ? 1 === e.length && 80 === e[0] ? 1 : -1 : 0
            }
            const l = {
                    type: 0,
                    value: ""
                },
                h = /[a-zA-Z0-9_]/;

            function f(t) {
                if (!t) return [
                    []
                ];
                if ("/" === t) return [
                    [l]
                ];

                function e(t) {
                    throw new Error(`ERR (${n})/"${u}": ${t}`)
                }
                t.startsWith("/") || (t = t.replace(/^\/*/, "/"));
                let n = 0,
                    r = n;
                const o = [];
                let i;

                function s() {
                    i && o.push(i), i = []
                }
                let a, c = 0,
                    u = "",
                    f = "";

                function p() {
                    u && (0 === n ? i.push({
                        type: 0,
                        value: u
                    }) : 1 === n || 2 === n || 3 === n ? (i.length > 1 && ("*" === a || "+" === a) && e(`A repeatable param (${u}) must be alone in its segment. `), i.push({
                        type: 1,
                        value: u,
                        regexp: f,
                        repeatable: "*" === a || "+" === a,
                        optional: "*" === a || "?" === a
                    })) : e("Invalid state to consume buffer"), u = "")
                }

                function d() {
                    u += a
                }
                for (; c < t.length;)
                    if (a = t[c++], "\\" !== a || 2 === n) switch (n) {
                        case 0:
                            "/" === a ? (u && p(), s()) : ":" === a ? (p(), n = 1) : d();
                            break;
                        case 4:
                            d(), n = r;
                            break;
                        case 1:
                            "(" === a ? n = 2 : h.test(a) ? d() : (p(), n = 0, "*" !== a && "?" !== a && "+" !== a && c--);
                            break;
                        case 2:
                            ")" === a ? "\\" == f[f.length - 1] ? f = f.slice(0, -1) + a : n = 3 : f += a;
                            break;
                        case 3:
                            p(), n = 0, "*" !== a && "?" !== a && "+" !== a && c--, f = "";
                            break;
                        default:
                            e("Unknown state")
                    } else r = n, n = 4;
                return 2 === n && e(`Unfinished custom RegExp for param "${u}"`), p(), s(), o
            }

            function p(t, e) {
                "string" === typeof t && (t = {
                    path: t
                });
                const {
                    path: n,
                    caseSensitive: r = !1,
                    end: o = !0
                } = t, i = c(f(n), {
                    strict: !1,
                    end: o,
                    sensitive: r
                }), s = i.parse(e);
                if (!s) return null;
                const {
                    keys: a = []
                } = i, {
                    match: u,
                    params: l
                } = s;
                return {
                    path: n,
                    pathname: u,
                    params: a.reduce(((t, e, n) => {
                        const r = e.name;
                        return t[r] = function(t, e, n) {
                            try {
                                return Array.isArray(t) ? t.map((t => decodeURIComponent(t.replace(/\+/g, " ")))) : decodeURIComponent(t.replace(/\+/g, " "))
                            } catch (r) {
                                return n || console.warn(`The value for the URL param "${e}" will not be decoded because the string "${t}" is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`), t
                            }
                        }(l[r], String(r), e.optional), t
                    }), {})
                }
            }

            function d() {
                let t = [];
                return {
                    get length() {
                        return t.length
                    },
                    toArray: () => t,
                    push: e => (t.push(e), function() {
                        t = t.filter((t => t !== e))
                    }),
                    call(...e) {
                        t.forEach((t => t && t(...e)))
                    }
                }
            }
            const y = t => t;

            function m(t, e) {
                if (!t) {
                    "undefined" !== typeof console && console.warn(e);
                    try {
                        throw new Error(e)
                    } catch (n) {}
                }
            }
            var g = n("oHTK");
            const v = t => t.replace(/\/\/+/g, "/"),
                _ = t => v(t.join("/")),
                b = t => v(t).split("/");

            function w(t) {
                return t || (t = "/"), "/" !== t.charAt(0) && (t = "/" + t), t.replace(/\/$/, "")
            }

            function x(t) {
                return g.parse(t)
            }

            function S({
                pathname: t = "/",
                search: e = "",
                hash: n = "",
                query: r = {}
            }, o) {
                if (!e) {
                    const t = g.stringify(r);
                    e = t ? `?${t}` : ""
                }
                const i = t + e + n;
                return o ? _([o, i]) : i
            }

            function E(t, e = "/") {
                let n = {
                    pathname: "",
                    search: "",
                    hash: "",
                    query: {}
                };
                if ("string" === typeof t) {
                    if (t) {
                        let e = t.indexOf("#");
                        e >= 0 && (n.hash = t.substr(e), t = t.substr(0, e));
                        let r = t.indexOf("?");
                        r >= 0 && (n.search = t.substr(r), n.query = x(n.search), t = t.substr(0, r)), t && (n.pathname = t)
                    }
                } else {
                    const e = t;
                    ["pathname", "search", "hash", "query"].forEach((t => {
                        const r = e[t];
                        null != r && (n[t] = r)
                    })), n.search ? n.query = x(n.search) : n.search = g.stringify(n.query)
                }
                const r = n.pathname;
                return n.pathname = r ? function(t, e) {
                    let n = b(e.replace(/\/+$/, ""));
                    return b(t).forEach((t => {
                        ".." === t ? n.length > 1 && n.pop() : "." !== t && n.push(t)
                    })), n.length > 1 ? _(n) : "/"
                }(r, r.startsWith("/") ? "/" : e) : e, n
            }

            function k(t, e) {
                return e && "/" !== e ? t.toLowerCase().startsWith(e.toLowerCase()) ? t.slice(e.length) || "/" : null : t
            }
            const O = "beforeunload";

            function C(t) {
                t.preventDefault(), t.returnValue = ""
            }

            function j(t, {
                basename: e,
                state: n = null,
                key: r,
                redirectedFrom: o
            } = {}) {
                const i = E(t),
                    s = k(i.pathname, e || "/");
                s && (i.pathname = s);
                const a = Boolean(e) && !s;
                return y(Object.assign(Object.assign({}, i), {
                    redirectedFrom: o,
                    notMatchBasename: a,
                    state: n,
                    key: r || Math.random().toString(36).substr(2, 8)
                }))
            }

            function I(t, e, {
                replace: n = !1
            } = {}) {
                const r = window.history;
                try {
                    n ? r.replaceState(t, "", e) : r.pushState(t, "", e)
                } catch (o) {
                    window.location[n ? "replace" : "assign"](e)
                }
            }

            function A(t, e) {
                I(t, e, {
                    replace: !0
                })
            }

            function P(t, e) {
                let n = t.push(e);
                return 1 === t.length && window.addEventListener(O, C),
                    function() {
                        n(), t.length || window.removeEventListener(O, C)
                    }
            }

            function T(t, e) {
                let n = t[1],
                    r = "/",
                    o = {},
                    i = [];
                for (let s = 0; s < n.length; ++s) {
                    let t = n[s],
                        a = "/" === r ? e : e.slice(r.length) || "/",
                        c = p({
                            path: t.path,
                            caseSensitive: t.caseSensitive,
                            end: s === n.length - 1
                        }, a);
                    if (!c) return null;
                    r = _([r, c.pathname]), o = Object.assign(Object.assign({}, o), c.params), i.push({
                        route: t,
                        pathname: r,
                        params: Object.freeze(o)
                    })
                }
                return i
            }

            function R(t) {
                if (t.length <= 1) return t;
                const e = t.map(((t, e) => {
                    const [n, r] = t;
                    return Object.assign(Object.assign({}, c(f(n), void 0, {
                        routes: r
                    })), {
                        path: n,
                        index: e
                    })
                }));
                e.sort(((t, e) => function(t, e) {
                    let n = 0;
                    const r = t.score,
                        o = e.score;
                    for (; n < r.length && n < o.length;) {
                        const t = u(r[n], o[n]);
                        if (t) return t;
                        n++
                    }
                    return o.length - r.length || t.index - e.index
                }(t, e)));
                const n = [];
                return e.forEach(((e, r) => {
                    const {
                        index: o
                    } = e;
                    n[r] = t[o]
                })), n
            }

            function D(t, e = [], n = "", r = [], o = []) {
                return t.forEach(((t, i) => {
                    let s;
                    s = "" === t.path ? n : _([n, t.path]);
                    let a = r.concat(t),
                        c = o.concat(i);
                    t.children && D(t.children, e, s, a, c), e.push([s, a, c])
                })), e
            }

            function N(t, e, n = "") {
                "string" === typeof e && (e = E(e));
                let r = e.pathname || "/";
                if (n) {
                    const t = k(r, w(n));
                    if (!t) return null;
                    r = t
                }
                let o = D(t);
                o = R(o);
                let i = null;
                for (let s = 0; null == i && s < o.length; ++s) i = T(o[s], r);
                return i
            }
            const L = "POP",
                M = "REPLACE";
            class F {
                constructor({
                    basename: t = ""
                } = {}) {
                    this.action = L, this.location = j("/"), this.doTransition = () => {}, this._index = 0, this._blockers = d(), this.basename = w(t)
                }
                back() {
                    this.go(-1)
                }
                forward() {
                    this.go(1)
                }
                resolve(t, e) {
                    const n = E(t, e);
                    return {
                        path: n,
                        href: S(n, this.basename)
                    }
                }
                transitionTo(t, {
                    onTransition: e,
                    onAbort: n,
                    action: r = "PUSH",
                    state: o = null,
                    redirectedFrom: i,
                    skipGuards: s
                }) {
                    const {
                        path: a
                    } = this.resolve(t, this.location.pathname), c = j(a, {
                        state: o,
                        redirectedFrom: i
                    });
                    this._blockers.length ? this._blockers.call({
                        action: r,
                        location: c,
                        retry: () => {
                            this.transitionTo(t, {
                                onTransition: e,
                                onAbort: n,
                                action: r,
                                state: o,
                                redirectedFrom: i,
                                skipGuards: s
                            })
                        }
                    }) : this.doTransition(t, (() => {
                        e({
                            location: c,
                            state: {
                                usr: c.state,
                                key: c.key,
                                idx: this._index + 1
                            },
                            url: this.resolve(c).href
                        }), this._updateState(r)
                    }), n, s, r === M, i)
                }
                _updateState(t) {
                    this.action = t, [this._index, this.location] = this.getIndexAndLocation()
                }
            }
            class H extends F {
                constructor({
                    basename: t
                } = {}) {
                    super({
                        basename: t
                    }), this._history = window.history, [this._index, this.location] = this.getIndexAndLocation();
                    const {
                        notMatchBasename: e
                    } = this.location;
                    if ((null == this._index || e) && (this._index = this._index || 0, this._history.replaceState(Object.assign(Object.assign({}, this._history.state), {
                            idx: this._index
                        }), "", e ? this.resolve(this.location).href : void 0)), e) {
                        const t = this._history.state || {};
                        this.location = j(this.location, {
                            state: t.usr || null,
                            key: t.key || "default"
                        })
                    }
                }
                push(t, {
                    state: e,
                    redirectedFrom: n
                } = {}) {
                    return this.transitionTo(t, {
                        state: e,
                        redirectedFrom: n,
                        onTransition({
                            state: t,
                            url: e
                        }) {
                            I(t, e)
                        }
                    })
                }
                replace(t, {
                    state: e,
                    redirectedFrom: n
                } = {}) {
                    return this.transitionTo(t, {
                        state: e,
                        action: M,
                        redirectedFrom: n,
                        onTransition({
                            state: t,
                            url: e
                        }) {
                            A(t, e)
                        }
                    })
                }
                go(t) {
                    this._history.go(t)
                }
                block(t) {
                    return P(this._blockers, t)
                }
                setup() {
                    let t = null;
                    window.addEventListener("popstate", (() => {
                        const e = this._index,
                            n = this._blockers;
                        if (t) n.call(t), t = null;
                        else {
                            let r = L,
                                [o, i] = this.getIndexAndLocation();
                            if (n.length)
                                if (null != o) {
                                    let n = e - o;
                                    n && (t = {
                                        action: r,
                                        location: i,
                                        retry: () => {
                                            this.go(-1 * n)
                                        }
                                    }, this.go(n))
                                } else m(!1, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
                            else this.transitionTo(i, {
                                onTransition: () => {},
                                action: r
                            })
                        }
                    }))
                }
                getIndexAndLocation() {
                    const {
                        pathname: t,
                        search: e,
                        hash: n
                    } = window.location, r = this._history.state || {};
                    return [r.idx, j({
                        pathname: t,
                        search: e,
                        hash: n
                    }, {
                        basename: this.basename,
                        state: r.usr || null,
                        key: r.key || "default"
                    })]
                }
            }

            function V(t, e) {
                return "#" + S(E(t), e)
            }
            class U extends F {
                constructor({
                    basename: t
                } = {}) {
                    super({
                        basename: t
                    }), this._history = window.history, [this._index, this.location] = this.getIndexAndLocation();
                    const {
                        notMatchBasename: e
                    } = this.location;
                    if ((null == this._index || e) && (this._index = this._index || 0, this._history.replaceState(Object.assign(Object.assign({}, this._history.state), {
                            idx: this._index
                        }), "", e ? this.resolve(this.location).href : void 0)), e) {
                        const t = this._history.state || {};
                        this.location = j(this.location, {
                            state: t.usr || null,
                            key: t.key || "default"
                        })
                    }
                }
                push(t, {
                    state: e,
                    redirectedFrom: n
                } = {}) {
                    return this.transitionTo(t, {
                        state: e,
                        redirectedFrom: n,
                        onTransition({
                            state: t,
                            url: e
                        }) {
                            I(t, e)
                        }
                    })
                }
                replace(t, {
                    state: e,
                    redirectedFrom: n
                } = {}) {
                    return this.transitionTo(t, {
                        state: e,
                        action: M,
                        redirectedFrom: n,
                        onTransition({
                            state: t,
                            url: e
                        }) {
                            A(t, e)
                        }
                    })
                }
                go(t) {
                    this._history.go(t)
                }
                block(t) {
                    return P(this._blockers, t)
                }
                resolve(t, e) {
                    const n = E(t, e);
                    return {
                        path: n,
                        href: V(n, this.basename)
                    }
                }
                setup() {
                    let t = null;
                    const e = () => {
                        const e = this._index,
                            n = this._blockers;
                        if (t) n.call(t), t = null;
                        else {
                            let r = L,
                                [o, i] = this.getIndexAndLocation();
                            if (n.length)
                                if (null != o) {
                                    let n = e - o;
                                    n && (t = {
                                        action: r,
                                        location: i,
                                        retry: () => {
                                            this.go(-1 * n)
                                        }
                                    }, this.go(n))
                                } else m(!1, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
                            else this.transitionTo(i, {
                                onTransition: () => {},
                                action: r
                            })
                        }
                    };
                    window.addEventListener("popstate", e), window.addEventListener("hashchange", (() => {
                        const [, t] = this.getIndexAndLocation();
                        S(t) !== S(this.location) && e()
                    }))
                }
                getIndexAndLocation() {
                    const {
                        pathname: t,
                        search: e,
                        hash: n
                    } = E(window.location.hash.substr(1)), r = this._history.state || {};
                    return [r.idx, j({
                        pathname: t,
                        search: e,
                        hash: n
                    }, {
                        basename: this.basename,
                        state: r.usr || null,
                        key: r.key || "default"
                    })]
                }
            }

            function $(t = {}) {
                return new H(t)
            }

            function z(t = {}) {
                return new U(t)
            }
            var q = n("Z2pg");

            function B(t, e = !1) {
                return t.map((t => {
                    const n = e ? "" : "/";
                    let r = Object.assign(Object.assign({}, t), {
                        caseSensitive: !!t.caseSensitive,
                        path: t.path || n
                    });
                    return t.children && (r.children = B(t.children, !0)), r
                }))
            }
            const G = {
                matches: [],
                params: {},
                pathname: "/",
                search: "",
                hash: "",
                key: "default",
                query: {},
                state: null,
                redirected: !1
            };
            class W {
                constructor({
                    history: t,
                    routes: e
                }) {
                    this._pending = null, this._cancleHandler = null, this._ready = !1, this._readyDefer = (0, q.r)(), this._listeners = d(), this._beforeEachs = d(), this._beforeResolves = d(), this._afterEachs = d(), this.init = () => {
                        const t = () => this._history.setup(),
                            e = this._getCurrent();
                        return this._history.transitionTo(e, {
                            onTransition: t,
                            onAbort: t,
                            skipGuards: Boolean(e.redirected)
                        }), this
                    }, this.push = (t, e) => this._history.push(t, {
                        state: e
                    }), this.replace = (t, e) => this._history.replace(t, {
                        state: e
                    }), this.go = t => {
                        this._history.go(t)
                    }, this.back = () => {
                        this._history.back()
                    }, this.forward = () => {
                        this._history.forward()
                    }, this.block = t => this._history.block(t), this.listen = t => this._listeners.push(t), this.beforeEach = t => this._beforeEachs.push(t), this.beforeResolve = t => this._beforeResolves.push(t), this.afterEach = t => this._afterEachs.push(t), this.resolve = (t, e) => this._history.resolve(t, e), this.match = t => {
                        const {
                            _routes: e
                        } = this;
                        return N(e, t) || []
                    }, this.replaceRoutes = t => {
                        this._ready && (this._ready = !1, this._readyDefer = (0, q.r)()), this._cancleHandler && (this._cancleHandler(), this._cancleHandler = null), this._routes = B(t), this._current = G;
                        const e = () => this._history.setup();
                        this._history.transitionTo(this._getCurrent(), {
                            onTransition: e,
                            onAbort: e
                        })
                    }, this._history = t, this._routes = B(e), this._current = G, this._history.doTransition = this._doTransition.bind(this)
                }
                get ready() {
                    return this._readyDefer.promise
                }
                get current() {
                    return this._current
                }
                get routes() {
                    return this._routes
                }
                get action() {
                    return this._history.action
                }
                get basename() {
                    return this._history.basename
                }
                _doTransition(t, e, n, r, o, i) {
                    const s = this._getNextRoute(t),
                        a = this._current,
                        c = s.matches,
                        u = c.reduceRight(((t, {
                            route: {
                                redirect: e
                            }
                        }) => !t && e ? e : t), null);
                    const l = a === G;
                    if (u) {
                        const t = o || l ? "replace" : "push";
                        return this._history[t](u, {
                            redirectedFrom: i || s
                        })
                    }
                    const h = new Map,
                        f = r ? [] : [].concat(this._beforeEachs.toArray(), this._beforeResolves.toArray());
                    let p = !1;
                    this._cancleHandler = () => {
                        p = !0, this._pending = null
                    };
                    const d = () => {
                        this._cancleHandler = null, n && n(), this._ready || this._current === G || (this._ready = !0, this._readyDefer.resolve())
                    };
                    this._pending = t;
                    let y = [];
                    ! function(t, e, n) {
                        const r = o => {
                            o >= t.length ? n() : t[o] ? e(t[o], (() => {
                                r(o + 1)
                            })) : r(o + 1)
                        };
                        r(0)
                    }(f, ((e, n) => {
                        if (!p) {
                            if (this._pending !== t) return d();
                            try {
                                e(s, a, (t => {
                                    if (!1 === t) d();
                                    else if (r = t, Object.prototype.toString.call(r).indexOf("Error") > -1) d();
                                    else if ("string" === typeof t || "object" === typeof t && "string" === typeof t.path) {
                                        d();
                                        const e = o || "object" === typeof t && t.replace || l ? "replace" : "push";
                                        "object" === typeof t ? this._history[e](t.path, {
                                            redirectedFrom: i || s,
                                            skipGuards: t.skipGuards,
                                            state: t.state
                                        }) : this._history[e](t, {
                                            redirectedFrom: i || s
                                        })
                                    } else e = t, Object.prototype.toString.call(e).indexOf("Function") > -1 && y.push(t), n();
                                    var e, r
                                }))
                            } catch (r) {
                                d(), console.error("Uncaught error during navigation:", r)
                            }
                        }
                    }), (() => {
                        if (p) return;
                        if (this._pending !== t) return d();
                        this._pending = null, this._cancleHandler = null, e();
                        const n = this._current;
                        this._current = this._getCurrent(h), this._ready || (this._ready = !0, this._readyDefer.resolve()), this._listeners.call({
                            action: this._history.action,
                            location: this._history.location
                        }), this._afterEachs.call(this._current, n), y.forEach((t => {
                            t()
                        }))
                    }))
                }
                _getCurrent(t) {
                    var e;
                    const {
                        _history: {
                            location: n
                        }
                    } = this, r = this.match(n);
                    let o;
                    if (r.length) {
                        if (o = r[r.length - 1].params, t)
                            for (const {
                                    route: i
                                } of r) {
                                const n = null === (e = t.get(i)) || void 0 === e ? void 0 : e.props;
                                n && (i.props = Object.assign(Object.assign({}, i.props), n))
                            }
                    } else o = {};
                    return {
                        matches: r,
                        params: o,
                        pathname: n.pathname,
                        search: n.search,
                        hash: n.hash,
                        query: n.query,
                        state: n.state,
                        redirected: Boolean(n.redirectedFrom) || n.notMatchBasename,
                        key: n.key
                    }
                }
                _getNextRoute(t) {
                    const e = this.match(t),
                        n = e.length ? e[e.length - 1].params : {},
                        r = E(t);
                    return Object.assign(Object.assign({
                        matches: e,
                        params: n
                    }, r), {
                        key: "",
                        state: null
                    })
                }
            }
            const Y = t => new W(t)
        },
        oHTK: (t, e, n) => {
            "use strict";
            const r = n("UM5q"),
                o = n("1Fob"),
                i = n("p/97");

            function s(t) {
                if ("string" !== typeof t || 1 !== t.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function a(t, e) {
                return e.encode ? e.strict ? r(t) : encodeURIComponent(t) : t
            }

            function c(t, e) {
                return e.decode ? o(t) : t
            }

            function u(t) {
                return Array.isArray(t) ? t.sort() : "object" === typeof t ? u(Object.keys(t)).sort(((t, e) => Number(t) - Number(e))).map((e => t[e])) : t
            }

            function l(t) {
                const e = t.indexOf("#");
                return -1 !== e && (t = t.slice(0, e)), t
            }

            function h(t) {
                const e = (t = l(t)).indexOf("?");
                return -1 === e ? "" : t.slice(e + 1)
            }

            function f(t, e) {
                return e.parseNumbers && !Number.isNaN(Number(t)) && "string" === typeof t && "" !== t.trim() ? t = Number(t) : !e.parseBooleans || null === t || "true" !== t.toLowerCase() && "false" !== t.toLowerCase() || (t = "true" === t.toLowerCase()), t
            }

            function p(t, e) {
                s((e = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, e)).arrayFormatSeparator);
                const n = function(t) {
                        let e;
                        switch (t.arrayFormat) {
                            case "index":
                                return (t, n, r) => {
                                    e = /\[(\d*)\]$/.exec(t), t = t.replace(/\[\d*\]$/, ""), e ? (void 0 === r[t] && (r[t] = {}), r[t][e[1]] = n) : r[t] = n
                                };
                            case "bracket":
                                return (t, n, r) => {
                                    e = /(\[\])$/.exec(t), t = t.replace(/\[\]$/, ""), e ? void 0 !== r[t] ? r[t] = [].concat(r[t], n) : r[t] = [n] : r[t] = n
                                };
                            case "comma":
                            case "separator":
                                return (e, n, r) => {
                                    const o = "string" === typeof n && n.includes(t.arrayFormatSeparator),
                                        i = "string" === typeof n && !o && c(n, t).includes(t.arrayFormatSeparator);
                                    n = i ? c(n, t) : n;
                                    const s = o || i ? n.split(t.arrayFormatSeparator).map((e => c(e, t))) : null === n ? n : c(n, t);
                                    r[e] = s
                                };
                            default:
                                return (t, e, n) => {
                                    void 0 !== n[t] ? n[t] = [].concat(n[t], e) : n[t] = e
                                }
                        }
                    }(e),
                    r = Object.create(null);
                if ("string" !== typeof t) return r;
                if (!(t = t.trim().replace(/^[?#&]/, ""))) return r;
                for (const o of t.split("&")) {
                    let [t, s] = i(e.decode ? o.replace(/\+/g, " ") : o, "=");
                    s = void 0 === s ? null : ["comma", "separator"].includes(e.arrayFormat) ? s : c(s, e), n(c(t, e), s, r)
                }
                for (const o of Object.keys(r)) {
                    const t = r[o];
                    if ("object" === typeof t && null !== t)
                        for (const n of Object.keys(t)) t[n] = f(t[n], e);
                    else r[o] = f(t, e)
                }
                return !1 === e.sort ? r : (!0 === e.sort ? Object.keys(r).sort() : Object.keys(r).sort(e.sort)).reduce(((t, e) => {
                    const n = r[e];
                    return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? t[e] = u(n) : t[e] = n, t
                }), Object.create(null))
            }
            e.extract = h, e.parse = p, e.stringify = (t, e) => {
                if (!t) return "";
                s((e = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, e)).arrayFormatSeparator);
                const n = n => {
                        return e.skipNull && (null === (r = t[n]) || void 0 === r) || e.skipEmptyString && "" === t[n];
                        var r
                    },
                    r = function(t) {
                        switch (t.arrayFormat) {
                            case "index":
                                return e => (n, r) => {
                                    const o = n.length;
                                    return void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, [a(e, t), "[", o, "]"].join("")] : [...n, [a(e, t), "[", a(o, t), "]=", a(r, t)].join("")]
                                };
                            case "bracket":
                                return e => (n, r) => void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, [a(e, t), "[]"].join("")] : [...n, [a(e, t), "[]=", a(r, t)].join("")];
                            case "comma":
                            case "separator":
                                return e => (n, r) => null === r || void 0 === r || 0 === r.length ? n : 0 === n.length ? [
                                    [a(e, t), "=", a(r, t)].join("")
                                ] : [
                                    [n, a(r, t)].join(t.arrayFormatSeparator)
                                ];
                            default:
                                return e => (n, r) => void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, a(e, t)] : [...n, [a(e, t), "=", a(r, t)].join("")]
                        }
                    }(e),
                    o = {};
                for (const s of Object.keys(t)) n(s) || (o[s] = t[s]);
                const i = Object.keys(o);
                return !1 !== e.sort && i.sort(e.sort), i.map((n => {
                    const o = t[n];
                    return void 0 === o ? "" : null === o ? a(n, e) : Array.isArray(o) ? o.reduce(r(n), []).join("&") : a(n, e) + "=" + a(o, e)
                })).filter((t => t.length > 0)).join("&")
            }, e.parseUrl = (t, e) => {
                e = Object.assign({
                    decode: !0
                }, e);
                const [n, r] = i(t, "#");
                return Object.assign({
                    url: n.split("?")[0] || "",
                    query: p(h(t), e)
                }, e && e.parseFragmentIdentifier && r ? {
                    fragmentIdentifier: c(r, e)
                } : {})
            }, e.stringifyUrl = (t, n) => {
                n = Object.assign({
                    encode: !0,
                    strict: !0
                }, n);
                const r = l(t.url).split("?")[0] || "",
                    o = e.extract(t.url),
                    i = e.parse(o, {
                        sort: !1
                    }),
                    s = Object.assign(i, t.query);
                let c = e.stringify(s, n);
                c && (c = `?${c}`);
                let u = function(t) {
                    let e = "";
                    const n = t.indexOf("#");
                    return -1 !== n && (e = t.slice(n)), e
                }(t.url);
                return t.fragmentIdentifier && (u = `#${a(t.fragmentIdentifier,n)}`), `${r}${c}${u}`
            }
        },
        qK3R: function(t, e) {
            "use strict";
            var n, r = this && this.__awaiter || function(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.trace = e.Span = e.SpanStatus = void 0, e.setReporter = function(t) {
                    false;
                    if (i) throw new Error("Reporter already set !");
                    i = t
                },
                function(t) {
                    t[t.Started = 0] = "Started", t[t.Stopped = 1] = "Stopped"
                }(n || (e.SpanStatus = n = {}));
            Symbol.for("shuvi_server_reporter");
            let o = 0;
            let i;
            class s {
                constructor({
                    name: t,
                    parentId: e,
                    attrs: r,
                    startTime: i
                }) {
                    this._name = t, this._parentId = e, this._attrs = r ? Object.assign({}, r) : {}, this._status = n.Started, this._id = (o++, o);
                    const s = Date.now();
                    this._start = i || s, this._now = s
                }
                get status() {
                    return this._status
                }
                stop(t) {
                    const e = i;
                    if (!e) return;
                    const r = t || Date.now(),
                        o = r - this._start;
                    this._status = n.Stopped, o > Number.MAX_SAFE_INTEGER && console.warn(`Duration is too long to express as float64: ${o}`), e({
                        timestamp: this._now,
                        name: this._name,
                        duration: o,
                        startTime: this._start,
                        endTime: r,
                        id: this._id,
                        parentId: this._parentId,
                        attrs: this._attrs
                    })
                }
                traceChild(t, e) {
                    return new s({
                        name: t,
                        parentId: this._id,
                        attrs: e
                    })
                }
                manualTraceChild(t, e, n, r) {
                    new s({
                        name: t,
                        parentId: this._id,
                        attrs: r,
                        startTime: e
                    }).stop(n)
                }
                setAttribute(t, e) {
                    this._attrs[t] = e
                }
                setAttributes(t) {
                    Object.keys(t).forEach((e => {
                        this.setAttribute(e, t[e])
                    }))
                }
                traceFn(t) {
                    try {
                        return t(this)
                    } finally {
                        this.stop()
                    }
                }
                traceAsyncFn(t) {
                    return r(this, void 0, void 0, (function*() {
                        try {
                            return yield t(this)
                        } finally {
                            this.stop()
                        }
                    }))
                }
            }
            e.Span = s;
            e.trace = (t, e, n) => new s({
                name: t,
                parentId: e,
                attrs: n
            })
        },
        "k/Mm": (t, e, n) => {
            "use strict";
            n.d(e, {
                CH: () => o,
                Kj: () => r,
                nt: () => i
            });
            const r = "__APP",
                o = "__APP_DATA",
                i = {
                    APP_ERROR: {
                        code: 500,
                        message: "Internal Application Error."
                    },
                    SERVER_ERROR: {
                        code: 500,
                        message: "Internal Server Error."
                    },
                    CLIENT_ERROR: {
                        message: "Internal Application Error"
                    },
                    PAGE_NOT_FOUND: {
                        code: 404,
                        message: "This page could not be found."
                    }
                }
        },
        kvBi: (t, e, n) => {
            "use strict";
            n.d(e, {
                ft: () => i,
                vO: () => a
            });
            const r = "requestId",
                o = {
                    requestId: {
                        name: r,
                        type: "string"
                    },
                    error: {
                        name: "error",
                        type: "boolean"
                    },
                    errorType: {
                        name: "errorType",
                        type: "string",
                        enum: ["redirect", "userError", "unexpectedError"]
                    }
                },
                i = {
                    name: "CLIENT_ENTRY",
                    events: {
                        SHUVI_CLIENT_ENTRY_START: {
                            name: "SHUVI_CLIENT_ENTRY_START",
                            duration: !1
                        },
                        SHUVI_CLIENT_SETUP_ENV: {
                            name: "SHUVI_CLIENT_SETUP_ENV",
                            duration: !0
                        },
                        SHUVI_CLIENT_CREATE_APP: {
                            name: "SHUVI_CLIENT_CREATE_APP",
                            duration: !0
                        },
                        SHUVI_CLIENT_APP_INIT: {
                            name: "SHUVI_CLIENT_APP_INIT",
                            duration: !0
                        },
                        SHUVI_CLIENT_RUN_APP: {
                            name: "SHUVI_CLIENT_RUN_APP",
                            duration: !0
                        },
                        SHUVI_CLIENT_DO_RENDER: {
                            name: "SHUVI_CLIENT_DO_RENDER",
                            duration: !0
                        }
                    }
                },
                s = {
                    from: {
                        name: "from",
                        type: "string"
                    },
                    to: {
                        name: "to",
                        type: "string"
                    },
                    navigationId: {
                        name: "navigationId",
                        type: "string"
                    }
                },
                a = {
                    name: "CLIENT_RENDER",
                    events: {
                        SHUVI_PAGE_READY: {
                            name: "SHUVI_PAGE_READY",
                            duration: !1
                        },
                        SHUVI_NAVIGATION_TRIGGERED: {
                            name: "SHUVI_NAVIGATION_TRIGGERED",
                            duration: !0,
                            attrs: s
                        },
                        SHUVI_NAVIGATION_DONE: {
                            name: "SHUVI_NAVIGATION_DONE",
                            duration: !0,
                            attrs: s
                        },
                        SHUVI_CLIENT_RUN_LOADERS: {
                            name: "SHUVI_CLIENT_RUN_LOADERS",
                            duration: !0,
                            attrs: o
                        }
                    }
                }
        },
        nlrA: (t, e, n) => {
            "use strict";
            var r = n("Dz1D"),
                o = n("etBY"),
                i = n("fix3"),
                s = n("kvBi"),
                a = n("aUDg");
            a.x.traceChild(s.ft.events.SHUVI_CLIENT_ENTRY_START.name).stop();
            var c = a.x.traceChild(s.ft.events.SHUVI_CLIENT_SETUP_ENV.name),
                u = (0, i.Y)();
            o.A && (0, r.UB)(o.A), u.runtimeConfig && (0, r.UB)(u.runtimeConfig), c.stop();
            n("cpeW");
            n("2rPy")
        },
        "2rPy": (t, e, n) => {
            "use strict";
            n.r(e);
            var r = n("2URn"),
                o = n("0GOp"),
                i = n.n(o),
                s = n("k/Mm"),
                a = n("TrCV"),
                c = n("DTvD"),
                u = n("BK9r");

            function l() {
                return (0, a.jsx)(u.Tp, {})
            }
            const h = c.memo(l);
            var f = n("888e"),
                p = n("kvBi"),
                d = n("VyXn");
            const y = "error",
                m = (0, d.NP)({
                    state: {
                        error: null
                    },
                    actions: {
                        set(t) {
                            this.error = t
                        },
                        clear() {
                            this.hasError && (this.error = null)
                        }
                    },
                    views: {
                        errorObject() {
                            return this.error
                        },
                        hasError() {
                            return null !== this.error
                        }
                    }
                });
            var g = c.createContext(null);

            function v(t) {
                var e = t.app,
                    n = t.children;
                return (0, a.jsx)(g.Provider, {
                    value: e,
                    children: n
                })
            }
            var _ = n("uHCZ"),
                b = {
                    container: {
                        color: "#000",
                        background: "#fff",
                        fontFamily: '-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',
                        height: "100vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    error: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                    },
                    errorCode: {
                        fontSize: "24px",
                        fontWeight: 500,
                        borderRight: "1px solid rgba(0, 0, 0, 0.3)",
                        paddingRight: "20px",
                        marginRight: "20px"
                    },
                    errorDesc: {
                        fontSize: "16px",
                        lineHeight: "1"
                    }
                };
            var w = n("v7Og").A || function(t) {
                var e = t.errorCode,
                    n = t.errorDesc;
                return (0, a.jsxs)("div", {
                    style: b.container,
                    children: [(0, a.jsx)(_.A, {
                        children: (0, a.jsx)("title", {
                            children: "Page Error"
                        })
                    }), (0, a.jsxs)("div", {
                        style: b.error,
                        children: [void 0 !== e && (0, a.jsx)("div", {
                            style: b.errorCode,
                            children: e
                        }), (0, a.jsx)("div", {
                            style: b.errorDesc,
                            children: n || "Error"
                        })]
                    })]
                })
            };

            function x(t) {
                var e = t.code,
                    n = t.message,
                    r = t.error;
                return (0, a.jsx)(w, {
                    errorCode: e,
                    errorDesc: n,
                    error: r
                })
            }
            var S = n("nG1z"),
                E = n("2PCm"),
                k = n("VKAp"),
                O = function(t) {
                    (0, E.A)(n, t);
                    var e = (0, k.A)(n);

                    function n() {
                        var t;
                        return (0, f.A)(this, n), (t = e.call.apply(e, [this].concat(Array.prototype.slice.call(arguments)))).state = {
                            error: null
                        }, t
                    }
                    return (0, S.A)(n, [{
                        key: "componentDidCatch",
                        value: function(t, e) {
                            this.setState({
                                error: t
                            }), console.error("the error is below: \n", t), e && e.componentStack && console.error("the componentStack is below: \n", e.componentStack)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return this.state.error ? (0, a.jsx)(x, {
                                message: s.nt.CLIENT_ERROR.message,
                                error: this.state.error
                            }) : this.props.children
                        }
                    }]), n
                }(c.PureComponent),
                C = n("77a2"),
                j = n("ezuS"),
                I = n("aUDg"),
                A = p.vO.events,
                P = A.SHUVI_NAVIGATION_TRIGGERED,
                T = A.SHUVI_NAVIGATION_DONE,
                R = A.SHUVI_PAGE_READY;

            function D() {
                var t = (0, u.rd)(),
                    e = (0, u.K7)(),
                    n = c.useRef();
                c.useEffect((function() {
                    I.t.traceChild(R.name).stop(), t.beforeEach((function(t, e, r) {
                        var o, i = "".concat(e.pathname).concat(e.search),
                            s = "".concat(t.pathname).concat(t.search),
                            a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                                var e = 16 * Math.random() | 0;
                                return ("x" == t ? e : 3 & e | 8).toString(16)
                            })),
                            c = (o = {}, (0, j.A)(o, T.attrs.from.name, i), (0, j.A)(o, T.attrs.to.name, s), (0, j.A)(o, T.attrs.navigationId.name, a), o);
                        I.t.traceChild(P.name, c).stop(), n.current = I.t.traceChild(T.name), n.current.setAttributes(c), r()
                    }))
                }), []), c.useEffect((function() {
                    var t;
                    null === (t = n.current) || void 0 === t || t.stop()
                }), [e])
            }

            function N(t) {
                var e = t.children,
                    n = void 0 === e ? null : e;
                return D(), (0, a.jsx)(a.Fragment, {
                    children: n
                })
            }

            function L(t) {
                var e = t.children,
                    n = void 0 === e ? null : e,
                    r = (0, C.MA)(y, m),
                    o = r.error;
                return r.hasError ? (0, a.jsx)(x, {
                    code: null === o || void 0 === o ? void 0 : o.code,
                    message: null === o || void 0 === o ? void 0 : o.message,
                    error: null === o || void 0 === o ? void 0 : o.error
                }) : (0, a.jsx)(a.Fragment, {
                    children: n
                })
            }

            function M(t) {
                var e = t.app,
                    n = t.children;
                return (0, a.jsx)(v, {
                    app: e,
                    children: (0, a.jsx)(O, {
                        children: (0, a.jsx)(C.Kq, {
                            store: e.store,
                            children: (0, a.jsx)(L, {
                                children: (0, a.jsx)(N, {
                                    children: n
                                })
                            })
                        })
                    })
                })
            }
            var F = function() {
                function t() {
                    (0, f.A)(this, t), this._pedningPromise = null, this.updateHead = this.updateHead.bind(this)
                }
                return (0, S.A)(t, [{
                    key: "updateHead",
                    value: function(t) {
                        var e = this;
                        this._head = t, this._pedningPromise || (this._pedningPromise = Promise.resolve().then((function() {
                            e._pedningPromise = null, e._doUpdateHead()
                        })))
                    }
                }, {
                    key: "_doUpdateHead",
                    value: function() {
                        var t = this,
                            e = {};
                        this._head.forEach((function(t) {
                            (e[t.tagName] || (e[t.tagName] = [])).push(t)
                        })), e.title && this._updateTitle(e.title[0]);
                        ["meta", "base", "link", "style", "script"].forEach((function(n) {
                            t._updateElements(n, e[n] || [])
                        }))
                    }
                }, {
                    key: "_updateTitle",
                    value: function(t) {
                        var e = t.attrs,
                            n = e.textContent || "";
                        n !== document.title && (document.title = n);
                        var r = document.getElementsByTagName("title")[0];
                        r && H(r, e)
                    }
                }, {
                    key: "_updateElements",
                    value: function(t, e) {
                        var n = document.getElementsByTagName("head")[0],
                            r = n.querySelectorAll("".concat(t, "[").concat(_.a, "='true']")),
                            o = Array.prototype.slice.call(r),
                            i = null;
                        o.length && (i = o[o.length - 1].nextElementSibling);
                        var s = e.map(V).filter((function(t) {
                            for (var e = 0, n = o.length; e < n; e++) {
                                if (o[e].isEqualNode(t)) return o.splice(e, 1), !1
                            }
                            return !0
                        }));
                        o.forEach((function(t) {
                            return t.parentNode.removeChild(t)
                        })), s.forEach((function(t) {
                            i ? n.insertBefore(t, i) : n.appendChild(t)
                        }))
                    }
                }]), t
            }();

            function H(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && "textContent" !== n && void 0 !== e[n] && t.setAttribute(n.toLowerCase(), e[n])
            }

            function V(t) {
                var e = t.tagName,
                    n = t.attrs,
                    r = t.innerHTML,
                    o = document.createElement(e);
                H(o, n);
                var i = n.textContent;
                return r ? o.innerHTML = r : i && (o.textContent = i), o
            }
            var U, $, z = n("gmsc"),
                q = n("nFfn"),
                B = n("oUj1"),
                G = B.createRoot,
                W = B.hydrateRoot;
            U = function(t, e) {
                var n = t.root,
                    r = t.appContainer;
                t.shouldHydrate ? ($ = W(r, n), null === e || void 0 === e || e()) : ($ || ($ = G(r)), $.render(n))
            };
            var Y = function(t, e, n, o) {
                    return new(n || (n = Promise))((function(i, s) {
                        var a = function(t) {
                                try {
                                    u(o.next(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            c = function(t) {
                                try {
                                    u(o.throw(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            u = function(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, c)
                            };
                        u((o = o.apply(t, e || [])).next())
                    }))
                },
                K = new F;
            const Z = new function t() {
                var e = this;
                (0, f.A)(this, t), this._isInitialRender = !0, this.renderApp = function(t) {
                    return Y(e, [t], void 0, i().mark((function t(e) {
                        var n, r, o, c, l, h, f, d, y, m, g, v, _;
                        return i().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.appContainer, r = e.app, o = e.appData, c = this, l = this._isInitialRender, h = r.router, f = r.appComponent, d = r.setError, r.error, y = o.ssr, m = o.dynamicIds, g = y && l, v = f, !y || !l) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 11, Promise.all([q.A.preloadReady(m), h.ready]);
                                case 11:
                                    t.next = 17;
                                    break;
                                case 13:
                                    return t.next = 15, h.ready;
                                case 15:
                                    h.current.matches.length || d(s.nt.PAGE_NOT_FOUND);
                                case 17:
                                    _ = (0, a.jsx)(u.Ix, {
                                        router: h,
                                        children: (0, a.jsx)(M, {
                                            app: r,
                                            children: (0, a.jsx)(z.T.Provider, {
                                                value: K.updateHead,
                                                children: (0, a.jsx)(v, {})
                                            })
                                        })
                                    }), I.x.traceChild(p.ft.events.SHUVI_CLIENT_DO_RENDER.name).traceFn((function() {
                                        U({
                                            root: _,
                                            appContainer: n,
                                            shouldHydrate: g
                                        }, (function() {
                                            c._isInitialRender = !1
                                        }))
                                    }));
                                case 19:
                                case "end":
                                    return t.stop()
                            }
                        }), t, this)
                    })))
                }
            };
            var J = n("3cKB"),
                X = n("fix3"),
                Q = n("OFK0");
            var tt = function(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var o = 0;
                    for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                }
                return n
            };

            function et(t) {
                var e = function(t) {
                    return t.map((function(t) {
                        var n = Object.assign({}, t),
                            r = n.__componentRawRequest__,
                            o = n.__import__,
                            i = n.__resolveWeak__,
                            s = n.children,
                            a = tt(n, ["__componentRawRequest__", "__import__", "__resolveWeak__", "children"]);
                        return s && (a.children = e(s)), o && (a.component = function(t, e) {
                            return (0, Q.A)((function() {
                                return t().then((function(t) {
                                    return t.default || t
                                }))
                            }), e)
                        }(o, Object.assign({
                            webpack: i
                        }, r && {
                            modules: [r]
                        }))), r && (a.__componentRawRequest__ = r), a
                    }))
                };
                return e(t || [])
            }
            var nt = n("hSG1"),
                rt = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(t) {
                            try {
                                c(r.next(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                };

            function ot(t) {
                return rt(this, void 0, void 0, (function*() {
                    const e = t.matches,
                        n = [];
                    e.forEach((t => {
                        var e;
                        const r = null === (e = t.route.component) || void 0 === e ? void 0 : e.preload;
                        r && "function" === typeof r && n.push(r())
                    })), yield Promise.all(n)
                }))
            }

            function it(t, e, n) {
                const r = t.matches,
                    o = e.matches;
                let i = [];
                for (let a = 0; a < r.length; a++) {
                    const t = r[a],
                        e = o[a];
                    if (t.route.id !== (null === e || void 0 === e ? void 0 : e.route.id)) {
                        i.push(...r.slice(a));
                        break
                    }
                    if (!(0, nt.A)(t.params, null === e || void 0 === e ? void 0 : e.params)) {
                        i.push(...r.slice(a));
                        break
                    }
                    a === r.length - 1 && i.push(t)
                }
                const s = [];
                return i.forEach((t => {
                    const e = t.route.id;
                    n[e] && "function" === typeof n[e] && s.push(t)
                })), s
            }
            var st = n("IJ96"),
                at = n.n(st);
            const ct = "Symbol" in n.g && "iterator" in Symbol;

            function ut(t) {
                if ("string" !== typeof t && (t = String(t)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(t) || "" === t) throw new TypeError('Invalid character in header field name: "' + t + '"');
                return t.toLowerCase()
            }

            function lt(t) {
                return "string" !== typeof t && (t = String(t)), t
            }

            function ht(t) {
                var e = {
                    next: function() {
                        var e = t.shift();
                        return {
                            done: void 0 === e,
                            value: e
                        }
                    }
                };
                return ct && (e[Symbol.iterator] = function() {
                    return e
                }), e
            }
            class ft {
                constructor(t) {
                    this._map = {}, t instanceof ft ? t.forEach(((t, e) => {
                        this.append(e, t)
                    })) : Array.isArray(t) ? t.forEach((t => this.append(t[0], t[1]))) : t && Object.keys(t).forEach((e => {
                        this.append(e, t[e])
                    }))
                }
                append(t, e) {
                    t = ut(t), e = lt(e);
                    var n = this._map[t];
                    this._map[t] = n ? n + ", " + e : e
                }
                delete(t) {
                    delete this._map[ut(t)]
                }
                get(t) {
                    return t = ut(t), this.has(t) ? this._map[t] : null
                }
                has(t) {
                    return this._map.hasOwnProperty(ut(t))
                }
                set(t, e) {
                    this._map[ut(t)] = lt(e)
                }
                forEach(t, e) {
                    for (var n in Object.keys(this._map)) t.call(e, this._map[n], n, this)
                }
                keys() {
                    const t = [];
                    return this.forEach(((e, n) => t.push(n))), ht(t)
                }
                value() {
                    const t = [];
                    return this.forEach((e => t.push(e))), ht(t)
                }
                entries() {
                    const t = [];
                    return this.forEach(((e, n) => t.push([n, e]))), ht(t)
                }
            }
            ct && (ft.prototype[Symbol.iterator] = ft.prototype.entries);
            class pt {
                constructor(t, e, n = {}) {
                    this.__shuvi_resp_type__ = e, this.data = t, this.status = n.status || 200, this.statusText = n.statusText || "", this.headers = new ft(n.headers)
                }
            }

            function dt(t) {
                return e => e && e.__shuvi_resp_type__ === t
            }
            dt("json"), dt("text");
            const yt = dt("redirect");
            var mt = function(t, e, n, r) {
                return new(n || (n = Promise))((function(o, i) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            };

            function gt(t) {
                return mt(this, void 0, void 0, (function*() {
                    return new Promise((e => {
                        const n = [];
                        let r = t.length,
                            o = 0,
                            i = new Map,
                            s = !1;
                        const a = () => {
                            s = !0, e(n.slice())
                        };
                        t.map(((t, e) => mt(this, void 0, void 0, (function*() {
                            let c, u;
                            try {
                                c = yield t()
                            } catch (l) {
                                u = l
                            }
                            s || (n[e] = {
                                error: u,
                                result: c
                            }, o += 1, i.set(e, !0), (o === r || o === e + 1 && (t => {
                                for (let e = 0; e < t; e++)
                                    if (!i.has(e)) return !1;
                                return !0
                            })(e) && u) && a())
                        }))))
                    }))
                }))
            }

            function vt(t, e = 302) {
                throw function(t, e = 302) {
                    return new pt("", "redirect", {
                        status: e,
                        headers: {
                            Location: t
                        }
                    })
                }(t, e)
            }

            function _t(t, e = 500, {
                fatal: n = !1
            } = {}) {
                throw at()(e >= 400 && e < 600, "status code should be 4xx and 5xx"), new pt({
                    error: !0,
                    fatal: n
                }, "raw", {
                    status: e,
                    statusText: t
                })
            }

            function bt({
                pathname: t,
                query: e,
                params: n,
                req: r,
                getAppContext: o
            }) {
                return Object.assign({
                    pathname: t,
                    params: n,
                    query: e,
                    redirect: vt,
                    error: _t,
                    appContext: o()
                }, r ? {
                    req: r
                } : {})
            }

            function wt(t, e, n) {
                return mt(this, void 0, void 0, (function*() {
                    const r = {};
                    if (!t.length) return r;
                    const o = yield gt(t.map((t => () => mt(this, void 0, void 0, (function*() {
                        const r = e[t.route.id];
                        if ("function" !== typeof r) return;
                        let o, i;
                        try {
                            const e = yield r(n);
                            void 0 === e ? i = new Error(`You defined a loader for route "${t.route.path}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`) : o = new pt(e, "json")
                        } catch (s) {
                            0,
                            i = s
                        }
                        if (i) throw i;
                        return o
                    })))));
                    for (let e = 0; e < o.length; e++) {
                        const n = o[e];
                        if (n.error) throw n.error;
                        const i = t[e].route.id;
                        at()(n.result, `loader function of route "${t[e].route.path}" should return a value`), r[i] = n.result.data
                    }
                    return r
                }))
            }
            var xt = n("aKNZ"),
                St = n("4qyo"),
                Et = n("UCWY"),
                kt = n("JtFa"),
                Ot = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(o, i) {
                        function s(t) {
                            try {
                                c(r.next(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (e) {
                                i(e)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(s, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                };
            class Ct {
                constructor(t) {
                    this._config = t.config, this._router = t.router, this._request = t.request, this._context = {}, this._store = (0, d.Sz)({
                        initialState: t.initialState
                    }), this._error = this._store.getModel(y, m), this._loader = this._store.getModel(kt.K, kt.l), this._getLoaders = t.getLoaders, this._appComponent = t.AppComponent, this._pluginManager = (0, Et.EI)(), (0, Et.H7)(this._pluginManager, t.plugins || [])
                }
                get router() {
                    return this._router
                }
                get config() {
                    return this._config
                }
                get context() {
                    return this._context
                }
                get pluginManager() {
                    return this._pluginManager
                }
                get appComponent() {
                    return this._appComponent
                }
                get error() {
                    return this._error.errorObject
                }
                setError(t) {
                    this._error.set(t)
                }
                clearError() {
                    this._error.clear()
                }
                getLoaders() {
                    return this._getLoaders()
                }
                getLoadersData() {
                    return this._loader.getAllData
                }
                setLoadersData(t) {
                    this._loader.setDatas(t)
                }
                init() {
                    return Ot(this, void 0, void 0, (function*() {
                        yield this._initPlugin(), yield this._initAppContext(), this._router.init(), yield this._initAppComponent()
                    }))
                }
                get store() {
                    return this._store
                }
                updateComponents() {
                    return Ot(this, arguments, void 0, (function*({
                        AppComponent: t
                    } = {}) {
                        t && t !== this._appComponent && (this._appComponent = t), yield this._initAppComponent()
                    }))
                }
                dispose() {
                    return Ot(this, void 0, void 0, (function*() {
                        yield this._pluginManager.runner.dispose()
                    }))
                }
                _initPlugin() {
                    return Ot(this, void 0, void 0, (function*() {
                        yield this._pluginManager.runner.init()
                    }))
                }
                _initAppContext() {
                    return Ot(this, void 0, void 0, (function*() {
                        yield this._pluginManager.runner.appContext(this._context, {
                            router: this._router,
                            req: this._request
                        })
                    }))
                }
                _initAppComponent() {
                    return Ot(this, void 0, void 0, (function*() {
                        this._appComponent = yield this._pluginManager.runner.appComponent(this._appComponent, this._context)
                    }))
                }
                getPublicAPI() {
                    const t = this;
                    return {
                        get config() {
                            return t._config
                        },
                        get context() {
                            return t._context
                        },
                        get router() {
                            return t._router
                        },
                        get appComponent() {
                            return t._appComponent
                        },
                        get store() {
                            return t._store
                        },
                        get error() {
                            return t.error
                        },
                        setError(e) {
                            t.setError(e)
                        },
                        clearError() {
                            t.clearError()
                        },
                        getLoadersData: () => t.getLoadersData(),
                        setLoadersData(e) {
                            t.setLoadersData(e)
                        }
                    }
                }
            }
            var jt = function(t, e, n, o) {
                return new(n || (n = Promise))((function(i, s) {
                    var a = function(t) {
                            try {
                                u(o.next(t))
                            } catch (e) {
                                s(e)
                            }
                        },
                        c = function(t) {
                            try {
                                u(o.throw(t))
                            } catch (e) {
                                s(e)
                            }
                        },
                        u = function(t) {
                            var e;
                            t.done ? i(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                t(e)
                            }))).then(a, c)
                        };
                    u((o = o.apply(t, e || [])).next())
                }))
            };

            function It(t, e) {
                for (var n = [], r = Object.keys(e), o = 0; o < r.length; o++) {
                    var i = e[r[o]];
                    n.push([i.plugin, i.options])
                }
                for (var s = {}, a = ["appComponent", "appContext", "init", "dispose"], c = 0; c < a.length; c++) {
                    var u = a[c];
                    "function" === typeof t[u] && (s[u] = t[u])
                }
                return n.push([(0, Et.yO)(s, {
                    name: "shuvi-user-app"
                })]), n
            }
            var At = n("wcIl"),
                Pt = n("accZ"),
                Tt = /^http(s?)\:\/\//;
            const Rt = function(t) {
                return Tt.test(t)
            };
            var Dt, Nt = function(t, e, n, o) {
                    return new(n || (n = Promise))((function(i, s) {
                        var a = function(t) {
                                try {
                                    u(o.next(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            c = function(t) {
                                try {
                                    u(o.throw(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            u = function(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, c)
                            };
                        u((o = o.apply(t, e || [])).next())
                    }))
                },
                Lt = p.vO.events.SHUVI_CLIENT_RUN_LOADERS,
                Mt = function(t) {
                    var e = t.routes,
                        r = t.appData,
                        o = t.appComponent;
                    if (Dt) return Dt;
                    var a, c = r.appState,
                        u = r.ssr,
                        l = r.basename;
                    a = "hash" === Pt.a ? (0, At.TM)({
                        basename: l
                    }) : (0, At.zR)({
                        basename: l
                    });
                    var h = (0, At.aE)({
                            history: a,
                            routes: et(e)
                        }),
                        f = (Dt = function(t) {
                            var e = this;
                            return new Ct(Object.assign(Object.assign({}, t), {
                                getLoaders: function() {
                                    return jt(e, void 0, void 0, i().mark((function t() {
                                        var e;
                                        return i().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, n.e(9625).then(n.bind(n, "Jl0p"));
                                                case 2:
                                                    return e = t.sent, t.abrupt("return", e.default || e);
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                },
                                plugins: It(xt, St.P)
                            }))
                        }({
                            initialState: c,
                            AppComponent: o,
                            router: h,
                            config: {
                                ssr: u
                            }
                        })).getLoadersData(),
                        p = Object.keys(f).length > 0,
                        d = !!u;
                    return h.beforeResolve((function(t, e, n) {
                        return Nt(void 0, void 0, void 0, i().mark((function r() {
                            var o, a, c, u, l, h;
                            return i().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!d) {
                                            r.next = 4;
                                            break
                                        }
                                        return d = !1, p && Dt.setLoadersData(f), r.abrupt("return", n());
                                    case 4:
                                        if (t.matches.length) {
                                            r.next = 8;
                                            break
                                        }
                                        return Dt.setError(s.nt.PAGE_NOT_FOUND), n(), r.abrupt("return");
                                    case 8:
                                        return o = I.t.traceChild(Lt.name), r.next = 11, Dt.getLoaders();
                                    case 11:
                                        return a = r.sent, c = it(t, e, a), u = bt({
                                            pathname: t.pathname,
                                            query: t.query,
                                            params: t.params,
                                            getAppContext: function() {
                                                return Dt.context
                                            }
                                        }), r.prev = 14, r.next = 17, new Promise((function(e, n) {
                                            var r, o, i = 0,
                                                s = function() {
                                                    2 === ++i && (o ? n(o) : e(r))
                                                };
                                            ot(t).then(s).catch((function(t) {
                                                n(t)
                                            })), wt(c, a, u).then((function(t) {
                                                r = t, s()
                                            })).catch((function(t) {
                                                o = t, s()
                                            }))
                                        }));
                                    case 17:
                                        l = r.sent, Dt.setLoadersData(l), o.setAttribute(Lt.attrs.error.name, !1), o.stop(), r.next = 43;
                                        break;
                                    case 23:
                                        if (r.prev = 23, r.t0 = r.catch(14), o.setAttribute(Lt.attrs.error.name, !0), !yt(r.t0)) {
                                            r.next = 32;
                                            break
                                        }
                                        return h = r.t0.headers.get("Location"), Rt(h) ? window.location.replace(h) : n(h), o.setAttribute(Lt.attrs.errorType.name, "redirect"), o.stop(), r.abrupt("return");
                                    case 32:
                                        if (!((i = r.t0) && "string" === typeof i.__shuvi_resp_type__ && r.t0.status >= 400 && r.t0.status < 600)) {
                                            r.next = 38;
                                            break
                                        }
                                        return Dt.setError({
                                            message: r.t0.statusText,
                                            fatal: r.t0.data.fatal
                                        }), n(), o.setAttribute(Lt.attrs.errorType.name, "userError"), o.stop(), r.abrupt("return");
                                    case 38:
                                        return o.setAttribute(Lt.attrs.errorType.name, "unexpectedError"), o.stop(), Dt.setError({
                                            message: s.nt.CLIENT_ERROR.message,
                                            error: r.t0
                                        }), n((function() {
                                            throw r.t0
                                        })), r.abrupt("return");
                                    case 43:
                                        n((function() {
                                            Dt.clearError()
                                        }));
                                    case 44:
                                    case "end":
                                        return r.stop()
                                }
                                var i
                            }), r, null, [
                                [14, 23]
                            ])
                        })))
                    })), Dt
                },
                Ft = function(t, e, n, o) {
                    return new(n || (n = Promise))((function(i, s) {
                        var a = function(t) {
                                try {
                                    u(o.next(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            c = function(t) {
                                try {
                                    u(o.throw(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            u = function(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, c)
                            };
                        u((o = o.apply(t, e || [])).next())
                    }))
                },
                Ht = (0, X.Y)(),
                Vt = I.x.traceChild(p.ft.events.SHUVI_CLIENT_CREATE_APP.name).traceFn((function() {
                    return Mt({
                        appComponent: h,
                        routes: J.A,
                        appData: Ht
                    })
                }));
            window.__SHUVI ? window.__SHUVI.router = Vt.router : window.__SHUVI = {
                router: Vt.router
            }, Ft(void 0, void 0, void 0, i().mark((function t() {
                var e;
                return i().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = I.x.traceChild(p.ft.events.SHUVI_CLIENT_RUN_APP.name), t.next = 3, I.x.traceChild(p.ft.events.SHUVI_CLIENT_APP_INIT.name).traceAsyncFn((function() {
                                return Vt.init()
                            }));
                        case 3:
                            return t.next = 5, Ft(void 0, void 0, void 0, i().mark((function t() {
                                var e;
                                return i().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e = document.getElementById(s.Kj), t.next = 3, Z.renderApp({
                                                app: Vt.getPublicAPI(),
                                                appData: Ht,
                                                appContainer: e
                                            });
                                        case 3:
                                        case "end":
                                            return t.stop()
                                    }
                                }), t)
                            })));
                        case 5:
                            e.stop();
                        case 6:
                        case "end":
                            return t.stop()
                    }
                }), t)
            })))
        },
        aUDg: (t, e, n) => {
            "use strict";
            n.d(e, {
                t: () => s,
                x: () => i
            });
            var r = n("qK3R"),
                o = n("kvBi"),
                i = (0, r.trace)(o.ft.name),
                s = (0, r.trace)(o.vO.name)
        },
        EGIz: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => a
            });
            var r, o = n("VyXn"),
                i = n("UCWY"),
                s = n("NVnN");
            const a = (0, i.yO)({
                appContext: function(t) {
                    var e = {};
                    e = (0, s.K)("shuviInitialState", {}), t.store = function(t) {
                        var e = t.initialState,
                            n = (t.ctx, function() {
                                return (0, o.Sz)({
                                    initialState: e,
                                    plugins: []
                                })
                            });
                        return r || (r = n()), r
                    }({
                        ctx: t,
                        initialState: e
                    })
                }
            }, {
                name: "model"
            })
        },
        "14bH": (t, e, n) => {
            "use strict";
            n.d(e, {
                N: () => O
            });
            var r = n("2URn"),
                o = n("BK7R"),
                i = n("aVXY"),
                s = n("0GOp"),
                a = n.n(s),
                c = n("TrCV"),
                u = n("DTvD"),
                l = n("BK9r"),
                h = n("fix3");

            function f(t, e) {
                const {
                    filesByRoutId: n
                } = (0, h.Y)(), r = function() {
                    const {
                        publicPath: t
                    } = (0, h.Y)();
                    return t
                }(), o = [], i = [];
                return t.match(e).forEach((({
                    route: {
                        id: t
                    }
                }) => {
                    n[t] && n[t].map((e => {
                        const n = {
                            url: `${r}${e}`,
                            id: t
                        };
                        e.endsWith(".js") ? o.push(n) : e.endsWith(".css") && i.push(n)
                    }))
                })), {
                    js: o,
                    css: i
                }
            }
            var p = "undefined" !== typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(t) {
                    var e = Date.now();
                    return setTimeout((function() {
                        t({
                            didTimeout: !1,
                            timeRemaining: function() {
                                return Math.max(0, 50 - (Date.now() - e))
                            }
                        })
                    }), 1)
                },
                d = "undefined" !== typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(t) {
                    return clearTimeout(t)
                },
                y = "undefined" !== typeof IntersectionObserver;

            function m(t) {
                var e = t.rootRef,
                    n = t.rootMargin,
                    r = void 0 === n ? "0px" : n,
                    o = t.disabled || !y,
                    i = (0, u.useRef)(),
                    s = (0, u.useState)(!1),
                    a = s[0],
                    c = s[1],
                    l = (0, u.useState)(e ? e.current : null),
                    h = l[0],
                    f = l[1],
                    m = (0, u.useCallback)((function(t) {
                        i.current && (i.current(), i.current = void 0), o || a || t && t.tagName && (i.current = function(t, e, n) {
                            var r = function(t) {
                                    var e, n = {
                                            root: t.root || null,
                                            margin: t.rootMargin || ""
                                        },
                                        r = v.find((function(t) {
                                            return t.root === n.root && t.margin === n.margin
                                        }));
                                    r ? e = g.get(r) : (e = g.get(n), v.push(n));
                                    if (e) return e;
                                    var o = new Map,
                                        i = new IntersectionObserver((function(t) {
                                            t.forEach((function(t) {
                                                var e = o.get(t.target),
                                                    n = t.isIntersecting || t.intersectionRatio > 0;
                                                e && n && e(n)
                                            }))
                                        }), t);
                                    return g.set(n, e = {
                                        id: n,
                                        observer: i,
                                        elements: o
                                    }), e
                                }(n),
                                o = r.id,
                                i = r.observer,
                                s = r.elements;
                            return s.set(t, e), i.observe(t),
                                function() {
                                    if (s.delete(t), i.unobserve(t), 0 === s.size) {
                                        i.disconnect(), g.delete(o);
                                        var e = v.findIndex((function(t) {
                                            return t.root === o.root && t.margin === o.margin
                                        }));
                                        e > -1 && v.splice(e, 1)
                                    }
                                }
                        }(t, (function(t) {
                            return t && c(t)
                        }), {
                            root: h,
                            rootMargin: r
                        }))
                    }), [o, h, r, a]),
                    _ = (0, u.useCallback)((function() {
                        c(!1)
                    }), []);
                return (0, u.useEffect)((function() {
                    if (!y && !a) {
                        var t = p((function() {
                            return c(!0)
                        }));
                        return function() {
                            return d(t)
                        }
                    }
                    return function() {}
                }), [a]), (0, u.useEffect)((function() {
                    e && f(e.current)
                }), [e]), [m, a, _]
            }
            var g = new Map,
                v = [];
            var _ = function(t, e, n, o) {
                    return new(n || (n = Promise))((function(i, s) {
                        var a = function(t) {
                                try {
                                    u(o.next(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            c = function(t) {
                                try {
                                    u(o.throw(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            u = function(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, c)
                            };
                        u((o = o.apply(t, e || [])).next())
                    }))
                },
                b = function(t, e) {
                    var n = {};
                    for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                    if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                        var o = 0;
                        for (r = Object.getOwnPropertySymbols(t); o < r.length; o++) e.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (n[r[o]] = t[r[o]])
                    }
                    return n
                },
                w = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
                x = {};

            function S() {
                try {
                    return document.createElement("link").relList.supports("prefetch")
                } catch (t) {
                    return !1
                }
            }

            function E(t, e, n) {
                return new Promise((function(r, o) {
                    var i = '\n        link[rel="prefetch"][href^="'.concat(t, '"],\n        link[rel="preload"][href^="').concat(t, '"],\n        script[src^="').concat(t, '"]');
                    if (document.querySelector(i)) return r();
                    var s = document.createElement("link");
                    n && (s.as = n), s.rel = "prefetch", s.onload = r, s.onerror = o, s.dataset.id = e, s.href = t, document.head.appendChild(s)
                }))
            }

            function k(t, e) {
                return _(this, void 0, void 0, a().mark((function n() {
                    var r, o;
                    return a().wrap((function(n) {
                        for (;;) switch (n.prev = n.next) {
                            case 0:
                                r = f(t, e), n.next = 3;
                                break;
                            case 3:
                                n.next = 5;
                                break;
                            case 5:
                                return o = S(), n.next = 8, Promise.all(o ? r.js.map((function(t) {
                                    return E(t.url, t.id, "script")
                                })) : []);
                            case 8:
                            case "end":
                                return n.stop()
                        }
                    }), n)
                })))
            }
            var O = function(t) {
                var e, n = t.to,
                    r = t.ref,
                    s = t.prefetch,
                    a = t.onMouseEnter,
                    h = b(t, ["to", "ref", "prefetch", "onMouseEnter"]),
                    f = "string" === typeof n && (e = n, !w.test(e)),
                    p = u.useRef(n),
                    d = (0, i.A)(m({}), 3),
                    y = d[0],
                    g = d[1],
                    v = d[2],
                    _ = u.useContext(l.zA).router,
                    S = u.useCallback((function(t) {
                        f && p.current !== n && (v(), p.current = n), f && !1 !== s && y(t), r && ("function" === typeof r ? r(t) : "object" === typeof r && (r.current = t))
                    }), [n, f, s, v, y, r]);
                u.useEffect((function() {
                    f && !1 !== s && g && !x[n] && (k(_, n), x[n] = !0)
                }), [n, s, g]);
                var E = {
                    ref: S,
                    onMouseEnter: function(t) {
                        "function" === typeof a && a(t), f && !x[n] && (k(_, n), x[n] = !0)
                    }
                };
                return (0, c.jsx)(l.N_, (0, o.A)({
                    to: n
                }, h, E))
            }
        },
        OFK0: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => o
            });
            n("TrCV"), n("DTvD");
            var r = n("nFfn");

            function o(t, e) {
                var n = r.A,
                    o = {
                        loading: function(t) {
                            t.error, t.isLoading;
                            return t.pastDelay, null
                        }
                    };
                if ("function" === typeof t ? o.loader = t : "object" === typeof t && (o = Object.assign(Object.assign({}, o), t)), "boolean" === typeof(o = Object.assign(Object.assign({}, o), e)).ssr) {
                    if (!o.ssr) return delete o.ssr,
                        function(t, e) {
                            return delete e.webpack, delete e.modules, t(e)
                        }(n, o);
                    delete o.ssr
                }
                return n(o)
            }
        },
        gmsc: (t, e, n) => {
            "use strict";
            n.d(e, {
                T: () => o
            });
            var r = n("DTvD"),
                o = r.createContext(null)
        },
        uHCZ: (t, e, n) => {
            "use strict";
            n.d(e, {
                a: () => f,
                A: () => b
            });
            var r = n("ezuS"),
                o = n("TrCV"),
                i = n("DTvD"),
                s = (n("uqCI"), n("888e")),
                a = n("nG1z"),
                c = n("2PCm"),
                u = n("tEf9"),
                l = n("VKAp");
            var h = n("gmsc"),
                f = "data-shuvi-head",
                p = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv"
                };

            function d(t, e) {
                return "string" === typeof e || "number" === typeof e ? t : e.type === i.Fragment ? t.concat(i.Children.toArray(e.props.children).reduce((function(t, e) {
                    return "string" === typeof e || "number" === typeof e ? t : t.concat(e)
                }), [])) : t.concat(e)
            }
            var y = ["name", "httpEquiv", "charSet", "itemProp"];

            function m(t) {
                return "string" === typeof t.type
            }

            function g(t) {
                return t.reduce((function(t, e) {
                    var n = i.Children.toArray(e.props.children);
                    return t.concat(n)
                }), []).reduce(d, []).filter(m).reverse().filter(function() {
                    var t = new Set,
                        e = new Set,
                        n = new Set,
                        r = {};
                    return function(o) {
                        var i = !0;
                        if (o.key && "number" !== typeof o.key && o.key.indexOf("$") > 0) {
                            var s = o.key.slice(o.key.indexOf("$") + 1);
                            t.has(s) ? i = !1 : t.add(s)
                        }
                        switch (o.type) {
                            case "title":
                            case "base":
                                e.has(o.type) ? i = !1 : e.add(o.type);
                                break;
                            case "meta":
                                for (var a = 0, c = y.length; a < c; a++) {
                                    var u = y[a];
                                    if (o.props.hasOwnProperty(u))
                                        if ("charSet" === u) n.has(u) ? i = !1 : n.add(u);
                                        else {
                                            var l = o.props[u],
                                                h = r[u] || new Set;
                                            h.has(l) ? i = !1 : (h.add(l), r[u] = h)
                                        }
                                }
                        }
                        return i
                    }
                }()).reverse().map((function(t) {
                    var e = t.type,
                        n = t.props;
                    return function(t) {
                        var e = t.type,
                            n = t.props,
                            r = {
                                tagName: e,
                                attrs: {}
                            };
                        for (var o in n)
                            if (n.hasOwnProperty(o) && "children" !== o && "dangerouslySetInnerHTML" !== o && void 0 !== n[o]) {
                                var i = p[o] || o.toLowerCase();
                                r.attrs[i] = n[o]
                            }
                        var s = n.children,
                            a = n.dangerouslySetInnerHTML;
                        return a ? r.innerHTML = a.__html || "" : s && (r.attrs.textContent = "string" === typeof s ? s : s.join("")), r
                    }({
                        type: e,
                        props: Object.assign(Object.assign({}, n), (0, r.A)({}, f, "true"))
                    })
                }))
            }
            var v = function() {
                var t, e = function(e) {
                        t = e.props.reduceComponentsToState((0, u.A)(n), e.props), e.props.handleStateChange && e.props.handleStateChange(t)
                    },
                    n = new Set;
                return function(r) {
                    (0, c.A)(i, r);
                    var o = (0, l.A)(i);

                    function i(t) {
                        return (0, s.A)(this, i), o.call(this, t)
                    }
                    return (0, a.A)(i, [{
                        key: "componentDidMount",
                        value: function() {
                            n.add(this), e(this)
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            e(this)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            n.delete(this), e(this)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }], [{
                        key: "rewind",
                        value: function() {
                            var e = t;
                            return t = void 0, n.clear(), e
                        }
                    }]), i
                }(i.Component)
            }();

            function _(t) {
                var e = t.children;
                return (0, o.jsx)(h.T.Consumer, {
                    children: function(t) {
                        return (0, o.jsx)(v, {
                            reduceComponentsToState: g,
                            handleStateChange: t,
                            children: e
                        })
                    }
                })
            }
            _.rewind = v.rewind;
            const b = _
        },
        nFfn: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => y
            });
            var r = n("888e"),
                o = n("nG1z"),
                i = n("DTvD"),
                s = n("8ptQ"),
                a = i.createContext(null),
                c = [],
                u = [],
                l = !1;

            function h(t) {
                var e = t(),
                    n = {
                        loading: !0,
                        loaded: null,
                        error: null
                    };
                return n.promise = e.then((function(t) {
                    return n.loading = !1, n.loaded = t, t
                })).catch((function(t) {
                    throw n.loading = !1, n.error = t, t
                })), n
            }
            var f = function() {
                function t(e, n) {
                    (0, r.A)(this, t), this._loadFn = e, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return (0, o.A)(t, [{
                    key: "promise",
                    value: function() {
                        return this._res.promise
                    }
                }, {
                    key: "retry",
                    value: function() {
                        var t = this;
                        this._clearTimeouts(), this._res = this._loadFn(this._opts.loader), this._state = {
                            pastDelay: !1,
                            timedOut: !1
                        };
                        var e = this._res,
                            n = this._opts;
                        e.loading && ("number" === typeof n.delay && (0 === n.delay ? this._state.pastDelay = !0 : this._delay = setTimeout((function() {
                            t._update({
                                pastDelay: !0
                            })
                        }), n.delay)), "number" === typeof n.timeout && (this._timeout = setTimeout((function() {
                            t._update({
                                timedOut: !0
                            })
                        }), n.timeout))), this._res.promise.then((function() {
                            t._update({}), t._clearTimeouts()
                        })).catch((function(e) {
                            t._update({}), t._clearTimeouts()
                        })), this._update({})
                    }
                }, {
                    key: "_update",
                    value: function(t) {
                        this._state = Object.assign(Object.assign(Object.assign({}, this._state), {
                            error: this._res.error,
                            loaded: this._res.loaded,
                            loading: this._res.loading
                        }), t), this._callbacks.forEach((function(t) {
                            return t()
                        }))
                    }
                }, {
                    key: "_clearTimeouts",
                    value: function() {
                        clearTimeout(this._delay), clearTimeout(this._timeout)
                    }
                }, {
                    key: "getCurrentValue",
                    value: function() {
                        return this._state
                    }
                }, {
                    key: "subscribe",
                    value: function(t) {
                        var e = this;
                        return this._callbacks.add(t),
                            function() {
                                e._callbacks.delete(t)
                            }
                    }
                }]), t
            }();

            function p(t) {
                return function(t, e) {
                    var n = function() {
                            if (!o) {
                                var e = new f(t, r);
                                o = {
                                    getCurrentValue: e.getCurrentValue.bind(e),
                                    subscribe: e.subscribe.bind(e),
                                    retry: e.retry.bind(e),
                                    promise: e.promise.bind(e)
                                }
                            }
                            return o.promise()
                        },
                        r = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, e),
                        o = null;
                    if (!l && "function" === typeof r.webpack) {
                        var c = r.webpack();
                        u.push((function(t) {
                            var e = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var i, s = c[Symbol.iterator](); !(e = (i = s.next()).done); e = !0) {
                                    var a = i.value;
                                    if (-1 !== t.indexOf(a)) return n()
                                }
                            } catch (u) {
                                r = !0, o = u
                            } finally {
                                try {
                                    e || null == s.return || s.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                        }))
                    }
                    var h = i.forwardRef((function(t, e) {
                        n();
                        var c = i.useContext(a),
                            u = (0, s.useSyncExternalStore)(o.subscribe, o.getCurrentValue, o.getCurrentValue);
                        return i.useImperativeHandle(e, (function() {
                            return {
                                retry: o.retry
                            }
                        }), []), c && Array.isArray(r.modules) && r.modules.forEach((function(t) {
                            c(t)
                        })), i.useMemo((function() {
                            return u.loading || u.error ? i.createElement(r.loading, {
                                isLoading: u.loading,
                                pastDelay: u.pastDelay,
                                timedOut: u.timedOut,
                                error: u.error,
                                retry: o.retry
                            }) : u.loaded ? i.createElement((e = u.loaded) && e.__esModule ? e.default : e, t) : null;
                            var e
                        }), [t, u])
                    }));
                    return h.preload = function() {
                        return n()
                    }, h.displayName = "LoadableComponent", h
                }(h, t)
            }

            function d(t, e) {
                for (var n = []; t.length;) {
                    var r = t.pop();
                    n.push(r(e))
                }
                return Promise.all(n).then((function() {
                    if (t.length) return d(t, e)
                }))
            }
            p.preloadAll = function() {
                return new Promise((function(t, e) {
                    d(c).then(t, e)
                }))
            }, p.preloadReady = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(e) {
                    var n = function() {
                        return l = !0, e()
                    };
                    d(u, t).then(n, n)
                }))
            };
            const y = p
        },
        "2ae6": (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => h
            });
            var r = n("2URn"),
                o = n("0GOp"),
                i = n.n(o),
                s = n("UCWY"),
                a = n("TrCV"),
                c = (n("DTvD"), n("V0mm")),
                u = function(t, e) {
                    var n = function() {
                        return (0, a.jsx)(c.ab, {
                            store: e.store,
                            children: (0, a.jsx)(t, {})
                        })
                    };
                    return n.displayName = "DouraAppWrapper", n
                },
                l = function(t, e, n, o) {
                    return new(n || (n = Promise))((function(i, s) {
                        var a = function(t) {
                                try {
                                    u(o.next(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            c = function(t) {
                                try {
                                    u(o.throw(t))
                                } catch (e) {
                                    s(e)
                                }
                            },
                            u = function(t) {
                                var e;
                                t.done ? i(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, c)
                            };
                        u((o = o.apply(t, e || [])).next())
                    }))
                };
            const h = (0, s.Uu)({
                appComponent: function(t, e) {
                    return l(void 0, void 0, void 0, i().mark((function n() {
                        return i().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.abrupt("return", u(t, {
                                        store: e.store
                                    }));
                                case 1:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })))
                }
            }, {
                name: "model-react"
            })
        },
        "77a2": (t, e, n) => {
            "use strict";
            n.d(e, {
                JB: () => s,
                Kq: () => o,
                MA: () => i
            });
            var r = (0, n("V0mm").g$)(),
                o = r.Provider,
                i = r.useSharedModel,
                s = r.useStaticModel
        },
        Srb9: (t, e, n) => {
            "use strict";
            n.d(e, {
                L: () => a
            });
            var r = n("BK9r"),
                o = n("JtFa"),
                i = n("77a2"),
                s = Object.prototype.hasOwnProperty,
                a = function() {
                    var t = (0, r.z7)(),
                        e = t.route.id,
                        n = (0, i.JB)(o.K, o.l);
                    if (!s.call(n.dataByRouteId, e)) throw Error('Loader data not found for route "'.concat(t.route.path, '". Please make sure the page component where `useLoaderData` is called has a `loader` export.'));
                    return n.dataByRouteId[e]
                }
        },
        "0GOp": t => {
            var e = function(t) {
                "use strict";
                var e, n = Object.prototype,
                    r = n.hasOwnProperty,
                    o = "function" === typeof Symbol ? Symbol : {},
                    i = o.iterator || "@@iterator",
                    s = o.asyncIterator || "@@asyncIterator",
                    a = o.toStringTag || "@@toStringTag";

                function c(t, e, n) {
                    return Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }), t[e]
                }
                try {
                    c({}, "")
                } catch (P) {
                    c = function(t, e, n) {
                        return t[e] = n
                    }
                }

                function u(t, e, n, r) {
                    var o = e && e.prototype instanceof m ? e : m,
                        i = Object.create(o.prototype),
                        s = new j(r || []);
                    return i._invoke = function(t, e, n) {
                        var r = h;
                        return function(o, i) {
                            if (r === p) throw new Error("Generator is already running");
                            if (r === d) {
                                if ("throw" === o) throw i;
                                return A()
                            }
                            for (n.method = o, n.arg = i;;) {
                                var s = n.delegate;
                                if (s) {
                                    var a = k(s, n);
                                    if (a) {
                                        if (a === y) continue;
                                        return a
                                    }
                                }
                                if ("next" === n.method) n.sent = n._sent = n.arg;
                                else if ("throw" === n.method) {
                                    if (r === h) throw r = d, n.arg;
                                    n.dispatchException(n.arg)
                                } else "return" === n.method && n.abrupt("return", n.arg);
                                r = p;
                                var c = l(t, e, n);
                                if ("normal" === c.type) {
                                    if (r = n.done ? d : f, c.arg === y) continue;
                                    return {
                                        value: c.arg,
                                        done: n.done
                                    }
                                }
                                "throw" === c.type && (r = d, n.method = "throw", n.arg = c.arg)
                            }
                        }
                    }(t, n, s), i
                }

                function l(t, e, n) {
                    try {
                        return {
                            type: "normal",
                            arg: t.call(e, n)
                        }
                    } catch (P) {
                        return {
                            type: "throw",
                            arg: P
                        }
                    }
                }
                t.wrap = u;
                var h = "suspendedStart",
                    f = "suspendedYield",
                    p = "executing",
                    d = "completed",
                    y = {};

                function m() {}

                function g() {}

                function v() {}
                var _ = {};
                c(_, i, (function() {
                    return this
                }));
                var b = Object.getPrototypeOf,
                    w = b && b(b(I([])));
                w && w !== n && r.call(w, i) && (_ = w);
                var x = v.prototype = m.prototype = Object.create(_);

                function S(t) {
                    ["next", "throw", "return"].forEach((function(e) {
                        c(t, e, (function(t) {
                            return this._invoke(e, t)
                        }))
                    }))
                }

                function E(t, e) {
                    function n(o, i, s, a) {
                        var c = l(t[o], t, i);
                        if ("throw" !== c.type) {
                            var u = c.arg,
                                h = u.value;
                            return h && "object" === typeof h && r.call(h, "__await") ? e.resolve(h.__await).then((function(t) {
                                n("next", t, s, a)
                            }), (function(t) {
                                n("throw", t, s, a)
                            })) : e.resolve(h).then((function(t) {
                                u.value = t, s(u)
                            }), (function(t) {
                                return n("throw", t, s, a)
                            }))
                        }
                        a(c.arg)
                    }
                    var o;
                    this._invoke = function(t, r) {
                        function i() {
                            return new e((function(e, o) {
                                n(t, r, e, o)
                            }))
                        }
                        return o = o ? o.then(i, i) : i()
                    }
                }

                function k(t, n) {
                    var r = t.iterator[n.method];
                    if (r === e) {
                        if (n.delegate = null, "throw" === n.method) {
                            if (t.iterator.return && (n.method = "return", n.arg = e, k(t, n), "throw" === n.method)) return y;
                            n.method = "throw", n.arg = new TypeError("The iterator does not provide a 'throw' method")
                        }
                        return y
                    }
                    var o = l(r, t.iterator, n.arg);
                    if ("throw" === o.type) return n.method = "throw", n.arg = o.arg, n.delegate = null, y;
                    var i = o.arg;
                    return i ? i.done ? (n[t.resultName] = i.value, n.next = t.nextLoc, "return" !== n.method && (n.method = "next", n.arg = e), n.delegate = null, y) : i : (n.method = "throw", n.arg = new TypeError("iterator result is not an object"), n.delegate = null, y)
                }

                function O(t) {
                    var e = {
                        tryLoc: t[0]
                    };
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function C(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function j(t) {
                    this.tryEntries = [{
                        tryLoc: "root"
                    }], t.forEach(O, this), this.reset(!0)
                }

                function I(t) {
                    if (t) {
                        var n = t[i];
                        if (n) return n.call(t);
                        if ("function" === typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var o = -1,
                                s = function n() {
                                    for (; ++o < t.length;)
                                        if (r.call(t, o)) return n.value = t[o], n.done = !1, n;
                                    return n.value = e, n.done = !0, n
                                };
                            return s.next = s
                        }
                    }
                    return {
                        next: A
                    }
                }

                function A() {
                    return {
                        value: e,
                        done: !0
                    }
                }
                return g.prototype = v, c(x, "constructor", v), c(v, "constructor", g), g.displayName = c(v, a, "GeneratorFunction"), t.isGeneratorFunction = function(t) {
                    var e = "function" === typeof t && t.constructor;
                    return !!e && (e === g || "GeneratorFunction" === (e.displayName || e.name))
                }, t.mark = function(t) {
                    return Object.setPrototypeOf ? Object.setPrototypeOf(t, v) : (t.__proto__ = v, c(t, a, "GeneratorFunction")), t.prototype = Object.create(x), t
                }, t.awrap = function(t) {
                    return {
                        __await: t
                    }
                }, S(E.prototype), c(E.prototype, s, (function() {
                    return this
                })), t.AsyncIterator = E, t.async = function(e, n, r, o, i) {
                    void 0 === i && (i = Promise);
                    var s = new E(u(e, n, r, o), i);
                    return t.isGeneratorFunction(n) ? s : s.next().then((function(t) {
                        return t.done ? t.value : s.next()
                    }))
                }, S(x), c(x, a, "Generator"), c(x, i, (function() {
                    return this
                })), c(x, "toString", (function() {
                    return "[object Generator]"
                })), t.keys = function(t) {
                    var e = [];
                    for (var n in t) e.push(n);
                    return e.reverse(),
                        function n() {
                            for (; e.length;) {
                                var r = e.pop();
                                if (r in t) return n.value = r, n.done = !1, n
                            }
                            return n.done = !0, n
                        }
                }, t.values = I, j.prototype = {
                    constructor: j,
                    reset: function(t) {
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = e, this.done = !1, this.delegate = null, this.method = "next", this.arg = e, this.tryEntries.forEach(C), !t)
                            for (var n in this) "t" === n.charAt(0) && r.call(this, n) && !isNaN(+n.slice(1)) && (this[n] = e)
                    },
                    stop: function() {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    },
                    dispatchException: function(t) {
                        if (this.done) throw t;
                        var n = this;

                        function o(r, o) {
                            return a.type = "throw", a.arg = t, n.next = r, o && (n.method = "next", n.arg = e), !!o
                        }
                        for (var i = this.tryEntries.length - 1; i >= 0; --i) {
                            var s = this.tryEntries[i],
                                a = s.completion;
                            if ("root" === s.tryLoc) return o("end");
                            if (s.tryLoc <= this.prev) {
                                var c = r.call(s, "catchLoc"),
                                    u = r.call(s, "finallyLoc");
                                if (c && u) {
                                    if (this.prev < s.catchLoc) return o(s.catchLoc, !0);
                                    if (this.prev < s.finallyLoc) return o(s.finallyLoc)
                                } else if (c) {
                                    if (this.prev < s.catchLoc) return o(s.catchLoc, !0)
                                } else {
                                    if (!u) throw new Error("try statement without catch or finally");
                                    if (this.prev < s.finallyLoc) return o(s.finallyLoc)
                                }
                            }
                        }
                    },
                    abrupt: function(t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var o = this.tryEntries[n];
                            if (o.tryLoc <= this.prev && r.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
                                var i = o;
                                break
                            }
                        }
                        i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
                        var s = i ? i.completion : {};
                        return s.type = t, s.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(s)
                    },
                    complete: function(t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y
                    },
                    finish: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), C(n), y
                        }
                    },
                    catch: function(t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    C(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    },
                    delegateYield: function(t, n, r) {
                        return this.delegate = {
                            iterator: I(t),
                            resultName: n,
                            nextLoc: r
                        }, "next" === this.method && (this.arg = e), y
                    }
                }, t
            }(t.exports);
            try {
                regeneratorRuntime = e
            } catch (n) {
                "object" === typeof globalThis ? globalThis.regeneratorRuntime = e : Function("r", "regeneratorRuntime = r")(e)
            }
        },
        Z2pg: (t, e) => {
            "use strict";
            e.r = function() {
                let t = {
                    resolve: null,
                    reject: null,
                    status: "pending"
                };
                return t.promise = new Promise(((e, n) => {
                    t.resolve = n => {
                        e(n), t.status = "fulfilled"
                    }, t.reject = e => {
                        n(e), t.status = "rejected"
                    }
                })), t
            }
        },
        IJ96: function(t, e, n) {
            "use strict";
            var r = this && this.__importDefault || function(t) {
                return t && t.__esModule ? t : {
                    default: t
                }
            };
            Object.defineProperty(e, "__esModule", {
                value: !0
            });
            const o = r(n("h7FZ"));
            e.default = o.default
        },
        hSG1: (t, e) => {
            "use strict";
            e.A = function t(e, n) {
                function r(t) {
                    return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
                }
                let o = r(e);
                return o === r(n) && ("array" === o ? function() {
                    if (e.length !== n.length) return !1;
                    for (let r = 0; r < e.length; r++)
                        if (!t(e[r], n[r])) return !1;
                    return !0
                }() : "object" === o ? function() {
                    if (Object.keys(e).length !== Object.keys(n).length) return !1;
                    for (let r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r) && !t(e[r], n[r])) return !1;
                    return !0
                }() : "function" === o ? e.toString() === n.toString() : e === n)
            }
        },
        v7Og: (t, e) => {
            "use strict";
            e.A = null
        },
        VyXn: (t, e, n) => {
            "use strict";
            n.d(e, {
                IG: () => C,
                NP: () => E,
                Sz: () => pe
            });
            const r = () => {},
                o = Object.create(null),
                i = [],
                s = Object.assign,
                a = Object.prototype.hasOwnProperty,
                c = (t, e) => a.call(t, e),
                u = Object.prototype.toString,
                l = t => u.call(t),
                h = Array.isArray,
                f = t => "[object Map]" === l(t),
                p = t => "[object Set]" === l(t),
                d = t => "symbol" === typeof t,
                y = t => null !== t && "object" === typeof t,
                m = t => "[object Object]" === l(t),
                g = t => "string" === typeof t && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
                v = (t, e) => Object.is(t, e),
                _ = (t, e, n) => {
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: n
                    })
                };
            const b = Array.prototype.slice;
            const w = Object.prototype.propertyIsEnumerable;

            function x(t) {
                return Array.isArray(t) ? b.call(t) : f(t) ? new Map(t) : p(t) ? new Set(t) : Object.getPrototypeOf(t) === Object.prototype ? function(t) {
                    const e = {},
                        n = S(t);
                    for (let r = 0; r < n.length; r++) {
                        const o = n[r],
                            i = t[o];
                        w.call(t, o) ? e[o] = i : Object.defineProperty(e, o, {
                            configurable: !0,
                            writable: !0,
                            enumerable: !1,
                            value: i
                        })
                    }
                    return e
                }(t) : function(t) {
                    const e = Object.getOwnPropertyDescriptors(t),
                        n = S(e);
                    for (let r = 0; r < n.length; r++) {
                        const o = n[r],
                            i = e[o];
                        !1 === i.writable && (i.writable = !0, i.configurable = !0), (i.get || i.set) && (e[o] = {
                            configurable: !0,
                            writable: !0,
                            enumerable: i.enumerable,
                            value: t[o]
                        })
                    }
                    return Object.create(Object.getPrototypeOf(t), e)
                }(t)
            }
            const S = "undefined" !== typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : "undefined" !== typeof Object.getOwnPropertySymbols ? t => Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)) : Object.getOwnPropertyNames;
            const E = t => t;

            function k(t, ...e) {
                console.warn(`[Doura warn] ${t}`, ...e)
            }

            function O(t) {
                switch ((t => l(t).slice(8, -1))(t)) {
                    case "Object":
                        return 1;
                    case "Array":
                        return 2;
                    case "Set":
                        return 3;
                    case "Map":
                        return 4;
                    default:
                        return 0
                }
            }

            function C(t) {
                return _(t, "__r_skip", !0), t
            }

            function j(t) {
                return !!t && !!t.__r_state
            }

            function I(t) {
                const e = A(t);
                return e ? I(e.base) : t
            }

            function A(t) {
                return t && t.__r_state
            }

            function P(t) {
                return t.copy || t.base
            }

            function T(t) {
                t.modified || (t.modified = !0, t.parent && T(t.parent))
            }
            let R;
            class D {
                constructor(t = !1) {
                    this.active = !0, this.effects = [], this.cleanups = [], !t && R && (this.parent = R, this.index = (R.scopes || (R.scopes = [])).push(this) - 1)
                }
                run(t) {
                    if (this.active) {
                        const e = R;
                        try {
                            return R = this, t()
                        } finally {
                            R = e
                        }
                    } else 0
                }
                on() {
                    R = this
                }
                off() {
                    R = this.parent
                }
                stop(t) {
                    if (this.active) {
                        let e, n;
                        for (e = 0, n = this.effects.length; e < n; e++) this.effects[e].stop();
                        for (e = 0, n = this.cleanups.length; e < n; e++) this.cleanups[e]();
                        if (this.scopes)
                            for (e = 0, n = this.scopes.length; e < n; e++) this.scopes[e].stop(!0);
                        if (this.parent && !t) {
                            const t = this.parent.scopes.pop();
                            t && t !== this && (this.parent.scopes[this.index] = t, t.index = this.index)
                        }
                        this.active = !1
                    }
                }
            }
            const N = t => {
                    const e = new Set(t);
                    return e.w = 0, e.n = 0, e
                },
                L = t => (t.w & U) > 0,
                M = t => (t.n & U) > 0,
                F = new WeakMap,
                H = new WeakMap;
            let V = 0,
                U = 1;
            let $;
            const z = Symbol(""),
                q = Symbol("");
            let B = 0;
            class G {
                constructor(t, e = null, n) {
                    this.fn = t, this.scheduler = e, this.id = B++, this.deps = [], this.active = !0, this.parent = void 0,
                        function(t, e = R) {
                            e && e.active && e.effects.push(t)
                        }(this, n)
                }
                run() {
                    if (!this.active) return this.fn();
                    let t = $;
                    const e = Y;
                    for (; t;) {
                        if (t === this) return;
                        t = t.parent
                    }
                    try {
                        return this.parent = $, $ = this, Y = !0, U = 1 << ++V, V <= 30 ? (({
                            deps: t
                        }) => {
                            if (t.length)
                                for (let e = 0; e < t.length; e++) t[e].w |= U
                        })(this) : W(this), this.fn()
                    } finally {
                        V <= 30 && (t => {
                            const {
                                deps: e
                            } = t;
                            if (e.length) {
                                let n = 0;
                                for (let r = 0; r < e.length; r++) {
                                    const o = e[r];
                                    L(o) && !M(o) ? o.delete(t) : e[n++] = o, o.w &= ~U, o.n &= ~U
                                }
                                e.length = n
                            }
                        })(this), U = 1 << --V, $ = this.parent, Y = e, this.parent = void 0, this.deferStop && this.stop()
                    }
                }
                stop() {
                    $ === this ? this.deferStop = !0 : this.active && (W(this), this.onStop && this.onStop(), this.active = !1)
                }
            }

            function W(t) {
                const {
                    deps: e
                } = t;
                if (e.length) {
                    for (let n = 0; n < e.length; n++) e[n].delete(t);
                    e.length = 0
                }
            }
            let Y = !0;
            const K = [];

            function Z() {
                K.push(Y), Y = !1
            }

            function J() {
                const t = K.pop();
                Y = void 0 === t || t
            }

            function X(t, e, n) {
                if (Y && $) {
                    let e = F.get(t);
                    e || F.set(t, e = new Map);
                    let r = e.get(n);
                    r || e.set(n, r = N()), tt(r)
                }
            }

            function Q(t) {
                if (Y && $) {
                    const e = t.__r_state;
                    if (!e) return;
                    let n = H.get(e);
                    n || H.set(e, n = N()), tt(n)
                }
            }

            function tt(t) {
                let e = !1;
                V <= 30 ? M(t) || (t.n |= U, e = !L(t)) : e = !t.has($), e && (t.add($), $.deps.push(t))
            }

            function et(t) {
                const e = H.get(t);
                if (e) {
                    const t = [...e];
                    for (const e of t) e.view && (e.view.mightChange = !0)
                }
            }

            function nt(t, e, n, r, o) {
                var i;
                const s = F.get(t),
                    a = t.base;
                let c = [];
                if (s)
                    if ("clear" === e) c = [...s.values()];
                    else if ("length" === n && h(a)) s.forEach(((t, e) => {
                    ("length" === e || e >= r) && c.push(t)
                }));
                else switch (void 0 !== n && c.push(s.get(n)), e) {
                    case "add":
                        h(a) ? g(n) && c.push(s.get("length")) : (c.push(s.get(z)), f(a) && c.push(s.get(q)));
                        break;
                    case "delete":
                        h(a) || (c.push(s.get(z)), f(a) && c.push(s.get(q)));
                        break;
                    case "set":
                        f(a) && c.push(s.get(z))
                }
                if (1 === c.length) c[0] && rt(c[0]);
                else {
                    const t = [];
                    for (const e of c) e && t.push(...e);
                    rt(N(t))
                }
                const u = null === (i = t.root) || void 0 === i ? void 0 : i.listeners;
                u && u.length && u.forEach((t => t()))
            }

            function rt(t) {
                const e = h(t) ? t : [...t];
                for (const n of e) n.view && ot(n);
                for (const n of e) n.view || ot(n)
            }

            function ot(t) {
                (t !== $ || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
            }
            class it {
                constructor(t, {
                    disableCache: e = !1
                }) {
                    this.dep = void 0, this.mightChange = !1, this.dirty = !0, this.effect = new G(t, (() => {
                        this.dirty || (this.dirty = !0, function(t) {
                            (t = I(t)).dep && rt(t.dep)
                        }(this))
                    })), this.effect.view = this, this.effect.active = this._cacheable = !e
                }
                get value() {
                    const t = I(this);
                    return function(t) {
                        Y && $ && tt((t = I(t)).dep || (t.dep = N()))
                    }(t), !t.dirty && t._cacheable || (t.dirty = !1, t._value = t.effect.run()), t._value
                }
                set value(t) {
                    0
                }
            }
            const st = new Set(["__proto__"]),
                at = new Set(Object.getOwnPropertyNames(Symbol).filter((t => "arguments" !== t && "caller" !== t)).map((t => Symbol[t])).filter(d));

            function ct(t) {
                t.copy || (t.copy = x(t.base))
            }

            function ut(t, e) {
                const n = t.__r_state;
                return (n ? P(n) : t)[e]
            }
            const lt = pt(),
                ht = ft();

            function ft() {
                const t = {};
                return ["includes", "indexOf", "lastIndexOf"].forEach((e => {
                    t[e] = function(...t) {
                        const n = A(this),
                            r = P(n);
                        for (let e = 0, i = this.length; e < i; e++) X(n, 0, e + "");
                        const o = r[e](...t);
                        return -1 === o || !1 === o ? r[e](...t.map(I)) : o
                    }
                })), ["push", "pop", "shift", "unshift", "splice"].forEach((e => {
                    t[e] = function(...t) {
                        Z();
                        const n = P(A(this))[e].apply(this, t);
                        return J(), n
                    }
                })), t
            }

            function pt() {
                return function(t, e, n) {
                    const r = P(t);
                    if ("__r_isReactive" === e) return !0;
                    if ("__r_state" === e && n === jt.get(t)) return t;
                    if (h(r) && c(ht, e)) return Reflect.get(ht, e, n);
                    let o = Reflect.get(r, e, n);
                    return (d(e) ? at.has(e) : st.has(e)) ? o : (X(t, 0, e), c(r, e) ? (t.disposed || !y(o) || (j(o) || (ct(t), o = t.copy[e] = At(o, t)), Q(o)), o) : o)
                }
            }

            function dt() {
                return function(t, e, n, r) {
                    const o = P(t),
                        i = ut(o, e),
                        s = h(o) && g(e) ? Number(e) < o.length : c(o, e);
                    if (!t.modified) {
                        const r = null === i || void 0 === i ? void 0 : i.__r_state;
                        if (r && r.base === n) return t.copy[e] = n, !0;
                        if (v(n, i) && (void 0 !== n || c(t.base, e))) return !0;
                        ct(t), T(t)
                    }
                    return v(t.copy[e], n) && (void 0 !== n || e in t.copy) || (t.copy[e] = n, t === A(r) && (s ? v(n, i) || nt(t, "set", e, n) : nt(t, "add", e, n), function(t) {
                        let e = t;
                        for (; e;) et(e), e = e.parent
                    }(t))), !0
                }
            }
            const yt = {
                get: lt,
                set: dt(),
                deleteProperty: function(t, e) {
                    const n = c(P(t), e);
                    if ((void 0 !== ut(t.base, e) || e in t.base) && (ct(t), T(t)), t.copy) {
                        const r = delete t.copy[e];
                        return r && n && nt(t, "delete", e, void 0), r
                    }
                    return !0
                },
                has: function(t, e) {
                    const n = P(t),
                        r = Reflect.has(n, e);
                    return d(e) && at.has(e) || X(t, 0, e), r
                },
                ownKeys: function(t) {
                    const e = P(t);
                    return X(t, 0, h(e) ? "length" : z), Reflect.ownKeys(e)
                },
                setPrototypeOf: function(t, e) {
                    const n = Reflect.setPrototypeOf(t.base, e);
                    return n && t.copy && Reflect.setPrototypeOf(t.copy, e), n
                },
                getOwnPropertyDescriptor: function(t, e) {
                    const n = P(t),
                        r = Reflect.getOwnPropertyDescriptor(n, e);
                    return r ? {
                        writable: !0,
                        configurable: !h(n) || "length" !== e,
                        enumerable: r.enumerable,
                        value: n[e]
                    } : r
                }
            };

            function mt(t) {
                t.copy || (t.copy = new Set, t.base.forEach((e => {
                    if (y(e)) {
                        const n = At(e, t);
                        Q(n), e !== n && t.drafts.set(e, n), t.copy.add(n)
                    } else t.copy.add(e)
                })))
            }

            function gt(t) {
                1 === t.type ? function(t) {
                    t.copy || (t.copy = new Map(t.base))
                }(t) : mt(t)
            }

            function vt(t) {
                const e = this.__r_state,
                    n = P(e);
                if (X(e, 0, t), !n.has(t)) return;
                let r = n.get(t);
                return y(r) ? (j(r) || (gt(e), r = At(r, e), e.copy.set(t, r)), Q(r), r) : r
            }

            function _t(t, e) {
                const n = this.__r_state,
                    r = P(n),
                    o = r.has(t),
                    i = r.get(t),
                    s = () => {
                        gt(n), T(n), n.copy.set(t, e)
                    };
                return o ? v(e, i) || (s(), nt(n, "set", t, e)) : (s(), nt(n, "add", t, e)), this
            }

            function bt(t) {
                const e = this.__r_state;
                return P(e).has(t) || (mt(e), T(e), e.copy.add(t), nt(e, "add", t, t)), this
            }

            function wt(t) {
                const e = this.__r_state;
                return X(e, 0, t), e.copy ? !!e.copy.has(t) || 2 === e.type && (e.drafts.has(t) && e.drafts.has(e.drafts.get(t))) : e.base.has(t)
            }

            function xt(t) {
                const e = this.__r_state,
                    n = P(e),
                    r = n.has(t);
                "get" in n && n.get(t), gt(e), T(e);
                let o = e.copy.delete(t);
                return 2 !== e.type || o || (o = !!e.drafts.has(t) && e.drafts.delete(e.drafts.get(t))), r && nt(e, "delete", t, void 0), o
            }

            function St() {
                const t = this.__r_state,
                    e = P(t),
                    n = 0 !== e.size,
                    r = e.clear();
                return n && (gt(t), T(t), t.copy.clear(), nt(t, "clear", void 0, void 0)), r
            }

            function Et() {
                const t = {
                    get: vt,
                    get size() {
                        return X(t = this.__r_state, 0, z), P(t).size;
                        var t
                    },
                    has: wt,
                    add: bt,
                    set: _t,
                    delete: xt,
                    clear: St,
                    keys() {
                        const t = this.__r_state;
                        return 1 === t.type ? function(t) {
                            return X(t, 0, q), P(t).keys()
                        }(t) : function(t) {
                            return X(t, 0, z), mt(t), t.copy.values()
                        }(t)
                    },
                    forEach(t, e) {
                        const n = this.__r_state;
                        1 === n.type ? function(t, e, n, r) {
                            X(e, 0, z), P(e).forEach(((o, i) => n.call(r, e.proxy.get(i), i, t)))
                        }(this, n, t, e) : function(t, e, n, r) {
                            const o = e.proxy.values();
                            let i = o.next();
                            for (; !i.done;) n.call(r, i.value, i.value, t), i = o.next()
                        }(this, n, t, e)
                    }
                };
                return ["values", "entries", Symbol.iterator].forEach((e => {
                    t[e] = function(t) {
                        return function(...e) {
                            const n = this.__r_state,
                                r = 1 === n.type,
                                o = "entries" === t || t === Symbol.iterator && r;
                            if (r) {
                                const t = n.proxy.keys();
                                return {
                                    next() {
                                        const {
                                            value: e,
                                            done: r
                                        } = t.next(), i = n.proxy.get(e);
                                        return r ? {
                                            value: i,
                                            done: r
                                        } : {
                                            value: o ? [e, i] : i,
                                            done: r
                                        }
                                    },
                                    [Symbol.iterator]() {
                                        return this
                                    }
                                }
                            }
                            return X(n, 0, z), mt(n), n.copy[t](...e)
                        }
                    }(e)
                })), [t]
            }
            const [kt] = Et();

            function Ot() {
                const t = kt;
                return (e, n, r) => {
                    if ("__r_isReactive" === n) return !0;
                    if ("__r_state" === n) return e;
                    const o = P(e);
                    return Reflect.get(c(t, n) && n in o ? t : o, n, r)
                }
            }
            const Ct = {
                get: Ot()
            };
            const jt = new WeakMap;
            let It = 0;

            function At(t, e) {
                const n = O(t);
                if (0 === n) return t;
                if (t.__r_skip || !Object.isExtensible(t)) return t;
                if (t.__r_state) return t;
                let r = {
                        type: 0,
                        id: It++,
                        root: null,
                        parent: e,
                        base: t,
                        proxy: null,
                        copy: null,
                        modified: !1,
                        disposed: !1,
                        listeners: [],
                        children: []
                    },
                    o = r,
                    i = yt;
                3 === n ? (r.type = 2, r.drafts = new Map, o = new Set, i = Ct) : 4 === n ? (r.type = 1, o = new Map, i = Ct) : 2 === n && (o = []), o !== r && Object.keys(r).forEach((t => {
                    Object.defineProperty(o, t, {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: r[t]
                    })
                }));
                const s = new Proxy(o, i);
                return o.proxy = s, e ? (o.root = e.root, e.children.push(o)) : o.root = o, jt.set(o, s), o.proxy
            }

            function Pt(t, e) {
                const n = function(t, {
                    copies: e,
                    snapshots: n
                }) {
                    const r = t => {
                            switch (O(t)) {
                                case 1:
                                case 2:
                                    return l;
                                case 4:
                                case 3:
                                    return u;
                                default:
                                    throw new Error("Unpected Error. Please file an issue on https://github.com/dourajs/doura")
                            }
                        },
                        o = t => {
                            if (!y(t)) return t;
                            if (j(t)) {
                                let o = n.get(t);
                                if (!o) {
                                    const i = e.get(t.__r_state);
                                    n.set(t, o = new Proxy(i, r(i)))
                                }
                                return o
                            }
                            return t
                        },
                        i = t => function(...e) {
                            const n = this.__r_raw,
                                r = "entries" === t || t === Symbol.iterator && f(this),
                                i = n[t](...e);
                            return {
                                next() {
                                    const {
                                        value: t,
                                        done: e
                                    } = i.next();
                                    return e ? {
                                        value: o(t),
                                        done: e
                                    } : {
                                        value: r ? [t[0], o(t[1])] : o(t),
                                        done: e
                                    }
                                },
                                [Symbol.iterator]() {
                                    return this
                                }
                            }
                        },
                        s = t => function(...e) {
                            return this.__r_raw[t](...e)
                        },
                        a = {
                            get size() {
                                return this.__r_raw.size
                            },
                            get(t) {
                                const e = this.__r_raw;
                                if (e.has(t)) return o(e.get(t))
                            },
                            forEach(t, e) {
                                const n = this.__r_raw;
                                return n.forEach(((r, i) => (r = o(r), t.call(e, r, f(n) ? i : r, n))))
                            }
                        };
                    ["has", "add", "set", "delete", "clear"].forEach((t => {
                        a[t] = s(t)
                    })), ["keys", "values", "entries", Symbol.iterator].forEach((t => {
                        a[t] = i(t)
                    }));
                    const u = {
                            get: (t, e, n) => "__r_raw" === e ? t : Reflect.get(c(a, e) && e in t ? a : t, e, n)
                        },
                        l = {
                            get: (t, e, n) => o(Reflect.get(t, e, n))
                        };
                    return r(t)
                }(t, e);
                if (j(t)) {
                    const r = t.__r_state;
                    return new Proxy(e.copies.get(r), n)
                }
                return new Proxy(t, n)
            }

            function Tt(t, e, n) {
                if (!y(t)) return t;
                const r = function(t, e) {
                    const n = new Map,
                        r = {
                            copies: n,
                            snapshots: e || new Map
                        },
                        o = r.snapshots,
                        i = [t.__r_state];
                    for (; i.length;) {
                        const t = i.pop();
                        let e;
                        t.modified ? (e = x(t.copy), Rt(t, e), o.delete(t.proxy)) : e = Pt(t.base, r), n.set(t, e);
                        for (const n of t.children) i.push(n)
                    }
                    return r
                }(e, n);
                return Pt(t, r)
            }

            function Rt(t, e) {
                t.modified = !1, t.base = e
            }

            function Dt(t, e) {
                const n = t.createView((function() {
                        return e(this, this.$actions)
                    })),
                    r = n.getSnapshot;
                return r.destory = function() {
                    n.effect.stop();
                    const e = t.effectScope.effects.indexOf(n.effect);
                    e >= 0 && t.effectScope.effects.splice(e, 1)
                }, r
            }
            const Nt = s({
                    $name: t => t.name,
                    $rawState: t => t.getState(),
                    $state: t => t.stateValue,
                    $actions: t => t.actions,
                    $views: t => t.views,
                    $patch: t => t.patch,
                    $onAction: t => t.onAction,
                    $subscribe: t => t.subscribe,
                    $isolate: t => t.isolate,
                    $getApi: t => t.getApi,
                    $createView: t => Dt.bind(null, t)
                }),
                Lt = t => ({
                    _: e
                }, n) => {
                    const {
                        actions: r,
                        views: o,
                        accessCache: i,
                        ctx: s
                    } = e;
                    let a;
                    if (a = t ? e.getState() : e.stateValue, "$" !== n[0]) {
                        const t = i[n];
                        if (void 0 !== t) switch (t) {
                            case 0:
                                return a[n];
                            case 2:
                                return o[n];
                            case 1:
                                return r[n];
                            case 3:
                                return s[n]
                        } else {
                            if (c(a, n)) return i[n] = 0, a[n];
                            if (c(s, n)) return i[n] = 3, s[n]
                        }
                    }
                    const u = Nt[n];
                    return u ? u(e) : c(s, n) ? (i[n] = 3, s[n]) : void((t => "_" === t || "$" === t)(n[0]) && c(a, n) && k(`Property ${JSON.stringify(n)} must be accessed via $state because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`))
                },
                Mt = ({
                    _: t
                }, e, n) => {
                    const {
                        ctx: r,
                        actions: o,
                        views: i,
                        accessContext: s,
                        stateRef: {
                            value: a
                        }
                    } = t;
                    return c(a, e) ? 1 !== s && (a[e] = n, !0) : !c(o, e) && (!c(i, e) && ("$state" === e ? "bigint" !== typeof n && "symbol" !== typeof n && (t.replace(n), !0) : ("$" !== e[0] || !c(Nt, e)) && (r[e] = n, !0)))
                },
                Ft = {
                    get: Lt(!1),
                    set: Mt
                },
                Ht = {
                    get: Lt(!0),
                    set: Mt
                };

            function Vt(t, e, ...n) {
                console.error(t)
            }
            let Ut = !1,
                $t = !1;
            const zt = [];
            let qt = 0;
            const Bt = [];
            let Gt = null,
                Wt = 0;
            const Yt = [];
            let Kt = null,
                Zt = 0;
            const Jt = Promise.resolve();
            let Xt = null,
                Qt = null;

            function te(t) {
                zt.length && zt.includes(t, Ut && t.allowRecurse ? qt + 1 : qt) || t === Qt || (null == t.id ? zt.push(t) : zt.splice(function(t) {
                    let e = qt + 1,
                        n = zt.length;
                    for (; e < n;) {
                        const r = e + n >>> 1;
                        re(zt[r]) < t ? e = r + 1 : n = r
                    }
                    return e
                }(t.id), 0, t), Ut || $t || ($t = !0, Xt = Jt.then(oe)))
            }

            function ee(t) {
                const e = zt.indexOf(t);
                e >= qt && zt.splice(e, 1)
            }

            function ne(t, e = null) {
                if (Bt.length) {
                    for (Qt = e, Gt = [...new Set(Bt)], Bt.length = 0, Wt = 0; Wt < Gt.length; Wt++) Gt[Wt]();
                    Gt = null, Wt = 0, Qt = null, ne(t, e)
                }
            }
            const re = t => null == t.id ? 1 / 0 : t.id;

            function oe(t) {
                $t = !1, Ut = !0, ne(t), zt.sort(((t, e) => re(t) - re(e)));
                try {
                    for (qt = 0; qt < zt.length; qt++) {
                        const t = zt[qt];
                        if (t && !1 !== t.active) {
                            0;
                            try {
                                t()
                            } catch (e) {
                                Vt(e)
                            }
                        }
                    }
                } finally {
                    qt = 0, zt.length = 0,
                        function(t) {
                            if (ne(), Yt.length) {
                                const t = [...new Set(Yt)];
                                if (Yt.length = 0, Kt) return void Kt.push(...t);
                                for (Kt = t, Kt.sort(((t, e) => re(t) - re(e))), Zt = 0; Zt < Kt.length; Zt++) Kt[Zt]();
                                Kt = null, Zt = 0
                            }
                        }(), Ut = !1, Xt = null, (zt.length || Bt.length || Yt.length) && oe(t)
                }
            }
            var ie;

            function se(t, e) {
                const n = Object.keys(e);
                n.length && n.forEach((n => {
                    c(t, n) && m(e[n]) ? se(t[n], e[n]) : t[n] = e[n]
                }))
            }

            function ae(t) {
                t.dirty = !0
            }! function(t) {
                t.REPLACE = "replace", t.MODIFY = "modify", t.PATCH = "patch"
            }(ie || (ie = {}));
            class ce {
                constructor(t, {
                    name: e,
                    initState: n
                }) {
                    var o;
                    this.viewInstances = [], this._actionDepth = 0, this._api = null, this._actionListeners = new Set, this._subscribers = new Set, this._depListenersHandlers = [], this._watchStateChange = !0, this._destroyed = !1, this._lastDraftToSnapshot = new Map, this.patch = this.patch.bind(this), this.onAction = this.onAction.bind(this), this.subscribe = this.subscribe.bind(this), this.isolate = this.isolate.bind(this), this.getApi = this.getApi.bind(this), this._update = this._update.bind(this), this.options = t, this.name = e || "", this._isDispatching = !1, this._initState = n || t.state, this.stateRef = At({
                        value: this._initState
                    }), this._update.__name = e, this._draftListenerHandler = function(t, e) {
                        const n = t.__r_state;
                        return n.disposed ? r : (n.listeners.push(e), () => {
                            const t = n.listeners.indexOf(e);
                            t >= 0 && n.listeners.splice(t, 1)
                        })
                    }(this.stateRef, (() => {
                        this._watchStateChange && te(this._update)
                    })), this._setState(this._initState), this.actions = Object.create(null), this.views = Object.create(null), this.accessContext = 0, this.ctx = {}, _(this.ctx, "_", this), this.accessCache = Object.create(null), this.proxy = new Proxy(this.ctx, Ft), this.publicInst = new Proxy(this.ctx, Ht), this.effectScope = new D(o), this._initActions(), this._initViews()
                }
                patch(t) {
                    m(t) && this._currentState && (this._watchStateChange = !1, se(this.proxy.$state, t), this._watchStateChange = !0, this.dispatch({
                        type: ie.PATCH,
                        args: {
                            patch: t
                        }
                    }))
                }
                replace(t) {
                    if (y(t)) {
                        this._watchStateChange = !1, this.stateRef.value = t, this._watchStateChange = !0;
                        for (const t of this.viewInstances) t.effect.scheduler();
                        this.dispatch({
                            type: ie.REPLACE,
                            payload: t
                        })
                    } else k(`replace argument should be an object, but receive a ${Object.prototype.toString.call(t)}`)
                }
                getState() {
                    return this._currentState
                }
                getApi() {
                    if (null === this._api) {
                        const t = this._api = Object.assign(Object.assign({}, this._currentState), this.views);
                        for (const e of Object.keys(this.actions)) _(t, e, this.actions[e])
                    }
                    return this._api
                }
                onAction(t) {
                    return this._actionListeners.add(t), () => {
                        this._actionListeners.delete(t)
                    }
                }
                subscribe(t) {
                    return this._subscribers.add(t), () => {
                        this._subscribers.delete(t)
                    }
                }
                isolate(t) {
                    Z();
                    const e = t(this.stateValue);
                    return J(), e
                }
                depend(t) {
                    this._depListenersHandlers.push(t.subscribe((t => {
                        this._triggerListener(Object.assign(Object.assign({}, t), {
                            model: this.proxy
                        }))
                    })))
                }
                createView(t) {
                    let e;
                    return this.effectScope.run((() => {
                        e = function(t, e = {}) {
                            return new it(t, e)
                        }((() => {
                            const n = this.accessContext;
                            this.accessContext = 1;
                            const r = e.__externalArgs;
                            try {
                                return t.call(this.proxy, this.proxy, ...r || i)
                            } finally {
                                this.accessContext = n
                            }
                        }))
                    })), e.getSnapshot = () => {
                        const t = e.value;
                        return e.mightChange ? (e.mightChange = !1, e.__snapshot = Tt(t, this.stateRef.value)) : e.__pre !== t && (e.__snapshot = Tt(t, this.stateRef.value)), e.__pre = t, e.__snapshot
                    }, this.viewInstances.push(e), e
                }
                reducer(t, e) {
                    switch (e.type) {
                        case ie.MODIFY:
                        case ie.PATCH:
                            {
                                const t = new Map(this._lastDraftToSnapshot);
                                return this._lastDraftToSnapshot = t,
                                Tt(this.stateRef.value, this.stateRef.value, this._lastDraftToSnapshot)
                            }
                        case ie.REPLACE:
                            return e.payload;
                        default:
                            return t
                    }
                }
                dispatch(t) {
                    if ("undefined" === typeof t.type) return t;
                    if (this._isDispatching) return t;
                    let e;
                    try {
                        this._isDispatching = !0, e = this.reducer(this._currentState, t)
                    } finally {
                        this._isDispatching = !1
                    }
                    return e !== this._currentState && (this._setState(e), this._triggerListener(Object.assign({
                        type: t.type,
                        model: this.proxy,
                        target: this.proxy
                    }, t.args))), t
                }
                destroy() {
                    this._destroyed = !0, this._api = null, this._lastDraftToSnapshot.clear(), this._currentState = null, this.stateRef = {
                        value: null
                    }, this._subscribers.clear(), this.effectScope.stop();
                    for (const t of this._depListenersHandlers) t();
                    this._draftListenerHandler()
                }
                _setState(t) {
                    this._api = null, this._currentState = t, this.stateValue = this.stateRef.value
                }
                _update() {
                    !this._destroyed && function(t) {
                        return t.__r_state.modified
                    }(this.stateRef) && (this.dispatch({
                        type: ie.MODIFY
                    }), function(t) {
                        const e = t.__r_state;
                        e && (e.modified = !1)
                    }(this.stateRef))
                }
                _triggerListener(t) {
                    for (const e of this._subscribers) e(t)
                }
                _initActions() {
                    const t = this.options.actions;
                    if (t)
                        for (const e of Object.keys(t)) {
                            this.accessCache[e] = 1;
                            const n = t[e];
                            Object.defineProperty(this.actions, e, {
                                configurable: !0,
                                enumerable: !0,
                                writable: !1,
                                value: (...t) => {
                                    if (1 === this.accessContext) return void 0;
                                    let r;
                                    this._actionDepth++;
                                    try {
                                        for (const n of this._actionListeners) n({
                                            name: e,
                                            args: t
                                        });
                                        r = n.call(this.proxy, ...t)
                                    } finally {
                                        0 === --this._actionDepth && (ee(this._update), this._update())
                                    }
                                    return r
                                }
                            })
                        }
                }
                _initViews() {
                    const t = this.options.views;
                    if (t)
                        for (const e of Object.keys(t)) {
                            this.accessCache[e] = 2;
                            const n = t[e],
                                r = n.length > 1,
                                o = this.createView(n),
                                i = o;
                            0;
                            const s = r ? () => (...t) => {
                                const e = i.__externalArgs;
                                if (e) {
                                    if (e.length !== t.length) ae(o);
                                    else
                                        for (let n = 0; n < e.length; n++)
                                            if (e[n] !== t[n]) {
                                                ae(o);
                                                break
                                            }
                                } else ae(o);
                                return i.__externalArgs = t, o.getSnapshot()
                            } : o.getSnapshot;
                            Object.defineProperty(this.views, e, {
                                configurable: !0,
                                enumerable: !0,
                                get: s,
                                set: () => !1
                            })
                        }
                }
            }

            function ue(t, e = {}) {
                return new ce(t, e)
            }
            let le = null;

            function he(t) {
                le = t
            }
            class fe {
                constructor(t = o, e = []) {
                    this._subscribers = new Set, this._initialState = t, this._models = (() => {
                        const t = new Map,
                            e = {
                                get: e => t.get(e),
                                set(e, n) {
                                    t.set(e, n)
                                },
                                each(e) {
                                    for (const [n, r] of t.entries()) e(r, n)
                                },
                                clear() {
                                    e.each((t => t.destroy())), t.clear()
                                }
                            };
                        return e
                    })();
                    const n = () => {
                        for (const t of this._subscribers) t()
                    };
                    this._onModelChange = () => {
                        te(n)
                    }, this._hooks = e.map((([t, e]) => t(e))), this._hooks.map((e => {
                        var n;
                        return null === (n = e.onInit) || void 0 === n ? void 0 : n.call(e, {
                            initialState: t
                        }, {
                            doura: this
                        })
                    }))
                }
                getModel(t, e) {
                    return this.getModelInstance({
                        name: t,
                        model: e
                    }).publicInst
                }
                getDetachedModel(t) {
                    return this.getModelInstance({
                        model: t
                    }).publicInst
                }
                getModelInstance({
                    name: t,
                    model: e
                }) {
                    const n = t && this._models.get(t);
                    if (n) return n;
                    let r;
                    if ("function" === typeof e) {
                        const n = le,
                            o = this._createModelProxy();
                        try {
                            he({
                                manager: this,
                                model: o
                            }), r = this._initModel({
                                name: t,
                                model: e()
                            })
                        } finally {
                            he(n)
                        }
                        o.setModel(r)
                    } else {
                        if ("object" !== typeof e) throw new Error("invalid model");
                        r = this._initModel({
                            name: t,
                            model: e
                        })
                    }
                    return r
                }
                getState() {
                    const t = {};
                    return this._models.each(((e, n) => {
                        t[n] = e.getState()
                    })), t
                }
                subscribe(t) {
                    return this._subscribers.add(t), () => {
                        this._subscribers.delete(t)
                    }
                }
                destroy() {
                    this._hooks.map((t => {
                        var e;
                        return null === (e = t.onDestroy) || void 0 === e ? void 0 : e.call(t)
                    })), this._models.clear(), this._subscribers.clear(), this._initialState = o
                }
                _createModelProxy() {
                    const t = [];
                    return {
                        addChild(e) {
                            t.push(e)
                        },
                        setModel(e) {
                            for (const n of t) e.depend(n);
                            t.length = 0
                        }
                    }
                }
                _initModel({
                    name: t,
                    model: e
                }) {
                    if (!t) return ue(e);
                    this._hooks.map((n => {
                        var r;
                        return null === (r = n.onModel) || void 0 === r ? void 0 : r.call(n, t, e, {
                            doura: this
                        })
                    }));
                    const n = ue(e, {
                        name: t,
                        initState: this._getInitialState(t)
                    });
                    return n.subscribe(this._onModelChange), this._models.set(t, n), this._hooks.map((t => {
                        var e;
                        null === (e = t.onModelInstance) || void 0 === e || e.call(t, n.publicInst, {
                            doura: this
                        })
                    })), n
                }
                _getInitialState(t) {
                    const e = this._initialState[t];
                    return e && delete this._initialState[t], e
                }
            }

            function pe({
                initialState: t,
                plugins: e = []
            } = {}) {
                return function({
                    initialState: t,
                    plugins: e
                } = {}) {
                    return new fe(t, e)
                }({
                    initialState: t,
                    plugins: e
                })
            }
        },
        aJbU: (t, e, n) => {
            "use strict";
            var r = n("maj8"),
                o = n("DTvD");

            function i(t) {
                for (var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, n = 1; n < arguments.length; n++) e += "&args[]=" + encodeURIComponent(arguments[n]);
                return "Minified React error #" + t + "; visit " + e + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
            }
            var s = "function" === typeof Symbol && Symbol.for,
                a = s ? Symbol.for("react.portal") : 60106,
                c = s ? Symbol.for("react.fragment") : 60107,
                u = s ? Symbol.for("react.strict_mode") : 60108,
                l = s ? Symbol.for("react.profiler") : 60114,
                h = s ? Symbol.for("react.provider") : 60109,
                f = s ? Symbol.for("react.context") : 60110,
                p = s ? Symbol.for("react.concurrent_mode") : 60111,
                d = s ? Symbol.for("react.forward_ref") : 60112,
                y = s ? Symbol.for("react.suspense") : 60113,
                m = s ? Symbol.for("react.suspense_list") : 60120,
                g = s ? Symbol.for("react.memo") : 60115,
                v = s ? Symbol.for("react.lazy") : 60116,
                _ = s ? Symbol.for("react.block") : 60121,
                b = s ? Symbol.for("react.fundamental") : 60117,
                w = s ? Symbol.for("react.scope") : 60119;

            function x(t) {
                if (null == t) return null;
                if ("function" === typeof t) return t.displayName || t.name || null;
                if ("string" === typeof t) return t;
                switch (t) {
                    case c:
                        return "Fragment";
                    case a:
                        return "Portal";
                    case l:
                        return "Profiler";
                    case u:
                        return "StrictMode";
                    case y:
                        return "Suspense";
                    case m:
                        return "SuspenseList"
                }
                if ("object" === typeof t) switch (t.$$typeof) {
                    case f:
                        return "Context.Consumer";
                    case h:
                        return "Context.Provider";
                    case d:
                        var e = t.render;
                        return e = e.displayName || e.name || "", t.displayName || ("" !== e ? "ForwardRef(" + e + ")" : "ForwardRef");
                    case g:
                        return x(t.type);
                    case _:
                        return x(t.render);
                    case v:
                        if (t = 1 === t._status ? t._result : null) return x(t)
                }
                return null
            }
            var S = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
            S.hasOwnProperty("ReactCurrentDispatcher") || (S.ReactCurrentDispatcher = {
                current: null
            }), S.hasOwnProperty("ReactCurrentBatchConfig") || (S.ReactCurrentBatchConfig = {
                suspense: null
            });
            var E = {};

            function k(t, e) {
                for (var n = 0 | t._threadCount; n <= e; n++) t[n] = t._currentValue2, t._threadCount = n + 1
            }
            for (var O = new Uint16Array(16), C = 0; 15 > C; C++) O[C] = C + 1;
            O[15] = 0;
            var j = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                I = Object.prototype.hasOwnProperty,
                A = {},
                P = {};

            function T(t) {
                return !!I.call(P, t) || !I.call(A, t) && (j.test(t) ? P[t] = !0 : (A[t] = !0, !1))
            }

            function R(t, e, n, r, o, i) {
                this.acceptsBooleans = 2 === e || 3 === e || 4 === e, this.attributeName = r, this.attributeNamespace = o, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = i
            }
            var D = {};
            "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(t) {
                D[t] = new R(t, 0, !1, t, null, !1)
            })), [
                ["acceptCharset", "accept-charset"],
                ["className", "class"],
                ["htmlFor", "for"],
                ["httpEquiv", "http-equiv"]
            ].forEach((function(t) {
                var e = t[0];
                D[e] = new R(e, 1, !1, t[1], null, !1)
            })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(t) {
                D[t] = new R(t, 2, !1, t.toLowerCase(), null, !1)
            })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(t) {
                D[t] = new R(t, 2, !1, t, null, !1)
            })), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(t) {
                D[t] = new R(t, 3, !1, t.toLowerCase(), null, !1)
            })), ["checked", "multiple", "muted", "selected"].forEach((function(t) {
                D[t] = new R(t, 3, !0, t, null, !1)
            })), ["capture", "download"].forEach((function(t) {
                D[t] = new R(t, 4, !1, t, null, !1)
            })), ["cols", "rows", "size", "span"].forEach((function(t) {
                D[t] = new R(t, 6, !1, t, null, !1)
            })), ["rowSpan", "start"].forEach((function(t) {
                D[t] = new R(t, 5, !1, t.toLowerCase(), null, !1)
            }));
            var N = /[\-:]([a-z])/g;

            function L(t) {
                return t[1].toUpperCase()
            }
            "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(t) {
                var e = t.replace(N, L);
                D[e] = new R(e, 1, !1, t, null, !1)
            })), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(t) {
                var e = t.replace(N, L);
                D[e] = new R(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1)
            })), ["xml:base", "xml:lang", "xml:space"].forEach((function(t) {
                var e = t.replace(N, L);
                D[e] = new R(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1)
            })), ["tabIndex", "crossOrigin"].forEach((function(t) {
                D[t] = new R(t, 1, !1, t.toLowerCase(), null, !1)
            })), D.xlinkHref = new R("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0), ["src", "href", "action", "formAction"].forEach((function(t) {
                D[t] = new R(t, 1, !1, t.toLowerCase(), null, !0)
            }));
            var M = /["'&<>]/;

            function F(t) {
                if ("boolean" === typeof t || "number" === typeof t) return "" + t;
                t = "" + t;
                var e = M.exec(t);
                if (e) {
                    var n, r = "",
                        o = 0;
                    for (n = e.index; n < t.length; n++) {
                        switch (t.charCodeAt(n)) {
                            case 34:
                                e = "&quot;";
                                break;
                            case 38:
                                e = "&amp;";
                                break;
                            case 39:
                                e = "&#x27;";
                                break;
                            case 60:
                                e = "&lt;";
                                break;
                            case 62:
                                e = "&gt;";
                                break;
                            default:
                                continue
                        }
                        o !== n && (r += t.substring(o, n)), o = n + 1, r += e
                    }
                    t = o !== n ? r + t.substring(o, n) : r
                }
                return t
            }

            function H(t, e) {
                var n, r = D.hasOwnProperty(t) ? D[t] : null;
                return (n = "style" !== t) && (n = null !== r ? 0 === r.type : 2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1])), n || function(t, e, n, r) {
                    if (null === e || "undefined" === typeof e || function(t, e, n, r) {
                            if (null !== n && 0 === n.type) return !1;
                            switch (typeof e) {
                                case "function":
                                case "symbol":
                                    return !0;
                                case "boolean":
                                    return !r && (null !== n ? !n.acceptsBooleans : "data-" !== (t = t.toLowerCase().slice(0, 5)) && "aria-" !== t);
                                default:
                                    return !1
                            }
                        }(t, e, n, r)) return !0;
                    if (r) return !1;
                    if (null !== n) switch (n.type) {
                        case 3:
                            return !e;
                        case 4:
                            return !1 === e;
                        case 5:
                            return isNaN(e);
                        case 6:
                            return isNaN(e) || 1 > e
                    }
                    return !1
                }(t, e, r, !1) ? "" : null !== r ? (t = r.attributeName, 3 === (n = r.type) || 4 === n && !0 === e ? t + '=""' : (r.sanitizeURL && (e = "" + e), t + '="' + F(e) + '"')) : T(t) ? t + '="' + F(e) + '"' : ""
            }
            var V = "function" === typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
                },
                U = null,
                $ = null,
                z = null,
                q = !1,
                B = !1,
                G = null,
                W = 0;

            function Y() {
                if (null === U) throw Error(i(321));
                return U
            }

            function K() {
                if (0 < W) throw Error(i(312));
                return {
                    memoizedState: null,
                    queue: null,
                    next: null
                }
            }

            function Z() {
                return null === z ? null === $ ? (q = !1, $ = z = K()) : (q = !0, z = $) : null === z.next ? (q = !1, z = z.next = K()) : (q = !0, z = z.next), z
            }

            function J(t, e, n, r) {
                for (; B;) B = !1, W += 1, z = null, n = t(e, r);
                return $ = U = null, W = 0, z = G = null, n
            }

            function X(t, e) {
                return "function" === typeof e ? e(t) : e
            }

            function Q(t, e, n) {
                if (U = Y(), z = Z(), q) {
                    var r = z.queue;
                    if (e = r.dispatch, null !== G && void 0 !== (n = G.get(r))) {
                        G.delete(r), r = z.memoizedState;
                        do {
                            r = t(r, n.action), n = n.next
                        } while (null !== n);
                        return z.memoizedState = r, [r, e]
                    }
                    return [z.memoizedState, e]
                }
                return t = t === X ? "function" === typeof e ? e() : e : void 0 !== n ? n(e) : e, z.memoizedState = t, t = (t = z.queue = {
                    last: null,
                    dispatch: null
                }).dispatch = tt.bind(null, U, t), [z.memoizedState, t]
            }

            function tt(t, e, n) {
                if (!(25 > W)) throw Error(i(301));
                if (t === U)
                    if (B = !0, t = {
                            action: n,
                            next: null
                        }, null === G && (G = new Map), void 0 === (n = G.get(e))) G.set(e, t);
                    else {
                        for (e = n; null !== e.next;) e = e.next;
                        e.next = t
                    }
            }

            function et() {}
            var nt = 0,
                rt = {
                    readContext: function(t) {
                        var e = nt;
                        return k(t, e), t[e]
                    },
                    useContext: function(t) {
                        Y();
                        var e = nt;
                        return k(t, e), t[e]
                    },
                    useMemo: function(t, e) {
                        if (U = Y(), e = void 0 === e ? null : e, null !== (z = Z())) {
                            var n = z.memoizedState;
                            if (null !== n && null !== e) {
                                t: {
                                    var r = n[1];
                                    if (null === r) r = !1;
                                    else {
                                        for (var o = 0; o < r.length && o < e.length; o++)
                                            if (!V(e[o], r[o])) {
                                                r = !1;
                                                break t
                                            }
                                        r = !0
                                    }
                                }
                                if (r) return n[0]
                            }
                        }
                        return t = t(), z.memoizedState = [t, e], t
                    },
                    useReducer: Q,
                    useRef: function(t) {
                        U = Y();
                        var e = (z = Z()).memoizedState;
                        return null === e ? (t = {
                            current: t
                        }, z.memoizedState = t) : e
                    },
                    useState: function(t) {
                        return Q(X, t)
                    },
                    useLayoutEffect: function() {},
                    useCallback: function(t) {
                        return t
                    },
                    useImperativeHandle: et,
                    useEffect: et,
                    useDebugValue: et,
                    useResponder: function(t, e) {
                        return {
                            props: e,
                            responder: t
                        }
                    },
                    useDeferredValue: function(t) {
                        return Y(), t
                    },
                    useTransition: function() {
                        return Y(), [function(t) {
                            t()
                        }, !1]
                    }
                },
                ot = "http://www.w3.org/1999/xhtml";

            function it(t) {
                switch (t) {
                    case "svg":
                        return "http://www.w3.org/2000/svg";
                    case "math":
                        return "http://www.w3.org/1998/Math/MathML";
                    default:
                        return "http://www.w3.org/1999/xhtml"
                }
            }
            var st = {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                },
                at = r({
                    menuitem: !0
                }, st),
                ct = {
                    animationIterationCount: !0,
                    borderImageOutset: !0,
                    borderImageSlice: !0,
                    borderImageWidth: !0,
                    boxFlex: !0,
                    boxFlexGroup: !0,
                    boxOrdinalGroup: !0,
                    columnCount: !0,
                    columns: !0,
                    flex: !0,
                    flexGrow: !0,
                    flexPositive: !0,
                    flexShrink: !0,
                    flexNegative: !0,
                    flexOrder: !0,
                    gridArea: !0,
                    gridRow: !0,
                    gridRowEnd: !0,
                    gridRowSpan: !0,
                    gridRowStart: !0,
                    gridColumn: !0,
                    gridColumnEnd: !0,
                    gridColumnSpan: !0,
                    gridColumnStart: !0,
                    fontWeight: !0,
                    lineClamp: !0,
                    lineHeight: !0,
                    opacity: !0,
                    order: !0,
                    orphans: !0,
                    tabSize: !0,
                    widows: !0,
                    zIndex: !0,
                    zoom: !0,
                    fillOpacity: !0,
                    floodOpacity: !0,
                    stopOpacity: !0,
                    strokeDasharray: !0,
                    strokeDashoffset: !0,
                    strokeMiterlimit: !0,
                    strokeOpacity: !0,
                    strokeWidth: !0
                },
                ut = ["Webkit", "ms", "Moz", "O"];
            Object.keys(ct).forEach((function(t) {
                ut.forEach((function(e) {
                    e = e + t.charAt(0).toUpperCase() + t.substring(1), ct[e] = ct[t]
                }))
            }));
            var lt = /([A-Z])/g,
                ht = /^ms-/,
                ft = o.Children.toArray,
                pt = S.ReactCurrentDispatcher,
                dt = {
                    listing: !0,
                    pre: !0,
                    textarea: !0
                },
                yt = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,
                mt = {},
                gt = {};
            var vt = Object.prototype.hasOwnProperty,
                _t = {
                    children: null,
                    dangerouslySetInnerHTML: null,
                    suppressContentEditableWarning: null,
                    suppressHydrationWarning: null
                };

            function bt(t, e) {
                if (void 0 === t) throw Error(i(152, x(e) || "Component"))
            }

            function wt(t, e, n) {
                function s(o, s) {
                    var a = s.prototype && s.prototype.isReactComponent,
                        c = function(t, e, n, r) {
                            if (r && "object" === typeof(r = t.contextType) && null !== r) return k(r, n), r[n];
                            if (t = t.contextTypes) {
                                for (var o in n = {}, t) n[o] = e[o];
                                e = n
                            } else e = E;
                            return e
                        }(s, e, n, a),
                        u = [],
                        l = !1,
                        h = {
                            isMounted: function() {
                                return !1
                            },
                            enqueueForceUpdate: function() {
                                if (null === u) return null
                            },
                            enqueueReplaceState: function(t, e) {
                                l = !0, u = [e]
                            },
                            enqueueSetState: function(t, e) {
                                if (null === u) return null;
                                u.push(e)
                            }
                        };
                    if (a) {
                        if (a = new s(o.props, c, h), "function" === typeof s.getDerivedStateFromProps) {
                            var f = s.getDerivedStateFromProps.call(null, o.props, a.state);
                            null != f && (a.state = r({}, a.state, f))
                        }
                    } else if (U = {}, a = s(o.props, c, h), null == (a = J(s, o.props, a, c)) || null == a.render) return void bt(t = a, s);
                    if (a.props = o.props, a.context = c, a.updater = h, void 0 === (h = a.state) && (a.state = h = null), "function" === typeof a.UNSAFE_componentWillMount || "function" === typeof a.componentWillMount)
                        if ("function" === typeof a.componentWillMount && "function" !== typeof s.getDerivedStateFromProps && a.componentWillMount(), "function" === typeof a.UNSAFE_componentWillMount && "function" !== typeof s.getDerivedStateFromProps && a.UNSAFE_componentWillMount(), u.length) {
                            h = u;
                            var p = l;
                            if (u = null, l = !1, p && 1 === h.length) a.state = h[0];
                            else {
                                f = p ? h[0] : a.state;
                                var d = !0;
                                for (p = p ? 1 : 0; p < h.length; p++) {
                                    var y = h[p];
                                    null != (y = "function" === typeof y ? y.call(a, f, o.props, c) : y) && (d ? (d = !1, f = r({}, f, y)) : r(f, y))
                                }
                                a.state = f
                            }
                        } else u = null;
                    if (bt(t = a.render(), s), "function" === typeof a.getChildContext && "object" === typeof(o = s.childContextTypes)) {
                        var m = a.getChildContext();
                        for (var g in m)
                            if (!(g in o)) throw Error(i(108, x(s) || "Unknown", g))
                    }
                    m && (e = r({}, e, m))
                }
                for (; o.isValidElement(t);) {
                    var a = t,
                        c = a.type;
                    if ("function" !== typeof c) break;
                    s(a, c)
                }
                return {
                    child: t,
                    context: e
                }
            }
            var xt = function() {
                    function t(t, e) {
                        o.isValidElement(t) ? t.type !== c ? t = [t] : (t = t.props.children, t = o.isValidElement(t) ? [t] : ft(t)) : t = ft(t), t = {
                            type: null,
                            domNamespace: ot,
                            children: t,
                            childIndex: 0,
                            context: E,
                            footer: ""
                        };
                        var n = O[0];
                        if (0 === n) {
                            var r = O,
                                s = 2 * (n = r.length);
                            if (!(65536 >= s)) throw Error(i(304));
                            var a = new Uint16Array(s);
                            for (a.set(r), (O = a)[0] = n + 1, r = n; r < s - 1; r++) O[r] = r + 1;
                            O[s - 1] = 0
                        } else O[0] = O[n];
                        this.threadID = n, this.stack = [t], this.exhausted = !1, this.currentSelectValue = null, this.previousWasTextNode = !1, this.makeStaticMarkup = e, this.suspenseDepth = 0, this.contextIndex = -1, this.contextStack = [], this.contextValueStack = []
                    }
                    var e = t.prototype;
                    return e.destroy = function() {
                        if (!this.exhausted) {
                            this.exhausted = !0, this.clearProviders();
                            var t = this.threadID;
                            O[t] = O[0], O[0] = t
                        }
                    }, e.pushProvider = function(t) {
                        var e = ++this.contextIndex,
                            n = t.type._context,
                            r = this.threadID;
                        k(n, r);
                        var o = n[r];
                        this.contextStack[e] = n, this.contextValueStack[e] = o, n[r] = t.props.value
                    }, e.popProvider = function() {
                        var t = this.contextIndex,
                            e = this.contextStack[t],
                            n = this.contextValueStack[t];
                        this.contextStack[t] = null, this.contextValueStack[t] = null, this.contextIndex--, e[this.threadID] = n
                    }, e.clearProviders = function() {
                        for (var t = this.contextIndex; 0 <= t; t--) this.contextStack[t][this.threadID] = this.contextValueStack[t]
                    }, e.read = function(t) {
                        if (this.exhausted) return null;
                        var e = nt;
                        nt = this.threadID;
                        var n = pt.current;
                        pt.current = rt;
                        try {
                            for (var r = [""], o = !1; r[0].length < t;) {
                                if (0 === this.stack.length) {
                                    this.exhausted = !0;
                                    var s = this.threadID;
                                    O[s] = O[0], O[0] = s;
                                    break
                                }
                                var a = this.stack[this.stack.length - 1];
                                if (o || a.childIndex >= a.children.length) {
                                    var c = a.footer;
                                    if ("" !== c && (this.previousWasTextNode = !1), this.stack.pop(), "select" === a.type) this.currentSelectValue = null;
                                    else if (null != a.type && null != a.type.type && a.type.type.$$typeof === h) this.popProvider(a.type);
                                    else if (a.type === y) {
                                        this.suspenseDepth--;
                                        var u = r.pop();
                                        if (o) {
                                            o = !1;
                                            var l = a.fallbackFrame;
                                            if (!l) throw Error(i(303));
                                            this.stack.push(l), r[this.suspenseDepth] += "\x3c!--$!--\x3e";
                                            continue
                                        }
                                        r[this.suspenseDepth] += u
                                    }
                                    r[this.suspenseDepth] += c
                                } else {
                                    var f = a.children[a.childIndex++],
                                        p = "";
                                    try {
                                        p += this.render(f, a.context, a.domNamespace)
                                    } catch (d) {
                                        if (null != d && "function" === typeof d.then) throw Error(i(294));
                                        throw d
                                    }
                                    r.length <= this.suspenseDepth && r.push(""), r[this.suspenseDepth] += p
                                }
                            }
                            return r[0]
                        } finally {
                            pt.current = n, nt = e
                        }
                    }, e.render = function(t, e, n) {
                        if ("string" === typeof t || "number" === typeof t) return "" === (n = "" + t) ? "" : this.makeStaticMarkup ? F(n) : this.previousWasTextNode ? "\x3c!-- --\x3e" + F(n) : (this.previousWasTextNode = !0, F(n));
                        if (t = (e = wt(t, e, this.threadID)).child, e = e.context, null === t || !1 === t) return "";
                        if (!o.isValidElement(t)) {
                            if (null != t && null != t.$$typeof) {
                                if ((n = t.$$typeof) === a) throw Error(i(257));
                                throw Error(i(258, n.toString()))
                            }
                            return t = ft(t), this.stack.push({
                                type: null,
                                domNamespace: n,
                                children: t,
                                childIndex: 0,
                                context: e,
                                footer: ""
                            }), ""
                        }
                        var s = t.type;
                        if ("string" === typeof s) return this.renderDOM(t, e, n);
                        switch (s) {
                            case u:
                            case p:
                            case l:
                            case m:
                            case c:
                                return t = ft(t.props.children), this.stack.push({
                                    type: null,
                                    domNamespace: n,
                                    children: t,
                                    childIndex: 0,
                                    context: e,
                                    footer: ""
                                }), "";
                            case y:
                                throw Error(i(294))
                        }
                        if ("object" === typeof s && null !== s) switch (s.$$typeof) {
                            case d:
                                U = {};
                                var _ = s.render(t.props, t.ref);
                                return _ = J(s.render, t.props, _, t.ref), _ = ft(_), this.stack.push({
                                    type: null,
                                    domNamespace: n,
                                    children: _,
                                    childIndex: 0,
                                    context: e,
                                    footer: ""
                                }), "";
                            case g:
                                return t = [o.createElement(s.type, r({
                                    ref: t.ref
                                }, t.props))], this.stack.push({
                                    type: null,
                                    domNamespace: n,
                                    children: t,
                                    childIndex: 0,
                                    context: e,
                                    footer: ""
                                }), "";
                            case h:
                                return n = {
                                    type: t,
                                    domNamespace: n,
                                    children: s = ft(t.props.children),
                                    childIndex: 0,
                                    context: e,
                                    footer: ""
                                }, this.pushProvider(t), this.stack.push(n), "";
                            case f:
                                s = t.type, _ = t.props;
                                var x = this.threadID;
                                return k(s, x), s = ft(_.children(s[x])), this.stack.push({
                                    type: t,
                                    domNamespace: n,
                                    children: s,
                                    childIndex: 0,
                                    context: e,
                                    footer: ""
                                }), "";
                            case b:
                                throw Error(i(338));
                            case v:
                                switch (function(t) {
                                    if (-1 === t._status) {
                                        t._status = 0;
                                        var e = t._ctor;
                                        e = e(), t._result = e, e.then((function(e) {
                                            0 === t._status && (e = e.default, t._status = 1, t._result = e)
                                        }), (function(e) {
                                            0 === t._status && (t._status = 2, t._result = e)
                                        }))
                                    }
                                }(s = t.type), s._status) {
                                    case 1:
                                        return t = [o.createElement(s._result, r({
                                            ref: t.ref
                                        }, t.props))], this.stack.push({
                                            type: null,
                                            domNamespace: n,
                                            children: t,
                                            childIndex: 0,
                                            context: e,
                                            footer: ""
                                        }), "";
                                    case 2:
                                        throw s._result;
                                    default:
                                        throw Error(i(295))
                                }
                            case w:
                                throw Error(i(343))
                        }
                        throw Error(i(130, null == s ? s : typeof s, ""))
                    }, e.renderDOM = function(t, e, n) {
                        var s = t.type.toLowerCase();
                        if (n === ot && it(s), !mt.hasOwnProperty(s)) {
                            if (!yt.test(s)) throw Error(i(65, s));
                            mt[s] = !0
                        }
                        var a = t.props;
                        if ("input" === s) a = r({
                            type: void 0
                        }, a, {
                            defaultChecked: void 0,
                            defaultValue: void 0,
                            value: null != a.value ? a.value : a.defaultValue,
                            checked: null != a.checked ? a.checked : a.defaultChecked
                        });
                        else if ("textarea" === s) {
                            var c = a.value;
                            if (null == c) {
                                c = a.defaultValue;
                                var u = a.children;
                                if (null != u) {
                                    if (null != c) throw Error(i(92));
                                    if (Array.isArray(u)) {
                                        if (!(1 >= u.length)) throw Error(i(93));
                                        u = u[0]
                                    }
                                    c = "" + u
                                }
                                null == c && (c = "")
                            }
                            a = r({}, a, {
                                value: void 0,
                                children: "" + c
                            })
                        } else if ("select" === s) this.currentSelectValue = null != a.value ? a.value : a.defaultValue, a = r({}, a, {
                            value: void 0
                        });
                        else if ("option" === s) {
                            u = this.currentSelectValue;
                            var l = function(t) {
                                if (void 0 === t || null === t) return t;
                                var e = "";
                                return o.Children.forEach(t, (function(t) {
                                    null != t && (e += t)
                                })), e
                            }(a.children);
                            if (null != u) {
                                var h = null != a.value ? a.value + "" : l;
                                if (c = !1, Array.isArray(u)) {
                                    for (var f = 0; f < u.length; f++)
                                        if ("" + u[f] === h) {
                                            c = !0;
                                            break
                                        }
                                } else c = "" + u === h;
                                a = r({
                                    selected: void 0,
                                    children: void 0
                                }, a, {
                                    selected: c,
                                    children: l
                                })
                            }
                        }
                        if (c = a) {
                            if (at[s] && (null != c.children || null != c.dangerouslySetInnerHTML)) throw Error(i(137, s, ""));
                            if (null != c.dangerouslySetInnerHTML) {
                                if (null != c.children) throw Error(i(60));
                                if ("object" !== typeof c.dangerouslySetInnerHTML || !("__html" in c.dangerouslySetInnerHTML)) throw Error(i(61))
                            }
                            if (null != c.style && "object" !== typeof c.style) throw Error(i(62, ""))
                        }
                        for (b in c = a, u = this.makeStaticMarkup, l = 1 === this.stack.length, h = "<" + t.type, c)
                            if (vt.call(c, b)) {
                                var p = c[b];
                                if (null != p) {
                                    if ("style" === b) {
                                        f = void 0;
                                        var d = "",
                                            y = "";
                                        for (f in p)
                                            if (p.hasOwnProperty(f)) {
                                                var m = 0 === f.indexOf("--"),
                                                    g = p[f];
                                                if (null != g) {
                                                    if (m) var v = f;
                                                    else if (v = f, gt.hasOwnProperty(v)) v = gt[v];
                                                    else {
                                                        var _ = v.replace(lt, "-$1").toLowerCase().replace(ht, "-ms-");
                                                        v = gt[v] = _
                                                    }
                                                    d += y + v + ":", y = f, d += m = null == g || "boolean" === typeof g || "" === g ? "" : m || "number" !== typeof g || 0 === g || ct.hasOwnProperty(y) && ct[y] ? ("" + g).trim() : g + "px", y = ";"
                                                }
                                            }
                                        p = d || null
                                    }
                                    f = null;
                                    t: if (m = s, g = c, -1 === m.indexOf("-")) m = "string" === typeof g.is;
                                        else switch (m) {
                                            case "annotation-xml":
                                            case "color-profile":
                                            case "font-face":
                                            case "font-face-src":
                                            case "font-face-uri":
                                            case "font-face-format":
                                            case "font-face-name":
                                            case "missing-glyph":
                                                m = !1;
                                                break t;
                                            default:
                                                m = !0
                                        }
                                    m ? _t.hasOwnProperty(b) || (f = T(f = b) && null != p ? f + '="' + F(p) + '"' : "") : f = H(b, p), f && (h += " " + f)
                                }
                            }
                        u || l && (h += ' data-reactroot=""');
                        var b = h;
                        c = "", st.hasOwnProperty(s) ? b += "/>" : (b += ">", c = "</" + t.type + ">");
                        t: {
                            if (null != (u = a.dangerouslySetInnerHTML)) {
                                if (null != u.__html) {
                                    u = u.__html;
                                    break t
                                }
                            } else if ("string" === typeof(u = a.children) || "number" === typeof u) {
                                u = F(u);
                                break t
                            }
                            u = null
                        }
                        return null != u ? (a = [], dt.hasOwnProperty(s) && "\n" === u.charAt(0) && (b += "\n"), b += u) : a = ft(a.children), t = t.type, n = null == n || "http://www.w3.org/1999/xhtml" === n ? it(t) : "http://www.w3.org/2000/svg" === n && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : n, this.stack.push({
                            domNamespace: n,
                            type: s,
                            children: a,
                            childIndex: 0,
                            context: e,
                            footer: c
                        }), this.previousWasTextNode = !1, b
                    }, t
                }(),
                St = {
                    renderToString: function(t) {
                        t = new xt(t, !1);
                        try {
                            return t.read(1 / 0)
                        } finally {
                            t.destroy()
                        }
                    },
                    renderToStaticMarkup: function(t) {
                        t = new xt(t, !0);
                        try {
                            return t.read(1 / 0)
                        } finally {
                            t.destroy()
                        }
                    },
                    renderToNodeStream: function() {
                        throw Error(i(207))
                    },
                    renderToStaticNodeStream: function() {
                        throw Error(i(208))
                    },
                    version: "16.14.0"
                };
            t.exports = St.default || St
        },
        "Q/r/": (t, e, n) => {
            "use strict";
            t.exports = n("aJbU")
        }
    }
]);
//# debugId=41504ea6-17df-5135-a297-838d2308b5d8