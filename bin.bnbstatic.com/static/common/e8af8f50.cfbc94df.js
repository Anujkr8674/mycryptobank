"use strict";
! function() {
    try {
        var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
            n = (new e.Error).stack;
        n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e8461f66-77e0-57b9-b54a-4048deb25a8a")
    } catch (e) {}
}();
(self.webpackChunkc2c_user_ui = self.webpackChunkc2c_user_ui || []).push([
    [1932], {
        i55B: (e, t, r) => {
            r.d(t, {
                $G: () => R,
                BY: () => p,
                K8: () => y,
                MC: () => d,
                Mg: () => S,
                OY: () => I,
                O_: () => g,
                V3: () => D,
                XV: () => N,
                Xz: () => C,
                ZF: () => x,
                c5: () => h,
                ct: () => M,
                dj: () => A,
                g9: () => m,
                mR: () => b,
                mX: () => l,
                nG: () => P,
                o7: () => O,
                pn: () => w,
                q3: () => T,
                r: () => E,
                s4: () => k,
                sK: () => v,
                sV: () => _,
                uk: () => f
            });
            var n, a = r("sViW"),
                c = r("3yYM"),
                i = r.n(c),
                o = r("B2Yp");
            ! function(e) {
                e.C2c = "/bapi/c2c", e.Common = "/bapi/composite"
            }(n || (n = {}));
            var u = function(e, t, r) {
                    return (0, o.Rk)("".concat(r || "/bapi/c2c").concat(e).concat(t ? function(e) {
                        return Object.keys(e).length ? "?".concat(new URLSearchParams(e).toString()) : ""
                    }(t) : ""))
                },
                s = function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                        r = arguments.length > 2 ? arguments[2] : void 0;
                    return (0, o.r9)("".concat(r || "/bapi/c2c").concat(e), t)
                },
                f = function(e) {
                    return s("/v1/private/c2c/chat/img/pre-upload", e)
                },
                l = function(e) {
                    return s("/v1/private/c2c/chat/video/pre-upload", e)
                },
                p = function(e) {
                    return s("/v3/private/c2c/order-match/placeOrder", e)
                },
                d = function() {
                    return s("/v1/private/c2c/user/get-security-face-status")
                },
                v = function(e) {
                    return s("/v1/private/c2c/user/get-security-face-status", e)
                },
                h = function() {
                    return s("/v1/private/c2c/order-match/getUserUndoOrderNumbers")
                },
                m = function() {
                    return s("/v1/private/c2c/user/base-detail")
                },
                y = function() {
                    return u("/v1/friendly/c2c/user/is-agreement-disclaimer-required", {
                        argtType: "CHAT_QUICK_REPLY_RESTRICTION"
                    })
                },
                g = function() {
                    return s("/v1/private/c2c/user/disclaimer-accept", {
                        argtType: "CHAT_QUICK_REPLY_RESTRICTION"
                    })
                },
                w = function(e) {
                    return s("/v2/private/c2c/order-match/order-list", e)
                },
                A = function(e) {
                    return s("/v1/private/c2c/order-match/getOrderMatchListByMerchant", e)
                },
                b = function() {
                    return u("/v1/public/common/config/client/dynamic-domain", void 0, "/bapi/composite")
                },
                x = function() {
                    return s("/v1/private/c2c/chat/ping-chat-stream", void 0, "/bapi/composite")
                },
                E = function(e) {
                    return u("/v2/private/c2c/chat/query-chat-by-page", e)
                },
                C = function(e) {
                    return s("/v1/private/c2c/user/counter-party-chat-restriction/query", e)
                },
                k = function(e) {
                    return s("/v2/private/c2c/chat/mark-message-read", e)
                },
                T = function(e) {
                    return s("/v2/private/c2c/chat/groups", e)
                },
                _ = function(e) {
                    return s("/v2/private/c2c/chat/sync-order-data", e)
                },
                S = function(e) {
                    return u("/v2/private/c2c/user/share-ads-and-profile", e)
                },
                P = function(e) {
                    return s("/v1/private/c2c/order-dispute/query", e)
                },
                R = function(e) {
                    return s("/v1/private/c2c/order-match/pay-time-limit/query-extend", e)
                },
                D = function(e) {
                    return s("/v1/private/c2c/order-match/pay-time-limit/confirm-extend", e)
                },
                I = (function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.id, e.abrupt("return", u("/v2/private/c2c/pay-method/detail/".concat(r)));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        var r;
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = t.identifier, e.abrupt("return", u("/v2/private/c2c/trade-method/detail/".concat(r)));
                                case 2:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })))
                }(), function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", s("/v2/private/c2c/pay-method/add", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()),
                M = function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", s("/v2/private/c2c/pay-method/update", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                O = function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", u("/v1/private/c2c/file-upload/s3-transcoding-presigned-url", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                N = function() {
                    var e = (0, a.A)(i().mark((function e(t) {
                        return i().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return e.abrupt("return", s("/v1/private/c2c/order-match/get-order-status-and-add-kyc", t));
                                case 1:
                                case "end":
                                    return e.stop()
                            }
                        }), e)
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }()
        },
        faht: (e, t, r) => {
            r.d(t, {
                C_: () => p,
                KT: () => l,
                lI: () => d
            });
            var n = r("DTvD"),
                a = r.n(n),
                c = r("CQMN"),
                i = r("hCsC"),
                o = new c.E({
                    defaultOptions: {
                        queries: {
                            refetchOnWindowFocus: !1,
                            retry: !1
                        }
                    }
                }),
                u = {
                    lang: "en"
                },
                s = (0, n.createContext)(u),
                f = null,
                l = function() {
                    return f || console.warn("you don't have C2C context, please recheck again if you already wrap your app with C2CProvider already."), null !== f && void 0 !== f ? f : {}
                },
                p = function(e) {
                    var t = e.children,
                        r = e.lang,
                        c = e.queryClient,
                        u = e.runtimeConfig,
                        l = e.c2cType,
                        p = void 0 === l ? "c2c_web" : l,
                        d = (0, n.useMemo)((function() {
                            return {
                                lang: r
                            }
                        }), [r]);
                    return (0, n.useLayoutEffect)((function() {
                        f = {
                            lang: r,
                            runtimeConfig: u,
                            c2cType: p
                        }
                    }), [r, u, p]), a().createElement(i.Ht, {
                        client: c || o
                    }, a().createElement(s.Provider, {
                        value: d
                    }, t))
                },
                d = function() {
                    return (0, n.useContext)(s)
                }
        },
        B2Yp: (e, t, r) => {
            r.d(t, {
                Jt: () => k,
                Rk: () => C,
                bE: () => E,
                r9: () => x
            });
            var n, a = r("sViW"),
                c = r("2URn"),
                i = r("BK7R"),
                o = r("tEf9"),
                u = r("3yYM"),
                s = r.n(u),
                f = r("F3rx"),
                l = r.n(f),
                p = r("VA12"),
                d = r("zJWh"),
                v = r("09uy"),
                h = r("faht"),
                m = "c2c_PaSS",
                y = function() {
                    var e = window.location.href,
                        t = v.DS.login,
                        r = "".concat(t, "?return_to=").concat(btoa(e).replace(/\+/g, "-").replace(/\//g, "_"));
                    window.name === m && (r += "&registerChannel=".concat(m)), window.location.href = r
                },
                g = "object" === typeof r.g && !1,
                w = function() {
                    var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return {
                        headers: (0, i.A)({
                            c2ctype: null !== (n = null === (e = (0, h.KT)()) || void 0 === e ? void 0 : e.c2cType) && void 0 !== n ? n : "c2c_web"
                        }, t)
                    }
                },
                A = function(e) {
                    e.headers = (null === e || void 0 === e ? void 0 : e.headers) || {};
                    var t = d.U.read("cr00", e.headers);
                    return e.headers.csrftoken || (e.headers.csrftoken = l()(t || "")), e.headers.c2ctype || (e.headers.c2ctype = "c2c_web"), e
                },
                b = function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    return Object.keys(e).length ? "?".concat(new URLSearchParams(e).toString()) : ""
                },
                x = function() {
                    var e = (0, a.A)(s().mark((function e(t) {
                        var r, n, a, c, o, u, f, l, d, v = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = v.length > 1 && void 0 !== v[1] ? v[1] : {}, n = v.length > 2 && void 0 !== v[2] ? v[2] : {}, a = v.length > 3 && void 0 !== v[3] ? v[3] : {}, o = (0, h.KT)().runtimeConfig, u = g && (null === o || void 0 === o ? void 0 : o.API_HOST_PRIVATE) ? (null === o || void 0 === o ? void 0 : o.API_HOST_PRIVATE) + t : t, l = g ? (0, i.A)({}, A({
                                        headers: n
                                    })) : (0, i.A)({
                                        onMFAInterceptorError: function(e) {
                                            f = e
                                        }
                                    }, w(n), a), e.prev = 6, e.next = 9, (0, p.post)(u, r, l);
                                case 9:
                                    c = e.sent, e.next = 17;
                                    break;
                                case 12:
                                    e.prev = 12, e.t0 = e.catch(6), "100001005" === (null === e.t0 || void 0 === e.t0 || null === (d = e.t0.errorMsg) || void 0 === d ? void 0 : d.code) && y(), c = {
                                        success: !1,
                                        data: null,
                                        message: "system error",
                                        messageDetail: null,
                                        code: null
                                    };
                                case 17:
                                    if (!f) {
                                        e.next = 19;
                                        break
                                    }
                                    return e.abrupt("return", {
                                        success: !1,
                                        data: null,
                                        message: (null === f || void 0 === f ? void 0 : f.message) || String(f),
                                        messageDetail: null,
                                        code: "MFA_CANCEL" === f ? f : null
                                    });
                                case 19:
                                    return e.abrupt("return", c);
                                case 20:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [6, 12]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                E = function() {
                    var e = (0, a.A)(s().mark((function e() {
                        var t, r, n, a, i = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    for (t = i.length, r = new Array(t), n = 0; n < t; n++) r[n] = i[n];
                                    return e.prev = 1, e.next = 4, x.apply(void 0, (0, o.A)(r));
                                case 4:
                                    if (!(null === (a = e.sent) || void 0 === a ? void 0 : a.success)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", a);
                                case 7:
                                    throw a;
                                case 10:
                                    if (e.prev = 10, e.t0 = e.catch(1), !(0, c.A)(e.t0, Error)) {
                                        e.next = 15;
                                        break
                                    }
                                    throw {
                                        success: !1,
                                        data: null,
                                        message: "system error",
                                        messageDetail: null,
                                        code: null
                                    };
                                case 15:
                                    throw e.t0;
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }(),
                C = function() {
                    var e = (0, a.A)(s().mark((function e(t) {
                        var r, n, a, c, o, u, f = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    return r = f.length > 1 && void 0 !== f[1] ? f[1] : {}, n = f.length > 2 && void 0 !== f[2] ? f[2] : {}, c = (0, h.KT)().runtimeConfig, o = g && (null === c || void 0 === c ? void 0 : c.API_HOST_PRIVATE) ? (null === c || void 0 === c ? void 0 : c.API_HOST_PRIVATE) + t : t, e.prev = 4, e.next = 7, (0, p.get)(o + b(r), (0, i.A)({}, r, w(), n));
                                case 7:
                                    a = e.sent, e.next = 15;
                                    break;
                                case 10:
                                    e.prev = 10, e.t0 = e.catch(4), "100001005" === (null === e.t0 || void 0 === e.t0 || null === (u = e.t0.errorMsg) || void 0 === u ? void 0 : u.code) && y(), a = {
                                        success: !1,
                                        data: null,
                                        message: "system error",
                                        messageDetail: null,
                                        code: null
                                    };
                                case 15:
                                    return e.abrupt("return", a);
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [4, 10]
                        ])
                    })));
                    return function(t) {
                        return e.apply(this, arguments)
                    }
                }(),
                k = function() {
                    var e = (0, a.A)(s().mark((function e() {
                        var t, r, n, a, i = arguments;
                        return s().wrap((function(e) {
                            for (;;) switch (e.prev = e.next) {
                                case 0:
                                    for (t = i.length, r = new Array(t), n = 0; n < t; n++) r[n] = i[n];
                                    return e.prev = 1, e.next = 4, C.apply(void 0, (0, o.A)(r));
                                case 4:
                                    if (!(null === (a = e.sent) || void 0 === a ? void 0 : a.success)) {
                                        e.next = 7;
                                        break
                                    }
                                    return e.abrupt("return", a);
                                case 7:
                                    throw a;
                                case 10:
                                    if (e.prev = 10, e.t0 = e.catch(1), !(0, c.A)(e.t0, Error)) {
                                        e.next = 15;
                                        break
                                    }
                                    throw {
                                        success: !1,
                                        data: null,
                                        message: "system error",
                                        messageDetail: null,
                                        code: null
                                    };
                                case 15:
                                    throw e.t0;
                                case 16:
                                case "end":
                                    return e.stop()
                            }
                        }), e, null, [
                            [1, 10]
                        ])
                    })));
                    return function() {
                        return e.apply(this, arguments)
                    }
                }()
        },
        "09uy": (e, t, r) => {
            r.d(t, {
                DS: () => c,
                bl: () => a
            });
            var n = r("a59x"),
                a = (r("tKUM"), (0, r("Hd3t").MM)("/:locale/:path*"), {
                    mainSite: "https://www.".concat((0, n.bG)(2)),
                    account: "https://accounts.".concat((0, n.bG)(2)),
                    userPortal: "https://c2c.".concat((0, n.bG)(2)),
                    merchantPortal: "https://c2c-admin.".concat((0, n.bG)(2))
                }),
                c = {
                    login: "".concat(a.account, "/login"),
                    smsAuth: "".concat(a.account, "/enable-sms-authenticator"),
                    security: "".concat(a.mainSite, "/my/security"),
                    swapHistory: "".concat(a.userPortal, "/swapHistory"),
                    userProfile: function(e) {
                        return "".concat(a.userPortal, "/advertiserDetail?advertiserNo=").concat(e)
                    },
                    userProfileMP: function(e) {
                        return "".concat(a.merchantPortal, "/order/user/").concat(e)
                    },
                    fundingWallet: "".concat(a.mainSite, "/my/wallet/funding"),
                    addPaymentMethods: "".concat(a.userPortal, "/payment/add"),
                    faq: function(e) {
                        return "".concat(a.mainSite, "/support/faq/").concat(e)
                    },
                    kyc: "".concat(a.mainSite, "/kyc-router"),
                    smsAuthentication: "".concat(a.account, "/security/manage-sms-authenticator"),
                    advertiserDetail: "".concat(a.userPortal, "/advertiserDetail"),
                    orderDetail: "".concat(a.userPortal, "/fiatOrderDetail"),
                    paymentMethods: "".concat(a.mainSite, "/my/payment/c2c"),
                    editPaymentMethod: "".concat(a.mainSite, "/my/payment/c2c/edit"),
                    userCenter: "".concat(a.mainSite, "/userCenter"),
                    privacy: "".concat(a.mainSite, "/privacy"),
                    downloadLimitAppeal: "".concat(a.mainSite, "/my/risk/appeal?templateId=T11013bec0"),
                    additionalKycTerms: "".concat(a.mainSite, "/support/faq/65b99b38cc9f4efc8ba9e58cf3700720"),
                    fiatBuySell: function(e) {
                        var t = e.isBuy,
                            r = e.fiat,
                            n = e.asset;
                        return "".concat(a.mainSite, "/crypto/").concat(t ? "buy" : "sell", "/").concat(null === r || void 0 === r ? void 0 : r.toUpperCase(), "/").concat(null === n || void 0 === n ? void 0 : n.toUpperCase())
                    }
                }
        },
        Hkrp: (e, t, r) => {
            r.d(t, {
                s: () => s,
                g: () => f
            });
            var n = r("BK7R"),
                a = r("QUKP"),
                c = r("aVXY"),
                i = r("tEf9"),
                o = r("DTvD"),
                u = function(e) {
                    setTimeout(e, 0)
                };

            function s(e, t, r) {
                var s = (0, o.useRef)(0),
                    f = function() {
                        var e = (0, o.useRef)(!1);
                        return (0, o.useEffect)((function() {
                            return e.current = !0,
                                function() {
                                    e.current = !1
                                }
                        }), []), (0, o.useCallback)((function() {
                            return e.current
                        }), [])
                    }(),
                    l = (0, c.A)((0, o.useState)(Date.now()), 2),
                    p = l[0],
                    d = l[1],
                    v = (0, c.A)((0, o.useState)((0, n.A)({
                        loading: !0,
                        updateTime: Date.now()
                    }, r)), 2),
                    h = v[0],
                    m = v[1];
                return (0, o.useEffect)((function() {
                    var t = ++s.current;
                    !1 === h.loading && m((0, a.A)((0, n.A)({}, h), {
                        loading: !0
                    })), e().then((function(e) {
                        var n = null === e || "undefined" === typeof e ? null === r || void 0 === r ? void 0 : r.value : e;
                        f() && t === s.current && u((function() {
                            m({
                                value: n,
                                loading: !1,
                                error: null,
                                updateTime: Date.now()
                            })
                        }))
                    })).catch((function(e) {
                        f() && t === s.current && u((function() {
                            m((0, a.A)((0, n.A)({}, r), {
                                loading: !1,
                                error: e,
                                updateTime: Date.now()
                            }))
                        }))
                    }))
                }), (0, i.A)(t).concat([p])), (0, a.A)((0, n.A)({}, h), {
                    onRefresh: function() {
                        return d(Date.now)
                    }
                })
            }
            var f = function(e, t, r) {
                return s(e, t, r)
            }
        },
        GlbY: (e, t, r) => {
            r.d(t, {
                Ay: () => i,
                Tq: () => c,
                u4: () => o
            });
            var n = r("BK7R"),
                a = r("x7JS"),
                c = a.A;
            const i = a.A;
            var o = function(e, t, r) {
                try {
                    (0, a.A)(e, (0, n.A)({}, t), r)
                } catch (c) {}
            }
        },
        x7JS: (e, t, r) => {
            r.d(t, {
                A: () => l
            });
            var n, a = r("BK7R"),
                c = r("QUKP"),
                i = r("gZfF"),
                o = r("blBx"),
                u = function(e) {
                    location.origin.includes("localhost") && ("undefined" !== typeof(e || {}).df_2 && console.error("@binance/track warning: df_2 is lang code, cannot be modified, please use another field name!"))
                },
                s = function(e, t, r) {
                    var n = "undefined" !== typeof e[t] ? e[t] : e[r];
                    if ("undefined" === typeof n) throw new Error("".concat(t, " is require"));
                    e[t] = n
                },
                f = function(e) {
                    var t = "undefined" === typeof e ? "undefined" : (0, o.A)(e);
                    return "number" === t || "string" === t || "boolean" === t
                };
            const l = function(e, t, r) {
                var o = null,
                    l = function(e, t, r) {
                        if ("string" === typeof e) {
                            u(t);
                            var n = t || {},
                                o = (n.df_2, (0, i.A)(n, ["df_2"]));
                            return {
                                info: (0, c.A)((0, a.A)({}, o), {
                                    eventName: e
                                }),
                                opt: r
                            }
                        }
                        if ("object" === typeof e) {
                            u(e);
                            var s = e || {};
                            return s.df_2, {
                                info: (0, i.A)(s, ["df_2"]),
                                opt: t
                            }
                        }
                        throw new Error("params is error")
                    }(e, t, r),
                    p = l.info,
                    d = void 0 === p ? {} : p,
                    v = l.opt,
                    h = d.eventName,
                    m = (0, i.A)(d, ["eventName"]);
                try {
                    s(d, "eventName"), s(d, "elementID", "elementId"), s(d, "pageName", "ScreenName"),
                        function(e) {
                            if ("object" === typeof e) Object.entries(e).forEach((function(e) {
                                if (Array.isArray(e[1])) {
                                    if (e[1].filter((function(e) {
                                            return !f(e)
                                        })).length > 0) throw new Error("extraInfo key:".concat(e[0], " array data limit string/number/boolean"))
                                } else if (!f(e[1])) throw new Error("extraInfo key:".concat(e[0], " limited string/number/array/boolean"))
                            }));
                            else if ("undefined" !== typeof e) throw new Error("extraInfo must be a object")
                        }(null === d || void 0 === d ? void 0 : d.extraInfo)
                } catch (g) {
                    o = g
                }
                var y = n && n(h, m, function(e) {
                    return "function" === typeof e ? {
                        callback: e
                    } : "object" === typeof e ? e : {}
                }(v));
                return o ? Promise.reject(o) : y
            }
        },
        cKr8: (e, t, r) => {
            r.d(t, {
                A: () => g
            });
            var n = r("M5j3"),
                a = r("gZfF"),
                c = r("N/Z2"),
                i = r("DTvD"),
                o = r.n(i),
                u = r("f+pp"),
                s = r("6aZm"),
                f = r("LCuF"),
                l = (0, s.UF)("uikit-core", "VisuallyHidden");
            const p = function(e) {
                var t = e.children;
                return l(""), o().createElement(f.A, {
                    as: "span",
                    __css: {
                        border: "0px",
                        clip: "rect(0px, 0px, 0px, 0px)",
                        height: "1px",
                        width: "1px",
                        margin: "-1px",
                        padding: "0px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        position: "absolute"
                    }
                }, t)
            };

            function d() {
                var e = (0, c.A)(["\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n  }\n  20% {\n    transform: scaleY(1.0);\n  }\n"]);
                return d = function() {
                    return e
                }, e
            }
            var v = (0, s.UF)("uikit-core", "Spinner"),
                h = (0, i.forwardRef)((function(e, t) {
                    e.variant;
                    var r = e.itemsColor,
                        c = void 0 === r ? "primary" : r,
                        i = e.label,
                        u = (0, a.A)(e, ["variant", "itemsColor", "label"]);
                    v("");
                    var s = Array(4).fill(1).map((function(e, t) {
                        return "-".concat(t / 10, "s")
                    })).reverse();
                    return o().createElement(f.A, (0, n.A)({
                        ref: t
                    }, u, {
                        __css: {
                            display: "flex",
                            width: "30px",
                            height: "30px",
                            alignItems: "center",
                            justifyContent: "space-between"
                        }
                    }), i && o().createElement(p, null, i), s.map((function(e, t) {
                        return o().createElement(y, {
                            key: t,
                            delay: e,
                            color: c
                        })
                    })))
                })),
                m = (0, u.i7)(d()),
                y = function(e) {
                    var t = e.delay,
                        r = e.color;
                    return o().createElement(f.A, {
                        __css: {
                            backgroundColor: r,
                            height: "100%",
                            width: "3px",
                            animation: "".concat(m, " 1.2s infinite ease-in-out"),
                            animationDelay: t
                        }
                    })
                };
            h.displayName = "Spinner";
            const g = h
        },
        Hd3t: (e, t, r) => {
            function n(e, t) {
                void 0 === t && (t = {});
                for (var r = function(e) {
                        for (var t = [], r = 0; r < e.length;) {
                            var n = e[r];
                            if ("*" !== n && "+" !== n && "?" !== n)
                                if ("\\" !== n)
                                    if ("{" !== n)
                                        if ("}" !== n)
                                            if (":" !== n)
                                                if ("(" !== n) t.push({
                                                    type: "CHAR",
                                                    index: r,
                                                    value: e[r++]
                                                });
                                                else {
                                                    var a = 1,
                                                        c = "";
                                                    if ("?" === e[o = r + 1]) throw new TypeError('Pattern cannot start with "?" at ' + o);
                                                    for (; o < e.length;)
                                                        if ("\\" !== e[o]) {
                                                            if (")" === e[o]) {
                                                                if (0 === --a) {
                                                                    o++;
                                                                    break
                                                                }
                                                            } else if ("(" === e[o] && (a++, "?" !== e[o + 1])) throw new TypeError("Capturing groups are not allowed at " + o);
                                                            c += e[o++]
                                                        } else c += e[o++] + e[o++];
                                                    if (a) throw new TypeError("Unbalanced pattern at " + r);
                                                    if (!c) throw new TypeError("Missing pattern at " + r);
                                                    t.push({
                                                        type: "PATTERN",
                                                        index: r,
                                                        value: c
                                                    }), r = o
                                                }
                            else {
                                for (var i = "", o = r + 1; o < e.length;) {
                                    var u = e.charCodeAt(o);
                                    if (!(u >= 48 && u <= 57 || u >= 65 && u <= 90 || u >= 97 && u <= 122 || 95 === u)) break;
                                    i += e[o++]
                                }
                                if (!i) throw new TypeError("Missing parameter name at " + r);
                                t.push({
                                    type: "NAME",
                                    index: r,
                                    value: i
                                }), r = o
                            } else t.push({
                                type: "CLOSE",
                                index: r,
                                value: e[r++]
                            });
                            else t.push({
                                type: "OPEN",
                                index: r,
                                value: e[r++]
                            });
                            else t.push({
                                type: "ESCAPED_CHAR",
                                index: r++,
                                value: e[r++]
                            });
                            else t.push({
                                type: "MODIFIER",
                                index: r,
                                value: e[r++]
                            })
                        }
                        return t.push({
                            type: "END",
                            index: r,
                            value: ""
                        }), t
                    }(e), n = t.prefixes, c = void 0 === n ? "./" : n, i = "[^" + a(t.delimiter || "/#?") + "]+?", o = [], u = 0, s = 0, f = "", l = function(e) {
                        if (s < r.length && r[s].type === e) return r[s++].value
                    }, p = function(e) {
                        var t = l(e);
                        if (void 0 !== t) return t;
                        var n = r[s],
                            a = n.type,
                            c = n.index;
                        throw new TypeError("Unexpected " + a + " at " + c + ", expected " + e)
                    }, d = function() {
                        for (var e, t = ""; e = l("CHAR") || l("ESCAPED_CHAR");) t += e;
                        return t
                    }; s < r.length;) {
                    var v = l("CHAR"),
                        h = l("NAME"),
                        m = l("PATTERN");
                    if (h || m) {
                        var y = v || ""; - 1 === c.indexOf(y) && (f += y, y = ""), f && (o.push(f), f = ""), o.push({
                            name: h || u++,
                            prefix: y,
                            suffix: "",
                            pattern: m || i,
                            modifier: l("MODIFIER") || ""
                        })
                    } else {
                        var g = v || l("ESCAPED_CHAR");
                        if (g) f += g;
                        else if (f && (o.push(f), f = ""), l("OPEN")) {
                            y = d();
                            var w = l("NAME") || "",
                                A = l("PATTERN") || "",
                                b = d();
                            p("CLOSE"), o.push({
                                name: w || (A ? u++ : ""),
                                pattern: w && !A ? i : A,
                                prefix: y,
                                suffix: b,
                                modifier: l("MODIFIER") || ""
                            })
                        } else p("END")
                    }
                }
                return o
            }

            function a(e) {
                return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1")
            }

            function c(e) {
                return e && e.sensitive ? "" : "i"
            }

            function i(e, t, r) {
                return function(e, t, r) {
                    void 0 === r && (r = {});
                    for (var n = r.strict, i = void 0 !== n && n, o = r.start, u = void 0 === o || o, s = r.end, f = void 0 === s || s, l = r.encode, p = void 0 === l ? function(e) {
                            return e
                        } : l, d = "[" + a(r.endsWith || "") + "]|$", v = "[" + a(r.delimiter || "/#?") + "]", h = u ? "^" : "", m = 0, y = e; m < y.length; m++) {
                        var g = y[m];
                        if ("string" === typeof g) h += a(p(g));
                        else {
                            var w = a(p(g.prefix)),
                                A = a(p(g.suffix));
                            if (g.pattern)
                                if (t && t.push(g), w || A)
                                    if ("+" === g.modifier || "*" === g.modifier) {
                                        var b = "*" === g.modifier ? "?" : "";
                                        h += "(?:" + w + "((?:" + g.pattern + ")(?:" + A + w + "(?:" + g.pattern + "))*)" + A + ")" + b
                                    } else h += "(?:" + w + "(" + g.pattern + ")" + A + ")" + g.modifier;
                            else h += "(" + g.pattern + ")" + g.modifier;
                            else h += "(?:" + w + A + ")" + g.modifier
                        }
                    }
                    if (f) i || (h += v + "?"), h += r.endsWith ? "(?=" + d + ")" : "$";
                    else {
                        var x = e[e.length - 1],
                            E = "string" === typeof x ? v.indexOf(x[x.length - 1]) > -1 : void 0 === x;
                        i || (h += "(?:" + v + "(?=" + d + "))?"), E || (h += "(?=" + v + "|" + d + ")")
                    }
                    return new RegExp(h, c(r))
                }(n(e, r), t, r)
            }

            function o(e, t, r) {
                return e instanceof RegExp ? function(e, t) {
                    if (!t) return e;
                    var r = e.source.match(/\((?!\?)/g);
                    if (r)
                        for (var n = 0; n < r.length; n++) t.push({
                            name: n,
                            prefix: "",
                            suffix: "",
                            modifier: "",
                            pattern: ""
                        });
                    return e
                }(e, t) : Array.isArray(e) ? function(e, t, r) {
                    var n = e.map((function(e) {
                        return o(e, t, r).source
                    }));
                    return new RegExp("(?:" + n.join("|") + ")", c(r))
                }(e, t, r) : i(e, t, r)
            }
            r.d(t, {
                MM: () => o
            })
        }
    }
]);
//# debugId=e8461f66-77e0-57b9-b54a-4048deb25a8a