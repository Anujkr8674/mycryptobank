! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "46952f34-e84a-5b88-b1d1-39ad6c2e7466")
    } catch (e) {}
}();
(self.webpackChunkreferral_ui = self.webpackChunkreferral_ui || []).push([
    [1209], {
        ZJJD: (e, t, n) => {
            "use strict";
            n.d(t, {
                v: () => w
            });
            var i = n("sViW"),
                r = n("Pz56"),
                o = n.n(r),
                a = n("UqW6"),
                c = n("DTvD"),
                s = n("Zu1U"),
                l = n("NoXm"),
                u = n("HIvj"),
                d = n("fqkG"),
                p = n("l+4Q"),
                f = n("beiq"),
                h = n("xSa8"),
                m = n("VUQ6"),
                v = function(e, t) {
                    var n = e.params,
                        r = void 0 === n ? {} : n,
                        a = e.autoLogin,
                        m = void 0 !== a && a,
                        v = e.returnToUrl,
                        b = e.onCallback,
                        g = (0, s.S)().isHybrid,
                        w = (0, h.b)(),
                        y = w.isLoggedIn,
                        x = w.isLoading,
                        _ = ((null === u.G || void 0 === u.G ? void 0 : (0, u.G)()) || {}).setUserCenter,
                        k = (0, c.useCallback)((0, i.A)(o().mark((function e() {
                            var n, i, a, c, s;
                            return o().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!g || t) {
                                            e.next = 9;
                                            break
                                        }
                                        return e.next = 3, d.A.ensureLogged();
                                    case 3:
                                        n = e.sent, i = n.logged, a = n.alreadyLogged, (i || a) && (null === l.cachePromiseStore || void 0 === l.cachePromiseStore || null === (c = l.cachePromiseStore.setState) || void 0 === c || c.call(l.cachePromiseStore, "loginIn", !0), null === l.cachePromiseStore || void 0 === l.cachePromiseStore || null === (s = l.cachePromiseStore.setState) || void 0 === s || s.call(l.cachePromiseStore, "loginIn-loading", !1), null === _ || void 0 === _ || _("loginStatus", {
                                            isLoggedIn: !0,
                                            isLoading: !1
                                        }), b && b()), e.next = 10;
                                        break;
                                    case 9:
                                        (0, f.i)(r, v);
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), [r, v]);
                    return (0, p.t)(r.registerChannel), (0, c.useEffect)((function() {
                        !m || x || y || k()
                    }), [y, x, k]), {
                        login: k,
                        isLoggedIn: y,
                        isLoading: x
                    }
                },
                b = function(e) {
                    return v(e, !1)
                },
                g = function(e) {
                    return (0, m.U)({
                        onCallback: e.onCallback
                    }), v(e, !0)
                },
                w = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return ((0, a.A)(e.params) ? b : g)(e)
                }
        },
        VUQ6: (e, t, n) => {
            "use strict";
            n.d(t, {
                U: () => c
            });
            var i = n("DTvD"),
                r = n("Y9i2"),
                o = function(e) {
                    (0, i.useEffect)((function() {
                        var t = function(e) {
                            return function(t) {
                                return e(t, "visible" === document.visibilityState)
                            }
                        }(e);
                        return document.addEventListener("visibilitychange", t),
                            function() {
                                document.removeEventListener("visibilitychange", t)
                            }
                    }), [e])
                },
                a = n("xSa8"),
                c = function() {
                    var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).onCallback,
                        t = (0, a.b)(),
                        n = t.isLoggedIn,
                        c = t.isLoading,
                        s = (0, i.useCallback)((function(t, i) {
                            r.lL && !c && !n && i && (e ? e() : window.location.reload())
                        }), [n, c]);
                    o(s)
                }
        },
        beiq: (e, t, n) => {
            "use strict";
            n.d(t, {
                i: () => c
            });
            var i = n("aVXY"),
                r = n("tEf9"),
                o = n("XaLc"),
                a = n("VnLv");

            function c(e, t, n) {
                var c = (0, i.A)("string" === typeof e ? [t, n] : [e, t], 2),
                    s = c[0],
                    l = c[1];
                (0, o.Z)(function() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    return a.A.apply(void 0, ["login"].concat((0, r.A)(t)))
                }(s, l))
            }
        },
        VnLv: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var i = n("BK7R"),
                r = n("gZfF"),
                o = n("ZjQP"),
                a = n("/4G5"),
                c = n("decL"),
                s = n("W0y1"),
                l = n("ohKi"),
                u = n("dY7O"),
                d = function(e) {
                    var t, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        d = arguments.length > 2 ? arguments[2] : void 0,
                        p = n.return_to,
                        f = void 0 === p ? null !== d && void 0 !== d ? d : c.nk : p,
                        h = n.host,
                        m = void 0 === h ? c.A5 : h,
                        v = n.loginChannel,
                        b = n.registerChannel,
                        g = (0, r.A)(n, ["return_to", "host", "loginChannel", "registerChannel"]),
                        w = (0, s.e)("ref", "vc", "loginChannel", "registerChannel", "utm_source", "utm_campaign", "utm_medium"),
                        y = {
                            loginChannel: null !== (t = null !== v && void 0 !== v ? v : w.loginChannel) && void 0 !== t ? t : "login" === e ? null !== b && void 0 !== b ? b : w.registerChannel : null,
                            registerChannel: b
                        },
                        x = {
                            params: (0, i.A)({}, w, g, (0, o.A)(y, a.A)),
                            encodedParams: f ? {
                                return_to: f
                            } : void 0
                        };
                    return {
                        hybrid: (0, l.Px)("/setting/".concat(e), x),
                        web: (0, l.hL)("https://accounts.".concat((0, u.f)(m), "/").concat(e), x)
                    }
                }
        },
        Y9i2: (e, t, n) => {
            "use strict";
            n.d(t, {
                ZL: () => c,
                lL: () => a
            });
            var i = n("Zu1U"),
                r = n("5tkj"),
                o = n("+vuS"),
                a = (0, i.S)().isHybrid,
                c = !r.cz && !a && !o.q
        },
        "pA+i": (e, t, n) => {
            "use strict";
            n.d(t, {
                Q: () => o
            });
            var i = n("DTvD"),
                r = n("40we"),
                o = function() {
                    var e = (0, i.useContext)(r.g),
                        t = e.mobile,
                        n = e.tablet,
                        o = e.desktop;
                    return (0, i.useMemo)((function() {
                        return {
                            isTablet: n,
                            isMobile: t,
                            isDesktop: o
                        }
                    }), [t, n, o])
                }
        },
        "l+4Q": (e, t, n) => {
            "use strict";
            n.d(t, {
                t: () => a
            });
            var i = n("aVXY"),
                r = n("DTvD"),
                o = n("HS2I"),
                a = function(e) {
                    var t = (0, i.A)((0, o.useBizChannel)(), 2)[1];
                    (0, r.useEffect)((function() {
                        e && t(e)
                    }), [e, t])
                }
        },
        "+vuS": (e, t, n) => {
            "use strict";
            n.d(t, {
                q: () => i
            });
            var i = window.__NEZHA_BRIDGE__ && !window.__NEZHA_BRIDGE__.postAction
        },
        "n3+s": (e, t, n) => {
            "use strict";
            n.d(t, {
                Rk: () => c,
                oe: () => a,
                qL: () => o
            });
            var i = n("fLtG"),
                r = function(e) {
                    return function(t, n) {
                        return (0, i.u)(e, t, n)
                    }
                },
                o = r("webClick"),
                a = r("pageView"),
                c = r("ModuleView");
            r("pageQuit")
        },
        dY7O: (e, t, n) => {
            "use strict";
            n.d(t, {
                f: () => o
            });
            var i = n("LKsJ"),
                r = ".";
            var o = function(e) {
                return function() {
                    var e, t, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2,
                        o = arguments.length > 1 ? arguments[1] : void 0,
                        a = null !== (t = null !== o && void 0 !== o ? o : null === i.Ke || void 0 === i.Ke || null === (e = i.Ke.location) || void 0 === e ? void 0 : e.hostname) && void 0 !== t ? t : "",
                        c = a.split(r);
                    return c.length > n ? c.slice(-n).join(r) : a
                }(2, e)
            }
        },
        XaLc: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => a
            });
            var i = n("Zu1U"),
                r = n("fqkG"),
                o = n("ohKi"),
                a = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                        n = (0, i.S)(),
                        a = n.isHybrid,
                        c = n.clientType,
                        s = /electron/i.test(navigator.userAgent),
                        l = e.web,
                        u = e.hybrid,
                        d = e.electron,
                        p = e.external;
                    if (a)
                        if (p) r.A.open({
                            link: (0, o.hL)("bnc://app.binance.com/mp/app?appId=ZvaPKhYnqyTfxjcXyk5VXe&startPagePath=cGFnZXMvaW5kZXgvaW5kZXg", {
                                encodedParams: {
                                    startPageQuery: "url=".concat(p)
                                }
                            })
                        });
                        else {
                            var f = e[null === c || void 0 === c ? void 0 : c.toLowerCase()] || u || l,
                                h = /^bnc:/i.test(f) ? f : (0, o.um)(f);
                            r.A.open({
                                link: h
                            })
                        }
                    else s ? window.open(d || l) : window.open(l || p, t ? "_blank" : "_self")
                }
        },
        "+91c": (e, t, n) => {
            "use strict";
            n.d(t, {
                _: () => d
            });
            var i = n("sViW"),
                r = n("Pz56"),
                o = n.n(r),
                a = n("DTvD"),
                c = n("OKcK"),
                s = n("0HvA"),
                l = n("ohKi"),
                u = n("kg2c"),
                d = function(e, t) {
                    var n = (0, a.useMemo)((function() {
                            return (0, l.Rd)("/useUserEligibility", {
                                params: e
                            })
                        }), []),
                        r = (0, c.A)(n, (0, i.A)(o().mark((function n() {
                            var i;
                            return o().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.prev = 0, n.next = 3, (0, u.jD)(e, t);
                                    case 3:
                                        if ((null === (i = n.sent) || void 0 === i ? void 0 : i.success) && (null === i || void 0 === i ? void 0 : i.data)) {
                                            n.next = 6;
                                            break
                                        }
                                        throw new Error("Invalid User Eligiblity data");
                                    case 6:
                                        return n.abrupt("return", i.data);
                                    case 9:
                                        return n.prev = 9, n.t0 = n.catch(0), s.vF.error("[utils | useUserEligibility] check error"), s.vF.error(n.t0), n.abrupt("return", null);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [0, 9]
                            ])
                        })))),
                        d = r.data,
                        p = void 0 === d ? null : d;
                    return {
                        isChecking: r.isValidating,
                        userEligibility: p
                    }
                }
        },
        uHHT: (e, t, n) => {
            var i;
            ! function(r, o) {
                "use strict";
                var a = "function",
                    c = "undefined",
                    s = "object",
                    l = "string",
                    u = "model",
                    d = "name",
                    p = "type",
                    f = "vendor",
                    h = "version",
                    m = "architecture",
                    v = "console",
                    b = "mobile",
                    g = "tablet",
                    w = "smarttv",
                    y = "wearable",
                    x = "embedded",
                    _ = "Amazon",
                    k = "Apple",
                    C = "ASUS",
                    E = "BlackBerry",
                    A = "Firefox",
                    S = "Google",
                    T = "Huawei",
                    L = "LG",
                    O = "Microsoft",
                    I = "Motorola",
                    D = "Opera",
                    R = "Samsung",
                    P = "Sharp",
                    j = "Sony",
                    N = "Xiaomi",
                    M = "Zebra",
                    U = "Facebook",
                    H = function(e) {
                        for (var t = {}, n = 0; n < e.length; n++) t[e[n].toUpperCase()] = e[n];
                        return t
                    },
                    V = function(e, t) {
                        return typeof e === l && -1 !== B(t).indexOf(B(e))
                    },
                    B = function(e) {
                        return e.toLowerCase()
                    },
                    F = function(e, t) {
                        if (typeof e === l) return e = e.replace(/^\s\s*/, "").replace(/\s\s*$/, ""), typeof t === c ? e : e.substring(0, 350)
                    },
                    z = function(e, t) {
                        for (var n, i, r, c, l, u, d = 0; d < t.length && !l;) {
                            var p = t[d],
                                f = t[d + 1];
                            for (n = i = 0; n < p.length && !l;)
                                if (l = p[n++].exec(e))
                                    for (r = 0; r < f.length; r++) u = l[++i], typeof(c = f[r]) === s && c.length > 0 ? 2 === c.length ? typeof c[1] == a ? this[c[0]] = c[1].call(this, u) : this[c[0]] = c[1] : 3 === c.length ? typeof c[1] !== a || c[1].exec && c[1].test ? this[c[0]] = u ? u.replace(c[1], c[2]) : o : this[c[0]] = u ? c[1].call(this, u, c[2]) : o : 4 === c.length && (this[c[0]] = u ? c[3].call(this, u.replace(c[1], c[2])) : o) : this[c] = u || o;
                            d += 2
                        }
                    },
                    W = function(e, t) {
                        for (var n in t)
                            if (typeof t[n] === s && t[n].length > 0) {
                                for (var i = 0; i < t[n].length; i++)
                                    if (V(t[n][i], e)) return "?" === n ? o : n
                            } else if (V(t[n], e)) return "?" === n ? o : n;
                        return e
                    },
                    q = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    Z = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [h, [d, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [h, [d, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [d, h],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [h, [d, "Opera Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [h, [d, D]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [d, h],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [h, [d, "UCBrowser"]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                            [h, [d, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [h, [d, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [h, [d, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [h, [d, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [h, [d, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Secure Browser"], h
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [h, [d, "Firefox Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [h, [d, "Opera Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [h, [d, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [h, [d, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [h, [d, "Opera Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [h, [d, "MIUI Browser"]],
                            [/fxios\/([-\w\.]+)/i],
                            [h, [d, A]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [d, "360 Browser"]
                            ],
                            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Browser"], h
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [d, /_/g, " "], h
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [d, h],
                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [d],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [d, U], h
                            ],
                            [/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                            [d, h],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [h, [d, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [h, [d, "Chrome Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [d, "Chrome WebView"], h
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [h, [d, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [d, h],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [h, [d, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [h, d],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [d, [h, W, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [d, h],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [d, "Netscape"], h
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [h, [d, "Firefox Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i],
                            [d, h]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [m, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [m, B]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [m, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [m, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [m, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [m, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [m, /ower/, "", B]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [m, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [m, B]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [u, [f, R],
                                [p, g]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [u, [f, R],
                                [p, b]
                            ],
                            [/\((ip(?:hone|od)[\w ]*);/i],
                            [u, [f, k],
                                [p, b]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [u, [f, k],
                                [p, g]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [u, [f, T],
                                [p, g]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [u, [f, T],
                                [p, b]
                            ],
                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [u, /_/g, " "],
                                [f, N],
                                [p, b]
                            ],
                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [u, /_/g, " "],
                                [f, N],
                                [p, g]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [u, [f, "OPPO"],
                                [p, b]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [u, [f, "Vivo"],
                                [p, b]
                            ],
                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                            [u, [f, "Realme"],
                                [p, b]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [u, [f, I],
                                [p, b]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [u, [f, I],
                                [p, g]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [u, [f, L],
                                [p, g]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [u, [f, L],
                                [p, b]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [u, [f, "Lenovo"],
                                [p, g]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [u, /_/g, " "],
                                [f, "Nokia"],
                                [p, b]
                            ],
                            [/(pixel c)\b/i],
                            [u, [f, S],
                                [p, g]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [u, [f, S],
                                [p, b]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [u, [f, j],
                                [p, b]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [u, "Xperia Tablet"],
                                [f, j],
                                [p, g]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [u, [f, "OnePlus"],
                                [p, b]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [u, [f, _],
                                [p, g]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [u, /(.+)/g, "Fire Phone $1"],
                                [f, _],
                                [p, b]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [u, f, [p, g]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [u, [f, E],
                                [p, b]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [u, [f, C],
                                [p, g]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [u, [f, C],
                                [p, b]
                            ],
                            [/(nexus 9)/i],
                            [u, [f, "HTC"],
                                [p, g]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [f, [u, /_/g, " "],
                                [p, b]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [u, [f, "Acer"],
                                [p, g]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [u, [f, "Meizu"],
                                [p, b]
                            ],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [u, [f, P],
                                [p, b]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [f, u, [p, b]],
                            [/(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [f, u, [p, g]],
                            [/(surface duo)/i],
                            [u, [f, O],
                                [p, g]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [u, [f, "Fairphone"],
                                [p, b]
                            ],
                            [/(u304aa)/i],
                            [u, [f, "AT&T"],
                                [p, b]
                            ],
                            [/\bsie-(\w*)/i],
                            [u, [f, "Siemens"],
                                [p, b]
                            ],
                            [/\b(rct\w+) b/i],
                            [u, [f, "RCA"],
                                [p, g]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [u, [f, "Dell"],
                                [p, g]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [u, [f, "Verizon"],
                                [p, g]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [u, [f, "Barnes & Noble"],
                                [p, g]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [u, [f, "NuVision"],
                                [p, g]
                            ],
                            [/\b(k88) b/i],
                            [u, [f, "ZTE"],
                                [p, g]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [u, [f, "ZTE"],
                                [p, b]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [u, [f, "Swiss"],
                                [p, b]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [u, [f, "Swiss"],
                                [p, g]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [u, [f, "Zeki"],
                                [p, g]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [f, "Dragon Touch"], u, [p, g]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [u, [f, "Insignia"],
                                [p, g]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [u, [f, "NextBook"],
                                [p, g]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [f, "Voice"], u, [p, b]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [f, "LvTel"], u, [p, b]
                            ],
                            [/\b(ph-1) /i],
                            [u, [f, "Essential"],
                                [p, b]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [u, [f, "Envizen"],
                                [p, g]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [u, [f, "MachSpeed"],
                                [p, g]
                            ],
                            [/\btu_(1491) b/i],
                            [u, [f, "Rotor"],
                                [p, g]
                            ],
                            [/(shield[\w ]+) b/i],
                            [u, [f, "Nvidia"],
                                [p, g]
                            ],
                            [/(sprint) (\w+)/i],
                            [f, u, [p, b]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [u, /\./g, " "],
                                [f, O],
                                [p, b]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [u, [f, M],
                                [p, g]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [u, [f, M],
                                [p, b]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [f, u, [p, v]],
                            [/droid.+; (shield) bui/i],
                            [u, [f, "Nvidia"],
                                [p, v]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [u, [f, j],
                                [p, v]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [u, [f, O],
                                [p, v]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [f, [p, w]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [u, /^/, "SmartTV"],
                                [f, R],
                                [p, w]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [f, L],
                                [p, w]
                            ],
                            [/(apple) ?tv/i],
                            [f, [u, "Apple TV"],
                                [p, w]
                            ],
                            [/crkey/i],
                            [
                                [u, "Chromecast"],
                                [f, S],
                                [p, w]
                            ],
                            [/droid.+aft(\w)( bui|\))/i],
                            [u, [f, _],
                                [p, w]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [u, [f, P],
                                [p, w]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [u, [f, j],
                                [p, w]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [u, [f, N],
                                [p, w]
                            ],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w ]*; *(\w[^;]*);([^;]*)/i],
                            [
                                [f, F],
                                [u, F],
                                [p, w]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [p, w]
                            ],
                            [/((pebble))app/i],
                            [f, u, [p, y]],
                            [/droid.+; (glass) \d/i],
                            [u, [f, S],
                                [p, y]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [u, [f, M],
                                [p, y]
                            ],
                            [/(quest( 2)?)/i],
                            [u, [f, U],
                                [p, y]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [f, [p, x]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                            [u, [p, b]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [u, [p, g]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [p, g]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [p, b]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [u, [f, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [h, [d, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [h, [d, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i],
                            [d, h],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [h, d]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [d, h],
                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                            [d, [h, W, q]],
                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [d, "Windows"],
                                [h, W, q]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [h, /_/g, "."],
                                [d, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [d, "Mac OS"],
                                [h, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [h, d],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [d, h],
                            [/\(bb(10);/i],
                            [h, [d, E]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [h, [d, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [h, [d, "Firefox OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [h, [d, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [h, [d, "Chromecast"]],
                            [/(cros) [\w]+ ([\w\.]+\w)/i],
                            [
                                [d, "Chromium OS"], h
                            ],
                            [/(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [d, h],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [d, "Solaris"], h
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i],
                            [d, h]
                        ]
                    },
                    G = function(e, t) {
                        if (typeof e === s && (t = e, e = o), !(this instanceof G)) return new G(e, t).getResult();
                        var n = e || (typeof r !== c && r.navigator && r.navigator.userAgent ? r.navigator.userAgent : ""),
                            i = t ? function(e, t) {
                                var n = {};
                                for (var i in e) t[i] && t[i].length % 2 === 0 ? n[i] = t[i].concat(e[i]) : n[i] = e[i];
                                return n
                            }(Z, t) : Z;
                        return this.getBrowser = function() {
                            var e, t = {};
                            return t.name = o, t.version = o, z.call(t, n, i.browser), t.major = typeof(e = t.version) === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : o, t
                        }, this.getCPU = function() {
                            var e = {};
                            return e.architecture = o, z.call(e, n, i.cpu), e
                        }, this.getDevice = function() {
                            var e = {};
                            return e.vendor = o, e.model = o, e.type = o, z.call(e, n, i.device), e
                        }, this.getEngine = function() {
                            var e = {};
                            return e.name = o, e.version = o, z.call(e, n, i.engine), e
                        }, this.getOS = function() {
                            var e = {};
                            return e.name = o, e.version = o, z.call(e, n, i.os), e
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return n
                        }, this.setUA = function(e) {
                            return n = typeof e === l && e.length > 350 ? F(e, 350) : e, this
                        }, this.setUA(n), this
                    };
                G.VERSION = "1.0.32", G.BROWSER = H([d, h, "major"]), G.CPU = H([m]), G.DEVICE = H([u, f, p, v, b, w, g, y, x]), G.ENGINE = G.OS = H([d, h]), typeof t !== c ? (e.exports && (t = e.exports = G), t.UAParser = G) : n.amdO ? (i = function() {
                    return G
                }.call(t, n, t, e)) === o || (e.exports = i) : typeof r !== c && (r.UAParser = G);
                var $ = typeof r !== c && (r.jQuery || r.Zepto);
                if ($ && !$.ua) {
                    var K = new G;
                    $.ua = K.getResult(), $.ua.get = function() {
                        return K.getUA()
                    }, $.ua.set = function(e) {
                        K.setUA(e);
                        var t = K.getResult();
                        for (var n in t) $.ua[n] = t[n]
                    }
                }
            }(window)
        },
        AJ9A: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => w
            });
            var i = n("BK7R"),
                r = n("aVXY"),
                o = n("6wEY"),
                a = n("ZJJD"),
                c = n("0HvA"),
                s = n("+91c"),
                l = n("yhUQ"),
                u = n("kxKT"),
                d = n("LCuF"),
                p = n("cJDP"),
                f = n("1eoB"),
                h = n("ycr1"),
                m = n("DTvD"),
                v = n.n(m),
                b = function(e) {
                    var t = e.content,
                        n = e.defaultRender;
                    return "string" === typeof t ? n(t) : t
                },
                g = function(e) {
                    var t = e.title,
                        n = e.desc;
                    return n ? v().createElement(v().Fragment, null, v().createElement(b, {
                        content: t,
                        defaultRender: function(e) {
                            return v().createElement(l.A, {
                                mt: "8px",
                                variant: "subtitle1",
                                color: "t.primary"
                            }, e)
                        }
                    }), v().createElement(b, {
                        content: n,
                        defaultRender: function(e) {
                            return v().createElement(l.A, {
                                mt: "8px",
                                variant: "body1",
                                color: "t.primary"
                            }, e)
                        }
                    })) : v().createElement(b, {
                        content: t,
                        defaultRender: function(e) {
                            return v().createElement(l.A, {
                                mt: "16px",
                                variant: "subtitle1",
                                color: "t.primary",
                                sx: {
                                    whiteSpace: "pre-line"
                                }
                            }, e)
                        }
                    })
                };
            const w = function(e) {
                var t = e.apiParams,
                    n = e.checkFn,
                    l = void 0 === n ? function(e) {
                        return e.passed
                    } : n,
                    b = e.callback,
                    w = e.nonLoginTitle,
                    y = e.nonLoginDesc,
                    x = e.loggedInTitle,
                    _ = e.loggedInDesc,
                    k = e.nonLoginButtonText,
                    C = e.loggedInButtonText,
                    E = e.closableButtonText,
                    A = void 0 === E ? "OK" : E,
                    S = e.closableCheckFn,
                    T = void 0 === S ? function() {
                        return !1
                    } : S,
                    L = e.onCTAClick,
                    O = e.apiCheckFailedText,
                    I = void 0 === O ? "Unexpected Error" : O,
                    D = e.maskStyleSx,
                    R = void 0 === D ? {} : D,
                    P = (0, r.A)((0, m.useState)(!1), 2),
                    j = P[0],
                    N = P[1],
                    M = (0, r.A)((0, m.useState)(!1), 2),
                    U = M[0],
                    H = M[1],
                    V = (0, h.A)().enqueueNotification,
                    B = (0, a.v)(),
                    F = B.login,
                    z = B.isLoggedIn,
                    W = B.isLoading,
                    q = (0, m.useCallback)((function() {
                        I && V(I, {
                            variant: "error",
                            anchorOrigin: {
                                vertical: "top",
                                horizontal: "right"
                            }
                        }), c.vF.error("[CSR] User Eligibility Check failed")
                    }), [I, V]),
                    Z = (0, s._)(t, q),
                    G = Z.isChecking,
                    $ = Z.userEligibility;
                return (0, m.useEffect)((function() {
                    !G && $ && (l($) || (N(!0), H(!!(null === T || void 0 === T ? void 0 : T($)))), null === b || void 0 === b || b($))
                }), [G, $]), W ? null : v().createElement(u.A, {
                    width: "298px",
                    visible: j,
                    maskStyles: (0, i.A)({
                        bg: "#1E2329B3 !important",
                        backdropFilter: "blur(10px)",
                        zIndex: 10005
                    }, R)
                }, v().createElement(d.A, {
                    p: "29px 24px 24px",
                    textAlign: "center"
                }, v().createElement(f.A, {
                    size: 80
                }), v().createElement(g, {
                    title: z && x || w,
                    desc: z && _ || y
                }), v().createElement(p.A, {
                    mt: "24px",
                    width: "100%",
                    p: "10px 12px",
                    onClick: function() {
                        L ? (U && N(!1), L()) : U ? N(!1) : z ? (0, o.e)() : F()
                    }
                }, U ? A || k : z && C || k)))
            }
        },
        "6wEY": (e, t, n) => {
            "use strict";
            n.d(t, {
                e: () => c
            });
            var i = n("Y9i2"),
                r = n("fqkG"),
                o = n("XaLc"),
                a = n("6pFG"),
                c = function() {
                    i.lL ? r.A.back() : (0, o.Z)({
                        web: "/",
                        hybrid: a.rh
                    })
                }
        },
        "dn+i": (e, t, n) => {
            "use strict";
            n.d(t, {
                Rm: () => o
            });
            n("DTvD");
            var i = n("xIah"),
                r = function(e) {
                    return e.ssrStore || {}
                },
                o = function() {
                    return (0, i.d4)(r)
                }
        },
        ggWC: (e, t, n) => {
            "use strict";
            n.d(t, {
                S$: () => i,
                cp: () => r
            });
            var i = !1,
                r = !i && window.__RUN_BY_ELECTRON__
        },
        BNuK: (e, t, n) => {
            "use strict";
            n.d(t, {
                Gz: () => o,
                Rf: () => r
            });
            var i = n("ggWC"),
                r = function(e) {
                    try {
                        return JSON.parse(e)
                    } catch (t) {
                        return {}
                    }
                },
                o = function() {
                    if (i.S$) return "";
                    var e = window.navigator.userAgent;
                    return /android/i.test(e) ? "android" : /ipad|iphone|ipod/i.test(e) ? "ios" : ""
                }
        },
        cJDP: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => v
            });
            var i = n("M5j3"),
                r = n("BK7R"),
                o = n("tEf9"),
                a = n("DTvD"),
                c = n.n(a),
                s = n("6aZm"),
                l = n("LCuF"),
                u = {
                    large: {
                        px: "md",
                        py: "ls",
                        fontSize: "md",
                        lineHeight: "24px",
                        minWidth: "80px"
                    },
                    normal: {
                        px: "sm",
                        py: "s",
                        fontSize: "sm",
                        lineHeight: "20px",
                        minWidth: "60px"
                    },
                    small: {
                        px: "ls",
                        py: "xxs",
                        fontSize: "sm",
                        lineHeight: "20px",
                        minWidth: "52px"
                    },
                    tiny: {
                        px: "xs",
                        py: "minor",
                        fontSize: "xs",
                        lineHeight: "16px",
                        minWidth: "40px"
                    },
                    dwarf: {
                        px: "ls",
                        py: "tiny",
                        fontSize: "sm",
                        lineHeight: "20px",
                        minWidth: "123px"
                    },
                    giant: {
                        px: "md",
                        py: "xs",
                        fontSize: "md",
                        lineHeight: "24px",
                        minWidth: "100%"
                    }
                },
                d = {
                    xl: u.large,
                    l: u.normal,
                    m: u.small,
                    s: u.tiny,
                    xs: {
                        px: 8,
                        py: 4,
                        fontSize: "12px",
                        lineHeight: "12px",
                        minHeight: "auto"
                    }
                };
            const p = (0, r.A)({}, u, d);
            var f = function(e, t) {
                    return "primary" === e ? "primary.default" : "outline" === e ? "default.secondary" : "".concat(e, ".").concat((n = "outline" === e ? "default" : "primary", t || n));
                    var n
                },
                h = (0, s.UF)("uikit-core", "Button"),
                m = (0, a.forwardRef)((function(e, t) {
                    h();
                    var n = e.variant,
                        a = void 0 === n ? "default" : n,
                        s = e.colorStyle,
                        u = e.sz,
                        d = void 0 === u ? "small" : u,
                        m = e.inactive,
                        v = e.className,
                        b = e.onClick,
                        g = function(e, t, n) {
                            var i = [];
                            return e && i.push(e), t && i.push(n), i.join(" ").trim()
                        }(v, !!m, "inactive");
                    return c().createElement(l.A, (0, i.A)({
                        ref: t,
                        as: "button",
                        tx: "buttons",
                        "data-bn-type": "button"
                    }, e, {
                        variant: f(a, s),
                        className: g,
                        onClick: function() {
                            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                            return m ? null : b && b.apply(void 0, (0, o.A)(t))
                        },
                        __css: (0, r.A)({
                            appearance: "none",
                            userSelect: "none",
                            cursor: "pointer",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            whiteSpace: "nowrap",
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            boxSizing: "border-box",
                            fontSize: "inherit",
                            fontFamily: "inherit",
                            fontWeight: "medium",
                            textAlign: "center",
                            textDecoration: "none",
                            outline: "none"
                        }, p[d] || {})
                    }))
                }));
            m.displayName = "Button";
            const v = m
        },
        kxKT: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => C
            });
            var i = n("M5j3"),
                r = n("BK7R"),
                o = n("gZfF"),
                a = n("aVXY"),
                c = n("N/Z2"),
                s = n("DTvD"),
                l = n.n(s),
                u = n("hTvQ"),
                d = n.n(u),
                p = n("g80r"),
                f = n("6aZm"),
                h = n("C6y2"),
                m = n("LCuF"),
                v = n("XaKq");

            function b() {
                var e = (0, c.A)(["\n  0% {\n    transform: scale(0.95);\n  }\n  66% {\n    transform: scale(1.05);\n  }\n  100% {\n    transform: scale(1.0);\n  }\n"]);
                return b = function() {
                    return e
                }, e
            }

            function g() {
                var e = (0, c.A)(["\n  from {\n    opacity: 1;\n  }\n\n  to {\n    opacity: 0;\n  }\n"]);
                return g = function() {
                    return e
                }, e
            }
            var w = l().useLayoutEffect,
                y = (0, p.keyframes)(b()),
                x = (0, p.keyframes)(g()),
                _ = (0, f.UF)("uikit-core", "Dialog"),
                k = (0, s.forwardRef)((function(e, t) {
                    _("Modal");
                    var n = e.visible,
                        c = e.mask,
                        u = void 0 === c || c,
                        p = e.onMaskClick,
                        f = e.children,
                        b = e.maskStyles,
                        g = e.onClick,
                        k = e.onPressEnter,
                        C = void 0 === k ? function() {} : k,
                        E = e.onPressEsc,
                        A = void 0 === E ? function() {} : E,
                        S = e.externalBlock,
                        T = (0, o.A)(e, ["visible", "mask", "onMaskClick", "children", "maskStyles", "onClick", "onPressEnter", "onPressEsc", "externalBlock"]),
                        L = (0, a.A)(l().useState(!1), 2),
                        O = L[0],
                        I = L[1];
                    l().useEffect((function() {
                        n && I(!0)
                    }), [n]);
                    var D = function(e) {
                        13 === e.keyCode ? C(e) : 27 === e.keyCode && A(e)
                    };
                    (0, s.useEffect)((function() {
                        return n ? document.addEventListener("keydown", D) : document.removeEventListener("keydown", D),
                            function() {
                                document.removeEventListener("keydown", D)
                            }
                    }), [n]), w((function() {
                        return u && O ? document.body.style.overflow = "hidden" : document.body.style.removeProperty("overflow"),
                            function() {
                                document.body.style.removeProperty("overflow")
                            }
                    }), [u, O]);
                    var R = (0, s.useMemo)((function() {
                            return u ? {
                                left: 0,
                                right: 0,
                                top: 0,
                                bottom: 0,
                                bg: "dialog.mask"
                            } : {
                                left: "50%",
                                top: "50%",
                                transform: "translate3d(-50%, -50%, 0)"
                            }
                        }), [u]),
                        P = (0, s.useMemo)((function() {
                            return {
                                animation: "".concat(n ? y : x, " 0.3s ease-in-out"),
                                animationIterationCount: 1
                            }
                        }), [n]);
                    return O ? d().createPortal(l().createElement(h.A, {
                        ref: t,
                        __css: (0, r.A)({
                            position: "fixed",
                            alignItems: "center",
                            justifyContent: "center",
                            zIndex: "modal",
                            flexDirection: S ? "column" : "unset"
                        }, R),
                        sx: b,
                        onClick: function(e) {
                            e.target === e.currentTarget && p && p(e)
                        }
                    }, l().createElement(v.A.Provider, {
                        value: {
                            context: "modal"
                        }
                    }, l().createElement(m.A, (0, i.A)({
                        __css: (0, r.A)({
                            position: "relative",
                            boxShadow: "dialog",
                            borderRadius: "large",
                            bg: "popupBg"
                        }, P),
                        onAnimationEnd: function() {
                            I(n)
                        }
                    }, T, {
                        onClick: g
                    }), f), l().createElement(m.A, {
                        __css: P
                    }, S))), document.body) : null
                }));
            k.displayName = "Dialog";
            const C = k
        },
        XaKq: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => r
            });
            var i = n("DTvD");
            const r = n.n(i)().createContext({
                context: null
            })
        },
        "1eoB": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => c
            });
            var i = n("M5j3"),
                r = n("DTvD"),
                o = n.n(r),
                a = n("w/Qz");
            const c = function(e) {
                return o().createElement(a.A, (0, i.A)({
                    width: "1em",
                    height: "1em",
                    viewBox: "0 0 96 96",
                    fill: "none"
                }, e), o().createElement("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M88 48c0 22.091-17.909 40-40 40S8 70.091 8 48 25.909 8 48 8s40 17.909 40 40z",
                    fill: "url(#general-warning_svg__paint0_linear_22059_28207)"
                }), o().createElement("path", {
                    d: "M48 19c16.016 0 29 12.984 29 29S64.016 77 48 77 19 64.016 19 48s12.984-29 29-29z",
                    fill: "url(#general-warning_svg__paint1_linear_22059_28207)"
                }), o().createElement("path", {
                    d: "M45 66h6v-6h-6v6zM51 54V30h-6v24h6z",
                    fill: "#14151A"
                }), o().createElement("defs", null, o().createElement("linearGradient", {
                    id: "general-warning_svg__paint0_linear_22059_28207",
                    x1: 8,
                    y1: 48,
                    x2: 102.5,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B",
                    stopOpacity: 0
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F0B90B"
                })), o().createElement("linearGradient", {
                    id: "general-warning_svg__paint1_linear_22059_28207",
                    x1: 77,
                    y1: 48,
                    x2: 19,
                    y2: 48,
                    gradientUnits: "userSpaceOnUse"
                }, o().createElement("stop", {
                    stopColor: "#F0B90B"
                }), o().createElement("stop", {
                    offset: 1,
                    stopColor: "#F8D33A"
                }))))
            }
        },
        ycr1: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var i = n("DTvD"),
                r = n("pR+c");

            function o() {
                var e = (0, i.useContext)(r.A);
                return {
                    enqueueNotification: e.enqueueNotification,
                    closeNotification: e.closeNotification
                }
            }
        },
        "xDQ+": (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => o
            });
            var i = n("tEf9"),
                r = n("JfTh");
            const o = function() {
                var e = (0, r.B)("activity-ui").t,
                    t = (0, r.B)("referral-ui").t;
                return {
                    t: function(n) {
                        for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++) o[a - 1] = arguments[a];
                        var c = t(n);
                        return n !== c ? t.apply(void 0, [n].concat((0, i.A)(o))) : e.apply(void 0, [n].concat((0, i.A)(o)))
                    }
                }
            }
        },
        Ni9m: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => Me
            });
            var i, r = n("BK7R"),
                o = n("QUKP"),
                a = n("gZfF"),
                c = n("N/Z2"),
                s = n("jg1C"),
                l = n("DTvD"),
                u = n.n(l),
                d = n("g80r"),
                p = (n("LNcM"), n("qrhQ")),
                f = n("uHCZ"),
                h = n("vpUY"),
                m = n("yQMN"),
                v = n("pA+i"),
                b = n("aVXY"),
                g = n("sViW"),
                w = n("Pz56"),
                y = n.n(w),
                x = n("A1pX"),
                _ = n("Pac+"),
                k = n("BK9r"),
                C = n("Y9i2"),
                E = n("uHHT"),
                A = function() {
                    var e;
                    return (null === (e = window.userAgentData) || void 0 === e ? void 0 : e.mobile) || window.matchMedia("only screen and (max-width: 767px) and (any-pointer:coarse)").matches || "mobile" === (new E.UAParser).getDevice().type
                },
                S = n("fLtG"),
                T = n("ohKi"),
                L = 1e3,
                O = 3e3;

            function I() {
                return (new Date).getTime()
            }

            function D(e) {
                return R.apply(this, arguments)
            }

            function R() {
                return R = (0, g.A)(y().mark((function e(t) {
                    var n, r, o = arguments;
                    return y().wrap((function(e) {
                        for (;;) switch (e.prev = e.next) {
                            case 0:
                                return n = o.length > 1 && void 0 !== o[1] ? o[1] : O, r = !(o.length > 2 && void 0 !== o[2]) || o[2], e.abrupt("return", new Promise((function(e) {
                                    var o = !1,
                                        a = !1,
                                        c = I(),
                                        s = function() {
                                            (document.removeEventListener("visibilitychange", s, !1), "visible" !== document.visibilityState) && (I() - c <= n && (a = !0), e(a))
                                        };
                                    document.addEventListener("visibilitychange", s, !1), setTimeout((function() {
                                        e(!1)
                                    }), n), i ? window.location.href = t : (r && setTimeout((function() {
                                        o || a || (window.location.href = t)
                                    }), Math.min(n / 2, L)), (i = document.createElement("iframe")).style.display = "none", i.onload = function() {
                                        o = !0
                                    }, i.src = (0, T.hL)(t, {
                                        params: {
                                            timestamp: +new Date
                                        }
                                    }), document.body.appendChild(i))
                                })));
                            case 2:
                            case "end":
                                return e.stop()
                        }
                    }), e)
                }))), R.apply(this, arguments)
            }
            var P = n("decL"),
                j = n("BNuK"),
                N = n("6pFG"),
                M = (n("sZZk"), n("dn+i")),
                U = (window.document ? l.useLayoutEffect : l.useEffect, (0, j.Gz)(), {
                    API_HOST: "",
                    STATIC_HOST: "",
                    STATIC_HOST_PRIVATE: "",
                    DOWNLOAD_URL_ANDROID: "",
                    DOWNLOAD_URL_WINDOWS: "",
                    DOWNLOAD_URL_MAC: "",
                    DOWNLOAD_URL_GOOGLEPLAY: "",
                    DOWNLOAD_URL_APPSTORE: "",
                    DOWNLOAD_URL_WINDOWS_BETA: "",
                    TRADE_WS_HOST: "",
                    INBOX_STREAM_HOST: ""
                }),
                H = function() {
                    return (0, M.Rm)().runtime || U
                },
                V = {
                    DOWNLOAD_URL_ANDROID: "https://ftp.binance.com/pack/Binance.apk",
                    DOWNLOAD_URL_APPSTORE: "https://apps.apple.com/hk/app/binance/id1436799971?l=en",
                    DOWNLOAD_URL_GOOGLEPLAY: "https://play.google.com/store/apps/details?id=com.binance.dev",
                    DOWNLOAD_URL_MAC: "https://ftp.binance.com/electron-desktop/mac/production/binance.dmg",
                    DOWNLOAD_URL_WINDOWS: "https://ftp.binance.com/pc_pack/Binance.exe",
                    DOWNLOAD_URL_WINDOWS_BETA: "https://ftp.binance.com/electron-desktop/windows/production/binance-setup.exe"
                },
                B = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1],
                        n = (0, j.Gz)(),
                        i = (0, r.A)({}, V, H() || {}).DOWNLOAD_URL_APPSTORE,
                        o = (0, l.useMemo)((function() {
                            return t && "ios" === n && i ? i : /binance\.com/i.test(P.A5) ? (0, T.eG)("/download", N.rh, {
                                params: e
                            }) : (0, T.hL)("/download", {
                                params: e
                            })
                        }), [n]);
                    return {
                        downloadLink: o
                    }
                },
                F = "universal_link_fallback",
                z = "universal_link_fallback_stay_web",
                W = function() {
                    var e;
                    return +((null === window || void 0 === window || null === (e = window.sessionStorage) || void 0 === e ? void 0 : e.getItem(z)) || 0) > Date.now()
                },
                q = {
                    autoJump: !1,
                    timeout: 3e3,
                    fallbackOpenDeeplink: !0,
                    fallbackRedirectDownload: !0,
                    stayWebDuration: 12e5
                },
                Z = {
                    dpDetected: "universal_link_fallback_detected",
                    usePageDefaultDeeplink: "universal_link_fallback_usePageDefaultDeeplink",
                    appAutoJump: "universal_link_fallback_app_auto_jump",
                    appJumpInit: "universal_link_fallback_app_jump_init",
                    appJumpSuccess: "universal_link_fallback_app_jump_success",
                    appJumpFailed: "universal_link_fallback_app_jump_failed",
                    fallbackRedirectDownload: "universal_link_fallback_redirect_download",
                    userSelectWeb: "universal_link_fallback_user_select_web",
                    userSelectApp: "universal_link_fallback_user_select_app",
                    userClickDownload: "universal_link_fallback_user_click_download"
                },
                G = ["pageName", "extraInfo"],
                $ = n("n3+s"),
                K = n("k5JY"),
                J = n("YgAF"),
                Y = n("Lp65"),
                X = n("D4P9"),
                Q = n("T3Fm"),
                ee = n("M5j3"),
                te = n("Y4uf");
            const ne = function(e) {
                return u().createElement(te.A, (0, ee.A)({
                    width: "64",
                    height: "64",
                    viewBox: "0 0 64 64",
                    fill: "none",
                    xmlns: "http://www.w3.org/2000/svg"
                }, e), u().createElement("rect", {
                    width: "64",
                    height: "64",
                    rx: "16",
                    fill: "#0B0E11"
                }), u().createElement("path", {
                    d: "M8 32L13.4194 26.5806L18.8387 32L13.4194 37.4194L8 32Z",
                    fill: "#F0B90B"
                }), u().createElement("path", {
                    d: "M17.2903 22.7097L32 8L46.7097 22.7097L41.2903 28.129L32 18.8387L22.7097 28.129L17.2903 22.7097Z",
                    fill: "#F0B90B"
                }), u().createElement("path", {
                    d: "M26.5806 32L32 26.5806L37.4194 32L32 37.4194L26.5806 32Z",
                    fill: "#F0B90B"
                }), u().createElement("path", {
                    d: "M22.7097 35.871L17.2903 41.2903L32 56L46.7097 41.2903L41.2903 35.871L32 45.1613L22.7097 35.871Z",
                    fill: "#F0B90B"
                }), u().createElement("path", {
                    d: "M45.1613 32L50.5807 26.5806L56 32L50.5807 37.4194L45.1613 32Z",
                    fill: "#F0B90B"
                }))
            };
            var ie = "universal_link_popup_download_click",
                re = "universal_link_popup_app_click",
                oe = "universal_link_popup_web_click";
            const ae = Q.o ? function(e) {
                var t = e.image,
                    n = e.title,
                    i = e.subtitle,
                    a = e.stayWebButtonText,
                    c = e.appJumpButtonText,
                    s = e.downloadButtonText,
                    d = e.appJumpSettings,
                    p = e.pageTrackSettings,
                    f = e.onClose,
                    h = e.onShow,
                    m = function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : q,
                            t = arguments.length > 1 ? arguments[1] : void 0,
                            n = (0, k.K7)(),
                            i = n.query,
                            a = i._dp,
                            c = i.utm_medium,
                            s = i.utm_campaign,
                            u = n.pathname,
                            d = (0, l.useMemo)((function() {
                                return A()
                            }), []),
                            p = (0, l.useMemo)((function() {
                                return (0, x.A)({}, (0, o.A)((0, r.A)({}, Z), {
                                    pageName: u
                                }), (0, _.A)(t || {}, G))
                            }), []),
                            f = (0, l.useCallback)((function(e, t) {
                                return (0, S.u)(e, (0, x.A)({}, (0, _.A)(p, G), t))
                            }), [p]),
                            h = (0, l.useMemo)((function() {
                                return (0, x.A)({}, q, e)
                            }), []),
                            m = h.defaultDeeplink,
                            v = h.autoJump,
                            w = h.timeout,
                            E = h.fallbackOpenDeeplink,
                            L = h.onCallback,
                            O = h.fallbackRedirectDownload,
                            I = h.stayWebDuration,
                            R = B((0, r.A)({
                                utm_source: F
                            }, c ? {
                                utm_medium: c
                            } : {}, s ? {
                                utm_campaign: s
                            } : {}), !1).downloadLink,
                            j = (0, b.A)((0, l.useState)(""), 2),
                            N = j[0],
                            M = j[1];
                        (0, l.useEffect)((function() {
                            var e = "";
                            if (d) {
                                if (a) {
                                    var t = "";
                                    try {
                                        var n;
                                        t = (null === window || void 0 === window || null === (n = window.atob) || void 0 === n ? void 0 : n.call(window, a)) || ""
                                    } catch (r) {
                                        console.error("Invalid _dp value :", r), t = ""
                                    }
                                    /^(\/.+|bnc)/.test(t) && (e = t.startsWith("/") ? "bnc://app.binance.com".concat(t) : t, f("ModuleView", {
                                        elementID: p.dpDetected,
                                        extraInfo: {
                                            deeplink: e
                                        }
                                    }))
                                }
                                if (!e && m && !W()) {
                                    var i = (0, P.bk)(["_dp"]);
                                    (e = /^bnc/.test(null === m || void 0 === m ? void 0 : m.toString()) ? m : C.ZL ? (0, T.um)(i, {}, /www\.(?!binance\.com)/i.test(i) ? {
                                        needDynamic: !0
                                    } : {}) : "") && f("ModuleView", {
                                        elementID: p.usePageDefaultDeeplink,
                                        extraInfo: {
                                            deeplink: e
                                        }
                                    })
                                }
                            }
                            M(e || "")
                        }), [m, a, d]);
                        var U = function() {
                            var e = (0, g.A)(y().mark((function e() {
                                var t;
                                return y().wrap((function(e) {
                                    for (;;) switch (e.prev = e.next) {
                                        case 0:
                                            if (t = !1, !N) {
                                                e.next = 7;
                                                break
                                            }
                                            return f("ModuleView", {
                                                elementID: p.appJumpInit,
                                                extraInfo: {
                                                    deeplink: N
                                                }
                                            }), e.next = 5, D(N, w, E);
                                        case 5:
                                            t = e.sent, f("ModuleView", {
                                                elementID: t ? p.appJumpSuccess : p.appJumpFailed,
                                                extraInfo: {
                                                    deeplink: N
                                                }
                                            });
                                        case 7:
                                            L && L(t), !t && O && (f("ModuleView", {
                                                elementID: p.fallbackRedirectDownload,
                                                extraInfo: {
                                                    deeplink: N
                                                }
                                            }), window.location.href = R);
                                        case 9:
                                        case "end":
                                            return e.stop()
                                    }
                                }), e)
                            })));
                            return function() {
                                return e.apply(this, arguments)
                            }
                        }();
                        return (0, l.useEffect)((function() {
                            N && v && (f("ModuleView", {
                                elementID: p.appAutoJump,
                                extraInfo: {
                                    deeplink: N
                                }
                            }), U())
                        }), [N, v]), {
                            hasDeeplink: !!N,
                            handleClickStayWeb: function() {
                                var e;
                                f("webClick", {
                                    elementID: p.userSelectWeb
                                }), m && I && (null === window || void 0 === window ? void 0 : window.sessionStorage) && (null === window || void 0 === window || null === (e = window.sessionStorage) || void 0 === e || e.setItem(z, (Date.now() + I).toString()));
                                var t = (0, P.bk)(["_dp"]);
                                window.history.replaceState({}, document.title, t), M("")
                            },
                            handleClickAppJump: function() {
                                f("webClick", {
                                    elementID: p.userSelectApp,
                                    extraInfo: {
                                        deeplink: N
                                    }
                                }), U()
                            },
                            handleClickDownload: function() {
                                f("webClick", {
                                    elementID: p.userClickDownload
                                }), window.location.href = R
                            }
                        }
                    }(d, p),
                    v = m.hasDeeplink,
                    w = m.handleClickStayWeb,
                    E = m.handleClickAppJump,
                    L = m.handleClickDownload,
                    O = (0, b.A)((0, l.useState)(!1), 2),
                    I = O[0],
                    R = O[1];
                (0, l.useEffect)((function() {
                    var e;
                    C.ZL && v && (R(!0), (0, $.Rk)({
                        pageName: (null === p || void 0 === p ? void 0 : p.pageName) || (null === window || void 0 === window || null === (e = window.location) || void 0 === e ? void 0 : e.pathname),
                        elementID: "universal_link_fallback_popup_shown"
                    }), null === h || void 0 === h || h())
                }), [v, h, null === p || void 0 === p ? void 0 : p.pageName]);
                var j = function(e) {
                    e === re && E(), e === oe && w(), e === ie && L(), R(!1), null === f || void 0 === f || f()
                };
                return C.ZL ? u().createElement(K.Ay, {
                    visible: I,
                    className: "UniversalLinkFallbackNotice__Popup"
                }, u().createElement(J.A, {
                    title: n || "View in Binance App",
                    description: i,
                    icon: t || u().createElement(ne, null),
                    actions: u().createElement(K.Ay.Footer, {
                        layout: "column"
                    }, u().createElement(Y.A, {
                        className: "UniversalLinkFallbackNotice_Actions"
                    }, u().createElement(X.A, {
                        sz: "large",
                        variant: "secondary",
                        onClick: function() {
                            return j(oe)
                        }
                    }, a || "Stay here"), u().createElement(X.A, {
                        sz: "large",
                        onClick: function() {
                            return j(re)
                        }
                    }, c || "OK")), u().createElement(X.A, {
                        variant: "text",
                        sz: "small",
                        onClick: function() {
                            return j(ie)
                        }
                    }, s || "Download Binance App"))
                })) : null
            } : function() {
                return null
            };
            var ce = n("2URn");

            function se(e) {
                for (var t = [], n = 0; n < e.length;) {
                    var i = e[n];
                    if ("*" !== i && "+" !== i && "?" !== i)
                        if ("\\" !== i)
                            if ("{" !== i)
                                if ("}" !== i)
                                    if (":" !== i)
                                        if ("(" !== i) t.push({
                                            type: "CHAR",
                                            index: n,
                                            value: e[n++]
                                        });
                                        else {
                                            var r = 1,
                                                o = "",
                                                a = n + 1;
                                            if ("?" === e[a]) throw new TypeError('Pattern cannot start with "?" at '.concat(a));
                                            for (; a < e.length;)
                                                if ("\\" !== e[a]) {
                                                    if (")" === e[a]) {
                                                        if (0 === --r) {
                                                            a++;
                                                            break
                                                        }
                                                    } else if ("(" === e[a] && (r++, "?" !== e[a + 1])) throw new TypeError("Capturing groups are not allowed at ".concat(a));
                                                    o += e[a++]
                                                } else o += e[a++] + e[a++];
                                            if (r) throw new TypeError("Unbalanced pattern at ".concat(n));
                                            if (!o) throw new TypeError("Missing pattern at ".concat(n));
                                            t.push({
                                                type: "PATTERN",
                                                index: n,
                                                value: o
                                            }), n = a
                                        }
                    else {
                        for (var c = "", s = n + 1; s < e.length;) {
                            var l = e.charCodeAt(s);
                            if (!(l >= 48 && l <= 57 || l >= 65 && l <= 90 || l >= 97 && l <= 122 || 95 === l)) break;
                            c += e[s++]
                        }
                        if (!c) throw new TypeError("Missing parameter name at ".concat(n));
                        t.push({
                            type: "NAME",
                            index: n,
                            value: c
                        }), n = s
                    } else t.push({
                        type: "CLOSE",
                        index: n,
                        value: e[n++]
                    });
                    else t.push({
                        type: "OPEN",
                        index: n,
                        value: e[n++]
                    });
                    else t.push({
                        type: "ESCAPED_CHAR",
                        index: n++,
                        value: e[n++]
                    });
                    else t.push({
                        type: "MODIFIER",
                        index: n,
                        value: e[n++]
                    })
                }
                return t.push({
                    type: "END",
                    index: n,
                    value: ""
                }), t
            }

            function le(e) {
                for (var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = se(e), i = t.prefixes, r = void 0 === i ? "./" : i, o = "[^".concat(ue(t.delimiter || "/#?"), "]+?"), a = [], c = 0, s = 0, l = "", u = function(e) {
                        if (s < n.length && n[s].type === e) return n[s++].value
                    }, d = function(e) {
                        var t = u(e);
                        if (void 0 !== t) return t;
                        var i = n[s],
                            r = i.type,
                            o = i.index;
                        throw new TypeError("Unexpected ".concat(r, " at ").concat(o, ", expected ").concat(e))
                    }, p = function() {
                        for (var e, t = ""; e = u("CHAR") || u("ESCAPED_CHAR");) t += e;
                        return t
                    }; s < n.length;) {
                    var f = u("CHAR"),
                        h = u("NAME"),
                        m = u("PATTERN");
                    if (h || m) {
                        var v = f || ""; - 1 === r.indexOf(v) && (l += v, v = ""), l && (a.push(l), l = ""), a.push({
                            name: h || c++,
                            prefix: v,
                            suffix: "",
                            pattern: m || o,
                            modifier: u("MODIFIER") || ""
                        })
                    } else {
                        var b = f || u("ESCAPED_CHAR");
                        if (b) l += b;
                        else {
                            l && (a.push(l), l = "");
                            var g = u("OPEN");
                            if (g) {
                                var w = p(),
                                    y = u("NAME") || "",
                                    x = u("PATTERN") || "",
                                    _ = p();
                                d("CLOSE"), a.push({
                                    name: y || (x ? c++ : ""),
                                    pattern: y && !x ? o : x,
                                    prefix: w,
                                    suffix: _,
                                    modifier: u("MODIFIER") || ""
                                })
                            } else d("END")
                        }
                    }
                }
                return a
            }

            function ue(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function de(e) {
                return e && e.sensitive ? "" : "i"
            }

            function pe(e, t, n) {
                return function(e, t) {
                    var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                        i = n.strict,
                        r = void 0 !== i && i,
                        o = n.start,
                        a = void 0 === o || o,
                        c = n.end,
                        s = void 0 === c || c,
                        l = n.encode,
                        u = void 0 === l ? function(e) {
                            return e
                        } : l,
                        d = "[".concat(ue(n.endsWith || ""), "]|$"),
                        p = "[".concat(ue(n.delimiter || "/#?"), "]"),
                        f = a ? "^" : "",
                        h = !0,
                        m = !1,
                        v = void 0;
                    try {
                        for (var b, g = e[Symbol.iterator](); !(h = (b = g.next()).done); h = !0) {
                            var w = b.value;
                            if ("string" === typeof w) f += ue(u(w));
                            else {
                                var y = ue(u(w.prefix)),
                                    x = ue(u(w.suffix));
                                if (w.pattern)
                                    if (t && t.push(w), y || x)
                                        if ("+" === w.modifier || "*" === w.modifier) {
                                            var _ = "*" === w.modifier ? "?" : "";
                                            f += "(?:".concat(y, "((?:").concat(w.pattern, ")(?:").concat(x).concat(y, "(?:").concat(w.pattern, "))*)").concat(x, ")").concat(_)
                                        } else f += "(?:".concat(y, "(").concat(w.pattern, ")").concat(x, ")").concat(w.modifier);
                                else f += "(".concat(w.pattern, ")").concat(w.modifier);
                                else f += "(?:".concat(y).concat(x, ")").concat(w.modifier)
                            }
                        }
                    } catch (E) {
                        m = !0, v = E
                    } finally {
                        try {
                            h || null == g.return || g.return()
                        } finally {
                            if (m) throw v
                        }
                    }
                    if (s) r || (f += "".concat(p, "?")), f += n.endsWith ? "(?=".concat(d, ")") : "$";
                    else {
                        var k = e[e.length - 1],
                            C = "string" === typeof k ? p.indexOf(k[k.length - 1]) > -1 : void 0 === k;
                        r || (f += "(?:".concat(p, "(?=").concat(d, "))?")), C || (f += "(?=".concat(p, "|").concat(d, ")"))
                    }
                    return new RegExp(f, de(n))
                }(le(e, n), t, n)
            }

            function fe(e, t, n) {
                return (0, ce.A)(e, RegExp) ? function(e, t) {
                    if (!t) return e;
                    var n = e.source.match(/\((?!\?)/g);
                    if (n)
                        for (var i = 0; i < n.length; i++) t.push({
                            name: i,
                            prefix: "",
                            suffix: "",
                            modifier: "",
                            pattern: ""
                        });
                    return e
                }(e, t) : Array.isArray(e) ? function(e, t, n) {
                    var i = e.map((function(e) {
                        return fe(e, t, n).source
                    }));
                    return new RegExp("(?:".concat(i.join("|"), ")"), de(n))
                }(e, t, n) : pe(e, t, n)
            }
            var he = {
                    "&": "&amp;",
                    '"': "&quot;",
                    "'": "&#39;",
                    ">": "&gt;",
                    "<": "&lt;"
                },
                me = /[&><'"]/g;

            function ve(e, t) {
                var n = "".concat(e.replace(/\/+$/, ""), "/").concat(t.replace(/^\/+/, ""));
                return n.replace(me, (function(e) {
                    return he[e]
                }))
            }

            function be(e) {
                var t = e.canonicalPathMap,
                    n = void 0 === t ? {} : t,
                    i = e.canonicalBase,
                    r = function(e) {
                        var t = Object.keys(e).map((function(t) {
                            var n = fe(t);
                            return function(i) {
                                return n.test(i) ? e[t] : null
                            }
                        }));
                        return function(e) {
                            for (var n = null, i = 0; !n && i < t.length; i++) n = (0, t[i])(e);
                            return n || e
                        }
                    }(n);
                return function(e) {
                    var t = e.canonicalBase,
                        n = void 0 === t ? i : t,
                        o = e.req,
                        a = e.fromAmp,
                        c = void 0 === a || a,
                        s = o.path.replace(/\?.*$/, "");
                    return [{
                        lang: "canonical",
                        rel: c ? "canonical" : "amphtml",
                        href: ve(n, r(s))
                    }]
                }
            }
            var ge = n("AJ9A"),
                we = n("xDQ+");
            const ye = function(e) {
                var t = e.orionBusinessTypeList,
                    n = (0, we.A)().t,
                    i = {
                        resourceCode: "CPA",
                        resourceType: "CPA_REFERRAL"
                    };
                return (0, s.jsx)(ge.A, {
                    checkFn: function(e) {
                        var t = e.compliancePassed;
                        return e.orionPassed && t
                    },
                    nonLoginTitle: n("common-country-restriction-nonLogin"),
                    loggedInTitle: n("common-country-restriction-title"),
                    loggedInDesc: n("common-country-restriction-desc"),
                    nonLoginButtonText: n("common-text-ok"),
                    loggedInButtonText: n("common-country-restriction-homepage"),
                    closableCheckFn: function(e) {
                        var t = e.complianceErrorCode;
                        return !!e.orionPassed && "112007" === t
                    },
                    apiParams: t ? (0, o.A)((0, r.A)({}, i), {
                        orionBusinessTypeList: t
                    }) : i
                })
            };
            var xe = n("4Kx8"),
                _e = n("888e"),
                ke = n("nG1z"),
                Ce = n("tEf9"),
                Ee = n("GlbY"),
                Ae = n("VA12"),
                Se = n("tKUM");
            const Te = function() {
                var e = localStorage.getItem("deviceId");
                if (e) return e;
                var t = function() {
                    for (var e = [], t = "0123456789abcdef", n = 0; n < 36; n++) e[n] = t.substr(Math.floor(16 * Math.random()), 1);
                    return e[14] = "4", e[19] = t.substr(3 & e[19] | 8, 1), e[8] = e[13] = e[18] = e[23] = "-", e.join("")
                }();
                return localStorage.setItem("deviceId", t), t
            };
            var Le = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                    try {
                        (0, Ee.Ay)("webClick", (0, r.A)({}, e), (0, r.A)({}, t))
                    } catch (n) {}
                },
                Oe = function() {
                    function e(t) {
                        var n = t.cdnHost,
                            i = void 0 === n ? "" : n,
                            r = t.isChatEnable,
                            o = void 0 === r || r,
                            a = t.isChatVisible,
                            c = void 0 === a || a,
                            s = t.isChatPopUp,
                            l = void 0 !== s && s,
                            u = t.onChatLoadedCallbackFunction,
                            d = void 0 === u ? function() {} : u,
                            p = t.apiHost,
                            f = void 0 === p ? "" : p,
                            h = t.entryChatData,
                            m = void 0 === h ? {} : h,
                            v = t.onClick,
                            b = t.sourceEntry,
                            g = t.isSenseiMode,
                            w = void 0 !== g && g,
                            y = t.isSearchPlugin,
                            x = void 0 !== y && y,
                            _ = t.searchPluginContainer,
                            k = void 0 === _ ? null : _;
                        (0, _e.A)(this, e), this._cdnHost = i, this._isChatEnable = o, this._isChatVisible = c, this._isChatPopUp = l, this.entryChatData = m, this._scriptNode = null, this.onChatLoadedCallbackFunction = d, this._events = {}, this._hasVipGroup = !1, this._isVip = !1, this.apiHost = f, this.onClick = v, this._sourceEntry = b, this._isSenseiMode = w, this._chatScriptUrl = "", this._preChatContainerElement = null, this.isSearchPlugin = x, this.searchPluginContainer = k
                    }
                    var t = e.prototype;
                    return t.on = function(e, t) {
                        this._events[e] || (this._events[e] = []), this._events[e].push(t)
                    }, t.once = function(e, t) {
                        var n = this,
                            i = function() {
                                t(), n.off(e, i)
                            };
                        this.on(e, i)
                    }, t.off = function(e, t) {
                        this._events[e] = t ? this._events[e].filter((function(e) {
                            return e !== t
                        })) : []
                    }, t.emit = function(e) {
                        for (var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++) n[i - 1] = arguments[i];
                        if (this._events[e]) {
                            var r, o = this;
                            this._events[e].forEach((function(e) {
                                return (r = e).call.apply(r, [o].concat((0, Ce.A)(n)))
                            }))
                        }
                    }, t.changeChatVisibilityStatus = function(e) {
                        this._isChatVisible = e, this.emit("onChatVisibilityStatusChanged", this._isChatVisible), this.scriptNode || (e ? this.initChatEntry() : this.hideChatEntry())
                    }, t.changeChatPopUpStatus = function(e) {
                        this._isChatPopUp = e, this.emit("onChatPopUpStatusChanged", this._isChatPopUp), e && (localStorage.setItem("chatButtonVisible", "false"), this.scriptNode || this.addScript())
                    }, t.entryChat = function(e) {
                        var t = e.step,
                            n = void 0 === t ? 2 : t,
                            i = e.question,
                            r = void 0 === i ? "" : i,
                            o = e.extraInfo;
                        if (this.entryChatData = {
                                step: n,
                                question: r,
                                extraInfo: o
                            }, 1 === n) {
                            var a = document.getElementById("pre-chat-container");
                            this.drawToolTip(a, this.langData.api_tooltip), Le({
                                pageName: "binance_support_chat",
                                elementId: "chat_bubble_entry_tooltip_shown_times",
                                extraInfo: {
                                    url: window.location.href
                                }
                            })
                        }
                        2 === n && (this.changeChatPopUpStatus(!0), this.emit("onEntryChat", this.entryChatData))
                    }, t.checkScriptByUrl = function(e) {
                        return Array.prototype.some.call(document.querySelectorAll("script"), (function(t) {
                            return t.src === e
                        }))
                    }, t.preloadingJsUrl = function() {
                        var e = this;
                        return (0, g.A)(y().mark((function t() {
                            var n;
                            return y().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, e._chatScriptUrl) {
                                            t.next = 6;
                                            break
                                        }
                                        return t.next = 4, e.getChatScriptUrl();
                                    case 4:
                                        "string" === typeof(n = t.sent) && (e._chatScriptUrl = n);
                                    case 6:
                                        t.next = 11;
                                        break;
                                    case 8:
                                        t.prev = 8, t.t0 = t.catch(0), console.log(t.t0);
                                    case 11:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 8]
                            ])
                        })))()
                    }, t.getChatScriptUrl = function() {
                        var e = this;
                        return (0, g.A)(y().mark((function t() {
                            var n, i, r, o, a, c, s, l;
                            return y().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (n = "", e._chatScriptUrl) {
                                            t.next = 19;
                                            break
                                        }
                                        return t.next = 5, (0, Ae.get)("/bapi/haodesk/v3/friendly/haodesk/std/base-info");
                                    case 5:
                                        return r = t.sent, o = r && r.success && (null === (i = r.data) || void 0 === i ? void 0 : i.login) ? "".concat(e.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/common/config/js?pathName=").concat(encodeURIComponent(window.location.pathname), "&h=").concat(encodeURIComponent(window.location.hostname)) : "".concat(e.apiHost, "/bapi/haodesk/v3/public/haodesk/std/common/config/js?pathName=").concat(encodeURIComponent(window.location.pathname), "&h=").concat(encodeURIComponent(window.location.hostname)), t.next = 10, (0, Ae.get)(o);
                                    case 10:
                                        if (a = t.sent, c = a.success, s = a.data, c) {
                                            t.next = 15;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 15:
                                        l = /.*binancezh.*$/.test(window.location.hostname), n = l ? "".concat(e.cdnHost).concat(s.cn) : "".concat(e.cdnHost).concat(s.com), t.next = 20;
                                        break;
                                    case 19:
                                        n = e._chatScriptUrl;
                                    case 20:
                                        return t.abrupt("return", n);
                                    case 21:
                                    case "end":
                                        return t.stop()
                                }
                            }), t)
                        })))()
                    }, t.displayLoadingIcon = function() {
                        if (this._preChatContainerElement) {
                            var e = this._preChatContainerElement.querySelector(".widget-chat-loading-icon-wrap"),
                                t = this._preChatContainerElement.querySelector(".chat-icon");
                            e && t && (e.style.display = "block", t.style.display = "none")
                        }
                    }, t.hideLoadingIcon = function() {
                        if (this._preChatContainerElement) {
                            var e = this._preChatContainerElement.querySelector(".widget-chat-loading-icon-wrap"),
                                t = this._preChatContainerElement.querySelector(".chat-icon");
                            e && t && (e.style.display = "none", t.style.display = "block")
                        }
                    }, t.addScript = function() {
                        var e = this;
                        return (0, g.A)(y().mark((function t() {
                            var n, i, r;
                            return y().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (t.prev = 0, n = "", e._chatScriptUrl) {
                                            t.next = 13;
                                            break
                                        }
                                        return e.displayLoadingIcon(), t.next = 6, e.getChatScriptUrl();
                                    case 6:
                                        if (i = t.sent, e.hideLoadingIcon(), i) {
                                            t.next = 10;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 10:
                                        n = i, t.next = 14;
                                        break;
                                    case 13:
                                        n = e._chatScriptUrl;
                                    case 14:
                                        if (!e.checkScriptByUrl(n)) {
                                            t.next = 16;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 16:
                                        return (r = document.createElement("script")).setAttribute("async", "true"), r.src = n, r.onload = function() {
                                            e.removeChatEntry(), e.onChatLoadedCallbackFunction && e.onChatLoadedCallbackFunction(), e.emit("onChatLoaded"), "function" === typeof window.onload && window.onload(new Event("load"))
                                        }, e.scriptNode = r, document.body.appendChild(r), t.abrupt("return");
                                    case 25:
                                        t.prev = 25, t.t0 = t.catch(0), console.log(t.t0), e.hideLoadingIcon();
                                    case 29:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [0, 25]
                            ])
                        })))()
                    }, t.removeCustomizedOnClick = function() {
                        this.onClick = null
                    }, t.removeChatEntry = function() {
                        var e, t = document.getElementById("pre-chat-container");
                        null === t || void 0 === t || null === (e = t.parentNode) || void 0 === e || e.removeChild(t), this._preChatContainerElement = null
                    }, t.hideChatEntry = function() {
                        var e = document.getElementById("pre-chat-container");
                        e && e.classList.remove("visible")
                    }, t.showChatEntry = function() {
                        var e = document.getElementById("pre-chat-container");
                        e && e.classList.add("visible")
                    }, t.drawChatEntry = function(e) {
                        var t = e.chatEntryTitle,
                            n = void 0 === t ? "Support" : t,
                            i = e.isVip,
                            o = void 0 !== i && i,
                            a = this,
                            c = document.getElementById("pre-chat-container");
                        if (c) return c;
                        var s = document.createElement("style");
                        s.innerHTML = "@keyframes widget-show-grow {0% {opacity: 0;}1% {opacity: 0;transform: scale(0.5);}100% {opacity: 1;transform: scale(1);}}.chat-container {position: fixed; right: 24px; bottom: 24px; cursor: pointer; opacity: 1; z-index: 998; border-radius: 16px; background: #FCD535; display: none; justify-content: center; align-items: center; padding:0px; min-width: 48px; height: 48px;} @media screen and (max-width: 767px) {.chat-container{right: 16px;bottom: 16px;border-radius: 14px; min-width: 40px; height: 40px}}.chat-container.visible {display: flex; animation: 0.5s ease 0s 1 normal backwards running widget-show-grow;}.chat-container.visible:hover {padding: 0 12px 0 8px;}.chat-container.visible:hover .chat-text {display: block;}.chat-container .chat-text {display: none; font-weight: 500; font-size: 16px; line-height: 24px; margin-left: 4px;color: #1E2329;}.chat-container .unread-message-alert { position: absolute;top: 5px;right: -8px; transform: translate(0px, -8px); color: #ffffff; background: #f6465d; border-radius: 16px; text-align: center; line-height: 16px; width: fit-content; min-width:8px; padding: 0px 4px; font-size: 16px; font-weight: 500;}.chat-container .tool-tip { position: absolute; width: 300px; right: 0; bottom: calc(100% + 9px); background: #fff; font-weight: 500; font-size: 16px; line-height: 24px; color: #474D57; border-radius: 4px; padding: 16px }.chat-container .tool-tip:after { content: ''; position: absolute; border: 8px solid transparent; border-top-color: #fff; bottom: -14px; right: 16px;}@keyframes widget-chat-loading-spin {\n        0%{-webkit-transform:rotate(0deg);}\n        25%{-webkit-transform:rotate(90deg);}\n        50%{-webkit-transform:rotate(180deg);}\n        75%{-webkit-transform:rotate(270deg);}\n        100%{-webkit-transform:rotate(360deg);}\n      }\n      .widget-chat-loading-icon {\n        display: inline-block; /* \u786e\u4fdd\u5143\u7d20\u662f\u884c\u5185\u5757\u5143\u7d20\uff0c\u8fd9\u6837 transform \u5c5e\u6027\u4f1a\u751f\u6548 */\n        animation: widget-chat-loading-spin 2s linear infinite; /* 2s\u662f\u65cb\u8f6c\u4e00\u5708\u7684\u65f6\u95f4\uff0c\u53ef\u4ee5\u6839\u636e\u9700\u8981\u8c03\u6574 */\n      }\n      ";
                        var l = document.createElement("div"),
                            u = this;
                        l.addEventListener("click", (0, g.A)(y().mark((function e() {
                            var t;
                            return y().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        if (!u.onClick) {
                                            e.next = 4;
                                            break
                                        }
                                        u.onClick(), e.next = 9;
                                        break;
                                    case 4:
                                        return localStorage.setItem("chatButtonVisible", "false"), e.next = 8, u.addScript();
                                    case 8:
                                        null === (t = window.CHATWIDGET) || void 0 === t || t.changeChatPopUpStatus(!0);
                                    case 9:
                                        Le({
                                            pageName: "binance_support_chat",
                                            elementId: "chat_bubble_in_web",
                                            extraInfo: {
                                                deviceId: Te()
                                            }
                                        });
                                    case 10:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        })))), l.id = "pre-chat-container", l.classList.add("chat-container"), l.classList.add("visible");
                        var d = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                        o ? (d.style.cssText = "width: 32px; height: 35px", d.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M8.23868 12.7502H11.3363V19.8335H4.25298V15.618C4.25294 15.6065 4.25293 15.595 4.25293 15.5835C4.25293 8.54187 9.9613 2.8335 17.0029 2.8335C24.0446 2.8335 29.7529 8.54187 29.7529 15.5835L29.753 15.5835V19.8335H22.6696V12.7502H25.7671C24.5721 9.05089 21.0999 6.37518 17.0029 6.37518C12.9058 6.37518 9.43372 9.05089 8.23868 12.7502Z" fill="#181A20"/><path d="M21.9162 25.4389V26.5755H23.0528C23.3126 26.5755 23.4912 26.4375 23.4912 26.1615V25.8449C23.4912 25.577 23.3126 25.4389 23.0528 25.4389H21.9162Z" fill="#181A20"/><path fill-rule="evenodd" clip-rule="evenodd" d="M26.9163 22.6665H7.08301V31.1665H26.9163V22.6665ZM10.4958 29.7498H12.2088L14.0111 24.0832H12.5011L11.7136 26.7217L11.4132 28.2885H11.397L11.056 26.7217L10.2685 24.0832H8.70166L10.4958 29.7498ZM15.4779 29.7498H18.4249V28.5158H17.7349V25.3172H18.4249V24.0832H15.4779V25.3172H16.168V28.5158H15.4779V29.7498ZM21.9162 29.7498H20.3494V24.0832H23.2882C24.368 24.0832 25.0905 24.8869 25.0905 26.0072C25.0905 27.1195 24.368 27.9313 23.2882 27.9313H21.9162V29.7498Z" fill="#181A20"/>') : (d.style.cssText = "width: 28px; @media screen and (max-width: 767px) {width: 24px;}", d.setAttribute("viewBox", "0 0 28 29"), d.innerHTML = '<path fill-rule="evenodd" clip-rule="evenodd" d="M24.5023 20.4105V14.5771C24.5023 14.2147 24.4839 13.8566 24.4481 13.5036C24.4449 13.4725 24.4416 13.4415 24.4382 13.4105C23.8579 8.16054 19.4069 4.07715 14.0023 4.07715C8.2033 4.07715 3.50229 8.77816 3.50229 14.5771V20.4105H9.33562V13.4105H6.50814C7.06932 9.77621 10.2109 6.99381 14.0023 6.99381C17.7937 6.99381 20.9353 9.77621 21.4964 13.4105H18.669V20.4105H19.7178C18.6728 21.4345 17.3539 22.1799 15.8812 22.5266C15.4563 21.9507 14.7729 21.5771 14.0023 21.5771C12.7136 21.5771 11.669 22.6218 11.669 23.9105C11.669 25.1991 12.7136 26.2438 14.0023 26.2438C14.9526 26.2438 15.7702 25.6757 16.134 24.8606C18.8766 24.295 21.2285 22.6599 22.7342 20.4105H24.5023Z" fill="#202630"/>'), d.classList.add("chat-icon"), l.appendChild(d);
                        var p = document.createElement("div");
                        p.style.cssText = "width: 32px; height: 32px;display:none;", p.innerHTML = '\n      <svg class="widget-chat-loading-icon"  width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">\n      <g id="ic/loading-1c">\n      <path id="Subtract" fill-rule="evenodd" clip-rule="evenodd" d="M14 29.1281V25.2891C12.8595 25.0447 11.7948 24.5956 10.8465 23.982L8.13198 26.6966C9.82568 27.9445 11.8265 28.7998 14 29.1281ZM5.30352 23.8682L8.01807 21.1536C7.40449 20.2053 6.95532 19.1406 6.71092 18H2.87183C3.2002 20.1736 4.05554 22.1744 5.30352 23.8682ZM2.87183 14H6.71092C6.95532 12.8593 7.40449 11.7947 8.01806 10.8463L5.30352 8.13177C4.05554 9.82551 3.2002 11.8263 2.87183 14ZM8.13197 5.30337L10.8465 8.01791C11.7948 7.40436 12.8595 6.95522 14 6.71082V2.87183C11.8265 3.20018 9.82568 4.05546 8.13197 5.30337ZM18 29.1281C20.1736 28.7997 22.1744 27.9444 23.8682 26.6964L21.1537 23.982C20.2054 24.5956 19.1407 25.0448 18 25.2892V29.1281ZM23.9821 21.1535L26.6966 23.868C27.9445 22.1743 28.7997 20.1735 29.1281 18H25.2892C25.0449 19.1406 24.5957 20.2052 23.9821 21.1535ZM25.2893 14H29.1281C28.7997 11.8264 27.9445 9.82568 26.6966 8.13199L23.9822 10.8464C24.5957 11.7947 25.0449 12.8594 25.2893 14ZM21.1537 8.01795L23.8682 5.30353C22.1744 4.05556 20.1736 3.20023 18 2.87184V6.71079C19.1407 6.95519 20.2054 7.40436 21.1537 8.01795Z" fill="#202630"/>\n      </g>\n      </svg>\n      ', p.classList.add("widget-chat-loading-icon-wrap"), l.appendChild(p);
                        var f = document.createElement("div");
                        return f.classList.add("chat-text"), f.innerHTML = n, l.appendChild(f), document.getElementsByTagName("head")[0].appendChild(s), document.body.appendChild(l), this._preChatContainerElement = l,
                            function(e) {
                                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                                try {
                                    (0, Ee.Ay)("elementShow", (0, r.A)({}, e), (0, r.A)({}, t))
                                } catch (n) {}
                            }({
                                pageName: "binance_support_chat",
                                elementId: "chat_bubble_in_web",
                                extraInfo: {
                                    deviceId: Te()
                                }
                            }), (0, Ae.post)("".concat(this.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/has-unread"), {
                                token: localStorage.getItem("chatToken")
                            }).then((function(e) {
                                var t, n, i;
                                if (e.success && (!(null === (t = e.data) || void 0 === t ? void 0 : t.expire) && (null === (n = e.data) || void 0 === n ? void 0 : n.hasUnread) || (null === (i = e.data) || void 0 === i ? void 0 : i.hasGroupUnread))) {
                                    var r, o, c = ((null === (r = e.data) || void 0 === r ? void 0 : r.chatUnreadCount) || 0) + ((null === (o = e.data) || void 0 === o ? void 0 : o.groupUnreadCount) || 0);
                                    c > 0 && a.drawUnreadMessageAlert(l, c)
                                }
                            })).catch((function() {})), l
                    }, t.drawUnreadMessageAlert = function(e, t) {
                        var n = document.createElement("div");
                        n.classList.add("unread-message-alert");
                        var i = document.createTextNode("".concat(t > 999 ? "999+" : t));
                        n.appendChild(i), e.appendChild(n)
                    }, t.drawToolTip = function(e, t) {
                        var n = document.createElement("div");
                        n.classList.add("tool-tip");
                        var i = document.createTextNode(t);
                        n.appendChild(i), e.appendChild(n)
                    }, t.getLocaleFromUrl = function() {
                        return (0, Se.getLanguage)() || "en"
                    }, t.getI18n = function() {
                        var e = this.getLocaleFromUrl();
                        return fetch("".concat(this.cdnHost, "/api/i18n/-/web/cms/").concat(e, "/binance-chat")).then((function(e) {
                            return e.json()
                        })).catch((function() {}))
                    }, t.initChatEntry = function() {
                        var e = this;
                        return (0, g.A)(y().mark((function t() {
                            var n, i, r, o, a, c, s, l, u, d, p, f, h, m, v, b;
                            return y().wrap((function(t) {
                                for (;;) switch (t.prev = t.next) {
                                    case 0:
                                        if (!["academy.binance.com", "academy.binance.info", "academy.mokexweb.cloud", "academy.binance.me", "academy.binancezh.jp", "academy.binancezh.top"].includes(null === window || void 0 === window ? void 0 : window.location.hostname) && !e.isSenseiMode) {
                                            t.next = 4;
                                            break
                                        }
                                        return e.addScript(), t.abrupt("return");
                                    case 4:
                                        if (!document.getElementById("pre-chat-container")) {
                                            t.next = 8;
                                            break
                                        }
                                        return e.showChatEntry(), t.abrupt("return");
                                    case 8:
                                        return n = localStorage.getItem("chatToken"), i = !1, t.prev = 10, t.next = 13, (0, Ae.get)("".concat(e.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/visible2?deviceId=").concat(Te()));
                                    case 13:
                                        if (!(r = t.sent).data || !r.success) {
                                            t.next = 21;
                                            break
                                        }
                                        if (o = r.data, a = o.visible, c = o.vip, s = o.hasGroup, i = !!c, e._isVip = i, e._hasVipGroup = !!s, a) {
                                            t.next = 21;
                                            break
                                        }
                                        return t.abrupt("return");
                                    case 21:
                                        t.next = 25;
                                        break;
                                    case 23:
                                        t.prev = 23, t.t0 = t.catch(10);
                                    case 25:
                                        if (!(l = window.location.search)) {
                                            t.next = 35;
                                            break
                                        }
                                        if (u = new URLSearchParams(l), !u.get("service-group")) {
                                            t.next = 35;
                                            break
                                        }
                                        return null === (d = window.CHATWIDGET) || void 0 === d || d.changeChatPopUpStatus(!0), t.next = 34, e.addScript();
                                    case 34:
                                        return t.abrupt("return");
                                    case 35:
                                        if (!n) {
                                            t.next = 61;
                                            break
                                        }
                                        return t.next = 38, (0, Ae.post)("".concat(e.apiHost, "/bapi/haodesk/v3/friendly/haodesk/std/user-open-session"), {
                                            token: n
                                        });
                                    case 38:
                                        if (p = t.sent, f = p.success, h = p.data, !f || !h.sessionId || "false" !== localStorage.getItem("chatButtonVisible")) {
                                            t.next = 48;
                                            break
                                        }
                                        return null === (m = window.CHATWIDGET) || void 0 === m || m.changeChatPopUpStatus(!0), t.next = 46, e.addScript();
                                    case 46:
                                        t.next = 59;
                                        break;
                                    case 48:
                                        return t.prev = 48, t.next = 51, e.getI18n();
                                    case 51:
                                        v = t.sent, e.langData = v, e.drawChatEntry({
                                            chatEntryTitle: v["chat-chatButtonText"],
                                            isVip: i
                                        }), t.next = 59;
                                        break;
                                    case 56:
                                        t.prev = 56, t.t1 = t.catch(48), e.drawChatEntry({
                                            chatEntryTitle: "Support",
                                            isVip: i
                                        });
                                    case 59:
                                        t.next = 72;
                                        break;
                                    case 61:
                                        return t.prev = 61, t.next = 64, e.getI18n();
                                    case 64:
                                        b = t.sent, e.langData = b, e.drawChatEntry({
                                            chatEntryTitle: b["chat-chatButtonText"],
                                            isVip: i
                                        }), t.next = 72;
                                        break;
                                    case 69:
                                        t.prev = 69, t.t2 = t.catch(61), e.drawChatEntry({
                                            chatEntryTitle: "Support",
                                            isVip: i
                                        });
                                    case 72:
                                    case "end":
                                        return t.stop()
                                }
                            }), t, null, [
                                [10, 23],
                                [48, 56],
                                [61, 69]
                            ])
                        })))()
                    }, t.initSearchPlugin = function(e) {
                        var t = e.isSearchPlugin,
                            n = e.container;
                        this.isSearchPlugin = t, this.searchPluginContainer = n, this.emit("onChatSearchModuleInjected", {
                            isSearchPlugin: t,
                            container: n
                        }), t && !this.scriptNode && this.addScript()
                    }, (0, ke.A)(e, [{
                        key: "isChatEnable",
                        get: function() {
                            return this._isChatEnable
                        }
                    }, {
                        key: "isChatVisible",
                        get: function() {
                            return this._isChatVisible
                        }
                    }, {
                        key: "isChatPopUp",
                        get: function() {
                            return this._isChatPopUp
                        }
                    }, {
                        key: "scriptNode",
                        get: function() {
                            return this._scriptNode
                        },
                        set: function(e) {
                            this._scriptNode = e
                        }
                    }, {
                        key: "cdnHost",
                        get: function() {
                            return this._cdnHost
                        },
                        set: function(e) {
                            this._cdnHost = e
                        }
                    }, {
                        key: "hasVipGroup",
                        get: function() {
                            return this._hasVipGroup
                        }
                    }, {
                        key: "isVip",
                        get: function() {
                            return this._isVip
                        }
                    }, {
                        key: "sourceEntry",
                        get: function() {
                            return this._sourceEntry
                        }
                    }, {
                        key: "isSenseiMode",
                        get: function() {
                            return this._isSenseiMode
                        }
                    }]), e
                }(),
                Ie = function() {
                    return function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
                                isChatEnable: !0,
                                isChatVisible: !0,
                                isChatPopUp: !1,
                                onChatLoadedCallbackFunction: function() {},
                                onClick: null,
                                isSenseiMode: !1,
                                isSearchPlugin: !1,
                                searchPluginContainer: null
                            },
                            n = t.isChatEnable,
                            i = t.isChatVisible,
                            r = t.isChatPopUp,
                            o = t.onChatLoadedCallbackFunction,
                            a = t.apiHost,
                            c = t.onClick,
                            s = t.sourceEntry,
                            u = t.isSenseiMode,
                            d = t.isSearchPlugin,
                            p = t.searchPluginContainer,
                            f = (0, l.useRef)(new Oe({
                                cdnHost: e,
                                isChatEnable: n,
                                isChatPopUp: r,
                                isChatVisible: i,
                                onChatLoadedCallbackFunction: o,
                                apiHost: a,
                                onClick: c,
                                sourceEntry: s,
                                isSenseiMode: u,
                                isSearchPlugin: d,
                                searchPluginContainer: p
                            }));
                        (0, l.useEffect)((function() {
                            if (n) {
                                var t = f.current;
                                t.cdnHost = e, window.CHATWIDGET = t, Le({
                                    pageName: "binance_support_chat",
                                    elementId: "chat_bubble_entry_amount_of_calls",
                                    extraInfo: {
                                        url: window.location.href
                                    }
                                }), d && "string" === typeof p && t.initSearchPlugin({
                                    isSearchPlugin: d,
                                    container: document.getElementById(p)
                                }), i && (r ? t.changeChatPopUpStatus(!0) : t.changeChatVisibilityStatus(!0))
                            }
                        }), [e]), (0, l.useEffect)((function() {
                            f.current.changeChatVisibilityStatus(i)
                        }), [i]), (0, l.useEffect)((function() {
                            f.current.changeChatPopUpStatus(r)
                        }), [r]), (0, l.useEffect)((function() {
                            setTimeout((function() {
                                f.current.preloadingJsUrl()
                            }), 4e3)
                        }), []), f.current
                    }(xe.K5), (0, s.jsx)(u().Fragment, {})
                };

            function De() {
                var e = (0, c.A)(["\n        #__APP_HEADER {\n          ", "\n        }\n\n        #__APP_FOOTER {\n          ", "\n        }\n        body {\n          background-color: ", ";\n        }\n\n        .bn-layer-notifies-wrap {\n          position: fixed;\n          z-index: 9999;\n        }\n      "]);
                return De = function() {
                    return e
                }, e
            }
            var Re = (0, h.S)().isHybrid,
                Pe = {
                    dark: "#181A20",
                    light: "#ffffff"
                },
                je = function(e, t) {
                    return t && Pe[t] ? Pe[t] : e ? "#ffffff" : "#181A20"
                },
                Ne = function(e) {
                    var t = e.withHeader,
                        n = e.withFooter,
                        i = e.theme,
                        r = (0, m.x)(i, !0).isLight;
                    return (0, s.jsx)(d.Global, {
                        styles: (0, d.css)(De(), !Re && t ? "" : "display: none;", n ? "" : "display: none;", je(r, i))
                    })
                };
            const Me = function(e) {
                var t = (0, we.A)().t,
                    n = (0, we.A)("widget-common").t,
                    i = e.metaData,
                    c = void 0 === i ? {} : i,
                    d = e.withHeader,
                    h = void 0 !== d && d,
                    m = e.withFooter,
                    b = void 0 !== m && m,
                    g = e.theme,
                    w = e.path,
                    y = void 0 === w ? "" : w,
                    x = e.host,
                    _ = void 0 === x ? "" : x,
                    k = e.linkData,
                    C = void 0 === k ? [] : k,
                    E = e.withChat,
                    A = void 0 === E || E,
                    S = e.withCountryRestriction,
                    T = void 0 !== S && S,
                    L = e.orionBusinessTypeList,
                    O = void 0 === L ? null : L,
                    I = e.universalLinkFallback,
                    D = void 0 !== I && I,
                    R = c.metaTitleKey,
                    P = be({
                        canonicalBase: _,
                        langRules: [{
                            test: "/:pre/:after*",
                            path: "/#lang/:after"
                        }]
                    })({
                        req: {
                            path: y
                        }
                    }),
                    j = c.ogImage || "".concat(xe.Gf, "/static/images/common/ogImage.jpg"),
                    N = c.ogUrl || "https://www.binance.com",
                    M = (0, v.Q)().isMobile,
                    U = !Re && A,
                    H = (0, l.useMemo)((function() {
                        var e = c.noIndex,
                            t = void 0 !== e && e,
                            n = c.noFollow,
                            i = void 0 !== n && n;
                        if (!t && !i) return null;
                        var r = [t && "noindex", i && "nofollow"].filter(Boolean).join(",");
                        return (0, s.jsx)("meta", {
                            name: "robots",
                            content: r
                        })
                    }), [c.noIndex, c.noFollow]),
                    V = R ? t(R) : c.metaTitle || c.title;
                return (0, s.jsxs)(u().Fragment, {
                    children: [(0, s.jsxs)(f.A, {
                        children: [(0, s.jsx)("link", {
                            rel: "preconnect",
                            href: xe.K5
                        }), C.map((function(e) {
                            var t = e.rel,
                                n = e.href,
                                i = (0, a.A)(e, ["rel", "href"]);
                            return (0, l.createElement)("link", (0, o.A)((0, r.A)({}, i), {
                                rel: t,
                                href: n,
                                key: "".concat(t, "-").concat(n)
                            }))
                        })), (0, s.jsx)("title", {
                            children: V
                        }), c.keywords ? (0, s.jsx)("meta", {
                            name: "keywords",
                            content: c.keywords
                        }) : null, c.description ? (0, s.jsx)(l.Fragment, {
                            children: (0, s.jsx)("meta", {
                                name: "description",
                                content: t(c.description)
                            })
                        }) : null, H, (0, s.jsx)("meta", {
                            property: "og:url",
                            content: N
                        }), (0, s.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), (0, s.jsx)("meta", {
                            property: "og:title",
                            content: V
                        }), (0, s.jsx)("meta", {
                            property: "og:site_name",
                            content: xe.qt
                        }), (0, s.jsx)("meta", {
                            property: "og:image",
                            content: j
                        }), (0, s.jsx)("meta", {
                            property: "twitter:title",
                            content: V
                        }), (0, s.jsx)("meta", {
                            property: "twitter:site",
                            content: xe.qt
                        }), (0, s.jsx)("meta", {
                            property: "twitter:image",
                            content: j
                        }), (0, s.jsx)("meta", {
                            property: "twitter:image:src",
                            content: j
                        }), (0, s.jsx)("meta", {
                            property: "twitter:card",
                            content: "summary_large_image"
                        }), M && (0, s.jsx)("meta", {
                            name: "viewport",
                            content: "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
                        }), P.map((function(e) {
                            var t = e.lang,
                                n = (0, a.A)(e, ["lang"]);
                            return (0, s.jsx)("link", (0, r.A)({}, n), t)
                        }))]
                    }), (0, s.jsx)(Ne, {
                        withHeader: h,
                        withFooter: b,
                        theme: g
                    }), U && (0, s.jsx)(Ie, {}), null === e || void 0 === e ? void 0 : e.children, T && (0, s.jsx)(ye, {
                        orionBusinessTypeList: O
                    }), D ? (0, s.jsx)(ae, (0, r.A)({
                        title: n("popup-universalLink-title"),
                        subtitle: n("popup-universalLink-subtitle"),
                        stayWebButtonText: n("popup-universalLink-cta-stayWeb"),
                        appJumpButtonText: n("popup-universalLink-cta-appJump"),
                        downloadButtonText: n("popup-universalLink-cta-downloadApp")
                    }, (0, p.A)(D) ? D : {})) : null]
                }, g)
            }
        },
        Lp65: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => d
            });
            var i = n("wIZF"),
                r = n("DTvD"),
                o = n.n(r),
                a = n("RGyw"),
                c = n("O94r"),
                s = n.n(c),
                l = n("fvKX"),
                u = o().forwardRef((function(e, t) {
                    var n = (0, l.r)().prefixCls,
                        r = s()("".concat(n, "-flex"), e.className);
                    return o().createElement(a.A, (0, i.__assign)({}, e, {
                        ref: t,
                        className: r
                    }))
                }));
            u.displayName = "Flex";
            const d = u
        },
        D4P9: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => m
            });
            var i = n("wIZF"),
                r = n("DTvD"),
                o = n.n(r),
                a = n("9xbI");
            const c = (0, r.forwardRef)((function(e, t) {
                var n = e.as,
                    r = void 0 === n ? "button" : n,
                    c = (0, i.__rest)(e, ["as"]);
                return o().createElement(a.A, (0, i.__assign)({}, c, {
                    as: r,
                    ref: t
                }))
            }));
            var s = n("qrIQ"),
                l = n("O94r"),
                u = n.n(l),
                d = n("W2aP"),
                p = n("eeEA"),
                f = n("fvKX"),
                h = (0, r.forwardRef)((function(e, t) {
                    var n, a = e.variant,
                        l = void 0 === a ? "primary" : a,
                        h = e.sz,
                        m = void 0 === h ? "middle" : h,
                        v = e.inactive,
                        b = e.loading,
                        g = e.onClick,
                        w = e.subLine,
                        y = e.children,
                        x = e.textVariant,
                        _ = void 0 === x ? "text" === l ? "yellow" : "black" : x,
                        k = e.iconVariant,
                        C = void 0 === k ? "line" : k,
                        E = (e["aria-label"], (0, i.__rest)(e, ["variant", "sz", "inactive", "loading", "onClick", "subLine", "children", "textVariant", "iconVariant", "aria-label"])),
                        A = (0, f.r)(),
                        S = A.prefixCls,
                        T = A.isRTL,
                        L = "".concat(S, "-button"),
                        O = "text" === l || "info" === l,
                        I = "icon" === l,
                        D = u()(L, ((n = {})["".concat(L, "-rtl")] = !!T, n["".concat(L, "__").concat(l)] = !!l, n["".concat(L, "__").concat(l, "__").concat(_)] = O && !!_, n["".concat(L, "__").concat(l, "__").concat(C)] = I && !!C, n["data-size-".concat(m)] = !!m, n["data-size-".concat(m, "-two-line")] = !!m && !!w, n["data-two-line"] = !!w, n.inactive = !!v, n), e.className),
                        R = !v && "function" === typeof g,
                        P = s.lq ? "none" : e.type,
                        j = R ? g : void 0,
                        N = (0, r.useMemo)((function() {
                            return b ? o().createElement(d.A, null) : o().createElement(o().Fragment, null, y, w && o().createElement(p.Ay, null, w))
                        }), [y, r.useMemo, b]),
                        M = {
                            "aria-disabled": v || b ? "true" : void 0,
                            "aria-busy": b ? "true" : void 0
                        };
                    return o().createElement(c, (0, i.__assign)({
                        key: b ? "loading" : "content"
                    }, M, E, {
                        children: N,
                        ref: t,
                        type: P,
                        className: D,
                        onClick: j
                    }))
                }));
            h.displayName = "Button";
            const m = h
        },
        YgAF: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => u
            });
            var i = n("wIZF"),
                r = n("DTvD"),
                o = n.n(r),
                a = n("O94r"),
                c = n.n(a),
                s = n("eeEA"),
                l = n("fvKX");
            const u = function(e) {
                var t = e.icon,
                    n = e.title,
                    r = e.subTitle,
                    a = e.description,
                    u = e.actions,
                    d = (0, i.__rest)(e, ["icon", "title", "subTitle", "description", "actions"]),
                    p = (0, l.r)().prefixCls,
                    f = "".concat(p, "-modal-confirm"),
                    h = o().isValidElement(t),
                    m = o().isValidElement(u);
                return o().createElement(s.Ay, (0, i.__assign)({}, d, {
                    className: c()(f, e.className)
                }), h ? o().cloneElement(t, {
                    className: "".concat(f, "-icon")
                }) : null, n ? o().createElement(s.Ay, {
                    className: "".concat(f, "-title"),
                    children: n
                }) : null, r ? o().createElement(s.Ay, {
                    className: "".concat(f, "-subtitle"),
                    children: r
                }) : null, a ? o().createElement(s.Ay, {
                    className: "".concat(f, "-desc"),
                    children: a
                }) : null, m ? o().createElement(s.Ay, {
                    className: "".concat(f, "-actions"),
                    children: u
                }) : null)
            }
        },
        W2aP: (e, t, n) => {
            "use strict";
            n.d(t, {
                A: () => p
            });
            var i = n("wIZF"),
                r = n("DTvD"),
                o = n.n(r),
                a = n("O94r"),
                c = n.n(a),
                s = n("eeEA"),
                l = n("fvKX"),
                u = function(e) {
                    return {
                        animationDelay: "".concat(50 * e, "ms")
                    }
                },
                d = function(e) {
                    var t = (0, l.r)().prefixCls,
                        n = c()("".concat(t, "-spinner__nezha"), e.className);
                    return o().createElement(s.Ay, (0, i.__assign)({}, {
                        role: "status",
                        "aria-label": "loading",
                        "aria-live": "polite",
                        "aria-busy": !0
                    }, e, {
                        className: n
                    }), o().createElement(s.Ay, {
                        className: "nezha-line",
                        style: u(1)
                    }), o().createElement(s.Ay, {
                        className: "nezha-line",
                        style: u(2)
                    }), o().createElement(s.Ay, {
                        className: "nezha-line",
                        style: u(3)
                    }), o().createElement(s.Ay, {
                        className: "nezha-line",
                        style: u(4)
                    }))
                };
            d.displayName = "Spinner";
            const p = d
        },
        LNcM: () => {
            ! function() {
                "use strict";
                if ("IntersectionObserver" in window && "IntersectionObserverEntry" in window && "intersectionRatio" in window.IntersectionObserverEntry.prototype) "isIntersecting" in window.IntersectionObserverEntry.prototype || Object.defineProperty(window.IntersectionObserverEntry.prototype, "isIntersecting", {
                    get: function() {
                        return this.intersectionRatio > 0
                    }
                });
                else {
                    var e = function(e) {
                            for (var t = window.document, n = r(t); n;) n = r(t = n.ownerDocument);
                            return t
                        }(),
                        t = [],
                        n = null,
                        i = null;
                    a.prototype.THROTTLE_TIMEOUT = 100, a.prototype.POLL_INTERVAL = null, a.prototype.USE_MUTATION_OBSERVER = !0, a._setupCrossOriginUpdater = function() {
                        return n || (n = function(e, n) {
                            i = e && n ? p(e, n) : {
                                top: 0,
                                bottom: 0,
                                left: 0,
                                right: 0,
                                width: 0,
                                height: 0
                            }, t.forEach((function(e) {
                                e._checkForIntersections()
                            }))
                        }), n
                    }, a._resetCrossOriginUpdater = function() {
                        n = null, i = null
                    }, a.prototype.observe = function(e) {
                        if (!this._observationTargets.some((function(t) {
                                return t.element == e
                            }))) {
                            if (!e || 1 != e.nodeType) throw new Error("target must be an Element");
                            this._registerInstance(), this._observationTargets.push({
                                element: e,
                                entry: null
                            }), this._monitorIntersections(e.ownerDocument), this._checkForIntersections()
                        }
                    }, a.prototype.unobserve = function(e) {
                        this._observationTargets = this._observationTargets.filter((function(t) {
                            return t.element != e
                        })), this._unmonitorIntersections(e.ownerDocument), 0 == this._observationTargets.length && this._unregisterInstance()
                    }, a.prototype.disconnect = function() {
                        this._observationTargets = [], this._unmonitorAllIntersections(), this._unregisterInstance()
                    }, a.prototype.takeRecords = function() {
                        var e = this._queuedEntries.slice();
                        return this._queuedEntries = [], e
                    }, a.prototype._initThresholds = function(e) {
                        var t = e || [0];
                        return Array.isArray(t) || (t = [t]), t.sort().filter((function(e, t, n) {
                            if ("number" != typeof e || isNaN(e) || e < 0 || e > 1) throw new Error("threshold must be a number between 0 and 1 inclusively");
                            return e !== n[t - 1]
                        }))
                    }, a.prototype._parseRootMargin = function(e) {
                        var t = (e || "0px").split(/\s+/).map((function(e) {
                            var t = /^(-?\d*\.?\d+)(px|%)$/.exec(e);
                            if (!t) throw new Error("rootMargin must be specified in pixels or percent");
                            return {
                                value: parseFloat(t[1]),
                                unit: t[2]
                            }
                        }));
                        return t[1] = t[1] || t[0], t[2] = t[2] || t[0], t[3] = t[3] || t[1], t
                    }, a.prototype._monitorIntersections = function(t) {
                        var n = t.defaultView;
                        if (n && -1 == this._monitoringDocuments.indexOf(t)) {
                            var i = this._checkForIntersections,
                                o = null,
                                a = null;
                            this.POLL_INTERVAL ? o = n.setInterval(i, this.POLL_INTERVAL) : (c(n, "resize", i, !0), c(t, "scroll", i, !0), this.USE_MUTATION_OBSERVER && "MutationObserver" in n && (a = new n.MutationObserver(i)).observe(t, {
                                attributes: !0,
                                childList: !0,
                                characterData: !0,
                                subtree: !0
                            })), this._monitoringDocuments.push(t), this._monitoringUnsubscribes.push((function() {
                                var e = t.defaultView;
                                e && (o && e.clearInterval(o), s(e, "resize", i, !0)), s(t, "scroll", i, !0), a && a.disconnect()
                            }));
                            var l = this.root && (this.root.ownerDocument || this.root) || e;
                            if (t != l) {
                                var u = r(t);
                                u && this._monitorIntersections(u.ownerDocument)
                            }
                        }
                    }, a.prototype._unmonitorIntersections = function(t) {
                        var n = this._monitoringDocuments.indexOf(t);
                        if (-1 != n) {
                            var i = this.root && (this.root.ownerDocument || this.root) || e,
                                o = this._observationTargets.some((function(e) {
                                    var n = e.element.ownerDocument;
                                    if (n == t) return !0;
                                    for (; n && n != i;) {
                                        var o = r(n);
                                        if ((n = o && o.ownerDocument) == t) return !0
                                    }
                                    return !1
                                }));
                            if (!o) {
                                var a = this._monitoringUnsubscribes[n];
                                if (this._monitoringDocuments.splice(n, 1), this._monitoringUnsubscribes.splice(n, 1), a(), t != i) {
                                    var c = r(t);
                                    c && this._unmonitorIntersections(c.ownerDocument)
                                }
                            }
                        }
                    }, a.prototype._unmonitorAllIntersections = function() {
                        var e = this._monitoringUnsubscribes.slice(0);
                        this._monitoringDocuments.length = 0, this._monitoringUnsubscribes.length = 0;
                        for (var t = 0; t < e.length; t++) e[t]()
                    }, a.prototype._checkForIntersections = function() {
                        if (this.root || !n || i) {
                            var e = this._rootIsInDom(),
                                t = e ? this._getRootRect() : {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                };
                            this._observationTargets.forEach((function(i) {
                                var r = i.element,
                                    a = u(r),
                                    c = this._rootContainsTarget(r),
                                    s = i.entry,
                                    l = e && c && this._computeTargetAndRootIntersection(r, a, t),
                                    d = null;
                                this._rootContainsTarget(r) ? n && !this.root || (d = t) : d = {
                                    top: 0,
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    width: 0,
                                    height: 0
                                };
                                var p = i.entry = new o({
                                    time: window.performance && performance.now && performance.now(),
                                    target: r,
                                    boundingClientRect: a,
                                    rootBounds: d,
                                    intersectionRect: l
                                });
                                s ? e && c ? this._hasCrossedThreshold(s, p) && this._queuedEntries.push(p) : s && s.isIntersecting && this._queuedEntries.push(p) : this._queuedEntries.push(p)
                            }), this), this._queuedEntries.length && this._callback(this.takeRecords(), this)
                        }
                    }, a.prototype._computeTargetAndRootIntersection = function(t, r, o) {
                        if ("none" != window.getComputedStyle(t).display) {
                            for (var a = r, c = h(t), s = !1; !s && c;) {
                                var d = null,
                                    f = 1 == c.nodeType ? window.getComputedStyle(c) : {};
                                if ("none" == f.display) return null;
                                if (c == this.root || 9 == c.nodeType)
                                    if (s = !0, c == this.root || c == e) n && !this.root ? !i || 0 == i.width && 0 == i.height ? (c = null, d = null, a = null) : d = i : d = o;
                                    else {
                                        var m = h(c),
                                            v = m && u(m),
                                            b = m && this._computeTargetAndRootIntersection(m, v, o);
                                        v && b ? (c = m, d = p(v, b)) : (c = null, a = null)
                                    }
                                else {
                                    var g = c.ownerDocument;
                                    c != g.body && c != g.documentElement && "visible" != f.overflow && (d = u(c))
                                }
                                if (d && (a = l(d, a)), !a) break;
                                c = c && h(c)
                            }
                            return a
                        }
                    }, a.prototype._getRootRect = function() {
                        var t;
                        if (this.root && !m(this.root)) t = u(this.root);
                        else {
                            var n = m(this.root) ? this.root : e,
                                i = n.documentElement,
                                r = n.body;
                            t = {
                                top: 0,
                                left: 0,
                                right: i.clientWidth || r.clientWidth,
                                width: i.clientWidth || r.clientWidth,
                                bottom: i.clientHeight || r.clientHeight,
                                height: i.clientHeight || r.clientHeight
                            }
                        }
                        return this._expandRectByRootMargin(t)
                    }, a.prototype._expandRectByRootMargin = function(e) {
                        var t = this._rootMarginValues.map((function(t, n) {
                                return "px" == t.unit ? t.value : t.value * (n % 2 ? e.width : e.height) / 100
                            })),
                            n = {
                                top: e.top - t[0],
                                right: e.right + t[1],
                                bottom: e.bottom + t[2],
                                left: e.left - t[3]
                            };
                        return n.width = n.right - n.left, n.height = n.bottom - n.top, n
                    }, a.prototype._hasCrossedThreshold = function(e, t) {
                        var n = e && e.isIntersecting ? e.intersectionRatio || 0 : -1,
                            i = t.isIntersecting ? t.intersectionRatio || 0 : -1;
                        if (n !== i)
                            for (var r = 0; r < this.thresholds.length; r++) {
                                var o = this.thresholds[r];
                                if (o == n || o == i || o < n !== o < i) return !0
                            }
                    }, a.prototype._rootIsInDom = function() {
                        return !this.root || f(e, this.root)
                    }, a.prototype._rootContainsTarget = function(t) {
                        var n = this.root && (this.root.ownerDocument || this.root) || e;
                        return f(n, t) && (!this.root || n == t.ownerDocument)
                    }, a.prototype._registerInstance = function() {
                        t.indexOf(this) < 0 && t.push(this)
                    }, a.prototype._unregisterInstance = function() {
                        var e = t.indexOf(this); - 1 != e && t.splice(e, 1)
                    }, window.IntersectionObserver = a, window.IntersectionObserverEntry = o
                }

                function r(e) {
                    try {
                        return e.defaultView && e.defaultView.frameElement || null
                    } catch (t) {
                        return null
                    }
                }

                function o(e) {
                    this.time = e.time, this.target = e.target, this.rootBounds = d(e.rootBounds), this.boundingClientRect = d(e.boundingClientRect), this.intersectionRect = d(e.intersectionRect || {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }), this.isIntersecting = !!e.intersectionRect;
                    var t = this.boundingClientRect,
                        n = t.width * t.height,
                        i = this.intersectionRect,
                        r = i.width * i.height;
                    this.intersectionRatio = n ? Number((r / n).toFixed(4)) : this.isIntersecting ? 1 : 0
                }

                function a(e, t) {
                    var n = t || {};
                    if ("function" != typeof e) throw new Error("callback must be a function");
                    if (n.root && 1 != n.root.nodeType && 9 != n.root.nodeType) throw new Error("root must be a Document or Element");
                    this._checkForIntersections = function(e, t) {
                        var n = null;
                        return function() {
                            n || (n = setTimeout((function() {
                                e(), n = null
                            }), t))
                        }
                    }(this._checkForIntersections.bind(this), this.THROTTLE_TIMEOUT), this._callback = e, this._observationTargets = [], this._queuedEntries = [], this._rootMarginValues = this._parseRootMargin(n.rootMargin), this.thresholds = this._initThresholds(n.threshold), this.root = n.root || null, this.rootMargin = this._rootMarginValues.map((function(e) {
                        return e.value + e.unit
                    })).join(" "), this._monitoringDocuments = [], this._monitoringUnsubscribes = []
                }

                function c(e, t, n, i) {
                    "function" == typeof e.addEventListener ? e.addEventListener(t, n, i || !1) : "function" == typeof e.attachEvent && e.attachEvent("on" + t, n)
                }

                function s(e, t, n, i) {
                    "function" == typeof e.removeEventListener ? e.removeEventListener(t, n, i || !1) : "function" == typeof e.detatchEvent && e.detatchEvent("on" + t, n)
                }

                function l(e, t) {
                    var n = Math.max(e.top, t.top),
                        i = Math.min(e.bottom, t.bottom),
                        r = Math.max(e.left, t.left),
                        o = Math.min(e.right, t.right),
                        a = o - r,
                        c = i - n;
                    return a >= 0 && c >= 0 && {
                        top: n,
                        bottom: i,
                        left: r,
                        right: o,
                        width: a,
                        height: c
                    } || null
                }

                function u(e) {
                    var t;
                    try {
                        t = e.getBoundingClientRect()
                    } catch (n) {}
                    return t ? (t.width && t.height || (t = {
                        top: t.top,
                        right: t.right,
                        bottom: t.bottom,
                        left: t.left,
                        width: t.right - t.left,
                        height: t.bottom - t.top
                    }), t) : {
                        top: 0,
                        bottom: 0,
                        left: 0,
                        right: 0,
                        width: 0,
                        height: 0
                    }
                }

                function d(e) {
                    return !e || "x" in e ? e : {
                        top: e.top,
                        y: e.top,
                        bottom: e.bottom,
                        left: e.left,
                        x: e.left,
                        right: e.right,
                        width: e.width,
                        height: e.height
                    }
                }

                function p(e, t) {
                    var n = t.top - e.top,
                        i = t.left - e.left;
                    return {
                        top: n,
                        left: i,
                        height: t.height,
                        width: t.width,
                        bottom: n + t.height,
                        right: i + t.width
                    }
                }

                function f(e, t) {
                    for (var n = t; n;) {
                        if (n == e) return !0;
                        n = h(n)
                    }
                    return !1
                }

                function h(t) {
                    var n = t.parentNode;
                    return 9 == t.nodeType && t != e ? r(t) : (n && n.assignedSlot && (n = n.assignedSlot.parentNode), n && 11 == n.nodeType && n.host ? n.host : n)
                }

                function m(e) {
                    return e && 9 === e.nodeType
                }
            }()
        },
        sZZk: function(e, t, n) {
            ! function(t, i) {
                var r;
                e.exports = (r = n("DTvD"), function(e) {
                    function t(i) {
                        if (n[i]) return n[i].exports;
                        var r = n[i] = {
                            i: i,
                            l: !1,
                            exports: {}
                        };
                        return e[i].call(r.exports, r, r.exports, t), r.l = !0, r.exports
                    }
                    var n = {};
                    return t.m = e, t.c = n, t.d = function(e, n, i) {
                        t.o(e, n) || Object.defineProperty(e, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: i
                        })
                    }, t.n = function(e) {
                        var n = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return t.d(n, "a", n), n
                    }, t.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, t.p = "", t(t.s = 7)
                }([function(e, t, n) {
                    "use strict";

                    function i(e, t) {
                        return s(e) || c(e, t) || o(e, t) || r()
                    }

                    function r() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }

                    function o(e, t) {
                        if (e) {
                            if ("string" == typeof e) return a(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(e, t) : void 0
                        }
                    }

                    function a(e, t) {
                        (null == t || t > e.length) && (t = e.length);
                        for (var n = 0, i = new Array(t); n < t; n++) i[n] = e[n];
                        return i
                    }

                    function c(e, t) {
                        if ("undefined" != typeof Symbol && Symbol.iterator in Object(e)) {
                            var n = [],
                                i = !0,
                                r = !1,
                                o = void 0;
                            try {
                                for (var a, c = e[Symbol.iterator](); !(i = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); i = !0);
                            } catch (s) {
                                r = !0, o = s
                            } finally {
                                try {
                                    i || null == c.return || c.return()
                                } finally {
                                    if (r) throw o
                                }
                            }
                            return n
                        }
                    }

                    function s(e) {
                        if (Array.isArray(e)) return e
                    }
                    var l = n(1),
                        u = n.n(l),
                        d = n(8),
                        p = n.n(d),
                        f = n(2),
                        h = n(10),
                        m = n.n(h),
                        v = n(3),
                        b = n(6),
                        g = function(e) {
                            return e.query || Object(v.a)(e)
                        },
                        w = function(e) {
                            if (!e) return null;
                            var t = Object.keys(e);
                            return 0 === t.length ? null : t.reduce((function(t, n) {
                                return t[Object(f.a)(n)] = e[n], t
                            }), {})
                        },
                        y = function() {
                            var e = u.a.useRef(!1);
                            return u.a.useEffect((function() {
                                e.current = !0
                            }), []), e.current
                        },
                        x = function(e) {
                            var t = u.a.useContext(b.a),
                                n = function() {
                                    return w(e) || w(t)
                                },
                                r = i(u.a.useState(n), 2),
                                o = r[0],
                                a = r[1];
                            return u.a.useEffect((function() {
                                var e = n();
                                m()(o, e) || a(e)
                            }), [e, t]), o
                        },
                        _ = function(e) {
                            var t = function() {
                                    return g(e)
                                },
                                n = i(u.a.useState(t), 2),
                                r = n[0],
                                o = n[1];
                            return u.a.useEffect((function() {
                                var e = t();
                                r !== e && o(e)
                            }), [e]), r
                        },
                        k = function(e, t) {
                            var n = function() {
                                    return p()(e, t || {}, !!t)
                                },
                                r = i(u.a.useState(n), 2),
                                o = r[0],
                                a = r[1],
                                c = y();
                            return u.a.useEffect((function() {
                                return c && a(n()),
                                    function() {
                                        o.dispose()
                                    }
                            }), [e, t]), o
                        },
                        C = function(e) {
                            var t = i(u.a.useState(e.matches), 2),
                                n = t[0],
                                r = t[1];
                            return u.a.useEffect((function() {
                                var t = function() {
                                    r(e.matches)
                                };
                                return e.addListener(t), t(),
                                    function() {
                                        e.removeListener(t)
                                    }
                            }), [e]), n
                        },
                        E = function(e, t, n) {
                            var i = x(t),
                                r = _(e);
                            if (!r) throw new Error("Invalid or missing MediaQuery!");
                            var o = k(r, i),
                                a = C(o),
                                c = y();
                            return u.a.useEffect((function() {
                                c && n && n(a)
                            }), [a]), a
                        };
                    t.a = E
                }, function(e, t) {
                    e.exports = r
                }, function(e, t, n) {
                    "use strict";

                    function i(e) {
                        return "-" + e.toLowerCase()
                    }

                    function r(e) {
                        if (c.hasOwnProperty(e)) return c[e];
                        var t = e.replace(o, i);
                        return c[e] = a.test(t) ? "-" + t : t
                    }
                    var o = /[A-Z]/g,
                        a = /^ms-/,
                        c = {};
                    t.a = r
                }, function(e, t, n) {
                    "use strict";
                    var i = n(2),
                        r = n(11),
                        o = function(e) {
                            return "not ".concat(e)
                        },
                        a = function(e, t) {
                            var n = Object(i.a)(e);
                            return "number" == typeof t && (t = "".concat(t, "px")), !0 === t ? n : !1 === t ? o(n) : "(".concat(n, ": ").concat(t, ")")
                        },
                        c = function(e) {
                            return e.join(" and ")
                        },
                        s = function(e) {
                            var t = [];
                            return Object.keys(r.a.all).forEach((function(n) {
                                var i = e[n];
                                null != i && t.push(a(n, i))
                            })), c(t)
                        };
                    t.a = s
                }, function(e, t, n) {
                    "use strict";
                    e.exports = n(13)
                }, function(e, t, n) {
                    "use strict";
                    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
                }, function(e, t, n) {
                    "use strict";
                    var i = n(1),
                        r = n.n(i).a.createContext();
                    t.a = r
                }, function(e, t, n) {
                    "use strict";
                    Object.defineProperty(t, "__esModule", {
                        value: !0
                    });
                    var i = n(0),
                        r = n(17),
                        o = n(3),
                        a = n(6);
                    n.d(t, "default", (function() {
                        return r.a
                    })), n.d(t, "useMediaQuery", (function() {
                        return i.a
                    })), n.d(t, "toQuery", (function() {
                        return o.a
                    })), n.d(t, "Context", (function() {
                        return a.a
                    }))
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t, n) {
                        function i(e) {
                            u && u.addListener(e)
                        }

                        function r(e) {
                            u && u.removeListener(e)
                        }

                        function c(e) {
                            l.matches = e.matches, l.media = e.media
                        }

                        function s() {
                            u && u.removeListener(c)
                        }
                        var l = this;
                        if (a && !n) {
                            var u = a.call(window, e);
                            this.matches = u.matches, this.media = u.media, u.addListener(c)
                        } else this.matches = o(e, t), this.media = e;
                        this.addListener = i, this.removeListener = r, this.dispose = s
                    }

                    function r(e, t, n) {
                        return new i(e, t, n)
                    }
                    var o = n(9).match,
                        a = window.matchMedia;
                    e.exports = r
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t) {
                        return r(e).some((function(e) {
                            var n = e.inverse,
                                i = "all" === e.type || t.type === e.type;
                            if (i && n || !i && !n) return !1;
                            var r = e.expressions.every((function(e) {
                                var n = e.feature,
                                    i = e.modifier,
                                    r = e.value,
                                    s = t[n];
                                if (!s) return !1;
                                switch (n) {
                                    case "orientation":
                                    case "scan":
                                        return s.toLowerCase() === r.toLowerCase();
                                    case "width":
                                    case "height":
                                    case "device-width":
                                    case "device-height":
                                        r = c(r), s = c(s);
                                        break;
                                    case "resolution":
                                        r = a(r), s = a(s);
                                        break;
                                    case "aspect-ratio":
                                    case "device-aspect-ratio":
                                    case "device-pixel-ratio":
                                        r = o(r), s = o(s);
                                        break;
                                    case "grid":
                                    case "color":
                                    case "color-index":
                                    case "monochrome":
                                        r = parseInt(r, 10) || 1, s = parseInt(s, 10) || 0
                                }
                                switch (i) {
                                    case "min":
                                        return s >= r;
                                    case "max":
                                        return s <= r;
                                    default:
                                        return s === r
                                }
                            }));
                            return r && !n || !r && n
                        }))
                    }

                    function r(e) {
                        return e.split(",").map((function(e) {
                            var t = (e = e.trim()).match(s),
                                n = t[1],
                                i = t[2],
                                r = t[3] || "",
                                o = {};
                            return o.inverse = !!n && "not" === n.toLowerCase(), o.type = i ? i.toLowerCase() : "all", r = r.match(/\([^\)]+\)/g) || [], o.expressions = r.map((function(e) {
                                var t = e.match(l),
                                    n = t[1].toLowerCase().match(u);
                                return {
                                    modifier: n[1],
                                    feature: n[2],
                                    value: t[2]
                                }
                            })), o
                        }))
                    }

                    function o(e) {
                        var t, n = Number(e);
                        return n || (n = (t = e.match(/^(\d+)\s*\/\s*(\d+)$/))[1] / t[2]), n
                    }

                    function a(e) {
                        var t = parseFloat(e);
                        switch (String(e).match(p)[1]) {
                            case "dpcm":
                                return t / 2.54;
                            case "dppx":
                                return 96 * t;
                            default:
                                return t
                        }
                    }

                    function c(e) {
                        var t = parseFloat(e);
                        switch (String(e).match(d)[1]) {
                            case "em":
                            case "rem":
                                return 16 * t;
                            case "cm":
                                return 96 * t / 2.54;
                            case "mm":
                                return 96 * t / 2.54 / 10;
                            case "in":
                                return 96 * t;
                            case "pt":
                                return 72 * t;
                            case "pc":
                                return 72 * t / 12;
                            default:
                                return t
                        }
                    }
                    t.match = i, t.parse = r;
                    var s = /(?:(only|not)?\s*([^\s\(\)]+)(?:\s*and)?\s*)?(.+)?/i,
                        l = /\(\s*([^\s\:\)]+)\s*(?:\:\s*([^\s\)]+))?\s*\)/,
                        u = /^(?:(min|max)-)?(.+)/,
                        d = /(em|rem|px|cm|mm|in|pt|pc)?$/,
                        p = /(dpi|dpcm|dppx)?$/
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t) {
                        if (e === t) return !0;
                        if (!e || !t) return !1;
                        var n = Object.keys(e),
                            i = Object.keys(t),
                            r = n.length;
                        if (i.length !== r) return !1;
                        for (var o = 0; o < r; o++) {
                            var a = n[o];
                            if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
                        }
                        return !0
                    }
                    e.exports = i
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t) {
                        var n = Object.keys(e);
                        if (Object.getOwnPropertySymbols) {
                            var i = Object.getOwnPropertySymbols(e);
                            t && (i = i.filter((function(t) {
                                return Object.getOwnPropertyDescriptor(e, t).enumerable
                            }))), n.push.apply(n, i)
                        }
                        return n
                    }

                    function r(e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = null != arguments[t] ? arguments[t] : {};
                            t % 2 ? i(Object(n), !0).forEach((function(t) {
                                o(e, t, n[t])
                            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach((function(t) {
                                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                            }))
                        }
                        return e
                    }

                    function o(e, t, n) {
                        return t in e ? Object.defineProperty(e, t, {
                            value: n,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : e[t] = n, e
                    }
                    var a = n(12),
                        c = n.n(a),
                        s = c.a.oneOfType([c.a.string, c.a.number]),
                        l = {
                            orientation: c.a.oneOf(["portrait", "landscape"]),
                            scan: c.a.oneOf(["progressive", "interlace"]),
                            aspectRatio: c.a.string,
                            deviceAspectRatio: c.a.string,
                            height: s,
                            deviceHeight: s,
                            width: s,
                            deviceWidth: s,
                            color: c.a.bool,
                            colorIndex: c.a.bool,
                            monochrome: c.a.bool,
                            resolution: s
                        },
                        u = r({
                            minAspectRatio: c.a.string,
                            maxAspectRatio: c.a.string,
                            minDeviceAspectRatio: c.a.string,
                            maxDeviceAspectRatio: c.a.string,
                            minHeight: s,
                            maxHeight: s,
                            minDeviceHeight: s,
                            maxDeviceHeight: s,
                            minWidth: s,
                            maxWidth: s,
                            minDeviceWidth: s,
                            maxDeviceWidth: s,
                            minColor: c.a.number,
                            maxColor: c.a.number,
                            minColorIndex: c.a.number,
                            maxColorIndex: c.a.number,
                            minMonochrome: c.a.number,
                            maxMonochrome: c.a.number,
                            minResolution: s,
                            maxResolution: s
                        }, l),
                        d = {
                            all: c.a.bool,
                            grid: c.a.bool,
                            aural: c.a.bool,
                            braille: c.a.bool,
                            handheld: c.a.bool,
                            print: c.a.bool,
                            projection: c.a.bool,
                            screen: c.a.bool,
                            tty: c.a.bool,
                            tv: c.a.bool,
                            embossed: c.a.bool
                        },
                        p = r(r({}, d), u);
                    l.type = Object.keys(d), t.a = {
                        all: p,
                        types: d,
                        matchers: l,
                        features: u
                    }
                }, function(e, t, n) {
                    var i = n(4);
                    e.exports = n(14)(i.isElement, !0)
                }, function(e, t, n) {
                    "use strict";
                    ! function() {
                        function e(e) {
                            return "string" == typeof e || "function" == typeof e || e === w || e === E || e === x || e === y || e === S || e === T || "object" == typeof e && null !== e && (e.$$typeof === O || e.$$typeof === L || e.$$typeof === _ || e.$$typeof === k || e.$$typeof === A || e.$$typeof === D || e.$$typeof === R || e.$$typeof === P || e.$$typeof === I)
                        }

                        function n(e) {
                            if ("object" == typeof e && null !== e) {
                                var t = e.$$typeof;
                                switch (t) {
                                    case b:
                                        var n = e.type;
                                        switch (n) {
                                            case C:
                                            case E:
                                            case w:
                                            case x:
                                            case y:
                                            case S:
                                                return n;
                                            default:
                                                var i = n && n.$$typeof;
                                                switch (i) {
                                                    case k:
                                                    case A:
                                                    case O:
                                                    case L:
                                                    case _:
                                                        return i;
                                                    default:
                                                        return t
                                                }
                                        }
                                    case g:
                                        return t
                                }
                            }
                        }

                        function i(e) {
                            return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), r(e) || n(e) === C
                        }

                        function r(e) {
                            return n(e) === E
                        }

                        function o(e) {
                            return n(e) === k
                        }

                        function a(e) {
                            return n(e) === _
                        }

                        function c(e) {
                            return "object" == typeof e && null !== e && e.$$typeof === b
                        }

                        function s(e) {
                            return n(e) === A
                        }

                        function l(e) {
                            return n(e) === w
                        }

                        function u(e) {
                            return n(e) === O
                        }

                        function d(e) {
                            return n(e) === L
                        }

                        function p(e) {
                            return n(e) === g
                        }

                        function f(e) {
                            return n(e) === x
                        }

                        function h(e) {
                            return n(e) === y
                        }

                        function m(e) {
                            return n(e) === S
                        }
                        var v = "function" == typeof Symbol && Symbol.for,
                            b = v ? Symbol.for("react.element") : 60103,
                            g = v ? Symbol.for("react.portal") : 60106,
                            w = v ? Symbol.for("react.fragment") : 60107,
                            y = v ? Symbol.for("react.strict_mode") : 60108,
                            x = v ? Symbol.for("react.profiler") : 60114,
                            _ = v ? Symbol.for("react.provider") : 60109,
                            k = v ? Symbol.for("react.context") : 60110,
                            C = v ? Symbol.for("react.async_mode") : 60111,
                            E = v ? Symbol.for("react.concurrent_mode") : 60111,
                            A = v ? Symbol.for("react.forward_ref") : 60112,
                            S = v ? Symbol.for("react.suspense") : 60113,
                            T = v ? Symbol.for("react.suspense_list") : 60120,
                            L = v ? Symbol.for("react.memo") : 60115,
                            O = v ? Symbol.for("react.lazy") : 60116,
                            I = v ? Symbol.for("react.block") : 60121,
                            D = v ? Symbol.for("react.fundamental") : 60117,
                            R = v ? Symbol.for("react.responder") : 60118,
                            P = v ? Symbol.for("react.scope") : 60119,
                            j = C,
                            N = E,
                            M = k,
                            U = _,
                            H = b,
                            V = A,
                            B = w,
                            F = O,
                            z = L,
                            W = g,
                            q = x,
                            Z = y,
                            G = S,
                            $ = !1;
                        t.AsyncMode = j, t.ConcurrentMode = N, t.ContextConsumer = M, t.ContextProvider = U, t.Element = H, t.ForwardRef = V, t.Fragment = B, t.Lazy = F, t.Memo = z, t.Portal = W, t.Profiler = q, t.StrictMode = Z, t.Suspense = G, t.isAsyncMode = i, t.isConcurrentMode = r, t.isContextConsumer = o, t.isContextProvider = a, t.isElement = c, t.isForwardRef = s, t.isFragment = l, t.isLazy = u, t.isMemo = d, t.isPortal = p, t.isProfiler = f, t.isStrictMode = h, t.isSuspense = m, t.isValidElementType = e, t.typeOf = n
                    }()
                }, function(e, t, n) {
                    "use strict";

                    function i() {
                        return null
                    }
                    var r = n(4),
                        o = n(15),
                        a = n(5),
                        c = n(16),
                        s = Function.call.bind(Object.prototype.hasOwnProperty),
                        l = function() {};
                    l = function(e) {
                        var t = "Warning: " + e;
                        "undefined" != typeof console && console.error(t);
                        try {
                            throw new Error(t)
                        } catch (n) {}
                    }, e.exports = function(e, t) {
                        function n(e) {
                            var t = e && (S && e[S] || e[T]);
                            if ("function" == typeof t) return t
                        }

                        function u(e, t) {
                            return e === t ? 0 !== e || 1 / e == 1 / t : e !== e && t !== t
                        }

                        function d(e) {
                            this.message = e, this.stack = ""
                        }

                        function p(e) {
                            function n(n, o, c, s, u, p, f) {
                                if (s = s || L, p = p || c, f !== a) {
                                    if (t) {
                                        var h = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");
                                        throw h.name = "Invariant Violation", h
                                    }
                                    if ("undefined" != typeof console) {
                                        var m = s + ":" + c;
                                        !i[m] && r < 3 && (l("You are manually calling a React.PropTypes validation function for the `" + p + "` prop on `" + s + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."), i[m] = !0, r++)
                                    }
                                }
                                return null == o[c] ? n ? new d(null === o[c] ? "The " + u + " `" + p + "` is marked as required in `" + s + "`, but its value is `null`." : "The " + u + " `" + p + "` is marked as required in `" + s + "`, but its value is `undefined`.") : null : e(o, c, s, u, p)
                            }
                            var i = {},
                                r = 0,
                                o = n.bind(null, !1);
                            return o.isRequired = n.bind(null, !0), o
                        }

                        function f(e) {
                            function t(t, n, i, r, o, a) {
                                var c = t[n];
                                return k(c) !== e ? new d("Invalid " + r + " `" + o + "` of type `" + C(c) + "` supplied to `" + i + "`, expected `" + e + "`.") : null
                            }
                            return p(t)
                        }

                        function h(e) {
                            function t(t, n, i, r, o) {
                                if ("function" != typeof e) return new d("Property `" + o + "` of component `" + i + "` has invalid PropType notation inside arrayOf.");
                                var c = t[n];
                                if (!Array.isArray(c)) return new d("Invalid " + r + " `" + o + "` of type `" + k(c) + "` supplied to `" + i + "`, expected an array.");
                                for (var s = 0; s < c.length; s++) {
                                    var l = e(c, s, i, r, o + "[" + s + "]", a);
                                    if (l instanceof Error) return l
                                }
                                return null
                            }
                            return p(t)
                        }

                        function m(e) {
                            function t(t, n, i, r, o) {
                                if (!(t[n] instanceof e)) {
                                    var a = e.name || L;
                                    return new d("Invalid " + r + " `" + o + "` of type `" + A(t[n]) + "` supplied to `" + i + "`, expected instance of `" + a + "`.")
                                }
                                return null
                            }
                            return p(t)
                        }

                        function v(e) {
                            function t(t, n, i, r, o) {
                                for (var a = t[n], c = 0; c < e.length; c++)
                                    if (u(a, e[c])) return null;
                                var s = JSON.stringify(e, (function(e, t) {
                                    return "symbol" === C(t) ? String(t) : t
                                }));
                                return new d("Invalid " + r + " `" + o + "` of value `" + String(a) + "` supplied to `" + i + "`, expected one of " + s + ".")
                            }
                            return Array.isArray(e) ? p(t) : (l(arguments.length > 1 ? "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])." : "Invalid argument supplied to oneOf, expected an array."), i)
                        }

                        function b(e) {
                            function t(t, n, i, r, o) {
                                if ("function" != typeof e) return new d("Property `" + o + "` of component `" + i + "` has invalid PropType notation inside objectOf.");
                                var c = t[n],
                                    l = k(c);
                                if ("object" !== l) return new d("Invalid " + r + " `" + o + "` of type `" + l + "` supplied to `" + i + "`, expected an object.");
                                for (var u in c)
                                    if (s(c, u)) {
                                        var p = e(c, u, i, r, o + "." + u, a);
                                        if (p instanceof Error) return p
                                    }
                                return null
                            }
                            return p(t)
                        }

                        function g(e) {
                            function t(t, n, i, r, o) {
                                for (var c = 0; c < e.length; c++)
                                    if (null == (0, e[c])(t, n, i, r, o, a)) return null;
                                return new d("Invalid " + r + " `" + o + "` supplied to `" + i + "`.")
                            }
                            if (!Array.isArray(e)) return l("Invalid argument supplied to oneOfType, expected an instance of array."), i;
                            for (var n = 0; n < e.length; n++) {
                                var r = e[n];
                                if ("function" != typeof r) return l("Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + E(r) + " at index " + n + "."), i
                            }
                            return p(t)
                        }

                        function w(e) {
                            function t(t, n, i, r, o) {
                                var c = t[n],
                                    s = k(c);
                                if ("object" !== s) return new d("Invalid " + r + " `" + o + "` of type `" + s + "` supplied to `" + i + "`, expected `object`.");
                                for (var l in e) {
                                    var u = e[l];
                                    if (u) {
                                        var p = u(c, l, i, r, o + "." + l, a);
                                        if (p) return p
                                    }
                                }
                                return null
                            }
                            return p(t)
                        }

                        function y(e) {
                            function t(t, n, i, r, c) {
                                var s = t[n],
                                    l = k(s);
                                if ("object" !== l) return new d("Invalid " + r + " `" + c + "` of type `" + l + "` supplied to `" + i + "`, expected `object`.");
                                var u = o({}, t[n], e);
                                for (var p in u) {
                                    var f = e[p];
                                    if (!f) return new d("Invalid " + r + " `" + c + "` key `" + p + "` supplied to `" + i + "`.\nBad object: " + JSON.stringify(t[n], null, "  ") + "\nValid keys: " + JSON.stringify(Object.keys(e), null, "  "));
                                    var h = f(s, p, i, r, c + "." + p, a);
                                    if (h) return h
                                }
                                return null
                            }
                            return p(t)
                        }

                        function x(t) {
                            switch (typeof t) {
                                case "number":
                                case "string":
                                case "undefined":
                                    return !0;
                                case "boolean":
                                    return !t;
                                case "object":
                                    if (Array.isArray(t)) return t.every(x);
                                    if (null === t || e(t)) return !0;
                                    var i = n(t);
                                    if (!i) return !1;
                                    var r, o = i.call(t);
                                    if (i !== t.entries) {
                                        for (; !(r = o.next()).done;)
                                            if (!x(r.value)) return !1
                                    } else
                                        for (; !(r = o.next()).done;) {
                                            var a = r.value;
                                            if (a && !x(a[1])) return !1
                                        }
                                    return !0;
                                default:
                                    return !1
                            }
                        }

                        function _(e, t) {
                            return "symbol" === e || !!t && ("Symbol" === t["@@toStringTag"] || "function" == typeof Symbol && t instanceof Symbol)
                        }

                        function k(e) {
                            var t = typeof e;
                            return Array.isArray(e) ? "array" : e instanceof RegExp ? "object" : _(t, e) ? "symbol" : t
                        }

                        function C(e) {
                            if (void 0 === e || null === e) return "" + e;
                            var t = k(e);
                            if ("object" === t) {
                                if (e instanceof Date) return "date";
                                if (e instanceof RegExp) return "regexp"
                            }
                            return t
                        }

                        function E(e) {
                            var t = C(e);
                            switch (t) {
                                case "array":
                                case "object":
                                    return "an " + t;
                                case "boolean":
                                case "date":
                                case "regexp":
                                    return "a " + t;
                                default:
                                    return t
                            }
                        }

                        function A(e) {
                            return e.constructor && e.constructor.name ? e.constructor.name : L
                        }
                        var S = "function" == typeof Symbol && Symbol.iterator,
                            T = "@@iterator",
                            L = "<<anonymous>>",
                            O = {
                                array: f("array"),
                                bool: f("boolean"),
                                func: f("function"),
                                number: f("number"),
                                object: f("object"),
                                string: f("string"),
                                symbol: f("symbol"),
                                any: p(i),
                                arrayOf: h,
                                element: function() {
                                    function t(t, n, i, r, o) {
                                        var a = t[n];
                                        return e(a) ? null : new d("Invalid " + r + " `" + o + "` of type `" + k(a) + "` supplied to `" + i + "`, expected a single ReactElement.")
                                    }
                                    return p(t)
                                }(),
                                elementType: function() {
                                    function e(e, t, n, i, o) {
                                        var a = e[t];
                                        return r.isValidElementType(a) ? null : new d("Invalid " + i + " `" + o + "` of type `" + k(a) + "` supplied to `" + n + "`, expected a single ReactElement type.")
                                    }
                                    return p(e)
                                }(),
                                instanceOf: m,
                                node: function() {
                                    function e(e, t, n, i, r) {
                                        return x(e[t]) ? null : new d("Invalid " + i + " `" + r + "` supplied to `" + n + "`, expected a ReactNode.")
                                    }
                                    return p(e)
                                }(),
                                objectOf: b,
                                oneOf: v,
                                oneOfType: g,
                                shape: w,
                                exact: y
                            };
                        return d.prototype = Error.prototype, O.checkPropTypes = c, O.resetWarningCache = c.resetWarningCache, O.PropTypes = O, O
                    }
                }, function(e, t, n) {
                    "use strict";

                    function i(e) {
                        if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                        return Object(e)
                    }
                    var r = Object.getOwnPropertySymbols,
                        o = Object.prototype.hasOwnProperty,
                        a = Object.prototype.propertyIsEnumerable;
                    e.exports = function() {
                        try {
                            if (!Object.assign) return !1;
                            var e = new String("abc");
                            if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                            for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                            if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                    return t[e]
                                })).join("")) return !1;
                            var i = {};
                            return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                                i[e] = e
                            })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                        } catch (r) {
                            return !1
                        }
                    }() ? Object.assign : function(e, t) {
                        for (var n, c, s = i(e), l = 1; l < arguments.length; l++) {
                            for (var u in n = Object(arguments[l])) o.call(n, u) && (s[u] = n[u]);
                            if (r) {
                                c = r(n);
                                for (var d = 0; d < c.length; d++) a.call(n, c[d]) && (s[c[d]] = n[c[d]])
                            }
                        }
                        return s
                    }
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t, n, i, s) {
                        for (var l in e)
                            if (c(e, l)) {
                                var u;
                                try {
                                    if ("function" != typeof e[l]) {
                                        var d = Error((i || "React class") + ": " + n + " type `" + l + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[l] + "`.");
                                        throw d.name = "Invariant Violation", d
                                    }
                                    u = e[l](t, l, i, n, null, o)
                                } catch (f) {
                                    u = f
                                }
                                if (!u || u instanceof Error || r((i || "React class") + ": type specification of " + n + " `" + l + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof u + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."), u instanceof Error && !(u.message in a)) {
                                    a[u.message] = !0;
                                    var p = s ? s() : "";
                                    r("Failed " + n + " type: " + u.message + (null != p ? p : ""))
                                }
                            }
                    }
                    var r = function() {},
                        o = n(5),
                        a = {},
                        c = Function.call.bind(Object.prototype.hasOwnProperty);
                    r = function(e) {
                        var t = "Warning: " + e;
                        "undefined" != typeof console && console.error(t);
                        try {
                            throw new Error(t)
                        } catch (n) {}
                    }, i.resetWarningCache = function() {
                        a = {}
                    }, e.exports = i
                }, function(e, t, n) {
                    "use strict";

                    function i(e, t) {
                        if (null == e) return {};
                        var n, i, o = r(e, t);
                        if (Object.getOwnPropertySymbols) {
                            var a = Object.getOwnPropertySymbols(e);
                            for (i = 0; i < a.length; i++) n = a[i], t.indexOf(n) >= 0 || Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n])
                        }
                        return o
                    }

                    function r(e, t) {
                        if (null == e) return {};
                        var n, i, r = {},
                            o = Object.keys(e);
                        for (i = 0; i < o.length; i++) n = o[i], t.indexOf(n) >= 0 || (r[n] = e[n]);
                        return r
                    }

                    function o(e) {
                        var t = e.children,
                            n = e.device,
                            r = e.onChange,
                            o = i(e, ["children", "device", "onChange"]),
                            c = Object(a.a)(o, n, r);
                        return "function" == typeof t ? t(c) : c ? t : null
                    }
                    t.a = o;
                    var a = n(0)
                }]))
            }("undefined" != typeof self && self)
        }
    }
]);
//# debugId=46952f34-e84a-5b88-b1d1-39ad6c2e7466