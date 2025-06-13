! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d340a8a4-9707-5e4c-bd71-5c77c2a96be8")
    } catch (e) {}
}();
(() => {
    "use strict";
    var e = {},
        a = {};

    function t(d) {
        var r = a[d];
        if (void 0 !== r) return r.exports;
        var c = a[d] = {
                id: d,
                loaded: !1,
                exports: {}
            },
            f = !0;
        try {
            e[d].call(c.exports, c, c.exports, t), f = !1
        } finally {
            f && delete a[d]
        }
        return c.loaded = !0, c.exports
    }
    t.m = e, t.amdO = {}, (() => {
            var e = [];
            t.O = (a, d, r, c) => {
                if (!d) {
                    var f = 1 / 0;
                    for (i = 0; i < e.length; i++) {
                        for (var [d, r, c] = e[i], n = !0, o = 0; o < d.length; o++)(!1 & c || f >= c) && Object.keys(t.O).every((e => t.O[e](d[o]))) ? d.splice(o--, 1) : (n = !1, c < f && (f = c));
                        if (n) {
                            e.splice(i--, 1);
                            var b = r();
                            void 0 !== b && (a = b)
                        }
                    }
                    return a
                }
                c = c || 0;
                for (var i = e.length; i > 0 && e[i - 1][2] > c; i--) e[i] = e[i - 1];
                e[i] = [d, r, c]
            }
        })(), t.n = e => {
            var a = e && e.__esModule ? () => e.default : () => e;
            return t.d(a, {
                a: a
            }), a
        }, (() => {
            var e, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
            t.t = function(d, r) {
                if (1 & r && (d = this(d)), 8 & r) return d;
                if ("object" === typeof d && d) {
                    if (4 & r && d.__esModule) return d;
                    if (16 & r && "function" === typeof d.then) return d
                }
                var c = Object.create(null);
                t.r(c);
                var f = {};
                e = e || [null, a({}), a([]), a(a)];
                for (var n = 2 & r && d;
                    "object" == typeof n && !~e.indexOf(n); n = a(n)) Object.getOwnPropertyNames(n).forEach((e => f[e] = () => d[e]));
                return f.default = () => d, t.d(c, f), c
            }
        })(), t.d = (e, a) => {
            for (var d in a) t.o(a, d) && !t.o(e, d) && Object.defineProperty(e, d, {
                enumerable: !0,
                get: a[d]
            })
        }, t.f = {}, t.e = e => Promise.all(Object.keys(t.f).reduce(((a, d) => (t.f[d](e, a), a)), [])), t.u = e => 4596 === e ? "static/common/2edb282b.a3892c0c.js" : 4105 === e ? "static/common/62d046d8.f740ed90.js" : 9736 === e ? "static/common/3b9fe80f.28de0c7b.js" : 1019 === e ? "static/common/f32ed091.3658eda8.js" : 7547 === e ? "static/common/a29ae703.43357292.js" : 2641 === e ? "static/common/9a8b36da.b5de866d.js" : "static/chunks/" + ({
            49: "page-75a5",
            63: "page-69e4",
            87: "page-cf29",
            95: "page-47b9",
            292: "page-b140",
            331: "page-2271",
            424: "page-4234",
            473: "page-7542",
            1037: "page-ca7c",
            1096: "page-4e0b",
            1127: "page-ad90",
            1369: "page-39e9",
            1377: "page-24d0",
            1451: "page-60c7",
            1653: "page-2084",
            1789: "page-509b",
            1861: "page-a2c2",
            1878: "page-9d4f",
            2053: "page-b4ca",
            2124: "page-c374",
            2340: "page-43f2",
            2486: "page-09b2",
            2542: "page-4092",
            3181: "page-cf70",
            3210: "page-4e6b",
            3408: "page-8407",
            3724: "page-ffc2",
            3777: "page-614a",
            3798: "page-6652",
            3959: "page-6028",
            3999: "page-f29c",
            4299: "page-16da",
            4350: "page-ce30",
            4412: "page-48fe",
            4432: "page-2f14",
            4440: "page-c253",
            4473: "page-1a44",
            4901: "page-b512",
            5236: "page-a017",
            5237: "page-60f6",
            5291: "page-ac57",
            5318: "page-1a87",
            5321: "page-47e6",
            5335: "page-cca5",
            5366: "page-25df",
            5400: "page-61ce",
            5505: "page-6f99",
            5567: "page-30d5",
            6317: "page-3f67",
            6327: "page-f0f4",
            6646: "page-922b",
            6754: "page-eca6",
            6798: "layout-0bc7",
            6857: "page-6ce4",
            7006: "page-0da2",
            7024: "page-c1d3",
            7085: "page-6839",
            7162: "page-e2b2",
            7566: "page-e510",
            7671: "page-06a5",
            7719: "page-20b4",
            8117: "page-237f",
            8177: "page-0565",
            8238: "page-ac05",
            8293: "page-4c01",
            8676: "page-6728",
            8771: "page-dde7",
            8837: "page-c678",
            8848: "dynamic-analytics-web-vitals",
            8997: "page-376b",
            9102: "page-1e6e",
            9143: "page-fbf6",
            9317: "dynamic-fingerprint",
            9326: "page-243b",
            9352: "page-c26f",
            9403: "page-f7fc",
            9449: "page-5566",
            9506: "page-b911",
            9625: "loaders",
            9631: "page-d4fb",
            9680: "page-4f74"
        }[e] || e) + "." + {
            49: "8fdb187c",
            63: "79ca34b5",
            69: "794a8438",
            87: "3edbe085",
            95: "9b718348",
            221: "e5bb0a90",
            275: "8a5e08f7",
            292: "357e809d",
            331: "668ff5eb",
            424: "aff7dcaf",
            441: "f1488ecc",
            468: "af63cea2",
            473: "fef9ab5f",
            708: "81fc5947",
            1037: "0f62d827",
            1096: "4cd13b4d",
            1127: "9ef152ac",
            1369: "b9c10b29",
            1377: "87708576",
            1400: "306193c6",
            1451: "9af57195",
            1460: "cf7fe048",
            1653: "edff1156",
            1789: "9145f9d0",
            1861: "9948b8a8",
            1878: "951d2948",
            2053: "07c39ba5",
            2124: "64a6b658",
            2233: "c99ab389",
            2340: "cec264d9",
            2486: "a88fa131",
            2512: "00148744",
            2542: "99eca3a9",
            2578: "a546505a",
            3181: "e9a45cc5",
            3210: "2a8ce05d",
            3408: "d14d8329",
            3477: "e2f17471",
            3724: "91b53a10",
            3777: "624c5a01",
            3798: "5f2f3cc4",
            3959: "f157fbaf",
            3999: "f149bc32",
            4299: "d79d84ec",
            4350: "fca17d26",
            4412: "bfb281c1",
            4432: "5ef7a74d",
            4440: "644caadb",
            4473: "8be102a4",
            4581: "17c14c88",
            4891: "e8d1f99f",
            4901: "b4925a88",
            4972: "612cae8b",
            5236: "742a67a8",
            5237: "e163d669",
            5291: "6b95ea9d",
            5318: "ab4cc019",
            5321: "01795f51",
            5335: "d01b0298",
            5366: "7cfeb302",
            5400: "c715549b",
            5505: "013f0d5e",
            5567: "73b3bb4a",
            6317: "37e38a4c",
            6327: "0627a0aa",
            6646: "88c247a9",
            6688: "a6399efe",
            6754: "ee4bdb4d",
            6798: "7110cd99",
            6857: "7dbec109",
            6950: "f635fc20",
            7006: "1275894f",
            7024: "ca6a615c",
            7085: "c60a45ef",
            7162: "bb90eb37",
            7195: "11099e01",
            7241: "9765431d",
            7540: "17a5a6e8",
            7566: "77cb72a4",
            7671: "77a14676",
            7702: "0a2867e6",
            7719: "6249f35d",
            8001: "de5a3685",
            8117: "0fe18c8a",
            8177: "3041ed2d",
            8238: "3770c90f",
            8293: "458a7a2a",
            8437: "efd6f315",
            8496: "651ef5ad",
            8518: "acd2d735",
            8535: "ce05e89c",
            8676: "773532a3",
            8771: "0929380f",
            8837: "d0972b3e",
            8848: "b8dab423",
            8851: "d270fe36",
            8997: "fdb6822d",
            9102: "b6b98d86",
            9143: "a4b8fde7",
            9210: "9c4506f2",
            9317: "d5fa0558",
            9326: "6246708c",
            9352: "086cac3d",
            9403: "7cd24761",
            9449: "dc719819",
            9506: "5ba91ee7",
            9625: "3ba84558",
            9631: "22ad2555",
            9680: "2db27413"
        }[e] + ".js", t.miniCssF = e => 3755 === e ? "static/css/8611ed8e.css" : "static/css/" + {
            63: "7d4658b4",
            95: "7d4658b4",
            331: "7d4658b4",
            424: "7d4658b4",
            1369: "7d4658b4",
            1377: "ab168cd1",
            1451: "7d4658b4",
            1653: "89c92301",
            1789: "50b84c4a",
            1861: "7d4658b4",
            1878: "7d4658b4",
            2053: "7d4658b4",
            2486: "3d7a3723",
            3181: "7d4658b4",
            3210: "3933b5e7",
            3777: "e56918c2",
            4473: "7d4658b4",
            5237: "2815870f",
            5291: "7d4658b4",
            5321: "46bdc521",
            5335: "7d4658b4",
            5366: "7d4658b4",
            5567: "7d4658b4",
            6317: "7d4658b4",
            6327: "7d4658b4",
            6754: "7d4658b4",
            7006: "7d4658b4",
            7085: "223f1947",
            7162: "7d4658b4",
            7671: "7d4658b4",
            7719: "7d4658b4",
            8117: "46bdc521",
            8238: "7d4658b4",
            8293: "0a53a718",
            8676: "7d4658b4",
            8997: "7d4658b4",
            9102: "7d4658b4",
            9143: "f2bed8f4",
            9352: "7d4658b4",
            9625: "9dd15c6c",
            9680: "c4b91d47"
        }[e] + ".chunk.css", t.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), t.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), (() => {
            var e = {},
                a = "main-exchange-ui:";
            t.l = (d, r, c, f) => {
                if (e[d]) e[d].push(r);
                else {
                    var n, o;
                    if (void 0 !== c)
                        for (var b = document.getElementsByTagName("script"), i = 0; i < b.length; i++) {
                            var p = b[i];
                            if (p.getAttribute("src") == d || p.getAttribute("data-webpack") == a + c) {
                                n = p;
                                break
                            }
                        }
                    n || (o = !0, (n = document.createElement("script")).charset = "utf-8", n.timeout = 120, t.nc && n.setAttribute("nonce", t.nc), n.setAttribute("data-webpack", a + c), n.src = d), e[d] = [r];
                    var g = (a, t) => {
                            n.onerror = n.onload = null, clearTimeout(l);
                            var r = e[d];
                            if (delete e[d], n.parentNode && n.parentNode.removeChild(n), r && r.forEach((e => e(t))), a) return a(t)
                        },
                        l = setTimeout(g.bind(null, void 0, {
                            type: "timeout",
                            target: n
                        }), 12e4);
                    n.onerror = g.bind(null, n.onerror), n.onload = g.bind(null, n.onload), o && document.head.appendChild(n)
                }
            }
        })(), t.r = e => {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, t.nmd = e => (e.paths = [], e.children || (e.children = []), e), t.p = "https://static.devfdg.net/",
        function() {
            var e = function() {
                if ("undefined" !== typeof globalThis) return globalThis;
                if ("undefined" !== typeof self) return self;
                if ("undefined" !== typeof window) return window;
                if ("undefined" !== typeof global) return global;
                if ("undefined" !== typeof this) return this;
                throw new Error("Unable to locate global `this`")
            }();
            e.__main_exchange_ui_dynamic_public_path__ && (t.p = e.__main_exchange_ui_dynamic_public_path__)
        }(), (() => {
            var e = e => new Promise(((a, d) => {
                    var r = t.miniCssF(e),
                        c = t.p + r;
                    if (((e, a) => {
                            for (var t = document.getElementsByTagName("link"), d = 0; d < t.length; d++) {
                                var r = (f = t[d]).getAttribute("data-href") || f.getAttribute("href");
                                if ("stylesheet" === f.rel && (r === e || r === a)) return f
                            }
                            var c = document.getElementsByTagName("style");
                            for (d = 0; d < c.length; d++) {
                                var f;
                                if ((r = (f = c[d]).getAttribute("data-href")) === e || r === a) return f
                            }
                        })(r, c)) return a();
                    ((e, a, t, d) => {
                        var r = document.createElement("link");
                        r.rel = "stylesheet", r.type = "text/css", r.onerror = r.onload = c => {
                            if (r.onerror = r.onload = null, "load" === c.type) t();
                            else {
                                var f = c && ("load" === c.type ? "missing" : c.type),
                                    n = c && c.target && c.target.href || a,
                                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + n + ")");
                                o.code = "CSS_CHUNK_LOAD_FAILED", o.type = f, o.request = n, r.parentNode.removeChild(r), d(o)
                            }
                        }, r.href = a, document.head.appendChild(r)
                    })(e, c, a, d)
                })),
                a = {
                    4182: 0
                };
            t.f.miniCss = (t, d) => {
                a[t] ? d.push(a[t]) : 0 !== a[t] && {
                    63: 1,
                    95: 1,
                    331: 1,
                    424: 1,
                    1369: 1,
                    1377: 1,
                    1451: 1,
                    1653: 1,
                    1789: 1,
                    1861: 1,
                    1878: 1,
                    2053: 1,
                    2486: 1,
                    3181: 1,
                    3210: 1,
                    3777: 1,
                    4473: 1,
                    5237: 1,
                    5291: 1,
                    5321: 1,
                    5335: 1,
                    5366: 1,
                    5567: 1,
                    6317: 1,
                    6327: 1,
                    6754: 1,
                    7006: 1,
                    7085: 1,
                    7162: 1,
                    7671: 1,
                    7719: 1,
                    8117: 1,
                    8238: 1,
                    8293: 1,
                    8676: 1,
                    8997: 1,
                    9102: 1,
                    9143: 1,
                    9352: 1,
                    9625: 1,
                    9680: 1
                }[t] && d.push(a[t] = e(t).then((() => {
                    a[t] = 0
                }), (e => {
                    throw delete a[t], e
                })))
            }
        })(), (() => {
            var e = {
                4182: 0
            };
            t.f.j = (a, d) => {
                var r = t.o(e, a) ? e[a] : void 0;
                if (0 !== r)
                    if (r) d.push(r[2]);
                    else if (4182 != a) {
                    var c = new Promise(((t, d) => r = e[a] = [t, d]));
                    d.push(r[2] = c);
                    var f = t.p + t.u(a),
                        n = new Error;
                    t.l(f, (d => {
                        if (t.o(e, a) && (0 !== (r = e[a]) && (e[a] = void 0), r)) {
                            var c = d && ("load" === d.type ? "missing" : d.type),
                                f = d && d.target && d.target.src;
                            n.message = "Loading chunk " + a + " failed.\n(" + c + ": " + f + ")", n.name = "ChunkLoadError", n.type = c, n.request = f, r[1](n)
                        }
                    }), "chunk-" + a, a)
                } else e[a] = 0
            }, t.O.j = a => 0 === e[a];
            var a = (a, d) => {
                    var r, c, [f, n, o] = d,
                        b = 0;
                    if (f.some((a => 0 !== e[a]))) {
                        for (r in n) t.o(n, r) && (t.m[r] = n[r]);
                        if (o) var i = o(t)
                    }
                    for (a && a(d); b < f.length; b++) c = f[b], t.o(e, c) && e[c] && e[c][0](), e[c] = 0;
                    return t.O(i)
                },
                d = self.webpackChunkmain_exchange_ui = self.webpackChunkmain_exchange_ui || [];
            d.forEach(a.bind(null, 0)), d.push = a.bind(null, d.push.bind(d))
        })()
})();
//# debugId=d340a8a4-9707-5e4c-bd71-5c77c2a96be8