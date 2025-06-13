"use strict";
(self.webpackChunkfaq_anns_ui = self.webpackChunkfaq_anns_ui || []).push([
    [428], {
        na7I: (n, e) => {
            e.A = void 0;
            var i = function(n, e) {
                var i = null === e || void 0 === e ? void 0 : e.origin,
                    u = function(n) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                        return Object.keys(e).reduce((function(n, i) {
                            return n.replace("%".concat(i, "%"), e[i])
                        }), n || "")
                    }(n, e);
                return (null === i || void 0 === i ? void 0 : i.includes("localhost")) ? u.replace("https://www.", i) : u
            };
            e.A = i
        },
        d9Lu: (n, e, i) => {
            i.d(e, {
                GlobalJSLoaderContent: () => d
            });
            var u = i("BK7R"),
                o = i("gZfF"),
                r = i("DTvD"),
                l = i.n(r),
                t = i("GW+C"),
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
                        u = n;
                    if (e.split(",").some((function(e) {
                            var o = i.exec(e);
                            return !!(o && o[1] && o[2] && n === o[1]) && (u = o[2], !0)
                        }))) return {
                        success: !0,
                        code: u
                    }
                }
                return {
                    success: !1,
                    code: n
                }
            };
            var g = i("na7I"),
                v = function(n) {
                    var e = n.disclaimerConfig,
                        i = s.useUserLoginStatus(),
                        v = i.value,
                        d = i.loading,
                        f = s.useUserBaseDetail().value,
                        m = s.useLanguage().language,
                        p = s.useNavI18n().getI18nTxt,
                        w = s.useRegion().value,
                        C = s.useCommonEnv().envs,
                        I = (0, r.useCallback)((function(n, e) {
                            var i = window.location.origin.split(".").slice(1).join("."),
                                r = null !== e && void 0 !== e ? e : {},
                                l = r.langMapping,
                                t = void 0 === l ? "" : l,
                                a = (0, o.A)(r, ["langMapping"]),
                                s = c(m, t),
                                v = s.success,
                                d = s.code;
                            return v ? (0, g.A)(n, (0, u.A)({
                                origin: origin,
                                suffixOrigin: i,
                                locale: d
                            }, a)) : (0, g.A)(n, (0, u.A)({
                                origin: origin,
                                suffixOrigin: i,
                                locale: m
                            }, a))
                        }), [m]);
                    return (null === C || void 0 === C ? void 0 : C.STATIC_HOST) && m && a.o ? l().createElement(t.A, {
                        disclaimerConfig: e || {},
                        staticUrl: null === C || void 0 === C ? void 0 : C.STATIC_HOST,
                        locale: m,
                        isClient: a.o,
                        userInfo: f || void 0,
                        isLoggedIn: v,
                        isLoading: d,
                        region: null === w || void 0 === w ? void 0 : w.country,
                        ipDivision: null === w || void 0 === w ? void 0 : w.subDivision,
                        getI18n: p,
                        replaceUrl: I,
                        initialFrom: "header",
                        isHandleLoggedInUser: !0
                    }) : null
                };
            const d = l().memo(v)
        }
    }
]);