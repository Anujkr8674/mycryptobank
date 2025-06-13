"use strict";
(self.webpackChunkresearch_new_ui = self.webpackChunkresearch_new_ui || []).push([
    [766], {
        "GW+C": (e, n, t) => {
            t.d(n, {
                t: () => u,
                A: () => l
            });
            var o = t("DTvD"),
                r = t.n(o),
                i = t("VA12");
            var c = function() {},
                a = function(e) {
                    return (0, o.useEffect)((function() {
                        var n, t;
                        (n = e.url, t = {
                            async: !0
                        }, new Promise((function(e, o) {
                            var r = document.body.querySelectorAll("script[src]");
                            if ([].slice.call(r).some((function(e) {
                                    return e.src === n
                                }))) e();
                            else {
                                var i = document.createElement("script");
                                i.setAttribute("data-ot-ignore", "true"), i.setAttribute("class", "optanon-category-C0001"), Object.keys(t).forEach((function(e) {
                                    return i.setAttribute(e, t[e])
                                })), i.src = n, i.addEventListener("load", (function() {
                                    return e()
                                })), i.addEventListener("error", (function() {
                                    return o()
                                })), document.body.appendChild(i)
                            }
                        }))).then(e.onLoad || c).catch(e.onError || c)
                    }), []), null
                };
            const s = (0, o.memo)(a);
            var u = function(e) {
                var n = e.disclaimerConfig,
                    t = e.staticUrl,
                    c = e.locale,
                    a = e.isClient,
                    u = e.userInfo,
                    l = e.isLoggedIn,
                    d = e.isLoading,
                    f = e.region,
                    v = e.ipDivision,
                    g = e.getI18n,
                    p = e.loadI18n,
                    h = void 0 === p ? function() {
                        return Promise.resolve()
                    } : p,
                    m = e.replaceUrl,
                    I = e.isHandleLoggedInUser,
                    w = e.initialFrom;
                return (0, o.useEffect)((function() {
                    a && (window.bnvelidate = {
                        isLoading: d,
                        isLoggedIn: l,
                        region: f,
                        locale: c,
                        ipDivision: v,
                        disclaimerConfig: n,
                        getBNHTTP: i.get,
                        postBNHTTP: i.post,
                        getHeaderI18n: g,
                        loadHeaderI18n: h,
                        replaceUrl: m,
                        initialFrom: w,
                        bnuserinfo: l && I ? JSON.stringify(u) : void 0
                    })
                }), [u, g, h, a, l, f, d, c, v, n, m, w]), r().createElement(r().Fragment, null, I && !d && l && a ? r().createElement(s, {
                    url: "".concat(t, "/static/configs/global/index.js")
                }) : null, !d && a && f ? r().createElement(s, {
                    url: "".concat(t, "/static/configs/global/common.js")
                }) : null)
            };
            const l = (0, o.memo)(u)
        },
        "/Nkw": (e, n, t) => {
            t.d(n, {
                GlobalJSLoader: () => x
            });
            var o = t("DTvD"),
                r = t.n(o),
                i = t("sViW"),
                c = t("BK7R"),
                a = t("QUKP"),
                s = t("gZfF"),
                u = t("VP0d"),
                l = t("3yYM"),
                d = t.n(l),
                f = t("oFD3"),
                v = t("fdP6"),
                g = t("BMJD"),
                p = t("eZh5"),
                h = t("tbM7"),
                m = t("a59x"),
                I = t("VA12"),
                w = window.document ? o.useLayoutEffect : o.useEffect;
            var b = function(e, n) {
                    var t = null === n || void 0 === n ? void 0 : n.origin,
                        o = function(e) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                            return Object.keys(n).reduce((function(e, t) {
                                return e.replace("%".concat(t, "%"), n[t])
                            }), e || "")
                        }(e, n);
                    return (null === t || void 0 === t ? void 0 : t.includes("localhost")) ? o.replace("https://www.", t) : o
                },
                A = function() {
                    var e = (0, i.A)(d().mark((function e() {
                        var n, t, o, r, i, s, l, g, p;
                        return d().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.prev = 0, n = {
                                        nicknameQueryType: "NORMAL"
                                    }, e.t0 = u.A, e.next = 5, Promise.all([(0, f.vK)(n), (0, v.b$)()]);
                                case 5:
                                    return e.t1 = e.sent, t = (0, e.t0)(e.t1, 2), o = t[0], r = t[1], i = (null === o || void 0 === o ? void 0 : o.data) || {}, s = i.avatarUrl, l = i.nickname, g = (r || {}).userComplianceStatus, p = void 0 === g ? {} : g, e.abrupt("return", (0, a.A)((0, c.A)({}, p), {
                                        avatarUrl: s,
                                        nickname: l
                                    }));
                                case 14:
                                    return e.prev = 14, e.t2 = e.catch(0), e.abrupt("return", {});
                                case 17:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [0, 14]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                L = function() {
                    return ["qa1fdg.", "devfdg.", "localhost"].some((function(e) {
                        return window.location.host.includes(e)
                    })) ? "https://static.devfdg.net" : "https://bin.bnbstatic.com"
                },
                U = function() {
                    if ("localhost" === window.location.hostname) return "";
                    var e = window.location.host.split("."),
                        n = e.slice(e.length - 2).join(".");
                    return "https://www.".concat(n)
                },
                C = function() {
                    var e = (0, i.A)(d().mark((function e() {
                        var n;
                        return d().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, (0, I.get)("".concat(U(), "/bapi/accounts/v2/public/account/ip/country-short"));
                                case 2:
                                    return n = e.sent.data, e.abrupt("return", n);
                                case 4:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                k = {},
                y = function(e) {
                    var n = e.shouldFetchUserInfo,
                        t = void 0 === n || n,
                        r = e.shouldFetchIsAuth,
                        l = void 0 === r || r,
                        f = e.shouldPreFetchI18n,
                        v = void 0 !== f && f,
                        I = e.providedUserInfo,
                        U = void 0 === I ? k : I,
                        y = e.providedIsLoginLoading,
                        E = void 0 === y || y,
                        D = e.providedIsLoggedIn,
                        x = void 0 !== D && D,
                        F = e.isHandleLoggedInUser,
                        P = void 0 !== F && F,
                        S = function() {
                            var e = (0, u.A)((0, o.useState)(!1), 2),
                                n = e[0],
                                t = e[1];
                            return w((function() {
                                t(!0)
                            }), []), n
                        }(),
                        H = (0, u.A)((0, o.useState)(!0), 2),
                        T = H[0],
                        j = H[1],
                        M = (0, u.A)((0, o.useState)({}), 2),
                        O = M[0],
                        N = M[1],
                        J = (0, u.A)((0, o.useState)({}), 2),
                        K = J[0],
                        B = J[1],
                        V = function() {
                            var e = (0, u.A)((0, o.useState)(""), 2),
                                n = e[0],
                                t = e[1];
                            return (0, o.useEffect)((function() {
                                C().then((function(e) {
                                    t(null === e || void 0 === e ? void 0 : e.toLowerCase())
                                })).catch((function() {
                                    t("")
                                }))
                            }), []), {
                                country: n,
                                subDivision: ""
                            }
                        }(),
                        _ = V.country,
                        G = V.subDivision,
                        R = (0, m.JK)(),
                        W = (0, u.A)((0, o.useState)(!1), 2),
                        q = W[0],
                        Q = W[1],
                        Y = (0, u.A)((0, o.useState)(!0), 2),
                        Z = Y[0],
                        $ = Y[1],
                        z = (0, o.useMemo)(L, []),
                        X = (0, o.useCallback)((0, i.A)(d().mark((function e() {
                            var n, t, o;
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.t0 = u.A, e.next = 3, Promise.all([A(), (0, g.Tc)()]);
                                    case 3:
                                        e.t1 = e.sent, n = (0, e.t0)(e.t1, 2), t = n[0], o = n[1], N((0, a.A)((0, c.A)({}, o, t), {
                                            fetched: !0
                                        })), j(!1);
                                    case 9:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []),
                        ee = (0, o.useCallback)((0, i.A)(d().mark((function e() {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.abrupt("return", new Promise((function(e, n) {
                                            (0, p.TU)({
                                                basePath: [L(), "/api/i18n/-/web/cms"].join(""),
                                                namespace: "Navigation",
                                                locale: (0, m.JK)()
                                            }).then((function(e) {
                                                return B(e)
                                            })).then((function() {
                                                return setTimeout(e, 10)
                                            })).catch(n)
                                        })));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []),
                        ne = (0, o.useCallback)((0, i.A)(d().mark((function e() {
                            return d().wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        (0, h.CY)().then((function(e) {
                                            Q(e), $(!1)
                                        }));
                                    case 1:
                                    case "end":
                                        return e.stop()
                                }
                            }), e)
                        }))), []);
                    (0, o.useEffect)((function() {
                        v && !Object.keys(K).length && ee()
                    }), [ee, v, K]), (0, o.useEffect)((function() {
                        P && (l ? ne() : ("boolean" === typeof E && Q(x), "boolean" === typeof x && $(E), $(!1)))
                    }), [ne, l, P, E, x]), (0, o.useEffect)((function() {
                        q && P && (t ? X() : (N(U), j(!1)))
                    }), [X, q, t, U, P]);
                    var te = (0, o.useCallback)((function(e) {
                            return function(e, n) {
                                return n && n[e] || e
                            }(e, K)
                        }), [K]),
                        oe = (0, o.useCallback)((function(e, n) {
                            var t = window.location.origin.split(".").slice(1).join("."),
                                o = null !== n && void 0 !== n ? n : {},
                                r = o.langMapping,
                                i = void 0 === r ? "" : r,
                                a = (0, s.A)(o, ["langMapping"]),
                                u = function(e, n) {
                                    if (n) {
                                        var t = /^([\w-]+)\(([\w-]+)\)$/,
                                            o = e;
                                        if (n.split(",").some((function(n) {
                                                var r = t.exec(n);
                                                return !!(r && r[1] && r[2] && e === r[1]) && (o = r[2], !0)
                                            }))) return {
                                            success: !0,
                                            code: o
                                        }
                                    }
                                    return {
                                        success: !1,
                                        code: e
                                    }
                                }(R, i),
                                l = u.success,
                                d = u.code;
                            return b(e, l ? (0, c.A)({
                                origin: origin,
                                suffixOrigin: t,
                                locale: d
                            }, a) : (0, c.A)({
                                origin: origin,
                                suffixOrigin: t,
                                locale: R
                            }, a))
                        }), [R]);
                    return {
                        locale: R,
                        staticUrl: z,
                        isClient: S,
                        userInfo: O,
                        isLoggedIn: q,
                        isLoading: P ? q ? T : Z : !_,
                        region: _,
                        ipDivision: G,
                        getI18n: te,
                        replaceUrl: oe,
                        loadI18n: ee
                    }
                },
                E = t("GW+C"),
                D = function(e) {
                    var n = e.staticHost,
                        t = e.disclaimerConfig,
                        o = e.shouldFetchUserInfo,
                        i = void 0 === o || o,
                        c = e.shouldFetchIsAuth,
                        a = void 0 === c || c,
                        s = e.providedUserInfo,
                        u = e.providedIsLoginLoading,
                        l = e.providedIsLoggedIn,
                        d = e.isDataReady,
                        f = e.isHandleLoggedInUser,
                        v = y({
                            shouldFetchUserInfo: i,
                            shouldFetchIsAuth: a,
                            providedUserInfo: s,
                            providedIsLoginLoading: u,
                            providedIsLoggedIn: l,
                            isHandleLoggedInUser: f
                        }),
                        g = v.staticUrl,
                        p = v.locale,
                        h = v.isClient,
                        m = v.userInfo,
                        I = v.isLoggedIn,
                        w = v.isLoading,
                        b = v.region,
                        A = v.ipDivision,
                        L = v.getI18n,
                        U = v.loadI18n,
                        C = v.replaceUrl,
                        k = !i || !a;
                    return r().createElement(E.t, {
                        disclaimerConfig: t,
                        staticUrl: n || g,
                        locale: p,
                        isClient: h,
                        userInfo: m,
                        isLoggedIn: I,
                        isLoading: k ? !d : w,
                        region: b,
                        ipDivision: A,
                        getI18n: L,
                        loadI18n: U,
                        replaceUrl: C,
                        isHandleLoggedInUser: f,
                        initialFrom: "loader"
                    })
                };
            const x = (0, o.memo)(D)
        }
    }
]);