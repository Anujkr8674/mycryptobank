! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "53421698-a7bd-55b1-ac1f-bd3ba44dda5a")
    } catch (e) {}
}();
(self.webpackChunkconvert_ui = self.webpackChunkconvert_ui || []).push([
    [638], {
        wmq8: (e, n, t) => {
            "use strict";
            t.d(n, {
                Y: () => d,
                a: () => h
            });
            var r = t("sViW"),
                i = t("BK7R"),
                o = t("3yYM"),
                c = t.n(o),
                u = t("T3Fm"),
                a = t("zJWh"),
                s = t("tbM7"),
                f = t("BMJD"),
                l = t("qAxa"),
                h = function(e) {
                    if (u.o) {
                        var n = window.location.host;
                        (n.includes("qa1fdg") || n.includes("devfdg") || n.includes("localhost")) && console.info("datalayer", e), window.dataLayer = window.dataLayer || [], "y" === a.U.read("data_opt_out") || window.dataLayer.push(e)
                    }
                },
                d = function() {
                    var e = (0, r.A)(c().mark((function e(n, t) {
                        var r, o, d, v, g, p, m;
                        return c().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (r = n.getUserId, o = n.cancel, d = n.extraParams, u.o && !o && t) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (v = window.location.pathname.match(/\/[a-z]{2}(-[a-zA-Z]{2})?(\/.*)?/), g = v ? v[2] : "/", p = {
                                            pageName: g,
                                            bncUUID: a.U.read("bnc-uuid")
                                        }, !window.location.origin.startsWith("https")) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 9, (0, s.CY)();
                                case 9:
                                    if (!e.sent) {
                                        e.next = 23;
                                        break
                                    }
                                    if (!r) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 14, r();
                                case 14:
                                    e.t0 = e.sent, e.next = 20;
                                    break;
                                case 17:
                                    return e.next = 19, (0, f.Tc)();
                                case 19:
                                    e.t0 = e.sent.userId;
                                case 20:
                                    m = e.t0, p.userId = m, (0, l.A)(m);
                                case 23:
                                    p = (0, i.A)({}, p, "object" === typeof d ? d : {}), h({
                                        event: "page loading",
                                        page_load_info: p
                                    });
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        qAxa: (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => o,
                b: () => i
            });
            var r = function(e) {
                    console.warn("You login ".concat(e, ",but never init sensor or ga"))
                },
                i = function(e) {
                    r = e
                };
            const o = function(e) {
                return r(e)
            }
        },
        "ah/i": (e, n, t) => {
            "use strict";
            t.d(n, {
                QF: () => l,
                ZV: () => a,
                k3: () => s,
                lw: () => f
            });
            var r = t("pFSi"),
                i = t.n(r),
                o = t("vM3x"),
                c = t.n(o),
                u = i()((function(e, n) {
                    return new RegExp("\\d(?=(\\d{".concat(n || 3, "})+").concat(e > 0 ? "\\." : "$", ")"), "g")
                }), (function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    return n.join(",")
                })),
                a = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 ? arguments[1] : void 0,
                        t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 3;
                    e = "number" === typeof e ? e : +e;
                    var r = u(n, t);
                    return e.toFixed(Math.max(0, ~~n)).replace(r, "$&,")
                },
                s = function(e, n) {
                    return new(c())(e).dividedBy(n)
                },
                f = function() {
                    for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++) n[t] = arguments[t];
                    var r;
                    return r = new(c())(n[0] ? 1 : 0), n.forEach((function(e) {
                        r = r.multipliedBy(e || 0)
                    })), r
                };

            function l(e, n) {
                return "undefined" === typeof Intl || "function" !== typeof Intl.NumberFormat ? Number(e).toLocaleString(null === n || void 0 === n ? void 0 : n.locales, n) : new Intl.NumberFormat(null === n || void 0 === n ? void 0 : n.locales, n).format(Number(e))
            }
        },
        "90NE": (e, n, t) => {
            "use strict";
            t.d(n, {
                Fj: () => c,
                HI: () => u,
                Qr: () => a
            });
            var r = t("wmq8"),
                i = t("qs9Q"),
                o = t.n(i),
                c = function() {
                    (0, r.a)({
                        event: "click",
                        eventCategory: "co_convert_otc",
                        eventAction: "click",
                        eventLabel: "convert_otc::preview_conversion",
                        elementid: "convert-preview-btn"
                    })
                },
                u = function(e) {
                    var n = e.fromCoin,
                        t = e.toCoin;
                    (0, r.a)({
                        event: "click",
                        eventCategory: "co_convert_otc",
                        eventAction: "click",
                        eventLabel: "convert_otc::".concat(n, "_to_").concat(t),
                        elementid: "convert-confirm-btn"
                    })
                },
                a = function(e) {
                    var n = e.fromCoin,
                        t = e.toCoin,
                        i = e.orderId,
                        c = void 0 === i ? "" : i;
                    (0, r.a)({
                        event: "click",
                        eventCategory: "td_futures",
                        eventAction: "click",
                        eventLabel: "td_futures::convert_".concat(n, "_to_").concat(t),
                        elementid: "td_futures_convert_confirm",
                        orderId: o()("".concat(c))
                    })
                }
        },
        p1Ck: (e, n, t) => {
            "use strict";
            t.d(n, {
                Zr: () => k,
                pe: () => x,
                w1: () => b,
                h: () => l,
                OE: () => B,
                SS: () => S,
                fU: () => U,
                si: () => O,
                BF: () => A,
                VA: () => C,
                zP: () => w,
                fx: () => m,
                YA: () => y,
                xW: () => T,
                no: () => I,
                B9: () => E,
                n: () => d.n,
                cA: () => _,
                HI: () => h.HI,
                Fj: () => h.Fj,
                Qr: () => h.Qr,
                Mz: () => N,
                u4: () => v.u4,
                HY: () => v.HY
            });
            var r = t("ezuS"),
                i = t("BK7R"),
                o = t("QUKP"),
                c = t("VP0d"),
                u = t("tEf9"),
                a = t("T3Fm"),
                s = (t("vM3x"), t("nsO7"), t("wgY5")),
                f = t.n(s);

            function l(e, n) {
                if (!e.length) return [];
                var t = n.map((function(e) {
                    return e.orderId
                }));
                return e.map((function(e) {
                    return e.orderId
                })).filter((function(e) {
                    return !t.includes(e)
                }))
            }
            var h = t("90NE"),
                d = t("BKV1"),
                v = t("iG7D"),
                g = t("kPx0"),
                p = t("c+5G");
            var m = function(e) {
                    var n = e || window.location.href,
                        t = {
                            callback: (0, g.btoau)(n)
                        },
                        r = function(e) {
                            var n, t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return "".concat(e, "/login?return_to=").concat(null !== (n = null === t || void 0 === t ? void 0 : t.callback) && void 0 !== n ? n : "")
                        }(p.yG, t);
                    return r
                },
                w = function(e) {
                    var n, t = e || window.location.href;
                    return "".concat(p.QU, "/my/settings/profile?return_to=").concat(null !== (n = (0, g.btoau)(t)) && void 0 !== n ? n : "")
                };
            t("/azZ");

            function b(e) {
                var n = "".concat(e).split(".");
                return n.length > 1 ? n[1].length : 0
            }
            var y = function(e, n) {
                    var t = n ? "".concat(n, "-seo") : "seo";
                    return ["title", "keywords", "description"].reduce((function(n, c) {
                        return (0, o.A)((0, i.A)({}, n), (0, r.A)({}, c, e("".concat(t, "-").concat(c))))
                    }), {})
                },
                A = function(e, n, t) {
                    var c = n ? "".concat(n, "-seo") : "seo",
                        u = {
                            title: "Binance Convert | {{fromCoin}} to {{toCoin}} Converter | Binance.com",
                            description: "Trade {{symbol}} with Binance Convert! Free access to 300+ different tokens and convert between any tokens with sizes as small as 0.01 USDT.",
                            keywords: "Binance Convert,Crypto Converter,Binance OTC, {{symbol}}"
                        };
                    return ["title", "keywords", "description"].reduce((function(n, a) {
                        return (0, o.A)((0, i.A)({}, n), (0, r.A)({}, a, e("".concat(c, "-").concat(a), (0, i.A)({
                            defaultValue: u[a]
                        }, t))))
                    }), {})
                };

            function N(e) {
                e.fromCoin, e.toCoin;
                var n = e.description,
                    t = void 0 === n ? "" : n,
                    r = document.getElementsByTagName("meta"),
                    i = (0, u.A)(r).find((function(e, n) {
                        return "description" === e.name
                    }));
                i && (i.content = t)
            }

            function x(e) {
                var n = "{{rootDomain}}";
                return "string" === typeof e && e.includes(n) ? e.replace(n, function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                        n = (a.o ? window.location : req).hostname,
                        t = void 0 === n ? "" : n,
                        r = t.split("."),
                        i = r.length > 2 ? r.slice(-e).join(".") : t;
                    return "localhost" === i ? "qa1fdg.net" : i
                }()) : e || window.document.domain
            }
            var E = function(e) {
                return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(e)
            };

            function O(e, n) {
                var t = -1,
                    r = e.find((function(e) {
                        return "USDT" === e.symbol ? 1 : e.symbol === "".concat(n, "USDT")
                    }));
                return r && r.price && (t = r.price), t
            }

            function _(e, n) {
                var t = "";
                for (var r in e) n.includes(r) || ("" !== t && (t += "&"), t += r + "=" + encodeURIComponent(e[r]));
                return t ? "?".concat(t) : ""
            }
            var S = function(e, n) {
                    var t = +"".concat(e).replace(/,/g, "");
                    Number.isNaN(t) && (t = 0);
                    var r = ((0, c.A)("".concat(parseFloat(e)).split(".").slice(1), 1)[0] || "").length,
                        i = n || {},
                        o = i.lng,
                        u = void 0 === o ? "en" : o,
                        a = i.digits,
                        s = void 0 === a ? r : a;
                    return t.toLocaleString(u, {
                        minimumFractionDigits: s < r ? s : r,
                        maximumFractionDigits: s < r ? s : r
                    })
                },
                C = function(e) {
                    var n = +"".concat(e).replace(/,/g, "");
                    return Number.isNaN(n) ? 0 : n < 1 ? 7 : n >= 1 && n < 100 ? 2 : n >= 100 && n < 1e4 ? 1 : n >= 1e4 ? 0 : 7
                },
                B = function(e, n) {
                    var t = +"".concat(e).replace(/,/g, "");
                    Number.isNaN(t) && (t = 0);
                    var r = (0, c.A)("".concat(e).split(".").slice(1), 1)[0],
                        i = n || {},
                        o = i.lng,
                        u = void 0 === o ? "en" : o,
                        a = i.digits,
                        s = void 0 === a ? (r || "").length : a;
                    return t.toLocaleString(u, {
                        minimumFractionDigits: s,
                        maximumFractionDigits: s
                    })
                };

            function T(e, n, t) {
                switch (t) {
                    case "number":
                        return function(t, r) {
                            var i = (0, c.A)(n ? [r[e], t[e]] : [t[e], r[e]], 2),
                                o = i[0],
                                u = i[1];
                            return (o = Number.isFinite(+o) ? +o : n ? Number.MIN_VALUE : Number.MAX_VALUE) - (u = Number.isFinite(+u) ? +u : n ? Number.MIN_VALUE : Number.MAX_VALUE)
                        };
                    case "string":
                        return function(t, r) {
                            var i = (0, c.A)(n ? [r[e], t[e]] : [t[e], r[e]], 2),
                                o = i[0],
                                u = i[1];
                            return o.localeCompare(u)
                        };
                    default:
                        return
                }
            }

            function U(e) {
                var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(e) {
                        return e
                    },
                    t = f().duration(e),
                    r = t.hours(),
                    i = t.minutes(),
                    o = t.seconds(),
                    c = "";
                return r > 0 && (c += "".concat(r, " ").concat(n(1 === r ? "hour" : "hours"))), i > 0 && (c += "".concat(c.length > 0 ? " " : "").concat(i, " ").concat(n(1 === i ? "minute" : "minutes"))), !r && !i && o > 0 && (c += "".concat(c.length > 0 ? " " : "").concat(o, " ").concat(n(1 === o ? "second" : "seconds"))), c
            }

            function k(e) {
                return e ? e.charAt(0).toUpperCase() + e.slice(1).toLowerCase() : ""
            }

            function I(e) {
                var n = e > 0 ? "-" : "+",
                    t = Math.abs(e),
                    r = Math.floor(t / 60);
                return {
                    timeZoneStr: "".concat(n).concat(r),
                    sign: n,
                    hours: r
                }
            }
        },
        BKV1: (e, n, t) => {
            "use strict";
            t.d(n, {
                Xq: () => u,
                n: () => c
            });
            var r = t("vM3x"),
                i = t.n(r),
                o = t("ah/i"),
                c = (t("pFSi"), function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 8,
                        t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
                            delZero: !1
                        };
                    if (e && !isNaN(e)) {
                        var i = r.delZero,
                            c = (0, o.ZV)(e, n).toString();
                        return "".concat(i ? c.replace(/\.?0+$/, "") : c).concat(t ? "%" : "")
                    }
                    return t || 0 !== e ? "-" : "0"
                });
            var u = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    n = new(i())(e).toFixed(),
                    t = n.split("."),
                    r = t[0].replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,"),
                    o = t[1] ? "." + t[1] : "";
                return r + o
            }
        },
        iG7D: (e, n, t) => {
            "use strict";
            t.d(n, {
                cc: () => E,
                u4: () => O,
                HY: () => S
            });
            var r = t("BK7R"),
                i = t("QUKP"),
                o = t("VP0d"),
                c = t("zJWh"),
                u = t("c+5G");
            var a, s = t("kbMF"),
                f = t("ZFFV"),
                l = t.n(f),
                h = (t("c6Y9"), t("nsO7")),
                d = l()().fetch,
                v = new s.A,
                g = "monitor-uid",
                p = [],
                m = v.get(g),
                w = function() {
                    if (p.length) try {
                        d("https://frontend-m.binance.cloud/monitor/v1/log", {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify({
                                "data-list": p
                            })
                        }).then((function() {
                            p = []
                        }))
                    } catch (e) {
                        console.error("Monitor failed to send log.")
                    }
                },
                b = (0, h.throttle)(w, 1500),
                y = function(e) {
                    var n = (0, u.L2)();
                    p.push((0, r.A)({
                        p: window.location.href,
                        d: Date.now(),
                        pathname: n,
                        uid: m
                    }, e)), b()
                },
                A = new Set,
                N = "";
            N = function(e, n) {
                for (var t = document.getElementsByTagName("meta"), r = 0; r < t.length; r++)
                    if (t[r].getAttribute(e) === n) return t[r].getAttribute("content");
                return ""
            }("http-equiv", "etag");
            var x = function(e) {
                    a && (A.forEach((function(n) {
                        var t = (0, o.A)(n, 2),
                            u = t[0],
                            s = t[1],
                            f = (0, r.A)((0, i.A)((0, r.A)({}, s), {
                                etag: N,
                                business: "convert"
                            }), {
                                bnc_uuid: c.U.read("bnc-uuid")
                            });
                        a.track(u, f), e && y((0, r.A)({
                            t: u
                        }, f))
                    })), A.clear())
                },
                E = function(e) {
                    a = e, x(!0)
                },
                O = function(e, n) {
                    var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                    u.S$ || (A.add([e, n]), x(t))
                };

            function _(e) {
                var n = e.match(/^\/[a-z]{2}(-[a-zA-Z]{2})?(\/.*)?$/);
                return n ? n[2] || "/" : e
            }
            var S = function(e, n) {
                var t = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2],
                    o = document.referrer,
                    c = (0, i.A)((0, r.A)({}, n), {
                        $referrer: "",
                        $referrer_host: "",
                        referrerURL: ""
                    });
                if (o) {
                    var u = new URL(o);
                    c.$referrer = o, c.$referrer_host = u.host, c.referrerURL = _(u.pathname)
                }
                O(e, c, t)
            }
        },
        "/azZ": (e, n, t) => {
            "use strict";
            t.d(n, {
                A: () => u
            });
            var r = t("sViW"),
                i = t("0GOp"),
                o = t.n(i),
                c = t("8tQJ");
            t("nsO7");
            const u = {
                helper: null,
                callbacks: [],
                init: function() {
                    var e = (0, r.A)(o().mark((function e(n, t) {
                        var r;
                        return o().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = this, e.next = 3, c.Ay.init(n, t);
                                case 3:
                                    this.helper = e.sent, this.callbacks.forEach((function(e) {
                                        return e(r.helper)
                                    })), this.callbacks = [];
                                case 6:
                                case "end":
                                    return e.stop()
                            }
                        }), e, this)
                    })));
                    return function(n, t) {
                        return e.apply(this, arguments)
                    }
                }(),
                afterInit: function(e) {
                    this.helper ? e(this.helper) : this.callbacks.push(e)
                },
                getHelper: (0, r.A)(o().mark((function e() {
                    var n;
                    return o().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = this, e.abrupt("return", new Promise((function(e) {
                                    return n.afterInit(e)
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e, this)
                })))
            }
        },
        vM3x: function(e, n, t) {
            var r;
            ! function(i) {
                "use strict";
                var o, c = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
                    u = Math.ceil,
                    a = Math.floor,
                    s = "[BigNumber Error] ",
                    f = s + "Number primitive has more than 15 significant digits: ",
                    l = 1e14,
                    h = 14,
                    d = 9007199254740991,
                    v = [1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12, 1e13],
                    g = 1e7,
                    p = 1e9;

                function m(e) {
                    var n = 0 | e;
                    return e > 0 || e === n ? n : n - 1
                }

                function w(e) {
                    for (var n, t, r = 1, i = e.length, o = e[0] + ""; r < i;) {
                        for (n = e[r++] + "", t = h - n.length; t--; n = "0" + n);
                        o += n
                    }
                    for (i = o.length; 48 === o.charCodeAt(--i););
                    return o.slice(0, i + 1 || 1)
                }

                function b(e, n) {
                    var t, r, i = e.c,
                        o = n.c,
                        c = e.s,
                        u = n.s,
                        a = e.e,
                        s = n.e;
                    if (!c || !u) return null;
                    if (t = i && !i[0], r = o && !o[0], t || r) return t ? r ? 0 : -u : c;
                    if (c != u) return c;
                    if (t = c < 0, r = a == s, !i || !o) return r ? 0 : !i ^ t ? 1 : -1;
                    if (!r) return a > s ^ t ? 1 : -1;
                    for (u = (a = i.length) < (s = o.length) ? a : s, c = 0; c < u; c++)
                        if (i[c] != o[c]) return i[c] > o[c] ^ t ? 1 : -1;
                    return a == s ? 0 : a > s ^ t ? 1 : -1
                }

                function y(e, n, t, r) {
                    if (e < n || e > t || e !== a(e)) throw Error(s + (r || "Argument") + ("number" == typeof e ? e < n || e > t ? " out of range: " : " not an integer: " : " not a primitive number: ") + String(e))
                }

                function A(e) {
                    var n = e.c.length - 1;
                    return m(e.e / h) == n && e.c[n] % 2 != 0
                }

                function N(e, n) {
                    return (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) + (n < 0 ? "e" : "e+") + n
                }

                function x(e, n, t) {
                    var r, i;
                    if (n < 0) {
                        for (i = t + "."; ++n; i += t);
                        e = i + e
                    } else if (++n > (r = e.length)) {
                        for (i = t, n -= r; --n; i += t);
                        e += i
                    } else n < r && (e = e.slice(0, n) + "." + e.slice(n));
                    return e
                }
                o = function e(n) {
                    var t, r, i, o = F.prototype = {
                            constructor: F,
                            toString: null,
                            valueOf: null
                        },
                        E = new F(1),
                        O = 20,
                        _ = 4,
                        S = -7,
                        C = 21,
                        B = -1e7,
                        T = 1e7,
                        U = !1,
                        k = 1,
                        I = 0,
                        L = {
                            prefix: "",
                            groupSize: 3,
                            secondaryGroupSize: 0,
                            groupSeparator: ",",
                            decimalSeparator: ".",
                            fractionGroupSize: 0,
                            fractionGroupSeparator: "\xa0",
                            suffix: ""
                        },
                        D = "0123456789abcdefghijklmnopqrstuvwxyz";

                    function F(e, n) {
                        var t, o, u, s, l, v, g, p, m = this;
                        if (!(m instanceof F)) return new F(e, n);
                        if (null == n) {
                            if (e && !0 === e._isBigNumber) return m.s = e.s, void(!e.c || e.e > T ? m.c = m.e = null : e.e < B ? m.c = [m.e = 0] : (m.e = e.e, m.c = e.c.slice()));
                            if ((v = "number" == typeof e) && 0 * e == 0) {
                                if (m.s = 1 / e < 0 ? (e = -e, -1) : 1, e === ~~e) {
                                    for (s = 0, l = e; l >= 10; l /= 10, s++);
                                    return void(s > T ? m.c = m.e = null : (m.e = s, m.c = [e]))
                                }
                                p = String(e)
                            } else {
                                if (!c.test(p = String(e))) return i(m, p, v);
                                m.s = 45 == p.charCodeAt(0) ? (p = p.slice(1), -1) : 1
                            }(s = p.indexOf(".")) > -1 && (p = p.replace(".", "")), (l = p.search(/e/i)) > 0 ? (s < 0 && (s = l), s += +p.slice(l + 1), p = p.substring(0, l)) : s < 0 && (s = p.length)
                        } else {
                            if (y(n, 2, D.length, "Base"), 10 == n) return z(m = new F(e), O + m.e + 1, _);
                            if (p = String(e), v = "number" == typeof e) {
                                if (0 * e != 0) return i(m, p, v, n);
                                if (m.s = 1 / e < 0 ? (p = p.slice(1), -1) : 1, F.DEBUG && p.replace(/^0\.0*|\./, "").length > 15) throw Error(f + e)
                            } else m.s = 45 === p.charCodeAt(0) ? (p = p.slice(1), -1) : 1;
                            for (t = D.slice(0, n), s = l = 0, g = p.length; l < g; l++)
                                if (t.indexOf(o = p.charAt(l)) < 0) {
                                    if ("." == o) {
                                        if (l > s) {
                                            s = g;
                                            continue
                                        }
                                    } else if (!u && (p == p.toUpperCase() && (p = p.toLowerCase()) || p == p.toLowerCase() && (p = p.toUpperCase()))) {
                                        u = !0, l = -1, s = 0;
                                        continue
                                    }
                                    return i(m, String(e), v, n)
                                }
                            v = !1, (s = (p = r(p, n, 10, m.s)).indexOf(".")) > -1 ? p = p.replace(".", "") : s = p.length
                        }
                        for (l = 0; 48 === p.charCodeAt(l); l++);
                        for (g = p.length; 48 === p.charCodeAt(--g););
                        if (p = p.slice(l, ++g)) {
                            if (g -= l, v && F.DEBUG && g > 15 && (e > d || e !== a(e))) throw Error(f + m.s * e);
                            if ((s = s - l - 1) > T) m.c = m.e = null;
                            else if (s < B) m.c = [m.e = 0];
                            else {
                                if (m.e = s, m.c = [], l = (s + 1) % h, s < 0 && (l += h), l < g) {
                                    for (l && m.c.push(+p.slice(0, l)), g -= h; l < g;) m.c.push(+p.slice(l, l += h));
                                    l = h - (p = p.slice(l)).length
                                } else l -= g;
                                for (; l--; p += "0");
                                m.c.push(+p)
                            }
                        } else m.c = [m.e = 0]
                    }

                    function M(e, n, t, r) {
                        var i, o, c, u, a;
                        if (null == t ? t = _ : y(t, 0, 8), !e.c) return e.toString();
                        if (i = e.c[0], c = e.e, null == n) a = w(e.c), a = 1 == r || 2 == r && (c <= S || c >= C) ? N(a, c) : x(a, c, "0");
                        else if (o = (e = z(new F(e), n, t)).e, u = (a = w(e.c)).length, 1 == r || 2 == r && (n <= o || o <= S)) {
                            for (; u < n; a += "0", u++);
                            a = N(a, o)
                        } else if (n -= c, a = x(a, o, "0"), o + 1 > u) {
                            if (--n > 0)
                                for (a += "."; n--; a += "0");
                        } else if ((n += o - u) > 0)
                            for (o + 1 == u && (a += "."); n--; a += "0");
                        return e.s < 0 && i ? "-" + a : a
                    }

                    function P(e, n) {
                        for (var t, r = 1, i = new F(e[0]); r < e.length; r++) {
                            if (!(t = new F(e[r])).s) {
                                i = t;
                                break
                            }
                            n.call(i, t) && (i = t)
                        }
                        return i
                    }

                    function R(e, n, t) {
                        for (var r = 1, i = n.length; !n[--i]; n.pop());
                        for (i = n[0]; i >= 10; i /= 10, r++);
                        return (t = r + t * h - 1) > T ? e.c = e.e = null : t < B ? e.c = [e.e = 0] : (e.e = t, e.c = n), e
                    }

                    function z(e, n, t, r) {
                        var i, o, c, s, f, d, g, p = e.c,
                            m = v;
                        if (p) {
                            e: {
                                for (i = 1, s = p[0]; s >= 10; s /= 10, i++);
                                if ((o = n - i) < 0) o += h,
                                c = n,
                                g = (f = p[d = 0]) / m[i - c - 1] % 10 | 0;
                                else if ((d = u((o + 1) / h)) >= p.length) {
                                    if (!r) break e;
                                    for (; p.length <= d; p.push(0));
                                    f = g = 0, i = 1, c = (o %= h) - h + 1
                                } else {
                                    for (f = s = p[d], i = 1; s >= 10; s /= 10, i++);
                                    g = (c = (o %= h) - h + i) < 0 ? 0 : f / m[i - c - 1] % 10 | 0
                                }
                                if (r = r || n < 0 || null != p[d + 1] || (c < 0 ? f : f % m[i - c - 1]), r = t < 4 ? (g || r) && (0 == t || t == (e.s < 0 ? 3 : 2)) : g > 5 || 5 == g && (4 == t || r || 6 == t && (o > 0 ? c > 0 ? f / m[i - c] : 0 : p[d - 1]) % 10 & 1 || t == (e.s < 0 ? 8 : 7)), n < 1 || !p[0]) return p.length = 0, r ? (n -= e.e + 1, p[0] = m[(h - n % h) % h], e.e = -n || 0) : p[0] = e.e = 0, e;
                                if (0 == o ? (p.length = d, s = 1, d--) : (p.length = d + 1, s = m[h - o], p[d] = c > 0 ? a(f / m[i - c] % m[c]) * s : 0), r)
                                    for (;;) {
                                        if (0 == d) {
                                            for (o = 1, c = p[0]; c >= 10; c /= 10, o++);
                                            for (c = p[0] += s, s = 1; c >= 10; c /= 10, s++);
                                            o != s && (e.e++, p[0] == l && (p[0] = 1));
                                            break
                                        }
                                        if (p[d] += s, p[d] != l) break;
                                        p[d--] = 0, s = 1
                                    }
                                for (o = p.length; 0 === p[--o]; p.pop());
                            }
                            e.e > T ? e.c = e.e = null : e.e < B && (e.c = [e.e = 0])
                        }
                        return e
                    }

                    function q(e) {
                        var n, t = e.e;
                        return null === t ? e.toString() : (n = w(e.c), n = t <= S || t >= C ? N(n, t) : x(n, t, "0"), e.s < 0 ? "-" + n : n)
                    }
                    return F.clone = e, F.ROUND_UP = 0, F.ROUND_DOWN = 1, F.ROUND_CEIL = 2, F.ROUND_FLOOR = 3, F.ROUND_HALF_UP = 4, F.ROUND_HALF_DOWN = 5, F.ROUND_HALF_EVEN = 6, F.ROUND_HALF_CEIL = 7, F.ROUND_HALF_FLOOR = 8, F.EUCLID = 9, F.config = F.set = function(e) {
                        var n, t;
                        if (null != e) {
                            if ("object" != typeof e) throw Error(s + "Object expected: " + e);
                            if (e.hasOwnProperty(n = "DECIMAL_PLACES") && (y(t = e[n], 0, p, n), O = t), e.hasOwnProperty(n = "ROUNDING_MODE") && (y(t = e[n], 0, 8, n), _ = t), e.hasOwnProperty(n = "EXPONENTIAL_AT") && ((t = e[n]) && t.pop ? (y(t[0], -p, 0, n), y(t[1], 0, p, n), S = t[0], C = t[1]) : (y(t, -p, p, n), S = -(C = t < 0 ? -t : t))), e.hasOwnProperty(n = "RANGE"))
                                if ((t = e[n]) && t.pop) y(t[0], -p, -1, n), y(t[1], 1, p, n), B = t[0], T = t[1];
                                else {
                                    if (y(t, -p, p, n), !t) throw Error(s + n + " cannot be zero: " + t);
                                    B = -(T = t < 0 ? -t : t)
                                }
                            if (e.hasOwnProperty(n = "CRYPTO")) {
                                if ((t = e[n]) !== !!t) throw Error(s + n + " not true or false: " + t);
                                if (t) {
                                    if ("undefined" == typeof crypto || !crypto || !crypto.getRandomValues && !crypto.randomBytes) throw U = !t, Error(s + "crypto unavailable");
                                    U = t
                                } else U = t
                            }
                            if (e.hasOwnProperty(n = "MODULO_MODE") && (y(t = e[n], 0, 9, n), k = t), e.hasOwnProperty(n = "POW_PRECISION") && (y(t = e[n], 0, p, n), I = t), e.hasOwnProperty(n = "FORMAT")) {
                                if ("object" != typeof(t = e[n])) throw Error(s + n + " not an object: " + t);
                                L = t
                            }
                            if (e.hasOwnProperty(n = "ALPHABET")) {
                                if ("string" != typeof(t = e[n]) || /^.?$|[+\-.\s]|(.).*\1/.test(t)) throw Error(s + n + " invalid: " + t);
                                D = t
                            }
                        }
                        return {
                            DECIMAL_PLACES: O,
                            ROUNDING_MODE: _,
                            EXPONENTIAL_AT: [S, C],
                            RANGE: [B, T],
                            CRYPTO: U,
                            MODULO_MODE: k,
                            POW_PRECISION: I,
                            FORMAT: L,
                            ALPHABET: D
                        }
                    }, F.isBigNumber = function(e) {
                        if (!e || !0 !== e._isBigNumber) return !1;
                        if (!F.DEBUG) return !0;
                        var n, t, r = e.c,
                            i = e.e,
                            o = e.s;
                        e: if ("[object Array]" == {}.toString.call(r)) {
                            if ((1 === o || -1 === o) && i >= -p && i <= p && i === a(i)) {
                                if (0 === r[0]) {
                                    if (0 === i && 1 === r.length) return !0;
                                    break e
                                }
                                if ((n = (i + 1) % h) < 1 && (n += h), String(r[0]).length == n) {
                                    for (n = 0; n < r.length; n++)
                                        if ((t = r[n]) < 0 || t >= l || t !== a(t)) break e;
                                    if (0 !== t) return !0
                                }
                            }
                        } else
                        if (null === r && null === i && (null === o || 1 === o || -1 === o)) return !0;
                        throw Error(s + "Invalid BigNumber: " + e)
                    }, F.maximum = F.max = function() {
                        return P(arguments, o.lt)
                    }, F.minimum = F.min = function() {
                        return P(arguments, o.gt)
                    }, F.random = function() {
                        var e = 9007199254740992,
                            n = Math.random() * e & 2097151 ? function() {
                                return a(Math.random() * e)
                            } : function() {
                                return 8388608 * (1073741824 * Math.random() | 0) + (8388608 * Math.random() | 0)
                            };
                        return function(e) {
                            var t, r, i, o, c, f = 0,
                                l = [],
                                d = new F(E);
                            if (null == e ? e = O : y(e, 0, p), o = u(e / h), U)
                                if (crypto.getRandomValues) {
                                    for (t = crypto.getRandomValues(new Uint32Array(o *= 2)); f < o;)(c = 131072 * t[f] + (t[f + 1] >>> 11)) >= 9e15 ? (r = crypto.getRandomValues(new Uint32Array(2)), t[f] = r[0], t[f + 1] = r[1]) : (l.push(c % 1e14), f += 2);
                                    f = o / 2
                                } else {
                                    if (!crypto.randomBytes) throw U = !1, Error(s + "crypto unavailable");
                                    for (t = crypto.randomBytes(o *= 7); f < o;)(c = 281474976710656 * (31 & t[f]) + 1099511627776 * t[f + 1] + 4294967296 * t[f + 2] + 16777216 * t[f + 3] + (t[f + 4] << 16) + (t[f + 5] << 8) + t[f + 6]) >= 9e15 ? crypto.randomBytes(7).copy(t, f) : (l.push(c % 1e14), f += 7);
                                    f = o / 7
                                }
                            if (!U)
                                for (; f < o;)(c = n()) < 9e15 && (l[f++] = c % 1e14);
                            for (o = l[--f], e %= h, o && e && (c = v[h - e], l[f] = a(o / c) * c); 0 === l[f]; l.pop(), f--);
                            if (f < 0) l = [i = 0];
                            else {
                                for (i = -1; 0 === l[0]; l.splice(0, 1), i -= h);
                                for (f = 1, c = l[0]; c >= 10; c /= 10, f++);
                                f < h && (i -= h - f)
                            }
                            return d.e = i, d.c = l, d
                        }
                    }(), F.sum = function() {
                        for (var e = 1, n = arguments, t = new F(n[0]); e < n.length;) t = t.plus(n[e++]);
                        return t
                    }, r = function() {
                        var e = "0123456789";

                        function n(e, n, t, r) {
                            for (var i, o, c = [0], u = 0, a = e.length; u < a;) {
                                for (o = c.length; o--; c[o] *= n);
                                for (c[0] += r.indexOf(e.charAt(u++)), i = 0; i < c.length; i++) c[i] > t - 1 && (null == c[i + 1] && (c[i + 1] = 0), c[i + 1] += c[i] / t | 0, c[i] %= t)
                            }
                            return c.reverse()
                        }
                        return function(r, i, o, c, u) {
                            var a, s, f, l, h, d, v, g, p = r.indexOf("."),
                                m = O,
                                b = _;
                            for (p >= 0 && (l = I, I = 0, r = r.replace(".", ""), d = (g = new F(i)).pow(r.length - p), I = l, g.c = n(x(w(d.c), d.e, "0"), 10, o, e), g.e = g.c.length), f = l = (v = n(r, i, o, u ? (a = D, e) : (a = e, D))).length; 0 == v[--l]; v.pop());
                            if (!v[0]) return a.charAt(0);
                            if (p < 0 ? --f : (d.c = v, d.e = f, d.s = c, v = (d = t(d, g, m, b, o)).c, h = d.r, f = d.e), p = v[s = f + m + 1], l = o / 2, h = h || s < 0 || null != v[s + 1], h = b < 4 ? (null != p || h) && (0 == b || b == (d.s < 0 ? 3 : 2)) : p > l || p == l && (4 == b || h || 6 == b && 1 & v[s - 1] || b == (d.s < 0 ? 8 : 7)), s < 1 || !v[0]) r = h ? x(a.charAt(1), -m, a.charAt(0)) : a.charAt(0);
                            else {
                                if (v.length = s, h)
                                    for (--o; ++v[--s] > o;) v[s] = 0, s || (++f, v = [1].concat(v));
                                for (l = v.length; !v[--l];);
                                for (p = 0, r = ""; p <= l; r += a.charAt(v[p++]));
                                r = x(r, f, a.charAt(0))
                            }
                            return r
                        }
                    }(), t = function() {
                        function e(e, n, t) {
                            var r, i, o, c, u = 0,
                                a = e.length,
                                s = n % g,
                                f = n / g | 0;
                            for (e = e.slice(); a--;) u = ((i = s * (o = e[a] % g) + (r = f * o + (c = e[a] / g | 0) * s) % g * g + u) / t | 0) + (r / g | 0) + f * c, e[a] = i % t;
                            return u && (e = [u].concat(e)), e
                        }

                        function n(e, n, t, r) {
                            var i, o;
                            if (t != r) o = t > r ? 1 : -1;
                            else
                                for (i = o = 0; i < t; i++)
                                    if (e[i] != n[i]) {
                                        o = e[i] > n[i] ? 1 : -1;
                                        break
                                    } return o
                        }

                        function t(e, n, t, r) {
                            for (var i = 0; t--;) e[t] -= i, i = e[t] < n[t] ? 1 : 0, e[t] = i * r + e[t] - n[t];
                            for (; !e[0] && e.length > 1; e.splice(0, 1));
                        }
                        return function(r, i, o, c, u) {
                            var s, f, d, v, g, p, w, b, y, A, N, x, E, O, _, S, C, B = r.s == i.s ? 1 : -1,
                                T = r.c,
                                U = i.c;
                            if (!T || !T[0] || !U || !U[0]) return new F(r.s && i.s && (T ? !U || T[0] != U[0] : U) ? T && 0 == T[0] || !U ? 0 * B : B / 0 : NaN);
                            for (y = (b = new F(B)).c = [], B = o + (f = r.e - i.e) + 1, u || (u = l, f = m(r.e / h) - m(i.e / h), B = B / h | 0), d = 0; U[d] == (T[d] || 0); d++);
                            if (U[d] > (T[d] || 0) && f--, B < 0) y.push(1), v = !0;
                            else {
                                for (O = T.length, S = U.length, d = 0, B += 2, (g = a(u / (U[0] + 1))) > 1 && (U = e(U, g, u), T = e(T, g, u), S = U.length, O = T.length), E = S, N = (A = T.slice(0, S)).length; N < S; A[N++] = 0);
                                C = U.slice(), C = [0].concat(C), _ = U[0], U[1] >= u / 2 && _++;
                                do {
                                    if (g = 0, (s = n(U, A, S, N)) < 0) {
                                        if (x = A[0], S != N && (x = x * u + (A[1] || 0)), (g = a(x / _)) > 1)
                                            for (g >= u && (g = u - 1), w = (p = e(U, g, u)).length, N = A.length; 1 == n(p, A, w, N);) g--, t(p, S < w ? C : U, w, u), w = p.length, s = 1;
                                        else 0 == g && (s = g = 1), w = (p = U.slice()).length;
                                        if (w < N && (p = [0].concat(p)), t(A, p, N, u), N = A.length, -1 == s)
                                            for (; n(U, A, S, N) < 1;) g++, t(A, S < N ? C : U, N, u), N = A.length
                                    } else 0 === s && (g++, A = [0]);
                                    y[d++] = g, A[0] ? A[N++] = T[E] || 0 : (A = [T[E]], N = 1)
                                } while ((E++ < O || null != A[0]) && B--);
                                v = null != A[0], y[0] || y.splice(0, 1)
                            }
                            if (u == l) {
                                for (d = 1, B = y[0]; B >= 10; B /= 10, d++);
                                z(b, o + (b.e = d + f * h - 1) + 1, c, v)
                            } else b.e = f, b.r = +v;
                            return b
                        }
                    }(), i = function() {
                        var e = /^(-?)0([xbo])(?=\w[\w.]*$)/i,
                            n = /^([^.]+)\.$/,
                            t = /^\.([^.]+)$/,
                            r = /^-?(Infinity|NaN)$/,
                            i = /^\s*\+(?=[\w.])|^\s+|\s+$/g;
                        return function(o, c, u, a) {
                            var f, l = u ? c : c.replace(i, "");
                            if (r.test(l)) o.s = isNaN(l) ? null : l < 0 ? -1 : 1;
                            else {
                                if (!u && (l = l.replace(e, (function(e, n, t) {
                                        return f = "x" == (t = t.toLowerCase()) ? 16 : "b" == t ? 2 : 8, a && a != f ? e : n
                                    })), a && (f = a, l = l.replace(n, "$1").replace(t, "0.$1")), c != l)) return new F(l, f);
                                if (F.DEBUG) throw Error(s + "Not a" + (a ? " base " + a : "") + " number: " + c);
                                o.s = null
                            }
                            o.c = o.e = null
                        }
                    }(), o.absoluteValue = o.abs = function() {
                        var e = new F(this);
                        return e.s < 0 && (e.s = 1), e
                    }, o.comparedTo = function(e, n) {
                        return b(this, new F(e, n))
                    }, o.decimalPlaces = o.dp = function(e, n) {
                        var t, r, i, o = this;
                        if (null != e) return y(e, 0, p), null == n ? n = _ : y(n, 0, 8), z(new F(o), e + o.e + 1, n);
                        if (!(t = o.c)) return null;
                        if (r = ((i = t.length - 1) - m(this.e / h)) * h, i = t[i])
                            for (; i % 10 == 0; i /= 10, r--);
                        return r < 0 && (r = 0), r
                    }, o.dividedBy = o.div = function(e, n) {
                        return t(this, new F(e, n), O, _)
                    }, o.dividedToIntegerBy = o.idiv = function(e, n) {
                        return t(this, new F(e, n), 0, 1)
                    }, o.exponentiatedBy = o.pow = function(e, n) {
                        var t, r, i, o, c, f, l, d, v = this;
                        if ((e = new F(e)).c && !e.isInteger()) throw Error(s + "Exponent not an integer: " + q(e));
                        if (null != n && (n = new F(n)), c = e.e > 14, !v.c || !v.c[0] || 1 == v.c[0] && !v.e && 1 == v.c.length || !e.c || !e.c[0]) return d = new F(Math.pow(+q(v), c ? 2 - A(e) : +q(e))), n ? d.mod(n) : d;
                        if (f = e.s < 0, n) {
                            if (n.c ? !n.c[0] : !n.s) return new F(NaN);
                            (r = !f && v.isInteger() && n.isInteger()) && (v = v.mod(n))
                        } else {
                            if (e.e > 9 && (v.e > 0 || v.e < -1 || (0 == v.e ? v.c[0] > 1 || c && v.c[1] >= 24e7 : v.c[0] < 8e13 || c && v.c[0] <= 9999975e7))) return o = v.s < 0 && A(e) ? -0 : 0, v.e > -1 && (o = 1 / o), new F(f ? 1 / o : o);
                            I && (o = u(I / h + 2))
                        }
                        for (c ? (t = new F(.5), f && (e.s = 1), l = A(e)) : l = (i = Math.abs(+q(e))) % 2, d = new F(E);;) {
                            if (l) {
                                if (!(d = d.times(v)).c) break;
                                o ? d.c.length > o && (d.c.length = o) : r && (d = d.mod(n))
                            }
                            if (i) {
                                if (0 === (i = a(i / 2))) break;
                                l = i % 2
                            } else if (z(e = e.times(t), e.e + 1, 1), e.e > 14) l = A(e);
                            else {
                                if (0 === (i = +q(e))) break;
                                l = i % 2
                            }
                            v = v.times(v), o ? v.c && v.c.length > o && (v.c.length = o) : r && (v = v.mod(n))
                        }
                        return r ? d : (f && (d = E.div(d)), n ? d.mod(n) : o ? z(d, I, _, undefined) : d)
                    }, o.integerValue = function(e) {
                        var n = new F(this);
                        return null == e ? e = _ : y(e, 0, 8), z(n, n.e + 1, e)
                    }, o.isEqualTo = o.eq = function(e, n) {
                        return 0 === b(this, new F(e, n))
                    }, o.isFinite = function() {
                        return !!this.c
                    }, o.isGreaterThan = o.gt = function(e, n) {
                        return b(this, new F(e, n)) > 0
                    }, o.isGreaterThanOrEqualTo = o.gte = function(e, n) {
                        return 1 === (n = b(this, new F(e, n))) || 0 === n
                    }, o.isInteger = function() {
                        return !!this.c && m(this.e / h) > this.c.length - 2
                    }, o.isLessThan = o.lt = function(e, n) {
                        return b(this, new F(e, n)) < 0
                    }, o.isLessThanOrEqualTo = o.lte = function(e, n) {
                        return -1 === (n = b(this, new F(e, n))) || 0 === n
                    }, o.isNaN = function() {
                        return !this.s
                    }, o.isNegative = function() {
                        return this.s < 0
                    }, o.isPositive = function() {
                        return this.s > 0
                    }, o.isZero = function() {
                        return !!this.c && 0 == this.c[0]
                    }, o.minus = function(e, n) {
                        var t, r, i, o, c = this,
                            u = c.s;
                        if (n = (e = new F(e, n)).s, !u || !n) return new F(NaN);
                        if (u != n) return e.s = -n, c.plus(e);
                        var a = c.e / h,
                            s = e.e / h,
                            f = c.c,
                            d = e.c;
                        if (!a || !s) {
                            if (!f || !d) return f ? (e.s = -n, e) : new F(d ? c : NaN);
                            if (!f[0] || !d[0]) return d[0] ? (e.s = -n, e) : new F(f[0] ? c : 3 == _ ? -0 : 0)
                        }
                        if (a = m(a), s = m(s), f = f.slice(), u = a - s) {
                            for ((o = u < 0) ? (u = -u, i = f) : (s = a, i = d), i.reverse(), n = u; n--; i.push(0));
                            i.reverse()
                        } else
                            for (r = (o = (u = f.length) < (n = d.length)) ? u : n, u = n = 0; n < r; n++)
                                if (f[n] != d[n]) {
                                    o = f[n] < d[n];
                                    break
                                } if (o && (i = f, f = d, d = i, e.s = -e.s), (n = (r = d.length) - (t = f.length)) > 0)
                            for (; n--; f[t++] = 0);
                        for (n = l - 1; r > u;) {
                            if (f[--r] < d[r]) {
                                for (t = r; t && !f[--t]; f[t] = n);
                                --f[t], f[r] += l
                            }
                            f[r] -= d[r]
                        }
                        for (; 0 == f[0]; f.splice(0, 1), --s);
                        return f[0] ? R(e, f, s) : (e.s = 3 == _ ? -1 : 1, e.c = [e.e = 0], e)
                    }, o.modulo = o.mod = function(e, n) {
                        var r, i, o = this;
                        return e = new F(e, n), !o.c || !e.s || e.c && !e.c[0] ? new F(NaN) : !e.c || o.c && !o.c[0] ? new F(o) : (9 == k ? (i = e.s, e.s = 1, r = t(o, e, 0, 3), e.s = i, r.s *= i) : r = t(o, e, 0, k), (e = o.minus(r.times(e))).c[0] || 1 != k || (e.s = o.s), e)
                    }, o.multipliedBy = o.times = function(e, n) {
                        var t, r, i, o, c, u, a, s, f, d, v, p, w, b, y, A = this,
                            N = A.c,
                            x = (e = new F(e, n)).c;
                        if (!N || !x || !N[0] || !x[0]) return !A.s || !e.s || N && !N[0] && !x || x && !x[0] && !N ? e.c = e.e = e.s = null : (e.s *= A.s, N && x ? (e.c = [0], e.e = 0) : e.c = e.e = null), e;
                        for (r = m(A.e / h) + m(e.e / h), e.s *= A.s, (a = N.length) < (d = x.length) && (w = N, N = x, x = w, i = a, a = d, d = i), i = a + d, w = []; i--; w.push(0));
                        for (b = l, y = g, i = d; --i >= 0;) {
                            for (t = 0, v = x[i] % y, p = x[i] / y | 0, o = i + (c = a); o > i;) t = ((s = v * (s = N[--c] % y) + (u = p * s + (f = N[c] / y | 0) * v) % y * y + w[o] + t) / b | 0) + (u / y | 0) + p * f, w[o--] = s % b;
                            w[o] = t
                        }
                        return t ? ++r : w.splice(0, 1), R(e, w, r)
                    }, o.negated = function() {
                        var e = new F(this);
                        return e.s = -e.s || null, e
                    }, o.plus = function(e, n) {
                        var t, r = this,
                            i = r.s;
                        if (n = (e = new F(e, n)).s, !i || !n) return new F(NaN);
                        if (i != n) return e.s = -n, r.minus(e);
                        var o = r.e / h,
                            c = e.e / h,
                            u = r.c,
                            a = e.c;
                        if (!o || !c) {
                            if (!u || !a) return new F(i / 0);
                            if (!u[0] || !a[0]) return a[0] ? e : new F(u[0] ? r : 0 * i)
                        }
                        if (o = m(o), c = m(c), u = u.slice(), i = o - c) {
                            for (i > 0 ? (c = o, t = a) : (i = -i, t = u), t.reverse(); i--; t.push(0));
                            t.reverse()
                        }
                        for ((i = u.length) - (n = a.length) < 0 && (t = a, a = u, u = t, n = i), i = 0; n;) i = (u[--n] = u[n] + a[n] + i) / l | 0, u[n] = l === u[n] ? 0 : u[n] % l;
                        return i && (u = [i].concat(u), ++c), R(e, u, c)
                    }, o.precision = o.sd = function(e, n) {
                        var t, r, i, o = this;
                        if (null != e && e !== !!e) return y(e, 1, p), null == n ? n = _ : y(n, 0, 8), z(new F(o), e, n);
                        if (!(t = o.c)) return null;
                        if (r = (i = t.length - 1) * h + 1, i = t[i]) {
                            for (; i % 10 == 0; i /= 10, r--);
                            for (i = t[0]; i >= 10; i /= 10, r++);
                        }
                        return e && o.e + 1 > r && (r = o.e + 1), r
                    }, o.shiftedBy = function(e) {
                        return y(e, -9007199254740991, d), this.times("1e" + e)
                    }, o.squareRoot = o.sqrt = function() {
                        var e, n, r, i, o, c = this,
                            u = c.c,
                            a = c.s,
                            s = c.e,
                            f = O + 4,
                            l = new F("0.5");
                        if (1 !== a || !u || !u[0]) return new F(!a || a < 0 && (!u || u[0]) ? NaN : u ? c : 1 / 0);
                        if (0 == (a = Math.sqrt(+q(c))) || a == 1 / 0 ? (((n = w(u)).length + s) % 2 == 0 && (n += "0"), a = Math.sqrt(+n), s = m((s + 1) / 2) - (s < 0 || s % 2), r = new F(n = a == 1 / 0 ? "5e" + s : (n = a.toExponential()).slice(0, n.indexOf("e") + 1) + s)) : r = new F(a + ""), r.c[0])
                            for ((a = (s = r.e) + f) < 3 && (a = 0);;)
                                if (o = r, r = l.times(o.plus(t(c, o, f, 1))), w(o.c).slice(0, a) === (n = w(r.c)).slice(0, a)) {
                                    if (r.e < s && --a, "9999" != (n = n.slice(a - 3, a + 1)) && (i || "4999" != n)) {
                                        +n && (+n.slice(1) || "5" != n.charAt(0)) || (z(r, r.e + O + 2, 1), e = !r.times(r).eq(c));
                                        break
                                    }
                                    if (!i && (z(o, o.e + O + 2, 0), o.times(o).eq(c))) {
                                        r = o;
                                        break
                                    }
                                    f += 4, a += 4, i = 1
                                }
                        return z(r, r.e + O + 1, _, e)
                    }, o.toExponential = function(e, n) {
                        return null != e && (y(e, 0, p), e++), M(this, e, n, 1)
                    }, o.toFixed = function(e, n) {
                        return null != e && (y(e, 0, p), e = e + this.e + 1), M(this, e, n)
                    }, o.toFormat = function(e, n, t) {
                        var r, i = this;
                        if (null == t) null != e && n && "object" == typeof n ? (t = n, n = null) : e && "object" == typeof e ? (t = e, e = n = null) : t = L;
                        else if ("object" != typeof t) throw Error(s + "Argument not an object: " + t);
                        if (r = i.toFixed(e, n), i.c) {
                            var o, c = r.split("."),
                                u = +t.groupSize,
                                a = +t.secondaryGroupSize,
                                f = t.groupSeparator || "",
                                l = c[0],
                                h = c[1],
                                d = i.s < 0,
                                v = d ? l.slice(1) : l,
                                g = v.length;
                            if (a && (o = u, u = a, a = o, g -= o), u > 0 && g > 0) {
                                for (o = g % u || u, l = v.substr(0, o); o < g; o += u) l += f + v.substr(o, u);
                                a > 0 && (l += f + v.slice(o)), d && (l = "-" + l)
                            }
                            r = h ? l + (t.decimalSeparator || "") + ((a = +t.fractionGroupSize) ? h.replace(new RegExp("\\d{" + a + "}\\B", "g"), "$&" + (t.fractionGroupSeparator || "")) : h) : l
                        }
                        return (t.prefix || "") + r + (t.suffix || "")
                    }, o.toFraction = function(e) {
                        var n, r, i, o, c, u, a, f, l, d, g, p, m = this,
                            b = m.c;
                        if (null != e && (!(a = new F(e)).isInteger() && (a.c || 1 !== a.s) || a.lt(E))) throw Error(s + "Argument " + (a.isInteger() ? "out of range: " : "not an integer: ") + q(a));
                        if (!b) return new F(m);
                        for (n = new F(E), l = r = new F(E), i = f = new F(E), p = w(b), c = n.e = p.length - m.e - 1, n.c[0] = v[(u = c % h) < 0 ? h + u : u], e = !e || a.comparedTo(n) > 0 ? c > 0 ? n : l : a, u = T, T = 1 / 0, a = new F(p), f.c[0] = 0; d = t(a, n, 0, 1), 1 != (o = r.plus(d.times(i))).comparedTo(e);) r = i, i = o, l = f.plus(d.times(o = l)), f = o, n = a.minus(d.times(o = n)), a = o;
                        return o = t(e.minus(r), i, 0, 1), f = f.plus(o.times(l)), r = r.plus(o.times(i)), f.s = l.s = m.s, g = t(l, i, c *= 2, _).minus(m).abs().comparedTo(t(f, r, c, _).minus(m).abs()) < 1 ? [l, i] : [f, r], T = u, g
                    }, o.toNumber = function() {
                        return +q(this)
                    }, o.toPrecision = function(e, n) {
                        return null != e && y(e, 1, p), M(this, e, n, 2)
                    }, o.toString = function(e) {
                        var n, t = this,
                            i = t.s,
                            o = t.e;
                        return null === o ? i ? (n = "Infinity", i < 0 && (n = "-" + n)) : n = "NaN" : (null == e ? n = o <= S || o >= C ? N(w(t.c), o) : x(w(t.c), o, "0") : 10 === e ? n = x(w((t = z(new F(t), O + o + 1, _)).c), t.e, "0") : (y(e, 2, D.length, "Base"), n = r(x(w(t.c), o, "0"), 10, e, i, !0)), i < 0 && t.c[0] && (n = "-" + n)), n
                    }, o.valueOf = o.toJSON = function() {
                        return q(this)
                    }, o._isBigNumber = !0, null != n && F.set(n), F
                }(), o.default = o.BigNumber = o, void 0 === (r = function() {
                    return o
                }.call(n, t, n, e)) || (e.exports = r)
            }()
        },
        lP7B: function(e) {
            ! function(n) {
                "use strict";
                var t = {
                    bytesToHex: function(e) {
                        return function(e) {
                            return e.map((function(e) {
                                return n = e.toString(16), t = 2, n.length > t ? n : Array(t - n.length + 1).join("0") + n;
                                var n, t
                            })).join("")
                        }(e)
                    },
                    hexToBytes: function(e) {
                        if (e.length % 2 === 1) throw new Error("hexToBytes can't have a string with an odd number of characters.");
                        return 0 === e.indexOf("0x") && (e = e.slice(2)), e.match(/../g).map((function(e) {
                            return parseInt(e, 16)
                        }))
                    }
                };
                e.exports ? e.exports = t : n.convertHex = t
            }(this)
        },
        L7D2: function(e) {
            ! function(n) {
                "use strict";
                var t = {
                    bytesToString: function(e) {
                        return e.map((function(e) {
                            return String.fromCharCode(e)
                        })).join("")
                    },
                    stringToBytes: function(e) {
                        return e.split("").map((function(e) {
                            return e.charCodeAt(0)
                        }))
                    }
                };
                t.UTF8 = {
                    bytesToString: function(e) {
                        return decodeURIComponent(escape(t.bytesToString(e)))
                    },
                    stringToBytes: function(e) {
                        return t.stringToBytes(unescape(encodeURIComponent(e)))
                    }
                }, e.exports ? e.exports = t : n.convertString = t
            }(this)
        },
        qs9Q: function(e, n, t) {
            ! function(n) {
                "use strict";
                var r = {};
                e.exports ? (r.bytesToHex = t("lP7B").bytesToHex, r.convertString = t("L7D2"), e.exports = u) : (r.bytesToHex = n.convertHex.bytesToHex, r.convertString = n.convertString, n.sha256 = u);
                var i = [];
                ! function() {
                    function e(e) {
                        for (var n = Math.sqrt(e), t = 2; t <= n; t++)
                            if (!(e % t)) return !1;
                        return !0
                    }

                    function n(e) {
                        return 4294967296 * (e - (0 | e)) | 0
                    }
                    for (var t = 2, r = 0; r < 64;) e(t) && (i[r] = n(Math.pow(t, 1 / 3)), r++), t++
                }();
                var o = [],
                    c = function(e, n, t) {
                        for (var r = e[0], c = e[1], u = e[2], a = e[3], s = e[4], f = e[5], l = e[6], h = e[7], d = 0; d < 64; d++) {
                            if (d < 16) o[d] = 0 | n[t + d];
                            else {
                                var v = o[d - 15],
                                    g = (v << 25 | v >>> 7) ^ (v << 14 | v >>> 18) ^ v >>> 3,
                                    p = o[d - 2],
                                    m = (p << 15 | p >>> 17) ^ (p << 13 | p >>> 19) ^ p >>> 10;
                                o[d] = g + o[d - 7] + m + o[d - 16]
                            }
                            var w = r & c ^ r & u ^ c & u,
                                b = (r << 30 | r >>> 2) ^ (r << 19 | r >>> 13) ^ (r << 10 | r >>> 22),
                                y = h + ((s << 26 | s >>> 6) ^ (s << 21 | s >>> 11) ^ (s << 7 | s >>> 25)) + (s & f ^ ~s & l) + i[d] + o[d];
                            h = l, l = f, f = s, s = a + y | 0, a = u, u = c, c = r, r = y + (b + w) | 0
                        }
                        e[0] = e[0] + r | 0, e[1] = e[1] + c | 0, e[2] = e[2] + u | 0, e[3] = e[3] + a | 0, e[4] = e[4] + s | 0, e[5] = e[5] + f | 0, e[6] = e[6] + l | 0, e[7] = e[7] + h | 0
                    };

                function u(e, n) {
                    e.constructor === String && (e = r.convertString.UTF8.stringToBytes(e));
                    var t = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225],
                        i = function(e) {
                            for (var n = [], t = 0, r = 0; t < e.length; t++, r += 8) n[r >>> 5] |= e[t] << 24 - r % 32;
                            return n
                        }(e),
                        o = 8 * e.length;
                    i[o >> 5] |= 128 << 24 - o % 32, i[15 + (o + 64 >> 9 << 4)] = o;
                    for (var u = 0; u < i.length; u += 16) c(t, i, u);
                    var a = function(e) {
                        for (var n = [], t = 0; t < 32 * e.length; t += 8) n.push(e[t >>> 5] >>> 24 - t % 32 & 255);
                        return n
                    }(t);
                    return n && n.asBytes ? a : n && n.asString ? r.convertString.bytesToString(a) : r.bytesToHex(a)
                }
                u.x2 = function(e, n) {
                    return u(u(e, {
                        asBytes: !0
                    }), n)
                }
            }(this)
        }
    }
]);
//# debugId=53421698-a7bd-55b1-ac1f-bd3ba44dda5a