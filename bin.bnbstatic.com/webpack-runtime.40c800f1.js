! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "c2a3737d-cc14-5320-b6b8-32fe8e1dfaf4")
    } catch (e) {}
}();
(() => {
    "use strict";
    var e = {},
        t = {};

    function r(a) {
        var o = t[a];
        if (void 0 !== o) return o.exports;
        var n = t[a] = {
                id: a,
                loaded: !1,
                exports: {}
            },
            i = !0;
        try {
            e[a].call(n.exports, n, n.exports, r), i = !1
        } finally {
            i && delete t[a]
        }
        return n.loaded = !0, n.exports
    }
    r.m = e, r.amdO = {}, (() => {
            var e = [];
            r.O = (t, a, o, n) => {
                if (!a) {
                    var i = 1 / 0;
                    for (d = 0; d < e.length; d++) {
                        for (var [a, o, n] = e[d], c = !0, s = 0; s < a.length; s++)(!1 & n || i >= n) && Object.keys(r.O).every((e => r.O[e](a[s]))) ? a.splice(s--, 1) : (c = !1, n < i && (i = n));
                        if (c) {
                            e.splice(d--, 1);
                            var f = o();
                            void 0 !== f && (t = f)
                        }
                    }
                    return t
                }
                n = n || 0;
                for (var d = e.length; d > 0 && e[d - 1][2] > n; d--) e[d] = e[d - 1];
                e[d] = [a, o, n]
            }
        })(), r.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return r.d(t, {
                a: t
            }), t
        }, (() => {
            var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
            r.t = function(a, o) {
                if (1 & o && (a = this(a)), 8 & o) return a;
                if ("object" === typeof a && a) {
                    if (4 & o && a.__esModule) return a;
                    if (16 & o && "function" === typeof a.then) return a
                }
                var n = Object.create(null);
                r.r(n);
                var i = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var c = 2 & o && a;
                    "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => i[e] = () => a[e]));
                return i.default = () => a, r.d(n, i), n
            }
        })(), r.d = (e, t) => {
            for (var a in t) r.o(t, a) && !r.o(e, a) && Object.defineProperty(e, a, {
                enumerable: !0,
                get: t[a]
            })
        }, r.f = {}, r.e = e => Promise.all(Object.keys(r.f).reduce(((t, a) => (r.f[a](e, t), t)), [])), r.u = e => 596 === e ? "static/common/2edb282b.505bd6bf.js" : 87 === e ? "static/common/b825f81d.8de4a8b4.js" : 638 === e ? "static/common/9cf31564.027425e0.js" : 175 === e ? "static/common/0db827c2.50166832.js" : 914 === e ? "static/common/b429bcfc.7ab62256.js" : 165 === e ? "static/common/b45faa25.964d44ce.js" : 26 === e ? "static/common/1091dabc.547e10b4.js" : 650 === e ? "static/common/2615e1eb.4fdb4034.js" : 547 === e ? "static/common/a29ae703.b71af2dc.js" : 465 === e ? "static/common/e6f309f5.ed722ba4.js" : 558 === e ? "static/common/863191ef.dfe7838a.js" : 777 === e ? "static/common/428e16d4.183893f4.js" : 346 === e ? "static/common/43917f72.d889575a.js" : 691 === e ? "static/common/5b5bfecb.10ec6ca4.js" : 376 === e ? "static/common/ee7bdd82.6f248518.js" : 676 === e ? "static/common/e32a1421.30f7f954.js" : 615 === e ? "static/common/8a128602.c11bc514.js" : 861 === e ? "static/common/9c4220c3.45e6cc3f.js" : 153 === e ? "static/common/5869a108.9c096fcb.js" : 639 === e ? "static/common/f54b4298.44201ca5.js" : "static/chunks/" + ({
            55: "page-3d38",
            97: "dynamic-bids-interceptor",
            140: "page-fe8d",
            242: "page-34b1",
            295: "page-1e64",
            317: "dynamic-fingerprint",
            339: "page-528e",
            491: "page-aff7",
            560: "page-4087",
            625: "loaders",
            641: "page-b3d7",
            687: "layout-6bf7",
            804: "page-85f8",
            848: "dynamic-analytics-web-vitals",
            951: "page-ad25",
            995: "uikitComponents"
        }[e] || e) + "." + {
            55: "cffdc53b",
            97: "09376679",
            140: "e0b5ab6b",
            242: "6f37f6a5",
            295: "72b33d81",
            306: "17d2d44b",
            317: "80bc2c31",
            339: "d0c633fd",
            425: "60f278bd",
            491: "d237940c",
            560: "e2aaec3c",
            620: "79ca677c",
            625: "448580a9",
            641: "b2625603",
            678: "32ee234d",
            687: "2c77f7ed",
            733: "0499abf7",
            804: "b733230f",
            821: "ffb3b335",
            848: "9010263b",
            951: "cb2dfcd8",
            995: "a8c66b52"
        }[e] + ".js", r.miniCssF = e => 977 === e ? "static/css/9f6e01bc.essential.css" : "static/css/" + {
            687: "efcc2f32",
            995: "35a4479f"
        }[e] + ".chunk.css", r.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), r.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
            var e = {},
                t = "markets-ui:";
            r.l = (a, o, n, i) => {
                if (e[a]) e[a].push(o);
                else {
                    var c, s;
                    if (void 0 !== n)
                        for (var f = document.getElementsByTagName("script"), d = 0; d < f.length; d++) {
                            var l = f[d];
                            if (l.getAttribute("src") == a || l.getAttribute("data-webpack") == t + n) {
                                c = l;
                                break
                            }
                        }
                    c || (s = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, r.nc && c.setAttribute("nonce", r.nc), c.setAttribute("data-webpack", t + n), c.src = a), e[a] = [o];
                    var u = (t, r) => {
                            c.onerror = c.onload = null, clearTimeout(b);
                            var o = e[a];
                            if (delete e[a], c.parentNode && c.parentNode.removeChild(c), o && o.forEach((e => e(r))), t) return t(r)
                        },
                        b = setTimeout(u.bind(null, void 0, {
                            type: "timeout",
                            target: c
                        }), 12e4);
                    c.onerror = u.bind(null, c.onerror), c.onload = u.bind(null, c.onload), s && document.head.appendChild(c)
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
            e.__markets_ui_dynamic_public_path__ && (r.p = e.__markets_ui_dynamic_public_path__)
        }(), (() => {
            var e = e => new Promise(((t, a) => {
                    var o = r.miniCssF(e),
                        n = r.p + o;
                    if (((e, t) => {
                            for (var r = document.getElementsByTagName("link"), a = 0; a < r.length; a++) {
                                var o = (i = r[a]).getAttribute("data-href") || i.getAttribute("href");
                                if ("stylesheet" === i.rel && (o === e || o === t)) return i
                            }
                            var n = document.getElementsByTagName("style");
                            for (a = 0; a < n.length; a++) {
                                var i;
                                if ((o = (i = n[a]).getAttribute("data-href")) === e || o === t) return i
                            }
                        })(o, n)) return t();
                    ((e, t, r, a) => {
                        var o = document.createElement("link");
                        o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = n => {
                            if (o.onerror = o.onload = null, "load" === n.type) r();
                            else {
                                var i = n && ("load" === n.type ? "missing" : n.type),
                                    c = n && n.target && n.target.href || t,
                                    s = new Error("Loading CSS chunk " + e + " failed.\n(" + c + ")");
                                s.code = "CSS_CHUNK_LOAD_FAILED", s.type = i, s.request = c, o.parentNode.removeChild(o), a(s)
                            }
                        }, o.href = t, document.head.appendChild(o)
                    })(e, n, t, a)
                })),
                t = {
                    182: 0
                };
            r.f.miniCss = (r, a) => {
                t[r] ? a.push(t[r]) : 0 !== t[r] && {
                    687: 1,
                    995: 1
                }[r] && a.push(t[r] = e(r).then((() => {
                    t[r] = 0
                }), (e => {
                    throw delete t[r], e
                })))
            }
        })(), (() => {
            var e = {
                182: 0,
                977: 0
            };
            r.f.j = (t, a) => {
                var o = r.o(e, t) ? e[t] : void 0;
                if (0 !== o)
                    if (o) a.push(o[2]);
                    else if (/^(182|977|995)$/.test(t)) e[t] = 0;
                else {
                    var n = new Promise(((r, a) => o = e[t] = [r, a]));
                    a.push(o[2] = n);
                    var i = r.p + r.u(t),
                        c = new Error;
                    r.l(i, (a => {
                        if (r.o(e, t) && (0 !== (o = e[t]) && (e[t] = void 0), o)) {
                            var n = a && ("load" === a.type ? "missing" : a.type),
                                i = a && a.target && a.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + n + ": " + i + ")", c.name = "ChunkLoadError", c.type = n, c.request = i, o[1](c)
                        }
                    }), "chunk-" + t, t)
                }
            }, r.O.j = t => 0 === e[t];
            var t = (t, a) => {
                    var o, n, [i, c, s] = a,
                        f = 0;
                    if (i.some((t => 0 !== e[t]))) {
                        for (o in c) r.o(c, o) && (r.m[o] = c[o]);
                        if (s) var d = s(r)
                    }
                    for (t && t(a); f < i.length; f++) n = i[f], r.o(e, n) && e[n] && e[n][0](), e[n] = 0;
                    return r.O(d)
                },
                a = self.webpackChunkmarkets_ui = self.webpackChunkmarkets_ui || [];
            a.forEach(t.bind(null, 0)), a.push = t.bind(null, a.push.bind(a))
        })()
})();
//# debugId=c2a3737d-cc14-5320-b6b8-32fe8e1dfaf4