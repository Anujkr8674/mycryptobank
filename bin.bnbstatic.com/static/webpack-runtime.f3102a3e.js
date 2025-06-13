(() => {
    "use strict";
    var e = {},
        a = {};

    function d(c) {
        var f = a[c];
        if (void 0 !== f) return f.exports;
        var b = a[c] = {
                id: c,
                loaded: !1,
                exports: {}
            },
            t = !0;
        try {
            e[c].call(b.exports, b, b.exports, d), t = !1
        } finally {
            t && delete a[c]
        }
        return b.loaded = !0, b.exports
    }
    d.m = e, d.amdO = {}, (() => {
            var e = [];
            d.O = (a, c, f, b) => {
                if (!c) {
                    var t = 1 / 0;
                    for (i = 0; i < e.length; i++) {
                        for (var [c, f, b] = e[i], r = !0, o = 0; o < c.length; o++)(!1 & b || t >= b) && Object.keys(d.O).every((e => d.O[e](c[o]))) ? c.splice(o--, 1) : (r = !1, b < t && (t = b));
                        if (r) {
                            e.splice(i--, 1);
                            var n = f();
                            void 0 !== n && (a = n)
                        }
                    }
                    return a
                }
                b = b || 0;
                for (var i = e.length; i > 0 && e[i - 1][2] > b; i--) e[i] = e[i - 1];
                e[i] = [c, f, b]
            }
        })(), d.n = e => {
            var a = e && e.__esModule ? () => e.default : () => e;
            return d.d(a, {
                a: a
            }), a
        }, (() => {
            var e, a = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__;
            d.t = function(c, f) {
                if (1 & f && (c = this(c)), 8 & f) return c;
                if ("object" === typeof c && c) {
                    if (4 & f && c.__esModule) return c;
                    if (16 & f && "function" === typeof c.then) return c
                }
                var b = Object.create(null);
                d.r(b);
                var t = {};
                e = e || [null, a({}), a([]), a(a)];
                for (var r = 2 & f && c;
                    "object" == typeof r && !~e.indexOf(r); r = a(r)) Object.getOwnPropertyNames(r).forEach((e => t[e] = () => c[e]));
                return t.default = () => c, d.d(b, t), b
            }
        })(), d.d = (e, a) => {
            for (var c in a) d.o(a, c) && !d.o(e, c) && Object.defineProperty(e, c, {
                enumerable: !0,
                get: a[c]
            })
        }, d.f = {}, d.e = e => Promise.all(Object.keys(d.f).reduce(((a, c) => (d.f[c](e, a), a)), [])), d.u = e => 576 === e ? "static/common/8cd5d786.01286500.js" : 2642 === e ? "static/common/18d087c0.d800a9b9.js" : 4152 === e ? "static/common/f69bbb46.445857d8.js" : 4315 === e ? "static/common/5111d530.de6ce2c1.js" : 4310 === e ? "static/common/70d9f234.5ba87596.js" : 5587 === e ? "static/common/04278bc6.ee3950cd.js" : 2286 === e ? "static/common/4416ab45.9532c210.js" : "static/chunks/" + ({
            357: "layout-5fa9",
            995: "uikitComponents",
            1874: "page-51e4",
            2197: "page-0ead",
            2502: "page-b061",
            4268: "page-47a7",
            4595: "page-db91",
            8724: "page-577f",
            9134: "page-46a0",
            9317: "dynamic-fingerprint",
            9414: "page-5dea",
            9458: "page-720b",
            9625: "loaders",
            9832: "page-0c3a",
            9977: "uikitEssential"
        }[e] || e) + "." + {
            5: "6be0561b",
            36: "8744644c",
            47: "90ff694f",
            81: "c3fdcc97",
            109: "4f70e404",
            130: "29a33eb2",
            199: "46516dce",
            223: "3b8a984b",
            241: "63343d3e",
            261: "d661406a",
            283: "e907651b",
            307: "8043d9b8",
            357: "069ca69c",
            365: "fa43207a",
            371: "68bcdb2a",
            386: "9a7fba6b",
            402: "ca89c78c",
            417: "aee139aa",
            468: "e5beddb0",
            470: "aae9f3d3",
            559: "57af2c4d",
            582: "73af8785",
            596: "725a88eb",
            598: "7d9a8049",
            613: "9b657aa6",
            622: "065debc7",
            644: "27a69138",
            650: "6bd00e9d",
            721: "65c8ed9c",
            728: "5bc2b4b8",
            734: "c8c3fa07",
            736: "1ca750df",
            767: "932fb4fd",
            959: "abdd4c29",
            989: "460b5b0d",
            995: "19776b5c",
            1e3: "ee83f8bc",
            1028: "3356a2e4",
            1091: "95b09443",
            1156: "2b766c31",
            1172: "79f499fd",
            1203: "7a8d7d54",
            1211: "496203fa",
            1246: "9ec3cbe7",
            1251: "9e6b19f7",
            1299: "6548ddbb",
            1304: "ffb44ca7",
            1319: "9111f9d8",
            1323: "496c166a",
            1462: "98e150de",
            1528: "b666c7ab",
            1543: "652dd112",
            1560: "d0f07a4c",
            1604: "fe196e36",
            1623: "126e04fc",
            1628: "cee59de8",
            1642: "7354ad3e",
            1645: "df66bc82",
            1666: "2c58703b",
            1671: "3f9615e5",
            1677: "a96a5596",
            1680: "0b1118a4",
            1682: "fb720575",
            1694: "c020328c",
            1703: "81a34567",
            1704: "413a692c",
            1718: "58f569bc",
            1745: "65d19c82",
            1748: "a99249f6",
            1793: "357ecb9d",
            1802: "d10d2c98",
            1829: "e0dcb714",
            1834: "10561493",
            1838: "43d6f7ec",
            1874: "94947450",
            1881: "b3814232",
            1883: "db40cfcc",
            1898: "eb5855a5",
            1901: "c4e48333",
            1943: "d5593067",
            1994: "9c17af2a",
            2021: "c3b987e3",
            2025: "e4ba6295",
            2113: "80ef7481",
            2131: "d64e594b",
            2160: "578aede9",
            2163: "9b680463",
            2172: "b29de9af",
            2176: "e026d6bc",
            2197: "1b8da0a8",
            2238: "ddb2269f",
            2314: "12107048",
            2436: "d50a976c",
            2445: "c3911791",
            2470: "6d412b44",
            2502: "2398fadd",
            2526: "2001e832",
            2546: "a5e28e87",
            2550: "a0fd8ef8",
            2568: "93232f3f",
            2576: "9d50576c",
            2578: "0100d6e4",
            2579: "f36eb95b",
            2616: "c9e3e427",
            2659: "c8c04b7d",
            2706: "e2fe032f",
            2711: "38293945",
            2716: "2a2d7090",
            2734: "b59833ab",
            2765: "337d7dbc",
            2767: "1f0dbc50",
            2790: "081227d2",
            2804: "5d33fc6a",
            2817: "8f8e2fff",
            2871: "dfc2526c",
            2883: "fd4d96d8",
            2899: "0a428e9c",
            2941: "cc8808d5",
            2963: "697db445",
            2973: "3048d0a3",
            3003: "9e0f7249",
            3006: "2c1ce59d",
            3129: "3fbaa033",
            3210: "e3623606",
            3284: "bd77475d",
            3379: "b349a76c",
            3397: "93e1c4f5",
            3408: "bd981f25",
            3424: "90608489",
            3441: "82a5ee2f",
            3451: "e71fdae4",
            3531: "3208c9e2",
            3547: "b6f454ee",
            3568: "ec5a6bc4",
            3574: "7094ce13",
            3591: "aab83326",
            3602: "5aaadcd6",
            3604: "33eae03f",
            3638: "74fd06cd",
            3673: "ad4f0366",
            3715: "0c6d0248",
            3771: "5d9bbea1",
            3773: "43d7ee0d",
            3809: "7b2f11a7",
            3824: "a4871ee4",
            3845: "e66a52e0",
            3853: "6bb00bf3",
            3967: "0020a995",
            3984: "ea1cb3d4",
            4011: "a28ec645",
            4016: "a68bda07",
            4076: "b3ac812f",
            4093: "b6123c39",
            4137: "167c20f3",
            4200: "dcfa92a8",
            4219: "856c8469",
            4241: "14c92db2",
            4268: "9b1637f5",
            4282: "c37c6370",
            4343: "dcacd674",
            4370: "0b7dce9d",
            4373: "b58ad788",
            4381: "b1bb55a1",
            4487: "80f15006",
            4493: "bec3911c",
            4497: "866a7bb7",
            4523: "7def2a28",
            4531: "412f572b",
            4560: "086bf7f4",
            4590: "f26948be",
            4595: "eb3bcdb5",
            4617: "4466aa6b",
            4659: "510167fe",
            4674: "36c0aab5",
            4684: "47d887f2",
            4717: "1a9465a8",
            4753: "2efd12c5",
            4766: "eb086367",
            4768: "751a99bd",
            4773: "8bf8a72d",
            4797: "dbf6ad9a",
            4832: "95da092b",
            4879: "c2e13d5e",
            4882: "035ed7ce",
            4917: "d3ed77cc",
            4945: "d1b5839d",
            4963: "2823bcad",
            4988: "ca86288b",
            4995: "1eca643f",
            5016: "37373b35",
            5047: "25b1a5f5",
            5064: "50807bee",
            5077: "f645f4d5",
            5092: "338f0ed6",
            5099: "3d36c3b3",
            5119: "36e5e1cf",
            5175: "384925c0",
            5227: "5616102d",
            5277: "ee92791d",
            5322: "82645de7",
            5327: "fdad2b70",
            5328: "5250c3bf",
            5333: "c6e9b822",
            5336: "050e511e",
            5358: "a2619b20",
            5377: "05584ed7",
            5419: "4ca9c59b",
            5465: "cf764b39",
            5479: "297e5828",
            5496: "501fdd15",
            5699: "1d51f725",
            5753: "b00bef11",
            5793: "5c4346a9",
            5803: "895b141d",
            5822: "9fb58bec",
            5827: "d09623ed",
            5835: "740cdbd1",
            5890: "dfbaf10d",
            5900: "fcb4df55",
            5903: "d9945a3d",
            5952: "c30c0f78",
            5999: "dbb638b9",
            6024: "a3c1aa2e",
            6051: "27b83f55",
            6054: "d47760a0",
            6058: "6bc7a9c2",
            6085: "801b62b7",
            6121: "3fe4024f",
            6137: "631c6e39",
            6140: "552bcb46",
            6152: "76f6b9d1",
            6226: "8cc8924d",
            6276: "751a192e",
            6314: "f3255f8e",
            6344: "a9bada1f",
            6358: "de197b87",
            6375: "c44fdea4",
            6449: "2560dcd7",
            6506: "b8ff9463",
            6518: "f9529bfa",
            6520: "a13ba636",
            6525: "ccc8d356",
            6535: "cfee9fa7",
            6563: "1b33800f",
            6587: "42ff16d3",
            6622: "4a48e2e0",
            6642: "36a68851",
            6664: "f9a50687",
            6675: "e0b39b12",
            6783: "9859f056",
            6868: "8b3d0900",
            6878: "9b38078c",
            6892: "a4ab8944",
            6893: "133ef3d2",
            6934: "86b1345f",
            6954: "6d3871ac",
            7022: "8015fff0",
            7031: "f24e578b",
            7081: "488fc090",
            7090: "e94bed44",
            7107: "dbd9c067",
            7150: "c39a5786",
            7240: "f7c568b1",
            7265: "f073456b",
            7296: "47d04311",
            7315: "6d26e99f",
            7316: "9687e721",
            7321: "7f00ca1e",
            7376: "d7a25258",
            7405: "0bad5c43",
            7416: "3ae75ff3",
            7422: "a688921e",
            7436: "95e04c56",
            7490: "2376c48d",
            7502: "f535318f",
            7517: "9b0a7a0b",
            7555: "c3a74679",
            7556: "f015a138",
            7582: "da7cc03b",
            7586: "c19654bd",
            7592: "45590fa0",
            7602: "519d8dbd",
            7623: "b31d4bba",
            7650: "94ef85b2",
            7699: "de4a0e75",
            7767: "296a5c9e",
            7778: "b38633fd",
            7807: "97c273d0",
            7830: "9604caf3",
            7872: "a5450485",
            7886: "0f4e7560",
            7911: "f8381289",
            7924: "142df6e3",
            7928: "3e4731e8",
            8004: "1c1ba8a6",
            8011: "429ab691",
            8031: "ab2041ee",
            8073: "dec6786f",
            8085: "57f142e3",
            8113: "83ebcec8",
            8146: "73dbd43a",
            8173: "eba07bc8",
            8189: "a9c06c80",
            8226: "72168cff",
            8253: "2c90fefd",
            8263: "e1883520",
            8270: "72c4cb55",
            8274: "1ca65f10",
            8281: "ee704db4",
            8292: "994a0867",
            8317: "d6bb7bc3",
            8341: "f83a93d3",
            8354: "e050aea2",
            8440: "6b9a4801",
            8448: "33d52e78",
            8490: "28c267bd",
            8534: "bfbc3027",
            8539: "9722fc01",
            8645: "1d382b01",
            8724: "60c137f4",
            8747: "0e9c7377",
            8781: "9a48d407",
            8815: "67eb015a",
            8849: "b7e0dfd2",
            8895: "3a75edd1",
            8940: "33531fb7",
            8948: "9343bbfd",
            8949: "73cb9e0f",
            8955: "46a7c5c4",
            8986: "cfe45dcf",
            9014: "194f9807",
            9086: "2aa76af5",
            9111: "72fc36ed",
            9134: "3e7c5ede",
            9139: "072e951a",
            9197: "360f9293",
            9221: "033169fc",
            9243: "fd084e34",
            9260: "a5f8ca47",
            9285: "08e2c1aa",
            9298: "bc5c1546",
            9305: "73c9a724",
            9317: "17895c2f",
            9325: "0f0af4dc",
            9326: "0be3454c",
            9395: "252081c6",
            9402: "0b171229",
            9414: "0bc12917",
            9419: "788241aa",
            9431: "ae6df515",
            9458: "86e8d658",
            9461: "676eb9e4",
            9472: "6ee33af2",
            9494: "0fc21c1e",
            9517: "02d1f566",
            9548: "8f12dc01",
            9567: "abebef78",
            9625: "74e558d7",
            9629: "a3c97e64",
            9632: "078b58aa",
            9731: "0302a63d",
            9832: "b0e9202d",
            9891: "0ff0aa86",
            9919: "8138db6c",
            9947: "a09a3497",
            9948: "f57bd160",
            9977: "5e15426d",
            9992: "29f42eba"
        }[e] + ".js", d.miniCssF = e => "static/css/" + {
            357: "0b5b540a",
            596: "9d55f748",
            995: "7c5c5167",
            1666: "37e7fcfc",
            1874: "4c52e980",
            2197: "7afaa92c",
            2502: "8fb2fb9c",
            2790: "37e7fcfc",
            2804: "16b36d74",
            2871: "37e7fcfc",
            2883: "dd80f06d",
            3006: "83f03617",
            3379: "2f391d2b",
            3441: "b4dc775b",
            3604: "973e6aa1",
            3638: "9d55f748",
            4268: "7afaa92c",
            4282: "23f52ec4",
            4617: "9d55f748",
            4963: "4c8f95c6",
            5077: "68d9e553",
            5803: "bc562510",
            6051: "6702f8f2",
            6137: "916ff5d1",
            6375: "0a7531b9",
            6506: "43c59db8",
            6525: "dd80f06d",
            6642: "07c65af0",
            7107: "831380e3",
            7405: "df40b6e8",
            7422: "a3c4d054",
            7556: "b01fb2ee",
            7623: "dd55b833",
            8747: "8ff22d3d",
            9414: "7afaa92c",
            9548: "a3c4d054",
            9625: "17e38b67",
            9731: "16b36d74",
            9919: "22d30c86",
            9977: "c7a6013f",
            9992: "a4ac163b"
        }[e] + ".chunk.css", d.g = function() {
            if ("object" === typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" === typeof window) return window
            }
        }(), d.o = (e, a) => Object.prototype.hasOwnProperty.call(e, a), (() => {
            var e = {},
                a = "spot-trade-ui:";
            d.l = (c, f, b, t) => {
                if (e[c]) e[c].push(f);
                else {
                    var r, o;
                    if (void 0 !== b)
                        for (var n = document.getElementsByTagName("script"), i = 0; i < n.length; i++) {
                            var l = n[i];
                            if (l.getAttribute("src") == c || l.getAttribute("data-webpack") == a + b) {
                                r = l;
                                break
                            }
                        }
                    r || (o = !0, (r = document.createElement("script")).charset = "utf-8", r.timeout = 120, d.nc && r.setAttribute("nonce", d.nc), r.setAttribute("data-webpack", a + b), r.src = c), e[c] = [f];
                    var s = (a, d) => {
                            r.onerror = r.onload = null, clearTimeout(u);
                            var f = e[c];
                            if (delete e[c], r.parentNode && r.parentNode.removeChild(r), f && f.forEach((e => e(d))), a) return a(d)
                        },
                        u = setTimeout(s.bind(null, void 0, {
                            type: "timeout",
                            target: r
                        }), 12e4);
                    r.onerror = s.bind(null, r.onerror), r.onload = s.bind(null, r.onload), o && document.head.appendChild(r)
                }
            }
        })(), d.r = e => {
            "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, d.nmd = e => (e.paths = [], e.children || (e.children = []), e), d.p = "/",
        function() {
            var e = function() {
                if ("undefined" !== typeof globalThis) return globalThis;
                if ("undefined" !== typeof self) return self;
                if ("undefined" !== typeof window) return window;
                if ("undefined" !== typeof global) return global;
                if ("undefined" !== typeof this) return this;
                throw new Error("Unable to locate global `this`")
            }();
            e.__spot_trade_ui_dynamic_public_path__ && (d.p = e.__spot_trade_ui_dynamic_public_path__)
        }(), (() => {
            var e = e => new Promise(((a, c) => {
                    var f = d.miniCssF(e),
                        b = d.p + f;
                    if (((e, a) => {
                            for (var d = document.getElementsByTagName("link"), c = 0; c < d.length; c++) {
                                var f = (t = d[c]).getAttribute("data-href") || t.getAttribute("href");
                                if ("stylesheet" === t.rel && (f === e || f === a)) return t
                            }
                            var b = document.getElementsByTagName("style");
                            for (c = 0; c < b.length; c++) {
                                var t;
                                if ((f = (t = b[c]).getAttribute("data-href")) === e || f === a) return t
                            }
                        })(f, b)) return a();
                    ((e, a, d, c) => {
                        var f = document.createElement("link");
                        f.rel = "stylesheet", f.type = "text/css", f.onerror = f.onload = b => {
                            if (f.onerror = f.onload = null, "load" === b.type) d();
                            else {
                                var t = b && ("load" === b.type ? "missing" : b.type),
                                    r = b && b.target && b.target.href || a,
                                    o = new Error("Loading CSS chunk " + e + " failed.\n(" + r + ")");
                                o.code = "CSS_CHUNK_LOAD_FAILED", o.type = t, o.request = r, f.parentNode.removeChild(f), c(o)
                            }
                        }, f.href = a, document.head.appendChild(f)
                    })(e, b, a, c)
                })),
                a = {
                    4182: 0
                };
            d.f.miniCss = (d, c) => {
                a[d] ? c.push(a[d]) : 0 !== a[d] && {
                    357: 1,
                    596: 1,
                    995: 1,
                    1666: 1,
                    1874: 1,
                    2197: 1,
                    2502: 1,
                    2790: 1,
                    2804: 1,
                    2871: 1,
                    2883: 1,
                    3006: 1,
                    3379: 1,
                    3441: 1,
                    3604: 1,
                    3638: 1,
                    4268: 1,
                    4282: 1,
                    4617: 1,
                    4963: 1,
                    5077: 1,
                    5803: 1,
                    6051: 1,
                    6137: 1,
                    6375: 1,
                    6506: 1,
                    6525: 1,
                    6642: 1,
                    7107: 1,
                    7405: 1,
                    7422: 1,
                    7556: 1,
                    7623: 1,
                    8747: 1,
                    9414: 1,
                    9548: 1,
                    9625: 1,
                    9731: 1,
                    9919: 1,
                    9977: 1,
                    9992: 1
                }[d] && c.push(a[d] = e(d).then((() => {
                    a[d] = 0
                }), (e => {
                    throw delete a[d], e
                })))
            }
        })(), (() => {
            var e = {
                4182: 0
            };
            d.f.j = (a, c) => {
                var f = d.o(e, a) ? e[a] : void 0;
                if (0 !== f)
                    if (f) c.push(f[2]);
                    else if (/^(99(5|77)|4182|8747)$/.test(a)) e[a] = 0;
                else {
                    var b = new Promise(((d, c) => f = e[a] = [d, c]));
                    c.push(f[2] = b);
                    var t = d.p + d.u(a),
                        r = new Error;
                    d.l(t, (c => {
                        if (d.o(e, a) && (0 !== (f = e[a]) && (e[a] = void 0), f)) {
                            var b = c && ("load" === c.type ? "missing" : c.type),
                                t = c && c.target && c.target.src;
                            r.message = "Loading chunk " + a + " failed.\n(" + b + ": " + t + ")", r.name = "ChunkLoadError", r.type = b, r.request = t, f[1](r)
                        }
                    }), "chunk-" + a, a)
                }
            }, d.O.j = a => 0 === e[a];
            var a = (a, c) => {
                    var f, b, [t, r, o] = c,
                        n = 0;
                    if (t.some((a => 0 !== e[a]))) {
                        for (f in r) d.o(r, f) && (d.m[f] = r[f]);
                        if (o) var i = o(d)
                    }
                    for (a && a(c); n < t.length; n++) b = t[n], d.o(e, b) && e[b] && e[b][0](), e[b] = 0;
                    return d.O(i)
                },
                c = self.webpackChunkspot_trade_ui = self.webpackChunkspot_trade_ui || [];
            c.forEach(a.bind(null, 0)), c.push = a.bind(null, c.push.bind(c))
        })()
})();