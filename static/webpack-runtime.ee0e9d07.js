! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "7d952bb1-2318-5861-8995-f873c73bdbdf")
    } catch (e) {}
}();
(() => {
    "use strict";
    var e = {},
        t = {};

    function r(n) {
        var o = t[n];
        if (void 0 !== o) return o.exports;
        var a = t[n] = {
                id: n,
                loaded: !1,
                exports: {}
            },
            i = !0;
        try {
            e[n].call(a.exports, a, a.exports, r), i = !1
        } finally {
            i && delete t[n]
        }
        return a.loaded = !0, a.exports
    }
    r.m = e, r.amdO = {}, (() => {
            var e = [];
            r.O = (t, n, o, a) => {
                if (!n) {
                    var i = 1 / 0;
                    for (s = 0; s < e.length; s++) {
                        for (var [n, o, a] = e[s], l = !0, d = 0; d < n.length; d++)(!1 & a || i >= a) && Object.keys(r.O).every((e => r.O[e](n[d]))) ? n.splice(d--, 1) : (l = !1, a < i && (i = a));
                        if (l) {
                            e.splice(s--, 1);
                            var u = o();
                            void 0 !== u && (t = u)
                        }
                    }
                    return t
                }
                a = a || 0;
                for (var s = e.length; s > 0 && e[s - 1][2] > a; s--) e[s] = e[s - 1];
                e[s] = [n, o, a]
            }
        })(), r.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, {
                a: t
            }), t
        }, (() => {
            var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
            r.t = function(n, o) {
                if (1 & o && (n = this(n)), 8 & o) return n;
                if ("object" === typeof n && n) {
                    if (4 & o && n.__esModule) return n;
                    if (16 & o && "function" === typeof n.then) return n
                }
                var a = Object.create(null);
                r.r(a);
                var i = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var l = 2 & o && n;
                    "object" == typeof l && !~e.indexOf(l); l = t(l)) Object.getOwnPropertyNames(l).forEach((e => i[e] = () => n[e]));
                return i.default = () => n, r.d(a, i), a
            }
        })(), r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce(((t, n) => (r.f[n](e, t), t)), [])), r.u = e => 596 === e ? "static/common/2edb282b.3a68b2be.js" : "static/chunks/" + {
            136: "page-8e28",
            150: "layout-8ea2",
            317: "dynamic-fingerprint",
            428: "dynamic-common-widgets",
            625: "loaders",
            766: "dynamic-com-widgets",
            848: "dynamic-analytics-web-vitals"
        }[e] + "." + {
            136: "2ee0ed6c",
            150: "bf00a138",
            317: "59f13125",
            428: "14181a0b",
            625: "685e77e3",
            766: "b7e41822",
            848: "7f5ba5ae"
        }[e] + ".js", r.miniCssF = e => "static/css/b77cb6ed.chunk.css", r.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
            var e = {},
                t = "template-ui:";
            r.l = (n, o, a, i) => {
                if (e[n]) e[n].push(o);
                else {
                    var l, d;
                    if (void 0 !== a)
                        for (var u = document.getElementsByTagName("script"), s = 0; s < u.length; s++) {
                            var f = u[s];
                            if (f.getAttribute("src") == n || f.getAttribute("data-webpack") == t + a) {
                                l = f;
                                break
                            }
                        }
                    l || (d = !0, (l = document.createElement("script")).charset = "utf-8", l.timeout = 120, r.nc && l.setAttribute("nonce", r.nc), l.setAttribute("data-webpack", t + a), l.src = n), e[n] = [o];
                    var c = (t, r) => {
                            l.onerror = l.onload = null, clearTimeout(p);
                            var o = e[n];
                            if (delete e[n], l.parentNode && l.parentNode.removeChild(l), o && o.forEach((e => e(r))), t) return t(r)
                        },
                        p = setTimeout(c.bind(null, void 0, {
                            type: "timeout",
                            target: l
                        }), 12e4);
                    l.onerror = c.bind(null, l.onerror), l.onload = c.bind(null, l.onload), d && document.head.appendChild(l)
                }
            }
        })(), r.r = e => {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), r.p = "https://static.devfdg.net/",
        function() {
            var e = function() {
                if ("undefined" !== typeof globalThis) return globalThis;
                if ("undefined" !== typeof self) return self;
                if ("undefined" !== typeof window) return window;
                if ("undefined" !== typeof global) return global;
                if ("undefined" !== typeof this) return this;
                throw new Error("Unable to locate global `this`")
            }();
            e.__template_ui_dynamic_public_path__ && (r.p = e.__template_ui_dynamic_public_path__)
        }(), (() => {
            var e = e => new Promise(((t, n) => {
                    var o = r.miniCssF(e),
                        a = r.p + o;
                    if (((e, t) => {
                            for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                                var o = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (o === e || o === t)) return i
                            }
                            var a = document.getElementsByTagName("style");
                            for (n = 0; n < a.length; n++) {
                                var i;
                                if ((o = (i = a[n]).getAttribute("data-href")) === e || o === t) return i
                            }
                        })(o, a)) return t();
                    ((e, t, r, n) => {
                        var o = document.createElement("link");
                        o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = a => {
                            if (o.onerror = o.onload = null, "load" === a.type) r();
                            else {
                                var i = a && ("load" === a.type ? "missing" : a.type),
                                    l = a && a.target && a.target.href || t,
                                    d = new Error("Loading CSS chunk " + e + " failed.\n(" + l + ")");
                                d.code = "CSS_CHUNK_LOAD_FAILED", d.type = i, d.request = l, o.parentNode.removeChild(o), n(d)
                            }
                        }, o.href = t, document.head.appendChild(o)
                    })(e, a, t, n)
                })),
                t = {
                    182: 0
                };
            r.f.miniCss = (r, n) => {
                t[r] ? n.push(t[r]) : 0 !== t[r] && {
                    150: 1
                }[r] && n.push(t[r] = e(r).then((() => {
                    t[r] = 0
                }), (e => {
                    throw delete t[r], e
                })))
            }
        })(), (() => {
            var e = {
                182: 0
            };
            r.f.j = (t, n) => {
                var o = r.o(e, t) ? e[t] : void 0;
                if (0 !== o)
                    if (o) n.push(o[2]);
                    else if (182 != t) {
                    var a = new Promise(((r, n) => o = e[t] = [r, n]));
                    n.push(o[2] = a);
                    var i = r.p + r.u(t),
                        l = new Error;
                    r.l(i, (n => {
                        if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                            var a = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            l.message = "Loading chunk " + t + " failed.\n(" + a + ": " + i + ")", l.name = "ChunkLoadError", l.type = a, l.request = i, o[1](l)
                        }
                    }), "chunk-" + t, t)
                } else e[t] = 0
            }, r.O.j = t => 0 === e[t];
            var t = (t, n) => {
                    var o, a, [i, l, d] = n,
                        u = 0;
                    if (i.some((t => 0 !== e[t]))) {
                        for (o in l) r.o(l, o) && (r.m[o] = l[o]);
                        if (d) var s = d(r)
                    }
                    for (t && t(n); u < i.length; u++) a = i[u], r.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                    return r.O(s)
                },
                n = self.webpackChunktemplate_ui = self.webpackChunktemplate_ui || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        })()
})();
//# debugId=7d952bb1-2318-5861-8995-f873c73bdbdf