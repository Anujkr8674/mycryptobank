(self.webpackChunkresearch_new_ui = self.webpackChunkresearch_new_ui || []).push([
    [637], {
        LCuF: (e, i, r) => {
            "use strict";
            r.d(i, {
                A: () => n
            });
            var t = r("vTXz");
            t.az.displayName = "Box";
            const n = t.az
        },
        pf6g: (e, i, r) => {
            "use strict";
            var t;
            r.d(i, {
                    R4: () => E,
                    v8: () => A,
                    _$: () => T,
                    xM: () => p,
                    Bp: () => O,
                    tY: () => t,
                    Cr: () => l,
                    i2: () => m,
                    U7: () => c,
                    RN: () => R,
                    Pg: () => j,
                    gT: () => S,
                    M7: () => b,
                    rV: () => u,
                    no: () => d,
                    Lv: () => C,
                    i5: () => f,
                    Lr: () => G,
                    LD: () => y,
                    dM: () => g,
                    K5: () => v,
                    Nb: () => x
                }),
                function(e) {
                    e.ANALYSIS = "analysis", e.PROJECTS = "projects"
                }(t || (t = {}));
            var n, s, o, a, c = "https://public.bnbstatic.com/image/cms/blog/20211104/2a5cd7eb-e808-4342-85e6-b52ffb8a7a9e.png",
                l = {
                    ANALYSIS: "Insights & Analysis",
                    PROJECTS: "Project Reports"
                },
                d = "Digital Assets and Cryptocurrencies | Blockchain Research | Crypto Analysis",
                u = "Binance Research provides institutional-grade analysis, in-depth insights, and unbiased information to all participants in the cryptocurrency and digital asset industry.",
                p = {
                    TITLE: "Insights and Analysis | Digital Asset and Blockchain Research",
                    DESC: "Find all insights and analysis from Binance Research. Institutional-grade research reports about Bitcoin, cryptocurrencies, digital assets, and blockchain."
                },
                f = {
                    TITLE: "Project Reports | Cryptocurrency and Blockchain Description",
                    DESC: "Find all project reports from Binance Research. A deep dive into the world's largest cryptocurrency projects, providing unbiased information to the crypto market."
                },
                w = r("Dz1D"),
                b = "https://app.intotheblock.com/widget.js?pid=binance",
                h = (0, w.PC)(),
                m = (h.NODE_ENV, h.CMS_SAAS_HOST_URL),
                _ = (h.API_HOST, h.API_HOST_PRIVATE),
                g = (h.CACHE_PROXY_HOST, h.GA_TRACKING_ID, h.GTM_TRACKING_ID, h.SITE_HOST),
                v = (h.I18N_BASE_PUBLIC, h.I18N_HOST, h.INTERNAL_API_HOST, h.REDIS_READ, h.REDIS_WRITE, h.SENTRY_DSN, h.SENTRY_ENV, h.STATIC_HOST),
                y = (h.STATIC_HOST_PRIVATE, h.SENSORS_SERVER_HOST),
                A = h.ACCELERATE_DEFAULT_DOMAIN,
                E = h.ACCELERATE_AVAILABLE_DOMAIN,
                T = h.ACCELERATE_ENBLED_SITES,
                k = h.HIDE_RESEARCH_CATEGORY,
                S = void 0 !== k && k,
                C = _,
                O = ["en", "zh-CN"],
                x = {
                    green: "#03a66d",
                    red: "#cf304a"
                },
                R = "research",
                I = r("ezuS"),
                N = r("BK7R"),
                L = r("QUKP"),
                P = r("VmWQ"),
                j = ["product_type", "coin", "category_id", "category_name", "article_id", "article_name", "redirection_url", "redirection_url_path", "share_type", "title"],
                D = (n = {}, (0, I.A)(n, P.N6.BINANCE_HOMEPAGE, {
                    event: "webClick"
                }), (0, I.A)(n, P.N6.RESEARCH_HOMEPAGE, {
                    event: "webClick"
                }), (0, I.A)(n, P.N6.SEE_MORE, {
                    event: "webClick"
                }), (0, I.A)(n, P.N6.CATEGORY, {
                    event: "webClick"
                }), (0, I.A)(n, P.N6.SEARCH_INPUT, {
                    event: "webClick"
                }), (0, I.A)(n, P.N6.SEARCH_RESULTS, {
                    event: "webClick"
                }), (0, I.A)(n, P.N6.LANGUAGE_TOGGLE, {
                    event: "webClick"
                }), (0, I.A)(n, P.R5.ITEM, {
                    event: "webClick"
                }), (0, I.A)(n, P.R5.SOCIAL_MEDIA_ICON, {
                    event: "webClick"
                }), n),
                B = {
                    research_homepage: (s = {}, (0, I.A)(s, P.ct.HOMEPAGE, {
                        event: "pageView"
                    }), (0, I.A)(s, P.ct.COIN_PRICE_WIDGETS, {
                        event: "webClick"
                    }), (0, I.A)(s, P.ct.PINNED_POST, {
                        event: "webClick"
                    }), (0, I.A)(s, P.ct.SEE_ALL_BUTTON, {
                        event: "webClick"
                    }), (0, I.A)(s, P.ct.ARTICLE_CARD, {
                        event: "webClick"
                    }), (0, I.A)(s, P.ct.READ_REPORT_BUTTON, {
                        event: "webClick"
                    }), (0, I.A)(s, P.ct.MEDIA_LOGO, {
                        event: "webClick"
                    }), s),
                    research_category_article_page: (o = {}, (0, I.A)(o, P.Bh.ARTICLE_LIST_PAGE, {
                        event: "pageView"
                    }), (0, I.A)(o, P.Bh.ARTICLE_CARD, {
                        event: "webClick"
                    }), o),
                    research_article_detail_page: (a = {}, (0, I.A)(a, P.SF.ARTICLE_DETAIL_PAGE, {
                        event: "pageView"
                    }), (0, I.A)(a, P.SF.TRADE_WIDGET, {
                        event: "webClick"
                    }), (0, I.A)(a, P.SF.SHARE_ICONS, {
                        event: "webClick"
                    }), (0, I.A)(a, P.SF.TABLE_OF_CONTENTS, {
                        event: "webClick"
                    }), (0, I.A)(a, P.SF.RELATED_POSTS, {
                        event: "webClick"
                    }), (0, I.A)(a, P.SF.ARTICLE_DETAIL_PAGE_CONTENTS, {
                        event: "webClick"
                    }), (0, I.A)(a, P.SF.RESEARCH_ARTICLE_DETAIL_PAGE_REGISTER_WIDGET_TOP_WEB, {
                        event: "webClick"
                    }), (0, I.A)(a, P.SF.RESEARCH_ARTICLE_DETAIL_PAGE_REGISTER_WIDGET_BOTTOM, {
                        event: "webClick"
                    }), a)
                },
                G = Object.keys(B).reduce((function(e, i) {
                    return (0, L.A)((0, N.A)({}, e), (0, I.A)({}, i, (0, N.A)({}, B[i], D)))
                }), {})
        },
        eLj4: (e, i, r) => {
            "use strict";
            r.d(i, {
                default: () => re
            });
            var t, n = r("TrCV"),
                s = r("AXwM"),
                o = r("LCuF"),
                a = r("DTvD"),
                c = r.n(a),
                l = r("BK7R"),
                d = r("gZfF"),
                u = r("tEf9"),
                p = r("QUKP"),
                f = r("T3Fm"),
                w = r("zJWh"),
                b = r("vpUY"),
                h = r("dX47"),
                m = r("Cjys"),
                _ = r("zvJu"),
                g = (r("3as9"), (0, b.S)().isHybrid);
            ! function(e) {
                e.Electron = "electron", e.Hybrid = "Hybrid", e.Web = "Web"
            }(t || (t = {}));
            var v, y, A = function() {
                    return /electron/i.test(navigator.userAgent) ? t.Electron : g ? t.Hybrid : t.Web
                },
                E = function(e, i) {
                    var r = document.createElement("script");
                    r.setAttribute("data-ot-ignore", "true"), r.setAttribute("class", "optanon-category-C0001");
                    var t = document.getElementsByTagName("script")[0];
                    r.async = !0, r.src = e, r.onload = i, (null === t || void 0 === t ? void 0 : t.parentNode) ? t.parentNode.insertBefore(r, t) : document.body.appendChild(r)
                },
                T = [],
                k = "UA-162512367-1",
                S = ["track", "quick", "register", "registerPage", "registerOnce", "clearAllRegister", "trackSignup", "trackAbtest", "setProfile", "setOnceProfile", "appendProfile", "incrementProfile", "deleteProfile", "unsetProfile", "identify", "login", "logout", "trackLink", "use"],
                C = (0, b.S)().isHybrid,
                O = (0, m.vt)((0, m.Q)(h)),
                x = function(e) {
                    var i = e.sdk_url,
                        r = void 0 === i ? "https://bin.bnbstatic.com/static/sensors/sensorsdata@1.15.26.js" : i,
                        t = e.heatmap_url,
                        n = void 0 === t ? "https://bin.bnbstatic.com/static/sensors/heatmap@1.15.26.js" : t,
                        s = e.name,
                        o = void 0 === s ? "sensor" : s,
                        a = (0, d.A)(e, ["sdk_url", "heatmap_url", "name"]);
                    if (r = r.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), n = n.replace("sensorsdata@1.15.1.min", "sensorsdata@1.15.26"), window.sensorsDataAnalytic201505 = o, !window[o]) {
                        window[o] = window[o] || function(e) {
                            return function() {
                                for (var i = arguments.length, r = new Array(i), t = 0; t < i; t++) r[t] = arguments[t];
                                (window[o]._q = window[o]._q || []).push([e, r])
                            }
                        }, v = window[o];
                        for (var c = 0; c < S.length; c++) v[S[c]] = v.call(null, S[c]);
                        v._t || (E(r, (function() {
                            return v = window[o]
                        })), v.para = (0, p.A)((0, l.A)({}, a), {
                            heatmap_url: n
                        }))
                    }
                },
                R = function() {
                    return function() {
                        var e = Object.create(null);
                        S.forEach((function(i) {
                            e[i] = {
                                configurable: !0,
                                get: function() {
                                    return v ? v[i] : (f.o && console.error("error: run ".concat(i, " handler after init")), console.log("empty", v), function() {})
                                }
                            }
                        }));
                        var i = Object.create(null);
                        return Object.defineProperties(i, e), i.init = f.o ? x : function() {}, i
                    }()
                },
                I = function() {
                    for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                    var t;
                    (t = console).log.apply(t, ["ssr call"].concat((0, u.A)(i)))
                },
                N = function() {
                    "y" === w.U.read("data_opt_out") ? window["ga-disable-".concat(k)] = !0 : window["ga-disable-".concat(k)] = !1
                },
                L = function(e) {
                    var i = e.sdk_url,
                        r = void 0 === i ? "https://www.google-analytics.com/analytics.js" : i,
                        t = e.name,
                        n = void 0 === t ? "ga" : t;
                    window.GoogleAnalyticsObject = n, window[n] || (window[n] = window[n] || function() {
                        for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                        (window[n].q = window[n].q || []).push(i)
                    }, window[n].l = +new Date), document.querySelector("script[src*=analytics]") || E(r, (function() {
                        return y = window[n]
                    })), (y = window[n])("create", k, "auto")
                };
            const P = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (f.o) {
                    N(), L(e);
                    var i = function() {
                        for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                        y.apply(void 0, (0, u.A)(i))
                    };
                    return i.track = function(e, i, r) {
                        y("send", {
                            hitType: "event",
                            eventCategory: e,
                            eventAction: null === i || void 0 === i ? void 0 : i.elementID,
                            eventLabel: window.location,
                            custom_dimension: i,
                            hitCallback: r
                        })
                    }, i.login = function(e) {
                        y("set", "userId", e)
                    }, i
                }
                var r = function() {};
                return r.track = I, r.login = I, r
            };
            var j = r("err1"),
                D = function(e) {
                    console.warn("You login ".concat(e, ",but never init sensor or ga"))
                };
            const B = function(e) {
                return D(e)
            };
            var G = r("sViW"),
                H = r("3yYM"),
                M = r.n(H),
                z = r("tbM7"),
                F = r("BMJD"),
                U = function(e) {
                    if (f.o) {
                        var i = window.location.host;
                        (i.includes("qa1fdg") || i.includes("devfdg") || i.includes("localhost")) && console.info("datalayer", e), window.dataLayer = window.dataLayer || [], "y" === w.U.read("data_opt_out") || window.dataLayer.push(e)
                    }
                },
                V = function() {
                    var e = (0, G.A)(M().mark((function e(i, r) {
                        var t, n, s, o, a, c, d;
                        return M().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    if (t = i.getUserId, n = i.cancel, s = i.extraParams, f.o && !n && r) {
                                        e.next = 3;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 3:
                                    if (o = window.location.pathname.match(/\/[a-z]{2}(-[a-zA-Z]{2})?(\/.*)?/), a = o ? o[2] : "/", c = {
                                            pageName: a,
                                            bncUUID: w.U.read("bnc-uuid")
                                        }, !window.location.origin.startsWith("https")) {
                                        e.next = 23;
                                        break
                                    }
                                    return e.next = 9, (0, z.CY)();
                                case 9:
                                    if (!e.sent) {
                                        e.next = 23;
                                        break
                                    }
                                    if (!t) {
                                        e.next = 17;
                                        break
                                    }
                                    return e.next = 14, t();
                                case 14:
                                    e.t0 = e.sent, e.next = 20;
                                    break;
                                case 17:
                                    return e.next = 19, (0, F.Tc)();
                                case 19:
                                    e.t0 = e.sent.userId;
                                case 20:
                                    d = e.t0, c.userId = d, B(d);
                                case 23:
                                    c = (0, l.A)({}, c, "object" === typeof s ? s : {}), U({
                                        event: "page loading",
                                        page_load_info: c
                                    });
                                case 25:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(i, r) {
                        return e.apply(this, arguments)
                    }
                }(),
                q = r("pu3o"),
                W = r.n(q),
                Y = function() {};
            const K = function(e) {
                var i = e.sensorsConfig,
                    r = e.ableGA,
                    n = e.otherDisabledEvent,
                    s = void 0 === n ? T : n,
                    o = e.pageViewLayerConfig,
                    a = void 0 === o ? {} : o,
                    c = e.autoLogin,
                    b = void 0 === c || c;
                Y();
                var h, m, g = [],
                    v = function(e, i, r) {
                        if ((null === i || void 0 === i ? void 0 : i.elementId) && (i.elementID = i.elementId, delete i.elementId), (null === i || void 0 === i ? void 0 : i.extraInfo) && (i.extraInfo = JSON.stringify(i.extraInfo)), location.origin.includes("localhost")) {
                            if (e.startsWith("$")) throw new Error('event name must not start with "$"');
                            if (Number.isInteger(e[0])) throw new Error("event name cannot start with a number");
                            if (!/^[0-9a-zA-Z_\$]+$/.test(e)) throw new Error("event name can only contain numbers/letters/underscores/$")
                        }
                        h.track(e, i, r)
                    };
                try {
                    window.__PIKA_TRACK__ && (h = window.__PIKA_TRACK__.sensors, g.push(v))
                } catch (U) {}
                if (!window.__PIKA_TRACK__ && i) {
                    var y = i.staticHost,
                        E = (i.update, i.old),
                        k = (i.test, i.publicParams),
                        S = i.initParams,
                        x = (0, d.A)(i, ["staticHost", "update", "old", "test", "publicParams", "initParams"]);
                    h = R();
                    var I = (0, l.A)({
                        name: "SensorsSdk",
                        send_type: "beacon",
                        use_client_time: !0,
                        datasend_timeout: 1e4,
                        is_track_single_page: !0,
                        app_js_bridge: {
                            white_list: (0, u.A)(new Set([null === x || void 0 === x ? void 0 : x.server_url, "https://sensors.binance.cloud/sa?project=binance", "https://api.saasexch.com/bapi/fe/usd/sa?project=binance", "https://api.saasexch.cc/bapi/fe/usd/sa?project=binance", "https://api.saasexch.co/bapi/fe/usd/sa?project=binance"].filter(Boolean)))
                        },
                        show_log: !1,
                        heatmap: {
                            collect_tags: {
                                div: !0
                            }
                        }
                    }, x);
                    y && (E ? Object.assign(I, {
                        sdk_url: "".concat(y, "/static/sensors/sensorsdata@1.15.26.js"),
                        heatmap_url: "".concat(y, "/static/sensors/heatmap@1.15.26.js"),
                        vtrack_url: "".concat(y, "/static/sensors/vtrack.min.js")
                    }) : Object.assign(I, {
                        sdk_url: "".concat(y, "/static/sensors/sensorsdata@1.26.12.js"),
                        heatmap_url: "".concat(y, "/static/sensors/heatmap@1.26.12.js"),
                        vtrack_url: "".concat(y, "/static/sensors/vtrack@1.26.12.js")
                    }));
                    try {
                        var N, L, B, G = (null === (L = null === x || void 0 === x || null === (N = x.server_url) || void 0 === N ? void 0 : N.split("?")) || void 0 === L ? void 0 : L[1]) || "",
                            H = W().parse(G).project;
                        H && (B = "https://ss.datasconsole.com?project=".concat(H)), B && (I.web_url = B)
                    } catch (U) {}
                    S && Object.assign(I, S), h.init(I),
                        function(e, i) {
                            if (f.o) {
                                (0, _.o)(i);
                                var r = /\/([a-z]{2}(-[a-zA-Z]{2})?)(\/)?/,
                                    n = window.location,
                                    s = n.pathname,
                                    o = n.hash,
                                    a = s.match(r),
                                    c = t.Web,
                                    d = a ? a[1] : String();
                                if (A() === t.Electron && (a = o.match(r), d = a ? a[1] : String(), c = t.Electron), C) {
                                    var u = !0,
                                        b = [],
                                        h = e.quick;
                                    Object.defineProperty(e, "quick", {
                                        get: function() {
                                            return function(e) {
                                                u ? b.push((function() {
                                                    return h(e)
                                                })) : h(e)
                                            }
                                        }
                                    }), O.getAppConfig().then((function(r) {
                                        var t = r.project_type;
                                        u = !1, e.registerPage((0, p.A)((0, l.A)({
                                            $url: window.location.href,
                                            $bot_name: w.U.read("bnc-uuid"),
                                            df_1: t,
                                            df_fvideoid: w.U.read("BNC_FV_KEY")
                                        }, i), {
                                            df_2: d,
                                            theme: w.U.read("theme")
                                        })), b.forEach((function(e) {
                                            return e()
                                        }))
                                    }))
                                } else e.registerPage((0, p.A)((0, l.A)({
                                    $url: window.location.href,
                                    $bot_name: w.U.read("bnc-uuid"),
                                    df_1: c,
                                    df_fvideoid: w.U.read("BNC_FV_KEY")
                                }, i), {
                                    df_2: d,
                                    theme: w.U.read("theme")
                                }))
                            }
                        }(h, k), h.use("PageLeave", {
                            custom_props: {},
                            heartbeat_interval_time: 5
                        }), g.push(v)
                }
                if (r) {
                    var M;
                    m = P();
                    g.push((function() {
                        for (var e = arguments.length, i = new Array(e), r = 0; r < e; r++) i[r] = arguments[r];
                        return (M = m).track.apply(M, (0, u.A)(i))
                    }))
                }
                if (g.length) {
                    var z = function(e, i, r) {
                        var t = [],
                            n = function() {
                                var e = {
                                    gaTrack: "gaDisabled",
                                    bTrack: "bTrackDisabled",
                                    sensorsTrack: "sensorsDisabled"
                                };
                                return function(i, r) {
                                    return !r[e[i]]
                                }
                            }();
                        return function(e, i) {
                            return !Array.isArray(i) || !i.find((function(i) {
                                return i === e
                            }))
                        }(e, s) && g.forEach((function(s) {
                            n(s.name, r) && t.push(function(e, i, r) {
                                return new Promise((function(t) {
                                    r(e, (0, l.A)({}, i), (function(e) {
                                        return t({
                                            type: r.name,
                                            success: "boolean" !== typeof e || e
                                        })
                                    })), setTimeout((function() {
                                        t({
                                            type: r.name,
                                            success: !1
                                        })
                                    }), 5e3)
                                }))
                            }(e, i, s))
                        })), Promise.all(t).then(null === r || void 0 === r ? void 0 : r.callback), t[t.length - 1]
                    };
                    z && (0, j.D)(z),
                        function(e) {
                            D = e
                        }((function(e) {
                            h && h.login(e), m && m.login(e)
                        }))
                }
                try {
                    if (window.__PIKA_TRACK__) return window.__PIKA_TRACK__
                } catch (q) {}
                V(a, b);
                try {
                    var F = Object.create(h);
                    Object.defineProperty(F, "quick", {
                        configurable: !0,
                        value: function() {}
                    }), window.__PIKA_TRACK__ = {
                        sensors: F,
                        ga: m
                    }
                } catch (K) {}
                return {
                    sensors: h,
                    ga: m
                }
            };
            var $ = r("pf6g");
            const Q = (0, a.memo)((function() {
                return (0, a.useEffect)((function() {
                    try {
                        K({
                            sensorsConfig: {
                                name: "sensors",
                                server_url: $.LD,
                                staticHost: $.K5,
                                callback_timeout: 2e3
                            },
                            ableGA: !1
                        })
                    } catch (e) {
                        console.error(e)
                    }
                }), []), (0, n.jsx)(c().Fragment, {})
            }));
            var Z = r("VA12"),
                X = r("H8sf"),
                J = r.n(X),
                ee = r("LJ4M"),
                ie = r("byzX");

            function re() {
                return (0, n.jsxs)(o.A, {
                    children: [(0, n.jsx)(Q, {}), (0, n.jsx)(s.Tp, {})]
                })
            }
            ie.S && $.Lv ? (0, Z.initConfig)({
                baseUrl: $.Lv
            }) : ie.S || (0, Z.initConfig)({
                requestInterceptor: function(e, i) {
                    var r;
                    if (f.o) {
                        var t = (0, ee.read)("BNC-Location");
                        t && (r = J()(i, {
                            headers: {
                                "BNC-Location": t
                            }
                        }))
                    }
                    return [e, r || i]
                },
                accelerate: {
                    checkAccelerable: null,
                    defaultOrigin: $.v8,
                    origins: $.R4,
                    enbleSites: $._$
                }
            })
        },
        VmWQ: (e, i, r) => {
            "use strict";
            var t, n, s, o, a, c;
            r.d(i, {
                    SF: () => o,
                    Bh: () => s,
                    R5: () => c,
                    N6: () => a,
                    ct: () => n,
                    I9: () => t
                }),
                function(e) {
                    e.Twitter = "twitter", e.Facebook = "facebook", e.Telegram = "telegram", e.Reddit = "reddit", e.Vk = "vk", e.Weibo = "weibo"
                }(t || (t = {})),
                function(e) {
                    e.HOMEPAGE = "research_homepage", e.COIN_PRICE_WIDGETS = "research_homepage_coin_price", e.PINNED_POST = "research_homepage_pinned_post", e.SEE_ALL_BUTTON = "research_homepage_category_see_all", e.ARTICLE_CARD = "research_homepage_category_article_card", e.READ_REPORT_BUTTON = "research_homepage_category_coin_report", e.MEDIA_LOGO = "research_homepage_media"
                }(n || (n = {})),
                function(e) {
                    e.ARTICLE_LIST_PAGE = "research_category_article_page", e.ARTICLE_CARD = "research_category_article_page_article_card"
                }(s || (s = {})),
                function(e) {
                    e.ARTICLE_DETAIL_PAGE = "research_article_detail_page", e.TRADE_WIDGET = "research_article_detail_page_trade_widgets", e.SHARE_ICONS = "research_article_detail_page_share", e.TABLE_OF_CONTENTS = "research_article_detail_page_table_contents", e.RELATED_POSTS = "research_article_detail_page_related_article", e.ARTICLE_DETAIL_PAGE_CONTENTS = "research_article_detail_page_contents", e.RESEARCH_ARTICLE_DETAIL_PAGE_REGISTER_WIDGET_TOP_WEB = "research_article_detail_page_register_widget_top_web", e.RESEARCH_ARTICLE_DETAIL_PAGE_REGISTER_WIDGET_BOTTOM = "research_article_detail_page_register_widget_bottom"
                }(o || (o = {})),
                function(e) {
                    e.BINANCE_HOMEPAGE = "research_header_binance_homepage", e.RESEARCH_HOMEPAGE = "research_header_research_homepage", e.SEE_MORE = "research_header_more", e.CATEGORY = "research_header_category", e.SEARCH_INPUT = "research_header_search", e.SEARCH_RESULTS = "research_header_search_dropdown_list", e.LANGUAGE_TOGGLE = "research_header_language_switch"
                }(a || (a = {})),
                function(e) {
                    e.ITEM = "research_footer_item", e.SOCIAL_MEDIA_ICON = "research_footer_media"
                }(c || (c = {}))
        },
        byzX: (e, i, r) => {
            "use strict";
            r.d(i, {
                S: () => t
            });
            var t = !1
        },
        cYYr: e => {
            "use strict";
            var i = String.prototype.replace,
                r = /%20/g,
                t = "RFC1738",
                n = "RFC3986";
            e.exports = {
                default: n,
                formatters: {
                    RFC1738: function(e) {
                        return i.call(e, r, "+")
                    },
                    RFC3986: function(e) {
                        return String(e)
                    }
                },
                RFC1738: t,
                RFC3986: n
            }
        },
        pu3o: (e, i, r) => {
            "use strict";
            var t = r("SYP+"),
                n = r("w7lK"),
                s = r("cYYr");
            e.exports = {
                formats: s,
                parse: n,
                stringify: t
            }
        },
        w7lK: (e, i, r) => {
            "use strict";
            var t = r("V/Lb"),
                n = Object.prototype.hasOwnProperty,
                s = Array.isArray,
                o = {
                    allowDots: !1,
                    allowPrototypes: !1,
                    arrayLimit: 20,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    comma: !1,
                    decoder: t.decode,
                    delimiter: "&",
                    depth: 5,
                    ignoreQueryPrefix: !1,
                    interpretNumericEntities: !1,
                    parameterLimit: 1e3,
                    parseArrays: !0,
                    plainObjects: !1,
                    strictNullHandling: !1
                },
                a = function(e) {
                    return e.replace(/&#(\d+);/g, (function(e, i) {
                        return String.fromCharCode(parseInt(i, 10))
                    }))
                },
                c = function(e, i) {
                    return e && "string" === typeof e && i.comma && e.indexOf(",") > -1 ? e.split(",") : e
                },
                l = function(e, i, r, t) {
                    if (e) {
                        var s = r.allowDots ? e.replace(/\.([^.[]+)/g, "[$1]") : e,
                            o = /(\[[^[\]]*])/g,
                            a = r.depth > 0 && /(\[[^[\]]*])/.exec(s),
                            l = a ? s.slice(0, a.index) : s,
                            d = [];
                        if (l) {
                            if (!r.plainObjects && n.call(Object.prototype, l) && !r.allowPrototypes) return;
                            d.push(l)
                        }
                        for (var u = 0; r.depth > 0 && null !== (a = o.exec(s)) && u < r.depth;) {
                            if (u += 1, !r.plainObjects && n.call(Object.prototype, a[1].slice(1, -1)) && !r.allowPrototypes) return;
                            d.push(a[1])
                        }
                        return a && d.push("[" + s.slice(a.index) + "]"),
                            function(e, i, r, t) {
                                for (var n = t ? i : c(i, r), s = e.length - 1; s >= 0; --s) {
                                    var o, a = e[s];
                                    if ("[]" === a && r.parseArrays) o = [].concat(n);
                                    else {
                                        o = r.plainObjects ? Object.create(null) : {};
                                        var l = "[" === a.charAt(0) && "]" === a.charAt(a.length - 1) ? a.slice(1, -1) : a,
                                            d = parseInt(l, 10);
                                        r.parseArrays || "" !== l ? !isNaN(d) && a !== l && String(d) === l && d >= 0 && r.parseArrays && d <= r.arrayLimit ? (o = [])[d] = n : o[l] = n : o = {
                                            0: n
                                        }
                                    }
                                    n = o
                                }
                                return n
                            }(d, i, r, t)
                    }
                };
            e.exports = function(e, i) {
                var r = function(e) {
                    if (!e) return o;
                    if (null !== e.decoder && void 0 !== e.decoder && "function" !== typeof e.decoder) throw new TypeError("Decoder has to be a function.");
                    if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                    var i = "undefined" === typeof e.charset ? o.charset : e.charset;
                    return {
                        allowDots: "undefined" === typeof e.allowDots ? o.allowDots : !!e.allowDots,
                        allowPrototypes: "boolean" === typeof e.allowPrototypes ? e.allowPrototypes : o.allowPrototypes,
                        arrayLimit: "number" === typeof e.arrayLimit ? e.arrayLimit : o.arrayLimit,
                        charset: i,
                        charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : o.charsetSentinel,
                        comma: "boolean" === typeof e.comma ? e.comma : o.comma,
                        decoder: "function" === typeof e.decoder ? e.decoder : o.decoder,
                        delimiter: "string" === typeof e.delimiter || t.isRegExp(e.delimiter) ? e.delimiter : o.delimiter,
                        depth: "number" === typeof e.depth || !1 === e.depth ? +e.depth : o.depth,
                        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
                        interpretNumericEntities: "boolean" === typeof e.interpretNumericEntities ? e.interpretNumericEntities : o.interpretNumericEntities,
                        parameterLimit: "number" === typeof e.parameterLimit ? e.parameterLimit : o.parameterLimit,
                        parseArrays: !1 !== e.parseArrays,
                        plainObjects: "boolean" === typeof e.plainObjects ? e.plainObjects : o.plainObjects,
                        strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : o.strictNullHandling
                    }
                }(i);
                if ("" === e || null === e || "undefined" === typeof e) return r.plainObjects ? Object.create(null) : {};
                for (var d = "string" === typeof e ? function(e, i) {
                        var r, l = {},
                            d = i.ignoreQueryPrefix ? e.replace(/^\?/, "") : e,
                            u = i.parameterLimit === 1 / 0 ? void 0 : i.parameterLimit,
                            p = d.split(i.delimiter, u),
                            f = -1,
                            w = i.charset;
                        if (i.charsetSentinel)
                            for (r = 0; r < p.length; ++r) 0 === p[r].indexOf("utf8=") && ("utf8=%E2%9C%93" === p[r] ? w = "utf-8" : "utf8=%26%2310003%3B" === p[r] && (w = "iso-8859-1"), f = r, r = p.length);
                        for (r = 0; r < p.length; ++r)
                            if (r !== f) {
                                var b, h, m = p[r],
                                    _ = m.indexOf("]="),
                                    g = -1 === _ ? m.indexOf("=") : _ + 1; - 1 === g ? (b = i.decoder(m, o.decoder, w, "key"), h = i.strictNullHandling ? null : "") : (b = i.decoder(m.slice(0, g), o.decoder, w, "key"), h = t.maybeMap(c(m.slice(g + 1), i), (function(e) {
                                    return i.decoder(e, o.decoder, w, "value")
                                }))), h && i.interpretNumericEntities && "iso-8859-1" === w && (h = a(h)), m.indexOf("[]=") > -1 && (h = s(h) ? [h] : h), n.call(l, b) ? l[b] = t.combine(l[b], h) : l[b] = h
                            }
                        return l
                    }(e, r) : e, u = r.plainObjects ? Object.create(null) : {}, p = Object.keys(d), f = 0; f < p.length; ++f) {
                    var w = p[f],
                        b = l(w, d[w], r, "string" === typeof e);
                    u = t.merge(u, b, r)
                }
                return t.compact(u)
            }
        },
        "SYP+": (e, i, r) => {
            "use strict";
            var t = r("V/Lb"),
                n = r("cYYr"),
                s = Object.prototype.hasOwnProperty,
                o = {
                    brackets: function(e) {
                        return e + "[]"
                    },
                    comma: "comma",
                    indices: function(e, i) {
                        return e + "[" + i + "]"
                    },
                    repeat: function(e) {
                        return e
                    }
                },
                a = Array.isArray,
                c = Array.prototype.push,
                l = function(e, i) {
                    c.apply(e, a(i) ? i : [i])
                },
                d = Date.prototype.toISOString,
                u = n.default,
                p = {
                    addQueryPrefix: !1,
                    allowDots: !1,
                    charset: "utf-8",
                    charsetSentinel: !1,
                    delimiter: "&",
                    encode: !0,
                    encoder: t.encode,
                    encodeValuesOnly: !1,
                    format: u,
                    formatter: n.formatters[u],
                    indices: !1,
                    serializeDate: function(e) {
                        return d.call(e)
                    },
                    skipNulls: !1,
                    strictNullHandling: !1
                },
                f = function e(i, r, n, s, o, c, d, u, f, w, b, h, m, _) {
                    var g, v = i;
                    if ("function" === typeof d ? v = d(r, v) : v instanceof Date ? v = w(v) : "comma" === n && a(v) && (v = t.maybeMap(v, (function(e) {
                            return e instanceof Date ? w(e) : e
                        }))), null === v) {
                        if (s) return c && !m ? c(r, p.encoder, _, "key", b) : r;
                        v = ""
                    }
                    if ("string" === typeof(g = v) || "number" === typeof g || "boolean" === typeof g || "symbol" === typeof g || "bigint" === typeof g || t.isBuffer(v)) return c ? [h(m ? r : c(r, p.encoder, _, "key", b)) + "=" + h(c(v, p.encoder, _, "value", b))] : [h(r) + "=" + h(String(v))];
                    var y, A = [];
                    if ("undefined" === typeof v) return A;
                    if ("comma" === n && a(v)) y = [{
                        value: v.length > 0 ? v.join(",") || null : void 0
                    }];
                    else if (a(d)) y = d;
                    else {
                        var E = Object.keys(v);
                        y = u ? E.sort(u) : E
                    }
                    for (var T = 0; T < y.length; ++T) {
                        var k = y[T],
                            S = "object" === typeof k && void 0 !== k.value ? k.value : v[k];
                        if (!o || null !== S) {
                            var C = a(v) ? "function" === typeof n ? n(r, k) : r : r + (f ? "." + k : "[" + k + "]");
                            l(A, e(S, C, n, s, o, c, d, u, f, w, b, h, m, _))
                        }
                    }
                    return A
                };
            e.exports = function(e, i) {
                var r, t = e,
                    c = function(e) {
                        if (!e) return p;
                        if (null !== e.encoder && void 0 !== e.encoder && "function" !== typeof e.encoder) throw new TypeError("Encoder has to be a function.");
                        var i = e.charset || p.charset;
                        if ("undefined" !== typeof e.charset && "utf-8" !== e.charset && "iso-8859-1" !== e.charset) throw new TypeError("The charset option must be either utf-8, iso-8859-1, or undefined");
                        var r = n.default;
                        if ("undefined" !== typeof e.format) {
                            if (!s.call(n.formatters, e.format)) throw new TypeError("Unknown format option provided.");
                            r = e.format
                        }
                        var t = n.formatters[r],
                            o = p.filter;
                        return ("function" === typeof e.filter || a(e.filter)) && (o = e.filter), {
                            addQueryPrefix: "boolean" === typeof e.addQueryPrefix ? e.addQueryPrefix : p.addQueryPrefix,
                            allowDots: "undefined" === typeof e.allowDots ? p.allowDots : !!e.allowDots,
                            charset: i,
                            charsetSentinel: "boolean" === typeof e.charsetSentinel ? e.charsetSentinel : p.charsetSentinel,
                            delimiter: "undefined" === typeof e.delimiter ? p.delimiter : e.delimiter,
                            encode: "boolean" === typeof e.encode ? e.encode : p.encode,
                            encoder: "function" === typeof e.encoder ? e.encoder : p.encoder,
                            encodeValuesOnly: "boolean" === typeof e.encodeValuesOnly ? e.encodeValuesOnly : p.encodeValuesOnly,
                            filter: o,
                            format: r,
                            formatter: t,
                            serializeDate: "function" === typeof e.serializeDate ? e.serializeDate : p.serializeDate,
                            skipNulls: "boolean" === typeof e.skipNulls ? e.skipNulls : p.skipNulls,
                            sort: "function" === typeof e.sort ? e.sort : null,
                            strictNullHandling: "boolean" === typeof e.strictNullHandling ? e.strictNullHandling : p.strictNullHandling
                        }
                    }(i);
                "function" === typeof c.filter ? t = (0, c.filter)("", t) : a(c.filter) && (r = c.filter);
                var d, u = [];
                if ("object" !== typeof t || null === t) return "";
                d = i && i.arrayFormat in o ? i.arrayFormat : i && "indices" in i ? i.indices ? "indices" : "repeat" : "indices";
                var w = o[d];
                r || (r = Object.keys(t)), c.sort && r.sort(c.sort);
                for (var b = 0; b < r.length; ++b) {
                    var h = r[b];
                    c.skipNulls && null === t[h] || l(u, f(t[h], h, w, c.strictNullHandling, c.skipNulls, c.encode ? c.encoder : null, c.filter, c.sort, c.allowDots, c.serializeDate, c.format, c.formatter, c.encodeValuesOnly, c.charset))
                }
                var m = u.join(c.delimiter),
                    _ = !0 === c.addQueryPrefix ? "?" : "";
                return c.charsetSentinel && ("iso-8859-1" === c.charset ? _ += "utf8=%26%2310003%3B&" : _ += "utf8=%E2%9C%93&"), m.length > 0 ? _ + m : ""
            }
        },
        "V/Lb": (e, i, r) => {
            "use strict";
            var t = r("cYYr"),
                n = Object.prototype.hasOwnProperty,
                s = Array.isArray,
                o = function() {
                    for (var e = [], i = 0; i < 256; ++i) e.push("%" + ((i < 16 ? "0" : "") + i.toString(16)).toUpperCase());
                    return e
                }(),
                a = function(e, i) {
                    for (var r = i && i.plainObjects ? Object.create(null) : {}, t = 0; t < e.length; ++t) "undefined" !== typeof e[t] && (r[t] = e[t]);
                    return r
                };
            e.exports = {
                arrayToObject: a,
                assign: function(e, i) {
                    return Object.keys(i).reduce((function(e, r) {
                        return e[r] = i[r], e
                    }), e)
                },
                combine: function(e, i) {
                    return [].concat(e, i)
                },
                compact: function(e) {
                    for (var i = [{
                            obj: {
                                o: e
                            },
                            prop: "o"
                        }], r = [], t = 0; t < i.length; ++t)
                        for (var n = i[t], o = n.obj[n.prop], a = Object.keys(o), c = 0; c < a.length; ++c) {
                            var l = a[c],
                                d = o[l];
                            "object" === typeof d && null !== d && -1 === r.indexOf(d) && (i.push({
                                obj: o,
                                prop: l
                            }), r.push(d))
                        }
                    return function(e) {
                        for (; e.length > 1;) {
                            var i = e.pop(),
                                r = i.obj[i.prop];
                            if (s(r)) {
                                for (var t = [], n = 0; n < r.length; ++n) "undefined" !== typeof r[n] && t.push(r[n]);
                                i.obj[i.prop] = t
                            }
                        }
                    }(i), e
                },
                decode: function(e, i, r) {
                    var t = e.replace(/\+/g, " ");
                    if ("iso-8859-1" === r) return t.replace(/%[0-9a-f]{2}/gi, unescape);
                    try {
                        return decodeURIComponent(t)
                    } catch (n) {
                        return t
                    }
                },
                encode: function(e, i, r, n, s) {
                    if (0 === e.length) return e;
                    var a = e;
                    if ("symbol" === typeof e ? a = Symbol.prototype.toString.call(e) : "string" !== typeof e && (a = String(e)), "iso-8859-1" === r) return escape(a).replace(/%u[0-9a-f]{4}/gi, (function(e) {
                        return "%26%23" + parseInt(e.slice(2), 16) + "%3B"
                    }));
                    for (var c = "", l = 0; l < a.length; ++l) {
                        var d = a.charCodeAt(l);
                        45 === d || 46 === d || 95 === d || 126 === d || d >= 48 && d <= 57 || d >= 65 && d <= 90 || d >= 97 && d <= 122 || s === t.RFC1738 && (40 === d || 41 === d) ? c += a.charAt(l) : d < 128 ? c += o[d] : d < 2048 ? c += o[192 | d >> 6] + o[128 | 63 & d] : d < 55296 || d >= 57344 ? c += o[224 | d >> 12] + o[128 | d >> 6 & 63] + o[128 | 63 & d] : (l += 1, d = 65536 + ((1023 & d) << 10 | 1023 & a.charCodeAt(l)), c += o[240 | d >> 18] + o[128 | d >> 12 & 63] + o[128 | d >> 6 & 63] + o[128 | 63 & d])
                    }
                    return c
                },
                isBuffer: function(e) {
                    return !(!e || "object" !== typeof e) && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
                },
                isRegExp: function(e) {
                    return "[object RegExp]" === Object.prototype.toString.call(e)
                },
                maybeMap: function(e, i) {
                    if (s(e)) {
                        for (var r = [], t = 0; t < e.length; t += 1) r.push(i(e[t]));
                        return r
                    }
                    return i(e)
                },
                merge: function e(i, r, t) {
                    if (!r) return i;
                    if ("object" !== typeof r) {
                        if (s(i)) i.push(r);
                        else {
                            if (!i || "object" !== typeof i) return [i, r];
                            (t && (t.plainObjects || t.allowPrototypes) || !n.call(Object.prototype, r)) && (i[r] = !0)
                        }
                        return i
                    }
                    if (!i || "object" !== typeof i) return [i].concat(r);
                    var o = i;
                    return s(i) && !s(r) && (o = a(i, t)), s(i) && s(r) ? (r.forEach((function(r, s) {
                        if (n.call(i, s)) {
                            var o = i[s];
                            o && "object" === typeof o && r && "object" === typeof r ? i[s] = e(o, r, t) : i.push(r)
                        } else i[s] = r
                    })), i) : Object.keys(r).reduce((function(i, s) {
                        var o = r[s];
                        return n.call(i, s) ? i[s] = e(i[s], o, t) : i[s] = o, i
                    }), o)
                }
            }
        },
        "3as9": (e, i, r) => {
            var t;
            ! function(n, s) {
                "use strict";
                var o = "function",
                    a = "undefined",
                    c = "object",
                    l = "string",
                    d = "model",
                    u = "name",
                    p = "type",
                    f = "vendor",
                    w = "version",
                    b = "architecture",
                    h = "console",
                    m = "mobile",
                    _ = "tablet",
                    g = "smarttv",
                    v = "wearable",
                    y = "embedded",
                    A = {
                        extend: function(e, i) {
                            var r = {};
                            for (var t in e) i[t] && i[t].length % 2 === 0 ? r[t] = i[t].concat(e[t]) : r[t] = e[t];
                            return r
                        },
                        has: function(e, i) {
                            return typeof e === l && -1 !== i.toLowerCase().indexOf(e.toLowerCase())
                        },
                        lowerize: function(e) {
                            return e.toLowerCase()
                        },
                        major: function(e) {
                            return typeof e === l ? e.replace(/[^\d\.]/g, "").split(".")[0] : s
                        },
                        trim: function(e, i) {
                            return e = e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ""), typeof i === a ? e : e.substring(0, 255)
                        }
                    },
                    E = {
                        rgx: function(e, i) {
                            for (var r, t, n, a, l, d, u = 0; u < i.length && !l;) {
                                var p = i[u],
                                    f = i[u + 1];
                                for (r = t = 0; r < p.length && !l;)
                                    if (l = p[r++].exec(e))
                                        for (n = 0; n < f.length; n++) d = l[++t], typeof(a = f[n]) === c && a.length > 0 ? 2 == a.length ? typeof a[1] == o ? this[a[0]] = a[1].call(this, d) : this[a[0]] = a[1] : 3 == a.length ? typeof a[1] !== o || a[1].exec && a[1].test ? this[a[0]] = d ? d.replace(a[1], a[2]) : s : this[a[0]] = d ? a[1].call(this, d, a[2]) : s : 4 == a.length && (this[a[0]] = d ? a[3].call(this, d.replace(a[1], a[2])) : s) : this[a] = d || s;
                                u += 2
                            }
                        },
                        str: function(e, i) {
                            for (var r in i)
                                if (typeof i[r] === c && i[r].length > 0) {
                                    for (var t = 0; t < i[r].length; t++)
                                        if (A.has(i[r][t], e)) return "?" === r ? s : r
                                } else if (A.has(i[r], e)) return "?" === r ? s : r;
                            return e
                        }
                    },
                    T = {
                        browser: {
                            oldSafari: {
                                version: {
                                    "1.0": "/8",
                                    1.2: "/1",
                                    1.3: "/3",
                                    "2.0": "/412",
                                    "2.0.2": "/416",
                                    "2.0.3": "/417",
                                    "2.0.4": "/419",
                                    "?": "/"
                                }
                            },
                            oldEdge: {
                                version: {
                                    .1: "12.",
                                    21: "13.",
                                    31: "14.",
                                    39: "15.",
                                    41: "16.",
                                    42: "17.",
                                    44: "18."
                                }
                            }
                        },
                        os: {
                            windows: {
                                version: {
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
                                }
                            }
                        }
                    },
                    k = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [w, [u, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [w, [u, "Edge"]],
                            [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]{3,6})\b.+version\/([\w\.-]+)/i, /(opera)(?:.+version\/|[\/\s]+)([\w\.]+)/i],
                            [u, w],
                            [/opios[\/\s]+([\w\.]+)/i],
                            [w, [u, "Opera Mini"]],
                            [/\sopr\/([\w\.]+)/i],
                            [w, [u, "Opera"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim)(?:browser)?[\/\s]?([\w\.]*)/i, /(ba?idubrowser)[\/\s]?([\w\.]+)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i, /(rekonq|puffin|brave|whale|qqbrowserlite|qq)\/([\w\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [u, w],
                            [/(?:[\s\/]uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                            [w, [u, "UCBrowser"]],
                            [/(?:windowswechat)?\sqbcore\/([\w\.]+)\b.*(?:windowswechat)?/i],
                            [w, [u, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [w, [u, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [w, [u, "Konqueror"]],
                            [/trident.+rv[:\s]([\w\.]{1,9})\b.+like\sgecko/i],
                            [w, [u, "IE"]],
                            [/yabrowser\/([\w\.]+)/i],
                            [w, [u, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [u, /(.+)/, "$1 Secure Browser"], w
                            ],
                            [/focus\/([\w\.]+)/i],
                            [w, [u, "Firefox Focus"]],
                            [/opt\/([\w\.]+)/i],
                            [w, [u, "Opera Touch"]],
                            [/coc_coc_browser\/([\w\.]+)/i],
                            [w, [u, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [w, [u, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [w, [u, "Opera Coast"]],
                            [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                            [w, [u, "MIUI Browser"]],
                            [/fxios\/([\w\.-]+)/i],
                            [w, [u, "Firefox"]],
                            [/(qihu|qhbrowser|qihoobrowser|360browser)/i],
                            [
                                [u, "360 Browser"]
                            ],
                            [/(oculus|samsung|sailfish)browser\/([\w\.]+)/i],
                            [
                                [u, /(.+)/, "$1 Browser"], w
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [u, /_/g, " "], w
                            ],
                            [/\s(electron)\/([\w\.]+)\ssafari/i, /(tesla)(?:\sqtcarbrowser|\/(20[12]\d\.[\w\.-]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/\s]?([\w\.]+)/i],
                            [u, w],
                            [/(MetaSr)[\/\s]?([\w\.]+)/i, /(LBBROWSER)/i],
                            [u],
                            [/;fbav\/([\w\.]+);/i],
                            [w, [u, "Facebook"]],
                            [/FBAN\/FBIOS|FB_IAB\/FB4A/i],
                            [
                                [u, "Facebook"]
                            ],
                            [/safari\s(line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/\s]([\w\.-]+)/i],
                            [u, w],
                            [/\bgsa\/([\w\.]+)\s.*safari\//i],
                            [w, [u, "GSA"]],
                            [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                            [w, [u, "Chrome Headless"]],
                            [/\swv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [u, "Chrome WebView"], w
                            ],
                            [/droid.+\sversion\/([\w\.]+)\b.+(?:mobile\ssafari|safari)/i],
                            [w, [u, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                            [u, w],
                            [/version\/([\w\.]+)\s.*mobile\/\w+\s(safari)/i],
                            [w, [u, "Mobile Safari"]],
                            [/version\/([\w\.]+)\s.*(mobile\s?safari|safari)/i],
                            [w, u],
                            [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                            [u, [w, E.str, T.browser.oldSafari.version]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [u, w],
                            [/(navigator|netscape)\/([\w\.-]+)/i],
                            [
                                [u, "Netscape"], w
                            ],
                            [/ile\svr;\srv:([\w\.]+)\).+firefox/i],
                            [w, [u, "Firefox Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i, /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(firefox)\/([\w\.]+)\s[\w\s\-]+\/[\w\.]+$/i, /(mozilla)\/([\w\.]+)\s.+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i],
                            [u, w]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                            [
                                [b, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [b, A.lowerize]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [b, "ia32"]
                            ],
                            [/\b(aarch64|armv?8e?l?)\b/i],
                            [
                                [b, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [b, "armhf"]
                            ],
                            [/windows\s(ce|mobile);\sppc;/i],
                            [
                                [b, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                            [
                                [b, /ower/, "", A.lowerize]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [b, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?:64|(?=v(?:[1-7]|[5-7]1)l?|;|eabi))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [b, A.lowerize]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[pt]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus\s10)/i],
                            [d, [f, "Samsung"],
                                [p, _]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|galaxy\snexus)/i, /\ssamsung[\s-]([\w-]+)/i, /sec-(sgh\w+)/i],
                            [d, [f, "Samsung"],
                                [p, m]
                            ],
                            [/\((ip(?:hone|od)[\s\w]*);/i],
                            [d, [f, "Apple"],
                                [p, m]
                            ],
                            [/\((ipad);[\w\s\),;-]+apple/i, /applecoremedia\/[\w\.]+\s\((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [d, [f, "Apple"],
                                [p, _]
                            ],
                            [/\b((?:agr|ags[23]|bah2?|sht?)-a?[lw]\d{2})/i],
                            [d, [f, "Huawei"],
                                [p, _]
                            ],
                            [/d\/huawei([\w\s-]+)[;\)]/i, /\b(nexus\s6p|vog-[at]?l\d\d|ane-[at]?l[x\d]\d|eml-a?l\d\da?|lya-[at]?l\d[\dc]|clt-a?l\d\di?|ele-l\d\d)/i, /\b(\w{2,4}-[atu][ln][01259][019])[;\)\s]/i],
                            [d, [f, "Huawei"],
                                [p, m]
                            ],
                            [/\b(poco[\s\w]+)(?:\sbuild|\))/i, /\b;\s(\w+)\sbuild\/hm\1/i, /\b(hm[\s\-_]?note?[\s_]?(?:\d\w)?)\sbuild/i, /\b(redmi[\s\-_]?(?:note|k)?[\w\s_]+)(?:\sbuild|\))/i, /\b(mi[\s\-_]?(?:a\d|one|one[\s_]plus|note lte)?[\s_]?(?:\d?\w?)[\s_]?(?:plus)?)\sbuild/i],
                            [
                                [d, /_/g, " "],
                                [f, "Xiaomi"],
                                [p, m]
                            ],
                            [/\b(mi[\s\-_]?(?:pad)(?:[\w\s_]+))(?:\sbuild|\))/i],
                            [
                                [d, /_/g, " "],
                                [f, "Xiaomi"],
                                [p, _]
                            ],
                            [/;\s(\w+)\sbuild.+\soppo/i, /\s(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007)\b/i],
                            [d, [f, "OPPO"],
                                [p, m]
                            ],
                            [/\svivo\s(\w+)(?:\sbuild|\))/i, /\s(v[12]\d{3}\w?[at])(?:\sbuild|;)/i],
                            [d, [f, "Vivo"],
                                [p, m]
                            ],
                            [/\s(rmx[12]\d{3})(?:\sbuild|;)/i],
                            [d, [f, "Realme"],
                                [p, m]
                            ],
                            [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)\b[\w\s]+build\//i, /\smot(?:orola)?[\s-](\w*)/i, /((?:moto[\s\w\(\)]+|xt\d{3,4}|nexus\s6)(?=\sbuild|\)))/i],
                            [d, [f, "Motorola"],
                                [p, m]
                            ],
                            [/\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                            [d, [f, "Motorola"],
                                [p, _]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3})\sbuild|\s3\.[\s\w;-]{10}lg?-([06cv9]{3,4})/i],
                            [d, [f, "LG"],
                                [p, _]
                            ],
                            [/(lm-?f100[nv]?|nexus\s[45])/i, /lg[e;\s\/-]+((?!browser|netcast)\w+)/i, /\blg(\-?[\d\w]+)\sbuild/i],
                            [d, [f, "LG"],
                                [p, m]
                            ],
                            [/(ideatab[\w\-\s]+)/i, /lenovo\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+)|yt[\d\w-]{6}|tb[\d\w-]{6})/i],
                            [d, [f, "Lenovo"],
                                [p, _]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia\s\d+)/i, /nokia[\s_-]?([\w\.-]*)/i],
                            [
                                [d, /_/g, " "],
                                [f, "Nokia"],
                                [p, m]
                            ],
                            [/droid.+;\s(pixel\sc)[\s)]/i],
                            [d, [f, "Google"],
                                [p, _]
                            ],
                            [/droid.+;\s(pixel[\s\daxl]{0,6})(?:\sbuild|\))/i],
                            [d, [f, "Google"],
                                [p, m]
                            ],
                            [/droid.+\s([c-g]\d{4}|so[-l]\w+|xq-a\w[4-7][12])(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [d, [f, "Sony"],
                                [p, m]
                            ],
                            [/sony\stablet\s[ps]\sbuild\//i, /(?:sony)?sgp\w+(?:\sbuild\/|\))/i],
                            [
                                [d, "Xperia Tablet"],
                                [f, "Sony"],
                                [p, _]
                            ],
                            [/\s(kb2005|in20[12]5|be20[12][59])\b/i, /\ba000(1)\sbuild/i, /\boneplus\s(a\d{4})[\s)]/i],
                            [d, [f, "OnePlus"],
                                [p, m]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi)(\sbuild\/|\))/i, /(kf[a-z]+)(\sbuild\/|\)).+silk\//i],
                            [d, [f, "Amazon"],
                                [p, _]
                            ],
                            [/(sd|kf)[0349hijorstuw]+(\sbuild\/|\)).+silk\//i],
                            [
                                [d, "Fire Phone"],
                                [f, "Amazon"],
                                [p, m]
                            ],
                            [/\((playbook);[\w\s\),;-]+(rim)/i],
                            [d, f, [p, _]],
                            [/((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10;\s(\w+)/i],
                            [d, [f, "BlackBerry"],
                                [p, m]
                            ],
                            [/(?:\b|asus_)(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus\s7|padfone|p00[cj])/i],
                            [d, [f, "ASUS"],
                                [p, _]
                            ],
                            [/\s(z[es]6[027][01][km][ls]|zenfone\s\d\w?)\b/i],
                            [d, [f, "ASUS"],
                                [p, m]
                            ],
                            [/(nexus\s9)/i],
                            [d, [f, "HTC"],
                                [p, _]
                            ],
                            [/(htc)[;_\s-]{1,2}([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                            [f, [d, /_/g, " "],
                                [p, m]
                            ],
                            [/droid[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                            [d, [f, "Acer"],
                                [p, _]
                            ],
                            [/droid.+;\s(m[1-5]\snote)\sbuild/i, /\bmz-([\w-]{2,})/i],
                            [d, [f, "Meizu"],
                                [p, m]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i, /(microsoft);\s(lumia[\s\w]+)/i, /(lenovo)[_\s-]?([\w-]+)/i, /linux;.+(jolla);/i, /droid.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                            [f, d, [p, m]],
                            [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i, /[;\/]\s?(le[\s\-]+pan)[\s\-]+(\w{1,9})\sbuild/i, /[;\/]\s?(trinity)[\-\s]*(t\d{3})\sbuild/i, /\b(gigaset)[\s\-]+(q\w{1,9})\sbuild/i, /\b(vodafone)\s([\w\s]+)(?:\)|\sbuild)/i],
                            [f, d, [p, _]],
                            [/\s(surface\sduo)\s/i],
                            [d, [f, "Microsoft"],
                                [p, _]
                            ],
                            [/droid\s[\d\.]+;\s(fp\du?)\sbuild/i],
                            [d, [f, "Fairphone"],
                                [p, m]
                            ],
                            [/\s(u304aa)\sbuild/i],
                            [d, [f, "AT&T"],
                                [p, m]
                            ],
                            [/sie-(\w*)/i],
                            [d, [f, "Siemens"],
                                [p, m]
                            ],
                            [/[;\/]\s?(rct\w+)\sbuild/i],
                            [d, [f, "RCA"],
                                [p, _]
                            ],
                            [/[;\/\s](venue[\d\s]{2,7})\sbuild/i],
                            [d, [f, "Dell"],
                                [p, _]
                            ],
                            [/[;\/]\s?(q(?:mv|ta)\w+)\sbuild/i],
                            [d, [f, "Verizon"],
                                [p, _]
                            ],
                            [/[;\/]\s(?:barnes[&\s]+noble\s|bn[rt])([\w\s\+]*)\sbuild/i],
                            [d, [f, "Barnes & Noble"],
                                [p, _]
                            ],
                            [/[;\/]\s(tm\d{3}\w+)\sbuild/i],
                            [d, [f, "NuVision"],
                                [p, _]
                            ],
                            [/;\s(k88)\sbuild/i],
                            [d, [f, "ZTE"],
                                [p, _]
                            ],
                            [/;\s(nx\d{3}j)\sbuild/i],
                            [d, [f, "ZTE"],
                                [p, m]
                            ],
                            [/[;\/]\s?(gen\d{3})\sbuild.*49h/i],
                            [d, [f, "Swiss"],
                                [p, m]
                            ],
                            [/[;\/]\s?(zur\d{3})\sbuild/i],
                            [d, [f, "Swiss"],
                                [p, _]
                            ],
                            [/[;\/]\s?((zeki)?tb.*\b)\sbuild/i],
                            [d, [f, "Zeki"],
                                [p, _]
                            ],
                            [/[;\/]\s([yr]\d{2})\sbuild/i, /[;\/]\s(dragon[\-\s]+touch\s|dt)(\w{5})\sbuild/i],
                            [
                                [f, "Dragon Touch"], d, [p, _]
                            ],
                            [/[;\/]\s?(ns-?\w{0,9})\sbuild/i],
                            [d, [f, "Insignia"],
                                [p, _]
                            ],
                            [/[;\/]\s?((nxa|Next)-?\w{0,9})\sbuild/i],
                            [d, [f, "NextBook"],
                                [p, _]
                            ],
                            [/[;\/]\s?(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05]))\sbuild/i],
                            [
                                [f, "Voice"], d, [p, m]
                            ],
                            [/[;\/]\s?(lvtel\-)?(v1[12])\sbuild/i],
                            [
                                [f, "LvTel"], d, [p, m]
                            ],
                            [/;\s(ph-1)\s/i],
                            [d, [f, "Essential"],
                                [p, m]
                            ],
                            [/[;\/]\s?(v(100md|700na|7011|917g).*\b)\sbuild/i],
                            [d, [f, "Envizen"],
                                [p, _]
                            ],
                            [/[;\/]\s?(trio[\s\w\-\.]+)\sbuild/i],
                            [d, [f, "MachSpeed"],
                                [p, _]
                            ],
                            [/[;\/]\s?tu_(1491)\sbuild/i],
                            [d, [f, "Rotor"],
                                [p, _]
                            ],
                            [/(shield[\w\s]+)\sbuild/i],
                            [d, [f, "Nvidia"],
                                [p, _]
                            ],
                            [/(sprint)\s(\w+)/i],
                            [f, d, [p, m]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [d, /\./g, " "],
                                [f, "Microsoft"],
                                [p, m]
                            ],
                            [/droid\s[\d\.]+;\s(cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [d, [f, "Zebra"],
                                [p, _]
                            ],
                            [/droid\s[\d\.]+;\s(ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [d, [f, "Zebra"],
                                [p, m]
                            ],
                            [/\s(ouya)\s/i, /(nintendo)\s([wids3utch]+)/i],
                            [f, d, [p, h]],
                            [/droid.+;\s(shield)\sbuild/i],
                            [d, [f, "Nvidia"],
                                [p, h]
                            ],
                            [/(playstation\s[345portablevi]+)/i],
                            [d, [f, "Sony"],
                                [p, h]
                            ],
                            [/[\s\(;](xbox(?:\sone)?(?!;\sxbox))[\s\);]/i],
                            [d, [f, "Microsoft"],
                                [p, h]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [f, [p, g]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [d, /^/, "SmartTV"],
                                [f, "Samsung"],
                                [p, g]
                            ],
                            [/(?:linux;\snetcast.+smarttv|lg\snetcast\.tv-201\d)/i],
                            [
                                [f, "LG"],
                                [p, g]
                            ],
                            [/(apple)\s?tv/i],
                            [f, [d, "Apple TV"],
                                [p, g]
                            ],
                            [/crkey/i],
                            [
                                [d, "Chromecast"],
                                [f, "Google"],
                                [p, g]
                            ],
                            [/droid.+aft([\w])(\sbuild\/|\))/i],
                            [d, [f, "Amazon"],
                                [p, g]
                            ],
                            [/\(dtv[\);].+(aquos)/i],
                            [d, [f, "Sharp"],
                                [p, g]
                            ],
                            [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                            [
                                [f, A.trim],
                                [d, A.trim],
                                [p, g]
                            ],
                            [/[\s\/\(](android\s|smart[-\s]?|opera\s)tv[;\)\s]/i],
                            [
                                [p, g]
                            ],
                            [/((pebble))app\/[\d\.]+\s/i],
                            [f, d, [p, v]],
                            [/droid.+;\s(glass)\s\d/i],
                            [d, [f, "Google"],
                                [p, v]
                            ],
                            [/droid\s[\d\.]+;\s(wt63?0{2,3})\)/i],
                            [d, [f, "Zebra"],
                                [p, v]
                            ],
                            [/(tesla)(?:\sqtcarbrowser|\/20[12]\d\.[\w\.-]+)/i],
                            [f, [p, y]],
                            [/droid .+?; ([^;]+?)(?: build|\) applewebkit).+? mobile safari/i],
                            [d, [p, m]],
                            [/droid .+?;\s([^;]+?)(?: build|\) applewebkit).+?(?! mobile) safari/i],
                            [d, [p, _]],
                            [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                            [
                                [p, A.lowerize]
                            ],
                            [/(android[\w\.\s\-]{0,9});.+build/i],
                            [d, [f, "Generic"]],
                            [/(phone)/i],
                            [
                                [p, m]
                            ]
                        ],
                        engine: [
                            [/windows.+\sedge\/([\w\.]+)/i],
                            [w, [u, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [w, [u, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                            [u, w],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [w, u]
                        ],
                        os: [
                            [/microsoft\s(windows)\s(vista|xp)/i],
                            [u, w],
                            [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)(?!.+xbox)/i],
                            [u, [w, E.str, T.os.windows.version]],
                            [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                            [
                                [u, "Windows"],
                                [w, E.str, T.os.windows.version]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os\s([\w]+)\slike\smac|;\sopera)/i, /cfnetwork\/.+darwin/i],
                            [
                                [w, /_/g, "."],
                                [u, "iOS"]
                            ],
                            [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)(?!.+haiku)/i],
                            [
                                [u, "Mac OS"],
                                [w, /_/g, "."]
                            ],
                            [/(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/\s]([\w\.]+)/i, /\((series40);/i],
                            [u, w],
                            [/\(bb(10);/i],
                            [w, [u, "BlackBerry"]],
                            [/(?:symbian\s?os|symbos|s60(?=;)|series60)[\/\s-]?([\w\.]*)/i],
                            [w, [u, "Symbian"]],
                            [/mozilla.+\(mobile;.+gecko.+firefox/i],
                            [
                                [u, "Firefox OS"]
                            ],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [w, [u, "webOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [w, [u, "Chromecast"]],
                            [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                            [
                                [u, "Chromium OS"], w
                            ],
                            [/(nintendo|playstation)\s([wids345portablevuch]+)/i, /(xbox);\s+xbox\s([^\);]+)/i, /(mint)[\/\s\(\)]?(\w*)/i, /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?=\slinux)|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus|raspbian)(?:\sgnu\/linux)?(?:\slinux)?[\/\s-]?(?!chrom|package)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i, /\s([frentopc-]{0,4}bsd|dragonfly)\s?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku)\s(\w+)/i],
                            [u, w],
                            [/(sunos)\s?([\w\.\d]*)/i],
                            [
                                [u, "Solaris"], w
                            ],
                            [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                            [u, w]
                        ]
                    },
                    S = function(e, i) {
                        if ("object" === typeof e && (i = e, e = s), !(this instanceof S)) return new S(e, i).getResult();
                        var r = e || ("undefined" !== typeof n && n.navigator && n.navigator.userAgent ? n.navigator.userAgent : ""),
                            t = i ? A.extend(k, i) : k;
                        return this.getBrowser = function() {
                            var e = {
                                name: s,
                                version: s
                            };
                            return E.rgx.call(e, r, t.browser), e.major = A.major(e.version), e
                        }, this.getCPU = function() {
                            var e = {
                                architecture: s
                            };
                            return E.rgx.call(e, r, t.cpu), e
                        }, this.getDevice = function() {
                            var e = {
                                vendor: s,
                                model: s,
                                type: s
                            };
                            return E.rgx.call(e, r, t.device), e
                        }, this.getEngine = function() {
                            var e = {
                                name: s,
                                version: s
                            };
                            return E.rgx.call(e, r, t.engine), e
                        }, this.getOS = function() {
                            var e = {
                                name: s,
                                version: s
                            };
                            return E.rgx.call(e, r, t.os), e
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
                            return r
                        }, this.setUA = function(e) {
                            return r = typeof e === l && e.length > 255 ? A.trim(e, 255) : e, this
                        }, this.setUA(r), this
                    };
                S.VERSION = "0.7.28", S.BROWSER = {
                    NAME: u,
                    MAJOR: "major",
                    VERSION: w
                }, S.CPU = {
                    ARCHITECTURE: b
                }, S.DEVICE = {
                    MODEL: d,
                    VENDOR: f,
                    TYPE: p,
                    CONSOLE: h,
                    MOBILE: m,
                    SMARTTV: g,
                    TABLET: _,
                    WEARABLE: v,
                    EMBEDDED: y
                }, S.ENGINE = {
                    NAME: u,
                    VERSION: w
                }, S.OS = {
                    NAME: u,
                    VERSION: w
                }, typeof i !== a ? (e.exports && (i = e.exports = S), i.UAParser = S) : (t = function() {
                    return S
                }.call(i, r, i, e)) === s || (e.exports = t);
                var C = "undefined" !== typeof n && (n.jQuery || n.Zepto);
                if (C && !C.ua) {
                    var O = new S;
                    C.ua = O.getResult(), C.ua.get = function() {
                        return O.getUA()
                    }, C.ua.set = function(e) {
                        O.setUA(e);
                        var i = O.getResult();
                        for (var r in i) C.ua[r] = i[r]
                    }
                }
            }(window)
        }
    }
]);