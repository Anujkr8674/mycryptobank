"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "4e7854be-ac87-515b-89f1-9614f443153a")
    } catch (e) {}
}();
(self.webpackChunkconvert_ui = self.webpackChunkconvert_ui || []).push([
    [428], {
        "GW+C": (n, e, i) => {
            i.d(e, {
                t: () => s,
                A: () => c
            });
            var o = i("DTvD"),
                r = i.n(o),
                t = i("VA12");
            var u = function() {},
                l = function(n) {
                    return (0, o.useEffect)((function() {
                        var e, i;
                        (e = n.url, i = {
                            async: !0
                        }, new Promise((function(n, o) {
                            var r = document.body.querySelectorAll("script[src]");
                            if ([].slice.call(r).some((function(n) {
                                    return n.src === e
                                }))) n();
                            else {
                                var t = document.createElement("script");
                                t.setAttribute("data-ot-ignore", "true"), t.setAttribute("class", "optanon-category-C0001"), Object.keys(i).forEach((function(n) {
                                    return t.setAttribute(n, i[n])
                                })), t.src = e, t.addEventListener("load", (function() {
                                    return n()
                                })), t.addEventListener("error", (function() {
                                    return o()
                                })), document.body.appendChild(t)
                            }
                        }))).then(n.onLoad || u).catch(n.onError || u)
                    }), []), null
                };
            const a = (0, o.memo)(l);
            var s = function(n) {
                var e = n.disclaimerConfig,
                    i = n.staticUrl,
                    u = n.locale,
                    l = n.isClient,
                    s = n.userInfo,
                    c = n.isLoggedIn,
                    d = n.isLoading,
                    g = n.region,
                    v = n.ipDivision,
                    f = n.getI18n,
                    m = n.loadI18n,
                    p = void 0 === m ? function() {
                        return Promise.resolve()
                    } : m,
                    I = n.replaceUrl,
                    L = n.isHandleLoggedInUser,
                    C = n.initialFrom;
                return (0, o.useEffect)((function() {
                    l && (window.bnvelidate = {
                        isLoading: d,
                        isLoggedIn: c,
                        region: g,
                        locale: u,
                        ipDivision: v,
                        disclaimerConfig: e,
                        getBNHTTP: t.get,
                        postBNHTTP: t.post,
                        getHeaderI18n: f,
                        loadHeaderI18n: p,
                        replaceUrl: I,
                        initialFrom: C,
                        bnuserinfo: c && L ? JSON.stringify(s) : void 0
                    })
                }), [s, f, p, l, c, g, d, u, v, e, I, C]), r().createElement(r().Fragment, null, L && !d && c && l ? r().createElement(a, {
                    url: "".concat(i, "/static/configs/global/index.js")
                }) : null, !d && l && g ? r().createElement(a, {
                    url: "".concat(i, "/static/configs/global/common.js")
                }) : null)
            };
            const c = (0, o.memo)(s)
        },
        na7I: (n, e) => {
            e.A = void 0;
            var i = function(n, e) {
                var i = null === e || void 0 === e ? void 0 : e.origin,
                    o = function(n) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object.keys(e).reduce((function(n, i) {
                            return n.replace("%".concat(i, "%"), e[i])
                        }), n || "")
                    }(n, e);
                return (null === i || void 0 === i ? void 0 : i.includes("localhost")) ? o.replace("https://www.", i) : o
            };
            e.A = i
        },
        d9Lu: (n, e, i) => {
            i.d(e, {
                GlobalJSLoaderContent: () => v
            });
            var o = i("BK7R"),
                r = i("gZfF"),
                t = i("DTvD"),
                u = i.n(t),
                l = i("GW+C"),
                a = i("T3Fm"),
                s = (null === window || void 0 === window ? void 0 : window.dataUMD) || {
                    useBusinessKeys: function() {
                        return {
                            value: null,
                            loading: !1
                        }
                    },
                    useRegion: function() {
                        return {
                            value: null
                        }
                    },
                    useUserLoginStatus: function() {
                        return {
                            value: null,
                            loading: !1
                        }
                    },
                    useTheme: function() {
                        return {
                            setTheme: function() {},
                            theme: ""
                        }
                    },
                    useCommonEnv: function() {
                        return {
                            envs: {},
                            setEnvs: function() {}
                        }
                    },
                    useCurrency: function() {
                        return {
                            currency: null,
                            currencyMap: null,
                            currencyList: {
                                value: null,
                                loading: !1
                            }
                        }
                    },
                    useLanguage: function() {
                        return {
                            language: "",
                            setLanguage: function() {},
                            languageList: {
                                value: null,
                                loading: !1,
                                error: null,
                                refresh: function() {}
                            }
                        }
                    },
                    useNavI18n: function() {
                        return {
                            i18n: {},
                            setI18n: function() {},
                            getI18nTxt: function(n) {
                                return n
                            }
                        }
                    },
                    useUserBaseDetail: function() {
                        return {
                            error: null,
                            loading: !1,
                            value: {},
                            refresh: function() {}
                        }
                    }
                };
            const c = function(n, e) {
                if (e) {
                    var i = /^([\w-]+)\(([\w-]+)\)$/,
                        o = n;
                    if (e.split(",").some((function(e) {
                            var r = i.exec(e);
                            return !!(r && r[1] && r[2] && n === r[1]) && (o = r[2], !0)
                        }))) return {
                        success: !0,
                        code: o
                    }
                }
                return {
                    success: !1,
                    code: n
                }
            };
            var d = i("na7I"),
                g = function(n) {
                    var e = n.disclaimerConfig,
                        i = s.useUserLoginStatus(),
                        g = i.value,
                        v = i.loading,
                        f = s.useUserBaseDetail().value,
                        m = s.useLanguage().language,
                        p = s.useNavI18n().getI18nTxt,
                        I = s.useRegion().value,
                        L = s.useCommonEnv().envs,
                        C = (0, t.useCallback)((function(n, e) {
                            var i = window.location.origin.split(".").slice(1).join("."),
                                t = null !== e && void 0 !== e ? e : {},
                                u = t.langMapping,
                                l = void 0 === u ? "" : u,
                                a = (0, r.A)(t, ["langMapping"]),
                                s = c(m, l),
                                g = s.success,
                                v = s.code;
                            return g ? (0, d.A)(n, (0, o.A)({
                                origin: origin,
                                suffixOrigin: i,
                                locale: v
                            }, a)) : (0, d.A)(n, (0, o.A)({
                                origin: origin,
                                suffixOrigin: i,
                                locale: m
                            }, a))
                        }), [m]);
                    return (null === L || void 0 === L ? void 0 : L.STATIC_HOST) && m && a.o ? u().createElement(l.A, {
                        disclaimerConfig: e || {},
                        staticUrl: null === L || void 0 === L ? void 0 : L.STATIC_HOST,
                        locale: m,
                        isClient: a.o,
                        userInfo: f || void 0,
                        isLoggedIn: g,
                        isLoading: v,
                        region: null === I || void 0 === I ? void 0 : I.country,
                        ipDivision: null === I || void 0 === I ? void 0 : I.subDivision,
                        getI18n: p,
                        replaceUrl: C,
                        initialFrom: "header",
                        isHandleLoggedInUser: !0
                    }) : null
                };
            const v = u().memo(g)
        }
    }
]);
//# debugId=4e7854be-ac87-515b-89f1-9614f443153a