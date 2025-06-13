! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "72eb921b-8782-544e-8380-65226cc5588e")
    } catch (e) {}
}();
(() => {
    "use strict";
    var e = {},
        t = {};

    function a(r) {
        var n = t[r];
        if (void 0 !== n) return n.exports;
        var o = t[r] = {
                id: r,
                loaded: !1,
                exports: {}
            },
            c = !0;
        try {
            e[r].call(o.exports, o, o.exports, a), c = !1
        } finally {
            c && delete t[r]
        }
        return o.loaded = !0, o.exports
    }
    a.m = e, a.amdO = {}, (() => {
            var e = [];
            a.O = (t, r, n, o) => {
                if (!r) {
                    var c = 1 / 0;
                    for (s = 0; s < e.length; s++) {
                        for (var [r, n, o] = e[s], i = !0, d = 0; d < r.length; d++)(!1 & o || c >= o) && Object.keys(a.O).every((e => a.O[e](r[d]))) ? r.splice(d--, 1) : (i = !1, o < c && (c = o));
                        if (i) {
                            e.splice(s--, 1);
                            var f = n();
                            void 0 !== f && (t = f)
                        }
                    }
                    return t
                }
                o = o || 0;
                for (var s = e.length; s > 0 && e[s - 1][2] > o; s--) e[s] = e[s - 1];
                e[s] = [r, n, o]
            }
        })(), a.n = e => {
            var t = e && e.__esModule ? () => e.default : () => e;
            return a.d(t, {
                a: t
            }), t
        }, (() => {
            var e, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
            a.t = function(r, n) {
                if (1 & n && (r = this(r)), 8 & n) return r;
                if ("object" === typeof r && r) {
                    if (4 & n && r.__esModule) return r;
                    if (16 & n && "function" === typeof r.then) return r
                }
                var o = Object.create(null);
                a.r(o);
                var c = {};
                e = e || [null, t({}), t([]), t(t)];
                for (var i = 2 & n && r;
                    "object" == typeof i && !~e.indexOf(i); i = t(i)) Object.getOwnPropertyNames(i).forEach((e => c[e] = () => r[e]));
                return c.default = () => r, a.d(o, c), o
            }
        })(), a.d = (e, t) => {
            for (var r in t) a.o(t, r) && !a.o(e, r) && Object.defineProperty(e, r, {
                enumerable: !0,
                get: t[r]
            })
        }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce(((t, r) => (a.f[r](e, t), t)), [])), a.u = e => 5165 === e ? "static/common/94a7ad86.741f8210.js" : 2726 === e ? "static/common/b56a8113.a7d19593.js" : 1797 === e ? "static/common/1b7a3e83.a3509330.js" : 9567 === e ? "static/common/19c38fb4.5d4078c2.js" : 7547 === e ? "static/common/a29ae703.29091209.js" : 4880 === e ? "static/common/f6a85b30.6fb043c7.js" : 4300 === e ? "static/common/7d96ca98.757b2871.js" : 5363 === e ? "static/common/8fc6832d.887c7688.js" : 4316 === e ? "static/common/bea0c121.f4bb4562.js" : 4716 === e ? "static/common/02724b2f.7ba12497.js" : 3113 === e ? "static/common/31d806dd.bbfbb6de.js" : 2052 === e ? "static/common/083b48c9.931d7544.js" : "static/chunks/" + ({
            428: "dynamic-common-widgets",
            1181: "page-16cf",
            2911: "page-c988",
            3074: "page-8881",
            3597: "page-f1ab",
            3696: "page-86e6",
            3766: "dynamic-com-widgets",
            4169: "page-e157",
            4271: "LazyRecentTransactions",
            4520: "page-fa3e",
            4712: "page-316a",
            5747: "LazyRecommendForYou",
            6367: "page-51a5",
            7485: "page-c476",
            7506: "page-1c45",
            8430: "layout-2370",
            8848: "dynamic-analytics-web-vitals",
            9285: "page-7528",
            9317: "dynamic-fingerprint",
            9336: "page-f474",
            9625: "loaders",
            9678: "page-19ed",
            9723: "page-648b"
        }[e] || e) + "." + {
            428: "5ea43e30",
            878: "89d3bae0",
            1181: "6db72640",
            2911: "5b46b700",
            3074: "ba547f43",
            3597: "9884e20c",
            3696: "4a67385c",
            3765: "d18622d6",
            3766: "527bdf24",
            3941: "1bea4832",
            4169: "843cff16",
            4271: "4ade98ed",
            4520: "df61f57c",
            4712: "0bdb5a61",
            5198: "458c8c3e",
            5461: "d458fa19",
            5747: "2242910c",
            6037: "01d5788e",
            6367: "622719b3",
            6434: "16ddc2b4",
            7485: "e02fa9a1",
            7506: "dde684e7",
            7683: "cdcdd15f",
            7778: "62697637",
            7921: "96bfc007",
            8430: "a1a2a214",
            8433: "8e8d784c",
            8848: "ff7207f5",
            9242: "05011327",
            9285: "d5794c3a",
            9317: "9e22de2d",
            9336: "e248b694",
            9340: "2358985a",
            9625: "0b39425e",
            9678: "9e927782",
            9693: "ca760db0",
            9723: "15471759",
            9724: "e6ce90a8"
        }[e] + ".js", a.miniCssF = e => "static/css/" + {
            1181: "a37627f9",
            2911: "871cf59b",
            3074: "b2588510",
            3597: "f7163e6e",
            3696: "aabebb21",
            4169: "2c46d7db",
            4520: "a37627f9",
            4712: "c2def243",
            4880: "a67625ec",
            5461: "6744ff07",
            6367: "d71ff603",
            7485: "2c46d7db",
            7683: "2c95954a",
            7921: "42fdc653",
            8430: "1f30e917",
            8433: "133bdc6b",
            9242: "42fdc653",
            9285: "871cf59b",
            9336: "89945b52",
            9678: "fcc3a577",
            9693: "2c95954a",
            9723: "5be9aaa6"
        }[e] + ".chunk.css", a.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), (() => {
            var e = {},
                t = "usercenter-wallet-ui:";
            a.l = (r, n, o, c) => {
                if (e[r]) e[r].push(n);
                else {
                    var i, d;
                    if (void 0 !== o)
                        for (var f = document.getElementsByTagName("script"), s = 0; s < f.length; s++) {
                            var l = f[s];
                            if (l.getAttribute("src") == r || l.getAttribute("data-webpack") == t + o) {
                                i = l;
                                break
                            }
                        }
                    i || (d = !0, (i = document.createElement("script")).charset = "utf-8", i.timeout = 120, a.nc && i.setAttribute("nonce", a.nc), i.setAttribute("data-webpack", t + o), i.src = r), e[r] = [n];
                    var u = (t, a) => {
                            i.onerror = i.onload = null, clearTimeout(b);
                            var n = e[r];
                            if (delete e[r], i.parentNode && i.parentNode.removeChild(i), n && n.forEach((e => e(a))), t) return t(a)
                        },
                        b = setTimeout(u.bind(null, void 0, {
                            type: "timeout",
                            target: i
                        }), 12e4);
                    i.onerror = u.bind(null, i.onerror), i.onload = u.bind(null, i.onload), d && document.head.appendChild(i)
                }
            }
        })(), a.r = e => {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), a.p = "https://static.devfdg.net/",
        function() {
            var e = function() {
                if ("undefined" !== typeof globalThis) return globalThis;
                if ("undefined" !== typeof self) return self;
                if ("undefined" !== typeof window) return window;
                if ("undefined" !== typeof global) return global;
                if ("undefined" !== typeof this) return this;
                throw new Error("Unable to locate global `this`")
            }();
            e.__usercenter_wallet_ui_dynamic_public_path__ && (a.p = e.__usercenter_wallet_ui_dynamic_public_path__)
        }(), (() => {
            var e = e => new Promise(((t, r) => {
                    var n = a.miniCssF(e),
                        o = a.p + n;
                    if (((e, t) => {
                            for (var a = document.getElementsByTagName("link"), r = 0; r < a.length; r++) {
                                var n = (c = a[r]).getAttribute("data-href") || c.getAttribute("href");
                                if ("stylesheet" === c.rel && (n === e || n === t)) return c
                            }
                            var o = document.getElementsByTagName("style");
                            for (r = 0; r < o.length; r++) {
                                var c;
                                if ((n = (c = o[r]).getAttribute("data-href")) === e || n === t) return c
                            }
                        })(n, o)) return t();
                    ((e, t, a, r) => {
                        var n = document.createElement("link");
                        n.rel = "stylesheet", n.type = "text/css", n.onerror = n.onload = o => {
                            if (n.onerror = n.onload = null, "load" === o.type) a();
                            else {
                                var c = o && ("load" === o.type ? "missing" : o.type),
                                    i = o && o.target && o.target.href || t,
                                    d = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                                d.code = "CSS_CHUNK_LOAD_FAILED", d.type = c, d.request = i, n.parentNode.removeChild(n), r(d)
                            }
                        }, n.href = t, document.head.appendChild(n)
                    })(e, o, t, r)
                })),
                t = {
                    4182: 0
                };
            a.f.miniCss = (a, r) => {
                t[a] ? r.push(t[a]) : 0 !== t[a] && {
                    1181: 1,
                    2911: 1,
                    3074: 1,
                    3597: 1,
                    3696: 1,
                    4169: 1,
                    4520: 1,
                    4712: 1,
                    4880: 1,
                    5461: 1,
                    6367: 1,
                    7485: 1,
                    7683: 1,
                    7921: 1,
                    8430: 1,
                    8433: 1,
                    9242: 1,
                    9285: 1,
                    9336: 1,
                    9678: 1,
                    9693: 1,
                    9723: 1
                }[a] && r.push(t[a] = e(a).then((() => {
                    t[a] = 0
                }), (e => {
                    throw delete t[a], e
                })))
            }
        })(), (() => {
            var e = {
                4182: 0
            };
            a.f.j = (t, r) => {
                var n = a.o(e, t) ? e[t] : void 0;
                if (0 !== n)
                    if (n) r.push(n[2]);
                    else if (/^4(182|880)$/.test(t)) e[t] = 0;
                else {
                    var o = new Promise(((a, r) => n = e[t] = [a, r]));
                    r.push(n[2] = o);
                    var c = a.p + a.u(t),
                        i = new Error;
                    a.l(c, (r => {
                        if (a.o(e, t) && (0 !== (n = e[t]) && (e[t] = void 0), n)) {
                            var o = r && ("load" === r.type ? "missing" : r.type),
                                c = r && r.target && r.target.src;
                            i.message = "Loading chunk " + t + " failed.\n(" + o + ": " + c + ")", i.name = "ChunkLoadError", i.type = o, i.request = c, n[1](i)
                        }
                    }), "chunk-" + t, t)
                }
            }, a.O.j = t => 0 === e[t];
            var t = (t, r) => {
                    var n, o, [c, i, d] = r,
                        f = 0;
                    if (c.some((t => 0 !== e[t]))) {
                        for (n in i) a.o(i, n) && (a.m[n] = i[n]);
                        if (d) var s = d(a)
                    }
                    for (t && t(r); f < c.length; f++) o = c[f], a.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                    return a.O(s)
                },
                r = self.webpackChunkusercenter_wallet_ui = self.webpackChunkusercenter_wallet_ui || [];
            r.forEach(t.bind(null, 0)), r.push = t.bind(null, r.push.bind(r))
        })()
})();
//# debugId=72eb921b-8782-544e-8380-65226cc5588e