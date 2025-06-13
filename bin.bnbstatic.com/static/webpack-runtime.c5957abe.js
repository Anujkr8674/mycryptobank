! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "333601c6-a828-588a-b1f5-bef8dde41520")
    } catch (e) {}
}();
(() => {
    "use strict";
    var e = {},
        t = {};

    function r(n) {
        var a = t[n];
        if (void 0 !== a) return a.exports;
        var o = t[n] = {
                id: n,
                loaded: !1,
                exports: {}
            },
            i = !0;
        try {
            e[n].call(o.exports, o, o.exports, r), i = !1
        } finally {
            i && delete t[n]
        }
        return o.loaded = !0, o.exports
    }
    r.m = e, r.amdO = {}, (() => {
            var e = [];
            r.O = (t, n, a, o) => {
                if (!n) {
                    var i = 1 / 0;
                    for (d = 0; d < e.length; d++) {
                        for (var [n, a, o] = e[d], c = !0, l = 0; l < n.length; l++)(!1 & o || i >= o) && Object.keys(r.O).every((e => r.O[e](n[l]))) ? n.splice(l--, 1) : (c = !1, o < i && (i = o));
                        if (c) {
                            e.splice(d--, 1);
                            var s = a();
                            void 0 !== s && (t = s)
                        }
                    }
                    return t
                }
                o = o || 0;
                for (var d = e.length; d > 0 && e[d - 1][2] > o; d--) e[d] = e[d - 1];
                e[d] = [n, a, o]
            }
        })(), r.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, {
                a: t
            }), t
        }, (() => {
            var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
            r.t = function(n, a) {
                if (1 & a && (n = this(n)), 8 & a) return n;
                if ("object" === typeof n && n) {
                    if (4 & a && n.__esModule) return n;
                    if (16 & a && "function" === typeof n.then) return n
                }
                var o = Object.create(null);
                r.r(o);
                var i = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var c = 2 & a && n;
                    "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => i[e] = () => n[e]));
                return i.default = () => n, r.d(o, i), o
            }
        })(), r.d = (e, t) => {
            for (var n in t) r.o(t, n) && !r.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce(((t, n) => (r.f[n](e, t), t)), [])), r.u = e => 797 === e ? "static/common/c2a217f2.d6a3a601.js" : 331 === e ? "static/common/6193cbac.4bf6c9fe.js" : 596 === e ? "static/common/2edb282b.37c76bd6.js" : 447 === e ? "static/common/8f49bc86.bf26389e.js" : 547 === e ? "static/common/a29ae703.9c236456.js" : 685 === e ? "static/common/4077c44a.598c7c89.js" : 41 === e ? "static/common/648afdf9.75684467.js" : "static/chunks/" + {
            104: "page-84c2",
            317: "dynamic-fingerprint",
            424: "page-5a12",
            428: "dynamic-common-widgets",
            515: "page-7971",
            528: "page-f9ec",
            579: "page-5894",
            625: "loaders",
            637: "layout-05c7",
            766: "dynamic-com-widgets",
            848: "dynamic-analytics-web-vitals",
            907: "page-2cfc"
        }[e] + "." + {
            104: "faf30ad3",
            317: "6f474fb5",
            424: "90b03004",
            428: "9f6595ce",
            515: "10ebb2e4",
            528: "967399a8",
            579: "5b235323",
            625: "f06799c3",
            637: "81563dbe",
            766: "ba02c13e",
            848: "a21dc718",
            907: "178df220"
        }[e] + ".js", r.miniCssF = e => "static/css/" + {
            637: "efbf42db",
            797: "0d33cc54"
        }[e] + ".chunk.css", r.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
            var e = {},
                t = "research-new-ui:";
            r.l = (n, a, o, i) => {
                if (e[n]) e[n].push(a);
                else {
                    var c, l;
                    if (void 0 !== o)
                        for (var s = document.getElementsByTagName("script"), d = 0; d < s.length; d++) {
                            var f = s[d];
                            if (f.getAttribute("src") == n || f.getAttribute("data-webpack") == t + o) {
                                c = f;
                                break
                            }
                        }
                    c || (l = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, r.nc && c.setAttribute("nonce", r.nc), c.setAttribute("data-webpack", t + o), c.src = n), e[n] = [a];
                    var u = (t, r) => {
                            c.onerror = c.onload = null, clearTimeout(p);
                            var a = e[n];
                            if (delete e[n], c.parentNode && c.parentNode.removeChild(c), a && a.forEach((e => e(r))), t) return t(r)
                        },
                        p = setTimeout(u.bind(null, void 0, {
                            type: "timeout",
                            target: c
                        }), 12e4);
                    c.onerror = u.bind(null, c.onerror), c.onload = u.bind(null, c.onload), l && document.head.appendChild(c)
                }
            }
        })(), r.r = e => {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, r.nmd = e => (e.paths = [], e.children || (e.children = []), e), r.p = "/",
        function() {
            var e = function() {
                if ("undefined" !== typeof globalThis) return globalThis;
                if ("undefined" !== typeof self) return self;
                if ("undefined" !== typeof window) return window;
                if ("undefined" !== typeof global) return global;
                if ("undefined" !== typeof this) return this;
                throw new Error("Unable to locate global `this`")
            }();
            e.__research_new_ui_dynamic_public_path__ && (r.p = e.__research_new_ui_dynamic_public_path__)
        }(), (() => {
            var e = e => new Promise(((t, n) => {
                    var a = r.miniCssF(e),
                        o = r.p + a;
                    if (((e, t) => {
                            for (var r = document.getElementsByTagName("link"), n = 0; n < r.length; n++) {
                                var a = (i = r[n]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (a === e || a === t)) return i
                            }
                            var o = document.getElementsByTagName("style");
                            for (n = 0; n < o.length; n++) {
                                var i;
                                if ((a = (i = o[n]).getAttribute("data-href")) === e || a === t) return i
                            }
                        })(a, o)) return t();
                    ((e, t, r, n) => {
                        var a = document.createElement("link");
                        a.rel = "stylesheet", a.type = "text/css", a.onerror = a.onload = o => {
                            if (a.onerror = a.onload = null, "load" === o.type) r();
                            else {
                                var i = o && ("load" === o.type ? "missing" : o.type),
                                    c = o && o.target && o.target.href || t,
                                    l = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                                l.code = "CSS_CHUNK_LOAD_FAILED", l.type = i, l.request = c, a.parentNode.removeChild(a), n(l)
                            }
                        }, a.href = t, document.head.appendChild(a)
                    })(e, o, t, n)
                })),
                t = {
                    182: 0
                };
            r.f.miniCss = (r, n) => {
                t[r] ? n.push(t[r]) : 0 !== t[r] && {
                    637: 1,
                    797: 1
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
                var a = r.o(e, t) ? e[t] : void 0;
                if (0 !== a)
                    if (a) n.push(a[2]);
                    else if (/^(182|797)$/.test(t)) e[t] = 0;
                else {
                    var o = new Promise(((r, n) => a = e[t] = [r, n]));
                    n.push(a[2] = o);
                    var i = r.p + r.u(t),
                        c = new Error;
                    r.l(i, (n => {
                        if (r.o(e, t) && (0 !== (a = e[t]) && (e[t] = void 0), a)) {
                            var o = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", c.name = "ChunkLoadError", c.type = o, c.request = i, a[1](c)
                        }
                    }), "chunk-" + t, t)
                }
            }, r.O.j = t => 0 === e[t];
            var t = (t, n) => {
                    var a, o, [i, c, l] = n,
                        s = 0;
                    if (i.some((t => 0 !== e[t]))) {
                        for (a in c) r.o(c, a) && (r.m[a] = c[a]);
                        if (l) var d = l(r)
                    }
                    for (t && t(n); s < i.length; s++) o = i[s], r.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                    return r.O(d)
                },
                n = self.webpackChunkresearch_new_ui = self.webpackChunkresearch_new_ui || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        })()
})();
//# debugId=333601c6-a828-588a-b1f5-bef8dde41520