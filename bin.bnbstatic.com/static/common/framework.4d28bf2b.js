! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "63d3f4fc-65f9-58cc-b06e-d4a6da25c3c7")
    } catch (e) {}
}();
(self.webpackChunkfaq_anns_ui = self.webpackChunkfaq_anns_ui || []).push([
    [593], {
        fix3: (t, e, n) => {
            "use strict";
            n.d(e, {
                Y: () => s
            });
            var r = n("k/Mm");

            function s() {
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
                K: () => o
            });
            var r = n("fix3");
            const s = Object.prototype.hasOwnProperty;

            function o(t, e) {
                const {
                    pageData: n = {}
                } = (0, r.Y)();
                return s.call(n, t) ? n[t] : e
            }
        },
        JtFa: (t, e, n) => {
            "use strict";
            n.d(e, {
                K: () => s,
                l: () => o
            });
            var r = n("VyXn");
            const s = "loader",
                o = (0, r.NP)({
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
                Uu: () => O,
                l1: () => S,
                EI: () => w,
                H7: () => j
            });
            var r = function(t, e, n, r) {
                return new(n || (n = Promise))((function(s, o) {
                    function i(t) {
                        try {
                            c(r.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(i, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            };
            const s = () => {
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
                o = () => {
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
                i = () => {
                    let t = [];
                    return {
                        use: (...e) => {
                            t.push(...e)
                        },
                        run: (...e) => {
                            let [n, ...r] = e;
                            for (let s = 0; s < t.length; s++) {
                                const e = (0, t[s])(n, ...r);
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
                                const s = t[r],
                                    o = yield s(...e);
                                n.push(o)
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
                                    s = yield r(...e);
                                if (void 0 !== s) return s
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
                                const s = t[e],
                                    o = yield s(n, ...r);
                                void 0 !== o && (n = o)
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
                            const s = [];
                            for (; n.size > 0;) {
                                let t = !1;
                                if (n.forEach(((r, o) => {
                                        0 === r.size && (t = !0, s.push(e.get(o)), n.delete(o), n.forEach((t => {
                                            t.delete(o)
                                        })))
                                    })), !t) throw new Error(`Plugin circular dependency detected: ${Array.from(n.keys()).join(", ")}. Please ensure the plugins have correct 'before' and 'after' property.`)
                            }
                            return s
                        })(e.get(t)))
                    })), r
                },
                p = {
                    name: "untitled",
                    before: [],
                    after: [],
                    conflict: [],
                    required: [],
                    group: 0
                },
                f = "PLUGIN_SYMBOL",
                d = t => t && t.hasOwnProperty(f) && t.PLUGIN_SYMBOL === f;
            const y = t => {
                const e = {};
                for (const n in t) {
                    const r = t[n];
                    switch (null === r || void 0 === r ? void 0 : r.type) {
                        case "SyncHook":
                            e[n] = s();
                            break;
                        case "SyncBailHook":
                            e[n] = o();
                            break;
                        case "SyncWaterfallHook":
                            e[n] = i();
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

            function _(t, e = {}) {
                return Object.assign(Object.assign(Object.assign(Object.assign({}, p), {
                    name: `plugin-id-${"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,(function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)}))}`
                }), e), {
                    handlers: t,
                    PLUGIN_SYMBOL: f
                })
            }
            const g = (t, e = !0) => {
                const n = s(),
                    r = Object.assign(Object.assign({}, y(t)), {
                        setup: n
                    });
                let o, i = [],
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
                        })(i), i = h(i), i.forEach((t => {
                            const e = t.handlers;
                            let n;
                            for (n in e) a[n] || (a[n] = []), a[n].push(e[n])
                        }))
                    },
                    p = r,
                    f = t => {
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
                        const s = r[t],
                            i = a[t] || [];
                        if (!s) return () => {};
                        return "setup" === t ? t => {
                            let e = !1;
                            n || (s.use(...i), s.use((() => {
                                e = !0
                            })), n = !0);
                            const r = Object.assign({}, t);
                            for (let n in r) "function" === typeof r[n] && (r[n] = (o = r[n], new Proxy(o, {
                                apply(t, n, r) {
                                    if (!e) return t.apply(n, r)
                                }
                            })));
                            var o;
                            return s.run(r)
                        } : (...r) => {
                            if (n || (s.use(...i), n = !0), e && !o) throw new Error(`Context not set. Hook ${String(t)} running failed.`);
                            return s.run(...r, o)
                        }
                    };
                return {
                    createPlugin: _,
                    usePlugin: (...t) => {
                        u || i.push(...t)
                    },
                    runner: new Proxy({}, {
                        get: (t, e) => (u || (l(), d("setup")({
                            addHooks: f
                        }), u = !0), d(e))
                    }),
                    clear: () => {
                        Object.values(r).forEach((t => {
                            t.clear()
                        })), i = [], a = {}, c = {}, u = !1
                    },
                    addHooks: f,
                    hooks: p,
                    setContext: t => {
                        o = t
                    },
                    getPlugins: () => i
                }
            };
            var m = function(t, e, n, r) {
                return new(n || (n = Promise))((function(s, o) {
                    function i(t) {
                        try {
                            c(r.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(i, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            };
            const v = a(),
                b = c(),
                x = {
                    init: v,
                    appComponent: l(),
                    appContext: b,
                    dispose: a()
                },
                w = () => g(x, !1),
                {
                    createPluginBefore: S,
                    createPlugin: E,
                    createPluginAfter: O
                } = function() {
                    const t = (t, e = {}) => {
                        const {
                            name: n,
                            before: r,
                            after: s,
                            conflict: o,
                            required: i
                        } = e, a = {
                            group: t
                        };
                        return void 0 !== n && (a.name = n), void 0 !== r && (a.before = r), void 0 !== s && (a.after = s), void 0 !== o && (a.conflict = o), void 0 !== i && (a.required = i), a
                    };
                    return {
                        createPluginBefore: (e, n) => _(e, t(-1, n)),
                        createPlugin: (e, n) => _(e, t(0, n)),
                        createPluginAfter: (e, n) => _(e, t(1, n))
                    }
                }(),
                j = (t, e) => m(void 0, void 0, void 0, (function*() {
                    for (const [n, r] of e) {
                        let e;
                        r && (e = JSON.parse(r)), d(n) ? t.usePlugin(n) : t.usePlugin(n(e))
                    }
                }))
        },
        Dz1D: (t, e) => {
            "use strict";
            e.PC = function() {
                return Object.assign(Object.assign({}, o() || {}), s() || {})
            }, e.UB = function(t) {
                n = t
            };
            Symbol.for("shuvi_server_runtime_config"), Symbol.for("shuvi_client_runtime_config");
            let n, r;

            function s() {
                return n
            }

            function o() {
                return r
            }
        },
        AXwM: (t, e, n) => {
            "use strict";
            n.d(e, {
                Ix: () => w,
                Tp: () => O,
                K7: () => d,
                $P: () => y,
                z7: () => x,
                Zp: () => g,
                g: () => m,
                x$: () => v,
                rd: () => b
            });
            var r = n("wcIl"),
                s = n("DTvD");
            const o = !1;
            const i = t => t;

            function a(t, e) {
                if (!t) {
                    "undefined" !== typeof console && console.warn(e);
                    try {
                        throw new Error(e)
                    } catch (n) {}
                }
            }
            n("OZg1");
            var c = n("IJ96"),
                u = n.n(c),
                l = n("t2HS");
            const h = s.createContext(null);
            const p = s.createContext(null);
            const f = s.createContext({
                depth: 0,
                params: i({}),
                pathname: "",
                route: null
            });

            function d() {
                return (0, s.useContext)(p)
            }

            function y(t) {
                u()(_(), "useHref() may be used only in the context of a <Router> component.");
                const {
                    router: e
                } = (0, s.useContext)(h), n = v(t);
                return e.resolve(n).href
            }

            function _() {
                return null != (0, s.useContext)(h)
            }

            function g() {
                u()(_(), "useNavigate() may be used only in the context of a <Router> component.");
                const {
                    router: t
                } = (0, s.useContext)(h), {
                    pathname: e
                } = (0, s.useContext)(f), n = s.useRef(!1);
                return s.useEffect((() => {
                    n.current = !0
                })), s.useCallback(((r, s = {}) => {
                    if (n.current)
                        if ("number" === typeof r) t.go(r);
                        else {
                            let {
                                path: n
                            } = t.resolve(r, e);
                            (s.replace ? t.replace : t.push).call(t, n, s.state)
                        }
                    else a(!1, "You should call navigate() in a useEffect, not when your component is first rendered.")
                }), [t, e])
            }

            function m() {
                return (0, s.useContext)(p).params
            }

            function v(t) {
                const {
                    router: e
                } = (0, s.useContext)(h), {
                    pathname: n
                } = (0, s.useContext)(f);
                return s.useMemo((() => e.resolve(t, n).path), [t, n])
            }

            function b() {
                return u()(_(), "useRouter() may be used only in the context of a <Router> component."), (0, s.useContext)(h).router
            }

            function x() {
                return (0, s.useContext)(f)
            }

            function w({
                children: t = null,
                static: e = !1,
                router: n
            }) {
                u()(!_(), "You cannot render a <Router> inside another <Router>. You never need more than one.");
                const r = s.useMemo((() => ({
                        static: e,
                        router: n
                    })), [e, n]),
                    {
                        subscribe: o,
                        getSnapshot: i
                    } = s.useMemo((() => ({
                        subscribe: t => n.listen(t),
                        getSnapshot: () => n.current
                    })), [n]),
                    a = (0, l.useSyncExternalStore)(o, i, i);
                return s.createElement(h.Provider, {
                    value: r
                }, s.createElement(p.Provider, {
                    children: t,
                    value: a
                }))
            }
            const S = s.createElement(O, null);

            function E({
                match: t,
                depth: e,
                parentPathname: n,
                parentParams: o
            }) {
                const {
                    route: a,
                    params: c,
                    pathname: u
                } = t, l = s.useMemo((() => a.component ? s.createElement(a.component, a.props) : S), [a.component, a.props, S]);
                return s.createElement(f.Provider, {
                    children: l,
                    value: {
                        depth: e + 1,
                        params: i(Object.assign(Object.assign({}, o), c)),
                        pathname: (0, r.HS)([n, u]),
                        route: a
                    }
                })
            }

            function O() {
                let {
                    depth: t,
                    pathname: e,
                    params: n
                } = s.useContext(f);
                const {
                    matches: r
                } = d();
                if (!r.length) return null;
                const o = r[t];
                return o ? s.createElement(E, {
                    match: o,
                    depth: t,
                    parentPathname: e,
                    parentParams: n
                }) : null
            }
            var j = function(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var s = 0;
                    for (r = Object.getOwnPropertySymbols(t); s < r.length; s++) e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]])
                }
                return n
            };
            const k = s.forwardRef((function(t, e) {
                var {
                    onClick: n,
                    replace: o = !1,
                    state: i,
                    target: a,
                    to: c
                } = t, u = j(t, ["onClick", "replace", "state", "target", "to"]);
                let l = y(c),
                    h = g();
                const p = d();
                let f = v(c);
                return s.createElement("a", Object.assign({}, u, {
                    href: l,
                    onClick: function(t) {
                        if (n && n(t), !t.defaultPrevented && 0 === t.button && (!a || "_self" === a) && ! function(t) {
                                return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey)
                            }(t)) {
                            t.preventDefault();
                            let e = !!o || (p && (0, r.uj)(p)) === (0, r.uj)(f);
                            h(c, {
                                replace: e,
                                state: i
                            })
                        }
                    },
                    ref: e,
                    target: a
                }))
            }));
            s.forwardRef((function(t, e) {
                const n = "undefined" === typeof t.to;
                n && console.error("The prop 'to' is required in '<Link>', but its value is 'undefined'", JSON.stringify({
                    props: t
                }));
                const [r, o] = s.useState(!0);
                return r && n ? s.createElement("a", Object.assign({}, t, {
                    onClick: t => {
                        t.preventDefault(), o(!1)
                    },
                    ref: e
                })) : s.createElement(k, Object.assign({}, t, {
                    ref: e
                }))
            }))
        },
        "8dyb": (t, e, n) => {
            "use strict";
            var r = n("DTvD");
            var s = "function" === typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
                },
                o = r.useState,
                i = r.useEffect,
                a = r.useLayoutEffect,
                c = r.useDebugValue;

            function u(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var n = e();
                    return !s(t, n)
                } catch (r) {
                    return !0
                }
            }
            var l = "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var n = e(),
                    r = o({
                        inst: {
                            value: n,
                            getSnapshot: e
                        }
                    }),
                    s = r[0].inst,
                    l = r[1];
                return a((function() {
                    s.value = n, s.getSnapshot = e, u(s) && l({
                        inst: s
                    })
                }), [t, n, e]), i((function() {
                    return u(s) && l({
                        inst: s
                    }), t((function() {
                        u(s) && l({
                            inst: s
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
        skUd: (t, e, n) => {
            "use strict";
            var r = n("DYEu");

            function s() {}

            function o() {}
            o.resetWarningCache = s, t.exports = function() {
                function t(t, e, n, s, o, i) {
                    if (i !== r) {
                        var a = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
                        throw a.name = "Invariant Violation", a
                    }
                }

                function e() {
                    return t
                }
                t.isRequired = t;
                var n = {
                    array: t,
                    bigint: t,
                    bool: t,
                    func: t,
                    number: t,
                    object: t,
                    string: t,
                    symbol: t,
                    any: t,
                    arrayOf: e,
                    element: t,
                    elementType: t,
                    instanceOf: e,
                    node: t,
                    objectOf: e,
                    oneOf: e,
                    oneOfType: e,
                    shape: e,
                    exact: e,
                    checkPropTypes: o,
                    resetWarningCache: s
                };
                return n.PropTypes = n, n
            }
        },
        OZg1: (t, e, n) => {
            t.exports = n("skUd")()
        },
        DYEu: t => {
            "use strict";
            t.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
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
                g$: () => l
            });
            var r = n("DTvD"),
                s = n.n(r),
                o = n("VyXn"),
                i = n("dod3"),
                a = n("hTvQ");
            const c = (t, e) => (n, s, o, a) => {
                    const c = (0, r.useRef)(o),
                        {
                            modelInstance: u,
                            subscribe: l
                        } = function(t, e, n, s) {
                            const {
                                modelInstance: o,
                                subscribe: i
                            } = (0, r.useMemo)((() => {
                                const r = n.getModel(t, e);
                                return {
                                    modelInstance: r,
                                    subscribe: t => s.addSubscribe(r, t)
                                }
                            }), [t, n]);
                            return {
                                modelInstance: o,
                                subscribe: i
                            }
                        }(n, s, t, e);
                    return c.current ? function(t, e, n, s) {
                        const o = (0, r.useRef)(void 0),
                            a = (0, r.useMemo)((() => {
                                const e = o.current;
                                return e && e.destory(), o.current = t.$createView(n)
                            }), [t, ...s || [n]]),
                            c = (0, i.useSyncExternalStore)(e, a, a);
                        return (0, r.useDebugValue)(c), c
                    }(u, l, o, a) : function(t, e) {
                        const n = (0, r.useMemo)((() => () => t.$getApi()), [t]),
                            s = (0, i.useSyncExternalStore)(e, n, n);
                        return (0, r.useDebugValue)(s), s
                    }(u, l)
                },
                u = () => {
                    const t = new WeakMap,
                        e = new WeakMap,
                        n = function(n, r) {
                            const s = t.get(n);
                            if (s && (s.delete(r), 0 === s.size && e.has(n))) {
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
                        addSubscribe: function(s, o) {
                            let i = t.get(s);
                            if (i) i.add(o);
                            else {
                                i = new Set, i.add(o);
                                const n = s.$subscribe((function() {
                                    r(s)
                                }));
                                t.set(s, i), e.set(s, n)
                            }
                            return function() {
                                return n(s, o)
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
                                children: i,
                                store: a
                            } = n, c = (0, r.useMemo)((function() {
                                let e;
                                e = a || (0, o.Sz)(t);
                                return {
                                    store: e,
                                    batchManager: u()
                                }
                            }), [a]), [l, h] = (0, r.useState)(c);
                            return (0, r.useEffect)((function() {
                                h(c)
                            }), [a]), s().createElement(e.Provider, {
                                value: l
                            }, i)
                        },
                        useSharedModel: (t, e, s, o) => {
                            const {
                                store: i,
                                batchManager: a
                            } = n();
                            return (0, r.useMemo)((() => c(i, a)), [i, a])(t, e, s, o)
                        },
                        useStaticModel: (t, e) => {
                            const {
                                store: s
                            } = n();
                            return (0, r.useMemo)((() => (t => (e, n) => {
                                const s = (0, r.useMemo)((() => t.getModel(e, n)), [e, t]);
                                return (0, r.useMemo)((() => s), [s])
                            })(s)), [s])(t, e)
                        }
                    }
                },
                {
                    Provider: h,
                    useSharedModel: p,
                    useStaticModel: f
                } = l({
                    plugins: []
                })
        },
        "1kr1": (t, e, n) => {
            "use strict";
            var r = n("DTvD");
            var s = "function" === typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
                },
                o = r.useState,
                i = r.useEffect,
                a = r.useLayoutEffect,
                c = r.useDebugValue;

            function u(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var n = e();
                    return !s(t, n)
                } catch (r) {
                    return !0
                }
            }
            var l = "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var n = e(),
                    r = o({
                        inst: {
                            value: n,
                            getSnapshot: e
                        }
                    }),
                    s = r[0].inst,
                    l = r[1];
                return a((function() {
                    s.value = n, s.getSnapshot = e, u(s) && l({
                        inst: s
                    })
                }), [t, n, e]), i((function() {
                    return u(s) && l({
                        inst: s
                    }), t((function() {
                        u(s) && l({
                            inst: s
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
                s = Symbol.for("react.element"),
                o = Symbol.for("react.fragment"),
                i = Object.prototype.hasOwnProperty,
                a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function u(t, e, n) {
                var r, o = {},
                    u = null,
                    l = null;
                for (r in void 0 !== n && (u = "" + n), void 0 !== e.key && (u = "" + e.key), void 0 !== e.ref && (l = e.ref), e) i.call(e, r) && !c.hasOwnProperty(r) && (o[r] = e[r]);
                if (t && t.defaultProps)
                    for (r in e = t.defaultProps) void 0 === o[r] && (o[r] = e[r]);
                return {
                    $$typeof: s,
                    type: t,
                    key: u,
                    ref: l,
                    props: o,
                    _owner: a.current
                }
            }
            e.Fragment = o, e.jsx = u, e.jsxs = u
        },
        TrCV: (t, e, n) => {
            "use strict";
            t.exports = n("UyHI")
        },
        F2HG: (t, e, n) => {
            "use strict";
            var r = n("DTvD");
            var s = "function" === typeof Object.is ? Object.is : function(t, e) {
                    return t === e && (0 !== t || 1 / t === 1 / e) || t !== t && e !== e
                },
                o = r.useState,
                i = r.useEffect,
                a = r.useLayoutEffect,
                c = r.useDebugValue;

            function u(t) {
                var e = t.getSnapshot;
                t = t.value;
                try {
                    var n = e();
                    return !s(t, n)
                } catch (r) {
                    return !0
                }
            }
            var l = "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? function(t, e) {
                return e()
            } : function(t, e) {
                var n = e(),
                    r = o({
                        inst: {
                            value: n,
                            getSnapshot: e
                        }
                    }),
                    s = r[0].inst,
                    l = r[1];
                return a((function() {
                    s.value = n, s.getSnapshot = e, u(s) && l({
                        inst: s
                    })
                }), [t, n, e]), i((function() {
                    return u(s) && l({
                        inst: s
                    }), t((function() {
                        u(s) && l({
                            inst: s
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
                zR: () => B,
                TM: () => G,
                sC: () => Y,
                aE: () => X,
                HS: () => v,
                WN: () => f,
                uj: () => S
            });
            const r = "[^/]+?",
                s = {
                    sensitive: !1,
                    strict: !1,
                    start: !0,
                    end: !0
                },
                o = {
                    type: 3,
                    value: "*",
                    regexp: "(?:/((?:.*?)(?:/(?:.*?))*))?$"
                },
                i = Object.assign(Object.assign({}, o), {
                    regexp: "(?:/((?:[^/]+?)(?:/(?:[^/]+?))*))?$"
                }),
                a = /[.+*?^${}()[\]/\\]/g;

            function c(t, e, n) {
                var c;
                const u = Object.assign({}, s, e);
                let l = o;
                u.strict && (l = i);
                let h = !1;
                const p = t[t.length - 1];
                if (p) {
                    const e = p[p.length - 1];
                    e && 0 === e.type && (e.value === l.value ? (h = !0, p.pop(), 0 === p.length && t.pop(), t.push([l])) : e.value.endsWith(l.value) && (h = !0, console.warn(`Route path "${e.value}" will be treated as if it were "${e.value.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.value.replace(/\*$/,"/*")}".`), e.value = e.value.slice(0, -1), t.push([l])))
                }
                let f = [],
                    d = u.start ? "^" : "";
                const y = [];
                for (const s of t) {
                    const t = s.length ? [] : [90];
                    u.strict && !s.length && (d += "/");
                    for (let e = 0; e < s.length; e++) {
                        const n = s[e];
                        let o = 40 + (u.sensitive ? .25 : 0);
                        if (0 === n.type) e || (d += "/"), d += n.value.replace(a, "\\$&"), o += 40;
                        else if (1 === n.type) {
                            const {
                                value: t,
                                repeatable: i,
                                optional: a,
                                regexp: c
                            } = n;
                            y.push({
                                name: t,
                                repeatable: i,
                                optional: a
                            });
                            const l = c || r;
                            if (l !== r) {
                                o += 10;
                                try {
                                    new RegExp(`(${l})`)
                                } catch (g) {
                                    throw new Error(`Invalid custom RegExp for param "${t}" (${l}): ` + g.message)
                                }
                            }
                            let h = i ? `((?:${l})(?:/(?:${l}))*)` : `(${l})`;
                            e || (h = a && s.length < 2 ? `(?:/${h})` : "/" + h), a && (h += "?"), d += h, u.end || (d += "(?=/|$)"), o += 20, a && (o += -8), i && (o += -20), ".*" === l && (o += -50)
                        } else if (3 === n.type) {
                            const {
                                value: t,
                                regexp: e
                            } = n;
                            y.push({
                                name: t,
                                repeatable: !1,
                                optional: !1
                            }), d += e, o += 20, o += -41
                        }
                        t.push(o)
                    }
                    f.push(t)
                }
                if (u.strict && u.end) {
                    const t = f.length - 1;
                    f[t][f[t].length - 1] += .7000000000000001
                }
                h || (u.strict || (d += "/*?"), u.end ? d += "$" : u.strict && (d += "(?:/*|$)"));
                const _ = new RegExp(d, u.sensitive ? "" : "i");
                if (null === n || void 0 === n ? void 0 : n.routes) {
                    "" === (null === (c = n.routes[n.routes.length - 1]) || void 0 === c ? void 0 : c.path) && f.push([.1])
                }
                return {
                    re: _,
                    score: f,
                    keys: y,
                    parse: function(t) {
                        const e = t.match(_),
                            n = {};
                        if (!e) return null;
                        for (let r = 1; r < e.length; r++) {
                            const t = e[r] || "",
                                s = y[r - 1];
                            if (s.name === l.value) {
                                n[s.name] = t;
                                break
                            }
                            s.repeatable ? n[s.name] = t ? t.split("/") : [] : n[s.name] = t
                        }
                        return {
                            match: e[0],
                            params: n
                        }
                    },
                    stringify: function(e) {
                        let n = "",
                            r = !1;
                        for (const s of t) {
                            r && n.endsWith("/") || (n += "/"), r = !1;
                            for (const t of s)
                                if (0 === t.type) n += t.value;
                                else if (1 === t.type) {
                                const {
                                    value: o,
                                    repeatable: i,
                                    optional: a
                                } = t, c = e[o];
                                if (Array.isArray(c) && !i) throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);
                                if (void 0 === c && !a) throw new Error(`Missing required param "${o}"`);
                                const u = Array.isArray(c) ? c.join("/") : c || "";
                                !u && a && s.length < 2 && (n.endsWith("/") ? n = n.slice(0, -1) : r = !0), n += u
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

            function p(t) {
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
                const s = [];
                let o;

                function i() {
                    o && s.push(o), o = []
                }
                let a, c = 0,
                    u = "",
                    p = "";

                function f() {
                    u && (0 === n ? o.push({
                        type: 0,
                        value: u
                    }) : 1 === n || 2 === n || 3 === n ? (o.length > 1 && ("*" === a || "+" === a) && e(`A repeatable param (${u}) must be alone in its segment. `), o.push({
                        type: 1,
                        value: u,
                        regexp: p,
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
                            "/" === a ? (u && f(), i()) : ":" === a ? (f(), n = 1) : d();
                            break;
                        case 4:
                            d(), n = r;
                            break;
                        case 1:
                            "(" === a ? n = 2 : h.test(a) ? d() : (f(), n = 0, "*" !== a && "?" !== a && "+" !== a && c--);
                            break;
                        case 2:
                            ")" === a ? "\\" == p[p.length - 1] ? p = p.slice(0, -1) + a : n = 3 : p += a;
                            break;
                        case 3:
                            f(), n = 0, "*" !== a && "?" !== a && "+" !== a && c--, p = "";
                            break;
                        default:
                            e("Unknown state")
                    } else r = n, n = 4;
                return 2 === n && e(`Unfinished custom RegExp for param "${u}"`), f(), i(), s
            }

            function f(t, e) {
                "string" === typeof t && (t = {
                    path: t
                });
                const {
                    path: n,
                    caseSensitive: r = !1,
                    end: s = !0
                } = t, o = c(p(n), {
                    strict: !1,
                    end: s,
                    sensitive: r
                }), i = o.parse(e);
                if (!i) return null;
                const {
                    keys: a = []
                } = o, {
                    match: u,
                    params: l
                } = i;
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

            function _(t, e) {
                if (!t) {
                    "undefined" !== typeof console && console.warn(e);
                    try {
                        throw new Error(e)
                    } catch (n) {}
                }
            }
            var g = n("oHTK");
            const m = t => t.replace(/\/\/+/g, "/"),
                v = t => m(t.join("/")),
                b = t => m(t).split("/");

            function x(t) {
                return t || (t = "/"), "/" !== t.charAt(0) && (t = "/" + t), t.replace(/\/$/, "")
            }

            function w(t) {
                return g.parse(t)
            }

            function S({
                pathname: t = "/",
                search: e = "",
                hash: n = "",
                query: r = {}
            }, s) {
                if (!e) {
                    const t = g.stringify(r);
                    e = t ? `?${t}` : ""
                }
                const o = t + e + n;
                return s ? v([s, o]) : o
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
                        r >= 0 && (n.search = t.substr(r), n.query = w(n.search), t = t.substr(0, r)), t && (n.pathname = t)
                    }
                } else {
                    const e = t;
                    ["pathname", "search", "hash", "query"].forEach((t => {
                        const r = e[t];
                        null != r && (n[t] = r)
                    })), n.search ? n.query = w(n.search) : n.search = g.stringify(n.query)
                }
                const r = n.pathname;
                return n.pathname = r ? function(t, e) {
                    let n = b(e.replace(/\/+$/, ""));
                    return b(t).forEach((t => {
                        ".." === t ? n.length > 1 && n.pop() : "." !== t && n.push(t)
                    })), n.length > 1 ? v(n) : "/"
                }(r, r.startsWith("/") ? "/" : e) : e, n
            }

            function O(t, e) {
                return e && "/" !== e ? t.toLowerCase().startsWith(e.toLowerCase()) ? t.slice(e.length) || "/" : null : t
            }
            const j = "beforeunload";

            function k(t) {
                t.preventDefault(), t.returnValue = ""
            }

            function C(t, {
                basename: e,
                state: n = null,
                key: r,
                redirectedFrom: s
            } = {}) {
                const o = E(t),
                    i = O(o.pathname, e || "/");
                i && (o.pathname = i);
                const a = Boolean(e) && !i;
                return y(Object.assign(Object.assign({}, o), {
                    redirectedFrom: s,
                    notMatchBasename: a,
                    state: n,
                    key: r || Math.random().toString(36).substr(2, 8)
                }))
            }

            function A(t, e, {
                replace: n = !1
            } = {}) {
                const r = window.history;
                try {
                    n ? r.replaceState(t, "", e) : r.pushState(t, "", e)
                } catch (s) {
                    window.location[n ? "replace" : "assign"](e)
                }
            }

            function P(t, e) {
                A(t, e, {
                    replace: !0
                })
            }

            function I(t, e) {
                let n = t.push(e);
                return 1 === t.length && window.addEventListener(j, k),
                    function() {
                        n(), t.length || window.removeEventListener(j, k)
                    }
            }

            function T(t, e) {
                let n = t[1],
                    r = "/",
                    s = {},
                    o = [];
                for (let i = 0; i < n.length; ++i) {
                    let t = n[i],
                        a = "/" === r ? e : e.slice(r.length) || "/",
                        c = f({
                            path: t.path,
                            caseSensitive: t.caseSensitive,
                            end: i === n.length - 1
                        }, a);
                    if (!c) return null;
                    r = v([r, c.pathname]), s = Object.assign(Object.assign({}, s), c.params), o.push({
                        route: t,
                        pathname: r,
                        params: Object.freeze(s)
                    })
                }
                return o
            }

            function R(t) {
                if (t.length <= 1) return t;
                const e = t.map(((t, e) => {
                    const [n, r] = t;
                    return Object.assign(Object.assign({}, c(p(n), void 0, {
                        routes: r
                    })), {
                        path: n,
                        index: e
                    })
                }));
                e.sort(((t, e) => function(t, e) {
                    let n = 0;
                    const r = t.score,
                        s = e.score;
                    for (; n < r.length && n < s.length;) {
                        const t = u(r[n], s[n]);
                        if (t) return t;
                        n++
                    }
                    return s.length - r.length || t.index - e.index
                }(t, e)));
                const n = [];
                return e.forEach(((e, r) => {
                    const {
                        index: s
                    } = e;
                    n[r] = t[s]
                })), n
            }

            function D(t, e = [], n = "", r = [], s = []) {
                return t.forEach(((t, o) => {
                    let i;
                    i = "" === t.path ? n : v([n, t.path]);
                    let a = r.concat(t),
                        c = s.concat(o);
                    t.children && D(t.children, e, i, a, c), e.push([i, a, c])
                })), e
            }

            function N(t, e, n = "") {
                "string" === typeof e && (e = E(e));
                let r = e.pathname || "/";
                if (n) {
                    const t = O(r, x(n));
                    if (!t) return null;
                    r = t
                }
                let s = D(t);
                s = R(s);
                let o = null;
                for (let i = 0; null == o && i < s.length; ++i) o = T(s[i], r);
                return o
            }
            const L = "POP",
                M = "REPLACE";
            class H {
                constructor({
                    basename: t = ""
                } = {}) {
                    this.action = L, this.location = C("/"), this.doTransition = () => {}, this._index = 0, this._blockers = d(), this.basename = x(t)
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
                    state: s = null,
                    redirectedFrom: o,
                    skipGuards: i
                }) {
                    const {
                        path: a
                    } = this.resolve(t, this.location.pathname), c = C(a, {
                        state: s,
                        redirectedFrom: o
                    });
                    this._blockers.length ? this._blockers.call({
                        action: r,
                        location: c,
                        retry: () => {
                            this.transitionTo(t, {
                                onTransition: e,
                                onAbort: n,
                                action: r,
                                state: s,
                                redirectedFrom: o,
                                skipGuards: i
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
                    }), n, i, r === M, o)
                }
                _updateState(t) {
                    this.action = t, [this._index, this.location] = this.getIndexAndLocation()
                }
            }

            function U(t, e, n) {
                return Math.min(Math.max(t, e), n)
            }
            class $ extends H {
                constructor({
                    initialEntries: t = ["/"],
                    initialIndex: e,
                    basename: n = ""
                } = {}) {
                    super({
                        basename: n
                    }), this._entries = [], this._entries = t.map((t => {
                        let e = C(Object.assign({
                            pathname: "/",
                            search: "",
                            hash: ""
                        }, "string" === typeof t ? E(t) : t), {
                            basename: this.basename
                        });
                        return _("/" === e.pathname.charAt(0), `Relative pathnames are not supported in createMemoryHistory({ initialEntries }) (invalid entry: ${JSON.stringify(t)})`), e
                    })), this._index = U(null == e ? this._entries.length - 1 : e, 0, this._entries.length - 1), this.location = this._entries[this._index]
                }
                setup() {}
                push(t, {
                    state: e,
                    redirectedFrom: n,
                    skipGuards: r
                } = {}) {
                    return this.transitionTo(t, {
                        state: e,
                        redirectedFrom: n,
                        skipGuards: r,
                        onTransition: ({
                            location: t
                        }) => {
                            this._index += 1, this._entries.splice(this._index, this._entries.length, t)
                        }
                    })
                }
                replace(t, {
                    state: e,
                    redirectedFrom: n,
                    skipGuards: r
                } = {}) {
                    return this.transitionTo(t, {
                        state: e,
                        action: M,
                        redirectedFrom: n,
                        skipGuards: r,
                        onTransition: ({
                            location: t
                        }) => {
                            this._entries[this._index] = t
                        }
                    })
                }
                go(t) {
                    const {
                        _index: e,
                        _entries: n
                    } = this;
                    let r = U(e + t, 0, n.length - 1),
                        s = n[r];
                    this._blockers.length ? this._blockers.call({
                        action: "POP",
                        location: s,
                        retry: () => {
                            this.go(t)
                        }
                    }) : this.transitionTo(s.pathname, Object.assign(Object.assign({}, s), {
                        action: "POP",
                        onTransition: ({
                            location: t
                        }) => {
                            this._index = r
                        }
                    }))
                }
                block(t) {
                    return this._blockers.push(t)
                }
                getIndexAndLocation() {
                    const t = this._index;
                    return [t, this._entries[t]]
                }
            }
            class V extends H {
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
                        this.location = C(this.location, {
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
                            A(t, e)
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
                            P(t, e)
                        }
                    })
                }
                go(t) {
                    this._history.go(t)
                }
                block(t) {
                    return I(this._blockers, t)
                }
                setup() {
                    let t = null;
                    window.addEventListener("popstate", (() => {
                        const e = this._index,
                            n = this._blockers;
                        if (t) n.call(t), t = null;
                        else {
                            let r = L,
                                [s, o] = this.getIndexAndLocation();
                            if (n.length)
                                if (null != s) {
                                    let n = e - s;
                                    n && (t = {
                                        action: r,
                                        location: o,
                                        retry: () => {
                                            this.go(-1 * n)
                                        }
                                    }, this.go(n))
                                } else _(!1, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
                            else this.transitionTo(o, {
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
                    return [r.idx, C({
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

            function F(t, e) {
                return "#" + S(E(t), e)
            }
            class q extends H {
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
                        this.location = C(this.location, {
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
                            A(t, e)
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
                            P(t, e)
                        }
                    })
                }
                go(t) {
                    this._history.go(t)
                }
                block(t) {
                    return I(this._blockers, t)
                }
                resolve(t, e) {
                    const n = E(t, e);
                    return {
                        path: n,
                        href: F(n, this.basename)
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
                                [s, o] = this.getIndexAndLocation();
                            if (n.length)
                                if (null != s) {
                                    let n = e - s;
                                    n && (t = {
                                        action: r,
                                        location: o,
                                        retry: () => {
                                            this.go(-1 * n)
                                        }
                                    }, this.go(n))
                                } else _(!1, "You are trying to block a POP navigation to a location that was not created by the history library. The block will fail silently in production, but in general you should do all navigation with the history library (instead of using window.history.pushState directly) to avoid this situation.");
                            else this.transitionTo(o, {
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
                    return [r.idx, C({
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

            function B(t = {}) {
                return new V(t)
            }

            function G(t = {}) {
                return new q(t)
            }

            function Y(t = {}) {
                return new $(t)
            }
            var z = n("Z2pg");

            function W(t, e = !1) {
                return t.map((t => {
                    const n = e ? "" : "/";
                    let r = Object.assign(Object.assign({}, t), {
                        caseSensitive: !!t.caseSensitive,
                        path: t.path || n
                    });
                    return t.children && (r.children = W(t.children, !0)), r
                }))
            }
            const K = {
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
            class J {
                constructor({
                    history: t,
                    routes: e
                }) {
                    this._pending = null, this._cancleHandler = null, this._ready = !1, this._readyDefer = (0, z.r)(), this._listeners = d(), this._beforeEachs = d(), this._beforeResolves = d(), this._afterEachs = d(), this.init = () => {
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
                        this._ready && (this._ready = !1, this._readyDefer = (0, z.r)()), this._cancleHandler && (this._cancleHandler(), this._cancleHandler = null), this._routes = W(t), this._current = K;
                        const e = () => this._history.setup();
                        this._history.transitionTo(this._getCurrent(), {
                            onTransition: e,
                            onAbort: e
                        })
                    }, this._history = t, this._routes = W(e), this._current = K, this._history.doTransition = this._doTransition.bind(this)
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
                _doTransition(t, e, n, r, s, o) {
                    const i = this._getNextRoute(t),
                        a = this._current,
                        c = i.matches,
                        u = c.reduceRight(((t, {
                            route: {
                                redirect: e
                            }
                        }) => !t && e ? e : t), null);
                    const l = a === K;
                    if (u) {
                        const t = s || l ? "replace" : "push";
                        return this._history[t](u, {
                            redirectedFrom: o || i
                        })
                    }
                    const h = new Map,
                        p = r ? [] : [].concat(this._beforeEachs.toArray(), this._beforeResolves.toArray());
                    let f = !1;
                    this._cancleHandler = () => {
                        f = !0, this._pending = null
                    };
                    const d = () => {
                        this._cancleHandler = null, n && n(), this._ready || this._current === K || (this._ready = !0, this._readyDefer.resolve())
                    };
                    this._pending = t;
                    let y = [];
                    ! function(t, e, n) {
                        const r = s => {
                            s >= t.length ? n() : t[s] ? e(t[s], (() => {
                                r(s + 1)
                            })) : r(s + 1)
                        };
                        r(0)
                    }(p, ((e, n) => {
                        if (!f) {
                            if (this._pending !== t) return d();
                            try {
                                e(i, a, (t => {
                                    if (!1 === t) d();
                                    else if (r = t, Object.prototype.toString.call(r).indexOf("Error") > -1) d();
                                    else if ("string" === typeof t || "object" === typeof t && "string" === typeof t.path) {
                                        d();
                                        const e = s || "object" === typeof t && t.replace || l ? "replace" : "push";
                                        "object" === typeof t ? this._history[e](t.path, {
                                            redirectedFrom: o || i,
                                            skipGuards: t.skipGuards,
                                            state: t.state
                                        }) : this._history[e](t, {
                                            redirectedFrom: o || i
                                        })
                                    } else e = t, Object.prototype.toString.call(e).indexOf("Function") > -1 && y.push(t), n();
                                    var e, r
                                }))
                            } catch (r) {
                                d(), console.error("Uncaught error during navigation:", r)
                            }
                        }
                    }), (() => {
                        if (f) return;
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
                    let s;
                    if (r.length) {
                        if (s = r[r.length - 1].params, t)
                            for (const {
                                    route: o
                                } of r) {
                                const n = null === (e = t.get(o)) || void 0 === e ? void 0 : e.props;
                                n && (o.props = Object.assign(Object.assign({}, o.props), n))
                            }
                    } else s = {};
                    return {
                        matches: r,
                        params: s,
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
            const X = t => new J(t)
        },
        oHTK: (t, e, n) => {
            "use strict";
            const r = n("UM5q"),
                s = n("1Fob"),
                o = n("p/97");

            function i(t) {
                if ("string" !== typeof t || 1 !== t.length) throw new TypeError("arrayFormatSeparator must be single character string")
            }

            function a(t, e) {
                return e.encode ? e.strict ? r(t) : encodeURIComponent(t) : t
            }

            function c(t, e) {
                return e.decode ? s(t) : t
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

            function p(t, e) {
                return e.parseNumbers && !Number.isNaN(Number(t)) && "string" === typeof t && "" !== t.trim() ? t = Number(t) : !e.parseBooleans || null === t || "true" !== t.toLowerCase() && "false" !== t.toLowerCase() || (t = "true" === t.toLowerCase()), t
            }

            function f(t, e) {
                i((e = Object.assign({
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
                                    const s = "string" === typeof n && n.includes(t.arrayFormatSeparator),
                                        o = "string" === typeof n && !s && c(n, t).includes(t.arrayFormatSeparator);
                                    n = o ? c(n, t) : n;
                                    const i = s || o ? n.split(t.arrayFormatSeparator).map((e => c(e, t))) : null === n ? n : c(n, t);
                                    r[e] = i
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
                for (const s of t.split("&")) {
                    let [t, i] = o(e.decode ? s.replace(/\+/g, " ") : s, "=");
                    i = void 0 === i ? null : ["comma", "separator"].includes(e.arrayFormat) ? i : c(i, e), n(c(t, e), i, r)
                }
                for (const s of Object.keys(r)) {
                    const t = r[s];
                    if ("object" === typeof t && null !== t)
                        for (const n of Object.keys(t)) t[n] = p(t[n], e);
                    else r[s] = p(t, e)
                }
                return !1 === e.sort ? r : (!0 === e.sort ? Object.keys(r).sort() : Object.keys(r).sort(e.sort)).reduce(((t, e) => {
                    const n = r[e];
                    return Boolean(n) && "object" === typeof n && !Array.isArray(n) ? t[e] = u(n) : t[e] = n, t
                }), Object.create(null))
            }
            e.extract = h, e.parse = f, e.stringify = (t, e) => {
                if (!t) return "";
                i((e = Object.assign({
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
                                    const s = n.length;
                                    return void 0 === r || t.skipNull && null === r || t.skipEmptyString && "" === r ? n : null === r ? [...n, [a(e, t), "[", s, "]"].join("")] : [...n, [a(e, t), "[", a(s, t), "]=", a(r, t)].join("")]
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
                    s = {};
                for (const i of Object.keys(t)) n(i) || (s[i] = t[i]);
                const o = Object.keys(s);
                return !1 !== e.sort && o.sort(e.sort), o.map((n => {
                    const s = t[n];
                    return void 0 === s ? "" : null === s ? a(n, e) : Array.isArray(s) ? s.reduce(r(n), []).join("&") : a(n, e) + "=" + a(s, e)
                })).filter((t => t.length > 0)).join("&")
            }, e.parseUrl = (t, e) => {
                e = Object.assign({
                    decode: !0
                }, e);
                const [n, r] = o(t, "#");
                return Object.assign({
                    url: n.split("?")[0] || "",
                    query: f(h(t), e)
                }, e && e.parseFragmentIdentifier && r ? {
                    fragmentIdentifier: c(r, e)
                } : {})
            }, e.stringifyUrl = (t, n) => {
                n = Object.assign({
                    encode: !0,
                    strict: !0
                }, n);
                const r = l(t.url).split("?")[0] || "",
                    s = e.extract(t.url),
                    o = e.parse(s, {
                        sort: !1
                    }),
                    i = Object.assign(o, t.query);
                let c = e.stringify(i, n);
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
                return new(n || (n = Promise))((function(s, o) {
                    function i(t) {
                        try {
                            c(r.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(i, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            };
            Object.defineProperty(e, "__esModule", {
                    value: !0
                }), e.trace = e.Span = e.SpanStatus = void 0, e.setReporter = function(t) {
                    false;
                    if (o) throw new Error("Reporter already set !");
                    o = t
                },
                function(t) {
                    t[t.Started = 0] = "Started", t[t.Stopped = 1] = "Stopped"
                }(n || (e.SpanStatus = n = {}));
            Symbol.for("shuvi_server_reporter");
            let s = 0;
            let o;
            class i {
                constructor({
                    name: t,
                    parentId: e,
                    attrs: r,
                    startTime: o
                }) {
                    this._name = t, this._parentId = e, this._attrs = r ? Object.assign({}, r) : {}, this._status = n.Started, this._id = (s++, s);
                    const i = Date.now();
                    this._start = o || i, this._now = i
                }
                get status() {
                    return this._status
                }
                stop(t) {
                    const e = o;
                    if (!e) return;
                    const r = t || Date.now(),
                        s = r - this._start;
                    this._status = n.Stopped, s > Number.MAX_SAFE_INTEGER && console.warn(`Duration is too long to express as float64: ${s}`), e({
                        timestamp: this._now,
                        name: this._name,
                        duration: s,
                        startTime: this._start,
                        endTime: r,
                        id: this._id,
                        parentId: this._parentId,
                        attrs: this._attrs
                    })
                }
                traceChild(t, e) {
                    return new i({
                        name: t,
                        parentId: this._id,
                        attrs: e
                    })
                }
                manualTraceChild(t, e, n, r) {
                    new i({
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
            e.Span = i;
            e.trace = (t, e, n) => new i({
                name: t,
                parentId: e,
                attrs: n
            })
        },
        "k/Mm": (t, e, n) => {
            "use strict";
            n.d(e, {
                CH: () => s,
                Kj: () => r,
                nt: () => o
            });
            const r = "__APP",
                s = "__APP_DATA",
                o = {
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
                ft: () => o,
                vO: () => a
            });
            const r = "requestId",
                s = {
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
                o = {
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
                i = {
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
                            attrs: i
                        },
                        SHUVI_NAVIGATION_DONE: {
                            name: "SHUVI_NAVIGATION_DONE",
                            duration: !0,
                            attrs: i
                        },
                        SHUVI_CLIENT_RUN_LOADERS: {
                            name: "SHUVI_CLIENT_RUN_LOADERS",
                            duration: !0,
                            attrs: s
                        }
                    }
                }
        },
        nlrA: (t, e, n) => {
            "use strict";
            var r = n("Dz1D"),
                s = n("etBY"),
                o = n("fix3"),
                i = n("kvBi"),
                a = n("aUDg");
            a.x.traceChild(i.ft.events.SHUVI_CLIENT_ENTRY_START.name).stop();
            var c = a.x.traceChild(i.ft.events.SHUVI_CLIENT_SETUP_ENV.name),
                u = (0, o.Y)();
            s.A && (0, r.UB)(s.A), u.runtimeConfig && (0, r.UB)(u.runtimeConfig), c.stop();
            n("cpeW");
            n("2rPy")
        },
        "2rPy": (t, e, n) => {
            "use strict";
            n.r(e);
            var r = n("2URn"),
                s = n("Pz56"),
                o = n.n(s),
                i = n("k/Mm"),
                a = n("TrCV"),
                c = n("DTvD"),
                u = n("AXwM");

            function l() {
                return (0, a.jsx)(u.Tp, {})
            }
            const h = c.memo(l);
            var p = n("888e"),
                f = n("kvBi"),
                d = n("VyXn");
            const y = "error",
                _ = (0, d.NP)({
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

            function m(t) {
                var e = t.app,
                    n = t.children;
                return (0, a.jsx)(g.Provider, {
                    value: e,
                    children: n
                })
            }
            var v = n("uHCZ"),
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
            var x = n("v7Og").A || function(t) {
                var e = t.errorCode,
                    n = t.errorDesc;
                return (0, a.jsxs)("div", {
                    style: b.container,
                    children: [(0, a.jsx)(v.A, {
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

            function w(t) {
                var e = t.code,
                    n = t.message,
                    r = t.error;
                return (0, a.jsx)(x, {
                    errorCode: e,
                    errorDesc: n,
                    error: r
                })
            }
            var S = n("nG1z"),
                E = n("2PCm"),
                O = n("VKAp"),
                j = function(t) {
                    (0, E.A)(n, t);
                    var e = (0, O.A)(n);

                    function n() {
                        var t;
                        return (0, p.A)(this, n), (t = e.call.apply(e, [this].concat(Array.prototype.slice.call(arguments)))).state = {
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
                            return this.state.error ? (0, a.jsx)(w, {
                                message: i.nt.CLIENT_ERROR.message,
                                error: this.state.error
                            }) : this.props.children
                        }
                    }]), n
                }(c.PureComponent),
                k = n("77a2"),
                C = n("ezuS"),
                A = n("aUDg"),
                P = f.vO.events,
                I = P.SHUVI_NAVIGATION_TRIGGERED,
                T = P.SHUVI_NAVIGATION_DONE,
                R = P.SHUVI_PAGE_READY;

            function D() {
                var t = (0, u.rd)(),
                    e = (0, u.K7)(),
                    n = c.useRef();
                c.useEffect((function() {
                    A.t.traceChild(R.name).stop(), t.beforeEach((function(t, e, r) {
                        var s, o = "".concat(e.pathname).concat(e.search),
                            i = "".concat(t.pathname).concat(t.search),
                            a = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, (function(t) {
                                var e = 16 * Math.random() | 0;
                                return ("x" == t ? e : 3 & e | 8).toString(16)
                            })),
                            c = (s = {}, (0, C.A)(s, T.attrs.from.name, o), (0, C.A)(s, T.attrs.to.name, i), (0, C.A)(s, T.attrs.navigationId.name, a), s);
                        A.t.traceChild(I.name, c).stop(), n.current = A.t.traceChild(T.name), n.current.setAttributes(c), r()
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
                    r = (0, k.MA)(y, _),
                    s = r.error;
                return r.hasError ? (0, a.jsx)(w, {
                    code: null === s || void 0 === s ? void 0 : s.code,
                    message: null === s || void 0 === s ? void 0 : s.message,
                    error: null === s || void 0 === s ? void 0 : s.error
                }) : (0, a.jsx)(a.Fragment, {
                    children: n
                })
            }

            function M(t) {
                var e = t.app,
                    n = t.children;
                return (0, a.jsx)(m, {
                    app: e,
                    children: (0, a.jsx)(j, {
                        children: (0, a.jsx)(k.Kq, {
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
            var H = function() {
                function t() {
                    (0, p.A)(this, t), this._pedningPromise = null, this.updateHead = this.updateHead.bind(this)
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
                        r && U(r, e)
                    }
                }, {
                    key: "_updateElements",
                    value: function(t, e) {
                        var n = document.getElementsByTagName("head")[0],
                            r = n.querySelectorAll("".concat(t, "[").concat(v.a, "='true']")),
                            s = Array.prototype.slice.call(r),
                            o = null;
                        s.length && (o = s[s.length - 1].nextElementSibling);
                        var i = e.map($).filter((function(t) {
                            for (var e = 0, n = s.length; e < n; e++) {
                                if (s[e].isEqualNode(t)) return s.splice(e, 1), !1
                            }
                            return !0
                        }));
                        s.forEach((function(t) {
                            return t.parentNode.removeChild(t)
                        })), i.forEach((function(t) {
                            o ? n.insertBefore(t, o) : n.appendChild(t)
                        }))
                    }
                }]), t
            }();

            function U(t, e) {
                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && "textContent" !== n && void 0 !== e[n] && t.setAttribute(n.toLowerCase(), e[n])
            }

            function $(t) {
                var e = t.tagName,
                    n = t.attrs,
                    r = t.innerHTML,
                    s = document.createElement(e);
                U(s, n);
                var o = n.textContent;
                return r ? s.innerHTML = r : o && (s.textContent = o), s
            }
            var V, F, q = n("gmsc"),
                B = n("nFfn"),
                G = n("oUj1"),
                Y = G.createRoot,
                z = G.hydrateRoot;
            V = function(t, e) {
                var n = t.root,
                    r = t.appContainer;
                t.shouldHydrate ? (F = z(r, n), null === e || void 0 === e || e()) : (F || (F = Y(r)), F.render(n))
            };
            var W = function(t, e, n, s) {
                    return new(n || (n = Promise))((function(o, i) {
                        var a = function(t) {
                                try {
                                    u(s.next(t))
                                } catch (e) {
                                    i(e)
                                }
                            },
                            c = function(t) {
                                try {
                                    u(s.throw(t))
                                } catch (e) {
                                    i(e)
                                }
                            },
                            u = function(t) {
                                var e;
                                t.done ? o(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, c)
                            };
                        u((s = s.apply(t, e || [])).next())
                    }))
                },
                K = new H;
            const J = new function t() {
                var e = this;
                (0, p.A)(this, t), this._isInitialRender = !0, this.renderApp = function(t) {
                    return W(e, [t], void 0, o().mark((function t(e) {
                        var n, r, s, c, l, h, p, d, y, _, g, m, v;
                        return o().wrap((function(t) {
                            for (;;) switch (t.prev = t.next) {
                                case 0:
                                    if (n = e.appContainer, r = e.app, s = e.appData, c = this, l = this._isInitialRender, h = r.router, p = r.appComponent, d = r.setError, r.error, y = s.ssr, _ = s.dynamicIds, g = y && l, m = p, !y || !l) {
                                        t.next = 13;
                                        break
                                    }
                                    return t.next = 11, Promise.all([B.A.preloadReady(_), h.ready]);
                                case 11:
                                    t.next = 17;
                                    break;
                                case 13:
                                    return t.next = 15, h.ready;
                                case 15:
                                    h.current.matches.length || d(i.nt.PAGE_NOT_FOUND);
                                case 17:
                                    v = (0, a.jsx)(u.Ix, {
                                        router: h,
                                        children: (0, a.jsx)(M, {
                                            app: r,
                                            children: (0, a.jsx)(q.T.Provider, {
                                                value: K.updateHead,
                                                children: (0, a.jsx)(m, {})
                                            })
                                        })
                                    }), A.x.traceChild(f.ft.events.SHUVI_CLIENT_DO_RENDER.name).traceFn((function() {
                                        V({
                                            root: v,
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
            var X = n("3cKB"),
                Z = n("fix3"),
                Q = n("OFK0");
            var tt = function(t, e) {
                var n = {};
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
                if (null != t && "function" === typeof Object.getOwnPropertySymbols) {
                    var s = 0;
                    for (r = Object.getOwnPropertySymbols(t); s < r.length; s++) e.indexOf(r[s]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[s]) && (n[r[s]] = t[r[s]])
                }
                return n
            };

            function et(t) {
                var e = function(t) {
                    return t.map((function(t) {
                        var n = Object.assign({}, t),
                            r = n.__componentRawRequest__,
                            s = n.__import__,
                            o = n.__resolveWeak__,
                            i = n.children,
                            a = tt(n, ["__componentRawRequest__", "__import__", "__resolveWeak__", "children"]);
                        return i && (a.children = e(i)), s && (a.component = function(t, e) {
                            return (0, Q.A)((function() {
                                return t().then((function(t) {
                                    return t.default || t
                                }))
                            }), e)
                        }(s, Object.assign({
                            webpack: o
                        }, r && {
                            modules: [r]
                        }))), r && (a.__componentRawRequest__ = r), a
                    }))
                };
                return e(t || [])
            }
            var nt = n("hSG1"),
                rt = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(s, o) {
                        function i(t) {
                            try {
                                c(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(i, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                };

            function st(t) {
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

            function ot(t, e, n) {
                const r = t.matches,
                    s = e.matches;
                let o = [];
                for (let a = 0; a < r.length; a++) {
                    const t = r[a],
                        e = s[a];
                    if (t.route.id !== (null === e || void 0 === e ? void 0 : e.route.id)) {
                        o.push(...r.slice(a));
                        break
                    }
                    if (!(0, nt.A)(t.params, null === e || void 0 === e ? void 0 : e.params)) {
                        o.push(...r.slice(a));
                        break
                    }
                    a === r.length - 1 && o.push(t)
                }
                const i = [];
                return o.forEach((t => {
                    const e = t.route.id;
                    n[e] && "function" === typeof n[e] && i.push(t)
                })), i
            }
            var it = n("IJ96"),
                at = n.n(it);
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
            class pt {
                constructor(t) {
                    this._map = {}, t instanceof pt ? t.forEach(((t, e) => {
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
            ct && (pt.prototype[Symbol.iterator] = pt.prototype.entries);
            class ft {
                constructor(t, e, n = {}) {
                    this.__shuvi_resp_type__ = e, this.data = t, this.status = n.status || 200, this.statusText = n.statusText || "", this.headers = new pt(n.headers)
                }
            }

            function dt(t) {
                return e => e && e.__shuvi_resp_type__ === t
            }
            dt("json"), dt("text");
            const yt = dt("redirect");
            var _t = function(t, e, n, r) {
                return new(n || (n = Promise))((function(s, o) {
                    function i(t) {
                        try {
                            c(r.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                            t(e)
                        }))).then(i, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                }))
            };

            function gt(t) {
                return _t(this, void 0, void 0, (function*() {
                    return new Promise((e => {
                        const n = [];
                        let r = t.length,
                            s = 0,
                            o = new Map,
                            i = !1;
                        const a = () => {
                            i = !0, e(n.slice())
                        };
                        t.map(((t, e) => _t(this, void 0, void 0, (function*() {
                            let c, u;
                            try {
                                c = yield t()
                            } catch (l) {
                                u = l
                            }
                            i || (n[e] = {
                                error: u,
                                result: c
                            }, s += 1, o.set(e, !0), (s === r || s === e + 1 && (t => {
                                for (let e = 0; e < t; e++)
                                    if (!o.has(e)) return !1;
                                return !0
                            })(e) && u) && a())
                        }))))
                    }))
                }))
            }

            function mt(t, e = 302) {
                throw function(t, e = 302) {
                    return new ft("", "redirect", {
                        status: e,
                        headers: {
                            Location: t
                        }
                    })
                }(t, e)
            }

            function vt(t, e = 500, {
                fatal: n = !1
            } = {}) {
                throw at()(e >= 400 && e < 600, "status code should be 4xx and 5xx"), new ft({
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
                getAppContext: s
            }) {
                return Object.assign({
                    pathname: t,
                    params: n,
                    query: e,
                    redirect: mt,
                    error: vt,
                    appContext: s()
                }, r ? {
                    req: r
                } : {})
            }

            function xt(t, e, n) {
                return _t(this, void 0, void 0, (function*() {
                    const r = {};
                    if (!t.length) return r;
                    const s = yield gt(t.map((t => () => _t(this, void 0, void 0, (function*() {
                        const r = e[t.route.id];
                        if ("function" !== typeof r) return;
                        let s, o;
                        try {
                            const e = yield r(n);
                            void 0 === e ? o = new Error(`You defined a loader for route "${t.route.path}" but didn't return anything from your \`loader\` function. Please return a value or \`null\`.`) : s = new ft(e, "json")
                        } catch (i) {
                            0,
                            o = i
                        }
                        if (o) throw o;
                        return s
                    })))));
                    for (let e = 0; e < s.length; e++) {
                        const n = s[e];
                        if (n.error) throw n.error;
                        const o = t[e].route.id;
                        at()(n.result, `loader function of route "${t[e].route.path}" should return a value`), r[o] = n.result.data
                    }
                    return r
                }))
            }
            var wt = n("NebQ"),
                St = n("jJny"),
                Et = n("UCWY"),
                Ot = n("JtFa"),
                jt = function(t, e, n, r) {
                    return new(n || (n = Promise))((function(s, o) {
                        function i(t) {
                            try {
                                c(r.next(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function a(t) {
                            try {
                                c(r.throw(t))
                            } catch (e) {
                                o(e)
                            }
                        }

                        function c(t) {
                            var e;
                            t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n((function(t) {
                                t(e)
                            }))).then(i, a)
                        }
                        c((r = r.apply(t, e || [])).next())
                    }))
                };
            class kt {
                constructor(t) {
                    this._config = t.config, this._router = t.router, this._request = t.request, this._context = {}, this._store = (0, d.Sz)({
                        initialState: t.initialState
                    }), this._error = this._store.getModel(y, _), this._loader = this._store.getModel(Ot.K, Ot.l), this._getLoaders = t.getLoaders, this._appComponent = t.AppComponent, this._pluginManager = (0, Et.EI)(), (0, Et.H7)(this._pluginManager, t.plugins || [])
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
                    return jt(this, void 0, void 0, (function*() {
                        yield this._initPlugin(), yield this._initAppContext(), this._router.init(), yield this._initAppComponent()
                    }))
                }
                get store() {
                    return this._store
                }
                updateComponents() {
                    return jt(this, arguments, void 0, (function*({
                        AppComponent: t
                    } = {}) {
                        t && t !== this._appComponent && (this._appComponent = t), yield this._initAppComponent()
                    }))
                }
                dispose() {
                    return jt(this, void 0, void 0, (function*() {
                        yield this._pluginManager.runner.dispose()
                    }))
                }
                _initPlugin() {
                    return jt(this, void 0, void 0, (function*() {
                        yield this._pluginManager.runner.init()
                    }))
                }
                _initAppContext() {
                    return jt(this, void 0, void 0, (function*() {
                        yield this._pluginManager.runner.appContext(this._context, {
                            router: this._router,
                            req: this._request
                        })
                    }))
                }
                _initAppComponent() {
                    return jt(this, void 0, void 0, (function*() {
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
            var Ct = function(t, e, n, s) {
                return new(n || (n = Promise))((function(o, i) {
                    var a = function(t) {
                            try {
                                u(s.next(t))
                            } catch (e) {
                                i(e)
                            }
                        },
                        c = function(t) {
                            try {
                                u(s.throw(t))
                            } catch (e) {
                                i(e)
                            }
                        },
                        u = function(t) {
                            var e;
                            t.done ? o(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                t(e)
                            }))).then(a, c)
                        };
                    u((s = s.apply(t, e || [])).next())
                }))
            };

            function At(t, e) {
                for (var n = [], r = Object.keys(e), s = 0; s < r.length; s++) {
                    var o = e[r[s]];
                    n.push([o.plugin, o.options])
                }
                for (var i = {}, a = ["appComponent", "appContext", "init", "dispose"], c = 0; c < a.length; c++) {
                    var u = a[c];
                    "function" === typeof t[u] && (i[u] = t[u])
                }
                return n.push([(0, Et.yO)(i, {
                    name: "shuvi-user-app"
                })]), n
            }
            var Pt = n("wcIl"),
                It = n("accZ"),
                Tt = /^http(s?)\:\/\//;
            const Rt = function(t) {
                return Tt.test(t)
            };
            var Dt, Nt = function(t, e, n, s) {
                    return new(n || (n = Promise))((function(o, i) {
                        var a = function(t) {
                                try {
                                    u(s.next(t))
                                } catch (e) {
                                    i(e)
                                }
                            },
                            c = function(t) {
                                try {
                                    u(s.throw(t))
                                } catch (e) {
                                    i(e)
                                }
                            },
                            u = function(t) {
                                var e;
                                t.done ? o(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, c)
                            };
                        u((s = s.apply(t, e || [])).next())
                    }))
                },
                Lt = f.vO.events.SHUVI_CLIENT_RUN_LOADERS,
                Mt = function(t) {
                    var e = t.routes,
                        r = t.appData,
                        s = t.appComponent;
                    if (Dt) return Dt;
                    var a, c = r.appState,
                        u = r.ssr,
                        l = r.basename;
                    a = "hash" === It.a ? (0, Pt.TM)({
                        basename: l
                    }) : (0, Pt.zR)({
                        basename: l
                    });
                    var h = (0, Pt.aE)({
                            history: a,
                            routes: et(e)
                        }),
                        p = (Dt = function(t) {
                            var e = this;
                            return new kt(Object.assign(Object.assign({}, t), {
                                getLoaders: function() {
                                    return Ct(e, void 0, void 0, o().mark((function t() {
                                        var e;
                                        return o().wrap((function(t) {
                                            for (;;) switch (t.prev = t.next) {
                                                case 0:
                                                    return t.next = 2, Promise.all([n.e(223), n.e(625)]).then(n.bind(n, "xXWS"));
                                                case 2:
                                                    return e = t.sent, t.abrupt("return", e.default || e);
                                                case 4:
                                                case "end":
                                                    return t.stop()
                                            }
                                        }), t)
                                    })))
                                },
                                plugins: At(wt, St.P)
                            }))
                        }({
                            initialState: c,
                            AppComponent: s,
                            router: h,
                            config: {
                                ssr: u
                            }
                        })).getLoadersData(),
                        f = Object.keys(p).length > 0,
                        d = !!u;
                    return h.beforeResolve((function(t, e, n) {
                        return Nt(void 0, void 0, void 0, o().mark((function r() {
                            var s, a, c, u, l, h;
                            return o().wrap((function(r) {
                                for (;;) switch (r.prev = r.next) {
                                    case 0:
                                        if (!d) {
                                            r.next = 4;
                                            break
                                        }
                                        return d = !1, f && Dt.setLoadersData(p), r.abrupt("return", n());
                                    case 4:
                                        if (t.matches.length) {
                                            r.next = 8;
                                            break
                                        }
                                        return Dt.setError(i.nt.PAGE_NOT_FOUND), n(), r.abrupt("return");
                                    case 8:
                                        return s = A.t.traceChild(Lt.name), r.next = 11, Dt.getLoaders();
                                    case 11:
                                        return a = r.sent, c = ot(t, e, a), u = bt({
                                            pathname: t.pathname,
                                            query: t.query,
                                            params: t.params,
                                            getAppContext: function() {
                                                return Dt.context
                                            }
                                        }), r.prev = 14, r.next = 17, new Promise((function(e, n) {
                                            var r, s, o = 0,
                                                i = function() {
                                                    2 === ++o && (s ? n(s) : e(r))
                                                };
                                            st(t).then(i).catch((function(t) {
                                                n(t)
                                            })), xt(c, a, u).then((function(t) {
                                                r = t, i()
                                            })).catch((function(t) {
                                                s = t, i()
                                            }))
                                        }));
                                    case 17:
                                        l = r.sent, Dt.setLoadersData(l), s.setAttribute(Lt.attrs.error.name, !1), s.stop(), r.next = 43;
                                        break;
                                    case 23:
                                        if (r.prev = 23, r.t0 = r.catch(14), s.setAttribute(Lt.attrs.error.name, !0), !yt(r.t0)) {
                                            r.next = 32;
                                            break
                                        }
                                        return h = r.t0.headers.get("Location"), Rt(h) ? window.location.replace(h) : n(h), s.setAttribute(Lt.attrs.errorType.name, "redirect"), s.stop(), r.abrupt("return");
                                    case 32:
                                        if (!((o = r.t0) && "string" === typeof o.__shuvi_resp_type__ && r.t0.status >= 400 && r.t0.status < 600)) {
                                            r.next = 38;
                                            break
                                        }
                                        return Dt.setError({
                                            message: r.t0.statusText,
                                            fatal: r.t0.data.fatal
                                        }), n(), s.setAttribute(Lt.attrs.errorType.name, "userError"), s.stop(), r.abrupt("return");
                                    case 38:
                                        return s.setAttribute(Lt.attrs.errorType.name, "unexpectedError"), s.stop(), Dt.setError({
                                            message: i.nt.CLIENT_ERROR.message,
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
                                var o
                            }), r, null, [
                                [14, 23]
                            ])
                        })))
                    })), Dt
                },
                Ht = function(t, e, n, s) {
                    return new(n || (n = Promise))((function(o, i) {
                        var a = function(t) {
                                try {
                                    u(s.next(t))
                                } catch (e) {
                                    i(e)
                                }
                            },
                            c = function(t) {
                                try {
                                    u(s.throw(t))
                                } catch (e) {
                                    i(e)
                                }
                            },
                            u = function(t) {
                                var e;
                                t.done ? o(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, c)
                            };
                        u((s = s.apply(t, e || [])).next())
                    }))
                },
                Ut = (0, Z.Y)(),
                $t = A.x.traceChild(f.ft.events.SHUVI_CLIENT_CREATE_APP.name).traceFn((function() {
                    return Mt({
                        appComponent: h,
                        routes: X.A,
                        appData: Ut
                    })
                }));
            window.__SHUVI ? window.__SHUVI.router = $t.router : window.__SHUVI = {
                router: $t.router
            }, Ht(void 0, void 0, void 0, o().mark((function t() {
                var e;
                return o().wrap((function(t) {
                    for (;;) switch (t.prev = t.next) {
                        case 0:
                            return e = A.x.traceChild(f.ft.events.SHUVI_CLIENT_RUN_APP.name), t.next = 3, A.x.traceChild(f.ft.events.SHUVI_CLIENT_APP_INIT.name).traceAsyncFn((function() {
                                return $t.init()
                            }));
                        case 3:
                            return t.next = 5, Ht(void 0, void 0, void 0, o().mark((function t() {
                                var e;
                                return o().wrap((function(t) {
                                    for (;;) switch (t.prev = t.next) {
                                        case 0:
                                            return e = document.getElementById(i.Kj), t.next = 3, J.renderApp({
                                                app: $t.getPublicAPI(),
                                                appData: Ut,
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
                t: () => i,
                x: () => o
            });
            var r = n("qK3R"),
                s = n("kvBi"),
                o = (0, r.trace)(s.ft.name),
                i = (0, r.trace)(s.vO.name)
        },
        EGIz: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => a
            });
            var r, s = n("VyXn"),
                o = n("UCWY"),
                i = n("NVnN");
            const a = (0, o.yO)({
                appContext: function(t) {
                    var e = {};
                    e = (0, i.K)("shuviInitialState", {}), t.store = function(t) {
                        var e = t.initialState,
                            n = (t.ctx, function() {
                                return (0, s.Sz)({
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
        OFK0: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => s
            });
            n("TrCV"), n("DTvD");
            var r = n("nFfn");

            function s(t, e) {
                var n = r.A,
                    s = {
                        loading: function(t) {
                            t.error, t.isLoading;
                            return t.pastDelay, null
                        }
                    };
                if ("function" === typeof t ? s.loader = t : "object" === typeof t && (s = Object.assign(Object.assign({}, s), t)), "boolean" === typeof(s = Object.assign(Object.assign({}, s), e)).ssr) {
                    if (!s.ssr) return delete s.ssr,
                        function(t, e) {
                            return delete e.webpack, delete e.modules, t(e)
                        }(n, s);
                    delete s.ssr
                }
                return n(s)
            }
        },
        gmsc: (t, e, n) => {
            "use strict";
            n.d(e, {
                T: () => s
            });
            var r = n("DTvD"),
                s = r.createContext(null)
        },
        uHCZ: (t, e, n) => {
            "use strict";
            n.d(e, {
                a: () => p,
                A: () => b
            });
            var r = n("ezuS"),
                s = n("TrCV"),
                o = n("DTvD"),
                i = (n("uqCI"), n("888e")),
                a = n("nG1z"),
                c = n("2PCm"),
                u = n("tEf9"),
                l = n("VKAp");
            var h = n("gmsc"),
                p = "data-shuvi-head",
                f = {
                    acceptCharset: "accept-charset",
                    className: "class",
                    htmlFor: "for",
                    httpEquiv: "http-equiv"
                };

            function d(t, e) {
                return "string" === typeof e || "number" === typeof e ? t : e.type === o.Fragment ? t.concat(o.Children.toArray(e.props.children).reduce((function(t, e) {
                    return "string" === typeof e || "number" === typeof e ? t : t.concat(e)
                }), [])) : t.concat(e)
            }
            var y = ["name", "httpEquiv", "charSet", "itemProp"];

            function _(t) {
                return "string" === typeof t.type
            }

            function g(t) {
                return t.reduce((function(t, e) {
                    var n = o.Children.toArray(e.props.children);
                    return t.concat(n)
                }), []).reduce(d, []).filter(_).reverse().filter(function() {
                    var t = new Set,
                        e = new Set,
                        n = new Set,
                        r = {};
                    return function(s) {
                        var o = !0;
                        if (s.key && "number" !== typeof s.key && s.key.indexOf("$") > 0) {
                            var i = s.key.slice(s.key.indexOf("$") + 1);
                            t.has(i) ? o = !1 : t.add(i)
                        }
                        switch (s.type) {
                            case "title":
                            case "base":
                                e.has(s.type) ? o = !1 : e.add(s.type);
                                break;
                            case "meta":
                                for (var a = 0, c = y.length; a < c; a++) {
                                    var u = y[a];
                                    if (s.props.hasOwnProperty(u))
                                        if ("charSet" === u) n.has(u) ? o = !1 : n.add(u);
                                        else {
                                            var l = s.props[u],
                                                h = r[u] || new Set;
                                            h.has(l) ? o = !1 : (h.add(l), r[u] = h)
                                        }
                                }
                        }
                        return o
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
                        for (var s in n)
                            if (n.hasOwnProperty(s) && "children" !== s && "dangerouslySetInnerHTML" !== s && void 0 !== n[s]) {
                                var o = f[s] || s.toLowerCase();
                                r.attrs[o] = n[s]
                            }
                        var i = n.children,
                            a = n.dangerouslySetInnerHTML;
                        return a ? r.innerHTML = a.__html || "" : i && (r.attrs.textContent = "string" === typeof i ? i : i.join("")), r
                    }({
                        type: e,
                        props: Object.assign(Object.assign({}, n), (0, r.A)({}, p, "true"))
                    })
                }))
            }
            var m = function() {
                var t, e = function(e) {
                        t = e.props.reduceComponentsToState((0, u.A)(n), e.props), e.props.handleStateChange && e.props.handleStateChange(t)
                    },
                    n = new Set;
                return function(r) {
                    (0, c.A)(o, r);
                    var s = (0, l.A)(o);

                    function o(t) {
                        return (0, i.A)(this, o), s.call(this, t)
                    }
                    return (0, a.A)(o, [{
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
                    }]), o
                }(o.Component)
            }();

            function v(t) {
                var e = t.children;
                return (0, s.jsx)(h.T.Consumer, {
                    children: function(t) {
                        return (0, s.jsx)(m, {
                            reduceComponentsToState: g,
                            handleStateChange: t,
                            children: e
                        })
                    }
                })
            }
            v.rewind = m.rewind;
            const b = v
        },
        nFfn: (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => y
            });
            var r = n("888e"),
                s = n("nG1z"),
                o = n("DTvD"),
                i = n("8ptQ"),
                a = o.createContext(null),
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
            var p = function() {
                function t(e, n) {
                    (0, r.A)(this, t), this._loadFn = e, this._opts = n, this._callbacks = new Set, this._delay = null, this._timeout = null, this.retry()
                }
                return (0, s.A)(t, [{
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

            function f(t) {
                return function(t, e) {
                    var n = function() {
                            if (!s) {
                                var e = new p(t, r);
                                s = {
                                    getCurrentValue: e.getCurrentValue.bind(e),
                                    subscribe: e.subscribe.bind(e),
                                    retry: e.retry.bind(e),
                                    promise: e.promise.bind(e)
                                }
                            }
                            return s.promise()
                        },
                        r = Object.assign({
                            loader: null,
                            loading: null,
                            delay: 200,
                            timeout: null,
                            webpack: null,
                            modules: null
                        }, e),
                        s = null;
                    if (!l && "function" === typeof r.webpack) {
                        var c = r.webpack();
                        u.push((function(t) {
                            var e = !0,
                                r = !1,
                                s = void 0;
                            try {
                                for (var o, i = c[Symbol.iterator](); !(e = (o = i.next()).done); e = !0) {
                                    var a = o.value;
                                    if (-1 !== t.indexOf(a)) return n()
                                }
                            } catch (u) {
                                r = !0, s = u
                            } finally {
                                try {
                                    e || null == i.return || i.return()
                                } finally {
                                    if (r) throw s
                                }
                            }
                        }))
                    }
                    var h = o.forwardRef((function(t, e) {
                        n();
                        var c = o.useContext(a),
                            u = (0, i.useSyncExternalStore)(s.subscribe, s.getCurrentValue, s.getCurrentValue);
                        return o.useImperativeHandle(e, (function() {
                            return {
                                retry: s.retry
                            }
                        }), []), c && Array.isArray(r.modules) && r.modules.forEach((function(t) {
                            c(t)
                        })), o.useMemo((function() {
                            return u.loading || u.error ? o.createElement(r.loading, {
                                isLoading: u.loading,
                                pastDelay: u.pastDelay,
                                timedOut: u.timedOut,
                                error: u.error,
                                retry: s.retry
                            }) : u.loaded ? o.createElement((e = u.loaded) && e.__esModule ? e.default : e, t) : null;
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
            f.preloadAll = function() {
                return new Promise((function(t, e) {
                    d(c).then(t, e)
                }))
            }, f.preloadReady = function() {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                return new Promise((function(e) {
                    var n = function() {
                        return l = !0, e()
                    };
                    d(u, t).then(n, n)
                }))
            };
            const y = f
        },
        "2ae6": (t, e, n) => {
            "use strict";
            n.d(e, {
                A: () => h
            });
            var r = n("2URn"),
                s = n("Pz56"),
                o = n.n(s),
                i = n("UCWY"),
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
                l = function(t, e, n, s) {
                    return new(n || (n = Promise))((function(o, i) {
                        var a = function(t) {
                                try {
                                    u(s.next(t))
                                } catch (e) {
                                    i(e)
                                }
                            },
                            c = function(t) {
                                try {
                                    u(s.throw(t))
                                } catch (e) {
                                    i(e)
                                }
                            },
                            u = function(t) {
                                var e;
                                t.done ? o(t.value) : (e = t.value, (0, r.A)(e, n) ? e : new n((function(t) {
                                    t(e)
                                }))).then(a, c)
                            };
                        u((s = s.apply(t, e || [])).next())
                    }))
                };
            const h = (0, i.Uu)({
                appComponent: function(t, e) {
                    return l(void 0, void 0, void 0, o().mark((function n() {
                        return o().wrap((function(n) {
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
                JB: () => i,
                Kq: () => s,
                MA: () => o
            });
            var r = (0, n("V0mm").g$)(),
                s = r.Provider,
                o = r.useSharedModel,
                i = r.useStaticModel
        },
        Srb9: (t, e, n) => {
            "use strict";
            n.d(e, {
                L: () => a
            });
            var r = n("AXwM"),
                s = n("JtFa"),
                o = n("77a2"),
                i = Object.prototype.hasOwnProperty,
                a = function() {
                    var t = (0, r.z7)(),
                        e = t.route.id,
                        n = (0, o.JB)(s.K, s.l);
                    if (!i.call(n.dataByRouteId, e)) throw Error('Loader data not found for route "'.concat(t.route.path, '". Please make sure the page component where `useLoaderData` is called has a `loader` export.'));
                    return n.dataByRouteId[e]
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
            const s = r(n("h7FZ"));
            e.default = s.default
        },
        hSG1: (t, e) => {
            "use strict";
            e.A = function t(e, n) {
                function r(t) {
                    return Object.prototype.toString.call(t).slice(8, -1).toLowerCase()
                }
                let s = r(e);
                return s === r(n) && ("array" === s ? function() {
                    if (e.length !== n.length) return !1;
                    for (let r = 0; r < e.length; r++)
                        if (!t(e[r], n[r])) return !1;
                    return !0
                }() : "object" === s ? function() {
                    if (Object.keys(e).length !== Object.keys(n).length) return !1;
                    for (let r in e)
                        if (Object.prototype.hasOwnProperty.call(e, r) && !t(e[r], n[r])) return !1;
                    return !0
                }() : "function" === s ? e.toString() === n.toString() : e === n)
            }
        },
        "c2++": (t, e) => {
            "use strict";
            Object.defineProperty(e, "B", {
                value: !0
            })
        },
        v7Og: (t, e) => {
            "use strict";
            e.A = null
        },
        VyXn: (t, e, n) => {
            "use strict";
            n.d(e, {
                IG: () => k,
                NP: () => E,
                Sz: () => fe
            });
            const r = () => {},
                s = Object.create(null),
                o = [],
                i = Object.assign,
                a = Object.prototype.hasOwnProperty,
                c = (t, e) => a.call(t, e),
                u = Object.prototype.toString,
                l = t => u.call(t),
                h = Array.isArray,
                p = t => "[object Map]" === l(t),
                f = t => "[object Set]" === l(t),
                d = t => "symbol" === typeof t,
                y = t => null !== t && "object" === typeof t,
                _ = t => "[object Object]" === l(t),
                g = t => "string" === typeof t && "NaN" !== t && "-" !== t[0] && "" + parseInt(t, 10) === t,
                m = (t, e) => Object.is(t, e),
                v = (t, e, n) => {
                    Object.defineProperty(t, e, {
                        configurable: !0,
                        enumerable: !1,
                        value: n
                    })
                };
            const b = Array.prototype.slice;
            const x = Object.prototype.propertyIsEnumerable;

            function w(t) {
                return Array.isArray(t) ? b.call(t) : p(t) ? new Map(t) : f(t) ? new Set(t) : Object.getPrototypeOf(t) === Object.prototype ? function(t) {
                    const e = {},
                        n = S(t);
                    for (let r = 0; r < n.length; r++) {
                        const s = n[r],
                            o = t[s];
                        x.call(t, s) ? e[s] = o : Object.defineProperty(e, s, {
                            configurable: !0,
                            writable: !0,
                            enumerable: !1,
                            value: o
                        })
                    }
                    return e
                }(t) : function(t) {
                    const e = Object.getOwnPropertyDescriptors(t),
                        n = S(e);
                    for (let r = 0; r < n.length; r++) {
                        const s = n[r],
                            o = e[s];
                        !1 === o.writable && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (e[s] = {
                            configurable: !0,
                            writable: !0,
                            enumerable: o.enumerable,
                            value: t[s]
                        })
                    }
                    return Object.create(Object.getPrototypeOf(t), e)
                }(t)
            }
            const S = "undefined" !== typeof Reflect && Reflect.ownKeys ? Reflect.ownKeys : "undefined" !== typeof Object.getOwnPropertySymbols ? t => Object.getOwnPropertyNames(t).concat(Object.getOwnPropertySymbols(t)) : Object.getOwnPropertyNames;
            const E = t => t;

            function O(t, ...e) {
                console.warn(`[Doura warn] ${t}`, ...e)
            }

            function j(t) {
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

            function k(t) {
                return v(t, "__r_skip", !0), t
            }

            function C(t) {
                return !!t && !!t.__r_state
            }

            function A(t) {
                const e = P(t);
                return e ? A(e.base) : t
            }

            function P(t) {
                return t && t.__r_state
            }

            function I(t) {
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
                L = t => (t.w & V) > 0,
                M = t => (t.n & V) > 0,
                H = new WeakMap,
                U = new WeakMap;
            let $ = 0,
                V = 1;
            let F;
            const q = Symbol(""),
                B = Symbol("");
            let G = 0;
            class Y {
                constructor(t, e = null, n) {
                    this.fn = t, this.scheduler = e, this.id = G++, this.deps = [], this.active = !0, this.parent = void 0,
                        function(t, e = R) {
                            e && e.active && e.effects.push(t)
                        }(this, n)
                }
                run() {
                    if (!this.active) return this.fn();
                    let t = F;
                    const e = W;
                    for (; t;) {
                        if (t === this) return;
                        t = t.parent
                    }
                    try {
                        return this.parent = F, F = this, W = !0, V = 1 << ++$, $ <= 30 ? (({
                            deps: t
                        }) => {
                            if (t.length)
                                for (let e = 0; e < t.length; e++) t[e].w |= V
                        })(this) : z(this), this.fn()
                    } finally {
                        $ <= 30 && (t => {
                            const {
                                deps: e
                            } = t;
                            if (e.length) {
                                let n = 0;
                                for (let r = 0; r < e.length; r++) {
                                    const s = e[r];
                                    L(s) && !M(s) ? s.delete(t) : e[n++] = s, s.w &= ~V, s.n &= ~V
                                }
                                e.length = n
                            }
                        })(this), V = 1 << --$, F = this.parent, W = e, this.parent = void 0, this.deferStop && this.stop()
                    }
                }
                stop() {
                    F === this ? this.deferStop = !0 : this.active && (z(this), this.onStop && this.onStop(), this.active = !1)
                }
            }

            function z(t) {
                const {
                    deps: e
                } = t;
                if (e.length) {
                    for (let n = 0; n < e.length; n++) e[n].delete(t);
                    e.length = 0
                }
            }
            let W = !0;
            const K = [];

            function J() {
                K.push(W), W = !1
            }

            function X() {
                const t = K.pop();
                W = void 0 === t || t
            }

            function Z(t, e, n) {
                if (W && F) {
                    let e = H.get(t);
                    e || H.set(t, e = new Map);
                    let r = e.get(n);
                    r || e.set(n, r = N()), tt(r)
                }
            }

            function Q(t) {
                if (W && F) {
                    const e = t.__r_state;
                    if (!e) return;
                    let n = U.get(e);
                    n || U.set(e, n = N()), tt(n)
                }
            }

            function tt(t) {
                let e = !1;
                $ <= 30 ? M(t) || (t.n |= V, e = !L(t)) : e = !t.has(F), e && (t.add(F), F.deps.push(t))
            }

            function et(t) {
                const e = U.get(t);
                if (e) {
                    const t = [...e];
                    for (const e of t) e.view && (e.view.mightChange = !0)
                }
            }

            function nt(t, e, n, r, s) {
                var o;
                const i = H.get(t),
                    a = t.base;
                let c = [];
                if (i)
                    if ("clear" === e) c = [...i.values()];
                    else if ("length" === n && h(a)) i.forEach(((t, e) => {
                    ("length" === e || e >= r) && c.push(t)
                }));
                else switch (void 0 !== n && c.push(i.get(n)), e) {
                    case "add":
                        h(a) ? g(n) && c.push(i.get("length")) : (c.push(i.get(q)), p(a) && c.push(i.get(B)));
                        break;
                    case "delete":
                        h(a) || (c.push(i.get(q)), p(a) && c.push(i.get(B)));
                        break;
                    case "set":
                        p(a) && c.push(i.get(q))
                }
                if (1 === c.length) c[0] && rt(c[0]);
                else {
                    const t = [];
                    for (const e of c) e && t.push(...e);
                    rt(N(t))
                }
                const u = null === (o = t.root) || void 0 === o ? void 0 : o.listeners;
                u && u.length && u.forEach((t => t()))
            }

            function rt(t) {
                const e = h(t) ? t : [...t];
                for (const n of e) n.view && st(n);
                for (const n of e) n.view || st(n)
            }

            function st(t) {
                (t !== F || t.allowRecurse) && (t.scheduler ? t.scheduler() : t.run())
            }
            class ot {
                constructor(t, {
                    disableCache: e = !1
                }) {
                    this.dep = void 0, this.mightChange = !1, this.dirty = !0, this.effect = new Y(t, (() => {
                        this.dirty || (this.dirty = !0, function(t) {
                            (t = A(t)).dep && rt(t.dep)
                        }(this))
                    })), this.effect.view = this, this.effect.active = this._cacheable = !e
                }
                get value() {
                    const t = A(this);
                    return function(t) {
                        W && F && tt((t = A(t)).dep || (t.dep = N()))
                    }(t), !t.dirty && t._cacheable || (t.dirty = !1, t._value = t.effect.run()), t._value
                }
                set value(t) {
                    0
                }
            }
            const it = new Set(["__proto__"]),
                at = new Set(Object.getOwnPropertyNames(Symbol).filter((t => "arguments" !== t && "caller" !== t)).map((t => Symbol[t])).filter(d));

            function ct(t) {
                t.copy || (t.copy = w(t.base))
            }

            function ut(t, e) {
                const n = t.__r_state;
                return (n ? I(n) : t)[e]
            }
            const lt = ft(),
                ht = pt();

            function pt() {
                const t = {};
                return ["includes", "indexOf", "lastIndexOf"].forEach((e => {
                    t[e] = function(...t) {
                        const n = P(this),
                            r = I(n);
                        for (let e = 0, o = this.length; e < o; e++) Z(n, 0, e + "");
                        const s = r[e](...t);
                        return -1 === s || !1 === s ? r[e](...t.map(A)) : s
                    }
                })), ["push", "pop", "shift", "unshift", "splice"].forEach((e => {
                    t[e] = function(...t) {
                        J();
                        const n = I(P(this))[e].apply(this, t);
                        return X(), n
                    }
                })), t
            }

            function ft() {
                return function(t, e, n) {
                    const r = I(t);
                    if ("__r_isReactive" === e) return !0;
                    if ("__r_state" === e && n === Ct.get(t)) return t;
                    if (h(r) && c(ht, e)) return Reflect.get(ht, e, n);
                    let s = Reflect.get(r, e, n);
                    return (d(e) ? at.has(e) : it.has(e)) ? s : (Z(t, 0, e), c(r, e) ? (t.disposed || !y(s) || (C(s) || (ct(t), s = t.copy[e] = Pt(s, t)), Q(s)), s) : s)
                }
            }

            function dt() {
                return function(t, e, n, r) {
                    const s = I(t),
                        o = ut(s, e),
                        i = h(s) && g(e) ? Number(e) < s.length : c(s, e);
                    if (!t.modified) {
                        const r = null === o || void 0 === o ? void 0 : o.__r_state;
                        if (r && r.base === n) return t.copy[e] = n, !0;
                        if (m(n, o) && (void 0 !== n || c(t.base, e))) return !0;
                        ct(t), T(t)
                    }
                    return m(t.copy[e], n) && (void 0 !== n || e in t.copy) || (t.copy[e] = n, t === P(r) && (i ? m(n, o) || nt(t, "set", e, n) : nt(t, "add", e, n), function(t) {
                        let e = t;
                        for (; e;) et(e), e = e.parent
                    }(t))), !0
                }
            }
            const yt = {
                get: lt,
                set: dt(),
                deleteProperty: function(t, e) {
                    const n = c(I(t), e);
                    if ((void 0 !== ut(t.base, e) || e in t.base) && (ct(t), T(t)), t.copy) {
                        const r = delete t.copy[e];
                        return r && n && nt(t, "delete", e, void 0), r
                    }
                    return !0
                },
                has: function(t, e) {
                    const n = I(t),
                        r = Reflect.has(n, e);
                    return d(e) && at.has(e) || Z(t, 0, e), r
                },
                ownKeys: function(t) {
                    const e = I(t);
                    return Z(t, 0, h(e) ? "length" : q), Reflect.ownKeys(e)
                },
                setPrototypeOf: function(t, e) {
                    const n = Reflect.setPrototypeOf(t.base, e);
                    return n && t.copy && Reflect.setPrototypeOf(t.copy, e), n
                },
                getOwnPropertyDescriptor: function(t, e) {
                    const n = I(t),
                        r = Reflect.getOwnPropertyDescriptor(n, e);
                    return r ? {
                        writable: !0,
                        configurable: !h(n) || "length" !== e,
                        enumerable: r.enumerable,
                        value: n[e]
                    } : r
                }
            };

            function _t(t) {
                t.copy || (t.copy = new Set, t.base.forEach((e => {
                    if (y(e)) {
                        const n = Pt(e, t);
                        Q(n), e !== n && t.drafts.set(e, n), t.copy.add(n)
                    } else t.copy.add(e)
                })))
            }

            function gt(t) {
                1 === t.type ? function(t) {
                    t.copy || (t.copy = new Map(t.base))
                }(t) : _t(t)
            }

            function mt(t) {
                const e = this.__r_state,
                    n = I(e);
                if (Z(e, 0, t), !n.has(t)) return;
                let r = n.get(t);
                return y(r) ? (C(r) || (gt(e), r = Pt(r, e), e.copy.set(t, r)), Q(r), r) : r
            }

            function vt(t, e) {
                const n = this.__r_state,
                    r = I(n),
                    s = r.has(t),
                    o = r.get(t),
                    i = () => {
                        gt(n), T(n), n.copy.set(t, e)
                    };
                return s ? m(e, o) || (i(), nt(n, "set", t, e)) : (i(), nt(n, "add", t, e)), this
            }

            function bt(t) {
                const e = this.__r_state;
                return I(e).has(t) || (_t(e), T(e), e.copy.add(t), nt(e, "add", t, t)), this
            }

            function xt(t) {
                const e = this.__r_state;
                return Z(e, 0, t), e.copy ? !!e.copy.has(t) || 2 === e.type && (e.drafts.has(t) && e.drafts.has(e.drafts.get(t))) : e.base.has(t)
            }

            function wt(t) {
                const e = this.__r_state,
                    n = I(e),
                    r = n.has(t);
                "get" in n && n.get(t), gt(e), T(e);
                let s = e.copy.delete(t);
                return 2 !== e.type || s || (s = !!e.drafts.has(t) && e.drafts.delete(e.drafts.get(t))), r && nt(e, "delete", t, void 0), s
            }

            function St() {
                const t = this.__r_state,
                    e = I(t),
                    n = 0 !== e.size,
                    r = e.clear();
                return n && (gt(t), T(t), t.copy.clear(), nt(t, "clear", void 0, void 0)), r
            }

            function Et() {
                const t = {
                    get: mt,
                    get size() {
                        return Z(t = this.__r_state, 0, q), I(t).size;
                        var t
                    },
                    has: xt,
                    add: bt,
                    set: vt,
                    delete: wt,
                    clear: St,
                    keys() {
                        const t = this.__r_state;
                        return 1 === t.type ? function(t) {
                            return Z(t, 0, B), I(t).keys()
                        }(t) : function(t) {
                            return Z(t, 0, q), _t(t), t.copy.values()
                        }(t)
                    },
                    forEach(t, e) {
                        const n = this.__r_state;
                        1 === n.type ? function(t, e, n, r) {
                            Z(e, 0, q), I(e).forEach(((s, o) => n.call(r, e.proxy.get(o), o, t)))
                        }(this, n, t, e) : function(t, e, n, r) {
                            const s = e.proxy.values();
                            let o = s.next();
                            for (; !o.done;) n.call(r, o.value, o.value, t), o = s.next()
                        }(this, n, t, e)
                    }
                };
                return ["values", "entries", Symbol.iterator].forEach((e => {
                    t[e] = function(t) {
                        return function(...e) {
                            const n = this.__r_state,
                                r = 1 === n.type,
                                s = "entries" === t || t === Symbol.iterator && r;
                            if (r) {
                                const t = n.proxy.keys();
                                return {
                                    next() {
                                        const {
                                            value: e,
                                            done: r
                                        } = t.next(), o = n.proxy.get(e);
                                        return r ? {
                                            value: o,
                                            done: r
                                        } : {
                                            value: s ? [e, o] : o,
                                            done: r
                                        }
                                    },
                                    [Symbol.iterator]() {
                                        return this
                                    }
                                }
                            }
                            return Z(n, 0, q), _t(n), n.copy[t](...e)
                        }
                    }(e)
                })), [t]
            }
            const [Ot] = Et();

            function jt() {
                const t = Ot;
                return (e, n, r) => {
                    if ("__r_isReactive" === n) return !0;
                    if ("__r_state" === n) return e;
                    const s = I(e);
                    return Reflect.get(c(t, n) && n in s ? t : s, n, r)
                }
            }
            const kt = {
                get: jt()
            };
            const Ct = new WeakMap;
            let At = 0;

            function Pt(t, e) {
                const n = j(t);
                if (0 === n) return t;
                if (t.__r_skip || !Object.isExtensible(t)) return t;
                if (t.__r_state) return t;
                let r = {
                        type: 0,
                        id: At++,
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
                    s = r,
                    o = yt;
                3 === n ? (r.type = 2, r.drafts = new Map, s = new Set, o = kt) : 4 === n ? (r.type = 1, s = new Map, o = kt) : 2 === n && (s = []), s !== r && Object.keys(r).forEach((t => {
                    Object.defineProperty(s, t, {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: r[t]
                    })
                }));
                const i = new Proxy(s, o);
                return s.proxy = i, e ? (s.root = e.root, e.children.push(s)) : s.root = s, Ct.set(s, i), s.proxy
            }

            function It(t, e) {
                const n = function(t, {
                    copies: e,
                    snapshots: n
                }) {
                    const r = t => {
                            switch (j(t)) {
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
                        s = t => {
                            if (!y(t)) return t;
                            if (C(t)) {
                                let s = n.get(t);
                                if (!s) {
                                    const o = e.get(t.__r_state);
                                    n.set(t, s = new Proxy(o, r(o)))
                                }
                                return s
                            }
                            return t
                        },
                        o = t => function(...e) {
                            const n = this.__r_raw,
                                r = "entries" === t || t === Symbol.iterator && p(this),
                                o = n[t](...e);
                            return {
                                next() {
                                    const {
                                        value: t,
                                        done: e
                                    } = o.next();
                                    return e ? {
                                        value: s(t),
                                        done: e
                                    } : {
                                        value: r ? [t[0], s(t[1])] : s(t),
                                        done: e
                                    }
                                },
                                [Symbol.iterator]() {
                                    return this
                                }
                            }
                        },
                        i = t => function(...e) {
                            return this.__r_raw[t](...e)
                        },
                        a = {
                            get size() {
                                return this.__r_raw.size
                            },
                            get(t) {
                                const e = this.__r_raw;
                                if (e.has(t)) return s(e.get(t))
                            },
                            forEach(t, e) {
                                const n = this.__r_raw;
                                return n.forEach(((r, o) => (r = s(r), t.call(e, r, p(n) ? o : r, n))))
                            }
                        };
                    ["has", "add", "set", "delete", "clear"].forEach((t => {
                        a[t] = i(t)
                    })), ["keys", "values", "entries", Symbol.iterator].forEach((t => {
                        a[t] = o(t)
                    }));
                    const u = {
                            get: (t, e, n) => "__r_raw" === e ? t : Reflect.get(c(a, e) && e in t ? a : t, e, n)
                        },
                        l = {
                            get: (t, e, n) => s(Reflect.get(t, e, n))
                        };
                    return r(t)
                }(t, e);
                if (C(t)) {
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
                        s = r.snapshots,
                        o = [t.__r_state];
                    for (; o.length;) {
                        const t = o.pop();
                        let e;
                        t.modified ? (e = w(t.copy), Rt(t, e), s.delete(t.proxy)) : e = It(t.base, r), n.set(t, e);
                        for (const n of t.children) o.push(n)
                    }
                    return r
                }(e, n);
                return It(t, r)
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
            const Nt = i({
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
                        views: s,
                        accessCache: o,
                        ctx: i
                    } = e;
                    let a;
                    if (a = t ? e.getState() : e.stateValue, "$" !== n[0]) {
                        const t = o[n];
                        if (void 0 !== t) switch (t) {
                            case 0:
                                return a[n];
                            case 2:
                                return s[n];
                            case 1:
                                return r[n];
                            case 3:
                                return i[n]
                        } else {
                            if (c(a, n)) return o[n] = 0, a[n];
                            if (c(i, n)) return o[n] = 3, i[n]
                        }
                    }
                    const u = Nt[n];
                    return u ? u(e) : c(i, n) ? (o[n] = 3, i[n]) : void((t => "_" === t || "$" === t)(n[0]) && c(a, n) && O(`Property ${JSON.stringify(n)} must be accessed via $state because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`))
                },
                Mt = ({
                    _: t
                }, e, n) => {
                    const {
                        ctx: r,
                        actions: s,
                        views: o,
                        accessContext: i,
                        stateRef: {
                            value: a
                        }
                    } = t;
                    return c(a, e) ? 1 !== i && (a[e] = n, !0) : !c(s, e) && (!c(o, e) && ("$state" === e ? "bigint" !== typeof n && "symbol" !== typeof n && (t.replace(n), !0) : ("$" !== e[0] || !c(Nt, e)) && (r[e] = n, !0)))
                },
                Ht = {
                    get: Lt(!1),
                    set: Mt
                },
                Ut = {
                    get: Lt(!0),
                    set: Mt
                };

            function $t(t, e, ...n) {
                console.error(t)
            }
            let Vt = !1,
                Ft = !1;
            const qt = [];
            let Bt = 0;
            const Gt = [];
            let Yt = null,
                zt = 0;
            const Wt = [];
            let Kt = null,
                Jt = 0;
            const Xt = Promise.resolve();
            let Zt = null,
                Qt = null;

            function te(t) {
                qt.length && qt.includes(t, Vt && t.allowRecurse ? Bt + 1 : Bt) || t === Qt || (null == t.id ? qt.push(t) : qt.splice(function(t) {
                    let e = Bt + 1,
                        n = qt.length;
                    for (; e < n;) {
                        const r = e + n >>> 1;
                        re(qt[r]) < t ? e = r + 1 : n = r
                    }
                    return e
                }(t.id), 0, t), Vt || Ft || (Ft = !0, Zt = Xt.then(se)))
            }

            function ee(t) {
                const e = qt.indexOf(t);
                e >= Bt && qt.splice(e, 1)
            }

            function ne(t, e = null) {
                if (Gt.length) {
                    for (Qt = e, Yt = [...new Set(Gt)], Gt.length = 0, zt = 0; zt < Yt.length; zt++) Yt[zt]();
                    Yt = null, zt = 0, Qt = null, ne(t, e)
                }
            }
            const re = t => null == t.id ? 1 / 0 : t.id;

            function se(t) {
                Ft = !1, Vt = !0, ne(t), qt.sort(((t, e) => re(t) - re(e)));
                try {
                    for (Bt = 0; Bt < qt.length; Bt++) {
                        const t = qt[Bt];
                        if (t && !1 !== t.active) {
                            0;
                            try {
                                t()
                            } catch (e) {
                                $t(e)
                            }
                        }
                    }
                } finally {
                    Bt = 0, qt.length = 0,
                        function(t) {
                            if (ne(), Wt.length) {
                                const t = [...new Set(Wt)];
                                if (Wt.length = 0, Kt) return void Kt.push(...t);
                                for (Kt = t, Kt.sort(((t, e) => re(t) - re(e))), Jt = 0; Jt < Kt.length; Jt++) Kt[Jt]();
                                Kt = null, Jt = 0
                            }
                        }(), Vt = !1, Zt = null, (qt.length || Gt.length || Wt.length) && se(t)
                }
            }
            var oe;

            function ie(t, e) {
                const n = Object.keys(e);
                n.length && n.forEach((n => {
                    c(t, n) && _(e[n]) ? ie(t[n], e[n]) : t[n] = e[n]
                }))
            }

            function ae(t) {
                t.dirty = !0
            }! function(t) {
                t.REPLACE = "replace", t.MODIFY = "modify", t.PATCH = "patch"
            }(oe || (oe = {}));
            class ce {
                constructor(t, {
                    name: e,
                    initState: n
                }) {
                    var s;
                    this.viewInstances = [], this._actionDepth = 0, this._api = null, this._actionListeners = new Set, this._subscribers = new Set, this._depListenersHandlers = [], this._watchStateChange = !0, this._destroyed = !1, this._lastDraftToSnapshot = new Map, this.patch = this.patch.bind(this), this.onAction = this.onAction.bind(this), this.subscribe = this.subscribe.bind(this), this.isolate = this.isolate.bind(this), this.getApi = this.getApi.bind(this), this._update = this._update.bind(this), this.options = t, this.name = e || "", this._isDispatching = !1, this._initState = n || t.state, this.stateRef = Pt({
                        value: this._initState
                    }), this._update.__name = e, this._draftListenerHandler = function(t, e) {
                        const n = t.__r_state;
                        return n.disposed ? r : (n.listeners.push(e), () => {
                            const t = n.listeners.indexOf(e);
                            t >= 0 && n.listeners.splice(t, 1)
                        })
                    }(this.stateRef, (() => {
                        this._watchStateChange && te(this._update)
                    })), this._setState(this._initState), this.actions = Object.create(null), this.views = Object.create(null), this.accessContext = 0, this.ctx = {}, v(this.ctx, "_", this), this.accessCache = Object.create(null), this.proxy = new Proxy(this.ctx, Ht), this.publicInst = new Proxy(this.ctx, Ut), this.effectScope = new D(s), this._initActions(), this._initViews()
                }
                patch(t) {
                    _(t) && this._currentState && (this._watchStateChange = !1, ie(this.proxy.$state, t), this._watchStateChange = !0, this.dispatch({
                        type: oe.PATCH,
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
                            type: oe.REPLACE,
                            payload: t
                        })
                    } else O(`replace argument should be an object, but receive a ${Object.prototype.toString.call(t)}`)
                }
                getState() {
                    return this._currentState
                }
                getApi() {
                    if (null === this._api) {
                        const t = this._api = Object.assign(Object.assign({}, this._currentState), this.views);
                        for (const e of Object.keys(this.actions)) v(t, e, this.actions[e])
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
                    J();
                    const e = t(this.stateValue);
                    return X(), e
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
                            return new ot(t, e)
                        }((() => {
                            const n = this.accessContext;
                            this.accessContext = 1;
                            const r = e.__externalArgs;
                            try {
                                return t.call(this.proxy, this.proxy, ...r || o)
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
                        case oe.MODIFY:
                        case oe.PATCH:
                            {
                                const t = new Map(this._lastDraftToSnapshot);
                                return this._lastDraftToSnapshot = t,
                                Tt(this.stateRef.value, this.stateRef.value, this._lastDraftToSnapshot)
                            }
                        case oe.REPLACE:
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
                        type: oe.MODIFY
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
                                s = this.createView(n),
                                o = s;
                            0;
                            const i = r ? () => (...t) => {
                                const e = o.__externalArgs;
                                if (e) {
                                    if (e.length !== t.length) ae(s);
                                    else
                                        for (let n = 0; n < e.length; n++)
                                            if (e[n] !== t[n]) {
                                                ae(s);
                                                break
                                            }
                                } else ae(s);
                                return o.__externalArgs = t, s.getSnapshot()
                            } : s.getSnapshot;
                            Object.defineProperty(this.views, e, {
                                configurable: !0,
                                enumerable: !0,
                                get: i,
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
            class pe {
                constructor(t = s, e = []) {
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
                            s = this._createModelProxy();
                        try {
                            he({
                                manager: this,
                                model: s
                            }), r = this._initModel({
                                name: t,
                                model: e()
                            })
                        } finally {
                            he(n)
                        }
                        s.setModel(r)
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
                    })), this._models.clear(), this._subscribers.clear(), this._initialState = s
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

            function fe({
                initialState: t,
                plugins: e = []
            } = {}) {
                return function({
                    initialState: t,
                    plugins: e
                } = {}) {
                    return new pe(t, e)
                }({
                    initialState: t,
                    plugins: e
                })
            }
        }
    }
]);
//# debugId=63d3f4fc-65f9-58cc-b06e-d4a6da25c3c7